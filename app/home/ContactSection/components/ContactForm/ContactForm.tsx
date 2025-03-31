"use client";
import { Form } from "antd";
import React, { Fragment } from "react";
import { FormContainer } from "./style";
import useSendEmail from "@/hooks/useSendEmail";
import { useForm } from "@/hooks/useForm";
import FormButton from "./components/FormButton";
import FormInput from "./components/FormInput";
import { formFields } from "@/lib/data";

const ContactForm = () => {
    const { handleSendEmail, messageComponent, isLoading } = useSendEmail();
    const { form, values, isDisabled } = useForm();

    const disabledStyles = isLoading
        ? "cursor-wait cursor-not-allowed pointer-events-none"
        : isDisabled
        ? "opacity-70 cursor-not-allowed pointer-events-none"
        : "hover:bg-[rgba(0,0,0,0.8)] active:bg-[rgba(0,0,0,0.6)] cursor-pointer";

    const handleSubmit = () =>
        handleSendEmail({
            name: values.name,
            email: values.email,
            phone: values.phone,
            message: values?.message ?? "",
        });

    return (
        <Fragment>
            <FormContainer className="bg-[rgba(255, 255, 255, 0.3)] dark:bg-[rgba(0,0,0,0.3)] border border-[rgba(0, 0, 0, 0.5)] dark:border-[rgba(255,255,255,0.5)]">
                <Form
                    form={form}
                    name="contact-form"
                    layout="vertical"
                    autoComplete="off"
                >
                    {formFields.map((field) => (
                        <FormInput
                            key={field.name}
                            label={field.label}
                            name={field.name}
                            placeholder={field.placeholder}
                            type={field.type}
                            required={field.required}
                            isTextArea={field.isTextArea}
                        />
                    ))}
                    <FormButton
                        isDisabled={isDisabled}
                        disabledStyles={disabledStyles}
                        handleSubmit={handleSubmit}
                        isLoading={isLoading}
                    />
                </Form>
            </FormContainer>
            {messageComponent}
        </Fragment>
    );
};

export default ContactForm;
