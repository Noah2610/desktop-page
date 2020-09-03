import { Box, BoxProps, Button, Icon } from "@chakra-ui/core";
import React from "react";

export type Props = { onClose?: () => void } & BoxProps;

export default function WindowButtons({ onClose, ...props }: Props) {
    return (
        <Box position="relative" height="100%" {...props}>
            <CloseButton onClick={onClose} />
        </Box>
    );
}

function CloseButton({ onClick }: { onClick?: () => void }) {
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
            onClick={onClick}
        >
            <Icon name="close" height="100%" />
        </Button>
    );
}
