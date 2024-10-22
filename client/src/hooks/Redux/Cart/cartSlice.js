import { createSlice } from "@reduxjs/toolkit";
import {
    addProductToStoreCartAction,
    getStoreCartItemsAction,
    deleteStoreCartItemAction,
    adjustmentStoreCartItemAction,
    createCartItemAction,
    getCartItemsAction,
    adjustmentCartItemAction,
    deleteCartItemAction,
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
            //*********** customer ***********
            //create cart item
            .addCase(createCartItemAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createCartItemAction.fulfilled, (state, action) => {
                state.loading = false;
                const existIndex = state.data.products.findIndex(
                    (p) => p._id == action.payload._id
                );
                if (existIndex != -1) {
                    state.data.products[existIndex] = action.payload;
                } else {
                    state.data.products.push(action.payload);
                    state.data.total += 1;
                }
            })
            .addCase(createCartItemAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            //get cart items
            .addCase(getCartItemsAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCartItemsAction.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getCartItemsAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            //adjustment cart item
            .addCase(adjustmentCartItemAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(adjustmentCartItemAction.fulfilled, (state, action) => {
                state.loading = false;
                const productIndex = state.data.products.findIndex(
                    (p) => p._id == action.payload._id
                );
                state.data.products[productIndex] = action.payload;
            })
            .addCase(adjustmentCartItemAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            //delete cart item
            .addCase(deleteCartItemAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteCartItemAction.fulfilled, (state, action) => {
                state.loading = false;
                state.data = {
                    products: state.data.products.filter(
                        (p) => p._id != action.payload._id
                    ),
                    total: state.data.total - 1,
                };
            })
            .addCase(deleteCartItemAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            //*********** store ***********
            //add product to store cart
            .addCase(addProductToStoreCartAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addProductToStoreCartAction.fulfilled, (state, action) => {
                state.loading = false;
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
