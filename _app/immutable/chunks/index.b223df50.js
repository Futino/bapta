import{x as h}from"./scheduler.90ebcd62.js";function f(p){const a=p-1;return a*a*a+1}function v(p,{delay:a=0,duration:i=400,easing:s=h}={}){const n=+getComputedStyle(p).opacity;return{delay:a,duration:i,easing:s,css:r=>`opacity: ${r*n}`}}function x(p,{delay:a=0,duration:i=400,easing:s=f,axis:n="y"}={}){const r=getComputedStyle(p),c=+r.opacity,d=n==="y"?"height":"width",$=parseFloat(r[d]),o=n==="y"?["top","bottom"]:["left","right"],e=o.map(t=>`${t[0].toUpperCase()}${t.slice(1)}`),l=parseFloat(r[`padding${e[0]}`]),_=parseFloat(r[`padding${e[1]}`]),y=parseFloat(r[`margin${e[0]}`]),u=parseFloat(r[`margin${e[1]}`]),g=parseFloat(r[`border${e[0]}Width`]),m=parseFloat(r[`border${e[1]}Width`]);return{delay:a,duration:i,easing:s,css:t=>`overflow: hidden;opacity: ${Math.min(t*20,1)*c};${d}: ${t*$}px;padding-${o[0]}: ${t*l}px;padding-${o[1]}: ${t*_}px;margin-${o[0]}: ${t*y}px;margin-${o[1]}: ${t*u}px;border-${o[0]}-width: ${t*g}px;border-${o[1]}-width: ${t*m}px;`}}export{v as f,x as s};
