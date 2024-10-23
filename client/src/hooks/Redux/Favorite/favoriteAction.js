import { createAsyncThunk } from "@reduxjs/toolkit";
import { tryCatchWrapper } from "../../../utils/asyncHelper";
import {
    addFavoriteProductApi,
    addFavoriteStoreProductApi,
    getFavoriteProductsApi,
    getFavoriteStoreProductsApi,
    removeFavoriteProductApi,
    deleteFavoriteStoreProductsApi,
} from "../../../apis/favorite.api";

//*********** customer ************
export const addFavoriteStoreProductAction = createAsyncThunk(
    "user/addFavoriteStoreProductAction",
    async (data, thunkAPI) => {
        const { result, error } = await tryCatchWrapper(
            addFavoriteStoreProductApi,
            data
        );
        if (error) {
            return thunkAPI.rejectWithValue(error.response);
        }
        return result.data;
    }
);

export const getFavoriteStoreProductsAction = createAsyncThunk(
    "user/getFavoriteStoreProductsAction",
    async (_, thunkAPI) => {
        const { result, error } = await tryCatchWrapper(
            getFavoriteStoreProductsApi
        );
        if (error) {
            return thunkAPI.rejectWithValue(error.response);
        }
        return result.data;
    }
);

export const deleteFavoriteStoreProductAction = createAsyncThunk(
    "user/deleteFavoriteStoreProductAction",
    async (data, thunkAPI) => {
        const { result, error } = await tryCatchWrapper(
            deleteFavoriteStoreProductsApi,
            data
        );
        if (error) {
            return thunkAPI.rejectWithValue(error.response);
        }
        return result.data;
    }
);

//*********** store ************
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
