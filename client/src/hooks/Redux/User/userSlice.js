import { createSlice } from "@reduxjs/toolkit";
import {
    currentUser,
    updateEmailVerify,
    loginAction,
    registerAction,
} from "./userAction";

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
            //post login
            .addCase(loginAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginAction.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(loginAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            //post register
            .addCase(registerAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerAction.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(registerAction.rejected, (state, action) => {
                console.log("action", action);
                state.loading = false;
                state.error = action.payload;
            })

            //get data state
            .addCase(currentUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(currentUser.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
            })
            .addCase(currentUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            //update user data
            .addCase(updateEmailVerify.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateEmailVerify.fulfilled, (state, action) => {
                state.loading = false;
                state.data = { ...action.payload };
            })
            .addCase(updateEmailVerify.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default userSlice.reducer;
