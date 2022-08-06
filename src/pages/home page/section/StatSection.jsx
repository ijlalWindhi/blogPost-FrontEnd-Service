import React from "react";
import { Container, Grid } from "@chakra-ui/react";
import StatItem from "../fragment/StatItem";
import IconBook from "../../../assets/image/icon-book.svg";
import IconUser from "../../../assets/image/icon-users.svg";
import IconLike from "../../../assets/image/icon-heart.svg";

export default function StatSection() {
    return (
        <Container
            maxW="50%"
            gridTemplateRows="repeat(3, 1fr)"
            gap={6}
            py={14}
            id="about-section"
        >
            <Grid
                templateColumns={{ lg: "repeat(3, 1fr)" }}
                gap={{ base: "12", lg: "6" }}
                alignItems="start"
            >
                <StatItem
                    icon={IconBook}
                    color="#9ADCFF"
                    value="1k+"
                    name="Post"
                />
                <StatItem
                    icon={IconUser}
                    color="#FF8AAE"
                    value="500+"
                    name="Users"
                />
                <StatItem
                    icon={IconLike}
                    color="#B983FF"
                    value="4k+"
                    name="Likes"
                />
            </Grid>
        </Container>
    );
}
