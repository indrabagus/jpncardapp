(window["webpackJsonpjpnvocab-card-frontend"]=window["webpackJsonpjpnvocab-card-frontend"]||[]).push([[0],{33:function(e,t,a){e.exports=a(67)},38:function(e,t,a){},39:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(28),r=a.n(l),s=(a(38),a(5)),o=a(6),i=a(8),m=a(7),u=a(9),p=a(10),d=a(11),h={url:{API_URL:"https://206.189.47.248:7878/api/v0.1"}},b=(a(39),c.a.createContext({})),E=b.Provider,v=b.Consumer,g=b,f=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(v,null,(function(e){return e.state.isAuthenticate?c.a.createElement("div",{className:"Home"},c.a.createElement("div",{className:"lander"},c.a.createElement("h1",null,"This is the empty main container"),c.a.createElement("p",null,"A simple main container with app token: ",e.state.token))):c.a.createElement(d.a,{to:"/login"})}))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={contacts:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,this.props.contact_title),this.state.contacts.map((function(e){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},e.name),c.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},e.email),c.a.createElement("p",{className:"card-text"},e.company.catchPhrase)),c.a.createElement("span",null))})))}},{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({contacts:t})})).catch(console.log)}}]),t}(n.Component),k=a(31),y=a(13),j=a.n(y),O=(a(62),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleInputChange=function(e){var t="checkbox"===e.target.type?e.target.checked:e.target.value,n=e.target.name;a.setState(Object(k.a)({},n,t))},a.onSubmit=function(e){e.preventDefault(),a.setState({isSubmitting:!0}),j.a.get(a.url,{headers:{Accept:"*"},auth:{username:a.state.usrname,password:a.state.password}}).then((function(e){200===e.status&&a.context.action({type:"LOGIN",payload:{isLocal:a.state.isRemember,token:e.data.token}})})).catch((function(e){console.log(e),a.setState({isSubmitting:!1,errmsg:e.message||e.statusText})}))},a.url=h.url.API_URL+"/login",a.state={usrname:"",password:"",isSubmitting:!1,isRemember:!0,errmsg:null},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"login-page"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-0 col-sm-0"}),c.a.createElement("div",{className:"col-12 col-sm-5"},c.a.createElement("div",{className:"login-box card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("h3",null,"Sign In"),c.a.createElement("div",{className:"d-flex justify-content-end social_icon"},c.a.createElement("span",null,c.a.createElement("i",{className:"fab fa-facebook-square"})),c.a.createElement("span",null,c.a.createElement("i",{className:"fab fa-google-plus-square"})),c.a.createElement("span",null,c.a.createElement("i",{className:"fab fa-twitter-square"}))),c.a.createElement("div",{className:"card-body"},c.a.createElement("form",{onSubmit:this.onSubmit},c.a.createElement("div",{className:"input-group form-group"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("span",{className:"input-group-text"},c.a.createElement("i",{className:"fas fa-user"}))),c.a.createElement("input",{type:"text",className:"form-control",name:"usrname",placeholder:"Enter Username",value:this.state.usrname,onChange:this.handleInputChange,required:!0})),c.a.createElement("div",{className:"input-group form-group"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("span",{className:"input-group-text"},c.a.createElement("i",{className:"fas fa-key"}))),c.a.createElement("input",{type:"password",name:"password",className:"form-control",placeholder:"Enter Password",value:this.state.password,onChange:this.handleInputChange,required:!0})),c.a.createElement("div",{className:"row align-items-center remember"},c.a.createElement("input",{type:"checkbox",defaultChecked:"true",name:"isRemember",checked:this.isRemember,onChange:this.handleInputChange}),c.a.createElement("label",{className:"form-check-label",htmlFor:"exampleCheck1"},"Remember Me")),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"submit",value:"Login",className:"btn float-right login_btn"}))))))),c.a.createElement("div",{className:"col-0 col-sm-7"})))}}]),t}(n.Component));O.contextType=g;var w=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(O,null)}}]),t}(n.Component),S=a(17),C=a.n(S),x=a(32),A=(a(64),function(e){var t;t=e.state.vocab.kanji?c.a.createElement("div",null,c.a.createElement("h2",null,e.state.vocab.kanji),e.state.isShow&&c.a.createElement("p",null,"{",e.state.vocab.kana,"}")):c.a.createElement("div",null,c.a.createElement("h2",null,e.state.vocab.kana),c.a.createElement("p",null," \u2002"));var a=c.a.createElement("div",{className:"card-box card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("div",null,e.cardTitle)),c.a.createElement("div",{className:"card-body"},t,e.state.isShow&&c.a.createElement("p",null,"English: ",e.state.vocab.english)),c.a.createElement("div",{className:"card-footer"},c.a.createElement("button",{type:"button",className:"btn float-right btn-primary",onClick:e.handleClick},"Next >>"),c.a.createElement("button",{type:"button",className:"btn float-left btn-primary",onClick:e.handleShow},e.state.isShow?"Hide English/Kana":"Show English/Kana")));return c.a.createElement("div",{className:"genki-book container"},e.state.errmsg?c.a.createElement("p",null,"Error: ",e.state.errmsg):c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-0 col-sm-0"}),c.a.createElement("div",{className:"col-12 col-sm-6"},a),c.a.createElement("div",{className:"col-0 col-sm-6"})))}),L=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(){a.setState({isShow:!1}),a.getData()},a.state={vocab:[],isShow:!1,errmsg:null},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"getData",value:function(){var e=Object(x.a)(C.a.mark((function e(){var t=this;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get(this.props.apiUrl,{headers:{Accept:"application/json",Authorization:"Token "+this.context.state.token}}).then((function(e){t.setState({vocab:e.data.result})})).catch((function(e){return console.log("error: ",e),e.response?t.setState({errmsg:e.response.status||e.response.data}):e.request?t.setState({errmsg:e.request}):t.setState({errmsg:e.message}),null}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e){this.props.apiUrl!==e.apiUrl&&this.getData()}},{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this;return c.a.createElement(A,{cardTitle:this.props.cardTitle,state:this.state,handleClick:this.handleClick,handleShow:function(){e.setState({isShow:!e.state.isShow})}})}}]),t}(n.Component);L.contextType=g;var I=L,T=function(e){return Object(n.useContext)(g).action({type:"LOGOUT"}),c.a.createElement(d.a,{to:"/"})},U=(a(65),function(){return c.a.createElement("div",{className:"NotFound"},c.a.createElement("h3",null,"Page Not Found, Sorry :("))}),P=function(){return!1===Object(n.useContext)(g).state.isAuthenticate?c.a.createElement(d.d,null,c.a.createElement(d.b,{path:"/",exact:!0,component:w}),c.a.createElement(d.b,null,c.a.createElement(d.a,{to:"/"}))):c.a.createElement(d.d,null,c.a.createElement(d.b,{path:"/",exact:!0,component:f}),c.a.createElement(d.b,{path:"/logout",exact:!0,component:T}),c.a.createElement(d.b,{path:"/jlpt4"},c.a.createElement(I,{apiUrl:h.url.API_URL+"/jlpt4/random",cardTitle:"JLPT N4 Card"})),c.a.createElement(d.b,{path:"/genkibook"},c.a.createElement(I,{apiUrl:h.url.API_URL+"/genki/random/1",cardTitle:"Genki Book Volume 1 Card"})),c.a.createElement(d.b,{path:"/contacts"},c.a.createElement(N,{contact_title:"Contact Lists"}),"}"),c.a.createElement(d.b,{component:U}))},D=(a(66),function(e){return c.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark"},c.a.createElement(p.b,{className:"navbar-brand",to:"/"},"Digital Bagus"),c.a.createElement("button",{type:"button",className:"navbar-toggler","data-toggle":"collapse","data-target":"#main-menu","aria-controls":"main-menu","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),e.state.isAuthenticate&&c.a.createElement("div",{className:"collapse navbar-collapse",id:"main-menu"},c.a.createElement("ul",{className:"navbar-nav mr-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(p.b,{className:"nav-link",to:"/"},"Home",c.a.createElement("span",{className:"sr-only"},"(current)"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement(p.b,{className:"nav-link",to:"/jlpt4"},"JLPT N4")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(p.b,{className:"nav-link",to:"/genkibook"},"Genki Book"))),c.a.createElement("ul",{className:"navbar-nav navbar-right mr-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(p.b,{className:"nav-link",to:"/logout"},"Logout")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(p.b,{className:"nav-link",to:"/contacts"},"Contacts")))))}),R=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={isAuthenticate:!1,isLocal:!0,token:null},a.stateAction=function(e){switch(e.type){case"LOGIN":e.payload.isLocal&&localStorage.setItem("token",e.payload.token),a.setState({isAuthenticate:!0,isLocal:e.payload.isLocal,token:e.payload.token});break;case"LOGOUT":localStorage.clear(),a.setState({isAuthenticate:!1,isLocal:!0,token:null});break;default:return null}},localStorage.getItem("token")&&(a.state={isAuthenticate:!0,token:localStorage.getItem("token")}),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(E,{value:{state:this.state,action:this.stateAction}},c.a.createElement(p.a,null,c.a.createElement("div",{className:"App container"},c.a.createElement(D,{state:this.state}),c.a.createElement(P,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.c1e7518d.chunk.js.map