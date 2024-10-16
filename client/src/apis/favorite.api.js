import { apiClient } from "./config.api";
import { FavoriteV1 } from "../constants/endpoints.const";

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
