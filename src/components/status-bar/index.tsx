import { Box, BoxProps, Flex } from "@chakra-ui/core";
import React from "react";
import Blocks from "./blocks";
import OpenWindows from "./open-windows";

export type Props = {} | BoxProps;

export default function StatusBar(props: Props) {
    return (
        <Box position="relative" border="1px solid" {...props}>
            <Flex justifyContent="space-between" alignItems="center">
                <OpenWindows />
                <Blocks />
            </Flex>
        </Box>
    );
}
