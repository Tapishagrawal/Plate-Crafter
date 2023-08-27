import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Flex, FormControl, FormLabel, HStack, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Spacer, Text, useDisclosure } from '@chakra-ui/react'
import React, { useReducer } from 'react'
import Foooter from "../../components/Footer"
import { customPLateReducer, customerFormReducer, formInitState, initState } from './customPLateReducer'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useNavigate, useParams } from 'react-router-dom'

const getCustomerPLateDetail = JSON.parse(localStorage.getItem("customer_plate_detail")) || []

const CustomPlate = () => {
    const [state, dispatch] = useReducer(customPLateReducer, initState)
    const { text, textColor, bgColor, framColor, circleColor, textSize } = state
    // const [formState, formDispatch] = useReducer(customerFormReducer, formInitState);
    const { fullName, licenceNO, customerId, panCard, vehicle, vehicleNo } = state;
    const id = useParams()
    const navigate = useNavigate()

    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)


    const hangeChange = (e) => {
        const { name, value } = e.target
        dispatch({
            type: 'CHANGE_PLATE_STATUS',
            payload: { name, value }
        })
    }

    const handleChangeFormField = (e) => {
        const { name, value, type } = e.target;
        const payload = type === "number" ? Number(value) : value;

        dispatch({
            type: "USERFORM_CHANGES_STATE",
            payload: { name, payload }
        })
    }
    const handleSubmitForm = (e) =>{
        e.preventDefault()
        console.log(state)
        const updateState = {...state, id: id.id} 
        getCustomerPLateDetail.push(updateState)
        localStorage.setItem("customer_plate_detail",JSON.stringify(getCustomerPLateDetail))
        dispatch({type:"RESET_FORM_DETAILS"})
        // navigate("/placeOrder")
    }
    const navigateBack = () => {
        window.history.back();
    };
    return (
        <Box mt={20}>
            <Box w={"60%"} m={'auto'} textAlign={'center'}>
                <Heading mb={2} color={"orange.500"}>Personalize Your License Plate</Heading>
                <Text color={"gray.700"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquam numquam eligendi itaque adipisci magnam, hic exercitationem, eum id ratione dolore facilis, harum porro quibusdam! Debitis ab fugit, eius sapiente hic sed enim cumque eos quam nostrum vero voluptatum ut. Quia consequatur dignissimos repellat accusamus quaerat laborum facere nemo corporis?
                </Text>
            </Box>

            <Box mt={20}>
                <Flex justifyContent={"center"} alignItems={"center"}>
                    <Box borderRadius={2} w={"40px"} h={"100px"} bg={framColor} position={"relative"}>
                        <Box position={'absolute'} w={"30px"} h={"30px"} borderRadius={50} top={"35px"} left={"5px"} bg={circleColor} />
                    </Box>

                    <Flex justify={"center"} align={"center"} w={"350px"} h={"80px"} bg={bgColor} color={textColor} textAlign={'center'}>
                        <Heading fontWeight={600} fontSize={textSize}>{text.toUpperCase()}</Heading>
                    </Flex>

                    <Box borderRadius={2} w={"40px"} h={"100px"} bg={framColor} position={"relative"}>
                        <Box position={'absolute'} w={"30px"} h={"30px"} borderRadius={50} top={"35px"} left={"5px"} bg={circleColor} />
                    </Box>
                </Flex>
            </Box>

            <Box w={"90%"} m={'auto'} mt={20} color={'gray.500'}>
                <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='/car-plate'>Car Plate</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem >
                        <BreadcrumbLink onClick={navigateBack}>Card Product</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink >Customise PLate</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>

            <form>
                <Box boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} w={"90%"} m={'auto'} borderRadius={5} mt={3} mb={10} paddingBlock={10}>
                    <Flex>
                        <FormControl >
                            <HStack w={"100%"} justify={'center'} spacing={"2rem"} >
                                <Box width={"40%"}>
                                    <FormLabel color={"gray.500"}>TEXT</FormLabel>
                                    <Input type='text' value={text} name='text' onChange={hangeChange} />
                                </Box>
                                <Box width={"40%"}>
                                    <FormLabel color={"gray.500"}>TEXT COLOR</FormLabel>
                                    <Input type="color" name="textColor" value={textColor} onChange={hangeChange} />
                                </Box>
                            </HStack>
                            <HStack w={"100%"} justify={'center'} spacing={"2rem"} marginBlock={10}>
                                <Box width={"40%"}>
                                    <FormLabel color={"gray.500"}>BACKGROUND COLOR</FormLabel>
                                    <Input type="color" name="bgColor" value={bgColor} onChange={hangeChange} />

                                </Box>
                                <Box width={"40%"}>
                                    <FormLabel color={"gray.500"}>FRAME COLOR</FormLabel>
                                    <Input type="color" name="framColor" value={framColor} onChange={hangeChange} />

                                </Box>
                            </HStack>
                            <HStack w={"100%"} justify={'center'} spacing={"2rem"} >
                                <Box width={"40%"}>
                                    <FormLabel color={"gray.500"}>CIRCLE COLOR</FormLabel>
                                    <Input type="color" name="circleColor" value={circleColor} onChange={hangeChange} />

                                </Box>
                                <Box width={"40%"}>
                                    <FormLabel color={"gray.500"}>FONT SIZE</FormLabel>
                                    <Select name="textSize" value={textSize} placeholder='Select The Text Color' onChange={hangeChange}>
                                        <option value="24px">24px</option>
                                        <option value="30px">30px</option>
                                        <option value="34px">34px</option>
                                        <option value="40px">40x</option>
                                        <option value="42px">42px</option>
                                        <option value="48px">48px</option>
                                        <option value="52px">52px</option>
                                    </Select>
                                </Box>
                            </HStack>
                        </FormControl>
                    </Flex>

                    <Box textAlign={'right'} mr={10} mt={10}>
                        <Button onClick={() => dispatch({ type: "RESET_FORM" })} w={"150px"} colorScheme='red'>RESET</Button>
                        <Button colorScheme='teal' m={5} onClick={onOpen}>Fill Details</Button>
                    </Box>

                    <Modal
                        initialFocusRef={initialRef}
                        finalFocusRef={finalRef}
                        isOpen={isOpen}
                        onClose={onClose}
                    >
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Create your account</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <FormControl>
                                    <FormLabel>Full name</FormLabel>
                                    <Input ref={initialRef} type='text' value={fullName} name='fullName' placeholder='Enter First name' onChange={handleChangeFormField}/>
                                </FormControl>

                                <FormControl mt={4}>
                                    <FormLabel>Licence number</FormLabel>
                                    <Input placeholder='Enter Licence Number' type='password' value={licenceNO} name='licenceNO' onChange={handleChangeFormField} />
                                </FormControl>

                                <FormControl mt={4}>
                                    <FormLabel>Vehicle Number</FormLabel>
                                    <Input placeholder='Enter Vehicle Number' type='text' value={vehicleNo} name='vehicleNo' onChange={handleChangeFormField} />
                                </FormControl>

                                <FormControl mt={4}>
                                    <FormLabel>Customer ID</FormLabel>
                                    <Input placeholder='Enter Adhar Number' type='password' value={customerId} name="customerId" onChange={handleChangeFormField} />
                                </FormControl>

                                <FormControl mt={4}>
                                    <FormLabel>Pan Card</FormLabel>
                                    <Input placeholder='Enter Pan Card Number' type='password' value={panCard} name="panCard" onChange={handleChangeFormField} />
                                </FormControl>

                                <FormControl mt={4}>
                                    <Select placeholder='Selete Your Vehicle' value={vehicle} name='vehicle' onChange={handleChangeFormField}>
                                        <option value="bike">Bike</option>
                                        <option value="car">Car</option>
                                    </Select>
                                </FormControl>

                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={handleSubmitForm} type="submit" >
                                    Save
                                </Button>
                                <Button onClick={onClose}>Cancel</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>

                </Box>
            </form>

            <Box mt={20}>
                <Foooter />
            </Box>

        </Box>
    )
}

export default CustomPlate
