import { fontFamily } from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                discgent: ["var(--font-discgent)", ...fontFamily.sans],
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            colors: {},
            animation: {
                grid: "grid 25s linear infinite",
            },
            keyframes: {
                grid: {
                    "0%": {
                        transform: "translateY(-50%)",
                    },
                    "100%": {
                        transform: "translateY(0)",
                    },
                },
            },
        },
    },
    darkMode: "class",
    plugins: [import("tailwindcss-animate")],
};
