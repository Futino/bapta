import{s as V,n as H}from"../chunks/scheduler.b428cfaa.js";import{S as j,i as B,g,s as k,r as L,E as N,h as x,f as n,c as T,x as D,j as I,u as F,k as d,y as _,a as v,v as O,d as M,t as q,z as J,w as P}from"../chunks/index.ff765d8c.js";import{e as Q}from"../chunks/each.e59479a4.js";import{T as W,t as G}from"../chunks/TourCard.15201439.js";import{F as K}from"../chunks/FAQSection.bca508a6.js";import{s as R}from"../chunks/safariFaq.b919c078.js";function U(i,a,l){const t=i.slice();return t[3]=a[l],t}function X(i){let a,l;return a=new W({props:{tour:i[3]}}),{c(){L(a.$$.fragment)},l(t){F(a.$$.fragment,t)},m(t,m){O(a,t,m),l=!0},p:H,i(t){l||(M(a.$$.fragment,t),l=!0)},o(t){q(a.$$.fragment,t),l=!1},d(t){P(a,t)}}}function Y(i){let a,l,t,m='<div class="flex flex-col max-w-2xl self-center items-center h-fit inner-section bg-surface-dark/90 shadow-2xl drop-shadow-2xl rounded-lg py-12 pl-10 pr-14"><h1 class="font-bold text-primary-dark display-medium">Explore Our Safaris</h1> <h1 class="pb-4 title-medium">Discover Thrilling Adventures in Africa&#39;s Wilderness</h1></div>',y,o,c,f,z=`<h1 class="display-large">Safari Tour Packages</h1> <h1 class="headline-small">Click on a tour to learn more!</h1> <h1 class="body-medium text-outline-dark pt-4 max-w-xl">* Each Journey is only a starting point and is fully customizeable. <br/>
        * Prices displayed are estimations and may vary.</h1>`,C,p,b,u,$,E=Q(G),s=[];for(let e=0;e<E.length;e+=1)s[e]=X(U(i,E,e));return u=new K({props:{faqs:R}}),{c(){a=g("meta"),l=k(),t=g("section"),t.innerHTML=m,y=k(),o=g("section"),c=g("div"),f=g("div"),f.innerHTML=z,C=k(),p=g("div");for(let e=0;e<s.length;e+=1)s[e].c();b=k(),L(u.$$.fragment),this.h()},l(e){const r=N("svelte-lnaoir",document.head);a=x(r,"META",{name:!0,content:!0}),r.forEach(n),l=T(e),t=x(e,"SECTION",{class:!0,"data-svelte-h":!0}),D(t)!=="svelte-1wrtvtr"&&(t.innerHTML=m),y=T(e),o=x(e,"SECTION",{class:!0,id:!0});var h=I(o);c=x(h,"DIV",{class:!0});var w=I(c);f=x(w,"DIV",{class:!0,"data-svelte-h":!0}),D(f)!=="svelte-ps46dn"&&(f.innerHTML=z),C=T(w),p=x(w,"DIV",{class:!0});var A=I(p);for(let S=0;S<s.length;S+=1)s[S].l(A);A.forEach(n),w.forEach(n),h.forEach(n),b=T(e),F(u.$$.fragment,e),this.h()},h(){document.title="Bapta - Tanzanian Safaris",d(a,"name","description"),d(a,"content","Search for the safari of your dreams, our luxury and midrange safaris are fully customizable."),d(t,"class","w-full h-screen shadow-lg shadow-background-dark lg:grid-cols-2 card-shadow grid-rows-2 px-10 lg:px-20 xl:px-40 pt-56 place-items-center border-b border-secondary-light/40 dark:border-secondary-dark/40 bg-[url('/images/safari/57.webp')] bg-cover object-contain bg-top"),d(f,"class","text-center"),d(p,"class","grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-10 xl:grid-cols-3 xl:-mx-8 2xl:-mx-4"),d(c,"class","flex flex-col gap-8 items-center inner-section"),d(o,"class","section text-left shadow-lg"),d(o,"id","tours")},m(e,r){_(document.head,a),v(e,l,r),v(e,t,r),v(e,y,r),v(e,o,r),_(o,c),_(c,f),_(c,C),_(c,p);for(let h=0;h<s.length;h+=1)s[h]&&s[h].m(p,null);v(e,b,r),O(u,e,r),$=!0},p:H,i(e){if(!$){for(let r=0;r<E.length;r+=1)M(s[r]);M(u.$$.fragment,e),$=!0}},o(e){s=s.filter(Boolean);for(let r=0;r<s.length;r+=1)q(s[r]);q(u.$$.fragment,e),$=!1},d(e){e&&(n(l),n(t),n(y),n(o),n(b)),n(a),J(s,e),P(u,e)}}}function Z(i,a,l){let{selectedCards:t=[]}=a;return i.$$set=m=>{"selectedCards"in m&&l(0,t=m.selectedCards)},[t]}class ne extends j{constructor(a){super(),B(this,a,Z,Y,V,{selectedCards:0})}}export{ne as component};