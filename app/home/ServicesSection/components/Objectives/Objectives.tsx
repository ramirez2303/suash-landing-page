import { Flex } from "antd";
import React from "react";
import { IoMegaphoneOutline } from "react-icons/io5";
import InfoCard from "../InfoCard";

const Objectives = () => {
    const data = [
        {
            title: "Crecimiento Online",
            icon: (
                <IoMegaphoneOutline
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
                <IoMegaphoneOutline
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
                <IoMegaphoneOutline
                    fontSize="40px"
                    className="text-black dark:text-white"
                />
            ),
            description:
                "Incrementar la interacción y el engagement con tu audiencia para construir una comunidad leal.",
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

export default Objectives;
