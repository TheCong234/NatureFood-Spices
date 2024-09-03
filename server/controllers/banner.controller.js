import { statusCode } from "../config/statusCode.config.js";
import { BaseResponse } from "../config/BaseResponse.config.js";
import BannerModel from "../models/banner.model.js";

const BannerController = {
    async getBannersByCurrentUser(req, res) {
        const banners = await BannerModel.find({ storeId: req.user.store });
        return res
            .status(statusCode.OK)
            .json(BaseResponse.success("Lấy banners thành công", banners));
    },

    async getBanners(req, res) {
        const banners = await BannerModel.find();
        return res
            .status(statusCode.OK)
            .json(BaseResponse.success("Lấy banners thành công", banners));
    },
    async create(req, res) {
        const banner = new BannerModel({
            storeId: req.user.store,
            image: { url: req.file.path, filename: req.file.filename },
            url: req.body.url,
        });
        const newBanner = await banner.save();
        return res
            .status(statusCode.CREATED)
            .json(BaseResponse.success("Tạo mới banner thành công", newBanner));
    },
    async update(req, res) {
        if (req.file) {
            const banner = await BannerModel.findById(req.params.id);
            banner.image = { url: req.file.path, filename: req.file.filename };
            await banner.save();
        }
        const updatedBanner = await BannerModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        return res
            .status(statusCode.OK)
            .json(
                BaseResponse.success(
                    "Cập nhật banner thành công",
                    updatedBanner
                )
            );
    },
};

export default BannerController;
