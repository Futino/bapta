import{s as re,g as ie,u as ce,h as fe,i as ue,d as Y,e as Z,n as he}from"./scheduler.90ebcd62.js";import{S as de,i as me,g as p,m as P,s as A,r as $,h as x,j as E,n as R,f as r,c as D,u as ee,x as ne,k as d,a as H,y as c,v as te,o as T,d as K,t as L,w as se,z as _e}from"./index.2fd6864a.js";import{e as le}from"./each.e59479a4.js";import"./paths.923033bb.js";import{O as ge}from"./OutlineButton.b855bd28.js";import{F as ve}from"./FAQSection.bf8d33ed.js";function ae(o,t,s){const l=o.slice();return l[7]=t[s].label,l[8]=t[s].body,l}function be(o){let t,s="Choose Route";return{c(){t=p("h1"),t.textContent=s,this.h()},l(l){t=x(l,"H1",{class:!0,["data-svelte-h"]:!0}),ne(t)!=="svelte-1e2azik"&&(t.textContent=s),this.h()},h(){d(t,"class","px-4 py-2 title-large")},m(l,m){H(l,t,m)},p:he,d(l){l&&r(t)}}}function oe(o){let t,s,l=o[7]+"",m,y,f,g=o[8]+"",k,a;return{c(){t=p("div"),s=p("h2"),m=P(l),y=A(),f=p("p"),k=P(g),a=A(),this.h()},l(v){t=x(v,"DIV",{class:!0});var u=E(t);s=x(u,"H2",{class:!0});var C=E(s);m=R(C,l),C.forEach(r),y=D(u),f=x(u,"P",{class:!0});var w=E(f);k=R(w,g),w.forEach(r),a=D(u),u.forEach(r),this.h()},h(){d(s,"class","font-bold headline-small text-primary-dark"),d(f,"class","text-secondary-dark title-medium my-auto"),d(t,"class","card m-6 w-fit rounded-lg bg-surface-dark/75 justify-around")},m(v,u){H(v,t,u),c(t,s),c(s,m),c(t,y),c(t,f),c(f,k),c(t,a)},p(v,u){u&8&&l!==(l=v[7]+"")&&T(m,l),u&8&&g!==(g=v[8]+"")&&T(k,g)},d(v){v&&r(t)}}}function pe(o){let t,s,l,m,y,f,g,k,a,v,u,C,w,z,F,j,Q,U="Routes",B,M,q,I;a=new ge({props:{href:"#routes",$$slots:{default:[be]},$$scope:{ctx:o}}});let S=le(o[3]),i=[];for(let e=0;e<S.length;e+=1)i[e]=oe(ae(o,S,e));const G=o[5].default,b=ie(G,o,o[6],null);return q=new ve({props:{faqs:o[2]}}),{c(){t=p("div"),s=p("div"),l=p("h1"),m=P(o[0]),y=A(),f=p("h1"),g=P(o[1]),k=A(),$(a.$$.fragment),u=A(),C=p("section"),w=p("div");for(let e=0;e<i.length;e+=1)i[e].c();z=A(),F=p("section"),j=p("div"),Q=p("h2"),Q.textContent=U,B=A(),b&&b.c(),M=A(),$(q.$$.fragment),this.h()},l(e){t=x(e,"DIV",{class:!0});var n=E(t);s=x(n,"DIV",{class:!0});var _=E(s);l=x(_,"H1",{class:!0});var V=E(l);m=R(V,o[0]),V.forEach(r),y=D(_),f=x(_,"H1",{class:!0});var h=E(f);g=R(h,o[1]),h.forEach(r),k=D(_),ee(a.$$.fragment,_),_.forEach(r),n.forEach(r),u=D(e),C=x(e,"SECTION",{class:!0});var O=E(C);w=x(O,"DIV",{class:!0});var W=E(w);for(let J=0;J<i.length;J+=1)i[J].l(W);W.forEach(r),O.forEach(r),z=D(e),F=x(e,"SECTION",{class:!0,id:!0});var X=E(F);j=x(X,"DIV",{class:!0});var N=E(j);Q=x(N,"H2",{class:!0,["data-svelte-h"]:!0}),ne(Q)!=="svelte-nh469s"&&(Q.textContent=U),B=D(N),b&&b.l(N),N.forEach(r),X.forEach(r),M=D(e),ee(q.$$.fragment,e),this.h()},h(){d(l,"class","font-bold text-black display-medium"),d(f,"class","pb-6 text-black body-large"),d(s,"class","flex flex-col max-w-xl mx-auto mt-8 mb-64 space-y-2 items-center"),d(t,"class",v="w-full h-screen shadow-lg shadow-background-dark card-shadow px-10 lg:px-20 xl:px-40 pt-60 place-items-center "+o[4].hero+" bg-cover object-contain bg-center"),d(w,"class","inner-section max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-6 py-12 items-center rounded-lg bg-cover bg-center bg-[url('/images/kilimanjaro/4.webp')]"),d(C,"class","section"),d(Q,"class","mb-8 font-bold text-center display-large text-primary-dark"),d(j,"class","flex flex-col"),d(F,"class","section"),d(F,"id","routes")},m(e,n){H(e,t,n),c(t,s),c(s,l),c(l,m),c(s,y),c(s,f),c(f,g),c(s,k),te(a,s,null),H(e,u,n),H(e,C,n),c(C,w);for(let _=0;_<i.length;_+=1)i[_]&&i[_].m(w,null);H(e,z,n),H(e,F,n),c(F,j),c(j,Q),c(j,B),b&&b.m(j,null),H(e,M,n),te(q,e,n),I=!0},p(e,[n]){(!I||n&1)&&T(m,e[0]),(!I||n&2)&&T(g,e[1]);const _={};if(n&64&&(_.$$scope={dirty:n,ctx:e}),a.$set(_),(!I||n&16&&v!==(v="w-full h-screen shadow-lg shadow-background-dark card-shadow px-10 lg:px-20 xl:px-40 pt-60 place-items-center "+e[4].hero+" bg-cover object-contain bg-center"))&&d(t,"class",v),n&8){S=le(e[3]);let h;for(h=0;h<S.length;h+=1){const O=ae(e,S,h);i[h]?i[h].p(O,n):(i[h]=oe(O),i[h].c(),i[h].m(w,null))}for(;h<i.length;h+=1)i[h].d(1);i.length=S.length}b&&b.p&&(!I||n&64)&&ce(b,G,e,e[6],I?ue(G,e[6],n,null):fe(e[6]),null);const V={};n&4&&(V.faqs=e[2]),q.$set(V)},i(e){I||(K(a.$$.fragment,e),K(b,e),K(q.$$.fragment,e),I=!0)},o(e){L(a.$$.fragment,e),L(b,e),L(q.$$.fragment,e),I=!1},d(e){e&&(r(t),r(u),r(C),r(z),r(F),r(M)),se(a),_e(i,e),b&&b.d(e),se(q,e)}}}function xe(o,t,s){let{$$slots:l={},$$scope:m}=t,{hero_header:y=""}=t,{hero_subtitle:f=""}=t,{FAQs:g}=t,{overview_topics:k}=t;return o.$$set=a=>{s(4,t=Y(Y({},t),Z(a))),"hero_header"in a&&s(0,y=a.hero_header),"hero_subtitle"in a&&s(1,f=a.hero_subtitle),"FAQs"in a&&s(2,g=a.FAQs),"overview_topics"in a&&s(3,k=a.overview_topics),"$$scope"in a&&s(6,m=a.$$scope)},t=Z(t),[y,f,g,k,t,l,m]}class Fe extends de{constructor(t){super(),me(this,t,xe,pe,re,{hero_header:0,hero_subtitle:1,FAQs:2,overview_topics:3})}}export{Fe as M};
