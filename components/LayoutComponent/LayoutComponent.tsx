"use client";
import React, { Fragment, useState } from "react";
import { ConfigProvider } from "antd";
import { AnimatePresence } from "motion/react";
import { Rowdies } from "next/font/google";
import Navbar from "../Navbar";

const rowdies = Rowdies({
    weight: ["300", "400", "700"],
    style: "normal",
});

type LayoutComponentProps = {
    children: React.ReactNode;
};

const LayoutComponent = ({ children }: LayoutComponentProps) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => setIsDarkMode((prev) => !prev);
    return (
        <Fragment>
            <ConfigProvider
                theme={{
                    token: {
                        colorText: "",
                    },
                }}
            >
                <AnimatePresence>
                    <body
                        className={`${rowdies.className} ${
                            isDarkMode && "dark"
                        } ${!isDarkMode ? "bg-white" : "bg-black"}`}
                    >
                        <Navbar toggleDarkMode={toggleDarkMode} />
                        {children}
                    </body>
                </AnimatePresence>
            </ConfigProvider>
        </Fragment>
    );
};

export default LayoutComponent;
