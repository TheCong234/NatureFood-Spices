import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../assets/styles/home.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBannersAction } from "../../../hooks/Redux/Banner/bannerAction";
import { getCategoriesAction } from "../../../hooks/Redux/Category/categoryAction";
import CategoryCarousel from "./CategoryCarousel";

const Index = () => {
    const dispatch = useDispatch();
    const {
        data: bannerData,
        loading: bannerLoading,
        error: bannerError,
    } = useSelector((state) => state.banner);

    useEffect(() => {
        dispatch(getBannersAction());
        dispatch(getCategoriesAction());
    }, [dispatch]);
    return (
        <Box className=" relative pb-4">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-[500px] w-full rounded-md"
            >
                {bannerData.map((banner, index) => (
                    <SwiperSlide
                        key={`swipperSlide-${index}`}
                        className="text-black bg-white border-none"
                    >
                        <img
                            src={banner.image.url}
                            alt="banner image"
                            width="100%"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Box>
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{ fontWeight: "bold", textAlign: "center", py: 4 }}
                >
                    Danh mục
                </Typography>
                <CategoryCarousel />
            </Box>
        </Box>
    );
};
export default Index;
