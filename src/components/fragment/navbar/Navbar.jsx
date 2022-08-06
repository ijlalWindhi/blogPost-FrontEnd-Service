import React from "react";
import {
    Box,
    Flex,
    Avatar,
    HStack,
    IconButton,
    Button,
    Menu,
    MenuButton,
    useDisclosure,
    useColorModeValue,
    MenuList,
    MenuItem,
    Text,
    Stack,
} from "@chakra-ui/react";
import { AlignCenter, X } from "react-feather";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import LogoutHandler from "./fragment/LogoutHandler";

const getJson = localStorage.getItem("item");
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

const NavbarLoginMenu = () => {
    if (getJson === null) {
        return (
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
        );
    } else {
        return (
            <Menu>
                <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                >
                    <Avatar
                        size={"md"}
                        src={
                            "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                        }
                    />
                </MenuButton>
                <MenuList fontWeight={"semibold"} zIndex={10}>
                    {/* <MenuItem>Profile</MenuItem> */}
                    <MenuItem
                        bg={"red.400"}
                        textColor={"white"}
                        onClick={LogoutHandler}
                        _hover={{ bg: "red.400" }}
                    >
                        Logout
                    </MenuItem>
                </MenuList>
            </Menu>
        );
    }
};

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
                    <NavbarLoginMenu />
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
