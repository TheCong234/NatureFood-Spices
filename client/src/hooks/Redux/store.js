import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User/userSlice";
import categoryReducer from "./Category/categorySlice";
import tagReducer from "./Tag/tagSlice";
import storeReducer from "./Store/storeSlice";
import bannerReducer from "./Banner/bannerSlice";
import newestProductsReducer from "./Product/newestProductsSlice";
import productReducer from "./Product/productSlice";
import favoriteReducer from "./Favorite/favoriteSlice";
import cartReducer from "./Cart/cartSlice";
import storeProductReducer from "./StoreProduct/storeProductSlice";
import blogReducer from "./Blog/blogSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        category: categoryReducer,
        tag: tagReducer,
        store: storeReducer,
        banner: bannerReducer,
        newestProducts: newestProductsReducer,
        product: productReducer,
        favorite: favoriteReducer,
        cart: cartReducer,
        storeProduct: storeProductReducer,
        blog: blogReducer,
    },
});
