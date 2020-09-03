import { Box, BoxProps } from "@chakra-ui/core";
import React, { useState } from "react";
import TitleBar from "./title-bar";
import WindowResize from "./window-resize";
import useWindow from "../../hooks/use-window";
import { WindowId, WindowComponent } from ".";

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
const TITLE_BAR_HEIGHT = 24;

export type WindowContainerProps = {
    title: string;
    initialPosition?: { x: number; y: number };
    initialSize?: { w: number; h: number };
    isResizable?: boolean;
    hideTitlebar?: boolean;
};

type Props = WindowContainerProps & {
    windowId: WindowId;
    window: WindowComponent;
} & BoxProps;

export default function WindowContainer({
    windowId,
    window: WindowBody,
    title,
    initialPosition = DEFAULT_POSITION,
    initialSize = DEFAULT_SIZE,
    isResizable = true,
    hideTitlebar = false,
    ...props
}: Props) {
    const { isWindowActive, setWindowActive, closeWindow } = useWindow(
        windowId
    );
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
            height={`${size.h + TITLE_BAR_HEIGHT}px`}
            boxShadow={isWindowActive ? "windowActive" : "windowInactive"}
            zIndex={isWindowActive ? 1 : 0}
            opacity={isWindowActive ? 1.0 : 0.5}
            onMouseDown={setWindowActive}
            {...props}
        >
            {!hideTitlebar && (
                <TitleBar
                    moveWindowRelative={moveWindowRelative}
                    height={`${TITLE_BAR_HEIGHT}px`}
                    onClose={closeWindow}
                >
                    {title}
                </TitleBar>
            )}

            <Box
                position="relative"
                width={`${size.w}px`}
                height={`${size.h}px`}
                color="text"
                margin={0}
                padding={0}
                zIndex={-1}
                backgroundColor="bg"
            >
                <WindowBody
                    windowId={windowId}
                    position={position}
                    size={size}
                />
            </Box>

            {isResizable && (
                <WindowResize resizeWindowRelative={resizeWindowRelative} />
            )}
        </Box>
    );
}
