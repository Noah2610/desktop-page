import { Box, Icon, Image } from "@chakra-ui/core";
import React from "react";

export interface Props {
    isActive: boolean;
    onClick?: () => void;
    img?: string;
}

export default function OpenWindowBlock({ isActive, onClick, img }: Props) {
    const props = isActive
        ? {
              boxShadow: "inset 0px 0px 4px 2px",
          }
        : {};
    return (
        <Box
            position="relative"
            display="block"
            size="22px"
            cursor="pointer"
            onClick={onClick}
            {...props}
        >
            {img ? (
                <Image src={img} size="100%" />
            ) : (
                <Icon name="question-outline" size="100%" />
            )}
        </Box>
    );
}
