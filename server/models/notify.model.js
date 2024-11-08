import mongoose from "mongoose";
const Schema = mongoose.Schema;

const NotifySchema = new Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        message: { type: String, required: true },
        url: { type: String },
        isRead: { type: Boolean, default: false },
    },
    { timestamps: true }
);

const NotifyModel = mongoose.model("Notify", NotifySchema);
export default NotifyModel;
