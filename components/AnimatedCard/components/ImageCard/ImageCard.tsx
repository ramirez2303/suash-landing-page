import Image from "next/image";
import React from "react";

type ImageCardProps = {
    src: string;
};

const ImageCard = ({ src }: ImageCardProps) => {
    return (
        <Image
            src={src}
            alt="asd"
            className="image w-[400px] h-[250px] max-[600px]:w-[300px] max-[600px]:h-[200px]"
            width={400}
            height={250}
        />
    );
};

export default ImageCard;
