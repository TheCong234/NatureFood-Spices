import { createAsyncThunk } from "@reduxjs/toolkit";
import { tryCatchWrapper } from "../../../utils/asyncHelper";
import {
    addProductToStoreCartApi,
    getStoreCartItemsApi,
    deleteStoreCartItemApi,
    adjustmentStoreCartItemApi,
} from "../../../apis/store.cart";

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

export const deleteStoreCartItemAction = createAsyncThunk(
    "cart/deleteStoreCartItemAction",
    async (data, thunkAPI) => {
        const { result, error } = await tryCatchWrapper(
            deleteStoreCartItemApi,
            data
        );
        if (error) {
            return thunkAPI.rejectWithValue(error.response);
        }
        return result.data;
    }
);

export const adjustmentStoreCartItemAction = createAsyncThunk(
    "cart/adjustmentStoreCartItemAction",
    async (data, thunkAPI) => {
        const { result, error } = await tryCatchWrapper(
            adjustmentStoreCartItemApi,
            data
        );
        if (error) {
            return thunkAPI.rejectWithValue(error.response);
        }
        return result.data;
    }
);

export const getStoreCartItemsAction = createAsyncThunk(
    "cart/getStoreCartItemsAction",
    async (_, thunkAPI) => {
        const { result, error } = await tryCatchWrapper(getStoreCartItemsApi);
        if (error) {
            return thunkAPI.rejectWithValue(error.response);
        }
        return result.data;
    }
);
