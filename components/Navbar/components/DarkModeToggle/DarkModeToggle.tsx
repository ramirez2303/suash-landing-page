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
                className="text-black dark:text-[#f2f2f2]"
                cursor="pointer"
                style={{
                    minWidth: "24px",
                    minHeight: "24px",
                }}
            />
            <LuMoonStar
                className="text-black dark:text-[#f2f2f2]"
                cursor="pointer"
                style={{
                    minWidth: "20px",
                    minHeight: "20px",
                }}
            />
        </DarkModeToggleContainer>
    );
};

export default DarkModeToggle;
