"use client";

import styled from "styled-components";

export const LogoContainer = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 80px;
    transition: 300ms ease-in-out;
    position: relative;

    .aboutImage1 {
        position: absolute;
        bottom: -30%;
        left: 10%;
        z-index: 1;
    }

    .aboutImage2 {
        position: absolute;
        top: -30%;
        right: 10%;
        z-index: 0;
    }

    @media (max-width: 1600px) {
        .aboutImage1 {
            bottom: -30%;
            left: 2%;
        }

        .aboutImage2 {
            top: -30%;
            right: 2%;
        }
    }

    @media (max-width: 1300px) {
        .aboutImage1 {
            bottom: -30%;
            left: -5%;
        }

        .aboutImage2 {
            top: -30%;
            right: -5%;
        }
    }

    @media (max-width: 1100px) {
        padding: 0px;
        .aboutImage1 {
            position: relative;
            bottom: -30%;
            left: -20%;
        }

        .aboutImage2 {
            position: absolute;
            top: 30%;
            right: -20%;
        }
    }
`;
