import React from "react";
import { Container, Text, Stack, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import FooterImage from "../../../assets/image/image-hero.png";
import FooterCol from "../fragment/FooterCol";
import { kontak, menuUtama, sosialMedia } from "../fragment/FooterLinks";

export default function FooterSection() {
    return (
        <Container maxW="80%" id="footer-section">
            <Stack
                direction={{ base: "column", lg: "row" }}
                justifyContent="space-around"
            >
                <Image
                    src={FooterImage}
                    maxW={{ base: "100%", md: "60%", lg: "100%" }}
                    mx="auto"
                    as={motion.img}
                    whileHover={{
                        x: [0, -10, 10, -10, 0],
                        transition: { duration: 0.5 },
                    }}
                ></Image>
                <Stack direction={{ base: "column", md: "row" }} spacing={14}>
                    <FooterCol heading="Main Menu" list={menuUtama} />
                    <FooterCol heading="Contact" list={kontak} />
                    <FooterCol heading="Social Media" list={sosialMedia} />
                </Stack>
            </Stack>
            <Text
                textAlign="center"
                fontWeight={"normal"}
                fontSize={["sm", "lg", "xl"]}
                my={20}
            >
                2022 © Copyright
            </Text>
        </Container>
    );
}
