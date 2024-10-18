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
import { useNavigate } from "react-router-dom";

const Index = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
                {bannerData?.banners?.map((banner, index) => (
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
            <Box className="py-8">
                <div className="flex  flex-col items-center mb-3">
                    <Box className="flex justify-center">
                        <div className="flex items-center">
                            <p className="text-3xl font-bold mr-2">Danh mục</p>
                            <img
                                src="/src/assets/icons/icon_fire.png"
                                alt="icon fire"
                                width="22px"
                                className="h-7"
                            />
                        </div>
                    </Box>
                    <p className="w-1/2 text-slate-500 text-md text-center">
                        Hãy khám phá và thêm gia vị sạch vào bữa ăn của bạn ngay
                        hôm nay!
                    </p>
                </div>
                <CategoryCarousel />
            </Box>

            <Box sx={{ py: 4, bgcolor: "#efefef" }}>
                <div className="flex flex-col items-center mb-3">
                    <p className="text-3xl font-bold mr-2">Sản phẩm mới nhất</p>
                    <p className="w-1/2 text-slate-500 text-md text-center">
                        Hãy khám phá bộ sưu tập gia vị mới nhất của chúng tôi để
                        nâng tầm bữa ăn của bạn!
                    </p>
                </div>
                <NewProductSection />
            </Box>

            <Box className="py-8">
                <Box className="flex justify-between items-center">
                    <p className="text-3xl font-bold mr-2 w-1/3">
                        Những bài viết hữu ích và thú vị
                    </p>
                    <p className="w-1/2 text-slate-500 text-md">
                        Những bài viết thú vị về ẩm thực của chúng tôi, nơi khám
                        phá mối liên hệ giữa gia vị, ẩm thực và văn hóa xung
                        quanh!
                    </p>
                </Box>
                <BlogCarousel />
            </Box>

            <Box
                sx={{
                    backgroundImage:
                        "url('/src/assets/images/bg-shopping-with-naturefood.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <Box className="p-16">
                    <p className="text-3xl font-bold mr-2 w-2/3 mb-3">
                        Cùng Nature Food đưa đến các gia vị ngon-sạch-mới-lạ đến
                        các gia đình Việt
                    </p>
                    <p className="w-1/2 text-slate-500 text-md mb-3">
                        Tham gia bán hàng cùng Nature Food
                    </p>
                    <Button
                        variant="contained"
                        color="warning"
                        onClick={() => navigate("/register-seller")}
                    >
                        Đăng ký
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};
export default Index;
