"use client";
import styled from "styled-components";

export const ContactSectionWrapper = styled.div`
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 60px 0 80px;
    gap: 50px;

    background: linear-gradient(0deg, #fff 0%, rgba(176, 176, 176, 0.5) 80%);

    & > div {
        max-width: 80%;
    }
`;
