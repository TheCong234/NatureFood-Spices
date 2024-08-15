import { Badge, Button, Stack, Typography, Link } from "@mui/material";
import ForumIcon from '@mui/icons-material/Forum';
import { AccountCircle } from "@mui/icons-material";
import { useState } from "react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import SelfDialog from "../Dialogs/self.dialogs";

const UserNaviMenu = ({display, admin})=>{
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClickAccountIcon = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseAccountIcon = () => {
        setAnchorEl(null);
    };
    
    return (
        <Stack spacing={1} direction={'row'} display={display} className="items-center">
            <Typography display={admin} >
                <Button component={Link} href='/admin' variant="contained" color="success" size="small" sx={{fontWeight:'bold'}} className="hover:text-white">
                    ADMIN
                </Button>
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
            <Typography
                onClick={handleClickAccountIcon}
                >
                <AccountCircle />
            </Typography>
            
            <SelfDialog open={true} anchorEl={anchorEl} handleCloseAccountIcon={handleCloseAccountIcon}/>
        </Stack>
    )
}

export default UserNaviMenu;