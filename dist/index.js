"use strict";var q=function(i,n){return function(){return n||i((n={exports:{}}).exports,n),n.exports}};var p=q(function(F,x){
var Z=require('@stdlib/math-base-assert-is-nanf/dist'),_=require('@stdlib/math-base-assert-is-positive-zerof/dist');function E(i,n,o,m,s){var v,f,a,r,e;if(i<=0)return NaN;for(o<0?f=(1-i)*o:f=0,s<0?a=(1-i)*s:a=0,e=0;e<i&&(r=n[f],!(r===r&&m[a]===0));e++)f+=o,a+=s;if(e===i)return NaN;for(v=r,e+=1,e;e<i;e++)f+=o,a+=s,!m[a]&&(r=n[f],!Z(r)&&(r>v||r===v&&_(r))&&(v=r));return v}x.exports=E
});var y=q(function(G,l){
var O=require('@stdlib/math-base-assert-is-nanf/dist'),g=require('@stdlib/math-base-assert-is-positive-zerof/dist');function h(i,n,o,m,s,v,f){var a,r,e,u,t;if(i<=0)return NaN;for(r=m,e=f,t=0;t<i&&(u=n[r],!(u===u&&s[e]===0));t++)r+=o,e+=v;if(t===i)return NaN;for(a=u,t+=1,t;t<i;t++)r+=o,e+=v,!s[e]&&(u=n[r],!O(u)&&(u>a||u===a&&g(u))&&(a=u));return a}l.exports=h
});var P=q(function(H,b){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=p(),w=y();k(j,"ndarray",w);b.exports=j
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=P(),c,R=A(z(__dirname,"./native.js"));B(R)?c=C:c=R;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
