import React, { useState, useEffect } from "react";
import {
    Container,
    Box,
    Heading,
    FormControl,
    Input,
    Textarea,
    Select,
    Button,
    Text,
    FormLabel,
} from "@chakra-ui/react";
import axios from "axios";
import { BASE_API } from "../../../utils/constants";
import { useNavigate } from "react-router-dom";
import WriteFormHandler from "./WriteFormHandler";
import AlertNotification from "../../../components/fragment/Alert";
import SpaceDecor from "./SpaceDecor";

export default function WriteForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [category, setCategory] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [poster, setPoster] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const value = JSON.parse(localStorage.getItem("item"));
    const id = value.id;
    const navigate = useNavigate();

    const getCategories = async () => {
        const res = await axios.get(`${BASE_API}category`);
        setCategory(res.data.data);
    };

    const submitHandler = async (e) => {
        let form = new FormData();
        form.append("author", id);
        form.append("title", title);
        form.append("category", selectedCategory);
        form.append("description", description);
        form.append("poster", poster);
        setIsLoading(true);

        const res = await WriteFormHandler(form);
        setMessage(res.message);
        setStatus(res.status);

        setTimeout(() => {
            if (res.status === "success") {
                navigate(`/home/write/existing-write/${id}`);
            }

            location.reload();
        }, 1500);
    };

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <Container py={"24"} maxW={["90%", "70%"]}>
            <Box border={"1px solid #eaeaea"} p={["5", "20"]}>
                <Heading color={"primary.100"} mb={2}>
                    Story Detail
                </Heading>
                <SpaceDecor />
                <AlertNotification status={status} message={message} />
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
                        onChange={(e) => setPoster(e.target.files[0])}
                    />
                    <Text color={"red"}>
                        * Use width 178px and height 278px for best fit
                    </Text>
                    <Button
                        px="6"
                        borderRadius="full"
                        colorScheme="blue"
                        shadow="0 0 20px rgba(0, 0, 231, 20%)"
                        my={8}
                        type={"submit"}
                        isLoading={isLoading}
                        onClick={() =>
                            submitHandler({
                                title,
                                description,
                                category: selectedCategory,
                                poster,
                            })
                        }
                    >
                        Submit
                    </Button>
                </FormControl>
            </Box>
        </Container>
    );
}
