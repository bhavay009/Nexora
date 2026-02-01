/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: "#0B0E14",
                "dark-accent": "#151921",
                accent: {
                    blue: "#3B82F6",
                    purple: "#8B5CF6",
                },
                muted: "#9CA3AF",
            },
            fontFamily: {
                heading: ["Space Grotesk", "sans-serif"],
                body: ["Inter", "sans-serif"],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-gradient': 'linear-gradient(to right, #3B82F6, #8B5CF6)',
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
