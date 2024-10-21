import mongoose from "mongoose";
import { BaseResponse } from "../config/BaseResponse.config.js";
import { statusCode } from "../config/statusCode.config.js";
import StoreProductModel from "../models/product.store.model.js";
import StoreCartModel from "../models/store.cart.model.js";
import StoreModel from "../models/store.models.js";

const StoreProductController = {
    async getStoreProducts(req, res) {
        const { skip, take } = req.query;
        const products = await StoreProductModel.find()
            .populate("productId")
            .skip(skip)
            .limit(take);
        const total = await StoreProductModel.countDocuments();
        return res.status(statusCode.OK).json(
            BaseResponse.success("Lấy sản phẩm sale thành công", {
                products,
                total,
            })
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
        const storeCart = await StoreCartModel.findOne({
            store: req.params.storeId,
        });
        for (let product of storeCart.items) {
            const existingStoreProduct = await StoreProductModel.findOne({
                productId: product.product,
                storeId: new mongoose.Types.ObjectId(req.params.storeId),
            });
            if (existingStoreProduct) {
                await StoreProductModel.updateOne(
                    {
                        productId: product.product,
                        storeId: new mongoose.Types.ObjectId(
                            req.params.storeId
                        ),
                    },
                    { $inc: { stock: product.quantity } }
                );
            } else {
                const productData = new StoreProductModel({
                    productId: product.product,
                    storeId: req.params.storeId,
                    stock: product.quantity,
                });
                const newProduct = await productData.save();
                await StoreModel.updateOne(
                    { _id: req.params.storeId },
                    { $addToSet: { products: newProduct._id } }
                );
            }
        }
        storeCart.items = [];
        await storeCart.save();

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
