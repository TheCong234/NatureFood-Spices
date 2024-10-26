import { ProductV1, StoreProductV1 } from "../constants/endpoints.const";
import { apiClient } from "./config.api";

export const getStoreProductsApi = async (params) => {
    const response = await apiClient.get(StoreProductV1.GET_STORE_PRODUCTS, {
        params,
    });
    return response.data;
};

export const getStoreProductApi = async (storeProductId) => {
    const response = await apiClient.get(StoreProductV1.GET_STORE_PRODUCT + storeProductId);
    return response.data;
};

export const getStoreProductsByCategoryApi = async (data) => {
    const response = await apiClient.get(StoreProductV1.GET_STORE_PRODUCT_BY_CATEGORY + data.categoryId, { params: data.params });
    return response.data;
};
