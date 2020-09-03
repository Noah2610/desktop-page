import { Box, BoxProps } from "@chakra-ui/core";
import React, { useEffect } from "react";
import allWindows from "../windows";
import { WindowContainer } from "../window";
import useWindows from "../../hooks/use-windows";

export type Props = {} | BoxProps;

export default function Desktop(props: Props) {
    const IMG_SRC =
        "https://www.gravatar.com/avatar/47480af5a86bc65864862f6b00d3d5d7";

    const windows = useWindows();

    useEffect(() => {
        windows.addWindow(() => <allWindows.ImageViewer src={IMG_SRC} />, {
            title: "Image Viewer 1",
        });
        windows.addWindow(() => <allWindows.ImageViewer src={IMG_SRC} />, {
            title: "Image Viewer 2",
        });
    }, []);

    return (
        <Box
            position="absolute"
            display="block"
            padding={4}
            overflow="hidden"
            {...props}
        >
            {windows.render()}
        </Box>
    );
}
