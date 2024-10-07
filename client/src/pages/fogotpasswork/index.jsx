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
import { blue } from "../../theme/colors";

const LoginPage = () => {
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
                                }}
                            >
                                falcon
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{ color: "#5f6368", mb: 3 }}
                            >
                                With the power of Falcon, you can now focus only
                                on functionalities for your digital products,
                                while leaving the UI design on us!
                            </Typography>
                            {/* Footer */}
                            <Typography variant="body2" sx={{ mt: 3 }}>
                                Don't have an account?{" "}
                                <Link
                                    href="#"
                                    sx={{
                                        color: "#1976d2",
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
                                sx={{ mt: 1 }}
                            >
                                Read our <Link href="#">terms</Link> and{" "}
                                <Link href="#">conditions</Link>.
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
                        <TextField
                            fullWidth
                            label="Email address"
                            variant="outlined"
                            margin="normal"
                            size="small"
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            variant="outlined"
                            margin="normal"
                            type="password"
                            size="small"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox defaultChecked color="primary" />
                            }
                            label="Remember me"
                            sx={{ mt: 1 }}
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{ my: 2 }}
                        >
                            Log in
                        </Button>
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
