import React from "react";
import { Flex } from "antd";
import AboutText from "./components/AboutText";
import { AboutSectionWrapper } from "./style";

const AboutSection = () => {
    return (
        <AboutSectionWrapper>
            <Flex
                justify="space-around"
                align="center"
                style={{ maxWidth: "1200px", width: "100%" }}
            >
                <div
                    style={{
                        width: "500px",
                        height: "500px",
                        backgroundColor: "gray",
                    }}
                />
                <AboutText />
            </Flex>
        </AboutSectionWrapper>
    );
};

export default AboutSection;
