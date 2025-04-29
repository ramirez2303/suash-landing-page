"use client";
import { motion } from "motion/react";
import styled from "styled-components";

export const AnimatedContainer = styled(motion.div)`
    display: grid;
    gap: 40px;

    grid-template-columns: repeat(3, minmax(100px, 1fr));

    @media (max-width: 1040px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
`;
