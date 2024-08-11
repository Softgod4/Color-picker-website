/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'blue-standart': '#7c58ff',
                'description': '#A4A7AD',
            }
        }
    },
    plugins: []
};
