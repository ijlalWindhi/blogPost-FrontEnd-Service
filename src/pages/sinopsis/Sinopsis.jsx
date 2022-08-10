import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../../components/fragment/navbar/Navbar";
import BoxSinopsis from "./fragment/BoxSinopsis";

export default function Sinopsis() {
    return (
        <Box>
            <Navbar />
            <BoxSinopsis />
        </Box>
    );
}
