import sharedConfig from "../../packages/tailwind-config/tailwind.config.js";

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
    ],
    ...sharedConfig, // 공용 설정 병합
};
