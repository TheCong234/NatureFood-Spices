import express from "express";
import { statusCode } from "../config/statusCode.config.js";
import { BaseResponse } from "../config/BaseResponse.config.js";
import UserModel from "../models/user.model.js";
import StoreModel from "../models/store.models.js";
import ProductModel from "../models/product.model.js";

const FavoriteController = {
    async getAll(req, res) {
        try {
            const favoriteList = req.user.favorite;
            return res
                .status(statusCode.OK)
                .json(
                    BaseResponse.success(
                        "Lấy danh sách yêu thích thành công",
                        favoriteList
                    )
                );
        } catch (error) {
            console.log("get all favorite: ", error);
            return res
                .status(statusCode.INTERNAL_SERVER_ERROR)
                .json(
                    BaseResponse.error(
                        "Lấy danh sách yêu thích thất bại",
                        error
                    )
                );
        }
    },

    async modifyFavorite(req, res) {
        try {
            const { id } = req.params;
            let favoriteList = req.user.favorite;
            let mess = "";
            if (favoriteList.includes(id)) {
                favoriteList = favoriteList.filter((f) => f != id);
                mess = "Bỏ yêu thích thành công";
            } else {
                favoriteList.push(id);
                mess = "Thêm yêu thích thành công";
            }
            const user = await UserModel.findByIdAndUpdate(
                req.user._id,
                { favorite: favoriteList },
                { new: true }
            );
            return res
                .status(statusCode.OK)
                .json(BaseResponse.success(mess, user.favorite));
        } catch (error) {
            console.log("Modify favorite: ", error);
            return res
                .status(statusCode.INTERNAL_SERVER_ERROR)
                .json(
                    BaseResponse.error(
                        "Lấy danh sách yêu thích thất bại",
                        error
                    )
                );
        }
    },

    async addFavoriteProduct(req, res) {
        const product = await ProductModel.findById(req.params.id);
        const store = await StoreModel.findOneAndUpdate(
            { owner: req.user._id },
            { $addToSet: { favorite: product } }
        );

        return res
            .status(statusCode.OK)
            .json(BaseResponse.success("Đã thêm vào yêu thích", product));
    },

    async removeFavoriteProduct(req, res) {
        const store = await StoreModel.findOneAndUpdate(
            { owner: req.user._id },
            { $pull: { favorite: req.params.id } }
        );
        const product = await ProductModel.findById(req.params.id);
        return res
            .status(statusCode.OK)
            .json(BaseResponse.success("Đã xóa yêu thích", product));
    },

    async getFavoriteProducts(req, res) {
        const store = await StoreModel.findOne({
            owner: req.user._id,
        }).populate("favorite");
        const total = store?.favorite?.length;
        return res.status(statusCode.OK).json(
            BaseResponse.success("Thành công", {
                favorite: store?.favorite,
                total,
            })
        );
    },
};

export default FavoriteController;
