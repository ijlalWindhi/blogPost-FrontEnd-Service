import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { GridItem, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BASE_API, URL_ImagePoster } from "../../../utils/constants";

export default function Card() {
    const [data, setData] = useState([]);
    const params = useParams();

    const getData = async () => {
        const DATA_API = `${BASE_API}post/author/${params.id}`;
        const res = await axios.get(DATA_API);
        setData(res.data.data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            {data.map((item, index) => {
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
                        <Link to={`/home/write/editor/${item.id}`}>
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
            })}
        </>
    );
}
