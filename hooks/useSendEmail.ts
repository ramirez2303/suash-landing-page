"use client";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { message } from "antd";
import { FieldType } from "@/lib/type";
import { useState } from "react";

export const sendEmail = async ({ name, email, phone, message }: FieldType) => {
    const response = await axios.post("/api/send-email", {
        name,
        email,
        phone,
        message,
    });
    return response.data;
};

const useSendEmail = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
        messageApi.open({
            type: "success",
            content: "Enviado con exito!",
            className: "text-black dark:text-black dark:bg-black",
            style: { fontFamily: "kanit", fontSize: "16px", fontWeight: "400" },
        });
    };

    const error = () => {
        messageApi.open({
            type: "error",
            content: "Hubo un error, prueba de nuevo",
            className: "text-black dark:text-black dark:bg-black",
            style: { fontFamily: "kanit", fontSize: "16px", fontWeight: "400" },
        });
    };

    const { mutateAsync } = useMutation({
        mutationFn: sendEmail,
        retry: 1,
        onError: () => error(),
        onSuccess: () => success(),
        onSettled: () => setIsLoading(false),
    });

    const handleSendEmail = async (data: FieldType) => {
        setIsLoading(true);
        return mutateAsync({
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message ?? "",
        });
    };

    return { handleSendEmail, messageComponent: contextHolder, isLoading };
};

export default useSendEmail;
