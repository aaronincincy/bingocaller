(this.webpackJsonpbingocaller=this.webpackJsonpbingocaller||[]).push([[0],[,,,,function(e,t,a){e.exports={container:"CalledForLetter_container__1KV6m",letter:"CalledForLetter_letter__15_0H",number:"CalledForLetter_number__37cRM",called:"CalledForLetter_called__1HfU8",active:"CalledForLetter_active__1P2S4",blink:"CalledForLetter_blink__SNmlD"}},function(e,t,a){e.exports={container:"CallHistory_container__2Wb6E",header:"CallHistory_header__Srz3Q",numbers:"CallHistory_numbers__1qIbn",number:"CallHistory_number__3SmQo"}},function(e,t,a){e.exports={container:"BingoActions_container__YF0kd",action:"BingoActions_action__2VRrJ"}},function(e,t,a){e.exports={last:"LastNumberCalled_last__2Teqf"}},,,function(e,t,a){e.exports={container:"CalledNumbers_container__LgmVH"}},function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),i=(a(16),a(1)),o=a(2),m=Object(n.createContext)({numbers:[]}),s=[];function u(e){var t=Object(o.a)(Array(75).keys()).map((function(e){return e+1})).filter((function(t){return!e.includes(t)}));return t[Math.floor(Math.random()*t.length)]}function d(e,t){switch(t){case"call":return 75===e.length?e:[u(e)].concat(Object(o.a)(e));case"reset":return s;default:throw new Error("unrecognized action")}}var _=function(e){var t=e.children,a=Object(n.useReducer)(d,s),l=Object(i.a)(a,2),c=l[0],o=l[1];return r.a.createElement(m.Provider,{value:[c,{call:function(){o("call")},reset:function(){o("reset")}}]},r.a.createElement("div",{className:"game"},t))};var v=function(){return Object(n.useContext)(m)},b=[{min:1,max:15,letter:"B"},{min:16,max:30,letter:"I"},{min:31,max:45,letter:"N"},{min:46,max:60,letter:"G"},{min:61,max:75,letter:"O"}];var f=function(e){var t=e.number,a=b.find((function(e){return t>=e.min&&t<=e.max}));return a?r.a.createElement("div",null,a.letter,t):null},E=a(7),N=a.n(E);var h=function(){var e=v(),t=Object(i.a)(e,1)[0];return 0===t.length?r.a.createElement("div",{className:N.a.last},"\xa0"):r.a.createElement("div",{className:N.a.last},r.a.createElement(f,{number:t[0]}))},x=a(5),C=a.n(x);var p=function(){var e=v(),t=Object(i.a)(e,1)[0],a=Object(o.a)(t).reverse();return r.a.createElement("div",{className:C.a.container},r.a.createElement("h3",{className:C.a.header},"Call History"),r.a.createElement("div",{className:C.a.numbers},a.map((function(e){return r.a.createElement("div",{className:C.a.number},r.a.createElement(f,{key:e,number:e}))}))))},g=a(3),O=a.n(g),k=a(6),y=a.n(k);var j=function(e){e.children;var t=e.className,a=v(),n=Object(i.a)(a,2)[1],l=n.call,c=n.reset;return r.a.createElement("div",{className:O()(t,y.a.container)},r.a.createElement("button",{className:y.a.action,onClick:l},"Call Next Number"),r.a.createElement("button",{className:y.a.action,onClick:c},"Reset Game"))},w=a(4),H=a.n(w);var L=function(e){var t=e.letter,a=e.min,n=(e.max,v()),l=Object(i.a)(n,1)[0],c=Object(o.a)(Array(15).keys()).map((function(e){return e+a})),m=l[0];return r.a.createElement("div",{className:H.a.container},r.a.createElement("div",{className:H.a.letter},t),c.map((function(e){return r.a.createElement("div",{key:e,className:O()(H.a.number,e===m?H.a.active:null,l.includes(e)?H.a.called:null)},e)})))},F=a(10),B=a.n(F);var A=function(e){var t=e.className;return r.a.createElement("div",{className:O()(t,B.a.container)},r.a.createElement(L,{letter:"B",min:1,max:15}),r.a.createElement(L,{letter:"I",min:16,max:30}),r.a.createElement(L,{letter:"N",min:31,max:45}),r.a.createElement(L,{letter:"G",min:46,max:60}),r.a.createElement(L,{letter:"O",min:61,max:75}))};var I=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(_,null,r.a.createElement(h,null),r.a.createElement(j,{className:"actions"}),r.a.createElement(A,{className:"called"}),r.a.createElement(p,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.d52cc44d.chunk.js.map