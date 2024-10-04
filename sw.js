self.addEventListener("install", event => {
    console.log("Instalando!");
    // Puedes agregar lógica para caché aquí si es necesario
    e.waitUntil(
        // Aquí puedes manejar la caché de recursos si es necesario
        caches.open("static").then(cache =>{
            return cache.addAll("./", "./src/master.css", "./imagenes/logo192.png")
        } )
    );

    lf.addEventListener("fetch", e => {
        e.responseWith(
            caches.match(e.request).then(response =>{
                return response || fetch(e.request)
                ;})
        )
    })

});