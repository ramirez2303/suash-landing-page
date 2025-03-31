import React from "react";
import { AnimatedCardContainer } from "./style";
import { StaticImageData } from "next/image";
import ImageCard from "./components/ImageCard";
import TextCard from "./components/TextCard";
import { IconType } from "react-icons/lib";

type AnimatedCardProps = {
    title: string;
    image: StaticImageData;
    Icon: IconType;
};

const AnimatedCard = ({ title, image, Icon }: AnimatedCardProps) => {
    return (
        <AnimatedCardContainer>
            <ImageCard src={image.src} />
            <TextCard title={title} Icon={Icon} />
        </AnimatedCardContainer>
    );
};

export default AnimatedCard;
