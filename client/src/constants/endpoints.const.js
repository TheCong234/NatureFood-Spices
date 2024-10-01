export const UserV1 = {
    USER_LOGIN: "/user/login",
    USER_REGISTER: "/user/register",
    USER_CURRENT: "/user/info",
    USER_SEND_OTP: "user/verify-email/otp",
    USER_UPDATE: "/user/info",
};

export const StoreV1 = {
    STORE_CREATE: "/store/new",
    STORE_GET_STORE_BY_ID: "/store",
};

export const CategoryV1 = {
    CATEGORY_GET_ALL: "/category/all",
};

export const TagV1 = {
    TAG_GET_ALL: "/tag/all",
};

export const ProductV1 = {
    PRODUCT_CREATE: "/product/new",
    PRODUCT_NEWEST: "/product/newest",
    PRODUCT_DETAILS: "/product/",
};

export const BannerV1 = {
    BANNER_GET_ALL: "/banner/all",
    BANNER_CREATE: "/banner/new",
    BANNER_GET_BY_CURRENT_USER: "/banner/store",
};

export const ReviewV1 = {
    REVIEW_CREATE: "/review/",
};
