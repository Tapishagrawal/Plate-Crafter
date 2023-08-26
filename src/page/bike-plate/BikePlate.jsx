import { Box, Flex, Grid, GridItem, HStack, Radio, RadioGroup, Select, Spinner, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useReducer, useState } from 'react'
import { fetchData } from '../unit/bikeApi'
import { bikeReducer, filterBikeReducer, initState } from "./bikeRedicer"
import BikeCard from '../../components/BikeCard'
import LodingSkeleton from '../../components/LodingSkeleton'
import ErrorMessage from '../../components/ErrorMessage'
import Pagination from '../../components/Pagination'
import Footer from '../../components/Footer'


const BikePlate = () => {
    const [sortBy, setSortBy] = useState("");
    const [orderBy, setOrderBy] = useState("");
    const [totalPage, setTotalPage] = useState(0);
    const [page, setpage] = useState(1);
    const [limit, setlimit] = useState(9);
    const [state, dispatch] = useReducer(bikeReducer, initState);
    const { data, isLoading, isError } = state;
    const [filtersState, filterDispatch] = useReducer(filterBikeReducer,"")


    const handleChnagePage = (i) =>{
        setpage(i)
    }

    const getData = async (sortBy,orderBy, page, limit, filtersState) => {
        dispatch({ type: "LOEADING_STATUS" })
        try {
            let res = await fetchData({sortBy, orderBy, page, limit, filtersState})
            dispatch({ type: "FETCHING_DATA_SUCCESS", payload: res })
            setTotalPage(Math.ceil(res.headers.get("x-total-count")/limit))
        }
        catch (error) {
            dispatch({ type: "ERROR_STATUS" })
            console.log(error)
        }
    }
    useEffect(() => {
        getData(sortBy, orderBy, page, limit,filtersState)
    }, [sortBy, orderBy, page, limit,filtersState])

    const handleFilterChange = (value) =>{
        filterDispatch({type:"PRICE_FILTER_CHANGE", payload: value})
        setpage(1)
    }

    const below500 = data?.data?.reduce((total, curr) => curr.price <= 500 ? total + 1 : total, 0);
    const Above500To2000 = data?.data?.reduce((total, curr) => curr.price >= 500 && curr.price <= 2000 ? total + 1 : total, 0);
    const Above2000To4000 = data?.data?.reduce((total, curr) => curr.price >= 2000 && curr.price <= 4000 ? total + 1 : total, 0);
    const Above4000To6000 = data?.data?.reduce((total, curr) => curr.price >= 4000 && curr.price <= 6000 ? total + 1 : total, 0);
    const Above6000To8000 = data?.data?.reduce((total, curr) => curr.price >= 6000 && curr.price <= 8000 ? total + 1 : total, 0);
    const Above8000 = data?.data?.reduce((total, curr) => curr.price >= 8000 ? total + 1 : total, 0);

    return (
        <>
            <Box>   
                <Grid
                    templateRows='repeat(1, 1fr)'
                    templateColumns='repeat(5, 1fr)'
                >
                    <GridItem rowSpan={2} colSpan={1} bg={'#F9F9F9'}>
                    <Box m={'auto'} mt={9} w={'250px'} h={'260px'} p={3} boxShadow={'rgba(149, 157, 165, 0.2) 0px 8px 24px'} borderRadius={5} bg={"#fff"}>
                    <Text color={'#3D6C64'} borderBottom={'1px solid #DBDBDB'} fontSize={18} fontWeight={550}>Price</Text>
                    <RadioGroup onChange={handleFilterChange} value={filtersState}>
                        <VStack mt={5} align={'flex-start'}>
                            <Radio colorScheme='teal' value='below500'>
                                Below Rs. 500 ({below500})
                            </Radio>
                            <Radio colorScheme='teal' value='500-2000'>
                                Rs. 500 - Rs. 2000 ({Above500To2000})
                            </Radio>
                            <Radio colorScheme='teal' value='2000-4000'>
                                Rs. 2000 - Rs. 4000 ({Above2000To4000})
                            </Radio>
                            <Radio colorScheme='teal' value='4000-6000'>
                                Rs. 4000 - Rs. 6000 ({Above4000To6000})
                            </Radio>
                            <Radio colorScheme='teal' value='6000-8000'>
                                Rs. 6000 - Rs. 8000 ({Above6000To8000})
                            </Radio>
                            <Radio colorScheme='teal' value='above8000'>
                                Above Rs.8000 ({Above8000})
                            </Radio>
                        </VStack>
                    </RadioGroup>
                </Box>
                    </GridItem>
                    <GridItem colSpan={4} bg={'#F9F9F9'} >
                        <HStack justify={'space-between'} marginInline={10} mt={5}>
                            <Text color={'gray.500'} fontWeight={500}>Showing '{data?.data?.length || <Spinner size='xs' />}' product(s)</Text>
                            <HStack>
                                <Select w={'250px'} value={sortBy} onChange={e=>setSortBy(e.target.value)} placeholder='----- Sort By ------'>
                                    <option value='price'>Price</option>
                                    <option value='rating'>Rating</option>
                                </Select>
                                <Select w={'250px'} value={orderBy} onChange={e=>setOrderBy(e.target.value)} placeholder='----- Order By -----'>
                                    <option value='asc'>Ascending</option>
                                    <option value='desc'>Descending</option>
                                </Select>
                            </HStack>
                        </HStack>
                        <Box mt={10} p={10}>
                            <Pagination page={page} totalPage={totalPage} handleChnagePage={handleChnagePage}/>

                            <Flex wrap={'wrap'} justify={'space-around'}>
                                
                                {isLoading && <LodingSkeleton/>}

                                {isError && <ErrorMessage/>}

                                {data?.data &&
                                    data?.data.length > 0 &&
                                    data?.data?.map((plate) => (
                                        <BikeCard key={plate.id} {...plate} />
                                    ))}
                            </Flex>
                        </Box>
                    </GridItem>
                </Grid>
            </Box>
            <Footer/>
        </>
    )
}

export default BikePlate
