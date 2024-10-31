import React from "react";
import { TextField, Button, Typography, Link, Box, Grid, Container, Paper } from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";

const ForgotPage = () => {
    return (
        <Box className="min-h-[100vh]  grid place-items-center bg-[url('/assets/images/bg-login.jpg')]">
            <Paper className="w-[60%]">
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        lg={5}
                        className="bg-[url('/assets/images/bg-login-naturefood.jpg')] bg-center bg-cover bg-no-repeat rounded-l-md"
                    >
                        <Box sx={{ textAlign: "center", padding: 4 }}>
                            <Box component={LinkRouter} to="/" className="flex justify-center mb-6">
                                <img src="/assets/images/logo.png" alt="Logo" className="w-[80px] " />
                            </Box>

                            <Typography
                                variant="body1"
                                sx={{
                                    color: "white",
                                    mb: 3,
                                    paddingBottom: "130px",
                                }}
                            >
                                Nature Food cung cấp gia vị thiên nhiên chất lượng, an toàn, giúp bữa ăn thêm ngon và bảo vệ sức khỏe người dùng !
                            </Typography>
                            {/* Footer */}

                            <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                                <Link href="#" sx={{ color: "white" }}>
                                    Điều khoản{" "}
                                </Link>{" "}
                                và{" "}
                                <Link href="#" sx={{ color: "white" }}>
                                    Dịch vụ
                                </Link>
                                .
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Right Side: Account Login Form */}
                    <Grid item xs={12} md={6} lg={7} style={{ padding: "2rem" }}>
                        <Box
                            sx={{
                                paddingTop: "50px",
                                fontWeight: 800,
                            }}
                        >
                            <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
                                Quên mật khẩu
                            </Typography>
                        </Box>
                        <span>Nhập mail để nhận đổi mật khẩu</span>
                        {/* Login Form */}
                        <TextField fullWidth label="Email address" variant="outlined" margin="normal" size="small" />

                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{
                                my: 2,
                                fontWeight: 800,
                                textTransform: "none",
                            }}
                        >
                            Gửi
                        </Button>
                        {/* <Link href="/" underline="hover">
                            {"Tôi không lấy lại được mật khẩu→"}
                        </Link>
                        <br /> */}
                        <Link href="/login" underline="hover">
                            {"Trang đăng nhập"}
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default ForgotPage;
