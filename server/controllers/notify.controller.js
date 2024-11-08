import { BaseResponse } from "../config/BaseResponse.config.js";
import { statusCode } from "../config/statusCode.config.js";
import NotifyModel from "../models/notify.model.js";

const NotifyController = {
    async createNotify(req, res) {
        const notify = new NotifyModel(req.body);
        const newNotify = await notify.save();
        return res.status(statusCode.CREATED).json(BaseResponse.success("Tạo thông báo thành công", newNotify));
    },
};

export default NotifyController;
