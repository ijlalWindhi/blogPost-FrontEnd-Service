import React, { useState, useEffect } from "react";
import { Grid, useDisclosure, Button } from "@chakra-ui/react";
import DataItem from "./DataItem";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_API } from "../../../utils/constants";
import ModalLogout from "../../../components/fragment/navbar/fragment/ModalLogout";

export default function DataSection() {
    const params = useParams();
    const [data, setData] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const GET_USER = `${BASE_API}user/${params.id}`;

    const getData = () => {
        axios
            .get(GET_USER)
            .then((res) => {
                setData(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <Grid>
                <DataItem header="name" data={data.name} />
                <DataItem header="username" data={data.username} />
                <DataItem header="email" data={data.email} />
                <DataItem header="location" data={data.location} />
                <DataItem header="status" data={data.status} />
                <DataItem header="website" data={data.website} />
            </Grid>
            <Button
                px="6"
                borderRadius="full"
                colorScheme="blue"
                shadow="0 0 20px rgba(0, 0, 231, 20%)"
                my={8}
                onClick={onOpen}
            >
                Logout
            </Button>
            <ModalLogout isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </>
    );
}
