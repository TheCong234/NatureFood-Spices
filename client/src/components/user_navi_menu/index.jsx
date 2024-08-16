import { Badge, Button, Stack, Typography, Link } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
import { AccountCircle } from "@mui/icons-material";
import { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SelfDialog from "../Dialogs/self.dialogs";
import { useNavigate } from "react-router-dom";
import InputOTP from "../Modals/input.otp.modals";

const UserNaviMenu = ({ display, role }) => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const [openOTPModel, setOpenOTPModel] = useState(false);
    const handleClose = () => setOpenOTPModel(false);
    const handleClickAccountIcon = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseAccountIcon = () => {
        setAnchorEl(null);
    };

    return (
        <Stack
            spacing={1}
            direction={"row"}
            display={display}
            className="items-center"
        >
            <Typography display="block">
                <Button
                    variant="contained"
                    color="success"
                    size="small"
                    sx={{
                        fontWeight: "bold",
                        display: role === "user" ? "block" : "none",
                    }}
                    className="hover:text-white"
                    onClick={() => setOpenOTPModel(!openOTPModel)}
                >
                    Bán hàng
                </Button>
                <Button
                    display={role !== "user" ? "block" : "none"}
                    onClick={() => navigate(role)}
                    variant="contained"
                    color="success"
                    size="small"
                    sx={{
                        fontWeight: "bold",
                        display: role !== "user" ? "block" : "none",
                    }}
                    className="hover:text-white"
                >
                    {role}
                </Button>

                <InputOTP open={openOTPModel} handleClose={handleClose} />
            </Typography>

            <Typography className="text-pink-500">
                <Badge badgeContent={4} color="error">
                    <ForumIcon />
                </Badge>
            </Typography>
            <Typography className="text-amber-500">
                <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                </Badge>
            </Typography>
            <Typography onClick={handleClickAccountIcon}>
                <AccountCircle />
            </Typography>

            <SelfDialog
                open={true}
                anchorEl={anchorEl}
                handleCloseAccountIcon={handleCloseAccountIcon}
            />
        </Stack>
    );
};

export default UserNaviMenu;
