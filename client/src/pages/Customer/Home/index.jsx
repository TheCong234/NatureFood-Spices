import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../assets/styles/home.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBannersAction } from "../../../hooks/Redux/Banner/bannerAction";
import { getCategoriesAction } from "../../../hooks/Redux/Category/categoryAction";
import CategoryCarousel from "./CategoryCarousel";
import NewProductSection from "./NewProductsSection";
import { getNewestProductsAction } from "../../../hooks/Redux/Product/productAction";
import BlogCarousel from "./BlogCarousel";

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
        dispatch(getNewestProductsAction());
    }, [dispatch]);
    return (
        <Box className=" relative pb-16">
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
            <Box className="pb-16">
                <Box className="flex justify-center">
                    <Typography
                        variant="h4"
                        component="p"
                        sx={{
                            fontWeight: "bold",
                            textAlign: "center",
                            pt: 4,
                        }}
                    >
                        Danh mục
                    </Typography>
                    <img
                        src="/src/assets/icons/icon_fire.png"
                        alt="icon fire"
                        width="26px"
                        className="self-auto object-contain pt-6 ml-2"
                    />
                </Box>
                <Typography
                    variant="body1"
                    component="p"
                    sx={{ textAlign: "center", pb: 4, mt: 1 }}
                >
                    Lựa chọn những danh mục sản phẩm ngon với ẩm thực của bạn
                </Typography>
                <CategoryCarousel />
            </Box>

            <Box sx={{ pb: 4, bgcolor: "#efefef" }}>
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                        fontWeight: "bold",
                        textAlign: "center",
                        py: 4,
                    }}
                >
                    Sản phẩm mới nhất
                </Typography>
                <NewProductSection />
            </Box>

            <Box className="pb-16">
                <Box className="flex justify-between items-center">
                    <Typography
                        variant="h4"
                        component="p"
                        sx={{
                            fontWeight: "bold",
                            py: 4,
                            width: "50%",
                            textAlign: "left",
                            mr: 12,
                        }}
                    >
                        Các bài viết của chúng tôi ản phẩm ngon vớ
                    </Typography>
                    <Typography
                        variant="body2"
                        component="p"
                        sx={{ textAlign: "left", width: "50%", ml: 12 }}
                    >
                        Lựa chọn những danh mục sản phẩm ngon với ẩm thực của
                        bạn ựa chọn những danh mục sản phẩm ngon với ẩm thực của
                        bạn ựa chọn những danh mục sản phẩm ngon với
                    </Typography>
                </Box>
                <BlogCarousel />
            </Box>

            <Box
                sx={{
                    backgroundImage:
                        "url('https://spicesinc.com/sites/default/files/y/whitebowls.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <Box className="py-16">
                    <Typography
                        variant="h4"
                        component="p"
                        sx={{
                            fontWeight: "bold",
                            pt: 4,
                            textAlign: "left",
                        }}
                    >
                        Các bài viết của chúng tôi ản phẩm ngon vớ
                    </Typography>
                    <Typography
                        variant="body1"
                        component="p"
                        sx={{
                            textAlign: "left",
                            fontWeight: "bold",
                            mt: 2,
                        }}
                    >
                        Lựa chọn những danh mục sản phẩm
                    </Typography>
                    <Button variant="contained" color="warning" sx={{ mt: 2 }}>
                        Bắt đầu
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};
export default Index;
