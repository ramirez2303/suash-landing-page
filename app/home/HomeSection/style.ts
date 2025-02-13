"use client";

import { motion } from "motion/react";
import styled from "styled-components";

export const HomeWrapper = styled(motion.div)`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const HomeContainer = styled(motion.div)`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
`;

export const AnimatedTextContainer = styled(motion.div)`
    position: absolute;
    z-index: 1;
    top: 15px;
`;
