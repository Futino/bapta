import{s as Mt,f as Ee,n as J}from"../chunks/scheduler.313d8e24.js";import{S as St,i as Dt,g as i,s as p,r as ee,h as o,j as _,y as D,c as v,u as te,f as n,k as r,a as C,x as l,v as ae,d as G,b as qt,t as W,w as se,z as st,m as le,n as re,e as $t,p as Vt}from"../chunks/index.4cfebf13.js";import{e as Ce}from"../chunks/each.e59479a4.js";import{O as Me}from"../chunks/OutlineButton.322591c5.js";import{t as Bt}from"../chunks/TourCard.36a4b425.js";import{T as Lt}from"../chunks/ToursSnippet.b9740e3e.js";import{F as Ot}from"../chunks/FAQSection.9fbe8b64.js";import{s as At}from"../chunks/safariFaq.b919c078.js";const wt=[{index:0,href:"/adventures/kilimanjaro",img_path:"images/kilimanjaro/kilimanjaro.jpg",label:"Mount Kilimanjaro",body:"Set out on the ultimate adventure of a lifetime by scaling the iconic Mount Kilimanjaro in Tanzania. Traverse through diverse terrains, from lush rainforests to glacial peaks, as you ascend towards the Roof of Africa. Guided by seasoned experts, this challenging yet rewarding expedition offers breathtaking vistas and a profound sense of achievement at the summit, making your Kilimanjaro ascent an unforgettable triumph."},{index:1,href:"/adventures/mountmeru",img_path:"images/kilimanjaro/kilimanjaro.jpg",label:"Mount Meru",body:"Embark on an exhilarating journey to conquer the majestic heights of Mount Meru in Tanzania. Immerse yourself in awe-inspiring landscapes, lush forests, and diverse wildlife as you ascend towards the summit. With experienced guides, comfortable accommodations, and a sense of accomplishment awaiting you at the peak, Mount Meru promises an unforgettable adventure of a lifetime."},{index:2,href:"/adventures/zanzibar",img_path:"images/zanzibar/zanzibar_beach.jpg",label:"Zanzibar",body:"Experience paradise like never before on the enchanting island of Zanzibar. With pristine beaches, turquoise waters, and a rich cultural heritage, this idyllic retreat offers a perfect blend of relaxation and exploration. Indulge in luxurious resorts, savor delectable cuisine, and immerse yourself in the vibrant local markets. Whether you seek tranquil sunsets or thrilling water activities, Zanzibar promises an unforgettable escape in a tropical haven."}];function kt(c,e,a){const s=c.slice();return s[2]=e[a].img_path,s[3]=e[a].label,s[4]=e[a].body,s[5]=e[a].href,s[7]=a,s}function Ct(c,e,a){const s=c.slice();return s[8]=e[a],s}function Et(c,e,a){const s=c.slice();return s[11]=e[a].image,s[12]=e[a].title,s[4]=e[a].body,s}function Gt(c,e,a){const s=c.slice();return s[15]=e[a],s[17]=a,s}function Ft(c){let e,a="Why Choose Us";return{c(){e=i("h1"),e.textContent=a,this.h()},l(s){e=o(s,"H1",{class:!0,["data-svelte-h"]:!0}),D(e)!=="svelte-48n4ds"&&(e.textContent=a),this.h()},h(){r(e,"class","px-4 py-1 title-large")},m(s,m){C(s,e,m)},p:J,d(s){s&&n(e)}}}function Wt(c,e){let a,s='<h1 class="font-bold text-primary-light title-large">★★★★★</h1> ';return{key:c,first:null,c(){a=i("div"),a.innerHTML=s,this.h()},l(m){a=o(m,"DIV",{["data-svelte-h"]:!0}),D(a)!=="svelte-af5s85"&&(a.innerHTML=s),this.h()},h(){this.first=a},m(m,g){C(m,a,g)},p:J,d(m){m&&n(a)}}}function jt(c){let e,a,s,m=c[12]+"",g,y,M,$=c[4]+"",b,k,I,S,j;return{c(){e=i("div"),a=i("div"),s=i("h1"),g=le(m),y=p(),M=i("h1"),b=le($),k=p(),I=i("img"),j=p(),this.h()},l(x){e=o(x,"DIV",{class:!0});var z=_(e);a=o(z,"DIV",{class:!0});var E=_(a);s=o(E,"H1",{class:!0});var h=_(s);g=re(h,m),h.forEach(n),y=v(E),M=o(E,"H1",{class:!0});var f=_(M);b=re(f,$),f.forEach(n),E.forEach(n),k=v(z),I=o(z,"IMG",{src:!0,alt:!0,class:!0}),j=v(z),z.forEach(n),this.h()},h(){r(s,"class","text-primary-dark headline-small font-semibold"),r(M,"class","body-medium max-w-xl"),r(a,"class","flex flex-col items-center lg:items-start px-3 lg:pl-0 lg:pr-3 py-3 gap-2"),Ee(I.src,S=c[11])||r(I,"src",S),r(I,"alt",""),r(I,"class","object-cover w-full sm:h-64 md:h-72 lg:h-full object-center rounded-md lg:order-first"),r(e,"class","grid grid-cols-1 lg:grid-cols-2 gap-y-5 gap-x-3 content-around items-center h-full rounded-lg bg-surface-dark")},m(x,z){C(x,e,z),l(e,a),l(a,s),l(s,g),l(a,y),l(a,M),l(M,b),l(e,k),l(e,I),l(e,j)},p:J,d(x){x&&n(e)}}}function Tt(c){let e,a,s,m,g,y=c[8].body+"",M,$,b,k,I=c[8].name+"",S,j,x,z="TripAdvisor",E;return{c(){e=i("a"),a=i("img"),m=p(),g=i("h1"),M=le(y),$=p(),b=i("div"),k=i("h1"),S=le(I),j=p(),x=i("h2"),x.textContent=z,E=p(),this.h()},l(h){e=o(h,"A",{href:!0,class:!0});var f=_(e);a=o(f,"IMG",{class:!0,src:!0,alt:!0}),m=v(f),g=o(f,"H1",{class:!0});var T=_(g);M=re(T,y),T.forEach(n),$=v(f),b=o(f,"DIV",{class:!0});var O=_(b);k=o(O,"H1",{class:!0});var B=_(k);S=re(B,I),B.forEach(n),j=v(O),x=o(O,"H2",{class:!0,["data-svelte-h"]:!0}),D(x)!=="svelte-1v8vwge"&&(x.textContent=z),O.forEach(n),E=v(f),f.forEach(n),this.h()},h(){r(a,"class","w-32 h-32 p-1 m-2 border-2 rounded-full border-primary-dark"),Ee(a.src,s=c[8].img_path)||r(a,"src",s),r(a,"alt",c[8].name),r(g,"class","py-1 text-center body-medium text-surface-on-dark"),r(k,"class","title-large"),r(x,"class","body-small"),r(b,"class","flex flex-col pt-3 mt-auto justify-self-end h-fit text-secondary-dark transition-all duration-500 group-hover:text-tertiary-dark"),r(e,"href",c[8].src),r(e,"class","transition-all duration-300 rounded-lg p-6 flex flex-col h-full w-full max-w-md text-center items-center bg-surface-dark hover:scale-105 group")},m(h,f){C(h,e,f),l(e,a),l(e,m),l(e,g),l(g,M),l(e,$),l(e,b),l(b,k),l(k,S),l(b,j),l(b,x),l(e,E)},p:J,d(h){h&&n(e)}}}function Nt(c){let e,a,s,m,g,y,M=c[3]+"",$,b,k,I=c[4]+"",S,j,x,z,E;return x=new Me({props:{href:c[5],class:"py-2",$$slots:{default:[Rt]},$$scope:{ctx:c}}}),{c(){e=i("div"),a=i("img"),m=p(),g=i("div"),y=i("h1"),$=le(M),b=p(),k=i("h2"),S=le(I),j=p(),ee(x.$$.fragment),z=p(),this.h()},l(h){e=o(h,"DIV",{class:!0});var f=_(e);a=o(f,"IMG",{src:!0,alt:!0,class:!0}),m=v(f),g=o(f,"DIV",{class:!0});var T=_(g);y=o(T,"H1",{class:!0});var O=_(y);$=re(O,M),O.forEach(n),b=v(T),k=o(T,"H2",{class:!0});var B=_(k);S=re(B,I),B.forEach(n),j=v(T),te(x.$$.fragment,T),T.forEach(n),z=v(f),f.forEach(n),this.h()},h(){Ee(a.src,s=c[2])||r(a,"src",s),r(a,"alt","img"),r(a,"class","adventure-thumbnail md:order-first svelte-tiqhvc"),r(y,"class","font-semibold headline-large text-primary-dark"),r(k,"class","body-large max-w-md"),r(g,"class","flex flex-col items-start self-center gap-y-1"),r(e,"class","adventure-row svelte-tiqhvc")},m(h,f){C(h,e,f),l(e,a),l(e,m),l(e,g),l(g,y),l(y,$),l(g,b),l(g,k),l(k,S),l(g,j),ae(x,g,null),l(e,z),E=!0},p(h,f){const T={};f&262144&&(T.$$scope={dirty:f,ctx:h}),x.$set(T)},i(h){E||(G(x.$$.fragment,h),E=!0)},o(h){W(x.$$.fragment,h),E=!1},d(h){h&&n(e),se(x)}}}function Kt(c){let e,a,s,m,g,y,M=c[3]+"",$,b,k,I=c[4]+"",S,j,x,z,E;return x=new Me({props:{href:c[5],class:"py-2",$$slots:{default:[Jt]},$$scope:{ctx:c}}}),{c(){e=i("div"),a=i("img"),m=p(),g=i("div"),y=i("h1"),$=le(M),b=p(),k=i("h2"),S=le(I),j=p(),ee(x.$$.fragment),z=p(),this.h()},l(h){e=o(h,"DIV",{class:!0});var f=_(e);a=o(f,"IMG",{src:!0,alt:!0,class:!0}),m=v(f),g=o(f,"DIV",{class:!0});var T=_(g);y=o(T,"H1",{class:!0});var O=_(y);$=re(O,M),O.forEach(n),b=v(T),k=o(T,"H2",{class:!0});var B=_(k);S=re(B,I),B.forEach(n),j=v(T),te(x.$$.fragment,T),T.forEach(n),z=v(f),f.forEach(n),this.h()},h(){Ee(a.src,s=c[2])||r(a,"src",s),r(a,"alt","img"),r(a,"class","adventure-thumbnail md:order-last svelte-tiqhvc"),r(y,"class","font-semibold headline-large text-primary-dark"),r(k,"class","body-large max-w-md"),r(g,"class","flex flex-col md:items-end self-center gap-y-1 md:text-right md:order-first"),r(e,"class","adventure-row svelte-tiqhvc")},m(h,f){C(h,e,f),l(e,a),l(e,m),l(e,g),l(g,y),l(y,$),l(g,b),l(g,k),l(k,S),l(g,j),ae(x,g,null),l(e,z),E=!0},p(h,f){const T={};f&262144&&(T.$$scope={dirty:f,ctx:h}),x.$set(T)},i(h){E||(G(x.$$.fragment,h),E=!0)},o(h){W(x.$$.fragment,h),E=!1},d(h){h&&n(e),se(x)}}}function Rt(c){let e,a="Learn More";return{c(){e=i("h1"),e.textContent=a,this.h()},l(s){e=o(s,"H1",{class:!0,["data-svelte-h"]:!0}),D(e)!=="svelte-1qvt42z"&&(e.textContent=a),this.h()},h(){r(e,"class","font-bold title-small")},m(s,m){C(s,e,m)},p:J,d(s){s&&n(e)}}}function Jt(c){let e,a="Learn More";return{c(){e=i("h1"),e.textContent=a,this.h()},l(s){e=o(s,"H1",{class:!0,["data-svelte-h"]:!0}),D(e)!=="svelte-1qvt42z"&&(e.textContent=a),this.h()},h(){r(e,"class","font-bold title-small")},m(s,m){C(s,e,m)},p:J,d(s){s&&n(e)}}}function It(c){let e,a,s,m;const g=[Kt,Nt],y=[];function M($,b){return $[7]%2==0?0:1}return e=M(c),a=y[e]=g[e](c),{c(){a.c(),s=$t()},l($){a.l($),s=$t()},m($,b){y[e].m($,b),C($,s,b),m=!0},p($,b){a.p($,b)},i($){m||(G(a),m=!0)},o($){W(a),m=!1},d($){$&&n(s),y[e].d($)}}}function Ut(c){let e,a="Find a Tour";return{c(){e=i("h1"),e.textContent=a,this.h()},l(s){e=o(s,"H1",{class:!0,["data-svelte-h"]:!0}),D(e)!=="svelte-1f27rxs"&&(e.textContent=a),this.h()},h(){r(e,"class","font-bold title-small")},m(s,m){C(s,e,m)},p:J,d(s){s&&n(e)}}}function Yt(c){let e,a="Learn More";return{c(){e=i("h1"),e.textContent=a,this.h()},l(s){e=o(s,"H1",{class:!0,["data-svelte-h"]:!0}),D(e)!=="svelte-ctux3s"&&(e.textContent=a),this.h()},h(){r(e,"class","p-2 font-bold title-small")},m(s,m){C(s,e,m)},p:J,d(s){s&&n(e)}}}function Zt(c){let e,a="Find a Tour";return{c(){e=i("h1"),e.textContent=a,this.h()},l(s){e=o(s,"H1",{class:!0,["data-svelte-h"]:!0}),D(e)!=="svelte-1f27rxs"&&(e.textContent=a),this.h()},h(){r(e,"class","font-bold title-small")},m(s,m){C(s,e,m)},p:J,d(s){s&&n(e)}}}function Pt(c){let e,a,s,m=`A Safari of a Lifetime,<br/>
			Memories to Last Forever.`,g,y,M="Unleash Your Adventurous Side with Our Unique Safari Experiences in Tanzania.",$,b,k,I,S,j=[],x=new Map,z,E,h,f,T=`<img src="/images/safari/safari_img(29).jpeg" alt="" class="object-cover h-96 lg:h-[400px] xl:h-[500px] w-full object-center rounded-md"/> <h1 class="font-extrabold display-small md:display-medium">Your Safari Experience</h1> <h2 class="body-large max-w-2xl">Embark on an extraordinary journey with a Bapta Safari, where you&#39;ll immerse yourself in the
				unparalleled beauty of the wild. Traverse through awe-inspiring landscapes, each one more
				breathtaking than the last, while being expertly led by seasoned professionals who are
				passionate about sharing their deep knowledge of Tanzania&#39;s hidden gems. Encounter the most
				remarkable and elusive wildlife, observing them in their natural habitats, and let every
				moment etch into your heart, crafting indelible memories destined to be cherished for a
				lifetime.</h2> <div class="flex flex-row mx-auto lg:mx-0 lg:-ml-3"><img src="images/logo/bapta_jeep.png" alt="" class="w-24 h-24 p-4 rounded-full"/> <div class="flex flex-col justify-center text-left"><h3 class="font-semibold body-large">Emmanuel Baptister Kilas</h3> <h3 class="font-light body-medium">Creator of Bapta Safari</h3></div></div>`,O,B,Ve,ne,Be,ie,je,oe,Le,ce,R,ue,lt='<h1 class="display-small md:display-large font-bold">Extend Your Safari</h1> <h1 class="title-medium md:headline-small font-bold">Add a beach stay or hiking adventure to your safari!</h1>',Je,Oe,de,U,N,fe,rt="Find a Tour Today!",Ue,he,nt=`Browse through our catalogue of tours to find just the one for you! But don't worry if you
				don't find your dream tour, because each tour is fully customizable! Find a tour you love,
				and request a quote!`,Ye,Y,Ze,me,it,Ae,ge,Ge,pe,A,ve,ot="Bapta Safaris",Pe,_e,ct,Qe,be,ut=`Bapta, founder of Bapta Safaris, is passionate about wildlife conservation. Growing up in
			Tanzania, he started his own safari business to share the beauty and biodiversity of his
			country while supporting local communities and the environment. Growing up in Tanzania, he
			started his own safari business to share the beauty and biodiversity of his country while
			supporting local communities and the environment.`,Xe,Z,Fe,xe,P,K,ye,dt="Ready to find a Tour?",et,$e,ft=`Browse through our catalogue of tours to find just the one for you! But don't worry if you
				don't find your dream tour, because each tour is fully customizable! Find a tour you love,
				and request a quote!`,tt,Q,at,we,ht,We;b=new Me({props:{href:"#choose_bapta",$$slots:{default:[Ft]},$$scope:{ctx:c}}});let mt=Ce(Array(3));const Ht=t=>t[17];for(let t=0;t<mt.length;t+=1){let u=Gt(c,mt,t),w=Ht(u);x.set(w,j[t]=Wt(w))}let Te=Ce(c[1]),q=[];for(let t=0;t<Te.length;t+=1)q[t]=jt(Et(c,Te,t));ne=new Lt({props:{tours:Bt,title:"Top Rated Tours",buttonText:"See More",tag:"Top Rated"}});let Ie=Ce(c[0]),V=[];for(let t=0;t<Ie.length;t+=1)V[t]=Tt(Ct(c,Ie,t));let ke=Ce(wt),H=[];for(let t=0;t<ke.length;t+=1)H[t]=It(kt(c,ke,t));const zt=t=>W(H[t],1,1,()=>{H[t]=null});return Y=new Me({props:{href:"/tours",class:"py-2",$$slots:{default:[Ut]},$$scope:{ctx:c}}}),ge=new Ot({props:{faqs:At}}),Z=new Me({props:{href:"/about",$$slots:{default:[Yt]},$$scope:{ctx:c}}}),Q=new Me({props:{href:"/tours",class:"py-2",$$slots:{default:[Zt]},$$scope:{ctx:c}}}),{c(){e=i("section"),a=i("div"),s=i("h1"),s.innerHTML=m,g=p(),y=i("h1"),y.textContent=M,$=p(),ee(b.$$.fragment),k=p(),I=i("section"),S=i("div");for(let t=0;t<j.length;t+=1)j[t].c();z=p(),E=i("section"),h=i("div"),f=i("div"),f.innerHTML=T,O=p(),B=i("div");for(let t=0;t<q.length;t+=1)q[t].c();Ve=p(),ee(ne.$$.fragment),Be=p(),ie=i("section"),je=i("div"),oe=i("div");for(let t=0;t<V.length;t+=1)V[t].c();Le=p(),ce=i("section"),R=i("div"),ue=i("div"),ue.innerHTML=lt,Je=p();for(let t=0;t<H.length;t+=1)H[t].c();Oe=p(),de=i("section"),U=i("div"),N=i("div"),fe=i("h1"),fe.textContent=rt,Ue=p(),he=i("h2"),he.textContent=nt,Ye=p(),ee(Y.$$.fragment),Ze=p(),me=i("img"),Ae=p(),ee(ge.$$.fragment),Ge=p(),pe=i("section"),A=i("div"),ve=i("h1"),ve.textContent=ot,Pe=p(),_e=i("img"),Qe=p(),be=i("h1"),be.textContent=ut,Xe=p(),ee(Z.$$.fragment),Fe=p(),xe=i("section"),P=i("div"),K=i("div"),ye=i("h1"),ye.textContent=dt,et=p(),$e=i("h2"),$e.textContent=ft,tt=p(),ee(Q.$$.fragment),at=p(),we=i("img"),this.h()},l(t){e=o(t,"SECTION",{class:!0});var u=_(e);a=o(u,"DIV",{class:!0});var w=_(a);s=o(w,"H1",{class:!0,["data-svelte-h"]:!0}),D(s)!=="svelte-cdemgn"&&(s.innerHTML=m),g=v(w),y=o(w,"H1",{class:!0,["data-svelte-h"]:!0}),D(y)!=="svelte-85xrpf"&&(y.textContent=M),$=v(w),te(b.$$.fragment,w),w.forEach(n),u.forEach(n),k=v(t),I=o(t,"SECTION",{class:!0});var Se=_(I);S=o(Se,"DIV",{class:!0});var De=_(S);for(let L=0;L<j.length;L+=1)j[L].l(De);De.forEach(n),Se.forEach(n),z=v(t),E=o(t,"SECTION",{class:!0,id:!0});var qe=_(E);h=o(qe,"DIV",{class:!0});var d=_(h);f=o(d,"DIV",{class:!0,["data-svelte-h"]:!0}),D(f)!=="svelte-10xolnr"&&(f.innerHTML=T),O=v(d),B=o(d,"DIV",{class:!0});var F=_(B);for(let L=0;L<q.length;L+=1)q[L].l(F);F.forEach(n),d.forEach(n),qe.forEach(n),Ve=v(t),te(ne.$$.fragment,t),Be=v(t),ie=o(t,"SECTION",{class:!0});var gt=_(ie);je=o(gt,"DIV",{class:!0});var pt=_(je);oe=o(pt,"DIV",{class:!0});var vt=_(oe);for(let L=0;L<V.length;L+=1)V[L].l(vt);vt.forEach(n),pt.forEach(n),gt.forEach(n),Le=v(t),ce=o(t,"SECTION",{class:!0});var _t=_(ce);R=o(_t,"DIV",{class:!0});var Ne=_(R);ue=o(Ne,"DIV",{class:!0,["data-svelte-h"]:!0}),D(ue)!=="svelte-197a4qu"&&(ue.innerHTML=lt),Je=v(Ne);for(let L=0;L<H.length;L+=1)H[L].l(Ne);Ne.forEach(n),_t.forEach(n),Oe=v(t),de=o(t,"SECTION",{class:!0});var bt=_(de);U=o(bt,"DIV",{class:!0});var Ke=_(U);N=o(Ke,"DIV",{class:!0});var He=_(N);fe=o(He,"H1",{class:!0,["data-svelte-h"]:!0}),D(fe)!=="svelte-1b9g2w5"&&(fe.textContent=rt),Ue=v(He),he=o(He,"H2",{class:!0,["data-svelte-h"]:!0}),D(he)!=="svelte-8dmmzn"&&(he.textContent=nt),Ye=v(He),te(Y.$$.fragment,He),He.forEach(n),Ze=v(Ke),me=o(Ke,"IMG",{src:!0,alt:!0,class:!0}),Ke.forEach(n),bt.forEach(n),Ae=v(t),te(ge.$$.fragment,t),Ge=v(t),pe=o(t,"SECTION",{class:!0});var xt=_(pe);A=o(xt,"DIV",{class:!0});var X=_(A);ve=o(X,"H1",{class:!0,["data-svelte-h"]:!0}),D(ve)!=="svelte-bqxtwy"&&(ve.textContent=ot),Pe=v(X),_e=o(X,"IMG",{src:!0,class:!0,alt:!0}),Qe=v(X),be=o(X,"H1",{class:!0,["data-svelte-h"]:!0}),D(be)!=="svelte-1aej5ph"&&(be.textContent=ut),Xe=v(X),te(Z.$$.fragment,X),X.forEach(n),xt.forEach(n),Fe=v(t),xe=o(t,"SECTION",{class:!0});var yt=_(xe);P=o(yt,"DIV",{class:!0});var Re=_(P);K=o(Re,"DIV",{class:!0});var ze=_(K);ye=o(ze,"H1",{class:!0,["data-svelte-h"]:!0}),D(ye)!=="svelte-m39jby"&&(ye.textContent=dt),et=v(ze),$e=o(ze,"H2",{class:!0,["data-svelte-h"]:!0}),D($e)!=="svelte-8dmmzn"&&($e.textContent=ft),tt=v(ze),te(Q.$$.fragment,ze),ze.forEach(n),at=v(Re),we=o(Re,"IMG",{src:!0,alt:!0,class:!0}),Re.forEach(n),yt.forEach(n),this.h()},h(){r(s,"class","font-bold text-primary-dark display-medium"),r(y,"class","pb-6 text-left body-large"),r(a,"class","grid space-y-3 text-left justify-items-start"),r(e,"class","grid justify-center w-full h-screen grid-rows-2 px-10 bg-cover bg-center border-b shadow-lg shadow-background-dark lg:grid-cols-2 card-shadow xl:px-40 pt-60 place-items-center border-secondary-light/40 dark:border-secondary-dark/40 bg-landing_hero"),r(S,"class","grid grid-cols-3 gap-5 px-10 py-10 brightness-125 lg:px-20 xl:px-40 bg-primary-dark/20"),r(I,"class","shadow-lg bg-surface-variant-light/90 shadow-background-dark"),r(f,"class","flex flex-col gap-y-2 lg:col-span-2 justify-items-center items-center lg:items-start lg:justify-items-start lg:text-left"),r(B,"class","flex flex-col gap-10 lg:col-span-3 items-center justify-items-center lg:items-start h-fit lg:justify-items-start lg:text-left"),r(h,"class","inner-section grid grid-cols-1 lg:grid-cols-5 gap-12"),r(E,"class","section"),r(E,"id","choose_bapta"),r(oe,"class","grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center"),r(je,"class","inner-section"),r(ie,"class","section"),r(ue,"class","flex flex-col md:text-center text-surface-on-dark"),r(R,"class","inner-section text-left flex flex-col gap-y-8 items-start md:items-center"),r(ce,"class","section relative z-10"),r(fe,"class","font-semibold headline-large text-primary-dark"),r(he,"class","body-large max-w-xl"),r(N,"class","flex flex-col gap-y-3"),Ee(me.src,it="/images/safari/safari_img(22).jpeg")||r(me,"src",it),r(me,"alt","img"),r(me,"class","object-cover object-center rounded-md w-full max-w-md"),r(U,"class","inner-section text-left grid grid-cols-1 sm:grid-cols-2 place-items-center gap-8"),r(de,"class","section relative z-10"),r(ve,"class","font-bold text-center display-small"),Ee(_e.src,ct="favicon.png")||r(_e,"src",ct),r(_e,"class","rounded-full h-44"),r(_e,"alt","logo"),r(be,"class","text-center body-large max-w-3xl"),r(A,"class","card max-w-5xl p-10 space-y-6 border rounded-lg shadow-2xl border-primary-dark/50 bg-card-surface-on"),r(pe,"class","flex flex-col items-center space-y-12 section"),r(ye,"class","font-semibold headline-large text-primary-dark"),r($e,"class","body-large max-w-xl"),r(K,"class","flex flex-col gap-y-3"),Ee(we.src,ht="/images/safari/safari_img(19).jpeg")||r(we,"src",ht),r(we,"alt","img"),r(we,"class","object-cover object-center rounded-md w-full max-w-md"),r(P,"class","inner-section text-left grid grid-cols-1 md:grid-cols-2 place-items-center gap-8"),r(xe,"class","section relative z-10")},m(t,u){C(t,e,u),l(e,a),l(a,s),l(a,g),l(a,y),l(a,$),ae(b,a,null),C(t,k,u),C(t,I,u),l(I,S);for(let w=0;w<j.length;w+=1)j[w]&&j[w].m(S,null);C(t,z,u),C(t,E,u),l(E,h),l(h,f),l(h,O),l(h,B);for(let w=0;w<q.length;w+=1)q[w]&&q[w].m(B,null);C(t,Ve,u),ae(ne,t,u),C(t,Be,u),C(t,ie,u),l(ie,je),l(je,oe);for(let w=0;w<V.length;w+=1)V[w]&&V[w].m(oe,null);C(t,Le,u),C(t,ce,u),l(ce,R),l(R,ue),l(R,Je);for(let w=0;w<H.length;w+=1)H[w]&&H[w].m(R,null);C(t,Oe,u),C(t,de,u),l(de,U),l(U,N),l(N,fe),l(N,Ue),l(N,he),l(N,Ye),ae(Y,N,null),l(U,Ze),l(U,me),C(t,Ae,u),ae(ge,t,u),C(t,Ge,u),C(t,pe,u),l(pe,A),l(A,ve),l(A,Pe),l(A,_e),l(A,Qe),l(A,be),l(A,Xe),ae(Z,A,null),C(t,Fe,u),C(t,xe,u),l(xe,P),l(P,K),l(K,ye),l(K,et),l(K,$e),l(K,tt),ae(Q,K,null),l(P,at),l(P,we),We=!0},p(t,[u]){const w={};if(u&262144&&(w.$$scope={dirty:u,ctx:t}),b.$set(w),u&2){Te=Ce(t[1]);let d;for(d=0;d<Te.length;d+=1){const F=Et(t,Te,d);q[d]?q[d].p(F,u):(q[d]=jt(F),q[d].c(),q[d].m(B,null))}for(;d<q.length;d+=1)q[d].d(1);q.length=Te.length}if(u&1){Ie=Ce(t[0]);let d;for(d=0;d<Ie.length;d+=1){const F=Ct(t,Ie,d);V[d]?V[d].p(F,u):(V[d]=Tt(F),V[d].c(),V[d].m(oe,null))}for(;d<V.length;d+=1)V[d].d(1);V.length=Ie.length}if(u&0){ke=Ce(wt);let d;for(d=0;d<ke.length;d+=1){const F=kt(t,ke,d);H[d]?(H[d].p(F,u),G(H[d],1)):(H[d]=It(F),H[d].c(),G(H[d],1),H[d].m(R,null))}for(Vt(),d=ke.length;d<H.length;d+=1)zt(d);qt()}const Se={};u&262144&&(Se.$$scope={dirty:u,ctx:t}),Y.$set(Se);const De={};u&262144&&(De.$$scope={dirty:u,ctx:t}),Z.$set(De);const qe={};u&262144&&(qe.$$scope={dirty:u,ctx:t}),Q.$set(qe)},i(t){if(!We){G(b.$$.fragment,t),G(ne.$$.fragment,t);for(let u=0;u<ke.length;u+=1)G(H[u]);G(Y.$$.fragment,t),G(ge.$$.fragment,t),G(Z.$$.fragment,t),G(Q.$$.fragment,t),We=!0}},o(t){W(b.$$.fragment,t),W(ne.$$.fragment,t),H=H.filter(Boolean);for(let u=0;u<H.length;u+=1)W(H[u]);W(Y.$$.fragment,t),W(ge.$$.fragment,t),W(Z.$$.fragment,t),W(Q.$$.fragment,t),We=!1},d(t){t&&(n(e),n(k),n(I),n(z),n(E),n(Ve),n(Be),n(ie),n(Le),n(ce),n(Oe),n(de),n(Ae),n(Ge),n(pe),n(Fe),n(xe)),se(b);for(let u=0;u<j.length;u+=1)j[u].d();st(q,t),se(ne,t),st(V,t),st(H,t),se(Y),se(ge,t),se(Z),se(Q)}}}function Qt(c){return[[{src:"#",img_path:"/images/safari/safari_img(25).jpeg",name:"John Smith",body:"Going on an African safari was for me, and the experience exceeded all my expectations! The wildlife was amazing, the landscapes were breathtaking, and the accommodations were comfortable and cozy. I couldn't have asked for a better trip. Thank you!"},{src:"#",img_path:"/images/safari/safari_img(26).jpeg",name:"Jane Doe",body:"I've always very important to me. But also walks the walk. The guides were knowledgeable and respectful of the animals and their habitats, and the accommodations were eco-friendly and responsible. I would highly recommend this company to anyone looking for an ethical and unforgettable safari experience."},{src:"#",img_path:"/images/safari/safari_img(21).jpeg",name:"Tom Jones",body:"As a photographer, I was blown away frican wildlife and landscapes. The company's guides were patient and accommodating, allowing me to take my time to capture the perfect shot. I came away from the safari with some of the best pictures of my life, and memories that will last forever. Thank you for an unforgettable adventure!"}],[{image:"/images/serengeti/4.jpeg",title:"Safe & Hassle-free Travel",body:`Travel worry-free with us as your trusted companion. 
			We prioritize your well-being, handling every detail seamlessly – from cozy accommodations to expert guides. 
			With our safety protocols, you're free to fully immerse yourself in Africa's wonders. 
			Embark on an unforgettable safari experience with confidence.`},{image:"/images/serengeti/2.jpeg",title:"Excellent Customer Service",body:`From the moment you inquire about your adventure to the final farewell,
			 our dedicated team is here to cater to your every need. With prompt and attentive communication, 
			  knowledgeable staff, and a genuine passion for creating unforgettable memories, our commitment to excellent 
			  customer service is a testament to the exceptional journey you'll embark upon with us.`},{image:"/images/serengeti/1.jpeg",title:"Private, Tailormade Safaris",body:`We believe in crafting experiences that reflect your individual interests and aspirations. 
			Our dedicated team collaborates closely with you to design a bespoke itinerary that encompasses your 
			preferred destinations, activities, and pace. Whether it's a romantic escape,
			  a family adventure, or a solo expedition, our tailor-made safaris ensure that every moment aligns perfectly with your 
			  vision.`}]]}class ia extends St{constructor(e){super(),Dt(this,e,Qt,Pt,Mt,{})}}export{ia as component};
