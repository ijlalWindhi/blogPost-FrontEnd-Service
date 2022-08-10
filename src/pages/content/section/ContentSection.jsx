import React, { useState, useEffect } from "react";
import { Container, Text, Box, Heading } from "@chakra-ui/react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BASE_API } from "../../../utils/constants";

export default function ContentSection() {
    const params = useParams();
    const [data, setData] = useState([]);

    const getData = async () => {
        const GET_POST = `${BASE_API}post/${params.id}`;
        const res = await axios.get(GET_POST);
        setData(res.data.data);
    };

    useEffect(() => {
        getData();
    }, []);
    return (
        <Container maxW={"80%"} py={24}>
            <Box
                borderWidth={4}
                borderRadius={"lg"}
                px={[5, 10, 10]}
                py={(5, 10, 20)}
            >
                <Heading
                    textAlign={"center"}
                    color={"primary.100"}
                    fontSize={["xl", "2xl", "3xl"]}
                    pb={10}
                >
                    {data.title}
                </Heading>
                <Text dangerouslySetInnerHTML={{ __html: data.content }} />
            </Box>
        </Container>
    );
}
