import { Box, BoxProps, Button, Icon } from "@chakra-ui/core";
import React from "react";

export type Props = {} | BoxProps;

export default function WindowButtons(props: Props) {
    return (
        <Box {...props}>
            <CloseButton />
        </Box>
    );
}

function CloseButton() {
    return (
        <Button
            size="sm"
            color="red"
            border="none"
            borderRadius={0}
            cursor="pointer"
            variantColor="red"
            title="Close"
        >
            <Icon name="close" />
        </Button>
    );
}
