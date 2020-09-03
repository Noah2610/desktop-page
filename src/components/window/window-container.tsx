import { Box } from "@chakra-ui/core";
import React, { useState } from "react";
import TitleBar from "./title-bar";
import WindowResize from "./window-resize";

const MIN_SIZE = {
    w: 256,
    h: 128,
};

export interface Props {
    title: string;
    children: React.ReactNode;
    isResizable?: boolean;
    hideTitlebar?: boolean;
}

export default function WindowContainer({
    title,
    children,
    isResizable = true,
    hideTitlebar = false,
}: Props) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [size, setSize] = useState({ w: 640, h: 360 });

    const moveWindowRelative = (x: number, y: number) =>
        setPosition((prev) => ({
            x: prev.x + x,
            y: prev.y + y,
        }));
    const resizeWindowRelative = (w: number, h: number) =>
        setSize((prev) => ({
            w: Math.max(prev.w + w, MIN_SIZE.w),
            h: Math.max(prev.h + h, MIN_SIZE.h),
        }));

    return (
        <Box
            position="absolute"
            top={`${position.y}px`}
            left={`${position.x}px`}
            outline="1px solid"
            color="windowBorder"
            width={`${size.w}px`}
            height={`${size.h}px`}
        >
            {!hideTitlebar && (
                <TitleBar moveWindowRelative={moveWindowRelative}>
                    {title}
                </TitleBar>
            )}

            <Box padding={2} color="text">
                {children}
            </Box>

            {isResizable && (
                <WindowResize resizeWindowRelative={resizeWindowRelative} />
            )}
        </Box>
    );
}
