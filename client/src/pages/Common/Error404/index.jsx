import React from "react";
import "../../../assets/styles/main.css";
import { Button, Container } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import HomeIcon from "@mui/icons-material/Home";

export default function Error404() {
    return (
        <div className="error-page">
            <div className="falcon-logo">
                <img src="src/assets/images/logo.jpg" alt="falcon logo" />
            </div>
            <div className="error-contentt">
                <h1>404</h1>
                <p className="error-message">
                    The page you're looking for is not found.
                </p>
                <hr></hr>
                <p className="error-details">
                    Make sure the address is correct and that the page hasn't
                    moved. If you think this is a mistake,{" "}
                    <a href="mailto:support@example.com">contact us</a>.
                </p>
                <Button
                    className="error-button"
                    variant="contained"
                    startIcon={<HomeIcon />}
                >
                    Take me home
                </Button>
            </div>
        </div>
    );
}
