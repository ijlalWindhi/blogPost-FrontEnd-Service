import React from "react";
import { Box, Image, Text, GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function StatItem(props) {
    return (
        <GridItem display="flex" justifyContent="center" textAlign="center">
            <Box
                justifyContent="center"
                display="flex"
                flexDirection="column"
                cursor={"pointer"}
                as={motion.div}
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5 },
                }}
            >
                <Image
                    src={props.icon}
                    p={5}
                    fill="white"
                    background={props.color}
                    borderRadius="xl"
                    w={["20", "24"]}
                    h={["20", "24"]}
                    alignSelf="center"
                />
                <Text fontWeight={700} fontSize={["lg", "2xl", "3xl"]} py={3}>
                    {props.value}
                </Text>
                <Text
                    fontWeight={600}
                    fontSize={["sm", "lg", "xl"]}
                    textOverflow="clip"
                    noOfLines={1}
                >
                    {props.name}
                </Text>
            </Box>
        </GridItem>
    );
}
