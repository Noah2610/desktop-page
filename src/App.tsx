import { ThemeProvider } from "@chakra-ui/core";
import { Box } from "@chakra-ui/core";
import React from "react";
import "./App.css";

import StatusBar from "./components/status-bar";
import theme from "./theme";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <style>{`
                    div, p, font,
                    h1, h2, h3, h4, h5, h6 {
                        color: ${theme.colors.text};
                    }
                `}</style>
            <Box
                className="App"
                position="absolute"
                top={0}
                bottom={0}
                left={0}
                right={0}
                backgroundColor="bg"
                color="text"
            >
                <StatusBar />
            </Box>
        </ThemeProvider>
    );
}
