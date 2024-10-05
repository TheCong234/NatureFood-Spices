import mongoose from "mongoose";
import { BaseResponse } from "../config/BaseResponse.config.js";
import { statusCode } from "../config/statusCode.config.js";
import StoreProductModel from "../models/product.store.model.js";
import StoreModel from "../models/store.models.js";

const StoreProductController = {
    async getStoreProducts(req, res) {
        const storeProducts = await StoreProductModel.find({});
        return res
            .status(statusCode.OK)
            .json(
                BaseResponse.success(
                    "Lấy tất cả sản phẩm sale thành công",
                    storeProducts
                )
            );
    },

    async getStoreProductsByCategory(req, res) {
        const { category } = req.params;
        console.log(category);

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
                    "rootProduct.category": new mongoose.Types.ObjectId(
                        category
                    ), // Lọc theo category của Product
                },
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
        for (let product of req.body.products) {
            const existingStoreProduct = await StoreProductModel.findOne({
                productId: product._id,
                storeId: req.user.store,
            });
            if (existingStoreProduct) {
                await StoreProductModel.updateOne(
                    { productId: product._id, storeId: req.user.store },
                    { $inc: { stock: product.quantity } }
                );
            } else {
                const productData = new StoreProductModel({
                    productId: product._id,
                    storeId: req.user.store,
                    stock: product.quantity,
                });
                const newProduct = await productData.save();
                const updatedStore = await StoreModel.updateOne(
                    { _id: req.user.store },
                    { $addToSet: { products: newProduct._id } }
                );
            }
        }

        return res
            .status(statusCode.CREATED)
            .json(
                BaseResponse.success(
                    "Thêm sản phẩm vào cửa hàng thành công",
                    null
                )
            );
    },
};

export default StoreProductController;
