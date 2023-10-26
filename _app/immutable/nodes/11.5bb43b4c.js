import{s as Ae,n as ue,c as Pe}from"../chunks/scheduler.e5dead65.js";import{S as Je,i as Le,g as r,s as _,r as ge,E as Ne,h as i,f as n,c as b,j as f,x as j,u as _e,k as l,y as a,a as T,v as be,A as Re,d as xe,t as ye,w as we,z as Se,m as oe,n as ce}from"../chunks/index.7dc9c6a7.js";import{e as ie}from"../chunks/each.e59479a4.js";import"../chunks/paths.b7d3517b.js";import{O as Oe}from"../chunks/OutlineButton.d5fb8292.js";import{T as Ge}from"../chunks/ToursSnippet.d029bdf2.js";import{a as We}from"../chunks/journeysStore.82da7fdd.js";function Ze(u,t,o){const s=u.slice();return s[3]=t[o],s}function je(u,t,o){const s=u.slice();return s[6]=t[o].img_path,s[7]=t[o].label,s[8]=t[o].body,s}function Fe(u){let t,o="Book Your Holiday";return{c(){t=r("h1"),t.textContent=o,this.h()},l(s){t=i(s,"H1",{class:!0,"data-svelte-h":!0}),j(t)!=="svelte-q1xano"&&(t.textContent=o),this.h()},h(){l(t,"class","p-4 title-medium")},m(s,m){T(s,t,m)},p:ue,d(s){s&&n(t)}}}function Be(u){let t,o,s,m,z,p,x,k=u[7]+"",S,H,v,C=u[8]+"",D,E;return{c(){t=r("div"),o=r("div"),s=r("img"),z=_(),p=r("div"),x=r("h3"),S=oe(k),H=_(),v=r("p"),D=oe(C),E=_(),this.h()},l(g){t=i(g,"DIV",{class:!0});var d=f(t);o=i(d,"DIV",{class:!0});var M=f(o);s=i(M,"IMG",{src:!0,alt:!0,class:!0}),M.forEach(n),z=b(d),p=i(d,"DIV",{class:!0});var I=f(p);x=i(I,"H3",{class:!0});var q=f(x);S=ce(q,k),q.forEach(n),H=b(I),v=i(I,"P",{class:!0});var O=f(v);D=ce(O,C),O.forEach(n),I.forEach(n),E=b(d),d.forEach(n),this.h()},h(){Pe(s.src,m=u[6])||l(s,"src",m),l(s,"alt",u[7]),l(s,"class","object-cover w-full h-64 rounded-lg"),l(o,"class",""),l(x,"class","font-semibold title-large"),l(v,"class","body-large my-auto"),l(p,"class","flex flex-col items-center h-full text-surface-on gap-y-3 p-6 shadow-md hover:shadow-lg"),l(t,"class","image_card svelte-631cae")},m(g,d){T(g,t,d),a(t,o),a(o,s),a(t,z),a(t,p),a(p,x),a(x,S),a(p,H),a(p,v),a(v,D),a(t,E)},p:ue,d(g){g&&n(t)}}}function Ke(u){let t,o="Request Journey";return{c(){t=r("h1"),t.textContent=o,this.h()},l(s){t=i(s,"H1",{class:!0,"data-svelte-h":!0}),j(t)!=="svelte-rvywyq"&&(t.textContent=o),this.h()},h(){l(t,"class","headline-medium")},m(s,m){T(s,t,m)},p:ue,d(s){s&&n(t)}}}function Me(u){let t,o,s,m,z,p,x,k=u[3].label+"",S,H,v,C=u[3].body+"",D,E;return{c(){t=r("div"),o=r("div"),s=r("img"),z=_(),p=r("div"),x=r("h3"),S=oe(k),H=_(),v=r("p"),D=oe(C),E=_(),this.h()},l(g){t=i(g,"DIV",{class:!0});var d=f(t);o=i(d,"DIV",{class:!0});var M=f(o);s=i(M,"IMG",{src:!0,alt:!0,class:!0}),M.forEach(n),z=b(d),p=i(d,"DIV",{class:!0});var I=f(p);x=i(I,"H3",{class:!0});var q=f(x);S=ce(q,k),q.forEach(n),H=b(I),v=i(I,"P",{class:!0});var O=f(v);D=ce(O,C),O.forEach(n),I.forEach(n),E=b(d),d.forEach(n),this.h()},h(){Pe(s.src,m=u[3].img_path)||l(s,"src",m),l(s,"alt",u[3].label),l(s,"class","object-cover w-full h-64 rounded-lg"),l(o,"class",""),l(x,"class","title-large font-semibold"),l(v,"class","body-large"),l(p,"class","flex flex-col p-6 self-stretch gap-y-3 rounded-lg shadow-md hover:shadow-lg text-surface-on"),l(t,"class","image_card svelte-631cae")},m(g,d){T(g,t,d),a(t,o),a(o,s),a(t,z),a(t,p),a(p,x),a(x,S),a(p,H),a(p,v),a(v,D),a(t,E)},p:ue,d(g){g&&n(t)}}}function Ye(u){let t,o,s,m,z,p="Escape to Tanzania's Paradise",x,k,S="Discover the Beauty and Culture of Tanzania's Exotic Island",H,v,C,D,E,g,d,M='<h2 class="headline-large font-extrabold text-primary">Activities</h2> <p class="title-medium text-primary">Explore a range of activities during your beach holiday in Zanzibar</p>',I,q,O,L,se,N,V,R,ze="Simply looking for a beach holiday? <br/> Bapta has just that.",de,G,Ee=`Specific activities and accommodations are completely up to you. Request a journey and we'll
			get a knowledgable guide to help customize your trip.`,he,W,$e="* This is only a starting point and is fully customizeable after requesting the Journey.",fe,F,P,le,K,Z,Y,Ce="Accomodation",me,Q,ke="Explore a range of accomodations during your beach holiday in Zanzibar",pe,U,ne,ve,Ie;C=new Oe({props:{$$slots:{default:[Fe]},$$scope:{ctx:u}}});let ee=ie(u[1]),y=[];for(let e=0;e<ee.length;e+=1)y[e]=Be(je(u,ee,e));L=new Ge({props:{title:"Top Safaris with Zanzibar",subtitle:"Choose a Safari with a beach extension!",buttonText:"See All",tag:"Zanzibar"}}),P=new Oe({props:{href:"/request-tour",$$slots:{default:[Ke]},$$scope:{ctx:u}}});let te=ie(u[0]),w=[];for(let e=0;e<te.length;e+=1)w[e]=Me(Ze(u,te,e));return{c(){t=r("meta"),o=_(),s=r("section"),m=r("div"),z=r("h1"),z.textContent=p,x=_(),k=r("h1"),k.textContent=S,H=_(),v=r("div"),ge(C.$$.fragment),D=_(),E=r("section"),g=r("div"),d=r("div"),d.innerHTML=M,I=_(),q=r("div");for(let e=0;e<y.length;e+=1)y[e].c();O=_(),ge(L.$$.fragment),se=_(),N=r("section"),V=r("div"),R=r("h2"),R.innerHTML=ze,de=_(),G=r("p"),G.textContent=Ee,he=_(),W=r("h1"),W.textContent=$e,fe=_(),F=r("div"),ge(P.$$.fragment),le=_(),K=r("section"),Z=r("div"),Y=r("h2"),Y.textContent=Ce,me=_(),Q=r("p"),Q.textContent=ke,pe=_(),U=r("div");for(let e=0;e<w.length;e+=1)w[e].c();this.h()},l(e){const h=Ne("svelte-1036pmo",document.head);t=i(h,"META",{name:!0,content:!0}),h.forEach(n),o=b(e),s=i(e,"SECTION",{class:!0});var $=f(s);m=i($,"DIV",{class:!0});var B=f(m);z=i(B,"H1",{class:!0,"data-svelte-h":!0}),j(z)!=="svelte-1t2khl0"&&(z.textContent=p),x=b(B),k=i(B,"H1",{class:!0,"data-svelte-h":!0}),j(k)!=="svelte-4x5qc5"&&(k.textContent=S),H=b(B),v=i(B,"DIV",{class:!0});var c=f(v);_e(C.$$.fragment,c),c.forEach(n),B.forEach(n),$.forEach(n),D=b(e),E=i(e,"SECTION",{class:!0});var A=f(E);g=i(A,"DIV",{class:!0});var re=f(g);d=i(re,"DIV",{class:!0,"data-svelte-h":!0}),j(d)!=="svelte-1kczy94"&&(d.innerHTML=M),I=b(re),q=i(re,"DIV",{class:!0});var qe=f(q);for(let X=0;X<y.length;X+=1)y[X].l(qe);qe.forEach(n),re.forEach(n),A.forEach(n),O=b(e),_e(L.$$.fragment,e),se=b(e),N=i(e,"SECTION",{class:!0});var Te=f(N);V=i(Te,"DIV",{class:!0});var J=f(V);R=i(J,"H2",{class:!0,"data-svelte-h":!0}),j(R)!=="svelte-7qdq5a"&&(R.innerHTML=ze),de=b(J),G=i(J,"P",{class:!0,"data-svelte-h":!0}),j(G)!=="svelte-18rz5zb"&&(G.textContent=Ee),he=b(J),W=i(J,"H1",{class:!0,"data-svelte-h":!0}),j(W)!=="svelte-k8563d"&&(W.textContent=$e),fe=b(J),F=i(J,"DIV",{class:!0});var De=f(F);_e(P.$$.fragment,De),De.forEach(n),J.forEach(n),Te.forEach(n),le=b(e),K=i(e,"SECTION",{class:!0});var Ve=f(K);Z=i(Ve,"DIV",{class:!0});var ae=f(Z);Y=i(ae,"H2",{class:!0,"data-svelte-h":!0}),j(Y)!=="svelte-148ftvj"&&(Y.textContent=Ce),me=b(ae),Q=i(ae,"P",{class:!0,"data-svelte-h":!0}),j(Q)!=="svelte-1x7sxa3"&&(Q.textContent=ke),pe=b(ae),U=i(ae,"DIV",{class:!0});var He=f(U);for(let X=0;X<w.length;X+=1)w[X].l(He);He.forEach(n),ae.forEach(n),Ve.forEach(n),this.h()},h(){document.title="Bapta - Zanzibar Beach",l(t,"name","description"),l(t,"content","Explore the breathtaking beauty of Zanzibar Beach: pristine sands, turquoise waters, and vibrant culture. Discover your tropical paradise today."),l(z,"class","font-bold text-black display-medium"),l(k,"class","pb-6 body-large text-black"),l(v,"class","place-self-center"),l(m,"class","flex flex-col max-w-2xl mx-auto mt-8 mb-64 text-center space-y-2"),l(s,"class","w-full h-screen shadow-lg shadow-background card-shadow px-10 lg:px-20 xl:px-40 pt-60 place-items-center border-b border-secondary/40 bg-zanzibar bg-cover object-contain bg-center"),l(d,"class",""),l(q,"class","grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 my-6 gap-y-12 gap-x-6 justify-items-center items-center"),l(g,"class","inner-section"),l(E,"class","section"),l(R,"class","headline-large font-extrabold text-primary"),l(G,"class","max-w-2xl title-small"),l(W,"class","body-medium max-w-xl pt-4"),l(F,"class","w-fit"),l(V,"class","inner-section flex flex-col text-left gap-4"),l(N,"class","section"),l(Y,"class","headline-large font-semibold text-primary"),l(Q,"class","max-w-2xl mx-auto mt-4 title-medium text-primary"),l(U,"class","grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 mt-8"),l(Z,"class","inner-section"),l(K,"class","section")},m(e,h){a(document.head,t),T(e,o,h),T(e,s,h),a(s,m),a(m,z),a(m,x),a(m,k),a(m,H),a(m,v),be(C,v,null),T(e,D,h),T(e,E,h),a(E,g),a(g,d),a(g,I),a(g,q);for(let $=0;$<y.length;$+=1)y[$]&&y[$].m(q,null);T(e,O,h),be(L,e,h),T(e,se,h),T(e,N,h),a(N,V),a(V,R),a(V,de),a(V,G),a(V,he),a(V,W),a(V,fe),a(V,F),be(P,F,null),T(e,le,h),T(e,K,h),a(K,Z),a(Z,Y),a(Z,me),a(Z,Q),a(Z,pe),a(Z,U);for(let $=0;$<w.length;$+=1)w[$]&&w[$].m(U,null);ne=!0,ve||(Ie=Re(F,"click",u[2]),ve=!0)},p(e,[h]){const $={};if(h&2048&&($.$$scope={dirty:h,ctx:e}),C.$set($),h&2){ee=ie(e[1]);let c;for(c=0;c<ee.length;c+=1){const A=je(e,ee,c);y[c]?y[c].p(A,h):(y[c]=Be(A),y[c].c(),y[c].m(q,null))}for(;c<y.length;c+=1)y[c].d(1);y.length=ee.length}const B={};if(h&2048&&(B.$$scope={dirty:h,ctx:e}),P.$set(B),h&1){te=ie(e[0]);let c;for(c=0;c<te.length;c+=1){const A=Ze(e,te,c);w[c]?w[c].p(A,h):(w[c]=Me(A),w[c].c(),w[c].m(U,null))}for(;c<w.length;c+=1)w[c].d(1);w.length=te.length}},i(e){ne||(xe(C.$$.fragment,e),xe(L.$$.fragment,e),xe(P.$$.fragment,e),ne=!0)},o(e){ye(C.$$.fragment,e),ye(L.$$.fragment,e),ye(P.$$.fragment,e),ne=!1},d(e){e&&(n(o),n(s),n(D),n(E),n(O),n(se),n(N),n(le),n(K)),n(t),we(C),Se(y,e),we(L,e),we(P),Se(w,e),ve=!1,Ie()}}}function Qe(u){return[[{label:"Beachfront Villa",body:"Experience personalized service and attention to detail at our boutique hotels. Ourcharming accommodations feature unique decor and cozy amenities, perfect for a romantic getaway or solo retreat.",img_path:"/images/zanzibar/7.webp"},{label:"All-Inclusive Resort",body:"Experience personalized service and attention to detail at our boutique hotels. Ourcharming accommodations feature unique decor and cozy amenities, perfect for a romantic getaway or solo retreat.",img_path:"/images/zanzibar/3.webp"},{label:"Boutique Hotel",body:"Experience personalized service and attention to detail at our boutique hotels. Ourcharming accommodations feature unique decor and cozy amenities, perfect for a romantic getaway or solo retreat.",img_path:"/images/zanzibar/4.webp"}],[{label:"Snorkeling",body:`Plunge into Zanzibar's azure waters for an unforgettable snorkeling escapade. 
			Encounter a vibrant marine realm with lively coral reefs and diverse aquatic creatures, 
			guided by experts. Explore the underwater beauty and create cherished moments in this 
			aquatic haven.`,img_path:"/images/zanzibar/5.webp"},{label:"Kite-surfing",body:`Ride the winds and conquer the waves with heart-pounding kite-surfing in Zanzibar.
			 Feel the exhilaration as you harness the power of the wind, propelling yourself across
			  the turquoise waters. Our skilled instructors ensure a thrilling and safe adventure.`,img_path:"/images/zanzibar/2.webp"},{label:"Spice tour",body:`Embark on a sensory journey through Tanzania's vibrant culture with our immersive spice tours.
			 Wander through fragrant spice plantations, where you'll engage all your senses in the lush 
			 surroundings. Taste their rich flavors, and connect with the local traditions that have shaped Zanzibar's aromatic heritage.`,img_path:"/images/zanzibar/6.webp"},{label:"Dolphin Tour",body:`Embark on a captivating dolphin tour in Zanzibar's pristine waters. 
			Join us for an unforgettable marine encounter as you sail across the Indian Ocean's azure expanse.
			Witness pods of playful dolphins in their natural habitat, gracefully gliding alongside your boat.`,img_path:"/images/zanzibar/10.webp"}],()=>{We("zanzibar")}]}class nt extends Je{constructor(t){super(),Le(this,t,Qe,Ye,Ae,{})}}export{nt as component};