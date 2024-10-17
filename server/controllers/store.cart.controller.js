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

    async adjustmentStoreCartItem(req, res) {
        const { quantity } = req.body;
        const storeCart = await StoreCartModel.findOne({
            store: req.user.store,
        });

        const item = storeCart.items.find(
            (i) => i._id.toString() == req.params.id
        );

        const newQuantity = item.quantity + quantity;

        if (newQuantity > 1) {
            const storeCart = await StoreCartModel.findOneAndUpdate(
                {
                    store: req.user.store,
                },
                {
                    $set: {
                        "items.$[elem].quantity": newQuantity, // Cập nhật số lượng item
                    },
                },
                {
                    new: true, // Trả về document đã được cập nhật
                    arrayFilters: [{ "elem._id": req.params.id }], // Lọc để cập nhật item đúng
                }
            );
            return res.status(statusCode.OK).json(
                BaseResponse.success("Cập nhật số lượng thành công", {
                    id: req.params.id,
                    quantity: newQuantity,
                })
            );
        }
        return res
            .status(statusCode.OK)
            .json(BaseResponse.success("Cập nhật số lượng thành công", null));
    },
};

export default StoreCartController;
