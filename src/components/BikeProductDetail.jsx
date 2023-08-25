import { Heading } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
const BikeProductDetail = () => {
    const { id } = useParams()
    return (
        <div>
            <Heading>Bike Id:{id}</Heading>
        </div>
    )
}

export default BikeProductDetail
