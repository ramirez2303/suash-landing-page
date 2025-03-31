"use client";
import ContactModal from "@/components/ContactModal";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { ContactModalContainer } from "./style";

const ContactButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <ContactModalContainer>
            <FaWhatsapp
                className="contactButton text-black dark:text-[#f2f2f2]"
                cursor="pointer"
                onClick={showModal}
            />
            <ContactModal
                modalConfig={{
                    isModalOpen,
                    handleOk,
                    handleCancel,
                }}
            />
        </ContactModalContainer>
    );
};

export default ContactButton;
