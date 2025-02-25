import React from "react";
import { LuSunMedium, LuMoonStar } from "react-icons/lu";
import { DarkModeToggleContainer } from "./style";

type DarkModeToggleProps = {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
};

const DarkModeToggle = ({
    isDarkMode,
    toggleDarkMode,
}: DarkModeToggleProps) => {
    return (
        <DarkModeToggleContainer
            $isDarkMode={isDarkMode}
            onClick={toggleDarkMode}
        >
            <LuSunMedium
                className="lightModeButton text-black dark:text-[#f2f2f2]"
                cursor="pointer"
            />
            <LuMoonStar
                className="darkModeButton text-black dark:text-[#f2f2f2]"
                cursor="pointer"
            />
        </DarkModeToggleContainer>
    );
};

export default DarkModeToggle;
