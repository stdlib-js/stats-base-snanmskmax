// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,l=n.__lookupGetter__,u=n.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var f,c,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(l.call(r,t)||u.call(r,t)?(f=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=f):r[t]=e.value),y="get"in e,p="set"in e,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(r,t,e.get),p&&i&&i.call(r,t,e.set),r};var f=t;function c(r){return r!=r}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var p=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var b,_="function"==typeof Symbol?Symbol.toStringTag:"";b=y&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,o,a;if(null==r)return p.call(r);e=r[_],a=_,t=null!=(o=r)&&v.call(o,a);try{r[_]=void 0}catch(t){return p.call(r)}return n=p.call(r),t?r[_]=e:delete r[_],n}:function(r){return p.call(r)};var d=b,m="function"==typeof Float32Array;var s=Number.POSITIVE_INFINITY,w="function"==typeof Float32Array?Float32Array:null;var A,j="function"==typeof Float32Array?Float32Array:void 0;A=function(){var r,t,e;if("function"!=typeof w)return!1;try{t=new w([1,3.14,-3.14,5e40]),e=t,r=(m&&e instanceof Float32Array||"[object Float32Array]"===d(e))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===s}catch(t){r=!1}return r}()?j:function(){throw new Error("not implemented")};var g=A,S="function"==typeof Uint32Array;var h="function"==typeof Uint32Array?Uint32Array:null;var N,F="function"==typeof Uint32Array?Uint32Array:void 0;N=function(){var r,t,e;if("function"!=typeof h)return!1;try{t=new h(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(S&&e instanceof Uint32Array||"[object Uint32Array]"===d(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?F:function(){throw new Error("not implemented")};var O=N,U=new g(1);new O(U.buffer)[0]=2139095040;var E=U[0];function P(r){return 0===r&&1/r===E}function T(r,t,e,n,o){var a,i,l,u,f;if(r<=0)return NaN;for(i=e<0?(1-r)*e:0,l=o<0?(1-r)*o:0,f=0;f<r&&((u=t[i])!=u||0!==n[l]);f++)i+=e,l+=o;if(f===r)return NaN;for(a=u,f+=1;f<r;f++)i+=e,n[l+=o]||c(u=t[i])||(u>a||u===a&&P(u))&&(a=u);return a}function I(r,t,e,n,o,a,i){var l,u,f,y,p;if(r<=0)return NaN;for(u=n,f=i,p=0;p<r&&((y=t[u])!=y||0!==o[f]);p++)u+=e,f+=a;if(p===r)return NaN;for(l=y,p+=1;p<r;p++)u+=e,o[f+=a]||c(y=t[u])||(y>l||y===l&&P(y))&&(l=y);return l}f(T,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:I});export{T as default,I as ndarray};
//# sourceMappingURL=mod.js.map