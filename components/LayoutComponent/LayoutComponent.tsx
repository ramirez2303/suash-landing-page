"use client";

import React, { Fragment, ReactNode, useState } from "react";
import { AnimatePresence } from "motion/react";
import Navbar from "../Navbar";
import localFont from "next/font/local";
import { Kanit } from "next/font/google";

const discgent = localFont({
    src: "../../public/fonts/Discgent.ttf",
    variable: "--font-discgent",
});

const kanit = Kanit({
    weight: ["400", "500", "600", "700"],
    style: ["normal"],
    subsets: ["latin"],
});

type LayoutComponentProps = {
    children: ReactNode;
};

const LayoutComponent = ({ children }: LayoutComponentProps) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setTimeout(() => setIsDarkMode((prev) => !prev), 100);
    };
    return (
        <Fragment>
            <AnimatePresence>
                <body
                    className={`${discgent.variable} ${kanit.className} ${
                        isDarkMode && "dark"
                    } ${!isDarkMode ? "bg-white" : "bg-black"}`}
                >
                    <Navbar
                        isDarkMode={isDarkMode}
                        toggleDarkMode={toggleDarkMode}
                    />
                    {children}
                </body>
            </AnimatePresence>
        </Fragment>
    );
};

export default LayoutComponent;