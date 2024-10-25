import { createAsyncThunk } from "@reduxjs/toolkit";
import { tryCatchWrapper } from "../../../utils/asyncHelper";
import { createReviewApi, getReviewsApi } from "../../../apis/review.api";

export const getReviewsAction = createAsyncThunk("review/getReviewsAction", async (data, thunkAPI) => {
    const { result, error } = await tryCatchWrapper(getReviewsApi, data);
    if (error) {
        return thunkAPI.rejectWithValue(error.response);
    }
    return result.data;
});

export const createReviewAction = createAsyncThunk("review/createReviewAction", async (data, thunkAPI) => {
    const { result, error } = await tryCatchWrapper(createReviewApi, data);
    if (error) {
        return thunkAPI.rejectWithValue(error.response);
    }
    return result.data;
});
