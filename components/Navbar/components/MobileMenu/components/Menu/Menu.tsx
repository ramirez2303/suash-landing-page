import React from "react";
import { MenuContainer } from "./style";
import { navbarSections } from "@/lib/data";
import Link from "next/link";
import Text from "@/components/ui/Text";

type MenuProps = {
    isOpen: boolean;
    onClick: () => void;
};

const Menu = ({ isOpen, onClick }: MenuProps) => {
    return (
        <MenuContainer $isOpen={isOpen} onClick={onClick}>
            {navbarSections.map((data, ix) => (
                <Link
                    href={data.href}
                    key={`${data.label.toLowerCase()}-${ix}`}
                >
                    <Text
                        fontSize="14px"
                        fontWeight="600"
                        className="border-solid border-b-[2px] border-transparent hover:border-black dark:hover:border-white transition-all duration-300"
                    >
                        {data.label}
                    </Text>
                </Link>
            ))}
        </MenuContainer>
    );
};

export default Menu;
