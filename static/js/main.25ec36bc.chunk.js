(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(t,e,n){t.exports={wrapper:"Preloader_wrapper__1RhJS",overlay:"Preloader_overlay__z-1yl"}},34:function(t,e,n){},59:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n(0),c=n.n(a),s=n(7),i=n.n(s),o=(n(34),n(3)),u=n(28),p=n(8),d=n.n(p),l=n(6),j=n.n(l),h=function(t){return Object(r.jsxs)("div",{className:j.a.card,children:[Object(r.jsx)("h3",{className:j.a.title,children:t.title}),Object(r.jsx)("p",{className:j.a.post,children:t.body}),Object(r.jsx)("span",{className:j.a.author,children:t.author})]})},f=n(4),b=n(14),_=n.n(b),O=n(25),x=n(26),m=n.n(x).a.create({baseURL:"http://jsonplaceholder.typicode.com/"}),v=function(){return m.get("posts")},y=function(){return m.get("users")},g="SET_USERS_DATA",F="SET_POSTS_DATA",S="SET_IS_FETCH",T={users:[],posts:[],isFetch:null,error:null},w=function(t){return{type:g,payload:t}},A=function(t){return{type:S,isFetch:t}},I=n(9),N=n.n(I),C=n.p+"static/media/search.e65d7764.png",E=function(t){return Object(r.jsxs)("div",{className:N.a.findWrapper,children:[Object(r.jsx)("button",{className:N.a.findBtn,disabled:!0,children:Object(r.jsx)("img",{src:C,alt:"search"})}),Object(r.jsx)("input",{className:N.a.findInput,value:t.findAuthor,onChange:function(e){t.onChange(e.currentTarget.value)},autoComplete:"off",name:"search",type:"text",id:"search",placeholder:"Filter by author..."})]})},P=n(15),B=n.n(P),R=n.p+"static/media/loader.149a7823.gif",k=function(){return Object(r.jsx)("div",{className:B.a.overlay,children:Object(r.jsx)("div",{className:B.a.wrapper,children:Object(r.jsx)("img",{src:R,alt:"loading..."})})})};var L=function(){var t=Object(f.c)((function(t){return t.app.posts})),e=Object(f.c)((function(t){return t.app.users})),n=Object(f.c)((function(t){return t.app.isFetch})),c=Object(f.c)((function(t){return t.app.error})),s=Object(f.b)(),i=Object(a.useState)(""),p=Object(u.a)(i,2),l=p[0],j=p[1];Object(a.useEffect)((function(){s(function(){var t=Object(O.a)(_.a.mark((function t(e){var n,r;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(A(!1)),t.prev=1,t.next=4,v();case 4:return n=t.sent,t.next=7,y();case 7:r=t.sent,e((a=n.data,{type:F,payload:a})),e(w(r.data)),e(A(!0)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),e({type:"SET_ERROR",error:t.t0});case 16:case"end":return t.stop()}var a}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}())}),[s]);var b=function(t){var n=e.find((function(e){return e.id===t}));return n?n.name:"unknown"},x=t.map((function(t){return Object(o.a)(Object(o.a)({},t),{},{author:b(t.userId)})})).filter((function(t){return t.author.toLowerCase().includes(l.toLowerCase())}));return n?c?Object(r.jsx)("h3",{children:c}):Object(r.jsx)("div",{className:d.a.app,children:Object(r.jsxs)("div",{className:d.a.container,children:[Object(r.jsx)(E,{onChange:function(t){j(t)},findAuthor:l}),Object(r.jsx)("div",{className:d.a.posts,children:x.map((function(t){return Object(r.jsx)(h,{userId:t.userId,id:t.id,title:t.title,body:t.body,author:t.author},t.id)}))})]})}):Object(r.jsx)(k,{})},J=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,60)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),r(t),a(t),c(t),s(t)}))},W=n(5),D=n(27),H=Object(W.c)({app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g:return Object(o.a)(Object(o.a)({},t),{},{users:e.payload});case F:return Object(o.a)(Object(o.a)({},t),{},{posts:e.payload});case S:return Object(o.a)(Object(o.a)({},t),{},{isFetch:e.isFetch});default:return t}}}),U=Object(W.d)(H,Object(W.a)(D.a));i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(f.a,{store:U,children:Object(r.jsx)(L,{})})}),document.getElementById("root")),J()},6:function(t,e,n){t.exports={card:"Post_card__3ngog",title:"Post_title__10_eX",post:"Post_post__3myAU",author:"Post_author__36IxH"}},8:function(t,e,n){t.exports={app:"App_app__2TJWI",container:"App_container__2o1Im",posts:"App_posts__sGhBT"}},9:function(t,e,n){t.exports={findWrapper:"Find_findWrapper__2Vpwq",findBtn:"Find_findBtn__1AS8m",findInput:"Find_findInput__QHnTA"}}},[[59,1,2]]]);
//# sourceMappingURL=main.25ec36bc.chunk.js.map