(this["webpackJsonpfunction-summary"]=this["webpackJsonpfunction-summary"]||[]).push([[27],{388:function(t,e,n){"use strict";n.r(e);var c,i,r,o=n(49),p=n(55),s=n(48),a=n(1),u=n(50),b=n(9),O=n(29),j=n(30),f=n(6),l=Object(b.a)((function(){return Promise.all([n.e(6),n.e(7)]).then(n.bind(null,201))})),d=Object(b.a)((function(){return n.e(3).then(n.bind(null,145))})),y=Object(b.a)((function(){return n.e(5).then(n.bind(null,146))})),h=u.b.div(c||(c=Object(o.a)([""]))),m=u.b.div(i||(i=Object(o.a)(["\n    margin-bottom: 20px;\n"]))),v=u.b.div(r||(r=Object(o.a)(["\n    max-height: 250px;\n    margin-bottom: 30px;\n    overflow-y: auto;\n"])));e.default=function(t){var e=t.data,n=Object(O.c)(),c=Object(O.d)((function(t){return t.options})).separationOptionList,i=Object(a.useState)([]),r=Object(s.a)(i,2),o=r[0],u=r[1],b=Object(a.useState)([]),g=Object(s.a)(b,2),L=g[0],x=g[1],w=Object(a.useState)(""),P=Object(s.a)(w,2),S=P[0],T=P[1];return Object(a.useEffect)((function(){if(e){var t=e.optionList.filter((function(t){return t.depth1===e.optionNameList[0]}));u(t)}}),[e]),Object(a.useEffect)((function(){if(S&&S.selected1&&!S.selected2){var t=e.optionList.length>1?e.optionList.filter((function(t){return t.depth1===e.optionNameList[1]})):[];x(t)}}),[S]),Object(a.useEffect)((function(){S.selected2&&n(Object(j.d)({type:e.optionType,selectedList:Object(p.a)(Object(p.a)({},S),{},{buyCnt:1})}))}),[S.selected2]),Object(f.jsxs)(h,{children:[Object(f.jsx)(m,{children:e.optionNameList&&e.optionNameList.map((function(t,n){return Object(f.jsx)(l,{type:0===n?"depth1":"depth2",optionType:e.optionType,placeholder:t,selectedList:0===n?o:L,currentSelectList:S,onSelectedList:T},"select-".concat(t))}))}),c.length>0&&Object(f.jsx)(v,{children:c.map((function(t,n){return Object(f.jsx)(d,{data:t,index:n,optionType:e.optionType,price:e.price+t.selected1.price+t.selected2.price},"amount-".concat(n))}))}),Object(f.jsx)(y,{data:c,optionType:e.optionType,price:e.price})]})}},55:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n(17);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,c)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){Object(c.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}}}]);
//# sourceMappingURL=27.79d2301b.chunk.js.map