/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "desktop-bg": "url('/images/pattern-background-desktop.svg')",
                "mobile-bg": "url('/images/pattern-background-desktop.png')",
            },
            colors: {
                blue: {
                    pale: "hsl(225, 100%, 94%)",
                    bright: "hsl(245, 75%, 52%)",

                    "v-pale": "hsl(225, 100%, 98%)",
                    desa: "hsl(224, 23%, 55%)",
                    dark: "hsl(223, 47%, 23%)",
                },
            },
        },
    },
    plugins: [],
};
