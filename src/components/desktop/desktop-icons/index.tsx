import React from "react";
import FullBox from "../../full-box";
import { Box, Image, Text, PseudoBox } from "@chakra-ui/core";
import useWindows from "../../../hooks/use-windows";
import ImageViewer from "../../windows/image-viewer";

export interface Props {}

export default function DesktopIcons(props: Props) {
    const PP_SRC =
        "https://www.gravatar.com/avatar/47480af5a86bc65864862f6b00d3d5d7";

    const windowsApi = useWindows();

    return (
        <FullBox padding={4}>
            <Box display="flex" flexWrap="wrap">
                <DesktopIconContainer
                    label="PP"
                    img={PP_SRC}
                    onClick={() =>
                        windowsApi.openWindow(
                            (props) => <ImageViewer src={PP_SRC} {...props} />,
                            {
                                title: "PP - ImageViewer",
                                initialSize: { w: 256, h: 256 },
                            }
                        )
                    }
                />
            </Box>
        </FullBox>
    );
}

interface DesktopIconContainerProps {
    label: string;
    img: string;
    onClick?: () => void;
}

function DesktopIconContainer({
    label,
    img,
    onClick,
}: DesktopIconContainerProps) {
    return (
        <Box
            display="block"
            position="relative"
            width="desktopIcon"
            height="auto"
            margin={2}
            padding={0}
            cursor="pointer"
            onClick={onClick}
        >
            <PseudoBox
                _hover={{
                    textShadow: "1px 1px 2px",
                    boxShadow: "2px 2px 6px 0px black",
                    fontWeight: "bold",
                }}
            >
                <Image
                    width="100%"
                    height="70%"
                    src={img}
                    objectFit="contain"
                />
                <Text
                    margin={0}
                    padding={0}
                    height="20%"
                    textAlign="center"
                    fontSize="12px"
                >
                    {label}
                </Text>
            </PseudoBox>
        </Box>
    );
}