import React, { useState, useRef } from "react";
import { WindowId } from "../../components/window";

export interface ActiveWindowContextData {
    active: WindowId | null;
    registerWindow: () => WindowId;
    setActive: (id: WindowId) => void;
}

const defaultActiveWindowContextData: ActiveWindowContextData = {
    active: null,
    registerWindow: () => -1,
    setActive: () => {},
};
const ActiveWindowContext = React.createContext<ActiveWindowContextData>(
    defaultActiveWindowContextData
);

// export const ActiveWindowProvider = ActiveWindowContext.Provider;
export const ActiveWindowConsumer = ActiveWindowContext.Consumer;

export function ActiveWindowProvider(props: { children: React.ReactNode }) {
    const nextWindowIdRef = useRef(-1);
    const [activeWindowId, setActiveWindowId] = useState<WindowId | null>(null);

    const activeWindowContext = {
        active: activeWindowId,
        registerWindow: () => ++nextWindowIdRef.current,
        setActive: (id: number) => setActiveWindowId(id),
    };

    return (
        <ActiveWindowContext.Provider value={activeWindowContext} {...props} />
    );
}

export default ActiveWindowContext;
