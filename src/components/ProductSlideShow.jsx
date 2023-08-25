import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Box, Flex} from '@chakra-ui/react';

const ProductSlideShow = ({img}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Box>
                <Box width={"500px"}>
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        }}
                        spaceBetween={10}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        <SwiperSlide >
                            <img width={"100%"} src={img} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img width={"100%"} src={img} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img width={"100%"} src={img} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img width={"100%"} src={img} />
                        </SwiperSlide>
                    </Swiper>
                </Box>
                <Box width={'400px'} m={'auto'} mt={2}>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={img} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img} />
                        </SwiperSlide>
                    </Swiper>
                </Box>
            </Box>
        </>
    );
}

export default ProductSlideShow
