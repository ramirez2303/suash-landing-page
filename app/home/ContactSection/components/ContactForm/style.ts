import styled from "styled-components";

export const FormContainer = styled.div`
    width: 450px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    border: 1px solid rgba(0, 0, 0, 0.5);
    background-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);

    box-sizing: border-box;
    border-radius: 15px;
    padding: 30px;

    button,
    label,
    input,
    textArea {
        width: 100%;
        font-family: "kanit", sans-serif;
    }

    label {
        color: #000;
        font-size: 24px;
        font-weight: 400;
    }

    textArea,
    input {
        background-color: white;
        padding: 10px 15px;
        box-sizing: border-box;
        border-color: rgba(0, 0, 0, 0.4);
        color: #000;
    }

    .ant-form-item-explain-error {
        font-family: "kanit", sans-serif;
        font-size: 14px;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type="number"] {
        -moz-appearance: textfield; /* Firefox */
    }

    @media (max-width: 1250px) {
        width: 80%;
    }
    @media (max-width: 700px) {
        width: 100%;
    }
`;
