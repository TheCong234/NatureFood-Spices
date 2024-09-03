import mongoose from "mongoose";

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

const BannerSchema = new Schema(
    {
        storeId: {
            type: Schema.Types.ObjectId,
            ref: "Store",
            required: true,
        },
        image: ImageSchema,
        exprired: {
            type: Boolean,
            default: false,
        },
        url: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const BannerModel = mongoose.model("Banner", BannerSchema);
export default BannerModel;
