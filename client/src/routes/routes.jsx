import { createBrowserRouter } from "react-router-dom";
import { AdminLayout, EmptyLayout, MainLayout, SellerLayout } from "../layout";
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
} from "../pages/Admin";

import { FavoritePage, HomePage } from "../pages";
import ProductDetail from "../pages/Customer/ProductDetails";
import Error500 from "../pages/Common/Error500";
import Error404 from "../pages/Common/Error404";

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
                ],
            },
            {
                path: "/seller",
                element: <SellerLayout />,
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
                        path: "product",
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
