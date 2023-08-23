import React, { useState } from 'react'
import styles from "./Navbar.module.css"
import { NavLink } from "react-router-dom"
import logo from "../img/logo.png"
import { Flex, HStack, Heading, Spacer, Container, Image, RadioGroup, Stack, Radio, Button, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, useDisclosure, DrawerCloseButton } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const links = [
    { path: "/", text: "Home" },
    { path: "/bike-plate", text: "Bike Plates" },
    { path: "/car-plate", text: "Car Plates" },
    { path: "/registration", text: "Registration" },
]

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
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
                    <Heading color={"white"}>
                        <Image w={"90px"} src={logo} alt="" />
                    </Heading>
                </Flex>
            </Container>
        </>
    )
}

export default Navbar

