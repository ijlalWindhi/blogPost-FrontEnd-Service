import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { BASE_API, URL_ImagePoster } from "../../../utils/constants";
import { GridItem, Text, Image, Container } from "@chakra-ui/react";

export default function Content() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const GET_POST = `${BASE_API}post/11`;
        axios.get(GET_POST).then((res) => {
            setData(res.data.data.content);
        });
    }, []);

    return (
        <>
            <Text dangerouslySetInnerHTML={{ __html: data }} />
        </>
    );
}
