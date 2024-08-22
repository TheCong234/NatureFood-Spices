import { createBrowserRouter } from "react-router-dom";
import { AdminLayout, EmptyLayout, MainLayout } from "../components/layout";
import {
    CategoryHost,
    DashboardHost,
    EventHost,
    FavoritePage,
    HomeHost,
    HomePage,
    LoginPage,
    ProductHost,
    RegisterPage,
    RegisterStore,
    SettingHost,
} from "../components/pages";
import { DashboardAdmin, ProductAdmin, StoresAdmin } from "../components/Admin";
import ListProduct from "../components/Admin/Product/list.product";
import CreateProduct from "../components/Admin/Product/create.product";

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
                        path: "/host",
                        element: <HomeHost />,
                        children: [
                            {
                                path: "dashboard",
                                element: <DashboardHost />,
                            },
                            {
                                path: "product",
                                element: <ProductHost />,
                                children: [
                                    {
                                        path: "list",
                                        element: <ListProduct />,
                                    },
                                    {
                                        path: "new",
                                        element: <CreateProduct />,
                                    },
                                ],
                            },
                            {
                                path: "category",
                                element: <CategoryHost />,
                            },
                            {
                                path: "event",
                                element: <EventHost />,
                            },
                            {
                                path: "setting",
                                element: <SettingHost />,
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
                        path: "stores",
                        element: <StoresAdmin />,
                    },
                    {
                        path: "product",
                        element: <ProductAdmin />,
                        children: [
                            {
                                path: "",
                                element: <ListProduct />,
                            },
                            {
                                path: "new",
                                element: <CreateProduct />,
                            },
                        ],
                    },
                ],
            },
        ],
    },
]);
