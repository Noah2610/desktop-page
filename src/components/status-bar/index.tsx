import { Box, Flex } from "@chakra-ui/core";
import React from "react";
import { DateBlock, TimeBlock } from "./blocks";

export default function StatusBar() {
    return (
        <Box position="relative" border="1px solid">
            <Flex justifyContent="flex-end">
                <DateBlock />
                <TimeBlock />
            </Flex>
        </Box>
    );
}
