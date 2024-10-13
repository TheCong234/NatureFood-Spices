export const UserV1 = {
    USER_LOGIN: "/user/login",
    USER_REGISTER: "/user/register",
    USER_CURRENT: "/user/me",
    USER_SEND_OTP: "user/verify-email/otp",
    USER_UPDATE: "/user/me",
    GET_PEOPLE: "/user/all",
    UPDATE_USER_BY_ID: "/user/",
};

export const StoreV1 = {
    STORE_CREATE: "/store/new",
    STORE_GET_STORE_BY_ID: "/store",
};

export const CategoryV1 = {
    CREATE: "/category/create",
    CATEGORY_GET_ALL: "/category/all",
    DELETE: "/category/",
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

export const BannerV1 = {
    GET_BANNERS: "/banner/all",
    CREATE: "/banner/create",
    BANNER_GET_BY_CURRENT_USER: "/banner/store",
    UPDATE: "/banner/",
    DELETE: "/banner/",
};

export const ReviewV1 = {
    REVIEW_CREATE: "/review/",
};
