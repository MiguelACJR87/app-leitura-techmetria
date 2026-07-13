const CACHE_NAME = 'techmetria-github-v1';
const ASSETS = ['./index.html', './manifest.json', './icon.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => {
      return caches.match(e.request).then(function(cached) {
        if (cached) return cached;
        return new Response('', { status: 302, headers: { 'Location': 'https://script.google.com/macros/s/AKfycbw-Dkp6-D6LRRikPuRc0dy3Um5tjH05-X8jcsfQDUFHMtDPDQPLkhCsSUxd5goKTeIz/exec' } });
      });
    })
  );
});
