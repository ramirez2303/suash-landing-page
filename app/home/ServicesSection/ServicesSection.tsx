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

import { SlScreenDesktop } from "react-icons/sl";
import { BsCameraFill } from "react-icons/bs";
import { SiAdobepremierepro } from "react-icons/si";
import { PiDrone } from "react-icons/pi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoCodeSlashOutline } from "react-icons/io5";

import { Flex } from "antd";
import Objectives from "./components/Objectives";
import Advantages from "./components/Advantages";

const ServicesSection = () => {
    const data = [
        {
            title: "Graphic Design",
            image: graphicDesign,
            icon: <SlScreenDesktop className="w-[100px] h-[100px] p-4"/>,
        },
        {
            title: "Photograpic",
            image: imageAndVideo,
            icon: <BsCameraFill className="w-[100px] h-[100px] p-4"/>,
        },
        {
            title: "Video",
            image: video,
            icon: <SiAdobepremierepro className="w-[100px] h-[100px] p-4"/>,
        },
        {
            title: "Drone",
            image: drone,
            icon: <PiDrone className="w-[100px] h-[100px] p-4"/>,
        },
        {
            title: "Community Manager",
            image: communityManager,
            icon: <IoPhonePortraitOutline className="w-[100px] h-[100px] p-4"/>,
        },
        {
            title: "Web Development",
            image: webDevelopment,
            icon: <IoCodeSlashOutline className="w-[100px] h-[100px] p-4"/>,
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
                viewport={{ once: true }}
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
                    position: "relative",
                    zIndex: 1,
                }}
                justify="center"
                align="center"
                gap="80px"
                vertical
            >
                <Title
                    level={2}
                    fontSize="36px"
                    fontWeight="400"
                    wrap
                    className="text-center"
                >
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
