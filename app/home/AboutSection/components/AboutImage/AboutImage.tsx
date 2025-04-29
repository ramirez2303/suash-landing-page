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
                className="aboutImage1 dark:bg-[#21252cd0] rounded-full p-4 w-[400px] h-[400px] max-[850px]:w-[300px] max-[850px]:h-[300px] max-[550px]:w-[250px] max-[550px]:h-[250px]"
            />
            <Image
                src={aboutIMG2}
                alt="Suash Logo"
                className="aboutImage2 dark:bg-[#21252cd0] rounded-full p-4 w-[400px] h-[400px] max-[850px]:w-[300px] max-[850px]:h-[300px] max-[550px]:w-[250px] max-[550px]:h-[250px]"
            />
        </LogoContainer>
    );
};

export default AboutImage;
