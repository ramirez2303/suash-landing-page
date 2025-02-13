import React, { Fragment } from "react";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import Title from "@/components/ui/Title";
import { AnimatePresence } from "motion/react";
import { AnimatedTextContainer } from "../../style";

type HomeTextProps = {
    showNextLevel: boolean;
};

const HomeText = ({ showNextLevel }: HomeTextProps) => {
    const textVariants = {
        hidden: {
            opacity: 0,
            y: -20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, delay: 1 },
        },
        exit: { opacity: 0, transition: { duration: 0.5, delay: 0 } },
    };
    return (
        <Fragment>
            <Title level={1} fontSize="120px" fontWeight="400" isRowdies>
                <LineShadowText shadowColor="black">Suash</LineShadowText>
            </Title>
            <AnimatePresence>
                {showNextLevel && (
                    <AnimatedTextContainer
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={textVariants}
                    >
                        <Title
                            level={2}
                            fontSize="42px"
                            fontWeight="300"
                            isRowdies
                        >
                            Next Level
                        </Title>
                    </AnimatedTextContainer>
                )}
            </AnimatePresence>
        </Fragment>
    );
};

export default HomeText;
