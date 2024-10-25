import ReviewModel from "../models/review.model.js";
import ProductModel from "../models/product.model.js";
import { statusCode } from "../config/statusCode.config.js";
import { BaseResponse } from "../config/BaseResponse.config.js";

const ReviewController = {
    async getReviews(req, res) {
        const { storeProductId } = req.params;
        const { skip, take } = req.query;
        const reviews = await ReviewModel.find({ storeProduct: storeProductId }).populate("author").sort({ createdAt: -1 }).skip(skip).limit(take);
        const total = await ReviewModel.countDocuments({ storeProduct: storeProductId });
        return res.status(statusCode.OK).json(BaseResponse.success("Lấy danh sách review thành công", { reviews, total }));
    },

    async createReview(req, res) {
        const { storeProductId } = req.params;
        const review = new ReviewModel({ ...req.body, author: req.user._id, storeProduct: storeProductId });
        const newReview = await review.save();
        const populatedReview = await ReviewModel.findById(newReview._id).populate("author");
        return res.status(statusCode.CREATED).json(BaseResponse.success("Tạo review thành công", populatedReview));
    },

    async updateReview(req, res) {
        const { reviewId } = req.params;
        const review = await ReviewModel.findByIdAndUpdate(reviewId, req.body, { new: true });
        return res.status(statusCode.OK).json(BaseResponse.success("Thêm feedback thành công", review));
    },

    async deleteReview(req, res) {
        const { reviewId } = req.params;
        const review = await ReviewModel.findByIdAndDelete(reviewId);
        return res.status(statusCode.OK).json(BaseResponse.success("Xóa đánh giá thành công", review));
    },
};

export default ReviewController;
