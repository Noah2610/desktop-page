import React, { useState } from "react";
import { WindowContainer } from "..";
import { Image } from "@chakra-ui/core";
import FullBox from "../../full-box";

const ZOOM_STEP_PERCENT = 10;

export interface Props {
    src: string;
}

export default function ImageViewer({ src }: Props) {
    const initialWindowSize = {
        w: 512,
        h: 512,
    };
    const [imgWidth, setImgWidth] = useState(initialWindowSize.w);
    const [imgOffset, setImgOffset] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const setDrag = () => setIsDragging(true);
    const setNoDrag = () => setIsDragging(false);

    return (
        <FullBox
            overflow="hidden"
            display="flex"
            justifyContent="center"
            alignItems="center"
            cursor={isDragging ? "grabbing" : "grab"}
            onMouseDown={setDrag}
            onMouseUp={setNoDrag}
            onMouseLeave={setNoDrag}
            onMouseMove={(e) => {
                if (isDragging) {
                    const x = e.movementX;
                    const y = e.movementY;
                    setImgOffset((prev) => ({
                        x: prev.x + x,
                        y: prev.y + y,
                    }));
                }
            }}
            onWheel={(e) => {
                const zoomDir = -Math.sign(e.deltaY);
                setImgWidth((prev) => {
                    const percent = (prev / 100.0) * ZOOM_STEP_PERCENT;
                    const nextZoom = Math.max(prev + percent * zoomDir, 0);
                    return nextZoom;
                });
            }}
        >
            <Image
                src={src}
                position="absolute"
                objectFit="contain"
                pointerEvents="none"
                width={`${imgWidth}px`}
                marginLeft={`${imgOffset.x}px`}
                marginTop={`${imgOffset.y}px`}
            />
        </FullBox>
    );
}
