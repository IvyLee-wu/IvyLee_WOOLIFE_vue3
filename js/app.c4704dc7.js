(function(e){function t(t){for(var n,o,s=t[0],i=t[1],u=t[2],d=0,f=[];d<s.length;d++)o=s[d],r[o]&&f.push(r[o][0]),r[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);h&&h(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,o=1;o<a.length;o++){var s=a[o];0!==r[s]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},o={app:0},r={app:0},c=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0da243fb":"5d317ed6","chunk-44fd862a":"9c93d396","chunk-4dd23972":"883aa3f5","chunk-4f98ea13":"6ab522d9","chunk-54167844":"f4afe883","chunk-61ee987e":"3e90b860","chunk-60cf41f5":"03dd1058","chunk-7f4660ff":"5a100b63","chunk-6b5086cd":"0f4960d8","chunk-a714e540":"29157ada","chunk-bca3177e":"d4b27569"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a={"chunk-0da243fb":1,"chunk-44fd862a":1,"chunk-4dd23972":1,"chunk-4f98ea13":1,"chunk-54167844":1,"chunk-61ee987e":1,"chunk-60cf41f5":1,"chunk-7f4660ff":1,"chunk-6b5086cd":1,"chunk-a714e540":1,"chunk-bca3177e":1};o[e]?t.push(o[e]):0!==o[e]&&a[e]&&t.push(o[e]=new Promise(function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-0da243fb":"aefecd63","chunk-44fd862a":"5c2089b4","chunk-4dd23972":"b518ce4a","chunk-4f98ea13":"bbc3ecca","chunk-54167844":"ba37128f","chunk-61ee987e":"bf1cea1a","chunk-60cf41f5":"51e43f6b","chunk-7f4660ff":"d1fddcf8","chunk-6b5086cd":"338e70eb","chunk-a714e540":"18d22129","chunk-bca3177e":"b58d6846"}[e]+".css",r=i.p+n,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===n||d===r))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],d=u.getAttribute("data-href");if(d===n||d===r)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var n=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete o[e],h.parentNode.removeChild(h),a(c)},h.href=r;var l=document.getElementsByTagName("head")[0];l.appendChild(h)}).then(function(){o[e]=0}));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise(function(t,a){n=r[e]=[t,a]});t.push(n[2]=c);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=s(e),u=function(t){d.onerror=d.onload=null,clearTimeout(f);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+n+": "+o+")");c.type=n,c.request=o,a[1](c)}r[e]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/IvyLee_WOOLIFE_vue3/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var h=d;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),o=a("2f62"),r=a("bc3a"),c=a.n(r),s=a("a7fe"),i=a.n(s),u=a("9062"),d=a.n(u),f=(a("e40d"),a("4989"),a("7bb1")),h=a("427f"),l=a.n(h),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},m=[],g={name:"App"},v=g,b=(a("5c0b"),a("2877")),k=Object(b["a"])(v,p,m,!1,null,null,null),S=k.exports,E=a("8c4f");n["a"].use(E["a"]);var O=new E["a"]({linkExactActiveClass:"active",routes:[{path:"*",redirect:"/"},{path:"/login",name:"login",component:function(){return a.e("chunk-a714e540").then(a.bind(null,"a55b"))}},{path:"/admin",component:function(){return a.e("chunk-6b5086cd").then(a.bind(null,"7277"))},children:[{path:"productsmanage",name:"ProductsManage",component:function(){return a.e("chunk-bca3177e").then(a.bind(null,"9226"))},meta:{requiresAuth:!0}},{path:"couponsmanage",name:"CouponsManage",component:function(){return a.e("chunk-4f98ea13").then(a.bind(null,"1d67"))},meta:{requiresAuth:!0}},{path:"ordersmanage",name:"OrdersManage",component:function(){return a.e("chunk-54167844").then(a.bind(null,"5714"))},meta:{requiresAuth:!0}}]},{path:"/",component:function(){return a.e("chunk-44fd862a").then(a.bind(null,"88e9"))},children:[{path:"/",name:"Home",component:function(){return a.e("chunk-0da243fb").then(a.bind(null,"a685"))}},{path:"productslist",name:"ProductsList",component:function(){return Promise.all([a.e("chunk-61ee987e"),a.e("chunk-60cf41f5")]).then(a.bind(null,"4cdc"))}},{path:"productslist/:productId",name:"Product",component:function(){return Promise.all([a.e("chunk-61ee987e"),a.e("chunk-7f4660ff")]).then(a.bind(null,"3c46"))}},{path:"createorder",name:"CreateOrder",component:function(){return a.e("chunk-4dd23972").then(a.bind(null,"1eae"))}}]}]}),M=(a("ac6a"),{namespaced:!0,state:{products:[]},actions:{getProducts:function(e,t){var a,n=t.isPagination,o=t.page;a=n?"".concat("https://vue-course-api.hexschool.io","/api/").concat("hedera9130","/admin/products?page=").concat(o):"".concat("https://vue-course-api.hexschool.io","/api/").concat("hedera9130","/products/all"),e.commit("LOADING",!0,{root:!0}),c.a.get(a).then(function(t){t.data.success?(e.commit("PRODUCTS",t.data.products),n&&e.commit("PAGINATION",t.data.pagination,{root:!0}),e.rootState.favoriteModules.favoritesLength&&e.state.products.forEach(function(t,a){e.rootState.favoriteModules.favorites.forEach(function(n){t.id===n.id&&e.commit("UPDATEPRODUCTS",{index:a,isFavorite:!0})})})):e.dispatch("alertMessageModules/updateMessage",{message:t.data.message,status:"danger"},{root:!0}),e.commit("LOADING",!1,{root:!0})})}},mutations:{PRODUCTS:function(e,t){e.products=t},UPDATEPRODUCTS:function(e,t){var a=t.index,o=t.isFavorite;n["a"].set(e.products[a],"is_favorite",o)}},getters:{products:function(e){return e.products}}}),A={namespaced:!0,state:{carts:{},cartsLength:0,isCartShow:!1},actions:{getCart:function(e){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("hedera9130","/cart");c.a.get(t).then(function(t){e.commit("CART",t.data.data),e.commit("CART_LENGTH",t.data.data.carts.length)})},addToCart:function(e,t){var a=t.id,n=t.qty,o="".concat("https://vue-course-api.hexschool.io","/api/").concat("hedera9130","/cart"),r={product_id:a,qty:n};e.commit("LOADING",!0,{root:!0}),c.a.post(o,{data:r}).then(function(t){e.dispatch("getCart"),t.data.success?(e.dispatch("showCart"),e.dispatch("alertMessageModules/updateMessage",{message:t.data.message,status:"success"},{root:!0})):e.dispatch("alertMessageModules/updateMessage",{message:t.data.message,status:"danger"},{root:!0}),e.commit("LOADING",!1,{root:!0})})},removeCartItem:function(e,t){var a="".concat("https://vue-course-api.hexschool.io","/api/").concat("hedera9130","/cart/").concat(t);e.commit("LOADING",!0,{root:!0}),c.a.delete(a).then(function(t){e.dispatch("getCart"),e.dispatch("alertMessageModules/updateMessage",{message:t.data.message,status:"warning"},{root:!0}),e.commit("LOADING",!1,{root:!0})})},showCart:function(e){e.commit("ISCART_SHOW",!0),setTimeout(function(){e.commit("ISCART_SHOW",!1)},5e3)}},mutations:{CART:function(e,t){e.carts=t},CART_LENGTH:function(e,t){e.cartsLength=t},ISCART_SHOW:function(e,t){e.isCartShow=t}},getters:{carts:function(e){return e.carts},cartsLength:function(e){return e.cartsLength},isCartShow:function(e){return e.isCartShow}}},T=a("75fc"),L={namespaced:!0,state:{messages:[]},actions:{updateMessage:function(e,t){var a=t.message,n=t.status,o=Math.floor(new Date/1e3);e.commit("PUSH_MESSAGE",{message:a,status:n,timestamp:o}),e.dispatch("removeMessageWithTiming",o)},removeMessage:function(e){e.commit("REMOVE_MESSAGE")},removeMessageWithTiming:function(e,t){var a=Object(T["a"])(e.state.messages);setTimeout(function(){a.forEach(function(a,n){a.timestamp===t&&e.commit("REMOVE_MESSAGE",n)})},1500)}},mutations:{PUSH_MESSAGE:function(e,t){e.messages.push(t)},REMOVE_MESSAGE:function(e,t){e.messages.splice(t,1)}},getters:{messages:function(e){return e.messages}}},y={namespaced:!0,state:{favorites:{},favoritesLength:0},actions:{getFavorite:function(e){var t=JSON.parse(localStorage.getItem("favoriteData"))||[];e.commit("FAVORITES",t),e.commit("FAVORITES_LENGTH",t.length),e.dispatch("productsModules/getProducts",{isPagination:!1},{root:!0})},addToFavorite:function(e,t){var a={id:t.id,title:t.title};e.commit("PUSH_FAVORITE",a),localStorage.setItem("favoriteData",JSON.stringify(e.state.favorites)),e.dispatch("getFavorite"),e.dispatch("alertMessageModules/updateMessage",{message:"已加入我的最愛",status:"success"},{root:!0})},removeFavorite:function(e,t){var a=t.favoriteItem,n=t.delall;n?localStorage.removeItem("favoriteData"):(e.commit("REMOVE_FAVORITE",a),localStorage.setItem("favoriteData",JSON.stringify(e.state.favorites))),e.dispatch("getFavorite"),e.dispatch("alertMessageModules/updateMessage",{message:"已刪除我的最愛",status:"warning"},{root:!0})}},mutations:{FAVORITES:function(e,t){e.favorites=t},FAVORITES_LENGTH:function(e,t){e.favoritesLength=t},PUSH_FAVORITE:function(e,t){e.favorites.push(t)},REMOVE_FAVORITE:function(e,t){e.favorites.forEach(function(a,n){a.id===t.id&&e.favorites.splice(n,1)})}},getters:{favorites:function(e){return e.favorites},favoritesLength:function(e){return e.favoritesLength}}};n["a"].use(o["a"]);var I=new o["a"].Store({strict:!0,state:{isLoading:!1,pagination:{}},actions:{updateLoading:function(e,t){e.commit("LOADING",t)}},mutations:{LOADING:function(e,t){e.isLoading=t},PAGINATION:function(e,t){e.pagination=t}},getters:{isLoading:function(e){return e.isLoading},pagination:function(e){return e.pagination}},modules:{productsModules:M,cartModules:A,alertMessageModules:L,favoriteModules:y}});n["a"].prototype.$bus=new n["a"];a("a481"),a("c5f6");var _=function(e){var t=Number(e);return"$".concat(t.toFixed(0).replace(/./g,function(e,t,a){var n=t&&"."!==e&&(a.length-t)%3===0?", ".concat(e).replace(/\s/g,""):e;return n}))},C=function(e){var t=new Date(1e3*e);return t.toLocaleDateString()};n["a"].config.productionTip=!1,n["a"].use(i.a,c.a),n["a"].use(o["a"]),f["a"].Validator.localize("zh_TW",l.a),n["a"].use(f["a"],{locale:"zh_TW"}),n["a"].component("Loading",d.a),n["a"].filter("currency",_),n["a"].filter("date",C),c.a.defaults.withCredentials=!0,new n["a"]({router:O,store:I,render:function(e){return e(S)}}).$mount("#app"),O.beforeEach(function(e,t,a){if(e.meta.requiresAuth){var n="".concat("https://vue-course-api.hexschool.io","/api/user/check");c.a.post(n).then(function(e){e.data.success?a():a({path:"/login"})})}else a()})},"5c0b":function(e,t,a){"use strict";var n=a("5e27"),o=a.n(n);o.a},"5e27":function(e,t,a){}});
//# sourceMappingURL=app.c4704dc7.js.map