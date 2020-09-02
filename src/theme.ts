import { theme as defaultTheme } from "@chakra-ui/core";

// Let's say you want to add custom colors
const theme = {
    ...defaultTheme,
    colors: {
        ...defaultTheme.colors,
        bg: "#000000",
        text: "#B6BDCA",
    },
};

export default theme;
