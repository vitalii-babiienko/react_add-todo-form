(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(9),s=a(3),c=a(6),u=a(1),o=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),l=a(8),d=a.n(l),m=a(0),j=function(e){var t=e.user,a=t.name,n=t.email;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(n),children:a})},b=function(e){var t=e.todo,a=t.title,n=t.completed,i=t.user,r=t.id;return Object(m.jsxs)("article",{"data-id":r,className:d()("TodoInfo",{"TodoInfo--completed":n}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:a}),i&&Object(m.jsx)(j,{user:i})]})},h=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(b,{todo:e},e.id)}))})};function p(e){return o.find((function(t){return t.id===e}))||null}var O=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:p(e.userId)})})),f=function(){var e=Object(u.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(u.useState)(!1),c=Object(s.a)(i,2),l=c[0],d=c[1],j=Object(u.useState)(0),b=Object(s.a)(j,2),f=b[0],x=b[1],v=Object(u.useState)(!1),y=Object(s.a)(v,2),S=y[0],N=y[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){e.preventDefault(),a.trim()||d(!0),f||N(!0),a.trim()&&f&&(!function(){var e={id:Math.max.apply(Math,Object(r.a)(O.map((function(e){return e.id}))))+1,userId:Number(f),title:a,completed:!1,user:p(f)};O.push(e)}(),n(""),d(!1),x(0),N(!1))},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("span",{children:"Title: "}),Object(m.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"Please enter a title",value:a,onChange:function(e){n(e.target.value.replace(/(?:(?![\t-\r 0-9A-Z_a-z\xA0\u017F\u0400-\u0484\u0487-\u052F\u1680\u1C80-\u1C88\u1D2B\u1D78\u2000-\u200A\u2028\u2029\u202F\u205F\u212A\u2DE0-\u2DFF\u3000\uA640-\uA69F\uFE2E\uFE2F\uFEFF])[\s\S])/gi,"")),d(!1)}}),l&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("span",{children:"User: "}),Object(m.jsxs)("select",{"data-cy":"userSelect",value:f,onChange:function(e){x(Number(e.target.value)),N(!1)},children:[Object(m.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),o.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),S&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(m.jsx)(h,{todos:O})]})};i.a.render(Object(m.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.de1131e3.chunk.js.map