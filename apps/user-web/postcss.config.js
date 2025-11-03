import path from 'path';

const config = {
    plugins: {
        '@tailwindcss/postcss': {
            // process.cwd()는 현재 앱의 디렉토리(예: apps/user-web)를 나타냅니다.
            // '../..'를 사용하여 모노레포의 루트 디렉토리로 이동하여 스캔 범위를 확장합니다.
            base: path.join(process.cwd(), '../..'),
        },
        'autoprefixer': {}, // 필요한 경우
        // 다른 PostCSS 플러그인들...
    },
};

export default config;
