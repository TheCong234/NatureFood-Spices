import { createAsyncThunk } from "@reduxjs/toolkit";
import { tryCatchWrapper } from "../../../utils/asyncHelper";
import { createCustomerOrderApi, getCustomerOrdersApi } from "../../../apis/order";

export const getCustomerOrdersAction = createAsyncThunk("order/getCustomerOrdersAction", async (data, thunkAPI) => {
    const { result, error } = await tryCatchWrapper(getCustomerOrdersApi, data);
    if (error) {
        return thunkAPI.rejectWithValue(error.response);
    }
    return result.data;
});

export const createCustomerOrderAction = createAsyncThunk("order/createCustomerOrderAction", async (data, thunkAPI) => {
    const { result, error } = await tryCatchWrapper(createCustomerOrderApi, data);
    if (error) {
        return thunkAPI.rejectWithValue(error.response);
    }
    return result.data;
});
