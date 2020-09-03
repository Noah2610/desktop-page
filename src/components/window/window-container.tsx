import { Box } from "@chakra-ui/core";
import React, { useState } from "react";
import TitleBar from "./title-bar";

export interface Props {
    title: string;
    children: React.ReactNode;
}

export default function WindowContainer({ title, children }: Props) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const moveWindowRelative = (x: number, y: number) =>
        setPosition((prev) => ({
            x: prev.x + x,
            y: prev.y + y,
        }));

    return (
        <Box
            position="absolute"
            top={`${position.y}px`}
            left={`${position.x}px`}
            outline="1px solid"
            color="windowBorder"
            width="640px"
            height="360px"
        >
            <TitleBar moveWindowRelative={moveWindowRelative}>{title}</TitleBar>
            <Box padding={2} color="text">
                {children}
            </Box>
        </Box>
    );
}
