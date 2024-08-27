import { Box, Button, Container, Stack, Toolbar } from "@mui/material";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AuthActions from "../../AuthActions";
import UserNaviMenu from "../../UserNaviMenu";
import SearchStyle from "../../SearchStyle";
import { currentUser } from "../../../hooks/Redux/User/userAction";

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
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(currentUser());
    }, [dispatch]);
    const { data, loading, error } = useSelector((state) => state.user);
    console.log("header redux:");
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
                    <AuthActions display={data ? "none" : "block"} />
                </Toolbar>
            </Container>
        </Box>
    );
};

export default Index;
