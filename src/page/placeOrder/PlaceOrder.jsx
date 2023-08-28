import { Box, Flex, Image, Grid, GridItem, Button, HStack, Text, VStack, Heading, FormControl, FormLabel, Input, Textarea, Select, Container } from '@chakra-ui/react'
import { useReducer, useState } from 'react'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom';
import { initState, reducer } from './reducer';
import Swal from 'sweetalert2';
const getCustomerPlateDetail = JSON.parse(localStorage.getItem("customer_plate_detail")) || []
const getProductData = JSON.parse(localStorage.getItem("pruductData")) || []
const PlaceOrder = () => {
    const [localData, setLocalData] = useState(getCustomerPlateDetail)
    const [localProductData, setLocalProductData] = useState(getProductData)
    const [state, dispatch] = useReducer(reducer, initState);
    const { fName, lName, streetAddress, townCity, stateplce, pinCode, ponenumber, email, additionalAddress } = state
    let totalAmount = localProductData.reduce((total, curr) => {
        return total + (curr.price * curr.quantity);
    }, 0);
    const hadlePlaceOrder = () => {
        if(streetAddress===""  || streetAddress ===undefined){
            Swal.fire('PLease fill out the field')
        }else{
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your order placed successfully',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    const handleChangeInputValue = (e) => {
        const { name, value, type } = e.target
        const paylaod = type === "number" ? Number(value) : value
        dispatch({
            type: "CHANGING_FORM_FIELD",
            paylaod: { name, paylaod }
        })
    }

    return (
        <>
            <Box paddingBlock={20} bg={"#F2F2F2"}>
                <Grid templateColumns={'repeat(5, 1fr)'} mt={2}>
                    <GridItem colSpan={3}>
                        <Box w={"95%"} m={'auto'} p={10} bg={"#fff"} borderRadius={5} boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}>
                            <Heading borderBottom={"1px solid #3333"}>BILLING DETAILS</Heading>
                            <Box mt={10}>

                                <form>
                                    <HStack spacing={10} marginBlock={10}>
                                        <FormControl>
                                            <FormLabel>First Name</FormLabel>
                                            <Input placeholder='First Name' value={fName} name={'fName'} type='text' onChange={handleChangeInputValue} />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>Last Name</FormLabel>
                                            <Input placeholder='Last Name' value={lName} name='lName' type='text' onChange={handleChangeInputValue} />
                                        </FormControl>
                                    </HStack>
                                    <VStack spacing={10}>
                                        <FormControl>
                                            <FormLabel>Street address <Text color="red" as={"span"}>*</Text></FormLabel>
                                            <Input placeholder='House number and street name' value={streetAddress} name='streetAddress' type='text' onChange={handleChangeInputValue} />
                                        </FormControl>

                                        <FormControl>
                                            <Input placeholder='Apartment, suite, unitm etc. (optional)' value={additionalAddress} name='additionalAddress' type='text' onChange={handleChangeInputValue} />
                                        </FormControl>

                                        <FormControl>
                                            <FormLabel>Town / City<Text color="red" as={"span"}>*</Text></FormLabel>
                                            <Input name='townCity' value={townCity} type='text' onChange={handleChangeInputValue} />
                                        </FormControl>

                                        <FormControl>
                                            <FormLabel>State<Text color="red" as={"span"}>*</Text></FormLabel>
                                            <Select name="state" value={state} onChange={handleChangeInputValue} >
                                                <option value="andhraPradesh">Andhra Pradesh</option>
                                                <option value="delhi">Delhi</option>
                                                <option value="gujrat">Gujrat</option>
                                                <option value="kerala">Kerala</option>
                                                <option value="madhyaPradesh">Madhya pradesh</option>
                                                <option value="maharashtra">Maharashtra</option>
                                                <option value="punjab">Punjab</option>
                                                <option value="uttarPradesh">Uttar Pradesh</option>
                                            </Select>
                                        </FormControl>

                                        <FormControl>
                                            <FormLabel>Pin Code<Text color="red" as={"span"}>*</Text></FormLabel>
                                            <Input name='pinCode' value={pinCode} type='number' onChange={handleChangeInputValue} />
                                        </FormControl>

                                        <FormControl>
                                            <FormLabel>Phone<Text color="red" as={"span"}>*</Text></FormLabel>
                                            <Input name='ponenumber' value={ponenumber} type='number' onChange={handleChangeInputValue} />
                                        </FormControl>

                                        <FormControl>
                                            <FormLabel>Email</FormLabel>
                                            <Input name='email' value={email} type='email' onChange={handleChangeInputValue} />
                                        </FormControl>
                                    </VStack>
                                </form>
                            </Box>
                            <></>
                        </Box>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Box>
                            <Box borderRadius={2} h={"300px"} bg={"#fff"} boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} width="500px" m={'auto'} >
                                <VStack>
                                    <Box bg={"green.500"} width={"100%"} color={"#fff"} fontWeight={500} fontSize={20} p={"20px 10px"}>
                                        <Text>CART TOTALS</Text>
                                    </Box>
                                    <HStack borderBottom={"1px solid #3333"} fontWeight={500} color={"gray.600"} paddingBlock={5} w={"90%"} justifyContent={'space-between'}>
                                        <Text fontSize={"17px"}>Total Product</Text>
                                        <Text fontSize={"20px"}>{localProductData.length}</Text>
                                    </HStack>
                                    <HStack fontWeight={500} color={"gray.600"} paddingBlock={5} w={"90%"} justifyContent={'space-between'}>
                                        <Text fontSize={"17px"}>Total Amount</Text>
                                        <Text fontSize={"20px"}>&#8377;{totalAmount}</Text>
                                    </HStack>
                                    <Box>
                                        <Button
                                            isDisabled={localData.length <= 0}
                                            p={6}
                                            fontWeight={500}
                                            bg={'black'}
                                            color={'white'}
                                            _hover={{ bg: "#E9B10B", color: "#000" }}
                                            borderRadius={2}
                                            width={220}
                                            onClick={hadlePlaceOrder}
                                        >PLACE ORDER</Button>
                                    </Box>
                                </VStack>
                            </Box>
                            <Box borderRadius={2} minH={"150px"} bg={"#fff"} boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} width="500px" m={'auto'} mt={10}>
                                <Box>
                                    <Container p={"20px 15px"}>
                                        <Text fontSize={"20px"} fontWeight={500} color={"gray.700"}>YOUR ORDER</Text>
                                        <Box>
                                            {localProductData.map(item => (
                                                <Flex gap={5} alignItems={'center'} borderBottom={"1px solid #3333"} marginBlock={5} paddingBlock={5}>
                                                    <Box>
                                                        <Image w={100} src={item.img} />
                                                    </Box>
                                                    <Box mr={"50px"}>
                                                        <Link to={`/carProductDetail/${item.id}`} >
                                                            <Text _hover={{ color: "yellow.500" }} fontSize={"16px"} color={"gray.500"} fontWeight={500}>{item.title}</Text>
                                                        </Link>
                                                        <Text fontSize={"16px"} color={"gray.500"} fontWeight={500}>{item.category} X {item.quantity}</Text>
                                                    </Box>
                                                    <Box>
                                                        <Text fontSize={"17px"} fontWeight={500} color={"green.500"}>&#8377;{item.quantity * item.price}</Text>
                                                    </Box>
                                                </Flex>
                                            ))}
                                        </Box>
                                        <Box>
                                            <HStack justify={'space-around'}>
                                                <Text fontWeight={400} fontSize={"20px"} color={"gray.600"}>Total Amount: </Text>
                                                <Text color={"#E9B10B"} fontWeight={500} fontSize={"25px"} as={"span"}>&#8377;{totalAmount}</Text>
                                            </HStack>
                                        </Box>
                                    </Container>
                                </Box>
                            </Box>
                        </Box>
                    </GridItem>
                </Grid>
            </Box>

            <Box>
                <Footer />
            </Box>
        </>
    )
}

export default PlaceOrder
