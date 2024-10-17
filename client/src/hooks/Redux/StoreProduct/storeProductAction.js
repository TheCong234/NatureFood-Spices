import { createAsyncThunk } from "@reduxjs/toolkit";
import { tryCatchWrapper } from "../../../utils/asyncHelper";
import { createStoreProductsApi } from "../../../apis/product.api";

export const createStoreProductsAction = createAsyncThunk(
    "user/createStoreProductsAction",
    async (data, thunkAPI) => {
        const { result, error } = await tryCatchWrapper(
            createStoreProductsApi,
            data
        );
        if (error) {
            return thunkAPI.rejectWithValue(error);
        }
        return result.data;
    }
);
