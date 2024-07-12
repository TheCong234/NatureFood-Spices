import ReviewModel from "../models/review.model.js";
import ProductModel from "../models/product.model.js";
import { statusCode } from "../config/statusCode.config.js";
import { BaseResponse } from "../config/BaseResponse.config.js";


const ReviewController = {
    async createReview(req, res){
        try {
            const {id} = req.params;
            const product = await ProductModel.findById(id);
            const newReview = new ReviewModel(req.body);
            product.reviews.push(newReview);
            await newReview.save();
            await product.save();
            return res.status(statusCode.CREATED).json(BaseResponse.success('Tạo review thành công', product));
        } catch (error) {
            console.log('Create reiew: ', error);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.error('Tạo review thất bại', error));
        }
    }
}

export default ReviewController;