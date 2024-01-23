var hT=Object.defineProperty;var pT=(e,t,n)=>t in e?hT(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var mT=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var _d=(e,t,n)=>(pT(e,typeof t!="symbol"?t+"":t,n),n);var B5=mT((Tt,bt)=>{function gT(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function _p(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var G0={exports:{}},lc={},K0={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ca=Symbol.for("react.element"),yT=Symbol.for("react.portal"),vT=Symbol.for("react.fragment"),_T=Symbol.for("react.strict_mode"),wT=Symbol.for("react.profiler"),ST=Symbol.for("react.provider"),ET=Symbol.for("react.context"),xT=Symbol.for("react.forward_ref"),CT=Symbol.for("react.suspense"),TT=Symbol.for("react.memo"),bT=Symbol.for("react.lazy"),Yg=Symbol.iterator;function kT(e){return e===null||typeof e!="object"?null:(e=Yg&&e[Yg]||e["@@iterator"],typeof e=="function"?e:null)}var q0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y0=Object.assign,Q0={};function Ls(e,t,n){this.props=e,this.context=t,this.refs=Q0,this.updater=n||q0}Ls.prototype.isReactComponent={};Ls.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ls.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function X0(){}X0.prototype=Ls.prototype;function wp(e,t,n){this.props=e,this.context=t,this.refs=Q0,this.updater=n||q0}var Sp=wp.prototype=new X0;Sp.constructor=wp;Y0(Sp,Ls.prototype);Sp.isPureReactComponent=!0;var Qg=Array.isArray,J0=Object.prototype.hasOwnProperty,Ep={current:null},Z0={key:!0,ref:!0,__self:!0,__source:!0};function ew(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)J0.call(t,r)&&!Z0.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ca,type:e,key:s,ref:o,props:i,_owner:Ep.current}}function IT(e,t){return{$$typeof:Ca,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function xp(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ca}function PT(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Xg=/\/+/g;function wd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?PT(""+e.key):t.toString(36)}function El(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ca:case yT:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+wd(o,0):r,Qg(i)?(n="",e!=null&&(n=e.replace(Xg,"$&/")+"/"),El(i,t,n,"",function(u){return u})):i!=null&&(xp(i)&&(i=IT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Xg,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Qg(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+wd(s,a);o+=El(s,t,n,l,i)}else if(l=kT(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+wd(s,a++),o+=El(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Ka(e,t,n){if(e==null)return e;var r=[],i=0;return El(e,r,"","",function(s){return t.call(n,s,i++)}),r}function OT(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var at={current:null},xl={transition:null},RT={ReactCurrentDispatcher:at,ReactCurrentBatchConfig:xl,ReactCurrentOwner:Ep};K.Children={map:Ka,forEach:function(e,t,n){Ka(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ka(e,function(){t++}),t},toArray:function(e){return Ka(e,function(t){return t})||[]},only:function(e){if(!xp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};K.Component=Ls;K.Fragment=vT;K.Profiler=wT;K.PureComponent=wp;K.StrictMode=_T;K.Suspense=CT;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=RT;K.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Y0({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Ep.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)J0.call(t,l)&&!Z0.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ca,type:e.type,key:i,ref:s,props:r,_owner:o}};K.createContext=function(e){return e={$$typeof:ET,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ST,_context:e},e.Consumer=e};K.createElement=ew;K.createFactory=function(e){var t=ew.bind(null,e);return t.type=e,t};K.createRef=function(){return{current:null}};K.forwardRef=function(e){return{$$typeof:xT,render:e}};K.isValidElement=xp;K.lazy=function(e){return{$$typeof:bT,_payload:{_status:-1,_result:e},_init:OT}};K.memo=function(e,t){return{$$typeof:TT,type:e,compare:t===void 0?null:t}};K.startTransition=function(e){var t=xl.transition;xl.transition={};try{e()}finally{xl.transition=t}};K.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};K.useCallback=function(e,t){return at.current.useCallback(e,t)};K.useContext=function(e){return at.current.useContext(e)};K.useDebugValue=function(){};K.useDeferredValue=function(e){return at.current.useDeferredValue(e)};K.useEffect=function(e,t){return at.current.useEffect(e,t)};K.useId=function(){return at.current.useId()};K.useImperativeHandle=function(e,t,n){return at.current.useImperativeHandle(e,t,n)};K.useInsertionEffect=function(e,t){return at.current.useInsertionEffect(e,t)};K.useLayoutEffect=function(e,t){return at.current.useLayoutEffect(e,t)};K.useMemo=function(e,t){return at.current.useMemo(e,t)};K.useReducer=function(e,t,n){return at.current.useReducer(e,t,n)};K.useRef=function(e){return at.current.useRef(e)};K.useState=function(e){return at.current.useState(e)};K.useSyncExternalStore=function(e,t,n){return at.current.useSyncExternalStore(e,t,n)};K.useTransition=function(){return at.current.useTransition()};K.version="18.2.0";K0.exports=K;var T=K0.exports;const st=_p(T),Mo=gT({__proto__:null,default:st},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NT=T,AT=Symbol.for("react.element"),DT=Symbol.for("react.fragment"),LT=Object.prototype.hasOwnProperty,MT=NT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,FT={key:!0,ref:!0,__self:!0,__source:!0};function tw(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)LT.call(t,r)&&!FT.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:AT,type:e,key:s,ref:o,props:i,_owner:MT.current}}lc.Fragment=DT;lc.jsx=tw;lc.jsxs=tw;G0.exports=lc;var _=G0.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fo(){return Fo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fo.apply(this,arguments)}var or;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(or||(or={}));const Jg="popstate";function $T(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return Rf("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Zl(i)}return UT(t,n,null,e)}function Ce(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Cp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function jT(){return Math.random().toString(36).substr(2,8)}function Zg(e,t){return{usr:e.state,key:e.key,idx:t}}function Rf(e,t,n,r){return n===void 0&&(n=null),Fo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ms(t):t,{state:n,key:t&&t.key||r||jT()})}function Zl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ms(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function UT(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=or.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Fo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=or.Pop;let w=c(),p=w==null?null:w-u;u=w,l&&l({action:a,location:v.location,delta:p})}function f(w,p){a=or.Push;let h=Rf(v.location,w,p);n&&n(h,w),u=c()+1;let y=Zg(h,u),S=v.createHref(h);try{o.pushState(y,"",S)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;i.location.assign(S)}s&&l&&l({action:a,location:v.location,delta:1})}function m(w,p){a=or.Replace;let h=Rf(v.location,w,p);n&&n(h,w),u=c();let y=Zg(h,u),S=v.createHref(h);o.replaceState(y,"",S),s&&l&&l({action:a,location:v.location,delta:0})}function g(w){let p=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof w=="string"?w:Zl(w);return Ce(p,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,p)}let v={get action(){return a},get location(){return e(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Jg,d),l=w,()=>{i.removeEventListener(Jg,d),l=null}},createHref(w){return t(i,w)},createURL:g,encodeLocation(w){let p=g(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:m,go(w){return o.go(w)}};return v}var ey;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ey||(ey={}));function zT(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Ms(t):t,i=Tp(r.pathname||"/",n);if(i==null)return null;let s=nw(e);BT(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=XT(s[a],eb(i));return o}function nw(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ce(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=ur([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Ce(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),nw(s.children,t,c,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:YT(u,s.index),routesMeta:c})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of rw(s.path))i(s,o,l)}),t}function rw(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=rw(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function BT(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:QT(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const VT=/^:\w+$/,WT=3,HT=2,GT=1,KT=10,qT=-2,ty=e=>e==="*";function YT(e,t){let n=e.split("/"),r=n.length;return n.some(ty)&&(r+=qT),t&&(r+=HT),n.filter(i=>!ty(i)).reduce((i,s)=>i+(VT.test(s)?WT:s===""?GT:KT),r)}function QT(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function XT(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=JT({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:ur([i,c.pathname]),pathnameBase:ib(ur([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=ur([i,c.pathnameBase]))}return s}function JT(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ZT(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=tb(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:e}}function ZT(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Cp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function eb(e){try{return decodeURI(e)}catch(t){return Cp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function tb(e,t){try{return decodeURIComponent(e)}catch(n){return Cp(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Tp(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function nb(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ms(e):e;return{pathname:n?n.startsWith("/")?n:rb(n,t):t,search:sb(r),hash:ob(i)}}function rb(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Sd(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function bp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function kp(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ms(e):(i=Fo({},e),Ce(!i.pathname||!i.pathname.includes("?"),Sd("?","pathname","search",i)),Ce(!i.pathname||!i.pathname.includes("#"),Sd("#","pathname","hash",i)),Ce(!i.search||!i.search.includes("#"),Sd("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=t.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?t[d]:"/"}let l=nb(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const ur=e=>e.join("/").replace(/\/\/+/g,"/"),ib=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),sb=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ob=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ab(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const iw=["post","put","patch","delete"];new Set(iw);const lb=["get",...iw];new Set(lb);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function eu(){return eu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},eu.apply(this,arguments)}const Ip=T.createContext(null),ub=T.createContext(null),Fs=T.createContext(null),uc=T.createContext(null),Hn=T.createContext({outlet:null,matches:[],isDataRoute:!1}),sw=T.createContext(null);function cb(e,t){let{relative:n}=t===void 0?{}:t;$s()||Ce(!1);let{basename:r,navigator:i}=T.useContext(Fs),{hash:s,pathname:o,search:a}=lw(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:ur([r,o])),i.createHref({pathname:l,search:a,hash:s})}function $s(){return T.useContext(uc)!=null}function Ta(){return $s()||Ce(!1),T.useContext(uc).location}function ow(e){T.useContext(Fs).static||T.useLayoutEffect(e)}function aw(){let{isDataRoute:e}=T.useContext(Hn);return e?Tb():db()}function db(){$s()||Ce(!1);let e=T.useContext(Ip),{basename:t,navigator:n}=T.useContext(Fs),{matches:r}=T.useContext(Hn),{pathname:i}=Ta(),s=JSON.stringify(bp(r).map(l=>l.pathnameBase)),o=T.useRef(!1);return ow(()=>{o.current=!0}),T.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=kp(l,JSON.parse(s),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:ur([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,s,i,e])}const fb=T.createContext(null);function hb(e){let t=T.useContext(Hn).outlet;return t&&T.createElement(fb.Provider,{value:e},t)}function lw(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=T.useContext(Hn),{pathname:i}=Ta(),s=JSON.stringify(bp(r).map(o=>o.pathnameBase));return T.useMemo(()=>kp(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function pb(e,t){return mb(e,t)}function mb(e,t,n){$s()||Ce(!1);let{navigator:r}=T.useContext(Fs),{matches:i}=T.useContext(Hn),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Ta(),u;if(t){var c;let v=typeof t=="string"?Ms(t):t;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||Ce(!1),u=v}else u=l;let d=u.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",m=zT(e,{pathname:f}),g=wb(m&&m.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:ur([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:ur([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return t&&g?T.createElement(uc.Provider,{value:{location:eu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:or.Pop}},g):g}function gb(){let e=Cb(),t=ab(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:i},n):null,s)}const yb=T.createElement(gb,null);class vb extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?T.createElement(Hn.Provider,{value:this.props.routeContext},T.createElement(sw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _b(e){let{routeContext:t,match:n,children:r}=e,i=T.useContext(Ip);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(Hn.Provider,{value:t},r)}function wb(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let s=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Ce(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||yb);let f=t.concat(s.slice(0,u+1)),m=()=>{let g;return c?g=d:l.route.Component?g=T.createElement(l.route.Component,null):l.route.element?g=l.route.element:g=a,T.createElement(_b,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:g})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?T.createElement(vb,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()},null)}var uw=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(uw||{}),tu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(tu||{});function Sb(e){let t=T.useContext(Ip);return t||Ce(!1),t}function Eb(e){let t=T.useContext(ub);return t||Ce(!1),t}function xb(e){let t=T.useContext(Hn);return t||Ce(!1),t}function cw(e){let t=xb(),n=t.matches[t.matches.length-1];return n.route.id||Ce(!1),n.route.id}function Cb(){var e;let t=T.useContext(sw),n=Eb(tu.UseRouteError),r=cw(tu.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Tb(){let{router:e}=Sb(uw.UseNavigateStable),t=cw(tu.UseNavigateStable),n=T.useRef(!1);return ow(()=>{n.current=!0}),T.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,eu({fromRouteId:t},s)))},[e,t])}function dw(e){let{to:t,replace:n,state:r,relative:i}=e;$s()||Ce(!1);let{matches:s}=T.useContext(Hn),{pathname:o}=Ta(),a=aw(),l=kp(t,bp(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return T.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function bb(e){return hb(e.context)}function Wr(e){Ce(!1)}function kb(e){let{basename:t="/",children:n=null,location:r,navigationType:i=or.Pop,navigator:s,static:o=!1}=e;$s()&&Ce(!1);let a=t.replace(/^\/*/,"/"),l=T.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Ms(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:m="default"}=r,g=T.useMemo(()=>{let v=Tp(u,a);return v==null?null:{location:{pathname:v,search:c,hash:d,state:f,key:m},navigationType:i}},[a,u,c,d,f,m,i]);return g==null?null:T.createElement(Fs.Provider,{value:l},T.createElement(uc.Provider,{children:n,value:g}))}function Ib(e){let{children:t,location:n}=e;return pb(Nf(t),n)}new Promise(()=>{});function Nf(e,t){t===void 0&&(t=[]);let n=[];return T.Children.forEach(e,(r,i)=>{if(!T.isValidElement(r))return;let s=[...t,i];if(r.type===T.Fragment){n.push.apply(n,Nf(r.props.children,s));return}r.type!==Wr&&Ce(!1),!r.props.index||!r.props.children||Ce(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Nf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Af(){return Af=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Af.apply(this,arguments)}function Pb(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Ob(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Rb(e,t){return e.button===0&&(!t||t==="_self")&&!Ob(e)}const Nb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Ab="startTransition",ny=Mo[Ab];function Db(e){let{basename:t,children:n,future:r,window:i}=e,s=T.useRef();s.current==null&&(s.current=$T({window:i,v5Compat:!0}));let o=s.current,[a,l]=T.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=T.useCallback(d=>{u&&ny?ny(()=>l(d)):l(d)},[l,u]);return T.useLayoutEffect(()=>o.listen(c),[o,c]),T.createElement(kb,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o})}const Lb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Mb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ba=T.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=t,d=Pb(t,Nb),{basename:f}=T.useContext(Fs),m,g=!1;if(typeof u=="string"&&Mb.test(u)&&(m=u,Lb))try{let h=new URL(window.location.href),y=u.startsWith("//")?new URL(h.protocol+u):new URL(u),S=Tp(y.pathname,f);y.origin===h.origin&&S!=null?u=S+y.search+y.hash:g=!0}catch{}let v=cb(u,{relative:i}),w=Fb(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function p(h){r&&r(h),h.defaultPrevented||w(h)}return T.createElement("a",Af({},d,{href:m||v,onClick:g||s?r:p,ref:n,target:l}))});var ry;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(ry||(ry={}));var iy;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(iy||(iy={}));function Fb(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=t===void 0?{}:t,a=aw(),l=Ta(),u=lw(e,{relative:o});return T.useCallback(c=>{if(Rb(c,n)){c.preventDefault();let d=r!==void 0?r:Zl(l)===Zl(u);a(e,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,e,s,o])}var Df={},fw={exports:{}},At={},hw={exports:{}},pw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,$){var j=O.length;O.push($);e:for(;0<j;){var ne=j-1>>>1,re=O[ne];if(0<i(re,$))O[ne]=$,O[j]=re,j=ne;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var $=O[0],j=O.pop();if(j!==$){O[0]=j;e:for(var ne=0,re=O.length,Mt=re>>>1;ne<Mt;){var ze=2*(ne+1)-1,nt=O[ze],qe=ze+1,Ye=O[qe];if(0>i(nt,j))qe<re&&0>i(Ye,nt)?(O[ne]=Ye,O[qe]=j,ne=qe):(O[ne]=nt,O[ze]=j,ne=ze);else if(qe<re&&0>i(Ye,j))O[ne]=Ye,O[qe]=j,ne=qe;else break e}}return $}function i(O,$){var j=O.sortIndex-$.sortIndex;return j!==0?j:O.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,m=!1,g=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(O){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=O)r(u),$.sortIndex=$.expirationTime,t(l,$);else break;$=n(u)}}function S(O){if(v=!1,y(O),!g)if(n(l)!==null)g=!0,Tn(x);else{var $=n(u);$!==null&&ct(S,$.startTime-O)}}function x(O,$){g=!1,v&&(v=!1,p(P),P=-1),m=!0;var j=f;try{for(y($),d=n(l);d!==null&&(!(d.expirationTime>$)||O&&!V());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,f=d.priorityLevel;var re=ne(d.expirationTime<=$);$=e.unstable_now(),typeof re=="function"?d.callback=re:d===n(l)&&r(l),y($)}else r(l);d=n(l)}if(d!==null)var Mt=!0;else{var ze=n(u);ze!==null&&ct(S,ze.startTime-$),Mt=!1}return Mt}finally{d=null,f=j,m=!1}}var C=!1,E=null,P=-1,M=5,L=-1;function V(){return!(e.unstable_now()-L<M)}function ut(){if(E!==null){var O=e.unstable_now();L=O;var $=!0;try{$=E(!0,O)}finally{$?q():(C=!1,E=null)}}else C=!1}var q;if(typeof h=="function")q=function(){h(ut)};else if(typeof MessageChannel<"u"){var Ie=new MessageChannel,Cn=Ie.port2;Ie.port1.onmessage=ut,q=function(){Cn.postMessage(null)}}else q=function(){w(ut,0)};function Tn(O){E=O,C||(C=!0,q())}function ct(O,$){P=w(function(){O(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){g||m||(g=!0,Tn(x))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(O){switch(f){case 1:case 2:case 3:var $=3;break;default:$=f}var j=f;f=$;try{return O()}finally{f=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,$){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var j=f;f=O;try{return $()}finally{f=j}},e.unstable_scheduleCallback=function(O,$,j){var ne=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?ne+j:ne):j=ne,O){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=j+re,O={id:c++,callback:$,priorityLevel:O,startTime:j,expirationTime:re,sortIndex:-1},j>ne?(O.sortIndex=j,t(u,O),n(l)===null&&O===n(u)&&(v?(p(P),P=-1):v=!0,ct(S,j-ne))):(O.sortIndex=re,t(l,O),g||m||(g=!0,Tn(x))),O},e.unstable_shouldYield=V,e.unstable_wrapCallback=function(O){var $=f;return function(){var j=f;f=$;try{return O.apply(this,arguments)}finally{f=j}}}})(pw);hw.exports=pw;var $b=hw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mw=T,Ot=$b;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gw=new Set,$o={};function ki(e,t){ms(e,t),ms(e+"Capture",t)}function ms(e,t){for($o[e]=t,e=0;e<t.length;e++)gw.add(t[e])}var jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lf=Object.prototype.hasOwnProperty,jb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sy={},oy={};function Ub(e){return Lf.call(oy,e)?!0:Lf.call(sy,e)?!1:jb.test(e)?oy[e]=!0:(sy[e]=!0,!1)}function zb(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Bb(e,t,n,r){if(t===null||typeof t>"u"||zb(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function lt(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ke[e]=new lt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ke[t]=new lt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ke[e]=new lt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ke[e]=new lt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ke[e]=new lt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ke[e]=new lt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ke[e]=new lt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ke[e]=new lt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ke[e]=new lt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Pp=/[\-:]([a-z])/g;function Op(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Pp,Op);Ke[t]=new lt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Pp,Op);Ke[t]=new lt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Pp,Op);Ke[t]=new lt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ke[e]=new lt(e,1,!1,e.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ke[e]=new lt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Rp(e,t,n,r){var i=Ke.hasOwnProperty(t)?Ke[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Bb(t,n,i,r)&&(n=null),r||i===null?Ub(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Gn=mw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qa=Symbol.for("react.element"),zi=Symbol.for("react.portal"),Bi=Symbol.for("react.fragment"),Np=Symbol.for("react.strict_mode"),Mf=Symbol.for("react.profiler"),yw=Symbol.for("react.provider"),vw=Symbol.for("react.context"),Ap=Symbol.for("react.forward_ref"),Ff=Symbol.for("react.suspense"),$f=Symbol.for("react.suspense_list"),Dp=Symbol.for("react.memo"),Zn=Symbol.for("react.lazy"),_w=Symbol.for("react.offscreen"),ay=Symbol.iterator;function Ys(e){return e===null||typeof e!="object"?null:(e=ay&&e[ay]||e["@@iterator"],typeof e=="function"?e:null)}var we=Object.assign,Ed;function co(e){if(Ed===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ed=t&&t[1]||""}return`
`+Ed+e}var xd=!1;function Cd(e,t){if(!e||xd)return"";xd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{xd=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?co(e):""}function Vb(e){switch(e.tag){case 5:return co(e.type);case 16:return co("Lazy");case 13:return co("Suspense");case 19:return co("SuspenseList");case 0:case 2:case 15:return e=Cd(e.type,!1),e;case 11:return e=Cd(e.type.render,!1),e;case 1:return e=Cd(e.type,!0),e;default:return""}}function jf(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Bi:return"Fragment";case zi:return"Portal";case Mf:return"Profiler";case Np:return"StrictMode";case Ff:return"Suspense";case $f:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vw:return(e.displayName||"Context")+".Consumer";case yw:return(e._context.displayName||"Context")+".Provider";case Ap:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Dp:return t=e.displayName||null,t!==null?t:jf(e.type)||"Memo";case Zn:t=e._payload,e=e._init;try{return jf(e(t))}catch{}}return null}function Wb(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jf(t);case 8:return t===Np?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function br(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ww(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hb(e){var t=ww(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ya(e){e._valueTracker||(e._valueTracker=Hb(e))}function Sw(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ww(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function nu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Uf(e,t){var n=t.checked;return we({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ly(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=br(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ew(e,t){t=t.checked,t!=null&&Rp(e,"checked",t,!1)}function zf(e,t){Ew(e,t);var n=br(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Bf(e,t.type,n):t.hasOwnProperty("defaultValue")&&Bf(e,t.type,br(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function uy(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Bf(e,t,n){(t!=="number"||nu(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fo=Array.isArray;function rs(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+br(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Vf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return we({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cy(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(fo(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:br(n)}}function xw(e,t){var n=br(t.value),r=br(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function dy(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cw(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cw(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qa,Tw=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qa=Qa||document.createElement("div"),Qa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function jo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _o={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gb=["Webkit","ms","Moz","O"];Object.keys(_o).forEach(function(e){Gb.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_o[t]=_o[e]})});function bw(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_o.hasOwnProperty(e)&&_o[e]?(""+t).trim():t+"px"}function kw(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=bw(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Kb=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hf(e,t){if(t){if(Kb[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Gf(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kf=null;function Lp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qf=null,is=null,ss=null;function fy(e){if(e=Pa(e)){if(typeof qf!="function")throw Error(k(280));var t=e.stateNode;t&&(t=pc(t),qf(e.stateNode,e.type,t))}}function Iw(e){is?ss?ss.push(e):ss=[e]:is=e}function Pw(){if(is){var e=is,t=ss;if(ss=is=null,fy(e),t)for(e=0;e<t.length;e++)fy(t[e])}}function Ow(e,t){return e(t)}function Rw(){}var Td=!1;function Nw(e,t,n){if(Td)return e(t,n);Td=!0;try{return Ow(e,t,n)}finally{Td=!1,(is!==null||ss!==null)&&(Rw(),Pw())}}function Uo(e,t){var n=e.stateNode;if(n===null)return null;var r=pc(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Yf=!1;if(jn)try{var Qs={};Object.defineProperty(Qs,"passive",{get:function(){Yf=!0}}),window.addEventListener("test",Qs,Qs),window.removeEventListener("test",Qs,Qs)}catch{Yf=!1}function qb(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var wo=!1,ru=null,iu=!1,Qf=null,Yb={onError:function(e){wo=!0,ru=e}};function Qb(e,t,n,r,i,s,o,a,l){wo=!1,ru=null,qb.apply(Yb,arguments)}function Xb(e,t,n,r,i,s,o,a,l){if(Qb.apply(this,arguments),wo){if(wo){var u=ru;wo=!1,ru=null}else throw Error(k(198));iu||(iu=!0,Qf=u)}}function Ii(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Aw(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function hy(e){if(Ii(e)!==e)throw Error(k(188))}function Jb(e){var t=e.alternate;if(!t){if(t=Ii(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return hy(i),e;if(s===r)return hy(i),t;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Dw(e){return e=Jb(e),e!==null?Lw(e):null}function Lw(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Lw(e);if(t!==null)return t;e=e.sibling}return null}var Mw=Ot.unstable_scheduleCallback,py=Ot.unstable_cancelCallback,Zb=Ot.unstable_shouldYield,ek=Ot.unstable_requestPaint,xe=Ot.unstable_now,tk=Ot.unstable_getCurrentPriorityLevel,Mp=Ot.unstable_ImmediatePriority,Fw=Ot.unstable_UserBlockingPriority,su=Ot.unstable_NormalPriority,nk=Ot.unstable_LowPriority,$w=Ot.unstable_IdlePriority,cc=null,vn=null;function rk(e){if(vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot(cc,e,void 0,(e.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:ok,ik=Math.log,sk=Math.LN2;function ok(e){return e>>>=0,e===0?32:31-(ik(e)/sk|0)|0}var Xa=64,Ja=4194304;function ho(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ou(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ho(a):(s&=o,s!==0&&(r=ho(s)))}else o=n&~i,o!==0?r=ho(o):s!==0&&(r=ho(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-rn(t),i=1<<n,r|=e[n],t&=~i;return r}function ak(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lk(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-rn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=ak(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function Xf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function jw(){var e=Xa;return Xa<<=1,!(Xa&4194240)&&(Xa=64),e}function bd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ka(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-rn(t),e[t]=n}function uk(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-rn(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Fp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-rn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var se=0;function Uw(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var zw,$p,Bw,Vw,Ww,Jf=!1,Za=[],cr=null,dr=null,fr=null,zo=new Map,Bo=new Map,tr=[],ck="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function my(e,t){switch(e){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":zo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(t.pointerId)}}function Xs(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Pa(t),t!==null&&$p(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function dk(e,t,n,r,i){switch(t){case"focusin":return cr=Xs(cr,e,t,n,r,i),!0;case"dragenter":return dr=Xs(dr,e,t,n,r,i),!0;case"mouseover":return fr=Xs(fr,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return zo.set(s,Xs(zo.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Bo.set(s,Xs(Bo.get(s)||null,e,t,n,r,i)),!0}return!1}function Hw(e){var t=Jr(e.target);if(t!==null){var n=Ii(t);if(n!==null){if(t=n.tag,t===13){if(t=Aw(n),t!==null){e.blockedOn=t,Ww(e.priority,function(){Bw(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Cl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Kf=r,n.target.dispatchEvent(r),Kf=null}else return t=Pa(n),t!==null&&$p(t),e.blockedOn=n,!1;t.shift()}return!0}function gy(e,t,n){Cl(e)&&n.delete(t)}function fk(){Jf=!1,cr!==null&&Cl(cr)&&(cr=null),dr!==null&&Cl(dr)&&(dr=null),fr!==null&&Cl(fr)&&(fr=null),zo.forEach(gy),Bo.forEach(gy)}function Js(e,t){e.blockedOn===t&&(e.blockedOn=null,Jf||(Jf=!0,Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority,fk)))}function Vo(e){function t(i){return Js(i,e)}if(0<Za.length){Js(Za[0],e);for(var n=1;n<Za.length;n++){var r=Za[n];r.blockedOn===e&&(r.blockedOn=null)}}for(cr!==null&&Js(cr,e),dr!==null&&Js(dr,e),fr!==null&&Js(fr,e),zo.forEach(t),Bo.forEach(t),n=0;n<tr.length;n++)r=tr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tr.length&&(n=tr[0],n.blockedOn===null);)Hw(n),n.blockedOn===null&&tr.shift()}var os=Gn.ReactCurrentBatchConfig,au=!0;function hk(e,t,n,r){var i=se,s=os.transition;os.transition=null;try{se=1,jp(e,t,n,r)}finally{se=i,os.transition=s}}function pk(e,t,n,r){var i=se,s=os.transition;os.transition=null;try{se=4,jp(e,t,n,r)}finally{se=i,os.transition=s}}function jp(e,t,n,r){if(au){var i=Zf(e,t,n,r);if(i===null)Md(e,t,r,lu,n),my(e,r);else if(dk(i,e,t,n,r))r.stopPropagation();else if(my(e,r),t&4&&-1<ck.indexOf(e)){for(;i!==null;){var s=Pa(i);if(s!==null&&zw(s),s=Zf(e,t,n,r),s===null&&Md(e,t,r,lu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Md(e,t,r,null,n)}}var lu=null;function Zf(e,t,n,r){if(lu=null,e=Lp(r),e=Jr(e),e!==null)if(t=Ii(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Aw(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return lu=e,null}function Gw(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tk()){case Mp:return 1;case Fw:return 4;case su:case nk:return 16;case $w:return 536870912;default:return 16}default:return 16}}var ar=null,Up=null,Tl=null;function Kw(){if(Tl)return Tl;var e,t=Up,n=t.length,r,i="value"in ar?ar.value:ar.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Tl=i.slice(e,1<r?1-r:void 0)}function bl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function el(){return!0}function yy(){return!1}function Dt(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?el:yy,this.isPropagationStopped=yy,this}return we(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),t}var js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zp=Dt(js),Ia=we({},js,{view:0,detail:0}),mk=Dt(Ia),kd,Id,Zs,dc=we({},Ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zs&&(Zs&&e.type==="mousemove"?(kd=e.screenX-Zs.screenX,Id=e.screenY-Zs.screenY):Id=kd=0,Zs=e),kd)},movementY:function(e){return"movementY"in e?e.movementY:Id}}),vy=Dt(dc),gk=we({},dc,{dataTransfer:0}),yk=Dt(gk),vk=we({},Ia,{relatedTarget:0}),Pd=Dt(vk),_k=we({},js,{animationName:0,elapsedTime:0,pseudoElement:0}),wk=Dt(_k),Sk=we({},js,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ek=Dt(Sk),xk=we({},js,{data:0}),_y=Dt(xk),Ck={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kk(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=bk[e])?!!t[e]:!1}function Bp(){return kk}var Ik=we({},Ia,{key:function(e){if(e.key){var t=Ck[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=bl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tk[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bp,charCode:function(e){return e.type==="keypress"?bl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pk=Dt(Ik),Ok=we({},dc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wy=Dt(Ok),Rk=we({},Ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bp}),Nk=Dt(Rk),Ak=we({},js,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dk=Dt(Ak),Lk=we({},dc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mk=Dt(Lk),Fk=[9,13,27,32],Vp=jn&&"CompositionEvent"in window,So=null;jn&&"documentMode"in document&&(So=document.documentMode);var $k=jn&&"TextEvent"in window&&!So,qw=jn&&(!Vp||So&&8<So&&11>=So),Sy=String.fromCharCode(32),Ey=!1;function Yw(e,t){switch(e){case"keyup":return Fk.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qw(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vi=!1;function jk(e,t){switch(e){case"compositionend":return Qw(t);case"keypress":return t.which!==32?null:(Ey=!0,Sy);case"textInput":return e=t.data,e===Sy&&Ey?null:e;default:return null}}function Uk(e,t){if(Vi)return e==="compositionend"||!Vp&&Yw(e,t)?(e=Kw(),Tl=Up=ar=null,Vi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qw&&t.locale!=="ko"?null:t.data;default:return null}}var zk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xy(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zk[e.type]:t==="textarea"}function Xw(e,t,n,r){Iw(r),t=uu(t,"onChange"),0<t.length&&(n=new zp("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Eo=null,Wo=null;function Bk(e){l1(e,0)}function fc(e){var t=Gi(e);if(Sw(t))return e}function Vk(e,t){if(e==="change")return t}var Jw=!1;if(jn){var Od;if(jn){var Rd="oninput"in document;if(!Rd){var Cy=document.createElement("div");Cy.setAttribute("oninput","return;"),Rd=typeof Cy.oninput=="function"}Od=Rd}else Od=!1;Jw=Od&&(!document.documentMode||9<document.documentMode)}function Ty(){Eo&&(Eo.detachEvent("onpropertychange",Zw),Wo=Eo=null)}function Zw(e){if(e.propertyName==="value"&&fc(Wo)){var t=[];Xw(t,Wo,e,Lp(e)),Nw(Bk,t)}}function Wk(e,t,n){e==="focusin"?(Ty(),Eo=t,Wo=n,Eo.attachEvent("onpropertychange",Zw)):e==="focusout"&&Ty()}function Hk(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fc(Wo)}function Gk(e,t){if(e==="click")return fc(t)}function Kk(e,t){if(e==="input"||e==="change")return fc(t)}function qk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var cn=typeof Object.is=="function"?Object.is:qk;function Ho(e,t){if(cn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Lf.call(t,i)||!cn(e[i],t[i]))return!1}return!0}function by(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ky(e,t){var n=by(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=by(n)}}function e1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?e1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function t1(){for(var e=window,t=nu();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=nu(e.document)}return t}function Wp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Yk(e){var t=t1(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&e1(n.ownerDocument.documentElement,n)){if(r!==null&&Wp(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=ky(n,s);var o=ky(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qk=jn&&"documentMode"in document&&11>=document.documentMode,Wi=null,eh=null,xo=null,th=!1;function Iy(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;th||Wi==null||Wi!==nu(r)||(r=Wi,"selectionStart"in r&&Wp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xo&&Ho(xo,r)||(xo=r,r=uu(eh,"onSelect"),0<r.length&&(t=new zp("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Wi)))}function tl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Hi={animationend:tl("Animation","AnimationEnd"),animationiteration:tl("Animation","AnimationIteration"),animationstart:tl("Animation","AnimationStart"),transitionend:tl("Transition","TransitionEnd")},Nd={},n1={};jn&&(n1=document.createElement("div").style,"AnimationEvent"in window||(delete Hi.animationend.animation,delete Hi.animationiteration.animation,delete Hi.animationstart.animation),"TransitionEvent"in window||delete Hi.transitionend.transition);function hc(e){if(Nd[e])return Nd[e];if(!Hi[e])return e;var t=Hi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in n1)return Nd[e]=t[n];return e}var r1=hc("animationend"),i1=hc("animationiteration"),s1=hc("animationstart"),o1=hc("transitionend"),a1=new Map,Py="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dr(e,t){a1.set(e,t),ki(t,[e])}for(var Ad=0;Ad<Py.length;Ad++){var Dd=Py[Ad],Xk=Dd.toLowerCase(),Jk=Dd[0].toUpperCase()+Dd.slice(1);Dr(Xk,"on"+Jk)}Dr(r1,"onAnimationEnd");Dr(i1,"onAnimationIteration");Dr(s1,"onAnimationStart");Dr("dblclick","onDoubleClick");Dr("focusin","onFocus");Dr("focusout","onBlur");Dr(o1,"onTransitionEnd");ms("onMouseEnter",["mouseout","mouseover"]);ms("onMouseLeave",["mouseout","mouseover"]);ms("onPointerEnter",["pointerout","pointerover"]);ms("onPointerLeave",["pointerout","pointerover"]);ki("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ki("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ki("onBeforeInput",["compositionend","keypress","textInput","paste"]);ki("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ki("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ki("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zk=new Set("cancel close invalid load scroll toggle".split(" ").concat(po));function Oy(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Xb(r,t,void 0,e),e.currentTarget=null}function l1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Oy(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Oy(i,a,u),s=l}}}if(iu)throw e=Qf,iu=!1,Qf=null,e}function fe(e,t){var n=t[oh];n===void 0&&(n=t[oh]=new Set);var r=e+"__bubble";n.has(r)||(u1(t,e,2,!1),n.add(r))}function Ld(e,t,n){var r=0;t&&(r|=4),u1(n,e,r,t)}var nl="_reactListening"+Math.random().toString(36).slice(2);function Go(e){if(!e[nl]){e[nl]=!0,gw.forEach(function(n){n!=="selectionchange"&&(Zk.has(n)||Ld(n,!1,e),Ld(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[nl]||(t[nl]=!0,Ld("selectionchange",!1,t))}}function u1(e,t,n,r){switch(Gw(t)){case 1:var i=hk;break;case 4:i=pk;break;default:i=jp}n=i.bind(null,t,n,e),i=void 0,!Yf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Md(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Jr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Nw(function(){var u=s,c=Lp(n),d=[];e:{var f=a1.get(e);if(f!==void 0){var m=zp,g=e;switch(e){case"keypress":if(bl(n)===0)break e;case"keydown":case"keyup":m=Pk;break;case"focusin":g="focus",m=Pd;break;case"focusout":g="blur",m=Pd;break;case"beforeblur":case"afterblur":m=Pd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=vy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=yk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Nk;break;case r1:case i1:case s1:m=wk;break;case o1:m=Dk;break;case"scroll":m=mk;break;case"wheel":m=Mk;break;case"copy":case"cut":case"paste":m=Ek;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=wy}var v=(t&4)!==0,w=!v&&e==="scroll",p=v?f!==null?f+"Capture":null:f;v=[];for(var h=u,y;h!==null;){y=h;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,p!==null&&(S=Uo(h,p),S!=null&&v.push(Ko(h,S,y)))),w)break;h=h.return}0<v.length&&(f=new m(f,g,null,n,c),d.push({event:f,listeners:v}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&n!==Kf&&(g=n.relatedTarget||n.fromElement)&&(Jr(g)||g[Un]))break e;if((m||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=u,g=g?Jr(g):null,g!==null&&(w=Ii(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=u),m!==g)){if(v=vy,S="onMouseLeave",p="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(v=wy,S="onPointerLeave",p="onPointerEnter",h="pointer"),w=m==null?f:Gi(m),y=g==null?f:Gi(g),f=new v(S,h+"leave",m,n,c),f.target=w,f.relatedTarget=y,S=null,Jr(c)===u&&(v=new v(p,h+"enter",g,n,c),v.target=y,v.relatedTarget=w,S=v),w=S,m&&g)t:{for(v=m,p=g,h=0,y=v;y;y=Fi(y))h++;for(y=0,S=p;S;S=Fi(S))y++;for(;0<h-y;)v=Fi(v),h--;for(;0<y-h;)p=Fi(p),y--;for(;h--;){if(v===p||p!==null&&v===p.alternate)break t;v=Fi(v),p=Fi(p)}v=null}else v=null;m!==null&&Ry(d,f,m,v,!1),g!==null&&w!==null&&Ry(d,w,g,v,!0)}}e:{if(f=u?Gi(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var x=Vk;else if(xy(f))if(Jw)x=Kk;else{x=Hk;var C=Wk}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(x=Gk);if(x&&(x=x(e,u))){Xw(d,x,n,c);break e}C&&C(e,f,u),e==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Bf(f,"number",f.value)}switch(C=u?Gi(u):window,e){case"focusin":(xy(C)||C.contentEditable==="true")&&(Wi=C,eh=u,xo=null);break;case"focusout":xo=eh=Wi=null;break;case"mousedown":th=!0;break;case"contextmenu":case"mouseup":case"dragend":th=!1,Iy(d,n,c);break;case"selectionchange":if(Qk)break;case"keydown":case"keyup":Iy(d,n,c)}var E;if(Vp)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Vi?Yw(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(qw&&n.locale!=="ko"&&(Vi||P!=="onCompositionStart"?P==="onCompositionEnd"&&Vi&&(E=Kw()):(ar=c,Up="value"in ar?ar.value:ar.textContent,Vi=!0)),C=uu(u,P),0<C.length&&(P=new _y(P,e,null,n,c),d.push({event:P,listeners:C}),E?P.data=E:(E=Qw(n),E!==null&&(P.data=E)))),(E=$k?jk(e,n):Uk(e,n))&&(u=uu(u,"onBeforeInput"),0<u.length&&(c=new _y("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=E))}l1(d,t)})}function Ko(e,t,n){return{instance:e,listener:t,currentTarget:n}}function uu(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Uo(e,n),s!=null&&r.unshift(Ko(e,s,i)),s=Uo(e,t),s!=null&&r.push(Ko(e,s,i))),e=e.return}return r}function Fi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ry(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Uo(n,s),l!=null&&o.unshift(Ko(n,l,a))):i||(l=Uo(n,s),l!=null&&o.push(Ko(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var eI=/\r\n?/g,tI=/\u0000|\uFFFD/g;function Ny(e){return(typeof e=="string"?e:""+e).replace(eI,`
`).replace(tI,"")}function rl(e,t,n){if(t=Ny(t),Ny(e)!==t&&n)throw Error(k(425))}function cu(){}var nh=null,rh=null;function ih(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var sh=typeof setTimeout=="function"?setTimeout:void 0,nI=typeof clearTimeout=="function"?clearTimeout:void 0,Ay=typeof Promise=="function"?Promise:void 0,rI=typeof queueMicrotask=="function"?queueMicrotask:typeof Ay<"u"?function(e){return Ay.resolve(null).then(e).catch(iI)}:sh;function iI(e){setTimeout(function(){throw e})}function Fd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Vo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Vo(t)}function hr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Dy(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Us=Math.random().toString(36).slice(2),yn="__reactFiber$"+Us,qo="__reactProps$"+Us,Un="__reactContainer$"+Us,oh="__reactEvents$"+Us,sI="__reactListeners$"+Us,oI="__reactHandles$"+Us;function Jr(e){var t=e[yn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Un]||n[yn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Dy(e);e!==null;){if(n=e[yn])return n;e=Dy(e)}return t}e=n,n=e.parentNode}return null}function Pa(e){return e=e[yn]||e[Un],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function pc(e){return e[qo]||null}var ah=[],Ki=-1;function Lr(e){return{current:e}}function ge(e){0>Ki||(e.current=ah[Ki],ah[Ki]=null,Ki--)}function de(e,t){Ki++,ah[Ki]=e.current,e.current=t}var kr={},tt=Lr(kr),gt=Lr(!1),hi=kr;function gs(e,t){var n=e.type.contextTypes;if(!n)return kr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function yt(e){return e=e.childContextTypes,e!=null}function du(){ge(gt),ge(tt)}function Ly(e,t,n){if(tt.current!==kr)throw Error(k(168));de(tt,t),de(gt,n)}function c1(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,Wb(e)||"Unknown",i));return we({},n,r)}function fu(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kr,hi=tt.current,de(tt,e),de(gt,gt.current),!0}function My(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=c1(e,t,hi),r.__reactInternalMemoizedMergedChildContext=e,ge(gt),ge(tt),de(tt,e)):ge(gt),de(gt,n)}var Rn=null,mc=!1,$d=!1;function d1(e){Rn===null?Rn=[e]:Rn.push(e)}function aI(e){mc=!0,d1(e)}function Mr(){if(!$d&&Rn!==null){$d=!0;var e=0,t=se;try{var n=Rn;for(se=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Rn=null,mc=!1}catch(i){throw Rn!==null&&(Rn=Rn.slice(e+1)),Mw(Mp,Mr),i}finally{se=t,$d=!1}}return null}var qi=[],Yi=0,hu=null,pu=0,$t=[],jt=0,pi=null,An=1,Dn="";function Hr(e,t){qi[Yi++]=pu,qi[Yi++]=hu,hu=e,pu=t}function f1(e,t,n){$t[jt++]=An,$t[jt++]=Dn,$t[jt++]=pi,pi=e;var r=An;e=Dn;var i=32-rn(r)-1;r&=~(1<<i),n+=1;var s=32-rn(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,An=1<<32-rn(t)+i|n<<i|r,Dn=s+e}else An=1<<s|n<<i|r,Dn=e}function Hp(e){e.return!==null&&(Hr(e,1),f1(e,1,0))}function Gp(e){for(;e===hu;)hu=qi[--Yi],qi[Yi]=null,pu=qi[--Yi],qi[Yi]=null;for(;e===pi;)pi=$t[--jt],$t[jt]=null,Dn=$t[--jt],$t[jt]=null,An=$t[--jt],$t[jt]=null}var kt=null,xt=null,ye=!1,Jt=null;function h1(e,t){var n=Ut(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Fy(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,kt=e,xt=hr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,kt=e,xt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=pi!==null?{id:An,overflow:Dn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ut(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,kt=e,xt=null,!0):!1;default:return!1}}function lh(e){return(e.mode&1)!==0&&(e.flags&128)===0}function uh(e){if(ye){var t=xt;if(t){var n=t;if(!Fy(e,t)){if(lh(e))throw Error(k(418));t=hr(n.nextSibling);var r=kt;t&&Fy(e,t)?h1(r,n):(e.flags=e.flags&-4097|2,ye=!1,kt=e)}}else{if(lh(e))throw Error(k(418));e.flags=e.flags&-4097|2,ye=!1,kt=e}}}function $y(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;kt=e}function il(e){if(e!==kt)return!1;if(!ye)return $y(e),ye=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ih(e.type,e.memoizedProps)),t&&(t=xt)){if(lh(e))throw p1(),Error(k(418));for(;t;)h1(e,t),t=hr(t.nextSibling)}if($y(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){xt=hr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}xt=null}}else xt=kt?hr(e.stateNode.nextSibling):null;return!0}function p1(){for(var e=xt;e;)e=hr(e.nextSibling)}function ys(){xt=kt=null,ye=!1}function Kp(e){Jt===null?Jt=[e]:Jt.push(e)}var lI=Gn.ReactCurrentBatchConfig;function Qt(e,t){if(e&&e.defaultProps){t=we({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var mu=Lr(null),gu=null,Qi=null,qp=null;function Yp(){qp=Qi=gu=null}function Qp(e){var t=mu.current;ge(mu),e._currentValue=t}function ch(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function as(e,t){gu=e,qp=Qi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ht=!0),e.firstContext=null)}function Bt(e){var t=e._currentValue;if(qp!==e)if(e={context:e,memoizedValue:t,next:null},Qi===null){if(gu===null)throw Error(k(308));Qi=e,gu.dependencies={lanes:0,firstContext:e}}else Qi=Qi.next=e;return t}var Zr=null;function Xp(e){Zr===null?Zr=[e]:Zr.push(e)}function m1(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Xp(t)):(n.next=i.next,i.next=n),t.interleaved=n,zn(e,r)}function zn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var er=!1;function Jp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function g1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Fn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function pr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,zn(e,n)}return i=r.interleaved,i===null?(t.next=t,Xp(r)):(t.next=i.next,i.next=t),r.interleaved=t,zn(e,n)}function kl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Fp(e,n)}}function jy(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function yu(e,t,n,r){var i=e.updateQueue;er=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=e,v=a;switch(f=t,m=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){d=g.call(m,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,f=typeof g=="function"?g.call(m,d,f):g,f==null)break e;d=we({},d,f);break e;case 2:er=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);gi|=o,e.lanes=o,e.memoizedState=d}}function Uy(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var y1=new mw.Component().refs;function dh(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:we({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var gc={isMounted:function(e){return(e=e._reactInternals)?Ii(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ot(),i=gr(e),s=Fn(r,i);s.payload=t,n!=null&&(s.callback=n),t=pr(e,s,i),t!==null&&(sn(t,e,i,r),kl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ot(),i=gr(e),s=Fn(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=pr(e,s,i),t!==null&&(sn(t,e,i,r),kl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ot(),r=gr(e),i=Fn(n,r);i.tag=2,t!=null&&(i.callback=t),t=pr(e,i,r),t!==null&&(sn(t,e,r,n),kl(t,e,r))}};function zy(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Ho(n,r)||!Ho(i,s):!0}function v1(e,t,n){var r=!1,i=kr,s=t.contextType;return typeof s=="object"&&s!==null?s=Bt(s):(i=yt(t)?hi:tt.current,r=t.contextTypes,s=(r=r!=null)?gs(e,i):kr),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=gc,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function By(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&gc.enqueueReplaceState(t,t.state,null)}function fh(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=y1,Jp(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Bt(s):(s=yt(t)?hi:tt.current,i.context=gs(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(dh(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&gc.enqueueReplaceState(i,i.state,null),yu(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function eo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===y1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function sl(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vy(e){var t=e._init;return t(e._payload)}function _1(e){function t(p,h){if(e){var y=p.deletions;y===null?(p.deletions=[h],p.flags|=16):y.push(h)}}function n(p,h){if(!e)return null;for(;h!==null;)t(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=yr(p,h),p.index=0,p.sibling=null,p}function s(p,h,y){return p.index=y,e?(y=p.alternate,y!==null?(y=y.index,y<h?(p.flags|=2,h):y):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,h,y,S){return h===null||h.tag!==6?(h=Hd(y,p.mode,S),h.return=p,h):(h=i(h,y),h.return=p,h)}function l(p,h,y,S){var x=y.type;return x===Bi?c(p,h,y.props.children,S,y.key):h!==null&&(h.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Zn&&Vy(x)===h.type)?(S=i(h,y.props),S.ref=eo(p,h,y),S.return=p,S):(S=Al(y.type,y.key,y.props,null,p.mode,S),S.ref=eo(p,h,y),S.return=p,S)}function u(p,h,y,S){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=Gd(y,p.mode,S),h.return=p,h):(h=i(h,y.children||[]),h.return=p,h)}function c(p,h,y,S,x){return h===null||h.tag!==7?(h=oi(y,p.mode,S,x),h.return=p,h):(h=i(h,y),h.return=p,h)}function d(p,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Hd(""+h,p.mode,y),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case qa:return y=Al(h.type,h.key,h.props,null,p.mode,y),y.ref=eo(p,null,h),y.return=p,y;case zi:return h=Gd(h,p.mode,y),h.return=p,h;case Zn:var S=h._init;return d(p,S(h._payload),y)}if(fo(h)||Ys(h))return h=oi(h,p.mode,y,null),h.return=p,h;sl(p,h)}return null}function f(p,h,y,S){var x=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return x!==null?null:a(p,h,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case qa:return y.key===x?l(p,h,y,S):null;case zi:return y.key===x?u(p,h,y,S):null;case Zn:return x=y._init,f(p,h,x(y._payload),S)}if(fo(y)||Ys(y))return x!==null?null:c(p,h,y,S,null);sl(p,y)}return null}function m(p,h,y,S,x){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(y)||null,a(h,p,""+S,x);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case qa:return p=p.get(S.key===null?y:S.key)||null,l(h,p,S,x);case zi:return p=p.get(S.key===null?y:S.key)||null,u(h,p,S,x);case Zn:var C=S._init;return m(p,h,y,C(S._payload),x)}if(fo(S)||Ys(S))return p=p.get(y)||null,c(h,p,S,x,null);sl(h,S)}return null}function g(p,h,y,S){for(var x=null,C=null,E=h,P=h=0,M=null;E!==null&&P<y.length;P++){E.index>P?(M=E,E=null):M=E.sibling;var L=f(p,E,y[P],S);if(L===null){E===null&&(E=M);break}e&&E&&L.alternate===null&&t(p,E),h=s(L,h,P),C===null?x=L:C.sibling=L,C=L,E=M}if(P===y.length)return n(p,E),ye&&Hr(p,P),x;if(E===null){for(;P<y.length;P++)E=d(p,y[P],S),E!==null&&(h=s(E,h,P),C===null?x=E:C.sibling=E,C=E);return ye&&Hr(p,P),x}for(E=r(p,E);P<y.length;P++)M=m(E,p,P,y[P],S),M!==null&&(e&&M.alternate!==null&&E.delete(M.key===null?P:M.key),h=s(M,h,P),C===null?x=M:C.sibling=M,C=M);return e&&E.forEach(function(V){return t(p,V)}),ye&&Hr(p,P),x}function v(p,h,y,S){var x=Ys(y);if(typeof x!="function")throw Error(k(150));if(y=x.call(y),y==null)throw Error(k(151));for(var C=x=null,E=h,P=h=0,M=null,L=y.next();E!==null&&!L.done;P++,L=y.next()){E.index>P?(M=E,E=null):M=E.sibling;var V=f(p,E,L.value,S);if(V===null){E===null&&(E=M);break}e&&E&&V.alternate===null&&t(p,E),h=s(V,h,P),C===null?x=V:C.sibling=V,C=V,E=M}if(L.done)return n(p,E),ye&&Hr(p,P),x;if(E===null){for(;!L.done;P++,L=y.next())L=d(p,L.value,S),L!==null&&(h=s(L,h,P),C===null?x=L:C.sibling=L,C=L);return ye&&Hr(p,P),x}for(E=r(p,E);!L.done;P++,L=y.next())L=m(E,p,P,L.value,S),L!==null&&(e&&L.alternate!==null&&E.delete(L.key===null?P:L.key),h=s(L,h,P),C===null?x=L:C.sibling=L,C=L);return e&&E.forEach(function(ut){return t(p,ut)}),ye&&Hr(p,P),x}function w(p,h,y,S){if(typeof y=="object"&&y!==null&&y.type===Bi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case qa:e:{for(var x=y.key,C=h;C!==null;){if(C.key===x){if(x=y.type,x===Bi){if(C.tag===7){n(p,C.sibling),h=i(C,y.props.children),h.return=p,p=h;break e}}else if(C.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Zn&&Vy(x)===C.type){n(p,C.sibling),h=i(C,y.props),h.ref=eo(p,C,y),h.return=p,p=h;break e}n(p,C);break}else t(p,C);C=C.sibling}y.type===Bi?(h=oi(y.props.children,p.mode,S,y.key),h.return=p,p=h):(S=Al(y.type,y.key,y.props,null,p.mode,S),S.ref=eo(p,h,y),S.return=p,p=S)}return o(p);case zi:e:{for(C=y.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){n(p,h.sibling),h=i(h,y.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else t(p,h);h=h.sibling}h=Gd(y,p.mode,S),h.return=p,p=h}return o(p);case Zn:return C=y._init,w(p,h,C(y._payload),S)}if(fo(y))return g(p,h,y,S);if(Ys(y))return v(p,h,y,S);sl(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,y),h.return=p,p=h):(n(p,h),h=Hd(y,p.mode,S),h.return=p,p=h),o(p)):n(p,h)}return w}var vs=_1(!0),w1=_1(!1),Oa={},_n=Lr(Oa),Yo=Lr(Oa),Qo=Lr(Oa);function ei(e){if(e===Oa)throw Error(k(174));return e}function Zp(e,t){switch(de(Qo,t),de(Yo,e),de(_n,Oa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Wf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Wf(t,e)}ge(_n),de(_n,t)}function _s(){ge(_n),ge(Yo),ge(Qo)}function S1(e){ei(Qo.current);var t=ei(_n.current),n=Wf(t,e.type);t!==n&&(de(Yo,e),de(_n,n))}function em(e){Yo.current===e&&(ge(_n),ge(Yo))}var ve=Lr(0);function vu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var jd=[];function tm(){for(var e=0;e<jd.length;e++)jd[e]._workInProgressVersionPrimary=null;jd.length=0}var Il=Gn.ReactCurrentDispatcher,Ud=Gn.ReactCurrentBatchConfig,mi=0,_e=null,Pe=null,Me=null,_u=!1,Co=!1,Xo=0,uI=0;function Qe(){throw Error(k(321))}function nm(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!cn(e[n],t[n]))return!1;return!0}function rm(e,t,n,r,i,s){if(mi=s,_e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Il.current=e===null||e.memoizedState===null?hI:pI,e=n(r,i),Co){s=0;do{if(Co=!1,Xo=0,25<=s)throw Error(k(301));s+=1,Me=Pe=null,t.updateQueue=null,Il.current=mI,e=n(r,i)}while(Co)}if(Il.current=wu,t=Pe!==null&&Pe.next!==null,mi=0,Me=Pe=_e=null,_u=!1,t)throw Error(k(300));return e}function im(){var e=Xo!==0;return Xo=0,e}function fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?_e.memoizedState=Me=e:Me=Me.next=e,Me}function Vt(){if(Pe===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var t=Me===null?_e.memoizedState:Me.next;if(t!==null)Me=t,Pe=e;else{if(e===null)throw Error(k(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Me===null?_e.memoizedState=Me=e:Me=Me.next=e}return Me}function Jo(e,t){return typeof t=="function"?t(e):t}function zd(e){var t=Vt(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=Pe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((mi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,_e.lanes|=c,gi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,cn(r,t.memoizedState)||(ht=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,_e.lanes|=s,gi|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bd(e){var t=Vt(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);cn(s,t.memoizedState)||(ht=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function E1(){}function x1(e,t){var n=_e,r=Vt(),i=t(),s=!cn(r.memoizedState,i);if(s&&(r.memoizedState=i,ht=!0),r=r.queue,sm(b1.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,Zo(9,T1.bind(null,n,r,i,t),void 0,null),je===null)throw Error(k(349));mi&30||C1(n,t,i)}return i}function C1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function T1(e,t,n,r){t.value=n,t.getSnapshot=r,k1(t)&&I1(e)}function b1(e,t,n){return n(function(){k1(t)&&I1(e)})}function k1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!cn(e,n)}catch{return!0}}function I1(e){var t=zn(e,1);t!==null&&sn(t,e,1,-1)}function Wy(e){var t=fn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jo,lastRenderedState:e},t.queue=e,e=e.dispatch=fI.bind(null,_e,e),[t.memoizedState,e]}function Zo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function P1(){return Vt().memoizedState}function Pl(e,t,n,r){var i=fn();_e.flags|=e,i.memoizedState=Zo(1|t,n,void 0,r===void 0?null:r)}function yc(e,t,n,r){var i=Vt();r=r===void 0?null:r;var s=void 0;if(Pe!==null){var o=Pe.memoizedState;if(s=o.destroy,r!==null&&nm(r,o.deps)){i.memoizedState=Zo(t,n,s,r);return}}_e.flags|=e,i.memoizedState=Zo(1|t,n,s,r)}function Hy(e,t){return Pl(8390656,8,e,t)}function sm(e,t){return yc(2048,8,e,t)}function O1(e,t){return yc(4,2,e,t)}function R1(e,t){return yc(4,4,e,t)}function N1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function A1(e,t,n){return n=n!=null?n.concat([e]):null,yc(4,4,N1.bind(null,t,e),n)}function om(){}function D1(e,t){var n=Vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&nm(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function L1(e,t){var n=Vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&nm(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function M1(e,t,n){return mi&21?(cn(n,t)||(n=jw(),_e.lanes|=n,gi|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ht=!0),e.memoizedState=n)}function cI(e,t){var n=se;se=n!==0&&4>n?n:4,e(!0);var r=Ud.transition;Ud.transition={};try{e(!1),t()}finally{se=n,Ud.transition=r}}function F1(){return Vt().memoizedState}function dI(e,t,n){var r=gr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$1(e))j1(t,n);else if(n=m1(e,t,n,r),n!==null){var i=ot();sn(n,e,r,i),U1(n,t,r)}}function fI(e,t,n){var r=gr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($1(e))j1(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,cn(a,o)){var l=t.interleaved;l===null?(i.next=i,Xp(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=m1(e,t,i,r),n!==null&&(i=ot(),sn(n,e,r,i),U1(n,t,r))}}function $1(e){var t=e.alternate;return e===_e||t!==null&&t===_e}function j1(e,t){Co=_u=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function U1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Fp(e,n)}}var wu={readContext:Bt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},hI={readContext:Bt,useCallback:function(e,t){return fn().memoizedState=[e,t===void 0?null:t],e},useContext:Bt,useEffect:Hy,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Pl(4194308,4,N1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Pl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Pl(4,2,e,t)},useMemo:function(e,t){var n=fn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=fn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=dI.bind(null,_e,e),[r.memoizedState,e]},useRef:function(e){var t=fn();return e={current:e},t.memoizedState=e},useState:Wy,useDebugValue:om,useDeferredValue:function(e){return fn().memoizedState=e},useTransition:function(){var e=Wy(!1),t=e[0];return e=cI.bind(null,e[1]),fn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=_e,i=fn();if(ye){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),je===null)throw Error(k(349));mi&30||C1(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Hy(b1.bind(null,r,s,e),[e]),r.flags|=2048,Zo(9,T1.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=fn(),t=je.identifierPrefix;if(ye){var n=Dn,r=An;n=(r&~(1<<32-rn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Xo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=uI++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},pI={readContext:Bt,useCallback:D1,useContext:Bt,useEffect:sm,useImperativeHandle:A1,useInsertionEffect:O1,useLayoutEffect:R1,useMemo:L1,useReducer:zd,useRef:P1,useState:function(){return zd(Jo)},useDebugValue:om,useDeferredValue:function(e){var t=Vt();return M1(t,Pe.memoizedState,e)},useTransition:function(){var e=zd(Jo)[0],t=Vt().memoizedState;return[e,t]},useMutableSource:E1,useSyncExternalStore:x1,useId:F1,unstable_isNewReconciler:!1},mI={readContext:Bt,useCallback:D1,useContext:Bt,useEffect:sm,useImperativeHandle:A1,useInsertionEffect:O1,useLayoutEffect:R1,useMemo:L1,useReducer:Bd,useRef:P1,useState:function(){return Bd(Jo)},useDebugValue:om,useDeferredValue:function(e){var t=Vt();return Pe===null?t.memoizedState=e:M1(t,Pe.memoizedState,e)},useTransition:function(){var e=Bd(Jo)[0],t=Vt().memoizedState;return[e,t]},useMutableSource:E1,useSyncExternalStore:x1,useId:F1,unstable_isNewReconciler:!1};function ws(e,t){try{var n="",r=t;do n+=Vb(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Vd(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function hh(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var gI=typeof WeakMap=="function"?WeakMap:Map;function z1(e,t,n){n=Fn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Eu||(Eu=!0,xh=r),hh(e,t)},n}function B1(e,t,n){n=Fn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){hh(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){hh(e,t),typeof r!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Gy(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new gI;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=OI.bind(null,e,t,n),t.then(e,e))}function Ky(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qy(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Fn(-1,1),t.tag=2,pr(n,t,1))),n.lanes|=1),e)}var yI=Gn.ReactCurrentOwner,ht=!1;function rt(e,t,n,r){t.child=e===null?w1(t,null,n,r):vs(t,e.child,n,r)}function Yy(e,t,n,r,i){n=n.render;var s=t.ref;return as(t,i),r=rm(e,t,n,r,s,i),n=im(),e!==null&&!ht?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Bn(e,t,i)):(ye&&n&&Hp(t),t.flags|=1,rt(e,t,r,i),t.child)}function Qy(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!pm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,V1(e,t,s,r,i)):(e=Al(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ho,n(o,r)&&e.ref===t.ref)return Bn(e,t,i)}return t.flags|=1,e=yr(s,r),e.ref=t.ref,e.return=t,t.child=e}function V1(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Ho(s,r)&&e.ref===t.ref)if(ht=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(ht=!0);else return t.lanes=e.lanes,Bn(e,t,i)}return ph(e,t,n,r,i)}function W1(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Ji,Et),Et|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,de(Ji,Et),Et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(Ji,Et),Et|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,de(Ji,Et),Et|=r;return rt(e,t,i,n),t.child}function H1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ph(e,t,n,r,i){var s=yt(n)?hi:tt.current;return s=gs(t,s),as(t,i),n=rm(e,t,n,r,s,i),r=im(),e!==null&&!ht?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Bn(e,t,i)):(ye&&r&&Hp(t),t.flags|=1,rt(e,t,n,i),t.child)}function Xy(e,t,n,r,i){if(yt(n)){var s=!0;fu(t)}else s=!1;if(as(t,i),t.stateNode===null)Ol(e,t),v1(t,n,r),fh(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Bt(u):(u=yt(n)?hi:tt.current,u=gs(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&By(t,o,r,u),er=!1;var f=t.memoizedState;o.state=f,yu(t,r,o,i),l=t.memoizedState,a!==r||f!==l||gt.current||er?(typeof c=="function"&&(dh(t,n,c,r),l=t.memoizedState),(a=er||zy(t,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,g1(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Qt(t.type,a),o.props=u,d=t.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Bt(l):(l=yt(n)?hi:tt.current,l=gs(t,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&By(t,o,r,l),er=!1,f=t.memoizedState,o.state=f,yu(t,r,o,i);var g=t.memoizedState;a!==d||f!==g||gt.current||er?(typeof m=="function"&&(dh(t,n,m,r),g=t.memoizedState),(u=er||zy(t,n,u,r,f,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return mh(e,t,n,r,s,i)}function mh(e,t,n,r,i,s){H1(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&My(t,n,!1),Bn(e,t,s);r=t.stateNode,yI.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=vs(t,e.child,null,s),t.child=vs(t,null,a,s)):rt(e,t,a,s),t.memoizedState=r.state,i&&My(t,n,!0),t.child}function G1(e){var t=e.stateNode;t.pendingContext?Ly(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ly(e,t.context,!1),Zp(e,t.containerInfo)}function Jy(e,t,n,r,i){return ys(),Kp(i),t.flags|=256,rt(e,t,n,r),t.child}var gh={dehydrated:null,treeContext:null,retryLane:0};function yh(e){return{baseLanes:e,cachePool:null,transitions:null}}function K1(e,t,n){var r=t.pendingProps,i=ve.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),de(ve,i&1),e===null)return uh(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=wc(o,r,0,null),e=oi(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=yh(n),t.memoizedState=gh,e):am(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return vI(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=yr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=yr(a,s):(s=oi(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?yh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=gh,r}return s=e.child,e=s.sibling,r=yr(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function am(e,t){return t=wc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ol(e,t,n,r){return r!==null&&Kp(r),vs(t,e.child,null,n),e=am(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vI(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Vd(Error(k(422))),ol(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=wc({mode:"visible",children:r.children},i,0,null),s=oi(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&vs(t,e.child,null,o),t.child.memoizedState=yh(o),t.memoizedState=gh,s);if(!(t.mode&1))return ol(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=Vd(s,r,void 0),ol(e,t,o,r)}if(a=(o&e.childLanes)!==0,ht||a){if(r=je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,zn(e,i),sn(r,e,i,-1))}return hm(),r=Vd(Error(k(421))),ol(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=RI.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,xt=hr(i.nextSibling),kt=t,ye=!0,Jt=null,e!==null&&($t[jt++]=An,$t[jt++]=Dn,$t[jt++]=pi,An=e.id,Dn=e.overflow,pi=t),t=am(t,r.children),t.flags|=4096,t)}function Zy(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ch(e.return,t,n)}function Wd(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function q1(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(rt(e,t,r.children,n),r=ve.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zy(e,n,t);else if(e.tag===19)Zy(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(de(ve,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&vu(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Wd(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&vu(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Wd(t,!0,n,null,s);break;case"together":Wd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ol(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Bn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),gi|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=yr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _I(e,t,n){switch(t.tag){case 3:G1(t),ys();break;case 5:S1(t);break;case 1:yt(t.type)&&fu(t);break;case 4:Zp(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;de(mu,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(de(ve,ve.current&1),t.flags|=128,null):n&t.child.childLanes?K1(e,t,n):(de(ve,ve.current&1),e=Bn(e,t,n),e!==null?e.sibling:null);de(ve,ve.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return q1(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(ve,ve.current),r)break;return null;case 22:case 23:return t.lanes=0,W1(e,t,n)}return Bn(e,t,n)}var Y1,vh,Q1,X1;Y1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};vh=function(){};Q1=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ei(_n.current);var s=null;switch(n){case"input":i=Uf(e,i),r=Uf(e,r),s=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),s=[];break;case"textarea":i=Vf(e,i),r=Vf(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=cu)}Hf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&($o.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&($o.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&fe("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};X1=function(e,t,n,r){n!==r&&(t.flags|=4)};function to(e,t){if(!ye)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function wI(e,t,n){var r=t.pendingProps;switch(Gp(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(t),null;case 1:return yt(t.type)&&du(),Xe(t),null;case 3:return r=t.stateNode,_s(),ge(gt),ge(tt),tm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(il(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Jt!==null&&(bh(Jt),Jt=null))),vh(e,t),Xe(t),null;case 5:em(t);var i=ei(Qo.current);if(n=t.type,e!==null&&t.stateNode!=null)Q1(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return Xe(t),null}if(e=ei(_n.current),il(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[yn]=t,r[qo]=s,e=(t.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<po.length;i++)fe(po[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":ly(r,s),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},fe("invalid",r);break;case"textarea":cy(r,s),fe("invalid",r)}Hf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&rl(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&rl(r.textContent,a,e),i=["children",""+a]):$o.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&fe("scroll",r)}switch(n){case"input":Ya(r),uy(r,s,!0);break;case"textarea":Ya(r),dy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=cu)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cw(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[yn]=t,e[qo]=r,Y1(e,t,!1,!1),t.stateNode=e;e:{switch(o=Gf(n,r),n){case"dialog":fe("cancel",e),fe("close",e),i=r;break;case"iframe":case"object":case"embed":fe("load",e),i=r;break;case"video":case"audio":for(i=0;i<po.length;i++)fe(po[i],e);i=r;break;case"source":fe("error",e),i=r;break;case"img":case"image":case"link":fe("error",e),fe("load",e),i=r;break;case"details":fe("toggle",e),i=r;break;case"input":ly(e,r),i=Uf(e,r),fe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),fe("invalid",e);break;case"textarea":cy(e,r),i=Vf(e,r),fe("invalid",e);break;default:i=r}Hf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?kw(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Tw(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&jo(e,l):typeof l=="number"&&jo(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&($o.hasOwnProperty(s)?l!=null&&s==="onScroll"&&fe("scroll",e):l!=null&&Rp(e,s,l,o))}switch(n){case"input":Ya(e),uy(e,r,!1);break;case"textarea":Ya(e),dy(e);break;case"option":r.value!=null&&e.setAttribute("value",""+br(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?rs(e,!!r.multiple,s,!1):r.defaultValue!=null&&rs(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=cu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Xe(t),null;case 6:if(e&&t.stateNode!=null)X1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=ei(Qo.current),ei(_n.current),il(t)){if(r=t.stateNode,n=t.memoizedProps,r[yn]=t,(s=r.nodeValue!==n)&&(e=kt,e!==null))switch(e.tag){case 3:rl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&rl(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yn]=t,t.stateNode=r}return Xe(t),null;case 13:if(ge(ve),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ye&&xt!==null&&t.mode&1&&!(t.flags&128))p1(),ys(),t.flags|=98560,s=!1;else if(s=il(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(k(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[yn]=t}else ys(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Xe(t),s=!1}else Jt!==null&&(bh(Jt),Jt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ve.current&1?Ne===0&&(Ne=3):hm())),t.updateQueue!==null&&(t.flags|=4),Xe(t),null);case 4:return _s(),vh(e,t),e===null&&Go(t.stateNode.containerInfo),Xe(t),null;case 10:return Qp(t.type._context),Xe(t),null;case 17:return yt(t.type)&&du(),Xe(t),null;case 19:if(ge(ve),s=t.memoizedState,s===null)return Xe(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)to(s,!1);else{if(Ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=vu(e),o!==null){for(t.flags|=128,to(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return de(ve,ve.current&1|2),t.child}e=e.sibling}s.tail!==null&&xe()>Ss&&(t.flags|=128,r=!0,to(s,!1),t.lanes=4194304)}else{if(!r)if(e=vu(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),to(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ye)return Xe(t),null}else 2*xe()-s.renderingStartTime>Ss&&n!==1073741824&&(t.flags|=128,r=!0,to(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=xe(),t.sibling=null,n=ve.current,de(ve,r?n&1|2:n&1),t):(Xe(t),null);case 22:case 23:return fm(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Et&1073741824&&(Xe(t),t.subtreeFlags&6&&(t.flags|=8192)):Xe(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function SI(e,t){switch(Gp(t),t.tag){case 1:return yt(t.type)&&du(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _s(),ge(gt),ge(tt),tm(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return em(t),null;case 13:if(ge(ve),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));ys()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ge(ve),null;case 4:return _s(),null;case 10:return Qp(t.type._context),null;case 22:case 23:return fm(),null;case 24:return null;default:return null}}var al=!1,Ze=!1,EI=typeof WeakSet=="function"?WeakSet:Set,N=null;function Xi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(e,t,r)}else n.current=null}function _h(e,t,n){try{n()}catch(r){Se(e,t,r)}}var ev=!1;function xI(e,t){if(nh=au,e=t1(),Wp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===e)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(rh={focusedElem:e,selectionRange:n},au=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,w=g.memoizedState,p=t.stateNode,h=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:Qt(t.type,v),w);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(S){Se(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return g=ev,ev=!1,g}function To(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&_h(t,n,s)}i=i.next}while(i!==r)}}function vc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function wh(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function J1(e){var t=e.alternate;t!==null&&(e.alternate=null,J1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[yn],delete t[qo],delete t[oh],delete t[sI],delete t[oI])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Z1(e){return e.tag===5||e.tag===3||e.tag===4}function tv(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Z1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sh(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cu));else if(r!==4&&(e=e.child,e!==null))for(Sh(e,t,n),e=e.sibling;e!==null;)Sh(e,t,n),e=e.sibling}function Eh(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Eh(e,t,n),e=e.sibling;e!==null;)Eh(e,t,n),e=e.sibling}var Ve=null,Xt=!1;function Qn(e,t,n){for(n=n.child;n!==null;)eS(e,t,n),n=n.sibling}function eS(e,t,n){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount(cc,n)}catch{}switch(n.tag){case 5:Ze||Xi(n,t);case 6:var r=Ve,i=Xt;Ve=null,Qn(e,t,n),Ve=r,Xt=i,Ve!==null&&(Xt?(e=Ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ve.removeChild(n.stateNode));break;case 18:Ve!==null&&(Xt?(e=Ve,n=n.stateNode,e.nodeType===8?Fd(e.parentNode,n):e.nodeType===1&&Fd(e,n),Vo(e)):Fd(Ve,n.stateNode));break;case 4:r=Ve,i=Xt,Ve=n.stateNode.containerInfo,Xt=!0,Qn(e,t,n),Ve=r,Xt=i;break;case 0:case 11:case 14:case 15:if(!Ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&_h(n,t,o),i=i.next}while(i!==r)}Qn(e,t,n);break;case 1:if(!Ze&&(Xi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Se(n,t,a)}Qn(e,t,n);break;case 21:Qn(e,t,n);break;case 22:n.mode&1?(Ze=(r=Ze)||n.memoizedState!==null,Qn(e,t,n),Ze=r):Qn(e,t,n);break;default:Qn(e,t,n)}}function nv(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new EI),t.forEach(function(r){var i=NI.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Kt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ve=a.stateNode,Xt=!1;break e;case 3:Ve=a.stateNode.containerInfo,Xt=!0;break e;case 4:Ve=a.stateNode.containerInfo,Xt=!0;break e}a=a.return}if(Ve===null)throw Error(k(160));eS(s,o,i),Ve=null,Xt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Se(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)tS(t,e),t=t.sibling}function tS(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Kt(t,e),dn(e),r&4){try{To(3,e,e.return),vc(3,e)}catch(v){Se(e,e.return,v)}try{To(5,e,e.return)}catch(v){Se(e,e.return,v)}}break;case 1:Kt(t,e),dn(e),r&512&&n!==null&&Xi(n,n.return);break;case 5:if(Kt(t,e),dn(e),r&512&&n!==null&&Xi(n,n.return),e.flags&32){var i=e.stateNode;try{jo(i,"")}catch(v){Se(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ew(i,s),Gf(a,o);var u=Gf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?kw(i,d):c==="dangerouslySetInnerHTML"?Tw(i,d):c==="children"?jo(i,d):Rp(i,c,d,u)}switch(a){case"input":zf(i,s);break;case"textarea":xw(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?rs(i,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?rs(i,!!s.multiple,s.defaultValue,!0):rs(i,!!s.multiple,s.multiple?[]:"",!1))}i[qo]=s}catch(v){Se(e,e.return,v)}}break;case 6:if(Kt(t,e),dn(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(v){Se(e,e.return,v)}}break;case 3:if(Kt(t,e),dn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vo(t.containerInfo)}catch(v){Se(e,e.return,v)}break;case 4:Kt(t,e),dn(e);break;case 13:Kt(t,e),dn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(cm=xe())),r&4&&nv(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ze=(u=Ze)||c,Kt(t,e),Ze=u):Kt(t,e),dn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(N=e,c=e.child;c!==null;){for(d=N=c;N!==null;){switch(f=N,m=f.child,f.tag){case 0:case 11:case 14:case 15:To(4,f,f.return);break;case 1:Xi(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){Se(r,n,v)}}break;case 5:Xi(f,f.return);break;case 22:if(f.memoizedState!==null){iv(d);continue}}m!==null?(m.return=f,N=m):iv(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=bw("display",o))}catch(v){Se(e,e.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){Se(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Kt(t,e),dn(e),r&4&&nv(e);break;case 21:break;default:Kt(t,e),dn(e)}}function dn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Z1(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(jo(i,""),r.flags&=-33);var s=tv(e);Eh(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=tv(e);Sh(e,a,o);break;default:throw Error(k(161))}}catch(l){Se(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function CI(e,t,n){N=e,nS(e)}function nS(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||al;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ze;a=al;var u=Ze;if(al=o,(Ze=l)&&!u)for(N=i;N!==null;)o=N,l=o.child,o.tag===22&&o.memoizedState!==null?sv(i):l!==null?(l.return=o,N=l):sv(i);for(;s!==null;)N=s,nS(s),s=s.sibling;N=i,al=a,Ze=u}rv(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):rv(e)}}function rv(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ze||vc(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ze)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Qt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Uy(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Uy(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Vo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Ze||t.flags&512&&wh(t)}catch(f){Se(t,t.return,f)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function iv(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function sv(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vc(4,t)}catch(l){Se(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Se(t,i,l)}}var s=t.return;try{wh(t)}catch(l){Se(t,s,l)}break;case 5:var o=t.return;try{wh(t)}catch(l){Se(t,o,l)}}}catch(l){Se(t,t.return,l)}if(t===e){N=null;break}var a=t.sibling;if(a!==null){a.return=t.return,N=a;break}N=t.return}}var TI=Math.ceil,Su=Gn.ReactCurrentDispatcher,lm=Gn.ReactCurrentOwner,zt=Gn.ReactCurrentBatchConfig,Q=0,je=null,ke=null,Ge=0,Et=0,Ji=Lr(0),Ne=0,ea=null,gi=0,_c=0,um=0,bo=null,dt=null,cm=0,Ss=1/0,Pn=null,Eu=!1,xh=null,mr=null,ll=!1,lr=null,xu=0,ko=0,Ch=null,Rl=-1,Nl=0;function ot(){return Q&6?xe():Rl!==-1?Rl:Rl=xe()}function gr(e){return e.mode&1?Q&2&&Ge!==0?Ge&-Ge:lI.transition!==null?(Nl===0&&(Nl=jw()),Nl):(e=se,e!==0||(e=window.event,e=e===void 0?16:Gw(e.type)),e):1}function sn(e,t,n,r){if(50<ko)throw ko=0,Ch=null,Error(k(185));ka(e,n,r),(!(Q&2)||e!==je)&&(e===je&&(!(Q&2)&&(_c|=n),Ne===4&&nr(e,Ge)),vt(e,r),n===1&&Q===0&&!(t.mode&1)&&(Ss=xe()+500,mc&&Mr()))}function vt(e,t){var n=e.callbackNode;lk(e,t);var r=ou(e,e===je?Ge:0);if(r===0)n!==null&&py(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&py(n),t===1)e.tag===0?aI(ov.bind(null,e)):d1(ov.bind(null,e)),rI(function(){!(Q&6)&&Mr()}),n=null;else{switch(Uw(r)){case 1:n=Mp;break;case 4:n=Fw;break;case 16:n=su;break;case 536870912:n=$w;break;default:n=su}n=cS(n,rS.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function rS(e,t){if(Rl=-1,Nl=0,Q&6)throw Error(k(327));var n=e.callbackNode;if(ls()&&e.callbackNode!==n)return null;var r=ou(e,e===je?Ge:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Cu(e,r);else{t=r;var i=Q;Q|=2;var s=sS();(je!==e||Ge!==t)&&(Pn=null,Ss=xe()+500,si(e,t));do try{II();break}catch(a){iS(e,a)}while(1);Yp(),Su.current=s,Q=i,ke!==null?t=0:(je=null,Ge=0,t=Ne)}if(t!==0){if(t===2&&(i=Xf(e),i!==0&&(r=i,t=Th(e,i))),t===1)throw n=ea,si(e,0),nr(e,r),vt(e,xe()),n;if(t===6)nr(e,r);else{if(i=e.current.alternate,!(r&30)&&!bI(i)&&(t=Cu(e,r),t===2&&(s=Xf(e),s!==0&&(r=s,t=Th(e,s))),t===1))throw n=ea,si(e,0),nr(e,r),vt(e,xe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Gr(e,dt,Pn);break;case 3:if(nr(e,r),(r&130023424)===r&&(t=cm+500-xe(),10<t)){if(ou(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ot(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=sh(Gr.bind(null,e,dt,Pn),t);break}Gr(e,dt,Pn);break;case 4:if(nr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-rn(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*TI(r/1960))-r,10<r){e.timeoutHandle=sh(Gr.bind(null,e,dt,Pn),r);break}Gr(e,dt,Pn);break;case 5:Gr(e,dt,Pn);break;default:throw Error(k(329))}}}return vt(e,xe()),e.callbackNode===n?rS.bind(null,e):null}function Th(e,t){var n=bo;return e.current.memoizedState.isDehydrated&&(si(e,t).flags|=256),e=Cu(e,t),e!==2&&(t=dt,dt=n,t!==null&&bh(t)),e}function bh(e){dt===null?dt=e:dt.push.apply(dt,e)}function bI(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!cn(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nr(e,t){for(t&=~um,t&=~_c,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-rn(t),r=1<<n;e[n]=-1,t&=~r}}function ov(e){if(Q&6)throw Error(k(327));ls();var t=ou(e,0);if(!(t&1))return vt(e,xe()),null;var n=Cu(e,t);if(e.tag!==0&&n===2){var r=Xf(e);r!==0&&(t=r,n=Th(e,r))}if(n===1)throw n=ea,si(e,0),nr(e,t),vt(e,xe()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Gr(e,dt,Pn),vt(e,xe()),null}function dm(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(Ss=xe()+500,mc&&Mr())}}function yi(e){lr!==null&&lr.tag===0&&!(Q&6)&&ls();var t=Q;Q|=1;var n=zt.transition,r=se;try{if(zt.transition=null,se=1,e)return e()}finally{se=r,zt.transition=n,Q=t,!(Q&6)&&Mr()}}function fm(){Et=Ji.current,ge(Ji)}function si(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,nI(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(Gp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&du();break;case 3:_s(),ge(gt),ge(tt),tm();break;case 5:em(r);break;case 4:_s();break;case 13:ge(ve);break;case 19:ge(ve);break;case 10:Qp(r.type._context);break;case 22:case 23:fm()}n=n.return}if(je=e,ke=e=yr(e.current,null),Ge=Et=t,Ne=0,ea=null,um=_c=gi=0,dt=bo=null,Zr!==null){for(t=0;t<Zr.length;t++)if(n=Zr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Zr=null}return e}function iS(e,t){do{var n=ke;try{if(Yp(),Il.current=wu,_u){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}_u=!1}if(mi=0,Me=Pe=_e=null,Co=!1,Xo=0,lm.current=null,n===null||n.return===null){Ne=1,ea=t,ke=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=Ge,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Ky(o);if(m!==null){m.flags&=-257,qy(m,o,a,s,t),m.mode&1&&Gy(s,u,t),t=m,l=u;var g=t.updateQueue;if(g===null){var v=new Set;v.add(l),t.updateQueue=v}else g.add(l);break e}else{if(!(t&1)){Gy(s,u,t),hm();break e}l=Error(k(426))}}else if(ye&&a.mode&1){var w=Ky(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),qy(w,o,a,s,t),Kp(ws(l,a));break e}}s=l=ws(l,a),Ne!==4&&(Ne=2),bo===null?bo=[s]:bo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var p=z1(s,l,t);jy(s,p);break e;case 1:a=l;var h=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(mr===null||!mr.has(y)))){s.flags|=65536,t&=-t,s.lanes|=t;var S=B1(s,a,t);jy(s,S);break e}}s=s.return}while(s!==null)}aS(n)}catch(x){t=x,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(1)}function sS(){var e=Su.current;return Su.current=wu,e===null?wu:e}function hm(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),je===null||!(gi&268435455)&&!(_c&268435455)||nr(je,Ge)}function Cu(e,t){var n=Q;Q|=2;var r=sS();(je!==e||Ge!==t)&&(Pn=null,si(e,t));do try{kI();break}catch(i){iS(e,i)}while(1);if(Yp(),Q=n,Su.current=r,ke!==null)throw Error(k(261));return je=null,Ge=0,Ne}function kI(){for(;ke!==null;)oS(ke)}function II(){for(;ke!==null&&!Zb();)oS(ke)}function oS(e){var t=uS(e.alternate,e,Et);e.memoizedProps=e.pendingProps,t===null?aS(e):ke=t,lm.current=null}function aS(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=SI(n,t),n!==null){n.flags&=32767,ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ne=6,ke=null;return}}else if(n=wI(n,t,Et),n!==null){ke=n;return}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);Ne===0&&(Ne=5)}function Gr(e,t,n){var r=se,i=zt.transition;try{zt.transition=null,se=1,PI(e,t,n,r)}finally{zt.transition=i,se=r}return null}function PI(e,t,n,r){do ls();while(lr!==null);if(Q&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(uk(e,s),e===je&&(ke=je=null,Ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ll||(ll=!0,cS(su,function(){return ls(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=zt.transition,zt.transition=null;var o=se;se=1;var a=Q;Q|=4,lm.current=null,xI(e,n),tS(n,e),Yk(rh),au=!!nh,rh=nh=null,e.current=n,CI(n),ek(),Q=a,se=o,zt.transition=s}else e.current=n;if(ll&&(ll=!1,lr=e,xu=i),s=e.pendingLanes,s===0&&(mr=null),rk(n.stateNode),vt(e,xe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Eu)throw Eu=!1,e=xh,xh=null,e;return xu&1&&e.tag!==0&&ls(),s=e.pendingLanes,s&1?e===Ch?ko++:(ko=0,Ch=e):ko=0,Mr(),null}function ls(){if(lr!==null){var e=Uw(xu),t=zt.transition,n=se;try{if(zt.transition=null,se=16>e?16:e,lr===null)var r=!1;else{if(e=lr,lr=null,xu=0,Q&6)throw Error(k(331));var i=Q;for(Q|=4,N=e.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(N=u;N!==null;){var c=N;switch(c.tag){case 0:case 11:case 15:To(8,c,s)}var d=c.child;if(d!==null)d.return=c,N=d;else for(;N!==null;){c=N;var f=c.sibling,m=c.return;if(J1(c),c===u){N=null;break}if(f!==null){f.return=m,N=f;break}N=m}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:To(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,N=p;break e}N=s.return}}var h=e.current;for(N=h;N!==null;){o=N;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,N=y;else e:for(o=h;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:vc(9,a)}}catch(x){Se(a,a.return,x)}if(a===o){N=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,N=S;break e}N=a.return}}if(Q=i,Mr(),vn&&typeof vn.onPostCommitFiberRoot=="function")try{vn.onPostCommitFiberRoot(cc,e)}catch{}r=!0}return r}finally{se=n,zt.transition=t}}return!1}function av(e,t,n){t=ws(n,t),t=z1(e,t,1),e=pr(e,t,1),t=ot(),e!==null&&(ka(e,1,t),vt(e,t))}function Se(e,t,n){if(e.tag===3)av(e,e,n);else for(;t!==null;){if(t.tag===3){av(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mr===null||!mr.has(r))){e=ws(n,e),e=B1(t,e,1),t=pr(t,e,1),e=ot(),t!==null&&(ka(t,1,e),vt(t,e));break}}t=t.return}}function OI(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ot(),e.pingedLanes|=e.suspendedLanes&n,je===e&&(Ge&n)===n&&(Ne===4||Ne===3&&(Ge&130023424)===Ge&&500>xe()-cm?si(e,0):um|=n),vt(e,t)}function lS(e,t){t===0&&(e.mode&1?(t=Ja,Ja<<=1,!(Ja&130023424)&&(Ja=4194304)):t=1);var n=ot();e=zn(e,t),e!==null&&(ka(e,t,n),vt(e,n))}function RI(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),lS(e,n)}function NI(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),lS(e,n)}var uS;uS=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||gt.current)ht=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ht=!1,_I(e,t,n);ht=!!(e.flags&131072)}else ht=!1,ye&&t.flags&1048576&&f1(t,pu,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ol(e,t),e=t.pendingProps;var i=gs(t,tt.current);as(t,n),i=rm(null,t,r,e,i,n);var s=im();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,yt(r)?(s=!0,fu(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Jp(t),i.updater=gc,t.stateNode=i,i._reactInternals=t,fh(t,r,e,n),t=mh(null,t,r,!0,s,n)):(t.tag=0,ye&&s&&Hp(t),rt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ol(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=DI(r),e=Qt(r,e),i){case 0:t=ph(null,t,r,e,n);break e;case 1:t=Xy(null,t,r,e,n);break e;case 11:t=Yy(null,t,r,e,n);break e;case 14:t=Qy(null,t,r,Qt(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qt(r,i),ph(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qt(r,i),Xy(e,t,r,i,n);case 3:e:{if(G1(t),e===null)throw Error(k(387));r=t.pendingProps,s=t.memoizedState,i=s.element,g1(e,t),yu(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=ws(Error(k(423)),t),t=Jy(e,t,r,n,i);break e}else if(r!==i){i=ws(Error(k(424)),t),t=Jy(e,t,r,n,i);break e}else for(xt=hr(t.stateNode.containerInfo.firstChild),kt=t,ye=!0,Jt=null,n=w1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ys(),r===i){t=Bn(e,t,n);break e}rt(e,t,r,n)}t=t.child}return t;case 5:return S1(t),e===null&&uh(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,ih(r,i)?o=null:s!==null&&ih(r,s)&&(t.flags|=32),H1(e,t),rt(e,t,o,n),t.child;case 6:return e===null&&uh(t),null;case 13:return K1(e,t,n);case 4:return Zp(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=vs(t,null,r,n):rt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qt(r,i),Yy(e,t,r,i,n);case 7:return rt(e,t,t.pendingProps,n),t.child;case 8:return rt(e,t,t.pendingProps.children,n),t.child;case 12:return rt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,de(mu,r._currentValue),r._currentValue=o,s!==null)if(cn(s.value,o)){if(s.children===i.children&&!gt.current){t=Bn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Fn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ch(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ch(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}rt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,as(t,n),i=Bt(i),r=r(i),t.flags|=1,rt(e,t,r,n),t.child;case 14:return r=t.type,i=Qt(r,t.pendingProps),i=Qt(r.type,i),Qy(e,t,r,i,n);case 15:return V1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qt(r,i),Ol(e,t),t.tag=1,yt(r)?(e=!0,fu(t)):e=!1,as(t,n),v1(t,r,i),fh(t,r,i,n),mh(null,t,r,!0,e,n);case 19:return q1(e,t,n);case 22:return W1(e,t,n)}throw Error(k(156,t.tag))};function cS(e,t){return Mw(e,t)}function AI(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(e,t,n,r){return new AI(e,t,n,r)}function pm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function DI(e){if(typeof e=="function")return pm(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ap)return 11;if(e===Dp)return 14}return 2}function yr(e,t){var n=e.alternate;return n===null?(n=Ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Al(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")pm(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Bi:return oi(n.children,i,s,t);case Np:o=8,i|=8;break;case Mf:return e=Ut(12,n,t,i|2),e.elementType=Mf,e.lanes=s,e;case Ff:return e=Ut(13,n,t,i),e.elementType=Ff,e.lanes=s,e;case $f:return e=Ut(19,n,t,i),e.elementType=$f,e.lanes=s,e;case _w:return wc(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yw:o=10;break e;case vw:o=9;break e;case Ap:o=11;break e;case Dp:o=14;break e;case Zn:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Ut(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function oi(e,t,n,r){return e=Ut(7,e,r,t),e.lanes=n,e}function wc(e,t,n,r){return e=Ut(22,e,r,t),e.elementType=_w,e.lanes=n,e.stateNode={isHidden:!1},e}function Hd(e,t,n){return e=Ut(6,e,null,t),e.lanes=n,e}function Gd(e,t,n){return t=Ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function LI(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bd(0),this.expirationTimes=bd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function mm(e,t,n,r,i,s,o,a,l){return e=new LI(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ut(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jp(s),e}function MI(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function dS(e){if(!e)return kr;e=e._reactInternals;e:{if(Ii(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(yt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(yt(n))return c1(e,n,t)}return t}function fS(e,t,n,r,i,s,o,a,l){return e=mm(n,r,!0,e,i,s,o,a,l),e.context=dS(null),n=e.current,r=ot(),i=gr(n),s=Fn(r,i),s.callback=t??null,pr(n,s,i),e.current.lanes=i,ka(e,i,r),vt(e,r),e}function Sc(e,t,n,r){var i=t.current,s=ot(),o=gr(i);return n=dS(n),t.context===null?t.context=n:t.pendingContext=n,t=Fn(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=pr(i,t,o),e!==null&&(sn(e,i,o,s),kl(e,i,o)),o}function Tu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function gm(e,t){lv(e,t),(e=e.alternate)&&lv(e,t)}function FI(){return null}var hS=typeof reportError=="function"?reportError:function(e){console.error(e)};function ym(e){this._internalRoot=e}Ec.prototype.render=ym.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Sc(e,t,null,null)};Ec.prototype.unmount=ym.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yi(function(){Sc(null,e,null,null)}),t[Un]=null}};function Ec(e){this._internalRoot=e}Ec.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vw();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tr.length&&t!==0&&t<tr[n].priority;n++);tr.splice(n,0,e),n===0&&Hw(e)}};function vm(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uv(){}function $I(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Tu(o);s.call(u)}}var o=fS(t,r,e,0,null,!1,!1,"",uv);return e._reactRootContainer=o,e[Un]=o.current,Go(e.nodeType===8?e.parentNode:e),yi(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Tu(l);a.call(u)}}var l=mm(e,0,!1,null,null,!1,!1,"",uv);return e._reactRootContainer=l,e[Un]=l.current,Go(e.nodeType===8?e.parentNode:e),yi(function(){Sc(t,l,n,r)}),l}function Cc(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Tu(o);a.call(l)}}Sc(t,o,e,i)}else o=$I(n,t,e,i,r);return Tu(o)}zw=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ho(t.pendingLanes);n!==0&&(Fp(t,n|1),vt(t,xe()),!(Q&6)&&(Ss=xe()+500,Mr()))}break;case 13:yi(function(){var r=zn(e,1);if(r!==null){var i=ot();sn(r,e,1,i)}}),gm(e,1)}};$p=function(e){if(e.tag===13){var t=zn(e,134217728);if(t!==null){var n=ot();sn(t,e,134217728,n)}gm(e,134217728)}};Bw=function(e){if(e.tag===13){var t=gr(e),n=zn(e,t);if(n!==null){var r=ot();sn(n,e,t,r)}gm(e,t)}};Vw=function(){return se};Ww=function(e,t){var n=se;try{return se=e,t()}finally{se=n}};qf=function(e,t,n){switch(t){case"input":if(zf(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=pc(r);if(!i)throw Error(k(90));Sw(r),zf(r,i)}}}break;case"textarea":xw(e,n);break;case"select":t=n.value,t!=null&&rs(e,!!n.multiple,t,!1)}};Ow=dm;Rw=yi;var jI={usingClientEntryPoint:!1,Events:[Pa,Gi,pc,Iw,Pw,dm]},no={findFiberByHostInstance:Jr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},UI={bundleType:no.bundleType,version:no.version,rendererPackageName:no.rendererPackageName,rendererConfig:no.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Dw(e),e===null?null:e.stateNode},findFiberByHostInstance:no.findFiberByHostInstance||FI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ul.isDisabled&&ul.supportsFiber)try{cc=ul.inject(UI),vn=ul}catch{}}At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jI;At.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vm(t))throw Error(k(200));return MI(e,t,null,n)};At.createRoot=function(e,t){if(!vm(e))throw Error(k(299));var n=!1,r="",i=hS;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=mm(e,1,!1,null,null,n,!1,r,i),e[Un]=t.current,Go(e.nodeType===8?e.parentNode:e),new ym(t)};At.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Dw(t),e=e===null?null:e.stateNode,e};At.flushSync=function(e){return yi(e)};At.hydrate=function(e,t,n){if(!xc(t))throw Error(k(200));return Cc(null,e,t,!0,n)};At.hydrateRoot=function(e,t,n){if(!vm(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=hS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=fS(t,null,e,1,n??null,i,!1,s,o),e[Un]=t.current,Go(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ec(t)};At.render=function(e,t,n){if(!xc(t))throw Error(k(200));return Cc(null,e,t,!1,n)};At.unmountComponentAtNode=function(e){if(!xc(e))throw Error(k(40));return e._reactRootContainer?(yi(function(){Cc(null,null,e,!1,function(){e._reactRootContainer=null,e[Un]=null})}),!0):!1};At.unstable_batchedUpdates=dm;At.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!xc(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Cc(e,t,n,!1,r)};At.version="18.2.0-next-9e3b772b8-20220608";function pS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pS)}catch(e){console.error(e)}}pS(),fw.exports=At;var mS=fw.exports,cv=mS;Df.createRoot=cv.createRoot,Df.hydrateRoot=cv.hydrateRoot;var pt=function(){return pt=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},pt.apply(this,arguments)};function _m(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function bu(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}function gS(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var zI=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,BI=gS(function(e){return zI.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),he="-ms-",Io="-moz-",te="-webkit-",yS="comm",Tc="rule",wm="decl",VI="@import",vS="@keyframes",WI="@layer",HI=Math.abs,Sm=String.fromCharCode,kh=Object.assign;function GI(e,t){return Fe(e,0)^45?(((t<<2^Fe(e,0))<<2^Fe(e,1))<<2^Fe(e,2))<<2^Fe(e,3):0}function _S(e){return e.trim()}function On(e,t){return(e=t.exec(e))?e[0]:e}function B(e,t,n){return e.replace(t,n)}function Dl(e,t){return e.indexOf(t)}function Fe(e,t){return e.charCodeAt(t)|0}function Es(e,t,n){return e.slice(t,n)}function pn(e){return e.length}function wS(e){return e.length}function mo(e,t){return t.push(e),e}function KI(e,t){return e.map(t).join("")}function dv(e,t){return e.filter(function(n){return!On(n,t)})}var bc=1,xs=1,SS=0,Wt=0,Te=0,zs="";function kc(e,t,n,r,i,s,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:bc,column:xs,length:o,return:"",siblings:a}}function Jn(e,t){return kh(kc("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function $i(e){for(;e.root;)e=Jn(e.root,{children:[e]});mo(e,e.siblings)}function qI(){return Te}function YI(){return Te=Wt>0?Fe(zs,--Wt):0,xs--,Te===10&&(xs=1,bc--),Te}function on(){return Te=Wt<SS?Fe(zs,Wt++):0,xs++,Te===10&&(xs=1,bc++),Te}function ai(){return Fe(zs,Wt)}function Ll(){return Wt}function Ic(e,t){return Es(zs,e,t)}function Ih(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function QI(e){return bc=xs=1,SS=pn(zs=e),Wt=0,[]}function XI(e){return zs="",e}function Kd(e){return _S(Ic(Wt-1,Ph(e===91?e+2:e===40?e+1:e)))}function JI(e){for(;(Te=ai())&&Te<33;)on();return Ih(e)>2||Ih(Te)>3?"":" "}function ZI(e,t){for(;--t&&on()&&!(Te<48||Te>102||Te>57&&Te<65||Te>70&&Te<97););return Ic(e,Ll()+(t<6&&ai()==32&&on()==32))}function Ph(e){for(;on();)switch(Te){case e:return Wt;case 34:case 39:e!==34&&e!==39&&Ph(Te);break;case 40:e===41&&Ph(e);break;case 92:on();break}return Wt}function eP(e,t){for(;on()&&e+Te!==47+10;)if(e+Te===42+42&&ai()===47)break;return"/*"+Ic(t,Wt-1)+"*"+Sm(e===47?e:on())}function tP(e){for(;!Ih(ai());)on();return Ic(e,Wt)}function nP(e){return XI(Ml("",null,null,null,[""],e=QI(e),0,[0],e))}function Ml(e,t,n,r,i,s,o,a,l){for(var u=0,c=0,d=o,f=0,m=0,g=0,v=1,w=1,p=1,h=0,y="",S=i,x=s,C=r,E=y;w;)switch(g=h,h=on()){case 40:if(g!=108&&Fe(E,d-1)==58){Dl(E+=B(Kd(h),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:E+=Kd(h);break;case 9:case 10:case 13:case 32:E+=JI(g);break;case 92:E+=ZI(Ll()-1,7);continue;case 47:switch(ai()){case 42:case 47:mo(rP(eP(on(),Ll()),t,n,l),l);break;default:E+="/"}break;case 123*v:a[u++]=pn(E)*p;case 125*v:case 59:case 0:switch(h){case 0:case 125:w=0;case 59+c:p==-1&&(E=B(E,/\f/g,"")),m>0&&pn(E)-d&&mo(m>32?hv(E+";",r,n,d-1,l):hv(B(E," ","")+";",r,n,d-2,l),l);break;case 59:E+=";";default:if(mo(C=fv(E,t,n,u,c,i,a,y,S=[],x=[],d,s),s),h===123)if(c===0)Ml(E,t,C,C,S,s,d,a,x);else switch(f===99&&Fe(E,3)===110?100:f){case 100:case 108:case 109:case 115:Ml(e,C,C,r&&mo(fv(e,C,C,0,0,i,a,y,i,S=[],d,x),x),i,x,d,a,r?S:x);break;default:Ml(E,C,C,C,[""],x,0,a,x)}}u=c=m=0,v=p=1,y=E="",d=o;break;case 58:d=1+pn(E),m=g;default:if(v<1){if(h==123)--v;else if(h==125&&v++==0&&YI()==125)continue}switch(E+=Sm(h),h*v){case 38:p=c>0?1:(E+="\f",-1);break;case 44:a[u++]=(pn(E)-1)*p,p=1;break;case 64:ai()===45&&(E+=Kd(on())),f=ai(),c=d=pn(y=E+=tP(Ll())),h++;break;case 45:g===45&&pn(E)==2&&(v=0)}}return s}function fv(e,t,n,r,i,s,o,a,l,u,c,d){for(var f=i-1,m=i===0?s:[""],g=wS(m),v=0,w=0,p=0;v<r;++v)for(var h=0,y=Es(e,f+1,f=HI(w=o[v])),S=e;h<g;++h)(S=_S(w>0?m[h]+" "+y:B(y,/&\f/g,m[h])))&&(l[p++]=S);return kc(e,t,n,i===0?Tc:a,l,u,c,d)}function rP(e,t,n,r){return kc(e,t,n,yS,Sm(qI()),Es(e,2,-2),0,r)}function hv(e,t,n,r,i){return kc(e,t,n,wm,Es(e,0,r),Es(e,r+1,-1),r,i)}function ES(e,t,n){switch(GI(e,t)){case 5103:return te+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return te+e+e;case 4789:return Io+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return te+e+Io+e+he+e+e;case 5936:switch(Fe(e,t+11)){case 114:return te+e+he+B(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return te+e+he+B(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return te+e+he+B(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return te+e+he+e+e;case 6165:return te+e+he+"flex-"+e+e;case 5187:return te+e+B(e,/(\w+).+(:[^]+)/,te+"box-$1$2"+he+"flex-$1$2")+e;case 5443:return te+e+he+"flex-item-"+B(e,/flex-|-self/g,"")+(On(e,/flex-|baseline/)?"":he+"grid-row-"+B(e,/flex-|-self/g,""))+e;case 4675:return te+e+he+"flex-line-pack"+B(e,/align-content|flex-|-self/g,"")+e;case 5548:return te+e+he+B(e,"shrink","negative")+e;case 5292:return te+e+he+B(e,"basis","preferred-size")+e;case 6060:return te+"box-"+B(e,"-grow","")+te+e+he+B(e,"grow","positive")+e;case 4554:return te+B(e,/([^-])(transform)/g,"$1"+te+"$2")+e;case 6187:return B(B(B(e,/(zoom-|grab)/,te+"$1"),/(image-set)/,te+"$1"),e,"")+e;case 5495:case 3959:return B(e,/(image-set\([^]*)/,te+"$1$`$1");case 4968:return B(B(e,/(.+:)(flex-)?(.*)/,te+"box-pack:$3"+he+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+te+e+e;case 4200:if(!On(e,/flex-|baseline/))return he+"grid-column-align"+Es(e,t)+e;break;case 2592:case 3360:return he+B(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,On(r.props,/grid-\w+-end/)})?~Dl(e+(n=n[t].value),"span")?e:he+B(e,"-start","")+e+he+"grid-row-span:"+(~Dl(n,"span")?On(n,/\d+/):+On(n,/\d+/)-+On(e,/\d+/))+";":he+B(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return On(r.props,/grid-\w+-start/)})?e:he+B(B(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return B(e,/(.+)-inline(.+)/,te+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(pn(e)-1-t>6)switch(Fe(e,t+1)){case 109:if(Fe(e,t+4)!==45)break;case 102:return B(e,/(.+:)(.+)-([^]+)/,"$1"+te+"$2-$3$1"+Io+(Fe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Dl(e,"stretch")?ES(B(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return B(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return he+i+":"+s+u+(o?he+i+"-span:"+(a?l:+l-+s)+u:"")+e});case 4949:if(Fe(e,t+6)===121)return B(e,":",":"+te)+e;break;case 6444:switch(Fe(e,Fe(e,14)===45?18:11)){case 120:return B(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+te+(Fe(e,14)===45?"inline-":"")+"box$3$1"+te+"$2$3$1"+he+"$2box$3")+e;case 100:return B(e,":",":"+he)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return B(e,"scroll-","scroll-snap-")+e}return e}function ku(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function iP(e,t,n,r){switch(e.type){case WI:if(e.children.length)break;case VI:case wm:return e.return=e.return||e.value;case yS:return"";case vS:return e.return=e.value+"{"+ku(e.children,r)+"}";case Tc:if(!pn(e.value=e.props.join(",")))return""}return pn(n=ku(e.children,r))?e.return=e.value+"{"+n+"}":""}function sP(e){var t=wS(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}function oP(e){return function(t){t.root||(t=t.return)&&e(t)}}function aP(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case wm:e.return=ES(e.value,e.length,n);return;case vS:return ku([Jn(e,{value:B(e.value,"@","@"+te)})],r);case Tc:if(e.length)return KI(n=e.props,function(i){switch(On(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":$i(Jn(e,{props:[B(i,/:(read-\w+)/,":"+Io+"$1")]})),$i(Jn(e,{props:[i]})),kh(e,{props:dv(n,r)});break;case"::placeholder":$i(Jn(e,{props:[B(i,/:(plac\w+)/,":"+te+"input-$1")]})),$i(Jn(e,{props:[B(i,/:(plac\w+)/,":"+Io+"$1")]})),$i(Jn(e,{props:[B(i,/:(plac\w+)/,he+"input-$1")]})),$i(Jn(e,{props:[i]})),kh(e,{props:dv(n,r)});break}return""})}}var xS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Cs=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Em=typeof window<"u"&&"HTMLElement"in window,lP=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Pc=Object.freeze([]),Ts=Object.freeze({});function uP(e,t,n){return n===void 0&&(n=Ts),e.theme!==n.theme&&e.theme||t||n.theme}var CS=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),cP=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,dP=/(^-|-$)/g;function pv(e){return e.replace(cP,"-").replace(dP,"")}var fP=/(a)(d)/gi,mv=function(e){return String.fromCharCode(e+(e>25?39:97))};function Oh(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=mv(t%52)+n;return(mv(t%52)+n).replace(fP,"$1-$2")}var qd,Zi=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},TS=function(e){return Zi(5381,e)};function hP(e){return Oh(TS(e)>>>0)}function pP(e){return e.displayName||e.name||"Component"}function Yd(e){return typeof e=="string"&&!0}var bS=typeof Symbol=="function"&&Symbol.for,kS=bS?Symbol.for("react.memo"):60115,mP=bS?Symbol.for("react.forward_ref"):60112,gP={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},yP={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},IS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},vP=((qd={})[mP]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},qd[kS]=IS,qd);function gv(e){return("type"in(t=e)&&t.type.$$typeof)===kS?IS:"$$typeof"in e?vP[e.$$typeof]:gP;var t}var _P=Object.defineProperty,wP=Object.getOwnPropertyNames,yv=Object.getOwnPropertySymbols,SP=Object.getOwnPropertyDescriptor,EP=Object.getPrototypeOf,vv=Object.prototype;function PS(e,t,n){if(typeof t!="string"){if(vv){var r=EP(t);r&&r!==vv&&PS(e,r,n)}var i=wP(t);yv&&(i=i.concat(yv(t)));for(var s=gv(e),o=gv(t),a=0;a<i.length;++a){var l=i[a];if(!(l in yP||n&&n[l]||o&&l in o||s&&l in s)){var u=SP(t,l);try{_P(e,l,u)}catch{}}}}return e}function bs(e){return typeof e=="function"}function xm(e){return typeof e=="object"&&"styledComponentId"in e}function ti(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function _v(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function ta(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Rh(e,t,n){if(n===void 0&&(n=!1),!n&&!ta(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Rh(e[r],t[r]);else if(ta(t))for(var r in t)e[r]=Rh(e[r],t[r]);return e}function Cm(e,t){Object.defineProperty(e,"toString",{value:t})}function Ra(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var xP=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;t>=s;)if((s<<=1)<0)throw Ra(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},e}(),Fl=new Map,Iu=new Map,Qd=1,cl=function(e){if(Fl.has(e))return Fl.get(e);for(;Iu.has(Qd);)Qd++;var t=Qd++;return Fl.set(e,t),Iu.set(t,e),t},CP=function(e,t){Fl.set(e,t),Iu.set(t,e)},TP="style[".concat(Cs,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),bP=new RegExp("^".concat(Cs,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),kP=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},IP=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(bP);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(CP(c,u),kP(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function PP(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var OS=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Cs,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Cs,"active"),r.setAttribute("data-styled-version","6.0.7");var o=PP();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},OP=function(){function e(t){this.element=OS(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Ra(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),RP=function(){function e(t){this.element=OS(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),NP=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),wv=Em,AP={isServer:!Em,useCSSOMInjection:!lP},RS=function(){function e(t,n,r){t===void 0&&(t=Ts),n===void 0&&(n={});var i=this;this.options=pt(pt({},AP),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Em&&wv&&(wv=!1,function(s){for(var o=document.querySelectorAll(TP),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Cs)!=="active"&&(IP(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Cm(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(d){var f=function(p){return Iu.get(p)}(d);if(f===void 0)return"continue";var m=s.names.get(f),g=o.getGroup(d);if(m===void 0||g.length===0)return"continue";var v="".concat(Cs,".g").concat(d,'[id="').concat(f,'"]'),w="";m!==void 0&&m.forEach(function(p){p.length>0&&(w+="".concat(p,","))}),l+="".concat(g).concat(v,'{content:"').concat(w,'"}').concat(`/*!sc*/
`)},c=0;c<a;c++)u(c);return l}(i)})}return e.registerId=function(t){return cl(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(pt(pt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new NP(i):r?new OP(i):new RP(i)}(this.options),new xP(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(cl(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(cl(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(cl(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),DP=/&/g,LP=/^\s*\/\/.*$/gm;function NS(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=NS(n.children,t)),n})}function MP(e){var t,n,r,i=e===void 0?Ts:e,s=i.options,o=s===void 0?Ts:s,a=i.plugins,l=a===void 0?Pc:a,u=function(f,m,g){return g===n||g.startsWith(n)&&g.endsWith(n)&&g.replaceAll(n,"").length>0?".".concat(t):f},c=l.slice();c.push(function(f){f.type===Tc&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(DP,n).replace(r,u))}),o.prefix&&c.push(aP),c.push(iP);var d=function(f,m,g,v){m===void 0&&(m=""),g===void 0&&(g=""),v===void 0&&(v="&"),t=v,n=m,r=new RegExp("\\".concat(n,"\\b"),"g");var w=f.replace(LP,""),p=nP(g||m?"".concat(g," ").concat(m," { ").concat(w," }"):w);o.namespace&&(p=NS(p,o.namespace));var h=[];return ku(p,sP(c.concat(oP(function(y){return h.push(y)})))),h};return d.hash=l.length?l.reduce(function(f,m){return m.name||Ra(15),Zi(f,m.name)},5381).toString():"",d}var FP=new RS,Nh=MP(),AS=st.createContext({shouldForwardProp:void 0,styleSheet:FP,stylis:Nh});AS.Consumer;st.createContext(void 0);function Sv(){return T.useContext(AS)}var $P=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Nh);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Cm(this,function(){throw Ra(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Nh),this.name+t.hash},e}(),jP=function(e){return e>="A"&&e<="Z"};function Ev(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;jP(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var DS=function(e){return e==null||e===!1||e===""},LS=function(e){var t,n,r=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!DS(s)&&(Array.isArray(s)&&s.isCss||bs(s)?r.push("".concat(Ev(i),":"),s,";"):ta(s)?r.push.apply(r,bu(bu(["".concat(i," {")],LS(s),!1),["}"],!1)):r.push("".concat(Ev(i),": ").concat((t=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in xS||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function li(e,t,n,r){if(DS(e))return[];if(xm(e))return[".".concat(e.styledComponentId)];if(bs(e)){if(!bs(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return li(i,t,n,r)}var s;return e instanceof $P?n?(e.inject(n,r),[e.getName(r)]):[e]:ta(e)?LS(e):Array.isArray(e)?Array.prototype.concat.apply(Pc,e.map(function(o){return li(o,t,n,r)})):[e.toString()]}function UP(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(bs(n)&&!xm(n))return!1}return!0}var zP=TS("6.0.7"),BP=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&UP(t),this.componentId=n,this.baseHash=Zi(zP,n),this.baseStyle=r,RS.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ti(i,this.staticRulesId);else{var s=_v(li(this.rules,t,n,r)),o=Oh(Zi(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=ti(i,o),this.staticRulesId=o}else{for(var l=Zi(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var f=_v(li(d,t,n,r));l=Zi(l,f),u+=f}}if(u){var m=Oh(l>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,r(u,".".concat(m),void 0,this.componentId)),i=ti(i,m)}}return i},e}(),MS=st.createContext(void 0);MS.Consumer;var Xd={};function VP(e,t,n){var r=xm(e),i=e,s=!Yd(e),o=t.attrs,a=o===void 0?Pc:o,l=t.componentId,u=l===void 0?function(y,S){var x=typeof y!="string"?"sc":pv(y);Xd[x]=(Xd[x]||0)+1;var C="".concat(x,"-").concat(hP("6.0.7"+x+Xd[x]));return S?"".concat(S,"-").concat(C):C}(t.displayName,t.parentComponentId):l,c=t.displayName;c===void 0&&function(y){return Yd(y)?"styled.".concat(y):"Styled(".concat(pP(y),")")}(e);var d=t.displayName&&t.componentId?"".concat(pv(t.displayName),"-").concat(t.componentId):t.componentId||u,f=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,m=t.shouldForwardProp;if(r&&i.shouldForwardProp){var g=i.shouldForwardProp;if(t.shouldForwardProp){var v=t.shouldForwardProp;m=function(y,S){return g(y,S)&&v(y,S)}}else m=g}var w=new BP(n,d,r?i.componentStyle:void 0);function p(y,S){return function(x,C,E){var P=x.attrs,M=x.componentStyle,L=x.defaultProps,V=x.foldedComponentIds,ut=x.styledComponentId,q=x.target,Ie=st.useContext(MS),Cn=Sv(),Tn=x.shouldForwardProp||Cn.shouldForwardProp,ct=function(Mt,ze,nt){for(var qe,Ye=pt(pt({},ze),{className:void 0,theme:nt}),Mi=0;Mi<Mt.length;Mi+=1){var Br=bs(qe=Mt[Mi])?qe(Ye):qe;for(var Gt in Br)Ye[Gt]=Gt==="className"?ti(Ye[Gt],Br[Gt]):Gt==="style"?pt(pt({},Ye[Gt]),Br[Gt]):Br[Gt]}return ze.className&&(Ye.className=ti(Ye.className,ze.className)),Ye}(P,C,uP(C,Ie,L)||Ts),O=ct.as||q,$={};for(var j in ct)ct[j]===void 0||j[0]==="$"||j==="as"||j==="theme"||(j==="forwardedAs"?$.as=ct.forwardedAs:Tn&&!Tn(j,O)||($[j]=ct[j]));var ne=function(Mt,ze){var nt=Sv(),qe=Mt.generateAndInjectStyles(ze,nt.styleSheet,nt.stylis);return qe}(M,ct),re=ti(V,ut);return ne&&(re+=" "+ne),ct.className&&(re+=" "+ct.className),$[Yd(O)&&!CS.has(O)?"class":"className"]=re,$.ref=E,T.createElement(O,$)}(h,y,S)}var h=st.forwardRef(p);return h.attrs=f,h.componentStyle=w,h.shouldForwardProp=m,h.foldedComponentIds=r?ti(i.foldedComponentIds,i.styledComponentId):"",h.styledComponentId=d,h.target=r?i.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?function(S){for(var x=[],C=1;C<arguments.length;C++)x[C-1]=arguments[C];for(var E=0,P=x;E<P.length;E++)Rh(S,P[E],!0);return S}({},i.defaultProps,y):y}}),Cm(h,function(){return".".concat(h.styledComponentId)}),s&&PS(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function xv(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Cv=function(e){return Object.assign(e,{isCss:!0})};function WP(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(bs(e)||ta(e)){var r=e;return Cv(li(xv(Pc,bu([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?li(i):Cv(li(xv(i,t)))}function Ah(e,t,n){if(n===void 0&&(n=Ts),!t)throw Ra(1,t);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return e(t,n,WP.apply(void 0,bu([i],s,!1)))};return r.attrs=function(i){return Ah(e,t,pt(pt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Ah(e,t,pt(pt({},n),i))},r}var FS=function(e){return Ah(VP,e)},U=FS;CS.forEach(function(e){U[e]=FS(e)});const HP=U.header`
  padding: 20px 0px;
`,GP=U.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
`,KP=U.svg`
  width: 28px;
  height: 28px;
`,qP=U(ba)`
  display: flex;
  gap: 0px 8px;
  align-items: center;
`,YP=U.span`
  color: #121417;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 120% */
  letter-spacing: -0.4px;
`,QP=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0px 16px;
`,XP=U(ba)`
  display: flex;
  align-items: center;
  gap: 0px 8px;

  color: var(--secondary);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25;
`,JP=U.button`
  color: var(--background);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25;

  padding: 14px 39px;
  border-radius: 12px;
  background: var(--secondary);
  border: none;
`,$S=U.svg`
  stroke: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  width: 20px;
  height: 20px;
`,ZP=U.div`
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
`;function Po({children:e,onClose:t}){T.useEffect(()=>window.addEventListener("keydown",n),[]),T.useLayoutEffect(()=>()=>{window.removeEventListener("keydown",n)},[]);const n=i=>{i.code==="Escape"&&t(!1)},r=i=>{i.currentTarget===i.target&&t(!1)};return mS.createPortal(_.jsx(ZP,{onClick:r,children:e}),document.getElementById("modal-root"))}function Pi(e){this._maxSize=e,this.clear()}Pi.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Pi.prototype.get=function(e){return this._values[e]};Pi.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var eO=/[^.^\]^[]+|(?=\[\]|\.\.)/g,jS=/^\d+$/,tO=/^\d/,nO=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,rO=/^\s*(['"]?)(.*?)(\1)\s*$/,Tm=512,Tv=new Pi(Tm),bv=new Pi(Tm),kv=new Pi(Tm),ui={Cache:Pi,split:Dh,normalizePath:Jd,setter:function(e){var t=Jd(e);return bv.get(e)||bv.set(e,function(r,i){for(var s=0,o=t.length,a=r;s<o-1;){var l=t[s];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;a=a[t[s++]]}a[t[s]]=i})},getter:function(e,t){var n=Jd(e);return kv.get(e)||kv.set(e,function(i){for(var s=0,o=n.length;s<o;)if(i!=null||!t)i=i[n[s++]];else return;return i})},join:function(e){return e.reduce(function(t,n){return t+(bm(n)||jS.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){iO(Array.isArray(e)?e:Dh(e),t,n)}};function Jd(e){return Tv.get(e)||Tv.set(e,Dh(e).map(function(t){return t.replace(rO,"$2")}))}function Dh(e){return e.match(eO)||[""]}function iO(e,t,n){var r=e.length,i,s,o,a;for(s=0;s<r;s++)i=e[s],i&&(aO(i)&&(i='"'+i+'"'),a=bm(i),o=!a&&/^\d+$/.test(i),t.call(n,i,a,o,s,e))}function bm(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function sO(e){return e.match(tO)&&!e.match(jS)}function oO(e){return nO.test(e)}function aO(e){return!bm(e)&&(sO(e)||oO(e))}const lO=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Oc=e=>e.match(lO)||[],Rc=e=>e[0].toUpperCase()+e.slice(1),km=(e,t)=>Oc(e).join(t).toLowerCase(),US=e=>Oc(e).reduce((t,n)=>`${t}${t?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),uO=e=>Rc(US(e)),cO=e=>km(e,"_"),dO=e=>km(e,"-"),fO=e=>Rc(km(e," ")),hO=e=>Oc(e).map(Rc).join(" ");var Zd={words:Oc,upperFirst:Rc,camelCase:US,pascalCase:uO,snakeCase:cO,kebabCase:dO,sentenceCase:fO,titleCase:hO},Im={exports:{}};Im.exports=function(e){return zS(pO(e),e)};Im.exports.array=zS;function zS(e,t){var n=e.length,r=new Array(n),i={},s=n,o=mO(t),a=gO(e);for(t.forEach(function(u){if(!a.has(u[0])||!a.has(u[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});s--;)i[s]||l(e[s],s,new Set);return r;function l(u,c,d){if(d.has(u)){var f;try{f=", node was:"+JSON.stringify(u)}catch{f=""}throw new Error("Cyclic dependency"+f)}if(!a.has(u))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(u));if(!i[c]){i[c]=!0;var m=o.get(u)||new Set;if(m=Array.from(m),c=m.length){d.add(u);do{var g=m[--c];l(g,a.get(g),d)}while(c);d.delete(u)}r[--n]=u}}}function pO(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var i=e[n];t.add(i[0]),t.add(i[1])}return Array.from(t)}function mO(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var i=e[n];t.has(i[0])||t.set(i[0],new Set),t.has(i[1])||t.set(i[1],new Set),t.get(i[0]).add(i[1])}return t}function gO(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}var yO=Im.exports;const vO=_p(yO),_O=Object.prototype.toString,wO=Error.prototype.toString,SO=RegExp.prototype.toString,EO=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",xO=/^Symbol\((.*)\)(.*)$/;function CO(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function Iv(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return CO(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return EO.call(e).replace(xO,"Symbol($1)");const r=_O.call(e).slice(8,-1);return r==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):r==="Error"||e instanceof Error?"["+wO.call(e)+"]":r==="RegExp"?SO.call(e):null}function vr(e,t){let n=Iv(e,t);return n!==null?n:JSON.stringify(e,function(r,i){let s=Iv(this[r],t);return s!==null?s:i},2)}function BS(e){return e==null?[]:[].concat(e)}let VS,TO=/\$\{\s*(\w+)\s*\}/g;VS=Symbol.toStringTag;class ft extends Error{static formatError(t,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof t=="string"?t.replace(TO,(i,s)=>vr(n[s])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,r,i,s){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this[VS]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],BS(t).forEach(o=>{if(ft.isError(o)){this.errors.push(...o.errors);const a=o.inner.length?o.inner:[o];this.inner.push(...a)}else this.errors.push(o)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],!s&&Error.captureStackTrace&&Error.captureStackTrace(this,ft)}}let hn={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${vr(r,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${vr(n,!0)}\``+i:`${e} must match the configured type. The validated value was: \`${vr(n,!0)}\``+i}},qt={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},bO={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},Lh={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},kO={isValue:"${path} field must be ${value}"},Mh={noUnknown:"${path} field has unspecified keys: ${unknown}"},IO={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},PO={notType:e=>{const{path:t,value:n,spec:r}=e,i=r.types.length;if(Array.isArray(n)){if(n.length<i)return`${t} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${vr(n,!0)}\``;if(n.length>i)return`${t} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${vr(n,!0)}\``}return ft.formatError(hn.notType,e)}};Object.assign(Object.create(null),{mixed:hn,string:qt,number:bO,date:Lh,object:Mh,array:IO,boolean:kO,tuple:PO});const Pm=e=>e&&e.__isYupSchema__;class Pu{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:s}=n,o=typeof r=="function"?r:(...a)=>a.every(l=>l===r);return new Pu(t,(a,l)=>{var u;let c=o(...a)?i:s;return(u=c==null?void 0:c(l))!=null?u:l})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let r=this.refs.map(s=>s.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,t,n);if(i===void 0||i===t)return t;if(!Pm(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const dl={context:"$",value:"."};class Oi{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===dl.context,this.isValue=this.key[0]===dl.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?dl.context:this.isValue?dl.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&ui.getter(this.path,!0),this.map=n.map}getValue(t,n,r){let i=this.isContext?r:this.isValue?t:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}Oi.prototype.__isYupRef=!0;const ni=e=>e==null;function ji(e){function t({value:n,path:r="",options:i,originalValue:s,schema:o},a,l){const{name:u,test:c,params:d,message:f,skipAbsent:m}=e;let{parent:g,context:v,abortEarly:w=o.spec.abortEarly,disableStackTrace:p=o.spec.disableStackTrace}=i;function h(V){return Oi.isRef(V)?V.getValue(n,g,v):V}function y(V={}){var ut;const q=Object.assign({value:n,originalValue:s,label:o.spec.label,path:V.path||r,spec:o.spec},d,V.params);for(const Cn of Object.keys(q))q[Cn]=h(q[Cn]);const Ie=new ft(ft.formatError(V.message||f,q),n,q.path,V.type||u,(ut=V.disableStackTrace)!=null?ut:p);return Ie.params=q,Ie}const S=w?a:l;let x={path:r,parent:g,type:u,from:i.from,createError:y,resolve:h,options:i,originalValue:s,schema:o};const C=V=>{ft.isError(V)?S(V):V?l(null):S(y())},E=V=>{ft.isError(V)?S(V):a(V)};if(m&&ni(n))return C(!0);let M;try{var L;if(M=c.call(x,n,x),typeof((L=M)==null?void 0:L.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${x.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(M).then(C,E)}}catch(V){E(V);return}C(M)}return t.OPTIONS=e,t}function OO(e,t,n,r=n){let i,s,o;return t?(ui.forEach(t,(a,l,u)=>{let c=l?a.slice(1,a.length-1):a;e=e.resolve({context:r,parent:i,value:n});let d=e.type==="tuple",f=u?parseInt(c,10):0;if(e.innerType||d){if(d&&!u)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);if(n&&f>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${t}. because there is no value at that index. `);i=n,n=n&&n[f],e=d?e.spec.types[f]:e.innerType}if(!u){if(!e.fields||!e.fields[c])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${o} which is a type: "${e.type}")`);i=n,n=n&&n[c],e=e.fields[c]}s=c,o=l?"["+a+"]":"."+a}),{schema:e,parent:i,parentPath:s}):{parent:i,parentPath:t,schema:e}}class Ou extends Set{describe(){const t=[];for(const n of this.values())t.push(Oi.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const r of this.values())n.push(t(r));return n}clone(){return new Ou(this.values())}merge(t,n){const r=this.clone();return t.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function es(e,t=new Map){if(Pm(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=es(e[r],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[r,i]of e.entries())n.set(r,es(i,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const r of e)n.add(es(r,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[r,i]of Object.entries(e))n[r]=es(i,t)}else throw Error(`Unable to clone ${e}`);return n}class Sn{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new Ou,this._blacklist=new Ou,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(hn.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=es(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let r=t(this);return this._mutate=n,r}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,r=t.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),r._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(s=>{t.tests.forEach(o=>{s.test(o.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,s)=>s.resolve(i,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,r,i,s;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(r=t.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=t.recursive)!=null?i:this.spec.recursive,disableStackTrace:(s=t.disableStackTrace)!=null?s:this.spec.disableStackTrace})}cast(t,n={}){let r=this.resolve(Object.assign({value:t},n)),i=n.assert==="ignore-optionality",s=r._cast(t,n);if(n.assert!==!1&&!r.isType(s)){if(i&&ni(s))return s;let o=vr(t),a=vr(s);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${o} 
`+(a!==o?`result of cast: ${a}`:""))}return s}_cast(t,n){let r=t===void 0?t:this.transforms.reduce((i,s)=>s.call(this,i,t,this),t);return r===void 0&&(r=this.getDefault(n)),r}_validate(t,n={},r,i){let{path:s,originalValue:o=t,strict:a=this.spec.strict}=n,l=t;a||(l=this._cast(l,Object.assign({assert:!1},n)));let u=[];for(let c of Object.values(this.internalTests))c&&u.push(c);this.runTests({path:s,value:l,originalValue:o,options:n,tests:u},r,c=>{if(c.length)return i(c,l);this.runTests({path:s,value:l,originalValue:o,options:n,tests:this.tests},r,i)})}runTests(t,n,r){let i=!1,{tests:s,value:o,originalValue:a,path:l,options:u}=t,c=v=>{i||(i=!0,n(v,o))},d=v=>{i||(i=!0,r(v,o))},f=s.length,m=[];if(!f)return d([]);let g={value:o,originalValue:a,path:l,options:u,schema:this};for(let v=0;v<s.length;v++){const w=s[v];w(g,c,function(h){h&&(Array.isArray(h)?m.push(...h):m.push(h)),--f<=0&&d(m)})}}asNestedTest({key:t,index:n,parent:r,parentPath:i,originalParent:s,options:o}){const a=t??n;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof a=="number";let u=r[a];const c=Object.assign({},o,{strict:!0,parent:r,value:u,originalValue:s[a],key:void 0,[l?"index":"key"]:a,path:l||a.includes(".")?`${i||""}[${u?a:`"${a}"`}]`:(i?`${i}.`:"")+t});return(d,f,m)=>this.resolve(c)._validate(u,c,f,m)}validate(t,n){var r;let i=this.resolve(Object.assign({},n,{value:t})),s=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return new Promise((o,a)=>i._validate(t,n,(l,u)=>{ft.isError(l)&&(l.value=u),a(l)},(l,u)=>{l.length?a(new ft(l,u,void 0,void 0,s)):o(u)}))}validateSync(t,n){var r;let i=this.resolve(Object.assign({},n,{value:t})),s,o=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return i._validate(t,Object.assign({},n,{sync:!0}),(a,l)=>{throw ft.isError(a)&&(a.value=l),a},(a,l)=>{if(a.length)throw new ft(a,t,void 0,void 0,o);s=l}),s}isValid(t,n){return this.validate(t,n).then(()=>!0,r=>{if(ft.isError(r))return!1;throw r})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(r){if(ft.isError(r))return!1;throw r}}_getDefault(t){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,t):es(n)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const r=this.clone({nullable:t});return r.internalTests.nullable=ji({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(t,n){const r=this.clone({optional:t});return r.internalTests.optionality=ji({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(t=hn.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=hn.notNull){return this.nullability(!1,t)}required(t=hn.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=hn.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=ji(n),s=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(o=>!(o.OPTIONS.name===n.name&&(s||o.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let r=this.clone(),i=BS(t).map(s=>new Oi(s));return i.forEach(s=>{s.isSibling&&r.deps.push(s.key)}),r.conditions.push(typeof n=="function"?new Pu(i,n):Pu.fromOptions(i,n)),r}typeError(t){let n=this.clone();return n.internalTests.typeError=ji({message:t,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(t,n=hn.oneOf){let r=this.clone();return t.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=ji({message:n,name:"oneOf",skipAbsent:!0,test(i){let s=this.schema._whitelist,o=s.resolveAll(this.resolve);return o.includes(i)?!0:this.createError({params:{values:Array.from(s).join(", "),resolved:o}})}}),r}notOneOf(t,n=hn.notOneOf){let r=this.clone();return t.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=ji({message:n,name:"notOneOf",test(i){let s=this.schema._blacklist,o=s.resolveAll(this.resolve);return o.includes(i)?this.createError({params:{values:Array.from(s).join(", "),resolved:o}}):!0}}),r}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:r,meta:i,optional:s,nullable:o}=n.spec;return{meta:i,label:r,optional:s,nullable:o,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,u,c)=>c.findIndex(d=>d.name===l.name)===u)}}}Sn.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])Sn.prototype[`${e}At`]=function(t,n,r={}){const{parent:i,parentPath:s,schema:o}=OO(this,t,n,r.context);return o[e](i&&i[s],Object.assign({},r,{parent:i,path:t}))};for(const e of["equals","is"])Sn.prototype[e]=Sn.prototype.oneOf;for(const e of["not","nope"])Sn.prototype[e]=Sn.prototype.notOneOf;let RO=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,NO=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,AO=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,DO=e=>ni(e)||e===e.trim(),LO={}.toString();function us(){return new WS}class WS extends Sn{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(!r.spec.coerce||r.isType(t)||Array.isArray(t))return t;const i=t!=null&&t.toString?t.toString():t;return i===LO?t:i})})}required(t){return super.required(t).withMutation(n=>n.test({message:t||hn.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(n=>n.OPTIONS.name!=="required"),t))}length(t,n=qt.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(r){return r.length===this.resolve(t)}})}min(t,n=qt.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r.length>=this.resolve(t)}})}max(t,n=qt.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:t},skipAbsent:!0,test(r){return r.length<=this.resolve(t)}})}matches(t,n){let r=!1,i,s;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:s}=n:i=n),this.test({name:s||"matches",message:i||qt.matches,params:{regex:t},skipAbsent:!0,test:o=>o===""&&r||o.search(t)!==-1})}email(t=qt.email){return this.matches(RO,{name:"email",message:t,excludeEmptyString:!0})}url(t=qt.url){return this.matches(NO,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=qt.uuid){return this.matches(AO,{name:"uuid",message:t,excludeEmptyString:!1})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=qt.trim){return this.transform(n=>n!=null?n.trim():n).test({message:t,name:"trim",test:DO})}lowercase(t=qt.lowercase){return this.transform(n=>ni(n)?n:n.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>ni(n)||n===n.toLowerCase()})}uppercase(t=qt.uppercase){return this.transform(n=>ni(n)?n:n.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>ni(n)||n===n.toUpperCase()})}}us.prototype=WS.prototype;const MO=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function kn(e,t=0){return Number(e)||t}function FO(e){const t=MO.exec(e);if(!t)return Date.parse?Date.parse(e):Number.NaN;const n={year:kn(t[1]),month:kn(t[2],1)-1,day:kn(t[3],1),hour:kn(t[4]),minute:kn(t[5]),second:kn(t[6]),millisecond:t[7]?kn(t[7].substring(0,3)):0,z:t[8]||void 0,plusMinus:t[9]||void 0,hourOffset:kn(t[10]),minuteOffset:kn(t[11])};if(n.z===void 0&&n.plusMinus===void 0)return new Date(n.year,n.month,n.day,n.hour,n.minute,n.second,n.millisecond).valueOf();let r=0;return n.z!=="Z"&&n.plusMinus!==void 0&&(r=n.hourOffset*60+n.minuteOffset,n.plusMinus==="+"&&(r=0-r)),Date.UTC(n.year,n.month,n.day,n.hour,n.minute+r,n.second,n.millisecond)}let $O=new Date(""),jO=e=>Object.prototype.toString.call(e)==="[object Date]";class Nc extends Sn{constructor(){super({type:"date",check(t){return jO(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n,r)=>!r.spec.coerce||r.isType(t)||t===null?t:(t=FO(t),isNaN(t)?Nc.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let r;if(Oi.isRef(t))r=t;else{let i=this.cast(t);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(t,n=Lh.min){let r=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(t,n=Lh.max){let r=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}Nc.INVALID_DATE=$O;Nc.prototype;function UO(e,t=[]){let n=[],r=new Set,i=new Set(t.map(([o,a])=>`${o}-${a}`));function s(o,a){let l=ui.split(o)[0];r.add(l),i.has(`${a}-${l}`)||n.push([a,l])}for(const o of Object.keys(e)){let a=e[o];r.add(o),Oi.isRef(a)&&a.isSibling?s(a.path,o):Pm(a)&&"deps"in a&&a.deps.forEach(l=>s(l,o))}return vO.array(Array.from(r),n).reverse()}function Pv(e,t){let n=1/0;return e.some((r,i)=>{var s;if((s=t.path)!=null&&s.includes(r))return n=i,!0}),n}function HS(e){return(t,n)=>Pv(e,t)-Pv(e,n)}const zO=(e,t,n)=>{if(typeof e!="string")return e;let r=e;try{r=JSON.parse(e)}catch{}return n.isType(r)?r:e};function $l(e){if("fields"in e){const t={};for(const[n,r]of Object.entries(e.fields))t[n]=$l(r);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=$l(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map($l)}):"optional"in e?e.optional():e}const BO=(e,t)=>{const n=[...ui.normalizePath(t)];if(n.length===1)return n[0]in e;let r=n.pop(),i=ui.getter(ui.join(n),!0)(e);return!!(i&&r in i)};let Ov=e=>Object.prototype.toString.call(e)==="[object Object]";function VO(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter(r=>n.indexOf(r)===-1)}const WO=HS([]);function Om(e){return new GS(e)}class GS extends Sn{constructor(t){super({type:"object",check(n){return Ov(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=WO,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,n={}){var r;let i=super._cast(t,n);if(i===void 0)return this.getDefault(n);if(!this._typeCheck(i))return i;let s=this.fields,o=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(i).filter(d=>!this._nodes.includes(d))),l={},u=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),c=!1;for(const d of a){let f=s[d],m=d in i;if(f){let g,v=i[d];u.path=(n.path?`${n.path}.`:"")+d,f=f.resolve({value:v,context:n.context,parent:l});let w=f instanceof Sn?f.spec:void 0,p=w==null?void 0:w.strict;if(w!=null&&w.strip){c=c||d in i;continue}g=!n.__validating||!p?f.cast(i[d],u):i[d],g!==void 0&&(l[d]=g)}else m&&!o&&(l[d]=i[d]);(m!==d in l||l[d]!==i[d])&&(c=!0)}return c?l:i}_validate(t,n={},r,i){let{from:s=[],originalValue:o=t,recursive:a=this.spec.recursive}=n;n.from=[{schema:this,value:o},...s],n.__validating=!0,n.originalValue=o,super._validate(t,n,r,(l,u)=>{if(!a||!Ov(u)){i(l,u);return}o=o||u;let c=[];for(let d of this._nodes){let f=this.fields[d];!f||Oi.isRef(f)||c.push(f.asNestedTest({options:n,key:d,parent:u,parentPath:n.path,originalParent:o}))}this.runTests({tests:c,value:u,originalValue:o,options:n},r,d=>{i(d.sort(this._sortErrors).concat(l),u)})})}clone(t){const n=super.clone(t);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(t){let n=super.concat(t),r=n.fields;for(let[i,s]of Object.entries(this.fields)){const o=r[i];r[i]=o===void 0?s:o}return n.withMutation(i=>i.setFields(r,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var i;const s=this.fields[r];let o=t;(i=o)!=null&&i.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[r]})),n[r]=s&&"getDefault"in s?s.getDefault(o):void 0}),n}setFields(t,n){let r=this.clone();return r.fields=t,r._nodes=UO(t,n),r._sortErrors=HS(Object.keys(t)),n&&(r._excludedEdges=n),r}shape(t,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,t),i)})}partial(){const t={};for(const[n,r]of Object.entries(this.fields))t[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(t)}deepPartial(){return $l(this)}pick(t){const n={};for(const r of t)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,i])=>t.includes(r)&&t.includes(i)))}omit(t){const n=[];for(const r of Object.keys(this.fields))t.includes(r)||n.push(r);return this.pick(n)}from(t,n,r){let i=ui.getter(t,!0);return this.transform(s=>{if(!s)return s;let o=s;return BO(s,t)&&(o=Object.assign({},s),r||delete o[t],o[n]=i(s)),o})}json(){return this.transform(zO)}noUnknown(t=!0,n=Mh.noUnknown){typeof t!="boolean"&&(n=t,t=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const s=VO(this.schema,i);return!t||s.length===0||this.createError({params:{unknown:s.join(", ")}})}});return r.spec.noUnknown=t,r}unknown(t=!0,n=Mh.noUnknown){return this.noUnknown(!t,n)}transformKeys(t){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[t(i)]=n[i];return r})}camelCase(){return this.transformKeys(Zd.camelCase)}snakeCase(){return this.transformKeys(Zd.snakeCase)}constantCase(){return this.transformKeys(t=>Zd.snakeCase(t).toUpperCase())}describe(t){const n=(t?this.resolve(t):this).clone(),r=super.describe(t);r.fields={};for(const[s,o]of Object.entries(n.fields)){var i;let a=t;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[s]})),r.fields[s]=o.describe(a)}return r}}Om.prototype=GS.prototype;const HO=U.form`
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
`,ef=U.div`
  margin-bottom: 14px;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 18px;
  }
`;U.div`
  margin-bottom: 40px;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
`;const GO=U.h2`
  line-height: 1.2;
  letter-spacing: -0.8px;
  font-weight: 500;
  margin-bottom: 20px;
  color: var(--secondar);
  @media (min-width: 768px) {
    font-size: 40px;
  }
`,KO=U.p`
  width: 438px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.38;
  margin-bottom: 40px;
  color: rgba(18, 20, 23, 0.8);
`,tf=U.p`
  margin-left: 15px;
  font-size: 12px;
  font-weight: 400;
  color: var(--red);
`,qO=U.button`
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
`,nf=U.input`
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
`,YO=U.button`
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
`,QO=U.button`
  position: absolute;
  top: 20px;
  right: 20px;

  background-color: transparent;
  border: none;
`;U.svg`
  stroke: var(--secondary);
  fill: none;
  width: 24px;
  height: 24px;
`;const XO=U.svg`
  stroke: var(--secondary);
  fill: none;
  width: 32px;
  height: 32px;
`,Rv=U.svg`
  stroke: var(--secondary);
  fill: none;
  display: inline-block;
  width: 24px;
  height: 24px;
`;var JO=function(t){return ZO(t)&&!eR(t)};function ZO(e){return!!e&&typeof e=="object"}function eR(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||rR(e)}var tR=typeof Symbol=="function"&&Symbol.for,nR=tR?Symbol.for("react.element"):60103;function rR(e){return e.$$typeof===nR}function iR(e){return Array.isArray(e)?[]:{}}function Ru(e,t){return t.clone!==!1&&t.isMergeableObject(e)?na(iR(e),e,t):e}function sR(e,t,n){return e.concat(t).map(function(r){return Ru(r,n)})}function oR(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach(function(i){r[i]=Ru(e[i],n)}),Object.keys(t).forEach(function(i){!n.isMergeableObject(t[i])||!e[i]?r[i]=Ru(t[i],n):r[i]=na(e[i],t[i],n)}),r}function na(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||sR,n.isMergeableObject=n.isMergeableObject||JO;var r=Array.isArray(t),i=Array.isArray(e),s=r===i;return s?r?n.arrayMerge(e,t,n):oR(e,t,n):Ru(t,n)}na.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(r,i){return na(r,i,n)},{})};var Fh=na,aR=typeof global=="object"&&global&&global.Object===Object&&global;const KS=aR;var lR=typeof self=="object"&&self&&self.Object===Object&&self,uR=KS||lR||Function("return this")();const xn=uR;var cR=xn.Symbol;const Ir=cR;var qS=Object.prototype,dR=qS.hasOwnProperty,fR=qS.toString,ro=Ir?Ir.toStringTag:void 0;function hR(e){var t=dR.call(e,ro),n=e[ro];try{e[ro]=void 0;var r=!0}catch{}var i=fR.call(e);return r&&(t?e[ro]=n:delete e[ro]),i}var pR=Object.prototype,mR=pR.toString;function gR(e){return mR.call(e)}var yR="[object Null]",vR="[object Undefined]",Nv=Ir?Ir.toStringTag:void 0;function Ri(e){return e==null?e===void 0?vR:yR:Nv&&Nv in Object(e)?hR(e):gR(e)}function YS(e,t){return function(n){return e(t(n))}}var _R=YS(Object.getPrototypeOf,Object);const Rm=_R;function Ni(e){return e!=null&&typeof e=="object"}var wR="[object Object]",SR=Function.prototype,ER=Object.prototype,QS=SR.toString,xR=ER.hasOwnProperty,CR=QS.call(Object);function Av(e){if(!Ni(e)||Ri(e)!=wR)return!1;var t=Rm(e);if(t===null)return!0;var n=xR.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&QS.call(n)==CR}var Dv=Array.isArray,Lv=Object.keys,TR=Object.prototype.hasOwnProperty,bR=typeof Element<"u";function $h(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var n=Dv(e),r=Dv(t),i,s,o;if(n&&r){if(s=e.length,s!=t.length)return!1;for(i=s;i--!==0;)if(!$h(e[i],t[i]))return!1;return!0}if(n!=r)return!1;var a=e instanceof Date,l=t instanceof Date;if(a!=l)return!1;if(a&&l)return e.getTime()==t.getTime();var u=e instanceof RegExp,c=t instanceof RegExp;if(u!=c)return!1;if(u&&c)return e.toString()==t.toString();var d=Lv(e);if(s=d.length,s!==Lv(t).length)return!1;for(i=s;i--!==0;)if(!TR.call(t,d[i]))return!1;if(bR&&e instanceof Element&&t instanceof Element)return e===t;for(i=s;i--!==0;)if(o=d[i],!(o==="_owner"&&e.$$typeof)&&!$h(e[o],t[o]))return!1;return!0}return e!==e&&t!==t}var kR=function(t,n){try{return $h(t,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const Kr=_p(kR);var IR=!0;function PR(e,t){if(!IR){if(e)return;var n="Warning: "+t;typeof console<"u"&&console.warn(n);try{throw Error(n)}catch{}}}function OR(){this.__data__=[],this.size=0}function XS(e,t){return e===t||e!==e&&t!==t}function Ac(e,t){for(var n=e.length;n--;)if(XS(e[n][0],t))return n;return-1}var RR=Array.prototype,NR=RR.splice;function AR(e){var t=this.__data__,n=Ac(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():NR.call(t,n,1),--this.size,!0}function DR(e){var t=this.__data__,n=Ac(t,e);return n<0?void 0:t[n][1]}function LR(e){return Ac(this.__data__,e)>-1}function MR(e,t){var n=this.__data__,r=Ac(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function Kn(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Kn.prototype.clear=OR;Kn.prototype.delete=AR;Kn.prototype.get=DR;Kn.prototype.has=LR;Kn.prototype.set=MR;function FR(){this.__data__=new Kn,this.size=0}function $R(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function jR(e){return this.__data__.get(e)}function UR(e){return this.__data__.has(e)}function Na(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var zR="[object AsyncFunction]",BR="[object Function]",VR="[object GeneratorFunction]",WR="[object Proxy]";function JS(e){if(!Na(e))return!1;var t=Ri(e);return t==BR||t==VR||t==zR||t==WR}var HR=xn["__core-js_shared__"];const rf=HR;var Mv=function(){var e=/[^.]+$/.exec(rf&&rf.keys&&rf.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function GR(e){return!!Mv&&Mv in e}var KR=Function.prototype,qR=KR.toString;function Ai(e){if(e!=null){try{return qR.call(e)}catch{}try{return e+""}catch{}}return""}var YR=/[\\^$.*+?()[\]{}|]/g,QR=/^\[object .+?Constructor\]$/,XR=Function.prototype,JR=Object.prototype,ZR=XR.toString,eN=JR.hasOwnProperty,tN=RegExp("^"+ZR.call(eN).replace(YR,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function nN(e){if(!Na(e)||GR(e))return!1;var t=JS(e)?tN:QR;return t.test(Ai(e))}function rN(e,t){return e==null?void 0:e[t]}function Di(e,t){var n=rN(e,t);return nN(n)?n:void 0}var iN=Di(xn,"Map");const ra=iN;var sN=Di(Object,"create");const ia=sN;function oN(){this.__data__=ia?ia(null):{},this.size=0}function aN(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var lN="__lodash_hash_undefined__",uN=Object.prototype,cN=uN.hasOwnProperty;function dN(e){var t=this.__data__;if(ia){var n=t[e];return n===lN?void 0:n}return cN.call(t,e)?t[e]:void 0}var fN=Object.prototype,hN=fN.hasOwnProperty;function pN(e){var t=this.__data__;return ia?t[e]!==void 0:hN.call(t,e)}var mN="__lodash_hash_undefined__";function gN(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ia&&t===void 0?mN:t,this}function vi(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}vi.prototype.clear=oN;vi.prototype.delete=aN;vi.prototype.get=dN;vi.prototype.has=pN;vi.prototype.set=gN;function yN(){this.size=0,this.__data__={hash:new vi,map:new(ra||Kn),string:new vi}}function vN(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Dc(e,t){var n=e.__data__;return vN(t)?n[typeof t=="string"?"string":"hash"]:n.map}function _N(e){var t=Dc(this,e).delete(e);return this.size-=t?1:0,t}function wN(e){return Dc(this,e).get(e)}function SN(e){return Dc(this,e).has(e)}function EN(e,t){var n=Dc(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function Fr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Fr.prototype.clear=yN;Fr.prototype.delete=_N;Fr.prototype.get=wN;Fr.prototype.has=SN;Fr.prototype.set=EN;var xN=200;function CN(e,t){var n=this.__data__;if(n instanceof Kn){var r=n.__data__;if(!ra||r.length<xN-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Fr(r)}return n.set(e,t),this.size=n.size,this}function Bs(e){var t=this.__data__=new Kn(e);this.size=t.size}Bs.prototype.clear=FR;Bs.prototype.delete=$R;Bs.prototype.get=jR;Bs.prototype.has=UR;Bs.prototype.set=CN;function TN(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var bN=function(){try{var e=Di(Object,"defineProperty");return e({},"",{}),e}catch{}}();const Fv=bN;function ZS(e,t,n){t=="__proto__"&&Fv?Fv(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var kN=Object.prototype,IN=kN.hasOwnProperty;function eE(e,t,n){var r=e[t];(!(IN.call(e,t)&&XS(r,n))||n===void 0&&!(t in e))&&ZS(e,t,n)}function Lc(e,t,n,r){var i=!n;n||(n={});for(var s=-1,o=t.length;++s<o;){var a=t[s],l=r?r(n[a],e[a],a,n,e):void 0;l===void 0&&(l=e[a]),i?ZS(n,a,l):eE(n,a,l)}return n}function PN(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var ON="[object Arguments]";function $v(e){return Ni(e)&&Ri(e)==ON}var tE=Object.prototype,RN=tE.hasOwnProperty,NN=tE.propertyIsEnumerable,AN=$v(function(){return arguments}())?$v:function(e){return Ni(e)&&RN.call(e,"callee")&&!NN.call(e,"callee")};const DN=AN;var LN=Array.isArray;const Aa=LN;function MN(){return!1}var nE=typeof Tt=="object"&&Tt&&!Tt.nodeType&&Tt,jv=nE&&typeof bt=="object"&&bt&&!bt.nodeType&&bt,FN=jv&&jv.exports===nE,Uv=FN?xn.Buffer:void 0,$N=Uv?Uv.isBuffer:void 0,jN=$N||MN;const rE=jN;var UN=9007199254740991,zN=/^(?:0|[1-9]\d*)$/;function BN(e,t){var n=typeof e;return t=t??UN,!!t&&(n=="number"||n!="symbol"&&zN.test(e))&&e>-1&&e%1==0&&e<t}var VN=9007199254740991;function iE(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=VN}var WN="[object Arguments]",HN="[object Array]",GN="[object Boolean]",KN="[object Date]",qN="[object Error]",YN="[object Function]",QN="[object Map]",XN="[object Number]",JN="[object Object]",ZN="[object RegExp]",eA="[object Set]",tA="[object String]",nA="[object WeakMap]",rA="[object ArrayBuffer]",iA="[object DataView]",sA="[object Float32Array]",oA="[object Float64Array]",aA="[object Int8Array]",lA="[object Int16Array]",uA="[object Int32Array]",cA="[object Uint8Array]",dA="[object Uint8ClampedArray]",fA="[object Uint16Array]",hA="[object Uint32Array]",pe={};pe[sA]=pe[oA]=pe[aA]=pe[lA]=pe[uA]=pe[cA]=pe[dA]=pe[fA]=pe[hA]=!0;pe[WN]=pe[HN]=pe[rA]=pe[GN]=pe[iA]=pe[KN]=pe[qN]=pe[YN]=pe[QN]=pe[XN]=pe[JN]=pe[ZN]=pe[eA]=pe[tA]=pe[nA]=!1;function pA(e){return Ni(e)&&iE(e.length)&&!!pe[Ri(e)]}function Nm(e){return function(t){return e(t)}}var sE=typeof Tt=="object"&&Tt&&!Tt.nodeType&&Tt,Oo=sE&&typeof bt=="object"&&bt&&!bt.nodeType&&bt,mA=Oo&&Oo.exports===sE,sf=mA&&KS.process,gA=function(){try{var e=Oo&&Oo.require&&Oo.require("util").types;return e||sf&&sf.binding&&sf.binding("util")}catch{}}();const ks=gA;var zv=ks&&ks.isTypedArray,yA=zv?Nm(zv):pA;const vA=yA;var _A=Object.prototype,wA=_A.hasOwnProperty;function oE(e,t){var n=Aa(e),r=!n&&DN(e),i=!n&&!r&&rE(e),s=!n&&!r&&!i&&vA(e),o=n||r||i||s,a=o?PN(e.length,String):[],l=a.length;for(var u in e)(t||wA.call(e,u))&&!(o&&(u=="length"||i&&(u=="offset"||u=="parent")||s&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||BN(u,l)))&&a.push(u);return a}var SA=Object.prototype;function Am(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||SA;return e===n}var EA=YS(Object.keys,Object);const xA=EA;var CA=Object.prototype,TA=CA.hasOwnProperty;function bA(e){if(!Am(e))return xA(e);var t=[];for(var n in Object(e))TA.call(e,n)&&n!="constructor"&&t.push(n);return t}function aE(e){return e!=null&&iE(e.length)&&!JS(e)}function Dm(e){return aE(e)?oE(e):bA(e)}function kA(e,t){return e&&Lc(t,Dm(t),e)}function IA(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var PA=Object.prototype,OA=PA.hasOwnProperty;function RA(e){if(!Na(e))return IA(e);var t=Am(e),n=[];for(var r in e)r=="constructor"&&(t||!OA.call(e,r))||n.push(r);return n}function Lm(e){return aE(e)?oE(e,!0):RA(e)}function NA(e,t){return e&&Lc(t,Lm(t),e)}var lE=typeof Tt=="object"&&Tt&&!Tt.nodeType&&Tt,Bv=lE&&typeof bt=="object"&&bt&&!bt.nodeType&&bt,AA=Bv&&Bv.exports===lE,Vv=AA?xn.Buffer:void 0,Wv=Vv?Vv.allocUnsafe:void 0;function DA(e,t){if(t)return e.slice();var n=e.length,r=Wv?Wv(n):new e.constructor(n);return e.copy(r),r}function uE(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}function LA(e,t){for(var n=-1,r=e==null?0:e.length,i=0,s=[];++n<r;){var o=e[n];t(o,n,e)&&(s[i++]=o)}return s}function cE(){return[]}var MA=Object.prototype,FA=MA.propertyIsEnumerable,Hv=Object.getOwnPropertySymbols,$A=Hv?function(e){return e==null?[]:(e=Object(e),LA(Hv(e),function(t){return FA.call(e,t)}))}:cE;const Mm=$A;function jA(e,t){return Lc(e,Mm(e),t)}function dE(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var UA=Object.getOwnPropertySymbols,zA=UA?function(e){for(var t=[];e;)dE(t,Mm(e)),e=Rm(e);return t}:cE;const fE=zA;function BA(e,t){return Lc(e,fE(e),t)}function hE(e,t,n){var r=t(e);return Aa(e)?r:dE(r,n(e))}function VA(e){return hE(e,Dm,Mm)}function WA(e){return hE(e,Lm,fE)}var HA=Di(xn,"DataView");const jh=HA;var GA=Di(xn,"Promise");const Uh=GA;var KA=Di(xn,"Set");const zh=KA;var qA=Di(xn,"WeakMap");const Bh=qA;var Gv="[object Map]",YA="[object Object]",Kv="[object Promise]",qv="[object Set]",Yv="[object WeakMap]",Qv="[object DataView]",QA=Ai(jh),XA=Ai(ra),JA=Ai(Uh),ZA=Ai(zh),e2=Ai(Bh),qr=Ri;(jh&&qr(new jh(new ArrayBuffer(1)))!=Qv||ra&&qr(new ra)!=Gv||Uh&&qr(Uh.resolve())!=Kv||zh&&qr(new zh)!=qv||Bh&&qr(new Bh)!=Yv)&&(qr=function(e){var t=Ri(e),n=t==YA?e.constructor:void 0,r=n?Ai(n):"";if(r)switch(r){case QA:return Qv;case XA:return Gv;case JA:return Kv;case ZA:return qv;case e2:return Yv}return t});const Fm=qr;var t2=Object.prototype,n2=t2.hasOwnProperty;function r2(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&n2.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var i2=xn.Uint8Array;const Xv=i2;function $m(e){var t=new e.constructor(e.byteLength);return new Xv(t).set(new Xv(e)),t}function s2(e,t){var n=t?$m(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var o2=/\w*$/;function a2(e){var t=new e.constructor(e.source,o2.exec(e));return t.lastIndex=e.lastIndex,t}var Jv=Ir?Ir.prototype:void 0,Zv=Jv?Jv.valueOf:void 0;function l2(e){return Zv?Object(Zv.call(e)):{}}function u2(e,t){var n=t?$m(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var c2="[object Boolean]",d2="[object Date]",f2="[object Map]",h2="[object Number]",p2="[object RegExp]",m2="[object Set]",g2="[object String]",y2="[object Symbol]",v2="[object ArrayBuffer]",_2="[object DataView]",w2="[object Float32Array]",S2="[object Float64Array]",E2="[object Int8Array]",x2="[object Int16Array]",C2="[object Int32Array]",T2="[object Uint8Array]",b2="[object Uint8ClampedArray]",k2="[object Uint16Array]",I2="[object Uint32Array]";function P2(e,t,n){var r=e.constructor;switch(t){case v2:return $m(e);case c2:case d2:return new r(+e);case _2:return s2(e,n);case w2:case S2:case E2:case x2:case C2:case T2:case b2:case k2:case I2:return u2(e,n);case f2:return new r;case h2:case g2:return new r(e);case p2:return a2(e);case m2:return new r;case y2:return l2(e)}}var e_=Object.create,O2=function(){function e(){}return function(t){if(!Na(t))return{};if(e_)return e_(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const R2=O2;function N2(e){return typeof e.constructor=="function"&&!Am(e)?R2(Rm(e)):{}}var A2="[object Map]";function D2(e){return Ni(e)&&Fm(e)==A2}var t_=ks&&ks.isMap,L2=t_?Nm(t_):D2;const M2=L2;var F2="[object Set]";function $2(e){return Ni(e)&&Fm(e)==F2}var n_=ks&&ks.isSet,j2=n_?Nm(n_):$2;const U2=j2;var z2=1,B2=2,V2=4,pE="[object Arguments]",W2="[object Array]",H2="[object Boolean]",G2="[object Date]",K2="[object Error]",mE="[object Function]",q2="[object GeneratorFunction]",Y2="[object Map]",Q2="[object Number]",gE="[object Object]",X2="[object RegExp]",J2="[object Set]",Z2="[object String]",eD="[object Symbol]",tD="[object WeakMap]",nD="[object ArrayBuffer]",rD="[object DataView]",iD="[object Float32Array]",sD="[object Float64Array]",oD="[object Int8Array]",aD="[object Int16Array]",lD="[object Int32Array]",uD="[object Uint8Array]",cD="[object Uint8ClampedArray]",dD="[object Uint16Array]",fD="[object Uint32Array]",ue={};ue[pE]=ue[W2]=ue[nD]=ue[rD]=ue[H2]=ue[G2]=ue[iD]=ue[sD]=ue[oD]=ue[aD]=ue[lD]=ue[Y2]=ue[Q2]=ue[gE]=ue[X2]=ue[J2]=ue[Z2]=ue[eD]=ue[uD]=ue[cD]=ue[dD]=ue[fD]=!0;ue[K2]=ue[mE]=ue[tD]=!1;function jl(e,t,n,r,i,s){var o,a=t&z2,l=t&B2,u=t&V2;if(n&&(o=i?n(e,r,i,s):n(e)),o!==void 0)return o;if(!Na(e))return e;var c=Aa(e);if(c){if(o=r2(e),!a)return uE(e,o)}else{var d=Fm(e),f=d==mE||d==q2;if(rE(e))return DA(e,a);if(d==gE||d==pE||f&&!i){if(o=l||f?{}:N2(e),!a)return l?BA(e,NA(o,e)):jA(e,kA(o,e))}else{if(!ue[d])return i?e:{};o=P2(e,d,a)}}s||(s=new Bs);var m=s.get(e);if(m)return m;s.set(e,o),U2(e)?e.forEach(function(w){o.add(jl(w,t,n,w,e,s))}):M2(e)&&e.forEach(function(w,p){o.set(p,jl(w,t,n,p,e,s))});var g=u?l?WA:VA:l?Lm:Dm,v=c?void 0:g(e);return TN(v||e,function(w,p){v&&(p=w,w=e[p]),eE(o,p,jl(w,t,n,p,e,s))}),o}var hD=4;function r_(e){return jl(e,hD)}function yE(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var pD="[object Symbol]";function jm(e){return typeof e=="symbol"||Ni(e)&&Ri(e)==pD}var mD="Expected a function";function Um(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(mD);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=e.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(Um.Cache||Fr),n}Um.Cache=Fr;var gD=500;function yD(e){var t=Um(e,function(r){return n.size===gD&&n.clear(),r}),n=t.cache;return t}var vD=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,_D=/\\(\\)?/g,wD=yD(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(vD,function(n,r,i,s){t.push(i?s.replace(_D,"$1"):r||n)}),t});const SD=wD;var ED=1/0;function xD(e){if(typeof e=="string"||jm(e))return e;var t=e+"";return t=="0"&&1/e==-ED?"-0":t}var CD=1/0,i_=Ir?Ir.prototype:void 0,s_=i_?i_.toString:void 0;function vE(e){if(typeof e=="string")return e;if(Aa(e))return yE(e,vE)+"";if(jm(e))return s_?s_.call(e):"";var t=e+"";return t=="0"&&1/e==-CD?"-0":t}function TD(e){return e==null?"":vE(e)}function _E(e){return Aa(e)?yE(e,xD):jm(e)?[e]:uE(SD(TD(e)))}var wE={exports:{}},oe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ue=typeof Symbol=="function"&&Symbol.for,zm=Ue?Symbol.for("react.element"):60103,Bm=Ue?Symbol.for("react.portal"):60106,Mc=Ue?Symbol.for("react.fragment"):60107,Fc=Ue?Symbol.for("react.strict_mode"):60108,$c=Ue?Symbol.for("react.profiler"):60114,jc=Ue?Symbol.for("react.provider"):60109,Uc=Ue?Symbol.for("react.context"):60110,Vm=Ue?Symbol.for("react.async_mode"):60111,zc=Ue?Symbol.for("react.concurrent_mode"):60111,Bc=Ue?Symbol.for("react.forward_ref"):60112,Vc=Ue?Symbol.for("react.suspense"):60113,bD=Ue?Symbol.for("react.suspense_list"):60120,Wc=Ue?Symbol.for("react.memo"):60115,Hc=Ue?Symbol.for("react.lazy"):60116,kD=Ue?Symbol.for("react.block"):60121,ID=Ue?Symbol.for("react.fundamental"):60117,PD=Ue?Symbol.for("react.responder"):60118,OD=Ue?Symbol.for("react.scope"):60119;function Lt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case zm:switch(e=e.type,e){case Vm:case zc:case Mc:case $c:case Fc:case Vc:return e;default:switch(e=e&&e.$$typeof,e){case Uc:case Bc:case Hc:case Wc:case jc:return e;default:return t}}case Bm:return t}}}function SE(e){return Lt(e)===zc}oe.AsyncMode=Vm;oe.ConcurrentMode=zc;oe.ContextConsumer=Uc;oe.ContextProvider=jc;oe.Element=zm;oe.ForwardRef=Bc;oe.Fragment=Mc;oe.Lazy=Hc;oe.Memo=Wc;oe.Portal=Bm;oe.Profiler=$c;oe.StrictMode=Fc;oe.Suspense=Vc;oe.isAsyncMode=function(e){return SE(e)||Lt(e)===Vm};oe.isConcurrentMode=SE;oe.isContextConsumer=function(e){return Lt(e)===Uc};oe.isContextProvider=function(e){return Lt(e)===jc};oe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===zm};oe.isForwardRef=function(e){return Lt(e)===Bc};oe.isFragment=function(e){return Lt(e)===Mc};oe.isLazy=function(e){return Lt(e)===Hc};oe.isMemo=function(e){return Lt(e)===Wc};oe.isPortal=function(e){return Lt(e)===Bm};oe.isProfiler=function(e){return Lt(e)===$c};oe.isStrictMode=function(e){return Lt(e)===Fc};oe.isSuspense=function(e){return Lt(e)===Vc};oe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Mc||e===zc||e===$c||e===Fc||e===Vc||e===bD||typeof e=="object"&&e!==null&&(e.$$typeof===Hc||e.$$typeof===Wc||e.$$typeof===jc||e.$$typeof===Uc||e.$$typeof===Bc||e.$$typeof===ID||e.$$typeof===PD||e.$$typeof===OD||e.$$typeof===kD)};oe.typeOf=Lt;wE.exports=oe;var RD=wE.exports,EE=RD,ND={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},AD={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},xE={};xE[EE.ForwardRef]=ND;xE[EE.Memo]=AD;function De(){return De=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},De.apply(this,arguments)}function CE(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var Gc=T.createContext(void 0);Gc.displayName="FormikContext";Gc.Provider;Gc.Consumer;function DD(){var e=T.useContext(Gc);return e||PR(!1),e}var Yt=function(t){return typeof t=="function"},Kc=function(t){return t!==null&&typeof t=="object"},LD=function(t){return String(Math.floor(Number(t)))===t},of=function(t){return Object.prototype.toString.call(t)==="[object String]"},af=function(t){return Kc(t)&&Yt(t.then)};function St(e,t,n,r){r===void 0&&(r=0);for(var i=_E(t);e&&r<i.length;)e=e[i[r++]];return r!==i.length&&!e||e===void 0?n:e}function ci(e,t,n){for(var r=r_(e),i=r,s=0,o=_E(t);s<o.length-1;s++){var a=o[s],l=St(e,o.slice(0,s+1));if(l&&(Kc(l)||Array.isArray(l)))i=i[a]=r_(l);else{var u=o[s+1];i=i[a]=LD(u)&&Number(u)>=0?[]:{}}}return(s===0?e:i)[o[s]]===n?e:(n===void 0?delete i[o[s]]:i[o[s]]=n,s===0&&n===void 0&&delete r[o[s]],r)}function TE(e,t,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var i=0,s=Object.keys(e);i<s.length;i++){var o=s[i],a=e[o];Kc(a)?n.get(a)||(n.set(a,!0),r[o]=Array.isArray(a)?[]:{},TE(a,t,n,r[o])):r[o]=t}return r}function MD(e,t){switch(t.type){case"SET_VALUES":return De({},e,{values:t.payload});case"SET_TOUCHED":return De({},e,{touched:t.payload});case"SET_ERRORS":return Kr(e.errors,t.payload)?e:De({},e,{errors:t.payload});case"SET_STATUS":return De({},e,{status:t.payload});case"SET_ISSUBMITTING":return De({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return De({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return De({},e,{values:ci(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return De({},e,{touched:ci(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return De({},e,{errors:ci(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return De({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return De({},e,{touched:TE(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return De({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return De({},e,{isSubmitting:!1});default:return e}}var Vr={},fl={};function bE(e){var t=e.validateOnChange,n=t===void 0?!0:t,r=e.validateOnBlur,i=r===void 0?!0:r,s=e.validateOnMount,o=s===void 0?!1:s,a=e.isInitialValid,l=e.enableReinitialize,u=l===void 0?!1:l,c=e.onSubmit,d=CE(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=De({validateOnChange:n,validateOnBlur:i,validateOnMount:o,onSubmit:c},d),m=T.useRef(f.initialValues),g=T.useRef(f.initialErrors||Vr),v=T.useRef(f.initialTouched||fl),w=T.useRef(f.initialStatus),p=T.useRef(!1),h=T.useRef({});T.useEffect(function(){return p.current=!0,function(){p.current=!1}},[]);var y=T.useState(0),S=y[1],x=T.useRef({values:f.initialValues,errors:f.initialErrors||Vr,touched:f.initialTouched||fl,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),C=x.current,E=T.useCallback(function(b){var R=x.current;x.current=MD(R,b),R!==x.current&&S(function(D){return D+1})},[]),P=T.useCallback(function(b,R){return new Promise(function(D,F){var W=f.validate(b,R);W==null?D(Vr):af(W)?W.then(function(ie){D(ie||Vr)},function(ie){F(ie)}):D(W)})},[f.validate]),M=T.useCallback(function(b,R){var D=f.validationSchema,F=Yt(D)?D(R):D,W=R&&F.validateAt?F.validateAt(R,b):$D(b,F);return new Promise(function(ie,Ae){W.then(function(){ie(Vr)},function(bn){bn.name==="ValidationError"?ie(FD(bn)):Ae(bn)})})},[f.validationSchema]),L=T.useCallback(function(b,R){return new Promise(function(D){return D(h.current[b].validate(R))})},[]),V=T.useCallback(function(b){var R=Object.keys(h.current).filter(function(F){return Yt(h.current[F].validate)}),D=R.length>0?R.map(function(F){return L(F,St(b,F))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(D).then(function(F){return F.reduce(function(W,ie,Ae){return ie==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||ie&&(W=ci(W,R[Ae],ie)),W},{})})},[L]),ut=T.useCallback(function(b){return Promise.all([V(b),f.validationSchema?M(b):{},f.validate?P(b):{}]).then(function(R){var D=R[0],F=R[1],W=R[2],ie=Fh.all([D,F,W],{arrayMerge:jD});return ie})},[f.validate,f.validationSchema,V,P,M]),q=Ft(function(b){return b===void 0&&(b=C.values),E({type:"SET_ISVALIDATING",payload:!0}),ut(b).then(function(R){return p.current&&(E({type:"SET_ISVALIDATING",payload:!1}),E({type:"SET_ERRORS",payload:R})),R})});T.useEffect(function(){o&&p.current===!0&&Kr(m.current,f.initialValues)&&q(m.current)},[o,q]);var Ie=T.useCallback(function(b){var R=b&&b.values?b.values:m.current,D=b&&b.errors?b.errors:g.current?g.current:f.initialErrors||{},F=b&&b.touched?b.touched:v.current?v.current:f.initialTouched||{},W=b&&b.status?b.status:w.current?w.current:f.initialStatus;m.current=R,g.current=D,v.current=F,w.current=W;var ie=function(){E({type:"RESET_FORM",payload:{isSubmitting:!!b&&!!b.isSubmitting,errors:D,touched:F,status:W,values:R,isValidating:!!b&&!!b.isValidating,submitCount:b&&b.submitCount&&typeof b.submitCount=="number"?b.submitCount:0}})};if(f.onReset){var Ae=f.onReset(C.values,Kg);af(Ae)?Ae.then(ie):ie()}else ie()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);T.useEffect(function(){p.current===!0&&!Kr(m.current,f.initialValues)&&u&&(m.current=f.initialValues,Ie(),o&&q(m.current))},[u,f.initialValues,Ie,o,q]),T.useEffect(function(){u&&p.current===!0&&!Kr(g.current,f.initialErrors)&&(g.current=f.initialErrors||Vr,E({type:"SET_ERRORS",payload:f.initialErrors||Vr}))},[u,f.initialErrors]),T.useEffect(function(){u&&p.current===!0&&!Kr(v.current,f.initialTouched)&&(v.current=f.initialTouched||fl,E({type:"SET_TOUCHED",payload:f.initialTouched||fl}))},[u,f.initialTouched]),T.useEffect(function(){u&&p.current===!0&&!Kr(w.current,f.initialStatus)&&(w.current=f.initialStatus,E({type:"SET_STATUS",payload:f.initialStatus}))},[u,f.initialStatus,f.initialTouched]);var Cn=Ft(function(b){if(h.current[b]&&Yt(h.current[b].validate)){var R=St(C.values,b),D=h.current[b].validate(R);return af(D)?(E({type:"SET_ISVALIDATING",payload:!0}),D.then(function(F){return F}).then(function(F){E({type:"SET_FIELD_ERROR",payload:{field:b,value:F}}),E({type:"SET_ISVALIDATING",payload:!1})})):(E({type:"SET_FIELD_ERROR",payload:{field:b,value:D}}),Promise.resolve(D))}else if(f.validationSchema)return E({type:"SET_ISVALIDATING",payload:!0}),M(C.values,b).then(function(F){return F}).then(function(F){E({type:"SET_FIELD_ERROR",payload:{field:b,value:St(F,b)}}),E({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Tn=T.useCallback(function(b,R){var D=R.validate;h.current[b]={validate:D}},[]),ct=T.useCallback(function(b){delete h.current[b]},[]),O=Ft(function(b,R){E({type:"SET_TOUCHED",payload:b});var D=R===void 0?i:R;return D?q(C.values):Promise.resolve()}),$=T.useCallback(function(b){E({type:"SET_ERRORS",payload:b})},[]),j=Ft(function(b,R){var D=Yt(b)?b(C.values):b;E({type:"SET_VALUES",payload:D});var F=R===void 0?n:R;return F?q(D):Promise.resolve()}),ne=T.useCallback(function(b,R){E({type:"SET_FIELD_ERROR",payload:{field:b,value:R}})},[]),re=Ft(function(b,R,D){E({type:"SET_FIELD_VALUE",payload:{field:b,value:R}});var F=D===void 0?n:D;return F?q(ci(C.values,b,R)):Promise.resolve()}),Mt=T.useCallback(function(b,R){var D=R,F=b,W;if(!of(b)){b.persist&&b.persist();var ie=b.target?b.target:b.currentTarget,Ae=ie.type,bn=ie.name,yd=ie.id,vd=ie.value,dT=ie.checked,V5=ie.outerHTML,qg=ie.options,fT=ie.multiple;D=R||bn||yd,F=/number|range/.test(Ae)?(W=parseFloat(vd),isNaN(W)?"":W):/checkbox/.test(Ae)?zD(St(C.values,D),dT,vd):qg&&fT?UD(qg):vd}D&&re(D,F)},[re,C.values]),ze=Ft(function(b){if(of(b))return function(R){return Mt(R,b)};Mt(b)}),nt=Ft(function(b,R,D){R===void 0&&(R=!0),E({type:"SET_FIELD_TOUCHED",payload:{field:b,value:R}});var F=D===void 0?i:D;return F?q(C.values):Promise.resolve()}),qe=T.useCallback(function(b,R){b.persist&&b.persist();var D=b.target,F=D.name,W=D.id,ie=D.outerHTML,Ae=R||F||W;nt(Ae,!0)},[nt]),Ye=Ft(function(b){if(of(b))return function(R){return qe(R,b)};qe(b)}),Mi=T.useCallback(function(b){Yt(b)?E({type:"SET_FORMIK_STATE",payload:b}):E({type:"SET_FORMIK_STATE",payload:function(){return b}})},[]),Br=T.useCallback(function(b){E({type:"SET_STATUS",payload:b})},[]),Gt=T.useCallback(function(b){E({type:"SET_ISSUBMITTING",payload:b})},[]),md=Ft(function(){return E({type:"SUBMIT_ATTEMPT"}),q().then(function(b){var R=b instanceof Error,D=!R&&Object.keys(b).length===0;if(D){var F;try{if(F=iT(),F===void 0)return}catch(W){throw W}return Promise.resolve(F).then(function(W){return p.current&&E({type:"SUBMIT_SUCCESS"}),W}).catch(function(W){if(p.current)throw E({type:"SUBMIT_FAILURE"}),W})}else if(p.current&&(E({type:"SUBMIT_FAILURE"}),R))throw b})}),rT=Ft(function(b){b&&b.preventDefault&&Yt(b.preventDefault)&&b.preventDefault(),b&&b.stopPropagation&&Yt(b.stopPropagation)&&b.stopPropagation(),md().catch(function(R){console.warn("Warning: An unhandled error was caught from submitForm()",R)})}),Kg={resetForm:Ie,validateForm:q,validateField:Cn,setErrors:$,setFieldError:ne,setFieldTouched:nt,setFieldValue:re,setStatus:Br,setSubmitting:Gt,setTouched:O,setValues:j,setFormikState:Mi,submitForm:md},iT=Ft(function(){return c(C.values,Kg)}),sT=Ft(function(b){b&&b.preventDefault&&Yt(b.preventDefault)&&b.preventDefault(),b&&b.stopPropagation&&Yt(b.stopPropagation)&&b.stopPropagation(),Ie()}),oT=T.useCallback(function(b){return{value:St(C.values,b),error:St(C.errors,b),touched:!!St(C.touched,b),initialValue:St(m.current,b),initialTouched:!!St(v.current,b),initialError:St(g.current,b)}},[C.errors,C.touched,C.values]),aT=T.useCallback(function(b){return{setValue:function(D,F){return re(b,D,F)},setTouched:function(D,F){return nt(b,D,F)},setError:function(D){return ne(b,D)}}},[re,nt,ne]),lT=T.useCallback(function(b){var R=Kc(b),D=R?b.name:b,F=St(C.values,D),W={name:D,value:F,onChange:ze,onBlur:Ye};if(R){var ie=b.type,Ae=b.value,bn=b.as,yd=b.multiple;ie==="checkbox"?Ae===void 0?W.checked=!!F:(W.checked=!!(Array.isArray(F)&&~F.indexOf(Ae)),W.value=Ae):ie==="radio"?(W.checked=F===Ae,W.value=Ae):bn==="select"&&yd&&(W.value=W.value||[],W.multiple=!0)}return W},[Ye,ze,C.values]),gd=T.useMemo(function(){return!Kr(m.current,C.values)},[m.current,C.values]),uT=T.useMemo(function(){return typeof a<"u"?gd?C.errors&&Object.keys(C.errors).length===0:a!==!1&&Yt(a)?a(f):a:C.errors&&Object.keys(C.errors).length===0},[a,gd,C.errors,f]),cT=De({},C,{initialValues:m.current,initialErrors:g.current,initialTouched:v.current,initialStatus:w.current,handleBlur:Ye,handleChange:ze,handleReset:sT,handleSubmit:rT,resetForm:Ie,setErrors:$,setFormikState:Mi,setFieldTouched:nt,setFieldValue:re,setFieldError:ne,setStatus:Br,setSubmitting:Gt,setTouched:O,setValues:j,submitForm:md,validateForm:q,validateField:Cn,isValid:uT,dirty:gd,unregisterField:ct,registerField:Tn,getFieldProps:lT,getFieldMeta:oT,getFieldHelpers:aT,validateOnBlur:i,validateOnChange:n,validateOnMount:o});return cT}function FD(e){var t={};if(e.inner){if(e.inner.length===0)return ci(t,e.path,e.message);for(var i=e.inner,n=Array.isArray(i),r=0,i=n?i:i[Symbol.iterator]();;){var s;if(n){if(r>=i.length)break;s=i[r++]}else{if(r=i.next(),r.done)break;s=r.value}var o=s;St(t,o.path)||(t=ci(t,o.path,o.message))}}return t}function $D(e,t,n,r){n===void 0&&(n=!1);var i=Vh(e);return t[n?"validateSync":"validate"](i,{abortEarly:!1,context:r||i})}function Vh(e){var t=Array.isArray(e)?[]:{};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=String(n);Array.isArray(e[r])===!0?t[r]=e[r].map(function(i){return Array.isArray(i)===!0||Av(i)?Vh(i):i!==""?i:void 0}):Av(e[r])?t[r]=Vh(e[r]):t[r]=e[r]!==""?e[r]:void 0}return t}function jD(e,t,n){var r=e.slice();return t.forEach(function(s,o){if(typeof r[o]>"u"){var a=n.clone!==!1,l=a&&n.isMergeableObject(s);r[o]=l?Fh(Array.isArray(s)?[]:{},s,n):s}else n.isMergeableObject(s)?r[o]=Fh(e[o],s,n):e.indexOf(s)===-1&&r.push(s)}),r}function UD(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function zD(e,t,n){if(typeof e=="boolean")return!!t;var r=[],i=!1,s=-1;if(Array.isArray(e))r=e,s=e.indexOf(n),i=s>=0;else if(!n||n=="true"||n=="false")return!!t;return t&&n&&!i?r.concat(n):i?r.slice(0,s).concat(r.slice(s+1)):r}var BD=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?T.useLayoutEffect:T.useEffect;function Ft(e){var t=T.useRef(e);return BD(function(){t.current=e}),T.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.current.apply(void 0,r)},[])}var VD=T.forwardRef(function(e,t){var n=e.action,r=CE(e,["action"]),i=n??"#",s=DD(),o=s.handleReset,a=s.handleSubmit;return T.createElement("form",De({onSubmit:a,ref:t,onReset:o,action:i},r))});VD.displayName="Form";const an="/Learn-Lingo/assets/sprite-20c9a52c.svg";function Be(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var WD=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),o_=WD,lf=()=>Math.random().toString(36).substring(7).split("").join("."),HD={INIT:`@@redux/INIT${lf()}`,REPLACE:`@@redux/REPLACE${lf()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${lf()}`},Nu=HD;function Wm(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function Hm(e,t,n){if(typeof e!="function")throw new Error(Be(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Be(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Be(1));return n(Hm)(e,t)}let r=e,i=t,s=new Map,o=s,a=0,l=!1;function u(){o===s&&(o=new Map,s.forEach((w,p)=>{o.set(p,w)}))}function c(){if(l)throw new Error(Be(3));return i}function d(w){if(typeof w!="function")throw new Error(Be(4));if(l)throw new Error(Be(5));let p=!0;u();const h=a++;return o.set(h,w),function(){if(p){if(l)throw new Error(Be(6));p=!1,u(),o.delete(h),s=null}}}function f(w){if(!Wm(w))throw new Error(Be(7));if(typeof w.type>"u")throw new Error(Be(8));if(typeof w.type!="string")throw new Error(Be(17));if(l)throw new Error(Be(9));try{l=!0,i=r(i,w)}finally{l=!1}return(s=o).forEach(h=>{h()}),w}function m(w){if(typeof w!="function")throw new Error(Be(10));r=w,f({type:Nu.REPLACE})}function g(){const w=d;return{subscribe(p){if(typeof p!="object"||p===null)throw new Error(Be(11));function h(){const S=p;S.next&&S.next(c())}return h(),{unsubscribe:w(h)}},[o_](){return this}}}return f({type:Nu.INIT}),{dispatch:f,subscribe:d,getState:c,replaceReducer:m,[o_]:g}}function GD(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Nu.INIT})>"u")throw new Error(Be(12));if(typeof n(void 0,{type:Nu.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Be(13))})}function kE(e){const t=Object.keys(e),n={};for(let s=0;s<t.length;s++){const o=t[s];typeof e[o]=="function"&&(n[o]=e[o])}const r=Object.keys(n);let i;try{GD(n)}catch(s){i=s}return function(o={},a){if(i)throw i;let l=!1;const u={};for(let c=0;c<r.length;c++){const d=r[c],f=n[d],m=o[d],g=f(m,a);if(typeof g>"u")throw a&&a.type,new Error(Be(14));u[d]=g,l=l||g!==m}return l=l||r.length!==Object.keys(o).length,l?u:o}}function Au(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function KD(...e){return t=>(n,r)=>{const i=t(n,r);let s=()=>{throw new Error(Be(15))};const o={getState:i.getState,dispatch:(l,...u)=>s(l,...u)},a=e.map(l=>l(o));return s=Au(...a)(i.dispatch),{...i,dispatch:s}}}function qD(e){return Wm(e)&&"type"in e&&typeof e.type=="string"}var IE=Symbol.for("immer-nothing"),a_=Symbol.for("immer-draftable"),Rt=Symbol.for("immer-state");function Zt(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Is=Object.getPrototypeOf;function Pr(e){return!!e&&!!e[Rt]}function Vn(e){var t;return e?PE(e)||Array.isArray(e)||!!e[a_]||!!((t=e.constructor)!=null&&t[a_])||Yc(e)||Qc(e):!1}var YD=Object.prototype.constructor.toString();function PE(e){if(!e||typeof e!="object")return!1;const t=Is(e);if(t===null)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===YD}function sa(e,t){qc(e)===0?Object.entries(e).forEach(([n,r])=>{t(n,r,e)}):e.forEach((n,r)=>t(r,n,e))}function qc(e){const t=e[Rt];return t?t.type_:Array.isArray(e)?1:Yc(e)?2:Qc(e)?3:0}function Wh(e,t){return qc(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function OE(e,t,n){const r=qc(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function QD(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function Yc(e){return e instanceof Map}function Qc(e){return e instanceof Set}function Yr(e){return e.copy_||e.base_}function Hh(e,t){if(Yc(e))return new Map(e);if(Qc(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&PE(e))return Is(e)?{...e}:Object.assign(Object.create(null),e);const n=Object.getOwnPropertyDescriptors(e);delete n[Rt];let r=Reflect.ownKeys(n);for(let i=0;i<r.length;i++){const s=r[i],o=n[s];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(n[s]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[s]})}return Object.create(Is(e),n)}function Gm(e,t=!1){return Xc(e)||Pr(e)||!Vn(e)||(qc(e)>1&&(e.set=e.add=e.clear=e.delete=XD),Object.freeze(e),t&&sa(e,(n,r)=>Gm(r,!0))),e}function XD(){Zt(2)}function Xc(e){return Object.isFrozen(e)}var JD={};function _i(e){const t=JD[e];return t||Zt(0,e),t}var oa;function RE(){return oa}function ZD(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function l_(e,t){t&&(_i("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Gh(e){Kh(e),e.drafts_.forEach(eL),e.drafts_=null}function Kh(e){e===oa&&(oa=e.parent_)}function u_(e){return oa=ZD(oa,e)}function eL(e){const t=e[Rt];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function c_(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return e!==void 0&&e!==n?(n[Rt].modified_&&(Gh(t),Zt(4)),Vn(e)&&(e=Du(t,e),t.parent_||Lu(t,e)),t.patches_&&_i("Patches").generateReplacementPatches_(n[Rt].base_,e,t.patches_,t.inversePatches_)):e=Du(t,n,[]),Gh(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==IE?e:void 0}function Du(e,t,n){if(Xc(t))return t;const r=t[Rt];if(!r)return sa(t,(i,s)=>d_(e,r,t,i,s,n)),t;if(r.scope_!==e)return t;if(!r.modified_)return Lu(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let s=i,o=!1;r.type_===3&&(s=new Set(i),i.clear(),o=!0),sa(s,(a,l)=>d_(e,r,i,a,l,n,o)),Lu(e,i,!1),n&&e.patches_&&_i("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function d_(e,t,n,r,i,s,o){if(Pr(i)){const a=s&&t&&t.type_!==3&&!Wh(t.assigned_,r)?s.concat(r):void 0,l=Du(e,i,a);if(OE(n,r,l),Pr(l))e.canAutoFreeze_=!1;else return}else o&&n.add(i);if(Vn(i)&&!Xc(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Du(e,i),(!t||!t.scope_.parent_)&&Lu(e,i)}}function Lu(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Gm(t,n)}function tL(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:RE(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,s=Km;n&&(i=[r],s=aa);const{revoke:o,proxy:a}=Proxy.revocable(i,s);return r.draft_=a,r.revoke_=o,a}var Km={get(e,t){if(t===Rt)return e;const n=Yr(e);if(!Wh(n,t))return nL(e,n,t);const r=n[t];return e.finalized_||!Vn(r)?r:r===uf(e.base_,t)?(cf(e),e.copy_[t]=Yh(r,e)):r},has(e,t){return t in Yr(e)},ownKeys(e){return Reflect.ownKeys(Yr(e))},set(e,t,n){const r=NE(Yr(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=uf(Yr(e),t),s=i==null?void 0:i[Rt];if(s&&s.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(QD(n,i)&&(n!==void 0||Wh(e.base_,t)))return!0;cf(e),qh(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty(e,t){return uf(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,cf(e),qh(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Yr(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty(){Zt(11)},getPrototypeOf(e){return Is(e.base_)},setPrototypeOf(){Zt(12)}},aa={};sa(Km,(e,t)=>{aa[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});aa.deleteProperty=function(e,t){return aa.set.call(this,e,t,void 0)};aa.set=function(e,t,n){return Km.set.call(this,e[0],t,n,e[0])};function uf(e,t){const n=e[Rt];return(n?Yr(n):e)[t]}function nL(e,t,n){var i;const r=NE(t,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function NE(e,t){if(!(t in e))return;let n=Is(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Is(n)}}function qh(e){e.modified_||(e.modified_=!0,e.parent_&&qh(e.parent_))}function cf(e){e.copy_||(e.copy_=Hh(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var rL=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,n,r)=>{if(typeof t=="function"&&typeof n!="function"){const s=n;n=t;const o=this;return function(l=s,...u){return o.produce(l,c=>n.call(this,c,...u))}}typeof n!="function"&&Zt(6),r!==void 0&&typeof r!="function"&&Zt(7);let i;if(Vn(t)){const s=u_(this),o=Yh(t,void 0);let a=!0;try{i=n(o),a=!1}finally{a?Gh(s):Kh(s)}return l_(s,r),c_(i,s)}else if(!t||typeof t!="object"){if(i=n(t),i===void 0&&(i=t),i===IE&&(i=void 0),this.autoFreeze_&&Gm(i,!0),r){const s=[],o=[];_i("Patches").generateReplacementPatches_(t,i,s,o),r(s,o)}return i}else Zt(1,t)},this.produceWithPatches=(t,n)=>{if(typeof t=="function")return(o,...a)=>this.produceWithPatches(o,l=>t(l,...a));let r,i;return[this.produce(t,n,(o,a)=>{r=o,i=a}),r,i]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){Vn(e)||Zt(8),Pr(e)&&(e=AE(e));const t=u_(this),n=Yh(e,void 0);return n[Rt].isManual_=!0,Kh(t),n}finishDraft(e,t){const n=e&&e[Rt];(!n||!n.isManual_)&&Zt(9);const{scope_:r}=n;return l_(r,t),c_(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=_i("Patches").applyPatches_;return Pr(e)?r(e,t):this.produce(e,i=>r(i,t))}};function Yh(e,t){const n=Yc(e)?_i("MapSet").proxyMap_(e,t):Qc(e)?_i("MapSet").proxySet_(e,t):tL(e,t);return(t?t.scope_:RE()).drafts_.push(n),n}function AE(e){return Pr(e)||Zt(10,e),DE(e)}function DE(e){if(!Vn(e)||Xc(e))return e;const t=e[Rt];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Hh(e,t.scope_.immer_.useStrictShallowCopy_)}else n=Hh(e,!0);return sa(n,(r,i)=>{OE(n,r,DE(i))}),t&&(t.finalized_=!1),n}var Nt=new rL,LE=Nt.produce;Nt.produceWithPatches.bind(Nt);Nt.setAutoFreeze.bind(Nt);Nt.setUseStrictShallowCopy.bind(Nt);Nt.applyPatches.bind(Nt);Nt.createDraft.bind(Nt);Nt.finishDraft.bind(Nt);function iL(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function sL(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function oL(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(n=>typeof n=="function")){const n=e.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${t}[${n}]`)}}var f_=e=>Array.isArray(e)?e:[e];function aL(e){const t=Array.isArray(e[0])?e[0]:e;return oL(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function lL(e,t){const n=[],{length:r}=e;for(let i=0;i<r;i++)n.push(e[i].apply(null,t));return n}var uL=class{constructor(e){this.value=e}deref(){return this.value}},cL=typeof WeakRef<"u"?WeakRef:uL,dL=0,h_=1;function hl(){return{s:dL,v:void 0,o:null,p:null}}function qm(e,t={}){let n=hl();const{resultEqualityCheck:r}=t;let i,s=0;function o(){var d;let a=n;const{length:l}=arguments;for(let f=0,m=l;f<m;f++){const g=arguments[f];if(typeof g=="function"||typeof g=="object"&&g!==null){let v=a.o;v===null&&(a.o=v=new WeakMap);const w=v.get(g);w===void 0?(a=hl(),v.set(g,a)):a=w}else{let v=a.p;v===null&&(a.p=v=new Map);const w=v.get(g);w===void 0?(a=hl(),v.set(g,a)):a=w}}const u=a;let c;if(a.s===h_?c=a.v:(c=e.apply(null,arguments),s++),u.s=h_,r){const f=((d=i==null?void 0:i.deref)==null?void 0:d.call(i))??i;f!=null&&r(f,c)&&(c=f,s!==0&&s--),i=typeof c=="object"&&c!==null||typeof c=="function"?new cL(c):c}return u.v=c,c}return o.clearCache=()=>{n=hl(),o.resetResultsCount()},o.resultsCount=()=>s,o.resetResultsCount=()=>{s=0},o}function ME(e,...t){const n=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,r=(...i)=>{let s=0,o=0,a,l={},u=i.pop();typeof u=="object"&&(l=u,u=i.pop()),iL(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const c={...n,...l},{memoize:d,memoizeOptions:f=[],argsMemoize:m=qm,argsMemoizeOptions:g=[],devModeChecks:v={}}=c,w=f_(f),p=f_(g),h=aL(i),y=d(function(){return s++,u.apply(null,arguments)},...w),S=m(function(){o++;const C=lL(h,arguments);return a=y.apply(null,C),a},...p);return Object.assign(S,{resultFunc:u,memoizedResultFunc:y,dependencies:h,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>a,recomputations:()=>s,resetRecomputations:()=>{s=0},memoize:d,argsMemoize:m})};return Object.assign(r,{withTypes:()=>r}),r}var fL=ME(qm),hL=Object.assign((e,t=fL)=>{sL(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const n=Object.keys(e),r=n.map(s=>e[s]);return t(r,(...s)=>s.reduce((o,a,l)=>(o[n[l]]=a,o),{}))},{withTypes:()=>hL});function FE(e){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,e):i(s)}var pL=FE(),mL=FE,gL=(...e)=>{const t=ME(...e);return(...n)=>{const r=t(...n),i=(s,...o)=>r(Pr(s)?AE(s):s,...o);return Object.assign(i,r),i}};gL(qm);var yL=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Au:Au.apply(null,arguments)},vL=e=>e&&typeof e.match=="function";function _r(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(ln(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>qD(r)&&r.type===e,n}var $E=class go extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,go.prototype)}static get[Symbol.species](){return go}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new go(...t[0].concat(this)):new go(...t.concat(this))}};function p_(e){return Vn(e)?LE(e,()=>{}):e}function m_(e,t,n){if(e.has(t)){let i=e.get(t);return n.update&&(i=n.update(i,t,e),e.set(t,i)),i}if(!n.insert)throw new Error(ln(10));const r=n.insert(t,e);return e.set(t,r),r}function _L(e){return typeof e=="boolean"}var wL=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=t??{};let o=new $E;return n&&(_L(n)?o.push(pL):o.push(mL(n.extraArgument))),o},SL="RTK_autoBatch",jE=e=>t=>{setTimeout(t,e)},EL=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:jE(10),xL=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,s=!1,o=!1;const a=new Set,l=e.type==="tick"?queueMicrotask:e.type==="raf"?EL:e.type==="callback"?e.queueNotification:jE(e.timeout),u=()=>{o=!1,s&&(s=!1,a.forEach(c=>c()))};return Object.assign({},r,{subscribe(c){const d=()=>i&&c(),f=r.subscribe(d);return a.add(c),()=>{f(),a.delete(c)}},dispatch(c){var d;try{return i=!((d=c==null?void 0:c.meta)!=null&&d[SL]),s=!i,s&&(o||(o=!0,l(u))),r.dispatch(c)}finally{i=!0}}})},CL=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new $E(e);return r&&i.push(xL(typeof r=="object"?r:void 0)),i},TL=!0;function bL(e){const t=wL(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=e||{};let a;if(typeof n=="function")a=n;else if(Wm(n))a=kE(n);else throw new Error(ln(1));let l;typeof r=="function"?l=r(t):l=t();let u=Au;i&&(u=yL({trace:!TL,...typeof i=="object"&&i}));const c=KD(...l),d=CL(c);let f=typeof o=="function"?o(d):d();const m=u(...f);return Hm(a,s,m)}function UE(e){const t={},n=[];let r;const i={addCase(s,o){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(ln(28));if(a in t)throw new Error(ln(29));return t[a]=o,i},addMatcher(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return e(i),[t,n,r]}function kL(e){return typeof e=="function"}function IL(e,t){let[n,r,i]=UE(t),s;if(kL(e))s=()=>p_(e());else{const a=p_(e);s=()=>a}function o(a=s(),l){let u=[n[l.type],...r.filter(({matcher:c})=>c(l)).map(({reducer:c})=>c)];return u.filter(c=>!!c).length===0&&(u=[i]),u.reduce((c,d)=>{if(d)if(Pr(c)){const m=d(c,l);return m===void 0?c:m}else{if(Vn(c))return LE(c,f=>d(f,l));{const f=d(c,l);if(f===void 0){if(c===null)return c;throw new Error(ln(9))}return f}}return c},a)}return o.getInitialState=s,o}var PL="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",OL=(e=21)=>{let t="",n=e;for(;n--;)t+=PL[Math.random()*64|0];return t},RL=(e,t)=>vL(e)?e.match(t):e(t);function NL(...e){return t=>e.some(n=>RL(n,t))}var AL=["name","message","stack","code"],df=class{constructor(e,t){_d(this,"_type");this.payload=e,this.meta=t}},g_=class{constructor(e,t){_d(this,"_type");this.payload=e,this.meta=t}},DL=e=>{if(typeof e=="object"&&e!==null){const t={};for(const n of AL)typeof e[n]=="string"&&(t[n]=e[n]);return t}return{message:String(e)}},Jc=(()=>{function e(t,n,r){const i=_r(t+"/fulfilled",(l,u,c,d)=>({payload:l,meta:{...d||{},arg:c,requestId:u,requestStatus:"fulfilled"}})),s=_r(t+"/pending",(l,u,c)=>({payload:void 0,meta:{...c||{},arg:u,requestId:l,requestStatus:"pending"}})),o=_r(t+"/rejected",(l,u,c,d,f)=>({payload:d,error:(r&&r.serializeError||DL)(l||"Rejected"),meta:{...f||{},arg:c,requestId:u,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(l==null?void 0:l.name)==="AbortError",condition:(l==null?void 0:l.name)==="ConditionError"}}));function a(l){return(u,c,d)=>{const f=r!=null&&r.idGenerator?r.idGenerator(l):OL(),m=new AbortController;let g;function v(p){g=p,m.abort()}const w=async function(){var y,S;let p;try{let x=(y=r==null?void 0:r.condition)==null?void 0:y.call(r,l,{getState:c,extra:d});if(ML(x)&&(x=await x),x===!1||m.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const C=new Promise((E,P)=>m.signal.addEventListener("abort",()=>P({name:"AbortError",message:g||"Aborted"})));u(s(f,l,(S=r==null?void 0:r.getPendingMeta)==null?void 0:S.call(r,{requestId:f,arg:l},{getState:c,extra:d}))),p=await Promise.race([C,Promise.resolve(n(l,{dispatch:u,getState:c,extra:d,requestId:f,signal:m.signal,abort:v,rejectWithValue:(E,P)=>new df(E,P),fulfillWithValue:(E,P)=>new g_(E,P)})).then(E=>{if(E instanceof df)throw E;return E instanceof g_?i(E.payload,f,l,E.meta):i(E,f,l)})])}catch(x){p=x instanceof df?o(null,f,l,x.payload,x.meta):o(x,f,l)}return r&&!r.dispatchConditionRejection&&o.match(p)&&p.meta.condition||u(p),p}();return Object.assign(w,{abort:v,requestId:f,arg:l,unwrap(){return w.then(LL)}})}}return Object.assign(a,{pending:s,rejected:o,fulfilled:i,settled:NL(o,i),typePrefix:t})}return e.withTypes=()=>e,e})();function LL(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function ML(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var FL=Symbol.for("rtk-slice-createasyncthunk");function $L(e,t){return`${e}/${t}`}function jL({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[FL];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(ln(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(zL()):i.reducers)||{},l=Object.keys(a),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(w,p){const h=typeof w=="string"?w:w.type;if(!h)throw new Error(ln(12));if(h in u.sliceCaseReducersByType)throw new Error(ln(13));return u.sliceCaseReducersByType[h]=p,c},addMatcher(w,p){return u.sliceMatchers.push({matcher:w,reducer:p}),c},exposeAction(w,p){return u.actionCreators[w]=p,c},exposeCaseReducer(w,p){return u.sliceCaseReducersByName[w]=p,c}};l.forEach(w=>{const p=a[w],h={reducerName:w,type:$L(s,w),createNotation:typeof i.reducers=="function"};VL(p)?HL(h,p,c,t):BL(h,p,c)});function d(){const[w={},p=[],h=void 0]=typeof i.extraReducers=="function"?UE(i.extraReducers):[i.extraReducers],y={...w,...u.sliceCaseReducersByType};return IL(i.initialState,S=>{for(let x in y)S.addCase(x,y[x]);for(let x of u.sliceMatchers)S.addMatcher(x.matcher,x.reducer);for(let x of p)S.addMatcher(x.matcher,x.reducer);h&&S.addDefaultCase(h)})}const f=w=>w,m=new WeakMap;let g;const v={name:s,reducerPath:o,reducer(w,p){return g||(g=d()),g(w,p)},actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState(){return g||(g=d()),g.getInitialState()},getSelectors(w=f){const p=m_(m,this,{insert:()=>new WeakMap});return m_(p,w,{insert:()=>{const h={};for(const[y,S]of Object.entries(i.selectors??{}))h[y]=UL(this,S,w,this!==v);return h}})},selectSlice(w){let p=w[this.reducerPath];return typeof p>"u"&&this!==v&&(p=this.getInitialState()),p},get selectors(){return this.getSelectors(this.selectSlice)},injectInto(w,{reducerPath:p,...h}={}){const y=p??this.reducerPath;return w.inject({reducerPath:y,reducer:this.reducer},h),{...this,reducerPath:y}}};return v}}function UL(e,t,n,r){function i(s,...o){let a=n.call(e,s);return typeof a>"u"&&r&&(a=e.getInitialState()),t(a,...o)}return i.unwrapped=t,i}var zE=jL();function zL(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function BL({type:e,reducerName:t,createNotation:n},r,i){let s,o;if("reducer"in r){if(n&&!WL(r))throw new Error(ln(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(e,s).exposeCaseReducer(t,s).exposeAction(t,o?_r(e,o):_r(e))}function VL(e){return e._reducerDefinitionType==="asyncThunk"}function WL(e){return e._reducerDefinitionType==="reducerWithPrepare"}function HL({type:e,reducerName:t},n,r,i){if(!i)throw new Error(ln(18));const{payloadCreator:s,fulfilled:o,pending:a,rejected:l,settled:u,options:c}=n,d=i(e,s,c);r.exposeAction(t,d),o&&r.addCase(d.fulfilled,o),a&&r.addCase(d.pending,a),l&&r.addCase(d.rejected,l),u&&r.addMatcher(d.settled,u),r.exposeCaseReducer(t,{fulfilled:o||pl,pending:a||pl,rejected:l||pl,settled:u||pl})}function pl(){}var Ym="listenerMiddleware";_r(`${Ym}/add`);_r(`${Ym}/removeAll`);_r(`${Ym}/remove`);function ln(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}/**
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
 */const BE={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const I=function(e,t){if(!e)throw Vs(t)},Vs=function(e){return new Error("Firebase Database ("+BE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
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
 */const VE=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},GL=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Qm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(f=64)),r.push(n[c],n[d],n[f],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(VE(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):GL(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new KL;const f=s<<2|a>>4;if(r.push(f),u!==64){const m=a<<4&240|u>>2;if(r.push(m),d!==64){const g=u<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class KL extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const WE=function(e){const t=VE(e);return Qm.encodeByteArray(t,!0)},Mu=function(e){return WE(e).replace(/\./g,"")},Fu=function(e){try{return Qm.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function qL(e){return HE(void 0,e)}function HE(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!YL(n)||(e[n]=HE(e[n],t[n]));return e}function YL(e){return e!=="__proto__"}/**
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
 */function QL(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const XL=()=>QL().__FIREBASE_DEFAULTS__,JL=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},ZL=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Fu(e[1]);return t&&JSON.parse(t)},Xm=()=>{try{return XL()||JL()||ZL()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},eM=e=>{var t,n;return(n=(t=Xm())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},tM=e=>{const t=eM(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},GE=()=>{var e;return(e=Xm())===null||e===void 0?void 0:e.config},nM=e=>{var t;return(t=Xm())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Jm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function rM(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Mu(JSON.stringify(n)),Mu(JSON.stringify(o)),a].join(".")}/**
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
 */function En(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(En())}function iM(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function KE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qE(){return BE.NODE_ADMIN===!0}function sM(){try{return typeof indexedDB=="object"}catch{return!1}}function oM(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const aM="FirebaseError";class $r extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=aM,Object.setPrototypeOf(this,$r.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Da.prototype.create)}}class Da{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?lM(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new $r(i,a,r)}}function lM(e,t){return e.replace(uM,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const uM=/\{\$([^}]+)}/g;/**
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
 */function la(e){return JSON.parse(e)}function Oe(e){return JSON.stringify(e)}/**
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
 */const YE=function(e){let t={},n={},r={},i="";try{const s=e.split(".");t=la(Fu(s[0])||""),n=la(Fu(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:r,signature:i}},cM=function(e){const t=YE(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},dM=function(e){const t=YE(e).claims;return typeof t=="object"&&t.admin===!0};/**
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
 */function qn(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Ps(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function y_(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function $u(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function ju(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(v_(s)&&v_(o)){if(!ju(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function v_(e){return e!==null&&typeof e=="object"}/**
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
 */function Zc(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function yo(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function vo(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}/**
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
 */class fM{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const r=this.W_;if(typeof t=="string")for(let d=0;d<16;d++)r[d]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<n;)if(s[o]=t.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=t[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)t[r]=this.chain_[i]>>s&255,++r;return t}}function hM(e,t){const n=new pM(e,t);return n.subscribe.bind(n)}class pM{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");mM(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=ff),i.error===void 0&&(i.error=ff),i.complete===void 0&&(i.complete=ff);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mM(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function ff(){}function QE(e,t){return`${e} failed: ${t} argument `}/**
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
 */const gM=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,I(r<e.length,"Surrogate pair missing trail surrogate.");const o=e.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},ed=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};/**
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
 */function Ht(e){return e&&e._delegate?e._delegate:e}class wi{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */let yM=class{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Jm;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(_M(t))try{this.getOrInitializeService({instanceIdentifier:Qr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Qr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Qr){return this.instances.has(t)}getOptions(t=Qr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vM(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Qr){return this.component?this.component.multipleInstances?t:Qr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function vM(e){return e===Qr?void 0:e}function _M(e){return e.instantiationMode==="EAGER"}/**
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
 */class wM{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new yM(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ae||(ae={}));const SM={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},EM=ae.INFO,xM={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},CM=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=xM[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class eg{constructor(t){this.name=t,this._logLevel=EM,this._logHandler=CM,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ae))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?SM[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...t),this._logHandler(this,ae.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...t),this._logHandler(this,ae.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...t),this._logHandler(this,ae.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...t),this._logHandler(this,ae.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...t),this._logHandler(this,ae.ERROR,...t)}}const TM=(e,t)=>t.some(n=>e instanceof n);let __,w_;function bM(){return __||(__=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kM(){return w_||(w_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const XE=new WeakMap,Qh=new WeakMap,JE=new WeakMap,hf=new WeakMap,tg=new WeakMap;function IM(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(wr(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&XE.set(n,e)}).catch(()=>{}),tg.set(t,e),t}function PM(e){if(Qh.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Qh.set(e,t)}let Xh={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Qh.get(e);if(t==="objectStoreNames")return e.objectStoreNames||JE.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wr(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function OM(e){Xh=e(Xh)}function RM(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(pf(this),t,...n);return JE.set(r,t.sort?t.sort():[t]),wr(r)}:kM().includes(e)?function(...t){return e.apply(pf(this),t),wr(XE.get(this))}:function(...t){return wr(e.apply(pf(this),t))}}function NM(e){return typeof e=="function"?RM(e):(e instanceof IDBTransaction&&PM(e),TM(e,bM())?new Proxy(e,Xh):e)}function wr(e){if(e instanceof IDBRequest)return IM(e);if(hf.has(e))return hf.get(e);const t=NM(e);return t!==e&&(hf.set(e,t),tg.set(t,e)),t}const pf=e=>tg.get(e);function AM(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=wr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(wr(o.result),l.oldVersion,l.newVersion,wr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const DM=["get","getKey","getAll","getAllKeys","count"],LM=["put","add","delete","clear"],mf=new Map;function S_(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(mf.get(t))return mf.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=LM.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||DM.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return mf.set(t,s),s}OM(e=>({...e,get:(t,n,r)=>S_(t,n)||e.get(t,n,r),has:(t,n)=>!!S_(t,n)||e.has(t,n)}));/**
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
 */class MM{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(FM(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function FM(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Jh="@firebase/app",E_="0.9.25";/**
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
 */const Si=new eg("@firebase/app"),$M="@firebase/app-compat",jM="@firebase/analytics-compat",UM="@firebase/analytics",zM="@firebase/app-check-compat",BM="@firebase/app-check",VM="@firebase/auth",WM="@firebase/auth-compat",HM="@firebase/database",GM="@firebase/database-compat",KM="@firebase/functions",qM="@firebase/functions-compat",YM="@firebase/installations",QM="@firebase/installations-compat",XM="@firebase/messaging",JM="@firebase/messaging-compat",ZM="@firebase/performance",eF="@firebase/performance-compat",tF="@firebase/remote-config",nF="@firebase/remote-config-compat",rF="@firebase/storage",iF="@firebase/storage-compat",sF="@firebase/firestore",oF="@firebase/firestore-compat",aF="firebase",lF="10.7.1";/**
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
 */const Zh="[DEFAULT]",uF={[Jh]:"fire-core",[$M]:"fire-core-compat",[UM]:"fire-analytics",[jM]:"fire-analytics-compat",[BM]:"fire-app-check",[zM]:"fire-app-check-compat",[VM]:"fire-auth",[WM]:"fire-auth-compat",[HM]:"fire-rtdb",[GM]:"fire-rtdb-compat",[KM]:"fire-fn",[qM]:"fire-fn-compat",[YM]:"fire-iid",[QM]:"fire-iid-compat",[XM]:"fire-fcm",[JM]:"fire-fcm-compat",[ZM]:"fire-perf",[eF]:"fire-perf-compat",[tF]:"fire-rc",[nF]:"fire-rc-compat",[rF]:"fire-gcs",[iF]:"fire-gcs-compat",[sF]:"fire-fst",[oF]:"fire-fst-compat","fire-js":"fire-js",[aF]:"fire-js-all"};/**
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
 */const Uu=new Map,ep=new Map;function cF(e,t){try{e.container.addComponent(t)}catch(n){Si.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Os(e){const t=e.name;if(ep.has(t))return Si.debug(`There were multiple attempts to register component ${t}.`),!1;ep.set(t,e);for(const n of Uu.values())cF(n,e);return!0}function ZE(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const dF={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Sr=new Da("app","Firebase",dF);/**
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
 */class fF{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Sr.create("app-deleted",{appName:this._name})}}/**
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
 */const td=lF;function ex(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Zh,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Sr.create("bad-app-name",{appName:String(i)});if(n||(n=GE()),!n)throw Sr.create("no-options");const s=Uu.get(i);if(s){if(ju(n,s.options)&&ju(r,s.config))return s;throw Sr.create("duplicate-app",{appName:i})}const o=new wM(i);for(const l of ep.values())o.addComponent(l);const a=new fF(n,r,o);return Uu.set(i,a),a}function hF(e=Zh){const t=Uu.get(e);if(!t&&e===Zh&&GE())return ex();if(!t)throw Sr.create("no-app",{appName:e});return t}function Er(e,t,n){var r;let i=(r=uF[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Si.warn(a.join(" "));return}Os(new wi(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const pF="firebase-heartbeat-database",mF=1,ua="firebase-heartbeat-store";let gf=null;function tx(){return gf||(gf=AM(pF,mF,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ua)}}}).catch(e=>{throw Sr.create("idb-open",{originalErrorMessage:e.message})})),gf}async function gF(e){try{return await(await tx()).transaction(ua).objectStore(ua).get(nx(e))}catch(t){if(t instanceof $r)Si.warn(t.message);else{const n=Sr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Si.warn(n.message)}}}async function x_(e,t){try{const r=(await tx()).transaction(ua,"readwrite");await r.objectStore(ua).put(t,nx(e)),await r.done}catch(n){if(n instanceof $r)Si.warn(n.message);else{const r=Sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Si.warn(r.message)}}}function nx(e){return`${e.name}!${e.options.appId}`}/**
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
 */const yF=1024,vF=30*24*60*60*1e3;class _F{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new SF(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=C_();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=vF}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=C_(),{heartbeatsToSend:r,unsentEntries:i}=wF(this._heartbeatsCache.heartbeats),s=Mu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function C_(){return new Date().toISOString().substring(0,10)}function wF(e,t=yF){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),T_(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),T_(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class SF{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sM()?oM().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await gF(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return x_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return x_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function T_(e){return Mu(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function EF(e){Os(new wi("platform-logger",t=>new MM(t),"PRIVATE")),Os(new wi("heartbeat",t=>new _F(t),"PRIVATE")),Er(Jh,E_,e),Er(Jh,E_,"esm2017"),Er("fire-js","")}EF("");function rx(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xF=rx,ix=new Da("auth","Firebase",rx());/**
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
 */const zu=new eg("@firebase/auth");function CF(e,...t){zu.logLevel<=ae.WARN&&zu.warn(`Auth (${td}): ${e}`,...t)}function Ul(e,...t){zu.logLevel<=ae.ERROR&&zu.error(`Auth (${td}): ${e}`,...t)}/**
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
 */function Ei(e,...t){throw rg(e,...t)}function ng(e,...t){return rg(e,...t)}function TF(e,t,n){const r=Object.assign(Object.assign({},xF()),{[t]:n});return new Da("auth","Firebase",r).create(t,{appName:e.name})}function rg(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return ix.create(e,...t)}function ee(e,t,...n){if(!e)throw rg(t,...n)}function Ln(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ul(t),new Error(t)}function Bu(e,t){e||Ln(t)}function bF(){return b_()==="http:"||b_()==="https:"}function b_(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function kF(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bF()||iM()||"connection"in navigator)?navigator.onLine:!0}function IF(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class La{constructor(t,n){this.shortDelay=t,this.longDelay=n,Bu(n>t,"Short delay should be less than long delay!"),this.isMobile=Zm()||KE()}get(){return kF()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function PF(e,t){Bu(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class sx{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const OF={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const RF=new La(3e4,6e4);function jr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ur(e,t,n,r,i={}){return ox(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=Zc(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),sx.fetch()(ax(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function ox(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},OF),t);try{const i=new AF(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ml(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ml(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ml(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw ml(e,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw TF(e,c,u);Ei(e,c)}}catch(i){if(i instanceof $r)throw i;Ei(e,"network-request-failed",{message:String(i)})}}async function Ma(e,t,n,r,i={}){const s=await Ur(e,t,n,r,i);return"mfaPendingCredential"in s&&Ei(e,"multi-factor-auth-required",{_serverResponse:s}),s}function ax(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?PF(e.config,i):`${e.config.apiScheme}://${i}`}function NF(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class AF{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ng(this.auth,"network-request-failed")),RF.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ml(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ng(e,t,r);return i.customData._tokenResponse=n,i}function k_(e){return e!==void 0&&e.enterprise!==void 0}class DF{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return NF(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function LF(e,t){return Ur(e,"GET","/v2/recaptchaConfig",jr(e,t))}/**
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
 */async function MF(e,t){return Ur(e,"POST","/v1/accounts:delete",t)}async function FF(e,t){return Ur(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Ro(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function $F(e,t=!1){const n=Ht(e),r=await n.getIdToken(t),i=lx(r);ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ro(yf(i.auth_time)),issuedAtTime:Ro(yf(i.iat)),expirationTime:Ro(yf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function yf(e){return Number(e)*1e3}function lx(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ul("JWT malformed, contained fewer than 3 sections"),null;try{const i=Fu(n);return i?JSON.parse(i):(Ul("Failed to decode base64 JWT payload"),null)}catch(i){return Ul("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function jF(e){const t=lx(e);return ee(t,"internal-error"),ee(typeof t.exp<"u","internal-error"),ee(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Vu(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof $r&&UF(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function UF({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class zF{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ux{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ro(this.lastLoginAt),this.creationTime=Ro(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Wu(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Vu(e,FF(n,{idToken:r}));ee(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?WF(s.providerUserInfo):[],a=VF(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ux(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function BF(e){const t=Ht(e);await Wu(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function VF(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function WF(e){return e.map(t=>{var{providerId:n}=t,r=_m(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function HF(e,t){const n=await ox(e,{},async()=>{const r=Zc({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=ax(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",sx.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function GF(e,t){return Ur(e,"POST","/v2/accounts:revokeToken",jr(e,t))}/**
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
 */class ca{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ee(t.idToken,"internal-error"),ee(typeof t.idToken<"u","internal-error"),ee(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):jF(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return ee(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await HF(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ca;return r&&(ee(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(ee(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(ee(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ca,this.toJSON())}_performRefresh(){return Ln("not implemented")}}/**
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
 */function Xn(e,t){ee(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class di{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=_m(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zF(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ux(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Vu(this,this.stsTokenManager.getToken(this.auth,t));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return $F(this,t)}reload(){return BF(this)}_assign(t){this!==t&&(ee(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new di(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Wu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Vu(this,MF(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:S,isAnonymous:x,providerData:C,stsTokenManager:E}=n;ee(y&&E,t,"internal-error");const P=ca.fromJSON(this.name,E);ee(typeof y=="string",t,"internal-error"),Xn(d,t.name),Xn(f,t.name),ee(typeof S=="boolean",t,"internal-error"),ee(typeof x=="boolean",t,"internal-error"),Xn(m,t.name),Xn(g,t.name),Xn(v,t.name),Xn(w,t.name),Xn(p,t.name),Xn(h,t.name);const M=new di({uid:y,auth:t,email:f,emailVerified:S,displayName:d,isAnonymous:x,photoURL:g,phoneNumber:m,tenantId:v,stsTokenManager:P,createdAt:p,lastLoginAt:h});return C&&Array.isArray(C)&&(M.providerData=C.map(L=>Object.assign({},L))),w&&(M._redirectEventId=w),M}static async _fromIdTokenResponse(t,n,r=!1){const i=new ca;i.updateFromServerResponse(n);const s=new di({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Wu(s),s}}/**
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
 */const I_=new Map;function ri(e){Bu(e instanceof Function,"Expected a class definition");let t=I_.get(e);return t?(Bu(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,I_.set(e,t),t)}/**
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
 */class cx{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}cx.type="NONE";const P_=cx;/**
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
 */function vf(e,t,n){return`firebase:${e}:${t}:${n}`}class cs{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=vf(this.userKey,i.apiKey,s),this.fullPersistenceKey=vf("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?di._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new cs(ri(P_),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||ri(P_);const o=vf(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=di._fromJSON(t,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new cs(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new cs(s,t,r))}}/**
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
 */function O_(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(QF(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(KF(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(JF(t))return"Blackberry";if(ZF(t))return"Webos";if(qF(t))return"Safari";if((t.includes("chrome/")||YF(t))&&!t.includes("edge/"))return"Chrome";if(XF(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function KF(e=En()){return/firefox\//i.test(e)}function qF(e=En()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function YF(e=En()){return/crios\//i.test(e)}function QF(e=En()){return/iemobile/i.test(e)}function XF(e=En()){return/android/i.test(e)}function JF(e=En()){return/blackberry/i.test(e)}function ZF(e=En()){return/webos/i.test(e)}/**
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
 */function dx(e,t=[]){let n;switch(e){case"Browser":n=O_(En());break;case"Worker":n=`${O_(En())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${td}/${r}`}/**
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
 */class e${constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function t$(e,t={}){return Ur(e,"GET","/v2/passwordPolicy",jr(e,t))}/**
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
 */const n$=6;class r${constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:n$,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class i${constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new R_(this),this.idTokenSubscription=new R_(this),this.beforeStateQueue=new e$(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ix,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ri(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await cs.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Wu(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=IF()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Ht(t):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&ee(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ri(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await t$(this),n=new r$(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Da("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await GF(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ri(t)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await cs.create(this,[ri(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=dx(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&CF(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Fa(e){return Ht(e)}class R_{constructor(t){this.auth=t,this.observer=null,this.addObserver=hM(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function s$(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function o$(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=ng("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",s$().appendChild(r)})}const a$="https://www.google.com/recaptcha/enterprise.js?render=",l$="recaptcha-enterprise",u$="NO_RECAPTCHA";class c${constructor(t){this.type=l$,this.auth=Fa(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{LF(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new DF(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;k_(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o(u$)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&k_(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}o$(a$+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function N_(e,t,n,r=!1){const i=new c$(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function tp(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await N_(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await N_(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(s)})}/**
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
 */function d$(e,t){const n=ZE(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ju(s,t??{}))return i;Ei(i,"already-initialized")}return n.initialize({options:t})}function f$(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ri);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
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
 */class fx{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Ln("not implemented")}_getIdTokenResponse(t){return Ln("not implemented")}_linkToIdToken(t,n){return Ln("not implemented")}_getReauthenticationResolver(t){return Ln("not implemented")}}async function h$(e,t){return Ur(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function p$(e,t){return Ma(e,"POST","/v1/accounts:signInWithPassword",jr(e,t))}/**
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
 */async function m$(e,t){return Ma(e,"POST","/v1/accounts:signInWithEmailLink",jr(e,t))}async function g$(e,t){return Ma(e,"POST","/v1/accounts:signInWithEmailLink",jr(e,t))}/**
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
 */class da extends fx{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new da(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new da(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return tp(t,n,"signInWithPassword",p$);case"emailLink":return m$(t,{email:this._email,oobCode:this._password});default:Ei(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return tp(t,r,"signUpPassword",h$);case"emailLink":return g$(t,{idToken:n,email:this._email,oobCode:this._password});default:Ei(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function _f(e,t){return Ma(e,"POST","/v1/accounts:signInWithIdp",jr(e,t))}/**
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
 */const y$="http://localhost";class xi extends fx{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new xi(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ei("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=_m(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new xi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return _f(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,_f(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,_f(t,n)}buildRequest(){const t={requestUri:y$,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Zc(n)}return t}}/**
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
 */function v$(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _$(e){const t=yo(vo(e)).link,n=t?yo(vo(t)).deep_link_id:null,r=yo(vo(e)).deep_link_id;return(r?yo(vo(r)).link:null)||r||n||t||e}class ig{constructor(t){var n,r,i,s,o,a;const l=yo(vo(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=v$((i=l.mode)!==null&&i!==void 0?i:null);ee(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=_$(t);try{return new ig(n)}catch{return null}}}/**
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
 */class Ws{constructor(){this.providerId=Ws.PROVIDER_ID}static credential(t,n){return da._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=ig.parseLink(n);return ee(r,"argument-error"),da._fromEmailAndCode(t,r.code,r.tenantId)}}Ws.PROVIDER_ID="password";Ws.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ws.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class w${constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class nd extends w${constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class rr extends nd{constructor(){super("facebook.com")}static credential(t){return xi._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return rr.credentialFromTaggedObject(t)}static credentialFromError(t){return rr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return rr.credential(t.oauthAccessToken)}catch{return null}}}rr.FACEBOOK_SIGN_IN_METHOD="facebook.com";rr.PROVIDER_ID="facebook.com";/**
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
 */class Nn extends nd{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return xi._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Nn.credentialFromTaggedObject(t)}static credentialFromError(t){return Nn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.GOOGLE_SIGN_IN_METHOD="google.com";Nn.PROVIDER_ID="google.com";/**
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
 */class ir extends nd{constructor(){super("github.com")}static credential(t){return xi._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ir.credentialFromTaggedObject(t)}static credentialFromError(t){return ir.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ir.credential(t.oauthAccessToken)}catch{return null}}}ir.GITHUB_SIGN_IN_METHOD="github.com";ir.PROVIDER_ID="github.com";/**
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
 */class sr extends nd{constructor(){super("twitter.com")}static credential(t,n){return xi._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return sr.credentialFromTaggedObject(t)}static credentialFromError(t){return sr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return sr.credential(n,r)}catch{return null}}}sr.TWITTER_SIGN_IN_METHOD="twitter.com";sr.PROVIDER_ID="twitter.com";/**
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
 */async function S$(e,t){return Ma(e,"POST","/v1/accounts:signUp",jr(e,t))}/**
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
 */class fa{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await di._fromIdTokenResponse(t,r,i),o=A_(r);return new fa({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=A_(r);return new fa({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function A_(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Hu extends $r{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Hu.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Hu(t,n,r,i)}}function E$(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Hu._fromErrorAndOperation(e,s,t,r):s})}/**
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
 */async function x$(e,t,n=!1){const r="signIn",i=await E$(e,r,t),s=await fa._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function C$(e,t){return x$(Fa(e),t)}/**
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
 */async function hx(e){const t=Fa(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function T$(e,t,n){const r=Fa(e),o=await tp(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",S$).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&hx(e),l}),a=await fa._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function b$(e,t,n){return C$(Ht(e),Ws.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&hx(e),r})}/**
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
 */async function k$(e,t){return Ur(e,"POST","/v1/accounts:update",t)}/**
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
 */async function I$(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=Ht(e),s={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},o=await Vu(r,k$(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function P$(e){return Ht(e).signOut()}new La(3e4,6e4);/**
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
 */new La(2e3,1e4);/**
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
 */new La(3e4,6e4);/**
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
 */new La(5e3,15e3);var D_="@firebase/auth",L_="1.5.1";/**
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
 */class O${constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function R$(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function N$(e){Os(new wi("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dx(e)},u=new i$(r,i,s,l);return f$(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Os(new wi("auth-internal",t=>{const n=Fa(t.getProvider("auth").getImmediate());return(r=>new O$(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Er(D_,L_,R$(e)),Er(D_,L_,"esm2017")}/**
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
 */const A$=5*60;nM("authIdTokenMaxAge");N$("Browser");var D$="firebase",L$="10.7.1";/**
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
 */Er(D$,L$,"app");const M_="@firebase/database",F_="1.0.2";/**
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
 */let px="";function M$(e){px=e}/**
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
 */class F${constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),Oe(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:la(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
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
 */class $${constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return qn(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
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
 */const mx=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new F$(t)}}catch{}return new $$},ii=mx("localStorage"),np=mx("sessionStorage");/**
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
 */const ds=new eg("@firebase/database"),j$=function(){let e=1;return function(){return e++}}(),gx=function(e){const t=gM(e),n=new fM;n.update(t);const r=n.digest();return Qm.encodeByteArray(r)},$a=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?t+=$a.apply(null,r):typeof r=="object"?t+=Oe(r):t+=r,t+=" "}return t};let fi=null,$_=!0;const U$=function(e,t){I(!t||e===!0||e===!1,"Can't turn on custom loggers persistently."),e===!0?(ds.logLevel=ae.VERBOSE,fi=ds.log.bind(ds),t&&np.set("logging_enabled",!0)):typeof e=="function"?fi=e:(fi=null,np.remove("logging_enabled"))},et=function(...e){if($_===!0&&($_=!1,fi===null&&np.get("logging_enabled")===!0&&U$(!0)),fi){const t=$a.apply(null,e);fi(t)}},ja=function(e){return function(...t){et(e,...t)}},rp=function(...e){const t="FIREBASE INTERNAL ERROR: "+$a(...e);ds.error(t)},Wn=function(...e){const t=`FIREBASE FATAL ERROR: ${$a(...e)}`;throw ds.error(t),new Error(t)},It=function(...e){const t="FIREBASE WARNING: "+$a(...e);ds.warn(t)},z$=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&It("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},yx=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},B$=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Rs="[MIN_NAME]",Ci="[MAX_NAME]",Hs=function(e,t){if(e===t)return 0;if(e===Rs||t===Ci)return-1;if(t===Rs||e===Ci)return 1;{const n=j_(e),r=j_(t);return n!==null?r!==null?n-r===0?e.length-t.length:n-r:-1:r!==null?1:e<t?-1:1}},V$=function(e,t){return e===t?0:e<t?-1:1},io=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Oe(t))},sg=function(e){if(typeof e!="object"||e===null)return Oe(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)r!==0&&(n+=","),n+=Oe(t[r]),n+=":",n+=sg(e[t[r]]);return n+="}",n},vx=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function _t(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const _x=function(e){I(!yx(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,s,o,a,l;e===0?(s=0,o=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(e)/Math.LN2),r),s=a+r,o=Math.round(e*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(e/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=t;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},W$=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},H$=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function G$(e,t){let n="Unknown Error";e==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":e==="permission_denied"?n="Client doesn't have permission to access the desired data.":e==="unavailable"&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}const K$=new RegExp("^-?(0*)\\d{1,10}$"),q$=-2147483648,Y$=2147483647,j_=function(e){if(K$.test(e)){const t=Number(e);if(t>=q$&&t<=Y$)return t}return null},Ua=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw It("Exception was thrown by user callback.",n),t},Math.floor(0))}},Q$=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},No=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class X${constructor(t,n){this.appName_=t,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(t))}notifyForInvalidToken(){It(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class J${constructor(t,n,r){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(et("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',It(t)}}class fs{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}fs.OWNER="owner";/**
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
 */const og="5",wx="v",Sx="s",Ex="r",xx="f",Cx=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Tx="ls",bx="p",ip="ac",kx="websocket",Ix="long_polling";/**
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
 */class Px{constructor(t,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ii.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&ii.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function Z$(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function Ox(e,t,n){I(typeof t=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let r;if(t===kx)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===Ix)r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);Z$(e)&&(n.ns=e.namespace);const i=[];return _t(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class ej{constructor(){this.counters_={}}incrementCounter(t,n=1){qn(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return qL(this.counters_)}}/**
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
 */const wf={},Sf={};function ag(e){const t=e.toString();return wf[t]||(wf[t]=new ej),wf[t]}function tj(e,t){const n=e.toString();return Sf[n]||(Sf[n]=t()),Sf[n]}/**
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
 */class nj{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ua(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const U_="start",rj="close",ij="pLPCommand",sj="pRTLPCB",Rx="id",Nx="pw",Ax="ser",oj="cb",aj="seg",lj="ts",uj="d",cj="dframe",Dx=1870,Lx=30,dj=Dx-Lx,fj=25e3,hj=3e4;class ts{constructor(t,n,r,i,s,o,a){this.connId=t,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ja(t),this.stats_=ag(n),this.urlFn=l=>(this.appCheckToken&&(l[ip]=this.appCheckToken),Ox(n,Ix,l))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new nj(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(hj)),B$(()=>{if(this.isClosed_)return;this.scriptTagHolder=new lg((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===U_)this.id=a,this.password=l;else if(o===rj)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[U_]="t",r[Ax]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[oj]=this.scriptTagHolder.uniqueCallbackIdentifier),r[wx]=og,this.transportSessionId&&(r[Sx]=this.transportSessionId),this.lastSessionId&&(r[Tx]=this.lastSessionId),this.applicationId&&(r[bx]=this.applicationId),this.appCheckToken&&(r[ip]=this.appCheckToken),typeof location<"u"&&location.hostname&&Cx.test(location.hostname)&&(r[Ex]=xx);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ts.forceAllow_=!0}static forceDisallow(){ts.forceDisallow_=!0}static isAvailable(){return ts.forceAllow_?!0:!ts.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!W$()&&!H$()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=Oe(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=WE(n),i=vx(r,dj);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[cj]="t",r[Rx]=t,r[Nx]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=Oe(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class lg{constructor(t,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=j$(),window[ij+this.uniqueCallbackIdentifier]=t,window[sj+this.uniqueCallbackIdentifier]=n,this.myIFrame=lg.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){et("frame writing exception"),a.stack&&et(a.stack),et(a)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||et("No IE domain setting required")}catch{const r=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[Rx]=this.myID,t[Nx]=this.myPW,t[Ax]=this.currentSerial;let n=this.urlFn(t),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Lx+r.length<=Dx;){const o=this.pendingSegs.shift();r=r+"&"+aj+i+"="+o.seg+"&"+lj+i+"="+o.ts+"&"+uj+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,r){this.pendingSegs.push({seg:t,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(fj)),s=()=>{clearTimeout(i),r()};this.addTag(t,s)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=t,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{et("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const pj=16384,mj=45e3;let Gu=null;typeof MozWebSocket<"u"?Gu=MozWebSocket:typeof WebSocket<"u"&&(Gu=WebSocket);class en{constructor(t,n,r,i,s,o,a){this.connId=t,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ja(this.connId),this.stats_=ag(n),this.connURL=en.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,r,i,s){const o={};return o[wx]=og,typeof location<"u"&&location.hostname&&Cx.test(location.hostname)&&(o[Ex]=xx),n&&(o[Sx]=n),r&&(o[Tx]=r),i&&(o[ip]=i),s&&(o[bx]=s),Ox(t,kx,o)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ii.set("previous_websocket_failure",!0);try{let r;qE(),this.mySock=new Gu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){en.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(t=!0)}return!t&&Gu!==null&&!en.forceDisallow_}static previouslyFailed(){return ii.isInMemoryStorage||ii.get("previous_websocket_failure")===!0}markConnectionHealthy(){ii.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=la(n);this.onMessage(r)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(I(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(t){this.resetKeepAlive();const n=Oe(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=vx(n,pj);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(mj))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}en.responsesRequiredToBeHealthy=2;en.healthyTimeout=3e4;/**
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
 */class ha{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[ts,en]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const n=en&&en.isAvailable();let r=n&&!en.previouslyFailed();if(t.webSocketOnly&&(n||It("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[en];else{const i=this.transports_=[];for(const s of ha.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ha.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ha.globalTransportInitialized_=!1;/**
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
 */const gj=6e4,yj=5e3,vj=10*1024,_j=100*1024,Ef="t",z_="d",wj="s",B_="r",Sj="e",V_="o",W_="a",H_="n",G_="p",Ej="h";class xj{constructor(t,n,r,i,s,o,a,l,u,c){this.id=t,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ja("c:"+this.id+":"),this.transportManager_=new ha(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=No(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>_j?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>vj?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Ef in t){const n=t[Ef];n===W_?this.upgradeIfSecondaryHealthy_():n===B_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===V_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=io("t",t),r=io("d",t);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:G_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:W_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:H_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=io("t",t),r=io("d",t);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=io(Ef,t);if(z_ in t){const r=t[z_];if(n===Ej){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===H_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===wj?this.onConnectionShutdown_(r):n===B_?this.onReset_(r):n===Sj?rp("Server Error: "+r):n===V_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):rp("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,r=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),og!==r&&It("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),No(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(gj))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):No(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(yj))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:G_,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ii.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Mx{put(t,n,r,i){}merge(t,n,r,i){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,r){}onDisconnectMerge(t,n,r){}onDisconnectCancel(t,n){}reportStats(t){}}/**
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
 */class Fx{constructor(t){this.allowedEvents_=t,this.listeners_={},I(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const r=[...this.listeners_[t]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(t,n,r){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:r});const i=this.getInitialEvent(t);i&&n.apply(r,i)}off(t,n,r){this.validateEventType_(t);const i=this.listeners_[t]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(t){I(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
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
 */class Ku extends Fx{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Zm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ku}getInitialEvent(t){return I(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const K_=32,q_=768;class le{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function X(){return new le("")}function Y(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Or(e){return e.pieces_.length-e.pieceNum_}function ce(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new le(e.pieces_,t)}function $x(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Cj(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function jx(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Ux(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new le(t,0)}function Re(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof le)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const r=t.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new le(n,0)}function G(e){return e.pieceNum_>=e.pieces_.length}function it(e,t){const n=Y(e),r=Y(t);if(n===null)return t;if(n===r)return it(ce(e),ce(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function zx(e,t){if(Or(e)!==Or(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function tn(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(Or(e)>Or(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class Tj{constructor(t,n){this.errorPrefix_=n,this.parts_=jx(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ed(this.parts_[r]);Bx(this)}}function bj(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=ed(t),Bx(e)}function kj(e){const t=e.parts_.pop();e.byteLength_-=ed(t),e.parts_.length>0&&(e.byteLength_-=1)}function Bx(e){if(e.byteLength_>q_)throw new Error(e.errorPrefix_+"has a key path longer than "+q_+" bytes ("+e.byteLength_+").");if(e.parts_.length>K_)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+K_+") or object contains a cycle "+Xr(e))}function Xr(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
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
 */class ug extends Fx{constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[t];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new ug}getInitialEvent(t){return I(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
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
 */const so=1e3,Ij=60*5*1e3,Y_=30*1e3,Pj=1.3,Oj=3e4,Rj="server_kill",Q_=3;class $n extends Mx{constructor(t,n,r,i,s,o,a,l){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=$n.nextPersistentConnectionId_++,this.log_=ja("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=so,this.maxReconnectDelay_=Ij,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!qE())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ug.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&Ku.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,r){const i=++this.requestNumber_,s={r:i,a:t,b:n};this.log_(Oe(s)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(t){this.initConnection_();const n=new Jm,i={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(t,n,r,i){this.initConnection_();const s=t._queryIdentifier,o=t._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),I(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:t,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(t){const n=t.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";t.tag&&(s.q=n._queryObject,s.t=t.tag),s.h=t.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;$n.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===t&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),t.onComplete&&t.onComplete(u,l))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&qn(t,"w")){const r=Ps(t,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();It(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||dM(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Y_)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=cM(t)?"auth":"gauth",r={cred:t};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===t&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,r=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(t,n){const r=t._path.toString(),i=t._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),I(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,t._queryObject,n)}sendUnlisten_(t,n,r,i){this.log_("Unlisten on "+t+" for "+n);const s={p:t},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:r})}onDisconnectMerge(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:r})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+t,s),this.sendRequest(t,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(t,n,r,i){this.putInternal("p",t,n,r,i)}merge(t,n,r,i){this.putInternal("m",t,n,r,i)}putInternal(t,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:t,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,r=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+Oe(t));const n=t.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):rp("Unrecognized action received from server: "+Oe(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=so,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=so,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Oj&&(this.reconnectDelay_=so),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Pj)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+$n.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?et("getToken() completed but was canceled"):(et("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new xj(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,r,m=>{It(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(Rj)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&It(d),l())}}}interrupt(t){et("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){et("Resuming connection for reason: "+t),delete this.interruptReasons_[t],y_(this.interruptReasons_)&&(this.reconnectDelay_=so,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let r;n?r=n.map(s=>sg(s)).join("$"):r="default";const i=this.removeListen_(t,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(t,n){const r=new le(t).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(t,n){et("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Q_&&(this.reconnectDelay_=Y_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){et("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Q_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+px.replace(/\./g,"-")]=1,Zm()?t["framework.cordova"]=1:KE()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=Ku.getInstance().currentlyOnline();return y_(this.interruptReasons_)&&t}}$n.nextPersistentConnectionId_=0;$n.nextConnectionId_=0;/**
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
 */class H{constructor(t,n){this.name=t,this.node=n}static Wrap(t,n){return new H(t,n)}}/**
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
 */class rd{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const r=new H(Rs,t),i=new H(Rs,n);return this.compare(r,i)!==0}minPost(){return H.MIN}}/**
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
 */let gl;class Vx extends rd{static get __EMPTY_NODE(){return gl}static set __EMPTY_NODE(t){gl=t}compare(t,n){return Hs(t.name,n.name)}isDefinedOn(t){throw Vs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return H.MIN}maxPost(){return new H(Ci,gl)}makePost(t,n){return I(typeof t=="string","KeyIndex indexValue must always be a string."),new H(t,gl)}toString(){return".key"}}const hs=new Vx;/**
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
 */class yl{constructor(t,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!t.isEmpty();)if(t=t,o=n?r(t.key,n):1,i&&(o*=-1),o<0)this.isReverse_?t=t.left:t=t.right;else if(o===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class $e{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??$e.RED,this.left=i??mt.EMPTY_NODE,this.right=s??mt.EMPTY_NODE}copy(t,n,r,i,s){return new $e(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return mt.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let r,i;if(r=this,n(t,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(t,r.key)===0){if(r.right.isEmpty())return mt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}$e.RED=!0;$e.BLACK=!1;class Nj{copy(t,n,r,i,s){return this}insert(t,n,r){return new $e(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class mt{constructor(t,n=mt.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new mt(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,$e.BLACK,null,null))}remove(t){return new mt(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,$e.BLACK,null,null))}get(t){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(t,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(t){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(t,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new yl(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new yl(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new yl(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new yl(this.root_,null,this.comparator_,!0,t)}}mt.EMPTY_NODE=new Nj;/**
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
 */function Aj(e,t){return Hs(e.name,t.name)}function cg(e,t){return Hs(e,t)}/**
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
 */let sp;function Dj(e){sp=e}const Wx=function(e){return typeof e=="number"?"number:"+_x(e):"string:"+e},Hx=function(e){if(e.isLeafNode()){const t=e.val();I(typeof t=="string"||typeof t=="number"||typeof t=="object"&&qn(t,".sv"),"Priority must be a string or number.")}else I(e===sp||e.isEmpty(),"priority of unexpected type.");I(e===sp||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let X_;class Le{constructor(t,n=Le.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Hx(this.priorityNode_)}static set __childrenNodeConstructor(t){X_=t}static get __childrenNodeConstructor(){return X_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new Le(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return G(t)?this:Y(t)===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:Le.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const r=Y(t);return r===null?n:n.isEmpty()&&r!==".priority"?this:(I(r!==".priority"||Or(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Le.__childrenNodeConstructor.EMPTY_NODE.updateChild(ce(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+Wx(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=_x(this.value_):t+=this.value_,this.lazyHash_=gx(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===Le.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof Le.__childrenNodeConstructor?-1:(I(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,r=typeof this.value_,i=Le.VALUE_TYPE_ORDER.indexOf(n),s=Le.VALUE_TYPE_ORDER.indexOf(r);return I(i>=0,"Unknown leaf type: "+n),I(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Le.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Gx,Kx;function Lj(e){Gx=e}function Mj(e){Kx=e}class Fj extends rd{compare(t,n){const r=t.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Hs(t.name,n.name):s}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return H.MIN}maxPost(){return new H(Ci,new Le("[PRIORITY-POST]",Kx))}makePost(t,n){const r=Gx(t);return new H(n,new Le("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ee=new Fj;/**
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
 */const $j=Math.log(2);class jj{constructor(t){const n=s=>parseInt(Math.log(s)/$j,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const i=r(this.count);this.bits_=t+1&i}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const qu=function(e,t,n,r){e.sort(t);const i=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=e[l],f=n?n(d):d,new $e(f,d.node,$e.BLACK,null,null);{const m=parseInt(c/2,10)+l,g=i(l,m),v=i(m+1,u);return d=e[m],f=n?n(d):d,new $e(f,d.node,$e.BLACK,g,v)}},s=function(l){let u=null,c=null,d=e.length;const f=function(g,v){const w=d-g,p=d;d-=g;const h=i(w+1,p),y=e[w],S=n?n(y):y;m(new $e(S,y.node,v,null,h))},m=function(g){u?(u.left=g,u=g):(c=g,u=g)};for(let g=0;g<l.count;++g){const v=l.nextBitIsOne(),w=Math.pow(2,l.count-(g+1));v?f(w,$e.BLACK):(f(w,$e.BLACK),f(w,$e.RED))}return c},o=new jj(e.length),a=s(o);return new mt(r||t,a)};/**
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
 */let xf;const Ui={};class Mn{constructor(t,n){this.indexes_=t,this.indexSet_=n}static get Default(){return I(Ui&&Ee,"ChildrenNode.ts has not been loaded"),xf=xf||new Mn({".priority":Ui},{".priority":Ee}),xf}get(t){const n=Ps(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof mt?n:null}hasIndex(t){return qn(this.indexSet_,t.toString())}addIndex(t,n){I(t!==hs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(H.Wrap);let o=s.getNext();for(;o;)i=i||t.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=qu(r,t.getCompare()):a=Ui;const l=t.toString(),u=Object.assign({},this.indexSet_);u[l]=t;const c=Object.assign({},this.indexes_);return c[l]=a,new Mn(c,u)}addToIndexes(t,n){const r=$u(this.indexes_,(i,s)=>{const o=Ps(this.indexSet_,s);if(I(o,"Missing index implementation for "+s),i===Ui)if(o.isDefinedOn(t.node)){const a=[],l=n.getIterator(H.Wrap);let u=l.getNext();for(;u;)u.name!==t.name&&a.push(u),u=l.getNext();return a.push(t),qu(a,o.getCompare())}else return Ui;else{const a=n.get(t.name);let l=i;return a&&(l=l.remove(new H(t.name,a))),l.insert(t,t.node)}});return new Mn(r,this.indexSet_)}removeFromIndexes(t,n){const r=$u(this.indexes_,i=>{if(i===Ui)return i;{const s=n.get(t.name);return s?i.remove(new H(t.name,s)):i}});return new Mn(r,this.indexSet_)}}/**
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
 */let oo;class z{constructor(t,n,r){this.children_=t,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Hx(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return oo||(oo=new z(new mt(cg),null,Mn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||oo}updatePriority(t){return this.children_.isEmpty()?this:new z(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?oo:n}}getChild(t){const n=Y(t);return n===null?this:this.getImmediateChild(n).getChild(ce(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(I(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const r=new H(t,n);let i,s;n.isEmpty()?(i=this.children_.remove(t),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(t,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?oo:this.priorityNode_;return new z(i,o,s)}}updateChild(t,n){const r=Y(t);if(r===null)return n;{I(Y(t)!==".priority"||Or(t)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ce(t),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ee,(o,a)=>{n[o]=a.val(t),r++,s&&z.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!t&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+Wx(this.getPriority().val())+":"),this.forEachChild(Ee,(n,r)=>{const i=r.hash();i!==""&&(t+=":"+n+":"+i)}),this.lazyHash_=t===""?"":gx(t)}return this.lazyHash_}getPredecessorChildName(t,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new H(t,n));return s?s.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new H(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new H(n,this.children_.get(n)):null}forEachChild(t,n){const r=this.resolveIndex_(t);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(t,i=>i);{const i=this.children_.getIteratorFrom(t.name,H.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,t)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(t,i=>i);{const i=this.children_.getReverseIteratorFrom(t.name,H.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,t)>0;)i.getNext(),s=i.peek();return i}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===za?-1:0}withIndex(t){if(t===hs||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new z(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===hs||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ee),i=n.getIterator(Ee);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(t){return t===hs?null:this.indexMap_.get(t.toString())}}z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Uj extends z{constructor(){super(new mt(cg),z.EMPTY_NODE,Mn.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return z.EMPTY_NODE}isEmpty(){return!1}}const za=new Uj;Object.defineProperties(H,{MIN:{value:new H(Rs,z.EMPTY_NODE)},MAX:{value:new H(Ci,za)}});Vx.__EMPTY_NODE=z.EMPTY_NODE;Le.__childrenNodeConstructor=z;Dj(za);Mj(za);/**
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
 */const zj=!0;function He(e,t=null){if(e===null)return z.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),I(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new Le(n,He(t))}if(!(e instanceof Array)&&zj){const n=[];let r=!1;if(_t(e,(o,a)=>{if(o.substring(0,1)!=="."){const l=He(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new H(o,l)))}}),n.length===0)return z.EMPTY_NODE;const s=qu(n,Aj,o=>o.name,cg);if(r){const o=qu(n,Ee.getCompare());return new z(s,He(t),new Mn({".priority":o},{".priority":Ee}))}else return new z(s,He(t),Mn.Default)}else{let n=z.EMPTY_NODE;return _t(e,(r,i)=>{if(qn(e,r)&&r.substring(0,1)!=="."){const s=He(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(He(t))}}Lj(He);/**
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
 */class Bj extends rd{constructor(t){super(),this.indexPath_=t,I(!G(t)&&Y(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const r=this.extractChild(t.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Hs(t.name,n.name):s}makePost(t,n){const r=He(t),i=z.EMPTY_NODE.updateChild(this.indexPath_,r);return new H(n,i)}maxPost(){const t=z.EMPTY_NODE.updateChild(this.indexPath_,za);return new H(Ci,t)}toString(){return jx(this.indexPath_,0).join("/")}}/**
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
 */class Vj extends rd{compare(t,n){const r=t.node.compareTo(n.node);return r===0?Hs(t.name,n.name):r}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return H.MIN}maxPost(){return H.MAX}makePost(t,n){const r=He(t);return new H(n,r)}toString(){return".value"}}const Wj=new Vj;/**
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
 */function qx(e){return{type:"value",snapshotNode:e}}function Ns(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function pa(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function ma(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function Hj(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
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
 */class dg{constructor(t){this.index_=t}updateChild(t,n,r,i,s,o){I(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=t.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?t.hasChild(n)?o.trackChildChange(pa(n,a)):I(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ns(n,r)):o.trackChildChange(ma(n,r,a))),t.isLeafNode()&&r.isEmpty())?t:t.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(t,n,r){return r!=null&&(t.isLeafNode()||t.forEachChild(Ee,(i,s)=>{n.hasChild(i)||r.trackChildChange(pa(i,s))}),n.isLeafNode()||n.forEachChild(Ee,(i,s)=>{if(t.hasChild(i)){const o=t.getImmediateChild(i);o.equals(s)||r.trackChildChange(ma(i,s,o))}else r.trackChildChange(Ns(i,s))})),n.withIndex(this.index_)}updatePriority(t,n){return t.isEmpty()?z.EMPTY_NODE:t.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ga{constructor(t){this.indexedFilter_=new dg(t.getIndex()),this.index_=t.getIndex(),this.startPost_=ga.getStartPost_(t),this.endPost_=ga.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,r=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return n&&r}updateChild(t,n,r,i,s,o){return this.matches(new H(n,r))||(r=z.EMPTY_NODE),this.indexedFilter_.updateChild(t,n,r,i,s,o)}updateFullNode(t,n,r){n.isLeafNode()&&(n=z.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(z.EMPTY_NODE);const s=this;return n.forEachChild(Ee,(o,a)=>{s.matches(new H(o,a))||(i=i.updateImmediateChild(o,z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,i,r)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const n=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),n)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const n=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),n)}else return t.getIndex().maxPost()}}/**
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
 */class Gj{constructor(t){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ga(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,n,r,i,s,o){return this.rangedFilter_.matches(new H(n,r))||(r=z.EMPTY_NODE),t.getImmediateChild(n).equals(r)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,n,r,i,s,o):this.fullLimitUpdateChild_(t,n,r,s,o)}updateFullNode(t,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=z.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(z.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,i,r)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,m)=>d(m,f)}else o=this.index_.getCompare();const a=t;I(a.numChildren()===this.limit_,"");const l=new H(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const m=f==null?1:o(f,l);if(c&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(ma(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(pa(n,d));const v=a.updateImmediateChild(n,z.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Ns(f.name,f.node)),v.updateImmediateChild(f.name,f.node)):v}}else return r.isEmpty()?t:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(pa(u.name,u.node)),s.trackChildChange(Ns(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,z.EMPTY_NODE)):t}}/**
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
 */class fg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ee}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Rs}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ci}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ee}copy(){const t=new fg;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function Kj(e){return e.loadsAllData()?new dg(e.getIndex()):e.hasLimit()?new Gj(e):new ga(e)}function J_(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Ee?n="$priority":e.index_===Wj?n="$value":e.index_===hs?n="$key":(I(e.index_ instanceof Bj,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Oe(n),e.startSet_){const r=e.startAfterSet_?"startAfter":"startAt";t[r]=Oe(e.indexStartValue_),e.startNameSet_&&(t[r]+=","+Oe(e.indexStartName_))}if(e.endSet_){const r=e.endBeforeSet_?"endBefore":"endAt";t[r]=Oe(e.indexEndValue_),e.endNameSet_&&(t[r]+=","+Oe(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Z_(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==Ee&&(t.i=e.index_.toString()),t}/**
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
 */class Yu extends Mx{constructor(t,n,r,i){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ja("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(I(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,n,r,i){const s=t._path.toString();this.log_("Listen called for "+s+" "+t._queryIdentifier);const o=Yu.getListenId_(t,r),a={};this.listens_[o]=a;const l=J_(t._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Ps(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(t,n){const r=Yu.getListenId_(t,n);delete this.listens_[r]}get(t){const n=J_(t._queryParams),r=t._path.toString(),i=new Jm;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(t){}restRequest_(t,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+Zc(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=la(a.responseText)}catch{It("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&It("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class qj{constructor(){this.rootNode_=z.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
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
 */function Qu(){return{value:null,children:new Map}}function Yx(e,t,n){if(G(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const r=Y(t);e.children.has(r)||e.children.set(r,Qu());const i=e.children.get(r);t=ce(t),Yx(i,t,n)}}function op(e,t,n){e.value!==null?n(t,e.value):Yj(e,(r,i)=>{const s=new le(t.toString()+"/"+r);op(i,s,n)})}function Yj(e,t){e.children.forEach((n,r)=>{t(r,n)})}/**
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
 */class Qj{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n=Object.assign({},t);return this.last_&&_t(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=t,n}}/**
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
 */const e0=10*1e3,Xj=30*1e3,Jj=5*60*1e3;class Zj{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Qj(t);const r=e0+(Xj-e0)*Math.random();No(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const t=this.statsListener_.get(),n={};let r=!1;_t(t,(i,s)=>{s>0&&qn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),No(this.reportStats_.bind(this),Math.floor(Math.random()*2*Jj))}}/**
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
 */var nn;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(nn||(nn={}));function Qx(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function hg(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function pg(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
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
 */class Xu{constructor(t,n,r){this.path=t,this.affectedTree=n,this.revert=r,this.type=nn.ACK_USER_WRITE,this.source=Qx()}operationForChild(t){if(G(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new le(t));return new Xu(X(),n,this.revert)}}else return I(Y(this.path)===t,"operationForChild called for unrelated child."),new Xu(ce(this.path),this.affectedTree,this.revert)}}/**
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
 */class ya{constructor(t,n){this.source=t,this.path=n,this.type=nn.LISTEN_COMPLETE}operationForChild(t){return G(this.path)?new ya(this.source,X()):new ya(this.source,ce(this.path))}}/**
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
 */class Ti{constructor(t,n,r){this.source=t,this.path=n,this.snap=r,this.type=nn.OVERWRITE}operationForChild(t){return G(this.path)?new Ti(this.source,X(),this.snap.getImmediateChild(t)):new Ti(this.source,ce(this.path),this.snap)}}/**
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
 */class va{constructor(t,n,r){this.source=t,this.path=n,this.children=r,this.type=nn.MERGE}operationForChild(t){if(G(this.path)){const n=this.children.subtree(new le(t));return n.isEmpty()?null:n.value?new Ti(this.source,X(),n.value):new va(this.source,X(),n)}else return I(Y(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new va(this.source,ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Rr{constructor(t,n,r){this.node_=t,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(G(t))return this.isFullyInitialized()&&!this.filtered_;const n=Y(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}/**
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
 */class e3{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function t3(e,t,n,r){const i=[],s=[];return t.forEach(o=>{o.type==="child_changed"&&e.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Hj(o.childName,o.snapshotNode))}),ao(e,i,"child_removed",t,r,n),ao(e,i,"child_added",t,r,n),ao(e,i,"child_moved",s,r,n),ao(e,i,"child_changed",t,r,n),ao(e,i,"value",t,r,n),i}function ao(e,t,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>r3(e,a,l)),o.forEach(a=>{const l=n3(e,a,s);i.forEach(u=>{u.respondsTo(a.type)&&t.push(u.createEvent(l,e.query_))})})}function n3(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function r3(e,t,n){if(t.childName==null||n.childName==null)throw Vs("Should only compare child_ events.");const r=new H(t.childName,t.snapshotNode),i=new H(n.childName,n.snapshotNode);return e.index_.compare(r,i)}/**
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
 */function id(e,t){return{eventCache:e,serverCache:t}}function Ao(e,t,n,r){return id(new Rr(t,n,r),e.serverCache)}function Xx(e,t,n,r){return id(e.eventCache,new Rr(t,n,r))}function Ju(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function bi(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
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
 */let Cf;const i3=()=>(Cf||(Cf=new mt(V$)),Cf);class me{constructor(t,n=i3()){this.value=t,this.children=n}static fromObject(t){let n=new me(null);return _t(t,(r,i)=>{n=n.set(new le(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:X(),value:this.value};if(G(t))return null;{const r=Y(t),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ce(t),n);return s!=null?{path:Re(new le(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(G(t))return this;{const n=Y(t),r=this.children.get(n);return r!==null?r.subtree(ce(t)):new me(null)}}set(t,n){if(G(t))return new me(n,this.children);{const r=Y(t),s=(this.children.get(r)||new me(null)).set(ce(t),n),o=this.children.insert(r,s);return new me(this.value,o)}}remove(t){if(G(t))return this.children.isEmpty()?new me(null):new me(null,this.children);{const n=Y(t),r=this.children.get(n);if(r){const i=r.remove(ce(t));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new me(null):new me(this.value,s)}else return this}}get(t){if(G(t))return this.value;{const n=Y(t),r=this.children.get(n);return r?r.get(ce(t)):null}}setTree(t,n){if(G(t))return n;{const r=Y(t),s=(this.children.get(r)||new me(null)).setTree(ce(t),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new me(this.value,o)}}fold(t){return this.fold_(X(),t)}fold_(t,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Re(t,i),n)}),n(t,this.value,r)}findOnPath(t,n){return this.findOnPath_(t,X(),n)}findOnPath_(t,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(G(t))return null;{const s=Y(t),o=this.children.get(s);return o?o.findOnPath_(ce(t),Re(n,s),r):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,X(),n)}foreachOnPath_(t,n,r){if(G(t))return this;{this.value&&r(n,this.value);const i=Y(t),s=this.children.get(i);return s?s.foreachOnPath_(ce(t),Re(n,i),r):new me(null)}}foreach(t){this.foreach_(X(),t)}foreach_(t,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Re(t,r),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,r)=>{r.value&&t(n,r.value)})}}/**
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
 */class un{constructor(t){this.writeTree_=t}static empty(){return new un(new me(null))}}function Do(e,t,n){if(G(t))return new un(new me(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(r!=null){const i=r.path;let s=r.value;const o=it(i,t);return s=s.updateChild(o,n),new un(e.writeTree_.set(i,s))}else{const i=new me(n),s=e.writeTree_.setTree(t,i);return new un(s)}}}function t0(e,t,n){let r=e;return _t(n,(i,s)=>{r=Do(r,Re(t,i),s)}),r}function n0(e,t){if(G(t))return un.empty();{const n=e.writeTree_.setTree(t,new me(null));return new un(n)}}function ap(e,t){return Li(e,t)!=null}function Li(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(it(n.path,t)):null}function r0(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ee,(r,i)=>{t.push(new H(r,i))}):e.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&t.push(new H(r,i.value))}),t}function xr(e,t){if(G(t))return e;{const n=Li(e,t);return n!=null?new un(new me(n)):new un(e.writeTree_.subtree(t))}}function lp(e){return e.writeTree_.isEmpty()}function As(e,t){return Jx(X(),e.writeTree_,t)}function Jx(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal((i,s)=>{i===".priority"?(I(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Jx(Re(e,i),s,n)}),!n.getChild(e).isEmpty()&&r!==null&&(n=n.updateChild(Re(e,".priority"),r)),n}}/**
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
 */function sd(e,t){return nC(t,e)}function s3(e,t,n,r,i){I(r>e.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Do(e.visibleWrites,t,n)),e.lastWriteId=r}function o3(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function a3(e,t){const n=e.allWrites.findIndex(a=>a.writeId===t);I(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,o=e.allWrites.length-1;for(;i&&o>=0;){const a=e.allWrites[o];a.visible&&(o>=n&&l3(a,r.path)?i=!1:tn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return u3(e),!0;if(r.snap)e.visibleWrites=n0(e.visibleWrites,r.path);else{const a=r.children;_t(a,l=>{e.visibleWrites=n0(e.visibleWrites,Re(r.path,l))})}return!0}else return!1}function l3(e,t){if(e.snap)return tn(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&tn(Re(e.path,n),t))return!0;return!1}function u3(e){e.visibleWrites=Zx(e.allWrites,c3,X()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function c3(e){return e.visible}function Zx(e,t,n){let r=un.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const o=s.path;let a;if(s.snap)tn(n,o)?(a=it(n,o),r=Do(r,a,s.snap)):tn(o,n)&&(a=it(o,n),r=Do(r,X(),s.snap.getChild(a)));else if(s.children){if(tn(n,o))a=it(n,o),r=t0(r,a,s.children);else if(tn(o,n))if(a=it(o,n),G(a))r=t0(r,X(),s.children);else{const l=Ps(s.children,Y(a));if(l){const u=l.getChild(ce(a));r=Do(r,X(),u)}}}else throw Vs("WriteRecord should have .snap or .children")}}return r}function eC(e,t,n,r,i){if(!r&&!i){const s=Li(e.visibleWrites,t);if(s!=null)return s;{const o=xr(e.visibleWrites,t);if(lp(o))return n;if(n==null&&!ap(o,X()))return null;{const a=n||z.EMPTY_NODE;return As(o,a)}}}else{const s=xr(e.visibleWrites,t);if(!i&&lp(s))return n;if(!i&&n==null&&!ap(s,X()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(tn(u.path,t)||tn(t,u.path))},a=Zx(e.allWrites,o,t),l=n||z.EMPTY_NODE;return As(a,l)}}}function d3(e,t,n){let r=z.EMPTY_NODE;const i=Li(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(Ee,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=xr(e.visibleWrites,t);return n.forEachChild(Ee,(o,a)=>{const l=As(xr(s,new le(o)),a);r=r.updateImmediateChild(o,l)}),r0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=xr(e.visibleWrites,t);return r0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function f3(e,t,n,r,i){I(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Re(t,n);if(ap(e.visibleWrites,s))return null;{const o=xr(e.visibleWrites,s);return lp(o)?i.getChild(n):As(o,i.getChild(n))}}function h3(e,t,n,r){const i=Re(t,n),s=Li(e.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=xr(e.visibleWrites,i);return As(o,r.getNode().getImmediateChild(n))}else return null}function p3(e,t){return Li(e.visibleWrites,t)}function m3(e,t,n,r,i,s,o){let a;const l=xr(e.visibleWrites,t),u=Li(l,X());if(u!=null)a=u;else if(n!=null)a=As(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=f.getNext();for(;m&&c.length<i;)d(m,r)!==0&&c.push(m),m=f.getNext();return c}else return[]}function g3(){return{visibleWrites:un.empty(),allWrites:[],lastWriteId:-1}}function Zu(e,t,n,r){return eC(e.writeTree,e.treePath,t,n,r)}function mg(e,t){return d3(e.writeTree,e.treePath,t)}function i0(e,t,n,r){return f3(e.writeTree,e.treePath,t,n,r)}function ec(e,t){return p3(e.writeTree,Re(e.treePath,t))}function y3(e,t,n,r,i,s){return m3(e.writeTree,e.treePath,t,n,r,i,s)}function gg(e,t,n){return h3(e.writeTree,e.treePath,t,n)}function tC(e,t){return nC(Re(e.treePath,t),e.writeTree)}function nC(e,t){return{treePath:e,writeTree:t}}/**
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
 */class v3{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,r=t.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ma(r,t.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,pa(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ns(r,t.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ma(r,t.snapshotNode,i.oldSnap));else throw Vs("Illegal combination of changes: "+t+" occurred after "+i)}else this.changeMap.set(r,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class _3{getCompleteChild(t){return null}getChildAfterChild(t,n,r){return null}}const rC=new _3;class yg{constructor(t,n,r=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const r=this.optCompleteServerCache_!=null?new Rr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return gg(this.writes_,t,r)}}getChildAfterChild(t,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:bi(this.viewCache_),s=y3(this.writes_,i,n,1,r,t);return s.length===0?null:s[0]}}/**
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
 */function w3(e){return{filter:e}}function S3(e,t){I(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),I(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function E3(e,t,n,r,i){const s=new v3;let o,a;if(n.type===nn.OVERWRITE){const u=n;u.source.fromUser?o=up(e,t,u.path,u.snap,r,i,s):(I(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered()&&!G(u.path),o=tc(e,t,u.path,u.snap,r,i,a,s))}else if(n.type===nn.MERGE){const u=n;u.source.fromUser?o=C3(e,t,u.path,u.children,r,i,s):(I(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered(),o=cp(e,t,u.path,u.children,r,i,a,s))}else if(n.type===nn.ACK_USER_WRITE){const u=n;u.revert?o=k3(e,t,u.path,r,i,s):o=T3(e,t,u.path,u.affectedTree,r,i,s)}else if(n.type===nn.LISTEN_COMPLETE)o=b3(e,t,n.path,r,s);else throw Vs("Unknown operation type: "+n.type);const l=s.getChanges();return x3(t,o,l),{viewCache:o,changes:l}}function x3(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Ju(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(qx(Ju(t)))}}function iC(e,t,n,r,i,s){const o=t.eventCache;if(ec(r,n)!=null)return t;{let a,l;if(G(n))if(I(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const u=bi(t),c=u instanceof z?u:z.EMPTY_NODE,d=mg(r,c);a=e.filter.updateFullNode(t.eventCache.getNode(),d,s)}else{const u=Zu(r,bi(t));a=e.filter.updateFullNode(t.eventCache.getNode(),u,s)}else{const u=Y(n);if(u===".priority"){I(Or(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=t.serverCache.getNode();const d=i0(r,n,c,l);d!=null?a=e.filter.updatePriority(c,d):a=o.getNode()}else{const c=ce(n);let d;if(o.isCompleteForChild(u)){l=t.serverCache.getNode();const f=i0(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=gg(r,u,t.serverCache);d!=null?a=e.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return Ao(t,a,o.isFullyInitialized()||G(n),e.filter.filtersNodes())}}function tc(e,t,n,r,i,s,o,a){const l=t.serverCache;let u;const c=o?e.filter:e.filter.getIndexedFilter();if(G(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),m,null)}else{const m=Y(n);if(!l.isCompleteForPath(n)&&Or(n)>1)return t;const g=ce(n),w=l.getNode().getImmediateChild(m).updateChild(g,r);m===".priority"?u=c.updatePriority(l.getNode(),w):u=c.updateChild(l.getNode(),m,w,g,rC,null)}const d=Xx(t,u,l.isFullyInitialized()||G(n),c.filtersNodes()),f=new yg(i,d,s);return iC(e,d,n,i,f,a)}function up(e,t,n,r,i,s,o){const a=t.eventCache;let l,u;const c=new yg(i,t,s);if(G(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,o),l=Ao(t,u,!0,e.filter.filtersNodes());else{const d=Y(n);if(d===".priority")u=e.filter.updatePriority(t.eventCache.getNode(),r),l=Ao(t,u,a.isFullyInitialized(),a.isFiltered());else{const f=ce(n),m=a.getNode().getImmediateChild(d);let g;if(G(f))g=r;else{const v=c.getCompleteChild(d);v!=null?$x(f)===".priority"&&v.getChild(Ux(f)).isEmpty()?g=v:g=v.updateChild(f,r):g=z.EMPTY_NODE}if(m.equals(g))l=t;else{const v=e.filter.updateChild(a.getNode(),d,g,f,c,o);l=Ao(t,v,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function s0(e,t){return e.eventCache.isCompleteForChild(t)}function C3(e,t,n,r,i,s,o){let a=t;return r.foreach((l,u)=>{const c=Re(n,l);s0(t,Y(c))&&(a=up(e,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=Re(n,l);s0(t,Y(c))||(a=up(e,a,c,u,i,s,o))}),a}function o0(e,t,n){return n.foreach((r,i)=>{t=t.updateChild(r,i)}),t}function cp(e,t,n,r,i,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l=t,u;G(n)?u=r:u=new me(null).setTree(n,r);const c=t.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const m=t.serverCache.getNode().getImmediateChild(d),g=o0(e,m,f);l=tc(e,l,new le(d),g,i,s,o,a)}}),u.children.inorderTraversal((d,f)=>{const m=!t.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!m){const g=t.serverCache.getNode().getImmediateChild(d),v=o0(e,g,f);l=tc(e,l,new le(d),v,i,s,o,a)}}),l}function T3(e,t,n,r,i,s,o){if(ec(i,n)!=null)return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(r.value!=null){if(G(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return tc(e,t,n,l.getNode().getChild(n),i,s,a,o);if(G(n)){let u=new me(null);return l.getNode().forEachChild(hs,(c,d)=>{u=u.set(new le(c),d)}),cp(e,t,n,u,i,s,a,o)}else return t}else{let u=new me(null);return r.foreach((c,d)=>{const f=Re(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),cp(e,t,n,u,i,s,a,o)}}function b3(e,t,n,r,i){const s=t.serverCache,o=Xx(t,s.getNode(),s.isFullyInitialized()||G(n),s.isFiltered());return iC(e,o,n,r,rC,i)}function k3(e,t,n,r,i,s){let o;if(ec(r,n)!=null)return t;{const a=new yg(r,t,i),l=t.eventCache.getNode();let u;if(G(n)||Y(n)===".priority"){let c;if(t.serverCache.isFullyInitialized())c=Zu(r,bi(t));else{const d=t.serverCache.getNode();I(d instanceof z,"serverChildren would be complete if leaf node"),c=mg(r,d)}c=c,u=e.filter.updateFullNode(l,c,s)}else{const c=Y(n);let d=gg(r,c,t.serverCache);d==null&&t.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=e.filter.updateChild(l,c,d,ce(n),a,s):t.eventCache.getNode().hasChild(c)?u=e.filter.updateChild(l,c,z.EMPTY_NODE,ce(n),a,s):u=l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Zu(r,bi(t)),o.isLeafNode()&&(u=e.filter.updateFullNode(u,o,s)))}return o=t.serverCache.isFullyInitialized()||ec(r,X())!=null,Ao(t,u,o,e.filter.filtersNodes())}}/**
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
 */class I3{constructor(t,n){this.query_=t,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new dg(r.getIndex()),s=Kj(r);this.processor_=w3(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(z.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(z.EMPTY_NODE,a.getNode(),null),c=new Rr(l,o.isFullyInitialized(),i.filtersNodes()),d=new Rr(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=id(d,c),this.eventGenerator_=new e3(this.query_)}get query(){return this.query_}}function P3(e){return e.viewCache_.serverCache.getNode()}function O3(e){return Ju(e.viewCache_)}function R3(e,t){const n=bi(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!G(t)&&!n.getImmediateChild(Y(t)).isEmpty())?n.getChild(t):null}function a0(e){return e.eventRegistrations_.length===0}function N3(e,t){e.eventRegistrations_.push(t)}function l0(e,t,n){const r=[];if(n){I(t==null,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(t){let i=[];for(let s=0;s<e.eventRegistrations_.length;++s){const o=e.eventRegistrations_[s];if(!o.matches(t))i.push(o);else if(t.hasAnyCallback()){i=i.concat(e.eventRegistrations_.slice(s+1));break}}e.eventRegistrations_=i}else e.eventRegistrations_=[];return r}function u0(e,t,n,r){t.type===nn.MERGE&&t.source.queryId!==null&&(I(bi(e.viewCache_),"We should always have a full cache before handling merges"),I(Ju(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=E3(e.processor_,i,t,n,r);return S3(e.processor_,s.viewCache),I(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,sC(e,s.changes,s.viewCache.eventCache.getNode(),null)}function A3(e,t){const n=e.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ee,(s,o)=>{r.push(Ns(s,o))}),n.isFullyInitialized()&&r.push(qx(n.getNode())),sC(e,r,n.getNode(),t)}function sC(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return t3(e.eventGenerator_,t,n,i)}/**
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
 */let nc;class oC{constructor(){this.views=new Map}}function D3(e){I(!nc,"__referenceConstructor has already been defined"),nc=e}function L3(){return I(nc,"Reference.ts has not been loaded"),nc}function M3(e){return e.views.size===0}function vg(e,t,n,r){const i=t.source.queryId;if(i!==null){const s=e.views.get(i);return I(s!=null,"SyncTree gave us an op for an invalid query."),u0(s,t,n,r)}else{let s=[];for(const o of e.views.values())s=s.concat(u0(o,t,n,r));return s}}function aC(e,t,n,r,i){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let a=Zu(n,i?r:null),l=!1;a?l=!0:r instanceof z?(a=mg(n,r),l=!1):(a=z.EMPTY_NODE,l=!1);const u=id(new Rr(a,l,!1),new Rr(r,i,!1));return new I3(t,u)}return o}function F3(e,t,n,r,i,s){const o=aC(e,t,r,i,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),N3(o,n),A3(o,n)}function $3(e,t,n,r){const i=t._queryIdentifier,s=[];let o=[];const a=Nr(e);if(i==="default")for(const[l,u]of e.views.entries())o=o.concat(l0(u,n,r)),a0(u)&&(e.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=e.views.get(i);l&&(o=o.concat(l0(l,n,r)),a0(l)&&(e.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Nr(e)&&s.push(new(L3())(t._repo,t._path)),{removed:s,events:o}}function lC(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Cr(e,t){let n=null;for(const r of e.views.values())n=n||R3(r,t);return n}function uC(e,t){if(t._queryParams.loadsAllData())return od(e);{const r=t._queryIdentifier;return e.views.get(r)}}function cC(e,t){return uC(e,t)!=null}function Nr(e){return od(e)!=null}function od(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
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
 */let rc;function j3(e){I(!rc,"__referenceConstructor has already been defined"),rc=e}function U3(){return I(rc,"Reference.ts has not been loaded"),rc}let z3=1;class c0{constructor(t){this.listenProvider_=t,this.syncPointTree_=new me(null),this.pendingWriteTree_=g3(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function B3(e,t,n,r,i){return s3(e.pendingWriteTree_,t,n,r,i),i?Va(e,new Ti(Qx(),t,n)):[]}function ns(e,t,n=!1){const r=o3(e.pendingWriteTree_,t);if(a3(e.pendingWriteTree_,t)){let s=new me(null);return r.snap!=null?s=s.set(X(),!0):_t(r.children,o=>{s=s.set(new le(o),!0)}),Va(e,new Xu(r.path,s,n))}else return[]}function Ba(e,t,n){return Va(e,new Ti(hg(),t,n))}function V3(e,t,n){const r=me.fromObject(n);return Va(e,new va(hg(),t,r))}function W3(e,t){return Va(e,new ya(hg(),t))}function H3(e,t,n){const r=_g(e,n);if(r){const i=wg(r),s=i.path,o=i.queryId,a=it(s,t),l=new ya(pg(o),a);return Sg(e,s,l)}else return[]}function dC(e,t,n,r,i=!1){const s=t._path,o=e.syncPointTree_.get(s);let a=[];if(o&&(t._queryIdentifier==="default"||cC(o,t))){const l=$3(o,t,n,r);M3(o)&&(e.syncPointTree_=e.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=e.syncPointTree_.findOnPath(s,(f,m)=>Nr(m));if(c&&!d){const f=e.syncPointTree_.subtree(s);if(!f.isEmpty()){const m=Y3(f);for(let g=0;g<m.length;++g){const v=m[g],w=v.query,p=gC(e,v);e.listenProvider_.startListening(Lo(w),_a(e,w),p.hashFn,p.onComplete)}}}!d&&u.length>0&&!r&&(c?e.listenProvider_.stopListening(Lo(t),null):u.forEach(f=>{const m=e.queryToTagMap.get(ad(f));e.listenProvider_.stopListening(Lo(f),m)}))}Q3(e,u)}return a}function fC(e,t,n,r){const i=_g(e,r);if(i!=null){const s=wg(i),o=s.path,a=s.queryId,l=it(o,t),u=new Ti(pg(a),l,n);return Sg(e,o,u)}else return[]}function G3(e,t,n,r){const i=_g(e,r);if(i){const s=wg(i),o=s.path,a=s.queryId,l=it(o,t),u=me.fromObject(n),c=new va(pg(a),l,u);return Sg(e,o,c)}else return[]}function K3(e,t,n,r=!1){const i=t._path;let s=null,o=!1;e.syncPointTree_.foreachOnPath(i,(f,m)=>{const g=it(f,i);s=s||Cr(m,g),o=o||Nr(m)});let a=e.syncPointTree_.get(i);a?(o=o||Nr(a),s=s||Cr(a,X())):(a=new oC,e.syncPointTree_=e.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=z.EMPTY_NODE,e.syncPointTree_.subtree(i).foreachChild((m,g)=>{const v=Cr(g,X());v&&(s=s.updateImmediateChild(m,v))}));const u=cC(a,t);if(!u&&!t._queryParams.loadsAllData()){const f=ad(t);I(!e.queryToTagMap.has(f),"View does not exist, but we have a tag");const m=X3();e.queryToTagMap.set(f,m),e.tagToQueryMap.set(m,f)}const c=sd(e.pendingWriteTree_,i);let d=F3(a,t,n,c,s,l);if(!u&&!o&&!r){const f=uC(a,t);d=d.concat(J3(e,t,f))}return d}function hC(e,t,n){const i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,(o,a)=>{const l=it(o,t),u=Cr(a,l);if(u)return u});return eC(i,t,s,n,!0)}function q3(e,t){const n=t._path;let r=null;e.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=it(u,n);r=r||Cr(c,d)});let i=e.syncPointTree_.get(n);i?r=r||Cr(i,X()):(i=new oC,e.syncPointTree_=e.syncPointTree_.set(n,i));const s=r!=null,o=s?new Rr(r,!0,!1):null,a=sd(e.pendingWriteTree_,t._path),l=aC(i,t,a,s?o.getNode():z.EMPTY_NODE,s);return O3(l)}function Va(e,t){return pC(t,e.syncPointTree_,null,sd(e.pendingWriteTree_,X()))}function pC(e,t,n,r){if(G(e.path))return mC(e,t,n,r);{const i=t.get(X());n==null&&i!=null&&(n=Cr(i,X()));let s=[];const o=Y(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=tC(r,o);s=s.concat(pC(a,l,u,c))}return i&&(s=s.concat(vg(i,e,r,n))),s}}function mC(e,t,n,r){const i=t.get(X());n==null&&i!=null&&(n=Cr(i,X()));let s=[];return t.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=tC(r,o),c=e.operationForChild(o);c&&(s=s.concat(mC(c,a,l,u)))}),i&&(s=s.concat(vg(i,e,r,n))),s}function gC(e,t){const n=t.query,r=_a(e,n);return{hashFn:()=>(P3(t)||z.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?H3(e,n._path,r):W3(e,n._path);{const s=G$(i,n);return dC(e,n,null,s)}}}}function _a(e,t){const n=ad(t);return e.queryToTagMap.get(n)}function ad(e){return e._path.toString()+"$"+e._queryIdentifier}function _g(e,t){return e.tagToQueryMap.get(t)}function wg(e){const t=e.indexOf("$");return I(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new le(e.substr(0,t))}}function Sg(e,t,n){const r=e.syncPointTree_.get(t);I(r,"Missing sync point for query tag that we're tracking");const i=sd(e.pendingWriteTree_,t);return vg(r,n,i,null)}function Y3(e){return e.fold((t,n,r)=>{if(n&&Nr(n))return[od(n)];{let i=[];return n&&(i=lC(n)),_t(r,(s,o)=>{i=i.concat(o)}),i}})}function Lo(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(U3())(e._repo,e._path):e}function Q3(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const i=ad(r),s=e.queryToTagMap.get(i);e.queryToTagMap.delete(i),e.tagToQueryMap.delete(s)}}}function X3(){return z3++}function J3(e,t,n){const r=t._path,i=_a(e,t),s=gC(e,n),o=e.listenProvider_.startListening(Lo(t),i,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(r);if(i)I(!Nr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!G(u)&&c&&Nr(c))return[od(c).query];{let f=[];return c&&(f=f.concat(lC(c).map(m=>m.query))),_t(d,(m,g)=>{f=f.concat(g)}),f}});for(let u=0;u<l.length;++u){const c=l[u];e.listenProvider_.stopListening(Lo(c),_a(e,c))}}return o}/**
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
 */class Eg{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new Eg(n)}node(){return this.node_}}class xg{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=Re(this.path_,t);return new xg(this.syncTree_,n)}node(){return hC(this.syncTree_,this.path_)}}const Z3=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},d0=function(e,t,n){if(!e||typeof e!="object")return e;if(I(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return e4(e[".sv"],t,n);if(typeof e[".sv"]=="object")return t4(e[".sv"],t);I(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},e4=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+e)}},t4=function(e,t,n){e.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;typeof r!="number"&&I(!1,"Unexpected increment value: "+r);const i=t.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},n4=function(e,t,n,r){return Cg(t,new xg(n,e),r)},r4=function(e,t,n){return Cg(e,new Eg(t),n)};function Cg(e,t,n){const r=e.getPriority().val(),i=d0(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const o=e,a=d0(o.getValue(),t,n);return a!==o.getValue()||i!==o.getPriority().val()?new Le(a,He(i)):e}else{const o=e;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Le(i))),o.forEachChild(Ee,(a,l)=>{const u=Cg(l,t.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class Tg{constructor(t="",n=null,r={children:{},childCount:0}){this.name=t,this.parent=n,this.node=r}}function bg(e,t){let n=t instanceof le?t:new le(t),r=e,i=Y(n);for(;i!==null;){const s=Ps(r.node.children,i)||{children:{},childCount:0};r=new Tg(i,r,s),n=ce(n),i=Y(n)}return r}function Gs(e){return e.node.value}function yC(e,t){e.node.value=t,dp(e)}function vC(e){return e.node.childCount>0}function i4(e){return Gs(e)===void 0&&!vC(e)}function ld(e,t){_t(e.node.children,(n,r)=>{t(new Tg(n,e,r))})}function _C(e,t,n,r){n&&!r&&t(e),ld(e,i=>{_C(i,t,!0,r)}),n&&r&&t(e)}function s4(e,t,n){let r=n?e:e.parent;for(;r!==null;){if(t(r))return!0;r=r.parent}return!1}function Wa(e){return new le(e.parent===null?e.name:Wa(e.parent)+"/"+e.name)}function dp(e){e.parent!==null&&o4(e.parent,e.name,e)}function o4(e,t,n){const r=i4(n),i=qn(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,dp(e)):!r&&!i&&(e.node.children[t]=n.node,e.node.childCount++,dp(e))}/**
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
 */const a4=/[\[\].#$\/\u0000-\u001F\u007F]/,l4=/[\[\].#$\u0000-\u001F\u007F]/,Tf=10*1024*1024,wC=function(e){return typeof e=="string"&&e.length!==0&&!a4.test(e)},SC=function(e){return typeof e=="string"&&e.length!==0&&!l4.test(e)},u4=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),SC(e)},EC=function(e,t,n){const r=n instanceof le?new Tj(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+Xr(r));if(typeof t=="function")throw new Error(e+"contains a function "+Xr(r)+" with contents = "+t.toString());if(yx(t))throw new Error(e+"contains "+t.toString()+" "+Xr(r));if(typeof t=="string"&&t.length>Tf/3&&ed(t)>Tf)throw new Error(e+"contains a string greater than "+Tf+" utf8 bytes "+Xr(r)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let i=!1,s=!1;if(_t(t,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!wC(o)))throw new Error(e+" contains an invalid key ("+o+") "+Xr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);bj(r,o),EC(e,a,r),kj(r)}),i&&s)throw new Error(e+' contains ".value" child '+Xr(r)+" in addition to actual children.")}},xC=function(e,t,n,r){if(!(r&&n===void 0)&&!SC(n))throw new Error(QE(e,t)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},c4=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),xC(e,t,n,r)},d4=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!wC(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!u4(n))throw new Error(QE(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class f4{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function h4(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();n!==null&&!zx(s,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function zr(e,t,n){h4(e,n),p4(e,r=>tn(r,t)||tn(t,r))}function p4(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const s=i.path;t(s)?(m4(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function m4(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const r=n.getEventRunner();fi&&et("event: "+n.toString()),Ua(r)}}}/**
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
 */const g4="repo_interrupt",y4=25;class v4{constructor(t,n,r,i){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new f4,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Qu(),this.transactionQueueTree_=new Tg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function _4(e,t,n){if(e.stats_=ag(e.repoInfo_),e.forceRestClient_||Q$())e.server_=new Yu(e.repoInfo_,(r,i,s,o)=>{f0(e,r,i,s,o)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>h0(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Oe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new $n(e.repoInfo_,t,(r,i,s,o)=>{f0(e,r,i,s,o)},r=>{h0(e,r)},r=>{S4(e,r)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(r=>{e.server_.refreshAuthToken(r)}),e.appCheckProvider_.addTokenChangeListener(r=>{e.server_.refreshAppCheckToken(r.token)}),e.statsReporter_=tj(e.repoInfo_,()=>new Zj(e.stats_,e.server_)),e.infoData_=new qj,e.infoSyncTree_=new c0({startListening:(r,i,s,o)=>{let a=[];const l=e.infoData_.getNode(r._path);return l.isEmpty()||(a=Ba(e.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),kg(e,"connected",!1),e.serverSyncTree_=new c0({startListening:(r,i,s,o)=>(e.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);zr(e.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{e.server_.unlisten(r,i)}})}function w4(e){const n=e.infoData_.getNode(new le(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function CC(e){return Z3({timestamp:w4(e)})}function f0(e,t,n,r,i){e.dataUpdateCount++;const s=new le(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(i)if(r){const l=$u(n,u=>He(u));o=G3(e.serverSyncTree_,s,l,i)}else{const l=He(n);o=fC(e.serverSyncTree_,s,l,i)}else if(r){const l=$u(n,u=>He(u));o=V3(e.serverSyncTree_,s,l)}else{const l=He(n);o=Ba(e.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Og(e,s)),zr(e.eventQueue_,a,o)}function h0(e,t){kg(e,"connected",t),t===!1&&C4(e)}function S4(e,t){_t(t,(n,r)=>{kg(e,n,r)})}function kg(e,t,n){const r=new le("/.info/"+t),i=He(n);e.infoData_.updateSnapshot(r,i);const s=Ba(e.infoSyncTree_,r,i);zr(e.eventQueue_,r,s)}function E4(e){return e.nextWriteId_++}function x4(e,t,n){const r=q3(e.serverSyncTree_,t);return r!=null?Promise.resolve(r):e.server_.get(t).then(i=>{const s=He(i).withIndex(t._queryParams.getIndex());K3(e.serverSyncTree_,t,n,!0);let o;if(t._queryParams.loadsAllData())o=Ba(e.serverSyncTree_,t._path,s);else{const a=_a(e.serverSyncTree_,t);o=fC(e.serverSyncTree_,t._path,s,a)}return zr(e.eventQueue_,t._path,o),dC(e.serverSyncTree_,t,n,null,!0),s},i=>(Ig(e,"get for query "+Oe(t)+" failed: "+i),Promise.reject(new Error(i))))}function C4(e){Ig(e,"onDisconnectEvents");const t=CC(e),n=Qu();op(e.onDisconnect_,X(),(i,s)=>{const o=n4(i,s,e.serverSyncTree_,t);Yx(n,i,o)});let r=[];op(n,X(),(i,s)=>{r=r.concat(Ba(e.serverSyncTree_,i,s));const o=I4(e,i);Og(e,o)}),e.onDisconnect_=Qu(),zr(e.eventQueue_,X(),r)}function T4(e){e.persistentConnection_&&e.persistentConnection_.interrupt(g4)}function Ig(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),et(n,...t)}function TC(e,t,n){return hC(e.serverSyncTree_,t,n)||z.EMPTY_NODE}function Pg(e,t=e.transactionQueueTree_){if(t||ud(e,t),Gs(t)){const n=kC(e,t);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&b4(e,Wa(t),n)}else vC(t)&&ld(t,n=>{Pg(e,n)})}function b4(e,t,n){const r=n.map(u=>u.currentWriteId),i=TC(e,t,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];I(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=it(t,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,u=>{Ig(e,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(ns(e.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();ud(e,bg(e.transactionQueueTree_,t)),Pg(e,e.transactionQueueTree_),zr(e.eventQueue_,t,c);for(let f=0;f<d.length;f++)Ua(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{It("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Og(e,t)}},o)}function Og(e,t){const n=bC(e,t),r=Wa(n),i=kC(e,n);return k4(e,i,r),r}function k4(e,t,n){if(t.length===0)return;const r=[];let i=[];const o=t.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<t.length;a++){const l=t[a],u=it(n,l.path);let c=!1,d;if(I(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(ns(e.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=y4)c=!0,d="maxretry",i=i.concat(ns(e.serverSyncTree_,l.currentWriteId,!0));else{const f=TC(e,l.path,o);l.currentInputSnapshot=f;const m=t[a].update(f.val());if(m!==void 0){EC("transaction failed: Data returned ",m,l.path);let g=He(m);typeof m=="object"&&m!=null&&qn(m,".priority")||(g=g.updatePriority(f.getPriority()));const w=l.currentWriteId,p=CC(e),h=r4(g,f,p);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=h,l.currentWriteId=E4(e),o.splice(o.indexOf(w),1),i=i.concat(B3(e.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(ns(e.serverSyncTree_,w,!0))}else c=!0,d="nodata",i=i.concat(ns(e.serverSyncTree_,l.currentWriteId,!0))}zr(e.eventQueue_,n,i),i=[],c&&(t[a].status=2,function(f){setTimeout(f,Math.floor(0))}(t[a].unwatcher),t[a].onComplete&&(d==="nodata"?r.push(()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot)):r.push(()=>t[a].onComplete(new Error(d),!1,null))))}ud(e,e.transactionQueueTree_);for(let a=0;a<r.length;a++)Ua(r[a]);Pg(e,e.transactionQueueTree_)}function bC(e,t){let n,r=e.transactionQueueTree_;for(n=Y(t);n!==null&&Gs(r)===void 0;)r=bg(r,n),t=ce(t),n=Y(t);return r}function kC(e,t){const n=[];return IC(e,t,n),n.sort((r,i)=>r.order-i.order),n}function IC(e,t,n){const r=Gs(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ld(t,i=>{IC(e,i,n)})}function ud(e,t){const n=Gs(t);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,yC(t,n.length>0?n:void 0)}ld(t,r=>{ud(e,r)})}function I4(e,t){const n=Wa(bC(e,t)),r=bg(e.transactionQueueTree_,t);return s4(r,i=>{bf(e,i)}),bf(e,r),_C(r,i=>{bf(e,i)}),n}function bf(e,t){const n=Gs(t);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ns(e.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?yC(t,void 0):n.length=s+1,zr(e.eventQueue_,Wa(t),i);for(let o=0;o<r.length;o++)Ua(r[o])}}/**
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
 */function P4(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}t+="/"+i}return t}function O4(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):It(`Invalid query segment '${n}' in query '${e}'`)}return t}const p0=function(e,t){const n=R4(e),r=n.namespace;n.domain==="firebase.com"&&Wn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Wn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||z$();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Px(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new le(n.pathString)}},R4=function(e){let t="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof e=="string"){let u=e.indexOf("//");u>=0&&(a=e.substring(0,u-1),e=e.substring(u+2));let c=e.indexOf("/");c===-1&&(c=e.length);let d=e.indexOf("?");d===-1&&(d=e.length),t=e.substring(0,Math.min(c,d)),c<d&&(i=P4(e.substring(c,d)));const f=O4(e.substring(Math.min(e.length,d)));u=t.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(t.substring(u+1),10)):u=t.length;const m=t.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const g=t.indexOf(".");r=t.substring(0,g).toLowerCase(),n=t.substring(g+1),s=r}"ns"in f&&(s=f.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class N4{constructor(t,n,r,i){this.eventType=t,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Oe(this.snapshot.exportVal())}}class A4{constructor(t,n,r){this.eventRegistration=t,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class D4{constructor(t,n){this.snapshotCallback=t,this.cancelCallback=n}onValue(t,n){this.snapshotCallback.call(null,t,n)}onCancel(t){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
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
 */class Rg{constructor(t,n,r,i){this._repo=t,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return G(this._path)?null:$x(this._path)}get ref(){return new Yn(this._repo,this._path)}get _queryIdentifier(){const t=Z_(this._queryParams),n=sg(t);return n==="{}"?"default":n}get _queryObject(){return Z_(this._queryParams)}isEqual(t){if(t=Ht(t),!(t instanceof Rg))return!1;const n=this._repo===t._repo,r=zx(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Cj(this._path)}}class Yn extends Rg{constructor(t,n){super(t,n,new fg,!1)}get parent(){const t=Ux(this._path);return t===null?null:new Yn(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class wa{constructor(t,n,r){this._node=t,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const n=new le(t),r=ic(this.ref,t);return new wa(this._node.getChild(n),r,Ee)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>t(new wa(i,ic(this.ref,r),Ee)))}hasChild(t){const n=new le(t);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function L4(e,t){return e=Ht(e),e._checkNotDeleted("ref"),t!==void 0?ic(e._root,t):e._root}function ic(e,t){return e=Ht(e),Y(e._path)===null?c4("child","path",t,!1):xC("child","path",t,!1),new Yn(e._repo,Re(e._path,t))}function M4(e){e=Ht(e);const t=new D4(()=>{}),n=new Ng(t);return x4(e._repo,e,n).then(r=>new wa(r,new Yn(e._repo,e._path),e._queryParams.getIndex()))}class Ng{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,n){const r=n._queryParams.getIndex();return new N4("value",this,new wa(t.snapshotNode,new Yn(n._repo,n._path),r))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new A4(this,t,n):null}matches(t){return t instanceof Ng?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}D3(Yn);j3(Yn);/**
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
 */const F4="FIREBASE_DATABASE_EMULATOR_HOST",fp={};let $4=!1;function j4(e,t,n,r){e.repoInfo_=new Px(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}function U4(e,t,n,r,i){let s=r||e.options.databaseURL;s===void 0&&(e.options.projectId||Wn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),et("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o=p0(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[F4]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=p0(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new fs(fs.OWNER):new J$(e.name,e.options,t);d4("Invalid Firebase Database URL",o),G(o.path)||Wn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=B4(a,e,c,new X$(e.name,n));return new V4(d,e)}function z4(e,t){const n=fp[t];(!n||n[e.key]!==e)&&Wn(`Database ${t}(${e.repoInfo_}) has already been deleted.`),T4(e),delete n[e.key]}function B4(e,t,n,r){let i=fp[t.name];i||(i={},fp[t.name]=i);let s=i[e.toURLString()];return s&&Wn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new v4(e,$4,n,r),i[e.toURLString()]=s,s}class V4{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(_4(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Yn(this._repo,X())),this._rootInternal}_delete(){return this._rootInternal!==null&&(z4(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&Wn("Cannot call "+t+" on a deleted database.")}}function W4(e=hF(),t){const n=ZE(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const r=tM("database");r&&H4(n,...r)}return n}function H4(e,t,n,r={}){e=Ht(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&Wn("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Wn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new fs(fs.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:rM(r.mockUserToken,e.app.options.projectId);s=new fs(o)}j4(i,t,n,s)}/**
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
 */function G4(e){M$(td),Os(new wi("database",(t,{instanceIdentifier:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return U4(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Er(M_,F_,e),Er(M_,F_,"esm2017")}$n.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};$n.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};G4();const K4={apiKey:"AIzaSyDkWC69rklVP4x89l4iBxXBRgp9ClD9p40",authDomain:"test-582b2.firebaseapp.com",projectId:"test-582b2",storageBucket:"test-582b2.appspot.com",messagingSenderId:"925130837675",appId:"1:925130837675:web:d3470003dae1803bf931ee",databaseURL:"https://test-582b2-default-rtdb.europe-west1.firebasedatabase.app/"},PC=ex(K4),Ag=d$(PC),q4=W4(PC);new Nn;const zl=Jc("auth/signUp",async({name:e,email:t,password:n},r)=>{try{const s=(await T$(Ag,t,n)).user;return await I$(s,{displayName:e}),{isAuthenticated:!0,email:s.email}}catch(i){return r.rejectWithValue(i.message)}}),Bl=Jc("auth/signIn",async({email:e,password:t},n)=>{try{const i=(await b$(Ag,e,t)).user;return{isAuthenticated:!0,name:i.displayName,email:i.email}}catch(r){return n.rejectWithValue(r.message)}}),Vl=Jc("auth/logout",async(e,t)=>{try{await P$(Ag)}catch(n){return t.rejectWithValue(n.message)}});var OC={exports:{}},RC={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ha=T;function Y4(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Q4=typeof Object.is=="function"?Object.is:Y4,X4=Ha.useSyncExternalStore,J4=Ha.useRef,Z4=Ha.useEffect,e6=Ha.useMemo,t6=Ha.useDebugValue;RC.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=J4(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=e6(function(){function l(m){if(!u){if(u=!0,c=m,m=r(m),i!==void 0&&o.hasValue){var g=o.value;if(i(g,m))return d=g}return d=m}if(g=d,Q4(c,m))return g;var v=r(m);return i!==void 0&&i(g,v)?g:(c=m,d=v)}var u=!1,c,d,f=n===void 0?null:n;return[function(){return l(t())},f===null?void 0:function(){return l(f())}]},[t,n,r,i]);var a=X4(e,s[0],s[1]);return Z4(function(){o.hasValue=!0,o.value=a},[a]),t6(a),a};OC.exports=RC;var n6=OC.exports,Ct="default"in Mo?st:Mo,m0=Symbol.for("react-redux-context"),g0=typeof globalThis<"u"?globalThis:{};function r6(){if(!Ct.createContext)return{};const e=g0[m0]??(g0[m0]=new Map);let t=e.get(Ct.createContext);return t||(t=Ct.createContext(null),e.set(Ct.createContext,t)),t}var Ar=r6(),i6=()=>{throw new Error("uSES not initialized!")};function Dg(e=Ar){return function(){return Ct.useContext(e)}}var NC=Dg(),AC=i6,s6=e=>{AC=e},o6=(e,t)=>e===t;function a6(e=Ar){const t=e===Ar?NC:Dg(e),n=(r,i={})=>{const{equalityFn:s=o6,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:l,getServerState:u,stabilityCheck:c,identityFunctionCheck:d}=t();Ct.useRef(!0);const f=Ct.useCallback({[r.name](g){return r(g)}}[r.name],[r,c,o.stabilityCheck]),m=AC(l.addNestedSub,a.getState,u||a.getState,f,s);return Ct.useDebugValue(m),m};return Object.assign(n,{withTypes:()=>n}),n}var Tr=a6();function l6(e){e()}function u6(){let e=null,t=null;return{clear(){e=null,t=null},notify(){l6(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var y0={notify(){},get:()=>[]};function c6(e,t){let n,r=y0,i=0,s=!1;function o(v){c();const w=r.subscribe(v);let p=!1;return()=>{p||(p=!0,w(),d())}}function a(){r.notify()}function l(){g.onStateChange&&g.onStateChange()}function u(){return s}function c(){i++,n||(n=t?t.addNestedSub(l):e.subscribe(l),r=u6())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=y0)}function f(){s||(s=!0,c())}function m(){s&&(s=!1,d())}const g={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:f,tryUnsubscribe:m,getListeners:()=>r};return g}var d6=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",f6=d6?Ct.useLayoutEffect:Ct.useEffect;function h6({store:e,context:t,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=Ct.useMemo(()=>{const u=c6(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[e,r,i,s]),a=Ct.useMemo(()=>e.getState(),[e]);f6(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const l=t||Ar;return Ct.createElement(l.Provider,{value:o},n)}var p6=h6;function DC(e=Ar){const t=e===Ar?NC:Dg(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var m6=DC();function g6(e=Ar){const t=e===Ar?m6:DC(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var Ks=g6();s6(n6.useSyncExternalStoreWithSelector);function LC({onClose:e}){const t=Ks(),n=Om({userName:us().min(2,"Name must be at least 2 characters long").max(16,"Name can be at most 16 characters long").matches(/^[a-zA-Z\s]+$/,"Name must contain only English letters and spaces").required("Name is required"),email:us().email("Invalid email format").matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Invalid Email format").required("Email is required"),password:us().min(6,"Password must be at least 6 characters long").max(16,"Password can be at most 16 characters long").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,"Password must contain only English letters at least one digit, one lowercase letter, and one uppercase letter").required("Password is required")}),r=bE({initialValues:{userName:"",email:"",password:""},validationSchema:n,onSubmit:async i=>{console.log(i),t(zl(i))}});return _.jsxs(HO,{onSubmit:r.handleSubmit,children:[_.jsx(GO,{children:"Registration"}),_.jsx(KO,{children:"Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"}),_.jsxs(ef,{children:[_.jsx(nf,{id:"userName",name:"userName",type:"text",placeholder:"Name",onChange:r.handleChange,value:r.values.userName,className:`${r.touched.userName&&r.errors.userName?"is-invalid":""}`}),r.touched.userName&&r.errors.userName?_.jsx(_.Fragment,{children:_.jsx(tf,{children:r.errors.userName})}):null]}),_.jsxs(ef,{children:[_.jsx(nf,{id:"email",name:"email",type:"text",placeholder:"Email",onChange:r.handleChange,value:r.values.email,className:`${r.touched.email&&r.errors.email?"is-invalid":""}`}),r.touched.email&&r.errors.email?_.jsx(_.Fragment,{children:_.jsx(tf,{children:r.errors.email})}):null]}),_.jsxs(ef,{children:[_.jsx(nf,{id:"password",name:"password",type:r.values.showPassword?"text":"password",placeholder:"Password",onChange:r.handleChange,value:r.values.password,className:`${r.touched.password&&r.errors.password?"is-invalid":""}`}),_.jsx(qO,{type:"button",onClick:()=>{r.setFieldTouched("password",!1),r.setFieldValue("showPassword",!r.values.showPassword)},children:r.values.showPassword?_.jsx(Rv,{children:_.jsx("use",{href:an+"#iconEyeOpen"})}):_.jsx(Rv,{children:_.jsx("use",{href:an+"#iconEyeClosed"})})}),r.touched.password&&r.errors.password?_.jsx(tf,{children:r.errors.password}):null]}),_.jsx(YO,{type:"submit",children:"Sign Up"}),_.jsx(QO,{onClick:()=>e(!1),children:_.jsx(XO,{children:_.jsx("use",{href:an+"#icon-x"})})})]})}const y6=U.form`
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
`,v0=U.div`
  margin-bottom: 14px;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 18px;
  }
`;U.div`
  margin-bottom: 40px;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
`;const v6=U.h2`
  line-height: 1.2;
  letter-spacing: -0.8px;
  font-weight: 500;
  margin-bottom: 20px;
  color: var(--secondar);
  @media (min-width: 768px) {
    font-size: 40px;
  }
`,_6=U.p`
  width: 438px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.38;
  margin-bottom: 40px;
  color: rgba(18, 20, 23, 0.8);
`,_0=U.p`
  margin-left: 15px;
  font-size: 12px;
  font-weight: 400;
  color: var(--red);
`,w6=U.button`
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
`,w0=U.input`
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
`,S6=U.button`
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
`,E6=U.button`
  position: absolute;
  top: 20px;
  right: 20px;

  background-color: transparent;
  border: none;
`;U.svg`
  stroke: var(--secondary);
  fill: none;
  width: 24px;
  height: 24px;
`;const x6=U.svg`
  stroke: var(--secondary);
  fill: none;
  width: 32px;
  height: 32px;
`,S0=U.svg`
  stroke: var(--secondary);
  fill: none;
  display: inline-block;
  width: 24px;
  height: 24px;
`;function MC({onClose:e}){const t=Ks(),n=Om({email:us().email("Invalid email format").matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Invalid Email format").required("Email is required"),password:us().min(6,"Password must be at least 6 characters long").max(16,"Password can be at most 16 characters long").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,"Password must contain only English letters at least one digit, one lowercase letter, and one uppercase letter").required("Password is required")}),r=bE({initialValues:{email:"",password:""},validationSchema:n,onSubmit:async i=>{await t(Bl(i))}});return _.jsxs(y6,{onSubmit:r.handleSubmit,children:[_.jsx(v6,{children:"Log In"}),_.jsx(_6,{children:"Welcome back! Please enter your credentials to access your account and continue your search for an teacher."}),_.jsxs(v0,{children:[_.jsx(w0,{id:"email",name:"email",type:"text",placeholder:"Email",onChange:r.handleChange,value:r.values.email,className:`${r.touched.email&&r.errors.email?"is-invalid":""}`}),r.touched.email&&r.errors.email?_.jsx(_.Fragment,{children:_.jsx(_0,{children:r.errors.email})}):null]}),_.jsxs(v0,{children:[_.jsx(w0,{id:"password",name:"password",type:r.values.showPassword?"text":"password",placeholder:"Password",onChange:r.handleChange,value:r.values.password,className:`${r.touched.password&&r.errors.password?"is-invalid":""}`}),_.jsx(w6,{type:"button",onClick:()=>{r.setFieldTouched("password",!1),r.setFieldValue("showPassword",!r.values.showPassword)},children:r.values.showPassword?_.jsx(S0,{children:_.jsx("use",{href:an+"#iconEyeOpen"})}):_.jsx(S0,{children:_.jsx("use",{href:an+"#iconEyeClosed"})})}),r.touched.password&&r.errors.password?_.jsx(_0,{children:r.errors.password}):null]}),_.jsx(S6,{type:"submit",children:"Log In"}),_.jsx(E6,{onClick:()=>e(!1),children:_.jsx(x6,{children:_.jsx("use",{href:an+"#icon-x"})})})]})}function FC({color:e,regis:t,log:n,ShowModal:r}){const[i,s]=T.useState(!1),[o,a]=T.useState(!1),l=()=>{r&&(r(!1),n(!0)),a(!o)},u=()=>{r&&(r(!1),t(!0)),s(!i)};return _.jsxs(_.Fragment,{children:[_.jsxs(QP,{children:[_.jsxs(XP,{onClick:l,children:[_.jsx($S,{color:e,children:_.jsx("use",{href:an+"#icon-log-in-01"})}),"Log in"]}),_.jsx(JP,{onClick:u,children:"Registration"})]}),i&&_.jsx(Po,{onClose:s,children:_.jsx(LC,{onClose:s})}),o&&_.jsx(Po,{onClose:a,children:_.jsx(MC,{onClose:a})})]})}const C6=U.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px 28px;
`,E0=U(ba)`
  color: var(--secondary);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  padding: 10px 0px;
`;function T6({color:e}){return _.jsxs(_.Fragment,{children:[_.jsxs(C6,{children:[_.jsx(E0,{to:"/Home",children:"Home"}),_.jsx(E0,{to:"/Teachers",children:"Teachers"})]}),_.jsx(FC,{color:e})]})}const b6=U.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px 28px;
`,kf=U(ba)`
  color: var(--secondary);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  padding: 10px 0px;
`,k6=U.button`
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
`;function I6({color:e}){const t=Ks();return _.jsxs(_.Fragment,{children:[_.jsxs(b6,{children:[_.jsx(kf,{to:"/Home",children:"Home"}),_.jsx(kf,{to:"/Teachers",children:"Teachers"}),_.jsx(kf,{to:"/Favorites",children:"Favorites"})]}),_.jsxs(k6,{onClick:()=>t(Vl()),children:[_.jsx($S,{color:e,children:_.jsx("use",{href:an+"#icon-log-in-01"})}),"Log out"]})]})}const Lg=e=>e.Auth.isAuth,P6=({color:e})=>{const t=Tr(Lg);return _.jsx(HP,{children:_.jsxs(GP,{children:[_.jsxs(qP,{to:"/Home",children:[_.jsx(KP,{children:_.jsx("use",{href:an+"#icon-ukraine"})}),_.jsx(YP,{children:"LearnLingo"})]}),t?_.jsx(I6,{color:e}):_.jsx(T6,{color:e})]})})};function hp(){return hp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hp.apply(this,arguments)}function O6(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function R6(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var N6=function(){function e(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(R6(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=O6(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Je="-ms-",sc="-moz-",J="-webkit-",$C="comm",Mg="rule",Fg="decl",A6="@import",jC="@keyframes",D6="@layer",L6=Math.abs,cd=String.fromCharCode,M6=Object.assign;function F6(e,t){return We(e,0)^45?(((t<<2^We(e,0))<<2^We(e,1))<<2^We(e,2))<<2^We(e,3):0}function UC(e){return e.trim()}function $6(e,t){return(e=t.exec(e))?e[0]:e}function Z(e,t,n){return e.replace(t,n)}function pp(e,t){return e.indexOf(t)}function We(e,t){return e.charCodeAt(t)|0}function Sa(e,t,n){return e.slice(t,n)}function mn(e){return e.length}function $g(e){return e.length}function vl(e,t){return t.push(e),e}function j6(e,t){return e.map(t).join("")}var dd=1,Ds=1,zC=0,wt=0,be=0,qs="";function fd(e,t,n,r,i,s,o){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:dd,column:Ds,length:o,return:""}}function lo(e,t){return M6(fd("",null,null,"",null,null,0),e,{length:-e.length},t)}function U6(){return be}function z6(){return be=wt>0?We(qs,--wt):0,Ds--,be===10&&(Ds=1,dd--),be}function Pt(){return be=wt<zC?We(qs,wt++):0,Ds++,be===10&&(Ds=1,dd++),be}function wn(){return We(qs,wt)}function Wl(){return wt}function Ga(e,t){return Sa(qs,e,t)}function Ea(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function BC(e){return dd=Ds=1,zC=mn(qs=e),wt=0,[]}function VC(e){return qs="",e}function Hl(e){return UC(Ga(wt-1,mp(e===91?e+2:e===40?e+1:e)))}function B6(e){for(;(be=wn())&&be<33;)Pt();return Ea(e)>2||Ea(be)>3?"":" "}function V6(e,t){for(;--t&&Pt()&&!(be<48||be>102||be>57&&be<65||be>70&&be<97););return Ga(e,Wl()+(t<6&&wn()==32&&Pt()==32))}function mp(e){for(;Pt();)switch(be){case e:return wt;case 34:case 39:e!==34&&e!==39&&mp(be);break;case 40:e===41&&mp(e);break;case 92:Pt();break}return wt}function W6(e,t){for(;Pt()&&e+be!==47+10;)if(e+be===42+42&&wn()===47)break;return"/*"+Ga(t,wt-1)+"*"+cd(e===47?e:Pt())}function H6(e){for(;!Ea(wn());)Pt();return Ga(e,wt)}function G6(e){return VC(Gl("",null,null,null,[""],e=BC(e),0,[0],e))}function Gl(e,t,n,r,i,s,o,a,l){for(var u=0,c=0,d=o,f=0,m=0,g=0,v=1,w=1,p=1,h=0,y="",S=i,x=s,C=r,E=y;w;)switch(g=h,h=Pt()){case 40:if(g!=108&&We(E,d-1)==58){pp(E+=Z(Hl(h),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:E+=Hl(h);break;case 9:case 10:case 13:case 32:E+=B6(g);break;case 92:E+=V6(Wl()-1,7);continue;case 47:switch(wn()){case 42:case 47:vl(K6(W6(Pt(),Wl()),t,n),l);break;default:E+="/"}break;case 123*v:a[u++]=mn(E)*p;case 125*v:case 59:case 0:switch(h){case 0:case 125:w=0;case 59+c:p==-1&&(E=Z(E,/\f/g,"")),m>0&&mn(E)-d&&vl(m>32?C0(E+";",r,n,d-1):C0(Z(E," ","")+";",r,n,d-2),l);break;case 59:E+=";";default:if(vl(C=x0(E,t,n,u,c,i,a,y,S=[],x=[],d),s),h===123)if(c===0)Gl(E,t,C,C,S,s,d,a,x);else switch(f===99&&We(E,3)===110?100:f){case 100:case 108:case 109:case 115:Gl(e,C,C,r&&vl(x0(e,C,C,0,0,i,a,y,i,S=[],d),x),i,x,d,a,r?S:x);break;default:Gl(E,C,C,C,[""],x,0,a,x)}}u=c=m=0,v=p=1,y=E="",d=o;break;case 58:d=1+mn(E),m=g;default:if(v<1){if(h==123)--v;else if(h==125&&v++==0&&z6()==125)continue}switch(E+=cd(h),h*v){case 38:p=c>0?1:(E+="\f",-1);break;case 44:a[u++]=(mn(E)-1)*p,p=1;break;case 64:wn()===45&&(E+=Hl(Pt())),f=wn(),c=d=mn(y=E+=H6(Wl())),h++;break;case 45:g===45&&mn(E)==2&&(v=0)}}return s}function x0(e,t,n,r,i,s,o,a,l,u,c){for(var d=i-1,f=i===0?s:[""],m=$g(f),g=0,v=0,w=0;g<r;++g)for(var p=0,h=Sa(e,d+1,d=L6(v=o[g])),y=e;p<m;++p)(y=UC(v>0?f[p]+" "+h:Z(h,/&\f/g,f[p])))&&(l[w++]=y);return fd(e,t,n,i===0?Mg:a,l,u,c)}function K6(e,t,n){return fd(e,t,n,$C,cd(U6()),Sa(e,2,-2),0)}function C0(e,t,n,r){return fd(e,t,n,Fg,Sa(e,0,r),Sa(e,r+1,-1),r)}function ps(e,t){for(var n="",r=$g(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function q6(e,t,n,r){switch(e.type){case D6:if(e.children.length)break;case A6:case Fg:return e.return=e.return||e.value;case $C:return"";case jC:return e.return=e.value+"{"+ps(e.children,r)+"}";case Mg:e.value=e.props.join(",")}return mn(n=ps(e.children,r))?e.return=e.value+"{"+n+"}":""}function Y6(e){var t=$g(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}function Q6(e){return function(t){t.root||(t=t.return)&&e(t)}}var X6=function(t,n,r){for(var i=0,s=0;i=s,s=wn(),i===38&&s===12&&(n[r]=1),!Ea(s);)Pt();return Ga(t,wt)},J6=function(t,n){var r=-1,i=44;do switch(Ea(i)){case 0:i===38&&wn()===12&&(n[r]=1),t[r]+=X6(wt-1,n,r);break;case 2:t[r]+=Hl(i);break;case 4:if(i===44){t[++r]=wn()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=cd(i)}while(i=Pt());return t},Z6=function(t,n){return VC(J6(BC(t),n))},T0=new WeakMap,eU=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!T0.get(r))&&!i){T0.set(t,!0);for(var s=[],o=Z6(n,s),a=r.props,l=0,u=0;l<o.length;l++)for(var c=0;c<a.length;c++,u++)t.props[u]=s[l]?o[l].replace(/&\f/g,a[c]):a[c]+" "+o[l]}}},tU=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function WC(e,t){switch(F6(e,t)){case 5103:return J+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return J+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return J+e+sc+e+Je+e+e;case 6828:case 4268:return J+e+Je+e+e;case 6165:return J+e+Je+"flex-"+e+e;case 5187:return J+e+Z(e,/(\w+).+(:[^]+)/,J+"box-$1$2"+Je+"flex-$1$2")+e;case 5443:return J+e+Je+"flex-item-"+Z(e,/flex-|-self/,"")+e;case 4675:return J+e+Je+"flex-line-pack"+Z(e,/align-content|flex-|-self/,"")+e;case 5548:return J+e+Je+Z(e,"shrink","negative")+e;case 5292:return J+e+Je+Z(e,"basis","preferred-size")+e;case 6060:return J+"box-"+Z(e,"-grow","")+J+e+Je+Z(e,"grow","positive")+e;case 4554:return J+Z(e,/([^-])(transform)/g,"$1"+J+"$2")+e;case 6187:return Z(Z(Z(e,/(zoom-|grab)/,J+"$1"),/(image-set)/,J+"$1"),e,"")+e;case 5495:case 3959:return Z(e,/(image-set\([^]*)/,J+"$1$`$1");case 4968:return Z(Z(e,/(.+:)(flex-)?(.*)/,J+"box-pack:$3"+Je+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+J+e+e;case 4095:case 3583:case 4068:case 2532:return Z(e,/(.+)-inline(.+)/,J+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(mn(e)-1-t>6)switch(We(e,t+1)){case 109:if(We(e,t+4)!==45)break;case 102:return Z(e,/(.+:)(.+)-([^]+)/,"$1"+J+"$2-$3$1"+sc+(We(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~pp(e,"stretch")?WC(Z(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(We(e,t+1)!==115)break;case 6444:switch(We(e,mn(e)-3-(~pp(e,"!important")&&10))){case 107:return Z(e,":",":"+J)+e;case 101:return Z(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+J+(We(e,14)===45?"inline-":"")+"box$3$1"+J+"$2$3$1"+Je+"$2box$3")+e}break;case 5936:switch(We(e,t+11)){case 114:return J+e+Je+Z(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return J+e+Je+Z(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return J+e+Je+Z(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return J+e+Je+e+e}return e}var nU=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Fg:t.return=WC(t.value,t.length);break;case jC:return ps([lo(t,{value:Z(t.value,"@","@"+J)})],i);case Mg:if(t.length)return j6(t.props,function(s){switch($6(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ps([lo(t,{props:[Z(s,/:(read-\w+)/,":"+sc+"$1")]})],i);case"::placeholder":return ps([lo(t,{props:[Z(s,/:(plac\w+)/,":"+J+"input-$1")]}),lo(t,{props:[Z(s,/:(plac\w+)/,":"+sc+"$1")]}),lo(t,{props:[Z(s,/:(plac\w+)/,Je+"input-$1")]})],i)}return""})}},rU=[nU],iU=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var w=v.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||rU,s={},o,a=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var w=v.getAttribute("data-emotion").split(" "),p=1;p<w.length;p++)s[w[p]]=!0;a.push(v)});var l,u=[eU,tU];{var c,d=[q6,Q6(function(v){c.insert(v)})],f=Y6(u.concat(i,d)),m=function(w){return ps(G6(w),f)};l=function(w,p,h,y){c=h,m(w?w+"{"+p.styles+"}":p.styles),y&&(g.inserted[p.name]=!0)}}var g={key:n,sheet:new N6({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:s,registered:{},insert:l};return g.sheet.hydrate(a),g},sU=!0;function oU(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var HC=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||sU===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},aU=function(t,n,r){HC(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var s=n;do t.insert(n===s?"."+i:"",s,t.sheet,!0),s=s.next;while(s!==void 0)}};function lU(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var uU=/[A-Z]|^ms/g,cU=/_EMO_([^_]+?)_([^]*?)_EMO_/g,GC=function(t){return t.charCodeAt(1)===45},b0=function(t){return t!=null&&typeof t!="boolean"},If=gS(function(e){return GC(e)?e:e.replace(uU,"-$&").toLowerCase()}),k0=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(cU,function(r,i,s){return gn={name:i,styles:s,next:gn},i})}return xS[t]!==1&&!GC(t)&&typeof n=="number"&&n!==0?n+"px":n};function xa(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return gn={name:n.name,styles:n.styles,next:gn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)gn={name:r.name,styles:r.styles,next:gn},r=r.next;var i=n.styles+";";return i}return dU(e,t,n)}case"function":{if(e!==void 0){var s=gn,o=n(e);return gn=s,xa(e,t,o)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function dU(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=xa(e,t,n[i])+";";else for(var s in n){var o=n[s];if(typeof o!="object")t!=null&&t[o]!==void 0?r+=s+"{"+t[o]+"}":b0(o)&&(r+=If(s)+":"+k0(s,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var a=0;a<o.length;a++)b0(o[a])&&(r+=If(s)+":"+k0(s,o[a])+";");else{var l=xa(e,t,o);switch(s){case"animation":case"animationName":{r+=If(s)+":"+l+";";break}default:r+=s+"{"+l+"}"}}}return r}var I0=/label:\s*([^\s;\n{]+)\s*(;|$)/g,gn,fU=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,s="";gn=void 0;var o=t[0];o==null||o.raw===void 0?(i=!1,s+=xa(r,n,o)):s+=o[0];for(var a=1;a<t.length;a++)s+=xa(r,n,t[a]),i&&(s+=o[a]);I0.lastIndex=0;for(var l="",u;(u=I0.exec(s))!==null;)l+="-"+u[1];var c=lU(s)+l;return{name:c,styles:s,next:gn}},hU=function(t){return t()},pU=Mo["useInsertionEffect"]?Mo["useInsertionEffect"]:!1,mU=pU||hU,KC=T.createContext(typeof HTMLElement<"u"?iU({key:"css"}):null);KC.Provider;var gU=function(t){return T.forwardRef(function(n,r){var i=T.useContext(KC);return t(n,i,r)})},yU=T.createContext({}),vU=BI,_U=function(t){return t!=="theme"},P0=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?vU:_U},O0=function(t,n,r){var i;if(n){var s=n.shouldForwardProp;i=t.__emotion_forwardProp&&s?function(o){return t.__emotion_forwardProp(o)&&s(o)}:s}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},wU=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return HC(n,r,i),mU(function(){return aU(n,r,i)}),null},SU=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,s,o;n!==void 0&&(s=n.label,o=n.target);var a=O0(t,n,r),l=a||P0(i),u=!l("as");return function(){var c=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(s!==void 0&&d.push("label:"+s+";"),c[0]==null||c[0].raw===void 0)d.push.apply(d,c);else{d.push(c[0][0]);for(var f=c.length,m=1;m<f;m++)d.push(c[m],c[0][m])}var g=gU(function(v,w,p){var h=u&&v.as||i,y="",S=[],x=v;if(v.theme==null){x={};for(var C in v)x[C]=v[C];x.theme=T.useContext(yU)}typeof v.className=="string"?y=oU(w.registered,S,v.className):v.className!=null&&(y=v.className+" ");var E=fU(d.concat(S),w.registered,x);y+=w.key+"-"+E.name,o!==void 0&&(y+=" "+o);var P=u&&a===void 0?P0(h):l,M={};for(var L in v)u&&L==="as"||P(L)&&(M[L]=v[L]);return M.className=y,M.ref=p,T.createElement(T.Fragment,null,T.createElement(wU,{cache:w,serialized:E,isStringTag:typeof h=="string"}),T.createElement(h,M))});return g.displayName=s!==void 0?s:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=i,g.__emotion_styles=d,g.__emotion_forwardProp=a,Object.defineProperty(g,"toString",{value:function(){return"."+o}}),g.withComponent=function(v,w){return e(v,hp({},n,w,{shouldForwardProp:O0(g,w,!0)})).apply(void 0,d)},g}},EU=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],A=SU.bind();EU.forEach(function(e){A[e]=A(e)});const xU=A.div`
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
    ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};

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
      ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
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
`,CU=A.div`
  position: relative;
  height: 200px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`,qC=({color:e})=>_.jsx(xU,{color:e,children:_.jsx(CU,{children:_.jsxs("div",{className:"lds-ripple",children:[_.jsx("div",{}),_.jsx("div",{})]})})}),TU=({color:e})=>_.jsxs(_.Fragment,{children:[_.jsx(P6,{color:e}),_.jsx(T.Suspense,{fallback:_.jsx(qC,{color:e}),children:_.jsx(bb,{})})]}),bU=A.div`
    margin-left: auto;
  margin-right: auto;
  padding: 0px 16px;
  width: 320px;

  @media screen and (min-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    padding: 0px 32px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1400px;
    padding: 0px 64px;
  }
`,kU=A.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  gap: 0px 24px;
  margin-bottom: 24px;


  @media screen and (min-width: 320px) {
    
  }

  @media screen and (min-width: 768px) {
        flex-direction:row;
  }

  @media screen and (min-width: 1280px) {

  }
`,IU=A.h1`
  @media (min-width: 1280px) {
    width: 548px;
    margin-bottom: 32px;
    margin-top: 0px;
  }
    @media (max-width: 768px) {
    text-align:center;
    }

  color: var(--secondary);
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.17;
  letter-spacing: -0.96px;
`,PU=A.span`
  font-style: italic;
  font-weight: 400;
  line-height: 56px;
  letter-spacing: -0.96px;
  padding-right: 10px;
  border-radius: 12px;
  background-color: ${({color:e})=>e==="Blue"?"var(--hoverColorBlue)":e==="Green"?"var(--hoverColorGreen)":e==="Orange"?"var(--hoverColorYellow)":e==="Pink"?"var(--hoverColorPink)":e==="LightPink"?"var(--hoverColorCoral)":"var(--hoverCecondary-text-color)"};
`,OU=A.div`
  background-color: var(--secondary-white);
  border-radius: 30px;


      padding: 24px 16px;
              @media screen and (min-width: 768px) {
        @media screen and (max-width: 1279px) {
               max-width: 490px;
        }
              }
        @media screen and (min-width: 1280px) {
      padding: 98px 108px 98px 64px;
        }
`,uo=A.img`
      width: 300px;
      height: 350px;
    @media screen and (min-width: 1280px) {
      width: 568px;
      height: 530px;
    }
`,RU=A.p`
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
`,NU=A.button`
display: block;
  padding: 16px 88px;
  border: none;
  border-radius: 12px;
  height: 60px;
  background-color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};

      @media screen and (max-width: 768px) {
          margin-left:auto;
          margin-right:auto;
        }
              
`,AU=A.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;
  padding: 40px 20px;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  border: 3px dashed
    ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  border-radius: 30px;


  @media screen and (min-width: 320px) {

  }

  @media screen and (min-width: 768px) {

  }
/* 
  @media screen and (max-width: 1280px) {
    max-width: 819px;

  } */
    @media screen and (min-width: 1280px) {
    gap: 100px;
    padding: 40px 0;
    }
`,_l=A.li`
  display: flex;
  flex-direction: row;
  gap: 16px;
`,wl=A.span`
  font-size: 28px;
  line-height: 1.14;
  letter-spacing: -0.56px;
`,Sl=A.span`
  width: 96px;
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: -0.28px;
`,DU="/Learn-Lingo/assets/ImgYelow-7772ad01.jpeg",LU="/Learn-Lingo/assets/imgGrean-b6010a5f.jpeg",MU="/Learn-Lingo/assets/imgLighPink-5fe905ec.jpeg",FU="/Learn-Lingo/assets/imgPink-98002fea.jpeg",$U="/Learn-Lingo/assets/imgBlue-e3826070.jpeg",jU=({color:e})=>(console.log(e),_.jsxs(bU,{children:[_.jsxs(kU,{children:[_.jsxs(OU,{children:[_.jsxs(IU,{children:["Unlock your potential with the best"," ",_.jsx(PU,{color:e,children:"language"})," tutors"]}),_.jsx(RU,{children:"Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors."}),_.jsx(NU,{color:e,children:"Get started"})]}),e==="Blue"?_.jsx(uo,{src:$U,alt:"girlImg"}):null,e==="LightPink"?_.jsx(uo,{src:MU,alt:"girlImg"}):null,e==="Green"?_.jsx(uo,{src:LU,alt:"girlImg"}):null,e==="Orange"?_.jsx(uo,{src:DU,alt:"girlImg"}):null,e==="Pink"?_.jsx(uo,{src:FU,alt:"girlImg"}):null]}),_.jsx("footer",{children:_.jsxs(AU,{color:e,children:[_.jsxs(_l,{children:[_.jsx(wl,{children:"32,000 +"}),_.jsx(Sl,{children:"Experienced tutors"})]}),_.jsxs(_l,{children:[_.jsx(wl,{children:"300,000 +"}),_.jsx(Sl,{children:"5-star tutor reviews"})]}),_.jsxs(_l,{children:[_.jsx(wl,{children:"120 +"}),_.jsx(Sl,{children:"Subjects taught"})]}),_.jsxs(_l,{children:[_.jsx(wl,{children:"200 +"}),_.jsx(Sl,{children:"Tutor nationalities"})]})]})})]})),R0=A.ul`
  margin-top: 32px;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
`,UU=A.button`
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
  background-color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
`,zU=A.div`
  margin-left: auto;
  margin-right: auto;
  padding: 40px 16px;
  width: 320px;
  background-color: var(--secondary-white);

  @media screen and (min-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    padding: 70px 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 70px 40px;
  }
`;A.p`
  margin: 0;

  margin-bottom: 20px;
  margin-right: auto;
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.8px;
  color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
`;var YC={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},N0=st.createContext&&st.createContext(YC),BU=["attr","size","title"];function VU(e,t){if(e==null)return{};var n=WU(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function WU(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function oc(){return oc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oc.apply(this,arguments)}function A0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ac(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?A0(Object(n),!0).forEach(function(r){HU(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A0(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function HU(e,t,n){return t=GU(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function GU(e){var t=KU(e,"string");return typeof t=="symbol"?t:String(t)}function KU(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function QC(e){return e&&e.map((t,n)=>st.createElement(t.tag,ac({key:n},t.attr),QC(t.child)))}function hd(e){return t=>st.createElement(qU,oc({attr:ac({},e.attr)},t),QC(e.child))}function qU(e){var t=n=>{var{attr:r,size:i,title:s}=e,o=VU(e,BU),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),st.createElement("svg",oc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:ac(ac({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&st.createElement("title",null,s),e.children)};return N0!==void 0?st.createElement(N0.Consumer,null,n=>t(n)):t(YC)}function YU(e){return hd({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"},child:[]}]})(e)}function QU(e){return hd({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"},child:[]}]})(e)}function XU(e){return hd({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"},child:[]}]})(e)}function JU(e){return hd({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"},child:[]}]})(e)}const ZU=A.li`
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
`,ez=A.div`
  width: 120px;
  height: 120px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  border-radius: 50%;
  border: 3px solid
    ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  background: #fff;
`,tz=A.img`
  display: block;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
`,nz=A.div``,rz=A.div`
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
`;A.div`
  display: flex;
  justify-content: space-between;
`;const iz=A.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,sz=A.ul`
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;

  border-radius: 35px;
  border: 1px solid rgba(18, 20, 23, 0.2);

  font-size: 14px;
  font-weight: 500;
  line-height: 1.14;
  &.selected {
  }
`,D0=A(JU)`
  transform: scale(1);
  transition: transform 300ms cubic-bezier(0.39, 0.575, 0.565, 1);

  &:hover {
    transform: scale(1.02);
    opacity: 0.8;
  }
`,L0=A.button`
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
  background-color: transparent;
  border: none;
`,oz=A(YU)`
  transform: scale(1);
  transition: transform 300ms cubic-bezier(0.39, 0.575, 0.565, 1);

  &:hover {
    transform: scale(1.02);
    opacity: 0.8;
  }
`,az=A(XU)`
  margin-right: 8px;
`,M0=A(QU)`
  margin-right: 8px;
  fill: #ffc531;
`,lz=A.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  & p {
    color: var(--gray);
    margin: 0;
  }
`,uz=A.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
`,cz=A.p`
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
`,F0=A.p`
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
`,$0=A.button`
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
`;A.svg`
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
`;const dz=A.p`
  margin-bottom: 32px;
  margin-top: 16px;

  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`,fz=A.ul`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
`,hz=A.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`,pz=A.div`
  display: flex;
  gap: 12px;
`,mz=A.div`
  width: 46px;
  height: 46px;
  border-radius: 100px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`,gz=A.p`
  display: block;
  border-radius: 100px;

  font-size: 24px;
  font-weight: 700;
`,yz=A.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
`,vz=A.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`,_z=A.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`,wz=A.button`
  padding: 16px 48px;
  border: none;
  border-radius: 12px;
  background-color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};;

        font-size: 18px;
   font-weight: 700;
   line-height: 1.5;
   margin-top:32px;
`,Sz=A.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 445px;
  padding: 60px 20px;
  border-radius: 20px;
  background: #fff;

  @media (min-width: 768px) {
    width: 608px;
    height: 429px;
    padding: 60px 40px;
    border-radius: 40px;
  }
`,Ez=A.svg`
  position: absolute;
  top: 16px;
  right: 16px;

  stroke: var(--secondary);
  fill: none;

  width: 24px;
  height: 24px;

  cursor: pointer;
  transition: 300ms;

  &:hover {
    transform: scale(1.2);
  }

  @media (min-width: 768px) {
    top: 24px;
    right: 24px;
  }
`,xz=A.h3`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.96px;

 @media (min-width: 768px) {
    text-align: center;
    font-size: 36px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.44px;
  }
`,Cz=A.p`
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.56px;

  @media (min-width: 768px) {
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0.8px;
  }
`,Kl=Jc("teachers/getAllTeachers",async(e,t)=>{const n=L4(q4);try{const r=await M4(ic(n,"/"));if(r.exists()){const i=r.val();return Object.values(i)}}catch(r){return t.rejectWithValue(r.message)}}),Tz={teachers:[],teachersFilter:null,teachersFavorites:[],isLoading:!1},XC=zE({name:"teachers",initialState:Tz,extraReducers:e=>{e.addCase(Kl.pending,t=>{t.isLoading=!0}).addCase(Kl.fulfilled,(t,{payload:n})=>{t.isLoading=!1,t.teachers=n}).addCase(Kl.rejected,t=>{t.isLoading=!1})},reducers:{addFavorites(e,t){e.teachersFavorites.push(t.payload)},deleteFavorites(e,t){const n=e.teachersFavorites.filter(r=>r.avatar_url!==t.payload.avatar_url);e.teachersFavorites=n},filterTeachers(e,t){return{...e,teachersFilter:t.payload}},resetFilter(e){return{...e,teachersFilter:null}}}}),{addFavorites:bz,deleteFavorites:kz,filterTeachers:Iz,resetFilter:Pz}=XC.actions,Oz=XC.reducer,JC=e=>e.teachers.teachers,Rz=e=>e.teachers.isLoading,Nz=e=>e.teachers.teachersFavorites,Az=e=>e.teachers.teachersFilter,j0=({teacher:e,levelFilter:t,color:n})=>{const{name:r,surname:i,languages:s,levels:o,rating:a,reviews:l,price_per_hour:u,lessons_done:c,avatar_url:d,lesson_info:f,conditions:m,experience:g}=e,v=Ks(),[w,p]=T.useState(!1),[h,y]=T.useState(!1),[S,x]=T.useState(!1),[C,E]=T.useState(!1),P=Tr(Nz),M=Tr(Lg),[L,V]=T.useState(!1);T.useEffect(()=>{P.find(Ie=>Ie.avatar_url===d)!==void 0&&V(!0)},[d,P]);const ut=()=>{V(!L),v(L?kz(e):bz(e))};return _.jsxs(ZU,{children:[_.jsx(ez,{color:n,children:_.jsx(tz,{src:d,height:"100px",width:"100px"})}),_.jsxs(nz,{children:[_.jsxs(rz,{children:[_.jsxs(lz,{children:[_.jsx("p",{children:"Languages"}),_.jsxs(uz,{children:[r," ",i]})]}),_.jsxs("ul",{children:[_.jsxs("li",{children:[_.jsx(az,{size:"16px"})," Lessons online"]}),_.jsxs("li",{children:["Lessons done: ",c]}),_.jsxs("li",{children:[_.jsx(M0,{})," Rating: ",a]}),_.jsxs("li",{children:["Price / 1 hour: ",_.jsxs("span",{children:[u," $"]})]})]}),M&&_.jsx(L0,{type:"button",onClick:ut,children:L?_.jsx(oz,{size:26}):_.jsx(D0,{size:26})}),!M&&_.jsxs(L0,{type:"button",onClick:()=>y(!0),children:["   ",_.jsx(D0,{size:26}),"  "]})]}),_.jsxs(cz,{children:["Speaks: ",_.jsx("span",{children:s==null?void 0:s.join(", ")})]}),_.jsxs(F0,{children:["Lesson Info:",_.jsx("span",{children:f})]}),_.jsxs(F0,{children:["Conditions:",_.jsx("span",{children:m})]}),!w&&_.jsx($0,{onClick:()=>p(!0),children:"Read more"}),w&&_.jsxs(_.Fragment,{children:[_.jsx(dz,{children:g}),_.jsx(fz,{children:l.map((q,Ie)=>_.jsxs(hz,{children:[_.jsxs(pz,{children:[_.jsx(mz,{children:_.jsx(gz,{children:q.reviewer_name.charAt(0).toUpperCase()})}),_.jsxs(yz,{children:[_.jsx(vz,{children:q.reviewer_name}),_.jsxs("span",{children:[_.jsx(M0,{}),q.reviewer_rating,".0"]})]})]}),_.jsx(_z,{children:q.comment})]},Ie))}),w&&_.jsx($0,{onClick:()=>p(!1),children:"Read less"})]}),_.jsx(iz,{children:o.map((q,Ie)=>_.jsx(sz,{className:q===t?"selected":"",children:q},Ie))}),w&&_.jsx(wz,{color:n,onClick:()=>y(!0),className:"orderBtn",children:"Book trial lesson"}),h&&_.jsx(Po,{onClose:y,children:_.jsxs(Sz,{children:[_.jsx(Ez,{onClick:()=>{y(!1)},children:_.jsx("use",{href:an+"#icon-x"})}),_.jsx(xz,{children:"Attention"}),_.jsx(Cz,{children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."}),_.jsx(FC,{color:n,regis:x,log:E,ShowModal:y})]})}),S&&_.jsx(Po,{onClose:x,children:_.jsx(LC,{onClose:x})}),C&&_.jsx(Po,{onClose:E,children:_.jsx(MC,{onClose:E})})]})]})};let U0=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,n)=>(n&=63,n<36?t+=n.toString(36):n<62?t+=(n-26).toString(36).toUpperCase():n>62?t+="-":t+="_",t),"");const Dz=U.div`
  position: relative;
  display: inline-block;
  border-radius: 14px;
  background-color:#fff;
`,Lz=U.div`
  display: flex;
  align-items: center;
  gap: 0px 50px;
  padding: 14px 18px 14px 18px;
  cursor: pointer;
  border-radius: 14px;
`,Mz=U.p`
  color: var(--secondary);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1;
  margin: 0px;
`,Fz=U.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px 0px;

  width: 100%;
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
`,$z=U.li`
  cursor: pointer;
  transition: color 300ms;
  color: rgba(18, 20, 23, 0.20);

  width: 100%;
  &:hover {
    color: var(--secondary);
  }
`,jz=U.svg`
  width: 20px;
  height: 20px;
  stroke-width: 0;
  stroke: currentColor;
  fill: transparent;
  transition: transform 300ms;
  transform: ${e=>e.$active&&"rotate(180deg)"};
`;function Pf({arr:e,value:t,set:n,height:r,selectedOption:i}){const[s,o]=T.useState(!1),a=()=>{o(!s)},l=c=>{n(c),o(!1)},u=T.useRef(null);return T.useEffect(()=>{const c=d=>{u.current&&!u.current.contains(d.target)&&o(!1)};return document.addEventListener("click",c),()=>{document.removeEventListener("click",c)}},[u]),_.jsxs(Dz,{children:[_.jsxs(Lz,{onClick:a,ref:u,children:[_.jsx(Mz,{children:i||t}),_.jsx(jz,{$active:s?!0:void 0,children:_.jsx("use",{href:an+"#icon-chevron-down"})})]}),s&&_.jsx(Fz,{$heigh:r||void 0,children:e.map((c,d)=>_.jsx($z,{onClick:()=>l(c),children:c},d))})]})}const Uz=U.ul`
  display: flex;
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
`,zz=U.button`
    background-color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
      border:none;
    border-radius: 12px;
    color: var(--secondary);
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.25;
    padding: 14px 39px;
`;function Bz({color:e}){const t=Ks(),[n,r]=T.useState(""),[i,s]=T.useState(""),[o,a]=T.useState(""),l=Tr(JC),u=["French","English","German","Ukrainian","Polish","Spanish","Italian"],c=["A1 Beginner","A2 Elementary","B1 Intermediate","B2 Upper-Intermediate","C1 Advanced","C2 Proficient"];let d=[10,15,20,25,30,35,40];T.useEffect(()=>{if(n+i+o==="")return;const m=l.filter(g=>{const v=n?g.languages.includes(n):!0,w=i?+g.price_per_hour<=i:!0,p=o?g.levels.includes(o):!0;return w&&v&&p});t(Iz(m))},[n,o,l,t,i]);const f=()=>{t(Pz()),r(""),s(""),a("")};return _.jsxs(Uz,{children:[_.jsxs("li",{children:[_.jsx("span",{children:"Languages"}),_.jsx(Pf,{arr:u,value:"Choose a language",set:r,selectedOption:n})]}),_.jsxs("li",{children:[_.jsx("span",{children:"Level of knowledge"}),_.jsx(Pf,{arr:c,value:"Choose a level",set:a,selectedOption:o})]}),_.jsxs("li",{children:[_.jsx("span",{children:"Price"}),_.jsx(Pf,{arr:d,value:"To $",set:s,height:!0,selectedOption:i})]}),_.jsx(zz,{color:e,onClick:f,children:"Reset filter"})]})}function Vz({color:e}){const t=Tr(JC),n=Tr(Rz),r=Tr(Az),[i,s]=T.useState(4),o=()=>{s(l=>l+4)},a=t==null?void 0:t.slice(0,i);return _.jsx(_.Fragment,{children:n?_.jsx(qC,{color:e}):_.jsxs(zU,{children:[_.jsx(Bz,{color:e}),r?_.jsx(R0,{children:r&&(r==null?void 0:r.map(l=>_.jsx(j0,{color:e,teacher:l},U0())))}):_.jsxs(_.Fragment,{children:[_.jsx(R0,{children:a&&(a==null?void 0:a.map(l=>_.jsx(j0,{color:e,teacher:l},U0())))}),(t==null?void 0:t.length)>i&&_.jsx(UU,{color:e,onClick:o,children:"Load more"})]})]})})}const Wz=({color:e})=>_.jsx(Vz,{color:e}),Hz=A.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 500px;
`,Gz=A.div`
  text-align: center;
`,Kz=A.h1`
  color: #ffffff;
`;A(ba)`
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
`;const qz=()=>_.jsx(Hz,{children:_.jsx(Gz,{children:_.jsx(Kz,{children:"favorites Page"})})}),Yz=A.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 500px;
`,Qz=A.h1`
  color: #ffffff;
`,Xz=()=>_.jsx(Yz,{children:_.jsx(Qz,{children:"404"})}),Jz=A.div`
  width: 100%;
  height: 100vh;
  background-size: 100% 100%;
`;function Zz({component:e,redirectTo:t}){return Tr(Lg)?e:_.jsx(dw,{to:t})}function e5(){const[e,t]=T.useState(null),n=Ks(),r={Blue:"Blue",LightPink:"LightPink",Green:"Green",Orange:"Orange",Pink:"Pink"};return T.useEffect(()=>{n(Kl())},[n]),T.useEffect(()=>{t(Object.keys(r)[Math.floor(Math.random()*Object.keys(r).length)])},[]),_.jsx(Jz,{children:_.jsx(Ib,{children:_.jsxs(Wr,{path:"/",element:_.jsx(TU,{color:e}),children:[_.jsx(Wr,{index:!0,element:_.jsx(dw,{to:"Home"})}),_.jsx(Wr,{path:"/Home",element:_.jsx(jU,{color:e})}),_.jsx(Wr,{path:"/Teachers",element:_.jsx(Wz,{color:e})}),_.jsx(Wr,{path:"/Favorites",element:_.jsx(Zz,{redirectTo:"/",component:_.jsx(qz,{})})}),_.jsx(Wr,{path:"*",element:_.jsx(Xz,{})})]})})})}const t5={name:"",email:"",isAuth:!1,error:null,loading:!1},n5=zE({name:"auth",initialState:t5,extraReducers:e=>{e.addCase(zl.pending,t=>{t.error=null,t.loading=!0}).addCase(zl.fulfilled,(t,{payload:n})=>{const{email:r,userName:i}=n;t.name=i||"",t.email=r,t.error=null,t.loading=!1,t.isAuth=!0}).addCase(zl.rejected,(t,{payload:n})=>{t.error=n,t.loading=!1,t.isAuth=!1}).addCase(Bl.pending,t=>{t.error=null,t.loading=!0}).addCase(Bl.fulfilled,(t,{payload:n})=>{const{email:r,name:i}=n;t.name=i,t.email=r,t.error=null,t.loading=!1,t.isAuth=!0}).addCase(Bl.rejected,(t,{payload:n})=>{t.error=n,t.loading=!1,t.isAuth=!1}).addCase(Vl.pending,t=>{t.error=null,t.loading=!0}).addCase(Vl.fulfilled,t=>{t.name="",t.email="",t.error=null,t.loading=!1,t.isAuth=!1}).addCase(Vl.rejected,(t,{payload:n})=>{t.error=n,t.loading=!1,t.isAuth=!1,t.name="",t.email=""})}}),r5=n5.reducer;var jg="persist:",Ug="persist/FLUSH",pd="persist/REHYDRATE",zg="persist/PAUSE",Bg="persist/PERSIST",Vg="persist/PURGE",Wg="persist/REGISTER",i5=-1;function ql(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ql=function(n){return typeof n}:ql=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ql(e)}function z0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function s5(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?z0(n,!0).forEach(function(r){o5(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z0(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function o5(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a5(e,t,n,r){r.debug;var i=s5({},n);return e&&ql(e)==="object"&&Object.keys(e).forEach(function(s){s!=="_persist"&&t[s]===n[s]&&(i[s]=e[s])}),i}function l5(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,s="".concat(e.keyPrefix!==void 0?e.keyPrefix:jg).concat(e.key),o=e.storage,a;e.serialize===!1?a=function(x){return x}:typeof e.serialize=="function"?a=e.serialize:a=u5;var l=e.writeFailHandler||null,u={},c={},d=[],f=null,m=null,g=function(x){Object.keys(x).forEach(function(C){p(C)&&u[C]!==x[C]&&d.indexOf(C)===-1&&d.push(C)}),Object.keys(u).forEach(function(C){x[C]===void 0&&p(C)&&d.indexOf(C)===-1&&u[C]!==void 0&&d.push(C)}),f===null&&(f=setInterval(v,i)),u=x};function v(){if(d.length===0){f&&clearInterval(f),f=null;return}var S=d.shift(),x=r.reduce(function(C,E){return E.in(C,S,u)},u[S]);if(x!==void 0)try{c[S]=a(x)}catch(C){console.error("redux-persist/createPersistoid: error serializing state",C)}else delete c[S];d.length===0&&w()}function w(){Object.keys(c).forEach(function(S){u[S]===void 0&&delete c[S]}),m=o.setItem(s,a(c)).catch(h)}function p(S){return!(n&&n.indexOf(S)===-1&&S!=="_persist"||t&&t.indexOf(S)!==-1)}function h(S){l&&l(S)}var y=function(){for(;d.length!==0;)v();return m||Promise.resolve()};return{update:g,flush:y}}function u5(e){return JSON.stringify(e)}function c5(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:jg).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(o){return o}:typeof e.deserialize=="function"?i=e.deserialize:i=d5,r.getItem(n).then(function(s){if(s)try{var o={},a=i(s);return Object.keys(a).forEach(function(l){o[l]=t.reduceRight(function(u,c){return c.out(u,l,a)},i(a[l]))}),o}catch(l){throw l}else return})}function d5(e){return JSON.parse(e)}function f5(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:jg).concat(e.key);return t.removeItem(n,h5)}function h5(e){}function B0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function In(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?B0(n,!0).forEach(function(r){p5(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B0(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function p5(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m5(e,t){if(e==null)return{};var n=g5(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function g5(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var y5=5e3;function v5(e,t){var n=e.version!==void 0?e.version:i5;e.debug;var r=e.stateReconciler===void 0?a5:e.stateReconciler,i=e.getStoredState||c5,s=e.timeout!==void 0?e.timeout:y5,o=null,a=!1,l=!0,u=function(d){return d._persist.rehydrated&&o&&!l&&o.update(d),d};return function(c,d){var f=c||{},m=f._persist,g=m5(f,["_persist"]),v=g;if(d.type===Bg){var w=!1,p=function(P,M){w||(d.rehydrate(e.key,P,M),w=!0)};if(s&&setTimeout(function(){!w&&p(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},s),l=!1,o||(o=l5(e)),m)return In({},t(v,d),{_persist:m});if(typeof d.rehydrate!="function"||typeof d.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return d.register(e.key),i(e).then(function(E){var P=e.migrate||function(M,L){return Promise.resolve(M)};P(E,n).then(function(M){p(M)},function(M){p(void 0,M)})},function(E){p(void 0,E)}),In({},t(v,d),{_persist:{version:n,rehydrated:!1}})}else{if(d.type===Vg)return a=!0,d.result(f5(e)),In({},t(v,d),{_persist:m});if(d.type===Ug)return d.result(o&&o.flush()),In({},t(v,d),{_persist:m});if(d.type===zg)l=!0;else if(d.type===pd){if(a)return In({},v,{_persist:In({},m,{rehydrated:!0})});if(d.key===e.key){var h=t(v,d),y=d.payload,S=r!==!1&&y!==void 0?r(y,c,h,e):h,x=In({},S,{_persist:In({},m,{rehydrated:!0})});return u(x)}}}if(!m)return t(c,d);var C=t(v,d);return C===v?c:u(In({},C,{_persist:m}))}}var Hg={},Gg={};Gg.__esModule=!0;Gg.default=S5;function Yl(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Yl=function(n){return typeof n}:Yl=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Yl(e)}function Of(){}var _5={getItem:Of,setItem:Of,removeItem:Of};function w5(e){if((typeof self>"u"?"undefined":Yl(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function S5(e){var t="".concat(e,"Storage");return w5(t)?self[t]:_5}Hg.__esModule=!0;Hg.default=C5;var E5=x5(Gg);function x5(e){return e&&e.__esModule?e:{default:e}}function C5(e){var t=(0,E5.default)(e);return{getItem:function(r){return new Promise(function(i,s){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(s,o){s(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,s){i(t.removeItem(r))})}}}var ZC=void 0,T5=b5(Hg);function b5(e){return e&&e.__esModule?e:{default:e}}var k5=(0,T5.default)("local");ZC=k5;function V0(e){return O5(e)||P5(e)||I5()}function I5(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function P5(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function O5(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function W0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function gp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?W0(n,!0).forEach(function(r){R5(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W0(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function R5(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var eT={registry:[],bootstrapped:!1},N5=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:eT,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Wg:return gp({},t,{registry:[].concat(V0(t.registry),[n.key])});case pd:var r=t.registry.indexOf(n.key),i=V0(t.registry);return i.splice(r,1),gp({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function A5(e,t,n){var r=n||!1,i=Hm(N5,eT,t&&t.enhancer?t.enhancer:void 0),s=function(u){i.dispatch({type:Wg,key:u})},o=function(u,c,d){var f={type:pd,payload:c,err:d,key:u};e.dispatch(f),i.dispatch(f),r&&a.getState().bootstrapped&&(r(),r=!1)},a=gp({},i,{purge:function(){var u=[];return e.dispatch({type:Vg,result:function(d){u.push(d)}}),Promise.all(u)},flush:function(){var u=[];return e.dispatch({type:Ug,result:function(d){u.push(d)}}),Promise.all(u)},pause:function(){e.dispatch({type:zg})},persist:function(){e.dispatch({type:Bg,register:s,rehydrate:o})}});return t&&t.manualPersist||a.persist(),a}const D5=kE({teachers:Oz,Auth:r5}),L5={key:"teachers",storage:ZC,whitelist:["teachersFavorites","Auth"]},M5=v5(L5,D5),tT=bL({reducer:M5,middleware:e=>e({serializableCheck:{ignoredActions:[Ug,pd,zg,Bg,Vg,Wg]}})}),F5=A5(tT);function Ql(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ql=function(n){return typeof n}:Ql=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ql(e)}function $5(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function H0(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j5(e,t,n){return t&&H0(e.prototype,t),n&&H0(e,n),e}function U5(e,t){return t&&(Ql(t)==="object"||typeof t=="function")?t:Xl(e)}function yp(e){return yp=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},yp(e)}function Xl(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z5(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&vp(e,t)}function vp(e,t){return vp=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},vp(e,t)}function Jl(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var nT=function(e){z5(t,e);function t(){var n,r;$5(this,t);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=U5(this,(n=yp(t)).call.apply(n,[this].concat(s))),Jl(Xl(r),"state",{bootstrapped:!1}),Jl(Xl(r),"_unsubscribe",void 0),Jl(Xl(r),"handlePersistorState",function(){var a=r.props.persistor,l=a.getState(),u=l.bootstrapped;u&&(r.props.onBeforeLift?Promise.resolve(r.props.onBeforeLift()).finally(function(){return r.setState({bootstrapped:!0})}):r.setState({bootstrapped:!0}),r._unsubscribe&&r._unsubscribe())}),r}return j5(t,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),t}(T.PureComponent);Jl(nT,"defaultProps",{children:null,loading:null});Df.createRoot(document.getElementById("root")).render(_.jsx(st.StrictMode,{children:_.jsx(Db,{basename:"/Learn-Lingo/",children:_.jsx(p6,{store:tT,children:_.jsx(nT,{persistor:F5,children:_.jsx(e5,{})})})})}))});export default B5();
