ok some notes for this extention
 # Service workers
```npm install workbox-cli --save-dev```


# Create a Service Worker File:
- In your src directory, create a file named service-worker.js. This file will contain your service worker logic. 
- Here’s a simple example that caches resources:

```import { precacheAndRoute } from 'workbox-precaching';
self.__WB_MANIFEST = self.__WB_MANIFEST || [];
precacheAndRoute(self.__WB_MANIFEST);
```

# Configure Vite to Use the Service Worker: 
- Update your vite.config.js to include Workbox plugin:

``` import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { injectManifest } from 'workbox-build';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'custom-service-worker',
      apply: 'build',
      enforce: 'post',
      async generateBundle(_, bundle) {
        await injectManifest({
          swSrc: './src/service-worker.js',
          swDest: 'dist/service-worker.js',
          globDirectory: 'dist',
          globPatterns: ['**/*.{html,js,css,png,jpg}']
        });
      }
    }
  ]
});
```


# Register the Service Worker in Your React App: 
- Add the following code in your main entry file (usually index.js or main.jsx):

``` 
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('Service Worker registered with scope:', registration.scope);
    }).catch(error => {
      console.error('Service Worker registration failed:', error);
    });
  });
}

```

```
npm run build
npm run serve
```