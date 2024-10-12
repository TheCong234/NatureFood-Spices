import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../../../assets/styles/main.css"; // Đảm bảo rằng file CSS này có chứa các kiểu bạn muốn

const Index = () => {
    return (
        <footer className="footer">
            <div className="footer-intro">
                <div className="footer-description">
                    <div className="logo">
                        <img
                            src="src/assets/images/logo.jpg"
                            alt="Phoenix Logo"
                        />
                    </div>
                    <div className="chil-pho">
                        <h1>Nature</h1>
                        <p>
                            Phoenix is an admin dashboard template with
                            fascinating features and amazing layout. The
                            template is responsive to all major browsers and is
                            compatible with all available devices and screen
                            sizes.
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer-container">
                {/* Column 1: About Phoenix */}
                <div className="footer-column">
                    <h3>About Phoenix</h3>
                    <a href="#">Careers</a>
                    <a href="#">Affiliate Program</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                </div>

                {/* Column 2: Stay Connected */}
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

                {/* Column 3: Customer Service */}
                <div className="footer-column">
                    <h3>Customer Service</h3>
                    <a href="#">Help Desk</a>
                    <a href="#">Support, 24/7</a>
                    <a href="#">Community of Phoenix</a>
                </div>

                {/* Column 4: Payment Method */}
                <div className="footer-column">
                    <h3>Payment Method</h3>
                    <a href="#">Cash on Delivery</a>
                    <a href="#">Online Payment</a>
                    <a href="#">PayPal</a>
                    <a href="#">Installment</a>
                </div>
            </div>
        </footer>
    );
};

export default Index;
