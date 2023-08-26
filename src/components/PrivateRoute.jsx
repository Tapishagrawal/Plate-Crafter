import React from 'react'
import {useContext} from "react"
import {Navigate} from "react-router-dom"; 
import {AuthContext} from "../context/AuthContextProvider"
const PrivateRoute = (props) => {
    const {isAuth} = useContext(AuthContext)

    if(!isAuth){
        return <Navigate to={"/login"}/>
    }

    return props.children
}

export default PrivateRoute
