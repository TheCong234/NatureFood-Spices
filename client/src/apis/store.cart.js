import { StoreCartV1 } from "../constants/endpoints.const";
import { apiClient } from "./config.api";

export const addProductToStoreCartApi = async (data) => {
    const response = await apiClient.post(
        `${StoreCartV1.ADD}${data.storeId}/add`,
        data
    );
    return response.data;
};
