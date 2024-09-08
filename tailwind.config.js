/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'slow-bounce': 'bounce 4s linear infinite',
                marquee: 'marquee 25s linear infinite',
                marquee2: 'marquee2 25s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': {transform: 'translateX(0%)'},
                    '100%': {transform: 'translateX(-100%)'},
                },
                marquee2: {
                    '0%': {transform: 'translateX(100%)'},
                    '100%': {transform: 'translateX(0%)'},
                },
            },
            colors: {
                black: '#1d1d1d',
                dark_grey: '#33383f',
                light_grey: '#99a4af',
                grey: '#626a72',
                gradient_red: '#ff010126',
                back_grey: '#f5f6f7',
                misty_rose: '#ffdada',
                lavender_blush: '#ffefef',
                gradient_blue: '#7aa7ff52',
                dim_grey: '#495158',
                silver: '#e7ecf0',
                soft_grey: '#cbd5df',
                gradient_pink: '#ef98cf40',
                dark_grey_2: '#3a3a3a',
                beige: '#fffef9',
                rosy_brown: '#b89797',
                cornflower_blue: '#d4e2ff',
                misty_rose_2: '#f78586',
                navajo_white: '#ffcd82',
                black_2: '#1d1d1d',
                navajo_white_2: '#ffe2b8',
                lavender_blush_2: '#b9b9d1',
                rosy: '#b99898'
            },
            fontFamily: {
                'satoshi': ['Satoshi']
            },
        },
    },
    plugins: [],
})

