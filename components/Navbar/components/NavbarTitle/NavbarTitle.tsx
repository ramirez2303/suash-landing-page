import Title from "@/components/ui/Title";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SuashLogo from "@/public/assets/s-suash-logo.png";
import { NavbarTitleContainer } from "./style";

const NavbarTitle = () => {
    const handleScroll = (
        event: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        event.preventDefault();

        const sectionId = href.replace("/", "");
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <NavbarTitleContainer className="col-span-1">
            <Link href="/" onClick={(e) => handleScroll(e, "/home")}>
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
