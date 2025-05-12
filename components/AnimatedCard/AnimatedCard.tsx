"use client";
import React, { JSX, useEffect, useRef, useState } from "react";
import { AnimatedCardContainer } from "./style";
import { StaticImageData } from "next/image";
import ImageCard from "./components/ImageCard";
import TextCard from "./components/TextCard";

type AnimatedCardProps = {
    title: string;
    image: StaticImageData;
    icon: JSX.Element;
};

const AnimatedCard = ({ title, image, icon }: AnimatedCardProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        <AnimatedCardContainer
            ref={cardRef}
            className={isVisible ? "visible" : ""}
        >
            <ImageCard src={image.src} />
            <TextCard isVisible={isVisible} title={title} icon={icon} />
        </AnimatedCardContainer>
    );
};

export default AnimatedCard;
