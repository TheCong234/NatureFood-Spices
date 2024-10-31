import React, { Fragment, useEffect, useMemo, useState } from "react";
import "../../../assets/styles/main.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import {
    Avatar,
    Badge,
    Box,
    Container,
    Divider,
    IconButton,
    InputAdornment,
    InputBase,
    ListItemIcon,
    Menu,
    MenuItem,
    Stack,
    Tooltip,
} from "@mui/material";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartItemsAction } from "../../../hooks/Redux/Cart/cartAction";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PersonIcon from "@mui/icons-material/Person";
import { Logout, Settings } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import useSnackNotify from "../../../components/SnackNotify";

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
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const snackNotify = useSnackNotify();
    const { data: cartData } = useSelector((state) => state.cart);
    const { currentUser, token } = useSelector((state) => state.user);
    const { data: favoriteData } = useSelector((state) => state.favorite);

    const [anchorEl, setAnchorEl] = useState(null);
    const [openPerson, setOpenPerson] = useState(false);

    const handleClickPersonIcon = (event) => {
        setAnchorEl(event.currentTarget);
        setOpenPerson(!openPerson);
    };

    const handleSearch = () => {
        setKeyword("");
        navigate(`/search?keyword=${keyword}&skip=0&take=10`);
    };

    // const handleGetData = async
    useEffect(() => {
        dispatch(getCartItemsAction({ skip: 0, take: 10 }));
    }, []);
    return (
        <div className="sticky top-0 z-50">
            <Box className=" mainlayout-header">
                <Container>
                    <div className="header-top flex items-center justify-between p-4">
                        <div className="">
                            <img src="/assets/images/logo.png" alt="Logo" className="w-[80px]" />
                        </div>
                        <div className="relative flex-[0.8]">
                            <InputBase
                                className="w-full"
                                startAdornment={
                                    <InputAdornment position="start" onClick={handleSearch} className="">
                                        <IconButton>
                                            <SearchIcon
                                                sx={{
                                                    fontSize: "20px",
                                                    opacity: "0.6",
                                                    cursor: "pointer",
                                                }}
                                            />
                                        </IconButton>
                                    </InputAdornment>
                                }
                                endAdornment={
                                    <InputAdornment position="start" onClick={() => setKeyword("")} className="">
                                        <CloseOutlinedIcon
                                            sx={{
                                                opacity: "0.6",
                                                cursor: "pointer",
                                                ":hover": {
                                                    opacity: "1",
                                                },
                                            }}
                                        />
                                    </InputAdornment>
                                }
                                placeholder="Search…"
                                style={{
                                    borderRadius: "17px",
                                    backgroundColor: "white",
                                    padding: "4px ",
                                    outline: "1px solid grey",
                                }}
                                value={keyword}
                                inputProps={{ "aria-label": "search" }}
                                onChange={(e) => setKeyword(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                            />
                        </div>
                        <Stack direction="row" spacing={0}>
                            <Tooltip title="Yêu thích">
                                <IconButton
                                    color="inherit"
                                    onClick={() => {
                                        if (!token) {
                                            snackNotify("error")("Bạn phải ĐĂNG NHẬP để sử dụng chức năng này");
                                            return;
                                        }
                                        navigate("/wishlist");
                                    }}
                                >
                                    <Badge badgeContent={favoriteData?.total} color="error" showZero>
                                        <FavoriteIcon />
                                    </Badge>
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="Giỏ hàng">
                                <IconButton
                                    color="inherit"
                                    onClick={() => {
                                        if (!token) {
                                            snackNotify("error")("Bạn phải ĐĂNG NHẬP để sử dụng chức năng này");
                                            return;
                                        }
                                        navigate("/cart?skip=0&take=10");
                                    }}
                                >
                                    <Badge badgeContent={cartData?.total} color="success" showZero>
                                        <ShoppingCartIcon />
                                    </Badge>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Thông báo">
                                <IconButton
                                    color="inherit"
                                    onClick={() => {
                                        if (!token) {
                                            snackNotify("error")("Bạn phải ĐĂNG NHẬP để sử dụng chức năng này");
                                            return;
                                        }
                                        navigate("/notification?skip=0&take=10");
                                    }}
                                >
                                    <Badge badgeContent={0} color="warning" showZero>
                                        <NotificationsActiveIcon />
                                    </Badge>
                                </IconButton>
                            </Tooltip>

                            <div className="flex items-center">
                                <div
                                    className="flex bg-green-700 items-center pr-3 rounded-[20px] ml-2 cursor-pointer hover:bg-green-600"
                                    onClick={handleClickPersonIcon}
                                >
                                    <IconButton
                                        color="inherit"
                                        sx={{ bgcolor: "#f3f4f6", border: "1px solid green", "&:hover": { bgcolor: "white" } }}
                                        size="small"
                                    >
                                        <PersonIcon fontSize="small" />
                                    </IconButton>
                                    <p className="ml-1">{currentUser && currentUser?.username?.split(" ")[0]}</p>
                                </div>
                            </div>
                        </Stack>
                    </div>
                </Container>
            </Box>
            <div className="bg-[#fff7ed] pt-2 pb-2">
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
                    sx={{}}
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
                                paddingTop: 0,
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
                                "& .css-1toxriw-MuiList-root-MuiMenu-list": {
                                    paddingTop: 0,
                                },
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                    {currentUser && (
                        <Box>
                            <MenuItem sx={{ bgcolor: "#ecfccb" }}>
                                <Box component={Link} to="/my/account" className="w-full text-inherit hover:text-green-600 flex items-center ">
                                    <Avatar />
                                    <div>
                                        <p>{currentUser?.username}</p>
                                        <p className="text-sm font-normal text-gray-400">Thông tin hồ sơ của bạn</p>
                                    </div>
                                </Box>
                            </MenuItem>
                            <MenuItem>
                                <Box component={Link} to="/my/order-list" className="w-full text-inherit hover:text-green-600 flex items-center">
                                    <ListItemIcon>
                                        <ReceiptLongOutlinedIcon />
                                    </ListItemIcon>
                                    Đơn hàng
                                </Box>
                            </MenuItem>
                            {currentUser?.role == "seller" ? (
                                <MenuItem>
                                    <Box component={Link} to="/seller" className="w-full text-inherit hover:text-green-600 flex items-center">
                                        <ListItemIcon>
                                            <StoreMallDirectoryOutlinedIcon fontSize="small" />
                                        </ListItemIcon>
                                        {currentUser.store.name}
                                    </Box>
                                </MenuItem>
                            ) : (
                                <MenuItem>
                                    <Box
                                        component={Link}
                                        to="/seller-register"
                                        className="w-full text-inherit hover:text-green-600 flex items-center"
                                    >
                                        <ListItemIcon>
                                            <StoreMallDirectoryOutlinedIcon fontSize="small" />
                                        </ListItemIcon>
                                        Đăng kí bán hàng
                                    </Box>
                                </MenuItem>
                            )}
                        </Box>
                    )}

                    <Divider />
                    <MenuItem>
                        <ListItemIcon>
                            <HelpOutlineOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        Trợ giúp
                    </MenuItem>

                    <MenuItem>
                        {currentUser ? (
                            <Box component={Link} to="/logout" className="w-full text-inherit hover:text-green-600 flex items-center">
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Đăng xuất
                            </Box>
                        ) : (
                            <Box component={Link} to="/login" className="w-full text-inherit hover:text-green-600 flex items-center">
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Đăng nhập/Đăng ký
                            </Box>
                        )}
                    </MenuItem>
                </Menu>
            </Fragment>
        </div>
    );
};

export default Header;
