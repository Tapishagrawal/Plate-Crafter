import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../page/home/Home'
import BikePlate from '../page/bike-plate/BikePlate'
import CarPlate from '../page/car-plate/CarPlate'
import Registration from '../page/registration/Registration'
import CarProductDetail from './CarProductDetail'
import BikeProductDetail from './BikeProductDetail'


const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/bike-plate' element={<BikePlate/>} />
            <Route path='/car-plate' element={<CarPlate/>} />
            <Route path='/registration' element={<Registration/>} />
            <Route path='/bikeProductDetail/:id' element={<BikeProductDetail />} />
            <Route path='/carProductDetail/:id' element={<CarProductDetail/>} />
        </Routes>
    )
}

export default AllRoutes
