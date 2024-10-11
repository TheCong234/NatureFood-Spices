import { CategoryV1 } from "../constants/endpoints.const";
import { apiClient } from "./config.api";

export const getCategoriesApi = async () => {
    const response = await apiClient.get(CategoryV1.CATEGORY_GET_ALL);
    return response.data;
};

export const deleteCategoryApi = async (data) => {
    const response = await apiClient.delete(CategoryV1.DELETE + data);
    return response.data;
};
