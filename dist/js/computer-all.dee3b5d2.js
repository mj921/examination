(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["computer-all"],{a271:function(t,e,s){"use strict";var n=s("db8e"),r=s.n(n);r.a},baa6:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.submit,expression:"submit"}],staticClass:"score"},[t._v(t._s(t.score)+" 分")]),s("el-page-header",{attrs:{content:"计算机"},on:{back:function(e){return t.$router.push("/")}}}),s("div",{staticClass:"dx"},t._l(t.dxlist,function(e,n){return s("dl",{key:n},[s("div",{staticClass:"question"},[s("div",{staticClass:"no"},[t._v(t._s(n+1)+".")]),s("div",{staticClass:"text",domProps:{innerHTML:t._s(e.question.replace(/\n/g,"<br/>"))}}),s("span",{directives:[{name:"show",rawName:"v-show",value:t.submit,expression:"submit"}],staticClass:"answer",style:{color:e.xx===e.answer?"green":"red"}},[t._v("\n          "+t._s(e.answer)+"\n        ")])]),s("div",{staticClass:"options"},[s("el-radio-group",{model:{value:e.xx,callback:function(s){t.$set(e,"xx",s)},expression:"item.xx"}},t._l(e.options,function(e,n){return s("el-radio",{key:e,attrs:{label:t.A_Z[n]}},[t._v(t._s(t.A_Z[n])+"."+t._s(e))])}),1)],1)])}),0),s("div",{staticClass:"btns-bg"}),s("div",{staticClass:"btns"},[s("el-button",{attrs:{type:"primary"},on:{click:t.submitFn}},[t._v("提交")]),s("el-button",{attrs:{type:"primary"},on:{click:t.reset}},[t._v("重来")])],1),s("el-backtop")],1)},r=[],i=(s("8e6e"),s("456d"),s("a481"),s("ac6a"),s("bd86")),a=s("75fc"),o=s("6b85"),c=s("43da");function u(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,n)}return s}function l(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?u(s,!0).forEach(function(e){Object(i["a"])(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):u(s).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}var d={name:"english",data:function(){return{dxlist:[],wxlist:[],ydlist:[],A_Z:["A","B","C","D","E","F"],submit:!1,score:0}},methods:{getDanXuan:function(){var t=[].concat(Object(a["a"])(o["a"]),Object(a["a"])(c["a"]));this.dxlist=[];for(var e=0;e<50;e++){var s=~~(Math.random()*t.length);this.dxlist.push(l({},t[s],{xx:""})),t.splice(s,1)}},submitFn:function(){var t=this;this.score=0,this.dxlist.forEach(function(e){e.xx===e.answer&&(t.score+=2)}),this.submit=!0},reset:function(){this.score=0,this.submit=!1,this.getDanXuan()}},mounted:function(){var t=window.innerWidth||document.body.clientWidth||document.documentElement.clientWidth;t<750&&this.$router.replace("/computer-mobile-all")},created:function(){this.getDanXuan()}},b=d,p=(s("a271"),s("2877")),v=Object(p["a"])(b,n,r,!1,null,"7e65047a",null);e["default"]=v.exports},db8e:function(t,e,s){}}]);
//# sourceMappingURL=computer-all.dee3b5d2.js.map