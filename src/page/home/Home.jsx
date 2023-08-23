import { Box, Container, Heading, Flex, Image, Text, Button, Spacer, Center, Link, VStack } from "@chakra-ui/react"
import Slider from "../../components/Slider"
import styles from './Home.module.css'
import ReviewSlider from "../../components/ReviewSlider"
import { PhoneIcon } from "@chakra-ui/icons"

const Home = () => {
    return (
        <>
            <Slider />

            {/*Servie Section Start*/}
            <div className={styles.cardMainContainer}>
                <div className={styles.homeCardContainer}>
                    <div className={styles.cardAout}>
                        <h1>Registration</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio velit facilis itaque eveniet reprehenderit eos.</p>
                    </div>
                    <div className={styles.cardAout}>
                        <h1>Custom Plates</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio velit facilis itaque eveniet reprehenderit eos.</p>
                    </div>
                    <div className={styles.cardAout}>
                        <h1>Gadgets</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio velit facilis itaque eveniet reprehenderit eos.</p>
                    </div>
                </div>
            </div>
            {/*Servie Section End*/}

            {/*Premium PLates Section Start*/}
            <Box>
                <Flex mt={20} direction={{base:"column",md:"row"}} justify={"center"} align={'center'}>
                    
                    <Box width={"49%"}>
                        <Image w={"90%"} src={'https://allbikehere.com/wp-content/uploads/2021/05/maxresdefault-12.jpg'}/>
                    </Box>
                    <Box width={"49%"}>
                        <Text fontSize={"15px"} fontWeight={500} color={"#709255"}>Service</Text>
                        <Heading color={"#F59B00"}>Buy Premium Quality Plates From <Text>Pates Crafters</Text></Heading>
                        <Text marginBlock={2} color={"#5C5C5C"} textAlign={"justify"} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti totam soluta cumque minima facere autem amet quis distinctio voluptates, corporis beatae accusamus neque modi quidem voluptate tenetur sunt velit alias.</Text>
                        <Button colorScheme="yellow" marginRight={2}>Order Now</Button>
                        <Button colorScheme="yellow" variant="outline">Learn More</Button>
                    </Box>
                    
                </Flex>
            </Box>
            {/*Premium PLates Section End*/}
            
            
            {/*Custum Plate Section Start*/}
            <Box mt={50}>
                <Container maxW={"1320px"} margin={"auto"}>
                    <Box>
                        <Heading textAlign={"center"} color={"#F59B00"} >Coutomize Your PLate</Heading>
                        <Text maxW={"2xl"} textAlign={"justify"} m={"auto"} mt={5} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque consequuntur praesentium, quaerat ipsum, qui iure obcaecati neque dicta magni culpa numquam laboriosam, unde labore totam dolorum soluta voluptate quos quibusdam?</Text>
                    </Box>
                </Container>
            </Box>
            <Flex w={'95%'} m={"auto"} mt={"30px"} gap={10}>
                <Box >
                    <Image borderRadius={6} src="https://toppng.com/uploads/preview/motorcycle-bike-sports-front-view-powerful-11569982814tqumxz4lst.jpg"></Image>
                </Box>
                <Box>
                    <Image borderRadius={6} src="https://toppng.com/uploads/preview/motorcycle-bike-sports-front-view-powerful-11569982814tqumxz4lst.jpg"></Image>
                </Box>
                <Box>
                    <Image borderRadius={6} src="https://toppng.com/uploads/preview/motorcycle-bike-sports-front-view-powerful-11569982814tqumxz4lst.jpg"></Image>
                </Box>
                <Box>
                    <Image borderRadius={6} src="https://toppng.com/uploads/preview/motorcycle-bike-sports-front-view-powerful-11569982814tqumxz4lst.jpg"></Image>
                </Box>
            </Flex>
            {/*Custum Plate Section End*/}


            <Box mt={50}>
                <Container maxW={"1320px"} margin={"auto"}>
                    <Box>
                        <Heading textAlign={"center"} color={"#F59B00"} >What Our Customer Say</Heading>
                        <Text maxW={"2xl"} textAlign={"center"} m={"auto"} mt={5} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque consequuntur praesentium, quaerat ipsum, qui iure obcaecati neque dicta magni </Text>
                    </Box>
                </Container>
                <ReviewSlider/>
            </Box>

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
                                <Text><PhoneIcon borderRadius={50} fontSize={25} padding={1} color={"black"} backgroundColor={'#c4a76deb'}/> +91 9865988754</Text>
                                <Text><PhoneIcon borderRadius={50} fontSize={25} padding={1} color={"black"} backgroundColor={'#c4a76deb'}/> +91 9865988754</Text>
                                <Text><PhoneIcon borderRadius={50} fontSize={25} padding={1} color={"black"} backgroundColor={'#c4a76deb'}/> +91 9865988754</Text>
                            </VStack>
                        </Box>
                    </Flex>
                </Container>
            </Box>

        </>
    )
}

export default Home
