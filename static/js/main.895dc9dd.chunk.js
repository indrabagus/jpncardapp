(window["webpackJsonpjpnvocab-card-frontend"]=window["webpackJsonpjpnvocab-card-frontend"]||[]).push([[0],{22:function(e,a,t){e.exports=t(34)},27:function(e,a,t){},28:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(19),l=t.n(r),o=(t(27),t(4)),i=t(5),s=t(7),u=t(6),m=t(8),b=(t(28),t(13)),v=t(10),h=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,"THIS IS JLPT PART")}}]),a}(n.Component),d=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,"This is Login Page")}}]),a}(n.Component),p=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(c)))).state={contacts:[]},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,this.props.contact_title),this.state.contacts.map((function(e){return c.a.createElement("div",{class:"card"},c.a.createElement("div",{class:"card-body"},c.a.createElement("h5",{class:"card-title"},e.name),c.a.createElement("h6",{class:"card-subtitle mb-2 text-muted"},e.email),c.a.createElement("p",{class:"card-text"},e.company.catchPhrase)),c.a.createElement("span",null))})))}},{key:"componentDidMount",value:function(){var e=this;fetch("http://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(a){e.setState({contacts:a})})).catch(console.log)}}]),a}(n.Component),E=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement(b.a,null,c.a.createElement("div",null,c.a.createElement("nav",{class:"navbar navbar-expand-md navbar-dark bg-dark"},c.a.createElement("a",{class:"navbar-brand",href:"/"},"Nihonggo Vocabularies"),c.a.createElement("button",{type:"button",class:"navbar-toggler","data-toggle":"collapse","data-target":"#main-menu","aria-controls":"main-menu","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{class:"navbar-toggler-icon"})),c.a.createElement("div",{class:"collapse navbar-collapse",id:"main-menu"},c.a.createElement("ul",{class:"navbar-nav mr-auto"},c.a.createElement("li",{class:"nav-item active"},c.a.createElement("a",{class:"nav-link",href:"/"},"Home",c.a.createElement("span",{class:"sr-only"},"(current)"))),c.a.createElement("li",{class:"nav-item"},c.a.createElement("a",{class:"nav-link",href:"/"},"JLPT N4")),c.a.createElement("li",{class:"nav-item"},c.a.createElement("a",{class:"nav-link",href:"/"},"Genki Book"))),c.a.createElement("ul",{class:"navbar-nav navbar-right mr-auto"},c.a.createElement("li",{class:"nav-item"},c.a.createElement(b.b,{class:"nav-link",to:"/login"},"Login")),c.a.createElement("li",{class:"nav-item"},c.a.createElement(b.b,{class:"nav-link",to:"/contacts"},"Contacts"))))),c.a.createElement(v.c,null,c.a.createElement(v.a,{path:"/jlpt"},c.a.createElement(h,null)),c.a.createElement(v.a,{path:"/login"},c.a.createElement(d,null)),c.a.createElement(v.a,{path:"/contacts"},c.a.createElement(p,{contact_title:"Contact Lists"})))))}}]),a}(n.Component),f=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{class:"container"},c.a.createElement(E,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.895dc9dd.chunk.js.map