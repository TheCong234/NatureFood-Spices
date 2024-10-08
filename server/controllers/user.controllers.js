import { statusCode } from "../config/statusCode.config.js";
import { BaseResponse } from "../config/BaseResponse.config.js";
import UserModel from "../models/user.model.js";
import CartModel from "../models/cart.model.js";
import ProductModel from "../models/product.model.js";
import StoreModel from "../models/store.models.js";
import { otpTemplate } from "../config/otp.template.config.js";
import { sendMail } from "../utils/mailer.utils.js";

const UserController = {
    async register(req, res) {
        try {
            const cart = new CartModel();
            const newCart = await cart.save();
            const user = await UserModel.create(req.body);
            user.cart = newCart._id;
            await user.save();
            return res
                .status(statusCode.CREATED)
                .json(
                    BaseResponse.success("Đăng ký tài khaonr thành công", user)
                );
        } catch (error) {
            console.log("Register: ", error);
            return res
                .status(statusCode.INTERNAL_SERVER_ERROR)
                .json(BaseResponse.error("Đăng ký tài khoản thất bại", error));
        }
    },

    async login(req, res) {
        return res
            .status(statusCode.OK)
            .json(BaseResponse.success("Đăng nhập thành công", req.user));
    },

    async getAll(req, res) {
        try {
            const users = await UserModel.find({});
            return res
                .status(statusCode.OK)
                .json(BaseResponse.success("Thành công", users));
        } catch (error) {
            console.log("Get all: ", error);
            return res
                .status(statusCode.INTERNAL_SERVER_ERROR)
                .json("THất bại", error);
        }
    },

    async getCurrentUser(req, res) {
        try {
            return res
                .status(statusCode.OK)
                .json(BaseResponse.success("Tìm thấy current user", req.user));
        } catch (error) {
            console.log("Controller Get current user: ", error);
            return res
                .status(statusCode.INTERNAL_SERVER_ERROR)
                .json("THất bại", error);
        }
    },

    async getUserById(req, res) {
        try {
            const { id } = req.params;
            const user = await UserModel.findById(id);

            return res
                .status(statusCode.OK)
                .json(BaseResponse.success("Tìm thấy người dùng", user));
        } catch (error) {
            console.log("Find user by id: ", error);
            return res
                .status(statusCode.NOT_FOUND)
                .json(BaseResponse.error("Không tìm thấy người dùng", error));
        }
    },

    async updateUser(req, res) {
        try {
            if (req.user) {
                const updatedUser = await UserModel.findByIdAndUpdate(
                    req.user._id,
                    req.body,
                    { new: true }
                );
                return res
                    .status(statusCode.OK)
                    .json(
                        BaseResponse.success(
                            "Cập nhật người dùng thành công",
                            updatedUser
                        )
                    );
            }
            return res
                .status(statusCode.UNAUTHORIZED)
                .json(
                    BaseResponse.error("Yêu cầu đăng nhập", "CHưa đăng nhập")
                );
        } catch (error) {
            return res
                .status(statusCode.INTERNAL_SERVER_ERROR)
                .json(BaseResponse.error("Cập nhật thất bại", error));
        }
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
            return res
                .status(statusCode.OK)
                .json(
                    BaseResponse.success(
                        "Cập nhật ảnh người dùng thành công",
                        null
                    )
                );
        } catch (error) {
            return res
                .status(statusCode.INTERNAL_SERVER_ERROR)
                .json(BaseResponse.error("Cập nhật thất bại", error));
        }
    },

    async changePassword(req, res) {
        try {
            const { email } = req.params;
            const { password } = req.body;
            const user = await UserModel.findOne({ email: email });
            user.password = password;
            const updatedUser = await user.save();
            return res
                .status(statusCode.OK)
                .json(
                    BaseResponse.success(
                        "Cập nhật mật khẩu mới thành công",
                        updatedUser
                    )
                );
        } catch (error) {
            console.log("change password: ", error);
            return res
                .status(statusCode.NOT_FOUND)
                .json(BaseResponse.success("Không tìm thấy người dùng"), error);
        }
    },

    async sendOtpToEmail(req, res) {
        const { subject, otp } = req.body;
        const template = otpTemplate(req.user.email, otp);
        await sendMail(req.user.email, subject, template);
        return res
            .status(statusCode.OK)
            .json(BaseResponse.success("Gửi email thành công", null));
    },
};

export default UserController;
