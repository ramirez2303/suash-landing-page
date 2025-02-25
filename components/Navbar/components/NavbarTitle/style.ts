import styled from "styled-components";

export const NavbarTitleContainer = styled.div`
    .navbarLogo {
        display: none;
    }

    @media (max-width: 850px) {
        .navbarLogo {
            display: block;
        }
        .navbarTitle {
            display: none;
        }
    }
`;
