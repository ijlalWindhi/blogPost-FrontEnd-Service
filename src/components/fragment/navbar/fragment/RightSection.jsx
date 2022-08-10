import React, { useEffect, useState } from "react";
import {
    Flex,
    IconButton,
    Text,
    Box,
    Image,
    useDisclosure,
} from "@chakra-ui/react";
import { Power } from "react-feather";
import { Link } from "react-router-dom";
import axios from "axios";
import ModalLogout from "./ModalLogout";
import { BASE_API, URL_Image } from "../../../../utils/constants";

export default function RightSection() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const user = JSON.parse(localStorage.getItem("item"));
    const [image, setImage] = useState("");

    useEffect(() => {
        const GET_USER = BASE_API + `user/${user.id}`;
        axios
            .get(GET_USER)
            .then((res) => {
                setImage(res.data.data.profile);
            })
            .catch((err) => {
                return err;
            });
    }, []);
    return (
        <Flex alignItems={"center"}>
            <Link to={`/home/profile/${user.id}`}>
                <Flex
                    alignItems={"center"}
                    mr={{ md: 6 }}
                    bgColor={{ md: "primary.100" }}
                    pr={{ md: 6 }}
                    borderRadius="full"
                >
                    <Image src={URL_Image + image} width={10} height={10} />
                    <Text
                        display={{ base: "none", md: "block" }}
                        ml={{ base: 1, md: 3 }}
                        color="white"
                        fontWeight={"semibold"}
                    >
                        {user.name}
                    </Text>
                </Flex>
            </Link>
            <Box display={{ base: "none", md: "block" }}>
                <IconButton
                    size={"md"}
                    p={2}
                    icon={<Power />}
                    borderRadius="full"
                    onClick={onOpen}
                />
            </Box>
            <ModalLogout isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </Flex>
    );
}
