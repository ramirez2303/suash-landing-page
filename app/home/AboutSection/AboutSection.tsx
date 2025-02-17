import React from "react";
import { Flex } from "antd";
import AboutText from "./components/AboutText";
import { AboutSectionWrapper, LogoContainer } from "./style";
import Image from "next/image";
import SLogo from "@/public/assets/s-suash-logo.png";

const AboutSection = () => {
    return (
        <AboutSectionWrapper>
            <Flex
                justify="space-around"
                align="center"
                style={{ maxWidth: "1200px", width: "100%" }}
            >
                <LogoContainer>
                    <Image
                        src={SLogo}
                        alt="Suash Logo"
                        width={180}
                        height={180}
                    />
                </LogoContainer>
                <AboutText />
            </Flex>
        </AboutSectionWrapper>
    );
};

export default AboutSection;
