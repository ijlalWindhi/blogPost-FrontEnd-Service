import React from "react";
import RegisterForm from "./fragment/RegisterForm";
import { Center, Container, Grid, GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ImageRegister from "../../assets/image/image-register.png";

export default function Login() {
    return (
        <Container maxW="80%" gridTemplateRows="repeat(2, 1fr)" py={14} p={0}>
            <Center>
                <Grid
                    gap={{ base: "5", lg: "90" }}
                    h="100vh"
                    w="base: 100%"
                    templateColumns={{ lg: "repeat(2, 1fr)" }}
                    justifyContent="center"
                >
                    <GridItem margin={{ base: "5", lg: "auto 0" }}>
                        <RegisterForm />
                    </GridItem>
                    <GridItem margin={{ base: "5", lg: "auto 0" }}>
                        <Center>
                            <motion.img
                                src={ImageRegister}
                                alt="Image Register"
                                animate={{ y: [-20, 20, -20] }}
                                transition={{
                                    duration: 3,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                    repeatType: "loop",
                                }}
                            />
                        </Center>
                    </GridItem>
                </Grid>
            </Center>
        </Container>
    );
}
