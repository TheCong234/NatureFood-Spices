import { createAsyncThunk } from "@reduxjs/toolkit";
import { tryCatchWrapper } from "../../../utils/asyncHelper";
import { addProductToStoreCartApi } from "../../../apis/store.cart";

export const addProductToStoreCartAction = createAsyncThunk(
    "cart/addProductToStoreCartAction",
    async (data, thunkAPI) => {
        const { result, error } = await tryCatchWrapper(
            addProductToStoreCartApi,
            data
        );
        if (error) {
            return thunkAPI.rejectWithValue(error.response);
        }
        return result.data;
    }
);
