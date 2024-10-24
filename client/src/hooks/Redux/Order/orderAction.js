import { createAsyncThunk } from "@reduxjs/toolkit";
import { tryCatchWrapper } from "../../../utils/asyncHelper";
import { createCustomerOrderApi } from "../../../apis/order";

export const createCustomerOrderAction = createAsyncThunk("order/createCustomerOrderAction", async (data, thunkAPI) => {
    const { result, error } = await tryCatchWrapper(createCustomerOrderApi, data);
    if (error) {
        return thunkAPI.rejectWithValue(error.response);
    }
    return result.data;
});
