import express from "express";
import ProductModel from "../models/product.model.js";
import StoreCart from "../models/store.cart.model.js";
import StoreModel from "../models/store.models.js";
import { statusCode } from "../config/statusCode.config.js";
import { BaseResponse } from "../config/BaseResponse.config.js";
import StoreCartModel from "../models/store.cart.model.js";

const StoreCartController = {
    async addProductToStoreCart(req, res) {
        const { product, quantity } = req.body;
        const storeCart = await StoreCart.findOne({
            store: req.params.storeId,
        });

        const productIndex = storeCart.items.findIndex(
            (item) => item.product.toString() == product.toString()
        );
        if (productIndex !== -1) {
            storeCart.items[productIndex].quantity += quantity;
        } else {
            storeCart.items.push({ product, quantity });
        }
        await storeCart.save();
        return res.status(statusCode.OK).json(
            BaseResponse.success("Thêm vào giỏ hàng thành công", {
                index: productIndex,
                quantity,
            })
        );
    },

    async deleteStoreCartItem(req, res) {
        await StoreCartModel.findOneAndUpdate(
            { store: req.user.store },
            { $pull: { items: { _id: req.params.id } } }
        );
        return res.status(statusCode.OK).json(
            BaseResponse.success("Xóa item giỏ hàng thành công", {
                id: req.params.id,
            })
        );
    },

    async getStoreCartItems(req, res) {
        const storeCart = await StoreCartModel.findOne({
            store: req.user.store,
        }).populate("items.product");
        if (storeCart) {
            const products = storeCart.items;
            const total = storeCart.items.length;
            return res.status(statusCode.OK).json(
                BaseResponse.success("Lấy giỏ hàng thành công", {
                    products,
                    total,
                })
            );
        }
        return res.status(statusCode.OK).json(
            BaseResponse.success("Lấy giỏ hàng thành công", {
                products: [],
                total: 0,
            })
        );
    },
};

export default StoreCartController;
