import{s as ee,n as Y}from"../chunks/scheduler.68b4c8a5.js";import{S as te,i as se,g as m,s as w,r as j,E as ae,h,f as i,c as k,j as q,x as A,u as J,k as c,y as f,a as E,v as L,d as T,b as re,t as z,w as N,z as le,p as ne}from"../chunks/index.d1593a7f.js";import{e as K}from"../chunks/each.e59479a4.js";import"../chunks/paths.4fc79540.js";import{O as oe}from"../chunks/OutlineButton.f8c117aa.js";import{T as ie,t as R}from"../chunks/TourCard.28e3406f.js";import{F as ce}from"../chunks/FAQSection.1dad406b.js";import{s as de}from"../chunks/safariFaq.b919c078.js";function U(d,t,o){const s=d.slice();return s[4]=t[o],s}function ue(d){let t,o="See Tours";return{c(){t=m("h1"),t.textContent=o,this.h()},l(s){t=h(s,"H1",{class:!0,["data-svelte-h"]:!0}),A(t)!=="svelte-19hxxdn"&&(t.textContent=o),this.h()},h(){c(t,"class","px-4 py-1 title-large")},m(s,n){E(s,t,n)},p:Y,d(s){s&&i(t)}}}function X(d){let t,o;return t=new ie({props:{tour:d[4]}}),{c(){j(t.$$.fragment)},l(s){J(t.$$.fragment,s)},m(s,n){L(t,s,n),o=!0},p:Y,i(s){o||(T(t.$$.fragment,s),o=!0)},o(s){z(t.$$.fragment,s),o=!1},d(s){N(t,s)}}}function fe(d){let t,o,s,n,_,P="Explore Our Safaris",V,v,Q="Discover Thrilling Adventures in Africa's Wilderness",B,p,I,g,x,$,W=`<h1 class="display-large">Safari Tour Packages</h1> <h1 class="headline-small">Click on a tour to learn more!</h1> <h1 class="body-medium text-outline-dark pt-4 max-w-xl">* Each Journey here is only a starting point and is fully customizeable after requesting the
				Journey.</h1>`,F,b,D,C,H;p=new oe({props:{href:"#tours",$$slots:{default:[ue]},$$scope:{ctx:d}}});let y=K(R),a=[];for(let e=0;e<y.length;e+=1)a[e]=X(U(d,y,e));const Z=e=>z(a[e],1,1,()=>{a[e]=null});return C=new ce({props:{faqs:de}}),{c(){t=m("meta"),o=w(),s=m("section"),n=m("div"),_=m("h1"),_.textContent=P,V=w(),v=m("h1"),v.textContent=Q,B=w(),j(p.$$.fragment),I=w(),g=m("section"),x=m("div"),$=m("div"),$.innerHTML=W,F=w(),b=m("div");for(let e=0;e<a.length;e+=1)a[e].c();D=w(),j(C.$$.fragment),this.h()},l(e){const r=ae("svelte-15sz0oz",document.head);t=h(r,"META",{name:!0,content:!0}),r.forEach(i),o=k(e),s=h(e,"SECTION",{class:!0});var u=q(s);n=h(u,"DIV",{class:!0});var l=q(n);_=h(l,"H1",{class:!0,["data-svelte-h"]:!0}),A(_)!=="svelte-1uk46st"&&(_.textContent=P),V=k(l),v=h(l,"H1",{class:!0,["data-svelte-h"]:!0}),A(v)!=="svelte-16p6fxw"&&(v.textContent=Q),B=k(l),J(p.$$.fragment,l),l.forEach(i),u.forEach(i),I=k(e),g=h(e,"SECTION",{class:!0,id:!0});var S=q(g);x=h(S,"DIV",{class:!0});var O=q(x);$=h(O,"DIV",{class:!0,["data-svelte-h"]:!0}),A($)!=="svelte-1pwgiqb"&&($.innerHTML=W),F=k(O),b=h(O,"DIV",{class:!0});var G=q(b);for(let M=0;M<a.length;M+=1)a[M].l(G);G.forEach(i),O.forEach(i),S.forEach(i),D=k(e),J(C.$$.fragment,e),this.h()},h(){document.title="Bapta - Tanzanian Safaris",c(t,"name","description"),c(t,"content","Search for the safari of your dreams, our luxury and midrange safaris are fully customizable."),c(_,"class","font-bold text-primary-dark display-medium"),c(v,"class","pb-4 title-medium"),c(n,"class","flex flex-col max-w-2xl self-center items-center h-fit inner-section bg-surface-dark/90 shadow-2xl drop-shadow-2xl rounded-lg py-12 pl-10 pr-14"),c(s,"class","w-full h-screen shadow-lg shadow-background-dark lg:grid-cols-2 card-shadow grid-rows-2 px-10 lg:px-20 xl:px-40 pt-56 place-items-center border-b border-secondary-light/40 dark:border-secondary-dark/40 bg-[url('/images/safari/57.webp')] bg-cover object-contain bg-top"),c($,"class","text-center"),c(b,"class","grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 xl:grid-cols-3 xl:-mx-8 2xl:-mx-4"),c(x,"class","flex flex-col gap-8 items-center inner-section"),c(g,"class","section text-left shadow-lg"),c(g,"id","tours")},m(e,r){f(document.head,t),E(e,o,r),E(e,s,r),f(s,n),f(n,_),f(n,V),f(n,v),f(n,B),L(p,n,null),E(e,I,r),E(e,g,r),f(g,x),f(x,$),f(x,F),f(x,b);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(b,null);E(e,D,r),L(C,e,r),H=!0},p(e,[r]){const u={};if(r&128&&(u.$$scope={dirty:r,ctx:e}),p.$set(u),r&0){y=K(R);let l;for(l=0;l<y.length;l+=1){const S=U(e,y,l);a[l]?(a[l].p(S,r),T(a[l],1)):(a[l]=X(S),a[l].c(),T(a[l],1),a[l].m(b,null))}for(ne(),l=y.length;l<a.length;l+=1)Z(l);re()}},i(e){if(!H){T(p.$$.fragment,e);for(let r=0;r<y.length;r+=1)T(a[r]);T(C.$$.fragment,e),H=!0}},o(e){z(p.$$.fragment,e),a=a.filter(Boolean);for(let r=0;r<a.length;r+=1)z(a[r]);z(C.$$.fragment,e),H=!1},d(e){e&&(i(o),i(s),i(I),i(g),i(D)),i(t),N(p),le(a,e),N(C,e)}}}function me(d,t,o){let{selectedCards:s=[]}=t;return d.$$set=n=>{"selectedCards"in n&&o(0,s=n.selectedCards)},[s]}class Ce extends te{constructor(t){super(),se(this,t,me,fe,ee,{selectedCards:0})}}export{Ce as component};
