'use client'
import React from 'react'
import { Link as LinkScroll } from 'react-scroll'

export const ScrollToLink = ({ to, offset, spy = false, smooth = true, children }: { to: string, offset: number, spy: boolean, smooth: boolean, children: React.ReactNode }) => {
    return (
        <LinkScroll to={to} offset={offset} spy={spy} smooth={smooth}>
            {children}
        </LinkScroll>
    )
}

