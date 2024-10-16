import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { formatPrice } from "../../services/functions";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import {
    addFavoriteProductAction,
    removeFavoriteProductAction,
} from "../../hooks/Redux/Favorite/favoriteAction";
import { Box, Card, Rating, Stack, Tooltip } from "@mui/material";
import useSnackNotify from "../SnackNotify";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { addProductToStoreCartAction } from "../../hooks/Redux/Cart/cartAction";

export default function ProductCardPrimary({ product }) {
    const dispatch = useDispatch();
    const snackNotify = useSnackNotify();
    const { data: favoriteData } = useSelector((state) => state.favorite);
    const { currentStore } = useSelector((state) => state.store);

    //favorite features
    const handleAddFavoriteProduct = async () => {
        const response = await dispatch(addFavoriteProductAction(product._id));
        if (response?.error) {
            snackNotify("error")("Thêm yêu thích thất bại");
        } else {
            snackNotify("success")("Đã thêm vào yêu thích");
        }
        console.log(response);
    };

    const handleRemoveFavoriteProduct = async () => {
        const response = await dispatch(
            removeFavoriteProductAction(product._id)
        );
        if (response?.error) {
            snackNotify("error")("Bỏ thích thất bại");
        } else {
            snackNotify("success")("Đã bỏ yêu thích");
        }
    };

    //Cart features
    const handleAddToCart = async () => {
        const data = {
            storeId: currentStore?._id,
            product: product?._id,
            quantity: 1,
        };
        const response = await dispatch(addProductToStoreCartAction(data));
        if (response?.error) {
            snackNotify("error")("Thêm vào giỏ hàng thất bại");
        } else {
            snackNotify("success")("Đã thêm vào giỏ hàng");
        }
        console.log(response);
    };

    return (
        <Card className="product_card-primary">
            <Box>
                <Swiper
                    className="product_card-primary_swiper "
                    pagination={true}
                    modules={[Pagination]}
                >
                    {product?.images?.map((image, index) => (
                        <SwiperSlide
                            key={index}
                            className="swiper-slide_styled"
                        >
                            <img src={image?.url} alt="product image" />
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
                    {product?.category?.name}
                </Typography>
                <div className="flex text-[#d26426]">
                    <div className="text-2xl font-semibold">
                        <small>₫</small>
                        {formatPrice(product?.price)}
                    </div>
                    <del className="flex items-center ml-3 font-semibold text-gray-500">
                        <small>₫</small>
                        {formatPrice(product?.salePrice)}
                    </del>
                </div>
                <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", my: 1 }}
                >
                    Stock:{" "}
                    <span className="text-green-500 font-semibold">
                        {product?.inventory}
                    </span>
                </Typography>
            </Box>
            <Box className="px-4 pb-4 flex justify-between">
                <Rating name="read-only" value={product?.rating} readOnly />
                <Stack direction={"row"} spacing={1}>
                    {favoriteData?.favorite?.some(
                        (f) => f._id == product._id
                    ) ? (
                        <Tooltip title="Bỏ yêu thích" placement="top">
                            <Button
                                variant="outlined"
                                sx={{ padding: "3px 12px", minWidth: "10px" }}
                                size="small"
                                className="btn-product-cart"
                                onClick={handleRemoveFavoriteProduct}
                            >
                                <FavoriteIcon fontSize="small" color="error" />
                            </Button>
                        </Tooltip>
                    ) : (
                        <Tooltip title="Thêm vào yêu thích" placement="top">
                            <Button
                                variant="outlined"
                                sx={{ padding: "3px 12px", minWidth: "10px" }}
                                size="small"
                                className="btn-product-cart"
                                onClick={handleAddFavoriteProduct}
                            >
                                <FavoriteBorderIcon fontSize="small" />
                            </Button>
                        </Tooltip>
                    )}

                    <Tooltip title="Thêm vào giỏ hàng" placement="top">
                        <Button
                            variant="outlined"
                            sx={{ padding: "3px 12px", minWidth: "10px" }}
                            size="small"
                            onClick={handleAddToCart}
                        >
                            <AddShoppingCartIcon fontSize="small" />
                        </Button>
                    </Tooltip>
                </Stack>
            </Box>
        </Card>
    );
}
