import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CartSchema = Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            require: true,
        },
        items: [
            {
                productId: {
                    type: Schema.Types.ObjectId,
                    ref: "Product",
                    require: true,
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
