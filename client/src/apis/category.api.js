import { CategoryV1, UserV1 } from "../constants/endpoints.const";
import { apiClient } from "./config.api";

export const getCategories = async () => {
    const result = await apiClient.get(CategoryV1.CATEGORY_GET_ALL);
    return result.data;
};
