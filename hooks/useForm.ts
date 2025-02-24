import { FieldType } from "@/lib/type";
import { Form } from "antd";
import { useEffect, useState } from "react";

const validateEmail = (email: string) => {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return re.test(email);
};

const handleValidations = (values: FieldType) => {
    if (!values?.email || !values?.name || !values?.phone) return false;

    const isEmailValid = validateEmail(values.email);
    const isNameValid = values.name.length > 0;
    const isPhoneValid = values.phone.toString().length > 9;

    return isEmailValid && isNameValid && isPhoneValid;
};

export const useForm = () => {
    const [form] = Form.useForm<FieldType>();
    const [isDisabled, setIsDisabled] = useState(true);
    const values = Form.useWatch<FieldType>([], form);

    useEffect(() => {
        setIsDisabled(!handleValidations(values));
    }, [form, values]);

    return { form, values, isDisabled };
};
