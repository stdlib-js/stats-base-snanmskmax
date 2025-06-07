"use strict";var f=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var m=f(function(D,c){
var b=require('@stdlib/math-base-assert-is-nanf/dist'),E=require('@stdlib/math-base-assert-is-positive-zerof/dist');function O(r,a,n,o,u,x,_){var t,s,v,e,i;if(r<=0)return NaN;for(s=o,v=_,i=0;i<r&&(e=a[s],!(e===e&&u[v]===0));i++)s+=n,v+=x;if(i===r)return NaN;for(t=e,i+=1,i;i<r;i++)s+=n,v+=x,!u[v]&&(e=a[s],!b(e)&&(e>t||e===t&&E(e))&&(t=e));return t}c.exports=O
});var j=f(function(F,y){
var p=require('@stdlib/strided-base-stride2offset/dist'),P=m();function Z(r,a,n,o,u){return P(r,a,n,p(r,n),o,u,p(r,u))}y.exports=Z
});var l=f(function(G,k){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=j(),h=m();g(d,"ndarray",h);k.exports=d
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=l(),q,R=z(w(__dirname,"./native.js"));A(R)?q=B:q=R;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
