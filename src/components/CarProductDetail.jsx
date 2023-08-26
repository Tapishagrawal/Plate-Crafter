import {
    Box,
    Button,
    Center,
    Flex,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    HStack,
    Heading,
    Input,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Spinner,
    Tag,
    TagLabel,
    Text,
    Textarea,
    VStack,
} from '@chakra-ui/react'
import React, { useEffect, useReducer, useState } from 'react'
import { useParams } from 'react-router-dom'
import { singleProductFetchData } from '../page/unit/carApi'
import { carReducer, initState } from '../page/car-plate/carReducer'
import ErrorMessage from '../components/ErrorMessage'
import ProductSlideShow from './ProductSlideShow';
import { FaCheck, FaStar, FaHeart } from "react-icons/fa6";
import ReletedProductSlider from './ReletedProductSlider';
import Footer from './Footer'
import ReviewSlider from './ReviewSlider'
import { fetchCustomerReviewData } from '../page/home/homeApi';

const URL = `https://platecrafters-moke-api.onrender.com/carPlates`
const CarProductDetail = () => {
    const { id } = useParams()
    const [state, dispatch] = useReducer(carReducer, initState)
    const [count, setcount] = useState(1)
    const { data, isLoading, isError } = state;
    const [reviewNameinput, setreviewNameinput] = useState('')
    const [reviewImginput, setreviewImginput] = useState('')
    const [reviewRatinginput, setreviewRatinginput] = useState('')
    const [reviewDescinput, setreviewDescinput] = useState('')
    const [sumitedFormData, setSumitedFormData] = useState("")
    const [reviewData, setReviewData] = useState([])


    const fetchData = async (id) => {
        dispatch({ type: "LOEADING_STATUS" })
        try {
            let res = await singleProductFetchData(id)
            dispatch({ type: "FETCHING_DATA_SUCCESS", payload: res.data })
        } catch (error) {
            dispatch({ type: "ERROR_STATUS" })
            console.log(error)
        }

    }
    const getData = async (URL) => {
        try {
            let res = await fetchCustomerReviewData(URL)
            setReviewData(res)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        fetchData(id)
    }, [id])


    if (isLoading) {
        return (
            <Center mt={5}>
                <Spinner size='xl' speed='0.7s' thickness='3px' color='yellow.500' />
            </Center>
        )
    }
    if (isError) {
        return <ErrorMessage />
    }

    const { img, title, price, rating, category, description } = data
    return (
        <Box>
            <Flex w={"90%"} m={'auto'} mt={20}>
                <ProductSlideShow img={img} />
                {Object.keys(data).length &&
                    <Box ml={10}>
                        <Heading color={"#D69E2E"}>{title}</Heading>
                        <Text fontWeight={500} marginBlock={4} color={"gray.400"}>You may customize your car brand name, font, logo, size of the plate.</Text>
                        <Tag color={"green.300"} >
                            <FaCheck />
                            <TagLabel ml={2}>In Stock</TagLabel>
                        </Tag>
                        <HStack marginBlock={3}>
                            {new Array(5).fill(0).map((_, i) => (
                                <FaStar color={i < rating ? '#FDE10D' : '#D6D6D6'} key={i} />
                            ))}
                        </HStack>
                        <HStack marginBlock={3}>
                            <Text color={'gray.400'} textDecoration="line-through" >&#8377; {price + 300}</Text>
                            <Text color={'green.500'} fontWeight={600} fontSize={30}>&#8377; {price}</Text>
                        </HStack>
                        <Flex gap={2} marginBlock={3}>
                            <Tag>
                                <Button bg={'transparent'} fontWeight={900} _hover={{ background: 'transparent', color: "HSL(143, 72%, 46%)" }} p={3} onClick={() => setcount(count + 1)} fontSize={18} _disabled={count > 5} >+</Button>
                                <TagLabel p={3} fontSize={18} borderLeft={'1px solid #333'} borderRight={'1px solid #333'}>{count}</TagLabel>
                                <Button bg={'transparent'} fontWeight={900} _hover={{ background: 'transparent', color: "HSL(353, 72%, 46%)" }} isDisabled={count <= 1} p={3} onClick={() => setcount(count - 1)} fontSize={18} >-</Button>
                            </Tag>
                            <Box>
                                <Button p={6} fontWeight={500} bg={'black'} color={'white'} _hover={{ bg: "#E9B10B" }} borderRadius={2} width={300}>ADD TO CARD</Button>
                            </Box>
                        </Flex>

                        <Text color={'gray'} fontSize={16} lineHeight={7}>{description}</Text>

                        <Box marginBlock={7} color={'#4A5568'} transition={"color 0.2s"} _hover={{ color: "#E9B10B", cursor: "pointer" }}><FaHeart style={{ display: "inline", marginRight: "5px" }} /> <span style={{ fontSize: "15px", fontWeight: 500 }}>Add to Wishlist</span></Box>
                        <Text color={"RGBA(0, 0, 0, 0.48)"}>Deliver Charges: RS.49</Text>
                    </Box>
                }
            </Flex>

            <Heading mt={18} textAlign={'center'} position={"relative"} fontSize={30} fontWeight={500} borderBottom={'1px solid #CBCED1'}>
                Releted Products
                <Box
                    as='span'
                    position="absolute"
                    bottom="-1px"
                    left="601px"
                    width="200px"
                    height="2px"
                    background-color="#ff9800"
                />
            </Heading>

            <ReletedProductSlider category={category} URL={URL} />

            <Heading mt={18} textAlign={'center'} position={"relative"} fontSize={30} fontWeight={500} borderBottom={'1px solid #CBCED1'}>
                FeedBack
                <Box
                    as='span'
                    position="absolute"
                    bottom="-1px"
                    left="601px"
                    width="200px"
                    height="2px"
                    background-color="#ff9800"
                />
            </Heading>

            <ReviewSlider />

            <Box mt={20}>
                <form >
                    <FormControl width={700} m={'auto'}>
                        <Box>
                            <FormLabel>Name</FormLabel>
                            <Input type='text' value={reviewNameinput} onChange={e => setreviewNameinput(e.target.value)} />
                        </Box>
                        <Box mt={5}>
                            <FormLabel>Image</FormLabel>
                            <input type='file' value={reviewImginput} onChange={e => setreviewImginput(e.target.value)} />
                        </Box>
                        <Box mt={5}>
                            <FormLabel>Rating</FormLabel>
                            <NumberInput max={5} min={1} value={reviewRatinginput} onChange={newValue => {
                                const sanitizedValue = Math.min(newValue, 5);
                                setreviewRatinginput(sanitizedValue);
                            }} >
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </Box>
                        <Box mt={5}>
                            <FormLabel>Your Review</FormLabel>
                            <Textarea onChange={e => setreviewDescinput(e.target.value)} placeholder="Write your message" value={reviewDescinput} />

                        </Box>
                        <Box w={"29%"} m={'auto'} mt={15}>
                            <Button p={6} fontWeight={500} w={200} bg={'black'} color={'white'} _hover={{ bg: "#E9B10B" }} borderRadius={2} type='submit'>SUBMIT</Button>
                        </Box>
                    </FormControl>
                </form>
            </Box>

            <Box marginBlock={50}></Box>
            <Footer />

        </Box>
    )
}

export default CarProductDetail
