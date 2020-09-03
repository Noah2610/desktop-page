import React from "react";
import { Block } from ".";

export default function DateBlock() {
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
