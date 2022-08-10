import React from "react";
import {
    Heading,
    Text,
    Container,
    Grid,
    GridItem,
    Center,
    Button,
    Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import ImageHero from "../../../assets/image/image-hero.png";

export default function Home() {
    return (
        <Container
            maxW="80%"
            gridTemplateRows="repeat(2, 1fr)"
            py={{ base: 24, sm: 28, md: 32, lg: 0 }}
            id="home-section"
        >
            <Center>
                <Grid
                    gap={{ base: "5", lg: "90" }}
                    h="100vh"
                    w="base: 100%"
                    templateColumns={{ lg: "repeat(2, 1fr)" }}
                    justifyContent="center"
                >
                    <GridItem margin={{ base: "5", lg: "auto 0" }} my={"auto"}>
                        <Heading
                            color="primary.100"
                            fontWeight={"extrabold"}
                            fontSize={["3xl", "5xl", "7xl"]}
                            lineHeight={".9"}
                            as={motion.h1}
                            animate={{ x: [-30, 0] }}
                            transition={{
                                duration: 3,
                                ease: "ease-in",
                            }}
                        >
                            Hi, This is Auvers
                        </Heading>
                        <Text
                            fontWeight={"semibold"}
                            fontSize={["md", "xl", "2xl"]}
                            lineHeight={"1.3"}
                            my={[6, 8, 10]}
                            as={motion.p}
                            animate={{ y: [30, 0] }}
                            transition={{
                                duration: 3,
                                ease: "ease-in",
                            }}
                        >
                            The world's most loved social storytelling platform
                        </Text>
                        <Text
                            fontWeight={"normal"}
                            fontSize={["sm", "lg", "xl"]}
                            lineHeight={"1.3"}
                            as={motion.p}
                            animate={{ y: [30, 0] }}
                            transition={{
                                duration: 3,
                                ease: "ease-in",
                            }}
                        >
                            Wattpad connects a global community of 90 million
                            readers and writers through the power of stories.
                        </Text>
                        <Link to="about-section" smooth={true}>
                            <Button
                                fontSize={["md", "xl", "2xl"]}
                                fontWeight="bold"
                                bg="white"
                                color="primary.100"
                                mt={[6, 8, 10]}
                                px={[6, 7, 9]}
                                py={[3, 2, 7]}
                                borderRadius={"2xl"}
                                borderColor="primary.100"
                                borderWidth={3}
                                cursor="pointer"
                                _hover={{ bg: "primary.100", color: "white" }}
                                as={motion.p}
                                animate={{ scale: [0.9, 1] }}
                                transition={{
                                    ease: "ease-in",
                                }}
                            >
                                Let's Start Our Story
                            </Button>
                        </Link>
                    </GridItem>
                    <GridItem margin={{ base: "5", lg: "auto 0" }} my={"auto"}>
                        <Center>
                            <Image src={ImageHero} alt="hero image" />
                        </Center>
                    </GridItem>
                </Grid>
            </Center>
        </Container>
    );
}
