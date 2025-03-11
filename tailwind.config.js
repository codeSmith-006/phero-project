/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
            colors: {
                btnRed: "#ff1f3d",
                btnAsh: "#dfdfdf"
            },
        },
    },
    plugins: [],
}