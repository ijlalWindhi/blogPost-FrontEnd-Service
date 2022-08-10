import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../../components/fragment/navbar/Navbar";
import WriteForm from "./fragment/WriteForm";

export default function NewWrite() {
    return (
        <Box>
            <Navbar />
            <WriteForm />
        </Box>
    );
}
