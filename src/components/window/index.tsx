import React from "react";
import WindowContainer, {
    WindowContainerProps as WindowContainerPropsImport,
} from "./window-container";

export type WindowId = number;
export type WindowProps = { windowId: WindowId } & WindowContainerProps;
export type WindowComponent = React.FC;
export type WindowContainerProps = WindowContainerPropsImport;

export { WindowContainer };
