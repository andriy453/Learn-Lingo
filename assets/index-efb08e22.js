var bT=Object.defineProperty;var kT=(e,t,n)=>t in e?bT(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var IT=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Id=(e,t,n)=>(kT(e,typeof t!="symbol"?t+"":t,n),n);var gU=IT((bt,kt)=>{function PT(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Rp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var iw={exports:{}},mc={},sw={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ka=Symbol.for("react.element"),OT=Symbol.for("react.portal"),RT=Symbol.for("react.fragment"),NT=Symbol.for("react.strict_mode"),AT=Symbol.for("react.profiler"),DT=Symbol.for("react.provider"),LT=Symbol.for("react.context"),FT=Symbol.for("react.forward_ref"),$T=Symbol.for("react.suspense"),MT=Symbol.for("react.memo"),jT=Symbol.for("react.lazy"),oy=Symbol.iterator;function zT(e){return e===null||typeof e!="object"?null:(e=oy&&e[oy]||e["@@iterator"],typeof e=="function"?e:null)}var ow={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},aw=Object.assign,lw={};function $s(e,t,n){this.props=e,this.context=t,this.refs=lw,this.updater=n||ow}$s.prototype.isReactComponent={};$s.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};$s.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function uw(){}uw.prototype=$s.prototype;function Np(e,t,n){this.props=e,this.context=t,this.refs=lw,this.updater=n||ow}var Ap=Np.prototype=new uw;Ap.constructor=Np;aw(Ap,$s.prototype);Ap.isPureReactComponent=!0;var ay=Array.isArray,cw=Object.prototype.hasOwnProperty,Dp={current:null},dw={key:!0,ref:!0,__self:!0,__source:!0};function fw(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)cw.call(t,r)&&!dw.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ka,type:e,key:s,ref:o,props:i,_owner:Dp.current}}function UT(e,t){return{$$typeof:ka,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Lp(e){return typeof e=="object"&&e!==null&&e.$$typeof===ka}function BT(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ly=/\/+/g;function Pd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?BT(""+e.key):t.toString(36)}function bl(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ka:case OT:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Pd(o,0):r,ay(i)?(n="",e!=null&&(n=e.replace(ly,"$&/")+"/"),bl(i,t,n,"",function(u){return u})):i!=null&&(Lp(i)&&(i=UT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ly,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",ay(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+Pd(s,a);o+=bl(s,t,n,l,i)}else if(l=zT(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+Pd(s,a++),o+=bl(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Qa(e,t,n){if(e==null)return e;var r=[],i=0;return bl(e,r,"","",function(s){return t.call(n,s,i++)}),r}function VT(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ct={current:null},kl={transition:null},WT={ReactCurrentDispatcher:ct,ReactCurrentBatchConfig:kl,ReactCurrentOwner:Dp};K.Children={map:Qa,forEach:function(e,t,n){Qa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Qa(e,function(){t++}),t},toArray:function(e){return Qa(e,function(t){return t})||[]},only:function(e){if(!Lp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};K.Component=$s;K.Fragment=RT;K.Profiler=AT;K.PureComponent=Np;K.StrictMode=NT;K.Suspense=$T;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=WT;K.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=aw({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Dp.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)cw.call(t,l)&&!dw.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ka,type:e.type,key:i,ref:s,props:r,_owner:o}};K.createContext=function(e){return e={$$typeof:LT,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:DT,_context:e},e.Consumer=e};K.createElement=fw;K.createFactory=function(e){var t=fw.bind(null,e);return t.type=e,t};K.createRef=function(){return{current:null}};K.forwardRef=function(e){return{$$typeof:FT,render:e}};K.isValidElement=Lp;K.lazy=function(e){return{$$typeof:jT,_payload:{_status:-1,_result:e},_init:VT}};K.memo=function(e,t){return{$$typeof:MT,type:e,compare:t===void 0?null:t}};K.startTransition=function(e){var t=kl.transition;kl.transition={};try{e()}finally{kl.transition=t}};K.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};K.useCallback=function(e,t){return ct.current.useCallback(e,t)};K.useContext=function(e){return ct.current.useContext(e)};K.useDebugValue=function(){};K.useDeferredValue=function(e){return ct.current.useDeferredValue(e)};K.useEffect=function(e,t){return ct.current.useEffect(e,t)};K.useId=function(){return ct.current.useId()};K.useImperativeHandle=function(e,t,n){return ct.current.useImperativeHandle(e,t,n)};K.useInsertionEffect=function(e,t){return ct.current.useInsertionEffect(e,t)};K.useLayoutEffect=function(e,t){return ct.current.useLayoutEffect(e,t)};K.useMemo=function(e,t){return ct.current.useMemo(e,t)};K.useReducer=function(e,t,n){return ct.current.useReducer(e,t,n)};K.useRef=function(e){return ct.current.useRef(e)};K.useState=function(e){return ct.current.useState(e)};K.useSyncExternalStore=function(e,t,n){return ct.current.useSyncExternalStore(e,t,n)};K.useTransition=function(){return ct.current.useTransition()};K.version="18.2.0";sw.exports=K;var T=sw.exports;const at=Rp(T),jo=PT({__proto__:null,default:at},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HT=T,GT=Symbol.for("react.element"),KT=Symbol.for("react.fragment"),YT=Object.prototype.hasOwnProperty,qT=HT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,QT={key:!0,ref:!0,__self:!0,__source:!0};function hw(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)YT.call(t,r)&&!QT.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:GT,type:e,key:s,ref:o,props:i,_owner:qT.current}}mc.Fragment=KT;mc.jsx=hw;mc.jsxs=hw;iw.exports=mc;var m=iw.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zo(){return zo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zo.apply(this,arguments)}var lr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(lr||(lr={}));const uy="popstate";function XT(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return Uf("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ru(i)}return ZT(t,n,null,e)}function Te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Fp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function JT(){return Math.random().toString(36).substr(2,8)}function cy(e,t){return{usr:e.state,key:e.key,idx:t}}function Uf(e,t,n,r){return n===void 0&&(n=null),zo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ms(t):t,{state:n,key:t&&t.key||r||JT()})}function ru(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ms(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ZT(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=lr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(zo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=lr.Pop;let w=c(),p=w==null?null:w-u;u=w,l&&l({action:a,location:_.location,delta:p})}function f(w,p){a=lr.Push;let h=Uf(_.location,w,p);n&&n(h,w),u=c()+1;let v=cy(h,u),x=_.createHref(h);try{o.pushState(v,"",x)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(x)}s&&l&&l({action:a,location:_.location,delta:1})}function g(w,p){a=lr.Replace;let h=Uf(_.location,w,p);n&&n(h,w),u=c();let v=cy(h,u),x=_.createHref(h);o.replaceState(v,"",x),s&&l&&l({action:a,location:_.location,delta:0})}function y(w){let p=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof w=="string"?w:ru(w);return Te(p,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,p)}let _={get action(){return a},get location(){return e(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(uy,d),l=w,()=>{i.removeEventListener(uy,d),l=null}},createHref(w){return t(i,w)},createURL:y,encodeLocation(w){let p=y(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:g,go(w){return o.go(w)}};return _}var dy;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(dy||(dy={}));function eb(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Ms(t):t,i=$p(r.pathname||"/",n);if(i==null)return null;let s=pw(e);tb(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=cb(s[a],hb(i));return o}function pw(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Te(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=dr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Te(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),pw(s.children,t,c,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:lb(u,s.index),routesMeta:c})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of mw(s.path))i(s,o,l)}),t}function mw(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=mw(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function tb(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ub(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const nb=/^:\w+$/,rb=3,ib=2,sb=1,ob=10,ab=-2,fy=e=>e==="*";function lb(e,t){let n=e.split("/"),r=n.length;return n.some(fy)&&(r+=ab),t&&(r+=ib),n.filter(i=>!fy(i)).reduce((i,s)=>i+(nb.test(s)?rb:s===""?sb:ob),r)}function ub(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function cb(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=db({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:dr([i,c.pathname]),pathnameBase:yb(dr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=dr([i,c.pathnameBase]))}return s}function db(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=fb(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=pb(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:e}}function fb(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Fp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function hb(e){try{return decodeURI(e)}catch(t){return Fp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function pb(e,t){try{return decodeURIComponent(e)}catch(n){return Fp(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function $p(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function mb(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ms(e):e;return{pathname:n?n.startsWith("/")?n:gb(n,t):t,search:vb(r),hash:_b(i)}}function gb(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Od(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Mp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function jp(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ms(e):(i=zo({},e),Te(!i.pathname||!i.pathname.includes("?"),Od("?","pathname","search",i)),Te(!i.pathname||!i.pathname.includes("#"),Od("#","pathname","hash",i)),Te(!i.search||!i.search.includes("#"),Od("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=t.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?t[d]:"/"}let l=mb(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const dr=e=>e.join("/").replace(/\/\/+/g,"/"),yb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),vb=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,_b=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function wb(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const gw=["post","put","patch","delete"];new Set(gw);const xb=["get",...gw];new Set(xb);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function iu(){return iu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},iu.apply(this,arguments)}const zp=T.createContext(null),Sb=T.createContext(null),js=T.createContext(null),gc=T.createContext(null),Kn=T.createContext({outlet:null,matches:[],isDataRoute:!1}),yw=T.createContext(null);function Eb(e,t){let{relative:n}=t===void 0?{}:t;zs()||Te(!1);let{basename:r,navigator:i}=T.useContext(js),{hash:s,pathname:o,search:a}=ww(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:dr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function zs(){return T.useContext(gc)!=null}function Ia(){return zs()||Te(!1),T.useContext(gc).location}function vw(e){T.useContext(js).static||T.useLayoutEffect(e)}function _w(){let{isDataRoute:e}=T.useContext(Kn);return e?Mb():Cb()}function Cb(){zs()||Te(!1);let e=T.useContext(zp),{basename:t,navigator:n}=T.useContext(js),{matches:r}=T.useContext(Kn),{pathname:i}=Ia(),s=JSON.stringify(Mp(r).map(l=>l.pathnameBase)),o=T.useRef(!1);return vw(()=>{o.current=!0}),T.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=jp(l,JSON.parse(s),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:dr([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,s,i,e])}const Tb=T.createContext(null);function bb(e){let t=T.useContext(Kn).outlet;return t&&T.createElement(Tb.Provider,{value:e},t)}function ww(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=T.useContext(Kn),{pathname:i}=Ia(),s=JSON.stringify(Mp(r).map(o=>o.pathnameBase));return T.useMemo(()=>jp(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function kb(e,t){return Ib(e,t)}function Ib(e,t,n){zs()||Te(!1);let{navigator:r}=T.useContext(js),{matches:i}=T.useContext(Kn),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Ia(),u;if(t){var c;let _=typeof t=="string"?Ms(t):t;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||Te(!1),u=_}else u=l;let d=u.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",g=eb(e,{pathname:f}),y=Ab(g&&g.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:dr([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:dr([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return t&&y?T.createElement(gc.Provider,{value:{location:iu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:lr.Pop}},y):y}function Pb(){let e=$b(),t=wb(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:i},n):null,s)}const Ob=T.createElement(Pb,null);class Rb extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?T.createElement(Kn.Provider,{value:this.props.routeContext},T.createElement(yw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Nb(e){let{routeContext:t,match:n,children:r}=e,i=T.useContext(zp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(Kn.Provider,{value:t},r)}function Ab(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let s=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Te(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||Ob);let f=t.concat(s.slice(0,u+1)),g=()=>{let y;return c?y=d:l.route.Component?y=T.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,T.createElement(Nb,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?T.createElement(Rb,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:g(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):g()},null)}var xw=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(xw||{}),su=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(su||{});function Db(e){let t=T.useContext(zp);return t||Te(!1),t}function Lb(e){let t=T.useContext(Sb);return t||Te(!1),t}function Fb(e){let t=T.useContext(Kn);return t||Te(!1),t}function Sw(e){let t=Fb(),n=t.matches[t.matches.length-1];return n.route.id||Te(!1),n.route.id}function $b(){var e;let t=T.useContext(yw),n=Lb(su.UseRouteError),r=Sw(su.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Mb(){let{router:e}=Db(xw.UseNavigateStable),t=Sw(su.UseNavigateStable),n=T.useRef(!1);return vw(()=>{n.current=!0}),T.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,iu({fromRouteId:t},s)))},[e,t])}function Ew(e){let{to:t,replace:n,state:r,relative:i}=e;zs()||Te(!1);let{matches:s}=T.useContext(Kn),{pathname:o}=Ia(),a=_w(),l=jp(t,Mp(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return T.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function jb(e){return bb(e.context)}function Hr(e){Te(!1)}function zb(e){let{basename:t="/",children:n=null,location:r,navigationType:i=lr.Pop,navigator:s,static:o=!1}=e;zs()&&Te(!1);let a=t.replace(/^\/*/,"/"),l=T.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Ms(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:g="default"}=r,y=T.useMemo(()=>{let _=$p(u,a);return _==null?null:{location:{pathname:_,search:c,hash:d,state:f,key:g},navigationType:i}},[a,u,c,d,f,g,i]);return y==null?null:T.createElement(js.Provider,{value:l},T.createElement(gc.Provider,{children:n,value:y}))}function Ub(e){let{children:t,location:n}=e;return kb(Bf(t),n)}new Promise(()=>{});function Bf(e,t){t===void 0&&(t=[]);let n=[];return T.Children.forEach(e,(r,i)=>{if(!T.isValidElement(r))return;let s=[...t,i];if(r.type===T.Fragment){n.push.apply(n,Bf(r.props.children,s));return}r.type!==Hr&&Te(!1),!r.props.index||!r.props.children||Te(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Bf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vf(){return Vf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vf.apply(this,arguments)}function Bb(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Vb(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Wb(e,t){return e.button===0&&(!t||t==="_self")&&!Vb(e)}const Hb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Gb="startTransition",hy=jo[Gb];function Kb(e){let{basename:t,children:n,future:r,window:i}=e,s=T.useRef();s.current==null&&(s.current=XT({window:i,v5Compat:!0}));let o=s.current,[a,l]=T.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=T.useCallback(d=>{u&&hy?hy(()=>l(d)):l(d)},[l,u]);return T.useLayoutEffect(()=>o.listen(c),[o,c]),T.createElement(zb,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o})}const Yb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pa=T.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=t,d=Bb(t,Hb),{basename:f}=T.useContext(js),g,y=!1;if(typeof u=="string"&&qb.test(u)&&(g=u,Yb))try{let h=new URL(window.location.href),v=u.startsWith("//")?new URL(h.protocol+u):new URL(u),x=$p(v.pathname,f);v.origin===h.origin&&x!=null?u=x+v.search+v.hash:y=!0}catch{}let _=Eb(u,{relative:i}),w=Qb(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function p(h){r&&r(h),h.defaultPrevented||w(h)}return T.createElement("a",Vf({},d,{href:g||_,onClick:y||s?r:p,ref:n,target:l}))});var py;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(py||(py={}));var my;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(my||(my={}));function Qb(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=t===void 0?{}:t,a=_w(),l=Ia(),u=ww(e,{relative:o});return T.useCallback(c=>{if(Wb(c,n)){c.preventDefault();let d=r!==void 0?r:ru(l)===ru(u);a(e,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,e,s,o])}var Wf={},Cw={exports:{}},Dt={},Tw={exports:{}},bw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,j){var z=R.length;R.push(j);e:for(;0<z;){var ne=z-1>>>1,re=R[ne];if(0<i(re,j))R[ne]=j,R[z]=re,z=ne;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var j=R[0],z=R.pop();if(z!==j){R[0]=z;e:for(var ne=0,re=R.length,$t=re>>>1;ne<$t;){var Ue=2*(ne+1)-1,it=R[Ue],qe=Ue+1,Qe=R[qe];if(0>i(it,z))qe<re&&0>i(Qe,it)?(R[ne]=Qe,R[qe]=z,ne=qe):(R[ne]=it,R[Ue]=z,ne=Ue);else if(qe<re&&0>i(Qe,z))R[ne]=Qe,R[qe]=z,ne=qe;else break e}}return j}function i(R,j){var z=R.sortIndex-j.sortIndex;return z!==0?z:R.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,g=!1,y=!1,_=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(R){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=R)r(u),j.sortIndex=j.expirationTime,t(l,j);else break;j=n(u)}}function x(R){if(_=!1,v(R),!y)if(n(l)!==null)y=!0,Yt(E);else{var j=n(u);j!==null&&ve(x,j.startTime-R)}}function E(R,j){y=!1,_&&(_=!1,p(O),O=-1),g=!0;var z=f;try{for(v(j),d=n(l);d!==null&&(!(d.expirationTime>j)||R&&!B());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,f=d.priorityLevel;var re=ne(d.expirationTime<=j);j=e.unstable_now(),typeof re=="function"?d.callback=re:d===n(l)&&r(l),v(j)}else r(l);d=n(l)}if(d!==null)var $t=!0;else{var Ue=n(u);Ue!==null&&ve(x,Ue.startTime-j),$t=!1}return $t}finally{d=null,f=z,g=!1}}var C=!1,S=null,O=-1,$=5,F=-1;function B(){return!(e.unstable_now()-F<$)}function Ye(){if(S!==null){var R=e.unstable_now();F=R;var j=!0;try{j=S(!0,R)}finally{j?te():(C=!1,S=null)}}else C=!1}var te;if(typeof h=="function")te=function(){h(Ye)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,Kt=rt.port2;rt.port1.onmessage=Ye,te=function(){Kt.postMessage(null)}}else te=function(){w(Ye,0)};function Yt(R){S=R,C||(C=!0,te())}function ve(R,j){O=w(function(){R(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,Yt(E))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(R){switch(f){case 1:case 2:case 3:var j=3;break;default:j=f}var z=f;f=j;try{return R()}finally{f=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,j){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var z=f;f=R;try{return j()}finally{f=z}},e.unstable_scheduleCallback=function(R,j,z){var ne=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?ne+z:ne):z=ne,R){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=z+re,R={id:c++,callback:j,priorityLevel:R,startTime:z,expirationTime:re,sortIndex:-1},z>ne?(R.sortIndex=z,t(u,R),n(l)===null&&R===n(u)&&(_?(p(O),O=-1):_=!0,ve(x,z-ne))):(R.sortIndex=re,t(l,R),y||g||(y=!0,Yt(E))),R},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(R){var j=f;return function(){var z=f;f=j;try{return R.apply(this,arguments)}finally{f=z}}}})(bw);Tw.exports=bw;var Xb=Tw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kw=T,Rt=Xb;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Iw=new Set,Uo={};function Ii(e,t){ys(e,t),ys(e+"Capture",t)}function ys(e,t){for(Uo[e]=t,e=0;e<t.length;e++)Iw.add(t[e])}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hf=Object.prototype.hasOwnProperty,Jb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gy={},yy={};function Zb(e){return Hf.call(yy,e)?!0:Hf.call(gy,e)?!1:Jb.test(e)?yy[e]=!0:(gy[e]=!0,!1)}function ek(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function tk(e,t,n,r){if(t===null||typeof t>"u"||ek(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function dt(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ke[e]=new dt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ke[t]=new dt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ke[e]=new dt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ke[e]=new dt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ke[e]=new dt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ke[e]=new dt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ke[e]=new dt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ke[e]=new dt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ke[e]=new dt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Up=/[\-:]([a-z])/g;function Bp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Up,Bp);Ke[t]=new dt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Up,Bp);Ke[t]=new dt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Up,Bp);Ke[t]=new dt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ke[e]=new dt(e,1,!1,e.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ke[e]=new dt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vp(e,t,n,r){var i=Ke.hasOwnProperty(t)?Ke[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(tk(t,n,i,r)&&(n=null),r||i===null?Zb(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Yn=kw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xa=Symbol.for("react.element"),Vi=Symbol.for("react.portal"),Wi=Symbol.for("react.fragment"),Wp=Symbol.for("react.strict_mode"),Gf=Symbol.for("react.profiler"),Pw=Symbol.for("react.provider"),Ow=Symbol.for("react.context"),Hp=Symbol.for("react.forward_ref"),Kf=Symbol.for("react.suspense"),Yf=Symbol.for("react.suspense_list"),Gp=Symbol.for("react.memo"),tr=Symbol.for("react.lazy"),Rw=Symbol.for("react.offscreen"),vy=Symbol.iterator;function Xs(e){return e===null||typeof e!="object"?null:(e=vy&&e[vy]||e["@@iterator"],typeof e=="function"?e:null)}var xe=Object.assign,Rd;function po(e){if(Rd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Rd=t&&t[1]||""}return`
`+Rd+e}var Nd=!1;function Ad(e,t){if(!e||Nd)return"";Nd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{Nd=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?po(e):""}function nk(e){switch(e.tag){case 5:return po(e.type);case 16:return po("Lazy");case 13:return po("Suspense");case 19:return po("SuspenseList");case 0:case 2:case 15:return e=Ad(e.type,!1),e;case 11:return e=Ad(e.type.render,!1),e;case 1:return e=Ad(e.type,!0),e;default:return""}}function qf(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wi:return"Fragment";case Vi:return"Portal";case Gf:return"Profiler";case Wp:return"StrictMode";case Kf:return"Suspense";case Yf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ow:return(e.displayName||"Context")+".Consumer";case Pw:return(e._context.displayName||"Context")+".Provider";case Hp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Gp:return t=e.displayName||null,t!==null?t:qf(e.type)||"Memo";case tr:t=e._payload,e=e._init;try{return qf(e(t))}catch{}}return null}function rk(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qf(t);case 8:return t===Wp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function kr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Nw(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ik(e){var t=Nw(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ja(e){e._valueTracker||(e._valueTracker=ik(e))}function Aw(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Nw(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ou(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Qf(e,t){var n=t.checked;return xe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _y(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=kr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Dw(e,t){t=t.checked,t!=null&&Vp(e,"checked",t,!1)}function Xf(e,t){Dw(e,t);var n=kr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Jf(e,t.type,n):t.hasOwnProperty("defaultValue")&&Jf(e,t.type,kr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wy(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Jf(e,t,n){(t!=="number"||ou(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var mo=Array.isArray;function os(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+kr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Zf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return xe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xy(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(mo(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:kr(n)}}function Lw(e,t){var n=kr(t.value),r=kr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Sy(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Fw(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function eh(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Fw(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Za,$w=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Za=Za||document.createElement("div"),Za.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Za.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Bo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var So={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sk=["Webkit","ms","Moz","O"];Object.keys(So).forEach(function(e){sk.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),So[t]=So[e]})});function Mw(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||So.hasOwnProperty(e)&&So[e]?(""+t).trim():t+"px"}function jw(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Mw(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var ok=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function th(e,t){if(t){if(ok[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function nh(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rh=null;function Kp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ih=null,as=null,ls=null;function Ey(e){if(e=Na(e)){if(typeof ih!="function")throw Error(k(280));var t=e.stateNode;t&&(t=xc(t),ih(e.stateNode,e.type,t))}}function zw(e){as?ls?ls.push(e):ls=[e]:as=e}function Uw(){if(as){var e=as,t=ls;if(ls=as=null,Ey(e),t)for(e=0;e<t.length;e++)Ey(t[e])}}function Bw(e,t){return e(t)}function Vw(){}var Dd=!1;function Ww(e,t,n){if(Dd)return e(t,n);Dd=!0;try{return Bw(e,t,n)}finally{Dd=!1,(as!==null||ls!==null)&&(Vw(),Uw())}}function Vo(e,t){var n=e.stateNode;if(n===null)return null;var r=xc(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var sh=!1;if(Un)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){sh=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{sh=!1}function ak(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Eo=!1,au=null,lu=!1,oh=null,lk={onError:function(e){Eo=!0,au=e}};function uk(e,t,n,r,i,s,o,a,l){Eo=!1,au=null,ak.apply(lk,arguments)}function ck(e,t,n,r,i,s,o,a,l){if(uk.apply(this,arguments),Eo){if(Eo){var u=au;Eo=!1,au=null}else throw Error(k(198));lu||(lu=!0,oh=u)}}function Pi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Hw(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Cy(e){if(Pi(e)!==e)throw Error(k(188))}function dk(e){var t=e.alternate;if(!t){if(t=Pi(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Cy(i),e;if(s===r)return Cy(i),t;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Gw(e){return e=dk(e),e!==null?Kw(e):null}function Kw(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Kw(e);if(t!==null)return t;e=e.sibling}return null}var Yw=Rt.unstable_scheduleCallback,Ty=Rt.unstable_cancelCallback,fk=Rt.unstable_shouldYield,hk=Rt.unstable_requestPaint,Ce=Rt.unstable_now,pk=Rt.unstable_getCurrentPriorityLevel,Yp=Rt.unstable_ImmediatePriority,qw=Rt.unstable_UserBlockingPriority,uu=Rt.unstable_NormalPriority,mk=Rt.unstable_LowPriority,Qw=Rt.unstable_IdlePriority,yc=null,xn=null;function gk(e){if(xn&&typeof xn.onCommitFiberRoot=="function")try{xn.onCommitFiberRoot(yc,e,void 0,(e.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:_k,yk=Math.log,vk=Math.LN2;function _k(e){return e>>>=0,e===0?32:31-(yk(e)/vk|0)|0}var el=64,tl=4194304;function go(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function cu(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=go(a):(s&=o,s!==0&&(r=go(s)))}else o=n&~i,o!==0?r=go(o):s!==0&&(r=go(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-an(t),i=1<<n,r|=e[n],t&=~i;return r}function wk(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xk(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-an(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=wk(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function ah(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Xw(){var e=el;return el<<=1,!(el&4194240)&&(el=64),e}function Ld(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Oa(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-an(t),e[t]=n}function Sk(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-an(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function qp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-an(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var se=0;function Jw(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Zw,Qp,e1,t1,n1,lh=!1,nl=[],fr=null,hr=null,pr=null,Wo=new Map,Ho=new Map,rr=[],Ek="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function by(e,t){switch(e){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":Wo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(t.pointerId)}}function Zs(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Na(t),t!==null&&Qp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ck(e,t,n,r,i){switch(t){case"focusin":return fr=Zs(fr,e,t,n,r,i),!0;case"dragenter":return hr=Zs(hr,e,t,n,r,i),!0;case"mouseover":return pr=Zs(pr,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Wo.set(s,Zs(Wo.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ho.set(s,Zs(Ho.get(s)||null,e,t,n,r,i)),!0}return!1}function r1(e){var t=Zr(e.target);if(t!==null){var n=Pi(t);if(n!==null){if(t=n.tag,t===13){if(t=Hw(n),t!==null){e.blockedOn=t,n1(e.priority,function(){e1(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Il(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=uh(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);rh=r,n.target.dispatchEvent(r),rh=null}else return t=Na(n),t!==null&&Qp(t),e.blockedOn=n,!1;t.shift()}return!0}function ky(e,t,n){Il(e)&&n.delete(t)}function Tk(){lh=!1,fr!==null&&Il(fr)&&(fr=null),hr!==null&&Il(hr)&&(hr=null),pr!==null&&Il(pr)&&(pr=null),Wo.forEach(ky),Ho.forEach(ky)}function eo(e,t){e.blockedOn===t&&(e.blockedOn=null,lh||(lh=!0,Rt.unstable_scheduleCallback(Rt.unstable_NormalPriority,Tk)))}function Go(e){function t(i){return eo(i,e)}if(0<nl.length){eo(nl[0],e);for(var n=1;n<nl.length;n++){var r=nl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(fr!==null&&eo(fr,e),hr!==null&&eo(hr,e),pr!==null&&eo(pr,e),Wo.forEach(t),Ho.forEach(t),n=0;n<rr.length;n++)r=rr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rr.length&&(n=rr[0],n.blockedOn===null);)r1(n),n.blockedOn===null&&rr.shift()}var us=Yn.ReactCurrentBatchConfig,du=!0;function bk(e,t,n,r){var i=se,s=us.transition;us.transition=null;try{se=1,Xp(e,t,n,r)}finally{se=i,us.transition=s}}function kk(e,t,n,r){var i=se,s=us.transition;us.transition=null;try{se=4,Xp(e,t,n,r)}finally{se=i,us.transition=s}}function Xp(e,t,n,r){if(du){var i=uh(e,t,n,r);if(i===null)Hd(e,t,r,fu,n),by(e,r);else if(Ck(i,e,t,n,r))r.stopPropagation();else if(by(e,r),t&4&&-1<Ek.indexOf(e)){for(;i!==null;){var s=Na(i);if(s!==null&&Zw(s),s=uh(e,t,n,r),s===null&&Hd(e,t,r,fu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Hd(e,t,r,null,n)}}var fu=null;function uh(e,t,n,r){if(fu=null,e=Kp(r),e=Zr(e),e!==null)if(t=Pi(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Hw(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return fu=e,null}function i1(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pk()){case Yp:return 1;case qw:return 4;case uu:case mk:return 16;case Qw:return 536870912;default:return 16}default:return 16}}var ur=null,Jp=null,Pl=null;function s1(){if(Pl)return Pl;var e,t=Jp,n=t.length,r,i="value"in ur?ur.value:ur.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Pl=i.slice(e,1<r?1-r:void 0)}function Ol(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function rl(){return!0}function Iy(){return!1}function Lt(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?rl:Iy,this.isPropagationStopped=Iy,this}return xe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),t}var Us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zp=Lt(Us),Ra=xe({},Us,{view:0,detail:0}),Ik=Lt(Ra),Fd,$d,to,vc=xe({},Ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:em,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==to&&(to&&e.type==="mousemove"?(Fd=e.screenX-to.screenX,$d=e.screenY-to.screenY):$d=Fd=0,to=e),Fd)},movementY:function(e){return"movementY"in e?e.movementY:$d}}),Py=Lt(vc),Pk=xe({},vc,{dataTransfer:0}),Ok=Lt(Pk),Rk=xe({},Ra,{relatedTarget:0}),Md=Lt(Rk),Nk=xe({},Us,{animationName:0,elapsedTime:0,pseudoElement:0}),Ak=Lt(Nk),Dk=xe({},Us,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lk=Lt(Dk),Fk=xe({},Us,{data:0}),Oy=Lt(Fk),$k={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zk(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jk[e])?!!t[e]:!1}function em(){return zk}var Uk=xe({},Ra,{key:function(e){if(e.key){var t=$k[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ol(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mk[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:em,charCode:function(e){return e.type==="keypress"?Ol(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ol(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bk=Lt(Uk),Vk=xe({},vc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ry=Lt(Vk),Wk=xe({},Ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:em}),Hk=Lt(Wk),Gk=xe({},Us,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kk=Lt(Gk),Yk=xe({},vc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qk=Lt(Yk),Qk=[9,13,27,32],tm=Un&&"CompositionEvent"in window,Co=null;Un&&"documentMode"in document&&(Co=document.documentMode);var Xk=Un&&"TextEvent"in window&&!Co,o1=Un&&(!tm||Co&&8<Co&&11>=Co),Ny=String.fromCharCode(32),Ay=!1;function a1(e,t){switch(e){case"keyup":return Qk.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function l1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hi=!1;function Jk(e,t){switch(e){case"compositionend":return l1(t);case"keypress":return t.which!==32?null:(Ay=!0,Ny);case"textInput":return e=t.data,e===Ny&&Ay?null:e;default:return null}}function Zk(e,t){if(Hi)return e==="compositionend"||!tm&&a1(e,t)?(e=s1(),Pl=Jp=ur=null,Hi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return o1&&t.locale!=="ko"?null:t.data;default:return null}}var eI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dy(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!eI[e.type]:t==="textarea"}function u1(e,t,n,r){zw(r),t=hu(t,"onChange"),0<t.length&&(n=new Zp("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var To=null,Ko=null;function tI(e){w1(e,0)}function _c(e){var t=Yi(e);if(Aw(t))return e}function nI(e,t){if(e==="change")return t}var c1=!1;if(Un){var jd;if(Un){var zd="oninput"in document;if(!zd){var Ly=document.createElement("div");Ly.setAttribute("oninput","return;"),zd=typeof Ly.oninput=="function"}jd=zd}else jd=!1;c1=jd&&(!document.documentMode||9<document.documentMode)}function Fy(){To&&(To.detachEvent("onpropertychange",d1),Ko=To=null)}function d1(e){if(e.propertyName==="value"&&_c(Ko)){var t=[];u1(t,Ko,e,Kp(e)),Ww(tI,t)}}function rI(e,t,n){e==="focusin"?(Fy(),To=t,Ko=n,To.attachEvent("onpropertychange",d1)):e==="focusout"&&Fy()}function iI(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _c(Ko)}function sI(e,t){if(e==="click")return _c(t)}function oI(e,t){if(e==="input"||e==="change")return _c(t)}function aI(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var hn=typeof Object.is=="function"?Object.is:aI;function Yo(e,t){if(hn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Hf.call(t,i)||!hn(e[i],t[i]))return!1}return!0}function $y(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function My(e,t){var n=$y(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$y(n)}}function f1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?f1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function h1(){for(var e=window,t=ou();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ou(e.document)}return t}function nm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function lI(e){var t=h1(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&f1(n.ownerDocument.documentElement,n)){if(r!==null&&nm(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=My(n,s);var o=My(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var uI=Un&&"documentMode"in document&&11>=document.documentMode,Gi=null,ch=null,bo=null,dh=!1;function jy(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dh||Gi==null||Gi!==ou(r)||(r=Gi,"selectionStart"in r&&nm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bo&&Yo(bo,r)||(bo=r,r=hu(ch,"onSelect"),0<r.length&&(t=new Zp("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Gi)))}function il(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ki={animationend:il("Animation","AnimationEnd"),animationiteration:il("Animation","AnimationIteration"),animationstart:il("Animation","AnimationStart"),transitionend:il("Transition","TransitionEnd")},Ud={},p1={};Un&&(p1=document.createElement("div").style,"AnimationEvent"in window||(delete Ki.animationend.animation,delete Ki.animationiteration.animation,delete Ki.animationstart.animation),"TransitionEvent"in window||delete Ki.transitionend.transition);function wc(e){if(Ud[e])return Ud[e];if(!Ki[e])return e;var t=Ki[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in p1)return Ud[e]=t[n];return e}var m1=wc("animationend"),g1=wc("animationiteration"),y1=wc("animationstart"),v1=wc("transitionend"),_1=new Map,zy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(e,t){_1.set(e,t),Ii(t,[e])}for(var Bd=0;Bd<zy.length;Bd++){var Vd=zy[Bd],cI=Vd.toLowerCase(),dI=Vd[0].toUpperCase()+Vd.slice(1);Lr(cI,"on"+dI)}Lr(m1,"onAnimationEnd");Lr(g1,"onAnimationIteration");Lr(y1,"onAnimationStart");Lr("dblclick","onDoubleClick");Lr("focusin","onFocus");Lr("focusout","onBlur");Lr(v1,"onTransitionEnd");ys("onMouseEnter",["mouseout","mouseover"]);ys("onMouseLeave",["mouseout","mouseover"]);ys("onPointerEnter",["pointerout","pointerover"]);ys("onPointerLeave",["pointerout","pointerover"]);Ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ii("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fI=new Set("cancel close invalid load scroll toggle".split(" ").concat(yo));function Uy(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ck(r,t,void 0,e),e.currentTarget=null}function w1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Uy(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Uy(i,a,u),s=l}}}if(lu)throw e=oh,lu=!1,oh=null,e}function fe(e,t){var n=t[gh];n===void 0&&(n=t[gh]=new Set);var r=e+"__bubble";n.has(r)||(x1(t,e,2,!1),n.add(r))}function Wd(e,t,n){var r=0;t&&(r|=4),x1(n,e,r,t)}var sl="_reactListening"+Math.random().toString(36).slice(2);function qo(e){if(!e[sl]){e[sl]=!0,Iw.forEach(function(n){n!=="selectionchange"&&(fI.has(n)||Wd(n,!1,e),Wd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[sl]||(t[sl]=!0,Wd("selectionchange",!1,t))}}function x1(e,t,n,r){switch(i1(t)){case 1:var i=bk;break;case 4:i=kk;break;default:i=Xp}n=i.bind(null,t,n,e),i=void 0,!sh||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Hd(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Zr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Ww(function(){var u=s,c=Kp(n),d=[];e:{var f=_1.get(e);if(f!==void 0){var g=Zp,y=e;switch(e){case"keypress":if(Ol(n)===0)break e;case"keydown":case"keyup":g=Bk;break;case"focusin":y="focus",g=Md;break;case"focusout":y="blur",g=Md;break;case"beforeblur":case"afterblur":g=Md;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Py;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Ok;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Hk;break;case m1:case g1:case y1:g=Ak;break;case v1:g=Kk;break;case"scroll":g=Ik;break;case"wheel":g=qk;break;case"copy":case"cut":case"paste":g=Lk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ry}var _=(t&4)!==0,w=!_&&e==="scroll",p=_?f!==null?f+"Capture":null:f;_=[];for(var h=u,v;h!==null;){v=h;var x=v.stateNode;if(v.tag===5&&x!==null&&(v=x,p!==null&&(x=Vo(h,p),x!=null&&_.push(Qo(h,x,v)))),w)break;h=h.return}0<_.length&&(f=new g(f,y,null,n,c),d.push({event:f,listeners:_}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",f&&n!==rh&&(y=n.relatedTarget||n.fromElement)&&(Zr(y)||y[Bn]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Zr(y):null,y!==null&&(w=Pi(y),y!==w||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(_=Py,x="onMouseLeave",p="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(_=Ry,x="onPointerLeave",p="onPointerEnter",h="pointer"),w=g==null?f:Yi(g),v=y==null?f:Yi(y),f=new _(x,h+"leave",g,n,c),f.target=w,f.relatedTarget=v,x=null,Zr(c)===u&&(_=new _(p,h+"enter",y,n,c),_.target=v,_.relatedTarget=w,x=_),w=x,g&&y)t:{for(_=g,p=y,h=0,v=_;v;v=Mi(v))h++;for(v=0,x=p;x;x=Mi(x))v++;for(;0<h-v;)_=Mi(_),h--;for(;0<v-h;)p=Mi(p),v--;for(;h--;){if(_===p||p!==null&&_===p.alternate)break t;_=Mi(_),p=Mi(p)}_=null}else _=null;g!==null&&By(d,f,g,_,!1),y!==null&&w!==null&&By(d,w,y,_,!0)}}e:{if(f=u?Yi(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var E=nI;else if(Dy(f))if(c1)E=oI;else{E=iI;var C=rI}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=sI);if(E&&(E=E(e,u))){u1(d,E,n,c);break e}C&&C(e,f,u),e==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Jf(f,"number",f.value)}switch(C=u?Yi(u):window,e){case"focusin":(Dy(C)||C.contentEditable==="true")&&(Gi=C,ch=u,bo=null);break;case"focusout":bo=ch=Gi=null;break;case"mousedown":dh=!0;break;case"contextmenu":case"mouseup":case"dragend":dh=!1,jy(d,n,c);break;case"selectionchange":if(uI)break;case"keydown":case"keyup":jy(d,n,c)}var S;if(tm)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Hi?a1(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(o1&&n.locale!=="ko"&&(Hi||O!=="onCompositionStart"?O==="onCompositionEnd"&&Hi&&(S=s1()):(ur=c,Jp="value"in ur?ur.value:ur.textContent,Hi=!0)),C=hu(u,O),0<C.length&&(O=new Oy(O,e,null,n,c),d.push({event:O,listeners:C}),S?O.data=S:(S=l1(n),S!==null&&(O.data=S)))),(S=Xk?Jk(e,n):Zk(e,n))&&(u=hu(u,"onBeforeInput"),0<u.length&&(c=new Oy("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=S))}w1(d,t)})}function Qo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function hu(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Vo(e,n),s!=null&&r.unshift(Qo(e,s,i)),s=Vo(e,t),s!=null&&r.push(Qo(e,s,i))),e=e.return}return r}function Mi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function By(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Vo(n,s),l!=null&&o.unshift(Qo(n,l,a))):i||(l=Vo(n,s),l!=null&&o.push(Qo(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var hI=/\r\n?/g,pI=/\u0000|\uFFFD/g;function Vy(e){return(typeof e=="string"?e:""+e).replace(hI,`
`).replace(pI,"")}function ol(e,t,n){if(t=Vy(t),Vy(e)!==t&&n)throw Error(k(425))}function pu(){}var fh=null,hh=null;function ph(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mh=typeof setTimeout=="function"?setTimeout:void 0,mI=typeof clearTimeout=="function"?clearTimeout:void 0,Wy=typeof Promise=="function"?Promise:void 0,gI=typeof queueMicrotask=="function"?queueMicrotask:typeof Wy<"u"?function(e){return Wy.resolve(null).then(e).catch(yI)}:mh;function yI(e){setTimeout(function(){throw e})}function Gd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Go(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Go(t)}function mr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Hy(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Bs=Math.random().toString(36).slice(2),wn="__reactFiber$"+Bs,Xo="__reactProps$"+Bs,Bn="__reactContainer$"+Bs,gh="__reactEvents$"+Bs,vI="__reactListeners$"+Bs,_I="__reactHandles$"+Bs;function Zr(e){var t=e[wn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bn]||n[wn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hy(e);e!==null;){if(n=e[wn])return n;e=Hy(e)}return t}e=n,n=e.parentNode}return null}function Na(e){return e=e[wn]||e[Bn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function xc(e){return e[Xo]||null}var yh=[],qi=-1;function Fr(e){return{current:e}}function ge(e){0>qi||(e.current=yh[qi],yh[qi]=null,qi--)}function de(e,t){qi++,yh[qi]=e.current,e.current=t}var Ir={},nt=Fr(Ir),yt=Fr(!1),pi=Ir;function vs(e,t){var n=e.type.contextTypes;if(!n)return Ir;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function vt(e){return e=e.childContextTypes,e!=null}function mu(){ge(yt),ge(nt)}function Gy(e,t,n){if(nt.current!==Ir)throw Error(k(168));de(nt,t),de(yt,n)}function S1(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,rk(e)||"Unknown",i));return xe({},n,r)}function gu(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ir,pi=nt.current,de(nt,e),de(yt,yt.current),!0}function Ky(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=S1(e,t,pi),r.__reactInternalMemoizedMergedChildContext=e,ge(yt),ge(nt),de(nt,e)):ge(yt),de(yt,n)}var Nn=null,Sc=!1,Kd=!1;function E1(e){Nn===null?Nn=[e]:Nn.push(e)}function wI(e){Sc=!0,E1(e)}function $r(){if(!Kd&&Nn!==null){Kd=!0;var e=0,t=se;try{var n=Nn;for(se=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Nn=null,Sc=!1}catch(i){throw Nn!==null&&(Nn=Nn.slice(e+1)),Yw(Yp,$r),i}finally{se=t,Kd=!1}}return null}var Qi=[],Xi=0,yu=null,vu=0,jt=[],zt=0,mi=null,Dn=1,Ln="";function Gr(e,t){Qi[Xi++]=vu,Qi[Xi++]=yu,yu=e,vu=t}function C1(e,t,n){jt[zt++]=Dn,jt[zt++]=Ln,jt[zt++]=mi,mi=e;var r=Dn;e=Ln;var i=32-an(r)-1;r&=~(1<<i),n+=1;var s=32-an(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Dn=1<<32-an(t)+i|n<<i|r,Ln=s+e}else Dn=1<<s|n<<i|r,Ln=e}function rm(e){e.return!==null&&(Gr(e,1),C1(e,1,0))}function im(e){for(;e===yu;)yu=Qi[--Xi],Qi[Xi]=null,vu=Qi[--Xi],Qi[Xi]=null;for(;e===mi;)mi=jt[--zt],jt[zt]=null,Ln=jt[--zt],jt[zt]=null,Dn=jt[--zt],jt[zt]=null}var It=null,Ct=null,ye=!1,tn=null;function T1(e,t){var n=Ut(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Yy(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,It=e,Ct=mr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,It=e,Ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=mi!==null?{id:Dn,overflow:Ln}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ut(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,It=e,Ct=null,!0):!1;default:return!1}}function vh(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _h(e){if(ye){var t=Ct;if(t){var n=t;if(!Yy(e,t)){if(vh(e))throw Error(k(418));t=mr(n.nextSibling);var r=It;t&&Yy(e,t)?T1(r,n):(e.flags=e.flags&-4097|2,ye=!1,It=e)}}else{if(vh(e))throw Error(k(418));e.flags=e.flags&-4097|2,ye=!1,It=e}}}function qy(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;It=e}function al(e){if(e!==It)return!1;if(!ye)return qy(e),ye=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ph(e.type,e.memoizedProps)),t&&(t=Ct)){if(vh(e))throw b1(),Error(k(418));for(;t;)T1(e,t),t=mr(t.nextSibling)}if(qy(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ct=mr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ct=null}}else Ct=It?mr(e.stateNode.nextSibling):null;return!0}function b1(){for(var e=Ct;e;)e=mr(e.nextSibling)}function _s(){Ct=It=null,ye=!1}function sm(e){tn===null?tn=[e]:tn.push(e)}var xI=Yn.ReactCurrentBatchConfig;function Zt(e,t){if(e&&e.defaultProps){t=xe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var _u=Fr(null),wu=null,Ji=null,om=null;function am(){om=Ji=wu=null}function lm(e){var t=_u.current;ge(_u),e._currentValue=t}function wh(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function cs(e,t){wu=e,om=Ji=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pt=!0),e.firstContext=null)}function Vt(e){var t=e._currentValue;if(om!==e)if(e={context:e,memoizedValue:t,next:null},Ji===null){if(wu===null)throw Error(k(308));Ji=e,wu.dependencies={lanes:0,firstContext:e}}else Ji=Ji.next=e;return t}var ei=null;function um(e){ei===null?ei=[e]:ei.push(e)}function k1(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,um(t)):(n.next=i.next,i.next=n),t.interleaved=n,Vn(e,r)}function Vn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nr=!1;function cm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function I1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Vn(e,n)}return i=r.interleaved,i===null?(t.next=t,um(r)):(t.next=i.next,i.next=t),r.interleaved=t,Vn(e,n)}function Rl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qp(e,n)}}function Qy(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function xu(e,t,n,r){var i=e.updateQueue;nr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,_=a;switch(f=t,g=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){d=y.call(g,d,f);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,f=typeof y=="function"?y.call(g,d,f):y,f==null)break e;d=xe({},d,f);break e;case 2:nr=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);yi|=o,e.lanes=o,e.memoizedState=d}}function Xy(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var P1=new kw.Component().refs;function xh(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:xe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ec={isMounted:function(e){return(e=e._reactInternals)?Pi(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=lt(),i=vr(e),s=Mn(r,i);s.payload=t,n!=null&&(s.callback=n),t=gr(e,s,i),t!==null&&(ln(t,e,i,r),Rl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=lt(),i=vr(e),s=Mn(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=gr(e,s,i),t!==null&&(ln(t,e,i,r),Rl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=lt(),r=vr(e),i=Mn(n,r);i.tag=2,t!=null&&(i.callback=t),t=gr(e,i,r),t!==null&&(ln(t,e,r,n),Rl(t,e,r))}};function Jy(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Yo(n,r)||!Yo(i,s):!0}function O1(e,t,n){var r=!1,i=Ir,s=t.contextType;return typeof s=="object"&&s!==null?s=Vt(s):(i=vt(t)?pi:nt.current,r=t.contextTypes,s=(r=r!=null)?vs(e,i):Ir),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ec,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Zy(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ec.enqueueReplaceState(t,t.state,null)}function Sh(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=P1,cm(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Vt(s):(s=vt(t)?pi:nt.current,i.context=vs(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(xh(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ec.enqueueReplaceState(i,i.state,null),xu(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function no(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===P1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function ll(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ev(e){var t=e._init;return t(e._payload)}function R1(e){function t(p,h){if(e){var v=p.deletions;v===null?(p.deletions=[h],p.flags|=16):v.push(h)}}function n(p,h){if(!e)return null;for(;h!==null;)t(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=_r(p,h),p.index=0,p.sibling=null,p}function s(p,h,v){return p.index=v,e?(v=p.alternate,v!==null?(v=v.index,v<h?(p.flags|=2,h):v):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,h,v,x){return h===null||h.tag!==6?(h=ef(v,p.mode,x),h.return=p,h):(h=i(h,v),h.return=p,h)}function l(p,h,v,x){var E=v.type;return E===Wi?c(p,h,v.props.children,x,v.key):h!==null&&(h.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===tr&&ev(E)===h.type)?(x=i(h,v.props),x.ref=no(p,h,v),x.return=p,x):(x=$l(v.type,v.key,v.props,null,p.mode,x),x.ref=no(p,h,v),x.return=p,x)}function u(p,h,v,x){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=tf(v,p.mode,x),h.return=p,h):(h=i(h,v.children||[]),h.return=p,h)}function c(p,h,v,x,E){return h===null||h.tag!==7?(h=ai(v,p.mode,x,E),h.return=p,h):(h=i(h,v),h.return=p,h)}function d(p,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=ef(""+h,p.mode,v),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Xa:return v=$l(h.type,h.key,h.props,null,p.mode,v),v.ref=no(p,null,h),v.return=p,v;case Vi:return h=tf(h,p.mode,v),h.return=p,h;case tr:var x=h._init;return d(p,x(h._payload),v)}if(mo(h)||Xs(h))return h=ai(h,p.mode,v,null),h.return=p,h;ll(p,h)}return null}function f(p,h,v,x){var E=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return E!==null?null:a(p,h,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Xa:return v.key===E?l(p,h,v,x):null;case Vi:return v.key===E?u(p,h,v,x):null;case tr:return E=v._init,f(p,h,E(v._payload),x)}if(mo(v)||Xs(v))return E!==null?null:c(p,h,v,x,null);ll(p,v)}return null}function g(p,h,v,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(v)||null,a(h,p,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Xa:return p=p.get(x.key===null?v:x.key)||null,l(h,p,x,E);case Vi:return p=p.get(x.key===null?v:x.key)||null,u(h,p,x,E);case tr:var C=x._init;return g(p,h,v,C(x._payload),E)}if(mo(x)||Xs(x))return p=p.get(v)||null,c(h,p,x,E,null);ll(h,x)}return null}function y(p,h,v,x){for(var E=null,C=null,S=h,O=h=0,$=null;S!==null&&O<v.length;O++){S.index>O?($=S,S=null):$=S.sibling;var F=f(p,S,v[O],x);if(F===null){S===null&&(S=$);break}e&&S&&F.alternate===null&&t(p,S),h=s(F,h,O),C===null?E=F:C.sibling=F,C=F,S=$}if(O===v.length)return n(p,S),ye&&Gr(p,O),E;if(S===null){for(;O<v.length;O++)S=d(p,v[O],x),S!==null&&(h=s(S,h,O),C===null?E=S:C.sibling=S,C=S);return ye&&Gr(p,O),E}for(S=r(p,S);O<v.length;O++)$=g(S,p,O,v[O],x),$!==null&&(e&&$.alternate!==null&&S.delete($.key===null?O:$.key),h=s($,h,O),C===null?E=$:C.sibling=$,C=$);return e&&S.forEach(function(B){return t(p,B)}),ye&&Gr(p,O),E}function _(p,h,v,x){var E=Xs(v);if(typeof E!="function")throw Error(k(150));if(v=E.call(v),v==null)throw Error(k(151));for(var C=E=null,S=h,O=h=0,$=null,F=v.next();S!==null&&!F.done;O++,F=v.next()){S.index>O?($=S,S=null):$=S.sibling;var B=f(p,S,F.value,x);if(B===null){S===null&&(S=$);break}e&&S&&B.alternate===null&&t(p,S),h=s(B,h,O),C===null?E=B:C.sibling=B,C=B,S=$}if(F.done)return n(p,S),ye&&Gr(p,O),E;if(S===null){for(;!F.done;O++,F=v.next())F=d(p,F.value,x),F!==null&&(h=s(F,h,O),C===null?E=F:C.sibling=F,C=F);return ye&&Gr(p,O),E}for(S=r(p,S);!F.done;O++,F=v.next())F=g(S,p,O,F.value,x),F!==null&&(e&&F.alternate!==null&&S.delete(F.key===null?O:F.key),h=s(F,h,O),C===null?E=F:C.sibling=F,C=F);return e&&S.forEach(function(Ye){return t(p,Ye)}),ye&&Gr(p,O),E}function w(p,h,v,x){if(typeof v=="object"&&v!==null&&v.type===Wi&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Xa:e:{for(var E=v.key,C=h;C!==null;){if(C.key===E){if(E=v.type,E===Wi){if(C.tag===7){n(p,C.sibling),h=i(C,v.props.children),h.return=p,p=h;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===tr&&ev(E)===C.type){n(p,C.sibling),h=i(C,v.props),h.ref=no(p,C,v),h.return=p,p=h;break e}n(p,C);break}else t(p,C);C=C.sibling}v.type===Wi?(h=ai(v.props.children,p.mode,x,v.key),h.return=p,p=h):(x=$l(v.type,v.key,v.props,null,p.mode,x),x.ref=no(p,h,v),x.return=p,p=x)}return o(p);case Vi:e:{for(C=v.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(p,h.sibling),h=i(h,v.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else t(p,h);h=h.sibling}h=tf(v,p.mode,x),h.return=p,p=h}return o(p);case tr:return C=v._init,w(p,h,C(v._payload),x)}if(mo(v))return y(p,h,v,x);if(Xs(v))return _(p,h,v,x);ll(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,v),h.return=p,p=h):(n(p,h),h=ef(v,p.mode,x),h.return=p,p=h),o(p)):n(p,h)}return w}var ws=R1(!0),N1=R1(!1),Aa={},Sn=Fr(Aa),Jo=Fr(Aa),Zo=Fr(Aa);function ti(e){if(e===Aa)throw Error(k(174));return e}function dm(e,t){switch(de(Zo,t),de(Jo,e),de(Sn,Aa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:eh(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=eh(t,e)}ge(Sn),de(Sn,t)}function xs(){ge(Sn),ge(Jo),ge(Zo)}function A1(e){ti(Zo.current);var t=ti(Sn.current),n=eh(t,e.type);t!==n&&(de(Jo,e),de(Sn,n))}function fm(e){Jo.current===e&&(ge(Sn),ge(Jo))}var _e=Fr(0);function Su(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yd=[];function hm(){for(var e=0;e<Yd.length;e++)Yd[e]._workInProgressVersionPrimary=null;Yd.length=0}var Nl=Yn.ReactCurrentDispatcher,qd=Yn.ReactCurrentBatchConfig,gi=0,we=null,Pe=null,Fe=null,Eu=!1,ko=!1,ea=0,SI=0;function Xe(){throw Error(k(321))}function pm(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!hn(e[n],t[n]))return!1;return!0}function mm(e,t,n,r,i,s){if(gi=s,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Nl.current=e===null||e.memoizedState===null?bI:kI,e=n(r,i),ko){s=0;do{if(ko=!1,ea=0,25<=s)throw Error(k(301));s+=1,Fe=Pe=null,t.updateQueue=null,Nl.current=II,e=n(r,i)}while(ko)}if(Nl.current=Cu,t=Pe!==null&&Pe.next!==null,gi=0,Fe=Pe=we=null,Eu=!1,t)throw Error(k(300));return e}function gm(){var e=ea!==0;return ea=0,e}function mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?we.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function Wt(){if(Pe===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var t=Fe===null?we.memoizedState:Fe.next;if(t!==null)Fe=t,Pe=e;else{if(e===null)throw Error(k(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Fe===null?we.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function ta(e,t){return typeof t=="function"?t(e):t}function Qd(e){var t=Wt(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=Pe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((gi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,we.lanes|=c,yi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,hn(r,t.memoizedState)||(pt=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,we.lanes|=s,yi|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Xd(e){var t=Wt(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);hn(s,t.memoizedState)||(pt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function D1(){}function L1(e,t){var n=we,r=Wt(),i=t(),s=!hn(r.memoizedState,i);if(s&&(r.memoizedState=i,pt=!0),r=r.queue,ym(M1.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,na(9,$1.bind(null,n,r,i,t),void 0,null),je===null)throw Error(k(349));gi&30||F1(n,t,i)}return i}function F1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function $1(e,t,n,r){t.value=n,t.getSnapshot=r,j1(t)&&z1(e)}function M1(e,t,n){return n(function(){j1(t)&&z1(e)})}function j1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!hn(e,n)}catch{return!0}}function z1(e){var t=Vn(e,1);t!==null&&ln(t,e,1,-1)}function tv(e){var t=mn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:e},t.queue=e,e=e.dispatch=TI.bind(null,we,e),[t.memoizedState,e]}function na(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function U1(){return Wt().memoizedState}function Al(e,t,n,r){var i=mn();we.flags|=e,i.memoizedState=na(1|t,n,void 0,r===void 0?null:r)}function Cc(e,t,n,r){var i=Wt();r=r===void 0?null:r;var s=void 0;if(Pe!==null){var o=Pe.memoizedState;if(s=o.destroy,r!==null&&pm(r,o.deps)){i.memoizedState=na(t,n,s,r);return}}we.flags|=e,i.memoizedState=na(1|t,n,s,r)}function nv(e,t){return Al(8390656,8,e,t)}function ym(e,t){return Cc(2048,8,e,t)}function B1(e,t){return Cc(4,2,e,t)}function V1(e,t){return Cc(4,4,e,t)}function W1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function H1(e,t,n){return n=n!=null?n.concat([e]):null,Cc(4,4,W1.bind(null,t,e),n)}function vm(){}function G1(e,t){var n=Wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pm(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function K1(e,t){var n=Wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pm(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Y1(e,t,n){return gi&21?(hn(n,t)||(n=Xw(),we.lanes|=n,yi|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pt=!0),e.memoizedState=n)}function EI(e,t){var n=se;se=n!==0&&4>n?n:4,e(!0);var r=qd.transition;qd.transition={};try{e(!1),t()}finally{se=n,qd.transition=r}}function q1(){return Wt().memoizedState}function CI(e,t,n){var r=vr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Q1(e))X1(t,n);else if(n=k1(e,t,n,r),n!==null){var i=lt();ln(n,e,r,i),J1(n,t,r)}}function TI(e,t,n){var r=vr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Q1(e))X1(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,hn(a,o)){var l=t.interleaved;l===null?(i.next=i,um(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=k1(e,t,i,r),n!==null&&(i=lt(),ln(n,e,r,i),J1(n,t,r))}}function Q1(e){var t=e.alternate;return e===we||t!==null&&t===we}function X1(e,t){ko=Eu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function J1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qp(e,n)}}var Cu={readContext:Vt,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},bI={readContext:Vt,useCallback:function(e,t){return mn().memoizedState=[e,t===void 0?null:t],e},useContext:Vt,useEffect:nv,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Al(4194308,4,W1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Al(4194308,4,e,t)},useInsertionEffect:function(e,t){return Al(4,2,e,t)},useMemo:function(e,t){var n=mn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=mn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=CI.bind(null,we,e),[r.memoizedState,e]},useRef:function(e){var t=mn();return e={current:e},t.memoizedState=e},useState:tv,useDebugValue:vm,useDeferredValue:function(e){return mn().memoizedState=e},useTransition:function(){var e=tv(!1),t=e[0];return e=EI.bind(null,e[1]),mn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=we,i=mn();if(ye){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),je===null)throw Error(k(349));gi&30||F1(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,nv(M1.bind(null,r,s,e),[e]),r.flags|=2048,na(9,$1.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=mn(),t=je.identifierPrefix;if(ye){var n=Ln,r=Dn;n=(r&~(1<<32-an(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ea++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=SI++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},kI={readContext:Vt,useCallback:G1,useContext:Vt,useEffect:ym,useImperativeHandle:H1,useInsertionEffect:B1,useLayoutEffect:V1,useMemo:K1,useReducer:Qd,useRef:U1,useState:function(){return Qd(ta)},useDebugValue:vm,useDeferredValue:function(e){var t=Wt();return Y1(t,Pe.memoizedState,e)},useTransition:function(){var e=Qd(ta)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:D1,useSyncExternalStore:L1,useId:q1,unstable_isNewReconciler:!1},II={readContext:Vt,useCallback:G1,useContext:Vt,useEffect:ym,useImperativeHandle:H1,useInsertionEffect:B1,useLayoutEffect:V1,useMemo:K1,useReducer:Xd,useRef:U1,useState:function(){return Xd(ta)},useDebugValue:vm,useDeferredValue:function(e){var t=Wt();return Pe===null?t.memoizedState=e:Y1(t,Pe.memoizedState,e)},useTransition:function(){var e=Xd(ta)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:D1,useSyncExternalStore:L1,useId:q1,unstable_isNewReconciler:!1};function Ss(e,t){try{var n="",r=t;do n+=nk(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Jd(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Eh(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var PI=typeof WeakMap=="function"?WeakMap:Map;function Z1(e,t,n){n=Mn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){bu||(bu=!0,Ah=r),Eh(e,t)},n}function ex(e,t,n){n=Mn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Eh(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Eh(e,t),typeof r!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function rv(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new PI;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=VI.bind(null,e,t,n),t.then(e,e))}function iv(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function sv(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Mn(-1,1),t.tag=2,gr(n,t,1))),n.lanes|=1),e)}var OI=Yn.ReactCurrentOwner,pt=!1;function st(e,t,n,r){t.child=e===null?N1(t,null,n,r):ws(t,e.child,n,r)}function ov(e,t,n,r,i){n=n.render;var s=t.ref;return cs(t,i),r=mm(e,t,n,r,s,i),n=gm(),e!==null&&!pt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wn(e,t,i)):(ye&&n&&rm(t),t.flags|=1,st(e,t,r,i),t.child)}function av(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!bm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,tx(e,t,s,r,i)):(e=$l(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Yo,n(o,r)&&e.ref===t.ref)return Wn(e,t,i)}return t.flags|=1,e=_r(s,r),e.ref=t.ref,e.return=t,t.child=e}function tx(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Yo(s,r)&&e.ref===t.ref)if(pt=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(pt=!0);else return t.lanes=e.lanes,Wn(e,t,i)}return Ch(e,t,n,r,i)}function nx(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(es,Et),Et|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,de(es,Et),Et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(es,Et),Et|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,de(es,Et),Et|=r;return st(e,t,i,n),t.child}function rx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ch(e,t,n,r,i){var s=vt(n)?pi:nt.current;return s=vs(t,s),cs(t,i),n=mm(e,t,n,r,s,i),r=gm(),e!==null&&!pt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wn(e,t,i)):(ye&&r&&rm(t),t.flags|=1,st(e,t,n,i),t.child)}function lv(e,t,n,r,i){if(vt(n)){var s=!0;gu(t)}else s=!1;if(cs(t,i),t.stateNode===null)Dl(e,t),O1(t,n,r),Sh(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Vt(u):(u=vt(n)?pi:nt.current,u=vs(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Zy(t,o,r,u),nr=!1;var f=t.memoizedState;o.state=f,xu(t,r,o,i),l=t.memoizedState,a!==r||f!==l||yt.current||nr?(typeof c=="function"&&(xh(t,n,c,r),l=t.memoizedState),(a=nr||Jy(t,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,I1(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Zt(t.type,a),o.props=u,d=t.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Vt(l):(l=vt(n)?pi:nt.current,l=vs(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Zy(t,o,r,l),nr=!1,f=t.memoizedState,o.state=f,xu(t,r,o,i);var y=t.memoizedState;a!==d||f!==y||yt.current||nr?(typeof g=="function"&&(xh(t,n,g,r),y=t.memoizedState),(u=nr||Jy(t,n,u,r,f,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Th(e,t,n,r,s,i)}function Th(e,t,n,r,i,s){rx(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Ky(t,n,!1),Wn(e,t,s);r=t.stateNode,OI.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=ws(t,e.child,null,s),t.child=ws(t,null,a,s)):st(e,t,a,s),t.memoizedState=r.state,i&&Ky(t,n,!0),t.child}function ix(e){var t=e.stateNode;t.pendingContext?Gy(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gy(e,t.context,!1),dm(e,t.containerInfo)}function uv(e,t,n,r,i){return _s(),sm(i),t.flags|=256,st(e,t,n,r),t.child}var bh={dehydrated:null,treeContext:null,retryLane:0};function kh(e){return{baseLanes:e,cachePool:null,transitions:null}}function sx(e,t,n){var r=t.pendingProps,i=_e.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),de(_e,i&1),e===null)return _h(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=kc(o,r,0,null),e=ai(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=kh(n),t.memoizedState=bh,e):_m(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return RI(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=_r(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=_r(a,s):(s=ai(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?kh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=bh,r}return s=e.child,e=s.sibling,r=_r(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function _m(e,t){return t=kc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ul(e,t,n,r){return r!==null&&sm(r),ws(t,e.child,null,n),e=_m(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function RI(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Jd(Error(k(422))),ul(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=kc({mode:"visible",children:r.children},i,0,null),s=ai(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&ws(t,e.child,null,o),t.child.memoizedState=kh(o),t.memoizedState=bh,s);if(!(t.mode&1))return ul(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=Jd(s,r,void 0),ul(e,t,o,r)}if(a=(o&e.childLanes)!==0,pt||a){if(r=je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Vn(e,i),ln(r,e,i,-1))}return Tm(),r=Jd(Error(k(421))),ul(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=WI.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Ct=mr(i.nextSibling),It=t,ye=!0,tn=null,e!==null&&(jt[zt++]=Dn,jt[zt++]=Ln,jt[zt++]=mi,Dn=e.id,Ln=e.overflow,mi=t),t=_m(t,r.children),t.flags|=4096,t)}function cv(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),wh(e.return,t,n)}function Zd(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function ox(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(st(e,t,r.children,n),r=_e.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cv(e,n,t);else if(e.tag===19)cv(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(de(_e,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Su(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Zd(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Su(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Zd(t,!0,n,null,s);break;case"together":Zd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Dl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),yi|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=_r(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_r(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function NI(e,t,n){switch(t.tag){case 3:ix(t),_s();break;case 5:A1(t);break;case 1:vt(t.type)&&gu(t);break;case 4:dm(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;de(_u,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(de(_e,_e.current&1),t.flags|=128,null):n&t.child.childLanes?sx(e,t,n):(de(_e,_e.current&1),e=Wn(e,t,n),e!==null?e.sibling:null);de(_e,_e.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ox(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(_e,_e.current),r)break;return null;case 22:case 23:return t.lanes=0,nx(e,t,n)}return Wn(e,t,n)}var ax,Ih,lx,ux;ax=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ih=function(){};lx=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ti(Sn.current);var s=null;switch(n){case"input":i=Qf(e,i),r=Qf(e,r),s=[];break;case"select":i=xe({},i,{value:void 0}),r=xe({},r,{value:void 0}),s=[];break;case"textarea":i=Zf(e,i),r=Zf(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=pu)}th(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Uo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Uo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&fe("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};ux=function(e,t,n,r){n!==r&&(t.flags|=4)};function ro(e,t){if(!ye)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function AI(e,t,n){var r=t.pendingProps;switch(im(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(t),null;case 1:return vt(t.type)&&mu(),Je(t),null;case 3:return r=t.stateNode,xs(),ge(yt),ge(nt),hm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(al(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,tn!==null&&(Fh(tn),tn=null))),Ih(e,t),Je(t),null;case 5:fm(t);var i=ti(Zo.current);if(n=t.type,e!==null&&t.stateNode!=null)lx(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return Je(t),null}if(e=ti(Sn.current),al(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[wn]=t,r[Xo]=s,e=(t.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<yo.length;i++)fe(yo[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":_y(r,s),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},fe("invalid",r);break;case"textarea":xy(r,s),fe("invalid",r)}th(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ol(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ol(r.textContent,a,e),i=["children",""+a]):Uo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&fe("scroll",r)}switch(n){case"input":Ja(r),wy(r,s,!0);break;case"textarea":Ja(r),Sy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=pu)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Fw(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[wn]=t,e[Xo]=r,ax(e,t,!1,!1),t.stateNode=e;e:{switch(o=nh(n,r),n){case"dialog":fe("cancel",e),fe("close",e),i=r;break;case"iframe":case"object":case"embed":fe("load",e),i=r;break;case"video":case"audio":for(i=0;i<yo.length;i++)fe(yo[i],e);i=r;break;case"source":fe("error",e),i=r;break;case"img":case"image":case"link":fe("error",e),fe("load",e),i=r;break;case"details":fe("toggle",e),i=r;break;case"input":_y(e,r),i=Qf(e,r),fe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=xe({},r,{value:void 0}),fe("invalid",e);break;case"textarea":xy(e,r),i=Zf(e,r),fe("invalid",e);break;default:i=r}th(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?jw(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&$w(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Bo(e,l):typeof l=="number"&&Bo(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Uo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&fe("scroll",e):l!=null&&Vp(e,s,l,o))}switch(n){case"input":Ja(e),wy(e,r,!1);break;case"textarea":Ja(e),Sy(e);break;case"option":r.value!=null&&e.setAttribute("value",""+kr(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?os(e,!!r.multiple,s,!1):r.defaultValue!=null&&os(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=pu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Je(t),null;case 6:if(e&&t.stateNode!=null)ux(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=ti(Zo.current),ti(Sn.current),al(t)){if(r=t.stateNode,n=t.memoizedProps,r[wn]=t,(s=r.nodeValue!==n)&&(e=It,e!==null))switch(e.tag){case 3:ol(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ol(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wn]=t,t.stateNode=r}return Je(t),null;case 13:if(ge(_e),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ye&&Ct!==null&&t.mode&1&&!(t.flags&128))b1(),_s(),t.flags|=98560,s=!1;else if(s=al(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(k(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[wn]=t}else _s(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Je(t),s=!1}else tn!==null&&(Fh(tn),tn=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||_e.current&1?Ne===0&&(Ne=3):Tm())),t.updateQueue!==null&&(t.flags|=4),Je(t),null);case 4:return xs(),Ih(e,t),e===null&&qo(t.stateNode.containerInfo),Je(t),null;case 10:return lm(t.type._context),Je(t),null;case 17:return vt(t.type)&&mu(),Je(t),null;case 19:if(ge(_e),s=t.memoizedState,s===null)return Je(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)ro(s,!1);else{if(Ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Su(e),o!==null){for(t.flags|=128,ro(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return de(_e,_e.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ce()>Es&&(t.flags|=128,r=!0,ro(s,!1),t.lanes=4194304)}else{if(!r)if(e=Su(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ro(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ye)return Je(t),null}else 2*Ce()-s.renderingStartTime>Es&&n!==1073741824&&(t.flags|=128,r=!0,ro(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ce(),t.sibling=null,n=_e.current,de(_e,r?n&1|2:n&1),t):(Je(t),null);case 22:case 23:return Cm(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Et&1073741824&&(Je(t),t.subtreeFlags&6&&(t.flags|=8192)):Je(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function DI(e,t){switch(im(t),t.tag){case 1:return vt(t.type)&&mu(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xs(),ge(yt),ge(nt),hm(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return fm(t),null;case 13:if(ge(_e),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));_s()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ge(_e),null;case 4:return xs(),null;case 10:return lm(t.type._context),null;case 22:case 23:return Cm(),null;case 24:return null;default:return null}}var cl=!1,et=!1,LI=typeof WeakSet=="function"?WeakSet:Set,A=null;function Zi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(e,t,r)}else n.current=null}function Ph(e,t,n){try{n()}catch(r){Se(e,t,r)}}var dv=!1;function FI(e,t){if(fh=du,e=h1(),nm(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===e)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(hh={focusedElem:e,selectionRange:n},du=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,w=y.memoizedState,p=t.stateNode,h=p.getSnapshotBeforeUpdate(t.elementType===t.type?_:Zt(t.type,_),w);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(x){Se(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return y=dv,dv=!1,y}function Io(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ph(t,n,s)}i=i.next}while(i!==r)}}function Tc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Oh(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function cx(e){var t=e.alternate;t!==null&&(e.alternate=null,cx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[wn],delete t[Xo],delete t[gh],delete t[vI],delete t[_I])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function dx(e){return e.tag===5||e.tag===3||e.tag===4}function fv(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rh(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=pu));else if(r!==4&&(e=e.child,e!==null))for(Rh(e,t,n),e=e.sibling;e!==null;)Rh(e,t,n),e=e.sibling}function Nh(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Nh(e,t,n),e=e.sibling;e!==null;)Nh(e,t,n),e=e.sibling}var Ve=null,en=!1;function Jn(e,t,n){for(n=n.child;n!==null;)fx(e,t,n),n=n.sibling}function fx(e,t,n){if(xn&&typeof xn.onCommitFiberUnmount=="function")try{xn.onCommitFiberUnmount(yc,n)}catch{}switch(n.tag){case 5:et||Zi(n,t);case 6:var r=Ve,i=en;Ve=null,Jn(e,t,n),Ve=r,en=i,Ve!==null&&(en?(e=Ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ve.removeChild(n.stateNode));break;case 18:Ve!==null&&(en?(e=Ve,n=n.stateNode,e.nodeType===8?Gd(e.parentNode,n):e.nodeType===1&&Gd(e,n),Go(e)):Gd(Ve,n.stateNode));break;case 4:r=Ve,i=en,Ve=n.stateNode.containerInfo,en=!0,Jn(e,t,n),Ve=r,en=i;break;case 0:case 11:case 14:case 15:if(!et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ph(n,t,o),i=i.next}while(i!==r)}Jn(e,t,n);break;case 1:if(!et&&(Zi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Se(n,t,a)}Jn(e,t,n);break;case 21:Jn(e,t,n);break;case 22:n.mode&1?(et=(r=et)||n.memoizedState!==null,Jn(e,t,n),et=r):Jn(e,t,n);break;default:Jn(e,t,n)}}function hv(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new LI),t.forEach(function(r){var i=HI.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Qt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ve=a.stateNode,en=!1;break e;case 3:Ve=a.stateNode.containerInfo,en=!0;break e;case 4:Ve=a.stateNode.containerInfo,en=!0;break e}a=a.return}if(Ve===null)throw Error(k(160));fx(s,o,i),Ve=null,en=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Se(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)hx(t,e),t=t.sibling}function hx(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qt(t,e),pn(e),r&4){try{Io(3,e,e.return),Tc(3,e)}catch(_){Se(e,e.return,_)}try{Io(5,e,e.return)}catch(_){Se(e,e.return,_)}}break;case 1:Qt(t,e),pn(e),r&512&&n!==null&&Zi(n,n.return);break;case 5:if(Qt(t,e),pn(e),r&512&&n!==null&&Zi(n,n.return),e.flags&32){var i=e.stateNode;try{Bo(i,"")}catch(_){Se(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Dw(i,s),nh(a,o);var u=nh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?jw(i,d):c==="dangerouslySetInnerHTML"?$w(i,d):c==="children"?Bo(i,d):Vp(i,c,d,u)}switch(a){case"input":Xf(i,s);break;case"textarea":Lw(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?os(i,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?os(i,!!s.multiple,s.defaultValue,!0):os(i,!!s.multiple,s.multiple?[]:"",!1))}i[Xo]=s}catch(_){Se(e,e.return,_)}}break;case 6:if(Qt(t,e),pn(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(_){Se(e,e.return,_)}}break;case 3:if(Qt(t,e),pn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Go(t.containerInfo)}catch(_){Se(e,e.return,_)}break;case 4:Qt(t,e),pn(e);break;case 13:Qt(t,e),pn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Sm=Ce())),r&4&&hv(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(et=(u=et)||c,Qt(t,e),et=u):Qt(t,e),pn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(A=e,c=e.child;c!==null;){for(d=A=c;A!==null;){switch(f=A,g=f.child,f.tag){case 0:case 11:case 14:case 15:Io(4,f,f.return);break;case 1:Zi(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(_){Se(r,n,_)}}break;case 5:Zi(f,f.return);break;case 22:if(f.memoizedState!==null){mv(d);continue}}g!==null?(g.return=f,A=g):mv(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Mw("display",o))}catch(_){Se(e,e.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){Se(e,e.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Qt(t,e),pn(e),r&4&&hv(e);break;case 21:break;default:Qt(t,e),pn(e)}}function pn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(dx(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Bo(i,""),r.flags&=-33);var s=fv(e);Nh(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=fv(e);Rh(e,a,o);break;default:throw Error(k(161))}}catch(l){Se(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $I(e,t,n){A=e,px(e)}function px(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||cl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||et;a=cl;var u=et;if(cl=o,(et=l)&&!u)for(A=i;A!==null;)o=A,l=o.child,o.tag===22&&o.memoizedState!==null?gv(i):l!==null?(l.return=o,A=l):gv(i);for(;s!==null;)A=s,px(s),s=s.sibling;A=i,cl=a,et=u}pv(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,A=s):pv(e)}}function pv(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:et||Tc(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!et)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Zt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Xy(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Xy(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Go(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}et||t.flags&512&&Oh(t)}catch(f){Se(t,t.return,f)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function mv(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function gv(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Tc(4,t)}catch(l){Se(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Se(t,i,l)}}var s=t.return;try{Oh(t)}catch(l){Se(t,s,l)}break;case 5:var o=t.return;try{Oh(t)}catch(l){Se(t,o,l)}}}catch(l){Se(t,t.return,l)}if(t===e){A=null;break}var a=t.sibling;if(a!==null){a.return=t.return,A=a;break}A=t.return}}var MI=Math.ceil,Tu=Yn.ReactCurrentDispatcher,wm=Yn.ReactCurrentOwner,Bt=Yn.ReactCurrentBatchConfig,q=0,je=null,Ie=null,Ge=0,Et=0,es=Fr(0),Ne=0,ra=null,yi=0,bc=0,xm=0,Po=null,ft=null,Sm=0,Es=1/0,On=null,bu=!1,Ah=null,yr=null,dl=!1,cr=null,ku=0,Oo=0,Dh=null,Ll=-1,Fl=0;function lt(){return q&6?Ce():Ll!==-1?Ll:Ll=Ce()}function vr(e){return e.mode&1?q&2&&Ge!==0?Ge&-Ge:xI.transition!==null?(Fl===0&&(Fl=Xw()),Fl):(e=se,e!==0||(e=window.event,e=e===void 0?16:i1(e.type)),e):1}function ln(e,t,n,r){if(50<Oo)throw Oo=0,Dh=null,Error(k(185));Oa(e,n,r),(!(q&2)||e!==je)&&(e===je&&(!(q&2)&&(bc|=n),Ne===4&&ir(e,Ge)),_t(e,r),n===1&&q===0&&!(t.mode&1)&&(Es=Ce()+500,Sc&&$r()))}function _t(e,t){var n=e.callbackNode;xk(e,t);var r=cu(e,e===je?Ge:0);if(r===0)n!==null&&Ty(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ty(n),t===1)e.tag===0?wI(yv.bind(null,e)):E1(yv.bind(null,e)),gI(function(){!(q&6)&&$r()}),n=null;else{switch(Jw(r)){case 1:n=Yp;break;case 4:n=qw;break;case 16:n=uu;break;case 536870912:n=Qw;break;default:n=uu}n=Sx(n,mx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function mx(e,t){if(Ll=-1,Fl=0,q&6)throw Error(k(327));var n=e.callbackNode;if(ds()&&e.callbackNode!==n)return null;var r=cu(e,e===je?Ge:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Iu(e,r);else{t=r;var i=q;q|=2;var s=yx();(je!==e||Ge!==t)&&(On=null,Es=Ce()+500,oi(e,t));do try{UI();break}catch(a){gx(e,a)}while(1);am(),Tu.current=s,q=i,Ie!==null?t=0:(je=null,Ge=0,t=Ne)}if(t!==0){if(t===2&&(i=ah(e),i!==0&&(r=i,t=Lh(e,i))),t===1)throw n=ra,oi(e,0),ir(e,r),_t(e,Ce()),n;if(t===6)ir(e,r);else{if(i=e.current.alternate,!(r&30)&&!jI(i)&&(t=Iu(e,r),t===2&&(s=ah(e),s!==0&&(r=s,t=Lh(e,s))),t===1))throw n=ra,oi(e,0),ir(e,r),_t(e,Ce()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Kr(e,ft,On);break;case 3:if(ir(e,r),(r&130023424)===r&&(t=Sm+500-Ce(),10<t)){if(cu(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){lt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=mh(Kr.bind(null,e,ft,On),t);break}Kr(e,ft,On);break;case 4:if(ir(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-an(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*MI(r/1960))-r,10<r){e.timeoutHandle=mh(Kr.bind(null,e,ft,On),r);break}Kr(e,ft,On);break;case 5:Kr(e,ft,On);break;default:throw Error(k(329))}}}return _t(e,Ce()),e.callbackNode===n?mx.bind(null,e):null}function Lh(e,t){var n=Po;return e.current.memoizedState.isDehydrated&&(oi(e,t).flags|=256),e=Iu(e,t),e!==2&&(t=ft,ft=n,t!==null&&Fh(t)),e}function Fh(e){ft===null?ft=e:ft.push.apply(ft,e)}function jI(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!hn(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ir(e,t){for(t&=~xm,t&=~bc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-an(t),r=1<<n;e[n]=-1,t&=~r}}function yv(e){if(q&6)throw Error(k(327));ds();var t=cu(e,0);if(!(t&1))return _t(e,Ce()),null;var n=Iu(e,t);if(e.tag!==0&&n===2){var r=ah(e);r!==0&&(t=r,n=Lh(e,r))}if(n===1)throw n=ra,oi(e,0),ir(e,t),_t(e,Ce()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kr(e,ft,On),_t(e,Ce()),null}function Em(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(Es=Ce()+500,Sc&&$r())}}function vi(e){cr!==null&&cr.tag===0&&!(q&6)&&ds();var t=q;q|=1;var n=Bt.transition,r=se;try{if(Bt.transition=null,se=1,e)return e()}finally{se=r,Bt.transition=n,q=t,!(q&6)&&$r()}}function Cm(){Et=es.current,ge(es)}function oi(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,mI(n)),Ie!==null)for(n=Ie.return;n!==null;){var r=n;switch(im(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&mu();break;case 3:xs(),ge(yt),ge(nt),hm();break;case 5:fm(r);break;case 4:xs();break;case 13:ge(_e);break;case 19:ge(_e);break;case 10:lm(r.type._context);break;case 22:case 23:Cm()}n=n.return}if(je=e,Ie=e=_r(e.current,null),Ge=Et=t,Ne=0,ra=null,xm=bc=yi=0,ft=Po=null,ei!==null){for(t=0;t<ei.length;t++)if(n=ei[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ei=null}return e}function gx(e,t){do{var n=Ie;try{if(am(),Nl.current=Cu,Eu){for(var r=we.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Eu=!1}if(gi=0,Fe=Pe=we=null,ko=!1,ea=0,wm.current=null,n===null||n.return===null){Ne=1,ra=t,Ie=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=Ge,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=iv(o);if(g!==null){g.flags&=-257,sv(g,o,a,s,t),g.mode&1&&rv(s,u,t),t=g,l=u;var y=t.updateQueue;if(y===null){var _=new Set;_.add(l),t.updateQueue=_}else y.add(l);break e}else{if(!(t&1)){rv(s,u,t),Tm();break e}l=Error(k(426))}}else if(ye&&a.mode&1){var w=iv(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),sv(w,o,a,s,t),sm(Ss(l,a));break e}}s=l=Ss(l,a),Ne!==4&&(Ne=2),Po===null?Po=[s]:Po.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var p=Z1(s,l,t);Qy(s,p);break e;case 1:a=l;var h=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(yr===null||!yr.has(v)))){s.flags|=65536,t&=-t,s.lanes|=t;var x=ex(s,a,t);Qy(s,x);break e}}s=s.return}while(s!==null)}_x(n)}catch(E){t=E,Ie===n&&n!==null&&(Ie=n=n.return);continue}break}while(1)}function yx(){var e=Tu.current;return Tu.current=Cu,e===null?Cu:e}function Tm(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),je===null||!(yi&268435455)&&!(bc&268435455)||ir(je,Ge)}function Iu(e,t){var n=q;q|=2;var r=yx();(je!==e||Ge!==t)&&(On=null,oi(e,t));do try{zI();break}catch(i){gx(e,i)}while(1);if(am(),q=n,Tu.current=r,Ie!==null)throw Error(k(261));return je=null,Ge=0,Ne}function zI(){for(;Ie!==null;)vx(Ie)}function UI(){for(;Ie!==null&&!fk();)vx(Ie)}function vx(e){var t=xx(e.alternate,e,Et);e.memoizedProps=e.pendingProps,t===null?_x(e):Ie=t,wm.current=null}function _x(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=DI(n,t),n!==null){n.flags&=32767,Ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ne=6,Ie=null;return}}else if(n=AI(n,t,Et),n!==null){Ie=n;return}if(t=t.sibling,t!==null){Ie=t;return}Ie=t=e}while(t!==null);Ne===0&&(Ne=5)}function Kr(e,t,n){var r=se,i=Bt.transition;try{Bt.transition=null,se=1,BI(e,t,n,r)}finally{Bt.transition=i,se=r}return null}function BI(e,t,n,r){do ds();while(cr!==null);if(q&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Sk(e,s),e===je&&(Ie=je=null,Ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||dl||(dl=!0,Sx(uu,function(){return ds(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Bt.transition,Bt.transition=null;var o=se;se=1;var a=q;q|=4,wm.current=null,FI(e,n),hx(n,e),lI(hh),du=!!fh,hh=fh=null,e.current=n,$I(n),hk(),q=a,se=o,Bt.transition=s}else e.current=n;if(dl&&(dl=!1,cr=e,ku=i),s=e.pendingLanes,s===0&&(yr=null),gk(n.stateNode),_t(e,Ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(bu)throw bu=!1,e=Ah,Ah=null,e;return ku&1&&e.tag!==0&&ds(),s=e.pendingLanes,s&1?e===Dh?Oo++:(Oo=0,Dh=e):Oo=0,$r(),null}function ds(){if(cr!==null){var e=Jw(ku),t=Bt.transition,n=se;try{if(Bt.transition=null,se=16>e?16:e,cr===null)var r=!1;else{if(e=cr,cr=null,ku=0,q&6)throw Error(k(331));var i=q;for(q|=4,A=e.current;A!==null;){var s=A,o=s.child;if(A.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(A=u;A!==null;){var c=A;switch(c.tag){case 0:case 11:case 15:Io(8,c,s)}var d=c.child;if(d!==null)d.return=c,A=d;else for(;A!==null;){c=A;var f=c.sibling,g=c.return;if(cx(c),c===u){A=null;break}if(f!==null){f.return=g,A=f;break}A=g}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var w=_.sibling;_.sibling=null,_=w}while(_!==null)}}A=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Io(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,A=p;break e}A=s.return}}var h=e.current;for(A=h;A!==null;){o=A;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,A=v;else e:for(o=h;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Tc(9,a)}}catch(E){Se(a,a.return,E)}if(a===o){A=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,A=x;break e}A=a.return}}if(q=i,$r(),xn&&typeof xn.onPostCommitFiberRoot=="function")try{xn.onPostCommitFiberRoot(yc,e)}catch{}r=!0}return r}finally{se=n,Bt.transition=t}}return!1}function vv(e,t,n){t=Ss(n,t),t=Z1(e,t,1),e=gr(e,t,1),t=lt(),e!==null&&(Oa(e,1,t),_t(e,t))}function Se(e,t,n){if(e.tag===3)vv(e,e,n);else for(;t!==null;){if(t.tag===3){vv(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yr===null||!yr.has(r))){e=Ss(n,e),e=ex(t,e,1),t=gr(t,e,1),e=lt(),t!==null&&(Oa(t,1,e),_t(t,e));break}}t=t.return}}function VI(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=lt(),e.pingedLanes|=e.suspendedLanes&n,je===e&&(Ge&n)===n&&(Ne===4||Ne===3&&(Ge&130023424)===Ge&&500>Ce()-Sm?oi(e,0):xm|=n),_t(e,t)}function wx(e,t){t===0&&(e.mode&1?(t=tl,tl<<=1,!(tl&130023424)&&(tl=4194304)):t=1);var n=lt();e=Vn(e,t),e!==null&&(Oa(e,t,n),_t(e,n))}function WI(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wx(e,n)}function HI(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),wx(e,n)}var xx;xx=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||yt.current)pt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pt=!1,NI(e,t,n);pt=!!(e.flags&131072)}else pt=!1,ye&&t.flags&1048576&&C1(t,vu,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Dl(e,t),e=t.pendingProps;var i=vs(t,nt.current);cs(t,n),i=mm(null,t,r,e,i,n);var s=gm();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,vt(r)?(s=!0,gu(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,cm(t),i.updater=Ec,t.stateNode=i,i._reactInternals=t,Sh(t,r,e,n),t=Th(null,t,r,!0,s,n)):(t.tag=0,ye&&s&&rm(t),st(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Dl(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=KI(r),e=Zt(r,e),i){case 0:t=Ch(null,t,r,e,n);break e;case 1:t=lv(null,t,r,e,n);break e;case 11:t=ov(null,t,r,e,n);break e;case 14:t=av(null,t,r,Zt(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Zt(r,i),Ch(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Zt(r,i),lv(e,t,r,i,n);case 3:e:{if(ix(t),e===null)throw Error(k(387));r=t.pendingProps,s=t.memoizedState,i=s.element,I1(e,t),xu(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Ss(Error(k(423)),t),t=uv(e,t,r,n,i);break e}else if(r!==i){i=Ss(Error(k(424)),t),t=uv(e,t,r,n,i);break e}else for(Ct=mr(t.stateNode.containerInfo.firstChild),It=t,ye=!0,tn=null,n=N1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_s(),r===i){t=Wn(e,t,n);break e}st(e,t,r,n)}t=t.child}return t;case 5:return A1(t),e===null&&_h(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,ph(r,i)?o=null:s!==null&&ph(r,s)&&(t.flags|=32),rx(e,t),st(e,t,o,n),t.child;case 6:return e===null&&_h(t),null;case 13:return sx(e,t,n);case 4:return dm(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ws(t,null,r,n):st(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Zt(r,i),ov(e,t,r,i,n);case 7:return st(e,t,t.pendingProps,n),t.child;case 8:return st(e,t,t.pendingProps.children,n),t.child;case 12:return st(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,de(_u,r._currentValue),r._currentValue=o,s!==null)if(hn(s.value,o)){if(s.children===i.children&&!yt.current){t=Wn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Mn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),wh(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),wh(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}st(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,cs(t,n),i=Vt(i),r=r(i),t.flags|=1,st(e,t,r,n),t.child;case 14:return r=t.type,i=Zt(r,t.pendingProps),i=Zt(r.type,i),av(e,t,r,i,n);case 15:return tx(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Zt(r,i),Dl(e,t),t.tag=1,vt(r)?(e=!0,gu(t)):e=!1,cs(t,n),O1(t,r,i),Sh(t,r,i,n),Th(null,t,r,!0,e,n);case 19:return ox(e,t,n);case 22:return nx(e,t,n)}throw Error(k(156,t.tag))};function Sx(e,t){return Yw(e,t)}function GI(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(e,t,n,r){return new GI(e,t,n,r)}function bm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function KI(e){if(typeof e=="function")return bm(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Hp)return 11;if(e===Gp)return 14}return 2}function _r(e,t){var n=e.alternate;return n===null?(n=Ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $l(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")bm(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Wi:return ai(n.children,i,s,t);case Wp:o=8,i|=8;break;case Gf:return e=Ut(12,n,t,i|2),e.elementType=Gf,e.lanes=s,e;case Kf:return e=Ut(13,n,t,i),e.elementType=Kf,e.lanes=s,e;case Yf:return e=Ut(19,n,t,i),e.elementType=Yf,e.lanes=s,e;case Rw:return kc(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pw:o=10;break e;case Ow:o=9;break e;case Hp:o=11;break e;case Gp:o=14;break e;case tr:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Ut(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function ai(e,t,n,r){return e=Ut(7,e,r,t),e.lanes=n,e}function kc(e,t,n,r){return e=Ut(22,e,r,t),e.elementType=Rw,e.lanes=n,e.stateNode={isHidden:!1},e}function ef(e,t,n){return e=Ut(6,e,null,t),e.lanes=n,e}function tf(e,t,n){return t=Ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function YI(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ld(0),this.expirationTimes=Ld(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ld(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function km(e,t,n,r,i,s,o,a,l){return e=new YI(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ut(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cm(s),e}function qI(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ex(e){if(!e)return Ir;e=e._reactInternals;e:{if(Pi(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(vt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(vt(n))return S1(e,n,t)}return t}function Cx(e,t,n,r,i,s,o,a,l){return e=km(n,r,!0,e,i,s,o,a,l),e.context=Ex(null),n=e.current,r=lt(),i=vr(n),s=Mn(r,i),s.callback=t??null,gr(n,s,i),e.current.lanes=i,Oa(e,i,r),_t(e,r),e}function Ic(e,t,n,r){var i=t.current,s=lt(),o=vr(i);return n=Ex(n),t.context===null?t.context=n:t.pendingContext=n,t=Mn(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gr(i,t,o),e!==null&&(ln(e,i,o,s),Rl(e,i,o)),o}function Pu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _v(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Im(e,t){_v(e,t),(e=e.alternate)&&_v(e,t)}function QI(){return null}var Tx=typeof reportError=="function"?reportError:function(e){console.error(e)};function Pm(e){this._internalRoot=e}Pc.prototype.render=Pm.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Ic(e,t,null,null)};Pc.prototype.unmount=Pm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vi(function(){Ic(null,e,null,null)}),t[Bn]=null}};function Pc(e){this._internalRoot=e}Pc.prototype.unstable_scheduleHydration=function(e){if(e){var t=t1();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rr.length&&t!==0&&t<rr[n].priority;n++);rr.splice(n,0,e),n===0&&r1(e)}};function Om(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Oc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wv(){}function XI(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Pu(o);s.call(u)}}var o=Cx(t,r,e,0,null,!1,!1,"",wv);return e._reactRootContainer=o,e[Bn]=o.current,qo(e.nodeType===8?e.parentNode:e),vi(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Pu(l);a.call(u)}}var l=km(e,0,!1,null,null,!1,!1,"",wv);return e._reactRootContainer=l,e[Bn]=l.current,qo(e.nodeType===8?e.parentNode:e),vi(function(){Ic(t,l,n,r)}),l}function Rc(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Pu(o);a.call(l)}}Ic(t,o,e,i)}else o=XI(n,t,e,i,r);return Pu(o)}Zw=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=go(t.pendingLanes);n!==0&&(qp(t,n|1),_t(t,Ce()),!(q&6)&&(Es=Ce()+500,$r()))}break;case 13:vi(function(){var r=Vn(e,1);if(r!==null){var i=lt();ln(r,e,1,i)}}),Im(e,1)}};Qp=function(e){if(e.tag===13){var t=Vn(e,134217728);if(t!==null){var n=lt();ln(t,e,134217728,n)}Im(e,134217728)}};e1=function(e){if(e.tag===13){var t=vr(e),n=Vn(e,t);if(n!==null){var r=lt();ln(n,e,t,r)}Im(e,t)}};t1=function(){return se};n1=function(e,t){var n=se;try{return se=e,t()}finally{se=n}};ih=function(e,t,n){switch(t){case"input":if(Xf(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=xc(r);if(!i)throw Error(k(90));Aw(r),Xf(r,i)}}}break;case"textarea":Lw(e,n);break;case"select":t=n.value,t!=null&&os(e,!!n.multiple,t,!1)}};Bw=Em;Vw=vi;var JI={usingClientEntryPoint:!1,Events:[Na,Yi,xc,zw,Uw,Em]},io={findFiberByHostInstance:Zr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ZI={bundleType:io.bundleType,version:io.version,rendererPackageName:io.rendererPackageName,rendererConfig:io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Gw(e),e===null?null:e.stateNode},findFiberByHostInstance:io.findFiberByHostInstance||QI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fl.isDisabled&&fl.supportsFiber)try{yc=fl.inject(ZI),xn=fl}catch{}}Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JI;Dt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Om(t))throw Error(k(200));return qI(e,t,null,n)};Dt.createRoot=function(e,t){if(!Om(e))throw Error(k(299));var n=!1,r="",i=Tx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=km(e,1,!1,null,null,n,!1,r,i),e[Bn]=t.current,qo(e.nodeType===8?e.parentNode:e),new Pm(t)};Dt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Gw(t),e=e===null?null:e.stateNode,e};Dt.flushSync=function(e){return vi(e)};Dt.hydrate=function(e,t,n){if(!Oc(t))throw Error(k(200));return Rc(null,e,t,!0,n)};Dt.hydrateRoot=function(e,t,n){if(!Om(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Tx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Cx(t,null,e,1,n??null,i,!1,s,o),e[Bn]=t.current,qo(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Pc(t)};Dt.render=function(e,t,n){if(!Oc(t))throw Error(k(200));return Rc(null,e,t,!1,n)};Dt.unmountComponentAtNode=function(e){if(!Oc(e))throw Error(k(40));return e._reactRootContainer?(vi(function(){Rc(null,null,e,!1,function(){e._reactRootContainer=null,e[Bn]=null})}),!0):!1};Dt.unstable_batchedUpdates=Em;Dt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Oc(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Rc(e,t,n,!1,r)};Dt.version="18.2.0-next-9e3b772b8-20220608";function bx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bx)}catch(e){console.error(e)}}bx(),Cw.exports=Dt;var kx=Cw.exports,xv=kx;Wf.createRoot=xv.createRoot,Wf.hydrateRoot=xv.hydrateRoot;var mt=function(){return mt=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},mt.apply(this,arguments)};function Rm(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Ou(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}function Ix(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var eP=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,tP=Ix(function(e){return eP.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),he="-ms-",Ro="-moz-",ee="-webkit-",Px="comm",Nc="rule",Nm="decl",nP="@import",Ox="@keyframes",rP="@layer",iP=Math.abs,Am=String.fromCharCode,$h=Object.assign;function sP(e,t){return $e(e,0)^45?(((t<<2^$e(e,0))<<2^$e(e,1))<<2^$e(e,2))<<2^$e(e,3):0}function Rx(e){return e.trim()}function Rn(e,t){return(e=t.exec(e))?e[0]:e}function V(e,t,n){return e.replace(t,n)}function Ml(e,t){return e.indexOf(t)}function $e(e,t){return e.charCodeAt(t)|0}function Cs(e,t,n){return e.slice(t,n)}function yn(e){return e.length}function Nx(e){return e.length}function vo(e,t){return t.push(e),e}function oP(e,t){return e.map(t).join("")}function Sv(e,t){return e.filter(function(n){return!Rn(n,t)})}var Ac=1,Ts=1,Ax=0,Ht=0,be=0,Vs="";function Dc(e,t,n,r,i,s,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Ac,column:Ts,length:o,return:"",siblings:a}}function er(e,t){return $h(Dc("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ji(e){for(;e.root;)e=er(e.root,{children:[e]});vo(e,e.siblings)}function aP(){return be}function lP(){return be=Ht>0?$e(Vs,--Ht):0,Ts--,be===10&&(Ts=1,Ac--),be}function un(){return be=Ht<Ax?$e(Vs,Ht++):0,Ts++,be===10&&(Ts=1,Ac++),be}function li(){return $e(Vs,Ht)}function jl(){return Ht}function Lc(e,t){return Cs(Vs,e,t)}function Mh(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function uP(e){return Ac=Ts=1,Ax=yn(Vs=e),Ht=0,[]}function cP(e){return Vs="",e}function nf(e){return Rx(Lc(Ht-1,jh(e===91?e+2:e===40?e+1:e)))}function dP(e){for(;(be=li())&&be<33;)un();return Mh(e)>2||Mh(be)>3?"":" "}function fP(e,t){for(;--t&&un()&&!(be<48||be>102||be>57&&be<65||be>70&&be<97););return Lc(e,jl()+(t<6&&li()==32&&un()==32))}function jh(e){for(;un();)switch(be){case e:return Ht;case 34:case 39:e!==34&&e!==39&&jh(be);break;case 40:e===41&&jh(e);break;case 92:un();break}return Ht}function hP(e,t){for(;un()&&e+be!==47+10;)if(e+be===42+42&&li()===47)break;return"/*"+Lc(t,Ht-1)+"*"+Am(e===47?e:un())}function pP(e){for(;!Mh(li());)un();return Lc(e,Ht)}function mP(e){return cP(zl("",null,null,null,[""],e=uP(e),0,[0],e))}function zl(e,t,n,r,i,s,o,a,l){for(var u=0,c=0,d=o,f=0,g=0,y=0,_=1,w=1,p=1,h=0,v="",x=i,E=s,C=r,S=v;w;)switch(y=h,h=un()){case 40:if(y!=108&&$e(S,d-1)==58){Ml(S+=V(nf(h),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:S+=nf(h);break;case 9:case 10:case 13:case 32:S+=dP(y);break;case 92:S+=fP(jl()-1,7);continue;case 47:switch(li()){case 42:case 47:vo(gP(hP(un(),jl()),t,n,l),l);break;default:S+="/"}break;case 123*_:a[u++]=yn(S)*p;case 125*_:case 59:case 0:switch(h){case 0:case 125:w=0;case 59+c:p==-1&&(S=V(S,/\f/g,"")),g>0&&yn(S)-d&&vo(g>32?Cv(S+";",r,n,d-1,l):Cv(V(S," ","")+";",r,n,d-2,l),l);break;case 59:S+=";";default:if(vo(C=Ev(S,t,n,u,c,i,a,v,x=[],E=[],d,s),s),h===123)if(c===0)zl(S,t,C,C,x,s,d,a,E);else switch(f===99&&$e(S,3)===110?100:f){case 100:case 108:case 109:case 115:zl(e,C,C,r&&vo(Ev(e,C,C,0,0,i,a,v,i,x=[],d,E),E),i,E,d,a,r?x:E);break;default:zl(S,C,C,C,[""],E,0,a,E)}}u=c=g=0,_=p=1,v=S="",d=o;break;case 58:d=1+yn(S),g=y;default:if(_<1){if(h==123)--_;else if(h==125&&_++==0&&lP()==125)continue}switch(S+=Am(h),h*_){case 38:p=c>0?1:(S+="\f",-1);break;case 44:a[u++]=(yn(S)-1)*p,p=1;break;case 64:li()===45&&(S+=nf(un())),f=li(),c=d=yn(v=S+=pP(jl())),h++;break;case 45:y===45&&yn(S)==2&&(_=0)}}return s}function Ev(e,t,n,r,i,s,o,a,l,u,c,d){for(var f=i-1,g=i===0?s:[""],y=Nx(g),_=0,w=0,p=0;_<r;++_)for(var h=0,v=Cs(e,f+1,f=iP(w=o[_])),x=e;h<y;++h)(x=Rx(w>0?g[h]+" "+v:V(v,/&\f/g,g[h])))&&(l[p++]=x);return Dc(e,t,n,i===0?Nc:a,l,u,c,d)}function gP(e,t,n,r){return Dc(e,t,n,Px,Am(aP()),Cs(e,2,-2),0,r)}function Cv(e,t,n,r,i){return Dc(e,t,n,Nm,Cs(e,0,r),Cs(e,r+1,-1),r,i)}function Dx(e,t,n){switch(sP(e,t)){case 5103:return ee+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ee+e+e;case 4789:return Ro+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ee+e+Ro+e+he+e+e;case 5936:switch($e(e,t+11)){case 114:return ee+e+he+V(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ee+e+he+V(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ee+e+he+V(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ee+e+he+e+e;case 6165:return ee+e+he+"flex-"+e+e;case 5187:return ee+e+V(e,/(\w+).+(:[^]+)/,ee+"box-$1$2"+he+"flex-$1$2")+e;case 5443:return ee+e+he+"flex-item-"+V(e,/flex-|-self/g,"")+(Rn(e,/flex-|baseline/)?"":he+"grid-row-"+V(e,/flex-|-self/g,""))+e;case 4675:return ee+e+he+"flex-line-pack"+V(e,/align-content|flex-|-self/g,"")+e;case 5548:return ee+e+he+V(e,"shrink","negative")+e;case 5292:return ee+e+he+V(e,"basis","preferred-size")+e;case 6060:return ee+"box-"+V(e,"-grow","")+ee+e+he+V(e,"grow","positive")+e;case 4554:return ee+V(e,/([^-])(transform)/g,"$1"+ee+"$2")+e;case 6187:return V(V(V(e,/(zoom-|grab)/,ee+"$1"),/(image-set)/,ee+"$1"),e,"")+e;case 5495:case 3959:return V(e,/(image-set\([^]*)/,ee+"$1$`$1");case 4968:return V(V(e,/(.+:)(flex-)?(.*)/,ee+"box-pack:$3"+he+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ee+e+e;case 4200:if(!Rn(e,/flex-|baseline/))return he+"grid-column-align"+Cs(e,t)+e;break;case 2592:case 3360:return he+V(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Rn(r.props,/grid-\w+-end/)})?~Ml(e+(n=n[t].value),"span")?e:he+V(e,"-start","")+e+he+"grid-row-span:"+(~Ml(n,"span")?Rn(n,/\d+/):+Rn(n,/\d+/)-+Rn(e,/\d+/))+";":he+V(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Rn(r.props,/grid-\w+-start/)})?e:he+V(V(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return V(e,/(.+)-inline(.+)/,ee+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(yn(e)-1-t>6)switch($e(e,t+1)){case 109:if($e(e,t+4)!==45)break;case 102:return V(e,/(.+:)(.+)-([^]+)/,"$1"+ee+"$2-$3$1"+Ro+($e(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ml(e,"stretch")?Dx(V(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return V(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return he+i+":"+s+u+(o?he+i+"-span:"+(a?l:+l-+s)+u:"")+e});case 4949:if($e(e,t+6)===121)return V(e,":",":"+ee)+e;break;case 6444:switch($e(e,$e(e,14)===45?18:11)){case 120:return V(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ee+($e(e,14)===45?"inline-":"")+"box$3$1"+ee+"$2$3$1"+he+"$2box$3")+e;case 100:return V(e,":",":"+he)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return V(e,"scroll-","scroll-snap-")+e}return e}function Ru(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function yP(e,t,n,r){switch(e.type){case rP:if(e.children.length)break;case nP:case Nm:return e.return=e.return||e.value;case Px:return"";case Ox:return e.return=e.value+"{"+Ru(e.children,r)+"}";case Nc:if(!yn(e.value=e.props.join(",")))return""}return yn(n=Ru(e.children,r))?e.return=e.value+"{"+n+"}":""}function vP(e){var t=Nx(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}function _P(e){return function(t){t.root||(t=t.return)&&e(t)}}function wP(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Nm:e.return=Dx(e.value,e.length,n);return;case Ox:return Ru([er(e,{value:V(e.value,"@","@"+ee)})],r);case Nc:if(e.length)return oP(n=e.props,function(i){switch(Rn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ji(er(e,{props:[V(i,/:(read-\w+)/,":"+Ro+"$1")]})),ji(er(e,{props:[i]})),$h(e,{props:Sv(n,r)});break;case"::placeholder":ji(er(e,{props:[V(i,/:(plac\w+)/,":"+ee+"input-$1")]})),ji(er(e,{props:[V(i,/:(plac\w+)/,":"+Ro+"$1")]})),ji(er(e,{props:[V(i,/:(plac\w+)/,he+"input-$1")]})),ji(er(e,{props:[i]})),$h(e,{props:Sv(n,r)});break}return""})}}var Lx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},bs=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Dm=typeof window<"u"&&"HTMLElement"in window,xP=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Fc=Object.freeze([]),ks=Object.freeze({});function SP(e,t,n){return n===void 0&&(n=ks),e.theme!==n.theme&&e.theme||t||n.theme}var Fx=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),EP=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,CP=/(^-|-$)/g;function Tv(e){return e.replace(EP,"-").replace(CP,"")}var TP=/(a)(d)/gi,bv=function(e){return String.fromCharCode(e+(e>25?39:97))};function zh(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=bv(t%52)+n;return(bv(t%52)+n).replace(TP,"$1-$2")}var rf,ts=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},$x=function(e){return ts(5381,e)};function bP(e){return zh($x(e)>>>0)}function kP(e){return e.displayName||e.name||"Component"}function sf(e){return typeof e=="string"&&!0}var Mx=typeof Symbol=="function"&&Symbol.for,jx=Mx?Symbol.for("react.memo"):60115,IP=Mx?Symbol.for("react.forward_ref"):60112,PP={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},OP={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},zx={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},RP=((rf={})[IP]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},rf[jx]=zx,rf);function kv(e){return("type"in(t=e)&&t.type.$$typeof)===jx?zx:"$$typeof"in e?RP[e.$$typeof]:PP;var t}var NP=Object.defineProperty,AP=Object.getOwnPropertyNames,Iv=Object.getOwnPropertySymbols,DP=Object.getOwnPropertyDescriptor,LP=Object.getPrototypeOf,Pv=Object.prototype;function Ux(e,t,n){if(typeof t!="string"){if(Pv){var r=LP(t);r&&r!==Pv&&Ux(e,r,n)}var i=AP(t);Iv&&(i=i.concat(Iv(t)));for(var s=kv(e),o=kv(t),a=0;a<i.length;++a){var l=i[a];if(!(l in OP||n&&n[l]||o&&l in o||s&&l in s)){var u=DP(t,l);try{NP(e,l,u)}catch{}}}}return e}function Is(e){return typeof e=="function"}function Lm(e){return typeof e=="object"&&"styledComponentId"in e}function ni(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ov(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function ia(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Uh(e,t,n){if(n===void 0&&(n=!1),!n&&!ia(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Uh(e[r],t[r]);else if(ia(t))for(var r in t)e[r]=Uh(e[r],t[r]);return e}function Fm(e,t){Object.defineProperty(e,"toString",{value:t})}function Da(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var FP=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;t>=s;)if((s<<=1)<0)throw Da(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},e}(),Ul=new Map,Nu=new Map,of=1,hl=function(e){if(Ul.has(e))return Ul.get(e);for(;Nu.has(of);)of++;var t=of++;return Ul.set(e,t),Nu.set(t,e),t},$P=function(e,t){Ul.set(e,t),Nu.set(t,e)},MP="style[".concat(bs,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),jP=new RegExp("^".concat(bs,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),zP=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},UP=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(jP);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&($P(c,u),zP(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function BP(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Bx=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(bs,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(bs,"active"),r.setAttribute("data-styled-version","6.0.7");var o=BP();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},VP=function(){function e(t){this.element=Bx(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Da(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),WP=function(){function e(t){this.element=Bx(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),HP=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Rv=Dm,GP={isServer:!Dm,useCSSOMInjection:!xP},Vx=function(){function e(t,n,r){t===void 0&&(t=ks),n===void 0&&(n={});var i=this;this.options=mt(mt({},GP),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Dm&&Rv&&(Rv=!1,function(s){for(var o=document.querySelectorAll(MP),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(bs)!=="active"&&(UP(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Fm(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(d){var f=function(p){return Nu.get(p)}(d);if(f===void 0)return"continue";var g=s.names.get(f),y=o.getGroup(d);if(g===void 0||y.length===0)return"continue";var _="".concat(bs,".g").concat(d,'[id="').concat(f,'"]'),w="";g!==void 0&&g.forEach(function(p){p.length>0&&(w+="".concat(p,","))}),l+="".concat(y).concat(_,'{content:"').concat(w,'"}').concat(`/*!sc*/
`)},c=0;c<a;c++)u(c);return l}(i)})}return e.registerId=function(t){return hl(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(mt(mt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new HP(i):r?new VP(i):new WP(i)}(this.options),new FP(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(hl(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(hl(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(hl(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),KP=/&/g,YP=/^\s*\/\/.*$/gm;function Wx(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Wx(n.children,t)),n})}function qP(e){var t,n,r,i=e===void 0?ks:e,s=i.options,o=s===void 0?ks:s,a=i.plugins,l=a===void 0?Fc:a,u=function(f,g,y){return y===n||y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):f},c=l.slice();c.push(function(f){f.type===Nc&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(KP,n).replace(r,u))}),o.prefix&&c.push(wP),c.push(yP);var d=function(f,g,y,_){g===void 0&&(g=""),y===void 0&&(y=""),_===void 0&&(_="&"),t=_,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var w=f.replace(YP,""),p=mP(y||g?"".concat(y," ").concat(g," { ").concat(w," }"):w);o.namespace&&(p=Wx(p,o.namespace));var h=[];return Ru(p,vP(c.concat(_P(function(v){return h.push(v)})))),h};return d.hash=l.length?l.reduce(function(f,g){return g.name||Da(15),ts(f,g.name)},5381).toString():"",d}var QP=new Vx,Bh=qP(),Hx=at.createContext({shouldForwardProp:void 0,styleSheet:QP,stylis:Bh});Hx.Consumer;at.createContext(void 0);function Nv(){return T.useContext(Hx)}var XP=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Bh);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Fm(this,function(){throw Da(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Bh),this.name+t.hash},e}(),JP=function(e){return e>="A"&&e<="Z"};function Av(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;JP(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Gx=function(e){return e==null||e===!1||e===""},Kx=function(e){var t,n,r=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!Gx(s)&&(Array.isArray(s)&&s.isCss||Is(s)?r.push("".concat(Av(i),":"),s,";"):ia(s)?r.push.apply(r,Ou(Ou(["".concat(i," {")],Kx(s),!1),["}"],!1)):r.push("".concat(Av(i),": ").concat((t=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Lx||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ui(e,t,n,r){if(Gx(e))return[];if(Lm(e))return[".".concat(e.styledComponentId)];if(Is(e)){if(!Is(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return ui(i,t,n,r)}var s;return e instanceof XP?n?(e.inject(n,r),[e.getName(r)]):[e]:ia(e)?Kx(e):Array.isArray(e)?Array.prototype.concat.apply(Fc,e.map(function(o){return ui(o,t,n,r)})):[e.toString()]}function ZP(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Is(n)&&!Lm(n))return!1}return!0}var eO=$x("6.0.7"),tO=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&ZP(t),this.componentId=n,this.baseHash=ts(eO,n),this.baseStyle=r,Vx.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ni(i,this.staticRulesId);else{var s=Ov(ui(this.rules,t,n,r)),o=zh(ts(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=ni(i,o),this.staticRulesId=o}else{for(var l=ts(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var f=Ov(ui(d,t,n,r));l=ts(l,f),u+=f}}if(u){var g=zh(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=ni(i,g)}}return i},e}(),Yx=at.createContext(void 0);Yx.Consumer;var af={};function nO(e,t,n){var r=Lm(e),i=e,s=!sf(e),o=t.attrs,a=o===void 0?Fc:o,l=t.componentId,u=l===void 0?function(v,x){var E=typeof v!="string"?"sc":Tv(v);af[E]=(af[E]||0)+1;var C="".concat(E,"-").concat(bP("6.0.7"+E+af[E]));return x?"".concat(x,"-").concat(C):C}(t.displayName,t.parentComponentId):l,c=t.displayName;c===void 0&&function(v){return sf(v)?"styled.".concat(v):"Styled(".concat(kP(v),")")}(e);var d=t.displayName&&t.componentId?"".concat(Tv(t.displayName),"-").concat(t.componentId):t.componentId||u,f=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,g=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var _=t.shouldForwardProp;g=function(v,x){return y(v,x)&&_(v,x)}}else g=y}var w=new tO(n,d,r?i.componentStyle:void 0);function p(v,x){return function(E,C,S){var O=E.attrs,$=E.componentStyle,F=E.defaultProps,B=E.foldedComponentIds,Ye=E.styledComponentId,te=E.target,rt=at.useContext(Yx),Kt=Nv(),Yt=E.shouldForwardProp||Kt.shouldForwardProp,ve=function($t,Ue,it){for(var qe,Qe=mt(mt({},Ue),{className:void 0,theme:it}),$i=0;$i<$t.length;$i+=1){var Vr=Is(qe=$t[$i])?qe(Qe):qe;for(var qt in Vr)Qe[qt]=qt==="className"?ni(Qe[qt],Vr[qt]):qt==="style"?mt(mt({},Qe[qt]),Vr[qt]):Vr[qt]}return Ue.className&&(Qe.className=ni(Qe.className,Ue.className)),Qe}(O,C,SP(C,rt,F)||ks),R=ve.as||te,j={};for(var z in ve)ve[z]===void 0||z[0]==="$"||z==="as"||z==="theme"||(z==="forwardedAs"?j.as=ve.forwardedAs:Yt&&!Yt(z,R)||(j[z]=ve[z]));var ne=function($t,Ue){var it=Nv(),qe=$t.generateAndInjectStyles(Ue,it.styleSheet,it.stylis);return qe}($,ve),re=ni(B,Ye);return ne&&(re+=" "+ne),ve.className&&(re+=" "+ve.className),j[sf(R)&&!Fx.has(R)?"class":"className"]=re,j.ref=S,T.createElement(R,j)}(h,v,x)}var h=at.forwardRef(p);return h.attrs=f,h.componentStyle=w,h.shouldForwardProp=g,h.foldedComponentIds=r?ni(i.foldedComponentIds,i.styledComponentId):"",h.styledComponentId=d,h.target=r?i.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(x){for(var E=[],C=1;C<arguments.length;C++)E[C-1]=arguments[C];for(var S=0,O=E;S<O.length;S++)Uh(x,O[S],!0);return x}({},i.defaultProps,v):v}}),Fm(h,function(){return".".concat(h.styledComponentId)}),s&&Ux(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function Dv(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Lv=function(e){return Object.assign(e,{isCss:!0})};function rO(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Is(e)||ia(e)){var r=e;return Lv(ui(Dv(Fc,Ou([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?ui(i):Lv(ui(Dv(i,t)))}function Vh(e,t,n){if(n===void 0&&(n=ks),!t)throw Da(1,t);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return e(t,n,rO.apply(void 0,Ou([i],s,!1)))};return r.attrs=function(i){return Vh(e,t,mt(mt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Vh(e,t,mt(mt({},n),i))},r}var qx=function(e){return Vh(nO,e)},L=qx;Fx.forEach(function(e){L[e]=qx(e)});const iO=L.header`
  padding: 20px 0px;
`,sO=L.div`
  display: none;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: flex;
    max-width: 768px;
    padding: 0 32px;
  }

  @media (min-width: 1280px) {
    max-width: 1184px;
    padding: 0 16px;
  }
`,oO=L.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: none;
    max-width: 768px;
    padding: 0 32px;
  }

  @media (min-width: 1280px) {
    max-width: 1184px;
    padding: 0 16px;
  }
`,Fv=L.svg`
  width: 28px;
  height: 28px;
`,$v=L(Pa)`
  display: flex;
  gap: 0px 8px;
  align-items: center;
`,Mv=L.span`
  color: #121417;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 120% */
  letter-spacing: -0.4px;
`,aO=L.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`,lO=L(Pa)`
  display: flex;
  align-items: center;
  gap: 0px 8px;

  color: var(--secondary);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25;
  transition: color 300ms;
  &:hover {
    color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  }
`,uO=L.button`
  color: var(--background);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25;

  padding: 14px 39px;
  border-radius: 12px;
  background: var(--secondary);
  border: none;
  transition: all 300ms;
  &:hover {
    color: black;
    background-color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  }
`,Qx=L.svg`
  stroke: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  width: 20px;
  height: 20px;
`,cO=L.div`
  position: fixed;
  top: ${({top:e})=>e?"0px":"50%"};
  left: ${({top:e})=>e?"0px":"50%"};
  width: 100%;
  height: ${({top:e})=>e?void 0:" 100vh"};
  background-color: rgba(33, 33, 33, 0.12);
  transform: ${({top:e})=>e?void 0:"translate(-50%, -50%)"};
  overflow: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;function ns({state:e,children:t,onClose:n,top:r}){T.useEffect(()=>window.addEventListener("keydown",i),[]),T.useLayoutEffect(()=>()=>{window.removeEventListener("keydown",i)},[]);const i=a=>{a.code==="Escape"&&(s.classList.remove("modal-open"),n(!1))};let s=document.querySelector("body");e&&s.classList.add("modal-open");const o=a=>{a.currentTarget===a.target&&(s.classList.remove("modal-open"),n(!1))};return kx.createPortal(m.jsx(cO,{onClick:o,top:r,children:t}),document.getElementById("modal-root"))}function Oi(e){this._maxSize=e,this.clear()}Oi.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Oi.prototype.get=function(e){return this._values[e]};Oi.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var dO=/[^.^\]^[]+|(?=\[\]|\.\.)/g,Xx=/^\d+$/,fO=/^\d/,hO=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,pO=/^\s*(['"]?)(.*?)(\1)\s*$/,$m=512,jv=new Oi($m),zv=new Oi($m),Uv=new Oi($m),ci={Cache:Oi,split:Wh,normalizePath:lf,setter:function(e){var t=lf(e);return zv.get(e)||zv.set(e,function(r,i){for(var s=0,o=t.length,a=r;s<o-1;){var l=t[s];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;a=a[t[s++]]}a[t[s]]=i})},getter:function(e,t){var n=lf(e);return Uv.get(e)||Uv.set(e,function(i){for(var s=0,o=n.length;s<o;)if(i!=null||!t)i=i[n[s++]];else return;return i})},join:function(e){return e.reduce(function(t,n){return t+(Mm(n)||Xx.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){mO(Array.isArray(e)?e:Wh(e),t,n)}};function lf(e){return jv.get(e)||jv.set(e,Wh(e).map(function(t){return t.replace(pO,"$2")}))}function Wh(e){return e.match(dO)||[""]}function mO(e,t,n){var r=e.length,i,s,o,a;for(s=0;s<r;s++)i=e[s],i&&(vO(i)&&(i='"'+i+'"'),a=Mm(i),o=!a&&/^\d+$/.test(i),t.call(n,i,a,o,s,e))}function Mm(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function gO(e){return e.match(fO)&&!e.match(Xx)}function yO(e){return hO.test(e)}function vO(e){return!Mm(e)&&(gO(e)||yO(e))}const _O=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,$c=e=>e.match(_O)||[],Mc=e=>e[0].toUpperCase()+e.slice(1),jm=(e,t)=>$c(e).join(t).toLowerCase(),Jx=e=>$c(e).reduce((t,n)=>`${t}${t?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),wO=e=>Mc(Jx(e)),xO=e=>jm(e,"_"),SO=e=>jm(e,"-"),EO=e=>Mc(jm(e," ")),CO=e=>$c(e).map(Mc).join(" ");var uf={words:$c,upperFirst:Mc,camelCase:Jx,pascalCase:wO,snakeCase:xO,kebabCase:SO,sentenceCase:EO,titleCase:CO},zm={exports:{}};zm.exports=function(e){return Zx(TO(e),e)};zm.exports.array=Zx;function Zx(e,t){var n=e.length,r=new Array(n),i={},s=n,o=bO(t),a=kO(e);for(t.forEach(function(u){if(!a.has(u[0])||!a.has(u[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});s--;)i[s]||l(e[s],s,new Set);return r;function l(u,c,d){if(d.has(u)){var f;try{f=", node was:"+JSON.stringify(u)}catch{f=""}throw new Error("Cyclic dependency"+f)}if(!a.has(u))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(u));if(!i[c]){i[c]=!0;var g=o.get(u)||new Set;if(g=Array.from(g),c=g.length){d.add(u);do{var y=g[--c];l(y,a.get(y),d)}while(c);d.delete(u)}r[--n]=u}}}function TO(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var i=e[n];t.add(i[0]),t.add(i[1])}return Array.from(t)}function bO(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var i=e[n];t.has(i[0])||t.set(i[0],new Set),t.has(i[1])||t.set(i[1],new Set),t.get(i[0]).add(i[1])}return t}function kO(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}var IO=zm.exports;const PO=Rp(IO),OO=Object.prototype.toString,RO=Error.prototype.toString,NO=RegExp.prototype.toString,AO=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",DO=/^Symbol\((.*)\)(.*)$/;function LO(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function Bv(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return LO(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return AO.call(e).replace(DO,"Symbol($1)");const r=OO.call(e).slice(8,-1);return r==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):r==="Error"||e instanceof Error?"["+RO.call(e)+"]":r==="RegExp"?NO.call(e):null}function wr(e,t){let n=Bv(e,t);return n!==null?n:JSON.stringify(e,function(r,i){let s=Bv(this[r],t);return s!==null?s:i},2)}function eS(e){return e==null?[]:[].concat(e)}let tS,FO=/\$\{\s*(\w+)\s*\}/g;tS=Symbol.toStringTag;class ht extends Error{static formatError(t,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof t=="string"?t.replace(FO,(i,s)=>wr(n[s])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,r,i,s){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this[tS]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],eS(t).forEach(o=>{if(ht.isError(o)){this.errors.push(...o.errors);const a=o.inner.length?o.inner:[o];this.inner.push(...a)}else this.errors.push(o)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],!s&&Error.captureStackTrace&&Error.captureStackTrace(this,ht)}}let gn={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${wr(r,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${wr(n,!0)}\``+i:`${e} must match the configured type. The validated value was: \`${wr(n,!0)}\``+i}},Xt={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},$O={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},Hh={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},MO={isValue:"${path} field must be ${value}"},Gh={noUnknown:"${path} field has unspecified keys: ${unknown}"},jO={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},zO={notType:e=>{const{path:t,value:n,spec:r}=e,i=r.types.length;if(Array.isArray(n)){if(n.length<i)return`${t} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${wr(n,!0)}\``;if(n.length>i)return`${t} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${wr(n,!0)}\``}return ht.formatError(gn.notType,e)}};Object.assign(Object.create(null),{mixed:gn,string:Xt,number:$O,date:Hh,object:Gh,array:jO,boolean:MO,tuple:zO});const Um=e=>e&&e.__isYupSchema__;class Au{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:s}=n,o=typeof r=="function"?r:(...a)=>a.every(l=>l===r);return new Au(t,(a,l)=>{var u;let c=o(...a)?i:s;return(u=c==null?void 0:c(l))!=null?u:l})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let r=this.refs.map(s=>s.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,t,n);if(i===void 0||i===t)return t;if(!Um(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const pl={context:"$",value:"."};class Ri{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===pl.context,this.isValue=this.key[0]===pl.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?pl.context:this.isValue?pl.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&ci.getter(this.path,!0),this.map=n.map}getValue(t,n,r){let i=this.isContext?r:this.isValue?t:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}Ri.prototype.__isYupRef=!0;const ri=e=>e==null;function zi(e){function t({value:n,path:r="",options:i,originalValue:s,schema:o},a,l){const{name:u,test:c,params:d,message:f,skipAbsent:g}=e;let{parent:y,context:_,abortEarly:w=o.spec.abortEarly,disableStackTrace:p=o.spec.disableStackTrace}=i;function h(B){return Ri.isRef(B)?B.getValue(n,y,_):B}function v(B={}){var Ye;const te=Object.assign({value:n,originalValue:s,label:o.spec.label,path:B.path||r,spec:o.spec},d,B.params);for(const Kt of Object.keys(te))te[Kt]=h(te[Kt]);const rt=new ht(ht.formatError(B.message||f,te),n,te.path,B.type||u,(Ye=B.disableStackTrace)!=null?Ye:p);return rt.params=te,rt}const x=w?a:l;let E={path:r,parent:y,type:u,from:i.from,createError:v,resolve:h,options:i,originalValue:s,schema:o};const C=B=>{ht.isError(B)?x(B):B?l(null):x(v())},S=B=>{ht.isError(B)?x(B):a(B)};if(g&&ri(n))return C(!0);let $;try{var F;if($=c.call(E,n,E),typeof((F=$)==null?void 0:F.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${E.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve($).then(C,S)}}catch(B){S(B);return}C($)}return t.OPTIONS=e,t}function UO(e,t,n,r=n){let i,s,o;return t?(ci.forEach(t,(a,l,u)=>{let c=l?a.slice(1,a.length-1):a;e=e.resolve({context:r,parent:i,value:n});let d=e.type==="tuple",f=u?parseInt(c,10):0;if(e.innerType||d){if(d&&!u)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);if(n&&f>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${t}. because there is no value at that index. `);i=n,n=n&&n[f],e=d?e.spec.types[f]:e.innerType}if(!u){if(!e.fields||!e.fields[c])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${o} which is a type: "${e.type}")`);i=n,n=n&&n[c],e=e.fields[c]}s=c,o=l?"["+a+"]":"."+a}),{schema:e,parent:i,parentPath:s}):{parent:i,parentPath:t,schema:e}}class Du extends Set{describe(){const t=[];for(const n of this.values())t.push(Ri.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const r of this.values())n.push(t(r));return n}clone(){return new Du(this.values())}merge(t,n){const r=this.clone();return t.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function rs(e,t=new Map){if(Um(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=rs(e[r],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[r,i]of e.entries())n.set(r,rs(i,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const r of e)n.add(rs(r,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[r,i]of Object.entries(e))n[r]=rs(i,t)}else throw Error(`Unable to clone ${e}`);return n}class Cn{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new Du,this._blacklist=new Du,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(gn.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=rs(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let r=t(this);return this._mutate=n,r}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,r=t.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),r._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(s=>{t.tests.forEach(o=>{s.test(o.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,s)=>s.resolve(i,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,r,i,s;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(r=t.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=t.recursive)!=null?i:this.spec.recursive,disableStackTrace:(s=t.disableStackTrace)!=null?s:this.spec.disableStackTrace})}cast(t,n={}){let r=this.resolve(Object.assign({value:t},n)),i=n.assert==="ignore-optionality",s=r._cast(t,n);if(n.assert!==!1&&!r.isType(s)){if(i&&ri(s))return s;let o=wr(t),a=wr(s);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${o} 
`+(a!==o?`result of cast: ${a}`:""))}return s}_cast(t,n){let r=t===void 0?t:this.transforms.reduce((i,s)=>s.call(this,i,t,this),t);return r===void 0&&(r=this.getDefault(n)),r}_validate(t,n={},r,i){let{path:s,originalValue:o=t,strict:a=this.spec.strict}=n,l=t;a||(l=this._cast(l,Object.assign({assert:!1},n)));let u=[];for(let c of Object.values(this.internalTests))c&&u.push(c);this.runTests({path:s,value:l,originalValue:o,options:n,tests:u},r,c=>{if(c.length)return i(c,l);this.runTests({path:s,value:l,originalValue:o,options:n,tests:this.tests},r,i)})}runTests(t,n,r){let i=!1,{tests:s,value:o,originalValue:a,path:l,options:u}=t,c=_=>{i||(i=!0,n(_,o))},d=_=>{i||(i=!0,r(_,o))},f=s.length,g=[];if(!f)return d([]);let y={value:o,originalValue:a,path:l,options:u,schema:this};for(let _=0;_<s.length;_++){const w=s[_];w(y,c,function(h){h&&(Array.isArray(h)?g.push(...h):g.push(h)),--f<=0&&d(g)})}}asNestedTest({key:t,index:n,parent:r,parentPath:i,originalParent:s,options:o}){const a=t??n;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof a=="number";let u=r[a];const c=Object.assign({},o,{strict:!0,parent:r,value:u,originalValue:s[a],key:void 0,[l?"index":"key"]:a,path:l||a.includes(".")?`${i||""}[${u?a:`"${a}"`}]`:(i?`${i}.`:"")+t});return(d,f,g)=>this.resolve(c)._validate(u,c,f,g)}validate(t,n){var r;let i=this.resolve(Object.assign({},n,{value:t})),s=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return new Promise((o,a)=>i._validate(t,n,(l,u)=>{ht.isError(l)&&(l.value=u),a(l)},(l,u)=>{l.length?a(new ht(l,u,void 0,void 0,s)):o(u)}))}validateSync(t,n){var r;let i=this.resolve(Object.assign({},n,{value:t})),s,o=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return i._validate(t,Object.assign({},n,{sync:!0}),(a,l)=>{throw ht.isError(a)&&(a.value=l),a},(a,l)=>{if(a.length)throw new ht(a,t,void 0,void 0,o);s=l}),s}isValid(t,n){return this.validate(t,n).then(()=>!0,r=>{if(ht.isError(r))return!1;throw r})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(r){if(ht.isError(r))return!1;throw r}}_getDefault(t){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,t):rs(n)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const r=this.clone({nullable:t});return r.internalTests.nullable=zi({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(t,n){const r=this.clone({optional:t});return r.internalTests.optionality=zi({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(t=gn.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=gn.notNull){return this.nullability(!1,t)}required(t=gn.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=gn.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=zi(n),s=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(o=>!(o.OPTIONS.name===n.name&&(s||o.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let r=this.clone(),i=eS(t).map(s=>new Ri(s));return i.forEach(s=>{s.isSibling&&r.deps.push(s.key)}),r.conditions.push(typeof n=="function"?new Au(i,n):Au.fromOptions(i,n)),r}typeError(t){let n=this.clone();return n.internalTests.typeError=zi({message:t,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(t,n=gn.oneOf){let r=this.clone();return t.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=zi({message:n,name:"oneOf",skipAbsent:!0,test(i){let s=this.schema._whitelist,o=s.resolveAll(this.resolve);return o.includes(i)?!0:this.createError({params:{values:Array.from(s).join(", "),resolved:o}})}}),r}notOneOf(t,n=gn.notOneOf){let r=this.clone();return t.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=zi({message:n,name:"notOneOf",test(i){let s=this.schema._blacklist,o=s.resolveAll(this.resolve);return o.includes(i)?this.createError({params:{values:Array.from(s).join(", "),resolved:o}}):!0}}),r}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:r,meta:i,optional:s,nullable:o}=n.spec;return{meta:i,label:r,optional:s,nullable:o,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,u,c)=>c.findIndex(d=>d.name===l.name)===u)}}}Cn.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])Cn.prototype[`${e}At`]=function(t,n,r={}){const{parent:i,parentPath:s,schema:o}=UO(this,t,n,r.context);return o[e](i&&i[s],Object.assign({},r,{parent:i,path:t}))};for(const e of["equals","is"])Cn.prototype[e]=Cn.prototype.oneOf;for(const e of["not","nope"])Cn.prototype[e]=Cn.prototype.notOneOf;let BO=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,VO=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,WO=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,HO=e=>ri(e)||e===e.trim(),GO={}.toString();function jn(){return new nS}class nS extends Cn{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(!r.spec.coerce||r.isType(t)||Array.isArray(t))return t;const i=t!=null&&t.toString?t.toString():t;return i===GO?t:i})})}required(t){return super.required(t).withMutation(n=>n.test({message:t||gn.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(n=>n.OPTIONS.name!=="required"),t))}length(t,n=Xt.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(r){return r.length===this.resolve(t)}})}min(t,n=Xt.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r.length>=this.resolve(t)}})}max(t,n=Xt.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:t},skipAbsent:!0,test(r){return r.length<=this.resolve(t)}})}matches(t,n){let r=!1,i,s;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:s}=n:i=n),this.test({name:s||"matches",message:i||Xt.matches,params:{regex:t},skipAbsent:!0,test:o=>o===""&&r||o.search(t)!==-1})}email(t=Xt.email){return this.matches(BO,{name:"email",message:t,excludeEmptyString:!0})}url(t=Xt.url){return this.matches(VO,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=Xt.uuid){return this.matches(WO,{name:"uuid",message:t,excludeEmptyString:!1})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=Xt.trim){return this.transform(n=>n!=null?n.trim():n).test({message:t,name:"trim",test:HO})}lowercase(t=Xt.lowercase){return this.transform(n=>ri(n)?n:n.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>ri(n)||n===n.toLowerCase()})}uppercase(t=Xt.uppercase){return this.transform(n=>ri(n)?n:n.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>ri(n)||n===n.toUpperCase()})}}jn.prototype=nS.prototype;const KO=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function In(e,t=0){return Number(e)||t}function YO(e){const t=KO.exec(e);if(!t)return Date.parse?Date.parse(e):Number.NaN;const n={year:In(t[1]),month:In(t[2],1)-1,day:In(t[3],1),hour:In(t[4]),minute:In(t[5]),second:In(t[6]),millisecond:t[7]?In(t[7].substring(0,3)):0,z:t[8]||void 0,plusMinus:t[9]||void 0,hourOffset:In(t[10]),minuteOffset:In(t[11])};if(n.z===void 0&&n.plusMinus===void 0)return new Date(n.year,n.month,n.day,n.hour,n.minute,n.second,n.millisecond).valueOf();let r=0;return n.z!=="Z"&&n.plusMinus!==void 0&&(r=n.hourOffset*60+n.minuteOffset,n.plusMinus==="+"&&(r=0-r)),Date.UTC(n.year,n.month,n.day,n.hour,n.minute+r,n.second,n.millisecond)}let qO=new Date(""),QO=e=>Object.prototype.toString.call(e)==="[object Date]";class jc extends Cn{constructor(){super({type:"date",check(t){return QO(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n,r)=>!r.spec.coerce||r.isType(t)||t===null?t:(t=YO(t),isNaN(t)?jc.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let r;if(Ri.isRef(t))r=t;else{let i=this.cast(t);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(t,n=Hh.min){let r=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(t,n=Hh.max){let r=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}jc.INVALID_DATE=qO;jc.prototype;function XO(e,t=[]){let n=[],r=new Set,i=new Set(t.map(([o,a])=>`${o}-${a}`));function s(o,a){let l=ci.split(o)[0];r.add(l),i.has(`${a}-${l}`)||n.push([a,l])}for(const o of Object.keys(e)){let a=e[o];r.add(o),Ri.isRef(a)&&a.isSibling?s(a.path,o):Um(a)&&"deps"in a&&a.deps.forEach(l=>s(l,o))}return PO.array(Array.from(r),n).reverse()}function Vv(e,t){let n=1/0;return e.some((r,i)=>{var s;if((s=t.path)!=null&&s.includes(r))return n=i,!0}),n}function rS(e){return(t,n)=>Vv(e,t)-Vv(e,n)}const JO=(e,t,n)=>{if(typeof e!="string")return e;let r=e;try{r=JSON.parse(e)}catch{}return n.isType(r)?r:e};function Bl(e){if("fields"in e){const t={};for(const[n,r]of Object.entries(e.fields))t[n]=Bl(r);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=Bl(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(Bl)}):"optional"in e?e.optional():e}const ZO=(e,t)=>{const n=[...ci.normalizePath(t)];if(n.length===1)return n[0]in e;let r=n.pop(),i=ci.getter(ci.join(n),!0)(e);return!!(i&&r in i)};let Wv=e=>Object.prototype.toString.call(e)==="[object Object]";function eR(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter(r=>n.indexOf(r)===-1)}const tR=rS([]);function zc(e){return new iS(e)}class iS extends Cn{constructor(t){super({type:"object",check(n){return Wv(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=tR,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,n={}){var r;let i=super._cast(t,n);if(i===void 0)return this.getDefault(n);if(!this._typeCheck(i))return i;let s=this.fields,o=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(i).filter(d=>!this._nodes.includes(d))),l={},u=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),c=!1;for(const d of a){let f=s[d],g=d in i;if(f){let y,_=i[d];u.path=(n.path?`${n.path}.`:"")+d,f=f.resolve({value:_,context:n.context,parent:l});let w=f instanceof Cn?f.spec:void 0,p=w==null?void 0:w.strict;if(w!=null&&w.strip){c=c||d in i;continue}y=!n.__validating||!p?f.cast(i[d],u):i[d],y!==void 0&&(l[d]=y)}else g&&!o&&(l[d]=i[d]);(g!==d in l||l[d]!==i[d])&&(c=!0)}return c?l:i}_validate(t,n={},r,i){let{from:s=[],originalValue:o=t,recursive:a=this.spec.recursive}=n;n.from=[{schema:this,value:o},...s],n.__validating=!0,n.originalValue=o,super._validate(t,n,r,(l,u)=>{if(!a||!Wv(u)){i(l,u);return}o=o||u;let c=[];for(let d of this._nodes){let f=this.fields[d];!f||Ri.isRef(f)||c.push(f.asNestedTest({options:n,key:d,parent:u,parentPath:n.path,originalParent:o}))}this.runTests({tests:c,value:u,originalValue:o,options:n},r,d=>{i(d.sort(this._sortErrors).concat(l),u)})})}clone(t){const n=super.clone(t);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(t){let n=super.concat(t),r=n.fields;for(let[i,s]of Object.entries(this.fields)){const o=r[i];r[i]=o===void 0?s:o}return n.withMutation(i=>i.setFields(r,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var i;const s=this.fields[r];let o=t;(i=o)!=null&&i.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[r]})),n[r]=s&&"getDefault"in s?s.getDefault(o):void 0}),n}setFields(t,n){let r=this.clone();return r.fields=t,r._nodes=XO(t,n),r._sortErrors=rS(Object.keys(t)),n&&(r._excludedEdges=n),r}shape(t,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,t),i)})}partial(){const t={};for(const[n,r]of Object.entries(this.fields))t[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(t)}deepPartial(){return Bl(this)}pick(t){const n={};for(const r of t)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,i])=>t.includes(r)&&t.includes(i)))}omit(t){const n=[];for(const r of Object.keys(this.fields))t.includes(r)||n.push(r);return this.pick(n)}from(t,n,r){let i=ci.getter(t,!0);return this.transform(s=>{if(!s)return s;let o=s;return ZO(s,t)&&(o=Object.assign({},s),r||delete o[t],o[n]=i(s)),o})}json(){return this.transform(JO)}noUnknown(t=!0,n=Gh.noUnknown){typeof t!="boolean"&&(n=t,t=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const s=eR(this.schema,i);return!t||s.length===0||this.createError({params:{unknown:s.join(", ")}})}});return r.spec.noUnknown=t,r}unknown(t=!0,n=Gh.noUnknown){return this.noUnknown(!t,n)}transformKeys(t){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[t(i)]=n[i];return r})}camelCase(){return this.transformKeys(uf.camelCase)}snakeCase(){return this.transformKeys(uf.snakeCase)}constantCase(){return this.transformKeys(t=>uf.snakeCase(t).toUpperCase())}describe(t){const n=(t?this.resolve(t):this).clone(),r=super.describe(t);r.fields={};for(const[s,o]of Object.entries(n.fields)){var i;let a=t;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[s]})),r.fields[s]=o.describe(a)}return r}}zc.prototype=iS.prototype;const nR=L.form`
  position: relative;
  margin: 0 auto;
  min-height: 420px;

  background: var(--background);
  border-radius: 30px;
  padding: 32px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    padding: 64px;
  }
`,cf=L.div`
  margin-bottom: 14px;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 18px;
  }
`;L.div`
  margin-bottom: 40px;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
`;const rR=L.h2`
  line-height: 1.2;
  letter-spacing: -0.8px;
  font-weight: 500;
  margin-bottom: 20px;
  color: var(--secondar);
  @media (min-width: 768px) {
    font-size: 40px;
  }
`,iR=L.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.38;
  margin-bottom: 40px;
  color: rgba(18, 20, 23, 0.8);
  @media (min-width: 768px) {
    width: 438px;
  }
`,df=L.p`
  margin-left: 15px;
  font-size: 12px;
  font-weight: 400;
  color: var(--red);
`,sR=L.button`
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
`,ff=L.input`
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
`,oR=L.button`
  font-weight: 600;
  width: 100%;
  border: none;
  border-radius: 12px;
  color: var(--secondar);

  background-color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};

  padding: 16px 18px;

  font-size: 18px;
  font-weight: 700;
  line-height: 1.56;
  @media (min-width: 768px) {
    padding: 16px 18px;
  }
`,aR=L.button`
  position: absolute;
  top: 20px;
  right: 20px;

  background-color: transparent;
  border: none;
`;L.svg`
  stroke: var(--secondary);
  fill: none;
  width: 24px;
  height: 24px;
`;const lR=L.svg`
  stroke: var(--secondary);
  fill: none;
  width: 32px;
  height: 32px;
`,Hv=L.svg`
  stroke: var(--secondary);
  fill: none;
  display: inline-block;
  width: 24px;
  height: 24px;
`;var uR=function(t){return cR(t)&&!dR(t)};function cR(e){return!!e&&typeof e=="object"}function dR(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||pR(e)}var fR=typeof Symbol=="function"&&Symbol.for,hR=fR?Symbol.for("react.element"):60103;function pR(e){return e.$$typeof===hR}function mR(e){return Array.isArray(e)?[]:{}}function Lu(e,t){return t.clone!==!1&&t.isMergeableObject(e)?sa(mR(e),e,t):e}function gR(e,t,n){return e.concat(t).map(function(r){return Lu(r,n)})}function yR(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach(function(i){r[i]=Lu(e[i],n)}),Object.keys(t).forEach(function(i){!n.isMergeableObject(t[i])||!e[i]?r[i]=Lu(t[i],n):r[i]=sa(e[i],t[i],n)}),r}function sa(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||gR,n.isMergeableObject=n.isMergeableObject||uR;var r=Array.isArray(t),i=Array.isArray(e),s=r===i;return s?r?n.arrayMerge(e,t,n):yR(e,t,n):Lu(t,n)}sa.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(r,i){return sa(r,i,n)},{})};var Kh=sa,vR=typeof global=="object"&&global&&global.Object===Object&&global;const sS=vR;var _R=typeof self=="object"&&self&&self.Object===Object&&self,wR=sS||_R||Function("return this")();const bn=wR;var xR=bn.Symbol;const Pr=xR;var oS=Object.prototype,SR=oS.hasOwnProperty,ER=oS.toString,so=Pr?Pr.toStringTag:void 0;function CR(e){var t=SR.call(e,so),n=e[so];try{e[so]=void 0;var r=!0}catch{}var i=ER.call(e);return r&&(t?e[so]=n:delete e[so]),i}var TR=Object.prototype,bR=TR.toString;function kR(e){return bR.call(e)}var IR="[object Null]",PR="[object Undefined]",Gv=Pr?Pr.toStringTag:void 0;function Ni(e){return e==null?e===void 0?PR:IR:Gv&&Gv in Object(e)?CR(e):kR(e)}function aS(e,t){return function(n){return e(t(n))}}var OR=aS(Object.getPrototypeOf,Object);const Bm=OR;function Ai(e){return e!=null&&typeof e=="object"}var RR="[object Object]",NR=Function.prototype,AR=Object.prototype,lS=NR.toString,DR=AR.hasOwnProperty,LR=lS.call(Object);function Kv(e){if(!Ai(e)||Ni(e)!=RR)return!1;var t=Bm(e);if(t===null)return!0;var n=DR.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&lS.call(n)==LR}var Yv=Array.isArray,qv=Object.keys,FR=Object.prototype.hasOwnProperty,$R=typeof Element<"u";function Yh(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var n=Yv(e),r=Yv(t),i,s,o;if(n&&r){if(s=e.length,s!=t.length)return!1;for(i=s;i--!==0;)if(!Yh(e[i],t[i]))return!1;return!0}if(n!=r)return!1;var a=e instanceof Date,l=t instanceof Date;if(a!=l)return!1;if(a&&l)return e.getTime()==t.getTime();var u=e instanceof RegExp,c=t instanceof RegExp;if(u!=c)return!1;if(u&&c)return e.toString()==t.toString();var d=qv(e);if(s=d.length,s!==qv(t).length)return!1;for(i=s;i--!==0;)if(!FR.call(t,d[i]))return!1;if($R&&e instanceof Element&&t instanceof Element)return e===t;for(i=s;i--!==0;)if(o=d[i],!(o==="_owner"&&e.$$typeof)&&!Yh(e[o],t[o]))return!1;return!0}return e!==e&&t!==t}var MR=function(t,n){try{return Yh(t,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const Yr=Rp(MR);var jR=!0;function zR(e,t){if(!jR){if(e)return;var n="Warning: "+t;typeof console<"u"&&console.warn(n);try{throw Error(n)}catch{}}}function UR(){this.__data__=[],this.size=0}function uS(e,t){return e===t||e!==e&&t!==t}function Uc(e,t){for(var n=e.length;n--;)if(uS(e[n][0],t))return n;return-1}var BR=Array.prototype,VR=BR.splice;function WR(e){var t=this.__data__,n=Uc(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():VR.call(t,n,1),--this.size,!0}function HR(e){var t=this.__data__,n=Uc(t,e);return n<0?void 0:t[n][1]}function GR(e){return Uc(this.__data__,e)>-1}function KR(e,t){var n=this.__data__,r=Uc(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function qn(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}qn.prototype.clear=UR;qn.prototype.delete=WR;qn.prototype.get=HR;qn.prototype.has=GR;qn.prototype.set=KR;function YR(){this.__data__=new qn,this.size=0}function qR(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function QR(e){return this.__data__.get(e)}function XR(e){return this.__data__.has(e)}function La(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var JR="[object AsyncFunction]",ZR="[object Function]",eN="[object GeneratorFunction]",tN="[object Proxy]";function cS(e){if(!La(e))return!1;var t=Ni(e);return t==ZR||t==eN||t==JR||t==tN}var nN=bn["__core-js_shared__"];const hf=nN;var Qv=function(){var e=/[^.]+$/.exec(hf&&hf.keys&&hf.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function rN(e){return!!Qv&&Qv in e}var iN=Function.prototype,sN=iN.toString;function Di(e){if(e!=null){try{return sN.call(e)}catch{}try{return e+""}catch{}}return""}var oN=/[\\^$.*+?()[\]{}|]/g,aN=/^\[object .+?Constructor\]$/,lN=Function.prototype,uN=Object.prototype,cN=lN.toString,dN=uN.hasOwnProperty,fN=RegExp("^"+cN.call(dN).replace(oN,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function hN(e){if(!La(e)||rN(e))return!1;var t=cS(e)?fN:aN;return t.test(Di(e))}function pN(e,t){return e==null?void 0:e[t]}function Li(e,t){var n=pN(e,t);return hN(n)?n:void 0}var mN=Li(bn,"Map");const oa=mN;var gN=Li(Object,"create");const aa=gN;function yN(){this.__data__=aa?aa(null):{},this.size=0}function vN(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var _N="__lodash_hash_undefined__",wN=Object.prototype,xN=wN.hasOwnProperty;function SN(e){var t=this.__data__;if(aa){var n=t[e];return n===_N?void 0:n}return xN.call(t,e)?t[e]:void 0}var EN=Object.prototype,CN=EN.hasOwnProperty;function TN(e){var t=this.__data__;return aa?t[e]!==void 0:CN.call(t,e)}var bN="__lodash_hash_undefined__";function kN(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=aa&&t===void 0?bN:t,this}function _i(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}_i.prototype.clear=yN;_i.prototype.delete=vN;_i.prototype.get=SN;_i.prototype.has=TN;_i.prototype.set=kN;function IN(){this.size=0,this.__data__={hash:new _i,map:new(oa||qn),string:new _i}}function PN(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Bc(e,t){var n=e.__data__;return PN(t)?n[typeof t=="string"?"string":"hash"]:n.map}function ON(e){var t=Bc(this,e).delete(e);return this.size-=t?1:0,t}function RN(e){return Bc(this,e).get(e)}function NN(e){return Bc(this,e).has(e)}function AN(e,t){var n=Bc(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function Mr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Mr.prototype.clear=IN;Mr.prototype.delete=ON;Mr.prototype.get=RN;Mr.prototype.has=NN;Mr.prototype.set=AN;var DN=200;function LN(e,t){var n=this.__data__;if(n instanceof qn){var r=n.__data__;if(!oa||r.length<DN-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Mr(r)}return n.set(e,t),this.size=n.size,this}function Ws(e){var t=this.__data__=new qn(e);this.size=t.size}Ws.prototype.clear=YR;Ws.prototype.delete=qR;Ws.prototype.get=QR;Ws.prototype.has=XR;Ws.prototype.set=LN;function FN(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var $N=function(){try{var e=Li(Object,"defineProperty");return e({},"",{}),e}catch{}}();const Xv=$N;function dS(e,t,n){t=="__proto__"&&Xv?Xv(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var MN=Object.prototype,jN=MN.hasOwnProperty;function fS(e,t,n){var r=e[t];(!(jN.call(e,t)&&uS(r,n))||n===void 0&&!(t in e))&&dS(e,t,n)}function Vc(e,t,n,r){var i=!n;n||(n={});for(var s=-1,o=t.length;++s<o;){var a=t[s],l=r?r(n[a],e[a],a,n,e):void 0;l===void 0&&(l=e[a]),i?dS(n,a,l):fS(n,a,l)}return n}function zN(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var UN="[object Arguments]";function Jv(e){return Ai(e)&&Ni(e)==UN}var hS=Object.prototype,BN=hS.hasOwnProperty,VN=hS.propertyIsEnumerable,WN=Jv(function(){return arguments}())?Jv:function(e){return Ai(e)&&BN.call(e,"callee")&&!VN.call(e,"callee")};const HN=WN;var GN=Array.isArray;const Fa=GN;function KN(){return!1}var pS=typeof bt=="object"&&bt&&!bt.nodeType&&bt,Zv=pS&&typeof kt=="object"&&kt&&!kt.nodeType&&kt,YN=Zv&&Zv.exports===pS,e0=YN?bn.Buffer:void 0,qN=e0?e0.isBuffer:void 0,QN=qN||KN;const mS=QN;var XN=9007199254740991,JN=/^(?:0|[1-9]\d*)$/;function ZN(e,t){var n=typeof e;return t=t??XN,!!t&&(n=="number"||n!="symbol"&&JN.test(e))&&e>-1&&e%1==0&&e<t}var e2=9007199254740991;function gS(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=e2}var t2="[object Arguments]",n2="[object Array]",r2="[object Boolean]",i2="[object Date]",s2="[object Error]",o2="[object Function]",a2="[object Map]",l2="[object Number]",u2="[object Object]",c2="[object RegExp]",d2="[object Set]",f2="[object String]",h2="[object WeakMap]",p2="[object ArrayBuffer]",m2="[object DataView]",g2="[object Float32Array]",y2="[object Float64Array]",v2="[object Int8Array]",_2="[object Int16Array]",w2="[object Int32Array]",x2="[object Uint8Array]",S2="[object Uint8ClampedArray]",E2="[object Uint16Array]",C2="[object Uint32Array]",pe={};pe[g2]=pe[y2]=pe[v2]=pe[_2]=pe[w2]=pe[x2]=pe[S2]=pe[E2]=pe[C2]=!0;pe[t2]=pe[n2]=pe[p2]=pe[r2]=pe[m2]=pe[i2]=pe[s2]=pe[o2]=pe[a2]=pe[l2]=pe[u2]=pe[c2]=pe[d2]=pe[f2]=pe[h2]=!1;function T2(e){return Ai(e)&&gS(e.length)&&!!pe[Ni(e)]}function Vm(e){return function(t){return e(t)}}var yS=typeof bt=="object"&&bt&&!bt.nodeType&&bt,No=yS&&typeof kt=="object"&&kt&&!kt.nodeType&&kt,b2=No&&No.exports===yS,pf=b2&&sS.process,k2=function(){try{var e=No&&No.require&&No.require("util").types;return e||pf&&pf.binding&&pf.binding("util")}catch{}}();const Ps=k2;var t0=Ps&&Ps.isTypedArray,I2=t0?Vm(t0):T2;const P2=I2;var O2=Object.prototype,R2=O2.hasOwnProperty;function vS(e,t){var n=Fa(e),r=!n&&HN(e),i=!n&&!r&&mS(e),s=!n&&!r&&!i&&P2(e),o=n||r||i||s,a=o?zN(e.length,String):[],l=a.length;for(var u in e)(t||R2.call(e,u))&&!(o&&(u=="length"||i&&(u=="offset"||u=="parent")||s&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||ZN(u,l)))&&a.push(u);return a}var N2=Object.prototype;function Wm(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||N2;return e===n}var A2=aS(Object.keys,Object);const D2=A2;var L2=Object.prototype,F2=L2.hasOwnProperty;function $2(e){if(!Wm(e))return D2(e);var t=[];for(var n in Object(e))F2.call(e,n)&&n!="constructor"&&t.push(n);return t}function _S(e){return e!=null&&gS(e.length)&&!cS(e)}function Hm(e){return _S(e)?vS(e):$2(e)}function M2(e,t){return e&&Vc(t,Hm(t),e)}function j2(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var z2=Object.prototype,U2=z2.hasOwnProperty;function B2(e){if(!La(e))return j2(e);var t=Wm(e),n=[];for(var r in e)r=="constructor"&&(t||!U2.call(e,r))||n.push(r);return n}function Gm(e){return _S(e)?vS(e,!0):B2(e)}function V2(e,t){return e&&Vc(t,Gm(t),e)}var wS=typeof bt=="object"&&bt&&!bt.nodeType&&bt,n0=wS&&typeof kt=="object"&&kt&&!kt.nodeType&&kt,W2=n0&&n0.exports===wS,r0=W2?bn.Buffer:void 0,i0=r0?r0.allocUnsafe:void 0;function H2(e,t){if(t)return e.slice();var n=e.length,r=i0?i0(n):new e.constructor(n);return e.copy(r),r}function xS(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}function G2(e,t){for(var n=-1,r=e==null?0:e.length,i=0,s=[];++n<r;){var o=e[n];t(o,n,e)&&(s[i++]=o)}return s}function SS(){return[]}var K2=Object.prototype,Y2=K2.propertyIsEnumerable,s0=Object.getOwnPropertySymbols,q2=s0?function(e){return e==null?[]:(e=Object(e),G2(s0(e),function(t){return Y2.call(e,t)}))}:SS;const Km=q2;function Q2(e,t){return Vc(e,Km(e),t)}function ES(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var X2=Object.getOwnPropertySymbols,J2=X2?function(e){for(var t=[];e;)ES(t,Km(e)),e=Bm(e);return t}:SS;const CS=J2;function Z2(e,t){return Vc(e,CS(e),t)}function TS(e,t,n){var r=t(e);return Fa(e)?r:ES(r,n(e))}function eA(e){return TS(e,Hm,Km)}function tA(e){return TS(e,Gm,CS)}var nA=Li(bn,"DataView");const qh=nA;var rA=Li(bn,"Promise");const Qh=rA;var iA=Li(bn,"Set");const Xh=iA;var sA=Li(bn,"WeakMap");const Jh=sA;var o0="[object Map]",oA="[object Object]",a0="[object Promise]",l0="[object Set]",u0="[object WeakMap]",c0="[object DataView]",aA=Di(qh),lA=Di(oa),uA=Di(Qh),cA=Di(Xh),dA=Di(Jh),qr=Ni;(qh&&qr(new qh(new ArrayBuffer(1)))!=c0||oa&&qr(new oa)!=o0||Qh&&qr(Qh.resolve())!=a0||Xh&&qr(new Xh)!=l0||Jh&&qr(new Jh)!=u0)&&(qr=function(e){var t=Ni(e),n=t==oA?e.constructor:void 0,r=n?Di(n):"";if(r)switch(r){case aA:return c0;case lA:return o0;case uA:return a0;case cA:return l0;case dA:return u0}return t});const Ym=qr;var fA=Object.prototype,hA=fA.hasOwnProperty;function pA(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&hA.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var mA=bn.Uint8Array;const d0=mA;function qm(e){var t=new e.constructor(e.byteLength);return new d0(t).set(new d0(e)),t}function gA(e,t){var n=t?qm(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var yA=/\w*$/;function vA(e){var t=new e.constructor(e.source,yA.exec(e));return t.lastIndex=e.lastIndex,t}var f0=Pr?Pr.prototype:void 0,h0=f0?f0.valueOf:void 0;function _A(e){return h0?Object(h0.call(e)):{}}function wA(e,t){var n=t?qm(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var xA="[object Boolean]",SA="[object Date]",EA="[object Map]",CA="[object Number]",TA="[object RegExp]",bA="[object Set]",kA="[object String]",IA="[object Symbol]",PA="[object ArrayBuffer]",OA="[object DataView]",RA="[object Float32Array]",NA="[object Float64Array]",AA="[object Int8Array]",DA="[object Int16Array]",LA="[object Int32Array]",FA="[object Uint8Array]",$A="[object Uint8ClampedArray]",MA="[object Uint16Array]",jA="[object Uint32Array]";function zA(e,t,n){var r=e.constructor;switch(t){case PA:return qm(e);case xA:case SA:return new r(+e);case OA:return gA(e,n);case RA:case NA:case AA:case DA:case LA:case FA:case $A:case MA:case jA:return wA(e,n);case EA:return new r;case CA:case kA:return new r(e);case TA:return vA(e);case bA:return new r;case IA:return _A(e)}}var p0=Object.create,UA=function(){function e(){}return function(t){if(!La(t))return{};if(p0)return p0(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const BA=UA;function VA(e){return typeof e.constructor=="function"&&!Wm(e)?BA(Bm(e)):{}}var WA="[object Map]";function HA(e){return Ai(e)&&Ym(e)==WA}var m0=Ps&&Ps.isMap,GA=m0?Vm(m0):HA;const KA=GA;var YA="[object Set]";function qA(e){return Ai(e)&&Ym(e)==YA}var g0=Ps&&Ps.isSet,QA=g0?Vm(g0):qA;const XA=QA;var JA=1,ZA=2,eD=4,bS="[object Arguments]",tD="[object Array]",nD="[object Boolean]",rD="[object Date]",iD="[object Error]",kS="[object Function]",sD="[object GeneratorFunction]",oD="[object Map]",aD="[object Number]",IS="[object Object]",lD="[object RegExp]",uD="[object Set]",cD="[object String]",dD="[object Symbol]",fD="[object WeakMap]",hD="[object ArrayBuffer]",pD="[object DataView]",mD="[object Float32Array]",gD="[object Float64Array]",yD="[object Int8Array]",vD="[object Int16Array]",_D="[object Int32Array]",wD="[object Uint8Array]",xD="[object Uint8ClampedArray]",SD="[object Uint16Array]",ED="[object Uint32Array]",ue={};ue[bS]=ue[tD]=ue[hD]=ue[pD]=ue[nD]=ue[rD]=ue[mD]=ue[gD]=ue[yD]=ue[vD]=ue[_D]=ue[oD]=ue[aD]=ue[IS]=ue[lD]=ue[uD]=ue[cD]=ue[dD]=ue[wD]=ue[xD]=ue[SD]=ue[ED]=!0;ue[iD]=ue[kS]=ue[fD]=!1;function Vl(e,t,n,r,i,s){var o,a=t&JA,l=t&ZA,u=t&eD;if(n&&(o=i?n(e,r,i,s):n(e)),o!==void 0)return o;if(!La(e))return e;var c=Fa(e);if(c){if(o=pA(e),!a)return xS(e,o)}else{var d=Ym(e),f=d==kS||d==sD;if(mS(e))return H2(e,a);if(d==IS||d==bS||f&&!i){if(o=l||f?{}:VA(e),!a)return l?Z2(e,V2(o,e)):Q2(e,M2(o,e))}else{if(!ue[d])return i?e:{};o=zA(e,d,a)}}s||(s=new Ws);var g=s.get(e);if(g)return g;s.set(e,o),XA(e)?e.forEach(function(w){o.add(Vl(w,t,n,w,e,s))}):KA(e)&&e.forEach(function(w,p){o.set(p,Vl(w,t,n,p,e,s))});var y=u?l?tA:eA:l?Gm:Hm,_=c?void 0:y(e);return FN(_||e,function(w,p){_&&(p=w,w=e[p]),fS(o,p,Vl(w,t,n,p,e,s))}),o}var CD=4;function y0(e){return Vl(e,CD)}function PS(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var TD="[object Symbol]";function Qm(e){return typeof e=="symbol"||Ai(e)&&Ni(e)==TD}var bD="Expected a function";function Xm(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(bD);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=e.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(Xm.Cache||Mr),n}Xm.Cache=Mr;var kD=500;function ID(e){var t=Xm(e,function(r){return n.size===kD&&n.clear(),r}),n=t.cache;return t}var PD=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,OD=/\\(\\)?/g,RD=ID(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(PD,function(n,r,i,s){t.push(i?s.replace(OD,"$1"):r||n)}),t});const ND=RD;var AD=1/0;function DD(e){if(typeof e=="string"||Qm(e))return e;var t=e+"";return t=="0"&&1/e==-AD?"-0":t}var LD=1/0,v0=Pr?Pr.prototype:void 0,_0=v0?v0.toString:void 0;function OS(e){if(typeof e=="string")return e;if(Fa(e))return PS(e,OS)+"";if(Qm(e))return _0?_0.call(e):"";var t=e+"";return t=="0"&&1/e==-LD?"-0":t}function FD(e){return e==null?"":OS(e)}function RS(e){return Fa(e)?PS(e,DD):Qm(e)?[e]:xS(ND(FD(e)))}var NS={exports:{}},oe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ze=typeof Symbol=="function"&&Symbol.for,Jm=ze?Symbol.for("react.element"):60103,Zm=ze?Symbol.for("react.portal"):60106,Wc=ze?Symbol.for("react.fragment"):60107,Hc=ze?Symbol.for("react.strict_mode"):60108,Gc=ze?Symbol.for("react.profiler"):60114,Kc=ze?Symbol.for("react.provider"):60109,Yc=ze?Symbol.for("react.context"):60110,eg=ze?Symbol.for("react.async_mode"):60111,qc=ze?Symbol.for("react.concurrent_mode"):60111,Qc=ze?Symbol.for("react.forward_ref"):60112,Xc=ze?Symbol.for("react.suspense"):60113,$D=ze?Symbol.for("react.suspense_list"):60120,Jc=ze?Symbol.for("react.memo"):60115,Zc=ze?Symbol.for("react.lazy"):60116,MD=ze?Symbol.for("react.block"):60121,jD=ze?Symbol.for("react.fundamental"):60117,zD=ze?Symbol.for("react.responder"):60118,UD=ze?Symbol.for("react.scope"):60119;function Ft(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Jm:switch(e=e.type,e){case eg:case qc:case Wc:case Gc:case Hc:case Xc:return e;default:switch(e=e&&e.$$typeof,e){case Yc:case Qc:case Zc:case Jc:case Kc:return e;default:return t}}case Zm:return t}}}function AS(e){return Ft(e)===qc}oe.AsyncMode=eg;oe.ConcurrentMode=qc;oe.ContextConsumer=Yc;oe.ContextProvider=Kc;oe.Element=Jm;oe.ForwardRef=Qc;oe.Fragment=Wc;oe.Lazy=Zc;oe.Memo=Jc;oe.Portal=Zm;oe.Profiler=Gc;oe.StrictMode=Hc;oe.Suspense=Xc;oe.isAsyncMode=function(e){return AS(e)||Ft(e)===eg};oe.isConcurrentMode=AS;oe.isContextConsumer=function(e){return Ft(e)===Yc};oe.isContextProvider=function(e){return Ft(e)===Kc};oe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Jm};oe.isForwardRef=function(e){return Ft(e)===Qc};oe.isFragment=function(e){return Ft(e)===Wc};oe.isLazy=function(e){return Ft(e)===Zc};oe.isMemo=function(e){return Ft(e)===Jc};oe.isPortal=function(e){return Ft(e)===Zm};oe.isProfiler=function(e){return Ft(e)===Gc};oe.isStrictMode=function(e){return Ft(e)===Hc};oe.isSuspense=function(e){return Ft(e)===Xc};oe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Wc||e===qc||e===Gc||e===Hc||e===Xc||e===$D||typeof e=="object"&&e!==null&&(e.$$typeof===Zc||e.$$typeof===Jc||e.$$typeof===Kc||e.$$typeof===Yc||e.$$typeof===Qc||e.$$typeof===jD||e.$$typeof===zD||e.$$typeof===UD||e.$$typeof===MD)};oe.typeOf=Ft;NS.exports=oe;var BD=NS.exports,DS=BD,VD={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},WD={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},LS={};LS[DS.ForwardRef]=VD;LS[DS.Memo]=WD;function De(){return De=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},De.apply(this,arguments)}function FS(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var ed=T.createContext(void 0);ed.displayName="FormikContext";ed.Provider;ed.Consumer;function HD(){var e=T.useContext(ed);return e||zR(!1),e}var Jt=function(t){return typeof t=="function"},td=function(t){return t!==null&&typeof t=="object"},GD=function(t){return String(Math.floor(Number(t)))===t},mf=function(t){return Object.prototype.toString.call(t)==="[object String]"},gf=function(t){return td(t)&&Jt(t.then)};function St(e,t,n,r){r===void 0&&(r=0);for(var i=RS(t);e&&r<i.length;)e=e[i[r++]];return r!==i.length&&!e||e===void 0?n:e}function di(e,t,n){for(var r=y0(e),i=r,s=0,o=RS(t);s<o.length-1;s++){var a=o[s],l=St(e,o.slice(0,s+1));if(l&&(td(l)||Array.isArray(l)))i=i[a]=y0(l);else{var u=o[s+1];i=i[a]=GD(u)&&Number(u)>=0?[]:{}}}return(s===0?e:i)[o[s]]===n?e:(n===void 0?delete i[o[s]]:i[o[s]]=n,s===0&&n===void 0&&delete r[o[s]],r)}function $S(e,t,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var i=0,s=Object.keys(e);i<s.length;i++){var o=s[i],a=e[o];td(a)?n.get(a)||(n.set(a,!0),r[o]=Array.isArray(a)?[]:{},$S(a,t,n,r[o])):r[o]=t}return r}function KD(e,t){switch(t.type){case"SET_VALUES":return De({},e,{values:t.payload});case"SET_TOUCHED":return De({},e,{touched:t.payload});case"SET_ERRORS":return Yr(e.errors,t.payload)?e:De({},e,{errors:t.payload});case"SET_STATUS":return De({},e,{status:t.payload});case"SET_ISSUBMITTING":return De({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return De({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return De({},e,{values:di(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return De({},e,{touched:di(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return De({},e,{errors:di(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return De({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return De({},e,{touched:$S(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return De({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return De({},e,{isSubmitting:!1});default:return e}}var Wr={},ml={};function tg(e){var t=e.validateOnChange,n=t===void 0?!0:t,r=e.validateOnBlur,i=r===void 0?!0:r,s=e.validateOnMount,o=s===void 0?!1:s,a=e.isInitialValid,l=e.enableReinitialize,u=l===void 0?!1:l,c=e.onSubmit,d=FS(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=De({validateOnChange:n,validateOnBlur:i,validateOnMount:o,onSubmit:c},d),g=T.useRef(f.initialValues),y=T.useRef(f.initialErrors||Wr),_=T.useRef(f.initialTouched||ml),w=T.useRef(f.initialStatus),p=T.useRef(!1),h=T.useRef({});T.useEffect(function(){return p.current=!0,function(){p.current=!1}},[]);var v=T.useState(0),x=v[1],E=T.useRef({values:f.initialValues,errors:f.initialErrors||Wr,touched:f.initialTouched||ml,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),C=E.current,S=T.useCallback(function(b){var N=E.current;E.current=KD(N,b),N!==E.current&&x(function(D){return D+1})},[]),O=T.useCallback(function(b,N){return new Promise(function(D,M){var W=f.validate(b,N);W==null?D(Wr):gf(W)?W.then(function(ie){D(ie||Wr)},function(ie){M(ie)}):D(W)})},[f.validate]),$=T.useCallback(function(b,N){var D=f.validationSchema,M=Jt(D)?D(N):D,W=N&&M.validateAt?M.validateAt(N,b):qD(b,M);return new Promise(function(ie,Ae){W.then(function(){ie(Wr)},function(kn){kn.name==="ValidationError"?ie(YD(kn)):Ae(kn)})})},[f.validationSchema]),F=T.useCallback(function(b,N){return new Promise(function(D){return D(h.current[b].validate(N))})},[]),B=T.useCallback(function(b){var N=Object.keys(h.current).filter(function(M){return Jt(h.current[M].validate)}),D=N.length>0?N.map(function(M){return F(M,St(b,M))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(D).then(function(M){return M.reduce(function(W,ie,Ae){return ie==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||ie&&(W=di(W,N[Ae],ie)),W},{})})},[F]),Ye=T.useCallback(function(b){return Promise.all([B(b),f.validationSchema?$(b):{},f.validate?O(b):{}]).then(function(N){var D=N[0],M=N[1],W=N[2],ie=Kh.all([D,M,W],{arrayMerge:QD});return ie})},[f.validate,f.validationSchema,B,O,$]),te=Mt(function(b){return b===void 0&&(b=C.values),S({type:"SET_ISVALIDATING",payload:!0}),Ye(b).then(function(N){return p.current&&(S({type:"SET_ISVALIDATING",payload:!1}),S({type:"SET_ERRORS",payload:N})),N})});T.useEffect(function(){o&&p.current===!0&&Yr(g.current,f.initialValues)&&te(g.current)},[o,te]);var rt=T.useCallback(function(b){var N=b&&b.values?b.values:g.current,D=b&&b.errors?b.errors:y.current?y.current:f.initialErrors||{},M=b&&b.touched?b.touched:_.current?_.current:f.initialTouched||{},W=b&&b.status?b.status:w.current?w.current:f.initialStatus;g.current=N,y.current=D,_.current=M,w.current=W;var ie=function(){S({type:"RESET_FORM",payload:{isSubmitting:!!b&&!!b.isSubmitting,errors:D,touched:M,status:W,values:N,isValidating:!!b&&!!b.isValidating,submitCount:b&&b.submitCount&&typeof b.submitCount=="number"?b.submitCount:0}})};if(f.onReset){var Ae=f.onReset(C.values,iy);gf(Ae)?Ae.then(ie):ie()}else ie()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);T.useEffect(function(){p.current===!0&&!Yr(g.current,f.initialValues)&&u&&(g.current=f.initialValues,rt(),o&&te(g.current))},[u,f.initialValues,rt,o,te]),T.useEffect(function(){u&&p.current===!0&&!Yr(y.current,f.initialErrors)&&(y.current=f.initialErrors||Wr,S({type:"SET_ERRORS",payload:f.initialErrors||Wr}))},[u,f.initialErrors]),T.useEffect(function(){u&&p.current===!0&&!Yr(_.current,f.initialTouched)&&(_.current=f.initialTouched||ml,S({type:"SET_TOUCHED",payload:f.initialTouched||ml}))},[u,f.initialTouched]),T.useEffect(function(){u&&p.current===!0&&!Yr(w.current,f.initialStatus)&&(w.current=f.initialStatus,S({type:"SET_STATUS",payload:f.initialStatus}))},[u,f.initialStatus,f.initialTouched]);var Kt=Mt(function(b){if(h.current[b]&&Jt(h.current[b].validate)){var N=St(C.values,b),D=h.current[b].validate(N);return gf(D)?(S({type:"SET_ISVALIDATING",payload:!0}),D.then(function(M){return M}).then(function(M){S({type:"SET_FIELD_ERROR",payload:{field:b,value:M}}),S({type:"SET_ISVALIDATING",payload:!1})})):(S({type:"SET_FIELD_ERROR",payload:{field:b,value:D}}),Promise.resolve(D))}else if(f.validationSchema)return S({type:"SET_ISVALIDATING",payload:!0}),$(C.values,b).then(function(M){return M}).then(function(M){S({type:"SET_FIELD_ERROR",payload:{field:b,value:St(M,b)}}),S({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Yt=T.useCallback(function(b,N){var D=N.validate;h.current[b]={validate:D}},[]),ve=T.useCallback(function(b){delete h.current[b]},[]),R=Mt(function(b,N){S({type:"SET_TOUCHED",payload:b});var D=N===void 0?i:N;return D?te(C.values):Promise.resolve()}),j=T.useCallback(function(b){S({type:"SET_ERRORS",payload:b})},[]),z=Mt(function(b,N){var D=Jt(b)?b(C.values):b;S({type:"SET_VALUES",payload:D});var M=N===void 0?n:N;return M?te(D):Promise.resolve()}),ne=T.useCallback(function(b,N){S({type:"SET_FIELD_ERROR",payload:{field:b,value:N}})},[]),re=Mt(function(b,N,D){S({type:"SET_FIELD_VALUE",payload:{field:b,value:N}});var M=D===void 0?n:D;return M?te(di(C.values,b,N)):Promise.resolve()}),$t=T.useCallback(function(b,N){var D=N,M=b,W;if(!mf(b)){b.persist&&b.persist();var ie=b.target?b.target:b.currentTarget,Ae=ie.type,kn=ie.name,bd=ie.id,kd=ie.value,CT=ie.checked,yU=ie.outerHTML,sy=ie.options,TT=ie.multiple;D=N||kn||bd,M=/number|range/.test(Ae)?(W=parseFloat(kd),isNaN(W)?"":W):/checkbox/.test(Ae)?JD(St(C.values,D),CT,kd):sy&&TT?XD(sy):kd}D&&re(D,M)},[re,C.values]),Ue=Mt(function(b){if(mf(b))return function(N){return $t(N,b)};$t(b)}),it=Mt(function(b,N,D){N===void 0&&(N=!0),S({type:"SET_FIELD_TOUCHED",payload:{field:b,value:N}});var M=D===void 0?i:D;return M?te(C.values):Promise.resolve()}),qe=T.useCallback(function(b,N){b.persist&&b.persist();var D=b.target,M=D.name,W=D.id,ie=D.outerHTML,Ae=N||M||W;it(Ae,!0)},[it]),Qe=Mt(function(b){if(mf(b))return function(N){return qe(N,b)};qe(b)}),$i=T.useCallback(function(b){Jt(b)?S({type:"SET_FORMIK_STATE",payload:b}):S({type:"SET_FORMIK_STATE",payload:function(){return b}})},[]),Vr=T.useCallback(function(b){S({type:"SET_STATUS",payload:b})},[]),qt=T.useCallback(function(b){S({type:"SET_ISSUBMITTING",payload:b})},[]),Cd=Mt(function(){return S({type:"SUBMIT_ATTEMPT"}),te().then(function(b){var N=b instanceof Error,D=!N&&Object.keys(b).length===0;if(D){var M;try{if(M=yT(),M===void 0)return}catch(W){throw W}return Promise.resolve(M).then(function(W){return p.current&&S({type:"SUBMIT_SUCCESS"}),W}).catch(function(W){if(p.current)throw S({type:"SUBMIT_FAILURE"}),W})}else if(p.current&&(S({type:"SUBMIT_FAILURE"}),N))throw b})}),gT=Mt(function(b){b&&b.preventDefault&&Jt(b.preventDefault)&&b.preventDefault(),b&&b.stopPropagation&&Jt(b.stopPropagation)&&b.stopPropagation(),Cd().catch(function(N){console.warn("Warning: An unhandled error was caught from submitForm()",N)})}),iy={resetForm:rt,validateForm:te,validateField:Kt,setErrors:j,setFieldError:ne,setFieldTouched:it,setFieldValue:re,setStatus:Vr,setSubmitting:qt,setTouched:R,setValues:z,setFormikState:$i,submitForm:Cd},yT=Mt(function(){return c(C.values,iy)}),vT=Mt(function(b){b&&b.preventDefault&&Jt(b.preventDefault)&&b.preventDefault(),b&&b.stopPropagation&&Jt(b.stopPropagation)&&b.stopPropagation(),rt()}),_T=T.useCallback(function(b){return{value:St(C.values,b),error:St(C.errors,b),touched:!!St(C.touched,b),initialValue:St(g.current,b),initialTouched:!!St(_.current,b),initialError:St(y.current,b)}},[C.errors,C.touched,C.values]),wT=T.useCallback(function(b){return{setValue:function(D,M){return re(b,D,M)},setTouched:function(D,M){return it(b,D,M)},setError:function(D){return ne(b,D)}}},[re,it,ne]),xT=T.useCallback(function(b){var N=td(b),D=N?b.name:b,M=St(C.values,D),W={name:D,value:M,onChange:Ue,onBlur:Qe};if(N){var ie=b.type,Ae=b.value,kn=b.as,bd=b.multiple;ie==="checkbox"?Ae===void 0?W.checked=!!M:(W.checked=!!(Array.isArray(M)&&~M.indexOf(Ae)),W.value=Ae):ie==="radio"?(W.checked=M===Ae,W.value=Ae):kn==="select"&&bd&&(W.value=W.value||[],W.multiple=!0)}return W},[Qe,Ue,C.values]),Td=T.useMemo(function(){return!Yr(g.current,C.values)},[g.current,C.values]),ST=T.useMemo(function(){return typeof a<"u"?Td?C.errors&&Object.keys(C.errors).length===0:a!==!1&&Jt(a)?a(f):a:C.errors&&Object.keys(C.errors).length===0},[a,Td,C.errors,f]),ET=De({},C,{initialValues:g.current,initialErrors:y.current,initialTouched:_.current,initialStatus:w.current,handleBlur:Qe,handleChange:Ue,handleReset:vT,handleSubmit:gT,resetForm:rt,setErrors:j,setFormikState:$i,setFieldTouched:it,setFieldValue:re,setFieldError:ne,setStatus:Vr,setSubmitting:qt,setTouched:R,setValues:z,submitForm:Cd,validateForm:te,validateField:Kt,isValid:ST,dirty:Td,unregisterField:ve,registerField:Yt,getFieldProps:xT,getFieldMeta:_T,getFieldHelpers:wT,validateOnBlur:i,validateOnChange:n,validateOnMount:o});return ET}function YD(e){var t={};if(e.inner){if(e.inner.length===0)return di(t,e.path,e.message);for(var i=e.inner,n=Array.isArray(i),r=0,i=n?i:i[Symbol.iterator]();;){var s;if(n){if(r>=i.length)break;s=i[r++]}else{if(r=i.next(),r.done)break;s=r.value}var o=s;St(t,o.path)||(t=di(t,o.path,o.message))}}return t}function qD(e,t,n,r){n===void 0&&(n=!1);var i=Zh(e);return t[n?"validateSync":"validate"](i,{abortEarly:!1,context:r||i})}function Zh(e){var t=Array.isArray(e)?[]:{};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=String(n);Array.isArray(e[r])===!0?t[r]=e[r].map(function(i){return Array.isArray(i)===!0||Kv(i)?Zh(i):i!==""?i:void 0}):Kv(e[r])?t[r]=Zh(e[r]):t[r]=e[r]!==""?e[r]:void 0}return t}function QD(e,t,n){var r=e.slice();return t.forEach(function(s,o){if(typeof r[o]>"u"){var a=n.clone!==!1,l=a&&n.isMergeableObject(s);r[o]=l?Kh(Array.isArray(s)?[]:{},s,n):s}else n.isMergeableObject(s)?r[o]=Kh(e[o],s,n):e.indexOf(s)===-1&&r.push(s)}),r}function XD(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function JD(e,t,n){if(typeof e=="boolean")return!!t;var r=[],i=!1,s=-1;if(Array.isArray(e))r=e,s=e.indexOf(n),i=s>=0;else if(!n||n=="true"||n=="false")return!!t;return t&&n&&!i?r.concat(n):i?r.slice(0,s).concat(r.slice(s+1)):r}var ZD=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?T.useLayoutEffect:T.useEffect;function Mt(e){var t=T.useRef(e);return ZD(function(){t.current=e}),T.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.current.apply(void 0,r)},[])}var eL=T.forwardRef(function(e,t){var n=e.action,r=FS(e,["action"]),i=n??"#",s=HD(),o=s.handleReset,a=s.handleSubmit;return T.createElement("form",De({onSubmit:a,ref:t,onReset:o,action:i},r))});eL.displayName="Form";const ut="/Learn-Lingo/assets/sprite-eb170aab.svg";function Be(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var tL=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),w0=tL,yf=()=>Math.random().toString(36).substring(7).split("").join("."),nL={INIT:`@@redux/INIT${yf()}`,REPLACE:`@@redux/REPLACE${yf()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${yf()}`},Fu=nL;function ng(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function rg(e,t,n){if(typeof e!="function")throw new Error(Be(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Be(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Be(1));return n(rg)(e,t)}let r=e,i=t,s=new Map,o=s,a=0,l=!1;function u(){o===s&&(o=new Map,s.forEach((w,p)=>{o.set(p,w)}))}function c(){if(l)throw new Error(Be(3));return i}function d(w){if(typeof w!="function")throw new Error(Be(4));if(l)throw new Error(Be(5));let p=!0;u();const h=a++;return o.set(h,w),function(){if(p){if(l)throw new Error(Be(6));p=!1,u(),o.delete(h),s=null}}}function f(w){if(!ng(w))throw new Error(Be(7));if(typeof w.type>"u")throw new Error(Be(8));if(typeof w.type!="string")throw new Error(Be(17));if(l)throw new Error(Be(9));try{l=!0,i=r(i,w)}finally{l=!1}return(s=o).forEach(h=>{h()}),w}function g(w){if(typeof w!="function")throw new Error(Be(10));r=w,f({type:Fu.REPLACE})}function y(){const w=d;return{subscribe(p){if(typeof p!="object"||p===null)throw new Error(Be(11));function h(){const x=p;x.next&&x.next(c())}return h(),{unsubscribe:w(h)}},[w0](){return this}}}return f({type:Fu.INIT}),{dispatch:f,subscribe:d,getState:c,replaceReducer:g,[w0]:y}}function rL(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Fu.INIT})>"u")throw new Error(Be(12));if(typeof n(void 0,{type:Fu.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Be(13))})}function MS(e){const t=Object.keys(e),n={};for(let s=0;s<t.length;s++){const o=t[s];typeof e[o]=="function"&&(n[o]=e[o])}const r=Object.keys(n);let i;try{rL(n)}catch(s){i=s}return function(o={},a){if(i)throw i;let l=!1;const u={};for(let c=0;c<r.length;c++){const d=r[c],f=n[d],g=o[d],y=f(g,a);if(typeof y>"u")throw a&&a.type,new Error(Be(14));u[d]=y,l=l||y!==g}return l=l||r.length!==Object.keys(o).length,l?u:o}}function $u(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function iL(...e){return t=>(n,r)=>{const i=t(n,r);let s=()=>{throw new Error(Be(15))};const o={getState:i.getState,dispatch:(l,...u)=>s(l,...u)},a=e.map(l=>l(o));return s=$u(...a)(i.dispatch),{...i,dispatch:s}}}function sL(e){return ng(e)&&"type"in e&&typeof e.type=="string"}var jS=Symbol.for("immer-nothing"),x0=Symbol.for("immer-draftable"),Nt=Symbol.for("immer-state");function nn(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Os=Object.getPrototypeOf;function Or(e){return!!e&&!!e[Nt]}function Hn(e){var t;return e?zS(e)||Array.isArray(e)||!!e[x0]||!!((t=e.constructor)!=null&&t[x0])||rd(e)||id(e):!1}var oL=Object.prototype.constructor.toString();function zS(e){if(!e||typeof e!="object")return!1;const t=Os(e);if(t===null)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===oL}function la(e,t){nd(e)===0?Object.entries(e).forEach(([n,r])=>{t(n,r,e)}):e.forEach((n,r)=>t(r,n,e))}function nd(e){const t=e[Nt];return t?t.type_:Array.isArray(e)?1:rd(e)?2:id(e)?3:0}function ep(e,t){return nd(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function US(e,t,n){const r=nd(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function aL(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function rd(e){return e instanceof Map}function id(e){return e instanceof Set}function Qr(e){return e.copy_||e.base_}function tp(e,t){if(rd(e))return new Map(e);if(id(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&zS(e))return Os(e)?{...e}:Object.assign(Object.create(null),e);const n=Object.getOwnPropertyDescriptors(e);delete n[Nt];let r=Reflect.ownKeys(n);for(let i=0;i<r.length;i++){const s=r[i],o=n[s];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(n[s]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[s]})}return Object.create(Os(e),n)}function ig(e,t=!1){return sd(e)||Or(e)||!Hn(e)||(nd(e)>1&&(e.set=e.add=e.clear=e.delete=lL),Object.freeze(e),t&&la(e,(n,r)=>ig(r,!0))),e}function lL(){nn(2)}function sd(e){return Object.isFrozen(e)}var uL={};function wi(e){const t=uL[e];return t||nn(0,e),t}var ua;function BS(){return ua}function cL(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function S0(e,t){t&&(wi("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function np(e){rp(e),e.drafts_.forEach(dL),e.drafts_=null}function rp(e){e===ua&&(ua=e.parent_)}function E0(e){return ua=cL(ua,e)}function dL(e){const t=e[Nt];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function C0(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return e!==void 0&&e!==n?(n[Nt].modified_&&(np(t),nn(4)),Hn(e)&&(e=Mu(t,e),t.parent_||ju(t,e)),t.patches_&&wi("Patches").generateReplacementPatches_(n[Nt].base_,e,t.patches_,t.inversePatches_)):e=Mu(t,n,[]),np(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==jS?e:void 0}function Mu(e,t,n){if(sd(t))return t;const r=t[Nt];if(!r)return la(t,(i,s)=>T0(e,r,t,i,s,n)),t;if(r.scope_!==e)return t;if(!r.modified_)return ju(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let s=i,o=!1;r.type_===3&&(s=new Set(i),i.clear(),o=!0),la(s,(a,l)=>T0(e,r,i,a,l,n,o)),ju(e,i,!1),n&&e.patches_&&wi("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function T0(e,t,n,r,i,s,o){if(Or(i)){const a=s&&t&&t.type_!==3&&!ep(t.assigned_,r)?s.concat(r):void 0,l=Mu(e,i,a);if(US(n,r,l),Or(l))e.canAutoFreeze_=!1;else return}else o&&n.add(i);if(Hn(i)&&!sd(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Mu(e,i),(!t||!t.scope_.parent_)&&ju(e,i)}}function ju(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&ig(t,n)}function fL(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:BS(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,s=sg;n&&(i=[r],s=ca);const{revoke:o,proxy:a}=Proxy.revocable(i,s);return r.draft_=a,r.revoke_=o,a}var sg={get(e,t){if(t===Nt)return e;const n=Qr(e);if(!ep(n,t))return hL(e,n,t);const r=n[t];return e.finalized_||!Hn(r)?r:r===vf(e.base_,t)?(_f(e),e.copy_[t]=sp(r,e)):r},has(e,t){return t in Qr(e)},ownKeys(e){return Reflect.ownKeys(Qr(e))},set(e,t,n){const r=VS(Qr(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=vf(Qr(e),t),s=i==null?void 0:i[Nt];if(s&&s.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(aL(n,i)&&(n!==void 0||ep(e.base_,t)))return!0;_f(e),ip(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty(e,t){return vf(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,_f(e),ip(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Qr(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty(){nn(11)},getPrototypeOf(e){return Os(e.base_)},setPrototypeOf(){nn(12)}},ca={};la(sg,(e,t)=>{ca[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});ca.deleteProperty=function(e,t){return ca.set.call(this,e,t,void 0)};ca.set=function(e,t,n){return sg.set.call(this,e[0],t,n,e[0])};function vf(e,t){const n=e[Nt];return(n?Qr(n):e)[t]}function hL(e,t,n){var i;const r=VS(t,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function VS(e,t){if(!(t in e))return;let n=Os(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Os(n)}}function ip(e){e.modified_||(e.modified_=!0,e.parent_&&ip(e.parent_))}function _f(e){e.copy_||(e.copy_=tp(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var pL=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,n,r)=>{if(typeof t=="function"&&typeof n!="function"){const s=n;n=t;const o=this;return function(l=s,...u){return o.produce(l,c=>n.call(this,c,...u))}}typeof n!="function"&&nn(6),r!==void 0&&typeof r!="function"&&nn(7);let i;if(Hn(t)){const s=E0(this),o=sp(t,void 0);let a=!0;try{i=n(o),a=!1}finally{a?np(s):rp(s)}return S0(s,r),C0(i,s)}else if(!t||typeof t!="object"){if(i=n(t),i===void 0&&(i=t),i===jS&&(i=void 0),this.autoFreeze_&&ig(i,!0),r){const s=[],o=[];wi("Patches").generateReplacementPatches_(t,i,s,o),r(s,o)}return i}else nn(1,t)},this.produceWithPatches=(t,n)=>{if(typeof t=="function")return(o,...a)=>this.produceWithPatches(o,l=>t(l,...a));let r,i;return[this.produce(t,n,(o,a)=>{r=o,i=a}),r,i]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){Hn(e)||nn(8),Or(e)&&(e=WS(e));const t=E0(this),n=sp(e,void 0);return n[Nt].isManual_=!0,rp(t),n}finishDraft(e,t){const n=e&&e[Nt];(!n||!n.isManual_)&&nn(9);const{scope_:r}=n;return S0(r,t),C0(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=wi("Patches").applyPatches_;return Or(e)?r(e,t):this.produce(e,i=>r(i,t))}};function sp(e,t){const n=rd(e)?wi("MapSet").proxyMap_(e,t):id(e)?wi("MapSet").proxySet_(e,t):fL(e,t);return(t?t.scope_:BS()).drafts_.push(n),n}function WS(e){return Or(e)||nn(10,e),HS(e)}function HS(e){if(!Hn(e)||sd(e))return e;const t=e[Nt];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=tp(e,t.scope_.immer_.useStrictShallowCopy_)}else n=tp(e,!0);return la(n,(r,i)=>{US(n,r,HS(i))}),t&&(t.finalized_=!1),n}var At=new pL,GS=At.produce;At.produceWithPatches.bind(At);At.setAutoFreeze.bind(At);At.setUseStrictShallowCopy.bind(At);At.applyPatches.bind(At);At.createDraft.bind(At);At.finishDraft.bind(At);function mL(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function gL(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function yL(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(n=>typeof n=="function")){const n=e.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${t}[${n}]`)}}var b0=e=>Array.isArray(e)?e:[e];function vL(e){const t=Array.isArray(e[0])?e[0]:e;return yL(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function _L(e,t){const n=[],{length:r}=e;for(let i=0;i<r;i++)n.push(e[i].apply(null,t));return n}var wL=class{constructor(e){this.value=e}deref(){return this.value}},xL=typeof WeakRef<"u"?WeakRef:wL,SL=0,k0=1;function gl(){return{s:SL,v:void 0,o:null,p:null}}function og(e,t={}){let n=gl();const{resultEqualityCheck:r}=t;let i,s=0;function o(){var d;let a=n;const{length:l}=arguments;for(let f=0,g=l;f<g;f++){const y=arguments[f];if(typeof y=="function"||typeof y=="object"&&y!==null){let _=a.o;_===null&&(a.o=_=new WeakMap);const w=_.get(y);w===void 0?(a=gl(),_.set(y,a)):a=w}else{let _=a.p;_===null&&(a.p=_=new Map);const w=_.get(y);w===void 0?(a=gl(),_.set(y,a)):a=w}}const u=a;let c;if(a.s===k0?c=a.v:(c=e.apply(null,arguments),s++),u.s=k0,r){const f=((d=i==null?void 0:i.deref)==null?void 0:d.call(i))??i;f!=null&&r(f,c)&&(c=f,s!==0&&s--),i=typeof c=="object"&&c!==null||typeof c=="function"?new xL(c):c}return u.v=c,c}return o.clearCache=()=>{n=gl(),o.resetResultsCount()},o.resultsCount=()=>s,o.resetResultsCount=()=>{s=0},o}function KS(e,...t){const n=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,r=(...i)=>{let s=0,o=0,a,l={},u=i.pop();typeof u=="object"&&(l=u,u=i.pop()),mL(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const c={...n,...l},{memoize:d,memoizeOptions:f=[],argsMemoize:g=og,argsMemoizeOptions:y=[],devModeChecks:_={}}=c,w=b0(f),p=b0(y),h=vL(i),v=d(function(){return s++,u.apply(null,arguments)},...w),x=g(function(){o++;const C=_L(h,arguments);return a=v.apply(null,C),a},...p);return Object.assign(x,{resultFunc:u,memoizedResultFunc:v,dependencies:h,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>a,recomputations:()=>s,resetRecomputations:()=>{s=0},memoize:d,argsMemoize:g})};return Object.assign(r,{withTypes:()=>r}),r}var EL=KS(og),CL=Object.assign((e,t=EL)=>{gL(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const n=Object.keys(e),r=n.map(s=>e[s]);return t(r,(...s)=>s.reduce((o,a,l)=>(o[n[l]]=a,o),{}))},{withTypes:()=>CL});function YS(e){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,e):i(s)}var TL=YS(),bL=YS,kL=(...e)=>{const t=KS(...e);return(...n)=>{const r=t(...n),i=(s,...o)=>r(Or(s)?WS(s):s,...o);return Object.assign(i,r),i}};kL(og);var IL=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?$u:$u.apply(null,arguments)},PL=e=>e&&typeof e.match=="function";function xr(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(cn(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>sL(r)&&r.type===e,n}var qS=class _o extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,_o.prototype)}static get[Symbol.species](){return _o}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new _o(...t[0].concat(this)):new _o(...t.concat(this))}};function I0(e){return Hn(e)?GS(e,()=>{}):e}function P0(e,t,n){if(e.has(t)){let i=e.get(t);return n.update&&(i=n.update(i,t,e),e.set(t,i)),i}if(!n.insert)throw new Error(cn(10));const r=n.insert(t,e);return e.set(t,r),r}function OL(e){return typeof e=="boolean"}var RL=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=t??{};let o=new qS;return n&&(OL(n)?o.push(TL):o.push(bL(n.extraArgument))),o},NL="RTK_autoBatch",QS=e=>t=>{setTimeout(t,e)},AL=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:QS(10),DL=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,s=!1,o=!1;const a=new Set,l=e.type==="tick"?queueMicrotask:e.type==="raf"?AL:e.type==="callback"?e.queueNotification:QS(e.timeout),u=()=>{o=!1,s&&(s=!1,a.forEach(c=>c()))};return Object.assign({},r,{subscribe(c){const d=()=>i&&c(),f=r.subscribe(d);return a.add(c),()=>{f(),a.delete(c)}},dispatch(c){var d;try{return i=!((d=c==null?void 0:c.meta)!=null&&d[NL]),s=!i,s&&(o||(o=!0,l(u))),r.dispatch(c)}finally{i=!0}}})},LL=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new qS(e);return r&&i.push(DL(typeof r=="object"?r:void 0)),i},FL=!0;function $L(e){const t=RL(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=e||{};let a;if(typeof n=="function")a=n;else if(ng(n))a=MS(n);else throw new Error(cn(1));let l;typeof r=="function"?l=r(t):l=t();let u=$u;i&&(u=IL({trace:!FL,...typeof i=="object"&&i}));const c=iL(...l),d=LL(c);let f=typeof o=="function"?o(d):d();const g=u(...f);return rg(a,s,g)}function XS(e){const t={},n=[];let r;const i={addCase(s,o){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(cn(28));if(a in t)throw new Error(cn(29));return t[a]=o,i},addMatcher(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return e(i),[t,n,r]}function ML(e){return typeof e=="function"}function jL(e,t){let[n,r,i]=XS(t),s;if(ML(e))s=()=>I0(e());else{const a=I0(e);s=()=>a}function o(a=s(),l){let u=[n[l.type],...r.filter(({matcher:c})=>c(l)).map(({reducer:c})=>c)];return u.filter(c=>!!c).length===0&&(u=[i]),u.reduce((c,d)=>{if(d)if(Or(c)){const g=d(c,l);return g===void 0?c:g}else{if(Hn(c))return GS(c,f=>d(f,l));{const f=d(c,l);if(f===void 0){if(c===null)return c;throw new Error(cn(9))}return f}}return c},a)}return o.getInitialState=s,o}var zL="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",UL=(e=21)=>{let t="",n=e;for(;n--;)t+=zL[Math.random()*64|0];return t},BL=(e,t)=>PL(e)?e.match(t):e(t);function VL(...e){return t=>e.some(n=>BL(n,t))}var WL=["name","message","stack","code"],wf=class{constructor(e,t){Id(this,"_type");this.payload=e,this.meta=t}},O0=class{constructor(e,t){Id(this,"_type");this.payload=e,this.meta=t}},HL=e=>{if(typeof e=="object"&&e!==null){const t={};for(const n of WL)typeof e[n]=="string"&&(t[n]=e[n]);return t}return{message:String(e)}},od=(()=>{function e(t,n,r){const i=xr(t+"/fulfilled",(l,u,c,d)=>({payload:l,meta:{...d||{},arg:c,requestId:u,requestStatus:"fulfilled"}})),s=xr(t+"/pending",(l,u,c)=>({payload:void 0,meta:{...c||{},arg:u,requestId:l,requestStatus:"pending"}})),o=xr(t+"/rejected",(l,u,c,d,f)=>({payload:d,error:(r&&r.serializeError||HL)(l||"Rejected"),meta:{...f||{},arg:c,requestId:u,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(l==null?void 0:l.name)==="AbortError",condition:(l==null?void 0:l.name)==="ConditionError"}}));function a(l){return(u,c,d)=>{const f=r!=null&&r.idGenerator?r.idGenerator(l):UL(),g=new AbortController;let y;function _(p){y=p,g.abort()}const w=async function(){var v,x;let p;try{let E=(v=r==null?void 0:r.condition)==null?void 0:v.call(r,l,{getState:c,extra:d});if(KL(E)&&(E=await E),E===!1||g.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const C=new Promise((S,O)=>g.signal.addEventListener("abort",()=>O({name:"AbortError",message:y||"Aborted"})));u(s(f,l,(x=r==null?void 0:r.getPendingMeta)==null?void 0:x.call(r,{requestId:f,arg:l},{getState:c,extra:d}))),p=await Promise.race([C,Promise.resolve(n(l,{dispatch:u,getState:c,extra:d,requestId:f,signal:g.signal,abort:_,rejectWithValue:(S,O)=>new wf(S,O),fulfillWithValue:(S,O)=>new O0(S,O)})).then(S=>{if(S instanceof wf)throw S;return S instanceof O0?i(S.payload,f,l,S.meta):i(S,f,l)})])}catch(E){p=E instanceof wf?o(null,f,l,E.payload,E.meta):o(E,f,l)}return r&&!r.dispatchConditionRejection&&o.match(p)&&p.meta.condition||u(p),p}();return Object.assign(w,{abort:_,requestId:f,arg:l,unwrap(){return w.then(GL)}})}}return Object.assign(a,{pending:s,rejected:o,fulfilled:i,settled:VL(o,i),typePrefix:t})}return e.withTypes=()=>e,e})();function GL(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function KL(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var YL=Symbol.for("rtk-slice-createasyncthunk");function qL(e,t){return`${e}/${t}`}function QL({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[YL];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(cn(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(JL()):i.reducers)||{},l=Object.keys(a),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(w,p){const h=typeof w=="string"?w:w.type;if(!h)throw new Error(cn(12));if(h in u.sliceCaseReducersByType)throw new Error(cn(13));return u.sliceCaseReducersByType[h]=p,c},addMatcher(w,p){return u.sliceMatchers.push({matcher:w,reducer:p}),c},exposeAction(w,p){return u.actionCreators[w]=p,c},exposeCaseReducer(w,p){return u.sliceCaseReducersByName[w]=p,c}};l.forEach(w=>{const p=a[w],h={reducerName:w,type:qL(s,w),createNotation:typeof i.reducers=="function"};eF(p)?nF(h,p,c,t):ZL(h,p,c)});function d(){const[w={},p=[],h=void 0]=typeof i.extraReducers=="function"?XS(i.extraReducers):[i.extraReducers],v={...w,...u.sliceCaseReducersByType};return jL(i.initialState,x=>{for(let E in v)x.addCase(E,v[E]);for(let E of u.sliceMatchers)x.addMatcher(E.matcher,E.reducer);for(let E of p)x.addMatcher(E.matcher,E.reducer);h&&x.addDefaultCase(h)})}const f=w=>w,g=new WeakMap;let y;const _={name:s,reducerPath:o,reducer(w,p){return y||(y=d()),y(w,p)},actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState(){return y||(y=d()),y.getInitialState()},getSelectors(w=f){const p=P0(g,this,{insert:()=>new WeakMap});return P0(p,w,{insert:()=>{const h={};for(const[v,x]of Object.entries(i.selectors??{}))h[v]=XL(this,x,w,this!==_);return h}})},selectSlice(w){let p=w[this.reducerPath];return typeof p>"u"&&this!==_&&(p=this.getInitialState()),p},get selectors(){return this.getSelectors(this.selectSlice)},injectInto(w,{reducerPath:p,...h}={}){const v=p??this.reducerPath;return w.inject({reducerPath:v,reducer:this.reducer},h),{...this,reducerPath:v}}};return _}}function XL(e,t,n,r){function i(s,...o){let a=n.call(e,s);return typeof a>"u"&&r&&(a=e.getInitialState()),t(a,...o)}return i.unwrapped=t,i}var JS=QL();function JL(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function ZL({type:e,reducerName:t,createNotation:n},r,i){let s,o;if("reducer"in r){if(n&&!tF(r))throw new Error(cn(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(e,s).exposeCaseReducer(t,s).exposeAction(t,o?xr(e,o):xr(e))}function eF(e){return e._reducerDefinitionType==="asyncThunk"}function tF(e){return e._reducerDefinitionType==="reducerWithPrepare"}function nF({type:e,reducerName:t},n,r,i){if(!i)throw new Error(cn(18));const{payloadCreator:s,fulfilled:o,pending:a,rejected:l,settled:u,options:c}=n,d=i(e,s,c);r.exposeAction(t,d),o&&r.addCase(d.fulfilled,o),a&&r.addCase(d.pending,a),l&&r.addCase(d.rejected,l),u&&r.addMatcher(d.settled,u),r.exposeCaseReducer(t,{fulfilled:o||yl,pending:a||yl,rejected:l||yl,settled:u||yl})}function yl(){}var ag="listenerMiddleware";xr(`${ag}/add`);xr(`${ag}/removeAll`);xr(`${ag}/remove`);function cn(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}/**
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
 */const ZS={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const I=function(e,t){if(!e)throw Hs(t)},Hs=function(e){return new Error("Firebase Database ("+ZS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
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
 */const eE=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},rF=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},lg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(f=64)),r.push(n[c],n[d],n[f],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(eE(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):rF(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new iF;const f=s<<2|a>>4;if(r.push(f),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class iF extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tE=function(e){const t=eE(e);return lg.encodeByteArray(t,!0)},zu=function(e){return tE(e).replace(/\./g,"")},Uu=function(e){try{return lg.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function sF(e){return nE(void 0,e)}function nE(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!oF(n)||(e[n]=nE(e[n],t[n]));return e}function oF(e){return e!=="__proto__"}/**
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
 */function aF(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const lF=()=>aF().__FIREBASE_DEFAULTS__,uF=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},cF=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Uu(e[1]);return t&&JSON.parse(t)},ug=()=>{try{return lF()||uF()||cF()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},dF=e=>{var t,n;return(n=(t=ug())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},fF=e=>{const t=dF(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},rE=()=>{var e;return(e=ug())===null||e===void 0?void 0:e.config},hF=e=>{var t;return(t=ug())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class cg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function pF(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[zu(JSON.stringify(n)),zu(JSON.stringify(o)),a].join(".")}/**
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
 */function Tn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tn())}function mF(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function iE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sE(){return ZS.NODE_ADMIN===!0}function gF(){try{return typeof indexedDB=="object"}catch{return!1}}function yF(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const vF="FirebaseError";class jr extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=vF,Object.setPrototypeOf(this,jr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$a.prototype.create)}}class $a{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?_F(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new jr(i,a,r)}}function _F(e,t){return e.replace(wF,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const wF=/\{\$([^}]+)}/g;/**
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
 */function da(e){return JSON.parse(e)}function Oe(e){return JSON.stringify(e)}/**
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
 */const oE=function(e){let t={},n={},r={},i="";try{const s=e.split(".");t=da(Uu(s[0])||""),n=da(Uu(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:r,signature:i}},xF=function(e){const t=oE(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},SF=function(e){const t=oE(e).claims;return typeof t=="object"&&t.admin===!0};/**
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
 */function Qn(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Rs(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function R0(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Bu(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function Vu(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(N0(s)&&N0(o)){if(!Vu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function N0(e){return e!==null&&typeof e=="object"}/**
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
 */function ad(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function wo(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function xo(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}/**
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
 */class EF{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const r=this.W_;if(typeof t=="string")for(let d=0;d<16;d++)r[d]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<n;)if(s[o]=t.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=t[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)t[r]=this.chain_[i]>>s&255,++r;return t}}function CF(e,t){const n=new TF(e,t);return n.subscribe.bind(n)}class TF{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");bF(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=xf),i.error===void 0&&(i.error=xf),i.complete===void 0&&(i.complete=xf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bF(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function xf(){}function aE(e,t){return`${e} failed: ${t} argument `}/**
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
 */const kF=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,I(r<e.length,"Surrogate pair missing trail surrogate.");const o=e.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},ld=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};/**
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
 */function Gt(e){return e&&e._delegate?e._delegate:e}class xi{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Xr="[DEFAULT]";/**
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
 */let IF=class{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new cg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(OF(t))try{this.getOrInitializeService({instanceIdentifier:Xr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Xr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Xr){return this.instances.has(t)}getOptions(t=Xr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:PF(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Xr){return this.component?this.component.multipleInstances?t:Xr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function PF(e){return e===Xr?void 0:e}function OF(e){return e.instantiationMode==="EAGER"}/**
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
 */class RF{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new IF(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ae||(ae={}));const NF={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},AF=ae.INFO,DF={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},LF=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=DF[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class fg{constructor(t){this.name=t,this._logLevel=AF,this._logHandler=LF,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ae))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?NF[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...t),this._logHandler(this,ae.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...t),this._logHandler(this,ae.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...t),this._logHandler(this,ae.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...t),this._logHandler(this,ae.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...t),this._logHandler(this,ae.ERROR,...t)}}const FF=(e,t)=>t.some(n=>e instanceof n);let A0,D0;function $F(){return A0||(A0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function MF(){return D0||(D0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lE=new WeakMap,op=new WeakMap,uE=new WeakMap,Sf=new WeakMap,hg=new WeakMap;function jF(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Sr(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&lE.set(n,e)}).catch(()=>{}),hg.set(t,e),t}function zF(e){if(op.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});op.set(e,t)}let ap={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return op.get(e);if(t==="objectStoreNames")return e.objectStoreNames||uE.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sr(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function UF(e){ap=e(ap)}function BF(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ef(this),t,...n);return uE.set(r,t.sort?t.sort():[t]),Sr(r)}:MF().includes(e)?function(...t){return e.apply(Ef(this),t),Sr(lE.get(this))}:function(...t){return Sr(e.apply(Ef(this),t))}}function VF(e){return typeof e=="function"?BF(e):(e instanceof IDBTransaction&&zF(e),FF(e,$F())?new Proxy(e,ap):e)}function Sr(e){if(e instanceof IDBRequest)return jF(e);if(Sf.has(e))return Sf.get(e);const t=VF(e);return t!==e&&(Sf.set(e,t),hg.set(t,e)),t}const Ef=e=>hg.get(e);function WF(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Sr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Sr(o.result),l.oldVersion,l.newVersion,Sr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const HF=["get","getKey","getAll","getAllKeys","count"],GF=["put","add","delete","clear"],Cf=new Map;function L0(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Cf.get(t))return Cf.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=GF.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||HF.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Cf.set(t,s),s}UF(e=>({...e,get:(t,n,r)=>L0(t,n)||e.get(t,n,r),has:(t,n)=>!!L0(t,n)||e.has(t,n)}));/**
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
 */class KF{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(YF(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function YF(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const lp="@firebase/app",F0="0.9.25";/**
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
 */const Si=new fg("@firebase/app"),qF="@firebase/app-compat",QF="@firebase/analytics-compat",XF="@firebase/analytics",JF="@firebase/app-check-compat",ZF="@firebase/app-check",e$="@firebase/auth",t$="@firebase/auth-compat",n$="@firebase/database",r$="@firebase/database-compat",i$="@firebase/functions",s$="@firebase/functions-compat",o$="@firebase/installations",a$="@firebase/installations-compat",l$="@firebase/messaging",u$="@firebase/messaging-compat",c$="@firebase/performance",d$="@firebase/performance-compat",f$="@firebase/remote-config",h$="@firebase/remote-config-compat",p$="@firebase/storage",m$="@firebase/storage-compat",g$="@firebase/firestore",y$="@firebase/firestore-compat",v$="firebase",_$="10.7.1";/**
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
 */const up="[DEFAULT]",w$={[lp]:"fire-core",[qF]:"fire-core-compat",[XF]:"fire-analytics",[QF]:"fire-analytics-compat",[ZF]:"fire-app-check",[JF]:"fire-app-check-compat",[e$]:"fire-auth",[t$]:"fire-auth-compat",[n$]:"fire-rtdb",[r$]:"fire-rtdb-compat",[i$]:"fire-fn",[s$]:"fire-fn-compat",[o$]:"fire-iid",[a$]:"fire-iid-compat",[l$]:"fire-fcm",[u$]:"fire-fcm-compat",[c$]:"fire-perf",[d$]:"fire-perf-compat",[f$]:"fire-rc",[h$]:"fire-rc-compat",[p$]:"fire-gcs",[m$]:"fire-gcs-compat",[g$]:"fire-fst",[y$]:"fire-fst-compat","fire-js":"fire-js",[v$]:"fire-js-all"};/**
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
 */const Wu=new Map,cp=new Map;function x$(e,t){try{e.container.addComponent(t)}catch(n){Si.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ns(e){const t=e.name;if(cp.has(t))return Si.debug(`There were multiple attempts to register component ${t}.`),!1;cp.set(t,e);for(const n of Wu.values())x$(n,e);return!0}function cE(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const S$={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Er=new $a("app","Firebase",S$);/**
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
 */class E${constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Er.create("app-deleted",{appName:this._name})}}/**
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
 */const ud=_$;function dE(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:up,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Er.create("bad-app-name",{appName:String(i)});if(n||(n=rE()),!n)throw Er.create("no-options");const s=Wu.get(i);if(s){if(Vu(n,s.options)&&Vu(r,s.config))return s;throw Er.create("duplicate-app",{appName:i})}const o=new RF(i);for(const l of cp.values())o.addComponent(l);const a=new E$(n,r,o);return Wu.set(i,a),a}function C$(e=up){const t=Wu.get(e);if(!t&&e===up&&rE())return dE();if(!t)throw Er.create("no-app",{appName:e});return t}function Cr(e,t,n){var r;let i=(r=w$[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Si.warn(a.join(" "));return}Ns(new xi(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const T$="firebase-heartbeat-database",b$=1,fa="firebase-heartbeat-store";let Tf=null;function fE(){return Tf||(Tf=WF(T$,b$,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(fa)}}}).catch(e=>{throw Er.create("idb-open",{originalErrorMessage:e.message})})),Tf}async function k$(e){try{return await(await fE()).transaction(fa).objectStore(fa).get(hE(e))}catch(t){if(t instanceof jr)Si.warn(t.message);else{const n=Er.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Si.warn(n.message)}}}async function $0(e,t){try{const r=(await fE()).transaction(fa,"readwrite");await r.objectStore(fa).put(t,hE(e)),await r.done}catch(n){if(n instanceof jr)Si.warn(n.message);else{const r=Er.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Si.warn(r.message)}}}function hE(e){return`${e.name}!${e.options.appId}`}/**
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
 */const I$=1024,P$=30*24*60*60*1e3;class O${constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new N$(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=M0();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=P$}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=M0(),{heartbeatsToSend:r,unsentEntries:i}=R$(this._heartbeatsCache.heartbeats),s=zu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function M0(){return new Date().toISOString().substring(0,10)}function R$(e,t=I$){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),j0(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),j0(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class N${constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gF()?yF().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await k$(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $0(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $0(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function j0(e){return zu(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function A$(e){Ns(new xi("platform-logger",t=>new KF(t),"PRIVATE")),Ns(new xi("heartbeat",t=>new O$(t),"PRIVATE")),Cr(lp,F0,e),Cr(lp,F0,"esm2017"),Cr("fire-js","")}A$("");function pE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const D$=pE,mE=new $a("auth","Firebase",pE());/**
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
 */const Hu=new fg("@firebase/auth");function L$(e,...t){Hu.logLevel<=ae.WARN&&Hu.warn(`Auth (${ud}): ${e}`,...t)}function Wl(e,...t){Hu.logLevel<=ae.ERROR&&Hu.error(`Auth (${ud}): ${e}`,...t)}/**
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
 */function Ei(e,...t){throw mg(e,...t)}function pg(e,...t){return mg(e,...t)}function F$(e,t,n){const r=Object.assign(Object.assign({},D$()),{[t]:n});return new $a("auth","Firebase",r).create(t,{appName:e.name})}function mg(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return mE.create(e,...t)}function Z(e,t,...n){if(!e)throw mg(t,...n)}function Fn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Wl(t),new Error(t)}function Gu(e,t){e||Fn(t)}function $$(){return z0()==="http:"||z0()==="https:"}function z0(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function M$(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($$()||mF()||"connection"in navigator)?navigator.onLine:!0}function j$(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Ma{constructor(t,n){this.shortDelay=t,this.longDelay=n,Gu(n>t,"Short delay should be less than long delay!"),this.isMobile=dg()||iE()}get(){return M$()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function z$(e,t){Gu(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class gE{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const U$={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const B$=new Ma(3e4,6e4);function zr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ur(e,t,n,r,i={}){return yE(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=ad(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),gE.fetch()(vE(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function yE(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},U$),t);try{const i=new W$(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw vl(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw vl(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw vl(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw vl(e,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw F$(e,c,u);Ei(e,c)}}catch(i){if(i instanceof jr)throw i;Ei(e,"network-request-failed",{message:String(i)})}}async function ja(e,t,n,r,i={}){const s=await Ur(e,t,n,r,i);return"mfaPendingCredential"in s&&Ei(e,"multi-factor-auth-required",{_serverResponse:s}),s}function vE(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?z$(e.config,i):`${e.config.apiScheme}://${i}`}function V$(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class W${constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(pg(this.auth,"network-request-failed")),B$.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vl(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=pg(e,t,r);return i.customData._tokenResponse=n,i}function U0(e){return e!==void 0&&e.enterprise!==void 0}class H${constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return V$(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function G$(e,t){return Ur(e,"GET","/v2/recaptchaConfig",zr(e,t))}/**
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
 */async function K$(e,t){return Ur(e,"POST","/v1/accounts:delete",t)}async function Y$(e,t){return Ur(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Ao(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function q$(e,t=!1){const n=Gt(e),r=await n.getIdToken(t),i=_E(r);Z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ao(bf(i.auth_time)),issuedAtTime:Ao(bf(i.iat)),expirationTime:Ao(bf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function bf(e){return Number(e)*1e3}function _E(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Wl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Uu(n);return i?JSON.parse(i):(Wl("Failed to decode base64 JWT payload"),null)}catch(i){return Wl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Q$(e){const t=_E(e);return Z(t,"internal-error"),Z(typeof t.exp<"u","internal-error"),Z(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Ku(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof jr&&X$(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function X$({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class J${constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class wE{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ao(this.lastLoginAt),this.creationTime=Ao(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Yu(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Ku(e,Y$(n,{idToken:r}));Z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?tM(s.providerUserInfo):[],a=eM(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new wE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function Z$(e){const t=Gt(e);await Yu(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function eM(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function tM(e){return e.map(t=>{var{providerId:n}=t,r=Rm(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function nM(e,t){const n=await yE(e,{},async()=>{const r=ad({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=vE(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",gE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function rM(e,t){return Ur(e,"POST","/v2/accounts:revokeToken",zr(e,t))}/**
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
 */class ha{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Z(t.idToken,"internal-error"),Z(typeof t.idToken<"u","internal-error"),Z(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Q$(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return Z(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await nM(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ha;return r&&(Z(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(Z(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(Z(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ha,this.toJSON())}_performRefresh(){return Fn("not implemented")}}/**
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
 */function Zn(e,t){Z(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class fi{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Rm(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new J$(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new wE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Ku(this,this.stsTokenManager.getToken(this.auth,t));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return q$(this,t)}reload(){return Z$(this)}_assign(t){this!==t&&(Z(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new fi(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Yu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Ku(this,K$(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:x,isAnonymous:E,providerData:C,stsTokenManager:S}=n;Z(v&&S,t,"internal-error");const O=ha.fromJSON(this.name,S);Z(typeof v=="string",t,"internal-error"),Zn(d,t.name),Zn(f,t.name),Z(typeof x=="boolean",t,"internal-error"),Z(typeof E=="boolean",t,"internal-error"),Zn(g,t.name),Zn(y,t.name),Zn(_,t.name),Zn(w,t.name),Zn(p,t.name),Zn(h,t.name);const $=new fi({uid:v,auth:t,email:f,emailVerified:x,displayName:d,isAnonymous:E,photoURL:y,phoneNumber:g,tenantId:_,stsTokenManager:O,createdAt:p,lastLoginAt:h});return C&&Array.isArray(C)&&($.providerData=C.map(F=>Object.assign({},F))),w&&($._redirectEventId=w),$}static async _fromIdTokenResponse(t,n,r=!1){const i=new ha;i.updateFromServerResponse(n);const s=new fi({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Yu(s),s}}/**
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
 */const B0=new Map;function ii(e){Gu(e instanceof Function,"Expected a class definition");let t=B0.get(e);return t?(Gu(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,B0.set(e,t),t)}/**
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
 */class xE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}xE.type="NONE";const V0=xE;/**
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
 */function kf(e,t,n){return`firebase:${e}:${t}:${n}`}class fs{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=kf(this.userKey,i.apiKey,s),this.fullPersistenceKey=kf("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?fi._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new fs(ii(V0),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||ii(V0);const o=kf(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=fi._fromJSON(t,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new fs(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new fs(s,t,r))}}/**
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
 */function W0(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(aM(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(iM(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(uM(t))return"Blackberry";if(cM(t))return"Webos";if(sM(t))return"Safari";if((t.includes("chrome/")||oM(t))&&!t.includes("edge/"))return"Chrome";if(lM(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function iM(e=Tn()){return/firefox\//i.test(e)}function sM(e=Tn()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function oM(e=Tn()){return/crios\//i.test(e)}function aM(e=Tn()){return/iemobile/i.test(e)}function lM(e=Tn()){return/android/i.test(e)}function uM(e=Tn()){return/blackberry/i.test(e)}function cM(e=Tn()){return/webos/i.test(e)}/**
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
 */function SE(e,t=[]){let n;switch(e){case"Browser":n=W0(Tn());break;case"Worker":n=`${W0(Tn())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ud}/${r}`}/**
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
 */class dM{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function fM(e,t={}){return Ur(e,"GET","/v2/passwordPolicy",zr(e,t))}/**
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
 */const hM=6;class pM{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:hM,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class mM{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new H0(this),this.idTokenSubscription=new H0(this),this.beforeStateQueue=new dM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ii(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await fs.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Yu(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=j$()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Gt(t):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&Z(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ii(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await fM(this),n=new pM(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new $a("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await rM(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ii(t)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await fs.create(this,[ii(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=SE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&L$(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function za(e){return Gt(e)}class H0{constructor(t){this.auth=t,this.observer=null,this.addObserver=CF(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function gM(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function yM(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=pg("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",gM().appendChild(r)})}const vM="https://www.google.com/recaptcha/enterprise.js?render=",_M="recaptcha-enterprise",wM="NO_RECAPTCHA";class xM{constructor(t){this.type=_M,this.auth=za(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{G$(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new H$(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;U0(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o(wM)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&U0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}yM(vM+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function G0(e,t,n,r=!1){const i=new xM(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function dp(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await G0(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await G0(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(s)})}/**
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
 */function SM(e,t){const n=cE(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Vu(s,t??{}))return i;Ei(i,"already-initialized")}return n.initialize({options:t})}function EM(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ii);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
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
 */class EE{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Fn("not implemented")}_getIdTokenResponse(t){return Fn("not implemented")}_linkToIdToken(t,n){return Fn("not implemented")}_getReauthenticationResolver(t){return Fn("not implemented")}}async function CM(e,t){return Ur(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function TM(e,t){return ja(e,"POST","/v1/accounts:signInWithPassword",zr(e,t))}/**
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
 */async function bM(e,t){return ja(e,"POST","/v1/accounts:signInWithEmailLink",zr(e,t))}async function kM(e,t){return ja(e,"POST","/v1/accounts:signInWithEmailLink",zr(e,t))}/**
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
 */class pa extends EE{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new pa(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new pa(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dp(t,n,"signInWithPassword",TM);case"emailLink":return bM(t,{email:this._email,oobCode:this._password});default:Ei(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dp(t,r,"signUpPassword",CM);case"emailLink":return kM(t,{idToken:n,email:this._email,oobCode:this._password});default:Ei(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function If(e,t){return ja(e,"POST","/v1/accounts:signInWithIdp",zr(e,t))}/**
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
 */const IM="http://localhost";class Ci extends EE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Ci(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ei("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Rm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ci(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return If(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,If(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,If(t,n)}buildRequest(){const t={requestUri:IM,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ad(n)}return t}}/**
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
 */function PM(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function OM(e){const t=wo(xo(e)).link,n=t?wo(xo(t)).deep_link_id:null,r=wo(xo(e)).deep_link_id;return(r?wo(xo(r)).link:null)||r||n||t||e}class gg{constructor(t){var n,r,i,s,o,a;const l=wo(xo(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=PM((i=l.mode)!==null&&i!==void 0?i:null);Z(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=OM(t);try{return new gg(n)}catch{return null}}}/**
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
 */class Gs{constructor(){this.providerId=Gs.PROVIDER_ID}static credential(t,n){return pa._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=gg.parseLink(n);return Z(r,"argument-error"),pa._fromEmailAndCode(t,r.code,r.tenantId)}}Gs.PROVIDER_ID="password";Gs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Gs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class RM{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class cd extends RM{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class sr extends cd{constructor(){super("facebook.com")}static credential(t){return Ci._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return sr.credentialFromTaggedObject(t)}static credentialFromError(t){return sr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return sr.credential(t.oauthAccessToken)}catch{return null}}}sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";sr.PROVIDER_ID="facebook.com";/**
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
 */class An extends cd{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Ci._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return An.credentialFromTaggedObject(t)}static credentialFromError(t){return An.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return An.credential(n,r)}catch{return null}}}An.GOOGLE_SIGN_IN_METHOD="google.com";An.PROVIDER_ID="google.com";/**
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
 */class or extends cd{constructor(){super("github.com")}static credential(t){return Ci._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return or.credentialFromTaggedObject(t)}static credentialFromError(t){return or.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return or.credential(t.oauthAccessToken)}catch{return null}}}or.GITHUB_SIGN_IN_METHOD="github.com";or.PROVIDER_ID="github.com";/**
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
 */class ar extends cd{constructor(){super("twitter.com")}static credential(t,n){return Ci._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return ar.credentialFromTaggedObject(t)}static credentialFromError(t){return ar.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return ar.credential(n,r)}catch{return null}}}ar.TWITTER_SIGN_IN_METHOD="twitter.com";ar.PROVIDER_ID="twitter.com";/**
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
 */async function NM(e,t){return ja(e,"POST","/v1/accounts:signUp",zr(e,t))}/**
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
 */class ma{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await fi._fromIdTokenResponse(t,r,i),o=K0(r);return new ma({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=K0(r);return new ma({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function K0(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class qu extends jr{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,qu.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new qu(t,n,r,i)}}function AM(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?qu._fromErrorAndOperation(e,s,t,r):s})}/**
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
 */async function DM(e,t,n=!1){const r="signIn",i=await AM(e,r,t),s=await ma._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function LM(e,t){return DM(za(e),t)}/**
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
 */async function CE(e){const t=za(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function FM(e,t,n){const r=za(e),o=await dp(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",NM).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&CE(e),l}),a=await ma._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function $M(e,t,n){return LM(Gt(e),Gs.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&CE(e),r})}/**
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
 */async function MM(e,t){return Ur(e,"POST","/v1/accounts:update",t)}/**
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
 */async function jM(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=Gt(e),s={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},o=await Ku(r,MM(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function zM(e){return Gt(e).signOut()}new Ma(3e4,6e4);/**
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
 */new Ma(2e3,1e4);/**
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
 */new Ma(3e4,6e4);/**
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
 */new Ma(5e3,15e3);var Y0="@firebase/auth",q0="1.5.1";/**
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
 */class UM{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function BM(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function VM(e){Ns(new xi("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:SE(e)},u=new mM(r,i,s,l);return EM(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Ns(new xi("auth-internal",t=>{const n=za(t.getProvider("auth").getImmediate());return(r=>new UM(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Cr(Y0,q0,BM(e)),Cr(Y0,q0,"esm2017")}/**
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
 */const WM=5*60;hF("authIdTokenMaxAge");VM("Browser");var HM="firebase",GM="10.7.1";/**
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
 */Cr(HM,GM,"app");const Q0="@firebase/database",X0="1.0.2";/**
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
 */let TE="";function KM(e){TE=e}/**
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
 */class YM{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),Oe(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:da(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
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
 */class qM{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return Qn(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
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
 */const bE=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new YM(t)}}catch{}return new qM},si=bE("localStorage"),fp=bE("sessionStorage");/**
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
 */const hs=new fg("@firebase/database"),QM=function(){let e=1;return function(){return e++}}(),kE=function(e){const t=kF(e),n=new EF;n.update(t);const r=n.digest();return lg.encodeByteArray(r)},Ua=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?t+=Ua.apply(null,r):typeof r=="object"?t+=Oe(r):t+=r,t+=" "}return t};let hi=null,J0=!0;const XM=function(e,t){I(!t||e===!0||e===!1,"Can't turn on custom loggers persistently."),e===!0?(hs.logLevel=ae.VERBOSE,hi=hs.log.bind(hs),t&&fp.set("logging_enabled",!0)):typeof e=="function"?hi=e:(hi=null,fp.remove("logging_enabled"))},tt=function(...e){if(J0===!0&&(J0=!1,hi===null&&fp.get("logging_enabled")===!0&&XM(!0)),hi){const t=Ua.apply(null,e);hi(t)}},Ba=function(e){return function(...t){tt(e,...t)}},hp=function(...e){const t="FIREBASE INTERNAL ERROR: "+Ua(...e);hs.error(t)},Gn=function(...e){const t=`FIREBASE FATAL ERROR: ${Ua(...e)}`;throw hs.error(t),new Error(t)},Pt=function(...e){const t="FIREBASE WARNING: "+Ua(...e);hs.warn(t)},JM=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Pt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},IE=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},ZM=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},As="[MIN_NAME]",Ti="[MAX_NAME]",Ks=function(e,t){if(e===t)return 0;if(e===As||t===Ti)return-1;if(t===As||e===Ti)return 1;{const n=Z0(e),r=Z0(t);return n!==null?r!==null?n-r===0?e.length-t.length:n-r:-1:r!==null?1:e<t?-1:1}},ej=function(e,t){return e===t?0:e<t?-1:1},oo=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Oe(t))},yg=function(e){if(typeof e!="object"||e===null)return Oe(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)r!==0&&(n+=","),n+=Oe(t[r]),n+=":",n+=yg(e[t[r]]);return n+="}",n},PE=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function wt(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const OE=function(e){I(!IE(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,s,o,a,l;e===0?(s=0,o=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(e)/Math.LN2),r),s=a+r,o=Math.round(e*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(e/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=t;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},tj=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},nj=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function rj(e,t){let n="Unknown Error";e==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":e==="permission_denied"?n="Client doesn't have permission to access the desired data.":e==="unavailable"&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}const ij=new RegExp("^-?(0*)\\d{1,10}$"),sj=-2147483648,oj=2147483647,Z0=function(e){if(ij.test(e)){const t=Number(e);if(t>=sj&&t<=oj)return t}return null},Va=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw Pt("Exception was thrown by user callback.",n),t},Math.floor(0))}},aj=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Do=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class lj{constructor(t,n){this.appName_=t,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(t))}notifyForInvalidToken(){Pt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class uj{constructor(t,n,r){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(tt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Pt(t)}}class ps{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}ps.OWNER="owner";/**
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
 */const vg="5",RE="v",NE="s",AE="r",DE="f",LE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,FE="ls",$E="p",pp="ac",ME="websocket",jE="long_polling";/**
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
 */class zE{constructor(t,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=si.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&si.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function cj(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function UE(e,t,n){I(typeof t=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let r;if(t===ME)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===jE)r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);cj(e)&&(n.ns=e.namespace);const i=[];return wt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class dj{constructor(){this.counters_={}}incrementCounter(t,n=1){Qn(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return sF(this.counters_)}}/**
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
 */const Pf={},Of={};function _g(e){const t=e.toString();return Pf[t]||(Pf[t]=new dj),Pf[t]}function fj(e,t){const n=e.toString();return Of[n]||(Of[n]=t()),Of[n]}/**
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
 */class hj{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Va(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const e_="start",pj="close",mj="pLPCommand",gj="pRTLPCB",BE="id",VE="pw",WE="ser",yj="cb",vj="seg",_j="ts",wj="d",xj="dframe",HE=1870,GE=30,Sj=HE-GE,Ej=25e3,Cj=3e4;class is{constructor(t,n,r,i,s,o,a){this.connId=t,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ba(t),this.stats_=_g(n),this.urlFn=l=>(this.appCheckToken&&(l[pp]=this.appCheckToken),UE(n,jE,l))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new hj(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Cj)),ZM(()=>{if(this.isClosed_)return;this.scriptTagHolder=new wg((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===e_)this.id=a,this.password=l;else if(o===pj)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[e_]="t",r[WE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[yj]=this.scriptTagHolder.uniqueCallbackIdentifier),r[RE]=vg,this.transportSessionId&&(r[NE]=this.transportSessionId),this.lastSessionId&&(r[FE]=this.lastSessionId),this.applicationId&&(r[$E]=this.applicationId),this.appCheckToken&&(r[pp]=this.appCheckToken),typeof location<"u"&&location.hostname&&LE.test(location.hostname)&&(r[AE]=DE);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){is.forceAllow_=!0}static forceDisallow(){is.forceDisallow_=!0}static isAvailable(){return is.forceAllow_?!0:!is.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!tj()&&!nj()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=Oe(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=tE(n),i=PE(r,Sj);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[xj]="t",r[BE]=t,r[VE]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=Oe(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class wg{constructor(t,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=QM(),window[mj+this.uniqueCallbackIdentifier]=t,window[gj+this.uniqueCallbackIdentifier]=n,this.myIFrame=wg.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){tt("frame writing exception"),a.stack&&tt(a.stack),tt(a)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||tt("No IE domain setting required")}catch{const r=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[BE]=this.myID,t[VE]=this.myPW,t[WE]=this.currentSerial;let n=this.urlFn(t),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+GE+r.length<=HE;){const o=this.pendingSegs.shift();r=r+"&"+vj+i+"="+o.seg+"&"+_j+i+"="+o.ts+"&"+wj+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,r){this.pendingSegs.push({seg:t,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(Ej)),s=()=>{clearTimeout(i),r()};this.addTag(t,s)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=t,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{tt("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const Tj=16384,bj=45e3;let Qu=null;typeof MozWebSocket<"u"?Qu=MozWebSocket:typeof WebSocket<"u"&&(Qu=WebSocket);class rn{constructor(t,n,r,i,s,o,a){this.connId=t,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ba(this.connId),this.stats_=_g(n),this.connURL=rn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,r,i,s){const o={};return o[RE]=vg,typeof location<"u"&&location.hostname&&LE.test(location.hostname)&&(o[AE]=DE),n&&(o[NE]=n),r&&(o[FE]=r),i&&(o[pp]=i),s&&(o[$E]=s),UE(t,ME,o)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,si.set("previous_websocket_failure",!0);try{let r;sE(),this.mySock=new Qu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){rn.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(t=!0)}return!t&&Qu!==null&&!rn.forceDisallow_}static previouslyFailed(){return si.isInMemoryStorage||si.get("previous_websocket_failure")===!0}markConnectionHealthy(){si.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=da(n);this.onMessage(r)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(I(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(t){this.resetKeepAlive();const n=Oe(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=PE(n,Tj);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(bj))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}rn.responsesRequiredToBeHealthy=2;rn.healthyTimeout=3e4;/**
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
 */class ga{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[is,rn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const n=rn&&rn.isAvailable();let r=n&&!rn.previouslyFailed();if(t.webSocketOnly&&(n||Pt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[rn];else{const i=this.transports_=[];for(const s of ga.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ga.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ga.globalTransportInitialized_=!1;/**
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
 */const kj=6e4,Ij=5e3,Pj=10*1024,Oj=100*1024,Rf="t",t_="d",Rj="s",n_="r",Nj="e",r_="o",i_="a",s_="n",o_="p",Aj="h";class Dj{constructor(t,n,r,i,s,o,a,l,u,c){this.id=t,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ba("c:"+this.id+":"),this.transportManager_=new ga(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=Do(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Oj?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Pj?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Rf in t){const n=t[Rf];n===i_?this.upgradeIfSecondaryHealthy_():n===n_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===r_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=oo("t",t),r=oo("d",t);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:o_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:i_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:s_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=oo("t",t),r=oo("d",t);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=oo(Rf,t);if(t_ in t){const r=t[t_];if(n===Aj){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===s_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Rj?this.onConnectionShutdown_(r):n===n_?this.onReset_(r):n===Nj?hp("Server Error: "+r):n===r_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):hp("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,r=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),vg!==r&&Pt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Do(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(kj))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Do(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ij))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:o_,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(si.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class KE{put(t,n,r,i){}merge(t,n,r,i){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,r){}onDisconnectMerge(t,n,r){}onDisconnectCancel(t,n){}reportStats(t){}}/**
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
 */class YE{constructor(t){this.allowedEvents_=t,this.listeners_={},I(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const r=[...this.listeners_[t]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(t,n,r){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:r});const i=this.getInitialEvent(t);i&&n.apply(r,i)}off(t,n,r){this.validateEventType_(t);const i=this.listeners_[t]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(t){I(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
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
 */class Xu extends YE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!dg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Xu}getInitialEvent(t){return I(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const a_=32,l_=768;class le{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function Q(){return new le("")}function Y(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Rr(e){return e.pieces_.length-e.pieceNum_}function ce(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new le(e.pieces_,t)}function qE(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Lj(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function QE(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function XE(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new le(t,0)}function Re(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof le)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const r=t.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new le(n,0)}function G(e){return e.pieceNum_>=e.pieces_.length}function ot(e,t){const n=Y(e),r=Y(t);if(n===null)return t;if(n===r)return ot(ce(e),ce(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function JE(e,t){if(Rr(e)!==Rr(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function sn(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(Rr(e)>Rr(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class Fj{constructor(t,n){this.errorPrefix_=n,this.parts_=QE(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ld(this.parts_[r]);ZE(this)}}function $j(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=ld(t),ZE(e)}function Mj(e){const t=e.parts_.pop();e.byteLength_-=ld(t),e.parts_.length>0&&(e.byteLength_-=1)}function ZE(e){if(e.byteLength_>l_)throw new Error(e.errorPrefix_+"has a key path longer than "+l_+" bytes ("+e.byteLength_+").");if(e.parts_.length>a_)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+a_+") or object contains a cycle "+Jr(e))}function Jr(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
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
 */class xg extends YE{constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[t];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new xg}getInitialEvent(t){return I(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
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
 */const ao=1e3,jj=60*5*1e3,u_=30*1e3,zj=1.3,Uj=3e4,Bj="server_kill",c_=3;class zn extends KE{constructor(t,n,r,i,s,o,a,l){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=zn.nextPersistentConnectionId_++,this.log_=Ba("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ao,this.maxReconnectDelay_=jj,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!sE())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xg.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&Xu.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,r){const i=++this.requestNumber_,s={r:i,a:t,b:n};this.log_(Oe(s)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(t){this.initConnection_();const n=new cg,i={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(t,n,r,i){this.initConnection_();const s=t._queryIdentifier,o=t._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),I(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:t,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(t){const n=t.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";t.tag&&(s.q=n._queryObject,s.t=t.tag),s.h=t.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;zn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===t&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),t.onComplete&&t.onComplete(u,l))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&Qn(t,"w")){const r=Rs(t,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Pt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||SF(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=u_)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=xF(t)?"auth":"gauth",r={cred:t};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===t&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,r=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(t,n){const r=t._path.toString(),i=t._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),I(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,t._queryObject,n)}sendUnlisten_(t,n,r,i){this.log_("Unlisten on "+t+" for "+n);const s={p:t},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:r})}onDisconnectMerge(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:r})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+t,s),this.sendRequest(t,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(t,n,r,i){this.putInternal("p",t,n,r,i)}merge(t,n,r,i){this.putInternal("m",t,n,r,i)}putInternal(t,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:t,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,r=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+Oe(t));const n=t.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):hp("Unrecognized action received from server: "+Oe(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ao,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=ao,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Uj&&(this.reconnectDelay_=ao),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*zj)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+zn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?tt("getToken() completed but was canceled"):(tt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new Dj(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,r,g=>{Pt(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(Bj)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Pt(d),l())}}}interrupt(t){tt("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){tt("Resuming connection for reason: "+t),delete this.interruptReasons_[t],R0(this.interruptReasons_)&&(this.reconnectDelay_=ao,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let r;n?r=n.map(s=>yg(s)).join("$"):r="default";const i=this.removeListen_(t,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(t,n){const r=new le(t).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(t,n){tt("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=c_&&(this.reconnectDelay_=u_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){tt("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=c_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+TE.replace(/\./g,"-")]=1,dg()?t["framework.cordova"]=1:iE()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=Xu.getInstance().currentlyOnline();return R0(this.interruptReasons_)&&t}}zn.nextPersistentConnectionId_=0;zn.nextConnectionId_=0;/**
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
 */class dd{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const r=new H(As,t),i=new H(As,n);return this.compare(r,i)!==0}minPost(){return H.MIN}}/**
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
 */let _l;class eC extends dd{static get __EMPTY_NODE(){return _l}static set __EMPTY_NODE(t){_l=t}compare(t,n){return Ks(t.name,n.name)}isDefinedOn(t){throw Hs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return H.MIN}maxPost(){return new H(Ti,_l)}makePost(t,n){return I(typeof t=="string","KeyIndex indexValue must always be a string."),new H(t,_l)}toString(){return".key"}}const ms=new eC;/**
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
 */class wl{constructor(t,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!t.isEmpty();)if(t=t,o=n?r(t.key,n):1,i&&(o*=-1),o<0)this.isReverse_?t=t.left:t=t.right;else if(o===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class Me{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??Me.RED,this.left=i??gt.EMPTY_NODE,this.right=s??gt.EMPTY_NODE}copy(t,n,r,i,s){return new Me(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return gt.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let r,i;if(r=this,n(t,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(t,r.key)===0){if(r.right.isEmpty())return gt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}Me.RED=!0;Me.BLACK=!1;class Vj{copy(t,n,r,i,s){return this}insert(t,n,r){return new Me(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class gt{constructor(t,n=gt.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new gt(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,Me.BLACK,null,null))}remove(t){return new gt(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Me.BLACK,null,null))}get(t){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(t,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(t){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(t,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new wl(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new wl(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new wl(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new wl(this.root_,null,this.comparator_,!0,t)}}gt.EMPTY_NODE=new Vj;/**
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
 */function Wj(e,t){return Ks(e.name,t.name)}function Sg(e,t){return Ks(e,t)}/**
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
 */let mp;function Hj(e){mp=e}const tC=function(e){return typeof e=="number"?"number:"+OE(e):"string:"+e},nC=function(e){if(e.isLeafNode()){const t=e.val();I(typeof t=="string"||typeof t=="number"||typeof t=="object"&&Qn(t,".sv"),"Priority must be a string or number.")}else I(e===mp||e.isEmpty(),"priority of unexpected type.");I(e===mp||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let d_;class Le{constructor(t,n=Le.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),nC(this.priorityNode_)}static set __childrenNodeConstructor(t){d_=t}static get __childrenNodeConstructor(){return d_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new Le(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return G(t)?this:Y(t)===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:Le.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const r=Y(t);return r===null?n:n.isEmpty()&&r!==".priority"?this:(I(r!==".priority"||Rr(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Le.__childrenNodeConstructor.EMPTY_NODE.updateChild(ce(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+tC(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=OE(this.value_):t+=this.value_,this.lazyHash_=kE(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===Le.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof Le.__childrenNodeConstructor?-1:(I(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,r=typeof this.value_,i=Le.VALUE_TYPE_ORDER.indexOf(n),s=Le.VALUE_TYPE_ORDER.indexOf(r);return I(i>=0,"Unknown leaf type: "+n),I(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Le.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let rC,iC;function Gj(e){rC=e}function Kj(e){iC=e}class Yj extends dd{compare(t,n){const r=t.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ks(t.name,n.name):s}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return H.MIN}maxPost(){return new H(Ti,new Le("[PRIORITY-POST]",iC))}makePost(t,n){const r=rC(t);return new H(n,new Le("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ee=new Yj;/**
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
 */const qj=Math.log(2);class Qj{constructor(t){const n=s=>parseInt(Math.log(s)/qj,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const i=r(this.count);this.bits_=t+1&i}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const Ju=function(e,t,n,r){e.sort(t);const i=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=e[l],f=n?n(d):d,new Me(f,d.node,Me.BLACK,null,null);{const g=parseInt(c/2,10)+l,y=i(l,g),_=i(g+1,u);return d=e[g],f=n?n(d):d,new Me(f,d.node,Me.BLACK,y,_)}},s=function(l){let u=null,c=null,d=e.length;const f=function(y,_){const w=d-y,p=d;d-=y;const h=i(w+1,p),v=e[w],x=n?n(v):v;g(new Me(x,v.node,_,null,h))},g=function(y){u?(u.left=y,u=y):(c=y,u=y)};for(let y=0;y<l.count;++y){const _=l.nextBitIsOne(),w=Math.pow(2,l.count-(y+1));_?f(w,Me.BLACK):(f(w,Me.BLACK),f(w,Me.RED))}return c},o=new Qj(e.length),a=s(o);return new gt(r||t,a)};/**
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
 */let Nf;const Ui={};class $n{constructor(t,n){this.indexes_=t,this.indexSet_=n}static get Default(){return I(Ui&&Ee,"ChildrenNode.ts has not been loaded"),Nf=Nf||new $n({".priority":Ui},{".priority":Ee}),Nf}get(t){const n=Rs(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof gt?n:null}hasIndex(t){return Qn(this.indexSet_,t.toString())}addIndex(t,n){I(t!==ms,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(H.Wrap);let o=s.getNext();for(;o;)i=i||t.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Ju(r,t.getCompare()):a=Ui;const l=t.toString(),u=Object.assign({},this.indexSet_);u[l]=t;const c=Object.assign({},this.indexes_);return c[l]=a,new $n(c,u)}addToIndexes(t,n){const r=Bu(this.indexes_,(i,s)=>{const o=Rs(this.indexSet_,s);if(I(o,"Missing index implementation for "+s),i===Ui)if(o.isDefinedOn(t.node)){const a=[],l=n.getIterator(H.Wrap);let u=l.getNext();for(;u;)u.name!==t.name&&a.push(u),u=l.getNext();return a.push(t),Ju(a,o.getCompare())}else return Ui;else{const a=n.get(t.name);let l=i;return a&&(l=l.remove(new H(t.name,a))),l.insert(t,t.node)}});return new $n(r,this.indexSet_)}removeFromIndexes(t,n){const r=Bu(this.indexes_,i=>{if(i===Ui)return i;{const s=n.get(t.name);return s?i.remove(new H(t.name,s)):i}});return new $n(r,this.indexSet_)}}/**
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
 */let lo;class U{constructor(t,n,r){this.children_=t,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&nC(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return lo||(lo=new U(new gt(Sg),null,$n.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||lo}updatePriority(t){return this.children_.isEmpty()?this:new U(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?lo:n}}getChild(t){const n=Y(t);return n===null?this:this.getImmediateChild(n).getChild(ce(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(I(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const r=new H(t,n);let i,s;n.isEmpty()?(i=this.children_.remove(t),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(t,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?lo:this.priorityNode_;return new U(i,o,s)}}updateChild(t,n){const r=Y(t);if(r===null)return n;{I(Y(t)!==".priority"||Rr(t)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ce(t),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ee,(o,a)=>{n[o]=a.val(t),r++,s&&U.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!t&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+tC(this.getPriority().val())+":"),this.forEachChild(Ee,(n,r)=>{const i=r.hash();i!==""&&(t+=":"+n+":"+i)}),this.lazyHash_=t===""?"":kE(t)}return this.lazyHash_}getPredecessorChildName(t,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new H(t,n));return s?s.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new H(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new H(n,this.children_.get(n)):null}forEachChild(t,n){const r=this.resolveIndex_(t);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(t,i=>i);{const i=this.children_.getIteratorFrom(t.name,H.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,t)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(t,i=>i);{const i=this.children_.getReverseIteratorFrom(t.name,H.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,t)>0;)i.getNext(),s=i.peek();return i}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Wa?-1:0}withIndex(t){if(t===ms||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new U(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===ms||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ee),i=n.getIterator(Ee);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(t){return t===ms?null:this.indexMap_.get(t.toString())}}U.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Xj extends U{constructor(){super(new gt(Sg),U.EMPTY_NODE,$n.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return U.EMPTY_NODE}isEmpty(){return!1}}const Wa=new Xj;Object.defineProperties(H,{MIN:{value:new H(As,U.EMPTY_NODE)},MAX:{value:new H(Ti,Wa)}});eC.__EMPTY_NODE=U.EMPTY_NODE;Le.__childrenNodeConstructor=U;Hj(Wa);Kj(Wa);/**
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
 */const Jj=!0;function He(e,t=null){if(e===null)return U.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),I(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new Le(n,He(t))}if(!(e instanceof Array)&&Jj){const n=[];let r=!1;if(wt(e,(o,a)=>{if(o.substring(0,1)!=="."){const l=He(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new H(o,l)))}}),n.length===0)return U.EMPTY_NODE;const s=Ju(n,Wj,o=>o.name,Sg);if(r){const o=Ju(n,Ee.getCompare());return new U(s,He(t),new $n({".priority":o},{".priority":Ee}))}else return new U(s,He(t),$n.Default)}else{let n=U.EMPTY_NODE;return wt(e,(r,i)=>{if(Qn(e,r)&&r.substring(0,1)!=="."){const s=He(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(He(t))}}Gj(He);/**
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
 */class Zj extends dd{constructor(t){super(),this.indexPath_=t,I(!G(t)&&Y(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const r=this.extractChild(t.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ks(t.name,n.name):s}makePost(t,n){const r=He(t),i=U.EMPTY_NODE.updateChild(this.indexPath_,r);return new H(n,i)}maxPost(){const t=U.EMPTY_NODE.updateChild(this.indexPath_,Wa);return new H(Ti,t)}toString(){return QE(this.indexPath_,0).join("/")}}/**
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
 */class e3 extends dd{compare(t,n){const r=t.node.compareTo(n.node);return r===0?Ks(t.name,n.name):r}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return H.MIN}maxPost(){return H.MAX}makePost(t,n){const r=He(t);return new H(n,r)}toString(){return".value"}}const t3=new e3;/**
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
 */function sC(e){return{type:"value",snapshotNode:e}}function Ds(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function ya(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function va(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function n3(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
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
 */class Eg{constructor(t){this.index_=t}updateChild(t,n,r,i,s,o){I(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=t.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?t.hasChild(n)?o.trackChildChange(ya(n,a)):I(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ds(n,r)):o.trackChildChange(va(n,r,a))),t.isLeafNode()&&r.isEmpty())?t:t.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(t,n,r){return r!=null&&(t.isLeafNode()||t.forEachChild(Ee,(i,s)=>{n.hasChild(i)||r.trackChildChange(ya(i,s))}),n.isLeafNode()||n.forEachChild(Ee,(i,s)=>{if(t.hasChild(i)){const o=t.getImmediateChild(i);o.equals(s)||r.trackChildChange(va(i,s,o))}else r.trackChildChange(Ds(i,s))})),n.withIndex(this.index_)}updatePriority(t,n){return t.isEmpty()?U.EMPTY_NODE:t.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class _a{constructor(t){this.indexedFilter_=new Eg(t.getIndex()),this.index_=t.getIndex(),this.startPost_=_a.getStartPost_(t),this.endPost_=_a.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,r=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return n&&r}updateChild(t,n,r,i,s,o){return this.matches(new H(n,r))||(r=U.EMPTY_NODE),this.indexedFilter_.updateChild(t,n,r,i,s,o)}updateFullNode(t,n,r){n.isLeafNode()&&(n=U.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(U.EMPTY_NODE);const s=this;return n.forEachChild(Ee,(o,a)=>{s.matches(new H(o,a))||(i=i.updateImmediateChild(o,U.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,i,r)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const n=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),n)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const n=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),n)}else return t.getIndex().maxPost()}}/**
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
 */class r3{constructor(t){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new _a(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,n,r,i,s,o){return this.rangedFilter_.matches(new H(n,r))||(r=U.EMPTY_NODE),t.getImmediateChild(n).equals(r)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,n,r,i,s,o):this.fullLimitUpdateChild_(t,n,r,s,o)}updateFullNode(t,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=U.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=U.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(U.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,U.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,i,r)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,g)=>d(g,f)}else o=this.index_.getCompare();const a=t;I(a.numChildren()===this.limit_,"");const l=new H(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,l);if(c&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(va(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ya(n,d));const _=a.updateImmediateChild(n,U.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Ds(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return r.isEmpty()?t:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(ya(u.name,u.node)),s.trackChildChange(Ds(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,U.EMPTY_NODE)):t}}/**
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
 */class Cg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ee}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:As}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ti}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ee}copy(){const t=new Cg;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function i3(e){return e.loadsAllData()?new Eg(e.getIndex()):e.hasLimit()?new r3(e):new _a(e)}function f_(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Ee?n="$priority":e.index_===t3?n="$value":e.index_===ms?n="$key":(I(e.index_ instanceof Zj,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Oe(n),e.startSet_){const r=e.startAfterSet_?"startAfter":"startAt";t[r]=Oe(e.indexStartValue_),e.startNameSet_&&(t[r]+=","+Oe(e.indexStartName_))}if(e.endSet_){const r=e.endBeforeSet_?"endBefore":"endAt";t[r]=Oe(e.indexEndValue_),e.endNameSet_&&(t[r]+=","+Oe(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function h_(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==Ee&&(t.i=e.index_.toString()),t}/**
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
 */class Zu extends KE{constructor(t,n,r,i){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ba("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(I(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,n,r,i){const s=t._path.toString();this.log_("Listen called for "+s+" "+t._queryIdentifier);const o=Zu.getListenId_(t,r),a={};this.listens_[o]=a;const l=f_(t._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Rs(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(t,n){const r=Zu.getListenId_(t,n);delete this.listens_[r]}get(t){const n=f_(t._queryParams),r=t._path.toString(),i=new cg;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(t){}restRequest_(t,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+ad(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=da(a.responseText)}catch{Pt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Pt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class s3{constructor(){this.rootNode_=U.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
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
 */function ec(){return{value:null,children:new Map}}function oC(e,t,n){if(G(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const r=Y(t);e.children.has(r)||e.children.set(r,ec());const i=e.children.get(r);t=ce(t),oC(i,t,n)}}function gp(e,t,n){e.value!==null?n(t,e.value):o3(e,(r,i)=>{const s=new le(t.toString()+"/"+r);gp(i,s,n)})}function o3(e,t){e.children.forEach((n,r)=>{t(r,n)})}/**
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
 */class a3{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n=Object.assign({},t);return this.last_&&wt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=t,n}}/**
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
 */const p_=10*1e3,l3=30*1e3,u3=5*60*1e3;class c3{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new a3(t);const r=p_+(l3-p_)*Math.random();Do(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const t=this.statsListener_.get(),n={};let r=!1;wt(t,(i,s)=>{s>0&&Qn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Do(this.reportStats_.bind(this),Math.floor(Math.random()*2*u3))}}/**
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
 */var on;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(on||(on={}));function aC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Tg(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function bg(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
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
 */class tc{constructor(t,n,r){this.path=t,this.affectedTree=n,this.revert=r,this.type=on.ACK_USER_WRITE,this.source=aC()}operationForChild(t){if(G(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new le(t));return new tc(Q(),n,this.revert)}}else return I(Y(this.path)===t,"operationForChild called for unrelated child."),new tc(ce(this.path),this.affectedTree,this.revert)}}/**
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
 */class wa{constructor(t,n){this.source=t,this.path=n,this.type=on.LISTEN_COMPLETE}operationForChild(t){return G(this.path)?new wa(this.source,Q()):new wa(this.source,ce(this.path))}}/**
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
 */class bi{constructor(t,n,r){this.source=t,this.path=n,this.snap=r,this.type=on.OVERWRITE}operationForChild(t){return G(this.path)?new bi(this.source,Q(),this.snap.getImmediateChild(t)):new bi(this.source,ce(this.path),this.snap)}}/**
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
 */class xa{constructor(t,n,r){this.source=t,this.path=n,this.children=r,this.type=on.MERGE}operationForChild(t){if(G(this.path)){const n=this.children.subtree(new le(t));return n.isEmpty()?null:n.value?new bi(this.source,Q(),n.value):new xa(this.source,Q(),n)}else return I(Y(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new xa(this.source,ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Nr{constructor(t,n,r){this.node_=t,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(G(t))return this.isFullyInitialized()&&!this.filtered_;const n=Y(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}/**
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
 */class d3{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function f3(e,t,n,r){const i=[],s=[];return t.forEach(o=>{o.type==="child_changed"&&e.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(n3(o.childName,o.snapshotNode))}),uo(e,i,"child_removed",t,r,n),uo(e,i,"child_added",t,r,n),uo(e,i,"child_moved",s,r,n),uo(e,i,"child_changed",t,r,n),uo(e,i,"value",t,r,n),i}function uo(e,t,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>p3(e,a,l)),o.forEach(a=>{const l=h3(e,a,s);i.forEach(u=>{u.respondsTo(a.type)&&t.push(u.createEvent(l,e.query_))})})}function h3(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function p3(e,t,n){if(t.childName==null||n.childName==null)throw Hs("Should only compare child_ events.");const r=new H(t.childName,t.snapshotNode),i=new H(n.childName,n.snapshotNode);return e.index_.compare(r,i)}/**
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
 */function fd(e,t){return{eventCache:e,serverCache:t}}function Lo(e,t,n,r){return fd(new Nr(t,n,r),e.serverCache)}function lC(e,t,n,r){return fd(e.eventCache,new Nr(t,n,r))}function nc(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function ki(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
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
 */let Af;const m3=()=>(Af||(Af=new gt(ej)),Af);class me{constructor(t,n=m3()){this.value=t,this.children=n}static fromObject(t){let n=new me(null);return wt(t,(r,i)=>{n=n.set(new le(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:Q(),value:this.value};if(G(t))return null;{const r=Y(t),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ce(t),n);return s!=null?{path:Re(new le(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(G(t))return this;{const n=Y(t),r=this.children.get(n);return r!==null?r.subtree(ce(t)):new me(null)}}set(t,n){if(G(t))return new me(n,this.children);{const r=Y(t),s=(this.children.get(r)||new me(null)).set(ce(t),n),o=this.children.insert(r,s);return new me(this.value,o)}}remove(t){if(G(t))return this.children.isEmpty()?new me(null):new me(null,this.children);{const n=Y(t),r=this.children.get(n);if(r){const i=r.remove(ce(t));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new me(null):new me(this.value,s)}else return this}}get(t){if(G(t))return this.value;{const n=Y(t),r=this.children.get(n);return r?r.get(ce(t)):null}}setTree(t,n){if(G(t))return n;{const r=Y(t),s=(this.children.get(r)||new me(null)).setTree(ce(t),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new me(this.value,o)}}fold(t){return this.fold_(Q(),t)}fold_(t,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Re(t,i),n)}),n(t,this.value,r)}findOnPath(t,n){return this.findOnPath_(t,Q(),n)}findOnPath_(t,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(G(t))return null;{const s=Y(t),o=this.children.get(s);return o?o.findOnPath_(ce(t),Re(n,s),r):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,Q(),n)}foreachOnPath_(t,n,r){if(G(t))return this;{this.value&&r(n,this.value);const i=Y(t),s=this.children.get(i);return s?s.foreachOnPath_(ce(t),Re(n,i),r):new me(null)}}foreach(t){this.foreach_(Q(),t)}foreach_(t,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Re(t,r),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,r)=>{r.value&&t(n,r.value)})}}/**
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
 */class dn{constructor(t){this.writeTree_=t}static empty(){return new dn(new me(null))}}function Fo(e,t,n){if(G(t))return new dn(new me(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(r!=null){const i=r.path;let s=r.value;const o=ot(i,t);return s=s.updateChild(o,n),new dn(e.writeTree_.set(i,s))}else{const i=new me(n),s=e.writeTree_.setTree(t,i);return new dn(s)}}}function m_(e,t,n){let r=e;return wt(n,(i,s)=>{r=Fo(r,Re(t,i),s)}),r}function g_(e,t){if(G(t))return dn.empty();{const n=e.writeTree_.setTree(t,new me(null));return new dn(n)}}function yp(e,t){return Fi(e,t)!=null}function Fi(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(ot(n.path,t)):null}function y_(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ee,(r,i)=>{t.push(new H(r,i))}):e.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&t.push(new H(r,i.value))}),t}function Tr(e,t){if(G(t))return e;{const n=Fi(e,t);return n!=null?new dn(new me(n)):new dn(e.writeTree_.subtree(t))}}function vp(e){return e.writeTree_.isEmpty()}function Ls(e,t){return uC(Q(),e.writeTree_,t)}function uC(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal((i,s)=>{i===".priority"?(I(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=uC(Re(e,i),s,n)}),!n.getChild(e).isEmpty()&&r!==null&&(n=n.updateChild(Re(e,".priority"),r)),n}}/**
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
 */function hd(e,t){return hC(t,e)}function g3(e,t,n,r,i){I(r>e.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Fo(e.visibleWrites,t,n)),e.lastWriteId=r}function y3(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function v3(e,t){const n=e.allWrites.findIndex(a=>a.writeId===t);I(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,o=e.allWrites.length-1;for(;i&&o>=0;){const a=e.allWrites[o];a.visible&&(o>=n&&_3(a,r.path)?i=!1:sn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return w3(e),!0;if(r.snap)e.visibleWrites=g_(e.visibleWrites,r.path);else{const a=r.children;wt(a,l=>{e.visibleWrites=g_(e.visibleWrites,Re(r.path,l))})}return!0}else return!1}function _3(e,t){if(e.snap)return sn(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&sn(Re(e.path,n),t))return!0;return!1}function w3(e){e.visibleWrites=cC(e.allWrites,x3,Q()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function x3(e){return e.visible}function cC(e,t,n){let r=dn.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const o=s.path;let a;if(s.snap)sn(n,o)?(a=ot(n,o),r=Fo(r,a,s.snap)):sn(o,n)&&(a=ot(o,n),r=Fo(r,Q(),s.snap.getChild(a)));else if(s.children){if(sn(n,o))a=ot(n,o),r=m_(r,a,s.children);else if(sn(o,n))if(a=ot(o,n),G(a))r=m_(r,Q(),s.children);else{const l=Rs(s.children,Y(a));if(l){const u=l.getChild(ce(a));r=Fo(r,Q(),u)}}}else throw Hs("WriteRecord should have .snap or .children")}}return r}function dC(e,t,n,r,i){if(!r&&!i){const s=Fi(e.visibleWrites,t);if(s!=null)return s;{const o=Tr(e.visibleWrites,t);if(vp(o))return n;if(n==null&&!yp(o,Q()))return null;{const a=n||U.EMPTY_NODE;return Ls(o,a)}}}else{const s=Tr(e.visibleWrites,t);if(!i&&vp(s))return n;if(!i&&n==null&&!yp(s,Q()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(sn(u.path,t)||sn(t,u.path))},a=cC(e.allWrites,o,t),l=n||U.EMPTY_NODE;return Ls(a,l)}}}function S3(e,t,n){let r=U.EMPTY_NODE;const i=Fi(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(Ee,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Tr(e.visibleWrites,t);return n.forEachChild(Ee,(o,a)=>{const l=Ls(Tr(s,new le(o)),a);r=r.updateImmediateChild(o,l)}),y_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Tr(e.visibleWrites,t);return y_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function E3(e,t,n,r,i){I(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Re(t,n);if(yp(e.visibleWrites,s))return null;{const o=Tr(e.visibleWrites,s);return vp(o)?i.getChild(n):Ls(o,i.getChild(n))}}function C3(e,t,n,r){const i=Re(t,n),s=Fi(e.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Tr(e.visibleWrites,i);return Ls(o,r.getNode().getImmediateChild(n))}else return null}function T3(e,t){return Fi(e.visibleWrites,t)}function b3(e,t,n,r,i,s,o){let a;const l=Tr(e.visibleWrites,t),u=Fi(l,Q());if(u!=null)a=u;else if(n!=null)a=Ls(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=f.getNext();for(;g&&c.length<i;)d(g,r)!==0&&c.push(g),g=f.getNext();return c}else return[]}function k3(){return{visibleWrites:dn.empty(),allWrites:[],lastWriteId:-1}}function rc(e,t,n,r){return dC(e.writeTree,e.treePath,t,n,r)}function kg(e,t){return S3(e.writeTree,e.treePath,t)}function v_(e,t,n,r){return E3(e.writeTree,e.treePath,t,n,r)}function ic(e,t){return T3(e.writeTree,Re(e.treePath,t))}function I3(e,t,n,r,i,s){return b3(e.writeTree,e.treePath,t,n,r,i,s)}function Ig(e,t,n){return C3(e.writeTree,e.treePath,t,n)}function fC(e,t){return hC(Re(e.treePath,t),e.writeTree)}function hC(e,t){return{treePath:e,writeTree:t}}/**
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
 */class P3{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,r=t.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,va(r,t.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ya(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ds(r,t.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,va(r,t.snapshotNode,i.oldSnap));else throw Hs("Illegal combination of changes: "+t+" occurred after "+i)}else this.changeMap.set(r,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class O3{getCompleteChild(t){return null}getChildAfterChild(t,n,r){return null}}const pC=new O3;class Pg{constructor(t,n,r=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const r=this.optCompleteServerCache_!=null?new Nr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ig(this.writes_,t,r)}}getChildAfterChild(t,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ki(this.viewCache_),s=I3(this.writes_,i,n,1,r,t);return s.length===0?null:s[0]}}/**
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
 */function R3(e){return{filter:e}}function N3(e,t){I(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),I(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function A3(e,t,n,r,i){const s=new P3;let o,a;if(n.type===on.OVERWRITE){const u=n;u.source.fromUser?o=_p(e,t,u.path,u.snap,r,i,s):(I(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered()&&!G(u.path),o=sc(e,t,u.path,u.snap,r,i,a,s))}else if(n.type===on.MERGE){const u=n;u.source.fromUser?o=L3(e,t,u.path,u.children,r,i,s):(I(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered(),o=wp(e,t,u.path,u.children,r,i,a,s))}else if(n.type===on.ACK_USER_WRITE){const u=n;u.revert?o=M3(e,t,u.path,r,i,s):o=F3(e,t,u.path,u.affectedTree,r,i,s)}else if(n.type===on.LISTEN_COMPLETE)o=$3(e,t,n.path,r,s);else throw Hs("Unknown operation type: "+n.type);const l=s.getChanges();return D3(t,o,l),{viewCache:o,changes:l}}function D3(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=nc(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(sC(nc(t)))}}function mC(e,t,n,r,i,s){const o=t.eventCache;if(ic(r,n)!=null)return t;{let a,l;if(G(n))if(I(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const u=ki(t),c=u instanceof U?u:U.EMPTY_NODE,d=kg(r,c);a=e.filter.updateFullNode(t.eventCache.getNode(),d,s)}else{const u=rc(r,ki(t));a=e.filter.updateFullNode(t.eventCache.getNode(),u,s)}else{const u=Y(n);if(u===".priority"){I(Rr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=t.serverCache.getNode();const d=v_(r,n,c,l);d!=null?a=e.filter.updatePriority(c,d):a=o.getNode()}else{const c=ce(n);let d;if(o.isCompleteForChild(u)){l=t.serverCache.getNode();const f=v_(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=Ig(r,u,t.serverCache);d!=null?a=e.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return Lo(t,a,o.isFullyInitialized()||G(n),e.filter.filtersNodes())}}function sc(e,t,n,r,i,s,o,a){const l=t.serverCache;let u;const c=o?e.filter:e.filter.getIndexedFilter();if(G(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),g,null)}else{const g=Y(n);if(!l.isCompleteForPath(n)&&Rr(n)>1)return t;const y=ce(n),w=l.getNode().getImmediateChild(g).updateChild(y,r);g===".priority"?u=c.updatePriority(l.getNode(),w):u=c.updateChild(l.getNode(),g,w,y,pC,null)}const d=lC(t,u,l.isFullyInitialized()||G(n),c.filtersNodes()),f=new Pg(i,d,s);return mC(e,d,n,i,f,a)}function _p(e,t,n,r,i,s,o){const a=t.eventCache;let l,u;const c=new Pg(i,t,s);if(G(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,o),l=Lo(t,u,!0,e.filter.filtersNodes());else{const d=Y(n);if(d===".priority")u=e.filter.updatePriority(t.eventCache.getNode(),r),l=Lo(t,u,a.isFullyInitialized(),a.isFiltered());else{const f=ce(n),g=a.getNode().getImmediateChild(d);let y;if(G(f))y=r;else{const _=c.getCompleteChild(d);_!=null?qE(f)===".priority"&&_.getChild(XE(f)).isEmpty()?y=_:y=_.updateChild(f,r):y=U.EMPTY_NODE}if(g.equals(y))l=t;else{const _=e.filter.updateChild(a.getNode(),d,y,f,c,o);l=Lo(t,_,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function __(e,t){return e.eventCache.isCompleteForChild(t)}function L3(e,t,n,r,i,s,o){let a=t;return r.foreach((l,u)=>{const c=Re(n,l);__(t,Y(c))&&(a=_p(e,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=Re(n,l);__(t,Y(c))||(a=_p(e,a,c,u,i,s,o))}),a}function w_(e,t,n){return n.foreach((r,i)=>{t=t.updateChild(r,i)}),t}function wp(e,t,n,r,i,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l=t,u;G(n)?u=r:u=new me(null).setTree(n,r);const c=t.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const g=t.serverCache.getNode().getImmediateChild(d),y=w_(e,g,f);l=sc(e,l,new le(d),y,i,s,o,a)}}),u.children.inorderTraversal((d,f)=>{const g=!t.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!g){const y=t.serverCache.getNode().getImmediateChild(d),_=w_(e,y,f);l=sc(e,l,new le(d),_,i,s,o,a)}}),l}function F3(e,t,n,r,i,s,o){if(ic(i,n)!=null)return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(r.value!=null){if(G(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return sc(e,t,n,l.getNode().getChild(n),i,s,a,o);if(G(n)){let u=new me(null);return l.getNode().forEachChild(ms,(c,d)=>{u=u.set(new le(c),d)}),wp(e,t,n,u,i,s,a,o)}else return t}else{let u=new me(null);return r.foreach((c,d)=>{const f=Re(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),wp(e,t,n,u,i,s,a,o)}}function $3(e,t,n,r,i){const s=t.serverCache,o=lC(t,s.getNode(),s.isFullyInitialized()||G(n),s.isFiltered());return mC(e,o,n,r,pC,i)}function M3(e,t,n,r,i,s){let o;if(ic(r,n)!=null)return t;{const a=new Pg(r,t,i),l=t.eventCache.getNode();let u;if(G(n)||Y(n)===".priority"){let c;if(t.serverCache.isFullyInitialized())c=rc(r,ki(t));else{const d=t.serverCache.getNode();I(d instanceof U,"serverChildren would be complete if leaf node"),c=kg(r,d)}c=c,u=e.filter.updateFullNode(l,c,s)}else{const c=Y(n);let d=Ig(r,c,t.serverCache);d==null&&t.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=e.filter.updateChild(l,c,d,ce(n),a,s):t.eventCache.getNode().hasChild(c)?u=e.filter.updateChild(l,c,U.EMPTY_NODE,ce(n),a,s):u=l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=rc(r,ki(t)),o.isLeafNode()&&(u=e.filter.updateFullNode(u,o,s)))}return o=t.serverCache.isFullyInitialized()||ic(r,Q())!=null,Lo(t,u,o,e.filter.filtersNodes())}}/**
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
 */class j3{constructor(t,n){this.query_=t,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Eg(r.getIndex()),s=i3(r);this.processor_=R3(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(U.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(U.EMPTY_NODE,a.getNode(),null),c=new Nr(l,o.isFullyInitialized(),i.filtersNodes()),d=new Nr(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=fd(d,c),this.eventGenerator_=new d3(this.query_)}get query(){return this.query_}}function z3(e){return e.viewCache_.serverCache.getNode()}function U3(e){return nc(e.viewCache_)}function B3(e,t){const n=ki(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!G(t)&&!n.getImmediateChild(Y(t)).isEmpty())?n.getChild(t):null}function x_(e){return e.eventRegistrations_.length===0}function V3(e,t){e.eventRegistrations_.push(t)}function S_(e,t,n){const r=[];if(n){I(t==null,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(t){let i=[];for(let s=0;s<e.eventRegistrations_.length;++s){const o=e.eventRegistrations_[s];if(!o.matches(t))i.push(o);else if(t.hasAnyCallback()){i=i.concat(e.eventRegistrations_.slice(s+1));break}}e.eventRegistrations_=i}else e.eventRegistrations_=[];return r}function E_(e,t,n,r){t.type===on.MERGE&&t.source.queryId!==null&&(I(ki(e.viewCache_),"We should always have a full cache before handling merges"),I(nc(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=A3(e.processor_,i,t,n,r);return N3(e.processor_,s.viewCache),I(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,gC(e,s.changes,s.viewCache.eventCache.getNode(),null)}function W3(e,t){const n=e.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ee,(s,o)=>{r.push(Ds(s,o))}),n.isFullyInitialized()&&r.push(sC(n.getNode())),gC(e,r,n.getNode(),t)}function gC(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return f3(e.eventGenerator_,t,n,i)}/**
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
 */let oc;class yC{constructor(){this.views=new Map}}function H3(e){I(!oc,"__referenceConstructor has already been defined"),oc=e}function G3(){return I(oc,"Reference.ts has not been loaded"),oc}function K3(e){return e.views.size===0}function Og(e,t,n,r){const i=t.source.queryId;if(i!==null){const s=e.views.get(i);return I(s!=null,"SyncTree gave us an op for an invalid query."),E_(s,t,n,r)}else{let s=[];for(const o of e.views.values())s=s.concat(E_(o,t,n,r));return s}}function vC(e,t,n,r,i){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let a=rc(n,i?r:null),l=!1;a?l=!0:r instanceof U?(a=kg(n,r),l=!1):(a=U.EMPTY_NODE,l=!1);const u=fd(new Nr(a,l,!1),new Nr(r,i,!1));return new j3(t,u)}return o}function Y3(e,t,n,r,i,s){const o=vC(e,t,r,i,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),V3(o,n),W3(o,n)}function q3(e,t,n,r){const i=t._queryIdentifier,s=[];let o=[];const a=Ar(e);if(i==="default")for(const[l,u]of e.views.entries())o=o.concat(S_(u,n,r)),x_(u)&&(e.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=e.views.get(i);l&&(o=o.concat(S_(l,n,r)),x_(l)&&(e.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Ar(e)&&s.push(new(G3())(t._repo,t._path)),{removed:s,events:o}}function _C(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function br(e,t){let n=null;for(const r of e.views.values())n=n||B3(r,t);return n}function wC(e,t){if(t._queryParams.loadsAllData())return pd(e);{const r=t._queryIdentifier;return e.views.get(r)}}function xC(e,t){return wC(e,t)!=null}function Ar(e){return pd(e)!=null}function pd(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
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
 */let ac;function Q3(e){I(!ac,"__referenceConstructor has already been defined"),ac=e}function X3(){return I(ac,"Reference.ts has not been loaded"),ac}let J3=1;class C_{constructor(t){this.listenProvider_=t,this.syncPointTree_=new me(null),this.pendingWriteTree_=k3(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Z3(e,t,n,r,i){return g3(e.pendingWriteTree_,t,n,r,i),i?Ga(e,new bi(aC(),t,n)):[]}function ss(e,t,n=!1){const r=y3(e.pendingWriteTree_,t);if(v3(e.pendingWriteTree_,t)){let s=new me(null);return r.snap!=null?s=s.set(Q(),!0):wt(r.children,o=>{s=s.set(new le(o),!0)}),Ga(e,new tc(r.path,s,n))}else return[]}function Ha(e,t,n){return Ga(e,new bi(Tg(),t,n))}function e4(e,t,n){const r=me.fromObject(n);return Ga(e,new xa(Tg(),t,r))}function t4(e,t){return Ga(e,new wa(Tg(),t))}function n4(e,t,n){const r=Rg(e,n);if(r){const i=Ng(r),s=i.path,o=i.queryId,a=ot(s,t),l=new wa(bg(o),a);return Ag(e,s,l)}else return[]}function SC(e,t,n,r,i=!1){const s=t._path,o=e.syncPointTree_.get(s);let a=[];if(o&&(t._queryIdentifier==="default"||xC(o,t))){const l=q3(o,t,n,r);K3(o)&&(e.syncPointTree_=e.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=e.syncPointTree_.findOnPath(s,(f,g)=>Ar(g));if(c&&!d){const f=e.syncPointTree_.subtree(s);if(!f.isEmpty()){const g=o4(f);for(let y=0;y<g.length;++y){const _=g[y],w=_.query,p=kC(e,_);e.listenProvider_.startListening($o(w),Sa(e,w),p.hashFn,p.onComplete)}}}!d&&u.length>0&&!r&&(c?e.listenProvider_.stopListening($o(t),null):u.forEach(f=>{const g=e.queryToTagMap.get(md(f));e.listenProvider_.stopListening($o(f),g)}))}a4(e,u)}return a}function EC(e,t,n,r){const i=Rg(e,r);if(i!=null){const s=Ng(i),o=s.path,a=s.queryId,l=ot(o,t),u=new bi(bg(a),l,n);return Ag(e,o,u)}else return[]}function r4(e,t,n,r){const i=Rg(e,r);if(i){const s=Ng(i),o=s.path,a=s.queryId,l=ot(o,t),u=me.fromObject(n),c=new xa(bg(a),l,u);return Ag(e,o,c)}else return[]}function i4(e,t,n,r=!1){const i=t._path;let s=null,o=!1;e.syncPointTree_.foreachOnPath(i,(f,g)=>{const y=ot(f,i);s=s||br(g,y),o=o||Ar(g)});let a=e.syncPointTree_.get(i);a?(o=o||Ar(a),s=s||br(a,Q())):(a=new yC,e.syncPointTree_=e.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=U.EMPTY_NODE,e.syncPointTree_.subtree(i).foreachChild((g,y)=>{const _=br(y,Q());_&&(s=s.updateImmediateChild(g,_))}));const u=xC(a,t);if(!u&&!t._queryParams.loadsAllData()){const f=md(t);I(!e.queryToTagMap.has(f),"View does not exist, but we have a tag");const g=l4();e.queryToTagMap.set(f,g),e.tagToQueryMap.set(g,f)}const c=hd(e.pendingWriteTree_,i);let d=Y3(a,t,n,c,s,l);if(!u&&!o&&!r){const f=wC(a,t);d=d.concat(u4(e,t,f))}return d}function CC(e,t,n){const i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,(o,a)=>{const l=ot(o,t),u=br(a,l);if(u)return u});return dC(i,t,s,n,!0)}function s4(e,t){const n=t._path;let r=null;e.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=ot(u,n);r=r||br(c,d)});let i=e.syncPointTree_.get(n);i?r=r||br(i,Q()):(i=new yC,e.syncPointTree_=e.syncPointTree_.set(n,i));const s=r!=null,o=s?new Nr(r,!0,!1):null,a=hd(e.pendingWriteTree_,t._path),l=vC(i,t,a,s?o.getNode():U.EMPTY_NODE,s);return U3(l)}function Ga(e,t){return TC(t,e.syncPointTree_,null,hd(e.pendingWriteTree_,Q()))}function TC(e,t,n,r){if(G(e.path))return bC(e,t,n,r);{const i=t.get(Q());n==null&&i!=null&&(n=br(i,Q()));let s=[];const o=Y(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=fC(r,o);s=s.concat(TC(a,l,u,c))}return i&&(s=s.concat(Og(i,e,r,n))),s}}function bC(e,t,n,r){const i=t.get(Q());n==null&&i!=null&&(n=br(i,Q()));let s=[];return t.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=fC(r,o),c=e.operationForChild(o);c&&(s=s.concat(bC(c,a,l,u)))}),i&&(s=s.concat(Og(i,e,r,n))),s}function kC(e,t){const n=t.query,r=Sa(e,n);return{hashFn:()=>(z3(t)||U.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?n4(e,n._path,r):t4(e,n._path);{const s=rj(i,n);return SC(e,n,null,s)}}}}function Sa(e,t){const n=md(t);return e.queryToTagMap.get(n)}function md(e){return e._path.toString()+"$"+e._queryIdentifier}function Rg(e,t){return e.tagToQueryMap.get(t)}function Ng(e){const t=e.indexOf("$");return I(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new le(e.substr(0,t))}}function Ag(e,t,n){const r=e.syncPointTree_.get(t);I(r,"Missing sync point for query tag that we're tracking");const i=hd(e.pendingWriteTree_,t);return Og(r,n,i,null)}function o4(e){return e.fold((t,n,r)=>{if(n&&Ar(n))return[pd(n)];{let i=[];return n&&(i=_C(n)),wt(r,(s,o)=>{i=i.concat(o)}),i}})}function $o(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(X3())(e._repo,e._path):e}function a4(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const i=md(r),s=e.queryToTagMap.get(i);e.queryToTagMap.delete(i),e.tagToQueryMap.delete(s)}}}function l4(){return J3++}function u4(e,t,n){const r=t._path,i=Sa(e,t),s=kC(e,n),o=e.listenProvider_.startListening($o(t),i,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(r);if(i)I(!Ar(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!G(u)&&c&&Ar(c))return[pd(c).query];{let f=[];return c&&(f=f.concat(_C(c).map(g=>g.query))),wt(d,(g,y)=>{f=f.concat(y)}),f}});for(let u=0;u<l.length;++u){const c=l[u];e.listenProvider_.stopListening($o(c),Sa(e,c))}}return o}/**
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
 */class Dg{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new Dg(n)}node(){return this.node_}}class Lg{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=Re(this.path_,t);return new Lg(this.syncTree_,n)}node(){return CC(this.syncTree_,this.path_)}}const c4=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},T_=function(e,t,n){if(!e||typeof e!="object")return e;if(I(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return d4(e[".sv"],t,n);if(typeof e[".sv"]=="object")return f4(e[".sv"],t);I(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},d4=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+e)}},f4=function(e,t,n){e.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;typeof r!="number"&&I(!1,"Unexpected increment value: "+r);const i=t.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},h4=function(e,t,n,r){return Fg(t,new Lg(n,e),r)},p4=function(e,t,n){return Fg(e,new Dg(t),n)};function Fg(e,t,n){const r=e.getPriority().val(),i=T_(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const o=e,a=T_(o.getValue(),t,n);return a!==o.getValue()||i!==o.getPriority().val()?new Le(a,He(i)):e}else{const o=e;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Le(i))),o.forEachChild(Ee,(a,l)=>{const u=Fg(l,t.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class $g{constructor(t="",n=null,r={children:{},childCount:0}){this.name=t,this.parent=n,this.node=r}}function Mg(e,t){let n=t instanceof le?t:new le(t),r=e,i=Y(n);for(;i!==null;){const s=Rs(r.node.children,i)||{children:{},childCount:0};r=new $g(i,r,s),n=ce(n),i=Y(n)}return r}function Ys(e){return e.node.value}function IC(e,t){e.node.value=t,xp(e)}function PC(e){return e.node.childCount>0}function m4(e){return Ys(e)===void 0&&!PC(e)}function gd(e,t){wt(e.node.children,(n,r)=>{t(new $g(n,e,r))})}function OC(e,t,n,r){n&&!r&&t(e),gd(e,i=>{OC(i,t,!0,r)}),n&&r&&t(e)}function g4(e,t,n){let r=n?e:e.parent;for(;r!==null;){if(t(r))return!0;r=r.parent}return!1}function Ka(e){return new le(e.parent===null?e.name:Ka(e.parent)+"/"+e.name)}function xp(e){e.parent!==null&&y4(e.parent,e.name,e)}function y4(e,t,n){const r=m4(n),i=Qn(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,xp(e)):!r&&!i&&(e.node.children[t]=n.node,e.node.childCount++,xp(e))}/**
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
 */const v4=/[\[\].#$\/\u0000-\u001F\u007F]/,_4=/[\[\].#$\u0000-\u001F\u007F]/,Df=10*1024*1024,RC=function(e){return typeof e=="string"&&e.length!==0&&!v4.test(e)},NC=function(e){return typeof e=="string"&&e.length!==0&&!_4.test(e)},w4=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),NC(e)},AC=function(e,t,n){const r=n instanceof le?new Fj(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+Jr(r));if(typeof t=="function")throw new Error(e+"contains a function "+Jr(r)+" with contents = "+t.toString());if(IE(t))throw new Error(e+"contains "+t.toString()+" "+Jr(r));if(typeof t=="string"&&t.length>Df/3&&ld(t)>Df)throw new Error(e+"contains a string greater than "+Df+" utf8 bytes "+Jr(r)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let i=!1,s=!1;if(wt(t,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!RC(o)))throw new Error(e+" contains an invalid key ("+o+") "+Jr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);$j(r,o),AC(e,a,r),Mj(r)}),i&&s)throw new Error(e+' contains ".value" child '+Jr(r)+" in addition to actual children.")}},DC=function(e,t,n,r){if(!(r&&n===void 0)&&!NC(n))throw new Error(aE(e,t)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},x4=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),DC(e,t,n,r)},S4=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!RC(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!w4(n))throw new Error(aE(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class E4{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function C4(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();n!==null&&!JE(s,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function Br(e,t,n){C4(e,n),T4(e,r=>sn(r,t)||sn(t,r))}function T4(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const s=i.path;t(s)?(b4(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function b4(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const r=n.getEventRunner();hi&&tt("event: "+n.toString()),Va(r)}}}/**
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
 */const k4="repo_interrupt",I4=25;class P4{constructor(t,n,r,i){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new E4,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ec(),this.transactionQueueTree_=new $g,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function O4(e,t,n){if(e.stats_=_g(e.repoInfo_),e.forceRestClient_||aj())e.server_=new Zu(e.repoInfo_,(r,i,s,o)=>{b_(e,r,i,s,o)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>k_(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Oe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new zn(e.repoInfo_,t,(r,i,s,o)=>{b_(e,r,i,s,o)},r=>{k_(e,r)},r=>{N4(e,r)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(r=>{e.server_.refreshAuthToken(r)}),e.appCheckProvider_.addTokenChangeListener(r=>{e.server_.refreshAppCheckToken(r.token)}),e.statsReporter_=fj(e.repoInfo_,()=>new c3(e.stats_,e.server_)),e.infoData_=new s3,e.infoSyncTree_=new C_({startListening:(r,i,s,o)=>{let a=[];const l=e.infoData_.getNode(r._path);return l.isEmpty()||(a=Ha(e.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),jg(e,"connected",!1),e.serverSyncTree_=new C_({startListening:(r,i,s,o)=>(e.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);Br(e.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{e.server_.unlisten(r,i)}})}function R4(e){const n=e.infoData_.getNode(new le(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function LC(e){return c4({timestamp:R4(e)})}function b_(e,t,n,r,i){e.dataUpdateCount++;const s=new le(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(i)if(r){const l=Bu(n,u=>He(u));o=r4(e.serverSyncTree_,s,l,i)}else{const l=He(n);o=EC(e.serverSyncTree_,s,l,i)}else if(r){const l=Bu(n,u=>He(u));o=e4(e.serverSyncTree_,s,l)}else{const l=He(n);o=Ha(e.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Bg(e,s)),Br(e.eventQueue_,a,o)}function k_(e,t){jg(e,"connected",t),t===!1&&L4(e)}function N4(e,t){wt(t,(n,r)=>{jg(e,n,r)})}function jg(e,t,n){const r=new le("/.info/"+t),i=He(n);e.infoData_.updateSnapshot(r,i);const s=Ha(e.infoSyncTree_,r,i);Br(e.eventQueue_,r,s)}function A4(e){return e.nextWriteId_++}function D4(e,t,n){const r=s4(e.serverSyncTree_,t);return r!=null?Promise.resolve(r):e.server_.get(t).then(i=>{const s=He(i).withIndex(t._queryParams.getIndex());i4(e.serverSyncTree_,t,n,!0);let o;if(t._queryParams.loadsAllData())o=Ha(e.serverSyncTree_,t._path,s);else{const a=Sa(e.serverSyncTree_,t);o=EC(e.serverSyncTree_,t._path,s,a)}return Br(e.eventQueue_,t._path,o),SC(e.serverSyncTree_,t,n,null,!0),s},i=>(zg(e,"get for query "+Oe(t)+" failed: "+i),Promise.reject(new Error(i))))}function L4(e){zg(e,"onDisconnectEvents");const t=LC(e),n=ec();gp(e.onDisconnect_,Q(),(i,s)=>{const o=h4(i,s,e.serverSyncTree_,t);oC(n,i,o)});let r=[];gp(n,Q(),(i,s)=>{r=r.concat(Ha(e.serverSyncTree_,i,s));const o=j4(e,i);Bg(e,o)}),e.onDisconnect_=ec(),Br(e.eventQueue_,Q(),r)}function F4(e){e.persistentConnection_&&e.persistentConnection_.interrupt(k4)}function zg(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),tt(n,...t)}function FC(e,t,n){return CC(e.serverSyncTree_,t,n)||U.EMPTY_NODE}function Ug(e,t=e.transactionQueueTree_){if(t||yd(e,t),Ys(t)){const n=MC(e,t);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&$4(e,Ka(t),n)}else PC(t)&&gd(t,n=>{Ug(e,n)})}function $4(e,t,n){const r=n.map(u=>u.currentWriteId),i=FC(e,t,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];I(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=ot(t,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,u=>{zg(e,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(ss(e.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();yd(e,Mg(e.transactionQueueTree_,t)),Ug(e,e.transactionQueueTree_),Br(e.eventQueue_,t,c);for(let f=0;f<d.length;f++)Va(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Pt("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Bg(e,t)}},o)}function Bg(e,t){const n=$C(e,t),r=Ka(n),i=MC(e,n);return M4(e,i,r),r}function M4(e,t,n){if(t.length===0)return;const r=[];let i=[];const o=t.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<t.length;a++){const l=t[a],u=ot(n,l.path);let c=!1,d;if(I(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(ss(e.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=I4)c=!0,d="maxretry",i=i.concat(ss(e.serverSyncTree_,l.currentWriteId,!0));else{const f=FC(e,l.path,o);l.currentInputSnapshot=f;const g=t[a].update(f.val());if(g!==void 0){AC("transaction failed: Data returned ",g,l.path);let y=He(g);typeof g=="object"&&g!=null&&Qn(g,".priority")||(y=y.updatePriority(f.getPriority()));const w=l.currentWriteId,p=LC(e),h=p4(y,f,p);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=h,l.currentWriteId=A4(e),o.splice(o.indexOf(w),1),i=i.concat(Z3(e.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(ss(e.serverSyncTree_,w,!0))}else c=!0,d="nodata",i=i.concat(ss(e.serverSyncTree_,l.currentWriteId,!0))}Br(e.eventQueue_,n,i),i=[],c&&(t[a].status=2,function(f){setTimeout(f,Math.floor(0))}(t[a].unwatcher),t[a].onComplete&&(d==="nodata"?r.push(()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot)):r.push(()=>t[a].onComplete(new Error(d),!1,null))))}yd(e,e.transactionQueueTree_);for(let a=0;a<r.length;a++)Va(r[a]);Ug(e,e.transactionQueueTree_)}function $C(e,t){let n,r=e.transactionQueueTree_;for(n=Y(t);n!==null&&Ys(r)===void 0;)r=Mg(r,n),t=ce(t),n=Y(t);return r}function MC(e,t){const n=[];return jC(e,t,n),n.sort((r,i)=>r.order-i.order),n}function jC(e,t,n){const r=Ys(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);gd(t,i=>{jC(e,i,n)})}function yd(e,t){const n=Ys(t);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,IC(t,n.length>0?n:void 0)}gd(t,r=>{yd(e,r)})}function j4(e,t){const n=Ka($C(e,t)),r=Mg(e.transactionQueueTree_,t);return g4(r,i=>{Lf(e,i)}),Lf(e,r),OC(r,i=>{Lf(e,i)}),n}function Lf(e,t){const n=Ys(t);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ss(e.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?IC(t,void 0):n.length=s+1,Br(e.eventQueue_,Ka(t),i);for(let o=0;o<r.length;o++)Va(r[o])}}/**
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
 */function z4(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}t+="/"+i}return t}function U4(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Pt(`Invalid query segment '${n}' in query '${e}'`)}return t}const I_=function(e,t){const n=B4(e),r=n.namespace;n.domain==="firebase.com"&&Gn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Gn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||JM();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new zE(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new le(n.pathString)}},B4=function(e){let t="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof e=="string"){let u=e.indexOf("//");u>=0&&(a=e.substring(0,u-1),e=e.substring(u+2));let c=e.indexOf("/");c===-1&&(c=e.length);let d=e.indexOf("?");d===-1&&(d=e.length),t=e.substring(0,Math.min(c,d)),c<d&&(i=z4(e.substring(c,d)));const f=U4(e.substring(Math.min(e.length,d)));u=t.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(t.substring(u+1),10)):u=t.length;const g=t.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const y=t.indexOf(".");r=t.substring(0,y).toLowerCase(),n=t.substring(y+1),s=r}"ns"in f&&(s=f.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class V4{constructor(t,n,r,i){this.eventType=t,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Oe(this.snapshot.exportVal())}}class W4{constructor(t,n,r){this.eventRegistration=t,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class H4{constructor(t,n){this.snapshotCallback=t,this.cancelCallback=n}onValue(t,n){this.snapshotCallback.call(null,t,n)}onCancel(t){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
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
 */class Vg{constructor(t,n,r,i){this._repo=t,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return G(this._path)?null:qE(this._path)}get ref(){return new Xn(this._repo,this._path)}get _queryIdentifier(){const t=h_(this._queryParams),n=yg(t);return n==="{}"?"default":n}get _queryObject(){return h_(this._queryParams)}isEqual(t){if(t=Gt(t),!(t instanceof Vg))return!1;const n=this._repo===t._repo,r=JE(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Lj(this._path)}}class Xn extends Vg{constructor(t,n){super(t,n,new Cg,!1)}get parent(){const t=XE(this._path);return t===null?null:new Xn(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class Ea{constructor(t,n,r){this._node=t,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const n=new le(t),r=lc(this.ref,t);return new Ea(this._node.getChild(n),r,Ee)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>t(new Ea(i,lc(this.ref,r),Ee)))}hasChild(t){const n=new le(t);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function G4(e,t){return e=Gt(e),e._checkNotDeleted("ref"),t!==void 0?lc(e._root,t):e._root}function lc(e,t){return e=Gt(e),Y(e._path)===null?x4("child","path",t,!1):DC("child","path",t,!1),new Xn(e._repo,Re(e._path,t))}function K4(e){e=Gt(e);const t=new H4(()=>{}),n=new Wg(t);return D4(e._repo,e,n).then(r=>new Ea(r,new Xn(e._repo,e._path),e._queryParams.getIndex()))}class Wg{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,n){const r=n._queryParams.getIndex();return new V4("value",this,new Ea(t.snapshotNode,new Xn(n._repo,n._path),r))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new W4(this,t,n):null}matches(t){return t instanceof Wg?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}H3(Xn);Q3(Xn);/**
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
 */const Y4="FIREBASE_DATABASE_EMULATOR_HOST",Sp={};let q4=!1;function Q4(e,t,n,r){e.repoInfo_=new zE(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}function X4(e,t,n,r,i){let s=r||e.options.databaseURL;s===void 0&&(e.options.projectId||Gn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),tt("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o=I_(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[Y4]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=I_(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new ps(ps.OWNER):new uj(e.name,e.options,t);S4("Invalid Firebase Database URL",o),G(o.path)||Gn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Z4(a,e,c,new lj(e.name,n));return new e6(d,e)}function J4(e,t){const n=Sp[t];(!n||n[e.key]!==e)&&Gn(`Database ${t}(${e.repoInfo_}) has already been deleted.`),F4(e),delete n[e.key]}function Z4(e,t,n,r){let i=Sp[t.name];i||(i={},Sp[t.name]=i);let s=i[e.toURLString()];return s&&Gn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new P4(e,q4,n,r),i[e.toURLString()]=s,s}class e6{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(O4(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Xn(this._repo,Q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(J4(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&Gn("Cannot call "+t+" on a deleted database.")}}function t6(e=C$(),t){const n=cE(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const r=fF("database");r&&n6(n,...r)}return n}function n6(e,t,n,r={}){e=Gt(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&Gn("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Gn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ps(ps.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:pF(r.mockUserToken,e.app.options.projectId);s=new ps(o)}Q4(i,t,n,s)}/**
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
 */function r6(e){KM(ud),Ns(new xi("database",(t,{instanceIdentifier:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return X4(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Cr(Q0,X0,e),Cr(Q0,X0,"esm2017")}zn.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};zn.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};r6();const i6={apiKey:"AIzaSyDkWC69rklVP4x89l4iBxXBRgp9ClD9p40",authDomain:"test-582b2.firebaseapp.com",projectId:"test-582b2",storageBucket:"test-582b2.appspot.com",messagingSenderId:"925130837675",appId:"1:925130837675:web:d3470003dae1803bf931ee",databaseURL:"https://test-582b2-default-rtdb.europe-west1.firebasedatabase.app/"},zC=dE(i6),Hg=SM(zC),s6=t6(zC);new An;const Hl=od("auth/signUp",async({name:e,email:t,password:n},r)=>{try{const s=(await FM(Hg,t,n)).user;return await jM(s,{displayName:e}),{isAuthenticated:!0,email:s.email}}catch(i){return r.rejectWithValue(i.message)}}),Gl=od("auth/signIn",async({email:e,password:t},n)=>{try{const i=(await $M(Hg,e,t)).user;return{isAuthenticated:!0,name:i.displayName,email:i.email}}catch(r){return n.rejectWithValue(r.message)}}),Mo=od("auth/logout",async(e,t)=>{try{await zM(Hg)}catch(n){return t.rejectWithValue(n.message)}});var UC={exports:{}},BC={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ya=T;function o6(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var a6=typeof Object.is=="function"?Object.is:o6,l6=Ya.useSyncExternalStore,u6=Ya.useRef,c6=Ya.useEffect,d6=Ya.useMemo,f6=Ya.useDebugValue;BC.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=u6(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=d6(function(){function l(g){if(!u){if(u=!0,c=g,g=r(g),i!==void 0&&o.hasValue){var y=o.value;if(i(y,g))return d=y}return d=g}if(y=d,a6(c,g))return y;var _=r(g);return i!==void 0&&i(y,_)?y:(c=g,d=_)}var u=!1,c,d,f=n===void 0?null:n;return[function(){return l(t())},f===null?void 0:function(){return l(f())}]},[t,n,r,i]);var a=l6(e,s[0],s[1]);return c6(function(){o.hasValue=!0,o.value=a},[a]),f6(a),a};UC.exports=BC;var h6=UC.exports,Tt="default"in jo?at:jo,P_=Symbol.for("react-redux-context"),O_=typeof globalThis<"u"?globalThis:{};function p6(){if(!Tt.createContext)return{};const e=O_[P_]??(O_[P_]=new Map);let t=e.get(Tt.createContext);return t||(t=Tt.createContext(null),e.set(Tt.createContext,t)),t}var Dr=p6(),m6=()=>{throw new Error("uSES not initialized!")};function Gg(e=Dr){return function(){return Tt.useContext(e)}}var VC=Gg(),WC=m6,g6=e=>{WC=e},y6=(e,t)=>e===t;function v6(e=Dr){const t=e===Dr?VC:Gg(e),n=(r,i={})=>{const{equalityFn:s=y6,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:l,getServerState:u,stabilityCheck:c,identityFunctionCheck:d}=t();Tt.useRef(!0);const f=Tt.useCallback({[r.name](y){return r(y)}}[r.name],[r,c,o.stabilityCheck]),g=WC(l.addNestedSub,a.getState,u||a.getState,f,s);return Tt.useDebugValue(g),g};return Object.assign(n,{withTypes:()=>n}),n}var fn=v6();function _6(e){e()}function w6(){let e=null,t=null;return{clear(){e=null,t=null},notify(){_6(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var R_={notify(){},get:()=>[]};function x6(e,t){let n,r=R_,i=0,s=!1;function o(_){c();const w=r.subscribe(_);let p=!1;return()=>{p||(p=!0,w(),d())}}function a(){r.notify()}function l(){y.onStateChange&&y.onStateChange()}function u(){return s}function c(){i++,n||(n=t?t.addNestedSub(l):e.subscribe(l),r=w6())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=R_)}function f(){s||(s=!0,c())}function g(){s&&(s=!1,d())}const y={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:f,tryUnsubscribe:g,getListeners:()=>r};return y}var S6=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",E6=S6?Tt.useLayoutEffect:Tt.useEffect;function C6({store:e,context:t,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=Tt.useMemo(()=>{const u=x6(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[e,r,i,s]),a=Tt.useMemo(()=>e.getState(),[e]);E6(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const l=t||Dr;return Tt.createElement(l.Provider,{value:o},n)}var T6=C6;function HC(e=Dr){const t=e===Dr?VC:Gg(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var b6=HC();function k6(e=Dr){const t=e===Dr?b6:HC(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var qs=k6();g6(h6.useSyncExternalStoreWithSelector);function GC({onClose:e,color:t}){const n=qs(),r=zc({userName:jn().min(2,"Name must be at least 2 characters long").max(16,"Name can be at most 16 characters long").matches(/^[a-zA-Z\s]+$/,"Name must contain only English letters and spaces").required("Name is required"),email:jn().email("Invalid email format").matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Invalid Email format").required("Email is required"),password:jn().min(6,"Password must be at least 6 characters long").max(16,"Password can be at most 16 characters long").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,"Password must contain only English letters at least one digit, one lowercase letter, and one uppercase letter").required("Password is required")}),i=tg({initialValues:{userName:"",email:"",password:""},validationSchema:r,onSubmit:async s=>{console.log(s),n(Hl(s))}});return m.jsxs(nR,{onSubmit:i.handleSubmit,children:[m.jsx(rR,{children:"Registration"}),m.jsx(iR,{children:"Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"}),m.jsxs(cf,{children:[m.jsx(ff,{id:"userName",name:"userName",type:"text",placeholder:"Name",onChange:i.handleChange,value:i.values.userName,className:`${i.touched.userName&&i.errors.userName?"is-invalid":""}`}),i.touched.userName&&i.errors.userName?m.jsx(m.Fragment,{children:m.jsx(df,{children:i.errors.userName})}):null]}),m.jsxs(cf,{children:[m.jsx(ff,{id:"email",name:"email",type:"text",placeholder:"Email",onChange:i.handleChange,value:i.values.email,className:`${i.touched.email&&i.errors.email?"is-invalid":""}`}),i.touched.email&&i.errors.email?m.jsx(m.Fragment,{children:m.jsx(df,{children:i.errors.email})}):null]}),m.jsxs(cf,{children:[m.jsx(ff,{id:"password",name:"password",type:i.values.showPassword?"text":"password",placeholder:"Password",onChange:i.handleChange,value:i.values.password,className:`${i.touched.password&&i.errors.password?"is-invalid":""}`}),m.jsx(sR,{type:"button",onClick:()=>{i.setFieldTouched("password",!1),i.setFieldValue("showPassword",!i.values.showPassword)},children:i.values.showPassword?m.jsx(Hv,{children:m.jsx("use",{href:ut+"#iconEyeOpen"})}):m.jsx(Hv,{children:m.jsx("use",{href:ut+"#iconEyeClosed"})})}),i.touched.password&&i.errors.password?m.jsx(df,{children:i.errors.password}):null]}),m.jsx(oR,{color:t,type:"submit",children:"Sign Up"}),m.jsx(aR,{onClick:()=>e(!1),children:m.jsx(lR,{children:m.jsx("use",{href:ut+"#icon-x"})})})]})}const I6=L.form`
  position: relative;
  margin: 0 auto;
  min-height: 420px;

  background: var(--background);
  border-radius: 30px;
  padding: 32px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    padding: 64px;
  }
`,N_=L.div`
  margin-bottom: 14px;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 18px;
  }
`;L.div`
  margin-bottom: 40px;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
`;const P6=L.h2`
  line-height: 1.2;
  letter-spacing: -0.8px;
  font-weight: 500;
  margin-bottom: 20px;
  color: var(--secondar);
  @media (min-width: 768px) {
    font-size: 40px;
  }
`,O6=L.p`
  @media (min-width: 768px) {
    width: 438px;
  }

  font-size: 16px;
  font-weight: 400;
  line-height: 1.38;
  margin-bottom: 40px;
  color: rgba(18, 20, 23, 0.8);
`,A_=L.p`
  margin-left: 15px;
  font-size: 12px;
  font-weight: 400;
  color: var(--red);
`,R6=L.button`
  position: absolute;
  right: 18px;
  top: 17px;
  background-color: transparent;
  border: none;
  padding: 0px;
`,D_=L.input`
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
`,N6=L.button`
  font-weight: 600;
  width: 100%;
  border: none;
  border-radius: 12px;
  color: var(--secondar);

  background-color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};

  padding: 16px 18px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.56;
  @media (min-width: 768px) {
    padding: 16px 180px;
  }
`,A6=L.button`
  position: absolute;
  top: 20px;
  right: 20px;

  background-color: transparent;
  border: none;
`;L.svg`
  stroke: var(--secondary);
  fill: none;
  width: 24px;
  height: 24px;
`;const D6=L.svg`
  stroke: var(--secondary);
  fill: none;
  width: 32px;
  height: 32px;
`,L_=L.svg`
  stroke: var(--secondary);
  fill: none;
  display: inline-block;
  width: 24px;
  height: 24px;
`;function KC({onClose:e,color:t}){const n=qs(),r=zc({email:jn().email("Invalid email format").matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Invalid Email format").required("Email is required"),password:jn().min(6,"Password must be at least 6 characters long").max(16,"Password can be at most 16 characters long").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,"Password must contain only English letters at least one digit, one lowercase letter, and one uppercase letter").required("Password is required")}),i=tg({initialValues:{email:"",password:""},validationSchema:r,onSubmit:async s=>{await n(Gl(s))}});return m.jsxs(I6,{onSubmit:i.handleSubmit,children:[m.jsx(P6,{children:"Log In"}),m.jsx(O6,{children:"Welcome back! Please enter your credentials to access your account and continue your search for an teacher."}),m.jsxs(N_,{children:[m.jsx(D_,{id:"email",name:"email",type:"text",placeholder:"Email",onChange:i.handleChange,value:i.values.email,className:`${i.touched.email&&i.errors.email?"is-invalid":""}`}),i.touched.email&&i.errors.email?m.jsx(m.Fragment,{children:m.jsx(A_,{children:i.errors.email})}):null]}),m.jsxs(N_,{children:[m.jsx(D_,{id:"password",name:"password",type:i.values.showPassword?"text":"password",placeholder:"Password",onChange:i.handleChange,value:i.values.password,className:`${i.touched.password&&i.errors.password?"is-invalid":""}`}),m.jsx(R6,{type:"button",onClick:()=>{i.setFieldTouched("password",!1),i.setFieldValue("showPassword",!i.values.showPassword)},children:i.values.showPassword?m.jsx(L_,{children:m.jsx("use",{href:ut+"#iconEyeOpen"})}):m.jsx(L_,{children:m.jsx("use",{href:ut+"#iconEyeClosed"})})}),i.touched.password&&i.errors.password?m.jsx(A_,{children:i.errors.password}):null]}),m.jsx(N6,{color:t,type:"submit",children:"Log In"}),m.jsx(A6,{onClick:()=>e(!1),children:m.jsx(D6,{children:m.jsx("use",{href:ut+"#icon-x"})})})]})}function Ep({color:e,regis:t,log:n,ShowModal:r,setNavstate:i}){const[s,o]=T.useState(!1),[a,l]=T.useState(!1),u=()=>{r&&(r(!1),n(!0)),i&&(i("closed"),l(!a)),l(!a)},c=()=>{r&&(r(!1),t(!0)),i&&(i("closed"),o(!s)),o(!s)};return m.jsxs(m.Fragment,{children:[m.jsxs(aO,{children:[m.jsxs(lO,{onClick:u,color:e,children:[m.jsx(Qx,{color:e,children:m.jsx("use",{href:ut+"#icon-log-in-01"})}),"Log in"]}),m.jsx(uO,{onClick:c,color:e,children:"Registration"})]}),s&&m.jsx(ns,{onClose:o,children:m.jsx(GC,{color:e,onClose:o})}),a&&m.jsx(ns,{onClose:l,children:m.jsx(KC,{color:e,onClose:l})})]})}const F_=L.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 28px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`,xl=L(Pa)`
  color: var(--secondary);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  transition: color 300ms;

  @media (min-width: 768px) {
    padding: 15px 0px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
  }
  &:hover {
    color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  }
`;function YC({color:e,setNavstate:t}){return m.jsx(m.Fragment,{children:t?m.jsxs(m.Fragment,{children:[m.jsxs(F_,{children:[m.jsx(xl,{color:e,to:"/Home",onClick:()=>t("closed"),children:"Home"}),m.jsx(xl,{color:e,to:"/Teachers",onClick:()=>t("closed"),children:"Teachers"})]}),m.jsx(Ep,{color:e,setNavstate:t})]}):m.jsxs(m.Fragment,{children:[m.jsxs(F_,{children:[m.jsx(xl,{color:e,to:"/Home",children:"Home"}),m.jsx(xl,{color:e,to:"/Teachers",children:"Teachers"})]}),m.jsx(Ep,{color:e,setNavstate:t})]})})}const $_=L.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`,Bi=L(Pa)`
  color: var(--secondary);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  padding: 10px 0px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
  transition: color 300ms;
  &:hover {
    color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  }
`,L6=L.button`
  display: flex;
  align-items: center;
  transition: color 300ms;
  gap: 0px 8px;
  background-color: transparent;
  border: none;

  color: var(--secondary);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25;
  @media (max-width: 768px) {
    font-size: 24px;
  }
  &:hover {
    color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  }
`;function qC({color:e,setNavstate:t}){const n=qs(),r=()=>{t&&(n(Mo()),t("closed")),n(Mo())};return m.jsxs(m.Fragment,{children:[t?m.jsxs($_,{children:[" ",m.jsx(Bi,{color:e,to:"/Home",onClick:()=>t("closed"),children:"Home"}),m.jsx(Bi,{color:e,to:"/Teachers",onClick:()=>t("closed"),children:"Teachers"}),m.jsx(Bi,{color:e,to:"/Favorites",onClick:()=>t("closed"),children:"Favorites"})]}):m.jsxs($_,{children:[m.jsx(Bi,{color:e,to:"/Home",children:"Home"}),m.jsx(Bi,{color:e,to:"/Teachers",children:"Teachers"}),m.jsx(Bi,{color:e,to:"/Favorites",children:"Favorites"})," "]}),m.jsxs(L6,{onClick:r,color:e,children:[m.jsx(Qx,{color:e,children:m.jsx("use",{href:ut+"#icon-log-in-01"})}),"Log out"]})]})}const vd=e=>e.Auth.isAuth,F6=L.button`
  display: flex;
  position: absolute;
  top: 0;
  right: 20px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  margin: 10px auto;
  padding: 0;
  z-index: 2;
  min-height: 48px;
`,$6=L.i`
  display: block;
  position: relative;
  width: 45px;
  height: 5px;
  border-radius: 20px;
  background-color: ${e=>e.navstate==="opened"?"transparent":e.color==="Blue"?"var(--hoverColorBlue)":e.color==="Green"?"var(--hoverColorGreen)":e.color==="Orange"?"var(--hoverColorYellow)":e.color==="Pink"?"var(--hoverColorPink)":e.color==="LightPink"?"var(--hoverColorCoral)":"blue"};
  transition: all 0.5s;
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: ${e=>e.color?e.color==="Blue"?"var(--hoverColorBlue)":e.color==="Green"?"var(--hoverColorGreen)":e.color==="Orange"?"var(--hoverColorYellow)":e.color==="Pink"?"var(--hoverColorPink)":e.color==="LightPink"?"var(--hoverColorCoral)":"var(--hoverCecondary-text-color)":"blue"};
    transition: 0.3s;
  }
  &::before {
    transform: translate(0, -12px);
    transform: ${e=>e.navstate==="opened"&&"rotate(45deg)"};
  }

  &::after {
    transform: translate(0, 12px);
    transform: ${e=>e.navstate==="opened"&&"rotate(-45deg)"};
  }
`,M6=({navstate:e,handleNavstate:t,color:n})=>m.jsx(F6,{onClick:()=>t(),children:m.jsx($6,{navstate:e,color:n})}),j6=L.div`
  flex-basis: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,z6=L.ul`
  position: fixed;
  left: 0px;
  width: 100%;
  top: 0px;
  z-index: 1;
  height: 100%;
  transition: transform 0.5s cubic-bezier(0.85, 0.58, 0.59, 1.1) 0s;
  display: flex;
  gap: 32px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transform: ${e=>e.display==="default"||e.display==="closed"?"translateY(-900px);":e.display==="opened"?"translateY(0);":null};
  background-color: white;
`,U6=({color:e})=>{const[t,n]=T.useState("default"),r=fn(vd),i=()=>{n(t==="default"?"opened":t==="opened"?"closed":"opened")};return m.jsxs(j6,{children:[m.jsx(M6,{navstate:t,handleNavstate:i,color:e}),m.jsx(z6,{display:t,children:r?m.jsx(qC,{color:e,setNavstate:n}):m.jsx(YC,{color:e,setNavstate:n})})]})},B6=({color:e})=>{const t=fn(vd);return m.jsxs(iO,{children:[m.jsxs(sO,{children:[m.jsxs($v,{to:"/Home",children:[m.jsx(Fv,{children:m.jsx("use",{href:ut+"#icon-ukraine"})}),m.jsx(Mv,{children:"LearnLingo"})]}),t?m.jsx(qC,{color:e}):m.jsx(YC,{color:e})]}),m.jsxs(oO,{children:[m.jsxs($v,{to:"/Home",children:[m.jsx(Fv,{children:m.jsx("use",{href:ut+"#icon-ukraine"})}),m.jsx(Mv,{children:"LearnLingo"})]}),m.jsx(U6,{color:e})]})]})};function Cp(){return Cp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Cp.apply(this,arguments)}function V6(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function W6(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var H6=function(){function e(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(W6(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=V6(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Ze="-ms-",uc="-moz-",X="-webkit-",QC="comm",Kg="rule",Yg="decl",G6="@import",XC="@keyframes",K6="@layer",Y6=Math.abs,_d=String.fromCharCode,q6=Object.assign;function Q6(e,t){return We(e,0)^45?(((t<<2^We(e,0))<<2^We(e,1))<<2^We(e,2))<<2^We(e,3):0}function JC(e){return e.trim()}function X6(e,t){return(e=t.exec(e))?e[0]:e}function J(e,t,n){return e.replace(t,n)}function Tp(e,t){return e.indexOf(t)}function We(e,t){return e.charCodeAt(t)|0}function Ca(e,t,n){return e.slice(t,n)}function vn(e){return e.length}function qg(e){return e.length}function Sl(e,t){return t.push(e),e}function J6(e,t){return e.map(t).join("")}var wd=1,Fs=1,ZC=0,xt=0,ke=0,Qs="";function xd(e,t,n,r,i,s,o){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:wd,column:Fs,length:o,return:""}}function co(e,t){return q6(xd("",null,null,"",null,null,0),e,{length:-e.length},t)}function Z6(){return ke}function e5(){return ke=xt>0?We(Qs,--xt):0,Fs--,ke===10&&(Fs=1,wd--),ke}function Ot(){return ke=xt<ZC?We(Qs,xt++):0,Fs++,ke===10&&(Fs=1,wd++),ke}function En(){return We(Qs,xt)}function Kl(){return xt}function qa(e,t){return Ca(Qs,e,t)}function Ta(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function eT(e){return wd=Fs=1,ZC=vn(Qs=e),xt=0,[]}function tT(e){return Qs="",e}function Yl(e){return JC(qa(xt-1,bp(e===91?e+2:e===40?e+1:e)))}function t5(e){for(;(ke=En())&&ke<33;)Ot();return Ta(e)>2||Ta(ke)>3?"":" "}function n5(e,t){for(;--t&&Ot()&&!(ke<48||ke>102||ke>57&&ke<65||ke>70&&ke<97););return qa(e,Kl()+(t<6&&En()==32&&Ot()==32))}function bp(e){for(;Ot();)switch(ke){case e:return xt;case 34:case 39:e!==34&&e!==39&&bp(ke);break;case 40:e===41&&bp(e);break;case 92:Ot();break}return xt}function r5(e,t){for(;Ot()&&e+ke!==47+10;)if(e+ke===42+42&&En()===47)break;return"/*"+qa(t,xt-1)+"*"+_d(e===47?e:Ot())}function i5(e){for(;!Ta(En());)Ot();return qa(e,xt)}function s5(e){return tT(ql("",null,null,null,[""],e=eT(e),0,[0],e))}function ql(e,t,n,r,i,s,o,a,l){for(var u=0,c=0,d=o,f=0,g=0,y=0,_=1,w=1,p=1,h=0,v="",x=i,E=s,C=r,S=v;w;)switch(y=h,h=Ot()){case 40:if(y!=108&&We(S,d-1)==58){Tp(S+=J(Yl(h),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:S+=Yl(h);break;case 9:case 10:case 13:case 32:S+=t5(y);break;case 92:S+=n5(Kl()-1,7);continue;case 47:switch(En()){case 42:case 47:Sl(o5(r5(Ot(),Kl()),t,n),l);break;default:S+="/"}break;case 123*_:a[u++]=vn(S)*p;case 125*_:case 59:case 0:switch(h){case 0:case 125:w=0;case 59+c:p==-1&&(S=J(S,/\f/g,"")),g>0&&vn(S)-d&&Sl(g>32?j_(S+";",r,n,d-1):j_(J(S," ","")+";",r,n,d-2),l);break;case 59:S+=";";default:if(Sl(C=M_(S,t,n,u,c,i,a,v,x=[],E=[],d),s),h===123)if(c===0)ql(S,t,C,C,x,s,d,a,E);else switch(f===99&&We(S,3)===110?100:f){case 100:case 108:case 109:case 115:ql(e,C,C,r&&Sl(M_(e,C,C,0,0,i,a,v,i,x=[],d),E),i,E,d,a,r?x:E);break;default:ql(S,C,C,C,[""],E,0,a,E)}}u=c=g=0,_=p=1,v=S="",d=o;break;case 58:d=1+vn(S),g=y;default:if(_<1){if(h==123)--_;else if(h==125&&_++==0&&e5()==125)continue}switch(S+=_d(h),h*_){case 38:p=c>0?1:(S+="\f",-1);break;case 44:a[u++]=(vn(S)-1)*p,p=1;break;case 64:En()===45&&(S+=Yl(Ot())),f=En(),c=d=vn(v=S+=i5(Kl())),h++;break;case 45:y===45&&vn(S)==2&&(_=0)}}return s}function M_(e,t,n,r,i,s,o,a,l,u,c){for(var d=i-1,f=i===0?s:[""],g=qg(f),y=0,_=0,w=0;y<r;++y)for(var p=0,h=Ca(e,d+1,d=Y6(_=o[y])),v=e;p<g;++p)(v=JC(_>0?f[p]+" "+h:J(h,/&\f/g,f[p])))&&(l[w++]=v);return xd(e,t,n,i===0?Kg:a,l,u,c)}function o5(e,t,n){return xd(e,t,n,QC,_d(Z6()),Ca(e,2,-2),0)}function j_(e,t,n,r){return xd(e,t,n,Yg,Ca(e,0,r),Ca(e,r+1,-1),r)}function gs(e,t){for(var n="",r=qg(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function a5(e,t,n,r){switch(e.type){case K6:if(e.children.length)break;case G6:case Yg:return e.return=e.return||e.value;case QC:return"";case XC:return e.return=e.value+"{"+gs(e.children,r)+"}";case Kg:e.value=e.props.join(",")}return vn(n=gs(e.children,r))?e.return=e.value+"{"+n+"}":""}function l5(e){var t=qg(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}function u5(e){return function(t){t.root||(t=t.return)&&e(t)}}var c5=function(t,n,r){for(var i=0,s=0;i=s,s=En(),i===38&&s===12&&(n[r]=1),!Ta(s);)Ot();return qa(t,xt)},d5=function(t,n){var r=-1,i=44;do switch(Ta(i)){case 0:i===38&&En()===12&&(n[r]=1),t[r]+=c5(xt-1,n,r);break;case 2:t[r]+=Yl(i);break;case 4:if(i===44){t[++r]=En()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=_d(i)}while(i=Ot());return t},f5=function(t,n){return tT(d5(eT(t),n))},z_=new WeakMap,h5=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!z_.get(r))&&!i){z_.set(t,!0);for(var s=[],o=f5(n,s),a=r.props,l=0,u=0;l<o.length;l++)for(var c=0;c<a.length;c++,u++)t.props[u]=s[l]?o[l].replace(/&\f/g,a[c]):a[c]+" "+o[l]}}},p5=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function nT(e,t){switch(Q6(e,t)){case 5103:return X+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return X+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return X+e+uc+e+Ze+e+e;case 6828:case 4268:return X+e+Ze+e+e;case 6165:return X+e+Ze+"flex-"+e+e;case 5187:return X+e+J(e,/(\w+).+(:[^]+)/,X+"box-$1$2"+Ze+"flex-$1$2")+e;case 5443:return X+e+Ze+"flex-item-"+J(e,/flex-|-self/,"")+e;case 4675:return X+e+Ze+"flex-line-pack"+J(e,/align-content|flex-|-self/,"")+e;case 5548:return X+e+Ze+J(e,"shrink","negative")+e;case 5292:return X+e+Ze+J(e,"basis","preferred-size")+e;case 6060:return X+"box-"+J(e,"-grow","")+X+e+Ze+J(e,"grow","positive")+e;case 4554:return X+J(e,/([^-])(transform)/g,"$1"+X+"$2")+e;case 6187:return J(J(J(e,/(zoom-|grab)/,X+"$1"),/(image-set)/,X+"$1"),e,"")+e;case 5495:case 3959:return J(e,/(image-set\([^]*)/,X+"$1$`$1");case 4968:return J(J(e,/(.+:)(flex-)?(.*)/,X+"box-pack:$3"+Ze+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+X+e+e;case 4095:case 3583:case 4068:case 2532:return J(e,/(.+)-inline(.+)/,X+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(vn(e)-1-t>6)switch(We(e,t+1)){case 109:if(We(e,t+4)!==45)break;case 102:return J(e,/(.+:)(.+)-([^]+)/,"$1"+X+"$2-$3$1"+uc+(We(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Tp(e,"stretch")?nT(J(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(We(e,t+1)!==115)break;case 6444:switch(We(e,vn(e)-3-(~Tp(e,"!important")&&10))){case 107:return J(e,":",":"+X)+e;case 101:return J(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+X+(We(e,14)===45?"inline-":"")+"box$3$1"+X+"$2$3$1"+Ze+"$2box$3")+e}break;case 5936:switch(We(e,t+11)){case 114:return X+e+Ze+J(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return X+e+Ze+J(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return X+e+Ze+J(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return X+e+Ze+e+e}return e}var m5=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Yg:t.return=nT(t.value,t.length);break;case XC:return gs([co(t,{value:J(t.value,"@","@"+X)})],i);case Kg:if(t.length)return J6(t.props,function(s){switch(X6(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return gs([co(t,{props:[J(s,/:(read-\w+)/,":"+uc+"$1")]})],i);case"::placeholder":return gs([co(t,{props:[J(s,/:(plac\w+)/,":"+X+"input-$1")]}),co(t,{props:[J(s,/:(plac\w+)/,":"+uc+"$1")]}),co(t,{props:[J(s,/:(plac\w+)/,Ze+"input-$1")]})],i)}return""})}},g5=[m5],y5=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(_){var w=_.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(_),_.setAttribute("data-s",""))})}var i=t.stylisPlugins||g5,s={},o,a=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(_){for(var w=_.getAttribute("data-emotion").split(" "),p=1;p<w.length;p++)s[w[p]]=!0;a.push(_)});var l,u=[h5,p5];{var c,d=[a5,u5(function(_){c.insert(_)})],f=l5(u.concat(i,d)),g=function(w){return gs(s5(w),f)};l=function(w,p,h,v){c=h,g(w?w+"{"+p.styles+"}":p.styles),v&&(y.inserted[p.name]=!0)}}var y={key:n,sheet:new H6({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:s,registered:{},insert:l};return y.sheet.hydrate(a),y},v5=!0;function _5(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var rT=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||v5===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},w5=function(t,n,r){rT(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var s=n;do t.insert(n===s?"."+i:"",s,t.sheet,!0),s=s.next;while(s!==void 0)}};function x5(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var S5=/[A-Z]|^ms/g,E5=/_EMO_([^_]+?)_([^]*?)_EMO_/g,iT=function(t){return t.charCodeAt(1)===45},U_=function(t){return t!=null&&typeof t!="boolean"},Ff=Ix(function(e){return iT(e)?e:e.replace(S5,"-$&").toLowerCase()}),B_=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(E5,function(r,i,s){return _n={name:i,styles:s,next:_n},i})}return Lx[t]!==1&&!iT(t)&&typeof n=="number"&&n!==0?n+"px":n};function ba(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return _n={name:n.name,styles:n.styles,next:_n},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)_n={name:r.name,styles:r.styles,next:_n},r=r.next;var i=n.styles+";";return i}return C5(e,t,n)}case"function":{if(e!==void 0){var s=_n,o=n(e);return _n=s,ba(e,t,o)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function C5(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=ba(e,t,n[i])+";";else for(var s in n){var o=n[s];if(typeof o!="object")t!=null&&t[o]!==void 0?r+=s+"{"+t[o]+"}":U_(o)&&(r+=Ff(s)+":"+B_(s,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var a=0;a<o.length;a++)U_(o[a])&&(r+=Ff(s)+":"+B_(s,o[a])+";");else{var l=ba(e,t,o);switch(s){case"animation":case"animationName":{r+=Ff(s)+":"+l+";";break}default:r+=s+"{"+l+"}"}}}return r}var V_=/label:\s*([^\s;\n{]+)\s*(;|$)/g,_n,T5=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,s="";_n=void 0;var o=t[0];o==null||o.raw===void 0?(i=!1,s+=ba(r,n,o)):s+=o[0];for(var a=1;a<t.length;a++)s+=ba(r,n,t[a]),i&&(s+=o[a]);V_.lastIndex=0;for(var l="",u;(u=V_.exec(s))!==null;)l+="-"+u[1];var c=x5(s)+l;return{name:c,styles:s,next:_n}},b5=function(t){return t()},k5=jo["useInsertionEffect"]?jo["useInsertionEffect"]:!1,I5=k5||b5,sT=T.createContext(typeof HTMLElement<"u"?y5({key:"css"}):null);sT.Provider;var P5=function(t){return T.forwardRef(function(n,r){var i=T.useContext(sT);return t(n,i,r)})},O5=T.createContext({}),R5=tP,N5=function(t){return t!=="theme"},W_=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?R5:N5},H_=function(t,n,r){var i;if(n){var s=n.shouldForwardProp;i=t.__emotion_forwardProp&&s?function(o){return t.__emotion_forwardProp(o)&&s(o)}:s}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},A5=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return rT(n,r,i),I5(function(){return w5(n,r,i)}),null},D5=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,s,o;n!==void 0&&(s=n.label,o=n.target);var a=H_(t,n,r),l=a||W_(i),u=!l("as");return function(){var c=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(s!==void 0&&d.push("label:"+s+";"),c[0]==null||c[0].raw===void 0)d.push.apply(d,c);else{d.push(c[0][0]);for(var f=c.length,g=1;g<f;g++)d.push(c[g],c[0][g])}var y=P5(function(_,w,p){var h=u&&_.as||i,v="",x=[],E=_;if(_.theme==null){E={};for(var C in _)E[C]=_[C];E.theme=T.useContext(O5)}typeof _.className=="string"?v=_5(w.registered,x,_.className):_.className!=null&&(v=_.className+" ");var S=T5(d.concat(x),w.registered,E);v+=w.key+"-"+S.name,o!==void 0&&(v+=" "+o);var O=u&&a===void 0?W_(h):l,$={};for(var F in _)u&&F==="as"||O(F)&&($[F]=_[F]);return $.className=v,$.ref=p,T.createElement(T.Fragment,null,T.createElement(A5,{cache:w,serialized:S,isStringTag:typeof h=="string"}),T.createElement(h,$))});return y.displayName=s!==void 0?s:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",y.defaultProps=t.defaultProps,y.__emotion_real=y,y.__emotion_base=i,y.__emotion_styles=d,y.__emotion_forwardProp=a,Object.defineProperty(y,"toString",{value:function(){return"."+o}}),y.withComponent=function(_,w){return e(_,Cp({},n,w,{shouldForwardProp:H_(y,w,!0)})).apply(void 0,d)},y}},L5=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],P=D5.bind();L5.forEach(function(e){P[e]=P(e)});const F5=P.div`
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
`,$5=P.div`
  position: relative;
  height: 200px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`,oT=({color:e})=>m.jsx(F5,{color:e,children:m.jsx($5,{children:m.jsxs("div",{className:"lds-ripple",children:[m.jsx("div",{}),m.jsx("div",{})]})})}),M5=({color:e})=>m.jsxs(m.Fragment,{children:[m.jsx(B6,{color:e}),m.jsx(T.Suspense,{fallback:m.jsx(oT,{color:e}),children:m.jsx(jb,{})})]}),j5=P.div`
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
`,z5=P.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: stretch;
  gap: 24px;
  margin-bottom: 24px;
  /* width: 100%; */

  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1280px) {
  }
`,U5=P.h1`
  @media (min-width: 768px) {
    font-size: 36px;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
  @media (min-width: 1280px) {
    width: 548px;
    font-size: 48px;
  }

  color: var(--secondary);
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.17;
  letter-spacing: -0.96px;
  margin: 0px;
  margin-bottom: 32px;
`,B5=P.span`
  font-style: italic;
  font-weight: 400;
  line-height: 56px;
  letter-spacing: -0.96px;
  padding-right: 10px;
  border-radius: 12px;
  background-color: ${({color:e})=>e==="Blue"?"var(--hoverColorBlue)":e==="Green"?"var(--hoverColorGreen)":e==="Orange"?"var(--hoverColorYellow)":e==="Pink"?"var(--hoverColorPink)":e==="LightPink"?"var(--hoverColorCoral)":"var(--hoverCecondary-text-color)"};
`,V5=P.div`
  background-color: var(--secondary-white);
  border-radius: 30px;
  max-width: 735px;

  padding: 24px 16px;
  /* @media screen and (min-width: 768px) {
        @media screen and (max-width: 1279px) {
               max-width: 490px;
        }
              } */
  @media screen and (min-width: 1280px) {
    padding: 98px 20px 98px 64px;
    width: 720px;
  }
`;P.img`
  width: 300px;
  height: 350px;
  @media screen and (min-width: 1280px) {
    width: 568px;
    height: 530px;
  }
`;const W5=P.p`
  @media (min-width: 1280px) {
    width: 471px;
    margin-bottom: 64px;
  }
  margin-bottom: 32px;
  color: var(--secondary);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.37;
  letter-spacing: -0.32px;
`,H5=P(Pa)`
  display: block;
  text-align: center;
  border: none;
  font-size: 18px;
  padding: 16px 10px;
  font-weight: 700;
  line-height: 1.6;
  border-radius: 12px;
  height: 60px;
  transition: background 300ms;
  background-color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};

  @media screen and (min-width: 768px) {
    width: 267px;
  }
  @media screen and (min-width: 1280px) {
    width: 267px;
    padding: 16px 88px;
  }
  &:hover {
    background-color: ${({color:e})=>e==="Blue"?"var(--hoverColorBlue)":e==="Green"?"var(--hoverColorGreen)":e==="Orange"?"var(--hoverColorYellow)":e==="Pink"?"var(--hoverColorPink)":e==="LightPink"?"var(--hoverColorCoral)":"var(--hoverCecondary-text-color)"};
  }
`,G5=P.ul`
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
`,El=P.li`
  display: flex;
  flex-direction: row;
  gap: 16px;
`,Cl=P.span`
  font-size: 28px;
  line-height: 1.14;
  font-weight: 500;
  letter-spacing: -0.56px;
`,Tl=P.span`
  width: 74px;
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: -0.28px;
`,K5=P.div`
  background-color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  border-radius: 15px;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 2.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
  @media screen and (min-width: 1024px) {
    width: 468px;
  }

  @media screen and (min-width: 1280px) {
    width: 568px;
  }
  img {
    width: 13rem;
    @media screen and (min-width: 1280px) {
      width: 300px;
    }
  }
`,Y5=P.div`
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  background-image: ${({color:e})=>e==="Blue"?"linear-gradient(180deg, #314B6E 0%, #1F385A 100%)":e==="Green"?"linear-gradient(180deg, #295761 0%, #183E49 100%)":e==="Orange"?"linear-gradient(180deg, #EEB055 0%, #D08F38 100%)":e==="Pink"?"linear-gradient(180deg, #B03F3E 0%, #982A27 100%)":e==="LightPink"?"linear-gradient(180deg, #E17650 0%, #CA5B38 100%)":"var(--cecondary-text-color)"};

  width: 16rem;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 308px;
    height: 7rem;
  }
  @media screen and (min-width: 1024px) {
    width: 370px;
    height: 11rem;
  }

  svg {
    width: 46px;
    height: 56px;
    /* fill: ${({color:e})=>e==="Blue"?"linear-gradient(180deg, #314B6E 0%, #1F385A 100%)":e==="Green"?"linear-gradient(180deg, #295761 0%, #183E49 100%)":e==="Orange"?"linear-gradient(180deg, #EEB055 0%, #D08F38 100%)":e==="Pink"?"linear-gradient(180deg, #B03F3E 0%, #982A27 100%)":e==="LightPink"?"linear-gradient(180deg, #E17650 0%, #CA5B38 100%)":"var(--cecondary-text-color)"}; */
  }
`,q5="/Learn-Lingo/assets/hero2-726776c9.webp",Q5=({color:e})=>m.jsxs(j5,{children:[m.jsxs(z5,{children:[m.jsxs(V5,{children:[m.jsxs(U5,{children:["Unlock your potential with the best"," ",m.jsx(B5,{color:e,children:"language"})," tutors"]}),m.jsx(W5,{children:"Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors."}),m.jsx(H5,{to:"/Teachers",color:e,children:"Get started"})]}),m.jsxs(K5,{color:e,children:[m.jsx("img",{src:q5,alt:""}),m.jsx(Y5,{color:e,children:m.jsx("svg",{children:m.jsx("use",{href:ut+"#icon-apple"})})})]})]}),m.jsx("footer",{children:m.jsxs(G5,{color:e,children:[m.jsxs(El,{children:[m.jsx(Cl,{children:"32,000 +"}),m.jsx(Tl,{children:"Experienced tutors"})]}),m.jsxs(El,{children:[m.jsx(Cl,{children:"300,000 +"}),m.jsx(Tl,{children:"5-star tutor reviews"})]}),m.jsxs(El,{children:[m.jsx(Cl,{children:"120 +"}),m.jsx(Tl,{children:"Subjects taught"})]}),m.jsxs(El,{children:[m.jsx(Cl,{children:"200 +"}),m.jsx(Tl,{children:"Tutor nationalities"})]})]})})]}),cc=P.ul`
  margin-top: 32px;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
`,X5=P.button`
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
  transition: background 300ms;
  background-color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  &:hover {
    background-color: ${({color:e})=>e==="Blue"?"var(--hoverColorBlue)":e==="Green"?"var(--hoverColorGreen)":e==="Orange"?"var(--hoverColorYellow)":e==="Pink"?"var(--hoverColorPink)":e==="LightPink"?"var(--hoverColorCoral)":"var(--hoverCecondary-text-color)"};
  }
`,Ql=P.div`
  margin-left: auto;
  margin-right: auto;
  padding: 40px 16px;
  width: 320px;
  height: calc(100vh - 80px);
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
`;P.p`
  margin: 0;

  margin-bottom: 20px;
  margin-right: auto;
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.8px;
  color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
`;const J5=P.p`
  font-size: 18px;
  line-height: 1.5;
`;var aT={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},G_=at.createContext&&at.createContext(aT),Z5=["attr","size","title"];function e8(e,t){if(e==null)return{};var n=t8(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function t8(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function dc(){return dc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},dc.apply(this,arguments)}function K_(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function fc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?K_(Object(n),!0).forEach(function(r){n8(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K_(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function n8(e,t,n){return t=r8(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r8(e){var t=i8(e,"string");return typeof t=="symbol"?t:String(t)}function i8(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function lT(e){return e&&e.map((t,n)=>at.createElement(t.tag,fc({key:n},t.attr),lT(t.child)))}function Sd(e){return t=>at.createElement(s8,dc({attr:fc({},e.attr)},t),lT(e.child))}function s8(e){var t=n=>{var{attr:r,size:i,title:s}=e,o=e8(e,Z5),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),at.createElement("svg",dc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:fc(fc({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&at.createElement("title",null,s),e.children)};return G_!==void 0?at.createElement(G_.Consumer,null,n=>t(n)):t(aT)}function o8(e){return Sd({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"},child:[]}]})(e)}function a8(e){return Sd({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"},child:[]}]})(e)}function l8(e){return Sd({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"},child:[]}]})(e)}function u8(e){return Sd({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"},child:[]}]})(e)}const c8=P.li`
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
`,d8=P.div`
  width: 120px;
  height: 120px;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  border-radius: 50%;
  border: 3px solid
    ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  background: #fff;
`,f8=P.img`
  position: relative;
  display: block;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
`,h8=P.svg`
  position: absolute;
  width: 12px;
  height: 12px;
  top: 17px;
  right: 17px;
`,p8=P.div``,m8=P.div`
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
    font-weight: 500;

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
`;P.div`
  display: flex;
  justify-content: space-between;
`;const g8=P.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,y8=P.li`
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
    background-color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
    border: none;
  }
`,Y_=P(u8)`
  transform: scale(1);
  transition: transform 300ms cubic-bezier(0.39, 0.575, 0.565, 1);

  &:hover {
    transform: scale(1.02);
    opacity: 0.8;
  }
`,q_=P.button`
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
  background-color: transparent;
  border: none;
`,v8=P(o8)`
  transform: scale(1);
  transition: transform 300ms cubic-bezier(0.39, 0.575, 0.565, 1);
  fill: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};

  &:hover {
    transform: scale(1.02);
    opacity: 0.8;
  }
`,_8=P(l8)`
  margin-right: 8px;
`,Q_=P(a8)`
  margin-right: 8px;
  fill: #ffc531;
`,w8=P.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  & p {
    color: var(--gray);
    margin: 0;
  }
`,x8=P.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
`,S8=P.p`
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
`,X_=P.p`
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
`,J_=P.button`
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
`;P.svg`
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
`;const E8=P.p`
  margin-bottom: 32px;
  margin-top: 16px;

  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`,C8=P.ul`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
`,T8=P.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`,b8=P.div`
  display: flex;
  gap: 12px;
`,k8=P.div`
  width: 46px;
  height: 46px;
  border-radius: 100px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`,I8=P.p`
  display: block;
  border-radius: 100px;

  font-size: 24px;
  font-weight: 700;
`,P8=P.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
`,O8=P.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`,R8=P.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`,N8=P.button`
  padding: 16px 48px;
  border: none;
  border-radius: 12px;
  background-color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};

  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  margin-top: 32px;
`,A8=P.div`
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
`,D8=P.svg`
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
`,L8=P.h3`
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
`,F8=P.p`
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.56px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0.8px;
  }
`,Xl=od("teachers/getAllTeachers",async(e,t)=>{const n=G4(s6);try{const r=await K4(lc(n,"/"));if(r.exists()){const i=r.val();return Object.values(i)}}catch(r){return t.rejectWithValue(r.message)}}),$8={teachers:[],teachersFilter:null,teachersFavorites:[],filterFavoritesTeachers:null,isLoading:!1},uT=JS({name:"teachers",initialState:$8,extraReducers:e=>{e.addCase(Xl.pending,t=>{t.isLoading=!0}).addCase(Xl.fulfilled,(t,{payload:n})=>{t.isLoading=!1,t.teachers=n}).addCase(Xl.rejected,t=>{t.isLoading=!1})},reducers:{addFavorites(e,t){e.teachersFavorites.push(t.payload)},deleteFavorites(e,t){const n=e.teachersFavorites.filter(r=>r.avatar_url!==t.payload.avatar_url);e.teachersFavorites=n},filterTeachers(e,t){return{...e,teachersFilter:t.payload}},filterFavoritesTeachers(e,t){return{...e,filterFavoritesTeachers:t.payload}},resetFilter(e){return{...e,teachersFilter:null}},resetFavoritesFilter(e){return{...e,filterFavoritesTeachers:null}}}}),{addFavorites:M8,deleteFavorites:j8,filterTeachers:z8,resetFilter:U8,filterFavoritesTeachers:B8,resetFavoritesFilter:V8}=uT.actions,W8=uT.reducer,cT=e=>e.teachers.teachers,H8=e=>e.teachers.isLoading,dT=e=>e.teachers.teachersFavorites,G8=e=>e.teachers.filterFavoritesTeachers,K8=e=>e.teachers.teachersFilter,Y8=P.form`
  max-width: 600px;
  border-radius: 30px;
  position: fixed;
  transform: translateX(-50%) translateY(-50%);
  background-color: white;
  height: auto;
  padding: 64px;
  left: 50%;
  max-height: calc(100% - 88px);
  overflow-y: auto;
  top: calc(50% + 40px);
  @media screen and (max-width: 768px) {
    position: fixed;
    top: 88px;
    left: 50%;
    width: 100%;
    max-height: calc(100% - 88px);
    overflow-y: auto;
    transform: translateX(-50%) translateY(0px);
  }
`,q8=P.div`
  margin-bottom: 18px;
`,Q8=P.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,X8=P.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: 21px;
  margin-top: 32px;
`,fo=P.label`
  display: flex;
  gap: 8px;
  color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0.04em;
  text-align: left;
  &:checked {
    font-weight: 700;
    color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  }
  &:focus-within {
    font-weight: 700;
    color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  }
`,$f=P.div`
  width: 100%;
  position: relative;

  & input {
    width: 100%;
    height: 100%;

    margin-top: 20px;
    border-radius: 12px;
    border: 1px solid rgba(18, 20, 23, 0.1);
    background-color: #fff;
    color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
    padding: 16px;

    &:focus {
      outline: none;
    }

    &:focus + label {
      color: #dddddd;
    }

    &:not(:placeholder-shown) + label {
      transform: translateY(-34px);
      font-size: 10px;
      font-weight: 100;
    }
    &.is-invalid {
      border-color: var(--red);
    }
  }

  & label {
    position: absolute;
    bottom: 20px;
    left: 18px;
    width: 100%;
    pointer-events: none;
    font-size: 14px;

    transition: all 0.3s ease;
  }

  & .error {
    position: absolute;
    top: 56px;
    left: 40px;
    font-size: 12px;
  }
`,ho=P.input`
  display: flex;
  justify-content: center;
  margin: 0;
  width: 20px;
  height: 20px;
  align-items: center;
  appearance: none;
  background-color: #fff;

  border: 2px solid rgba(18, 20, 23, 0.2);
  border-radius: 50%;
  transition: all 300ms;
  &:checked {
    border: 2px solid
      ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  }
  &:before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: scale(0);
    transition-property: transform;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: ${({color:e})=>e==="Blue"?"var(--colorBlue)  10px 10px inset":e==="Green"?"var(--colorGreen)  10px 10px inset":e==="Orange"?"var(--colorYellow)  10px 10px inset":e==="Pink"?"var(--colorPink)  10px 10px inset":e==="LightPink"?"var(--colorCoral)  10px 10px inset":"var(--cecondary-text-color)"};
    background-color: transparent;
  }
  &:checked::before {
    transform: scale(1);
  }
  &:focus {
  }
`,J8=P.div`
  display: flex;
  gap: 12px;
`,Z8=P.div`
  width: 46px;
  height: 46px;
  border-radius: 100px;

  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`,ez=P.img`
  border-radius: 100%;
  background: #fff;
  overflow: hidden;
`,tz=P.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
`,nz=P.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  color: #8a8a89;
`,rz=P.span`
  font-size: 16px;

  font-weight: 500;
  line-height: 1.5; /* 150% */
`,iz=P.h3`
  margin: 0;

  margin-bottom: 20px;
  margin-right: auto;
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2; /* 120% */
  letter-spacing: -0.8px;
`,sz=P.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
  }
`,oz=P.p`
  margin: 0;
  margin-bottom: 22px;
  margin-right: auto;
  color: rgba(18, 20, 23, 0.8);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.37;
`,Mf=P.p`
  margin-left: 15px;
  font-size: 12px;
  font-weight: 400;
  color: var(--red);
`,az=P.button`
  border: none;
  background-color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  padding: 16px 215px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.6;
  width: 100%;
  @media screen and (max-width: 768px) {
    padding: 16px 70px;
  }
`,lz=P.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
`,uz=P.svg`
  stroke: black;
  width: 32px;
  height: 32px;
`,cz=({setIsBookModalOpened:e,teacherDataForBook:t,color:n})=>{const{name:r,surname:i,avatar_url:s}=t,o=()=>{e(!1),document.querySelector("body").classList.remove("modal-open")},a=zc({userName:jn().min(2,"Name must be at least 2 characters long").max(16,"Name can be at most 16 characters long").matches(/^[a-zA-Z\s]+$/,"Name must contain only English letters and spaces").required("Name is required"),email:jn().email("Invalid email format").matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Invalid Email format").required("Email is required"),phone:jn().matches(/^\+\d{12}$/,"Phone must have + and length 12").min(13,"Phone Too Short!").max(13,"Phone Too long").required("Required")}),l=tg({initialValues:{userName:"",email:"",phone:""},validationSchema:a,onSubmit:async u=>{console.log(u),document.querySelector("body").classList.remove("modal-open"),e(!1)}});return m.jsxs(Y8,{onSubmit:l.handleSubmit,children:[m.jsx(iz,{children:"Book trial lesson"}),m.jsx(oz,{children:"Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."}),m.jsxs(J8,{children:[m.jsx(Z8,{children:m.jsx(ez,{src:s,height:"46px",width:"46px"})}),m.jsxs(tz,{children:[m.jsx(nz,{children:"Your teacher"}),m.jsx(rz,{children:`${r} ${i}`})]})]}),m.jsx(X8,{children:"What is your main reason for learning English?"}),m.jsxs(Q8,{children:[m.jsxs(fo,{children:[m.jsx(ho,{color:n,type:"radio",name:"mainReason",value:"Career and business"}),"Career and business"]}),m.jsxs(fo,{children:[m.jsx(ho,{color:n,type:"radio",name:"mainReason",value:"Lesson for kids"}),"Lesson for kids"]}),m.jsxs(fo,{children:[m.jsx(ho,{color:n,type:"radio",name:"mainReason",value:"Living abroad"}),"Living abroad"]}),m.jsxs(fo,{children:[m.jsx(ho,{color:n,type:"radio",name:"mainReason",value:"Exams and coursework"}),"Exams and coursework"]}),m.jsxs(fo,{children:[m.jsx(ho,{color:n,type:"radio",name:"mainReason",value:"Culture, travel or hobby"}),"Culture, travel or hobby"]})]}),m.jsxs(q8,{children:[m.jsxs($f,{children:[m.jsx("input",{type:"text",name:"userName",placeholder:"Full Name",onChange:l.handleChange,value:l.values.userName,className:`${l.touched.userName&&l.errors.userName?"is-invalid":""}`}),l.touched.userName&&l.errors.userName?m.jsx(m.Fragment,{children:m.jsx(Mf,{children:l.errors.userName})}):null]}),m.jsxs($f,{children:[m.jsx("input",{type:"text",name:"email",placeholder:"Email",onChange:l.handleChange,value:l.values.email,className:`${l.touched.email&&l.errors.email?"is-invalid":""}`}),l.touched.email&&l.errors.email?m.jsx(m.Fragment,{children:m.jsx(Mf,{children:l.errors.email})}):null]}),m.jsxs($f,{children:[m.jsx("input",{type:"phone",name:"phone",placeholder:"Phone number",onChange:l.handleChange,value:l.values.phone,className:`${l.touched.phone&&l.errors.phone?"is-invalid":""}`}),l.touched.phone&&l.errors.phone?m.jsx(m.Fragment,{children:m.jsx(Mf,{children:l.errors.phone})}):null]})]}),m.jsx(sz,{children:m.jsx(az,{color:n,type:"submit",children:"Book"})}),m.jsx(lz,{onClick:o,children:m.jsx(uz,{children:m.jsx("use",{href:ut+"#icon-x"})})})]})},hc=({teacher:e,color:t,Level:n})=>{const{name:r,surname:i,languages:s,levels:o,rating:a,reviews:l,price_per_hour:u,lessons_done:c,avatar_url:d,lesson_info:f,conditions:g,experience:y}=e,_=qs(),[w,p]=T.useState(!1),[h,v]=T.useState(!1),[x,E]=T.useState(!1),[C,S]=T.useState(!1),[O,$]=T.useState(!1),F=fn(dT),B=fn(vd),[Ye,te]=T.useState(!1);T.useEffect(()=>{F.find(R=>R.avatar_url===d)!==void 0&&te(!0)},[d,F]);const rt=()=>{te(!Ye),_(Ye?j8(e):M8(e))},Kt=()=>{document.querySelector("body").classList.remove("modal-open"),v(!1)},Yt={name:r,surname:i,avatar_url:d};return m.jsxs(c8,{children:[m.jsxs(d8,{color:t,children:[m.jsx(f8,{src:d,height:"100px",width:"100px"}),m.jsx(h8,{children:m.jsx("use",{href:ut+"#icon-Group-82"})})]}),m.jsxs(p8,{children:[m.jsxs(m8,{children:[m.jsxs(w8,{children:[m.jsx("p",{children:"Languages"}),m.jsxs(x8,{children:[r," ",i]})]}),m.jsxs("ul",{children:[m.jsxs("li",{children:[m.jsx(_8,{size:"16px"})," Lessons online"]}),m.jsxs("li",{children:["Lessons done: ",c]}),m.jsxs("li",{children:[m.jsx(Q_,{})," Rating: ",a]}),m.jsxs("li",{children:["Price / 1 hour: ",m.jsxs("span",{children:[u," $"]})]})]}),B&&m.jsx(q_,{type:"button",onClick:rt,children:Ye?m.jsx(v8,{color:t,size:26}):m.jsx(Y_,{size:26})}),!B&&m.jsx(q_,{type:"button",onClick:()=>v(!0),children:m.jsx(Y_,{size:26})})]}),m.jsxs(S8,{children:["Speaks: ",m.jsx("span",{children:s==null?void 0:s.join(", ")})]}),m.jsxs(X_,{children:["Lesson Info:",m.jsx("span",{children:f})]}),m.jsxs(X_,{children:["Conditions:",m.jsx("span",{children:g})]}),!w&&m.jsx(J_,{onClick:()=>p(!0),children:"Read more"}),w&&m.jsxs(m.Fragment,{children:[m.jsx(E8,{children:y}),m.jsx(C8,{children:l.map((ve,R)=>m.jsxs(T8,{children:[m.jsxs(b8,{children:[m.jsx(k8,{children:m.jsx(I8,{children:ve.reviewer_name.charAt(0).toUpperCase()})}),m.jsxs(P8,{children:[m.jsx(O8,{children:ve.reviewer_name}),m.jsxs("span",{children:[m.jsx(Q_,{}),ve.reviewer_rating,".0"]})]})]}),m.jsx(R8,{children:ve.comment})]},R))}),w&&m.jsx(J_,{onClick:()=>p(!1),children:"Read less"})]}),m.jsx(g8,{children:o.map((ve,R)=>m.jsx(y8,{className:ve===n?"selected":"",color:t,children:ve},R))}),w&&m.jsx(N8,{color:t,onClick:B?()=>E(!0):()=>v(!0),className:"orderBtn",children:"Book trial lesson"}),x&&m.jsx(ns,{onClose:E,top:"d",state:x,children:m.jsx(cz,{color:t,setIsBookModalOpened:E,teacherDataForBook:Yt})}),h&&m.jsx(ns,{onClose:v,state:h,children:m.jsxs(A8,{children:[m.jsx(D8,{onClick:Kt,children:m.jsx("use",{href:ut+"#icon-x"})}),m.jsx(L8,{children:"Attention"}),m.jsx(F8,{children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."}),m.jsx(Ep,{color:t,regis:S,log:$,ShowModal:v})]})}),C&&m.jsx(ns,{onClose:S,state:C,children:m.jsx(GC,{color:t,onClose:S})}),O&&m.jsx(ns,{onClose:$,state:O,children:m.jsx(KC,{color:t,onClose:$})})]})]})};let pc=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,n)=>(n&=63,n<36?t+=n.toString(36):n<62?t+=(n-26).toString(36).toUpperCase():n>62?t+="-":t+="_",t),"");const dz=L.div`
  position: relative;
  display: inline-block;
  border-radius: 14px;
  background-color: #fff;
`,fz=L.div`
  display: flex;
  align-items: center;
  gap: 0px 50px;
  padding: 14px 18px 14px 18px;
  cursor: pointer;
  border-radius: 14px;
`,hz=L.p`
  color: var(--secondary);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1;
  margin: 0px;
`,pz=L.ul`
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
`,mz=L.li`
  cursor: pointer;
  transition: color 300ms;
  color: rgba(18, 20, 23, 0.2);

  width: 100%;
  &:hover {
    color: var(--secondary);
  }
`,gz=L.svg`
  width: 20px;
  height: 20px;
  stroke-width: 0;
  stroke: currentColor;
  fill: transparent;
  transition: transform 300ms;
  transform: ${e=>e.$active&&"rotate(180deg)"};
`;function jf({arr:e,value:t,set:n,height:r,selectedOption:i}){const[s,o]=T.useState(!1),a=()=>{o(!s)},l=c=>{n(c),o(!1)},u=T.useRef(null);return T.useEffect(()=>{const c=d=>{u.current&&!u.current.contains(d.target)&&o(!1)};return document.addEventListener("click",c),()=>{document.removeEventListener("click",c)}},[u]),m.jsxs(dz,{children:[m.jsxs(fz,{onClick:a,ref:u,children:[m.jsx(hz,{children:i||t}),m.jsx(gz,{$active:s?!0:void 0,children:m.jsx("use",{href:ut+"#icon-chevron-down"})})]}),s&&m.jsx(pz,{$heigh:r||void 0,children:e.map((c,d)=>m.jsx(mz,{onClick:()=>l(c),children:c},d))})]})}const yz=L.ul`
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
`,vz=L.button`
  background-color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  border: none;
  border-radius: 12px;
  color: var(--secondary);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25;
  padding: 14px 39px;
  transition: background 300ms;
  &:hover {
    background-color: ${({color:e})=>e==="Blue"?"var(--hoverColorBlue)":e==="Green"?"var(--hoverColorGreen)":e==="Orange"?"var(--hoverColorYellow)":e==="Pink"?"var(--hoverColorPink)":e==="LightPink"?"var(--hoverColorCoral)":"var(--hoverCecondary-text-color)"};
  }
`;function kp({color:e,Level:t,setLevel:n,Teachers:r}){const i=qs(),[s,o]=T.useState(""),[a,l]=T.useState(""),u=fn(cT),c=["French","English","German","Ukrainian","Polish","Spanish","Italian"],d=["A1 Beginner","A2 Elementary","B1 Intermediate","B2 Upper-Intermediate","C1 Advanced","C2 Proficient"];let f=[10,15,20,25,30,35,40];T.useEffect(()=>{if(s+a+t==="")return;const y=r.filter(_=>{const w=s?_.languages.includes(s):!0,p=a?+_.price_per_hour<=a:!0,h=t?_.levels.includes(t):!0;return p&&w&&h});i(u===r?z8(y):B8(y))},[s,t,r,i,a]);const g=()=>{i(u===r?U8():V8()),o(""),l(""),n("")};return m.jsxs(yz,{children:[m.jsxs("li",{children:[m.jsx("span",{children:"Languages"}),m.jsx(jf,{arr:c,value:"Choose a language",set:o,selectedOption:s})]}),m.jsxs("li",{children:[m.jsx("span",{children:"Level of knowledge"}),m.jsx(jf,{arr:d,value:"Choose a level",set:n,selectedOption:t})]}),m.jsxs("li",{children:[m.jsx("span",{children:"Price"}),m.jsx(jf,{arr:f,value:"To $",set:l,height:!0,selectedOption:a})]}),m.jsx(vz,{color:e,onClick:g,children:"Reset filter"})]})}function _z({color:e}){const t=fn(cT),n=fn(H8),r=fn(K8),[i,s]=T.useState(""),[o,a]=T.useState(4),l=()=>{a(c=>c+4)},u=t==null?void 0:t.slice(0,o);return m.jsx(m.Fragment,{children:n?m.jsx(oT,{color:e}):m.jsxs(Ql,{children:[m.jsx(kp,{color:e,Level:i,setLevel:s,Teachers:t}),r?m.jsxs(cc,{children:[r&&(r==null?void 0:r.map(c=>m.jsx(hc,{color:e,teacher:c,Level:i},pc()))),r.length===0?m.jsx("div",{children:"Teacher not faund"}):void 0]}):m.jsxs(m.Fragment,{children:[m.jsx(cc,{children:u&&(u==null?void 0:u.map(c=>m.jsx(hc,{color:e,teacher:c},pc())))}),(t==null?void 0:t.length)>o&&m.jsx(X5,{color:e,onClick:l,children:"Load more"})]})]})})}const wz=({color:e})=>m.jsx(_z,{color:e});function xz({color:e}){const[t,n]=T.useState(""),r=fn(dT),i=fn(G8);return m.jsx(m.Fragment,{children:i?m.jsxs(Ql,{children:[m.jsx(kp,{color:e,Level:t,setLevel:n,Teachers:r}),m.jsxs(cc,{children:[i&&(i==null?void 0:i.map(s=>m.jsx(hc,{color:e,teacher:s,Level:t},pc()))),i.length===0?m.jsx("div",{children:"Teacher not faund"}):void 0]})]}):m.jsx(m.Fragment,{children:r.length===0?m.jsx(Ql,{children:m.jsx(J5,{children:"It appears that you haven't added any car to your favorites yet. To get started, you can add car that you like to your favorites for easier access in the future."})}):m.jsxs(Ql,{children:[m.jsx(kp,{color:e,Level:t,setLevel:n,Teachers:r}),m.jsx(cc,{children:r&&(r==null?void 0:r.map(s=>m.jsx(hc,{color:e,teacher:s},pc())))})]})})})}const Sz=({color:e})=>m.jsx(xz,{color:e}),Ez=P.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 500px;
`,Cz=P.h1`
  color: #ffffff;
`,Tz=()=>m.jsx(Ez,{children:m.jsx(Cz,{children:"404"})}),bz=P.div`
  width: 100%;
  height: 100vh;
  background-size: 100% 100%;
`;function kz({component:e,redirectTo:t}){return fn(vd)?e:m.jsx(Ew,{to:t})}function Iz(){const[e,t]=T.useState(null),n=qs(),r={Blue:"Blue",LightPink:"LightPink",Green:"Green",Orange:"Orange",Pink:"Pink"};return T.useEffect(()=>{n(Xl())},[n]),T.useEffect(()=>{t(Object.keys(r)[Math.floor(Math.random()*Object.keys(r).length)])},[]),m.jsx(bz,{children:m.jsx(Ub,{children:m.jsxs(Hr,{path:"/",element:m.jsx(M5,{color:e}),children:[m.jsx(Hr,{index:!0,element:m.jsx(Ew,{to:"Home"})}),m.jsx(Hr,{path:"/Home",element:m.jsx(Q5,{color:e})}),m.jsx(Hr,{path:"/Teachers",element:m.jsx(wz,{color:e})}),m.jsx(Hr,{path:"/Favorites",element:m.jsx(kz,{redirectTo:"/",component:m.jsx(Sz,{color:e})})}),m.jsx(Hr,{path:"*",element:m.jsx(Tz,{})})]})})})}const Pz={name:"",email:"",isAuth:!1,error:null,loading:!1},Oz=JS({name:"auth",initialState:Pz,extraReducers:e=>{e.addCase(Hl.pending,t=>{t.error=null,t.loading=!0}).addCase(Hl.fulfilled,(t,{payload:n})=>{const{email:r,userName:i}=n;t.name=i||"",t.email=r,t.error=null,t.loading=!1,t.isAuth=!0}).addCase(Hl.rejected,(t,{payload:n})=>{t.error=n,t.loading=!1,t.isAuth=!1}).addCase(Gl.pending,t=>{t.error=null,t.loading=!0}).addCase(Gl.fulfilled,(t,{payload:n})=>{const{email:r,name:i}=n;t.name=i,t.email=r,t.error=null,t.loading=!1,t.isAuth=!0}).addCase(Gl.rejected,(t,{payload:n})=>{t.error=n,t.loading=!1,t.isAuth=!1}).addCase(Mo.pending,t=>{t.error=null,t.loading=!0}).addCase(Mo.fulfilled,t=>{t.name="",t.email="",t.error=null,t.loading=!1,t.isAuth=!1}).addCase(Mo.rejected,(t,{payload:n})=>{t.error=n,t.loading=!1,t.isAuth=!1,t.name="",t.email=""})}}),Rz=Oz.reducer;var Qg="persist:",Xg="persist/FLUSH",Ed="persist/REHYDRATE",Jg="persist/PAUSE",Zg="persist/PERSIST",ey="persist/PURGE",ty="persist/REGISTER",Nz=-1;function Jl(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Jl=function(n){return typeof n}:Jl=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Jl(e)}function Z_(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Az(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Z_(n,!0).forEach(function(r){Dz(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z_(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Dz(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Lz(e,t,n,r){r.debug;var i=Az({},n);return e&&Jl(e)==="object"&&Object.keys(e).forEach(function(s){s!=="_persist"&&t[s]===n[s]&&(i[s]=e[s])}),i}function Fz(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,s="".concat(e.keyPrefix!==void 0?e.keyPrefix:Qg).concat(e.key),o=e.storage,a;e.serialize===!1?a=function(E){return E}:typeof e.serialize=="function"?a=e.serialize:a=$z;var l=e.writeFailHandler||null,u={},c={},d=[],f=null,g=null,y=function(E){Object.keys(E).forEach(function(C){p(C)&&u[C]!==E[C]&&d.indexOf(C)===-1&&d.push(C)}),Object.keys(u).forEach(function(C){E[C]===void 0&&p(C)&&d.indexOf(C)===-1&&u[C]!==void 0&&d.push(C)}),f===null&&(f=setInterval(_,i)),u=E};function _(){if(d.length===0){f&&clearInterval(f),f=null;return}var x=d.shift(),E=r.reduce(function(C,S){return S.in(C,x,u)},u[x]);if(E!==void 0)try{c[x]=a(E)}catch(C){console.error("redux-persist/createPersistoid: error serializing state",C)}else delete c[x];d.length===0&&w()}function w(){Object.keys(c).forEach(function(x){u[x]===void 0&&delete c[x]}),g=o.setItem(s,a(c)).catch(h)}function p(x){return!(n&&n.indexOf(x)===-1&&x!=="_persist"||t&&t.indexOf(x)!==-1)}function h(x){l&&l(x)}var v=function(){for(;d.length!==0;)_();return g||Promise.resolve()};return{update:y,flush:v}}function $z(e){return JSON.stringify(e)}function Mz(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:Qg).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(o){return o}:typeof e.deserialize=="function"?i=e.deserialize:i=jz,r.getItem(n).then(function(s){if(s)try{var o={},a=i(s);return Object.keys(a).forEach(function(l){o[l]=t.reduceRight(function(u,c){return c.out(u,l,a)},i(a[l]))}),o}catch(l){throw l}else return})}function jz(e){return JSON.parse(e)}function zz(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:Qg).concat(e.key);return t.removeItem(n,Uz)}function Uz(e){}function ew(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Pn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ew(n,!0).forEach(function(r){Bz(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ew(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Bz(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Vz(e,t){if(e==null)return{};var n=Wz(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Wz(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var Hz=5e3;function Gz(e,t){var n=e.version!==void 0?e.version:Nz;e.debug;var r=e.stateReconciler===void 0?Lz:e.stateReconciler,i=e.getStoredState||Mz,s=e.timeout!==void 0?e.timeout:Hz,o=null,a=!1,l=!0,u=function(d){return d._persist.rehydrated&&o&&!l&&o.update(d),d};return function(c,d){var f=c||{},g=f._persist,y=Vz(f,["_persist"]),_=y;if(d.type===Zg){var w=!1,p=function(O,$){w||(d.rehydrate(e.key,O,$),w=!0)};if(s&&setTimeout(function(){!w&&p(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},s),l=!1,o||(o=Fz(e)),g)return Pn({},t(_,d),{_persist:g});if(typeof d.rehydrate!="function"||typeof d.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return d.register(e.key),i(e).then(function(S){var O=e.migrate||function($,F){return Promise.resolve($)};O(S,n).then(function($){p($)},function($){p(void 0,$)})},function(S){p(void 0,S)}),Pn({},t(_,d),{_persist:{version:n,rehydrated:!1}})}else{if(d.type===ey)return a=!0,d.result(zz(e)),Pn({},t(_,d),{_persist:g});if(d.type===Xg)return d.result(o&&o.flush()),Pn({},t(_,d),{_persist:g});if(d.type===Jg)l=!0;else if(d.type===Ed){if(a)return Pn({},_,{_persist:Pn({},g,{rehydrated:!0})});if(d.key===e.key){var h=t(_,d),v=d.payload,x=r!==!1&&v!==void 0?r(v,c,h,e):h,E=Pn({},x,{_persist:Pn({},g,{rehydrated:!0})});return u(E)}}}if(!g)return t(c,d);var C=t(_,d);return C===_?c:u(Pn({},C,{_persist:g}))}}var ny={},ry={};ry.__esModule=!0;ry.default=qz;function Zl(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Zl=function(n){return typeof n}:Zl=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Zl(e)}function zf(){}var Kz={getItem:zf,setItem:zf,removeItem:zf};function Yz(e){if((typeof self>"u"?"undefined":Zl(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function qz(e){var t="".concat(e,"Storage");return Yz(t)?self[t]:Kz}ny.__esModule=!0;ny.default=Jz;var Qz=Xz(ry);function Xz(e){return e&&e.__esModule?e:{default:e}}function Jz(e){var t=(0,Qz.default)(e);return{getItem:function(r){return new Promise(function(i,s){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(s,o){s(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,s){i(t.removeItem(r))})}}}var fT=void 0,Zz=eU(ny);function eU(e){return e&&e.__esModule?e:{default:e}}var tU=(0,Zz.default)("local");fT=tU;function tw(e){return iU(e)||rU(e)||nU()}function nU(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function rU(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function iU(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function nw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ip(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?nw(n,!0).forEach(function(r){sU(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nw(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function sU(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var hT={registry:[],bootstrapped:!1},oU=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:hT,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case ty:return Ip({},t,{registry:[].concat(tw(t.registry),[n.key])});case Ed:var r=t.registry.indexOf(n.key),i=tw(t.registry);return i.splice(r,1),Ip({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function aU(e,t,n){var r=n||!1,i=rg(oU,hT,t&&t.enhancer?t.enhancer:void 0),s=function(u){i.dispatch({type:ty,key:u})},o=function(u,c,d){var f={type:Ed,payload:c,err:d,key:u};e.dispatch(f),i.dispatch(f),r&&a.getState().bootstrapped&&(r(),r=!1)},a=Ip({},i,{purge:function(){var u=[];return e.dispatch({type:ey,result:function(d){u.push(d)}}),Promise.all(u)},flush:function(){var u=[];return e.dispatch({type:Xg,result:function(d){u.push(d)}}),Promise.all(u)},pause:function(){e.dispatch({type:Jg})},persist:function(){e.dispatch({type:Zg,register:s,rehydrate:o})}});return t&&t.manualPersist||a.persist(),a}const lU=MS({teachers:W8,Auth:Rz}),uU={key:"teachers",storage:fT,whitelist:["teachers","Auth"]},cU=Gz(uU,lU),pT=$L({reducer:cU,middleware:e=>e({serializableCheck:{ignoredActions:[Xg,Ed,Jg,Zg,ey,ty]}})}),dU=aU(pT);function eu(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?eu=function(n){return typeof n}:eu=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},eu(e)}function fU(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function rw(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function hU(e,t,n){return t&&rw(e.prototype,t),n&&rw(e,n),e}function pU(e,t){return t&&(eu(t)==="object"||typeof t=="function")?t:tu(e)}function Pp(e){return Pp=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Pp(e)}function tu(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function mU(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Op(e,t)}function Op(e,t){return Op=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Op(e,t)}function nu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var mT=function(e){mU(t,e);function t(){var n,r;fU(this,t);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=pU(this,(n=Pp(t)).call.apply(n,[this].concat(s))),nu(tu(r),"state",{bootstrapped:!1}),nu(tu(r),"_unsubscribe",void 0),nu(tu(r),"handlePersistorState",function(){var a=r.props.persistor,l=a.getState(),u=l.bootstrapped;u&&(r.props.onBeforeLift?Promise.resolve(r.props.onBeforeLift()).finally(function(){return r.setState({bootstrapped:!0})}):r.setState({bootstrapped:!0}),r._unsubscribe&&r._unsubscribe())}),r}return hU(t,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),t}(T.PureComponent);nu(mT,"defaultProps",{children:null,loading:null});Wf.createRoot(document.getElementById("root")).render(m.jsx(at.StrictMode,{children:m.jsx(Kb,{basename:"/Learn-Lingo/",children:m.jsx(T6,{store:pT,children:m.jsx(mT,{persistor:dU,children:m.jsx(Iz,{})})})})}))});export default gU();
