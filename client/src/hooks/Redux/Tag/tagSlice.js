import { createSlice } from "@reduxjs/toolkit";
import { getTagsAction } from "./tagAction";

const tagSlice = createSlice({
    name: "tag",
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTagsAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getTagsAction.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
            })
            .addCase(getTagsAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default tagSlice.reducer;
