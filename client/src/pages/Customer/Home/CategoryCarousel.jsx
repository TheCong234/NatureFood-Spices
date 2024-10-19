import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../../assets/styles/categoryCarousel.css";
import { Navigation, Pagination } from "swiper/modules";
import CategoryCard from "../../../components/CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAction } from "../../../hooks/Redux/Category/categoryAction";

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const { data: categoryData, loading: categoryLoading } = useSelector(
        (state) => state.category
    );

    useEffect(() => {
        dispatch(getCategoriesAction());
    }, []);
    return (
        <Swiper
            slidesPerView={5}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper w-full h-auto"
            initialSlide={2}
        >
            {categoryData?.categories?.map((category, index) => (
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
