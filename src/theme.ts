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

    shadows: {
        ...defaultTheme.shadows,
        windowActive: "4px 4px 24px 4px",
        windowInactive: "4px 4px 16px 0px",
    },
};

export default theme;
