import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import { compile } from './scripts/compile-templates.mjs';

export default defineConfig({
  plugins: [
    {
      name: 'compile-html-templates',
      buildStart() {
        compile();
      },
      handleHotUpdate({ file, server }) {
        if (file.endsWith('.html') && (file.includes('/src/') || file.includes('\\src\\'))) {
          console.log(`[Vite] Template changed: ${file}, re-compiling...`);
          compile();
          server.ws.send({
            type: 'full-reload',
            path: '*'
          });
        }
      }
    }
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
      '@lib': fileURLToPath(new URL('./src/lib', import.meta.url)),
    },
  },
  server: {
    open: false,
    host: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        arabic: fileURLToPath(new URL('./index-ar.html', import.meta.url)),
        about: fileURLToPath(new URL('./about.html', import.meta.url)),
        about_ar: fileURLToPath(new URL('./about-ar.html', import.meta.url)),
        services: fileURLToPath(new URL('./services.html', import.meta.url)),
        services_ar: fileURLToPath(new URL('./services-ar.html', import.meta.url)),
        blog: fileURLToPath(new URL('./blog.html', import.meta.url)),
        blog_ar: fileURLToPath(new URL('./blog-ar.html', import.meta.url)),
        designs: fileURLToPath(new URL('./designs.html', import.meta.url)),
        designs_ar: fileURLToPath(new URL('./designs-ar.html', import.meta.url)),
        faqs: fileURLToPath(new URL('./faqs.html', import.meta.url)),
        faqs_ar: fileURLToPath(new URL('./faqs-ar.html', import.meta.url)),
        prices: fileURLToPath(new URL('./prices.html', import.meta.url)),
        prices_ar: fileURLToPath(new URL('./prices-ar.html', import.meta.url)),
        contact: fileURLToPath(new URL('./contact.html', import.meta.url)),
        contact_ar: fileURLToPath(new URL('./contact-ar.html', import.meta.url)),
        create_store: fileURLToPath(new URL('./create-store.html', import.meta.url)),
        create_store_ar: fileURLToPath(new URL('./create-store-ar.html', import.meta.url)),
      },
    },
  },
});
