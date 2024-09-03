import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    createBanner,
    getBannersByCurrentUser,
} from "../../../apis/banner.api";

export const getBannersByCurrentUserAction = createAsyncThunk(
    "banner/getBannersByCurrentUserAction",
    async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const result = await getBannersByCurrentUser();
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
