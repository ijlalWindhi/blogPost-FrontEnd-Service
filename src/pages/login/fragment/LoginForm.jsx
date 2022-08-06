import React, { useState } from "react";
import { Link } from "react-router-dom";
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
    Flex,
} from "@chakra-ui/react";
import loginHandler from "./LoginHandler";

export default function LoginForm() {
    // const [message, setMessage] = useState("");
    // const [status, setStatus] = useState("");
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
        // setMessage(response.message);
        // setStatus(response.status);

        // location.reload();
    };

    return (
        <Box>
            {/* <AlertNotification status={status} message={message} /> */}
            <Box>
                <Text mb={4} color="primary.100">
                    <Link to="/">{"<-- Back to Home Page"}</Link>
                </Text>
                <Heading fontWeight={800} color="primary.100">
                    Login
                </Heading>
                <Text fontSize="md" my={3}>
                    Login to start reading stories from all over the world
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
                    <Flex>
                        <Text>Dont have an account?</Text>
                        <Text ml={1} color="primary.100">
                            <Link to="/register"> Register</Link>
                        </Text>
                    </Flex>
                    <Button
                        mt={4}
                        bg="primary.100"
                        color="white"
                        isLoading={isLoading}
                        type="submit"
                        borderWidth={2}
                        borderColor="primary.100"
                        _hover={{ bg: "white", color: "primary.100" }}
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
