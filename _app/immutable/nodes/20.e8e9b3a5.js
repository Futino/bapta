import{s as X,n as R}from"../chunks/scheduler.313d8e24.js";import{S as Y,i as Z,g as h,s as y,r as B,h as m,j as T,y as O,c as E,u as L,f as c,k as f,a as S,x as d,v as M,d as w,b as ee,t as I,w as N,z as te,p as se}from"../chunks/index.4cfebf13.js";import{e as W}from"../chunks/each.e59479a4.js";import"../chunks/paths.8c693360.js";/* empty css                                                     */import{O as re}from"../chunks/OutlineButton.322591c5.js";import{T as ae,t as G}from"../chunks/TourCard.36a4b425.js";import{F as le}from"../chunks/FAQSection.9fbe8b64.js";import{s as ne}from"../chunks/safariFaq.b919c078.js";function J(i,t,a){const s=i.slice();return s[4]=t[a],s}function oe(i){let t,a="See Tours";return{c(){t=h("h1"),t.textContent=a,this.h()},l(s){t=m(s,"H1",{class:!0,["data-svelte-h"]:!0}),O(t)!=="svelte-19hxxdn"&&(t.textContent=a),this.h()},h(){f(t,"class","px-4 py-1 title-large")},m(s,u){S(s,t,u)},p:R,d(s){s&&c(t)}}}function K(i){let t,a;return t=new ae({props:{tour:i[4]}}),{c(){B(t.$$.fragment)},l(s){L(t.$$.fragment,s)},m(s,u){M(t,s,u),a=!0},p:R,i(s){a||(w(t.$$.fragment,s),a=!0)},o(s){I(t.$$.fragment,s),a=!1},d(s){N(t,s)}}}function ie(i){let t,a,s,u="Explore Safari Tours",V,x,P="Discover Thrilling Adventures in Africa's Wilderness",j,g,D,p,_,v,z='<h1 class="display-large">Safari Tour Packages</h1> <h1 class="headline-small">Click on a tour to learn more!</h1>',A,$,H,b,q;g=new re({props:{href:"#tours",$$slots:{default:[oe]},$$scope:{ctx:i}}});let C=W(G),r=[];for(let e=0;e<C.length;e+=1)r[e]=K(J(i,C,e));const U=e=>I(r[e],1,1,()=>{r[e]=null});return b=new le({props:{faqs:ne}}),{c(){t=h("section"),a=h("div"),s=h("h1"),s.textContent=u,V=y(),x=h("h1"),x.textContent=P,j=y(),B(g.$$.fragment),D=y(),p=h("section"),_=h("div"),v=h("div"),v.innerHTML=z,A=y(),$=h("div");for(let e=0;e<r.length;e+=1)r[e].c();H=y(),B(b.$$.fragment),this.h()},l(e){t=m(e,"SECTION",{class:!0});var l=T(t);a=m(l,"DIV",{class:!0});var o=T(a);s=m(o,"H1",{class:!0,["data-svelte-h"]:!0}),O(s)!=="svelte-ywpr0b"&&(s.textContent=u),V=E(o),x=m(o,"H1",{class:!0,["data-svelte-h"]:!0}),O(x)!=="svelte-m4ubyt"&&(x.textContent=P),j=E(o),L(g.$$.fragment,o),o.forEach(c),l.forEach(c),D=E(e),p=m(e,"SECTION",{class:!0,id:!0});var n=T(p);_=m(n,"DIV",{class:!0});var k=T(_);v=m(k,"DIV",{class:!0,["data-svelte-h"]:!0}),O(v)!=="svelte-1d40b2s"&&(v.innerHTML=z),A=E(k),$=m(k,"DIV",{class:!0});var Q=T($);for(let F=0;F<r.length;F+=1)r[F].l(Q);Q.forEach(c),k.forEach(c),n.forEach(c),H=E(e),L(b.$$.fragment,e),this.h()},h(){f(s,"class","font-bold text-black display-medium"),f(x,"class","pb-6 text-black body-large"),f(a,"class","flex flex-col max-w-lg self-center items-center h-full inner-section"),f(t,"class","w-full h-screen shadow-lg shadow-background-dark lg:grid-cols-2 card-shadow grid-rows-2 px-10 lg:px-20 xl:px-40 pt-64 place-items-center border-b border-secondary-light/40 dark:border-secondary-dark/40 bg-[url('/images/serengeti/10.jpeg')] bg-cover object-contain bg-top"),f(v,"class","text-center"),f($,"class","grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"),f(_,"class","flex flex-col gap-8 items-center inner-section"),f(p,"class","section text-left shadow-lg bg-surface-dark"),f(p,"id","tours")},m(e,l){S(e,t,l),d(t,a),d(a,s),d(a,V),d(a,x),d(a,j),M(g,a,null),S(e,D,l),S(e,p,l),d(p,_),d(_,v),d(_,A),d(_,$);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m($,null);S(e,H,l),M(b,e,l),q=!0},p(e,[l]){const o={};if(l&128&&(o.$$scope={dirty:l,ctx:e}),g.$set(o),l&0){C=W(G);let n;for(n=0;n<C.length;n+=1){const k=J(e,C,n);r[n]?(r[n].p(k,l),w(r[n],1)):(r[n]=K(k),r[n].c(),w(r[n],1),r[n].m($,null))}for(se(),n=C.length;n<r.length;n+=1)U(n);ee()}},i(e){if(!q){w(g.$$.fragment,e);for(let l=0;l<C.length;l+=1)w(r[l]);w(b.$$.fragment,e),q=!0}},o(e){I(g.$$.fragment,e),r=r.filter(Boolean);for(let l=0;l<r.length;l+=1)I(r[l]);I(b.$$.fragment,e),q=!1},d(e){e&&(c(t),c(D),c(p),c(H)),N(g),te(r,e),N(b,e)}}}function ce(i,t,a){let{selectedCards:s=[]}=t;return i.$$set=u=>{"selectedCards"in u&&a(0,s=u.selectedCards)},[s]}class ve extends Y{constructor(t){super(),Z(this,t,ce,ie,X,{selectedCards:0})}}export{ve as component};
