import React from "react";
import { TextCardContainer } from "../../style";
import Text from "@/components/ui/Text";
import { IconType } from "react-icons/lib";

type TextCardProps = {
    title: string;
    Icon: IconType;
};

const TextCard = ({ title, Icon }: TextCardProps) => {
    return (
        <TextCardContainer>
            <Icon className="w-[100px] h-[100px] bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded-[16px] mb-2" />
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
