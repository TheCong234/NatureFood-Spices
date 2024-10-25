import { ReviewV1 } from "../constants/endpoints.const";
import { apiClient } from "./config.api";

export const getReviewsApi = async (data) => {
    const response = await apiClient.get(ReviewV1.GET_ALL + data.storeProductId + "/all", {
        params: data.params,
    });
    return response.data;
};

export const createReviewApi = async (data) => {
    const response = await apiClient.post(ReviewV1.CREATE + data.storeProductId, data);
    return response.data;
};
