import ReviewModel from "../models/review.model.js";
import ProductModel from "../models/product.model.js";
import { statusCode } from "../config/statusCode.config.js";
import { BaseResponse } from "../config/BaseResponse.config.js";


const ReviewController = {
    async createReview(req, res){
        try {
            const {productId} = req.params;
            const product = await ProductModel.findById(productId);
            const newReview = new ReviewModel(req.body);
            newReview.author = req.user.id;
            product.reviews.push(newReview);
            await newReview.save();
            await product.save();
            return res.status(statusCode.CREATED).json(BaseResponse.success('Tạo review thành công', product));
        } catch (error) {
            console.log('Create reiew: ', error);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.error('Tạo review thất bại', error));
        }
    },

    async createFeedBack(req, res){
        try {
            const {id} = req.params;
            // return console.log('feedback: ', req.body.feedback);
            const review = await ReviewModel.findByIdAndUpdate(id, {feedback:  req.body.feedback}, {new: true});
            return res.status(statusCode.CREATED).json(BaseResponse.success('Thêm feedback thành công', review));
        } catch (error) {
            console.log('create feedback: ', error);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.error('Thêm feedback thất bại', error));
        }
    },

    async deleteReview(req, res){
        try {
            const review = await ReviewModel.findByIdAndDelete(req.params.id);
            return res.status(statusCode.OK).json(BaseResponse.success('Xóa đánh giá thành công', null));
            
        } catch (error) {
            console.log('delete Review: ', error);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.error('Xóa đánh giá thất bại', error));
        }
    }
}

export default ReviewController;