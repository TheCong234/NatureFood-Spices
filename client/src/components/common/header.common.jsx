import { Box, Button, Container, Link, Stack, Toolbar } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { NavLink } from "react-router-dom";

import { getCurrentUser } from "../../apis/user.apis";
import AuthActions from "../auth_actions";
import UserNaviMenu from "../user_navi_menu";
import SearchStyle from "../SearchStyle";

const items = [
    {
        name: "Trang chủ",
        to: "home",
    },
    {
        name: "Danh mục",
        to: "favorite",
    },
    {
        name: "Liên hệ",
        to: "contact",
    },
];

const Index = () => {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        const getCurrentUserFunc = async () => {
            if (Cookies.get("token")) {
                const user = await getCurrentUser();
                setCurrentUser({ ...user });
            }
            return;
        };
        getCurrentUserFunc();
    }, []);

    return (
        <Box sx={{ backgroundColor: "#bad1ab" }}>
            <Container
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <img
                    className="h-10 rounded"
                    src="/src/assets/images/logo.jpg"
                    width={80}
                />
                <Stack direction={"row"} sx={{ height: "64px" }}>
                    {items.map((item, index) => (
                        <NavLink
                            key={index}
                            sx={{ fontWeight: "bold" }}
                            color="inherit"
                            to={item.to}
                            className={({ isActive }) =>
                                isActive ? "bg-green-400" : ""
                            }
                        >
                            <Button
                                sx={{
                                    fontWeight: "bold",
                                    height: "100%",
                                    px: 2,
                                    color: "black",
                                }}
                            >
                                {item.name}
                            </Button>
                        </NavLink>
                    ))}
                </Stack>

                <Toolbar spacing={1} direction={"row"}>
                    <SearchStyle />
                    <UserNaviMenu
                        display={currentUser.data === undefined ? "none" : ""}
                        role={currentUser.data?.role}
                    />
                    <AuthActions
                        display={currentUser.data !== undefined ? "none" : ""}
                    />
                </Toolbar>
            </Container>
        </Box>
    );
};

export default Index;
