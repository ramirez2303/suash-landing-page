"use client";
import { Form, Input } from "antd";
import React from "react";
import { FormContainer } from "./style";

type FieldType = {
    name: string;
    email: string;
    cellphone: number;
    message?: string;
};

const ContactForm = () => {
    return (
        <FormContainer>
            <Form name="contact-form" layout="vertical">
                <Form.Item<FieldType>
                    label="Nombre"
                    name="name"
                    layout="vertical"
                    rules={[{ required: true, type: "string" }]}
                >
                    <Input placeholder="Nombre" name="name" type="text" />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Email"
                    name="email"
                    layout="vertical"
                    rules={[{ required: true, type: "string" }]}
                >
                    <Input placeholder="Email" name="email" type="email" />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Telefono"
                    name="cellphone"
                    layout="vertical"
                    rules={[{ required: true, type: "number" }]}
                >
                    <Input placeholder="Telefono" name="cellphone" type="tel" />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Mensaje"
                    name="message"
                    layout="vertical"
                    rules={[{ type: "string" }]}
                >
                    <Input.TextArea placeholder="Mensaje" name="message" />
                </Form.Item>
                <Form.Item label={null}>
                    <button
                        type="submit"
                        className="mt-5 transition-all duration-300 ease-in-out rounded-lg w-full bg-black hover:bg-[rgba(0,0,0,0.8)] active:bg-[rgba(0,0,0,0.6)] dark:bg-white text-white dark:text-black text-lg font-bold p-3"
                    >
                        Enviar
                    </button>
                </Form.Item>
            </Form>
        </FormContainer>
    );
};

export default ContactForm;
