import express from "express";
import ProductModel from "../models/product.model.js";
import StoreCart from "../models/store.cart.model.js";
import StoreModel from "../models/store.models.js";
import { statusCode } from "../config/statusCode.config.js";
import { BaseResponse } from "../config/BaseResponse.config.js";

const StoreCartController = {
    async addProductToStoreCart(req, res) {
        const { productId, quantity } = req.body;
        const storeCart = await StoreCart.findOne({
            store: req.params.storeId,
        });

        const productIndex = storeCart.items.findIndex(
            (item) => item.productId.toString() == productId.toString()
        );
        if (productIndex !== -1) {
            storeCart.items[productIndex].quantity += quantity;
        } else {
            storeCart.items.push({ productId, quantity });
        }
        await storeCart.save();
        return res.status(statusCode.OK).json(
            BaseResponse.success("Thêm vào giỏ hàng thành công", {
                index: productIndex,
                quantity,
            })
        );
    },
};

export default StoreCartController;
