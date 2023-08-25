import { Box, Button, Image, Tag, TagLabel, TagLeftIcon, Text, transition } from '@chakra-ui/react'
import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react'
import { FaHeart, FaRegHeart,FaShoppingCart } from "react-icons/fa";

const BikeCard = ({id, img, title, price, rating}) => {
    return (
        <>  
            <Box _hover={{marginTop:"15px"}} transition={"all 0.2s"} bg={"#fff"} width={'305px'} border={'1px solid #F3F4F6'} boxShadow={"rgba(0, 0, 0, 0.1) 0px 4px 12px"} padding={2} m={5} textAlign={'center'} >
                <Image m={'auto'} src={img} alt={title}/>
                <Text color={'gray.600'} fontSize={17} noOfLines={2} w={'94%'} m={'auto'}>{title}</Text>
                <Box marginBlock={2}>
                    <Text color={'gray.400'} textDecoration="line-through" >&#8377; {price+300}</Text>
                    <Text color={'green.500'} fontWeight={600} fontSize={20}>&#8377; {price}</Text>
                </Box>
                <Box marginBlock={2}>
                    <Button  marginRight={5} colorScheme='pink' variant={'outline'}><FaRegHeart/></Button>
                    <Button colorScheme='teal'><Tag bg={'transparent'} color={'gray.100'}><FaShoppingCart/></Tag> Order Now</Button>
                </Box>
            </Box>
        </>
    )
}

export default BikeCard
