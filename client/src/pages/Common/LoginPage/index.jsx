import React from "react";
import { LoginYup } from "../../../validations/yup.validations";
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
import { white } from "../../../theme/colors";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../../hooks/Redux/User/userAction";
import useSnackNotify from "../../../components/SnackNotify";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const dispatch = useDispatch();
    const snackNotify = useSnackNotify();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(LoginYup),
    });

    const onSubmit = async (data) => {
        const response = await dispatch(loginAction(data));
        if (response?.payload?.token) {
            snackNotify("success")("Đăng nhập thành công!");
            navigate("/home");
            reset();
        } else {
            snackNotify("error")(
                `Lỗi, tài khoản hoạc mật khẩu không chính xác`
            );
        }
    };
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
                                }}
                            >
                                falcon
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: white[200],
                                    mb: 3,
                                    paddingTop: "20px",
                                }}
                            >
                                With the power of Falcon, you can now focus only
                                on functionalities for your digital products,
                                while leaving the UI design on us!
                            </Typography>
                            {/* Footer */}
                            <Typography
                                variant="body2"
                                sx={{
                                    mt: 3,
                                    paddingTop: "110px",
                                    color: white[200],
                                }}
                            >
                                Don't have an account?{" "}
                                <Link
                                    href="/register"
                                    sx={{
                                        color: white[200],
                                        fontWeight: "bold",
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    Get started!
                                </Link>
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                sx={{
                                    mt: 1,
                                    paddingTop: "50px",
                                    color: white[200],
                                }}
                            >
                                Read our{" "}
                                <Link href="#" color={"inherit"}>
                                    terms
                                </Link>{" "}
                                and{" "}
                                <Link href="#" color={"inherit"}>
                                    conditions
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
                        <Box sx={{ textAlign: "center" }}>
                            <Typography
                                variant="h5"
                                sx={{ mb: 2, fontWeight: "bold" }}
                            >
                                Account Login
                            </Typography>
                        </Box>

                        {/* Login Form */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField
                                {...register("email")}
                                fullWidth
                                label="Email"
                                variant="outlined"
                                margin="normal"
                                size="small"
                                error={!!errors.email}
                                helperText={errors?.email?.message}
                            />
                            <TextField
                                {...register("password")}
                                fullWidth
                                label="Password"
                                variant="outlined"
                                margin="normal"
                                type="password"
                                size="small"
                                error={!!errors.password}
                                helperText={errors?.password?.message}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox defaultChecked color="primary" />
                                }
                                label="Remember me"
                                sx={{ mt: 1 }}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                sx={{ my: 2 }}
                            >
                                Log in
                            </Button>
                        </form>
                        <Link href="#" underline="hover">
                            Forgot Password?
                        </Link>

                        {/* Divider */}
                        <Divider sx={{ my: 3 }}>or log in with</Divider>

                        {/* Social Login */}
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Button
                                    fullWidth
                                    variant="outlined"
                                    startIcon={<GoogleIcon />}
                                    sx={{
                                        borderColor: "#db4437",
                                        color: "#db4437",
                                        "&:hover": {
                                            backgroundColor: "#db4437",
                                            color: "white",
                                        },
                                    }}
                                >
                                    Google
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button
                                    fullWidth
                                    variant="outlined"
                                    startIcon={<FacebookIcon />}
                                    sx={{
                                        borderColor: "#4267B2",
                                        color: "#4267B2",
                                        "&:hover": {
                                            backgroundColor: blue[500],
                                            color: "white",
                                        },
                                    }}
                                >
                                    Facebook
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default LoginPage;
