import React from "react";
import { TextCardContainer } from "../../style";
import Image, { StaticImageData } from "next/image";
import Text from "@/components/ui/Text";

type TextCardProps = {
    title: string;
    icon: StaticImageData;
};

const TextCard = ({ title, icon }: TextCardProps) => {
    return (
        <TextCardContainer>
            <Image
                src={icon}
                alt="animated card"
                width={120}
                height={120}
                style={{ objectFit: "cover" }}
            />
            <Text
                style={{
                    padding: "5px",
                    backgroundColor: "white",
                    borderRadius: "10px",
                }}
            >
                {title}
            </Text>
        </TextCardContainer>
    );
};

export default TextCard;
