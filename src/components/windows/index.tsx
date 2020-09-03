import { WindowProps as WindowPropsImport, WindowComponent } from "../window";
import ImageViewer from "./image-viewer";
import Notepad from "./notepad";

export type WindowProps = WindowPropsImport;

const windows = {
    ImageViewer,
    Notepad,
};

export default windows;
