import React, { JSX } from "react";
import { TextCardContainer } from "../../style";
import Text from "@/components/ui/Text";

type TextCardProps = {
    isVisible?: boolean;
    title: string;
    icon: JSX.Element;
};

const TextCard = ({ isVisible, title, icon }: TextCardProps) => {
    return (
        <TextCardContainer className={isVisible ? "visible" : ""}>
            <div className="w-[100px] h-[100px] bg-white dark:bg-gray-800 text-black dark:text-white rounded-[16px] mb-2">
                {icon}
            </div>
            <Text
                className="bg-white dark:bg-gray-800"
                style={{
                    padding: "5px",
                    borderRadius: "10px",
                }}
            >
                {title}
            </Text>
        </TextCardContainer>
    );
};

export default TextCard;
