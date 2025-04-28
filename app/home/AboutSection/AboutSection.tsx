import React from "react";
import AboutText from "./components/AboutText";
import {
    AboutContainer,
    AboutSectionWrapper,
    AnimatedContainer,
} from "./style";
import AboutImage from "./components/AboutImage";

const AboutSection = () => {
    return (
        <AboutSectionWrapper id="about" className="bg-[linear-gradient(0deg,_rgba(176,176,176,0.5)_0%,_#fff_50%)] dark:bg-[linear-gradient(0deg,_rgba(0,0,0,0.5)_0%,_#21252cd0_50%)]">
            <AboutContainer flex={1} justify="space-between" align="center">
                <AnimatedContainer
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        delay: 0.2,
                        ease: "easeInOut",
                    }}
                >
                    <AboutImage />
                </AnimatedContainer>
                <AnimatedContainer
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        delay: 0.2,
                        ease: "easeInOut",
                    }}
                >
                    <AboutText />
                </AnimatedContainer>
            </AboutContainer>
        </AboutSectionWrapper>
    );
};

export default AboutSection;
