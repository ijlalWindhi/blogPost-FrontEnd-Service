import React from "react";
import {
    Box,
    Flex,
    HStack,
    IconButton,
    Button,
    useDisclosure,
    useColorModeValue,
    Text,
    Stack,
} from "@chakra-ui/react";
import { AlignCenter, X } from "react-feather";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const dataNavbar = [
    {
        label: "Home",
        link: "home-section",
    },
    {
        label: "About",
        link: "about-section",
    },
    {
        label: "Tutorial",
        link: "tutorial-section",
    },
];

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box
            w={"100vw"}
            bg={useColorModeValue("white")}
            px={[4, 20]}
            py={2}
            zIndex={10}
            boxShadow={"1px 5px 24px -12px rgba(0, 0, 0, 0.3);"}
            position={"fixed"}
        >
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                <IconButton
                    size={"md"}
                    p={2}
                    icon={isOpen ? <X /> : <AlignCenter />}
                    aria-label={"Open Menu"}
                    display={{ md: "none" }}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack spacing={8} alignItems={"center"}>
                    <Text fontWeight={800} fontSize={"3xl"} color="primary.100">
                        Auvers
                    </Text>
                </HStack>
                <HStack
                    as={"nav"}
                    spacing={10}
                    fontWeight={"semibold"}
                    fontSize={"lg"}
                    textColor={"gray.500"}
                    display={{ base: "none", md: "flex" }}
                >
                    {dataNavbar.map((item, index) => {
                        return (
                            <Link
                                to={item.link}
                                key={index}
                                smooth={true}
                                cursor="pointer"
                            >
                                <Text
                                    px={2}
                                    py={1}
                                    rounded={"md"}
                                    _activeLink={{ textColor: "blue.500" }}
                                    _hover={{
                                        textDecoration: "none",
                                        textColor: "primary.100",
                                    }}
                                    as={motion.h3}
                                    whileHover={{
                                        scale: 1.1,
                                        transition: {
                                            duration: 0.5,
                                        },
                                    }}
                                >
                                    {item.label}
                                </Text>
                            </Link>
                        );
                    })}
                </HStack>
                <Flex alignItems={"center"}>
                    <NavLink to="/login">
                        <Button
                            fontWeight="bold"
                            bg="primary.100"
                            color="white"
                            px={[6, 7, 9]}
                            py={[3, 2, 5]}
                            borderRadius={"2xl"}
                            borderColor="primary.100"
                            borderWidth={3}
                            _hover={{ bg: "white", color: "primary.100" }}
                        >
                            Login
                        </Button>
                    </NavLink>
                </Flex>
            </Flex>
            {isOpen ? (
                <Box pb={4} display={{ md: "none" }}>
                    <Stack as={"nav"} spacing={4}>
                        {dataNavbar.map((item, index) => {
                            return (
                                <Link
                                    to={item.link}
                                    key={index}
                                    smooth={true}
                                    cursor={"pointer"}
                                >
                                    <Text
                                        px={2}
                                        py={1}
                                        rounded={"md"}
                                        _activeLink={{ textColor: "blue.500" }}
                                        _hover={{
                                            textDecoration: "none",
                                            textColor: "primary.100",
                                        }}
                                    >
                                        {item.label}
                                    </Text>
                                </Link>
                            );
                        })}
                    </Stack>
                </Box>
            ) : null}
        </Box>
    );
}
