import { Badge, Box, Button, ButtonGroup, Container, Link, Menu, MenuItem, Stack } from "@mui/material"
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { useState, useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AccountCircle } from "@mui/icons-material";
import { getCurrentUser } from "../../apis/user.apis";
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
const Index = ()=>{
    const [user, setUser] = useState({});

    useEffect(()=>{
        const getCurrent = async ()=>{
            await getCurrentUser();
        }
        getCurrent();
    },[])


    return (
        <Box sx={{backgroundColor: '#bad1ab', padding: '10px 0'}}>
            <Container sx={{display: 'flex', justifyContent: 'space-between', }}>
                <img className="h-10 rounded" src="/src/assets/images/logo.jpg" width={80}/>
                <Stack spacing={2} direction={'row'}> 
                    <Button sx={{fontWeight: 'bold'}} color="inherit" component={Link} to='/home'>Trang chủ</Button>
                    <Button sx={{fontWeight: 'bold'}} color="inherit" component={Link} to=''>Sản phẩm</Button>
                    <Button sx={{fontWeight: 'bold'}} color="inherit" component={Link} to=''>Danh mục</Button>
                    <Button sx={{fontWeight: 'bold'}} color="inherit" component={Link} to=''>Liên hệ</Button>
                    <Button sx={{fontWeight: 'bold'}} color="inherit" component={Link} to=''>Hỗ trợ</Button>
                </Stack>

                <Stack spacing={1} direction={'row'}>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Stack spacing={1} direction={'row'} sx={{display: 'none'}}>
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
                            >
                            <AccountCircle />
                        </IconButton>
                    </Stack>
                    <Stack spacing={1} direction={'row'} >
                        <Button
                            type="button"
                            variant="contained"
                            size="small"
                        >
                            Đăng nhập
                        </Button>
                        <Button
                            type="button"
                            variant="contained"
                            size="small"
                        >
                            Đăng ký
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}

export default Index;