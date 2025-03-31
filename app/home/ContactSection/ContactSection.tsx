import React from "react";
import { ContactSectionWrapper } from "./style";
import { Flex } from "antd";
import Text from "@/components/ui/Text";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import ContactForm from "./components/ContactForm";
import Image from "next/image";
import suashLogo from "@/public/assets/suash-logo.png";
import Link from "next/link";

const ContactSection = () => {
    return (
        <ContactSectionWrapper className="bg-[linear-gradient(180deg,_rgba(176,176,176,0.5)_0%,_#fff_50%)] dark:bg-[linear-gradient(180deg,_rgba(0,0,0,0.5)_0%,_#21252cd0_50%)]">
            <Flex
                justify="space-around"
                align="center"
                style={{ width: "100%" }}
            >
                <Flex gap="large" vertical style={{ marginTop: "-50px" }}>
                    <Image
                        src={suashLogo}
                        alt="Suash Logo"
                        width={450}
                        className="dark:brightness-[0] dark:invert-[1]"
                    />
                    <Text
                        fontSize="24px"
                        fontWeight="500"
                        style={{
                            whiteSpace: "wrap",
                            maxWidth: "500px",
                            marginTop: "20px",
                        }}
                    >
                        Contactate con nosotros o dejanos tus datos y nosotros
                        te contactaremos
                    </Text>
                    <Flex
                        vertical
                        gap="4px"
                        style={{
                            marginTop: "10px",
                        }}
                    >
                        <Flex gap="20px">
                            <Flex justify="flex-start" align="center" gap="4px">
                                <Link
                                    href="https://wa.me/+5492266679724"
                                    target="_blank"
                                    className="flex items-center gap-2"
                                >
                                    <FaWhatsapp
                                        fontSize="20px"
                                        className="text-black dark:text-white"
                                    />
                                    <Text
                                        fontSize="20px"
                                        fontWeight="400"
                                        noWrap
                                    >
                                        +54 9 2266 679724
                                    </Text>
                                </Link>
                            </Flex>
                            <Flex justify="flex-start" align="center" gap="4px">
                                <Link
                                    href="https://www.instagram.com/suash.studio?igsh=MWdnOWZ2cXY1Znk1OA=="
                                    target="_blank"
                                    className="flex items-center gap-2"
                                >
                                    <IoLogoInstagram
                                        fontSize="20px"
                                        className="text-black dark:text-white"
                                    />
                                    <Text
                                        fontSize="20px"
                                        fontWeight="400"
                                        noWrap
                                    >
                                        suash.studio
                                    </Text>
                                </Link>
                            </Flex>
                        </Flex>
                        <Flex gap="20px">
                            <Flex justify="flex-start" align="center" gap="4px">
                                <IoMdMail
                                    fontSize="20px"
                                    className="text-black dark:text-white"
                                />
                                <Text fontSize="20px" fontWeight="400" noWrap>
                                    example@mail.com
                                </Text>
                            </Flex>
                            <Flex justify="flex-start" align="center" gap="4px">
                                <CiLinkedin
                                    fontSize="20px"
                                    className="text-black dark:text-white"
                                />
                                <Text fontSize="20px" fontWeight="400" noWrap>
                                    Linkedin
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                <ContactForm />
            </Flex>
        </ContactSectionWrapper>
    );
};

export default ContactSection;
