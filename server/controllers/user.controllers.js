import { statusCode } from "../config/statusCode.config.js";
import { BaseResponse } from "../config/BaseResponse.config.js";
import UserModel from "../models/user.model.js";
import CartModel from "../models/cart.model.js";
import { otpTemplate } from "../config/otp.template.config.js";
import { sendMail } from "../utils/mailer.utils.js";
import AddressModel from "../models/address.model.js";

const UserController = {
    async register(req, res) {
        const user = await UserModel.create(req.body);
        const newUser = await user.save();

        const cart = new CartModel({ user: newUser._id });
        await cart.save();
        const token = user.createToken();
        return res.status(statusCode.CREATED).json(BaseResponse.success("Đăng ký tài khoản thành công", { token }));
    },

    async login(req, res) {
        const user = req.user;
        const token = user.createToken();
        return res.status(statusCode.OK).json(BaseResponse.success("Đăng nhập thành công", { token }));
    },

    async getAll(req, res) {
        const users = await UserModel.find({ role: req.query.role || "user" });
        const total = await UserModel.countDocuments({
            role: req.query.role || "user",
        });
        return res.status(statusCode.OK).json(BaseResponse.success("Thành công", { users, total }));
    },

    async getCurrentUser(req, res) {
        return res.status(statusCode.OK).json(BaseResponse.success("Tìm thấy current user", req.user));
    },

    async getCurrentUserDelivery(req, res) {
        const user = await UserModel.findById(req.user._id).populate("delivery.address");
        const data = { delivery: user.delivery, total: user.delivery.length };
        return res.status(statusCode.OK).json(BaseResponse.success("Lấy thông tin giao hàng thành công", data));
    },

    async getUserById(req, res) {
        try {
            const { id } = req.params;
            const user = await UserModel.findById(id);

            return res.status(statusCode.OK).json(BaseResponse.success("Tìm thấy người dùng", user));
        } catch (error) {
            console.log("Find user by id: ", error);
            return res.status(statusCode.NOT_FOUND).json(BaseResponse.error("Không tìm thấy người dùng", error));
        }
    },

    async updateUser(req, res) {
        const updatedUser = await UserModel.findByIdAndUpdate(req.user._id, req.body, { new: true });
        return res.status(statusCode.OK).json(BaseResponse.success("Cập nhật người dùng thành công", updatedUser));
    },

    async updateUserImage(req, res) {
        try {
            const user = await UserModel.findById(req.user._id);
            if (req.file) {
                user.image = {
                    url: req.file.path,
                    filename: req.file.filename,
                };
            }
            await user.save();
            return res.status(statusCode.OK).json(BaseResponse.success("Cập nhật ảnh người dùng thành công", null));
        } catch (error) {
            return res.status(statusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.error("Cập nhật thất bại", error));
        }
    },

    async updateUserById(req, res) {
        const { id } = req.params;
        const user = await UserModel.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        });
        return res.status(statusCode.OK).json(BaseResponse.success("Cập nhật người dùng thành công", user));
    },

    async changePassword(req, res) {
        try {
            const { email } = req.params;
            const { password } = req.body;
            const user = await UserModel.findOne({ email: email });
            user.password = password;
            const updatedUser = await user.save();
            return res.status(statusCode.OK).json(BaseResponse.success("Cập nhật mật khẩu mới thành công", updatedUser));
        } catch (error) {
            console.log("change password: ", error);
            return res.status(statusCode.NOT_FOUND).json(BaseResponse.success("Không tìm thấy người dùng"), error);
        }
    },

    async sendOtpToEmail(req, res) {
        const { subject, otp } = req.body;
        const template = otpTemplate(req.user.email, otp);
        await sendMail(req.user.email, subject, template);
        return res.status(statusCode.OK).json(BaseResponse.success("Gửi email thành công", null));
    },

    async createDelivery(req, res) {
        const address = new AddressModel(req.body);
        const newAddress = await address.save();
        const delivery = {
            address: newAddress._id,
            ownerName: req.body.ownerName,
            phone: req.body.phone,
        };
        const updatedUser = await UserModel.findByIdAndUpdate(req.user._id, { $push: { delivery } }, { new: true, useFindAndModify: false });
        return res.status(statusCode.OK).json(BaseResponse.success("Thêm địa chỉ nhận hàng thành công", updatedUser.delivery));
    },
};

export default UserController;
