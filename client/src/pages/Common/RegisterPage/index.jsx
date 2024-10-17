import React, { useState } from "react";
import { red } from "../../../theme/colors";
import {
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    Typography,
    Box,
    Divider,
    Container,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    Link,
    FormHelperText,
} from "@mui/material";
import "../../../assets/styles/main.css";
import { Mail, Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import useSnackNotify from "../../../components/SnackNotify";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { RegisterYup } from "../../../validations/yup.validations";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../../hooks/Redux/User/userAction";

const RegistrationForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const snackNotify = useSnackNotify();
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(RegisterYup),
    });

    const { data, error, loading } = useSelector((state) => state.user);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const onSubmit = async (data) => {
        const response = await dispatch(registerAction(data));
        console.log(response);

        if (response?.payload?.token) {
            snackNotify("success")("Đăng ký thành công!");
            snackNotify("success")("Bạn được chuyển tới trang chủ!");
            reset();
            return navigate("/home");
        }
        if (!response?.payload?.response?.data?.success) {
            snackNotify("error")(`Lỗi, email đã được sử dụng`);
        }
    };

    return (
        <Container className="container-center">
            <Box className="form-container">
                <Box className="register-option">
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
                    <Typography className="tagline px-4">
                        Nature Food cung cấp gia vị thiên nhiên chất lượng, an
                        toàn, giúp bữa ăn thêm ngon và bảo vệ sức khỏe người
                        dùng !
                    </Typography>
                    <Box className="login-section pt-40 ">
                        <Typography className="accout pb-9">
                            Bạn đã có tài khoản ?
                        </Typography>
                        <div className="button-container">
                            <Button variant="outlined" color="warning">
                                <Link href="/login" className="login-btn">
                                    Đăng nhập{" "}
                                </Link>
                            </Button>
                        </div>
                    </Box>
                </Box>
                {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="register-form"
                >
                    <Typography variant="h4" className="register-title">
                        Đăng ký
                    </Typography>
                    <Typography variant="body1" className="" gutterBottom>
                        Tên hiển thị
                    </Typography>
                    <TextField
                        {...register("username")}
                        variant="outlined"
                        size="small"
                        fullWidth
                        error={!!errors.username}
                        helperText={errors?.username?.message}
                    />
                    <Typography variant="body1" className="pt-3" gutterBottom>
                        Email
                    </Typography>
                    <TextField
                        {...register("email")}
                        type="email"
                        variant="outlined"
                        size="small"
                        fullWidth
                        error={!!errors.email}
                        helperText={errors?.email?.message}
                    />
                    <Box className="flex justify-between pt-3 pb-3">
                        <Box className="w-full mr-3">
                            <Typography
                                variant="body1"
                                className=""
                                gutterBottom
                            >
                                Mật khẩu
                            </Typography>
                            <FormControl
                                variant="outlined"
                                size="small"
                                fullWidth
                                error={!!errors.password}
                            >
                                <OutlinedInput
                                    {...register("password")}
                                    type={showPassword ? "text" : "password"}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={
                                                    handleClickShowPassword
                                                }
                                                edge="end"
                                            >
                                                {showPassword ? (
                                                    <VisibilityOff />
                                                ) : (
                                                    <Visibility />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                                <FormHelperText>
                                    {errors?.password?.message}
                                </FormHelperText>
                            </FormControl>
                        </Box>
                        <Box className="w-full mr-3">
                            <Typography
                                variant="body1"
                                className=""
                                gutterBottom
                            >
                                Nhập lại mật khẩu
                            </Typography>
                            <FormControl
                                variant="outlined"
                                size="small"
                                fullWidth
                                error={!!errors.confirmPassword}
                            >
                                <OutlinedInput
                                    {...register("confirmPassword")}
                                    type={showPassword ? "text" : "password"}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={
                                                    handleClickShowPassword
                                                }
                                                edge="end"
                                            >
                                                {showPassword ? (
                                                    <VisibilityOff />
                                                ) : (
                                                    <Visibility />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                                <FormHelperText>
                                    {errors?.confirmPassword?.message}
                                </FormHelperText>
                            </FormControl>
                        </Box>
                    </Box>

                    <FormControlLabel
                        control={<Checkbox color="primary" />}
                        label={
                            <Typography className="terms">
                                Tôi chấp nhận{" "}
                                <span className="terms-link">điều khoản</span>{" "}
                                và <span className="terms-link">bảo mật</span>
                            </Typography>
                        }
                        className="checkbox"
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        className="register-btn"
                    >
                        Đăng ký
                    </Button>

                    <Divider className="divider">hoặc đăng nhập bằng</Divider>

                    <Box className="flex pt-3">
                        <Button
                            variant="outlined"
                            fullWidth
                            className="text-transform-none"
                            sx={{
                                marginRight: 4,
                                color: red[500],
                                "&:hover": {
                                    backgroundColor: "#db4437",
                                    color: "white",
                                },
                            }}
                        >
                            <i className="fa-brands fa-google-plus-g text-xl"></i>
                            &nbsp; Google
                        </Button>
                        <Button
                            variant="outlined"
                            fullWidth
                            className="social-btn facebook-btn text-transform-none"
                            sx={{
                                "&:hover": {
                                    backgroundColor: "blue",
                                    color: "white",
                                },
                            }}
                        >
                            <i className="fab fa-facebook text-xl"></i> &nbsp;
                            Facebook
                        </Button>
                    </Box>
                </form>
            </Box>
        </Container>
    );
};

export default RegistrationForm;
