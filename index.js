(()=>{"use strict";var e={76:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(601),r=n.n(a),i=n(314),o=n.n(i)()(r());o.push([e.id,'html{scroll-behavior:smooth;box-sizing:border-box;background:#3c3b3f;background:linear-gradient(to right, #605C3C, #3C3B3F);color:#fff;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;user-select:none}*,*:before,*:after{box-sizing:inherit}body{margin:0;padding:10px}a{color:#fff49d;text-decoration:inherit}ul{margin:0;list-style-type:none;display:flex;gap:10px;flex-wrap:wrap;font-weight:700}li,a{transition:.5s}li:hover,a:hover{cursor:pointer;transform:scale(1.1)}li:active,a:active{transform:scale(0.9);transition:.2s}header{display:flex;justify-content:center;align-items:center;height:40px}main{min-height:calc(100vh - 100px)}footer{display:flex;justify-content:space-between;align-items:center;height:40px}',""]);const s=o},69:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(601),r=n.n(a),i=n(314),o=n.n(i)()(r());o.push([e.id,".page{min-height:calc(100vh - 100px);display:flex;justify-content:center;align-items:center;opacity:0;animation:forwards 1s show}.image-pet{max-width:600px;width:100%;display:block;margin:auto}h2,p{text-align:center}@keyframes show{0%{opacity:0}100%{opacity:1}}",""]);const s=o},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);a&&o[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var i={},o=[],s=0;s<e.length;s++){var c=e[s],l=a.base?c[0]+a.base:c[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=n(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=r(m,a);a.byIndex=s,t.splice(s,0,{identifier:p,updater:h,references:1})}o.push(p)}return o}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=a(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var s=n(i[o]);t[s].references--}for(var c=a(e,r),l=0;l<i.length;l++){var d=n(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=c}}},659:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var i=t[a]={id:a,exports:{}};return e[a](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=a[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(72),t=n.n(e),a=n(825),r=n.n(a),i=n(659),o=n.n(i),s=n(56),c=n.n(s),l=n(540),d=n.n(l),p=n(113),u=n.n(p),m=n(76),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=o().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=d(),t()(m.A,h),m.A&&m.A.locals&&m.A.locals;var f=n(69),g={};g.styleTagTransform=u(),g.setAttributes=c(),g.insert=o().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=d(),t()(f.A,g),f.A&&f.A.locals&&f.A.locals,n.p;const v=document.createElement("div");v.classList.add("page"),v.innerHTML='\n  <div>\n    <img src="cat.png" alt="Cat" class="image-pet">\n    <h2>Cat</h2>\n    <p>A cat is a pet, one of the most popular “companion animals”. From the point of view of scientific taxonomy, the domestic cat is a member of the cat orders of predatory animals. Some researchers consider the domestic cat as a subspecies of the wild cat, others - as a separate biological species.</p>\n  </div>\n',n.p;const y=document.createElement("div");y.classList.add("page"),y.innerHTML='\n  <div>\n    <img src="dog.png" alt="Dog" class="image-pet">\n    <h2>Dog</h2>\n    <p>A dog is a pet and one of the most popular companion animals. The domestic dog was described as a distinct species of Canis familiaris by Linnaeus in 1758; this scientific name is now recognized by institutions such as the American Society of Breast Physicians.</p>\n  </div>\n',n.p;const b=document.createElement("div");b.classList.add("page"),b.innerHTML='\n  <div>\n    <img src="hamster.png" alt="Hamster" class="image-pet">\n    <h2>Hamster</h2>\n    <p>Hamsters are a subfamily of rodents of the hamster family. Includes 19 species belonging to seven genera. They have become popular pets. The most famous type of hamster is the golden or Syrian hamster, which is most often used as pets.</p>\n  </div>\n',n.p;const w=document.createElement("div");w.classList.add("page"),w.innerHTML='\n  <div>\n    <img src="rabbit.png" alt="Rabbit" class="image-pet">\n    <h2>Rabbit</h2>\n    <p>The domestic rabbit is a descendant of the wild rabbit, native to Western Europe and North Africa. Rabbits live in groups and reproduce very quickly. - Rabbits are herbivores and feed most actively at dusk or at night.</p>\n  </div>\n',n.p;const x=document.createElement("div");x.classList.add("page"),x.innerHTML='\n  <div>\n    <img src="raccoon.png" alt="Raccoon" class="image-pet">\n    <h2>Raccoon</h2>\n    <p>Raccoons are very freedom-loving animals. If you want to keep him as a pet, you will have to allocate a separate room for him. Raccoons also require 4-6 hours of attention per day, otherwise they will begin to destroy your home at night.    </p>\n  </div>\n';const T=document.createElement("div");T.classList.add("page"),T.innerHTML='\n  <div>\n    <h1>Test routing in SPA</h1>\n    <p>This application was created by <a href="https://github.com/yourunb">Yury Butskevich</a> for educational purposes, in order to understand and figure out how to implement routing in a single-page application using the github server.</p>\n  </div>\n';const L=document.createElement("header"),E=document.createElement("main"),M=document.createElement("footer");L.innerHTML='\n  <ul class="menu">\n    <li class="menu__item">Main</li>\n    <li class="menu__item">Cat</li>\n    <li class="menu__item">Dog</li>\n    <li class="menu__item">Hamster</li>\n    <li class="menu__item">Rabbit</li>\n    <li class="menu__item">Raccoon</li>\n  </ul>\n',M.innerHTML='\n  <span>2024</span>\n  <a href="https://github.com/yourunb">&copy; Yury Butskevich</a>\n',document.body.append(L,E,M);const A=new class{constructor(){this.routes=[],window.addEventListener("popstate",(()=>{this.route(window.location.pathname)}))}addRoute(e){this.routes.push(e)}route(e){for(const t of this.routes)if(t.path===e)return window.history.pushState({},"",e),void t.handler();console.log(`No handler found for ${e}`)}};A.addRoute({path:"/test-routing/",handler:()=>{E.innerHTML="",E.append(T)}}),A.addRoute({path:"/test-routing/cat",handler:()=>{E.innerHTML="",E.append(v)}}),A.addRoute({path:"/test-routing/dog",handler:()=>{E.innerHTML="",E.append(y)}}),A.addRoute({path:"/test-routing/hamster",handler:()=>{E.innerHTML="",E.append(b)}}),A.addRoute({path:"/test-routing/rabbit",handler:()=>{E.innerHTML="",E.append(w)}}),A.addRoute({path:"/test-routing/raccoon",handler:()=>{E.innerHTML="",E.append(x)}});const H=document.getElementsByClassName("menu__item");H[0].addEventListener("click",(()=>{A.route("/test-routing/")})),H[1].addEventListener("click",(()=>{A.route("/test-routing/cat")})),H[2].addEventListener("click",(()=>{A.route("/test-routing/dog")})),H[3].addEventListener("click",(()=>{A.route("/test-routing/hamster")})),H[4].addEventListener("click",(()=>{A.route("/test-routing/rabbit")})),H[5].addEventListener("click",(()=>{A.route("/test-routing/raccoon")}))})()})();