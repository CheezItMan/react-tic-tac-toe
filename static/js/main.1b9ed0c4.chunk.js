(this["webpackJsonpreact-tic-tac-toe"]=this["webpackJsonpreact-tic-tac-toe"]||[]).push([[0],[,,,,,,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t(1),u=t.n(c),l=t(7),r=t.n(l),i=(t(13),t(5)),o=t(3),s=(t(14),t(15),t(16),function(e){var a=e.onClickCallback,t=e.value,c=e.id;return Object(n.jsx)("button",{className:"square",onClick:function(){return a(c)},children:t})}),v=function(e){var a=function(e,a){var t;return(t=[]).concat.apply(t,Object(i.a)(e)).map((function(e){return Object(n.jsx)(s,{value:e.value,id:e.id,onClickCallback:a},e.id)}))}(e.squares,e.onClickCallback);return Object(n.jsx)("div",{className:"grid",children:a})},j="x",b=function(){for(var e=[],a=0,t=0,n=0;a<3;){for(e.push([]);t<3;)e[a].push({id:n,value:""}),t+=1,n+=1;a+=1,t=0}return e},d=function(){var e=Object(c.useState)(b()),a=Object(o.a)(e,2),t=a[0],u=a[1],l=Object(c.useState)(j),r=Object(o.a)(l,2),s=r[0],d=r[1],f=Object(c.useState)(0),h=Object(o.a)(f,2),O=h[0],k=h[1],m=Object(c.useState)(null),p=Object(o.a)(m,2),x=p[0],C=p[1];return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("header",{className:"App-header",children:[Object(n.jsx)("h1",{children:"React Tic Tac Toe"}),Object(n.jsx)("h2",{children:null===x?"Current Player ".concat(s):"Winner is ".concat(x)}),Object(n.jsx)("button",{onClick:function(){u(b()),d(j),k(0),C(null)},children:"Reset Game"})]}),Object(n.jsx)("main",{children:Object(n.jsx)(v,{squares:t,onClickCallback:function(e){if(null===x){for(var a=Object(i.a)(t),n=0,c=0,l=!1;n<3&&!l;){for(;c<3&&!l;){var r=a[n][c];if(r.id===e){if(""!==r.value)return;l=!0,r.value=s,k(O+1),d(s===j?"o":j)}c+=1}n+=1,c=0}C(function(){for(var e=0;e<3;){if(t[e][0].value===t[e][1].value&&t[e][2].value===t[e][1].value&&""!==t[e][0].value)return t[e][0].value;if(t[0][e].value===t[1][e].value&&t[2][e].value===t[1][e].value&&""!==t[0][e].value)return t[0][e].value;e+=1}return t[0][0].value===t[1][1].value&&t[2][2].value===t[1][1].value&&""!==t[1][1].value?t[0][0].value:t[0][2].value===t[1][1].value&&t[2][0].value===t[1][1].value&&""!==t[1][1].value?t[0][2].value:null}()),u(a)}}})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(n.jsx)(u.a.StrictMode,{children:Object(n.jsx)(d,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.1b9ed0c4.chunk.js.map