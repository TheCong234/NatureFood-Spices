import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    createBanner,
    getBannersByCurrentUser,
    getBanners,
} from "../../../apis/banner.api";

export const getBannersByCurrentUserAction = createAsyncThunk(
    "banner/getBannersByCurrentUserAction",
    async () => {
        // await new Promise((resolve) => setTimeout(resolve, 1000));
        const result = await getBannersByCurrentUser();
        return result;
    }
);

export const getBannersAction = createAsyncThunk(
    "banner/getBannersAction",
    async () => {
        const result = await getBanners();
        return result;
    }
);

export const createBannerAction = createAsyncThunk(
    "banner/createBannerAction",
    async (data) => {
        const result = await createBanner(data);
        return result;
    }
);
