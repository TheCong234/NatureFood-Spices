import { createSlice } from "@reduxjs/toolkit";
import {
    getcurrentUserAction,
    updateEmailVerify,
    loginAction,
    registerAction,
    getPeopleAction,
    updateUserByIdAction,
} from "./userAction";

const userSlice = createSlice({
    name: "user",
    initialState: {
        data: { user: [], total: 0 },
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

            //get people
            .addCase(getPeopleAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getPeopleAction.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getPeopleAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            //update user by id
            .addCase(updateUserByIdAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateUserByIdAction.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.data.users.findIndex(
                    (user) => user._id == action.payload._id
                );
                state.data.users[index] = action.payload;
            })
            .addCase(updateUserByIdAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default userSlice.reducer;
