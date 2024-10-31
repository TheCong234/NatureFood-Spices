import { createSlice } from "@reduxjs/toolkit";
import { createStoreProductsAction, getStoreProductsAction, searchCustomerAction } from "./storeProductAction";

const storeProductSlice = createSlice({
    name: "storeProduct",
    initialState: {
        data: { products: [], total: 0 },
        search: { product: { products: [], total: 0 } },
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder

            //get store products
            .addCase(getStoreProductsAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getStoreProductsAction.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getStoreProductsAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            //create store products
            .addCase(createStoreProductsAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createStoreProductsAction.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(createStoreProductsAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            //search store products
            .addCase(searchCustomerAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchCustomerAction.fulfilled, (state, action) => {
                state.loading = false;
                state.search = action.payload;
            })
            .addCase(searchCustomerAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default storeProductSlice.reducer;
