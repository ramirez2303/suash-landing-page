import React from "react";
import { NavbarContainer } from "./style";
import Link from "next/link";

const Navbar = () => {
    const data: { label: string; href: string }[] = [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <NavbarContainer>
            <h1>Suash</h1>
            
            {data.map((data, ix) => (
                <div key={`${data.label.toLowerCase()}-${ix}`}>
                    <Link href={data.href}>{data.label}</Link>
                </div>
            ))}
        </NavbarContainer>
    );
};

export default Navbar;
