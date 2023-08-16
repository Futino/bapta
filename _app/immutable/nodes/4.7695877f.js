import{s as St,f as Se,n as J}from"../chunks/scheduler.2a83d2c7.js";import{S as zt,i as qt,g as o,s as p,r as ee,h as i,j as y,y as S,c as v,u as te,f as n,k as r,a as k,x as l,v as ae,d as F,b as Dt,t as W,w as se,z as st,m as le,n as re,e as wt,p as Vt}from"../chunks/index.f25f00a6.js";import{e as Ce}from"../chunks/each.e59479a4.js";import{O as Me}from"../chunks/OutlineButton.91f51ce5.js";import{t as Bt}from"../chunks/TourCard.d0854e0e.js";import{T as Lt}from"../chunks/ToursSnippet.4927c496.js";import{F as Ot}from"../chunks/FAQSection.9dc4432a.js";import{s as At}from"../chunks/safariFaq.b919c078.js";const $t=[{index:0,href:"/adventures/kilimanjaro",img_path:"images/kilimanjaro/7.webp",label:"Mount Kilimanjaro",body:"Set out on the ultimate adventure of a lifetime by scaling the iconic Mount Kilimanjaro in Tanzania. Traverse through diverse terrains, from lush rainforests to glacial peaks, as you ascend towards the Roof of Africa. Guided by seasoned experts, this challenging yet rewarding expedition offers breathtaking vistas and a profound sense of achievement at the summit, making your Kilimanjaro ascent an unforgettable triumph."},{index:1,href:"/adventures/mountmeru",img_path:"images/meru/1.webp",label:"Mount Meru",body:"Embark on an exhilarating journey to conquer the majestic heights of Mount Meru in Tanzania. Immerse yourself in awe-inspiring landscapes, lush forests, and diverse wildlife as you ascend towards the summit. With experienced guides, comfortable accommodations, and a sense of accomplishment awaiting you at the peak, Mount Meru promises an unforgettable adventure of a lifetime."},{index:2,href:"/adventures/zanzibar",img_path:"images/zanzibar/1.webp",label:"Zanzibar",body:"Experience paradise like never before on the enchanting island of Zanzibar. With pristine beaches, turquoise waters, and a rich cultural heritage, this idyllic retreat offers a perfect blend of relaxation and exploration. Indulge in luxurious resorts, savor delectable cuisine, and immerse yourself in the vibrant local markets. Whether you seek tranquil sunsets or thrilling water activities, Zanzibar promises an unforgettable escape in a tropical haven."}];function kt(c,e,a){const s=c.slice();return s[2]=e[a].img_path,s[3]=e[a].label,s[4]=e[a].body,s[5]=e[a].href,s[7]=a,s}function Ct(c,e,a){const s=c.slice();return s[8]=e[a],s}function Et(c,e,a){const s=c.slice();return s[11]=e[a].title,s[4]=e[a].body,s}function Ft(c,e,a){const s=c.slice();return s[14]=e[a],s[16]=a,s}function Gt(c){let e,a="Why Choose Us";return{c(){e=o("h1"),e.textContent=a,this.h()},l(s){e=i(s,"H1",{class:!0,["data-svelte-h"]:!0}),S(e)!=="svelte-48n4ds"&&(e.textContent=a),this.h()},h(){r(e,"class","px-4 py-1 title-large")},m(s,f){k(s,e,f)},p:J,d(s){s&&n(e)}}}function Wt(c,e){let a,s='<h1 class="font-bold text-primary-light title-large">★★★★★</h1> ';return{key:c,first:null,c(){a=o("div"),a.innerHTML=s,this.h()},l(f){a=i(f,"DIV",{["data-svelte-h"]:!0}),S(a)!=="svelte-af5s85"&&(a.innerHTML=s),this.h()},h(){this.first=a},m(f,h){k(f,a,h)},p:J,d(f){f&&n(a)}}}function Tt(c){let e,a,s=c[11]+"",f,h,_,z=c[4]+"",x,b;return{c(){e=o("div"),a=o("h1"),f=le(s),h=p(),_=o("h1"),x=le(z),b=p(),this.h()},l($){e=i($,"DIV",{class:!0});var I=y(e);a=i(I,"H1",{class:!0});var M=y(a);f=re(M,s),M.forEach(n),h=v(I),_=i(I,"H1",{class:!0});var E=y(_);x=re(E,z),E.forEach(n),b=v(I),I.forEach(n),this.h()},h(){r(a,"class","text-primary-dark headline-small font-semibold"),r(_,"class","body-medium max-w-lg"),r(e,"class","bg-surface-dark rounded-lg flex flex-col items-center lg:items-start w-fit px-3 py-3 gap-2 shadow-lg shadow-surface-dark")},m($,I){k($,e,I),l(e,a),l(a,f),l(e,h),l(e,_),l(_,x),l(e,b)},p:J,d($){$&&n(e)}}}function It(c){let e,a,s,f,h,_=c[8].body+"",z,x,b,$,I=c[8].name+"",M,E,C,B="TripAdvisor",H;return{c(){e=o("a"),a=o("img"),f=p(),h=o("h1"),z=le(_),x=p(),b=o("div"),$=o("h1"),M=le(I),E=p(),C=o("h2"),C.textContent=B,H=p(),this.h()},l(g){e=i(g,"A",{href:!0,class:!0});var m=y(e);a=i(m,"IMG",{class:!0,src:!0,alt:!0}),f=v(m),h=i(m,"H1",{class:!0});var T=y(h);z=re(T,_),T.forEach(n),x=v(m),b=i(m,"DIV",{class:!0});var O=y(b);$=i(O,"H1",{class:!0});var V=y($);M=re(V,I),V.forEach(n),E=v(O),C=i(O,"H2",{class:!0,["data-svelte-h"]:!0}),S(C)!=="svelte-1v8vwge"&&(C.textContent=B),O.forEach(n),H=v(m),m.forEach(n),this.h()},h(){r(a,"class","w-32 h-32 p-1 m-2 border-2 rounded-full border-primary-dark"),Se(a.src,s=c[8].img_path)||r(a,"src",s),r(a,"alt",c[8].name),r(h,"class","py-1 text-center body-medium text-surface-on-dark"),r($,"class","title-large"),r(C,"class","body-small"),r(b,"class","flex flex-col pt-3 mt-auto justify-self-end h-fit text-secondary-dark transition-all duration-500 group-hover:text-tertiary-dark"),r(e,"href",c[8].src),r(e,"class","transition-all duration-300 rounded-lg p-6 shadow-lg shadow-surface-dark flex flex-col h-full w-full max-w-md text-center items-center bg-surface-dark hover:scale-105 group")},m(g,m){k(g,e,m),l(e,a),l(e,f),l(e,h),l(h,z),l(e,x),l(e,b),l(b,$),l($,M),l(b,E),l(b,C),l(e,H)},p:J,d(g){g&&n(e)}}}function Nt(c){let e,a,s,f,h,_,z=c[3]+"",x,b,$,I=c[4]+"",M,E,C,B,H;return C=new Me({props:{href:c[5],class:"py-2",$$slots:{default:[Rt]},$$scope:{ctx:c}}}),{c(){e=o("div"),a=o("img"),f=p(),h=o("div"),_=o("h1"),x=le(z),b=p(),$=o("h2"),M=le(I),E=p(),ee(C.$$.fragment),B=p(),this.h()},l(g){e=i(g,"DIV",{class:!0});var m=y(e);a=i(m,"IMG",{src:!0,alt:!0,class:!0}),f=v(m),h=i(m,"DIV",{class:!0});var T=y(h);_=i(T,"H1",{class:!0});var O=y(_);x=re(O,z),O.forEach(n),b=v(T),$=i(T,"H2",{class:!0});var V=y($);M=re(V,I),V.forEach(n),E=v(T),te(C.$$.fragment,T),T.forEach(n),B=v(m),m.forEach(n),this.h()},h(){Se(a.src,s=c[2])||r(a,"src",s),r(a,"alt","img"),r(a,"class","adventure-thumbnail md:order-first svelte-tiqhvc"),r(_,"class","font-semibold headline-large text-primary-dark"),r($,"class","body-large max-w-md"),r(h,"class","flex flex-col items-start self-center gap-y-1"),r(e,"class","adventure-row svelte-tiqhvc")},m(g,m){k(g,e,m),l(e,a),l(e,f),l(e,h),l(h,_),l(_,x),l(h,b),l(h,$),l($,M),l(h,E),ae(C,h,null),l(e,B),H=!0},p(g,m){const T={};m&131072&&(T.$$scope={dirty:m,ctx:g}),C.$set(T)},i(g){H||(F(C.$$.fragment,g),H=!0)},o(g){W(C.$$.fragment,g),H=!1},d(g){g&&n(e),se(C)}}}function Kt(c){let e,a,s,f,h,_,z=c[3]+"",x,b,$,I=c[4]+"",M,E,C,B,H;return C=new Me({props:{href:c[5],class:"py-2",$$slots:{default:[Jt]},$$scope:{ctx:c}}}),{c(){e=o("div"),a=o("img"),f=p(),h=o("div"),_=o("h1"),x=le(z),b=p(),$=o("h2"),M=le(I),E=p(),ee(C.$$.fragment),B=p(),this.h()},l(g){e=i(g,"DIV",{class:!0});var m=y(e);a=i(m,"IMG",{src:!0,alt:!0,class:!0}),f=v(m),h=i(m,"DIV",{class:!0});var T=y(h);_=i(T,"H1",{class:!0});var O=y(_);x=re(O,z),O.forEach(n),b=v(T),$=i(T,"H2",{class:!0});var V=y($);M=re(V,I),V.forEach(n),E=v(T),te(C.$$.fragment,T),T.forEach(n),B=v(m),m.forEach(n),this.h()},h(){Se(a.src,s=c[2])||r(a,"src",s),r(a,"alt","img"),r(a,"class","adventure-thumbnail md:order-last svelte-tiqhvc"),r(_,"class","font-semibold headline-large text-primary-dark"),r($,"class","body-large max-w-md"),r(h,"class","flex flex-col md:items-end self-center gap-y-1 md:text-right md:order-first"),r(e,"class","adventure-row svelte-tiqhvc")},m(g,m){k(g,e,m),l(e,a),l(e,f),l(e,h),l(h,_),l(_,x),l(h,b),l(h,$),l($,M),l(h,E),ae(C,h,null),l(e,B),H=!0},p(g,m){const T={};m&131072&&(T.$$scope={dirty:m,ctx:g}),C.$set(T)},i(g){H||(F(C.$$.fragment,g),H=!0)},o(g){W(C.$$.fragment,g),H=!1},d(g){g&&n(e),se(C)}}}function Rt(c){let e,a="Learn More";return{c(){e=o("h1"),e.textContent=a,this.h()},l(s){e=i(s,"H1",{class:!0,["data-svelte-h"]:!0}),S(e)!=="svelte-1qvt42z"&&(e.textContent=a),this.h()},h(){r(e,"class","font-bold title-small")},m(s,f){k(s,e,f)},p:J,d(s){s&&n(e)}}}function Jt(c){let e,a="Learn More";return{c(){e=o("h1"),e.textContent=a,this.h()},l(s){e=i(s,"H1",{class:!0,["data-svelte-h"]:!0}),S(e)!=="svelte-1qvt42z"&&(e.textContent=a),this.h()},h(){r(e,"class","font-bold title-small")},m(s,f){k(s,e,f)},p:J,d(s){s&&n(e)}}}function jt(c){let e,a,s,f;const h=[Kt,Nt],_=[];function z(x,b){return x[7]%2==0?0:1}return e=z(c),a=_[e]=h[e](c),{c(){a.c(),s=wt()},l(x){a.l(x),s=wt()},m(x,b){_[e].m(x,b),k(x,s,b),f=!0},p(x,b){a.p(x,b)},i(x){f||(F(a),f=!0)},o(x){W(a),f=!1},d(x){x&&n(s),_[e].d(x)}}}function Ut(c){let e,a="Find a Tour";return{c(){e=o("h1"),e.textContent=a,this.h()},l(s){e=i(s,"H1",{class:!0,["data-svelte-h"]:!0}),S(e)!=="svelte-1f27rxs"&&(e.textContent=a),this.h()},h(){r(e,"class","font-bold title-small")},m(s,f){k(s,e,f)},p:J,d(s){s&&n(e)}}}function Yt(c){let e,a="Learn More";return{c(){e=o("h1"),e.textContent=a,this.h()},l(s){e=i(s,"H1",{class:!0,["data-svelte-h"]:!0}),S(e)!=="svelte-ctux3s"&&(e.textContent=a),this.h()},h(){r(e,"class","p-2 font-bold title-small")},m(s,f){k(s,e,f)},p:J,d(s){s&&n(e)}}}function Zt(c){let e,a="Find a Tour";return{c(){e=o("h1"),e.textContent=a,this.h()},l(s){e=i(s,"H1",{class:!0,["data-svelte-h"]:!0}),S(e)!=="svelte-1f27rxs"&&(e.textContent=a),this.h()},h(){r(e,"class","font-bold title-small")},m(s,f){k(s,e,f)},p:J,d(s){s&&n(e)}}}function Pt(c){let e,a,s,f=`A Safari of a Lifetime,<br/>
			Memories to Last Forever.`,h,_,z="Unleash Your Adventurous Side with Our Unique Safari Experiences in Tanzania.",x,b,$,I,M,E=[],C=new Map,B,H,g,m,T=`<img src="/images/safari/51.webp" alt="" class="object-cover h-96 lg:h-[600px] xl:h-[600px] w-full object-center rounded-md"/> <h1 class="font-extrabold display-small md:display-medium">Your Safari Experience</h1> <h2 class="body-large max-w-2xl">Embark on an extraordinary journey with a Bapta Safari, where you&#39;ll immerse yourself in the
				beauty of the wild. Traverse through awe-inspiring landscapes, each one more breathtaking
				than the last, while being expertly led by seasoned professionals, including myself, who are
				passionate about sharing their deep knowledge of Tanzania&#39;s hidden gems. Encounter the most
				remarkable and elusive wildlife, observing them in their natural habitats, and let every
				moment etch into your heart, crafting indelible memories destined to be cherished for a
				lifetime.</h2> <div class="flex flex-row mx-auto lg:mx-0 lg:-ml-3"><img src="images/logo/bapta_jeep.png" alt="" class="w-24 h-24 p-4 rounded-full"/> <div class="flex flex-col justify-center text-left"><h3 class="font-semibold body-large">Emmanuel Baptister Kilas</h3> <h3 class="font-light body-medium">Creator of Bapta Safari</h3></div></div>`,O,V,Ve,ne,Be,oe,Ee,ie,Le,ce,R,ue,lt='<h1 class="display-small md:display-large font-bold">Extend Your Safari</h1> <h1 class="title-medium md:headline-small font-bold">Add a beach stay or hiking adventure to your safari!</h1>',Je,Oe,de,U,N,fe,rt="Find a Tour Today!",Ue,he,nt=`Browse through our catalogue of tours to find just the one for you! But don't worry if you
				don't find your dream tour, because each tour is fully customizable! Find a tour you love,
				and request a quote!`,Ye,Y,Ze,me,ot,Ae,ge,Fe,pe,A,ve,it="Bapta Safaris",Pe,_e,ct,Qe,be,ut=`Bapta, founder of Bapta Safaris, is passionate about wildlife conservation. Growing up in
			Tanzania, he started his own safari business to share the beauty and biodiversity of his
			country while supporting local communities and the environment. Growing up in Tanzania, he
			started his own safari business to share the beauty and biodiversity of his country while
			supporting local communities and the environment.`,Xe,Z,Ge,ye,P,K,xe,dt="Ready to find a Tour?",et,we,ft=`Browse through our catalogue of tours to find just the one for you! But don't worry if you
				don't find your dream tour, because each tour is fully customizable! Find a tour you love,
				and request a quote!`,tt,Q,at,$e,ht,We;b=new Me({props:{href:"#choose_bapta",$$slots:{default:[Gt]},$$scope:{ctx:c}}});let mt=Ce(Array(3));const Ht=t=>t[16];for(let t=0;t<mt.length;t+=1){let u=Ft(c,mt,t),w=Ht(u);C.set(w,E[t]=Wt(w))}let Te=Ce(c[1]),q=[];for(let t=0;t<Te.length;t+=1)q[t]=Tt(Et(c,Te,t));ne=new Lt({props:{tours:Bt,title:"Top Rated Tours",buttonText:"See More",tag:"Top Rated"}});let Ie=Ce(c[0]),D=[];for(let t=0;t<Ie.length;t+=1)D[t]=It(Ct(c,Ie,t));let ke=Ce($t),j=[];for(let t=0;t<ke.length;t+=1)j[t]=jt(kt(c,ke,t));const Mt=t=>W(j[t],1,1,()=>{j[t]=null});return Y=new Me({props:{href:"/tours",class:"py-2",$$slots:{default:[Ut]},$$scope:{ctx:c}}}),ge=new Ot({props:{faqs:At}}),Z=new Me({props:{href:"/about",$$slots:{default:[Yt]},$$scope:{ctx:c}}}),Q=new Me({props:{href:"/tours",class:"py-2",$$slots:{default:[Zt]},$$scope:{ctx:c}}}),{c(){e=o("section"),a=o("div"),s=o("h1"),s.innerHTML=f,h=p(),_=o("h1"),_.textContent=z,x=p(),ee(b.$$.fragment),$=p(),I=o("section"),M=o("div");for(let t=0;t<E.length;t+=1)E[t].c();B=p(),H=o("section"),g=o("div"),m=o("div"),m.innerHTML=T,O=p(),V=o("div");for(let t=0;t<q.length;t+=1)q[t].c();Ve=p(),ee(ne.$$.fragment),Be=p(),oe=o("section"),Ee=o("div"),ie=o("div");for(let t=0;t<D.length;t+=1)D[t].c();Le=p(),ce=o("section"),R=o("div"),ue=o("div"),ue.innerHTML=lt,Je=p();for(let t=0;t<j.length;t+=1)j[t].c();Oe=p(),de=o("section"),U=o("div"),N=o("div"),fe=o("h1"),fe.textContent=rt,Ue=p(),he=o("h2"),he.textContent=nt,Ye=p(),ee(Y.$$.fragment),Ze=p(),me=o("img"),Ae=p(),ee(ge.$$.fragment),Fe=p(),pe=o("section"),A=o("div"),ve=o("h1"),ve.textContent=it,Pe=p(),_e=o("img"),Qe=p(),be=o("h1"),be.textContent=ut,Xe=p(),ee(Z.$$.fragment),Ge=p(),ye=o("section"),P=o("div"),K=o("div"),xe=o("h1"),xe.textContent=dt,et=p(),we=o("h2"),we.textContent=ft,tt=p(),ee(Q.$$.fragment),at=p(),$e=o("img"),this.h()},l(t){e=i(t,"SECTION",{class:!0});var u=y(e);a=i(u,"DIV",{class:!0});var w=y(a);s=i(w,"H1",{class:!0,["data-svelte-h"]:!0}),S(s)!=="svelte-cdemgn"&&(s.innerHTML=f),h=v(w),_=i(w,"H1",{class:!0,["data-svelte-h"]:!0}),S(_)!=="svelte-85xrpf"&&(_.textContent=z),x=v(w),te(b.$$.fragment,w),w.forEach(n),u.forEach(n),$=v(t),I=i(t,"SECTION",{class:!0});var ze=y(I);M=i(ze,"DIV",{class:!0});var qe=y(M);for(let L=0;L<E.length;L+=1)E[L].l(qe);qe.forEach(n),ze.forEach(n),B=v(t),H=i(t,"SECTION",{class:!0,id:!0});var De=y(H);g=i(De,"DIV",{class:!0});var d=y(g);m=i(d,"DIV",{class:!0,["data-svelte-h"]:!0}),S(m)!=="svelte-x7hdjb"&&(m.innerHTML=T),O=v(d),V=i(d,"DIV",{class:!0});var G=y(V);for(let L=0;L<q.length;L+=1)q[L].l(G);G.forEach(n),d.forEach(n),De.forEach(n),Ve=v(t),te(ne.$$.fragment,t),Be=v(t),oe=i(t,"SECTION",{class:!0});var gt=y(oe);Ee=i(gt,"DIV",{class:!0});var pt=y(Ee);ie=i(pt,"DIV",{class:!0});var vt=y(ie);for(let L=0;L<D.length;L+=1)D[L].l(vt);vt.forEach(n),pt.forEach(n),gt.forEach(n),Le=v(t),ce=i(t,"SECTION",{class:!0});var _t=y(ce);R=i(_t,"DIV",{class:!0});var Ne=y(R);ue=i(Ne,"DIV",{class:!0,["data-svelte-h"]:!0}),S(ue)!=="svelte-197a4qu"&&(ue.innerHTML=lt),Je=v(Ne);for(let L=0;L<j.length;L+=1)j[L].l(Ne);Ne.forEach(n),_t.forEach(n),Oe=v(t),de=i(t,"SECTION",{class:!0});var bt=y(de);U=i(bt,"DIV",{class:!0});var Ke=y(U);N=i(Ke,"DIV",{class:!0});var je=y(N);fe=i(je,"H1",{class:!0,["data-svelte-h"]:!0}),S(fe)!=="svelte-1b9g2w5"&&(fe.textContent=rt),Ue=v(je),he=i(je,"H2",{class:!0,["data-svelte-h"]:!0}),S(he)!=="svelte-8dmmzn"&&(he.textContent=nt),Ye=v(je),te(Y.$$.fragment,je),je.forEach(n),Ze=v(Ke),me=i(Ke,"IMG",{src:!0,alt:!0,class:!0}),Ke.forEach(n),bt.forEach(n),Ae=v(t),te(ge.$$.fragment,t),Fe=v(t),pe=i(t,"SECTION",{class:!0});var yt=y(pe);A=i(yt,"DIV",{class:!0});var X=y(A);ve=i(X,"H1",{class:!0,["data-svelte-h"]:!0}),S(ve)!=="svelte-bqxtwy"&&(ve.textContent=it),Pe=v(X),_e=i(X,"IMG",{src:!0,class:!0,alt:!0}),Qe=v(X),be=i(X,"H1",{class:!0,["data-svelte-h"]:!0}),S(be)!=="svelte-1aej5ph"&&(be.textContent=ut),Xe=v(X),te(Z.$$.fragment,X),X.forEach(n),yt.forEach(n),Ge=v(t),ye=i(t,"SECTION",{class:!0});var xt=y(ye);P=i(xt,"DIV",{class:!0});var Re=y(P);K=i(Re,"DIV",{class:!0});var He=y(K);xe=i(He,"H1",{class:!0,["data-svelte-h"]:!0}),S(xe)!=="svelte-m39jby"&&(xe.textContent=dt),et=v(He),we=i(He,"H2",{class:!0,["data-svelte-h"]:!0}),S(we)!=="svelte-8dmmzn"&&(we.textContent=ft),tt=v(He),te(Q.$$.fragment,He),He.forEach(n),at=v(Re),$e=i(Re,"IMG",{src:!0,alt:!0,class:!0}),Re.forEach(n),xt.forEach(n),this.h()},h(){r(s,"class","font-bold text-primary-dark display-medium"),r(_,"class","pb-6 text-left body-large"),r(a,"class","grid space-y-3 text-left justify-items-start"),r(e,"class","grid justify-center w-full h-screen grid-rows-2 px-10 bg-cover bg-bottom border-b shadow-lg shadow-background-dark lg:grid-cols-2 card-shadow xl:px-40 pt-60 place-items-center border-secondary-light/40 dark:border-secondary-dark/40 bg-landing_hero"),r(M,"class","grid grid-cols-3 gap-5 px-10 py-10 brightness-125 lg:px-20 xl:px-40 bg-primary-dark/20"),r(I,"class","shadow-lg bg-surface-variant-light/90 shadow-background-dark"),r(m,"class","flex flex-col gap-y-2 lg:justify-self-end justify-items-center items-center lg:items-start lg:justify-items-start lg:text-left"),r(V,"class","flex flex-col gap-10 items-center h-full justify-items-center md:items-start lg:justify-between pb-32 lg:text-left"),r(g,"class","inner-section grid grid-cols-1 lg:grid-cols-2 gap-12 place-items-center px-10"),r(H,"class","section"),r(H,"id","choose_bapta"),r(ie,"class","grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center"),r(Ee,"class","inner-section"),r(oe,"class","section"),r(ue,"class","flex flex-col md:text-center text-surface-on-dark"),r(R,"class","inner-section text-left flex flex-col gap-y-8 items-start md:items-center"),r(ce,"class","section relative"),r(fe,"class","font-semibold headline-large text-primary-dark"),r(he,"class","body-large max-w-xl"),r(N,"class","flex flex-col gap-y-3"),Se(me.src,ot="/images/safari/20.webp")||r(me,"src",ot),r(me,"alt","img"),r(me,"class","object-cover object-center rounded-md w-full"),r(U,"class","inner-section text-left grid grid-cols-1 sm:grid-cols-2 place-items-center gap-8"),r(de,"class","section relative z-10"),r(ve,"class","font-bold text-center display-small"),Se(_e.src,ct="favicon.webp")||r(_e,"src",ct),r(_e,"class","rounded-full h-44"),r(_e,"alt","logo"),r(be,"class","text-center body-large max-w-3xl"),r(A,"class","card max-w-5xl p-10 space-y-6 border rounded-lg shadow-2xl border-primary-dark/50 bg-card-surface-on"),r(pe,"class","flex flex-col items-center space-y-12 section"),r(xe,"class","font-semibold headline-large text-primary-dark"),r(we,"class","body-large max-w-xl"),r(K,"class","flex flex-col gap-y-3"),Se($e.src,ht="/images/safari/59.webp")||r($e,"src",ht),r($e,"alt","img"),r($e,"class","object-cover object-center rounded-md w-full"),r(P,"class","inner-section text-left grid grid-cols-1 md:grid-cols-2 place-items-center gap-8"),r(ye,"class","section relative z-10")},m(t,u){k(t,e,u),l(e,a),l(a,s),l(a,h),l(a,_),l(a,x),ae(b,a,null),k(t,$,u),k(t,I,u),l(I,M);for(let w=0;w<E.length;w+=1)E[w]&&E[w].m(M,null);k(t,B,u),k(t,H,u),l(H,g),l(g,m),l(g,O),l(g,V);for(let w=0;w<q.length;w+=1)q[w]&&q[w].m(V,null);k(t,Ve,u),ae(ne,t,u),k(t,Be,u),k(t,oe,u),l(oe,Ee),l(Ee,ie);for(let w=0;w<D.length;w+=1)D[w]&&D[w].m(ie,null);k(t,Le,u),k(t,ce,u),l(ce,R),l(R,ue),l(R,Je);for(let w=0;w<j.length;w+=1)j[w]&&j[w].m(R,null);k(t,Oe,u),k(t,de,u),l(de,U),l(U,N),l(N,fe),l(N,Ue),l(N,he),l(N,Ye),ae(Y,N,null),l(U,Ze),l(U,me),k(t,Ae,u),ae(ge,t,u),k(t,Fe,u),k(t,pe,u),l(pe,A),l(A,ve),l(A,Pe),l(A,_e),l(A,Qe),l(A,be),l(A,Xe),ae(Z,A,null),k(t,Ge,u),k(t,ye,u),l(ye,P),l(P,K),l(K,xe),l(K,et),l(K,we),l(K,tt),ae(Q,K,null),l(P,at),l(P,$e),We=!0},p(t,[u]){const w={};if(u&131072&&(w.$$scope={dirty:u,ctx:t}),b.$set(w),u&2){Te=Ce(t[1]);let d;for(d=0;d<Te.length;d+=1){const G=Et(t,Te,d);q[d]?q[d].p(G,u):(q[d]=Tt(G),q[d].c(),q[d].m(V,null))}for(;d<q.length;d+=1)q[d].d(1);q.length=Te.length}if(u&1){Ie=Ce(t[0]);let d;for(d=0;d<Ie.length;d+=1){const G=Ct(t,Ie,d);D[d]?D[d].p(G,u):(D[d]=It(G),D[d].c(),D[d].m(ie,null))}for(;d<D.length;d+=1)D[d].d(1);D.length=Ie.length}if(u&0){ke=Ce($t);let d;for(d=0;d<ke.length;d+=1){const G=kt(t,ke,d);j[d]?(j[d].p(G,u),F(j[d],1)):(j[d]=jt(G),j[d].c(),F(j[d],1),j[d].m(R,null))}for(Vt(),d=ke.length;d<j.length;d+=1)Mt(d);Dt()}const ze={};u&131072&&(ze.$$scope={dirty:u,ctx:t}),Y.$set(ze);const qe={};u&131072&&(qe.$$scope={dirty:u,ctx:t}),Z.$set(qe);const De={};u&131072&&(De.$$scope={dirty:u,ctx:t}),Q.$set(De)},i(t){if(!We){F(b.$$.fragment,t),F(ne.$$.fragment,t);for(let u=0;u<ke.length;u+=1)F(j[u]);F(Y.$$.fragment,t),F(ge.$$.fragment,t),F(Z.$$.fragment,t),F(Q.$$.fragment,t),We=!0}},o(t){W(b.$$.fragment,t),W(ne.$$.fragment,t),j=j.filter(Boolean);for(let u=0;u<j.length;u+=1)W(j[u]);W(Y.$$.fragment,t),W(ge.$$.fragment,t),W(Z.$$.fragment,t),W(Q.$$.fragment,t),We=!1},d(t){t&&(n(e),n($),n(I),n(B),n(H),n(Ve),n(Be),n(oe),n(Le),n(ce),n(Oe),n(de),n(Ae),n(Fe),n(pe),n(Ge),n(ye)),se(b);for(let u=0;u<E.length;u+=1)E[u].d();st(q,t),se(ne,t),st(D,t),st(j,t),se(Y),se(ge,t),se(Z),se(Q)}}}function Qt(c){return[[{src:"#",img_path:"/images/safari/21.webp",name:"John Smith",body:"Going on an African safari was for me, and the experience exceeded all my expectations! The wildlife was amazing, the landscapes were breathtaking, and the accommodations were comfortable and cozy. I couldn't have asked for a better trip. Thank you!"},{src:"#",img_path:"/images/safari/6.webp",name:"Jane Doe",body:"I've always very important to me. But also walks the walk. The guides were knowledgeable and respectful of the animals and their habitats, and the accommodations were eco-friendly and responsible. I would highly recommend this company to anyone looking for an ethical and unforgettable safari experience."},{src:"#",img_path:"/images/safari/64.webp",name:"Tom Jones",body:"As a photographer, I was blown away frican wildlife and landscapes. The company's guides were patient and accommodating, allowing me to take my time to capture the perfect shot. I came away from the safari with some of the best pictures of my life, and memories that will last forever. Thank you for an unforgettable adventure!"}],[{title:"Safe & Hassle-free Travel",body:`Travel worry-free with us as your trusted companion. 
			We prioritize your well-being, handling every detail seamlessly – from cozy accommodations to expert guides. 
			With our safety protocols, you're free to fully immerse yourself in Africa's wonders. 
			Embark on an unforgettable safari experience with confidence.`},{title:"Excellent Customer Service",body:`From the moment you inquire about your adventure to the final farewell,
			 our dedicated team is here to cater to your every need. With prompt and attentive communication, 
			  knowledgeable staff, and a genuine passion for creating unforgettable memories, our commitment to excellent 
			  customer service is a testament to the exceptional journey you'll embark upon with us.`},{title:"Private, Tailormade Safaris",body:`We believe in crafting experiences that reflect your individual interests and aspirations. 
			Our dedicated team collaborates closely with you to design a bespoke itinerary that encompasses your 
			preferred destinations, activities, and pace. Whether it's a romantic escape,
			  a family adventure, or a solo expedition, our tailor-made safaris ensure that every moment aligns perfectly with your 
			  vision.`}]]}class oa extends zt{constructor(e){super(),qt(this,e,Qt,Pt,St,{})}}export{oa as component};
