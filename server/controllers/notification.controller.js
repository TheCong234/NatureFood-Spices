import { BaseResponse } from "../config/BaseResponse.config.js";
import { statusCode } from "../config/statusCode.config.js";
import NotificationModel from "../models/notifycation.model.js";

const NotificationController = {
    async getNotifications(req, res) {
        const { skip, take, isRead } = req.query;
        const user = req.user._id;

        const filter = { user, ...(parseInt(isRead) != -1 && { isRead: parseInt(isRead) }) };
        console.log("filter", filter);

        const [notifications, total] = await Promise.all([
            NotificationModel.find(filter)
                .sort({ createdAt: -1 })
                .skip(skip || 0)
                .limit(take || 10),
            NotificationModel.countDocuments(filter),
        ]);
        return res.status(statusCode.OK).json(BaseResponse.success("Lấy thông báo thành công", { notifications, total }));
    },

    async getUnreadNotificationsTotal(req, res) {
        const user = req.user._id;
        const total = await NotificationModel.countDocuments({ user, isRead: false });
        return res.status(statusCode.OK).json(BaseResponse.success("Lấy thông báo chưa đọc thành công", total));
    },

    async createNotification(req, res) {
        const notification = new NotificationModel(req.body);
        const newNotification = await notification.save();
        return res.status(statusCode.CREATED).json(BaseResponse.success("Tạo thông báo thành công", newNotification));
    },
};

export default NotificationController;
