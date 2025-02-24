import React from "react";
import { IoMegaphoneOutline } from "react-icons/io5";
import InfoCard from "../InfoCard";
import { AnimatedContainer } from "../Objectives/style";

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

    const containerVariants = {
        hidden: {
            opacity: 0,
            x: 100,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.5,
                duration: 1,
                type: "spring",
                stiffness: 50,
            },
        },
    };
    return (
        <AnimatedContainer
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {data.map((item, ix) => (
                <InfoCard
                    key={ix}
                    title={item.title}
                    icon={item.icon}
                    description={item.description}
                />
            ))}
        </AnimatedContainer>
    );
};

export default Advantages;
