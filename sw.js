var CACHE_NAME = 'service-worker_091116';
var CACHE_FILES = [];

self.addEventListener('install', function(event){
  console.log('[Service-Worker] Install');
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache){
      return fetch('js/files_to_cache.json')
      .then(function(response){
        return response.json()
        .then(function(file){
          CACHE_FILES = file;
          return cache.addAll(CACHE_FILES);
        });
      });
    })
  );
});

self.addEventListener('fetch', function(event){
  event.respondWith(
    caches.match(event.request)
    .then(function(response){
      if (response) {
        return response
      }else{
        return fetch(event.request)
      }
    })
  );
});
