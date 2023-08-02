import{s as M,h as P}from"./scheduler.52f72a43.js";import{S,i as V,g,m as B,s as q,h as b,j as x,n as L,f as p,c as E,y as C,k as m,a as F,x as _,A as U,o as z,d as w,p as j,t as A,b as N,B as Q,z as G,r as J,u as K,v as R,w as W}from"./index.46dabef3.js";import{s as H,e as O}from"./Header.cc8a2eb0.js";/* empty css                                              */function T(c){let e,n,i,s,a;return{c(){e=g("div"),n=g("h1"),i=B(c[2]),this.h()},l(r){e=b(r,"DIV",{});var u=x(e);n=b(u,"H1",{class:!0});var h=x(n);i=L(h,c[2]),h.forEach(p),u.forEach(p),this.h()},h(){m(n,"class","p-6 text-left body-large text-surface-on-dark pr-24")},m(r,u){F(r,e,u),_(e,n),_(n,i),a=!0},p(r,u){(!a||u&4)&&z(i,r[2])},i(r){a||(r&&P(()=>{a&&(s||(s=Q(e,H,{duration:300},!0)),s.run(1))}),a=!0)},o(r){r&&(s||(s=Q(e,H,{duration:300},!1)),s.run(0)),a=!1},d(r){r&&p(e),r&&s&&s.end()}}}function X(c){let e,n,i,s,a,r,u='<svg class=" svelte-171pz8e" width="20" height="20" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7"></path></svg>',h,k,v,t=c[0]&&T(c);return{c(){e=g("button"),n=g("div"),i=g("h3"),s=B(c[1]),a=q(),r=g("span"),r.innerHTML=u,h=q(),t&&t.c(),this.h()},l(d){e=b(d,"BUTTON",{"aria-expanded":!0,class:!0});var l=x(e);n=b(l,"DIV",{class:!0});var f=x(n);i=b(f,"H3",{class:!0});var o=x(i);s=L(o,c[1]),o.forEach(p),a=E(f),r=b(f,"SPAN",{class:!0,["data-svelte-h"]:!0}),C(r)!=="svelte-3dpohw"&&(r.innerHTML=u),f.forEach(p),h=E(l),t&&t.l(l),l.forEach(p),this.h()},h(){m(i,"class","p-6 font-bold text-left title-large"),m(r,"class","p-10 ml-auto"),m(n,"class","flex place-items-center"),m(e,"aria-expanded",c[0]),m(e,"class","w-full min-h-full p-6 px-4 mb-8 rounded-md shadow-lg bg-surface-dark h-fit svelte-171pz8e")},m(d,l){F(d,e,l),_(e,n),_(n,i),_(i,s),_(n,a),_(n,r),_(e,h),t&&t.m(e,null),k||(v=U(e,"click",c[3]),k=!0)},p(d,[l]){l&2&&z(s,d[1]),d[0]?t?(t.p(d,l),l&1&&w(t,1)):(t=T(d),t.c(),w(t,1),t.m(e,null)):t&&(j(),A(t,1,1,()=>{t=null}),N()),l&1&&m(e,"aria-expanded",d[0])},i(d){w(t)},o(d){A(t)},d(d){d&&p(e),t&&t.d(),k=!1,v()}}}function Y(c,e,n){let{question:i=""}=e,{answer:s=""}=e,{isOpen:a=!1}=e;const r=()=>n(0,a=!a);return c.$$set=u=>{"question"in u&&n(1,i=u.question),"answer"in u&&n(2,s=u.answer),"isOpen"in u&&n(0,a=u.isOpen)},[a,i,s,r]}class Z extends S{constructor(e){super(),V(this,e,Y,X,M,{question:1,answer:2,isOpen:0})}}function D(c,e,n){const i=c.slice();return i[3]=e[n],i}function I(c){let e,n,i;return e=new Z({props:{question:c[3].question,answer:c[3].answer,isOpen:c[3].index==c[0]}}),{c(){J(e.$$.fragment),n=q()},l(s){K(e.$$.fragment,s),n=E(s)},m(s,a){R(e,s,a),F(s,n,a),i=!0},p(s,a){const r={};a&2&&(r.question=s[3].question),a&2&&(r.answer=s[3].answer),a&3&&(r.isOpen=s[3].index==s[0]),e.$set(r)},i(s){i||(w(e.$$.fragment,s),i=!0)},o(s){A(e.$$.fragment,s),i=!1},d(s){s&&p(n),W(e,s)}}}function $(c){let e,n,i="Frequently Asked Questions",s,a,r='<input type="text" class="w-full px-4 py-2 border-gray-300 bg-surface-variant-dark rounded-l-lg" placeholder="Search FAQs..."/> <button class="px-4 py-2 text-white bg-surface-dark/90 rounded-r-lg hover:bg-surface-dark">Search</button>',u,h,k,v=O(c[1]),t=[];for(let l=0;l<v.length;l+=1)t[l]=I(D(c,v,l));const d=l=>A(t[l],1,1,()=>{t[l]=null});return{c(){e=g("div"),n=g("h2"),n.textContent=i,s=q(),a=g("div"),a.innerHTML=r,u=q(),h=g("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=b(l,"DIV",{class:!0});var f=x(e);n=b(f,"H2",{class:!0,["data-svelte-h"]:!0}),C(n)!=="svelte-157ahmc"&&(n.textContent=i),s=E(f),a=b(f,"DIV",{class:!0,["data-svelte-h"]:!0}),C(a)!=="svelte-edxdft"&&(a.innerHTML=r),u=E(f),h=b(f,"DIV",{class:!0});var o=x(h);for(let y=0;y<t.length;y+=1)t[y].l(o);o.forEach(p),f.forEach(p),this.h()},h(){m(n,"class","py-12 font-bold text-primary-dark text-center display-small"),m(a,"class","flex py-12 place-self-center"),m(h,"class","grid grid-cols-1 gap-6 mx-10 lg:grid-cols-2"),m(e,"class","flex flex-col mx-auto")},m(l,f){F(l,e,f),_(e,n),_(e,s),_(e,a),_(e,u),_(e,h);for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(h,null);k=!0},p(l,[f]){if(f&3){v=O(l[1]);let o;for(o=0;o<v.length;o+=1){const y=D(l,v,o);t[o]?(t[o].p(y,f),w(t[o],1)):(t[o]=I(y),t[o].c(),w(t[o],1),t[o].m(h,null))}for(j(),o=v.length;o<t.length;o+=1)d(o);N()}},i(l){if(!k){for(let f=0;f<v.length;f+=1)w(t[f]);k=!0}},o(l){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)A(t[f]);k=!1},d(l){l&&p(e),G(t,l)}}}function ee(c,e,n){let{FAQs:i=[]}=e,{activeEntry:s=0}=e;return c.$$set=a=>{"FAQs"in a&&n(1,i=a.FAQs),"activeEntry"in a&&n(0,s=a.activeEntry)},[s,i]}class le extends S{constructor(e){super(),V(this,e,ee,$,M,{FAQs:1,activeEntry:0})}}export{le as F};