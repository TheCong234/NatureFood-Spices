import { createBrowserRouter } from "react-router-dom";
import { AdminLayout, EmptyLayout, MainLayout } from "../components/layout";
import {
    FavoritePage,
    HomeHostPage,
    HomePage,
    LoginPage,
    RegisterPage,
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
                        path: "/host",
                        element: <HomeHostPage />,
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
