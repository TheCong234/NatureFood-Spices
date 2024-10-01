import { createBrowserRouter } from "react-router-dom";
import { AdminLayout, EmptyLayout, MainLayout } from "../layout";
import { Dashboard, Product, Stores } from "../pages/Admin";
import {
  CategoryStore,
  DashboardStore,
  EventStore,
  HomeStore,
  LoginPage,
  RegisterPage,
  RegisterStore,
  SettingStore,
  ProductStore,
  PromoteStore,
} from "../pages";

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
            element: <Dashboard />,
          },
          {
            path: "stores",
            element: <Stores />,
          },
          {
            path: "product",
            element: <Product />,
          },
        ],
      },
    ],
  },
]);
