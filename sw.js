if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let t={};const o=e=>s(e,r),n={module:{uri:r},exports:t,require:o};i[r]=Promise.all(c.map((e=>n[e]||o(e)))).then((e=>(a(...e),t)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"favicon.ico",revision:"c92b85a5b907c70211f4ec25e29a8c4a"},{url:"index.html",revision:"88df2d2f6842b31897ba48a07d435c3f"},{url:"robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"},{url:"static/css/main.5e4f39f9.css",revision:"087cf6a4d0a83bc9caa8e6b447e9fcbe"},{url:"static/js/787.9740a43c.chunk.js",revision:"06a2101bb8cc67913a9cf4e54250f536"},{url:"static/js/main.50d6ea30.js",revision:"9e5f8624a90b521fb4deea1acac8a260"},{url:"static/js/main.50d6ea30.js.LICENSE.txt",revision:"b114cc85da504a772f040e3f40f8e46a"},{url:"static/media/countdown-map.732a13cb15dc02ed260b.jpg",revision:"77570ba1c4510c1090449adb06c28e20"},{url:"sw.js",revision:"991d59fdde0397b41af9fb6542e25076"},{url:"workbox-d249b2c8.js",revision:"a2207807f7bb5e593e7abede626f75a5"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
