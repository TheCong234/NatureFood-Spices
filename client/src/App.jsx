import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { useDispatch, useSelector } from "react-redux";
import { getcurrentUserAction } from "./hooks/Redux/User/userAction";
import "./assets/styles/base.css";
import { io } from "socket.io-client";
import { Slide, Snackbar } from "@mui/material";
const socket = io(import.meta.env.VITE_APP_DOMAIN);

function SlideTransition(props) {
    return <Slide {...props} direction="left" />;
}

function App() {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const { token, currentUser } = useSelector((state) => state.user);
    const [notifyData, setNotifyData] = useState();

    const handleGetData = async () => {
        await dispatch(getcurrentUserAction(token));
    };
    useEffect(() => {
        handleGetData();
    }, [token]);

    useEffect(() => {
        if (currentUser?._id) {
            socket.emit("registerUser", currentUser?._id);
            console.log("đã gửi yêu cầu đăng ký socket cho: ", currentUser?._id);

            socket.on("receiveNotification", (data) => {
                console.log("Notification received:", data);
                setNotifyData(data);
                setOpen(true);
            });
        }
        return () => {
            socket.off("receiveNotification");
        };
    }, [currentUser]);
    return (
        <>
            <RouterProvider router={router} />
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={open}
                onClose={() => setOpen(false)}
                TransitionComponent={SlideTransition}
                message={notifyData?.message}
                key={"SlideTransition"}
                autoHideDuration={3000}
            />
        </>
    );
}

export default App;
