import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { rootColor } from "../theme/colors";
import PeopleIcon from "@mui/icons-material/People";
import ProductIcon from "@mui/icons-material/ShoppingCart";
import EventIcon from "@mui/icons-material/Event";
import EmailIcon from "@mui/icons-material/Email";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from "@mui/icons-material/Category";
import GradingIcon from "@mui/icons-material/Grading";
import MessageIcon from "@mui/icons-material/Message";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PaymentsIcon from "@mui/icons-material/Payments";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BookIcon from "@mui/icons-material/Book";
import { NavLink, Outlet } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentStoreAction } from "../hooks/Redux/Store/storeAction";

const drawerWidth = 240;

const items = [
    {
        to: "/seller/dashboard",
        icon: <DashboardIcon />,
        text: "Dashboard",
    },
    // {
    //     to: "/seller/customer",
    //     icon: <PeopleIcon />,
    //     text: "Người dùng",
    // },
    // {
    //     to: "/seller/store",
    //     icon: <SupervisedUserCircleIcon />,
    //     text: "Cửa hàng",
    // },
    // {
    //     to: "/seller/category",
    //     icon: <CategoryIcon />,
    //     text: "Danh mục",
    // },
    {
        icon: <ProductIcon />,
        text: "Sản phẩm cty",
        fieldName: "products",
        listItems: [
            {
                to: "/seller/product/list?skip=0&take=10&type=all",
                text: "Danh sách",
            },
            {
                to: "/seller/product/cart",
                text: "Giỏ hàng",
            },
        ],
    },
    {
        to: "/seller/store-product/list",
        icon: <PeopleIcon />,
        text: "Sản phẩm cửa hàng",
    },
    {
        icon: <EventIcon />,
        text: "Sự kiện",
        fieldName: "event",
        listItems: [
            {
                to: "/seller/event",
                text: "Danh sách",
            },
            {
                to: "/seller/event/:id",
                text: "Chi tiết",
            },
            {
                to: "/seller/product/create",
                text: "Thêm mới",
            },
        ],
    },
    {
        to: "/seller/order",
        icon: <GradingIcon />,
        text: "Đơn hàng",
    },
    {
        to: "/seller/message",
        icon: <MessageIcon />,
        text: "Tin nhắn",
    },
    {
        icon: <EmailIcon />,
        text: "Email",
        fieldName: "email",
        listItems: [
            {
                to: "/seller/email/inbox",
                text: "Hộp thư đến",
            },
            {
                to: "/seller/email/create",
                text: "Soạn email",
            },
        ],
    },

    {
        to: "/seller/notify",
        icon: <NotificationsActiveIcon />,
        text: "Thông báo ",
    },
    {
        to: "/seller/bill",
        icon: <PaymentsIcon />,
        text: "Hóa đơn",
    },
    {
        to: "/seller/report",
        icon: <PriorityHighIcon />,
        text: "Báo cáo",
    },
    {
        to: "/seller/profile",
        icon: <AccountCircleIcon />,
        text: "Hồ sơ",
    },
];

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
        {
            props: ({ open }) => open,
            style: {
                marginLeft: drawerWidth,
                width: `calc(100% - ${drawerWidth}px)`,
                transition: theme.transitions.create(["width", "margin"], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
        },
    ],
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    variants: [
        {
            props: ({ open }) => open,
            style: {
                ...openedMixin(theme),
                "& .MuiDrawer-paper": openedMixin(theme),
            },
        },
        {
            props: ({ open }) => !open,
            style: {
                ...closedMixin(theme),
                "& .MuiDrawer-paper": closedMixin(theme),
            },
        },
    ],
}));

export default function MiniDrawer() {
    const theme = useTheme();
    const [open, setOpen] = useState(true);
    const dispatch = useDispatch();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleClick = (menu) => {
        setOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
    };

    const handleGetData = async () => {
        await dispatch(getCurrentStoreAction());
    };

    useEffect(() => {
        handleGetData();
    }, []);
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={[
                            {
                                marginRight: 5,
                            },
                            open && { display: "none" },
                        ]}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Mini variant drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "rtl" ? (
                            <ChevronRightIcon />
                        ) : (
                            <ChevronLeftIcon />
                        )}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {items.map((item, index) =>
                        item?.to ? (
                            <NavLink
                                key={index}
                                to={item.to}
                                className={({ isActive }) =>
                                    isActive
                                        ? "group text-green-700 font-semibold"
                                        : "group text-inherit  hover:font-semibold font-normal"
                                }
                            >
                                <ListItemButton>
                                    <ListItemIcon className="group-hover:text-green-700 ">
                                        {item.icon}
                                    </ListItemIcon>
                                    <p className="group-hover:text-green-700">
                                        {item.text}
                                    </p>
                                </ListItemButton>
                            </NavLink>
                        ) : (
                            <Box key={index}>
                                <ListItemButton
                                    onClick={() => handleClick(item.fieldName)}
                                >
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                    {open[item.fieldName] ? (
                                        <ExpandLess />
                                    ) : (
                                        <ExpandMore />
                                    )}
                                </ListItemButton>
                                <Collapse
                                    in={open[item.fieldName]}
                                    timeout="auto"
                                    unmountOnExit
                                >
                                    <List component="div" disablePadding>
                                        {item.listItems.map((i, ind) => (
                                            <ListItemButton
                                                key={`collaspse-${ind}`}
                                                sx={{ pl: 9 }}
                                            >
                                                <NavLink
                                                    to={i.to}
                                                    className={({ isActive }) =>
                                                        isActive
                                                            ? "text-green-700 font-semibold hover:text-green-700 w-full"
                                                            : "text-inherit hover:text-green-700 hover:font-semibold w-full font-normal"
                                                    }
                                                >
                                                    {i.text}
                                                </NavLink>
                                            </ListItemButton>
                                        ))}
                                    </List>
                                </Collapse>
                            </Box>
                        )
                    )}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3, overflowX: "auto" }}>
                <DrawerHeader />
                <Outlet />
            </Box>
        </Box>
    );
}
