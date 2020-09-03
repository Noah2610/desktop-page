import { InputProps, Textarea as ChakraTextarea } from "@chakra-ui/core";
import React, { createRef, forwardRef, useRef } from "react";
import FullBox from "../../full-box";
import { WindowComponent, WindowProps } from "../../window";

export type Props = {} & WindowProps;

const Notepad: WindowComponent = (_: Props) => {
    const textareaRef = useRef<HTMLTextAreaElement>();

    return (
        <FullBox display="flex" justifyContent="flex-start" alignItems="start">
            <TextLineNumbers textareaRef={textareaRef} />
            <Textarea whiteSpace="pre" ref={textareaRef} />
        </FullBox>
    );
};

Notepad.icon =
    "https://images.fineartamerica.com/images-medium-large-5/notepad-icon-bismillahbd.jpg";

export default Notepad;

const Textarea = forwardRef((props: InputProps, ref: any) => (
    <ChakraTextarea
        width="100%"
        height="100%"
        boxSizing="border-box"
        paddingX={4}
        paddingY={4}
        margin={0}
        resize="none"
        backgroundColor="bg"
        color="text"
        ref={ref}
        {...props}
    />
));

function TextLineNumbers({
    textareaRef: sourceRef,
}: {
    textareaRef: React.RefObject<HTMLTextAreaElement | undefined>;
}) {
    const linesRef = createRef<HTMLTextAreaElement>();

    if (sourceRef?.current) {
        sourceRef.current.addEventListener("keyup", (e) => {
            if (linesRef.current) {
                const target:
                    | HTMLTextAreaElement
                    | undefined = e.currentTarget as HTMLTextAreaElement;
                const lines = target?.value.split("\n").length ?? 0;
                linesRef.current.value = new Array(lines)
                    .fill(0)
                    .map((_, i) => i.toString())
                    .join("\n");
            }
        });
        sourceRef.current.addEventListener("scroll", (e) => {
            const target:
                | HTMLTextAreaElement
                | undefined = e.currentTarget as HTMLTextAreaElement;
            if (linesRef.current && target) {
                linesRef.current.scrollTop = target.scrollTop;
            }
        });
    }

    return (
        <Textarea
            width="48px"
            isReadOnly
            overflow="hidden"
            tabIndex={-1}
            paddingX={2}
            ref={linesRef}
        />
    );
}
