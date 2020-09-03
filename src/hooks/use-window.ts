import { useContext, useState, useEffect } from "react";
import WindowContext from "../contexts/window-context";
import { WindowId } from "../components/window";

export interface WindowState {
    isWindowActive: boolean;
    setWindowActive: () => void;
    closeWindow: () => void;
}

/**
 * Returns the window data for the given `WindowId`.
 * Data includes window active state or API like `closeWindow`.
 */
export default function useWindow(windowId: WindowId): WindowState {
    const windowContext = useContext(WindowContext);
    const [windowData, setWindowData] = useState<WindowState>({
        isWindowActive: false,
        setWindowActive: () => {},
        closeWindow: () => {},
    });

    useEffect(() => {
        const isWindowActive = windowContext.active === windowId;
        const setWindowActive = isWindowActive
            ? () => {}
            : () => windowContext.setActive(windowId);
        const closeWindow = () => windowContext.closeWindow(windowId);
        setWindowData({
            isWindowActive,
            setWindowActive,
            closeWindow,
        });
    }, [windowContext]);

    return windowData;
}
