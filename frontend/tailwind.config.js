module.exports = {
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            rotate: {
                90: "90deg",
                "-90": "-90deg",
            },
        },
    },
    variants: {
        extend: {
            rotate: ["responsive", "hover", "focus"],
        },
    },
    plugins: [],
};
