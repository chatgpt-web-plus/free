import"./index.7458312b.js";import{aW as p,b8 as f}from"./.pnpm.532eafd7.js";function d(t){const s=p({}),e=Object.keys(t),i=e.map(o=>{const a=t[o];return s[o]=[],()=>a.api(f(a.params)||{})}),r=async()=>{(await Promise.allSettled(i.map(a=>a()))).forEach((a,u)=>{const n=e[u];if(a.status=="fulfilled"){const{transformData:c}=t[n],l=c?c(a.value):a.value;s[n]=l}})};return r(),{optionsData:s,refresh:r}}export{d as u};
