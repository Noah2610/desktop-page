import React from "react";
import { Box } from "@chakra-ui/core";

export type Props = {
    isActive: boolean;
    onClick?: () => void;
};

export default function OpenWindowBlock({ isActive, onClick }: Props) {
    const props = isActive
        ? {
              boxShadow: "inset 0px 0px 4px 2px",
          }
        : {};
    return (
        <Box
            display="block"
            size="22px"
            cursor="pointer"
            onClick={onClick}
            {...props}
        />
    );
}
