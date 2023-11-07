import{s as ue,g as fe,u as he,h as de,i as me,d as te,e as se,n as _e}from"./scheduler.e5dead65.js";import{S as ge,i as ve,g,m as P,s as j,r as le,h as v,j as E,n as T,f as i,c as F,u as ae,x as X,k as f,a as D,y as r,v as oe,o as B,d as U,t as W,w as ne,z as be}from"./index.7dc9c6a7.js";import{e as ie}from"./each.e59479a4.js";import"./paths.4d0284a3.js";import{O as pe}from"./OutlineButton.d5fb8292.js";import{F as xe}from"./FAQSection.ff02b043.js";function re(o,t,s){const l=o.slice();return l[7]=t[s].label,l[8]=t[s].body,l}function ye(o){let t,s="Choose Route";return{c(){t=g("h1"),t.textContent=s,this.h()},l(l){t=v(l,"H1",{class:!0,"data-svelte-h":!0}),X(t)!=="svelte-1e2azik"&&(t.textContent=s),this.h()},h(){f(t,"class","px-4 py-2 title-large")},m(l,m){D(l,t,m)},p:_e,d(l){l&&i(t)}}}function ce(o){let t,s,l=o[7]+"",m,C,u,b=o[8]+"",y,a;return{c(){t=g("div"),s=g("h2"),m=P(l),C=j(),u=g("p"),y=P(b),a=j(),this.h()},l(p){t=v(p,"DIV",{class:!0});var h=E(t);s=v(h,"H2",{class:!0});var k=E(s);m=T(k,l),k.forEach(i),C=F(h),u=v(h,"P",{class:!0});var w=E(u);y=T(w,b),w.forEach(i),a=F(h),h.forEach(i),this.h()},h(){f(s,"class","font-bold headline-small text-primary"),f(u,"class","text-secondary title-medium my-auto"),f(t,"class","card m-6 w-fit rounded-lg bg-surface/75 justify-around")},m(p,h){D(p,t,h),r(t,s),r(s,m),r(t,C),r(t,u),r(u,y),r(t,a)},p(p,h){h&8&&l!==(l=p[7]+"")&&B(m,l),h&8&&b!==(b=p[8]+"")&&B(y,b)},d(p){p&&i(t)}}}function Ee(o){let t,s,l,m,C,u,b,y,a,p,h,k,w,M,H,q,Q,Y="Routes",J,S,Z=`* Each Route here is only a starting point and is fully customizeable after requesting the
			Journey.`,G,N,A,I;a=new pe({props:{href:"#routes",$$slots:{default:[ye]},$$scope:{ctx:o}}});let V=ie(o[3]),c=[];for(let e=0;e<V.length;e+=1)c[e]=ce(re(o,V,e));const K=o[5].default,x=fe(K,o,o[6],null);return A=new xe({props:{faqs:o[2]}}),{c(){t=g("div"),s=g("div"),l=g("h1"),m=P(o[0]),C=j(),u=g("h1"),b=P(o[1]),y=j(),le(a.$$.fragment),h=j(),k=g("section"),w=g("div");for(let e=0;e<c.length;e+=1)c[e].c();M=j(),H=g("section"),q=g("div"),Q=g("h2"),Q.textContent=Y,J=j(),S=g("h1"),S.textContent=Z,G=j(),x&&x.c(),N=j(),le(A.$$.fragment),this.h()},l(e){t=v(e,"DIV",{class:!0});var n=E(t);s=v(n,"DIV",{class:!0});var _=E(s);l=v(_,"H1",{class:!0});var z=E(l);m=T(z,o[0]),z.forEach(i),C=F(_),u=v(_,"H1",{class:!0});var d=E(u);b=T(d,o[1]),d.forEach(i),y=F(_),ae(a.$$.fragment,_),_.forEach(i),n.forEach(i),h=F(e),k=v(e,"SECTION",{class:!0});var R=E(k);w=v(R,"DIV",{class:!0});var $=E(w);for(let L=0;L<c.length;L+=1)c[L].l($);$.forEach(i),R.forEach(i),M=F(e),H=v(e,"SECTION",{class:!0,id:!0});var ee=E(H);q=v(ee,"DIV",{class:!0});var O=E(q);Q=v(O,"H2",{class:!0,"data-svelte-h":!0}),X(Q)!=="svelte-siywu3"&&(Q.textContent=Y),J=F(O),S=v(O,"H1",{class:!0,"data-svelte-h":!0}),X(S)!=="svelte-qmjlii"&&(S.textContent=Z),G=F(O),x&&x.l(O),O.forEach(i),ee.forEach(i),N=F(e),ae(A.$$.fragment,e),this.h()},h(){f(l,"class","font-bold text-black display-medium"),f(u,"class","pb-6 text-black body-large"),f(s,"class","flex flex-col max-w-xl mx-auto mt-8 mb-64 space-y-2 items-center"),f(t,"class",p="w-full h-screen shadow-lg shadow-background card-shadow px-10 lg:px-20 xl:px-40 pt-60 place-items-center "+o[4].hero+" bg-cover object-contain bg-center"),f(w,"class","inner-section max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-6 py-12 items-center rounded-lg bg-cover bg-center bg-[url('/images/kilimanjaro/4.webp')]"),f(k,"class","section"),f(Q,"class","font-bold text-center display-large text-primary"),f(S,"class","body-medium mb-8"),f(q,"class","flex flex-col"),f(H,"class","section"),f(H,"id","routes")},m(e,n){D(e,t,n),r(t,s),r(s,l),r(l,m),r(s,C),r(s,u),r(u,b),r(s,y),oe(a,s,null),D(e,h,n),D(e,k,n),r(k,w);for(let _=0;_<c.length;_+=1)c[_]&&c[_].m(w,null);D(e,M,n),D(e,H,n),r(H,q),r(q,Q),r(q,J),r(q,S),r(q,G),x&&x.m(q,null),D(e,N,n),oe(A,e,n),I=!0},p(e,[n]){(!I||n&1)&&B(m,e[0]),(!I||n&2)&&B(b,e[1]);const _={};if(n&64&&(_.$$scope={dirty:n,ctx:e}),a.$set(_),(!I||n&16&&p!==(p="w-full h-screen shadow-lg shadow-background card-shadow px-10 lg:px-20 xl:px-40 pt-60 place-items-center "+e[4].hero+" bg-cover object-contain bg-center"))&&f(t,"class",p),n&8){V=ie(e[3]);let d;for(d=0;d<V.length;d+=1){const R=re(e,V,d);c[d]?c[d].p(R,n):(c[d]=ce(R),c[d].c(),c[d].m(w,null))}for(;d<c.length;d+=1)c[d].d(1);c.length=V.length}x&&x.p&&(!I||n&64)&&he(x,K,e,e[6],I?me(K,e[6],n,null):de(e[6]),null);const z={};n&4&&(z.faqs=e[2]),A.$set(z)},i(e){I||(U(a.$$.fragment,e),U(x,e),U(A.$$.fragment,e),I=!0)},o(e){W(a.$$.fragment,e),W(x,e),W(A.$$.fragment,e),I=!1},d(e){e&&(i(t),i(h),i(k),i(M),i(H),i(N)),ne(a),be(c,e),x&&x.d(e),ne(A,e)}}}function Ce(o,t,s){let{$$slots:l={},$$scope:m}=t,{hero_header:C=""}=t,{hero_subtitle:u=""}=t,{FAQs:b}=t,{overview_topics:y}=t;return o.$$set=a=>{s(4,t=te(te({},t),se(a))),"hero_header"in a&&s(0,C=a.hero_header),"hero_subtitle"in a&&s(1,u=a.hero_subtitle),"FAQs"in a&&s(2,b=a.FAQs),"overview_topics"in a&&s(3,y=a.overview_topics),"$$scope"in a&&s(6,m=a.$$scope)},t=se(t),[C,u,b,y,t,l,m]}class He extends ge{constructor(t){super(),ve(this,t,Ce,Ee,ue,{hero_header:0,hero_subtitle:1,FAQs:2,overview_topics:3})}}export{He as M};