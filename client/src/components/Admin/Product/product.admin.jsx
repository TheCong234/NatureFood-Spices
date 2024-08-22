import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Outlet, useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import { useState } from "react";

const Index = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab
                        label="Danh sách"
                        onClick={() => navigate("")}
                        sx={{ textTransform: "none", fontWeight: "bold" }}
                    />
                    <Tab
                        label="Tạo mới"
                        onClick={() => navigate("new")}
                        sx={{ textTransform: "none", fontWeight: "bold" }}
                    />
                </Tabs>
            </Box>
            <Container>
                <Outlet />
            </Container>
        </Box>
    );
};
export default Index;
