import { cloudinary } from "../config/cloudinary.config.js";
import CategoryModel from "../models/category.model.js";
import { statusCode } from "../config/statusCode.config.js";
import { BaseResponse } from "../config/BaseResponse.config.js";

const CategoryController = {
    async getCategories(req, res) {
        const categories = await CategoryModel.find({});
        const total = await CategoryModel.countDocuments({});
        return res.status(statusCode.OK).json(
            BaseResponse.success("Lấy danh sách danh mục thành công", {
                categories,
                total,
            })
        );
    },

    async getCategoryById(req, res) {
        const { id } = req.params;
        const category = await CategoryModel.findById(id);
        if (category) {
            return res
                .status(statusCode.OK)
                .json(BaseResponse.success("TÌm thấy danh mục", category));
        } else {
            return res
                .status(statusCode.NOT_FOUND)
                .json(BaseResponse.error("Không tìm thấy danh mục", null));
        }
    },

    async createCategory(req, res) {
        const caregoryData = req.body;
        const newCategory = new CategoryModel(caregoryData);
        const img = req.file;
        newCategory.image = { url: img.path, filename: img.filename };
        const category = await newCategory.save();
        return res
            .status(statusCode.CREATED)
            .json(
                BaseResponse.success("Tạo mới danh mục thành công", category)
            );
    },

    async updateCategory(req, res) {
        const { id } = req.params;
        const updatedCategory = await CategoryModel.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );
        return res
            .status(statusCode.OK)
            .json(
                BaseResponse.success(
                    "Cập nhật danh mục thành công",
                    updatedCategory
                )
            );
    },

    async updateImageCategory(req, res) {
        const { id } = req.params;
        const category = await CategoryModel.findById(id);
        await cloudinary.uploader.destroy(category.image.filename);

        const img = req.file;
        category.image = { url: img.path, filename: img.filename };
        await category.save();
        return res
            .status(statusCode.OK)
            .json(
                BaseResponse.success(
                    "Cập nhật ảnh danh mục thành công",
                    category
                )
            );
    },

    async deleteCategory(req, res) {
        const category = await CategoryModel.findByIdAndDelete(req.params.id);
        return res
            .status(statusCode.OK)
            .json(BaseResponse.success("Đã xóa danh mục", category));
    },
};

export default CategoryController;
