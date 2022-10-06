(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{22:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(11),a=c(5),r=c(2),s=(c(20),c(21),c(22),c(6)),j=c.n(s),i=c(0),l=function(e){var t=e.to,c=e.text;return Object(i.jsx)(a.c,{to:t,className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},children:c})},o=function(){return Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(l,{to:"/",text:"Home"}),Object(i.jsx)(l,{to:"people",text:"People"})]})})})},b=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)(o,{}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(r.b,{})})})]})},d=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},h=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},x=c(4),O=c(1);function u(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}c(24);var p=function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})},m=c(9),f=function(e){var t=e.person,c=e.parent;return Object(i.jsx)(i.Fragment,{children:t?Object(i.jsx)(a.b,{to:"../".concat(t.slug),className:j()({"has-text-danger":"f"===t.sex}),children:t.name}):Object(i.jsx)(i.Fragment,{children:c})})},g=function(e){var t=e.people,c=Object(r.i)().slug,n=void 0===c?"":c,a=function(e,t){return e.find((function(e){return e.name===t}))||null};return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":e.slug===n}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(f,{person:e})}),Object(i.jsx)("td",{children:e.sex}),Object(i.jsx)("td",{children:e.born}),Object(i.jsx)("td",{children:e.died}),Object(i.jsx)("td",{children:e.motherName?Object(i.jsx)(f,{person:a(Object(m.a)(t),e.motherName),parent:e.motherName}):"-"}),Object(i.jsx)("td",{children:e.fatherName?Object(i.jsx)(f,{person:a(Object(m.a)(t),e.fatherName),parent:e.fatherName}):"-"})]},e.slug)}))})]})},v=function(){var e=Object(O.useState)([]),t=Object(x.a)(e,2),c=t[0],n=t[1],a=Object(O.useState)(""),r=Object(x.a)(a,2),s=r[0],j=r[1],l=Object(O.useState)(!1),o=Object(x.a)(l,2),b=o[0],d=o[1];return Object(O.useEffect)((function(){d(!0),u().then((function(e){return n(e)})).catch((function(){return j("Something went wrong")})).finally((function(){return d(!1)}))}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"box table-container",children:[b?Object(i.jsx)(p,{}):s&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:s}),!b&&!c.length&&!s&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!b&&!!c.length&&!s&&Object(i.jsx)(g,{people:c})]})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(a.a,{children:Object(i.jsx)(r.e,{children:Object(i.jsxs)(r.c,{path:"/",element:Object(i.jsx)(b,{}),children:[Object(i.jsxs)(r.c,{path:"people",children:[Object(i.jsx)(r.c,{index:!0,element:Object(i.jsx)(v,{})}),Object(i.jsx)(r.c,{path:":slug",element:Object(i.jsx)(v,{})})]}),Object(i.jsx)(r.c,{index:!0,element:Object(i.jsx)(d,{})}),Object(i.jsx)(r.c,{path:"home",element:Object(i.jsx)(r.a,{to:"/",replace:!0})}),Object(i.jsx)(r.c,{path:"*",element:Object(i.jsx)(h,{})})]})})}))}},[[25,1,2]]]);
//# sourceMappingURL=main.a0c25539.chunk.js.map