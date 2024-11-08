import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcurrentUserAction } from "./hooks/Redux/User/userAction";
import { io } from "socket.io-client";
import { Alert, Slide, Snackbar } from "@mui/material";
import { Link, Outlet, useNavigate } from "react-router-dom";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";

const socket = io(import.meta.env.VITE_APP_DOMAIN);

function App() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
            <Outlet />
            <Snackbar
                open={open}
                autoHideDuration={2500}
                onClose={() => setOpen(false)}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                onClick={() => navigate(notifyData?.url || "/notification")}
                className="cursor-pointer"
            >
                <Alert
                    onClose={() => setOpen(false)}
                    severity="success"
                    variant="filled"
                    sx={{ maxWidth: "300px" }}
                    icon={<NotificationsActiveOutlinedIcon />}
                >
                    {notifyData?.message || "Bạn có thông báo mới"}
                </Alert>
            </Snackbar>
        </>
    );
}

export default App;
