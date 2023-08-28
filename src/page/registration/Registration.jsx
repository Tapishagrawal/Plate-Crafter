import { Box, Heading, Link as ChakraLink, Flex, Image, Input, FormControl, FormLabel, Button, Text, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';
import { Link as RoutLink } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

const getAuthenticatedUser = JSON.parse(localStorage.getItem("authentication")) || []

const Registration = () => {
    const [userName, setuserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [authdata, setauthdata] = useState(getAuthenticatedUser);
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {email, userName, password };
        setauthdata([...authdata, newUser]); 
        localStorage.setItem("authentication", JSON.stringify([...authdata, newUser]));
        navigate("/login")
    }
    return (
        <>
            <Flex justify={"center"} align={"center"} h={"90vh"}>
                <Box p={8} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} w={'400px'} h={"500px"}>
                    <Heading textAlign={'center'}>REGISTERED</Heading>
                    <form onSubmit={handleSubmit}>
                        <VStack spacing={10} mt={10}>
                            <FormControl>
                                <Input required onChange={(e) => setuserName(e.target.value)} name="userName" value={userName} border={"1px solid #3333"} placeholder='Enter User Name' type='text' />
                            </FormControl>
                            <FormControl>
                                <Input required onChange={(e) => setEmail(e.target.value)} name="email" value={email} border={"1px solid #3333"} placeholder='Enter Email ID' type='text' />
                            </FormControl>
                            <FormControl>
                                <Input required onChange={(e) => setPassword(e.target.value)} name="password" value={password} border={"1px solid #3333"} placeholder='Enter Password' type='password' />
                            </FormControl>
                        </VStack>
                        <Box mt={"40px"} textAlign={'center'}>
                            <Button type='submit' w={"150px"} bg={"black"} color={"#fff"} _hover={{ bg: "yellow.500", color: "#000" }}>SUBMIT</Button>
                        </Box>
                        <HStack mt={5} justifyContent={"flex-end"}>
                            <Text>Already Have a Account</Text>
                            <ChakraLink as={RoutLink} color='blue.500' to={"/login"}>Sign in</ChakraLink>
                        </HStack>
                    </form>
                </Box>
            </Flex>
        </>
    )
}

export default Registration
