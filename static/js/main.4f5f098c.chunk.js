(this.webpackJsonpjpncardapp=this.webpackJsonpjpncardapp||[]).push([[0],{104:function(e,t,a){e.exports=a(134)},109:function(e,t,a){},134:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),l=(a(109),a(56)),i=a(34),s=a(12),u=a(23);function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d=r.a.createContext({});var g=d,b=a(192),f=a(189),E=a(191),h=a(210),y=a(187),O=a(212),k=a(185),v=a(193),j=a(211),S=a(80),C=a.n(S),w=a(35),x=a(79),P=a(190),I=a(194),N=a(198),R=a(196),A=a(197),T=a(195);function D(){return r.a.createElement(w.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(k.a,{color:"inherit",href:"https://indrabagus.github.io"},"Digital Bagus")," ",(new Date).getFullYear(),".")}var G=a(47),B=a.n(G),L=a(57),W=a(58),U=a.n(W),z={url:{APIBASE_URL:"https://qambing.com/rest-api/v0.1",BASENAME:"/jpncardapp"}},M="".concat(z.url.APIBASE_URL,"/login");function V(){return(V=Object(L.a)(B.a.mark((function e(t,a){var n;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.get("".concat(M),{auth:{username:t,password:a}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(){return(q=Object(L.a)(B.a.mark((function e(t,a){var n;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.get("".concat(z.url.APIBASE_URL)+a,{headers:{Accept:"application/json",Authorization:"Token "+t}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function J(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var _=Object(x.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function H(){var e=_(),t=r.a.useContext(g),a=r.a.useState({username:"guest",password:"kumamoto",isSubmitting:!1,isRemember:!0,errmsg:null}),n=Object(u.a)(a,2),o=n[0],c=n[1],l=r.a.useState(!1),i=Object(u.a)(l,2),m=i[0],p=i[1],d=r.a.useState(!0),S=Object(u.a)(d,2),x=S[0],G=S[1];function B(e){var t="checkbox"===e.target.type?e.target.checked:e.target.value,a=e.target.id;c(J({},o,Object(s.a)({},a,t)))}var L=function(){p(!1)},W=r.a.createElement("form",{action:"/",method:"GET",onSubmit:function(e){e.preventDefault(),function(e,t){return V.apply(this,arguments)}(o.username,o.password).then((function(e){t.action({type:"SIGNIN",payload:{isLocal:o.isRemember,token:e.token}})})).catch((function(e){console.log("ERROR=>",e),c((function(t){return J({},t,{errmsg:e.message||e.statusText})})),p(!0)}))},className:e.form,noValidate:!0},r.a.createElement(h.a,{disabled:x,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Username",autoComplete:"username",autoFocus:!0,value:o.username,id:"username",onChange:B}),r.a.createElement(h.a,{disabled:x,variant:"outlined",margin:"normal",id:"password",type:"password",label:"Password",autoComplete:"current-password",required:!0,fullWidth:!0,onChange:B}),r.a.createElement(y.a,{control:r.a.createElement(O.a,{disabled:x,type:"checkbox",checked:o.isRemember,id:"isRemember",color:"primary",onChange:B}),label:"Remember me"}),r.a.createElement(y.a,{control:r.a.createElement(O.a,{type:"checkbox",checked:o.isRemember,id:"isRemember",color:"primary",onChange:function(){return G(!x)}}),label:"Login as guest"}),r.a.createElement(f.a,{className:e.submit,type:"submit",variant:"contained",color:"primary",fullWidth:!0},"Sign In"));return r.a.createElement(P.a,{component:"main",maxWidth:"xs"},r.a.createElement(E.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(b.a,{className:e.avatar},r.a.createElement(C.a,null)),r.a.createElement(w.a,{component:"h1",variant:"h5"},"Sign in"),W,r.a.createElement(v.a,{container:!0},r.a.createElement(v.a,{item:!0},r.a.createElement(k.a,{href:"mailto:indra.bagus@gmail.com",variant:"body2"},"Contact: indra.bagus@gmail.com")))),r.a.createElement(j.a,{mt:8},r.a.createElement(D,null)),r.a.createElement(I.a,{open:m,onClose:L,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(T.a,{id:"alert-dialog-title"},"Error Notification !"),r.a.createElement(R.a,null,r.a.createElement(A.a,{id:"alert-dialog-description"},"Error Message: ",o.errmsg)),r.a.createElement(N.a,null,r.a.createElement(f.a,{onClick:L,color:"primary",autoFocus:!0},"Close"))))}var K=a(207),Y=a(208),$=a(188),Q=a(87),X=a.n(Q),Z=a(209),ee=a(213),te=a(199),ae=a(186),ne=a(200),re=a(201),oe=a(202),ce=a(203),le=a(83),ie=a.n(le),se=a(84),ue=a.n(se),me=a(85),pe=a.n(me),de=a(82),ge=a.n(de),be=a(59),fe=a.n(be),Ee=a(81),he=a.n(Ee);function ye(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Oe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ye(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ye(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ke=Object(x.a)((function(e){return{toolBar:Oe({display:"flex",alignItems:"centre",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),nested:{paddingLeft:e.spacing(4)},list:{width:250}}}));function ve(e){var t=ke(),a=r.a.useContext(g),n=r.a.useState(!1),o=Object(u.a)(n,2),c=o[0],l=o[1],i={paddingTop:1,paddingBottom:1,height:"42px"};function s(t,n){a.action({type:"CHANGECARD",payload:{currUrl:t,cardTitle:n}}),e.onGetCard()}return r.a.createElement(ee.a,{variant:"temporary",open:e.open,onClose:e.onClose,ModalProps:{keepMounted:!0}},r.a.createElement("div",{className:t.toolBar},r.a.createElement($.a,{onClick:e.onClose},r.a.createElement(he.a,null))),r.a.createElement(te.a,null),r.a.createElement(ae.a,{dense:!0,className:t.list,role:"presentation"},r.a.createElement(ne.a,{button:!0,onClick:function(){return l(!c)}},r.a.createElement(re.a,null,r.a.createElement(ge.a,null)),r.a.createElement(oe.a,{primary:"Genki Book"}),c?r.a.createElement(ie.a,null):r.a.createElement(ue.a,null)),r.a.createElement(ce.a,{in:c,timeout:"auto",unmountOnExit:!0},r.a.createElement(ae.a,{dense:!0,onClick:e.onClose,onKeyDown:e.onClose,component:"div",disablePadding:!0},r.a.createElement(ne.a,{style:i,button:!0,className:t.nested,onClick:function(){return s("/genki/random/1","Genki Volume 1")}},r.a.createElement($.a,null," ",r.a.createElement(fe.a,null)," "),r.a.createElement(oe.a,{primary:"Genki Book Vol 1"})),r.a.createElement(ne.a,{style:i,button:!0,className:t.nested,onClick:function(){return s("/genki/random/2","Genki Volume 2")}},r.a.createElement($.a,null," ",r.a.createElement(fe.a,null)," "),r.a.createElement(oe.a,{primary:"Genki Book Vol 2"})))),r.a.createElement(ne.a,{button:!0,onClick:function(){return a.action({type:"SIGNOUT"})}},r.a.createElement(re.a,null,r.a.createElement(pe.a,null)),r.a.createElement(oe.a,{primary:"Sign Out"}))))}var je=a(204),Se=a(205),Ce=a(206),we=Object(x.a)((function(e){var t;return{card:(t={maxWidth:290,minWidth:290},Object(s.a)(t,e.breakpoints.up("375"),{maxWidth:340,minWidth:340}),Object(s.a)(t,e.breakpoints.up("400"),{maxWidth:380,minWidth:380}),Object(s.a)(t,e.breakpoints.up("md"),{maxWidth:1024,minWidth:800}),Object(s.a)(t,"borderRadius",10),t),title:Object(s.a)({fontSize:"1rem"},e.breakpoints.up("sm"),{fontSize:"2rem"}),vocabulary:Object(s.a)({fontSize:"1.5rem"},e.breakpoints.up("md"),{fontSize:"4rem"}),pos:Object(s.a)({marginBottom:e.spacing(2)},e.breakpoints.up("md"),{fontSize:"1.5rem"})}}));function xe(e){var t=we();return r.a.createElement(je.a,{className:t.card},r.a.createElement(Se.a,{onClick:e.onGetCard},r.a.createElement(w.a,{className:t.title,color:"textSecondary",gutterBottom:!0},e.title),r.a.createElement(w.a,{className:t.vocabulary},e.data.kanji?e.data.kanji:e.data.kana),r.a.createElement(w.a,{className:t.pos,color:"textSecondary"},e.data.kanji?"[ "+e.data.kana+" ]":"\xa0"),r.a.createElement(w.a,{variant:"body2",component:"p"},'"',e.data.english,'"')),r.a.createElement(Ce.a,null,r.a.createElement(f.a,{size:"medium",onClick:e.onGetCard},"Learn More")))}var Pe=a(86),Ie=a.n(Pe),Ne=Object(x.a)((function(e){return{imageIcon:{height:"100%"},iconRoot:{textAlign:"center",marginRight:e.spacing(1)},toolbar:{paddingLeft:e.spacing(1),paddingRight:e.spacing(1),marginTop:e.spacing(2),marginBottom:e.spacing(5),borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)},toolbarTitle:Object(s.a)({flex:1,fontSize:"1rem"},e.breakpoints.up("sm"),{fontSize:"2rem"}),card:{marginTop:e.spacing(1),display:"flex",alignItems:"centre",justifyContent:"flex-end"},copyright:{marginTop:e.spacing(3)}}}));function Re(e){var t=Ne(),a=r.a.useState(!1),n=Object(u.a)(a,2),o=n[0],c=n[1],l=r.a.useState({}),i=Object(u.a)(l,2),s=i[0],m=i[1],p=r.a.useState(!1),d=Object(u.a)(p,2),b=d[0],f=d[1],E=r.a.useContext(g);function h(){c(!o)}function y(){f(!0),function(e,t){return q.apply(this,arguments)}(E.state.token,E.state.currUrl).then((function(e){m(e.result)})).catch((function(e){e.response?(console.log("RESP:",e.response),401===e.response.status&&E.action({type:"SIGNOUT"})):console.log("ERROR :",e)})),f(!1)}r.a.useEffect(y,[]);var O=r.a.createElement(K.a,{className:t.toolbar},r.a.createElement($.a,{style:{backgroundColor:"transparent",marginRight:"15px"},onClick:h},r.a.createElement(X.a,null)),r.a.createElement(Y.a,{classes:{root:t.iconRoot}},r.a.createElement("img",{src:Ie.a,className:t.imageIcon,alt:""})),r.a.createElement(w.a,{className:t.toolbarTitle,component:"h2",variant:"h5",color:"inherit",noWrap:!0},"Japan Card Application"));return r.a.createElement(P.a,{maxWidth:"lg"},O,r.a.createElement(ve,{open:o,onClose:h,onGetCard:y}),r.a.createElement(v.a,{container:!0,spacing:0,direction:"column",alignItems:"center"},r.a.createElement(v.a,{item:!0,xs:12},b?r.a.createElement(Z.a,null):r.a.createElement(xe,{data:s,title:E.state.cardTitle,onGetCard:y}))),r.a.createElement("div",{className:t.copyright},r.a.createElement(D,null)))}function Ae(){return!1===r.a.useContext(g).state.isAuthenticate?r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",exact:!0,component:H}),r.a.createElement(i.b,null,r.a.createElement(i.a,{to:"/"}))):r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",exact:!0,component:Re}),r.a.createElement(i.b,null,r.a.createElement(i.a,{to:"/"})))}var Te=function(){return r.a.createElement(l.a,{basename:z.url.BASENAME},r.a.createElement(Ae,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement((function(e){var t=r.a.useState({isAuthenticate:!1,isLocal:!0,token:null,currUrl:null,cardTitle:null}),a=Object(u.a)(t,2),n=a[0],o=a[1];return r.a.useEffect((function(){localStorage.getItem("token")?o((function(e){return p({},e,{isAuthenticate:!0,isLocal:!0,token:localStorage.getItem("token")})})):sessionStorage.getItem("token")&&o((function(e){return p({},e,{isAuthenticate:!0,isLocal:!1,token:sessionStorage.getItem("token")})}));var e=localStorage.getItem("current-url"),t=localStorage.getItem("current-title");e||(localStorage.setItem("current-url","/genki/random/1"),e="/genki/random/1"),t||(t="Genki Volume 1 Card",localStorage.setItem("current-title",t)),o((function(a){return p({},a,{currUrl:e,cardTitle:t})}))}),[]),r.a.createElement(d.Provider,{value:{state:n,action:function(e){switch(e.type){case"SIGNIN":e.payload.isLocal?localStorage.setItem("token",e.payload.token):sessionStorage.setItem("token",e.payload.token),o((function(t){return p({},t,{isAuthenticate:!0,isLocal:e.payload.isLocal,token:e.payload.token})}));break;case"SIGNOUT":n.isLocal?localStorage.clear():sessionStorage.clear(),o((function(e){return p({},e,{isAuthenticate:!1,isLocal:!0,token:null})}));break;case"CHANGECARD":o((function(t){return p({},t,{currUrl:e.payload.currUrl,cardTitle:e.payload.cardTitle})})),localStorage.setItem("current-url",e.payload.currUrl),localStorage.setItem("current-title",e.payload.cardTitle);break;default:return null}}}},e.children)}),null,r.a.createElement(Te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},86:function(e,t,a){e.exports=a.p+"static/media/japan.29f79c14.svg"}},[[104,1,2]]]);
//# sourceMappingURL=main.4f5f098c.chunk.js.map