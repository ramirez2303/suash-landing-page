"use client";
import styled from "styled-components";

export const InfoCardContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 300px;
    height: 300px;
    border: 1px solid black;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 10px;
    transition: all 0.3s;
    backdrop-filter: blur(5px);
    box-shadow: rgba(50, 50, 93, 0.1) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.1) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.05) 0px -2px 6px 0px inset;
    &:hover {
        transform: translateY(-10px);
    }
`;
