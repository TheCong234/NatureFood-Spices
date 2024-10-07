import React from "react";
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
} from "@mui/material";
import "./main.css";
import { Mail, Visibility, VisibilityOff } from "@mui/icons-material";

const RegistrationForm = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Container className="container-center">
            <Box className="form-container">
                <Box className="register-option">
                    <Typography variant="h4" className="logo">
                        falcon
                    </Typography>
                    <Typography className="tagline">
                        With the power of Falcon, you can now focus only on
                        functionalities for your digital products, while leaving
                        the UI design on us!
                    </Typography>
                    <Box className="login-section pt-40">
                        <Typography className="accout">
                            Have an account?
                        </Typography>
                        <Button variant="text" className="login-btn">
                            <Link href="/login">Log In</Link>
                        </Button>
                    </Box>
                </Box>

                <Box className="register-form">
                    <Typography variant="h4" className="register-title">
                        Register
                    </Typography>
                    <Typography variant="body1" className="" gutterBottom>
                        Tên đăng nhập
                    </Typography>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                    <Typography variant="body1" className="pt-3" gutterBottom>
                        Tên đăng nhập
                    </Typography>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                        fullWidth
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
                            >
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? "text" : "password"}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={
                                                    handleClickShowPassword
                                                }
                                                onMouseDown={
                                                    handleMouseDownPassword
                                                }
                                                onMouseUp={
                                                    handleMouseUpPassword
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
                            >
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? "text" : "password"}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={
                                                    handleClickShowPassword
                                                }
                                                onMouseDown={
                                                    handleMouseDownPassword
                                                }
                                                onMouseUp={
                                                    handleMouseUpPassword
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
                            </FormControl>
                        </Box>
                    </Box>

                    <FormControlLabel
                        control={<Checkbox color="primary" />}
                        label={
                            <Typography className="terms">
                                I accept the{" "}
                                <span className="terms-link">terms</span> and{" "}
                                <span className="terms-link">
                                    privacy policy
                                </span>
                            </Typography>
                        }
                        className="checkbox"
                    />

                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        className="register-btn"
                    >
                        Register
                    </Button>

                    <Divider className="divider">or register with</Divider>

                    <Box className="flex pt-3">
                        <Button
                            variant="outlined"
                            fullWidth
                            className="text-transform-none"
                            sx={{
                                color: red[500],
                                "&:hover": {
                                    backgroundColor: "#db4437",
                                    color: "white",
                                },
                            }}
                        >
                            <i class="fa-brands fa-google-plus-g text-xl"></i>
                            &nbsp; Google
                        </Button>
                        <Button
                            variant="outlined"
                            fullWidth
                            className="social-btn facebook-btn"
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
                </Box>
            </Box>
        </Container>
    );
};

export default RegistrationForm;
