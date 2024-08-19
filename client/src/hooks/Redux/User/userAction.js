import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentUser } from "../../../apis/user.apis";

export const currentUser = createAsyncThunk("user/currentUser", async () => {
    const data = await getCurrentUser();
    return data;
});
