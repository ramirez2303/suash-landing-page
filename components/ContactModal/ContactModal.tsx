import { Button, Flex, Modal, QRCode } from "antd";
import React from "react";
import Title from "../ui/Title";
import Text from "../ui/Text";

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
            title="Contacto"
            open={modalConfig.isModalOpen}
            onCancel={modalConfig.handleCancel}
            footer={[
                <Button key="back" onClick={modalConfig.handleCancel}>
                    Cerrar
                </Button>,

                <Button
                    key="link"
                    href="/"
                    target="_blank"
                    type="primary"
                    onClick={modalConfig.handleOk}
                >
                    Ir a whatsapp
                </Button>,
            ]}
        >
            <Flex
                vertical
                justify="flex-start"
                align="flex-start"
                gap="large"
                style={{ width: "100%" }}
            >
                <Title level={4} fontSize="24px" fontWeight="700">
                    Contacto
                </Title>
                <Flex
                    vertical
                    justify="flex-start"
                    align="center"
                    gap="large"
                    style={{ width: "100%" }}
                >
                    <QRCode
                        type="svg"
                        value="https://ant.design/"
                        icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                    />
                    <Text
                        fontSize="16px"
                        fontWeight="400"
                        style={{ marginBottom: "20px" }}
                    >
                        Ir al link o escanear el QA
                    </Text>
                </Flex>
            </Flex>
        </Modal>
    );
};

export default ContactModal;
