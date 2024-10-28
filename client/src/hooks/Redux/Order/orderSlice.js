import { createSlice } from "@reduxjs/toolkit";
import { createCustomerOrderAction, getCustomerOrdersAction } from "./orderAction";

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
            //get customer orders
            .addCase(getCustomerOrdersAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCustomerOrdersAction.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getCustomerOrdersAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            //create customer order
            .addCase(createCustomerOrderAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createCustomerOrderAction.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(createCustomerOrderAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});
export default orderSlice.reducer;
