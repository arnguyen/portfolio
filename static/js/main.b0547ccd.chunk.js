(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),c=a.n(o),i=(a(13),a(3)),l=a(4),s=a(7),u=a(6),h=a(5),m=a.n(h);a(14);function d(e){var t=e.className;return r.a.createElement("div",null,r.a.createElement("h1",{className:t},"Hello. I'm Andrew."))}d.defaultProps={className:""};var v=d,f=["Welcome","About","Experience","Resume","Contact"],w=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).changeTheme=function(){"light"===n.state.theme?n.setState({theme:"dark"}):n.setState({theme:"light"})},n.changeView=function(e){n.setState({activeView:e.target.value})},n.state={theme:"light",activeView:"Welcome"},n}return Object(l.a)(a,[{key:"renderHeader",value:function(){var e=this,t="light"===this.state.theme?"Dark Mode":"Light Mode";return r.a.createElement("div",null,f.map((function(t,a){return r.a.createElement("li",{key:a},r.a.createElement("button",{type:"button",value:t,onClick:e.changeView},t))})),r.a.createElement("button",{id:"theme-button",type:"button",onClick:this.changeTheme},t))}},{key:"renderView",value:function(){var e;switch(this.state.activeView){case"About":case"Experience":case"Resume":case"Contact":break;default:e=r.a.createElement(v,{className:"intro"})}return e}},{key:"render",value:function(){var e=this.state.theme;return r.a.createElement("div",{className:m()("portfolio",e)},this.renderHeader,this.renderView)}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.b0547ccd.chunk.js.map