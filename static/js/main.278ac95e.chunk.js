(this.webpackJsonpshop_manager=this.webpackJsonpshop_manager||[]).push([[0],{20:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},48:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(29),r=n.n(a),i=(n(36),n(14)),o=(n(37),n(38),n(4)),l=n(0);function d(e){var t=e.product;return Object(l.jsx)("div",{className:"col-md-6 col-lg-4 column",children:Object(l.jsxs)("div",{className:"card gr-1",children:[Object(l.jsxs)("div",{className:"txt",children:[Object(l.jsxs)("h1",{children:[t.name," ",Object(l.jsx)("br",{}),t.articleNo]}),Object(l.jsx)("p",{children:t.description})]}),Object(l.jsx)(o.b,{to:"/products/".concat(t.name),children:"more"}),Object(l.jsx)("div",{className:"ico-card",children:Object(l.jsx)("i",{className:"fa fa-rebel"})})]})})}var j=Object(c.createContext)();function u(){var e=Object(c.useContext)(j).products;return Object(l.jsx)("div",{className:"list-group",children:Object(l.jsx)("div",{class:"container h-50",children:Object(l.jsx)("div",{class:"row align-middle",children:e.map((function(e,t){return Object(l.jsx)(d,{product:e},t)}))})})})}var b=function(){return Object(l.jsx)(u,{className:"container"})},m=n(2);var h=function(){var e=Object(m.h)().search,t=Object(c.useContext)(j).products.find((function(t){return t.name===e}));return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("a",{to:"#!",className:"list-group-item list-group-item-action flex-column align-items-start px-5 py-3",children:[Object(l.jsxs)("div",{className:"d-flex w-100 justify-content-between",children:[Object(l.jsx)("h5",{className:"mb-1",children:t.name}),Object(l.jsx)("small",{children:t.articleNo})]}),Object(l.jsx)("p",{className:"mb-1",children:t.description}),Object(l.jsx)("small",{children:t.price})]})})},p=n(8),O=Object(c.createContext)();var x=function(e){var t=e.loggedIn,n=Object(m.g)(),s=Object(c.useContext)(j).products,a=Object(c.useState)(""),r=Object(p.a)(a,2),i=r[0],d=r[1],u=Object(c.useContext)(O).logout;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{id:"header",className:"display-2 App p-4",children:"Shop Manager ;)"}),Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark py-4",children:Object(l.jsxs)("div",{className:"collapse navbar-collapse ",id:"navbarSupportedContent",children:[Object(l.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(o.c,{to:"/",className:"nav-link",children:"Main"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(o.c,{to:"/products",className:"nav-link ",children:"Our Products"})}),Object(l.jsx)("li",{className:"nav-item",children:t?Object(l.jsx)("p",{id:"logout",className:"nav-link",onClick:function(e){u()},children:"Log out"}):Object(l.jsx)(o.c,{to:"./login",className:"nav-link ",children:"Login"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(o.c,{to:"/register",className:"nav-link ",children:"Register"})})]}),Object(l.jsxs)("form",{className:"form-inline my-2 my-lg-0 d-flex justify-content-end ",children:[Object(l.jsx)("input",{className:"form-control mr-sm-2 p-2",type:"text",placeholder:"Search","aria-label":"Search",value:i,onChange:function(e){d(e.target.value)}}),Object(l.jsx)("button",{className:"btn btn-outline-secondary my-1 my-sm-1 p-2",type:"submit",onClick:function(e){e.preventDefault();var t=s.find((function(e){return e.name===i}));if(t)return n.push("/products/".concat(t.name));alert("This Product is not exist")},children:"Search"})]})]})})]})};n(48);var g=function(){return Object(l.jsx)("footer",{className:"bg-light text-center text-lg-start",children:Object(l.jsxs)("div",{className:"text-center p-3 ",children:["\xa9 2021 Copyright:",Object(l.jsx)("a",{className:"text-dark",href:"https://github.com/waellomari",children:"w@ell.com"})]})})},f=(n(20),n(11)),v=n.n(f),N=new(n(31).a);var w=function(e){var t=Object(c.useState)(""),n=Object(p.a)(t,2),s=n[0],a=n[1],r=Object(c.useState)(""),i=Object(p.a)(r,2),d=i[0],j=i[1],u=Object(c.useContext)(O),b=u.loggedIn,h=u.logout,x=u.setLoggedIn,g=Object(m.g)();return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"wrapper fadeInDown mt-5",children:Object(l.jsxs)("div",{id:"formContent",children:[Object(l.jsx)("h1",{className:"mt-4",children:"Login"}),b?Object(l.jsx)("p",{onClick:function(){h()},children:"Log out"}):Object(l.jsx)("p",{children:"you are not logged In"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),v.a.post("https://computergroup.herokuapp.com/user/login",{username:s,password:d}).then((function(e){a(s),N.set("TOKEN",e.data.token,{path:"/"}),x(!0),g.push("/products")})).catch((function(e){new Error}))},children:[Object(l.jsx)("input",{type:"text",id:"login",className:"fadeIn first mt-2",name:"login",required:!0,value:s,placeholder:"login",onChange:function(e){a(e.target.value)}}),Object(l.jsx)("input",{type:"password",id:"password",className:"fadeIn second",name:"login",placeholder:"password",required:!0,value:d,onChange:function(e){j(e.target.value)}}),Object(l.jsx)("input",{type:"submit",className:"fadeIn fourth",value:"Log in"})]}),Object(l.jsx)("div",{id:"formFooter",children:Object(l.jsx)(o.c,{className:"underlineHover",to:"./register",children:" not registered ?"})})]})})})},C=n(15),y=n(69);var I=function(e){var t=Object(c.useState)({username:"",email:"",password:"",confirmPassword:""}),n=Object(p.a)(t,2),s=n[0],a=n[1],r=function(e){var t=e.target,n=t.id,c=t.value;a((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(C.a)({},n,c))}))};return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"wrapper fadeInDown mt-1",children:Object(l.jsxs)("div",{id:"formContent",children:[Object(l.jsx)("h1",{className:"mt-4",children:"Register"}),e.loggedIn?Object(l.jsx)("p",{children:"Logged In"}):Object(l.jsx)("p",{children:"Not Registered"}),Object(l.jsxs)("form",{children:[Object(l.jsx)("input",{type:"text",id:"username",className:"fadeIn first mt-2",name:"username",required:!0,placeholder:"Username",value:s.username,onChange:r}),Object(l.jsx)("input",{type:"text",id:"email",className:"fadeIn first mt-2",name:"email",required:!0,placeholder:"E-mail",value:s.email,onChange:r}),Object(l.jsx)("input",{type:"password",id:"password",className:"fadeIn second",name:"login",placeholder:"Password",required:!0,value:s.password,onChange:r}),Object(l.jsx)("input",{type:"password",id:"confirmPassword",className:"fadeIn third",name:"login",placeholder:"Confirm Password",required:!0,value:s.confirmPassword,onChange:r}),Object(l.jsx)("input",{type:"submit",className:"fadeIn fourth",value:"Register",onClick:function(e){if(e.preventDefault(),s.password===s.confirmPassword){var t={id:Object(y.a)(),username:s.username,email:s.email,password:s.password};v.a.post("https://computergroup.herokuapp.com/user/register",t).then(alert("you have succeeded registered")).catch((function(e){new Error}))}else alert("Passwords don't match")}})]}),Object(l.jsx)("div",{id:"formFooter",children:Object(l.jsx)(o.c,{className:"underlineHover",to:"/login",children:"Already registered?"})})]})})})};var k=function(){var e=Object(c.useContext)(O),t=e.loggedIn,n=e.setLoggedIn,s=function(e){return t?Object(l.jsx)(m.b,Object(i.a)({},e)):Object(l.jsx)(m.a,{to:"/login"})};return Object(l.jsxs)("div",{children:[Object(l.jsx)(x,{loggedIn:t}),Object(l.jsxs)(m.d,{children:[Object(l.jsx)(m.b,{path:"/login",children:Object(l.jsx)(w,{loggedIn:t,setLoggedIn:n})}),Object(l.jsx)(m.b,{path:"/register",component:I}),Object(l.jsx)(s,{path:"/products",component:b,exact:!0}),Object(l.jsx)(s,{path:"/products/:search",component:h})]}),Object(l.jsx)(g,{})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};var P=function(e){var t=e.children,n=Object(m.g)(),s=Object(c.useState)(!1),a=Object(p.a)(s,2),r=a[0],i=a[1],o=Object(c.useState)(""),d=Object(p.a)(o,2),j=d[0],u=d[1];return Object(l.jsx)(O.Provider,{value:{loggedIn:r,setLoggedIn:i,username:j,setUsername:u,login:function(e){u(e),i(!0),n.push("/products")},logout:function(){i(!1),u(""),n.push("/")}},children:t})};var L=function(e){var t=e.children,n=Object(c.useState)([]),s=Object(p.a)(n,2),a=s[0],r=s[1];return Object(c.useEffect)((function(){v.a.get("https://computergroup.herokuapp.com/products").then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(l.jsx)(j.Provider,{value:{products:a,setProducts:r},children:t})};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(o.a,{children:Object(l.jsx)(P,{children:Object(l.jsx)(L,{children:Object(l.jsx)(k,{})})})})}),document.getElementById("root")),S()}},[[67,1,2]]]);
//# sourceMappingURL=main.278ac95e.chunk.js.map