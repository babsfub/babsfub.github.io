import{S as R,o as D,b as j,c as _,d as B,e as m,f as P,U as c,i as w,j as C,k as U,g as q,l as M,m as $,h as S,p as F,E as H,H as K,t as Y,v as z,w as T,x,y as A,z as L,A as W}from"./index-client.C0NT5ecD.js";function b(f,v=null,g){if(typeof f!="object"||f===null||R in f)return f;const h=q(f);if(h!==D&&h!==j)return f;var r=new Map,u=M(f),o=_(0);u&&r.set("length",_(f.length));var l;return new Proxy(f,{defineProperty(i,e,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&B();var n=r.get(e);return n===void 0?(n=_(t.value),r.set(e,n)):m(n,b(t.value,l)),!0},deleteProperty(i,e){var t=r.get(e);if(t===void 0)e in i&&r.set(e,_(c));else{if(u&&typeof e=="string"){var n=r.get("length"),s=Number(e);Number.isInteger(s)&&s<n.v&&m(n,s)}m(t,c),I(o)}return!0},get(i,e,t){if(e===R)return f;var n=r.get(e),s=e in i;if(n===void 0&&(!s||P(i,e)?.writable)&&(n=_(b(s?i[e]:c,l)),r.set(e,n)),n!==void 0){var a=w(n);return a===c?void 0:a}return Reflect.get(i,e,t)},getOwnPropertyDescriptor(i,e){var t=Reflect.getOwnPropertyDescriptor(i,e);if(t&&"value"in t){var n=r.get(e);n&&(t.value=w(n))}else if(t===void 0){var s=r.get(e),a=s?.v;if(s!==void 0&&a!==c)return{enumerable:!0,configurable:!0,value:a,writable:!0}}return t},has(i,e){if(e===R)return!0;var t=r.get(e),n=t!==void 0&&t.v!==c||Reflect.has(i,e);if(t!==void 0||C!==null&&(!n||P(i,e)?.writable)){t===void 0&&(t=_(n?b(i[e],l):c),r.set(e,t));var s=w(t);if(s===c)return!1}return n},set(i,e,t,n){var s=r.get(e),a=e in i;if(u&&e==="length")for(var d=t;d<s.v;d+=1){var y=r.get(d+"");y!==void 0?m(y,c):d in i&&(y=_(c),r.set(d+"",y))}s===void 0?(!a||P(i,e)?.writable)&&(s=_(void 0),m(s,b(t,l)),r.set(e,s)):(a=s.v!==c,m(s,b(t,l)));var N=Reflect.getOwnPropertyDescriptor(i,e);if(N?.set&&N.set.call(n,t),!a){if(u&&typeof e=="string"){var k=r.get("length"),E=Number(e);Number.isInteger(E)&&E>=k.v&&m(k,E+1)}I(o)}return!0},ownKeys(i){w(o);var e=Reflect.ownKeys(i).filter(s=>{var a=r.get(s);return a===void 0||a.v!==c});for(var[t,n]of r)n.v!==c&&!(t in i)&&e.push(t);return e},setPrototypeOf(){U()}})}function I(f,v=1){m(f,f.v+v)}function Q(f,v,g=!1){S&&F();var h=f,r=null,u=null,o=c,l=g?H:0,i=!1;const e=(n,s=!0)=>{i=!0,t(s,n)},t=(n,s)=>{if(o===(o=n))return;let a=!1;if(S){const d=h.data===K;!!o===d&&(h=Y(),z(h),T(!1),a=!0)}o?(r?x(r):s&&(r=A(()=>s(h))),u&&L(u,()=>{u=null})):(u?x(u):s&&(u=A(()=>s(h))),r&&L(r,()=>{r=null})),a&&T(!0)};$(()=>{i=!1,v(e),i||t(null,null)},l),S&&(h=W)}const Z=function(){const v=typeof document<"u"&&document.createElement("link").relList;return v&&v.supports&&v.supports("modulepreload")?"modulepreload":"preload"}(),G=function(f,v){return new URL(f,v).href},O={},V=function(v,g,h){let r=Promise.resolve();if(g&&g.length>0){const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),i=l?.nonce||l?.getAttribute("nonce");r=Promise.allSettled(g.map(e=>{if(e=G(e,h),e in O)return;O[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(!!h)for(let d=o.length-1;d>=0;d--){const y=o[d];if(y.href===e&&(!t||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${n}`))return;const a=document.createElement("link");if(a.rel=t?"stylesheet":Z,t||(a.as="script"),a.crossOrigin="",a.href=e,i&&a.setAttribute("nonce",i),document.head.appendChild(a),t)return new Promise((d,y)=>{a.addEventListener("load",d),a.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${e}`)))})}))}function u(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return r.then(o=>{for(const l of o||[])l.status==="rejected"&&u(l.reason);return v().catch(u)})};export{V as _,Q as i,b as p};