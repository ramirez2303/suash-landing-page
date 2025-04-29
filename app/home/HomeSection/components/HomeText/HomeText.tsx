import React, { Fragment } from "react";
import { AnimatePresence } from "motion/react";
import { AnimatedTextContainer } from "../../style";
import suashLogo from "@/public/assets/suash-logo.png";
import Image from "next/image";

type HomeTextProps = {
    showNextLevel: boolean;
};

const HomeText = ({ showNextLevel }: HomeTextProps) => {
    const textVariants = {
        hidden: {
            opacity: 0,
            y: -25,
            x: -10,
        },
        visible: {
            opacity: 1,
            y: -5,
            x: -10,
            transition: { duration: 0.3, delay: 1 },
        },
        exit: { opacity: 0, x: -10, transition: { duration: 0.5, delay: 0 } },
    };
    return (
        <Fragment>
            <Image
                src={suashLogo}
                alt="Suash Logo"
                width={550}
                className="dark:brightness-[0] dark:invert-[1] w-[550px] max-[850px]:w-[400px] max-[500px]:w-[300px]"
            />
            <AnimatePresence>
                {showNextLevel && (
                    <AnimatedTextContainer
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={textVariants}
                    >
                        <h2 className="font-[discgent] text-black dark:text-[#f2f2f2] max-[850px]:text-[24px] max-[850px]:pt-1 max-[500px]:text-[18px] text-[38px] font-[300]">
                            Next Level
                        </h2>
                    </AnimatedTextContainer>
                )}
            </AnimatePresence>
        </Fragment>
    );
};

export default HomeText;
