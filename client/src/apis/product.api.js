import { ProductV1 } from "../constants/endpoints.const";
import { apiClient } from "./config.api";

export const createProduct = async (data) => {
    const product = await apiClient.post(ProductV1.PRODUCT_CREATE, data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
    });
    return product.data;
};