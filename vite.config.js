import { fileURLToPath, URL } from 'node:url'

import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    VitePWA({
      registerType: 'autoUpdate',

      includeAssets: ['favicon.ico', 'apple-touch-icon-180x180.png', 'maskable-icon-512x512.png'],

      manifest: {
        name: 'Notidy',

        short_name: 'Notidy',

        description: 'A PWA example for notification',

        theme_color: '#1ba13f',

        icons: [
          {
            src: 'pwa-64x64.png',

            sizes: '64x64',

            type: 'image/png',
          },
          {
            src: 'pwa-192x192.png',

            sizes: '192x192',

            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',

            sizes: '512x512',

            type: 'image/png',

            purpose: 'any',
          },
          {
            src: 'maskable-icon-512x512.png',

            sizes: '512x512',

            type: 'image/png',

            purpose: 'maskable',
          },
        ],
      },

      // devOptions: {
      //   enabled: true,
      // },
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
