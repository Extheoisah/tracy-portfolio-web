import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    {
      name: 'portfolio-artwork',
      transformIndexHtml(html) {
        return html.replace(/<!-- artwork: (mavapay|rently) -->/g, (_, name) =>
          readFileSync(new URL(`./src/artwork/${name}.html`, import.meta.url), 'utf8'),
        );
      },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        home: resolve('index.html'),
        mavapay: resolve('work/mavapay/index.html'),
        chaincode: resolve('work/chaincode/index.html'),
      },
    },
  },
});
