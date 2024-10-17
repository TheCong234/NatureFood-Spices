import { createSlice } from "@reduxjs/toolkit";
import {
    addProductToStoreCartAction,
    getStoreCartItemsAction,
    deleteStoreCartItemAction,
    adjustmentStoreCartItemAction,
} from "./cartAction";

const cartSlice = createSlice({
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
            })

            //delete store cart item
            .addCase(deleteStoreCartItemAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteStoreCartItemAction.fulfilled, (state, action) => {
                state.loading = false;
                state.data = {
                    products: state.data.products.filter(
                        (product) => product._id.toString() != action.payload.id
                    ),
                    total: state.data.total - 1,
                };
            })
            .addCase(deleteStoreCartItemAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            //adjustment store cart item
            .addCase(adjustmentStoreCartItemAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                adjustmentStoreCartItemAction.fulfilled,
                (state, action) => {
                    state.loading = false;
                    if (action.payload?.id) {
                        const index = state.data.products.findIndex(
                            (p) => p._id.toString() == action.payload.id
                        );
                        state.data.products[index].quantity =
                            action.payload.quantity;
                    }
                }
            )
            .addCase(
                adjustmentStoreCartItemAction.rejected,
                (state, action) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            )

            //get  store cart items
            .addCase(getStoreCartItemsAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getStoreCartItemsAction.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getStoreCartItemsAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default cartSlice.reducer;
