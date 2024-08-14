import { Button, ButtonGroup, Dialog, Popover, Typography } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useState } from "react";
import Cookies from "js-cookie";
import {useNavigate} from 'react-router-dom';

const SelfDialog = ({anchorEl, handleCloseAccountIcon})=>{
    const navigate = useNavigate();
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleLogout = ()=>{
        Cookies.remove('token');
        return window.location.reload(true)
    }
    return (
        <Popover 
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleCloseAccountIcon}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
        >
            <ButtonGroup variant="text" orientation="vertical" color="inherit">
                <Button sx={{display: 'flex', justifyContent: 'left', textTransform:'none'}} startIcon={<AccountBoxIcon/>}>Cá nhân</Button>
                <Button sx={{display: 'flex', justifyContent: 'left', textTransform:'none'}} startIcon={<SettingsIcon/>}>Cài đặt</Button>
                <Button sx={{display: 'flex', justifyContent: 'left', textTransform:'none'}} startIcon={<LogoutIcon/>} onClick={handleLogout}>Đăng xuất</Button>
            </ButtonGroup>
      </Popover>
    );
}

export default SelfDialog;

