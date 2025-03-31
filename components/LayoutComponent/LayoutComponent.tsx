"use client";

import React, { Fragment, ReactNode, useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import Navbar from "../Navbar";

type LayoutComponentProps = {
    children: ReactNode;
};

const LayoutComponent = ({ children }: LayoutComponentProps) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setTimeout(() => setIsDarkMode((prev) => !prev), 100);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark", "bg-black");
            document.body.classList.remove("bg-white");
        } else {
            document.body.classList.add("bg-white");
            document.body.classList.remove("dark", "bg-black");
        }
    }, [isDarkMode]);

    return (
        <Fragment>
            <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <AnimatePresence>{children}</AnimatePresence>
        </Fragment>
    );
};

export default LayoutComponent;
