import { createAsyncThunk } from "@reduxjs/toolkit";
import { tryCatchWrapper } from "../../../utils/asyncHelper";
import { createStoreProductsApi } from "../../../apis/product.api";
import { getStoreProductsApi } from "../../../apis/product.store";

//get store Products
export const getStoreProductsAction = createAsyncThunk("product/getStoreProductsAction", async (data, thunkAPI) => {
    const { result, error } = await tryCatchWrapper(getStoreProductsApi, data);
    if (error) {
        return thunkAPI.rejectWithValue(error);
    }
    return result.data;
});

export const createStoreProductsAction = createAsyncThunk("user/createStoreProductsAction", async (_, thunkAPI) => {
    const { result, error } = await tryCatchWrapper(createStoreProductsApi);
    if (error) {
        return thunkAPI.rejectWithValue(error);
    }
    return result.data;
});
