import { createSlice } from "@reduxjs/toolkit";
import { currentUser } from "./userAction";

const userSlice = createSlice({
    name: "user",
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            //get data state
            .addCase(currentUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(currentUser.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(currentUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default userSlice.reducer;
