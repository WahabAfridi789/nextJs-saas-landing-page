"use client"
import React from 'react'
import CountUp from "react-countup";

export const PriceCount = ({ start, end, duration, useEasing, preserveValue }: { start: number, end: number, duration: number, useEasing: boolean, preserveValue: boolean }) => {
    return (
        <CountUp
            start={start}
            end={end}
            duration={duration}
            useEasing={useEasing}
            preserveValue={preserveValue}
        />
    )
}

