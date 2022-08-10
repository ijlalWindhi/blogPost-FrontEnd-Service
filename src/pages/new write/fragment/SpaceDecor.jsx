import React from "react";
import { Box } from "@chakra-ui/react";

export default function SpaceDecor() {
    return (
        <Box
            id="about-section"
            backgroundColor="primary.100"
            w={["200px", "300px"]}
            h="5px"
            borderRadius="lg"
            mb={[5, 8]}
        />
    );
}
