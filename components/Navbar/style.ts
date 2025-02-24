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

    /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
`;
