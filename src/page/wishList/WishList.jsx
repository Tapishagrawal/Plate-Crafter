import { Box, Button, Flex, HStack, Heading, Image, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import CarCard from '../../components/CarCard'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaStar } from 'react-icons/fa'
import { DeleteIcon } from '@chakra-ui/icons'

const getWishList = JSON.parse(localStorage.getItem("wish-list")) || []
const WishList = () => {
    const [wishData, setWishData] = useState(getWishList)
    
    const handleDelete = (id) =>{
        let updateWishList = wishData.filter(data=>data.id !== id)
        setWishData(updateWishList)
        localStorage.setItem("wish-list",JSON.stringify(updateWishList))
    }

    if(wishData.length<=0){
        return <Heading>No Data</Heading>
    }

    return (
        <>  
            <Flex wrap={"wrap"} justifyContent={"space-around"}>
                {wishData?.map((data) => (
                    <Box _hover={{ marginTop: "15px" }} borderRadius={4} transition={"all 0.2s"} bg={"#fff"} width={'305px'} border={'1px solid #F3F4F6'} boxShadow={"rgba(0, 0, 0, 0.1) 0px 4px 12px"} padding={2} m={5} textAlign={'center'} >
                        <Image m={'auto'} borderRadius={4} src={data.img} alt={data.title} />
                        <Text color={'gray.600'} fontSize={17} noOfLines={2} w={'94%'} m={'auto'}>{data.title}</Text>
                        <Box marginBlock={2}>
                            <Text color={'gray.400'} textDecoration="line-through" >&#8377; {data.price + 300}</Text>
                            <Text color={'green.500'} fontWeight={600} fontSize={20}>&#8377; {data.price}</Text>
                        </Box>
                        <Box marginBlock={2}>
                            <Button marginRight={5} colorScheme='pink' variant={'outline'}  onClick={()=>handleDelete(data.id)}>{ <DeleteIcon />}</Button>
                            <Link to={`/carProductDetail/${data.id}`}>
                                <Button colorScheme='teal'><Tag bg={'transparent'} color={'gray.100'}><FaShoppingCart /></Tag> Order Now</Button>
                            </Link>
                        </Box>
                        <HStack marginBlock={5} justify={'center'}>
                            {new Array(5).fill(0).map((_, i) => (
                                <FaStar key={i + 1} color={i < data.rating ? '#FDE10D' : '#D6D6D6'} />
                            ))}
                        </HStack>
                    </Box>
                ))}
            </Flex>
        </>
    )
}

export default WishList
