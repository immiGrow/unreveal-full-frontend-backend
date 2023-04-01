/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./Components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {

        extend: {
            colors: {
                'darkblue': '#26425d',
                'dark': '#1c2834'

            },
        },
    },
    plugins: [],
}