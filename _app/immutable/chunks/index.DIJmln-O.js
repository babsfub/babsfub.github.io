import{n as b,u as m,s as q,r as x}from"./index-client.C0NT5ecD.js";function _(e,t,s){if(e==null)return t(void 0),s&&s(void 0),b;const r=m(()=>e.subscribe(t,s));return r.unsubscribe?()=>r.unsubscribe():r}const f=[];function z(e,t){return{subscribe:A(e,t).subscribe}}function A(e,t=b){let s=null;const r=new Set;function i(u){if(q(e,u)&&(e=u,s)){const o=!f.length;for(const n of r)n[1](),f.push(n,e);if(o){for(let n=0;n<f.length;n+=2)f[n][0](f[n+1]);f.length=0}}}function l(u){i(u(e))}function a(u,o=b){const n=[u,o];return r.add(n),r.size===1&&(s=t(i,l)||b),u(e),()=>{r.delete(n),r.size===0&&s&&(s(),s=null)}}return{set:i,update:l,subscribe:a}}function B(e,t,s){const r=!Array.isArray(e),i=r?[e]:e;if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const l=t.length<2;return z(s,(a,u)=>{let o=!1;const n=[];let d=0,p=b;const y=()=>{if(d)return;p();const c=t(r?n[0]:n,a,u);l?a(c):p=typeof c=="function"?c:b},h=i.map((c,g)=>_(c,w=>{n[g]=w,d&=~(1<<g),o&&y()},()=>{d|=1<<g}));return o=!0,y(),function(){x(h),p(),o=!1}})}function E(e){let t;return _(e,s=>t=s)(),t}export{B as d,E as g,A as w};
