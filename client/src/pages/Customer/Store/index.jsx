import React from "react";
import { Typography, Button, IconButton, TextField, Grid } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import EmailIcon from "@mui/icons-material/Email";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SearchIcon from "@mui/icons-material/Search";

import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import Menu from "@mui/material/Menu";

import Fade from "@mui/material/Fade";
import { Link } from "react-router-dom";
import { ButtonNa } from "../../../components";

export default function ShopHeader() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const items = [
        {
            title: "Ảnh của sản phẩm",
            price: "1,709,845₫",
            originalPrice: "2,137,306₫",
            discount: "20% off",
            imgSrc: "/assets/images/",
        },
        {
            title: "Ảnh của sản phẩm",
            price: "1,709,845₫",
            originalPrice: "2,137,306₫",
            discount: "20% off",
            imgSrc: "/assets/images/",
        },
        {
            title: "Ảnh của sản phẩm",
            price: "1,709,845₫",
            originalPrice: "2,137,306₫",
            discount: "20% off",
            imgSrc: "/assets/images/",
        },
        {
            title: "Ảnh của sản phẩm",
            price: "1,709,845₫",
            originalPrice: "2,137,306₫",
            discount: "20% off",
            imgSrc: "/assets/images/",
        },
        {
            title: "Ảnh của sản phẩm",
            price: "1,709,845₫",
            originalPrice: "2,137,306₫",
            discount: "20% off",
            imgSrc: "/assets/images/",
        },
        {
            title: "Ảnh của sản phẩm",
            price: "1,709,845₫",
            originalPrice: "2,137,306₫",
            discount: "20% off",
            imgSrc: "/assets/images/",
        },
        {
            title: "Ảnh của sản phẩm",
            price: "1,709,845₫",
            originalPrice: "2,137,306₫",
            discount: "20% off",
            imgSrc: "/assets/images/",
        },
    ];

    return (
        <div className="p-6 bg-gray-100 border-b">
            <div className="flex items-center justify-between relative">
                <div className="flex items-center space-x-4">
                    <img src="/assets/images/logo.png" alt="LiztonDesignCo Logo" className="w-20 h-20 rounded-full border" />
                    <div>
                        <Typography variant="h5" component="h1" sx={{ fontWeight: "bold" }}>
                            NatureFood
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            VietNam, Ho Chi Minh
                        </Typography>
                        <div className="flex items-center space-x-1">
                            <Typography variant="body2" sx={{ fontWeight: "bold", color: "purple" }}>
                                Đánh giá người bán
                            </Typography>
                            <Typography variant="body2">• 2,889 lượt bán</Typography>
                            <div className="flex items-center text-black">
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon key={i} fontSize="small" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex space-x-2">
                    {[
                        {
                            icon: <LocalShippingIcon className="text-purple-600" />,
                            title: "Vận chuyển suôn sẻ",
                            subtitle: "Đúng hạn và được theo giỏi",
                        },
                        {
                            icon: <EmailIcon className="text-purple-600" />,
                            title: "Hỗ trợ",
                            subtitle: "Trả lời tin nhắn nhanh chóng",
                        },
                        {
                            icon: <StarBorderIcon className="text-purple-600" />,
                            title: "Đánh giá",
                            subtitle: "Đánh giá trung bình cao hơn 4.8 sao",
                        },
                    ].map((info, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            {info.icon}
                            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                                {info.title}
                            </Typography>
                            <Typography variant="caption" color="textSecondary">
                                {info.subtitle}
                            </Typography>
                        </div>
                    ))}
                    <div className="flex flex-col items-center text-center">
                        <img src="/assets/images/logo.png" alt="Contact Icon" className="w-8 h-8 rounded-full" />
                        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                            NatureFood
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                            Liên hệ
                        </Typography>
                    </div>
                </div>
                <div className="absolute -bottom-12 left-24 ">
                    <ButtonNa color="black" variant="outlined" sx={{ textTransform: "none" }}>
                        Theo dõi cửa hàng
                    </ButtonNa>
                </div>
            </div>

            <div className="pt-24 bg-gray-100">
                <div className="flex w-full space-x-6">
                    {/* Sidebar */}
                    <div className="w-1/4">
                        <div className="space-y-4">
                            <div className="flex ">
                                <Typography component={Link} to={"/"} sx={{ color: "black" }}>
                                    Mặt hàng
                                </Typography>
                                <Typography component={Link} to={"/"} sx={{ color: "black" }}>
                                    đánh giá
                                </Typography>
                                <Typography component={Link} to={"/"} sx={{ color: "black" }}>
                                    Chính sách của hàng
                                </Typography>
                            </div>
                            <div className="space-y-2">
                                {["Tất cả", "đang bán", "Dấu hiệu"].map((category, idx) => (
                                    <Button
                                        key={idx}
                                        variant="text"
                                        sx={{ justifyContent: "space-between", width: "100%", textTransform: "none", color: "black" }}
                                    >
                                        {category} <span className="ml-auto">704</span>
                                    </Button>
                                ))}
                            </div>
                            <Button variant="contained" sx={{ backgroundColor: "black", color: "white", width: "100%" }}>
                                Yêu cầu đặt hàng tùy chỉnh
                            </Button>
                            <Button variant="outlined" sx={{ width: "100%" }}>
                                Liên hệ với chủ của hàng
                            </Button>
                            <Typography variant="body2" color="textSecondary">
                                2889 mặc hàng
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                1002 lượt thích
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Báo cáo của hàng cho NatureFood
                            </Typography>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="w-3/4">
                        <div className="flex items-center justify-between mb-4">
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                Mặc hàng nổi bật
                            </Typography>
                            <div className="flex items-center space-x-2">
                                <TextField
                                    variant="outlined"
                                    placeholder="Search all 708 items"
                                    size="small"
                                    InputProps={{
                                        endAdornment: (
                                            <IconButton>
                                                <SearchIcon />
                                            </IconButton>
                                        ),
                                    }}
                                />
                                <div>
                                    <Button
                                        id="fade-button"
                                        aria-controls={open ? "fade-menu" : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? "true" : undefined}
                                        onClick={handleClick}
                                        sx={{
                                            color: "black",
                                            textTransform: "none",
                                            borderRadius: "20px",

                                            ":hover": {
                                                bgcolor: "#EAEAEA",
                                            },
                                        }}
                                    >
                                        Sắp xếp
                                    </Button>
                                    <Menu
                                        id="fade-menu"
                                        MenuListProps={{
                                            "aria-labelledby": "fade-button",
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        TransitionComponent={Fade}
                                    >
                                        <MenuItem onClick={handleClose}>Mới nhất</MenuItem>
                                        <MenuItem onClick={handleClose}>Thấp tới cao</MenuItem>
                                        <MenuItem onClick={handleClose}>Cao tới thấp </MenuItem>
                                    </Menu>
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <Grid container spacing={2}>
                                {items.map((item, index) => (
                                    <Grid item xs={6} md={4} key={index}>
                                        <div className="hover:shadow-custom transition-shadow border rounded-lg w-full p-4">
                                            <img src={item.imgSrc} alt={item.title} className="w-full h-64 object-cover mb-2 rounded-md" />
                                            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ fontWeight: "bold", color: "textPrimary" }}>
                                                {item.price}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" sx={{ textDecoration: "line-through" }}>
                                                {item.originalPrice}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                {item.discount}
                                            </Typography>
                                        </div>
                                    </Grid>
                                ))}
                            </Grid>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
