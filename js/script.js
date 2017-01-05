// Registra o Service Worker se estiver disponível no navegador
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('sw.js')
        .then(function() {
            console.log('Service Worker Registered');
        });
}
