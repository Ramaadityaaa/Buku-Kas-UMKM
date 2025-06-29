const CACHE_NAME = 'bukukas-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/transaksi.html',
  '/laporan.html',
  '/tentang.html',
  '/offline.html',
  '/css/style.css',
  '/js/app.js',
  '/js/transaksi.js',
  '/js/laporan.js',
  '/Icon.png'
];


self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request).then(response => {
        return response || caches.match('/offline.html');
      });
    })
  );
});
