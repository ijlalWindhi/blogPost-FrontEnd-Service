import React from "react";
import { Box, Image, Text, GridItem } from "@chakra-ui/react";

export default function TutorialItem(props) {
    return (
        <GridItem display="flex" textAlign="center" maxW={"80%"} mx={"auto"}>
            <Box justifyContent="center" display="flex" flexDirection="column">
                <Text
                    background="primary.100"
                    borderRadius="xl"
                    color="white"
                    w={["10", "16"]}
                    h={["10", "16"]}
                    fontWeight={700}
                    fontSize={["lg", "2xl", "3xl"]}
                    alignSelf="center"
                    pt={["1.5", 2]}
                >
                    {props.name}
                </Text>
                <Text
                    fontWeight={"normal"}
                    fontSize={["sm", "lg", "xl"]}
                    lineHeight={"1.3"}
                    mt={4}
                >
                    {props.value}
                </Text>
            </Box>
        </GridItem>
    );
}
