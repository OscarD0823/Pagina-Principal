const scopeURL = new URL(self.registration.scope);
const cachePrefix = `oscar-project-portal:${scopeURL.pathname}:`;
const cacheName = `${cachePrefix}20261020-classic-strategy-2`;
const assetPaths = [
  'index.html',
  'assets/stories-logo.svg',
  'assets/auralis-fortuna.svg',
  'assets/auralis-phantom.svg',
  'assets/auralis-snowrunner.svg',
  'assets/auralis-roadcraft.svg',
  'assets/auralis-lankdea.svg',
  'assets/auralis-frontier.svg',
  'assets/auralis-frontier-v14-preview.png',
  'assets/auralis-wars.svg',
  'assets/auralis-empires.svg',
  'assets/auralis-wars-preview.png',
  'assets/auralis-empires-preview.png',
  'styles.css',
  'animations.js',
  'pwa.js',
  'favicon.svg',
  'manifest.webmanifest',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/maskable-512.png',
  'icons/apple-touch-icon.png',
  'assets/phantom-crate.webp',
  'assets/snow-truck.webp',
  'assets/road-machine.webp',
  'assets/lankdea-cofre.webp',
  'assets/pdf-logo.svg', 'assets/prisma-logo.svg', 'assets/writer-logo.svg', 'assets/sheets-logo.svg',
  'assets/slides-logo.svg', 'assets/data-logo.svg', 'assets/publisher-logo.svg', 'assets/architecture-logo.svg', 'assets/architecture-preview.svg'
];
const assetURLs = assetPaths.map((path) => new URL(path, scopeURL).href);
const assetSet = new Set(assetURLs);
const indexURL = new URL('index.html', scopeURL).href;

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    await cache.addAll(assetURLs.map((url) => new Request(url, { cache: 'reload' })));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    // Other projects share the github.io origin: never remove their caches.
    const keys = await caches.keys();
    await Promise.all(keys.filter((key) => key.startsWith(cachePrefix) && key !== cacheName)
      .map((key) => caches.delete(key)));
    await self.clients.claim();
  })());
});

async function networkWithCache(request, cacheKey) {
  const cache = await caches.open(cacheName);
  try {
    const response = await fetch(request);
    if (response.ok && response.type === 'basic') {
      await cache.put(cacheKey, response.clone());
      return response;
    }
    return (await cache.match(cacheKey)) || response;
  } catch (error) {
    const cached = await cache.match(cacheKey);
    if (cached) return cached;
    throw error;
  }
}

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== scopeURL.origin || !url.pathname.startsWith(scopeURL.pathname)) return;

  // Versioned CSS/JS and unversioned precache entries refer to the same asset.
  url.search = '';
  const isHome = url.href === scopeURL.href || url.href === indexURL;
  if (event.request.mode === 'navigate' && isHome) {
    event.respondWith(networkWithCache(event.request, indexURL));
  } else if (assetSet.has(url.href)) {
    event.respondWith(networkWithCache(event.request, url.href));
  }
});
