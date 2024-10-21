import { createSlice } from "@reduxjs/toolkit";
import {
    getProductByIdAction,
    createReviewAction,
    createProductAction,
    getProductsAction,
} from "./productAction";

const productSlice = createSlice({
    name: "product",
    initialState: {
        data: { products: [], total: 0 },
        loading: false,
        errorProduct: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder

            //get products
            .addCase(getProductsAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProductsAction.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getProductsAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            //create products
            .addCase(createProductAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createProductAction.fulfilled, (state, action) => {
                state.loading = false;
                state.product = {
                    products: [...state?.data?.products, action.payload.data],
                    total: state?.data?.total + 1 || 1,
                };
            })
            .addCase(createProductAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            //********************old*******************
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
