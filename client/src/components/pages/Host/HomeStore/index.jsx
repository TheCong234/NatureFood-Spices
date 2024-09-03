import { Box } from "@mui/system";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavLink, Outlet } from "react-router-dom";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CategoryIcon from "@mui/icons-material/Category";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EventIcon from "@mui/icons-material/Event";
import SettingsIcon from "@mui/icons-material/Settings";
import { useDispatch, useSelector } from "react-redux";
import { getStoreByIdAction } from "../../../../hooks/Redux/Store/storeAction";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";

const drawerWidth = 240;

const items = [
    {
        name: "Dashboard",
        to: "dashboard",
        icon: <DashboardIcon />,
    },
    {
        name: "Sản phẩm",
        to: "product",
        icon: <Inventory2Icon />,
    },
    {
        name: "Danh mục",
        to: "category",
        icon: <CategoryIcon />,
    },
    {
        name: "Sự kiện",
        to: "event",
        icon: <EventIcon />,
    },
    {
        name: "Thiết lập",
        to: "setting",
        icon: <SettingsIcon />,
    },
    {
        name: "Quảng bá",
        to: "promote",
        icon: <ViewCarouselIcon />,
    },
];

const Index = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {
        data: userData,
        loading: userLoading,
        error: userError,
    } = useSelector((state) => state.user);
    const [title, setTitle] = useState("Bán hàng với Nature Food");
    useEffect(() => {
        const storeId = userData?.store;
        if (storeId) {
            dispatch(getStoreByIdAction(storeId));
        }
    });
    return (
        <Box sx={{ minHeight: "100vh", display: "flex" }}>
            <Box sx={{ width: 240 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Tên cửa hàng
                    </Typography>
                </Toolbar>
                <List>
                    {items.map((item, index) => (
                        <NavLink
                            to={item.to}
                            key={index}
                            onClick={() => setTitle(item.name)}
                        >
                            {({ isActive }) => (
                                <ListItem
                                    disablePadding
                                    sx={{
                                        backgroundColor: isActive
                                            ? "grey"
                                            : "inherit",
                                    }}
                                >
                                    <ListItemButton>
                                        <ListItemIcon
                                            sx={{
                                                color: isActive
                                                    ? "white"
                                                    : "black",
                                            }}
                                        >
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={item.name}
                                            className={
                                                isActive
                                                    ? "text-white"
                                                    : "text-black"
                                            }
                                        />
                                    </ListItemButton>
                                </ListItem>
                            )}
                        </NavLink>
                    ))}
                </List>
                <Divider />
            </Box>
            <Box component="main" sx={{ width: "100%" }}>
                <Toolbar
                    className="bg-inherit"
                    sx={{
                        px: 0,
                        borderBottom: "1px solid black",
                    }}
                >
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ fontWeight: "bold" }}
                    >
                        {title}
                    </Typography>
                </Toolbar>
                <Box sx={{ backgroundColor: "#e9ecef" }}>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
};

export default Index;
