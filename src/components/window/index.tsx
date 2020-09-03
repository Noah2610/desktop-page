import React from "react";
import WindowContainer, {
    WindowContainerProps as WindowContainerPropsImport,
} from "./window-container";

export type WindowId = number;
export type WindowProps = {
    windowId: WindowId;
    position: { x: number; y: number };
    size: { w: number; h: number };
};
export type WindowComponent = React.FC<WindowProps>;
export type WindowContainerProps = WindowContainerPropsImport;

export { WindowContainer };
