/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}", "./*.html", "./views/**/*.html"],
    theme: {
        extend: {
            backgroundColor: {
                "custom-beige": "#FAF3EA",
            },
        },
    },
    plugins: [],
};
