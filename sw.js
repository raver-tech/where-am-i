if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let f={};const d=e=>a(e,r),t={module:{uri:r},exports:f,require:d};i[r]=Promise.all(s.map((e=>t[e]||d(e)))).then((e=>(c(...e),f)))}}define(["./workbox-f2ed2eb4"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"favicon.ico",revision:"c92b85a5b907c70211f4ec25e29a8c4a"},{url:"index.html",revision:"153551ee4a6c0549b71e1ac982f4d286"},{url:"robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"},{url:"static/css/61.2c7445b6.chunk.css",revision:"e25a6049f5e1ee23b0635109d4093158"},{url:"static/css/960.2c7445b6.chunk.css",revision:"e25a6049f5e1ee23b0635109d4093158"},{url:"static/css/main.dfcfb349.css",revision:"7d4bf6fe92e3a57085022979384aade7"},{url:"static/js/27.3925f260.chunk.js",revision:"af2db51238fbfc251ffae55fa95e5617"},{url:"static/js/61.fc28ccc6.chunk.js",revision:"cb7d81b506e1ab91fda60db1d0527604"},{url:"static/js/960.86247133.chunk.js",revision:"20adbaf930823cae998cac8228eb3503"},{url:"static/js/main.82d23705.js",revision:"093c20cff2728f90a18bd8b925bad6d3"},{url:"static/js/main.82d23705.js.LICENSE.txt",revision:"4ac31aa6140a175869d0f0402c6a38be"},{url:"static/media/edc_map.d35710ff39d080e8dee0.jpg",revision:"41893cf1873812750dd366e84198ebff"},{url:"static/media/eforest_map.3e2baaf4b9a38f4e4bd6.jpg",revision:"7385baf93ecc692dedc6ff24a29724ae"},{url:"static/media/forbidden_kingdom_map.fe799e427541546ef088.jpg",revision:"b5638cac3331b2158dd3f6678c62ecc9"},{url:"sw.js",revision:"39f625290de816951f2c08a5ba9000df"},{url:"workbox-5e39d866.js",revision:"8a123acd698a9715bc8fe9342aa513f2"},{url:"workbox-61cfd03a.js",revision:"42f629accf06946dbcefaf44f6a165ad"},{url:"workbox-d249b2c8.js",revision:"a2207807f7bb5e593e7abede626f75a5"},{url:"workbox-f2ed2eb4.js",revision:"072c3545eaa50dc6a93e75bfaaa6d3a0"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/.*/,new e.StaleWhileRevalidate,"GET"),e.initialize({parameterOverrides:{cd1:"offline"}})}));
