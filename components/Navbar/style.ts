"use client";
import { Flex } from "antd";
import { motion } from "motion/react";
import styled from "styled-components";

export const NavbarWrapper = styled(motion.nav)`
    width: 100%;
    position: fixed;
    z-index: 1000;
    top: 20px;
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 1rem 3rem;
    margin: 0 auto;

    backdrop-filter: blur(5px);

    @media (max-width: 850px) {
        padding: 1rem 2rem 1rem 3rem;
    }
`;

export const NavbarActions = styled(Flex)`
    gap: 16px;

    .contactButton {
        min-width: 20px;
        min-height: 20px;
    }
    .lightModeButton {
        min-width: 24px;
        min-height: 24px;
    }
    .darkModeButton {
        min-width: 20px;
        min-height: 20px;
    }

    @media (max-width: 850px) {
        max-width: 32px;
        overflow: visible;
        gap: 10px;

        .contactButton {
            min-width: 24px;
            min-height: 24px;
        }
        .lightModeButton {
            min-width: 26px;
            min-height: 26px;
        }
        .darkModeButton {
            min-width: 24px;
            min-height: 24px;
        }
    }
`;
