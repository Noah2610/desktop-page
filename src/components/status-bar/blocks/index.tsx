import { Box, Flex, BoxProps } from "@chakra-ui/core";
import React from "react";
import DateBlock from "./date-block";
import TimeBlock from "./time-block";

export default function Blocks() {
    return (
        <Flex justifyContent="flex-end" alignItems="center">
            <DateBlock />
            <TimeBlock />
        </Flex>
    );
}

export function Block({
    children,
    ...props
}: { children: React.ReactElement } | BoxProps) {
    return (
        <Box
            paddingY={1}
            paddingX={2}
            fontFamily="monospace"
            textAlign="center"
            fontSize="sm"
            {...props}
        >
            {children}
        </Box>
    );
}
