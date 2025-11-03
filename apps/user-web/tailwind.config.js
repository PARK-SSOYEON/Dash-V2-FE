/** @type {import('tailwindcss').Config} */

import tailwindConfig from '@dash/tailwind-config/tailwind.config.js';

module.exports = {
    presets: [tailwindConfig],
    content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}',
        '../../packages/ui/src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
