(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f4660ff"],{"1ef5":function(t,a,e){"use strict";var s=e("957b"),i=e.n(s);i.a},"3c46":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"container"},[s("BannerSider"),s("nav",{attrs:{"aria-label":"breadcrumb"}},[s("ol",{staticClass:"breadcrumb bg-light"},[s("li",{staticClass:"breadcrumb-item"},[s("router-link",{attrs:{to:"/"}},[t._v("首頁")])],1),s("li",{staticClass:"breadcrumb-item"},[s("router-link",{attrs:{to:"/productslist"}},[t._v("產品列表")])],1),s("li",{staticClass:"breadcrumb-item"},[s("router-link",{staticClass:"text-primary",attrs:{to:{path:"/productsList",query:{category:t.product.category}}}},[t._v(t._s(t.product.category))])],1),s("li",{staticClass:"breadcrumb-item active"},[t._v("\n        "+t._s(t.product.title)+"\n      ")])])]),s("div",{staticClass:"row mb-3"},[s("div",{staticClass:"col-md-4 mb-3"},[s("div",{staticClass:"sticky-top clearfix",staticStyle:{top:"10px"}},[s("h1",{staticClass:"h3 text-primary"},[t._v(" "+t._s(t.product.title)+" ")]),t.product.origin_price!==t.product.price?s("div",{staticClass:"d-flex align-items-baseline"},[s("del",{staticClass:"text-muted"},[t._v("售價："+t._s(t._f("currency")(t.product.origin_price)))]),s("div",{staticClass:"ml-auto mb-0 h5 text-danger"},[s("small",[t._v("特價：")]),s("strong",[t._v(t._s(t._f("currency")(t.product.price)))])])]):t._e(),t.product.origin_price==t.product.price?s("div",{staticClass:"d-flex align-items-baseline"},[s("div",{staticClass:"ml-auto mb-0 h5"},[s("small",[t._v("售價：")]),s("strong",[t._v(t._s(t._f("currency")(t.product.price)))])])]):t._e(),s("hr"),s("ul",{staticClass:"product-summary"},[t._m(0),t._m(1),s("li",[s("a",{staticClass:"btn btn-link p-0",class:{"d-none":t.isFavorite},attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.addFavorite(t.product)}}},[s("i",{staticClass:"fas fa-heart"}),t._v(" 收藏商品\n            ")]),s("a",{staticClass:"btn btn-link p-0",class:{"d-none":!t.isFavorite},attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.removeFavorite(t.product,!1)}}},[s("i",{staticClass:"fas fa-heart-broken"}),t._v(" 取消收藏\n            ")])])]),s("hr"),s("div",{staticClass:"input-group addcart"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.qty,expression:"qty"}],staticClass:"form-control",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){var a="_value"in t?t._value:t.value;return a});t.qty=a.target.multiple?e:e[0]}}},[s("option",{attrs:{value:"0",disabled:"",selected:""}},[t._v("請選擇數量")]),t._l(15,function(a){return s("option",{key:a,domProps:{value:a}},[t._v("\n              "+t._s(a)+" "+t._s(t.product.unit)+"\n            ")])})],2),s("button",{staticClass:"btn btn-primary",on:{click:function(a){return a.preventDefault(),t.addToCart(t.qty)}}},[s("i",{staticClass:"fas fa-plus"}),t._v("\n            加入購物車\n          ")])])])]),s("div",{staticClass:"col-md-8 product-content"},[s("img",{staticClass:"img-fluid",attrs:{src:t.product.imageUrl}}),s("h3",[t._v("商品介紹")]),s("p",[t._v(t._s(t.product.description))]),s("img",{staticClass:"img-fluid",attrs:{src:e("528c")}}),s("p",[t._v("\n        Lorem ipsum dolor sit amet consectetur adipisicing elit.\n        Pariatur doloribus, laudantium hic perferendis necessitatibus dolorem ipsam\n      ")]),s("img",{staticClass:"img-fluid",attrs:{src:e("eefe")}}),s("p",[t._v("\n        Lorem ipsum dolor sit amet consectetur adipisicing elit.\n        Quibusdam rem sed vitae facilis modi maxime veniam similique eveniet.\n      ")]),t._m(2)])]),t._m(3),t._m(4)],1)])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("button",{staticClass:"btn btn-link p-0",attrs:{type:"button","data-toggle":"modal","data-target":"#sizeModalCenter"}},[e("i",{staticClass:"fas fa-ruler-horizontal"}),t._v(" 尺寸\n            ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("button",{staticClass:"btn btn-link p-0",attrs:{type:"button","data-toggle":"modal","data-target":"#tryonModalCenter"}},[e("i",{staticClass:"fas fa-tshirt"}),t._v(" 試穿報告\n            ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"alert-secondary mt-5 p-3",attrs:{role:"alert"}},[e("h4",{staticClass:"text-center"},[t._v("購物說明")]),e("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, at! Totam, exercitationem repellat. Saepe facere\n          amet expedita perferendis voluptatem dicta dignissimos tempora ut atque, rerum doloribus? Magni, blanditiis.\n          Assumenda, distinctio!")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"modal fade",attrs:{id:"sizeModalCenter",tabindex:"-1",role:"dialog","aria-labelledby":"sizeModalCenterTitle","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered modal-lg",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header pb-0 border-0"},[s("button",{staticClass:"close p-2",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),s("div",{staticClass:"modal-body pt-0 text-center"},[s("h5",{staticClass:"mb-4"},[t._v("產品尺寸")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6 col-12"},[s("div",{staticClass:"table-responsive"},[s("div",{staticClass:"table d-table"},[s("thead",[s("tr",[s("th",[t._v("尺碼")]),s("th",[t._v("胸寬")]),s("th",[t._v("腰寬")]),s("th",[t._v("全長")])])]),s("tbody",[s("tr",[s("th",[t._v("S")]),s("td",[t._v("40.5")]),s("td",[t._v("43")]),s("td",[t._v("54")])]),s("tr",[s("th",[t._v("M")]),s("td",[t._v("42.5")]),s("td",[t._v("45.5")]),s("td",[t._v("55.5")])]),s("tr",[s("th",[t._v("L")]),s("td",[t._v("45")]),s("td",[t._v("48")]),s("td",[t._v("57")])])])])]),s("p",[t._v("*單位：cm")])]),s("div",{staticClass:"col-lg-6 col-12"},[s("img",{staticClass:"img-fluid",attrs:{src:e("a550")}})])])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"modal fade",attrs:{id:"tryonModalCenter",tabindex:"-1",role:"dialog","aria-labelledby":"tryonModalCenterTitle","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered modal-lg",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header pb-0 border-0"},[s("button",{staticClass:"close p-2",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),s("div",{staticClass:"modal-body pt-0 text-center"},[s("h5",{staticClass:"mb-4"},[t._v("試穿報告")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6 col-12"},[s("div",{staticClass:"table-responsive"},[s("div",{staticClass:"table d-table"},[s("thead",[s("tr",[s("th",[t._v("試穿人員")]),s("th",[t._v("身高(cm)")]),s("th",[t._v("體重(kg)")]),s("th",[t._v("適合尺碼")])])]),s("tbody",[s("tr",[s("th",[t._v("Model")]),s("td",[t._v("165")]),s("td",[t._v("45")]),s("td",[t._v("S")])]),s("tr",[s("th",[t._v("A")]),s("td",[t._v("151")]),s("td",[t._v("45")]),s("td",[t._v("S")])]),s("tr",[s("th",[t._v("B")]),s("td",[t._v("155")]),s("td",[t._v("50")]),s("td",[t._v("M")])]),s("tr",[s("th",[t._v("C")]),s("td",[t._v("160")]),s("td",[t._v("70")]),s("td",[t._v("XL")])]),s("tr",[s("th",[t._v("D")]),s("td",[t._v("165")]),s("td",[t._v("50")]),s("td",[t._v("M")])]),s("tr",[s("th",[t._v("E")]),s("td",[t._v("170")]),s("td",[t._v("55")]),s("td",[t._v("L")])])])])]),s("p",[t._v("*個人比例條件不同，僅供參考")])]),s("div",{staticClass:"col-lg-6 col-12"},[s("img",{staticClass:"img-fluid",attrs:{src:e("7e8d")}})])])])])])])}],r=(e("8e6e"),e("456d"),e("ac6a"),e("bd86")),o=e("2f62"),c=e("7100");function d(t,a){var e=Object.keys(t);return Object.getOwnPropertySymbols&&e.push.apply(e,Object.getOwnPropertySymbols(t)),a&&(e=e.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?d(e,!0).forEach(function(a){Object(r["a"])(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):d(e).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}var n={data:function(){return{productId:"",product:[],qty:0,isFavorite:!1}},computed:l({},Object(o["c"])("favoriteModules",["favorites"])),methods:{getProduct:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("hedera9130","/product/").concat(t.productId);t.$store.dispatch("updateLoading",!0),t.$http.get(a).then(function(a){a.data.success?(t.product=a.data.product,t.favorites.forEach(function(a){t.product.id===a.id&&(t.isFavorite=!0)})):t.$store.dispatch("alertMessageModules/updateMessage",{message:"找不到此商品",status:"danger"}),t.$store.dispatch("updateLoading",!1)})},addToCart:function(t){0===t?this.$store.dispatch("alertMessageModules/updateMessage",{message:"請選擇數量",status:"danger"}):this.$store.dispatch("cartModules/addToCart",{id:this.productId,qty:t})},addFavorite:function(t){this.$store.dispatch("favoriteModules/addToFavorite",t),this.isFavorite=!0},removeFavorite:function(t,a){this.$store.dispatch("favoriteModules/removeFavorite",{favoriteItem:t,delall:a}),this.isFavorite=!1}},watch:{$route:function(){this.productId=this.$route.params.productId,this.getProduct()}},created:function(){this.productId=this.$route.params.productId,this.getProduct()},components:{BannerSider:c["a"]}},u=n,v=(e("1ef5"),e("2877")),p=Object(v["a"])(u,s,i,!1,null,"a08749d2",null);a["default"]=p.exports},"528c":function(t,a,e){t.exports=e.p+"img/product-1.2c7f86dd.jpg"},"7e8d":function(t,a,e){t.exports=e.p+"img/tryon.668195d1.jpg"},"957b":function(t,a,e){},a550:function(t,a,e){t.exports=e.p+"img/size.a9f7c323.jpg"},eefe:function(t,a,e){t.exports=e.p+"img/product-2.3c180b89.jpg"}}]);
//# sourceMappingURL=chunk-7f4660ff.5a100b63.js.map