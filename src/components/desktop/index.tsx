import { Box, BoxProps } from "@chakra-ui/core";
import React from "react";
import WindowContainer from "../window/window-container";
import windows from "../windows";

export type Props = {} | BoxProps;

export default function Desktop(props: Props) {
    const IMG_SRC =
        "https://www.gravatar.com/avatar/47480af5a86bc65864862f6b00d3d5d7";
    return (
        <Box
            position="absolute"
            display="block"
            padding={4}
            overflow="hidden"
            {...props}
        >
            <windows.ImageViewer src={IMG_SRC} />
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
