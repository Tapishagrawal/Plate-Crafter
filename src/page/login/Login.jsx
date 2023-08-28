import { Box, Button, Flex, FormControl, HStack, Heading, Image, Input, Text, VStack, Link as ChakraLink } from '@chakra-ui/react'
import { AuthContext } from '../../context/AuthContextProvider'
import React, { useContext } from 'react'
import { Link as RoutLink, Navigate, useNavigate } from 'react-router-dom'

import { useState } from 'react'
const Login = () => {
    const {isAuth, login} = useContext(AuthContext)
    const [userName, setuserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    
    if(isAuth){
        navigate("/")
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        login(userName, password)
        setuserName("")
        setPassword("")
    }
    return (
        <>
            <Flex justify={"center"} align={"center"} h={"90vh"}>
                <Box p={8} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} w={'400px'} h={"500px"}>
                    <Box> 
                        <Image m={'auto'} borderRadius={100} w={150} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} src={"https://img.freepik.com/premium-vector/happy-smiling-young-man-avatar-3d-portrait-man-cartoon-character-people-vector-illustration_653240-187.jpg"}/>
                    </Box>
                    <form onSubmit={handleSubmit}>
                        <VStack spacing={10} mt={10}>
                            <FormControl>
                                <Input onChange={(e)=>setuserName(e.target.value)} name="userName" value={userName} border={"1px solid #3333"} placeholder='Enter User Name' type='text'/>
                            </FormControl>
                            <FormControl>
                                <Input onChange={(e)=>setPassword(e.target.value)} name="password" value={password} border={"1px solid #3333"} placeholder='Enter Password' type='password'/>
                            </FormControl>
                        </VStack>
                        <Box mt={"40px"} textAlign={'center'}>
                            <Button type='submit' w={"150px"} bg={"black"} color={"#fff"} _hover={{bg:"yellow.500", color:"#000"}}>LOGIN</Button>
                        </Box>
                        <HStack mt={5} justifyContent={"flex-end"}>
                            <Text>Don't have a Account</Text> 
                            <ChakraLink as={RoutLink} color='blue.500' to={"/registration"}>Sign up</ChakraLink>
                        </HStack>
                    </form>
                </Box>
            </Flex>
        </>
    )
}

export default Login
