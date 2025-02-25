"use client";
import { Flex } from "antd";
import { motion } from "motion/react";
import styled from "styled-components";

export const AboutSectionWrapper = styled.section`
    height: 100vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(0deg, rgba(176, 176, 176, 0.5) 0%, #fff 50%);
`;

export const AnimatedContainer = styled(motion.div)`
    width: 35vw;
    height: 100%;
    position: relative;

    @media (max-width: 1100px) {
        width: auto;
    }
`;

export const AboutContainer = styled(Flex)`
    max-width: 80%;

    @media (max-width: 1100px) {
        max-width: auto;
        flex-direction: column-reverse;
    }
`;
