export type InputNameType = "email" | "name" | "phone" | "message";

export type InputType = "text" | "email" | "number";

export type FieldType = {
    name: string;
    email: string;
    phone: number;
    message?: string;
};

export type FieldDataType = {
    label: string;
    name: InputNameType;
    placeholder: string;
    type: InputType;
    required: boolean;
    isTextArea?: boolean;
};
