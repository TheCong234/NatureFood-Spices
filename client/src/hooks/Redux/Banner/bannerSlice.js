import { createSlice } from "@reduxjs/toolkit";
import {
    createBannerAction,
    getBannersByCurrentUserAction,
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
