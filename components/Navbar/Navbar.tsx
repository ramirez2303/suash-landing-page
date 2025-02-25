import React from "react";
import { NavbarContainer, NavbarWrapper } from "./style";
import Link from "next/link";
import { Flex } from "antd";
import Title from "@/components/ui/Title";
import Text from "@/components/ui/Text";
import DarkModeToggle from "./components/DarkModeToggle";
import ContactButton from "./components/ContactButton";

type NavbarProps = {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
};

const Navbar = ({ isDarkMode, toggleDarkMode }: NavbarProps) => {
    const data: { label: string; href: string }[] = [
        { label: "Inicio", href: "/" },
        { label: "Servicios", href: "/services" },
        { label: "Acerca De", href: "/about" },
        { label: "Contacto", href: "/contact" },
    ];

    const variants = {
        hidden: { opacity: 0, top: -20 },
        visible: {
            opacity: 1,
            top: 0,
            transition: { duration: 0.3, delay: 6 },
        },
    };

    return (
        <NavbarWrapper animate="visible" initial="hidden" variants={variants}>
            <NavbarContainer className="bg-[#f2f2f27f] dark:bg-[#1f1f1f7f] border border-[#b6b6b67f] dark:border-[#4a4a4a7f]">
                <Link href="/">
                    <Title level={2} fontWeight="400" className="text-white">
                        Suash
                    </Title>
                </Link>

                <Flex justify="flex-start" gap="large">
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
                </Flex>

                <Flex justify="flex-end" align="center" gap="middle">
                    <ContactButton />
                    <DarkModeToggle
                        isDarkMode={isDarkMode}
                        toggleDarkMode={toggleDarkMode}
                    />
                </Flex>
            </NavbarContainer>
        </NavbarWrapper>
    );
};

export default Navbar;
