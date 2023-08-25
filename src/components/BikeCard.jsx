import { Box, Button, HStack, Image, Tag, Text} from '@chakra-ui/react'
import React from 'react'
import { FaStar, FaHeart, FaRegHeart,FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const BikeCard = ({id, img, title, price, rating}) => {
    return (
        <>      
            
            <Box _hover={{marginTop:"15px"}} borderRadius={4} transition={"all 0.2s"} bg={"#fff"} width={'305px'} border={'1px solid #F3F4F6'} boxShadow={"rgba(0, 0, 0, 0.1) 0px 4px 12px"} padding={2} m={5} textAlign={'center'} >
                <Image m={'auto'} borderRadius={4} src={img} alt={title}/>
                <Text color={'gray.600'} fontSize={17} noOfLines={2} w={'94%'} m={'auto'}>{title}</Text>
                <Box marginBlock={2}>
                    <Text color={'gray.400'} textDecoration="line-through" >&#8377; {price+300}</Text>
                    <Text color={'green.500'} fontWeight={600} fontSize={20}>&#8377; {price}</Text>
                </Box>
                <Box marginBlock={2}>
                    <Button marginRight={5} colorScheme='pink' variant={'outline'}><FaRegHeart/></Button>
                    <Link to={`/bikeProductDetail/${id}`}>
                        <Button colorScheme='teal'><Tag bg={'transparent'} color={'gray.100'}><FaShoppingCart/></Tag> Order Now</Button>
                    </Link>
                </Box>
                <HStack marginBlock={5} justify={'center'}>
                    {new Array(rating).fill(0).map((_,i)=>(
                        <FaStar key={i+1} color='#FDE10D' />
                    ))}
                </HStack>
            </Box>
    </>
    )
}

export default BikeCard
