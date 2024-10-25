import ReviewModel from "../models/review.model.js";
import ProductModel from "../models/product.model.js";
import { statusCode } from "../config/statusCode.config.js";
import { BaseResponse } from "../config/BaseResponse.config.js";

const ReviewController = {
    async getReviews(req, res) {
        const { storeProductId } = req.params;
        const { skip, take } = req.query;
        console.log(storeProductId, skip, take);

        const reviews = await ReviewModel.find({ storeProduct: storeProductId }).populate("author").skip(skip).limit(take);
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

    async createFeedBack(req, res) {
        try {
            const { id } = req.params;
            // return console.log('feedback: ', req.body.feedback);
            const review = await ReviewModel.findByIdAndUpdate(id, { feedback: req.body.feedback }, { new: true });
            return res.status(statusCode.CREATED).json(BaseResponse.success("Thêm feedback thành công", review));
        } catch (error) {
            console.log("create feedback: ", error);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.error("Thêm feedback thất bại", error));
        }
    },

    async deleteReview(req, res) {
        try {
            const review = await ReviewModel.findByIdAndDelete(req.params.id);
            return res.status(statusCode.OK).json(BaseResponse.success("Xóa đánh giá thành công", null));
        } catch (error) {
            console.log("delete Review: ", error);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.error("Xóa đánh giá thất bại", error));
        }
    },
};

export default ReviewController;
