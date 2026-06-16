self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Deixa a requisição passar direto para o Google Apps Script
});