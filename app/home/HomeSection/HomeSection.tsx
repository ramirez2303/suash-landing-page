"use client";
import { useEffect, useState } from "react";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { HomeContainer, HomeWrapper } from "./style";
import HomeText from "./components/HomeText";
import HomeArrow from "./components/HomeArrow";

const HomeSection = () => {
    const [showNextLevel, setShowNextLevel] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowNextLevel(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { duration: 1 },
        },
    };

    return (
        <HomeWrapper
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            id="home"
        >
            <HomeContainer
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <HomeText showNextLevel={showNextLevel} />
            </HomeContainer>
            {!showNextLevel && <HomeArrow />}

            <RetroGrid opacity={0.4} angle={showNextLevel ? 65 : 0} />
        </HomeWrapper>
    );
};

export default HomeSection;
