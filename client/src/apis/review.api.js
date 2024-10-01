import { ReviewV1 } from "../constants/endpoints.const";
import { apiClient } from "./config.api";

export const createReview = async (dataToSend) => {
    const review = await apiClient.post(
        ReviewV1.REVIEW_CREATE + dataToSend.productId,
        dataToSend.formData,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    return review.data;
};
