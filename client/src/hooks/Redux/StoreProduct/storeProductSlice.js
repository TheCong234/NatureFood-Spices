import { createSlice } from "@reduxjs/toolkit";
import { createStoreProductsAction } from "./storeProductAction";

const storeProductSlice = createSlice({
    name: "tag",
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder

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
            });
    },
});

export default storeProductSlice.reducer;
