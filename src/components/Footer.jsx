import { 
    Box, 
    Container, 
    Heading, 
    Flex, 
    Image, 
    Text,
    Link, 
    VStack 
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons"

import React from 'react'

const Footer = () => {
    return (
        <Box bg={"blackAlpha.800"} paddingBlock={35} mt={10}>
            <Container maxW={"1330px"}>
                <Flex gap={20}>
                    <Box flex={2}>
                        <Heading as='h3' color={"white"} fontSize={25}>Plate Crafters</Heading>
                        <Text w={"70%"} color={"whiteAlpha.700"} marginBlock={5}>Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit. Quam atque dolor maiores minima aperiam sit!</Text>
                        <Flex align={'center'}>
                            <Image w={"100px"} src="https://www.freepnglogos.com/uploads/play-store-logo-png/play-store-logo-nisi-filters-australia-11.png" />
                            <Image w={40} src="https://www.freepnglogos.com/uploads/app-store-logo-png/download-on-the-app-store-logo-png-23.png" />
                        </Flex>
                    </Box>
                    <Box flex={1}>
                        <Heading as='h3' color={"white"} fontSize={25} marginBottom={5}>Plate Crafters</Heading>
                        <VStack align={"flex-start"} color={"whiteAlpha.600"} fontSize={14}>
                            <Link>Certifitations</Link>
                            <Link>Privacy Policy</Link>
                            <Link>Terms of Service</Link>
                            <Link>Acceptable Use Policy</Link>
                            <Link>Information security Policy</Link>
                            <Link>Login</Link>
                        </VStack>
                    </Box>
                    <Box flex={1}>
                        <Heading as='h3' color={"white"} fontSize={25} marginBottom={5}>Plate Crafters</Heading>
                        <VStack align={"flex-start"} color={"whiteAlpha.600"} fontSize={14}>
                            <Text><PhoneIcon borderRadius={50} fontSize={25} padding={1} color={"black"} backgroundColor={'#c4a76deb'} /> +91 9865988754</Text>
                            <Text><PhoneIcon borderRadius={50} fontSize={25} padding={1} color={"black"} backgroundColor={'#c4a76deb'} /> +91 9865988754</Text>
                            <Text><PhoneIcon borderRadius={50} fontSize={25} padding={1} color={"black"} backgroundColor={'#c4a76deb'} /> +91 9865988754</Text>
                        </VStack>
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}

export default Footer
