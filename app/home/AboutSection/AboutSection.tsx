import React from "react";
import { Flex } from "antd";
import AboutText from "./components/AboutText";
import { AboutSectionWrapper, AnimatedContainer, LogoContainer } from "./style";
import Image from "next/image";
import aboutIMG1 from "@/public/assets/about/graphicDesign.svg";
import aboutIMG2 from "@/public/assets/about/graphicIdea.svg";

const AboutSection = () => {
    return (
        <AboutSectionWrapper>
            <Flex
                justify="space-around"
                align="center"
                style={{ width: "80%", gap: "60px" }}
            >
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
                    <LogoContainer>
                        <Image
                            src={aboutIMG1}
                            alt="Suash Logo"
                            className="aboutImage1"
                            width={400}
                            height={400}
                        />
                        <Image
                            src={aboutIMG2}
                            alt="Suash Logo"
                            className="aboutImage2"
                            width={400}
                            height={400}
                        />
                    </LogoContainer>
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
            </Flex>
        </AboutSectionWrapper>
    );
};

export default AboutSection;
