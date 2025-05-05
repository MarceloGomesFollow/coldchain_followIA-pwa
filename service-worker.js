self.addEventListener('install', function (event) {
  console.log('[ServiceWorker] Instalando...');
  event.waitUntil(
    caches.open('coldchain-v1').then(function (cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/assets/icon-192.png',
        '/assets/icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
