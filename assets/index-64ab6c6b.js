var rT=Object.defineProperty;var iT=(t,e,n)=>e in t?rT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var sT=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var yd=(t,e,n)=>(iT(t,typeof e!="symbol"?e+"":e,n),n);var R5=sT((Ct,Tt)=>{function oT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function yp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var U0={exports:{}},oc={},z0={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sa=Symbol.for("react.element"),aT=Symbol.for("react.portal"),lT=Symbol.for("react.fragment"),uT=Symbol.for("react.strict_mode"),cT=Symbol.for("react.profiler"),dT=Symbol.for("react.provider"),fT=Symbol.for("react.context"),hT=Symbol.for("react.forward_ref"),pT=Symbol.for("react.suspense"),mT=Symbol.for("react.memo"),gT=Symbol.for("react.lazy"),Kg=Symbol.iterator;function yT(t){return t===null||typeof t!="object"?null:(t=Kg&&t[Kg]||t["@@iterator"],typeof t=="function"?t:null)}var B0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V0=Object.assign,W0={};function Ls(t,e,n){this.props=t,this.context=e,this.refs=W0,this.updater=n||B0}Ls.prototype.isReactComponent={};Ls.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ls.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function H0(){}H0.prototype=Ls.prototype;function vp(t,e,n){this.props=t,this.context=e,this.refs=W0,this.updater=n||B0}var _p=vp.prototype=new H0;_p.constructor=vp;V0(_p,Ls.prototype);_p.isPureReactComponent=!0;var qg=Array.isArray,G0=Object.prototype.hasOwnProperty,wp={current:null},K0={key:!0,ref:!0,__self:!0,__source:!0};function q0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)G0.call(e,r)&&!K0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Sa,type:t,key:s,ref:o,props:i,_owner:wp.current}}function vT(t,e){return{$$typeof:Sa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Sp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Sa}function _T(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Yg=/\/+/g;function vd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?_T(""+t.key):e.toString(36)}function wl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Sa:case aT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+vd(o,0):r,qg(i)?(n="",t!=null&&(n=t.replace(Yg,"$&/")+"/"),wl(i,e,n,"",function(u){return u})):i!=null&&(Sp(i)&&(i=vT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Yg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",qg(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+vd(s,a);o+=wl(s,e,n,l,i)}else if(l=yT(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+vd(s,a++),o+=wl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ha(t,e,n){if(t==null)return t;var r=[],i=0;return wl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function wT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ot={current:null},Sl={transition:null},ST={ReactCurrentDispatcher:ot,ReactCurrentBatchConfig:Sl,ReactCurrentOwner:wp};K.Children={map:Ha,forEach:function(t,e,n){Ha(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ha(t,function(){e++}),e},toArray:function(t){return Ha(t,function(e){return e})||[]},only:function(t){if(!Sp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};K.Component=Ls;K.Fragment=lT;K.Profiler=cT;K.PureComponent=vp;K.StrictMode=uT;K.Suspense=pT;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ST;K.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=V0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=wp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)G0.call(e,l)&&!K0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Sa,type:t.type,key:i,ref:s,props:r,_owner:o}};K.createContext=function(t){return t={$$typeof:fT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:dT,_context:t},t.Consumer=t};K.createElement=q0;K.createFactory=function(t){var e=q0.bind(null,t);return e.type=t,e};K.createRef=function(){return{current:null}};K.forwardRef=function(t){return{$$typeof:hT,render:t}};K.isValidElement=Sp;K.lazy=function(t){return{$$typeof:gT,_payload:{_status:-1,_result:t},_init:wT}};K.memo=function(t,e){return{$$typeof:mT,type:t,compare:e===void 0?null:e}};K.startTransition=function(t){var e=Sl.transition;Sl.transition={};try{t()}finally{Sl.transition=e}};K.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};K.useCallback=function(t,e){return ot.current.useCallback(t,e)};K.useContext=function(t){return ot.current.useContext(t)};K.useDebugValue=function(){};K.useDeferredValue=function(t){return ot.current.useDeferredValue(t)};K.useEffect=function(t,e){return ot.current.useEffect(t,e)};K.useId=function(){return ot.current.useId()};K.useImperativeHandle=function(t,e,n){return ot.current.useImperativeHandle(t,e,n)};K.useInsertionEffect=function(t,e){return ot.current.useInsertionEffect(t,e)};K.useLayoutEffect=function(t,e){return ot.current.useLayoutEffect(t,e)};K.useMemo=function(t,e){return ot.current.useMemo(t,e)};K.useReducer=function(t,e,n){return ot.current.useReducer(t,e,n)};K.useRef=function(t){return ot.current.useRef(t)};K.useState=function(t){return ot.current.useState(t)};K.useSyncExternalStore=function(t,e,n){return ot.current.useSyncExternalStore(t,e,n)};K.useTransition=function(){return ot.current.useTransition()};K.version="18.2.0";z0.exports=K;var T=z0.exports;const it=yp(T),Ao=oT({__proto__:null,default:it},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ET=T,xT=Symbol.for("react.element"),CT=Symbol.for("react.fragment"),TT=Object.prototype.hasOwnProperty,bT=ET.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,IT={key:!0,ref:!0,__self:!0,__source:!0};function Y0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)TT.call(e,r)&&!IT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:xT,type:t,key:s,ref:o,props:i,_owner:bT.current}}oc.Fragment=CT;oc.jsx=Y0;oc.jsxs=Y0;U0.exports=oc;var _=U0.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Do(){return Do=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Do.apply(this,arguments)}var or;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(or||(or={}));const Qg="popstate";function kT(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Pf("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Xl(i)}return OT(e,n,null,t)}function Ce(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ep(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function PT(){return Math.random().toString(36).substr(2,8)}function Xg(t,e){return{usr:t.state,key:t.key,idx:e}}function Pf(t,e,n,r){return n===void 0&&(n=null),Do({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ms(e):e,{state:n,key:e&&e.key||r||PT()})}function Xl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ms(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function OT(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=or.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Do({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=or.Pop;let w=c(),p=w==null?null:w-u;u=w,l&&l({action:a,location:v.location,delta:p})}function f(w,p){a=or.Push;let h=Pf(v.location,w,p);n&&n(h,w),u=c()+1;let y=Xg(h,u),E=v.createHref(h);try{o.pushState(y,"",E)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;i.location.assign(E)}s&&l&&l({action:a,location:v.location,delta:1})}function m(w,p){a=or.Replace;let h=Pf(v.location,w,p);n&&n(h,w),u=c();let y=Xg(h,u),E=v.createHref(h);o.replaceState(y,"",E),s&&l&&l({action:a,location:v.location,delta:0})}function g(w){let p=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof w=="string"?w:Xl(w);return Ce(p,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,p)}let v={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Qg,d),l=w,()=>{i.removeEventListener(Qg,d),l=null}},createHref(w){return e(i,w)},createURL:g,encodeLocation(w){let p=g(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:m,go(w){return o.go(w)}};return v}var Jg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Jg||(Jg={}));function RT(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ms(e):e,i=xp(r.pathname||"/",n);if(i==null)return null;let s=Q0(t);NT(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=zT(s[a],WT(i));return o}function Q0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ce(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=ur([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Ce(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Q0(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:jT(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of X0(s.path))i(s,o,l)}),e}function X0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=X0(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function NT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:UT(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const AT=/^:\w+$/,DT=3,LT=2,MT=1,FT=10,$T=-2,Zg=t=>t==="*";function jT(t,e){let n=t.split("/"),r=n.length;return n.some(Zg)&&(r+=$T),e&&(r+=LT),n.filter(i=>!Zg(i)).reduce((i,s)=>i+(AT.test(s)?DT:s===""?MT:FT),r)}function UT(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function zT(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=BT({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:ur([i,c.pathname]),pathnameBase:qT(ur([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=ur([i,c.pathnameBase]))}return s}function BT(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=VT(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=HT(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function VT(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ep(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function WT(t){try{return decodeURI(t)}catch(e){return Ep(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function HT(t,e){try{return decodeURIComponent(t)}catch(n){return Ep(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function xp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function GT(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ms(t):t;return{pathname:n?n.startsWith("/")?n:KT(n,e):e,search:YT(r),hash:QT(i)}}function KT(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function _d(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Cp(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Tp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ms(t):(i=Do({},t),Ce(!i.pathname||!i.pathname.includes("?"),_d("?","pathname","search",i)),Ce(!i.pathname||!i.pathname.includes("#"),_d("#","pathname","hash",i)),Ce(!i.search||!i.search.includes("#"),_d("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=GT(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const ur=t=>t.join("/").replace(/\/\/+/g,"/"),qT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),YT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,QT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function XT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const J0=["post","put","patch","delete"];new Set(J0);const JT=["get",...J0];new Set(JT);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jl(){return Jl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Jl.apply(this,arguments)}const bp=T.createContext(null),ZT=T.createContext(null),Fs=T.createContext(null),ac=T.createContext(null),Hn=T.createContext({outlet:null,matches:[],isDataRoute:!1}),Z0=T.createContext(null);function eb(t,e){let{relative:n}=e===void 0?{}:e;$s()||Ce(!1);let{basename:r,navigator:i}=T.useContext(Fs),{hash:s,pathname:o,search:a}=nw(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:ur([r,o])),i.createHref({pathname:l,search:a,hash:s})}function $s(){return T.useContext(ac)!=null}function Ea(){return $s()||Ce(!1),T.useContext(ac).location}function ew(t){T.useContext(Fs).static||T.useLayoutEffect(t)}function tw(){let{isDataRoute:t}=T.useContext(Hn);return t?mb():tb()}function tb(){$s()||Ce(!1);let t=T.useContext(bp),{basename:e,navigator:n}=T.useContext(Fs),{matches:r}=T.useContext(Hn),{pathname:i}=Ea(),s=JSON.stringify(Cp(r).map(l=>l.pathnameBase)),o=T.useRef(!1);return ew(()=>{o.current=!0}),T.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Tp(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:ur([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const nb=T.createContext(null);function rb(t){let e=T.useContext(Hn).outlet;return e&&T.createElement(nb.Provider,{value:t},e)}function nw(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=T.useContext(Hn),{pathname:i}=Ea(),s=JSON.stringify(Cp(r).map(o=>o.pathnameBase));return T.useMemo(()=>Tp(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function ib(t,e){return sb(t,e)}function sb(t,e,n){$s()||Ce(!1);let{navigator:r}=T.useContext(Fs),{matches:i}=T.useContext(Hn),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Ea(),u;if(e){var c;let v=typeof e=="string"?Ms(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||Ce(!1),u=v}else u=l;let d=u.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",m=RT(t,{pathname:f}),g=cb(m&&m.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:ur([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:ur([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&g?T.createElement(ac.Provider,{value:{location:Jl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:or.Pop}},g):g}function ob(){let t=pb(),e=XT(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},e),n?T.createElement("pre",{style:i},n):null,s)}const ab=T.createElement(ob,null);class lb extends T.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?T.createElement(Hn.Provider,{value:this.props.routeContext},T.createElement(Z0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ub(t){let{routeContext:e,match:n,children:r}=t,i=T.useContext(bp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(Hn.Provider,{value:e},r)}function cb(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Ce(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||ab);let f=e.concat(s.slice(0,u+1)),m=()=>{let g;return c?g=d:l.route.Component?g=T.createElement(l.route.Component,null):l.route.element?g=l.route.element:g=a,T.createElement(ub,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:g})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?T.createElement(lb,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()},null)}var rw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(rw||{}),Zl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Zl||{});function db(t){let e=T.useContext(bp);return e||Ce(!1),e}function fb(t){let e=T.useContext(ZT);return e||Ce(!1),e}function hb(t){let e=T.useContext(Hn);return e||Ce(!1),e}function iw(t){let e=hb(),n=e.matches[e.matches.length-1];return n.route.id||Ce(!1),n.route.id}function pb(){var t;let e=T.useContext(Z0),n=fb(Zl.UseRouteError),r=iw(Zl.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function mb(){let{router:t}=db(rw.UseNavigateStable),e=iw(Zl.UseNavigateStable),n=T.useRef(!1);return ew(()=>{n.current=!0}),T.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Jl({fromRouteId:e},s)))},[t,e])}function sw(t){let{to:e,replace:n,state:r,relative:i}=t;$s()||Ce(!1);let{matches:s}=T.useContext(Hn),{pathname:o}=Ea(),a=tw(),l=Tp(e,Cp(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return T.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function gb(t){return rb(t.context)}function Vr(t){Ce(!1)}function yb(t){let{basename:e="/",children:n=null,location:r,navigationType:i=or.Pop,navigator:s,static:o=!1}=t;$s()&&Ce(!1);let a=e.replace(/^\/*/,"/"),l=T.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Ms(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:m="default"}=r,g=T.useMemo(()=>{let v=xp(u,a);return v==null?null:{location:{pathname:v,search:c,hash:d,state:f,key:m},navigationType:i}},[a,u,c,d,f,m,i]);return g==null?null:T.createElement(Fs.Provider,{value:l},T.createElement(ac.Provider,{children:n,value:g}))}function vb(t){let{children:e,location:n}=t;return ib(Of(e),n)}new Promise(()=>{});function Of(t,e){e===void 0&&(e=[]);let n=[];return T.Children.forEach(t,(r,i)=>{if(!T.isValidElement(r))return;let s=[...e,i];if(r.type===T.Fragment){n.push.apply(n,Of(r.props.children,s));return}r.type!==Vr&&Ce(!1),!r.props.index||!r.props.children||Ce(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Of(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rf(){return Rf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Rf.apply(this,arguments)}function _b(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function wb(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Sb(t,e){return t.button===0&&(!e||e==="_self")&&!wb(t)}const Eb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],xb="startTransition",ey=Ao[xb];function Cb(t){let{basename:e,children:n,future:r,window:i}=t,s=T.useRef();s.current==null&&(s.current=kT({window:i,v5Compat:!0}));let o=s.current,[a,l]=T.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=T.useCallback(d=>{u&&ey?ey(()=>l(d)):l(d)},[l,u]);return T.useLayoutEffect(()=>o.listen(c),[o,c]),T.createElement(yb,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const Tb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",bb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xa=T.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,d=_b(e,Eb),{basename:f}=T.useContext(Fs),m,g=!1;if(typeof u=="string"&&bb.test(u)&&(m=u,Tb))try{let h=new URL(window.location.href),y=u.startsWith("//")?new URL(h.protocol+u):new URL(u),E=xp(y.pathname,f);y.origin===h.origin&&E!=null?u=E+y.search+y.hash:g=!0}catch{}let v=eb(u,{relative:i}),w=Ib(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function p(h){r&&r(h),h.defaultPrevented||w(h)}return T.createElement("a",Rf({},d,{href:m||v,onClick:g||s?r:p,ref:n,target:l}))});var ty;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(ty||(ty={}));var ny;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ny||(ny={}));function Ib(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=tw(),l=Ea(),u=nw(t,{relative:o});return T.useCallback(c=>{if(Sb(c,n)){c.preventDefault();let d=r!==void 0?r:Xl(l)===Xl(u);a(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}var Nf={},ow={exports:{}},Nt={},aw={exports:{}},lw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,F){var $=O.length;O.push(F);e:for(;0<$;){var te=$-1>>>1,ne=O[te];if(0<i(ne,F))O[te]=F,O[$]=ne,$=te;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var F=O[0],$=O.pop();if($!==F){O[0]=$;e:for(var te=0,ne=O.length,Mt=ne>>>1;te<Mt;){var Ue=2*(te+1)-1,tt=O[Ue],Ke=Ue+1,qe=O[Ke];if(0>i(tt,$))Ke<ne&&0>i(qe,tt)?(O[te]=qe,O[Ke]=$,te=Ke):(O[te]=tt,O[Ue]=$,te=Ue);else if(Ke<ne&&0>i(qe,$))O[te]=qe,O[Ke]=$,te=Ke;else break e}}return F}function i(O,F){var $=O.sortIndex-F.sortIndex;return $!==0?$:O.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,m=!1,g=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(O){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=O)r(u),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(u)}}function E(O){if(v=!1,y(O),!g)if(n(l)!==null)g=!0,Tn(x);else{var F=n(u);F!==null&&lt(E,F.startTime-O)}}function x(O,F){g=!1,v&&(v=!1,p(P),P=-1),m=!0;var $=f;try{for(y(F),d=n(l);d!==null&&(!(d.expirationTime>F)||O&&!G());){var te=d.callback;if(typeof te=="function"){d.callback=null,f=d.priorityLevel;var ne=te(d.expirationTime<=F);F=t.unstable_now(),typeof ne=="function"?d.callback=ne:d===n(l)&&r(l),y(F)}else r(l);d=n(l)}if(d!==null)var Mt=!0;else{var Ue=n(u);Ue!==null&&lt(E,Ue.startTime-F),Mt=!1}return Mt}finally{d=null,f=$,m=!1}}var C=!1,S=null,P=-1,j=5,L=-1;function G(){return!(t.unstable_now()-L<j)}function Lt(){if(S!==null){var O=t.unstable_now();L=O;var F=!0;try{F=S(!0,O)}finally{F?le():(C=!1,S=null)}}else C=!1}var le;if(typeof h=="function")le=function(){h(Lt)};else if(typeof MessageChannel<"u"){var _t=new MessageChannel,Cn=_t.port2;_t.port1.onmessage=Lt,le=function(){Cn.postMessage(null)}}else le=function(){w(Lt,0)};function Tn(O){S=O,C||(C=!0,le())}function lt(O,F){P=w(function(){O(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){g||m||(g=!0,Tn(x))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(f){case 1:case 2:case 3:var F=3;break;default:F=f}var $=f;f=F;try{return O()}finally{f=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,F){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var $=f;f=O;try{return F()}finally{f=$}},t.unstable_scheduleCallback=function(O,F,$){var te=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?te+$:te):$=te,O){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=$+ne,O={id:c++,callback:F,priorityLevel:O,startTime:$,expirationTime:ne,sortIndex:-1},$>te?(O.sortIndex=$,e(u,O),n(l)===null&&O===n(u)&&(v?(p(P),P=-1):v=!0,lt(E,$-te))):(O.sortIndex=ne,e(l,O),g||m||(g=!0,Tn(x))),O},t.unstable_shouldYield=G,t.unstable_wrapCallback=function(O){var F=f;return function(){var $=f;f=F;try{return O.apply(this,arguments)}finally{f=$}}}})(lw);aw.exports=lw;var kb=aw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uw=T,Pt=kb;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cw=new Set,Lo={};function bi(t,e){ps(t,e),ps(t+"Capture",e)}function ps(t,e){for(Lo[t]=e,t=0;t<e.length;t++)cw.add(e[t])}var jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Af=Object.prototype.hasOwnProperty,Pb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ry={},iy={};function Ob(t){return Af.call(iy,t)?!0:Af.call(ry,t)?!1:Pb.test(t)?iy[t]=!0:(ry[t]=!0,!1)}function Rb(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Nb(t,e,n,r){if(e===null||typeof e>"u"||Rb(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function at(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ge[t]=new at(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ge[e]=new at(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ge[t]=new at(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ge[t]=new at(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ge[t]=new at(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ge[t]=new at(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ge[t]=new at(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ge[t]=new at(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ge[t]=new at(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ip=/[\-:]([a-z])/g;function kp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ip,kp);Ge[e]=new at(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ip,kp);Ge[e]=new at(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ip,kp);Ge[e]=new at(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ge[t]=new at(t,1,!1,t.toLowerCase(),null,!1,!1)});Ge.xlinkHref=new at("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ge[t]=new at(t,1,!1,t.toLowerCase(),null,!0,!0)});function Pp(t,e,n,r){var i=Ge.hasOwnProperty(e)?Ge[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Nb(e,n,i,r)&&(n=null),r||i===null?Ob(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Gn=uw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ga=Symbol.for("react.element"),Ui=Symbol.for("react.portal"),zi=Symbol.for("react.fragment"),Op=Symbol.for("react.strict_mode"),Df=Symbol.for("react.profiler"),dw=Symbol.for("react.provider"),fw=Symbol.for("react.context"),Rp=Symbol.for("react.forward_ref"),Lf=Symbol.for("react.suspense"),Mf=Symbol.for("react.suspense_list"),Np=Symbol.for("react.memo"),Zn=Symbol.for("react.lazy"),hw=Symbol.for("react.offscreen"),sy=Symbol.iterator;function qs(t){return t===null||typeof t!="object"?null:(t=sy&&t[sy]||t["@@iterator"],typeof t=="function"?t:null)}var we=Object.assign,wd;function lo(t){if(wd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);wd=e&&e[1]||""}return`
`+wd+t}var Sd=!1;function Ed(t,e){if(!t||Sd)return"";Sd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Sd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?lo(t):""}function Ab(t){switch(t.tag){case 5:return lo(t.type);case 16:return lo("Lazy");case 13:return lo("Suspense");case 19:return lo("SuspenseList");case 0:case 2:case 15:return t=Ed(t.type,!1),t;case 11:return t=Ed(t.type.render,!1),t;case 1:return t=Ed(t.type,!0),t;default:return""}}function Ff(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case zi:return"Fragment";case Ui:return"Portal";case Df:return"Profiler";case Op:return"StrictMode";case Lf:return"Suspense";case Mf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case fw:return(t.displayName||"Context")+".Consumer";case dw:return(t._context.displayName||"Context")+".Provider";case Rp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Np:return e=t.displayName||null,e!==null?e:Ff(t.type)||"Memo";case Zn:e=t._payload,t=t._init;try{return Ff(t(e))}catch{}}return null}function Db(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ff(e);case 8:return e===Op?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Tr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Lb(t){var e=pw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ka(t){t._valueTracker||(t._valueTracker=Lb(t))}function mw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=pw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function eu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $f(t,e){var n=e.checked;return we({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function oy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Tr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function gw(t,e){e=e.checked,e!=null&&Pp(t,"checked",e,!1)}function jf(t,e){gw(t,e);var n=Tr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Uf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Uf(t,e.type,Tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ay(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Uf(t,e,n){(e!=="number"||eu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var uo=Array.isArray;function ns(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Tr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function zf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return we({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ly(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(uo(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Tr(n)}}function yw(t,e){var n=Tr(e.value),r=Tr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function uy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function vw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?vw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var qa,_w=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(qa=qa||document.createElement("div"),qa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=qa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Mo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mb=["Webkit","ms","Moz","O"];Object.keys(yo).forEach(function(t){Mb.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),yo[e]=yo[t]})});function ww(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||yo.hasOwnProperty(t)&&yo[t]?(""+e).trim():e+"px"}function Sw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ww(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Fb=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vf(t,e){if(e){if(Fb[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function Wf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hf=null;function Ap(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gf=null,rs=null,is=null;function cy(t){if(t=ba(t)){if(typeof Gf!="function")throw Error(I(280));var e=t.stateNode;e&&(e=fc(e),Gf(t.stateNode,t.type,e))}}function Ew(t){rs?is?is.push(t):is=[t]:rs=t}function xw(){if(rs){var t=rs,e=is;if(is=rs=null,cy(t),e)for(t=0;t<e.length;t++)cy(e[t])}}function Cw(t,e){return t(e)}function Tw(){}var xd=!1;function bw(t,e,n){if(xd)return t(e,n);xd=!0;try{return Cw(t,e,n)}finally{xd=!1,(rs!==null||is!==null)&&(Tw(),xw())}}function Fo(t,e){var n=t.stateNode;if(n===null)return null;var r=fc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var Kf=!1;if(jn)try{var Ys={};Object.defineProperty(Ys,"passive",{get:function(){Kf=!0}}),window.addEventListener("test",Ys,Ys),window.removeEventListener("test",Ys,Ys)}catch{Kf=!1}function $b(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var vo=!1,tu=null,nu=!1,qf=null,jb={onError:function(t){vo=!0,tu=t}};function Ub(t,e,n,r,i,s,o,a,l){vo=!1,tu=null,$b.apply(jb,arguments)}function zb(t,e,n,r,i,s,o,a,l){if(Ub.apply(this,arguments),vo){if(vo){var u=tu;vo=!1,tu=null}else throw Error(I(198));nu||(nu=!0,qf=u)}}function Ii(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Iw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function dy(t){if(Ii(t)!==t)throw Error(I(188))}function Bb(t){var e=t.alternate;if(!e){if(e=Ii(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return dy(i),t;if(s===r)return dy(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function kw(t){return t=Bb(t),t!==null?Pw(t):null}function Pw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Pw(t);if(e!==null)return e;t=t.sibling}return null}var Ow=Pt.unstable_scheduleCallback,fy=Pt.unstable_cancelCallback,Vb=Pt.unstable_shouldYield,Wb=Pt.unstable_requestPaint,xe=Pt.unstable_now,Hb=Pt.unstable_getCurrentPriorityLevel,Dp=Pt.unstable_ImmediatePriority,Rw=Pt.unstable_UserBlockingPriority,ru=Pt.unstable_NormalPriority,Gb=Pt.unstable_LowPriority,Nw=Pt.unstable_IdlePriority,lc=null,yn=null;function Kb(t){if(yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(lc,t,void 0,(t.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:Qb,qb=Math.log,Yb=Math.LN2;function Qb(t){return t>>>=0,t===0?32:31-(qb(t)/Yb|0)|0}var Ya=64,Qa=4194304;function co(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function iu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=co(a):(s&=o,s!==0&&(r=co(s)))}else o=n&~i,o!==0?r=co(o):s!==0&&(r=co(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-rn(e),i=1<<n,r|=t[n],e&=~i;return r}function Xb(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jb(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-rn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Xb(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Yf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Aw(){var t=Ya;return Ya<<=1,!(Ya&4194240)&&(Ya=64),t}function Cd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ca(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-rn(e),t[e]=n}function Zb(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-rn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Lp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-rn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ie=0;function Dw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Lw,Mp,Mw,Fw,$w,Qf=!1,Xa=[],cr=null,dr=null,fr=null,$o=new Map,jo=new Map,tr=[],eI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hy(t,e){switch(t){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":$o.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(e.pointerId)}}function Qs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ba(e),e!==null&&Mp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function tI(t,e,n,r,i){switch(e){case"focusin":return cr=Qs(cr,t,e,n,r,i),!0;case"dragenter":return dr=Qs(dr,t,e,n,r,i),!0;case"mouseover":return fr=Qs(fr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return $o.set(s,Qs($o.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,jo.set(s,Qs(jo.get(s)||null,t,e,n,r,i)),!0}return!1}function jw(t){var e=Xr(t.target);if(e!==null){var n=Ii(e);if(n!==null){if(e=n.tag,e===13){if(e=Iw(n),e!==null){t.blockedOn=e,$w(t.priority,function(){Mw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function El(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Hf=r,n.target.dispatchEvent(r),Hf=null}else return e=ba(n),e!==null&&Mp(e),t.blockedOn=n,!1;e.shift()}return!0}function py(t,e,n){El(t)&&n.delete(e)}function nI(){Qf=!1,cr!==null&&El(cr)&&(cr=null),dr!==null&&El(dr)&&(dr=null),fr!==null&&El(fr)&&(fr=null),$o.forEach(py),jo.forEach(py)}function Xs(t,e){t.blockedOn===e&&(t.blockedOn=null,Qf||(Qf=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,nI)))}function Uo(t){function e(i){return Xs(i,t)}if(0<Xa.length){Xs(Xa[0],t);for(var n=1;n<Xa.length;n++){var r=Xa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(cr!==null&&Xs(cr,t),dr!==null&&Xs(dr,t),fr!==null&&Xs(fr,t),$o.forEach(e),jo.forEach(e),n=0;n<tr.length;n++)r=tr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<tr.length&&(n=tr[0],n.blockedOn===null);)jw(n),n.blockedOn===null&&tr.shift()}var ss=Gn.ReactCurrentBatchConfig,su=!0;function rI(t,e,n,r){var i=ie,s=ss.transition;ss.transition=null;try{ie=1,Fp(t,e,n,r)}finally{ie=i,ss.transition=s}}function iI(t,e,n,r){var i=ie,s=ss.transition;ss.transition=null;try{ie=4,Fp(t,e,n,r)}finally{ie=i,ss.transition=s}}function Fp(t,e,n,r){if(su){var i=Xf(t,e,n,r);if(i===null)Dd(t,e,r,ou,n),hy(t,r);else if(tI(i,t,e,n,r))r.stopPropagation();else if(hy(t,r),e&4&&-1<eI.indexOf(t)){for(;i!==null;){var s=ba(i);if(s!==null&&Lw(s),s=Xf(t,e,n,r),s===null&&Dd(t,e,r,ou,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Dd(t,e,r,null,n)}}var ou=null;function Xf(t,e,n,r){if(ou=null,t=Ap(r),t=Xr(t),t!==null)if(e=Ii(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Iw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ou=t,null}function Uw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hb()){case Dp:return 1;case Rw:return 4;case ru:case Gb:return 16;case Nw:return 536870912;default:return 16}default:return 16}}var ar=null,$p=null,xl=null;function zw(){if(xl)return xl;var t,e=$p,n=e.length,r,i="value"in ar?ar.value:ar.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return xl=i.slice(t,1<r?1-r:void 0)}function Cl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ja(){return!0}function my(){return!1}function At(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ja:my,this.isPropagationStopped=my,this}return we(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ja)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ja)},persist:function(){},isPersistent:Ja}),e}var js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jp=At(js),Ta=we({},js,{view:0,detail:0}),sI=At(Ta),Td,bd,Js,uc=we({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Up,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Js&&(Js&&t.type==="mousemove"?(Td=t.screenX-Js.screenX,bd=t.screenY-Js.screenY):bd=Td=0,Js=t),Td)},movementY:function(t){return"movementY"in t?t.movementY:bd}}),gy=At(uc),oI=we({},uc,{dataTransfer:0}),aI=At(oI),lI=we({},Ta,{relatedTarget:0}),Id=At(lI),uI=we({},js,{animationName:0,elapsedTime:0,pseudoElement:0}),cI=At(uI),dI=we({},js,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fI=At(dI),hI=we({},js,{data:0}),yy=At(hI),pI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=gI[t])?!!e[t]:!1}function Up(){return yI}var vI=we({},Ta,{key:function(t){if(t.key){var e=pI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Up,charCode:function(t){return t.type==="keypress"?Cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_I=At(vI),wI=we({},uc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vy=At(wI),SI=we({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Up}),EI=At(SI),xI=we({},js,{propertyName:0,elapsedTime:0,pseudoElement:0}),CI=At(xI),TI=we({},uc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bI=At(TI),II=[9,13,27,32],zp=jn&&"CompositionEvent"in window,_o=null;jn&&"documentMode"in document&&(_o=document.documentMode);var kI=jn&&"TextEvent"in window&&!_o,Bw=jn&&(!zp||_o&&8<_o&&11>=_o),_y=String.fromCharCode(32),wy=!1;function Vw(t,e){switch(t){case"keyup":return II.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ww(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Bi=!1;function PI(t,e){switch(t){case"compositionend":return Ww(e);case"keypress":return e.which!==32?null:(wy=!0,_y);case"textInput":return t=e.data,t===_y&&wy?null:t;default:return null}}function OI(t,e){if(Bi)return t==="compositionend"||!zp&&Vw(t,e)?(t=zw(),xl=$p=ar=null,Bi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Bw&&e.locale!=="ko"?null:e.data;default:return null}}var RI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!RI[t.type]:e==="textarea"}function Hw(t,e,n,r){Ew(r),e=au(e,"onChange"),0<e.length&&(n=new jp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var wo=null,zo=null;function NI(t){n1(t,0)}function cc(t){var e=Hi(t);if(mw(e))return t}function AI(t,e){if(t==="change")return e}var Gw=!1;if(jn){var kd;if(jn){var Pd="oninput"in document;if(!Pd){var Ey=document.createElement("div");Ey.setAttribute("oninput","return;"),Pd=typeof Ey.oninput=="function"}kd=Pd}else kd=!1;Gw=kd&&(!document.documentMode||9<document.documentMode)}function xy(){wo&&(wo.detachEvent("onpropertychange",Kw),zo=wo=null)}function Kw(t){if(t.propertyName==="value"&&cc(zo)){var e=[];Hw(e,zo,t,Ap(t)),bw(NI,e)}}function DI(t,e,n){t==="focusin"?(xy(),wo=e,zo=n,wo.attachEvent("onpropertychange",Kw)):t==="focusout"&&xy()}function LI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cc(zo)}function MI(t,e){if(t==="click")return cc(e)}function FI(t,e){if(t==="input"||t==="change")return cc(e)}function $I(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var un=typeof Object.is=="function"?Object.is:$I;function Bo(t,e){if(un(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Af.call(e,i)||!un(t[i],e[i]))return!1}return!0}function Cy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ty(t,e){var n=Cy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cy(n)}}function qw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?qw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Yw(){for(var t=window,e=eu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=eu(t.document)}return e}function Bp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function jI(t){var e=Yw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&qw(n.ownerDocument.documentElement,n)){if(r!==null&&Bp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ty(n,s);var o=Ty(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var UI=jn&&"documentMode"in document&&11>=document.documentMode,Vi=null,Jf=null,So=null,Zf=!1;function by(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zf||Vi==null||Vi!==eu(r)||(r=Vi,"selectionStart"in r&&Bp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),So&&Bo(So,r)||(So=r,r=au(Jf,"onSelect"),0<r.length&&(e=new jp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Vi)))}function Za(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Wi={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionend:Za("Transition","TransitionEnd")},Od={},Qw={};jn&&(Qw=document.createElement("div").style,"AnimationEvent"in window||(delete Wi.animationend.animation,delete Wi.animationiteration.animation,delete Wi.animationstart.animation),"TransitionEvent"in window||delete Wi.transitionend.transition);function dc(t){if(Od[t])return Od[t];if(!Wi[t])return t;var e=Wi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Qw)return Od[t]=e[n];return t}var Xw=dc("animationend"),Jw=dc("animationiteration"),Zw=dc("animationstart"),e1=dc("transitionend"),t1=new Map,Iy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(t,e){t1.set(t,e),bi(e,[t])}for(var Rd=0;Rd<Iy.length;Rd++){var Nd=Iy[Rd],zI=Nd.toLowerCase(),BI=Nd[0].toUpperCase()+Nd.slice(1);Ar(zI,"on"+BI)}Ar(Xw,"onAnimationEnd");Ar(Jw,"onAnimationIteration");Ar(Zw,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(e1,"onTransitionEnd");ps("onMouseEnter",["mouseout","mouseover"]);ps("onMouseLeave",["mouseout","mouseover"]);ps("onPointerEnter",["pointerout","pointerover"]);ps("onPointerLeave",["pointerout","pointerover"]);bi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bi("onBeforeInput",["compositionend","keypress","textInput","paste"]);bi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VI=new Set("cancel close invalid load scroll toggle".split(" ").concat(fo));function ky(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,zb(r,e,void 0,t),t.currentTarget=null}function n1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;ky(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;ky(i,a,u),s=l}}}if(nu)throw t=qf,nu=!1,qf=null,t}function fe(t,e){var n=e[ih];n===void 0&&(n=e[ih]=new Set);var r=t+"__bubble";n.has(r)||(r1(e,t,2,!1),n.add(r))}function Ad(t,e,n){var r=0;e&&(r|=4),r1(n,t,r,e)}var el="_reactListening"+Math.random().toString(36).slice(2);function Vo(t){if(!t[el]){t[el]=!0,cw.forEach(function(n){n!=="selectionchange"&&(VI.has(n)||Ad(n,!1,t),Ad(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[el]||(e[el]=!0,Ad("selectionchange",!1,e))}}function r1(t,e,n,r){switch(Uw(e)){case 1:var i=rI;break;case 4:i=iI;break;default:i=Fp}n=i.bind(null,e,n,t),i=void 0,!Kf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Dd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Xr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}bw(function(){var u=s,c=Ap(n),d=[];e:{var f=t1.get(t);if(f!==void 0){var m=jp,g=t;switch(t){case"keypress":if(Cl(n)===0)break e;case"keydown":case"keyup":m=_I;break;case"focusin":g="focus",m=Id;break;case"focusout":g="blur",m=Id;break;case"beforeblur":case"afterblur":m=Id;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=gy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=aI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=EI;break;case Xw:case Jw:case Zw:m=cI;break;case e1:m=CI;break;case"scroll":m=sI;break;case"wheel":m=bI;break;case"copy":case"cut":case"paste":m=fI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=vy}var v=(e&4)!==0,w=!v&&t==="scroll",p=v?f!==null?f+"Capture":null:f;v=[];for(var h=u,y;h!==null;){y=h;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,p!==null&&(E=Fo(h,p),E!=null&&v.push(Wo(h,E,y)))),w)break;h=h.return}0<v.length&&(f=new m(f,g,null,n,c),d.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Hf&&(g=n.relatedTarget||n.fromElement)&&(Xr(g)||g[Un]))break e;if((m||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=u,g=g?Xr(g):null,g!==null&&(w=Ii(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=u),m!==g)){if(v=gy,E="onMouseLeave",p="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(v=vy,E="onPointerLeave",p="onPointerEnter",h="pointer"),w=m==null?f:Hi(m),y=g==null?f:Hi(g),f=new v(E,h+"leave",m,n,c),f.target=w,f.relatedTarget=y,E=null,Xr(c)===u&&(v=new v(p,h+"enter",g,n,c),v.target=y,v.relatedTarget=w,E=v),w=E,m&&g)t:{for(v=m,p=g,h=0,y=v;y;y=Mi(y))h++;for(y=0,E=p;E;E=Mi(E))y++;for(;0<h-y;)v=Mi(v),h--;for(;0<y-h;)p=Mi(p),y--;for(;h--;){if(v===p||p!==null&&v===p.alternate)break t;v=Mi(v),p=Mi(p)}v=null}else v=null;m!==null&&Py(d,f,m,v,!1),g!==null&&w!==null&&Py(d,w,g,v,!0)}}e:{if(f=u?Hi(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var x=AI;else if(Sy(f))if(Gw)x=FI;else{x=LI;var C=DI}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(x=MI);if(x&&(x=x(t,u))){Hw(d,x,n,c);break e}C&&C(t,f,u),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Uf(f,"number",f.value)}switch(C=u?Hi(u):window,t){case"focusin":(Sy(C)||C.contentEditable==="true")&&(Vi=C,Jf=u,So=null);break;case"focusout":So=Jf=Vi=null;break;case"mousedown":Zf=!0;break;case"contextmenu":case"mouseup":case"dragend":Zf=!1,by(d,n,c);break;case"selectionchange":if(UI)break;case"keydown":case"keyup":by(d,n,c)}var S;if(zp)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Bi?Vw(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Bw&&n.locale!=="ko"&&(Bi||P!=="onCompositionStart"?P==="onCompositionEnd"&&Bi&&(S=zw()):(ar=c,$p="value"in ar?ar.value:ar.textContent,Bi=!0)),C=au(u,P),0<C.length&&(P=new yy(P,t,null,n,c),d.push({event:P,listeners:C}),S?P.data=S:(S=Ww(n),S!==null&&(P.data=S)))),(S=kI?PI(t,n):OI(t,n))&&(u=au(u,"onBeforeInput"),0<u.length&&(c=new yy("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=S))}n1(d,e)})}function Wo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function au(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Fo(t,n),s!=null&&r.unshift(Wo(t,s,i)),s=Fo(t,e),s!=null&&r.push(Wo(t,s,i))),t=t.return}return r}function Mi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Py(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Fo(n,s),l!=null&&o.unshift(Wo(n,l,a))):i||(l=Fo(n,s),l!=null&&o.push(Wo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var WI=/\r\n?/g,HI=/\u0000|\uFFFD/g;function Oy(t){return(typeof t=="string"?t:""+t).replace(WI,`
`).replace(HI,"")}function tl(t,e,n){if(e=Oy(e),Oy(t)!==e&&n)throw Error(I(425))}function lu(){}var eh=null,th=null;function nh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var rh=typeof setTimeout=="function"?setTimeout:void 0,GI=typeof clearTimeout=="function"?clearTimeout:void 0,Ry=typeof Promise=="function"?Promise:void 0,KI=typeof queueMicrotask=="function"?queueMicrotask:typeof Ry<"u"?function(t){return Ry.resolve(null).then(t).catch(qI)}:rh;function qI(t){setTimeout(function(){throw t})}function Ld(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Uo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Uo(e)}function hr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ny(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Us=Math.random().toString(36).slice(2),gn="__reactFiber$"+Us,Ho="__reactProps$"+Us,Un="__reactContainer$"+Us,ih="__reactEvents$"+Us,YI="__reactListeners$"+Us,QI="__reactHandles$"+Us;function Xr(t){var e=t[gn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Un]||n[gn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ny(t);t!==null;){if(n=t[gn])return n;t=Ny(t)}return e}t=n,n=t.parentNode}return null}function ba(t){return t=t[gn]||t[Un],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Hi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function fc(t){return t[Ho]||null}var sh=[],Gi=-1;function Dr(t){return{current:t}}function ge(t){0>Gi||(t.current=sh[Gi],sh[Gi]=null,Gi--)}function de(t,e){Gi++,sh[Gi]=t.current,t.current=e}var br={},et=Dr(br),pt=Dr(!1),fi=br;function ms(t,e){var n=t.type.contextTypes;if(!n)return br;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function mt(t){return t=t.childContextTypes,t!=null}function uu(){ge(pt),ge(et)}function Ay(t,e,n){if(et.current!==br)throw Error(I(168));de(et,e),de(pt,n)}function i1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,Db(t)||"Unknown",i));return we({},n,r)}function cu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||br,fi=et.current,de(et,t),de(pt,pt.current),!0}function Dy(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=i1(t,e,fi),r.__reactInternalMemoizedMergedChildContext=t,ge(pt),ge(et),de(et,t)):ge(pt),de(pt,n)}var Rn=null,hc=!1,Md=!1;function s1(t){Rn===null?Rn=[t]:Rn.push(t)}function XI(t){hc=!0,s1(t)}function Lr(){if(!Md&&Rn!==null){Md=!0;var t=0,e=ie;try{var n=Rn;for(ie=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Rn=null,hc=!1}catch(i){throw Rn!==null&&(Rn=Rn.slice(t+1)),Ow(Dp,Lr),i}finally{ie=e,Md=!1}}return null}var Ki=[],qi=0,du=null,fu=0,$t=[],jt=0,hi=null,An=1,Dn="";function Wr(t,e){Ki[qi++]=fu,Ki[qi++]=du,du=t,fu=e}function o1(t,e,n){$t[jt++]=An,$t[jt++]=Dn,$t[jt++]=hi,hi=t;var r=An;t=Dn;var i=32-rn(r)-1;r&=~(1<<i),n+=1;var s=32-rn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,An=1<<32-rn(e)+i|n<<i|r,Dn=s+t}else An=1<<s|n<<i|r,Dn=t}function Vp(t){t.return!==null&&(Wr(t,1),o1(t,1,0))}function Wp(t){for(;t===du;)du=Ki[--qi],Ki[qi]=null,fu=Ki[--qi],Ki[qi]=null;for(;t===hi;)hi=$t[--jt],$t[jt]=null,Dn=$t[--jt],$t[jt]=null,An=$t[--jt],$t[jt]=null}var bt=null,Et=null,ye=!1,Jt=null;function a1(t,e){var n=Ut(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ly(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,bt=t,Et=hr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,bt=t,Et=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=hi!==null?{id:An,overflow:Dn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ut(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,bt=t,Et=null,!0):!1;default:return!1}}function oh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ah(t){if(ye){var e=Et;if(e){var n=e;if(!Ly(t,e)){if(oh(t))throw Error(I(418));e=hr(n.nextSibling);var r=bt;e&&Ly(t,e)?a1(r,n):(t.flags=t.flags&-4097|2,ye=!1,bt=t)}}else{if(oh(t))throw Error(I(418));t.flags=t.flags&-4097|2,ye=!1,bt=t}}}function My(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bt=t}function nl(t){if(t!==bt)return!1;if(!ye)return My(t),ye=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!nh(t.type,t.memoizedProps)),e&&(e=Et)){if(oh(t))throw l1(),Error(I(418));for(;e;)a1(t,e),e=hr(e.nextSibling)}if(My(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Et=hr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Et=null}}else Et=bt?hr(t.stateNode.nextSibling):null;return!0}function l1(){for(var t=Et;t;)t=hr(t.nextSibling)}function gs(){Et=bt=null,ye=!1}function Hp(t){Jt===null?Jt=[t]:Jt.push(t)}var JI=Gn.ReactCurrentBatchConfig;function Qt(t,e){if(t&&t.defaultProps){e=we({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var hu=Dr(null),pu=null,Yi=null,Gp=null;function Kp(){Gp=Yi=pu=null}function qp(t){var e=hu.current;ge(hu),t._currentValue=e}function lh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function os(t,e){pu=t,Gp=Yi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dt=!0),t.firstContext=null)}function Bt(t){var e=t._currentValue;if(Gp!==t)if(t={context:t,memoizedValue:e,next:null},Yi===null){if(pu===null)throw Error(I(308));Yi=t,pu.dependencies={lanes:0,firstContext:t}}else Yi=Yi.next=t;return e}var Jr=null;function Yp(t){Jr===null?Jr=[t]:Jr.push(t)}function u1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Yp(e)):(n.next=i.next,i.next=n),e.interleaved=n,zn(t,r)}function zn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var er=!1;function Qp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function c1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Fn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function pr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,zn(t,n)}return i=r.interleaved,i===null?(e.next=e,Yp(r)):(e.next=i.next,i.next=e),r.interleaved=e,zn(t,n)}function Tl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Lp(t,n)}}function Fy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function mu(t,e,n,r){var i=t.updateQueue;er=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,v=a;switch(f=e,m=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){d=g.call(m,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,f=typeof g=="function"?g.call(m,d,f):g,f==null)break e;d=we({},d,f);break e;case 2:er=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);mi|=o,t.lanes=o,t.memoizedState=d}}function $y(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var d1=new uw.Component().refs;function uh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:we({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var pc={isMounted:function(t){return(t=t._reactInternals)?Ii(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=st(),i=gr(t),s=Fn(r,i);s.payload=e,n!=null&&(s.callback=n),e=pr(t,s,i),e!==null&&(sn(e,t,i,r),Tl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=st(),i=gr(t),s=Fn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=pr(t,s,i),e!==null&&(sn(e,t,i,r),Tl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=st(),r=gr(t),i=Fn(n,r);i.tag=2,e!=null&&(i.callback=e),e=pr(t,i,r),e!==null&&(sn(e,t,r,n),Tl(e,t,r))}};function jy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Bo(n,r)||!Bo(i,s):!0}function f1(t,e,n){var r=!1,i=br,s=e.contextType;return typeof s=="object"&&s!==null?s=Bt(s):(i=mt(e)?fi:et.current,r=e.contextTypes,s=(r=r!=null)?ms(t,i):br),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=pc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Uy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&pc.enqueueReplaceState(e,e.state,null)}function ch(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=d1,Qp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Bt(s):(s=mt(e)?fi:et.current,i.context=ms(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(uh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&pc.enqueueReplaceState(i,i.state,null),mu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Zs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===d1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function rl(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function zy(t){var e=t._init;return e(t._payload)}function h1(t){function e(p,h){if(t){var y=p.deletions;y===null?(p.deletions=[h],p.flags|=16):y.push(h)}}function n(p,h){if(!t)return null;for(;h!==null;)e(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=yr(p,h),p.index=0,p.sibling=null,p}function s(p,h,y){return p.index=y,t?(y=p.alternate,y!==null?(y=y.index,y<h?(p.flags|=2,h):y):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,h,y,E){return h===null||h.tag!==6?(h=Vd(y,p.mode,E),h.return=p,h):(h=i(h,y),h.return=p,h)}function l(p,h,y,E){var x=y.type;return x===zi?c(p,h,y.props.children,E,y.key):h!==null&&(h.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Zn&&zy(x)===h.type)?(E=i(h,y.props),E.ref=Zs(p,h,y),E.return=p,E):(E=Rl(y.type,y.key,y.props,null,p.mode,E),E.ref=Zs(p,h,y),E.return=p,E)}function u(p,h,y,E){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=Wd(y,p.mode,E),h.return=p,h):(h=i(h,y.children||[]),h.return=p,h)}function c(p,h,y,E,x){return h===null||h.tag!==7?(h=si(y,p.mode,E,x),h.return=p,h):(h=i(h,y),h.return=p,h)}function d(p,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Vd(""+h,p.mode,y),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ga:return y=Rl(h.type,h.key,h.props,null,p.mode,y),y.ref=Zs(p,null,h),y.return=p,y;case Ui:return h=Wd(h,p.mode,y),h.return=p,h;case Zn:var E=h._init;return d(p,E(h._payload),y)}if(uo(h)||qs(h))return h=si(h,p.mode,y,null),h.return=p,h;rl(p,h)}return null}function f(p,h,y,E){var x=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return x!==null?null:a(p,h,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ga:return y.key===x?l(p,h,y,E):null;case Ui:return y.key===x?u(p,h,y,E):null;case Zn:return x=y._init,f(p,h,x(y._payload),E)}if(uo(y)||qs(y))return x!==null?null:c(p,h,y,E,null);rl(p,y)}return null}function m(p,h,y,E,x){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(y)||null,a(h,p,""+E,x);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ga:return p=p.get(E.key===null?y:E.key)||null,l(h,p,E,x);case Ui:return p=p.get(E.key===null?y:E.key)||null,u(h,p,E,x);case Zn:var C=E._init;return m(p,h,y,C(E._payload),x)}if(uo(E)||qs(E))return p=p.get(y)||null,c(h,p,E,x,null);rl(h,E)}return null}function g(p,h,y,E){for(var x=null,C=null,S=h,P=h=0,j=null;S!==null&&P<y.length;P++){S.index>P?(j=S,S=null):j=S.sibling;var L=f(p,S,y[P],E);if(L===null){S===null&&(S=j);break}t&&S&&L.alternate===null&&e(p,S),h=s(L,h,P),C===null?x=L:C.sibling=L,C=L,S=j}if(P===y.length)return n(p,S),ye&&Wr(p,P),x;if(S===null){for(;P<y.length;P++)S=d(p,y[P],E),S!==null&&(h=s(S,h,P),C===null?x=S:C.sibling=S,C=S);return ye&&Wr(p,P),x}for(S=r(p,S);P<y.length;P++)j=m(S,p,P,y[P],E),j!==null&&(t&&j.alternate!==null&&S.delete(j.key===null?P:j.key),h=s(j,h,P),C===null?x=j:C.sibling=j,C=j);return t&&S.forEach(function(G){return e(p,G)}),ye&&Wr(p,P),x}function v(p,h,y,E){var x=qs(y);if(typeof x!="function")throw Error(I(150));if(y=x.call(y),y==null)throw Error(I(151));for(var C=x=null,S=h,P=h=0,j=null,L=y.next();S!==null&&!L.done;P++,L=y.next()){S.index>P?(j=S,S=null):j=S.sibling;var G=f(p,S,L.value,E);if(G===null){S===null&&(S=j);break}t&&S&&G.alternate===null&&e(p,S),h=s(G,h,P),C===null?x=G:C.sibling=G,C=G,S=j}if(L.done)return n(p,S),ye&&Wr(p,P),x;if(S===null){for(;!L.done;P++,L=y.next())L=d(p,L.value,E),L!==null&&(h=s(L,h,P),C===null?x=L:C.sibling=L,C=L);return ye&&Wr(p,P),x}for(S=r(p,S);!L.done;P++,L=y.next())L=m(S,p,P,L.value,E),L!==null&&(t&&L.alternate!==null&&S.delete(L.key===null?P:L.key),h=s(L,h,P),C===null?x=L:C.sibling=L,C=L);return t&&S.forEach(function(Lt){return e(p,Lt)}),ye&&Wr(p,P),x}function w(p,h,y,E){if(typeof y=="object"&&y!==null&&y.type===zi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ga:e:{for(var x=y.key,C=h;C!==null;){if(C.key===x){if(x=y.type,x===zi){if(C.tag===7){n(p,C.sibling),h=i(C,y.props.children),h.return=p,p=h;break e}}else if(C.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Zn&&zy(x)===C.type){n(p,C.sibling),h=i(C,y.props),h.ref=Zs(p,C,y),h.return=p,p=h;break e}n(p,C);break}else e(p,C);C=C.sibling}y.type===zi?(h=si(y.props.children,p.mode,E,y.key),h.return=p,p=h):(E=Rl(y.type,y.key,y.props,null,p.mode,E),E.ref=Zs(p,h,y),E.return=p,p=E)}return o(p);case Ui:e:{for(C=y.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){n(p,h.sibling),h=i(h,y.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else e(p,h);h=h.sibling}h=Wd(y,p.mode,E),h.return=p,p=h}return o(p);case Zn:return C=y._init,w(p,h,C(y._payload),E)}if(uo(y))return g(p,h,y,E);if(qs(y))return v(p,h,y,E);rl(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,y),h.return=p,p=h):(n(p,h),h=Vd(y,p.mode,E),h.return=p,p=h),o(p)):n(p,h)}return w}var ys=h1(!0),p1=h1(!1),Ia={},vn=Dr(Ia),Go=Dr(Ia),Ko=Dr(Ia);function Zr(t){if(t===Ia)throw Error(I(174));return t}function Xp(t,e){switch(de(Ko,e),de(Go,t),de(vn,Ia),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Bf(e,t)}ge(vn),de(vn,e)}function vs(){ge(vn),ge(Go),ge(Ko)}function m1(t){Zr(Ko.current);var e=Zr(vn.current),n=Bf(e,t.type);e!==n&&(de(Go,t),de(vn,n))}function Jp(t){Go.current===t&&(ge(vn),ge(Go))}var ve=Dr(0);function gu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fd=[];function Zp(){for(var t=0;t<Fd.length;t++)Fd[t]._workInProgressVersionPrimary=null;Fd.length=0}var bl=Gn.ReactCurrentDispatcher,$d=Gn.ReactCurrentBatchConfig,pi=0,_e=null,ke=null,Le=null,yu=!1,Eo=!1,qo=0,ZI=0;function Ye(){throw Error(I(321))}function em(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!un(t[n],e[n]))return!1;return!0}function tm(t,e,n,r,i,s){if(pi=s,_e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,bl.current=t===null||t.memoizedState===null?rk:ik,t=n(r,i),Eo){s=0;do{if(Eo=!1,qo=0,25<=s)throw Error(I(301));s+=1,Le=ke=null,e.updateQueue=null,bl.current=sk,t=n(r,i)}while(Eo)}if(bl.current=vu,e=ke!==null&&ke.next!==null,pi=0,Le=ke=_e=null,yu=!1,e)throw Error(I(300));return t}function nm(){var t=qo!==0;return qo=0,t}function dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?_e.memoizedState=Le=t:Le=Le.next=t,Le}function Vt(){if(ke===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=ke.next;var e=Le===null?_e.memoizedState:Le.next;if(e!==null)Le=e,ke=t;else{if(t===null)throw Error(I(310));ke=t,t={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Le===null?_e.memoizedState=Le=t:Le=Le.next=t}return Le}function Yo(t,e){return typeof e=="function"?e(t):e}function jd(t){var e=Vt(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=ke,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((pi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,_e.lanes|=c,mi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,un(r,e.memoizedState)||(dt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,_e.lanes|=s,mi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ud(t){var e=Vt(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);un(s,e.memoizedState)||(dt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function g1(){}function y1(t,e){var n=_e,r=Vt(),i=e(),s=!un(r.memoizedState,i);if(s&&(r.memoizedState=i,dt=!0),r=r.queue,rm(w1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,Qo(9,_1.bind(null,n,r,i,e),void 0,null),$e===null)throw Error(I(349));pi&30||v1(n,e,i)}return i}function v1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function _1(t,e,n,r){e.value=n,e.getSnapshot=r,S1(e)&&E1(t)}function w1(t,e,n){return n(function(){S1(e)&&E1(t)})}function S1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!un(t,n)}catch{return!0}}function E1(t){var e=zn(t,1);e!==null&&sn(e,t,1,-1)}function By(t){var e=dn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yo,lastRenderedState:t},e.queue=t,t=t.dispatch=nk.bind(null,_e,t),[e.memoizedState,t]}function Qo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function x1(){return Vt().memoizedState}function Il(t,e,n,r){var i=dn();_e.flags|=t,i.memoizedState=Qo(1|e,n,void 0,r===void 0?null:r)}function mc(t,e,n,r){var i=Vt();r=r===void 0?null:r;var s=void 0;if(ke!==null){var o=ke.memoizedState;if(s=o.destroy,r!==null&&em(r,o.deps)){i.memoizedState=Qo(e,n,s,r);return}}_e.flags|=t,i.memoizedState=Qo(1|e,n,s,r)}function Vy(t,e){return Il(8390656,8,t,e)}function rm(t,e){return mc(2048,8,t,e)}function C1(t,e){return mc(4,2,t,e)}function T1(t,e){return mc(4,4,t,e)}function b1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function I1(t,e,n){return n=n!=null?n.concat([t]):null,mc(4,4,b1.bind(null,e,t),n)}function im(){}function k1(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&em(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function P1(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&em(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function O1(t,e,n){return pi&21?(un(n,e)||(n=Aw(),_e.lanes|=n,mi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dt=!0),t.memoizedState=n)}function ek(t,e){var n=ie;ie=n!==0&&4>n?n:4,t(!0);var r=$d.transition;$d.transition={};try{t(!1),e()}finally{ie=n,$d.transition=r}}function R1(){return Vt().memoizedState}function tk(t,e,n){var r=gr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},N1(t))A1(e,n);else if(n=u1(t,e,n,r),n!==null){var i=st();sn(n,t,r,i),D1(n,e,r)}}function nk(t,e,n){var r=gr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(N1(t))A1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,un(a,o)){var l=e.interleaved;l===null?(i.next=i,Yp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=u1(t,e,i,r),n!==null&&(i=st(),sn(n,t,r,i),D1(n,e,r))}}function N1(t){var e=t.alternate;return t===_e||e!==null&&e===_e}function A1(t,e){Eo=yu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function D1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Lp(t,n)}}var vu={readContext:Bt,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},rk={readContext:Bt,useCallback:function(t,e){return dn().memoizedState=[t,e===void 0?null:e],t},useContext:Bt,useEffect:Vy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Il(4194308,4,b1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Il(4194308,4,t,e)},useInsertionEffect:function(t,e){return Il(4,2,t,e)},useMemo:function(t,e){var n=dn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=dn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=tk.bind(null,_e,t),[r.memoizedState,t]},useRef:function(t){var e=dn();return t={current:t},e.memoizedState=t},useState:By,useDebugValue:im,useDeferredValue:function(t){return dn().memoizedState=t},useTransition:function(){var t=By(!1),e=t[0];return t=ek.bind(null,t[1]),dn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=_e,i=dn();if(ye){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),$e===null)throw Error(I(349));pi&30||v1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Vy(w1.bind(null,r,s,t),[t]),r.flags|=2048,Qo(9,_1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=dn(),e=$e.identifierPrefix;if(ye){var n=Dn,r=An;n=(r&~(1<<32-rn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=qo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ZI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ik={readContext:Bt,useCallback:k1,useContext:Bt,useEffect:rm,useImperativeHandle:I1,useInsertionEffect:C1,useLayoutEffect:T1,useMemo:P1,useReducer:jd,useRef:x1,useState:function(){return jd(Yo)},useDebugValue:im,useDeferredValue:function(t){var e=Vt();return O1(e,ke.memoizedState,t)},useTransition:function(){var t=jd(Yo)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:g1,useSyncExternalStore:y1,useId:R1,unstable_isNewReconciler:!1},sk={readContext:Bt,useCallback:k1,useContext:Bt,useEffect:rm,useImperativeHandle:I1,useInsertionEffect:C1,useLayoutEffect:T1,useMemo:P1,useReducer:Ud,useRef:x1,useState:function(){return Ud(Yo)},useDebugValue:im,useDeferredValue:function(t){var e=Vt();return ke===null?e.memoizedState=t:O1(e,ke.memoizedState,t)},useTransition:function(){var t=Ud(Yo)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:g1,useSyncExternalStore:y1,useId:R1,unstable_isNewReconciler:!1};function _s(t,e){try{var n="",r=e;do n+=Ab(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function zd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function dh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ok=typeof WeakMap=="function"?WeakMap:Map;function L1(t,e,n){n=Fn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){wu||(wu=!0,Sh=r),dh(t,e)},n}function M1(t,e,n){n=Fn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){dh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){dh(t,e),typeof r!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Wy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ok;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=wk.bind(null,t,e,n),e.then(t,t))}function Hy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Fn(-1,1),e.tag=2,pr(n,e,1))),n.lanes|=1),t)}var ak=Gn.ReactCurrentOwner,dt=!1;function nt(t,e,n,r){e.child=t===null?p1(e,null,n,r):ys(e,t.child,n,r)}function Ky(t,e,n,r,i){n=n.render;var s=e.ref;return os(e,i),r=tm(t,e,n,r,s,i),n=nm(),t!==null&&!dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Bn(t,e,i)):(ye&&n&&Vp(e),e.flags|=1,nt(t,e,r,i),e.child)}function qy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!fm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,F1(t,e,s,r,i)):(t=Rl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Bo,n(o,r)&&t.ref===e.ref)return Bn(t,e,i)}return e.flags|=1,t=yr(s,r),t.ref=e.ref,t.return=e,e.child=t}function F1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Bo(s,r)&&t.ref===e.ref)if(dt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(dt=!0);else return e.lanes=t.lanes,Bn(t,e,i)}return fh(t,e,n,r,i)}function $1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Xi,St),St|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,de(Xi,St),St|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(Xi,St),St|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,de(Xi,St),St|=r;return nt(t,e,i,n),e.child}function j1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function fh(t,e,n,r,i){var s=mt(n)?fi:et.current;return s=ms(e,s),os(e,i),n=tm(t,e,n,r,s,i),r=nm(),t!==null&&!dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Bn(t,e,i)):(ye&&r&&Vp(e),e.flags|=1,nt(t,e,n,i),e.child)}function Yy(t,e,n,r,i){if(mt(n)){var s=!0;cu(e)}else s=!1;if(os(e,i),e.stateNode===null)kl(t,e),f1(e,n,r),ch(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Bt(u):(u=mt(n)?fi:et.current,u=ms(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Uy(e,o,r,u),er=!1;var f=e.memoizedState;o.state=f,mu(e,r,o,i),l=e.memoizedState,a!==r||f!==l||pt.current||er?(typeof c=="function"&&(uh(e,n,c,r),l=e.memoizedState),(a=er||jy(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,c1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Qt(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Bt(l):(l=mt(n)?fi:et.current,l=ms(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Uy(e,o,r,l),er=!1,f=e.memoizedState,o.state=f,mu(e,r,o,i);var g=e.memoizedState;a!==d||f!==g||pt.current||er?(typeof m=="function"&&(uh(e,n,m,r),g=e.memoizedState),(u=er||jy(e,n,u,r,f,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return hh(t,e,n,r,s,i)}function hh(t,e,n,r,i,s){j1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Dy(e,n,!1),Bn(t,e,s);r=e.stateNode,ak.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ys(e,t.child,null,s),e.child=ys(e,null,a,s)):nt(t,e,a,s),e.memoizedState=r.state,i&&Dy(e,n,!0),e.child}function U1(t){var e=t.stateNode;e.pendingContext?Ay(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ay(t,e.context,!1),Xp(t,e.containerInfo)}function Qy(t,e,n,r,i){return gs(),Hp(i),e.flags|=256,nt(t,e,n,r),e.child}var ph={dehydrated:null,treeContext:null,retryLane:0};function mh(t){return{baseLanes:t,cachePool:null,transitions:null}}function z1(t,e,n){var r=e.pendingProps,i=ve.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),de(ve,i&1),t===null)return ah(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=vc(o,r,0,null),t=si(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=mh(n),e.memoizedState=ph,t):sm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return lk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=yr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=yr(a,s):(s=si(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?mh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ph,r}return s=t.child,t=s.sibling,r=yr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function sm(t,e){return e=vc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function il(t,e,n,r){return r!==null&&Hp(r),ys(e,t.child,null,n),t=sm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function lk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=zd(Error(I(422))),il(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=vc({mode:"visible",children:r.children},i,0,null),s=si(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ys(e,t.child,null,o),e.child.memoizedState=mh(o),e.memoizedState=ph,s);if(!(e.mode&1))return il(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(I(419)),r=zd(s,r,void 0),il(t,e,o,r)}if(a=(o&t.childLanes)!==0,dt||a){if(r=$e,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,zn(t,i),sn(r,t,i,-1))}return dm(),r=zd(Error(I(421))),il(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Sk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Et=hr(i.nextSibling),bt=e,ye=!0,Jt=null,t!==null&&($t[jt++]=An,$t[jt++]=Dn,$t[jt++]=hi,An=t.id,Dn=t.overflow,hi=e),e=sm(e,r.children),e.flags|=4096,e)}function Xy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),lh(t.return,e,n)}function Bd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function B1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(nt(t,e,r.children,n),r=ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xy(t,n,e);else if(t.tag===19)Xy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(de(ve,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&gu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Bd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&gu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Bd(e,!0,n,null,s);break;case"together":Bd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function kl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Bn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),mi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=yr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=yr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function uk(t,e,n){switch(e.tag){case 3:U1(e),gs();break;case 5:m1(e);break;case 1:mt(e.type)&&cu(e);break;case 4:Xp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;de(hu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(de(ve,ve.current&1),e.flags|=128,null):n&e.child.childLanes?z1(t,e,n):(de(ve,ve.current&1),t=Bn(t,e,n),t!==null?t.sibling:null);de(ve,ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return B1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(ve,ve.current),r)break;return null;case 22:case 23:return e.lanes=0,$1(t,e,n)}return Bn(t,e,n)}var V1,gh,W1,H1;V1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gh=function(){};W1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Zr(vn.current);var s=null;switch(n){case"input":i=$f(t,i),r=$f(t,r),s=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),s=[];break;case"textarea":i=zf(t,i),r=zf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=lu)}Vf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Lo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Lo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&fe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};H1=function(t,e,n,r){n!==r&&(e.flags|=4)};function eo(t,e){if(!ye)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Qe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function ck(t,e,n){var r=e.pendingProps;switch(Wp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(e),null;case 1:return mt(e.type)&&uu(),Qe(e),null;case 3:return r=e.stateNode,vs(),ge(pt),ge(et),Zp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(nl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Jt!==null&&(Ch(Jt),Jt=null))),gh(t,e),Qe(e),null;case 5:Jp(e);var i=Zr(Ko.current);if(n=e.type,t!==null&&e.stateNode!=null)W1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return Qe(e),null}if(t=Zr(vn.current),nl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[gn]=e,r[Ho]=s,t=(e.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<fo.length;i++)fe(fo[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":oy(r,s),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},fe("invalid",r);break;case"textarea":ly(r,s),fe("invalid",r)}Vf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&tl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&tl(r.textContent,a,t),i=["children",""+a]):Lo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&fe("scroll",r)}switch(n){case"input":Ka(r),ay(r,s,!0);break;case"textarea":Ka(r),uy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=lu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=vw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[gn]=e,t[Ho]=r,V1(t,e,!1,!1),e.stateNode=t;e:{switch(o=Wf(n,r),n){case"dialog":fe("cancel",t),fe("close",t),i=r;break;case"iframe":case"object":case"embed":fe("load",t),i=r;break;case"video":case"audio":for(i=0;i<fo.length;i++)fe(fo[i],t);i=r;break;case"source":fe("error",t),i=r;break;case"img":case"image":case"link":fe("error",t),fe("load",t),i=r;break;case"details":fe("toggle",t),i=r;break;case"input":oy(t,r),i=$f(t,r),fe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),fe("invalid",t);break;case"textarea":ly(t,r),i=zf(t,r),fe("invalid",t);break;default:i=r}Vf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Sw(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&_w(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Mo(t,l):typeof l=="number"&&Mo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Lo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&fe("scroll",t):l!=null&&Pp(t,s,l,o))}switch(n){case"input":Ka(t),ay(t,r,!1);break;case"textarea":Ka(t),uy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Tr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ns(t,!!r.multiple,s,!1):r.defaultValue!=null&&ns(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=lu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qe(e),null;case 6:if(t&&e.stateNode!=null)H1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=Zr(Ko.current),Zr(vn.current),nl(e)){if(r=e.stateNode,n=e.memoizedProps,r[gn]=e,(s=r.nodeValue!==n)&&(t=bt,t!==null))switch(t.tag){case 3:tl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&tl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gn]=e,e.stateNode=r}return Qe(e),null;case 13:if(ge(ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ye&&Et!==null&&e.mode&1&&!(e.flags&128))l1(),gs(),e.flags|=98560,s=!1;else if(s=nl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(I(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[gn]=e}else gs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qe(e),s=!1}else Jt!==null&&(Ch(Jt),Jt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ve.current&1?Re===0&&(Re=3):dm())),e.updateQueue!==null&&(e.flags|=4),Qe(e),null);case 4:return vs(),gh(t,e),t===null&&Vo(e.stateNode.containerInfo),Qe(e),null;case 10:return qp(e.type._context),Qe(e),null;case 17:return mt(e.type)&&uu(),Qe(e),null;case 19:if(ge(ve),s=e.memoizedState,s===null)return Qe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)eo(s,!1);else{if(Re!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=gu(t),o!==null){for(e.flags|=128,eo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return de(ve,ve.current&1|2),e.child}t=t.sibling}s.tail!==null&&xe()>ws&&(e.flags|=128,r=!0,eo(s,!1),e.lanes=4194304)}else{if(!r)if(t=gu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),eo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ye)return Qe(e),null}else 2*xe()-s.renderingStartTime>ws&&n!==1073741824&&(e.flags|=128,r=!0,eo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xe(),e.sibling=null,n=ve.current,de(ve,r?n&1|2:n&1),e):(Qe(e),null);case 22:case 23:return cm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?St&1073741824&&(Qe(e),e.subtreeFlags&6&&(e.flags|=8192)):Qe(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function dk(t,e){switch(Wp(e),e.tag){case 1:return mt(e.type)&&uu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return vs(),ge(pt),ge(et),Zp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Jp(e),null;case 13:if(ge(ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));gs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(ve),null;case 4:return vs(),null;case 10:return qp(e.type._context),null;case 22:case 23:return cm(),null;case 24:return null;default:return null}}var sl=!1,Je=!1,fk=typeof WeakSet=="function"?WeakSet:Set,N=null;function Qi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(t,e,r)}else n.current=null}function yh(t,e,n){try{n()}catch(r){Se(t,e,r)}}var Jy=!1;function hk(t,e){if(eh=su,t=Yw(),Bp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(th={focusedElem:t,selectionRange:n},su=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,w=g.memoizedState,p=e.stateNode,h=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:Qt(e.type,v),w);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(E){Se(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return g=Jy,Jy=!1,g}function xo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&yh(e,n,s)}i=i.next}while(i!==r)}}function gc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function vh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function G1(t){var e=t.alternate;e!==null&&(t.alternate=null,G1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[gn],delete e[Ho],delete e[ih],delete e[YI],delete e[QI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function K1(t){return t.tag===5||t.tag===3||t.tag===4}function Zy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||K1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _h(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=lu));else if(r!==4&&(t=t.child,t!==null))for(_h(t,e,n),t=t.sibling;t!==null;)_h(t,e,n),t=t.sibling}function wh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(wh(t,e,n),t=t.sibling;t!==null;)wh(t,e,n),t=t.sibling}var Be=null,Xt=!1;function Qn(t,e,n){for(n=n.child;n!==null;)q1(t,e,n),n=n.sibling}function q1(t,e,n){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(lc,n)}catch{}switch(n.tag){case 5:Je||Qi(n,e);case 6:var r=Be,i=Xt;Be=null,Qn(t,e,n),Be=r,Xt=i,Be!==null&&(Xt?(t=Be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(Xt?(t=Be,n=n.stateNode,t.nodeType===8?Ld(t.parentNode,n):t.nodeType===1&&Ld(t,n),Uo(t)):Ld(Be,n.stateNode));break;case 4:r=Be,i=Xt,Be=n.stateNode.containerInfo,Xt=!0,Qn(t,e,n),Be=r,Xt=i;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&yh(n,e,o),i=i.next}while(i!==r)}Qn(t,e,n);break;case 1:if(!Je&&(Qi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Se(n,e,a)}Qn(t,e,n);break;case 21:Qn(t,e,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,Qn(t,e,n),Je=r):Qn(t,e,n);break;default:Qn(t,e,n)}}function ev(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new fk),e.forEach(function(r){var i=Ek.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Kt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Be=a.stateNode,Xt=!1;break e;case 3:Be=a.stateNode.containerInfo,Xt=!0;break e;case 4:Be=a.stateNode.containerInfo,Xt=!0;break e}a=a.return}if(Be===null)throw Error(I(160));q1(s,o,i),Be=null,Xt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Se(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Y1(e,t),e=e.sibling}function Y1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kt(e,t),cn(t),r&4){try{xo(3,t,t.return),gc(3,t)}catch(v){Se(t,t.return,v)}try{xo(5,t,t.return)}catch(v){Se(t,t.return,v)}}break;case 1:Kt(e,t),cn(t),r&512&&n!==null&&Qi(n,n.return);break;case 5:if(Kt(e,t),cn(t),r&512&&n!==null&&Qi(n,n.return),t.flags&32){var i=t.stateNode;try{Mo(i,"")}catch(v){Se(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&gw(i,s),Wf(a,o);var u=Wf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Sw(i,d):c==="dangerouslySetInnerHTML"?_w(i,d):c==="children"?Mo(i,d):Pp(i,c,d,u)}switch(a){case"input":jf(i,s);break;case"textarea":yw(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ns(i,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?ns(i,!!s.multiple,s.defaultValue,!0):ns(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ho]=s}catch(v){Se(t,t.return,v)}}break;case 6:if(Kt(e,t),cn(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Se(t,t.return,v)}}break;case 3:if(Kt(e,t),cn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Uo(e.containerInfo)}catch(v){Se(t,t.return,v)}break;case 4:Kt(e,t),cn(t);break;case 13:Kt(e,t),cn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(lm=xe())),r&4&&ev(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Je=(u=Je)||c,Kt(e,t),Je=u):Kt(e,t),cn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(N=t,c=t.child;c!==null;){for(d=N=c;N!==null;){switch(f=N,m=f.child,f.tag){case 0:case 11:case 14:case 15:xo(4,f,f.return);break;case 1:Qi(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){Se(r,n,v)}}break;case 5:Qi(f,f.return);break;case 22:if(f.memoizedState!==null){nv(d);continue}}m!==null?(m.return=f,N=m):nv(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ww("display",o))}catch(v){Se(t,t.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){Se(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Kt(e,t),cn(t),r&4&&ev(t);break;case 21:break;default:Kt(e,t),cn(t)}}function cn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(K1(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Mo(i,""),r.flags&=-33);var s=Zy(t);wh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Zy(t);_h(t,a,o);break;default:throw Error(I(161))}}catch(l){Se(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function pk(t,e,n){N=t,Q1(t)}function Q1(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||sl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Je;a=sl;var u=Je;if(sl=o,(Je=l)&&!u)for(N=i;N!==null;)o=N,l=o.child,o.tag===22&&o.memoizedState!==null?rv(i):l!==null?(l.return=o,N=l):rv(i);for(;s!==null;)N=s,Q1(s),s=s.sibling;N=i,sl=a,Je=u}tv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):tv(t)}}function tv(t){for(;N!==null;){var e=N;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Je||gc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Je)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Qt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&$y(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}$y(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Uo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}Je||e.flags&512&&vh(e)}catch(f){Se(e,e.return,f)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function nv(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function rv(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{gc(4,e)}catch(l){Se(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Se(e,i,l)}}var s=e.return;try{vh(e)}catch(l){Se(e,s,l)}break;case 5:var o=e.return;try{vh(e)}catch(l){Se(e,o,l)}}}catch(l){Se(e,e.return,l)}if(e===t){N=null;break}var a=e.sibling;if(a!==null){a.return=e.return,N=a;break}N=e.return}}var mk=Math.ceil,_u=Gn.ReactCurrentDispatcher,om=Gn.ReactCurrentOwner,zt=Gn.ReactCurrentBatchConfig,Y=0,$e=null,Ie=null,He=0,St=0,Xi=Dr(0),Re=0,Xo=null,mi=0,yc=0,am=0,Co=null,ut=null,lm=0,ws=1/0,Pn=null,wu=!1,Sh=null,mr=null,ol=!1,lr=null,Su=0,To=0,Eh=null,Pl=-1,Ol=0;function st(){return Y&6?xe():Pl!==-1?Pl:Pl=xe()}function gr(t){return t.mode&1?Y&2&&He!==0?He&-He:JI.transition!==null?(Ol===0&&(Ol=Aw()),Ol):(t=ie,t!==0||(t=window.event,t=t===void 0?16:Uw(t.type)),t):1}function sn(t,e,n,r){if(50<To)throw To=0,Eh=null,Error(I(185));Ca(t,n,r),(!(Y&2)||t!==$e)&&(t===$e&&(!(Y&2)&&(yc|=n),Re===4&&nr(t,He)),gt(t,r),n===1&&Y===0&&!(e.mode&1)&&(ws=xe()+500,hc&&Lr()))}function gt(t,e){var n=t.callbackNode;Jb(t,e);var r=iu(t,t===$e?He:0);if(r===0)n!==null&&fy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&fy(n),e===1)t.tag===0?XI(iv.bind(null,t)):s1(iv.bind(null,t)),KI(function(){!(Y&6)&&Lr()}),n=null;else{switch(Dw(r)){case 1:n=Dp;break;case 4:n=Rw;break;case 16:n=ru;break;case 536870912:n=Nw;break;default:n=ru}n=iS(n,X1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function X1(t,e){if(Pl=-1,Ol=0,Y&6)throw Error(I(327));var n=t.callbackNode;if(as()&&t.callbackNode!==n)return null;var r=iu(t,t===$e?He:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Eu(t,r);else{e=r;var i=Y;Y|=2;var s=Z1();($e!==t||He!==e)&&(Pn=null,ws=xe()+500,ii(t,e));do try{vk();break}catch(a){J1(t,a)}while(1);Kp(),_u.current=s,Y=i,Ie!==null?e=0:($e=null,He=0,e=Re)}if(e!==0){if(e===2&&(i=Yf(t),i!==0&&(r=i,e=xh(t,i))),e===1)throw n=Xo,ii(t,0),nr(t,r),gt(t,xe()),n;if(e===6)nr(t,r);else{if(i=t.current.alternate,!(r&30)&&!gk(i)&&(e=Eu(t,r),e===2&&(s=Yf(t),s!==0&&(r=s,e=xh(t,s))),e===1))throw n=Xo,ii(t,0),nr(t,r),gt(t,xe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:Hr(t,ut,Pn);break;case 3:if(nr(t,r),(r&130023424)===r&&(e=lm+500-xe(),10<e)){if(iu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){st(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=rh(Hr.bind(null,t,ut,Pn),e);break}Hr(t,ut,Pn);break;case 4:if(nr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-rn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mk(r/1960))-r,10<r){t.timeoutHandle=rh(Hr.bind(null,t,ut,Pn),r);break}Hr(t,ut,Pn);break;case 5:Hr(t,ut,Pn);break;default:throw Error(I(329))}}}return gt(t,xe()),t.callbackNode===n?X1.bind(null,t):null}function xh(t,e){var n=Co;return t.current.memoizedState.isDehydrated&&(ii(t,e).flags|=256),t=Eu(t,e),t!==2&&(e=ut,ut=n,e!==null&&Ch(e)),t}function Ch(t){ut===null?ut=t:ut.push.apply(ut,t)}function gk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!un(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function nr(t,e){for(e&=~am,e&=~yc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-rn(e),r=1<<n;t[n]=-1,e&=~r}}function iv(t){if(Y&6)throw Error(I(327));as();var e=iu(t,0);if(!(e&1))return gt(t,xe()),null;var n=Eu(t,e);if(t.tag!==0&&n===2){var r=Yf(t);r!==0&&(e=r,n=xh(t,r))}if(n===1)throw n=Xo,ii(t,0),nr(t,e),gt(t,xe()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Hr(t,ut,Pn),gt(t,xe()),null}function um(t,e){var n=Y;Y|=1;try{return t(e)}finally{Y=n,Y===0&&(ws=xe()+500,hc&&Lr())}}function gi(t){lr!==null&&lr.tag===0&&!(Y&6)&&as();var e=Y;Y|=1;var n=zt.transition,r=ie;try{if(zt.transition=null,ie=1,t)return t()}finally{ie=r,zt.transition=n,Y=e,!(Y&6)&&Lr()}}function cm(){St=Xi.current,ge(Xi)}function ii(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,GI(n)),Ie!==null)for(n=Ie.return;n!==null;){var r=n;switch(Wp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&uu();break;case 3:vs(),ge(pt),ge(et),Zp();break;case 5:Jp(r);break;case 4:vs();break;case 13:ge(ve);break;case 19:ge(ve);break;case 10:qp(r.type._context);break;case 22:case 23:cm()}n=n.return}if($e=t,Ie=t=yr(t.current,null),He=St=e,Re=0,Xo=null,am=yc=mi=0,ut=Co=null,Jr!==null){for(e=0;e<Jr.length;e++)if(n=Jr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Jr=null}return t}function J1(t,e){do{var n=Ie;try{if(Kp(),bl.current=vu,yu){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}yu=!1}if(pi=0,Le=ke=_e=null,Eo=!1,qo=0,om.current=null,n===null||n.return===null){Re=1,Xo=e,Ie=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=He,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Hy(o);if(m!==null){m.flags&=-257,Gy(m,o,a,s,e),m.mode&1&&Wy(s,u,e),e=m,l=u;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if(!(e&1)){Wy(s,u,e),dm();break e}l=Error(I(426))}}else if(ye&&a.mode&1){var w=Hy(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Gy(w,o,a,s,e),Hp(_s(l,a));break e}}s=l=_s(l,a),Re!==4&&(Re=2),Co===null?Co=[s]:Co.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=L1(s,l,e);Fy(s,p);break e;case 1:a=l;var h=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(mr===null||!mr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=M1(s,a,e);Fy(s,E);break e}}s=s.return}while(s!==null)}tS(n)}catch(x){e=x,Ie===n&&n!==null&&(Ie=n=n.return);continue}break}while(1)}function Z1(){var t=_u.current;return _u.current=vu,t===null?vu:t}function dm(){(Re===0||Re===3||Re===2)&&(Re=4),$e===null||!(mi&268435455)&&!(yc&268435455)||nr($e,He)}function Eu(t,e){var n=Y;Y|=2;var r=Z1();($e!==t||He!==e)&&(Pn=null,ii(t,e));do try{yk();break}catch(i){J1(t,i)}while(1);if(Kp(),Y=n,_u.current=r,Ie!==null)throw Error(I(261));return $e=null,He=0,Re}function yk(){for(;Ie!==null;)eS(Ie)}function vk(){for(;Ie!==null&&!Vb();)eS(Ie)}function eS(t){var e=rS(t.alternate,t,St);t.memoizedProps=t.pendingProps,e===null?tS(t):Ie=e,om.current=null}function tS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=dk(n,e),n!==null){n.flags&=32767,Ie=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Re=6,Ie=null;return}}else if(n=ck(n,e,St),n!==null){Ie=n;return}if(e=e.sibling,e!==null){Ie=e;return}Ie=e=t}while(e!==null);Re===0&&(Re=5)}function Hr(t,e,n){var r=ie,i=zt.transition;try{zt.transition=null,ie=1,_k(t,e,n,r)}finally{zt.transition=i,ie=r}return null}function _k(t,e,n,r){do as();while(lr!==null);if(Y&6)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Zb(t,s),t===$e&&(Ie=$e=null,He=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ol||(ol=!0,iS(ru,function(){return as(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=zt.transition,zt.transition=null;var o=ie;ie=1;var a=Y;Y|=4,om.current=null,hk(t,n),Y1(n,t),jI(th),su=!!eh,th=eh=null,t.current=n,pk(n),Wb(),Y=a,ie=o,zt.transition=s}else t.current=n;if(ol&&(ol=!1,lr=t,Su=i),s=t.pendingLanes,s===0&&(mr=null),Kb(n.stateNode),gt(t,xe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(wu)throw wu=!1,t=Sh,Sh=null,t;return Su&1&&t.tag!==0&&as(),s=t.pendingLanes,s&1?t===Eh?To++:(To=0,Eh=t):To=0,Lr(),null}function as(){if(lr!==null){var t=Dw(Su),e=zt.transition,n=ie;try{if(zt.transition=null,ie=16>t?16:t,lr===null)var r=!1;else{if(t=lr,lr=null,Su=0,Y&6)throw Error(I(331));var i=Y;for(Y|=4,N=t.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(N=u;N!==null;){var c=N;switch(c.tag){case 0:case 11:case 15:xo(8,c,s)}var d=c.child;if(d!==null)d.return=c,N=d;else for(;N!==null;){c=N;var f=c.sibling,m=c.return;if(G1(c),c===u){N=null;break}if(f!==null){f.return=m,N=f;break}N=m}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:xo(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,N=p;break e}N=s.return}}var h=t.current;for(N=h;N!==null;){o=N;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,N=y;else e:for(o=h;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:gc(9,a)}}catch(x){Se(a,a.return,x)}if(a===o){N=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,N=E;break e}N=a.return}}if(Y=i,Lr(),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(lc,t)}catch{}r=!0}return r}finally{ie=n,zt.transition=e}}return!1}function sv(t,e,n){e=_s(n,e),e=L1(t,e,1),t=pr(t,e,1),e=st(),t!==null&&(Ca(t,1,e),gt(t,e))}function Se(t,e,n){if(t.tag===3)sv(t,t,n);else for(;e!==null;){if(e.tag===3){sv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mr===null||!mr.has(r))){t=_s(n,t),t=M1(e,t,1),e=pr(e,t,1),t=st(),e!==null&&(Ca(e,1,t),gt(e,t));break}}e=e.return}}function wk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=st(),t.pingedLanes|=t.suspendedLanes&n,$e===t&&(He&n)===n&&(Re===4||Re===3&&(He&130023424)===He&&500>xe()-lm?ii(t,0):am|=n),gt(t,e)}function nS(t,e){e===0&&(t.mode&1?(e=Qa,Qa<<=1,!(Qa&130023424)&&(Qa=4194304)):e=1);var n=st();t=zn(t,e),t!==null&&(Ca(t,e,n),gt(t,n))}function Sk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),nS(t,n)}function Ek(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),nS(t,n)}var rS;rS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pt.current)dt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dt=!1,uk(t,e,n);dt=!!(t.flags&131072)}else dt=!1,ye&&e.flags&1048576&&o1(e,fu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;kl(t,e),t=e.pendingProps;var i=ms(e,et.current);os(e,n),i=tm(null,e,r,t,i,n);var s=nm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mt(r)?(s=!0,cu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Qp(e),i.updater=pc,e.stateNode=i,i._reactInternals=e,ch(e,r,t,n),e=hh(null,e,r,!0,s,n)):(e.tag=0,ye&&s&&Vp(e),nt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(kl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Ck(r),t=Qt(r,t),i){case 0:e=fh(null,e,r,t,n);break e;case 1:e=Yy(null,e,r,t,n);break e;case 11:e=Ky(null,e,r,t,n);break e;case 14:e=qy(null,e,r,Qt(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),fh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),Yy(t,e,r,i,n);case 3:e:{if(U1(e),t===null)throw Error(I(387));r=e.pendingProps,s=e.memoizedState,i=s.element,c1(t,e),mu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=_s(Error(I(423)),e),e=Qy(t,e,r,n,i);break e}else if(r!==i){i=_s(Error(I(424)),e),e=Qy(t,e,r,n,i);break e}else for(Et=hr(e.stateNode.containerInfo.firstChild),bt=e,ye=!0,Jt=null,n=p1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gs(),r===i){e=Bn(t,e,n);break e}nt(t,e,r,n)}e=e.child}return e;case 5:return m1(e),t===null&&ah(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,nh(r,i)?o=null:s!==null&&nh(r,s)&&(e.flags|=32),j1(t,e),nt(t,e,o,n),e.child;case 6:return t===null&&ah(e),null;case 13:return z1(t,e,n);case 4:return Xp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ys(e,null,r,n):nt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),Ky(t,e,r,i,n);case 7:return nt(t,e,e.pendingProps,n),e.child;case 8:return nt(t,e,e.pendingProps.children,n),e.child;case 12:return nt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,de(hu,r._currentValue),r._currentValue=o,s!==null)if(un(s.value,o)){if(s.children===i.children&&!pt.current){e=Bn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Fn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),lh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(I(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),lh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}nt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,os(e,n),i=Bt(i),r=r(i),e.flags|=1,nt(t,e,r,n),e.child;case 14:return r=e.type,i=Qt(r,e.pendingProps),i=Qt(r.type,i),qy(t,e,r,i,n);case 15:return F1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),kl(t,e),e.tag=1,mt(r)?(t=!0,cu(e)):t=!1,os(e,n),f1(e,r,i),ch(e,r,i,n),hh(null,e,r,!0,t,n);case 19:return B1(t,e,n);case 22:return $1(t,e,n)}throw Error(I(156,e.tag))};function iS(t,e){return Ow(t,e)}function xk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(t,e,n,r){return new xk(t,e,n,r)}function fm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ck(t){if(typeof t=="function")return fm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Rp)return 11;if(t===Np)return 14}return 2}function yr(t,e){var n=t.alternate;return n===null?(n=Ut(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Rl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")fm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case zi:return si(n.children,i,s,e);case Op:o=8,i|=8;break;case Df:return t=Ut(12,n,e,i|2),t.elementType=Df,t.lanes=s,t;case Lf:return t=Ut(13,n,e,i),t.elementType=Lf,t.lanes=s,t;case Mf:return t=Ut(19,n,e,i),t.elementType=Mf,t.lanes=s,t;case hw:return vc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case dw:o=10;break e;case fw:o=9;break e;case Rp:o=11;break e;case Np:o=14;break e;case Zn:o=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=Ut(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function si(t,e,n,r){return t=Ut(7,t,r,e),t.lanes=n,t}function vc(t,e,n,r){return t=Ut(22,t,r,e),t.elementType=hw,t.lanes=n,t.stateNode={isHidden:!1},t}function Vd(t,e,n){return t=Ut(6,t,null,e),t.lanes=n,t}function Wd(t,e,n){return e=Ut(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Tk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cd(0),this.expirationTimes=Cd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function hm(t,e,n,r,i,s,o,a,l){return t=new Tk(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ut(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qp(s),t}function bk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ui,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function sS(t){if(!t)return br;t=t._reactInternals;e:{if(Ii(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(mt(n))return i1(t,n,e)}return e}function oS(t,e,n,r,i,s,o,a,l){return t=hm(n,r,!0,t,i,s,o,a,l),t.context=sS(null),n=t.current,r=st(),i=gr(n),s=Fn(r,i),s.callback=e??null,pr(n,s,i),t.current.lanes=i,Ca(t,i,r),gt(t,r),t}function _c(t,e,n,r){var i=e.current,s=st(),o=gr(i);return n=sS(n),e.context===null?e.context=n:e.pendingContext=n,e=Fn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=pr(i,e,o),t!==null&&(sn(t,i,o,s),Tl(t,i,o)),o}function xu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ov(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function pm(t,e){ov(t,e),(t=t.alternate)&&ov(t,e)}function Ik(){return null}var aS=typeof reportError=="function"?reportError:function(t){console.error(t)};function mm(t){this._internalRoot=t}wc.prototype.render=mm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));_c(t,e,null,null)};wc.prototype.unmount=mm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;gi(function(){_c(null,t,null,null)}),e[Un]=null}};function wc(t){this._internalRoot=t}wc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Fw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<tr.length&&e!==0&&e<tr[n].priority;n++);tr.splice(n,0,t),n===0&&jw(t)}};function gm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function av(){}function kk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=xu(o);s.call(u)}}var o=oS(e,r,t,0,null,!1,!1,"",av);return t._reactRootContainer=o,t[Un]=o.current,Vo(t.nodeType===8?t.parentNode:t),gi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=xu(l);a.call(u)}}var l=hm(t,0,!1,null,null,!1,!1,"",av);return t._reactRootContainer=l,t[Un]=l.current,Vo(t.nodeType===8?t.parentNode:t),gi(function(){_c(e,l,n,r)}),l}function Ec(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=xu(o);a.call(l)}}_c(e,o,t,i)}else o=kk(n,e,t,i,r);return xu(o)}Lw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=co(e.pendingLanes);n!==0&&(Lp(e,n|1),gt(e,xe()),!(Y&6)&&(ws=xe()+500,Lr()))}break;case 13:gi(function(){var r=zn(t,1);if(r!==null){var i=st();sn(r,t,1,i)}}),pm(t,1)}};Mp=function(t){if(t.tag===13){var e=zn(t,134217728);if(e!==null){var n=st();sn(e,t,134217728,n)}pm(t,134217728)}};Mw=function(t){if(t.tag===13){var e=gr(t),n=zn(t,e);if(n!==null){var r=st();sn(n,t,e,r)}pm(t,e)}};Fw=function(){return ie};$w=function(t,e){var n=ie;try{return ie=t,e()}finally{ie=n}};Gf=function(t,e,n){switch(e){case"input":if(jf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=fc(r);if(!i)throw Error(I(90));mw(r),jf(r,i)}}}break;case"textarea":yw(t,n);break;case"select":e=n.value,e!=null&&ns(t,!!n.multiple,e,!1)}};Cw=um;Tw=gi;var Pk={usingClientEntryPoint:!1,Events:[ba,Hi,fc,Ew,xw,um]},to={findFiberByHostInstance:Xr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ok={bundleType:to.bundleType,version:to.version,rendererPackageName:to.rendererPackageName,rendererConfig:to.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=kw(t),t===null?null:t.stateNode},findFiberByHostInstance:to.findFiberByHostInstance||Ik,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!al.isDisabled&&al.supportsFiber)try{lc=al.inject(Ok),yn=al}catch{}}Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pk;Nt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gm(e))throw Error(I(200));return bk(t,e,null,n)};Nt.createRoot=function(t,e){if(!gm(t))throw Error(I(299));var n=!1,r="",i=aS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=hm(t,1,!1,null,null,n,!1,r,i),t[Un]=e.current,Vo(t.nodeType===8?t.parentNode:t),new mm(e)};Nt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=kw(e),t=t===null?null:t.stateNode,t};Nt.flushSync=function(t){return gi(t)};Nt.hydrate=function(t,e,n){if(!Sc(e))throw Error(I(200));return Ec(null,t,e,!0,n)};Nt.hydrateRoot=function(t,e,n){if(!gm(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=aS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=oS(e,null,t,1,n??null,i,!1,s,o),t[Un]=e.current,Vo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new wc(e)};Nt.render=function(t,e,n){if(!Sc(e))throw Error(I(200));return Ec(null,t,e,!1,n)};Nt.unmountComponentAtNode=function(t){if(!Sc(t))throw Error(I(40));return t._reactRootContainer?(gi(function(){Ec(null,null,t,!1,function(){t._reactRootContainer=null,t[Un]=null})}),!0):!1};Nt.unstable_batchedUpdates=um;Nt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Sc(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return Ec(t,e,n,!1,r)};Nt.version="18.2.0-next-9e3b772b8-20220608";function lS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lS)}catch(t){console.error(t)}}lS(),ow.exports=Nt;var uS=ow.exports,lv=uS;Nf.createRoot=lv.createRoot,Nf.hydrateRoot=lv.hydrateRoot;var ft=function(){return ft=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},ft.apply(this,arguments)};function ym(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Cu(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}function cS(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var Rk=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Nk=cS(function(t){return Rk.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),he="-ms-",bo="-moz-",ee="-webkit-",dS="comm",xc="rule",vm="decl",Ak="@import",fS="@keyframes",Dk="@layer",Lk=Math.abs,_m=String.fromCharCode,Th=Object.assign;function Mk(t,e){return Me(t,0)^45?(((e<<2^Me(t,0))<<2^Me(t,1))<<2^Me(t,2))<<2^Me(t,3):0}function hS(t){return t.trim()}function On(t,e){return(t=e.exec(t))?t[0]:t}function B(t,e,n){return t.replace(e,n)}function Nl(t,e){return t.indexOf(e)}function Me(t,e){return t.charCodeAt(e)|0}function Ss(t,e,n){return t.slice(e,n)}function hn(t){return t.length}function pS(t){return t.length}function ho(t,e){return e.push(t),t}function Fk(t,e){return t.map(e).join("")}function uv(t,e){return t.filter(function(n){return!On(n,e)})}var Cc=1,Es=1,mS=0,Wt=0,Te=0,zs="";function Tc(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Cc,column:Es,length:o,return:"",siblings:a}}function Jn(t,e){return Th(Tc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Fi(t){for(;t.root;)t=Jn(t.root,{children:[t]});ho(t,t.siblings)}function $k(){return Te}function jk(){return Te=Wt>0?Me(zs,--Wt):0,Es--,Te===10&&(Es=1,Cc--),Te}function on(){return Te=Wt<mS?Me(zs,Wt++):0,Es++,Te===10&&(Es=1,Cc++),Te}function oi(){return Me(zs,Wt)}function Al(){return Wt}function bc(t,e){return Ss(zs,t,e)}function bh(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Uk(t){return Cc=Es=1,mS=hn(zs=t),Wt=0,[]}function zk(t){return zs="",t}function Hd(t){return hS(bc(Wt-1,Ih(t===91?t+2:t===40?t+1:t)))}function Bk(t){for(;(Te=oi())&&Te<33;)on();return bh(t)>2||bh(Te)>3?"":" "}function Vk(t,e){for(;--e&&on()&&!(Te<48||Te>102||Te>57&&Te<65||Te>70&&Te<97););return bc(t,Al()+(e<6&&oi()==32&&on()==32))}function Ih(t){for(;on();)switch(Te){case t:return Wt;case 34:case 39:t!==34&&t!==39&&Ih(Te);break;case 40:t===41&&Ih(t);break;case 92:on();break}return Wt}function Wk(t,e){for(;on()&&t+Te!==47+10;)if(t+Te===42+42&&oi()===47)break;return"/*"+bc(e,Wt-1)+"*"+_m(t===47?t:on())}function Hk(t){for(;!bh(oi());)on();return bc(t,Wt)}function Gk(t){return zk(Dl("",null,null,null,[""],t=Uk(t),0,[0],t))}function Dl(t,e,n,r,i,s,o,a,l){for(var u=0,c=0,d=o,f=0,m=0,g=0,v=1,w=1,p=1,h=0,y="",E=i,x=s,C=r,S=y;w;)switch(g=h,h=on()){case 40:if(g!=108&&Me(S,d-1)==58){Nl(S+=B(Hd(h),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:S+=Hd(h);break;case 9:case 10:case 13:case 32:S+=Bk(g);break;case 92:S+=Vk(Al()-1,7);continue;case 47:switch(oi()){case 42:case 47:ho(Kk(Wk(on(),Al()),e,n,l),l);break;default:S+="/"}break;case 123*v:a[u++]=hn(S)*p;case 125*v:case 59:case 0:switch(h){case 0:case 125:w=0;case 59+c:p==-1&&(S=B(S,/\f/g,"")),m>0&&hn(S)-d&&ho(m>32?dv(S+";",r,n,d-1,l):dv(B(S," ","")+";",r,n,d-2,l),l);break;case 59:S+=";";default:if(ho(C=cv(S,e,n,u,c,i,a,y,E=[],x=[],d,s),s),h===123)if(c===0)Dl(S,e,C,C,E,s,d,a,x);else switch(f===99&&Me(S,3)===110?100:f){case 100:case 108:case 109:case 115:Dl(t,C,C,r&&ho(cv(t,C,C,0,0,i,a,y,i,E=[],d,x),x),i,x,d,a,r?E:x);break;default:Dl(S,C,C,C,[""],x,0,a,x)}}u=c=m=0,v=p=1,y=S="",d=o;break;case 58:d=1+hn(S),m=g;default:if(v<1){if(h==123)--v;else if(h==125&&v++==0&&jk()==125)continue}switch(S+=_m(h),h*v){case 38:p=c>0?1:(S+="\f",-1);break;case 44:a[u++]=(hn(S)-1)*p,p=1;break;case 64:oi()===45&&(S+=Hd(on())),f=oi(),c=d=hn(y=S+=Hk(Al())),h++;break;case 45:g===45&&hn(S)==2&&(v=0)}}return s}function cv(t,e,n,r,i,s,o,a,l,u,c,d){for(var f=i-1,m=i===0?s:[""],g=pS(m),v=0,w=0,p=0;v<r;++v)for(var h=0,y=Ss(t,f+1,f=Lk(w=o[v])),E=t;h<g;++h)(E=hS(w>0?m[h]+" "+y:B(y,/&\f/g,m[h])))&&(l[p++]=E);return Tc(t,e,n,i===0?xc:a,l,u,c,d)}function Kk(t,e,n,r){return Tc(t,e,n,dS,_m($k()),Ss(t,2,-2),0,r)}function dv(t,e,n,r,i){return Tc(t,e,n,vm,Ss(t,0,r),Ss(t,r+1,-1),r,i)}function gS(t,e,n){switch(Mk(t,e)){case 5103:return ee+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ee+t+t;case 4789:return bo+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ee+t+bo+t+he+t+t;case 5936:switch(Me(t,e+11)){case 114:return ee+t+he+B(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ee+t+he+B(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ee+t+he+B(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ee+t+he+t+t;case 6165:return ee+t+he+"flex-"+t+t;case 5187:return ee+t+B(t,/(\w+).+(:[^]+)/,ee+"box-$1$2"+he+"flex-$1$2")+t;case 5443:return ee+t+he+"flex-item-"+B(t,/flex-|-self/g,"")+(On(t,/flex-|baseline/)?"":he+"grid-row-"+B(t,/flex-|-self/g,""))+t;case 4675:return ee+t+he+"flex-line-pack"+B(t,/align-content|flex-|-self/g,"")+t;case 5548:return ee+t+he+B(t,"shrink","negative")+t;case 5292:return ee+t+he+B(t,"basis","preferred-size")+t;case 6060:return ee+"box-"+B(t,"-grow","")+ee+t+he+B(t,"grow","positive")+t;case 4554:return ee+B(t,/([^-])(transform)/g,"$1"+ee+"$2")+t;case 6187:return B(B(B(t,/(zoom-|grab)/,ee+"$1"),/(image-set)/,ee+"$1"),t,"")+t;case 5495:case 3959:return B(t,/(image-set\([^]*)/,ee+"$1$`$1");case 4968:return B(B(t,/(.+:)(flex-)?(.*)/,ee+"box-pack:$3"+he+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ee+t+t;case 4200:if(!On(t,/flex-|baseline/))return he+"grid-column-align"+Ss(t,e)+t;break;case 2592:case 3360:return he+B(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,On(r.props,/grid-\w+-end/)})?~Nl(t+(n=n[e].value),"span")?t:he+B(t,"-start","")+t+he+"grid-row-span:"+(~Nl(n,"span")?On(n,/\d+/):+On(n,/\d+/)-+On(t,/\d+/))+";":he+B(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return On(r.props,/grid-\w+-start/)})?t:he+B(B(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return B(t,/(.+)-inline(.+)/,ee+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(hn(t)-1-e>6)switch(Me(t,e+1)){case 109:if(Me(t,e+4)!==45)break;case 102:return B(t,/(.+:)(.+)-([^]+)/,"$1"+ee+"$2-$3$1"+bo+(Me(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Nl(t,"stretch")?gS(B(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return B(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return he+i+":"+s+u+(o?he+i+"-span:"+(a?l:+l-+s)+u:"")+t});case 4949:if(Me(t,e+6)===121)return B(t,":",":"+ee)+t;break;case 6444:switch(Me(t,Me(t,14)===45?18:11)){case 120:return B(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ee+(Me(t,14)===45?"inline-":"")+"box$3$1"+ee+"$2$3$1"+he+"$2box$3")+t;case 100:return B(t,":",":"+he)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return B(t,"scroll-","scroll-snap-")+t}return t}function Tu(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function qk(t,e,n,r){switch(t.type){case Dk:if(t.children.length)break;case Ak:case vm:return t.return=t.return||t.value;case dS:return"";case fS:return t.return=t.value+"{"+Tu(t.children,r)+"}";case xc:if(!hn(t.value=t.props.join(",")))return""}return hn(n=Tu(t.children,r))?t.return=t.value+"{"+n+"}":""}function Yk(t){var e=pS(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function Qk(t){return function(e){e.root||(e=e.return)&&t(e)}}function Xk(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case vm:t.return=gS(t.value,t.length,n);return;case fS:return Tu([Jn(t,{value:B(t.value,"@","@"+ee)})],r);case xc:if(t.length)return Fk(n=t.props,function(i){switch(On(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Fi(Jn(t,{props:[B(i,/:(read-\w+)/,":"+bo+"$1")]})),Fi(Jn(t,{props:[i]})),Th(t,{props:uv(n,r)});break;case"::placeholder":Fi(Jn(t,{props:[B(i,/:(plac\w+)/,":"+ee+"input-$1")]})),Fi(Jn(t,{props:[B(i,/:(plac\w+)/,":"+bo+"$1")]})),Fi(Jn(t,{props:[B(i,/:(plac\w+)/,he+"input-$1")]})),Fi(Jn(t,{props:[i]})),Th(t,{props:uv(n,r)});break}return""})}}var yS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xs=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",wm=typeof window<"u"&&"HTMLElement"in window,Jk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Ic=Object.freeze([]),Cs=Object.freeze({});function Zk(t,e,n){return n===void 0&&(n=Cs),t.theme!==n.theme&&t.theme||e||n.theme}var vS=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),eP=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,tP=/(^-|-$)/g;function fv(t){return t.replace(eP,"-").replace(tP,"")}var nP=/(a)(d)/gi,hv=function(t){return String.fromCharCode(t+(t>25?39:97))};function kh(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=hv(e%52)+n;return(hv(e%52)+n).replace(nP,"$1-$2")}var Gd,Ji=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},_S=function(t){return Ji(5381,t)};function rP(t){return kh(_S(t)>>>0)}function iP(t){return t.displayName||t.name||"Component"}function Kd(t){return typeof t=="string"&&!0}var wS=typeof Symbol=="function"&&Symbol.for,SS=wS?Symbol.for("react.memo"):60115,sP=wS?Symbol.for("react.forward_ref"):60112,oP={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},aP={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ES={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},lP=((Gd={})[sP]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Gd[SS]=ES,Gd);function pv(t){return("type"in(e=t)&&e.type.$$typeof)===SS?ES:"$$typeof"in t?lP[t.$$typeof]:oP;var e}var uP=Object.defineProperty,cP=Object.getOwnPropertyNames,mv=Object.getOwnPropertySymbols,dP=Object.getOwnPropertyDescriptor,fP=Object.getPrototypeOf,gv=Object.prototype;function xS(t,e,n){if(typeof e!="string"){if(gv){var r=fP(e);r&&r!==gv&&xS(t,r,n)}var i=cP(e);mv&&(i=i.concat(mv(e)));for(var s=pv(t),o=pv(e),a=0;a<i.length;++a){var l=i[a];if(!(l in aP||n&&n[l]||o&&l in o||s&&l in s)){var u=dP(e,l);try{uP(t,l,u)}catch{}}}}return t}function Ts(t){return typeof t=="function"}function Sm(t){return typeof t=="object"&&"styledComponentId"in t}function ei(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function yv(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function Jo(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Ph(t,e,n){if(n===void 0&&(n=!1),!n&&!Jo(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Ph(t[r],e[r]);else if(Jo(e))for(var r in e)t[r]=Ph(t[r],e[r]);return t}function Em(t,e){Object.defineProperty(t,"toString",{value:e})}function ka(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var hP=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw ka(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},t}(),Ll=new Map,bu=new Map,qd=1,ll=function(t){if(Ll.has(t))return Ll.get(t);for(;bu.has(qd);)qd++;var e=qd++;return Ll.set(t,e),bu.set(e,t),e},pP=function(t,e){Ll.set(t,e),bu.set(e,t)},mP="style[".concat(xs,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),gP=new RegExp("^".concat(xs,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),yP=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},vP=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(gP);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(pP(c,u),yP(t,c,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function _P(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var CS=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(xs,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(xs,"active"),r.setAttribute("data-styled-version","6.0.7");var o=_P();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},wP=function(){function t(e){this.element=CS(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw ka(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),SP=function(){function t(e){this.element=CS(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),EP=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),vv=wm,xP={isServer:!wm,useCSSOMInjection:!Jk},TS=function(){function t(e,n,r){e===void 0&&(e=Cs),n===void 0&&(n={});var i=this;this.options=ft(ft({},xP),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&wm&&vv&&(vv=!1,function(s){for(var o=document.querySelectorAll(mP),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(xs)!=="active"&&(vP(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Em(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(d){var f=function(p){return bu.get(p)}(d);if(f===void 0)return"continue";var m=s.names.get(f),g=o.getGroup(d);if(m===void 0||g.length===0)return"continue";var v="".concat(xs,".g").concat(d,'[id="').concat(f,'"]'),w="";m!==void 0&&m.forEach(function(p){p.length>0&&(w+="".concat(p,","))}),l+="".concat(g).concat(v,'{content:"').concat(w,'"}').concat(`/*!sc*/
`)},c=0;c<a;c++)u(c);return l}(i)})}return t.registerId=function(e){return ll(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(ft(ft({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new EP(i):r?new wP(i):new SP(i)}(this.options),new hP(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(ll(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(ll(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(ll(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),CP=/&/g,TP=/^\s*\/\/.*$/gm;function bS(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=bS(n.children,e)),n})}function bP(t){var e,n,r,i=t===void 0?Cs:t,s=i.options,o=s===void 0?Cs:s,a=i.plugins,l=a===void 0?Ic:a,u=function(f,m,g){return g===n||g.startsWith(n)&&g.endsWith(n)&&g.replaceAll(n,"").length>0?".".concat(e):f},c=l.slice();c.push(function(f){f.type===xc&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(CP,n).replace(r,u))}),o.prefix&&c.push(Xk),c.push(qk);var d=function(f,m,g,v){m===void 0&&(m=""),g===void 0&&(g=""),v===void 0&&(v="&"),e=v,n=m,r=new RegExp("\\".concat(n,"\\b"),"g");var w=f.replace(TP,""),p=Gk(g||m?"".concat(g," ").concat(m," { ").concat(w," }"):w);o.namespace&&(p=bS(p,o.namespace));var h=[];return Tu(p,Yk(c.concat(Qk(function(y){return h.push(y)})))),h};return d.hash=l.length?l.reduce(function(f,m){return m.name||ka(15),Ji(f,m.name)},5381).toString():"",d}var IP=new TS,Oh=bP(),IS=it.createContext({shouldForwardProp:void 0,styleSheet:IP,stylis:Oh});IS.Consumer;it.createContext(void 0);function _v(){return T.useContext(IS)}var kP=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Oh);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Em(this,function(){throw ka(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Oh),this.name+e.hash},t}(),PP=function(t){return t>="A"&&t<="Z"};function wv(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;PP(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var kS=function(t){return t==null||t===!1||t===""},PS=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!kS(s)&&(Array.isArray(s)&&s.isCss||Ts(s)?r.push("".concat(wv(i),":"),s,";"):Jo(s)?r.push.apply(r,Cu(Cu(["".concat(i," {")],PS(s),!1),["}"],!1)):r.push("".concat(wv(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in yS||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ai(t,e,n,r){if(kS(t))return[];if(Sm(t))return[".".concat(t.styledComponentId)];if(Ts(t)){if(!Ts(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return ai(i,e,n,r)}var s;return t instanceof kP?n?(t.inject(n,r),[t.getName(r)]):[t]:Jo(t)?PS(t):Array.isArray(t)?Array.prototype.concat.apply(Ic,t.map(function(o){return ai(o,e,n,r)})):[t.toString()]}function OP(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Ts(n)&&!Sm(n))return!1}return!0}var RP=_S("6.0.7"),NP=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&OP(e),this.componentId=n,this.baseHash=Ji(RP,n),this.baseStyle=r,TS.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ei(i,this.staticRulesId);else{var s=yv(ai(this.rules,e,n,r)),o=kh(Ji(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=ei(i,o),this.staticRulesId=o}else{for(var l=Ji(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var f=yv(ai(d,e,n,r));l=Ji(l,f),u+=f}}if(u){var m=kh(l>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,r(u,".".concat(m),void 0,this.componentId)),i=ei(i,m)}}return i},t}(),OS=it.createContext(void 0);OS.Consumer;var Yd={};function AP(t,e,n){var r=Sm(t),i=t,s=!Kd(t),o=e.attrs,a=o===void 0?Ic:o,l=e.componentId,u=l===void 0?function(y,E){var x=typeof y!="string"?"sc":fv(y);Yd[x]=(Yd[x]||0)+1;var C="".concat(x,"-").concat(rP("6.0.7"+x+Yd[x]));return E?"".concat(E,"-").concat(C):C}(e.displayName,e.parentComponentId):l,c=e.displayName;c===void 0&&function(y){return Kd(y)?"styled.".concat(y):"Styled(".concat(iP(y),")")}(t);var d=e.displayName&&e.componentId?"".concat(fv(e.displayName),"-").concat(e.componentId):e.componentId||u,f=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,m=e.shouldForwardProp;if(r&&i.shouldForwardProp){var g=i.shouldForwardProp;if(e.shouldForwardProp){var v=e.shouldForwardProp;m=function(y,E){return g(y,E)&&v(y,E)}}else m=g}var w=new NP(n,d,r?i.componentStyle:void 0);function p(y,E){return function(x,C,S){var P=x.attrs,j=x.componentStyle,L=x.defaultProps,G=x.foldedComponentIds,Lt=x.styledComponentId,le=x.target,_t=it.useContext(OS),Cn=_v(),Tn=x.shouldForwardProp||Cn.shouldForwardProp,lt=function(Mt,Ue,tt){for(var Ke,qe=ft(ft({},Ue),{className:void 0,theme:tt}),Li=0;Li<Mt.length;Li+=1){var zr=Ts(Ke=Mt[Li])?Ke(qe):Ke;for(var Gt in zr)qe[Gt]=Gt==="className"?ei(qe[Gt],zr[Gt]):Gt==="style"?ft(ft({},qe[Gt]),zr[Gt]):zr[Gt]}return Ue.className&&(qe.className=ei(qe.className,Ue.className)),qe}(P,C,Zk(C,_t,L)||Cs),O=lt.as||le,F={};for(var $ in lt)lt[$]===void 0||$[0]==="$"||$==="as"||$==="theme"||($==="forwardedAs"?F.as=lt.forwardedAs:Tn&&!Tn($,O)||(F[$]=lt[$]));var te=function(Mt,Ue){var tt=_v(),Ke=Mt.generateAndInjectStyles(Ue,tt.styleSheet,tt.stylis);return Ke}(j,lt),ne=ei(G,Lt);return te&&(ne+=" "+te),lt.className&&(ne+=" "+lt.className),F[Kd(O)&&!vS.has(O)?"class":"className"]=ne,F.ref=S,T.createElement(O,F)}(h,y,E)}var h=it.forwardRef(p);return h.attrs=f,h.componentStyle=w,h.shouldForwardProp=m,h.foldedComponentIds=r?ei(i.foldedComponentIds,i.styledComponentId):"",h.styledComponentId=d,h.target=r?i.target:t,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?function(E){for(var x=[],C=1;C<arguments.length;C++)x[C-1]=arguments[C];for(var S=0,P=x;S<P.length;S++)Ph(E,P[S],!0);return E}({},i.defaultProps,y):y}}),Em(h,function(){return".".concat(h.styledComponentId)}),s&&xS(h,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function Sv(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var Ev=function(t){return Object.assign(t,{isCss:!0})};function DP(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Ts(t)||Jo(t)){var r=t;return Ev(ai(Sv(Ic,Cu([r],e,!0))))}var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?ai(i):Ev(ai(Sv(i,e)))}function Rh(t,e,n){if(n===void 0&&(n=Cs),!e)throw ka(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,DP.apply(void 0,Cu([i],s,!1)))};return r.attrs=function(i){return Rh(t,e,ft(ft({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Rh(t,e,ft(ft({},n),i))},r}var RS=function(t){return Rh(AP,t)},z=RS;vS.forEach(function(t){z[t]=RS(t)});const LP=z.header`
  padding: 20px 0px;
`,MP=z.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
`,FP=z.svg`
  width: 28px;
  height: 28px;
`,$P=z(xa)`
  display: flex;
  gap: 0px 8px;
  align-items: center;
`,jP=z.span`
  color: #121417;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 120% */
  letter-spacing: -0.4px;
`,UP=z.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px 28px;
`,xv=z(xa)`
  color: var(--secondary);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  padding: 10px 0px;
`,zP=z.div`
  display: flex;
  align-items: center;
  gap: 0px 16px;
`,BP=z(xa)`
  display: flex;
  align-items: center;
  gap: 0px 8px;

  color: var(--secondary);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25;
`,VP=z.button`
  color: var(--background);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25;

  padding: 14px 39px;
  border-radius: 12px;
  background: var(--secondary);
  border: none;
`,NS=z.svg`
  stroke: ${({color:t})=>t==="Blue"?"var(--colorBlue)":t==="Green"?"var(--colorGreen)":t==="Orange"?"var(--colorYellow)":t==="Pink"?"var(--colorPink)":t==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  width: 20px;
  height: 20px;
`,WP=z.div`
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
  background-color: rgba(33, 33, 33, 0.12);
  z-index: 2;
  overflow: auto;
`;function Cv({children:t,onClose:e}){T.useEffect(()=>window.addEventListener("keydown",n),[]),T.useLayoutEffect(()=>()=>{window.removeEventListener("keydown",n)},[]);const n=i=>{i.code==="Escape"&&e(!1)},r=i=>{i.currentTarget===i.target&&e(!1)};return uS.createPortal(_.jsx(WP,{onClick:r,children:t}),document.getElementById("modal-root"))}function ki(t){this._maxSize=t,this.clear()}ki.prototype.clear=function(){this._size=0,this._values=Object.create(null)};ki.prototype.get=function(t){return this._values[t]};ki.prototype.set=function(t,e){return this._size>=this._maxSize&&this.clear(),t in this._values||this._size++,this._values[t]=e};var HP=/[^.^\]^[]+|(?=\[\]|\.\.)/g,AS=/^\d+$/,GP=/^\d/,KP=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,qP=/^\s*(['"]?)(.*?)(\1)\s*$/,xm=512,Tv=new ki(xm),bv=new ki(xm),Iv=new ki(xm),li={Cache:ki,split:Nh,normalizePath:Qd,setter:function(t){var e=Qd(t);return bv.get(t)||bv.set(t,function(r,i){for(var s=0,o=e.length,a=r;s<o-1;){var l=e[s];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;a=a[e[s++]]}a[e[s]]=i})},getter:function(t,e){var n=Qd(t);return Iv.get(t)||Iv.set(t,function(i){for(var s=0,o=n.length;s<o;)if(i!=null||!e)i=i[n[s++]];else return;return i})},join:function(t){return t.reduce(function(e,n){return e+(Cm(n)||AS.test(n)?"["+n+"]":(e?".":"")+n)},"")},forEach:function(t,e,n){YP(Array.isArray(t)?t:Nh(t),e,n)}};function Qd(t){return Tv.get(t)||Tv.set(t,Nh(t).map(function(e){return e.replace(qP,"$2")}))}function Nh(t){return t.match(HP)||[""]}function YP(t,e,n){var r=t.length,i,s,o,a;for(s=0;s<r;s++)i=t[s],i&&(JP(i)&&(i='"'+i+'"'),a=Cm(i),o=!a&&/^\d+$/.test(i),e.call(n,i,a,o,s,t))}function Cm(t){return typeof t=="string"&&t&&["'",'"'].indexOf(t.charAt(0))!==-1}function QP(t){return t.match(GP)&&!t.match(AS)}function XP(t){return KP.test(t)}function JP(t){return!Cm(t)&&(QP(t)||XP(t))}const ZP=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,kc=t=>t.match(ZP)||[],Pc=t=>t[0].toUpperCase()+t.slice(1),Tm=(t,e)=>kc(t).join(e).toLowerCase(),DS=t=>kc(t).reduce((e,n)=>`${e}${e?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),eO=t=>Pc(DS(t)),tO=t=>Tm(t,"_"),nO=t=>Tm(t,"-"),rO=t=>Pc(Tm(t," ")),iO=t=>kc(t).map(Pc).join(" ");var Xd={words:kc,upperFirst:Pc,camelCase:DS,pascalCase:eO,snakeCase:tO,kebabCase:nO,sentenceCase:rO,titleCase:iO},bm={exports:{}};bm.exports=function(t){return LS(sO(t),t)};bm.exports.array=LS;function LS(t,e){var n=t.length,r=new Array(n),i={},s=n,o=oO(e),a=aO(t);for(e.forEach(function(u){if(!a.has(u[0])||!a.has(u[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});s--;)i[s]||l(t[s],s,new Set);return r;function l(u,c,d){if(d.has(u)){var f;try{f=", node was:"+JSON.stringify(u)}catch{f=""}throw new Error("Cyclic dependency"+f)}if(!a.has(u))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(u));if(!i[c]){i[c]=!0;var m=o.get(u)||new Set;if(m=Array.from(m),c=m.length){d.add(u);do{var g=m[--c];l(g,a.get(g),d)}while(c);d.delete(u)}r[--n]=u}}}function sO(t){for(var e=new Set,n=0,r=t.length;n<r;n++){var i=t[n];e.add(i[0]),e.add(i[1])}return Array.from(e)}function oO(t){for(var e=new Map,n=0,r=t.length;n<r;n++){var i=t[n];e.has(i[0])||e.set(i[0],new Set),e.has(i[1])||e.set(i[1],new Set),e.get(i[0]).add(i[1])}return e}function aO(t){for(var e=new Map,n=0,r=t.length;n<r;n++)e.set(t[n],n);return e}var lO=bm.exports;const uO=yp(lO),cO=Object.prototype.toString,dO=Error.prototype.toString,fO=RegExp.prototype.toString,hO=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",pO=/^Symbol\((.*)\)(.*)$/;function mO(t){return t!=+t?"NaN":t===0&&1/t<0?"-0":""+t}function kv(t,e=!1){if(t==null||t===!0||t===!1)return""+t;const n=typeof t;if(n==="number")return mO(t);if(n==="string")return e?`"${t}"`:t;if(n==="function")return"[Function "+(t.name||"anonymous")+"]";if(n==="symbol")return hO.call(t).replace(pO,"Symbol($1)");const r=cO.call(t).slice(8,-1);return r==="Date"?isNaN(t.getTime())?""+t:t.toISOString(t):r==="Error"||t instanceof Error?"["+dO.call(t)+"]":r==="RegExp"?fO.call(t):null}function vr(t,e){let n=kv(t,e);return n!==null?n:JSON.stringify(t,function(r,i){let s=kv(this[r],e);return s!==null?s:i},2)}function MS(t){return t==null?[]:[].concat(t)}let FS,gO=/\$\{\s*(\w+)\s*\}/g;FS=Symbol.toStringTag;class ct extends Error{static formatError(e,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof e=="string"?e.replace(gO,(i,s)=>vr(n[s])):typeof e=="function"?e(n):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,n,r,i,s){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this[FS]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],MS(e).forEach(o=>{if(ct.isError(o)){this.errors.push(...o.errors);const a=o.inner.length?o.inner:[o];this.inner.push(...a)}else this.errors.push(o)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],!s&&Error.captureStackTrace&&Error.captureStackTrace(this,ct)}}let fn={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:t,type:e,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${vr(r,!0)}\`).`:".";return e!=="mixed"?`${t} must be a \`${e}\` type, but the final value was: \`${vr(n,!0)}\``+i:`${t} must match the configured type. The validated value was: \`${vr(n,!0)}\``+i}},qt={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},yO={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},Ah={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},vO={isValue:"${path} field must be ${value}"},Dh={noUnknown:"${path} field has unspecified keys: ${unknown}"},_O={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},wO={notType:t=>{const{path:e,value:n,spec:r}=t,i=r.types.length;if(Array.isArray(n)){if(n.length<i)return`${e} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${vr(n,!0)}\``;if(n.length>i)return`${e} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${vr(n,!0)}\``}return ct.formatError(fn.notType,t)}};Object.assign(Object.create(null),{mixed:fn,string:qt,number:yO,date:Ah,object:Dh,array:_O,boolean:vO,tuple:wO});const Im=t=>t&&t.__isYupSchema__;class Iu{static fromOptions(e,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:s}=n,o=typeof r=="function"?r:(...a)=>a.every(l=>l===r);return new Iu(e,(a,l)=>{var u;let c=o(...a)?i:s;return(u=c==null?void 0:c(l))!=null?u:l})}constructor(e,n){this.fn=void 0,this.refs=e,this.refs=e,this.fn=n}resolve(e,n){let r=this.refs.map(s=>s.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,e,n);if(i===void 0||i===e)return e;if(!Im(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const ul={context:"$",value:"."};class Pi{constructor(e,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===ul.context,this.isValue=this.key[0]===ul.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?ul.context:this.isValue?ul.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&li.getter(this.path,!0),this.map=n.map}getValue(e,n,r){let i=this.isContext?r:this.isValue?e:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(e,n){return this.getValue(e,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}Pi.prototype.__isYupRef=!0;const ti=t=>t==null;function $i(t){function e({value:n,path:r="",options:i,originalValue:s,schema:o},a,l){const{name:u,test:c,params:d,message:f,skipAbsent:m}=t;let{parent:g,context:v,abortEarly:w=o.spec.abortEarly,disableStackTrace:p=o.spec.disableStackTrace}=i;function h(G){return Pi.isRef(G)?G.getValue(n,g,v):G}function y(G={}){var Lt;const le=Object.assign({value:n,originalValue:s,label:o.spec.label,path:G.path||r,spec:o.spec},d,G.params);for(const Cn of Object.keys(le))le[Cn]=h(le[Cn]);const _t=new ct(ct.formatError(G.message||f,le),n,le.path,G.type||u,(Lt=G.disableStackTrace)!=null?Lt:p);return _t.params=le,_t}const E=w?a:l;let x={path:r,parent:g,type:u,from:i.from,createError:y,resolve:h,options:i,originalValue:s,schema:o};const C=G=>{ct.isError(G)?E(G):G?l(null):E(y())},S=G=>{ct.isError(G)?E(G):a(G)};if(m&&ti(n))return C(!0);let j;try{var L;if(j=c.call(x,n,x),typeof((L=j)==null?void 0:L.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${x.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(j).then(C,S)}}catch(G){S(G);return}C(j)}return e.OPTIONS=t,e}function SO(t,e,n,r=n){let i,s,o;return e?(li.forEach(e,(a,l,u)=>{let c=l?a.slice(1,a.length-1):a;t=t.resolve({context:r,parent:i,value:n});let d=t.type==="tuple",f=u?parseInt(c,10):0;if(t.innerType||d){if(d&&!u)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);if(n&&f>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${e}. because there is no value at that index. `);i=n,n=n&&n[f],t=d?t.spec.types[f]:t.innerType}if(!u){if(!t.fields||!t.fields[c])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${t.type}")`);i=n,n=n&&n[c],t=t.fields[c]}s=c,o=l?"["+a+"]":"."+a}),{schema:t,parent:i,parentPath:s}):{parent:i,parentPath:e,schema:t}}class ku extends Set{describe(){const e=[];for(const n of this.values())e.push(Pi.isRef(n)?n.describe():n);return e}resolveAll(e){let n=[];for(const r of this.values())n.push(e(r));return n}clone(){return new ku(this.values())}merge(e,n){const r=this.clone();return e.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function Zi(t,e=new Map){if(Im(t)||!t||typeof t!="object")return t;if(e.has(t))return e.get(t);let n;if(t instanceof Date)n=new Date(t.getTime()),e.set(t,n);else if(t instanceof RegExp)n=new RegExp(t),e.set(t,n);else if(Array.isArray(t)){n=new Array(t.length),e.set(t,n);for(let r=0;r<t.length;r++)n[r]=Zi(t[r],e)}else if(t instanceof Map){n=new Map,e.set(t,n);for(const[r,i]of t.entries())n.set(r,Zi(i,e))}else if(t instanceof Set){n=new Set,e.set(t,n);for(const r of t)n.add(Zi(r,e))}else if(t instanceof Object){n={},e.set(t,n);for(const[r,i]of Object.entries(t))n[r]=Zi(i,e)}else throw Error(`Unable to clone ${t}`);return n}class Sn{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new ku,this._blacklist=new ku,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(fn.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},e==null?void 0:e.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=Zi(Object.assign({},this.spec,e)),n}label(e){let n=this.clone();return n.spec.label=e,n}meta(...e){if(e.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},e[0]),n}withMutation(e){let n=this._mutate;this._mutate=!0;let r=e(this);return this._mutate=n,r}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let n=this,r=e.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(e._whitelist,e._blacklist),r._blacklist=n._blacklist.merge(e._blacklist,e._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(s=>{e.tests.forEach(o=>{s.test(o.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(e){return e==null?!!(this.spec.nullable&&e===null||this.spec.optional&&e===void 0):this._typeCheck(e)}resolve(e){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,s)=>s.resolve(i,e),n),n=n.resolve(e)}return n}resolveOptions(e){var n,r,i,s;return Object.assign({},e,{from:e.from||[],strict:(n=e.strict)!=null?n:this.spec.strict,abortEarly:(r=e.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=e.recursive)!=null?i:this.spec.recursive,disableStackTrace:(s=e.disableStackTrace)!=null?s:this.spec.disableStackTrace})}cast(e,n={}){let r=this.resolve(Object.assign({value:e},n)),i=n.assert==="ignore-optionality",s=r._cast(e,n);if(n.assert!==!1&&!r.isType(s)){if(i&&ti(s))return s;let o=vr(e),a=vr(s);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${o} 
`+(a!==o?`result of cast: ${a}`:""))}return s}_cast(e,n){let r=e===void 0?e:this.transforms.reduce((i,s)=>s.call(this,i,e,this),e);return r===void 0&&(r=this.getDefault(n)),r}_validate(e,n={},r,i){let{path:s,originalValue:o=e,strict:a=this.spec.strict}=n,l=e;a||(l=this._cast(l,Object.assign({assert:!1},n)));let u=[];for(let c of Object.values(this.internalTests))c&&u.push(c);this.runTests({path:s,value:l,originalValue:o,options:n,tests:u},r,c=>{if(c.length)return i(c,l);this.runTests({path:s,value:l,originalValue:o,options:n,tests:this.tests},r,i)})}runTests(e,n,r){let i=!1,{tests:s,value:o,originalValue:a,path:l,options:u}=e,c=v=>{i||(i=!0,n(v,o))},d=v=>{i||(i=!0,r(v,o))},f=s.length,m=[];if(!f)return d([]);let g={value:o,originalValue:a,path:l,options:u,schema:this};for(let v=0;v<s.length;v++){const w=s[v];w(g,c,function(h){h&&(Array.isArray(h)?m.push(...h):m.push(h)),--f<=0&&d(m)})}}asNestedTest({key:e,index:n,parent:r,parentPath:i,originalParent:s,options:o}){const a=e??n;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof a=="number";let u=r[a];const c=Object.assign({},o,{strict:!0,parent:r,value:u,originalValue:s[a],key:void 0,[l?"index":"key"]:a,path:l||a.includes(".")?`${i||""}[${u?a:`"${a}"`}]`:(i?`${i}.`:"")+e});return(d,f,m)=>this.resolve(c)._validate(u,c,f,m)}validate(e,n){var r;let i=this.resolve(Object.assign({},n,{value:e})),s=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return new Promise((o,a)=>i._validate(e,n,(l,u)=>{ct.isError(l)&&(l.value=u),a(l)},(l,u)=>{l.length?a(new ct(l,u,void 0,void 0,s)):o(u)}))}validateSync(e,n){var r;let i=this.resolve(Object.assign({},n,{value:e})),s,o=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return i._validate(e,Object.assign({},n,{sync:!0}),(a,l)=>{throw ct.isError(a)&&(a.value=l),a},(a,l)=>{if(a.length)throw new ct(a,e,void 0,void 0,o);s=l}),s}isValid(e,n){return this.validate(e,n).then(()=>!0,r=>{if(ct.isError(r))return!1;throw r})}isValidSync(e,n){try{return this.validateSync(e,n),!0}catch(r){if(ct.isError(r))return!1;throw r}}_getDefault(e){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,e):Zi(n)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,n){const r=this.clone({nullable:e});return r.internalTests.nullable=$i({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(e,n){const r=this.clone({optional:e});return r.internalTests.optionality=$i({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(e=fn.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=fn.notNull){return this.nullability(!1,e)}required(e=fn.required){return this.clone().withMutation(n=>n.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let n=this.clone();return n.transforms.push(e),n}test(...e){let n;if(e.length===1?typeof e[0]=="function"?n={test:e[0]}:n=e[0]:e.length===2?n={name:e[0],test:e[1]}:n={name:e[0],message:e[1],test:e[2]},n.message===void 0&&(n.message=fn.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=$i(n),s=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(o=>!(o.OPTIONS.name===n.name&&(s||o.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(e,n){!Array.isArray(e)&&typeof e!="string"&&(n=e,e=".");let r=this.clone(),i=MS(e).map(s=>new Pi(s));return i.forEach(s=>{s.isSibling&&r.deps.push(s.key)}),r.conditions.push(typeof n=="function"?new Iu(i,n):Iu.fromOptions(i,n)),r}typeError(e){let n=this.clone();return n.internalTests.typeError=$i({message:e,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(e,n=fn.oneOf){let r=this.clone();return e.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=$i({message:n,name:"oneOf",skipAbsent:!0,test(i){let s=this.schema._whitelist,o=s.resolveAll(this.resolve);return o.includes(i)?!0:this.createError({params:{values:Array.from(s).join(", "),resolved:o}})}}),r}notOneOf(e,n=fn.notOneOf){let r=this.clone();return e.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=$i({message:n,name:"notOneOf",test(i){let s=this.schema._blacklist,o=s.resolveAll(this.resolve);return o.includes(i)?this.createError({params:{values:Array.from(s).join(", "),resolved:o}}):!0}}),r}strip(e=!0){let n=this.clone();return n.spec.strip=e,n}describe(e){const n=(e?this.resolve(e):this).clone(),{label:r,meta:i,optional:s,nullable:o}=n.spec;return{meta:i,label:r,optional:s,nullable:o,default:n.getDefault(e),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,u,c)=>c.findIndex(d=>d.name===l.name)===u)}}}Sn.prototype.__isYupSchema__=!0;for(const t of["validate","validateSync"])Sn.prototype[`${t}At`]=function(e,n,r={}){const{parent:i,parentPath:s,schema:o}=SO(this,e,n,r.context);return o[t](i&&i[s],Object.assign({},r,{parent:i,path:e}))};for(const t of["equals","is"])Sn.prototype[t]=Sn.prototype.oneOf;for(const t of["not","nope"])Sn.prototype[t]=Sn.prototype.notOneOf;let EO=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,xO=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,CO=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,TO=t=>ti(t)||t===t.trim(),bO={}.toString();function ls(){return new $S}class $S extends Sn{constructor(){super({type:"string",check(e){return e instanceof String&&(e=e.valueOf()),typeof e=="string"}}),this.withMutation(()=>{this.transform((e,n,r)=>{if(!r.spec.coerce||r.isType(e)||Array.isArray(e))return e;const i=e!=null&&e.toString?e.toString():e;return i===bO?e:i})})}required(e){return super.required(e).withMutation(n=>n.test({message:e||fn.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(n=>n.OPTIONS.name!=="required"),e))}length(e,n=qt.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(r){return r.length===this.resolve(e)}})}min(e,n=qt.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(r){return r.length>=this.resolve(e)}})}max(e,n=qt.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:e},skipAbsent:!0,test(r){return r.length<=this.resolve(e)}})}matches(e,n){let r=!1,i,s;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:s}=n:i=n),this.test({name:s||"matches",message:i||qt.matches,params:{regex:e},skipAbsent:!0,test:o=>o===""&&r||o.search(e)!==-1})}email(e=qt.email){return this.matches(EO,{name:"email",message:e,excludeEmptyString:!0})}url(e=qt.url){return this.matches(xO,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=qt.uuid){return this.matches(CO,{name:"uuid",message:e,excludeEmptyString:!1})}ensure(){return this.default("").transform(e=>e===null?"":e)}trim(e=qt.trim){return this.transform(n=>n!=null?n.trim():n).test({message:e,name:"trim",test:TO})}lowercase(e=qt.lowercase){return this.transform(n=>ti(n)?n:n.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>ti(n)||n===n.toLowerCase()})}uppercase(e=qt.uppercase){return this.transform(n=>ti(n)?n:n.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>ti(n)||n===n.toUpperCase()})}}ls.prototype=$S.prototype;const IO=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function In(t,e=0){return Number(t)||e}function kO(t){const e=IO.exec(t);if(!e)return Date.parse?Date.parse(t):Number.NaN;const n={year:In(e[1]),month:In(e[2],1)-1,day:In(e[3],1),hour:In(e[4]),minute:In(e[5]),second:In(e[6]),millisecond:e[7]?In(e[7].substring(0,3)):0,z:e[8]||void 0,plusMinus:e[9]||void 0,hourOffset:In(e[10]),minuteOffset:In(e[11])};if(n.z===void 0&&n.plusMinus===void 0)return new Date(n.year,n.month,n.day,n.hour,n.minute,n.second,n.millisecond).valueOf();let r=0;return n.z!=="Z"&&n.plusMinus!==void 0&&(r=n.hourOffset*60+n.minuteOffset,n.plusMinus==="+"&&(r=0-r)),Date.UTC(n.year,n.month,n.day,n.hour,n.minute+r,n.second,n.millisecond)}let PO=new Date(""),OO=t=>Object.prototype.toString.call(t)==="[object Date]";class Oc extends Sn{constructor(){super({type:"date",check(e){return OO(e)&&!isNaN(e.getTime())}}),this.withMutation(()=>{this.transform((e,n,r)=>!r.spec.coerce||r.isType(e)||e===null?e:(e=kO(e),isNaN(e)?Oc.INVALID_DATE:new Date(e)))})}prepareParam(e,n){let r;if(Pi.isRef(e))r=e;else{let i=this.cast(e);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(e,n=Ah.min){let r=this.prepareParam(e,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(e,n=Ah.max){let r=this.prepareParam(e,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}Oc.INVALID_DATE=PO;Oc.prototype;function RO(t,e=[]){let n=[],r=new Set,i=new Set(e.map(([o,a])=>`${o}-${a}`));function s(o,a){let l=li.split(o)[0];r.add(l),i.has(`${a}-${l}`)||n.push([a,l])}for(const o of Object.keys(t)){let a=t[o];r.add(o),Pi.isRef(a)&&a.isSibling?s(a.path,o):Im(a)&&"deps"in a&&a.deps.forEach(l=>s(l,o))}return uO.array(Array.from(r),n).reverse()}function Pv(t,e){let n=1/0;return t.some((r,i)=>{var s;if((s=e.path)!=null&&s.includes(r))return n=i,!0}),n}function jS(t){return(e,n)=>Pv(t,e)-Pv(t,n)}const NO=(t,e,n)=>{if(typeof t!="string")return t;let r=t;try{r=JSON.parse(t)}catch{}return n.isType(r)?r:t};function Ml(t){if("fields"in t){const e={};for(const[n,r]of Object.entries(t.fields))e[n]=Ml(r);return t.setFields(e)}if(t.type==="array"){const e=t.optional();return e.innerType&&(e.innerType=Ml(e.innerType)),e}return t.type==="tuple"?t.optional().clone({types:t.spec.types.map(Ml)}):"optional"in t?t.optional():t}const AO=(t,e)=>{const n=[...li.normalizePath(e)];if(n.length===1)return n[0]in t;let r=n.pop(),i=li.getter(li.join(n),!0)(t);return!!(i&&r in i)};let Ov=t=>Object.prototype.toString.call(t)==="[object Object]";function DO(t,e){let n=Object.keys(t.fields);return Object.keys(e).filter(r=>n.indexOf(r)===-1)}const LO=jS([]);function km(t){return new US(t)}class US extends Sn{constructor(e){super({type:"object",check(n){return Ov(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=LO,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,n={}){var r;let i=super._cast(e,n);if(i===void 0)return this.getDefault(n);if(!this._typeCheck(i))return i;let s=this.fields,o=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(i).filter(d=>!this._nodes.includes(d))),l={},u=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),c=!1;for(const d of a){let f=s[d],m=d in i;if(f){let g,v=i[d];u.path=(n.path?`${n.path}.`:"")+d,f=f.resolve({value:v,context:n.context,parent:l});let w=f instanceof Sn?f.spec:void 0,p=w==null?void 0:w.strict;if(w!=null&&w.strip){c=c||d in i;continue}g=!n.__validating||!p?f.cast(i[d],u):i[d],g!==void 0&&(l[d]=g)}else m&&!o&&(l[d]=i[d]);(m!==d in l||l[d]!==i[d])&&(c=!0)}return c?l:i}_validate(e,n={},r,i){let{from:s=[],originalValue:o=e,recursive:a=this.spec.recursive}=n;n.from=[{schema:this,value:o},...s],n.__validating=!0,n.originalValue=o,super._validate(e,n,r,(l,u)=>{if(!a||!Ov(u)){i(l,u);return}o=o||u;let c=[];for(let d of this._nodes){let f=this.fields[d];!f||Pi.isRef(f)||c.push(f.asNestedTest({options:n,key:d,parent:u,parentPath:n.path,originalParent:o}))}this.runTests({tests:c,value:u,originalValue:o,options:n},r,d=>{i(d.sort(this._sortErrors).concat(l),u)})})}clone(e){const n=super.clone(e);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(e){let n=super.concat(e),r=n.fields;for(let[i,s]of Object.entries(this.fields)){const o=r[i];r[i]=o===void 0?s:o}return n.withMutation(i=>i.setFields(r,[...this._excludedEdges,...e._excludedEdges]))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var i;const s=this.fields[r];let o=e;(i=o)!=null&&i.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[r]})),n[r]=s&&"getDefault"in s?s.getDefault(o):void 0}),n}setFields(e,n){let r=this.clone();return r.fields=e,r._nodes=RO(e,n),r._sortErrors=jS(Object.keys(e)),n&&(r._excludedEdges=n),r}shape(e,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,e),i)})}partial(){const e={};for(const[n,r]of Object.entries(this.fields))e[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(e)}deepPartial(){return Ml(this)}pick(e){const n={};for(const r of e)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,i])=>e.includes(r)&&e.includes(i)))}omit(e){const n=[];for(const r of Object.keys(this.fields))e.includes(r)||n.push(r);return this.pick(n)}from(e,n,r){let i=li.getter(e,!0);return this.transform(s=>{if(!s)return s;let o=s;return AO(s,e)&&(o=Object.assign({},s),r||delete o[e],o[n]=i(s)),o})}json(){return this.transform(NO)}noUnknown(e=!0,n=Dh.noUnknown){typeof e!="boolean"&&(n=e,e=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const s=DO(this.schema,i);return!e||s.length===0||this.createError({params:{unknown:s.join(", ")}})}});return r.spec.noUnknown=e,r}unknown(e=!0,n=Dh.noUnknown){return this.noUnknown(!e,n)}transformKeys(e){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[e(i)]=n[i];return r})}camelCase(){return this.transformKeys(Xd.camelCase)}snakeCase(){return this.transformKeys(Xd.snakeCase)}constantCase(){return this.transformKeys(e=>Xd.snakeCase(e).toUpperCase())}describe(e){const n=(e?this.resolve(e):this).clone(),r=super.describe(e);r.fields={};for(const[s,o]of Object.entries(n.fields)){var i;let a=e;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[s]})),r.fields[s]=o.describe(a)}return r}}km.prototype=US.prototype;const MO=z.form`
  position: relative;
  margin: 0 auto;
  min-height: 420px;

  background: var(--background);
  border-radius: 30px;
  padding: 64px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    padding: 64px;
  }
`,Jd=z.div`
  margin-bottom: 14px;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 18px;
  }
`;z.div`
  margin-bottom: 40px;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
`;const FO=z.h2`
  line-height: 1.2;
  letter-spacing: -0.8px;
  font-weight: 500;
  margin-bottom: 20px;
  color: var(--secondar);
  @media (min-width: 768px) {
    font-size: 40px;
  }
`,$O=z.p`
  width: 438px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.38;
  margin-bottom: 40px;
  color: rgba(18, 20, 23, 0.8);
`,Zd=z.p`
  margin-left: 15px;
  font-size: 12px;
  font-weight: 400;
  color: var(--red);
`,jO=z.button`
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
`,ef=z.input`
  padding: 16px 18px;
  width: 100%;
  border-radius: 40px;
  outline: none;
  border-radius: 12px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.38;
  color: var(--secondar);
  &::placeholder {
    color: var(--secondar);
  }
  &.is-invalid {
    border-color: var(--red);
  }
`,UO=z.button`
  font-weight: 600;
  width: 100%;
  border: none;
  border-radius: 12px;
  color: var(--secondar);

  background-color: var(--yelow);

  padding: 16px 180px;

  font-size: 18px;
  font-weight: 700;
  line-height: 1.56;
  @media (min-width: 768px) {
  }
`,zO=z.button`
  position: absolute;
  top: 20px;
  right: 20px;

  background-color: transparent;
  border: none;
`;z.svg`
  stroke: var(--secondary);
  fill: none;
  width: 24px;
  height: 24px;
`;const BO=z.svg`
  stroke: var(--secondary);
  fill: none;
  width: 32px;
  height: 32px;
`,Rv=z.svg`
  stroke: var(--secondary);
  fill: none;
  display: inline-block;
  width: 24px;
  height: 24px;
`;var VO=function(e){return WO(e)&&!HO(e)};function WO(t){return!!t&&typeof t=="object"}function HO(t){var e=Object.prototype.toString.call(t);return e==="[object RegExp]"||e==="[object Date]"||qO(t)}var GO=typeof Symbol=="function"&&Symbol.for,KO=GO?Symbol.for("react.element"):60103;function qO(t){return t.$$typeof===KO}function YO(t){return Array.isArray(t)?[]:{}}function Pu(t,e){return e.clone!==!1&&e.isMergeableObject(t)?Zo(YO(t),t,e):t}function QO(t,e,n){return t.concat(e).map(function(r){return Pu(r,n)})}function XO(t,e,n){var r={};return n.isMergeableObject(t)&&Object.keys(t).forEach(function(i){r[i]=Pu(t[i],n)}),Object.keys(e).forEach(function(i){!n.isMergeableObject(e[i])||!t[i]?r[i]=Pu(e[i],n):r[i]=Zo(t[i],e[i],n)}),r}function Zo(t,e,n){n=n||{},n.arrayMerge=n.arrayMerge||QO,n.isMergeableObject=n.isMergeableObject||VO;var r=Array.isArray(e),i=Array.isArray(t),s=r===i;return s?r?n.arrayMerge(t,e,n):XO(t,e,n):Pu(e,n)}Zo.all=function(e,n){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(r,i){return Zo(r,i,n)},{})};var Lh=Zo,JO=typeof global=="object"&&global&&global.Object===Object&&global;const zS=JO;var ZO=typeof self=="object"&&self&&self.Object===Object&&self,eR=zS||ZO||Function("return this")();const xn=eR;var tR=xn.Symbol;const Ir=tR;var BS=Object.prototype,nR=BS.hasOwnProperty,rR=BS.toString,no=Ir?Ir.toStringTag:void 0;function iR(t){var e=nR.call(t,no),n=t[no];try{t[no]=void 0;var r=!0}catch{}var i=rR.call(t);return r&&(e?t[no]=n:delete t[no]),i}var sR=Object.prototype,oR=sR.toString;function aR(t){return oR.call(t)}var lR="[object Null]",uR="[object Undefined]",Nv=Ir?Ir.toStringTag:void 0;function Oi(t){return t==null?t===void 0?uR:lR:Nv&&Nv in Object(t)?iR(t):aR(t)}function VS(t,e){return function(n){return t(e(n))}}var cR=VS(Object.getPrototypeOf,Object);const Pm=cR;function Ri(t){return t!=null&&typeof t=="object"}var dR="[object Object]",fR=Function.prototype,hR=Object.prototype,WS=fR.toString,pR=hR.hasOwnProperty,mR=WS.call(Object);function Av(t){if(!Ri(t)||Oi(t)!=dR)return!1;var e=Pm(t);if(e===null)return!0;var n=pR.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&WS.call(n)==mR}var Dv=Array.isArray,Lv=Object.keys,gR=Object.prototype.hasOwnProperty,yR=typeof Element<"u";function Mh(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=Dv(t),r=Dv(e),i,s,o;if(n&&r){if(s=t.length,s!=e.length)return!1;for(i=s;i--!==0;)if(!Mh(t[i],e[i]))return!1;return!0}if(n!=r)return!1;var a=t instanceof Date,l=e instanceof Date;if(a!=l)return!1;if(a&&l)return t.getTime()==e.getTime();var u=t instanceof RegExp,c=e instanceof RegExp;if(u!=c)return!1;if(u&&c)return t.toString()==e.toString();var d=Lv(t);if(s=d.length,s!==Lv(e).length)return!1;for(i=s;i--!==0;)if(!gR.call(e,d[i]))return!1;if(yR&&t instanceof Element&&e instanceof Element)return t===e;for(i=s;i--!==0;)if(o=d[i],!(o==="_owner"&&t.$$typeof)&&!Mh(t[o],e[o]))return!1;return!0}return t!==t&&e!==e}var vR=function(e,n){try{return Mh(e,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const Gr=yp(vR);var _R=!0;function wR(t,e){if(!_R){if(t)return;var n="Warning: "+e;typeof console<"u"&&console.warn(n);try{throw Error(n)}catch{}}}function SR(){this.__data__=[],this.size=0}function HS(t,e){return t===e||t!==t&&e!==e}function Rc(t,e){for(var n=t.length;n--;)if(HS(t[n][0],e))return n;return-1}var ER=Array.prototype,xR=ER.splice;function CR(t){var e=this.__data__,n=Rc(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():xR.call(e,n,1),--this.size,!0}function TR(t){var e=this.__data__,n=Rc(e,t);return n<0?void 0:e[n][1]}function bR(t){return Rc(this.__data__,t)>-1}function IR(t,e){var n=this.__data__,r=Rc(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function Kn(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Kn.prototype.clear=SR;Kn.prototype.delete=CR;Kn.prototype.get=TR;Kn.prototype.has=bR;Kn.prototype.set=IR;function kR(){this.__data__=new Kn,this.size=0}function PR(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function OR(t){return this.__data__.get(t)}function RR(t){return this.__data__.has(t)}function Pa(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var NR="[object AsyncFunction]",AR="[object Function]",DR="[object GeneratorFunction]",LR="[object Proxy]";function GS(t){if(!Pa(t))return!1;var e=Oi(t);return e==AR||e==DR||e==NR||e==LR}var MR=xn["__core-js_shared__"];const tf=MR;var Mv=function(){var t=/[^.]+$/.exec(tf&&tf.keys&&tf.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function FR(t){return!!Mv&&Mv in t}var $R=Function.prototype,jR=$R.toString;function Ni(t){if(t!=null){try{return jR.call(t)}catch{}try{return t+""}catch{}}return""}var UR=/[\\^$.*+?()[\]{}|]/g,zR=/^\[object .+?Constructor\]$/,BR=Function.prototype,VR=Object.prototype,WR=BR.toString,HR=VR.hasOwnProperty,GR=RegExp("^"+WR.call(HR).replace(UR,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function KR(t){if(!Pa(t)||FR(t))return!1;var e=GS(t)?GR:zR;return e.test(Ni(t))}function qR(t,e){return t==null?void 0:t[e]}function Ai(t,e){var n=qR(t,e);return KR(n)?n:void 0}var YR=Ai(xn,"Map");const ea=YR;var QR=Ai(Object,"create");const ta=QR;function XR(){this.__data__=ta?ta(null):{},this.size=0}function JR(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var ZR="__lodash_hash_undefined__",eN=Object.prototype,tN=eN.hasOwnProperty;function nN(t){var e=this.__data__;if(ta){var n=e[t];return n===ZR?void 0:n}return tN.call(e,t)?e[t]:void 0}var rN=Object.prototype,iN=rN.hasOwnProperty;function sN(t){var e=this.__data__;return ta?e[t]!==void 0:iN.call(e,t)}var oN="__lodash_hash_undefined__";function aN(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ta&&e===void 0?oN:e,this}function yi(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}yi.prototype.clear=XR;yi.prototype.delete=JR;yi.prototype.get=nN;yi.prototype.has=sN;yi.prototype.set=aN;function lN(){this.size=0,this.__data__={hash:new yi,map:new(ea||Kn),string:new yi}}function uN(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function Nc(t,e){var n=t.__data__;return uN(e)?n[typeof e=="string"?"string":"hash"]:n.map}function cN(t){var e=Nc(this,t).delete(t);return this.size-=e?1:0,e}function dN(t){return Nc(this,t).get(t)}function fN(t){return Nc(this,t).has(t)}function hN(t,e){var n=Nc(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function Mr(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Mr.prototype.clear=lN;Mr.prototype.delete=cN;Mr.prototype.get=dN;Mr.prototype.has=fN;Mr.prototype.set=hN;var pN=200;function mN(t,e){var n=this.__data__;if(n instanceof Kn){var r=n.__data__;if(!ea||r.length<pN-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new Mr(r)}return n.set(t,e),this.size=n.size,this}function Bs(t){var e=this.__data__=new Kn(t);this.size=e.size}Bs.prototype.clear=kR;Bs.prototype.delete=PR;Bs.prototype.get=OR;Bs.prototype.has=RR;Bs.prototype.set=mN;function gN(t,e){for(var n=-1,r=t==null?0:t.length;++n<r&&e(t[n],n,t)!==!1;);return t}var yN=function(){try{var t=Ai(Object,"defineProperty");return t({},"",{}),t}catch{}}();const Fv=yN;function KS(t,e,n){e=="__proto__"&&Fv?Fv(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var vN=Object.prototype,_N=vN.hasOwnProperty;function qS(t,e,n){var r=t[e];(!(_N.call(t,e)&&HS(r,n))||n===void 0&&!(e in t))&&KS(t,e,n)}function Ac(t,e,n,r){var i=!n;n||(n={});for(var s=-1,o=e.length;++s<o;){var a=e[s],l=r?r(n[a],t[a],a,n,t):void 0;l===void 0&&(l=t[a]),i?KS(n,a,l):qS(n,a,l)}return n}function wN(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var SN="[object Arguments]";function $v(t){return Ri(t)&&Oi(t)==SN}var YS=Object.prototype,EN=YS.hasOwnProperty,xN=YS.propertyIsEnumerable,CN=$v(function(){return arguments}())?$v:function(t){return Ri(t)&&EN.call(t,"callee")&&!xN.call(t,"callee")};const TN=CN;var bN=Array.isArray;const Oa=bN;function IN(){return!1}var QS=typeof Ct=="object"&&Ct&&!Ct.nodeType&&Ct,jv=QS&&typeof Tt=="object"&&Tt&&!Tt.nodeType&&Tt,kN=jv&&jv.exports===QS,Uv=kN?xn.Buffer:void 0,PN=Uv?Uv.isBuffer:void 0,ON=PN||IN;const XS=ON;var RN=9007199254740991,NN=/^(?:0|[1-9]\d*)$/;function AN(t,e){var n=typeof t;return e=e??RN,!!e&&(n=="number"||n!="symbol"&&NN.test(t))&&t>-1&&t%1==0&&t<e}var DN=9007199254740991;function JS(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=DN}var LN="[object Arguments]",MN="[object Array]",FN="[object Boolean]",$N="[object Date]",jN="[object Error]",UN="[object Function]",zN="[object Map]",BN="[object Number]",VN="[object Object]",WN="[object RegExp]",HN="[object Set]",GN="[object String]",KN="[object WeakMap]",qN="[object ArrayBuffer]",YN="[object DataView]",QN="[object Float32Array]",XN="[object Float64Array]",JN="[object Int8Array]",ZN="[object Int16Array]",eA="[object Int32Array]",tA="[object Uint8Array]",nA="[object Uint8ClampedArray]",rA="[object Uint16Array]",iA="[object Uint32Array]",pe={};pe[QN]=pe[XN]=pe[JN]=pe[ZN]=pe[eA]=pe[tA]=pe[nA]=pe[rA]=pe[iA]=!0;pe[LN]=pe[MN]=pe[qN]=pe[FN]=pe[YN]=pe[$N]=pe[jN]=pe[UN]=pe[zN]=pe[BN]=pe[VN]=pe[WN]=pe[HN]=pe[GN]=pe[KN]=!1;function sA(t){return Ri(t)&&JS(t.length)&&!!pe[Oi(t)]}function Om(t){return function(e){return t(e)}}var ZS=typeof Ct=="object"&&Ct&&!Ct.nodeType&&Ct,Io=ZS&&typeof Tt=="object"&&Tt&&!Tt.nodeType&&Tt,oA=Io&&Io.exports===ZS,nf=oA&&zS.process,aA=function(){try{var t=Io&&Io.require&&Io.require("util").types;return t||nf&&nf.binding&&nf.binding("util")}catch{}}();const bs=aA;var zv=bs&&bs.isTypedArray,lA=zv?Om(zv):sA;const uA=lA;var cA=Object.prototype,dA=cA.hasOwnProperty;function eE(t,e){var n=Oa(t),r=!n&&TN(t),i=!n&&!r&&XS(t),s=!n&&!r&&!i&&uA(t),o=n||r||i||s,a=o?wN(t.length,String):[],l=a.length;for(var u in t)(e||dA.call(t,u))&&!(o&&(u=="length"||i&&(u=="offset"||u=="parent")||s&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||AN(u,l)))&&a.push(u);return a}var fA=Object.prototype;function Rm(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||fA;return t===n}var hA=VS(Object.keys,Object);const pA=hA;var mA=Object.prototype,gA=mA.hasOwnProperty;function yA(t){if(!Rm(t))return pA(t);var e=[];for(var n in Object(t))gA.call(t,n)&&n!="constructor"&&e.push(n);return e}function tE(t){return t!=null&&JS(t.length)&&!GS(t)}function Nm(t){return tE(t)?eE(t):yA(t)}function vA(t,e){return t&&Ac(e,Nm(e),t)}function _A(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var wA=Object.prototype,SA=wA.hasOwnProperty;function EA(t){if(!Pa(t))return _A(t);var e=Rm(t),n=[];for(var r in t)r=="constructor"&&(e||!SA.call(t,r))||n.push(r);return n}function Am(t){return tE(t)?eE(t,!0):EA(t)}function xA(t,e){return t&&Ac(e,Am(e),t)}var nE=typeof Ct=="object"&&Ct&&!Ct.nodeType&&Ct,Bv=nE&&typeof Tt=="object"&&Tt&&!Tt.nodeType&&Tt,CA=Bv&&Bv.exports===nE,Vv=CA?xn.Buffer:void 0,Wv=Vv?Vv.allocUnsafe:void 0;function TA(t,e){if(e)return t.slice();var n=t.length,r=Wv?Wv(n):new t.constructor(n);return t.copy(r),r}function rE(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}function bA(t,e){for(var n=-1,r=t==null?0:t.length,i=0,s=[];++n<r;){var o=t[n];e(o,n,t)&&(s[i++]=o)}return s}function iE(){return[]}var IA=Object.prototype,kA=IA.propertyIsEnumerable,Hv=Object.getOwnPropertySymbols,PA=Hv?function(t){return t==null?[]:(t=Object(t),bA(Hv(t),function(e){return kA.call(t,e)}))}:iE;const Dm=PA;function OA(t,e){return Ac(t,Dm(t),e)}function sE(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}var RA=Object.getOwnPropertySymbols,NA=RA?function(t){for(var e=[];t;)sE(e,Dm(t)),t=Pm(t);return e}:iE;const oE=NA;function AA(t,e){return Ac(t,oE(t),e)}function aE(t,e,n){var r=e(t);return Oa(t)?r:sE(r,n(t))}function DA(t){return aE(t,Nm,Dm)}function LA(t){return aE(t,Am,oE)}var MA=Ai(xn,"DataView");const Fh=MA;var FA=Ai(xn,"Promise");const $h=FA;var $A=Ai(xn,"Set");const jh=$A;var jA=Ai(xn,"WeakMap");const Uh=jA;var Gv="[object Map]",UA="[object Object]",Kv="[object Promise]",qv="[object Set]",Yv="[object WeakMap]",Qv="[object DataView]",zA=Ni(Fh),BA=Ni(ea),VA=Ni($h),WA=Ni(jh),HA=Ni(Uh),Kr=Oi;(Fh&&Kr(new Fh(new ArrayBuffer(1)))!=Qv||ea&&Kr(new ea)!=Gv||$h&&Kr($h.resolve())!=Kv||jh&&Kr(new jh)!=qv||Uh&&Kr(new Uh)!=Yv)&&(Kr=function(t){var e=Oi(t),n=e==UA?t.constructor:void 0,r=n?Ni(n):"";if(r)switch(r){case zA:return Qv;case BA:return Gv;case VA:return Kv;case WA:return qv;case HA:return Yv}return e});const Lm=Kr;var GA=Object.prototype,KA=GA.hasOwnProperty;function qA(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&KA.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var YA=xn.Uint8Array;const Xv=YA;function Mm(t){var e=new t.constructor(t.byteLength);return new Xv(e).set(new Xv(t)),e}function QA(t,e){var n=e?Mm(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}var XA=/\w*$/;function JA(t){var e=new t.constructor(t.source,XA.exec(t));return e.lastIndex=t.lastIndex,e}var Jv=Ir?Ir.prototype:void 0,Zv=Jv?Jv.valueOf:void 0;function ZA(t){return Zv?Object(Zv.call(t)):{}}function e2(t,e){var n=e?Mm(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var t2="[object Boolean]",n2="[object Date]",r2="[object Map]",i2="[object Number]",s2="[object RegExp]",o2="[object Set]",a2="[object String]",l2="[object Symbol]",u2="[object ArrayBuffer]",c2="[object DataView]",d2="[object Float32Array]",f2="[object Float64Array]",h2="[object Int8Array]",p2="[object Int16Array]",m2="[object Int32Array]",g2="[object Uint8Array]",y2="[object Uint8ClampedArray]",v2="[object Uint16Array]",_2="[object Uint32Array]";function w2(t,e,n){var r=t.constructor;switch(e){case u2:return Mm(t);case t2:case n2:return new r(+t);case c2:return QA(t,n);case d2:case f2:case h2:case p2:case m2:case g2:case y2:case v2:case _2:return e2(t,n);case r2:return new r;case i2:case a2:return new r(t);case s2:return JA(t);case o2:return new r;case l2:return ZA(t)}}var e_=Object.create,S2=function(){function t(){}return function(e){if(!Pa(e))return{};if(e_)return e_(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();const E2=S2;function x2(t){return typeof t.constructor=="function"&&!Rm(t)?E2(Pm(t)):{}}var C2="[object Map]";function T2(t){return Ri(t)&&Lm(t)==C2}var t_=bs&&bs.isMap,b2=t_?Om(t_):T2;const I2=b2;var k2="[object Set]";function P2(t){return Ri(t)&&Lm(t)==k2}var n_=bs&&bs.isSet,O2=n_?Om(n_):P2;const R2=O2;var N2=1,A2=2,D2=4,lE="[object Arguments]",L2="[object Array]",M2="[object Boolean]",F2="[object Date]",$2="[object Error]",uE="[object Function]",j2="[object GeneratorFunction]",U2="[object Map]",z2="[object Number]",cE="[object Object]",B2="[object RegExp]",V2="[object Set]",W2="[object String]",H2="[object Symbol]",G2="[object WeakMap]",K2="[object ArrayBuffer]",q2="[object DataView]",Y2="[object Float32Array]",Q2="[object Float64Array]",X2="[object Int8Array]",J2="[object Int16Array]",Z2="[object Int32Array]",eD="[object Uint8Array]",tD="[object Uint8ClampedArray]",nD="[object Uint16Array]",rD="[object Uint32Array]",ue={};ue[lE]=ue[L2]=ue[K2]=ue[q2]=ue[M2]=ue[F2]=ue[Y2]=ue[Q2]=ue[X2]=ue[J2]=ue[Z2]=ue[U2]=ue[z2]=ue[cE]=ue[B2]=ue[V2]=ue[W2]=ue[H2]=ue[eD]=ue[tD]=ue[nD]=ue[rD]=!0;ue[$2]=ue[uE]=ue[G2]=!1;function Fl(t,e,n,r,i,s){var o,a=e&N2,l=e&A2,u=e&D2;if(n&&(o=i?n(t,r,i,s):n(t)),o!==void 0)return o;if(!Pa(t))return t;var c=Oa(t);if(c){if(o=qA(t),!a)return rE(t,o)}else{var d=Lm(t),f=d==uE||d==j2;if(XS(t))return TA(t,a);if(d==cE||d==lE||f&&!i){if(o=l||f?{}:x2(t),!a)return l?AA(t,xA(o,t)):OA(t,vA(o,t))}else{if(!ue[d])return i?t:{};o=w2(t,d,a)}}s||(s=new Bs);var m=s.get(t);if(m)return m;s.set(t,o),R2(t)?t.forEach(function(w){o.add(Fl(w,e,n,w,t,s))}):I2(t)&&t.forEach(function(w,p){o.set(p,Fl(w,e,n,p,t,s))});var g=u?l?LA:DA:l?Am:Nm,v=c?void 0:g(t);return gN(v||t,function(w,p){v&&(p=w,w=t[p]),qS(o,p,Fl(w,e,n,p,t,s))}),o}var iD=4;function r_(t){return Fl(t,iD)}function dE(t,e){for(var n=-1,r=t==null?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}var sD="[object Symbol]";function Fm(t){return typeof t=="symbol"||Ri(t)&&Oi(t)==sD}var oD="Expected a function";function $m(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(oD);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=t.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new($m.Cache||Mr),n}$m.Cache=Mr;var aD=500;function lD(t){var e=$m(t,function(r){return n.size===aD&&n.clear(),r}),n=e.cache;return e}var uD=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,cD=/\\(\\)?/g,dD=lD(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(uD,function(n,r,i,s){e.push(i?s.replace(cD,"$1"):r||n)}),e});const fD=dD;var hD=1/0;function pD(t){if(typeof t=="string"||Fm(t))return t;var e=t+"";return e=="0"&&1/t==-hD?"-0":e}var mD=1/0,i_=Ir?Ir.prototype:void 0,s_=i_?i_.toString:void 0;function fE(t){if(typeof t=="string")return t;if(Oa(t))return dE(t,fE)+"";if(Fm(t))return s_?s_.call(t):"";var e=t+"";return e=="0"&&1/t==-mD?"-0":e}function gD(t){return t==null?"":fE(t)}function hE(t){return Oa(t)?dE(t,pD):Fm(t)?[t]:rE(fD(gD(t)))}var pE={exports:{}},se={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var je=typeof Symbol=="function"&&Symbol.for,jm=je?Symbol.for("react.element"):60103,Um=je?Symbol.for("react.portal"):60106,Dc=je?Symbol.for("react.fragment"):60107,Lc=je?Symbol.for("react.strict_mode"):60108,Mc=je?Symbol.for("react.profiler"):60114,Fc=je?Symbol.for("react.provider"):60109,$c=je?Symbol.for("react.context"):60110,zm=je?Symbol.for("react.async_mode"):60111,jc=je?Symbol.for("react.concurrent_mode"):60111,Uc=je?Symbol.for("react.forward_ref"):60112,zc=je?Symbol.for("react.suspense"):60113,yD=je?Symbol.for("react.suspense_list"):60120,Bc=je?Symbol.for("react.memo"):60115,Vc=je?Symbol.for("react.lazy"):60116,vD=je?Symbol.for("react.block"):60121,_D=je?Symbol.for("react.fundamental"):60117,wD=je?Symbol.for("react.responder"):60118,SD=je?Symbol.for("react.scope"):60119;function Dt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case jm:switch(t=t.type,t){case zm:case jc:case Dc:case Mc:case Lc:case zc:return t;default:switch(t=t&&t.$$typeof,t){case $c:case Uc:case Vc:case Bc:case Fc:return t;default:return e}}case Um:return e}}}function mE(t){return Dt(t)===jc}se.AsyncMode=zm;se.ConcurrentMode=jc;se.ContextConsumer=$c;se.ContextProvider=Fc;se.Element=jm;se.ForwardRef=Uc;se.Fragment=Dc;se.Lazy=Vc;se.Memo=Bc;se.Portal=Um;se.Profiler=Mc;se.StrictMode=Lc;se.Suspense=zc;se.isAsyncMode=function(t){return mE(t)||Dt(t)===zm};se.isConcurrentMode=mE;se.isContextConsumer=function(t){return Dt(t)===$c};se.isContextProvider=function(t){return Dt(t)===Fc};se.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===jm};se.isForwardRef=function(t){return Dt(t)===Uc};se.isFragment=function(t){return Dt(t)===Dc};se.isLazy=function(t){return Dt(t)===Vc};se.isMemo=function(t){return Dt(t)===Bc};se.isPortal=function(t){return Dt(t)===Um};se.isProfiler=function(t){return Dt(t)===Mc};se.isStrictMode=function(t){return Dt(t)===Lc};se.isSuspense=function(t){return Dt(t)===zc};se.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Dc||t===jc||t===Mc||t===Lc||t===zc||t===yD||typeof t=="object"&&t!==null&&(t.$$typeof===Vc||t.$$typeof===Bc||t.$$typeof===Fc||t.$$typeof===$c||t.$$typeof===Uc||t.$$typeof===_D||t.$$typeof===wD||t.$$typeof===SD||t.$$typeof===vD)};se.typeOf=Dt;pE.exports=se;var ED=pE.exports,gE=ED,xD={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},CD={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},yE={};yE[gE.ForwardRef]=xD;yE[gE.Memo]=CD;function Ae(){return Ae=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ae.apply(this,arguments)}function vE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var Wc=T.createContext(void 0);Wc.displayName="FormikContext";Wc.Provider;Wc.Consumer;function TD(){var t=T.useContext(Wc);return t||wR(!1),t}var Yt=function(e){return typeof e=="function"},Hc=function(e){return e!==null&&typeof e=="object"},bD=function(e){return String(Math.floor(Number(e)))===e},rf=function(e){return Object.prototype.toString.call(e)==="[object String]"},sf=function(e){return Hc(e)&&Yt(e.then)};function wt(t,e,n,r){r===void 0&&(r=0);for(var i=hE(e);t&&r<i.length;)t=t[i[r++]];return r!==i.length&&!t||t===void 0?n:t}function ui(t,e,n){for(var r=r_(t),i=r,s=0,o=hE(e);s<o.length-1;s++){var a=o[s],l=wt(t,o.slice(0,s+1));if(l&&(Hc(l)||Array.isArray(l)))i=i[a]=r_(l);else{var u=o[s+1];i=i[a]=bD(u)&&Number(u)>=0?[]:{}}}return(s===0?t:i)[o[s]]===n?t:(n===void 0?delete i[o[s]]:i[o[s]]=n,s===0&&n===void 0&&delete r[o[s]],r)}function _E(t,e,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var i=0,s=Object.keys(t);i<s.length;i++){var o=s[i],a=t[o];Hc(a)?n.get(a)||(n.set(a,!0),r[o]=Array.isArray(a)?[]:{},_E(a,e,n,r[o])):r[o]=e}return r}function ID(t,e){switch(e.type){case"SET_VALUES":return Ae({},t,{values:e.payload});case"SET_TOUCHED":return Ae({},t,{touched:e.payload});case"SET_ERRORS":return Gr(t.errors,e.payload)?t:Ae({},t,{errors:e.payload});case"SET_STATUS":return Ae({},t,{status:e.payload});case"SET_ISSUBMITTING":return Ae({},t,{isSubmitting:e.payload});case"SET_ISVALIDATING":return Ae({},t,{isValidating:e.payload});case"SET_FIELD_VALUE":return Ae({},t,{values:ui(t.values,e.payload.field,e.payload.value)});case"SET_FIELD_TOUCHED":return Ae({},t,{touched:ui(t.touched,e.payload.field,e.payload.value)});case"SET_FIELD_ERROR":return Ae({},t,{errors:ui(t.errors,e.payload.field,e.payload.value)});case"RESET_FORM":return Ae({},t,e.payload);case"SET_FORMIK_STATE":return e.payload(t);case"SUBMIT_ATTEMPT":return Ae({},t,{touched:_E(t.values,!0),isSubmitting:!0,submitCount:t.submitCount+1});case"SUBMIT_FAILURE":return Ae({},t,{isSubmitting:!1});case"SUBMIT_SUCCESS":return Ae({},t,{isSubmitting:!1});default:return t}}var Br={},cl={};function wE(t){var e=t.validateOnChange,n=e===void 0?!0:e,r=t.validateOnBlur,i=r===void 0?!0:r,s=t.validateOnMount,o=s===void 0?!1:s,a=t.isInitialValid,l=t.enableReinitialize,u=l===void 0?!1:l,c=t.onSubmit,d=vE(t,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=Ae({validateOnChange:n,validateOnBlur:i,validateOnMount:o,onSubmit:c},d),m=T.useRef(f.initialValues),g=T.useRef(f.initialErrors||Br),v=T.useRef(f.initialTouched||cl),w=T.useRef(f.initialStatus),p=T.useRef(!1),h=T.useRef({});T.useEffect(function(){return p.current=!0,function(){p.current=!1}},[]);var y=T.useState(0),E=y[1],x=T.useRef({values:f.initialValues,errors:f.initialErrors||Br,touched:f.initialTouched||cl,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),C=x.current,S=T.useCallback(function(b){var R=x.current;x.current=ID(R,b),R!==x.current&&E(function(A){return A+1})},[]),P=T.useCallback(function(b,R){return new Promise(function(A,M){var V=f.validate(b,R);V==null?A(Br):sf(V)?V.then(function(re){A(re||Br)},function(re){M(re)}):A(V)})},[f.validate]),j=T.useCallback(function(b,R){var A=f.validationSchema,M=Yt(A)?A(R):A,V=R&&M.validateAt?M.validateAt(R,b):PD(b,M);return new Promise(function(re,Ne){V.then(function(){re(Br)},function(bn){bn.name==="ValidationError"?re(kD(bn)):Ne(bn)})})},[f.validationSchema]),L=T.useCallback(function(b,R){return new Promise(function(A){return A(h.current[b].validate(R))})},[]),G=T.useCallback(function(b){var R=Object.keys(h.current).filter(function(M){return Yt(h.current[M].validate)}),A=R.length>0?R.map(function(M){return L(M,wt(b,M))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(A).then(function(M){return M.reduce(function(V,re,Ne){return re==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||re&&(V=ui(V,R[Ne],re)),V},{})})},[L]),Lt=T.useCallback(function(b){return Promise.all([G(b),f.validationSchema?j(b):{},f.validate?P(b):{}]).then(function(R){var A=R[0],M=R[1],V=R[2],re=Lh.all([A,M,V],{arrayMerge:OD});return re})},[f.validate,f.validationSchema,G,P,j]),le=Ft(function(b){return b===void 0&&(b=C.values),S({type:"SET_ISVALIDATING",payload:!0}),Lt(b).then(function(R){return p.current&&(S({type:"SET_ISVALIDATING",payload:!1}),S({type:"SET_ERRORS",payload:R})),R})});T.useEffect(function(){o&&p.current===!0&&Gr(m.current,f.initialValues)&&le(m.current)},[o,le]);var _t=T.useCallback(function(b){var R=b&&b.values?b.values:m.current,A=b&&b.errors?b.errors:g.current?g.current:f.initialErrors||{},M=b&&b.touched?b.touched:v.current?v.current:f.initialTouched||{},V=b&&b.status?b.status:w.current?w.current:f.initialStatus;m.current=R,g.current=A,v.current=M,w.current=V;var re=function(){S({type:"RESET_FORM",payload:{isSubmitting:!!b&&!!b.isSubmitting,errors:A,touched:M,status:V,values:R,isValidating:!!b&&!!b.isValidating,submitCount:b&&b.submitCount&&typeof b.submitCount=="number"?b.submitCount:0}})};if(f.onReset){var Ne=f.onReset(C.values,Hg);sf(Ne)?Ne.then(re):re()}else re()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);T.useEffect(function(){p.current===!0&&!Gr(m.current,f.initialValues)&&u&&(m.current=f.initialValues,_t(),o&&le(m.current))},[u,f.initialValues,_t,o,le]),T.useEffect(function(){u&&p.current===!0&&!Gr(g.current,f.initialErrors)&&(g.current=f.initialErrors||Br,S({type:"SET_ERRORS",payload:f.initialErrors||Br}))},[u,f.initialErrors]),T.useEffect(function(){u&&p.current===!0&&!Gr(v.current,f.initialTouched)&&(v.current=f.initialTouched||cl,S({type:"SET_TOUCHED",payload:f.initialTouched||cl}))},[u,f.initialTouched]),T.useEffect(function(){u&&p.current===!0&&!Gr(w.current,f.initialStatus)&&(w.current=f.initialStatus,S({type:"SET_STATUS",payload:f.initialStatus}))},[u,f.initialStatus,f.initialTouched]);var Cn=Ft(function(b){if(h.current[b]&&Yt(h.current[b].validate)){var R=wt(C.values,b),A=h.current[b].validate(R);return sf(A)?(S({type:"SET_ISVALIDATING",payload:!0}),A.then(function(M){return M}).then(function(M){S({type:"SET_FIELD_ERROR",payload:{field:b,value:M}}),S({type:"SET_ISVALIDATING",payload:!1})})):(S({type:"SET_FIELD_ERROR",payload:{field:b,value:A}}),Promise.resolve(A))}else if(f.validationSchema)return S({type:"SET_ISVALIDATING",payload:!0}),j(C.values,b).then(function(M){return M}).then(function(M){S({type:"SET_FIELD_ERROR",payload:{field:b,value:wt(M,b)}}),S({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Tn=T.useCallback(function(b,R){var A=R.validate;h.current[b]={validate:A}},[]),lt=T.useCallback(function(b){delete h.current[b]},[]),O=Ft(function(b,R){S({type:"SET_TOUCHED",payload:b});var A=R===void 0?i:R;return A?le(C.values):Promise.resolve()}),F=T.useCallback(function(b){S({type:"SET_ERRORS",payload:b})},[]),$=Ft(function(b,R){var A=Yt(b)?b(C.values):b;S({type:"SET_VALUES",payload:A});var M=R===void 0?n:R;return M?le(A):Promise.resolve()}),te=T.useCallback(function(b,R){S({type:"SET_FIELD_ERROR",payload:{field:b,value:R}})},[]),ne=Ft(function(b,R,A){S({type:"SET_FIELD_VALUE",payload:{field:b,value:R}});var M=A===void 0?n:A;return M?le(ui(C.values,b,R)):Promise.resolve()}),Mt=T.useCallback(function(b,R){var A=R,M=b,V;if(!rf(b)){b.persist&&b.persist();var re=b.target?b.target:b.currentTarget,Ne=re.type,bn=re.name,md=re.id,gd=re.value,tT=re.checked,N5=re.outerHTML,Gg=re.options,nT=re.multiple;A=R||bn||md,M=/number|range/.test(Ne)?(V=parseFloat(gd),isNaN(V)?"":V):/checkbox/.test(Ne)?ND(wt(C.values,A),tT,gd):Gg&&nT?RD(Gg):gd}A&&ne(A,M)},[ne,C.values]),Ue=Ft(function(b){if(rf(b))return function(R){return Mt(R,b)};Mt(b)}),tt=Ft(function(b,R,A){R===void 0&&(R=!0),S({type:"SET_FIELD_TOUCHED",payload:{field:b,value:R}});var M=A===void 0?i:A;return M?le(C.values):Promise.resolve()}),Ke=T.useCallback(function(b,R){b.persist&&b.persist();var A=b.target,M=A.name,V=A.id,re=A.outerHTML,Ne=R||M||V;tt(Ne,!0)},[tt]),qe=Ft(function(b){if(rf(b))return function(R){return Ke(R,b)};Ke(b)}),Li=T.useCallback(function(b){Yt(b)?S({type:"SET_FORMIK_STATE",payload:b}):S({type:"SET_FORMIK_STATE",payload:function(){return b}})},[]),zr=T.useCallback(function(b){S({type:"SET_STATUS",payload:b})},[]),Gt=T.useCallback(function(b){S({type:"SET_ISSUBMITTING",payload:b})},[]),hd=Ft(function(){return S({type:"SUBMIT_ATTEMPT"}),le().then(function(b){var R=b instanceof Error,A=!R&&Object.keys(b).length===0;if(A){var M;try{if(M=qC(),M===void 0)return}catch(V){throw V}return Promise.resolve(M).then(function(V){return p.current&&S({type:"SUBMIT_SUCCESS"}),V}).catch(function(V){if(p.current)throw S({type:"SUBMIT_FAILURE"}),V})}else if(p.current&&(S({type:"SUBMIT_FAILURE"}),R))throw b})}),KC=Ft(function(b){b&&b.preventDefault&&Yt(b.preventDefault)&&b.preventDefault(),b&&b.stopPropagation&&Yt(b.stopPropagation)&&b.stopPropagation(),hd().catch(function(R){console.warn("Warning: An unhandled error was caught from submitForm()",R)})}),Hg={resetForm:_t,validateForm:le,validateField:Cn,setErrors:F,setFieldError:te,setFieldTouched:tt,setFieldValue:ne,setStatus:zr,setSubmitting:Gt,setTouched:O,setValues:$,setFormikState:Li,submitForm:hd},qC=Ft(function(){return c(C.values,Hg)}),YC=Ft(function(b){b&&b.preventDefault&&Yt(b.preventDefault)&&b.preventDefault(),b&&b.stopPropagation&&Yt(b.stopPropagation)&&b.stopPropagation(),_t()}),QC=T.useCallback(function(b){return{value:wt(C.values,b),error:wt(C.errors,b),touched:!!wt(C.touched,b),initialValue:wt(m.current,b),initialTouched:!!wt(v.current,b),initialError:wt(g.current,b)}},[C.errors,C.touched,C.values]),XC=T.useCallback(function(b){return{setValue:function(A,M){return ne(b,A,M)},setTouched:function(A,M){return tt(b,A,M)},setError:function(A){return te(b,A)}}},[ne,tt,te]),JC=T.useCallback(function(b){var R=Hc(b),A=R?b.name:b,M=wt(C.values,A),V={name:A,value:M,onChange:Ue,onBlur:qe};if(R){var re=b.type,Ne=b.value,bn=b.as,md=b.multiple;re==="checkbox"?Ne===void 0?V.checked=!!M:(V.checked=!!(Array.isArray(M)&&~M.indexOf(Ne)),V.value=Ne):re==="radio"?(V.checked=M===Ne,V.value=Ne):bn==="select"&&md&&(V.value=V.value||[],V.multiple=!0)}return V},[qe,Ue,C.values]),pd=T.useMemo(function(){return!Gr(m.current,C.values)},[m.current,C.values]),ZC=T.useMemo(function(){return typeof a<"u"?pd?C.errors&&Object.keys(C.errors).length===0:a!==!1&&Yt(a)?a(f):a:C.errors&&Object.keys(C.errors).length===0},[a,pd,C.errors,f]),eT=Ae({},C,{initialValues:m.current,initialErrors:g.current,initialTouched:v.current,initialStatus:w.current,handleBlur:qe,handleChange:Ue,handleReset:YC,handleSubmit:KC,resetForm:_t,setErrors:F,setFormikState:Li,setFieldTouched:tt,setFieldValue:ne,setFieldError:te,setStatus:zr,setSubmitting:Gt,setTouched:O,setValues:$,submitForm:hd,validateForm:le,validateField:Cn,isValid:ZC,dirty:pd,unregisterField:lt,registerField:Tn,getFieldProps:JC,getFieldMeta:QC,getFieldHelpers:XC,validateOnBlur:i,validateOnChange:n,validateOnMount:o});return eT}function kD(t){var e={};if(t.inner){if(t.inner.length===0)return ui(e,t.path,t.message);for(var i=t.inner,n=Array.isArray(i),r=0,i=n?i:i[Symbol.iterator]();;){var s;if(n){if(r>=i.length)break;s=i[r++]}else{if(r=i.next(),r.done)break;s=r.value}var o=s;wt(e,o.path)||(e=ui(e,o.path,o.message))}}return e}function PD(t,e,n,r){n===void 0&&(n=!1);var i=zh(t);return e[n?"validateSync":"validate"](i,{abortEarly:!1,context:r||i})}function zh(t){var e=Array.isArray(t)?[]:{};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=String(n);Array.isArray(t[r])===!0?e[r]=t[r].map(function(i){return Array.isArray(i)===!0||Av(i)?zh(i):i!==""?i:void 0}):Av(t[r])?e[r]=zh(t[r]):e[r]=t[r]!==""?t[r]:void 0}return e}function OD(t,e,n){var r=t.slice();return e.forEach(function(s,o){if(typeof r[o]>"u"){var a=n.clone!==!1,l=a&&n.isMergeableObject(s);r[o]=l?Lh(Array.isArray(s)?[]:{},s,n):s}else n.isMergeableObject(s)?r[o]=Lh(t[o],s,n):t.indexOf(s)===-1&&r.push(s)}),r}function RD(t){return Array.from(t).filter(function(e){return e.selected}).map(function(e){return e.value})}function ND(t,e,n){if(typeof t=="boolean")return!!e;var r=[],i=!1,s=-1;if(Array.isArray(t))r=t,s=t.indexOf(n),i=s>=0;else if(!n||n=="true"||n=="false")return!!e;return e&&n&&!i?r.concat(n):i?r.slice(0,s).concat(r.slice(s+1)):r}var AD=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?T.useLayoutEffect:T.useEffect;function Ft(t){var e=T.useRef(t);return AD(function(){e.current=t}),T.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e.current.apply(void 0,r)},[])}var DD=T.forwardRef(function(t,e){var n=t.action,r=vE(t,["action"]),i=n??"#",s=TD(),o=s.handleReset,a=s.handleSubmit;return T.createElement("form",Ae({onSubmit:a,ref:e,onReset:o,action:i},r))});DD.displayName="Form";const _n="/Learn-Lingo/assets/sprite-20c9a52c.svg";function ze(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var LD=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),o_=LD,of=()=>Math.random().toString(36).substring(7).split("").join("."),MD={INIT:`@@redux/INIT${of()}`,REPLACE:`@@redux/REPLACE${of()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${of()}`},Ou=MD;function Bm(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function Vm(t,e,n){if(typeof t!="function")throw new Error(ze(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(ze(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(ze(1));return n(Vm)(t,e)}let r=t,i=e,s=new Map,o=s,a=0,l=!1;function u(){o===s&&(o=new Map,s.forEach((w,p)=>{o.set(p,w)}))}function c(){if(l)throw new Error(ze(3));return i}function d(w){if(typeof w!="function")throw new Error(ze(4));if(l)throw new Error(ze(5));let p=!0;u();const h=a++;return o.set(h,w),function(){if(p){if(l)throw new Error(ze(6));p=!1,u(),o.delete(h),s=null}}}function f(w){if(!Bm(w))throw new Error(ze(7));if(typeof w.type>"u")throw new Error(ze(8));if(typeof w.type!="string")throw new Error(ze(17));if(l)throw new Error(ze(9));try{l=!0,i=r(i,w)}finally{l=!1}return(s=o).forEach(h=>{h()}),w}function m(w){if(typeof w!="function")throw new Error(ze(10));r=w,f({type:Ou.REPLACE})}function g(){const w=d;return{subscribe(p){if(typeof p!="object"||p===null)throw new Error(ze(11));function h(){const E=p;E.next&&E.next(c())}return h(),{unsubscribe:w(h)}},[o_](){return this}}}return f({type:Ou.INIT}),{dispatch:f,subscribe:d,getState:c,replaceReducer:m,[o_]:g}}function FD(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:Ou.INIT})>"u")throw new Error(ze(12));if(typeof n(void 0,{type:Ou.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(ze(13))})}function SE(t){const e=Object.keys(t),n={};for(let s=0;s<e.length;s++){const o=e[s];typeof t[o]=="function"&&(n[o]=t[o])}const r=Object.keys(n);let i;try{FD(n)}catch(s){i=s}return function(o={},a){if(i)throw i;let l=!1;const u={};for(let c=0;c<r.length;c++){const d=r[c],f=n[d],m=o[d],g=f(m,a);if(typeof g>"u")throw a&&a.type,new Error(ze(14));u[d]=g,l=l||g!==m}return l=l||r.length!==Object.keys(o).length,l?u:o}}function Ru(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function $D(...t){return e=>(n,r)=>{const i=e(n,r);let s=()=>{throw new Error(ze(15))};const o={getState:i.getState,dispatch:(l,...u)=>s(l,...u)},a=t.map(l=>l(o));return s=Ru(...a)(i.dispatch),{...i,dispatch:s}}}function jD(t){return Bm(t)&&"type"in t&&typeof t.type=="string"}var EE=Symbol.for("immer-nothing"),a_=Symbol.for("immer-draftable"),Ot=Symbol.for("immer-state");function Zt(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var Is=Object.getPrototypeOf;function kr(t){return!!t&&!!t[Ot]}function Vn(t){var e;return t?xE(t)||Array.isArray(t)||!!t[a_]||!!((e=t.constructor)!=null&&e[a_])||Kc(t)||qc(t):!1}var UD=Object.prototype.constructor.toString();function xE(t){if(!t||typeof t!="object")return!1;const e=Is(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===UD}function na(t,e){Gc(t)===0?Object.entries(t).forEach(([n,r])=>{e(n,r,t)}):t.forEach((n,r)=>e(r,n,t))}function Gc(t){const e=t[Ot];return e?e.type_:Array.isArray(t)?1:Kc(t)?2:qc(t)?3:0}function Bh(t,e){return Gc(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function CE(t,e,n){const r=Gc(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function zD(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function Kc(t){return t instanceof Map}function qc(t){return t instanceof Set}function qr(t){return t.copy_||t.base_}function Vh(t,e){if(Kc(t))return new Map(t);if(qc(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);if(!e&&xE(t))return Is(t)?{...t}:Object.assign(Object.create(null),t);const n=Object.getOwnPropertyDescriptors(t);delete n[Ot];let r=Reflect.ownKeys(n);for(let i=0;i<r.length;i++){const s=r[i],o=n[s];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(n[s]={configurable:!0,writable:!0,enumerable:o.enumerable,value:t[s]})}return Object.create(Is(t),n)}function Wm(t,e=!1){return Yc(t)||kr(t)||!Vn(t)||(Gc(t)>1&&(t.set=t.add=t.clear=t.delete=BD),Object.freeze(t),e&&na(t,(n,r)=>Wm(r,!0))),t}function BD(){Zt(2)}function Yc(t){return Object.isFrozen(t)}var VD={};function vi(t){const e=VD[t];return e||Zt(0,t),e}var ra;function TE(){return ra}function WD(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function l_(t,e){e&&(vi("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function Wh(t){Hh(t),t.drafts_.forEach(HD),t.drafts_=null}function Hh(t){t===ra&&(ra=t.parent_)}function u_(t){return ra=WD(ra,t)}function HD(t){const e=t[Ot];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function c_(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[Ot].modified_&&(Wh(e),Zt(4)),Vn(t)&&(t=Nu(e,t),e.parent_||Au(e,t)),e.patches_&&vi("Patches").generateReplacementPatches_(n[Ot].base_,t,e.patches_,e.inversePatches_)):t=Nu(e,n,[]),Wh(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==EE?t:void 0}function Nu(t,e,n){if(Yc(e))return e;const r=e[Ot];if(!r)return na(e,(i,s)=>d_(t,r,e,i,s,n)),e;if(r.scope_!==t)return e;if(!r.modified_)return Au(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let s=i,o=!1;r.type_===3&&(s=new Set(i),i.clear(),o=!0),na(s,(a,l)=>d_(t,r,i,a,l,n,o)),Au(t,i,!1),n&&t.patches_&&vi("Patches").generatePatches_(r,n,t.patches_,t.inversePatches_)}return r.copy_}function d_(t,e,n,r,i,s,o){if(kr(i)){const a=s&&e&&e.type_!==3&&!Bh(e.assigned_,r)?s.concat(r):void 0,l=Nu(t,i,a);if(CE(n,r,l),kr(l))t.canAutoFreeze_=!1;else return}else o&&n.add(i);if(Vn(i)&&!Yc(i)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;Nu(t,i),(!e||!e.scope_.parent_)&&Au(t,i)}}function Au(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&Wm(e,n)}function GD(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:TE(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,s=Hm;n&&(i=[r],s=ia);const{revoke:o,proxy:a}=Proxy.revocable(i,s);return r.draft_=a,r.revoke_=o,a}var Hm={get(t,e){if(e===Ot)return t;const n=qr(t);if(!Bh(n,e))return KD(t,n,e);const r=n[e];return t.finalized_||!Vn(r)?r:r===af(t.base_,e)?(lf(t),t.copy_[e]=Kh(r,t)):r},has(t,e){return e in qr(t)},ownKeys(t){return Reflect.ownKeys(qr(t))},set(t,e,n){const r=bE(qr(t),e);if(r!=null&&r.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=af(qr(t),e),s=i==null?void 0:i[Ot];if(s&&s.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(zD(n,i)&&(n!==void 0||Bh(t.base_,e)))return!0;lf(t),Gh(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return af(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,lf(t),Gh(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=qr(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){Zt(11)},getPrototypeOf(t){return Is(t.base_)},setPrototypeOf(){Zt(12)}},ia={};na(Hm,(t,e)=>{ia[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});ia.deleteProperty=function(t,e){return ia.set.call(this,t,e,void 0)};ia.set=function(t,e,n){return Hm.set.call(this,t[0],e,n,t[0])};function af(t,e){const n=t[Ot];return(n?qr(n):t)[e]}function KD(t,e,n){var i;const r=bE(e,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(t.draft_):void 0}function bE(t,e){if(!(e in t))return;let n=Is(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Is(n)}}function Gh(t){t.modified_||(t.modified_=!0,t.parent_&&Gh(t.parent_))}function lf(t){t.copy_||(t.copy_=Vh(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var qD=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const s=n;n=e;const o=this;return function(l=s,...u){return o.produce(l,c=>n.call(this,c,...u))}}typeof n!="function"&&Zt(6),r!==void 0&&typeof r!="function"&&Zt(7);let i;if(Vn(e)){const s=u_(this),o=Kh(e,void 0);let a=!0;try{i=n(o),a=!1}finally{a?Wh(s):Hh(s)}return l_(s,r),c_(i,s)}else if(!e||typeof e!="object"){if(i=n(e),i===void 0&&(i=e),i===EE&&(i=void 0),this.autoFreeze_&&Wm(i,!0),r){const s=[],o=[];vi("Patches").generateReplacementPatches_(e,i,s,o),r(s,o)}return i}else Zt(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(o,...a)=>this.produceWithPatches(o,l=>e(l,...a));let r,i;return[this.produce(e,n,(o,a)=>{r=o,i=a}),r,i]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){Vn(t)||Zt(8),kr(t)&&(t=IE(t));const e=u_(this),n=Kh(t,void 0);return n[Ot].isManual_=!0,Hh(e),n}finishDraft(t,e){const n=t&&t[Ot];(!n||!n.isManual_)&&Zt(9);const{scope_:r}=n;return l_(r,e),c_(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=vi("Patches").applyPatches_;return kr(t)?r(t,e):this.produce(t,i=>r(i,e))}};function Kh(t,e){const n=Kc(t)?vi("MapSet").proxyMap_(t,e):qc(t)?vi("MapSet").proxySet_(t,e):GD(t,e);return(e?e.scope_:TE()).drafts_.push(n),n}function IE(t){return kr(t)||Zt(10,t),kE(t)}function kE(t){if(!Vn(t)||Yc(t))return t;const e=t[Ot];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=Vh(t,e.scope_.immer_.useStrictShallowCopy_)}else n=Vh(t,!0);return na(n,(r,i)=>{CE(n,r,kE(i))}),e&&(e.finalized_=!1),n}var Rt=new qD,PE=Rt.produce;Rt.produceWithPatches.bind(Rt);Rt.setAutoFreeze.bind(Rt);Rt.setUseStrictShallowCopy.bind(Rt);Rt.applyPatches.bind(Rt);Rt.createDraft.bind(Rt);Rt.finishDraft.bind(Rt);function YD(t,e=`expected a function, instead received ${typeof t}`){if(typeof t!="function")throw new TypeError(e)}function QD(t,e=`expected an object, instead received ${typeof t}`){if(typeof t!="object")throw new TypeError(e)}function XD(t,e="expected all items to be functions, instead received the following types: "){if(!t.every(n=>typeof n=="function")){const n=t.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${e}[${n}]`)}}var f_=t=>Array.isArray(t)?t:[t];function JD(t){const e=Array.isArray(t[0])?t[0]:t;return XD(e,"createSelector expects all input-selectors to be functions, but received the following types: "),e}function ZD(t,e){const n=[],{length:r}=t;for(let i=0;i<r;i++)n.push(t[i].apply(null,e));return n}var eL=class{constructor(t){this.value=t}deref(){return this.value}},tL=typeof WeakRef<"u"?WeakRef:eL,nL=0,h_=1;function dl(){return{s:nL,v:void 0,o:null,p:null}}function Gm(t,e={}){let n=dl();const{resultEqualityCheck:r}=e;let i,s=0;function o(){var d;let a=n;const{length:l}=arguments;for(let f=0,m=l;f<m;f++){const g=arguments[f];if(typeof g=="function"||typeof g=="object"&&g!==null){let v=a.o;v===null&&(a.o=v=new WeakMap);const w=v.get(g);w===void 0?(a=dl(),v.set(g,a)):a=w}else{let v=a.p;v===null&&(a.p=v=new Map);const w=v.get(g);w===void 0?(a=dl(),v.set(g,a)):a=w}}const u=a;let c;if(a.s===h_?c=a.v:(c=t.apply(null,arguments),s++),u.s=h_,r){const f=((d=i==null?void 0:i.deref)==null?void 0:d.call(i))??i;f!=null&&r(f,c)&&(c=f,s!==0&&s--),i=typeof c=="object"&&c!==null||typeof c=="function"?new tL(c):c}return u.v=c,c}return o.clearCache=()=>{n=dl(),o.resetResultsCount()},o.resultsCount=()=>s,o.resetResultsCount=()=>{s=0},o}function OE(t,...e){const n=typeof t=="function"?{memoize:t,memoizeOptions:e}:t,r=(...i)=>{let s=0,o=0,a,l={},u=i.pop();typeof u=="object"&&(l=u,u=i.pop()),YD(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const c={...n,...l},{memoize:d,memoizeOptions:f=[],argsMemoize:m=Gm,argsMemoizeOptions:g=[],devModeChecks:v={}}=c,w=f_(f),p=f_(g),h=JD(i),y=d(function(){return s++,u.apply(null,arguments)},...w),E=m(function(){o++;const C=ZD(h,arguments);return a=y.apply(null,C),a},...p);return Object.assign(E,{resultFunc:u,memoizedResultFunc:y,dependencies:h,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>a,recomputations:()=>s,resetRecomputations:()=>{s=0},memoize:d,argsMemoize:m})};return Object.assign(r,{withTypes:()=>r}),r}var rL=OE(Gm),iL=Object.assign((t,e=rL)=>{QD(t,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof t}`);const n=Object.keys(t),r=n.map(s=>t[s]);return e(r,(...s)=>s.reduce((o,a,l)=>(o[n[l]]=a,o),{}))},{withTypes:()=>iL});function RE(t){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,t):i(s)}var sL=RE(),oL=RE,aL=(...t)=>{const e=OE(...t);return(...n)=>{const r=e(...n),i=(s,...o)=>r(kr(s)?IE(s):s,...o);return Object.assign(i,r),i}};aL(Gm);var lL=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Ru:Ru.apply(null,arguments)},uL=t=>t&&typeof t.match=="function";function _r(t,e){function n(...r){if(e){let i=e(...r);if(!i)throw new Error(an(0));return{type:t,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>jD(r)&&r.type===t,n}var NE=class po extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,po.prototype)}static get[Symbol.species](){return po}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new po(...e[0].concat(this)):new po(...e.concat(this))}};function p_(t){return Vn(t)?PE(t,()=>{}):t}function m_(t,e,n){if(t.has(e)){let i=t.get(e);return n.update&&(i=n.update(i,e,t),t.set(e,i)),i}if(!n.insert)throw new Error(an(10));const r=n.insert(e,t);return t.set(e,r),r}function cL(t){return typeof t=="boolean"}var dL=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=e??{};let o=new NE;return n&&(cL(n)?o.push(sL):o.push(oL(n.extraArgument))),o},fL="RTK_autoBatch",AE=t=>e=>{setTimeout(e,t)},hL=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:AE(10),pL=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let i=!0,s=!1,o=!1;const a=new Set,l=t.type==="tick"?queueMicrotask:t.type==="raf"?hL:t.type==="callback"?t.queueNotification:AE(t.timeout),u=()=>{o=!1,s&&(s=!1,a.forEach(c=>c()))};return Object.assign({},r,{subscribe(c){const d=()=>i&&c(),f=r.subscribe(d);return a.add(c),()=>{f(),a.delete(c)}},dispatch(c){var d;try{return i=!((d=c==null?void 0:c.meta)!=null&&d[fL]),s=!i,s&&(o||(o=!0,l(u))),r.dispatch(c)}finally{i=!0}}})},mL=t=>function(n){const{autoBatch:r=!0}=n??{};let i=new NE(t);return r&&i.push(pL(typeof r=="object"?r:void 0)),i},gL=!0;function yL(t){const e=dL(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=t||{};let a;if(typeof n=="function")a=n;else if(Bm(n))a=SE(n);else throw new Error(an(1));let l;typeof r=="function"?l=r(e):l=e();let u=Ru;i&&(u=lL({trace:!gL,...typeof i=="object"&&i}));const c=$D(...l),d=mL(c);let f=typeof o=="function"?o(d):d();const m=u(...f);return Vm(a,s,m)}function DE(t){const e={},n=[];let r;const i={addCase(s,o){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(an(28));if(a in e)throw new Error(an(29));return e[a]=o,i},addMatcher(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return t(i),[e,n,r]}function vL(t){return typeof t=="function"}function _L(t,e){let[n,r,i]=DE(e),s;if(vL(t))s=()=>p_(t());else{const a=p_(t);s=()=>a}function o(a=s(),l){let u=[n[l.type],...r.filter(({matcher:c})=>c(l)).map(({reducer:c})=>c)];return u.filter(c=>!!c).length===0&&(u=[i]),u.reduce((c,d)=>{if(d)if(kr(c)){const m=d(c,l);return m===void 0?c:m}else{if(Vn(c))return PE(c,f=>d(f,l));{const f=d(c,l);if(f===void 0){if(c===null)return c;throw new Error(an(9))}return f}}return c},a)}return o.getInitialState=s,o}var wL="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",SL=(t=21)=>{let e="",n=t;for(;n--;)e+=wL[Math.random()*64|0];return e},EL=(t,e)=>uL(t)?t.match(e):t(e);function xL(...t){return e=>t.some(n=>EL(n,e))}var CL=["name","message","stack","code"],uf=class{constructor(t,e){yd(this,"_type");this.payload=t,this.meta=e}},g_=class{constructor(t,e){yd(this,"_type");this.payload=t,this.meta=e}},TL=t=>{if(typeof t=="object"&&t!==null){const e={};for(const n of CL)typeof t[n]=="string"&&(e[n]=t[n]);return e}return{message:String(t)}},Qc=(()=>{function t(e,n,r){const i=_r(e+"/fulfilled",(l,u,c,d)=>({payload:l,meta:{...d||{},arg:c,requestId:u,requestStatus:"fulfilled"}})),s=_r(e+"/pending",(l,u,c)=>({payload:void 0,meta:{...c||{},arg:u,requestId:l,requestStatus:"pending"}})),o=_r(e+"/rejected",(l,u,c,d,f)=>({payload:d,error:(r&&r.serializeError||TL)(l||"Rejected"),meta:{...f||{},arg:c,requestId:u,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(l==null?void 0:l.name)==="AbortError",condition:(l==null?void 0:l.name)==="ConditionError"}}));function a(l){return(u,c,d)=>{const f=r!=null&&r.idGenerator?r.idGenerator(l):SL(),m=new AbortController;let g;function v(p){g=p,m.abort()}const w=async function(){var y,E;let p;try{let x=(y=r==null?void 0:r.condition)==null?void 0:y.call(r,l,{getState:c,extra:d});if(IL(x)&&(x=await x),x===!1||m.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const C=new Promise((S,P)=>m.signal.addEventListener("abort",()=>P({name:"AbortError",message:g||"Aborted"})));u(s(f,l,(E=r==null?void 0:r.getPendingMeta)==null?void 0:E.call(r,{requestId:f,arg:l},{getState:c,extra:d}))),p=await Promise.race([C,Promise.resolve(n(l,{dispatch:u,getState:c,extra:d,requestId:f,signal:m.signal,abort:v,rejectWithValue:(S,P)=>new uf(S,P),fulfillWithValue:(S,P)=>new g_(S,P)})).then(S=>{if(S instanceof uf)throw S;return S instanceof g_?i(S.payload,f,l,S.meta):i(S,f,l)})])}catch(x){p=x instanceof uf?o(null,f,l,x.payload,x.meta):o(x,f,l)}return r&&!r.dispatchConditionRejection&&o.match(p)&&p.meta.condition||u(p),p}();return Object.assign(w,{abort:v,requestId:f,arg:l,unwrap(){return w.then(bL)}})}}return Object.assign(a,{pending:s,rejected:o,fulfilled:i,settled:xL(o,i),typePrefix:e})}return t.withTypes=()=>t,t})();function bL(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function IL(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var kL=Symbol.for("rtk-slice-createasyncthunk");function PL(t,e){return`${t}/${e}`}function OL({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[kL];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(an(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(NL()):i.reducers)||{},l=Object.keys(a),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(w,p){const h=typeof w=="string"?w:w.type;if(!h)throw new Error(an(12));if(h in u.sliceCaseReducersByType)throw new Error(an(13));return u.sliceCaseReducersByType[h]=p,c},addMatcher(w,p){return u.sliceMatchers.push({matcher:w,reducer:p}),c},exposeAction(w,p){return u.actionCreators[w]=p,c},exposeCaseReducer(w,p){return u.sliceCaseReducersByName[w]=p,c}};l.forEach(w=>{const p=a[w],h={reducerName:w,type:PL(s,w),createNotation:typeof i.reducers=="function"};DL(p)?ML(h,p,c,e):AL(h,p,c)});function d(){const[w={},p=[],h=void 0]=typeof i.extraReducers=="function"?DE(i.extraReducers):[i.extraReducers],y={...w,...u.sliceCaseReducersByType};return _L(i.initialState,E=>{for(let x in y)E.addCase(x,y[x]);for(let x of u.sliceMatchers)E.addMatcher(x.matcher,x.reducer);for(let x of p)E.addMatcher(x.matcher,x.reducer);h&&E.addDefaultCase(h)})}const f=w=>w,m=new WeakMap;let g;const v={name:s,reducerPath:o,reducer(w,p){return g||(g=d()),g(w,p)},actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState(){return g||(g=d()),g.getInitialState()},getSelectors(w=f){const p=m_(m,this,{insert:()=>new WeakMap});return m_(p,w,{insert:()=>{const h={};for(const[y,E]of Object.entries(i.selectors??{}))h[y]=RL(this,E,w,this!==v);return h}})},selectSlice(w){let p=w[this.reducerPath];return typeof p>"u"&&this!==v&&(p=this.getInitialState()),p},get selectors(){return this.getSelectors(this.selectSlice)},injectInto(w,{reducerPath:p,...h}={}){const y=p??this.reducerPath;return w.inject({reducerPath:y,reducer:this.reducer},h),{...this,reducerPath:y}}};return v}}function RL(t,e,n,r){function i(s,...o){let a=n.call(t,s);return typeof a>"u"&&r&&(a=t.getInitialState()),e(a,...o)}return i.unwrapped=e,i}var LE=OL();function NL(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function AL({type:t,reducerName:e,createNotation:n},r,i){let s,o;if("reducer"in r){if(n&&!LL(r))throw new Error(an(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(t,s).exposeCaseReducer(e,s).exposeAction(e,o?_r(t,o):_r(t))}function DL(t){return t._reducerDefinitionType==="asyncThunk"}function LL(t){return t._reducerDefinitionType==="reducerWithPrepare"}function ML({type:t,reducerName:e},n,r,i){if(!i)throw new Error(an(18));const{payloadCreator:s,fulfilled:o,pending:a,rejected:l,settled:u,options:c}=n,d=i(t,s,c);r.exposeAction(e,d),o&&r.addCase(d.fulfilled,o),a&&r.addCase(d.pending,a),l&&r.addCase(d.rejected,l),u&&r.addMatcher(d.settled,u),r.exposeCaseReducer(e,{fulfilled:o||fl,pending:a||fl,rejected:l||fl,settled:u||fl})}function fl(){}var Km="listenerMiddleware";_r(`${Km}/add`);_r(`${Km}/removeAll`);_r(`${Km}/remove`);function an(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}/**
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
 */const ME={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const k=function(t,e){if(!t)throw Vs(e)},Vs=function(t){return new Error("Firebase Database ("+ME.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const FE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},FL=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},qm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(f=64)),r.push(n[c],n[d],n[f],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(FE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):FL(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new $L;const f=s<<2|a>>4;if(r.push(f),u!==64){const m=a<<4&240|u>>2;if(r.push(m),d!==64){const g=u<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $L extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $E=function(t){const e=FE(t);return qm.encodeByteArray(e,!0)},Du=function(t){return $E(t).replace(/\./g,"")},Lu=function(t){try{return qm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function jL(t){return jE(void 0,t)}function jE(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!UL(n)||(t[n]=jE(t[n],e[n]));return t}function UL(t){return t!=="__proto__"}/**
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
 */function zL(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const BL=()=>zL().__FIREBASE_DEFAULTS__,VL=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},WL=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Lu(t[1]);return e&&JSON.parse(e)},Ym=()=>{try{return BL()||VL()||WL()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},HL=t=>{var e,n;return(n=(e=Ym())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},GL=t=>{const e=HL(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},UE=()=>{var t;return(t=Ym())===null||t===void 0?void 0:t.config},KL=t=>{var e;return(e=Ym())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Qm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function qL(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Du(JSON.stringify(n)),Du(JSON.stringify(o)),a].join(".")}/**
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
 */function En(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(En())}function YL(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function BE(){return ME.NODE_ADMIN===!0}function QL(){try{return typeof indexedDB=="object"}catch{return!1}}function XL(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const JL="FirebaseError";class Fr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=JL,Object.setPrototypeOf(this,Fr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ra.prototype.create)}}class Ra{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ZL(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Fr(i,a,r)}}function ZL(t,e){return t.replace(eM,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const eM=/\{\$([^}]+)}/g;/**
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
 */const VE=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=sa(Lu(s[0])||""),n=sa(Lu(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},tM=function(t){const e=VE(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},nM=function(t){const e=VE(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function qn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ks(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function y_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Mu(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Fu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(v_(s)&&v_(o)){if(!Fu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function v_(t){return t!==null&&typeof t=="object"}/**
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
 */function Xc(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function mo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function go(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class rM{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function iM(t,e){const n=new sM(t,e);return n.subscribe.bind(n)}class sM{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");oM(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=cf),i.error===void 0&&(i.error=cf),i.complete===void 0&&(i.complete=cf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function oM(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function cf(){}function WE(t,e){return`${t} failed: ${e} argument `}/**
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
 */const aM=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,k(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Jc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ht(t){return t&&t._delegate?t._delegate:t}class _i{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yr="[DEFAULT]";/**
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
 */let lM=class{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Qm;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cM(e))try{this.getOrInitializeService({instanceIdentifier:Yr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yr){return this.instances.has(e)}getOptions(e=Yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:uM(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yr){return this.component?this.component.multipleInstances?e:Yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function uM(t){return t===Yr?void 0:t}function cM(t){return t.instantiationMode==="EAGER"}/**
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
 */class dM{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lM(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const fM={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},hM=oe.INFO,pM={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},mM=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=pM[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jm{constructor(e){this.name=e,this._logLevel=hM,this._logHandler=mM,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fM[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const gM=(t,e)=>e.some(n=>t instanceof n);let __,w_;function yM(){return __||(__=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vM(){return w_||(w_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const HE=new WeakMap,qh=new WeakMap,GE=new WeakMap,df=new WeakMap,Zm=new WeakMap;function _M(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(wr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&HE.set(n,t)}).catch(()=>{}),Zm.set(e,t),e}function wM(t){if(qh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});qh.set(t,e)}let Yh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||GE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function SM(t){Yh=t(Yh)}function EM(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ff(this),e,...n);return GE.set(r,e.sort?e.sort():[e]),wr(r)}:vM().includes(t)?function(...e){return t.apply(ff(this),e),wr(HE.get(this))}:function(...e){return wr(t.apply(ff(this),e))}}function xM(t){return typeof t=="function"?EM(t):(t instanceof IDBTransaction&&wM(t),gM(t,yM())?new Proxy(t,Yh):t)}function wr(t){if(t instanceof IDBRequest)return _M(t);if(df.has(t))return df.get(t);const e=xM(t);return e!==t&&(df.set(t,e),Zm.set(e,t)),e}const ff=t=>Zm.get(t);function CM(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=wr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(wr(o.result),l.oldVersion,l.newVersion,wr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const TM=["get","getKey","getAll","getAllKeys","count"],bM=["put","add","delete","clear"],hf=new Map;function S_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(hf.get(e))return hf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=bM.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||TM.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return hf.set(e,s),s}SM(t=>({...t,get:(e,n,r)=>S_(e,n)||t.get(e,n,r),has:(e,n)=>!!S_(e,n)||t.has(e,n)}));/**
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
 */class IM{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kM(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function kM(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qh="@firebase/app",E_="0.9.25";/**
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
 */const wi=new Jm("@firebase/app"),PM="@firebase/app-compat",OM="@firebase/analytics-compat",RM="@firebase/analytics",NM="@firebase/app-check-compat",AM="@firebase/app-check",DM="@firebase/auth",LM="@firebase/auth-compat",MM="@firebase/database",FM="@firebase/database-compat",$M="@firebase/functions",jM="@firebase/functions-compat",UM="@firebase/installations",zM="@firebase/installations-compat",BM="@firebase/messaging",VM="@firebase/messaging-compat",WM="@firebase/performance",HM="@firebase/performance-compat",GM="@firebase/remote-config",KM="@firebase/remote-config-compat",qM="@firebase/storage",YM="@firebase/storage-compat",QM="@firebase/firestore",XM="@firebase/firestore-compat",JM="firebase",ZM="10.7.1";/**
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
 */const Xh="[DEFAULT]",eF={[Qh]:"fire-core",[PM]:"fire-core-compat",[RM]:"fire-analytics",[OM]:"fire-analytics-compat",[AM]:"fire-app-check",[NM]:"fire-app-check-compat",[DM]:"fire-auth",[LM]:"fire-auth-compat",[MM]:"fire-rtdb",[FM]:"fire-rtdb-compat",[$M]:"fire-fn",[jM]:"fire-fn-compat",[UM]:"fire-iid",[zM]:"fire-iid-compat",[BM]:"fire-fcm",[VM]:"fire-fcm-compat",[WM]:"fire-perf",[HM]:"fire-perf-compat",[GM]:"fire-rc",[KM]:"fire-rc-compat",[qM]:"fire-gcs",[YM]:"fire-gcs-compat",[QM]:"fire-fst",[XM]:"fire-fst-compat","fire-js":"fire-js",[JM]:"fire-js-all"};/**
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
 */const $u=new Map,Jh=new Map;function tF(t,e){try{t.container.addComponent(e)}catch(n){wi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ps(t){const e=t.name;if(Jh.has(e))return wi.debug(`There were multiple attempts to register component ${e}.`),!1;Jh.set(e,t);for(const n of $u.values())tF(n,t);return!0}function KE(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const nF={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Sr=new Ra("app","Firebase",nF);/**
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
 */class rF{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _i("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sr.create("app-deleted",{appName:this._name})}}/**
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
 */const Zc=ZM;function qE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Xh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Sr.create("bad-app-name",{appName:String(i)});if(n||(n=UE()),!n)throw Sr.create("no-options");const s=$u.get(i);if(s){if(Fu(n,s.options)&&Fu(r,s.config))return s;throw Sr.create("duplicate-app",{appName:i})}const o=new dM(i);for(const l of Jh.values())o.addComponent(l);const a=new rF(n,r,o);return $u.set(i,a),a}function iF(t=Xh){const e=$u.get(t);if(!e&&t===Xh&&UE())return qE();if(!e)throw Sr.create("no-app",{appName:t});return e}function Er(t,e,n){var r;let i=(r=eF[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wi.warn(a.join(" "));return}Ps(new _i(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const sF="firebase-heartbeat-database",oF=1,oa="firebase-heartbeat-store";let pf=null;function YE(){return pf||(pf=CM(sF,oF,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(oa)}}}).catch(t=>{throw Sr.create("idb-open",{originalErrorMessage:t.message})})),pf}async function aF(t){try{return await(await YE()).transaction(oa).objectStore(oa).get(QE(t))}catch(e){if(e instanceof Fr)wi.warn(e.message);else{const n=Sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wi.warn(n.message)}}}async function x_(t,e){try{const r=(await YE()).transaction(oa,"readwrite");await r.objectStore(oa).put(e,QE(t)),await r.done}catch(n){if(n instanceof Fr)wi.warn(n.message);else{const r=Sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wi.warn(r.message)}}}function QE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const lF=1024,uF=30*24*60*60*1e3;class cF{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fF(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=C_();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=uF}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=C_(),{heartbeatsToSend:r,unsentEntries:i}=dF(this._heartbeatsCache.heartbeats),s=Du(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function C_(){return new Date().toISOString().substring(0,10)}function dF(t,e=lF){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),T_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),T_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class fF{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return QL()?XL().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await aF(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return x_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return x_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function T_(t){return Du(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function hF(t){Ps(new _i("platform-logger",e=>new IM(e),"PRIVATE")),Ps(new _i("heartbeat",e=>new cF(e),"PRIVATE")),Er(Qh,E_,t),Er(Qh,E_,"esm2017"),Er("fire-js","")}hF("");function XE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pF=XE,JE=new Ra("auth","Firebase",XE());/**
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
 */const ju=new Jm("@firebase/auth");function mF(t,...e){ju.logLevel<=oe.WARN&&ju.warn(`Auth (${Zc}): ${t}`,...e)}function $l(t,...e){ju.logLevel<=oe.ERROR&&ju.error(`Auth (${Zc}): ${t}`,...e)}/**
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
 */function Si(t,...e){throw tg(t,...e)}function eg(t,...e){return tg(t,...e)}function gF(t,e,n){const r=Object.assign(Object.assign({},pF()),{[e]:n});return new Ra("auth","Firebase",r).create(e,{appName:t.name})}function tg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return JE.create(t,...e)}function Z(t,e,...n){if(!t)throw tg(e,...n)}function Ln(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $l(e),new Error(e)}function Uu(t,e){t||Ln(e)}function yF(){return b_()==="http:"||b_()==="https:"}function b_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function vF(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yF()||YL()||"connection"in navigator)?navigator.onLine:!0}function _F(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Na{constructor(e,n){this.shortDelay=e,this.longDelay=n,Uu(n>e,"Short delay should be less than long delay!"),this.isMobile=Xm()||zE()}get(){return vF()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function wF(t,e){Uu(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ZE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const SF={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const EF=new Na(3e4,6e4);function $r(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function jr(t,e,n,r,i={}){return ex(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Xc(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),ZE.fetch()(tx(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function ex(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},SF),e);try{const i=new CF(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw hl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw hl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw hl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw hl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw gF(t,c,u);Si(t,c)}}catch(i){if(i instanceof Fr)throw i;Si(t,"network-request-failed",{message:String(i)})}}async function Aa(t,e,n,r,i={}){const s=await jr(t,e,n,r,i);return"mfaPendingCredential"in s&&Si(t,"multi-factor-auth-required",{_serverResponse:s}),s}function tx(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?wF(t.config,i):`${t.config.apiScheme}://${i}`}function xF(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class CF{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(eg(this.auth,"network-request-failed")),EF.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=eg(t,e,r);return i.customData._tokenResponse=n,i}function I_(t){return t!==void 0&&t.enterprise!==void 0}class TF{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return xF(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function bF(t,e){return jr(t,"GET","/v2/recaptchaConfig",$r(t,e))}/**
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
 */async function IF(t,e){return jr(t,"POST","/v1/accounts:delete",e)}async function kF(t,e){return jr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ko(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function PF(t,e=!1){const n=Ht(t),r=await n.getIdToken(e),i=nx(r);Z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ko(mf(i.auth_time)),issuedAtTime:ko(mf(i.iat)),expirationTime:ko(mf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function mf(t){return Number(t)*1e3}function nx(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return $l("JWT malformed, contained fewer than 3 sections"),null;try{const i=Lu(n);return i?JSON.parse(i):($l("Failed to decode base64 JWT payload"),null)}catch(i){return $l("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function OF(t){const e=nx(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function zu(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Fr&&RF(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function RF({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class NF{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class rx{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ko(this.lastLoginAt),this.creationTime=ko(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Bu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await zu(t,kF(n,{idToken:r}));Z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?LF(s.providerUserInfo):[],a=DF(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new rx(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function AF(t){const e=Ht(t);await Bu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function DF(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function LF(t){return t.map(e=>{var{providerId:n}=e,r=ym(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function MF(t,e){const n=await ex(t,{},async()=>{const r=Xc({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=tx(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ZE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function FF(t,e){return jr(t,"POST","/v2/accounts:revokeToken",$r(t,e))}/**
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
 */class aa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):OF(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await MF(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new aa;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new aa,this.toJSON())}_performRefresh(){return Ln("not implemented")}}/**
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
 */function Xn(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ci{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ym(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new NF(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new rx(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await zu(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return PF(this,e)}reload(){return AF(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ci(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Bu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await zu(this,IF(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:E,isAnonymous:x,providerData:C,stsTokenManager:S}=n;Z(y&&S,e,"internal-error");const P=aa.fromJSON(this.name,S);Z(typeof y=="string",e,"internal-error"),Xn(d,e.name),Xn(f,e.name),Z(typeof E=="boolean",e,"internal-error"),Z(typeof x=="boolean",e,"internal-error"),Xn(m,e.name),Xn(g,e.name),Xn(v,e.name),Xn(w,e.name),Xn(p,e.name),Xn(h,e.name);const j=new ci({uid:y,auth:e,email:f,emailVerified:E,displayName:d,isAnonymous:x,photoURL:g,phoneNumber:m,tenantId:v,stsTokenManager:P,createdAt:p,lastLoginAt:h});return C&&Array.isArray(C)&&(j.providerData=C.map(L=>Object.assign({},L))),w&&(j._redirectEventId=w),j}static async _fromIdTokenResponse(e,n,r=!1){const i=new aa;i.updateFromServerResponse(n);const s=new ci({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Bu(s),s}}/**
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
 */const k_=new Map;function ni(t){Uu(t instanceof Function,"Expected a class definition");let e=k_.get(t);return e?(Uu(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,k_.set(t,e),e)}/**
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
 */class ix{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ix.type="NONE";const P_=ix;/**
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
 */function gf(t,e,n){return`firebase:${t}:${e}:${n}`}class us{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=gf(this.userKey,i.apiKey,s),this.fullPersistenceKey=gf("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ci._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new us(ni(P_),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||ni(P_);const o=gf(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=ci._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new us(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new us(s,e,r))}}/**
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
 */function O_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zF(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($F(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(VF(e))return"Blackberry";if(WF(e))return"Webos";if(jF(e))return"Safari";if((e.includes("chrome/")||UF(e))&&!e.includes("edge/"))return"Chrome";if(BF(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $F(t=En()){return/firefox\//i.test(t)}function jF(t=En()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function UF(t=En()){return/crios\//i.test(t)}function zF(t=En()){return/iemobile/i.test(t)}function BF(t=En()){return/android/i.test(t)}function VF(t=En()){return/blackberry/i.test(t)}function WF(t=En()){return/webos/i.test(t)}/**
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
 */function sx(t,e=[]){let n;switch(t){case"Browser":n=O_(En());break;case"Worker":n=`${O_(En())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zc}/${r}`}/**
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
 */class HF{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function GF(t,e={}){return jr(t,"GET","/v2/passwordPolicy",$r(t,e))}/**
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
 */const KF=6;class qF{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:KF,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class YF{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new R_(this),this.idTokenSubscription=new R_(this),this.beforeStateQueue=new HF(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=JE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ni(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await us.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Bu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_F()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ht(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ni(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await GF(this),n=new qF(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ra("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await FF(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ni(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await us.create(this,[ni(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sx(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&mF(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Da(t){return Ht(t)}class R_{constructor(e){this.auth=e,this.observer=null,this.addObserver=iM(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function QF(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function XF(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=eg("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",QF().appendChild(r)})}const JF="https://www.google.com/recaptcha/enterprise.js?render=",ZF="recaptcha-enterprise",e$="NO_RECAPTCHA";class t${constructor(e){this.type=ZF,this.auth=Da(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{bF(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new TF(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;I_(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(e$)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&I_(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}XF(JF+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function N_(t,e,n,r=!1){const i=new t$(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Zh(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await N_(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await N_(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function n$(t,e){const n=KE(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Fu(s,e??{}))return i;Si(i,"already-initialized")}return n.initialize({options:e})}function r$(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ni);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */class ox{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ln("not implemented")}_getIdTokenResponse(e){return Ln("not implemented")}_linkToIdToken(e,n){return Ln("not implemented")}_getReauthenticationResolver(e){return Ln("not implemented")}}async function i$(t,e){return jr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function s$(t,e){return Aa(t,"POST","/v1/accounts:signInWithPassword",$r(t,e))}/**
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
 */async function o$(t,e){return Aa(t,"POST","/v1/accounts:signInWithEmailLink",$r(t,e))}async function a$(t,e){return Aa(t,"POST","/v1/accounts:signInWithEmailLink",$r(t,e))}/**
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
 */class la extends ox{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new la(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new la(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zh(e,n,"signInWithPassword",s$);case"emailLink":return o$(e,{email:this._email,oobCode:this._password});default:Si(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zh(e,r,"signUpPassword",i$);case"emailLink":return a$(e,{idToken:n,email:this._email,oobCode:this._password});default:Si(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function yf(t,e){return Aa(t,"POST","/v1/accounts:signInWithIdp",$r(t,e))}/**
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
 */const l$="http://localhost";class Ei extends ox{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ei(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Si("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ym(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ei(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return yf(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,yf(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,yf(e,n)}buildRequest(){const e={requestUri:l$,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xc(n)}return e}}/**
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
 */function u$(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function c$(t){const e=mo(go(t)).link,n=e?mo(go(e)).deep_link_id:null,r=mo(go(t)).deep_link_id;return(r?mo(go(r)).link:null)||r||n||e||t}class ng{constructor(e){var n,r,i,s,o,a;const l=mo(go(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=u$((i=l.mode)!==null&&i!==void 0?i:null);Z(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=c$(e);try{return new ng(n)}catch{return null}}}/**
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
 */class Ws{constructor(){this.providerId=Ws.PROVIDER_ID}static credential(e,n){return la._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ng.parseLink(n);return Z(r,"argument-error"),la._fromEmailAndCode(e,r.code,r.tenantId)}}Ws.PROVIDER_ID="password";Ws.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ws.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class d${constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ed extends d${constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class rr extends ed{constructor(){super("facebook.com")}static credential(e){return Ei._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rr.credential(e.oauthAccessToken)}catch{return null}}}rr.FACEBOOK_SIGN_IN_METHOD="facebook.com";rr.PROVIDER_ID="facebook.com";/**
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
 */class Nn extends ed{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ei._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.GOOGLE_SIGN_IN_METHOD="google.com";Nn.PROVIDER_ID="google.com";/**
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
 */class ir extends ed{constructor(){super("github.com")}static credential(e){return Ei._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.GITHUB_SIGN_IN_METHOD="github.com";ir.PROVIDER_ID="github.com";/**
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
 */class sr extends ed{constructor(){super("twitter.com")}static credential(e,n){return Ei._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return sr.credential(n,r)}catch{return null}}}sr.TWITTER_SIGN_IN_METHOD="twitter.com";sr.PROVIDER_ID="twitter.com";/**
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
 */async function f$(t,e){return Aa(t,"POST","/v1/accounts:signUp",$r(t,e))}/**
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
 */class ua{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ci._fromIdTokenResponse(e,r,i),o=A_(r);return new ua({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=A_(r);return new ua({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function A_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Vu extends Fr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Vu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Vu(e,n,r,i)}}function h$(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Vu._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */async function p$(t,e,n=!1){const r="signIn",i=await h$(t,r,e),s=await ua._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function m$(t,e){return p$(Da(t),e)}/**
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
 */async function ax(t){const e=Da(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function g$(t,e,n){const r=Da(t),o=await Zh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",f$).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&ax(t),l}),a=await ua._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function y$(t,e,n){return m$(Ht(t),Ws.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ax(t),r})}/**
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
 */async function v$(t,e){return jr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function _$(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ht(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await zu(r,v$(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function w$(t){return Ht(t).signOut()}new Na(3e4,6e4);/**
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
 */new Na(2e3,1e4);/**
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
 */new Na(3e4,6e4);/**
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
 */new Na(5e3,15e3);var D_="@firebase/auth",L_="1.5.1";/**
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
 */class S${constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function E$(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function x$(t){Ps(new _i("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sx(t)},u=new YF(r,i,s,l);return r$(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ps(new _i("auth-internal",e=>{const n=Da(e.getProvider("auth").getImmediate());return(r=>new S$(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Er(D_,L_,E$(t)),Er(D_,L_,"esm2017")}/**
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
 */const C$=5*60;KL("authIdTokenMaxAge");x$("Browser");var T$="firebase",b$="10.7.1";/**
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
 */Er(T$,b$,"app");const M_="@firebase/database",F_="1.0.2";/**
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
 */let lx="";function I$(t){lx=t}/**
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
 */class k${constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Pe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:sa(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class P${constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return qn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const ux=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new k$(e)}}catch{}return new P$},ri=ux("localStorage"),ep=ux("sessionStorage");/**
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
 */const cs=new Jm("@firebase/database"),O$=function(){let t=1;return function(){return t++}}(),cx=function(t){const e=aM(t),n=new rM;n.update(e);const r=n.digest();return qm.encodeByteArray(r)},La=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=La.apply(null,r):typeof r=="object"?e+=Pe(r):e+=r,e+=" "}return e};let di=null,$_=!0;const R$=function(t,e){k(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(cs.logLevel=oe.VERBOSE,di=cs.log.bind(cs),e&&ep.set("logging_enabled",!0)):typeof t=="function"?di=t:(di=null,ep.remove("logging_enabled"))},Ze=function(...t){if($_===!0&&($_=!1,di===null&&ep.get("logging_enabled")===!0&&R$(!0)),di){const e=La.apply(null,t);di(e)}},Ma=function(t){return function(...e){Ze(t,...e)}},tp=function(...t){const e="FIREBASE INTERNAL ERROR: "+La(...t);cs.error(e)},Wn=function(...t){const e=`FIREBASE FATAL ERROR: ${La(...t)}`;throw cs.error(e),new Error(e)},It=function(...t){const e="FIREBASE WARNING: "+La(...t);cs.warn(e)},N$=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&It("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},dx=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},A$=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Os="[MIN_NAME]",xi="[MAX_NAME]",Hs=function(t,e){if(t===e)return 0;if(t===Os||e===xi)return-1;if(e===Os||t===xi)return 1;{const n=j_(t),r=j_(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},D$=function(t,e){return t===e?0:t<e?-1:1},ro=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Pe(e))},rg=function(t){if(typeof t!="object"||t===null)return Pe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Pe(e[r]),n+=":",n+=rg(t[e[r]]);return n+="}",n},fx=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function yt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const hx=function(t){k(!dx(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},L$=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},M$=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function F$(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const $$=new RegExp("^-?(0*)\\d{1,10}$"),j$=-2147483648,U$=2147483647,j_=function(t){if($$.test(t)){const e=Number(t);if(e>=j$&&e<=U$)return e}return null},Fa=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw It("Exception was thrown by user callback.",n),e},Math.floor(0))}},z$=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Po=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class B${constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){It(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class V${constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ze("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',It(e)}}class ds{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ds.OWNER="owner";/**
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
 */const ig="5",px="v",mx="s",gx="r",yx="f",vx=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,_x="ls",wx="p",np="ac",Sx="websocket",Ex="long_polling";/**
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
 */class xx{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ri.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ri.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function W$(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Cx(t,e,n){k(typeof e=="string","typeof type must == string"),k(typeof n=="object","typeof params must == object");let r;if(e===Sx)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ex)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);W$(t)&&(n.ns=t.namespace);const i=[];return yt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class H${constructor(){this.counters_={}}incrementCounter(e,n=1){qn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return jL(this.counters_)}}/**
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
 */const vf={},_f={};function sg(t){const e=t.toString();return vf[e]||(vf[e]=new H$),vf[e]}function G$(t,e){const n=t.toString();return _f[n]||(_f[n]=e()),_f[n]}/**
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
 */class K${constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Fa(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const U_="start",q$="close",Y$="pLPCommand",Q$="pRTLPCB",Tx="id",bx="pw",Ix="ser",X$="cb",J$="seg",Z$="ts",ej="d",tj="dframe",kx=1870,Px=30,nj=kx-Px,rj=25e3,ij=3e4;class es{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ma(e),this.stats_=sg(n),this.urlFn=l=>(this.appCheckToken&&(l[np]=this.appCheckToken),Cx(n,Ex,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new K$(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ij)),A$(()=>{if(this.isClosed_)return;this.scriptTagHolder=new og((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===U_)this.id=a,this.password=l;else if(o===q$)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[U_]="t",r[Ix]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[X$]=this.scriptTagHolder.uniqueCallbackIdentifier),r[px]=ig,this.transportSessionId&&(r[mx]=this.transportSessionId),this.lastSessionId&&(r[_x]=this.lastSessionId),this.applicationId&&(r[wx]=this.applicationId),this.appCheckToken&&(r[np]=this.appCheckToken),typeof location<"u"&&location.hostname&&vx.test(location.hostname)&&(r[gx]=yx);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){es.forceAllow_=!0}static forceDisallow(){es.forceDisallow_=!0}static isAvailable(){return es.forceAllow_?!0:!es.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!L$()&&!M$()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=$E(n),i=fx(r,nj);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[tj]="t",r[Tx]=e,r[bx]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class og{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=O$(),window[Y$+this.uniqueCallbackIdentifier]=e,window[Q$+this.uniqueCallbackIdentifier]=n,this.myIFrame=og.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ze("frame writing exception"),a.stack&&Ze(a.stack),Ze(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ze("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Tx]=this.myID,e[bx]=this.myPW,e[Ix]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Px+r.length<=kx;){const o=this.pendingSegs.shift();r=r+"&"+J$+i+"="+o.seg+"&"+Z$+i+"="+o.ts+"&"+ej+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(rj)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ze("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const sj=16384,oj=45e3;let Wu=null;typeof MozWebSocket<"u"?Wu=MozWebSocket:typeof WebSocket<"u"&&(Wu=WebSocket);class en{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ma(this.connId),this.stats_=sg(n),this.connURL=en.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[px]=ig,typeof location<"u"&&location.hostname&&vx.test(location.hostname)&&(o[gx]=yx),n&&(o[mx]=n),r&&(o[_x]=r),i&&(o[np]=i),s&&(o[wx]=s),Cx(e,Sx,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ri.set("previous_websocket_failure",!0);try{let r;BE(),this.mySock=new Wu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){en.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Wu!==null&&!en.forceDisallow_}static previouslyFailed(){return ri.isInMemoryStorage||ri.get("previous_websocket_failure")===!0}markConnectionHealthy(){ri.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=sa(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(k(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=fx(n,sj);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(oj))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}en.responsesRequiredToBeHealthy=2;en.healthyTimeout=3e4;/**
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
 */class ca{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[es,en]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=en&&en.isAvailable();let r=n&&!en.previouslyFailed();if(e.webSocketOnly&&(n||It("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[en];else{const i=this.transports_=[];for(const s of ca.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ca.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ca.globalTransportInitialized_=!1;/**
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
 */const aj=6e4,lj=5e3,uj=10*1024,cj=100*1024,wf="t",z_="d",dj="s",B_="r",fj="e",V_="o",W_="a",H_="n",G_="p",hj="h";class pj{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ma("c:"+this.id+":"),this.transportManager_=new ca(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Po(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>cj?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>uj?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(wf in e){const n=e[wf];n===W_?this.upgradeIfSecondaryHealthy_():n===B_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===V_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ro("t",e),r=ro("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:G_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:W_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:H_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ro("t",e),r=ro("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ro(wf,e);if(z_ in e){const r=e[z_];if(n===hj){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===H_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===dj?this.onConnectionShutdown_(r):n===B_?this.onReset_(r):n===fj?tp("Server Error: "+r):n===V_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):tp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ig!==r&&It("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Po(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(aj))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Po(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(lj))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:G_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ri.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Ox{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Rx{constructor(e){this.allowedEvents_=e,this.listeners_={},k(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){k(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Hu extends Rx{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Xm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Hu}getInitialEvent(e){return k(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const K_=32,q_=768;class ae{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Q(){return new ae("")}function q(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Pr(t){return t.pieces_.length-t.pieceNum_}function ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ae(t.pieces_,e)}function Nx(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function mj(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ax(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Dx(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ae(e,0)}function Oe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ae)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ae(n,0)}function H(t){return t.pieceNum_>=t.pieces_.length}function rt(t,e){const n=q(t),r=q(e);if(n===null)return e;if(n===r)return rt(ce(t),ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Lx(t,e){if(Pr(t)!==Pr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function tn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Pr(t)>Pr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class gj{constructor(e,n){this.errorPrefix_=n,this.parts_=Ax(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Jc(this.parts_[r]);Mx(this)}}function yj(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Jc(e),Mx(t)}function vj(t){const e=t.parts_.pop();t.byteLength_-=Jc(e),t.parts_.length>0&&(t.byteLength_-=1)}function Mx(t){if(t.byteLength_>q_)throw new Error(t.errorPrefix_+"has a key path longer than "+q_+" bytes ("+t.byteLength_+").");if(t.parts_.length>K_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+K_+") or object contains a cycle "+Qr(t))}function Qr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class ag extends Rx{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new ag}getInitialEvent(e){return k(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const io=1e3,_j=60*5*1e3,Y_=30*1e3,wj=1.3,Sj=3e4,Ej="server_kill",Q_=3;class $n extends Ox{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=$n.nextPersistentConnectionId_++,this.log_=Ma("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=io,this.maxReconnectDelay_=_j,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!BE())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ag.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Hu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Pe(s)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Qm,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;$n.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&qn(e,"w")){const r=ks(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();It(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||nM(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Y_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=tM(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Pe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):tp("Unrecognized action received from server: "+Pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=io,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=io,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Sj&&(this.reconnectDelay_=io),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*wj)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+$n.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){k(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Ze("getToken() completed but was canceled"):(Ze("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new pj(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{It(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ej)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&It(d),l())}}}interrupt(e){Ze("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ze("Resuming connection for reason: "+e),delete this.interruptReasons_[e],y_(this.interruptReasons_)&&(this.reconnectDelay_=io,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>rg(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ae(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ze("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Q_&&(this.reconnectDelay_=Y_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ze("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Q_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+lx.replace(/\./g,"-")]=1,Xm()?e["framework.cordova"]=1:zE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Hu.getInstance().currentlyOnline();return y_(this.interruptReasons_)&&e}}$n.nextPersistentConnectionId_=0;$n.nextConnectionId_=0;/**
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
 */class W{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new W(e,n)}}/**
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
 */class td{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new W(Os,e),i=new W(Os,n);return this.compare(r,i)!==0}minPost(){return W.MIN}}/**
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
 */let pl;class Fx extends td{static get __EMPTY_NODE(){return pl}static set __EMPTY_NODE(e){pl=e}compare(e,n){return Hs(e.name,n.name)}isDefinedOn(e){throw Vs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return W.MIN}maxPost(){return new W(xi,pl)}makePost(e,n){return k(typeof e=="string","KeyIndex indexValue must always be a string."),new W(e,pl)}toString(){return".key"}}const fs=new Fx;/**
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
 */class ml{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Fe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Fe.RED,this.left=i??ht.EMPTY_NODE,this.right=s??ht.EMPTY_NODE}copy(e,n,r,i,s){return new Fe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ht.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return ht.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Fe.RED=!0;Fe.BLACK=!1;class xj{copy(e,n,r,i,s){return this}insert(e,n,r){return new Fe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ht{constructor(e,n=ht.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ht(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Fe.BLACK,null,null))}remove(e){return new ht(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Fe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ml(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ml(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ml(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ml(this.root_,null,this.comparator_,!0,e)}}ht.EMPTY_NODE=new xj;/**
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
 */function Cj(t,e){return Hs(t.name,e.name)}function lg(t,e){return Hs(t,e)}/**
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
 */let rp;function Tj(t){rp=t}const $x=function(t){return typeof t=="number"?"number:"+hx(t):"string:"+t},jx=function(t){if(t.isLeafNode()){const e=t.val();k(typeof e=="string"||typeof e=="number"||typeof e=="object"&&qn(e,".sv"),"Priority must be a string or number.")}else k(t===rp||t.isEmpty(),"priority of unexpected type.");k(t===rp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let X_;class De{constructor(e,n=De.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),jx(this.priorityNode_)}static set __childrenNodeConstructor(e){X_=e}static get __childrenNodeConstructor(){return X_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new De(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:De.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return H(e)?this:q(e)===".priority"?this.priorityNode_:De.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:De.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=q(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(k(r!==".priority"||Pr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,De.__childrenNodeConstructor.EMPTY_NODE.updateChild(ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+$x(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=hx(this.value_):e+=this.value_,this.lazyHash_=cx(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===De.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof De.__childrenNodeConstructor?-1:(k(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=De.VALUE_TYPE_ORDER.indexOf(n),s=De.VALUE_TYPE_ORDER.indexOf(r);return k(i>=0,"Unknown leaf type: "+n),k(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}De.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Ux,zx;function bj(t){Ux=t}function Ij(t){zx=t}class kj extends td{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Hs(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return W.MIN}maxPost(){return new W(xi,new De("[PRIORITY-POST]",zx))}makePost(e,n){const r=Ux(e);return new W(n,new De("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ee=new kj;/**
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
 */const Pj=Math.log(2);class Oj{constructor(e){const n=s=>parseInt(Math.log(s)/Pj,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Gu=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=t[l],f=n?n(d):d,new Fe(f,d.node,Fe.BLACK,null,null);{const m=parseInt(c/2,10)+l,g=i(l,m),v=i(m+1,u);return d=t[m],f=n?n(d):d,new Fe(f,d.node,Fe.BLACK,g,v)}},s=function(l){let u=null,c=null,d=t.length;const f=function(g,v){const w=d-g,p=d;d-=g;const h=i(w+1,p),y=t[w],E=n?n(y):y;m(new Fe(E,y.node,v,null,h))},m=function(g){u?(u.left=g,u=g):(c=g,u=g)};for(let g=0;g<l.count;++g){const v=l.nextBitIsOne(),w=Math.pow(2,l.count-(g+1));v?f(w,Fe.BLACK):(f(w,Fe.BLACK),f(w,Fe.RED))}return c},o=new Oj(t.length),a=s(o);return new ht(r||e,a)};/**
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
 */let Sf;const ji={};class Mn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return k(ji&&Ee,"ChildrenNode.ts has not been loaded"),Sf=Sf||new Mn({".priority":ji},{".priority":Ee}),Sf}get(e){const n=ks(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ht?n:null}hasIndex(e){return qn(this.indexSet_,e.toString())}addIndex(e,n){k(e!==fs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(W.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Gu(r,e.getCompare()):a=ji;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new Mn(c,u)}addToIndexes(e,n){const r=Mu(this.indexes_,(i,s)=>{const o=ks(this.indexSet_,s);if(k(o,"Missing index implementation for "+s),i===ji)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(W.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Gu(a,o.getCompare())}else return ji;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new W(e.name,a))),l.insert(e,e.node)}});return new Mn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Mu(this.indexes_,i=>{if(i===ji)return i;{const s=n.get(e.name);return s?i.remove(new W(e.name,s)):i}});return new Mn(r,this.indexSet_)}}/**
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
 */let so;class U{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&jx(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return so||(so=new U(new ht(lg),null,Mn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||so}updatePriority(e){return this.children_.isEmpty()?this:new U(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?so:n}}getChild(e){const n=q(e);return n===null?this:this.getImmediateChild(n).getChild(ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(k(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new W(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?so:this.priorityNode_;return new U(i,o,s)}}updateChild(e,n){const r=q(e);if(r===null)return n;{k(q(e)!==".priority"||Pr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ce(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ee,(o,a)=>{n[o]=a.val(e),r++,s&&U.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+$x(this.getPriority().val())+":"),this.forEachChild(Ee,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":cx(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new W(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new W(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new W(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,W.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,W.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===$a?-1:0}withIndex(e){if(e===fs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new U(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===fs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ee),i=n.getIterator(Ee);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===fs?null:this.indexMap_.get(e.toString())}}U.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Rj extends U{constructor(){super(new ht(lg),U.EMPTY_NODE,Mn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return U.EMPTY_NODE}isEmpty(){return!1}}const $a=new Rj;Object.defineProperties(W,{MIN:{value:new W(Os,U.EMPTY_NODE)},MAX:{value:new W(xi,$a)}});Fx.__EMPTY_NODE=U.EMPTY_NODE;De.__childrenNodeConstructor=U;Tj($a);Ij($a);/**
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
 */const Nj=!0;function We(t,e=null){if(t===null)return U.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),k(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new De(n,We(e))}if(!(t instanceof Array)&&Nj){const n=[];let r=!1;if(yt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=We(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new W(o,l)))}}),n.length===0)return U.EMPTY_NODE;const s=Gu(n,Cj,o=>o.name,lg);if(r){const o=Gu(n,Ee.getCompare());return new U(s,We(e),new Mn({".priority":o},{".priority":Ee}))}else return new U(s,We(e),Mn.Default)}else{let n=U.EMPTY_NODE;return yt(t,(r,i)=>{if(qn(t,r)&&r.substring(0,1)!=="."){const s=We(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(We(e))}}bj(We);/**
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
 */class Aj extends td{constructor(e){super(),this.indexPath_=e,k(!H(e)&&q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Hs(e.name,n.name):s}makePost(e,n){const r=We(e),i=U.EMPTY_NODE.updateChild(this.indexPath_,r);return new W(n,i)}maxPost(){const e=U.EMPTY_NODE.updateChild(this.indexPath_,$a);return new W(xi,e)}toString(){return Ax(this.indexPath_,0).join("/")}}/**
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
 */class Dj extends td{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Hs(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return W.MIN}maxPost(){return W.MAX}makePost(e,n){const r=We(e);return new W(n,r)}toString(){return".value"}}const Lj=new Dj;/**
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
 */function Bx(t){return{type:"value",snapshotNode:t}}function Rs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function da(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function fa(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Mj(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class ug{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){k(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(da(n,a)):k(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Rs(n,r)):o.trackChildChange(fa(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ee,(i,s)=>{n.hasChild(i)||r.trackChildChange(da(i,s))}),n.isLeafNode()||n.forEachChild(Ee,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(fa(i,s,o))}else r.trackChildChange(Rs(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?U.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ha{constructor(e){this.indexedFilter_=new ug(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ha.getStartPost_(e),this.endPost_=ha.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new W(n,r))||(r=U.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=U.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(U.EMPTY_NODE);const s=this;return n.forEachChild(Ee,(o,a)=>{s.matches(new W(o,a))||(i=i.updateImmediateChild(o,U.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Fj{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ha(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new W(n,r))||(r=U.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=U.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=U.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(U.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,U.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,m)=>d(m,f)}else o=this.index_.getCompare();const a=e;k(a.numChildren()===this.limit_,"");const l=new W(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const m=f==null?1:o(f,l);if(c&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(fa(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(da(n,d));const v=a.updateImmediateChild(n,U.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Rs(f.name,f.node)),v.updateImmediateChild(f.name,f.node)):v}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(da(u.name,u.node)),s.trackChildChange(Rs(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,U.EMPTY_NODE)):e}}/**
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
 */class cg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ee}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Os}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:xi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ee}copy(){const e=new cg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function $j(t){return t.loadsAllData()?new ug(t.getIndex()):t.hasLimit()?new Fj(t):new ha(t)}function J_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ee?n="$priority":t.index_===Lj?n="$value":t.index_===fs?n="$key":(k(t.index_ instanceof Aj,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Pe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Pe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Pe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Pe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Pe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Z_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ee&&(e.i=t.index_.toString()),e}/**
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
 */class Ku extends Ox{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ma("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(k(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ku.getListenId_(e,r),a={};this.listens_[o]=a;const l=J_(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),ks(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=Ku.getListenId_(e,n);delete this.listens_[r]}get(e){const n=J_(e._queryParams),r=e._path.toString(),i=new Qm;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Xc(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=sa(a.responseText)}catch{It("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&It("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class jj{constructor(){this.rootNode_=U.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function qu(){return{value:null,children:new Map}}function Vx(t,e,n){if(H(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=q(e);t.children.has(r)||t.children.set(r,qu());const i=t.children.get(r);e=ce(e),Vx(i,e,n)}}function ip(t,e,n){t.value!==null?n(e,t.value):Uj(t,(r,i)=>{const s=new ae(e.toString()+"/"+r);ip(i,s,n)})}function Uj(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class zj{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&yt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const e0=10*1e3,Bj=30*1e3,Vj=5*60*1e3;class Wj{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new zj(e);const r=e0+(Bj-e0)*Math.random();Po(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;yt(e,(i,s)=>{s>0&&qn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Po(this.reportStats_.bind(this),Math.floor(Math.random()*2*Vj))}}/**
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
 */var nn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(nn||(nn={}));function Wx(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function dg(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function fg(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Yu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=nn.ACK_USER_WRITE,this.source=Wx()}operationForChild(e){if(H(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ae(e));return new Yu(Q(),n,this.revert)}}else return k(q(this.path)===e,"operationForChild called for unrelated child."),new Yu(ce(this.path),this.affectedTree,this.revert)}}/**
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
 */class pa{constructor(e,n){this.source=e,this.path=n,this.type=nn.LISTEN_COMPLETE}operationForChild(e){return H(this.path)?new pa(this.source,Q()):new pa(this.source,ce(this.path))}}/**
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
 */class Ci{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=nn.OVERWRITE}operationForChild(e){return H(this.path)?new Ci(this.source,Q(),this.snap.getImmediateChild(e)):new Ci(this.source,ce(this.path),this.snap)}}/**
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
 */class ma{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=nn.MERGE}operationForChild(e){if(H(this.path)){const n=this.children.subtree(new ae(e));return n.isEmpty()?null:n.value?new Ci(this.source,Q(),n.value):new ma(this.source,Q(),n)}else return k(q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ma(this.source,ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Or{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(H(e))return this.isFullyInitialized()&&!this.filtered_;const n=q(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Hj{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Gj(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Mj(o.childName,o.snapshotNode))}),oo(t,i,"child_removed",e,r,n),oo(t,i,"child_added",e,r,n),oo(t,i,"child_moved",s,r,n),oo(t,i,"child_changed",e,r,n),oo(t,i,"value",e,r,n),i}function oo(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>qj(t,a,l)),o.forEach(a=>{const l=Kj(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function Kj(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function qj(t,e,n){if(e.childName==null||n.childName==null)throw Vs("Should only compare child_ events.");const r=new W(e.childName,e.snapshotNode),i=new W(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function nd(t,e){return{eventCache:t,serverCache:e}}function Oo(t,e,n,r){return nd(new Or(e,n,r),t.serverCache)}function Hx(t,e,n,r){return nd(t.eventCache,new Or(e,n,r))}function Qu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ti(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ef;const Yj=()=>(Ef||(Ef=new ht(D$)),Ef);class me{constructor(e,n=Yj()){this.value=e,this.children=n}static fromObject(e){let n=new me(null);return yt(e,(r,i)=>{n=n.set(new ae(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Q(),value:this.value};if(H(e))return null;{const r=q(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ce(e),n);return s!=null?{path:Oe(new ae(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(H(e))return this;{const n=q(e),r=this.children.get(n);return r!==null?r.subtree(ce(e)):new me(null)}}set(e,n){if(H(e))return new me(n,this.children);{const r=q(e),s=(this.children.get(r)||new me(null)).set(ce(e),n),o=this.children.insert(r,s);return new me(this.value,o)}}remove(e){if(H(e))return this.children.isEmpty()?new me(null):new me(null,this.children);{const n=q(e),r=this.children.get(n);if(r){const i=r.remove(ce(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new me(null):new me(this.value,s)}else return this}}get(e){if(H(e))return this.value;{const n=q(e),r=this.children.get(n);return r?r.get(ce(e)):null}}setTree(e,n){if(H(e))return n;{const r=q(e),s=(this.children.get(r)||new me(null)).setTree(ce(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new me(this.value,o)}}fold(e){return this.fold_(Q(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Oe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Q(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(H(e))return null;{const s=q(e),o=this.children.get(s);return o?o.findOnPath_(ce(e),Oe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Q(),n)}foreachOnPath_(e,n,r){if(H(e))return this;{this.value&&r(n,this.value);const i=q(e),s=this.children.get(i);return s?s.foreachOnPath_(ce(e),Oe(n,i),r):new me(null)}}foreach(e){this.foreach_(Q(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Oe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class ln{constructor(e){this.writeTree_=e}static empty(){return new ln(new me(null))}}function Ro(t,e,n){if(H(e))return new ln(new me(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=rt(i,e);return s=s.updateChild(o,n),new ln(t.writeTree_.set(i,s))}else{const i=new me(n),s=t.writeTree_.setTree(e,i);return new ln(s)}}}function t0(t,e,n){let r=t;return yt(n,(i,s)=>{r=Ro(r,Oe(e,i),s)}),r}function n0(t,e){if(H(e))return ln.empty();{const n=t.writeTree_.setTree(e,new me(null));return new ln(n)}}function sp(t,e){return Di(t,e)!=null}function Di(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(rt(n.path,e)):null}function r0(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ee,(r,i)=>{e.push(new W(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new W(r,i.value))}),e}function xr(t,e){if(H(e))return t;{const n=Di(t,e);return n!=null?new ln(new me(n)):new ln(t.writeTree_.subtree(e))}}function op(t){return t.writeTree_.isEmpty()}function Ns(t,e){return Gx(Q(),t.writeTree_,e)}function Gx(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(k(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Gx(Oe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Oe(t,".priority"),r)),n}}/**
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
 */function rd(t,e){return Qx(e,t)}function Qj(t,e,n,r,i){k(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ro(t.visibleWrites,e,n)),t.lastWriteId=r}function Xj(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Jj(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);k(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Zj(a,r.path)?i=!1:tn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return e3(t),!0;if(r.snap)t.visibleWrites=n0(t.visibleWrites,r.path);else{const a=r.children;yt(a,l=>{t.visibleWrites=n0(t.visibleWrites,Oe(r.path,l))})}return!0}else return!1}function Zj(t,e){if(t.snap)return tn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&tn(Oe(t.path,n),e))return!0;return!1}function e3(t){t.visibleWrites=Kx(t.allWrites,t3,Q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function t3(t){return t.visible}function Kx(t,e,n){let r=ln.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)tn(n,o)?(a=rt(n,o),r=Ro(r,a,s.snap)):tn(o,n)&&(a=rt(o,n),r=Ro(r,Q(),s.snap.getChild(a)));else if(s.children){if(tn(n,o))a=rt(n,o),r=t0(r,a,s.children);else if(tn(o,n))if(a=rt(o,n),H(a))r=t0(r,Q(),s.children);else{const l=ks(s.children,q(a));if(l){const u=l.getChild(ce(a));r=Ro(r,Q(),u)}}}else throw Vs("WriteRecord should have .snap or .children")}}return r}function qx(t,e,n,r,i){if(!r&&!i){const s=Di(t.visibleWrites,e);if(s!=null)return s;{const o=xr(t.visibleWrites,e);if(op(o))return n;if(n==null&&!sp(o,Q()))return null;{const a=n||U.EMPTY_NODE;return Ns(o,a)}}}else{const s=xr(t.visibleWrites,e);if(!i&&op(s))return n;if(!i&&n==null&&!sp(s,Q()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(tn(u.path,e)||tn(e,u.path))},a=Kx(t.allWrites,o,e),l=n||U.EMPTY_NODE;return Ns(a,l)}}}function n3(t,e,n){let r=U.EMPTY_NODE;const i=Di(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ee,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=xr(t.visibleWrites,e);return n.forEachChild(Ee,(o,a)=>{const l=Ns(xr(s,new ae(o)),a);r=r.updateImmediateChild(o,l)}),r0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=xr(t.visibleWrites,e);return r0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function r3(t,e,n,r,i){k(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Oe(e,n);if(sp(t.visibleWrites,s))return null;{const o=xr(t.visibleWrites,s);return op(o)?i.getChild(n):Ns(o,i.getChild(n))}}function i3(t,e,n,r){const i=Oe(e,n),s=Di(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=xr(t.visibleWrites,i);return Ns(o,r.getNode().getImmediateChild(n))}else return null}function s3(t,e){return Di(t.visibleWrites,e)}function o3(t,e,n,r,i,s,o){let a;const l=xr(t.visibleWrites,e),u=Di(l,Q());if(u!=null)a=u;else if(n!=null)a=Ns(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=f.getNext();for(;m&&c.length<i;)d(m,r)!==0&&c.push(m),m=f.getNext();return c}else return[]}function a3(){return{visibleWrites:ln.empty(),allWrites:[],lastWriteId:-1}}function Xu(t,e,n,r){return qx(t.writeTree,t.treePath,e,n,r)}function hg(t,e){return n3(t.writeTree,t.treePath,e)}function i0(t,e,n,r){return r3(t.writeTree,t.treePath,e,n,r)}function Ju(t,e){return s3(t.writeTree,Oe(t.treePath,e))}function l3(t,e,n,r,i,s){return o3(t.writeTree,t.treePath,e,n,r,i,s)}function pg(t,e,n){return i3(t.writeTree,t.treePath,e,n)}function Yx(t,e){return Qx(Oe(t.treePath,e),t.writeTree)}function Qx(t,e){return{treePath:t,writeTree:e}}/**
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
 */class u3{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;k(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),k(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,fa(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,da(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Rs(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,fa(r,e.snapshotNode,i.oldSnap));else throw Vs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class c3{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Xx=new c3;class mg{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Or(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return pg(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ti(this.viewCache_),s=l3(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function d3(t){return{filter:t}}function f3(t,e){k(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),k(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function h3(t,e,n,r,i){const s=new u3;let o,a;if(n.type===nn.OVERWRITE){const u=n;u.source.fromUser?o=ap(t,e,u.path,u.snap,r,i,s):(k(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!H(u.path),o=Zu(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===nn.MERGE){const u=n;u.source.fromUser?o=m3(t,e,u.path,u.children,r,i,s):(k(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=lp(t,e,u.path,u.children,r,i,a,s))}else if(n.type===nn.ACK_USER_WRITE){const u=n;u.revert?o=v3(t,e,u.path,r,i,s):o=g3(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===nn.LISTEN_COMPLETE)o=y3(t,e,n.path,r,s);else throw Vs("Unknown operation type: "+n.type);const l=s.getChanges();return p3(e,o,l),{viewCache:o,changes:l}}function p3(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Qu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Bx(Qu(e)))}}function Jx(t,e,n,r,i,s){const o=e.eventCache;if(Ju(r,n)!=null)return e;{let a,l;if(H(n))if(k(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Ti(e),c=u instanceof U?u:U.EMPTY_NODE,d=hg(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Xu(r,Ti(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=q(n);if(u===".priority"){k(Pr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=i0(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=ce(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=i0(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=pg(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return Oo(e,a,o.isFullyInitialized()||H(n),t.filter.filtersNodes())}}function Zu(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(H(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),m,null)}else{const m=q(n);if(!l.isCompleteForPath(n)&&Pr(n)>1)return e;const g=ce(n),w=l.getNode().getImmediateChild(m).updateChild(g,r);m===".priority"?u=c.updatePriority(l.getNode(),w):u=c.updateChild(l.getNode(),m,w,g,Xx,null)}const d=Hx(e,u,l.isFullyInitialized()||H(n),c.filtersNodes()),f=new mg(i,d,s);return Jx(t,d,n,i,f,a)}function ap(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new mg(i,e,s);if(H(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Oo(e,u,!0,t.filter.filtersNodes());else{const d=q(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Oo(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=ce(n),m=a.getNode().getImmediateChild(d);let g;if(H(f))g=r;else{const v=c.getCompleteChild(d);v!=null?Nx(f)===".priority"&&v.getChild(Dx(f)).isEmpty()?g=v:g=v.updateChild(f,r):g=U.EMPTY_NODE}if(m.equals(g))l=e;else{const v=t.filter.updateChild(a.getNode(),d,g,f,c,o);l=Oo(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function s0(t,e){return t.eventCache.isCompleteForChild(e)}function m3(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=Oe(n,l);s0(e,q(c))&&(a=ap(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=Oe(n,l);s0(e,q(c))||(a=ap(t,a,c,u,i,s,o))}),a}function o0(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function lp(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;H(n)?u=r:u=new me(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),g=o0(t,m,f);l=Zu(t,l,new ae(d),g,i,s,o,a)}}),u.children.inorderTraversal((d,f)=>{const m=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!m){const g=e.serverCache.getNode().getImmediateChild(d),v=o0(t,g,f);l=Zu(t,l,new ae(d),v,i,s,o,a)}}),l}function g3(t,e,n,r,i,s,o){if(Ju(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(H(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Zu(t,e,n,l.getNode().getChild(n),i,s,a,o);if(H(n)){let u=new me(null);return l.getNode().forEachChild(fs,(c,d)=>{u=u.set(new ae(c),d)}),lp(t,e,n,u,i,s,a,o)}else return e}else{let u=new me(null);return r.foreach((c,d)=>{const f=Oe(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),lp(t,e,n,u,i,s,a,o)}}function y3(t,e,n,r,i){const s=e.serverCache,o=Hx(e,s.getNode(),s.isFullyInitialized()||H(n),s.isFiltered());return Jx(t,o,n,r,Xx,i)}function v3(t,e,n,r,i,s){let o;if(Ju(r,n)!=null)return e;{const a=new mg(r,e,i),l=e.eventCache.getNode();let u;if(H(n)||q(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Xu(r,Ti(e));else{const d=e.serverCache.getNode();k(d instanceof U,"serverChildren would be complete if leaf node"),c=hg(r,d)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=q(n);let d=pg(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,ce(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,U.EMPTY_NODE,ce(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Xu(r,Ti(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Ju(r,Q())!=null,Oo(e,u,o,t.filter.filtersNodes())}}/**
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
 */class _3{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new ug(r.getIndex()),s=$j(r);this.processor_=d3(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(U.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(U.EMPTY_NODE,a.getNode(),null),c=new Or(l,o.isFullyInitialized(),i.filtersNodes()),d=new Or(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=nd(d,c),this.eventGenerator_=new Hj(this.query_)}get query(){return this.query_}}function w3(t){return t.viewCache_.serverCache.getNode()}function S3(t){return Qu(t.viewCache_)}function E3(t,e){const n=Ti(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!H(e)&&!n.getImmediateChild(q(e)).isEmpty())?n.getChild(e):null}function a0(t){return t.eventRegistrations_.length===0}function x3(t,e){t.eventRegistrations_.push(e)}function l0(t,e,n){const r=[];if(n){k(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function u0(t,e,n,r){e.type===nn.MERGE&&e.source.queryId!==null&&(k(Ti(t.viewCache_),"We should always have a full cache before handling merges"),k(Qu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=h3(t.processor_,i,e,n,r);return f3(t.processor_,s.viewCache),k(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Zx(t,s.changes,s.viewCache.eventCache.getNode(),null)}function C3(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ee,(s,o)=>{r.push(Rs(s,o))}),n.isFullyInitialized()&&r.push(Bx(n.getNode())),Zx(t,r,n.getNode(),e)}function Zx(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return Gj(t.eventGenerator_,e,n,i)}/**
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
 */let ec;class eC{constructor(){this.views=new Map}}function T3(t){k(!ec,"__referenceConstructor has already been defined"),ec=t}function b3(){return k(ec,"Reference.ts has not been loaded"),ec}function I3(t){return t.views.size===0}function gg(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return k(s!=null,"SyncTree gave us an op for an invalid query."),u0(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(u0(o,e,n,r));return s}}function tC(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Xu(n,i?r:null),l=!1;a?l=!0:r instanceof U?(a=hg(n,r),l=!1):(a=U.EMPTY_NODE,l=!1);const u=nd(new Or(a,l,!1),new Or(r,i,!1));return new _3(e,u)}return o}function k3(t,e,n,r,i,s){const o=tC(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),x3(o,n),C3(o,n)}function P3(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Rr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(l0(u,n,r)),a0(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(l0(l,n,r)),a0(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Rr(t)&&s.push(new(b3())(e._repo,e._path)),{removed:s,events:o}}function nC(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Cr(t,e){let n=null;for(const r of t.views.values())n=n||E3(r,e);return n}function rC(t,e){if(e._queryParams.loadsAllData())return id(t);{const r=e._queryIdentifier;return t.views.get(r)}}function iC(t,e){return rC(t,e)!=null}function Rr(t){return id(t)!=null}function id(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let tc;function O3(t){k(!tc,"__referenceConstructor has already been defined"),tc=t}function R3(){return k(tc,"Reference.ts has not been loaded"),tc}let N3=1;class c0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new me(null),this.pendingWriteTree_=a3(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function A3(t,e,n,r,i){return Qj(t.pendingWriteTree_,e,n,r,i),i?Ua(t,new Ci(Wx(),e,n)):[]}function ts(t,e,n=!1){const r=Xj(t.pendingWriteTree_,e);if(Jj(t.pendingWriteTree_,e)){let s=new me(null);return r.snap!=null?s=s.set(Q(),!0):yt(r.children,o=>{s=s.set(new ae(o),!0)}),Ua(t,new Yu(r.path,s,n))}else return[]}function ja(t,e,n){return Ua(t,new Ci(dg(),e,n))}function D3(t,e,n){const r=me.fromObject(n);return Ua(t,new ma(dg(),e,r))}function L3(t,e){return Ua(t,new pa(dg(),e))}function M3(t,e,n){const r=yg(t,n);if(r){const i=vg(r),s=i.path,o=i.queryId,a=rt(s,e),l=new pa(fg(o),a);return _g(t,s,l)}else return[]}function sC(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||iC(o,e))){const l=P3(o,e,n,r);I3(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,m)=>Rr(m));if(c&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const m=U3(f);for(let g=0;g<m.length;++g){const v=m[g],w=v.query,p=cC(t,v);t.listenProvider_.startListening(No(w),ga(t,w),p.hashFn,p.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(No(e),null):u.forEach(f=>{const m=t.queryToTagMap.get(sd(f));t.listenProvider_.stopListening(No(f),m)}))}z3(t,u)}return a}function oC(t,e,n,r){const i=yg(t,r);if(i!=null){const s=vg(i),o=s.path,a=s.queryId,l=rt(o,e),u=new Ci(fg(a),l,n);return _g(t,o,u)}else return[]}function F3(t,e,n,r){const i=yg(t,r);if(i){const s=vg(i),o=s.path,a=s.queryId,l=rt(o,e),u=me.fromObject(n),c=new ma(fg(a),l,u);return _g(t,o,c)}else return[]}function $3(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,m)=>{const g=rt(f,i);s=s||Cr(m,g),o=o||Rr(m)});let a=t.syncPointTree_.get(i);a?(o=o||Rr(a),s=s||Cr(a,Q())):(a=new eC,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=U.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,g)=>{const v=Cr(g,Q());v&&(s=s.updateImmediateChild(m,v))}));const u=iC(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=sd(e);k(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const m=B3();t.queryToTagMap.set(f,m),t.tagToQueryMap.set(m,f)}const c=rd(t.pendingWriteTree_,i);let d=k3(a,e,n,c,s,l);if(!u&&!o&&!r){const f=rC(a,e);d=d.concat(V3(t,e,f))}return d}function aC(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=rt(o,e),u=Cr(a,l);if(u)return u});return qx(i,e,s,n,!0)}function j3(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=rt(u,n);r=r||Cr(c,d)});let i=t.syncPointTree_.get(n);i?r=r||Cr(i,Q()):(i=new eC,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Or(r,!0,!1):null,a=rd(t.pendingWriteTree_,e._path),l=tC(i,e,a,s?o.getNode():U.EMPTY_NODE,s);return S3(l)}function Ua(t,e){return lC(e,t.syncPointTree_,null,rd(t.pendingWriteTree_,Q()))}function lC(t,e,n,r){if(H(t.path))return uC(t,e,n,r);{const i=e.get(Q());n==null&&i!=null&&(n=Cr(i,Q()));let s=[];const o=q(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=Yx(r,o);s=s.concat(lC(a,l,u,c))}return i&&(s=s.concat(gg(i,t,r,n))),s}}function uC(t,e,n,r){const i=e.get(Q());n==null&&i!=null&&(n=Cr(i,Q()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=Yx(r,o),c=t.operationForChild(o);c&&(s=s.concat(uC(c,a,l,u)))}),i&&(s=s.concat(gg(i,t,r,n))),s}function cC(t,e){const n=e.query,r=ga(t,n);return{hashFn:()=>(w3(e)||U.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?M3(t,n._path,r):L3(t,n._path);{const s=F$(i,n);return sC(t,n,null,s)}}}}function ga(t,e){const n=sd(e);return t.queryToTagMap.get(n)}function sd(t){return t._path.toString()+"$"+t._queryIdentifier}function yg(t,e){return t.tagToQueryMap.get(e)}function vg(t){const e=t.indexOf("$");return k(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ae(t.substr(0,e))}}function _g(t,e,n){const r=t.syncPointTree_.get(e);k(r,"Missing sync point for query tag that we're tracking");const i=rd(t.pendingWriteTree_,e);return gg(r,n,i,null)}function U3(t){return t.fold((e,n,r)=>{if(n&&Rr(n))return[id(n)];{let i=[];return n&&(i=nC(n)),yt(r,(s,o)=>{i=i.concat(o)}),i}})}function No(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(R3())(t._repo,t._path):t}function z3(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=sd(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function B3(){return N3++}function V3(t,e,n){const r=e._path,i=ga(t,e),s=cC(t,n),o=t.listenProvider_.startListening(No(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)k(!Rr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!H(u)&&c&&Rr(c))return[id(c).query];{let f=[];return c&&(f=f.concat(nC(c).map(m=>m.query))),yt(d,(m,g)=>{f=f.concat(g)}),f}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(No(c),ga(t,c))}}return o}/**
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
 */class wg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new wg(n)}node(){return this.node_}}class Sg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Oe(this.path_,e);return new Sg(this.syncTree_,n)}node(){return aC(this.syncTree_,this.path_)}}const W3=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},d0=function(t,e,n){if(!t||typeof t!="object")return t;if(k(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return H3(t[".sv"],e,n);if(typeof t[".sv"]=="object")return G3(t[".sv"],e);k(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},H3=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:k(!1,"Unexpected server value: "+t)}},G3=function(t,e,n){t.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&k(!1,"Unexpected increment value: "+r);const i=e.node();if(k(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},K3=function(t,e,n,r){return Eg(e,new Sg(n,t),r)},q3=function(t,e,n){return Eg(t,new wg(e),n)};function Eg(t,e,n){const r=t.getPriority().val(),i=d0(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=d0(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new De(a,We(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new De(i))),o.forEachChild(Ee,(a,l)=>{const u=Eg(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class xg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Cg(t,e){let n=e instanceof ae?e:new ae(e),r=t,i=q(n);for(;i!==null;){const s=ks(r.node.children,i)||{children:{},childCount:0};r=new xg(i,r,s),n=ce(n),i=q(n)}return r}function Gs(t){return t.node.value}function dC(t,e){t.node.value=e,up(t)}function fC(t){return t.node.childCount>0}function Y3(t){return Gs(t)===void 0&&!fC(t)}function od(t,e){yt(t.node.children,(n,r)=>{e(new xg(n,t,r))})}function hC(t,e,n,r){n&&!r&&e(t),od(t,i=>{hC(i,e,!0,r)}),n&&r&&e(t)}function Q3(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function za(t){return new ae(t.parent===null?t.name:za(t.parent)+"/"+t.name)}function up(t){t.parent!==null&&X3(t.parent,t.name,t)}function X3(t,e,n){const r=Y3(n),i=qn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,up(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,up(t))}/**
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
 */const J3=/[\[\].#$\/\u0000-\u001F\u007F]/,Z3=/[\[\].#$\u0000-\u001F\u007F]/,xf=10*1024*1024,pC=function(t){return typeof t=="string"&&t.length!==0&&!J3.test(t)},mC=function(t){return typeof t=="string"&&t.length!==0&&!Z3.test(t)},e4=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),mC(t)},gC=function(t,e,n){const r=n instanceof ae?new gj(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Qr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Qr(r)+" with contents = "+e.toString());if(dx(e))throw new Error(t+"contains "+e.toString()+" "+Qr(r));if(typeof e=="string"&&e.length>xf/3&&Jc(e)>xf)throw new Error(t+"contains a string greater than "+xf+" utf8 bytes "+Qr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(yt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!pC(o)))throw new Error(t+" contains an invalid key ("+o+") "+Qr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);yj(r,o),gC(t,a,r),vj(r)}),i&&s)throw new Error(t+' contains ".value" child '+Qr(r)+" in addition to actual children.")}},yC=function(t,e,n,r){if(!(r&&n===void 0)&&!mC(n))throw new Error(WE(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},t4=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),yC(t,e,n,r)},n4=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!pC(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!e4(n))throw new Error(WE(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class r4{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function i4(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Lx(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ur(t,e,n){i4(t,n),s4(t,r=>tn(r,e)||tn(e,r))}function s4(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(o4(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function o4(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();di&&Ze("event: "+n.toString()),Fa(r)}}}/**
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
 */const a4="repo_interrupt",l4=25;class u4{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new r4,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=qu(),this.transactionQueueTree_=new xg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function c4(t,e,n){if(t.stats_=sg(t.repoInfo_),t.forceRestClient_||z$())t.server_=new Ku(t.repoInfo_,(r,i,s,o)=>{f0(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>h0(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Pe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new $n(t.repoInfo_,e,(r,i,s,o)=>{f0(t,r,i,s,o)},r=>{h0(t,r)},r=>{f4(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=G$(t.repoInfo_,()=>new Wj(t.stats_,t.server_)),t.infoData_=new jj,t.infoSyncTree_=new c0({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=ja(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Tg(t,"connected",!1),t.serverSyncTree_=new c0({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);Ur(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function d4(t){const n=t.infoData_.getNode(new ae(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function vC(t){return W3({timestamp:d4(t)})}function f0(t,e,n,r,i){t.dataUpdateCount++;const s=new ae(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Mu(n,u=>We(u));o=F3(t.serverSyncTree_,s,l,i)}else{const l=We(n);o=oC(t.serverSyncTree_,s,l,i)}else if(r){const l=Mu(n,u=>We(u));o=D3(t.serverSyncTree_,s,l)}else{const l=We(n);o=ja(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=kg(t,s)),Ur(t.eventQueue_,a,o)}function h0(t,e){Tg(t,"connected",e),e===!1&&m4(t)}function f4(t,e){yt(e,(n,r)=>{Tg(t,n,r)})}function Tg(t,e,n){const r=new ae("/.info/"+e),i=We(n);t.infoData_.updateSnapshot(r,i);const s=ja(t.infoSyncTree_,r,i);Ur(t.eventQueue_,r,s)}function h4(t){return t.nextWriteId_++}function p4(t,e,n){const r=j3(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=We(i).withIndex(e._queryParams.getIndex());$3(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=ja(t.serverSyncTree_,e._path,s);else{const a=ga(t.serverSyncTree_,e);o=oC(t.serverSyncTree_,e._path,s,a)}return Ur(t.eventQueue_,e._path,o),sC(t.serverSyncTree_,e,n,null,!0),s},i=>(bg(t,"get for query "+Pe(e)+" failed: "+i),Promise.reject(new Error(i))))}function m4(t){bg(t,"onDisconnectEvents");const e=vC(t),n=qu();ip(t.onDisconnect_,Q(),(i,s)=>{const o=K3(i,s,t.serverSyncTree_,e);Vx(n,i,o)});let r=[];ip(n,Q(),(i,s)=>{r=r.concat(ja(t.serverSyncTree_,i,s));const o=_4(t,i);kg(t,o)}),t.onDisconnect_=qu(),Ur(t.eventQueue_,Q(),r)}function g4(t){t.persistentConnection_&&t.persistentConnection_.interrupt(a4)}function bg(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ze(n,...e)}function _C(t,e,n){return aC(t.serverSyncTree_,e,n)||U.EMPTY_NODE}function Ig(t,e=t.transactionQueueTree_){if(e||ad(t,e),Gs(e)){const n=SC(t,e);k(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&y4(t,za(e),n)}else fC(e)&&od(e,n=>{Ig(t,n)})}function y4(t,e,n){const r=n.map(u=>u.currentWriteId),i=_C(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];k(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=rt(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{bg(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(ts(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();ad(t,Cg(t.transactionQueueTree_,e)),Ig(t,t.transactionQueueTree_),Ur(t.eventQueue_,e,c);for(let f=0;f<d.length;f++)Fa(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{It("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}kg(t,e)}},o)}function kg(t,e){const n=wC(t,e),r=za(n),i=SC(t,n);return v4(t,i,r),r}function v4(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=rt(n,l.path);let c=!1,d;if(k(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(ts(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=l4)c=!0,d="maxretry",i=i.concat(ts(t.serverSyncTree_,l.currentWriteId,!0));else{const f=_C(t,l.path,o);l.currentInputSnapshot=f;const m=e[a].update(f.val());if(m!==void 0){gC("transaction failed: Data returned ",m,l.path);let g=We(m);typeof m=="object"&&m!=null&&qn(m,".priority")||(g=g.updatePriority(f.getPriority()));const w=l.currentWriteId,p=vC(t),h=q3(g,f,p);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=h,l.currentWriteId=h4(t),o.splice(o.indexOf(w),1),i=i.concat(A3(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(ts(t.serverSyncTree_,w,!0))}else c=!0,d="nodata",i=i.concat(ts(t.serverSyncTree_,l.currentWriteId,!0))}Ur(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}ad(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Fa(r[a]);Ig(t,t.transactionQueueTree_)}function wC(t,e){let n,r=t.transactionQueueTree_;for(n=q(e);n!==null&&Gs(r)===void 0;)r=Cg(r,n),e=ce(e),n=q(e);return r}function SC(t,e){const n=[];return EC(t,e,n),n.sort((r,i)=>r.order-i.order),n}function EC(t,e,n){const r=Gs(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);od(e,i=>{EC(t,i,n)})}function ad(t,e){const n=Gs(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,dC(e,n.length>0?n:void 0)}od(e,r=>{ad(t,r)})}function _4(t,e){const n=za(wC(t,e)),r=Cg(t.transactionQueueTree_,e);return Q3(r,i=>{Cf(t,i)}),Cf(t,r),hC(r,i=>{Cf(t,i)}),n}function Cf(t,e){const n=Gs(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(k(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(k(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ts(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?dC(e,void 0):n.length=s+1,Ur(t.eventQueue_,za(e),i);for(let o=0;o<r.length;o++)Fa(r[o])}}/**
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
 */function w4(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function S4(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):It(`Invalid query segment '${n}' in query '${t}'`)}return e}const p0=function(t,e){const n=E4(t),r=n.namespace;n.domain==="firebase.com"&&Wn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Wn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||N$();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new xx(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ae(n.pathString)}},E4=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=w4(t.substring(c,d)));const f=S4(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class x4{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Pe(this.snapshot.exportVal())}}class C4{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class T4{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return k(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Pg{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return H(this._path)?null:Nx(this._path)}get ref(){return new Yn(this._repo,this._path)}get _queryIdentifier(){const e=Z_(this._queryParams),n=rg(e);return n==="{}"?"default":n}get _queryObject(){return Z_(this._queryParams)}isEqual(e){if(e=Ht(e),!(e instanceof Pg))return!1;const n=this._repo===e._repo,r=Lx(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+mj(this._path)}}class Yn extends Pg{constructor(e,n){super(e,n,new cg,!1)}get parent(){const e=Dx(this._path);return e===null?null:new Yn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ya{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ae(e),r=nc(this.ref,e);return new ya(this._node.getChild(n),r,Ee)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new ya(i,nc(this.ref,r),Ee)))}hasChild(e){const n=new ae(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function b4(t,e){return t=Ht(t),t._checkNotDeleted("ref"),e!==void 0?nc(t._root,e):t._root}function nc(t,e){return t=Ht(t),q(t._path)===null?t4("child","path",e,!1):yC("child","path",e,!1),new Yn(t._repo,Oe(t._path,e))}function I4(t){t=Ht(t);const e=new T4(()=>{}),n=new Og(e);return p4(t._repo,t,n).then(r=>new ya(r,new Yn(t._repo,t._path),t._queryParams.getIndex()))}class Og{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new x4("value",this,new ya(e.snapshotNode,new Yn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new C4(this,e,n):null}matches(e){return e instanceof Og?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}T3(Yn);O3(Yn);/**
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
 */const k4="FIREBASE_DATABASE_EMULATOR_HOST",cp={};let P4=!1;function O4(t,e,n,r){t.repoInfo_=new xx(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function R4(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Wn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ze("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=p0(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[k4]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=p0(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new ds(ds.OWNER):new V$(t.name,t.options,e);n4("Invalid Firebase Database URL",o),H(o.path)||Wn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=A4(a,t,c,new B$(t.name,n));return new D4(d,t)}function N4(t,e){const n=cp[e];(!n||n[t.key]!==t)&&Wn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),g4(t),delete n[t.key]}function A4(t,e,n,r){let i=cp[e.name];i||(i={},cp[e.name]=i);let s=i[t.toURLString()];return s&&Wn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new u4(t,P4,n,r),i[t.toURLString()]=s,s}class D4{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(c4(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Yn(this._repo,Q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(N4(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Wn("Cannot call "+e+" on a deleted database.")}}function L4(t=iF(),e){const n=KE(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=GL("database");r&&M4(n,...r)}return n}function M4(t,e,n,r={}){t=Ht(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Wn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Wn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ds(ds.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:qL(r.mockUserToken,t.app.options.projectId);s=new ds(o)}O4(i,e,n,s)}/**
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
 */function F4(t){I$(Zc),Ps(new _i("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return R4(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Er(M_,F_,t),Er(M_,F_,"esm2017")}$n.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};$n.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};F4();const $4="",j4={apiKey:$4,authDomain:"test-582b2.firebaseapp.com",projectId:"test-582b2",storageBucket:"test-582b2.appspot.com",messagingSenderId:"925130837675",appId:"1:925130837675:web:d3470003dae1803bf931ee",databaseURL:"https://test-582b2-default-rtdb.europe-west1.firebasedatabase.app/"},xC=qE(j4),Rg=n$(xC),U4=L4(xC);new Nn;const jl=Qc("auth/signUp",async({name:t,email:e,password:n},r)=>{try{const s=(await g$(Rg,e,n)).user;return await _$(s,{displayName:t}),{isAuthenticated:!0,email:s.email}}catch(i){return r.rejectWithValue(i.message)}}),Ul=Qc("auth/signIn",async({email:t,password:e},n)=>{try{const i=(await y$(Rg,t,e)).user;return{isAuthenticated:!0,name:i.displayName,email:i.email}}catch(r){return n.rejectWithValue(r.message)}}),zl=Qc("auth/logout",async(t,e)=>{try{await w$(Rg)}catch(n){return e.rejectWithValue(n.message)}});var CC={exports:{}},TC={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ba=T;function z4(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var B4=typeof Object.is=="function"?Object.is:z4,V4=Ba.useSyncExternalStore,W4=Ba.useRef,H4=Ba.useEffect,G4=Ba.useMemo,K4=Ba.useDebugValue;TC.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=W4(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=G4(function(){function l(m){if(!u){if(u=!0,c=m,m=r(m),i!==void 0&&o.hasValue){var g=o.value;if(i(g,m))return d=g}return d=m}if(g=d,B4(c,m))return g;var v=r(m);return i!==void 0&&i(g,v)?g:(c=m,d=v)}var u=!1,c,d,f=n===void 0?null:n;return[function(){return l(e())},f===null?void 0:function(){return l(f())}]},[e,n,r,i]);var a=V4(t,s[0],s[1]);return H4(function(){o.hasValue=!0,o.value=a},[a]),K4(a),a};CC.exports=TC;var q4=CC.exports,xt="default"in Ao?it:Ao,m0=Symbol.for("react-redux-context"),g0=typeof globalThis<"u"?globalThis:{};function Y4(){if(!xt.createContext)return{};const t=g0[m0]??(g0[m0]=new Map);let e=t.get(xt.createContext);return e||(e=xt.createContext(null),t.set(xt.createContext,e)),e}var Nr=Y4(),Q4=()=>{throw new Error("uSES not initialized!")};function Ng(t=Nr){return function(){return xt.useContext(t)}}var bC=Ng(),IC=Q4,X4=t=>{IC=t},J4=(t,e)=>t===e;function Z4(t=Nr){const e=t===Nr?bC:Ng(t),n=(r,i={})=>{const{equalityFn:s=J4,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:l,getServerState:u,stabilityCheck:c,identityFunctionCheck:d}=e();xt.useRef(!0);const f=xt.useCallback({[r.name](g){return r(g)}}[r.name],[r,c,o.stabilityCheck]),m=IC(l.addNestedSub,a.getState,u||a.getState,f,s);return xt.useDebugValue(m),m};return Object.assign(n,{withTypes:()=>n}),n}var As=Z4();function e6(t){t()}function t6(){let t=null,e=null;return{clear(){t=null,e=null},notify(){e6(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var y0={notify(){},get:()=>[]};function n6(t,e){let n,r=y0,i=0,s=!1;function o(v){c();const w=r.subscribe(v);let p=!1;return()=>{p||(p=!0,w(),d())}}function a(){r.notify()}function l(){g.onStateChange&&g.onStateChange()}function u(){return s}function c(){i++,n||(n=e?e.addNestedSub(l):t.subscribe(l),r=t6())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=y0)}function f(){s||(s=!0,c())}function m(){s&&(s=!1,d())}const g={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:f,tryUnsubscribe:m,getListeners:()=>r};return g}var r6=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",i6=r6?xt.useLayoutEffect:xt.useEffect;function s6({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=xt.useMemo(()=>{const u=n6(t);return{store:t,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[t,r,i,s]),a=xt.useMemo(()=>t.getState(),[t]);i6(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==t.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const l=e||Nr;return xt.createElement(l.Provider,{value:o},n)}var o6=s6;function kC(t=Nr){const e=t===Nr?bC:Ng(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var a6=kC();function l6(t=Nr){const e=t===Nr?a6:kC(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var Va=l6();X4(q4.useSyncExternalStoreWithSelector);function u6({onClose:t}){const e=Va(),n=km({userName:ls().min(2,"Name must be at least 2 characters long").max(16,"Name can be at most 16 characters long").matches(/^[a-zA-Z\s]+$/,"Name must contain only English letters and spaces").required("Name is required"),email:ls().email("Invalid email format").matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Invalid Email format").required("Email is required"),password:ls().min(6,"Password must be at least 6 characters long").max(16,"Password can be at most 16 characters long").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,"Password must contain only English letters at least one digit, one lowercase letter, and one uppercase letter").required("Password is required")}),r=wE({initialValues:{userName:"",email:"",password:""},validationSchema:n,onSubmit:async i=>{console.log(i),e(jl(i))}});return _.jsxs(MO,{onSubmit:r.handleSubmit,children:[_.jsx(FO,{children:"Registration"}),_.jsx($O,{children:"Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"}),_.jsxs(Jd,{children:[_.jsx(ef,{id:"userName",name:"userName",type:"text",placeholder:"Name",onChange:r.handleChange,value:r.values.userName,className:`${r.touched.userName&&r.errors.userName?"is-invalid":""}`}),r.touched.userName&&r.errors.userName?_.jsx(_.Fragment,{children:_.jsx(Zd,{children:r.errors.userName})}):null]}),_.jsxs(Jd,{children:[_.jsx(ef,{id:"email",name:"email",type:"text",placeholder:"Email",onChange:r.handleChange,value:r.values.email,className:`${r.touched.email&&r.errors.email?"is-invalid":""}`}),r.touched.email&&r.errors.email?_.jsx(_.Fragment,{children:_.jsx(Zd,{children:r.errors.email})}):null]}),_.jsxs(Jd,{children:[_.jsx(ef,{id:"password",name:"password",type:r.values.showPassword?"text":"password",placeholder:"Password",onChange:r.handleChange,value:r.values.password,className:`${r.touched.password&&r.errors.password?"is-invalid":""}`}),_.jsx(jO,{type:"button",onClick:()=>{r.setFieldTouched("password",!1),r.setFieldValue("showPassword",!r.values.showPassword)},children:r.values.showPassword?_.jsx(Rv,{children:_.jsx("use",{href:_n+"#iconEyeOpen"})}):_.jsx(Rv,{children:_.jsx("use",{href:_n+"#iconEyeClosed"})})}),r.touched.password&&r.errors.password?_.jsx(Zd,{children:r.errors.password}):null]}),_.jsx(UO,{type:"submit",children:"Sign Up"}),_.jsx(zO,{onClick:()=>t(!1),children:_.jsx(BO,{children:_.jsx("use",{href:_n+"#icon-x"})})})]})}const c6=z.form`
  position: relative;
  margin: 0 auto;
  min-height: 420px;

  background: var(--background);
  border-radius: 30px;
  padding: 64px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    padding: 64px;
  }
`,v0=z.div`
  margin-bottom: 14px;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 18px;
  }
`;z.div`
  margin-bottom: 40px;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
`;const d6=z.h2`
  line-height: 1.2;
  letter-spacing: -0.8px;
  font-weight: 500;
  margin-bottom: 20px;
  color: var(--secondar);
  @media (min-width: 768px) {
    font-size: 40px;
  }
`,f6=z.p`
  width: 438px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.38;
  margin-bottom: 40px;
  color: rgba(18, 20, 23, 0.8);
`,_0=z.p`
  margin-left: 15px;
  font-size: 12px;
  font-weight: 400;
  color: var(--red);
`,h6=z.button`
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
`,w0=z.input`
  padding: 16px 18px;
  width: 100%;
  border-radius: 40px;
  outline: none;
  border-radius: 12px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.38;
  color: var(--secondar);
  &::placeholder {
    color: var(--secondar);
  }
  &.is-invalid {
    border-color: var(--red);
  }
`,p6=z.button`
  font-weight: 600;
  width: 100%;
  border: none;
  border-radius: 12px;
  color: var(--secondar);

  background-color: var(--yelow);

  padding: 16px 180px;

  font-size: 18px;
  font-weight: 700;
  line-height: 1.56;
  @media (min-width: 768px) {
  }
`,m6=z.button`
  position: absolute;
  top: 20px;
  right: 20px;

  background-color: transparent;
  border: none;
`;z.svg`
  stroke: var(--secondary);
  fill: none;
  width: 24px;
  height: 24px;
`;const g6=z.svg`
  stroke: var(--secondary);
  fill: none;
  width: 32px;
  height: 32px;
`,S0=z.svg`
  stroke: var(--secondary);
  fill: none;
  display: inline-block;
  width: 24px;
  height: 24px;
`;function y6({onClose:t}){const e=Va(),n=km({email:ls().email("Invalid email format").matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Invalid Email format").required("Email is required"),password:ls().min(6,"Password must be at least 6 characters long").max(16,"Password can be at most 16 characters long").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,"Password must contain only English letters at least one digit, one lowercase letter, and one uppercase letter").required("Password is required")}),r=wE({initialValues:{email:"",password:""},validationSchema:n,onSubmit:async i=>{e(Ul(i))}});return _.jsxs(c6,{onSubmit:r.handleSubmit,children:[_.jsx(d6,{children:"Log In"}),_.jsx(f6,{children:"Welcome back! Please enter your credentials to access your account and continue your search for an teacher."}),_.jsxs(v0,{children:[_.jsx(w0,{id:"email",name:"email",type:"text",placeholder:"Email",onChange:r.handleChange,value:r.values.email,className:`${r.touched.email&&r.errors.email?"is-invalid":""}`}),r.touched.email&&r.errors.email?_.jsx(_.Fragment,{children:_.jsx(_0,{children:r.errors.email})}):null]}),_.jsxs(v0,{children:[_.jsx(w0,{id:"password",name:"password",type:r.values.showPassword?"text":"password",placeholder:"Password",onChange:r.handleChange,value:r.values.password,className:`${r.touched.password&&r.errors.password?"is-invalid":""}`}),_.jsx(h6,{type:"button",onClick:()=>{r.setFieldTouched("password",!1),r.setFieldValue("showPassword",!r.values.showPassword)},children:r.values.showPassword?_.jsx(S0,{children:_.jsx("use",{href:_n+"#iconEyeOpen"})}):_.jsx(S0,{children:_.jsx("use",{href:_n+"#iconEyeClosed"})})}),r.touched.password&&r.errors.password?_.jsx(_0,{children:r.errors.password}):null]}),_.jsx(p6,{type:"submit",children:"Log In"}),_.jsx(m6,{onClick:()=>t(!1),children:_.jsx(g6,{children:_.jsx("use",{href:_n+"#icon-x"})})})]})}function v6({color:t}){const[e,n]=T.useState(!1),[r,i]=T.useState(!1);return console.log(t),_.jsxs(_.Fragment,{children:[_.jsxs(UP,{children:[_.jsx(xv,{to:"/Home",children:"Home"}),_.jsx(xv,{to:"/Teachers",children:"Teachers"})]}),_.jsxs(zP,{children:[_.jsxs(BP,{onClick:()=>i(!r),children:[_.jsx(NS,{color:t,children:_.jsx("use",{href:_n+"#icon-log-in-01"})}),"Log in"]}),_.jsx(VP,{onClick:()=>n(!e),children:"Registration"})]}),e&&_.jsxs(Cv,{onClose:n,children:[" ",_.jsx(u6,{onClose:n})," "]}),r&&_.jsxs(Cv,{onClose:i,children:[" ",_.jsx(y6,{onClose:i})," "]})]})}const _6=z.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px 28px;
`,Tf=z(xa)`
  color: var(--secondary);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  padding: 10px 0px;
`,w6=z.button`
  display: flex;
  align-items: center;
  gap: 0px 8px;
  background-color: transparent;
  border: none;

  color: var(--secondary);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25;
`;function S6({color:t}){const e=Va();return _.jsxs(_.Fragment,{children:[_.jsxs(_6,{children:[_.jsx(Tf,{to:"/Home",children:"Home"}),_.jsx(Tf,{to:"/Teachers",children:"Teachers"}),_.jsx(Tf,{to:"/Favorites",children:"Favorites"})]}),_.jsxs(w6,{onClick:()=>e(zl()),children:[_.jsx(NS,{color:t,children:_.jsx("use",{href:_n+"#icon-log-in-01"})}),"Log out"]})]})}const Ag=t=>t.Auth.isAuth,E6=({color:t})=>{const e=As(Ag);return _.jsx(LP,{children:_.jsxs(MP,{children:[_.jsxs($P,{to:"/Home",children:[_.jsx(FP,{children:_.jsx("use",{href:_n+"#icon-ukraine"})}),_.jsx(jP,{children:"LearnLingo"})]}),e?_.jsx(S6,{color:t}):_.jsx(v6,{color:t})]})})};function dp(){return dp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},dp.apply(this,arguments)}function x6(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function C6(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var T6=function(){function t(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(C6(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=x6(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),Xe="-ms-",rc="-moz-",X="-webkit-",PC="comm",Dg="rule",Lg="decl",b6="@import",OC="@keyframes",I6="@layer",k6=Math.abs,ld=String.fromCharCode,P6=Object.assign;function O6(t,e){return Ve(t,0)^45?(((e<<2^Ve(t,0))<<2^Ve(t,1))<<2^Ve(t,2))<<2^Ve(t,3):0}function RC(t){return t.trim()}function R6(t,e){return(t=e.exec(t))?t[0]:t}function J(t,e,n){return t.replace(e,n)}function fp(t,e){return t.indexOf(e)}function Ve(t,e){return t.charCodeAt(e)|0}function va(t,e,n){return t.slice(e,n)}function pn(t){return t.length}function Mg(t){return t.length}function gl(t,e){return e.push(t),t}function N6(t,e){return t.map(e).join("")}var ud=1,Ds=1,NC=0,vt=0,be=0,Ks="";function cd(t,e,n,r,i,s,o){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:ud,column:Ds,length:o,return:""}}function ao(t,e){return P6(cd("",null,null,"",null,null,0),t,{length:-t.length},e)}function A6(){return be}function D6(){return be=vt>0?Ve(Ks,--vt):0,Ds--,be===10&&(Ds=1,ud--),be}function kt(){return be=vt<NC?Ve(Ks,vt++):0,Ds++,be===10&&(Ds=1,ud++),be}function wn(){return Ve(Ks,vt)}function Bl(){return vt}function Wa(t,e){return va(Ks,t,e)}function _a(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function AC(t){return ud=Ds=1,NC=pn(Ks=t),vt=0,[]}function DC(t){return Ks="",t}function Vl(t){return RC(Wa(vt-1,hp(t===91?t+2:t===40?t+1:t)))}function L6(t){for(;(be=wn())&&be<33;)kt();return _a(t)>2||_a(be)>3?"":" "}function M6(t,e){for(;--e&&kt()&&!(be<48||be>102||be>57&&be<65||be>70&&be<97););return Wa(t,Bl()+(e<6&&wn()==32&&kt()==32))}function hp(t){for(;kt();)switch(be){case t:return vt;case 34:case 39:t!==34&&t!==39&&hp(be);break;case 40:t===41&&hp(t);break;case 92:kt();break}return vt}function F6(t,e){for(;kt()&&t+be!==47+10;)if(t+be===42+42&&wn()===47)break;return"/*"+Wa(e,vt-1)+"*"+ld(t===47?t:kt())}function $6(t){for(;!_a(wn());)kt();return Wa(t,vt)}function j6(t){return DC(Wl("",null,null,null,[""],t=AC(t),0,[0],t))}function Wl(t,e,n,r,i,s,o,a,l){for(var u=0,c=0,d=o,f=0,m=0,g=0,v=1,w=1,p=1,h=0,y="",E=i,x=s,C=r,S=y;w;)switch(g=h,h=kt()){case 40:if(g!=108&&Ve(S,d-1)==58){fp(S+=J(Vl(h),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:S+=Vl(h);break;case 9:case 10:case 13:case 32:S+=L6(g);break;case 92:S+=M6(Bl()-1,7);continue;case 47:switch(wn()){case 42:case 47:gl(U6(F6(kt(),Bl()),e,n),l);break;default:S+="/"}break;case 123*v:a[u++]=pn(S)*p;case 125*v:case 59:case 0:switch(h){case 0:case 125:w=0;case 59+c:p==-1&&(S=J(S,/\f/g,"")),m>0&&pn(S)-d&&gl(m>32?x0(S+";",r,n,d-1):x0(J(S," ","")+";",r,n,d-2),l);break;case 59:S+=";";default:if(gl(C=E0(S,e,n,u,c,i,a,y,E=[],x=[],d),s),h===123)if(c===0)Wl(S,e,C,C,E,s,d,a,x);else switch(f===99&&Ve(S,3)===110?100:f){case 100:case 108:case 109:case 115:Wl(t,C,C,r&&gl(E0(t,C,C,0,0,i,a,y,i,E=[],d),x),i,x,d,a,r?E:x);break;default:Wl(S,C,C,C,[""],x,0,a,x)}}u=c=m=0,v=p=1,y=S="",d=o;break;case 58:d=1+pn(S),m=g;default:if(v<1){if(h==123)--v;else if(h==125&&v++==0&&D6()==125)continue}switch(S+=ld(h),h*v){case 38:p=c>0?1:(S+="\f",-1);break;case 44:a[u++]=(pn(S)-1)*p,p=1;break;case 64:wn()===45&&(S+=Vl(kt())),f=wn(),c=d=pn(y=S+=$6(Bl())),h++;break;case 45:g===45&&pn(S)==2&&(v=0)}}return s}function E0(t,e,n,r,i,s,o,a,l,u,c){for(var d=i-1,f=i===0?s:[""],m=Mg(f),g=0,v=0,w=0;g<r;++g)for(var p=0,h=va(t,d+1,d=k6(v=o[g])),y=t;p<m;++p)(y=RC(v>0?f[p]+" "+h:J(h,/&\f/g,f[p])))&&(l[w++]=y);return cd(t,e,n,i===0?Dg:a,l,u,c)}function U6(t,e,n){return cd(t,e,n,PC,ld(A6()),va(t,2,-2),0)}function x0(t,e,n,r){return cd(t,e,n,Lg,va(t,0,r),va(t,r+1,-1),r)}function hs(t,e){for(var n="",r=Mg(t),i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function z6(t,e,n,r){switch(t.type){case I6:if(t.children.length)break;case b6:case Lg:return t.return=t.return||t.value;case PC:return"";case OC:return t.return=t.value+"{"+hs(t.children,r)+"}";case Dg:t.value=t.props.join(",")}return pn(n=hs(t.children,r))?t.return=t.value+"{"+n+"}":""}function B6(t){var e=Mg(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function V6(t){return function(e){e.root||(e=e.return)&&t(e)}}var W6=function(e,n,r){for(var i=0,s=0;i=s,s=wn(),i===38&&s===12&&(n[r]=1),!_a(s);)kt();return Wa(e,vt)},H6=function(e,n){var r=-1,i=44;do switch(_a(i)){case 0:i===38&&wn()===12&&(n[r]=1),e[r]+=W6(vt-1,n,r);break;case 2:e[r]+=Vl(i);break;case 4:if(i===44){e[++r]=wn()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=ld(i)}while(i=kt());return e},G6=function(e,n){return DC(H6(AC(e),n))},C0=new WeakMap,K6=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!C0.get(r))&&!i){C0.set(e,!0);for(var s=[],o=G6(n,s),a=r.props,l=0,u=0;l<o.length;l++)for(var c=0;c<a.length;c++,u++)e.props[u]=s[l]?o[l].replace(/&\f/g,a[c]):a[c]+" "+o[l]}}},q6=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function LC(t,e){switch(O6(t,e)){case 5103:return X+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return X+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return X+t+rc+t+Xe+t+t;case 6828:case 4268:return X+t+Xe+t+t;case 6165:return X+t+Xe+"flex-"+t+t;case 5187:return X+t+J(t,/(\w+).+(:[^]+)/,X+"box-$1$2"+Xe+"flex-$1$2")+t;case 5443:return X+t+Xe+"flex-item-"+J(t,/flex-|-self/,"")+t;case 4675:return X+t+Xe+"flex-line-pack"+J(t,/align-content|flex-|-self/,"")+t;case 5548:return X+t+Xe+J(t,"shrink","negative")+t;case 5292:return X+t+Xe+J(t,"basis","preferred-size")+t;case 6060:return X+"box-"+J(t,"-grow","")+X+t+Xe+J(t,"grow","positive")+t;case 4554:return X+J(t,/([^-])(transform)/g,"$1"+X+"$2")+t;case 6187:return J(J(J(t,/(zoom-|grab)/,X+"$1"),/(image-set)/,X+"$1"),t,"")+t;case 5495:case 3959:return J(t,/(image-set\([^]*)/,X+"$1$`$1");case 4968:return J(J(t,/(.+:)(flex-)?(.*)/,X+"box-pack:$3"+Xe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+X+t+t;case 4095:case 3583:case 4068:case 2532:return J(t,/(.+)-inline(.+)/,X+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(pn(t)-1-e>6)switch(Ve(t,e+1)){case 109:if(Ve(t,e+4)!==45)break;case 102:return J(t,/(.+:)(.+)-([^]+)/,"$1"+X+"$2-$3$1"+rc+(Ve(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~fp(t,"stretch")?LC(J(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(Ve(t,e+1)!==115)break;case 6444:switch(Ve(t,pn(t)-3-(~fp(t,"!important")&&10))){case 107:return J(t,":",":"+X)+t;case 101:return J(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+X+(Ve(t,14)===45?"inline-":"")+"box$3$1"+X+"$2$3$1"+Xe+"$2box$3")+t}break;case 5936:switch(Ve(t,e+11)){case 114:return X+t+Xe+J(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return X+t+Xe+J(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return X+t+Xe+J(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return X+t+Xe+t+t}return t}var Y6=function(e,n,r,i){if(e.length>-1&&!e.return)switch(e.type){case Lg:e.return=LC(e.value,e.length);break;case OC:return hs([ao(e,{value:J(e.value,"@","@"+X)})],i);case Dg:if(e.length)return N6(e.props,function(s){switch(R6(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return hs([ao(e,{props:[J(s,/:(read-\w+)/,":"+rc+"$1")]})],i);case"::placeholder":return hs([ao(e,{props:[J(s,/:(plac\w+)/,":"+X+"input-$1")]}),ao(e,{props:[J(s,/:(plac\w+)/,":"+rc+"$1")]}),ao(e,{props:[J(s,/:(plac\w+)/,Xe+"input-$1")]})],i)}return""})}},Q6=[Y6],X6=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var w=v.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=e.stylisPlugins||Q6,s={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var w=v.getAttribute("data-emotion").split(" "),p=1;p<w.length;p++)s[w[p]]=!0;a.push(v)});var l,u=[K6,q6];{var c,d=[z6,V6(function(v){c.insert(v)})],f=B6(u.concat(i,d)),m=function(w){return hs(j6(w),f)};l=function(w,p,h,y){c=h,m(w?w+"{"+p.styles+"}":p.styles),y&&(g.inserted[p.name]=!0)}}var g={key:n,sheet:new T6({key:n,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:l};return g.sheet.hydrate(a),g},J6=!0;function Z6(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):r+=i+" "}),r}var MC=function(e,n,r){var i=e.key+"-"+n.name;(r===!1||J6===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles)},eU=function(e,n,r){MC(e,n,r);var i=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var s=n;do e.insert(n===s?"."+i:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function tU(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var nU=/[A-Z]|^ms/g,rU=/_EMO_([^_]+?)_([^]*?)_EMO_/g,FC=function(e){return e.charCodeAt(1)===45},T0=function(e){return e!=null&&typeof e!="boolean"},bf=cS(function(t){return FC(t)?t:t.replace(nU,"-$&").toLowerCase()}),b0=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(rU,function(r,i,s){return mn={name:i,styles:s,next:mn},i})}return yS[e]!==1&&!FC(e)&&typeof n=="number"&&n!==0?n+"px":n};function wa(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return mn={name:n.name,styles:n.styles,next:mn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)mn={name:r.name,styles:r.styles,next:mn},r=r.next;var i=n.styles+";";return i}return iU(t,e,n)}case"function":{if(t!==void 0){var s=mn,o=n(t);return mn=s,wa(t,e,o)}break}}if(e==null)return n;var a=e[n];return a!==void 0?a:n}function iU(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=wa(t,e,n[i])+";";else for(var s in n){var o=n[s];if(typeof o!="object")e!=null&&e[o]!==void 0?r+=s+"{"+e[o]+"}":T0(o)&&(r+=bf(s)+":"+b0(s,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var a=0;a<o.length;a++)T0(o[a])&&(r+=bf(s)+":"+b0(s,o[a])+";");else{var l=wa(t,e,o);switch(s){case"animation":case"animationName":{r+=bf(s)+":"+l+";";break}default:r+=s+"{"+l+"}"}}}return r}var I0=/label:\s*([^\s;\n{]+)\s*(;|$)/g,mn,sU=function(e,n,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,s="";mn=void 0;var o=e[0];o==null||o.raw===void 0?(i=!1,s+=wa(r,n,o)):s+=o[0];for(var a=1;a<e.length;a++)s+=wa(r,n,e[a]),i&&(s+=o[a]);I0.lastIndex=0;for(var l="",u;(u=I0.exec(s))!==null;)l+="-"+u[1];var c=tU(s)+l;return{name:c,styles:s,next:mn}},oU=function(e){return e()},aU=Ao["useInsertionEffect"]?Ao["useInsertionEffect"]:!1,lU=aU||oU,$C=T.createContext(typeof HTMLElement<"u"?X6({key:"css"}):null);$C.Provider;var uU=function(e){return T.forwardRef(function(n,r){var i=T.useContext($C);return e(n,i,r)})},cU=T.createContext({}),dU=Nk,fU=function(e){return e!=="theme"},k0=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?dU:fU},P0=function(e,n,r){var i;if(n){var s=n.shouldForwardProp;i=e.__emotion_forwardProp&&s?function(o){return e.__emotion_forwardProp(o)&&s(o)}:s}return typeof i!="function"&&r&&(i=e.__emotion_forwardProp),i},hU=function(e){var n=e.cache,r=e.serialized,i=e.isStringTag;return MC(n,r,i),lU(function(){return eU(n,r,i)}),null},pU=function t(e,n){var r=e.__emotion_real===e,i=r&&e.__emotion_base||e,s,o;n!==void 0&&(s=n.label,o=n.target);var a=P0(e,n,r),l=a||k0(i),u=!l("as");return function(){var c=arguments,d=r&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&d.push("label:"+s+";"),c[0]==null||c[0].raw===void 0)d.push.apply(d,c);else{d.push(c[0][0]);for(var f=c.length,m=1;m<f;m++)d.push(c[m],c[0][m])}var g=uU(function(v,w,p){var h=u&&v.as||i,y="",E=[],x=v;if(v.theme==null){x={};for(var C in v)x[C]=v[C];x.theme=T.useContext(cU)}typeof v.className=="string"?y=Z6(w.registered,E,v.className):v.className!=null&&(y=v.className+" ");var S=sU(d.concat(E),w.registered,x);y+=w.key+"-"+S.name,o!==void 0&&(y+=" "+o);var P=u&&a===void 0?k0(h):l,j={};for(var L in v)u&&L==="as"||P(L)&&(j[L]=v[L]);return j.className=y,j.ref=p,T.createElement(T.Fragment,null,T.createElement(hU,{cache:w,serialized:S,isStringTag:typeof h=="string"}),T.createElement(h,j))});return g.displayName=s!==void 0?s:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",g.defaultProps=e.defaultProps,g.__emotion_real=g,g.__emotion_base=i,g.__emotion_styles=d,g.__emotion_forwardProp=a,Object.defineProperty(g,"toString",{value:function(){return"."+o}}),g.withComponent=function(v,w){return t(v,dp({},n,w,{shouldForwardProp:P0(g,w,!0)})).apply(void 0,d)},g}},mU=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],D=pU.bind();mU.forEach(function(t){D[t]=D(t)});const gU=D.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: inner 0px 0px 200px 10px
    ${({color:t})=>t==="Blue"?"var(--colorBlue)":t==="Green"?"var(--colorGreen)":t==="Orange"?"var(--colorYellow)":t==="Pink"?"var(--colorPink)":t==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};

  body.dark-theme & {
    background-color: rgba(0, 0, 0, 0.8);
  }

  & .lds-ripple {
    display: inline-block;
    position: relative;
    width: 72px;
    height: 72px;
    border-radius: 100px;
  }
  & .lds-ripple div {
    position: absolute;
    border: 4px solid
      ${({color:t})=>t==="Blue"?"var(--colorBlue)":t==="Green"?"var(--colorGreen)":t==="Orange"?"var(--colorYellow)":t==="Pink"?"var(--colorPink)":t==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  & .lds-ripple div:nth-of-type(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    4.9% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    5% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`,yU=D.div`
  position: relative;
  height: 200px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`,jC=({color:t})=>_.jsx(gU,{color:t,children:_.jsx(yU,{children:_.jsxs("div",{className:"lds-ripple",children:[_.jsx("div",{}),_.jsx("div",{})]})})}),vU=({color:t})=>_.jsxs(_.Fragment,{children:[_.jsx(E6,{color:t}),_.jsx(T.Suspense,{fallback:_.jsx(jC,{color:t}),children:_.jsx(gb,{})})]}),_U=D.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px 24px;
  margin-bottom: 24px;
`,wU=D.h1`
  @media (min-width: 1280px) {
    width: 548px;
    margin-bottom: 32px;
    margin-top: 0px;
  }

  color: var(--secondary);
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.17;
  letter-spacing: -0.96px;
`,SU=D.span`
  font-style: italic;
  font-weight: 400;
  line-height: 56px;
  letter-spacing: -0.96px;
  padding-right: 10px;
  border-radius: 12px;
  background-color: ${({color:t})=>t==="Blue"?"var(--hoverColorBlue)":t==="Green"?"var(--hoverColorGreen)":t==="Orange"?"var(--hoverColorYellow)":t==="Pink"?"var(--hoverColorPink)":t==="LightPink"?"var(--hoverColorCoral)":"var(--hoverCecondary-text-color)"};
`,EU=D.div`
  background-color: var(--secondary-white);
  border-radius: 30px;
  padding: 98px 108px 98px 64px;
`,xU=D.p`
  @media (min-width: 1280px) {
    width: 471px;
    margin-bottom: 64px;
  }
  color: var(--secondary);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.37;
  letter-spacing: -0.32px;
`,CU=D.button`
  padding: 16px 88px;
  border: none;
  border-radius: 12px;
  height: 60px;
  background-color: ${({color:t})=>t==="Blue"?"var(--colorBlue)":t==="Green"?"var(--colorGreen)":t==="Orange"?"var(--colorYellow)":t==="Pink"?"var(--colorPink)":t==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
`,TU=D.ul`
  display: flex;
  flex-direction: row;
  width: 1310px;
  gap: 100px;
  padding: 40px 0;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1312px;
  border: 3px dashed
    ${({color:t})=>t==="Blue"?"var(--colorBlue)":t==="Green"?"var(--colorGreen)":t==="Orange"?"var(--colorYellow)":t==="Pink"?"var(--colorPink)":t==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  border-radius: 30px;
`,yl=D.li`
  display: flex;
  flex-direction: row;
  gap: 16px;
`,vl=D.span`
  font-size: 28px;
  line-height: 1.14;
  letter-spacing: -0.56px;
`,_l=D.span`
  width: 96px;
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: -0.28px;
`,bU="/Learn-Lingo/assets/ImgYelow-7772ad01.jpeg",IU="/Learn-Lingo/assets/imgGrean-b6010a5f.jpeg",kU="/Learn-Lingo/assets/imgLighPink-5fe905ec.jpeg",PU="/Learn-Lingo/assets/imgPink-98002fea.jpeg",OU="/Learn-Lingo/assets/imgBlue-e3826070.jpeg",RU=({color:t})=>(console.log(t),_.jsxs(_.Fragment,{children:[_.jsxs(_U,{children:[_.jsxs(EU,{children:[_.jsxs(wU,{children:["Unlock your potential with the best"," ",_.jsx(SU,{color:t,children:"language"})," tutors"]}),_.jsx(xU,{children:"Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors."}),_.jsx(CU,{color:t,children:"Get started"})]}),t==="Blue"?_.jsx("img",{src:OU,alt:"girlImg",width:568,height:530}):null,t==="LightPink"?_.jsx("img",{src:kU,alt:"girlImg",width:568,height:530}):null,t==="Green"?_.jsx("img",{src:IU,alt:"girlImg",width:568,height:530}):null,t==="Orange"?_.jsx("img",{src:bU,alt:"girlImg",width:568,height:530}):null,t==="Pink"?_.jsx("img",{src:PU,alt:"girlImg",width:568,height:530}):null]}),_.jsx("footer",{children:_.jsxs(TU,{color:t,children:[_.jsxs(yl,{children:[_.jsx(vl,{children:"32,000 +"}),_.jsx(_l,{children:"Experienced tutors"})]}),_.jsxs(yl,{children:[_.jsx(vl,{children:"300,000 +"}),_.jsx(_l,{children:"5-star tutor reviews"})]}),_.jsxs(yl,{children:[_.jsx(vl,{children:"120 +"}),_.jsx(_l,{children:"Subjects taught"})]}),_.jsxs(yl,{children:[_.jsx(vl,{children:"200 +"}),_.jsx(_l,{children:"Tutor nationalities"})]})]})})]})),NU=D.ul`
  margin-top: 24px;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
`,AU=D.button`
  border: none;
  margin-top: 64px;
  border-radius: 12px;
  padding: 16px 48px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.6;
  margin-left: auto;
  margin-right: auto;
  display: block;
  background-color: ${({color:t})=>t==="Blue"?"var(--colorBlue)":t==="Green"?"var(--colorGreen)":t==="Orange"?"var(--colorYellow)":t==="Pink"?"var(--colorPink)":t==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
`,DU=D.div`
  margin-left: auto;
  margin-right: auto;
  padding: 0px 16px;
  width: 320px;
  background-color: var(--secondary-white);

  @media screen and (min-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    padding: 0px 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0px 64px;
  }
`;D.p`
  margin: 0;

  margin-bottom: 20px;
  margin-right: auto;
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.8px;
  color: ${({color:t})=>t==="Blue"?"var(--colorBlue)":t==="Green"?"var(--colorGreen)":t==="Orange"?"var(--colorYellow)":t==="Pink"?"var(--colorPink)":t==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
`;var UC={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},O0=it.createContext&&it.createContext(UC),LU=["attr","size","title"];function MU(t,e){if(t==null)return{};var n=FU(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function FU(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function ic(){return ic=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ic.apply(this,arguments)}function R0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function sc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?R0(Object(n),!0).forEach(function(r){$U(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):R0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function $U(t,e,n){return e=jU(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function jU(t){var e=UU(t,"string");return typeof e=="symbol"?e:String(e)}function UU(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function zC(t){return t&&t.map((e,n)=>it.createElement(e.tag,sc({key:n},e.attr),zC(e.child)))}function dd(t){return e=>it.createElement(zU,ic({attr:sc({},t.attr)},e),zC(t.child))}function zU(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=MU(t,LU),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),it.createElement("svg",ic({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:sc(sc({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&it.createElement("title",null,s),t.children)};return O0!==void 0?it.createElement(O0.Consumer,null,n=>e(n)):e(UC)}function BU(t){return dd({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"},child:[]}]})(t)}function VU(t){return dd({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"},child:[]}]})(t)}function WU(t){return dd({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"},child:[]}]})(t)}function HU(t){return dd({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"},child:[]}]})(t)}const GU=D.li`
  position: relative;
  width: 100%;
  padding: 12px;

  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  align-items: flex-start;

  border-radius: 24px;
  background-color: var(--background);

  @media screen and (min-width: 756px) {
    flex-wrap: nowrap;
    padding: 16px;
    gap: 30px;
  }

  @media screen and (min-width: 1280px) {
    padding: 24px;
    gap: 40px;
  }
`,KU=D.div`
  width: 120px;
  height: 120px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  border-radius: 50%;
  border: 3px solid
    ${({color:t})=>t==="Blue"?"var(--colorBlue)":t==="Green"?"var(--colorGreen)":t==="Orange"?"var(--colorYellow)":t==="Pink"?"var(--colorPink)":t==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  background: #fff;
`,qU=D.img`
  display: block;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
`,YU=D.div``,QU=D.div`
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
        content: '';
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
      color: var(--grean);
      margin-left: 4px;
    }
  }
`;D.div`
  display: flex;
  justify-content: space-between;
`;const XU=D.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,JU=D.ul`
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
`,ZU=D(HU)`
  transform: scale(1);
  transition: transform 300ms cubic-bezier(0.39, 0.575, 0.565, 1);

  &:hover {
    transform: scale(1.02);
    opacity: 0.8;
  }
`,ez=D.button`
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
  background-color: transparent;
  border: none;
`,tz=D(BU)`
  transform: scale(1);
  transition: transform 300ms cubic-bezier(0.39, 0.575, 0.565, 1);

  &:hover {
    transform: scale(1.02);
    opacity: 0.8;
  }
`,nz=D(WU)`
  margin-right: 8px;
`,N0=D(VU)`
  margin-right: 8px;
  fill: #ffc531;
`,rz=D.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  & p {
    color: var(--gray);
    margin: 0;
  }
`,iz=D.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
`,sz=D.p`
  margin-top: 32px;
  color: var(--gray);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5; /* 150% */
  & span {
    color: var(--secondary);
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    text-decoration-line: underline;
  }
`,A0=D.p`
  margin-top: 8px;
  color: var(--gray);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  & span {
    color: var(--secondary);
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }
`,D0=D.button`
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
`;D.svg`
  position: absolute;
  top: 24px;
  right: 24px;
  transform: scale(1);
  cursor: pointer;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  width: 26px;
  height: 26px;
  stroke: black;
  fill: transparent;
`;const oz=D.p`
  margin-bottom: 32px;
  margin-top: 16px;

  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`,az=D.ul`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
`,lz=D.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`,uz=D.div`
  display: flex;
  gap: 12px;
`,cz=D.div`
  width: 46px;
  height: 46px;
  border-radius: 100px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`,dz=D.p`
  display: block;
  border-radius: 100px;

  font-size: 24px;
  font-weight: 700;
`,fz=D.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
`,hz=D.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`,pz=D.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`,Hl=Qc("teachers/getAllTeachers",async(t,e)=>{const n=b4(U4);try{const r=await I4(nc(n,"/"));if(r.exists()){const i=r.val();return Object.values(i)}}catch(r){return e.rejectWithValue(r.message)}}),mz={teachers:[],teachersFavorites:[],isLoading:!1},BC=LE({name:"teachers",initialState:mz,extraReducers:t=>{t.addCase(Hl.pending,e=>{e.isLoading=!0}).addCase(Hl.fulfilled,(e,{payload:n})=>{e.isLoading=!1,e.teachers=n}).addCase(Hl.rejected,e=>{e.isLoading=!1})},reducers:{addFavorites(t,e){t.teachersFavorites.push(e.payload)},deleteFavorites(t,e){const n=t.teachersFavorites.filter(r=>r.avatar_url!==e.payload.avatar_url);t.teachersFavorites=n}}}),{addFavorites:gz,deleteFavorites:yz}=BC.actions,vz=BC.reducer,_z=t=>t.teachers.teachers,wz=t=>t.teachers.isLoading,Sz=t=>t.teachers.teachersFavorites,Ez=({teacher:t,levelFilter:e,color:n})=>{const{name:r,surname:i,languages:s,levels:o,rating:a,reviews:l,price_per_hour:u,lessons_done:c,avatar_url:d,lesson_info:f,conditions:m,experience:g}=t,v=Va(),[w,p]=T.useState(!1),h=As(Sz),y=As(Ag),[E,x]=T.useState(!1);T.useEffect(()=>{h.find(P=>P.avatar_url===d)!==void 0&&x(!0)},[d,h]);const C=()=>{x(!E),v(E?yz(t):gz(t))};return _.jsxs(GU,{children:[_.jsx(KU,{color:n,children:_.jsx(qU,{src:d,height:"100px",width:"100px"})}),_.jsxs(YU,{children:[_.jsxs(QU,{children:[_.jsxs(rz,{children:[_.jsx("p",{children:"Languages"}),_.jsxs(iz,{children:[r," ",i]})]}),_.jsxs("ul",{children:[_.jsxs("li",{children:[_.jsx(nz,{size:"16px"})," Lessons online"]}),_.jsxs("li",{children:["Lessons done: ",c]}),_.jsxs("li",{children:[_.jsx(N0,{})," Rating: ",a]}),_.jsxs("li",{children:["Price / 1 hour: ",_.jsxs("span",{children:[u," $"]})]})]}),y&&_.jsx(ez,{type:"button",onClick:C,children:E?_.jsx(tz,{size:26}):_.jsx(ZU,{size:26})})]}),_.jsxs(sz,{children:["Speaks: ",_.jsx("span",{children:s==null?void 0:s.join(", ")})]}),_.jsxs(A0,{children:["Lesson Info:",_.jsx("span",{children:f})]}),_.jsxs(A0,{children:["Conditions:",_.jsx("span",{children:m})]}),!w&&_.jsx(D0,{onClick:()=>p(!0),children:"Read more"}),w&&_.jsxs(_.Fragment,{children:[_.jsx(oz,{children:g}),_.jsx(az,{children:l.map((S,P)=>_.jsxs(lz,{children:[_.jsxs(uz,{children:[_.jsx(cz,{children:_.jsx(dz,{children:S.reviewer_name.charAt(0).toUpperCase()})}),_.jsxs(fz,{children:[_.jsx(hz,{children:S.reviewer_name}),_.jsxs("span",{children:[_.jsx(N0,{}),S.reviewer_rating,".0"]})]})]}),_.jsx(pz,{children:S.comment})]},P))}),w&&_.jsx(D0,{onClick:()=>p(!1),children:"Read less"})]}),_.jsx(XU,{children:o.map((S,P)=>_.jsx(JU,{className:S===e?"selected":"",children:S},P))})]})]})};let xz=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");const Cz=z.div`
  position: relative;
  display: inline-block;
`,Tz=z.div`
  display: flex;
  align-items: center;
  gap: 0px 50px;
  padding: 14px 18px 14px 18px;
  cursor: pointer;
  border-radius: 14px;
`,bz=z.p`
  color: var(--secondary);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1;
`,Iz=z.ul`
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
`,kz=z.li`
  cursor: pointer;
  color: var(--drop-down);
  transition: color 300ms;

  width: 100%;
  &:hover {
    color: var(--secondary);
  }
`,Pz=z.svg`
  width: 20px;
  height: 20px;
  stroke-width: 0;
  stroke: currentColor;
  fill: transparent;
  transition: transform 300ms;
  transform: ${t=>t.$active&&"rotate(180deg)"};
`;function If({arr:t,value:e,set:n,height:r,selectedOption:i}){const[s,o]=T.useState(!1),a=()=>{o(!s)},l=c=>{n(c),o(!1)},u=T.useRef(null);return T.useEffect(()=>{const c=d=>{u.current&&!u.current.contains(d.target)&&o(!1)};return document.addEventListener("click",c),()=>{document.removeEventListener("click",c)}},[u]),_.jsxs(Cz,{children:[_.jsxs(Tz,{onClick:a,ref:u,children:[_.jsx(bz,{children:i||e}),_.jsx(Pz,{$active:s?!0:void 0,children:_.jsx("use",{href:_n+"#icon-chevron-down"})})]}),s&&_.jsx(Iz,{$heigh:r||void 0,children:t.map((c,d)=>_.jsx(kz,{onClick:()=>l(c),children:c},d))})]})}const Oz=z.ul`
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
`;function Rz(){const[t,e]=T.useState(""),[n,r]=T.useState(""),[i,s]=T.useState(""),o=["French","English","German","Ukrainian","Polish"],a=["A1 Beginner","A2 Elementary","B1 Intermediate","B2 Upper-Intermediate"];let l=[10,20,30,40];return _.jsx(_.Fragment,{children:_.jsxs(Oz,{children:[_.jsxs("li",{children:[_.jsx("span",{children:"Languages"}),_.jsx(If,{arr:o,value:"Enter the text",set:e,selectedOption:t})]}),_.jsxs("li",{children:[_.jsx("span",{children:"Level of knowledge"}),_.jsx(If,{arr:a,value:"To $",set:s,height:!0,selectedOption:i})]}),_.jsxs("li",{children:[_.jsx("span",{children:"Price"}),_.jsx(If,{arr:l,value:"To $",set:r,height:!0,selectedOption:n})]})]})})}function Nz({color:t}){const e=As(_z),n=As(wz),[r,i]=T.useState(4),s=()=>{i(a=>a+4)},o=e==null?void 0:e.slice(0,r);return _.jsx(_.Fragment,{children:n?_.jsx(jC,{color:t}):_.jsxs(DU,{children:[_.jsx(Rz,{}),_.jsx(NU,{children:o&&(o==null?void 0:o.map(a=>_.jsx(Ez,{color:t,teacher:a},xz())))}),(e==null?void 0:e.length)>r&&_.jsx(AU,{color:t,onClick:s,children:"Load more"})]})})}const Az=({color:t})=>_.jsx(Nz,{color:t}),Dz=D.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 500px;
`,Lz=D.div`
  text-align: center;
`,Mz=D.h1`
  color: #ffffff;
`;D(xa)`
  padding: 8px 16px;
  color: #ffffff; /* White text color */
  transition:
    color 0.3s,
    text-shadow 0.3s;
  display: block;
  &:hover,
  &:focus {
    color: #00baff; /* Blue text color on hover/focus */
  }
`;const Fz=()=>_.jsx(Dz,{children:_.jsx(Lz,{children:_.jsx(Mz,{children:"favorites Page"})})}),$z=D.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 500px;
`,jz=D.h1`
  color: #ffffff;
`,Uz=()=>_.jsx($z,{children:_.jsx(jz,{children:"404"})}),zz=D.div`
  width: 100%;
  height: 100vh;
  background-size: 100% 100%;
`;function Bz({component:t,redirectTo:e}){return As(Ag)?t:_.jsx(sw,{to:e})}function Vz(){const[t,e]=T.useState(null),n=Va(),r={Blue:"Blue",LightPink:"LightPink",Green:"Green",Orange:"Orange",Pink:"Pink"};return T.useEffect(()=>{n(Hl())},[n]),T.useEffect(()=>{e(Object.keys(r)[Math.floor(Math.random()*Object.keys(r).length)])},[]),_.jsx(zz,{children:_.jsx(vb,{children:_.jsxs(Vr,{path:"/",element:_.jsx(vU,{color:t}),children:[_.jsx(Vr,{index:!0,element:_.jsx(sw,{to:"Home"})}),_.jsx(Vr,{path:"/Home",element:_.jsx(RU,{color:t})}),_.jsx(Vr,{path:"/Teachers",element:_.jsx(Az,{color:t})}),_.jsx(Vr,{path:"/Favorites",element:_.jsx(Bz,{redirectTo:"/",component:_.jsx(Fz,{})})}),_.jsx(Vr,{path:"*",element:_.jsx(Uz,{})})]})})})}const Wz={name:"",email:"",isAuth:!1,error:null,loading:!1},Hz=LE({name:"auth",initialState:Wz,extraReducers:t=>{t.addCase(jl.pending,e=>{e.error=null,e.loading=!0}).addCase(jl.fulfilled,(e,{payload:n})=>{const{email:r,userName:i}=n;e.name=i||"",e.email=r,e.error=null,e.loading=!1,e.isAuth=!0}).addCase(jl.rejected,(e,{payload:n})=>{e.error=n,e.loading=!1,e.isAuth=!1}).addCase(Ul.pending,e=>{e.error=null,e.loading=!0}).addCase(Ul.fulfilled,(e,{payload:n})=>{const{email:r,name:i}=n;e.name=i,e.email=r,e.error=null,e.loading=!1,e.isAuth=!0}).addCase(Ul.rejected,(e,{payload:n})=>{e.error=n,e.loading=!1,e.isAuth=!1}).addCase(zl.pending,e=>{e.error=null,e.loading=!0}).addCase(zl.fulfilled,e=>{e.name="",e.email="",e.error=null,e.loading=!1,e.isAuth=!1}).addCase(zl.rejected,(e,{payload:n})=>{e.error=n,e.loading=!1,e.isAuth=!1,e.name="",e.email=""})}}),Gz=Hz.reducer;var Fg="persist:",$g="persist/FLUSH",fd="persist/REHYDRATE",jg="persist/PAUSE",Ug="persist/PERSIST",zg="persist/PURGE",Bg="persist/REGISTER",Kz=-1;function Gl(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Gl=function(n){return typeof n}:Gl=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Gl(t)}function L0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function qz(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?L0(n,!0).forEach(function(r){Yz(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):L0(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Yz(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Qz(t,e,n,r){r.debug;var i=qz({},n);return t&&Gl(t)==="object"&&Object.keys(t).forEach(function(s){s!=="_persist"&&e[s]===n[s]&&(i[s]=t[s])}),i}function Xz(t){var e=t.blacklist||null,n=t.whitelist||null,r=t.transforms||[],i=t.throttle||0,s="".concat(t.keyPrefix!==void 0?t.keyPrefix:Fg).concat(t.key),o=t.storage,a;t.serialize===!1?a=function(x){return x}:typeof t.serialize=="function"?a=t.serialize:a=Jz;var l=t.writeFailHandler||null,u={},c={},d=[],f=null,m=null,g=function(x){Object.keys(x).forEach(function(C){p(C)&&u[C]!==x[C]&&d.indexOf(C)===-1&&d.push(C)}),Object.keys(u).forEach(function(C){x[C]===void 0&&p(C)&&d.indexOf(C)===-1&&u[C]!==void 0&&d.push(C)}),f===null&&(f=setInterval(v,i)),u=x};function v(){if(d.length===0){f&&clearInterval(f),f=null;return}var E=d.shift(),x=r.reduce(function(C,S){return S.in(C,E,u)},u[E]);if(x!==void 0)try{c[E]=a(x)}catch(C){console.error("redux-persist/createPersistoid: error serializing state",C)}else delete c[E];d.length===0&&w()}function w(){Object.keys(c).forEach(function(E){u[E]===void 0&&delete c[E]}),m=o.setItem(s,a(c)).catch(h)}function p(E){return!(n&&n.indexOf(E)===-1&&E!=="_persist"||e&&e.indexOf(E)!==-1)}function h(E){l&&l(E)}var y=function(){for(;d.length!==0;)v();return m||Promise.resolve()};return{update:g,flush:y}}function Jz(t){return JSON.stringify(t)}function Zz(t){var e=t.transforms||[],n="".concat(t.keyPrefix!==void 0?t.keyPrefix:Fg).concat(t.key),r=t.storage;t.debug;var i;return t.deserialize===!1?i=function(o){return o}:typeof t.deserialize=="function"?i=t.deserialize:i=e5,r.getItem(n).then(function(s){if(s)try{var o={},a=i(s);return Object.keys(a).forEach(function(l){o[l]=e.reduceRight(function(u,c){return c.out(u,l,a)},i(a[l]))}),o}catch(l){throw l}else return})}function e5(t){return JSON.parse(t)}function t5(t){var e=t.storage,n="".concat(t.keyPrefix!==void 0?t.keyPrefix:Fg).concat(t.key);return e.removeItem(n,n5)}function n5(t){}function M0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function kn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?M0(n,!0).forEach(function(r){r5(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M0(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function r5(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i5(t,e){if(t==null)return{};var n=s5(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function s5(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var o5=5e3;function a5(t,e){var n=t.version!==void 0?t.version:Kz;t.debug;var r=t.stateReconciler===void 0?Qz:t.stateReconciler,i=t.getStoredState||Zz,s=t.timeout!==void 0?t.timeout:o5,o=null,a=!1,l=!0,u=function(d){return d._persist.rehydrated&&o&&!l&&o.update(d),d};return function(c,d){var f=c||{},m=f._persist,g=i5(f,["_persist"]),v=g;if(d.type===Ug){var w=!1,p=function(P,j){w||(d.rehydrate(t.key,P,j),w=!0)};if(s&&setTimeout(function(){!w&&p(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(t.key,'"')))},s),l=!1,o||(o=Xz(t)),m)return kn({},e(v,d),{_persist:m});if(typeof d.rehydrate!="function"||typeof d.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return d.register(t.key),i(t).then(function(S){var P=t.migrate||function(j,L){return Promise.resolve(j)};P(S,n).then(function(j){p(j)},function(j){p(void 0,j)})},function(S){p(void 0,S)}),kn({},e(v,d),{_persist:{version:n,rehydrated:!1}})}else{if(d.type===zg)return a=!0,d.result(t5(t)),kn({},e(v,d),{_persist:m});if(d.type===$g)return d.result(o&&o.flush()),kn({},e(v,d),{_persist:m});if(d.type===jg)l=!0;else if(d.type===fd){if(a)return kn({},v,{_persist:kn({},m,{rehydrated:!0})});if(d.key===t.key){var h=e(v,d),y=d.payload,E=r!==!1&&y!==void 0?r(y,c,h,t):h,x=kn({},E,{_persist:kn({},m,{rehydrated:!0})});return u(x)}}}if(!m)return e(c,d);var C=e(v,d);return C===v?c:u(kn({},C,{_persist:m}))}}var Vg={},Wg={};Wg.__esModule=!0;Wg.default=c5;function Kl(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Kl=function(n){return typeof n}:Kl=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Kl(t)}function kf(){}var l5={getItem:kf,setItem:kf,removeItem:kf};function u5(t){if((typeof self>"u"?"undefined":Kl(self))!=="object"||!(t in self))return!1;try{var e=self[t],n="redux-persist ".concat(t," test");e.setItem(n,"test"),e.getItem(n),e.removeItem(n)}catch{return!1}return!0}function c5(t){var e="".concat(t,"Storage");return u5(e)?self[e]:l5}Vg.__esModule=!0;Vg.default=h5;var d5=f5(Wg);function f5(t){return t&&t.__esModule?t:{default:t}}function h5(t){var e=(0,d5.default)(t);return{getItem:function(r){return new Promise(function(i,s){i(e.getItem(r))})},setItem:function(r,i){return new Promise(function(s,o){s(e.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,s){i(e.removeItem(r))})}}}var VC=void 0,p5=m5(Vg);function m5(t){return t&&t.__esModule?t:{default:t}}var g5=(0,p5.default)("local");VC=g5;function F0(t){return _5(t)||v5(t)||y5()}function y5(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function v5(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function _5(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function $0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function pp(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?$0(n,!0).forEach(function(r){w5(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$0(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function w5(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var WC={registry:[],bootstrapped:!1},S5=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:WC,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Bg:return pp({},e,{registry:[].concat(F0(e.registry),[n.key])});case fd:var r=e.registry.indexOf(n.key),i=F0(e.registry);return i.splice(r,1),pp({},e,{registry:i,bootstrapped:i.length===0});default:return e}};function E5(t,e,n){var r=n||!1,i=Vm(S5,WC,e&&e.enhancer?e.enhancer:void 0),s=function(u){i.dispatch({type:Bg,key:u})},o=function(u,c,d){var f={type:fd,payload:c,err:d,key:u};t.dispatch(f),i.dispatch(f),r&&a.getState().bootstrapped&&(r(),r=!1)},a=pp({},i,{purge:function(){var u=[];return t.dispatch({type:zg,result:function(d){u.push(d)}}),Promise.all(u)},flush:function(){var u=[];return t.dispatch({type:$g,result:function(d){u.push(d)}}),Promise.all(u)},pause:function(){t.dispatch({type:jg})},persist:function(){t.dispatch({type:Ug,register:s,rehydrate:o})}});return e&&e.manualPersist||a.persist(),a}const x5=SE({teachers:vz,Auth:Gz}),C5={key:"teachers",storage:VC,whitelist:["teachersFavorites","Auth"]},T5=a5(C5,x5),HC=yL({reducer:T5,middleware:t=>t({serializableCheck:{ignoredActions:[$g,fd,jg,Ug,zg,Bg]}})}),b5=E5(HC);function ql(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ql=function(n){return typeof n}:ql=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ql(t)}function I5(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function j0(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function k5(t,e,n){return e&&j0(t.prototype,e),n&&j0(t,n),t}function P5(t,e){return e&&(ql(e)==="object"||typeof e=="function")?e:Yl(t)}function mp(t){return mp=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},mp(t)}function Yl(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function O5(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&gp(t,e)}function gp(t,e){return gp=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},gp(t,e)}function Ql(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var GC=function(t){O5(e,t);function e(){var n,r;I5(this,e);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=P5(this,(n=mp(e)).call.apply(n,[this].concat(s))),Ql(Yl(r),"state",{bootstrapped:!1}),Ql(Yl(r),"_unsubscribe",void 0),Ql(Yl(r),"handlePersistorState",function(){var a=r.props.persistor,l=a.getState(),u=l.bootstrapped;u&&(r.props.onBeforeLift?Promise.resolve(r.props.onBeforeLift()).finally(function(){return r.setState({bootstrapped:!0})}):r.setState({bootstrapped:!0}),r._unsubscribe&&r._unsubscribe())}),r}return k5(e,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),e}(T.PureComponent);Ql(GC,"defaultProps",{children:null,loading:null});Nf.createRoot(document.getElementById("root")).render(_.jsx(it.StrictMode,{children:_.jsx(Cb,{basename:"/Learn-Lingo/",children:_.jsx(o6,{store:HC,children:_.jsx(GC,{persistor:b5,children:_.jsx(Vz,{})})})})}))});export default R5();
