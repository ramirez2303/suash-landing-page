import AnimatedCard from "@/components/AnimatedCard";
import React from "react";
import { BgContainer, ServicesCardContainer, ServicesWrapper } from "./style";
import { RetroGrid } from "@/components/magicui/retro-grid";
import Title from "@/components/ui/Title";
import graphicDesign from "@/public/assets/services/design-graphic-card.jpg";
import webDevelopment from "@/public/assets/services/web-development-card.jpg";
import communityManager from "@/public/assets/services/community-manager-card.avif";
import imageAndVideo from "@/public/assets/services/photographic-card.jpg";
import drone from "@/public/assets/services/drone-card.jpg";
import video from "@/public/assets/services/video-card.jpg";
import graphicDesignVector from "@/public/assets/services/graphic-design-vector.png";
import webDevelopmentVector from "@/public/assets/services/code-vector.png";
import communityManagerVector from "@/public/assets/services/cm-vector.avif";
import imageAndVideoVector from "@/public/assets/services/camera-vector.png";
import droneVector from "@/public/assets/services/drone-vector.png";
import videoVector from "@/public/assets/services/video-vector.svg";

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
            title: "Photograpic",
            image: imageAndVideo,
            icon: imageAndVideoVector,
        },
        {
            title: "Video",
            image: video,
            icon: videoVector,
        },
        {
            title: "Drone",
            image: drone,
            icon: droneVector,
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

    const servicesVariants = {
        hidden: {
            opacity: 0,
            y: 100,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2,
                duration: 0.5,
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <ServicesWrapper id="services">
            <Title level={2} fontSize="36px" fontWeight="400">
                Servicios
            </Title>
            <ServicesCardContainer
                variants={servicesVariants}
                initial="hidden"
                whileInView="visible"
            >
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
