import styled from "styled-components";

export const AboutSectionWrapper = styled.section`
    height: 100vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(0deg, rgba(176, 176, 176, 0.5) 0%, #fff 50%);
`;

export const LogoContainer = styled.div`
    background-color: rgba(204, 204, 204, 0.5);
    box-sizing: border-box;
    padding: 80px;
    border-radius: 50%;
    transition: 300ms ease-in-out;
    position: relative;
    /* width: 100%;
    height: 100vh; */

    /* img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    } */

    &::before {
        content: "";
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        border: 1px solid rgba(176, 176, 176, 0.8);
        border-radius: 50%;
        transition: 50ms ease-in-out;
    }

    &:hover {
        background-color: rgba(242, 242, 242, 0.7);
        transform: scale(1.1);

        &::before {
            content: "";
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            border: 2px dashed rgba(176, 176, 176, 0.8);
            border-radius: 50%;
            animation: rotateBorder 40s linear infinite;
        }

        @keyframes rotateBorder {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    }
`;
