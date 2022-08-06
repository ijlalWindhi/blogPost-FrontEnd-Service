import React from "react";
import { Box } from "@chakra-ui/react";

export default function SpaceDecor() {
    return (
        <Box
            id="about-section"
            backgroundColor="primary.100"
            w={["200px", "300px"]}
            h="15px"
            marginX="auto"
            borderRadius="lg"
            my={[0, 20]}
        />
    );
}
