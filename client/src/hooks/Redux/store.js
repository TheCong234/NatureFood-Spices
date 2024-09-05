import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User/userSlice";
import categoryReducer from "./Category/categorySlice";
import tagReducer from "./Tag/tagSlice";
import storeReducer from "./Store/storeSlice";
import bannerReducer from "./Banner/bannerSlice";
import newestProductsReducer from "./NewestProducts/newestProductsSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        category: categoryReducer,
        tag: tagReducer,
        store: storeReducer,
        banner: bannerReducer,
        newestProducts: newestProductsReducer,
    },
});
