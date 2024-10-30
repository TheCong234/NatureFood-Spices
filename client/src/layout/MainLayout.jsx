import React, { useEffect } from "react";
import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components/common";
import { useDispatch } from "react-redux";
import { getFavoriteStoreProductsAction } from "../hooks/Redux/Favorite/favoriteAction";

const Index = () => {
    const dispatch = useDispatch();

    const handleGetData = async () => {};
    useEffect(() => {
        dispatch(getFavoriteStoreProductsAction());
    }, []);
    return (
        <div className="relative">
            <Header />
            <div className="bg-[#f5f5f5]">
                <Container className="pt-36 pb-6">
                    <Outlet />
                </Container>
            </div>

            <Footer />
        </div>
    );
};

export default Index;
