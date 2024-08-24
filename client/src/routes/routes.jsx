import { createBrowserRouter } from "react-router-dom";
import { AdminLayout, EmptyLayout, MainLayout } from "../components/layout";
import { DashboardAdmin, ProductAdmin, StoresAdmin } from "../components/Admin";
import {
    CategoryStore,
    DashboardStore,
    EventStore,
    FavoritePage,
    HomeStore,
    HomePage,
    LoginPage,
    RegisterPage,
    RegisterStore,
    SettingStore,
    ProductStore,
} from "../components/pages";

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
                    },
                ],
            },
        ],
    },
]);
