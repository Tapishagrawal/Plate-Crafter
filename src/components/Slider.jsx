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
                <SwiperSlide><Image src='https://www.xtremz.in/dynamic/images/dynamic_images/3czr.jpg' width={'100%'} /></SwiperSlide>
                <SwiperSlide><Image src='https://www.xtremz.in/dynamic/images/dynamic_images/9NCQ.jpg' width={'100%'}/></SwiperSlide>
                <SwiperSlide><Image src='https://www.xtremz.in/dynamic/images/dynamic_images/7PYr.jpg' width={'100%'}/></SwiperSlide>
            </Swiper>
        </>
    );
}
