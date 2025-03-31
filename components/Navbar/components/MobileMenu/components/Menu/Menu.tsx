import React from "react";
import { MenuContainer } from "./style";
import { navbarSections } from "@/lib/data";
import Link from "next/link";
import Text from "@/components/ui/Text";

type MenuProps = {
    isopen: boolean;
    onClick: () => void;
};

const Menu = ({ isopen, onClick }: MenuProps) => {
    return (
        <MenuContainer isopen={isopen} onClick={onClick}>
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
