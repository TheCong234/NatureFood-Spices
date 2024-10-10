import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { Box, Rating, Stack, Tooltip } from "@mui/material";
import { formatPrice } from "../../services/functions";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function ProductCardPrimary({ product }) {
    return (
        <Card className="product_card-primary">
            <Box>
                <Swiper
                    className="product_card-primary_swiper "
                    pagination={true}
                    modules={[Pagination]}
                >
                    {product.images.map((image, index) => (
                        <SwiperSlide
                            key={index}
                            className="swiper-slide_styled"
                        >
                            <img src={image.url} alt="product image" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
            <Box className="px-5">
                <p className="font-semibold text-truncate-2 text-lg leading-5">
                    {product.name}
                </p>
                <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", my: 1 }}
                >
                    Lizards are a widespread
                </Typography>
                <div className="flex text-[#d26426]">
                    <div className="text-2xl font-semibold">
                        <small>₫</small>
                        {formatPrice(product.prices.salePrice)}
                    </div>
                    <del className="flex items-center ml-3 font-medium text-gray-500">
                        <small>₫</small>
                        {formatPrice(product.prices.rootPrice)}
                    </del>
                </div>
                <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", my: 1 }}
                >
                    Stock:{" "}
                    <span className="text-green-500 font-semibold">
                        {product.stock}
                    </span>
                </Typography>
            </Box>
            <Box className="px-4 pb-4 flex justify-between">
                <Rating name="read-only" value={product.rating} readOnly />
                <Stack direction={"row"} spacing={1}>
                    <Tooltip title="Thêm vào yêu thích" placement="top">
                        <Button
                            variant="outlined"
                            sx={{ padding: "3px 12px", minWidth: "10px" }}
                            size="small"
                            className="btn-product-cart"
                        >
                            <FavoriteBorderIcon fontSize="small" />
                        </Button>
                    </Tooltip>
                    <Tooltip title="Thêm vào giỏ hàng" placement="top">
                        <Button
                            variant="outlined"
                            sx={{ padding: "3px 12px", minWidth: "10px" }}
                            size="small"
                        >
                            <AddShoppingCartIcon fontSize="small" />
                        </Button>
                    </Tooltip>
                </Stack>
            </Box>
        </Card>
    );
}
