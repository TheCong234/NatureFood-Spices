import { cloudinary } from "../config/cloudinary.config.js";
import CategoryModel from "../models/category.model.js";
import { statusCode } from "../config/statusCode.config.js";
import { BaseResponse } from "../config/BaseResponse.config.js";

const CategoryController = {
    async getAllCategory(req, res) {
        try {
            const categories = await CategoryModel.find({});
            return res
                .status(statusCode.OK)
                .json(
                    BaseResponse.success(
                        "Lấy danh sách danh mục thành công",
                        categories
                    )
                );
        } catch (error) {
            console.log(`get categories: ${error}`);
            return res
                .status(statusCode.INTERNAL_SERVER_ERROR)
                .json(BaseResponse.error(error.message, error));
        }
    },

    async getCategoryById(req, res) {
        try {
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
        } catch (error) {
            console.log(`get category by id: ${error}`);
            return res
                .status(statusCode.INTERNAL_SERVER_ERROR)
                .json(BaseResponse.error(error.message, error));
        }
    },

    async createCategory(req, res) {
        try {
            const caregoryData = req.body;
            const newCategory = new CategoryModel(caregoryData);
            const img = req.file;
            newCategory.image = { url: img.path, filename: img.filename };
            const category = await newCategory.save();
            return res
                .status(statusCode.CREATED)
                .json(
                    BaseResponse.success(
                        "Tạo mới danh mục thành công",
                        category
                    )
                );
        } catch (error) {
            console.log(`create category: ${error}`);
            return res
                .status(statusCode.INTERNAL_SERVER_ERROR)
                .json(BaseResponse.error(error.message, error));
        }
    },

    async updateCategory(req, res) {
        try {
            const { id } = req.params;
            const updatedCategory = await CategoryModel.findByIdAndUpdate(
                id,
                req.body,
                { new: true }
            );
            if (updatedCategory) {
                return res
                    .status(statusCode.OK)
                    .json(
                        BaseResponse.success(
                            "Cập nhật danh mục thành công",
                            updatedCategory
                        )
                    );
            } else {
                return res
                    .status(statusCode.NO_CONTENT)
                    .json(
                        BaseResponse.success(
                            "Tạo mới danh mục thất bại vui lòng thử lại",
                            null
                        )
                    );
            }
        } catch (error) {
            console.log(`update category: ${error}`);
            return res
                .status(statusCode.INTERNAL_SERVER_ERROR)
                .json(BaseResponse.error(error.message, error));
        }
    },

    async updateImageCategory(req, res) {
        try {
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
        } catch (error) {
            console.log(`update image category: ${error}`);
            return res
                .status(statusCode.INTERNAL_SERVER_ERROR)
                .json(BaseResponse.error(error.message, error));
        }
    },
};

export default CategoryController;
