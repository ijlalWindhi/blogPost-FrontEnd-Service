import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../../components/fragment/navbar/Navbar";
import Home from "./section/Home";

export default function HomePage() {
    return (
        <Box>
            <Navbar />
            <Home />
        </Box>
    );
}
