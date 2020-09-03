import React, { useState, useRef } from "react";
import {
    WindowId,
    WindowComponent,
    WindowContainerProps,
} from "../../components/window";

export interface WindowData {
    windowId: WindowId;
    Component: WindowComponent;
    containerProps: WindowContainerProps;
}

export interface WindowContextData {
    active: WindowId | null;
    windows: WindowData[];
    registerWindow: () => WindowId;
    setActive: (id: WindowId) => void;
    openWindow: (data: WindowData) => void;
    closeWindow: (id: WindowId) => void;
}

const defaultWindowContextData: WindowContextData = {
    active: null,
    windows: [],
    registerWindow: () => -1,
    setActive: () => {},
    openWindow: () => {},
    closeWindow: () => {},
};
const WindowContext = React.createContext<WindowContextData>(
    defaultWindowContextData
);

export const WindowContextConsumer = WindowContext.Consumer;

export function WindowContextProvider(props: { children: React.ReactNode }) {
    const nextWindowIdRef = useRef(-1);
    const [activeWindowId, setActiveWindowId] = useState<WindowId | null>(null);
    const [windows, setWindows] = useState<WindowData[]>([]);
    const openWindow = (window: WindowData) => {
        setWindows((prev) => [...prev, window]);
        setActiveWindowId(window.windowId);
    };
    const closeWindow = (id: WindowId) => {
        setWindows((prev) => prev.filter((w) => w.windowId !== id));
        const nextActiveWindow = windows.reduce(
            (highest, w) =>
                w.windowId !== id && w.windowId > highest
                    ? w.windowId
                    : highest,
            -1
        );
        setActiveWindowId(nextActiveWindow);
    };
    const registerWindow = () => ++nextWindowIdRef.current;

    const windowContext: WindowContextData = {
        active: activeWindowId,
        windows,
        registerWindow,
        setActive: setActiveWindowId,
        openWindow,
        closeWindow,
    };

    return <WindowContext.Provider value={windowContext} {...props} />;
}

export default WindowContext;
