import React from "react";
import { NavbarActions, NavbarContainer, NavbarWrapper } from "./style";
import DarkModeToggle from "./components/DarkModeToggle";
import ContactButton from "./components/ContactButton";
import NavbarSections from "./components/NavbarSections";
import NavbarTitle from "./components/NavbarTitle";
import MobileMenu from "./components/MobileMenu";

type NavbarProps = {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
};

const Navbar = ({ isDarkMode, toggleDarkMode }: NavbarProps) => {
    const variants = {
        hidden: { opacity: 0, top: -20 },
        visible: {
            opacity: 1,
            top: 0,
            transition: { duration: 0.3, delay: 6 },
        },
    };

    return (
        <NavbarWrapper animate="visible" initial="hidden" variants={variants}>
            <NavbarContainer className="bg-[#f2f2f27f] dark:bg-[#1f1f1f7f] border border-[#b6b6b67f] dark:border-[#4a4a4a7f]">
                <MobileMenu />
                <NavbarTitle />

                <NavbarSections />

                <NavbarActions justify="flex-end" align="center">
                    <ContactButton />
                    <DarkModeToggle
                        isDarkMode={isDarkMode}
                        toggleDarkMode={toggleDarkMode}
                    />
                </NavbarActions>
            </NavbarContainer>
        </NavbarWrapper>
    );
};

export default Navbar;
