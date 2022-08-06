import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        heading: "Poppins, sans-serif",
        body: "Poppins, sans-serif",
    },
    colors: {
        primary: {
            100: "#6886C5",
        },
    },
});

export default theme;
