import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentUser, updateUser } from "../../../apis/user.apis";

export const currentUser = createAsyncThunk("user/currentUser", async () => {
    const data = await getCurrentUser();
    return data;
});

export const updateEmailVerify = createAsyncThunk(
    "user/updateEmailVerify",
    async (data) => {
        const result = await updateUser(data);
        return result.data.data.data;
    }
);
