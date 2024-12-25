import{a7 as xe,au as L,g as T,L as x,at as ht}from"./index-client.H1_RUk74.js";import{w as ve}from"./index.BEr0zjpm.js";new URL("sveltekit-internal://");function pt(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function gt(e){return e.split("%25").map(decodeURI).join("%25")}function mt(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function he({href:e}){return e.split("#")[0]}function _t(e,t,n,r=!1){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return l=>(n(l),i[o](l));t();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];r&&s.push("hash");for(const i of s)Object.defineProperty(a,i,{get(){return t(),e[i]},enumerable:!0,configurable:!0});return a}const yt="/__data.json",wt=".html__data.json";function vt(e){return e.endsWith(".html")?e.replace(/\.html$/,wt):e.replace(/\/$/,"")+yt}function bt(...e){let t=5381;for(const n of e)if(typeof n=="string"){let r=n.length;for(;r;)t=t*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)t=t*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}function kt(e){const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n.buffer}const Be=window.fetch;window.fetch=(e,t)=>((e instanceof Request?e.method:t?.method||"GET")!=="GET"&&M.delete(be(e)),Be(e,t));const M=new Map;function At(e,t){const n=be(e,t),r=document.querySelector(n);if(r?.textContent){let{body:a,...s}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&M.set(n,{body:a,init:s,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=kt(a)),Promise.resolve(new Response(a,s))}return window.fetch(e,t)}function St(e,t,n){if(M.size>0){const r=be(e,n),a=M.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n?.cache))return new Response(a.body,a.init);M.delete(r)}}return window.fetch(t,n)}function be(e,t){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t?.headers||t?.body){const a=[];t.headers&&a.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&a.push(t.body),r+=`[data-hash="${bt(...a)}"]`}return r}const Et=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Rt(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Ut(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return t.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return t.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return pe(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return pe(String.fromCharCode(...c.slice(2).split("-").map(h=>parseInt(h,16))));const d=Et.exec(c),[,p,u,f,g]=d;return t.push({name:f,matcher:g,optional:!!p,rest:!!u,chained:u?l===1&&i[0]==="":!1}),u?"(.*?)":p?"([^/]*)?":"([^/]+?)"}return pe(c)}).join("")}).join("")}/?$`),params:t}}function It(e){return!/^\([^)]+\)$/.test(e)}function Ut(e){return e.slice(1).split("/").filter(It)}function Lt(e,t,n){const r={},a=e.slice(1),s=a.filter(o=>o!==void 0);let i=0;for(let o=0;o<t.length;o+=1){const c=t[o];let l=a[o-i];if(c.chained&&c.rest&&i&&(l=a.slice(o-i,o+1).filter(d=>d).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const d=t[o+1],p=a[o+1];d&&!d.rest&&d.optional&&p&&c.chained&&(i=0),!d&&!p&&Object.keys(r).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function pe(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Tt({nodes:e,server_loads:t,dictionary:n,matchers:r}){const a=new Set(t);return Object.entries(n).map(([o,[c,l,d]])=>{const{pattern:p,params:u}=Rt(o),f={id:o,exec:g=>{const h=p.exec(g);if(h)return Lt(h,u,r)},errors:[1,...d||[]].map(g=>e[g]),layouts:[0,...l||[]].map(i),leaf:s(c)};return f.errors.length=f.layouts.length=Math.max(f.errors.length,f.layouts.length),f});function s(o){const c=o<0;return c&&(o=~o),[c,e[o]]}function i(o){return o===void 0?o:[a.has(o),e[o]]}}function qe(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function Pe(e,t,n=JSON.stringify){const r=n(t);try{sessionStorage[e]=r}catch{}}const U=globalThis.__sveltekit_2bn8qd?.base??"/babsfub.github.io",xt=globalThis.__sveltekit_2bn8qd?.assets??U,Pt="1735162958504",Ge="sveltekit:snapshot",Me="sveltekit:scroll",He="sveltekit:states",Ct="sveltekit:pageurl",F="sveltekit:history",K="sveltekit:navigation",Z={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},z=location.origin;function Ke(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function ke(){return{x:pageXOffset,y:pageYOffset}}function $(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const Ce={...Z,"":Z.hover};function We(e){let t=e.assignedSlot??e.parentNode;return t?.nodeType===11&&(t=t.host),t}function Ye(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=We(e)}}function _e(e,t,n){let r;try{r=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,s=!r||!!a||ie(r,t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=r?.origin===z&&e.hasAttribute("download");return{url:r,external:s,target:a,download:i}}function Q(e){let t=null,n=null,r=null,a=null,s=null,i=null,o=e;for(;o&&o!==document.documentElement;)r===null&&(r=$(o,"preload-code")),a===null&&(a=$(o,"preload-data")),t===null&&(t=$(o,"keepfocus")),n===null&&(n=$(o,"noscroll")),s===null&&(s=$(o,"reload")),i===null&&(i=$(o,"replacestate")),o=We(o);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Ce[r??"off"],preload_data:Ce[a??"off"],keepfocus:c(t),noscroll:c(n),reload:c(s),replace_state:c(i)}}function Oe(e){const t=ve(e);let n=!0;function r(){n=!0,t.update(i=>i)}function a(i){n=!1,t.set(i)}function s(i){let o;return t.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:r,set:a,subscribe:s}}const Je={v:()=>{}};function Ot(){const{set:e,subscribe:t}=ve(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${xt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==Pt;return i&&(e(!0),Je.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:t,check:r}}function ie(e,t,n){return e.origin!==z||!e.pathname.startsWith(t)?!0:n?!(e.pathname===t+"/"||e.protocol==="file:"&&e.pathname.replace(/\/[^/]+\.html?$/,"")===t):!1}function Ne(e){const t=jt(e),n=new ArrayBuffer(t.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,t.charCodeAt(a));return n}const Nt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function jt(e){e.length%4===0&&(e=e.replace(/==?$/,""));let t="",n=0,r=0;for(let a=0;a<e.length;a++)n<<=6,n|=Nt.indexOf(e[a]),r+=6,r===24&&(t+=String.fromCharCode((n&16711680)>>16),t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,t+=String.fromCharCode(n)):r===18&&(n>>=2,t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255)),t}const $t=-1,Dt=-2,Ft=-3,Vt=-4,Bt=-5,qt=-6;function Gt(e,t){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,r=Array(n.length);function a(s,i=!1){if(s===$t)return;if(s===Ft)return NaN;if(s===Vt)return 1/0;if(s===Bt)return-1/0;if(s===qt)return-0;if(i)throw new Error("Invalid input");if(s in r)return r[s];const o=n[s];if(!o||typeof o!="object")r[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],l=t?.[c];if(l)return r[s]=l(a(o[1]));switch(c){case"Date":r[s]=new Date(o[1]);break;case"Set":const d=new Set;r[s]=d;for(let f=1;f<o.length;f+=1)d.add(a(o[f]));break;case"Map":const p=new Map;r[s]=p;for(let f=1;f<o.length;f+=2)p.set(a(o[f]),a(o[f+1]));break;case"RegExp":r[s]=new RegExp(o[1],o[2]);break;case"Object":r[s]=Object(o[1]);break;case"BigInt":r[s]=BigInt(o[1]);break;case"null":const u=Object.create(null);r[s]=u;for(let f=1;f<o.length;f+=2)u[o[f]]=a(o[f+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const f=globalThis[c],g=o[1],h=Ne(g),S=new f(h);r[s]=S;break}case"ArrayBuffer":{const f=o[1],g=Ne(f);r[s]=g;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);r[s]=c;for(let l=0;l<o.length;l+=1){const d=o[l];d!==Dt&&(c[l]=a(d))}}else{const c={};r[s]=c;for(const l in o){const d=o[l];c[l]=a(d)}}return r[s]}return a(0)}const ze=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...ze];const Mt=new Set([...ze]);[...Mt];function Ht(e){return e.filter(t=>t!=null)}class ce{constructor(t,n){this.status=t,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${t}`}}toString(){return JSON.stringify(this.body)}}class Xe{constructor(t,n){this.status=t,this.location=n}}class Ae extends Error{constructor(t,n,r){super(r),this.status=t,this.text=n}}const Kt="x-sveltekit-invalidated",Wt="x-sveltekit-trailing-slash";function ee(e){return e instanceof ce||e instanceof Ae?e.status:500}function Yt(e){return e instanceof Ae?e.text:"Internal Error"}let w,W,ge;const Jt=xe.toString().includes("$$")||/function \w+\(\) \{\}/.test(xe.toString());Jt?(w={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},W={current:null},ge={current:!1}):(w=new class{#e=L({});get data(){return T(this.#e)}set data(t){x(this.#e,t)}#t=L(null);get form(){return T(this.#t)}set form(t){x(this.#t,t)}#n=L(null);get error(){return T(this.#n)}set error(t){x(this.#n,t)}#r=L({});get params(){return T(this.#r)}set params(t){x(this.#r,t)}#a=L({id:null});get route(){return T(this.#a)}set route(t){x(this.#a,t)}#o=L({});get state(){return T(this.#o)}set state(t){x(this.#o,t)}#s=L(-1);get status(){return T(this.#s)}set status(t){x(this.#s,t)}#i=L(new URL("https://example.com"));get url(){return T(this.#i)}set url(t){x(this.#i,t)}},W=new class{#e=L(null);get current(){return T(this.#e)}set current(t){x(this.#e,t)}},ge=new class{#e=L(!1);get current(){return T(this.#e)}set current(t){x(this.#e,t)}},Je.v=()=>ge.current=!0);function zt(e){Object.assign(w,e)}const Xt=new Set(["icon","shortcut icon","apple-touch-icon"]),j=qe(Me)??{},Y=qe(Ge)??{},N={url:Oe({}),page:Oe({}),navigating:ve(null),updated:Ot()};function Se(e){j[e]=ke()}function Zt(e,t){let n=e+1;for(;j[n];)delete j[n],n+=1;for(n=t+1;Y[n];)delete Y[n],n+=1}function B(e){return location.href=e.href,new Promise(()=>{})}async function Ze(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(U||"/");e&&await e.update()}}function je(){}let le,ye,te,C,we,b;const Qe=[],ne=[];let O=null;const et=[],Qt=[];let D=[],_={branch:[],error:null,url:null},Ee=!1,re=!1,$e=!0,J=!1,q=!1,tt=!1,Re=!1,Ie,k,I,ae;const H=new Set;async function gn(e,t,n){document.URL!==location.href&&(location.href=location.href),b=e,await e.hooks.init?.(),le=Tt(e),C=document.documentElement,we=t,ye=e.nodes[0],te=e.nodes[1],ye(),te(),k=history.state?.[F],I=history.state?.[K],k||(k=I=Date.now(),history.replaceState({...history.state,[F]:k,[K]:I},""));const r=j[k];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await cn(we,n):on(location.href,{replaceState:!0}),sn()}function en(){Qe.length=0,Re=!1}function nt(e){ne.some(t=>t?.snapshot)&&(Y[e]=ne.map(t=>t?.snapshot?.capture()))}function rt(e){Y[e]?.forEach((t,n)=>{ne[n]?.snapshot?.restore(t)})}function De(){Se(k),Pe(Me,j),nt(I),Pe(Ge,Y)}async function at(e,t,n,r){return G({type:"goto",url:Ke(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:r,accept:()=>{t.invalidateAll&&(Re=!0)}})}async function tn(e){if(e.id!==O?.id){const t={};H.add(t),O={id:e.id,token:t,promise:st({...e,preload:t}).then(n=>(H.delete(t),n.type==="loaded"&&n.state.error&&(O=null),n))}}return O.promise}async function me(e){const t=le.find(n=>n.exec(it(e)));t&&await Promise.all([...t.layouts,t.leaf].map(n=>n?.[1]()))}function ot(e,t,n){_=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(w,e.props.page),Ie=new b.root({target:t,props:{...e.props,stores:N,components:ne},hydrate:n,sync:!1}),rt(I);const a={from:null,to:{params:_.params,route:{id:_.route?.id??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};D.forEach(s=>s(a)),re=!0}function oe({url:e,params:t,branch:n,status:r,error:a,route:s,form:i}){let o="never";if(U&&(e.pathname===U||e.pathname===U+"/"))o="always";else for(const f of n)f?.slash!==void 0&&(o=f.slash);e.pathname=pt(e.pathname,o),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:a,route:s},props:{constructors:Ht(n).map(f=>f.node.component),page:w}};i!==void 0&&(c.props.form=i);let l={},d=!w,p=0;for(let f=0;f<Math.max(n.length,_.branch.length);f+=1){const g=n[f],h=_.branch[f];g?.data!==h?.data&&(d=!0),g&&(l={...l,...g.data},d&&(c.props[`data_${p}`]=l),p+=1)}return(!_.url||e.href!==_.url.href||_.error!==a||i!==void 0&&i!==w.form||d)&&(c.props.page={error:a,params:t,route:{id:s?.id??null},state:{},status:r,url:new URL(e),form:i??null,data:d?l:w.data}),c}async function Ue({loader:e,parent:t,url:n,params:r,route:a,server_data_node:s}){let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if(l.universal?.load){let d=function(...u){for(const f of u){const{href:g}=new URL(f,n);c.dependencies.add(g)}};const p={route:new Proxy(a,{get:(u,f)=>(o&&(c.route=!0),u[f])}),params:new Proxy(r,{get:(u,f)=>(o&&c.params.add(f),u[f])}),data:s?.data??null,url:_t(n,()=>{o&&(c.url=!0)},u=>{o&&c.search_params.add(u)},b.hash),async fetch(u,f){let g;u instanceof Request?(g=u.url,f={body:u.method==="GET"||u.method==="HEAD"?void 0:await u.blob(),cache:u.cache,credentials:u.credentials,headers:[...u.headers].length?u.headers:void 0,integrity:u.integrity,keepalive:u.keepalive,method:u.method,mode:u.mode,redirect:u.redirect,referrer:u.referrer,referrerPolicy:u.referrerPolicy,signal:u.signal,...f}):g=u;const h=new URL(g,n);return o&&d(h.href),h.origin===n.origin&&(g=h.href.slice(n.origin.length)),re?St(g,h.href,f):At(g,f)},setHeaders:()=>{},depends:d,parent(){return o&&(c.parent=!0),t()},untrack(u){o=!1;try{return u()}finally{o=!0}}};i=await l.universal.load.call(null,p)??null}return{node:l,loader:e,server:s,universal:l.universal?.load?{type:"data",data:i,uses:c}:null,data:i??s?.data??null,slash:l.universal?.trailingSlash??s?.slash}}function Fe(e,t,n,r,a,s){if(Re)return!0;if(!a)return!1;if(a.parent&&e||a.route&&t||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(s[i]!==_.params[i])return!0;for(const i of a.dependencies)if(Qe.some(o=>o(new URL(i))))return!0;return!1}function Le(e,t){return e?.type==="data"?e:e?.type==="skip"?t??null:null}function nn(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const r of n){const a=e.searchParams.getAll(r),s=t.searchParams.getAll(r);a.every(i=>s.includes(i))&&s.every(i=>a.includes(i))&&n.delete(r)}return n}function Ve({error:e,url:t,route:n,params:r}){return{type:"loaded",state:{error:e,url:t,route:n,params:r,branch:[]},props:{page:w,constructors:[]}}}async function st({id:e,invalidating:t,url:n,params:r,route:a,preload:s}){if(O?.id===e)return H.delete(O.token),O.promise;const{errors:i,layouts:o,leaf:c}=a,l=[...o,c];i.forEach(m=>m?.().catch(()=>{})),l.forEach(m=>m?.[1]().catch(()=>{}));let d=null;const p=_.url?e!==se(_.url):!1,u=_.route?a.id!==_.route.id:!1,f=nn(_.url,n);let g=!1;const h=l.map((m,y)=>{const R=_.branch[y],A=!!m?.[0]&&(R?.loader!==m[1]||Fe(g,u,p,f,R.server?.uses,r));return A&&(g=!0),A});if(h.some(Boolean)){try{d=await ft(n,h)}catch(m){const y=await V(m,{url:n,params:r,route:{id:e}});return H.has(s)?Ve({error:y,url:n,params:r,route:a}):fe({status:ee(m),error:y,url:n,route:a})}if(d.type==="redirect")return d}const S=d?.nodes;let E=!1;const P=l.map(async(m,y)=>{if(!m)return;const R=_.branch[y],A=S?.[y];if((!A||A.type==="skip")&&m[1]===R?.loader&&!Fe(E,u,p,f,R.universal?.uses,r))return R;if(E=!0,A?.type==="error")throw A;return Ue({loader:m[1],url:n,params:r,route:a,parent:async()=>{const ue={};for(let de=0;de<y;de+=1)Object.assign(ue,(await P[de])?.data);return ue},server_data_node:Le(A===void 0&&m[0]?{type:"skip"}:A??null,m[0]?R?.server:void 0)})});for(const m of P)m.catch(()=>{});const v=[];for(let m=0;m<l.length;m+=1)if(l[m])try{v.push(await P[m])}catch(y){if(y instanceof Xe)return{type:"redirect",location:y.location};if(H.has(s))return Ve({error:await V(y,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let R=ee(y),A;if(S?.includes(y))R=y.status??R,A=y.error;else if(y instanceof ce)A=y.body;else{if(await N.updated.check())return await Ze(),await B(n);A=await V(y,{params:r,url:n,route:{id:a.id}})}const X=await rn(m,v,i);return X?oe({url:n,params:r,branch:v.slice(0,X.idx).concat(X.node),status:R,error:A,route:a}):await lt(n,{id:a.id},A,R)}else v.push(void 0);return oe({url:n,params:r,branch:v,status:200,error:null,route:a,form:t?void 0:null})}async function rn(e,t,n){for(;e--;)if(n[e]){let r=e;for(;!t[r];)r-=1;try{return{idx:r+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function fe({status:e,error:t,url:n,route:r}){const a={};let s=null;if(b.server_loads[0]===0)try{const l=await ft(n,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;s=l.nodes[0]??null}catch{(n.origin!==z||n.pathname!==location.pathname||Ee)&&await B(n)}const o=await Ue({loader:ye,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Le(s)}),c={node:await te(),loader:te,universal:null,server:null,data:null};return oe({url:n,params:a,branch:[o,c],status:e,error:t,route:null})}function Te(e,t){if(!e||ie(e,U,b.hash))return;let n;try{if(n=b.hooks.reroute({url:new URL(e)})??e,typeof n=="string"){const a=new URL(e);b.hash?a.hash=n:a.pathname=n,n=a}}catch{return}const r=it(n);for(const a of le){const s=a.exec(r);if(s)return{id:se(e),invalidating:t,route:a,params:mt(s),url:e}}}function it(e){return gt(b.hash?e.hash.replace(/^#/,"").replace(/[?#].+/,""):e.pathname.slice(U.length))||"/"}function se(e){return(b.hash?e.hash.replace(/^#/,""):e.pathname)+e.search}function ct({url:e,type:t,intent:n,delta:r}){let a=!1;const s=dt(_,n,e,t);r!==void 0&&(s.navigation.delta=r);const i={...s.navigation,cancel:()=>{a=!0,s.reject(new Error("navigation cancelled"))}};return J||et.forEach(o=>o(i)),a?null:s}async function G({type:e,url:t,popped:n,keepfocus:r,noscroll:a,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:l=je,block:d=je}){const p=Te(t,!1),u=ct({url:t,type:e,delta:n?.delta,intent:p});if(!u){d();return}const f=k,g=I;l(),J=!0,re&&N.navigating.set(W.current=u.navigation),ae=c;let h=p&&await st(p);if(!h){if(ie(t,U,b.hash))return await B(t);h=await lt(t,{id:null},await V(new Ae(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=p?.url||t,ae!==c)return u.reject(new Error("navigation aborted")),!1;if(h.type==="redirect")if(o>=20)h=await fe({status:500,error:await V(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return at(new URL(h.location,t).href,{},o+1,c),!1;else h.props.page.status>=400&&await N.updated.check()&&(await Ze(),await B(t));if(en(),Se(f),nt(g),h.props.page.url.pathname!==t.pathname&&(t.pathname=h.props.page.url.pathname),i=n?n.state:i,!n){const v=s?0:1,m={[F]:k+=v,[K]:I+=v,[He]:i};(s?history.replaceState:history.pushState).call(history,m,"",t),s||Zt(k,I)}if(O=null,h.props.page.state=i,re){_=h.state,h.props.page&&(h.props.page.url=t);const v=(await Promise.all(Qt.map(m=>m(u.navigation)))).filter(m=>typeof m=="function");if(v.length>0){let m=function(){D=D.filter(y=>!v.includes(y))};v.push(m),D.push(...v)}Ie.$set(h.props),zt(h.props.page),tt=!0}else ot(h,we,!1);const{activeElement:S}=document;await ht();const E=n?n.scroll:a?ke():null;if($e){const v=t.hash&&document.getElementById(decodeURIComponent(b.hash?t.hash.split("#")[2]??"":t.hash.slice(1)));E?scrollTo(E.x,E.y):v?v.scrollIntoView():scrollTo(0,0)}const P=document.activeElement!==S&&document.activeElement!==document.body;!r&&!P&&ln(),$e=!0,h.props.page&&Object.assign(w,h.props.page),J=!1,e==="popstate"&&rt(I),u.fulfil(void 0),D.forEach(v=>v(u.navigation)),N.navigating.set(W.current=null)}async function lt(e,t,n,r){return e.origin===z&&e.pathname===location.pathname&&!Ee?await fe({status:r,error:n,url:e,route:t}):await B(e)}function an(){let e;C.addEventListener("mousemove",s=>{const i=s.target;clearTimeout(e),e=setTimeout(()=>{r(i,2)},20)});function t(s){s.defaultPrevented||r(s.composedPath()[0],1)}C.addEventListener("mousedown",t),C.addEventListener("touchstart",t,{passive:!0});const n=new IntersectionObserver(s=>{for(const i of s)i.isIntersecting&&(me(new URL(i.target.href)),n.unobserve(i.target))},{threshold:0});function r(s,i){const o=Ye(s,C);if(!o)return;const{url:c,external:l,download:d}=_e(o,U,b.hash);if(l||d)return;const p=Q(o),u=c&&se(_.url)===se(c);if(!p.reload&&!u)if(i<=p.preload_data){const f=Te(c,!1);f&&tn(f)}else i<=p.preload_code&&me(c)}function a(){n.disconnect();for(const s of C.querySelectorAll("a")){const{url:i,external:o,download:c}=_e(s,U,b.hash);if(o||c)continue;const l=Q(s);l.reload||(l.preload_code===Z.viewport&&n.observe(s),l.preload_code===Z.eager&&me(i))}}D.push(a),a()}function V(e,t){if(e instanceof ce)return e.body;const n=ee(e),r=Yt(e);return b.hooks.handleError({error:e,event:t,status:n,message:r})??{message:r}}function on(e,t={}){return e=new URL(Ke(e)),e.origin!==z?Promise.reject(new Error("goto: invalid URL")):at(e,t,0)}function sn(){history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let n=!1;if(De(),!J){const r=dt(_,void 0,null,"leave"),a={...r.navigation,cancel:()=>{n=!0,r.reject(new Error("navigation cancelled"))}};et.forEach(s=>s(a))}n?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&De()}),navigator.connection?.saveData||an(),C.addEventListener("click",async t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const n=Ye(t.composedPath()[0],C);if(!n)return;const{url:r,external:a,target:s,download:i}=_e(n,U,b.hash);if(!r)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const o=Q(n);if(!(n instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||i)return;const[l,d]=(b.hash?r.hash.replace(/^#/,""):r.href).split("#"),p=l===he(location);if(a||o.reload&&(!p||!d)){ct({url:r,type:"link"})?J=!0:t.preventDefault();return}if(d!==void 0&&p){const[,u]=_.url.href.split("#");if(u===d){if(t.preventDefault(),d===""||d==="top"&&n.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const f=n.ownerDocument.getElementById(decodeURIComponent(d));f&&(f.scrollIntoView(),f.focus())}return}if(q=!0,Se(k),e(r),!o.replace_state)return;q=!1}t.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),G({type:"link",url:r,keepfocus:o.keepfocus,noscroll:o.noscroll,replace_state:o.replace_state??r.href===location.href})}),C.addEventListener("submit",t=>{if(t.defaultPrevented)return;const n=HTMLFormElement.prototype.cloneNode.call(t.target),r=t.submitter;if((r?.formTarget||n.target)==="_blank"||(r?.formMethod||n.method)!=="get")return;const i=new URL(r?.hasAttribute("formaction")&&r?.formAction||n.action);if(ie(i,U,!1))return;const o=t.target,c=Q(o);if(c.reload)return;t.preventDefault(),t.stopPropagation();const l=new FormData(o),d=r?.getAttribute("name");d&&l.append(d,r?.getAttribute("value")??""),i.search=new URLSearchParams(l).toString(),G({type:"form",url:i,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??i.href===location.href})}),addEventListener("popstate",async t=>{if(t.state?.[F]){const n=t.state[F];if(ae={},n===k)return;const r=j[n],a=t.state[He]??{},s=new URL(t.state[Ct]??location.href),i=t.state[K],o=he(location)===he(_.url);if(i===I&&(tt||o)){e(s),j[k]=ke(),r&&scrollTo(r.x,r.y),a!==w.state&&(w.state=a,Ie.$set({page:w})),k=n;return}const l=n-k;await G({type:"popstate",url:s,popped:{state:a,scroll:r,delta:l},accept:()=>{k=n,I=i},block:()=>{history.go(-l)},nav_token:ae})}else if(!q){const n=new URL(location.href);e(n)}}),addEventListener("hashchange",()=>{q?(q=!1,history.replaceState({...history.state,[F]:++k,[K]:I},"",location.href)):b.hash&&_.url.hash===location.hash&&G({type:"goto",url:_.url})});for(const t of document.querySelectorAll("link"))Xt.has(t.rel)&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&N.navigating.set(W.current=null)});function e(t){_.url=w.url=t,N.page.set({data:w.data,error:w.error,form:w.form,params:w.params,route:w.route,state:w.state,status:w.status,url:t}),N.page.notify()}}async function cn(e,{status:t=200,error:n,node_ids:r,params:a,route:s,data:i,form:o}){Ee=!0;const c=new URL(location.href);({params:a={},route:s={id:null}}=Te(c,!1)||{});let l,d=!0;try{const p=r.map(async(g,h)=>{const S=i[h];return S?.uses&&(S.uses=ut(S.uses)),Ue({loader:b.nodes[g],url:c,params:a,route:s,parent:async()=>{const E={};for(let P=0;P<h;P+=1)Object.assign(E,(await p[P]).data);return E},server_data_node:Le(S)})}),u=await Promise.all(p),f=le.find(({id:g})=>g===s.id);if(f){const g=f.layouts;for(let h=0;h<g.length;h++)g[h]||u.splice(h,0,void 0)}l=oe({url:c,params:a,branch:u,status:t,error:n,form:o,route:f??null})}catch(p){if(p instanceof Xe){await B(new URL(p.location,location.href));return}l=await fe({status:ee(p),error:await V(p,{url:c,params:a,route:s}),url:c,route:s}),e.textContent="",d=!1}l.props.page&&(l.props.page.state={}),ot(l,e,d)}async function ft(e,t){const n=new URL(e);n.pathname=vt(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append(Wt,"1"),n.searchParams.append(Kt,t.map(a=>a?"1":"0").join(""));const r=await Be(n.href);if(!r.ok){let a;throw r.headers.get("content-type")?.includes("application/json")?a=await r.json():r.status===404?a="Not Found":r.status===500&&(a="Internal Error"),new ce(r.status,a)}return new Promise(async a=>{const s=new Map,i=r.body.getReader(),o=new TextDecoder;function c(d){return Gt(d,{...b.decoders,Promise:p=>new Promise((u,f)=>{s.set(p,{fulfil:u,reject:f})})})}let l="";for(;;){const{done:d,value:p}=await i.read();if(d&&!l)break;for(l+=!p&&l?`
`:o.decode(p,{stream:!0});;){const u=l.indexOf(`
`);if(u===-1)break;const f=JSON.parse(l.slice(0,u));if(l=l.slice(u+1),f.type==="redirect")return a(f);if(f.type==="data")f.nodes?.forEach(g=>{g?.type==="data"&&(g.uses=ut(g.uses),g.data=c(g.data))}),a(f);else if(f.type==="chunk"){const{id:g,data:h,error:S}=f,E=s.get(g);s.delete(g),S?E.reject(c(S)):E.fulfil(c(h))}}}})}function ut(e){return{dependencies:new Set(e?.dependencies??[]),params:new Set(e?.params??[]),parent:!!e?.parent,route:!!e?.route,url:!!e?.url,search_params:new Set(e?.search_params??[])}}function ln(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const t=document.body,n=t.getAttribute("tabindex");t.tabIndex=-1,t.focus({preventScroll:!0,focusVisible:!1}),n!==null?t.setAttribute("tabindex",n):t.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let s=0;s<r.rangeCount;s+=1)a.push(r.getRangeAt(s));setTimeout(()=>{if(r.rangeCount===a.length){for(let s=0;s<r.rangeCount;s+=1){const i=a[s],o=r.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}r.removeAllRanges()}})}}}function dt(e,t,n,r){let a,s;const i=new Promise((c,l)=>{a=c,s=l});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:e.route?.id??null},url:e.url},to:n&&{params:t?.params??null,route:{id:t?.route?.id??null},url:n},willUnload:!t,type:r,complete:i},fulfil:a,reject:s}}export{gn as a,w as p,N as s,ge as u};
