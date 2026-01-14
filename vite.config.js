import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Custom plugin to inline CSS
const cssInliner = () => {
  return {
    name: 'css-inliner',
    apply: 'build',
    enforce: 'post',
    transformIndexHtml: {
      enforce: 'post',
      transform(html, { bundle }) {
        const cssFile = Object.keys(bundle).find(key => key.endsWith('.css'));
        if (!cssFile) return html;

        const cssContent = bundle[cssFile].source;
        // Remove the link tag
        const htmlWithoutLink = html.replace(/<link[^>]+href="\/assets\/[^"]+\.css"[^>]*>/, '');

        // Inject style tag
        return htmlWithoutLink.replace(
          '</head>',
          `<style>${cssContent}</style></head>`
        );
      }
    },
    generateBundle(opts, bundle) {
      // Optional: remove the css file from the bundle if we don't want it emitted at all
      // But keeping it is safer for debugging/caching fallback
      // const cssFile = Object.keys(bundle).find(key => key.endsWith('.css'));
      // if (cssFile) delete bundle[cssFile];
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cssInliner()],
  server: {
    allowedHosts: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json']
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  build: {
    sourcemap: true,
    cssCodeSplit: false, // Ensure single CSS file for easier inlining
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['framer-motion', 'lucide-react', 'clsx', 'tailwind-merge']
        }
      }
    }
  },
}) 