import { UserV1 } from "../constants/endpoints.const";
import { apiClient } from "./config.api";
import Cookies from "js-cookie";
import axios from "axios";

export const login = async (data) => {
    try {
        const user = await apiClient.post(UserV1.USER_LOGIN, data, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            withCredentials: true,
        });

        Cookies.set("token", user.data.data.token, {
            expires: 7,
            secure: true,
        });
        return user.data;
    } catch (error) {
        console.log("User login error: ", error);
        return error;
    }
};

export const register = async (data) => {
    try {
        const user = await apiClient.post(UserV1.USER_REGISTER, data, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            withCredentials: true,
        });
        return user.data;
    } catch (error) {
        console.log("User register error: ", error);
        return error;
    }
};

export const getCurrentUser = async () => {
    try {
        const user = await apiClient.get(UserV1.USER_CURRENT);
        return user.data.data;
    } catch (error) {
        console.log("User current error: ", error);
        return error;
    }
};

export const verifyEmail = async (data) => {
    try {
        const result = await apiClient.post(UserV1.USER_SEND_OTP, data);
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const updateUser = async (data) => {
    try {
        const user = await apiClient.put(UserV1.USER_UPDATE, data, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
        return user;
    } catch (error) {
        console.log(error);
        return error;
    }
};
