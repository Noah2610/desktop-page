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
    addWindow: (data: WindowData) => void;
    rmWindow: (id: WindowId) => void;
}

const defaultWindowContextData: WindowContextData = {
    active: null,
    windows: [],
    registerWindow: () => -1,
    setActive: () => {},
    addWindow: () => {},
    rmWindow: () => {},
};
const WindowContext = React.createContext<WindowContextData>(
    defaultWindowContextData
);

export const WindowContextConsumer = WindowContext.Consumer;

export function WindowContextProvider(props: { children: React.ReactNode }) {
    const nextWindowIdRef = useRef(-1);
    const [activeWindowId, setActiveWindowId] = useState<WindowId | null>(null);
    const [windows, setWindows] = useState<WindowData[]>([]);
    const addWindow = (window: WindowData) =>
        setWindows((prev) => [...prev, window]);
    const rmWindow = (id: WindowId) =>
        setWindows((prev) => prev.filter((w) => w.windowId !== id));
    const registerWindow = () => ++nextWindowIdRef.current;

    const windowContext: WindowContextData = {
        active: activeWindowId,
        windows,
        registerWindow,
        setActive: setActiveWindowId,
        addWindow,
        rmWindow,
    };

    return <WindowContext.Provider value={windowContext} {...props} />;
}

export default WindowContext;
