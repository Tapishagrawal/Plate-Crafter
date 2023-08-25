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
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

export default function ReletedProductSlider() {
    const [swiperRef, setSwiperRef] = useState(null);
    
    return (
        <>  
            <div style={{width:"80%", margin :"auto", marginTop:"60px"}}>
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
                    <SwiperSlide>
                        <Box h={"260px"} mb={"40px"} p={5} boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'} borderRadius={3}>
                            <Image w={70} m={'auto'} borderRadius={50} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhfGQ0YzxwPNSjj-7gnPmqntouxmAyh34v4RM4SbTy-FzC8Eg0SHPR-Qo9wcpW-W43SXk&usqp=CAU" />
                            <Heading textAlign={'center'} fontSize={18} mt={2} color={"#D64550"}>Mr. Bean</Heading>
                            <Flex gap={2} justify={'center'} mt={2}>
                                <StarIcon color={'yellow.400'}/>
                                <StarIcon color={'yellow.400'}/>
                                <StarIcon color={'yellow.400'}/>
                                <StarIcon color={'yellow.400'}/>
                                <StarIcon color={'yellow.400'}/>
                            </Flex>
                            <Text noOfLines={4} textAlign={'center'} mt={2} fontWeight={500} color={"#797979"} fontSize={13}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eligendi rerum incidunt et exercitationem laborum Lorem ipsum dolor sit amet.
                            </Text>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box h={"260px"} p={5} boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'} borderRadius={3}>
                            <Image w={70} m={'auto'} borderRadius={50} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhfGQ0YzxwPNSjj-7gnPmqntouxmAyh34v4RM4SbTy-FzC8Eg0SHPR-Qo9wcpW-W43SXk&usqp=CAU" />
                            <Heading textAlign={'center'} fontSize={18} mt={2} color={"#D64550"}>Mr. Bean</Heading>
                            <Flex gap={2} justify={'center'} mt={2}>
                                <StarIcon color={'yellow.400'}/>
                                <StarIcon color={'yellow.400'}/>
                                <StarIcon color={'yellow.400'}/>
                                <StarIcon color={'yellow.400'}/>
                                <StarIcon color={'yellow.400'}/>
                            </Flex>
                            <Text noOfLines={4} textAlign={'center'} mt={2} fontWeight={500} color={"#797979"} fontSize={13}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eligendi rerum incidunt et exercitationem laborum Lorem ipsum dolor sit amet.
                            </Text>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box h={"260px"} p={5} boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'} borderRadius={3}>
                            <Image w={70} m={'auto'} borderRadius={50} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhfGQ0YzxwPNSjj-7gnPmqntouxmAyh34v4RM4SbTy-FzC8Eg0SHPR-Qo9wcpW-W43SXk&usqp=CAU" />
                            <Heading textAlign={'center'} fontSize={18} mt={2} color={"#D64550"}>Mr. Bean</Heading>
                            <Flex gap={2} justify={'center'} mt={2}>
                                <StarIcon color={'yellow.400'}/>
                                <StarIcon color={'yellow.400'}/>
                                <StarIcon color={'yellow.400'}/>
                                <StarIcon color={'yellow.400'}/>
                                <StarIcon color={'yellow.400'}/>
                            </Flex>
                            <Text noOfLines={4} textAlign={'center'} mt={2} fontWeight={500} color={"#797979"} fontSize={13}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eligendi rerum incidunt et exercitationem laborum Lorem ipsum dolor sit amet.
                            </Text>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box h={"260px"} p={5} boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'} borderRadius={3}>
                            <Image w={70} m={'auto'} borderRadius={50} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhfGQ0YzxwPNSjj-7gnPmqntouxmAyh34v4RM4SbTy-FzC8Eg0SHPR-Qo9wcpW-W43SXk&usqp=CAU" />
                            <Heading textAlign={'center'} fontSize={18} mt={2} color={"#D64550"}>Mr. Bean</Heading>
                            <Flex gap={2} justify={'center'} mt={2}>
                                <StarIcon color={'yellow.400'}/>
                                <StarIcon color={'yellow.400'}/>
                                <StarIcon color={'yellow.400'}/>
                                <StarIcon color={'yellow.400'}/>
                                <StarIcon color={'yellow.400'}/>
                            </Flex>
                            <Text noOfLines={4} textAlign={'center'} mt={2} fontWeight={500} color={"#797979"} fontSize={13}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eligendi rerum incidunt et exercitationem laborum Lorem ipsum dolor sit amet.
                            </Text>
                        </Box>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
