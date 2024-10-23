import { ProductV1, StoreProductV1 } from "../constants/endpoints.const";
import { apiClient } from "./config.api";

export const getStoreProductsApi = async (params) => {
    const response = await apiClient.get(StoreProductV1.GET_STORE_PRODUCTS, {
        params,
    });
    return response.data;
};
