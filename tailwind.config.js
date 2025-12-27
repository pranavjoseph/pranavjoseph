/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // enable dark mode via a class
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                orbitron: ['"Orbitron"', 'sans-serif'],
                space: ['"Space Grotesk"', 'sans-serif'],
            },
            colors: {
                'brand-red': '#FF3B30', // brighter red for better contrast on dark backgrounds
                'brand-black': '#050505',
                'brand-dark-gray': '#121212',
            },
        },
    },
    plugins: [],
}
