(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54167844"],{1799:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{attrs:{"aria-label":"Page navigation"}},[e("ul",{staticClass:"pagination justify-content-center"},[e("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_pre}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.updatePage(t.pagination.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")]),e("span",{staticClass:"sr-only"},[t._v("Previous")])])]),t._l(t.pagination.total_pages,function(a){return e("li",{key:a,staticClass:"page-item",class:{active:a==t.pagination.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.updatePage(a)}}},[t._v(t._s(a))])])}),e("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_next}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.updatePage(t.pagination.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")]),e("span",{staticClass:"sr-only"},[t._v("Next")])])])],2)])])},n=[],i={props:["pagination"],data:function(){return{}},methods:{updatePage:function(t){this.$emit("getPage",t)}}},r=i,c=e("2877"),l=Object(c["a"])(r,s,n,!1,null,null,null);a["a"]=l.exports},5714:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"table-responsive-xl"},[e("table",{staticClass:"table nowrap"},[t._m(0),e("tbody",t._l(t.orders,function(a){return e("tr",{key:a.id,class:{"bg-light":a.is_paid}},[e("td",{staticClass:"text-center"},[t._v(t._s(t._f("date")(a.create_at)))]),a.user?e("td",{staticClass:"d-sm-table-cell d-none"},[t._v(t._s(a.user.email))]):t._e(),e("td",{staticClass:"d-lg-table-cell d-none"},[e("ul",{staticClass:"list-unstyled"},t._l(a.products,function(a,s){return e("li",{key:s},[t._v("\n                "+t._s(a.product.title)+":"+t._s(a.qty)+"\n                 "+t._s(a.product.unit)+"\n              ")])}),0)]),e("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(a.total)))]),e("td",{staticClass:"d-sm-table-cell d-none text-center"},[a.is_paid?e("strong",{staticClass:"text-success"},[t._v("已付款")]):e("span",{staticClass:"text-muted"},[t._v("尚未付款")])])])}),0)])]),t.pagination?e("Pagination",{attrs:{pagination:t.pagination},on:{getPage:t.getOrders}}):t._e()],1)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{staticClass:"text-center"},[t._v("購買時間")]),e("th",{staticClass:"d-sm-table-cell d-none text-center"},[t._v("Email")]),e("th",{staticClass:"d-lg-table-cell d-none text-center"},[t._v("購買款項")]),e("th",{staticClass:"text-center"},[t._v("應付金額")]),e("th",{staticClass:"d-sm-table-cell d-none text-center"},[t._v("是否付款")])])])}],i=e("1799"),r={data:function(){return{orders:{},pagination:{}}},components:{Pagination:i["a"]},methods:{getOrders:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("hedera9130","/admin/orders?page=").concat(t);a.$store.dispatch("updateLoading",!0),a.$http.get(e).then(function(t){t.data.success?(a.orders=t.data.orders,a.pagination=t.data.pagination):a.$store.dispatch("alertMessageModules/updateMessage",{message:t.data.message,status:"danger"}),a.$store.dispatch("updateLoading",!1)})}},created:function(){this.getOrders()}},c=r,l=(e("f270"),e("2877")),o=Object(l["a"])(c,s,n,!1,null,"470d238a",null);a["default"]=o.exports},"6b8b":function(t,a,e){},f270:function(t,a,e){"use strict";var s=e("6b8b"),n=e.n(s);n.a}}]);
//# sourceMappingURL=chunk-54167844.f4afe883.js.map