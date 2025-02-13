"use client";
import { Typography } from "antd";
import { ComponentProps } from "react";

type TitleProps = {
    children: string | React.ReactNode;
    level?: 1 | 2 | 3 | 4 | 5;
    fontSize?: string;
    fontWeight?: string;
    isRowdies?: boolean;
} & ComponentProps<typeof Typography.Title>;

const Title = ({
    children,
    level,
    fontSize,
    fontWeight,
    isRowdies,
    ...rest
}: TitleProps) => {
    const { Title: AntdTitle } = Typography;
    return (
        <AntdTitle
            level={level}
            {...rest}
            className="text-black dark:text-[#f2f2f2]"
            style={{
                margin: 0,
                fontSize: fontSize,
                fontWeight: fontWeight,
                fontFamily: isRowdies ? "Rowdies" : "",
                whiteSpace: "nowrap",
                ...rest.style,
            }}
        >
            {children}
        </AntdTitle>
    );
};

export default Title;
