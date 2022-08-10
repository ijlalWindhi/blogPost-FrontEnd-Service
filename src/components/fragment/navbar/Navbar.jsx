import React, { useEffect } from "react";
import {
    Box,
    Flex,
    HStack,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Text,
    Stack,
    Popover,
    PopoverTrigger,
    PopoverContent,
    Icon,
    Collapse,
} from "@chakra-ui/react";
import { AlignCenter, X, ChevronUp } from "react-feather";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import RightSection from "./fragment/RightSection";

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const value = JSON.parse(localStorage.getItem("item"));
    const id = value.id;

    const dataNavbar = [
        {
            label: "Home",
            link: "/home",
        },
        {
            label: "Write",
            link: "/home/",
            children: [
                {
                    label: "New Post",
                    href: "/home/write/new-write",
                },
                {
                    label: "Existing Post",
                    href: `/home/write/existing-write/${id}`,
                },
            ],
        },
    ];

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
                            <Popover
                                trigger={"hover"}
                                placement={"bottom-start"}
                                key={index}
                            >
                                <PopoverTrigger>
                                    <Link to={item.link} cursor="pointer">
                                        <Text
                                            px={2}
                                            py={1}
                                            rounded={"md"}
                                            _activeLink={{
                                                textColor: "blue.500",
                                            }}
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
                                </PopoverTrigger>

                                {item.children && (
                                    <PopoverContent
                                        zIndex={10}
                                        bg={"white"}
                                        boxShadow={
                                            "1px 5px 24px -12px rgba(0, 0, 0, 0.3);"
                                        }
                                        borderRadius={"md"}
                                        p={2}
                                        maxWidth={"md"}
                                        overflow={"auto"}
                                    >
                                        {item.children.map((item, index) => {
                                            return (
                                                <Link
                                                    to={item.href}
                                                    key={index}
                                                >
                                                    <Text
                                                        px={2}
                                                        py={1}
                                                        rounded={"md"}
                                                        _hover={{
                                                            textDecoration:
                                                                "none",
                                                            textColor:
                                                                "primary.100",
                                                        }}
                                                    >
                                                        {item.label}
                                                    </Text>
                                                </Link>
                                            );
                                        })}
                                    </PopoverContent>
                                )}
                            </Popover>
                        );
                    })}
                </HStack>
                <RightSection />
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
                                    <Flex alignItems={"center"}>
                                        <Text
                                            px={2}
                                            py={1}
                                            rounded={"md"}
                                            _activeLink={{
                                                textColor: "blue.500",
                                            }}
                                            _hover={{
                                                textDecoration: "none",
                                                textColor: "primary.100",
                                            }}
                                        >
                                            {item.label}
                                        </Text>
                                        {item.children && (
                                            <Icon
                                                as={ChevronUp}
                                                transition={
                                                    "all .25s ease-in-out"
                                                }
                                                transform={
                                                    isOpen
                                                        ? "rotate(180deg)"
                                                        : ""
                                                }
                                                w={6}
                                                h={6}
                                            />
                                        )}
                                    </Flex>
                                    <Collapse
                                        in={isOpen}
                                        animateOpacity
                                        style={{ marginTop: "0!important" }}
                                    >
                                        <Stack
                                            mt={2}
                                            pl={4}
                                            borderLeft={1}
                                            borderStyle={"solid"}
                                            borderColor={useColorModeValue(
                                                "gray.200",
                                                "gray.700"
                                            )}
                                            align={"start"}
                                        >
                                            {item.children &&
                                                item.children.map(
                                                    (item, index) => {
                                                        return (
                                                            <Link
                                                                to={item.href}
                                                                key={index}
                                                            >
                                                                <Text
                                                                    px={2}
                                                                    py={1}
                                                                    rounded={
                                                                        "md"
                                                                    }
                                                                    _hover={{
                                                                        textDecoration:
                                                                            "none",
                                                                        textColor:
                                                                            "primary.100",
                                                                    }}
                                                                >
                                                                    {item.label}
                                                                </Text>
                                                            </Link>
                                                        );
                                                    }
                                                )}
                                        </Stack>
                                    </Collapse>
                                </Link>
                            );
                        })}
                    </Stack>
                </Box>
            ) : null}
        </Box>
    );
}
