(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{17:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(10),i=n.n(s),a=n(6),j=n(2),u=n(5),d=n.n(u),o=n(7),b=n(4),l=n(1);var O=function(e){var t=e.id,n=e.coverImg,c=e.title,r=e.summary,s=e.genres;return Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:n,alt:c}),Object(l.jsx)("h2",{children:Object(l.jsx)(a.b,{to:"/movie/".concat(t),children:c})}),Object(l.jsx)("p",{children:r}),Object(l.jsx)("ul",{children:s.map((function(e){return Object(l.jsx)("li",{children:e},e)}))})]})};var h=function(){var e=Object(c.useState)(!0),t=Object(b.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)([]),i=Object(b.a)(s,2),a=i[0],j=i[1],u=function(){var e=Object(o.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,j(t.data.movies),r(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){u()}),[]),Object(l.jsx)("div",{children:n?Object(l.jsx)("h1",{children:"Loading..."}):Object(l.jsx)("div",{children:a.map((function(e){return Object(l.jsx)(O,{id:e.id,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)}))})})};var m=function(){var e=Object(c.useState)(!0),t=Object(b.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(),i=Object(b.a)(s,2),a=i[0],u=i[1],O=Object(j.g)().id,h=function(){var e=Object(o.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(O));case 2:return e.next=4,e.sent.json();case 4:t=e.sent,u(t.data.movie),r(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){h()}),[]),Object(l.jsx)("div",{children:n?Object(l.jsx)("h1",{children:"Loading..."}):Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:a.medium_cover_image,alt:""}),Object(l.jsx)("h2",{children:a.title}),Object(l.jsx)("h2",{children:a.title_long}),Object(l.jsxs)("h3",{children:["rating: ",a.rating]}),Object(l.jsxs)("p",{children:["date uploaded: ",a.date_uploaded.split(" ")[0]]}),Object(l.jsxs)("p",{children:["genre:",a.genres.map((function(e){return Object(l.jsx)("span",{children:e},e)})),Object(l.jsx)("span",{children:"|"}),Object(l.jsxs)("span",{children:[a.runtime," mintues"]})]}),Object(l.jsx)("p",{children:a.description_full})]})})};var p=function(){return Object(l.jsx)(a.a,{basename:"/movie-app",children:Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{path:"/movie/:id",element:Object(l.jsx)(m,{})}),Object(l.jsx)(j.a,{path:"/",element:Object(l.jsx)(h,{})})]})})};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.7c1ac3fe.chunk.js.map