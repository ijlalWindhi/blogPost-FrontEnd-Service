import React from "react";
import { Container, Heading, Text } from "@chakra-ui/react";
import DataSection from "../fragment/DataSection";

export default function ProfileSection() {
    return (
        <Container
            maxW={{ base: "90%", md: "50%" }}
            gridTemplateRows="repeat(2, 1fr)"
            py={{ base: 5, lg: 12 }}
            id="home-section"
        >
            <Heading color="primary.100" fontSize={["2xl", "3xl", "4xl"]}>
                Personal Profile
            </Heading>
            <Text fontSize={["sm", "md"]}>
                Update your photo and personal details
            </Text>
            <DataSection />
        </Container>
    );
}
