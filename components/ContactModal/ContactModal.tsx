import { Flex, Modal, QRCode } from "antd";
import React from "react";
import Title from "../ui/Title";
import Text from "../ui/Text";
import SLogo from "@/public/assets/s-suash-logo.png";
import { ModalButton } from "./style";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

type ContactModalProps = {
    modalConfig: {
        isModalOpen: boolean;
        handleOk: () => void;
        handleCancel: () => void;
    };
};

const ContactModal = ({ modalConfig }: ContactModalProps) => {
    return (
        <Modal
            open={modalConfig.isModalOpen}
            onCancel={modalConfig.handleCancel}
            footer={[
                <ModalButton
                    key="link"
                    onClick={modalConfig.handleOk}
                    className="text-black hover:text-white hover:bg-black dark:text-white dark:hover:text-black dark:hover:bg-white"
                >
                    Cerrar
                </ModalButton>,

                <ModalButton
                    key="link"
                    onClick={modalConfig.handleOk}
                    className="text-black hover:text-white hover:bg-black dark:text-white dark:hover:text-black dark:hover:bg-white"
                >
                    <Link
                        href="https://wa.me/+5492266679724"
                        target="_blank"
                        className="hover:text-white dark:hover:text-black flex items-center gap-2"
                    >
                        <span>Ir a whatsapp</span>
                        <FaWhatsapp />
                    </Link>
                </ModalButton>,
            ]}
        >
            <Flex
                vertical
                justify="flex-start"
                align="flex-start"
                gap="large"
                style={{ width: "100%" }}
            >
                <Title level={4} fontSize="24px" fontWeight="400">
                    Contacto
                </Title>
                <Flex
                    vertical
                    justify="flex-start"
                    align="center"
                    gap="large"
                    style={{ width: "100%" }}
                >
                    <Text
                        fontSize="16px"
                        fontWeight="400"
                        style={{ margin: "10px 0px" }}
                    >
                        Ir al link o escanear el QR
                    </Text>
                    <QRCode
                        type="svg"
                        value="https://wa.me/+5492266679724"
                        icon={SLogo.src}
                        size={300}
                        iconSize={80}
                        style={{ marginBottom: "30px" }}
                    />
                </Flex>
            </Flex>
        </Modal>
    );
};

export default ContactModal;
