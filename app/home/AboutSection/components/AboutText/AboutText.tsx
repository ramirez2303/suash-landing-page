import React from "react";
import Title from "@/components/ui/Title";
import Text from "@/components/ui/Text";
import { AboutTextContainer } from "./style";

const AboutText = () => {
    return (
        <AboutTextContainer
            vertical
            justify="flex-start"
            align="center"
            gap="large"
        >
            <Title level={3} fontSize="36px" fontWeight="400">
                Sobre nosotros
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
        </AboutTextContainer>
    );
};

export default AboutText;
