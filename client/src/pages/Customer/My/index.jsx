import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Paper, Tabs } from "@mui/material";

export default function My() {
    const location = useLocation();
    const [value, setValue] = useState(location.pathname.split("/")[2]);
    const navigate = useNavigate();

    const handleTabChange = (event, newValue) => {
        setValue(newValue);
        navigate(`/my/${newValue}`);
    };
    return (
        <div>
            <Box sx={{ bgcolor: "background.paper" }}>
                <Tabs
                    value={value}
                    onChange={handleTabChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable force tabs example"
                >
                    <Tab label="Tài khoản" value={"account"} />
                    <Tab label="Đơn đặt hàng" value={"order-list"} />
                    <Tab label="Hồ sơ cá nhân" value={"profile"} />
                    <Tab label="Vận chuyển và thanh toán" value={"delivery"} />
                </Tabs>
            </Box>
            <Box className="mt-5">
                <Outlet />
            </Box>
        </div>
    );
}
