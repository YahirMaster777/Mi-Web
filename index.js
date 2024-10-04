if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW Registrado!!!");
        console.log(registration);
    }).catch(error => {
        console.log("SW no se puede registrar, falla critica !!");
        console.log(error);
    });
} else {
    console.warn("Service workers no son soportados en este navegador.");
}