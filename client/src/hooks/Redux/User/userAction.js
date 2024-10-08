import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    getCurrentUser,
    loginApi,
    registerApi,
    updateUser,
} from "../../../apis/user.apis";
import { tryCatchWrapper } from "../../../utils/asyncHelper";

export const loginAction = createAsyncThunk(
    "user/loginAction",
    async (data, thunkAPI) => {
        const { result, error } = await tryCatchWrapper(loginApi, data);

        if (error) {
            return thunkAPI.rejectWithValue(error.response);
        }
        return result.data;
    }
);

export const registerAction = createAsyncThunk(
    "user/registerAction",
    async (data, thunkAPI) => {
        const { result, error } = await tryCatchWrapper(registerApi, data);
        if (error) {
            return thunkAPI.rejectWithValue(error);
        }
        return result.data;
    }
);

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
