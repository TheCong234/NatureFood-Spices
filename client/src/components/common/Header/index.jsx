import React from "react";
import "../../../assets/styles/main.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import {
    AppBar,
    Badge,
    Box,
    Container,
    IconButton,
    InputAdornment,
    InputBase,
    Stack,
    Toolbar,
} from "@mui/material";
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
        <Box className="w-full fixed z-[999] ">
            <Box className=" mainlayout-header">
                <Container>
                    <div className="header-top flex items-center justify-between p-4">
                        <div className="">
                            <img
                                src="/src/assets/images/logo.png"
                                alt="Logo"
                                className="w-[80px]"
                            />
                        </div>
                        <div className="relative flex-1 px-20">
                            <InputBase
                                startAdornment={
                                    <InputAdornment position="start">
                                        <SearchIcon
                                            sx={{
                                                fontSize: "30px",
                                                paddingLeft: "10px",
                                                opacity: "0.6",
                                            }}
                                        />
                                    </InputAdornment>
                                }
                                placeholder="Search…"
                                style={{
                                    width: "640px",
                                    paddingLeft: "17px",
                                    padding: "3px",
                                    borderRadius: "17px",
                                    backgroundColor: "white",
                                }}
                                inputProps={{ "aria-label": "search" }}
                            />
                        </div>
                        <Stack direction="row" spacing={0}>
                            <IconButton color="inherit">
                                <LightModeIcon />
                            </IconButton>
                            <IconButton color="inherit">
                                <Badge badgeContent={4} color="inherit">
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>
                            <IconButton color="inherit">
                                <NotificationsNoneIcon />
                            </IconButton>
                            <IconButton color="inherit">
                                <PersonOutlineIcon />
                            </IconButton>
                        </Stack>
                    </div>
                </Container>
            </Box>
            <div className="bg-gray-100 pt-2 pb-2">
                <Container className="flex justify-center">
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
                    </Box>
                </Container>
            </div>
        </Box>
    );
};

export default Header;
