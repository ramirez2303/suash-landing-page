"use client";
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

export const LogoContainer = styled(motion.div)`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 80px;
    transition: 300ms ease-in-out;
    position: relative;

    .aboutImage1 {
        position: absolute;
        bottom: -50px;
        left: 25px;
        z-index: 1;
    }

    .aboutImage2 {
        position: absolute;
        top: -50px;
        right: 25px;
        z-index: 0;
    }
`;

export const AnimatedContainer = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: relative;
`;
