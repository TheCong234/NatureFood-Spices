import { createAsyncThunk } from "@reduxjs/toolkit";
import { tryCatchWrapper } from "../../../utils/asyncHelper";
import { getNotificationsApi, getUnreadNotificationsToalApi } from "../../../apis/notification.api";

export const getNotificationsAction = createAsyncThunk("notifycation/getNotificationsAction", async (data, thunkAPI) => {
    const { result, error } = await tryCatchWrapper(getNotificationsApi, data);
    if (error) {
        return thunkAPI.rejectWithValue(error.response);
    }
    return result.data;
});

export const getUnreadNotificationsAction = createAsyncThunk("notifycation/getUnreadNotificationsAction", async (_, thunkAPI) => {
    const { result, error } = await tryCatchWrapper(getUnreadNotificationsToalApi);
    if (error) {
        return thunkAPI.rejectWithValue(error.response);
    }
    return result.data;
});
