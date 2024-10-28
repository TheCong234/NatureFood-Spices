import React, { Fragment, useEffect, useState } from "react";
import "../../../assets/styles/main.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    Button,
    Container,
    Divider,
    Fade,
    IconButton,
    InputAdornment,
    InputBase,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Paper,
    Popper,
    Stack,
    Toolbar,
    Tooltip,
    Typography,
} from "@mui/material";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartItemsAction } from "../../../hooks/Redux/Cart/cartAction";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PersonIcon from "@mui/icons-material/Person";
import ArrowRight from "@mui/icons-material/ArrowRight";
import { Logout, Person, Settings } from "@mui/icons-material";

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

    const [anchorEl, setAnchorEl] = useState(null);
    const [openPerson, setOpenPerson] = useState(false);

    const handleClickPersonIcon = (event) => {
        setAnchorEl(event.currentTarget);
        setOpenPerson(!openPerson);
    };

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

                            <div className="flex bg-green-700 items-center pr-3 rounded-[20px] ml-2 cursor-pointer " onClick={handleClickPersonIcon}>
                                <IconButton color="inherit" sx={{ bgcolor: "#f3f4f6", border: "1px solid green", "&:hover": { bgcolor: "white" } }}>
                                    <PersonIcon fontSize="small" />
                                </IconButton>
                                <p className="ml-1">The</p>
                            </div>
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
            <Fragment>
                <Menu
                    anchorEl={anchorEl}
                    open={openPerson}
                    onClose={() => setOpenPerson(false)}
                    onClick={() => setOpenPerson(false)}
                    slotProps={{
                        paper: {
                            elevation: 0,
                            sx: {
                                overflow: "visible",
                                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                mt: 1.5,
                                "& .MuiAvatar-root": {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                "&::before": {
                                    content: '""',
                                    display: "block",
                                    position: "absolute",
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: "background.paper",
                                    // transform: "translateY(-50%) rotate(45deg)",
                                    zIndex: 0,
                                },
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                    <MenuItem>
                        <Avatar /> Profile
                    </MenuItem>
                    <MenuItem>
                        <Box component={Link} to="/my" className="text-inherit hover:text-green-600 flex items-center">
                            <Avatar /> Tài khoản của tôi
                        </Box>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItemIcon>
                            <PersonIcon fontSize="small" />
                        </ListItemIcon>
                        Add another account
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
            </Fragment>
        </Box>
    );
};

export default Header;
