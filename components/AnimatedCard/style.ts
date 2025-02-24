import styled from "styled-components";

export const AnimatedCardContainer = styled.div`
    width: 400px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-radius: 18px;
    position: relative;

    .image {
        box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px,
            rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px,
            rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px,
            rgba(0, 0, 0, 0.07) 0px 32px 64px;
        border-radius: 18px;
        transition: 300ms ease-in-out, filter 500ms ease-in-out;
    }

    &:hover {
        .image {
            filter: brightness(0.7);
            transform: perspective(900px) translateY(-5%) rotateX(25deg)
                translateZ(0);
            box-shadow: rgba(0, 0, 0, 0.2) 0px 19px 38px,
                rgba(0, 0, 0, 0.12) 0px 15px 12px;
        }
    }
`;

export const TextCardContainer = styled.div`
    width: 400px;
    height: 250px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: -20%;
    opacity: 0;

    transition: 500ms ease-in-out;
    pointer-events: none;

    img {
        min-width: 120px;
        min-height: 120px;
        border-radius: 50%;
        background-color: #fff;
        box-sizing: border-box;
        padding: 10px;
    }

    ${AnimatedCardContainer}:hover & {
        opacity: 1;
        bottom: 5%;
    }
`;
