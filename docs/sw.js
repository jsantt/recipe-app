if(!self.define){let e,t={};const i=(i,n)=>(i=new URL(i+".js",n).href,t[i]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=t,document.head.appendChild(e)}else e=i,importScripts(i),t()})).then((()=>{let e=t[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(t[r])return;let s={};const c=e=>i(e,r),l={module:{uri:r},exports:s,require:c};t[r]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(o(...e),s)))}}define(["./workbox-a523fd56"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"6f704d45.js",revision:"bcb18ea775c4720805f72eac755017f8"},{url:"index.html",revision:"1ed8f63f948d418b21ac908ecbc556e8"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"))),e.registerRoute("polyfills/*.js",new e.CacheFirst,"GET")}));
//# sourceMappingURL=sw.js.map
