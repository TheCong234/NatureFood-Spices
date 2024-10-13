import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../../../assets/styles/main.css";
import { Container, Grid, Typography } from "@mui/material";

const Index = () => {
    return (
        <footer className="footer-styled">
            <Container className="flex py-16">
                <div className=" w-1/3">
                    <div className="flex">
                        <div className="">
                            <img
                                src="src/assets/images/logo.jpg"
                                alt="Phoenix Logo"
                                className="w-[80px] h-[40px]"
                            />
                        </div>
                        <div className="">
                            <p className="text-3xl font-bold ml-3">
                                Nature Food
                            </p>
                        </div>
                    </div>
                    <p className="mt-3">
                        Phoenix is an admin dashboard template with fascinating
                        features and amazing layout. The template is responsive
                        to all major browsers and is compatible with all
                        available devices and screen sizes.
                    </p>
                </div>
                <div className="w-2/3 ">
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={3}>
                            <div className="footer-column">
                                <h3>About Phoenix</h3>
                                <a href="#">Careers</a>
                                <a href="#">Affiliate Program</a>
                                <a href="#">Privacy Policy</a>
                                <a href="#">Terms & Conditions</a>
                            </div>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <div className="footer-column">
                                <h3>Stay Connected</h3>
                                <a href="#">Blogs</a>
                                <a href="#">
                                    <FacebookIcon className="icon" /> Facebook
                                </a>
                                <a href="#">
                                    <TwitterIcon className="icon" /> Twitter
                                </a>
                            </div>
                        </Grid>

                        <Grid item xs={6} md={3}>
                            <div className="footer-column">
                                <h3>Customer Service</h3>
                                <a href="#">Help Desk</a>
                                <a href="#">Support, 24/7</a>
                                <a href="#">Community of Phoenix</a>
                            </div>
                        </Grid>

                        <Grid item xs={6} md={3}>
                            <div className="footer-column">
                                <h3>Payment Method</h3>
                                <a href="#">Cash on Delivery</a>
                                <a href="#">Online Payment</a>
                                <a href="#">PayPal</a>
                                <a href="#">Installment</a>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </footer>
    );
};

export default Index;
