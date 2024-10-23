import { createSlice } from "@reduxjs/toolkit";
import { createCustomerOrderAction } from "./orderAction";

const orderSlice = createSlice({
    name: "order",
    initialState: {
        data: { orders: [], total: 0 },
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            //*********** customer ************

            //create customer order
            .addCase(createCustomerOrderAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createCustomerOrderAction.fulfilled, (state, action) => {
                state.loading = false;
                state.data.orders.push(action.payload);
                state.data.total += 1;
            })
            .addCase(createCustomerOrderAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});
export default orderSlice.reducer;
