import { BaseResponse } from "../config/BaseResponse.config.js";
import { statusCode } from "../config/statusCode.config.js";
import CartModel from "../models/cart.model.js";

const CartController = {
    async getItemsCart(req, res) {
        const cartItems = await CartModel.findOne(
            { _id: req.user.cart },
            { items: 1 }
        );
        return res
            .status(statusCode.OK)
            .json(
                BaseResponse.success(
                    "Lấy sản phẩm giỏ hàng thành công",
                    cartItems
                )
            );
    },

    async addItem(req, res) {
        const { productId, quantity } = req.body;
        const cart = await CartModel.findOne({ _id: req.user.cart });
        const existingItem = cart.items.find(
            (item) => item.productId.toString() === productId.toString()
        );
        if (existingItem) {
            existingItem.quantity =
                parseInt(existingItem.quantity) + parseInt(quantity);
        } else {
            cart.items.push({ productId: productId, quantity: quantity });
        }
        const updatedCart = await cart.save();

        return res
            .status(statusCode.OK)
            .json(
                BaseResponse.success(
                    "Thêm sản phẩm vào giỏ hàng thành công",
                    updatedCart
                )
            );
    },

    async removeItem(req, res) {
        const response = await Cart.findOneAndUpdate(
            { _id: req.user.cart },
            { $pull: { items: { productId: req.body.productId } } },
            { new: true }
        );
        return res
            .status(statusCode.OK)
            .json(
                BaseResponse.success(
                    "Xóa sản phẩm khỏi giỏ hàng thành công",
                    response
                )
            );
    },
};

export default CartController;
