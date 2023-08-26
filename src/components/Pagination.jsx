import { Button, ButtonGroup, Flex } from '@chakra-ui/react'
import React from 'react'

const Pagination = ({ totalPage,handleChnagePage, page }) => {
    return (
        <Flex justify={'flex-end'}>
            <ButtonGroup textAlign={'center'}>
                {new Array(totalPage).fill(0).map((_,i)=>(
                    <Button key={i+1} colorScheme={page===i+1 ? "yellow" : "gray"} color={page===i+1 ? "white" : "black"} onClick={()=>handleChnagePage(i+1)}>{i+1}</Button>
                ))}
            </ButtonGroup>
        </Flex>
    )
}

export default Pagination
