import React from "react";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { AnimatedArrow, ArrowContainer } from "./style";
import Link from "next/link";

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
                delay: 6,
            },
        },
    };

    const handleScroll = (
        event: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        event.preventDefault();

        const sectionId = href.replace("/", "");
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <ArrowContainer
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <Link
                href="/services"
                onClick={(e) => handleScroll(e, "/services")}
            >
                <AnimatedArrow animate="animation" variants={arrowVariants}>
                    <RiArrowDownDoubleLine
                        className="text-black dark:text-[#f2f2f2]"
                        fontSize="80px"
                    />
                </AnimatedArrow>
            </Link>
        </ArrowContainer>
    );
};

export default HomeArrow;
