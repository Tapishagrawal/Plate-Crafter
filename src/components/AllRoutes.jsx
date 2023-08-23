import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../page/home/Home'
import BikePlate from '../page/bike-plate/BikePlate'
import CarPlate from '../page/car-plate/CarPlate'
import Registration from '../page/registration/Registration'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/bike-plate' element={<BikePlate/>} />
            <Route path='/car-plate' element={<CarPlate/>} />
            <Route path='/registration' element={<Registration/>} />
        </Routes>
    )
}

export default AllRoutes
