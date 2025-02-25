import styled from "styled-components";

export const DarkModeToggleContainer = styled.div<{
    $isDarkMode: boolean;
}>`
    height: 24px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    gap: 20px;
    overflow: hidden;
    cursor: pointer;

    svg {
        transition: 200ms ease-in-out;
        position: relative;
        bottom: ${({ $isDarkMode: isDarkMode }) => (isDarkMode ? "42px" : "0")};
    }

    @media (max-width: 850px) {
        gap: 18px;

        svg {
            bottom: ${({ $isDarkMode: isDarkMode }) =>
                isDarkMode ? "44px" : "1px"};
        }
    }
`;
