/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'cream': '#F5F3F0',
                'ink': '#1A1A1A',
                'stone': '#888888',
                'warm': '#E8E4E0',
            },
            fontFamily: {
                'heading': ['"Playfair Display"', 'Georgia', 'serif'],
                'body': ['Inter', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                'display': ['clamp(3rem, 10vw, 10rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
                'hero': ['clamp(2.5rem, 8vw, 7rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
                'title': ['clamp(1.5rem, 4vw, 3rem)', { lineHeight: '1.2' }],
            },
            spacing: {
                'section': '12rem',
            }
        },
    },
    plugins: [],
}
