import { Badge, IconButton, Stack } from "@mui/material";
import MessageIcon from '@mui/icons-material/Message';
import { AccountCircle } from "@mui/icons-material";
import { useState } from "react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import SelfDialog from "../Dialogs/self.dialogs";

const UserNaviMenu = (props)=>{
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClickAccountIcon = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseAccountIcon = () => {
        setAnchorEl(null);
    };
    
    return (
        <Stack spacing={1} direction={'row'} {...props}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="error">
                    <MessageIcon />
                </Badge>
            </IconButton>
            <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                >
                <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
            <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
                onClick={handleClickAccountIcon}
                >
                <AccountCircle />
            </IconButton>
            <SelfDialog open={true} anchorEl={anchorEl} handleCloseAccountIcon={handleCloseAccountIcon}/>
        </Stack>
    )
}

export default UserNaviMenu;