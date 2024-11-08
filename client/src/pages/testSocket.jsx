import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";

const socket = io(import.meta.env.VITE_APP_DOMAIN); // URL của server Node.js

function TestSecket() {
    const { currentUser } = useSelector((state) => state.user);

    // Gửi thông báo tới server
    const sendNotification = () => {
        socket.emit("createNotification", {
            userId: currentUser?._id,
            message: "You have a new notification!",
        });
        console.log("đã gửi yêu cầu createNotification");
    };

    return (
        <div>
            <h1>React Vite with Socket.IO</h1>
            <Button variant="contained" onClick={sendNotification}>
                Send Notification
            </Button>
        </div>
    );
}

export default TestSecket;
