import React, { useState, useRef } from "react";
import { WindowProps } from "..";
import FullBox from "../../full-box";
import { Textarea } from "@chakra-ui/core";

export type Props = {} & WindowProps;

export default function Notepad({ size }: Props) {
    return (
        <FullBox>
            <Textarea
                width="100%"
                height="100%"
                boxSizing="border-box"
                padding={4}
                margin={0}
                resize="none"
                backgroundColor="bg"
                color="text"
            ></Textarea>
        </FullBox>
    );
}
