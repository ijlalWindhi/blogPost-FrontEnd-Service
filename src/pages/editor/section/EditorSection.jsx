import React from "react";
import { Container } from "@chakra-ui/react";
import RichTextEditor from "../fragment/RichTextEditor";
import FormUpdate from "../fragment/FormUpdate";

export default function EditorSection() {
    return (
        <Container
            maxW={["90%", "80%"]}
            h={"100vh"}
            py={24}
            gridTemplateRows="repeat(2, 1fr)"
        >
            {/* <FormUpdate /> */}
            <RichTextEditor />
        </Container>
    );
}
