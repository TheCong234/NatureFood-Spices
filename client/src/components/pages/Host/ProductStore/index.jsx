import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

const Index = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="disabled tabs example"
            >
                <Tab label="Danh sách" onClick={() => navigate("list")} />
                <Tab label="Thêm mới" onClick={() => navigate("new")} />
            </Tabs>
            <Outlet />
        </Box>
    );
};

export default Index;
