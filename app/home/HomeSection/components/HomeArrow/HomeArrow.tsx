import React from "react";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { AnimatedArrow, ArrowContainer } from "./style";

const HomeArrow = () => {
    const containerVariants = {
        hidden: {
            opacity: 0,
            y: -50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, delay: 1.5 },
        },
    };
    const arrowVariants = {
        animation: {
            y: [0, 5, 10, 5, 0, 5, 10, 5, 0],
            transition: {
                repeat: Infinity,
                repeatDelay: 7,
                duration: 1,
                delay: 4,
            },
        },
    };
    return (
        <ArrowContainer
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <AnimatedArrow animate="animation" variants={arrowVariants}>
                <RiArrowDownDoubleLine
                    className="text-black dark:text-[#f2f2f2]"
                    fontSize="80px"
                />
            </AnimatedArrow>
        </ArrowContainer>
    );
};

export default HomeArrow;
