import React from "react";
import { LuSunMedium, LuMoonStar } from "react-icons/lu";
import { DarkModeToggleContainer } from "./style";

const DarkModeToggle = () => {
    return (
        <DarkModeToggleContainer>
            <LuSunMedium />
            <LuMoonStar />
        </DarkModeToggleContainer>
    );
};

export default DarkModeToggle;
