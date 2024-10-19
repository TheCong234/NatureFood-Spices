import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "../../../assets/styles/newestProductsSection.css";
import { Grid, Pagination } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Typography } from "@mui/material";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { getNewestProductsAction } from "../../../hooks/Redux/Product/productAction";

const NewProductSection = () => {
    const dispatch = useDispatch();
    const { data: newestProductsData, loading: newestProductsLoading } =
        useSelector((state) => state.newestProducts);

    useEffect(() => {
        dispatch(getNewestProductsAction());
    }, []);
    return (
        <Swiper
            slidesPerView={2}
            grid={{
                rows: 2,
            }}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Grid, Pagination]}
            className="mySwiper w-full h-[456px] pb-6 px-4"
        >
            {newestProductsData.map((product) => (
                <SwiperSlide
                    key={product?._id}
                    className=" rounded-lg bg-white overflow-hidden border-solid shadow-lg shadow-blue-500/50"
                >
                    <Box className="flex p-4 h-[200px] w-full bg-gray-300">
                        <Box className="w-1/3 bg-white rounded-md">
                            <img
                                src={product?.images?.[0]?.url}
                                alt="newest product"
                                style={{ objectFit: "contain" }}
                            />
                        </Box>

                        <Box className="w-2/3 ml-4">
                            <Typography
                                component="p"
                                variant="h6"
                                sx={{
                                    fontWeight: "bold",
                                    textAlign: "left",
                                    color: "black",
                                    display: "-webkit-box",
                                    WebkitBoxOrient: "vertical",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    WebkitLineClamp: 2,
                                    lineClamp: 2,
                                    height: "2.8em",
                                    lineHeight: 1.4,
                                    mt: 2,
                                }}
                            >
                                {product?.name}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: "text.secondary",
                                    textAlign: "left",
                                    display: "-webkit-box",
                                    WebkitBoxOrient: "vertical",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    WebkitLineClamp: 2,
                                    lineClamp: 2,
                                    height: "3em",
                                    mt: 1,
                                }}
                            >
                                {product?.description}
                            </Typography>
                            <Box className="flex justify-between mt-2">
                                <Button
                                    startIcon={<ListAltIcon color="white" />}
                                    variant="contained"
                                    color="success"
                                    size="middle"
                                    sx={{ textTransform: "none" }}
                                >
                                    Các cửa hàng hiện có
                                </Button>
                                {/* <Typography
                                    component="span"
                                    variant="h6"
                                    sx={{
                                        fontWeight: "bold",
                                        color: "black",
                                        ml: 2,
                                    }}
                                >
                                    ₫348.430
                                </Typography> */}
                            </Box>
                        </Box>
                    </Box>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
export default NewProductSection;
