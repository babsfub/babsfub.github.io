import{F as k,G as y,H as N,I as w,J as A,K as L,L as P,M as E,N as g,O as m,P as S,Q as I,U as q,R as B,T as C,y as O,V as U,S as F,W as M,X as $,n as T,q as x,d as D,c as H}from"./index-client.B4cum82c.js";function G(e,r,a=!1){y&&N();var s=e,n=null,t=null,i=q,o=a?w:0,h=!1;const c=(b,f=!0)=>{h=!0,l(f,b)},l=(b,f)=>{if(i===(i=b))return;let u=!1;if(y){const d=s.data===A;!!i===d&&(s=L(),P(s),E(!1),u=!0)}i?(n?g(n):f&&(n=m(()=>f(s))),t&&S(t,()=>{t=null})):(t?g(t):f&&(t=m(()=>f(s))),n&&S(n,()=>{n=null})),u&&E(!0)};k(()=>{h=!1,r(c),h||l(null,null)},o),y&&(s=I)}function p(e,r){return e===r||e?.[F]===r}function J(e={},r,a,s){return B(()=>{var n,t;return C(()=>{n=t,t=[],O(()=>{e!==a(...t)&&(r(e,...t),n&&p(a(...n),e)&&r(null,...n))})}),()=>{U(()=>{t&&p(a(...t),e)&&r(null,...t)})}}),e}let v=!1;function K(e,r,a){const s=a[r]??={store:null,source:$(void 0),unsubscribe:T};if(s.store!==e)if(s.unsubscribe(),s.store=e,e==null)s.source.v=void 0,s.unsubscribe=T;else{var n=!0;s.unsubscribe=x(e,t=>{n?s.source.v=t:H(s.source,t)}),n=!1}return D(s.source)}function Q(){const e={};return M(()=>{for(var r in e)e[r].unsubscribe()}),e}function V(e){var r=v;try{return v=!1,[e(),v]}finally{v=r}}const W="modulepreload",Y=function(e,r){return new URL(e,r).href},R={},X=function(r,a,s){let n=Promise.resolve();if(a&&a.length>0){const i=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),h=o?.nonce||o?.getAttribute("nonce");n=Promise.allSettled(a.map(c=>{if(c=Y(c,s),c in R)return;R[c]=!0;const l=c.endsWith(".css"),b=l?'[rel="stylesheet"]':"";if(!!s)for(let d=i.length-1;d>=0;d--){const _=i[d];if(_.href===c&&(!l||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${b}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":W,l||(u.as="script"),u.crossOrigin="",u.href=c,h&&u.setAttribute("nonce",h),document.head.appendChild(u),l)return new Promise((d,_)=>{u.addEventListener("load",d),u.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function t(i){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i}return n.then(i=>{for(const o of i||[])o.status==="rejected"&&t(o.reason);return r().catch(t)})};export{X as _,K as a,J as b,V as c,G as i,Q as s};
