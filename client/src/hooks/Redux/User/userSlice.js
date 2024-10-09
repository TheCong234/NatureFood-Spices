import { createSlice } from "@reduxjs/toolkit";
import {
    getcurrentUserAction,
    updateEmailVerify,
    loginAction,
    registerAction,
} from "./userAction";

const userSlice = createSlice({
    name: "user",
    initialState: {
        data: [],
        token: localStorage.getItem("token") || "",
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
                state.token = action.payload.token;
            })
            .addCase(loginAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
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

            //get current user
            .addCase(getcurrentUserAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getcurrentUserAction.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getcurrentUserAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
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
