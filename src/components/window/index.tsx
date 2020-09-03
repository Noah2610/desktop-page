import React from "react";
import WindowContainer, {
    WindowContainerProps as WindowContainerPropsImport,
} from "./window-container";

export type WindowId = number;
export interface WindowProps {
    windowId: WindowId;
    position: { x: number; y: number };
    size: { w: number; h: number };
}
export type WindowComponent<P = {}> = React.FC<WindowProps & P> & {
    icon?: string;
};
export type WindowContainerProps = WindowContainerPropsImport;

export { WindowContainer };
