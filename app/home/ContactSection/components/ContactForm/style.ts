import styled from "styled-components";

export const FormContainer = styled.div`
    width: 450px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    border: 1px solid rgba(0, 0, 0, 0.4);
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
        font-family: "kanit", sans-serif;
    }

    :where(.css-dev-only-do-not-override-1gzsd9m).ant-form-item
        .ant-form-item-label
        > label {
        font-size: 20px;
        font-weight: 500;
        color: #000;
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
`;
