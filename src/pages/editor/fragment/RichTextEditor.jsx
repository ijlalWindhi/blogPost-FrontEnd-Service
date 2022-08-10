import React, { useRef, useState, useEffect } from "react";
import JoditEditor from "jodit-react";
import { Box, Button, Heading, Center, Text } from "@chakra-ui/react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { BASE_API } from "../../../utils/constants";
import AlertNotification from "../../../components/fragment/Alert";

const config = {
    buttons: ["bold", "italic", "underline"],
};

const RichTextEditor = ({ initialValue }) => {
    const editor = useRef(null);
    const [value, setValue] = useState(initialValue);
    const [data, setData] = useState([]);
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const params = useParams();
    const navigate = useNavigate();

    const getValue = (value) => {
        setValue(value);
    };

    const getData = async () => {
        const DATA_API = `${BASE_API}post/${params.id}`;
        const res = await axios.get(DATA_API);
        setData(res.data.data);
        setValue(res.data.data.content);
    };

    const submitHandler = async (e) => {
        const res = await axios.put(`${BASE_API}post/edit/${params.id}`, {
            content: value,
        });
        setMessage(res.data.message);
        setStatus(res.data.status);

        setTimeout(() => {
            if (res.data.status === "success") {
                navigate(`/home/`);
            }

            location.reload();
        }, 1500);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <Box border={"1px solid #eaeaea"} p={[5, 10, 20]}>
            <AlertNotification status={status} message={message} />
            <Center py={8}>
                <Heading
                    color={"primary.100"}
                    textTransform={"capitalize"}
                    fontSize={["xl", "2xl", "3xl"]}
                >
                    {data.title}
                </Heading>
            </Center>
            <JoditEditor
                ref={editor}
                value={value}
                config={config}
                tabIndex={1}
                colorScheme={"blue"}
                onChange={(newContent) => getValue(newContent)}
                pt={3}
            />
            <Button
                px="6"
                borderRadius="full"
                colorScheme="blue"
                shadow="0 0 20px rgba(0, 0, 231, 20%)"
                my={8}
                onClick={submitHandler}
            >
                Submit
            </Button>
        </Box>
    );
};

export default RichTextEditor;
