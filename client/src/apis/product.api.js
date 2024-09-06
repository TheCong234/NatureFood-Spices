import { ProductV1 } from "../constants/endpoints.const";
import { apiClient } from "./config.api";

export const getNewestProducts = async () => {
    const products = await apiClient.get(ProductV1.PRODUCT_NEWEST);
    return products.data;
};

export const getProductById = async (productId) => {
    const product = await apiClient.get(ProductV1.PRODUCT_DETAILS + productId);
    return product.data;
};

export const createProduct = async (data) => {
    const product = await apiClient.post(ProductV1.PRODUCT_CREATE, data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
    });
    return product.data;
};
