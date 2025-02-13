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

    const variants = {
        hidden: { opacity: 0, top: -20 },
        visible: {
            opacity: 1,
            top: 20,
            transition: { duration: 0.3, delay: 6 },
        },
    };

    return (
        <NavbarWrapper animate="visible" initial="hidden" variants={variants}>
            <NavbarContainer>
                <Link href="/">
                    <Title level={2} fontWeight="400" isRowdies>
                        Suash
                    </Title>
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
