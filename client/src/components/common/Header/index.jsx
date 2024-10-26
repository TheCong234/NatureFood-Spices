import React, { useEffect } from "react";
import "../../../assets/styles/main.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { AppBar, Badge, Box, Container, IconButton, InputAdornment, InputBase, Stack, Toolbar } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartItemsAction } from "../../../hooks/Redux/Cart/cartAction";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PersonIcon from "@mui/icons-material/Person";

const items = [
    {
        to: "/",
        text: "Trang chủ",
    },
    {
        to: "/product/list?skip=0&take=10",
        text: " Sản phẩm",
    },
    {
        to: "/blog/list?skip=0&take=10",
        text: "Blogs",
    },
    {
        to: "/categories",
        text: "Danh mục",
    },
    {
        to: "/register-seller",
        text: " Trở thành người bán",
    },
    {
        to: "/trackOrder",
        text: "  Theo dõi đơn hàng",
    },
];

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { data: cartData } = useSelector((state) => state.cart);

    // const handleGetData = async
    useEffect(() => {
        dispatch(getCartItemsAction({ skip: 0, take: 10 }));
    }, []);
    return (
        <Box className="w-full fixed z-[999] ">
            <Box className=" mainlayout-header">
                <Container>
                    <div className="header-top flex items-center justify-between p-4">
                        <div className="">
                            <img src="/src/assets/images/logo.png" alt="Logo" className="w-[80px]" />
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
                            <IconButton color="inherit" onClick={() => navigate("/cart?skip=0&take=10")}>
                                <Badge badgeContent={cartData?.total} color="success" showZero>
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>
                            <IconButton color="inherit" onClick={() => navigate("/notification?skip=0&take=10")}>
                                <Badge badgeContent={0} color="success" showZero>
                                    <NotificationsActiveIcon />
                                </Badge>
                            </IconButton>
                            <IconButton color="inherit">
                                <PersonIcon />
                            </IconButton>
                        </Stack>
                    </div>
                </Container>
            </Box>
            <div className="bg-gray-100 pt-2 pb-2">
                <Container className="flex justify-center">
                    <Box>
                        {items.map((item, index) => (
                            <NavLink key={index} to={item.to} className="nav-link">
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
