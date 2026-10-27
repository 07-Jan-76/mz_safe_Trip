// Versão antiga instalada na raiz: desliga-se sozinha para não interferir com as apps em /minibus/ e /contas/
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>{e.waitUntil((async()=>{
  for(const k of await caches.keys())if(k==='minibus-v1')await caches.delete(k);
  await self.registration.unregister();
  for(const c of await self.clients.matchAll({type:'window'}))c.navigate(c.url);
})())});
