if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,c)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let r={};const t=e=>a(e,f),o={module:{uri:f},exports:r,require:t};i[f]=Promise.all(s.map((e=>o[e]||t(e)))).then((e=>(c(...e),r)))}}define(["./workbox-5e39d866"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"favicon.ico",revision:"c92b85a5b907c70211f4ec25e29a8c4a"},{url:"index.html",revision:"460e54abfcb903445375f6fe3ccfcfce"},{url:"robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"},{url:"static/css/main.6d28015a.css",revision:"ba02a6e236097126d960f95505560e83"},{url:"static/js/27.3925f260.chunk.js",revision:"af2db51238fbfc251ffae55fa95e5617"},{url:"static/js/main.1d757cde.js",revision:"519d0e0fa1f0080e6bcc531b8931eaa0"},{url:"static/js/main.1d757cde.js.LICENSE.txt",revision:"4ac31aa6140a175869d0f0402c6a38be"},{url:"static/media/edc_map.d35710ff39d080e8dee0.jpg",revision:"41893cf1873812750dd366e84198ebff"},{url:"static/media/eforest_map.3e2baaf4b9a38f4e4bd6.jpg",revision:"7385baf93ecc692dedc6ff24a29724ae"},{url:"sw.js",revision:"8badf1a6c0e98759f524d90fc118681b"},{url:"workbox-5e39d866.js",revision:"8a123acd698a9715bc8fe9342aa513f2"},{url:"workbox-61cfd03a.js",revision:"42f629accf06946dbcefaf44f6a165ad"},{url:"workbox-d249b2c8.js",revision:"a2207807f7bb5e593e7abede626f75a5"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/.*/,new e.StaleWhileRevalidate,"GET")}));
