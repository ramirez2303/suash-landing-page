import { FieldDataType } from "./type";

export const formFields: FieldDataType[] = [
    {
        label: "Nombre",
        name: "name",
        placeholder: "Ej. Juan Perez",
        type: "text",
        required: true,
    },
    {
        label: "Email",
        name: "email",
        placeholder: "Ej. juan.perez@example.com",
        type: "email",
        required: true,
    },
    {
        label: "Telefono",
        name: "phone",
        placeholder: "Ej. 1234567890",
        type: "number",
        required: true,
    },
    {
        label: "Mensaje",
        name: "message",
        placeholder: "Ej. Hola, me gustaría saber más sobre...",
        type: "text",
        required: false,
        isTextArea: true,
    },
];
