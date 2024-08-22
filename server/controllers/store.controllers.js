import { BaseResponse } from "../config/BaseResponse.config.js";
import { statusCode } from "../config/statusCode.config.js";
import StoreModel from "../models/store.models.js";
import UserModel from "../models/user.model.js";

const StoreControllers = {
    async createStore(req, res) {
        const store = new StoreModel(req.body);
        store.owner = req.user._id;
        const newStore = await store.save();

        const user = await UserModel.findById(req.user._id);
        user.store = newStore._id;
        await user.save();
        return res
            .status(statusCode.CREATED)
            .json(BaseResponse.success("Tạo cửa hàng thành công", newStore));
    },

    async getStoreById(req, res) {
        const store = await StoreModel.findById(req.params.id);
        if (store === null) {
            throw new Error("Không tìm thấy cửa hàng");
        }
        return res
            .status(statusCode.OK)
            .json(
                BaseResponse.success("Lấy thông tin cửa hàng thành công", store)
            );
    },
};

export default StoreControllers;
