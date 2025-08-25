import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    root: 'src',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
    },
    server: {
        port: 3000,
        open: true
    },
    resolve: {
        alias: {
            '@': '/src',
            '@components': '/src/components',
            '@pages': '/src/pages',
            '@assets': '/src/assets',
            '@utils': '/src/utils',
            '@styles': '/src/styles',
            '@data': '/src/data'
        }
    },
    assetsInclude: ['**/*.pdf']
})