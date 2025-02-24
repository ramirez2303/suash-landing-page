"use client";
import React from "react";
import { AnimatedCardContainer } from "./style";
import { StaticImageData } from "next/image";
import ImageCard from "./components/ImageCard";
import TextCard from "./components/TextCard";

type AnimatedCardProps = {
    title: string;
    image: StaticImageData;
    icon: StaticImageData;
};

const AnimatedCard = ({ title, image, icon }: AnimatedCardProps) => {
    return (
        <AnimatedCardContainer>
            <ImageCard src={image.src} />
            <TextCard title={title} icon={icon} />
        </AnimatedCardContainer>
    );
};

export default AnimatedCard;
