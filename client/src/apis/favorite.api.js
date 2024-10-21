import { apiClient } from "./config.api";
import { FavoriteV1 } from "../constants/endpoints.const";

//******** customer ********
export const addFavoriteStoreProductApi = async (storeProductId) => {
    const result = await apiClient.post(
        `${FavoriteV1.ADD_STORE_PRODUCT}${storeProductId}/add`
    );
    return result.data;
};

export const getFavoriteStoreProductsApi = async () => {
    const result = await apiClient.get(FavoriteV1.GET_FAVORITE_STORE_PRODUCT);
    return result.data;
};

export const deleteFavoriteStoreProductsApi = async (storeProductId) => {
    const result = await apiClient.delete(
        FavoriteV1.DELETE_FAVORITE_STORE_PRODUCT + storeProductId
    );
    return result.data;
};

//******** store ************
export const getFavoriteProductsApi = async (data) => {
    const result = await apiClient.get(FavoriteV1.GET_FAVORITE_PRODUCT);
    return result.data;
};

export const addFavoriteProductApi = async (data) => {
    const result = await apiClient.patch(FavoriteV1.ADD_PRODUCT + data);
    return result.data;
};

export const removeFavoriteProductApi = async (data) => {
    const result = await apiClient.patch(FavoriteV1.REMOVE_PRODUCT + data);
    return result.data;
};
