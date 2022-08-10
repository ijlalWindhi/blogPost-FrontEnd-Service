import React, { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import Navbar from "../../components/fragment/navbar/Navbar";
import CardSection from "./section/CardSection";
import Content from "./fragment/Content";

export default function Home() {
    return (
        <Box>
            <Navbar />
            <CardSection />
            <Content />
        </Box>
    );
}
