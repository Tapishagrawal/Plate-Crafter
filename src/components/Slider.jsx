import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Image } from '@chakra-ui/react';



export default function Slider() {
    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
            >
                <SwiperSlide><Image src='https://www.xtremz.in/dynamic/images/dynamic_images/3czr.jpg'/></SwiperSlide>
                <SwiperSlide><Image src='https://www.xtremz.in/dynamic/images/dynamic_images/9NCQ.jpg'/></SwiperSlide>
                <SwiperSlide><Image src='https://www.xtremz.in/dynamic/images/dynamic_images/7PYr.jpg'/></SwiperSlide>
            </Swiper>
        </>
    );
}
