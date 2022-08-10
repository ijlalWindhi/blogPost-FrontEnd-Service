import React, { useEffect, useState } from "react";
import {
    Container,
    Box,
    Image,
    Heading,
    Center,
    Flex,
    Grid,
    GridItem,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_API, URL_Image } from "../../../utils/constants";

export default function HeaderSection() {
    const params = useParams();
    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        const GET_USER = `${BASE_API}user/${params.id}`;
        axios
            .get(GET_USER)
            .then((res) => {
                setName(res.data.data.name);
                setImage(res.data.data.profile);
            })
            .catch((err) => {
                console.log(err);
            });
    });

    return (
        <Container bgColor={"primary.100"} pt={"16"} maxW={"full"} h={"40vh"}>
            <Center>
                <Grid
                    gap={{ base: "5", lg: "90" }}
                    h={"40vh"}
                    templateColumns={{ lg: "repeat(1, 1fr)" }}
                    justifyContent="center"
                >
                    <GridItem margin={{ base: "5", lg: "auto 0" }} my={"auto"}>
                        <Image
                            src={URL_Image + image}
                            width={["14", "20", "28"]}
                            height={["14", "20", "28"]}
                            rounded={"full"}
                            mx={"auto"}
                        />
                        <Heading
                            color={"white"}
                            fontWeight={"semibold"}
                            textTransform="capitalize"
                            mt={["2", "4"]}
                        >
                            {name}
                        </Heading>
                    </GridItem>
                </Grid>
            </Center>
        </Container>
    );
}
