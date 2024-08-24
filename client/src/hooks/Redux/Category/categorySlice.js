import { createSlice } from "@reduxjs/toolkit";
import { getCategoriesAction } from "./categoryAction";

const categorySlice = createSlice({
    name: "category",
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategoriesAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCategoriesAction.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
            })
            .addCase(getCategoriesAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default categorySlice.reducer;
