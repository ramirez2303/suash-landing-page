import { FieldType, InputNameType, InputType } from "@/lib/type";
import { Form, Input } from "antd";
import React from "react";

type FormInputProps = {
    label: string;
    name: InputNameType;
    placeholder: string;
    type: InputType;
    required?: boolean;
    isTextArea?: boolean;
};

const FormInput = ({
    label,
    name,
    placeholder,
    type,
    required,
    isTextArea,
}: FormInputProps) => {
    return (
        <Form.Item<FieldType>
            label={
                <label
                    style={{ fontSize: "18x" }}
                    className="dark:text-white text-black"
                >
                    {label}
                </label>
            }
            name={name}
            layout="vertical"
            rules={[
                {
                    required: required,
                    message: `Por favor ingrese su ${label.toLowerCase()}`,
                },
                ...(type === "number"
                    ? [
                          {
                              pattern: /^\d+$/,
                              message: "Por favor ingrese solo números",
                          },
                      ]
                    : []),
            ]}
        >
            {isTextArea ? (
                <Input.TextArea
                    placeholder={placeholder}
                    name={name}
                    autoSize={{ minRows: 2, maxRows: 6 }}
                    style={{ resize: "none" }}
                />
            ) : (
                <Input placeholder={placeholder} name={name} type={type} />
            )}
        </Form.Item>
    );
};

export default FormInput;
