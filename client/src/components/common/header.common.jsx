import { Box, Button, Container, Stack, Toolbar } from "@mui/material";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import AuthActions from "../auth_actions";
import UserNaviMenu from "../user_navi_menu";
import SearchStyle from "../SearchStyle";

import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../../hooks/Redux/User/userAction";

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
    const { data, loading, error } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(currentUser());
    }, [dispatch]);

    console.log("header redux:", data);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
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
                    <UserNaviMenu />
                    <AuthActions display={data.data ? "none" : "block"} />
                </Toolbar>
            </Container>
        </Box>
    );
};

export default Index;
