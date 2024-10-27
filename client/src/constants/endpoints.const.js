export const UserV1 = {
    USER_LOGIN: "/user/login",
    USER_REGISTER: "/user/register",
    USER_CURRENT: "/user/me",
    USER_SEND_OTP: "user/verify-email/otp",
    USER_UPDATE: "/user/me",
    GET_PEOPLE: "/user/all",
    UPDATE_USER_BY_ID: "/user/",
    CREATE_DELIVERY: "/user/delivery/create",
    GET_DELIVERY: "/user/delivery/all",
};

export const StoreV1 = {
    GET_CURRENT: "/store/current",
    STORE_CREATE: "/store/new",
    STORE_GET_STORE_BY_ID: "/store",
};

export const CategoryV1 = {
    CREATE: "/category/create",
    CATEGORY_GET_ALL: "/category/all",
    DELETE: "/category/",
    GET_PRODUCTS_EACH_CATEGORY: "/category/products-each-category",
};

export const TagV1 = {
    TAG_GET_ALL: "/tag/all",
};

export const ProductV1 = {
    GET_PRODUCTS: "/product/all",
    PRODUCT_CREATE: "/product/create",
    PRODUCT_NEWEST: "/product/newest",
    PRODUCT_DETAILS: "/product/",
};

export const StoreProductV1 = {
    CREATE: "/store-product/create",
    GET_STORE_PRODUCTS: "/store-product/all",
    GET_STORE_PRODUCT: "/store-product/details/",
    GET_STORE_PRODUCT_BY_CATEGORY: "/store-product/category/",
    GET_STORE_PRODUCT_BY_PRODUCT: "/store-product/group-by-product/",
};

export const BannerV1 = {
    GET_BANNERS: "/banner/all",
    CREATE: "/banner/create",
    BANNER_GET_BY_CURRENT_USER: "/banner/store",
    UPDATE: "/banner/",
    DELETE: "/banner/",
};

export const BlogV1 = {
    CREATE: "/blog/create",
    GET_BLOGS: "/blog/list",
    GET_BLOG: "/blog/",
};

export const ReviewV1 = {
    CREATE: "/review/",
    GET_ALL: "/review/",
    UPDATE: "/review/",
    DELETE: "/review/",
};

export const FavoriteV1 = {
    ADD_PRODUCT: "/favorite/product/add/",
    ADD_STORE_PRODUCT: "/favorite/store-product/",

    REMOVE_PRODUCT: "/favorite/product/remove/",
    GET_FAVORITE_PRODUCT: "/favorite/product",
    GET_FAVORITE_STORE_PRODUCT: "/favorite/store-product/all",

    DELETE_FAVORITE_STORE_PRODUCT: "/favorite/store-product/",
};

export const StoreFavoriteV1 = {
    MODIFY: "/favorite/product/",
    GET_ITEMS: "favorite/product/all",
};

export const StoreCartV1 = {
    ADD: "/store-cart/",
    DELETE: "/store-cart/items/",
    GET_STORE_CART: "/store-cart/all",
    ADJUSTMENT_ITEM: "/store-cart/items/",
};

export const CartV1 = {
    CREATE: "/cart",
    GET_ALL: "/cart/all",
    UPDATE_ITEM: "/cart/",
    DELETE: "/cart/",
};

export const OrderV1 = {
    CREATE_CUSTOMER_ORDER: "/order/customer/create",
};
