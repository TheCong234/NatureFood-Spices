import { BaseResponse } from "../config/BaseResponse.config.js";
import { statusCode } from "../config/statusCode.config.js";
import CartModel from "../models/cart.model.js";

const CartController = {
    async modifyItem(req, res){
        try {
            const {productId, quantity} = req.query;
            const cart = await CartModel.findById(req.user.cart);
            for(let item of cart.items){
                if(item.productId == productId){
                    item.quantity += parseInt(quantity);
                    if(item.quantity < 1){
                        item.quantity = 1;
                    }
                    const updatedCart = await cart.save();
                    return res.status(statusCode.OK).json(BaseResponse.success('Thêm sl sản phẩm vào giỏ hàng thành công', updatedCart));
                }
            }
            cart.items.push({productId, quantity});
            const updatedCart = await cart.save();
            return res.status(statusCode.OK).json(BaseResponse.success('Thêm sản phẩm vào giỏ hàng thành công', updatedCart));
        } catch (error) {
            console.log('Add item: ', error);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.error('Thêm sản phầm vào giỏ hàng thất bại', error));
        }
    },

    async deleteItem(req, res){
        try {
            const {productId} = req.params;
            const cart = await CartModel.findById(req.user.cart);
            cart.items = cart.items.filter(item => item.productId != productId);
            const newCart = await cart.save();
            return res.status(statusCode.OK).json(BaseResponse.success('Xóa sản phẩm khỏi giỏ hàng thành công', newCart));
        } catch (error) {
            console.log('delete item: ', error);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.error('Xóa sản phẩm trong giỏ hàng thất bại', error));
        }
    }

    
}

export default CartController;