import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../page/home/Home'
import BikePlate from '../page/bike-plate/BikePlate'
import CarPlate from '../page/car-plate/CarPlate'
import Registration from '../page/registration/Registration'
import CarProductDetail from './CarProductDetail'
import BikeProductDetail from './BikeProductDetail'
import WishList from '../page/wishList/WishList'
import Login from '../page/login/Login'
import PrivateRoute from './PrivateRoute'
import CustomPlate from '../page/custom-plate/CustomPlate'
import AddCard from '../page/addCard/AddCard'



const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/bike-plate' element={<BikePlate/>} />
            <Route path='/car-plate' element={<CarPlate/>} />
            <Route path='/registration' element={<Registration/>} />
            <Route path='/wish-list' element={
                <PrivateRoute>
                    <WishList/>
                </PrivateRoute>
            } />
            <Route path='/custom-plate' element={
                <PrivateRoute>
                    <CustomPlate/>
                </PrivateRoute>
            } />
            <Route path='/login' element={<Login/>} />
            <Route path='/add-card' element={<AddCard/>} />
            <Route path='/bikeProductDetail/:id' element={<BikeProductDetail />} />
            <Route path='/carProductDetail/:id' element={<CarProductDetail/>} />
        </Routes>
    )
}

export default AllRoutes
