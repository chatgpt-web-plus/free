function b(e,t){const n=Object.create(null),s=e.split(",");for(let o=0;o<s.length;o++)n[s[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const x={},D=[],F=()=>{},I=()=>!1,T=/^on[^a-z]/,$=e=>T.test(e),H=e=>e.startsWith("onUpdate:"),L=Object.assign,q=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},z=Object.prototype.hasOwnProperty,J=(e,t)=>z.call(e,t),c=Array.isArray,A=e=>a(e)==="[object Map]",P=e=>a(e)==="[object Set]",m=e=>a(e)==="[object Date]",p=e=>typeof e=="function",r=e=>typeof e=="string",h=e=>typeof e=="symbol",i=e=>e!==null&&typeof e=="object",G=e=>i(e)&&p(e.then)&&p(e.catch),S=Object.prototype.toString,a=e=>S.call(e),Y=e=>a(e).slice(8,-1),C=e=>a(e)==="[object Object]",W=e=>r(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Z=b(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),u=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},E=/-(\w)/g,Q=u(e=>e.replace(E,(t,n)=>n?n.toUpperCase():"")),R=/\B([A-Z])/g,X=u(e=>e.replace(R,"-$1").toLowerCase()),M=u(e=>e.charAt(0).toUpperCase()+e.slice(1)),v=u(e=>e?`on${M(e)}`:""),ee=(e,t)=>!Object.is(e,t),te=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ne=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},se=e=>{const t=parseFloat(e);return isNaN(t)?e:t},oe=e=>{const t=r(e)?Number(e):NaN;return isNaN(t)?e:t};let O;const re=()=>O||(O=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function j(e){if(c(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=r(s)?K(s):j(s);if(o)for(const l in o)t[l]=o[l]}return t}else{if(r(e))return e;if(i(e))return e}}const B=/;(?![^(]*\))/g,_=/:([^]+)/,V=/\/\*[^]*?\*\//g;function K(e){const t={};return e.replace(V,"").split(B).forEach(n=>{if(n){const s=n.split(_);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function w(e){let t="";if(r(e))t=e;else if(c(e))for(let n=0;n<e.length;n++){const s=w(e[n]);s&&(t+=s+" ")}else if(i(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function ie(e){if(!e)return null;let{class:t,style:n}=e;return t&&!r(t)&&(e.class=w(t)),n&&(e.style=j(n)),e}const U="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ce=b(U);function ae(e){return!!e||e===""}function k(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=y(e[s],t[s]);return n}function y(e,t){if(e===t)return!0;let n=m(e),s=m(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=h(e),s=h(t),n||s)return e===t;if(n=c(e),s=c(t),n||s)return n&&s?k(e,t):!1;if(n=i(e),s=i(t),n||s){if(!n||!s)return!1;const o=Object.keys(e).length,l=Object.keys(t).length;if(o!==l)return!1;for(const f in e){const d=e.hasOwnProperty(f),g=t.hasOwnProperty(f);if(d&&!g||!d&&g||!y(e[f],t[f]))return!1}}return String(e)===String(t)}function le(e,t){return e.findIndex(n=>y(n,t))}const fe=e=>r(e)?e:e==null?"":c(e)||i(e)&&(e.toString===S||!p(e.toString))?JSON.stringify(e,N,2):String(e),N=(e,t)=>t&&t.__v_isRef?N(e,t.value):A(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,o])=>(n[`${s} =>`]=o,n),{})}:P(t)?{[`Set(${t.size})`]:[...t.values()]}:i(t)&&!c(t)&&!C(t)?String(t):t;export{se as A,v as B,X as C,I as D,x as E,H as F,oe as G,le as H,y as I,ce as J,ae as K,fe as L,m as M,F as N,ie as O,i as a,p as b,c,ne as d,J as e,W as f,A as g,ee as h,h as i,L as j,r as k,j as l,b as m,w as n,$ as o,re as p,P as q,q as r,C as s,Y as t,Q as u,M as v,D as w,G as x,Z as y,te as z};
