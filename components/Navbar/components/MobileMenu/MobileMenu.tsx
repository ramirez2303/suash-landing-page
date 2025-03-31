"use client";
import { Fragment, useState } from "react";
import AnimatedMenuIcon from "./components/AnimatedMenuIcon";
import Menu from "./components/Menu";

const MobileMenu = () => {
    const [isopen, setIsopen] = useState(false);
    const toggleMenu = () => setIsopen(!isopen);
    return (
        <Fragment>
            <AnimatedMenuIcon isopen={isopen} onClick={toggleMenu} />
            <Menu isopen={isopen} onClick={toggleMenu} />
        </Fragment>
    );
};

export default MobileMenu;
