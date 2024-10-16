import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CartSchema = Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        items: [
            {
                productId: {
                    type: Schema.Types.ObjectId,
                    ref: "StoreProduct",
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

const CartModel = mongoose.model("Cart", CartSchema);
export default CartModel;
