import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
    Container,
    Heading,
    Text,
    Grid,
    GridItem,
    Image,
    Flex,
    Button,
    Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BASE_API, URL_ImagePoster } from "../../../utils/constants";

export default function BoxSinopsis() {
    const params = useParams();
    const [data, setData] = useState([]);
    const [title, setTitle] = useState("");
    const [name, setName] = useState("");

    const getData = async () => {
        const GET_POST = `${BASE_API}post/${params.id}`;
        const res = await axios.get(GET_POST);
        setData(res.data.data);
        setTitle(res.data.data.post_category.title);
        setName(res.data.data.user.name);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <Container maxW={["80%", "70%", "60%", "50%"]} py={24}>
            <Grid
                templateColumns={{
                    base: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)",
                }}
            >
                <GridItem colSpan={{ base: 2, md: 1 }}>
                    <Image
                        src={URL_ImagePoster + data.poster}
                        w={"178px"}
                        h={"278px"}
                        borderRadius={"xl"}
                        mx={"auto"}
                    />
                </GridItem>
                <GridItem colSpan={2} ml={[0, 10]}>
                    <Heading
                        color={"primary.100"}
                        fontSize={["xl", "2xl", "3xl"]}
                        textAlign={["center", "center", "left"]}
                        mt={[4, 4, 4, 0]}
                    >
                        {data.title}
                    </Heading>
                    <Flex my={4}>
                        <Text
                            fontWeight={"semibold"}
                            textTransform={"capitalize"}
                            fontSize={["sm", "lg", "xl"]}
                        >
                            By:
                        </Text>
                        <Text
                            textTransform={"capitalize"}
                            fontSize={["sm", "lg", "xl"]}
                            ml={2}
                        >
                            {name}
                        </Text>
                    </Flex>
                    <Flex>
                        <Text
                            fontWeight={"semibold"}
                            textTransform={"capitalize"}
                            fontSize={["sm", "lg", "xl"]}
                            my={"auto"}
                        >
                            Category:
                        </Text>
                        <Text
                            textTransform={"capitalize"}
                            fontSize={["sm", "lg", "xl"]}
                            ml={2}
                            px={4}
                            py={1}
                            borderWidth={2}
                            borderColor={"primary.100"}
                            borderRadius={"full"}
                        >
                            {title}
                        </Text>
                    </Flex>
                    <Link to={`/home/post/content/${params.id}`}>
                        <Button
                            px="10"
                            borderRadius="full"
                            colorScheme="blue"
                            shadow="0 0 20px rgba(0, 0, 231, 20%)"
                            my={8}
                        >
                            Read
                        </Button>
                    </Link>
                </GridItem>
            </Grid>
            <Box
                borderWidth={2}
                borderColor={"#eaeaea"}
                borderRadius={"xl"}
                px={[5, 20]}
                py={[5, 10]}
                mt={10}
            >
                <Heading
                    color={"primary.100"}
                    fontSize={["xl", "2xl", "3xl"]}
                    textAlign={["center", "center", "left"]}
                    mb={4}
                >
                    Description
                </Heading>
                <Text>{data.description}</Text>
            </Box>
        </Container>
    );
}
