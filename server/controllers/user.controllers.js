import { statusCode } from "../config/statusCode.config.js";
import { BaseResponse } from "../config/BaseResponse.config.js";
import UserModel from "../models/user.model.js";
import { hashSync } from "bcrypt";
const UserController = {
    async register(req, res){
        try {
            console.log('register data: ',req.body);
            const user = await UserModel.create(req.body);
            return res.status(statusCode.CREATED).json(BaseResponse.success('Đăng ký tài khaonr thành công', user));
        } catch (error) {
            console.log('Register: ', error);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).json(BaseResponse.error('Đăng ký tài khoản thất bại', error));
        }
    },

    async login(req, res){
        return res.status(statusCode.OK).json(BaseResponse.success('Đăng nhập thành công', req.user));
    },

    async getUserById(req, res){
        try {
            const {id} = req.params;
            const user = await UserModel.findById(id);
            
            return res.status(statusCode.OK).json(BaseResponse.success('Tìm thấy người dùng', user));
        } catch (error) {
            console.log('Find user by id: ', error);
            return res.status(statusCode.NOT_FOUND).json(BaseResponse.error('Không tìm thấy người dùng', error));
        }
    },

    async changePassword(req, res){
        try {
            const {email} = req.params;
            const {password} = req.body;
            const user = await UserModel.findOne({email: email});
            // return console.log(user.password);
            // const passwordHashed = hashSync(password, 10);
            user.password = password;
            const updatedUser = await user.save();
            return res.status(statusCode.OK).json(BaseResponse.success('Cập nhật mật khẩu mới thành công', updatedUser));
        } catch (error) {
            console.log("change password: ", error);
            return res.status(statusCode.NOT_FOUND).json(BaseResponse.success('Không tìm thấy người dùng'), error);
        }
    }
}


export default UserController;