var _=function(n,o){return _=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,i){e.__proto__=i}||function(e,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])},_(n,o)};function p(n,o){if(typeof o!="function"&&o!==null)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");_(n,o);function e(){this.constructor=n}n.prototype=o===null?Object.create(o):(e.prototype=o.prototype,new e)}function m(n,o,e,i){function a(t){return t instanceof e?t:new e(function(c){c(t)})}return new(e||(e=Promise))(function(t,c){function u(f){try{r(i.next(f))}catch(y){c(y)}}function s(f){try{r(i.throw(f))}catch(y){c(y)}}function r(f){f.done?t(f.value):a(f.value).then(u,s)}r((i=i.apply(n,o||[])).next())})}function S(n,o){var e={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1]},trys:[],ops:[]},i,a,t,c;return c={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function u(r){return function(f){return s([r,f])}}function s(r){if(i)throw new TypeError("Generator is already executing.");for(;c&&(c=0,r[0]&&(e=0)),e;)try{if(i=1,a&&(t=r[0]&2?a.return:r[0]?a.throw||((t=a.return)&&t.call(a),0):a.next)&&!(t=t.call(a,r[1])).done)return t;switch(a=0,t&&(r=[r[0]&2,t.value]),r[0]){case 0:case 1:t=r;break;case 4:return e.label++,{value:r[1],done:!1};case 5:e.label++,a=r[1],r=[0];continue;case 7:r=e.ops.pop(),e.trys.pop();continue;default:if(t=e.trys,!(t=t.length>0&&t[t.length-1])&&(r[0]===6||r[0]===2)){e=0;continue}if(r[0]===3&&(!t||r[1]>t[0]&&r[1]<t[3])){e.label=r[1];break}if(r[0]===6&&e.label<t[1]){e.label=t[1],t=r;break}if(t&&e.label<t[2]){e.label=t[2],e.ops.push(r);break}t[2]&&e.ops.pop(),e.trys.pop();continue}r=o.call(n,e)}catch(f){r=[6,f],a=0}finally{i=t=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}}function d(n){var o=typeof Symbol=="function"&&Symbol.iterator,e=o&&n[o],i=0;if(e)return e.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(o?"Object is not iterable.":"Symbol.iterator is not defined.")}function x(n,o){var e=typeof Symbol=="function"&&n[Symbol.iterator];if(!e)return n;var i=e.call(n),a,t=[],c;try{for(;(o===void 0||o-- >0)&&!(a=i.next()).done;)t.push(a.value)}catch(u){c={error:u}}finally{try{a&&!a.done&&(e=i.return)&&e.call(i)}finally{if(c)throw c.error}}return t}function g(n,o,e){if(e||arguments.length===2)for(var i=0,a=o.length,t;i<a;i++)(t||!(i in o))&&(t||(t=Array.prototype.slice.call(o,0,i)),t[i]=o[i]);return n.concat(t||Array.prototype.slice.call(o))}function b(n){return this instanceof b?(this.v=n,this):new b(n)}function I(n,o,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(n,o||[]),a,t=[];return a={},c("next"),c("throw"),c("return"),a[Symbol.asyncIterator]=function(){return this},a;function c(l){i[l]&&(a[l]=function(h){return new Promise(function(w,v){t.push([l,h,w,v])>1||u(l,h)})})}function u(l,h){try{s(i[l](h))}catch(w){y(t[0][3],w)}}function s(l){l.value instanceof b?Promise.resolve(l.value.v).then(r,f):y(t[0][2],l)}function r(l){u("next",l)}function f(l){u("throw",l)}function y(l,h){l(h),t.shift(),t.length&&u(t[0][0],t[0][1])}}function O(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=n[Symbol.asyncIterator],e;return o?o.call(n):(n=typeof d=="function"?d(n):n[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(t){e[t]=n[t]&&function(c){return new Promise(function(u,s){c=n[t](c),a(u,s,c.done,c.value)})}}function a(t,c,u,s){Promise.resolve(s).then(function(r){t({value:r,done:u})},c)}}export{d as _,g as a,x as b,p as c,I as d,S as e,b as f,m as g,O as h};
