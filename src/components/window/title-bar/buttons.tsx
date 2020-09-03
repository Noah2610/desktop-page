import { Box, BoxProps, Button, Icon } from "@chakra-ui/core";
import React from "react";

export type Props = {} | BoxProps;

export default function WindowButtons(props: Props) {
    return (
        <Box position="relative" height="100%" {...props}>
            <CloseButton />
        </Box>
    );
}

function CloseButton() {
    return (
        <Button
            height="100%"
            size="sm"
            padding={0}
            color="red"
            border="none"
            borderRadius={0}
            cursor="pointer"
            variantColor="red"
            title="Close"
        >
            <Icon name="close" height="100%" />
        </Button>
    );
}
