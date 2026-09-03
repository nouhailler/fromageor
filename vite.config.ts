/// <reference types="vitest/config" />
import { execSync } from 'node:child_process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

/** Identité du build, figée à la compilation et lisible dans l'application
 *  (écran Import / Export). Sans elle, impossible de dire à l'utilisateur
 *  quelle version tourne sur son téléphone ni de quand elle date. */
function buildCommit(): string {
  try {
    return execSync('git rev-parse --short HEAD', { encoding: 'utf8' }).trim()
  } catch {
    // Archive sans dépôt git, ou git absent de l'image de build : la date
    // du build suffit à identifier la version.
    return 'inconnu'
  }
}

// https://vite.dev/config/
export default defineConfig({
  define: {
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
    __BUILD_COMMIT__: JSON.stringify(buildCommit()),
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      // L'enregistrement est fait à la main dans src/pwa.ts, qui y greffe
      // les vérifications périodiques et le rechargement.
      injectRegister: null,
      includeAssets: ['favicon.svg', 'apple-touch-icon.png'],
      manifest: {
        name: 'Fromages de France',
        short_name: 'Fromageor',
        description: "Encyclopédie et guide de découverte des fromages français, région par région.",
        lang: 'fr',
        start_url: '/',
        display: 'standalone',
        background_color: '#f5ead8',
        theme_color: '#f5ead8',
        icons: [
          {
            src: 'pwa-icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any',
          },
          {
            src: 'pwa-icon-maskable.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'maskable',
          },
          // Repli PNG : iOS et certains lanceurs Android ignorent les icônes SVG.
          {
            src: 'pwa-icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'pwa-icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'pwa-icon-maskable-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,woff2}'],
        // Le site de documentation (docs-site/, généré à part par
        // scripts/build-docs.mjs dans dist/docs/) n'est pas l'application :
        // il ne doit jamais entrer dans le précache PWA...
        globIgnores: ['docs/**'],
        // ...ni être intercepté par le fallback SPA du service worker, qui
        // sinon sert le shell de l'application (index.html) à toute
        // navigation vers /docs/*, y compris sur un premier chargement direct.
        navigateFallbackDenylist: [/^\/docs\//],
      },
    }),
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
  },
})
