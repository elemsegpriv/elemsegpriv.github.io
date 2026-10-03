/**
 * Service Worker: elemsegpriv-pwa-sw.js
 * Optimización de rendimiento para plataforma de seguridad privada corporativa.
 */

const CACHE_NAME = 'elemsegpriv-cache-v2'; // Incrementado para invalidar caché previo si es necesario

// Lista extendida e integral del App Shell básico
const APP_SHELL = [
  './',
  './index.html',
  './offline.html',
  './app.js'
];

// 1. Instalar de manera forzada y precargar componentes estáticos esenciales
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Precargando infraestructura corporativa...');
        return cache.addAll(APP_SHELL);
      })
      .then(() => self.skipWaiting()) // Fuerza al service worker actual a ser el activo inmediatamente
  );
});

// 2. Limpieza automática de versiones antiguas de caché (Evita cuellos de botella en almacenamiento)
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Eliminando caché obsoleta:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim()) // Toma control de todas las pestañas abiertas inmediatamente
  );
});

// 3. Estrategia avanzada de Fetch híbrida con manejo predictivo de Red y Offline
self.addEventListener('fetch', event => {
  // Ignorar peticiones que no sean HTTP o HTTPS (como extensiones del navegador o llamadas chrome-extension://)
  if (!event.request.url.startsWith('http')) return;

  // Filtrar exclusivamente peticiones de lectura (GET)
  if (event.request.method !== 'GET') {
    event.respondWith(fetch(event.request));
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(networkResponse => {
        // Validación técnica de la respuesta antes de guardarla
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }

        // Clonar la respuesta y actualizar la caché en segundo plano de forma asíncrona
        const responseToCache = networkResponse.clone();
        event.waitUntil(
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          })
        );

        return networkResponse;
      })
      .catch(() => {
        // CONTEXTO OFFLINE O FALLO DE RED: Buscar soluciones locales en la memoria caché
        return caches.match(event.request)
          .then(cachedResponse => {
            if (cachedResponse) {
              return cachedResponse;
            }

            // Si el usuario intentaba navegar a una página HTML, mostrar la interfaz de desconexión corporativa
            if (event.request.headers.get('accept')?.includes('text/html')) {
              return caches.match('./offline.html');
            }

            // Manejo de contingencia para imágenes rotas si es que aplica en tu diseño
            if (event.request.headers.get('accept')?.includes('image/')) {
              return new Response(
                '<svg role="img" aria-label="Offline" xmlns="http://w3.org" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2"><path d="M1 1l22 22M16.72 11.06A10.94 10.94 0 0 1 19 12.55M5 12.55a10.94 10.94 0 0 1 5.17-2.39M10.71 5.05A16 16 0 0 1 22 9M2 9a16 16 0 0 1 9.57-3.83"/></svg>', 
                { headers: { 'Content-Type': 'image/svg+xml' } }
              );
            }

            // Código de estado de contingencia HTTP normalizado
            return new Response('Servicio de Seguridad Temporalmente Desconectado.', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: new Headers({ 'Content-Type': 'text/plain; charset=utf-8' })
            });
          });
      })
  );
});
