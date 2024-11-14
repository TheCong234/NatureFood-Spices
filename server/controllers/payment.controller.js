import { statusCode } from "../config/statusCode.config.js";
import { BaseResponse } from "../config/BaseResponse.config.js";
import { createMoMoPayment } from "../services/payment.services.js";

const PaymentController = {
    async createMoMoPaymentLink(req, res) {
        const { amount } = req.body;
        if (!amount || amount < 1) {
            throw new Error("THông tin thanh toán lỗi");
        }
        const result = await createMoMoPayment(amount);
        return res.status(statusCode.OK).json(BaseResponse.success("Tạo createBillMoMoPayment", result));
    },
};

export default PaymentController;
