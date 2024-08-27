import { StoreV1 } from "../constants/endpoints.const";
import { apiClient } from "./config.api";

export const getStoreById = async (storeId) => {
    const store = await apiClient.get(
        StoreV1.STORE_GET_STORE_BY_ID + `/${storeId}`
    );
    return store.data;
};

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
