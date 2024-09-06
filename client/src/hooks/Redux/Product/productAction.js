import { getNewestProducts, getProductById } from "../../../apis/product.api";
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
