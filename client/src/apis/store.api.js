import { StoreV1 } from "../constants/endpoints.const";
import { apiClient } from "./config.api";

export const createStore = async (data) => {
    try {
        const store = await apiClient.post(StoreV1.STORE_CREATE, data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
        });
        console.log(store);

        return store.data;
    } catch (error) {
        return error;
    }
};
