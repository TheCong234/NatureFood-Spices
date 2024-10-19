import { statusCode } from "../config/statusCode.config.js";
import { BaseResponse } from "../config/BaseResponse.config.js";
import BlogModel from "../models/blog.model.js";

const BlogController = {
    async createBlog(req, res) {
        const blog = new BlogModel(req.body);
        blog.image = { url: req.file.path, filename: req.file.filename };
        const newBlog = await blog.save();
        return res
            .status(statusCode.OK)
            .json(BaseResponse.success("Tạo Blog thành công", newBlog));
    },
};

export default BlogController;
