(this["webpackJsonpgif-expert"]=this["webpackJsonpgif-expert"]||[]).push([[0],{26:function(e,t,a){console.log(Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"dN9rK9tDmzRxBVhGaNuMiAsa2yN2fN7i"})),e.exports={API_KEY_GIF:"dN9rK9tDmzRxBVhGaNuMiAsa2yN2fN7i",PUBLIC_URL:"."}},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a(1),n=a.n(c),s=a(23),i=a.n(s),o=a(4),l=a(3),d=function(){return Object(r.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(r.jsx)(o.b,{to:"/",className:"navbar-brand",children:"Mahiler"}),Object(r.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(r.jsxs)("div",{className:"navbar-nav",children:[Object(r.jsx)(o.b,{className:"nav-item nav-link",to:"/gif-app",children:"Gift App"}),Object(r.jsx)(o.b,{className:"nav-item nav-link",to:"/todo-list-app",children:"Todo App"}),Object(r.jsx)(o.b,{className:"nav-item nav-link",to:"/heroes-app",children:"Heroes App"})]})})]})},j=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d,{}),Object(r.jsx)("div",{children:"Estamos en el Home de Mahiler"})]})},h=a(6),u=a(15),p=function(e){var t=e.setCategories,a=n.a.useState(""),c=Object(h.a)(a,2),s=c[0],i=c[1];return Object(r.jsx)("form",{onSubmit:function(e){e.preventDefault(),s.trim().length>2&&(t((function(e){return[s].concat(Object(u.a)(e))})),i(""))},className:"form-control",children:Object(r.jsx)("input",{type:"text",value:s,onChange:function(e){return i(e.target.value)}})})},b=a(2),m=a(21),O=a.n(m),x=a(25),v=a(26),f=function(){var e=Object(x.a)(O.a.mark((function e(t){var a,r,c,n,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=").concat(v.API_KEY_GIF),e.next=3,fetch(a);case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,n=c.data,s=n.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=Object(c.useState)({data:[],loading:!0}),a=Object(h.a)(t,2),r=a[0],n=a[1];return Object(c.useEffect)((function(){f(e).then((function(e){n({data:e,loading:!1})}))}),[]),r},N=function(e){var t=e.url,a=e.title;return console.log("Prueba"),Object(r.jsxs)("div",{className:"gift-card card animate__animated animate__fadeIn",children:[Object(r.jsx)("img",{src:t,alt:a}),Object(r.jsx)("p",{children:a})]})},C=function(e){var t=e.category,a=g(t),c=a.data,n=a.loading;return Object(r.jsxs)(r.Fragment,{children:[n&&Object(r.jsx)("p",{className:"animate__animated animate__flash",children:"Cargando ..."}),Object(r.jsx)("h3",{className:"animate__animated animate__fadeIn",children:t}),Object(r.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(r.jsx)(N,Object(b.a)({},e),e.id)}))})]})},y=(a(38),function(){var e=n.a.useState([]),t=Object(h.a)(e,2),a=t[0],c=t[1];return Object(r.jsxs)("div",{className:"container p-5",children:[Object(r.jsx)("h2",{children:"Gift App"}),Object(r.jsx)(p,{setCategories:c}),Object(r.jsx)("hr",{}),Object(r.jsx)("ol",{children:a.map((function(e){return Object(r.jsx)(C,{category:e},e)}))})]})}),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD":return[].concat(Object(u.a)(e),[t.payload]);case"DELETE":return e.filter((function(e){return e.id!==t.payload}));case"TOGGLE":return e.map((function(e){return e.id===t.payload?Object(b.a)(Object(b.a)({},e),{},{done:!e.done}):e}));default:return e}},S=a(14),D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),a=Object(h.a)(t,2),r=a[0],n=a[1],s=function(){n(e)},i=function(e){var t=e.target;n(Object(b.a)(Object(b.a)({},r),{},Object(S.a)({},t.name,t.value)))};return[r,i,s]},E=function(e){var t=e.todo,a=e.index,c=e.handleDelete,n=e.handleToggle;return Object(r.jsxs)("li",{className:"list-group-item",children:[Object(r.jsxs)("p",{className:"".concat(t.done&&"complete"),onClick:function(){n(t.id)},children:[a+1,". ",t.desc]}),Object(r.jsx)("button",{type:"submit",className:"btn btn-danger",onClick:function(){c(t.id)},children:"Borrar"})]},t.id)};E.defaultProps={todo:{}};var k=E,_=function(e){var t=e.todos,a=e.handleToggle,c=e.handleDelete;return Object(r.jsx)("ul",{className:"list-group list-group-flush",children:t.map((function(e,t){return Object(r.jsx)(k,{todo:e,index:t,handleToggle:a,handleDelete:c},e.id)}))})};_.defaultProps={todos:[]};var M=_,T=(a(39),function(){return JSON.parse(localStorage.getItem("todos"))||[]}),w=function(){var e=n.a.useReducer(A,[],T),t=Object(h.a)(e,2),a=t[0],c=t[1],s=D({description:""}),i=Object(h.a)(s,3),o=i[0].description,l=i[1],d=i[2];n.a.useEffect((function(){localStorage.setItem("todos",JSON.stringify(a))}),[a]);return Object(r.jsxs)("div",{className:"container p-5",children:[Object(r.jsxs)("h1",{children:["TodoAPP (",a.length,")"]}),Object(r.jsx)("hr",{}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-7",children:Object(r.jsx)(M,{todos:a,handleToggle:function(e){c({type:"TOGGLE",payload:e})},handleDelete:function(e){c({type:"DELETE",payload:e})}})}),Object(r.jsxs)("div",{className:"col-5",children:[Object(r.jsx)("h4",{children:"Agregar TODO"}),Object(r.jsx)("hr",{}),Object(r.jsxs)("form",{className:"d-grid gap-2",onSubmit:function(e){if(e.preventDefault(),!(o.trim().length<=1)){var t={id:(new Date).getTime(),desc:o,done:!1};c({type:"ADD",payload:t}),d()}},children:[Object(r.jsx)("input",{type:"text",name:"description",className:"form-control",value:o,placeholder:"Aprender ...",autoComplete:"off",onChange:l}),Object(r.jsx)("button",{type:"submit",className:"btn btn-outline-primary mt-1",children:"Agregar"})]})]})]})]})},I=Object(c.createContext)(),P=a(16),G=function(e){var t=e.isAuthenticated,a=e.component,c=Object(P.a)(e,["isAuthenticated","component"]);return localStorage.setItem("lastPath",c.location.pathname),Object(r.jsx)(l.b,Object(b.a)(Object(b.a)({},c),{},{component:function(e){return t?Object(r.jsx)(a,Object(b.a)({},e)):Object(r.jsx)(l.a,{to:"/heroes-app/login"})}}))},F=function(e){var t=e.isAuthenticated,a=e.component,c=Object(P.a)(e,["isAuthenticated","component"]);return Object(r.jsx)(l.b,Object(b.a)(Object(b.a)({},c),{},{component:function(e){return t?Object(r.jsx)(l.a,{to:"/heroes-app"}):Object(r.jsx)(a,Object(b.a)({},e))}}))},L={LOGIN:"[auth] login",LOGOUT:"[auth] logout"},B=function(e){var t=e.history,a=n.a.useContext(I).dispatch;return Object(r.jsxs)("div",{className:"container mt-5",children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)("hr",{}),Object(r.jsx)("button",{className:"btn btn-primary",type:"submit",onClick:function(){var e=localStorage.getItem("lastPath")||"/heroes-app";a({type:L.LOGIN,payload:{name:"Fernando"}}),t.replace(e)},children:"Login"})]})},R=function(){var e=n.a.useContext(I),t=e.user.name,a=e.dispatch,c=Object(l.g)();return Object(r.jsx)("nav",{className:"navbar sticky-top navbar-expand-lg navbar-dark bg-dark",children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)(o.b,{className:"navbar-brand",to:"/heroes-app",children:"APP-HEROES"}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarText",children:[Object(r.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.c,{activeClassName:"active",className:"nav-item nav-link text-center",exact:!0,to:"/heroes-app/marvel",children:"Marvel"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.c,{activeClassName:"active",className:"nav-item nav-link text-center",exact:!0,to:"/heroes-app/dc",children:"DC"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.c,{activeClassName:"active",className:"nav-item nav-link text-center",exact:!0,to:"/heroes-app/search",children:"Search"})})]}),Object(r.jsx)("div",{children:Object(r.jsxs)("span",{className:"nav-item nav-link text-center text-white",children:[" ","Hola ".concat(t," ! \ud83d\udd96")," "]})}),Object(r.jsx)("button",{type:"button",className:"nav-item nav-link btn btn-secondary",onClick:function(){a({type:L.LOGOUT}),c.replace("/heroes-app/login")},children:"LogOut"})]})]})})},J=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alterEgo:"Bruce Wayne",firstAppearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alterEgo:"Kal-El",firstAppearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alterEgo:"Jay Garrick",firstAppearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alterEgo:"Alan Scott",firstAppearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alterEgo:"Oliver Queen",firstAppearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alterEgo:"Princess Diana",firstAppearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alterEgo:"J'onn J'onzz",firstAppearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alterEgo:"Dick Grayson",firstAppearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alterEgo:"Dan Garret",firstAppearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alterEgo:"Dinah Drake",firstAppearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alterEgo:"Peter Parker",firstAppearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alterEgo:"Steve Rogers",firstAppearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alterEgo:"Tony Stark",firstAppearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alterEgo:"Thor Odinson",firstAppearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alterEgo:"Bruce Banner",firstAppearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alterEgo:"James Howlett",firstAppearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alterEgo:"Matthew Michael Murdock",firstAppearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alterEgo:"Clinton Francis Barton",firstAppearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alterEgo:"Scott Summers",firstAppearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alterEgo:"Norrin Radd",firstAppearance:"The Fantastic Four #48",characters:"Norrin Radd"}],H=function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error("Publiser ".concat(e," no es correcto"));return J.filter((function(t){return t.publisher===e}))},K=function(e){var t=e.id,a=e.superhero,c=e.alterEgo,n=e.firstAppearance,s=e.characters;return console.log(""),Object(r.jsx)("div",{className:"card ms-3 mt-3 animate__animated animate__zoomIn",style:{maxWidth:540},children:Object(r.jsxs)("div",{className:"row no-gutters",children:[Object(r.jsx)("div",{className:"col-md-4",children:Object(r.jsx)("img",{src:"../../assets/images/".concat(t,".jpg"),className:"card-img",alt:a})}),Object(r.jsx)("div",{className:"col-md-8",children:Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsxs)("h5",{className:"card-title",children:[" ",a]}),Object(r.jsx)("p",{className:"card-text",children:c}),c!==s&&Object(r.jsx)("p",{className:"card-text",children:s}),Object(r.jsx)("p",{className:"card-text",children:Object(r.jsx)("small",{className:"text-muted",children:n})}),Object(r.jsx)(o.b,{to:"/heroes-app/hero/".concat(t),children:" M\xe1s ..."})]})})]})})},W=function(e){var t=e.publisherName,a=n.a.useMemo((function(){return H(t)}),[t]);return Object(r.jsx)("div",{className:"d-flex flex-wrap justify-content-center",children:a.map((function(e){return Object(r.jsx)(K,Object(b.a)({},e),e.id)}))})},z=function(){return console.log(""),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"DC Screen"}),Object(r.jsx)("hr",{}),Object(r.jsx)(W,{publisherName:"DC Comics"})]})},U=function(e){return J.find((function(t){return t.id===e}))},V=function(e){var t=e.history,a=Object(l.h)().heroId,c=n.a.useMemo((function(){return U(a)}),[a]);if(!c)return Object(r.jsx)(l.a,{to:"/heroes-app"});var s=c.superhero,i=c.publisher,o=c.alterEgo,d=c.firstAppearance,j=c.characters;return Object(r.jsxs)("div",{className:"row mt-5",children:[Object(r.jsx)("div",{className:"col-4",children:Object(r.jsx)("img",{src:"../../assets/images/".concat(a,".jpg"),alt:s,className:"img-thumbnail animate__animated animate__fadeInLeft"})}),Object(r.jsxs)("div",{className:"col-8 animate__animated animate__fadeIn",children:[Object(r.jsxs)("h3",{children:[" ",s]}),Object(r.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(r.jsxs)("li",{className:"list-group-item",children:[Object(r.jsx)("b",{children:"Alter ego:"})," ",o]}),Object(r.jsxs)("li",{className:"list-group-item",children:[Object(r.jsx)("b",{children:"Publisher:"})," ",i]}),Object(r.jsxs)("li",{className:"list-group-item",children:[Object(r.jsx)("b",{children:"First appearance:"})," ",d]})]}),Object(r.jsx)("h5",{children:" Characters"}),Object(r.jsx)("p",{children:j}),Object(r.jsx)("button",{className:"btn btn-outline-info",type:"submit",onClick:function(){t.length<=2?t.push("/heroes-app"):t.goBack()},children:"Return"})]})]})},Y=function(){return console.log(""),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Marvel Screen"}),Object(r.jsx)("hr",{}),Object(r.jsx)(W,{publisherName:"Marvel Comics"})]})},Q=function(e){if(e.trim().length<1)return[];var t=e.toLowerCase();return J.filter((function(e){return e.superhero.toLowerCase().startsWith(t)}))},q=function(){var e=D({heroName:""}),t=Object(h.a)(e,2),a=t[0].heroName,c=t[1],n=Q(a);return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Search Screen"}),Object(r.jsx)("hr",{}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col-5",children:[Object(r.jsx)("h4",{children:"Search Form"}),Object(r.jsx)("input",{type:"text",value:a,name:"heroName",placeholder:"Find your Hero",className:"form-control",onChange:c})]}),Object(r.jsxs)("div",{className:"col-7",children:[Object(r.jsx)("h4",{children:"Results"}),Object(r.jsx)("hr",{}),0===n.length&&Object(r.jsx)("div",{className:"alert alert-info",children:" Hero not found"}),n.map((function(e){return Object(r.jsx)(K,Object(b.a)({},e),e.id)}))]})]})]})},X=function(){return console.log(""),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(R,{}),Object(r.jsx)("div",{className:"container mt-5",children:Object(r.jsxs)(l.d,{children:[Object(r.jsx)(l.b,{exact:!0,path:"/heroes-app/marvel",component:Y}),Object(r.jsx)(l.b,{exact:!0,path:"/heroes-app/dc",component:z}),Object(r.jsx)(l.b,{exact:!0,path:"/heroes-app/search",component:q}),Object(r.jsx)(l.b,{exact:!0,path:"/heroes-app/hero/:heroId",component:V}),Object(r.jsx)(l.a,{to:"/heroes-app/marvel"})]})})]})},Z=function(){var e=n.a.useContext(I).user.logged;return Object(r.jsx)(o.a,{children:Object(r.jsx)("div",{children:Object(r.jsxs)(l.d,{children:[Object(r.jsx)(F,{path:"/heroes-app/login",exact:!0,isAuthenticated:e,component:B}),Object(r.jsx)(G,{path:"/heroes-app",isAuthenticated:e,component:X})]})})})},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L.LOGIN:return Object(b.a)(Object(b.a)({},t.payload),{},{logged:!0});case L.LOGOUT:return{logged:!1};default:return e}},ee=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},te=function(){var e=n.a.useReducer($,{},ee),t=Object(h.a)(e,2),a=t[0],c=t[1];return n.a.useEffect((function(){localStorage.setItem("user",JSON.stringify(a))}),[a]),Object(r.jsxs)(I.Provider,{value:{user:a,dispatch:c},children:[Object(r.jsx)(Z,{}),";"]})},ae=function(){return console.log(""),Object(r.jsx)("div",{children:Object(r.jsxs)(l.d,{children:[Object(r.jsx)(l.b,{exact:!0,path:"/gif-app",component:y}),Object(r.jsx)(l.b,{exact:!0,path:"/todo-list-app",component:w}),Object(r.jsx)(l.b,{path:"/heroes-app",component:te}),Object(r.jsx)(l.a,{to:"/"})]})})},re=function(){return console.log(""),Object(r.jsx)(o.a,{children:Object(r.jsx)("div",{children:Object(r.jsxs)(l.d,{children:[Object(r.jsx)(l.b,{exact:!0,path:"/",component:j}),Object(r.jsx)(l.b,{path:"/",component:ae})]})})})},ce=(a(40),function(){return Object(r.jsx)(re,{})}),ne=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,42)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),r(e),c(e),n(e),s(e)}))};i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(ce,{})}),document.getElementById("root")),ne()}},[[41,1,2]]]);
//# sourceMappingURL=main.f274c379.chunk.js.map