import React from "react";
import { NavbarSectionsContainer } from "./style";
import Link from "next/link";
import Text from "@/components/ui/Text";
import { navbarSections } from "@/lib/data";

const NavbarSections = () => {
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
        <NavbarSectionsContainer
            justify="center"
            gap="large"
            className="col-span-1"
        >
            {navbarSections.map((data, ix) => (
                <Link
                    href={data.href}
                    key={`${data.label.toLowerCase()}-${ix}`}
                    onClick={(e) => handleScroll(e, data.href)}
                >
                    <Text
                        fontSize="20px"
                        fontWeight="600"
                        className="border-solid border-b-[2px] border-transparent hover:border-black dark:hover:border-white transition-all duration-300"
                        noWrap
                    >
                        {data.label}
                    </Text>
                </Link>
            ))}
        </NavbarSectionsContainer>
    );
};

export default NavbarSections;
