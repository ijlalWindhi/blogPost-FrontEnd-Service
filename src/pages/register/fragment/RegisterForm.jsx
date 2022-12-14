import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "react-feather";
import {
    Button,
    Box,
    Heading,
    Grid,
    GridItem,
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
import RegisterHandler from "./RegisterHandler";
import AlertNotification from "../../../components/fragment/Alert";

export default function RegisterForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const navigate = useNavigate();
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const submitHandler = async (values) => {
        setIsLoading(!isLoading);
        const res = await RegisterHandler(values);
        console.log(res);
        setMessage(res.message);
        setStatus(res.status);

        setTimeout(() => {
            if (res.status === "success") {
                navigate("/login");
            }

            location.reload();
        }, 1500);
    };

    return (
        <Box>
            <AlertNotification status={status} message={message} />
            <Box mt={4}>
                <Heading fontWeight={800} color="primary.100">
                    Register
                </Heading>
                <Text fontSize="md" my={3}>
                    Register to create account
                </Text>
            </Box>
            <Box>
                <FormControl method="POST">
                    <Grid
                        gap={{ base: "5", lg: "10" }}
                        templateColumns={{ lg: "repeat(2, 1fr)" }}
                        // justifyContent="center"
                    >
                        <GridItem>
                            <FormLabel>Name</FormLabel>
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                {...register("name", { required: true })}
                            />
                            {errors.name?.type === "required" && (
                                <FormHelperText textColor="red" mb={4}>
                                    Please fill your name
                                </FormHelperText>
                            )}
                            <FormLabel mt={4}>Username</FormLabel>
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
                        </GridItem>
                        <GridItem>
                            <FormLabel>Email</FormLabel>
                            <Input
                                type="text"
                                name="email"
                                id="email"
                                {...register("email", { required: true })}
                            />
                            {errors.email?.type === "required" && (
                                <FormHelperText textColor="red" mb={4}>
                                    Please fill your email
                                </FormHelperText>
                            )}
                            <FormLabel mt={4}>Password</FormLabel>
                            <InputGroup>
                                <Input
                                    type={show ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    {...register("password", {
                                        required: true,
                                        minLength: 8,
                                    })}
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
                            {errors.password?.type === "minLength" && (
                                <FormHelperText textColor="red">
                                    Password must be at least 8 characters
                                </FormHelperText>
                            )}
                        </GridItem>
                    </Grid>
                    <Input
                        display="none"
                        type="text"
                        name="role"
                        id="role"
                        value="user"
                        {...register("role")}
                    />
                    <Flex>
                        <Text>Have an account?</Text>
                        <Text ml={1} color="primary.100">
                            <Link to="/login"> Login</Link>
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
