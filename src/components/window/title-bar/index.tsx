import { Box, Heading } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import Buttons from "./buttons";

export interface Props {
    children: string;
    moveWindowRelative?: (x: number, y: number) => void;
}

export default function TitleBar({ children, moveWindowRelative }: Props) {
    const [isDragging, setIsDragging] = useState(false);
    const setDrag = () => setIsDragging(true);
    const setNoDrag = () => setIsDragging(false);
    const onMouseMove = moveWindowRelative
        ? (e: MouseEvent) => {
              if (isDragging) {
                  const x = e.movementX;
                  const y = e.movementY;
                  console.log(x, y);
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
        >
            <Heading
                size="sm"
                fontSize="sm"
                fontWeight="normal"
                margin={0}
                padding={2}
            >
                {children}
            </Heading>

            <Buttons />
        </Box>
    );
}
