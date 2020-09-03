import WindowContext from "../contexts/window-context";
import React, { useContext } from "react";
import {
    WindowComponent,
    WindowContainer,
    WindowContainerProps,
} from "../components/window";

export interface WindowsData {
    addWindow: (
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
        addWindow: (
            Component: WindowComponent,
            containerProps: WindowContainerProps
        ) => {
            const windowId = windowContext.registerWindow();
            windowContext.addWindow({
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
                    >
                        <Component />
                    </WindowContainer>
                )
            ),
    };

    return windowsData;
}
