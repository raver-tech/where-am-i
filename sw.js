if(!self.define){let e,c={};const i=(i,s)=>(i=new URL(i+".js",s).href,c[i]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=c,document.head.appendChild(e)}else e=i,importScripts(i),c()})).then((()=>{let e=c[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(c[t])return;let a={};const o=e=>i(e,t),n={module:{uri:t},exports:a,require:o};c[t]=Promise.all(s.map((e=>n[e]||o(e)))).then((e=>(r(...e),a)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"favicon.ico",revision:"c92b85a5b907c70211f4ec25e29a8c4a"},{url:"index.html",revision:"85e77ab193eb1fa0bf85cac8db80728c"},{url:"robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"},{url:"static/css/main.5e4f39f9.css",revision:"087cf6a4d0a83bc9caa8e6b447e9fcbe"},{url:"static/js/787.9740a43c.chunk.js",revision:"06a2101bb8cc67913a9cf4e54250f536"},{url:"static/js/main.cf3fe7b9.js",revision:"68a899433ef456f46ccac3debd65d643"},{url:"static/js/main.cf3fe7b9.js.LICENSE.txt",revision:"b114cc85da504a772f040e3f40f8e46a"},{url:"static/media/countdown-map.732a13cb15dc02ed260b.jpg",revision:"77570ba1c4510c1090449adb06c28e20"},{url:"sw.js",revision:"655305e2d4f8cc3db681fc174c25c9a0"},{url:"workbox-d249b2c8.js",revision:"a2207807f7bb5e593e7abede626f75a5"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
