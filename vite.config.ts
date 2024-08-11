import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        ViteImageOptimizer({
            png: {
                quality: 100
            },
            jpeg: {
                quality: 100
            },
            jpg: {
                quality: 100
            },
            tiff: {
                quality: 100
            },
            cache: false,
            cacheLocation: undefined
        })
    ]
});
