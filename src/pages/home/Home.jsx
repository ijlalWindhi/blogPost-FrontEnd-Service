import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Navbar from "../../components/fragment/navbar/Navbar";
import CardSection from "./section/CardSection";

export default function Home() {
    return (
        <Box>
            <Navbar />
            <CardSection />
        </Box>
    );
}
