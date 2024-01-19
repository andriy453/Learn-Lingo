var yT=Object.defineProperty;var vT=(t,e,n)=>e in t?yT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var _T=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var vd=(t,e,n)=>(vT(t,typeof e!="symbol"?e+"":e,n),n);var Z5=_T((Tt,It)=>{function wT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function gp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var $0={exports:{}},lc={},F0={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ba=Symbol.for("react.element"),ET=Symbol.for("react.portal"),ST=Symbol.for("react.fragment"),CT=Symbol.for("react.strict_mode"),xT=Symbol.for("react.profiler"),TT=Symbol.for("react.provider"),IT=Symbol.for("react.context"),kT=Symbol.for("react.forward_ref"),bT=Symbol.for("react.suspense"),PT=Symbol.for("react.memo"),RT=Symbol.for("react.lazy"),zg=Symbol.iterator;function OT(t){return t===null||typeof t!="object"?null:(t=zg&&t[zg]||t["@@iterator"],typeof t=="function"?t:null)}var j0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U0=Object.assign,z0={};function zs(t,e,n){this.props=t,this.context=e,this.refs=z0,this.updater=n||j0}zs.prototype.isReactComponent={};zs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};zs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function B0(){}B0.prototype=zs.prototype;function yp(t,e,n){this.props=t,this.context=e,this.refs=z0,this.updater=n||j0}var vp=yp.prototype=new B0;vp.constructor=yp;U0(vp,zs.prototype);vp.isPureReactComponent=!0;var Bg=Array.isArray,V0=Object.prototype.hasOwnProperty,_p={current:null},W0={key:!0,ref:!0,__self:!0,__source:!0};function H0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)V0.call(e,r)&&!W0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ba,type:t,key:s,ref:o,props:i,_owner:_p.current}}function NT(t,e){return{$$typeof:ba,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function wp(t){return typeof t=="object"&&t!==null&&t.$$typeof===ba}function AT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Vg=/\/+/g;function _d(t,e){return typeof t=="object"&&t!==null&&t.key!=null?AT(""+t.key):e.toString(36)}function kl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ba:case ET:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+_d(o,0):r,Bg(i)?(n="",t!=null&&(n=t.replace(Vg,"$&/")+"/"),kl(i,e,n,"",function(u){return u})):i!=null&&(wp(i)&&(i=NT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Vg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Bg(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+_d(s,a);o+=kl(s,e,n,l,i)}else if(l=OT(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+_d(s,a++),o+=kl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ja(t,e,n){if(t==null)return t;var r=[],i=0;return kl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function DT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ot={current:null},bl={transition:null},LT={ReactCurrentDispatcher:ot,ReactCurrentBatchConfig:bl,ReactCurrentOwner:_p};q.Children={map:Ja,forEach:function(t,e,n){Ja(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ja(t,function(){e++}),e},toArray:function(t){return Ja(t,function(e){return e})||[]},only:function(t){if(!wp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};q.Component=zs;q.Fragment=ST;q.Profiler=xT;q.PureComponent=yp;q.StrictMode=CT;q.Suspense=bT;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=LT;q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=U0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=_p.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)V0.call(e,l)&&!W0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ba,type:t.type,key:i,ref:s,props:r,_owner:o}};q.createContext=function(t){return t={$$typeof:IT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:TT,_context:t},t.Consumer=t};q.createElement=H0;q.createFactory=function(t){var e=H0.bind(null,t);return e.type=t,e};q.createRef=function(){return{current:null}};q.forwardRef=function(t){return{$$typeof:kT,render:t}};q.isValidElement=wp;q.lazy=function(t){return{$$typeof:RT,_payload:{_status:-1,_result:t},_init:DT}};q.memo=function(t,e){return{$$typeof:PT,type:t,compare:e===void 0?null:e}};q.startTransition=function(t){var e=bl.transition;bl.transition={};try{t()}finally{bl.transition=e}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(t,e){return ot.current.useCallback(t,e)};q.useContext=function(t){return ot.current.useContext(t)};q.useDebugValue=function(){};q.useDeferredValue=function(t){return ot.current.useDeferredValue(t)};q.useEffect=function(t,e){return ot.current.useEffect(t,e)};q.useId=function(){return ot.current.useId()};q.useImperativeHandle=function(t,e,n){return ot.current.useImperativeHandle(t,e,n)};q.useInsertionEffect=function(t,e){return ot.current.useInsertionEffect(t,e)};q.useLayoutEffect=function(t,e){return ot.current.useLayoutEffect(t,e)};q.useMemo=function(t,e){return ot.current.useMemo(t,e)};q.useReducer=function(t,e,n){return ot.current.useReducer(t,e,n)};q.useRef=function(t){return ot.current.useRef(t)};q.useState=function(t){return ot.current.useState(t)};q.useSyncExternalStore=function(t,e,n){return ot.current.useSyncExternalStore(t,e,n)};q.useTransition=function(){return ot.current.useTransition()};q.version="18.2.0";F0.exports=q;var x=F0.exports;const pt=gp(x),zo=wT({__proto__:null,default:pt},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var MT=x,$T=Symbol.for("react.element"),FT=Symbol.for("react.fragment"),jT=Object.prototype.hasOwnProperty,UT=MT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zT={key:!0,ref:!0,__self:!0,__source:!0};function G0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)jT.call(e,r)&&!zT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:$T,type:t,key:s,ref:o,props:i,_owner:UT.current}}lc.Fragment=FT;lc.jsx=G0;lc.jsxs=G0;$0.exports=lc;var _=$0.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ws(){return ws=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ws.apply(this,arguments)}var cr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(cr||(cr={}));const Wg="popstate";function BT(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return bf("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Zl(i)}return WT(e,n,null,t)}function xe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ep(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function VT(){return Math.random().toString(36).substr(2,8)}function Hg(t,e){return{usr:t.state,key:t.key,idx:e}}function bf(t,e,n,r){return n===void 0&&(n=null),ws({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Bs(e):e,{state:n,key:e&&e.key||r||VT()})}function Zl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Bs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function WT(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=cr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(ws({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=cr.Pop;let w=c(),p=w==null?null:w-u;u=w,l&&l({action:a,location:v.location,delta:p})}function f(w,p){a=cr.Push;let h=bf(v.location,w,p);n&&n(h,w),u=c()+1;let y=Hg(h,u),S=v.createHref(h);try{o.pushState(y,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(S)}s&&l&&l({action:a,location:v.location,delta:1})}function m(w,p){a=cr.Replace;let h=bf(v.location,w,p);n&&n(h,w),u=c();let y=Hg(h,u),S=v.createHref(h);o.replaceState(y,"",S),s&&l&&l({action:a,location:v.location,delta:0})}function g(w){let p=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof w=="string"?w:Zl(w);return xe(p,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,p)}let v={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Wg,d),l=w,()=>{i.removeEventListener(Wg,d),l=null}},createHref(w){return e(i,w)},createURL:g,encodeLocation(w){let p=g(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:m,go(w){return o.go(w)}};return v}var Gg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Gg||(Gg={}));function HT(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Bs(e):e,i=Sp(r.pathname||"/",n);if(i==null)return null;let s=K0(t);GT(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=tI(s[a],iI(i));return o}function K0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(xe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=hr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(xe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),K0(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:ZT(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of q0(s.path))i(s,o,l)}),e}function q0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=q0(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function GT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:eI(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const KT=/^:\w+$/,qT=3,YT=2,QT=1,XT=10,JT=-2,Kg=t=>t==="*";function ZT(t,e){let n=t.split("/"),r=n.length;return n.some(Kg)&&(r+=JT),e&&(r+=YT),n.filter(i=>!Kg(i)).reduce((i,s)=>i+(KT.test(s)?qT:s===""?QT:XT),r)}function eI(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function tI(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=nI({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:hr([i,c.pathname]),pathnameBase:lI(hr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=hr([i,c.pathnameBase]))}return s}function nI(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=rI(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=sI(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function rI(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ep(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function iI(t){try{return decodeURI(t)}catch(e){return Ep(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function sI(t,e){try{return decodeURIComponent(t)}catch(n){return Ep(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Sp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function oI(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Bs(t):t;return{pathname:n?n.startsWith("/")?n:aI(n,e):e,search:uI(r),hash:cI(i)}}function aI(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function wd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Cp(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function xp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Bs(t):(i=ws({},t),xe(!i.pathname||!i.pathname.includes("?"),wd("?","pathname","search",i)),xe(!i.pathname||!i.pathname.includes("#"),wd("#","pathname","hash",i)),xe(!i.search||!i.search.includes("#"),wd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=oI(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const hr=t=>t.join("/").replace(/\/\/+/g,"/"),lI=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),uI=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,cI=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,dI=function(e,n){n===void 0&&(n=302);let r=n;typeof r=="number"?r={status:r}:typeof r.status>"u"&&(r.status=302);let i=new Headers(r.headers);return i.set("Location",e),new Response(null,ws({},r,{headers:i}))};function fI(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Y0=["post","put","patch","delete"];new Set(Y0);const hI=["get",...Y0];new Set(hI);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function eu(){return eu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},eu.apply(this,arguments)}const Tp=x.createContext(null),pI=x.createContext(null),Vs=x.createContext(null),uc=x.createContext(null),Yn=x.createContext({outlet:null,matches:[],isDataRoute:!1}),Q0=x.createContext(null);function mI(t,e){let{relative:n}=e===void 0?{}:e;Ws()||xe(!1);let{basename:r,navigator:i}=x.useContext(Vs),{hash:s,pathname:o,search:a}=Z0(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:hr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Ws(){return x.useContext(uc)!=null}function Pa(){return Ws()||xe(!1),x.useContext(uc).location}function X0(t){x.useContext(Vs).static||x.useLayoutEffect(t)}function J0(){let{isDataRoute:t}=x.useContext(Yn);return t?RI():gI()}function gI(){Ws()||xe(!1);let t=x.useContext(Tp),{basename:e,navigator:n}=x.useContext(Vs),{matches:r}=x.useContext(Yn),{pathname:i}=Pa(),s=JSON.stringify(Cp(r).map(l=>l.pathnameBase)),o=x.useRef(!1);return X0(()=>{o.current=!0}),x.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=xp(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:hr([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const yI=x.createContext(null);function vI(t){let e=x.useContext(Yn).outlet;return e&&x.createElement(yI.Provider,{value:t},e)}function Z0(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=x.useContext(Yn),{pathname:i}=Pa(),s=JSON.stringify(Cp(r).map(o=>o.pathnameBase));return x.useMemo(()=>xp(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function _I(t,e){return wI(t,e)}function wI(t,e,n){Ws()||xe(!1);let{navigator:r}=x.useContext(Vs),{matches:i}=x.useContext(Yn),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Pa(),u;if(e){var c;let v=typeof e=="string"?Bs(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||xe(!1),u=v}else u=l;let d=u.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",m=HT(t,{pathname:f}),g=TI(m&&m.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:hr([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:hr([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&g?x.createElement(uc.Provider,{value:{location:eu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:cr.Pop}},g):g}function EI(){let t=PI(),e=fI(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},e),n?x.createElement("pre",{style:i},n):null,s)}const SI=x.createElement(EI,null);class CI extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?x.createElement(Yn.Provider,{value:this.props.routeContext},x.createElement(Q0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function xI(t){let{routeContext:e,match:n,children:r}=t,i=x.useContext(Tp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(Yn.Provider,{value:e},r)}function TI(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||xe(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||SI);let f=e.concat(s.slice(0,u+1)),m=()=>{let g;return c?g=d:l.route.Component?g=x.createElement(l.route.Component,null):l.route.element?g=l.route.element:g=a,x.createElement(xI,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:g})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?x.createElement(CI,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()},null)}var ew=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(ew||{}),tu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(tu||{});function II(t){let e=x.useContext(Tp);return e||xe(!1),e}function kI(t){let e=x.useContext(pI);return e||xe(!1),e}function bI(t){let e=x.useContext(Yn);return e||xe(!1),e}function tw(t){let e=bI(),n=e.matches[e.matches.length-1];return n.route.id||xe(!1),n.route.id}function PI(){var t;let e=x.useContext(Q0),n=kI(tu.UseRouteError),r=tw(tu.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function RI(){let{router:t}=II(ew.UseNavigateStable),e=tw(tu.UseNavigateStable),n=x.useRef(!1);return X0(()=>{n.current=!0}),x.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,eu({fromRouteId:e},s)))},[t,e])}function nw(t){let{to:e,replace:n,state:r,relative:i}=t;Ws()||xe(!1);let{matches:s}=x.useContext(Yn),{pathname:o}=Pa(),a=J0(),l=xp(e,Cp(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return x.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function OI(t){return vI(t.context)}function Kr(t){xe(!1)}function NI(t){let{basename:e="/",children:n=null,location:r,navigationType:i=cr.Pop,navigator:s,static:o=!1}=t;Ws()&&xe(!1);let a=e.replace(/^\/*/,"/"),l=x.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Bs(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:m="default"}=r,g=x.useMemo(()=>{let v=Sp(u,a);return v==null?null:{location:{pathname:v,search:c,hash:d,state:f,key:m},navigationType:i}},[a,u,c,d,f,m,i]);return g==null?null:x.createElement(Vs.Provider,{value:l},x.createElement(uc.Provider,{children:n,value:g}))}function AI(t){let{children:e,location:n}=t;return _I(Pf(e),n)}new Promise(()=>{});function Pf(t,e){e===void 0&&(e=[]);let n=[];return x.Children.forEach(t,(r,i)=>{if(!x.isValidElement(r))return;let s=[...e,i];if(r.type===x.Fragment){n.push.apply(n,Pf(r.props.children,s));return}r.type!==Kr&&xe(!1),!r.props.index||!r.props.children||xe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Pf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rf(){return Rf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Rf.apply(this,arguments)}function DI(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function LI(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function MI(t,e){return t.button===0&&(!e||e==="_self")&&!LI(t)}const $I=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],FI="startTransition",qg=zo[FI];function jI(t){let{basename:e,children:n,future:r,window:i}=t,s=x.useRef();s.current==null&&(s.current=BT({window:i,v5Compat:!0}));let o=s.current,[a,l]=x.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=x.useCallback(d=>{u&&qg?qg(()=>l(d)):l(d)},[l,u]);return x.useLayoutEffect(()=>o.listen(c),[o,c]),x.createElement(NI,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const UI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",zI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ra=x.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,d=DI(e,$I),{basename:f}=x.useContext(Vs),m,g=!1;if(typeof u=="string"&&zI.test(u)&&(m=u,UI))try{let h=new URL(window.location.href),y=u.startsWith("//")?new URL(h.protocol+u):new URL(u),S=Sp(y.pathname,f);y.origin===h.origin&&S!=null?u=S+y.search+y.hash:g=!0}catch{}let v=mI(u,{relative:i}),w=BI(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function p(h){r&&r(h),h.defaultPrevented||w(h)}return x.createElement("a",Rf({},d,{href:m||v,onClick:g||s?r:p,ref:n,target:l}))});var Yg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(Yg||(Yg={}));var Qg;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Qg||(Qg={}));function BI(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=J0(),l=Pa(),u=Z0(t,{relative:o});return x.useCallback(c=>{if(MI(c,n)){c.preventDefault();let d=r!==void 0?r:Zl(l)===Zl(u);a(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}var Of={},rw={exports:{}},At={},iw={exports:{}},sw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,$){var F=R.length;R.push($);e:for(;0<F;){var te=F-1>>>1,ne=R[te];if(0<i(ne,$))R[te]=$,R[F]=ne,F=te;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var $=R[0],F=R.pop();if(F!==$){R[0]=F;e:for(var te=0,ne=R.length,Ft=ne>>>1;te<Ft;){var Ue=2*(te+1)-1,nt=R[Ue],Ke=Ue+1,qe=R[Ke];if(0>i(nt,F))Ke<ne&&0>i(qe,nt)?(R[te]=qe,R[Ke]=F,te=Ke):(R[te]=nt,R[Ue]=F,te=Ue);else if(Ke<ne&&0>i(qe,F))R[te]=qe,R[Ke]=F,te=Ke;else break e}}return $}function i(R,$){var F=R.sortIndex-$.sortIndex;return F!==0?F:R.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,m=!1,g=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(R){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=R)r(u),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(u)}}function S(R){if(v=!1,y(R),!g)if(n(l)!==null)g=!0,bn(C);else{var $=n(u);$!==null&&lt(S,$.startTime-R)}}function C(R,$){g=!1,v&&(v=!1,p(P),P=-1),m=!0;var F=f;try{for(y($),d=n(l);d!==null&&(!(d.expirationTime>$)||R&&!K());){var te=d.callback;if(typeof te=="function"){d.callback=null,f=d.priorityLevel;var ne=te(d.expirationTime<=$);$=t.unstable_now(),typeof ne=="function"?d.callback=ne:d===n(l)&&r(l),y($)}else r(l);d=n(l)}if(d!==null)var Ft=!0;else{var Ue=n(u);Ue!==null&&lt(S,Ue.startTime-$),Ft=!1}return Ft}finally{d=null,f=F,m=!1}}var I=!1,E=null,P=-1,B=5,M=-1;function K(){return!(t.unstable_now()-M<B)}function $t(){if(E!==null){var R=t.unstable_now();M=R;var $=!0;try{$=E(!0,R)}finally{$?le():(I=!1,E=null)}}else I=!1}var le;if(typeof h=="function")le=function(){h($t)};else if(typeof MessageChannel<"u"){var wt=new MessageChannel,kn=wt.port2;wt.port1.onmessage=$t,le=function(){kn.postMessage(null)}}else le=function(){w($t,0)};function bn(R){E=R,I||(I=!0,le())}function lt(R,$){P=w(function(){R(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){g||m||(g=!0,bn(C))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(f){case 1:case 2:case 3:var $=3;break;default:$=f}var F=f;f=$;try{return R()}finally{f=F}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,$){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var F=f;f=R;try{return $()}finally{f=F}},t.unstable_scheduleCallback=function(R,$,F){var te=t.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?te+F:te):F=te,R){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=F+ne,R={id:c++,callback:$,priorityLevel:R,startTime:F,expirationTime:ne,sortIndex:-1},F>te?(R.sortIndex=F,e(u,R),n(l)===null&&R===n(u)&&(v?(p(P),P=-1):v=!0,lt(S,F-te))):(R.sortIndex=ne,e(l,R),g||m||(g=!0,bn(C))),R},t.unstable_shouldYield=K,t.unstable_wrapCallback=function(R){var $=f;return function(){var F=f;f=$;try{return R.apply(this,arguments)}finally{f=F}}}})(sw);iw.exports=sw;var VI=iw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ow=x,Rt=VI;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var aw=new Set,Bo={};function Pi(t,e){Es(t,e),Es(t+"Capture",e)}function Es(t,e){for(Bo[t]=e,t=0;t<e.length;t++)aw.add(e[t])}var Bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nf=Object.prototype.hasOwnProperty,WI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xg={},Jg={};function HI(t){return Nf.call(Jg,t)?!0:Nf.call(Xg,t)?!1:WI.test(t)?Jg[t]=!0:(Xg[t]=!0,!1)}function GI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function KI(t,e,n,r){if(e===null||typeof e>"u"||GI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function at(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ge[t]=new at(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ge[e]=new at(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ge[t]=new at(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ge[t]=new at(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ge[t]=new at(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ge[t]=new at(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ge[t]=new at(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ge[t]=new at(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ge[t]=new at(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ip=/[\-:]([a-z])/g;function kp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ip,kp);Ge[e]=new at(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ip,kp);Ge[e]=new at(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ip,kp);Ge[e]=new at(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ge[t]=new at(t,1,!1,t.toLowerCase(),null,!1,!1)});Ge.xlinkHref=new at("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ge[t]=new at(t,1,!1,t.toLowerCase(),null,!0,!0)});function bp(t,e,n,r){var i=Ge.hasOwnProperty(e)?Ge[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(KI(e,n,i,r)&&(n=null),r||i===null?HI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Qn=ow.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Za=Symbol.for("react.element"),Wi=Symbol.for("react.portal"),Hi=Symbol.for("react.fragment"),Pp=Symbol.for("react.strict_mode"),Af=Symbol.for("react.profiler"),lw=Symbol.for("react.provider"),uw=Symbol.for("react.context"),Rp=Symbol.for("react.forward_ref"),Df=Symbol.for("react.suspense"),Lf=Symbol.for("react.suspense_list"),Op=Symbol.for("react.memo"),rr=Symbol.for("react.lazy"),cw=Symbol.for("react.offscreen"),Zg=Symbol.iterator;function no(t){return t===null||typeof t!="object"?null:(t=Zg&&t[Zg]||t["@@iterator"],typeof t=="function"?t:null)}var we=Object.assign,Ed;function yo(t){if(Ed===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ed=e&&e[1]||""}return`
`+Ed+t}var Sd=!1;function Cd(t,e){if(!t||Sd)return"";Sd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Sd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?yo(t):""}function qI(t){switch(t.tag){case 5:return yo(t.type);case 16:return yo("Lazy");case 13:return yo("Suspense");case 19:return yo("SuspenseList");case 0:case 2:case 15:return t=Cd(t.type,!1),t;case 11:return t=Cd(t.type.render,!1),t;case 1:return t=Cd(t.type,!0),t;default:return""}}function Mf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Hi:return"Fragment";case Wi:return"Portal";case Af:return"Profiler";case Pp:return"StrictMode";case Df:return"Suspense";case Lf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case uw:return(t.displayName||"Context")+".Consumer";case lw:return(t._context.displayName||"Context")+".Provider";case Rp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Op:return e=t.displayName||null,e!==null?e:Mf(t.type)||"Memo";case rr:e=t._payload,t=t._init;try{return Mf(t(e))}catch{}}return null}function YI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mf(e);case 8:return e===Pp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function QI(t){var e=dw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function el(t){t._valueTracker||(t._valueTracker=QI(t))}function fw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=dw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function nu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $f(t,e){var n=e.checked;return we({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ey(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function hw(t,e){e=e.checked,e!=null&&bp(t,"checked",e,!1)}function Ff(t,e){hw(t,e);var n=Pr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?jf(t,e.type,n):e.hasOwnProperty("defaultValue")&&jf(t,e.type,Pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ty(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function jf(t,e,n){(e!=="number"||nu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var vo=Array.isArray;function as(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Pr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Uf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return we({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ny(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(vo(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Pr(n)}}function pw(t,e){var n=Pr(e.value),r=Pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ry(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function mw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?mw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var tl,gw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(tl=tl||document.createElement("div"),tl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=tl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Vo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var To={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},XI=["Webkit","ms","Moz","O"];Object.keys(To).forEach(function(t){XI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),To[e]=To[t]})});function yw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||To.hasOwnProperty(t)&&To[t]?(""+e).trim():e+"px"}function vw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=yw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var JI=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bf(t,e){if(e){if(JI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function Vf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wf=null;function Np(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hf=null,ls=null,us=null;function iy(t){if(t=Aa(t)){if(typeof Hf!="function")throw Error(k(280));var e=t.stateNode;e&&(e=pc(e),Hf(t.stateNode,t.type,e))}}function _w(t){ls?us?us.push(t):us=[t]:ls=t}function ww(){if(ls){var t=ls,e=us;if(us=ls=null,iy(t),e)for(t=0;t<e.length;t++)iy(e[t])}}function Ew(t,e){return t(e)}function Sw(){}var xd=!1;function Cw(t,e,n){if(xd)return t(e,n);xd=!0;try{return Ew(t,e,n)}finally{xd=!1,(ls!==null||us!==null)&&(Sw(),ww())}}function Wo(t,e){var n=t.stateNode;if(n===null)return null;var r=pc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var Gf=!1;if(Bn)try{var ro={};Object.defineProperty(ro,"passive",{get:function(){Gf=!0}}),window.addEventListener("test",ro,ro),window.removeEventListener("test",ro,ro)}catch{Gf=!1}function ZI(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Io=!1,ru=null,iu=!1,Kf=null,ek={onError:function(t){Io=!0,ru=t}};function tk(t,e,n,r,i,s,o,a,l){Io=!1,ru=null,ZI.apply(ek,arguments)}function nk(t,e,n,r,i,s,o,a,l){if(tk.apply(this,arguments),Io){if(Io){var u=ru;Io=!1,ru=null}else throw Error(k(198));iu||(iu=!0,Kf=u)}}function Ri(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function xw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function sy(t){if(Ri(t)!==t)throw Error(k(188))}function rk(t){var e=t.alternate;if(!e){if(e=Ri(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return sy(i),t;if(s===r)return sy(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function Tw(t){return t=rk(t),t!==null?Iw(t):null}function Iw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Iw(t);if(e!==null)return e;t=t.sibling}return null}var kw=Rt.unstable_scheduleCallback,oy=Rt.unstable_cancelCallback,ik=Rt.unstable_shouldYield,sk=Rt.unstable_requestPaint,Ce=Rt.unstable_now,ok=Rt.unstable_getCurrentPriorityLevel,Ap=Rt.unstable_ImmediatePriority,bw=Rt.unstable_UserBlockingPriority,su=Rt.unstable_NormalPriority,ak=Rt.unstable_LowPriority,Pw=Rt.unstable_IdlePriority,cc=null,_n=null;function lk(t){if(_n&&typeof _n.onCommitFiberRoot=="function")try{_n.onCommitFiberRoot(cc,t,void 0,(t.current.flags&128)===128)}catch{}}var sn=Math.clz32?Math.clz32:dk,uk=Math.log,ck=Math.LN2;function dk(t){return t>>>=0,t===0?32:31-(uk(t)/ck|0)|0}var nl=64,rl=4194304;function _o(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ou(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=_o(a):(s&=o,s!==0&&(r=_o(s)))}else o=n&~i,o!==0?r=_o(o):s!==0&&(r=_o(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-sn(e),i=1<<n,r|=t[n],e&=~i;return r}function fk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-sn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=fk(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function qf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Rw(){var t=nl;return nl<<=1,!(nl&4194240)&&(nl=64),t}function Td(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Oa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-sn(e),t[e]=n}function pk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-sn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Dp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-sn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ie=0;function Ow(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Nw,Lp,Aw,Dw,Lw,Yf=!1,il=[],pr=null,mr=null,gr=null,Ho=new Map,Go=new Map,sr=[],mk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ay(t,e){switch(t){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":Ho.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(e.pointerId)}}function io(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Aa(e),e!==null&&Lp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function gk(t,e,n,r,i){switch(e){case"focusin":return pr=io(pr,t,e,n,r,i),!0;case"dragenter":return mr=io(mr,t,e,n,r,i),!0;case"mouseover":return gr=io(gr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ho.set(s,io(Ho.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Go.set(s,io(Go.get(s)||null,t,e,n,r,i)),!0}return!1}function Mw(t){var e=ti(t.target);if(e!==null){var n=Ri(e);if(n!==null){if(e=n.tag,e===13){if(e=xw(n),e!==null){t.blockedOn=e,Lw(t.priority,function(){Aw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Qf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Wf=r,n.target.dispatchEvent(r),Wf=null}else return e=Aa(n),e!==null&&Lp(e),t.blockedOn=n,!1;e.shift()}return!0}function ly(t,e,n){Pl(t)&&n.delete(e)}function yk(){Yf=!1,pr!==null&&Pl(pr)&&(pr=null),mr!==null&&Pl(mr)&&(mr=null),gr!==null&&Pl(gr)&&(gr=null),Ho.forEach(ly),Go.forEach(ly)}function so(t,e){t.blockedOn===e&&(t.blockedOn=null,Yf||(Yf=!0,Rt.unstable_scheduleCallback(Rt.unstable_NormalPriority,yk)))}function Ko(t){function e(i){return so(i,t)}if(0<il.length){so(il[0],t);for(var n=1;n<il.length;n++){var r=il[n];r.blockedOn===t&&(r.blockedOn=null)}}for(pr!==null&&so(pr,t),mr!==null&&so(mr,t),gr!==null&&so(gr,t),Ho.forEach(e),Go.forEach(e),n=0;n<sr.length;n++)r=sr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<sr.length&&(n=sr[0],n.blockedOn===null);)Mw(n),n.blockedOn===null&&sr.shift()}var cs=Qn.ReactCurrentBatchConfig,au=!0;function vk(t,e,n,r){var i=ie,s=cs.transition;cs.transition=null;try{ie=1,Mp(t,e,n,r)}finally{ie=i,cs.transition=s}}function _k(t,e,n,r){var i=ie,s=cs.transition;cs.transition=null;try{ie=4,Mp(t,e,n,r)}finally{ie=i,cs.transition=s}}function Mp(t,e,n,r){if(au){var i=Qf(t,e,n,r);if(i===null)Ld(t,e,r,lu,n),ay(t,r);else if(gk(i,t,e,n,r))r.stopPropagation();else if(ay(t,r),e&4&&-1<mk.indexOf(t)){for(;i!==null;){var s=Aa(i);if(s!==null&&Nw(s),s=Qf(t,e,n,r),s===null&&Ld(t,e,r,lu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ld(t,e,r,null,n)}}var lu=null;function Qf(t,e,n,r){if(lu=null,t=Np(r),t=ti(t),t!==null)if(e=Ri(t),e===null)t=null;else if(n=e.tag,n===13){if(t=xw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return lu=t,null}function $w(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ok()){case Ap:return 1;case bw:return 4;case su:case ak:return 16;case Pw:return 536870912;default:return 16}default:return 16}}var dr=null,$p=null,Rl=null;function Fw(){if(Rl)return Rl;var t,e=$p,n=e.length,r,i="value"in dr?dr.value:dr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Rl=i.slice(t,1<r?1-r:void 0)}function Ol(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function sl(){return!0}function uy(){return!1}function Dt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?sl:uy,this.isPropagationStopped=uy,this}return we(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),e}var Hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fp=Dt(Hs),Na=we({},Hs,{view:0,detail:0}),wk=Dt(Na),Id,kd,oo,dc=we({},Na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oo&&(oo&&t.type==="mousemove"?(Id=t.screenX-oo.screenX,kd=t.screenY-oo.screenY):kd=Id=0,oo=t),Id)},movementY:function(t){return"movementY"in t?t.movementY:kd}}),cy=Dt(dc),Ek=we({},dc,{dataTransfer:0}),Sk=Dt(Ek),Ck=we({},Na,{relatedTarget:0}),bd=Dt(Ck),xk=we({},Hs,{animationName:0,elapsedTime:0,pseudoElement:0}),Tk=Dt(xk),Ik=we({},Hs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),kk=Dt(Ik),bk=we({},Hs,{data:0}),dy=Dt(bk),Pk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ok={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ok[t])?!!e[t]:!1}function jp(){return Nk}var Ak=we({},Na,{key:function(t){if(t.key){var e=Pk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ol(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Rk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jp,charCode:function(t){return t.type==="keypress"?Ol(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ol(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Dk=Dt(Ak),Lk=we({},dc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fy=Dt(Lk),Mk=we({},Na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jp}),$k=Dt(Mk),Fk=we({},Hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),jk=Dt(Fk),Uk=we({},dc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zk=Dt(Uk),Bk=[9,13,27,32],Up=Bn&&"CompositionEvent"in window,ko=null;Bn&&"documentMode"in document&&(ko=document.documentMode);var Vk=Bn&&"TextEvent"in window&&!ko,jw=Bn&&(!Up||ko&&8<ko&&11>=ko),hy=String.fromCharCode(32),py=!1;function Uw(t,e){switch(t){case"keyup":return Bk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gi=!1;function Wk(t,e){switch(t){case"compositionend":return zw(e);case"keypress":return e.which!==32?null:(py=!0,hy);case"textInput":return t=e.data,t===hy&&py?null:t;default:return null}}function Hk(t,e){if(Gi)return t==="compositionend"||!Up&&Uw(t,e)?(t=Fw(),Rl=$p=dr=null,Gi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return jw&&e.locale!=="ko"?null:e.data;default:return null}}var Gk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function my(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Gk[t.type]:e==="textarea"}function Bw(t,e,n,r){_w(r),e=uu(e,"onChange"),0<e.length&&(n=new Fp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var bo=null,qo=null;function Kk(t){Zw(t,0)}function fc(t){var e=Yi(t);if(fw(e))return t}function qk(t,e){if(t==="change")return e}var Vw=!1;if(Bn){var Pd;if(Bn){var Rd="oninput"in document;if(!Rd){var gy=document.createElement("div");gy.setAttribute("oninput","return;"),Rd=typeof gy.oninput=="function"}Pd=Rd}else Pd=!1;Vw=Pd&&(!document.documentMode||9<document.documentMode)}function yy(){bo&&(bo.detachEvent("onpropertychange",Ww),qo=bo=null)}function Ww(t){if(t.propertyName==="value"&&fc(qo)){var e=[];Bw(e,qo,t,Np(t)),Cw(Kk,e)}}function Yk(t,e,n){t==="focusin"?(yy(),bo=e,qo=n,bo.attachEvent("onpropertychange",Ww)):t==="focusout"&&yy()}function Qk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fc(qo)}function Xk(t,e){if(t==="click")return fc(e)}function Jk(t,e){if(t==="input"||t==="change")return fc(e)}function Zk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var cn=typeof Object.is=="function"?Object.is:Zk;function Yo(t,e){if(cn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Nf.call(e,i)||!cn(t[i],e[i]))return!1}return!0}function vy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _y(t,e){var n=vy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vy(n)}}function Hw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Hw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Gw(){for(var t=window,e=nu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=nu(t.document)}return e}function zp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function eb(t){var e=Gw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Hw(n.ownerDocument.documentElement,n)){if(r!==null&&zp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=_y(n,s);var o=_y(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var tb=Bn&&"documentMode"in document&&11>=document.documentMode,Ki=null,Xf=null,Po=null,Jf=!1;function wy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jf||Ki==null||Ki!==nu(r)||(r=Ki,"selectionStart"in r&&zp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Po&&Yo(Po,r)||(Po=r,r=uu(Xf,"onSelect"),0<r.length&&(e=new Fp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ki)))}function ol(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var qi={animationend:ol("Animation","AnimationEnd"),animationiteration:ol("Animation","AnimationIteration"),animationstart:ol("Animation","AnimationStart"),transitionend:ol("Transition","TransitionEnd")},Od={},Kw={};Bn&&(Kw=document.createElement("div").style,"AnimationEvent"in window||(delete qi.animationend.animation,delete qi.animationiteration.animation,delete qi.animationstart.animation),"TransitionEvent"in window||delete qi.transitionend.transition);function hc(t){if(Od[t])return Od[t];if(!qi[t])return t;var e=qi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Kw)return Od[t]=e[n];return t}var qw=hc("animationend"),Yw=hc("animationiteration"),Qw=hc("animationstart"),Xw=hc("transitionend"),Jw=new Map,Ey="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $r(t,e){Jw.set(t,e),Pi(e,[t])}for(var Nd=0;Nd<Ey.length;Nd++){var Ad=Ey[Nd],nb=Ad.toLowerCase(),rb=Ad[0].toUpperCase()+Ad.slice(1);$r(nb,"on"+rb)}$r(qw,"onAnimationEnd");$r(Yw,"onAnimationIteration");$r(Qw,"onAnimationStart");$r("dblclick","onDoubleClick");$r("focusin","onFocus");$r("focusout","onBlur");$r(Xw,"onTransitionEnd");Es("onMouseEnter",["mouseout","mouseover"]);Es("onMouseLeave",["mouseout","mouseover"]);Es("onPointerEnter",["pointerout","pointerover"]);Es("onPointerLeave",["pointerout","pointerover"]);Pi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ib=new Set("cancel close invalid load scroll toggle".split(" ").concat(wo));function Sy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,nk(r,e,void 0,t),t.currentTarget=null}function Zw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Sy(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Sy(i,a,u),s=l}}}if(iu)throw t=Kf,iu=!1,Kf=null,t}function fe(t,e){var n=e[rh];n===void 0&&(n=e[rh]=new Set);var r=t+"__bubble";n.has(r)||(e1(e,t,2,!1),n.add(r))}function Dd(t,e,n){var r=0;e&&(r|=4),e1(n,t,r,e)}var al="_reactListening"+Math.random().toString(36).slice(2);function Qo(t){if(!t[al]){t[al]=!0,aw.forEach(function(n){n!=="selectionchange"&&(ib.has(n)||Dd(n,!1,t),Dd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[al]||(e[al]=!0,Dd("selectionchange",!1,e))}}function e1(t,e,n,r){switch($w(e)){case 1:var i=vk;break;case 4:i=_k;break;default:i=Mp}n=i.bind(null,e,n,t),i=void 0,!Gf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ld(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ti(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Cw(function(){var u=s,c=Np(n),d=[];e:{var f=Jw.get(t);if(f!==void 0){var m=Fp,g=t;switch(t){case"keypress":if(Ol(n)===0)break e;case"keydown":case"keyup":m=Dk;break;case"focusin":g="focus",m=bd;break;case"focusout":g="blur",m=bd;break;case"beforeblur":case"afterblur":m=bd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=cy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Sk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=$k;break;case qw:case Yw:case Qw:m=Tk;break;case Xw:m=jk;break;case"scroll":m=wk;break;case"wheel":m=zk;break;case"copy":case"cut":case"paste":m=kk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=fy}var v=(e&4)!==0,w=!v&&t==="scroll",p=v?f!==null?f+"Capture":null:f;v=[];for(var h=u,y;h!==null;){y=h;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,p!==null&&(S=Wo(h,p),S!=null&&v.push(Xo(h,S,y)))),w)break;h=h.return}0<v.length&&(f=new m(f,g,null,n,c),d.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Wf&&(g=n.relatedTarget||n.fromElement)&&(ti(g)||g[Vn]))break e;if((m||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=u,g=g?ti(g):null,g!==null&&(w=Ri(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=u),m!==g)){if(v=cy,S="onMouseLeave",p="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(v=fy,S="onPointerLeave",p="onPointerEnter",h="pointer"),w=m==null?f:Yi(m),y=g==null?f:Yi(g),f=new v(S,h+"leave",m,n,c),f.target=w,f.relatedTarget=y,S=null,ti(c)===u&&(v=new v(p,h+"enter",g,n,c),v.target=y,v.relatedTarget=w,S=v),w=S,m&&g)t:{for(v=m,p=g,h=0,y=v;y;y=Ui(y))h++;for(y=0,S=p;S;S=Ui(S))y++;for(;0<h-y;)v=Ui(v),h--;for(;0<y-h;)p=Ui(p),y--;for(;h--;){if(v===p||p!==null&&v===p.alternate)break t;v=Ui(v),p=Ui(p)}v=null}else v=null;m!==null&&Cy(d,f,m,v,!1),g!==null&&w!==null&&Cy(d,w,g,v,!0)}}e:{if(f=u?Yi(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var C=qk;else if(my(f))if(Vw)C=Jk;else{C=Qk;var I=Yk}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=Xk);if(C&&(C=C(t,u))){Bw(d,C,n,c);break e}I&&I(t,f,u),t==="focusout"&&(I=f._wrapperState)&&I.controlled&&f.type==="number"&&jf(f,"number",f.value)}switch(I=u?Yi(u):window,t){case"focusin":(my(I)||I.contentEditable==="true")&&(Ki=I,Xf=u,Po=null);break;case"focusout":Po=Xf=Ki=null;break;case"mousedown":Jf=!0;break;case"contextmenu":case"mouseup":case"dragend":Jf=!1,wy(d,n,c);break;case"selectionchange":if(tb)break;case"keydown":case"keyup":wy(d,n,c)}var E;if(Up)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Gi?Uw(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(jw&&n.locale!=="ko"&&(Gi||P!=="onCompositionStart"?P==="onCompositionEnd"&&Gi&&(E=Fw()):(dr=c,$p="value"in dr?dr.value:dr.textContent,Gi=!0)),I=uu(u,P),0<I.length&&(P=new dy(P,t,null,n,c),d.push({event:P,listeners:I}),E?P.data=E:(E=zw(n),E!==null&&(P.data=E)))),(E=Vk?Wk(t,n):Hk(t,n))&&(u=uu(u,"onBeforeInput"),0<u.length&&(c=new dy("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=E))}Zw(d,e)})}function Xo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function uu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Wo(t,n),s!=null&&r.unshift(Xo(t,s,i)),s=Wo(t,e),s!=null&&r.push(Xo(t,s,i))),t=t.return}return r}function Ui(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Cy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Wo(n,s),l!=null&&o.unshift(Xo(n,l,a))):i||(l=Wo(n,s),l!=null&&o.push(Xo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var sb=/\r\n?/g,ob=/\u0000|\uFFFD/g;function xy(t){return(typeof t=="string"?t:""+t).replace(sb,`
`).replace(ob,"")}function ll(t,e,n){if(e=xy(e),xy(t)!==e&&n)throw Error(k(425))}function cu(){}var Zf=null,eh=null;function th(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var nh=typeof setTimeout=="function"?setTimeout:void 0,ab=typeof clearTimeout=="function"?clearTimeout:void 0,Ty=typeof Promise=="function"?Promise:void 0,lb=typeof queueMicrotask=="function"?queueMicrotask:typeof Ty<"u"?function(t){return Ty.resolve(null).then(t).catch(ub)}:nh;function ub(t){setTimeout(function(){throw t})}function Md(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ko(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ko(e)}function yr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Iy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Gs=Math.random().toString(36).slice(2),vn="__reactFiber$"+Gs,Jo="__reactProps$"+Gs,Vn="__reactContainer$"+Gs,rh="__reactEvents$"+Gs,cb="__reactListeners$"+Gs,db="__reactHandles$"+Gs;function ti(t){var e=t[vn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Vn]||n[vn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Iy(t);t!==null;){if(n=t[vn])return n;t=Iy(t)}return e}t=n,n=t.parentNode}return null}function Aa(t){return t=t[vn]||t[Vn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Yi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function pc(t){return t[Jo]||null}var ih=[],Qi=-1;function Fr(t){return{current:t}}function ge(t){0>Qi||(t.current=ih[Qi],ih[Qi]=null,Qi--)}function de(t,e){Qi++,ih[Qi]=t.current,t.current=e}var Rr={},et=Fr(Rr),mt=Fr(!1),mi=Rr;function Ss(t,e){var n=t.type.contextTypes;if(!n)return Rr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function gt(t){return t=t.childContextTypes,t!=null}function du(){ge(mt),ge(et)}function ky(t,e,n){if(et.current!==Rr)throw Error(k(168));de(et,e),de(mt,n)}function t1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,YI(t)||"Unknown",i));return we({},n,r)}function fu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Rr,mi=et.current,de(et,t),de(mt,mt.current),!0}function by(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=t1(t,e,mi),r.__reactInternalMemoizedMergedChildContext=t,ge(mt),ge(et),de(et,t)):ge(mt),de(mt,n)}var An=null,mc=!1,$d=!1;function n1(t){An===null?An=[t]:An.push(t)}function fb(t){mc=!0,n1(t)}function jr(){if(!$d&&An!==null){$d=!0;var t=0,e=ie;try{var n=An;for(ie=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}An=null,mc=!1}catch(i){throw An!==null&&(An=An.slice(t+1)),kw(Ap,jr),i}finally{ie=e,$d=!1}}return null}var Xi=[],Ji=0,hu=null,pu=0,Ut=[],zt=0,gi=null,Ln=1,Mn="";function qr(t,e){Xi[Ji++]=pu,Xi[Ji++]=hu,hu=t,pu=e}function r1(t,e,n){Ut[zt++]=Ln,Ut[zt++]=Mn,Ut[zt++]=gi,gi=t;var r=Ln;t=Mn;var i=32-sn(r)-1;r&=~(1<<i),n+=1;var s=32-sn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ln=1<<32-sn(e)+i|n<<i|r,Mn=s+t}else Ln=1<<s|n<<i|r,Mn=t}function Bp(t){t.return!==null&&(qr(t,1),r1(t,1,0))}function Vp(t){for(;t===hu;)hu=Xi[--Ji],Xi[Ji]=null,pu=Xi[--Ji],Xi[Ji]=null;for(;t===gi;)gi=Ut[--zt],Ut[zt]=null,Mn=Ut[--zt],Ut[zt]=null,Ln=Ut[--zt],Ut[zt]=null}var kt=null,Ct=null,ye=!1,Zt=null;function i1(t,e){var n=Bt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Py(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,kt=t,Ct=yr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,kt=t,Ct=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=gi!==null?{id:Ln,overflow:Mn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,kt=t,Ct=null,!0):!1;default:return!1}}function sh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function oh(t){if(ye){var e=Ct;if(e){var n=e;if(!Py(t,e)){if(sh(t))throw Error(k(418));e=yr(n.nextSibling);var r=kt;e&&Py(t,e)?i1(r,n):(t.flags=t.flags&-4097|2,ye=!1,kt=t)}}else{if(sh(t))throw Error(k(418));t.flags=t.flags&-4097|2,ye=!1,kt=t}}}function Ry(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kt=t}function ul(t){if(t!==kt)return!1;if(!ye)return Ry(t),ye=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!th(t.type,t.memoizedProps)),e&&(e=Ct)){if(sh(t))throw s1(),Error(k(418));for(;e;)i1(t,e),e=yr(e.nextSibling)}if(Ry(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ct=yr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ct=null}}else Ct=kt?yr(t.stateNode.nextSibling):null;return!0}function s1(){for(var t=Ct;t;)t=yr(t.nextSibling)}function Cs(){Ct=kt=null,ye=!1}function Wp(t){Zt===null?Zt=[t]:Zt.push(t)}var hb=Qn.ReactCurrentBatchConfig;function Xt(t,e){if(t&&t.defaultProps){e=we({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var mu=Fr(null),gu=null,Zi=null,Hp=null;function Gp(){Hp=Zi=gu=null}function Kp(t){var e=mu.current;ge(mu),t._currentValue=e}function ah(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ds(t,e){gu=t,Hp=Zi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dt=!0),t.firstContext=null)}function Wt(t){var e=t._currentValue;if(Hp!==t)if(t={context:t,memoizedValue:e,next:null},Zi===null){if(gu===null)throw Error(k(308));Zi=t,gu.dependencies={lanes:0,firstContext:t}}else Zi=Zi.next=t;return e}var ni=null;function qp(t){ni===null?ni=[t]:ni.push(t)}function o1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,qp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Wn(t,r)}function Wn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ir=!1;function Yp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function a1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Un(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Wn(t,n)}return i=r.interleaved,i===null?(e.next=e,qp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Wn(t,n)}function Nl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Dp(t,n)}}function Oy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function yu(t,e,n,r){var i=t.updateQueue;ir=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,v=a;switch(f=e,m=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){d=g.call(m,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,f=typeof g=="function"?g.call(m,d,f):g,f==null)break e;d=we({},d,f);break e;case 2:ir=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);vi|=o,t.lanes=o,t.memoizedState=d}}function Ny(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var l1=new ow.Component().refs;function lh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:we({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var gc={isMounted:function(t){return(t=t._reactInternals)?Ri(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=st(),i=wr(t),s=Un(r,i);s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,i),e!==null&&(on(e,t,i,r),Nl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=st(),i=wr(t),s=Un(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,i),e!==null&&(on(e,t,i,r),Nl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=st(),r=wr(t),i=Un(n,r);i.tag=2,e!=null&&(i.callback=e),e=vr(t,i,r),e!==null&&(on(e,t,r,n),Nl(e,t,r))}};function Ay(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Yo(n,r)||!Yo(i,s):!0}function u1(t,e,n){var r=!1,i=Rr,s=e.contextType;return typeof s=="object"&&s!==null?s=Wt(s):(i=gt(e)?mi:et.current,r=e.contextTypes,s=(r=r!=null)?Ss(t,i):Rr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=gc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Dy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&gc.enqueueReplaceState(e,e.state,null)}function uh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=l1,Yp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Wt(s):(s=gt(e)?mi:et.current,i.context=Ss(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(lh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&gc.enqueueReplaceState(i,i.state,null),yu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ao(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===l1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function cl(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ly(t){var e=t._init;return e(t._payload)}function c1(t){function e(p,h){if(t){var y=p.deletions;y===null?(p.deletions=[h],p.flags|=16):y.push(h)}}function n(p,h){if(!t)return null;for(;h!==null;)e(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=Er(p,h),p.index=0,p.sibling=null,p}function s(p,h,y){return p.index=y,t?(y=p.alternate,y!==null?(y=y.index,y<h?(p.flags|=2,h):y):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,h,y,S){return h===null||h.tag!==6?(h=Wd(y,p.mode,S),h.return=p,h):(h=i(h,y),h.return=p,h)}function l(p,h,y,S){var C=y.type;return C===Hi?c(p,h,y.props.children,S,y.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===rr&&Ly(C)===h.type)?(S=i(h,y.props),S.ref=ao(p,h,y),S.return=p,S):(S=Fl(y.type,y.key,y.props,null,p.mode,S),S.ref=ao(p,h,y),S.return=p,S)}function u(p,h,y,S){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=Hd(y,p.mode,S),h.return=p,h):(h=i(h,y.children||[]),h.return=p,h)}function c(p,h,y,S,C){return h===null||h.tag!==7?(h=li(y,p.mode,S,C),h.return=p,h):(h=i(h,y),h.return=p,h)}function d(p,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Wd(""+h,p.mode,y),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Za:return y=Fl(h.type,h.key,h.props,null,p.mode,y),y.ref=ao(p,null,h),y.return=p,y;case Wi:return h=Hd(h,p.mode,y),h.return=p,h;case rr:var S=h._init;return d(p,S(h._payload),y)}if(vo(h)||no(h))return h=li(h,p.mode,y,null),h.return=p,h;cl(p,h)}return null}function f(p,h,y,S){var C=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return C!==null?null:a(p,h,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Za:return y.key===C?l(p,h,y,S):null;case Wi:return y.key===C?u(p,h,y,S):null;case rr:return C=y._init,f(p,h,C(y._payload),S)}if(vo(y)||no(y))return C!==null?null:c(p,h,y,S,null);cl(p,y)}return null}function m(p,h,y,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(y)||null,a(h,p,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Za:return p=p.get(S.key===null?y:S.key)||null,l(h,p,S,C);case Wi:return p=p.get(S.key===null?y:S.key)||null,u(h,p,S,C);case rr:var I=S._init;return m(p,h,y,I(S._payload),C)}if(vo(S)||no(S))return p=p.get(y)||null,c(h,p,S,C,null);cl(h,S)}return null}function g(p,h,y,S){for(var C=null,I=null,E=h,P=h=0,B=null;E!==null&&P<y.length;P++){E.index>P?(B=E,E=null):B=E.sibling;var M=f(p,E,y[P],S);if(M===null){E===null&&(E=B);break}t&&E&&M.alternate===null&&e(p,E),h=s(M,h,P),I===null?C=M:I.sibling=M,I=M,E=B}if(P===y.length)return n(p,E),ye&&qr(p,P),C;if(E===null){for(;P<y.length;P++)E=d(p,y[P],S),E!==null&&(h=s(E,h,P),I===null?C=E:I.sibling=E,I=E);return ye&&qr(p,P),C}for(E=r(p,E);P<y.length;P++)B=m(E,p,P,y[P],S),B!==null&&(t&&B.alternate!==null&&E.delete(B.key===null?P:B.key),h=s(B,h,P),I===null?C=B:I.sibling=B,I=B);return t&&E.forEach(function(K){return e(p,K)}),ye&&qr(p,P),C}function v(p,h,y,S){var C=no(y);if(typeof C!="function")throw Error(k(150));if(y=C.call(y),y==null)throw Error(k(151));for(var I=C=null,E=h,P=h=0,B=null,M=y.next();E!==null&&!M.done;P++,M=y.next()){E.index>P?(B=E,E=null):B=E.sibling;var K=f(p,E,M.value,S);if(K===null){E===null&&(E=B);break}t&&E&&K.alternate===null&&e(p,E),h=s(K,h,P),I===null?C=K:I.sibling=K,I=K,E=B}if(M.done)return n(p,E),ye&&qr(p,P),C;if(E===null){for(;!M.done;P++,M=y.next())M=d(p,M.value,S),M!==null&&(h=s(M,h,P),I===null?C=M:I.sibling=M,I=M);return ye&&qr(p,P),C}for(E=r(p,E);!M.done;P++,M=y.next())M=m(E,p,P,M.value,S),M!==null&&(t&&M.alternate!==null&&E.delete(M.key===null?P:M.key),h=s(M,h,P),I===null?C=M:I.sibling=M,I=M);return t&&E.forEach(function($t){return e(p,$t)}),ye&&qr(p,P),C}function w(p,h,y,S){if(typeof y=="object"&&y!==null&&y.type===Hi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Za:e:{for(var C=y.key,I=h;I!==null;){if(I.key===C){if(C=y.type,C===Hi){if(I.tag===7){n(p,I.sibling),h=i(I,y.props.children),h.return=p,p=h;break e}}else if(I.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===rr&&Ly(C)===I.type){n(p,I.sibling),h=i(I,y.props),h.ref=ao(p,I,y),h.return=p,p=h;break e}n(p,I);break}else e(p,I);I=I.sibling}y.type===Hi?(h=li(y.props.children,p.mode,S,y.key),h.return=p,p=h):(S=Fl(y.type,y.key,y.props,null,p.mode,S),S.ref=ao(p,h,y),S.return=p,p=S)}return o(p);case Wi:e:{for(I=y.key;h!==null;){if(h.key===I)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){n(p,h.sibling),h=i(h,y.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else e(p,h);h=h.sibling}h=Hd(y,p.mode,S),h.return=p,p=h}return o(p);case rr:return I=y._init,w(p,h,I(y._payload),S)}if(vo(y))return g(p,h,y,S);if(no(y))return v(p,h,y,S);cl(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,y),h.return=p,p=h):(n(p,h),h=Wd(y,p.mode,S),h.return=p,p=h),o(p)):n(p,h)}return w}var xs=c1(!0),d1=c1(!1),Da={},wn=Fr(Da),Zo=Fr(Da),ea=Fr(Da);function ri(t){if(t===Da)throw Error(k(174));return t}function Qp(t,e){switch(de(ea,e),de(Zo,t),de(wn,Da),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:zf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=zf(e,t)}ge(wn),de(wn,e)}function Ts(){ge(wn),ge(Zo),ge(ea)}function f1(t){ri(ea.current);var e=ri(wn.current),n=zf(e,t.type);e!==n&&(de(Zo,t),de(wn,n))}function Xp(t){Zo.current===t&&(ge(wn),ge(Zo))}var ve=Fr(0);function vu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fd=[];function Jp(){for(var t=0;t<Fd.length;t++)Fd[t]._workInProgressVersionPrimary=null;Fd.length=0}var Al=Qn.ReactCurrentDispatcher,jd=Qn.ReactCurrentBatchConfig,yi=0,_e=null,be=null,Le=null,_u=!1,Ro=!1,ta=0,pb=0;function Ye(){throw Error(k(321))}function Zp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!cn(t[n],e[n]))return!1;return!0}function em(t,e,n,r,i,s){if(yi=s,_e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Al.current=t===null||t.memoizedState===null?vb:_b,t=n(r,i),Ro){s=0;do{if(Ro=!1,ta=0,25<=s)throw Error(k(301));s+=1,Le=be=null,e.updateQueue=null,Al.current=wb,t=n(r,i)}while(Ro)}if(Al.current=wu,e=be!==null&&be.next!==null,yi=0,Le=be=_e=null,_u=!1,e)throw Error(k(300));return t}function tm(){var t=ta!==0;return ta=0,t}function hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?_e.memoizedState=Le=t:Le=Le.next=t,Le}function Ht(){if(be===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=be.next;var e=Le===null?_e.memoizedState:Le.next;if(e!==null)Le=e,be=t;else{if(t===null)throw Error(k(310));be=t,t={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Le===null?_e.memoizedState=Le=t:Le=Le.next=t}return Le}function na(t,e){return typeof e=="function"?e(t):e}function Ud(t){var e=Ht(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=be,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((yi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,_e.lanes|=c,vi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,cn(r,e.memoizedState)||(dt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,_e.lanes|=s,vi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function zd(t){var e=Ht(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);cn(s,e.memoizedState)||(dt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function h1(){}function p1(t,e){var n=_e,r=Ht(),i=e(),s=!cn(r.memoizedState,i);if(s&&(r.memoizedState=i,dt=!0),r=r.queue,nm(y1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,ra(9,g1.bind(null,n,r,i,e),void 0,null),Fe===null)throw Error(k(349));yi&30||m1(n,e,i)}return i}function m1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function g1(t,e,n,r){e.value=n,e.getSnapshot=r,v1(e)&&_1(t)}function y1(t,e,n){return n(function(){v1(e)&&_1(t)})}function v1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!cn(t,n)}catch{return!0}}function _1(t){var e=Wn(t,1);e!==null&&on(e,t,1,-1)}function My(t){var e=hn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:t},e.queue=t,t=t.dispatch=yb.bind(null,_e,t),[e.memoizedState,t]}function ra(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function w1(){return Ht().memoizedState}function Dl(t,e,n,r){var i=hn();_e.flags|=t,i.memoizedState=ra(1|e,n,void 0,r===void 0?null:r)}function yc(t,e,n,r){var i=Ht();r=r===void 0?null:r;var s=void 0;if(be!==null){var o=be.memoizedState;if(s=o.destroy,r!==null&&Zp(r,o.deps)){i.memoizedState=ra(e,n,s,r);return}}_e.flags|=t,i.memoizedState=ra(1|e,n,s,r)}function $y(t,e){return Dl(8390656,8,t,e)}function nm(t,e){return yc(2048,8,t,e)}function E1(t,e){return yc(4,2,t,e)}function S1(t,e){return yc(4,4,t,e)}function C1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function x1(t,e,n){return n=n!=null?n.concat([t]):null,yc(4,4,C1.bind(null,e,t),n)}function rm(){}function T1(t,e){var n=Ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Zp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function I1(t,e){var n=Ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Zp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function k1(t,e,n){return yi&21?(cn(n,e)||(n=Rw(),_e.lanes|=n,vi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dt=!0),t.memoizedState=n)}function mb(t,e){var n=ie;ie=n!==0&&4>n?n:4,t(!0);var r=jd.transition;jd.transition={};try{t(!1),e()}finally{ie=n,jd.transition=r}}function b1(){return Ht().memoizedState}function gb(t,e,n){var r=wr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},P1(t))R1(e,n);else if(n=o1(t,e,n,r),n!==null){var i=st();on(n,t,r,i),O1(n,e,r)}}function yb(t,e,n){var r=wr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(P1(t))R1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,cn(a,o)){var l=e.interleaved;l===null?(i.next=i,qp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=o1(t,e,i,r),n!==null&&(i=st(),on(n,t,r,i),O1(n,e,r))}}function P1(t){var e=t.alternate;return t===_e||e!==null&&e===_e}function R1(t,e){Ro=_u=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function O1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Dp(t,n)}}var wu={readContext:Wt,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},vb={readContext:Wt,useCallback:function(t,e){return hn().memoizedState=[t,e===void 0?null:e],t},useContext:Wt,useEffect:$y,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Dl(4194308,4,C1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Dl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Dl(4,2,t,e)},useMemo:function(t,e){var n=hn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=hn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=gb.bind(null,_e,t),[r.memoizedState,t]},useRef:function(t){var e=hn();return t={current:t},e.memoizedState=t},useState:My,useDebugValue:rm,useDeferredValue:function(t){return hn().memoizedState=t},useTransition:function(){var t=My(!1),e=t[0];return t=mb.bind(null,t[1]),hn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=_e,i=hn();if(ye){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),Fe===null)throw Error(k(349));yi&30||m1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,$y(y1.bind(null,r,s,t),[t]),r.flags|=2048,ra(9,g1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=hn(),e=Fe.identifierPrefix;if(ye){var n=Mn,r=Ln;n=(r&~(1<<32-sn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ta++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=pb++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},_b={readContext:Wt,useCallback:T1,useContext:Wt,useEffect:nm,useImperativeHandle:x1,useInsertionEffect:E1,useLayoutEffect:S1,useMemo:I1,useReducer:Ud,useRef:w1,useState:function(){return Ud(na)},useDebugValue:rm,useDeferredValue:function(t){var e=Ht();return k1(e,be.memoizedState,t)},useTransition:function(){var t=Ud(na)[0],e=Ht().memoizedState;return[t,e]},useMutableSource:h1,useSyncExternalStore:p1,useId:b1,unstable_isNewReconciler:!1},wb={readContext:Wt,useCallback:T1,useContext:Wt,useEffect:nm,useImperativeHandle:x1,useInsertionEffect:E1,useLayoutEffect:S1,useMemo:I1,useReducer:zd,useRef:w1,useState:function(){return zd(na)},useDebugValue:rm,useDeferredValue:function(t){var e=Ht();return be===null?e.memoizedState=t:k1(e,be.memoizedState,t)},useTransition:function(){var t=zd(na)[0],e=Ht().memoizedState;return[t,e]},useMutableSource:h1,useSyncExternalStore:p1,useId:b1,unstable_isNewReconciler:!1};function Is(t,e){try{var n="",r=e;do n+=qI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Bd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ch(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Eb=typeof WeakMap=="function"?WeakMap:Map;function N1(t,e,n){n=Un(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Su||(Su=!0,wh=r),ch(t,e)},n}function A1(t,e,n){n=Un(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ch(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ch(t,e),typeof r!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Fy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Eb;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Lb.bind(null,t,e,n),e.then(t,t))}function jy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Uy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Un(-1,1),e.tag=2,vr(n,e,1))),n.lanes|=1),t)}var Sb=Qn.ReactCurrentOwner,dt=!1;function rt(t,e,n,r){e.child=t===null?d1(e,null,n,r):xs(e,t.child,n,r)}function zy(t,e,n,r,i){n=n.render;var s=e.ref;return ds(e,i),r=em(t,e,n,r,s,i),n=tm(),t!==null&&!dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Hn(t,e,i)):(ye&&n&&Bp(e),e.flags|=1,rt(t,e,r,i),e.child)}function By(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!dm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,D1(t,e,s,r,i)):(t=Fl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Yo,n(o,r)&&t.ref===e.ref)return Hn(t,e,i)}return e.flags|=1,t=Er(s,r),t.ref=e.ref,t.return=e,e.child=t}function D1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Yo(s,r)&&t.ref===e.ref)if(dt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(dt=!0);else return e.lanes=t.lanes,Hn(t,e,i)}return dh(t,e,n,r,i)}function L1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(ts,St),St|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,de(ts,St),St|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(ts,St),St|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,de(ts,St),St|=r;return rt(t,e,i,n),e.child}function M1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function dh(t,e,n,r,i){var s=gt(n)?mi:et.current;return s=Ss(e,s),ds(e,i),n=em(t,e,n,r,s,i),r=tm(),t!==null&&!dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Hn(t,e,i)):(ye&&r&&Bp(e),e.flags|=1,rt(t,e,n,i),e.child)}function Vy(t,e,n,r,i){if(gt(n)){var s=!0;fu(e)}else s=!1;if(ds(e,i),e.stateNode===null)Ll(t,e),u1(e,n,r),uh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Wt(u):(u=gt(n)?mi:et.current,u=Ss(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Dy(e,o,r,u),ir=!1;var f=e.memoizedState;o.state=f,yu(e,r,o,i),l=e.memoizedState,a!==r||f!==l||mt.current||ir?(typeof c=="function"&&(lh(e,n,c,r),l=e.memoizedState),(a=ir||Ay(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,a1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Xt(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Wt(l):(l=gt(n)?mi:et.current,l=Ss(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Dy(e,o,r,l),ir=!1,f=e.memoizedState,o.state=f,yu(e,r,o,i);var g=e.memoizedState;a!==d||f!==g||mt.current||ir?(typeof m=="function"&&(lh(e,n,m,r),g=e.memoizedState),(u=ir||Ay(e,n,u,r,f,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return fh(t,e,n,r,s,i)}function fh(t,e,n,r,i,s){M1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&by(e,n,!1),Hn(t,e,s);r=e.stateNode,Sb.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=xs(e,t.child,null,s),e.child=xs(e,null,a,s)):rt(t,e,a,s),e.memoizedState=r.state,i&&by(e,n,!0),e.child}function $1(t){var e=t.stateNode;e.pendingContext?ky(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ky(t,e.context,!1),Qp(t,e.containerInfo)}function Wy(t,e,n,r,i){return Cs(),Wp(i),e.flags|=256,rt(t,e,n,r),e.child}var hh={dehydrated:null,treeContext:null,retryLane:0};function ph(t){return{baseLanes:t,cachePool:null,transitions:null}}function F1(t,e,n){var r=e.pendingProps,i=ve.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),de(ve,i&1),t===null)return oh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=wc(o,r,0,null),t=li(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ph(n),e.memoizedState=hh,t):im(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Cb(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Er(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Er(a,s):(s=li(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ph(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=hh,r}return s=t.child,t=s.sibling,r=Er(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function im(t,e){return e=wc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function dl(t,e,n,r){return r!==null&&Wp(r),xs(e,t.child,null,n),t=im(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Cb(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Bd(Error(k(422))),dl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=wc({mode:"visible",children:r.children},i,0,null),s=li(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&xs(e,t.child,null,o),e.child.memoizedState=ph(o),e.memoizedState=hh,s);if(!(e.mode&1))return dl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=Bd(s,r,void 0),dl(t,e,o,r)}if(a=(o&t.childLanes)!==0,dt||a){if(r=Fe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Wn(t,i),on(r,t,i,-1))}return cm(),r=Bd(Error(k(421))),dl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Mb.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ct=yr(i.nextSibling),kt=e,ye=!0,Zt=null,t!==null&&(Ut[zt++]=Ln,Ut[zt++]=Mn,Ut[zt++]=gi,Ln=t.id,Mn=t.overflow,gi=e),e=im(e,r.children),e.flags|=4096,e)}function Hy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ah(t.return,e,n)}function Vd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function j1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(rt(t,e,r.children,n),r=ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Hy(t,n,e);else if(t.tag===19)Hy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(de(ve,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&vu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Vd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&vu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Vd(e,!0,n,null,s);break;case"together":Vd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ll(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Hn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),vi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=Er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function xb(t,e,n){switch(e.tag){case 3:$1(e),Cs();break;case 5:f1(e);break;case 1:gt(e.type)&&fu(e);break;case 4:Qp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;de(mu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(de(ve,ve.current&1),e.flags|=128,null):n&e.child.childLanes?F1(t,e,n):(de(ve,ve.current&1),t=Hn(t,e,n),t!==null?t.sibling:null);de(ve,ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return j1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(ve,ve.current),r)break;return null;case 22:case 23:return e.lanes=0,L1(t,e,n)}return Hn(t,e,n)}var U1,mh,z1,B1;U1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};mh=function(){};z1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ri(wn.current);var s=null;switch(n){case"input":i=$f(t,i),r=$f(t,r),s=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),s=[];break;case"textarea":i=Uf(t,i),r=Uf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=cu)}Bf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Bo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Bo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&fe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};B1=function(t,e,n,r){n!==r&&(e.flags|=4)};function lo(t,e){if(!ye)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Qe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Tb(t,e,n){var r=e.pendingProps;switch(Vp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(e),null;case 1:return gt(e.type)&&du(),Qe(e),null;case 3:return r=e.stateNode,Ts(),ge(mt),ge(et),Jp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ul(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Zt!==null&&(Ch(Zt),Zt=null))),mh(t,e),Qe(e),null;case 5:Xp(e);var i=ri(ea.current);if(n=e.type,t!==null&&e.stateNode!=null)z1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return Qe(e),null}if(t=ri(wn.current),ul(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[vn]=e,r[Jo]=s,t=(e.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<wo.length;i++)fe(wo[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":ey(r,s),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},fe("invalid",r);break;case"textarea":ny(r,s),fe("invalid",r)}Bf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ll(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ll(r.textContent,a,t),i=["children",""+a]):Bo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&fe("scroll",r)}switch(n){case"input":el(r),ty(r,s,!0);break;case"textarea":el(r),ry(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=cu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=mw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[vn]=e,t[Jo]=r,U1(t,e,!1,!1),e.stateNode=t;e:{switch(o=Vf(n,r),n){case"dialog":fe("cancel",t),fe("close",t),i=r;break;case"iframe":case"object":case"embed":fe("load",t),i=r;break;case"video":case"audio":for(i=0;i<wo.length;i++)fe(wo[i],t);i=r;break;case"source":fe("error",t),i=r;break;case"img":case"image":case"link":fe("error",t),fe("load",t),i=r;break;case"details":fe("toggle",t),i=r;break;case"input":ey(t,r),i=$f(t,r),fe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),fe("invalid",t);break;case"textarea":ny(t,r),i=Uf(t,r),fe("invalid",t);break;default:i=r}Bf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?vw(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&gw(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Vo(t,l):typeof l=="number"&&Vo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Bo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&fe("scroll",t):l!=null&&bp(t,s,l,o))}switch(n){case"input":el(t),ty(t,r,!1);break;case"textarea":el(t),ry(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Pr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?as(t,!!r.multiple,s,!1):r.defaultValue!=null&&as(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=cu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qe(e),null;case 6:if(t&&e.stateNode!=null)B1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=ri(ea.current),ri(wn.current),ul(e)){if(r=e.stateNode,n=e.memoizedProps,r[vn]=e,(s=r.nodeValue!==n)&&(t=kt,t!==null))switch(t.tag){case 3:ll(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ll(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vn]=e,e.stateNode=r}return Qe(e),null;case 13:if(ge(ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ye&&Ct!==null&&e.mode&1&&!(e.flags&128))s1(),Cs(),e.flags|=98560,s=!1;else if(s=ul(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[vn]=e}else Cs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qe(e),s=!1}else Zt!==null&&(Ch(Zt),Zt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ve.current&1?Oe===0&&(Oe=3):cm())),e.updateQueue!==null&&(e.flags|=4),Qe(e),null);case 4:return Ts(),mh(t,e),t===null&&Qo(e.stateNode.containerInfo),Qe(e),null;case 10:return Kp(e.type._context),Qe(e),null;case 17:return gt(e.type)&&du(),Qe(e),null;case 19:if(ge(ve),s=e.memoizedState,s===null)return Qe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)lo(s,!1);else{if(Oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=vu(t),o!==null){for(e.flags|=128,lo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return de(ve,ve.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ce()>ks&&(e.flags|=128,r=!0,lo(s,!1),e.lanes=4194304)}else{if(!r)if(t=vu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),lo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ye)return Qe(e),null}else 2*Ce()-s.renderingStartTime>ks&&n!==1073741824&&(e.flags|=128,r=!0,lo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ce(),e.sibling=null,n=ve.current,de(ve,r?n&1|2:n&1),e):(Qe(e),null);case 22:case 23:return um(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?St&1073741824&&(Qe(e),e.subtreeFlags&6&&(e.flags|=8192)):Qe(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function Ib(t,e){switch(Vp(e),e.tag){case 1:return gt(e.type)&&du(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ts(),ge(mt),ge(et),Jp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Xp(e),null;case 13:if(ge(ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));Cs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(ve),null;case 4:return Ts(),null;case 10:return Kp(e.type._context),null;case 22:case 23:return um(),null;case 24:return null;default:return null}}var fl=!1,Je=!1,kb=typeof WeakSet=="function"?WeakSet:Set,N=null;function es(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(t,e,r)}else n.current=null}function gh(t,e,n){try{n()}catch(r){Ee(t,e,r)}}var Gy=!1;function bb(t,e){if(Zf=au,t=Gw(),zp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(eh={focusedElem:t,selectionRange:n},au=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,w=g.memoizedState,p=e.stateNode,h=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:Xt(e.type,v),w);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(S){Ee(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return g=Gy,Gy=!1,g}function Oo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&gh(e,n,s)}i=i.next}while(i!==r)}}function vc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function yh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function V1(t){var e=t.alternate;e!==null&&(t.alternate=null,V1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[vn],delete e[Jo],delete e[rh],delete e[cb],delete e[db])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function W1(t){return t.tag===5||t.tag===3||t.tag===4}function Ky(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||W1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=cu));else if(r!==4&&(t=t.child,t!==null))for(vh(t,e,n),t=t.sibling;t!==null;)vh(t,e,n),t=t.sibling}function _h(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(_h(t,e,n),t=t.sibling;t!==null;)_h(t,e,n),t=t.sibling}var Be=null,Jt=!1;function er(t,e,n){for(n=n.child;n!==null;)H1(t,e,n),n=n.sibling}function H1(t,e,n){if(_n&&typeof _n.onCommitFiberUnmount=="function")try{_n.onCommitFiberUnmount(cc,n)}catch{}switch(n.tag){case 5:Je||es(n,e);case 6:var r=Be,i=Jt;Be=null,er(t,e,n),Be=r,Jt=i,Be!==null&&(Jt?(t=Be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(Jt?(t=Be,n=n.stateNode,t.nodeType===8?Md(t.parentNode,n):t.nodeType===1&&Md(t,n),Ko(t)):Md(Be,n.stateNode));break;case 4:r=Be,i=Jt,Be=n.stateNode.containerInfo,Jt=!0,er(t,e,n),Be=r,Jt=i;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&gh(n,e,o),i=i.next}while(i!==r)}er(t,e,n);break;case 1:if(!Je&&(es(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ee(n,e,a)}er(t,e,n);break;case 21:er(t,e,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,er(t,e,n),Je=r):er(t,e,n);break;default:er(t,e,n)}}function qy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new kb),e.forEach(function(r){var i=$b.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Be=a.stateNode,Jt=!1;break e;case 3:Be=a.stateNode.containerInfo,Jt=!0;break e;case 4:Be=a.stateNode.containerInfo,Jt=!0;break e}a=a.return}if(Be===null)throw Error(k(160));H1(s,o,i),Be=null,Jt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ee(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)G1(e,t),e=e.sibling}function G1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qt(e,t),fn(t),r&4){try{Oo(3,t,t.return),vc(3,t)}catch(v){Ee(t,t.return,v)}try{Oo(5,t,t.return)}catch(v){Ee(t,t.return,v)}}break;case 1:qt(e,t),fn(t),r&512&&n!==null&&es(n,n.return);break;case 5:if(qt(e,t),fn(t),r&512&&n!==null&&es(n,n.return),t.flags&32){var i=t.stateNode;try{Vo(i,"")}catch(v){Ee(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&hw(i,s),Vf(a,o);var u=Vf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?vw(i,d):c==="dangerouslySetInnerHTML"?gw(i,d):c==="children"?Vo(i,d):bp(i,c,d,u)}switch(a){case"input":Ff(i,s);break;case"textarea":pw(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?as(i,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?as(i,!!s.multiple,s.defaultValue,!0):as(i,!!s.multiple,s.multiple?[]:"",!1))}i[Jo]=s}catch(v){Ee(t,t.return,v)}}break;case 6:if(qt(e,t),fn(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Ee(t,t.return,v)}}break;case 3:if(qt(e,t),fn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ko(e.containerInfo)}catch(v){Ee(t,t.return,v)}break;case 4:qt(e,t),fn(t);break;case 13:qt(e,t),fn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(am=Ce())),r&4&&qy(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Je=(u=Je)||c,qt(e,t),Je=u):qt(e,t),fn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(N=t,c=t.child;c!==null;){for(d=N=c;N!==null;){switch(f=N,m=f.child,f.tag){case 0:case 11:case 14:case 15:Oo(4,f,f.return);break;case 1:es(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){Ee(r,n,v)}}break;case 5:es(f,f.return);break;case 22:if(f.memoizedState!==null){Qy(d);continue}}m!==null?(m.return=f,N=m):Qy(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=yw("display",o))}catch(v){Ee(t,t.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){Ee(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:qt(e,t),fn(t),r&4&&qy(t);break;case 21:break;default:qt(e,t),fn(t)}}function fn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(W1(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Vo(i,""),r.flags&=-33);var s=Ky(t);_h(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ky(t);vh(t,a,o);break;default:throw Error(k(161))}}catch(l){Ee(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Pb(t,e,n){N=t,K1(t)}function K1(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||fl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Je;a=fl;var u=Je;if(fl=o,(Je=l)&&!u)for(N=i;N!==null;)o=N,l=o.child,o.tag===22&&o.memoizedState!==null?Xy(i):l!==null?(l.return=o,N=l):Xy(i);for(;s!==null;)N=s,K1(s),s=s.sibling;N=i,fl=a,Je=u}Yy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):Yy(t)}}function Yy(t){for(;N!==null;){var e=N;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Je||vc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Je)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Xt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ny(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ny(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Ko(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Je||e.flags&512&&yh(e)}catch(f){Ee(e,e.return,f)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function Qy(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function Xy(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{vc(4,e)}catch(l){Ee(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ee(e,i,l)}}var s=e.return;try{yh(e)}catch(l){Ee(e,s,l)}break;case 5:var o=e.return;try{yh(e)}catch(l){Ee(e,o,l)}}}catch(l){Ee(e,e.return,l)}if(e===t){N=null;break}var a=e.sibling;if(a!==null){a.return=e.return,N=a;break}N=e.return}}var Rb=Math.ceil,Eu=Qn.ReactCurrentDispatcher,sm=Qn.ReactCurrentOwner,Vt=Qn.ReactCurrentBatchConfig,Q=0,Fe=null,ke=null,He=0,St=0,ts=Fr(0),Oe=0,ia=null,vi=0,_c=0,om=0,No=null,ut=null,am=0,ks=1/0,On=null,Su=!1,wh=null,_r=null,hl=!1,fr=null,Cu=0,Ao=0,Eh=null,Ml=-1,$l=0;function st(){return Q&6?Ce():Ml!==-1?Ml:Ml=Ce()}function wr(t){return t.mode&1?Q&2&&He!==0?He&-He:hb.transition!==null?($l===0&&($l=Rw()),$l):(t=ie,t!==0||(t=window.event,t=t===void 0?16:$w(t.type)),t):1}function on(t,e,n,r){if(50<Ao)throw Ao=0,Eh=null,Error(k(185));Oa(t,n,r),(!(Q&2)||t!==Fe)&&(t===Fe&&(!(Q&2)&&(_c|=n),Oe===4&&or(t,He)),yt(t,r),n===1&&Q===0&&!(e.mode&1)&&(ks=Ce()+500,mc&&jr()))}function yt(t,e){var n=t.callbackNode;hk(t,e);var r=ou(t,t===Fe?He:0);if(r===0)n!==null&&oy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&oy(n),e===1)t.tag===0?fb(Jy.bind(null,t)):n1(Jy.bind(null,t)),lb(function(){!(Q&6)&&jr()}),n=null;else{switch(Ow(r)){case 1:n=Ap;break;case 4:n=bw;break;case 16:n=su;break;case 536870912:n=Pw;break;default:n=su}n=tE(n,q1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function q1(t,e){if(Ml=-1,$l=0,Q&6)throw Error(k(327));var n=t.callbackNode;if(fs()&&t.callbackNode!==n)return null;var r=ou(t,t===Fe?He:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=xu(t,r);else{e=r;var i=Q;Q|=2;var s=Q1();(Fe!==t||He!==e)&&(On=null,ks=Ce()+500,ai(t,e));do try{Ab();break}catch(a){Y1(t,a)}while(1);Gp(),Eu.current=s,Q=i,ke!==null?e=0:(Fe=null,He=0,e=Oe)}if(e!==0){if(e===2&&(i=qf(t),i!==0&&(r=i,e=Sh(t,i))),e===1)throw n=ia,ai(t,0),or(t,r),yt(t,Ce()),n;if(e===6)or(t,r);else{if(i=t.current.alternate,!(r&30)&&!Ob(i)&&(e=xu(t,r),e===2&&(s=qf(t),s!==0&&(r=s,e=Sh(t,s))),e===1))throw n=ia,ai(t,0),or(t,r),yt(t,Ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:Yr(t,ut,On);break;case 3:if(or(t,r),(r&130023424)===r&&(e=am+500-Ce(),10<e)){if(ou(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){st(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=nh(Yr.bind(null,t,ut,On),e);break}Yr(t,ut,On);break;case 4:if(or(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-sn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rb(r/1960))-r,10<r){t.timeoutHandle=nh(Yr.bind(null,t,ut,On),r);break}Yr(t,ut,On);break;case 5:Yr(t,ut,On);break;default:throw Error(k(329))}}}return yt(t,Ce()),t.callbackNode===n?q1.bind(null,t):null}function Sh(t,e){var n=No;return t.current.memoizedState.isDehydrated&&(ai(t,e).flags|=256),t=xu(t,e),t!==2&&(e=ut,ut=n,e!==null&&Ch(e)),t}function Ch(t){ut===null?ut=t:ut.push.apply(ut,t)}function Ob(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!cn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function or(t,e){for(e&=~om,e&=~_c,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-sn(e),r=1<<n;t[n]=-1,e&=~r}}function Jy(t){if(Q&6)throw Error(k(327));fs();var e=ou(t,0);if(!(e&1))return yt(t,Ce()),null;var n=xu(t,e);if(t.tag!==0&&n===2){var r=qf(t);r!==0&&(e=r,n=Sh(t,r))}if(n===1)throw n=ia,ai(t,0),or(t,e),yt(t,Ce()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Yr(t,ut,On),yt(t,Ce()),null}function lm(t,e){var n=Q;Q|=1;try{return t(e)}finally{Q=n,Q===0&&(ks=Ce()+500,mc&&jr())}}function _i(t){fr!==null&&fr.tag===0&&!(Q&6)&&fs();var e=Q;Q|=1;var n=Vt.transition,r=ie;try{if(Vt.transition=null,ie=1,t)return t()}finally{ie=r,Vt.transition=n,Q=e,!(Q&6)&&jr()}}function um(){St=ts.current,ge(ts)}function ai(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ab(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(Vp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&du();break;case 3:Ts(),ge(mt),ge(et),Jp();break;case 5:Xp(r);break;case 4:Ts();break;case 13:ge(ve);break;case 19:ge(ve);break;case 10:Kp(r.type._context);break;case 22:case 23:um()}n=n.return}if(Fe=t,ke=t=Er(t.current,null),He=St=e,Oe=0,ia=null,om=_c=vi=0,ut=No=null,ni!==null){for(e=0;e<ni.length;e++)if(n=ni[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ni=null}return t}function Y1(t,e){do{var n=ke;try{if(Gp(),Al.current=wu,_u){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}_u=!1}if(yi=0,Le=be=_e=null,Ro=!1,ta=0,sm.current=null,n===null||n.return===null){Oe=1,ia=e,ke=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=He,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=jy(o);if(m!==null){m.flags&=-257,Uy(m,o,a,s,e),m.mode&1&&Fy(s,u,e),e=m,l=u;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if(!(e&1)){Fy(s,u,e),cm();break e}l=Error(k(426))}}else if(ye&&a.mode&1){var w=jy(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Uy(w,o,a,s,e),Wp(Is(l,a));break e}}s=l=Is(l,a),Oe!==4&&(Oe=2),No===null?No=[s]:No.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=N1(s,l,e);Oy(s,p);break e;case 1:a=l;var h=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(_r===null||!_r.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=A1(s,a,e);Oy(s,S);break e}}s=s.return}while(s!==null)}J1(n)}catch(C){e=C,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(1)}function Q1(){var t=Eu.current;return Eu.current=wu,t===null?wu:t}function cm(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),Fe===null||!(vi&268435455)&&!(_c&268435455)||or(Fe,He)}function xu(t,e){var n=Q;Q|=2;var r=Q1();(Fe!==t||He!==e)&&(On=null,ai(t,e));do try{Nb();break}catch(i){Y1(t,i)}while(1);if(Gp(),Q=n,Eu.current=r,ke!==null)throw Error(k(261));return Fe=null,He=0,Oe}function Nb(){for(;ke!==null;)X1(ke)}function Ab(){for(;ke!==null&&!ik();)X1(ke)}function X1(t){var e=eE(t.alternate,t,St);t.memoizedProps=t.pendingProps,e===null?J1(t):ke=e,sm.current=null}function J1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ib(n,e),n!==null){n.flags&=32767,ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Oe=6,ke=null;return}}else if(n=Tb(n,e,St),n!==null){ke=n;return}if(e=e.sibling,e!==null){ke=e;return}ke=e=t}while(e!==null);Oe===0&&(Oe=5)}function Yr(t,e,n){var r=ie,i=Vt.transition;try{Vt.transition=null,ie=1,Db(t,e,n,r)}finally{Vt.transition=i,ie=r}return null}function Db(t,e,n,r){do fs();while(fr!==null);if(Q&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(pk(t,s),t===Fe&&(ke=Fe=null,He=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hl||(hl=!0,tE(su,function(){return fs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Vt.transition,Vt.transition=null;var o=ie;ie=1;var a=Q;Q|=4,sm.current=null,bb(t,n),G1(n,t),eb(eh),au=!!Zf,eh=Zf=null,t.current=n,Pb(n),sk(),Q=a,ie=o,Vt.transition=s}else t.current=n;if(hl&&(hl=!1,fr=t,Cu=i),s=t.pendingLanes,s===0&&(_r=null),lk(n.stateNode),yt(t,Ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Su)throw Su=!1,t=wh,wh=null,t;return Cu&1&&t.tag!==0&&fs(),s=t.pendingLanes,s&1?t===Eh?Ao++:(Ao=0,Eh=t):Ao=0,jr(),null}function fs(){if(fr!==null){var t=Ow(Cu),e=Vt.transition,n=ie;try{if(Vt.transition=null,ie=16>t?16:t,fr===null)var r=!1;else{if(t=fr,fr=null,Cu=0,Q&6)throw Error(k(331));var i=Q;for(Q|=4,N=t.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(N=u;N!==null;){var c=N;switch(c.tag){case 0:case 11:case 15:Oo(8,c,s)}var d=c.child;if(d!==null)d.return=c,N=d;else for(;N!==null;){c=N;var f=c.sibling,m=c.return;if(V1(c),c===u){N=null;break}if(f!==null){f.return=m,N=f;break}N=m}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Oo(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,N=p;break e}N=s.return}}var h=t.current;for(N=h;N!==null;){o=N;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,N=y;else e:for(o=h;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:vc(9,a)}}catch(C){Ee(a,a.return,C)}if(a===o){N=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,N=S;break e}N=a.return}}if(Q=i,jr(),_n&&typeof _n.onPostCommitFiberRoot=="function")try{_n.onPostCommitFiberRoot(cc,t)}catch{}r=!0}return r}finally{ie=n,Vt.transition=e}}return!1}function Zy(t,e,n){e=Is(n,e),e=N1(t,e,1),t=vr(t,e,1),e=st(),t!==null&&(Oa(t,1,e),yt(t,e))}function Ee(t,e,n){if(t.tag===3)Zy(t,t,n);else for(;e!==null;){if(e.tag===3){Zy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_r===null||!_r.has(r))){t=Is(n,t),t=A1(e,t,1),e=vr(e,t,1),t=st(),e!==null&&(Oa(e,1,t),yt(e,t));break}}e=e.return}}function Lb(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=st(),t.pingedLanes|=t.suspendedLanes&n,Fe===t&&(He&n)===n&&(Oe===4||Oe===3&&(He&130023424)===He&&500>Ce()-am?ai(t,0):om|=n),yt(t,e)}function Z1(t,e){e===0&&(t.mode&1?(e=rl,rl<<=1,!(rl&130023424)&&(rl=4194304)):e=1);var n=st();t=Wn(t,e),t!==null&&(Oa(t,e,n),yt(t,n))}function Mb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Z1(t,n)}function $b(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),Z1(t,n)}var eE;eE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mt.current)dt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dt=!1,xb(t,e,n);dt=!!(t.flags&131072)}else dt=!1,ye&&e.flags&1048576&&r1(e,pu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ll(t,e),t=e.pendingProps;var i=Ss(e,et.current);ds(e,n),i=em(null,e,r,t,i,n);var s=tm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gt(r)?(s=!0,fu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Yp(e),i.updater=gc,e.stateNode=i,i._reactInternals=e,uh(e,r,t,n),e=fh(null,e,r,!0,s,n)):(e.tag=0,ye&&s&&Bp(e),rt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ll(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=jb(r),t=Xt(r,t),i){case 0:e=dh(null,e,r,t,n);break e;case 1:e=Vy(null,e,r,t,n);break e;case 11:e=zy(null,e,r,t,n);break e;case 14:e=By(null,e,r,Xt(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),dh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),Vy(t,e,r,i,n);case 3:e:{if($1(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,a1(t,e),yu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Is(Error(k(423)),e),e=Wy(t,e,r,n,i);break e}else if(r!==i){i=Is(Error(k(424)),e),e=Wy(t,e,r,n,i);break e}else for(Ct=yr(e.stateNode.containerInfo.firstChild),kt=e,ye=!0,Zt=null,n=d1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cs(),r===i){e=Hn(t,e,n);break e}rt(t,e,r,n)}e=e.child}return e;case 5:return f1(e),t===null&&oh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,th(r,i)?o=null:s!==null&&th(r,s)&&(e.flags|=32),M1(t,e),rt(t,e,o,n),e.child;case 6:return t===null&&oh(e),null;case 13:return F1(t,e,n);case 4:return Qp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=xs(e,null,r,n):rt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),zy(t,e,r,i,n);case 7:return rt(t,e,e.pendingProps,n),e.child;case 8:return rt(t,e,e.pendingProps.children,n),e.child;case 12:return rt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,de(mu,r._currentValue),r._currentValue=o,s!==null)if(cn(s.value,o)){if(s.children===i.children&&!mt.current){e=Hn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Un(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ah(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ah(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}rt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ds(e,n),i=Wt(i),r=r(i),e.flags|=1,rt(t,e,r,n),e.child;case 14:return r=e.type,i=Xt(r,e.pendingProps),i=Xt(r.type,i),By(t,e,r,i,n);case 15:return D1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),Ll(t,e),e.tag=1,gt(r)?(t=!0,fu(e)):t=!1,ds(e,n),u1(e,r,i),uh(e,r,i,n),fh(null,e,r,!0,t,n);case 19:return j1(t,e,n);case 22:return L1(t,e,n)}throw Error(k(156,e.tag))};function tE(t,e){return kw(t,e)}function Fb(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(t,e,n,r){return new Fb(t,e,n,r)}function dm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function jb(t){if(typeof t=="function")return dm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Rp)return 11;if(t===Op)return 14}return 2}function Er(t,e){var n=t.alternate;return n===null?(n=Bt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")dm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Hi:return li(n.children,i,s,e);case Pp:o=8,i|=8;break;case Af:return t=Bt(12,n,e,i|2),t.elementType=Af,t.lanes=s,t;case Df:return t=Bt(13,n,e,i),t.elementType=Df,t.lanes=s,t;case Lf:return t=Bt(19,n,e,i),t.elementType=Lf,t.lanes=s,t;case cw:return wc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case lw:o=10;break e;case uw:o=9;break e;case Rp:o=11;break e;case Op:o=14;break e;case rr:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=Bt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function li(t,e,n,r){return t=Bt(7,t,r,e),t.lanes=n,t}function wc(t,e,n,r){return t=Bt(22,t,r,e),t.elementType=cw,t.lanes=n,t.stateNode={isHidden:!1},t}function Wd(t,e,n){return t=Bt(6,t,null,e),t.lanes=n,t}function Hd(t,e,n){return e=Bt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ub(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Td(0),this.expirationTimes=Td(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Td(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function fm(t,e,n,r,i,s,o,a,l){return t=new Ub(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yp(s),t}function zb(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function nE(t){if(!t)return Rr;t=t._reactInternals;e:{if(Ri(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(gt(n))return t1(t,n,e)}return e}function rE(t,e,n,r,i,s,o,a,l){return t=fm(n,r,!0,t,i,s,o,a,l),t.context=nE(null),n=t.current,r=st(),i=wr(n),s=Un(r,i),s.callback=e??null,vr(n,s,i),t.current.lanes=i,Oa(t,i,r),yt(t,r),t}function Ec(t,e,n,r){var i=e.current,s=st(),o=wr(i);return n=nE(n),e.context===null?e.context=n:e.pendingContext=n,e=Un(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=vr(i,e,o),t!==null&&(on(t,i,o,s),Nl(t,i,o)),o}function Tu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ev(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function hm(t,e){ev(t,e),(t=t.alternate)&&ev(t,e)}function Bb(){return null}var iE=typeof reportError=="function"?reportError:function(t){console.error(t)};function pm(t){this._internalRoot=t}Sc.prototype.render=pm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));Ec(t,e,null,null)};Sc.prototype.unmount=pm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_i(function(){Ec(null,t,null,null)}),e[Vn]=null}};function Sc(t){this._internalRoot=t}Sc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Dw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<sr.length&&e!==0&&e<sr[n].priority;n++);sr.splice(n,0,t),n===0&&Mw(t)}};function mm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Cc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function tv(){}function Vb(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Tu(o);s.call(u)}}var o=rE(e,r,t,0,null,!1,!1,"",tv);return t._reactRootContainer=o,t[Vn]=o.current,Qo(t.nodeType===8?t.parentNode:t),_i(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Tu(l);a.call(u)}}var l=fm(t,0,!1,null,null,!1,!1,"",tv);return t._reactRootContainer=l,t[Vn]=l.current,Qo(t.nodeType===8?t.parentNode:t),_i(function(){Ec(e,l,n,r)}),l}function xc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Tu(o);a.call(l)}}Ec(e,o,t,i)}else o=Vb(n,e,t,i,r);return Tu(o)}Nw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=_o(e.pendingLanes);n!==0&&(Dp(e,n|1),yt(e,Ce()),!(Q&6)&&(ks=Ce()+500,jr()))}break;case 13:_i(function(){var r=Wn(t,1);if(r!==null){var i=st();on(r,t,1,i)}}),hm(t,1)}};Lp=function(t){if(t.tag===13){var e=Wn(t,134217728);if(e!==null){var n=st();on(e,t,134217728,n)}hm(t,134217728)}};Aw=function(t){if(t.tag===13){var e=wr(t),n=Wn(t,e);if(n!==null){var r=st();on(n,t,e,r)}hm(t,e)}};Dw=function(){return ie};Lw=function(t,e){var n=ie;try{return ie=t,e()}finally{ie=n}};Hf=function(t,e,n){switch(e){case"input":if(Ff(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=pc(r);if(!i)throw Error(k(90));fw(r),Ff(r,i)}}}break;case"textarea":pw(t,n);break;case"select":e=n.value,e!=null&&as(t,!!n.multiple,e,!1)}};Ew=lm;Sw=_i;var Wb={usingClientEntryPoint:!1,Events:[Aa,Yi,pc,_w,ww,lm]},uo={findFiberByHostInstance:ti,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Hb={bundleType:uo.bundleType,version:uo.version,rendererPackageName:uo.rendererPackageName,rendererConfig:uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Tw(t),t===null?null:t.stateNode},findFiberByHostInstance:uo.findFiberByHostInstance||Bb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pl.isDisabled&&pl.supportsFiber)try{cc=pl.inject(Hb),_n=pl}catch{}}At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wb;At.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mm(e))throw Error(k(200));return zb(t,e,null,n)};At.createRoot=function(t,e){if(!mm(t))throw Error(k(299));var n=!1,r="",i=iE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=fm(t,1,!1,null,null,n,!1,r,i),t[Vn]=e.current,Qo(t.nodeType===8?t.parentNode:t),new pm(e)};At.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=Tw(e),t=t===null?null:t.stateNode,t};At.flushSync=function(t){return _i(t)};At.hydrate=function(t,e,n){if(!Cc(e))throw Error(k(200));return xc(null,t,e,!0,n)};At.hydrateRoot=function(t,e,n){if(!mm(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=iE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=rE(e,null,t,1,n??null,i,!1,s,o),t[Vn]=e.current,Qo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Sc(e)};At.render=function(t,e,n){if(!Cc(e))throw Error(k(200));return xc(null,t,e,!1,n)};At.unmountComponentAtNode=function(t){if(!Cc(t))throw Error(k(40));return t._reactRootContainer?(_i(function(){xc(null,null,t,!1,function(){t._reactRootContainer=null,t[Vn]=null})}),!0):!1};At.unstable_batchedUpdates=lm;At.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Cc(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return xc(t,e,n,!1,r)};At.version="18.2.0-next-9e3b772b8-20220608";function sE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sE)}catch(t){console.error(t)}}sE(),rw.exports=At;var oE=rw.exports,nv=oE;Of.createRoot=nv.createRoot,Of.hydrateRoot=nv.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=function(t,e){if(!t)throw Ks(e)},Ks=function(t){return new Error("Firebase Database ("+aE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Gb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},gm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(f=64)),r.push(n[c],n[d],n[f],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Gb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new Kb;const f=s<<2|a>>4;if(r.push(f),u!==64){const m=a<<4&240|u>>2;if(r.push(m),d!==64){const g=u<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Kb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uE=function(t){const e=lE(t);return gm.encodeByteArray(e,!0)},Iu=function(t){return uE(t).replace(/\./g,"")},ku=function(t){try{return gm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qb(t){return cE(void 0,t)}function cE(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Yb(n)||(t[n]=cE(t[n],e[n]));return t}function Yb(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb=()=>Qb().__FIREBASE_DEFAULTS__,Jb=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Zb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ku(t[1]);return e&&JSON.parse(e)},ym=()=>{try{return Xb()||Jb()||Zb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},dE=t=>{var e,n;return(n=(e=ym())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},eP=t=>{const e=dE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},fE=()=>{var t;return(t=ym())===null||t===void 0?void 0:t.config},hE=t=>{var e;return(e=ym())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tP(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Iu(JSON.stringify(n)),Iu(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _m(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function nP(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rP(){const t=tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function mE(){return aE.NODE_ADMIN===!0}function iP(){try{return typeof indexedDB=="object"}catch{return!1}}function sP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP="FirebaseError";class Ur extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=oP,Object.setPrototypeOf(this,Ur.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,La.prototype.create)}}class La{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?aP(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ur(i,a,r)}}function aP(t,e){return t.replace(lP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const lP=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(t){return JSON.parse(t)}function Pe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=sa(ku(s[0])||""),n=sa(ku(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},uP=function(t){const e=gE(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},cP=function(t){const e=gE(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function bs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function xh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function bu(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Pu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(rv(s)&&rv(o)){if(!Pu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function rv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Eo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function So(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function fP(t,e){const n=new hP(t,e);return n.subscribe.bind(n)}class hP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");pP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Gd),i.error===void 0&&(i.error=Gd),i.complete===void 0&&(i.complete=Gd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Gd(){}function yE(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,b(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Tc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t){return t&&t._delegate?t._delegate:t}class wi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gP=class{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new vm;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vP(e))try{this.getOrInitializeService({instanceIdentifier:Qr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Qr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qr){return this.instances.has(e)}getOptions(e=Qr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Qr){return this.component?this.component.multipleInstances?e:Qr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function yP(t){return t===Qr?void 0:t}function vP(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const wP={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},EP=oe.INFO,SP={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},CP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=SP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wm{constructor(e){this.name=e,this._logLevel=EP,this._logHandler=CP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const xP=(t,e)=>e.some(n=>t instanceof n);let iv,sv;function TP(){return iv||(iv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function IP(){return sv||(sv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vE=new WeakMap,Th=new WeakMap,_E=new WeakMap,Kd=new WeakMap,Em=new WeakMap;function kP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Sr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&vE.set(n,t)}).catch(()=>{}),Em.set(e,t),e}function bP(t){if(Th.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Th.set(t,e)}let Ih={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Th.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_E.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function PP(t){Ih=t(Ih)}function RP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(qd(this),e,...n);return _E.set(r,e.sort?e.sort():[e]),Sr(r)}:IP().includes(t)?function(...e){return t.apply(qd(this),e),Sr(vE.get(this))}:function(...e){return Sr(t.apply(qd(this),e))}}function OP(t){return typeof t=="function"?RP(t):(t instanceof IDBTransaction&&bP(t),xP(t,TP())?new Proxy(t,Ih):t)}function Sr(t){if(t instanceof IDBRequest)return kP(t);if(Kd.has(t))return Kd.get(t);const e=OP(t);return e!==t&&(Kd.set(t,e),Em.set(e,t)),e}const qd=t=>Em.get(t);function NP(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Sr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Sr(o.result),l.oldVersion,l.newVersion,Sr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const AP=["get","getKey","getAll","getAllKeys","count"],DP=["put","add","delete","clear"],Yd=new Map;function ov(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yd.get(e))return Yd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=DP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||AP.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Yd.set(e,s),s}PP(t=>({...t,get:(e,n,r)=>ov(e,n)||t.get(e,n,r),has:(e,n)=>!!ov(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(MP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function MP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kh="@firebase/app",av="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=new wm("@firebase/app"),$P="@firebase/app-compat",FP="@firebase/analytics-compat",jP="@firebase/analytics",UP="@firebase/app-check-compat",zP="@firebase/app-check",BP="@firebase/auth",VP="@firebase/auth-compat",WP="@firebase/database",HP="@firebase/database-compat",GP="@firebase/functions",KP="@firebase/functions-compat",qP="@firebase/installations",YP="@firebase/installations-compat",QP="@firebase/messaging",XP="@firebase/messaging-compat",JP="@firebase/performance",ZP="@firebase/performance-compat",eR="@firebase/remote-config",tR="@firebase/remote-config-compat",nR="@firebase/storage",rR="@firebase/storage-compat",iR="@firebase/firestore",sR="@firebase/firestore-compat",oR="firebase",aR="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh="[DEFAULT]",lR={[kh]:"fire-core",[$P]:"fire-core-compat",[jP]:"fire-analytics",[FP]:"fire-analytics-compat",[zP]:"fire-app-check",[UP]:"fire-app-check-compat",[BP]:"fire-auth",[VP]:"fire-auth-compat",[WP]:"fire-rtdb",[HP]:"fire-rtdb-compat",[GP]:"fire-fn",[KP]:"fire-fn-compat",[qP]:"fire-iid",[YP]:"fire-iid-compat",[QP]:"fire-fcm",[XP]:"fire-fcm-compat",[JP]:"fire-perf",[ZP]:"fire-perf-compat",[eR]:"fire-rc",[tR]:"fire-rc-compat",[nR]:"fire-gcs",[rR]:"fire-gcs-compat",[iR]:"fire-fst",[sR]:"fire-fst-compat","fire-js":"fire-js",[oR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru=new Map,Ph=new Map;function uR(t,e){try{t.container.addComponent(e)}catch(n){Ei.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ps(t){const e=t.name;if(Ph.has(e))return Ei.debug(`There were multiple attempts to register component ${e}.`),!1;Ph.set(e,t);for(const n of Ru.values())uR(n,t);return!0}function Sm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Cr=new La("app","Firebase",cR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys=aR;function wE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:bh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Cr.create("bad-app-name",{appName:String(i)});if(n||(n=fE()),!n)throw Cr.create("no-options");const s=Ru.get(i);if(s){if(Pu(n,s.options)&&Pu(r,s.config))return s;throw Cr.create("duplicate-app",{appName:i})}const o=new _P(i);for(const l of Ph.values())o.addComponent(l);const a=new dR(n,r,o);return Ru.set(i,a),a}function EE(t=bh){const e=Ru.get(t);if(!e&&t===bh&&fE())return wE();if(!e)throw Cr.create("no-app",{appName:t});return e}function xr(t,e,n){var r;let i=(r=lR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ei.warn(a.join(" "));return}Ps(new wi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR="firebase-heartbeat-database",hR=1,oa="firebase-heartbeat-store";let Qd=null;function SE(){return Qd||(Qd=NP(fR,hR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(oa)}}}).catch(t=>{throw Cr.create("idb-open",{originalErrorMessage:t.message})})),Qd}async function pR(t){try{return await(await SE()).transaction(oa).objectStore(oa).get(CE(t))}catch(e){if(e instanceof Ur)Ei.warn(e.message);else{const n=Cr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ei.warn(n.message)}}}async function lv(t,e){try{const r=(await SE()).transaction(oa,"readwrite");await r.objectStore(oa).put(e,CE(t)),await r.done}catch(n){if(n instanceof Ur)Ei.warn(n.message);else{const r=Cr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ei.warn(r.message)}}}function CE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR=1024,gR=30*24*60*60*1e3;class yR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _R(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=uv();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=gR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=uv(),{heartbeatsToSend:r,unsentEntries:i}=vR(this._heartbeatsCache.heartbeats),s=Iu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function uv(){return new Date().toISOString().substring(0,10)}function vR(t,e=mR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),cv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),cv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _R{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return iP()?sP().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await pR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return lv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return lv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function cv(t){return Iu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wR(t){Ps(new wi("platform-logger",e=>new LP(e),"PRIVATE")),Ps(new wi("heartbeat",e=>new yR(e),"PRIVATE")),xr(kh,av,t),xr(kh,av,"esm2017"),xr("fire-js","")}wR("");var ft=function(){return ft=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},ft.apply(this,arguments)};function Cm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Ou(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}function xE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ER=xE,TE=new La("auth","Firebase",xE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu=new wm("@firebase/auth");function SR(t,...e){Nu.logLevel<=oe.WARN&&Nu.warn(`Auth (${Ys}): ${t}`,...e)}function jl(t,...e){Nu.logLevel<=oe.ERROR&&Nu.error(`Auth (${Ys}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(t,...e){throw xm(t,...e)}function En(t,...e){return xm(t,...e)}function CR(t,e,n){const r=Object.assign(Object.assign({},ER()),{[e]:n});return new La("auth","Firebase",r).create(e,{appName:t.name})}function xm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return TE.create(t,...e)}function z(t,e,...n){if(!t)throw xm(e,...n)}function $n(t){const e="INTERNAL ASSERTION FAILED: "+t;throw jl(e),new Error(e)}function Gn(t,e){t||$n(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function xR(){return dv()==="http:"||dv()==="https:"}function dv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xR()||nP()||"connection"in navigator)?navigator.onLine:!0}function IR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n){this.shortDelay=e,this.longDelay=n,Gn(n>e,"Short delay should be less than long delay!"),this.isMobile=_m()||pE()}get(){return TR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(t,e){Gn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR=new Ma(3e4,6e4);function zr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Br(t,e,n,r,i={}){return kE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=qs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),IE.fetch()(bE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function kE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},kR),e);try{const i=new RR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ml(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ml(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ml(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ml(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw CR(t,c,u);dn(t,c)}}catch(i){if(i instanceof Ur)throw i;dn(t,"network-request-failed",{message:String(i)})}}async function $a(t,e,n,r,i={}){const s=await Br(t,e,n,r,i);return"mfaPendingCredential"in s&&dn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function bE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Tm(t.config,i):`${t.config.apiScheme}://${i}`}function PR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class RR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(En(this.auth,"network-request-failed")),bR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ml(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=En(t,e,r);return i.customData._tokenResponse=n,i}function fv(t){return t!==void 0&&t.enterprise!==void 0}class OR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return PR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function NR(t,e){return Br(t,"GET","/v2/recaptchaConfig",zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AR(t,e){return Br(t,"POST","/v1/accounts:delete",e)}async function DR(t,e){return Br(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LR(t,e=!1){const n=Lt(t),r=await n.getIdToken(e),i=Im(r);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Do(Xd(i.auth_time)),issuedAtTime:Do(Xd(i.iat)),expirationTime:Do(Xd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Xd(t){return Number(t)*1e3}function Im(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return jl("JWT malformed, contained fewer than 3 sections"),null;try{const i=ku(n);return i?JSON.parse(i):(jl("Failed to decode base64 JWT payload"),null)}catch(i){return jl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function MR(t){const e=Im(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ur&&$R(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function $R({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Do(this.lastLoginAt),this.creationTime=Do(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Au(t){var e;const n=t.auth,r=await t.getIdToken(),i=await aa(t,DR(n,{idToken:r}));z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?zR(s.providerUserInfo):[],a=UR(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new PE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function jR(t){const e=Lt(t);await Au(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function UR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function zR(t){return t.map(e=>{var{providerId:n}=e,r=Cm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BR(t,e){const n=await kE(t,{},async()=>{const r=qs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=bE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",IE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function VR(t,e){return Br(t,"POST","/v2/accounts:revokeToken",zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):MR(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await BR(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new la;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new la,this.toJSON())}_performRefresh(){return $n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ui{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Cm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new FR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new PE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await aa(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return LR(this,e)}reload(){return jR(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ui(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Au(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await aa(this,AR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:S,isAnonymous:C,providerData:I,stsTokenManager:E}=n;z(y&&E,e,"internal-error");const P=la.fromJSON(this.name,E);z(typeof y=="string",e,"internal-error"),tr(d,e.name),tr(f,e.name),z(typeof S=="boolean",e,"internal-error"),z(typeof C=="boolean",e,"internal-error"),tr(m,e.name),tr(g,e.name),tr(v,e.name),tr(w,e.name),tr(p,e.name),tr(h,e.name);const B=new ui({uid:y,auth:e,email:f,emailVerified:S,displayName:d,isAnonymous:C,photoURL:g,phoneNumber:m,tenantId:v,stsTokenManager:P,createdAt:p,lastLoginAt:h});return I&&Array.isArray(I)&&(B.providerData=I.map(M=>Object.assign({},M))),w&&(B._redirectEventId=w),B}static async _fromIdTokenResponse(e,n,r=!1){const i=new la;i.updateFromServerResponse(n);const s=new ui({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Au(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv=new Map;function Fn(t){Gn(t instanceof Function,"Expected a class definition");let e=hv.get(t);return e?(Gn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}RE.type="NONE";const pv=RE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(t,e,n){return`firebase:${t}:${e}:${n}`}class hs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ul(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ul("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ui._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new hs(Fn(pv),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Fn(pv);const o=Ul(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=ui._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new hs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new hs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(AE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(OE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(LE(e))return"Blackberry";if(ME(e))return"Webos";if(km(e))return"Safari";if((e.includes("chrome/")||NE(e))&&!e.includes("edge/"))return"Chrome";if(DE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function OE(t=tt()){return/firefox\//i.test(t)}function km(t=tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function NE(t=tt()){return/crios\//i.test(t)}function AE(t=tt()){return/iemobile/i.test(t)}function DE(t=tt()){return/android/i.test(t)}function LE(t=tt()){return/blackberry/i.test(t)}function ME(t=tt()){return/webos/i.test(t)}function Ic(t=tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function WR(t=tt()){var e;return Ic(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function HR(){return rP()&&document.documentMode===10}function $E(t=tt()){return Ic(t)||DE(t)||ME(t)||LE(t)||/windows phone/i.test(t)||AE(t)}function GR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(t,e=[]){let n;switch(t){case"Browser":n=mv(tt());break;case"Worker":n=`${mv(tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ys}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qR(t,e={}){return Br(t,"GET","/v2/passwordPolicy",zr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR=6;class QR{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:YR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gv(this),this.idTokenSubscription=new gv(this),this.beforeStateQueue=new KR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=TE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await hs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Au(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=IR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Lt(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qR(this),n=new QR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new La("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await VR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fn(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await hs.create(this,[Fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=FE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&SR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Oi(t){return Lt(t)}class gv{constructor(e){this.auth=e,this.observer=null,this.addObserver=fP(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function jE(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=En("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",JR().appendChild(r)})}function ZR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const eO="https://www.google.com/recaptcha/enterprise.js?render=",tO="recaptcha-enterprise",nO="NO_RECAPTCHA";class rO{constructor(e){this.type=tO,this.auth=Oi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{NR(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new OR(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;fv(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(nO)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&fv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}jE(eO+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function yv(t,e,n,r=!1){const i=new rO(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Oh(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await yv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await yv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iO(t,e){const n=Sm(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Pu(s,e??{}))return i;dn(i,"already-initialized")}return n.initialize({options:e})}function sO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function oO(t,e,n){const r=Oi(t);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=UE(e),{host:o,port:a}=aO(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||lO()}function UE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function aO(t){const e=UE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:vv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:vv(o)}}}function vv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function lO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $n("not implemented")}_getIdTokenResponse(e){return $n("not implemented")}_linkToIdToken(e,n){return $n("not implemented")}_getReauthenticationResolver(e){return $n("not implemented")}}async function uO(t,e){return Br(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cO(t,e){return $a(t,"POST","/v1/accounts:signInWithPassword",zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dO(t,e){return $a(t,"POST","/v1/accounts:signInWithEmailLink",zr(t,e))}async function fO(t,e){return $a(t,"POST","/v1/accounts:signInWithEmailLink",zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua extends bm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ua(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ua(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Oh(e,n,"signInWithPassword",cO);case"emailLink":return dO(e,{email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Oh(e,r,"signUpPassword",uO);case"emailLink":return fO(e,{idToken:n,email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ps(t,e){return $a(t,"POST","/v1/accounts:signInWithIdp",zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hO="http://localhost";class Si extends bm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Si(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):dn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Cm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Si(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ps(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ps(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ps(e,n)}buildRequest(){const e={requestUri:hO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mO(t){const e=Eo(So(t)).link,n=e?Eo(So(e)).deep_link_id:null,r=Eo(So(t)).deep_link_id;return(r?Eo(So(r)).link:null)||r||n||e||t}class Pm{constructor(e){var n,r,i,s,o,a;const l=Eo(So(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=pO((i=l.mode)!==null&&i!==void 0?i:null);z(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=mO(e);try{return new Pm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(){this.providerId=Qs.PROVIDER_ID}static credential(e,n){return ua._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Pm.parseLink(n);return z(r,"argument-error"),ua._fromEmailAndCode(e,r.code,r.tenantId)}}Qs.PROVIDER_ID="password";Qs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa extends zE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends Fa{constructor(){super("facebook.com")}static credential(e){return Si._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";ar.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends Fa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Si._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Dn.credential(n,r)}catch{return null}}}Dn.GOOGLE_SIGN_IN_METHOD="google.com";Dn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends Fa{constructor(){super("github.com")}static credential(e){return Si._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch{return null}}}lr.GITHUB_SIGN_IN_METHOD="github.com";lr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends Fa{constructor(){super("twitter.com")}static credential(e,n){return Si._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ur.credential(n,r)}catch{return null}}}ur.TWITTER_SIGN_IN_METHOD="twitter.com";ur.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gO(t,e){return $a(t,"POST","/v1/accounts:signUp",zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ui._fromIdTokenResponse(e,r,i),o=_v(r);return new Ci({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=_v(r);return new Ci({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function _v(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du extends Ur{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Du.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Du(e,n,r,i)}}function BE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Du._fromErrorAndOperation(t,s,e,r):s})}async function yO(t,e,n=!1){const r=await aa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ci._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vO(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await aa(t,BE(r,i,e,t),n);z(s.idToken,r,"internal-error");const o=Im(s.idToken);z(o,r,"internal-error");const{sub:a}=o;return z(t.uid===a,r,"user-mismatch"),Ci._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&dn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VE(t,e,n=!1){const r="signIn",i=await BE(t,r,e),s=await Ci._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function _O(t,e){return VE(Oi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WE(t){const e=Oi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function wO(t,e,n){const r=Oi(t),o=await Oh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",gO).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&WE(t),l}),a=await Ci._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function EO(t,e,n){return _O(Lt(t),Qs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&WE(t),r})}function SO(t,e,n,r){return Lt(t).onIdTokenChanged(e,n,r)}function CO(t,e,n){return Lt(t).beforeAuthStateChanged(e,n)}function HE(t,e,n,r){return Lt(t).onAuthStateChanged(e,n,r)}const Lu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Lu,"1"),this.storage.removeItem(Lu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xO(){const t=tt();return km(t)||Ic(t)}const TO=1e3,IO=10;class KE extends GE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=xO()&&GR(),this.fallbackToPolling=$E(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);HR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,IO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},TO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}KE.type="LOCAL";const kO=KE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE extends GE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qE.type="SESSION";const YE=qE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new kc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await bO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Rm("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(){return window}function RO(t){Sn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(){return typeof Sn().WorkerGlobalScope<"u"&&typeof Sn().importScripts=="function"}async function OO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function NO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function AO(){return QE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE="firebaseLocalStorageDb",DO=1,Mu="firebaseLocalStorage",JE="fbase_key";class ja{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bc(t,e){return t.transaction([Mu],e?"readwrite":"readonly").objectStore(Mu)}function LO(){const t=indexedDB.deleteDatabase(XE);return new ja(t).toPromise()}function Nh(){const t=indexedDB.open(XE,DO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Mu,{keyPath:JE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Mu)?e(r):(r.close(),await LO(),e(await Nh()))})})}async function wv(t,e,n){const r=bc(t,!0).put({[JE]:e,value:n});return new ja(r).toPromise()}async function MO(t,e){const n=bc(t,!1).get(e),r=await new ja(n).toPromise();return r===void 0?null:r.value}function Ev(t,e){const n=bc(t,!0).delete(e);return new ja(n).toPromise()}const $O=800,FO=3;class ZE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>FO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return QE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kc._getInstance(AO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await OO(),!this.activeServiceWorker)return;this.sender=new PO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||NO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nh();return await wv(e,Lu,"1"),await Ev(e,Lu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>wv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>MO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ev(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=bc(i,!1).getAll();return new ja(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$O)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ZE.type="LOCAL";const jO=ZE;new Ma(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UO(t,e){return e?Fn(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om extends bm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ps(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ps(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function zO(t){return VE(t.auth,new Om(t),t.bypassAuthState)}function BO(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),vO(n,new Om(t),t.bypassAuthState)}async function VO(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),yO(n,new Om(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zO;case"linkViaPopup":case"linkViaRedirect":return VO;case"reauthViaPopup":case"reauthViaRedirect":return BO;default:dn(this.auth,"internal-error")}}resolve(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WO=new Ma(2e3,1e4);class ns extends eS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ns.currentPopupAction&&ns.currentPopupAction.cancel(),ns.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Gn(this.filter.length===1,"Popup operations only handle one event");const e=Rm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(En(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(En(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ns.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(En(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,WO.get())};e()}}ns.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HO="pendingRedirect",zl=new Map;class GO extends eS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=zl.get(this.auth._key());if(!e){try{const r=await KO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}zl.set(this.auth._key(),e)}return this.bypassAuthState||zl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function KO(t,e){const n=QO(e),r=YO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function qO(t,e){zl.set(t._key(),e)}function YO(t){return Fn(t._redirectPersistence)}function QO(t){return Ul(HO,t.config.apiKey,t.name)}async function XO(t,e,n=!1){const r=Oi(t),i=UO(r,e),o=await new GO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JO=10*60*1e3;class ZO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!eN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!tS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(En(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=JO&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sv(e))}saveEventToCache(e){this.cachedEventUids.add(Sv(e)),this.lastProcessedEventTime=Date.now()}}function Sv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function tS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function eN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tS(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tN(t,e={}){return Br(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rN=/^https?/;async function iN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await tN(t);for(const n of e)try{if(sN(n))return}catch{}dn(t,"unauthorized-domain")}function sN(t){const e=Rh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!rN.test(n))return!1;if(nN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oN=new Ma(3e4,6e4);function Cv(){const t=Sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function aN(t){return new Promise((e,n)=>{var r,i,s;function o(){Cv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cv(),n(En(t,"network-request-failed"))},timeout:oN.get()})}if(!((i=(r=Sn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Sn().gapi)===null||s===void 0)&&s.load)o();else{const a=ZR("iframefcb");return Sn()[a]=()=>{gapi.load?o():n(En(t,"network-request-failed"))},jE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Bl=null,e})}let Bl=null;function lN(t){return Bl=Bl||aN(t),Bl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN=new Ma(5e3,15e3),cN="__/auth/iframe",dN="emulator/auth/iframe",fN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pN(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Tm(e,dN):`https://${t.config.authDomain}/${cN}`,r={apiKey:e.apiKey,appName:t.name,v:Ys},i=hN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${qs(r).slice(1)}`}async function mN(t){const e=await lN(t),n=Sn().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:pN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=En(t,"network-request-failed"),a=Sn().setTimeout(()=>{s(o)},uN.get());function l(){Sn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yN=500,vN=600,_N="_blank",wN="http://localhost";class xv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function EN(t,e,n,r=yN,i=vN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},gN),{width:r.toString(),height:i.toString(),top:s,left:o}),u=tt().toLowerCase();n&&(a=NE(u)?_N:n),OE(u)&&(e=e||wN,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[m,g])=>`${f}${m}=${g},`,"");if(WR(u)&&a!=="_self")return SN(e||"",a),new xv(null);const d=window.open(e||"",a,c);z(d,t,"popup-blocked");try{d.focus()}catch{}return new xv(d)}function SN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN="__/auth/handler",xN="emulator/auth/handler",TN=encodeURIComponent("fac");async function Tv(t,e,n,r,i,s){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ys,eventId:i};if(e instanceof zE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",xh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof Fa){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${TN}=${encodeURIComponent(l)}`:"";return`${IN(t)}?${qs(a).slice(1)}${u}`}function IN({config:t}){return t.emulator?Tm(t,xN):`https://${t.authDomain}/${CN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="webStorageSupport";class kN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=YE,this._completeRedirectFn=XO,this._overrideRedirectResult=qO}async _openPopup(e,n,r,i){var s;Gn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Tv(e,n,r,Rh(),i);return EN(e,o,Rm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Tv(e,n,r,Rh(),i);return RO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Gn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await mN(e),r=new ZO(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Jd,{type:Jd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Jd];o!==void 0&&n(!!o),dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=iN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return $E()||km()||Ic()}}const bN=kN;var Iv="@firebase/auth",kv="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ON(t){Ps(new wi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:FE(t)},u=new XR(r,i,s,l);return sO(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ps(new wi("auth-internal",e=>{const n=Oi(e.getProvider("auth").getImmediate());return(r=>new PN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xr(Iv,kv,RN(t)),xr(Iv,kv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NN=5*60,AN=hE("authIdTokenMaxAge")||NN;let bv=null;const DN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>AN)return;const i=n==null?void 0:n.token;bv!==i&&(bv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Pc(t=EE()){const e=Sm(t,"auth");if(e.isInitialized())return e.getImmediate();const n=iO(t,{popupRedirectResolver:bN,persistence:[jO,kO,YE]}),r=hE("authTokenSyncURL");if(r){const s=DN(r);CO(n,s,()=>s(n.currentUser)),SO(n,o=>s(o))}const i=dE("auth");return i&&oO(n,`http://${i}`),n}ON("Browser");function nS(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var LN=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,MN=nS(function(t){return LN.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),he="-ms-",Lo="-moz-",ee="-webkit-",rS="comm",Rc="rule",Nm="decl",$N="@import",iS="@keyframes",FN="@layer",jN=Math.abs,Am=String.fromCharCode,Ah=Object.assign;function UN(t,e){return Me(t,0)^45?(((e<<2^Me(t,0))<<2^Me(t,1))<<2^Me(t,2))<<2^Me(t,3):0}function sS(t){return t.trim()}function Nn(t,e){return(t=e.exec(t))?t[0]:t}function V(t,e,n){return t.replace(e,n)}function Vl(t,e){return t.indexOf(e)}function Me(t,e){return t.charCodeAt(e)|0}function Rs(t,e,n){return t.slice(e,n)}function mn(t){return t.length}function oS(t){return t.length}function Co(t,e){return e.push(t),t}function zN(t,e){return t.map(e).join("")}function Pv(t,e){return t.filter(function(n){return!Nn(n,e)})}var Oc=1,Os=1,aS=0,Gt=0,Te=0,Xs="";function Nc(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Oc,column:Os,length:o,return:"",siblings:a}}function nr(t,e){return Ah(Nc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function zi(t){for(;t.root;)t=nr(t.root,{children:[t]});Co(t,t.siblings)}function BN(){return Te}function VN(){return Te=Gt>0?Me(Xs,--Gt):0,Os--,Te===10&&(Os=1,Oc--),Te}function an(){return Te=Gt<aS?Me(Xs,Gt++):0,Os++,Te===10&&(Os=1,Oc++),Te}function ci(){return Me(Xs,Gt)}function Wl(){return Gt}function Ac(t,e){return Rs(Xs,t,e)}function Dh(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function WN(t){return Oc=Os=1,aS=mn(Xs=t),Gt=0,[]}function HN(t){return Xs="",t}function Zd(t){return sS(Ac(Gt-1,Lh(t===91?t+2:t===40?t+1:t)))}function GN(t){for(;(Te=ci())&&Te<33;)an();return Dh(t)>2||Dh(Te)>3?"":" "}function KN(t,e){for(;--e&&an()&&!(Te<48||Te>102||Te>57&&Te<65||Te>70&&Te<97););return Ac(t,Wl()+(e<6&&ci()==32&&an()==32))}function Lh(t){for(;an();)switch(Te){case t:return Gt;case 34:case 39:t!==34&&t!==39&&Lh(Te);break;case 40:t===41&&Lh(t);break;case 92:an();break}return Gt}function qN(t,e){for(;an()&&t+Te!==47+10;)if(t+Te===42+42&&ci()===47)break;return"/*"+Ac(e,Gt-1)+"*"+Am(t===47?t:an())}function YN(t){for(;!Dh(ci());)an();return Ac(t,Gt)}function QN(t){return HN(Hl("",null,null,null,[""],t=WN(t),0,[0],t))}function Hl(t,e,n,r,i,s,o,a,l){for(var u=0,c=0,d=o,f=0,m=0,g=0,v=1,w=1,p=1,h=0,y="",S=i,C=s,I=r,E=y;w;)switch(g=h,h=an()){case 40:if(g!=108&&Me(E,d-1)==58){Vl(E+=V(Zd(h),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:E+=Zd(h);break;case 9:case 10:case 13:case 32:E+=GN(g);break;case 92:E+=KN(Wl()-1,7);continue;case 47:switch(ci()){case 42:case 47:Co(XN(qN(an(),Wl()),e,n,l),l);break;default:E+="/"}break;case 123*v:a[u++]=mn(E)*p;case 125*v:case 59:case 0:switch(h){case 0:case 125:w=0;case 59+c:p==-1&&(E=V(E,/\f/g,"")),m>0&&mn(E)-d&&Co(m>32?Ov(E+";",r,n,d-1,l):Ov(V(E," ","")+";",r,n,d-2,l),l);break;case 59:E+=";";default:if(Co(I=Rv(E,e,n,u,c,i,a,y,S=[],C=[],d,s),s),h===123)if(c===0)Hl(E,e,I,I,S,s,d,a,C);else switch(f===99&&Me(E,3)===110?100:f){case 100:case 108:case 109:case 115:Hl(t,I,I,r&&Co(Rv(t,I,I,0,0,i,a,y,i,S=[],d,C),C),i,C,d,a,r?S:C);break;default:Hl(E,I,I,I,[""],C,0,a,C)}}u=c=m=0,v=p=1,y=E="",d=o;break;case 58:d=1+mn(E),m=g;default:if(v<1){if(h==123)--v;else if(h==125&&v++==0&&VN()==125)continue}switch(E+=Am(h),h*v){case 38:p=c>0?1:(E+="\f",-1);break;case 44:a[u++]=(mn(E)-1)*p,p=1;break;case 64:ci()===45&&(E+=Zd(an())),f=ci(),c=d=mn(y=E+=YN(Wl())),h++;break;case 45:g===45&&mn(E)==2&&(v=0)}}return s}function Rv(t,e,n,r,i,s,o,a,l,u,c,d){for(var f=i-1,m=i===0?s:[""],g=oS(m),v=0,w=0,p=0;v<r;++v)for(var h=0,y=Rs(t,f+1,f=jN(w=o[v])),S=t;h<g;++h)(S=sS(w>0?m[h]+" "+y:V(y,/&\f/g,m[h])))&&(l[p++]=S);return Nc(t,e,n,i===0?Rc:a,l,u,c,d)}function XN(t,e,n,r){return Nc(t,e,n,rS,Am(BN()),Rs(t,2,-2),0,r)}function Ov(t,e,n,r,i){return Nc(t,e,n,Nm,Rs(t,0,r),Rs(t,r+1,-1),r,i)}function lS(t,e,n){switch(UN(t,e)){case 5103:return ee+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ee+t+t;case 4789:return Lo+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ee+t+Lo+t+he+t+t;case 5936:switch(Me(t,e+11)){case 114:return ee+t+he+V(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ee+t+he+V(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ee+t+he+V(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ee+t+he+t+t;case 6165:return ee+t+he+"flex-"+t+t;case 5187:return ee+t+V(t,/(\w+).+(:[^]+)/,ee+"box-$1$2"+he+"flex-$1$2")+t;case 5443:return ee+t+he+"flex-item-"+V(t,/flex-|-self/g,"")+(Nn(t,/flex-|baseline/)?"":he+"grid-row-"+V(t,/flex-|-self/g,""))+t;case 4675:return ee+t+he+"flex-line-pack"+V(t,/align-content|flex-|-self/g,"")+t;case 5548:return ee+t+he+V(t,"shrink","negative")+t;case 5292:return ee+t+he+V(t,"basis","preferred-size")+t;case 6060:return ee+"box-"+V(t,"-grow","")+ee+t+he+V(t,"grow","positive")+t;case 4554:return ee+V(t,/([^-])(transform)/g,"$1"+ee+"$2")+t;case 6187:return V(V(V(t,/(zoom-|grab)/,ee+"$1"),/(image-set)/,ee+"$1"),t,"")+t;case 5495:case 3959:return V(t,/(image-set\([^]*)/,ee+"$1$`$1");case 4968:return V(V(t,/(.+:)(flex-)?(.*)/,ee+"box-pack:$3"+he+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ee+t+t;case 4200:if(!Nn(t,/flex-|baseline/))return he+"grid-column-align"+Rs(t,e)+t;break;case 2592:case 3360:return he+V(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Nn(r.props,/grid-\w+-end/)})?~Vl(t+(n=n[e].value),"span")?t:he+V(t,"-start","")+t+he+"grid-row-span:"+(~Vl(n,"span")?Nn(n,/\d+/):+Nn(n,/\d+/)-+Nn(t,/\d+/))+";":he+V(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Nn(r.props,/grid-\w+-start/)})?t:he+V(V(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return V(t,/(.+)-inline(.+)/,ee+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(mn(t)-1-e>6)switch(Me(t,e+1)){case 109:if(Me(t,e+4)!==45)break;case 102:return V(t,/(.+:)(.+)-([^]+)/,"$1"+ee+"$2-$3$1"+Lo+(Me(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Vl(t,"stretch")?lS(V(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return V(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return he+i+":"+s+u+(o?he+i+"-span:"+(a?l:+l-+s)+u:"")+t});case 4949:if(Me(t,e+6)===121)return V(t,":",":"+ee)+t;break;case 6444:switch(Me(t,Me(t,14)===45?18:11)){case 120:return V(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ee+(Me(t,14)===45?"inline-":"")+"box$3$1"+ee+"$2$3$1"+he+"$2box$3")+t;case 100:return V(t,":",":"+he)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return V(t,"scroll-","scroll-snap-")+t}return t}function $u(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function JN(t,e,n,r){switch(t.type){case FN:if(t.children.length)break;case $N:case Nm:return t.return=t.return||t.value;case rS:return"";case iS:return t.return=t.value+"{"+$u(t.children,r)+"}";case Rc:if(!mn(t.value=t.props.join(",")))return""}return mn(n=$u(t.children,r))?t.return=t.value+"{"+n+"}":""}function ZN(t){var e=oS(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function eA(t){return function(e){e.root||(e=e.return)&&t(e)}}function tA(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Nm:t.return=lS(t.value,t.length,n);return;case iS:return $u([nr(t,{value:V(t.value,"@","@"+ee)})],r);case Rc:if(t.length)return zN(n=t.props,function(i){switch(Nn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":zi(nr(t,{props:[V(i,/:(read-\w+)/,":"+Lo+"$1")]})),zi(nr(t,{props:[i]})),Ah(t,{props:Pv(n,r)});break;case"::placeholder":zi(nr(t,{props:[V(i,/:(plac\w+)/,":"+ee+"input-$1")]})),zi(nr(t,{props:[V(i,/:(plac\w+)/,":"+Lo+"$1")]})),zi(nr(t,{props:[V(i,/:(plac\w+)/,he+"input-$1")]})),zi(nr(t,{props:[i]})),Ah(t,{props:Pv(n,r)});break}return""})}}var uS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ns=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Dm=typeof window<"u"&&"HTMLElement"in window,nA=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Dc=Object.freeze([]),As=Object.freeze({});function rA(t,e,n){return n===void 0&&(n=As),t.theme!==n.theme&&t.theme||e||n.theme}var cS=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),iA=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,sA=/(^-|-$)/g;function Nv(t){return t.replace(iA,"-").replace(sA,"")}var oA=/(a)(d)/gi,Av=function(t){return String.fromCharCode(t+(t>25?39:97))};function Mh(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=Av(e%52)+n;return(Av(e%52)+n).replace(oA,"$1-$2")}var ef,rs=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},dS=function(t){return rs(5381,t)};function aA(t){return Mh(dS(t)>>>0)}function lA(t){return t.displayName||t.name||"Component"}function tf(t){return typeof t=="string"&&!0}var fS=typeof Symbol=="function"&&Symbol.for,hS=fS?Symbol.for("react.memo"):60115,uA=fS?Symbol.for("react.forward_ref"):60112,cA={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},dA={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},pS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},fA=((ef={})[uA]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ef[hS]=pS,ef);function Dv(t){return("type"in(e=t)&&e.type.$$typeof)===hS?pS:"$$typeof"in t?fA[t.$$typeof]:cA;var e}var hA=Object.defineProperty,pA=Object.getOwnPropertyNames,Lv=Object.getOwnPropertySymbols,mA=Object.getOwnPropertyDescriptor,gA=Object.getPrototypeOf,Mv=Object.prototype;function mS(t,e,n){if(typeof e!="string"){if(Mv){var r=gA(e);r&&r!==Mv&&mS(t,r,n)}var i=pA(e);Lv&&(i=i.concat(Lv(e)));for(var s=Dv(t),o=Dv(e),a=0;a<i.length;++a){var l=i[a];if(!(l in dA||n&&n[l]||o&&l in o||s&&l in s)){var u=mA(e,l);try{hA(t,l,u)}catch{}}}}return t}function Ds(t){return typeof t=="function"}function Lm(t){return typeof t=="object"&&"styledComponentId"in t}function ii(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function $v(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function ca(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function $h(t,e,n){if(n===void 0&&(n=!1),!n&&!ca(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=$h(t[r],e[r]);else if(ca(e))for(var r in e)t[r]=$h(t[r],e[r]);return t}function Mm(t,e){Object.defineProperty(t,"toString",{value:e})}function Ua(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var yA=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Ua(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},t}(),Gl=new Map,Fu=new Map,nf=1,gl=function(t){if(Gl.has(t))return Gl.get(t);for(;Fu.has(nf);)nf++;var e=nf++;return Gl.set(t,e),Fu.set(e,t),e},vA=function(t,e){Gl.set(t,e),Fu.set(e,t)},_A="style[".concat(Ns,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),wA=new RegExp("^".concat(Ns,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),EA=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},SA=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(wA);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(vA(c,u),EA(t,c,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function CA(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var gS=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Ns,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ns,"active"),r.setAttribute("data-styled-version","6.0.7");var o=CA();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},xA=function(){function t(e){this.element=gS(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Ua(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),TA=function(){function t(e){this.element=gS(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),IA=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Fv=Dm,kA={isServer:!Dm,useCSSOMInjection:!nA},yS=function(){function t(e,n,r){e===void 0&&(e=As),n===void 0&&(n={});var i=this;this.options=ft(ft({},kA),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Dm&&Fv&&(Fv=!1,function(s){for(var o=document.querySelectorAll(_A),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Ns)!=="active"&&(SA(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Mm(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(d){var f=function(p){return Fu.get(p)}(d);if(f===void 0)return"continue";var m=s.names.get(f),g=o.getGroup(d);if(m===void 0||g.length===0)return"continue";var v="".concat(Ns,".g").concat(d,'[id="').concat(f,'"]'),w="";m!==void 0&&m.forEach(function(p){p.length>0&&(w+="".concat(p,","))}),l+="".concat(g).concat(v,'{content:"').concat(w,'"}').concat(`/*!sc*/
`)},c=0;c<a;c++)u(c);return l}(i)})}return t.registerId=function(e){return gl(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(ft(ft({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new IA(i):r?new xA(i):new TA(i)}(this.options),new yA(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(gl(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(gl(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(gl(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),bA=/&/g,PA=/^\s*\/\/.*$/gm;function vS(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=vS(n.children,e)),n})}function RA(t){var e,n,r,i=t===void 0?As:t,s=i.options,o=s===void 0?As:s,a=i.plugins,l=a===void 0?Dc:a,u=function(f,m,g){return g===n||g.startsWith(n)&&g.endsWith(n)&&g.replaceAll(n,"").length>0?".".concat(e):f},c=l.slice();c.push(function(f){f.type===Rc&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(bA,n).replace(r,u))}),o.prefix&&c.push(tA),c.push(JN);var d=function(f,m,g,v){m===void 0&&(m=""),g===void 0&&(g=""),v===void 0&&(v="&"),e=v,n=m,r=new RegExp("\\".concat(n,"\\b"),"g");var w=f.replace(PA,""),p=QN(g||m?"".concat(g," ").concat(m," { ").concat(w," }"):w);o.namespace&&(p=vS(p,o.namespace));var h=[];return $u(p,ZN(c.concat(eA(function(y){return h.push(y)})))),h};return d.hash=l.length?l.reduce(function(f,m){return m.name||Ua(15),rs(f,m.name)},5381).toString():"",d}var OA=new yS,Fh=RA(),_S=pt.createContext({shouldForwardProp:void 0,styleSheet:OA,stylis:Fh});_S.Consumer;pt.createContext(void 0);function jv(){return x.useContext(_S)}var NA=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Fh);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Mm(this,function(){throw Ua(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Fh),this.name+e.hash},t}(),AA=function(t){return t>="A"&&t<="Z"};function Uv(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;AA(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var wS=function(t){return t==null||t===!1||t===""},ES=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!wS(s)&&(Array.isArray(s)&&s.isCss||Ds(s)?r.push("".concat(Uv(i),":"),s,";"):ca(s)?r.push.apply(r,Ou(Ou(["".concat(i," {")],ES(s),!1),["}"],!1)):r.push("".concat(Uv(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in uS||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function di(t,e,n,r){if(wS(t))return[];if(Lm(t))return[".".concat(t.styledComponentId)];if(Ds(t)){if(!Ds(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return di(i,e,n,r)}var s;return t instanceof NA?n?(t.inject(n,r),[t.getName(r)]):[t]:ca(t)?ES(t):Array.isArray(t)?Array.prototype.concat.apply(Dc,t.map(function(o){return di(o,e,n,r)})):[t.toString()]}function DA(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Ds(n)&&!Lm(n))return!1}return!0}var LA=dS("6.0.7"),MA=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&DA(e),this.componentId=n,this.baseHash=rs(LA,n),this.baseStyle=r,yS.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ii(i,this.staticRulesId);else{var s=$v(di(this.rules,e,n,r)),o=Mh(rs(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=ii(i,o),this.staticRulesId=o}else{for(var l=rs(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var f=$v(di(d,e,n,r));l=rs(l,f),u+=f}}if(u){var m=Mh(l>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,r(u,".".concat(m),void 0,this.componentId)),i=ii(i,m)}}return i},t}(),SS=pt.createContext(void 0);SS.Consumer;var rf={};function $A(t,e,n){var r=Lm(t),i=t,s=!tf(t),o=e.attrs,a=o===void 0?Dc:o,l=e.componentId,u=l===void 0?function(y,S){var C=typeof y!="string"?"sc":Nv(y);rf[C]=(rf[C]||0)+1;var I="".concat(C,"-").concat(aA("6.0.7"+C+rf[C]));return S?"".concat(S,"-").concat(I):I}(e.displayName,e.parentComponentId):l,c=e.displayName;c===void 0&&function(y){return tf(y)?"styled.".concat(y):"Styled(".concat(lA(y),")")}(t);var d=e.displayName&&e.componentId?"".concat(Nv(e.displayName),"-").concat(e.componentId):e.componentId||u,f=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,m=e.shouldForwardProp;if(r&&i.shouldForwardProp){var g=i.shouldForwardProp;if(e.shouldForwardProp){var v=e.shouldForwardProp;m=function(y,S){return g(y,S)&&v(y,S)}}else m=g}var w=new MA(n,d,r?i.componentStyle:void 0);function p(y,S){return function(C,I,E){var P=C.attrs,B=C.componentStyle,M=C.defaultProps,K=C.foldedComponentIds,$t=C.styledComponentId,le=C.target,wt=pt.useContext(SS),kn=jv(),bn=C.shouldForwardProp||kn.shouldForwardProp,lt=function(Ft,Ue,nt){for(var Ke,qe=ft(ft({},Ue),{className:void 0,theme:nt}),ji=0;ji<Ft.length;ji+=1){var Hr=Ds(Ke=Ft[ji])?Ke(qe):Ke;for(var Kt in Hr)qe[Kt]=Kt==="className"?ii(qe[Kt],Hr[Kt]):Kt==="style"?ft(ft({},qe[Kt]),Hr[Kt]):Hr[Kt]}return Ue.className&&(qe.className=ii(qe.className,Ue.className)),qe}(P,I,rA(I,wt,M)||As),R=lt.as||le,$={};for(var F in lt)lt[F]===void 0||F[0]==="$"||F==="as"||F==="theme"||(F==="forwardedAs"?$.as=lt.forwardedAs:bn&&!bn(F,R)||($[F]=lt[F]));var te=function(Ft,Ue){var nt=jv(),Ke=Ft.generateAndInjectStyles(Ue,nt.styleSheet,nt.stylis);return Ke}(B,lt),ne=ii(K,$t);return te&&(ne+=" "+te),lt.className&&(ne+=" "+lt.className),$[tf(R)&&!cS.has(R)?"class":"className"]=ne,$.ref=E,x.createElement(R,$)}(h,y,S)}var h=pt.forwardRef(p);return h.attrs=f,h.componentStyle=w,h.shouldForwardProp=m,h.foldedComponentIds=r?ii(i.foldedComponentIds,i.styledComponentId):"",h.styledComponentId=d,h.target=r?i.target:t,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?function(S){for(var C=[],I=1;I<arguments.length;I++)C[I-1]=arguments[I];for(var E=0,P=C;E<P.length;E++)$h(S,P[E],!0);return S}({},i.defaultProps,y):y}}),Mm(h,function(){return".".concat(h.styledComponentId)}),s&&mS(h,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function zv(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var Bv=function(t){return Object.assign(t,{isCss:!0})};function FA(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Ds(t)||ca(t)){var r=t;return Bv(di(zv(Dc,Ou([r],e,!0))))}var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?di(i):Bv(di(zv(i,e)))}function jh(t,e,n){if(n===void 0&&(n=As),!e)throw Ua(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,FA.apply(void 0,Ou([i],s,!1)))};return r.attrs=function(i){return jh(t,e,ft(ft({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return jh(t,e,ft(ft({},n),i))},r}var CS=function(t){return jh($A,t)},D=CS;cS.forEach(function(t){D[t]=CS(t)});const jA=D.header`
    padding: 20px 0px;
`,UA=D.div`
  display: flex;
  justify-content: space-between;
  width:  100%;
  max-width: 320px;
  padding: 0 20px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media (min-width: 1280px) {
    max-width: 1184px;
    padding: 0 16px;
  }
`,zA=D.svg`
  width: 28px;
  height: 28px;
`,BA=D(Ra)`
  display: flex;
  gap: 0px 8px;
  align-items:center;
`,VA=D.span`
  color: #121417;
font-family: Roboto;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 24px; /* 120% */
letter-spacing: -0.4px;
`,WA=D.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px 28px;
`,Vv=D(Ra)`
    color: var(--secondary);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25;
    padding: 10px 0px ;
`,HA=D.div`
    display: flex;
    align-items:center;
    gap:0px 16px;
`,GA=D(Ra)`
    display: flex;
    align-items:center;
    gap:0px 8px;

    color: var(--secondary);
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.25;
    
`,KA=D.button`
    color: var( --background);
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.25;


    padding: 14px 39px;
    border-radius: 12px;
    background: var(--secondary);
        border: none;
`,qA=D.svg`
    stroke:${({color:t})=>t==="Blue"?"var(--colorBlue)":t==="Green"?"var(--colorGreen)":t==="Orange"?"var(--colorYellow)":t==="Pink"?"var(--colorPink)":t==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"} ;
    width: 20px;
    height: 20px;
`,YA=D.div`
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(33, 33, 33, 0.12);;
  z-index: 2;
  overflow: auto;
`;function Wv({children:t,onClose:e}){x.useEffect(()=>window.addEventListener("keydown",n),[]),x.useLayoutEffect(()=>()=>{window.removeEventListener("keydown",n)},[]);const n=i=>{i.code==="Escape"&&e(!1)},r=i=>{i.currentTarget===i.target&&e(!1)};return oE.createPortal(_.jsx(YA,{onClick:r,children:t}),document.getElementById("modal-root"))}function Ni(t){this._maxSize=t,this.clear()}Ni.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Ni.prototype.get=function(t){return this._values[t]};Ni.prototype.set=function(t,e){return this._size>=this._maxSize&&this.clear(),t in this._values||this._size++,this._values[t]=e};var QA=/[^.^\]^[]+|(?=\[\]|\.\.)/g,xS=/^\d+$/,XA=/^\d/,JA=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,ZA=/^\s*(['"]?)(.*?)(\1)\s*$/,$m=512,Hv=new Ni($m),Gv=new Ni($m),Kv=new Ni($m),fi={Cache:Ni,split:Uh,normalizePath:sf,setter:function(t){var e=sf(t);return Gv.get(t)||Gv.set(t,function(r,i){for(var s=0,o=e.length,a=r;s<o-1;){var l=e[s];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;a=a[e[s++]]}a[e[s]]=i})},getter:function(t,e){var n=sf(t);return Kv.get(t)||Kv.set(t,function(i){for(var s=0,o=n.length;s<o;)if(i!=null||!e)i=i[n[s++]];else return;return i})},join:function(t){return t.reduce(function(e,n){return e+(Fm(n)||xS.test(n)?"["+n+"]":(e?".":"")+n)},"")},forEach:function(t,e,n){e2(Array.isArray(t)?t:Uh(t),e,n)}};function sf(t){return Hv.get(t)||Hv.set(t,Uh(t).map(function(e){return e.replace(ZA,"$2")}))}function Uh(t){return t.match(QA)||[""]}function e2(t,e,n){var r=t.length,i,s,o,a;for(s=0;s<r;s++)i=t[s],i&&(r2(i)&&(i='"'+i+'"'),a=Fm(i),o=!a&&/^\d+$/.test(i),e.call(n,i,a,o,s,t))}function Fm(t){return typeof t=="string"&&t&&["'",'"'].indexOf(t.charAt(0))!==-1}function t2(t){return t.match(XA)&&!t.match(xS)}function n2(t){return JA.test(t)}function r2(t){return!Fm(t)&&(t2(t)||n2(t))}const i2=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Lc=t=>t.match(i2)||[],Mc=t=>t[0].toUpperCase()+t.slice(1),jm=(t,e)=>Lc(t).join(e).toLowerCase(),TS=t=>Lc(t).reduce((e,n)=>`${e}${e?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),s2=t=>Mc(TS(t)),o2=t=>jm(t,"_"),a2=t=>jm(t,"-"),l2=t=>Mc(jm(t," ")),u2=t=>Lc(t).map(Mc).join(" ");var of={words:Lc,upperFirst:Mc,camelCase:TS,pascalCase:s2,snakeCase:o2,kebabCase:a2,sentenceCase:l2,titleCase:u2},Um={exports:{}};Um.exports=function(t){return IS(c2(t),t)};Um.exports.array=IS;function IS(t,e){var n=t.length,r=new Array(n),i={},s=n,o=d2(e),a=f2(t);for(e.forEach(function(u){if(!a.has(u[0])||!a.has(u[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});s--;)i[s]||l(t[s],s,new Set);return r;function l(u,c,d){if(d.has(u)){var f;try{f=", node was:"+JSON.stringify(u)}catch{f=""}throw new Error("Cyclic dependency"+f)}if(!a.has(u))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(u));if(!i[c]){i[c]=!0;var m=o.get(u)||new Set;if(m=Array.from(m),c=m.length){d.add(u);do{var g=m[--c];l(g,a.get(g),d)}while(c);d.delete(u)}r[--n]=u}}}function c2(t){for(var e=new Set,n=0,r=t.length;n<r;n++){var i=t[n];e.add(i[0]),e.add(i[1])}return Array.from(e)}function d2(t){for(var e=new Map,n=0,r=t.length;n<r;n++){var i=t[n];e.has(i[0])||e.set(i[0],new Set),e.has(i[1])||e.set(i[1],new Set),e.get(i[0]).add(i[1])}return e}function f2(t){for(var e=new Map,n=0,r=t.length;n<r;n++)e.set(t[n],n);return e}var h2=Um.exports;const p2=gp(h2),m2=Object.prototype.toString,g2=Error.prototype.toString,y2=RegExp.prototype.toString,v2=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",_2=/^Symbol\((.*)\)(.*)$/;function w2(t){return t!=+t?"NaN":t===0&&1/t<0?"-0":""+t}function qv(t,e=!1){if(t==null||t===!0||t===!1)return""+t;const n=typeof t;if(n==="number")return w2(t);if(n==="string")return e?`"${t}"`:t;if(n==="function")return"[Function "+(t.name||"anonymous")+"]";if(n==="symbol")return v2.call(t).replace(_2,"Symbol($1)");const r=m2.call(t).slice(8,-1);return r==="Date"?isNaN(t.getTime())?""+t:t.toISOString(t):r==="Error"||t instanceof Error?"["+g2.call(t)+"]":r==="RegExp"?y2.call(t):null}function Tr(t,e){let n=qv(t,e);return n!==null?n:JSON.stringify(t,function(r,i){let s=qv(this[r],e);return s!==null?s:i},2)}function kS(t){return t==null?[]:[].concat(t)}let bS,E2=/\$\{\s*(\w+)\s*\}/g;bS=Symbol.toStringTag;class ct extends Error{static formatError(e,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof e=="string"?e.replace(E2,(i,s)=>Tr(n[s])):typeof e=="function"?e(n):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,n,r,i,s){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this[bS]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],kS(e).forEach(o=>{if(ct.isError(o)){this.errors.push(...o.errors);const a=o.inner.length?o.inner:[o];this.inner.push(...a)}else this.errors.push(o)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],!s&&Error.captureStackTrace&&Error.captureStackTrace(this,ct)}}let pn={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:t,type:e,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${Tr(r,!0)}\`).`:".";return e!=="mixed"?`${t} must be a \`${e}\` type, but the final value was: \`${Tr(n,!0)}\``+i:`${t} must match the configured type. The validated value was: \`${Tr(n,!0)}\``+i}},Yt={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},S2={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},zh={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},C2={isValue:"${path} field must be ${value}"},Bh={noUnknown:"${path} field has unspecified keys: ${unknown}"},x2={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},T2={notType:t=>{const{path:e,value:n,spec:r}=t,i=r.types.length;if(Array.isArray(n)){if(n.length<i)return`${e} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${Tr(n,!0)}\``;if(n.length>i)return`${e} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${Tr(n,!0)}\``}return ct.formatError(pn.notType,t)}};Object.assign(Object.create(null),{mixed:pn,string:Yt,number:S2,date:zh,object:Bh,array:x2,boolean:C2,tuple:T2});const zm=t=>t&&t.__isYupSchema__;class ju{static fromOptions(e,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:s}=n,o=typeof r=="function"?r:(...a)=>a.every(l=>l===r);return new ju(e,(a,l)=>{var u;let c=o(...a)?i:s;return(u=c==null?void 0:c(l))!=null?u:l})}constructor(e,n){this.fn=void 0,this.refs=e,this.refs=e,this.fn=n}resolve(e,n){let r=this.refs.map(s=>s.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,e,n);if(i===void 0||i===e)return e;if(!zm(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const yl={context:"$",value:"."};class Ai{constructor(e,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===yl.context,this.isValue=this.key[0]===yl.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?yl.context:this.isValue?yl.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&fi.getter(this.path,!0),this.map=n.map}getValue(e,n,r){let i=this.isContext?r:this.isValue?e:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(e,n){return this.getValue(e,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}Ai.prototype.__isYupRef=!0;const si=t=>t==null;function Bi(t){function e({value:n,path:r="",options:i,originalValue:s,schema:o},a,l){const{name:u,test:c,params:d,message:f,skipAbsent:m}=t;let{parent:g,context:v,abortEarly:w=o.spec.abortEarly,disableStackTrace:p=o.spec.disableStackTrace}=i;function h(K){return Ai.isRef(K)?K.getValue(n,g,v):K}function y(K={}){var $t;const le=Object.assign({value:n,originalValue:s,label:o.spec.label,path:K.path||r,spec:o.spec},d,K.params);for(const kn of Object.keys(le))le[kn]=h(le[kn]);const wt=new ct(ct.formatError(K.message||f,le),n,le.path,K.type||u,($t=K.disableStackTrace)!=null?$t:p);return wt.params=le,wt}const S=w?a:l;let C={path:r,parent:g,type:u,from:i.from,createError:y,resolve:h,options:i,originalValue:s,schema:o};const I=K=>{ct.isError(K)?S(K):K?l(null):S(y())},E=K=>{ct.isError(K)?S(K):a(K)};if(m&&si(n))return I(!0);let B;try{var M;if(B=c.call(C,n,C),typeof((M=B)==null?void 0:M.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${C.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(B).then(I,E)}}catch(K){E(K);return}I(B)}return e.OPTIONS=t,e}function I2(t,e,n,r=n){let i,s,o;return e?(fi.forEach(e,(a,l,u)=>{let c=l?a.slice(1,a.length-1):a;t=t.resolve({context:r,parent:i,value:n});let d=t.type==="tuple",f=u?parseInt(c,10):0;if(t.innerType||d){if(d&&!u)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);if(n&&f>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${e}. because there is no value at that index. `);i=n,n=n&&n[f],t=d?t.spec.types[f]:t.innerType}if(!u){if(!t.fields||!t.fields[c])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${t.type}")`);i=n,n=n&&n[c],t=t.fields[c]}s=c,o=l?"["+a+"]":"."+a}),{schema:t,parent:i,parentPath:s}):{parent:i,parentPath:e,schema:t}}class Uu extends Set{describe(){const e=[];for(const n of this.values())e.push(Ai.isRef(n)?n.describe():n);return e}resolveAll(e){let n=[];for(const r of this.values())n.push(e(r));return n}clone(){return new Uu(this.values())}merge(e,n){const r=this.clone();return e.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function is(t,e=new Map){if(zm(t)||!t||typeof t!="object")return t;if(e.has(t))return e.get(t);let n;if(t instanceof Date)n=new Date(t.getTime()),e.set(t,n);else if(t instanceof RegExp)n=new RegExp(t),e.set(t,n);else if(Array.isArray(t)){n=new Array(t.length),e.set(t,n);for(let r=0;r<t.length;r++)n[r]=is(t[r],e)}else if(t instanceof Map){n=new Map,e.set(t,n);for(const[r,i]of t.entries())n.set(r,is(i,e))}else if(t instanceof Set){n=new Set,e.set(t,n);for(const r of t)n.add(is(r,e))}else if(t instanceof Object){n={},e.set(t,n);for(const[r,i]of Object.entries(t))n[r]=is(i,e)}else throw Error(`Unable to clone ${t}`);return n}class Tn{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new Uu,this._blacklist=new Uu,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(pn.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},e==null?void 0:e.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=is(Object.assign({},this.spec,e)),n}label(e){let n=this.clone();return n.spec.label=e,n}meta(...e){if(e.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},e[0]),n}withMutation(e){let n=this._mutate;this._mutate=!0;let r=e(this);return this._mutate=n,r}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let n=this,r=e.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(e._whitelist,e._blacklist),r._blacklist=n._blacklist.merge(e._blacklist,e._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(s=>{e.tests.forEach(o=>{s.test(o.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(e){return e==null?!!(this.spec.nullable&&e===null||this.spec.optional&&e===void 0):this._typeCheck(e)}resolve(e){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,s)=>s.resolve(i,e),n),n=n.resolve(e)}return n}resolveOptions(e){var n,r,i,s;return Object.assign({},e,{from:e.from||[],strict:(n=e.strict)!=null?n:this.spec.strict,abortEarly:(r=e.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=e.recursive)!=null?i:this.spec.recursive,disableStackTrace:(s=e.disableStackTrace)!=null?s:this.spec.disableStackTrace})}cast(e,n={}){let r=this.resolve(Object.assign({value:e},n)),i=n.assert==="ignore-optionality",s=r._cast(e,n);if(n.assert!==!1&&!r.isType(s)){if(i&&si(s))return s;let o=Tr(e),a=Tr(s);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${o} 
`+(a!==o?`result of cast: ${a}`:""))}return s}_cast(e,n){let r=e===void 0?e:this.transforms.reduce((i,s)=>s.call(this,i,e,this),e);return r===void 0&&(r=this.getDefault(n)),r}_validate(e,n={},r,i){let{path:s,originalValue:o=e,strict:a=this.spec.strict}=n,l=e;a||(l=this._cast(l,Object.assign({assert:!1},n)));let u=[];for(let c of Object.values(this.internalTests))c&&u.push(c);this.runTests({path:s,value:l,originalValue:o,options:n,tests:u},r,c=>{if(c.length)return i(c,l);this.runTests({path:s,value:l,originalValue:o,options:n,tests:this.tests},r,i)})}runTests(e,n,r){let i=!1,{tests:s,value:o,originalValue:a,path:l,options:u}=e,c=v=>{i||(i=!0,n(v,o))},d=v=>{i||(i=!0,r(v,o))},f=s.length,m=[];if(!f)return d([]);let g={value:o,originalValue:a,path:l,options:u,schema:this};for(let v=0;v<s.length;v++){const w=s[v];w(g,c,function(h){h&&(Array.isArray(h)?m.push(...h):m.push(h)),--f<=0&&d(m)})}}asNestedTest({key:e,index:n,parent:r,parentPath:i,originalParent:s,options:o}){const a=e??n;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof a=="number";let u=r[a];const c=Object.assign({},o,{strict:!0,parent:r,value:u,originalValue:s[a],key:void 0,[l?"index":"key"]:a,path:l||a.includes(".")?`${i||""}[${u?a:`"${a}"`}]`:(i?`${i}.`:"")+e});return(d,f,m)=>this.resolve(c)._validate(u,c,f,m)}validate(e,n){var r;let i=this.resolve(Object.assign({},n,{value:e})),s=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return new Promise((o,a)=>i._validate(e,n,(l,u)=>{ct.isError(l)&&(l.value=u),a(l)},(l,u)=>{l.length?a(new ct(l,u,void 0,void 0,s)):o(u)}))}validateSync(e,n){var r;let i=this.resolve(Object.assign({},n,{value:e})),s,o=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return i._validate(e,Object.assign({},n,{sync:!0}),(a,l)=>{throw ct.isError(a)&&(a.value=l),a},(a,l)=>{if(a.length)throw new ct(a,e,void 0,void 0,o);s=l}),s}isValid(e,n){return this.validate(e,n).then(()=>!0,r=>{if(ct.isError(r))return!1;throw r})}isValidSync(e,n){try{return this.validateSync(e,n),!0}catch(r){if(ct.isError(r))return!1;throw r}}_getDefault(e){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,e):is(n)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,n){const r=this.clone({nullable:e});return r.internalTests.nullable=Bi({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(e,n){const r=this.clone({optional:e});return r.internalTests.optionality=Bi({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(e=pn.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=pn.notNull){return this.nullability(!1,e)}required(e=pn.required){return this.clone().withMutation(n=>n.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let n=this.clone();return n.transforms.push(e),n}test(...e){let n;if(e.length===1?typeof e[0]=="function"?n={test:e[0]}:n=e[0]:e.length===2?n={name:e[0],test:e[1]}:n={name:e[0],message:e[1],test:e[2]},n.message===void 0&&(n.message=pn.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=Bi(n),s=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(o=>!(o.OPTIONS.name===n.name&&(s||o.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(e,n){!Array.isArray(e)&&typeof e!="string"&&(n=e,e=".");let r=this.clone(),i=kS(e).map(s=>new Ai(s));return i.forEach(s=>{s.isSibling&&r.deps.push(s.key)}),r.conditions.push(typeof n=="function"?new ju(i,n):ju.fromOptions(i,n)),r}typeError(e){let n=this.clone();return n.internalTests.typeError=Bi({message:e,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(e,n=pn.oneOf){let r=this.clone();return e.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=Bi({message:n,name:"oneOf",skipAbsent:!0,test(i){let s=this.schema._whitelist,o=s.resolveAll(this.resolve);return o.includes(i)?!0:this.createError({params:{values:Array.from(s).join(", "),resolved:o}})}}),r}notOneOf(e,n=pn.notOneOf){let r=this.clone();return e.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=Bi({message:n,name:"notOneOf",test(i){let s=this.schema._blacklist,o=s.resolveAll(this.resolve);return o.includes(i)?this.createError({params:{values:Array.from(s).join(", "),resolved:o}}):!0}}),r}strip(e=!0){let n=this.clone();return n.spec.strip=e,n}describe(e){const n=(e?this.resolve(e):this).clone(),{label:r,meta:i,optional:s,nullable:o}=n.spec;return{meta:i,label:r,optional:s,nullable:o,default:n.getDefault(e),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,u,c)=>c.findIndex(d=>d.name===l.name)===u)}}}Tn.prototype.__isYupSchema__=!0;for(const t of["validate","validateSync"])Tn.prototype[`${t}At`]=function(e,n,r={}){const{parent:i,parentPath:s,schema:o}=I2(this,e,n,r.context);return o[t](i&&i[s],Object.assign({},r,{parent:i,path:e}))};for(const t of["equals","is"])Tn.prototype[t]=Tn.prototype.oneOf;for(const t of["not","nope"])Tn.prototype[t]=Tn.prototype.notOneOf;let k2=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,b2=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,P2=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,R2=t=>si(t)||t===t.trim(),O2={}.toString();function ms(){return new PS}class PS extends Tn{constructor(){super({type:"string",check(e){return e instanceof String&&(e=e.valueOf()),typeof e=="string"}}),this.withMutation(()=>{this.transform((e,n,r)=>{if(!r.spec.coerce||r.isType(e)||Array.isArray(e))return e;const i=e!=null&&e.toString?e.toString():e;return i===O2?e:i})})}required(e){return super.required(e).withMutation(n=>n.test({message:e||pn.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(n=>n.OPTIONS.name!=="required"),e))}length(e,n=Yt.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(r){return r.length===this.resolve(e)}})}min(e,n=Yt.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(r){return r.length>=this.resolve(e)}})}max(e,n=Yt.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:e},skipAbsent:!0,test(r){return r.length<=this.resolve(e)}})}matches(e,n){let r=!1,i,s;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:s}=n:i=n),this.test({name:s||"matches",message:i||Yt.matches,params:{regex:e},skipAbsent:!0,test:o=>o===""&&r||o.search(e)!==-1})}email(e=Yt.email){return this.matches(k2,{name:"email",message:e,excludeEmptyString:!0})}url(e=Yt.url){return this.matches(b2,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=Yt.uuid){return this.matches(P2,{name:"uuid",message:e,excludeEmptyString:!1})}ensure(){return this.default("").transform(e=>e===null?"":e)}trim(e=Yt.trim){return this.transform(n=>n!=null?n.trim():n).test({message:e,name:"trim",test:R2})}lowercase(e=Yt.lowercase){return this.transform(n=>si(n)?n:n.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>si(n)||n===n.toLowerCase()})}uppercase(e=Yt.uppercase){return this.transform(n=>si(n)?n:n.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>si(n)||n===n.toUpperCase()})}}ms.prototype=PS.prototype;const N2=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function Rn(t,e=0){return Number(t)||e}function A2(t){const e=N2.exec(t);if(!e)return Date.parse?Date.parse(t):Number.NaN;const n={year:Rn(e[1]),month:Rn(e[2],1)-1,day:Rn(e[3],1),hour:Rn(e[4]),minute:Rn(e[5]),second:Rn(e[6]),millisecond:e[7]?Rn(e[7].substring(0,3)):0,z:e[8]||void 0,plusMinus:e[9]||void 0,hourOffset:Rn(e[10]),minuteOffset:Rn(e[11])};if(n.z===void 0&&n.plusMinus===void 0)return new Date(n.year,n.month,n.day,n.hour,n.minute,n.second,n.millisecond).valueOf();let r=0;return n.z!=="Z"&&n.plusMinus!==void 0&&(r=n.hourOffset*60+n.minuteOffset,n.plusMinus==="+"&&(r=0-r)),Date.UTC(n.year,n.month,n.day,n.hour,n.minute+r,n.second,n.millisecond)}let D2=new Date(""),L2=t=>Object.prototype.toString.call(t)==="[object Date]";class $c extends Tn{constructor(){super({type:"date",check(e){return L2(e)&&!isNaN(e.getTime())}}),this.withMutation(()=>{this.transform((e,n,r)=>!r.spec.coerce||r.isType(e)||e===null?e:(e=A2(e),isNaN(e)?$c.INVALID_DATE:new Date(e)))})}prepareParam(e,n){let r;if(Ai.isRef(e))r=e;else{let i=this.cast(e);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(e,n=zh.min){let r=this.prepareParam(e,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(e,n=zh.max){let r=this.prepareParam(e,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}$c.INVALID_DATE=D2;$c.prototype;function M2(t,e=[]){let n=[],r=new Set,i=new Set(e.map(([o,a])=>`${o}-${a}`));function s(o,a){let l=fi.split(o)[0];r.add(l),i.has(`${a}-${l}`)||n.push([a,l])}for(const o of Object.keys(t)){let a=t[o];r.add(o),Ai.isRef(a)&&a.isSibling?s(a.path,o):zm(a)&&"deps"in a&&a.deps.forEach(l=>s(l,o))}return p2.array(Array.from(r),n).reverse()}function Yv(t,e){let n=1/0;return t.some((r,i)=>{var s;if((s=e.path)!=null&&s.includes(r))return n=i,!0}),n}function RS(t){return(e,n)=>Yv(t,e)-Yv(t,n)}const $2=(t,e,n)=>{if(typeof t!="string")return t;let r=t;try{r=JSON.parse(t)}catch{}return n.isType(r)?r:t};function Kl(t){if("fields"in t){const e={};for(const[n,r]of Object.entries(t.fields))e[n]=Kl(r);return t.setFields(e)}if(t.type==="array"){const e=t.optional();return e.innerType&&(e.innerType=Kl(e.innerType)),e}return t.type==="tuple"?t.optional().clone({types:t.spec.types.map(Kl)}):"optional"in t?t.optional():t}const F2=(t,e)=>{const n=[...fi.normalizePath(e)];if(n.length===1)return n[0]in t;let r=n.pop(),i=fi.getter(fi.join(n),!0)(t);return!!(i&&r in i)};let Qv=t=>Object.prototype.toString.call(t)==="[object Object]";function j2(t,e){let n=Object.keys(t.fields);return Object.keys(e).filter(r=>n.indexOf(r)===-1)}const U2=RS([]);function Bm(t){return new OS(t)}class OS extends Tn{constructor(e){super({type:"object",check(n){return Qv(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=U2,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,n={}){var r;let i=super._cast(e,n);if(i===void 0)return this.getDefault(n);if(!this._typeCheck(i))return i;let s=this.fields,o=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(i).filter(d=>!this._nodes.includes(d))),l={},u=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),c=!1;for(const d of a){let f=s[d],m=d in i;if(f){let g,v=i[d];u.path=(n.path?`${n.path}.`:"")+d,f=f.resolve({value:v,context:n.context,parent:l});let w=f instanceof Tn?f.spec:void 0,p=w==null?void 0:w.strict;if(w!=null&&w.strip){c=c||d in i;continue}g=!n.__validating||!p?f.cast(i[d],u):i[d],g!==void 0&&(l[d]=g)}else m&&!o&&(l[d]=i[d]);(m!==d in l||l[d]!==i[d])&&(c=!0)}return c?l:i}_validate(e,n={},r,i){let{from:s=[],originalValue:o=e,recursive:a=this.spec.recursive}=n;n.from=[{schema:this,value:o},...s],n.__validating=!0,n.originalValue=o,super._validate(e,n,r,(l,u)=>{if(!a||!Qv(u)){i(l,u);return}o=o||u;let c=[];for(let d of this._nodes){let f=this.fields[d];!f||Ai.isRef(f)||c.push(f.asNestedTest({options:n,key:d,parent:u,parentPath:n.path,originalParent:o}))}this.runTests({tests:c,value:u,originalValue:o,options:n},r,d=>{i(d.sort(this._sortErrors).concat(l),u)})})}clone(e){const n=super.clone(e);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(e){let n=super.concat(e),r=n.fields;for(let[i,s]of Object.entries(this.fields)){const o=r[i];r[i]=o===void 0?s:o}return n.withMutation(i=>i.setFields(r,[...this._excludedEdges,...e._excludedEdges]))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var i;const s=this.fields[r];let o=e;(i=o)!=null&&i.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[r]})),n[r]=s&&"getDefault"in s?s.getDefault(o):void 0}),n}setFields(e,n){let r=this.clone();return r.fields=e,r._nodes=M2(e,n),r._sortErrors=RS(Object.keys(e)),n&&(r._excludedEdges=n),r}shape(e,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,e),i)})}partial(){const e={};for(const[n,r]of Object.entries(this.fields))e[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(e)}deepPartial(){return Kl(this)}pick(e){const n={};for(const r of e)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,i])=>e.includes(r)&&e.includes(i)))}omit(e){const n=[];for(const r of Object.keys(this.fields))e.includes(r)||n.push(r);return this.pick(n)}from(e,n,r){let i=fi.getter(e,!0);return this.transform(s=>{if(!s)return s;let o=s;return F2(s,e)&&(o=Object.assign({},s),r||delete o[e],o[n]=i(s)),o})}json(){return this.transform($2)}noUnknown(e=!0,n=Bh.noUnknown){typeof e!="boolean"&&(n=e,e=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const s=j2(this.schema,i);return!e||s.length===0||this.createError({params:{unknown:s.join(", ")}})}});return r.spec.noUnknown=e,r}unknown(e=!0,n=Bh.noUnknown){return this.noUnknown(!e,n)}transformKeys(e){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[e(i)]=n[i];return r})}camelCase(){return this.transformKeys(of.camelCase)}snakeCase(){return this.transformKeys(of.snakeCase)}constantCase(){return this.transformKeys(e=>of.snakeCase(e).toUpperCase())}describe(e){const n=(e?this.resolve(e):this).clone(),r=super.describe(e);r.fields={};for(const[s,o]of Object.entries(n.fields)){var i;let a=e;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[s]})),r.fields[s]=o.describe(a)}return r}}Bm.prototype=OS.prototype;const z2=D.form`
  position: relative;
  margin: 0 auto;
  min-height: 420px;

  background: var( --background);
  border-radius: 30px;
  padding: 64px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    padding: 64px;
  }
`,af=D.div`
  margin-bottom: 14px;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 18px;
  }
`;D.div`
  margin-bottom: 40px;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
`;const B2=D.h2`
  line-height:1.2;
  letter-spacing: -0.8px;
  font-weight: 500;
  margin-bottom: 20px;
  color: var(--secondar);
  @media (min-width: 768px) {
   font-size: 40px;
  }
`,V2=D.p`
  width: 438px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.38;
  margin-bottom:40px;
  color: rgba(18, 20, 23, 0.80);

`,lf=D.p`
  margin-left: 15px;
  font-size: 12px;
  font-weight: 400;
  color: var(--red);
`,W2=D.button`
  position: absolute;
  right: 18px;
  top: 17px;
  background-color: transparent;
  border: none;
  padding: 0px;
  
  /* @media (min-width: 768px) {
    top: 10px;
    left: 90%;
  } */
`,uf=D.input`
  padding:  16px 18px;
  width: 100%;
  border-radius: 40px;
  outline: none;
  border-radius: 12px; 
  border: 1px solid rgba(18, 20, 23, 0.10);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.38;
  color: var(--secondar);
  &::placeholder{
  color: var(--secondar);
  }
  &.is-invalid {
    border-color: var(--red);
  }
`,H2=D.button`
  font-weight: 600;
  width: 100%;
  border: none;
  border-radius: 12px;
  color: var(--secondar);

  background-color: var(--yelow);

  padding: 16px 180px ;

  font-size: 18px;
  font-weight: 700;
  line-height: 1.56;
  @media (min-width: 768px) {

  }
`,G2=D.button`
  position: absolute;
  top: 20px;
  right: 20px;

  background-color:transparent;
  border: none;
`;D.svg`
  stroke: var( --secondary);
  fill: none;
  width: 24px;
  height: 24px;
`;const K2=D.svg`
  stroke: var( --secondary);
  fill: none;
  width: 32px;
  height: 32px;
`,Xv=D.svg`
  stroke: var( --secondary);
  fill: none;
  display: inline-block;
  width: 24px;
  height: 24px;
`;var q2=function(e){return Y2(e)&&!Q2(e)};function Y2(t){return!!t&&typeof t=="object"}function Q2(t){var e=Object.prototype.toString.call(t);return e==="[object RegExp]"||e==="[object Date]"||Z2(t)}var X2=typeof Symbol=="function"&&Symbol.for,J2=X2?Symbol.for("react.element"):60103;function Z2(t){return t.$$typeof===J2}function eD(t){return Array.isArray(t)?[]:{}}function zu(t,e){return e.clone!==!1&&e.isMergeableObject(t)?da(eD(t),t,e):t}function tD(t,e,n){return t.concat(e).map(function(r){return zu(r,n)})}function nD(t,e,n){var r={};return n.isMergeableObject(t)&&Object.keys(t).forEach(function(i){r[i]=zu(t[i],n)}),Object.keys(e).forEach(function(i){!n.isMergeableObject(e[i])||!t[i]?r[i]=zu(e[i],n):r[i]=da(t[i],e[i],n)}),r}function da(t,e,n){n=n||{},n.arrayMerge=n.arrayMerge||tD,n.isMergeableObject=n.isMergeableObject||q2;var r=Array.isArray(e),i=Array.isArray(t),s=r===i;return s?r?n.arrayMerge(t,e,n):nD(t,e,n):zu(e,n)}da.all=function(e,n){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(r,i){return da(r,i,n)},{})};var Vh=da,rD=typeof global=="object"&&global&&global.Object===Object&&global;const NS=rD;var iD=typeof self=="object"&&self&&self.Object===Object&&self,sD=NS||iD||Function("return this")();const In=sD;var oD=In.Symbol;const Or=oD;var AS=Object.prototype,aD=AS.hasOwnProperty,lD=AS.toString,co=Or?Or.toStringTag:void 0;function uD(t){var e=aD.call(t,co),n=t[co];try{t[co]=void 0;var r=!0}catch{}var i=lD.call(t);return r&&(e?t[co]=n:delete t[co]),i}var cD=Object.prototype,dD=cD.toString;function fD(t){return dD.call(t)}var hD="[object Null]",pD="[object Undefined]",Jv=Or?Or.toStringTag:void 0;function Di(t){return t==null?t===void 0?pD:hD:Jv&&Jv in Object(t)?uD(t):fD(t)}function DS(t,e){return function(n){return t(e(n))}}var mD=DS(Object.getPrototypeOf,Object);const Vm=mD;function Li(t){return t!=null&&typeof t=="object"}var gD="[object Object]",yD=Function.prototype,vD=Object.prototype,LS=yD.toString,_D=vD.hasOwnProperty,wD=LS.call(Object);function Zv(t){if(!Li(t)||Di(t)!=gD)return!1;var e=Vm(t);if(e===null)return!0;var n=_D.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&LS.call(n)==wD}var e_=Array.isArray,t_=Object.keys,ED=Object.prototype.hasOwnProperty,SD=typeof Element<"u";function Wh(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=e_(t),r=e_(e),i,s,o;if(n&&r){if(s=t.length,s!=e.length)return!1;for(i=s;i--!==0;)if(!Wh(t[i],e[i]))return!1;return!0}if(n!=r)return!1;var a=t instanceof Date,l=e instanceof Date;if(a!=l)return!1;if(a&&l)return t.getTime()==e.getTime();var u=t instanceof RegExp,c=e instanceof RegExp;if(u!=c)return!1;if(u&&c)return t.toString()==e.toString();var d=t_(t);if(s=d.length,s!==t_(e).length)return!1;for(i=s;i--!==0;)if(!ED.call(e,d[i]))return!1;if(SD&&t instanceof Element&&e instanceof Element)return t===e;for(i=s;i--!==0;)if(o=d[i],!(o==="_owner"&&t.$$typeof)&&!Wh(t[o],e[o]))return!1;return!0}return t!==t&&e!==e}var CD=function(e,n){try{return Wh(e,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const Xr=gp(CD);var xD=!0;function TD(t,e){if(!xD){if(t)return;var n="Warning: "+e;typeof console<"u"&&console.warn(n);try{throw Error(n)}catch{}}}function ID(){this.__data__=[],this.size=0}function MS(t,e){return t===e||t!==t&&e!==e}function Fc(t,e){for(var n=t.length;n--;)if(MS(t[n][0],e))return n;return-1}var kD=Array.prototype,bD=kD.splice;function PD(t){var e=this.__data__,n=Fc(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():bD.call(e,n,1),--this.size,!0}function RD(t){var e=this.__data__,n=Fc(e,t);return n<0?void 0:e[n][1]}function OD(t){return Fc(this.__data__,t)>-1}function ND(t,e){var n=this.__data__,r=Fc(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function Jn(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Jn.prototype.clear=ID;Jn.prototype.delete=PD;Jn.prototype.get=RD;Jn.prototype.has=OD;Jn.prototype.set=ND;function AD(){this.__data__=new Jn,this.size=0}function DD(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function LD(t){return this.__data__.get(t)}function MD(t){return this.__data__.has(t)}function za(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var $D="[object AsyncFunction]",FD="[object Function]",jD="[object GeneratorFunction]",UD="[object Proxy]";function $S(t){if(!za(t))return!1;var e=Di(t);return e==FD||e==jD||e==$D||e==UD}var zD=In["__core-js_shared__"];const cf=zD;var n_=function(){var t=/[^.]+$/.exec(cf&&cf.keys&&cf.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function BD(t){return!!n_&&n_ in t}var VD=Function.prototype,WD=VD.toString;function Mi(t){if(t!=null){try{return WD.call(t)}catch{}try{return t+""}catch{}}return""}var HD=/[\\^$.*+?()[\]{}|]/g,GD=/^\[object .+?Constructor\]$/,KD=Function.prototype,qD=Object.prototype,YD=KD.toString,QD=qD.hasOwnProperty,XD=RegExp("^"+YD.call(QD).replace(HD,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function JD(t){if(!za(t)||BD(t))return!1;var e=$S(t)?XD:GD;return e.test(Mi(t))}function ZD(t,e){return t==null?void 0:t[e]}function $i(t,e){var n=ZD(t,e);return JD(n)?n:void 0}var eL=$i(In,"Map");const fa=eL;var tL=$i(Object,"create");const ha=tL;function nL(){this.__data__=ha?ha(null):{},this.size=0}function rL(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var iL="__lodash_hash_undefined__",sL=Object.prototype,oL=sL.hasOwnProperty;function aL(t){var e=this.__data__;if(ha){var n=e[t];return n===iL?void 0:n}return oL.call(e,t)?e[t]:void 0}var lL=Object.prototype,uL=lL.hasOwnProperty;function cL(t){var e=this.__data__;return ha?e[t]!==void 0:uL.call(e,t)}var dL="__lodash_hash_undefined__";function fL(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ha&&e===void 0?dL:e,this}function xi(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}xi.prototype.clear=nL;xi.prototype.delete=rL;xi.prototype.get=aL;xi.prototype.has=cL;xi.prototype.set=fL;function hL(){this.size=0,this.__data__={hash:new xi,map:new(fa||Jn),string:new xi}}function pL(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function jc(t,e){var n=t.__data__;return pL(e)?n[typeof e=="string"?"string":"hash"]:n.map}function mL(t){var e=jc(this,t).delete(t);return this.size-=e?1:0,e}function gL(t){return jc(this,t).get(t)}function yL(t){return jc(this,t).has(t)}function vL(t,e){var n=jc(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function Vr(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Vr.prototype.clear=hL;Vr.prototype.delete=mL;Vr.prototype.get=gL;Vr.prototype.has=yL;Vr.prototype.set=vL;var _L=200;function wL(t,e){var n=this.__data__;if(n instanceof Jn){var r=n.__data__;if(!fa||r.length<_L-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new Vr(r)}return n.set(t,e),this.size=n.size,this}function Js(t){var e=this.__data__=new Jn(t);this.size=e.size}Js.prototype.clear=AD;Js.prototype.delete=DD;Js.prototype.get=LD;Js.prototype.has=MD;Js.prototype.set=wL;function EL(t,e){for(var n=-1,r=t==null?0:t.length;++n<r&&e(t[n],n,t)!==!1;);return t}var SL=function(){try{var t=$i(Object,"defineProperty");return t({},"",{}),t}catch{}}();const r_=SL;function FS(t,e,n){e=="__proto__"&&r_?r_(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var CL=Object.prototype,xL=CL.hasOwnProperty;function jS(t,e,n){var r=t[e];(!(xL.call(t,e)&&MS(r,n))||n===void 0&&!(e in t))&&FS(t,e,n)}function Uc(t,e,n,r){var i=!n;n||(n={});for(var s=-1,o=e.length;++s<o;){var a=e[s],l=r?r(n[a],t[a],a,n,t):void 0;l===void 0&&(l=t[a]),i?FS(n,a,l):jS(n,a,l)}return n}function TL(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var IL="[object Arguments]";function i_(t){return Li(t)&&Di(t)==IL}var US=Object.prototype,kL=US.hasOwnProperty,bL=US.propertyIsEnumerable,PL=i_(function(){return arguments}())?i_:function(t){return Li(t)&&kL.call(t,"callee")&&!bL.call(t,"callee")};const RL=PL;var OL=Array.isArray;const Ba=OL;function NL(){return!1}var zS=typeof Tt=="object"&&Tt&&!Tt.nodeType&&Tt,s_=zS&&typeof It=="object"&&It&&!It.nodeType&&It,AL=s_&&s_.exports===zS,o_=AL?In.Buffer:void 0,DL=o_?o_.isBuffer:void 0,LL=DL||NL;const BS=LL;var ML=9007199254740991,$L=/^(?:0|[1-9]\d*)$/;function FL(t,e){var n=typeof t;return e=e??ML,!!e&&(n=="number"||n!="symbol"&&$L.test(t))&&t>-1&&t%1==0&&t<e}var jL=9007199254740991;function VS(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=jL}var UL="[object Arguments]",zL="[object Array]",BL="[object Boolean]",VL="[object Date]",WL="[object Error]",HL="[object Function]",GL="[object Map]",KL="[object Number]",qL="[object Object]",YL="[object RegExp]",QL="[object Set]",XL="[object String]",JL="[object WeakMap]",ZL="[object ArrayBuffer]",eM="[object DataView]",tM="[object Float32Array]",nM="[object Float64Array]",rM="[object Int8Array]",iM="[object Int16Array]",sM="[object Int32Array]",oM="[object Uint8Array]",aM="[object Uint8ClampedArray]",lM="[object Uint16Array]",uM="[object Uint32Array]",pe={};pe[tM]=pe[nM]=pe[rM]=pe[iM]=pe[sM]=pe[oM]=pe[aM]=pe[lM]=pe[uM]=!0;pe[UL]=pe[zL]=pe[ZL]=pe[BL]=pe[eM]=pe[VL]=pe[WL]=pe[HL]=pe[GL]=pe[KL]=pe[qL]=pe[YL]=pe[QL]=pe[XL]=pe[JL]=!1;function cM(t){return Li(t)&&VS(t.length)&&!!pe[Di(t)]}function Wm(t){return function(e){return t(e)}}var WS=typeof Tt=="object"&&Tt&&!Tt.nodeType&&Tt,Mo=WS&&typeof It=="object"&&It&&!It.nodeType&&It,dM=Mo&&Mo.exports===WS,df=dM&&NS.process,fM=function(){try{var t=Mo&&Mo.require&&Mo.require("util").types;return t||df&&df.binding&&df.binding("util")}catch{}}();const Ls=fM;var a_=Ls&&Ls.isTypedArray,hM=a_?Wm(a_):cM;const pM=hM;var mM=Object.prototype,gM=mM.hasOwnProperty;function HS(t,e){var n=Ba(t),r=!n&&RL(t),i=!n&&!r&&BS(t),s=!n&&!r&&!i&&pM(t),o=n||r||i||s,a=o?TL(t.length,String):[],l=a.length;for(var u in t)(e||gM.call(t,u))&&!(o&&(u=="length"||i&&(u=="offset"||u=="parent")||s&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||FL(u,l)))&&a.push(u);return a}var yM=Object.prototype;function Hm(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||yM;return t===n}var vM=DS(Object.keys,Object);const _M=vM;var wM=Object.prototype,EM=wM.hasOwnProperty;function SM(t){if(!Hm(t))return _M(t);var e=[];for(var n in Object(t))EM.call(t,n)&&n!="constructor"&&e.push(n);return e}function GS(t){return t!=null&&VS(t.length)&&!$S(t)}function Gm(t){return GS(t)?HS(t):SM(t)}function CM(t,e){return t&&Uc(e,Gm(e),t)}function xM(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var TM=Object.prototype,IM=TM.hasOwnProperty;function kM(t){if(!za(t))return xM(t);var e=Hm(t),n=[];for(var r in t)r=="constructor"&&(e||!IM.call(t,r))||n.push(r);return n}function Km(t){return GS(t)?HS(t,!0):kM(t)}function bM(t,e){return t&&Uc(e,Km(e),t)}var KS=typeof Tt=="object"&&Tt&&!Tt.nodeType&&Tt,l_=KS&&typeof It=="object"&&It&&!It.nodeType&&It,PM=l_&&l_.exports===KS,u_=PM?In.Buffer:void 0,c_=u_?u_.allocUnsafe:void 0;function RM(t,e){if(e)return t.slice();var n=t.length,r=c_?c_(n):new t.constructor(n);return t.copy(r),r}function qS(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}function OM(t,e){for(var n=-1,r=t==null?0:t.length,i=0,s=[];++n<r;){var o=t[n];e(o,n,t)&&(s[i++]=o)}return s}function YS(){return[]}var NM=Object.prototype,AM=NM.propertyIsEnumerable,d_=Object.getOwnPropertySymbols,DM=d_?function(t){return t==null?[]:(t=Object(t),OM(d_(t),function(e){return AM.call(t,e)}))}:YS;const qm=DM;function LM(t,e){return Uc(t,qm(t),e)}function QS(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}var MM=Object.getOwnPropertySymbols,$M=MM?function(t){for(var e=[];t;)QS(e,qm(t)),t=Vm(t);return e}:YS;const XS=$M;function FM(t,e){return Uc(t,XS(t),e)}function JS(t,e,n){var r=e(t);return Ba(t)?r:QS(r,n(t))}function jM(t){return JS(t,Gm,qm)}function UM(t){return JS(t,Km,XS)}var zM=$i(In,"DataView");const Hh=zM;var BM=$i(In,"Promise");const Gh=BM;var VM=$i(In,"Set");const Kh=VM;var WM=$i(In,"WeakMap");const qh=WM;var f_="[object Map]",HM="[object Object]",h_="[object Promise]",p_="[object Set]",m_="[object WeakMap]",g_="[object DataView]",GM=Mi(Hh),KM=Mi(fa),qM=Mi(Gh),YM=Mi(Kh),QM=Mi(qh),Jr=Di;(Hh&&Jr(new Hh(new ArrayBuffer(1)))!=g_||fa&&Jr(new fa)!=f_||Gh&&Jr(Gh.resolve())!=h_||Kh&&Jr(new Kh)!=p_||qh&&Jr(new qh)!=m_)&&(Jr=function(t){var e=Di(t),n=e==HM?t.constructor:void 0,r=n?Mi(n):"";if(r)switch(r){case GM:return g_;case KM:return f_;case qM:return h_;case YM:return p_;case QM:return m_}return e});const Ym=Jr;var XM=Object.prototype,JM=XM.hasOwnProperty;function ZM(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&JM.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var e$=In.Uint8Array;const y_=e$;function Qm(t){var e=new t.constructor(t.byteLength);return new y_(e).set(new y_(t)),e}function t$(t,e){var n=e?Qm(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}var n$=/\w*$/;function r$(t){var e=new t.constructor(t.source,n$.exec(t));return e.lastIndex=t.lastIndex,e}var v_=Or?Or.prototype:void 0,__=v_?v_.valueOf:void 0;function i$(t){return __?Object(__.call(t)):{}}function s$(t,e){var n=e?Qm(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var o$="[object Boolean]",a$="[object Date]",l$="[object Map]",u$="[object Number]",c$="[object RegExp]",d$="[object Set]",f$="[object String]",h$="[object Symbol]",p$="[object ArrayBuffer]",m$="[object DataView]",g$="[object Float32Array]",y$="[object Float64Array]",v$="[object Int8Array]",_$="[object Int16Array]",w$="[object Int32Array]",E$="[object Uint8Array]",S$="[object Uint8ClampedArray]",C$="[object Uint16Array]",x$="[object Uint32Array]";function T$(t,e,n){var r=t.constructor;switch(e){case p$:return Qm(t);case o$:case a$:return new r(+t);case m$:return t$(t,n);case g$:case y$:case v$:case _$:case w$:case E$:case S$:case C$:case x$:return s$(t,n);case l$:return new r;case u$:case f$:return new r(t);case c$:return r$(t);case d$:return new r;case h$:return i$(t)}}var w_=Object.create,I$=function(){function t(){}return function(e){if(!za(e))return{};if(w_)return w_(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();const k$=I$;function b$(t){return typeof t.constructor=="function"&&!Hm(t)?k$(Vm(t)):{}}var P$="[object Map]";function R$(t){return Li(t)&&Ym(t)==P$}var E_=Ls&&Ls.isMap,O$=E_?Wm(E_):R$;const N$=O$;var A$="[object Set]";function D$(t){return Li(t)&&Ym(t)==A$}var S_=Ls&&Ls.isSet,L$=S_?Wm(S_):D$;const M$=L$;var $$=1,F$=2,j$=4,ZS="[object Arguments]",U$="[object Array]",z$="[object Boolean]",B$="[object Date]",V$="[object Error]",eC="[object Function]",W$="[object GeneratorFunction]",H$="[object Map]",G$="[object Number]",tC="[object Object]",K$="[object RegExp]",q$="[object Set]",Y$="[object String]",Q$="[object Symbol]",X$="[object WeakMap]",J$="[object ArrayBuffer]",Z$="[object DataView]",eF="[object Float32Array]",tF="[object Float64Array]",nF="[object Int8Array]",rF="[object Int16Array]",iF="[object Int32Array]",sF="[object Uint8Array]",oF="[object Uint8ClampedArray]",aF="[object Uint16Array]",lF="[object Uint32Array]",ue={};ue[ZS]=ue[U$]=ue[J$]=ue[Z$]=ue[z$]=ue[B$]=ue[eF]=ue[tF]=ue[nF]=ue[rF]=ue[iF]=ue[H$]=ue[G$]=ue[tC]=ue[K$]=ue[q$]=ue[Y$]=ue[Q$]=ue[sF]=ue[oF]=ue[aF]=ue[lF]=!0;ue[V$]=ue[eC]=ue[X$]=!1;function ql(t,e,n,r,i,s){var o,a=e&$$,l=e&F$,u=e&j$;if(n&&(o=i?n(t,r,i,s):n(t)),o!==void 0)return o;if(!za(t))return t;var c=Ba(t);if(c){if(o=ZM(t),!a)return qS(t,o)}else{var d=Ym(t),f=d==eC||d==W$;if(BS(t))return RM(t,a);if(d==tC||d==ZS||f&&!i){if(o=l||f?{}:b$(t),!a)return l?FM(t,bM(o,t)):LM(t,CM(o,t))}else{if(!ue[d])return i?t:{};o=T$(t,d,a)}}s||(s=new Js);var m=s.get(t);if(m)return m;s.set(t,o),M$(t)?t.forEach(function(w){o.add(ql(w,e,n,w,t,s))}):N$(t)&&t.forEach(function(w,p){o.set(p,ql(w,e,n,p,t,s))});var g=u?l?UM:jM:l?Km:Gm,v=c?void 0:g(t);return EL(v||t,function(w,p){v&&(p=w,w=t[p]),jS(o,p,ql(w,e,n,p,t,s))}),o}var uF=4;function C_(t){return ql(t,uF)}function nC(t,e){for(var n=-1,r=t==null?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}var cF="[object Symbol]";function Xm(t){return typeof t=="symbol"||Li(t)&&Di(t)==cF}var dF="Expected a function";function Jm(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(dF);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=t.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(Jm.Cache||Vr),n}Jm.Cache=Vr;var fF=500;function hF(t){var e=Jm(t,function(r){return n.size===fF&&n.clear(),r}),n=e.cache;return e}var pF=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,mF=/\\(\\)?/g,gF=hF(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(pF,function(n,r,i,s){e.push(i?s.replace(mF,"$1"):r||n)}),e});const yF=gF;var vF=1/0;function _F(t){if(typeof t=="string"||Xm(t))return t;var e=t+"";return e=="0"&&1/t==-vF?"-0":e}var wF=1/0,x_=Or?Or.prototype:void 0,T_=x_?x_.toString:void 0;function rC(t){if(typeof t=="string")return t;if(Ba(t))return nC(t,rC)+"";if(Xm(t))return T_?T_.call(t):"";var e=t+"";return e=="0"&&1/t==-wF?"-0":e}function EF(t){return t==null?"":rC(t)}function iC(t){return Ba(t)?nC(t,_F):Xm(t)?[t]:qS(yF(EF(t)))}var sC={exports:{}},se={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var je=typeof Symbol=="function"&&Symbol.for,Zm=je?Symbol.for("react.element"):60103,eg=je?Symbol.for("react.portal"):60106,zc=je?Symbol.for("react.fragment"):60107,Bc=je?Symbol.for("react.strict_mode"):60108,Vc=je?Symbol.for("react.profiler"):60114,Wc=je?Symbol.for("react.provider"):60109,Hc=je?Symbol.for("react.context"):60110,tg=je?Symbol.for("react.async_mode"):60111,Gc=je?Symbol.for("react.concurrent_mode"):60111,Kc=je?Symbol.for("react.forward_ref"):60112,qc=je?Symbol.for("react.suspense"):60113,SF=je?Symbol.for("react.suspense_list"):60120,Yc=je?Symbol.for("react.memo"):60115,Qc=je?Symbol.for("react.lazy"):60116,CF=je?Symbol.for("react.block"):60121,xF=je?Symbol.for("react.fundamental"):60117,TF=je?Symbol.for("react.responder"):60118,IF=je?Symbol.for("react.scope"):60119;function Mt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Zm:switch(t=t.type,t){case tg:case Gc:case zc:case Vc:case Bc:case qc:return t;default:switch(t=t&&t.$$typeof,t){case Hc:case Kc:case Qc:case Yc:case Wc:return t;default:return e}}case eg:return e}}}function oC(t){return Mt(t)===Gc}se.AsyncMode=tg;se.ConcurrentMode=Gc;se.ContextConsumer=Hc;se.ContextProvider=Wc;se.Element=Zm;se.ForwardRef=Kc;se.Fragment=zc;se.Lazy=Qc;se.Memo=Yc;se.Portal=eg;se.Profiler=Vc;se.StrictMode=Bc;se.Suspense=qc;se.isAsyncMode=function(t){return oC(t)||Mt(t)===tg};se.isConcurrentMode=oC;se.isContextConsumer=function(t){return Mt(t)===Hc};se.isContextProvider=function(t){return Mt(t)===Wc};se.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Zm};se.isForwardRef=function(t){return Mt(t)===Kc};se.isFragment=function(t){return Mt(t)===zc};se.isLazy=function(t){return Mt(t)===Qc};se.isMemo=function(t){return Mt(t)===Yc};se.isPortal=function(t){return Mt(t)===eg};se.isProfiler=function(t){return Mt(t)===Vc};se.isStrictMode=function(t){return Mt(t)===Bc};se.isSuspense=function(t){return Mt(t)===qc};se.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===zc||t===Gc||t===Vc||t===Bc||t===qc||t===SF||typeof t=="object"&&t!==null&&(t.$$typeof===Qc||t.$$typeof===Yc||t.$$typeof===Wc||t.$$typeof===Hc||t.$$typeof===Kc||t.$$typeof===xF||t.$$typeof===TF||t.$$typeof===IF||t.$$typeof===CF)};se.typeOf=Mt;sC.exports=se;var kF=sC.exports,aC=kF,bF={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},PF={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},lC={};lC[aC.ForwardRef]=bF;lC[aC.Memo]=PF;function Ae(){return Ae=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ae.apply(this,arguments)}function uC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var Xc=x.createContext(void 0);Xc.displayName="FormikContext";Xc.Provider;Xc.Consumer;function RF(){var t=x.useContext(Xc);return t||TD(!1),t}var Qt=function(e){return typeof e=="function"},Jc=function(e){return e!==null&&typeof e=="object"},OF=function(e){return String(Math.floor(Number(e)))===e},ff=function(e){return Object.prototype.toString.call(e)==="[object String]"},hf=function(e){return Jc(e)&&Qt(e.then)};function Et(t,e,n,r){r===void 0&&(r=0);for(var i=iC(e);t&&r<i.length;)t=t[i[r++]];return r!==i.length&&!t||t===void 0?n:t}function hi(t,e,n){for(var r=C_(t),i=r,s=0,o=iC(e);s<o.length-1;s++){var a=o[s],l=Et(t,o.slice(0,s+1));if(l&&(Jc(l)||Array.isArray(l)))i=i[a]=C_(l);else{var u=o[s+1];i=i[a]=OF(u)&&Number(u)>=0?[]:{}}}return(s===0?t:i)[o[s]]===n?t:(n===void 0?delete i[o[s]]:i[o[s]]=n,s===0&&n===void 0&&delete r[o[s]],r)}function cC(t,e,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var i=0,s=Object.keys(t);i<s.length;i++){var o=s[i],a=t[o];Jc(a)?n.get(a)||(n.set(a,!0),r[o]=Array.isArray(a)?[]:{},cC(a,e,n,r[o])):r[o]=e}return r}function NF(t,e){switch(e.type){case"SET_VALUES":return Ae({},t,{values:e.payload});case"SET_TOUCHED":return Ae({},t,{touched:e.payload});case"SET_ERRORS":return Xr(t.errors,e.payload)?t:Ae({},t,{errors:e.payload});case"SET_STATUS":return Ae({},t,{status:e.payload});case"SET_ISSUBMITTING":return Ae({},t,{isSubmitting:e.payload});case"SET_ISVALIDATING":return Ae({},t,{isValidating:e.payload});case"SET_FIELD_VALUE":return Ae({},t,{values:hi(t.values,e.payload.field,e.payload.value)});case"SET_FIELD_TOUCHED":return Ae({},t,{touched:hi(t.touched,e.payload.field,e.payload.value)});case"SET_FIELD_ERROR":return Ae({},t,{errors:hi(t.errors,e.payload.field,e.payload.value)});case"RESET_FORM":return Ae({},t,e.payload);case"SET_FORMIK_STATE":return e.payload(t);case"SUBMIT_ATTEMPT":return Ae({},t,{touched:cC(t.values,!0),isSubmitting:!0,submitCount:t.submitCount+1});case"SUBMIT_FAILURE":return Ae({},t,{isSubmitting:!1});case"SUBMIT_SUCCESS":return Ae({},t,{isSubmitting:!1});default:return t}}var Gr={},vl={};function dC(t){var e=t.validateOnChange,n=e===void 0?!0:e,r=t.validateOnBlur,i=r===void 0?!0:r,s=t.validateOnMount,o=s===void 0?!1:s,a=t.isInitialValid,l=t.enableReinitialize,u=l===void 0?!1:l,c=t.onSubmit,d=uC(t,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=Ae({validateOnChange:n,validateOnBlur:i,validateOnMount:o,onSubmit:c},d),m=x.useRef(f.initialValues),g=x.useRef(f.initialErrors||Gr),v=x.useRef(f.initialTouched||vl),w=x.useRef(f.initialStatus),p=x.useRef(!1),h=x.useRef({});x.useEffect(function(){return p.current=!0,function(){p.current=!1}},[]);var y=x.useState(0),S=y[1],C=x.useRef({values:f.initialValues,errors:f.initialErrors||Gr,touched:f.initialTouched||vl,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),I=C.current,E=x.useCallback(function(T){var O=C.current;C.current=NF(O,T),O!==C.current&&S(function(A){return A+1})},[]),P=x.useCallback(function(T,O){return new Promise(function(A,L){var W=f.validate(T,O);W==null?A(Gr):hf(W)?W.then(function(re){A(re||Gr)},function(re){L(re)}):A(W)})},[f.validate]),B=x.useCallback(function(T,O){var A=f.validationSchema,L=Qt(A)?A(O):A,W=O&&L.validateAt?L.validateAt(O,T):DF(T,L);return new Promise(function(re,Ne){W.then(function(){re(Gr)},function(Pn){Pn.name==="ValidationError"?re(AF(Pn)):Ne(Pn)})})},[f.validationSchema]),M=x.useCallback(function(T,O){return new Promise(function(A){return A(h.current[T].validate(O))})},[]),K=x.useCallback(function(T){var O=Object.keys(h.current).filter(function(L){return Qt(h.current[L].validate)}),A=O.length>0?O.map(function(L){return M(L,Et(T,L))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(A).then(function(L){return L.reduce(function(W,re,Ne){return re==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||re&&(W=hi(W,O[Ne],re)),W},{})})},[M]),$t=x.useCallback(function(T){return Promise.all([K(T),f.validationSchema?B(T):{},f.validate?P(T):{}]).then(function(O){var A=O[0],L=O[1],W=O[2],re=Vh.all([A,L,W],{arrayMerge:LF});return re})},[f.validate,f.validationSchema,K,P,B]),le=jt(function(T){return T===void 0&&(T=I.values),E({type:"SET_ISVALIDATING",payload:!0}),$t(T).then(function(O){return p.current&&(E({type:"SET_ISVALIDATING",payload:!1}),E({type:"SET_ERRORS",payload:O})),O})});x.useEffect(function(){o&&p.current===!0&&Xr(m.current,f.initialValues)&&le(m.current)},[o,le]);var wt=x.useCallback(function(T){var O=T&&T.values?T.values:m.current,A=T&&T.errors?T.errors:g.current?g.current:f.initialErrors||{},L=T&&T.touched?T.touched:v.current?v.current:f.initialTouched||{},W=T&&T.status?T.status:w.current?w.current:f.initialStatus;m.current=O,g.current=A,v.current=L,w.current=W;var re=function(){E({type:"RESET_FORM",payload:{isSubmitting:!!T&&!!T.isSubmitting,errors:A,touched:L,status:W,values:O,isValidating:!!T&&!!T.isValidating,submitCount:T&&T.submitCount&&typeof T.submitCount=="number"?T.submitCount:0}})};if(f.onReset){var Ne=f.onReset(I.values,jg);hf(Ne)?Ne.then(re):re()}else re()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);x.useEffect(function(){p.current===!0&&!Xr(m.current,f.initialValues)&&u&&(m.current=f.initialValues,wt(),o&&le(m.current))},[u,f.initialValues,wt,o,le]),x.useEffect(function(){u&&p.current===!0&&!Xr(g.current,f.initialErrors)&&(g.current=f.initialErrors||Gr,E({type:"SET_ERRORS",payload:f.initialErrors||Gr}))},[u,f.initialErrors]),x.useEffect(function(){u&&p.current===!0&&!Xr(v.current,f.initialTouched)&&(v.current=f.initialTouched||vl,E({type:"SET_TOUCHED",payload:f.initialTouched||vl}))},[u,f.initialTouched]),x.useEffect(function(){u&&p.current===!0&&!Xr(w.current,f.initialStatus)&&(w.current=f.initialStatus,E({type:"SET_STATUS",payload:f.initialStatus}))},[u,f.initialStatus,f.initialTouched]);var kn=jt(function(T){if(h.current[T]&&Qt(h.current[T].validate)){var O=Et(I.values,T),A=h.current[T].validate(O);return hf(A)?(E({type:"SET_ISVALIDATING",payload:!0}),A.then(function(L){return L}).then(function(L){E({type:"SET_FIELD_ERROR",payload:{field:T,value:L}}),E({type:"SET_ISVALIDATING",payload:!1})})):(E({type:"SET_FIELD_ERROR",payload:{field:T,value:A}}),Promise.resolve(A))}else if(f.validationSchema)return E({type:"SET_ISVALIDATING",payload:!0}),B(I.values,T).then(function(L){return L}).then(function(L){E({type:"SET_FIELD_ERROR",payload:{field:T,value:Et(L,T)}}),E({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),bn=x.useCallback(function(T,O){var A=O.validate;h.current[T]={validate:A}},[]),lt=x.useCallback(function(T){delete h.current[T]},[]),R=jt(function(T,O){E({type:"SET_TOUCHED",payload:T});var A=O===void 0?i:O;return A?le(I.values):Promise.resolve()}),$=x.useCallback(function(T){E({type:"SET_ERRORS",payload:T})},[]),F=jt(function(T,O){var A=Qt(T)?T(I.values):T;E({type:"SET_VALUES",payload:A});var L=O===void 0?n:O;return L?le(A):Promise.resolve()}),te=x.useCallback(function(T,O){E({type:"SET_FIELD_ERROR",payload:{field:T,value:O}})},[]),ne=jt(function(T,O,A){E({type:"SET_FIELD_VALUE",payload:{field:T,value:O}});var L=A===void 0?n:A;return L?le(hi(I.values,T,O)):Promise.resolve()}),Ft=x.useCallback(function(T,O){var A=O,L=T,W;if(!ff(T)){T.persist&&T.persist();var re=T.target?T.target:T.currentTarget,Ne=re.type,Pn=re.name,gd=re.id,yd=re.value,mT=re.checked,e8=re.outerHTML,Ug=re.options,gT=re.multiple;A=O||Pn||gd,L=/number|range/.test(Ne)?(W=parseFloat(yd),isNaN(W)?"":W):/checkbox/.test(Ne)?$F(Et(I.values,A),mT,yd):Ug&&gT?MF(Ug):yd}A&&ne(A,L)},[ne,I.values]),Ue=jt(function(T){if(ff(T))return function(O){return Ft(O,T)};Ft(T)}),nt=jt(function(T,O,A){O===void 0&&(O=!0),E({type:"SET_FIELD_TOUCHED",payload:{field:T,value:O}});var L=A===void 0?i:A;return L?le(I.values):Promise.resolve()}),Ke=x.useCallback(function(T,O){T.persist&&T.persist();var A=T.target,L=A.name,W=A.id,re=A.outerHTML,Ne=O||L||W;nt(Ne,!0)},[nt]),qe=jt(function(T){if(ff(T))return function(O){return Ke(O,T)};Ke(T)}),ji=x.useCallback(function(T){Qt(T)?E({type:"SET_FORMIK_STATE",payload:T}):E({type:"SET_FORMIK_STATE",payload:function(){return T}})},[]),Hr=x.useCallback(function(T){E({type:"SET_STATUS",payload:T})},[]),Kt=x.useCallback(function(T){E({type:"SET_ISSUBMITTING",payload:T})},[]),pd=jt(function(){return E({type:"SUBMIT_ATTEMPT"}),le().then(function(T){var O=T instanceof Error,A=!O&&Object.keys(T).length===0;if(A){var L;try{if(L=lT(),L===void 0)return}catch(W){throw W}return Promise.resolve(L).then(function(W){return p.current&&E({type:"SUBMIT_SUCCESS"}),W}).catch(function(W){if(p.current)throw E({type:"SUBMIT_FAILURE"}),W})}else if(p.current&&(E({type:"SUBMIT_FAILURE"}),O))throw T})}),aT=jt(function(T){T&&T.preventDefault&&Qt(T.preventDefault)&&T.preventDefault(),T&&T.stopPropagation&&Qt(T.stopPropagation)&&T.stopPropagation(),pd().catch(function(O){console.warn("Warning: An unhandled error was caught from submitForm()",O)})}),jg={resetForm:wt,validateForm:le,validateField:kn,setErrors:$,setFieldError:te,setFieldTouched:nt,setFieldValue:ne,setStatus:Hr,setSubmitting:Kt,setTouched:R,setValues:F,setFormikState:ji,submitForm:pd},lT=jt(function(){return c(I.values,jg)}),uT=jt(function(T){T&&T.preventDefault&&Qt(T.preventDefault)&&T.preventDefault(),T&&T.stopPropagation&&Qt(T.stopPropagation)&&T.stopPropagation(),wt()}),cT=x.useCallback(function(T){return{value:Et(I.values,T),error:Et(I.errors,T),touched:!!Et(I.touched,T),initialValue:Et(m.current,T),initialTouched:!!Et(v.current,T),initialError:Et(g.current,T)}},[I.errors,I.touched,I.values]),dT=x.useCallback(function(T){return{setValue:function(A,L){return ne(T,A,L)},setTouched:function(A,L){return nt(T,A,L)},setError:function(A){return te(T,A)}}},[ne,nt,te]),fT=x.useCallback(function(T){var O=Jc(T),A=O?T.name:T,L=Et(I.values,A),W={name:A,value:L,onChange:Ue,onBlur:qe};if(O){var re=T.type,Ne=T.value,Pn=T.as,gd=T.multiple;re==="checkbox"?Ne===void 0?W.checked=!!L:(W.checked=!!(Array.isArray(L)&&~L.indexOf(Ne)),W.value=Ne):re==="radio"?(W.checked=L===Ne,W.value=Ne):Pn==="select"&&gd&&(W.value=W.value||[],W.multiple=!0)}return W},[qe,Ue,I.values]),md=x.useMemo(function(){return!Xr(m.current,I.values)},[m.current,I.values]),hT=x.useMemo(function(){return typeof a<"u"?md?I.errors&&Object.keys(I.errors).length===0:a!==!1&&Qt(a)?a(f):a:I.errors&&Object.keys(I.errors).length===0},[a,md,I.errors,f]),pT=Ae({},I,{initialValues:m.current,initialErrors:g.current,initialTouched:v.current,initialStatus:w.current,handleBlur:qe,handleChange:Ue,handleReset:uT,handleSubmit:aT,resetForm:wt,setErrors:$,setFormikState:ji,setFieldTouched:nt,setFieldValue:ne,setFieldError:te,setStatus:Hr,setSubmitting:Kt,setTouched:R,setValues:F,submitForm:pd,validateForm:le,validateField:kn,isValid:hT,dirty:md,unregisterField:lt,registerField:bn,getFieldProps:fT,getFieldMeta:cT,getFieldHelpers:dT,validateOnBlur:i,validateOnChange:n,validateOnMount:o});return pT}function AF(t){var e={};if(t.inner){if(t.inner.length===0)return hi(e,t.path,t.message);for(var i=t.inner,n=Array.isArray(i),r=0,i=n?i:i[Symbol.iterator]();;){var s;if(n){if(r>=i.length)break;s=i[r++]}else{if(r=i.next(),r.done)break;s=r.value}var o=s;Et(e,o.path)||(e=hi(e,o.path,o.message))}}return e}function DF(t,e,n,r){n===void 0&&(n=!1);var i=Yh(t);return e[n?"validateSync":"validate"](i,{abortEarly:!1,context:r||i})}function Yh(t){var e=Array.isArray(t)?[]:{};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=String(n);Array.isArray(t[r])===!0?e[r]=t[r].map(function(i){return Array.isArray(i)===!0||Zv(i)?Yh(i):i!==""?i:void 0}):Zv(t[r])?e[r]=Yh(t[r]):e[r]=t[r]!==""?t[r]:void 0}return e}function LF(t,e,n){var r=t.slice();return e.forEach(function(s,o){if(typeof r[o]>"u"){var a=n.clone!==!1,l=a&&n.isMergeableObject(s);r[o]=l?Vh(Array.isArray(s)?[]:{},s,n):s}else n.isMergeableObject(s)?r[o]=Vh(t[o],s,n):t.indexOf(s)===-1&&r.push(s)}),r}function MF(t){return Array.from(t).filter(function(e){return e.selected}).map(function(e){return e.value})}function $F(t,e,n){if(typeof t=="boolean")return!!e;var r=[],i=!1,s=-1;if(Array.isArray(t))r=t,s=t.indexOf(n),i=s>=0;else if(!n||n=="true"||n=="false")return!!e;return e&&n&&!i?r.concat(n):i?r.slice(0,s).concat(r.slice(s+1)):r}var FF=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?x.useLayoutEffect:x.useEffect;function jt(t){var e=x.useRef(t);return FF(function(){e.current=t}),x.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e.current.apply(void 0,r)},[])}var jF=x.forwardRef(function(t,e){var n=t.action,r=uC(t,["action"]),i=n??"#",s=RF(),o=s.handleReset,a=s.handleSubmit;return x.createElement("form",Ae({onSubmit:a,ref:e,onReset:o,action:i},r))});jF.displayName="Form";const Cn="/Learn-Lingo/assets/sprite-ecfc389e.svg";function UF({onClose:t}){const e=Bm({userName:ms().min(2,"Name must be at least 2 characters long").max(16,"Name can be at most 16 characters long").matches(/^[a-zA-Z\s]+$/,"Name must contain only English letters and spaces").required("Name is required"),email:ms().email("Invalid email format").matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Invalid Email format").required("Email is required"),password:ms().min(6,"Password must be at least 6 characters long").max(16,"Password can be at most 16 characters long").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,"Password must contain only English letters at least one digit, one lowercase letter, and one uppercase letter").required("Password is required")}),n=Pc(),r=dC({initialValues:{userName:"",email:"",password:""},validationSchema:e,onSubmit:async i=>{wO(n,i.email,i.password).then(s=>{const o=s.user;console.log(o)}).then(()=>dI("/Teachers")).catch(s=>{console.log(s.code,s.message)})}});return _.jsxs(z2,{onSubmit:r.handleSubmit,children:[_.jsx(B2,{children:"Registration"}),_.jsx(V2,{children:"Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"}),_.jsxs(af,{children:[_.jsx(uf,{id:"userName",name:"userName",type:"text",placeholder:"Name",onChange:r.handleChange,value:r.values.userName,className:`${r.touched.userName&&r.errors.userName?"is-invalid":""}`}),r.touched.userName&&r.errors.userName?_.jsx(_.Fragment,{children:_.jsx(lf,{children:r.errors.userName})}):null]}),_.jsxs(af,{children:[_.jsx(uf,{id:"email",name:"email",type:"text",placeholder:"Email",onChange:r.handleChange,value:r.values.email,className:`${r.touched.email&&r.errors.email?"is-invalid":""}`}),r.touched.email&&r.errors.email?_.jsx(_.Fragment,{children:_.jsx(lf,{children:r.errors.email})}):null]}),_.jsxs(af,{children:[_.jsx(uf,{id:"password",name:"password",type:r.values.showPassword?"text":"password",placeholder:"Password",onChange:r.handleChange,value:r.values.password,className:`${r.touched.password&&r.errors.password?"is-invalid":""}`}),_.jsx(W2,{type:"button",onClick:()=>{r.setFieldTouched("password",!1),r.setFieldValue("showPassword",!r.values.showPassword)},children:r.values.showPassword?_.jsx(Xv,{children:_.jsx("use",{href:Cn+"#iconEyeOpen"})}):_.jsx(Xv,{children:_.jsx("use",{href:Cn+"#iconEyeClosed"})})}),r.touched.password&&r.errors.password?_.jsx(lf,{children:r.errors.password}):null]}),_.jsx(H2,{type:"submit",children:"Sign Up"}),_.jsx(G2,{onClick:()=>t(!1),children:_.jsx(K2,{children:_.jsx("use",{href:Cn+"#icon-x"})})})]})}const zF=D.form`
  position: relative;
  margin: 0 auto;
  min-height: 420px;

  background: var( --background);
  border-radius: 30px;
  padding: 64px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    padding: 64px;
  }
`,I_=D.div`
  margin-bottom: 14px;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 18px;
  }
`;D.div`
  margin-bottom: 40px;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
`;const BF=D.h2`
  line-height:1.2;
  letter-spacing: -0.8px;
  font-weight: 500;
  margin-bottom: 20px;
  color: var(--secondar);
  @media (min-width: 768px) {
   font-size: 40px;
  }
`,VF=D.p`
  width: 438px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.38;
  margin-bottom:40px;
  color: rgba(18, 20, 23, 0.80);

`,k_=D.p`
  margin-left: 15px;
  font-size: 12px;
  font-weight: 400;
  color: var(--red);
`,WF=D.button`
  position: absolute;
  right: 18px;
  top: 17px;
  background-color: transparent;
  border: none;
  padding: 0px;
  
  /* @media (min-width: 768px) {
    top: 10px;
    left: 90%;
  } */
`,b_=D.input`
  padding:  16px 18px;
  width: 100%;
  border-radius: 40px;
  outline: none;
  border-radius: 12px; 
  border: 1px solid rgba(18, 20, 23, 0.10);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.38;
  color: var(--secondar);
  &::placeholder{
  color: var(--secondar);
  }
  &.is-invalid {
    border-color: var(--red);
  }
`,HF=D.button`
  font-weight: 600;
  width: 100%;
  border: none;
  border-radius: 12px;
  color: var(--secondar);

  background-color: var(--yelow);

  padding: 16px 180px ;

  font-size: 18px;
  font-weight: 700;
  line-height: 1.56;
  @media (min-width: 768px) {

  }
`,GF=D.button`
  position: absolute;
  top: 20px;
  right: 20px;

  background-color:transparent;
  border: none;
`;D.svg`
  stroke: var( --secondary);
  fill: none;
  width: 24px;
  height: 24px;
`;const KF=D.svg`
  stroke: var( --secondary);
  fill: none;
  width: 32px;
  height: 32px;
`,P_=D.svg`
  stroke: var( --secondary);
  fill: none;
  display: inline-block;
  width: 24px;
  height: 24px;
`;function qF({onClose:t}){const e=Bm({email:ms().email("Invalid email format").matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Invalid Email format").required("Email is required"),password:ms().min(6,"Password must be at least 6 characters long").max(16,"Password can be at most 16 characters long").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,"Password must contain only English letters at least one digit, one lowercase letter, and one uppercase letter").required("Password is required")}),n=Pc(),r=dC({initialValues:{email:"",password:""},validationSchema:e,onSubmit:async i=>{EO(n,i.email,i.password).then(s=>{const o=s.user;console.log(o)}).catch(s=>{console.log(s.code,s.message)})}});return _.jsxs(zF,{onSubmit:r.handleSubmit,children:[_.jsx(BF,{children:"Log In"}),_.jsx(VF,{children:"Welcome back! Please enter your credentials to access your account and continue your search for an teacher."}),_.jsxs(I_,{children:[_.jsx(b_,{id:"email",name:"email",type:"text",placeholder:"Email",onChange:r.handleChange,value:r.values.email,className:`${r.touched.email&&r.errors.email?"is-invalid":""}`}),r.touched.email&&r.errors.email?_.jsx(_.Fragment,{children:_.jsx(k_,{children:r.errors.email})}):null]}),_.jsxs(I_,{children:[_.jsx(b_,{id:"password",name:"password",type:r.values.showPassword?"text":"password",placeholder:"Password",onChange:r.handleChange,value:r.values.password,className:`${r.touched.password&&r.errors.password?"is-invalid":""}`}),_.jsx(WF,{type:"button",onClick:()=>{r.setFieldTouched("password",!1),r.setFieldValue("showPassword",!r.values.showPassword)},children:r.values.showPassword?_.jsx(P_,{children:_.jsx("use",{href:Cn+"#iconEyeOpen"})}):_.jsx(P_,{children:_.jsx("use",{href:Cn+"#iconEyeClosed"})})}),r.touched.password&&r.errors.password?_.jsx(k_,{children:r.errors.password}):null]}),_.jsx(HF,{type:"submit",children:"Log In"}),_.jsx(GF,{onClick:()=>t(!1),children:_.jsx(KF,{children:_.jsx("use",{href:Cn+"#icon-x"})})})]})}function YF({color:t}){const[e,n]=x.useState(!1),[r,i]=x.useState(!1);return console.log(t),_.jsxs(_.Fragment,{children:[_.jsxs(WA,{children:[_.jsx(Vv,{to:"/Home",children:"Home"}),_.jsx(Vv,{to:"/Teachers",children:"Teachers"})]}),_.jsxs(HA,{children:[_.jsxs(GA,{onClick:()=>i(!r),children:[_.jsx(qA,{color:t,children:_.jsx("use",{href:Cn+"#icon-log-in-01"})}),"Log in"]}),_.jsx(KA,{onClick:()=>n(!e),children:"Registration"})]}),e&&_.jsxs(Wv,{onClose:n,children:[" ",_.jsx(UF,{onClose:n})," "]}),r&&_.jsxs(Wv,{onClose:i,children:[" ",_.jsx(qF,{onClose:i})," "]})]})}const QF=D.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px 28px;
`,pf=D(Ra)`
    color: var(--secondary);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25;
    padding: 10px 0px ;
`;function XF(){return _.jsxs(QF,{children:[_.jsx(pf,{to:"/Home",children:"Home"}),_.jsx(pf,{to:"/Teachers",children:"Teachers"}),_.jsx(pf,{to:"/Favorites",children:"Favorites"})]})}const JF=({color:t})=>{const[e,n]=x.useState(!0),r=Pc();return HE(r,i=>{n(!!i)}),_.jsx(jA,{children:_.jsxs(UA,{children:[_.jsxs(BA,{to:"/Home",children:[_.jsx(zA,{children:_.jsx("use",{href:Cn+"#icon-ukraine"})}),_.jsx(VA,{children:"LearnLingo"})]}),e?_.jsx(XF,{}):_.jsx(YF,{color:t})]})})},ZF=({color:t})=>_.jsxs(_.Fragment,{children:[_.jsx(JF,{color:t}),_.jsx(x.Suspense,{fallback:null,children:_.jsx(OI,{})})]});function Qh(){return Qh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Qh.apply(this,arguments)}function ej(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function tj(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var nj=function(){function t(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(tj(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=ej(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),Xe="-ms-",Bu="-moz-",J="-webkit-",fC="comm",ng="rule",rg="decl",rj="@import",hC="@keyframes",ij="@layer",sj=Math.abs,Zc=String.fromCharCode,oj=Object.assign;function aj(t,e){return Ve(t,0)^45?(((e<<2^Ve(t,0))<<2^Ve(t,1))<<2^Ve(t,2))<<2^Ve(t,3):0}function pC(t){return t.trim()}function lj(t,e){return(t=e.exec(t))?t[0]:t}function Z(t,e,n){return t.replace(e,n)}function Xh(t,e){return t.indexOf(e)}function Ve(t,e){return t.charCodeAt(e)|0}function pa(t,e,n){return t.slice(e,n)}function gn(t){return t.length}function ig(t){return t.length}function _l(t,e){return e.push(t),t}function uj(t,e){return t.map(e).join("")}var ed=1,Ms=1,mC=0,vt=0,Ie=0,Zs="";function td(t,e,n,r,i,s,o){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:ed,column:Ms,length:o,return:""}}function fo(t,e){return oj(td("",null,null,"",null,null,0),t,{length:-t.length},e)}function cj(){return Ie}function dj(){return Ie=vt>0?Ve(Zs,--vt):0,Ms--,Ie===10&&(Ms=1,ed--),Ie}function bt(){return Ie=vt<mC?Ve(Zs,vt++):0,Ms++,Ie===10&&(Ms=1,ed++),Ie}function xn(){return Ve(Zs,vt)}function Yl(){return vt}function Va(t,e){return pa(Zs,t,e)}function ma(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function gC(t){return ed=Ms=1,mC=gn(Zs=t),vt=0,[]}function yC(t){return Zs="",t}function Ql(t){return pC(Va(vt-1,Jh(t===91?t+2:t===40?t+1:t)))}function fj(t){for(;(Ie=xn())&&Ie<33;)bt();return ma(t)>2||ma(Ie)>3?"":" "}function hj(t,e){for(;--e&&bt()&&!(Ie<48||Ie>102||Ie>57&&Ie<65||Ie>70&&Ie<97););return Va(t,Yl()+(e<6&&xn()==32&&bt()==32))}function Jh(t){for(;bt();)switch(Ie){case t:return vt;case 34:case 39:t!==34&&t!==39&&Jh(Ie);break;case 40:t===41&&Jh(t);break;case 92:bt();break}return vt}function pj(t,e){for(;bt()&&t+Ie!==47+10;)if(t+Ie===42+42&&xn()===47)break;return"/*"+Va(e,vt-1)+"*"+Zc(t===47?t:bt())}function mj(t){for(;!ma(xn());)bt();return Va(t,vt)}function gj(t){return yC(Xl("",null,null,null,[""],t=gC(t),0,[0],t))}function Xl(t,e,n,r,i,s,o,a,l){for(var u=0,c=0,d=o,f=0,m=0,g=0,v=1,w=1,p=1,h=0,y="",S=i,C=s,I=r,E=y;w;)switch(g=h,h=bt()){case 40:if(g!=108&&Ve(E,d-1)==58){Xh(E+=Z(Ql(h),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:E+=Ql(h);break;case 9:case 10:case 13:case 32:E+=fj(g);break;case 92:E+=hj(Yl()-1,7);continue;case 47:switch(xn()){case 42:case 47:_l(yj(pj(bt(),Yl()),e,n),l);break;default:E+="/"}break;case 123*v:a[u++]=gn(E)*p;case 125*v:case 59:case 0:switch(h){case 0:case 125:w=0;case 59+c:p==-1&&(E=Z(E,/\f/g,"")),m>0&&gn(E)-d&&_l(m>32?O_(E+";",r,n,d-1):O_(Z(E," ","")+";",r,n,d-2),l);break;case 59:E+=";";default:if(_l(I=R_(E,e,n,u,c,i,a,y,S=[],C=[],d),s),h===123)if(c===0)Xl(E,e,I,I,S,s,d,a,C);else switch(f===99&&Ve(E,3)===110?100:f){case 100:case 108:case 109:case 115:Xl(t,I,I,r&&_l(R_(t,I,I,0,0,i,a,y,i,S=[],d),C),i,C,d,a,r?S:C);break;default:Xl(E,I,I,I,[""],C,0,a,C)}}u=c=m=0,v=p=1,y=E="",d=o;break;case 58:d=1+gn(E),m=g;default:if(v<1){if(h==123)--v;else if(h==125&&v++==0&&dj()==125)continue}switch(E+=Zc(h),h*v){case 38:p=c>0?1:(E+="\f",-1);break;case 44:a[u++]=(gn(E)-1)*p,p=1;break;case 64:xn()===45&&(E+=Ql(bt())),f=xn(),c=d=gn(y=E+=mj(Yl())),h++;break;case 45:g===45&&gn(E)==2&&(v=0)}}return s}function R_(t,e,n,r,i,s,o,a,l,u,c){for(var d=i-1,f=i===0?s:[""],m=ig(f),g=0,v=0,w=0;g<r;++g)for(var p=0,h=pa(t,d+1,d=sj(v=o[g])),y=t;p<m;++p)(y=pC(v>0?f[p]+" "+h:Z(h,/&\f/g,f[p])))&&(l[w++]=y);return td(t,e,n,i===0?ng:a,l,u,c)}function yj(t,e,n){return td(t,e,n,fC,Zc(cj()),pa(t,2,-2),0)}function O_(t,e,n,r){return td(t,e,n,rg,pa(t,0,r),pa(t,r+1,-1),r)}function gs(t,e){for(var n="",r=ig(t),i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function vj(t,e,n,r){switch(t.type){case ij:if(t.children.length)break;case rj:case rg:return t.return=t.return||t.value;case fC:return"";case hC:return t.return=t.value+"{"+gs(t.children,r)+"}";case ng:t.value=t.props.join(",")}return gn(n=gs(t.children,r))?t.return=t.value+"{"+n+"}":""}function _j(t){var e=ig(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function wj(t){return function(e){e.root||(e=e.return)&&t(e)}}var Ej=function(e,n,r){for(var i=0,s=0;i=s,s=xn(),i===38&&s===12&&(n[r]=1),!ma(s);)bt();return Va(e,vt)},Sj=function(e,n){var r=-1,i=44;do switch(ma(i)){case 0:i===38&&xn()===12&&(n[r]=1),e[r]+=Ej(vt-1,n,r);break;case 2:e[r]+=Ql(i);break;case 4:if(i===44){e[++r]=xn()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=Zc(i)}while(i=bt());return e},Cj=function(e,n){return yC(Sj(gC(e),n))},N_=new WeakMap,xj=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!N_.get(r))&&!i){N_.set(e,!0);for(var s=[],o=Cj(n,s),a=r.props,l=0,u=0;l<o.length;l++)for(var c=0;c<a.length;c++,u++)e.props[u]=s[l]?o[l].replace(/&\f/g,a[c]):a[c]+" "+o[l]}}},Tj=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function vC(t,e){switch(aj(t,e)){case 5103:return J+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return J+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return J+t+Bu+t+Xe+t+t;case 6828:case 4268:return J+t+Xe+t+t;case 6165:return J+t+Xe+"flex-"+t+t;case 5187:return J+t+Z(t,/(\w+).+(:[^]+)/,J+"box-$1$2"+Xe+"flex-$1$2")+t;case 5443:return J+t+Xe+"flex-item-"+Z(t,/flex-|-self/,"")+t;case 4675:return J+t+Xe+"flex-line-pack"+Z(t,/align-content|flex-|-self/,"")+t;case 5548:return J+t+Xe+Z(t,"shrink","negative")+t;case 5292:return J+t+Xe+Z(t,"basis","preferred-size")+t;case 6060:return J+"box-"+Z(t,"-grow","")+J+t+Xe+Z(t,"grow","positive")+t;case 4554:return J+Z(t,/([^-])(transform)/g,"$1"+J+"$2")+t;case 6187:return Z(Z(Z(t,/(zoom-|grab)/,J+"$1"),/(image-set)/,J+"$1"),t,"")+t;case 5495:case 3959:return Z(t,/(image-set\([^]*)/,J+"$1$`$1");case 4968:return Z(Z(t,/(.+:)(flex-)?(.*)/,J+"box-pack:$3"+Xe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+J+t+t;case 4095:case 3583:case 4068:case 2532:return Z(t,/(.+)-inline(.+)/,J+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(gn(t)-1-e>6)switch(Ve(t,e+1)){case 109:if(Ve(t,e+4)!==45)break;case 102:return Z(t,/(.+:)(.+)-([^]+)/,"$1"+J+"$2-$3$1"+Bu+(Ve(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Xh(t,"stretch")?vC(Z(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(Ve(t,e+1)!==115)break;case 6444:switch(Ve(t,gn(t)-3-(~Xh(t,"!important")&&10))){case 107:return Z(t,":",":"+J)+t;case 101:return Z(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+J+(Ve(t,14)===45?"inline-":"")+"box$3$1"+J+"$2$3$1"+Xe+"$2box$3")+t}break;case 5936:switch(Ve(t,e+11)){case 114:return J+t+Xe+Z(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return J+t+Xe+Z(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return J+t+Xe+Z(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return J+t+Xe+t+t}return t}var Ij=function(e,n,r,i){if(e.length>-1&&!e.return)switch(e.type){case rg:e.return=vC(e.value,e.length);break;case hC:return gs([fo(e,{value:Z(e.value,"@","@"+J)})],i);case ng:if(e.length)return uj(e.props,function(s){switch(lj(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return gs([fo(e,{props:[Z(s,/:(read-\w+)/,":"+Bu+"$1")]})],i);case"::placeholder":return gs([fo(e,{props:[Z(s,/:(plac\w+)/,":"+J+"input-$1")]}),fo(e,{props:[Z(s,/:(plac\w+)/,":"+Bu+"$1")]}),fo(e,{props:[Z(s,/:(plac\w+)/,Xe+"input-$1")]})],i)}return""})}},kj=[Ij],bj=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var w=v.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=e.stylisPlugins||kj,s={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var w=v.getAttribute("data-emotion").split(" "),p=1;p<w.length;p++)s[w[p]]=!0;a.push(v)});var l,u=[xj,Tj];{var c,d=[vj,wj(function(v){c.insert(v)})],f=_j(u.concat(i,d)),m=function(w){return gs(gj(w),f)};l=function(w,p,h,y){c=h,m(w?w+"{"+p.styles+"}":p.styles),y&&(g.inserted[p.name]=!0)}}var g={key:n,sheet:new nj({key:n,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:l};return g.sheet.hydrate(a),g},Pj=!0;function Rj(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):r+=i+" "}),r}var _C=function(e,n,r){var i=e.key+"-"+n.name;(r===!1||Pj===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles)},Oj=function(e,n,r){_C(e,n,r);var i=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var s=n;do e.insert(n===s?"."+i:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function Nj(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var Aj=/[A-Z]|^ms/g,Dj=/_EMO_([^_]+?)_([^]*?)_EMO_/g,wC=function(e){return e.charCodeAt(1)===45},A_=function(e){return e!=null&&typeof e!="boolean"},mf=nS(function(t){return wC(t)?t:t.replace(Aj,"-$&").toLowerCase()}),D_=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(Dj,function(r,i,s){return yn={name:i,styles:s,next:yn},i})}return uS[e]!==1&&!wC(e)&&typeof n=="number"&&n!==0?n+"px":n};function ga(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return yn={name:n.name,styles:n.styles,next:yn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)yn={name:r.name,styles:r.styles,next:yn},r=r.next;var i=n.styles+";";return i}return Lj(t,e,n)}case"function":{if(t!==void 0){var s=yn,o=n(t);return yn=s,ga(t,e,o)}break}}if(e==null)return n;var a=e[n];return a!==void 0?a:n}function Lj(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=ga(t,e,n[i])+";";else for(var s in n){var o=n[s];if(typeof o!="object")e!=null&&e[o]!==void 0?r+=s+"{"+e[o]+"}":A_(o)&&(r+=mf(s)+":"+D_(s,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var a=0;a<o.length;a++)A_(o[a])&&(r+=mf(s)+":"+D_(s,o[a])+";");else{var l=ga(t,e,o);switch(s){case"animation":case"animationName":{r+=mf(s)+":"+l+";";break}default:r+=s+"{"+l+"}"}}}return r}var L_=/label:\s*([^\s;\n{]+)\s*(;|$)/g,yn,Mj=function(e,n,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,s="";yn=void 0;var o=e[0];o==null||o.raw===void 0?(i=!1,s+=ga(r,n,o)):s+=o[0];for(var a=1;a<e.length;a++)s+=ga(r,n,e[a]),i&&(s+=o[a]);L_.lastIndex=0;for(var l="",u;(u=L_.exec(s))!==null;)l+="-"+u[1];var c=Nj(s)+l;return{name:c,styles:s,next:yn}},$j=function(e){return e()},Fj=zo["useInsertionEffect"]?zo["useInsertionEffect"]:!1,jj=Fj||$j,EC=x.createContext(typeof HTMLElement<"u"?bj({key:"css"}):null);EC.Provider;var Uj=function(e){return x.forwardRef(function(n,r){var i=x.useContext(EC);return e(n,i,r)})},zj=x.createContext({}),Bj=MN,Vj=function(e){return e!=="theme"},M_=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?Bj:Vj},$_=function(e,n,r){var i;if(n){var s=n.shouldForwardProp;i=e.__emotion_forwardProp&&s?function(o){return e.__emotion_forwardProp(o)&&s(o)}:s}return typeof i!="function"&&r&&(i=e.__emotion_forwardProp),i},Wj=function(e){var n=e.cache,r=e.serialized,i=e.isStringTag;return _C(n,r,i),jj(function(){return Oj(n,r,i)}),null},Hj=function t(e,n){var r=e.__emotion_real===e,i=r&&e.__emotion_base||e,s,o;n!==void 0&&(s=n.label,o=n.target);var a=$_(e,n,r),l=a||M_(i),u=!l("as");return function(){var c=arguments,d=r&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&d.push("label:"+s+";"),c[0]==null||c[0].raw===void 0)d.push.apply(d,c);else{d.push(c[0][0]);for(var f=c.length,m=1;m<f;m++)d.push(c[m],c[0][m])}var g=Uj(function(v,w,p){var h=u&&v.as||i,y="",S=[],C=v;if(v.theme==null){C={};for(var I in v)C[I]=v[I];C.theme=x.useContext(zj)}typeof v.className=="string"?y=Rj(w.registered,S,v.className):v.className!=null&&(y=v.className+" ");var E=Mj(d.concat(S),w.registered,C);y+=w.key+"-"+E.name,o!==void 0&&(y+=" "+o);var P=u&&a===void 0?M_(h):l,B={};for(var M in v)u&&M==="as"||P(M)&&(B[M]=v[M]);return B.className=y,B.ref=p,x.createElement(x.Fragment,null,x.createElement(Wj,{cache:w,serialized:E,isStringTag:typeof h=="string"}),x.createElement(h,B))});return g.displayName=s!==void 0?s:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",g.defaultProps=e.defaultProps,g.__emotion_real=g,g.__emotion_base=i,g.__emotion_styles=d,g.__emotion_forwardProp=a,Object.defineProperty(g,"toString",{value:function(){return"."+o}}),g.withComponent=function(v,w){return t(v,Qh({},n,w,{shouldForwardProp:$_(g,w,!0)})).apply(void 0,d)},g}},Gj=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],U=Hj.bind();Gj.forEach(function(t){U[t]=U(t)});const Kj=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:0px 24px;
  margin-bottom:24px;
  
`,qj=U.h1`
  @media (min-width: 1280px) {
    width: 548px;
    margin-bottom:32px;
    margin-top:0px;
  }

color: var(--secondary);
font-size: 48px;
font-style: normal;
font-weight: 500;
line-height: 1.17;
letter-spacing: -0.96px;
`,Yj=U.span`
  font-style: italic;
  font-weight: 400;
  line-height: 56px;
  letter-spacing: -0.96px;
  padding-right:10px;
  border-radius:12px;
  background-color: ${({color:t})=>t==="Blue"?"var(--hoverColorBlue)":t==="Green"?"var(--hoverColorGreen)":t==="Orange"?"var(--hoverColorYellow)":t==="Pink"?"var(--hoverColorPink)":t==="LightPink"?"var(--hoverColorCoral)":"var(--hoverCecondary-text-color)"};
`,Qj=U.div`
background-color:var(--secondary-white);
border-radius: 30px;
padding: 98px 108px  98px  64px ;
`,Xj=U.p`
      @media (min-width: 1280px) {
    width: 471px;
    margin-bottom:64px
  }
color: var( --secondary);
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height:1.37;
letter-spacing: -0.32px;
`,Jj=U.button`

  padding: 16px 88px;
  border: none;
  border-radius: 12px;
  height: 60px;
  background-color: ${({color:t})=>t==="Blue"?"var(--colorBlue)":t==="Green"?"var(--colorGreen)":t==="Orange"?"var(--colorYellow)":t==="Pink"?"var(--colorPink)":t==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};

`,Zj=U.ul`
  display: flex;
  flex-direction: row;
  width: 1310px;
  gap: 100px;
  padding: 40px 0;
  justify-content: center;
  align-items: center;
    margin-left:auto;
  margin-right:auto;
  max-width:1312px;
  border: 3px  dashed ${({color:t})=>t==="Blue"?"var(--colorBlue)":t==="Green"?"var(--colorGreen)":t==="Orange"?"var(--colorYellow)":t==="Pink"?"var(--colorPink)":t==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  border-radius: 30px;
`,wl=U.li`
  display: flex;
  flex-direction: row;
  gap: 16px;
`,El=U.span`
  font-size: 28px; 
  line-height: 1.14;
  letter-spacing: -0.56px;
`,Sl=U.span`
  width: 96px;
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: -0.28px;
`,e3="/Learn-Lingo/assets/ImgYelow-7772ad01.jpeg",t3="/Learn-Lingo/assets/imgGrean-b6010a5f.jpeg",n3="/Learn-Lingo/assets/imgLighPink-5fe905ec.jpeg",r3="/Learn-Lingo/assets/imgPink-98002fea.jpeg",i3="/Learn-Lingo/assets/imgBlue-e3826070.jpeg",s3=({color:t})=>(console.log(t),_.jsxs(_.Fragment,{children:[_.jsxs(Kj,{children:[_.jsxs(Qj,{children:[_.jsxs(qj,{children:["Unlock your potential with the best  ",_.jsx(Yj,{color:t,children:"language"})," tutors"]}),_.jsx(Xj,{children:"Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors."}),_.jsx(Jj,{color:t,children:"Get started"})]}),t==="Blue"?_.jsx("img",{src:i3,alt:"girlImg"}):null,t==="LightPink"?_.jsx("img",{src:n3,alt:"girlImg"}):null,t==="Green"?_.jsx("img",{src:t3,alt:"girlImg"}):null,t==="Orange"?_.jsx("img",{src:e3,alt:"girlImg"}):null,t==="Pink"?_.jsx("img",{src:r3,alt:"girlImg"}):null]}),_.jsx("footer",{children:_.jsxs(Zj,{color:t,children:[_.jsxs(wl,{children:[_.jsx(El,{children:"32,000 +"}),_.jsx(Sl,{children:"Experienced tutors"})]}),_.jsxs(wl,{children:[_.jsx(El,{children:"300,000 +"}),_.jsx(Sl,{children:"5-star tutor reviews"})]}),_.jsxs(wl,{children:[_.jsx(El,{children:"120 +"}),_.jsx(Sl,{children:"Subjects taught"})]}),_.jsxs(wl,{children:[_.jsx(El,{children:"200 +"}),_.jsx(Sl,{children:"Tutor nationalities"})]})]})})]}));U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 500px;
`;var SC={exports:{}},CC={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wa=x;function o3(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var a3=typeof Object.is=="function"?Object.is:o3,l3=Wa.useSyncExternalStore,u3=Wa.useRef,c3=Wa.useEffect,d3=Wa.useMemo,f3=Wa.useDebugValue;CC.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=u3(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=d3(function(){function l(m){if(!u){if(u=!0,c=m,m=r(m),i!==void 0&&o.hasValue){var g=o.value;if(i(g,m))return d=g}return d=m}if(g=d,a3(c,m))return g;var v=r(m);return i!==void 0&&i(g,v)?g:(c=m,d=v)}var u=!1,c,d,f=n===void 0?null:n;return[function(){return l(e())},f===null?void 0:function(){return l(f())}]},[e,n,r,i]);var a=l3(t,s[0],s[1]);return c3(function(){o.hasValue=!0,o.value=a},[a]),f3(a),a};SC.exports=CC;var h3=SC.exports,xt="default"in zo?pt:zo,F_=Symbol.for("react-redux-context"),j_=typeof globalThis<"u"?globalThis:{};function p3(){if(!xt.createContext)return{};const t=j_[F_]??(j_[F_]=new Map);let e=t.get(xt.createContext);return e||(e=xt.createContext(null),t.set(xt.createContext,e)),e}var Nr=p3(),m3=()=>{throw new Error("uSES not initialized!")};function sg(t=Nr){return function(){return xt.useContext(t)}}var xC=sg(),TC=m3,g3=t=>{TC=t},y3=(t,e)=>t===e;function v3(t=Nr){const e=t===Nr?xC:sg(t),n=(r,i={})=>{const{equalityFn:s=y3,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:l,getServerState:u,stabilityCheck:c,identityFunctionCheck:d}=e();xt.useRef(!0);const f=xt.useCallback({[r.name](g){return r(g)}}[r.name],[r,c,o.stabilityCheck]),m=TC(l.addNestedSub,a.getState,u||a.getState,f,s);return xt.useDebugValue(m),m};return Object.assign(n,{withTypes:()=>n}),n}var IC=v3();function _3(t){t()}function w3(){let t=null,e=null;return{clear(){t=null,e=null},notify(){_3(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var U_={notify(){},get:()=>[]};function E3(t,e){let n,r=U_,i=0,s=!1;function o(v){c();const w=r.subscribe(v);let p=!1;return()=>{p||(p=!0,w(),d())}}function a(){r.notify()}function l(){g.onStateChange&&g.onStateChange()}function u(){return s}function c(){i++,n||(n=e?e.addNestedSub(l):t.subscribe(l),r=w3())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=U_)}function f(){s||(s=!0,c())}function m(){s&&(s=!1,d())}const g={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:f,tryUnsubscribe:m,getListeners:()=>r};return g}var S3=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",C3=S3?xt.useLayoutEffect:xt.useEffect;function x3({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=xt.useMemo(()=>{const u=E3(t);return{store:t,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[t,r,i,s]),a=xt.useMemo(()=>t.getState(),[t]);C3(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==t.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const l=e||Nr;return xt.createElement(l.Provider,{value:o},n)}var T3=x3;function kC(t=Nr){const e=t===Nr?xC:sg(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var I3=kC();function k3(t=Nr){const e=t===Nr?I3:kC(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var bC=k3();g3(h3.useSyncExternalStoreWithSelector);U.div`
  margin-top: 24px;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;var PC={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},z_=pt.createContext&&pt.createContext(PC),b3=["attr","size","title"];function P3(t,e){if(t==null)return{};var n=R3(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function R3(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Vu(){return Vu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Vu.apply(this,arguments)}function B_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Wu(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?B_(Object(n),!0).forEach(function(r){O3(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):B_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function O3(t,e,n){return e=N3(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function N3(t){var e=A3(t,"string");return typeof e=="symbol"?e:String(e)}function A3(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function RC(t){return t&&t.map((e,n)=>pt.createElement(e.tag,Wu({key:n},e.attr),RC(e.child)))}function nd(t){return e=>pt.createElement(D3,Vu({attr:Wu({},t.attr)},e),RC(t.child))}function D3(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=P3(t,b3),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),pt.createElement("svg",Vu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Wu(Wu({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&pt.createElement("title",null,s),t.children)};return z_!==void 0?pt.createElement(z_.Consumer,null,n=>e(n)):e(PC)}function L3(t){return nd({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"},child:[]}]})(t)}function M3(t){return nd({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"},child:[]}]})(t)}function $3(t){return nd({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"},child:[]}]})(t)}function F3(t){return nd({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"},child:[]}]})(t)}const j3=U.div`
  position: relative;
  width: 100%;
  padding: 12px;

  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  align-items: flex-start;

  border-radius: 24px;


  @media screen and (min-width: 756px) {
    flex-wrap: nowrap;
    padding: 16px;
    gap: 30px;
  }

  @media screen and (min-width: 1280px) {
    padding: 24px;
    gap: 40px;
  }
`,U3=U.div`
  width: 120px;
  height: 120px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  border-radius: 50%;
  border: 3px solid #fbe9ba;
  background: #fff;
`,z3=U.img`
  display: block;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
`,B3=U.div``,V3=U.div`
  margin-bottom: 32px;

  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  align-items: start;

  @media screen and (min-width: 1280px) {
    width: 968px;
    justify-content: space-between;
  }
  & p {

    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }
  & ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;

    gap: 16px;

    @media screen and (min-width: 1280px) {
      justify-content: space-between;
    }

    & :not(:last-child) {
      &:after {
        content: "";
        display: block;
        height: 17px;
        width: 1px;
        background-color: rgba(18, 20, 23, 0.2);
        margin-left: 16px;
      }
    }
  }
  & li {
    display: flex;
    align-items: center;
    & span {

      margin-left: 4px;
    }
  }
`;U.div`
  display: flex;
  justify-content: space-between;
`;const W3=U.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,H3=U.ul`
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;

  border-radius: 35px;
  border: 1px solid rgba(18, 20, 23, 0.2);


  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.14;
  &.selected {
   
  }
`;U(F3)`
  position: absolute;
  top: 24px;
  right: 24px;

  transform: scale(1);
  cursor: pointer;
  transition: transform 300ms cubic-bezier(0.39, 0.575, 0.565, 1);

  &:hover {
    transform: scale(1.02);
    opacity: 0.8;
  }
`;U(L3)`
  position: absolute;
  top: 24px;
  right: 24px;

  transform: scale(1);
  cursor: pointer;
  transition: transform 300ms cubic-bezier(0.39, 0.575, 0.565, 1);

  &:hover {
    transform: scale(1.02);
    opacity: 0.8;
  }
`;const G3=U($3)`
  margin-right: 8px;
`,V_=U(M3)`
  margin-right: 8px;

`,K3=U.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  & p {

    margin: 0;
  }
`,q3=U.h3`
 
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
`,Y3=U.p`
  margin-top: 32px;

  font-size: 16px;
  font-weight: 500;
  line-height: 1.5; /* 150% */
  & span {
   
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    text-decoration-line: underline;
  }
`,W_=U.p`
  margin-top: 8px;

  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  & span {
   
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }
`,H_=U.button`
  margin-top: 16px;
  padding: 0;
 
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  background-color: transparent;
  border: none;
  margin-right: auto;
  margin-bottom: 32px;
  cursor: pointer;
  transition: color 200ms cubic-bezier(0.39, 0.575, 0.565, 1);
  &:hover {

  }
`,Q3=U.svg`
    /* width:26px ;
    height:26px ; */
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
`,X3=U.p`
  margin-bottom: 32px;
  margin-top: 16px;
 
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`,J3=U.ul`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
`,Z3=U.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`,e4=U.div`
  display: flex;
  gap: 12px;
`,t4=U.div`
  width: 46px;
  height: 46px;
  border-radius: 100px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`,n4=U.p`
  display: block;
  border-radius: 100px;

  font-size: 24px;
  font-weight: 700;
`,r4=U.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
`,i4=U.span`

  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`,s4=U.p`
 
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`,o4=({teacher:t,levelFilter:e})=>{const{id:n,name:r,surname:i,languages:s,levels:o,rating:a,reviews:l,price_per_hour:u,lessons_done:c,avatar_url:d,lesson_info:f,conditions:m,experience:g}=t,[v,w]=x.useState(!1);return _.jsx(_.Fragment,{children:_.jsxs(j3,{children:[_.jsx(U3,{children:_.jsx(z3,{src:d,height:"100px",width:"100px"})}),_.jsxs(B3,{children:[_.jsxs(V3,{children:[_.jsxs(K3,{children:[_.jsx("p",{children:"Languages"}),_.jsxs(q3,{children:[r," ",i]})]}),_.jsxs("ul",{children:[_.jsxs("li",{children:[_.jsx(G3,{size:"16px"})," Lessons online"]}),_.jsxs("li",{children:["Lessons done: ",c]}),_.jsxs("li",{children:[_.jsx(V_,{})," Rating: ",a]}),_.jsxs("li",{children:["Price / 1 hour: ",_.jsxs("span",{children:[u," $"]})]})]}),_.jsx(Q3,{children:_.jsx("use",{href:Cn+"#icon-normal"})})]}),_.jsxs(Y3,{children:["Speaks: ",_.jsx("span",{children:s==null?void 0:s.join(", ")})]}),_.jsxs(W_,{children:["Lesson Info:",_.jsx("span",{children:f})]}),_.jsxs(W_,{children:["Conditions:",_.jsx("span",{children:m})]}),!v&&_.jsx(H_,{onClick:()=>w(!0),children:"Read more"}),v&&_.jsxs(_.Fragment,{children:[_.jsx(X3,{children:g}),_.jsx(J3,{children:l.map((p,h)=>_.jsxs(Z3,{children:[_.jsxs(e4,{children:[_.jsx(t4,{children:_.jsx(n4,{children:p.reviewer_name.charAt(0).toUpperCase()})}),_.jsxs(r4,{children:[_.jsx(i4,{children:p.reviewer_name}),_.jsxs("span",{children:[_.jsx(V_,{}),p.reviewer_rating,".0"]})]})]}),_.jsx(s4,{children:p.comment})]},h))}),v&&_.jsx(H_,{onClick:()=>w(!1),children:"Read less"})]}),_.jsx(W3,{children:o.map((p,h)=>_.jsx(H3,{className:p===e?"selected":"",children:p},h))})]})]})})},a4=D.div`
  position: relative;
  display: inline-block;
`,l4=D.div`
  display: flex;
  align-items: center;
  gap: 0px 50px;
  padding: 14px 18px 14px 18px;
  cursor: pointer;
  border-radius: 14px;
`,u4=D.p`
  color: var(--secondary);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1;
`,c4=D.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px 0px;

  width: 100%;
  height: 272px;
  padding: 14px 8px 14px 18px;

  overflow: auto;

  list-style: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;

  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background: var(--background);
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);

  height: ${t=>t.$heigh&&"188px"};
`,d4=D.li`
  cursor: pointer;
  color: var(--drop-down);
  transition: color 300ms;

  width: 100%;
  &:hover {
    color: var(--secondary);
  }
`,f4=D.svg`
  width: 20px;
  height: 20px;
  stroke-width: 0;
  stroke: currentColor;
  fill: transparent;
  transition: transform 300ms;
  transform: ${t=>t.$active&&"rotate(180deg)"};
`;function gf({arr:t,value:e,set:n,height:r,selectedOption:i}){const[s,o]=x.useState(!1),a=()=>{o(!s)},l=c=>{n(c),o(!1)},u=x.useRef(null);return x.useEffect(()=>{const c=d=>{u.current&&!u.current.contains(d.target)&&o(!1)};return document.addEventListener("click",c),()=>{document.removeEventListener("click",c)}},[u]),_.jsxs(a4,{children:[_.jsxs(l4,{onClick:a,ref:u,children:[_.jsx(u4,{children:i||e}),_.jsx(f4,{$active:s?!0:void 0,children:_.jsx("use",{href:Cn+"#icon-chevron-down"})})]}),s&&_.jsx(c4,{$heigh:r||void 0,children:t.map((c,d)=>_.jsx(d4,{onClick:()=>l(c),children:c},d))})]})}const G_=D.button`
  color: var(--background);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.4;

  padding: 14px 44px;

  border: none;
  border-radius: 12px;
  background: var(--blue);

  transition: background 300ms;

  &:hover {
    background-color: var(--blue-secondary);
  }
`,h4=D.ul`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
  flex-wrap: wrap;

  li {
    display: flex;
    flex-direction: column;
  }
  span {
    color: var(--gray);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.3;

    margin-bottom: 8px;
  }
`;D.form`
  display: flex;
  gap: 18px;
  align-items: flex-end;
  justify-content: center;
  margin: 50px 0;
`;D.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
  }

  select {
    border: none;
    outline: none;
    border-radius: 14px;
    background: var(--gray);
    display: flex;
    padding: 14px 89px 14px 18px;
    justify-content: center;
    align-items: center;
    gap: 32px;
    color: var(--secondary);
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;
  }
`;D.input`
  border: none;
  outline: none;
  width: 160px;
  height: 48px;
  padding: 14px 10px 14px 70px;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: var(--gray);
  color: var(--secondary);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;D.input`
  border: none;
  outline: none;
  width: 160px;
  height: 48px;
  padding: 14px 10px 14px 60px;
  border-radius: 0px 14px 14px 0px;
  background: var(--gray);
  color: var(--secondary);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;D.button`
  border-radius: 12px;
  background: var(--blue);
  padding: 14px 44px;
  height: 52px;
  color: var(--background);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;

  &:hover,
  &:focus {
    background: var(--blue-secondar);
  }
`;D.label`
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
`;D.div`
  position: relative;
`;D.div`
  position: absolute;
  top: 14px;
  left: 24px;
  color: var(--secondary);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;const OC=t=>t.teachers.teachers;function p4({filterArr:t}){const[e,n]=x.useState(""),[r,i]=x.useState("");x.useState("");const s=IC(OC);bC();const o=["French","English","German","Ukrainian","Polish"];let a=[10,20,30,40];console.log(s);const l=()=>{},u=()=>{};return _.jsx(_.Fragment,{children:_.jsxs(h4,{children:[_.jsxs("li",{children:[_.jsx("span",{children:"Languages"}),_.jsx(gf,{arr:o,value:"Enter the text",set:n,selectedOption:e})]}),_.jsxs("li",{children:[_.jsx("span",{children:"Level of knowledge"}),_.jsx(gf,{arr:a,value:"To $",set:i,height:!0,selectedOption:r})]}),_.jsxs("li",{children:[_.jsx("span",{children:"Price"}),_.jsx(gf,{arr:a,value:"To $",set:i,height:!0,selectedOption:r})]}),_.jsx(G_,{type:"button",onClick:l,children:"Search"}),_.jsx(G_,{type:"button",onClick:u,children:"Reset the filter"})]})})}function m4(){const t=IC(OC);return _.jsxs(_.Fragment,{children:[_.jsx(p4,{}),_.jsx("ul",{children:t.map(e=>_.jsx(o4,{teacher:e},e.id))})]})}const g4=()=>_.jsx(m4,{}),y4=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 500px;
`,v4=U.div`
  text-align: center;
`,_4=U.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;U(Ra)`
  padding: 8px 16px;
  color: #ffffff; /* White text color */
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
  transition:
    color 0.3s,
    text-shadow 0.3s;
  display: block;
  &:hover,
  &:focus {
    color: #00baff; /* Blue text color on hover/focus */
    text-shadow:
      0 0 5px #00baff,
      0 0 10px #00baff,
      0 0 20px #00baff,
      0 0 40px #00baff,
      0 0 80px #00baff;
  }
`;const w4=()=>_.jsx(y4,{children:_.jsx(v4,{children:_.jsx(_4,{children:"favorites Page"})})}),E4=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 500px;
`,S4=U.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`,C4=()=>_.jsx(E4,{children:_.jsx(S4,{children:"404"})}),x4=U.div`
  width: 100%;
  height: 100vh;
  background-size: 100% 100%;
`;function T4({component:t,redirectTo:e}){const[n,r]=x.useState(!0),i=Pc();return HE(i,s=>{console.log(s),r(!!s)}),n?t:_.jsx(nw,{to:e})}function ze(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var I4=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),K_=I4,yf=()=>Math.random().toString(36).substring(7).split("").join("."),k4={INIT:`@@redux/INIT${yf()}`,REPLACE:`@@redux/REPLACE${yf()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${yf()}`},Hu=k4;function og(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function NC(t,e,n){if(typeof t!="function")throw new Error(ze(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(ze(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(ze(1));return n(NC)(t,e)}let r=t,i=e,s=new Map,o=s,a=0,l=!1;function u(){o===s&&(o=new Map,s.forEach((w,p)=>{o.set(p,w)}))}function c(){if(l)throw new Error(ze(3));return i}function d(w){if(typeof w!="function")throw new Error(ze(4));if(l)throw new Error(ze(5));let p=!0;u();const h=a++;return o.set(h,w),function(){if(p){if(l)throw new Error(ze(6));p=!1,u(),o.delete(h),s=null}}}function f(w){if(!og(w))throw new Error(ze(7));if(typeof w.type>"u")throw new Error(ze(8));if(typeof w.type!="string")throw new Error(ze(17));if(l)throw new Error(ze(9));try{l=!0,i=r(i,w)}finally{l=!1}return(s=o).forEach(h=>{h()}),w}function m(w){if(typeof w!="function")throw new Error(ze(10));r=w,f({type:Hu.REPLACE})}function g(){const w=d;return{subscribe(p){if(typeof p!="object"||p===null)throw new Error(ze(11));function h(){const S=p;S.next&&S.next(c())}return h(),{unsubscribe:w(h)}},[K_](){return this}}}return f({type:Hu.INIT}),{dispatch:f,subscribe:d,getState:c,replaceReducer:m,[K_]:g}}function b4(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:Hu.INIT})>"u")throw new Error(ze(12));if(typeof n(void 0,{type:Hu.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(ze(13))})}function P4(t){const e=Object.keys(t),n={};for(let s=0;s<e.length;s++){const o=e[s];typeof t[o]=="function"&&(n[o]=t[o])}const r=Object.keys(n);let i;try{b4(n)}catch(s){i=s}return function(o={},a){if(i)throw i;let l=!1;const u={};for(let c=0;c<r.length;c++){const d=r[c],f=n[d],m=o[d],g=f(m,a);if(typeof g>"u")throw a&&a.type,new Error(ze(14));u[d]=g,l=l||g!==m}return l=l||r.length!==Object.keys(o).length,l?u:o}}function Gu(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function R4(...t){return e=>(n,r)=>{const i=e(n,r);let s=()=>{throw new Error(ze(15))};const o={getState:i.getState,dispatch:(l,...u)=>s(l,...u)},a=t.map(l=>l(o));return s=Gu(...a)(i.dispatch),{...i,dispatch:s}}}function O4(t){return og(t)&&"type"in t&&typeof t.type=="string"}var AC=Symbol.for("immer-nothing"),q_=Symbol.for("immer-draftable"),Ot=Symbol.for("immer-state");function en(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var $s=Object.getPrototypeOf;function Ar(t){return!!t&&!!t[Ot]}function Kn(t){var e;return t?DC(t)||Array.isArray(t)||!!t[q_]||!!((e=t.constructor)!=null&&e[q_])||id(t)||sd(t):!1}var N4=Object.prototype.constructor.toString();function DC(t){if(!t||typeof t!="object")return!1;const e=$s(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===N4}function ya(t,e){rd(t)===0?Object.entries(t).forEach(([n,r])=>{e(n,r,t)}):t.forEach((n,r)=>e(r,n,t))}function rd(t){const e=t[Ot];return e?e.type_:Array.isArray(t)?1:id(t)?2:sd(t)?3:0}function Zh(t,e){return rd(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function LC(t,e,n){const r=rd(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function A4(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function id(t){return t instanceof Map}function sd(t){return t instanceof Set}function Zr(t){return t.copy_||t.base_}function ep(t,e){if(id(t))return new Map(t);if(sd(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);if(!e&&DC(t))return $s(t)?{...t}:Object.assign(Object.create(null),t);const n=Object.getOwnPropertyDescriptors(t);delete n[Ot];let r=Reflect.ownKeys(n);for(let i=0;i<r.length;i++){const s=r[i],o=n[s];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(n[s]={configurable:!0,writable:!0,enumerable:o.enumerable,value:t[s]})}return Object.create($s(t),n)}function ag(t,e=!1){return od(t)||Ar(t)||!Kn(t)||(rd(t)>1&&(t.set=t.add=t.clear=t.delete=D4),Object.freeze(t),e&&ya(t,(n,r)=>ag(r,!0))),t}function D4(){en(2)}function od(t){return Object.isFrozen(t)}var L4={};function Ti(t){const e=L4[t];return e||en(0,t),e}var va;function MC(){return va}function M4(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Y_(t,e){e&&(Ti("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function tp(t){np(t),t.drafts_.forEach($4),t.drafts_=null}function np(t){t===va&&(va=t.parent_)}function Q_(t){return va=M4(va,t)}function $4(t){const e=t[Ot];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function X_(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[Ot].modified_&&(tp(e),en(4)),Kn(t)&&(t=Ku(e,t),e.parent_||qu(e,t)),e.patches_&&Ti("Patches").generateReplacementPatches_(n[Ot].base_,t,e.patches_,e.inversePatches_)):t=Ku(e,n,[]),tp(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==AC?t:void 0}function Ku(t,e,n){if(od(e))return e;const r=e[Ot];if(!r)return ya(e,(i,s)=>J_(t,r,e,i,s,n)),e;if(r.scope_!==t)return e;if(!r.modified_)return qu(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let s=i,o=!1;r.type_===3&&(s=new Set(i),i.clear(),o=!0),ya(s,(a,l)=>J_(t,r,i,a,l,n,o)),qu(t,i,!1),n&&t.patches_&&Ti("Patches").generatePatches_(r,n,t.patches_,t.inversePatches_)}return r.copy_}function J_(t,e,n,r,i,s,o){if(Ar(i)){const a=s&&e&&e.type_!==3&&!Zh(e.assigned_,r)?s.concat(r):void 0,l=Ku(t,i,a);if(LC(n,r,l),Ar(l))t.canAutoFreeze_=!1;else return}else o&&n.add(i);if(Kn(i)&&!od(i)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;Ku(t,i),(!e||!e.scope_.parent_)&&qu(t,i)}}function qu(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&ag(e,n)}function F4(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:MC(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,s=lg;n&&(i=[r],s=_a);const{revoke:o,proxy:a}=Proxy.revocable(i,s);return r.draft_=a,r.revoke_=o,a}var lg={get(t,e){if(e===Ot)return t;const n=Zr(t);if(!Zh(n,e))return j4(t,n,e);const r=n[e];return t.finalized_||!Kn(r)?r:r===vf(t.base_,e)?(_f(t),t.copy_[e]=ip(r,t)):r},has(t,e){return e in Zr(t)},ownKeys(t){return Reflect.ownKeys(Zr(t))},set(t,e,n){const r=$C(Zr(t),e);if(r!=null&&r.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=vf(Zr(t),e),s=i==null?void 0:i[Ot];if(s&&s.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(A4(n,i)&&(n!==void 0||Zh(t.base_,e)))return!0;_f(t),rp(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return vf(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,_f(t),rp(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=Zr(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){en(11)},getPrototypeOf(t){return $s(t.base_)},setPrototypeOf(){en(12)}},_a={};ya(lg,(t,e)=>{_a[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});_a.deleteProperty=function(t,e){return _a.set.call(this,t,e,void 0)};_a.set=function(t,e,n){return lg.set.call(this,t[0],e,n,t[0])};function vf(t,e){const n=t[Ot];return(n?Zr(n):t)[e]}function j4(t,e,n){var i;const r=$C(e,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(t.draft_):void 0}function $C(t,e){if(!(e in t))return;let n=$s(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=$s(n)}}function rp(t){t.modified_||(t.modified_=!0,t.parent_&&rp(t.parent_))}function _f(t){t.copy_||(t.copy_=ep(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var U4=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const s=n;n=e;const o=this;return function(l=s,...u){return o.produce(l,c=>n.call(this,c,...u))}}typeof n!="function"&&en(6),r!==void 0&&typeof r!="function"&&en(7);let i;if(Kn(e)){const s=Q_(this),o=ip(e,void 0);let a=!0;try{i=n(o),a=!1}finally{a?tp(s):np(s)}return Y_(s,r),X_(i,s)}else if(!e||typeof e!="object"){if(i=n(e),i===void 0&&(i=e),i===AC&&(i=void 0),this.autoFreeze_&&ag(i,!0),r){const s=[],o=[];Ti("Patches").generateReplacementPatches_(e,i,s,o),r(s,o)}return i}else en(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(o,...a)=>this.produceWithPatches(o,l=>e(l,...a));let r,i;return[this.produce(e,n,(o,a)=>{r=o,i=a}),r,i]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){Kn(t)||en(8),Ar(t)&&(t=FC(t));const e=Q_(this),n=ip(t,void 0);return n[Ot].isManual_=!0,np(e),n}finishDraft(t,e){const n=t&&t[Ot];(!n||!n.isManual_)&&en(9);const{scope_:r}=n;return Y_(r,e),X_(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=Ti("Patches").applyPatches_;return Ar(t)?r(t,e):this.produce(t,i=>r(i,e))}};function ip(t,e){const n=id(t)?Ti("MapSet").proxyMap_(t,e):sd(t)?Ti("MapSet").proxySet_(t,e):F4(t,e);return(e?e.scope_:MC()).drafts_.push(n),n}function FC(t){return Ar(t)||en(10,t),jC(t)}function jC(t){if(!Kn(t)||od(t))return t;const e=t[Ot];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=ep(t,e.scope_.immer_.useStrictShallowCopy_)}else n=ep(t,!0);return ya(n,(r,i)=>{LC(n,r,jC(i))}),e&&(e.finalized_=!1),n}var Nt=new U4,UC=Nt.produce;Nt.produceWithPatches.bind(Nt);Nt.setAutoFreeze.bind(Nt);Nt.setUseStrictShallowCopy.bind(Nt);Nt.applyPatches.bind(Nt);Nt.createDraft.bind(Nt);Nt.finishDraft.bind(Nt);function z4(t,e=`expected a function, instead received ${typeof t}`){if(typeof t!="function")throw new TypeError(e)}function B4(t,e=`expected an object, instead received ${typeof t}`){if(typeof t!="object")throw new TypeError(e)}function V4(t,e="expected all items to be functions, instead received the following types: "){if(!t.every(n=>typeof n=="function")){const n=t.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${e}[${n}]`)}}var Z_=t=>Array.isArray(t)?t:[t];function W4(t){const e=Array.isArray(t[0])?t[0]:t;return V4(e,"createSelector expects all input-selectors to be functions, but received the following types: "),e}function H4(t,e){const n=[],{length:r}=t;for(let i=0;i<r;i++)n.push(t[i].apply(null,e));return n}var G4=class{constructor(t){this.value=t}deref(){return this.value}},K4=typeof WeakRef<"u"?WeakRef:G4,q4=0,e0=1;function Cl(){return{s:q4,v:void 0,o:null,p:null}}function ug(t,e={}){let n=Cl();const{resultEqualityCheck:r}=e;let i,s=0;function o(){var d;let a=n;const{length:l}=arguments;for(let f=0,m=l;f<m;f++){const g=arguments[f];if(typeof g=="function"||typeof g=="object"&&g!==null){let v=a.o;v===null&&(a.o=v=new WeakMap);const w=v.get(g);w===void 0?(a=Cl(),v.set(g,a)):a=w}else{let v=a.p;v===null&&(a.p=v=new Map);const w=v.get(g);w===void 0?(a=Cl(),v.set(g,a)):a=w}}const u=a;let c;if(a.s===e0?c=a.v:(c=t.apply(null,arguments),s++),u.s=e0,r){const f=((d=i==null?void 0:i.deref)==null?void 0:d.call(i))??i;f!=null&&r(f,c)&&(c=f,s!==0&&s--),i=typeof c=="object"&&c!==null||typeof c=="function"?new K4(c):c}return u.v=c,c}return o.clearCache=()=>{n=Cl(),o.resetResultsCount()},o.resultsCount=()=>s,o.resetResultsCount=()=>{s=0},o}function zC(t,...e){const n=typeof t=="function"?{memoize:t,memoizeOptions:e}:t,r=(...i)=>{let s=0,o=0,a,l={},u=i.pop();typeof u=="object"&&(l=u,u=i.pop()),z4(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const c={...n,...l},{memoize:d,memoizeOptions:f=[],argsMemoize:m=ug,argsMemoizeOptions:g=[],devModeChecks:v={}}=c,w=Z_(f),p=Z_(g),h=W4(i),y=d(function(){return s++,u.apply(null,arguments)},...w),S=m(function(){o++;const I=H4(h,arguments);return a=y.apply(null,I),a},...p);return Object.assign(S,{resultFunc:u,memoizedResultFunc:y,dependencies:h,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>a,recomputations:()=>s,resetRecomputations:()=>{s=0},memoize:d,argsMemoize:m})};return Object.assign(r,{withTypes:()=>r}),r}var Y4=zC(ug),Q4=Object.assign((t,e=Y4)=>{B4(t,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof t}`);const n=Object.keys(t),r=n.map(s=>t[s]);return e(r,(...s)=>s.reduce((o,a,l)=>(o[n[l]]=a,o),{}))},{withTypes:()=>Q4});function BC(t){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,t):i(s)}var X4=BC(),J4=BC,Z4=(...t)=>{const e=zC(...t);return(...n)=>{const r=e(...n),i=(s,...o)=>r(Ar(s)?FC(s):s,...o);return Object.assign(i,r),i}};Z4(ug);var eU=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Gu:Gu.apply(null,arguments)},tU=t=>t&&typeof t.match=="function";function Ir(t,e){function n(...r){if(e){let i=e(...r);if(!i)throw new Error(ln(0));return{type:t,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>O4(r)&&r.type===t,n}var VC=class xo extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,xo.prototype)}static get[Symbol.species](){return xo}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new xo(...e[0].concat(this)):new xo(...e.concat(this))}};function t0(t){return Kn(t)?UC(t,()=>{}):t}function n0(t,e,n){if(t.has(e)){let i=t.get(e);return n.update&&(i=n.update(i,e,t),t.set(e,i)),i}if(!n.insert)throw new Error(ln(10));const r=n.insert(e,t);return t.set(e,r),r}function nU(t){return typeof t=="boolean"}var rU=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=e??{};let o=new VC;return n&&(nU(n)?o.push(X4):o.push(J4(n.extraArgument))),o},iU="RTK_autoBatch",WC=t=>e=>{setTimeout(e,t)},sU=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:WC(10),oU=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let i=!0,s=!1,o=!1;const a=new Set,l=t.type==="tick"?queueMicrotask:t.type==="raf"?sU:t.type==="callback"?t.queueNotification:WC(t.timeout),u=()=>{o=!1,s&&(s=!1,a.forEach(c=>c()))};return Object.assign({},r,{subscribe(c){const d=()=>i&&c(),f=r.subscribe(d);return a.add(c),()=>{f(),a.delete(c)}},dispatch(c){var d;try{return i=!((d=c==null?void 0:c.meta)!=null&&d[iU]),s=!i,s&&(o||(o=!0,l(u))),r.dispatch(c)}finally{i=!0}}})},aU=t=>function(n){const{autoBatch:r=!0}=n??{};let i=new VC(t);return r&&i.push(oU(typeof r=="object"?r:void 0)),i},lU=!0;function uU(t){const e=rU(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=t||{};let a;if(typeof n=="function")a=n;else if(og(n))a=P4(n);else throw new Error(ln(1));let l;typeof r=="function"?l=r(e):l=e();let u=Gu;i&&(u=eU({trace:!lU,...typeof i=="object"&&i}));const c=R4(...l),d=aU(c);let f=typeof o=="function"?o(d):d();const m=u(...f);return NC(a,s,m)}function HC(t){const e={},n=[];let r;const i={addCase(s,o){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(ln(28));if(a in e)throw new Error(ln(29));return e[a]=o,i},addMatcher(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return t(i),[e,n,r]}function cU(t){return typeof t=="function"}function dU(t,e){let[n,r,i]=HC(e),s;if(cU(t))s=()=>t0(t());else{const a=t0(t);s=()=>a}function o(a=s(),l){let u=[n[l.type],...r.filter(({matcher:c})=>c(l)).map(({reducer:c})=>c)];return u.filter(c=>!!c).length===0&&(u=[i]),u.reduce((c,d)=>{if(d)if(Ar(c)){const m=d(c,l);return m===void 0?c:m}else{if(Kn(c))return UC(c,f=>d(f,l));{const f=d(c,l);if(f===void 0){if(c===null)return c;throw new Error(ln(9))}return f}}return c},a)}return o.getInitialState=s,o}var fU="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",hU=(t=21)=>{let e="",n=t;for(;n--;)e+=fU[Math.random()*64|0];return e},pU=(t,e)=>tU(t)?t.match(e):t(e);function mU(...t){return e=>t.some(n=>pU(n,e))}var gU=["name","message","stack","code"],wf=class{constructor(t,e){vd(this,"_type");this.payload=t,this.meta=e}},r0=class{constructor(t,e){vd(this,"_type");this.payload=t,this.meta=e}},yU=t=>{if(typeof t=="object"&&t!==null){const e={};for(const n of gU)typeof t[n]=="string"&&(e[n]=t[n]);return e}return{message:String(t)}},vU=(()=>{function t(e,n,r){const i=Ir(e+"/fulfilled",(l,u,c,d)=>({payload:l,meta:{...d||{},arg:c,requestId:u,requestStatus:"fulfilled"}})),s=Ir(e+"/pending",(l,u,c)=>({payload:void 0,meta:{...c||{},arg:u,requestId:l,requestStatus:"pending"}})),o=Ir(e+"/rejected",(l,u,c,d,f)=>({payload:d,error:(r&&r.serializeError||yU)(l||"Rejected"),meta:{...f||{},arg:c,requestId:u,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(l==null?void 0:l.name)==="AbortError",condition:(l==null?void 0:l.name)==="ConditionError"}}));function a(l){return(u,c,d)=>{const f=r!=null&&r.idGenerator?r.idGenerator(l):hU(),m=new AbortController;let g;function v(p){g=p,m.abort()}const w=async function(){var y,S;let p;try{let C=(y=r==null?void 0:r.condition)==null?void 0:y.call(r,l,{getState:c,extra:d});if(wU(C)&&(C=await C),C===!1||m.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const I=new Promise((E,P)=>m.signal.addEventListener("abort",()=>P({name:"AbortError",message:g||"Aborted"})));u(s(f,l,(S=r==null?void 0:r.getPendingMeta)==null?void 0:S.call(r,{requestId:f,arg:l},{getState:c,extra:d}))),p=await Promise.race([I,Promise.resolve(n(l,{dispatch:u,getState:c,extra:d,requestId:f,signal:m.signal,abort:v,rejectWithValue:(E,P)=>new wf(E,P),fulfillWithValue:(E,P)=>new r0(E,P)})).then(E=>{if(E instanceof wf)throw E;return E instanceof r0?i(E.payload,f,l,E.meta):i(E,f,l)})])}catch(C){p=C instanceof wf?o(null,f,l,C.payload,C.meta):o(C,f,l)}return r&&!r.dispatchConditionRejection&&o.match(p)&&p.meta.condition||u(p),p}();return Object.assign(w,{abort:v,requestId:f,arg:l,unwrap(){return w.then(_U)}})}}return Object.assign(a,{pending:s,rejected:o,fulfilled:i,settled:mU(o,i),typePrefix:e})}return t.withTypes=()=>t,t})();function _U(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function wU(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var EU=Symbol.for("rtk-slice-createasyncthunk");function SU(t,e){return`${t}/${e}`}function CU({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[EU];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(ln(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(IU()):i.reducers)||{},l=Object.keys(a),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(w,p){const h=typeof w=="string"?w:w.type;if(!h)throw new Error(ln(12));if(h in u.sliceCaseReducersByType)throw new Error(ln(13));return u.sliceCaseReducersByType[h]=p,c},addMatcher(w,p){return u.sliceMatchers.push({matcher:w,reducer:p}),c},exposeAction(w,p){return u.actionCreators[w]=p,c},exposeCaseReducer(w,p){return u.sliceCaseReducersByName[w]=p,c}};l.forEach(w=>{const p=a[w],h={reducerName:w,type:SU(s,w),createNotation:typeof i.reducers=="function"};bU(p)?RU(h,p,c,e):kU(h,p,c)});function d(){const[w={},p=[],h=void 0]=typeof i.extraReducers=="function"?HC(i.extraReducers):[i.extraReducers],y={...w,...u.sliceCaseReducersByType};return dU(i.initialState,S=>{for(let C in y)S.addCase(C,y[C]);for(let C of u.sliceMatchers)S.addMatcher(C.matcher,C.reducer);for(let C of p)S.addMatcher(C.matcher,C.reducer);h&&S.addDefaultCase(h)})}const f=w=>w,m=new WeakMap;let g;const v={name:s,reducerPath:o,reducer(w,p){return g||(g=d()),g(w,p)},actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState(){return g||(g=d()),g.getInitialState()},getSelectors(w=f){const p=n0(m,this,{insert:()=>new WeakMap});return n0(p,w,{insert:()=>{const h={};for(const[y,S]of Object.entries(i.selectors??{}))h[y]=xU(this,S,w,this!==v);return h}})},selectSlice(w){let p=w[this.reducerPath];return typeof p>"u"&&this!==v&&(p=this.getInitialState()),p},get selectors(){return this.getSelectors(this.selectSlice)},injectInto(w,{reducerPath:p,...h}={}){const y=p??this.reducerPath;return w.inject({reducerPath:y,reducer:this.reducer},h),{...this,reducerPath:y}}};return v}}function xU(t,e,n,r){function i(s,...o){let a=n.call(t,s);return typeof a>"u"&&r&&(a=t.getInitialState()),e(a,...o)}return i.unwrapped=e,i}var TU=CU();function IU(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function kU({type:t,reducerName:e,createNotation:n},r,i){let s,o;if("reducer"in r){if(n&&!PU(r))throw new Error(ln(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(t,s).exposeCaseReducer(e,s).exposeAction(e,o?Ir(t,o):Ir(t))}function bU(t){return t._reducerDefinitionType==="asyncThunk"}function PU(t){return t._reducerDefinitionType==="reducerWithPrepare"}function RU({type:t,reducerName:e},n,r,i){if(!i)throw new Error(ln(18));const{payloadCreator:s,fulfilled:o,pending:a,rejected:l,settled:u,options:c}=n,d=i(t,s,c);r.exposeAction(e,d),o&&r.addCase(d.fulfilled,o),a&&r.addCase(d.pending,a),l&&r.addCase(d.rejected,l),u&&r.addMatcher(d.settled,u),r.exposeCaseReducer(e,{fulfilled:o||xl,pending:a||xl,rejected:l||xl,settled:u||xl})}function xl(){}var cg="listenerMiddleware";Ir(`${cg}/add`);Ir(`${cg}/removeAll`);Ir(`${cg}/remove`);function ln(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}const i0="@firebase/database",s0="1.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let GC="";function OU(t){GC=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NU{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Pe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:sa(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AU{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Xn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new NU(e)}}catch{}return new AU},oi=KC("localStorage"),sp=KC("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=new wm("@firebase/database"),DU=function(){let t=1;return function(){return t++}}(),qC=function(t){const e=mP(t),n=new dP;n.update(e);const r=n.digest();return gm.encodeByteArray(r)},Ha=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ha.apply(null,r):typeof r=="object"?e+=Pe(r):e+=r,e+=" "}return e};let pi=null,o0=!0;const LU=function(t,e){b(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ys.logLevel=oe.VERBOSE,pi=ys.log.bind(ys),e&&sp.set("logging_enabled",!0)):typeof t=="function"?pi=t:(pi=null,sp.remove("logging_enabled"))},Ze=function(...t){if(o0===!0&&(o0=!1,pi===null&&sp.get("logging_enabled")===!0&&LU(!0)),pi){const e=Ha.apply(null,t);pi(e)}},Ga=function(t){return function(...e){Ze(t,...e)}},op=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ha(...t);ys.error(e)},qn=function(...t){const e=`FIREBASE FATAL ERROR: ${Ha(...t)}`;throw ys.error(e),new Error(e)},Pt=function(...t){const e="FIREBASE WARNING: "+Ha(...t);ys.warn(e)},MU=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Pt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},YC=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},$U=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Fs="[MIN_NAME]",Ii="[MAX_NAME]",eo=function(t,e){if(t===e)return 0;if(t===Fs||e===Ii)return-1;if(e===Fs||t===Ii)return 1;{const n=a0(t),r=a0(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},FU=function(t,e){return t===e?0:t<e?-1:1},ho=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Pe(e))},dg=function(t){if(typeof t!="object"||t===null)return Pe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Pe(e[r]),n+=":",n+=dg(t[e[r]]);return n+="}",n},QC=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function _t(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const XC=function(t){b(!YC(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},jU=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},UU=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function zU(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const BU=new RegExp("^-?(0*)\\d{1,10}$"),VU=-2147483648,WU=2147483647,a0=function(t){if(BU.test(t)){const e=Number(t);if(e>=VU&&e<=WU)return e}return null},Ka=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Pt("Exception was thrown by user callback.",n),e},Math.floor(0))}},HU=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},$o=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GU{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Pt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KU{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ze("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Pt(e)}}class vs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}vs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg="5",JC="v",ZC="s",ex="r",tx="f",nx=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,rx="ls",ix="p",ap="ac",sx="websocket",ox="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=oi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&oi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function qU(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function lx(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let r;if(e===sx)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===ox)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);qU(t)&&(n.ns=t.namespace);const i=[];return _t(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YU{constructor(){this.counters_={}}incrementCounter(e,n=1){Xn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return qb(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef={},Sf={};function hg(t){const e=t.toString();return Ef[e]||(Ef[e]=new YU),Ef[e]}function QU(t,e){const n=t.toString();return Sf[n]||(Sf[n]=e()),Sf[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XU{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ka(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0="start",JU="close",ZU="pLPCommand",e6="pRTLPCB",ux="id",cx="pw",dx="ser",t6="cb",n6="seg",r6="ts",i6="d",s6="dframe",fx=1870,hx=30,o6=fx-hx,a6=25e3,l6=3e4;class ss{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ga(e),this.stats_=hg(n),this.urlFn=l=>(this.appCheckToken&&(l[ap]=this.appCheckToken),lx(n,ox,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new XU(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(l6)),$U(()=>{if(this.isClosed_)return;this.scriptTagHolder=new pg((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===l0)this.id=a,this.password=l;else if(o===JU)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[l0]="t",r[dx]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[t6]=this.scriptTagHolder.uniqueCallbackIdentifier),r[JC]=fg,this.transportSessionId&&(r[ZC]=this.transportSessionId),this.lastSessionId&&(r[rx]=this.lastSessionId),this.applicationId&&(r[ix]=this.applicationId),this.appCheckToken&&(r[ap]=this.appCheckToken),typeof location<"u"&&location.hostname&&nx.test(location.hostname)&&(r[ex]=tx);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ss.forceAllow_=!0}static forceDisallow(){ss.forceDisallow_=!0}static isAvailable(){return ss.forceAllow_?!0:!ss.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!jU()&&!UU()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=uE(n),i=QC(r,o6);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[s6]="t",r[ux]=e,r[cx]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class pg{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=DU(),window[ZU+this.uniqueCallbackIdentifier]=e,window[e6+this.uniqueCallbackIdentifier]=n,this.myIFrame=pg.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ze("frame writing exception"),a.stack&&Ze(a.stack),Ze(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ze("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ux]=this.myID,e[cx]=this.myPW,e[dx]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+hx+r.length<=fx;){const o=this.pendingSegs.shift();r=r+"&"+n6+i+"="+o.seg+"&"+r6+i+"="+o.ts+"&"+i6+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(a6)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ze("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u6=16384,c6=45e3;let Yu=null;typeof MozWebSocket<"u"?Yu=MozWebSocket:typeof WebSocket<"u"&&(Yu=WebSocket);class tn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ga(this.connId),this.stats_=hg(n),this.connURL=tn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[JC]=fg,typeof location<"u"&&location.hostname&&nx.test(location.hostname)&&(o[ex]=tx),n&&(o[ZC]=n),r&&(o[rx]=r),i&&(o[ap]=i),s&&(o[ix]=s),lx(e,sx,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,oi.set("previous_websocket_failure",!0);try{let r;mE(),this.mySock=new Yu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){tn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Yu!==null&&!tn.forceDisallow_}static previouslyFailed(){return oi.isInMemoryStorage||oi.get("previous_websocket_failure")===!0}markConnectionHealthy(){oi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=sa(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=QC(n,u6);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(c6))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}tn.responsesRequiredToBeHealthy=2;tn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ss,tn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=tn&&tn.isAvailable();let r=n&&!tn.previouslyFailed();if(e.webSocketOnly&&(n||Pt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[tn];else{const i=this.transports_=[];for(const s of wa.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);wa.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}wa.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d6=6e4,f6=5e3,h6=10*1024,p6=100*1024,Cf="t",u0="d",m6="s",c0="r",g6="e",d0="o",f0="a",h0="n",p0="p",y6="h";class v6{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ga("c:"+this.id+":"),this.transportManager_=new wa(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=$o(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>p6?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>h6?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Cf in e){const n=e[Cf];n===f0?this.upgradeIfSecondaryHealthy_():n===c0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===d0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ho("t",e),r=ho("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:p0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:f0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:h0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ho("t",e),r=ho("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ho(Cf,e);if(u0 in e){const r=e[u0];if(n===y6){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===h0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===m6?this.onConnectionShutdown_(r):n===c0?this.onReset_(r):n===g6?op("Server Error: "+r):n===d0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):op("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),fg!==r&&Pt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),$o(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(d6))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):$o(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(f6))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:p0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(oi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu extends mx{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!_m()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Qu}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0=32,g0=768;class ae{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function X(){return new ae("")}function Y(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Dr(t){return t.pieces_.length-t.pieceNum_}function ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ae(t.pieces_,e)}function gx(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function _6(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function yx(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function vx(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ae(e,0)}function Re(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ae)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ae(n,0)}function G(t){return t.pieceNum_>=t.pieces_.length}function it(t,e){const n=Y(t),r=Y(e);if(n===null)return e;if(n===r)return it(ce(t),ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function _x(t,e){if(Dr(t)!==Dr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function nn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Dr(t)>Dr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class w6{constructor(e,n){this.errorPrefix_=n,this.parts_=yx(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Tc(this.parts_[r]);wx(this)}}function E6(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Tc(e),wx(t)}function S6(t){const e=t.parts_.pop();t.byteLength_-=Tc(e),t.parts_.length>0&&(t.byteLength_-=1)}function wx(t){if(t.byteLength_>g0)throw new Error(t.errorPrefix_+"has a key path longer than "+g0+" bytes ("+t.byteLength_+").");if(t.parts_.length>m0)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+m0+") or object contains a cycle "+ei(t))}function ei(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg extends mx{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new mg}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po=1e3,C6=60*5*1e3,y0=30*1e3,x6=1.3,T6=3e4,I6="server_kill",v0=3;class zn extends px{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=zn.nextPersistentConnectionId_++,this.log_=Ga("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=po,this.maxReconnectDelay_=C6,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!mE())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");mg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Qu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Pe(s)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new vm,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;zn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Xn(e,"w")){const r=bs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Pt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||cP(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=y0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=uP(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Pe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):op("Unrecognized action received from server: "+Pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=po,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=po,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>T6&&(this.reconnectDelay_=po),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*x6)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+zn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){b(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Ze("getToken() completed but was canceled"):(Ze("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new v6(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{Pt(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(I6)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Pt(d),l())}}}interrupt(e){Ze("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ze("Resuming connection for reason: "+e),delete this.interruptReasons_[e],xh(this.interruptReasons_)&&(this.reconnectDelay_=po,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>dg(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ae(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ze("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=v0&&(this.reconnectDelay_=y0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ze("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=v0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+GC.replace(/\./g,"-")]=1,_m()?e["framework.cordova"]=1:pE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Qu.getInstance().currentlyOnline();return xh(this.interruptReasons_)&&e}}zn.nextPersistentConnectionId_=0;zn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new H(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new H(Fs,e),i=new H(Fs,n);return this.compare(r,i)!==0}minPost(){return H.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tl;class Ex extends ad{static get __EMPTY_NODE(){return Tl}static set __EMPTY_NODE(e){Tl=e}compare(e,n){return eo(e.name,n.name)}isDefinedOn(e){throw Ks("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return H.MIN}maxPost(){return new H(Ii,Tl)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new H(e,Tl)}toString(){return".key"}}const _s=new Ex;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class $e{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??$e.RED,this.left=i??ht.EMPTY_NODE,this.right=s??ht.EMPTY_NODE}copy(e,n,r,i,s){return new $e(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ht.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return ht.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}$e.RED=!0;$e.BLACK=!1;class k6{copy(e,n,r,i,s){return this}insert(e,n,r){return new $e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ht{constructor(e,n=ht.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ht(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,$e.BLACK,null,null))}remove(e){return new ht(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,$e.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Il(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Il(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Il(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Il(this.root_,null,this.comparator_,!0,e)}}ht.EMPTY_NODE=new k6;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b6(t,e){return eo(t.name,e.name)}function gg(t,e){return eo(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lp;function P6(t){lp=t}const Sx=function(t){return typeof t=="number"?"number:"+XC(t):"string:"+t},Cx=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Xn(e,".sv"),"Priority must be a string or number.")}else b(t===lp||t.isEmpty(),"priority of unexpected type.");b(t===lp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _0;class De{constructor(e,n=De.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Cx(this.priorityNode_)}static set __childrenNodeConstructor(e){_0=e}static get __childrenNodeConstructor(){return _0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new De(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:De.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:Y(e)===".priority"?this.priorityNode_:De.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:De.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Y(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(b(r!==".priority"||Dr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,De.__childrenNodeConstructor.EMPTY_NODE.updateChild(ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Sx(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=XC(this.value_):e+=this.value_,this.lazyHash_=qC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===De.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof De.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=De.VALUE_TYPE_ORDER.indexOf(n),s=De.VALUE_TYPE_ORDER.indexOf(r);return b(i>=0,"Unknown leaf type: "+n),b(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}De.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xx,Tx;function R6(t){xx=t}function O6(t){Tx=t}class N6 extends ad{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?eo(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return H.MIN}maxPost(){return new H(Ii,new De("[PRIORITY-POST]",Tx))}makePost(e,n){const r=xx(e);return new H(n,new De("[PRIORITY-POST]",r))}toString(){return".priority"}}const Se=new N6;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A6=Math.log(2);class D6{constructor(e){const n=s=>parseInt(Math.log(s)/A6,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Xu=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=t[l],f=n?n(d):d,new $e(f,d.node,$e.BLACK,null,null);{const m=parseInt(c/2,10)+l,g=i(l,m),v=i(m+1,u);return d=t[m],f=n?n(d):d,new $e(f,d.node,$e.BLACK,g,v)}},s=function(l){let u=null,c=null,d=t.length;const f=function(g,v){const w=d-g,p=d;d-=g;const h=i(w+1,p),y=t[w],S=n?n(y):y;m(new $e(S,y.node,v,null,h))},m=function(g){u?(u.left=g,u=g):(c=g,u=g)};for(let g=0;g<l.count;++g){const v=l.nextBitIsOne(),w=Math.pow(2,l.count-(g+1));v?f(w,$e.BLACK):(f(w,$e.BLACK),f(w,$e.RED))}return c},o=new D6(t.length),a=s(o);return new ht(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xf;const Vi={};class jn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return b(Vi&&Se,"ChildrenNode.ts has not been loaded"),xf=xf||new jn({".priority":Vi},{".priority":Se}),xf}get(e){const n=bs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ht?n:null}hasIndex(e){return Xn(this.indexSet_,e.toString())}addIndex(e,n){b(e!==_s,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(H.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Xu(r,e.getCompare()):a=Vi;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new jn(c,u)}addToIndexes(e,n){const r=bu(this.indexes_,(i,s)=>{const o=bs(this.indexSet_,s);if(b(o,"Missing index implementation for "+s),i===Vi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(H.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Xu(a,o.getCompare())}else return Vi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new H(e.name,a))),l.insert(e,e.node)}});return new jn(r,this.indexSet_)}removeFromIndexes(e,n){const r=bu(this.indexes_,i=>{if(i===Vi)return i;{const s=n.get(e.name);return s?i.remove(new H(e.name,s)):i}});return new jn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mo;class j{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Cx(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return mo||(mo=new j(new ht(gg),null,jn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||mo}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?mo:n}}getChild(e){const n=Y(e);return n===null?this:this.getImmediateChild(n).getChild(ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new H(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?mo:this.priorityNode_;return new j(i,o,s)}}updateChild(e,n){const r=Y(e);if(r===null)return n;{b(Y(e)!==".priority"||Dr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ce(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Se,(o,a)=>{n[o]=a.val(e),r++,s&&j.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Sx(this.getPriority().val())+":"),this.forEachChild(Se,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":qC(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new H(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new H(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new H(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,H.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,H.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===qa?-1:0}withIndex(e){if(e===_s||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===_s||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Se),i=n.getIterator(Se);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===_s?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class L6 extends j{constructor(){super(new ht(gg),j.EMPTY_NODE,jn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const qa=new L6;Object.defineProperties(H,{MIN:{value:new H(Fs,j.EMPTY_NODE)},MAX:{value:new H(Ii,qa)}});Ex.__EMPTY_NODE=j.EMPTY_NODE;De.__childrenNodeConstructor=j;P6(qa);O6(qa);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M6=!0;function We(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new De(n,We(e))}if(!(t instanceof Array)&&M6){const n=[];let r=!1;if(_t(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=We(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new H(o,l)))}}),n.length===0)return j.EMPTY_NODE;const s=Xu(n,b6,o=>o.name,gg);if(r){const o=Xu(n,Se.getCompare());return new j(s,We(e),new jn({".priority":o},{".priority":Se}))}else return new j(s,We(e),jn.Default)}else{let n=j.EMPTY_NODE;return _t(t,(r,i)=>{if(Xn(t,r)&&r.substring(0,1)!=="."){const s=We(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(We(e))}}R6(We);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $6 extends ad{constructor(e){super(),this.indexPath_=e,b(!G(e)&&Y(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?eo(e.name,n.name):s}makePost(e,n){const r=We(e),i=j.EMPTY_NODE.updateChild(this.indexPath_,r);return new H(n,i)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,qa);return new H(Ii,e)}toString(){return yx(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F6 extends ad{compare(e,n){const r=e.node.compareTo(n.node);return r===0?eo(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return H.MIN}maxPost(){return H.MAX}makePost(e,n){const r=We(e);return new H(n,r)}toString(){return".value"}}const j6=new F6;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ix(t){return{type:"value",snapshotNode:t}}function js(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ea(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Sa(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function U6(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ea(n,a)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(js(n,r)):o.trackChildChange(Sa(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Se,(i,s)=>{n.hasChild(i)||r.trackChildChange(Ea(i,s))}),n.isLeafNode()||n.forEachChild(Se,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Sa(i,s,o))}else r.trackChildChange(js(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e){this.indexedFilter_=new yg(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ca.getStartPost_(e),this.endPost_=Ca.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new H(n,r))||(r=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=j.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(j.EMPTY_NODE);const s=this;return n.forEachChild(Se,(o,a)=>{s.matches(new H(o,a))||(i=i.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z6{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ca(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new H(n,r))||(r=j.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=j.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(j.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,m)=>d(m,f)}else o=this.index_.getCompare();const a=e;b(a.numChildren()===this.limit_,"");const l=new H(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const m=f==null?1:o(f,l);if(c&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(Sa(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Ea(n,d));const v=a.updateImmediateChild(n,j.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(js(f.name,f.node)),v.updateImmediateChild(f.name,f.node)):v}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(Ea(u.name,u.node)),s.trackChildChange(js(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,j.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Se}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Fs}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ii}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Se}copy(){const e=new vg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function B6(t){return t.loadsAllData()?new yg(t.getIndex()):t.hasLimit()?new z6(t):new Ca(t)}function w0(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Se?n="$priority":t.index_===j6?n="$value":t.index_===_s?n="$key":(b(t.index_ instanceof $6,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Pe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Pe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Pe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Pe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Pe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function E0(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Se&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju extends px{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ga("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ju.getListenId_(e,r),a={};this.listens_[o]=a;const l=w0(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),bs(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=Ju.getListenId_(e,n);delete this.listens_[r]}get(e){const n=w0(e._queryParams),r=e._path.toString(),i=new vm;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+qs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=sa(a.responseText)}catch{Pt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Pt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V6{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(){return{value:null,children:new Map}}function kx(t,e,n){if(G(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Y(e);t.children.has(r)||t.children.set(r,Zu());const i=t.children.get(r);e=ce(e),kx(i,e,n)}}function up(t,e,n){t.value!==null?n(e,t.value):W6(t,(r,i)=>{const s=new ae(e.toString()+"/"+r);up(i,s,n)})}function W6(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H6{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&_t(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0=10*1e3,G6=30*1e3,K6=5*60*1e3;class q6{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new H6(e);const r=S0+(G6-S0)*Math.random();$o(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;_t(e,(i,s)=>{s>0&&Xn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),$o(this.reportStats_.bind(this),Math.floor(Math.random()*2*K6))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(rn||(rn={}));function bx(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function _g(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function wg(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=rn.ACK_USER_WRITE,this.source=bx()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ae(e));return new ec(X(),n,this.revert)}}else return b(Y(this.path)===e,"operationForChild called for unrelated child."),new ec(ce(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,n){this.source=e,this.path=n,this.type=rn.LISTEN_COMPLETE}operationForChild(e){return G(this.path)?new xa(this.source,X()):new xa(this.source,ce(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=rn.OVERWRITE}operationForChild(e){return G(this.path)?new ki(this.source,X(),this.snap.getImmediateChild(e)):new ki(this.source,ce(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=rn.MERGE}operationForChild(e){if(G(this.path)){const n=this.children.subtree(new ae(e));return n.isEmpty()?null:n.value?new ki(this.source,X(),n.value):new Ta(this.source,X(),n)}else return b(Y(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ta(this.source,ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const n=Y(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y6{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Q6(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(U6(o.childName,o.snapshotNode))}),go(t,i,"child_removed",e,r,n),go(t,i,"child_added",e,r,n),go(t,i,"child_moved",s,r,n),go(t,i,"child_changed",e,r,n),go(t,i,"value",e,r,n),i}function go(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>J6(t,a,l)),o.forEach(a=>{const l=X6(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function X6(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function J6(t,e,n){if(e.childName==null||n.childName==null)throw Ks("Should only compare child_ events.");const r=new H(e.childName,e.snapshotNode),i=new H(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(t,e){return{eventCache:t,serverCache:e}}function Fo(t,e,n,r){return ld(new Lr(e,n,r),t.serverCache)}function Px(t,e,n,r){return ld(t.eventCache,new Lr(e,n,r))}function tc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function bi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tf;const Z6=()=>(Tf||(Tf=new ht(FU)),Tf);class me{constructor(e,n=Z6()){this.value=e,this.children=n}static fromObject(e){let n=new me(null);return _t(e,(r,i)=>{n=n.set(new ae(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:X(),value:this.value};if(G(e))return null;{const r=Y(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ce(e),n);return s!=null?{path:Re(new ae(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const n=Y(e),r=this.children.get(n);return r!==null?r.subtree(ce(e)):new me(null)}}set(e,n){if(G(e))return new me(n,this.children);{const r=Y(e),s=(this.children.get(r)||new me(null)).set(ce(e),n),o=this.children.insert(r,s);return new me(this.value,o)}}remove(e){if(G(e))return this.children.isEmpty()?new me(null):new me(null,this.children);{const n=Y(e),r=this.children.get(n);if(r){const i=r.remove(ce(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new me(null):new me(this.value,s)}else return this}}get(e){if(G(e))return this.value;{const n=Y(e),r=this.children.get(n);return r?r.get(ce(e)):null}}setTree(e,n){if(G(e))return n;{const r=Y(e),s=(this.children.get(r)||new me(null)).setTree(ce(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new me(this.value,o)}}fold(e){return this.fold_(X(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Re(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,X(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(G(e))return null;{const s=Y(e),o=this.children.get(s);return o?o.findOnPath_(ce(e),Re(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,X(),n)}foreachOnPath_(e,n,r){if(G(e))return this;{this.value&&r(n,this.value);const i=Y(e),s=this.children.get(i);return s?s.foreachOnPath_(ce(e),Re(n,i),r):new me(null)}}foreach(e){this.foreach_(X(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Re(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.writeTree_=e}static empty(){return new un(new me(null))}}function jo(t,e,n){if(G(e))return new un(new me(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=it(i,e);return s=s.updateChild(o,n),new un(t.writeTree_.set(i,s))}else{const i=new me(n),s=t.writeTree_.setTree(e,i);return new un(s)}}}function C0(t,e,n){let r=t;return _t(n,(i,s)=>{r=jo(r,Re(e,i),s)}),r}function x0(t,e){if(G(e))return un.empty();{const n=t.writeTree_.setTree(e,new me(null));return new un(n)}}function cp(t,e){return Fi(t,e)!=null}function Fi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(it(n.path,e)):null}function T0(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Se,(r,i)=>{e.push(new H(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new H(r,i.value))}),e}function kr(t,e){if(G(e))return t;{const n=Fi(t,e);return n!=null?new un(new me(n)):new un(t.writeTree_.subtree(e))}}function dp(t){return t.writeTree_.isEmpty()}function Us(t,e){return Rx(X(),t.writeTree_,e)}function Rx(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(b(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Rx(Re(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Re(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(t,e){return Dx(e,t)}function ez(t,e,n,r,i){b(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=jo(t.visibleWrites,e,n)),t.lastWriteId=r}function tz(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function nz(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&rz(a,r.path)?i=!1:nn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return iz(t),!0;if(r.snap)t.visibleWrites=x0(t.visibleWrites,r.path);else{const a=r.children;_t(a,l=>{t.visibleWrites=x0(t.visibleWrites,Re(r.path,l))})}return!0}else return!1}function rz(t,e){if(t.snap)return nn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&nn(Re(t.path,n),e))return!0;return!1}function iz(t){t.visibleWrites=Ox(t.allWrites,sz,X()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function sz(t){return t.visible}function Ox(t,e,n){let r=un.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)nn(n,o)?(a=it(n,o),r=jo(r,a,s.snap)):nn(o,n)&&(a=it(o,n),r=jo(r,X(),s.snap.getChild(a)));else if(s.children){if(nn(n,o))a=it(n,o),r=C0(r,a,s.children);else if(nn(o,n))if(a=it(o,n),G(a))r=C0(r,X(),s.children);else{const l=bs(s.children,Y(a));if(l){const u=l.getChild(ce(a));r=jo(r,X(),u)}}}else throw Ks("WriteRecord should have .snap or .children")}}return r}function Nx(t,e,n,r,i){if(!r&&!i){const s=Fi(t.visibleWrites,e);if(s!=null)return s;{const o=kr(t.visibleWrites,e);if(dp(o))return n;if(n==null&&!cp(o,X()))return null;{const a=n||j.EMPTY_NODE;return Us(o,a)}}}else{const s=kr(t.visibleWrites,e);if(!i&&dp(s))return n;if(!i&&n==null&&!cp(s,X()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(nn(u.path,e)||nn(e,u.path))},a=Ox(t.allWrites,o,e),l=n||j.EMPTY_NODE;return Us(a,l)}}}function oz(t,e,n){let r=j.EMPTY_NODE;const i=Fi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Se,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=kr(t.visibleWrites,e);return n.forEachChild(Se,(o,a)=>{const l=Us(kr(s,new ae(o)),a);r=r.updateImmediateChild(o,l)}),T0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=kr(t.visibleWrites,e);return T0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function az(t,e,n,r,i){b(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Re(e,n);if(cp(t.visibleWrites,s))return null;{const o=kr(t.visibleWrites,s);return dp(o)?i.getChild(n):Us(o,i.getChild(n))}}function lz(t,e,n,r){const i=Re(e,n),s=Fi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=kr(t.visibleWrites,i);return Us(o,r.getNode().getImmediateChild(n))}else return null}function uz(t,e){return Fi(t.visibleWrites,e)}function cz(t,e,n,r,i,s,o){let a;const l=kr(t.visibleWrites,e),u=Fi(l,X());if(u!=null)a=u;else if(n!=null)a=Us(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=f.getNext();for(;m&&c.length<i;)d(m,r)!==0&&c.push(m),m=f.getNext();return c}else return[]}function dz(){return{visibleWrites:un.empty(),allWrites:[],lastWriteId:-1}}function nc(t,e,n,r){return Nx(t.writeTree,t.treePath,e,n,r)}function Eg(t,e){return oz(t.writeTree,t.treePath,e)}function I0(t,e,n,r){return az(t.writeTree,t.treePath,e,n,r)}function rc(t,e){return uz(t.writeTree,Re(t.treePath,e))}function fz(t,e,n,r,i,s){return cz(t.writeTree,t.treePath,e,n,r,i,s)}function Sg(t,e,n){return lz(t.writeTree,t.treePath,e,n)}function Ax(t,e){return Dx(Re(t.treePath,e),t.writeTree)}function Dx(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hz{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Sa(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ea(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,js(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Sa(r,e.snapshotNode,i.oldSnap));else throw Ks("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pz{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Lx=new pz;class Cg{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Lr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Sg(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:bi(this.viewCache_),s=fz(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mz(t){return{filter:t}}function gz(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function yz(t,e,n,r,i){const s=new hz;let o,a;if(n.type===rn.OVERWRITE){const u=n;u.source.fromUser?o=fp(t,e,u.path,u.snap,r,i,s):(b(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!G(u.path),o=ic(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===rn.MERGE){const u=n;u.source.fromUser?o=_z(t,e,u.path,u.children,r,i,s):(b(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=hp(t,e,u.path,u.children,r,i,a,s))}else if(n.type===rn.ACK_USER_WRITE){const u=n;u.revert?o=Sz(t,e,u.path,r,i,s):o=wz(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===rn.LISTEN_COMPLETE)o=Ez(t,e,n.path,r,s);else throw Ks("Unknown operation type: "+n.type);const l=s.getChanges();return vz(e,o,l),{viewCache:o,changes:l}}function vz(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=tc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Ix(tc(e)))}}function Mx(t,e,n,r,i,s){const o=e.eventCache;if(rc(r,n)!=null)return e;{let a,l;if(G(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=bi(e),c=u instanceof j?u:j.EMPTY_NODE,d=Eg(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=nc(r,bi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=Y(n);if(u===".priority"){b(Dr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=I0(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=ce(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=I0(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=Sg(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return Fo(e,a,o.isFullyInitialized()||G(n),t.filter.filtersNodes())}}function ic(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(G(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),m,null)}else{const m=Y(n);if(!l.isCompleteForPath(n)&&Dr(n)>1)return e;const g=ce(n),w=l.getNode().getImmediateChild(m).updateChild(g,r);m===".priority"?u=c.updatePriority(l.getNode(),w):u=c.updateChild(l.getNode(),m,w,g,Lx,null)}const d=Px(e,u,l.isFullyInitialized()||G(n),c.filtersNodes()),f=new Cg(i,d,s);return Mx(t,d,n,i,f,a)}function fp(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new Cg(i,e,s);if(G(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Fo(e,u,!0,t.filter.filtersNodes());else{const d=Y(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Fo(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=ce(n),m=a.getNode().getImmediateChild(d);let g;if(G(f))g=r;else{const v=c.getCompleteChild(d);v!=null?gx(f)===".priority"&&v.getChild(vx(f)).isEmpty()?g=v:g=v.updateChild(f,r):g=j.EMPTY_NODE}if(m.equals(g))l=e;else{const v=t.filter.updateChild(a.getNode(),d,g,f,c,o);l=Fo(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function k0(t,e){return t.eventCache.isCompleteForChild(e)}function _z(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=Re(n,l);k0(e,Y(c))&&(a=fp(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=Re(n,l);k0(e,Y(c))||(a=fp(t,a,c,u,i,s,o))}),a}function b0(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function hp(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;G(n)?u=r:u=new me(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),g=b0(t,m,f);l=ic(t,l,new ae(d),g,i,s,o,a)}}),u.children.inorderTraversal((d,f)=>{const m=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!m){const g=e.serverCache.getNode().getImmediateChild(d),v=b0(t,g,f);l=ic(t,l,new ae(d),v,i,s,o,a)}}),l}function wz(t,e,n,r,i,s,o){if(rc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(G(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ic(t,e,n,l.getNode().getChild(n),i,s,a,o);if(G(n)){let u=new me(null);return l.getNode().forEachChild(_s,(c,d)=>{u=u.set(new ae(c),d)}),hp(t,e,n,u,i,s,a,o)}else return e}else{let u=new me(null);return r.foreach((c,d)=>{const f=Re(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),hp(t,e,n,u,i,s,a,o)}}function Ez(t,e,n,r,i){const s=e.serverCache,o=Px(e,s.getNode(),s.isFullyInitialized()||G(n),s.isFiltered());return Mx(t,o,n,r,Lx,i)}function Sz(t,e,n,r,i,s){let o;if(rc(r,n)!=null)return e;{const a=new Cg(r,e,i),l=e.eventCache.getNode();let u;if(G(n)||Y(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=nc(r,bi(e));else{const d=e.serverCache.getNode();b(d instanceof j,"serverChildren would be complete if leaf node"),c=Eg(r,d)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=Y(n);let d=Sg(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,ce(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,j.EMPTY_NODE,ce(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=nc(r,bi(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||rc(r,X())!=null,Fo(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cz{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new yg(r.getIndex()),s=B6(r);this.processor_=mz(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(j.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(j.EMPTY_NODE,a.getNode(),null),c=new Lr(l,o.isFullyInitialized(),i.filtersNodes()),d=new Lr(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=ld(d,c),this.eventGenerator_=new Y6(this.query_)}get query(){return this.query_}}function xz(t){return t.viewCache_.serverCache.getNode()}function Tz(t){return tc(t.viewCache_)}function Iz(t,e){const n=bi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!G(e)&&!n.getImmediateChild(Y(e)).isEmpty())?n.getChild(e):null}function P0(t){return t.eventRegistrations_.length===0}function kz(t,e){t.eventRegistrations_.push(e)}function R0(t,e,n){const r=[];if(n){b(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function O0(t,e,n,r){e.type===rn.MERGE&&e.source.queryId!==null&&(b(bi(t.viewCache_),"We should always have a full cache before handling merges"),b(tc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=yz(t.processor_,i,e,n,r);return gz(t.processor_,s.viewCache),b(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,$x(t,s.changes,s.viewCache.eventCache.getNode(),null)}function bz(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Se,(s,o)=>{r.push(js(s,o))}),n.isFullyInitialized()&&r.push(Ix(n.getNode())),$x(t,r,n.getNode(),e)}function $x(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return Q6(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sc;class Fx{constructor(){this.views=new Map}}function Pz(t){b(!sc,"__referenceConstructor has already been defined"),sc=t}function Rz(){return b(sc,"Reference.ts has not been loaded"),sc}function Oz(t){return t.views.size===0}function xg(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return b(s!=null,"SyncTree gave us an op for an invalid query."),O0(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(O0(o,e,n,r));return s}}function jx(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=nc(n,i?r:null),l=!1;a?l=!0:r instanceof j?(a=Eg(n,r),l=!1):(a=j.EMPTY_NODE,l=!1);const u=ld(new Lr(a,l,!1),new Lr(r,i,!1));return new Cz(e,u)}return o}function Nz(t,e,n,r,i,s){const o=jx(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),kz(o,n),bz(o,n)}function Az(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Mr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(R0(u,n,r)),P0(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(R0(l,n,r)),P0(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Mr(t)&&s.push(new(Rz())(e._repo,e._path)),{removed:s,events:o}}function Ux(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function br(t,e){let n=null;for(const r of t.views.values())n=n||Iz(r,e);return n}function zx(t,e){if(e._queryParams.loadsAllData())return cd(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Bx(t,e){return zx(t,e)!=null}function Mr(t){return cd(t)!=null}function cd(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oc;function Dz(t){b(!oc,"__referenceConstructor has already been defined"),oc=t}function Lz(){return b(oc,"Reference.ts has not been loaded"),oc}let Mz=1;class N0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new me(null),this.pendingWriteTree_=dz(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function $z(t,e,n,r,i){return ez(t.pendingWriteTree_,e,n,r,i),i?Qa(t,new ki(bx(),e,n)):[]}function os(t,e,n=!1){const r=tz(t.pendingWriteTree_,e);if(nz(t.pendingWriteTree_,e)){let s=new me(null);return r.snap!=null?s=s.set(X(),!0):_t(r.children,o=>{s=s.set(new ae(o),!0)}),Qa(t,new ec(r.path,s,n))}else return[]}function Ya(t,e,n){return Qa(t,new ki(_g(),e,n))}function Fz(t,e,n){const r=me.fromObject(n);return Qa(t,new Ta(_g(),e,r))}function jz(t,e){return Qa(t,new xa(_g(),e))}function Uz(t,e,n){const r=Tg(t,n);if(r){const i=Ig(r),s=i.path,o=i.queryId,a=it(s,e),l=new xa(wg(o),a);return kg(t,s,l)}else return[]}function Vx(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Bx(o,e))){const l=Az(o,e,n,r);Oz(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,m)=>Mr(m));if(c&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const m=Wz(f);for(let g=0;g<m.length;++g){const v=m[g],w=v.query,p=qx(t,v);t.listenProvider_.startListening(Uo(w),Ia(t,w),p.hashFn,p.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Uo(e),null):u.forEach(f=>{const m=t.queryToTagMap.get(dd(f));t.listenProvider_.stopListening(Uo(f),m)}))}Hz(t,u)}return a}function Wx(t,e,n,r){const i=Tg(t,r);if(i!=null){const s=Ig(i),o=s.path,a=s.queryId,l=it(o,e),u=new ki(wg(a),l,n);return kg(t,o,u)}else return[]}function zz(t,e,n,r){const i=Tg(t,r);if(i){const s=Ig(i),o=s.path,a=s.queryId,l=it(o,e),u=me.fromObject(n),c=new Ta(wg(a),l,u);return kg(t,o,c)}else return[]}function Bz(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,m)=>{const g=it(f,i);s=s||br(m,g),o=o||Mr(m)});let a=t.syncPointTree_.get(i);a?(o=o||Mr(a),s=s||br(a,X())):(a=new Fx,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=j.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,g)=>{const v=br(g,X());v&&(s=s.updateImmediateChild(m,v))}));const u=Bx(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=dd(e);b(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const m=Gz();t.queryToTagMap.set(f,m),t.tagToQueryMap.set(m,f)}const c=ud(t.pendingWriteTree_,i);let d=Nz(a,e,n,c,s,l);if(!u&&!o&&!r){const f=zx(a,e);d=d.concat(Kz(t,e,f))}return d}function Hx(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=it(o,e),u=br(a,l);if(u)return u});return Nx(i,e,s,n,!0)}function Vz(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=it(u,n);r=r||br(c,d)});let i=t.syncPointTree_.get(n);i?r=r||br(i,X()):(i=new Fx,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Lr(r,!0,!1):null,a=ud(t.pendingWriteTree_,e._path),l=jx(i,e,a,s?o.getNode():j.EMPTY_NODE,s);return Tz(l)}function Qa(t,e){return Gx(e,t.syncPointTree_,null,ud(t.pendingWriteTree_,X()))}function Gx(t,e,n,r){if(G(t.path))return Kx(t,e,n,r);{const i=e.get(X());n==null&&i!=null&&(n=br(i,X()));let s=[];const o=Y(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=Ax(r,o);s=s.concat(Gx(a,l,u,c))}return i&&(s=s.concat(xg(i,t,r,n))),s}}function Kx(t,e,n,r){const i=e.get(X());n==null&&i!=null&&(n=br(i,X()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=Ax(r,o),c=t.operationForChild(o);c&&(s=s.concat(Kx(c,a,l,u)))}),i&&(s=s.concat(xg(i,t,r,n))),s}function qx(t,e){const n=e.query,r=Ia(t,n);return{hashFn:()=>(xz(e)||j.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?Uz(t,n._path,r):jz(t,n._path);{const s=zU(i,n);return Vx(t,n,null,s)}}}}function Ia(t,e){const n=dd(e);return t.queryToTagMap.get(n)}function dd(t){return t._path.toString()+"$"+t._queryIdentifier}function Tg(t,e){return t.tagToQueryMap.get(e)}function Ig(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ae(t.substr(0,e))}}function kg(t,e,n){const r=t.syncPointTree_.get(e);b(r,"Missing sync point for query tag that we're tracking");const i=ud(t.pendingWriteTree_,e);return xg(r,n,i,null)}function Wz(t){return t.fold((e,n,r)=>{if(n&&Mr(n))return[cd(n)];{let i=[];return n&&(i=Ux(n)),_t(r,(s,o)=>{i=i.concat(o)}),i}})}function Uo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Lz())(t._repo,t._path):t}function Hz(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=dd(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function Gz(){return Mz++}function Kz(t,e,n){const r=e._path,i=Ia(t,e),s=qx(t,n),o=t.listenProvider_.startListening(Uo(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)b(!Mr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!G(u)&&c&&Mr(c))return[cd(c).query];{let f=[];return c&&(f=f.concat(Ux(c).map(m=>m.query))),_t(d,(m,g)=>{f=f.concat(g)}),f}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(Uo(c),Ia(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new bg(n)}node(){return this.node_}}class Pg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Re(this.path_,e);return new Pg(this.syncTree_,n)}node(){return Hx(this.syncTree_,this.path_)}}const qz=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},A0=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Yz(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Qz(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Yz=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},Qz=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&b(!1,"Unexpected increment value: "+r);const i=e.node();if(b(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Xz=function(t,e,n,r){return Rg(e,new Pg(n,t),r)},Jz=function(t,e,n){return Rg(t,new bg(e),n)};function Rg(t,e,n){const r=t.getPriority().val(),i=A0(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=A0(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new De(a,We(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new De(i))),o.forEachChild(Se,(a,l)=>{const u=Rg(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Ng(t,e){let n=e instanceof ae?e:new ae(e),r=t,i=Y(n);for(;i!==null;){const s=bs(r.node.children,i)||{children:{},childCount:0};r=new Og(i,r,s),n=ce(n),i=Y(n)}return r}function to(t){return t.node.value}function Yx(t,e){t.node.value=e,pp(t)}function Qx(t){return t.node.childCount>0}function Zz(t){return to(t)===void 0&&!Qx(t)}function fd(t,e){_t(t.node.children,(n,r)=>{e(new Og(n,t,r))})}function Xx(t,e,n,r){n&&!r&&e(t),fd(t,i=>{Xx(i,e,!0,r)}),n&&r&&e(t)}function e5(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Xa(t){return new ae(t.parent===null?t.name:Xa(t.parent)+"/"+t.name)}function pp(t){t.parent!==null&&t5(t.parent,t.name,t)}function t5(t,e,n){const r=Zz(n),i=Xn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,pp(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,pp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n5=/[\[\].#$\/\u0000-\u001F\u007F]/,r5=/[\[\].#$\u0000-\u001F\u007F]/,If=10*1024*1024,Jx=function(t){return typeof t=="string"&&t.length!==0&&!n5.test(t)},Zx=function(t){return typeof t=="string"&&t.length!==0&&!r5.test(t)},i5=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Zx(t)},eT=function(t,e,n){const r=n instanceof ae?new w6(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ei(r));if(typeof e=="function")throw new Error(t+"contains a function "+ei(r)+" with contents = "+e.toString());if(YC(e))throw new Error(t+"contains "+e.toString()+" "+ei(r));if(typeof e=="string"&&e.length>If/3&&Tc(e)>If)throw new Error(t+"contains a string greater than "+If+" utf8 bytes "+ei(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(_t(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Jx(o)))throw new Error(t+" contains an invalid key ("+o+") "+ei(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);E6(r,o),eT(t,a,r),S6(r)}),i&&s)throw new Error(t+' contains ".value" child '+ei(r)+" in addition to actual children.")}},tT=function(t,e,n,r){if(!(r&&n===void 0)&&!Zx(n))throw new Error(yE(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},s5=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),tT(t,e,n,r)},o5=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Jx(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!i5(n))throw new Error(yE(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a5{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function l5(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!_x(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Wr(t,e,n){l5(t,n),u5(t,r=>nn(r,e)||nn(e,r))}function u5(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(c5(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function c5(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();pi&&Ze("event: "+n.toString()),Ka(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d5="repo_interrupt",f5=25;class h5{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new a5,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Zu(),this.transactionQueueTree_=new Og,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function p5(t,e,n){if(t.stats_=hg(t.repoInfo_),t.forceRestClient_||HU())t.server_=new Ju(t.repoInfo_,(r,i,s,o)=>{D0(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>L0(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Pe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new zn(t.repoInfo_,e,(r,i,s,o)=>{D0(t,r,i,s,o)},r=>{L0(t,r)},r=>{g5(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=QU(t.repoInfo_,()=>new q6(t.stats_,t.server_)),t.infoData_=new V6,t.infoSyncTree_=new N0({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Ya(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ag(t,"connected",!1),t.serverSyncTree_=new N0({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);Wr(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function m5(t){const n=t.infoData_.getNode(new ae(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function nT(t){return qz({timestamp:m5(t)})}function D0(t,e,n,r,i){t.dataUpdateCount++;const s=new ae(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=bu(n,u=>We(u));o=zz(t.serverSyncTree_,s,l,i)}else{const l=We(n);o=Wx(t.serverSyncTree_,s,l,i)}else if(r){const l=bu(n,u=>We(u));o=Fz(t.serverSyncTree_,s,l)}else{const l=We(n);o=Ya(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Mg(t,s)),Wr(t.eventQueue_,a,o)}function L0(t,e){Ag(t,"connected",e),e===!1&&_5(t)}function g5(t,e){_t(e,(n,r)=>{Ag(t,n,r)})}function Ag(t,e,n){const r=new ae("/.info/"+e),i=We(n);t.infoData_.updateSnapshot(r,i);const s=Ya(t.infoSyncTree_,r,i);Wr(t.eventQueue_,r,s)}function y5(t){return t.nextWriteId_++}function v5(t,e,n){const r=Vz(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=We(i).withIndex(e._queryParams.getIndex());Bz(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ya(t.serverSyncTree_,e._path,s);else{const a=Ia(t.serverSyncTree_,e);o=Wx(t.serverSyncTree_,e._path,s,a)}return Wr(t.eventQueue_,e._path,o),Vx(t.serverSyncTree_,e,n,null,!0),s},i=>(Dg(t,"get for query "+Pe(e)+" failed: "+i),Promise.reject(new Error(i))))}function _5(t){Dg(t,"onDisconnectEvents");const e=nT(t),n=Zu();up(t.onDisconnect_,X(),(i,s)=>{const o=Xz(i,s,t.serverSyncTree_,e);kx(n,i,o)});let r=[];up(n,X(),(i,s)=>{r=r.concat(Ya(t.serverSyncTree_,i,s));const o=C5(t,i);Mg(t,o)}),t.onDisconnect_=Zu(),Wr(t.eventQueue_,X(),r)}function w5(t){t.persistentConnection_&&t.persistentConnection_.interrupt(d5)}function Dg(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ze(n,...e)}function rT(t,e,n){return Hx(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function Lg(t,e=t.transactionQueueTree_){if(e||hd(t,e),to(e)){const n=sT(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&E5(t,Xa(e),n)}else Qx(e)&&fd(e,n=>{Lg(t,n)})}function E5(t,e,n){const r=n.map(u=>u.currentWriteId),i=rT(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];b(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=it(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Dg(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(os(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();hd(t,Ng(t.transactionQueueTree_,e)),Lg(t,t.transactionQueueTree_),Wr(t.eventQueue_,e,c);for(let f=0;f<d.length;f++)Ka(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Pt("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Mg(t,e)}},o)}function Mg(t,e){const n=iT(t,e),r=Xa(n),i=sT(t,n);return S5(t,i,r),r}function S5(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=it(n,l.path);let c=!1,d;if(b(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(os(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=f5)c=!0,d="maxretry",i=i.concat(os(t.serverSyncTree_,l.currentWriteId,!0));else{const f=rT(t,l.path,o);l.currentInputSnapshot=f;const m=e[a].update(f.val());if(m!==void 0){eT("transaction failed: Data returned ",m,l.path);let g=We(m);typeof m=="object"&&m!=null&&Xn(m,".priority")||(g=g.updatePriority(f.getPriority()));const w=l.currentWriteId,p=nT(t),h=Jz(g,f,p);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=h,l.currentWriteId=y5(t),o.splice(o.indexOf(w),1),i=i.concat($z(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(os(t.serverSyncTree_,w,!0))}else c=!0,d="nodata",i=i.concat(os(t.serverSyncTree_,l.currentWriteId,!0))}Wr(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}hd(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ka(r[a]);Lg(t,t.transactionQueueTree_)}function iT(t,e){let n,r=t.transactionQueueTree_;for(n=Y(e);n!==null&&to(r)===void 0;)r=Ng(r,n),e=ce(e),n=Y(e);return r}function sT(t,e){const n=[];return oT(t,e,n),n.sort((r,i)=>r.order-i.order),n}function oT(t,e,n){const r=to(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);fd(e,i=>{oT(t,i,n)})}function hd(t,e){const n=to(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Yx(e,n.length>0?n:void 0)}fd(e,r=>{hd(t,r)})}function C5(t,e){const n=Xa(iT(t,e)),r=Ng(t.transactionQueueTree_,e);return e5(r,i=>{kf(t,i)}),kf(t,r),Xx(r,i=>{kf(t,i)}),n}function kf(t,e){const n=to(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(os(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Yx(e,void 0):n.length=s+1,Wr(t.eventQueue_,Xa(e),i);for(let o=0;o<r.length;o++)Ka(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x5(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function T5(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Pt(`Invalid query segment '${n}' in query '${t}'`)}return e}const M0=function(t,e){const n=I5(t),r=n.namespace;n.domain==="firebase.com"&&qn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&qn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||MU();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new ax(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ae(n.pathString)}},I5=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=x5(t.substring(c,d)));const f=T5(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k5{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Pe(this.snapshot.exportVal())}}class b5{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P5{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return G(this._path)?null:gx(this._path)}get ref(){return new Zn(this._repo,this._path)}get _queryIdentifier(){const e=E0(this._queryParams),n=dg(e);return n==="{}"?"default":n}get _queryObject(){return E0(this._queryParams)}isEqual(e){if(e=Lt(e),!(e instanceof $g))return!1;const n=this._repo===e._repo,r=_x(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+_6(this._path)}}class Zn extends $g{constructor(e,n){super(e,n,new vg,!1)}get parent(){const e=vx(this._path);return e===null?null:new Zn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ka{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ae(e),r=ac(this.ref,e);return new ka(this._node.getChild(n),r,Se)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new ka(i,ac(this.ref,r),Se)))}hasChild(e){const n=new ae(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function R5(t,e){return t=Lt(t),t._checkNotDeleted("ref"),e!==void 0?ac(t._root,e):t._root}function ac(t,e){return t=Lt(t),Y(t._path)===null?s5("child","path",e,!1):tT("child","path",e,!1),new Zn(t._repo,Re(t._path,e))}function O5(t){t=Lt(t);const e=new P5(()=>{}),n=new Fg(e);return v5(t._repo,t,n).then(r=>new ka(r,new Zn(t._repo,t._path),t._queryParams.getIndex()))}class Fg{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new k5("value",this,new ka(e.snapshotNode,new Zn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new b5(this,e,n):null}matches(e){return e instanceof Fg?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}Pz(Zn);Dz(Zn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N5="FIREBASE_DATABASE_EMULATOR_HOST",mp={};let A5=!1;function D5(t,e,n,r){t.repoInfo_=new ax(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function L5(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||qn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ze("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=M0(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[N5]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=M0(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new vs(vs.OWNER):new KU(t.name,t.options,e);o5("Invalid Firebase Database URL",o),G(o.path)||qn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=$5(a,t,c,new GU(t.name,n));return new F5(d,t)}function M5(t,e){const n=mp[e];(!n||n[t.key]!==t)&&qn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),w5(t),delete n[t.key]}function $5(t,e,n,r){let i=mp[e.name];i||(i={},mp[e.name]=i);let s=i[t.toURLString()];return s&&qn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new h5(t,A5,n,r),i[t.toURLString()]=s,s}class F5{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(p5(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Zn(this._repo,X())),this._rootInternal}_delete(){return this._rootInternal!==null&&(M5(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&qn("Cannot call "+e+" on a deleted database.")}}function j5(t=EE(),e){const n=Sm(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=eP("database");r&&U5(n,...r)}return n}function U5(t,e,n,r={}){t=Lt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&qn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&qn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new vs(vs.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:tP(r.mockUserToken,t.app.options.projectId);s=new vs(o)}D5(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z5(t){OU(Ys),Ps(new wi("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return L5(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),xr(i0,s0,t),xr(i0,s0,"esm2017")}zn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};zn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};z5();var B5="firebase",V5="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xr(B5,V5,"app");const W5={}.VITE_API_KEY,H5={apiKey:W5,authDomain:"test-582b2.firebaseapp.com",projectId:"test-582b2",storageBucket:"test-582b2.appspot.com",messagingSenderId:"925130837675",appId:"1:925130837675:web:d3470003dae1803bf931ee",databaseURL:"https://test-582b2-default-rtdb.europe-west1.firebasedatabase.app/"},G5=wE(H5),K5=j5(G5);new Dn;const Jl=vU("teachers/getAllTeachers",async(t,e)=>{const n=R5(K5);try{const r=await O5(ac(n,"/"));if(r.exists()){const i=r.val();return Object.values(i)}}catch(r){console.error(r)}});function q5(){const[t,e]=x.useState(null),n=bC(),r={Blue:"Blue",LightPink:"LightPink",Green:"Green",Orange:"Orange",Pink:"Pink"};return x.useEffect(()=>{n(Jl())},[]),x.useEffect(()=>{e(Object.keys(r)[Math.floor(Math.random()*Object.keys(r).length)])},[]),_.jsx(x4,{children:_.jsx(AI,{children:_.jsxs(Kr,{path:"/",element:_.jsx(ZF,{color:t}),children:[_.jsx(Kr,{index:!0,element:_.jsx(nw,{to:"Home"})}),_.jsx(Kr,{path:"/Home",element:_.jsx(s3,{color:t})}),_.jsx(Kr,{path:"/Teachers",element:_.jsx(g4,{})}),_.jsx(Kr,{path:"/Favorites",element:_.jsx(T4,{redirectTo:"/",component:_.jsx(w4,{})})}),_.jsx(Kr,{path:"*",element:_.jsx(C4,{})})]})})})}const Y5={teachers:[],isLoading:!1},Q5=TU({name:"teachers",initialState:Y5,extraReducers:t=>{t.addCase(Jl.pending,e=>{e.isLoading=!0}).addCase(Jl.fulfilled,(e,{payload:n})=>{e.isLoading=!1,e.teachers=n}).addCase(Jl.rejected,e=>{e.isLoading=!1})}}),X5=Q5.reducer,J5=uU({reducer:{teachers:X5}});Of.createRoot(document.getElementById("root")).render(_.jsx(jI,{basename:"/Learn-Lingo/",children:_.jsx(T3,{store:J5,children:_.jsx(q5,{})})}))});export default Z5();
