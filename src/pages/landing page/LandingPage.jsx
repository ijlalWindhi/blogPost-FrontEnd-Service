import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { checkLogged } from "../../utils/constants";
import Navbar from "./section/NavbarSection";
import Home from "./section/HomeSection";
import SpaceDecor from "./fragment/SpaceDecor";
import About from "./section/AboutSection";
import StateSection from "./section/StatSection";
import Tutorial from "./section/TutorialSection";
import Footer from "./section/FooterSection";

export default function HomePage() {
    const navigate = useNavigate();
    // check if user is logged in
    useEffect(() => {
        const isLoggedIn = checkLogged();
        if (isLoggedIn) {
            navigate("/home");
        }
    }, [navigate]);
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
