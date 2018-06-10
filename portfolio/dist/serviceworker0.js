self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || () => {
        return caches.open('porfolio-cache-v1').then(function(cache) {
          cache.put(event.request);
          return fetch(event.request);
        })
      }
    })
  );
});
