import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "../../../assets/styles/newestProductsSection.css";
import { Grid, Pagination } from "swiper/modules";
import { useSelector } from "react-redux";
import ProductCardHorizontally from "../../ProductCard/ProductCardHorizontally";

const NewProductSection = () => {
    const {
        data: newestProductsData,
        loading: newestProductsLoading,
        error: newestProductsError,
    } = useSelector((state) => state.newestProducts);
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
            {newestProductsData.map((product, index) => (
                <SwiperSlide
                    key={`newest-product-${index}`}
                    className=" rounded-lg bg-white overflow-hidden border-solid shadow-lg shadow-blue-500/50"
                >
                    <ProductCardHorizontally product={product} />
                </SwiperSlide>
            ))}

            <SwiperSlide className=" rounded-lg bg-white overflow-hidden border-solid shadow-lg shadow-blue-500/50 text-black">
                Xem thêm &gt;&gt;
            </SwiperSlide>
        </Swiper>
    );
};
export default NewProductSection;
