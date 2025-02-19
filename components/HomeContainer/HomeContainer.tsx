"use client";
import React from "react";
import { motion } from "motion/react";

type HomeContainerProps = Readonly<{
    children: React.ReactNode;
}>;

const HomeContainer = ({ children }: HomeContainerProps) => {
    const homeVariants = {
        hidden: {
            display: "none",
        },
        visible: {
            display: "block",
            transition: { delay: 0 },
        },
    };

    return (
        <motion.div initial="hidden" animate="visible" variants={homeVariants}>
            {children}
        </motion.div>
    );
};

export default HomeContainer;
