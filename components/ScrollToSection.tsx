'use client'

import React from 'react'
import { Element } from 'react-scroll'

type ScrollToSectionProps = {
    name: string;
    children: React.ReactNode;
    className?: string;
};

export const ScrollToSection: React.FC<ScrollToSectionProps> = ({ name, children, className }) => {
    return (
        <Element name={name} className={className}>
            {children}
        </Element>
    );
};