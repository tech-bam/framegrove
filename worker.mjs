export default {
 async fetch(request, env) {
  const url=new URL(request.url);
  if(url.hostname==='bamstudio.dev' || url.hostname==='www.bamstudio.dev') {
   const prefix='/web/store-mockup';
   if(url.pathname.startsWith(prefix)) {
    const relative=url.pathname.slice(prefix.length)||'/';
    // Preserve same-origin IndexedDB projects for people opening the old editor.
    if(relative.startsWith('/app/') || relative.startsWith('/engine/') || relative==='/common.js' || relative==='/site.css' || relative==='/fonts.css') {
     url.pathname=relative;
     return env.ASSETS.fetch(new Request(url,request));
    }
    url.hostname='framegrove.bamstudio.dev';url.pathname=relative;
    return Response.redirect(url.toString(),308);
   }
  }
  return env.ASSETS.fetch(request);
 }
};
