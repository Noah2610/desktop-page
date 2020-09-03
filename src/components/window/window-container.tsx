import { Box } from "@chakra-ui/core";
import React, { useState } from "react";
import TitleBar from "./title-bar";
import WindowResize from "./window-resize";

const DEFAULT_POSITION = {
    x: 64,
    y: 64,
};
const DEFAULT_SIZE = {
    w: 640,
    h: 360,
};
const MIN_SIZE = {
    w: 256,
    h: 128,
};
const MAX_SIZE = {
    w: 1280,
    h: 720,
};

export interface Props {
    title: string;
    children: React.ReactNode;
    initialPosition?: { x: number; y: number };
    initialSize?: { w: number; h: number };
    isResizable?: boolean;
    hideTitlebar?: boolean;
}

export default function WindowContainer({
    title,
    children,
    initialPosition = DEFAULT_POSITION,
    initialSize = DEFAULT_SIZE,
    isResizable = true,
    hideTitlebar = false,
}: Props) {
    const [position, setPosition] = useState({
        x: initialPosition.x,
        y: initialPosition.y,
    });
    const [size, setSize] = useState(initialSize);

    const moveWindowRelative = (x: number, y: number) =>
        setPosition((prev) => ({
            x: prev.x + x,
            y: prev.y + y,
        }));
    const resizeWindowRelative = (w: number, h: number) =>
        setSize((prev) => ({
            w: Math.min(Math.max(prev.w + w, MIN_SIZE.w), MAX_SIZE.w),
            h: Math.min(Math.max(prev.h + h, MIN_SIZE.h), MAX_SIZE.h),
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
