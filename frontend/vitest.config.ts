import { defineConfig } from "vite";

export default defineConfig({
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: ['./setupTest.ts', './vitest.setup.mjs']
    },
    resolve: {
        alias: {
            '@': '/src',
            'components': '/src/components',
            'assets': '/src/assets',
            'lib': '/src/lib',
            'src/common': '/src/common'
        }
    }
});