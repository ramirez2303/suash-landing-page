"use client";
import React, { useState } from "react";
import AnimatedMenuIcon from "./components/AnimatedMenuIcon";

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    return <AnimatedMenuIcon isOpen={isOpen} onClick={toggleMenu} />;
};

export default MobileMenu;
