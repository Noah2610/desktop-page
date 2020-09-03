import { Box, BoxProps } from "@chakra-ui/core";
import React from "react";
import useWindows from "../../hooks/use-windows";
import DesktopIcons from "./desktop-icons";

export type Props = {} | BoxProps;

export default function Desktop(props: Props) {
    const windowsApi = useWindows();

    return (
        <Box
            position="absolute"
            display="block"
            padding={4}
            overflow="hidden"
            {...props}
        >
            <DesktopIcons />
            {windowsApi.render()}
        </Box>
    );
}
