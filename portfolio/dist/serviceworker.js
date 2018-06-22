const staticCacheName = 'porfolio-cache-v3';

self.addEventListener('install', event => {
  const toCache = [
    "/",
    "fontawesome.css",
    "bootstrap.css",
    "jquery.js",
    "particles.js",
    "bootstrap.js",
    "inline.bundle.js",
    "polyfills.bundle.js",
    "styles.bundle.js",
    "scripts.bundle.js",
    "vendor.bundle.js",
    "main.bundle.js",
    "https://fonts.googleapis.com/css?family=Cutive|Fira+Sans",
    "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css",
    "/assets/githubLogo.png",
    "/assets/linkdinLogo.png",
    "/assets/contactLogo.png",
    "intro2.8a1251b8dabfd45db5d0.jpg",
    "nav3.52628683c120d28fc552.jpg",
    "fonts/fontawesome-webfont.woff2?v=4.7.0",
    "/assets/particles.json",
    "fonts/fontawesome-webfont.woff?v=4.7.0",
    "fonts/fontawesome-webfont.ttf?v=4.7.0",
    "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css",
    "connect.58c62c375d170ee9ac97.jpg",
    "portfolio.787519d42b2dbe251c15.jpg",
    "resume.2090a3c1916e9154a2df.jpg",
    "https://api.github.com/users/roverkim/repos?sort=created",
    "/assets/northwestern.jpg",
    "/assets/uwm.jpg",
    "/assets/html.png",
    "/assets/css.png",
    "/assets/angular.png",
    "/assets/react.png",
    "/assets/node.png",
    "/assets/express.png",
    "https://fonts.googleapis.com/css?family=Cutive|Fira+Sans"
  ];

  event.waitUntil(caches.open(staticCacheName).then(cache => {
    toCache.forEach(link => cache.add(link));
  }))
});


self.addEventListener('activate', function(event) {
  event.waitUntil(caches.keys().then(function(cacheNames) {
    return Promise.all(cacheNames.filter(function(cacheName) {
      return cacheName.startsWith('porfolio-cache-') && cacheName != staticCacheName;
    }).map(function(cacheName) {
      return caches.delete(cacheName);
    }));
  }));
});

self.addEventListener('fetch', function(event) {
  if (event.request.method == "GET") {
    event.respondWith(caches.match(event.request.url).then(function(response) {

      return response || fetch(event.request.url).then(res => {
        return caches.open(staticCacheName).then(cache => {
          cache.put(new URL(event.request.url), res.clone());

          if (event.request.url == "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css") {
            return caches.match('bootstrap.css').then(result => result);
          }

          return res;
        })
      }).catch(err => {
        console.log('cache error:' + err);
      })
    }));
  }
});
