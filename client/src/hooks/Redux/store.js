import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User/userSlice";
import categoryReducer from "./Category/categorySlice";
import tagReducer from "./Tag/tagSlice";
import storeReducer from "./Store/storeSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        category: categoryReducer,
        tag: tagReducer,
        store: storeReducer,
    },
});
