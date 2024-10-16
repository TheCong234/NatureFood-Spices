import React from "react";
import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components/common";

const Index = () => {
    return (
        <div>
            <Header />
            <Container>
                <div className="py-20"></div>
                <Outlet />
            </Container>
            <Footer />
        </div>
    );
};

export default Index;
