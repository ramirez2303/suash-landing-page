import Title from "@/components/ui/Title";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SuashLogo from "@/public/assets/s-suash-logo.png";
import { NavbarTitleContainer } from "./style";

const NavbarTitle = () => {
    return (
        <NavbarTitleContainer>
            <Link href="/">
                <Image
                    className="navbarLogo dark:brightness-[0] dark:invert-[1]"
                    src={SuashLogo}
                    alt="Suash Logo"
                    width={35}
                    height={35}
                />
                <Title level={2} fontWeight="400" className="navbarTitle">
                    Suash
                </Title>
            </Link>
        </NavbarTitleContainer>
    );
};

export default NavbarTitle;
