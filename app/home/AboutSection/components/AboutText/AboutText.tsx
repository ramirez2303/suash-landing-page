import React from "react";
import { Flex } from "antd";
import Title from "@/components/ui/Title";
import Text from "@/components/ui/Text";

const AboutText = () => {
    return (
        <Flex
            vertical
            justify="flex-start"
            align="center"
            gap="large"
            style={{ maxWidth: "500px" }}
        >
            <Title level={3} fontSize="42px" fontWeight="400">
                AboutText
            </Title>
            <Text fontSize="20px" fontWeight="400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eget libero nec turpis lacinia aliquam. Donec in ligula
                vestibulum, ultricies nunc nec, convallis mi. Sed nec ultrices
                nunc. Nullam nec nulla nec risus ultrices tincidunt. Integer
                vitae magna ac odio scelerisque fermentum. Sed nec ultrices
                nunc. Nullam nec nulla nec risus ultrices tincidunt. Integer
                vitae magna ac odio scelerisque ferment
            </Text>
        </Flex>
    );
};

export default AboutText;
