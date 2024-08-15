import { Box, Button, Container, Link, Stack, Toolbar } from "@mui/material"
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

import { getCurrentUser } from "../../apis/user.apis";
import AuthActions from "../auth_actions";
import UserNaviMenu from "../user_navi_menu";
import SearchStyle from "../SearchStyle";

const Index = ()=>{
    const [currentUser, setCurrentUser] = useState({});
    
    useEffect(()=>{
        const getCurrentUserFunc = async ()=>{
            if(Cookies.get('token')){
                const user = await getCurrentUser();
                setCurrentUser({...user})
            }
            return;
        }
        getCurrentUserFunc();
        
    },[])

    return (
        
        <Box sx={{backgroundColor: '#bad1ab'}}>
            <Container sx={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
                <img className="h-10 rounded" src="/src/assets/images/logo.jpg" width={80}/>
                <Stack spacing={2} direction={'row'}> 
                    <Button sx={{fontWeight: 'bold'}} color="inherit" component={Link} to='/home'>Trang chủ</Button>
                    <Button sx={{fontWeight: 'bold'}} color="inherit" component={Link} to=''>Sản phẩm</Button>
                    <Button sx={{fontWeight: 'bold'}} color="inherit" component={Link} to=''>Danh mục</Button>
                    <Button sx={{fontWeight: 'bold'}} color="inherit" component={Link} to=''>Liên hệ</Button>
                </Stack>

                <Toolbar spacing={1} direction={'row'}>
                    <SearchStyle/>
                    <UserNaviMenu display={currentUser.data === undefined ? 'none' : ''} admin={currentUser.data?.role === 'admin' ? 'flex' : 'none' }/>
                    <AuthActions display={currentUser.data !== undefined ? 'none' : ''}/>
                </Toolbar>
            </Container>
        </Box>
    )
}

export default Index;