import { Box, BoxProps, Heading } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import Buttons from "./buttons";

export type Props = {
    children: string;
    moveWindowRelative?: (x: number, y: number) => void;
} & BoxProps;

export default function TitleBar({
    children,
    moveWindowRelative,
    ...props
}: Props) {
    const [isDragging, setIsDragging] = useState(false);
    const setDrag = () => setIsDragging(true);
    const setNoDrag = () => setIsDragging(false);
    const onMouseMove = moveWindowRelative
        ? (e: MouseEvent) => {
              if (isDragging) {
                  const x = e.movementX;
                  const y = e.movementY;
                  moveWindowRelative(x, y);
              }
          }
        : () => {};

    useEffect(() => {
        window.addEventListener("mouseup", setNoDrag);
        window.addEventListener("mousemove", onMouseMove);
        return () => {
            window.removeEventListener("mouseup", setNoDrag);
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, [isDragging]);

    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            padding={0}
            margin={0}
            color="windowTitleBarText"
            backgroundColor="windowTitleBarBg"
            borderBottom="1px solid"
            borderColor="windowBorder"
            onMouseDown={setDrag}
            cursor={isDragging ? "grabbing" : "grab"}
            {...props}
        >
            <Heading
                size="sm"
                fontSize="sm"
                fontWeight="normal"
                margin={0}
                padding={2}
                pointerEvents="none"
            >
                {children}
            </Heading>

            <Buttons />
        </Box>
    );
}
