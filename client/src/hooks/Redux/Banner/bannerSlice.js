import { createSlice } from "@reduxjs/toolkit";
import {
    createBannerAction,
    getBannersByCurrentUserAction,
    getBannersAction,
} from "./bannerAction";

const bannerSlice = createSlice({
    name: "banner",
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            //get Banners By Current User Action
            .addCase(getBannersByCurrentUserAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                getBannersByCurrentUserAction.fulfilled,
                (state, action) => {
                    state.loading = false;
                    state.data = action.payload.data;
                }
            )
            .addCase(
                getBannersByCurrentUserAction.rejected,
                (state, action) => {
                    state.loading = false;
                    state.error = action.error.message;
                }
            )
            //get Banners
            .addCase(getBannersAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getBannersAction.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
            })
            .addCase(getBannersAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            //create banner
            .addCase(createBannerAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createBannerAction.fulfilled, (state, action) => {
                state.loading = false;
                state.data.push(action.payload.data);
            })
            .addCase(createBannerAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default bannerSlice.reducer;
