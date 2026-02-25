/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: {
                    DEFAULT: '#0F172A',
                },
                light: {
                    DEFAULT: '#e3e3e3',
                },
                university: {
                    card: "#1E293B",        // card background
                    border: "#334155",      // borders
                    primary: "#6366F1",     // indigo
                    success: "#10B981",     // green
                    warning: "#F59E0B",     // orange
                    danger: "#EF4444",      // red
                },
            },
            boxShadow: {
                card: "0 10px 25px rgba(0,0,0,0.3)",
            },
            borderRadius: {
                xl: "1rem",
                "2xl": "1.5rem",
            },
            fontFamily: {
                sans: ["Inter", "ui-sans-serif", "system-ui"],
            },
            transitionProperty: {
                height: "height",
                spacing: "margin, padding",
            },
            animation: {
                fade: "fadeIn 0.3s ease-in-out",
            },
            keyframes: {
                fadeIn: {
                    "0%": {opacity: 0},
                    "100%": {opacity: 1},
                },
            },
        },
    },
    plugins: [],
};