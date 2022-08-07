import React from "react";
import { Heading, UnorderedList, ListItem, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function FooterCol({ heading, list }) {
    const itemsLinks = (item) => {
        switch (item.type) {
            case "nav":
                return <NavLink to={item.path}>{item.title}</NavLink>;
            case "page":
                return (
                    <Box cursor="pointer">
                        <Link to={item.path} smooth={true}>
                            {item.title}
                        </Link>
                    </Box>
                );
            case "ext":
                return (
                    <a href={item.path} target="_blank" rel="noreferrer">
                        {item.title}
                    </a>
                );
            default:
                return <a href="#">{item.title}</a>;
        }
    };
    return (
        <Box>
            <Heading color="primary.100" fontSize={["xl", "2xl", "4xl"]}>
                {heading}
            </Heading>
            <UnorderedList spacing={4} m={0} mt={4}>
                {list.map((item, index) => (
                    <ListItem
                        key={index}
                        listStyleType="none"
                        fontWeight={"normal"}
                        fontSize={["sm", "lg", "xl"]}
                        as={motion.li}
                        whileHover={{
                            x: [0, 10],
                            transition: { duration: 0.2 },
                        }}
                    >
                        {itemsLinks(item)}
                    </ListItem>
                ))}
            </UnorderedList>
        </Box>
    );
}
