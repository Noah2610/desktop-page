import { Box, BoxProps } from "@chakra-ui/core";
import React from "react";
import WindowContainer from "../window/window-container";

export type Props = {} | BoxProps;

export default function Desktop(props: Props) {
    return (
        <Box
            position="absolute"
            display="block"
            padding={4}
            overflow="hidden"
            {...props}
        >
            <ExampleWindow />
        </Box>
    );
}

function ExampleWindow() {
    return (
        <WindowContainer
            title="Example Window"
            initialPosition={{ x: 10, y: 10 }}
            initialSize={{ w: 256, h: 128 }}
        >
            Hello Window!
        </WindowContainer>
    );
}
