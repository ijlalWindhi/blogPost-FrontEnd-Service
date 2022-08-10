import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../../components/fragment/navbar/Navbar";
import RichTextEditor from "./fragment/RichTextEditor";

export default function Write() {
    return (
        <Box>
            <Navbar />
            <RichTextEditor />
        </Box>
    );
}
