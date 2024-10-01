import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategories } from "../../../apis/category.api";

export const getCategoriesAction = createAsyncThunk(
    "category/getCategoriesAction",
    async () => {
        const result = await getCategories();
        return result;
    }
);
