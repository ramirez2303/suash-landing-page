"use client";
import ContactModal from "@/components/ContactModal";
import React, { Fragment, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";

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
        <Fragment>
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
        </Fragment>
    );
};

export default ContactButton;
