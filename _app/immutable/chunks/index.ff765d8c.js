var it=Object.defineProperty;var rt=(t,e,n)=>e in t?it(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var H=(t,e,n)=>(rt(t,typeof e!="symbol"?e+"":e,n),n);import{n as v,r as N,q as C,f as S,x as I,z as K,p as st,A as at,B as ot,C as lt,m as U,D as ct,E as ut,F as ft}from"./scheduler.b428cfaa.js";const Q=typeof window<"u";let L=Q?()=>window.performance.now():()=>Date.now(),O=Q?t=>requestAnimationFrame(t):v;const E=new Set;function X(t){E.forEach(e=>{e.c(t)||(E.delete(e),e.f())}),E.size!==0&&O(X)}function P(t){let e;return E.size===0&&O(X),{promise:new Promise(n=>{E.add(e={c:t,f:n})}),abort(){E.delete(e)}}}let j=!1;function dt(){j=!0}function _t(){j=!1}function mt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function ht(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const d=e[c];d.claim_order!==void 0&&l.push(d)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,d=(r>0&&e[n[r]].claim_order<=c?r+1:mt(1,r,m=>e[n[m]].claim_order,c))-1;i[l]=n[d]+1;const u=d+1;n[u]=l,r=Math.max(u,r)}const o=[],s=[];let a=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(o.push(e[l-1]);a>=l;a--)s.push(e[a]);a--}for(;a>=0;a--)s.push(e[a]);o.reverse(),s.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<s.length;l++){for(;c<o.length&&s[l].claim_order>=o[c].claim_order;)c++;const d=c<o.length?o[c]:null;t.insertBefore(s[l],d)}}function Y(t,e){t.appendChild(e)}function Z(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function pt(t){const e=q("style");return e.textContent="/* empty */",$t(Z(t),e),e.sheet}function $t(t,e){return Y(t.head||t,e),e.sheet}function yt(t,e){if(j){for(ht(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Tt(t,e,n){j&&!n?yt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function W(t){t.parentNode&&t.parentNode.removeChild(t)}function jt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function q(t){return document.createElement(t)}function gt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function F(t){return document.createTextNode(t)}function Ht(){return F(" ")}function It(){return F("")}function V(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Lt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Ot(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Pt(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function Wt(t){return t.dataset.svelteH}function qt(t){let e;return{p(...n){e=n,e.forEach(i=>t.push(i))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function wt(t){return Array.from(t.childNodes)}function xt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function tt(t,e,n,i,r=!1){xt(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const a=t[s];if(e(a)){const l=n(a);return l===void 0?t.splice(s,1):t[s]=l,r||(t.claim_info.last_index=s),a}}for(let s=t.claim_info.last_index-1;s>=0;s--){const a=t[s];if(e(a)){const l=n(a);return l===void 0?t.splice(s,1):t[s]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,a}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function et(t,e,n,i){return tt(t,r=>r.nodeName===e,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const a=r.attributes[s];n[a.name]||o.push(a.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Ft(t,e,n){return et(t,e,n,q)}function Gt(t,e,n){return et(t,e,n,gt)}function vt(t,e){return tt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>F(e),!0)}function Jt(t){return vt(t," ")}function Kt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ut(t,e){t.value=e??""}function Vt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let k;function bt(){if(k===void 0){k=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{k=!0}}return k}function Qt(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=q("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=bt();let o;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=V(window,"message",s=>{s.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{o=V(i.contentWindow,"resize",e),e()}),Y(t,i),()=>{(r||o&&i.contentWindow)&&o(),W(i)}}function Xt(t,e,n){t.classList.toggle(e,!!n)}function Et(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Yt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(r)):o===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Zt(t,e){return new t(e)}const B=new Map;let M=0;function Nt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function At(t,e){const n={stylesheet:pt(e),rules:{}};return B.set(t,n),n}function R(t,e,n,i,r,o,s,a=0){const l=16.666/i;let c=`{
`;for(let h=0;h<=1;h+=l){const $=e+(n-e)*o(h);c+=h*100+`%{${s($,1-$)}}
`}const d=c+`100% {${s(n,1-n)}}
}`,u=`__svelte_${Nt(d)}_${a}`,m=Z(t),{stylesheet:p,rules:f}=B.get(m)||At(m,t);f[u]||(f[u]=!0,p.insertRule(`@keyframes ${u} ${d}`,p.cssRules.length));const _=t.style.animation||"";return t.style.animation=`${_?`${_}, `:""}${u} ${i}ms linear ${r}ms 1 both`,M+=1,u}function T(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),M-=r,M||St())}function St(){O(()=>{M||(B.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&W(e)}),B.clear())})}let A;function G(){return A||(A=Promise.resolve(),A.then(()=>{A=null})),A}function x(t,e,n){t.dispatchEvent(Et(`${e?"intro":"outro"}${n}`))}const z=new Set;let y;function te(){y={r:0,c:[],p:y}}function ee(){y.r||N(y.c),y=y.p}function Ct(t,e){t&&t.i&&(z.delete(t),t.i(e))}function ne(t,e,n,i){if(t&&t.o){if(z.has(t))return;z.add(t),y.c.push(()=>{z.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const J={duration:0};function ie(t,e,n){const i={direction:"in"};let r=e(t,n,i),o=!1,s,a,l=0;function c(){s&&T(t,s)}function d(){const{delay:m=0,duration:p=300,easing:f=I,tick:_=v,css:h}=r||J;h&&(s=R(t,0,1,p,m,f,h,l++)),_(0,1);const $=L()+m,g=$+p;a&&a.abort(),o=!0,S(()=>x(t,!0,"start")),a=P(w=>{if(o){if(w>=g)return _(1,0),x(t,!0,"end"),c(),o=!1;if(w>=$){const b=f((w-$)/p);_(b,1-b)}}return o})}let u=!1;return{start(){u||(u=!0,T(t),C(r)?(r=r(i),G().then(d)):d())},invalidate(){u=!1},end(){o&&(c(),o=!1)}}}function re(t,e,n){const i={direction:"out"};let r=e(t,n,i),o=!0,s;const a=y;a.r+=1;let l;function c(){const{delay:d=0,duration:u=300,easing:m=I,tick:p=v,css:f}=r||J;f&&(s=R(t,1,0,u,d,m,f));const _=L()+d,h=_+u;S(()=>x(t,!1,"start")),"inert"in t&&(l=t.inert,t.inert=!0),P($=>{if(o){if($>=h)return p(0,1),x(t,!1,"end"),--a.r||N(a.c),!1;if($>=_){const g=m(($-_)/u);p(1-g,g)}}return o})}return C(r)?G().then(()=>{r=r(i),c()}):c(),{end(d){d&&"inert"in t&&(t.inert=l),d&&r.tick&&r.tick(1,0),o&&(s&&T(t,s),o=!1)}}}function se(t,e,n,i){let o=e(t,n,{direction:"both"}),s=i?0:1,a=null,l=null,c=null,d;function u(){c&&T(t,c)}function m(f,_){const h=f.b-s;return _*=Math.abs(h),{a:s,b:f.b,d:h,duration:_,start:f.start,end:f.start+_,group:f.group}}function p(f){const{delay:_=0,duration:h=300,easing:$=I,tick:g=v,css:w}=o||J,b={start:L()+_,b:f};f||(b.group=y,y.r+=1),"inert"in t&&(f?d!==void 0&&(t.inert=d):(d=t.inert,t.inert=!0)),a||l?l=b:(w&&(u(),c=R(t,s,f,h,_,$,w)),f&&g(0,1),a=m(b,h),S(()=>x(t,f,"start")),P(D=>{if(l&&D>l.start&&(a=m(l,h),l=null,x(t,a.b,"start"),w&&(u(),c=R(t,s,a.b,a.duration,0,$,o.css))),a){if(D>=a.end)g(s=a.b,1-s),x(t,a.b,"end"),l||(a.b?u():--a.group.r||N(a.group.c)),a=null;else if(D>=a.start){const nt=D-a.start;s=a.a+a.d*$(nt/a.duration),g(s,1-s)}}return!!(a||l)}))}return{run(f){C(o)?G().then(()=>{o=o({direction:f?"in":"out"}),p(f)}):p(f)},end(){u(),a=l=null}}}function ae(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function oe(t){t&&t.c()}function le(t,e){t&&t.l(e)}function Dt(t,e,n){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),S(()=>{const o=t.$$.on_mount.map(ct).filter(C);t.$$.on_destroy?t.$$.on_destroy.push(...o):N(o),t.$$.on_mount=[]}),r.forEach(S)}function kt(t,e){const n=t.$$;n.fragment!==null&&(ot(n.after_update),N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function zt(t,e){t.$$.dirty[0]===-1&&(ut.push(t),ft(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ce(t,e,n,i,r,o,s=null,a=[-1]){const l=lt;U(t);const c=t.$$={fragment:null,ctx:[],props:o,update:v,not_equal:r,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:K(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};s&&s(c.root);let d=!1;if(c.ctx=n?n(t,e.props||{},(u,m,...p)=>{const f=p.length?p[0]:m;return c.ctx&&r(c.ctx[u],c.ctx[u]=f)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](f),d&&zt(t,u)),m}):[],c.update(),d=!0,N(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){dt();const u=wt(e.target);c.fragment&&c.fragment.l(u),u.forEach(W)}else c.fragment&&c.fragment.c();e.intro&&Ct(t.$$.fragment),Dt(t,e.target,e.anchor),_t(),st()}U(l)}class ue{constructor(){H(this,"$$");H(this,"$$set")}$destroy(){kt(this,1),this.$destroy=v}$on(e,n){if(!C(n))return v;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!at(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Bt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Bt);export{V as A,ie as B,se as C,re as D,Yt as E,Ut as F,ae as G,Xt as H,Lt as I,qt as J,Qt as K,gt as L,Gt as M,Pt as N,ue as S,Tt as a,ee as b,Jt as c,Ct as d,It as e,W as f,q as g,Ft as h,ce as i,wt as j,Ot as k,Vt as l,F as m,vt as n,Kt as o,te as p,Zt as q,oe as r,Ht as s,ne as t,le as u,Dt as v,kt as w,Wt as x,yt as y,jt as z};