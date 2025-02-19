import React from "react";
import { ContactSectionWrapper } from "./style";
import Title from "@/components/ui/Title";

const ContactSection = () => {
    return (
        <ContactSectionWrapper>
            <Title level={3} fontSize="42px" fontWeight="700">
                Contacto
            </Title>
        </ContactSectionWrapper>
    );
};

export default ContactSection;
