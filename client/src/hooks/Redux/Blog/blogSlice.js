import { createSlice } from "@reduxjs/toolkit";
import { createBlogAction } from "./blogAction";

const blogSlice = createSlice({
    name: "blog",
    initialState: {
        data: { blogs: [], total: 0 },
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            //create blog
            .addCase(createBlogAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createBlogAction.fulfilled, (state, action) => {
                state.loading = false;
                state.data.blogs.push(action.payload);
                state.data.total += 1;
            })
            .addCase(createBlogAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});
export default blogSlice.reducer;
