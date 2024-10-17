const cacheName = "todoapp-offline";
const preCache = [
    './',
    './index.html',
    './src/master.css',
    './myscript.js',
    './manifest1.json'

]

self.addEventListener("install", e => {
    console.log("Se instalo");
    
    e.waitUntil(
        caches.open(cacheName).then(cache => cache.addAll(preCache))
    );
});

self.addEventListener('fetch', e=> {
    e.respondWith(
        caches.match(e.request).then(res => res || fetch(e.request))
    );
})