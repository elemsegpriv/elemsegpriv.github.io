if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./service-worker.js') // ruta relativa, funciona en GitHub Pages
      .then(() => console.log('Service Worker registrado'))
      .catch(err => console.error('Error al registrar SW:', err));
  });
}
