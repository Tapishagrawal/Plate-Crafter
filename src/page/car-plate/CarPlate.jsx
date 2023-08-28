import {
    Box,
    Grid,
    Flex,
    GridItem,
    HStack,
    Select,
    Spinner,
    Text,
    VStack,
    Radio,
    RadioGroup,
    Button
} from '@chakra-ui/react'

import { useReducer } from 'react';
import { useState } from 'react';
import { carReducer, initState } from '../car-plate/carReducer';
import { useEffect } from 'react';
import { fetchData } from '../unit/carApi';

import Pagination from '../../components/Pagination';
import LodingSkeleton from '../../components/LodingSkeleton';
import ErrorMessage from '../../components/ErrorMessage';
import CarCard from '../../components/CarCard';
import Footer from '../../components/Footer'
import { filterCardReducer } from './carReducer';


const CarPlate = () => {
    const [sortBy, setSortBy] = useState("");
    const [orderBy, setOrderBy] = useState("");
    const [totalPage, setTotalPage] = useState(0);
    const [page, setpage] = useState(1);
    const [limit, setlimit] = useState(9);
    const [state, dispatch] = useReducer(carReducer, initState);
    const { data, isLoading, isError } = state;
    const [filtersState, filterDispatch] = useReducer(filterCardReducer, "")

    const handleChnagePage = (i) => {
        setpage(i)
    }

    const getData = async (sortBy, orderBy, page, limit, filtersState) => {
        dispatch({ type: "LOEADING_STATUS" })
        try {
            let res = await fetchData({ sortBy, orderBy, page, limit, filtersState })
            dispatch({ type: "FETCHING_DATA_SUCCESS", payload: res })
            setTotalPage(Math.ceil(res.headers.get("x-total-count") / limit))
        }
        catch (error) {
            dispatch({ type: "ERROR_STATUS" })
            console.log(error)
        }
    }
    useEffect(() => {
        getData(sortBy, orderBy, page, limit, filtersState)
    }, [sortBy, orderBy, page, limit, filtersState])

    const handleFilterChange = (value) => {
        filterDispatch({ type: "PRICE_FILTER_CHANGE", payload: value })
        setpage(1)
    }



    const below3000 = data?.data?.reduce((total, curr) => curr.price <= 3000 ? total + 1 : total, 0);
    const Above3000To4000 = data?.data?.reduce((total, curr) => curr.price >= 3000 && curr.price <= 4000 ? total + 1 : total, 0);
    const Above4000To6000 = data?.data?.reduce((total, curr) => curr.price >= 4000 && curr.price <= 6000 ? total + 1 : total, 0);
    const Above6000To8000 = data?.data?.reduce((total, curr) => curr.price >= 6000 && curr.price <= 8000 ? total + 1 : total, 0);
    const Above8000To10000 = data?.data?.reduce((total, curr) => curr.price >= 8000 && curr.price <= 10000 ? total + 1 : total, 0);
    const Above10000 = data?.data?.reduce((total, curr) => curr.price >= 10000 ? total + 1 : total, 0);

    return (
        <>
            <Box>
                <Grid
                    templateRows='repeat(1, 1fr)'
                    templateColumns='repeat(5, 1fr)'
                >
                    <GridItem rowSpan={2} colSpan={1} bg={'#F9F9F9'} border={"1px solid #ECEEED"}>
                        <Box textAlign={'right'} mt={9} mr={5} >
                            <Button colorScheme='teal'>RESET ALL FILTERS</Button>
                        </Box>
                        <Box m={'auto'} mt={9} w={'250px'} p={3} boxShadow={'rgba(149, 157, 165, 0.2) 0px 8px 24px'} borderRadius={5} bg={"#fff"}>
                            <Text color={'teal'} borderBottom={'1px solid #DBDBDB'} fontSize={18} fontWeight={550}>PRICE</Text>
                            <RadioGroup onChange={handleFilterChange} value={filtersState}>
                                <VStack mt={5} paddingInline={2} fontSize={5} align={'flex-start'}>
                                    <Radio colorScheme='teal' value='below2999'>
                                        Below Rs. 3000 ({below3000})
                                    </Radio>
                                    <Radio colorScheme='teal' value='3000-4000'>
                                        Rs. 3000 - Rs. 4000 ({Above3000To4000})
                                    </Radio>
                                    <Radio colorScheme='teal' value='4000-6000'>
                                        Rs. 4000 - Rs. 6000 ({Above4000To6000})
                                    </Radio>
                                    <Radio colorScheme='teal' value='6000-8000'>
                                        Rs. 6000 - Rs. 8000 ({Above6000To8000})
                                    </Radio>
                                    <Radio colorScheme='teal' value='8000-10000'>
                                        Rs. 8000 - Rs. 10000 ({Above8000To10000})
                                    </Radio>
                                    <Radio colorScheme='teal' value='above10000'>
                                        Above Rs.10000 ({Above10000})
                                    </Radio>
                                </VStack>
                            </RadioGroup>
                        </Box>
                        <Box m={'auto'} mt={9} w={'250px'} p={3} boxShadow={'rgba(149, 157, 165, 0.2) 0px 8px 24px'} borderRadius={5} bg={"#fff"}>
                            <Text color={'teal'} borderBottom={'1px solid #DBDBDB'} fontSize={18} fontWeight={550}>COLOR</Text>
                            <RadioGroup onChange={handleFilterChange} value={filtersState}>
                                <VStack mt={5} align={'flex-start'}>
                                    <Radio colorScheme='teal' value='red'>
                                        Red
                                    </Radio>
                                    <Radio colorScheme='teal' value='green'>
                                        Green
                                    </Radio>
                                    <Radio colorScheme='teal' value='blue'>
                                        Blue
                                    </Radio>
                                    <Radio colorScheme='teal' value='yellow'>
                                        Yellow
                                    </Radio>
                                    <Radio colorScheme='teal' value='orange'>
                                        Orange
                                    </Radio>
                                    <Radio colorScheme='teal' value='black'>
                                        Black
                                    </Radio>
                                    <Radio colorScheme='teal' value='multiColor'>
                                        Multi Color
                                    </Radio>
                                </VStack>
                            </RadioGroup>
                        </Box>
                        <Box m={'auto'} mt={9} w={'250px'}  p={3} boxShadow={'rgba(149, 157, 165, 0.2) 0px 8px 24px'} borderRadius={5} bg={"#fff"}>
                            <Text color={'teal'} borderBottom={'1px solid #DBDBDB'} fontSize={18} fontWeight={550}>MATERIAL</Text>
                            <RadioGroup onChange={handleFilterChange} value={filtersState}>
                                <VStack mt={5} align={'flex-start'}>
                                    <Radio colorScheme='teal' value='plastic'>
                                        Plastic
                                    </Radio>
                                    <Radio colorScheme='teal' value='steel'>
                                        Steel
                                    </Radio>
                                    <Radio colorScheme='teal' value='fiber'>
                                        Fiber
                                    </Radio>
                                    <Radio colorScheme='teal' value='acrylic'>
                                        Acrylic
                                    </Radio>
                                    <Radio colorScheme='teal' value='cloth'>
                                        Cloth
                                    </Radio>
                                </VStack>
                            </RadioGroup>
                        </Box>
                    </GridItem>
                    <GridItem colSpan={4} bg={'#F9F9F9'} >
                        <HStack justify={'space-between'} marginInline={10} mt={5}>
                            <Text color={'gray.500'} fontWeight={500}>Showing '{data?.data?.length || <Spinner size='xs' />}' product(s)</Text>
                            <HStack>
                                <Select w={'250px'} value={sortBy} onChange={e => setSortBy(e.target.value)} placeholder='----- Sort By ------'>
                                    <option value='price'>Price</option>
                                    <option value='rating'>Rating</option>
                                </Select>
                                <Select w={'250px'} value={orderBy} onChange={e => setOrderBy(e.target.value)} placeholder='----- Order By -----'>
                                    <option value='asc'>Ascending</option>
                                    <option value='desc'>Descending</option>
                                </Select>
                            </HStack>
                        </HStack>
                        <Box mt={10} p={10}>
                            <></>
                            <Pagination page={page} totalPage={totalPage} handleChnagePage={handleChnagePage} />

                            <Flex wrap={'wrap'} justify={'space-around'}>

                                {isLoading && <LodingSkeleton />}

                                {isError && <ErrorMessage />}

                                {data?.data &&
                                    data?.data.length > 0 &&
                                    data?.data?.map((plate) => (

                                        <CarCard key={plate.id} {...plate} />

                                    ))}
                            </Flex>
                        </Box>
                    </GridItem>
                </Grid>
            </Box>

            <Footer />
        </>
    )
}

export default CarPlate
