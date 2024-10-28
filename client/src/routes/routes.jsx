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
import {
    Wishlist,
    Shipping,
    Vendor,
    TrackOrder,
    Checkout,
    Blog,
    Products,
    Cart,
    Notification,
    Blogs,
    Category,
    Categories,
    GroupByProduct,
    My,
    Delivery,
    Account,
    OrderList,
    Profile,
    OrderDetails,
} from "../pages/Customer";

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
                        path: "/product/details/:storeProductId",
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
                        path: "/blog/list",
                        element: <Blogs />,
                    },
                    {
                        path: "/blog/:slug",
                        element: <Blog />,
                    },
                    {
                        path: "/product/list",
                        element: <Products />,
                    },
                    {
                        path: "/product/category/:categoryId",
                        element: <Category />,
                    },
                    {
                        path: "/group-by-product/:productId",
                        element: <GroupByProduct />,
                    },
                    {
                        path: "/categories",
                        element: <Categories />,
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
                        path: "/my",
                        element: <My />,
                        children: [
                            {
                                path: "",
                                element: <Account />,
                            },
                            {
                                path: "account",
                                element: <Account />,
                            },
                            {
                                path: "order-list",
                                element: <OrderList />,
                            },
                            {
                                path: "order-details/:orderId",
                                element: <OrderDetails />,
                            },
                            {
                                path: "profile",
                                element: <Profile />,
                            },
                            {
                                path: "delivery",
                                element: <Delivery />,
                            },
                        ],
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
        path: "*",
        element: <Error404 />,
    },
]);
