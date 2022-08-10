import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../../components/fragment/navbar/Navbar";
import HeaderSection from "./section/HeaderSection";
import ProfileSection from "./section/ProfileSection";

export default function Profile() {
    return (
        <Box>
            <Navbar />
            <HeaderSection />
            <ProfileSection />
        </Box>
    );
}
