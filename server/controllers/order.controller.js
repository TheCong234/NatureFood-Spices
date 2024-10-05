import { BaseResponse } from "../config/BaseResponse.config.js";
import { statusCode } from "../config/statusCode.config.js";
import OrderModel from "../models/order.model.js";

const OrderController = {
    async getMyOrders(req, res) {
        const userId = req.user._id;
        const skip = parseInt(req.query.skip) || 0;
        const take = parseInt(req.query.take) || 10;
        const orders = await OrderModel.find({ user: userId })
            .sort({ orderDate: -1 })
            .skip(skip)
            .limit(take);
        const total = await OrderModel.countDocuments({ user: userId });

        return res.status(statusCode.CREATED).json(
            BaseResponse.success("Lấy các đơn hàng thành công", {
                orders,
                total,
            })
        );
    },

    async createOrders(req, res) {
        const orders = req.body.orders;

        for (let order of orders) {
            const orderData = new OrderModel(order);
            orderData.user = req.user._id;
            await orderData.save();
        }
        return res
            .status(statusCode.CREATED)
            .json(BaseResponse.success("Tạo đơn hàng thành công", null));
    },

    async updateOrder(req, res) {
        const { id, status } = req.params;
        const updatedOrder = await OrderModel.findByIdAndUpdate(
            id,
            { status: status },
            { new: true, runValidators: true }
        );
        if (!updatedOrder) {
            return res
                .status(statusCode.NOT_FOUND)
                .json(BaseResponse.error("Lỗi, không tìm thấy đơn hàng", null));
        }
        return res
            .status(statusCode.OK)
            .json(
                BaseResponse.success(
                    "Cập nhật đơn hàng thành công",
                    updatedOrder
                )
            );
    },
};

export default OrderController;
