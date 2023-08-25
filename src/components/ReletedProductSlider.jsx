import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./ReviewSlider.css"


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Box, Flex, HStack, Heading, Image, Text } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { FetchSliderData } from '../page/unit/carApi';
import { useEffect } from 'react';
import CarCard from './CarCard';
import { FaStar } from 'react-icons/fa6';

export default function ReletedProductSlider({ category }) {
    const [swiperRef, setSwiperRef] = useState(null);
    const [sliderProductdata, setSliderProductData] = useState([]);
    const getSliderProductData = async (url, category) => {
        try {
            let res = await FetchSliderData(url, category);
            setSliderProductData(res)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSliderProductData(
            `https://platecrafters-moke-api.onrender.com/carPlates`,
            category)
    }, [category])
    return (
        <>
            <div style={{ width: "80%", margin: "auto", marginTop: "60px" }}>
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={4}
                    centeredSlides={true}
                    spaceBetween={200}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >

                    {
                        sliderProductdata?.data &&
                        sliderProductdata?.data?.length > 0 &&
                        sliderProductdata?.data?.map((item) => (
                            <SwiperSlide>
                                <CarCard {...item}/>
                            </SwiperSlide>
                        ))


                    }

                </Swiper>


            </div>
        </>
    );
}
