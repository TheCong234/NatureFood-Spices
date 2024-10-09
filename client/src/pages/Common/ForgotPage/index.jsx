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
                                    mb: 2,
                                    fontWeight: 900,
                                    paddingTop: "30px",
                                    paddingBottom: "20px",
                                }}
                            >
                                falcon
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: "#5f6368",
                                    mb: 3,
                                    paddingBottom: "130px",
                                }}
                            >
                                With the power of Falcon, you can now focus only
                                on functionalities for your digital products,
                                while leaving the UI design on us!
                            </Typography>
                            {/* Footer */}

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
                                Forgot Passwork
                            </Typography>
                        </Box>
                        <span>
                            Enter your email and we'll send you a reset link.
                        </span>
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
                            Send reset link
                        </Button>
                        <Link href="#" underline="hover">
                            {"I cant recover my account using this page→"}
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ForgotPage;
