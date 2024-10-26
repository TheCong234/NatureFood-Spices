import mongoose from "mongoose";
import { BaseResponse } from "../config/BaseResponse.config.js";
import { statusCode } from "../config/statusCode.config.js";
import StoreProductModel from "../models/product.store.model.js";
import StoreCartModel from "../models/store.cart.model.js";
import StoreModel from "../models/store.models.js";

const StoreProductController = {
    async getStoreProducts(req, res) {
        const { skip, take } = req.query;
        const products = await StoreProductModel.find().populate("productId").skip(skip).limit(take);
        const total = await StoreProductModel.countDocuments();
        return res.status(statusCode.OK).json(
            BaseResponse.success("Lấy sản phẩm sale thành công", {
                products,
                total,
            })
        );
    },

    async getStoreProduct(req, res) {
        const { storeProductId } = req.params;
        const product = await StoreProductModel.findById(storeProductId).populate("productId").populate("storeId");
        return res.status(statusCode.OK).json(BaseResponse.success("Lấy thông tin sản phẩm thành công", product));
    },

    async getStoreProductsByCategory(req, res) {
        const { categoryId } = req.params;
        console.log(categoryId);

        const { skip, take } = req.query;
        const storeProducts = await StoreProductModel.aggregate([
            {
                $lookup: {
                    from: "products", // Tên collection products
                    localField: "productId", // Trường tham chiếu trong storeProduct
                    foreignField: "_id", // Trường _id của product
                    as: "rootProduct", // Tên cho kết quả nối
                },
            },
            {
                $unwind: "$rootProduct", // Tách mảng rootProduct thành các object riêng biệt
            },
            {
                $match: {
                    "rootProduct.category": new mongoose.Types.ObjectId(categoryId), // Lọc theo category của Product
                },
            },
            {
                $skip: parseInt(skip), // Bỏ qua số tài liệu đã chỉ định
            },
            {
                $limit: parseInt(take), // Giới hạn số tài liệu trả về
            },
        ]);
        return res.status(statusCode.OK).json(
            BaseResponse.success("Lấy sản phẩm theo danh mục thành công", {
                products: storeProducts,
                total: storeProducts.length,
            })
        );
    },

    async createStoreProducts(req, res) {
        const store = req.user.store;
        const storeCart = await StoreCartModel.find({ store });
        for (let item of storeCart) {
            const existingProduct = await StoreProductModel.findOne({ storeId: store, productId: item.product });
            if (existingProduct) {
                await StoreProductModel.findByIdAndUpdate(existingProduct._id, { $inc: { stock: item.quantity } });
            } else {
                const data = {
                    productId: item.product,
                    storeId: store,
                    stock: item.quantity,
                };
                const product = new StoreProductModel(data);
                await product.save();
            }
        }
        await StoreCartModel.deleteMany({ store });
        return res.status(statusCode.OK).json(BaseResponse.success("Thêm sản phẩm cửa hàng thành công", null));
    },
};

export default StoreProductController;
