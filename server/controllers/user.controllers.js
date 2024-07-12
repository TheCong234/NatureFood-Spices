import { statusCode } from "../config/statusCode.config.js";
import { BaseResponse } from "../config/BaseResponse.config.js";
import UserModel from "../models/user.model.js";

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
        return res.status(statusCode.OK).json(BaseResponse.success('Đăng nhập thành công', null));
    }
}

export default UserController;