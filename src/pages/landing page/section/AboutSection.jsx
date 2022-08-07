import React from "react";
import { motion } from "framer-motion";
import {
    Container,
    Text,
    Heading,
    Grid,
    GridItem,
    Image,
    Center,
} from "@chakra-ui/react";
import ImageAbout from "../../../assets/image/image-hero.png";

export default function About() {
    return (
        <Container maxW="80%" gridTemplateRows="repeat(2, 1fr)" h="auto">
            <Center>
                <Grid
                    gap={{ base: "5", lg: "90" }}
                    w="base: 100%"
                    templateColumns={{ lg: "repeat(2, 1fr)" }}
                >
                    <GridItem margin={{ base: "5", lg: "auto 0" }}>
                        <Heading
                            color="primary.100"
                            fontSize={["xl", "3xl", "5xl"]}
                            mb={[3, 5, 8]}
                            as={motion.h1}
                            animate={{ y: [30, 0] }}
                            transition={{
                                duration: 3,
                                ease: "ease-in",
                            }}
                        >
                            About Auvers
                        </Heading>
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
                            Auvers is a website that will host all the stories
                            from people around the world. With Auvers everyone
                            can connect and can share their every story for
                            everyone to enjoy. Auvers provides various features
                            such as creating a story, reading other people's
                            stories, and providing feedback on other people's
                            stories.
                        </Text>
                    </GridItem>
                    <GridItem margin={{ base: "5", lg: "auto 0" }}>
                        <Image
                            src={ImageAbout}
                            alt="image about"
                            w={"80%"}
                            mx={"auto"}
                        />
                    </GridItem>
                </Grid>
            </Center>
        </Container>
    );
}
