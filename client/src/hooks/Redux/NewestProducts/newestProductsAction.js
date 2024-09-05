import { getNewestProducts } from "../../../apis/product.api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getNewestProductsAction = createAsyncThunk(
    "banner/getNewestProductsAction",
    async () => {
        const result = await getNewestProducts();
        return result;
    }
);
