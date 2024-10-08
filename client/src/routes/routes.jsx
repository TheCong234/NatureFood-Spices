import { createBrowserRouter } from "react-router-dom";
import { AdminLayout, EmptyLayout, MainLayout } from "../layout";
import { RegisterPage, LoginPage, ForgotPage } from "../pages/Common";
import {
    CategoryStore,
    DashboardStore,
    EventStore,
    HomeStore,
    RegisterStore,
    SettingStore,
    ProductStore,
    PromoteStore,
} from "../pages";

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
    EventAdmin,
    EmailAdmin,
    DocumentAdmin,
    CategoryProductAdmin,
    BillAdmin,
} from "../pages/Admin";

import { FavoritePage, HomePage } from "../pages";
import ProductDetail from "../pages/Customer/ProductDetails";

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
                        path: "/favorite",
                        element: <FavoritePage />,
                    },
                    {
                        path: "/register-store",
                        element: <RegisterStore />,
                    },
                    {
                        path: "product/detail/:productId",
                        element: <ProductDetail />,
                    },

                    {
                        path: "/host",
                        element: <HomeStore />,
                        children: [
                            {
                                path: "dashboard",
                                element: <DashboardStore />,
                            },
                            {
                                path: "product",
                                element: <ProductStore />,
                            },
                            {
                                path: "category",
                                element: <CategoryStore />,
                            },
                            {
                                path: "event",
                                element: <EventStore />,
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
                        path: "user",
                        element: <UserAdmin />,
                    },
                    {
                        path: "seller",
                        element: <SellerAdmin />,
                    },
                    {
                        path: "categoryproduct",
                        element: <CategoryProductAdmin />,
                    },
                    {
                        path: "product",
                        element: <ProductAdmin />,
                    },
                    {
                        path: "event",
                        element: <EventAdmin />,
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
                        path: "email",
                        element: <EmailAdmin />,
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
                        path: "document",
                        element: <DocumentAdmin />,
                    },
                    {
                        path: "profiler",
                        element: <ProfilerAdmin />,
                    },
                ],
            },
        ],
    },
]);
