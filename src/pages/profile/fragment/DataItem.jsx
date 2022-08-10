import React from "react";
import { Grid, GridItem, Text } from "@chakra-ui/react";

export default function DataItem(props) {
    return (
        <Grid
            gap={{ base: "0", lg: "90" }}
            templateColumns={{ base: "repeat(2,1fr)", sm: "repeat(3, 1fr)" }}
            width={"100%"}
            justifyContent="center"
            borderBottomWidth="1px"
            py={5}
        >
            <GridItem margin={{ base: "5", lg: "auto 0" }} my={"auto"}>
                <Text
                    fontSize={["sm", "md"]}
                    fontWeight={"semibold"}
                    textTransform="capitalize"
                    mt={["2", "4"]}
                >
                    {props.header}
                </Text>
            </GridItem>
            <GridItem
                margin={{ base: "5", lg: "auto 0" }}
                my={"auto"}
                colSpan="2"
            >
                <Text
                    fontSize={["sm", "md"]}
                    border={"1px solid #e6e6e6"}
                    borderRadius={"4"}
                    py={2}
                    px={5}
                    fontWeight={"normal"}
                    mt={["2", "4"]}
                >
                    {props.data}
                </Text>
            </GridItem>
        </Grid>
    );
}
