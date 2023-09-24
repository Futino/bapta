import{s as J,c as pe,n as N,d as P,e as U,o as ge,f as le,r as ke,g as be,u as xe,h as ye,i as we}from"../chunks/scheduler.b428cfaa.js";import{S as K,i as W,g as b,h as x,k as h,a as V,f as p,r as q,s as C,j as M,u as F,c as T,x as R,y as m,v as G,d as j,t as B,w as Q,z as Z,m as ee,n as te,A as Y,p as $e,b as Ee,B as He,C as se,D as Le}from"../chunks/index.ff765d8c.js";import{e as S}from"../chunks/each.e59479a4.js";import"../chunks/paths.34d8b71e.js";import{s as ne,f as oe}from"../chunks/index.12c262e6.js";const Me=!0,Fe=Object.freeze(Object.defineProperty({__proto__:null,prerender:Me},Symbol.toStringTag,{value:"Module"}));function Ae(o){let e,t;return{c(){e=b("img"),this.h()},l(r){e=x(r,"IMG",{src:!0,class:!0,alt:!0}),this.h()},h(){pe(e.src,t="/favicon.webp")||h(e,"src",t),h(e,"class","h-11 w-11 rounded-full"),h(e,"alt","Logo")},m(r,l){V(r,e,l)},p:N,i:N,o:N,d(r){r&&p(e)}}}class ve extends K{constructor(e){super(),W(this,e,null,Ae,J,{})}}function ie(o,e,t){const r=o.slice();return r[2]=e[t].name,r[3]=e[t].href,r}function ce(o){let e,t,r=o[2]+"",l,n;return{c(){e=b("li"),t=b("a"),l=ee(r),n=C(),this.h()},l(u){e=x(u,"LI",{});var i=M(e);t=x(i,"A",{class:!0,href:!0});var s=M(t);l=te(s,r),s.forEach(p),n=T(i),i.forEach(p),this.h()},h(){h(t,"class","inline mx-auto text-secondary-light dark:text-secondary-dark hover:text-tertiary-light dark:hover:text-tertiary-dark"),h(t,"href",o[3])},m(u,i){V(u,e,i),m(e,t),m(t,l),m(e,n)},p:N,d(u){u&&p(e)}}}function Ce(o){let e,t,r,l,n,u,i,s,k,E=`Unpublished © 2023
		<a href="https://futi.no/" class="text-tertiary-light dark:text-tertiary-dark hover:underline hover:text-tertiary-light dark:hover:text-tertiary-light">Futino™</a>`,w,A;r=new ve({});let H=S(o[0]),_=[];for(let f=0;f<H.length;f+=1)_[f]=ce(ie(o,H,f));return{c(){e=b("div"),t=b("div"),q(r.$$.fragment),l=C(),n=b("ul");for(let f=0;f<_.length;f+=1)_[f].c();u=C(),i=b("hr"),s=C(),k=b("span"),k.innerHTML=E,this.h()},l(f){e=x(f,"DIV",{class:!0});var c=M(e);t=x(c,"DIV",{class:!0});var a=M(t);F(r.$$.fragment,a),l=T(a),n=x(a,"UL",{class:!0});var $=M(n);for(let v=0;v<_.length;v+=1)_[v].l($);$.forEach(p),a.forEach(p),u=T(c),i=x(c,"HR",{class:!0}),s=T(c),k=x(c,"SPAN",{class:!0,"data-svelte-h":!0}),R(k)!=="svelte-1vi7afg"&&(k.innerHTML=E),c.forEach(p),this.h()},h(){h(n,"class","flex flex-wrap items-start space-x-6 body-medium sm:mb-0 text-background-on-light dark:text-background-on-dark"),h(t,"class","flex flex-row justify-between items-center md:px-10 lg:px-20 xl:px-40 md:px-auto"),h(i,"class","my-6 sm:mx-auto lg:my-8 border-secondary-light/10 dark:border-secondary-dark/10"),h(k,"class","block text-sm sm:text-center text-background-on-light dark:text-background-on-dark"),h(e,"class",w=o[1].class+" pt-20 p-6 border-t border-secondary-light/10 dark:border-secondary-dark/10")},m(f,c){V(f,e,c),m(e,t),G(r,t,null),m(t,l),m(t,n);for(let a=0;a<_.length;a+=1)_[a]&&_[a].m(n,null);m(e,u),m(e,i),m(e,s),m(e,k),A=!0},p(f,[c]){if(c&1){H=S(f[0]);let a;for(a=0;a<H.length;a+=1){const $=ie(f,H,a);_[a]?_[a].p($,c):(_[a]=ce($),_[a].c(),_[a].m(n,null))}for(;a<_.length;a+=1)_[a].d(1);_.length=H.length}(!A||c&2&&w!==(w=f[1].class+" pt-20 p-6 border-t border-secondary-light/10 dark:border-secondary-dark/10"))&&h(e,"class",w)},i(f){A||(j(r.$$.fragment,f),A=!0)},o(f){B(r.$$.fragment,f),A=!1},d(f){f&&p(e),Q(r),Z(_,f)}}}function Te(o,e,t){const r=[{name:"Home",href:"/"},{name:"Help",href:"/contact"},{name:"FAQs",href:"/contact#faqs"},{name:"About",href:"/about"},{name:"Privacy Policy",href:"/legal/privacy"}];return o.$$set=l=>{t(1,e=P(P({},e),U(l)))},e=U(e),[r,e]}class De extends K{constructor(e){super(),W(this,e,Te,Ce,J,{})}}function fe(o,e,t){const r=o.slice();return r[5]=e[t],r[7]=t,r}function de(o,e,t){const r=o.slice();return r[5]=e[t],r}function ue(o){let e,t,r,l,n,u='<svg viewBox="0 0 10 10" class="w-3 h-3 overflow-visible"><path d="M0 0L10 10M10 0L0 10" fill="none" stroke-width="2" stroke-linecap="round"></path></svg>',i,s,k,E,w,A,H,_,f=S(o[0]),c=[];for(let a=0;a<f.length;a+=1)c[a]=he(de(o,f,a));return{c(){e=b("div"),t=b("div"),r=C(),l=b("div"),n=b("button"),n.innerHTML=u,i=C(),s=b("nav");for(let a=0;a<c.length;a+=1)c[a].c();this.h()},l(a){e=x(a,"DIV",{class:!0});var $=M(e);t=x($,"DIV",{class:!0}),M(t).forEach(p),r=T($),l=x($,"DIV",{class:!0});var v=M(l);n=x(v,"BUTTON",{class:!0,"data-svelte-h":!0}),R(n)!=="svelte-15sdtta"&&(n.innerHTML=u),i=T(v),s=x(v,"NAV",{class:!0});var g=M(s);for(let I=0;I<c.length;I+=1)c[I].l(g);g.forEach(p),v.forEach(p),$.forEach(p),this.h()},h(){h(t,"class","bg-black/50 absolute w-screen h-screen backdrop-blur-sm"),h(n,"class","w-7 h-7 my-4 flex items-center hover:scale-150 transition-all duration-200 justify-center stroke-primary-dark hover:stroke-tertiary-dark"),h(s,"class","text-center flex flex-col gap-6 headline-medium"),h(l,"class","absolute z-50 p-6 w-full mx-auto pb-8 my-auto top-0 bottom-0 flex flex-col items-center gap-4 left-0 right-0 h-fit max-w-xs md:max-w-xl lg:max-w-2xl bg-surface-dark rounded-lg shadow-lg"),h(e,"class","fixed inset-0 z-50")},m(a,$){V(a,e,$),m(e,t),m(e,r),m(e,l),m(l,n),m(l,i),m(l,s);for(let v=0;v<c.length;v+=1)c[v]&&c[v].m(s,null);A=!0,H||(_=[Y(t,"click",o[3]),Y(n,"click",o[3])],H=!0)},p(a,$){if($&9){f=S(a[0]);let v;for(v=0;v<f.length;v+=1){const g=de(a,f,v);c[v]?c[v].p(g,$):(c[v]=he(g),c[v].c(),c[v].m(s,null))}for(;v<c.length;v+=1)c[v].d(1);c.length=f.length}},i(a){A||(a&&le(()=>{A&&(E&&E.end(1),k=He(l,ne,{delay:200,duration:300}),k.start())}),a&&le(()=>{A&&(w||(w=se(e,oe,{},!0)),w.run(1))}),A=!0)},o(a){k&&k.invalidate(),a&&(E=Le(l,ne,{})),a&&(w||(w=se(e,oe,{},!1)),w.run(0)),A=!1},d(a){a&&p(e),Z(c,a),a&&E&&E.end(),a&&w&&w.end(),H=!1,ke(_)}}}function he(o){let e,t=o[5].name+"",r,l,n,u;return{c(){e=b("a"),r=ee(t),l=C(),this.h()},l(i){e=x(i,"A",{class:!0,href:!0});var s=M(e);r=te(s,t),l=T(s),s.forEach(p),this.h()},h(){h(e,"class","text-primary-container-on-dark hover:text-tertiary-dark hover:scale-105 transition-all duration-200"),h(e,"href",o[5].href)},m(i,s){V(i,e,s),m(e,r),m(e,l),n||(u=Y(e,"click",o[3]),n=!0)},p:N,d(i){i&&p(e),n=!1,u()}}}function me(o){let e,t=o[5].name+"",r,l;return{c(){e=b("a"),r=ee(t),l=C(),this.h()},l(n){e=x(n,"A",{class:!0,href:!0});var u=M(e);r=te(u,t),l=T(u),u.forEach(p),this.h()},h(){h(e,"class","hover:text-tertiary-dark transition-all duration-300"),h(e,"href",o[5].href)},m(n,u){V(n,e,u),m(e,r),m(e,l)},p:N,d(n){n&&p(e)}}}function Ie(o){let e,t,r,l,n,u,i,s="Bapta Safaris",k,E,w,A,H,_,f='<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>',c,a,$,v,g=o[2]&&ue(o);n=new ve({});let I=S(o[0]),L=[];for(let d=0;d<I.length;d+=1)L[d]=me(fe(o,I,d));return{c(){g&&g.c(),e=C(),t=b("header"),r=b("div"),l=b("a"),q(n.$$.fragment),u=C(),i=b("p"),i.textContent=s,k=C(),E=b("div"),w=b("nav");for(let d=0;d<L.length;d+=1)L[d].c();A=C(),H=b("div"),_=b("button"),_.innerHTML=f,this.h()},l(d){g&&g.l(d),e=T(d),t=x(d,"HEADER",{id:!0,class:!0});var D=M(t);r=x(D,"DIV",{class:!0});var y=M(r);l=x(y,"A",{class:!0,href:!0});var z=M(l);F(n.$$.fragment,z),u=T(z),i=x(z,"P",{class:!0,"data-svelte-h":!0}),R(i)!=="svelte-f3cuwj"&&(i.textContent=s),z.forEach(p),k=T(y),E=x(y,"DIV",{class:!0});var O=M(E);w=x(O,"NAV",{class:!0});var re=M(w);for(let X=0;X<L.length;X+=1)L[X].l(re);re.forEach(p),A=T(O),H=x(O,"DIV",{class:!0});var ae=M(H);_=x(ae,"BUTTON",{class:!0,"data-svelte-h":!0}),R(_)!=="svelte-1pdyghp"&&(_.innerHTML=f),ae.forEach(p),O.forEach(p),y.forEach(p),D.forEach(p),this.h()},h(){h(i,"class","hidden sm:flex my-auto pb-1"),h(l,"class","flex gap-3"),h(l,"href","/"),h(w,"class","hidden md:flex gap-6 pb-0.5"),h(_,"class","flex md:hidden stroke-primary-dark hover:stroke-tertiary-dark transition-all"),h(H,"class","flex md:border-primary-dark/50"),h(E,"class","flex items-center ml-auto gap-6"),h(r,"class","flex relative items-center px-6 md:px-18 lg:max-w-5xl xl:max-w-6xl mx-auto title-medium"),h(t,"id","header"),h(t,"class",c=o[4].class+" "+o[1]+" "+(o[2]?"opacity-0":"opacity-100")+" border-secondary-dark/10 top-0 z-40 w-full transition-all duration-200")},m(d,D){g&&g.m(d,D),V(d,e,D),V(d,t,D),m(t,r),m(r,l),G(n,l,null),m(l,u),m(l,i),m(r,k),m(r,E),m(E,w);for(let y=0;y<L.length;y+=1)L[y]&&L[y].m(w,null);m(E,A),m(E,H),m(H,_),a=!0,$||(v=Y(_,"click",o[3]),$=!0)},p(d,[D]){if(d[2]?g?(g.p(d,D),D&4&&j(g,1)):(g=ue(d),g.c(),j(g,1),g.m(e.parentNode,e)):g&&($e(),B(g,1,1,()=>{g=null}),Ee()),D&1){I=S(d[0]);let y;for(y=0;y<I.length;y+=1){const z=fe(d,I,y);L[y]?L[y].p(z,D):(L[y]=me(z),L[y].c(),L[y].m(w,null))}for(;y<L.length;y+=1)L[y].d(1);L.length=I.length}(!a||D&22&&c!==(c=d[4].class+" "+d[1]+" "+(d[2]?"opacity-0":"opacity-100")+" border-secondary-dark/10 top-0 z-40 w-full transition-all duration-200"))&&h(t,"class",c)},i(d){a||(j(g),j(n.$$.fragment,d),a=!0)},o(d){B(g),B(n.$$.fragment,d),a=!1},d(d){d&&(p(e),p(t)),g&&g.d(d),Q(n),Z(L,d),$=!1,v()}}}let _e="fixed text-primary-dark py-8 md:bg-surface-dark/60 md:shadow-2xl md:backdrop-blur md:drop-shadow-2xl",Ve="fixed py-4 border-b text-primary-dark bg-surface-dark/60 bg-surface-dark/60 backdrop-blur";function je(o,e,t){const r=[{name:"Home",href:"/"},{name:"Contact",href:"/contact"},{name:"Tours",href:"/tours"},{name:"Adventures",href:"/adventures"},{name:"About",href:"/about"}];let l=_e,n=!1;function u(){t(2,n=!n)}return ge(()=>{window.addEventListener("scroll",()=>{t(1,l=window.scrollY>12?Ve:_e)})}),o.$$set=i=>{t(4,e=P(P({},e),U(i)))},e=U(e),[r,l,n,u,e]}class ze extends K{constructor(e){super(),W(this,e,je,Ie,J,{elements:0})}get elements(){return this.$$.ctx[0]}}function Be(o){let e,t,r,l,n;e=new ze({});const u=o[1].default,i=be(u,o,o[0],null);return l=new De({}),{c(){q(e.$$.fragment),t=C(),i&&i.c(),r=C(),q(l.$$.fragment)},l(s){F(e.$$.fragment,s),t=T(s),i&&i.l(s),r=T(s),F(l.$$.fragment,s)},m(s,k){G(e,s,k),V(s,t,k),i&&i.m(s,k),V(s,r,k),G(l,s,k),n=!0},p(s,[k]){i&&i.p&&(!n||k&1)&&xe(i,u,s,s[0],n?we(u,s[0],k,null):ye(s[0]),null)},i(s){n||(j(e.$$.fragment,s),j(i,s),j(l.$$.fragment,s),n=!0)},o(s){B(e.$$.fragment,s),B(i,s),B(l.$$.fragment,s),n=!1},d(s){s&&(p(t),p(r)),Q(e,s),i&&i.d(s),Q(l,s)}}}function Ne(o,e,t){let{$$slots:r={},$$scope:l}=e;return o.$$set=n=>{"$$scope"in n&&t(0,l=n.$$scope)},[l,r]}class Re extends K{constructor(e){super(),W(this,e,Ne,Be,J,{})}}export{Re as component,Fe as universal};
