import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        services: resolve(__dirname, 'services.html'),
        payment: resolve(__dirname, 'payment.html'),
        faq: resolve(__dirname, 'faq.html'),
        resources: resolve(__dirname, 'resources.html'),
        contact: resolve(__dirname, 'contact-us.html'),
        thankyou: resolve(__dirname, 'thank-you.html'),
        privacy: resolve(__dirname, 'privacy.html'),
      },
    },
  },
});
