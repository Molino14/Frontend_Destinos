(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{40:function(e,t,c){},41:function(e,t,c){},43:function(e,t,c){},45:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(33),r=c.n(n),s=(c(39),c(40),c(8)),i=c(15),o=c(3),l=(c(41),c(1)),d=function(e){return Object(l.jsx)("div",{})},j=(c(43),function(e){return Object(l.jsx)("div",{children:Object(l.jsx)("ul",{children:Object(l.jsx)(d,{})})})}),u=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Usuarios"}),Object(l.jsx)(j,{})]})},b=c(11),p=c(2),h=c.n(p),O=c(5),m=c(19),x=(c(45),function(e){return Object(l.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})}),f=c(18),v=c.n(f),g=function(e){e.tieneAcceso;var t=e.datos,c=Object(m.a)(),a=c.register,n=c.handleSubmit,r=(c.setValue,c.formState.errors,function(){var e=Object(O.a)(h.a.mark((function e(c){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("http://localhost:5000/api/destinos/",{nombre:c.nombre,descripcion:c.descripcion,direccion:c.direccion,creador:t.userId,loacalizacion:{}},{headers:{Authorization:"Bearer "+t.token}}).then((function(e){console.log("Todo correcto",e.data)})).catch((function(e){console.log(e.response.data)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return Object(l.jsxs)(x,{className:"authentication",children:[Object(l.jsx)("h2",{children:"Datos del destino"}),Object(l.jsxs)("form",{className:"card",onSubmit:n(r),children:[Object(l.jsx)("input",Object(b.a)({type:"text",placeholder:"Nombre"},a("nombre",{required:!0,message:"Requerido"}))),Object(l.jsx)("input",Object(b.a)({type:"text",placeholder:"Descripci\xf3n"},a("descripcion",{required:!0,message:"Campo requerido"}))),Object(l.jsx)("input",Object(b.a)({type:"text",placeholder:"Direcci\xf3n"},a("direccion",{required:!0}))),Object(l.jsx)("input",Object(b.a)({type:"creador",placeholder:"Creador"},a("creador",{required:!0},"Campo requerido"))),Object(l.jsx)("input",Object(b.a)({type:"text",placeholder:"Localizaci\xf3n"},a("localizacion"))),Object(l.jsx)("button",{type:"submit",children:"Guardar datos"})]})]})},y=function(){return Object(l.jsx)("div",{className:"navbar navbar-expand-lg navbar-light bg-primary",children:Object(l.jsx)("div",{className:"navbar navbar-dark bg-primary",children:Object(l.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Inicio"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{className:"nav-link",to:"/destinos/nuevodestino",children:"Destinos"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{className:"nav-link",to:"/auth",children:"Autenticar"})})]})})})};c(69);function N(e){var t=e.gestionarAcceso,c=Object(a.useState)(!1),n=Object(s.a)(c,2),r=n[0],i=n[1],o=Object(m.a)(),d=o.register,j=o.handleSubmit,u=o.setValue,p=o.formState.errors,f=function(){var e=Object(O.a)(h.a.mark((function e(c){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(c),r){e.next=6;break}return e.next=4,v.a.post("http://localhost:5000/api/usuarios/alta",{nombre:c.nombre,email:c.email,password:c.password}).then((function(e){console.log("Usuario creado"),t(e.data)})).catch((function(e){console.log(e.response.data)}));case 4:e.next=8;break;case 6:return e.next=8,v.a.post("http://localhost:5000/api/usuarios/login",{email:c.email,password:c.password}).then((function(e){console.log("Login Correcto"),t(e.data)})).catch((function(e){console.log(e)}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)(x,{className:"authentication",children:[Object(l.jsx)("h2",{children:r?"Login necesario":"Introduzca datos de alta"}),Object(l.jsxs)("form",{className:"card",onSubmit:j(f),children:[!r&&Object(l.jsx)("input",Object(b.a)({type:"text",placeholder:"Nombre de Usuario."},d("nombre",{required:!0,message:"Requerido"}))),Object(l.jsx)("input",Object(b.a)({type:"text",placeholder:"Email"},d("email",{required:!0,pattern:/^\S+@\S+$/i}))),p.email&&"required"===p.email.type&&Object(l.jsx)("span",{children:"Se requiere e-mail v\xe1lido"}),p.email&&"pattern"===p.email.type&&Object(l.jsx)("span",{children:"Se requiere e-mail v\xe1lido"}),Object(l.jsx)("input",Object(b.a)({type:"password",placeholder:"Contrase\xf1a"},d("password",{required:!0,minLength:6}))),p.password&&"required"===p.password.type&&Object(l.jsx)("span",{children:"Se requiere contrase\xf1a"}),p.password&&"minLength"===p.password.type&&Object(l.jsx)("span",{children:"M\xednimo de 6 caracteres"}),Object(l.jsxs)("button",{type:"submit",children:[r?"ACCESO":"ALTA"," "]})]}),Object(l.jsxs)("button",{onClick:function(){r||u("Nombre",void 0),i(!r)},children:["CAMBIAR A ",r?"ALTA":"ACCESO"]})]})}var S=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)({}),d=Object(s.a)(r,2),j=d[0],b=d[1],p=Object(a.useState)(),h=Object(s.a)(p,2),O=(h[0],h[1]);return Object(l.jsxs)(i.a,{children:[Object(l.jsx)(y,{}),Object(l.jsxs)(o.d,{children:[Object(l.jsx)(o.b,{exact:!0,path:"/",children:Object(l.jsx)(u,{})}),Object(l.jsx)(o.b,{path:"/destinos/nuevodestino",children:Object(l.jsx)(g,{acceso:c,datos:j})}),Object(l.jsx)(o.b,{path:"/auth",children:Object(l.jsx)(N,{gestionarAcceso:function(e){b(e),n(!0),O(e.token)}})}),Object(l.jsx)(o.a,{to:"/"})]})]})};r.a.render(Object(l.jsx)(S,{}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.bdf918d1.chunk.js.map