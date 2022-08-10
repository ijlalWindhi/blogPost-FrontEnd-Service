import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../../components/fragment/navbar/Navbar";
import EditorSection from "./section/EditorSection";

export default function Editor() {
    return (
        <Box h={"100vh"}>
            <Navbar />
            <EditorSection />
        </Box>
    );
}
