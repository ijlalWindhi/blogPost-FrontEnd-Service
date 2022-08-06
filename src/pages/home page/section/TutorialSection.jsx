import React from "react";
import { motion } from "framer-motion";
import { Container, Heading, Grid, Center } from "@chakra-ui/react";
import TutorialItem from "../fragment/TutorialItem";

export default function TutorialSection() {
    return (
        <Container maxW="80%" h="auto" py={[5, 20]} id="tutorial-section">
            <Center>
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
                    my={[12, 20]}
                >
                    How to use Auvers?
                </Heading>
            </Center>
            <Container gridTemplateRows="repeat(3, 1fr)" gap={6} maxW={"auto"}>
                <Grid
                    templateColumns={{ lg: "repeat(3, 1fr)" }}
                    gap={{ base: "12", lg: "6" }}
                    my={["0", "14"]}
                    alignItems="start"
                >
                    <TutorialItem
                        name="1"
                        value="Create an account first so you can access all the features, then log in using the account you created."
                    />
                    <TutorialItem
                        name="2"
                        value="Start pouring all the stories and ideas you have into your story. Don't forget to add categories, descriptions, and tags so that your story can be reached by more people."
                    />
                    <TutorialItem
                        name="3"
                        value="Publish your story to the general public so they can all read and comment on your story. Don't forget to share your story on social media for more readers."
                    />
                </Grid>
            </Container>
        </Container>
    );
}
