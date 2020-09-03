import WindowContext from "../contexts/window-context";
import React, { useContext } from "react";
import {
    WindowComponent,
    WindowContainer,
    WindowContainerProps,
} from "../components/window";

export interface WindowsData {
    openWindow: (
        Component: WindowComponent,
        props: WindowContainerProps
    ) => void;
    render: () => React.ReactNode;
}

/**
 * Returns an API to manipulate windows (open, close, etc.).
 */
export default function useWindows(): WindowsData {
    const windowContext = useContext(WindowContext);

    const windowsData: WindowsData = {
        openWindow: (
            Component: WindowComponent,
            containerProps: WindowContainerProps
        ) => {
            const windowId = windowContext.registerWindow();
            windowContext.openWindow({
                windowId,
                Component,
                containerProps: { ...containerProps },
            });
        },
        render: () =>
            windowContext.windows.map(
                ({ windowId, Component, containerProps }) => (
                    <WindowContainer
                        key={windowId}
                        windowId={windowId}
                        {...containerProps}
                        window={Component}
                    />
                )
            ),
    };

    return windowsData;
}
