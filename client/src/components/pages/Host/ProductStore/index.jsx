import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { ListProductStore, CreateProductStore } from "../../index";

const Index = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            {/* <Tabs
                value={value}
                onChange={handleChange}
                aria-label="disabled tabs example"
                
            >
                <Tab label="Danh sách" onClick={() => navigate("list")} />
                <Tab label="Thêm mới" onClick={() => navigate("new")} />
            </Tabs>
            <Outlet /> */}
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                        onChange={handleChange}
                        sx={{ pl: "24px" }}
                        aria-label="lab API tabs example"
                    >
                        <Tab label="Danh sách" value="1" />
                        <Tab label="Thêm mới" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <ListProductStore />
                </TabPanel>
                <TabPanel value="2">
                    <CreateProductStore />
                </TabPanel>
            </TabContext>
        </Box>
    );
};

export default Index;
