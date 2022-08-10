import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    Container,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Select,
    Textarea,
    Button,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { BASE_API } from "../../../utils/constants";

export default function FormUpdate() {
    const [data, setData] = useState([]);
    const [category, setCategory] = useState([]);
    const [post, setPost] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [poster, setPoster] = useState("");
    const params = useParams();

    const getData = async () => {
        const DATA_API = `${BASE_API}post/${params.id}`;
        const res = await axios.get(DATA_API);
        setData(res.data.data);
    };

    const getSelectCategory = async () => {
        const res = await axios.get(`${BASE_API}category`);
        setCategory(res.data.data);
    };

    const getDatPost = async () => {
        const DATA_API = `${BASE_API}post/${params.id}`;
        const res = await axios.get(DATA_API);
        setPost(res.data.data);
    };

    const setDataPost = async () => {
        setTitle(post.title);
        setDescription(post.description);
        setPoster(post.poster);
        setSelectedCategory(post.category);
    };

    useEffect(() => {
        getData();
        getSelectCategory();
        getDatPost();
        setDataPost();
    }, []);
    return (
        <Container py={"24"} maxW={["90%", "70%"]}>
            <Box border={"1px solid #eaeaea"} p={["5", "20"]}>
                <Heading color={"primary.100"} mb={2}>
                    Story Detail
                </Heading>
                {/* <AlertNotification status={status} message={message} /> */}
                <FormControl method={"POST"}>
                    <FormLabel mt={8}>Title</FormLabel>
                    <Input
                        placeholder={"Title"}
                        name={"title"}
                        id={"title"}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <FormLabel mt={8}>Description</FormLabel>
                    <Textarea
                        placeholder={"Description"}
                        name={"description"}
                        id={"description"}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    <FormLabel mt={8}>Category</FormLabel>
                    <Select
                        placeholder={"Category"}
                        name={"category"}
                        id={"category"}
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        textTransform={"capitalize"}
                        required
                    >
                        {category.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.title}
                            </option>
                        ))}
                    </Select>
                    <FormLabel mt={8}>Cover</FormLabel>
                    <Input
                        type={"file"}
                        name="poster"
                        id="poster"
                        value={poster}
                        onChange={(e) => setPoster(e.target.files[0])}
                    />
                    <Button
                        px="6"
                        borderRadius="full"
                        colorScheme="blue"
                        shadow="0 0 20px rgba(0, 0, 231, 20%)"
                        my={8}
                        type={"submit"}
                        // isLoading={isLoading}
                        // onClick={() =>
                        //     submitHandler({
                        //         title,
                        //         description,
                        //         category: selectedCategory,
                        //         poster,
                        //     })
                        // }
                    >
                        Submit
                    </Button>
                </FormControl>
            </Box>
        </Container>
    );
}
