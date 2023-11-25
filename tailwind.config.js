/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "node_modules/flowbite-react/lib/esm/**/*.js",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#183E9F'
            }
        },
    },
    darkMode: "class",
    plugins: [require('flowbite/plugin')],
};
