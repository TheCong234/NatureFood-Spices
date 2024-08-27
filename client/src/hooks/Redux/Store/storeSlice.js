import { createSlice } from "@reduxjs/toolkit";
import { getStoreByIdAction } from "./storeAction";

const storeSlice = createSlice({
    name: "store",
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            //get data store
            .addCase(getStoreByIdAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getStoreByIdAction.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
            })
            .addCase(getStoreByIdAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });

        //update user data
    },
});

export default storeSlice.reducer;
