import {
    Box,
    Button,
    Center,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    Heading,
    Input,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Popover,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverTrigger,
    Portal,
    Spinner,
    Tag,
    TagLabel,
    Text,
    Textarea,
    useToast,
    PopoverHeader,
    PopoverFooter,
    Image,
} from '@chakra-ui/react';
import { FaBagShopping } from "react-icons/fa6";
import React, { useEffect, useReducer, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { singleProductFetchData } from '../page/unit/carApi'
import { carReducer, initState } from '../page/car-plate/carReducer'
import ErrorMessage from '../components/ErrorMessage'
import ProductSlideShow from './ProductSlideShow';
import { FaCheck, FaStar, FaHeart } from "react-icons/fa6";
import ReletedProductSlider from './ReletedProductSlider';
import Footer from './Footer'
import ReviewSlider from './ReviewSlider'

const URL = `https://platecrafters-moke-api.onrender.com/carPlates`

const getLocalData = JSON.parse(localStorage.getItem("pruductData")) || []

const getWishListData = JSON.parse(localStorage.getItem("wish-list")) || []

const CarProductDetail = () => {
    const [localData, setLocalData] = useState(getLocalData);
    const { id } = useParams()
    const [state, dispatch] = useReducer(carReducer, initState)
    const [quantityCount, setQuantity] = useState(localData.find(item=> item.id === id)?.quantity || 1)
    const { data, isLoading, isError } = state;
    const [reviewNameinput, setreviewNameinput] = useState('')
    const [reviewImginput, setreviewImginput] = useState('')
    const [reviewRatinginput, setreviewRatinginput] = useState('')
    const [reviewDescinput, setreviewDescinput] = useState('')
    const navigate = useNavigate()
    const [bagQuantity, setBagQuantity] = useState(0)
    const toast = useToast()
    const [addToWishList, setAddToWishList] = useState(false)
    const initRef = useRef()
    const [wishData, setWishData] = useState(getWishListData)

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

    const handleAddCard = () => {
        const isDuplicate = localData.some(existId => id === existId.id)
        if (!isDuplicate) {
            toast({
                title: `Product Added`,
                position: "top",
                isClosable: true,
                status: "success"
            })

            setBagQuantity(bagQuantity + 1)
            const updatedLocalData = [
                ...localData,
                {
                    ...state.data,
                    id: id,
                    quantity: quantityCount
                }
            ];
            localStorage.setItem("pruductData", JSON.stringify(updatedLocalData))
            setLocalData(updatedLocalData)
        } else {
            toast({
                title: `This Product Is Already Added.`,
                position: "top",
                isClosable: true,
                status: "info"
            })
        }
    }
    const handleBuyNow = () => {
            console.log('click buy button')
            navigate("/custom-plate")
    }

    

    const handleDeleteProduct = (id) => {
        const updatedLocallist = localData.filter(item => item.id !== id);
        localStorage.setItem("pruductData", JSON.stringify(updatedLocallist));
        setLocalData(updatedLocallist);

    }
    const handleAddIntoWishList = () => {
        const isDuplicate = wishData.some(existId => Number(id) === existId.id)
        if (!isDuplicate) {
            toast({
                title: `Added Into Wishlist.`,
                position: "top",
                isClosable: true,
                status: "success"
            })
            const updatedWishList = [
                ...wishData, {...state.data}
            ]
            localStorage.setItem("wish-list", JSON.stringify(updatedWishList))
            setWishData(updatedWishList)
            setAddToWishList(!addToWishList)
        } else{
            toast({
                title: `Already in you wishlist.`,
                position: "top",
                isClosable: true,
                status: "error"
            })
        }
    }

    useEffect(() => {

        const updatedLocalData = JSON.parse(localStorage.getItem("pruductData")) || [];
        setLocalData(updatedLocalData);
        setQuantity(1)
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
    let totalAmount = localData.reduce((total, curr) => {
        return total + (curr.price * curr.quantity);
    }, 0);

    let { img, title, price, rating, category, description, quantity } = data
    return (
        <Box>
            <Popover closeOnBlur={false} placement='top' initialFocusRef={initRef}>
                {({ isOpen, onClose }) => (
                    <>
                        <Box position={'relative'}>
                            <PopoverTrigger>
                                <Box
                                    position={'fixed'}
                                    zIndex={1}
                                    top={560}
                                    right={10}
                                    w={"50px"}
                                    h={"50px"}
                                    bg={'#000'}
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    borderRadius={50}
                                    _hover={{ bg: "#28A871" }}
                                    transition={"all 0.3s ease-in-out"}
                                    cursor={'pointer'}

                                >
                                    <Box position={'relative'}>
                                        <Box
                                            position={'fixed'}
                                            bg="red.500"
                                            bottom={"56px"}
                                            right={"48px"}
                                            p={"0px 6px"}
                                            fontSize={"11px"}
                                            fontWeight={600}
                                            color={"whitesmoke"}
                                            borderRadius={50}
                                        >
                                            {localData.length > 0 && localData.length}
                                        </Box>
                                        <FaBagShopping style={{ fontSize: "1.3rem", color: "#fff" }} />
                                    </Box>
                                </Box>
                            </PopoverTrigger>
                            <Portal>
                                <PopoverContent>
                                    <PopoverHeader>Cart</PopoverHeader>
                                    <PopoverCloseButton />
                                    <PopoverBody maxH={"350px"} overflowY={'auto'}>
                                        {localData.map(item => (
                                            <Flex gap={5} alignItems={'center'} marginBlock={5}>
                                                <Box>
                                                    <Image w={100} src={item.img} />
                                                </Box>
                                                <Box>
                                                    <Link to={`/carProductDetail/${item.id}`} >
                                                        <Text _hover={{ color: "yellow.500" }} fontSize={"16px"} color={"gray.500"} fontWeight={500}>{item.title}</Text>
                                                    </Link>
                                                    <Text fontSize={"16px"} color={"gray.500"} fontWeight={500}>{item.quantity} X &#8377;{item.price}</Text>
                                                </Box>
                                                <Text cursor={'pointer'} onClick={() => handleDeleteProduct(item.id)}>x</Text>
                                            </Flex>
                                        ))}
                                    </PopoverBody>
                                    <PopoverFooter>
                                        <HStack justify={'space-around'}>
                                            <Text fontWeight={500} color={"gray.500"}>Total Amount: </Text>
                                            <Text color={"#56B482"} fontWeight={600} as={"span"}>&#8377;{totalAmount}</Text>
                                        </HStack>
                                    </PopoverFooter>
                                    <PopoverFooter>
                                        <Button
                                            m={4}
                                            colorScheme='teal'
                                            onClick={onClose}
                                            ref={initRef}
                                        >
                                            Close
                                        </Button>
                                        <Button
                                            m={4}
                                            colorScheme='teal'
                                            as={Link}
                                            to="/add-card"
                                            ref={initRef}
                                        >
                                            View Card
                                        </Button>
                                    </PopoverFooter>
                                </PopoverContent>
                            </Portal>
                        </Box>

                    </>
                )}
            </Popover>

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
                                <Button
                                    bg={'transparent'}
                                    fontWeight={900}
                                    _hover={{
                                        background: 'transparent',
                                        color: "HSL(143, 72%, 46%)"
                                    }}
                                    p={3}
                                    onClick={() => {
                                        if(localData.length>0){
                                            const updatedData = localData.map(item => {
                                                if (item.id === id) {
                                                    const newQuantity = item.quantity + 1;
                                                    setQuantity(newQuantity)
                                                    return { ...item, quantity: newQuantity };
                                                }
                                                return item;
                                            });
                                            localStorage.setItem("pruductData", JSON.stringify(updatedData));
                                            setLocalData(updatedData);
                                        }else{
                                            setQuantity(quantityCount+1)
                                        }
                                        
                                    }}
                                    fontSize={18}
                                    _disabled={quantityCount > 5}
                                >+</Button>

                                <TagLabel
                                    p={3}
                                    fontSize={18}
                                    borderLeft={'1px solid #333'}
                                    borderRight={'1px solid #333'}
                                >{localData.find(item => item.id === id)?.quantity || quantityCount}</TagLabel>
                                <></>
                                <Button
                                    bg={'transparent'}
                                    fontWeight={900}
                                    _hover={{
                                        background: 'transparent',
                                        color: "HSL(353, 72%, 46%)"
                                    }}
                                    isDisabled={quantityCount <= 1}
                                    p={3}
                                    onClick={() => {
                                        if(localData.length>0){
                                            const updatedData = localData.map(item => {
                                                if (item.id === id) {
                                                    const newQuantity = item.quantity - 1;
                                                    return { ...item, quantity: Math.max(newQuantity, 1) };
                                                }
                                                return item;
                                            });
                                            localStorage.setItem("pruductData", JSON.stringify(updatedData));
                                            setLocalData(updatedData);
                                        }
                                        else{
                                            setQuantity(quantityCount-1)
                                        }
                                    }}
                                    fontSize={18}
                                >-</Button>
                            </Tag>
                            <></>
                            <Box>
                                <Button
                                    p={6}
                                    ml={5}
                                    fontWeight={500}
                                    bg={'black'}
                                    color={'white'}
                                    _hover={{ bg: "#E9B10B" }}
                                    borderRadius={2}
                                    width={300}
                                    onClick={handleAddCard}
                                >ADD TO CARD</Button>
                            </Box>
                        </Flex>

                        <Text color={'gray'} fontSize={16} lineHeight={7}>{description}</Text>

                        <Box
                            display={'inline-block'}
                            marginBlock={7}
                            // '#4A5568'
                            color={wishData.find(existId => id == existId.id) ? "red" : '#4A5568'}
                            transition={"color 0.2s"}
                            _hover={{
                                color: "#E9B10B",
                                cursor: "pointer"
                            }}
                            onClick={handleAddIntoWishList}
                        >
                            <FaHeart style={{ display: "inline", marginRight: "5px" }} />
                            <span style={{ fontSize: "15px", fontWeight: 500 }}>Add to Wishlist</span>
                        </Box>
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
