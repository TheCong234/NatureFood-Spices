import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTags } from "../../../apis/tag.api";

export const getTagsAction = createAsyncThunk(
    "category/getTagsAction",
    async () => {
        const result = await getTags();
        return result;
    }
);
