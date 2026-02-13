const CACHE_NAME = "jikki-cache-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./jikki.png",
  "./enemy.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
