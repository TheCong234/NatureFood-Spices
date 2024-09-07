import { getNewestProducts, getProductById } from "../../../apis/product.api";
import { createReview } from "../../../apis/review.api";
import { createAsyncThunk } from "@reduxjs/toolkit";

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
