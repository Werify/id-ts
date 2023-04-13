/// <reference types="vitest" />
// vite.config.ts
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
    test: {
        globals: true,
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'id-ts',
            fileName: 'id-ts',
        },
    },
    plugins: [dts()],
});