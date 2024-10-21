import { createSlice } from "@reduxjs/toolkit";
import {
    addFavoriteProductAction,
    removeFavoriteProductAction,
    getFavoriteProductsAction,
    addFavoriteStoreProductAction,
    getFavoriteStoreProductsAction,
    deleteFavoriteStoreProductAction,
} from "./favoriteAction";

const favoriteSlice = createSlice({
    name: "favorite",
    initialState: {
        data: { products: [], total: 0 },
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            //*********** customer ************

            //add favorite store product
            .addCase(addFavoriteStoreProductAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                addFavoriteStoreProductAction.fulfilled,
                (state, action) => {
                    state.loading = false;
                    state.data.products.push(action.payload);
                    state.data.total += 1;
                }
            )
            .addCase(
                addFavoriteStoreProductAction.rejected,
                (state, action) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            )

            //get favorite store products
            .addCase(getFavoriteStoreProductsAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                getFavoriteStoreProductsAction.fulfilled,
                (state, action) => {
                    state.data = action.payload;
                }
            )
            .addCase(
                getFavoriteStoreProductsAction.rejected,
                (state, action) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            )

            //delete favorite store product
            .addCase(deleteFavoriteStoreProductAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                deleteFavoriteStoreProductAction.fulfilled,
                (state, action) => {
                    state.loading = false;
                    state.data = {
                        products: state.data.products.filter(
                            (p) => p._id !== action.payload._id
                        ),
                        total: state.data.total - 1,
                    };
                }
            )
            .addCase(
                deleteFavoriteStoreProductAction.rejected,
                (state, action) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            )

            //*********** store ************
            //add favorite product
            .addCase(addFavoriteProductAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addFavoriteProductAction.fulfilled, (state, action) => {
                state.loading = false;
                state.data = {
                    favorite: [...state.data.products, action.payload],
                    total: state.data.total + 1,
                };
            })
            .addCase(addFavoriteProductAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            //get favorite products
            .addCase(getFavoriteProductsAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getFavoriteProductsAction.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getFavoriteProductsAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            //remove favorite product
            .addCase(removeFavoriteProductAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(removeFavoriteProductAction.fulfilled, (state, action) => {
                state.loading = false;
                state.data = {
                    favorite: state.data.products.filter(
                        (f) => f._id != action.payload._id
                    ),
                    total: state.data.total - 1,
                };
            })
            .addCase(removeFavoriteProductAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default favoriteSlice.reducer;
