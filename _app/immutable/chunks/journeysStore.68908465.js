import{w as l}from"./index.fcb55ba0.js";import{y as c}from"./scheduler.b428cfaa.js";function u(){const t=[],e=l(t),{subscribe:n,set:o}=e,r=typeof window<"u";function i(){r&&(localStorage.storable=JSON.stringify(t)),o(t),e.update(()=>t)}return r&&localStorage.storable&&o(JSON.parse(localStorage.storable)),{subscribe:n,reset:i,set:s=>{r&&(localStorage.storable=JSON.stringify(s)),o(s)}}}let a=u();function p(t){let e=c(a);e.includes(t)||(e.push(t),a.set(e))}export{p as a,a as j};