import{s as w,g as E,u as j,h as q,i as A,j as O,n as D}from"../chunks/scheduler.b428cfaa.js";import{S as L,i as R,g as f,s as S,r as V,h as _,j as $,f as p,c as B,u as H,k as h,a as I,y as g,v as J,A as M,d as k,t as C,w as N,x as Q}from"../chunks/index.ff765d8c.js";import{O as T}from"../chunks/OutlineButton.b605e8aa.js";import{p as z}from"../chunks/stores.f89c7b48.js";import{a as F}from"../chunks/journeysStore.68908465.js";import"../chunks/journeys.5a2215ab.js";function G(r){let e,o="Request Quote";return{c(){e=f("h2"),e.textContent=o,this.h()},l(s){e=_(s,"H2",{class:!0,"data-svelte-h":!0}),Q(e)!=="svelte-21pys9"&&(e.textContent=o),this.h()},h(){h(e,"class","display-small md:display-medium")},m(s,i){I(s,e,i)},p:D,d(s){s&&p(e)}}}function K(r){let e,o,s,i,c,l,u,m,b;const v=r[1].default,a=E(v,r,r[3],null);return l=new T({props:{href:"/request-tour",$$slots:{default:[G]},$$scope:{ctx:r}}}),{c(){e=f("main"),o=f("article"),a&&a.c(),s=S(),i=f("div"),c=f("div"),V(l.$$.fragment),this.h()},l(t){e=_(t,"MAIN",{class:!0});var n=$(e);o=_(n,"ARTICLE",{class:!0});var d=$(o);a&&a.l(d),d.forEach(p),s=B(n),i=_(n,"DIV",{class:!0});var y=$(i);c=_(y,"DIV",{class:!0});var x=$(c);H(l.$$.fragment,x),x.forEach(p),y.forEach(p),n.forEach(p),this.h()},h(){h(o,"class","text-left prose prose-sm md:prose-base lg:prose-lg xl:prose-xl dark:prose-invert prose-main justify-items-center space-y-8 mx-auto"),h(c,"class","backdrop-blur-xl w-fit mx-auto rounded-lg"),h(i,"class","fixed bottom-6 lg:bottom-10 w-full left-1/2 -translate-x-1/2"),h(e,"class","py-40 px-4 border-b shadow-2xl sm:px-6 md:px-8 border-primary-light/40 dark:border-primary-dark/40")},m(t,n){I(t,e,n),g(e,o),a&&a.m(o,null),g(e,s),g(e,i),g(i,c),J(l,c,null),u=!0,m||(b=M(c,"click",r[2]),m=!0)},p(t,[n]){a&&a.p&&(!u||n&8)&&j(a,v,t,t[3],u?A(v,t[3],n,null):q(t[3]),null);const d={};n&8&&(d.$$scope={dirty:n,ctx:t}),l.$set(d)},i(t){u||(k(a,t),k(l.$$.fragment,t),u=!0)},o(t){C(a,t),C(l.$$.fragment,t),u=!1},d(t){t&&p(e),a&&a.d(t),N(l),m=!1,b()}}}function P(r,e,o){let s;O(r,z,m=>o(4,s=m));let{$$slots:i={},$$scope:c}=e,l=s.url.pathname.slice(s.url.pathname.lastIndexOf("/")+1);const u=()=>{console.log("on click"),F(l)};return r.$$set=m=>{"$$scope"in m&&o(3,c=m.$$scope)},[l,i,u,c]}class te extends L{constructor(e){super(),R(this,e,P,K,w,{})}}export{te as component};