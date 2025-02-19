import { Flex } from "antd";
import React from "react";
import { IoMegaphoneOutline } from "react-icons/io5";
import InfoCard from "../InfoCard";

const Advantages = () => {
    const data = [
        {
            title: "Creatividad y Originalidad",
            icon: (
                <IoMegaphoneOutline
                    fontSize="40px"
                    className="text-black dark:text-white"
                />
            ),
            description:
                "Destaca con soluciones creativas y originales que capturan la esencia de tu marca.",
        },
        {
            title: "Calidad Profesional",
            icon: (
                <IoMegaphoneOutline
                    fontSize="40px"
                    className="text-black dark:text-white"
                />
            ),
            description:
                "Disfruta de un alto estándar de calidad en todos nuestros servicios, asegurando resultados excepcionales.",
        },
        {
            title: "Estrategias Efectivas",
            icon: (
                <IoMegaphoneOutline
                    fontSize="40px"
                    className="text-black dark:text-white"
                />
            ),
            description:
                "Impulsa tu negocio con estrategias bien planificadas y ejecutadas para maximizar tu alcance y éxito.",
        },
    ];
    return (
        <Flex justify="center" align="center" gap="40px">
            {data.map((item, ix) => (
                <InfoCard
                    key={ix}
                    title={item.title}
                    icon={item.icon}
                    description={item.description}
                />
            ))}
        </Flex>
    );
};

export default Advantages;
