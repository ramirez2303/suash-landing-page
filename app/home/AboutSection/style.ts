"use client";
import styled from "styled-components";

export const AboutSectionWrapper = styled.section`
    height: 100vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(0deg, gray 0%, rgba(176, 176, 176, 0.5) 50%);
`;

export const LogoContainer = styled.div`
    background-color: #ccc;
    box-sizing: border-box;
    padding: 80px;
    border-radius: 50%;
    transition: 300ms ease-in-out;

    &:hover {
        background-color:rgba(242, 242, 242, 0.7);
        transform: scale(1.1);
    }
`;
