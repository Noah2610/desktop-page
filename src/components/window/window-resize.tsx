import { Box, Icon } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";

export interface Props {
    resizeWindowRelative: (w: number, h: number) => void;
}

export default function WindowResize({ resizeWindowRelative }: Props) {
    const [isDragging, setIsDragging] = useState(false);
    const setDrag = () => setIsDragging(true);
    const setNoDrag = () => setIsDragging(false);
    const onMouseMove = resizeWindowRelative
        ? (e: MouseEvent) => {
              if (isDragging) {
                  const x = e.movementX;
                  const y = e.movementY;
                  resizeWindowRelative(x, y);
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
            position="absolute"
            bottom="0"
            right="0"
            cursor="nwse-resize"
            onMouseDown={setDrag}
        >
            <Icon name="add" />
        </Box>
    );
}
