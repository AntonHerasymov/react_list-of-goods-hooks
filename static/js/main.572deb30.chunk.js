(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,c=n(7),o=n.n(c),i=n(6),r=n(8),a=n(1),l=n(4),u=n.n(l),b=(n(13),n(14),n(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.DEFAULT="",t.ALPHABETICALLY="alphabetically",t.LENGTH="length"}(s||(s={}));var d=function(){var t=Object(a.useState)(s.DEFAULT),e=Object(i.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(!1),l=Object(i.a)(o,2),d=l[0],j=l[1],L=function(t,e){var n=e.sortField,c=e.isReversed,o=Object(r.a)(t);if(n)switch(n){case s.ALPHABETICALLY:o.sort((function(t,e){return t.localeCompare(e)}));break;case s.LENGTH:o.sort((function(t,e){return t.length-e.length}));break;default:return o}return c&&o.reverse(),o}(h,{sortField:n,isReversed:d}),f=d||n;return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:u()("button is-info",{"is-light":n!==s.ALPHABETICALLY}),onClick:function(){return c(s.ALPHABETICALLY)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:u()("button is-success",{"is-light":n!==s.LENGTH}),onClick:function(){return c(s.LENGTH)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:u()("button is-warning",{"is-light":!d}),onClick:function(){return j(!d)},children:"Reverse"}),f&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){j(!1),c(s.DEFAULT)},children:"Reset"})]}),Object(b.jsx)("ul",{children:L.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};o.a.render(Object(b.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.572deb30.chunk.js.map