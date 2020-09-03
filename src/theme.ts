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
        windowActive: "0px 0px 24px 4px",
        windowInactive: "0px 0px 16px 0px",
    },

    sizes: {
        ...defaultTheme.sizes,
        desktopIconWidth: "64px",
    },
};

export default theme;
