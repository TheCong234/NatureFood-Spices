import { CartV1 } from "../constants/endpoints.const";
import { apiClient } from "./config.api";

export const createCartItemApi = async (data) => {
    const response = await apiClient.post(CartV1.CREATE, data);
    return response.data;
};
