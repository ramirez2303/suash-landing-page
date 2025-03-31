"use client";
import { Fragment, useState } from "react";
import AnimatedMenuIcon from "./components/AnimatedMenuIcon";
import Menu from "./components/Menu";

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    return (
        <Fragment>
            <AnimatedMenuIcon isOpen={isOpen} onClick={toggleMenu} />
            <Menu isOpen={isOpen} onClick={toggleMenu} />
        </Fragment>
    );
};

export default MobileMenu;
