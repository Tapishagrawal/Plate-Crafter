import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./ReviewSlider.css"


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Avatar, Box, Flex, Heading, Image, Text, Wrap, WrapItem } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { fetchCustomerReviewData } from '../page/home/homeApi';
const URL = `https://platecrafters-moke-api.onrender.com/customer_reviews`;


export default function ReviewSlider() {
    const [swiperRef, setSwiperRef] = useState(null);
    const [reviewData, setReviewData] = useState([])
    const getData = async (URL) => {
        try {
            let res = await fetchCustomerReviewData(URL)
            setReviewData(res)
        } catch (error) {
            console.log(error)
        }
    } 


    useEffect(() => {
        getData(URL);
    }, [URL])


    return (
        <>
            <div style={{ width: "80%", margin: "auto", marginTop: "60px" }}>
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={4}
                    centeredSlides={true}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {reviewData?.data &&
                        reviewData?.data.length > 0 &&
                        reviewData?.data?.map((review) => (
                            <SwiperSlide key={review.id}>
                                <Box h={"260px"} mb={"40px"} p={5} boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'} borderRadius={3}>
                                    <WrapItem justifyContent={'center'}>
                                        <Avatar name={review.name} src={review.img} />
                                    </WrapItem>
                                    <Heading textAlign={'center'} fontSize={18} mt={2} color={"#D64550"}>{review.name}</Heading>
                                    <Flex gap={2} justify={'center'} mt={3}>
                                        {new Array(5).fill(0).map((_, i) => (
                                            <StarIcon color={i < review.rating ? '#FDE10D' : '#D6D6D6'} key={i} />
                                        ))}
                                    </Flex>
                                    <Text noOfLines={4} textAlign={'center'} mt={3} fontWeight={500} color={"#797979"} fontSize={13}>
                                            {review.descReview}
                                    </Text>
                                </Box>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </>
    );
}
