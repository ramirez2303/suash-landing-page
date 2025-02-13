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
            className="image"
            width={400}
            height={250}
            style={{
                maxWidth: "400px",
                maxHeight: "250px",
            }}
        />
    );
};

export default ImageCard;
