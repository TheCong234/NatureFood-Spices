import { createAsyncThunk } from "@reduxjs/toolkit";
import { getStoreById } from "../../../apis/store.api";

export const getStoreByIdAction = createAsyncThunk(
    "store/getStoreByIdAction",
    async (storeId) => {
        const result = await getStoreById(storeId);
        return result;
    }
);
