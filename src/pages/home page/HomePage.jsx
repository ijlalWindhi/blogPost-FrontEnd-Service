import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../../components/fragment/navbar/Navbar";
import Home from "./section/HomeSection";
import SpaceDecor from "./fragment/SpaceDecor";
import About from "./section/AboutSection";
import StateSection from "./section/StatSection";
import Tutorial from "./section/TutorialSection";
import Footer from "./section/FooterSection";

export default function HomePage() {
    return (
        <Box>
            <Navbar />
            <Home />
            <SpaceDecor />
            <StateSection />
            <About />
            <Tutorial />
            <Footer />
        </Box>
    );
}
