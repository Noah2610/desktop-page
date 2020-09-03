import { Box, BoxProps } from "@chakra-ui/core";
import React from "react";
import WindowContainer from "../window/window-container";

export type Props = {} | BoxProps;

export default function Desktop(props: Props) {
    return (
        <Box position="absolute" display="block" padding={4} {...props}>
            <ExampleWindow />
        </Box>
    );
}

function ExampleWindow() {
    return (
        <WindowContainer title="Example Window">Hello Window!</WindowContainer>
    );
}
