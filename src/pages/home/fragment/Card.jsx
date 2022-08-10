import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BASE_API, URL_ImagePoster } from "../../../utils/constants";
import { GridItem, Text, Image, Container } from "@chakra-ui/react";

export default function Card() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const GET_POST = `${BASE_API}post`;
        axios.get(GET_POST).then((res) => {
            setData(res.data.data);
        });
    }, []);

    return (
        <>
            {data.map((item, index) => {
                if (item.content == null) {
                    return null;
                } else {
                    return (
                        <GridItem
                            key={index}
                            as={motion.div}
                            justifyContent="center"
                            textAlign="center"
                            mx={"auto"}
                            my={"3"}
                            px={4}
                            py={6}
                            border={"1px solid #eaeaea"}
                            borderRadius={"lg"}
                            whileHover={{ scale: 1.05 }}
                            cursor={"pointer"}
                        >
                            <Link to={`/home/post/sinopsis/${item.id}`}>
                                <Image
                                    src={URL_ImagePoster + item.poster}
                                    w={"178px"}
                                    h={"278px"}
                                    borderRadius="lg"
                                    mx={"auto"}
                                />
                                <Text
                                    fontWeight={"medium"}
                                    fontSize={"lg"}
                                    mt={2}
                                    textTransform={"capitalize"}
                                >
                                    {item.title}
                                </Text>
                            </Link>
                        </GridItem>
                    );
                }
            })}
        </>
    );
}
