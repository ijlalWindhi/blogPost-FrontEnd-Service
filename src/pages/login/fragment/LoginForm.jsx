import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "react-feather";
import {
    Button,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Text,
    InputGroup,
    InputRightElement,
    IconButton,
    FormHelperText,
} from "@chakra-ui/react";
import loginHandler from "./LoginHandler";
import AlertNotification from "../../../components/fragment/Alert";

export default function LoginForm() {
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    const submitHandler = async (values) => {
        setIsLoading(!isLoading);
        const response = await loginHandler(values);
        setMessage(response.message);
        setStatus(response.status);

        // location.reload();
    };

    return (
        <Box>
            <AlertNotification status={status} message={message} />
            <Box>
                <Heading fontWeight={800}>Login</Heading>
                <Text fontSize="md" my={2}>
                    Login to submit a report
                </Text>
            </Box>
            <Box>
                <FormControl method="POST">
                    <FormLabel>Username</FormLabel>
                    <Input
                        type="text"
                        name="username"
                        id="username"
                        {...register("username", { required: true })}
                    />
                    {errors.username?.type === "required" && (
                        <FormHelperText textColor="red" mb={4}>
                            Please fill your username
                        </FormHelperText>
                    )}
                    <FormLabel mt={4}>Password</FormLabel>
                    <InputGroup>
                        <Input
                            type={show ? "text" : "password"}
                            name="password"
                            id="password"
                            {...register("password", { required: true })}
                        />
                        <InputRightElement>
                            <IconButton
                                borderRadius="full"
                                size="sm"
                                variant="ghost"
                                onClick={handleClick}
                                aria-label={"whod hide"}
                                icon={show ? <EyeOff /> : <Eye />}
                            />
                        </InputRightElement>
                    </InputGroup>
                    {errors.password?.type === "required" && (
                        <FormHelperText textColor="red">
                            Please fill your password
                        </FormHelperText>
                    )}
                    <Text mt={4}>
                        Dont have an account?
                        <Link to="/register"> Register</Link>
                    </Text>
                    <Button
                        mt={4}
                        colorScheme="teal"
                        isLoading={isLoading}
                        type="submit"
                        onClick={handleSubmit(async (values) => {
                            await submitHandler(values);
                        })}
                    >
                        Submit
                    </Button>
                </FormControl>
            </Box>
        </Box>
    );
}
