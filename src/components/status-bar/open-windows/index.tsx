import { Flex } from "@chakra-ui/core";
import React from "react";
import useWindows from "../../../hooks/use-windows";
import OpenWindowBlock from "./open-window-block";

export interface Props {}

export default function OpenWindows() {
    const windowsApi = useWindows();

    return (
        <Flex justifyContent="flex-start" alignItems="center">
            {windowsApi.windows.map(({ windowId, Component }) => {
                const isActive = windowsApi.activeWindow === windowId;
                return (
                    <OpenWindowBlock
                        key={windowId}
                        isActive={isActive}
                        img={Component.icon}
                        onClick={
                            isActive
                                ? undefined
                                : () => {
                                      windowsApi.setActive(windowId);
                                  }
                        }
                    />
                );
            })}
        </Flex>
    );
}
