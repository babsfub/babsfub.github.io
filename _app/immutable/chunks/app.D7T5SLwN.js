import{h as i,g as f,q as l,L as h,a as _}from"./index-client.DspN_BWi.js";import{a as m}from"./disclose-version.DFkSA_UT.js";import{g as d,w as g}from"./index.Dd4GrStr.js";function w(r){if(i){var e=!1,s=()=>{if(!e){if(e=!0,r.hasAttribute("value")){var t=r.value;c(r,"value",null),r.value=t}if(r.hasAttribute("checked")){var o=r.checked;c(r,"checked",null),r.checked=o}}};r.__on_r=s,l(s),m()}}function c(r,e,s,t){var o=r.__attributes??={};i&&(o[e]=r.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&r.nodeName==="LINK")||o[e]!==(o[e]=s)&&(e==="style"&&"__styles"in r&&(r.__styles={}),e==="loading"&&(r[h]=s),s==null?r.removeAttribute(e):typeof s!="string"&&u(r).includes(e)?r[e]=s:r.setAttribute(e,s))}var n=new Map;function u(r){var e=n.get(r.nodeName);if(e)return e;n.set(r.nodeName,e=[]);for(var s,t=r,o=Element.prototype;o!==t;){s=_(t);for(var a in s)s[a].set&&e.push(a);t=f(t)}return e}function p(){const r=g({networkName:"Polygon",chainId:137,connectedAddress:void 0,isWalletConnected:!1,theme:"light"});return window.matchMedia("(prefers-color-scheme: dark)").matches&&(r.update(s=>({...s,theme:"dark"})),document.documentElement.classList.add("dark")),{subscribe:r.subscribe,updateWalletConnection:(e,s)=>{r.update(t=>({...t,connectedAddress:e,isWalletConnected:s}))},toggleTheme:()=>{r.update(e=>{const s=e.theme==="light"?"dark":"light";return document.documentElement.classList.toggle("dark"),{...e,theme:s}})},getTheme:()=>d(r).theme,getShortAddress:()=>{const e=d(r);return e.connectedAddress?`${e.connectedAddress.slice(0,6)}...${e.connectedAddress.slice(-4)}`:""}}}const y=p();export{y as a,w as r,c as s};
