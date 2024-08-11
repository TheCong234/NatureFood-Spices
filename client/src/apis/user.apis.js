import { UserV1 } from "../constants/endpoints.const"
import { apiClient } from "./config.api"


export const login = async (data) =>{
    try {
        const user = await apiClient.post("/user/login", data,{
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