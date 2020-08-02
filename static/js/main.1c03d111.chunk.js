(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),o=n.n(i),l=(n(14),n(1)),c=n(2),s=n(4),u=n(3),m=n(5),h=n.n(m),d=(n(15),n(16),n(6)),v=n.n(d);n(17);function g(e){e.className;return r.a.createElement("div",{id:"welcome"},r.a.createElement(v.a,{onInit:function(e){e.typeString("Hello. ").pauseFor(1e3).start(),e.typeString("I'm Andrew.").pauseFor(1e3).start()}}),r.a.createElement("br",null),r.a.createElement(v.a,{onInit:function(e){e.typeString("What's your name?").pauseFor(3e3).start()}}))}g.defaultProps={className:""};var f=g,p=(n(18),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={},a}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{id:"about"},r.a.createElement("img",{id:"my-pic",src:"mainpic.jpg",alt:"My pic"}),r.a.createElement("p",null,"Hello! It's great to meet you. I'm Andrew, a junior studying computer science at the University of Michigan. My passion for computer science and programming actually started when I took my very first programming course, and fell in love with it! Through my time in school, I have taken a wide variety of interesting CS courses, including those learning about different data structures and algorithms, and one where I got to work with python and Spotify API data to create unique data visualizations. Funny enough however, my favorite class I've taken had nothing to do with CS, and was about classic civilizations!"),r.a.createElement("p",null,"Outside of my classes, I've been involved in numerous student organizations on campus, including a few of my favorites, the Alternate Reality Initiative, where I got to work extensively with UX and virtual reality, the Michigan Business Club, where I was able to expand my interests in learning about different aspects of business, and of course, the time I got to work as a research assistant studying behavioral game theory!"),r.a.createElement("p",null,"Through my experiences at school, I've gained a deep interests in more theoretical fields of technology such as machine learning and artifical intelligence. I've also developed strong interests in virtual reality as well as front-end web development, where I get to work on desiging strong user experiences."),r.a.createElement("p",null,"When I'm not working, I like to spend time with healthy practices like running and working out, as well as reading and meditating. Of course, I have quite a strong sweet tooth, and enjoy baking as well. On the more creative side, I've recently taken up drawing!"),r.a.createElement("p",null,"Feel free to ask me about any of my interests, technical or otherwise!"),r.a.createElement("p",null,"-Andrew"))}}]),n}(r.a.Component)),w=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={},a}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"I have worked at Amazon."))}}]),n}(r.a.Component),y=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={},a}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Feel free to download my resume here."))}}]),n}(r.a.Component),b=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={},a}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"ngandrew@umich.edu"),r.a.createElement("p",null,"(248) 904-3173"))}}]),n}(r.a.Component),k=["Welcome","About","Experience","Resume","Contact"],E=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).changeTheme=function(){"light"===a.state.theme?a.setState({theme:"dark"}):a.setState({theme:"light"})},a.changeView=function(e){a.setState({activeView:e.target.value})},a.state={theme:"light",activeView:"Welcome"},a}return Object(c.a)(n,[{key:"renderHeader",value:function(){var e=this,t=this.state,n=t.theme,a=t.activeView,i="light"===n?"Light Theme":"Dark Theme";return r.a.createElement("div",{className:"header"},r.a.createElement("ul",null,k.map((function(t,n){return r.a.createElement("li",{key:n},r.a.createElement("button",{className:h()("header-option",a===t?"active-view":"hidden"),type:"button",value:t,onClick:e.changeView},t))}))),r.a.createElement("button",{id:"theme-button",type:"button",onClick:this.changeTheme},i))}},{key:"renderView",value:function(){var e;switch(this.state.activeView){case"About":e=r.a.createElement(p,null);break;case"Experience":e=r.a.createElement(w,null);break;case"Resume":e=r.a.createElement(y,null);break;case"Contact":e=r.a.createElement(b,null);break;default:e=r.a.createElement(f,{className:"intro"})}return e}},{key:"render",value:function(){var e=this.state.theme;return r.a.createElement("div",{className:h()("portfolio",e)},this.renderHeader(),this.renderView())}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.1c03d111.chunk.js.map