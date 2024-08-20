import mongoose from "mongoose";
import ReviewModel from "../models/review.model.js";
import CartModel from "./cart.model.js";
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    url: {
        type: String,
        required: true,
    },
    filename: {
        type: String,
        required: true,
    },
});

const ProductSchema = mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    weight: Number,
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    inventory: Number,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
    images: [ImageSchema],
    tags: [
        {
            type: Schema.Types.ObjectId,
            ref: "Tag",
        },
    ],
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
});

//xóa liên quan đến sản phẩm (reviews)
ProductSchema.post("findOneAndDelete", async function (doc) {
    if (doc) {
        await ReviewModel.deleteMany({ _id: { $in: doc.reviews } });
        await CartModel.deleteMany({ productId: _id });
    }
});

const ProductModel = mongoose.model("Product", ProductSchema);
export default ProductModel;
