(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4473babe"],{"0b4b":function(t,e,n){"use strict";var r=n("7574"),a=n.n(r);a.a},"0fd9":function(t,e,n){"use strict";n("a4d3"),n("99af"),n("4de4"),n("caad"),n("4ec9"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("2532"),n("3ca3"),n("5319"),n("159b"),n("ddb0");var r=n("ade3"),a=(n("4b85"),n("2b0e")),i=n("d9f7"),o=n("80d2");function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u=["sm","md","lg","xl"],l=["start","end","center"];function d(t,e){return u.reduce((function(n,r){return n[t+Object(o["m"])(r)]=e(),n}),{})}var v=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},f=d("align",(function(){return{type:String,default:null,validator:v}})),p=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},b=d("justify",(function(){return{type:String,default:null,validator:p}})),h=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},g=d("alignContent",(function(){return{type:String,default:null,validator:h}})),w={align:Object.keys(f),justify:Object.keys(b),alignContent:Object.keys(g)},y={align:"align",justify:"justify",alignContent:"align-content"};function j(t,e,n){var r=y[t];if(null!=n){if(e){var a=e.replace(t,"");r+="-".concat(a)}return r+="-".concat(n),r.toLowerCase()}}var m=new Map;e["a"]=a["a"].extend({name:"v-row",functional:!0,props:c({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:v}},f,{justify:{type:String,default:null,validator:p}},b,{alignContent:{type:String,default:null,validator:h}},g),render:function(t,e){var n=e.props,a=e.data,o=e.children,s="";for(var c in n)s+=String(n[c]);var u=m.get(s);return u||function(){var t,e;for(e in u=[],w)w[e].forEach((function(t){var r=n[t],a=j(e,t,r);a&&u.push(a)}));u.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r["a"])(t,"align-".concat(n.align),n.align),Object(r["a"])(t,"justify-".concat(n.justify),n.justify),Object(r["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),m.set(s,u)}(),t(n.tag,Object(i["a"])(a,{staticClass:"row",class:u}),o)}})},"43b3":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"top-title",align:"center"}},[n("h3",{staticClass:"wf-roundedmplus1c d-inline-block mb-7"},[t._v(t._s(t.title))])])},a=[],i={name:"Title",props:{title:{type:String,required:!1}}},o=i,s=(n("0b4b"),n("2877")),c=Object(s["a"])(o,r,a,!1,null,null,null);e["a"]=c.exports},"4ec9":function(t,e,n){"use strict";var r=n("6d61"),a=n("6566");t.exports=r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),a)},"62ad":function(t,e,n){"use strict";n("a4d3"),n("4de4"),n("caad"),n("4ec9"),n("a9e3"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("3ca3"),n("5319"),n("2ca0"),n("159b"),n("ddb0");var r=n("ade3"),a=(n("4b85"),n("2b0e")),i=n("d9f7"),o=n("80d2");function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u=["sm","md","lg","xl"],l=function(){return u.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),d=function(){return u.reduce((function(t,e){return t["offset"+Object(o["m"])(e)]={type:[String,Number],default:null},t}),{})}(),v=function(){return u.reduce((function(t,e){return t["order"+Object(o["m"])(e)]={type:[String,Number],default:null},t}),{})}(),f={col:Object.keys(l),offset:Object.keys(d),order:Object.keys(v)};function p(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var a=e.replace(t,"");r+="-".concat(a)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n),r.toLowerCase()):r.toLowerCase()}}var b=new Map;e["a"]=a["a"].extend({name:"v-col",functional:!0,props:c({cols:{type:[Boolean,String,Number],default:!1}},l,{offset:{type:[String,Number],default:null}},d,{order:{type:[String,Number],default:null}},v,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,a=e.data,o=e.children,s=(e.parent,"");for(var c in n)s+=String(n[c]);var u=b.get(s);return u||function(){var t,e;for(e in u=[],f)f[e].forEach((function(t){var r=n[t],a=p(e,t,r);a&&u.push(a)}));var a=u.some((function(t){return t.startsWith("col-")}));u.push((t={col:!a||!n.cols},Object(r["a"])(t,"col-".concat(n.cols),n.cols),Object(r["a"])(t,"offset-".concat(n.offset),n.offset),Object(r["a"])(t,"order-".concat(n.order),n.order),Object(r["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),b.set(s,u)}(),t(n.tag,Object(i["a"])(a,{class:u}),o)}})},6566:function(t,e,n){"use strict";var r=n("9bf2").f,a=n("7c73"),i=n("e2cc"),o=n("f8c2"),s=n("19aa"),c=n("2266"),u=n("7dd0"),l=n("2626"),d=n("83ab"),v=n("f183").fastKey,f=n("69f3"),p=f.set,b=f.getterFor;t.exports={getConstructor:function(t,e,n,u){var l=t((function(t,r){s(t,l,e),p(t,{type:e,index:a(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=r&&c(r,t[u],t,n)})),f=b(e),h=function(t,e,n){var r,a,i=f(t),o=g(t,e);return o?o.value=n:(i.last=o={index:a=v(e,!0),key:e,value:n,previous:r=i.last,next:void 0,removed:!1},i.first||(i.first=o),r&&(r.next=o),d?i.size++:t.size++,"F"!==a&&(i.index[a]=o)),t},g=function(t,e){var n,r=f(t),a=v(e);if("F"!==a)return r.index[a];for(n=r.first;n;n=n.next)if(n.key==e)return n};return i(l.prototype,{clear:function(){var t=this,e=f(t),n=e.index,r=e.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,n=f(e),r=g(e,t);if(r){var a=r.next,i=r.previous;delete n.index[r.index],r.removed=!0,i&&(i.next=a),a&&(a.previous=i),n.first==r&&(n.first=a),n.last==r&&(n.last=i),d?n.size--:e.size--}return!!r},forEach:function(t){var e,n=f(this),r=o(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){r(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!g(this,t)}}),i(l.prototype,n?{get:function(t){var e=g(this,t);return e&&e.value},set:function(t,e){return h(this,0===t?0:t,e)}}:{add:function(t){return h(this,t=0===t?0:t,t)}}),d&&r(l.prototype,"size",{get:function(){return f(this).size}}),l},setStrong:function(t,e,n){var r=e+" Iterator",a=b(e),i=b(r);u(t,e,(function(t,e){p(this,{type:r,target:t,state:a(t),kind:e,last:void 0})}),(function(){var t=i(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),l(e)}}},"68b4":function(t,e,n){"use strict";var r=n("ed57"),a=n.n(r);a.a},"6d61":function(t,e,n){"use strict";var r=n("23e7"),a=n("da84"),i=n("94ca"),o=n("6eeb"),s=n("f183"),c=n("2266"),u=n("19aa"),l=n("861d"),d=n("d039"),v=n("1c7e"),f=n("d44e"),p=n("7156");t.exports=function(t,e,n){var b=-1!==t.indexOf("Map"),h=-1!==t.indexOf("Weak"),g=b?"set":"add",w=a[t],y=w&&w.prototype,j=w,m={},_=function(t){var e=y[t];o(y,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(h&&!l(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return h&&!l(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(h&&!l(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(i(t,"function"!=typeof w||!(h||y.forEach&&!d((function(){(new w).entries().next()})))))j=n.getConstructor(e,t,b,g),s.REQUIRED=!0;else if(i(t,!0)){var O=new j,x=O[g](h?{}:-0,1)!=O,k=d((function(){O.has(1)})),C=v((function(t){new w(t)})),S=!h&&d((function(){var t=new w,e=5;while(e--)t[g](e,e);return!t.has(-0)}));C||(j=e((function(e,n){u(e,j,t);var r=p(new w,e,j);return void 0!=n&&c(n,r[g],r,b),r})),j.prototype=y,y.constructor=j),(k||S)&&(_("delete"),_("has"),b&&_("get")),(S||x)&&_(g),h&&y.clear&&delete y.clear}return m[t]=j,r({global:!0,forced:j!=w},m),f(j,t),h||n.setStrong(j,t,b),j}},7574:function(t,e,n){},"8fc2":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"fill-width":"","py-12":"","mb-5":""}},[n("v-card",{staticClass:"mx-auto"},[n("v-card-text",[n("Title",{attrs:{title:"チケット購入方法"}})],1),n("v-row",{staticClass:"pa-5",attrs:{dense:""}},[n("v-col",{attrs:{cols:"12"}},[n("v-card",{staticClass:"text-center",attrs:{color:"#483D8B",dark:"",elevation:"0"}},[n("v-card-title",{staticClass:"justify-center headline"},[t._v("チケットぴあ")]),n("v-card-subtitle",{staticClass:"pt-3"},[n("span",[t._v("・セブン-イレブンでの直接購入")]),n("br"),t._v(" セブン-イレブン店頭「マルチコピー機」から[チケットぴあ]を選択しPコード『644841』を入力ください。"),n("br"),t._v(" 24時間利用可能 ※毎週火・水曜の1:30～5:30は除く"),n("br"),t._v(" ご利用ガイド："),n("a",{attrs:{href:"http://t.pia.jp/guide/sej-t.jsp",target:"_blank"}},[t._v("http://t.pia.jp/guide/sej-t.jsp")])]),n("v-card-subtitle",[n("span",[t._v("・チケットぴあ店頭で購入")]),n("br"),t._v(" 発売初日はPM13:00～/各店舗営業時間によります。"),n("br"),t._v(" チケットぴあ店舗一覧"),n("a",{attrs:{href:"http://ticket-search.pia.jp/pia/spst/spst_map01.do",target:"_blank"}},[t._v(" http://ticket-search.pia.jp/pia/spst/spst_map01.do")])]),n("v-card-subtitle",[n("span",[t._v("・インターネットでの予約／購入")]),n("br"),t._v(" ※チケットの予約・購入には会員登録が必要です。"),n("br"),n("a",{attrs:{href:"https://t.pia.jp/",target:"_blank"}},[t._v("https://t.pia.jp/")]),n("br"),t._v(" ※パソコン/モバイル共通 ")]),n("v-card-actions",{staticClass:"text-center"},[n("v-btn",{staticClass:"font-weight-bold",attrs:{icon:""},on:{click:function(e){t.show=!t.show}}},[t._v(" 詳細、ご不明な点のお問合せ "),n("v-icon",[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),n("v-expand-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[n("v-divider"),n("v-card-text",[t._v(" チケットぴあ：0570-02-9111"),n("br"),t._v(" ※音声認識による受付は24時間対応、10:00－18:00（オペレーター対応）"),n("br"),t._v(" ※毎週（火）・（水）2:30～5:30はシステムメンテナンスのため受付休止。 ")])],1)])],1)],1),n("v-col",{attrs:{cols:"12"}},[n("v-card",{staticClass:"text-center",attrs:{color:"#385F73",dark:"",elevation:"0"}},[n("v-card-title",{staticClass:"justify-center headline"},[t._v("ローチケ")]),n("v-card-subtitle",{staticClass:"pt-3"},[n("span",[t._v("・ローソン／ミニストップでの直接購入")]),n("br"),t._v(" ローソン・ミニストップ店頭「Loppi（ロッピー）」から"),n("br"),t._v(" Lコード『43228』を入力ください。"),n("br"),t._v(" 購入URL："),n("a",{attrs:{href:"https://l-tike.com/wakuwakufes/",target:"_blank"}},[t._v("https://l-tike.com/wakuwakufes/")])]),n("v-card-actions",{staticClass:"text-center"},[n("v-btn",{staticClass:"font-weight-bold",attrs:{icon:""},on:{click:function(e){t.show=!t.show}}},[t._v(" 詳細、ご不明な点のお問合せ "),n("v-icon",[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),n("v-expand-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[n("v-divider"),n("v-card-text",[t._v(" ローソンチケット：0570-000-777＜10:00－18:00＞ ")])],1)])],1)],1),n("v-col",{attrs:{cols:"12"}},[n("v-card",{staticClass:"text-center",attrs:{color:"#B22222",dark:"",elevation:"0"}},[n("v-card-title",{staticClass:"justify-center headline"},[t._v("イープラスチケット")]),n("v-card-subtitle",{staticClass:"pt-3"},[n("span",[t._v("・ファミリーマートでの直接購入")]),n("br"),t._v(" ファミリーマート店頭「ファミポート」から「わくわくフェスティバル」を検索ください。"),n("br"),t._v(" ご利用ガイド："),n("a",{attrs:{href:"https://www.family.co.jp/services/famiport.html",target:"_blank"}},[t._v("https://www.family.co.jp/services/famiport.html")])]),n("v-card-subtitle",[n("span",[t._v("・インターネットでの予約／購入")]),n("br"),n("a",{attrs:{href:"https://eplus.jp/",target:"_blank"}},[t._v("https://eplus.jp/")]),n("br"),t._v(" ※チケットの予約・購入には会員登録が必要です。"),n("br"),t._v(" ご利用ガイド："),n("a",{attrs:{href:"http://eplus.jp/qa/",target:"_blank"}},[t._v("http://eplus.jp/qa/")])]),n("v-card-actions",{staticClass:"text-center"},[n("v-btn",{staticClass:"font-weight-bold",attrs:{icon:""},on:{click:function(e){t.show=!t.show}}},[t._v(" 詳細、ご不明な点のお問合せ "),n("v-icon",[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),n("v-expand-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[n("v-divider"),n("v-card-text",[n("a",{attrs:{href:"http://eplus.jp/qa/",target:"_blank"}},[t._v("http://eplus.jp/qa/")]),n("br"),t._v(" イープラスカスタマーセンター：0570-06-9911＜受付時間10:00－18:00・土日祝含む＞ ")])],1)])],1)],1)],1)],1)],1)},a=[],i=n("43b3"),o={name:"companion",components:{Title:i["a"]},mounted:function(){document.title="チケット購入方法",document.querySelector("meta[property='og:title']").setAttribute("content","チケット購入方法について"),document.querySelector("meta[name='description']").setAttribute("content","名古屋のわくわくフェステバル2020のイベントチケット購入情報です。4月25・26日は名古屋に集合！ペットと楽しく遊ぼう！"),document.querySelector("meta[property='og:description']").setAttribute("content","名古屋のわくわくフェステバル2020のイベントチケット購入情報です。4月25・26日は名古屋に集合！ペットと楽しく遊ぼう！")},data:function(){return{show:!1}}},s=o,c=(n("68b4"),n("2877")),u=n("6544"),l=n.n(u),d=n("8336"),v=n("b0af"),f=n("99d9"),p=n("62ad"),b=n("a523"),h=n("ce7e"),g=n("0789"),w=n("132d"),y=n("0fd9"),j=Object(c["a"])(s,r,a,!1,null,"47500c9f",null);e["default"]=j.exports;l()(j,{VBtn:d["a"],VCard:v["a"],VCardActions:f["a"],VCardSubtitle:f["b"],VCardText:f["c"],VCardTitle:f["d"],VCol:p["a"],VContainer:b["a"],VDivider:h["a"],VExpandTransition:g["a"],VIcon:w["a"],VRow:y["a"]})},ed57:function(t,e,n){}}]);
//# sourceMappingURL=chunk-4473babe.9017660b.js.map