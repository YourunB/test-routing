(()=>{"use strict";var e={76:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(601),a=n.n(r),o=n(314),i=n.n(o)()(a());i.push([e.id,'html{scroll-behavior:smooth;box-sizing:border-box;background:#3c3b3f;background:linear-gradient(to right, #605C3C, #3C3B3F);color:#fff;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif}*,*:before,*:after{box-sizing:inherit}body{margin:0;padding:10px}a{color:inherit;text-decoration:inherit}ul{margin:0;list-style-type:none;display:flex;gap:10px;flex-wrap:wrap;font-weight:700}header{display:flex;justify-content:center;align-items:center;height:40px}main{min-height:calc(100vh - 100px)}footer{display:flex;justify-content:space-between;align-items:center;height:40px}',""]);const s=i},69:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(601),a=n.n(r),o=n(314),i=n.n(o)()(a());i.push([e.id,".page{min-height:calc(100vh - 100px);display:flex;justify-content:center;align-items:center}.image-pet{max-width:600px;width:100%;display:block;margin:auto}h2,p{text-align:center}",""]);const s=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var p=[].concat(e[l]);r&&i[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),t.push(p))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],p=o[l]||0,d="".concat(l," ").concat(p);o[l]=p+1;var u=n(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var h=a(f,r);r.byIndex=s,t.splice(s,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=n(o[i]);t[s].references--}for(var c=r(e,a),l=0;l<o.length;l++){var p=n(o[l]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}o=c}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(72),t=n.n(e),r=n(825),a=n.n(r),o=n(659),i=n.n(o),s=n(56),c=n.n(s),l=n(540),p=n.n(l),d=n(113),u=n.n(d),f=n(76),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=p(),t()(f.A,h),f.A&&f.A.locals&&f.A.locals;var m=n(69),g={};g.styleTagTransform=u(),g.setAttributes=c(),g.insert=i().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),t()(m.A,g),m.A&&m.A.locals&&m.A.locals,n.p;const v=document.createElement("div");v.classList.add("page"),v.innerHTML='\n  <div>\n    <img src="cat.png" alt="Cat" class="image-pet">\n    <h2>Cat</h2>\n    <p>A cat is a pet, one of the most popular “companion animals”. From the point of view of scientific taxonomy, the domestic cat is a member of the cat orders of predatory animals. Some researchers consider the domestic cat as a subspecies of the wild cat, others - as a separate biological species.</p>\n  </div>\n',n.p;const y=document.createElement("div");y.classList.add("page"),y.innerHTML='\n  <div>\n    <img src="dog.png" alt="Dog" class="image-pet">\n    <h2>Dog</h2>\n    <p>A dog is a pet and one of the most popular companion animals. The domestic dog was described as a distinct species of Canis familiaris by Linnaeus in 1758; this scientific name is now recognized by institutions such as the American Society of Breast Physicians.</p>\n  </div>\n';const b=document.createElement("header"),x=document.createElement("main"),w=document.createElement("footer");b.innerHTML='\n  <ul>\n    <li><a href="">Main</a></li>\n    <li><a href="/cat">Cat</a></li>\n    <li><a href="/dog">Dog</a></li>\n    <li><a href="">Hamster</a></li>\n    <li><a href="">Rabbit</a></li>\n    <li><a href="">Raccoon</a></li>\n  </ul>\n',w.innerHTML='\n  <span>2024</span>\n  <a href="https://github.com/yourunb">&copy; Yury Butskevich</a>\n',document.body.append(b,x,w);const A=new class{constructor(){this.routes=[],window.addEventListener("popstate",(()=>{this.route(window.location.pathname)}))}addRoute(e){this.routes.push(e)}route(e){for(const t of this.routes)if(t.path===e)return window.history.pushState({},"",e),void t.handler();console.log(`No handler found for ${e}`)}};A.addRoute({path:"/cat",handler:()=>{x.innerHTML="",x.append(v),console.log("Cat page")}}),A.addRoute({path:"/dog",handler:()=>{x.innerHTML="",x.append(y),console.log("Dog page")}}),b.addEventListener("click",(()=>{A.route("/dog")})),w.addEventListener("click",(()=>{A.route("/cat")}))})()})();