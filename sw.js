if(!self.define){let e,i={};const c=(c,s)=>(c=new URL(c+".js",s).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let t={};const o=e=>c(e,r),n={module:{uri:r},exports:t,require:o};i[r]=Promise.all(s.map((e=>n[e]||o(e)))).then((e=>(a(...e),t)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"favicon.ico",revision:"c92b85a5b907c70211f4ec25e29a8c4a"},{url:"index.html",revision:"1296582cfcae9bfd0a952e473315f16a"},{url:"robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"},{url:"static/css/main.5e4f39f9.css",revision:"087cf6a4d0a83bc9caa8e6b447e9fcbe"},{url:"static/js/787.9740a43c.chunk.js",revision:"06a2101bb8cc67913a9cf4e54250f536"},{url:"static/js/main.a7d8b80b.js",revision:"95a36f3ae36671b93cf53c28d6a7b9e8"},{url:"static/js/main.a7d8b80b.js.LICENSE.txt",revision:"b114cc85da504a772f040e3f40f8e46a"},{url:"static/media/countdown-map.732a13cb15dc02ed260b.jpg",revision:"77570ba1c4510c1090449adb06c28e20"},{url:"sw.js",revision:"0794d4d2a6c012983de6e18d181ba0e0"},{url:"workbox-d249b2c8.js",revision:"a2207807f7bb5e593e7abede626f75a5"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
