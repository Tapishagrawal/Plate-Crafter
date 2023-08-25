import { Box, HStack, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const LodingSkeleton = () => {
    return (
        <HStack wrap={'wrap'}>
            <Box padding='6' w={300} m={5} boxShadow='rgba(0, 0, 0, 0.1) 0px 4px 12px;' bg='white'>
                <Skeleton height='200px' />
                <SkeletonText mb='4' noOfLines={4} spacing='4' skeletonHeight='4' />
                <HStack justify={'center'}>
                    <Skeleton height='40px' width={"60px"} />
                    <Skeleton height='40px' width={'120px'} />
                </HStack>
            </Box>
            <Box padding='6' w={300} m={5} boxShadow='rgba(0, 0, 0, 0.1) 0px 4px 12px;' bg='white'>
                <Skeleton height='200px' />
                <SkeletonText mb='4' noOfLines={4} spacing='4' skeletonHeight='4' />
                <HStack justify={'center'}>
                    <Skeleton height='40px' width={"60px"} />
                    <Skeleton height='40px' width={'120px'} />
                </HStack>
            </Box>
            <Box padding='6' w={300} m={5} boxShadow='rgba(0, 0, 0, 0.1) 0px 4px 12px;' bg='white'>
                <Skeleton height='200px' />
                <SkeletonText mb='4' noOfLines={4} spacing='4' skeletonHeight='4' />
                <HStack justify={'center'}>
                    <Skeleton height='40px' width={"60px"} />
                    <Skeleton height='40px' width={'120px'} />
                </HStack>
            </Box>
            <Box padding='6' w={300} m={5} boxShadow='rgba(0, 0, 0, 0.1) 0px 4px 12px;' bg='white'>
                <Skeleton height='200px' />
                <SkeletonText mb='4' noOfLines={4} spacing='4' skeletonHeight='4' />
                <HStack justify={'center'}>
                    <Skeleton height='40px' width={"60px"} />
                    <Skeleton height='40px' width={'120px'} />
                </HStack>
            </Box>
            <Box padding='6' w={300} m={5} boxShadow='rgba(0, 0, 0, 0.1) 0px 4px 12px;' bg='white'>
                <Skeleton height='200px' />
                <SkeletonText mb='4' noOfLines={4} spacing='4' skeletonHeight='4' />
                <HStack justify={'center'}>
                    <Skeleton height='40px' width={"60px"} />
                    <Skeleton height='40px' width={'120px'} />
                </HStack>
            </Box>
            <Box padding='6' w={300} m={5} boxShadow='rgba(0, 0, 0, 0.1) 0px 4px 12px;' bg='white'>
                <Skeleton height='200px' />
                <SkeletonText mb='4' noOfLines={4} spacing='4' skeletonHeight='4' />
                <HStack justify={'center'}>
                    <Skeleton height='40px' width={"60px"} />
                    <Skeleton height='40px' width={'120px'} />
                </HStack>
            </Box>
        </HStack>
    )
}

export default LodingSkeleton
