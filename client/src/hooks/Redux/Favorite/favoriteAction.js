import { createAsyncThunk } from "@reduxjs/toolkit";
import { tryCatchWrapper } from "../../../utils/asyncHelper";
import {
    addFavoriteProductApi,
    getFavoriteProductsApi,
    removeFavoriteProductApi,
} from "../../../apis/favorite.api";

export const getFavoriteProductsAction = createAsyncThunk(
    "user/getFavoriteProductsAction",
    async (_, thunkAPI) => {
        const { result, error } = await tryCatchWrapper(getFavoriteProductsApi);
        if (error) {
            return thunkAPI.rejectWithValue(error.response);
        }
        return result.data;
    }
);

export const addFavoriteProductAction = createAsyncThunk(
    "user/addFavoriteProductAction",
    async (data, thunkAPI) => {
        const { result, error } = await tryCatchWrapper(
            addFavoriteProductApi,
            data
        );
        if (error) {
            return thunkAPI.rejectWithValue(error.response);
        }
        return result.data;
    }
);

export const removeFavoriteProductAction = createAsyncThunk(
    "user/removeFavoriteProductAction",
    async (data, thunkAPI) => {
        const { result, error } = await tryCatchWrapper(
            removeFavoriteProductApi,
            data
        );
        if (error) {
            return thunkAPI.rejectWithValue(error.response);
        }
        return result.data;
    }
);
