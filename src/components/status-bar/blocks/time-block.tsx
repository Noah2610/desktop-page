import React, { useEffect, useState } from "react";
import { Block } from ".";

export default function TimeBlock() {
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
