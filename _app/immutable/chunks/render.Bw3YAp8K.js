import{x as k,y as O,z as A,A as C,B as H,C as I,D as E,F as Y,G as j,I as B,J as T,j as g,i as D,f as $,m as y,K as q,L as z,M as F,N as G,O as J,P as K,Q,l as W,R as U,h as b,T as X,V as Z}from"./index-client.CWw6DACK.js";import{a as x}from"./disclose-version.CPnrpXm0.js";const rr=["touchstart","touchmove"];function er(r){return rr.includes(r)}const L=new Set,N=new Set;function sr(r){for(var e=0;e<r.length;e++)L.add(r[e]);for(var t of N)t(r)}function m(r){var S;var e=this,t=e.ownerDocument,c=r.type,i=((S=r.composedPath)==null?void 0:S.call(r))||[],a=i[0]||r.target,d=0,_=r.__root;if(_){var u=i.indexOf(_);if(u!==-1&&(e===document||e===window)){r.__root=e;return}var h=i.indexOf(e);if(h===-1)return;u<=h&&(d=u)}if(a=i[d]||r.target,a!==e){k(r,"currentTarget",{configurable:!0,get(){return a||t}});var w=H,o=I;O(null),A(null);try{for(var n,s=[];a!==null;){var f=a.assignedSlot||a.parentNode||a.host||null;try{var l=a["__"+c];if(l!==void 0&&!a.disabled)if(C(l)){var[M,...P]=l;M.apply(a,[r,...P])}else l.call(a,r)}catch(p){n?s.push(p):n=p}if(r.cancelBubble||f===e||f===null)break;a=f}if(n){for(let p of s)queueMicrotask(()=>{throw p});throw n}}finally{r.__root=e,delete r.currentTarget,O(w),A(o)}}}function or(r,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=t,r.nodeValue=t==null?"":t+"")}function ar(r,e){return V(r,e)}function ir(r,e){E(),e.intro=e.intro??!1;const t=e.target,c=b,i=y;try{for(var a=Y(t);a&&(a.nodeType!==8||a.data!==j);)a=B(a);if(!a)throw T;g(!0),D(a),$();const d=V(r,{...e,anchor:a});if(y===null||y.nodeType!==8||y.data!==q)throw z(),T;return g(!1),d}catch(d){if(d===T)return e.recover===!1&&F(),E(),G(t),g(!1),ar(r,e);throw d}finally{g(c),D(i)}}const v=new Map;function V(r,{target:e,anchor:t,props:c={},events:i,context:a,intro:d=!0}){E();var _=new Set,u=o=>{for(var n=0;n<o.length;n++){var s=o[n];if(!_.has(s)){_.add(s);var f=er(s);e.addEventListener(s,m,{passive:f});var l=v.get(s);l===void 0?(document.addEventListener(s,m,{passive:f}),v.set(s,1)):v.set(s,l+1)}}};u(J(L)),N.add(u);var h=void 0,w=K(()=>{var o=t??e.appendChild(Q());return W(()=>{if(a){U({});var n=Z;n.c=a}i&&(c.$$events=i),b&&x(o,null),h=r(o,c)||{},b&&(I.nodes_end=y),a&&X()}),()=>{var f;for(var n of _){e.removeEventListener(n,m);var s=v.get(n);--s===0?(document.removeEventListener(n,m),v.delete(n)):v.set(n,s)}N.delete(u),o!==t&&((f=o.parentNode)==null||f.removeChild(o))}});return R.set(h,w),h}let R=new WeakMap;function fr(r,e){const t=R.get(r);return t?(R.delete(r),t(e)):Promise.resolve()}export{sr as d,ir as h,ar as m,or as s,fr as u};