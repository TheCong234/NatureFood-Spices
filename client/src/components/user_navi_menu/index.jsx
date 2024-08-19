import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge, Button, Stack, Typography } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
import { AccountCircle } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";

import SelfDialog from "../Dialogs/self.dialogs";
import InputOTP from "../Modals/input.otp.modals";

const UserNaviMenu = () => {
    const navigate = useNavigate();
    const { data, loading, error } = useSelector((state) => state.user);

    const [anchorEl, setAnchorEl] = useState(null);
    const [openOTPModel, setOpenOTPModel] = useState(false);

    const handleClose = () => setOpenOTPModel(false);

    const handleClickAccountIcon = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseAccountIcon = () => {
        setAnchorEl(null);
    };

    const menuItems = [
        {
            text_color: "text-amber-500",
            color: "error",
            icon: <ForumIcon />,
        },
        {
            text_color: "text-amber-500",
            color: "error",
            icon: <NotificationsIcon />,
        },
        {
            text_color: "",
            color: "",
            icon: <AccountCircle onClick={handleClickAccountIcon} />,
        },
    ];
    return (
        <Stack
            spacing={1}
            direction={"row"}
            display={data.data !== undefined ? "flex" : "none"}
            className="items-center"
        >
            <Typography display="block">
                <Button
                    variant="contained"
                    color="success"
                    size="small"
                    sx={{
                        fontWeight: "bold",
                        display: data.data?.role === "user" ? "block" : "none",
                    }}
                    className="hover:text-white"
                    onClick={() => setOpenOTPModel(!openOTPModel)}
                >
                    Đăng ký bán hàng
                </Button>

                <Button
                    onClick={() => navigate(data.data && data.data.role)}
                    variant="contained"
                    color="success"
                    size="small"
                    sx={{
                        fontWeight: "bold",
                        display: data.data?.role !== "user" ? "block" : "none",
                    }}
                    className="hover:text-white"
                >
                    {data.data && data.data.role}
                </Button>

                <InputOTP open={openOTPModel} handleClose={handleClose} />
            </Typography>

            {menuItems.map((items, index) => (
                <Typography className={items.text_color} key={index}>
                    <Badge
                        badgeContent={items.color === "" ? "" : 10}
                        color={items.color}
                    >
                        {items.icon}
                    </Badge>
                </Typography>
            ))}

            <SelfDialog
                open={true}
                anchorEl={anchorEl}
                handleCloseAccountIcon={handleCloseAccountIcon}
            />
        </Stack>
    );
};

export default UserNaviMenu;
