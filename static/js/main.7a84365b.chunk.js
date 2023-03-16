(this["webpackJsonpmedals-b-react"]=this["webpackJsonpmedals-b-react"]||[]).push([[0],{46:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(37),o=n.n(r),s=(n(46),n(18)),u=n(10),i=n.n(u),l=n(15),d=n(14),p=n(16),h=n.n(p),m=n(41),f=n(21),j=n(4),b=n(39),O=n(3);var g=function(e){var t=e.onLogin,n=Object(a.useState)(""),c=Object(d.a)(n,2),r=c[0],o=c[1],s=Object(a.useState)(""),u=Object(d.a)(s,2),i=u[0],l=u[1],p=Object(j.e)();return Object(O.jsxs)("form",{className:"loginForm",onSubmit:function(e){return function(e){e.preventDefault(),console.log("Submit"),t(r,i),p.push("/")}(e)},children:[Object(O.jsxs)("p",{children:[Object(O.jsx)("label",{htmlFor:"username",children:"Username: "}),Object(O.jsx)("input",{onChange:function(e){return o(e.target.value)},value:r,autoFocus:!0,type:"text",name:"username",id:"username",placeholder:"Username"})]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("label",{htmlFor:"password",children:"Password: "}),Object(O.jsx)("input",{onChange:function(e){return l(e.target.value)},value:i,type:"password",name:"password",id:"password",placeholder:"Password"})]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("button",{disabled:0===r.length||0===i.length,type:"submit",children:"Submit"})," ",Object(O.jsx)("button",{onClick:function(){p.push("/")},type:"button",children:"Cancel"})]})]})},v=function(e){var t=e.medal,n=e.country,a=e.onIncrement,r=e.onDecrement,o=e.canPatch;return Object(O.jsxs)("div",{className:"medals",children:[t.name," Medals: ",n[t.name],o&&Object(O.jsxs)(c.a.Fragment,{children:[Object(O.jsx)("button",{onClick:function(){return a(n.id,t.name)},children:"+"}),Object(O.jsx)("button",{disabled:0===n[t.name],onClick:function(){return r(n.id,t.name)},children:"-"})]})]})},x=function(e){var t=e.country,n=e.medals,a=e.onIncrement,c=e.onDecrement,r=e.onDelete,o=(e.onSave,e.onReset,e.canDelete),s=e.canPatch;return Object(O.jsxs)("div",{className:"country",children:[Object(O.jsxs)("div",{className:"name",children:[t.name,Object(O.jsx)("span",{className:"badge",children:function(e,t){var n=0;return t.forEach((function(t){n+=e[t.name]})),n}(t,n)})]}),n.map((function(e){return Object(O.jsx)(v,{country:t,medal:e,canPatch:s,onIncrement:a,onDecrement:c},e.id)})),o&&Object(O.jsx)("button",{onClick:function(){return r(t.id)},children:"delete"}),Object(O.jsx)("hr",{})]})},w=function(e){var t=e.onAdd;return Object(O.jsx)("div",{className:"newCountryButton",children:Object(O.jsx)("button",{onClick:function(){var e=prompt("Enter country name");e&&e.trim().length>0&&t(e)},children:"New Country"})})},k=(n(75),function(){var e="https://medals-api-final.azurewebsites.net/jwt/api/country",t=Object(a.useState)([]),n=Object(d.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(null),u=Object(d.a)(o,2),p=u[0],v=u[1],k=Object(a.useRef)([{id:1,name:"gold"},{id:2,name:"silver"},{id:3,name:"bronze"}]),y=Object(a.useState)({name:null,canPost:!1,canPatch:!1,canDelete:!1}),P=Object(d.a)(y,2),S=P[0],D=P[1],C=Object(a.useRef)(null);C.current=c,Object(a.useEffect)((function(){function t(){return(t=Object(l.a)(i.a.mark((function t(){var n,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get(e);case 2:n=t.sent,a=n.data,r(a);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}();var n=localStorage.getItem("token");n&&D(A(n));var a=(new m.a).withUrl("https://medals-api-final.azurewebsites.net/medalsHub").withAutomaticReconnect().build();v(a)}),[]),Object(a.useEffect)((function(){p&&p.start().then((function(){console.log("Connected!"),p.on("ReceiveAddMessage",(function(e){console.log("Add: ".concat(e.name));var t=Object(s.a)(C.current);t=t.concat(e),r(t)})),p.on("ReceiveDeleteMessage",(function(e){console.log("Delete id: ".concat(e));var t=Object(s.a)(C.current);t=t.filter((function(t){return t.id!==e})),r(t)})),p.on("ReceivePatchMessage",(function(e){console.log("Patch: ".concat(e.name));var t=Object(s.a)(C.current),n=t.findIndex((function(t){return t.id===e.id}));t[n]=e,r(t)}))})).catch((function(e){return console.log("Connection failed: ",e)}))}),[p]);var I=function(){var t=Object(l.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.post(e,{name:n},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),!t.t0.response||401!==t.t0.response.status&&403!==t.t0.response.status?t.t0.response?console.log(t.t0.response):console.log("Request failed"):alert("You are not authorized to complete this request");case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}(),N=function(){var t=Object(l.a)(i.a.mark((function t(n){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=c,r(c.filter((function(e){return e.id!==n}))),t.prev=2,t.next=5,h.a.delete("".concat(e,"/").concat(n),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(2),t.t0.response&&404===t.t0.response.status?console.log("The record does not exist - it may have already been deleted"):(r(a),!t.t0.response||401!==t.t0.response.status&&403!==t.t0.response.status?t.t0.response?console.log(t.t0.response):console.log("Request failed"):alert("You are not authorized to complete this request"));case 10:case"end":return t.stop()}}),t,null,[[2,7]])})));return function(e){return t.apply(this,arguments)}}(),R=function(e,t){return F(e,t,1)},z=function(e,t){return F(e,t,-1)},F=function(){var t=Object(l.a)(i.a.mark((function t(n,a,o){var u,l,d;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=c.findIndex((function(e){return e.id===n})),(l=Object(s.a)(c))[u][a]+=1*o,r(l),d=[{op:"replace",path:a,value:l[u][a]}],console.log("json patch for id: ".concat(n,": ").concat(JSON.stringify(d))),t.prev=6,t.next=9,h.a.patch("".concat(e,"/").concat(n),d,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(6),t.t0.response&&404===t.t0.response.status?console.log("The record does not exist - it may have been deleted"):!t.t0.response||401!==t.t0.response.status&&403!==t.t0.response.status?t.t0.response?console.log(t.t0.response):console.log("Request failed"):(alert("You are not authorized to complete this request"),window.location.reload(!1));case 14:case"end":return t.stop()}}),t,null,[[6,11]])})));return function(e,n,a){return t.apply(this,arguments)}}(),L=function(){var e=Object(l.a)(i.a.mark((function e(t,n){var a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("https://medals-api-final.azurewebsites.net/api/users/login",{username:t,password:n});case 3:a=e.sent,c=a.data.token,localStorage.setItem("token",c),D(A(c)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),!e.t0.response||401!==e.t0.response.status&&400!==e.t0.response.status?e.t0.response?console.log(e.t0.response):console.log("Request failed"):alert("Login failed");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),A=function(e){var t=Object(b.a)(e);return{name:t.username,canPost:-1!==t.roles.indexOf("medals-post"),canPatch:-1!==t.roles.indexOf("medals-patch"),canDelete:-1!==t.roles.indexOf("medals-delete")}};return Object(O.jsxs)(f.a,{children:[Object(O.jsxs)("div",{className:"appHeading",children:["Olympic Medals",Object(O.jsx)("span",{className:"badge",children:function(){var e=0;return k.current.forEach((function(t){e+=c.reduce((function(e,n){return e+n[t.name]}),0)})),e}()}),S.name?Object(O.jsxs)("span",{className:"logout",children:[Object(O.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault(),console.log("logout"),localStorage.removeItem("token"),D({name:null,canPost:!1,canPatch:!1,canDelete:!1}),!1},className:"logoutLink",children:"Logout"})," [",S.name,"]"]}):Object(O.jsx)(f.b,{to:"/login",className:"loginLink",children:"Login"})]}),Object(O.jsx)(j.a,{exact:!0,path:"/login",children:Object(O.jsx)(g,{onLogin:L})}),Object(O.jsx)("div",{className:"countries",children:c.map((function(e){return Object(O.jsx)(x,{country:e,medals:k.current,canDelete:S.canDelete,canPatch:S.canPatch,onDelete:N,onIncrement:R,onDecrement:z},e.id)}))}),S.canPost&&Object(O.jsx)(w,{onAdd:I})]})}),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(k,{})}),document.getElementById("root")),y()}},[[76,1,2]]]);
//# sourceMappingURL=main.7a84365b.chunk.js.map