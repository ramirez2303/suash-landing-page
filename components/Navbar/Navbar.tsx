import React from "react";
import { NavbarContainer, NavbarWrapper } from "./style";
import Link from "next/link";
import { Flex } from "antd";
import Title from "@/components/ui/Title";
import Text from "@/components/ui/Text";
import { TfiWorld } from "react-icons/tfi";
import DarkModeToggle from "./components/DarkModeToggle";
import ContactButton from "./components/ContactButton";

type NavbarProps = {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
};

const Navbar = ({ isDarkMode, toggleDarkMode }: NavbarProps) => {
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
            <NavbarContainer className="bg-[#f2f2f27f] dark:bg-[#1f1f1f7f] border border-[#b6b6b67f] dark:border-[#4a4a4a7f]">
                <Link href="/">
                    <Title level={2} fontWeight="400" className="text-white">
                        Suash
                    </Title>
                </Link>

                <Flex justify="flex-start" gap="middle">
                    {data.map((data, ix) => (
                        <Link
                            href={data.href}
                            key={`${data.label.toLowerCase()}-${ix}`}
                        >
                            <Text fontSize="20px" fontWeight="600">
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
                    {/* <LuSunMedium
                        onClick={toggleDarkMode}
                        fontSize="24px"
                        className="text-black dark:text-[#f2f2f2]"
                        cursor="pointer"
                    /> */}
                    <TfiWorld className="text-black dark:text-[#f2f2f2]" />
                </Flex>
            </NavbarContainer>
        </NavbarWrapper>
    );
};

export default Navbar;
