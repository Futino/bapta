import{s as b,n as k}from"../chunks/scheduler.68b4c8a5.js";import{S as j,i as q,g as c,s as $,r as E,h as u,j as y,x as g,c as C,u as O,f as h,k as m,a as w,y as i,v as S,d as H,t as I,w as P}from"../chunks/index.d1593a7f.js";import{O as T}from"../chunks/OutlineButton.f8c117aa.js";function B(f){let t,e="Continue browsing";return{c(){t=c("h1"),t.textContent=e,this.h()},l(n){t=u(n,"H1",{class:!0,["data-svelte-h"]:!0}),g(t)!=="svelte-qpwlon"&&(t.textContent=e),this.h()},h(){m(t,"class","title-large")},m(n,p){w(n,t,p)},p:k,d(n){n&&h(t)}}}function D(f){let t,e,n,p="Thank you!",_,l,v=`Your journey is being recieved as we speak. We'll get back to you via your preferred contact
			method within a few days. From there we can plan in more detail your journey!`,x,o,d;return o=new T({props:{class:"py-4",$$slots:{default:[B]},$$scope:{ctx:f}}}),{c(){t=c("section"),e=c("div"),n=c("h1"),n.textContent=p,_=$(),l=c("p"),l.textContent=v,x=$(),E(o.$$.fragment),this.h()},l(s){t=u(s,"SECTION",{class:!0});var r=y(t);e=u(r,"DIV",{class:!0});var a=y(e);n=u(a,"H1",{class:!0,["data-svelte-h"]:!0}),g(n)!=="svelte-1rnj1qn"&&(n.textContent=p),_=C(a),l=u(a,"P",{class:!0,["data-svelte-h"]:!0}),g(l)!=="svelte-1t8soxi"&&(l.textContent=v),x=C(a),O(o.$$.fragment,a),a.forEach(h),r.forEach(h),this.h()},h(){m(n,"class","display-small md:display-large text-primary-dark"),m(l,"class","title-small md:title-large max-w-xl"),m(e,"class","inner-section flex flex-col place-items-center pt-32 gap-4"),m(t,"class","section")},m(s,r){w(s,t,r),i(t,e),i(e,n),i(e,_),i(e,l),i(e,x),S(o,e,null),d=!0},p(s,[r]){const a={};r&1&&(a.$$scope={dirty:r,ctx:s}),o.$set(a)},i(s){d||(H(o.$$.fragment,s),d=!0)},o(s){I(o.$$.fragment,s),d=!1},d(s){s&&h(t),P(o)}}}class W extends j{constructor(t){super(),q(this,t,null,D,b,{})}}export{W as component};
