import { createSlice } from "@reduxjs/toolkit";
import { getNotificationsAction, getUnreadNotificationsAction } from "./notificationAction";

const notificationSlice = createSlice({
    name: "notification",
    initialState: {
        data: { notifications: [], total: 0 },
        unreadNotificationsTotal: 0,
        loading: false,
        error: null,
    },
    reducers: {
        increaseUnreadNotificationsTotal: (state) => {
            state.unreadNotificationsTotal += 1;
        },
        decreaseUnreadNotificationsTotal: (state) => {
            state.unreadNotificationsTotal = Math.max(0, state.unreadNotificationsTotal - 1);
        },
    },
    extraReducers: (builder) => {
        builder
            //get notifications
            .addCase(getNotificationsAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getNotificationsAction.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getNotificationsAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            //get unread notifications
            .addCase(getUnreadNotificationsAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getUnreadNotificationsAction.fulfilled, (state, action) => {
                state.loading = false;
                state.unreadNotificationsTotal = action.payload;
            })
            .addCase(getUnreadNotificationsAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { increaseUnreadNotificationsTotal, decreaseUnreadNotificationsTotal } = notificationSlice.actions;
export default notificationSlice.reducer;
