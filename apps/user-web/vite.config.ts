import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@dash/design-system": path.resolve(__dirname, "../../packages/design-system"),
            "@dash/ui": path.resolve(__dirname, "../../packages/ui"),
            "@dash/utils": path.resolve(__dirname, "../../packages/utils"),
        },
    },
});
