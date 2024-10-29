import { BaseResponse } from "../config/BaseResponse.config.js";
import { statusCode } from "../config/statusCode.config.js";
import OrderModel from "../models/order.model.js";
import CartModel from "../models/cart.model.js";
import UserModel from "../models/user.model.js";

const OrderController = {
    async getCustomerOrder(req, res) {
        const { orderId } = req.params;
        const order = await OrderModel.findById(orderId).populate("store").populate({
            path: "products.storeProduct",
            populate: "productId",
        });
        return res.status(statusCode.OK).json(BaseResponse.success("Lấy thông tin đơn hàng thành công", order));
    },

    async getCustomerOrders(req, res) {
        const user = req.user._id;
        const { skip, take, type, date } = req.query;
        const filter = { user, ...(type !== "all" && { status: parseInt(type) || 0 }) };

        const [orders, total] = await Promise.all([
            OrderModel.find(filter)
                .populate("store")
                .sort({ createdAt: parseInt(date) || -1 })
                .skip(skip)
                .limit(take || 10),
            OrderModel.countDocuments(filter),
        ]);

        return res.status(statusCode.OK).json(BaseResponse.success("Lấy các đơn hàng thành công", { orders, total }));
    },

    async createSellerOrders(req, res) {
        const orders = req.body.orders;

        for (let order of orders) {
            const orderData = new OrderModel(order);
            orderData.user = req.user._id;
            await orderData.save();
        }
        return res.status(statusCode.CREATED).json(BaseResponse.success("Tạo đơn hàng thành công", null));
    },

    async createCustomerOrders(req, res) {
        const { delivery, paymentMethod, deliveryMethod, carts } = req.body;

        const user = req.user._id;
        const groupProducts = carts.reduce((acc, product) => {
            const storeId = product.storeProduct.storeId.toString();
            if (!acc[storeId]) {
                acc[storeId] = [];
            }
            acc[storeId].push(product);
            return acc;
        }, {});

        for (let store in groupProducts) {
            let products = [];
            let totalAmount = 0;
            for (let product of groupProducts[store]) {
                const item = {
                    storeProduct: product.storeProduct._id,
                    quantity: product.quantity,
                    price: product.storeProduct.productId.salePrice * (1 - product.storeProduct.discountPrice),
                };
                totalAmount += product.storeProduct.productId.salePrice * (1 - product.storeProduct.discountPrice) * product.quantity;
                products.push(item);
            }
            const userDetails = await UserModel.findById(user).populate("delivery.address");
            const deliveryDetails = userDetails.delivery.find((d) => d._id.toString() == delivery);
            const deliveryString = `ownerName: ${deliveryDetails.ownerName}, phone: ${deliveryDetails.phone}, street: ${deliveryDetails.address.street}, ward: ${deliveryDetails.address.ward}, district: ${deliveryDetails.address.district}, city: ${deliveryDetails.address.city}`;

            const order = new OrderModel({ user, delivery: deliveryString, paymentMethod, deliveryMethod, totalAmount, products, store });
            const newOrder = await order.save();
            if (newOrder?._id) {
                await CartModel.deleteMany({ user });
            }
        }
        return res.status(statusCode.CREATED).json(BaseResponse.success("Tạo đơn hàng thành công", null));
    },

    async updateOrder(req, res) {
        const { id, status } = req.params;
        const updatedOrder = await OrderModel.findByIdAndUpdate(id, { status: status }, { new: true, runValidators: true });
        if (!updatedOrder) {
            return res.status(statusCode.NOT_FOUND).json(BaseResponse.error("Lỗi, không tìm thấy đơn hàng", null));
        }
        return res.status(statusCode.OK).json(BaseResponse.success("Cập nhật đơn hàng thành công", updatedOrder));
    },
};

export default OrderController;
