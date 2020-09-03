import React from "react";
import useWindows from "../../../hooks/use-windows";
import { Flex } from "@chakra-ui/core";
import OpenWindowBlock from "./open-window-block";

export type Props = {};

export default function OpenWindows() {
    const windowsApi = useWindows();

    return (
        <Flex justifyContent="flex-start" alignItems="center">
            {windowsApi.windows.map(({ windowId }) => {
                const isActive = windowsApi.activeWindow === windowId;
                return (
                    <OpenWindowBlock
                        key={windowId}
                        isActive={isActive}
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
