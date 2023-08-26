import { Button, Heading } from '@chakra-ui/react'
import { AuthContext } from '../../context/AuthContextProvider'
import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
const Login = () => {
    const {isAuth, login} = useContext(AuthContext)
    if(isAuth){
        return <Navigate to="/"/>
    }
    return (
        <Button onClick={login}>toggle</Button>
    )
}

export default Login
