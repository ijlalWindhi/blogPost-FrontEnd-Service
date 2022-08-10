import React, { useState } from "react";
import {
    Grid,
    GridItem,
    Flex,
    Text,
    Input,
    InputGroup,
    InputRightElement,
    IconButton,
    Button,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "react-feather";
import FormHandler from "./FormHandler";

export default function FormSection() {
    const [isLoading, setIsLoading] = useState(false);
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const submitHandler = async (values) => {
        setIsLoading(!isLoading);
        const res = await FormHandler(values);
    };
    return (
        <Grid>
            <Grid
                gap={{ base: "0", lg: "90" }}
                templateColumns={{
                    base: "repeat(2,1fr)",
                    sm: "repeat(3, 1fr)",
                }}
                width={"100%"}
                justifyContent="center"
                borderBottomWidth="1px"
                py={5}
            >
                <GridItem margin={{ base: "5", lg: "auto 0" }} my={"auto"}>
                    <Text
                        fontSize={["sm", "md"]}
                        fontWeight={"semibold"}
                        textTransform="capitalize"
                        mt={["2", "4"]}
                    >
                        Name
                    </Text>
                </GridItem>
                <GridItem
                    margin={{ base: "5", lg: "auto 0" }}
                    my={"auto"}
                    colSpan="2"
                >
                    <Input
                        type="text"
                        name="name"
                        id="name"
                        {...register("name", {})}
                    />
                </GridItem>
            </Grid>
            <Grid
                gap={{ base: "0", lg: "90" }}
                templateColumns={{
                    base: "repeat(2,1fr)",
                    sm: "repeat(3, 1fr)",
                }}
                width={"100%"}
                justifyContent="center"
                borderBottomWidth="1px"
                py={5}
            >
                <GridItem margin={{ base: "5", lg: "auto 0" }} my={"auto"}>
                    <Text
                        fontSize={["sm", "md"]}
                        fontWeight={"semibold"}
                        textTransform="capitalize"
                        mt={["2", "4"]}
                    >
                        Username
                    </Text>
                </GridItem>
                <GridItem
                    margin={{ base: "5", lg: "auto 0" }}
                    my={"auto"}
                    colSpan="2"
                >
                    <Input
                        type="text"
                        name="username"
                        id="username"
                        {...register("username", {})}
                    />
                </GridItem>
            </Grid>
            <Grid
                gap={{ base: "0", lg: "90" }}
                templateColumns={{
                    base: "repeat(2,1fr)",
                    sm: "repeat(3, 1fr)",
                }}
                width={"100%"}
                justifyContent="center"
                borderBottomWidth="1px"
                py={5}
            >
                <GridItem margin={{ base: "5", lg: "auto 0" }} my={"auto"}>
                    <Text
                        fontSize={["sm", "md"]}
                        fontWeight={"semibold"}
                        textTransform="capitalize"
                        mt={["2", "4"]}
                    >
                        Email
                    </Text>
                </GridItem>
                <GridItem
                    margin={{ base: "5", lg: "auto 0" }}
                    my={"auto"}
                    colSpan="2"
                >
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        {...register("email", {})}
                    />
                </GridItem>
            </Grid>
            <Grid
                gap={{ base: "0", lg: "90" }}
                templateColumns={{
                    base: "repeat(2,1fr)",
                    sm: "repeat(3, 1fr)",
                }}
                width={"100%"}
                justifyContent="center"
                borderBottomWidth="1px"
                py={5}
            >
                <GridItem margin={{ base: "5", lg: "auto 0" }} my={"auto"}>
                    <Text
                        fontSize={["sm", "md"]}
                        fontWeight={"semibold"}
                        textTransform="capitalize"
                        mt={["2", "4"]}
                    >
                        Password
                    </Text>
                </GridItem>
                <GridItem
                    margin={{ base: "5", lg: "auto 0" }}
                    my={"auto"}
                    colSpan="2"
                >
                    <InputGroup>
                        <Input
                            type={show ? "text" : "password"}
                            name="password"
                            id="password"
                            {...register("password", {
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
                    {errors.password?.type === "minLength" && (
                        <FormHelperText textColor="red">
                            Password must be at least 8 characters
                        </FormHelperText>
                    )}
                </GridItem>
            </Grid>
            <Grid
                gap={{ base: "0", lg: "90" }}
                templateColumns={{
                    base: "repeat(2,1fr)",
                    sm: "repeat(3, 1fr)",
                }}
                width={"100%"}
                justifyContent="center"
                borderBottomWidth="1px"
                py={5}
            >
                <GridItem margin={{ base: "5", lg: "auto 0" }} my={"auto"}>
                    <Text
                        fontSize={["sm", "md"]}
                        fontWeight={"semibold"}
                        textTransform="capitalize"
                        mt={["2", "4"]}
                    >
                        Location
                    </Text>
                </GridItem>
                <GridItem
                    margin={{ base: "5", lg: "auto 0" }}
                    my={"auto"}
                    colSpan="2"
                >
                    <Input
                        type="text"
                        name="location"
                        id="location"
                        {...register("location", {})}
                    />
                </GridItem>
            </Grid>
            <Grid
                gap={{ base: "0", lg: "90" }}
                templateColumns={{
                    base: "repeat(2,1fr)",
                    sm: "repeat(3, 1fr)",
                }}
                width={"100%"}
                justifyContent="center"
                borderBottomWidth="1px"
                py={5}
            >
                <GridItem margin={{ base: "5", lg: "auto 0" }} my={"auto"}>
                    <Text
                        fontSize={["sm", "md"]}
                        fontWeight={"semibold"}
                        textTransform="capitalize"
                        mt={["2", "4"]}
                    >
                        Status
                    </Text>
                </GridItem>
                <GridItem
                    margin={{ base: "5", lg: "auto 0" }}
                    my={"auto"}
                    colSpan="2"
                >
                    <Input
                        type="text"
                        name="status"
                        id="status"
                        {...register("status", { maxLength: 100 })}
                    />
                    {errors.password?.type === "minLength" && (
                        <FormHelperText textColor="red">
                            Maximum 100 characters
                        </FormHelperText>
                    )}
                </GridItem>
            </Grid>
            <Grid
                gap={{ base: "0", lg: "90" }}
                templateColumns={{
                    base: "repeat(2,1fr)",
                    sm: "repeat(3, 1fr)",
                }}
                width={"100%"}
                justifyContent="center"
                borderBottomWidth="1px"
                py={5}
            >
                <GridItem margin={{ base: "5", lg: "auto 0" }} my={"auto"}>
                    <Text
                        fontSize={["sm", "md"]}
                        fontWeight={"semibold"}
                        textTransform="capitalize"
                        mt={["2", "4"]}
                    >
                        Website
                    </Text>
                </GridItem>
                <GridItem
                    margin={{ base: "5", lg: "auto 0" }}
                    my={"auto"}
                    colSpan="2"
                >
                    <Input
                        type="text"
                        name="website"
                        id="website"
                        {...register("website", {})}
                    />
                </GridItem>
            </Grid>
            <Flex>
                <Button
                    variant="outline"
                    px={8}
                    my={8}
                    colorScheme="blue"
                    borderRadius="full"
                    onClick={handleSubmit(async (values) => {
                        await submitHandler(values);
                    })}
                >
                    Save
                </Button>
                <Button
                    px="6"
                    borderRadius="full"
                    colorScheme="blue"
                    shadow="0 0 20px rgba(0, 0, 231, 20%)"
                    my={8}
                    mx={8}
                >
                    Cancle
                </Button>
            </Flex>
        </Grid>
    );
}
