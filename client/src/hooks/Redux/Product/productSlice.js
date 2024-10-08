import { createSlice } from "@reduxjs/toolkit";
import { getProductByIdAction, createReviewAction } from "./productAction";

const productSlice = createSlice({
    name: "product",
    initialState: {
        product: null,
        loading: false,
        errorProduct: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            //get product
            .addCase(getProductByIdAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProductByIdAction.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload.data;
            })
            .addCase(getProductByIdAction.rejected, (state, action) => {
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
                state.product.reviews.unshift(action.payload.data);
            })
            .addCase(createReviewAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default productSlice.reducer;
