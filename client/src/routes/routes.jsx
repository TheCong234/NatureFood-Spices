import { createBrowserRouter } from "react-router-dom";
import { AdminLayout, EmptyLayout, MainLayout, SellerLayout } from "../layout";
import { RegisterPage, LoginPage, ForgotPage } from "../pages/Common";
import {
    DashboardSeller,
    EventStore,
    SettingStore,
    ProductListSeller,
    PromoteStore,
    RegisterSeller,
    ProductCartSeller,
    StoreProductSeller,
} from "../pages/Seller";

import {
    DashboardAdmin,
    ProductAdmin,
    UserAdmin,
    SellerAdmin,
    ReportAdmin,
    ProfilerAdmin,
    OrderAdmin,
    NotificationAdmin,
    MessageAdmin,
    CategoryProductAdmin,
    BillAdmin,
    CreateProductAdmin,
    EventListAdmin,
    EventCreateAdmin,
    EventDetailAdmin,
    EmailInboxAdmin,
    EmailCreateAdmin,
    BlogListAdmin,
    BlogCreateAdmin,
    StoresAdmin,
    BannerAdmin,
} from "../pages/Admin";

import { HomePage } from "../pages";
import ProductDetail from "../pages/Customer/ProductDetails";
import Error500 from "../pages/Common/Error500";
import Error404 from "../pages/Common/Error404";
import { Wishlist, Shipping, Vendor, TrackOrder, Checkout, Blog, Products, Cart, Notification, Orderlist } from "../pages/Customer";

export const router = createBrowserRouter([
    {
        path: "",
        element: <EmptyLayout />,
        children: [
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/register",
                element: <RegisterPage />,
            },
            {
                path: "/forgot",
                element: <ForgotPage />,
            },
            {
                path: "/register-seller",
                element: <RegisterSeller />,
            },

            {
                path: "/",
                element: <MainLayout />,
                children: [
                    {
                        path: "",
                        element: <HomePage />,
                    },
                    {
                        path: "/home",
                        element: <HomePage />,
                    },
                    {
                        path: "product/details/:storeProductId",
                        element: <ProductDetail />,
                    },
                    {
                        path: "/wishlist",
                        element: <Wishlist />,
                    },
                    {
                        path: "/shipping",
                        element: <Shipping />,
                    },
                    {
                        path: "/vendor",
                        element: <Vendor />,
                    },
                    {
                        path: "/trackOrder",
                        element: <TrackOrder />,
                    },
                    {
                        path: "/checkout",
                        element: <Checkout />,
                    },
                    {
                        path: "/blog",
                        element: <Blog />,
                    },
                    {
                        path: "/product/list",
                        element: <Products />,
                    },
                    {
                        path: "/cart",
                        element: <Cart />,
                    },
                    {
                        path: "/notification",
                        element: <Notification />,
                    },
                    {
                        path: "/orderlist",
                        element: <Orderlist />,
                    },
                ],
            },
            {
                path: "/seller",
                element: <SellerLayout />,
                children: [
                    {
                        path: "dashboard",
                        element: <DashboardSeller />,
                    },
                    {
                        path: "product/list",
                        element: <ProductListSeller />,
                    },
                    {
                        path: "product/cart",
                        element: <ProductCartSeller />,
                    },
                    {
                        path: "store-product/list",
                        element: <StoreProductSeller />,
                    },
                    {
                        path: "setting",
                        element: <SettingStore />,
                    },
                    {
                        path: "promote",
                        element: <PromoteStore />,
                    },
                ],
            },
            {
                path: "/admin",
                element: <AdminLayout />,
                children: [
                    {
                        path: "dashboard",
                        element: <DashboardAdmin />,
                    },
                    {
                        path: "customer",
                        element: <UserAdmin />,
                    },
                    {
                        path: "store",
                        element: <StoresAdmin />,
                    },
                    {
                        path: "category",
                        element: <CategoryProductAdmin />,
                    },
                    {
                        path: "banner",
                        element: <BannerAdmin />,
                    },
                    {
                        path: "product/list",
                        element: <ProductAdmin />,
                    },
                    {
                        path: "product/create",
                        element: <CreateProductAdmin />,
                    },
                    {
                        path: "event",
                        element: <EventListAdmin />,
                    },
                    {
                        path: "event/create",
                        element: <EventCreateAdmin />,
                    },
                    {
                        path: "event/:id",
                        element: <EventDetailAdmin />,
                    },
                    {
                        path: "order",
                        element: <OrderAdmin />,
                    },
                    {
                        path: "message",
                        element: <MessageAdmin />,
                    },
                    {
                        path: "email/inbox",
                        element: <EmailInboxAdmin />,
                    },
                    {
                        path: "email/create",
                        element: <EmailCreateAdmin />,
                    },
                    {
                        path: "notification",
                        element: <NotificationAdmin />,
                    },
                    {
                        path: "bill",
                        element: <BillAdmin />,
                    },
                    {
                        path: "report",
                        element: <ReportAdmin />,
                    },
                    {
                        path: "blog/list",
                        element: <BlogListAdmin />,
                    },
                    {
                        path: "blog/create",
                        element: <BlogCreateAdmin />,
                    },
                    {
                        path: "notify",
                        element: <NotificationAdmin />,
                    },
                    {
                        path: "bill",
                        element: <BillAdmin />,
                    },
                    {
                        path: "report",
                        element: <ReportAdmin />,
                    },
                    {
                        path: "profile",
                        element: <ProfilerAdmin />,
                    },
                ],
            },
        ],
    },
    {
        path: "/error-500",
        element: <Error500 />,
    },
    {
        path: "/error-404",
        element: <Error404 />,
    },
]);
