if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const n=e=>s(e,t),a={module:{uri:t},exports:o,require:n};i[t]=Promise.all(c.map((e=>a[e]||n(e)))).then((e=>(r(...e),o)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"favicon.ico",revision:"c92b85a5b907c70211f4ec25e29a8c4a"},{url:"index.html",revision:"88b1e423f57d51194f4e33950809bb97"},{url:"robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"},{url:"static/css/main.5e4f39f9.css",revision:"087cf6a4d0a83bc9caa8e6b447e9fcbe"},{url:"static/js/787.9740a43c.chunk.js",revision:"06a2101bb8cc67913a9cf4e54250f536"},{url:"static/js/main.457e807d.js",revision:"caa342f9980d41c84480a011eee2cef2"},{url:"static/js/main.457e807d.js.LICENSE.txt",revision:"b114cc85da504a772f040e3f40f8e46a"},{url:"static/media/countdown-map.d35710ff39d080e8dee0.jpg",revision:"41893cf1873812750dd366e84198ebff"},{url:"sw.js",revision:"01d466987450a8415ae74a81ddebcf5f"},{url:"workbox-d249b2c8.js",revision:"a2207807f7bb5e593e7abede626f75a5"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
