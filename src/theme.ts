import { theme as defaultTheme } from "@chakra-ui/core";

// Let's say you want to add custom colors
const theme = {
    ...defaultTheme,
    colors: {
        ...defaultTheme.colors,
        bg: "#222222",
        text: "#B6BDCA",
        windowBorder: "#ffffff",
        windowTitleBarBg: "#000000",
        windowTitleBarText: "#ffffff",
    },
};

export default theme;
