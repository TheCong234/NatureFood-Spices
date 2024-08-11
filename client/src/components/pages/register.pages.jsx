import {Button, Link, TextField, Paper, Typography, Box, InputAdornment } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from 'react';
const Index = ()=>{

    const [formData, setFormData] = useState({email: "", phone: "", username: "", password: ""});
    const [confirmPassword, serConfirmPassword] = useState("");

    const handleChange = (evt)=>{
        return {...formData, [evt.target.name] : evt.target.value}
    }
    const handleSubmit = async()=>{

    }
    return (
        <div className='h-screen w-screen grid place-items-center'>
            <div className='w-1/2'>
                <Paper elevation={3} sx={{padding:6}}>
                    <Typography component="h1" variant='h4' align='center' gutterBottom sx={{fontWeight:'bold'}}>
                        Đăng ký
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 3}}>
                        <TextField
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <EmailIcon />
                                  </InputAdornment>
                                ),
                              }}
                            id="email"
                            label="Email"
                            type="email"
                            autoComplete="email"
                            required
                            fullWidth
                            name='email'
                            onChange={handleChange}
                        />
                        <TextField
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <EmailIcon />
                                  </InputAdornment>
                                ),
                              }}
                            id="phone"
                            label="Số điện thoại"
                            type="tel"
                            autoComplete="phone"
                            required
                            fullWidth
                            name='phone'
                            onChange={handleChange}
                            sx={{mt:2}}
                        />
                        <TextField
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <EmailIcon />
                                  </InputAdornment>
                                ),
                              }}
                            id="username"
                            label="Tên người dùng"
                            type="text"
                            autoComplete="username"
                            required
                            fullWidth
                            name='username'
                            onChange={handleChange}
                            sx={{mt:2}}
                        />
                        <TextField
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <EmailIcon />
                                  </InputAdornment>
                                ),
                              }}
                            id="password"
                            label="Mật khẩu"
                            type="password"
                            autoComplete="password"
                            required
                            fullWidth
                            name='password'
                            onChange={handleChange}
                            sx={{mt:2}}
                        />
                        <TextField
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <EmailIcon />
                                  </InputAdornment>
                                ),
                              }}
                            id="confirmPassword"
                            label="Mật khẩu xác thực"
                            type="password"
                            autoComplete="confirm-password"
                            required
                            fullWidth
                            name='confirmPassword'
                            onChange={handleChange}
                            sx={{mt:2}}
                        />
                        <Button
                            
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >Đăng ký</Button>
                        <Button
                            endIcon={<GoogleIcon/>}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color='warning'
                        >Đăng nhập với Google</Button>
                        <Box sx={{textAlign:'end', mt: 2}} >
                            <Link href="/login" >Quay trở lại trang Đăng nhập</Link>
                        </Box>

                    </Box>
                    
                </Paper>
            </div>

        </div>
        
    )
}

export default Index; 