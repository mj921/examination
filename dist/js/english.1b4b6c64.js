(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["english"],{"147d":function(t,s,e){"use strict";var n=e("7e36"),i=e.n(n);i.a},"2e67":function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"home"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.submit,expression:"submit"}],staticClass:"score"},[t._v(t._s(t.score)+" 分")]),e("el-page-header",{attrs:{content:"英语"},on:{back:function(s){return t.$router.push("/")}}}),e("div",{staticClass:"dx"},t._l(t.dxlist,function(s,n){return e("dl",{key:n},[e("div",{staticClass:"question"},[e("div",{staticClass:"no"},[t._v(t._s(n+1)+".")]),e("div",{staticClass:"text",domProps:{innerHTML:t._s(s.question.replace(/\n/g,"<br/>"))}}),e("span",{directives:[{name:"show",rawName:"v-show",value:t.submit,expression:"submit"}],staticClass:"answer",style:{color:s.xx===s.answer?"green":"red"}},[t._v("\n          "+t._s(s.answer)+"\n        ")])]),e("div",{staticClass:"options"},[e("el-radio-group",{model:{value:s.xx,callback:function(e){t.$set(s,"xx",e)},expression:"item.xx"}},t._l(s.options,function(s,n){return e("el-radio",{key:s,attrs:{label:t.A_Z[n]}},[t._v(t._s(t.A_Z[n])+"."+t._s(s))])}),1)],1)])}),0),e("div",{staticClass:"wx"},t._l(t.wxlist,function(s,n){return e("dl",{key:n},[e("div",{staticClass:"wz"},[e("div",{staticClass:"no"},[t._v(t._s(n+1+t.dxlist.length)+".")]),e("div",{staticClass:"text",domProps:{innerHTML:t._s(s.text.replace(/\n/g,"<br/>"))}})]),e("div",{staticClass:"questions"},t._l(s.questions,function(s,i){return e("div",{key:"question"+n+"-"+i,staticClass:"question"},[e("div",{staticClass:"no"},[t._v(t._s(i+1)+".")]),e("div",{staticClass:"options"},[e("el-radio-group",{model:{value:s.xx,callback:function(e){t.$set(s,"xx",e)},expression:"question.xx"}},t._l(s.options,function(s,n){return e("el-radio",{key:s,attrs:{label:t.A_Z[n]}},[t._v(t._s(t.A_Z[n])+"."+t._s(s))])}),1)],1),e("span",{directives:[{name:"show",rawName:"v-show",value:t.submit,expression:"submit"}],staticClass:"answer",style:{color:s.xx===s.answer?"green":"red"}},[t._v("\n            "+t._s(s.answer)+"\n          ")])])}),0)])}),0),e("div",{staticClass:"yd"},t._l(t.ydlist,function(s,n){return e("dl",{key:n},[e("div",{staticClass:"wz"},[e("div",{staticClass:"no"},[t._v(t._s(n+1+t.dxlist.length+t.wxlist.length)+".")]),e("div",{staticClass:"text",domProps:{innerHTML:t._s(s.text.replace(/\n/g,"<br/>"))}})]),e("div",{staticClass:"questions"},t._l(s.questions,function(s,i){return e("dl",{key:"question"+n+"-"+i},[e("div",{staticClass:"question"},[e("div",{staticClass:"no"},[t._v(t._s(i+1)+".")]),e("div",{staticClass:"text",domProps:{innerHTML:t._s(s.question.replace(/\n/g,"<br/>"))}}),e("span",{directives:[{name:"show",rawName:"v-show",value:t.submit,expression:"submit"}],staticClass:"answer",style:{color:s.xx===s.answer?"green":"red"}},[t._v("\n              "+t._s(s.answer)+"\n            ")])]),e("div",{staticClass:"options"},[e("el-radio-group",{model:{value:s.xx,callback:function(e){t.$set(s,"xx",e)},expression:"question.xx"}},t._l(s.options,function(s,n){return e("el-radio",{key:s,attrs:{label:t.A_Z[n]}},[t._v("\n                "+t._s(t.A_Z[n])+"."+t._s(s)+"\n              ")])}),1)],1)])}),0)])}),0),e("div",{staticClass:"btns-bg"}),e("div",{staticClass:"btns"},[e("el-button",{attrs:{type:"primary"},on:{click:t.submitFn}},[t._v("提交")]),e("el-button",{attrs:{type:"primary"},on:{click:t.reset}},[t._v("重来")])],1),e("el-backtop")],1)},i=[],a=(e("8e6e"),e("456d"),e("a481"),e("ac6a"),e("bd86")),r=e("75fc"),o=e("d289"),c=e("309d"),l=e("50f0");function u(t,s){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);s&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),e.push.apply(e,n)}return e}function d(t){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{};s%2?u(e,!0).forEach(function(s){Object(a["a"])(t,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(e).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(e,s))})}return t}var v={name:"english",data:function(){return{dxlist:[],wxlist:[],ydlist:[],A_Z:["A","B","C","D","E","F"],submit:!1,score:0}},methods:{getDanXuan:function(){var t=Object(r["a"])(o["a"]);this.dxlist=[];for(var s=0;s<10;s++){var e=~~(Math.random()*t.length);this.dxlist.push(d({},t[e],{xx:""})),t.splice(e,1)}},getYueDu:function(){var t=Object(r["a"])(c["a"]);this.ydlist=[];for(var s=0;s<4;s++){var e=~~(Math.random()*t.length);this.ydlist.push({text:t[e].text,questions:t[e].questions.map(function(t){return d({},t,{xx:""})})}),t.splice(e,1)}},getWanXing:function(){var t=Object(r["a"])(l["a"]);this.wxlist=[];for(var s=0;s<2;s++){var e=~~(Math.random()*t.length);this.wxlist.push({text:t[e].text,questions:t[e].questions.map(function(t){return d({},t,{xx:""})})}),t.splice(e,1)}},submitFn:function(){var t=this;this.score=0,this.dxlist.forEach(function(s){s.xx===s.answer&&(t.score+=2)}),this.wxlist.forEach(function(s){s.questions.forEach(function(s){s.xx===s.answer&&(t.score+=2)})}),this.ydlist.forEach(function(s){s.questions.forEach(function(s){s.xx===s.answer&&(t.score+=2)})}),this.submit=!0},reset:function(){this.score=0,this.submit=!1,this.getDanXuan(),this.getWanXing(),this.getYueDu()}},mounted:function(){var t=window.innerWidth||document.body.clientWidth||document.documentElement.clientWidth;t<750&&this.$router.replace("/english-mobile")},created:function(){this.getDanXuan(),this.getWanXing(),this.getYueDu()}},x=v,p=(e("147d"),e("2877")),h=Object(p["a"])(x,n,i,!1,null,"6952e2de",null);s["default"]=h.exports},"7e36":function(t,s,e){}}]);
//# sourceMappingURL=english.1b4b6c64.js.map