import {
    createProductApi,
    getNewestProducts,
    getProductById,
    getProductsApi,
} from "../../../apis/product.api";
import { createReview } from "../../../apis/review.api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { tryCatchWrapper } from "../../../utils/asyncHelper";

//getProducts
export const getProductsAction = createAsyncThunk(
    "product/getProductsAction",
    async (_, thunkAPI) => {
        const { result, error } = await tryCatchWrapper(getProductsApi);
        if (error) {
            return thunkAPI.rejectWithValue(error);
        }
        return result.data;
    }
);

//create product
export const createProductAction = createAsyncThunk(
    "product/createProductAction",
    async (data, thunkAPI) => {
        const { result, error } = await tryCatchWrapper(createProductApi, data);
        if (error) {
            return thunkAPI.rejectWithValue(error);
        }
        return result.data;
    }
);

//old

// newest product
export const getNewestProductsAction = createAsyncThunk(
    "newestProducts/getNewestProductsAction",
    async () => {
        const result = await getNewestProducts();
        return result;
    }
);

//product details
export const getProductByIdAction = createAsyncThunk(
    "product/getProductByIdAction",
    async (productId) => {
        const result = await getProductById(productId);
        return result;
    }
);

//create review
export const createReviewAction = createAsyncThunk(
    "product/createReviewAction",
    async (dataToSend) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const result = await createReview(dataToSend);
        return result;
    }
);
