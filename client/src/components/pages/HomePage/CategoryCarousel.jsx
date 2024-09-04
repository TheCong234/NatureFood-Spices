import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import CategoryCard from "../../CategoryCard";
import { useSelector } from "react-redux";

const CategoryCarousel = () => {
    const {
        data: categoryData,
        loading: categoryLoading,
        error: categoryError,
    } = useSelector((state) => state.category);
    return (
        <Swiper
            slidesPerView={5}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper w-full h-auto"
            initialSlide={2}
        >
            {categoryData.map((category, index) => (
                <SwiperSlide
                    key={`category-${index}`}
                    className="border-none my-2 shadow-lg shadow-black-500/50"
                >
                    <CategoryCard category={category} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
export default CategoryCarousel;
