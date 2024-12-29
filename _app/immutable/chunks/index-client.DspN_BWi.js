var Fn=Array.isArray,Ln=Array.from,Mn=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,zt=Object.getOwnPropertyDescriptors,Yn=Object.prototype,jn=Array.prototype,Wt=Object.getPrototypeOf;const Un=()=>{};function Bn(t){return t()}function yt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,Et=4,j=8,at=16,m=32,J=64,nt=128,D=256,$=512,d=1024,k=2048,U=4096,q=8192,C=16384,Jt=32768,wt=65536,Hn=1<<17,Qt=1<<19,mt=1<<20,vt=Symbol("$state"),Vn=Symbol("legacy props"),Gn=Symbol("");function Tt(t){return t===this.v}function Xt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function gt(t){return!Xt(t,this.v)}function tn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function nn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function en(t){throw new Error("https://svelte.dev/e/effect_orphan")}function rn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function $n(){throw new Error("https://svelte.dev/e/hydration_failed")}function Kn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Zn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function zn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ln(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function sn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let B=!1;function Wn(){B=!0}const Jn=1,Qn=2,Xn=4,te=8,ne=16,ee=1,re=2,un="[",an="[!",on="]",xt={},le=Symbol();function ot(t,n){var e={f:0,v:t,reactions:null,equals:Tt,version:0};return e}function se(t){return fn(ot(t))}function ue(t,n=!1){const e=ot(t);return n||(e.equals=gt),B&&i!==null&&i.l!==null&&(i.l.s??=[]).push(e),e}function fn(t){return o!==null&&o.f&y&&(w===null?Sn([t]):w.push(t)),t}function ae(t,n){return o!==null&&_t()&&o.f&(y|at)&&(w===null||!w.includes(t))&&sn(),_n(t,n)}function _n(t,n){return t.equals(n)||(t.v=n,t.version=Ht(),kt(t,k),_t()&&a!==null&&a.f&d&&!(a.f&m)&&(c!==null&&c.includes(t)?(T(a,k),tt(a)):x===null?Rn([t]):x.push(t))),n}function kt(t,n){var e=t.reactions;if(e!==null)for(var r=_t(),l=e.length,s=0;s<l;s++){var u=e[s],f=u.f;f&k||!r&&u===a||(T(u,n),f&(d|D)&&(f&y?kt(u,U):tt(u)))}}function At(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let R=!1;function oe(t){R=t}let E;function F(t){if(t===null)throw At(),xt;return E=t}function ie(){return F(b(E))}function fe(t){if(R){if(b(E)!==null)throw At(),xt;E=t}}function _e(t=1){if(R){for(var n=t,e=E;n--;)e=b(e);E=e}}function ce(){for(var t=0,n=E;;){if(n.nodeType===8){var e=n.data;if(e===on){if(t===0)return n;t-=1}else(e===un||e===an)&&(t+=1)}var r=b(n);n.remove(),n=r}}var pt,cn,St,Rt;function ve(){if(pt===void 0){pt=window,cn=document;var t=Element.prototype,n=Node.prototype;St=ct(n,"firstChild").get,Rt=ct(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function et(t=""){return document.createTextNode(t)}function rt(t){return St.call(t)}function b(t){return Rt.call(t)}function pe(t,n){if(!R)return rt(t);var e=rt(E);if(e===null)e=E.appendChild(et());else if(n&&e.nodeType!==3){var r=et();return e?.before(r),F(r),r}return F(e),e}function de(t,n){if(!R){var e=rt(t);return e instanceof Comment&&e.data===""?b(e):e}return E}function he(t,n=1,e=!1){let r=R?E:t;for(var l;n--;)l=r,r=b(r);if(!R)return r;var s=r?.nodeType;if(e&&s!==3){var u=et();return r===null?l?.after(u):r.before(u),F(u),u}return F(r),r}function ye(t){t.textContent=""}function vn(t){var n=y|k;a===null?n|=D:a.f|=mt;var e=o!==null&&o.f&y?o:null;const r={children:null,ctx:i,deps:null,equals:Tt,f:n,fn:t,reactions:null,v:null,version:0,parent:e??a};return e!==null&&(e.children??=[]).push(r),r}function Ee(t){const n=vn(t);return n.equals=gt,n}function Ot(t){var n=t.children;if(n!==null){t.children=null;for(var e=0;e<n.length;e+=1){var r=n[e];r.f&y?it(r):O(r)}}}function pn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function Dt(t){var n,e=a;W(pn(t));try{Ot(t),n=Vt(t)}finally{W(e)}return n}function bt(t){var n=Dt(t),e=(S||t.f&D)&&t.deps!==null?U:d;T(t,e),t.equals(n)||(t.v=n,t.version=Ht())}function it(t){Ot(t),Y(t,0),T(t,C),t.v=t.children=t.deps=t.ctx=t.reactions=null}function It(t){a===null&&o===null&&en(),o!==null&&o.f&D&&nn(),ft&&tn()}function dn(t,n){var e=n.last;e===null?n.last=n.first=t:(e.next=t,t.prev=e,n.last=t)}function P(t,n,e,r=!0){var l=(t&J)!==0,s=a,u={ctx:i,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|k,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,version:0};if(e){var f=I;try{dt(!0),X(u),u.f|=Jt}catch(p){throw O(u),p}finally{dt(f)}}else n!==null&&tt(u);var v=e&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&mt)===0;if(!v&&!l&&r&&(s!==null&&dn(u,s),o!==null&&o.f&y)){var g=o;(g.children??=[]).push(u)}return u}function we(t){const n=P(j,null,!1);return T(n,d),n.teardown=t,n}function hn(t){It();var n=a!==null&&(a.f&m)!==0&&i!==null&&!i.m;if(n){var e=i;(e.e??=[]).push({fn:t,effect:a,reaction:o})}else{var r=Nt(t);return r}}function me(t){return It(),yn(t)}function Te(t){const n=P(J,t,!0);return(e={})=>new Promise(r=>{e.outro?mn(n,()=>{O(n),r(void 0)}):(O(n),r(void 0))})}function Nt(t){return P(Et,t,!1)}function yn(t){return P(j,t,!0)}function ge(t){return En(t)}function En(t,n=0){return P(j|at|n,t,!0)}function xe(t,n=!0){return P(j|m,t,!0,n)}function qt(t){var n=t.teardown;if(n!==null){const e=ft,r=o;ht(!0),z(null);try{n.call(null)}finally{ht(e),z(r)}}}function Ct(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var e=0;e<n.length;e+=1)it(n[e])}}function Pt(t,n=!1){var e=t.first;for(t.first=t.last=null;e!==null;){var r=e.next;O(e,n),e=r}}function wn(t){for(var n=t.first;n!==null;){var e=n.next;n.f&m||O(n),n=e}}function O(t,n=!0){var e=!1;if((n||t.f&Qt)&&t.nodes_start!==null){for(var r=t.nodes_start,l=t.nodes_end;r!==null;){var s=r===l?null:b(r);r.remove(),r=s}e=!0}Pt(t,n&&!e),Ct(t),Y(t,0),T(t,C);var u=t.transitions;if(u!==null)for(const v of u)v.stop();qt(t);var f=t.parent;f!==null&&f.first!==null&&Ft(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ft(t){var n=t.parent,e=t.prev,r=t.next;e!==null&&(e.next=r),r!==null&&(r.prev=e),n!==null&&(n.first===t&&(n.first=r),n.last===t&&(n.last=e))}function mn(t,n){var e=[];Lt(t,e,!0),Tn(e,()=>{O(t),n&&n()})}function Tn(t,n){var e=t.length;if(e>0){var r=()=>--e||n();for(var l of t)l.out(r)}else n()}function Lt(t,n,e){if(!(t.f&q)){if(t.f^=q,t.transitions!==null)for(const u of t.transitions)(u.is_global||e)&&n.push(u);for(var r=t.first;r!==null;){var l=r.next,s=(r.f&wt)!==0||(r.f&m)!==0;Lt(r,n,s?e:!1),r=l}}}function ke(t){Mt(t,!0)}function Mt(t,n){if(t.f&q){H(t)&&X(t),t.f^=q;for(var e=t.first;e!==null;){var r=e.next,l=(e.f&wt)!==0||(e.f&m)!==0;Mt(e,l?n:!1),e=r}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}const gn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let K=!1,Z=!1,lt=[],st=[];function Yt(){K=!1;const t=lt.slice();lt=[],yt(t)}function jt(){Z=!1;const t=st.slice();st=[],yt(t)}function Ae(t){K||(K=!0,queueMicrotask(Yt)),lt.push(t)}function Se(t){Z||(Z=!0,gn(jt)),st.push(t)}function xn(){K&&Yt(),Z&&jt()}function kn(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const Ut=0,An=1;let V=!1,G=Ut,L=!1,M=null,I=!1,ft=!1;function dt(t){I=t}function ht(t){ft=t}let A=[],N=0;let o=null;function z(t){o=t}let a=null;function W(t){a=t}let w=null;function Sn(t){w=t}let c=null,h=0,x=null;function Rn(t){x=t}let Bt=1,S=!1,i=null;function Ht(){return++Bt}function _t(){return!B||i!==null&&i.l===null}function H(t){var n=t.f;if(n&k)return!0;if(n&U){var e=t.deps,r=(n&D)!==0;if(e!==null){var l;if(n&$){for(l=0;l<e.length;l++)(e[l].reactions??=[]).push(t);t.f^=$}for(l=0;l<e.length;l++){var s=e[l];if(H(s)&&bt(s),r&&a!==null&&!S&&!s?.reactions?.includes(t)&&(s.reactions??=[]).push(t),s.version>t.version)return!0}}(!r||a!==null&&!S)&&T(t,d)}return!1}function On(t,n){for(var e=n;e!==null;){if(e.f&nt)try{e.fn(t);return}catch{e.f^=nt}e=e.parent}throw V=!1,t}function Dn(t){return(t.f&C)===0&&(t.parent===null||(t.parent.f&nt)===0)}function Q(t,n,e,r){if(V){if(e===null&&(V=!1),Dn(n))throw t;return}e!==null&&(V=!0);{On(t,n);return}}function Vt(t){var n=c,e=h,r=x,l=o,s=S,u=w,f=i,v=t.f;c=null,h=0,x=null,o=v&(m|J)?null:t,S=!I&&(v&D)!==0,w=null,i=t.ctx;try{var g=(0,t.fn)(),p=t.deps;if(c!==null){var _;if(Y(t,h),p!==null&&h>0)for(p.length=h+c.length,_=0;_<c.length;_++)p[h+_]=c[_];else t.deps=p=c;if(!S)for(_=h;_<p.length;_++)(p[_].reactions??=[]).push(t)}else p!==null&&h<p.length&&(Y(t,h),p.length=h);return g}finally{c=n,h=e,x=r,o=l,S=s,w=u,i=f}}function bn(t,n){let e=n.reactions;if(e!==null){var r=e.indexOf(t);if(r!==-1){var l=e.length-1;l===0?e=n.reactions=null:(e[r]=e[l],e.pop())}}e===null&&n.f&y&&(c===null||!c.includes(n))&&(T(n,U),n.f&(D|$)||(n.f^=$),Y(n,0))}function Y(t,n){var e=t.deps;if(e!==null)for(var r=n;r<e.length;r++)bn(t,e[r])}function X(t){var n=t.f;if(!(n&C)){T(t,d);var e=a,r=i;a=t;try{n&at?wn(t):Pt(t),Ct(t),qt(t);var l=Vt(t);t.teardown=typeof l=="function"?l:null,t.version=Bt}catch(s){Q(s,t,e,r||t.ctx)}finally{a=e}}}function Gt(){if(N>1e3){N=0;try{rn()}catch(t){if(M!==null)Q(t,M,null);else throw t}}N++}function $t(t){var n=t.length;if(n!==0){Gt();var e=I;I=!0;try{for(var r=0;r<n;r++){var l=t[r];l.f&d||(l.f^=d);var s=[];Kt(l,s),In(s)}}finally{I=e}}}function In(t){var n=t.length;if(n!==0)for(var e=0;e<n;e++){var r=t[e];if(!(r.f&(C|q)))try{H(r)&&(X(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Ft(r):r.fn=null))}catch(l){Q(l,r,null,r.ctx)}}}function Nn(){if(L=!1,N>1001)return;const t=A;A=[],$t(t),L||(N=0,M=null)}function tt(t){G===Ut&&(L||(L=!0,queueMicrotask(Nn))),M=t;for(var n=t;n.parent!==null;){n=n.parent;var e=n.f;if(e&(J|m)){if(!(e&d))return;n.f^=d}}A.push(n)}function Kt(t,n){var e=t.first,r=[];t:for(;e!==null;){var l=e.f,s=(l&m)!==0,u=s&&(l&d)!==0,f=e.next;if(!u&&!(l&q))if(l&j){if(s)e.f^=d;else try{H(e)&&X(e)}catch(_){Q(_,e,null,e.ctx)}var v=e.first;if(v!==null){e=v;continue}}else l&Et&&r.push(e);if(f===null){let _=e.parent;for(;_!==null;){if(t===_)break t;var g=_.next;if(g!==null){e=g;continue t}_=_.parent}}e=f}for(var p=0;p<r.length;p++)v=r[p],n.push(v),Kt(v,n)}function Zt(t){var n=G,e=A;try{Gt();const l=[];G=An,A=l,L=!1,$t(e);var r=t?.();return xn(),(A.length>0||l.length>0)&&Zt(),N=0,M=null,r}finally{G=n,A=e}}async function Re(){await Promise.resolve(),Zt()}function Oe(t){var n=t.f,e=(n&y)!==0;if(e&&n&C){var r=Dt(t);return it(t),r}if(o!==null){w!==null&&w.includes(t)&&ln();var l=o.deps;c===null&&l!==null&&l[h]===t?h++:c===null?c=[t]:c.push(t),x!==null&&a!==null&&a.f&d&&!(a.f&m)&&x.includes(t)&&(T(a,k),tt(a))}else if(e&&t.deps===null)for(var s=t,u=s.parent,f=s;u!==null;)if(u.f&y){var v=u;f=v,u=v.parent}else{var g=u;g.deriveds?.includes(f)||(g.deriveds??=[]).push(f);break}return e&&(s=t,H(s)&&bt(s)),t.v}function qn(t){const n=o;try{return o=null,t()}finally{o=n}}const Cn=~(k|U|d);function T(t,n){t.f=t.f&Cn|n}function De(t,n=!1,e){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},B&&!n&&(i.l={s:null,u:null,r1:[],r2:ot(!1)})}function be(t){const n=i;if(n!==null){const u=n.e;if(u!==null){var e=a,r=o;n.e=null;try{for(var l=0;l<u.length;l++){var s=u[l];W(s.effect),z(s.reaction),Nt(s.fn)}}finally{W(e),z(r)}}i=n.p,n.m=!0}return{}}function Ie(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(vt in t)ut(t);else if(!Array.isArray(t))for(let n in t){const e=t[n];typeof e=="object"&&e&&vt in e&&ut(e)}}}function ut(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let r in t)try{ut(t[r],n)}catch{}const e=Wt(t);if(e!==Object.prototype&&e!==Array.prototype&&e!==Map.prototype&&e!==Set.prototype&&e!==Date.prototype){const r=zt(e);for(let l in r){const s=r[l].get;if(s)try{s.call(t)}catch{}}}}}function Ne(t){i===null&&kn(),B&&i.l!==null?Pn(i).m.push(t):hn(()=>{const n=qn(t);if(typeof n=="function")return n})}function Pn(t){var n=t.l;return n.u??={a:[],b:[],m:[]}}export{cn as $,ae as A,ct as B,Oe as C,a as D,wt as E,zn as F,Fn as G,ie as H,an as I,ce as J,F as K,Gn as L,oe as M,ke as N,mn as O,me as P,i as Q,Bn as R,vt as S,Ie as T,le as U,vn as V,Wn as W,Nt as X,yn as Y,Ae as Z,Kn as _,zt as a,Hn as a0,Xn as a1,gt as a2,m as a3,J as a4,W as a5,Jn as a6,B as a7,Qn as a8,te as a9,_t as aA,Vn as aa,Ee as ab,ue as ac,ne as ad,Zt as ae,Mn as af,Re as ag,se as ah,z as ai,o as aj,we as ak,et as al,Qt as am,un as an,b as ao,rt as ap,ee as aq,re as ar,ve as as,xt as at,on as au,At as av,$n as aw,ye as ax,Ln as ay,Te as az,En as b,xe as c,O as d,E as e,hn as f,Wt as g,R as h,de as i,be as j,he as k,_e as l,pe as m,Un as n,Ne as o,De as p,Se as q,yt as r,Xt as s,ge as t,qn as u,fe as v,Yn as w,jn as x,ot as y,Zn as z};
