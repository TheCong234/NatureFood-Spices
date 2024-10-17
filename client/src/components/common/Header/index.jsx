import React from "react";
import "../../../assets/styles/main.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { AppBar, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

const items = [
    {
        to: "/",
        text: "Trang chủ",
    },
    {
        to: "/product",
        text: " Sản phẩm",
    },
    {
        to: "/wishlist",
        text: " Danh sách",
    },
    {
        to: "/shipping",
        text: "Thông tin vận chuyển",
    },
    {
        to: "/vendor",
        text: " Trở thành người bán",
    },
    {
        to: "/trackOrder",
        text: "  Theo dõi đơn hàng",
    },
    {
        to: "/checkout",
        text: "  Thanh toán",
    },
];

const Header = () => {
    return (
        <header className="header fixed w-full z-[999]">
            {/* Top Header Section */}
            <div className="header-top flex items-center justify-between p-4">
                {/* Logo Section */}
                <div className="header-left flex items-center">
                    <img src="your-logo.png" alt="Logo" className="logo mr-2" />
                    <span className="app-name font-bold text-lg">phoenix</span>
                </div>

                {/* Search Bar */}
                <div className="header-center flex-grow mx-4">
                    <input
                        type="text"
                        placeholder="Search"
                        className="search-input w-full p-2 border rounded-full pl-10"
                    />
                </div>

                {/* Icon Section */}
                <div className="header-right flex items-center gap-4">
                    <span className="sun-icon cursor-pointer">
                        <LightModeIcon />
                    </span>
                    <span className="icon cart-icon relative cursor-pointer">
                        <ShoppingCartIcon />
                        <span className="cart-count absolute top-0 right-0 bg-blue-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                            3
                        </span>
                    </span>
                    <span className="icon bell-icon cursor-pointer">
                        <NotificationsNoneIcon />
                    </span>
                    <span className="icon user-icon cursor-pointer">
                        <PersonOutlineIcon />
                    </span>
                </div>
            </div>
            <div className="category-header  p-2 bg-gray-100">
                <AppBar position="static" color="transparent" elevation={0}>
                    <div>
                        <Box className="flex justify-center w-full">
                            <Box>
                                {items.map((item, index) => (
                                    <NavLink
                                        key={index}
                                        to={item.to}
                                        className="nav-link"
                                    >
                                        {item.text}
                                    </NavLink>
                                ))}
                                {/* <NavLink to="/" className="nav-link">
                                    Home
                                </NavLink>
                                <NavLink to="/stores" className="nav-link">
                                    My Favourite Stores
                                </NavLink>
                                <NavLink to="/products" className="nav-link">
                                    Products
                                </NavLink>
                                <NavLink to="/wishlist" className="nav-link">
                                    Wishlist
                                </NavLink>
                                <NavLink
                                    to="/shipping-info"
                                    className="nav-link"
                                >
                                    Shipping Info
                                </NavLink>
                                <NavLink to="/vendor" className="nav-link">
                                    Be a Vendor
                                </NavLink>
                                <NavLink to="/track-order" className="nav-link">
                                    Track Order
                                </NavLink>
                                <NavLink to="/checkout" className="nav-link">
                                    Checkout
                                </NavLink> */}
                            </Box>
                        </Box>
                    </div>
                </AppBar>
            </div>
        </header>
    );
};

export default Header;
