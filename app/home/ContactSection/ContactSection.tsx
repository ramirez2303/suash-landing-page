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

const ContactSection = () => {
    return (
        <ContactSectionWrapper>
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
                                <FaWhatsapp
                                    fontSize="20px"
                                    className="text-black dark:text-white"
                                />
                                <Text fontSize="20px" fontWeight="400" noWrap>
                                    +54 9 11 1234-5678
                                </Text>
                            </Flex>
                            <Flex justify="flex-start" align="center" gap="4px">
                                <IoLogoInstagram
                                    fontSize="20px"
                                    className="text-black dark:text-white"
                                />
                                <Text fontSize="20px" fontWeight="400" noWrap>
                                    exampleInstagram
                                </Text>
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
