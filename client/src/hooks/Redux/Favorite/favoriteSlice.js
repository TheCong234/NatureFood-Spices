import { createSlice } from "@reduxjs/toolkit";
import {
    addFavoriteProductAction,
    removeFavoriteProductAction,
    getFavoriteProductsAction,
} from "./favoriteAction";

const favoriteSlice = createSlice({
    name: "favorite",
    initialState: {
        data: { favorite: [], total: 0 },
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder

            //add favorite product
            .addCase(addFavoriteProductAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addFavoriteProductAction.fulfilled, (state, action) => {
                state.loading = false;
                state.data = {
                    favorite: [...state.data.favorite, action.payload],
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
                    favorite: state.data.favorite.filter(
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
