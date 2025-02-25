import React from "react";
import { NavbarSectionsContainer } from "./style";
import Link from "next/link";
import Text from "@/components/ui/Text";

type NavbarSectionsProps = {
    data: {
        label: string;
        href: string;
    }[];
};

const NavbarSections = ({ data }: NavbarSectionsProps) => {
    return (
        <NavbarSectionsContainer justify="flex-start" gap="large">
            {data.map((data, ix) => (
                <Link
                    href={data.href}
                    key={`${data.label.toLowerCase()}-${ix}`}
                >
                    <Text
                        fontSize="20px"
                        fontWeight="600"
                        className="border-solid border-b-[2px] border-transparent hover:border-black dark:hover:border-white transition-all duration-300"
                    >
                        {data.label}
                    </Text>
                </Link>
            ))}
        </NavbarSectionsContainer>
    );
};

export default NavbarSections;
