import { Box, BoxProps, Flex } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";

export default function Nav() {
    return (
        <Box position="relative" border="1px solid">
            <Flex justifyContent="flex-end">
                <DateBlock />
                <TimeBlock />
            </Flex>
        </Box>
    );
}

function Block({
    children,
    ...props
}: { children: React.ReactElement } | BoxProps) {
    return (
        <Box
            paddingY={1}
            paddingX={2}
            fontFamily="monospace"
            textAlign="center"
            fontSize="sm"
            {...props}
        >
            {children}
        </Box>
    );
}

function TimeBlock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => setTime(new Date()), 500);
        return () => clearInterval(intervalId);
    }, []);

    const pad = (num: number): string => num.toString().padStart(2, "0");

    const timeStr = [
        pad(time.getHours()),
        pad(time.getMinutes()),
        pad(time.getSeconds()),
    ].join(":");

    return (
        <Block fontWeight="bold" fontSize="md">
            {timeStr}
        </Block>
    );
}

function DateBlock() {
    const date = new Date();

    const pad = (num: number, len = 2): string =>
        num.toString().padStart(len, "0");

    const dateStr =
        weekDayToHuman(date.getDay()) +
        " " +
        [
            pad(date.getDate()),
            pad(date.getMonth() + 1),
            pad(date.getFullYear(), 4),
        ].join(":");

    return <Block fontSize="sm">{dateStr}</Block>;
}

function weekDayToHuman(day: number): string {
    switch (day) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            throw new Error("Day number has to be 0-6.");
    }
}
