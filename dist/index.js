"use strict";var d=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var p=d(function(C,m){
function _(r,e,a,u,i,R){var s,o,n,t,v,q;if(v=r-e,r<=0||v<=0)return NaN;if(r===1||i===0)return 0;for(s=R,o=0,n=0,q=0;q<r;q++)t=u[s]-a,o+=t*t,n+=t,s+=i;return o/v-n/r*(n/v)}m.exports=_
});var x=d(function(D,c){
var E=require('@stdlib/strided-base-stride2offset/dist'),O=p();function b(r,e,a,u,i){return O(r,e,a,u,i,E(r,i))}c.exports=b
});var l=d(function(F,j){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=x(),h=p();g(y,"ndarray",h);j.exports=y
});var k=require("path").join,w=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=l(),f,M=w(k(__dirname,"./native.js"));z(M)?f=A:f=M;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
