import { createSlice } from "@reduxjs/toolkit";
import { createReviewAction, getReviewsAction } from "./reviewAction";

const reviewSlice = createSlice({
    name: "review",
    initialState: {
        data: { reviews: [], total: 0 },
        loading: false,
        errorProduct: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            //get reviews
            .addCase(getReviewsAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getReviewsAction.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getReviewsAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            //create review
            .addCase(createReviewAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createReviewAction.fulfilled, (state, action) => {
                state.loading = false;
                state.data.reviews.push(action.payload);
                state.data.total += 1;
            })
            .addCase(createReviewAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});
export default reviewSlice.reducer;
