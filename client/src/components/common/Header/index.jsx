import React from "react";
import "../../../assets/styles/main.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <img src="your-logo.png" alt="Logo" className="logo" />
                <span className="app-name">Nature Food</span>
            </div>
            <div className="header-center">
                <input
                    type="text"
                    placeholder="Search"
                    className="search-input"
                />
            </div>
            <div className="header-right">
                <span className="sun-icon">
                    <LightModeIcon />
                </span>
                <span className="icon cart-icon">
                    <ShoppingCartIcon />
                    <span className="cart-count">3</span>
                </span>
                <span className="icon bell-icon">
                    <NotificationsNoneIcon />
                </span>
                <span className="icon user-icon">
                    <PersonOutlineIcon />
                </span>
            </div>
        </header>
    );
};

export default Header;
