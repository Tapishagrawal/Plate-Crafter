
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Grid, GridItem, HStack, Heading, Image, Link, Table, TableContainer, Tag, TagLabel, Tbody, Td, Text, Tfoot, Th, Thead, Tr, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

const getLocalData = JSON.parse(localStorage.getItem("pruductData")) || []

const AddCard = () => {
    const [quantityCount, setQuantity] = useState(getLocalData.length > 0 ? getLocalData[0].quantity : 1)
    const [localData, setLocalData] = useState(getLocalData);

    const navigateBack = () => {
        window.history.back();
    };

    let totalAmount = localData.reduce((total, curr) => {
        return total + (curr.price * curr.quantity);
    }, 0);

    useEffect(() => {
        const updatedLocalData = JSON.parse(localStorage.getItem("pruductData")) || [];
        setLocalData(updatedLocalData);
    }, [])

    const handleDeleteProduct = (id) => {
        const updatedLocalData = localData.filter((ele) => ele.id !== id);
        setLocalData(updatedLocalData); // Update the state
        localStorage.setItem("pruductData", JSON.stringify(updatedLocalData));
    };

    const handleIncreaseQuantity = (id) => {
        const updatedData = localData.map((product) => {
            if (product.id === id) {
                return { ...product, quantity: product.quantity + 1 };
            }
            return product;
        });

        setLocalData(updatedData);
        localStorage.setItem("pruductData", JSON.stringify(updatedData));
    };

    const handleDecreaseQuantity = (id) => {
        const updatedData = localData.map((product) => {
            if (product.id === id && product.quantity > 1) {
                return { ...product, quantity: product.quantity - 1 };
            }
            return product;
        });

        setLocalData(updatedData);
        localStorage.setItem("pruductData", JSON.stringify(updatedData));
    }

    return (
        <Box bg={"#F8F8F8"} h={"100vh"} pt={20}>
            <Breadcrumb color={"gray.500"} spacing='8px' separator={<ChevronRightIcon color='gray.500' />} w={"90%"} m={'auto'}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink onClick={navigateBack}>Card Product</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='add-card'>Add Card</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Grid templateColumns={'repeat(5, 1fr)'} gap={2} mt={2}>
                <GridItem colSpan={4}>
                    <TableContainer bg={"#fff"} borderRadius={2} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"} w={"95%"} m={'auto'}>
                        <Heading margin={5} color={'green.400'} borderBottom={"1px solid #3333"}>CART</Heading>
                        {localData.length > 0 ? <Table size='lg'>
                            <Thead bg={'#D8EEE3'} >
                                <Tr>
                                    <Th></Th>
                                    <Th>PRODUCT</Th>
                                    <Th>PRICE</Th>
                                    <Th>QUANTITY</Th>
                                    <Th>SUBTOTAL</Th>
                                    <Th>CUSTOMIZE</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {localData.map((product) => (
                                    <Tr>
                                        <Td cursor={'pointer'} onClick={() => handleDeleteProduct(product.id)}>
                                            x
                                        </Td>
                                        <Td width={450}>
                                            <HStack spacing={10}>
                                                <Image width={"70px"} borderRadius={3} src={product.img} />
                                                <Text>{product.title}</Text>
                                            </HStack>
                                        </Td>
                                        <Td>
                                            &#8377;{product.price}
                                        </Td>
                                        <Td>
                                            <Tag>
                                                <Button
                                                    bg={'transparent'}
                                                    fontWeight={900}
                                                    _hover={{
                                                        background: 'transparent',
                                                        color: "HSL(143, 72%, 46%)"
                                                    }}
                                                    p={3}
                                                    onClick={() => handleIncreaseQuantity(product.id)}
                                                    fontSize={18}
                                                    _disabled={quantityCount > 5}
                                                >+</Button>

                                                <TagLabel
                                                    p={3}
                                                    fontSize={18}
                                                    borderLeft={'1px solid #333'}
                                                    borderRight={'1px solid #333'}
                                                >{product.quantity}</TagLabel>

                                                <Button
                                                    bg={'transparent'}
                                                    fontWeight={900}
                                                    _hover={{
                                                        background: 'transparent',
                                                        color: "HSL(353, 72%, 46%)"
                                                    }}
                                                    isDisabled={quantityCount <= 1}
                                                    p={3}
                                                    onClick={() => handleDecreaseQuantity(product.id)}
                                                    fontSize={18}
                                                >-</Button>
                                            </Tag>
                                        </Td>
                                        <Td>
                                            &#8377;{product.price * product.quantity}
                                        </Td>
                                        <Td>
                                            <ChakraLink as={ReactRouterLink} to={`/custom-plate/${product.id}`} color={"blue.500"} >
                                                <Text>Customise</Text>
                                                <Text>Your Plate</Text>
                                            </ChakraLink>
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table> :
                        <Heading textAlign={'center'} color={"gray.400"} marginBlock={5} >No Data Available</Heading>
                    }
                    </TableContainer>
                </GridItem>
                <GridItem colSpan={1}>
                    <Box>
                        <Box borderRadius={2} h={"300px"} bg={"#fff"} boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} width="250px">
                            <VStack>
                                <Box  bg={"green.500"} width={"100%"} color={"#fff"} fontWeight={500} fontSize={20} p={"20px 10px"}>
                                    <Text>CART TOTALS</Text>
                                </Box>
                                <HStack borderBottom={"1px solid #3333"} fontWeight={500} color={"gray.600"} paddingBlock={5} w={"90%"} justifyContent={'space-between'}>
                                    <Text fontSize={"17px"}>Total Product</Text>
                                    <Text fontSize={"20px"}>{localData.length}</Text>
                                </HStack>
                                <HStack fontWeight={500} color={"gray.600"}  paddingBlock={5} w={"90%"} justifyContent={'space-between'}>
                                    <Text fontSize={"17px"}>Total Amount</Text>
                                    <Text fontSize={"20px"}>&#8377;{totalAmount}</Text>
                                </HStack>
                                <Box>
                                    <Button
                                    p={6}
                                    fontWeight={500}
                                    bg={'black'}
                                    color={'white'}
                                    _hover={{ bg: "#E9B10B", color:"#000" }}
                                    borderRadius={2}
                                    width={220}
                                    >PROCEED TO CHECKOUT</Button>
                                </Box>
                            </VStack>
                        </Box>
                    </Box>
                </GridItem>
            </Grid>
            
            <Box mt={20}>
                <Footer/>
            </Box>

        </Box>
    )
}

export default AddCard
