import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ReviewSchema = Schema(
    {
        body: String,
        rating: {
            type: Number,
            require: true,
            min: 1,
            max: 5,
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        feedback: String,
    },
    {
        timestamps: true,
    }
);

const ReviewModel = mongoose.model("Review", ReviewSchema);
export default ReviewModel;
