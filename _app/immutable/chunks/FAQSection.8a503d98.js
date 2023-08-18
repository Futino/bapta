import{s as J,q as ve,r as be,d as te,e as ne,v as $e,b as we,w as ke,n as z}from"./scheduler.bb6d3576.js";import{S as K,i as R,g as $,m as fe,s as A,r as N,h as w,j as E,n as de,f as m,c as D,u as V,k as _,a as F,y as g,v as B,A as G,o as he,d as k,p as W,t as x,b as Y,w as U,C as re,x as M,D as ae,E as ye,e as Q,z as pe}from"./index.be0d247e.js";import{e as j}from"./each.e59479a4.js";import{I as _e}from"./Icon.006d186b.js";import{O as xe}from"./OutlineButton.3bfa72c0.js";function Ce(i){const e=i-1;return e*e*e+1}function le(i,{delay:e=0,duration:l=400,easing:n=Ce,axis:t="y"}={}){const s=getComputedStyle(i),r=+s.opacity,a=t==="y"?"height":"width",o=parseFloat(s[a]),c=t==="y"?["top","bottom"]:["left","right"],v=c.map(b=>`${b[0].toUpperCase()}${b.slice(1)}`),q=parseFloat(s[`padding${v[0]}`]),f=parseFloat(s[`padding${v[1]}`]),u=parseFloat(s[`margin${v[0]}`]),d=parseFloat(s[`margin${v[1]}`]),h=parseFloat(s[`border${v[0]}Width`]),O=parseFloat(s[`border${v[1]}Width`]);return{delay:e,duration:l,easing:n,css:b=>`overflow: hidden;opacity: ${Math.min(b*20,1)*r};${a}: ${b*o}px;padding-${c[0]}: ${b*q}px;padding-${c[1]}: ${b*f}px;margin-${c[0]}: ${b*u}px;margin-${c[1]}: ${b*d}px;border-${c[0]}-width: ${b*h}px;border-${c[1]}-width: ${b*O}px;`}}function se(i){let e,l,n,t,s;return{c(){e=$("div"),l=$("h1"),n=fe(i[2]),this.h()},l(r){e=w(r,"DIV",{class:!0});var a=E(e);l=w(a,"H1",{class:!0});var o=E(l);n=de(o,i[2]),o.forEach(m),a.forEach(m),this.h()},h(){_(l,"class","body-medium"),_(e,"class","max-w-xl")},m(r,a){F(r,e,a),g(e,l),g(l,n),s=!0},p(r,a){(!s||a&4)&&he(n,r[2])},i(r){s||(r&&ve(()=>{s&&(t||(t=re(e,le,{duration:300},!0)),t.run(1))}),s=!0)},o(r){r&&(t||(t=re(e,le,{duration:300},!1)),t.run(0)),s=!1},d(r){r&&m(e),r&&t&&t.end()}}}function qe(i){let e,l,n,t,s,r,a,o,c,v,q,f;a=new _e({props:{icon:"down-caret"}});let u=i[0]&&se(i);return{c(){e=$("button"),l=$("div"),n=$("h3"),t=fe(i[1]),s=A(),r=$("span"),N(a.$$.fragment),c=A(),u&&u.c(),this.h()},l(d){e=w(d,"BUTTON",{class:!0});var h=E(e);l=w(h,"DIV",{class:!0});var O=E(l);n=w(O,"H3",{class:!0});var b=E(n);t=de(b,i[1]),b.forEach(m),s=D(O),r=w(O,"SPAN",{class:!0,style:!0});var y=E(r);V(a.$$.fragment,y),y.forEach(m),O.forEach(m),c=D(h),u&&u.l(h),h.forEach(m),this.h()},h(){_(n,"class","font-bold title-medium"),_(r,"class","ml-auto transition-all ease-in duration-200"),_(r,"style",o=i[0]?"transform: rotate(180deg)":""),_(l,"class","flex flex-row items-center w-full"),_(e,"class","bg-surface-dark py-4 flex flex-col px-3 gap-y-5 rounded-md shadow-lg text-left transition-all duration-300 w-full max-w-3xl")},m(d,h){F(d,e,h),g(e,l),g(l,n),g(n,t),g(l,s),g(l,r),B(a,r,null),g(e,c),u&&u.m(e,null),v=!0,q||(f=G(e,"click",i[3]),q=!0)},p(d,[h]){(!v||h&2)&&he(t,d[1]),(!v||h&1&&o!==(o=d[0]?"transform: rotate(180deg)":""))&&_(r,"style",o),d[0]?u?(u.p(d,h),h&1&&k(u,1)):(u=se(d),u.c(),k(u,1),u.m(e,null)):u&&(W(),x(u,1,1,()=>{u=null}),Y())},i(d){v||(k(a.$$.fragment,d),k(u),v=!0)},o(d){x(a.$$.fragment,d),x(u),v=!1},d(d){d&&m(e),U(a),u&&u.d(),q=!1,f()}}}function Ie(i,e,l){let{question:n=""}=e,{answer:t=""}=e,{isOpen:s=!1}=e;const r=()=>l(0,s=!s);return i.$$set=a=>{"question"in a&&l(1,n=a.question),"answer"in a&&l(2,t=a.answer),"isOpen"in a&&l(0,s=a.isOpen)},[s,n,t,r]}class me extends K{constructor(e){super(),R(this,e,Ie,qe,J,{question:1,answer:2,isOpen:0})}}function Ee(i){let e,l="Search",n,t,s,r,a,o,c,v,q;return s=new _e({props:{icon:"search",class:"px-4 absolute my-auto h-fit pointer-events-none",fillColor:"transparent"}}),{c(){e=$("label"),e.textContent=l,n=A(),t=$("div"),N(s.$$.fragment),r=A(),a=$("input"),this.h()},l(f){e=w(f,"LABEL",{for:!0,class:!0,["data-svelte-h"]:!0}),M(e)!=="svelte-1oxz2ri"&&(e.textContent=l),n=D(f),t=w(f,"DIV",{class:!0});var u=E(t);V(s.$$.fragment,u),r=D(u),a=w(u,"INPUT",{type:!0,id:!0,class:!0,placeholder:!0}),u.forEach(m),this.h()},h(){_(e,"for","search-field"),_(e,"class","sr-only"),_(a,"type","text"),_(a,"id","search-field"),_(a,"class","block py-3 md:py-6 pl-12 w-full placeholder:title-medium md:placeholder:title-large placeholder:text-surface-on-dark bg-surface-dark rounded-lg focus:ring-tertiary-dark focus:border-tertiary-dark"),_(a,"placeholder","Find an answer to your question..."),_(t,"class",o="relative max-w-3xl "+i[1].class+" flex flex-row items-center rounded-lg border border-outline-variant-dark bg-surface-dark placeholder-surface-on-dark")},m(f,u){F(f,e,u),F(f,n,u),F(f,t,u),B(s,t,null),g(t,r),g(t,a),ae(a,i[0]),c=!0,v||(q=[G(a,"input",i[3]),G(a,"input",i[2])],v=!0)},p(f,[u]){u&1&&a.value!==f[0]&&ae(a,f[0]),(!c||u&2&&o!==(o="relative max-w-3xl "+f[1].class+" flex flex-row items-center rounded-lg border border-outline-variant-dark bg-surface-dark placeholder-surface-on-dark"))&&_(t,"class",o)},i(f){c||(k(s.$$.fragment,f),c=!0)},o(f){x(s.$$.fragment,f),c=!1},d(f){f&&(m(e),m(n),m(t)),U(s),v=!1,be(q)}}}function Oe(i,e,l){let{searchInput:n}=e;function t(r){$e.call(this,i,r)}function s(){n=this.value,l(0,n)}return i.$$set=r=>{l(1,e=te(te({},e),ne(r))),"searchInput"in r&&l(0,n=r.searchInput)},e=ne(e),[n,e,t,s]}class Fe extends K{constructor(e){super(),R(this,e,Oe,Ee,J,{searchInput:0})}}function oe(i,e,l){const n=i.slice();return n[7]=e[l].question,n[8]=e[l].answer,n[9]=e[l].index,n}function ie(i,e,l){const n=i.slice();return n[7]=e[l].question,n[8]=e[l].answer,n[9]=e[l].index,n}function Se(i){let e,l="See More";return{c(){e=$("h1"),e.textContent=l,this.h()},l(n){e=w(n,"H1",{class:!0,["data-svelte-h"]:!0}),M(e)!=="svelte-14caxug"&&(e.textContent=l),this.h()},h(){_(e,"class","font-bold title-small")},m(n,t){F(n,e,t)},p:z,d(n){n&&m(e)}}}function Ae(i){let e,l,n=j(i[0]),t=[];for(let r=0;r<n.length;r+=1)t[r]=ce(oe(i,n,r));const s=r=>x(t[r],1,1,()=>{t[r]=null});return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=Q()},l(r){for(let a=0;a<t.length;a+=1)t[a].l(r);e=Q()},m(r,a){for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(r,a);F(r,e,a),l=!0},p(r,a){if(a&3){n=j(r[0]);let o;for(o=0;o<n.length;o+=1){const c=oe(r,n,o);t[o]?(t[o].p(c,a),k(t[o],1)):(t[o]=ce(c),t[o].c(),k(t[o],1),t[o].m(e.parentNode,e))}for(W(),o=n.length;o<t.length;o+=1)s(o);Y()}},i(r){if(!l){for(let a=0;a<n.length;a+=1)k(t[a]);l=!0}},o(r){t=t.filter(Boolean);for(let a=0;a<t.length;a+=1)x(t[a]);l=!1},d(r){r&&m(e),pe(t,r)}}}function De(i){let e,l,n=j(i[3]),t=[];for(let r=0;r<n.length;r+=1)t[r]=ue(ie(i,n,r));const s=r=>x(t[r],1,1,()=>{t[r]=null});return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=Q()},l(r){for(let a=0;a<t.length;a+=1)t[a].l(r);e=Q()},m(r,a){for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(r,a);F(r,e,a),l=!0},p(r,a){if(a&10){n=j(r[3]);let o;for(o=0;o<n.length;o+=1){const c=ie(r,n,o);t[o]?(t[o].p(c,a),k(t[o],1)):(t[o]=ue(c),t[o].c(),k(t[o],1),t[o].m(e.parentNode,e))}for(W(),o=n.length;o<t.length;o+=1)s(o);Y()}},i(r){if(!l){for(let a=0;a<n.length;a+=1)k(t[a]);l=!0}},o(r){t=t.filter(Boolean);for(let a=0;a<t.length;a+=1)x(t[a]);l=!1},d(r){r&&m(e),pe(t,r)}}}function He(i){let e,l='<div class="w-full py-12 display-small inline"><h1 class="">Sorry, we couldn&#39;t find your question.</h1> <a href="/contact" class="underline text-tertiary-dark">Try Asking Us Here</a></div>';return{c(){e=$("section"),e.innerHTML=l},l(n){e=w(n,"SECTION",{["data-svelte-h"]:!0}),M(e)!=="svelte-1t29a2o"&&(e.innerHTML=l)},m(n,t){F(n,e,t)},p:z,i:z,o:z,d(n){n&&m(e)}}}function ce(i){let e,l;return e=new me({props:{question:i[7],answer:i[8],isOpen:i[9]==i[1]}}),{c(){N(e.$$.fragment)},l(n){V(e.$$.fragment,n)},m(n,t){B(e,n,t),l=!0},p(n,t){const s={};t&1&&(s.question=n[7]),t&1&&(s.answer=n[8]),t&3&&(s.isOpen=n[9]==n[1]),e.$set(s)},i(n){l||(k(e.$$.fragment,n),l=!0)},o(n){x(e.$$.fragment,n),l=!1},d(n){U(e,n)}}}function ue(i){let e,l;return e=new me({props:{question:i[7],answer:i[8],isOpen:i[9]==i[1]}}),{c(){N(e.$$.fragment)},l(n){V(e.$$.fragment,n)},m(n,t){B(e,n,t),l=!0},p(n,t){const s={};t&8&&(s.question=n[7]),t&8&&(s.answer=n[8]),t&10&&(s.isOpen=n[9]==n[1]),e.$set(s)},i(n){l||(k(e.$$.fragment,n),l=!0)},o(n){x(e.$$.fragment,n),l=!1},d(n){U(e,n)}}}function Le(i){let e,l,n,t,s,r,a="Your Safari Questions, Answered",o,c,v="Find Clarity and Confidence in Planning Your Unforgettable African Adventure.",q,f,u,d,h,O,b,y,I,P;f=new xe({props:{href:"/contact",class:"py-2",$$slots:{default:[Se]},$$scope:{ctx:i}}});function ge(p){i[5](p)}let X={class:"w-full mb-4"};i[2]!==void 0&&(X.searchInput=i[2]),h=new Fe({props:X}),we.push(()=>ye(h,"searchInput",ge)),h.$on("input",i[4]);const Z=[He,De,Ae],H=[];function ee(p,C){return p[2]&&p[3].length===0?0:p[3].length>0?1:2}return y=ee(i),I=H[y]=Z[y](i),{c(){e=$("section"),l=$("div"),n=A(),t=$("div"),s=$("div"),r=$("h1"),r.textContent=a,o=A(),c=$("h1"),c.textContent=v,q=A(),N(f.$$.fragment),u=A(),d=$("div"),N(h.$$.fragment),b=A(),I.c(),this.h()},l(p){e=w(p,"SECTION",{class:!0});var C=E(e);l=w(C,"DIV",{class:!0}),E(l).forEach(m),n=D(C),t=w(C,"DIV",{class:!0});var T=E(t);s=w(T,"DIV",{class:!0});var S=E(s);r=w(S,"H1",{class:!0,["data-svelte-h"]:!0}),M(r)!=="svelte-1ckj0dk"&&(r.textContent=a),o=D(S),c=w(S,"H1",{class:!0,["data-svelte-h"]:!0}),M(c)!=="svelte-9ev9il"&&(c.textContent=v),q=D(S),V(f.$$.fragment,S),S.forEach(m),u=D(T),d=w(T,"DIV",{class:!0});var L=E(d);V(h.$$.fragment,L),b=D(L),I.l(L),L.forEach(m),T.forEach(m),C.forEach(m),this.h()},h(){_(l,"class","absolute bottom-0 w-screen bg-gradient-to-t from-surface-variant-dark to-transparent h-36"),_(r,"class","font-semibold headline-medium md:display-medium leading-tight"),_(c,"class","body-large hidden md:flex"),_(s,"class","col-span-1 flex flex-col gap-y-4 items-center self-start md:items-start md:text-left text-surface-on-dark"),_(d,"class","flex flex-col gap-4 h-screen col-span-2 items-center"),_(t,"class","inner-section grid grid-cols-1 md:grid-cols-3 items-center gap-3 h-[500px]"),_(e,"class","section overflow-hidden relative")},m(p,C){F(p,e,C),g(e,l),g(e,n),g(e,t),g(t,s),g(s,r),g(s,o),g(s,c),g(s,q),B(f,s,null),g(t,u),g(t,d),B(h,d,null),g(d,b),H[y].m(d,null),P=!0},p(p,[C]){const T={};C&16384&&(T.$$scope={dirty:C,ctx:p}),f.$set(T);const S={};!O&&C&4&&(O=!0,S.searchInput=p[2],ke(()=>O=!1)),h.$set(S);let L=y;y=ee(p),y===L?H[y].p(p,C):(W(),x(H[L],1,1,()=>{H[L]=null}),Y(),I=H[y],I?I.p(p,C):(I=H[y]=Z[y](p),I.c()),k(I,1),I.m(d,null))},i(p){P||(k(f.$$.fragment,p),k(h.$$.fragment,p),k(I),P=!0)},o(p){x(f.$$.fragment,p),x(h.$$.fragment,p),x(I),P=!1},d(p){p&&m(e),U(f),U(h),H[y].d()}}}function Te(i,e,l){let{faqs:n=[]}=e,t,s="",r=[];const a=()=>l(3,r=n.filter(c=>{if(c.question.toLowerCase().includes(s.toLowerCase())||c.answer.toLowerCase().includes(s.toLowerCase()))return!0}));function o(c){s=c,l(2,s)}return i.$$set=c=>{"faqs"in c&&l(0,n=c.faqs)},[n,t,s,r,a,o]}class Pe extends K{constructor(e){super(),R(this,e,Te,Le,J,{faqs:0})}}export{Pe as F};