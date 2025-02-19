"use client";
import AnimatedCard from "@/components/AnimatedCard";
import React from "react";
import { BgContainer, ServicesCardContainer, ServicesWrapper } from "./style";
import { RetroGrid } from "@/components/magicui/retro-grid";
import Title from "@/components/ui/Title";
import graphicDesign from "@/public/assets/services/design-graphic-card.jpg";
import webDevelopment from "@/public/assets/services/web-development-card.jpg";
import communityManager from "@/public/assets/services/community-manager-card.avif";
import imageAndVideo from "@/public/assets/services/photo-video-card.jpg";
import graphicDesignVector from "@/public/assets/services/graphic-design-vector.png";
import webDevelopmentVector from "@/public/assets/services/code-vector.png";
import communityManagerVector from "@/public/assets/services/cm-vector.avif";
import imageAndVideoVector from "@/public/assets/services/camera-vector.png";
import { Flex } from "antd";
import Objectives from "./components/Objectives";
import Advantages from "./components/Advantages";

const ServicesSection = () => {
    const data = [
        {
            title: "Graphic Design",
            image: graphicDesign,
            icon: graphicDesignVector,
        },
        {
            title: "Image & Video",
            image: imageAndVideo,
            icon: imageAndVideoVector,
        },
        {
            title: "Community Manager",
            image: communityManager,
            icon: communityManagerVector,
        },
        {
            title: "Web Development",
            image: webDevelopment,
            icon: webDevelopmentVector,
        },
    ];

    return (
        <ServicesWrapper id="services">
            <Title level={2} fontSize="36px" fontWeight="400">
                Servicios
            </Title>
            <ServicesCardContainer>
                {data.map((item, ix) => (
                    <AnimatedCard
                        key={ix}
                        title={item.title}
                        image={item.image}
                        icon={item.icon}
                    />
                ))}
            </ServicesCardContainer>
            <Flex
                style={{
                    maxWidth: "1200px",
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "20px 20px 80px",
                    marginTop: "40px",
                }}
                justify="center"
                align="center"
                gap="80px"
                vertical
            >
                <Title level={2} fontSize="36px" fontWeight="400">
                    Objetivos y Ventajas
                </Title>
                <Objectives />
                <Advantages />
            </Flex>
            <BgContainer>
                <RetroGrid angle={180} opacity={0.4} />
            </BgContainer>
        </ServicesWrapper>
    );
};

export default ServicesSection;
