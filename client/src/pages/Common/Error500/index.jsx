import React from "react";
import "../../../assets/styles/main.css";
import { Button, Container } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Error500() {
    return (
        <body className="error-body">
            <div className="error-page">
                <div className="falcon-logo">
                    <img src="src/assets/images/logo.jpg" alt="falcon logo" />
                </div>
                <div className="error-content">
                    <h1 className="error-h">500</h1>
                    <p className="error-message">
                        Whoops, something went wrong!
                    </p>
                    <hr></hr>
                    <p className="error-details">
                        Try refreshing the page, or going back and attempting
                        the action again. If this problem persists,{" "}
                        <a href="mailto:support@example.com">contact us</a>.
                    </p>
                    {/* <Button variant="contained" startIcon={<DeleteIcon />}>
                    Delete
                </Button> */}
                </div>
            </div>
        </body>
    );
}
