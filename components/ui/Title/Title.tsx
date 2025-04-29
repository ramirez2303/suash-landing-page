"use client";
import { Typography } from "antd";
import { ComponentProps } from "react";

type TitleProps = {
    children: string | React.ReactNode;
    level?: 1 | 2 | 3 | 4 | 5;
    fontSize?: string;
    fontWeight?: string;
    wrap?: boolean;
} & ComponentProps<typeof Typography.Title>;

const Title = ({
    children,
    level,
    fontSize,
    fontWeight,
    wrap = false,
    ...rest
}: TitleProps) => {
    const { Title: AntdTitle } = Typography;
    return (
        <AntdTitle
            level={level}
            {...rest}
            className={`text-black dark:text-[#f2f2f2] ${rest.className}`}
            style={{
                margin: 0,
                fontSize: fontSize,
                fontWeight: fontWeight,
                whiteSpace: wrap ? "wrap" : "nowrap",
                ...rest.style,
            }}
        >
            {children}
        </AntdTitle>
    );
};

export default Title;
