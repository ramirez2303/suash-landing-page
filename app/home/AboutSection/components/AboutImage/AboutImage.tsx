import React from "react";
import { LogoContainer } from "./style";
import Image from "next/image";
import aboutIMG1 from "@/public/assets/about/graphicDesign.svg";
import aboutIMG2 from "@/public/assets/about/graphicIdea.svg";

const AboutImage = () => {
    return (
        <LogoContainer>
            <Image
                src={aboutIMG1}
                alt="Suash Logo"
                className="aboutImage1 dark:bg-[#21252cd0] rounded-full p-4"
                width={400}
                height={400}
            />
            <Image
                src={aboutIMG2}
                alt="Suash Logo"
                className="aboutImage2 dark:bg-[#21252cd0] rounded-full p-4"
                width={400}
                height={400}
            />
        </LogoContainer>
    );
};

export default AboutImage;
