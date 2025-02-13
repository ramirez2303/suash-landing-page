"use client";
import { Typography } from "antd";
import { ComponentProps } from "react";

type TextProps = {
    children: string;
    fontSize?: string;
    fontWeight?: string;
} & ComponentProps<typeof Typography.Text>;

const Text = ({
    children,
    fontSize = "16px",
    fontWeight = "400",
    ...rest
}: TextProps) => {
    const { Text: AntdText } = Typography;
    return (
        <AntdText
            {...rest}
            className="text-black dark:text-[#f2f2f2]"
            style={{ fontSize: fontSize, fontWeight: fontWeight }}
        >
            {children}
        </AntdText>
    );
};

export default Text;
