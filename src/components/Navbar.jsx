import React, { useState } from 'react'
import styles from "./Navbar.module.css"
import { NavLink , useNavigate} from "react-router-dom"
import logo from "../img/logo.png"
import { Flex, HStack, Heading, Spacer, Container, Image, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, useDisclosure, DrawerCloseButton, Box, position, Button } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { FaRegHeart } from "react-icons/fa6";
import {AuthContext} from "../context/AuthContextProvider"
import { useContext } from 'react'

const links = [
    { path: "/", text: "Home" },
    { path: "/car-plate", text: "Car Plates" },
    { path: "/bike-plate", text: "Bike Plates" },
]

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate()
    const {isAuth, logout} = useContext(AuthContext)
    return (
        <>
            <Container
                maxW={"1550px"}
                bg={"blackAlpha.800"}
                paddingBlock={2}
                boxShadow='lg'
            >
                <Flex>
                    <HStack fontWeight={600} spacing={6}>
                        {links.map(({ path, text }) => (
                            <NavLink
                                key={path}
                                to={path}
                                className={({ isActive }) => {
                                    return isActive ? styles.activeBtnColor : styles.defaultBtnColor;
                                }}
                            >
                                {text}
                            </NavLink>
                        ))}
                        <HamburgerIcon
                            _hover={{ color: "white", cursor: "pointer" }}
                            color={"orange"}
                            fontSize={"1.3rem"}
                            className={styles.humbarIcon}
                            onClick={onOpen}
                        />
                        <>
                        <Drawer placement={'left'} onClose={onClose} isOpen={isOpen} size={20} >
                            <DrawerOverlay/>
                            <DrawerContent bg={'#333333'}>
                                <DrawerHeader color={"white"}>Palte Crafters</DrawerHeader>
                                <DrawerCloseButton color={"white"} />
                                <DrawerBody>
                                    {links.map(({ path, text }) => (
                                        <NavLink
                                            key={path}
                                            to={path}
                                            onClick={onClose}
                                            className={styles.mobileBar}
                                        >
                                            {text}
                                        </NavLink>
                                    ))}
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>
                        </>

                    </HStack>
                    <Spacer />
                    <Flex align={'center'} gap={5}>
                        <NavLink to={'/wish-list'} style={{position:"relative"}} >
                            <FaRegHeart style={{color:"white", fontSize:"20px", cursor:"pointer"}}/>
                            <Box 
                                position={"absolute"}
                                bg={"yellow.600"}
                                top={"-1px"}
                                right={"-5px"}
                                p={"0px 5px"}
                                fontWeight={500}
                                color={"white"}
                                fontSize={"0.7rem"}
                                borderRadius={50}
                                w={1}
                                h={2}
                            ></Box>
                        </NavLink>
                        {isAuth ? <Button onClick={()=>logout()} color={"White"} _hover={{color:"#000", bg:"#fff"}} variant={"outline"}>Logout</Button>
                                :
                                <Button onClick={()=>navigate("/login")} color={"White"} _hover={{color:"#000", bg:"#fff"}} variant={"outline"}>Login</Button>
                        }
                        <Heading>
                            <Image w={"90px"} src={logo} alt="" />
                        </Heading>
                    </Flex>
                </Flex>
            </Container>
        </>
    )
}

export default Navbar

