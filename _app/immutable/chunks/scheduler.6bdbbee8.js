function w(){}const M=t=>t;function E(t,n){for(const e in n)t[e]=n[e];return t}function A(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function j(t){return t()}function B(){return Object.create(null)}function q(t){t.forEach(j)}function C(t){return typeof t=="function"}function D(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let i;function P(t,n){return i||(i=document.createElement("a")),i.href=n,t===i.href}function S(t){return Object.keys(t).length===0}function y(t,...n){if(t==null){for(const c of n)c(void 0);return w}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function U(t){let n;return y(t,e=>n=e)(),n}function G(t,n,e){t.$$.on_destroy.push(y(n,e))}function H(t,n,e,c){if(t){const o=m(t,n,e,c);return t[0](o)}}function m(t,n,e,c){return t[1]&&c?E(e.ctx.slice(),t[1](c(n))):e.ctx}function I(t,n,e,c){if(t[2]&&c){const o=t[2](c(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const l=[],_=Math.max(n.dirty.length,o.length);for(let u=0;u<_;u+=1)l[u]=n.dirty[u]|o[u];return l}return n.dirty|o}return n.dirty}function J(t,n,e,c,o,l){if(o){const _=m(n,e,c,l);t.p(_,o)}}function K(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let c=0;c<e;c++)n[c]=-1;return n}return-1}function L(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}let f;function h(t){f=t}function k(){if(!f)throw new Error("Function called outside component initialization");return f}function N(t){k().$$.on_mount.push(t)}function Q(t){k().$$.after_update.push(t)}function R(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(c=>c.call(this,n))}const a=[],g=[];let s=[];const p=[],x=Promise.resolve();let b=!1;function O(){b||(b=!0,x.then(z))}function T(){return O(),x}function v(t){s.push(t)}function V(t){p.push(t)}const d=new Set;let r=0;function z(){if(r!==0)return;const t=f;do{try{for(;r<a.length;){const n=a[r];r++,h(n),F(n.$$)}}catch(n){throw a.length=0,r=0,n}for(h(null),a.length=0,r=0;g.length;)g.pop()();for(let n=0;n<s.length;n+=1){const e=s[n];d.has(e)||(d.add(e),e())}s.length=0}while(a.length);for(;p.length;)p.pop()();b=!1,d.clear(),h(t)}function F(t){if(t.fragment!==null){t.update(),q(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(v)}}function W(t){const n=[],e=[];s.forEach(c=>t.indexOf(c)===-1?n.push(c):e.push(c)),e.forEach(c=>c()),s=n}export{S as A,W as B,f as C,j as D,a as E,O as F,Q as a,g as b,P as c,E as d,L as e,v as f,H as g,K as h,I as i,G as j,A as k,k as l,h as m,w as n,N as o,z as p,C as q,q as r,D as s,T as t,J as u,V as v,R as w,M as x,U as y,B as z};