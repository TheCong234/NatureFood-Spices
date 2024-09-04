import { apiClient } from "./config.api";
import { BannerV1 } from "../constants/endpoints.const";

export const getBannersByCurrentUser = async () => {
    const result = await apiClient.get(BannerV1.BANNER_GET_BY_CURRENT_USER);
    return result.data;
};

export const getBanners = async () => {
    const result = await apiClient.get(BannerV1.BANNER_GET_ALL);
    return result.data;
};

export const createBanner = async (data) => {
    const result = await apiClient.post(BannerV1.BANNER_CREATE, data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return result.data;
};
