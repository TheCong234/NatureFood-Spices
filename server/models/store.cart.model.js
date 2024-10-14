import mongoose from "mongoose";
const Schema = mongoose.Schema;

const StoreCartSchema = Schema(
    {
        store: {
            type: Schema.Types.ObjectId,
            ref: "Store",
            required: true,
        },
        items: [
            {
                productId: {
                    type: Schema.Types.ObjectId,
                    ref: "Product",
                    required: true,
                },
                quantity: {
                    type: Number,
                    default: 1,
                    min: 1,
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);

const StoreCartModel = mongoose.model("StoreCart", StoreCartSchema);
export default StoreCartModel;
