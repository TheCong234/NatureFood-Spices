import { createSlice } from "@reduxjs/toolkit";
import { addProductToStoreCartAction } from "./cartAction";

const storeCartSlice = createSlice({
    name: "cart",
    initialState: {
        data: { products: [], total: 0 },
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder

            //add product to store cart
            .addCase(addProductToStoreCartAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addProductToStoreCartAction.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action);
                if (action?.payload?.index == -1) {
                    state.data.total += action?.payload?.quantity;
                }
            })
            .addCase(addProductToStoreCartAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default storeCartSlice.reducer;
