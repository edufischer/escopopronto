/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0A0A0A",
                primary: {
                    DEFAULT: "#22C55E",
                    foreground: "#FFFFFF",
                },
                secondary: {
                    DEFAULT: "#A1A1AA",
                    foreground: "#FFFFFF",
                },
                glass: "rgba(255, 255, 255, 0.05)",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
            backdropBlur: {
                md: "12px",
            },
        },
    },
    plugins: [],
}
