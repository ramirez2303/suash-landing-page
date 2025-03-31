import React, { ReactNode } from "react";
import { InfoCardContainer } from "./style";
import Title from "@/components/ui/Title";
import Text from "@/components/ui/Text";
import { Flex } from "antd";

type InfoCardProps = {
    title: string;
    icon: ReactNode;
    description: string;
};

const InfoCard = ({ title, icon, description }: InfoCardProps) => {
    return (
        <InfoCardContainer className="bg-[#f5f5f57f] dark:bg-[#1f1f1f91]">
            <Flex vertical justify="center" align="center" gap="20px">
                <Title
                    level={5}
                    fontSize="20px"
                    fontWeight="400"
                    style={{ whiteSpace: "wrap", textAlign: "center" }}
                >
                    {title}
                </Title>
                {icon}
            </Flex>
            <Text
                fontSize="16px"
                fontWeight="300"
                className="text-black dark:text-white text-center"
            >
                {description}
            </Text>
        </InfoCardContainer>
    );
};

export default InfoCard;
