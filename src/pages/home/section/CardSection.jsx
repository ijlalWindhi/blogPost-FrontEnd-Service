import React from "react";
import { Container, Grid } from "@chakra-ui/react";
import Card from "../fragment/Card";

export default function CardSection() {
    return (
        <Container
            maxW="80%"
            py={20}
            gridTemplateRows="repeat(2, 1fr)"
            h="auto"
        >
            <Grid
                templateColumns={{ md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
                alignItems={"center"}
                gap={10}
            >
                <Card />
            </Grid>
        </Container>
    );
}
