const CACHE_NAME = 'bible-and-doctrine-explorer-cache-v1';
const ASSETS_TO_CACHE = [
  '/bible-and-doctrine-explorer/',
  '/bible-and-doctrine-explorer/index.html',
  '/bible-and-doctrine-explorer/manifest.json',
  '/bible-and-doctrine-explorer/icon-192x192.png',
  '/bible-and-doctrine-explorer/icon-512x512.png',
  'https://cdn.tailwindcss.com',
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Lora:wght@400;600&display=swap',
  'https://fonts.gstatic.com/s/inter/v13/UaZZyK-YwA7zN0bX-hT3p2Tf_w.woff2',
  'https://fonts.gstatic.com/s/lora/v28/0QI-WqHl5N2rF1-t60_2.woff2'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Opened cache and cached all assets');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if(response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
