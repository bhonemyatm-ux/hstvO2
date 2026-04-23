// service-worker.js - Auto-shows offline.html on network loss
const CACHE_NAME = 'hst-offline-v1';
const OFFLINE_HTML = '/offline.html'; // Your offline page filename

// Install: Cache critical files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        OFFLINE_HTML,
        '/', 
        '/hstlogo.jpg'
      ]);
    })
  );
  self.skipWaiting();
});

// Fetch: Intercept requests, serve offline.html on failure
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      // Network failed - serve offline page for HTML requests
      if (event.request.destination === 'document') {
        return caches.match(OFFLINE_HTML);
      }
      return new Response('Offline', { status: 503 });
    })
  );
});

// Activate: Clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});
