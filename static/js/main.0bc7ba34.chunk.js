(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{33:function(e,t,c){},35:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var n=c(24),a=c(7),s=c(3),r=c(11),j=c.n(r),i=(c(33),c(2)),o=function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},l=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(a.c,{className:o,to:"/",children:"Home"}),Object(i.jsx)(a.c,{className:o,to:"people",children:"People"})]})})}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(s.b,{})})})]})},b=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},h=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},d=c(22),O=c(4),x=c(0);function u(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var m=function(e){var t=e.person;return Object(i.jsx)(a.b,{to:"../".concat(t.slug),className:j()({"has-text-danger":"f"===t.sex}),children:t.name})},p=function(e){var t=e.person,c=Object(s.r)().selectedPerson,n=void 0===c?"":c;return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":n===t.slug}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(m,{person:t})}),Object(i.jsx)("td",{children:t.sex}),Object(i.jsx)("td",{children:t.born}),Object(i.jsx)("td",{children:t.died}),Object(i.jsx)("td",{children:t.mother?Object(i.jsx)(m,{person:t.mother}):t.motherName||"-"}),Object(i.jsx)("td",{children:t.father?Object(i.jsx)(m,{person:t.father}):t.fatherName||"-"})]})},f=function(e){var t=e.persons;return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsx)(p,{person:e},e.slug)}))})]})},v=(c(35),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})}),g=function(){var e=Object(x.useState)([]),t=Object(O.a)(e,2),c=t[0],n=t[1],a=Object(x.useState)(!1),s=Object(O.a)(a,2),r=s[0],j=s[1],o=Object(x.useState)(!1),l=Object(O.a)(o,2),b=l[0],h=l[1];Object(x.useEffect)((function(){j(!0),u().then(n).catch((function(){h(!0)})).finally((function(){j(!1)}))}),[]);var m=c.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{mother:c.find((function(t){return e.motherName===t.name})),father:c.find((function(t){return e.fatherName===t.name}))})})),p=b&&!r,g=!b&&!r;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"box table-container",children:[r&&Object(i.jsx)(v,{}),p&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!c.length&&g&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!!c.length&&Object(i.jsx)(f,{persons:m})]})})]})},N=function(){return Object(i.jsx)(a.a,{children:Object(i.jsx)(s.e,{children:Object(i.jsxs)(s.c,{path:"/",element:Object(i.jsx)(l,{}),children:[Object(i.jsx)(s.c,{index:!0,element:Object(i.jsx)(b,{})}),Object(i.jsx)(s.c,{path:"people",children:Object(i.jsx)(s.c,{path:":selectedPerson?",element:Object(i.jsx)(g,{})})}),Object(i.jsx)(s.c,{path:"*",element:Object(i.jsx)(h,{})}),Object(i.jsx)(s.c,{path:"/home",element:Object(i.jsx)(s.a,{to:"/",replace:!0})})]})})})};c(36),c(37);Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(N,{}))}},[[38,1,2]]]);
//# sourceMappingURL=main.0bc7ba34.chunk.js.map