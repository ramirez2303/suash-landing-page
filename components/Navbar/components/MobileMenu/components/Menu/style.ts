"use client";
import styled from "styled-components";

export const MenuContainer = styled.div<{ isopen: boolean }>`
    position: fixed;
    top: 69px;
    left: 0;
    width: 100%;
    max-height: ${({ isopen }) => (!!isopen ? "500px" : "0px")};
    opacity: ${({ isopen }) => (!!isopen ? "1" : "0")};
    transition: all 300ms ease-in-out;
    background-color: rgba(246, 246, 246, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 20px 0px;
    box-sizing: border-box;
    gap: 10px;
    z-index: 100;
    border-bottom: 1px solid #b6b6b6;
    overflow: hidden;

    @media (min-width: 768px) {
        display: none;
    }
`;
