import { Box, Button, Flex, Grid, GridItem, HStack, Select, Spinner, Text } from '@chakra-ui/react'
import React, { useEffect, useReducer, useState } from 'react'
import { fetchData } from '../unit/bikeApi'
import { bikeReducer, initState } from "./bikeRedicer"
import BikeCard from '../../components/BikeCard'
import LodingSkeleton from '../../components/LodingSkeleton'
import ErrorMessage from '../../components/ErrorMessage'
import Pagination from '../../components/Pagination'
const BikePlate = () => {
    const [sortBy, setSortBy] = useState("");
    const [orderBy, setOrderBy] = useState("");
    const [totalPage, setTotalPage] = useState(0);
    const [page, setpage] = useState(1);
    const [limit, setlimit] = useState(9);
    const [state, dispatch] = useReducer(bikeReducer, initState);
    const { data, isLoading, isError } = state;

    const handleChnagePage = (i) =>{
        setpage(i)
    }

    const getData = async (sortBy,orderBy, page, limit) => {
        dispatch({ type: "LOEADING_STATUS" })
        try {
            let res = await fetchData({sortBy, orderBy, page, limit})
            dispatch({ type: "FETCHING_DATA_SUCCESS", payload: res })
            setTotalPage(Math.ceil(res.headers.get("x-total-count")/limit))
        }
        catch (error) {
            dispatch({ type: "ERROR_STATUS" })
            console.log(error)
        }
    }
    useEffect(() => {
        getData(sortBy, orderBy, page, limit)
    }, [sortBy, orderBy, page, limit])
    return (
        <>
            <Box>   
                <Grid
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(5, 1fr)'
                >
                    <GridItem rowSpan={2} colSpan={1} bg='tomato'>
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
                            <></>
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
        </>
    )
}

export default BikePlate
