import React from "react";
import {
    TextField,
    Button,
    Typography,
    Link,
    Box,
    Grid,
    Checkbox,
    FormControlLabel,
    Divider,
    Container,
} from "@mui/material";
import {
    Google as GoogleIcon,
    Facebook as FacebookIcon,
} from "@mui/icons-material";
import backgroundImagenaturefood from "/src/assets/images/bg-login-naturefood.jpg";
import backgroundImage from "/src/assets/images/bg-login.jpg";
import { blue } from "../../../theme/colors";
import { color } from "@mui/system";

const ForgotPage = () => {
    return (
        <Box
            sx={{
                height: "100vh",
                display: "grid",
                placeItems: "center",
                px: { md: "13%" },
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <Container>
                <Grid
                    container
                    sx={{
                        borderRadius: 2,
                        boxShadow: "0px 0px 15px rgba(0,0,0,0.1)",
                        overflow: "hidden",
                    }}
                >
                    <Grid
                        item
                        xs={12}
                        md={6}
                        lg={5}
                        style={{
                            backgroundImage: `url(${backgroundImagenaturefood})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <Box sx={{ textAlign: "center", padding: 4 }}>
                            <Typography
                                variant="h4"
                                sx={{
                                    color: "white",
                                    fontWeight: "bold",
                                    mb: 2,
                                    paddingTop: "10px",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <img
                                    src="src/assets/images/logo.png"
                                    alt="Logo"
                                    style={{
                                        height: "80px",
                                        width: "170px",
                                    }}
                                />
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: "white",
                                    mb: 3,
                                    paddingBottom: "130px",
                                }}
                            >
                                Nature Food cung cấp gia vị thiên nhiên chất
                                lượng, an toàn, giúp bữa ăn thêm ngon và bảo vệ
                                sức khỏe người dùng !
                            </Typography>
                            {/* Footer */}

                            <Typography
                                variant="body2"
                                color="textSecondary"
                                sx={{ mt: 1 }}
                            >
                                <Link href="#" sx={{ color: "white" }}>
                                    Điều khoản{" "}
                                </Link>{" "}
                                và{" "}
                                <Link href="#" sx={{ color: "white" }}>
                                    dịch vụ
                                </Link>
                                .
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Right Side: Account Login Form */}
                    <Grid
                        item
                        xs={12}
                        md={6}
                        lg={7}
                        style={{ padding: "2rem" }}
                    >
                        <Box
                            sx={{
                                paddingTop: "50px",
                                fontWeight: 800,
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{ mb: 2, fontWeight: "bold" }}
                            >
                                Quên mật khẩu
                            </Typography>
                        </Box>
                        <span>Nhập mail để nhận đổi mật khẩu</span>
                        {/* Login Form */}
                        <TextField
                            fullWidth
                            label="Email address"
                            variant="outlined"
                            margin="normal"
                            size="small"
                        />

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
                        <Link href="#" underline="hover">
                            {"Tôi không lấy lại được mật khẩu→"}
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ForgotPage;
