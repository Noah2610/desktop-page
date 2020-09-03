import { useContext, useState, useEffect } from "react";
import ActiveWindowContext from "../contexts/active-window";
import { WindowId } from "../components/window";

export interface WindowData {
    windowId: WindowId;
    isActive: boolean;
    setActive: () => void;
}

/**
 * Every window should use this hook.
 * This hook sets up a unique window ID for this window,
 * and also sets the appropriate window to active.
 * Returns the unique window ID for this window.
 */
export default function useWindow(): WindowData {
    const activeWindowContext = useContext(ActiveWindowContext);
    const [windowData, setWindowData] = useState<WindowData>({
        windowId: -1,
        isActive: false,
        setActive: () => {},
    });

    useEffect(() => {
        const windowId =
            windowData.windowId === -1
                ? activeWindowContext.registerWindow()
                : windowData.windowId;
        const isActive = activeWindowContext.active === windowId;
        const setActive = isActive
            ? () => {}
            : () => activeWindowContext.setActive(windowId);
        setWindowData({
            windowId,
            isActive,
            setActive,
        });
    }, [activeWindowContext]);

    return windowData;
}
