import { Box, BoxProps, Flex } from "@chakra-ui/core";
import React from "react";
import { DateBlock, TimeBlock } from "./blocks";

export type Props = {} | BoxProps;

export default function StatusBar(props: Props) {
    return (
        <Box position="relative" border="1px solid" {...props}>
            <Flex justifyContent="flex-end">
                <DateBlock />
                <TimeBlock />
            </Flex>
        </Box>
    );
}
