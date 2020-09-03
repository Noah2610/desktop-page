import React from "react";
import { Box, BoxProps } from "@chakra-ui/core";

export type Props = BoxProps;

/**
 * The `FullBox` component is an absolute box
 * that takes up all available space.
 */
export default function FullBox(props: Props) {
    return (
        <Box
            position="absolute"
            top={0}
            bottom={0}
            left={0}
            right={0}
            {...props}
        />
    );
}
