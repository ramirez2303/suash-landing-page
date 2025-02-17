import React, { Fragment } from "react";
import Title from "@/components/ui/Title";
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
                className="dark:brightness-[0] dark:invert-[1]"
            />
            <AnimatePresence>
                {showNextLevel && (
                    <AnimatedTextContainer
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={textVariants}
                    >
                        <Title level={2} fontSize="38px" fontWeight="300">
                            Next Level
                        </Title>
                    </AnimatedTextContainer>
                )}
            </AnimatePresence>
        </Fragment>
    );
};

export default HomeText;
