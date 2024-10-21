import { BaseResponse } from "../config/BaseResponse.config.js";
import { statusCode } from "../config/statusCode.config.js";
import CartModel from "../models/cart.model.js";

const CartController = {
    async getCartItems(req, res) {
        const { skip, take } = req.query;
        const products = await CartModel.find({ user: req.user._id })
            .skip(skip)
            .limit(take);
        const total = await CartModel.countDocuments({ user: req.user._id });
        return res.status(statusCode.OK).json(
            BaseResponse.success("Lấy giỏ hàng thành công", {
                products,
                total,
            })
        );
    },

    async createCartItem(req, res) {
        const userId = req.user._id;
        const { storeProduct, quantity } = req.body;
        const existCart = await CartModel.findOne({
            user: userId,
            storeProduct: storeProduct,
        });

        let newCart = null;
        if (existCart) {
            existCart.quantity += quantity;
            newCart = await existCart.save();
        } else {
            const cart = new CartModel({
                user: userId,
                storeProduct: storeProduct,
                quantity: quantity,
            });
            newCart = await cart.save();
        }
        return res
            .status(statusCode.OK)
            .json(
                BaseResponse.success("Thêm vào giỏ hàng thành công", newCart)
            );
    },
};

export default CartController;
