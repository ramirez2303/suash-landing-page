"use client";
import { motion } from "motion/react";
import styled from "styled-components";

export const BgContainer = styled.div`
    width: 100%;
    height: 100%;
    transform: rotate(180deg);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`;

export const ServicesWrapper = styled.section`
    /* height: 100vh; */

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    box-sizing: border-box;
    padding-top: 150px;
    gap: 70px;

    position: relative;

    @media (max-width: 1500px) {
        padding-top: 80px;
        gap: 40px;
    }
`;

export const ServicesCardContainer = styled(motion.div)`
    max-width: 1200px;
    width: 100%;

    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(2, minmax(400px, 1fr));
    gap: 20px;
    row-gap: 60px;

    margin: 0 auto;

    @media (max-width: 1500px) {
        gap: 0px;
        row-gap: 40px;
    }
`;
