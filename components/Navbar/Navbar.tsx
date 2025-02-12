import React from "react";
import { NavbarContainer, NavbarWrapper } from "./style";
import Link from "next/link";
import { Flex } from "antd";
import Title from "@/components/ui/Title";
import Text from "@/components/ui/Text";

const Navbar = () => {
    const data: { label: string; href: string }[] = [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <NavbarWrapper>
            <NavbarContainer>
                <Link href="/">
                    <Title level={2}>Suash</Title>
                </Link>

                <Flex justify="flex-start" gap="large">
                    {data.map((data, ix) => (
                        <Link
                            href={data.href}
                            key={`${data.label.toLowerCase()}-${ix}`}
                        >
                            <Text fontSize="18px" fontWeight="600">
                                {data.label}
                            </Text>
                        </Link>
                    ))}
                </Flex>
            </NavbarContainer>
        </NavbarWrapper>
    );
};

export default Navbar;
