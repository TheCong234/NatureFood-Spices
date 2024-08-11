import { Button, TextField, Link} from '@mui/material';
import {Card, CardContent, CardActions } from '@mui/material';
import {Input} from '@mui/joy';
import {useNavigate} from 'react-router-dom';

import {useState} from 'react';
import { login } from '../../apis/user.apis';



const Index = ()=>{
    const [formData, setFormData] = useState({email: "", password: ""});
    const navigate = useNavigate();


    const handleChange = (evt) =>{
        setFormData((data) =>{
            return {...data, [evt.target.name]: evt.target.value }
        }) 
    }

    const handleLogin = async()=>{
        try {
            const user = await login(formData);
            if(user.success){
                return navigate("/");
            }
            return alert('sai tk');
        } catch (error) {
            return console.log("login: ", error);
        }
        
    }
    return (
        <div className='flex items-center justify-center w-screen h-screen'>
            <Card sx={{minWidth:475}}>
                <CardContent >
                    <h1 className='text-4xl font-bold text-center'>Đăng nhập</h1>
                    <p className='text-center my-2'>Vui lòng nhập tài khoản của bạn</p>
                    
                    <p className='mt-10 mb-2'>Email hoạc Tên đăng nhập</p>
                    <Input placeholder="tranthecong99@gmail.com" variant="solid" onChange={handleChange} name='email'/>

                    <p className='mt-5 mb-2'>Mật khẩu</p>
                    <Input placeholder="password" variant="solid" type='password' onChange={handleChange} name='password'/>
                    <p className='text-end mt-2'>
                        <Link href="/forgot">Quên mật khẩu?</Link>
                    </p>
                </CardContent>

                <CardActions className='flex'>
                    <Button className='w-full'  variant="contained" onClick={handleLogin}>Đăng nhập</Button>
                </CardActions>
                <CardContent className='flex justify-between'>
                    <Link href="/">Quay trở lại trang chủ</Link>
                    <Link href="/register">Đăng ký tài khoản</Link>
                </CardContent>
            </Card>
        </div>
    )
}

export default Index;