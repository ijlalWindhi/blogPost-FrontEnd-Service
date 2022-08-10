import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../../components/fragment/navbar/Navbar";
import ContentSection from "./section/ContentSection";

export default function Content() {
    return (
        <Box>
            <Navbar />
            <ContentSection />
        </Box>
    );
}
