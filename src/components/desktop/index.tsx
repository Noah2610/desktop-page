import { Box, BoxProps } from "@chakra-ui/core";
import React, { useEffect } from "react";
import windows from "../windows";
import useWindows from "../../hooks/use-windows";

export type Props = {} | BoxProps;

export default function Desktop(props: Props) {
    const IMG_SRC =
        "https://www.gravatar.com/avatar/47480af5a86bc65864862f6b00d3d5d7";

    const windowsApi = useWindows();

    useEffect(() => {
        windowsApi.openWindow(
            (props) => <windows.ImageViewer src={IMG_SRC} {...props} />,
            {
                title: "Image Viewer 1",
                initialSize: { w: 512, h: 512 },
            }
        );
        windowsApi.openWindow(
            (props) => <windows.ImageViewer src={IMG_SRC} {...props} />,
            {
                title: "Image Viewer 2",
                initialPosition: { x: 80, y: 80 },
                initialSize: { w: 512, h: 512 },
            }
        );
    }, []);

    return (
        <Box
            position="absolute"
            display="block"
            padding={4}
            overflow="hidden"
            {...props}
        >
            {windowsApi.render()}
        </Box>
    );
}
