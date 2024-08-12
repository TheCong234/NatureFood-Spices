import { UserV1 } from "../constants/endpoints.const"
import { apiClient } from "./config.api"


export const login = async (data) =>{
    try {
        const user = await apiClient.post(UserV1.USER_LOGIN, data,{
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            withCredentials: true,
        });
        return user.data;
    } catch (error) {
        console.log("User login error: ", error);
        return error;
    }
}

export const register = async (data) =>{
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
}

export const getCurrentUser = async ()=>{
    try {
        const user = await apiClient.get(UserV1.USER_CURRENT);
        return console.log('Current user: ', user);
        
    } catch (error) {
        console.log("User current error: ", error);
        return error;
    }
}