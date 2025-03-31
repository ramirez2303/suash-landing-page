import React from "react";
import { AiOutlineRise } from "react-icons/ai";
import { MdOutlineVisibility } from "react-icons/md";
import { AiOutlineInteraction } from "react-icons/ai";

import InfoCard from "../InfoCard";
import { AnimatedContainer } from "./style";

const Objectives = () => {
    const data = [
        {
            title: "Crecimiento Online",
            icon: (
                <AiOutlineRise
                    fontSize="40px"
                    className="text-black dark:text-white"
                />
            ),
            description:
                "Fomentar el crecimiento de tu presencia online a través de estrategias efectivas de marketing digital.",
        },
        {
            title: "Visibilidad de Marca",
            icon: (
                <MdOutlineVisibility
                    fontSize="40px"
                    className="text-black dark:text-white"
                />
            ),
            description:
                "Aumentar la visibilidad de tu marca en redes sociales mediante contenido atractivo y relevante.",
        },
        {
            title: "Interacción con la Audiencia",
            icon: (
                <AiOutlineInteraction
                    fontSize="40px"
                    className="text-black dark:text-white"
                />
            ),
            description:
                "Incrementar la interacción y el engagement con tu audiencia para construir una comunidad leal.",
        },
    ];

    const containerVariants = {
        hidden: {
            opacity: 0,
            x: -100,
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

export default Objectives;
