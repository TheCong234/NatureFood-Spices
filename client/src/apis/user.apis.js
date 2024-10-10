import { UserV1 } from "../constants/endpoints.const";
import { apiClient } from "./config.api";
import Cookies from "js-cookie";

export const loginApi = async (data) => {
    const response = await apiClient.post(UserV1.USER_LOGIN, data, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        withCredentials: true,
    });
    if (response.data.success) {
        localStorage.setItem("token", response.data.data.token);
        return response.data;
    }
    return response;
};

export const registerApi = async (data) => {
    const response = await apiClient.post(UserV1.USER_REGISTER, data, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        withCredentials: true,
    });
    if (response.data.success) {
        Cookies.set("token", response.data.data.token, {
            expires: 7,
            secure: true,
        });
        return response.data;
    }
    return response;
};

export const getCurrentUserApi = async (data) => {
    const response = await apiClient.get(UserV1.USER_CURRENT, {
        headers: {
            Authorization: `Bearer ${data}`,
        },
    });
    return response.data;
};

export const getPeopleApi = async (params) => {
    const response = await apiClient.get(UserV1.GET_PEOPLE, {
        params,
    });
    return response.data;
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
