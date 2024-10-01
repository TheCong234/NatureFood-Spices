import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { FreeMode, Navigation, Pagination } from "swiper/modules";

export default function BlogCarousel() {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[FreeMode, Pagination, Navigation]}
            className="mySwiper w-full px-2 py-4 h-auto"
        >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((blog, index) => (
                <SwiperSlide key={`blog-${index}`} className="border-none">
                    <Card sx={{}}>
                        <CardMedia
                            component="img"
                            style={{ height: 240, objectFit: "contain" }}
                            image="https://png.pngtree.com/thumb_back/fh260/background/20230817/pngtree-lotus-flower-jpg-pink-lotus-flower-image_13023952.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                textAlign="left"
                                noWrap
                                sx={{ fontWeight: "bold" }}
                            >
                                Lizard
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: "text.secondary",
                                    display: "-webkit-box",
                                    WebkitBoxOrient: "vertical",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    WebkitLineClamp: 3,
                                    lineClamp: 3,
                                    height: "4.2em",
                                    textAlign: "left",
                                }}
                            >
                                Lizards are a widespread group of squamate
                                reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>
                </SwiperSlide>
            ))}

            <SwiperSlide className="border-none h-[200px] text-[#D26426]">
                Xem thêm &gt;&gt;
            </SwiperSlide>
        </Swiper>
    );
}
