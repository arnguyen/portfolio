(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),l=(a(13),a(1)),o=a(2),u=a(4),s=a(3),m=a(5),h=a.n(m);a(14),a(15);function d(e){var t=e.className;return r.a.createElement("div",{id:"welcome"},r.a.createElement("h1",{className:t},"Hello. I'm Andrew."),r.a.createElement("img",{id:"my-pic",src:"mainpic.jpg",alt:"My pic"}))}d.defaultProps={className:""};var v=d,f=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Hello! It's great to meet you. I'm Andrew, a junior studying computer science at the University of Michigan."))}}]),a}(r.a.Component),b=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"I have worked at Amazon."))}}]),a}(r.a.Component),p=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Feel free to download my resume here."))}}]),a}(r.a.Component),E=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"ngandrew@umich.edu"),r.a.createElement("p",null,"(248) 904-3173"))}}]),a}(r.a.Component),w=["Welcome","About","Experience","Resume","Contact"],j=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).changeTheme=function(){"light"===n.state.theme?n.setState({theme:"dark"}):n.setState({theme:"light"})},n.changeView=function(e){n.setState({activeView:e.target.value})},n.state={theme:"light",activeView:"Welcome"},n}return Object(o.a)(a,[{key:"renderHeader",value:function(){var e=this,t=this.state,a=t.theme,n=t.activeView,c="light"===a?"Light Theme":"Dark Theme";return r.a.createElement("div",{className:"header"},r.a.createElement("ul",null,w.map((function(t,a){return r.a.createElement("li",{key:a},r.a.createElement("button",{className:h()("header-option",n===t?"active-view":"hidden"),type:"button",value:t,onClick:e.changeView},t))}))),r.a.createElement("button",{id:"theme-button",type:"button",onClick:this.changeTheme},c))}},{key:"renderView",value:function(){var e;switch(this.state.activeView){case"About":e=r.a.createElement(f,null);break;case"Experience":e=r.a.createElement(b,null);break;case"Resume":e=r.a.createElement(p,null);break;case"Contact":e=r.a.createElement(E,null);break;default:e=r.a.createElement(v,{className:"intro"})}return e}},{key:"render",value:function(){var e=this.state.theme;return r.a.createElement("div",{className:h()("portfolio",e)},this.renderHeader(),this.renderView())}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.ba23cf1c.chunk.js.map