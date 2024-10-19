import { apiClient } from "./config.api";
import { BlogV1 } from "../constants/endpoints.const";

export const createBlogApi = async (data) => {
    const result = await apiClient.post(BlogV1.CREATE, data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return result.data;
};
