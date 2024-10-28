import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Paper, Tabs } from "@mui/material";

export default function My() {
    const [value, setValue] = useState("order-list");
    const navigate = useNavigate();

    const handleTabChange = (event, newValue) => {
        setValue(newValue);
        navigate(`/my/${newValue}`);
    };
    return (
        <Paper>
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
            <Box className="mt-5">
                <Outlet />
            </Box>
        </Paper>
    );
}
