var TT=Object.defineProperty;var bT=(e,t,n)=>t in e?TT(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var kT=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Cd=(e,t,n)=>(bT(e,typeof t!="symbol"?t+"":t,n),n);var fU=kT((bt,kt)=>{function IT(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Pp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var nw={exports:{}},dc={},rw={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ka=Symbol.for("react.element"),PT=Symbol.for("react.portal"),OT=Symbol.for("react.fragment"),RT=Symbol.for("react.strict_mode"),NT=Symbol.for("react.profiler"),AT=Symbol.for("react.provider"),DT=Symbol.for("react.context"),LT=Symbol.for("react.forward_ref"),$T=Symbol.for("react.suspense"),FT=Symbol.for("react.memo"),MT=Symbol.for("react.lazy"),iy=Symbol.iterator;function jT(e){return e===null||typeof e!="object"?null:(e=iy&&e[iy]||e["@@iterator"],typeof e=="function"?e:null)}var iw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sw=Object.assign,ow={};function Fs(e,t,n){this.props=e,this.context=t,this.refs=ow,this.updater=n||iw}Fs.prototype.isReactComponent={};Fs.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fs.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function aw(){}aw.prototype=Fs.prototype;function Op(e,t,n){this.props=e,this.context=t,this.refs=ow,this.updater=n||iw}var Rp=Op.prototype=new aw;Rp.constructor=Op;sw(Rp,Fs.prototype);Rp.isPureReactComponent=!0;var sy=Array.isArray,lw=Object.prototype.hasOwnProperty,Np={current:null},uw={key:!0,ref:!0,__self:!0,__source:!0};function cw(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)lw.call(t,r)&&!uw.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ka,type:e,key:s,ref:o,props:i,_owner:Np.current}}function zT(e,t){return{$$typeof:ka,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ap(e){return typeof e=="object"&&e!==null&&e.$$typeof===ka}function UT(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var oy=/\/+/g;function Td(e,t){return typeof e=="object"&&e!==null&&e.key!=null?UT(""+e.key):t.toString(36)}function bl(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ka:case PT:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Td(o,0):r,sy(i)?(n="",e!=null&&(n=e.replace(oy,"$&/")+"/"),bl(i,t,n,"",function(u){return u})):i!=null&&(Ap(i)&&(i=zT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(oy,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",sy(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+Td(s,a);o+=bl(s,t,n,l,i)}else if(l=jT(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+Td(s,a++),o+=bl(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Qa(e,t,n){if(e==null)return e;var r=[],i=0;return bl(e,r,"","",function(s){return t.call(n,s,i++)}),r}function BT(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ct={current:null},kl={transition:null},VT={ReactCurrentDispatcher:ct,ReactCurrentBatchConfig:kl,ReactCurrentOwner:Np};K.Children={map:Qa,forEach:function(e,t,n){Qa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Qa(e,function(){t++}),t},toArray:function(e){return Qa(e,function(t){return t})||[]},only:function(e){if(!Ap(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};K.Component=Fs;K.Fragment=OT;K.Profiler=NT;K.PureComponent=Op;K.StrictMode=RT;K.Suspense=$T;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=VT;K.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=sw({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Np.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)lw.call(t,l)&&!uw.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ka,type:e.type,key:i,ref:s,props:r,_owner:o}};K.createContext=function(e){return e={$$typeof:DT,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:AT,_context:e},e.Consumer=e};K.createElement=cw;K.createFactory=function(e){var t=cw.bind(null,e);return t.type=e,t};K.createRef=function(){return{current:null}};K.forwardRef=function(e){return{$$typeof:LT,render:e}};K.isValidElement=Ap;K.lazy=function(e){return{$$typeof:MT,_payload:{_status:-1,_result:e},_init:BT}};K.memo=function(e,t){return{$$typeof:FT,type:e,compare:t===void 0?null:t}};K.startTransition=function(e){var t=kl.transition;kl.transition={};try{e()}finally{kl.transition=t}};K.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};K.useCallback=function(e,t){return ct.current.useCallback(e,t)};K.useContext=function(e){return ct.current.useContext(e)};K.useDebugValue=function(){};K.useDeferredValue=function(e){return ct.current.useDeferredValue(e)};K.useEffect=function(e,t){return ct.current.useEffect(e,t)};K.useId=function(){return ct.current.useId()};K.useImperativeHandle=function(e,t,n){return ct.current.useImperativeHandle(e,t,n)};K.useInsertionEffect=function(e,t){return ct.current.useInsertionEffect(e,t)};K.useLayoutEffect=function(e,t){return ct.current.useLayoutEffect(e,t)};K.useMemo=function(e,t){return ct.current.useMemo(e,t)};K.useReducer=function(e,t,n){return ct.current.useReducer(e,t,n)};K.useRef=function(e){return ct.current.useRef(e)};K.useState=function(e){return ct.current.useState(e)};K.useSyncExternalStore=function(e,t,n){return ct.current.useSyncExternalStore(e,t,n)};K.useTransition=function(){return ct.current.useTransition()};K.version="18.2.0";rw.exports=K;var T=rw.exports;const at=Pp(T),jo=IT({__proto__:null,default:at},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WT=T,HT=Symbol.for("react.element"),GT=Symbol.for("react.fragment"),KT=Object.prototype.hasOwnProperty,YT=WT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qT={key:!0,ref:!0,__self:!0,__source:!0};function dw(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)KT.call(t,r)&&!qT.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:HT,type:e,key:s,ref:o,props:i,_owner:YT.current}}dc.Fragment=GT;dc.jsx=dw;dc.jsxs=dw;nw.exports=dc;var m=nw.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zo(){return zo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zo.apply(this,arguments)}var lr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(lr||(lr={}));const ay="popstate";function QT(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return Ff("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:nu(i)}return JT(t,n,null,e)}function Te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Dp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function XT(){return Math.random().toString(36).substr(2,8)}function ly(e,t){return{usr:e.state,key:e.key,idx:t}}function Ff(e,t,n,r){return n===void 0&&(n=null),zo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ms(t):t,{state:n,key:t&&t.key||r||XT()})}function nu(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ms(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function JT(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=lr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(zo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=lr.Pop;let w=c(),p=w==null?null:w-u;u=w,l&&l({action:a,location:_.location,delta:p})}function f(w,p){a=lr.Push;let h=Ff(_.location,w,p);n&&n(h,w),u=c()+1;let v=ly(h,u),x=_.createHref(h);try{o.pushState(v,"",x)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(x)}s&&l&&l({action:a,location:_.location,delta:1})}function g(w,p){a=lr.Replace;let h=Ff(_.location,w,p);n&&n(h,w),u=c();let v=ly(h,u),x=_.createHref(h);o.replaceState(v,"",x),s&&l&&l({action:a,location:_.location,delta:0})}function y(w){let p=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof w=="string"?w:nu(w);return Te(p,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,p)}let _={get action(){return a},get location(){return e(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(ay,d),l=w,()=>{i.removeEventListener(ay,d),l=null}},createHref(w){return t(i,w)},createURL:y,encodeLocation(w){let p=y(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:g,go(w){return o.go(w)}};return _}var uy;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(uy||(uy={}));function ZT(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Ms(t):t,i=Lp(r.pathname||"/",n);if(i==null)return null;let s=fw(e);eb(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=ub(s[a],fb(i));return o}function fw(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Te(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=dr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Te(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),fw(s.children,t,c,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:ab(u,s.index),routesMeta:c})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of hw(s.path))i(s,o,l)}),t}function hw(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=hw(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function eb(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:lb(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const tb=/^:\w+$/,nb=3,rb=2,ib=1,sb=10,ob=-2,cy=e=>e==="*";function ab(e,t){let n=e.split("/"),r=n.length;return n.some(cy)&&(r+=ob),t&&(r+=rb),n.filter(i=>!cy(i)).reduce((i,s)=>i+(tb.test(s)?nb:s===""?ib:sb),r)}function lb(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function ub(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=cb({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:dr([i,c.pathname]),pathnameBase:gb(dr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=dr([i,c.pathnameBase]))}return s}function cb(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=db(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=hb(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:e}}function db(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Dp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function fb(e){try{return decodeURI(e)}catch(t){return Dp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function hb(e,t){try{return decodeURIComponent(e)}catch(n){return Dp(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Lp(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function pb(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ms(e):e;return{pathname:n?n.startsWith("/")?n:mb(n,t):t,search:yb(r),hash:vb(i)}}function mb(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function bd(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function $p(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Fp(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ms(e):(i=zo({},e),Te(!i.pathname||!i.pathname.includes("?"),bd("?","pathname","search",i)),Te(!i.pathname||!i.pathname.includes("#"),bd("#","pathname","hash",i)),Te(!i.search||!i.search.includes("#"),bd("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=t.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?t[d]:"/"}let l=pb(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const dr=e=>e.join("/").replace(/\/\/+/g,"/"),gb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),yb=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,vb=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function _b(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const pw=["post","put","patch","delete"];new Set(pw);const wb=["get",...pw];new Set(wb);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ru(){return ru=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ru.apply(this,arguments)}const Mp=T.createContext(null),xb=T.createContext(null),js=T.createContext(null),fc=T.createContext(null),Kn=T.createContext({outlet:null,matches:[],isDataRoute:!1}),mw=T.createContext(null);function Sb(e,t){let{relative:n}=t===void 0?{}:t;zs()||Te(!1);let{basename:r,navigator:i}=T.useContext(js),{hash:s,pathname:o,search:a}=vw(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:dr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function zs(){return T.useContext(fc)!=null}function Ia(){return zs()||Te(!1),T.useContext(fc).location}function gw(e){T.useContext(js).static||T.useLayoutEffect(e)}function yw(){let{isDataRoute:e}=T.useContext(Kn);return e?Fb():Eb()}function Eb(){zs()||Te(!1);let e=T.useContext(Mp),{basename:t,navigator:n}=T.useContext(js),{matches:r}=T.useContext(Kn),{pathname:i}=Ia(),s=JSON.stringify($p(r).map(l=>l.pathnameBase)),o=T.useRef(!1);return gw(()=>{o.current=!0}),T.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Fp(l,JSON.parse(s),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:dr([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,s,i,e])}const Cb=T.createContext(null);function Tb(e){let t=T.useContext(Kn).outlet;return t&&T.createElement(Cb.Provider,{value:e},t)}function vw(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=T.useContext(Kn),{pathname:i}=Ia(),s=JSON.stringify($p(r).map(o=>o.pathnameBase));return T.useMemo(()=>Fp(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function bb(e,t){return kb(e,t)}function kb(e,t,n){zs()||Te(!1);let{navigator:r}=T.useContext(js),{matches:i}=T.useContext(Kn),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Ia(),u;if(t){var c;let _=typeof t=="string"?Ms(t):t;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||Te(!1),u=_}else u=l;let d=u.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",g=ZT(e,{pathname:f}),y=Nb(g&&g.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:dr([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:dr([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return t&&y?T.createElement(fc.Provider,{value:{location:ru({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:lr.Pop}},y):y}function Ib(){let e=$b(),t=_b(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:i},n):null,s)}const Pb=T.createElement(Ib,null);class Ob extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?T.createElement(Kn.Provider,{value:this.props.routeContext},T.createElement(mw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Rb(e){let{routeContext:t,match:n,children:r}=e,i=T.useContext(Mp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(Kn.Provider,{value:t},r)}function Nb(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let s=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Te(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||Pb);let f=t.concat(s.slice(0,u+1)),g=()=>{let y;return c?y=d:l.route.Component?y=T.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,T.createElement(Rb,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?T.createElement(Ob,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:g(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):g()},null)}var _w=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(_w||{}),iu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(iu||{});function Ab(e){let t=T.useContext(Mp);return t||Te(!1),t}function Db(e){let t=T.useContext(xb);return t||Te(!1),t}function Lb(e){let t=T.useContext(Kn);return t||Te(!1),t}function ww(e){let t=Lb(),n=t.matches[t.matches.length-1];return n.route.id||Te(!1),n.route.id}function $b(){var e;let t=T.useContext(mw),n=Db(iu.UseRouteError),r=ww(iu.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Fb(){let{router:e}=Ab(_w.UseNavigateStable),t=ww(iu.UseNavigateStable),n=T.useRef(!1);return gw(()=>{n.current=!0}),T.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ru({fromRouteId:t},s)))},[e,t])}function xw(e){let{to:t,replace:n,state:r,relative:i}=e;zs()||Te(!1);let{matches:s}=T.useContext(Kn),{pathname:o}=Ia(),a=yw(),l=Fp(t,$p(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return T.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function Mb(e){return Tb(e.context)}function Hr(e){Te(!1)}function jb(e){let{basename:t="/",children:n=null,location:r,navigationType:i=lr.Pop,navigator:s,static:o=!1}=e;zs()&&Te(!1);let a=t.replace(/^\/*/,"/"),l=T.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Ms(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:g="default"}=r,y=T.useMemo(()=>{let _=Lp(u,a);return _==null?null:{location:{pathname:_,search:c,hash:d,state:f,key:g},navigationType:i}},[a,u,c,d,f,g,i]);return y==null?null:T.createElement(js.Provider,{value:l},T.createElement(fc.Provider,{children:n,value:y}))}function zb(e){let{children:t,location:n}=e;return bb(Mf(t),n)}new Promise(()=>{});function Mf(e,t){t===void 0&&(t=[]);let n=[];return T.Children.forEach(e,(r,i)=>{if(!T.isValidElement(r))return;let s=[...t,i];if(r.type===T.Fragment){n.push.apply(n,Mf(r.props.children,s));return}r.type!==Hr&&Te(!1),!r.props.index||!r.props.children||Te(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Mf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jf(){return jf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jf.apply(this,arguments)}function Ub(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Bb(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Vb(e,t){return e.button===0&&(!t||t==="_self")&&!Bb(e)}const Wb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Hb="startTransition",dy=jo[Hb];function Gb(e){let{basename:t,children:n,future:r,window:i}=e,s=T.useRef();s.current==null&&(s.current=QT({window:i,v5Compat:!0}));let o=s.current,[a,l]=T.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=T.useCallback(d=>{u&&dy?dy(()=>l(d)):l(d)},[l,u]);return T.useLayoutEffect(()=>o.listen(c),[o,c]),T.createElement(jb,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o})}const Kb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Yb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pa=T.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=t,d=Ub(t,Wb),{basename:f}=T.useContext(js),g,y=!1;if(typeof u=="string"&&Yb.test(u)&&(g=u,Kb))try{let h=new URL(window.location.href),v=u.startsWith("//")?new URL(h.protocol+u):new URL(u),x=Lp(v.pathname,f);v.origin===h.origin&&x!=null?u=x+v.search+v.hash:y=!0}catch{}let _=Sb(u,{relative:i}),w=qb(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function p(h){r&&r(h),h.defaultPrevented||w(h)}return T.createElement("a",jf({},d,{href:g||_,onClick:y||s?r:p,ref:n,target:l}))});var fy;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(fy||(fy={}));var hy;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(hy||(hy={}));function qb(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=t===void 0?{}:t,a=yw(),l=Ia(),u=vw(e,{relative:o});return T.useCallback(c=>{if(Vb(c,n)){c.preventDefault();let d=r!==void 0?r:nu(l)===nu(u);a(e,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,e,s,o])}var zf={},Sw={exports:{}},Dt={},Ew={exports:{}},Cw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,j){var z=R.length;R.push(j);e:for(;0<z;){var ne=z-1>>>1,re=R[ne];if(0<i(re,j))R[ne]=j,R[z]=re,z=ne;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var j=R[0],z=R.pop();if(z!==j){R[0]=z;e:for(var ne=0,re=R.length,Ft=re>>>1;ne<Ft;){var Ue=2*(ne+1)-1,it=R[Ue],qe=Ue+1,Qe=R[qe];if(0>i(it,z))qe<re&&0>i(Qe,it)?(R[ne]=Qe,R[qe]=z,ne=qe):(R[ne]=it,R[Ue]=z,ne=Ue);else if(qe<re&&0>i(Qe,z))R[ne]=Qe,R[qe]=z,ne=qe;else break e}}return j}function i(R,j){var z=R.sortIndex-j.sortIndex;return z!==0?z:R.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,g=!1,y=!1,_=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(R){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=R)r(u),j.sortIndex=j.expirationTime,t(l,j);else break;j=n(u)}}function x(R){if(_=!1,v(R),!y)if(n(l)!==null)y=!0,Yt(E);else{var j=n(u);j!==null&&ve(x,j.startTime-R)}}function E(R,j){y=!1,_&&(_=!1,p(P),P=-1),g=!0;var z=f;try{for(v(j),d=n(l);d!==null&&(!(d.expirationTime>j)||R&&!B());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,f=d.priorityLevel;var re=ne(d.expirationTime<=j);j=e.unstable_now(),typeof re=="function"?d.callback=re:d===n(l)&&r(l),v(j)}else r(l);d=n(l)}if(d!==null)var Ft=!0;else{var Ue=n(u);Ue!==null&&ve(x,Ue.startTime-j),Ft=!1}return Ft}finally{d=null,f=z,g=!1}}var C=!1,S=null,P=-1,F=5,$=-1;function B(){return!(e.unstable_now()-$<F)}function Ye(){if(S!==null){var R=e.unstable_now();$=R;var j=!0;try{j=S(!0,R)}finally{j?te():(C=!1,S=null)}}else C=!1}var te;if(typeof h=="function")te=function(){h(Ye)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,Kt=rt.port2;rt.port1.onmessage=Ye,te=function(){Kt.postMessage(null)}}else te=function(){w(Ye,0)};function Yt(R){S=R,C||(C=!0,te())}function ve(R,j){P=w(function(){R(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,Yt(E))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(R){switch(f){case 1:case 2:case 3:var j=3;break;default:j=f}var z=f;f=j;try{return R()}finally{f=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,j){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var z=f;f=R;try{return j()}finally{f=z}},e.unstable_scheduleCallback=function(R,j,z){var ne=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?ne+z:ne):z=ne,R){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=z+re,R={id:c++,callback:j,priorityLevel:R,startTime:z,expirationTime:re,sortIndex:-1},z>ne?(R.sortIndex=z,t(u,R),n(l)===null&&R===n(u)&&(_?(p(P),P=-1):_=!0,ve(x,z-ne))):(R.sortIndex=re,t(l,R),y||g||(y=!0,Yt(E))),R},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(R){var j=f;return function(){var z=f;f=j;try{return R.apply(this,arguments)}finally{f=z}}}})(Cw);Ew.exports=Cw;var Qb=Ew.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tw=T,Rt=Qb;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bw=new Set,Uo={};function Ii(e,t){ys(e,t),ys(e+"Capture",t)}function ys(e,t){for(Uo[e]=t,e=0;e<t.length;e++)bw.add(t[e])}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uf=Object.prototype.hasOwnProperty,Xb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,py={},my={};function Jb(e){return Uf.call(my,e)?!0:Uf.call(py,e)?!1:Xb.test(e)?my[e]=!0:(py[e]=!0,!1)}function Zb(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ek(e,t,n,r){if(t===null||typeof t>"u"||Zb(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function dt(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ke[e]=new dt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ke[t]=new dt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ke[e]=new dt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ke[e]=new dt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ke[e]=new dt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ke[e]=new dt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ke[e]=new dt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ke[e]=new dt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ke[e]=new dt(e,5,!1,e.toLowerCase(),null,!1,!1)});var jp=/[\-:]([a-z])/g;function zp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(jp,zp);Ke[t]=new dt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(jp,zp);Ke[t]=new dt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(jp,zp);Ke[t]=new dt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ke[e]=new dt(e,1,!1,e.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ke[e]=new dt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Up(e,t,n,r){var i=Ke.hasOwnProperty(t)?Ke[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ek(t,n,i,r)&&(n=null),r||i===null?Jb(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Yn=Tw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xa=Symbol.for("react.element"),Vi=Symbol.for("react.portal"),Wi=Symbol.for("react.fragment"),Bp=Symbol.for("react.strict_mode"),Bf=Symbol.for("react.profiler"),kw=Symbol.for("react.provider"),Iw=Symbol.for("react.context"),Vp=Symbol.for("react.forward_ref"),Vf=Symbol.for("react.suspense"),Wf=Symbol.for("react.suspense_list"),Wp=Symbol.for("react.memo"),tr=Symbol.for("react.lazy"),Pw=Symbol.for("react.offscreen"),gy=Symbol.iterator;function Xs(e){return e===null||typeof e!="object"?null:(e=gy&&e[gy]||e["@@iterator"],typeof e=="function"?e:null)}var xe=Object.assign,kd;function po(e){if(kd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);kd=t&&t[1]||""}return`
`+kd+e}var Id=!1;function Pd(e,t){if(!e||Id)return"";Id=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{Id=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?po(e):""}function tk(e){switch(e.tag){case 5:return po(e.type);case 16:return po("Lazy");case 13:return po("Suspense");case 19:return po("SuspenseList");case 0:case 2:case 15:return e=Pd(e.type,!1),e;case 11:return e=Pd(e.type.render,!1),e;case 1:return e=Pd(e.type,!0),e;default:return""}}function Hf(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wi:return"Fragment";case Vi:return"Portal";case Bf:return"Profiler";case Bp:return"StrictMode";case Vf:return"Suspense";case Wf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Iw:return(e.displayName||"Context")+".Consumer";case kw:return(e._context.displayName||"Context")+".Provider";case Vp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Wp:return t=e.displayName||null,t!==null?t:Hf(e.type)||"Memo";case tr:t=e._payload,e=e._init;try{return Hf(e(t))}catch{}}return null}function nk(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hf(t);case 8:return t===Bp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function kr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ow(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function rk(e){var t=Ow(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ja(e){e._valueTracker||(e._valueTracker=rk(e))}function Rw(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ow(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function su(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Gf(e,t){var n=t.checked;return xe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function yy(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=kr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Nw(e,t){t=t.checked,t!=null&&Up(e,"checked",t,!1)}function Kf(e,t){Nw(e,t);var n=kr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Yf(e,t.type,n):t.hasOwnProperty("defaultValue")&&Yf(e,t.type,kr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function vy(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Yf(e,t,n){(t!=="number"||su(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var mo=Array.isArray;function os(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+kr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function qf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return xe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function _y(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(mo(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:kr(n)}}function Aw(e,t){var n=kr(t.value),r=kr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function wy(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Dw(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Dw(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Za,Lw=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Za=Za||document.createElement("div"),Za.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Za.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Bo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var So={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ik=["Webkit","ms","Moz","O"];Object.keys(So).forEach(function(e){ik.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),So[t]=So[e]})});function $w(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||So.hasOwnProperty(e)&&So[e]?(""+t).trim():t+"px"}function Fw(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=$w(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var sk=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xf(e,t){if(t){if(sk[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Jf(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zf=null;function Hp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var eh=null,as=null,ls=null;function xy(e){if(e=Na(e)){if(typeof eh!="function")throw Error(k(280));var t=e.stateNode;t&&(t=yc(t),eh(e.stateNode,e.type,t))}}function Mw(e){as?ls?ls.push(e):ls=[e]:as=e}function jw(){if(as){var e=as,t=ls;if(ls=as=null,xy(e),t)for(e=0;e<t.length;e++)xy(t[e])}}function zw(e,t){return e(t)}function Uw(){}var Od=!1;function Bw(e,t,n){if(Od)return e(t,n);Od=!0;try{return zw(e,t,n)}finally{Od=!1,(as!==null||ls!==null)&&(Uw(),jw())}}function Vo(e,t){var n=e.stateNode;if(n===null)return null;var r=yc(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var th=!1;if(Un)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){th=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{th=!1}function ok(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Eo=!1,ou=null,au=!1,nh=null,ak={onError:function(e){Eo=!0,ou=e}};function lk(e,t,n,r,i,s,o,a,l){Eo=!1,ou=null,ok.apply(ak,arguments)}function uk(e,t,n,r,i,s,o,a,l){if(lk.apply(this,arguments),Eo){if(Eo){var u=ou;Eo=!1,ou=null}else throw Error(k(198));au||(au=!0,nh=u)}}function Pi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Vw(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Sy(e){if(Pi(e)!==e)throw Error(k(188))}function ck(e){var t=e.alternate;if(!t){if(t=Pi(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Sy(i),e;if(s===r)return Sy(i),t;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Ww(e){return e=ck(e),e!==null?Hw(e):null}function Hw(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Hw(e);if(t!==null)return t;e=e.sibling}return null}var Gw=Rt.unstable_scheduleCallback,Ey=Rt.unstable_cancelCallback,dk=Rt.unstable_shouldYield,fk=Rt.unstable_requestPaint,Ce=Rt.unstable_now,hk=Rt.unstable_getCurrentPriorityLevel,Gp=Rt.unstable_ImmediatePriority,Kw=Rt.unstable_UserBlockingPriority,lu=Rt.unstable_NormalPriority,pk=Rt.unstable_LowPriority,Yw=Rt.unstable_IdlePriority,hc=null,wn=null;function mk(e){if(wn&&typeof wn.onCommitFiberRoot=="function")try{wn.onCommitFiberRoot(hc,e,void 0,(e.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:vk,gk=Math.log,yk=Math.LN2;function vk(e){return e>>>=0,e===0?32:31-(gk(e)/yk|0)|0}var el=64,tl=4194304;function go(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function uu(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=go(a):(s&=o,s!==0&&(r=go(s)))}else o=n&~i,o!==0?r=go(o):s!==0&&(r=go(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-an(t),i=1<<n,r|=e[n],t&=~i;return r}function _k(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wk(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-an(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=_k(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function rh(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function qw(){var e=el;return el<<=1,!(el&4194240)&&(el=64),e}function Rd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Oa(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-an(t),e[t]=n}function xk(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-an(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Kp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-an(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var se=0;function Qw(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Xw,Yp,Jw,Zw,e1,ih=!1,nl=[],fr=null,hr=null,pr=null,Wo=new Map,Ho=new Map,rr=[],Sk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cy(e,t){switch(e){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":Wo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(t.pointerId)}}function Zs(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Na(t),t!==null&&Yp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ek(e,t,n,r,i){switch(t){case"focusin":return fr=Zs(fr,e,t,n,r,i),!0;case"dragenter":return hr=Zs(hr,e,t,n,r,i),!0;case"mouseover":return pr=Zs(pr,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Wo.set(s,Zs(Wo.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ho.set(s,Zs(Ho.get(s)||null,e,t,n,r,i)),!0}return!1}function t1(e){var t=Zr(e.target);if(t!==null){var n=Pi(t);if(n!==null){if(t=n.tag,t===13){if(t=Vw(n),t!==null){e.blockedOn=t,e1(e.priority,function(){Jw(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Il(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=sh(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Zf=r,n.target.dispatchEvent(r),Zf=null}else return t=Na(n),t!==null&&Yp(t),e.blockedOn=n,!1;t.shift()}return!0}function Ty(e,t,n){Il(e)&&n.delete(t)}function Ck(){ih=!1,fr!==null&&Il(fr)&&(fr=null),hr!==null&&Il(hr)&&(hr=null),pr!==null&&Il(pr)&&(pr=null),Wo.forEach(Ty),Ho.forEach(Ty)}function eo(e,t){e.blockedOn===t&&(e.blockedOn=null,ih||(ih=!0,Rt.unstable_scheduleCallback(Rt.unstable_NormalPriority,Ck)))}function Go(e){function t(i){return eo(i,e)}if(0<nl.length){eo(nl[0],e);for(var n=1;n<nl.length;n++){var r=nl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(fr!==null&&eo(fr,e),hr!==null&&eo(hr,e),pr!==null&&eo(pr,e),Wo.forEach(t),Ho.forEach(t),n=0;n<rr.length;n++)r=rr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rr.length&&(n=rr[0],n.blockedOn===null);)t1(n),n.blockedOn===null&&rr.shift()}var us=Yn.ReactCurrentBatchConfig,cu=!0;function Tk(e,t,n,r){var i=se,s=us.transition;us.transition=null;try{se=1,qp(e,t,n,r)}finally{se=i,us.transition=s}}function bk(e,t,n,r){var i=se,s=us.transition;us.transition=null;try{se=4,qp(e,t,n,r)}finally{se=i,us.transition=s}}function qp(e,t,n,r){if(cu){var i=sh(e,t,n,r);if(i===null)Ud(e,t,r,du,n),Cy(e,r);else if(Ek(i,e,t,n,r))r.stopPropagation();else if(Cy(e,r),t&4&&-1<Sk.indexOf(e)){for(;i!==null;){var s=Na(i);if(s!==null&&Xw(s),s=sh(e,t,n,r),s===null&&Ud(e,t,r,du,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ud(e,t,r,null,n)}}var du=null;function sh(e,t,n,r){if(du=null,e=Hp(r),e=Zr(e),e!==null)if(t=Pi(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Vw(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return du=e,null}function n1(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hk()){case Gp:return 1;case Kw:return 4;case lu:case pk:return 16;case Yw:return 536870912;default:return 16}default:return 16}}var ur=null,Qp=null,Pl=null;function r1(){if(Pl)return Pl;var e,t=Qp,n=t.length,r,i="value"in ur?ur.value:ur.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Pl=i.slice(e,1<r?1-r:void 0)}function Ol(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function rl(){return!0}function by(){return!1}function Lt(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?rl:by,this.isPropagationStopped=by,this}return xe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),t}var Us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xp=Lt(Us),Ra=xe({},Us,{view:0,detail:0}),kk=Lt(Ra),Nd,Ad,to,pc=xe({},Ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==to&&(to&&e.type==="mousemove"?(Nd=e.screenX-to.screenX,Ad=e.screenY-to.screenY):Ad=Nd=0,to=e),Nd)},movementY:function(e){return"movementY"in e?e.movementY:Ad}}),ky=Lt(pc),Ik=xe({},pc,{dataTransfer:0}),Pk=Lt(Ik),Ok=xe({},Ra,{relatedTarget:0}),Dd=Lt(Ok),Rk=xe({},Us,{animationName:0,elapsedTime:0,pseudoElement:0}),Nk=Lt(Rk),Ak=xe({},Us,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dk=Lt(Ak),Lk=xe({},Us,{data:0}),Iy=Lt(Lk),$k={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jk(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mk[e])?!!t[e]:!1}function Jp(){return jk}var zk=xe({},Ra,{key:function(e){if(e.key){var t=$k[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ol(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fk[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jp,charCode:function(e){return e.type==="keypress"?Ol(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ol(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Uk=Lt(zk),Bk=xe({},pc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Py=Lt(Bk),Vk=xe({},Ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jp}),Wk=Lt(Vk),Hk=xe({},Us,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gk=Lt(Hk),Kk=xe({},pc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yk=Lt(Kk),qk=[9,13,27,32],Zp=Un&&"CompositionEvent"in window,Co=null;Un&&"documentMode"in document&&(Co=document.documentMode);var Qk=Un&&"TextEvent"in window&&!Co,i1=Un&&(!Zp||Co&&8<Co&&11>=Co),Oy=String.fromCharCode(32),Ry=!1;function s1(e,t){switch(e){case"keyup":return qk.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function o1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hi=!1;function Xk(e,t){switch(e){case"compositionend":return o1(t);case"keypress":return t.which!==32?null:(Ry=!0,Oy);case"textInput":return e=t.data,e===Oy&&Ry?null:e;default:return null}}function Jk(e,t){if(Hi)return e==="compositionend"||!Zp&&s1(e,t)?(e=r1(),Pl=Qp=ur=null,Hi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return i1&&t.locale!=="ko"?null:t.data;default:return null}}var Zk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ny(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Zk[e.type]:t==="textarea"}function a1(e,t,n,r){Mw(r),t=fu(t,"onChange"),0<t.length&&(n=new Xp("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var To=null,Ko=null;function eI(e){v1(e,0)}function mc(e){var t=Yi(e);if(Rw(t))return e}function tI(e,t){if(e==="change")return t}var l1=!1;if(Un){var Ld;if(Un){var $d="oninput"in document;if(!$d){var Ay=document.createElement("div");Ay.setAttribute("oninput","return;"),$d=typeof Ay.oninput=="function"}Ld=$d}else Ld=!1;l1=Ld&&(!document.documentMode||9<document.documentMode)}function Dy(){To&&(To.detachEvent("onpropertychange",u1),Ko=To=null)}function u1(e){if(e.propertyName==="value"&&mc(Ko)){var t=[];a1(t,Ko,e,Hp(e)),Bw(eI,t)}}function nI(e,t,n){e==="focusin"?(Dy(),To=t,Ko=n,To.attachEvent("onpropertychange",u1)):e==="focusout"&&Dy()}function rI(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mc(Ko)}function iI(e,t){if(e==="click")return mc(t)}function sI(e,t){if(e==="input"||e==="change")return mc(t)}function oI(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var fn=typeof Object.is=="function"?Object.is:oI;function Yo(e,t){if(fn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Uf.call(t,i)||!fn(e[i],t[i]))return!1}return!0}function Ly(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $y(e,t){var n=Ly(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ly(n)}}function c1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?c1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function d1(){for(var e=window,t=su();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=su(e.document)}return t}function em(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function aI(e){var t=d1(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&c1(n.ownerDocument.documentElement,n)){if(r!==null&&em(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=$y(n,s);var o=$y(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var lI=Un&&"documentMode"in document&&11>=document.documentMode,Gi=null,oh=null,bo=null,ah=!1;function Fy(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ah||Gi==null||Gi!==su(r)||(r=Gi,"selectionStart"in r&&em(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bo&&Yo(bo,r)||(bo=r,r=fu(oh,"onSelect"),0<r.length&&(t=new Xp("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Gi)))}function il(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ki={animationend:il("Animation","AnimationEnd"),animationiteration:il("Animation","AnimationIteration"),animationstart:il("Animation","AnimationStart"),transitionend:il("Transition","TransitionEnd")},Fd={},f1={};Un&&(f1=document.createElement("div").style,"AnimationEvent"in window||(delete Ki.animationend.animation,delete Ki.animationiteration.animation,delete Ki.animationstart.animation),"TransitionEvent"in window||delete Ki.transitionend.transition);function gc(e){if(Fd[e])return Fd[e];if(!Ki[e])return e;var t=Ki[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in f1)return Fd[e]=t[n];return e}var h1=gc("animationend"),p1=gc("animationiteration"),m1=gc("animationstart"),g1=gc("transitionend"),y1=new Map,My="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(e,t){y1.set(e,t),Ii(t,[e])}for(var Md=0;Md<My.length;Md++){var jd=My[Md],uI=jd.toLowerCase(),cI=jd[0].toUpperCase()+jd.slice(1);Lr(uI,"on"+cI)}Lr(h1,"onAnimationEnd");Lr(p1,"onAnimationIteration");Lr(m1,"onAnimationStart");Lr("dblclick","onDoubleClick");Lr("focusin","onFocus");Lr("focusout","onBlur");Lr(g1,"onTransitionEnd");ys("onMouseEnter",["mouseout","mouseover"]);ys("onMouseLeave",["mouseout","mouseover"]);ys("onPointerEnter",["pointerout","pointerover"]);ys("onPointerLeave",["pointerout","pointerover"]);Ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ii("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dI=new Set("cancel close invalid load scroll toggle".split(" ").concat(yo));function jy(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,uk(r,t,void 0,e),e.currentTarget=null}function v1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;jy(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;jy(i,a,u),s=l}}}if(au)throw e=nh,au=!1,nh=null,e}function fe(e,t){var n=t[fh];n===void 0&&(n=t[fh]=new Set);var r=e+"__bubble";n.has(r)||(_1(t,e,2,!1),n.add(r))}function zd(e,t,n){var r=0;t&&(r|=4),_1(n,e,r,t)}var sl="_reactListening"+Math.random().toString(36).slice(2);function qo(e){if(!e[sl]){e[sl]=!0,bw.forEach(function(n){n!=="selectionchange"&&(dI.has(n)||zd(n,!1,e),zd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[sl]||(t[sl]=!0,zd("selectionchange",!1,t))}}function _1(e,t,n,r){switch(n1(t)){case 1:var i=Tk;break;case 4:i=bk;break;default:i=qp}n=i.bind(null,t,n,e),i=void 0,!th||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ud(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Zr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Bw(function(){var u=s,c=Hp(n),d=[];e:{var f=y1.get(e);if(f!==void 0){var g=Xp,y=e;switch(e){case"keypress":if(Ol(n)===0)break e;case"keydown":case"keyup":g=Uk;break;case"focusin":y="focus",g=Dd;break;case"focusout":y="blur",g=Dd;break;case"beforeblur":case"afterblur":g=Dd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=ky;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Pk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Wk;break;case h1:case p1:case m1:g=Nk;break;case g1:g=Gk;break;case"scroll":g=kk;break;case"wheel":g=Yk;break;case"copy":case"cut":case"paste":g=Dk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Py}var _=(t&4)!==0,w=!_&&e==="scroll",p=_?f!==null?f+"Capture":null:f;_=[];for(var h=u,v;h!==null;){v=h;var x=v.stateNode;if(v.tag===5&&x!==null&&(v=x,p!==null&&(x=Vo(h,p),x!=null&&_.push(Qo(h,x,v)))),w)break;h=h.return}0<_.length&&(f=new g(f,y,null,n,c),d.push({event:f,listeners:_}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",f&&n!==Zf&&(y=n.relatedTarget||n.fromElement)&&(Zr(y)||y[Bn]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Zr(y):null,y!==null&&(w=Pi(y),y!==w||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(_=ky,x="onMouseLeave",p="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(_=Py,x="onPointerLeave",p="onPointerEnter",h="pointer"),w=g==null?f:Yi(g),v=y==null?f:Yi(y),f=new _(x,h+"leave",g,n,c),f.target=w,f.relatedTarget=v,x=null,Zr(c)===u&&(_=new _(p,h+"enter",y,n,c),_.target=v,_.relatedTarget=w,x=_),w=x,g&&y)t:{for(_=g,p=y,h=0,v=_;v;v=Mi(v))h++;for(v=0,x=p;x;x=Mi(x))v++;for(;0<h-v;)_=Mi(_),h--;for(;0<v-h;)p=Mi(p),v--;for(;h--;){if(_===p||p!==null&&_===p.alternate)break t;_=Mi(_),p=Mi(p)}_=null}else _=null;g!==null&&zy(d,f,g,_,!1),y!==null&&w!==null&&zy(d,w,y,_,!0)}}e:{if(f=u?Yi(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var E=tI;else if(Ny(f))if(l1)E=sI;else{E=rI;var C=nI}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=iI);if(E&&(E=E(e,u))){a1(d,E,n,c);break e}C&&C(e,f,u),e==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Yf(f,"number",f.value)}switch(C=u?Yi(u):window,e){case"focusin":(Ny(C)||C.contentEditable==="true")&&(Gi=C,oh=u,bo=null);break;case"focusout":bo=oh=Gi=null;break;case"mousedown":ah=!0;break;case"contextmenu":case"mouseup":case"dragend":ah=!1,Fy(d,n,c);break;case"selectionchange":if(lI)break;case"keydown":case"keyup":Fy(d,n,c)}var S;if(Zp)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Hi?s1(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(i1&&n.locale!=="ko"&&(Hi||P!=="onCompositionStart"?P==="onCompositionEnd"&&Hi&&(S=r1()):(ur=c,Qp="value"in ur?ur.value:ur.textContent,Hi=!0)),C=fu(u,P),0<C.length&&(P=new Iy(P,e,null,n,c),d.push({event:P,listeners:C}),S?P.data=S:(S=o1(n),S!==null&&(P.data=S)))),(S=Qk?Xk(e,n):Jk(e,n))&&(u=fu(u,"onBeforeInput"),0<u.length&&(c=new Iy("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=S))}v1(d,t)})}function Qo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function fu(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Vo(e,n),s!=null&&r.unshift(Qo(e,s,i)),s=Vo(e,t),s!=null&&r.push(Qo(e,s,i))),e=e.return}return r}function Mi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zy(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Vo(n,s),l!=null&&o.unshift(Qo(n,l,a))):i||(l=Vo(n,s),l!=null&&o.push(Qo(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var fI=/\r\n?/g,hI=/\u0000|\uFFFD/g;function Uy(e){return(typeof e=="string"?e:""+e).replace(fI,`
`).replace(hI,"")}function ol(e,t,n){if(t=Uy(t),Uy(e)!==t&&n)throw Error(k(425))}function hu(){}var lh=null,uh=null;function ch(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var dh=typeof setTimeout=="function"?setTimeout:void 0,pI=typeof clearTimeout=="function"?clearTimeout:void 0,By=typeof Promise=="function"?Promise:void 0,mI=typeof queueMicrotask=="function"?queueMicrotask:typeof By<"u"?function(e){return By.resolve(null).then(e).catch(gI)}:dh;function gI(e){setTimeout(function(){throw e})}function Bd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Go(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Go(t)}function mr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Vy(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Bs=Math.random().toString(36).slice(2),_n="__reactFiber$"+Bs,Xo="__reactProps$"+Bs,Bn="__reactContainer$"+Bs,fh="__reactEvents$"+Bs,yI="__reactListeners$"+Bs,vI="__reactHandles$"+Bs;function Zr(e){var t=e[_n];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bn]||n[_n]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Vy(e);e!==null;){if(n=e[_n])return n;e=Vy(e)}return t}e=n,n=e.parentNode}return null}function Na(e){return e=e[_n]||e[Bn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function yc(e){return e[Xo]||null}var hh=[],qi=-1;function $r(e){return{current:e}}function ge(e){0>qi||(e.current=hh[qi],hh[qi]=null,qi--)}function de(e,t){qi++,hh[qi]=e.current,e.current=t}var Ir={},nt=$r(Ir),yt=$r(!1),pi=Ir;function vs(e,t){var n=e.type.contextTypes;if(!n)return Ir;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function vt(e){return e=e.childContextTypes,e!=null}function pu(){ge(yt),ge(nt)}function Wy(e,t,n){if(nt.current!==Ir)throw Error(k(168));de(nt,t),de(yt,n)}function w1(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,nk(e)||"Unknown",i));return xe({},n,r)}function mu(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ir,pi=nt.current,de(nt,e),de(yt,yt.current),!0}function Hy(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=w1(e,t,pi),r.__reactInternalMemoizedMergedChildContext=e,ge(yt),ge(nt),de(nt,e)):ge(yt),de(yt,n)}var Nn=null,vc=!1,Vd=!1;function x1(e){Nn===null?Nn=[e]:Nn.push(e)}function _I(e){vc=!0,x1(e)}function Fr(){if(!Vd&&Nn!==null){Vd=!0;var e=0,t=se;try{var n=Nn;for(se=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Nn=null,vc=!1}catch(i){throw Nn!==null&&(Nn=Nn.slice(e+1)),Gw(Gp,Fr),i}finally{se=t,Vd=!1}}return null}var Qi=[],Xi=0,gu=null,yu=0,jt=[],zt=0,mi=null,Dn=1,Ln="";function Gr(e,t){Qi[Xi++]=yu,Qi[Xi++]=gu,gu=e,yu=t}function S1(e,t,n){jt[zt++]=Dn,jt[zt++]=Ln,jt[zt++]=mi,mi=e;var r=Dn;e=Ln;var i=32-an(r)-1;r&=~(1<<i),n+=1;var s=32-an(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Dn=1<<32-an(t)+i|n<<i|r,Ln=s+e}else Dn=1<<s|n<<i|r,Ln=e}function tm(e){e.return!==null&&(Gr(e,1),S1(e,1,0))}function nm(e){for(;e===gu;)gu=Qi[--Xi],Qi[Xi]=null,yu=Qi[--Xi],Qi[Xi]=null;for(;e===mi;)mi=jt[--zt],jt[zt]=null,Ln=jt[--zt],jt[zt]=null,Dn=jt[--zt],jt[zt]=null}var It=null,Ct=null,ye=!1,tn=null;function E1(e,t){var n=Ut(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Gy(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,It=e,Ct=mr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,It=e,Ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=mi!==null?{id:Dn,overflow:Ln}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ut(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,It=e,Ct=null,!0):!1;default:return!1}}function ph(e){return(e.mode&1)!==0&&(e.flags&128)===0}function mh(e){if(ye){var t=Ct;if(t){var n=t;if(!Gy(e,t)){if(ph(e))throw Error(k(418));t=mr(n.nextSibling);var r=It;t&&Gy(e,t)?E1(r,n):(e.flags=e.flags&-4097|2,ye=!1,It=e)}}else{if(ph(e))throw Error(k(418));e.flags=e.flags&-4097|2,ye=!1,It=e}}}function Ky(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;It=e}function al(e){if(e!==It)return!1;if(!ye)return Ky(e),ye=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ch(e.type,e.memoizedProps)),t&&(t=Ct)){if(ph(e))throw C1(),Error(k(418));for(;t;)E1(e,t),t=mr(t.nextSibling)}if(Ky(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ct=mr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ct=null}}else Ct=It?mr(e.stateNode.nextSibling):null;return!0}function C1(){for(var e=Ct;e;)e=mr(e.nextSibling)}function _s(){Ct=It=null,ye=!1}function rm(e){tn===null?tn=[e]:tn.push(e)}var wI=Yn.ReactCurrentBatchConfig;function Zt(e,t){if(e&&e.defaultProps){t=xe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var vu=$r(null),_u=null,Ji=null,im=null;function sm(){im=Ji=_u=null}function om(e){var t=vu.current;ge(vu),e._currentValue=t}function gh(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function cs(e,t){_u=e,im=Ji=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pt=!0),e.firstContext=null)}function Vt(e){var t=e._currentValue;if(im!==e)if(e={context:e,memoizedValue:t,next:null},Ji===null){if(_u===null)throw Error(k(308));Ji=e,_u.dependencies={lanes:0,firstContext:e}}else Ji=Ji.next=e;return t}var ei=null;function am(e){ei===null?ei=[e]:ei.push(e)}function T1(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,am(t)):(n.next=i.next,i.next=n),t.interleaved=n,Vn(e,r)}function Vn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nr=!1;function lm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function b1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Vn(e,n)}return i=r.interleaved,i===null?(t.next=t,am(r)):(t.next=i.next,i.next=t),r.interleaved=t,Vn(e,n)}function Rl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Kp(e,n)}}function Yy(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function wu(e,t,n,r){var i=e.updateQueue;nr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,_=a;switch(f=t,g=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){d=y.call(g,d,f);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,f=typeof y=="function"?y.call(g,d,f):y,f==null)break e;d=xe({},d,f);break e;case 2:nr=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);yi|=o,e.lanes=o,e.memoizedState=d}}function qy(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var k1=new Tw.Component().refs;function yh(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:xe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _c={isMounted:function(e){return(e=e._reactInternals)?Pi(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=lt(),i=vr(e),s=Mn(r,i);s.payload=t,n!=null&&(s.callback=n),t=gr(e,s,i),t!==null&&(ln(t,e,i,r),Rl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=lt(),i=vr(e),s=Mn(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=gr(e,s,i),t!==null&&(ln(t,e,i,r),Rl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=lt(),r=vr(e),i=Mn(n,r);i.tag=2,t!=null&&(i.callback=t),t=gr(e,i,r),t!==null&&(ln(t,e,r,n),Rl(t,e,r))}};function Qy(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Yo(n,r)||!Yo(i,s):!0}function I1(e,t,n){var r=!1,i=Ir,s=t.contextType;return typeof s=="object"&&s!==null?s=Vt(s):(i=vt(t)?pi:nt.current,r=t.contextTypes,s=(r=r!=null)?vs(e,i):Ir),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_c,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Xy(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_c.enqueueReplaceState(t,t.state,null)}function vh(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=k1,lm(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Vt(s):(s=vt(t)?pi:nt.current,i.context=vs(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(yh(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&_c.enqueueReplaceState(i,i.state,null),wu(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function no(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===k1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function ll(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Jy(e){var t=e._init;return t(e._payload)}function P1(e){function t(p,h){if(e){var v=p.deletions;v===null?(p.deletions=[h],p.flags|=16):v.push(h)}}function n(p,h){if(!e)return null;for(;h!==null;)t(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=_r(p,h),p.index=0,p.sibling=null,p}function s(p,h,v){return p.index=v,e?(v=p.alternate,v!==null?(v=v.index,v<h?(p.flags|=2,h):v):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,h,v,x){return h===null||h.tag!==6?(h=Qd(v,p.mode,x),h.return=p,h):(h=i(h,v),h.return=p,h)}function l(p,h,v,x){var E=v.type;return E===Wi?c(p,h,v.props.children,x,v.key):h!==null&&(h.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===tr&&Jy(E)===h.type)?(x=i(h,v.props),x.ref=no(p,h,v),x.return=p,x):(x=Fl(v.type,v.key,v.props,null,p.mode,x),x.ref=no(p,h,v),x.return=p,x)}function u(p,h,v,x){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=Xd(v,p.mode,x),h.return=p,h):(h=i(h,v.children||[]),h.return=p,h)}function c(p,h,v,x,E){return h===null||h.tag!==7?(h=ai(v,p.mode,x,E),h.return=p,h):(h=i(h,v),h.return=p,h)}function d(p,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Qd(""+h,p.mode,v),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Xa:return v=Fl(h.type,h.key,h.props,null,p.mode,v),v.ref=no(p,null,h),v.return=p,v;case Vi:return h=Xd(h,p.mode,v),h.return=p,h;case tr:var x=h._init;return d(p,x(h._payload),v)}if(mo(h)||Xs(h))return h=ai(h,p.mode,v,null),h.return=p,h;ll(p,h)}return null}function f(p,h,v,x){var E=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return E!==null?null:a(p,h,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Xa:return v.key===E?l(p,h,v,x):null;case Vi:return v.key===E?u(p,h,v,x):null;case tr:return E=v._init,f(p,h,E(v._payload),x)}if(mo(v)||Xs(v))return E!==null?null:c(p,h,v,x,null);ll(p,v)}return null}function g(p,h,v,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(v)||null,a(h,p,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Xa:return p=p.get(x.key===null?v:x.key)||null,l(h,p,x,E);case Vi:return p=p.get(x.key===null?v:x.key)||null,u(h,p,x,E);case tr:var C=x._init;return g(p,h,v,C(x._payload),E)}if(mo(x)||Xs(x))return p=p.get(v)||null,c(h,p,x,E,null);ll(h,x)}return null}function y(p,h,v,x){for(var E=null,C=null,S=h,P=h=0,F=null;S!==null&&P<v.length;P++){S.index>P?(F=S,S=null):F=S.sibling;var $=f(p,S,v[P],x);if($===null){S===null&&(S=F);break}e&&S&&$.alternate===null&&t(p,S),h=s($,h,P),C===null?E=$:C.sibling=$,C=$,S=F}if(P===v.length)return n(p,S),ye&&Gr(p,P),E;if(S===null){for(;P<v.length;P++)S=d(p,v[P],x),S!==null&&(h=s(S,h,P),C===null?E=S:C.sibling=S,C=S);return ye&&Gr(p,P),E}for(S=r(p,S);P<v.length;P++)F=g(S,p,P,v[P],x),F!==null&&(e&&F.alternate!==null&&S.delete(F.key===null?P:F.key),h=s(F,h,P),C===null?E=F:C.sibling=F,C=F);return e&&S.forEach(function(B){return t(p,B)}),ye&&Gr(p,P),E}function _(p,h,v,x){var E=Xs(v);if(typeof E!="function")throw Error(k(150));if(v=E.call(v),v==null)throw Error(k(151));for(var C=E=null,S=h,P=h=0,F=null,$=v.next();S!==null&&!$.done;P++,$=v.next()){S.index>P?(F=S,S=null):F=S.sibling;var B=f(p,S,$.value,x);if(B===null){S===null&&(S=F);break}e&&S&&B.alternate===null&&t(p,S),h=s(B,h,P),C===null?E=B:C.sibling=B,C=B,S=F}if($.done)return n(p,S),ye&&Gr(p,P),E;if(S===null){for(;!$.done;P++,$=v.next())$=d(p,$.value,x),$!==null&&(h=s($,h,P),C===null?E=$:C.sibling=$,C=$);return ye&&Gr(p,P),E}for(S=r(p,S);!$.done;P++,$=v.next())$=g(S,p,P,$.value,x),$!==null&&(e&&$.alternate!==null&&S.delete($.key===null?P:$.key),h=s($,h,P),C===null?E=$:C.sibling=$,C=$);return e&&S.forEach(function(Ye){return t(p,Ye)}),ye&&Gr(p,P),E}function w(p,h,v,x){if(typeof v=="object"&&v!==null&&v.type===Wi&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Xa:e:{for(var E=v.key,C=h;C!==null;){if(C.key===E){if(E=v.type,E===Wi){if(C.tag===7){n(p,C.sibling),h=i(C,v.props.children),h.return=p,p=h;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===tr&&Jy(E)===C.type){n(p,C.sibling),h=i(C,v.props),h.ref=no(p,C,v),h.return=p,p=h;break e}n(p,C);break}else t(p,C);C=C.sibling}v.type===Wi?(h=ai(v.props.children,p.mode,x,v.key),h.return=p,p=h):(x=Fl(v.type,v.key,v.props,null,p.mode,x),x.ref=no(p,h,v),x.return=p,p=x)}return o(p);case Vi:e:{for(C=v.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(p,h.sibling),h=i(h,v.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else t(p,h);h=h.sibling}h=Xd(v,p.mode,x),h.return=p,p=h}return o(p);case tr:return C=v._init,w(p,h,C(v._payload),x)}if(mo(v))return y(p,h,v,x);if(Xs(v))return _(p,h,v,x);ll(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,v),h.return=p,p=h):(n(p,h),h=Qd(v,p.mode,x),h.return=p,p=h),o(p)):n(p,h)}return w}var ws=P1(!0),O1=P1(!1),Aa={},xn=$r(Aa),Jo=$r(Aa),Zo=$r(Aa);function ti(e){if(e===Aa)throw Error(k(174));return e}function um(e,t){switch(de(Zo,t),de(Jo,e),de(xn,Aa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Qf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Qf(t,e)}ge(xn),de(xn,t)}function xs(){ge(xn),ge(Jo),ge(Zo)}function R1(e){ti(Zo.current);var t=ti(xn.current),n=Qf(t,e.type);t!==n&&(de(Jo,e),de(xn,n))}function cm(e){Jo.current===e&&(ge(xn),ge(Jo))}var _e=$r(0);function xu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wd=[];function dm(){for(var e=0;e<Wd.length;e++)Wd[e]._workInProgressVersionPrimary=null;Wd.length=0}var Nl=Yn.ReactCurrentDispatcher,Hd=Yn.ReactCurrentBatchConfig,gi=0,we=null,Pe=null,$e=null,Su=!1,ko=!1,ea=0,xI=0;function Xe(){throw Error(k(321))}function fm(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!fn(e[n],t[n]))return!1;return!0}function hm(e,t,n,r,i,s){if(gi=s,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Nl.current=e===null||e.memoizedState===null?TI:bI,e=n(r,i),ko){s=0;do{if(ko=!1,ea=0,25<=s)throw Error(k(301));s+=1,$e=Pe=null,t.updateQueue=null,Nl.current=kI,e=n(r,i)}while(ko)}if(Nl.current=Eu,t=Pe!==null&&Pe.next!==null,gi=0,$e=Pe=we=null,Su=!1,t)throw Error(k(300));return e}function pm(){var e=ea!==0;return ea=0,e}function pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?we.memoizedState=$e=e:$e=$e.next=e,$e}function Wt(){if(Pe===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var t=$e===null?we.memoizedState:$e.next;if(t!==null)$e=t,Pe=e;else{if(e===null)throw Error(k(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},$e===null?we.memoizedState=$e=e:$e=$e.next=e}return $e}function ta(e,t){return typeof t=="function"?t(e):t}function Gd(e){var t=Wt(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=Pe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((gi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,we.lanes|=c,yi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,fn(r,t.memoizedState)||(pt=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,we.lanes|=s,yi|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Kd(e){var t=Wt(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);fn(s,t.memoizedState)||(pt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function N1(){}function A1(e,t){var n=we,r=Wt(),i=t(),s=!fn(r.memoizedState,i);if(s&&(r.memoizedState=i,pt=!0),r=r.queue,mm($1.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,na(9,L1.bind(null,n,r,i,t),void 0,null),je===null)throw Error(k(349));gi&30||D1(n,t,i)}return i}function D1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function L1(e,t,n,r){t.value=n,t.getSnapshot=r,F1(t)&&M1(e)}function $1(e,t,n){return n(function(){F1(t)&&M1(e)})}function F1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!fn(e,n)}catch{return!0}}function M1(e){var t=Vn(e,1);t!==null&&ln(t,e,1,-1)}function Zy(e){var t=pn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:e},t.queue=e,e=e.dispatch=CI.bind(null,we,e),[t.memoizedState,e]}function na(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function j1(){return Wt().memoizedState}function Al(e,t,n,r){var i=pn();we.flags|=e,i.memoizedState=na(1|t,n,void 0,r===void 0?null:r)}function wc(e,t,n,r){var i=Wt();r=r===void 0?null:r;var s=void 0;if(Pe!==null){var o=Pe.memoizedState;if(s=o.destroy,r!==null&&fm(r,o.deps)){i.memoizedState=na(t,n,s,r);return}}we.flags|=e,i.memoizedState=na(1|t,n,s,r)}function ev(e,t){return Al(8390656,8,e,t)}function mm(e,t){return wc(2048,8,e,t)}function z1(e,t){return wc(4,2,e,t)}function U1(e,t){return wc(4,4,e,t)}function B1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function V1(e,t,n){return n=n!=null?n.concat([e]):null,wc(4,4,B1.bind(null,t,e),n)}function gm(){}function W1(e,t){var n=Wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fm(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function H1(e,t){var n=Wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fm(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function G1(e,t,n){return gi&21?(fn(n,t)||(n=qw(),we.lanes|=n,yi|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pt=!0),e.memoizedState=n)}function SI(e,t){var n=se;se=n!==0&&4>n?n:4,e(!0);var r=Hd.transition;Hd.transition={};try{e(!1),t()}finally{se=n,Hd.transition=r}}function K1(){return Wt().memoizedState}function EI(e,t,n){var r=vr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Y1(e))q1(t,n);else if(n=T1(e,t,n,r),n!==null){var i=lt();ln(n,e,r,i),Q1(n,t,r)}}function CI(e,t,n){var r=vr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Y1(e))q1(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,fn(a,o)){var l=t.interleaved;l===null?(i.next=i,am(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=T1(e,t,i,r),n!==null&&(i=lt(),ln(n,e,r,i),Q1(n,t,r))}}function Y1(e){var t=e.alternate;return e===we||t!==null&&t===we}function q1(e,t){ko=Su=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Q1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Kp(e,n)}}var Eu={readContext:Vt,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},TI={readContext:Vt,useCallback:function(e,t){return pn().memoizedState=[e,t===void 0?null:t],e},useContext:Vt,useEffect:ev,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Al(4194308,4,B1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Al(4194308,4,e,t)},useInsertionEffect:function(e,t){return Al(4,2,e,t)},useMemo:function(e,t){var n=pn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=pn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=EI.bind(null,we,e),[r.memoizedState,e]},useRef:function(e){var t=pn();return e={current:e},t.memoizedState=e},useState:Zy,useDebugValue:gm,useDeferredValue:function(e){return pn().memoizedState=e},useTransition:function(){var e=Zy(!1),t=e[0];return e=SI.bind(null,e[1]),pn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=we,i=pn();if(ye){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),je===null)throw Error(k(349));gi&30||D1(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,ev($1.bind(null,r,s,e),[e]),r.flags|=2048,na(9,L1.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=pn(),t=je.identifierPrefix;if(ye){var n=Ln,r=Dn;n=(r&~(1<<32-an(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ea++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=xI++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},bI={readContext:Vt,useCallback:W1,useContext:Vt,useEffect:mm,useImperativeHandle:V1,useInsertionEffect:z1,useLayoutEffect:U1,useMemo:H1,useReducer:Gd,useRef:j1,useState:function(){return Gd(ta)},useDebugValue:gm,useDeferredValue:function(e){var t=Wt();return G1(t,Pe.memoizedState,e)},useTransition:function(){var e=Gd(ta)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:N1,useSyncExternalStore:A1,useId:K1,unstable_isNewReconciler:!1},kI={readContext:Vt,useCallback:W1,useContext:Vt,useEffect:mm,useImperativeHandle:V1,useInsertionEffect:z1,useLayoutEffect:U1,useMemo:H1,useReducer:Kd,useRef:j1,useState:function(){return Kd(ta)},useDebugValue:gm,useDeferredValue:function(e){var t=Wt();return Pe===null?t.memoizedState=e:G1(t,Pe.memoizedState,e)},useTransition:function(){var e=Kd(ta)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:N1,useSyncExternalStore:A1,useId:K1,unstable_isNewReconciler:!1};function Ss(e,t){try{var n="",r=t;do n+=tk(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Yd(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function _h(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var II=typeof WeakMap=="function"?WeakMap:Map;function X1(e,t,n){n=Mn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Tu||(Tu=!0,Ph=r),_h(e,t)},n}function J1(e,t,n){n=Mn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){_h(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){_h(e,t),typeof r!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function tv(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new II;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=BI.bind(null,e,t,n),t.then(e,e))}function nv(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function rv(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Mn(-1,1),t.tag=2,gr(n,t,1))),n.lanes|=1),e)}var PI=Yn.ReactCurrentOwner,pt=!1;function st(e,t,n,r){t.child=e===null?O1(t,null,n,r):ws(t,e.child,n,r)}function iv(e,t,n,r,i){n=n.render;var s=t.ref;return cs(t,i),r=hm(e,t,n,r,s,i),n=pm(),e!==null&&!pt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wn(e,t,i)):(ye&&n&&tm(t),t.flags|=1,st(e,t,r,i),t.child)}function sv(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Cm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Z1(e,t,s,r,i)):(e=Fl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Yo,n(o,r)&&e.ref===t.ref)return Wn(e,t,i)}return t.flags|=1,e=_r(s,r),e.ref=t.ref,e.return=t,t.child=e}function Z1(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Yo(s,r)&&e.ref===t.ref)if(pt=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(pt=!0);else return t.lanes=e.lanes,Wn(e,t,i)}return wh(e,t,n,r,i)}function ex(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(es,Et),Et|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,de(es,Et),Et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(es,Et),Et|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,de(es,Et),Et|=r;return st(e,t,i,n),t.child}function tx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function wh(e,t,n,r,i){var s=vt(n)?pi:nt.current;return s=vs(t,s),cs(t,i),n=hm(e,t,n,r,s,i),r=pm(),e!==null&&!pt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wn(e,t,i)):(ye&&r&&tm(t),t.flags|=1,st(e,t,n,i),t.child)}function ov(e,t,n,r,i){if(vt(n)){var s=!0;mu(t)}else s=!1;if(cs(t,i),t.stateNode===null)Dl(e,t),I1(t,n,r),vh(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Vt(u):(u=vt(n)?pi:nt.current,u=vs(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Xy(t,o,r,u),nr=!1;var f=t.memoizedState;o.state=f,wu(t,r,o,i),l=t.memoizedState,a!==r||f!==l||yt.current||nr?(typeof c=="function"&&(yh(t,n,c,r),l=t.memoizedState),(a=nr||Qy(t,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,b1(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Zt(t.type,a),o.props=u,d=t.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Vt(l):(l=vt(n)?pi:nt.current,l=vs(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Xy(t,o,r,l),nr=!1,f=t.memoizedState,o.state=f,wu(t,r,o,i);var y=t.memoizedState;a!==d||f!==y||yt.current||nr?(typeof g=="function"&&(yh(t,n,g,r),y=t.memoizedState),(u=nr||Qy(t,n,u,r,f,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return xh(e,t,n,r,s,i)}function xh(e,t,n,r,i,s){tx(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Hy(t,n,!1),Wn(e,t,s);r=t.stateNode,PI.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=ws(t,e.child,null,s),t.child=ws(t,null,a,s)):st(e,t,a,s),t.memoizedState=r.state,i&&Hy(t,n,!0),t.child}function nx(e){var t=e.stateNode;t.pendingContext?Wy(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Wy(e,t.context,!1),um(e,t.containerInfo)}function av(e,t,n,r,i){return _s(),rm(i),t.flags|=256,st(e,t,n,r),t.child}var Sh={dehydrated:null,treeContext:null,retryLane:0};function Eh(e){return{baseLanes:e,cachePool:null,transitions:null}}function rx(e,t,n){var r=t.pendingProps,i=_e.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),de(_e,i&1),e===null)return mh(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ec(o,r,0,null),e=ai(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Eh(n),t.memoizedState=Sh,e):ym(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return OI(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=_r(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=_r(a,s):(s=ai(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Eh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Sh,r}return s=e.child,e=s.sibling,r=_r(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ym(e,t){return t=Ec({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ul(e,t,n,r){return r!==null&&rm(r),ws(t,e.child,null,n),e=ym(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function OI(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Yd(Error(k(422))),ul(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Ec({mode:"visible",children:r.children},i,0,null),s=ai(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&ws(t,e.child,null,o),t.child.memoizedState=Eh(o),t.memoizedState=Sh,s);if(!(t.mode&1))return ul(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=Yd(s,r,void 0),ul(e,t,o,r)}if(a=(o&e.childLanes)!==0,pt||a){if(r=je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Vn(e,i),ln(r,e,i,-1))}return Em(),r=Yd(Error(k(421))),ul(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=VI.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Ct=mr(i.nextSibling),It=t,ye=!0,tn=null,e!==null&&(jt[zt++]=Dn,jt[zt++]=Ln,jt[zt++]=mi,Dn=e.id,Ln=e.overflow,mi=t),t=ym(t,r.children),t.flags|=4096,t)}function lv(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),gh(e.return,t,n)}function qd(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function ix(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(st(e,t,r.children,n),r=_e.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lv(e,n,t);else if(e.tag===19)lv(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(de(_e,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&xu(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),qd(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&xu(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}qd(t,!0,n,null,s);break;case"together":qd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Dl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),yi|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=_r(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_r(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function RI(e,t,n){switch(t.tag){case 3:nx(t),_s();break;case 5:R1(t);break;case 1:vt(t.type)&&mu(t);break;case 4:um(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;de(vu,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(de(_e,_e.current&1),t.flags|=128,null):n&t.child.childLanes?rx(e,t,n):(de(_e,_e.current&1),e=Wn(e,t,n),e!==null?e.sibling:null);de(_e,_e.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ix(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(_e,_e.current),r)break;return null;case 22:case 23:return t.lanes=0,ex(e,t,n)}return Wn(e,t,n)}var sx,Ch,ox,ax;sx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ch=function(){};ox=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ti(xn.current);var s=null;switch(n){case"input":i=Gf(e,i),r=Gf(e,r),s=[];break;case"select":i=xe({},i,{value:void 0}),r=xe({},r,{value:void 0}),s=[];break;case"textarea":i=qf(e,i),r=qf(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=hu)}Xf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Uo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Uo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&fe("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};ax=function(e,t,n,r){n!==r&&(t.flags|=4)};function ro(e,t){if(!ye)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function NI(e,t,n){var r=t.pendingProps;switch(nm(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(t),null;case 1:return vt(t.type)&&pu(),Je(t),null;case 3:return r=t.stateNode,xs(),ge(yt),ge(nt),dm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(al(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,tn!==null&&(Nh(tn),tn=null))),Ch(e,t),Je(t),null;case 5:cm(t);var i=ti(Zo.current);if(n=t.type,e!==null&&t.stateNode!=null)ox(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return Je(t),null}if(e=ti(xn.current),al(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[_n]=t,r[Xo]=s,e=(t.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<yo.length;i++)fe(yo[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":yy(r,s),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},fe("invalid",r);break;case"textarea":_y(r,s),fe("invalid",r)}Xf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ol(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ol(r.textContent,a,e),i=["children",""+a]):Uo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&fe("scroll",r)}switch(n){case"input":Ja(r),vy(r,s,!0);break;case"textarea":Ja(r),wy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=hu)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Dw(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[_n]=t,e[Xo]=r,sx(e,t,!1,!1),t.stateNode=e;e:{switch(o=Jf(n,r),n){case"dialog":fe("cancel",e),fe("close",e),i=r;break;case"iframe":case"object":case"embed":fe("load",e),i=r;break;case"video":case"audio":for(i=0;i<yo.length;i++)fe(yo[i],e);i=r;break;case"source":fe("error",e),i=r;break;case"img":case"image":case"link":fe("error",e),fe("load",e),i=r;break;case"details":fe("toggle",e),i=r;break;case"input":yy(e,r),i=Gf(e,r),fe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=xe({},r,{value:void 0}),fe("invalid",e);break;case"textarea":_y(e,r),i=qf(e,r),fe("invalid",e);break;default:i=r}Xf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Fw(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Lw(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Bo(e,l):typeof l=="number"&&Bo(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Uo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&fe("scroll",e):l!=null&&Up(e,s,l,o))}switch(n){case"input":Ja(e),vy(e,r,!1);break;case"textarea":Ja(e),wy(e);break;case"option":r.value!=null&&e.setAttribute("value",""+kr(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?os(e,!!r.multiple,s,!1):r.defaultValue!=null&&os(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=hu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Je(t),null;case 6:if(e&&t.stateNode!=null)ax(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=ti(Zo.current),ti(xn.current),al(t)){if(r=t.stateNode,n=t.memoizedProps,r[_n]=t,(s=r.nodeValue!==n)&&(e=It,e!==null))switch(e.tag){case 3:ol(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ol(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_n]=t,t.stateNode=r}return Je(t),null;case 13:if(ge(_e),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ye&&Ct!==null&&t.mode&1&&!(t.flags&128))C1(),_s(),t.flags|=98560,s=!1;else if(s=al(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(k(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[_n]=t}else _s(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Je(t),s=!1}else tn!==null&&(Nh(tn),tn=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||_e.current&1?Ne===0&&(Ne=3):Em())),t.updateQueue!==null&&(t.flags|=4),Je(t),null);case 4:return xs(),Ch(e,t),e===null&&qo(t.stateNode.containerInfo),Je(t),null;case 10:return om(t.type._context),Je(t),null;case 17:return vt(t.type)&&pu(),Je(t),null;case 19:if(ge(_e),s=t.memoizedState,s===null)return Je(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)ro(s,!1);else{if(Ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=xu(e),o!==null){for(t.flags|=128,ro(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return de(_e,_e.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ce()>Es&&(t.flags|=128,r=!0,ro(s,!1),t.lanes=4194304)}else{if(!r)if(e=xu(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ro(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ye)return Je(t),null}else 2*Ce()-s.renderingStartTime>Es&&n!==1073741824&&(t.flags|=128,r=!0,ro(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ce(),t.sibling=null,n=_e.current,de(_e,r?n&1|2:n&1),t):(Je(t),null);case 22:case 23:return Sm(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Et&1073741824&&(Je(t),t.subtreeFlags&6&&(t.flags|=8192)):Je(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function AI(e,t){switch(nm(t),t.tag){case 1:return vt(t.type)&&pu(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xs(),ge(yt),ge(nt),dm(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return cm(t),null;case 13:if(ge(_e),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));_s()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ge(_e),null;case 4:return xs(),null;case 10:return om(t.type._context),null;case 22:case 23:return Sm(),null;case 24:return null;default:return null}}var cl=!1,et=!1,DI=typeof WeakSet=="function"?WeakSet:Set,A=null;function Zi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(e,t,r)}else n.current=null}function Th(e,t,n){try{n()}catch(r){Se(e,t,r)}}var uv=!1;function LI(e,t){if(lh=cu,e=d1(),em(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===e)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(uh={focusedElem:e,selectionRange:n},cu=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,w=y.memoizedState,p=t.stateNode,h=p.getSnapshotBeforeUpdate(t.elementType===t.type?_:Zt(t.type,_),w);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(x){Se(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return y=uv,uv=!1,y}function Io(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Th(t,n,s)}i=i.next}while(i!==r)}}function xc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function bh(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function lx(e){var t=e.alternate;t!==null&&(e.alternate=null,lx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[_n],delete t[Xo],delete t[fh],delete t[yI],delete t[vI])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ux(e){return e.tag===5||e.tag===3||e.tag===4}function cv(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ux(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kh(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=hu));else if(r!==4&&(e=e.child,e!==null))for(kh(e,t,n),e=e.sibling;e!==null;)kh(e,t,n),e=e.sibling}function Ih(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ih(e,t,n),e=e.sibling;e!==null;)Ih(e,t,n),e=e.sibling}var Ve=null,en=!1;function Jn(e,t,n){for(n=n.child;n!==null;)cx(e,t,n),n=n.sibling}function cx(e,t,n){if(wn&&typeof wn.onCommitFiberUnmount=="function")try{wn.onCommitFiberUnmount(hc,n)}catch{}switch(n.tag){case 5:et||Zi(n,t);case 6:var r=Ve,i=en;Ve=null,Jn(e,t,n),Ve=r,en=i,Ve!==null&&(en?(e=Ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ve.removeChild(n.stateNode));break;case 18:Ve!==null&&(en?(e=Ve,n=n.stateNode,e.nodeType===8?Bd(e.parentNode,n):e.nodeType===1&&Bd(e,n),Go(e)):Bd(Ve,n.stateNode));break;case 4:r=Ve,i=en,Ve=n.stateNode.containerInfo,en=!0,Jn(e,t,n),Ve=r,en=i;break;case 0:case 11:case 14:case 15:if(!et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Th(n,t,o),i=i.next}while(i!==r)}Jn(e,t,n);break;case 1:if(!et&&(Zi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Se(n,t,a)}Jn(e,t,n);break;case 21:Jn(e,t,n);break;case 22:n.mode&1?(et=(r=et)||n.memoizedState!==null,Jn(e,t,n),et=r):Jn(e,t,n);break;default:Jn(e,t,n)}}function dv(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new DI),t.forEach(function(r){var i=WI.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Qt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ve=a.stateNode,en=!1;break e;case 3:Ve=a.stateNode.containerInfo,en=!0;break e;case 4:Ve=a.stateNode.containerInfo,en=!0;break e}a=a.return}if(Ve===null)throw Error(k(160));cx(s,o,i),Ve=null,en=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Se(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)dx(t,e),t=t.sibling}function dx(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qt(t,e),hn(e),r&4){try{Io(3,e,e.return),xc(3,e)}catch(_){Se(e,e.return,_)}try{Io(5,e,e.return)}catch(_){Se(e,e.return,_)}}break;case 1:Qt(t,e),hn(e),r&512&&n!==null&&Zi(n,n.return);break;case 5:if(Qt(t,e),hn(e),r&512&&n!==null&&Zi(n,n.return),e.flags&32){var i=e.stateNode;try{Bo(i,"")}catch(_){Se(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Nw(i,s),Jf(a,o);var u=Jf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Fw(i,d):c==="dangerouslySetInnerHTML"?Lw(i,d):c==="children"?Bo(i,d):Up(i,c,d,u)}switch(a){case"input":Kf(i,s);break;case"textarea":Aw(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?os(i,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?os(i,!!s.multiple,s.defaultValue,!0):os(i,!!s.multiple,s.multiple?[]:"",!1))}i[Xo]=s}catch(_){Se(e,e.return,_)}}break;case 6:if(Qt(t,e),hn(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(_){Se(e,e.return,_)}}break;case 3:if(Qt(t,e),hn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Go(t.containerInfo)}catch(_){Se(e,e.return,_)}break;case 4:Qt(t,e),hn(e);break;case 13:Qt(t,e),hn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(wm=Ce())),r&4&&dv(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(et=(u=et)||c,Qt(t,e),et=u):Qt(t,e),hn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(A=e,c=e.child;c!==null;){for(d=A=c;A!==null;){switch(f=A,g=f.child,f.tag){case 0:case 11:case 14:case 15:Io(4,f,f.return);break;case 1:Zi(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(_){Se(r,n,_)}}break;case 5:Zi(f,f.return);break;case 22:if(f.memoizedState!==null){hv(d);continue}}g!==null?(g.return=f,A=g):hv(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=$w("display",o))}catch(_){Se(e,e.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){Se(e,e.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Qt(t,e),hn(e),r&4&&dv(e);break;case 21:break;default:Qt(t,e),hn(e)}}function hn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ux(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Bo(i,""),r.flags&=-33);var s=cv(e);Ih(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=cv(e);kh(e,a,o);break;default:throw Error(k(161))}}catch(l){Se(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $I(e,t,n){A=e,fx(e)}function fx(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||cl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||et;a=cl;var u=et;if(cl=o,(et=l)&&!u)for(A=i;A!==null;)o=A,l=o.child,o.tag===22&&o.memoizedState!==null?pv(i):l!==null?(l.return=o,A=l):pv(i);for(;s!==null;)A=s,fx(s),s=s.sibling;A=i,cl=a,et=u}fv(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,A=s):fv(e)}}function fv(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:et||xc(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!et)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Zt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&qy(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}qy(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Go(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}et||t.flags&512&&bh(t)}catch(f){Se(t,t.return,f)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function hv(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function pv(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{xc(4,t)}catch(l){Se(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Se(t,i,l)}}var s=t.return;try{bh(t)}catch(l){Se(t,s,l)}break;case 5:var o=t.return;try{bh(t)}catch(l){Se(t,o,l)}}}catch(l){Se(t,t.return,l)}if(t===e){A=null;break}var a=t.sibling;if(a!==null){a.return=t.return,A=a;break}A=t.return}}var FI=Math.ceil,Cu=Yn.ReactCurrentDispatcher,vm=Yn.ReactCurrentOwner,Bt=Yn.ReactCurrentBatchConfig,q=0,je=null,Ie=null,Ge=0,Et=0,es=$r(0),Ne=0,ra=null,yi=0,Sc=0,_m=0,Po=null,ft=null,wm=0,Es=1/0,On=null,Tu=!1,Ph=null,yr=null,dl=!1,cr=null,bu=0,Oo=0,Oh=null,Ll=-1,$l=0;function lt(){return q&6?Ce():Ll!==-1?Ll:Ll=Ce()}function vr(e){return e.mode&1?q&2&&Ge!==0?Ge&-Ge:wI.transition!==null?($l===0&&($l=qw()),$l):(e=se,e!==0||(e=window.event,e=e===void 0?16:n1(e.type)),e):1}function ln(e,t,n,r){if(50<Oo)throw Oo=0,Oh=null,Error(k(185));Oa(e,n,r),(!(q&2)||e!==je)&&(e===je&&(!(q&2)&&(Sc|=n),Ne===4&&ir(e,Ge)),_t(e,r),n===1&&q===0&&!(t.mode&1)&&(Es=Ce()+500,vc&&Fr()))}function _t(e,t){var n=e.callbackNode;wk(e,t);var r=uu(e,e===je?Ge:0);if(r===0)n!==null&&Ey(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ey(n),t===1)e.tag===0?_I(mv.bind(null,e)):x1(mv.bind(null,e)),mI(function(){!(q&6)&&Fr()}),n=null;else{switch(Qw(r)){case 1:n=Gp;break;case 4:n=Kw;break;case 16:n=lu;break;case 536870912:n=Yw;break;default:n=lu}n=wx(n,hx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function hx(e,t){if(Ll=-1,$l=0,q&6)throw Error(k(327));var n=e.callbackNode;if(ds()&&e.callbackNode!==n)return null;var r=uu(e,e===je?Ge:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ku(e,r);else{t=r;var i=q;q|=2;var s=mx();(je!==e||Ge!==t)&&(On=null,Es=Ce()+500,oi(e,t));do try{zI();break}catch(a){px(e,a)}while(1);sm(),Cu.current=s,q=i,Ie!==null?t=0:(je=null,Ge=0,t=Ne)}if(t!==0){if(t===2&&(i=rh(e),i!==0&&(r=i,t=Rh(e,i))),t===1)throw n=ra,oi(e,0),ir(e,r),_t(e,Ce()),n;if(t===6)ir(e,r);else{if(i=e.current.alternate,!(r&30)&&!MI(i)&&(t=ku(e,r),t===2&&(s=rh(e),s!==0&&(r=s,t=Rh(e,s))),t===1))throw n=ra,oi(e,0),ir(e,r),_t(e,Ce()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Kr(e,ft,On);break;case 3:if(ir(e,r),(r&130023424)===r&&(t=wm+500-Ce(),10<t)){if(uu(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){lt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=dh(Kr.bind(null,e,ft,On),t);break}Kr(e,ft,On);break;case 4:if(ir(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-an(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*FI(r/1960))-r,10<r){e.timeoutHandle=dh(Kr.bind(null,e,ft,On),r);break}Kr(e,ft,On);break;case 5:Kr(e,ft,On);break;default:throw Error(k(329))}}}return _t(e,Ce()),e.callbackNode===n?hx.bind(null,e):null}function Rh(e,t){var n=Po;return e.current.memoizedState.isDehydrated&&(oi(e,t).flags|=256),e=ku(e,t),e!==2&&(t=ft,ft=n,t!==null&&Nh(t)),e}function Nh(e){ft===null?ft=e:ft.push.apply(ft,e)}function MI(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!fn(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ir(e,t){for(t&=~_m,t&=~Sc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-an(t),r=1<<n;e[n]=-1,t&=~r}}function mv(e){if(q&6)throw Error(k(327));ds();var t=uu(e,0);if(!(t&1))return _t(e,Ce()),null;var n=ku(e,t);if(e.tag!==0&&n===2){var r=rh(e);r!==0&&(t=r,n=Rh(e,r))}if(n===1)throw n=ra,oi(e,0),ir(e,t),_t(e,Ce()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kr(e,ft,On),_t(e,Ce()),null}function xm(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(Es=Ce()+500,vc&&Fr())}}function vi(e){cr!==null&&cr.tag===0&&!(q&6)&&ds();var t=q;q|=1;var n=Bt.transition,r=se;try{if(Bt.transition=null,se=1,e)return e()}finally{se=r,Bt.transition=n,q=t,!(q&6)&&Fr()}}function Sm(){Et=es.current,ge(es)}function oi(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,pI(n)),Ie!==null)for(n=Ie.return;n!==null;){var r=n;switch(nm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pu();break;case 3:xs(),ge(yt),ge(nt),dm();break;case 5:cm(r);break;case 4:xs();break;case 13:ge(_e);break;case 19:ge(_e);break;case 10:om(r.type._context);break;case 22:case 23:Sm()}n=n.return}if(je=e,Ie=e=_r(e.current,null),Ge=Et=t,Ne=0,ra=null,_m=Sc=yi=0,ft=Po=null,ei!==null){for(t=0;t<ei.length;t++)if(n=ei[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ei=null}return e}function px(e,t){do{var n=Ie;try{if(sm(),Nl.current=Eu,Su){for(var r=we.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Su=!1}if(gi=0,$e=Pe=we=null,ko=!1,ea=0,vm.current=null,n===null||n.return===null){Ne=1,ra=t,Ie=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=Ge,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=nv(o);if(g!==null){g.flags&=-257,rv(g,o,a,s,t),g.mode&1&&tv(s,u,t),t=g,l=u;var y=t.updateQueue;if(y===null){var _=new Set;_.add(l),t.updateQueue=_}else y.add(l);break e}else{if(!(t&1)){tv(s,u,t),Em();break e}l=Error(k(426))}}else if(ye&&a.mode&1){var w=nv(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),rv(w,o,a,s,t),rm(Ss(l,a));break e}}s=l=Ss(l,a),Ne!==4&&(Ne=2),Po===null?Po=[s]:Po.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var p=X1(s,l,t);Yy(s,p);break e;case 1:a=l;var h=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(yr===null||!yr.has(v)))){s.flags|=65536,t&=-t,s.lanes|=t;var x=J1(s,a,t);Yy(s,x);break e}}s=s.return}while(s!==null)}yx(n)}catch(E){t=E,Ie===n&&n!==null&&(Ie=n=n.return);continue}break}while(1)}function mx(){var e=Cu.current;return Cu.current=Eu,e===null?Eu:e}function Em(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),je===null||!(yi&268435455)&&!(Sc&268435455)||ir(je,Ge)}function ku(e,t){var n=q;q|=2;var r=mx();(je!==e||Ge!==t)&&(On=null,oi(e,t));do try{jI();break}catch(i){px(e,i)}while(1);if(sm(),q=n,Cu.current=r,Ie!==null)throw Error(k(261));return je=null,Ge=0,Ne}function jI(){for(;Ie!==null;)gx(Ie)}function zI(){for(;Ie!==null&&!dk();)gx(Ie)}function gx(e){var t=_x(e.alternate,e,Et);e.memoizedProps=e.pendingProps,t===null?yx(e):Ie=t,vm.current=null}function yx(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=AI(n,t),n!==null){n.flags&=32767,Ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ne=6,Ie=null;return}}else if(n=NI(n,t,Et),n!==null){Ie=n;return}if(t=t.sibling,t!==null){Ie=t;return}Ie=t=e}while(t!==null);Ne===0&&(Ne=5)}function Kr(e,t,n){var r=se,i=Bt.transition;try{Bt.transition=null,se=1,UI(e,t,n,r)}finally{Bt.transition=i,se=r}return null}function UI(e,t,n,r){do ds();while(cr!==null);if(q&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(xk(e,s),e===je&&(Ie=je=null,Ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||dl||(dl=!0,wx(lu,function(){return ds(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Bt.transition,Bt.transition=null;var o=se;se=1;var a=q;q|=4,vm.current=null,LI(e,n),dx(n,e),aI(uh),cu=!!lh,uh=lh=null,e.current=n,$I(n),fk(),q=a,se=o,Bt.transition=s}else e.current=n;if(dl&&(dl=!1,cr=e,bu=i),s=e.pendingLanes,s===0&&(yr=null),mk(n.stateNode),_t(e,Ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Tu)throw Tu=!1,e=Ph,Ph=null,e;return bu&1&&e.tag!==0&&ds(),s=e.pendingLanes,s&1?e===Oh?Oo++:(Oo=0,Oh=e):Oo=0,Fr(),null}function ds(){if(cr!==null){var e=Qw(bu),t=Bt.transition,n=se;try{if(Bt.transition=null,se=16>e?16:e,cr===null)var r=!1;else{if(e=cr,cr=null,bu=0,q&6)throw Error(k(331));var i=q;for(q|=4,A=e.current;A!==null;){var s=A,o=s.child;if(A.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(A=u;A!==null;){var c=A;switch(c.tag){case 0:case 11:case 15:Io(8,c,s)}var d=c.child;if(d!==null)d.return=c,A=d;else for(;A!==null;){c=A;var f=c.sibling,g=c.return;if(lx(c),c===u){A=null;break}if(f!==null){f.return=g,A=f;break}A=g}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var w=_.sibling;_.sibling=null,_=w}while(_!==null)}}A=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Io(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,A=p;break e}A=s.return}}var h=e.current;for(A=h;A!==null;){o=A;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,A=v;else e:for(o=h;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xc(9,a)}}catch(E){Se(a,a.return,E)}if(a===o){A=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,A=x;break e}A=a.return}}if(q=i,Fr(),wn&&typeof wn.onPostCommitFiberRoot=="function")try{wn.onPostCommitFiberRoot(hc,e)}catch{}r=!0}return r}finally{se=n,Bt.transition=t}}return!1}function gv(e,t,n){t=Ss(n,t),t=X1(e,t,1),e=gr(e,t,1),t=lt(),e!==null&&(Oa(e,1,t),_t(e,t))}function Se(e,t,n){if(e.tag===3)gv(e,e,n);else for(;t!==null;){if(t.tag===3){gv(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yr===null||!yr.has(r))){e=Ss(n,e),e=J1(t,e,1),t=gr(t,e,1),e=lt(),t!==null&&(Oa(t,1,e),_t(t,e));break}}t=t.return}}function BI(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=lt(),e.pingedLanes|=e.suspendedLanes&n,je===e&&(Ge&n)===n&&(Ne===4||Ne===3&&(Ge&130023424)===Ge&&500>Ce()-wm?oi(e,0):_m|=n),_t(e,t)}function vx(e,t){t===0&&(e.mode&1?(t=tl,tl<<=1,!(tl&130023424)&&(tl=4194304)):t=1);var n=lt();e=Vn(e,t),e!==null&&(Oa(e,t,n),_t(e,n))}function VI(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vx(e,n)}function WI(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),vx(e,n)}var _x;_x=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||yt.current)pt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pt=!1,RI(e,t,n);pt=!!(e.flags&131072)}else pt=!1,ye&&t.flags&1048576&&S1(t,yu,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Dl(e,t),e=t.pendingProps;var i=vs(t,nt.current);cs(t,n),i=hm(null,t,r,e,i,n);var s=pm();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,vt(r)?(s=!0,mu(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,lm(t),i.updater=_c,t.stateNode=i,i._reactInternals=t,vh(t,r,e,n),t=xh(null,t,r,!0,s,n)):(t.tag=0,ye&&s&&tm(t),st(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Dl(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=GI(r),e=Zt(r,e),i){case 0:t=wh(null,t,r,e,n);break e;case 1:t=ov(null,t,r,e,n);break e;case 11:t=iv(null,t,r,e,n);break e;case 14:t=sv(null,t,r,Zt(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Zt(r,i),wh(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Zt(r,i),ov(e,t,r,i,n);case 3:e:{if(nx(t),e===null)throw Error(k(387));r=t.pendingProps,s=t.memoizedState,i=s.element,b1(e,t),wu(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Ss(Error(k(423)),t),t=av(e,t,r,n,i);break e}else if(r!==i){i=Ss(Error(k(424)),t),t=av(e,t,r,n,i);break e}else for(Ct=mr(t.stateNode.containerInfo.firstChild),It=t,ye=!0,tn=null,n=O1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_s(),r===i){t=Wn(e,t,n);break e}st(e,t,r,n)}t=t.child}return t;case 5:return R1(t),e===null&&mh(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,ch(r,i)?o=null:s!==null&&ch(r,s)&&(t.flags|=32),tx(e,t),st(e,t,o,n),t.child;case 6:return e===null&&mh(t),null;case 13:return rx(e,t,n);case 4:return um(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ws(t,null,r,n):st(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Zt(r,i),iv(e,t,r,i,n);case 7:return st(e,t,t.pendingProps,n),t.child;case 8:return st(e,t,t.pendingProps.children,n),t.child;case 12:return st(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,de(vu,r._currentValue),r._currentValue=o,s!==null)if(fn(s.value,o)){if(s.children===i.children&&!yt.current){t=Wn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Mn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),gh(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),gh(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}st(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,cs(t,n),i=Vt(i),r=r(i),t.flags|=1,st(e,t,r,n),t.child;case 14:return r=t.type,i=Zt(r,t.pendingProps),i=Zt(r.type,i),sv(e,t,r,i,n);case 15:return Z1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Zt(r,i),Dl(e,t),t.tag=1,vt(r)?(e=!0,mu(t)):e=!1,cs(t,n),I1(t,r,i),vh(t,r,i,n),xh(null,t,r,!0,e,n);case 19:return ix(e,t,n);case 22:return ex(e,t,n)}throw Error(k(156,t.tag))};function wx(e,t){return Gw(e,t)}function HI(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(e,t,n,r){return new HI(e,t,n,r)}function Cm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function GI(e){if(typeof e=="function")return Cm(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Vp)return 11;if(e===Wp)return 14}return 2}function _r(e,t){var n=e.alternate;return n===null?(n=Ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fl(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Cm(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Wi:return ai(n.children,i,s,t);case Bp:o=8,i|=8;break;case Bf:return e=Ut(12,n,t,i|2),e.elementType=Bf,e.lanes=s,e;case Vf:return e=Ut(13,n,t,i),e.elementType=Vf,e.lanes=s,e;case Wf:return e=Ut(19,n,t,i),e.elementType=Wf,e.lanes=s,e;case Pw:return Ec(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case kw:o=10;break e;case Iw:o=9;break e;case Vp:o=11;break e;case Wp:o=14;break e;case tr:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Ut(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function ai(e,t,n,r){return e=Ut(7,e,r,t),e.lanes=n,e}function Ec(e,t,n,r){return e=Ut(22,e,r,t),e.elementType=Pw,e.lanes=n,e.stateNode={isHidden:!1},e}function Qd(e,t,n){return e=Ut(6,e,null,t),e.lanes=n,e}function Xd(e,t,n){return t=Ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function KI(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rd(0),this.expirationTimes=Rd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Tm(e,t,n,r,i,s,o,a,l){return e=new KI(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ut(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lm(s),e}function YI(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function xx(e){if(!e)return Ir;e=e._reactInternals;e:{if(Pi(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(vt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(vt(n))return w1(e,n,t)}return t}function Sx(e,t,n,r,i,s,o,a,l){return e=Tm(n,r,!0,e,i,s,o,a,l),e.context=xx(null),n=e.current,r=lt(),i=vr(n),s=Mn(r,i),s.callback=t??null,gr(n,s,i),e.current.lanes=i,Oa(e,i,r),_t(e,r),e}function Cc(e,t,n,r){var i=t.current,s=lt(),o=vr(i);return n=xx(n),t.context===null?t.context=n:t.pendingContext=n,t=Mn(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gr(i,t,o),e!==null&&(ln(e,i,o,s),Rl(e,i,o)),o}function Iu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function yv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function bm(e,t){yv(e,t),(e=e.alternate)&&yv(e,t)}function qI(){return null}var Ex=typeof reportError=="function"?reportError:function(e){console.error(e)};function km(e){this._internalRoot=e}Tc.prototype.render=km.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Cc(e,t,null,null)};Tc.prototype.unmount=km.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vi(function(){Cc(null,e,null,null)}),t[Bn]=null}};function Tc(e){this._internalRoot=e}Tc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zw();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rr.length&&t!==0&&t<rr[n].priority;n++);rr.splice(n,0,e),n===0&&t1(e)}};function Im(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function vv(){}function QI(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Iu(o);s.call(u)}}var o=Sx(t,r,e,0,null,!1,!1,"",vv);return e._reactRootContainer=o,e[Bn]=o.current,qo(e.nodeType===8?e.parentNode:e),vi(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Iu(l);a.call(u)}}var l=Tm(e,0,!1,null,null,!1,!1,"",vv);return e._reactRootContainer=l,e[Bn]=l.current,qo(e.nodeType===8?e.parentNode:e),vi(function(){Cc(t,l,n,r)}),l}function kc(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Iu(o);a.call(l)}}Cc(t,o,e,i)}else o=QI(n,t,e,i,r);return Iu(o)}Xw=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=go(t.pendingLanes);n!==0&&(Kp(t,n|1),_t(t,Ce()),!(q&6)&&(Es=Ce()+500,Fr()))}break;case 13:vi(function(){var r=Vn(e,1);if(r!==null){var i=lt();ln(r,e,1,i)}}),bm(e,1)}};Yp=function(e){if(e.tag===13){var t=Vn(e,134217728);if(t!==null){var n=lt();ln(t,e,134217728,n)}bm(e,134217728)}};Jw=function(e){if(e.tag===13){var t=vr(e),n=Vn(e,t);if(n!==null){var r=lt();ln(n,e,t,r)}bm(e,t)}};Zw=function(){return se};e1=function(e,t){var n=se;try{return se=e,t()}finally{se=n}};eh=function(e,t,n){switch(t){case"input":if(Kf(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=yc(r);if(!i)throw Error(k(90));Rw(r),Kf(r,i)}}}break;case"textarea":Aw(e,n);break;case"select":t=n.value,t!=null&&os(e,!!n.multiple,t,!1)}};zw=xm;Uw=vi;var XI={usingClientEntryPoint:!1,Events:[Na,Yi,yc,Mw,jw,xm]},io={findFiberByHostInstance:Zr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},JI={bundleType:io.bundleType,version:io.version,rendererPackageName:io.rendererPackageName,rendererConfig:io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ww(e),e===null?null:e.stateNode},findFiberByHostInstance:io.findFiberByHostInstance||qI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fl.isDisabled&&fl.supportsFiber)try{hc=fl.inject(JI),wn=fl}catch{}}Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=XI;Dt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Im(t))throw Error(k(200));return YI(e,t,null,n)};Dt.createRoot=function(e,t){if(!Im(e))throw Error(k(299));var n=!1,r="",i=Ex;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Tm(e,1,!1,null,null,n,!1,r,i),e[Bn]=t.current,qo(e.nodeType===8?e.parentNode:e),new km(t)};Dt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Ww(t),e=e===null?null:e.stateNode,e};Dt.flushSync=function(e){return vi(e)};Dt.hydrate=function(e,t,n){if(!bc(t))throw Error(k(200));return kc(null,e,t,!0,n)};Dt.hydrateRoot=function(e,t,n){if(!Im(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Ex;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Sx(t,null,e,1,n??null,i,!1,s,o),e[Bn]=t.current,qo(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Tc(t)};Dt.render=function(e,t,n){if(!bc(t))throw Error(k(200));return kc(null,e,t,!1,n)};Dt.unmountComponentAtNode=function(e){if(!bc(e))throw Error(k(40));return e._reactRootContainer?(vi(function(){kc(null,null,e,!1,function(){e._reactRootContainer=null,e[Bn]=null})}),!0):!1};Dt.unstable_batchedUpdates=xm;Dt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!bc(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return kc(e,t,n,!1,r)};Dt.version="18.2.0-next-9e3b772b8-20220608";function Cx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cx)}catch(e){console.error(e)}}Cx(),Sw.exports=Dt;var Tx=Sw.exports,_v=Tx;zf.createRoot=_v.createRoot,zf.hydrateRoot=_v.hydrateRoot;var mt=function(){return mt=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},mt.apply(this,arguments)};function Pm(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Pu(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}function bx(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var ZI=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,eP=bx(function(e){return ZI.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),he="-ms-",Ro="-moz-",ee="-webkit-",kx="comm",Ic="rule",Om="decl",tP="@import",Ix="@keyframes",nP="@layer",rP=Math.abs,Rm=String.fromCharCode,Ah=Object.assign;function iP(e,t){return Fe(e,0)^45?(((t<<2^Fe(e,0))<<2^Fe(e,1))<<2^Fe(e,2))<<2^Fe(e,3):0}function Px(e){return e.trim()}function Rn(e,t){return(e=t.exec(e))?e[0]:e}function V(e,t,n){return e.replace(t,n)}function Ml(e,t){return e.indexOf(t)}function Fe(e,t){return e.charCodeAt(t)|0}function Cs(e,t,n){return e.slice(t,n)}function gn(e){return e.length}function Ox(e){return e.length}function vo(e,t){return t.push(e),e}function sP(e,t){return e.map(t).join("")}function wv(e,t){return e.filter(function(n){return!Rn(n,t)})}var Pc=1,Ts=1,Rx=0,Ht=0,be=0,Vs="";function Oc(e,t,n,r,i,s,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Pc,column:Ts,length:o,return:"",siblings:a}}function er(e,t){return Ah(Oc("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ji(e){for(;e.root;)e=er(e.root,{children:[e]});vo(e,e.siblings)}function oP(){return be}function aP(){return be=Ht>0?Fe(Vs,--Ht):0,Ts--,be===10&&(Ts=1,Pc--),be}function un(){return be=Ht<Rx?Fe(Vs,Ht++):0,Ts++,be===10&&(Ts=1,Pc++),be}function li(){return Fe(Vs,Ht)}function jl(){return Ht}function Rc(e,t){return Cs(Vs,e,t)}function Dh(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function lP(e){return Pc=Ts=1,Rx=gn(Vs=e),Ht=0,[]}function uP(e){return Vs="",e}function Jd(e){return Px(Rc(Ht-1,Lh(e===91?e+2:e===40?e+1:e)))}function cP(e){for(;(be=li())&&be<33;)un();return Dh(e)>2||Dh(be)>3?"":" "}function dP(e,t){for(;--t&&un()&&!(be<48||be>102||be>57&&be<65||be>70&&be<97););return Rc(e,jl()+(t<6&&li()==32&&un()==32))}function Lh(e){for(;un();)switch(be){case e:return Ht;case 34:case 39:e!==34&&e!==39&&Lh(be);break;case 40:e===41&&Lh(e);break;case 92:un();break}return Ht}function fP(e,t){for(;un()&&e+be!==47+10;)if(e+be===42+42&&li()===47)break;return"/*"+Rc(t,Ht-1)+"*"+Rm(e===47?e:un())}function hP(e){for(;!Dh(li());)un();return Rc(e,Ht)}function pP(e){return uP(zl("",null,null,null,[""],e=lP(e),0,[0],e))}function zl(e,t,n,r,i,s,o,a,l){for(var u=0,c=0,d=o,f=0,g=0,y=0,_=1,w=1,p=1,h=0,v="",x=i,E=s,C=r,S=v;w;)switch(y=h,h=un()){case 40:if(y!=108&&Fe(S,d-1)==58){Ml(S+=V(Jd(h),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:S+=Jd(h);break;case 9:case 10:case 13:case 32:S+=cP(y);break;case 92:S+=dP(jl()-1,7);continue;case 47:switch(li()){case 42:case 47:vo(mP(fP(un(),jl()),t,n,l),l);break;default:S+="/"}break;case 123*_:a[u++]=gn(S)*p;case 125*_:case 59:case 0:switch(h){case 0:case 125:w=0;case 59+c:p==-1&&(S=V(S,/\f/g,"")),g>0&&gn(S)-d&&vo(g>32?Sv(S+";",r,n,d-1,l):Sv(V(S," ","")+";",r,n,d-2,l),l);break;case 59:S+=";";default:if(vo(C=xv(S,t,n,u,c,i,a,v,x=[],E=[],d,s),s),h===123)if(c===0)zl(S,t,C,C,x,s,d,a,E);else switch(f===99&&Fe(S,3)===110?100:f){case 100:case 108:case 109:case 115:zl(e,C,C,r&&vo(xv(e,C,C,0,0,i,a,v,i,x=[],d,E),E),i,E,d,a,r?x:E);break;default:zl(S,C,C,C,[""],E,0,a,E)}}u=c=g=0,_=p=1,v=S="",d=o;break;case 58:d=1+gn(S),g=y;default:if(_<1){if(h==123)--_;else if(h==125&&_++==0&&aP()==125)continue}switch(S+=Rm(h),h*_){case 38:p=c>0?1:(S+="\f",-1);break;case 44:a[u++]=(gn(S)-1)*p,p=1;break;case 64:li()===45&&(S+=Jd(un())),f=li(),c=d=gn(v=S+=hP(jl())),h++;break;case 45:y===45&&gn(S)==2&&(_=0)}}return s}function xv(e,t,n,r,i,s,o,a,l,u,c,d){for(var f=i-1,g=i===0?s:[""],y=Ox(g),_=0,w=0,p=0;_<r;++_)for(var h=0,v=Cs(e,f+1,f=rP(w=o[_])),x=e;h<y;++h)(x=Px(w>0?g[h]+" "+v:V(v,/&\f/g,g[h])))&&(l[p++]=x);return Oc(e,t,n,i===0?Ic:a,l,u,c,d)}function mP(e,t,n,r){return Oc(e,t,n,kx,Rm(oP()),Cs(e,2,-2),0,r)}function Sv(e,t,n,r,i){return Oc(e,t,n,Om,Cs(e,0,r),Cs(e,r+1,-1),r,i)}function Nx(e,t,n){switch(iP(e,t)){case 5103:return ee+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ee+e+e;case 4789:return Ro+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ee+e+Ro+e+he+e+e;case 5936:switch(Fe(e,t+11)){case 114:return ee+e+he+V(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ee+e+he+V(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ee+e+he+V(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ee+e+he+e+e;case 6165:return ee+e+he+"flex-"+e+e;case 5187:return ee+e+V(e,/(\w+).+(:[^]+)/,ee+"box-$1$2"+he+"flex-$1$2")+e;case 5443:return ee+e+he+"flex-item-"+V(e,/flex-|-self/g,"")+(Rn(e,/flex-|baseline/)?"":he+"grid-row-"+V(e,/flex-|-self/g,""))+e;case 4675:return ee+e+he+"flex-line-pack"+V(e,/align-content|flex-|-self/g,"")+e;case 5548:return ee+e+he+V(e,"shrink","negative")+e;case 5292:return ee+e+he+V(e,"basis","preferred-size")+e;case 6060:return ee+"box-"+V(e,"-grow","")+ee+e+he+V(e,"grow","positive")+e;case 4554:return ee+V(e,/([^-])(transform)/g,"$1"+ee+"$2")+e;case 6187:return V(V(V(e,/(zoom-|grab)/,ee+"$1"),/(image-set)/,ee+"$1"),e,"")+e;case 5495:case 3959:return V(e,/(image-set\([^]*)/,ee+"$1$`$1");case 4968:return V(V(e,/(.+:)(flex-)?(.*)/,ee+"box-pack:$3"+he+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ee+e+e;case 4200:if(!Rn(e,/flex-|baseline/))return he+"grid-column-align"+Cs(e,t)+e;break;case 2592:case 3360:return he+V(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Rn(r.props,/grid-\w+-end/)})?~Ml(e+(n=n[t].value),"span")?e:he+V(e,"-start","")+e+he+"grid-row-span:"+(~Ml(n,"span")?Rn(n,/\d+/):+Rn(n,/\d+/)-+Rn(e,/\d+/))+";":he+V(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Rn(r.props,/grid-\w+-start/)})?e:he+V(V(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return V(e,/(.+)-inline(.+)/,ee+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(gn(e)-1-t>6)switch(Fe(e,t+1)){case 109:if(Fe(e,t+4)!==45)break;case 102:return V(e,/(.+:)(.+)-([^]+)/,"$1"+ee+"$2-$3$1"+Ro+(Fe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ml(e,"stretch")?Nx(V(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return V(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return he+i+":"+s+u+(o?he+i+"-span:"+(a?l:+l-+s)+u:"")+e});case 4949:if(Fe(e,t+6)===121)return V(e,":",":"+ee)+e;break;case 6444:switch(Fe(e,Fe(e,14)===45?18:11)){case 120:return V(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ee+(Fe(e,14)===45?"inline-":"")+"box$3$1"+ee+"$2$3$1"+he+"$2box$3")+e;case 100:return V(e,":",":"+he)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return V(e,"scroll-","scroll-snap-")+e}return e}function Ou(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function gP(e,t,n,r){switch(e.type){case nP:if(e.children.length)break;case tP:case Om:return e.return=e.return||e.value;case kx:return"";case Ix:return e.return=e.value+"{"+Ou(e.children,r)+"}";case Ic:if(!gn(e.value=e.props.join(",")))return""}return gn(n=Ou(e.children,r))?e.return=e.value+"{"+n+"}":""}function yP(e){var t=Ox(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}function vP(e){return function(t){t.root||(t=t.return)&&e(t)}}function _P(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Om:e.return=Nx(e.value,e.length,n);return;case Ix:return Ou([er(e,{value:V(e.value,"@","@"+ee)})],r);case Ic:if(e.length)return sP(n=e.props,function(i){switch(Rn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ji(er(e,{props:[V(i,/:(read-\w+)/,":"+Ro+"$1")]})),ji(er(e,{props:[i]})),Ah(e,{props:wv(n,r)});break;case"::placeholder":ji(er(e,{props:[V(i,/:(plac\w+)/,":"+ee+"input-$1")]})),ji(er(e,{props:[V(i,/:(plac\w+)/,":"+Ro+"$1")]})),ji(er(e,{props:[V(i,/:(plac\w+)/,he+"input-$1")]})),ji(er(e,{props:[i]})),Ah(e,{props:wv(n,r)});break}return""})}}var Ax={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},bs=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Nm=typeof window<"u"&&"HTMLElement"in window,wP=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Nc=Object.freeze([]),ks=Object.freeze({});function xP(e,t,n){return n===void 0&&(n=ks),e.theme!==n.theme&&e.theme||t||n.theme}var Dx=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),SP=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,EP=/(^-|-$)/g;function Ev(e){return e.replace(SP,"-").replace(EP,"")}var CP=/(a)(d)/gi,Cv=function(e){return String.fromCharCode(e+(e>25?39:97))};function $h(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Cv(t%52)+n;return(Cv(t%52)+n).replace(CP,"$1-$2")}var Zd,ts=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Lx=function(e){return ts(5381,e)};function TP(e){return $h(Lx(e)>>>0)}function bP(e){return e.displayName||e.name||"Component"}function ef(e){return typeof e=="string"&&!0}var $x=typeof Symbol=="function"&&Symbol.for,Fx=$x?Symbol.for("react.memo"):60115,kP=$x?Symbol.for("react.forward_ref"):60112,IP={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},PP={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Mx={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},OP=((Zd={})[kP]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Zd[Fx]=Mx,Zd);function Tv(e){return("type"in(t=e)&&t.type.$$typeof)===Fx?Mx:"$$typeof"in e?OP[e.$$typeof]:IP;var t}var RP=Object.defineProperty,NP=Object.getOwnPropertyNames,bv=Object.getOwnPropertySymbols,AP=Object.getOwnPropertyDescriptor,DP=Object.getPrototypeOf,kv=Object.prototype;function jx(e,t,n){if(typeof t!="string"){if(kv){var r=DP(t);r&&r!==kv&&jx(e,r,n)}var i=NP(t);bv&&(i=i.concat(bv(t)));for(var s=Tv(e),o=Tv(t),a=0;a<i.length;++a){var l=i[a];if(!(l in PP||n&&n[l]||o&&l in o||s&&l in s)){var u=AP(t,l);try{RP(e,l,u)}catch{}}}}return e}function Is(e){return typeof e=="function"}function Am(e){return typeof e=="object"&&"styledComponentId"in e}function ni(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Iv(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function ia(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Fh(e,t,n){if(n===void 0&&(n=!1),!n&&!ia(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Fh(e[r],t[r]);else if(ia(t))for(var r in t)e[r]=Fh(e[r],t[r]);return e}function Dm(e,t){Object.defineProperty(e,"toString",{value:t})}function Da(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var LP=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;t>=s;)if((s<<=1)<0)throw Da(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},e}(),Ul=new Map,Ru=new Map,tf=1,hl=function(e){if(Ul.has(e))return Ul.get(e);for(;Ru.has(tf);)tf++;var t=tf++;return Ul.set(e,t),Ru.set(t,e),t},$P=function(e,t){Ul.set(e,t),Ru.set(t,e)},FP="style[".concat(bs,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),MP=new RegExp("^".concat(bs,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),jP=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},zP=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(MP);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&($P(c,u),jP(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function UP(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var zx=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(bs,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(bs,"active"),r.setAttribute("data-styled-version","6.0.7");var o=UP();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},BP=function(){function e(t){this.element=zx(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Da(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),VP=function(){function e(t){this.element=zx(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),WP=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Pv=Nm,HP={isServer:!Nm,useCSSOMInjection:!wP},Ux=function(){function e(t,n,r){t===void 0&&(t=ks),n===void 0&&(n={});var i=this;this.options=mt(mt({},HP),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Nm&&Pv&&(Pv=!1,function(s){for(var o=document.querySelectorAll(FP),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(bs)!=="active"&&(zP(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Dm(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(d){var f=function(p){return Ru.get(p)}(d);if(f===void 0)return"continue";var g=s.names.get(f),y=o.getGroup(d);if(g===void 0||y.length===0)return"continue";var _="".concat(bs,".g").concat(d,'[id="').concat(f,'"]'),w="";g!==void 0&&g.forEach(function(p){p.length>0&&(w+="".concat(p,","))}),l+="".concat(y).concat(_,'{content:"').concat(w,'"}').concat(`/*!sc*/
`)},c=0;c<a;c++)u(c);return l}(i)})}return e.registerId=function(t){return hl(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(mt(mt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new WP(i):r?new BP(i):new VP(i)}(this.options),new LP(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(hl(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(hl(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(hl(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),GP=/&/g,KP=/^\s*\/\/.*$/gm;function Bx(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Bx(n.children,t)),n})}function YP(e){var t,n,r,i=e===void 0?ks:e,s=i.options,o=s===void 0?ks:s,a=i.plugins,l=a===void 0?Nc:a,u=function(f,g,y){return y===n||y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):f},c=l.slice();c.push(function(f){f.type===Ic&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(GP,n).replace(r,u))}),o.prefix&&c.push(_P),c.push(gP);var d=function(f,g,y,_){g===void 0&&(g=""),y===void 0&&(y=""),_===void 0&&(_="&"),t=_,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var w=f.replace(KP,""),p=pP(y||g?"".concat(y," ").concat(g," { ").concat(w," }"):w);o.namespace&&(p=Bx(p,o.namespace));var h=[];return Ou(p,yP(c.concat(vP(function(v){return h.push(v)})))),h};return d.hash=l.length?l.reduce(function(f,g){return g.name||Da(15),ts(f,g.name)},5381).toString():"",d}var qP=new Ux,Mh=YP(),Vx=at.createContext({shouldForwardProp:void 0,styleSheet:qP,stylis:Mh});Vx.Consumer;at.createContext(void 0);function Ov(){return T.useContext(Vx)}var QP=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Mh);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Dm(this,function(){throw Da(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Mh),this.name+t.hash},e}(),XP=function(e){return e>="A"&&e<="Z"};function Rv(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;XP(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Wx=function(e){return e==null||e===!1||e===""},Hx=function(e){var t,n,r=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!Wx(s)&&(Array.isArray(s)&&s.isCss||Is(s)?r.push("".concat(Rv(i),":"),s,";"):ia(s)?r.push.apply(r,Pu(Pu(["".concat(i," {")],Hx(s),!1),["}"],!1)):r.push("".concat(Rv(i),": ").concat((t=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Ax||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ui(e,t,n,r){if(Wx(e))return[];if(Am(e))return[".".concat(e.styledComponentId)];if(Is(e)){if(!Is(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return ui(i,t,n,r)}var s;return e instanceof QP?n?(e.inject(n,r),[e.getName(r)]):[e]:ia(e)?Hx(e):Array.isArray(e)?Array.prototype.concat.apply(Nc,e.map(function(o){return ui(o,t,n,r)})):[e.toString()]}function JP(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Is(n)&&!Am(n))return!1}return!0}var ZP=Lx("6.0.7"),eO=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&JP(t),this.componentId=n,this.baseHash=ts(ZP,n),this.baseStyle=r,Ux.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ni(i,this.staticRulesId);else{var s=Iv(ui(this.rules,t,n,r)),o=$h(ts(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=ni(i,o),this.staticRulesId=o}else{for(var l=ts(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var f=Iv(ui(d,t,n,r));l=ts(l,f),u+=f}}if(u){var g=$h(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=ni(i,g)}}return i},e}(),Gx=at.createContext(void 0);Gx.Consumer;var nf={};function tO(e,t,n){var r=Am(e),i=e,s=!ef(e),o=t.attrs,a=o===void 0?Nc:o,l=t.componentId,u=l===void 0?function(v,x){var E=typeof v!="string"?"sc":Ev(v);nf[E]=(nf[E]||0)+1;var C="".concat(E,"-").concat(TP("6.0.7"+E+nf[E]));return x?"".concat(x,"-").concat(C):C}(t.displayName,t.parentComponentId):l,c=t.displayName;c===void 0&&function(v){return ef(v)?"styled.".concat(v):"Styled(".concat(bP(v),")")}(e);var d=t.displayName&&t.componentId?"".concat(Ev(t.displayName),"-").concat(t.componentId):t.componentId||u,f=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,g=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var _=t.shouldForwardProp;g=function(v,x){return y(v,x)&&_(v,x)}}else g=y}var w=new eO(n,d,r?i.componentStyle:void 0);function p(v,x){return function(E,C,S){var P=E.attrs,F=E.componentStyle,$=E.defaultProps,B=E.foldedComponentIds,Ye=E.styledComponentId,te=E.target,rt=at.useContext(Gx),Kt=Ov(),Yt=E.shouldForwardProp||Kt.shouldForwardProp,ve=function(Ft,Ue,it){for(var qe,Qe=mt(mt({},Ue),{className:void 0,theme:it}),Fi=0;Fi<Ft.length;Fi+=1){var Vr=Is(qe=Ft[Fi])?qe(Qe):qe;for(var qt in Vr)Qe[qt]=qt==="className"?ni(Qe[qt],Vr[qt]):qt==="style"?mt(mt({},Qe[qt]),Vr[qt]):Vr[qt]}return Ue.className&&(Qe.className=ni(Qe.className,Ue.className)),Qe}(P,C,xP(C,rt,$)||ks),R=ve.as||te,j={};for(var z in ve)ve[z]===void 0||z[0]==="$"||z==="as"||z==="theme"||(z==="forwardedAs"?j.as=ve.forwardedAs:Yt&&!Yt(z,R)||(j[z]=ve[z]));var ne=function(Ft,Ue){var it=Ov(),qe=Ft.generateAndInjectStyles(Ue,it.styleSheet,it.stylis);return qe}(F,ve),re=ni(B,Ye);return ne&&(re+=" "+ne),ve.className&&(re+=" "+ve.className),j[ef(R)&&!Dx.has(R)?"class":"className"]=re,j.ref=S,T.createElement(R,j)}(h,v,x)}var h=at.forwardRef(p);return h.attrs=f,h.componentStyle=w,h.shouldForwardProp=g,h.foldedComponentIds=r?ni(i.foldedComponentIds,i.styledComponentId):"",h.styledComponentId=d,h.target=r?i.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(x){for(var E=[],C=1;C<arguments.length;C++)E[C-1]=arguments[C];for(var S=0,P=E;S<P.length;S++)Fh(x,P[S],!0);return x}({},i.defaultProps,v):v}}),Dm(h,function(){return".".concat(h.styledComponentId)}),s&&jx(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function Nv(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Av=function(e){return Object.assign(e,{isCss:!0})};function nO(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Is(e)||ia(e)){var r=e;return Av(ui(Nv(Nc,Pu([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?ui(i):Av(ui(Nv(i,t)))}function jh(e,t,n){if(n===void 0&&(n=ks),!t)throw Da(1,t);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return e(t,n,nO.apply(void 0,Pu([i],s,!1)))};return r.attrs=function(i){return jh(e,t,mt(mt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return jh(e,t,mt(mt({},n),i))},r}var Kx=function(e){return jh(tO,e)},L=Kx;Dx.forEach(function(e){L[e]=Kx(e)});const rO=L.header`
  padding: 20px 0px;
`,iO=L.div`
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
`,sO=L.div`
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
`,Dv=L.svg`
  width: 28px;
  height: 28px;
`,Lv=L(Pa)`
  display: flex;
  gap: 0px 8px;
  align-items: center;
`,$v=L.span`
  color: #121417;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 120% */
  letter-spacing: -0.4px;
`,oO=L.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`,aO=L(Pa)`
  display: flex;
  align-items: center;
  gap: 0px 8px;

  color: var(--secondary);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25;
  transition: color 300ms;
      &:hover{
   color:${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  }
`,lO=L.button`
  color: var(--background);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25;

  padding: 14px 39px;
  border-radius: 12px;
  background: var(--secondary);
  border: none;
    transition:all 300ms;
      &:hover{
        color: black;
        background-color:${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  }
`,Yx=L.svg`
  stroke: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  width: 20px;
  height: 20px;
`,uO=L.div`
    position: fixed;
    top: ${({top:e})=>e?"0px":"50%"};
    left:  ${({top:e})=>e?"0px":"50%"};
    width: 100%;
    height:  ${({top:e})=>e?void 0:" 100vh"};
    background-color: rgba(33, 33, 33, 0.12);
    transform:  ${({top:e})=>e?void 0:"translate(-50%, -50%)"};
    overflow: auto;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
`;function ns({state:e,children:t,onClose:n,top:r}){T.useEffect(()=>window.addEventListener("keydown",i),[]),T.useLayoutEffect(()=>()=>{window.removeEventListener("keydown",i)},[]);const i=a=>{a.code==="Escape"&&(s.classList.remove("modal-open"),n(!1))};let s=document.querySelector("body");e&&s.classList.add("modal-open");const o=a=>{a.currentTarget===a.target&&(s.classList.remove("modal-open"),n(!1))};return Tx.createPortal(m.jsx(uO,{onClick:o,top:r,children:t}),document.getElementById("modal-root"))}function Oi(e){this._maxSize=e,this.clear()}Oi.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Oi.prototype.get=function(e){return this._values[e]};Oi.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var cO=/[^.^\]^[]+|(?=\[\]|\.\.)/g,qx=/^\d+$/,dO=/^\d/,fO=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,hO=/^\s*(['"]?)(.*?)(\1)\s*$/,Lm=512,Fv=new Oi(Lm),Mv=new Oi(Lm),jv=new Oi(Lm),ci={Cache:Oi,split:zh,normalizePath:rf,setter:function(e){var t=rf(e);return Mv.get(e)||Mv.set(e,function(r,i){for(var s=0,o=t.length,a=r;s<o-1;){var l=t[s];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;a=a[t[s++]]}a[t[s]]=i})},getter:function(e,t){var n=rf(e);return jv.get(e)||jv.set(e,function(i){for(var s=0,o=n.length;s<o;)if(i!=null||!t)i=i[n[s++]];else return;return i})},join:function(e){return e.reduce(function(t,n){return t+($m(n)||qx.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){pO(Array.isArray(e)?e:zh(e),t,n)}};function rf(e){return Fv.get(e)||Fv.set(e,zh(e).map(function(t){return t.replace(hO,"$2")}))}function zh(e){return e.match(cO)||[""]}function pO(e,t,n){var r=e.length,i,s,o,a;for(s=0;s<r;s++)i=e[s],i&&(yO(i)&&(i='"'+i+'"'),a=$m(i),o=!a&&/^\d+$/.test(i),t.call(n,i,a,o,s,e))}function $m(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function mO(e){return e.match(dO)&&!e.match(qx)}function gO(e){return fO.test(e)}function yO(e){return!$m(e)&&(mO(e)||gO(e))}const vO=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Ac=e=>e.match(vO)||[],Dc=e=>e[0].toUpperCase()+e.slice(1),Fm=(e,t)=>Ac(e).join(t).toLowerCase(),Qx=e=>Ac(e).reduce((t,n)=>`${t}${t?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),_O=e=>Dc(Qx(e)),wO=e=>Fm(e,"_"),xO=e=>Fm(e,"-"),SO=e=>Dc(Fm(e," ")),EO=e=>Ac(e).map(Dc).join(" ");var sf={words:Ac,upperFirst:Dc,camelCase:Qx,pascalCase:_O,snakeCase:wO,kebabCase:xO,sentenceCase:SO,titleCase:EO},Mm={exports:{}};Mm.exports=function(e){return Xx(CO(e),e)};Mm.exports.array=Xx;function Xx(e,t){var n=e.length,r=new Array(n),i={},s=n,o=TO(t),a=bO(e);for(t.forEach(function(u){if(!a.has(u[0])||!a.has(u[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});s--;)i[s]||l(e[s],s,new Set);return r;function l(u,c,d){if(d.has(u)){var f;try{f=", node was:"+JSON.stringify(u)}catch{f=""}throw new Error("Cyclic dependency"+f)}if(!a.has(u))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(u));if(!i[c]){i[c]=!0;var g=o.get(u)||new Set;if(g=Array.from(g),c=g.length){d.add(u);do{var y=g[--c];l(y,a.get(y),d)}while(c);d.delete(u)}r[--n]=u}}}function CO(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var i=e[n];t.add(i[0]),t.add(i[1])}return Array.from(t)}function TO(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var i=e[n];t.has(i[0])||t.set(i[0],new Set),t.has(i[1])||t.set(i[1],new Set),t.get(i[0]).add(i[1])}return t}function bO(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}var kO=Mm.exports;const IO=Pp(kO),PO=Object.prototype.toString,OO=Error.prototype.toString,RO=RegExp.prototype.toString,NO=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",AO=/^Symbol\((.*)\)(.*)$/;function DO(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function zv(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return DO(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return NO.call(e).replace(AO,"Symbol($1)");const r=PO.call(e).slice(8,-1);return r==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):r==="Error"||e instanceof Error?"["+OO.call(e)+"]":r==="RegExp"?RO.call(e):null}function wr(e,t){let n=zv(e,t);return n!==null?n:JSON.stringify(e,function(r,i){let s=zv(this[r],t);return s!==null?s:i},2)}function Jx(e){return e==null?[]:[].concat(e)}let Zx,LO=/\$\{\s*(\w+)\s*\}/g;Zx=Symbol.toStringTag;class ht extends Error{static formatError(t,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof t=="string"?t.replace(LO,(i,s)=>wr(n[s])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,r,i,s){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this[Zx]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],Jx(t).forEach(o=>{if(ht.isError(o)){this.errors.push(...o.errors);const a=o.inner.length?o.inner:[o];this.inner.push(...a)}else this.errors.push(o)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],!s&&Error.captureStackTrace&&Error.captureStackTrace(this,ht)}}let mn={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${wr(r,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${wr(n,!0)}\``+i:`${e} must match the configured type. The validated value was: \`${wr(n,!0)}\``+i}},Xt={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},$O={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},Uh={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},FO={isValue:"${path} field must be ${value}"},Bh={noUnknown:"${path} field has unspecified keys: ${unknown}"},MO={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},jO={notType:e=>{const{path:t,value:n,spec:r}=e,i=r.types.length;if(Array.isArray(n)){if(n.length<i)return`${t} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${wr(n,!0)}\``;if(n.length>i)return`${t} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${wr(n,!0)}\``}return ht.formatError(mn.notType,e)}};Object.assign(Object.create(null),{mixed:mn,string:Xt,number:$O,date:Uh,object:Bh,array:MO,boolean:FO,tuple:jO});const jm=e=>e&&e.__isYupSchema__;class Nu{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:s}=n,o=typeof r=="function"?r:(...a)=>a.every(l=>l===r);return new Nu(t,(a,l)=>{var u;let c=o(...a)?i:s;return(u=c==null?void 0:c(l))!=null?u:l})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let r=this.refs.map(s=>s.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,t,n);if(i===void 0||i===t)return t;if(!jm(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const pl={context:"$",value:"."};class Ri{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===pl.context,this.isValue=this.key[0]===pl.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?pl.context:this.isValue?pl.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&ci.getter(this.path,!0),this.map=n.map}getValue(t,n,r){let i=this.isContext?r:this.isValue?t:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}Ri.prototype.__isYupRef=!0;const ri=e=>e==null;function zi(e){function t({value:n,path:r="",options:i,originalValue:s,schema:o},a,l){const{name:u,test:c,params:d,message:f,skipAbsent:g}=e;let{parent:y,context:_,abortEarly:w=o.spec.abortEarly,disableStackTrace:p=o.spec.disableStackTrace}=i;function h(B){return Ri.isRef(B)?B.getValue(n,y,_):B}function v(B={}){var Ye;const te=Object.assign({value:n,originalValue:s,label:o.spec.label,path:B.path||r,spec:o.spec},d,B.params);for(const Kt of Object.keys(te))te[Kt]=h(te[Kt]);const rt=new ht(ht.formatError(B.message||f,te),n,te.path,B.type||u,(Ye=B.disableStackTrace)!=null?Ye:p);return rt.params=te,rt}const x=w?a:l;let E={path:r,parent:y,type:u,from:i.from,createError:v,resolve:h,options:i,originalValue:s,schema:o};const C=B=>{ht.isError(B)?x(B):B?l(null):x(v())},S=B=>{ht.isError(B)?x(B):a(B)};if(g&&ri(n))return C(!0);let F;try{var $;if(F=c.call(E,n,E),typeof(($=F)==null?void 0:$.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${E.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(F).then(C,S)}}catch(B){S(B);return}C(F)}return t.OPTIONS=e,t}function zO(e,t,n,r=n){let i,s,o;return t?(ci.forEach(t,(a,l,u)=>{let c=l?a.slice(1,a.length-1):a;e=e.resolve({context:r,parent:i,value:n});let d=e.type==="tuple",f=u?parseInt(c,10):0;if(e.innerType||d){if(d&&!u)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);if(n&&f>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${t}. because there is no value at that index. `);i=n,n=n&&n[f],e=d?e.spec.types[f]:e.innerType}if(!u){if(!e.fields||!e.fields[c])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${o} which is a type: "${e.type}")`);i=n,n=n&&n[c],e=e.fields[c]}s=c,o=l?"["+a+"]":"."+a}),{schema:e,parent:i,parentPath:s}):{parent:i,parentPath:t,schema:e}}class Au extends Set{describe(){const t=[];for(const n of this.values())t.push(Ri.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const r of this.values())n.push(t(r));return n}clone(){return new Au(this.values())}merge(t,n){const r=this.clone();return t.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function rs(e,t=new Map){if(jm(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=rs(e[r],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[r,i]of e.entries())n.set(r,rs(i,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const r of e)n.add(rs(r,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[r,i]of Object.entries(e))n[r]=rs(i,t)}else throw Error(`Unable to clone ${e}`);return n}class Cn{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new Au,this._blacklist=new Au,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(mn.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=rs(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let r=t(this);return this._mutate=n,r}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,r=t.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),r._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(s=>{t.tests.forEach(o=>{s.test(o.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,s)=>s.resolve(i,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,r,i,s;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(r=t.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=t.recursive)!=null?i:this.spec.recursive,disableStackTrace:(s=t.disableStackTrace)!=null?s:this.spec.disableStackTrace})}cast(t,n={}){let r=this.resolve(Object.assign({value:t},n)),i=n.assert==="ignore-optionality",s=r._cast(t,n);if(n.assert!==!1&&!r.isType(s)){if(i&&ri(s))return s;let o=wr(t),a=wr(s);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${o} 
`+(a!==o?`result of cast: ${a}`:""))}return s}_cast(t,n){let r=t===void 0?t:this.transforms.reduce((i,s)=>s.call(this,i,t,this),t);return r===void 0&&(r=this.getDefault(n)),r}_validate(t,n={},r,i){let{path:s,originalValue:o=t,strict:a=this.spec.strict}=n,l=t;a||(l=this._cast(l,Object.assign({assert:!1},n)));let u=[];for(let c of Object.values(this.internalTests))c&&u.push(c);this.runTests({path:s,value:l,originalValue:o,options:n,tests:u},r,c=>{if(c.length)return i(c,l);this.runTests({path:s,value:l,originalValue:o,options:n,tests:this.tests},r,i)})}runTests(t,n,r){let i=!1,{tests:s,value:o,originalValue:a,path:l,options:u}=t,c=_=>{i||(i=!0,n(_,o))},d=_=>{i||(i=!0,r(_,o))},f=s.length,g=[];if(!f)return d([]);let y={value:o,originalValue:a,path:l,options:u,schema:this};for(let _=0;_<s.length;_++){const w=s[_];w(y,c,function(h){h&&(Array.isArray(h)?g.push(...h):g.push(h)),--f<=0&&d(g)})}}asNestedTest({key:t,index:n,parent:r,parentPath:i,originalParent:s,options:o}){const a=t??n;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof a=="number";let u=r[a];const c=Object.assign({},o,{strict:!0,parent:r,value:u,originalValue:s[a],key:void 0,[l?"index":"key"]:a,path:l||a.includes(".")?`${i||""}[${u?a:`"${a}"`}]`:(i?`${i}.`:"")+t});return(d,f,g)=>this.resolve(c)._validate(u,c,f,g)}validate(t,n){var r;let i=this.resolve(Object.assign({},n,{value:t})),s=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return new Promise((o,a)=>i._validate(t,n,(l,u)=>{ht.isError(l)&&(l.value=u),a(l)},(l,u)=>{l.length?a(new ht(l,u,void 0,void 0,s)):o(u)}))}validateSync(t,n){var r;let i=this.resolve(Object.assign({},n,{value:t})),s,o=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return i._validate(t,Object.assign({},n,{sync:!0}),(a,l)=>{throw ht.isError(a)&&(a.value=l),a},(a,l)=>{if(a.length)throw new ht(a,t,void 0,void 0,o);s=l}),s}isValid(t,n){return this.validate(t,n).then(()=>!0,r=>{if(ht.isError(r))return!1;throw r})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(r){if(ht.isError(r))return!1;throw r}}_getDefault(t){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,t):rs(n)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const r=this.clone({nullable:t});return r.internalTests.nullable=zi({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(t,n){const r=this.clone({optional:t});return r.internalTests.optionality=zi({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(t=mn.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=mn.notNull){return this.nullability(!1,t)}required(t=mn.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=mn.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=zi(n),s=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(o=>!(o.OPTIONS.name===n.name&&(s||o.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let r=this.clone(),i=Jx(t).map(s=>new Ri(s));return i.forEach(s=>{s.isSibling&&r.deps.push(s.key)}),r.conditions.push(typeof n=="function"?new Nu(i,n):Nu.fromOptions(i,n)),r}typeError(t){let n=this.clone();return n.internalTests.typeError=zi({message:t,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(t,n=mn.oneOf){let r=this.clone();return t.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=zi({message:n,name:"oneOf",skipAbsent:!0,test(i){let s=this.schema._whitelist,o=s.resolveAll(this.resolve);return o.includes(i)?!0:this.createError({params:{values:Array.from(s).join(", "),resolved:o}})}}),r}notOneOf(t,n=mn.notOneOf){let r=this.clone();return t.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=zi({message:n,name:"notOneOf",test(i){let s=this.schema._blacklist,o=s.resolveAll(this.resolve);return o.includes(i)?this.createError({params:{values:Array.from(s).join(", "),resolved:o}}):!0}}),r}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:r,meta:i,optional:s,nullable:o}=n.spec;return{meta:i,label:r,optional:s,nullable:o,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,u,c)=>c.findIndex(d=>d.name===l.name)===u)}}}Cn.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])Cn.prototype[`${e}At`]=function(t,n,r={}){const{parent:i,parentPath:s,schema:o}=zO(this,t,n,r.context);return o[e](i&&i[s],Object.assign({},r,{parent:i,path:t}))};for(const e of["equals","is"])Cn.prototype[e]=Cn.prototype.oneOf;for(const e of["not","nope"])Cn.prototype[e]=Cn.prototype.notOneOf;let UO=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,BO=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,VO=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,WO=e=>ri(e)||e===e.trim(),HO={}.toString();function jn(){return new eS}class eS extends Cn{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(!r.spec.coerce||r.isType(t)||Array.isArray(t))return t;const i=t!=null&&t.toString?t.toString():t;return i===HO?t:i})})}required(t){return super.required(t).withMutation(n=>n.test({message:t||mn.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(n=>n.OPTIONS.name!=="required"),t))}length(t,n=Xt.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(r){return r.length===this.resolve(t)}})}min(t,n=Xt.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r.length>=this.resolve(t)}})}max(t,n=Xt.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:t},skipAbsent:!0,test(r){return r.length<=this.resolve(t)}})}matches(t,n){let r=!1,i,s;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:s}=n:i=n),this.test({name:s||"matches",message:i||Xt.matches,params:{regex:t},skipAbsent:!0,test:o=>o===""&&r||o.search(t)!==-1})}email(t=Xt.email){return this.matches(UO,{name:"email",message:t,excludeEmptyString:!0})}url(t=Xt.url){return this.matches(BO,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=Xt.uuid){return this.matches(VO,{name:"uuid",message:t,excludeEmptyString:!1})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=Xt.trim){return this.transform(n=>n!=null?n.trim():n).test({message:t,name:"trim",test:WO})}lowercase(t=Xt.lowercase){return this.transform(n=>ri(n)?n:n.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>ri(n)||n===n.toLowerCase()})}uppercase(t=Xt.uppercase){return this.transform(n=>ri(n)?n:n.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>ri(n)||n===n.toUpperCase()})}}jn.prototype=eS.prototype;const GO=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function In(e,t=0){return Number(e)||t}function KO(e){const t=GO.exec(e);if(!t)return Date.parse?Date.parse(e):Number.NaN;const n={year:In(t[1]),month:In(t[2],1)-1,day:In(t[3],1),hour:In(t[4]),minute:In(t[5]),second:In(t[6]),millisecond:t[7]?In(t[7].substring(0,3)):0,z:t[8]||void 0,plusMinus:t[9]||void 0,hourOffset:In(t[10]),minuteOffset:In(t[11])};if(n.z===void 0&&n.plusMinus===void 0)return new Date(n.year,n.month,n.day,n.hour,n.minute,n.second,n.millisecond).valueOf();let r=0;return n.z!=="Z"&&n.plusMinus!==void 0&&(r=n.hourOffset*60+n.minuteOffset,n.plusMinus==="+"&&(r=0-r)),Date.UTC(n.year,n.month,n.day,n.hour,n.minute+r,n.second,n.millisecond)}let YO=new Date(""),qO=e=>Object.prototype.toString.call(e)==="[object Date]";class Lc extends Cn{constructor(){super({type:"date",check(t){return qO(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n,r)=>!r.spec.coerce||r.isType(t)||t===null?t:(t=KO(t),isNaN(t)?Lc.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let r;if(Ri.isRef(t))r=t;else{let i=this.cast(t);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(t,n=Uh.min){let r=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(t,n=Uh.max){let r=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}Lc.INVALID_DATE=YO;Lc.prototype;function QO(e,t=[]){let n=[],r=new Set,i=new Set(t.map(([o,a])=>`${o}-${a}`));function s(o,a){let l=ci.split(o)[0];r.add(l),i.has(`${a}-${l}`)||n.push([a,l])}for(const o of Object.keys(e)){let a=e[o];r.add(o),Ri.isRef(a)&&a.isSibling?s(a.path,o):jm(a)&&"deps"in a&&a.deps.forEach(l=>s(l,o))}return IO.array(Array.from(r),n).reverse()}function Uv(e,t){let n=1/0;return e.some((r,i)=>{var s;if((s=t.path)!=null&&s.includes(r))return n=i,!0}),n}function tS(e){return(t,n)=>Uv(e,t)-Uv(e,n)}const XO=(e,t,n)=>{if(typeof e!="string")return e;let r=e;try{r=JSON.parse(e)}catch{}return n.isType(r)?r:e};function Bl(e){if("fields"in e){const t={};for(const[n,r]of Object.entries(e.fields))t[n]=Bl(r);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=Bl(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(Bl)}):"optional"in e?e.optional():e}const JO=(e,t)=>{const n=[...ci.normalizePath(t)];if(n.length===1)return n[0]in e;let r=n.pop(),i=ci.getter(ci.join(n),!0)(e);return!!(i&&r in i)};let Bv=e=>Object.prototype.toString.call(e)==="[object Object]";function ZO(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter(r=>n.indexOf(r)===-1)}const eR=tS([]);function $c(e){return new nS(e)}class nS extends Cn{constructor(t){super({type:"object",check(n){return Bv(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=eR,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,n={}){var r;let i=super._cast(t,n);if(i===void 0)return this.getDefault(n);if(!this._typeCheck(i))return i;let s=this.fields,o=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(i).filter(d=>!this._nodes.includes(d))),l={},u=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),c=!1;for(const d of a){let f=s[d],g=d in i;if(f){let y,_=i[d];u.path=(n.path?`${n.path}.`:"")+d,f=f.resolve({value:_,context:n.context,parent:l});let w=f instanceof Cn?f.spec:void 0,p=w==null?void 0:w.strict;if(w!=null&&w.strip){c=c||d in i;continue}y=!n.__validating||!p?f.cast(i[d],u):i[d],y!==void 0&&(l[d]=y)}else g&&!o&&(l[d]=i[d]);(g!==d in l||l[d]!==i[d])&&(c=!0)}return c?l:i}_validate(t,n={},r,i){let{from:s=[],originalValue:o=t,recursive:a=this.spec.recursive}=n;n.from=[{schema:this,value:o},...s],n.__validating=!0,n.originalValue=o,super._validate(t,n,r,(l,u)=>{if(!a||!Bv(u)){i(l,u);return}o=o||u;let c=[];for(let d of this._nodes){let f=this.fields[d];!f||Ri.isRef(f)||c.push(f.asNestedTest({options:n,key:d,parent:u,parentPath:n.path,originalParent:o}))}this.runTests({tests:c,value:u,originalValue:o,options:n},r,d=>{i(d.sort(this._sortErrors).concat(l),u)})})}clone(t){const n=super.clone(t);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(t){let n=super.concat(t),r=n.fields;for(let[i,s]of Object.entries(this.fields)){const o=r[i];r[i]=o===void 0?s:o}return n.withMutation(i=>i.setFields(r,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var i;const s=this.fields[r];let o=t;(i=o)!=null&&i.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[r]})),n[r]=s&&"getDefault"in s?s.getDefault(o):void 0}),n}setFields(t,n){let r=this.clone();return r.fields=t,r._nodes=QO(t,n),r._sortErrors=tS(Object.keys(t)),n&&(r._excludedEdges=n),r}shape(t,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,t),i)})}partial(){const t={};for(const[n,r]of Object.entries(this.fields))t[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(t)}deepPartial(){return Bl(this)}pick(t){const n={};for(const r of t)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,i])=>t.includes(r)&&t.includes(i)))}omit(t){const n=[];for(const r of Object.keys(this.fields))t.includes(r)||n.push(r);return this.pick(n)}from(t,n,r){let i=ci.getter(t,!0);return this.transform(s=>{if(!s)return s;let o=s;return JO(s,t)&&(o=Object.assign({},s),r||delete o[t],o[n]=i(s)),o})}json(){return this.transform(XO)}noUnknown(t=!0,n=Bh.noUnknown){typeof t!="boolean"&&(n=t,t=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const s=ZO(this.schema,i);return!t||s.length===0||this.createError({params:{unknown:s.join(", ")}})}});return r.spec.noUnknown=t,r}unknown(t=!0,n=Bh.noUnknown){return this.noUnknown(!t,n)}transformKeys(t){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[t(i)]=n[i];return r})}camelCase(){return this.transformKeys(sf.camelCase)}snakeCase(){return this.transformKeys(sf.snakeCase)}constantCase(){return this.transformKeys(t=>sf.snakeCase(t).toUpperCase())}describe(t){const n=(t?this.resolve(t):this).clone(),r=super.describe(t);r.fields={};for(const[s,o]of Object.entries(n.fields)){var i;let a=t;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[s]})),r.fields[s]=o.describe(a)}return r}}$c.prototype=nS.prototype;const tR=L.form`
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
`,of=L.div`
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
`;const nR=L.h2`
  line-height: 1.2;
  letter-spacing: -0.8px;
  font-weight: 500;
  margin-bottom: 20px;
  color: var(--secondar);
  @media (min-width: 768px) {
    font-size: 40px;
  }
`,rR=L.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.38;
  margin-bottom: 40px;
  color: rgba(18, 20, 23, 0.8);
    @media (min-width: 768px) {
        width: 438px;
    }
`,af=L.p`
  margin-left: 15px;
  font-size: 12px;
  font-weight: 400;
  color: var(--red);
`,iR=L.button`
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
`,lf=L.input`
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
`,sR=L.button`
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
`,oR=L.button`
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
`;const aR=L.svg`
  stroke: var(--secondary);
  fill: none;
  width: 32px;
  height: 32px;
`,Vv=L.svg`
  stroke: var(--secondary);
  fill: none;
  display: inline-block;
  width: 24px;
  height: 24px;
`;var lR=function(t){return uR(t)&&!cR(t)};function uR(e){return!!e&&typeof e=="object"}function cR(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||hR(e)}var dR=typeof Symbol=="function"&&Symbol.for,fR=dR?Symbol.for("react.element"):60103;function hR(e){return e.$$typeof===fR}function pR(e){return Array.isArray(e)?[]:{}}function Du(e,t){return t.clone!==!1&&t.isMergeableObject(e)?sa(pR(e),e,t):e}function mR(e,t,n){return e.concat(t).map(function(r){return Du(r,n)})}function gR(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach(function(i){r[i]=Du(e[i],n)}),Object.keys(t).forEach(function(i){!n.isMergeableObject(t[i])||!e[i]?r[i]=Du(t[i],n):r[i]=sa(e[i],t[i],n)}),r}function sa(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||mR,n.isMergeableObject=n.isMergeableObject||lR;var r=Array.isArray(t),i=Array.isArray(e),s=r===i;return s?r?n.arrayMerge(e,t,n):gR(e,t,n):Du(t,n)}sa.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(r,i){return sa(r,i,n)},{})};var Vh=sa,yR=typeof global=="object"&&global&&global.Object===Object&&global;const rS=yR;var vR=typeof self=="object"&&self&&self.Object===Object&&self,_R=rS||vR||Function("return this")();const bn=_R;var wR=bn.Symbol;const Pr=wR;var iS=Object.prototype,xR=iS.hasOwnProperty,SR=iS.toString,so=Pr?Pr.toStringTag:void 0;function ER(e){var t=xR.call(e,so),n=e[so];try{e[so]=void 0;var r=!0}catch{}var i=SR.call(e);return r&&(t?e[so]=n:delete e[so]),i}var CR=Object.prototype,TR=CR.toString;function bR(e){return TR.call(e)}var kR="[object Null]",IR="[object Undefined]",Wv=Pr?Pr.toStringTag:void 0;function Ni(e){return e==null?e===void 0?IR:kR:Wv&&Wv in Object(e)?ER(e):bR(e)}function sS(e,t){return function(n){return e(t(n))}}var PR=sS(Object.getPrototypeOf,Object);const zm=PR;function Ai(e){return e!=null&&typeof e=="object"}var OR="[object Object]",RR=Function.prototype,NR=Object.prototype,oS=RR.toString,AR=NR.hasOwnProperty,DR=oS.call(Object);function Hv(e){if(!Ai(e)||Ni(e)!=OR)return!1;var t=zm(e);if(t===null)return!0;var n=AR.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&oS.call(n)==DR}var Gv=Array.isArray,Kv=Object.keys,LR=Object.prototype.hasOwnProperty,$R=typeof Element<"u";function Wh(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var n=Gv(e),r=Gv(t),i,s,o;if(n&&r){if(s=e.length,s!=t.length)return!1;for(i=s;i--!==0;)if(!Wh(e[i],t[i]))return!1;return!0}if(n!=r)return!1;var a=e instanceof Date,l=t instanceof Date;if(a!=l)return!1;if(a&&l)return e.getTime()==t.getTime();var u=e instanceof RegExp,c=t instanceof RegExp;if(u!=c)return!1;if(u&&c)return e.toString()==t.toString();var d=Kv(e);if(s=d.length,s!==Kv(t).length)return!1;for(i=s;i--!==0;)if(!LR.call(t,d[i]))return!1;if($R&&e instanceof Element&&t instanceof Element)return e===t;for(i=s;i--!==0;)if(o=d[i],!(o==="_owner"&&e.$$typeof)&&!Wh(e[o],t[o]))return!1;return!0}return e!==e&&t!==t}var FR=function(t,n){try{return Wh(t,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const Yr=Pp(FR);var MR=!0;function jR(e,t){if(!MR){if(e)return;var n="Warning: "+t;typeof console<"u"&&console.warn(n);try{throw Error(n)}catch{}}}function zR(){this.__data__=[],this.size=0}function aS(e,t){return e===t||e!==e&&t!==t}function Fc(e,t){for(var n=e.length;n--;)if(aS(e[n][0],t))return n;return-1}var UR=Array.prototype,BR=UR.splice;function VR(e){var t=this.__data__,n=Fc(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():BR.call(t,n,1),--this.size,!0}function WR(e){var t=this.__data__,n=Fc(t,e);return n<0?void 0:t[n][1]}function HR(e){return Fc(this.__data__,e)>-1}function GR(e,t){var n=this.__data__,r=Fc(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function qn(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}qn.prototype.clear=zR;qn.prototype.delete=VR;qn.prototype.get=WR;qn.prototype.has=HR;qn.prototype.set=GR;function KR(){this.__data__=new qn,this.size=0}function YR(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function qR(e){return this.__data__.get(e)}function QR(e){return this.__data__.has(e)}function La(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var XR="[object AsyncFunction]",JR="[object Function]",ZR="[object GeneratorFunction]",eN="[object Proxy]";function lS(e){if(!La(e))return!1;var t=Ni(e);return t==JR||t==ZR||t==XR||t==eN}var tN=bn["__core-js_shared__"];const uf=tN;var Yv=function(){var e=/[^.]+$/.exec(uf&&uf.keys&&uf.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function nN(e){return!!Yv&&Yv in e}var rN=Function.prototype,iN=rN.toString;function Di(e){if(e!=null){try{return iN.call(e)}catch{}try{return e+""}catch{}}return""}var sN=/[\\^$.*+?()[\]{}|]/g,oN=/^\[object .+?Constructor\]$/,aN=Function.prototype,lN=Object.prototype,uN=aN.toString,cN=lN.hasOwnProperty,dN=RegExp("^"+uN.call(cN).replace(sN,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function fN(e){if(!La(e)||nN(e))return!1;var t=lS(e)?dN:oN;return t.test(Di(e))}function hN(e,t){return e==null?void 0:e[t]}function Li(e,t){var n=hN(e,t);return fN(n)?n:void 0}var pN=Li(bn,"Map");const oa=pN;var mN=Li(Object,"create");const aa=mN;function gN(){this.__data__=aa?aa(null):{},this.size=0}function yN(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var vN="__lodash_hash_undefined__",_N=Object.prototype,wN=_N.hasOwnProperty;function xN(e){var t=this.__data__;if(aa){var n=t[e];return n===vN?void 0:n}return wN.call(t,e)?t[e]:void 0}var SN=Object.prototype,EN=SN.hasOwnProperty;function CN(e){var t=this.__data__;return aa?t[e]!==void 0:EN.call(t,e)}var TN="__lodash_hash_undefined__";function bN(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=aa&&t===void 0?TN:t,this}function _i(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}_i.prototype.clear=gN;_i.prototype.delete=yN;_i.prototype.get=xN;_i.prototype.has=CN;_i.prototype.set=bN;function kN(){this.size=0,this.__data__={hash:new _i,map:new(oa||qn),string:new _i}}function IN(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Mc(e,t){var n=e.__data__;return IN(t)?n[typeof t=="string"?"string":"hash"]:n.map}function PN(e){var t=Mc(this,e).delete(e);return this.size-=t?1:0,t}function ON(e){return Mc(this,e).get(e)}function RN(e){return Mc(this,e).has(e)}function NN(e,t){var n=Mc(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function Mr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Mr.prototype.clear=kN;Mr.prototype.delete=PN;Mr.prototype.get=ON;Mr.prototype.has=RN;Mr.prototype.set=NN;var AN=200;function DN(e,t){var n=this.__data__;if(n instanceof qn){var r=n.__data__;if(!oa||r.length<AN-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Mr(r)}return n.set(e,t),this.size=n.size,this}function Ws(e){var t=this.__data__=new qn(e);this.size=t.size}Ws.prototype.clear=KR;Ws.prototype.delete=YR;Ws.prototype.get=qR;Ws.prototype.has=QR;Ws.prototype.set=DN;function LN(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var $N=function(){try{var e=Li(Object,"defineProperty");return e({},"",{}),e}catch{}}();const qv=$N;function uS(e,t,n){t=="__proto__"&&qv?qv(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var FN=Object.prototype,MN=FN.hasOwnProperty;function cS(e,t,n){var r=e[t];(!(MN.call(e,t)&&aS(r,n))||n===void 0&&!(t in e))&&uS(e,t,n)}function jc(e,t,n,r){var i=!n;n||(n={});for(var s=-1,o=t.length;++s<o;){var a=t[s],l=r?r(n[a],e[a],a,n,e):void 0;l===void 0&&(l=e[a]),i?uS(n,a,l):cS(n,a,l)}return n}function jN(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var zN="[object Arguments]";function Qv(e){return Ai(e)&&Ni(e)==zN}var dS=Object.prototype,UN=dS.hasOwnProperty,BN=dS.propertyIsEnumerable,VN=Qv(function(){return arguments}())?Qv:function(e){return Ai(e)&&UN.call(e,"callee")&&!BN.call(e,"callee")};const WN=VN;var HN=Array.isArray;const $a=HN;function GN(){return!1}var fS=typeof bt=="object"&&bt&&!bt.nodeType&&bt,Xv=fS&&typeof kt=="object"&&kt&&!kt.nodeType&&kt,KN=Xv&&Xv.exports===fS,Jv=KN?bn.Buffer:void 0,YN=Jv?Jv.isBuffer:void 0,qN=YN||GN;const hS=qN;var QN=9007199254740991,XN=/^(?:0|[1-9]\d*)$/;function JN(e,t){var n=typeof e;return t=t??QN,!!t&&(n=="number"||n!="symbol"&&XN.test(e))&&e>-1&&e%1==0&&e<t}var ZN=9007199254740991;function pS(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=ZN}var e2="[object Arguments]",t2="[object Array]",n2="[object Boolean]",r2="[object Date]",i2="[object Error]",s2="[object Function]",o2="[object Map]",a2="[object Number]",l2="[object Object]",u2="[object RegExp]",c2="[object Set]",d2="[object String]",f2="[object WeakMap]",h2="[object ArrayBuffer]",p2="[object DataView]",m2="[object Float32Array]",g2="[object Float64Array]",y2="[object Int8Array]",v2="[object Int16Array]",_2="[object Int32Array]",w2="[object Uint8Array]",x2="[object Uint8ClampedArray]",S2="[object Uint16Array]",E2="[object Uint32Array]",pe={};pe[m2]=pe[g2]=pe[y2]=pe[v2]=pe[_2]=pe[w2]=pe[x2]=pe[S2]=pe[E2]=!0;pe[e2]=pe[t2]=pe[h2]=pe[n2]=pe[p2]=pe[r2]=pe[i2]=pe[s2]=pe[o2]=pe[a2]=pe[l2]=pe[u2]=pe[c2]=pe[d2]=pe[f2]=!1;function C2(e){return Ai(e)&&pS(e.length)&&!!pe[Ni(e)]}function Um(e){return function(t){return e(t)}}var mS=typeof bt=="object"&&bt&&!bt.nodeType&&bt,No=mS&&typeof kt=="object"&&kt&&!kt.nodeType&&kt,T2=No&&No.exports===mS,cf=T2&&rS.process,b2=function(){try{var e=No&&No.require&&No.require("util").types;return e||cf&&cf.binding&&cf.binding("util")}catch{}}();const Ps=b2;var Zv=Ps&&Ps.isTypedArray,k2=Zv?Um(Zv):C2;const I2=k2;var P2=Object.prototype,O2=P2.hasOwnProperty;function gS(e,t){var n=$a(e),r=!n&&WN(e),i=!n&&!r&&hS(e),s=!n&&!r&&!i&&I2(e),o=n||r||i||s,a=o?jN(e.length,String):[],l=a.length;for(var u in e)(t||O2.call(e,u))&&!(o&&(u=="length"||i&&(u=="offset"||u=="parent")||s&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||JN(u,l)))&&a.push(u);return a}var R2=Object.prototype;function Bm(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||R2;return e===n}var N2=sS(Object.keys,Object);const A2=N2;var D2=Object.prototype,L2=D2.hasOwnProperty;function $2(e){if(!Bm(e))return A2(e);var t=[];for(var n in Object(e))L2.call(e,n)&&n!="constructor"&&t.push(n);return t}function yS(e){return e!=null&&pS(e.length)&&!lS(e)}function Vm(e){return yS(e)?gS(e):$2(e)}function F2(e,t){return e&&jc(t,Vm(t),e)}function M2(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var j2=Object.prototype,z2=j2.hasOwnProperty;function U2(e){if(!La(e))return M2(e);var t=Bm(e),n=[];for(var r in e)r=="constructor"&&(t||!z2.call(e,r))||n.push(r);return n}function Wm(e){return yS(e)?gS(e,!0):U2(e)}function B2(e,t){return e&&jc(t,Wm(t),e)}var vS=typeof bt=="object"&&bt&&!bt.nodeType&&bt,e0=vS&&typeof kt=="object"&&kt&&!kt.nodeType&&kt,V2=e0&&e0.exports===vS,t0=V2?bn.Buffer:void 0,n0=t0?t0.allocUnsafe:void 0;function W2(e,t){if(t)return e.slice();var n=e.length,r=n0?n0(n):new e.constructor(n);return e.copy(r),r}function _S(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}function H2(e,t){for(var n=-1,r=e==null?0:e.length,i=0,s=[];++n<r;){var o=e[n];t(o,n,e)&&(s[i++]=o)}return s}function wS(){return[]}var G2=Object.prototype,K2=G2.propertyIsEnumerable,r0=Object.getOwnPropertySymbols,Y2=r0?function(e){return e==null?[]:(e=Object(e),H2(r0(e),function(t){return K2.call(e,t)}))}:wS;const Hm=Y2;function q2(e,t){return jc(e,Hm(e),t)}function xS(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var Q2=Object.getOwnPropertySymbols,X2=Q2?function(e){for(var t=[];e;)xS(t,Hm(e)),e=zm(e);return t}:wS;const SS=X2;function J2(e,t){return jc(e,SS(e),t)}function ES(e,t,n){var r=t(e);return $a(e)?r:xS(r,n(e))}function Z2(e){return ES(e,Vm,Hm)}function eA(e){return ES(e,Wm,SS)}var tA=Li(bn,"DataView");const Hh=tA;var nA=Li(bn,"Promise");const Gh=nA;var rA=Li(bn,"Set");const Kh=rA;var iA=Li(bn,"WeakMap");const Yh=iA;var i0="[object Map]",sA="[object Object]",s0="[object Promise]",o0="[object Set]",a0="[object WeakMap]",l0="[object DataView]",oA=Di(Hh),aA=Di(oa),lA=Di(Gh),uA=Di(Kh),cA=Di(Yh),qr=Ni;(Hh&&qr(new Hh(new ArrayBuffer(1)))!=l0||oa&&qr(new oa)!=i0||Gh&&qr(Gh.resolve())!=s0||Kh&&qr(new Kh)!=o0||Yh&&qr(new Yh)!=a0)&&(qr=function(e){var t=Ni(e),n=t==sA?e.constructor:void 0,r=n?Di(n):"";if(r)switch(r){case oA:return l0;case aA:return i0;case lA:return s0;case uA:return o0;case cA:return a0}return t});const Gm=qr;var dA=Object.prototype,fA=dA.hasOwnProperty;function hA(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&fA.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var pA=bn.Uint8Array;const u0=pA;function Km(e){var t=new e.constructor(e.byteLength);return new u0(t).set(new u0(e)),t}function mA(e,t){var n=t?Km(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var gA=/\w*$/;function yA(e){var t=new e.constructor(e.source,gA.exec(e));return t.lastIndex=e.lastIndex,t}var c0=Pr?Pr.prototype:void 0,d0=c0?c0.valueOf:void 0;function vA(e){return d0?Object(d0.call(e)):{}}function _A(e,t){var n=t?Km(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var wA="[object Boolean]",xA="[object Date]",SA="[object Map]",EA="[object Number]",CA="[object RegExp]",TA="[object Set]",bA="[object String]",kA="[object Symbol]",IA="[object ArrayBuffer]",PA="[object DataView]",OA="[object Float32Array]",RA="[object Float64Array]",NA="[object Int8Array]",AA="[object Int16Array]",DA="[object Int32Array]",LA="[object Uint8Array]",$A="[object Uint8ClampedArray]",FA="[object Uint16Array]",MA="[object Uint32Array]";function jA(e,t,n){var r=e.constructor;switch(t){case IA:return Km(e);case wA:case xA:return new r(+e);case PA:return mA(e,n);case OA:case RA:case NA:case AA:case DA:case LA:case $A:case FA:case MA:return _A(e,n);case SA:return new r;case EA:case bA:return new r(e);case CA:return yA(e);case TA:return new r;case kA:return vA(e)}}var f0=Object.create,zA=function(){function e(){}return function(t){if(!La(t))return{};if(f0)return f0(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const UA=zA;function BA(e){return typeof e.constructor=="function"&&!Bm(e)?UA(zm(e)):{}}var VA="[object Map]";function WA(e){return Ai(e)&&Gm(e)==VA}var h0=Ps&&Ps.isMap,HA=h0?Um(h0):WA;const GA=HA;var KA="[object Set]";function YA(e){return Ai(e)&&Gm(e)==KA}var p0=Ps&&Ps.isSet,qA=p0?Um(p0):YA;const QA=qA;var XA=1,JA=2,ZA=4,CS="[object Arguments]",eD="[object Array]",tD="[object Boolean]",nD="[object Date]",rD="[object Error]",TS="[object Function]",iD="[object GeneratorFunction]",sD="[object Map]",oD="[object Number]",bS="[object Object]",aD="[object RegExp]",lD="[object Set]",uD="[object String]",cD="[object Symbol]",dD="[object WeakMap]",fD="[object ArrayBuffer]",hD="[object DataView]",pD="[object Float32Array]",mD="[object Float64Array]",gD="[object Int8Array]",yD="[object Int16Array]",vD="[object Int32Array]",_D="[object Uint8Array]",wD="[object Uint8ClampedArray]",xD="[object Uint16Array]",SD="[object Uint32Array]",ue={};ue[CS]=ue[eD]=ue[fD]=ue[hD]=ue[tD]=ue[nD]=ue[pD]=ue[mD]=ue[gD]=ue[yD]=ue[vD]=ue[sD]=ue[oD]=ue[bS]=ue[aD]=ue[lD]=ue[uD]=ue[cD]=ue[_D]=ue[wD]=ue[xD]=ue[SD]=!0;ue[rD]=ue[TS]=ue[dD]=!1;function Vl(e,t,n,r,i,s){var o,a=t&XA,l=t&JA,u=t&ZA;if(n&&(o=i?n(e,r,i,s):n(e)),o!==void 0)return o;if(!La(e))return e;var c=$a(e);if(c){if(o=hA(e),!a)return _S(e,o)}else{var d=Gm(e),f=d==TS||d==iD;if(hS(e))return W2(e,a);if(d==bS||d==CS||f&&!i){if(o=l||f?{}:BA(e),!a)return l?J2(e,B2(o,e)):q2(e,F2(o,e))}else{if(!ue[d])return i?e:{};o=jA(e,d,a)}}s||(s=new Ws);var g=s.get(e);if(g)return g;s.set(e,o),QA(e)?e.forEach(function(w){o.add(Vl(w,t,n,w,e,s))}):GA(e)&&e.forEach(function(w,p){o.set(p,Vl(w,t,n,p,e,s))});var y=u?l?eA:Z2:l?Wm:Vm,_=c?void 0:y(e);return LN(_||e,function(w,p){_&&(p=w,w=e[p]),cS(o,p,Vl(w,t,n,p,e,s))}),o}var ED=4;function m0(e){return Vl(e,ED)}function kS(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var CD="[object Symbol]";function Ym(e){return typeof e=="symbol"||Ai(e)&&Ni(e)==CD}var TD="Expected a function";function qm(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(TD);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=e.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(qm.Cache||Mr),n}qm.Cache=Mr;var bD=500;function kD(e){var t=qm(e,function(r){return n.size===bD&&n.clear(),r}),n=t.cache;return t}var ID=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,PD=/\\(\\)?/g,OD=kD(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(ID,function(n,r,i,s){t.push(i?s.replace(PD,"$1"):r||n)}),t});const RD=OD;var ND=1/0;function AD(e){if(typeof e=="string"||Ym(e))return e;var t=e+"";return t=="0"&&1/e==-ND?"-0":t}var DD=1/0,g0=Pr?Pr.prototype:void 0,y0=g0?g0.toString:void 0;function IS(e){if(typeof e=="string")return e;if($a(e))return kS(e,IS)+"";if(Ym(e))return y0?y0.call(e):"";var t=e+"";return t=="0"&&1/e==-DD?"-0":t}function LD(e){return e==null?"":IS(e)}function PS(e){return $a(e)?kS(e,AD):Ym(e)?[e]:_S(RD(LD(e)))}var OS={exports:{}},oe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ze=typeof Symbol=="function"&&Symbol.for,Qm=ze?Symbol.for("react.element"):60103,Xm=ze?Symbol.for("react.portal"):60106,zc=ze?Symbol.for("react.fragment"):60107,Uc=ze?Symbol.for("react.strict_mode"):60108,Bc=ze?Symbol.for("react.profiler"):60114,Vc=ze?Symbol.for("react.provider"):60109,Wc=ze?Symbol.for("react.context"):60110,Jm=ze?Symbol.for("react.async_mode"):60111,Hc=ze?Symbol.for("react.concurrent_mode"):60111,Gc=ze?Symbol.for("react.forward_ref"):60112,Kc=ze?Symbol.for("react.suspense"):60113,$D=ze?Symbol.for("react.suspense_list"):60120,Yc=ze?Symbol.for("react.memo"):60115,qc=ze?Symbol.for("react.lazy"):60116,FD=ze?Symbol.for("react.block"):60121,MD=ze?Symbol.for("react.fundamental"):60117,jD=ze?Symbol.for("react.responder"):60118,zD=ze?Symbol.for("react.scope"):60119;function $t(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Qm:switch(e=e.type,e){case Jm:case Hc:case zc:case Bc:case Uc:case Kc:return e;default:switch(e=e&&e.$$typeof,e){case Wc:case Gc:case qc:case Yc:case Vc:return e;default:return t}}case Xm:return t}}}function RS(e){return $t(e)===Hc}oe.AsyncMode=Jm;oe.ConcurrentMode=Hc;oe.ContextConsumer=Wc;oe.ContextProvider=Vc;oe.Element=Qm;oe.ForwardRef=Gc;oe.Fragment=zc;oe.Lazy=qc;oe.Memo=Yc;oe.Portal=Xm;oe.Profiler=Bc;oe.StrictMode=Uc;oe.Suspense=Kc;oe.isAsyncMode=function(e){return RS(e)||$t(e)===Jm};oe.isConcurrentMode=RS;oe.isContextConsumer=function(e){return $t(e)===Wc};oe.isContextProvider=function(e){return $t(e)===Vc};oe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qm};oe.isForwardRef=function(e){return $t(e)===Gc};oe.isFragment=function(e){return $t(e)===zc};oe.isLazy=function(e){return $t(e)===qc};oe.isMemo=function(e){return $t(e)===Yc};oe.isPortal=function(e){return $t(e)===Xm};oe.isProfiler=function(e){return $t(e)===Bc};oe.isStrictMode=function(e){return $t(e)===Uc};oe.isSuspense=function(e){return $t(e)===Kc};oe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===zc||e===Hc||e===Bc||e===Uc||e===Kc||e===$D||typeof e=="object"&&e!==null&&(e.$$typeof===qc||e.$$typeof===Yc||e.$$typeof===Vc||e.$$typeof===Wc||e.$$typeof===Gc||e.$$typeof===MD||e.$$typeof===jD||e.$$typeof===zD||e.$$typeof===FD)};oe.typeOf=$t;OS.exports=oe;var UD=OS.exports,NS=UD,BD={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},VD={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},AS={};AS[NS.ForwardRef]=BD;AS[NS.Memo]=VD;function De(){return De=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},De.apply(this,arguments)}function DS(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var Qc=T.createContext(void 0);Qc.displayName="FormikContext";Qc.Provider;Qc.Consumer;function WD(){var e=T.useContext(Qc);return e||jR(!1),e}var Jt=function(t){return typeof t=="function"},Xc=function(t){return t!==null&&typeof t=="object"},HD=function(t){return String(Math.floor(Number(t)))===t},df=function(t){return Object.prototype.toString.call(t)==="[object String]"},ff=function(t){return Xc(t)&&Jt(t.then)};function St(e,t,n,r){r===void 0&&(r=0);for(var i=PS(t);e&&r<i.length;)e=e[i[r++]];return r!==i.length&&!e||e===void 0?n:e}function di(e,t,n){for(var r=m0(e),i=r,s=0,o=PS(t);s<o.length-1;s++){var a=o[s],l=St(e,o.slice(0,s+1));if(l&&(Xc(l)||Array.isArray(l)))i=i[a]=m0(l);else{var u=o[s+1];i=i[a]=HD(u)&&Number(u)>=0?[]:{}}}return(s===0?e:i)[o[s]]===n?e:(n===void 0?delete i[o[s]]:i[o[s]]=n,s===0&&n===void 0&&delete r[o[s]],r)}function LS(e,t,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var i=0,s=Object.keys(e);i<s.length;i++){var o=s[i],a=e[o];Xc(a)?n.get(a)||(n.set(a,!0),r[o]=Array.isArray(a)?[]:{},LS(a,t,n,r[o])):r[o]=t}return r}function GD(e,t){switch(t.type){case"SET_VALUES":return De({},e,{values:t.payload});case"SET_TOUCHED":return De({},e,{touched:t.payload});case"SET_ERRORS":return Yr(e.errors,t.payload)?e:De({},e,{errors:t.payload});case"SET_STATUS":return De({},e,{status:t.payload});case"SET_ISSUBMITTING":return De({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return De({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return De({},e,{values:di(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return De({},e,{touched:di(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return De({},e,{errors:di(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return De({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return De({},e,{touched:LS(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return De({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return De({},e,{isSubmitting:!1});default:return e}}var Wr={},ml={};function Zm(e){var t=e.validateOnChange,n=t===void 0?!0:t,r=e.validateOnBlur,i=r===void 0?!0:r,s=e.validateOnMount,o=s===void 0?!1:s,a=e.isInitialValid,l=e.enableReinitialize,u=l===void 0?!1:l,c=e.onSubmit,d=DS(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=De({validateOnChange:n,validateOnBlur:i,validateOnMount:o,onSubmit:c},d),g=T.useRef(f.initialValues),y=T.useRef(f.initialErrors||Wr),_=T.useRef(f.initialTouched||ml),w=T.useRef(f.initialStatus),p=T.useRef(!1),h=T.useRef({});T.useEffect(function(){return p.current=!0,function(){p.current=!1}},[]);var v=T.useState(0),x=v[1],E=T.useRef({values:f.initialValues,errors:f.initialErrors||Wr,touched:f.initialTouched||ml,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),C=E.current,S=T.useCallback(function(b){var N=E.current;E.current=GD(N,b),N!==E.current&&x(function(D){return D+1})},[]),P=T.useCallback(function(b,N){return new Promise(function(D,M){var W=f.validate(b,N);W==null?D(Wr):ff(W)?W.then(function(ie){D(ie||Wr)},function(ie){M(ie)}):D(W)})},[f.validate]),F=T.useCallback(function(b,N){var D=f.validationSchema,M=Jt(D)?D(N):D,W=N&&M.validateAt?M.validateAt(N,b):YD(b,M);return new Promise(function(ie,Ae){W.then(function(){ie(Wr)},function(kn){kn.name==="ValidationError"?ie(KD(kn)):Ae(kn)})})},[f.validationSchema]),$=T.useCallback(function(b,N){return new Promise(function(D){return D(h.current[b].validate(N))})},[]),B=T.useCallback(function(b){var N=Object.keys(h.current).filter(function(M){return Jt(h.current[M].validate)}),D=N.length>0?N.map(function(M){return $(M,St(b,M))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(D).then(function(M){return M.reduce(function(W,ie,Ae){return ie==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||ie&&(W=di(W,N[Ae],ie)),W},{})})},[$]),Ye=T.useCallback(function(b){return Promise.all([B(b),f.validationSchema?F(b):{},f.validate?P(b):{}]).then(function(N){var D=N[0],M=N[1],W=N[2],ie=Vh.all([D,M,W],{arrayMerge:qD});return ie})},[f.validate,f.validationSchema,B,P,F]),te=Mt(function(b){return b===void 0&&(b=C.values),S({type:"SET_ISVALIDATING",payload:!0}),Ye(b).then(function(N){return p.current&&(S({type:"SET_ISVALIDATING",payload:!1}),S({type:"SET_ERRORS",payload:N})),N})});T.useEffect(function(){o&&p.current===!0&&Yr(g.current,f.initialValues)&&te(g.current)},[o,te]);var rt=T.useCallback(function(b){var N=b&&b.values?b.values:g.current,D=b&&b.errors?b.errors:y.current?y.current:f.initialErrors||{},M=b&&b.touched?b.touched:_.current?_.current:f.initialTouched||{},W=b&&b.status?b.status:w.current?w.current:f.initialStatus;g.current=N,y.current=D,_.current=M,w.current=W;var ie=function(){S({type:"RESET_FORM",payload:{isSubmitting:!!b&&!!b.isSubmitting,errors:D,touched:M,status:W,values:N,isValidating:!!b&&!!b.isValidating,submitCount:b&&b.submitCount&&typeof b.submitCount=="number"?b.submitCount:0}})};if(f.onReset){var Ae=f.onReset(C.values,ny);ff(Ae)?Ae.then(ie):ie()}else ie()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);T.useEffect(function(){p.current===!0&&!Yr(g.current,f.initialValues)&&u&&(g.current=f.initialValues,rt(),o&&te(g.current))},[u,f.initialValues,rt,o,te]),T.useEffect(function(){u&&p.current===!0&&!Yr(y.current,f.initialErrors)&&(y.current=f.initialErrors||Wr,S({type:"SET_ERRORS",payload:f.initialErrors||Wr}))},[u,f.initialErrors]),T.useEffect(function(){u&&p.current===!0&&!Yr(_.current,f.initialTouched)&&(_.current=f.initialTouched||ml,S({type:"SET_TOUCHED",payload:f.initialTouched||ml}))},[u,f.initialTouched]),T.useEffect(function(){u&&p.current===!0&&!Yr(w.current,f.initialStatus)&&(w.current=f.initialStatus,S({type:"SET_STATUS",payload:f.initialStatus}))},[u,f.initialStatus,f.initialTouched]);var Kt=Mt(function(b){if(h.current[b]&&Jt(h.current[b].validate)){var N=St(C.values,b),D=h.current[b].validate(N);return ff(D)?(S({type:"SET_ISVALIDATING",payload:!0}),D.then(function(M){return M}).then(function(M){S({type:"SET_FIELD_ERROR",payload:{field:b,value:M}}),S({type:"SET_ISVALIDATING",payload:!1})})):(S({type:"SET_FIELD_ERROR",payload:{field:b,value:D}}),Promise.resolve(D))}else if(f.validationSchema)return S({type:"SET_ISVALIDATING",payload:!0}),F(C.values,b).then(function(M){return M}).then(function(M){S({type:"SET_FIELD_ERROR",payload:{field:b,value:St(M,b)}}),S({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Yt=T.useCallback(function(b,N){var D=N.validate;h.current[b]={validate:D}},[]),ve=T.useCallback(function(b){delete h.current[b]},[]),R=Mt(function(b,N){S({type:"SET_TOUCHED",payload:b});var D=N===void 0?i:N;return D?te(C.values):Promise.resolve()}),j=T.useCallback(function(b){S({type:"SET_ERRORS",payload:b})},[]),z=Mt(function(b,N){var D=Jt(b)?b(C.values):b;S({type:"SET_VALUES",payload:D});var M=N===void 0?n:N;return M?te(D):Promise.resolve()}),ne=T.useCallback(function(b,N){S({type:"SET_FIELD_ERROR",payload:{field:b,value:N}})},[]),re=Mt(function(b,N,D){S({type:"SET_FIELD_VALUE",payload:{field:b,value:N}});var M=D===void 0?n:D;return M?te(di(C.values,b,N)):Promise.resolve()}),Ft=T.useCallback(function(b,N){var D=N,M=b,W;if(!df(b)){b.persist&&b.persist();var ie=b.target?b.target:b.currentTarget,Ae=ie.type,kn=ie.name,Sd=ie.id,Ed=ie.value,ET=ie.checked,hU=ie.outerHTML,ry=ie.options,CT=ie.multiple;D=N||kn||Sd,M=/number|range/.test(Ae)?(W=parseFloat(Ed),isNaN(W)?"":W):/checkbox/.test(Ae)?XD(St(C.values,D),ET,Ed):ry&&CT?QD(ry):Ed}D&&re(D,M)},[re,C.values]),Ue=Mt(function(b){if(df(b))return function(N){return Ft(N,b)};Ft(b)}),it=Mt(function(b,N,D){N===void 0&&(N=!0),S({type:"SET_FIELD_TOUCHED",payload:{field:b,value:N}});var M=D===void 0?i:D;return M?te(C.values):Promise.resolve()}),qe=T.useCallback(function(b,N){b.persist&&b.persist();var D=b.target,M=D.name,W=D.id,ie=D.outerHTML,Ae=N||M||W;it(Ae,!0)},[it]),Qe=Mt(function(b){if(df(b))return function(N){return qe(N,b)};qe(b)}),Fi=T.useCallback(function(b){Jt(b)?S({type:"SET_FORMIK_STATE",payload:b}):S({type:"SET_FORMIK_STATE",payload:function(){return b}})},[]),Vr=T.useCallback(function(b){S({type:"SET_STATUS",payload:b})},[]),qt=T.useCallback(function(b){S({type:"SET_ISSUBMITTING",payload:b})},[]),wd=Mt(function(){return S({type:"SUBMIT_ATTEMPT"}),te().then(function(b){var N=b instanceof Error,D=!N&&Object.keys(b).length===0;if(D){var M;try{if(M=gT(),M===void 0)return}catch(W){throw W}return Promise.resolve(M).then(function(W){return p.current&&S({type:"SUBMIT_SUCCESS"}),W}).catch(function(W){if(p.current)throw S({type:"SUBMIT_FAILURE"}),W})}else if(p.current&&(S({type:"SUBMIT_FAILURE"}),N))throw b})}),mT=Mt(function(b){b&&b.preventDefault&&Jt(b.preventDefault)&&b.preventDefault(),b&&b.stopPropagation&&Jt(b.stopPropagation)&&b.stopPropagation(),wd().catch(function(N){console.warn("Warning: An unhandled error was caught from submitForm()",N)})}),ny={resetForm:rt,validateForm:te,validateField:Kt,setErrors:j,setFieldError:ne,setFieldTouched:it,setFieldValue:re,setStatus:Vr,setSubmitting:qt,setTouched:R,setValues:z,setFormikState:Fi,submitForm:wd},gT=Mt(function(){return c(C.values,ny)}),yT=Mt(function(b){b&&b.preventDefault&&Jt(b.preventDefault)&&b.preventDefault(),b&&b.stopPropagation&&Jt(b.stopPropagation)&&b.stopPropagation(),rt()}),vT=T.useCallback(function(b){return{value:St(C.values,b),error:St(C.errors,b),touched:!!St(C.touched,b),initialValue:St(g.current,b),initialTouched:!!St(_.current,b),initialError:St(y.current,b)}},[C.errors,C.touched,C.values]),_T=T.useCallback(function(b){return{setValue:function(D,M){return re(b,D,M)},setTouched:function(D,M){return it(b,D,M)},setError:function(D){return ne(b,D)}}},[re,it,ne]),wT=T.useCallback(function(b){var N=Xc(b),D=N?b.name:b,M=St(C.values,D),W={name:D,value:M,onChange:Ue,onBlur:Qe};if(N){var ie=b.type,Ae=b.value,kn=b.as,Sd=b.multiple;ie==="checkbox"?Ae===void 0?W.checked=!!M:(W.checked=!!(Array.isArray(M)&&~M.indexOf(Ae)),W.value=Ae):ie==="radio"?(W.checked=M===Ae,W.value=Ae):kn==="select"&&Sd&&(W.value=W.value||[],W.multiple=!0)}return W},[Qe,Ue,C.values]),xd=T.useMemo(function(){return!Yr(g.current,C.values)},[g.current,C.values]),xT=T.useMemo(function(){return typeof a<"u"?xd?C.errors&&Object.keys(C.errors).length===0:a!==!1&&Jt(a)?a(f):a:C.errors&&Object.keys(C.errors).length===0},[a,xd,C.errors,f]),ST=De({},C,{initialValues:g.current,initialErrors:y.current,initialTouched:_.current,initialStatus:w.current,handleBlur:Qe,handleChange:Ue,handleReset:yT,handleSubmit:mT,resetForm:rt,setErrors:j,setFormikState:Fi,setFieldTouched:it,setFieldValue:re,setFieldError:ne,setStatus:Vr,setSubmitting:qt,setTouched:R,setValues:z,submitForm:wd,validateForm:te,validateField:Kt,isValid:xT,dirty:xd,unregisterField:ve,registerField:Yt,getFieldProps:wT,getFieldMeta:vT,getFieldHelpers:_T,validateOnBlur:i,validateOnChange:n,validateOnMount:o});return ST}function KD(e){var t={};if(e.inner){if(e.inner.length===0)return di(t,e.path,e.message);for(var i=e.inner,n=Array.isArray(i),r=0,i=n?i:i[Symbol.iterator]();;){var s;if(n){if(r>=i.length)break;s=i[r++]}else{if(r=i.next(),r.done)break;s=r.value}var o=s;St(t,o.path)||(t=di(t,o.path,o.message))}}return t}function YD(e,t,n,r){n===void 0&&(n=!1);var i=qh(e);return t[n?"validateSync":"validate"](i,{abortEarly:!1,context:r||i})}function qh(e){var t=Array.isArray(e)?[]:{};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=String(n);Array.isArray(e[r])===!0?t[r]=e[r].map(function(i){return Array.isArray(i)===!0||Hv(i)?qh(i):i!==""?i:void 0}):Hv(e[r])?t[r]=qh(e[r]):t[r]=e[r]!==""?e[r]:void 0}return t}function qD(e,t,n){var r=e.slice();return t.forEach(function(s,o){if(typeof r[o]>"u"){var a=n.clone!==!1,l=a&&n.isMergeableObject(s);r[o]=l?Vh(Array.isArray(s)?[]:{},s,n):s}else n.isMergeableObject(s)?r[o]=Vh(e[o],s,n):e.indexOf(s)===-1&&r.push(s)}),r}function QD(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function XD(e,t,n){if(typeof e=="boolean")return!!t;var r=[],i=!1,s=-1;if(Array.isArray(e))r=e,s=e.indexOf(n),i=s>=0;else if(!n||n=="true"||n=="false")return!!t;return t&&n&&!i?r.concat(n):i?r.slice(0,s).concat(r.slice(s+1)):r}var JD=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?T.useLayoutEffect:T.useEffect;function Mt(e){var t=T.useRef(e);return JD(function(){t.current=e}),T.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.current.apply(void 0,r)},[])}var ZD=T.forwardRef(function(e,t){var n=e.action,r=DS(e,["action"]),i=n??"#",s=WD(),o=s.handleReset,a=s.handleSubmit;return T.createElement("form",De({onSubmit:a,ref:t,onReset:o,action:i},r))});ZD.displayName="Form";const ut="/Learn-Lingo/assets/sprite-eb170aab.svg";function Be(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var eL=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),v0=eL,hf=()=>Math.random().toString(36).substring(7).split("").join("."),tL={INIT:`@@redux/INIT${hf()}`,REPLACE:`@@redux/REPLACE${hf()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${hf()}`},Lu=tL;function eg(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function tg(e,t,n){if(typeof e!="function")throw new Error(Be(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Be(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Be(1));return n(tg)(e,t)}let r=e,i=t,s=new Map,o=s,a=0,l=!1;function u(){o===s&&(o=new Map,s.forEach((w,p)=>{o.set(p,w)}))}function c(){if(l)throw new Error(Be(3));return i}function d(w){if(typeof w!="function")throw new Error(Be(4));if(l)throw new Error(Be(5));let p=!0;u();const h=a++;return o.set(h,w),function(){if(p){if(l)throw new Error(Be(6));p=!1,u(),o.delete(h),s=null}}}function f(w){if(!eg(w))throw new Error(Be(7));if(typeof w.type>"u")throw new Error(Be(8));if(typeof w.type!="string")throw new Error(Be(17));if(l)throw new Error(Be(9));try{l=!0,i=r(i,w)}finally{l=!1}return(s=o).forEach(h=>{h()}),w}function g(w){if(typeof w!="function")throw new Error(Be(10));r=w,f({type:Lu.REPLACE})}function y(){const w=d;return{subscribe(p){if(typeof p!="object"||p===null)throw new Error(Be(11));function h(){const x=p;x.next&&x.next(c())}return h(),{unsubscribe:w(h)}},[v0](){return this}}}return f({type:Lu.INIT}),{dispatch:f,subscribe:d,getState:c,replaceReducer:g,[v0]:y}}function nL(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Lu.INIT})>"u")throw new Error(Be(12));if(typeof n(void 0,{type:Lu.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Be(13))})}function $S(e){const t=Object.keys(e),n={};for(let s=0;s<t.length;s++){const o=t[s];typeof e[o]=="function"&&(n[o]=e[o])}const r=Object.keys(n);let i;try{nL(n)}catch(s){i=s}return function(o={},a){if(i)throw i;let l=!1;const u={};for(let c=0;c<r.length;c++){const d=r[c],f=n[d],g=o[d],y=f(g,a);if(typeof y>"u")throw a&&a.type,new Error(Be(14));u[d]=y,l=l||y!==g}return l=l||r.length!==Object.keys(o).length,l?u:o}}function $u(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function rL(...e){return t=>(n,r)=>{const i=t(n,r);let s=()=>{throw new Error(Be(15))};const o={getState:i.getState,dispatch:(l,...u)=>s(l,...u)},a=e.map(l=>l(o));return s=$u(...a)(i.dispatch),{...i,dispatch:s}}}function iL(e){return eg(e)&&"type"in e&&typeof e.type=="string"}var FS=Symbol.for("immer-nothing"),_0=Symbol.for("immer-draftable"),Nt=Symbol.for("immer-state");function nn(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Os=Object.getPrototypeOf;function Or(e){return!!e&&!!e[Nt]}function Hn(e){var t;return e?MS(e)||Array.isArray(e)||!!e[_0]||!!((t=e.constructor)!=null&&t[_0])||Zc(e)||ed(e):!1}var sL=Object.prototype.constructor.toString();function MS(e){if(!e||typeof e!="object")return!1;const t=Os(e);if(t===null)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===sL}function la(e,t){Jc(e)===0?Object.entries(e).forEach(([n,r])=>{t(n,r,e)}):e.forEach((n,r)=>t(r,n,e))}function Jc(e){const t=e[Nt];return t?t.type_:Array.isArray(e)?1:Zc(e)?2:ed(e)?3:0}function Qh(e,t){return Jc(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function jS(e,t,n){const r=Jc(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function oL(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function Zc(e){return e instanceof Map}function ed(e){return e instanceof Set}function Qr(e){return e.copy_||e.base_}function Xh(e,t){if(Zc(e))return new Map(e);if(ed(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&MS(e))return Os(e)?{...e}:Object.assign(Object.create(null),e);const n=Object.getOwnPropertyDescriptors(e);delete n[Nt];let r=Reflect.ownKeys(n);for(let i=0;i<r.length;i++){const s=r[i],o=n[s];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(n[s]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[s]})}return Object.create(Os(e),n)}function ng(e,t=!1){return td(e)||Or(e)||!Hn(e)||(Jc(e)>1&&(e.set=e.add=e.clear=e.delete=aL),Object.freeze(e),t&&la(e,(n,r)=>ng(r,!0))),e}function aL(){nn(2)}function td(e){return Object.isFrozen(e)}var lL={};function wi(e){const t=lL[e];return t||nn(0,e),t}var ua;function zS(){return ua}function uL(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function w0(e,t){t&&(wi("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Jh(e){Zh(e),e.drafts_.forEach(cL),e.drafts_=null}function Zh(e){e===ua&&(ua=e.parent_)}function x0(e){return ua=uL(ua,e)}function cL(e){const t=e[Nt];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function S0(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return e!==void 0&&e!==n?(n[Nt].modified_&&(Jh(t),nn(4)),Hn(e)&&(e=Fu(t,e),t.parent_||Mu(t,e)),t.patches_&&wi("Patches").generateReplacementPatches_(n[Nt].base_,e,t.patches_,t.inversePatches_)):e=Fu(t,n,[]),Jh(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==FS?e:void 0}function Fu(e,t,n){if(td(t))return t;const r=t[Nt];if(!r)return la(t,(i,s)=>E0(e,r,t,i,s,n)),t;if(r.scope_!==e)return t;if(!r.modified_)return Mu(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let s=i,o=!1;r.type_===3&&(s=new Set(i),i.clear(),o=!0),la(s,(a,l)=>E0(e,r,i,a,l,n,o)),Mu(e,i,!1),n&&e.patches_&&wi("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function E0(e,t,n,r,i,s,o){if(Or(i)){const a=s&&t&&t.type_!==3&&!Qh(t.assigned_,r)?s.concat(r):void 0,l=Fu(e,i,a);if(jS(n,r,l),Or(l))e.canAutoFreeze_=!1;else return}else o&&n.add(i);if(Hn(i)&&!td(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Fu(e,i),(!t||!t.scope_.parent_)&&Mu(e,i)}}function Mu(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&ng(t,n)}function dL(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:zS(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,s=rg;n&&(i=[r],s=ca);const{revoke:o,proxy:a}=Proxy.revocable(i,s);return r.draft_=a,r.revoke_=o,a}var rg={get(e,t){if(t===Nt)return e;const n=Qr(e);if(!Qh(n,t))return fL(e,n,t);const r=n[t];return e.finalized_||!Hn(r)?r:r===pf(e.base_,t)?(mf(e),e.copy_[t]=tp(r,e)):r},has(e,t){return t in Qr(e)},ownKeys(e){return Reflect.ownKeys(Qr(e))},set(e,t,n){const r=US(Qr(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=pf(Qr(e),t),s=i==null?void 0:i[Nt];if(s&&s.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(oL(n,i)&&(n!==void 0||Qh(e.base_,t)))return!0;mf(e),ep(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty(e,t){return pf(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,mf(e),ep(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Qr(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty(){nn(11)},getPrototypeOf(e){return Os(e.base_)},setPrototypeOf(){nn(12)}},ca={};la(rg,(e,t)=>{ca[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});ca.deleteProperty=function(e,t){return ca.set.call(this,e,t,void 0)};ca.set=function(e,t,n){return rg.set.call(this,e[0],t,n,e[0])};function pf(e,t){const n=e[Nt];return(n?Qr(n):e)[t]}function fL(e,t,n){var i;const r=US(t,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function US(e,t){if(!(t in e))return;let n=Os(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Os(n)}}function ep(e){e.modified_||(e.modified_=!0,e.parent_&&ep(e.parent_))}function mf(e){e.copy_||(e.copy_=Xh(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var hL=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,n,r)=>{if(typeof t=="function"&&typeof n!="function"){const s=n;n=t;const o=this;return function(l=s,...u){return o.produce(l,c=>n.call(this,c,...u))}}typeof n!="function"&&nn(6),r!==void 0&&typeof r!="function"&&nn(7);let i;if(Hn(t)){const s=x0(this),o=tp(t,void 0);let a=!0;try{i=n(o),a=!1}finally{a?Jh(s):Zh(s)}return w0(s,r),S0(i,s)}else if(!t||typeof t!="object"){if(i=n(t),i===void 0&&(i=t),i===FS&&(i=void 0),this.autoFreeze_&&ng(i,!0),r){const s=[],o=[];wi("Patches").generateReplacementPatches_(t,i,s,o),r(s,o)}return i}else nn(1,t)},this.produceWithPatches=(t,n)=>{if(typeof t=="function")return(o,...a)=>this.produceWithPatches(o,l=>t(l,...a));let r,i;return[this.produce(t,n,(o,a)=>{r=o,i=a}),r,i]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){Hn(e)||nn(8),Or(e)&&(e=BS(e));const t=x0(this),n=tp(e,void 0);return n[Nt].isManual_=!0,Zh(t),n}finishDraft(e,t){const n=e&&e[Nt];(!n||!n.isManual_)&&nn(9);const{scope_:r}=n;return w0(r,t),S0(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=wi("Patches").applyPatches_;return Or(e)?r(e,t):this.produce(e,i=>r(i,t))}};function tp(e,t){const n=Zc(e)?wi("MapSet").proxyMap_(e,t):ed(e)?wi("MapSet").proxySet_(e,t):dL(e,t);return(t?t.scope_:zS()).drafts_.push(n),n}function BS(e){return Or(e)||nn(10,e),VS(e)}function VS(e){if(!Hn(e)||td(e))return e;const t=e[Nt];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Xh(e,t.scope_.immer_.useStrictShallowCopy_)}else n=Xh(e,!0);return la(n,(r,i)=>{jS(n,r,VS(i))}),t&&(t.finalized_=!1),n}var At=new hL,WS=At.produce;At.produceWithPatches.bind(At);At.setAutoFreeze.bind(At);At.setUseStrictShallowCopy.bind(At);At.applyPatches.bind(At);At.createDraft.bind(At);At.finishDraft.bind(At);function pL(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function mL(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function gL(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(n=>typeof n=="function")){const n=e.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${t}[${n}]`)}}var C0=e=>Array.isArray(e)?e:[e];function yL(e){const t=Array.isArray(e[0])?e[0]:e;return gL(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function vL(e,t){const n=[],{length:r}=e;for(let i=0;i<r;i++)n.push(e[i].apply(null,t));return n}var _L=class{constructor(e){this.value=e}deref(){return this.value}},wL=typeof WeakRef<"u"?WeakRef:_L,xL=0,T0=1;function gl(){return{s:xL,v:void 0,o:null,p:null}}function ig(e,t={}){let n=gl();const{resultEqualityCheck:r}=t;let i,s=0;function o(){var d;let a=n;const{length:l}=arguments;for(let f=0,g=l;f<g;f++){const y=arguments[f];if(typeof y=="function"||typeof y=="object"&&y!==null){let _=a.o;_===null&&(a.o=_=new WeakMap);const w=_.get(y);w===void 0?(a=gl(),_.set(y,a)):a=w}else{let _=a.p;_===null&&(a.p=_=new Map);const w=_.get(y);w===void 0?(a=gl(),_.set(y,a)):a=w}}const u=a;let c;if(a.s===T0?c=a.v:(c=e.apply(null,arguments),s++),u.s=T0,r){const f=((d=i==null?void 0:i.deref)==null?void 0:d.call(i))??i;f!=null&&r(f,c)&&(c=f,s!==0&&s--),i=typeof c=="object"&&c!==null||typeof c=="function"?new wL(c):c}return u.v=c,c}return o.clearCache=()=>{n=gl(),o.resetResultsCount()},o.resultsCount=()=>s,o.resetResultsCount=()=>{s=0},o}function HS(e,...t){const n=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,r=(...i)=>{let s=0,o=0,a,l={},u=i.pop();typeof u=="object"&&(l=u,u=i.pop()),pL(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const c={...n,...l},{memoize:d,memoizeOptions:f=[],argsMemoize:g=ig,argsMemoizeOptions:y=[],devModeChecks:_={}}=c,w=C0(f),p=C0(y),h=yL(i),v=d(function(){return s++,u.apply(null,arguments)},...w),x=g(function(){o++;const C=vL(h,arguments);return a=v.apply(null,C),a},...p);return Object.assign(x,{resultFunc:u,memoizedResultFunc:v,dependencies:h,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>a,recomputations:()=>s,resetRecomputations:()=>{s=0},memoize:d,argsMemoize:g})};return Object.assign(r,{withTypes:()=>r}),r}var SL=HS(ig),EL=Object.assign((e,t=SL)=>{mL(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const n=Object.keys(e),r=n.map(s=>e[s]);return t(r,(...s)=>s.reduce((o,a,l)=>(o[n[l]]=a,o),{}))},{withTypes:()=>EL});function GS(e){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,e):i(s)}var CL=GS(),TL=GS,bL=(...e)=>{const t=HS(...e);return(...n)=>{const r=t(...n),i=(s,...o)=>r(Or(s)?BS(s):s,...o);return Object.assign(i,r),i}};bL(ig);var kL=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?$u:$u.apply(null,arguments)},IL=e=>e&&typeof e.match=="function";function xr(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(cn(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>iL(r)&&r.type===e,n}var KS=class _o extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,_o.prototype)}static get[Symbol.species](){return _o}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new _o(...t[0].concat(this)):new _o(...t.concat(this))}};function b0(e){return Hn(e)?WS(e,()=>{}):e}function k0(e,t,n){if(e.has(t)){let i=e.get(t);return n.update&&(i=n.update(i,t,e),e.set(t,i)),i}if(!n.insert)throw new Error(cn(10));const r=n.insert(t,e);return e.set(t,r),r}function PL(e){return typeof e=="boolean"}var OL=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=t??{};let o=new KS;return n&&(PL(n)?o.push(CL):o.push(TL(n.extraArgument))),o},RL="RTK_autoBatch",YS=e=>t=>{setTimeout(t,e)},NL=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:YS(10),AL=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,s=!1,o=!1;const a=new Set,l=e.type==="tick"?queueMicrotask:e.type==="raf"?NL:e.type==="callback"?e.queueNotification:YS(e.timeout),u=()=>{o=!1,s&&(s=!1,a.forEach(c=>c()))};return Object.assign({},r,{subscribe(c){const d=()=>i&&c(),f=r.subscribe(d);return a.add(c),()=>{f(),a.delete(c)}},dispatch(c){var d;try{return i=!((d=c==null?void 0:c.meta)!=null&&d[RL]),s=!i,s&&(o||(o=!0,l(u))),r.dispatch(c)}finally{i=!0}}})},DL=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new KS(e);return r&&i.push(AL(typeof r=="object"?r:void 0)),i},LL=!0;function $L(e){const t=OL(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=e||{};let a;if(typeof n=="function")a=n;else if(eg(n))a=$S(n);else throw new Error(cn(1));let l;typeof r=="function"?l=r(t):l=t();let u=$u;i&&(u=kL({trace:!LL,...typeof i=="object"&&i}));const c=rL(...l),d=DL(c);let f=typeof o=="function"?o(d):d();const g=u(...f);return tg(a,s,g)}function qS(e){const t={},n=[];let r;const i={addCase(s,o){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(cn(28));if(a in t)throw new Error(cn(29));return t[a]=o,i},addMatcher(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return e(i),[t,n,r]}function FL(e){return typeof e=="function"}function ML(e,t){let[n,r,i]=qS(t),s;if(FL(e))s=()=>b0(e());else{const a=b0(e);s=()=>a}function o(a=s(),l){let u=[n[l.type],...r.filter(({matcher:c})=>c(l)).map(({reducer:c})=>c)];return u.filter(c=>!!c).length===0&&(u=[i]),u.reduce((c,d)=>{if(d)if(Or(c)){const g=d(c,l);return g===void 0?c:g}else{if(Hn(c))return WS(c,f=>d(f,l));{const f=d(c,l);if(f===void 0){if(c===null)return c;throw new Error(cn(9))}return f}}return c},a)}return o.getInitialState=s,o}var jL="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",zL=(e=21)=>{let t="",n=e;for(;n--;)t+=jL[Math.random()*64|0];return t},UL=(e,t)=>IL(e)?e.match(t):e(t);function BL(...e){return t=>e.some(n=>UL(n,t))}var VL=["name","message","stack","code"],gf=class{constructor(e,t){Cd(this,"_type");this.payload=e,this.meta=t}},I0=class{constructor(e,t){Cd(this,"_type");this.payload=e,this.meta=t}},WL=e=>{if(typeof e=="object"&&e!==null){const t={};for(const n of VL)typeof e[n]=="string"&&(t[n]=e[n]);return t}return{message:String(e)}},nd=(()=>{function e(t,n,r){const i=xr(t+"/fulfilled",(l,u,c,d)=>({payload:l,meta:{...d||{},arg:c,requestId:u,requestStatus:"fulfilled"}})),s=xr(t+"/pending",(l,u,c)=>({payload:void 0,meta:{...c||{},arg:u,requestId:l,requestStatus:"pending"}})),o=xr(t+"/rejected",(l,u,c,d,f)=>({payload:d,error:(r&&r.serializeError||WL)(l||"Rejected"),meta:{...f||{},arg:c,requestId:u,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(l==null?void 0:l.name)==="AbortError",condition:(l==null?void 0:l.name)==="ConditionError"}}));function a(l){return(u,c,d)=>{const f=r!=null&&r.idGenerator?r.idGenerator(l):zL(),g=new AbortController;let y;function _(p){y=p,g.abort()}const w=async function(){var v,x;let p;try{let E=(v=r==null?void 0:r.condition)==null?void 0:v.call(r,l,{getState:c,extra:d});if(GL(E)&&(E=await E),E===!1||g.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const C=new Promise((S,P)=>g.signal.addEventListener("abort",()=>P({name:"AbortError",message:y||"Aborted"})));u(s(f,l,(x=r==null?void 0:r.getPendingMeta)==null?void 0:x.call(r,{requestId:f,arg:l},{getState:c,extra:d}))),p=await Promise.race([C,Promise.resolve(n(l,{dispatch:u,getState:c,extra:d,requestId:f,signal:g.signal,abort:_,rejectWithValue:(S,P)=>new gf(S,P),fulfillWithValue:(S,P)=>new I0(S,P)})).then(S=>{if(S instanceof gf)throw S;return S instanceof I0?i(S.payload,f,l,S.meta):i(S,f,l)})])}catch(E){p=E instanceof gf?o(null,f,l,E.payload,E.meta):o(E,f,l)}return r&&!r.dispatchConditionRejection&&o.match(p)&&p.meta.condition||u(p),p}();return Object.assign(w,{abort:_,requestId:f,arg:l,unwrap(){return w.then(HL)}})}}return Object.assign(a,{pending:s,rejected:o,fulfilled:i,settled:BL(o,i),typePrefix:t})}return e.withTypes=()=>e,e})();function HL(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function GL(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var KL=Symbol.for("rtk-slice-createasyncthunk");function YL(e,t){return`${e}/${t}`}function qL({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[KL];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(cn(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(XL()):i.reducers)||{},l=Object.keys(a),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(w,p){const h=typeof w=="string"?w:w.type;if(!h)throw new Error(cn(12));if(h in u.sliceCaseReducersByType)throw new Error(cn(13));return u.sliceCaseReducersByType[h]=p,c},addMatcher(w,p){return u.sliceMatchers.push({matcher:w,reducer:p}),c},exposeAction(w,p){return u.actionCreators[w]=p,c},exposeCaseReducer(w,p){return u.sliceCaseReducersByName[w]=p,c}};l.forEach(w=>{const p=a[w],h={reducerName:w,type:YL(s,w),createNotation:typeof i.reducers=="function"};ZL(p)?t$(h,p,c,t):JL(h,p,c)});function d(){const[w={},p=[],h=void 0]=typeof i.extraReducers=="function"?qS(i.extraReducers):[i.extraReducers],v={...w,...u.sliceCaseReducersByType};return ML(i.initialState,x=>{for(let E in v)x.addCase(E,v[E]);for(let E of u.sliceMatchers)x.addMatcher(E.matcher,E.reducer);for(let E of p)x.addMatcher(E.matcher,E.reducer);h&&x.addDefaultCase(h)})}const f=w=>w,g=new WeakMap;let y;const _={name:s,reducerPath:o,reducer(w,p){return y||(y=d()),y(w,p)},actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState(){return y||(y=d()),y.getInitialState()},getSelectors(w=f){const p=k0(g,this,{insert:()=>new WeakMap});return k0(p,w,{insert:()=>{const h={};for(const[v,x]of Object.entries(i.selectors??{}))h[v]=QL(this,x,w,this!==_);return h}})},selectSlice(w){let p=w[this.reducerPath];return typeof p>"u"&&this!==_&&(p=this.getInitialState()),p},get selectors(){return this.getSelectors(this.selectSlice)},injectInto(w,{reducerPath:p,...h}={}){const v=p??this.reducerPath;return w.inject({reducerPath:v,reducer:this.reducer},h),{...this,reducerPath:v}}};return _}}function QL(e,t,n,r){function i(s,...o){let a=n.call(e,s);return typeof a>"u"&&r&&(a=e.getInitialState()),t(a,...o)}return i.unwrapped=t,i}var QS=qL();function XL(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function JL({type:e,reducerName:t,createNotation:n},r,i){let s,o;if("reducer"in r){if(n&&!e$(r))throw new Error(cn(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(e,s).exposeCaseReducer(t,s).exposeAction(t,o?xr(e,o):xr(e))}function ZL(e){return e._reducerDefinitionType==="asyncThunk"}function e$(e){return e._reducerDefinitionType==="reducerWithPrepare"}function t$({type:e,reducerName:t},n,r,i){if(!i)throw new Error(cn(18));const{payloadCreator:s,fulfilled:o,pending:a,rejected:l,settled:u,options:c}=n,d=i(e,s,c);r.exposeAction(t,d),o&&r.addCase(d.fulfilled,o),a&&r.addCase(d.pending,a),l&&r.addCase(d.rejected,l),u&&r.addMatcher(d.settled,u),r.exposeCaseReducer(t,{fulfilled:o||yl,pending:a||yl,rejected:l||yl,settled:u||yl})}function yl(){}var sg="listenerMiddleware";xr(`${sg}/add`);xr(`${sg}/removeAll`);xr(`${sg}/remove`);function cn(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(e,t){if(!e)throw Hs(t)},Hs=function(e){return new Error("Firebase Database ("+XS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},n$=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},og={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(f=64)),r.push(n[c],n[d],n[f],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(JS(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):n$(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new r$;const f=s<<2|a>>4;if(r.push(f),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class r$ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ZS=function(e){const t=JS(e);return og.encodeByteArray(t,!0)},ju=function(e){return ZS(e).replace(/\./g,"")},zu=function(e){try{return og.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i$(e){return eE(void 0,e)}function eE(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!s$(n)||(e[n]=eE(e[n],t[n]));return e}function s$(e){return e!=="__proto__"}/**
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
 */function o$(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const a$=()=>o$().__FIREBASE_DEFAULTS__,l$=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},u$=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&zu(e[1]);return t&&JSON.parse(t)},ag=()=>{try{return a$()||l$()||u$()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},c$=e=>{var t,n;return(n=(t=ag())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},d$=e=>{const t=c$(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},tE=()=>{var e;return(e=ag())===null||e===void 0?void 0:e.config},f$=e=>{var t;return(t=ag())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function h$(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[ju(JSON.stringify(n)),ju(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ug(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tn())}function p$(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function nE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rE(){return XS.NODE_ADMIN===!0}function m$(){try{return typeof indexedDB=="object"}catch{return!1}}function g$(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y$="FirebaseError";class jr extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=y$,Object.setPrototypeOf(this,jr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fa.prototype.create)}}class Fa{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?v$(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new jr(i,a,r)}}function v$(e,t){return e.replace(_$,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const _$=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const iE=function(e){let t={},n={},r={},i="";try{const s=e.split(".");t=da(zu(s[0])||""),n=da(zu(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:r,signature:i}},w$=function(e){const t=iE(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},x$=function(e){const t=iE(e).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Rs(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function P0(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Uu(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function Bu(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(O0(s)&&O0(o)){if(!Bu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function O0(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function wo(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function xo(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S${constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const r=this.W_;if(typeof t=="string")for(let d=0;d<16;d++)r[d]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<n;)if(s[o]=t.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=t[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)t[r]=this.chain_[i]>>s&255,++r;return t}}function E$(e,t){const n=new C$(e,t);return n.subscribe.bind(n)}class C${constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");T$(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=yf),i.error===void 0&&(i.error=yf),i.complete===void 0&&(i.complete=yf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function T$(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function yf(){}function sE(e,t){return`${e} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b$=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,I(r<e.length,"Surrogate pair missing trail surrogate.");const o=e.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},id=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};/**
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
 */let k$=class{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new lg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(P$(t))try{this.getOrInitializeService({instanceIdentifier:Xr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Xr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Xr){return this.instances.has(t)}getOptions(t=Xr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:I$(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Xr){return this.component?this.component.multipleInstances?t:Xr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function I$(e){return e===Xr?void 0:e}function P$(e){return e.instantiationMode==="EAGER"}/**
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
 */class O${constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new k$(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ae||(ae={}));const R$={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},N$=ae.INFO,A$={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},D$=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=A$[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class cg{constructor(t){this.name=t,this._logLevel=N$,this._logHandler=D$,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ae))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?R$[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...t),this._logHandler(this,ae.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...t),this._logHandler(this,ae.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...t),this._logHandler(this,ae.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...t),this._logHandler(this,ae.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...t),this._logHandler(this,ae.ERROR,...t)}}const L$=(e,t)=>t.some(n=>e instanceof n);let R0,N0;function $$(){return R0||(R0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function F$(){return N0||(N0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const oE=new WeakMap,np=new WeakMap,aE=new WeakMap,vf=new WeakMap,dg=new WeakMap;function M$(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Sr(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&oE.set(n,e)}).catch(()=>{}),dg.set(t,e),t}function j$(e){if(np.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});np.set(e,t)}let rp={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return np.get(e);if(t==="objectStoreNames")return e.objectStoreNames||aE.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sr(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function z$(e){rp=e(rp)}function U$(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(_f(this),t,...n);return aE.set(r,t.sort?t.sort():[t]),Sr(r)}:F$().includes(e)?function(...t){return e.apply(_f(this),t),Sr(oE.get(this))}:function(...t){return Sr(e.apply(_f(this),t))}}function B$(e){return typeof e=="function"?U$(e):(e instanceof IDBTransaction&&j$(e),L$(e,$$())?new Proxy(e,rp):e)}function Sr(e){if(e instanceof IDBRequest)return M$(e);if(vf.has(e))return vf.get(e);const t=B$(e);return t!==e&&(vf.set(e,t),dg.set(t,e)),t}const _f=e=>dg.get(e);function V$(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Sr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Sr(o.result),l.oldVersion,l.newVersion,Sr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const W$=["get","getKey","getAll","getAllKeys","count"],H$=["put","add","delete","clear"],wf=new Map;function A0(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(wf.get(t))return wf.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=H$.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||W$.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return wf.set(t,s),s}z$(e=>({...e,get:(t,n,r)=>A0(t,n)||e.get(t,n,r),has:(t,n)=>!!A0(t,n)||e.has(t,n)}));/**
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
 */class G${constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(K$(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function K$(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ip="@firebase/app",D0="0.9.25";/**
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
 */const Si=new cg("@firebase/app"),Y$="@firebase/app-compat",q$="@firebase/analytics-compat",Q$="@firebase/analytics",X$="@firebase/app-check-compat",J$="@firebase/app-check",Z$="@firebase/auth",eF="@firebase/auth-compat",tF="@firebase/database",nF="@firebase/database-compat",rF="@firebase/functions",iF="@firebase/functions-compat",sF="@firebase/installations",oF="@firebase/installations-compat",aF="@firebase/messaging",lF="@firebase/messaging-compat",uF="@firebase/performance",cF="@firebase/performance-compat",dF="@firebase/remote-config",fF="@firebase/remote-config-compat",hF="@firebase/storage",pF="@firebase/storage-compat",mF="@firebase/firestore",gF="@firebase/firestore-compat",yF="firebase",vF="10.7.1";/**
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
 */const sp="[DEFAULT]",_F={[ip]:"fire-core",[Y$]:"fire-core-compat",[Q$]:"fire-analytics",[q$]:"fire-analytics-compat",[J$]:"fire-app-check",[X$]:"fire-app-check-compat",[Z$]:"fire-auth",[eF]:"fire-auth-compat",[tF]:"fire-rtdb",[nF]:"fire-rtdb-compat",[rF]:"fire-fn",[iF]:"fire-fn-compat",[sF]:"fire-iid",[oF]:"fire-iid-compat",[aF]:"fire-fcm",[lF]:"fire-fcm-compat",[uF]:"fire-perf",[cF]:"fire-perf-compat",[dF]:"fire-rc",[fF]:"fire-rc-compat",[hF]:"fire-gcs",[pF]:"fire-gcs-compat",[mF]:"fire-fst",[gF]:"fire-fst-compat","fire-js":"fire-js",[yF]:"fire-js-all"};/**
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
 */const Vu=new Map,op=new Map;function wF(e,t){try{e.container.addComponent(t)}catch(n){Si.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ns(e){const t=e.name;if(op.has(t))return Si.debug(`There were multiple attempts to register component ${t}.`),!1;op.set(t,e);for(const n of Vu.values())wF(n,e);return!0}function lE(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const xF={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Er=new Fa("app","Firebase",xF);/**
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
 */class SF{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Er.create("app-deleted",{appName:this._name})}}/**
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
 */const sd=vF;function uE(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:sp,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Er.create("bad-app-name",{appName:String(i)});if(n||(n=tE()),!n)throw Er.create("no-options");const s=Vu.get(i);if(s){if(Bu(n,s.options)&&Bu(r,s.config))return s;throw Er.create("duplicate-app",{appName:i})}const o=new O$(i);for(const l of op.values())o.addComponent(l);const a=new SF(n,r,o);return Vu.set(i,a),a}function EF(e=sp){const t=Vu.get(e);if(!t&&e===sp&&tE())return uE();if(!t)throw Er.create("no-app",{appName:e});return t}function Cr(e,t,n){var r;let i=(r=_F[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Si.warn(a.join(" "));return}Ns(new xi(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const CF="firebase-heartbeat-database",TF=1,fa="firebase-heartbeat-store";let xf=null;function cE(){return xf||(xf=V$(CF,TF,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(fa)}}}).catch(e=>{throw Er.create("idb-open",{originalErrorMessage:e.message})})),xf}async function bF(e){try{return await(await cE()).transaction(fa).objectStore(fa).get(dE(e))}catch(t){if(t instanceof jr)Si.warn(t.message);else{const n=Er.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Si.warn(n.message)}}}async function L0(e,t){try{const r=(await cE()).transaction(fa,"readwrite");await r.objectStore(fa).put(t,dE(e)),await r.done}catch(n){if(n instanceof jr)Si.warn(n.message);else{const r=Er.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Si.warn(r.message)}}}function dE(e){return`${e.name}!${e.options.appId}`}/**
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
 */const kF=1024,IF=30*24*60*60*1e3;class PF{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new RF(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=$0();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=IF}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=$0(),{heartbeatsToSend:r,unsentEntries:i}=OF(this._heartbeatsCache.heartbeats),s=ju(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function $0(){return new Date().toISOString().substring(0,10)}function OF(e,t=kF){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),F0(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),F0(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class RF{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return m$()?g$().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await bF(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return L0(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return L0(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function F0(e){return ju(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function NF(e){Ns(new xi("platform-logger",t=>new G$(t),"PRIVATE")),Ns(new xi("heartbeat",t=>new PF(t),"PRIVATE")),Cr(ip,D0,e),Cr(ip,D0,"esm2017"),Cr("fire-js","")}NF("");function fE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const AF=fE,hE=new Fa("auth","Firebase",fE());/**
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
 */const Wu=new cg("@firebase/auth");function DF(e,...t){Wu.logLevel<=ae.WARN&&Wu.warn(`Auth (${sd}): ${e}`,...t)}function Wl(e,...t){Wu.logLevel<=ae.ERROR&&Wu.error(`Auth (${sd}): ${e}`,...t)}/**
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
 */function Ei(e,...t){throw hg(e,...t)}function fg(e,...t){return hg(e,...t)}function LF(e,t,n){const r=Object.assign(Object.assign({},AF()),{[t]:n});return new Fa("auth","Firebase",r).create(t,{appName:e.name})}function hg(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return hE.create(e,...t)}function Z(e,t,...n){if(!e)throw hg(t,...n)}function $n(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Wl(t),new Error(t)}function Hu(e,t){e||$n(t)}function $F(){return M0()==="http:"||M0()==="https:"}function M0(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function FF(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($F()||p$()||"connection"in navigator)?navigator.onLine:!0}function MF(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Ma{constructor(t,n){this.shortDelay=t,this.longDelay=n,Hu(n>t,"Short delay should be less than long delay!"),this.isMobile=ug()||nE()}get(){return FF()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function jF(e,t){Hu(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class pE{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zF={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const UF=new Ma(3e4,6e4);function zr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ur(e,t,n,r,i={}){return mE(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=rd(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),pE.fetch()(gE(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function mE(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},zF),t);try{const i=new VF(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw vl(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw vl(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw vl(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw vl(e,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw LF(e,c,u);Ei(e,c)}}catch(i){if(i instanceof jr)throw i;Ei(e,"network-request-failed",{message:String(i)})}}async function ja(e,t,n,r,i={}){const s=await Ur(e,t,n,r,i);return"mfaPendingCredential"in s&&Ei(e,"multi-factor-auth-required",{_serverResponse:s}),s}function gE(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?jF(e.config,i):`${e.config.apiScheme}://${i}`}function BF(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class VF{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(fg(this.auth,"network-request-failed")),UF.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vl(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=fg(e,t,r);return i.customData._tokenResponse=n,i}function j0(e){return e!==void 0&&e.enterprise!==void 0}class WF{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return BF(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function HF(e,t){return Ur(e,"GET","/v2/recaptchaConfig",zr(e,t))}/**
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
 */async function GF(e,t){return Ur(e,"POST","/v1/accounts:delete",t)}async function KF(e,t){return Ur(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Ao(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function YF(e,t=!1){const n=Gt(e),r=await n.getIdToken(t),i=yE(r);Z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ao(Sf(i.auth_time)),issuedAtTime:Ao(Sf(i.iat)),expirationTime:Ao(Sf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Sf(e){return Number(e)*1e3}function yE(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Wl("JWT malformed, contained fewer than 3 sections"),null;try{const i=zu(n);return i?JSON.parse(i):(Wl("Failed to decode base64 JWT payload"),null)}catch(i){return Wl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function qF(e){const t=yE(e);return Z(t,"internal-error"),Z(typeof t.exp<"u","internal-error"),Z(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Gu(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof jr&&QF(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function QF({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class XF{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class vE{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ao(this.lastLoginAt),this.creationTime=Ao(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ku(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Gu(e,KF(n,{idToken:r}));Z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?eM(s.providerUserInfo):[],a=ZF(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new vE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function JF(e){const t=Gt(e);await Ku(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ZF(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function eM(e){return e.map(t=>{var{providerId:n}=t,r=Pm(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function tM(e,t){const n=await mE(e,{},async()=>{const r=rd({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=gE(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",pE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function nM(e,t){return Ur(e,"POST","/v2/accounts:revokeToken",zr(e,t))}/**
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
 */class ha{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Z(t.idToken,"internal-error"),Z(typeof t.idToken<"u","internal-error"),Z(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):qF(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return Z(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await tM(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ha;return r&&(Z(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(Z(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(Z(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ha,this.toJSON())}_performRefresh(){return $n("not implemented")}}/**
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
 */function Zn(e,t){Z(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class fi{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Pm(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new XF(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new vE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Gu(this,this.stsTokenManager.getToken(this.auth,t));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return YF(this,t)}reload(){return JF(this)}_assign(t){this!==t&&(Z(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new fi(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Ku(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Gu(this,GF(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:x,isAnonymous:E,providerData:C,stsTokenManager:S}=n;Z(v&&S,t,"internal-error");const P=ha.fromJSON(this.name,S);Z(typeof v=="string",t,"internal-error"),Zn(d,t.name),Zn(f,t.name),Z(typeof x=="boolean",t,"internal-error"),Z(typeof E=="boolean",t,"internal-error"),Zn(g,t.name),Zn(y,t.name),Zn(_,t.name),Zn(w,t.name),Zn(p,t.name),Zn(h,t.name);const F=new fi({uid:v,auth:t,email:f,emailVerified:x,displayName:d,isAnonymous:E,photoURL:y,phoneNumber:g,tenantId:_,stsTokenManager:P,createdAt:p,lastLoginAt:h});return C&&Array.isArray(C)&&(F.providerData=C.map($=>Object.assign({},$))),w&&(F._redirectEventId=w),F}static async _fromIdTokenResponse(t,n,r=!1){const i=new ha;i.updateFromServerResponse(n);const s=new fi({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Ku(s),s}}/**
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
 */const z0=new Map;function ii(e){Hu(e instanceof Function,"Expected a class definition");let t=z0.get(e);return t?(Hu(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,z0.set(e,t),t)}/**
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
 */class _E{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}_E.type="NONE";const U0=_E;/**
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
 */function Ef(e,t,n){return`firebase:${e}:${t}:${n}`}class fs{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ef(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ef("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?fi._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new fs(ii(U0),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||ii(U0);const o=Ef(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=fi._fromJSON(t,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new fs(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new fs(s,t,r))}}/**
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
 */function B0(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(oM(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(rM(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(lM(t))return"Blackberry";if(uM(t))return"Webos";if(iM(t))return"Safari";if((t.includes("chrome/")||sM(t))&&!t.includes("edge/"))return"Chrome";if(aM(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function rM(e=Tn()){return/firefox\//i.test(e)}function iM(e=Tn()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function sM(e=Tn()){return/crios\//i.test(e)}function oM(e=Tn()){return/iemobile/i.test(e)}function aM(e=Tn()){return/android/i.test(e)}function lM(e=Tn()){return/blackberry/i.test(e)}function uM(e=Tn()){return/webos/i.test(e)}/**
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
 */function wE(e,t=[]){let n;switch(e){case"Browser":n=B0(Tn());break;case"Worker":n=`${B0(Tn())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${sd}/${r}`}/**
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
 */class cM{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function dM(e,t={}){return Ur(e,"GET","/v2/passwordPolicy",zr(e,t))}/**
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
 */const fM=6;class hM{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:fM,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class pM{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new V0(this),this.idTokenSubscription=new V0(this),this.beforeStateQueue=new cM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ii(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await fs.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Ku(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=MF()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Gt(t):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&Z(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ii(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await dM(this),n=new hM(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Fa("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await nM(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ii(t)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await fs.create(this,[ii(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=wE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&DF(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function za(e){return Gt(e)}class V0{constructor(t){this.auth=t,this.observer=null,this.addObserver=E$(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function mM(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function gM(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=fg("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",mM().appendChild(r)})}const yM="https://www.google.com/recaptcha/enterprise.js?render=",vM="recaptcha-enterprise",_M="NO_RECAPTCHA";class wM{constructor(t){this.type=vM,this.auth=za(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{HF(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new WF(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;j0(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o(_M)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&j0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}gM(yM+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function W0(e,t,n,r=!1){const i=new wM(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ap(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await W0(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await W0(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(s)})}/**
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
 */function xM(e,t){const n=lE(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Bu(s,t??{}))return i;Ei(i,"already-initialized")}return n.initialize({options:t})}function SM(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ii);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
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
 */class xE{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return $n("not implemented")}_getIdTokenResponse(t){return $n("not implemented")}_linkToIdToken(t,n){return $n("not implemented")}_getReauthenticationResolver(t){return $n("not implemented")}}async function EM(e,t){return Ur(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function CM(e,t){return ja(e,"POST","/v1/accounts:signInWithPassword",zr(e,t))}/**
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
 */async function TM(e,t){return ja(e,"POST","/v1/accounts:signInWithEmailLink",zr(e,t))}async function bM(e,t){return ja(e,"POST","/v1/accounts:signInWithEmailLink",zr(e,t))}/**
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
 */class pa extends xE{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new pa(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new pa(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ap(t,n,"signInWithPassword",CM);case"emailLink":return TM(t,{email:this._email,oobCode:this._password});default:Ei(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ap(t,r,"signUpPassword",EM);case"emailLink":return bM(t,{idToken:n,email:this._email,oobCode:this._password});default:Ei(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Cf(e,t){return ja(e,"POST","/v1/accounts:signInWithIdp",zr(e,t))}/**
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
 */const kM="http://localhost";class Ci extends xE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Ci(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ei("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Pm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ci(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Cf(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Cf(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Cf(t,n)}buildRequest(){const t={requestUri:kM,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=rd(n)}return t}}/**
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
 */function IM(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function PM(e){const t=wo(xo(e)).link,n=t?wo(xo(t)).deep_link_id:null,r=wo(xo(e)).deep_link_id;return(r?wo(xo(r)).link:null)||r||n||t||e}class pg{constructor(t){var n,r,i,s,o,a;const l=wo(xo(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=IM((i=l.mode)!==null&&i!==void 0?i:null);Z(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=PM(t);try{return new pg(n)}catch{return null}}}/**
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
 */class Gs{constructor(){this.providerId=Gs.PROVIDER_ID}static credential(t,n){return pa._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=pg.parseLink(n);return Z(r,"argument-error"),pa._fromEmailAndCode(t,r.code,r.tenantId)}}Gs.PROVIDER_ID="password";Gs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Gs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class OM{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class od extends OM{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class sr extends od{constructor(){super("facebook.com")}static credential(t){return Ci._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return sr.credentialFromTaggedObject(t)}static credentialFromError(t){return sr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return sr.credential(t.oauthAccessToken)}catch{return null}}}sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";sr.PROVIDER_ID="facebook.com";/**
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
 */class An extends od{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Ci._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return An.credentialFromTaggedObject(t)}static credentialFromError(t){return An.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return An.credential(n,r)}catch{return null}}}An.GOOGLE_SIGN_IN_METHOD="google.com";An.PROVIDER_ID="google.com";/**
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
 */class or extends od{constructor(){super("github.com")}static credential(t){return Ci._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return or.credentialFromTaggedObject(t)}static credentialFromError(t){return or.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return or.credential(t.oauthAccessToken)}catch{return null}}}or.GITHUB_SIGN_IN_METHOD="github.com";or.PROVIDER_ID="github.com";/**
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
 */class ar extends od{constructor(){super("twitter.com")}static credential(t,n){return Ci._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return ar.credentialFromTaggedObject(t)}static credentialFromError(t){return ar.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return ar.credential(n,r)}catch{return null}}}ar.TWITTER_SIGN_IN_METHOD="twitter.com";ar.PROVIDER_ID="twitter.com";/**
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
 */async function RM(e,t){return ja(e,"POST","/v1/accounts:signUp",zr(e,t))}/**
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
 */class ma{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await fi._fromIdTokenResponse(t,r,i),o=H0(r);return new ma({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=H0(r);return new ma({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function H0(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Yu extends jr{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Yu.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Yu(t,n,r,i)}}function NM(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Yu._fromErrorAndOperation(e,s,t,r):s})}/**
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
 */async function AM(e,t,n=!1){const r="signIn",i=await NM(e,r,t),s=await ma._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function DM(e,t){return AM(za(e),t)}/**
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
 */async function SE(e){const t=za(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function LM(e,t,n){const r=za(e),o=await ap(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",RM).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&SE(e),l}),a=await ma._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function $M(e,t,n){return DM(Gt(e),Gs.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&SE(e),r})}/**
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
 */async function FM(e,t){return Ur(e,"POST","/v1/accounts:update",t)}/**
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
 */async function MM(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=Gt(e),s={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},o=await Gu(r,FM(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function jM(e){return Gt(e).signOut()}new Ma(3e4,6e4);/**
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
 */new Ma(5e3,15e3);var G0="@firebase/auth",K0="1.5.1";/**
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
 */class zM{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function UM(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function BM(e){Ns(new xi("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wE(e)},u=new pM(r,i,s,l);return SM(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Ns(new xi("auth-internal",t=>{const n=za(t.getProvider("auth").getImmediate());return(r=>new zM(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Cr(G0,K0,UM(e)),Cr(G0,K0,"esm2017")}/**
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
 */const VM=5*60;f$("authIdTokenMaxAge");BM("Browser");var WM="firebase",HM="10.7.1";/**
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
 */Cr(WM,HM,"app");const Y0="@firebase/database",q0="1.0.2";/**
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
 */let EE="";function GM(e){EE=e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KM{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),Oe(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:da(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YM{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return Qn(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new KM(t)}}catch{}return new YM},si=CE("localStorage"),lp=CE("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=new cg("@firebase/database"),qM=function(){let e=1;return function(){return e++}}(),TE=function(e){const t=b$(e),n=new S$;n.update(t);const r=n.digest();return og.encodeByteArray(r)},Ua=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?t+=Ua.apply(null,r):typeof r=="object"?t+=Oe(r):t+=r,t+=" "}return t};let hi=null,Q0=!0;const QM=function(e,t){I(!t||e===!0||e===!1,"Can't turn on custom loggers persistently."),e===!0?(hs.logLevel=ae.VERBOSE,hi=hs.log.bind(hs),t&&lp.set("logging_enabled",!0)):typeof e=="function"?hi=e:(hi=null,lp.remove("logging_enabled"))},tt=function(...e){if(Q0===!0&&(Q0=!1,hi===null&&lp.get("logging_enabled")===!0&&QM(!0)),hi){const t=Ua.apply(null,e);hi(t)}},Ba=function(e){return function(...t){tt(e,...t)}},up=function(...e){const t="FIREBASE INTERNAL ERROR: "+Ua(...e);hs.error(t)},Gn=function(...e){const t=`FIREBASE FATAL ERROR: ${Ua(...e)}`;throw hs.error(t),new Error(t)},Pt=function(...e){const t="FIREBASE WARNING: "+Ua(...e);hs.warn(t)},XM=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Pt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},bE=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},JM=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},As="[MIN_NAME]",Ti="[MAX_NAME]",Ks=function(e,t){if(e===t)return 0;if(e===As||t===Ti)return-1;if(t===As||e===Ti)return 1;{const n=X0(e),r=X0(t);return n!==null?r!==null?n-r===0?e.length-t.length:n-r:-1:r!==null?1:e<t?-1:1}},ZM=function(e,t){return e===t?0:e<t?-1:1},oo=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Oe(t))},mg=function(e){if(typeof e!="object"||e===null)return Oe(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)r!==0&&(n+=","),n+=Oe(t[r]),n+=":",n+=mg(e[t[r]]);return n+="}",n},kE=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function wt(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const IE=function(e){I(!bE(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,s,o,a,l;e===0?(s=0,o=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(e)/Math.LN2),r),s=a+r,o=Math.round(e*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(e/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=t;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},ej=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},tj=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function nj(e,t){let n="Unknown Error";e==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":e==="permission_denied"?n="Client doesn't have permission to access the desired data.":e==="unavailable"&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}const rj=new RegExp("^-?(0*)\\d{1,10}$"),ij=-2147483648,sj=2147483647,X0=function(e){if(rj.test(e)){const t=Number(e);if(t>=ij&&t<=sj)return t}return null},Va=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw Pt("Exception was thrown by user callback.",n),t},Math.floor(0))}},oj=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Do=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class aj{constructor(t,n){this.appName_=t,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(t))}notifyForInvalidToken(){Pt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lj{constructor(t,n,r){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(tt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Pt(t)}}class ps{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}ps.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg="5",PE="v",OE="s",RE="r",NE="f",AE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,DE="ls",LE="p",cp="ac",$E="websocket",FE="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(t,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=si.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&si.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function uj(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function jE(e,t,n){I(typeof t=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let r;if(t===$E)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===FE)r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);uj(e)&&(n.ns=e.namespace);const i=[];return wt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cj{constructor(){this.counters_={}}incrementCounter(t,n=1){Qn(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return i$(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf={},bf={};function yg(e){const t=e.toString();return Tf[t]||(Tf[t]=new cj),Tf[t]}function dj(e,t){const n=e.toString();return bf[n]||(bf[n]=t()),bf[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fj{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Va(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0="start",hj="close",pj="pLPCommand",mj="pRTLPCB",zE="id",UE="pw",BE="ser",gj="cb",yj="seg",vj="ts",_j="d",wj="dframe",VE=1870,WE=30,xj=VE-WE,Sj=25e3,Ej=3e4;class is{constructor(t,n,r,i,s,o,a){this.connId=t,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ba(t),this.stats_=yg(n),this.urlFn=l=>(this.appCheckToken&&(l[cp]=this.appCheckToken),jE(n,FE,l))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new fj(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ej)),JM(()=>{if(this.isClosed_)return;this.scriptTagHolder=new vg((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===J0)this.id=a,this.password=l;else if(o===hj)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[J0]="t",r[BE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[gj]=this.scriptTagHolder.uniqueCallbackIdentifier),r[PE]=gg,this.transportSessionId&&(r[OE]=this.transportSessionId),this.lastSessionId&&(r[DE]=this.lastSessionId),this.applicationId&&(r[LE]=this.applicationId),this.appCheckToken&&(r[cp]=this.appCheckToken),typeof location<"u"&&location.hostname&&AE.test(location.hostname)&&(r[RE]=NE);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){is.forceAllow_=!0}static forceDisallow(){is.forceDisallow_=!0}static isAvailable(){return is.forceAllow_?!0:!is.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ej()&&!tj()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=Oe(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ZS(n),i=kE(r,xj);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[wj]="t",r[zE]=t,r[UE]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=Oe(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class vg{constructor(t,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=qM(),window[pj+this.uniqueCallbackIdentifier]=t,window[mj+this.uniqueCallbackIdentifier]=n,this.myIFrame=vg.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){tt("frame writing exception"),a.stack&&tt(a.stack),tt(a)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||tt("No IE domain setting required")}catch{const r=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[zE]=this.myID,t[UE]=this.myPW,t[BE]=this.currentSerial;let n=this.urlFn(t),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+WE+r.length<=VE;){const o=this.pendingSegs.shift();r=r+"&"+yj+i+"="+o.seg+"&"+vj+i+"="+o.ts+"&"+_j+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,r){this.pendingSegs.push({seg:t,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(Sj)),s=()=>{clearTimeout(i),r()};this.addTag(t,s)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=t,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{tt("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cj=16384,Tj=45e3;let qu=null;typeof MozWebSocket<"u"?qu=MozWebSocket:typeof WebSocket<"u"&&(qu=WebSocket);class rn{constructor(t,n,r,i,s,o,a){this.connId=t,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ba(this.connId),this.stats_=yg(n),this.connURL=rn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,r,i,s){const o={};return o[PE]=gg,typeof location<"u"&&location.hostname&&AE.test(location.hostname)&&(o[RE]=NE),n&&(o[OE]=n),r&&(o[DE]=r),i&&(o[cp]=i),s&&(o[LE]=s),jE(t,$E,o)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,si.set("previous_websocket_failure",!0);try{let r;rE(),this.mySock=new qu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){rn.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(t=!0)}return!t&&qu!==null&&!rn.forceDisallow_}static previouslyFailed(){return si.isInMemoryStorage||si.get("previous_websocket_failure")===!0}markConnectionHealthy(){si.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=da(n);this.onMessage(r)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(I(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(t){this.resetKeepAlive();const n=Oe(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=kE(n,Cj);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Tj))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}rn.responsesRequiredToBeHealthy=2;rn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const bj=6e4,kj=5e3,Ij=10*1024,Pj=100*1024,kf="t",Z0="d",Oj="s",e_="r",Rj="e",t_="o",n_="a",r_="n",i_="p",Nj="h";class Aj{constructor(t,n,r,i,s,o,a,l,u,c){this.id=t,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ba("c:"+this.id+":"),this.transportManager_=new ga(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=Do(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Pj?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ij?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(kf in t){const n=t[kf];n===n_?this.upgradeIfSecondaryHealthy_():n===e_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===t_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=oo("t",t),r=oo("d",t);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:i_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:n_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:r_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=oo("t",t),r=oo("d",t);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=oo(kf,t);if(Z0 in t){const r=t[Z0];if(n===Nj){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===r_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Oj?this.onConnectionShutdown_(r):n===e_?this.onReset_(r):n===Rj?up("Server Error: "+r):n===t_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):up("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,r=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),gg!==r&&Pt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Do(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(bj))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Do(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(kj))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:i_,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(si.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{put(t,n,r,i){}merge(t,n,r,i){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,r){}onDisconnectMerge(t,n,r){}onDisconnectCancel(t,n){}reportStats(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(t){this.allowedEvents_=t,this.listeners_={},I(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const r=[...this.listeners_[t]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(t,n,r){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:r});const i=this.getInitialEvent(t);i&&n.apply(r,i)}off(t,n,r){this.validateEventType_(t);const i=this.listeners_[t]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(t){I(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu extends GE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ug()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Qu}getInitialEvent(t){return I(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_=32,o_=768;class le{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function Q(){return new le("")}function Y(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Rr(e){return e.pieces_.length-e.pieceNum_}function ce(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new le(e.pieces_,t)}function KE(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Dj(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function YE(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function qE(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new le(t,0)}function Re(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof le)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const r=t.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new le(n,0)}function G(e){return e.pieceNum_>=e.pieces_.length}function ot(e,t){const n=Y(e),r=Y(t);if(n===null)return t;if(n===r)return ot(ce(e),ce(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function QE(e,t){if(Rr(e)!==Rr(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function sn(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(Rr(e)>Rr(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class Lj{constructor(t,n){this.errorPrefix_=n,this.parts_=YE(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=id(this.parts_[r]);XE(this)}}function $j(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=id(t),XE(e)}function Fj(e){const t=e.parts_.pop();e.byteLength_-=id(t),e.parts_.length>0&&(e.byteLength_-=1)}function XE(e){if(e.byteLength_>o_)throw new Error(e.errorPrefix_+"has a key path longer than "+o_+" bytes ("+e.byteLength_+").");if(e.parts_.length>s_)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+s_+") or object contains a cycle "+Jr(e))}function Jr(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g extends GE{constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[t];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new _g}getInitialEvent(t){return I(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao=1e3,Mj=60*5*1e3,a_=30*1e3,jj=1.3,zj=3e4,Uj="server_kill",l_=3;class zn extends HE{constructor(t,n,r,i,s,o,a,l){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=zn.nextPersistentConnectionId_++,this.log_=Ba("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ao,this.maxReconnectDelay_=Mj,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!rE())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");_g.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&Qu.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,r){const i=++this.requestNumber_,s={r:i,a:t,b:n};this.log_(Oe(s)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(t){this.initConnection_();const n=new lg,i={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(t,n,r,i){this.initConnection_();const s=t._queryIdentifier,o=t._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),I(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:t,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(t){const n=t.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";t.tag&&(s.q=n._queryObject,s.t=t.tag),s.h=t.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;zn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===t&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),t.onComplete&&t.onComplete(u,l))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&Qn(t,"w")){const r=Rs(t,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Pt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||x$(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=a_)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=w$(t)?"auth":"gauth",r={cred:t};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===t&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,r=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(t,n){const r=t._path.toString(),i=t._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),I(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,t._queryObject,n)}sendUnlisten_(t,n,r,i){this.log_("Unlisten on "+t+" for "+n);const s={p:t},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:r})}onDisconnectMerge(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:r})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+t,s),this.sendRequest(t,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(t,n,r,i){this.putInternal("p",t,n,r,i)}merge(t,n,r,i){this.putInternal("m",t,n,r,i)}putInternal(t,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:t,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,r=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+Oe(t));const n=t.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):up("Unrecognized action received from server: "+Oe(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ao,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=ao,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>zj&&(this.reconnectDelay_=ao),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*jj)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+zn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?tt("getToken() completed but was canceled"):(tt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new Aj(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,r,g=>{Pt(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(Uj)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Pt(d),l())}}}interrupt(t){tt("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){tt("Resuming connection for reason: "+t),delete this.interruptReasons_[t],P0(this.interruptReasons_)&&(this.reconnectDelay_=ao,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let r;n?r=n.map(s=>mg(s)).join("$"):r="default";const i=this.removeListen_(t,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(t,n){const r=new le(t).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(t,n){tt("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=l_&&(this.reconnectDelay_=a_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){tt("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=l_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+EE.replace(/\./g,"-")]=1,ug()?t["framework.cordova"]=1:nE()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=Qu.getInstance().currentlyOnline();return P0(this.interruptReasons_)&&t}}zn.nextPersistentConnectionId_=0;zn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ad{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const r=new H(As,t),i=new H(As,n);return this.compare(r,i)!==0}minPost(){return H.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _l;class JE extends ad{static get __EMPTY_NODE(){return _l}static set __EMPTY_NODE(t){_l=t}compare(t,n){return Ks(t.name,n.name)}isDefinedOn(t){throw Hs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return H.MIN}maxPost(){return new H(Ti,_l)}makePost(t,n){return I(typeof t=="string","KeyIndex indexValue must always be a string."),new H(t,_l)}toString(){return".key"}}const ms=new JE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(t,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!t.isEmpty();)if(t=t,o=n?r(t.key,n):1,i&&(o*=-1),o<0)this.isReverse_?t=t.left:t=t.right;else if(o===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class Me{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??Me.RED,this.left=i??gt.EMPTY_NODE,this.right=s??gt.EMPTY_NODE}copy(t,n,r,i,s){return new Me(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return gt.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let r,i;if(r=this,n(t,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(t,r.key)===0){if(r.right.isEmpty())return gt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}Me.RED=!0;Me.BLACK=!1;class Bj{copy(t,n,r,i,s){return this}insert(t,n,r){return new Me(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class gt{constructor(t,n=gt.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new gt(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,Me.BLACK,null,null))}remove(t){return new gt(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Me.BLACK,null,null))}get(t){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(t,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(t){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(t,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new wl(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new wl(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new wl(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new wl(this.root_,null,this.comparator_,!0,t)}}gt.EMPTY_NODE=new Bj;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vj(e,t){return Ks(e.name,t.name)}function wg(e,t){return Ks(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dp;function Wj(e){dp=e}const ZE=function(e){return typeof e=="number"?"number:"+IE(e):"string:"+e},eC=function(e){if(e.isLeafNode()){const t=e.val();I(typeof t=="string"||typeof t=="number"||typeof t=="object"&&Qn(t,".sv"),"Priority must be a string or number.")}else I(e===dp||e.isEmpty(),"priority of unexpected type.");I(e===dp||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let u_;class Le{constructor(t,n=Le.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),eC(this.priorityNode_)}static set __childrenNodeConstructor(t){u_=t}static get __childrenNodeConstructor(){return u_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new Le(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return G(t)?this:Y(t)===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:Le.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const r=Y(t);return r===null?n:n.isEmpty()&&r!==".priority"?this:(I(r!==".priority"||Rr(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Le.__childrenNodeConstructor.EMPTY_NODE.updateChild(ce(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+ZE(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=IE(this.value_):t+=this.value_,this.lazyHash_=TE(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===Le.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof Le.__childrenNodeConstructor?-1:(I(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,r=typeof this.value_,i=Le.VALUE_TYPE_ORDER.indexOf(n),s=Le.VALUE_TYPE_ORDER.indexOf(r);return I(i>=0,"Unknown leaf type: "+n),I(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Le.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tC,nC;function Hj(e){tC=e}function Gj(e){nC=e}class Kj extends ad{compare(t,n){const r=t.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ks(t.name,n.name):s}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return H.MIN}maxPost(){return new H(Ti,new Le("[PRIORITY-POST]",nC))}makePost(t,n){const r=tC(t);return new H(n,new Le("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ee=new Kj;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yj=Math.log(2);class qj{constructor(t){const n=s=>parseInt(Math.log(s)/Yj,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const i=r(this.count);this.bits_=t+1&i}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const Xu=function(e,t,n,r){e.sort(t);const i=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=e[l],f=n?n(d):d,new Me(f,d.node,Me.BLACK,null,null);{const g=parseInt(c/2,10)+l,y=i(l,g),_=i(g+1,u);return d=e[g],f=n?n(d):d,new Me(f,d.node,Me.BLACK,y,_)}},s=function(l){let u=null,c=null,d=e.length;const f=function(y,_){const w=d-y,p=d;d-=y;const h=i(w+1,p),v=e[w],x=n?n(v):v;g(new Me(x,v.node,_,null,h))},g=function(y){u?(u.left=y,u=y):(c=y,u=y)};for(let y=0;y<l.count;++y){const _=l.nextBitIsOne(),w=Math.pow(2,l.count-(y+1));_?f(w,Me.BLACK):(f(w,Me.BLACK),f(w,Me.RED))}return c},o=new qj(e.length),a=s(o);return new gt(r||t,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let If;const Ui={};class Fn{constructor(t,n){this.indexes_=t,this.indexSet_=n}static get Default(){return I(Ui&&Ee,"ChildrenNode.ts has not been loaded"),If=If||new Fn({".priority":Ui},{".priority":Ee}),If}get(t){const n=Rs(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof gt?n:null}hasIndex(t){return Qn(this.indexSet_,t.toString())}addIndex(t,n){I(t!==ms,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(H.Wrap);let o=s.getNext();for(;o;)i=i||t.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Xu(r,t.getCompare()):a=Ui;const l=t.toString(),u=Object.assign({},this.indexSet_);u[l]=t;const c=Object.assign({},this.indexes_);return c[l]=a,new Fn(c,u)}addToIndexes(t,n){const r=Uu(this.indexes_,(i,s)=>{const o=Rs(this.indexSet_,s);if(I(o,"Missing index implementation for "+s),i===Ui)if(o.isDefinedOn(t.node)){const a=[],l=n.getIterator(H.Wrap);let u=l.getNext();for(;u;)u.name!==t.name&&a.push(u),u=l.getNext();return a.push(t),Xu(a,o.getCompare())}else return Ui;else{const a=n.get(t.name);let l=i;return a&&(l=l.remove(new H(t.name,a))),l.insert(t,t.node)}});return new Fn(r,this.indexSet_)}removeFromIndexes(t,n){const r=Uu(this.indexes_,i=>{if(i===Ui)return i;{const s=n.get(t.name);return s?i.remove(new H(t.name,s)):i}});return new Fn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lo;class U{constructor(t,n,r){this.children_=t,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&eC(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return lo||(lo=new U(new gt(wg),null,Fn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||lo}updatePriority(t){return this.children_.isEmpty()?this:new U(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?lo:n}}getChild(t){const n=Y(t);return n===null?this:this.getImmediateChild(n).getChild(ce(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(I(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const r=new H(t,n);let i,s;n.isEmpty()?(i=this.children_.remove(t),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(t,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?lo:this.priorityNode_;return new U(i,o,s)}}updateChild(t,n){const r=Y(t);if(r===null)return n;{I(Y(t)!==".priority"||Rr(t)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ce(t),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ee,(o,a)=>{n[o]=a.val(t),r++,s&&U.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!t&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+ZE(this.getPriority().val())+":"),this.forEachChild(Ee,(n,r)=>{const i=r.hash();i!==""&&(t+=":"+n+":"+i)}),this.lazyHash_=t===""?"":TE(t)}return this.lazyHash_}getPredecessorChildName(t,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new H(t,n));return s?s.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new H(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new H(n,this.children_.get(n)):null}forEachChild(t,n){const r=this.resolveIndex_(t);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(t,i=>i);{const i=this.children_.getIteratorFrom(t.name,H.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,t)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(t,i=>i);{const i=this.children_.getReverseIteratorFrom(t.name,H.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,t)>0;)i.getNext(),s=i.peek();return i}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Wa?-1:0}withIndex(t){if(t===ms||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new U(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===ms||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ee),i=n.getIterator(Ee);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(t){return t===ms?null:this.indexMap_.get(t.toString())}}U.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Qj extends U{constructor(){super(new gt(wg),U.EMPTY_NODE,Fn.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return U.EMPTY_NODE}isEmpty(){return!1}}const Wa=new Qj;Object.defineProperties(H,{MIN:{value:new H(As,U.EMPTY_NODE)},MAX:{value:new H(Ti,Wa)}});JE.__EMPTY_NODE=U.EMPTY_NODE;Le.__childrenNodeConstructor=U;Wj(Wa);Gj(Wa);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xj=!0;function He(e,t=null){if(e===null)return U.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),I(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new Le(n,He(t))}if(!(e instanceof Array)&&Xj){const n=[];let r=!1;if(wt(e,(o,a)=>{if(o.substring(0,1)!=="."){const l=He(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new H(o,l)))}}),n.length===0)return U.EMPTY_NODE;const s=Xu(n,Vj,o=>o.name,wg);if(r){const o=Xu(n,Ee.getCompare());return new U(s,He(t),new Fn({".priority":o},{".priority":Ee}))}else return new U(s,He(t),Fn.Default)}else{let n=U.EMPTY_NODE;return wt(e,(r,i)=>{if(Qn(e,r)&&r.substring(0,1)!=="."){const s=He(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(He(t))}}Hj(He);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jj extends ad{constructor(t){super(),this.indexPath_=t,I(!G(t)&&Y(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const r=this.extractChild(t.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ks(t.name,n.name):s}makePost(t,n){const r=He(t),i=U.EMPTY_NODE.updateChild(this.indexPath_,r);return new H(n,i)}maxPost(){const t=U.EMPTY_NODE.updateChild(this.indexPath_,Wa);return new H(Ti,t)}toString(){return YE(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zj extends ad{compare(t,n){const r=t.node.compareTo(n.node);return r===0?Ks(t.name,n.name):r}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return H.MIN}maxPost(){return H.MAX}makePost(t,n){const r=He(t);return new H(n,r)}toString(){return".value"}}const e3=new Zj;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rC(e){return{type:"value",snapshotNode:e}}function Ds(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function ya(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function va(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function t3(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(t){this.index_=t}updateChild(t,n,r,i,s,o){I(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=t.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?t.hasChild(n)?o.trackChildChange(ya(n,a)):I(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ds(n,r)):o.trackChildChange(va(n,r,a))),t.isLeafNode()&&r.isEmpty())?t:t.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(t,n,r){return r!=null&&(t.isLeafNode()||t.forEachChild(Ee,(i,s)=>{n.hasChild(i)||r.trackChildChange(ya(i,s))}),n.isLeafNode()||n.forEachChild(Ee,(i,s)=>{if(t.hasChild(i)){const o=t.getImmediateChild(i);o.equals(s)||r.trackChildChange(va(i,s,o))}else r.trackChildChange(Ds(i,s))})),n.withIndex(this.index_)}updatePriority(t,n){return t.isEmpty()?U.EMPTY_NODE:t.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(t){this.indexedFilter_=new xg(t.getIndex()),this.index_=t.getIndex(),this.startPost_=_a.getStartPost_(t),this.endPost_=_a.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,r=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return n&&r}updateChild(t,n,r,i,s,o){return this.matches(new H(n,r))||(r=U.EMPTY_NODE),this.indexedFilter_.updateChild(t,n,r,i,s,o)}updateFullNode(t,n,r){n.isLeafNode()&&(n=U.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(U.EMPTY_NODE);const s=this;return n.forEachChild(Ee,(o,a)=>{s.matches(new H(o,a))||(i=i.updateImmediateChild(o,U.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,i,r)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const n=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),n)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const n=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),n)}else return t.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n3{constructor(t){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new _a(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,n,r,i,s,o){return this.rangedFilter_.matches(new H(n,r))||(r=U.EMPTY_NODE),t.getImmediateChild(n).equals(r)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,n,r,i,s,o):this.fullLimitUpdateChild_(t,n,r,s,o)}updateFullNode(t,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=U.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=U.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(U.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,U.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,i,r)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,g)=>d(g,f)}else o=this.index_.getCompare();const a=t;I(a.numChildren()===this.limit_,"");const l=new H(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,l);if(c&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(va(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ya(n,d));const _=a.updateImmediateChild(n,U.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Ds(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return r.isEmpty()?t:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(ya(u.name,u.node)),s.trackChildChange(Ds(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,U.EMPTY_NODE)):t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ee}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:As}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ti}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ee}copy(){const t=new Sg;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function r3(e){return e.loadsAllData()?new xg(e.getIndex()):e.hasLimit()?new n3(e):new _a(e)}function c_(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Ee?n="$priority":e.index_===e3?n="$value":e.index_===ms?n="$key":(I(e.index_ instanceof Jj,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Oe(n),e.startSet_){const r=e.startAfterSet_?"startAfter":"startAt";t[r]=Oe(e.indexStartValue_),e.startNameSet_&&(t[r]+=","+Oe(e.indexStartName_))}if(e.endSet_){const r=e.endBeforeSet_?"endBefore":"endAt";t[r]=Oe(e.indexEndValue_),e.endNameSet_&&(t[r]+=","+Oe(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function d_(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==Ee&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju extends HE{constructor(t,n,r,i){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ba("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(I(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,n,r,i){const s=t._path.toString();this.log_("Listen called for "+s+" "+t._queryIdentifier);const o=Ju.getListenId_(t,r),a={};this.listens_[o]=a;const l=c_(t._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Rs(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(t,n){const r=Ju.getListenId_(t,n);delete this.listens_[r]}get(t){const n=c_(t._queryParams),r=t._path.toString(),i=new lg;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(t){}restRequest_(t,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+rd(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=da(a.responseText)}catch{Pt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Pt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i3{constructor(){this.rootNode_=U.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(){return{value:null,children:new Map}}function iC(e,t,n){if(G(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const r=Y(t);e.children.has(r)||e.children.set(r,Zu());const i=e.children.get(r);t=ce(t),iC(i,t,n)}}function fp(e,t,n){e.value!==null?n(t,e.value):s3(e,(r,i)=>{const s=new le(t.toString()+"/"+r);fp(i,s,n)})}function s3(e,t){e.children.forEach((n,r)=>{t(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o3{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n=Object.assign({},t);return this.last_&&wt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_=10*1e3,a3=30*1e3,l3=5*60*1e3;class u3{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new o3(t);const r=f_+(a3-f_)*Math.random();Do(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const t=this.statsListener_.get(),n={};let r=!1;wt(t,(i,s)=>{s>0&&Qn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Do(this.reportStats_.bind(this),Math.floor(Math.random()*2*l3))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var on;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(on||(on={}));function sC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Eg(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Cg(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(t,n,r){this.path=t,this.affectedTree=n,this.revert=r,this.type=on.ACK_USER_WRITE,this.source=sC()}operationForChild(t){if(G(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new le(t));return new ec(Q(),n,this.revert)}}else return I(Y(this.path)===t,"operationForChild called for unrelated child."),new ec(ce(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class c3{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function d3(e,t,n,r){const i=[],s=[];return t.forEach(o=>{o.type==="child_changed"&&e.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(t3(o.childName,o.snapshotNode))}),uo(e,i,"child_removed",t,r,n),uo(e,i,"child_added",t,r,n),uo(e,i,"child_moved",s,r,n),uo(e,i,"child_changed",t,r,n),uo(e,i,"value",t,r,n),i}function uo(e,t,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>h3(e,a,l)),o.forEach(a=>{const l=f3(e,a,s);i.forEach(u=>{u.respondsTo(a.type)&&t.push(u.createEvent(l,e.query_))})})}function f3(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function h3(e,t,n){if(t.childName==null||n.childName==null)throw Hs("Should only compare child_ events.");const r=new H(t.childName,t.snapshotNode),i=new H(n.childName,n.snapshotNode);return e.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(e,t){return{eventCache:e,serverCache:t}}function Lo(e,t,n,r){return ld(new Nr(t,n,r),e.serverCache)}function oC(e,t,n,r){return ld(e.eventCache,new Nr(t,n,r))}function tc(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function ki(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pf;const p3=()=>(Pf||(Pf=new gt(ZM)),Pf);class me{constructor(t,n=p3()){this.value=t,this.children=n}static fromObject(t){let n=new me(null);return wt(t,(r,i)=>{n=n.set(new le(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:Q(),value:this.value};if(G(t))return null;{const r=Y(t),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ce(t),n);return s!=null?{path:Re(new le(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(G(t))return this;{const n=Y(t),r=this.children.get(n);return r!==null?r.subtree(ce(t)):new me(null)}}set(t,n){if(G(t))return new me(n,this.children);{const r=Y(t),s=(this.children.get(r)||new me(null)).set(ce(t),n),o=this.children.insert(r,s);return new me(this.value,o)}}remove(t){if(G(t))return this.children.isEmpty()?new me(null):new me(null,this.children);{const n=Y(t),r=this.children.get(n);if(r){const i=r.remove(ce(t));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new me(null):new me(this.value,s)}else return this}}get(t){if(G(t))return this.value;{const n=Y(t),r=this.children.get(n);return r?r.get(ce(t)):null}}setTree(t,n){if(G(t))return n;{const r=Y(t),s=(this.children.get(r)||new me(null)).setTree(ce(t),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new me(this.value,o)}}fold(t){return this.fold_(Q(),t)}fold_(t,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Re(t,i),n)}),n(t,this.value,r)}findOnPath(t,n){return this.findOnPath_(t,Q(),n)}findOnPath_(t,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(G(t))return null;{const s=Y(t),o=this.children.get(s);return o?o.findOnPath_(ce(t),Re(n,s),r):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,Q(),n)}foreachOnPath_(t,n,r){if(G(t))return this;{this.value&&r(n,this.value);const i=Y(t),s=this.children.get(i);return s?s.foreachOnPath_(ce(t),Re(n,i),r):new me(null)}}foreach(t){this.foreach_(Q(),t)}foreach_(t,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Re(t,r),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,r)=>{r.value&&t(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(t){this.writeTree_=t}static empty(){return new dn(new me(null))}}function $o(e,t,n){if(G(t))return new dn(new me(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(r!=null){const i=r.path;let s=r.value;const o=ot(i,t);return s=s.updateChild(o,n),new dn(e.writeTree_.set(i,s))}else{const i=new me(n),s=e.writeTree_.setTree(t,i);return new dn(s)}}}function h_(e,t,n){let r=e;return wt(n,(i,s)=>{r=$o(r,Re(t,i),s)}),r}function p_(e,t){if(G(t))return dn.empty();{const n=e.writeTree_.setTree(t,new me(null));return new dn(n)}}function hp(e,t){return $i(e,t)!=null}function $i(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(ot(n.path,t)):null}function m_(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ee,(r,i)=>{t.push(new H(r,i))}):e.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&t.push(new H(r,i.value))}),t}function Tr(e,t){if(G(t))return e;{const n=$i(e,t);return n!=null?new dn(new me(n)):new dn(e.writeTree_.subtree(t))}}function pp(e){return e.writeTree_.isEmpty()}function Ls(e,t){return aC(Q(),e.writeTree_,t)}function aC(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal((i,s)=>{i===".priority"?(I(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=aC(Re(e,i),s,n)}),!n.getChild(e).isEmpty()&&r!==null&&(n=n.updateChild(Re(e,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(e,t){return dC(t,e)}function m3(e,t,n,r,i){I(r>e.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=$o(e.visibleWrites,t,n)),e.lastWriteId=r}function g3(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function y3(e,t){const n=e.allWrites.findIndex(a=>a.writeId===t);I(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,o=e.allWrites.length-1;for(;i&&o>=0;){const a=e.allWrites[o];a.visible&&(o>=n&&v3(a,r.path)?i=!1:sn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return _3(e),!0;if(r.snap)e.visibleWrites=p_(e.visibleWrites,r.path);else{const a=r.children;wt(a,l=>{e.visibleWrites=p_(e.visibleWrites,Re(r.path,l))})}return!0}else return!1}function v3(e,t){if(e.snap)return sn(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&sn(Re(e.path,n),t))return!0;return!1}function _3(e){e.visibleWrites=lC(e.allWrites,w3,Q()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function w3(e){return e.visible}function lC(e,t,n){let r=dn.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const o=s.path;let a;if(s.snap)sn(n,o)?(a=ot(n,o),r=$o(r,a,s.snap)):sn(o,n)&&(a=ot(o,n),r=$o(r,Q(),s.snap.getChild(a)));else if(s.children){if(sn(n,o))a=ot(n,o),r=h_(r,a,s.children);else if(sn(o,n))if(a=ot(o,n),G(a))r=h_(r,Q(),s.children);else{const l=Rs(s.children,Y(a));if(l){const u=l.getChild(ce(a));r=$o(r,Q(),u)}}}else throw Hs("WriteRecord should have .snap or .children")}}return r}function uC(e,t,n,r,i){if(!r&&!i){const s=$i(e.visibleWrites,t);if(s!=null)return s;{const o=Tr(e.visibleWrites,t);if(pp(o))return n;if(n==null&&!hp(o,Q()))return null;{const a=n||U.EMPTY_NODE;return Ls(o,a)}}}else{const s=Tr(e.visibleWrites,t);if(!i&&pp(s))return n;if(!i&&n==null&&!hp(s,Q()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(sn(u.path,t)||sn(t,u.path))},a=lC(e.allWrites,o,t),l=n||U.EMPTY_NODE;return Ls(a,l)}}}function x3(e,t,n){let r=U.EMPTY_NODE;const i=$i(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(Ee,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Tr(e.visibleWrites,t);return n.forEachChild(Ee,(o,a)=>{const l=Ls(Tr(s,new le(o)),a);r=r.updateImmediateChild(o,l)}),m_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Tr(e.visibleWrites,t);return m_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function S3(e,t,n,r,i){I(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Re(t,n);if(hp(e.visibleWrites,s))return null;{const o=Tr(e.visibleWrites,s);return pp(o)?i.getChild(n):Ls(o,i.getChild(n))}}function E3(e,t,n,r){const i=Re(t,n),s=$i(e.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Tr(e.visibleWrites,i);return Ls(o,r.getNode().getImmediateChild(n))}else return null}function C3(e,t){return $i(e.visibleWrites,t)}function T3(e,t,n,r,i,s,o){let a;const l=Tr(e.visibleWrites,t),u=$i(l,Q());if(u!=null)a=u;else if(n!=null)a=Ls(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=f.getNext();for(;g&&c.length<i;)d(g,r)!==0&&c.push(g),g=f.getNext();return c}else return[]}function b3(){return{visibleWrites:dn.empty(),allWrites:[],lastWriteId:-1}}function nc(e,t,n,r){return uC(e.writeTree,e.treePath,t,n,r)}function Tg(e,t){return x3(e.writeTree,e.treePath,t)}function g_(e,t,n,r){return S3(e.writeTree,e.treePath,t,n,r)}function rc(e,t){return C3(e.writeTree,Re(e.treePath,t))}function k3(e,t,n,r,i,s){return T3(e.writeTree,e.treePath,t,n,r,i,s)}function bg(e,t,n){return E3(e.writeTree,e.treePath,t,n)}function cC(e,t){return dC(Re(e.treePath,t),e.writeTree)}function dC(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I3{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,r=t.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,va(r,t.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ya(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ds(r,t.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,va(r,t.snapshotNode,i.oldSnap));else throw Hs("Illegal combination of changes: "+t+" occurred after "+i)}else this.changeMap.set(r,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P3{getCompleteChild(t){return null}getChildAfterChild(t,n,r){return null}}const fC=new P3;class kg{constructor(t,n,r=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const r=this.optCompleteServerCache_!=null?new Nr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return bg(this.writes_,t,r)}}getChildAfterChild(t,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ki(this.viewCache_),s=k3(this.writes_,i,n,1,r,t);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O3(e){return{filter:e}}function R3(e,t){I(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),I(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function N3(e,t,n,r,i){const s=new I3;let o,a;if(n.type===on.OVERWRITE){const u=n;u.source.fromUser?o=mp(e,t,u.path,u.snap,r,i,s):(I(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered()&&!G(u.path),o=ic(e,t,u.path,u.snap,r,i,a,s))}else if(n.type===on.MERGE){const u=n;u.source.fromUser?o=D3(e,t,u.path,u.children,r,i,s):(I(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered(),o=gp(e,t,u.path,u.children,r,i,a,s))}else if(n.type===on.ACK_USER_WRITE){const u=n;u.revert?o=F3(e,t,u.path,r,i,s):o=L3(e,t,u.path,u.affectedTree,r,i,s)}else if(n.type===on.LISTEN_COMPLETE)o=$3(e,t,n.path,r,s);else throw Hs("Unknown operation type: "+n.type);const l=s.getChanges();return A3(t,o,l),{viewCache:o,changes:l}}function A3(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=tc(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(rC(tc(t)))}}function hC(e,t,n,r,i,s){const o=t.eventCache;if(rc(r,n)!=null)return t;{let a,l;if(G(n))if(I(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const u=ki(t),c=u instanceof U?u:U.EMPTY_NODE,d=Tg(r,c);a=e.filter.updateFullNode(t.eventCache.getNode(),d,s)}else{const u=nc(r,ki(t));a=e.filter.updateFullNode(t.eventCache.getNode(),u,s)}else{const u=Y(n);if(u===".priority"){I(Rr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=t.serverCache.getNode();const d=g_(r,n,c,l);d!=null?a=e.filter.updatePriority(c,d):a=o.getNode()}else{const c=ce(n);let d;if(o.isCompleteForChild(u)){l=t.serverCache.getNode();const f=g_(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=bg(r,u,t.serverCache);d!=null?a=e.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return Lo(t,a,o.isFullyInitialized()||G(n),e.filter.filtersNodes())}}function ic(e,t,n,r,i,s,o,a){const l=t.serverCache;let u;const c=o?e.filter:e.filter.getIndexedFilter();if(G(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),g,null)}else{const g=Y(n);if(!l.isCompleteForPath(n)&&Rr(n)>1)return t;const y=ce(n),w=l.getNode().getImmediateChild(g).updateChild(y,r);g===".priority"?u=c.updatePriority(l.getNode(),w):u=c.updateChild(l.getNode(),g,w,y,fC,null)}const d=oC(t,u,l.isFullyInitialized()||G(n),c.filtersNodes()),f=new kg(i,d,s);return hC(e,d,n,i,f,a)}function mp(e,t,n,r,i,s,o){const a=t.eventCache;let l,u;const c=new kg(i,t,s);if(G(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,o),l=Lo(t,u,!0,e.filter.filtersNodes());else{const d=Y(n);if(d===".priority")u=e.filter.updatePriority(t.eventCache.getNode(),r),l=Lo(t,u,a.isFullyInitialized(),a.isFiltered());else{const f=ce(n),g=a.getNode().getImmediateChild(d);let y;if(G(f))y=r;else{const _=c.getCompleteChild(d);_!=null?KE(f)===".priority"&&_.getChild(qE(f)).isEmpty()?y=_:y=_.updateChild(f,r):y=U.EMPTY_NODE}if(g.equals(y))l=t;else{const _=e.filter.updateChild(a.getNode(),d,y,f,c,o);l=Lo(t,_,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function y_(e,t){return e.eventCache.isCompleteForChild(t)}function D3(e,t,n,r,i,s,o){let a=t;return r.foreach((l,u)=>{const c=Re(n,l);y_(t,Y(c))&&(a=mp(e,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=Re(n,l);y_(t,Y(c))||(a=mp(e,a,c,u,i,s,o))}),a}function v_(e,t,n){return n.foreach((r,i)=>{t=t.updateChild(r,i)}),t}function gp(e,t,n,r,i,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l=t,u;G(n)?u=r:u=new me(null).setTree(n,r);const c=t.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const g=t.serverCache.getNode().getImmediateChild(d),y=v_(e,g,f);l=ic(e,l,new le(d),y,i,s,o,a)}}),u.children.inorderTraversal((d,f)=>{const g=!t.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!g){const y=t.serverCache.getNode().getImmediateChild(d),_=v_(e,y,f);l=ic(e,l,new le(d),_,i,s,o,a)}}),l}function L3(e,t,n,r,i,s,o){if(rc(i,n)!=null)return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(r.value!=null){if(G(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ic(e,t,n,l.getNode().getChild(n),i,s,a,o);if(G(n)){let u=new me(null);return l.getNode().forEachChild(ms,(c,d)=>{u=u.set(new le(c),d)}),gp(e,t,n,u,i,s,a,o)}else return t}else{let u=new me(null);return r.foreach((c,d)=>{const f=Re(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),gp(e,t,n,u,i,s,a,o)}}function $3(e,t,n,r,i){const s=t.serverCache,o=oC(t,s.getNode(),s.isFullyInitialized()||G(n),s.isFiltered());return hC(e,o,n,r,fC,i)}function F3(e,t,n,r,i,s){let o;if(rc(r,n)!=null)return t;{const a=new kg(r,t,i),l=t.eventCache.getNode();let u;if(G(n)||Y(n)===".priority"){let c;if(t.serverCache.isFullyInitialized())c=nc(r,ki(t));else{const d=t.serverCache.getNode();I(d instanceof U,"serverChildren would be complete if leaf node"),c=Tg(r,d)}c=c,u=e.filter.updateFullNode(l,c,s)}else{const c=Y(n);let d=bg(r,c,t.serverCache);d==null&&t.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=e.filter.updateChild(l,c,d,ce(n),a,s):t.eventCache.getNode().hasChild(c)?u=e.filter.updateChild(l,c,U.EMPTY_NODE,ce(n),a,s):u=l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=nc(r,ki(t)),o.isLeafNode()&&(u=e.filter.updateFullNode(u,o,s)))}return o=t.serverCache.isFullyInitialized()||rc(r,Q())!=null,Lo(t,u,o,e.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M3{constructor(t,n){this.query_=t,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new xg(r.getIndex()),s=r3(r);this.processor_=O3(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(U.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(U.EMPTY_NODE,a.getNode(),null),c=new Nr(l,o.isFullyInitialized(),i.filtersNodes()),d=new Nr(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=ld(d,c),this.eventGenerator_=new c3(this.query_)}get query(){return this.query_}}function j3(e){return e.viewCache_.serverCache.getNode()}function z3(e){return tc(e.viewCache_)}function U3(e,t){const n=ki(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!G(t)&&!n.getImmediateChild(Y(t)).isEmpty())?n.getChild(t):null}function __(e){return e.eventRegistrations_.length===0}function B3(e,t){e.eventRegistrations_.push(t)}function w_(e,t,n){const r=[];if(n){I(t==null,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(t){let i=[];for(let s=0;s<e.eventRegistrations_.length;++s){const o=e.eventRegistrations_[s];if(!o.matches(t))i.push(o);else if(t.hasAnyCallback()){i=i.concat(e.eventRegistrations_.slice(s+1));break}}e.eventRegistrations_=i}else e.eventRegistrations_=[];return r}function x_(e,t,n,r){t.type===on.MERGE&&t.source.queryId!==null&&(I(ki(e.viewCache_),"We should always have a full cache before handling merges"),I(tc(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=N3(e.processor_,i,t,n,r);return R3(e.processor_,s.viewCache),I(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,pC(e,s.changes,s.viewCache.eventCache.getNode(),null)}function V3(e,t){const n=e.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ee,(s,o)=>{r.push(Ds(s,o))}),n.isFullyInitialized()&&r.push(rC(n.getNode())),pC(e,r,n.getNode(),t)}function pC(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return d3(e.eventGenerator_,t,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sc;class mC{constructor(){this.views=new Map}}function W3(e){I(!sc,"__referenceConstructor has already been defined"),sc=e}function H3(){return I(sc,"Reference.ts has not been loaded"),sc}function G3(e){return e.views.size===0}function Ig(e,t,n,r){const i=t.source.queryId;if(i!==null){const s=e.views.get(i);return I(s!=null,"SyncTree gave us an op for an invalid query."),x_(s,t,n,r)}else{let s=[];for(const o of e.views.values())s=s.concat(x_(o,t,n,r));return s}}function gC(e,t,n,r,i){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let a=nc(n,i?r:null),l=!1;a?l=!0:r instanceof U?(a=Tg(n,r),l=!1):(a=U.EMPTY_NODE,l=!1);const u=ld(new Nr(a,l,!1),new Nr(r,i,!1));return new M3(t,u)}return o}function K3(e,t,n,r,i,s){const o=gC(e,t,r,i,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),B3(o,n),V3(o,n)}function Y3(e,t,n,r){const i=t._queryIdentifier,s=[];let o=[];const a=Ar(e);if(i==="default")for(const[l,u]of e.views.entries())o=o.concat(w_(u,n,r)),__(u)&&(e.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=e.views.get(i);l&&(o=o.concat(w_(l,n,r)),__(l)&&(e.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Ar(e)&&s.push(new(H3())(t._repo,t._path)),{removed:s,events:o}}function yC(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function br(e,t){let n=null;for(const r of e.views.values())n=n||U3(r,t);return n}function vC(e,t){if(t._queryParams.loadsAllData())return cd(e);{const r=t._queryIdentifier;return e.views.get(r)}}function _C(e,t){return vC(e,t)!=null}function Ar(e){return cd(e)!=null}function cd(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oc;function q3(e){I(!oc,"__referenceConstructor has already been defined"),oc=e}function Q3(){return I(oc,"Reference.ts has not been loaded"),oc}let X3=1;class S_{constructor(t){this.listenProvider_=t,this.syncPointTree_=new me(null),this.pendingWriteTree_=b3(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function J3(e,t,n,r,i){return m3(e.pendingWriteTree_,t,n,r,i),i?Ga(e,new bi(sC(),t,n)):[]}function ss(e,t,n=!1){const r=g3(e.pendingWriteTree_,t);if(y3(e.pendingWriteTree_,t)){let s=new me(null);return r.snap!=null?s=s.set(Q(),!0):wt(r.children,o=>{s=s.set(new le(o),!0)}),Ga(e,new ec(r.path,s,n))}else return[]}function Ha(e,t,n){return Ga(e,new bi(Eg(),t,n))}function Z3(e,t,n){const r=me.fromObject(n);return Ga(e,new xa(Eg(),t,r))}function e4(e,t){return Ga(e,new wa(Eg(),t))}function t4(e,t,n){const r=Pg(e,n);if(r){const i=Og(r),s=i.path,o=i.queryId,a=ot(s,t),l=new wa(Cg(o),a);return Rg(e,s,l)}else return[]}function wC(e,t,n,r,i=!1){const s=t._path,o=e.syncPointTree_.get(s);let a=[];if(o&&(t._queryIdentifier==="default"||_C(o,t))){const l=Y3(o,t,n,r);G3(o)&&(e.syncPointTree_=e.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=e.syncPointTree_.findOnPath(s,(f,g)=>Ar(g));if(c&&!d){const f=e.syncPointTree_.subtree(s);if(!f.isEmpty()){const g=s4(f);for(let y=0;y<g.length;++y){const _=g[y],w=_.query,p=TC(e,_);e.listenProvider_.startListening(Fo(w),Sa(e,w),p.hashFn,p.onComplete)}}}!d&&u.length>0&&!r&&(c?e.listenProvider_.stopListening(Fo(t),null):u.forEach(f=>{const g=e.queryToTagMap.get(dd(f));e.listenProvider_.stopListening(Fo(f),g)}))}o4(e,u)}return a}function xC(e,t,n,r){const i=Pg(e,r);if(i!=null){const s=Og(i),o=s.path,a=s.queryId,l=ot(o,t),u=new bi(Cg(a),l,n);return Rg(e,o,u)}else return[]}function n4(e,t,n,r){const i=Pg(e,r);if(i){const s=Og(i),o=s.path,a=s.queryId,l=ot(o,t),u=me.fromObject(n),c=new xa(Cg(a),l,u);return Rg(e,o,c)}else return[]}function r4(e,t,n,r=!1){const i=t._path;let s=null,o=!1;e.syncPointTree_.foreachOnPath(i,(f,g)=>{const y=ot(f,i);s=s||br(g,y),o=o||Ar(g)});let a=e.syncPointTree_.get(i);a?(o=o||Ar(a),s=s||br(a,Q())):(a=new mC,e.syncPointTree_=e.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=U.EMPTY_NODE,e.syncPointTree_.subtree(i).foreachChild((g,y)=>{const _=br(y,Q());_&&(s=s.updateImmediateChild(g,_))}));const u=_C(a,t);if(!u&&!t._queryParams.loadsAllData()){const f=dd(t);I(!e.queryToTagMap.has(f),"View does not exist, but we have a tag");const g=a4();e.queryToTagMap.set(f,g),e.tagToQueryMap.set(g,f)}const c=ud(e.pendingWriteTree_,i);let d=K3(a,t,n,c,s,l);if(!u&&!o&&!r){const f=vC(a,t);d=d.concat(l4(e,t,f))}return d}function SC(e,t,n){const i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,(o,a)=>{const l=ot(o,t),u=br(a,l);if(u)return u});return uC(i,t,s,n,!0)}function i4(e,t){const n=t._path;let r=null;e.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=ot(u,n);r=r||br(c,d)});let i=e.syncPointTree_.get(n);i?r=r||br(i,Q()):(i=new mC,e.syncPointTree_=e.syncPointTree_.set(n,i));const s=r!=null,o=s?new Nr(r,!0,!1):null,a=ud(e.pendingWriteTree_,t._path),l=gC(i,t,a,s?o.getNode():U.EMPTY_NODE,s);return z3(l)}function Ga(e,t){return EC(t,e.syncPointTree_,null,ud(e.pendingWriteTree_,Q()))}function EC(e,t,n,r){if(G(e.path))return CC(e,t,n,r);{const i=t.get(Q());n==null&&i!=null&&(n=br(i,Q()));let s=[];const o=Y(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=cC(r,o);s=s.concat(EC(a,l,u,c))}return i&&(s=s.concat(Ig(i,e,r,n))),s}}function CC(e,t,n,r){const i=t.get(Q());n==null&&i!=null&&(n=br(i,Q()));let s=[];return t.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=cC(r,o),c=e.operationForChild(o);c&&(s=s.concat(CC(c,a,l,u)))}),i&&(s=s.concat(Ig(i,e,r,n))),s}function TC(e,t){const n=t.query,r=Sa(e,n);return{hashFn:()=>(j3(t)||U.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?t4(e,n._path,r):e4(e,n._path);{const s=nj(i,n);return wC(e,n,null,s)}}}}function Sa(e,t){const n=dd(t);return e.queryToTagMap.get(n)}function dd(e){return e._path.toString()+"$"+e._queryIdentifier}function Pg(e,t){return e.tagToQueryMap.get(t)}function Og(e){const t=e.indexOf("$");return I(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new le(e.substr(0,t))}}function Rg(e,t,n){const r=e.syncPointTree_.get(t);I(r,"Missing sync point for query tag that we're tracking");const i=ud(e.pendingWriteTree_,t);return Ig(r,n,i,null)}function s4(e){return e.fold((t,n,r)=>{if(n&&Ar(n))return[cd(n)];{let i=[];return n&&(i=yC(n)),wt(r,(s,o)=>{i=i.concat(o)}),i}})}function Fo(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(Q3())(e._repo,e._path):e}function o4(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const i=dd(r),s=e.queryToTagMap.get(i);e.queryToTagMap.delete(i),e.tagToQueryMap.delete(s)}}}function a4(){return X3++}function l4(e,t,n){const r=t._path,i=Sa(e,t),s=TC(e,n),o=e.listenProvider_.startListening(Fo(t),i,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(r);if(i)I(!Ar(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!G(u)&&c&&Ar(c))return[cd(c).query];{let f=[];return c&&(f=f.concat(yC(c).map(g=>g.query))),wt(d,(g,y)=>{f=f.concat(y)}),f}});for(let u=0;u<l.length;++u){const c=l[u];e.listenProvider_.stopListening(Fo(c),Sa(e,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new Ng(n)}node(){return this.node_}}class Ag{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=Re(this.path_,t);return new Ag(this.syncTree_,n)}node(){return SC(this.syncTree_,this.path_)}}const u4=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},E_=function(e,t,n){if(!e||typeof e!="object")return e;if(I(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return c4(e[".sv"],t,n);if(typeof e[".sv"]=="object")return d4(e[".sv"],t);I(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},c4=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+e)}},d4=function(e,t,n){e.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;typeof r!="number"&&I(!1,"Unexpected increment value: "+r);const i=t.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},f4=function(e,t,n,r){return Dg(t,new Ag(n,e),r)},h4=function(e,t,n){return Dg(e,new Ng(t),n)};function Dg(e,t,n){const r=e.getPriority().val(),i=E_(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const o=e,a=E_(o.getValue(),t,n);return a!==o.getValue()||i!==o.getPriority().val()?new Le(a,He(i)):e}else{const o=e;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Le(i))),o.forEachChild(Ee,(a,l)=>{const u=Dg(l,t.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(t="",n=null,r={children:{},childCount:0}){this.name=t,this.parent=n,this.node=r}}function $g(e,t){let n=t instanceof le?t:new le(t),r=e,i=Y(n);for(;i!==null;){const s=Rs(r.node.children,i)||{children:{},childCount:0};r=new Lg(i,r,s),n=ce(n),i=Y(n)}return r}function Ys(e){return e.node.value}function bC(e,t){e.node.value=t,yp(e)}function kC(e){return e.node.childCount>0}function p4(e){return Ys(e)===void 0&&!kC(e)}function fd(e,t){wt(e.node.children,(n,r)=>{t(new Lg(n,e,r))})}function IC(e,t,n,r){n&&!r&&t(e),fd(e,i=>{IC(i,t,!0,r)}),n&&r&&t(e)}function m4(e,t,n){let r=n?e:e.parent;for(;r!==null;){if(t(r))return!0;r=r.parent}return!1}function Ka(e){return new le(e.parent===null?e.name:Ka(e.parent)+"/"+e.name)}function yp(e){e.parent!==null&&g4(e.parent,e.name,e)}function g4(e,t,n){const r=p4(n),i=Qn(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,yp(e)):!r&&!i&&(e.node.children[t]=n.node,e.node.childCount++,yp(e))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y4=/[\[\].#$\/\u0000-\u001F\u007F]/,v4=/[\[\].#$\u0000-\u001F\u007F]/,Of=10*1024*1024,PC=function(e){return typeof e=="string"&&e.length!==0&&!y4.test(e)},OC=function(e){return typeof e=="string"&&e.length!==0&&!v4.test(e)},_4=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),OC(e)},RC=function(e,t,n){const r=n instanceof le?new Lj(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+Jr(r));if(typeof t=="function")throw new Error(e+"contains a function "+Jr(r)+" with contents = "+t.toString());if(bE(t))throw new Error(e+"contains "+t.toString()+" "+Jr(r));if(typeof t=="string"&&t.length>Of/3&&id(t)>Of)throw new Error(e+"contains a string greater than "+Of+" utf8 bytes "+Jr(r)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let i=!1,s=!1;if(wt(t,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!PC(o)))throw new Error(e+" contains an invalid key ("+o+") "+Jr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);$j(r,o),RC(e,a,r),Fj(r)}),i&&s)throw new Error(e+' contains ".value" child '+Jr(r)+" in addition to actual children.")}},NC=function(e,t,n,r){if(!(r&&n===void 0)&&!OC(n))throw new Error(sE(e,t)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},w4=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),NC(e,t,n,r)},x4=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!PC(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!_4(n))throw new Error(sE(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S4{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function E4(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();n!==null&&!QE(s,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function Br(e,t,n){E4(e,n),C4(e,r=>sn(r,t)||sn(t,r))}function C4(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const s=i.path;t(s)?(T4(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function T4(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const r=n.getEventRunner();hi&&tt("event: "+n.toString()),Va(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b4="repo_interrupt",k4=25;class I4{constructor(t,n,r,i){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new S4,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Zu(),this.transactionQueueTree_=new Lg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function P4(e,t,n){if(e.stats_=yg(e.repoInfo_),e.forceRestClient_||oj())e.server_=new Ju(e.repoInfo_,(r,i,s,o)=>{C_(e,r,i,s,o)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>T_(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Oe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new zn(e.repoInfo_,t,(r,i,s,o)=>{C_(e,r,i,s,o)},r=>{T_(e,r)},r=>{R4(e,r)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(r=>{e.server_.refreshAuthToken(r)}),e.appCheckProvider_.addTokenChangeListener(r=>{e.server_.refreshAppCheckToken(r.token)}),e.statsReporter_=dj(e.repoInfo_,()=>new u3(e.stats_,e.server_)),e.infoData_=new i3,e.infoSyncTree_=new S_({startListening:(r,i,s,o)=>{let a=[];const l=e.infoData_.getNode(r._path);return l.isEmpty()||(a=Ha(e.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Fg(e,"connected",!1),e.serverSyncTree_=new S_({startListening:(r,i,s,o)=>(e.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);Br(e.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{e.server_.unlisten(r,i)}})}function O4(e){const n=e.infoData_.getNode(new le(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function AC(e){return u4({timestamp:O4(e)})}function C_(e,t,n,r,i){e.dataUpdateCount++;const s=new le(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(i)if(r){const l=Uu(n,u=>He(u));o=n4(e.serverSyncTree_,s,l,i)}else{const l=He(n);o=xC(e.serverSyncTree_,s,l,i)}else if(r){const l=Uu(n,u=>He(u));o=Z3(e.serverSyncTree_,s,l)}else{const l=He(n);o=Ha(e.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=zg(e,s)),Br(e.eventQueue_,a,o)}function T_(e,t){Fg(e,"connected",t),t===!1&&D4(e)}function R4(e,t){wt(t,(n,r)=>{Fg(e,n,r)})}function Fg(e,t,n){const r=new le("/.info/"+t),i=He(n);e.infoData_.updateSnapshot(r,i);const s=Ha(e.infoSyncTree_,r,i);Br(e.eventQueue_,r,s)}function N4(e){return e.nextWriteId_++}function A4(e,t,n){const r=i4(e.serverSyncTree_,t);return r!=null?Promise.resolve(r):e.server_.get(t).then(i=>{const s=He(i).withIndex(t._queryParams.getIndex());r4(e.serverSyncTree_,t,n,!0);let o;if(t._queryParams.loadsAllData())o=Ha(e.serverSyncTree_,t._path,s);else{const a=Sa(e.serverSyncTree_,t);o=xC(e.serverSyncTree_,t._path,s,a)}return Br(e.eventQueue_,t._path,o),wC(e.serverSyncTree_,t,n,null,!0),s},i=>(Mg(e,"get for query "+Oe(t)+" failed: "+i),Promise.reject(new Error(i))))}function D4(e){Mg(e,"onDisconnectEvents");const t=AC(e),n=Zu();fp(e.onDisconnect_,Q(),(i,s)=>{const o=f4(i,s,e.serverSyncTree_,t);iC(n,i,o)});let r=[];fp(n,Q(),(i,s)=>{r=r.concat(Ha(e.serverSyncTree_,i,s));const o=M4(e,i);zg(e,o)}),e.onDisconnect_=Zu(),Br(e.eventQueue_,Q(),r)}function L4(e){e.persistentConnection_&&e.persistentConnection_.interrupt(b4)}function Mg(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),tt(n,...t)}function DC(e,t,n){return SC(e.serverSyncTree_,t,n)||U.EMPTY_NODE}function jg(e,t=e.transactionQueueTree_){if(t||hd(e,t),Ys(t)){const n=$C(e,t);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&$4(e,Ka(t),n)}else kC(t)&&fd(t,n=>{jg(e,n)})}function $4(e,t,n){const r=n.map(u=>u.currentWriteId),i=DC(e,t,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];I(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=ot(t,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,u=>{Mg(e,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(ss(e.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();hd(e,$g(e.transactionQueueTree_,t)),jg(e,e.transactionQueueTree_),Br(e.eventQueue_,t,c);for(let f=0;f<d.length;f++)Va(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Pt("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}zg(e,t)}},o)}function zg(e,t){const n=LC(e,t),r=Ka(n),i=$C(e,n);return F4(e,i,r),r}function F4(e,t,n){if(t.length===0)return;const r=[];let i=[];const o=t.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<t.length;a++){const l=t[a],u=ot(n,l.path);let c=!1,d;if(I(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(ss(e.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=k4)c=!0,d="maxretry",i=i.concat(ss(e.serverSyncTree_,l.currentWriteId,!0));else{const f=DC(e,l.path,o);l.currentInputSnapshot=f;const g=t[a].update(f.val());if(g!==void 0){RC("transaction failed: Data returned ",g,l.path);let y=He(g);typeof g=="object"&&g!=null&&Qn(g,".priority")||(y=y.updatePriority(f.getPriority()));const w=l.currentWriteId,p=AC(e),h=h4(y,f,p);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=h,l.currentWriteId=N4(e),o.splice(o.indexOf(w),1),i=i.concat(J3(e.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(ss(e.serverSyncTree_,w,!0))}else c=!0,d="nodata",i=i.concat(ss(e.serverSyncTree_,l.currentWriteId,!0))}Br(e.eventQueue_,n,i),i=[],c&&(t[a].status=2,function(f){setTimeout(f,Math.floor(0))}(t[a].unwatcher),t[a].onComplete&&(d==="nodata"?r.push(()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot)):r.push(()=>t[a].onComplete(new Error(d),!1,null))))}hd(e,e.transactionQueueTree_);for(let a=0;a<r.length;a++)Va(r[a]);jg(e,e.transactionQueueTree_)}function LC(e,t){let n,r=e.transactionQueueTree_;for(n=Y(t);n!==null&&Ys(r)===void 0;)r=$g(r,n),t=ce(t),n=Y(t);return r}function $C(e,t){const n=[];return FC(e,t,n),n.sort((r,i)=>r.order-i.order),n}function FC(e,t,n){const r=Ys(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);fd(t,i=>{FC(e,i,n)})}function hd(e,t){const n=Ys(t);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,bC(t,n.length>0?n:void 0)}fd(t,r=>{hd(e,r)})}function M4(e,t){const n=Ka(LC(e,t)),r=$g(e.transactionQueueTree_,t);return m4(r,i=>{Rf(e,i)}),Rf(e,r),IC(r,i=>{Rf(e,i)}),n}function Rf(e,t){const n=Ys(t);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ss(e.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?bC(t,void 0):n.length=s+1,Br(e.eventQueue_,Ka(t),i);for(let o=0;o<r.length;o++)Va(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j4(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}t+="/"+i}return t}function z4(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Pt(`Invalid query segment '${n}' in query '${e}'`)}return t}const b_=function(e,t){const n=U4(e),r=n.namespace;n.domain==="firebase.com"&&Gn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Gn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||XM();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new ME(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new le(n.pathString)}},U4=function(e){let t="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof e=="string"){let u=e.indexOf("//");u>=0&&(a=e.substring(0,u-1),e=e.substring(u+2));let c=e.indexOf("/");c===-1&&(c=e.length);let d=e.indexOf("?");d===-1&&(d=e.length),t=e.substring(0,Math.min(c,d)),c<d&&(i=j4(e.substring(c,d)));const f=z4(e.substring(Math.min(e.length,d)));u=t.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(t.substring(u+1),10)):u=t.length;const g=t.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const y=t.indexOf(".");r=t.substring(0,y).toLowerCase(),n=t.substring(y+1),s=r}"ns"in f&&(s=f.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B4{constructor(t,n,r,i){this.eventType=t,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Oe(this.snapshot.exportVal())}}class V4{constructor(t,n,r){this.eventRegistration=t,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W4{constructor(t,n){this.snapshotCallback=t,this.cancelCallback=n}onValue(t,n){this.snapshotCallback.call(null,t,n)}onCancel(t){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
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
 */class Ug{constructor(t,n,r,i){this._repo=t,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return G(this._path)?null:KE(this._path)}get ref(){return new Xn(this._repo,this._path)}get _queryIdentifier(){const t=d_(this._queryParams),n=mg(t);return n==="{}"?"default":n}get _queryObject(){return d_(this._queryParams)}isEqual(t){if(t=Gt(t),!(t instanceof Ug))return!1;const n=this._repo===t._repo,r=QE(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Dj(this._path)}}class Xn extends Ug{constructor(t,n){super(t,n,new Sg,!1)}get parent(){const t=qE(this._path);return t===null?null:new Xn(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class Ea{constructor(t,n,r){this._node=t,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const n=new le(t),r=ac(this.ref,t);return new Ea(this._node.getChild(n),r,Ee)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>t(new Ea(i,ac(this.ref,r),Ee)))}hasChild(t){const n=new le(t);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function H4(e,t){return e=Gt(e),e._checkNotDeleted("ref"),t!==void 0?ac(e._root,t):e._root}function ac(e,t){return e=Gt(e),Y(e._path)===null?w4("child","path",t,!1):NC("child","path",t,!1),new Xn(e._repo,Re(e._path,t))}function G4(e){e=Gt(e);const t=new W4(()=>{}),n=new Bg(t);return A4(e._repo,e,n).then(r=>new Ea(r,new Xn(e._repo,e._path),e._queryParams.getIndex()))}class Bg{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,n){const r=n._queryParams.getIndex();return new B4("value",this,new Ea(t.snapshotNode,new Xn(n._repo,n._path),r))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new V4(this,t,n):null}matches(t){return t instanceof Bg?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}W3(Xn);q3(Xn);/**
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
 */const K4="FIREBASE_DATABASE_EMULATOR_HOST",vp={};let Y4=!1;function q4(e,t,n,r){e.repoInfo_=new ME(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}function Q4(e,t,n,r,i){let s=r||e.options.databaseURL;s===void 0&&(e.options.projectId||Gn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),tt("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o=b_(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[K4]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=b_(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new ps(ps.OWNER):new lj(e.name,e.options,t);x4("Invalid Firebase Database URL",o),G(o.path)||Gn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=J4(a,e,c,new aj(e.name,n));return new Z4(d,e)}function X4(e,t){const n=vp[t];(!n||n[e.key]!==e)&&Gn(`Database ${t}(${e.repoInfo_}) has already been deleted.`),L4(e),delete n[e.key]}function J4(e,t,n,r){let i=vp[t.name];i||(i={},vp[t.name]=i);let s=i[e.toURLString()];return s&&Gn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new I4(e,Y4,n,r),i[e.toURLString()]=s,s}class Z4{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(P4(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Xn(this._repo,Q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(X4(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&Gn("Cannot call "+t+" on a deleted database.")}}function e6(e=EF(),t){const n=lE(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const r=d$("database");r&&t6(n,...r)}return n}function t6(e,t,n,r={}){e=Gt(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&Gn("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Gn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ps(ps.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:h$(r.mockUserToken,e.app.options.projectId);s=new ps(o)}q4(i,t,n,s)}/**
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
 */function n6(e){GM(sd),Ns(new xi("database",(t,{instanceIdentifier:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return Q4(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Cr(Y0,q0,e),Cr(Y0,q0,"esm2017")}zn.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};zn.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};n6();const r6={apiKey:"AIzaSyDkWC69rklVP4x89l4iBxXBRgp9ClD9p40",authDomain:"test-582b2.firebaseapp.com",projectId:"test-582b2",storageBucket:"test-582b2.appspot.com",messagingSenderId:"925130837675",appId:"1:925130837675:web:d3470003dae1803bf931ee",databaseURL:"https://test-582b2-default-rtdb.europe-west1.firebasedatabase.app/"},MC=uE(r6),Vg=xM(MC),i6=e6(MC);new An;const Hl=nd("auth/signUp",async({name:e,email:t,password:n},r)=>{try{const s=(await LM(Vg,t,n)).user;return await MM(s,{displayName:e}),{isAuthenticated:!0,email:s.email}}catch(i){return r.rejectWithValue(i.message)}}),Gl=nd("auth/signIn",async({email:e,password:t},n)=>{try{const i=(await $M(Vg,e,t)).user;return{isAuthenticated:!0,name:i.displayName,email:i.email}}catch(r){return n.rejectWithValue(r.message)}}),Mo=nd("auth/logout",async(e,t)=>{try{await jM(Vg)}catch(n){return t.rejectWithValue(n.message)}});var jC={exports:{}},zC={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ya=T;function s6(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var o6=typeof Object.is=="function"?Object.is:s6,a6=Ya.useSyncExternalStore,l6=Ya.useRef,u6=Ya.useEffect,c6=Ya.useMemo,d6=Ya.useDebugValue;zC.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=l6(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=c6(function(){function l(g){if(!u){if(u=!0,c=g,g=r(g),i!==void 0&&o.hasValue){var y=o.value;if(i(y,g))return d=y}return d=g}if(y=d,o6(c,g))return y;var _=r(g);return i!==void 0&&i(y,_)?y:(c=g,d=_)}var u=!1,c,d,f=n===void 0?null:n;return[function(){return l(t())},f===null?void 0:function(){return l(f())}]},[t,n,r,i]);var a=a6(e,s[0],s[1]);return u6(function(){o.hasValue=!0,o.value=a},[a]),d6(a),a};jC.exports=zC;var f6=jC.exports,Tt="default"in jo?at:jo,k_=Symbol.for("react-redux-context"),I_=typeof globalThis<"u"?globalThis:{};function h6(){if(!Tt.createContext)return{};const e=I_[k_]??(I_[k_]=new Map);let t=e.get(Tt.createContext);return t||(t=Tt.createContext(null),e.set(Tt.createContext,t)),t}var Dr=h6(),p6=()=>{throw new Error("uSES not initialized!")};function Wg(e=Dr){return function(){return Tt.useContext(e)}}var UC=Wg(),BC=p6,m6=e=>{BC=e},g6=(e,t)=>e===t;function y6(e=Dr){const t=e===Dr?UC:Wg(e),n=(r,i={})=>{const{equalityFn:s=g6,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:l,getServerState:u,stabilityCheck:c,identityFunctionCheck:d}=t();Tt.useRef(!0);const f=Tt.useCallback({[r.name](y){return r(y)}}[r.name],[r,c,o.stabilityCheck]),g=BC(l.addNestedSub,a.getState,u||a.getState,f,s);return Tt.useDebugValue(g),g};return Object.assign(n,{withTypes:()=>n}),n}var Sn=y6();function v6(e){e()}function _6(){let e=null,t=null;return{clear(){e=null,t=null},notify(){v6(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var P_={notify(){},get:()=>[]};function w6(e,t){let n,r=P_,i=0,s=!1;function o(_){c();const w=r.subscribe(_);let p=!1;return()=>{p||(p=!0,w(),d())}}function a(){r.notify()}function l(){y.onStateChange&&y.onStateChange()}function u(){return s}function c(){i++,n||(n=t?t.addNestedSub(l):e.subscribe(l),r=_6())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=P_)}function f(){s||(s=!0,c())}function g(){s&&(s=!1,d())}const y={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:f,tryUnsubscribe:g,getListeners:()=>r};return y}var x6=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",S6=x6?Tt.useLayoutEffect:Tt.useEffect;function E6({store:e,context:t,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=Tt.useMemo(()=>{const u=w6(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[e,r,i,s]),a=Tt.useMemo(()=>e.getState(),[e]);S6(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const l=t||Dr;return Tt.createElement(l.Provider,{value:o},n)}var C6=E6;function VC(e=Dr){const t=e===Dr?UC:Wg(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var T6=VC();function b6(e=Dr){const t=e===Dr?T6:VC(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var qs=b6();m6(f6.useSyncExternalStoreWithSelector);function WC({onClose:e,color:t}){const n=qs(),r=$c({userName:jn().min(2,"Name must be at least 2 characters long").max(16,"Name can be at most 16 characters long").matches(/^[a-zA-Z\s]+$/,"Name must contain only English letters and spaces").required("Name is required"),email:jn().email("Invalid email format").matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Invalid Email format").required("Email is required"),password:jn().min(6,"Password must be at least 6 characters long").max(16,"Password can be at most 16 characters long").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,"Password must contain only English letters at least one digit, one lowercase letter, and one uppercase letter").required("Password is required")}),i=Zm({initialValues:{userName:"",email:"",password:""},validationSchema:r,onSubmit:async s=>{console.log(s),n(Hl(s))}});return m.jsxs(tR,{onSubmit:i.handleSubmit,children:[m.jsx(nR,{children:"Registration"}),m.jsx(rR,{children:"Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"}),m.jsxs(of,{children:[m.jsx(lf,{id:"userName",name:"userName",type:"text",placeholder:"Name",onChange:i.handleChange,value:i.values.userName,className:`${i.touched.userName&&i.errors.userName?"is-invalid":""}`}),i.touched.userName&&i.errors.userName?m.jsx(m.Fragment,{children:m.jsx(af,{children:i.errors.userName})}):null]}),m.jsxs(of,{children:[m.jsx(lf,{id:"email",name:"email",type:"text",placeholder:"Email",onChange:i.handleChange,value:i.values.email,className:`${i.touched.email&&i.errors.email?"is-invalid":""}`}),i.touched.email&&i.errors.email?m.jsx(m.Fragment,{children:m.jsx(af,{children:i.errors.email})}):null]}),m.jsxs(of,{children:[m.jsx(lf,{id:"password",name:"password",type:i.values.showPassword?"text":"password",placeholder:"Password",onChange:i.handleChange,value:i.values.password,className:`${i.touched.password&&i.errors.password?"is-invalid":""}`}),m.jsx(iR,{type:"button",onClick:()=>{i.setFieldTouched("password",!1),i.setFieldValue("showPassword",!i.values.showPassword)},children:i.values.showPassword?m.jsx(Vv,{children:m.jsx("use",{href:ut+"#iconEyeOpen"})}):m.jsx(Vv,{children:m.jsx("use",{href:ut+"#iconEyeClosed"})})}),i.touched.password&&i.errors.password?m.jsx(af,{children:i.errors.password}):null]}),m.jsx(sR,{color:t,type:"submit",children:"Sign Up"}),m.jsx(oR,{onClick:()=>e(!1),children:m.jsx(aR,{children:m.jsx("use",{href:ut+"#icon-x"})})})]})}const k6=L.form`
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
`,O_=L.div`
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
`;const I6=L.h2`
  line-height: 1.2;
  letter-spacing: -0.8px;
  font-weight: 500;
  margin-bottom: 20px;
  color: var(--secondar);
  @media (min-width: 768px) {
    font-size: 40px;
  }
`,P6=L.p`
  @media (min-width: 768px) {
  width: 438px;
  }

  font-size: 16px;
  font-weight: 400;
  line-height: 1.38;
  margin-bottom: 40px;
  color: rgba(18, 20, 23, 0.8);
`,R_=L.p`
  margin-left: 15px;
  font-size: 12px;
  font-weight: 400;
  color: var(--red);
`,O6=L.button`
  position: absolute;
  right: 18px;
  top: 17px;
  background-color: transparent;
  border: none;
  padding: 0px;
`,N_=L.input`
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
`,R6=L.button`
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
`,N6=L.button`
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
`;const A6=L.svg`
  stroke: var(--secondary);
  fill: none;
  width: 32px;
  height: 32px;
`,A_=L.svg`
  stroke: var(--secondary);
  fill: none;
  display: inline-block;
  width: 24px;
  height: 24px;
`;function HC({onClose:e,color:t}){const n=qs(),r=$c({email:jn().email("Invalid email format").matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Invalid Email format").required("Email is required"),password:jn().min(6,"Password must be at least 6 characters long").max(16,"Password can be at most 16 characters long").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,"Password must contain only English letters at least one digit, one lowercase letter, and one uppercase letter").required("Password is required")}),i=Zm({initialValues:{email:"",password:""},validationSchema:r,onSubmit:async s=>{await n(Gl(s))}});return m.jsxs(k6,{onSubmit:i.handleSubmit,children:[m.jsx(I6,{children:"Log In"}),m.jsx(P6,{children:"Welcome back! Please enter your credentials to access your account and continue your search for an teacher."}),m.jsxs(O_,{children:[m.jsx(N_,{id:"email",name:"email",type:"text",placeholder:"Email",onChange:i.handleChange,value:i.values.email,className:`${i.touched.email&&i.errors.email?"is-invalid":""}`}),i.touched.email&&i.errors.email?m.jsx(m.Fragment,{children:m.jsx(R_,{children:i.errors.email})}):null]}),m.jsxs(O_,{children:[m.jsx(N_,{id:"password",name:"password",type:i.values.showPassword?"text":"password",placeholder:"Password",onChange:i.handleChange,value:i.values.password,className:`${i.touched.password&&i.errors.password?"is-invalid":""}`}),m.jsx(O6,{type:"button",onClick:()=>{i.setFieldTouched("password",!1),i.setFieldValue("showPassword",!i.values.showPassword)},children:i.values.showPassword?m.jsx(A_,{children:m.jsx("use",{href:ut+"#iconEyeOpen"})}):m.jsx(A_,{children:m.jsx("use",{href:ut+"#iconEyeClosed"})})}),i.touched.password&&i.errors.password?m.jsx(R_,{children:i.errors.password}):null]}),m.jsx(R6,{color:t,type:"submit",children:"Log In"}),m.jsx(N6,{onClick:()=>e(!1),children:m.jsx(A6,{children:m.jsx("use",{href:ut+"#icon-x"})})})]})}function _p({color:e,regis:t,log:n,ShowModal:r,setNavstate:i}){const[s,o]=T.useState(!1),[a,l]=T.useState(!1),u=()=>{r&&(r(!1),n(!0)),i&&(i("closed"),l(!a)),l(!a)},c=()=>{r&&(r(!1),t(!0)),i&&(i("closed"),o(!s)),o(!s)};return m.jsxs(m.Fragment,{children:[m.jsxs(oO,{children:[m.jsxs(aO,{onClick:u,color:e,children:[m.jsx(Yx,{color:e,children:m.jsx("use",{href:ut+"#icon-log-in-01"})}),"Log in"]}),m.jsx(lO,{onClick:c,color:e,children:"Registration"})]}),s&&m.jsx(ns,{onClose:o,children:m.jsx(WC,{color:e,onClose:o})}),a&&m.jsx(ns,{onClose:l,children:m.jsx(HC,{color:e,onClose:l})})]})}const D_=L.nav`
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
    &:hover{
   color:${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  }
`;function GC({color:e,setNavstate:t}){return m.jsx(m.Fragment,{children:t?m.jsxs(m.Fragment,{children:[m.jsxs(D_,{children:[m.jsx(xl,{color:e,to:"/Home",onClick:()=>t("closed"),children:"Home"}),m.jsx(xl,{color:e,to:"/Teachers",onClick:()=>t("closed"),children:"Teachers"})]}),m.jsx(_p,{color:e,setNavstate:t})]}):m.jsxs(m.Fragment,{children:[m.jsxs(D_,{children:[m.jsx(xl,{color:e,to:"/Home",children:"Home"}),m.jsx(xl,{color:e,to:"/Teachers",children:"Teachers"})]}),m.jsx(_p,{color:e,setNavstate:t})]})})}const L_=L.nav`
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
  &:hover{
   color:${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  }
`,D6=L.button`
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
    &:hover{
   color:${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  }
`;function KC({color:e,setNavstate:t}){const n=qs(),r=()=>{t&&(n(Mo()),t("closed")),n(Mo())};return m.jsxs(m.Fragment,{children:[t?m.jsxs(L_,{children:[" ",m.jsx(Bi,{color:e,to:"/Home",onClick:()=>t("closed"),children:"Home"}),m.jsx(Bi,{color:e,to:"/Teachers",onClick:()=>t("closed"),children:"Teachers"}),m.jsx(Bi,{color:e,to:"/Favorites",onClick:()=>t("closed"),children:"Favorites"})]}):m.jsxs(L_,{children:[m.jsx(Bi,{color:e,to:"/Home",children:"Home"}),m.jsx(Bi,{color:e,to:"/Teachers",children:"Teachers"}),m.jsx(Bi,{color:e,to:"/Favorites",children:"Favorites"})," "]}),m.jsxs(D6,{onClick:r,color:e,children:[m.jsx(Yx,{color:e,children:m.jsx("use",{href:ut+"#icon-log-in-01"})}),"Log out"]})]})}const pd=e=>e.Auth.isAuth,L6=L.button`
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
  transition:  all 0.5s;
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
`,F6=({navstate:e,handleNavstate:t,color:n})=>m.jsx(L6,{onClick:()=>t(),children:m.jsx($6,{navstate:e,color:n})}),M6=L.div`
  flex-basis: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,j6=L.ul`
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
`,z6=({color:e})=>{const[t,n]=T.useState("default"),r=Sn(pd),i=()=>{n(t==="default"?"opened":t==="opened"?"closed":"opened")};return m.jsxs(M6,{children:[m.jsx(F6,{navstate:t,handleNavstate:i,color:e}),m.jsx(j6,{display:t,children:r?m.jsx(KC,{color:e,setNavstate:n}):m.jsx(GC,{color:e,setNavstate:n})})]})},U6=({color:e})=>{const t=Sn(pd);return m.jsxs(rO,{children:[m.jsxs(iO,{children:[m.jsxs(Lv,{to:"/Home",children:[m.jsx(Dv,{children:m.jsx("use",{href:ut+"#icon-ukraine"})}),m.jsx($v,{children:"LearnLingo"})]}),t?m.jsx(KC,{color:e}):m.jsx(GC,{color:e})]}),m.jsxs(sO,{children:[m.jsxs(Lv,{to:"/Home",children:[m.jsx(Dv,{children:m.jsx("use",{href:ut+"#icon-ukraine"})}),m.jsx($v,{children:"LearnLingo"})]}),m.jsx(z6,{color:e})]})]})};function wp(){return wp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wp.apply(this,arguments)}function B6(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function V6(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var W6=function(){function e(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(V6(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=B6(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Ze="-ms-",lc="-moz-",X="-webkit-",YC="comm",Hg="rule",Gg="decl",H6="@import",qC="@keyframes",G6="@layer",K6=Math.abs,md=String.fromCharCode,Y6=Object.assign;function q6(e,t){return We(e,0)^45?(((t<<2^We(e,0))<<2^We(e,1))<<2^We(e,2))<<2^We(e,3):0}function QC(e){return e.trim()}function Q6(e,t){return(e=t.exec(e))?e[0]:e}function J(e,t,n){return e.replace(t,n)}function xp(e,t){return e.indexOf(t)}function We(e,t){return e.charCodeAt(t)|0}function Ca(e,t,n){return e.slice(t,n)}function yn(e){return e.length}function Kg(e){return e.length}function Sl(e,t){return t.push(e),e}function X6(e,t){return e.map(t).join("")}var gd=1,$s=1,XC=0,xt=0,ke=0,Qs="";function yd(e,t,n,r,i,s,o){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:gd,column:$s,length:o,return:""}}function co(e,t){return Y6(yd("",null,null,"",null,null,0),e,{length:-e.length},t)}function J6(){return ke}function Z6(){return ke=xt>0?We(Qs,--xt):0,$s--,ke===10&&($s=1,gd--),ke}function Ot(){return ke=xt<XC?We(Qs,xt++):0,$s++,ke===10&&($s=1,gd++),ke}function En(){return We(Qs,xt)}function Kl(){return xt}function qa(e,t){return Ca(Qs,e,t)}function Ta(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function JC(e){return gd=$s=1,XC=yn(Qs=e),xt=0,[]}function ZC(e){return Qs="",e}function Yl(e){return QC(qa(xt-1,Sp(e===91?e+2:e===40?e+1:e)))}function e5(e){for(;(ke=En())&&ke<33;)Ot();return Ta(e)>2||Ta(ke)>3?"":" "}function t5(e,t){for(;--t&&Ot()&&!(ke<48||ke>102||ke>57&&ke<65||ke>70&&ke<97););return qa(e,Kl()+(t<6&&En()==32&&Ot()==32))}function Sp(e){for(;Ot();)switch(ke){case e:return xt;case 34:case 39:e!==34&&e!==39&&Sp(ke);break;case 40:e===41&&Sp(e);break;case 92:Ot();break}return xt}function n5(e,t){for(;Ot()&&e+ke!==47+10;)if(e+ke===42+42&&En()===47)break;return"/*"+qa(t,xt-1)+"*"+md(e===47?e:Ot())}function r5(e){for(;!Ta(En());)Ot();return qa(e,xt)}function i5(e){return ZC(ql("",null,null,null,[""],e=JC(e),0,[0],e))}function ql(e,t,n,r,i,s,o,a,l){for(var u=0,c=0,d=o,f=0,g=0,y=0,_=1,w=1,p=1,h=0,v="",x=i,E=s,C=r,S=v;w;)switch(y=h,h=Ot()){case 40:if(y!=108&&We(S,d-1)==58){xp(S+=J(Yl(h),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:S+=Yl(h);break;case 9:case 10:case 13:case 32:S+=e5(y);break;case 92:S+=t5(Kl()-1,7);continue;case 47:switch(En()){case 42:case 47:Sl(s5(n5(Ot(),Kl()),t,n),l);break;default:S+="/"}break;case 123*_:a[u++]=yn(S)*p;case 125*_:case 59:case 0:switch(h){case 0:case 125:w=0;case 59+c:p==-1&&(S=J(S,/\f/g,"")),g>0&&yn(S)-d&&Sl(g>32?F_(S+";",r,n,d-1):F_(J(S," ","")+";",r,n,d-2),l);break;case 59:S+=";";default:if(Sl(C=$_(S,t,n,u,c,i,a,v,x=[],E=[],d),s),h===123)if(c===0)ql(S,t,C,C,x,s,d,a,E);else switch(f===99&&We(S,3)===110?100:f){case 100:case 108:case 109:case 115:ql(e,C,C,r&&Sl($_(e,C,C,0,0,i,a,v,i,x=[],d),E),i,E,d,a,r?x:E);break;default:ql(S,C,C,C,[""],E,0,a,E)}}u=c=g=0,_=p=1,v=S="",d=o;break;case 58:d=1+yn(S),g=y;default:if(_<1){if(h==123)--_;else if(h==125&&_++==0&&Z6()==125)continue}switch(S+=md(h),h*_){case 38:p=c>0?1:(S+="\f",-1);break;case 44:a[u++]=(yn(S)-1)*p,p=1;break;case 64:En()===45&&(S+=Yl(Ot())),f=En(),c=d=yn(v=S+=r5(Kl())),h++;break;case 45:y===45&&yn(S)==2&&(_=0)}}return s}function $_(e,t,n,r,i,s,o,a,l,u,c){for(var d=i-1,f=i===0?s:[""],g=Kg(f),y=0,_=0,w=0;y<r;++y)for(var p=0,h=Ca(e,d+1,d=K6(_=o[y])),v=e;p<g;++p)(v=QC(_>0?f[p]+" "+h:J(h,/&\f/g,f[p])))&&(l[w++]=v);return yd(e,t,n,i===0?Hg:a,l,u,c)}function s5(e,t,n){return yd(e,t,n,YC,md(J6()),Ca(e,2,-2),0)}function F_(e,t,n,r){return yd(e,t,n,Gg,Ca(e,0,r),Ca(e,r+1,-1),r)}function gs(e,t){for(var n="",r=Kg(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function o5(e,t,n,r){switch(e.type){case G6:if(e.children.length)break;case H6:case Gg:return e.return=e.return||e.value;case YC:return"";case qC:return e.return=e.value+"{"+gs(e.children,r)+"}";case Hg:e.value=e.props.join(",")}return yn(n=gs(e.children,r))?e.return=e.value+"{"+n+"}":""}function a5(e){var t=Kg(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}function l5(e){return function(t){t.root||(t=t.return)&&e(t)}}var u5=function(t,n,r){for(var i=0,s=0;i=s,s=En(),i===38&&s===12&&(n[r]=1),!Ta(s);)Ot();return qa(t,xt)},c5=function(t,n){var r=-1,i=44;do switch(Ta(i)){case 0:i===38&&En()===12&&(n[r]=1),t[r]+=u5(xt-1,n,r);break;case 2:t[r]+=Yl(i);break;case 4:if(i===44){t[++r]=En()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=md(i)}while(i=Ot());return t},d5=function(t,n){return ZC(c5(JC(t),n))},M_=new WeakMap,f5=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!M_.get(r))&&!i){M_.set(t,!0);for(var s=[],o=d5(n,s),a=r.props,l=0,u=0;l<o.length;l++)for(var c=0;c<a.length;c++,u++)t.props[u]=s[l]?o[l].replace(/&\f/g,a[c]):a[c]+" "+o[l]}}},h5=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function eT(e,t){switch(q6(e,t)){case 5103:return X+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return X+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return X+e+lc+e+Ze+e+e;case 6828:case 4268:return X+e+Ze+e+e;case 6165:return X+e+Ze+"flex-"+e+e;case 5187:return X+e+J(e,/(\w+).+(:[^]+)/,X+"box-$1$2"+Ze+"flex-$1$2")+e;case 5443:return X+e+Ze+"flex-item-"+J(e,/flex-|-self/,"")+e;case 4675:return X+e+Ze+"flex-line-pack"+J(e,/align-content|flex-|-self/,"")+e;case 5548:return X+e+Ze+J(e,"shrink","negative")+e;case 5292:return X+e+Ze+J(e,"basis","preferred-size")+e;case 6060:return X+"box-"+J(e,"-grow","")+X+e+Ze+J(e,"grow","positive")+e;case 4554:return X+J(e,/([^-])(transform)/g,"$1"+X+"$2")+e;case 6187:return J(J(J(e,/(zoom-|grab)/,X+"$1"),/(image-set)/,X+"$1"),e,"")+e;case 5495:case 3959:return J(e,/(image-set\([^]*)/,X+"$1$`$1");case 4968:return J(J(e,/(.+:)(flex-)?(.*)/,X+"box-pack:$3"+Ze+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+X+e+e;case 4095:case 3583:case 4068:case 2532:return J(e,/(.+)-inline(.+)/,X+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(yn(e)-1-t>6)switch(We(e,t+1)){case 109:if(We(e,t+4)!==45)break;case 102:return J(e,/(.+:)(.+)-([^]+)/,"$1"+X+"$2-$3$1"+lc+(We(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~xp(e,"stretch")?eT(J(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(We(e,t+1)!==115)break;case 6444:switch(We(e,yn(e)-3-(~xp(e,"!important")&&10))){case 107:return J(e,":",":"+X)+e;case 101:return J(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+X+(We(e,14)===45?"inline-":"")+"box$3$1"+X+"$2$3$1"+Ze+"$2box$3")+e}break;case 5936:switch(We(e,t+11)){case 114:return X+e+Ze+J(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return X+e+Ze+J(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return X+e+Ze+J(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return X+e+Ze+e+e}return e}var p5=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Gg:t.return=eT(t.value,t.length);break;case qC:return gs([co(t,{value:J(t.value,"@","@"+X)})],i);case Hg:if(t.length)return X6(t.props,function(s){switch(Q6(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return gs([co(t,{props:[J(s,/:(read-\w+)/,":"+lc+"$1")]})],i);case"::placeholder":return gs([co(t,{props:[J(s,/:(plac\w+)/,":"+X+"input-$1")]}),co(t,{props:[J(s,/:(plac\w+)/,":"+lc+"$1")]}),co(t,{props:[J(s,/:(plac\w+)/,Ze+"input-$1")]})],i)}return""})}},m5=[p5],g5=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(_){var w=_.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(_),_.setAttribute("data-s",""))})}var i=t.stylisPlugins||m5,s={},o,a=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(_){for(var w=_.getAttribute("data-emotion").split(" "),p=1;p<w.length;p++)s[w[p]]=!0;a.push(_)});var l,u=[f5,h5];{var c,d=[o5,l5(function(_){c.insert(_)})],f=a5(u.concat(i,d)),g=function(w){return gs(i5(w),f)};l=function(w,p,h,v){c=h,g(w?w+"{"+p.styles+"}":p.styles),v&&(y.inserted[p.name]=!0)}}var y={key:n,sheet:new W6({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:s,registered:{},insert:l};return y.sheet.hydrate(a),y},y5=!0;function v5(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var tT=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||y5===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},_5=function(t,n,r){tT(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var s=n;do t.insert(n===s?"."+i:"",s,t.sheet,!0),s=s.next;while(s!==void 0)}};function w5(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var x5=/[A-Z]|^ms/g,S5=/_EMO_([^_]+?)_([^]*?)_EMO_/g,nT=function(t){return t.charCodeAt(1)===45},j_=function(t){return t!=null&&typeof t!="boolean"},Nf=bx(function(e){return nT(e)?e:e.replace(x5,"-$&").toLowerCase()}),z_=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(S5,function(r,i,s){return vn={name:i,styles:s,next:vn},i})}return Ax[t]!==1&&!nT(t)&&typeof n=="number"&&n!==0?n+"px":n};function ba(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return vn={name:n.name,styles:n.styles,next:vn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)vn={name:r.name,styles:r.styles,next:vn},r=r.next;var i=n.styles+";";return i}return E5(e,t,n)}case"function":{if(e!==void 0){var s=vn,o=n(e);return vn=s,ba(e,t,o)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function E5(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=ba(e,t,n[i])+";";else for(var s in n){var o=n[s];if(typeof o!="object")t!=null&&t[o]!==void 0?r+=s+"{"+t[o]+"}":j_(o)&&(r+=Nf(s)+":"+z_(s,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var a=0;a<o.length;a++)j_(o[a])&&(r+=Nf(s)+":"+z_(s,o[a])+";");else{var l=ba(e,t,o);switch(s){case"animation":case"animationName":{r+=Nf(s)+":"+l+";";break}default:r+=s+"{"+l+"}"}}}return r}var U_=/label:\s*([^\s;\n{]+)\s*(;|$)/g,vn,C5=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,s="";vn=void 0;var o=t[0];o==null||o.raw===void 0?(i=!1,s+=ba(r,n,o)):s+=o[0];for(var a=1;a<t.length;a++)s+=ba(r,n,t[a]),i&&(s+=o[a]);U_.lastIndex=0;for(var l="",u;(u=U_.exec(s))!==null;)l+="-"+u[1];var c=w5(s)+l;return{name:c,styles:s,next:vn}},T5=function(t){return t()},b5=jo["useInsertionEffect"]?jo["useInsertionEffect"]:!1,k5=b5||T5,rT=T.createContext(typeof HTMLElement<"u"?g5({key:"css"}):null);rT.Provider;var I5=function(t){return T.forwardRef(function(n,r){var i=T.useContext(rT);return t(n,i,r)})},P5=T.createContext({}),O5=eP,R5=function(t){return t!=="theme"},B_=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?O5:R5},V_=function(t,n,r){var i;if(n){var s=n.shouldForwardProp;i=t.__emotion_forwardProp&&s?function(o){return t.__emotion_forwardProp(o)&&s(o)}:s}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},N5=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return tT(n,r,i),k5(function(){return _5(n,r,i)}),null},A5=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,s,o;n!==void 0&&(s=n.label,o=n.target);var a=V_(t,n,r),l=a||B_(i),u=!l("as");return function(){var c=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(s!==void 0&&d.push("label:"+s+";"),c[0]==null||c[0].raw===void 0)d.push.apply(d,c);else{d.push(c[0][0]);for(var f=c.length,g=1;g<f;g++)d.push(c[g],c[0][g])}var y=I5(function(_,w,p){var h=u&&_.as||i,v="",x=[],E=_;if(_.theme==null){E={};for(var C in _)E[C]=_[C];E.theme=T.useContext(P5)}typeof _.className=="string"?v=v5(w.registered,x,_.className):_.className!=null&&(v=_.className+" ");var S=C5(d.concat(x),w.registered,E);v+=w.key+"-"+S.name,o!==void 0&&(v+=" "+o);var P=u&&a===void 0?B_(h):l,F={};for(var $ in _)u&&$==="as"||P($)&&(F[$]=_[$]);return F.className=v,F.ref=p,T.createElement(T.Fragment,null,T.createElement(N5,{cache:w,serialized:S,isStringTag:typeof h=="string"}),T.createElement(h,F))});return y.displayName=s!==void 0?s:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",y.defaultProps=t.defaultProps,y.__emotion_real=y,y.__emotion_base=i,y.__emotion_styles=d,y.__emotion_forwardProp=a,Object.defineProperty(y,"toString",{value:function(){return"."+o}}),y.withComponent=function(_,w){return e(_,wp({},n,w,{shouldForwardProp:V_(y,w,!0)})).apply(void 0,d)},y}},D5=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],O=A5.bind();D5.forEach(function(e){O[e]=O(e)});const L5=O.div`
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
`,$5=O.div`
  position: relative;
  height: 200px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`,iT=({color:e})=>m.jsx(L5,{color:e,children:m.jsx($5,{children:m.jsxs("div",{className:"lds-ripple",children:[m.jsx("div",{}),m.jsx("div",{})]})})}),F5=({color:e})=>m.jsxs(m.Fragment,{children:[m.jsx(U6,{color:e}),m.jsx(T.Suspense,{fallback:m.jsx(iT,{color:e}),children:m.jsx(Mb,{})})]}),M5=O.div`
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
`,j5=O.div`
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
`,z5=O.h1`
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
`,U5=O.span`
  font-style: italic;
  font-weight: 400;
  line-height: 56px;
  letter-spacing: -0.96px;
  padding-right: 10px;
  border-radius: 12px;
  background-color: ${({color:e})=>e==="Blue"?"var(--hoverColorBlue)":e==="Green"?"var(--hoverColorGreen)":e==="Orange"?"var(--hoverColorYellow)":e==="Pink"?"var(--hoverColorPink)":e==="LightPink"?"var(--hoverColorCoral)":"var(--hoverCecondary-text-color)"};
`,B5=O.div`
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
`;O.img`
  width: 300px;
  height: 350px;
  @media screen and (min-width: 1280px) {
    width: 568px;
    height: 530px;
  }
`;const V5=O.p`
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
`,W5=O(Pa)`
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
`,H5=O.ul`
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
`,El=O.li`
  display: flex;
  flex-direction: row;
  gap: 16px;
`,Cl=O.span`
  font-size: 28px;
  line-height: 1.14;
  font-weight: 500;
  letter-spacing: -0.56px;
`,Tl=O.span`
  width: 74px;
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: -0.28px;
`,G5=O.div`
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
`,K5=O.div`
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
`,Y5="/Learn-Lingo/assets/hero2-726776c9.webp",q5=({color:e})=>(console.log(e),m.jsxs(M5,{children:[m.jsxs(j5,{children:[m.jsxs(B5,{children:[m.jsxs(z5,{children:["Unlock your potential with the best"," ",m.jsx(U5,{color:e,children:"language"})," tutors"]}),m.jsx(V5,{children:"Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors."}),m.jsx(W5,{to:"/Teachers",color:e,children:"Get started"})]}),m.jsxs(G5,{color:e,children:[m.jsx("img",{src:Y5,alt:""}),m.jsx(K5,{color:e,children:m.jsx("svg",{children:m.jsx("use",{href:ut+"#icon-apple"})})})]})]}),m.jsx("footer",{children:m.jsxs(H5,{color:e,children:[m.jsxs(El,{children:[m.jsx(Cl,{children:"32,000 +"}),m.jsx(Tl,{children:"Experienced tutors"})]}),m.jsxs(El,{children:[m.jsx(Cl,{children:"300,000 +"}),m.jsx(Tl,{children:"5-star tutor reviews"})]}),m.jsxs(El,{children:[m.jsx(Cl,{children:"120 +"}),m.jsx(Tl,{children:"Subjects taught"})]}),m.jsxs(El,{children:[m.jsx(Cl,{children:"200 +"}),m.jsx(Tl,{children:"Tutor nationalities"})]})]})})]})),Ep=O.ul`
  margin-top: 32px;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
`,Q5=O.button`
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
    transition:  background 300ms ;
  background-color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  &:hover {
    background-color: ${({color:e})=>e==="Blue"?"var(--hoverColorBlue)":e==="Green"?"var(--hoverColorGreen)":e==="Orange"?"var(--hoverColorYellow)":e==="Pink"?"var(--hoverColorPink)":e==="LightPink"?"var(--hoverColorCoral)":"var(--hoverCecondary-text-color)"};
  }
`,sT=O.div`
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
`;O.p`
  margin: 0;

  margin-bottom: 20px;
  margin-right: auto;
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.8px;
  color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
`;var oT={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},W_=at.createContext&&at.createContext(oT),X5=["attr","size","title"];function J5(e,t){if(e==null)return{};var n=Z5(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Z5(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function uc(){return uc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},uc.apply(this,arguments)}function H_(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function cc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?H_(Object(n),!0).forEach(function(r){e8(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H_(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function e8(e,t,n){return t=t8(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t8(e){var t=n8(e,"string");return typeof t=="symbol"?t:String(t)}function n8(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function aT(e){return e&&e.map((t,n)=>at.createElement(t.tag,cc({key:n},t.attr),aT(t.child)))}function vd(e){return t=>at.createElement(r8,uc({attr:cc({},e.attr)},t),aT(e.child))}function r8(e){var t=n=>{var{attr:r,size:i,title:s}=e,o=J5(e,X5),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),at.createElement("svg",uc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:cc(cc({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&at.createElement("title",null,s),e.children)};return W_!==void 0?at.createElement(W_.Consumer,null,n=>t(n)):t(oT)}function i8(e){return vd({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"},child:[]}]})(e)}function s8(e){return vd({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"},child:[]}]})(e)}function o8(e){return vd({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"},child:[]}]})(e)}function a8(e){return vd({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"},child:[]}]})(e)}const l8=O.li`
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
`,u8=O.div`
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
`,c8=O.img`
  position: relative;
  display: block;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
`,d8=O.svg`
      position: absolute;
      width: 12px;
      height: 12px;
      top:17px;
      right: 17px;
`,f8=O.div``,h8=O.div`
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
    font-weight:500;

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
`;O.div`
  display: flex;
  justify-content: space-between;
`;const p8=O.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,m8=O.ul`
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
`,G_=O(a8)`
  transform: scale(1);
  transition: transform 300ms cubic-bezier(0.39, 0.575, 0.565, 1);

  &:hover {
    transform: scale(1.02);
    opacity: 0.8;
  }
`,K_=O.button`
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
  background-color: transparent;
  border: none;
`,g8=O(i8)`
  transform: scale(1);
  transition: transform 300ms cubic-bezier(0.39, 0.575, 0.565, 1);

  &:hover {
    transform: scale(1.02);
    opacity: 0.8;
  }
`,y8=O(o8)`
  margin-right: 8px;
`,Y_=O(s8)`
  margin-right: 8px;
  fill: #ffc531;
`,v8=O.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  & p {
    color: var(--gray);
    margin: 0;
  }
`,_8=O.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
`,w8=O.p`
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
`,q_=O.p`
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
`,Q_=O.button`
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
`;O.svg`
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
`;const x8=O.p`
  margin-bottom: 32px;
  margin-top: 16px;

  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`,S8=O.ul`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
`,E8=O.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`,C8=O.div`
  display: flex;
  gap: 12px;
`,T8=O.div`
  width: 46px;
  height: 46px;
  border-radius: 100px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`,b8=O.p`
  display: block;
  border-radius: 100px;

  font-size: 24px;
  font-weight: 700;
`,k8=O.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
`,I8=O.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`,P8=O.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`,O8=O.button`
  padding: 16px 48px;
  border: none;
  border-radius: 12px;
  background-color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};

  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  margin-top: 32px;
`,R8=O.div`
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
`,N8=O.svg`
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
`,A8=O.h3`
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
`,D8=O.p`
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
`,Ql=nd("teachers/getAllTeachers",async(e,t)=>{const n=H4(i6);try{const r=await G4(ac(n,"/"));if(r.exists()){const i=r.val();return Object.values(i)}}catch(r){return t.rejectWithValue(r.message)}}),L8={teachers:[],teachersFilter:null,teachersFavorites:[],isLoading:!1},lT=QS({name:"teachers",initialState:L8,extraReducers:e=>{e.addCase(Ql.pending,t=>{t.isLoading=!0}).addCase(Ql.fulfilled,(t,{payload:n})=>{t.isLoading=!1,t.teachers=n}).addCase(Ql.rejected,t=>{t.isLoading=!1})},reducers:{addFavorites(e,t){e.teachersFavorites.push(t.payload)},deleteFavorites(e,t){const n=e.teachersFavorites.filter(r=>r.avatar_url!==t.payload.avatar_url);e.teachersFavorites=n},filterTeachers(e,t){return{...e,teachersFilter:t.payload}},resetFilter(e){return{...e,teachersFilter:null}}}}),{addFavorites:$8,deleteFavorites:F8,filterTeachers:M8,resetFilter:j8}=lT.actions,z8=lT.reducer,uT=e=>e.teachers.teachers,U8=e=>e.teachers.isLoading,cT=e=>e.teachers.teachersFavorites,B8=e=>e.teachers.teachersFilter,V8=O.form`
max-width:600px;
border-radius: 30px;
position: fixed;
transform: translateX(-50%) translateY(-50%);
background-color:white;
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

    
`,W8=O.div`
  margin-bottom: 18px;

`,H8=O.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,G8=O.div`
  
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: 21px;
  margin-top: 32px;
`,fo=O.label`
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
`,Af=O.div`
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
`,ho=O.input`
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
    border: 2px solid ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  }
  &:before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: scale(0);
    transition-property: transform;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: ${({color:e})=>e==="Blue"?"var(--colorBlue)  10px 10px inset":e==="Green"?"var(--colorGreen)  10px 10px inset":e==="Orange"?"var(--colorYellow)  10px 10px inset":e==="Pink"?"var(--colorPink)  10px 10px inset":e==="LightPink"?"var(--colorCoral)  10px 10px inset":"var(--cecondary-text-color)"}; ;
    background-color: transparent;
  }
  &:checked::before {
    transform: scale(1);
  }
  &:focus {

  }
`,K8=O.div`
  display: flex;
  gap: 12px;
`,Y8=O.div`
  width: 46px;
  height: 46px;
  border-radius: 100px;

  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`,q8=O.img`
  border-radius: 100%;
  background: #fff;
  overflow: hidden;
`,Q8=O.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
`,X8=O.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
`,J8=O.span`
  font-size: 16px;

  font-weight: 500;
  line-height: 1.5; /* 150% */
`,Z8=O.p`
  margin: 0;

  margin-bottom: 20px;
  margin-right: auto;
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2; /* 120% */
  letter-spacing: -0.8px;
  


`,ez=O.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
  }
`,tz=O.p`
  margin: 0;
  margin-bottom: 22px;
  margin-right: auto;
  color: rgba(18, 20, 23, 0.8);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.37;
`,Df=O.p`
  margin-left: 15px;
  font-size: 12px;
  font-weight: 400;
  color: var(--red);
`,nz=O.button`
border: none;
background-color:${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"} ;
    padding: 16px 215px;
    border-radius: 12px;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.6;
    width: 100%;
      @media screen and (max-width: 768px) {
    padding: 16px 70px;
      }
`,rz=O.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: transparent;
    border: none;
`,iz=O.svg`
    stroke: black;
        width: 32px;
height: 32px;
`,sz=({setIsBookModalOpened:e,teacherDataForBook:t,color:n})=>{const{name:r,surname:i,avatar_url:s}=t,o=()=>{e(!1),document.querySelector("body").classList.remove("modal-open")},a=$c({userName:jn().min(2,"Name must be at least 2 characters long").max(16,"Name can be at most 16 characters long").matches(/^[a-zA-Z\s]+$/,"Name must contain only English letters and spaces").required("Name is required"),email:jn().email("Invalid email format").matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Invalid Email format").required("Email is required"),phone:jn().matches(/^\+\d{12}$/,"Phone must have + and length 12").min(13,"Phone Too Short!").max(13,"Phone Too long").required("Required")}),l=Zm({initialValues:{userName:"",email:"",phone:""},validationSchema:a,onSubmit:async u=>{console.log(u),document.querySelector("body").classList.remove("modal-open"),e(!1)}});return m.jsxs(V8,{onSubmit:l.handleSubmit,children:[m.jsx(Z8,{children:"Book trial lesson"}),m.jsx(tz,{children:"Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."}),m.jsxs(K8,{children:[m.jsx(Y8,{children:m.jsx(q8,{src:s,height:"46px",width:"46px"})}),m.jsxs(Q8,{children:[m.jsx(X8,{children:"Your teacher"}),m.jsx(J8,{children:`${r} ${i}`})]})]}),m.jsx(G8,{children:"What is your main reason for learning English?"}),m.jsxs(H8,{children:[m.jsxs(fo,{children:[m.jsx(ho,{color:n,type:"radio",name:"mainReason",value:"Career and business"}),"Career and business"]}),m.jsxs(fo,{children:[m.jsx(ho,{color:n,type:"radio",name:"mainReason",value:"Lesson for kids"}),"Lesson for kids"]}),m.jsxs(fo,{children:[m.jsx(ho,{color:n,type:"radio",name:"mainReason",value:"Living abroad"}),"Living abroad"]}),m.jsxs(fo,{children:[m.jsx(ho,{color:n,type:"radio",name:"mainReason",value:"Exams and coursework"}),"Exams and coursework"]}),m.jsxs(fo,{children:[m.jsx(ho,{color:n,type:"radio",name:"mainReason",value:"Culture, travel or hobby"}),"Culture, travel or hobby"]})]}),m.jsxs(W8,{children:[m.jsxs(Af,{children:[m.jsx("input",{type:"text",name:"userName",placeholder:"Full Name",onChange:l.handleChange,value:l.values.userName,className:`${l.touched.userName&&l.errors.userName?"is-invalid":""}`}),l.touched.userName&&l.errors.userName?m.jsx(m.Fragment,{children:m.jsx(Df,{children:l.errors.userName})}):null]}),m.jsxs(Af,{children:[m.jsx("input",{type:"text",name:"email",placeholder:"Email",onChange:l.handleChange,value:l.values.email,className:`${l.touched.email&&l.errors.email?"is-invalid":""}`}),l.touched.email&&l.errors.email?m.jsx(m.Fragment,{children:m.jsx(Df,{children:l.errors.email})}):null]}),m.jsxs(Af,{children:[m.jsx("input",{type:"phone",name:"phone",placeholder:"Phone number",onChange:l.handleChange,value:l.values.phone,className:`${l.touched.phone&&l.errors.phone?"is-invalid":""}`}),l.touched.phone&&l.errors.phone?m.jsx(m.Fragment,{children:m.jsx(Df,{children:l.errors.phone})}):null]})]}),m.jsx(ez,{children:m.jsx(nz,{color:n,type:"submit",children:"Book"})}),m.jsx(rz,{onClick:o,children:m.jsx(iz,{children:m.jsx("use",{href:ut+"#icon-x"})})})]})},Cp=({teacher:e,levelFilter:t,color:n})=>{const{name:r,surname:i,languages:s,levels:o,rating:a,reviews:l,price_per_hour:u,lessons_done:c,avatar_url:d,lesson_info:f,conditions:g,experience:y}=e,_=qs(),[w,p]=T.useState(!1),[h,v]=T.useState(!1),[x,E]=T.useState(!1),[C,S]=T.useState(!1),[P,F]=T.useState(!1),$=Sn(cT),B=Sn(pd),[Ye,te]=T.useState(!1);T.useEffect(()=>{$.find(R=>R.avatar_url===d)!==void 0&&te(!0)},[d,$]);const rt=()=>{te(!Ye),_(Ye?F8(e):$8(e))},Kt=()=>{document.querySelector("body").classList.remove("modal-open"),v(!1)},Yt={name:r,surname:i,avatar_url:d};return m.jsxs(l8,{children:[m.jsxs(u8,{color:n,children:[m.jsx(c8,{src:d,height:"100px",width:"100px"}),m.jsx(d8,{children:m.jsx("use",{href:ut+"#icon-Group-82"})})]}),m.jsxs(f8,{children:[m.jsxs(h8,{children:[m.jsxs(v8,{children:[m.jsx("p",{children:"Languages"}),m.jsxs(_8,{children:[r," ",i]})]}),m.jsxs("ul",{children:[m.jsxs("li",{children:[m.jsx(y8,{size:"16px"})," Lessons online"]}),m.jsxs("li",{children:["Lessons done: ",c]}),m.jsxs("li",{children:[m.jsx(Y_,{})," Rating: ",a]}),m.jsxs("li",{children:["Price / 1 hour: ",m.jsxs("span",{children:[u," $"]})]})]}),B&&m.jsx(K_,{type:"button",onClick:rt,children:Ye?m.jsx(g8,{size:26}):m.jsx(G_,{size:26})}),!B&&m.jsxs(K_,{type:"button",onClick:()=>v(!0),children:[" ",m.jsx(G_,{size:26})," "]})]}),m.jsxs(w8,{children:["Speaks: ",m.jsx("span",{children:s==null?void 0:s.join(", ")})]}),m.jsxs(q_,{children:["Lesson Info:",m.jsx("span",{children:f})]}),m.jsxs(q_,{children:["Conditions:",m.jsx("span",{children:g})]}),!w&&m.jsx(Q_,{onClick:()=>p(!0),children:"Read more"}),w&&m.jsxs(m.Fragment,{children:[m.jsx(x8,{children:y}),m.jsx(S8,{children:l.map((ve,R)=>m.jsxs(E8,{children:[m.jsxs(C8,{children:[m.jsx(T8,{children:m.jsx(b8,{children:ve.reviewer_name.charAt(0).toUpperCase()})}),m.jsxs(k8,{children:[m.jsx(I8,{children:ve.reviewer_name}),m.jsxs("span",{children:[m.jsx(Y_,{}),ve.reviewer_rating,".0"]})]})]}),m.jsx(P8,{children:ve.comment})]},R))}),w&&m.jsx(Q_,{onClick:()=>p(!1),children:"Read less"})]}),m.jsx(p8,{children:o.map((ve,R)=>m.jsx(m8,{className:ve===t?"selected":"",children:ve},R))}),w&&m.jsx(O8,{color:n,onClick:B?()=>E(!0):()=>v(!0),className:"orderBtn",children:"Book trial lesson"}),x&&m.jsx(ns,{onClose:E,top:"d",state:x,children:m.jsx(sz,{color:n,setIsBookModalOpened:E,teacherDataForBook:Yt})}),h&&m.jsx(ns,{onClose:v,state:h,children:m.jsxs(R8,{children:[m.jsx(N8,{onClick:Kt,children:m.jsx("use",{href:ut+"#icon-x"})}),m.jsx(A8,{children:"Attention"}),m.jsx(D8,{children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."}),m.jsx(_p,{color:n,regis:S,log:F,ShowModal:v})]})}),C&&m.jsx(ns,{onClose:S,state:C,children:m.jsx(WC,{color:n,onClose:S})}),P&&m.jsx(ns,{onClose:F,state:P,children:m.jsx(HC,{color:n,onClose:F})})]})]})};let Tp=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,n)=>(n&=63,n<36?t+=n.toString(36):n<62?t+=(n-26).toString(36).toUpperCase():n>62?t+="-":t+="_",t),"");const oz=L.div`
  position: relative;
  display: inline-block;
  border-radius: 14px;
  background-color: #fff;
`,az=L.div`
  display: flex;
  align-items: center;
  gap: 0px 50px;
  padding: 14px 18px 14px 18px;
  cursor: pointer;
  border-radius: 14px;
`,lz=L.p`
  color: var(--secondary);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1;
  margin: 0px;
`,uz=L.ul`
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
`,cz=L.li`
  cursor: pointer;
  transition: color 300ms;
  color: rgba(18, 20, 23, 0.2);

  width: 100%;
  &:hover {
    color: var(--secondary);
  }
`,dz=L.svg`
  width: 20px;
  height: 20px;
  stroke-width: 0;
  stroke: currentColor;
  fill: transparent;
  transition: transform 300ms;
  transform: ${e=>e.$active&&"rotate(180deg)"};
`;function Lf({arr:e,value:t,set:n,height:r,selectedOption:i}){const[s,o]=T.useState(!1),a=()=>{o(!s)},l=c=>{n(c),o(!1)},u=T.useRef(null);return T.useEffect(()=>{const c=d=>{u.current&&!u.current.contains(d.target)&&o(!1)};return document.addEventListener("click",c),()=>{document.removeEventListener("click",c)}},[u]),m.jsxs(oz,{children:[m.jsxs(az,{onClick:a,ref:u,children:[m.jsx(lz,{children:i||t}),m.jsx(dz,{$active:s?!0:void 0,children:m.jsx("use",{href:ut+"#icon-chevron-down"})})]}),s&&m.jsx(uz,{$heigh:r||void 0,children:e.map((c,d)=>m.jsx(cz,{onClick:()=>l(c),children:c},d))})]})}const fz=L.ul`
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
`,hz=L.button`
  background-color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  border: none;
  border-radius: 12px;
  color: var(--secondary);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25;
  padding: 14px 39px;
  transition:  background 300ms ;
  &:hover {
    background-color: ${({color:e})=>e==="Blue"?"var(--hoverColorBlue)":e==="Green"?"var(--hoverColorGreen)":e==="Orange"?"var(--hoverColorYellow)":e==="Pink"?"var(--hoverColorPink)":e==="LightPink"?"var(--hoverColorCoral)":"var(--hoverCecondary-text-color)"};
  }
`;function pz({color:e}){const t=qs(),[n,r]=T.useState(""),[i,s]=T.useState(""),[o,a]=T.useState(""),l=Sn(uT),u=["French","English","German","Ukrainian","Polish","Spanish","Italian"],c=["A1 Beginner","A2 Elementary","B1 Intermediate","B2 Upper-Intermediate","C1 Advanced","C2 Proficient"];let d=[10,15,20,25,30,35,40];T.useEffect(()=>{if(n+i+o==="")return;const g=l.filter(y=>{const _=n?y.languages.includes(n):!0,w=i?+y.price_per_hour<=i:!0,p=o?y.levels.includes(o):!0;return w&&_&&p});t(M8(g))},[n,o,l,t,i]);const f=()=>{t(j8()),r(""),s(""),a("")};return m.jsxs(fz,{children:[m.jsxs("li",{children:[m.jsx("span",{children:"Languages"}),m.jsx(Lf,{arr:u,value:"Choose a language",set:r,selectedOption:n})]}),m.jsxs("li",{children:[m.jsx("span",{children:"Level of knowledge"}),m.jsx(Lf,{arr:c,value:"Choose a level",set:a,selectedOption:o})]}),m.jsxs("li",{children:[m.jsx("span",{children:"Price"}),m.jsx(Lf,{arr:d,value:"To $",set:s,height:!0,selectedOption:i})]}),m.jsx(hz,{color:e,onClick:f,children:"Reset filter"})]})}function mz({color:e}){const t=Sn(uT),n=Sn(U8),r=Sn(B8),[i,s]=T.useState(4),o=()=>{s(l=>l+4)},a=t==null?void 0:t.slice(0,i);return m.jsx(m.Fragment,{children:n?m.jsx(iT,{color:e}):m.jsxs(sT,{children:[m.jsx(pz,{color:e}),r?m.jsxs(Ep,{children:[r&&(r==null?void 0:r.map(l=>m.jsx(Cp,{color:e,teacher:l},Tp()))),r.length===0?m.jsx("div",{children:"Teacher not faund"}):void 0]}):m.jsxs(m.Fragment,{children:[m.jsx(Ep,{children:a&&(a==null?void 0:a.map(l=>m.jsx(Cp,{color:e,teacher:l},Tp())))}),(t==null?void 0:t.length)>i&&m.jsx(Q5,{color:e,onClick:o,children:"Load more"})]})]})})}const gz=({color:e})=>m.jsx(mz,{color:e});function yz({color:e}){const t=Sn(cT);return m.jsx(sT,{children:m.jsx(Ep,{children:t.length===0?m.jsx("div",{children:"not "}):t.map(n=>m.jsx(Cp,{teacher:n,color:e},Tp()))})})}const vz=({color:e})=>m.jsx(yz,{color:e}),_z=O.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 500px;
`,wz=O.h1`
  color: #ffffff;
`,xz=()=>m.jsx(_z,{children:m.jsx(wz,{children:"404"})}),Sz=O.div`
  width: 100%;
  height: 100vh;
  background-size: 100% 100%;
`;function Ez({component:e,redirectTo:t}){return Sn(pd)?e:m.jsx(xw,{to:t})}function Cz(){const[e,t]=T.useState(null),n=qs(),r={Blue:"Blue",LightPink:"LightPink",Green:"Green",Orange:"Orange",Pink:"Pink"};return T.useEffect(()=>{n(Ql())},[n]),T.useEffect(()=>{t(Object.keys(r)[Math.floor(Math.random()*Object.keys(r).length)])},[]),m.jsx(Sz,{children:m.jsx(zb,{children:m.jsxs(Hr,{path:"/",element:m.jsx(F5,{color:e}),children:[m.jsx(Hr,{index:!0,element:m.jsx(xw,{to:"Home"})}),m.jsx(Hr,{path:"/Home",element:m.jsx(q5,{color:e})}),m.jsx(Hr,{path:"/Teachers",element:m.jsx(gz,{color:e})}),m.jsx(Hr,{path:"/Favorites",element:m.jsx(Ez,{redirectTo:"/",component:m.jsx(vz,{color:e})})}),m.jsx(Hr,{path:"*",element:m.jsx(xz,{})})]})})})}const Tz={name:"",email:"",isAuth:!1,error:null,loading:!1},bz=QS({name:"auth",initialState:Tz,extraReducers:e=>{e.addCase(Hl.pending,t=>{t.error=null,t.loading=!0}).addCase(Hl.fulfilled,(t,{payload:n})=>{const{email:r,userName:i}=n;t.name=i||"",t.email=r,t.error=null,t.loading=!1,t.isAuth=!0}).addCase(Hl.rejected,(t,{payload:n})=>{t.error=n,t.loading=!1,t.isAuth=!1}).addCase(Gl.pending,t=>{t.error=null,t.loading=!0}).addCase(Gl.fulfilled,(t,{payload:n})=>{const{email:r,name:i}=n;t.name=i,t.email=r,t.error=null,t.loading=!1,t.isAuth=!0}).addCase(Gl.rejected,(t,{payload:n})=>{t.error=n,t.loading=!1,t.isAuth=!1}).addCase(Mo.pending,t=>{t.error=null,t.loading=!0}).addCase(Mo.fulfilled,t=>{t.name="",t.email="",t.error=null,t.loading=!1,t.isAuth=!1}).addCase(Mo.rejected,(t,{payload:n})=>{t.error=n,t.loading=!1,t.isAuth=!1,t.name="",t.email=""})}}),kz=bz.reducer;var Yg="persist:",qg="persist/FLUSH",_d="persist/REHYDRATE",Qg="persist/PAUSE",Xg="persist/PERSIST",Jg="persist/PURGE",Zg="persist/REGISTER",Iz=-1;function Xl(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Xl=function(n){return typeof n}:Xl=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Xl(e)}function X_(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Pz(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?X_(n,!0).forEach(function(r){Oz(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X_(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Oz(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Rz(e,t,n,r){r.debug;var i=Pz({},n);return e&&Xl(e)==="object"&&Object.keys(e).forEach(function(s){s!=="_persist"&&t[s]===n[s]&&(i[s]=e[s])}),i}function Nz(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,s="".concat(e.keyPrefix!==void 0?e.keyPrefix:Yg).concat(e.key),o=e.storage,a;e.serialize===!1?a=function(E){return E}:typeof e.serialize=="function"?a=e.serialize:a=Az;var l=e.writeFailHandler||null,u={},c={},d=[],f=null,g=null,y=function(E){Object.keys(E).forEach(function(C){p(C)&&u[C]!==E[C]&&d.indexOf(C)===-1&&d.push(C)}),Object.keys(u).forEach(function(C){E[C]===void 0&&p(C)&&d.indexOf(C)===-1&&u[C]!==void 0&&d.push(C)}),f===null&&(f=setInterval(_,i)),u=E};function _(){if(d.length===0){f&&clearInterval(f),f=null;return}var x=d.shift(),E=r.reduce(function(C,S){return S.in(C,x,u)},u[x]);if(E!==void 0)try{c[x]=a(E)}catch(C){console.error("redux-persist/createPersistoid: error serializing state",C)}else delete c[x];d.length===0&&w()}function w(){Object.keys(c).forEach(function(x){u[x]===void 0&&delete c[x]}),g=o.setItem(s,a(c)).catch(h)}function p(x){return!(n&&n.indexOf(x)===-1&&x!=="_persist"||t&&t.indexOf(x)!==-1)}function h(x){l&&l(x)}var v=function(){for(;d.length!==0;)_();return g||Promise.resolve()};return{update:y,flush:v}}function Az(e){return JSON.stringify(e)}function Dz(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:Yg).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(o){return o}:typeof e.deserialize=="function"?i=e.deserialize:i=Lz,r.getItem(n).then(function(s){if(s)try{var o={},a=i(s);return Object.keys(a).forEach(function(l){o[l]=t.reduceRight(function(u,c){return c.out(u,l,a)},i(a[l]))}),o}catch(l){throw l}else return})}function Lz(e){return JSON.parse(e)}function $z(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:Yg).concat(e.key);return t.removeItem(n,Fz)}function Fz(e){}function J_(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Pn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?J_(n,!0).forEach(function(r){Mz(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J_(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Mz(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function jz(e,t){if(e==null)return{};var n=zz(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function zz(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var Uz=5e3;function Bz(e,t){var n=e.version!==void 0?e.version:Iz;e.debug;var r=e.stateReconciler===void 0?Rz:e.stateReconciler,i=e.getStoredState||Dz,s=e.timeout!==void 0?e.timeout:Uz,o=null,a=!1,l=!0,u=function(d){return d._persist.rehydrated&&o&&!l&&o.update(d),d};return function(c,d){var f=c||{},g=f._persist,y=jz(f,["_persist"]),_=y;if(d.type===Xg){var w=!1,p=function(P,F){w||(d.rehydrate(e.key,P,F),w=!0)};if(s&&setTimeout(function(){!w&&p(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},s),l=!1,o||(o=Nz(e)),g)return Pn({},t(_,d),{_persist:g});if(typeof d.rehydrate!="function"||typeof d.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return d.register(e.key),i(e).then(function(S){var P=e.migrate||function(F,$){return Promise.resolve(F)};P(S,n).then(function(F){p(F)},function(F){p(void 0,F)})},function(S){p(void 0,S)}),Pn({},t(_,d),{_persist:{version:n,rehydrated:!1}})}else{if(d.type===Jg)return a=!0,d.result($z(e)),Pn({},t(_,d),{_persist:g});if(d.type===qg)return d.result(o&&o.flush()),Pn({},t(_,d),{_persist:g});if(d.type===Qg)l=!0;else if(d.type===_d){if(a)return Pn({},_,{_persist:Pn({},g,{rehydrated:!0})});if(d.key===e.key){var h=t(_,d),v=d.payload,x=r!==!1&&v!==void 0?r(v,c,h,e):h,E=Pn({},x,{_persist:Pn({},g,{rehydrated:!0})});return u(E)}}}if(!g)return t(c,d);var C=t(_,d);return C===_?c:u(Pn({},C,{_persist:g}))}}var ey={},ty={};ty.__esModule=!0;ty.default=Hz;function Jl(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Jl=function(n){return typeof n}:Jl=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Jl(e)}function $f(){}var Vz={getItem:$f,setItem:$f,removeItem:$f};function Wz(e){if((typeof self>"u"?"undefined":Jl(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function Hz(e){var t="".concat(e,"Storage");return Wz(t)?self[t]:Vz}ey.__esModule=!0;ey.default=Yz;var Gz=Kz(ty);function Kz(e){return e&&e.__esModule?e:{default:e}}function Yz(e){var t=(0,Gz.default)(e);return{getItem:function(r){return new Promise(function(i,s){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(s,o){s(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,s){i(t.removeItem(r))})}}}var dT=void 0,qz=Qz(ey);function Qz(e){return e&&e.__esModule?e:{default:e}}var Xz=(0,qz.default)("local");dT=Xz;function Z_(e){return eU(e)||Zz(e)||Jz()}function Jz(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function Zz(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function eU(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function ew(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function bp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ew(n,!0).forEach(function(r){tU(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ew(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function tU(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var fT={registry:[],bootstrapped:!1},nU=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:fT,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Zg:return bp({},t,{registry:[].concat(Z_(t.registry),[n.key])});case _d:var r=t.registry.indexOf(n.key),i=Z_(t.registry);return i.splice(r,1),bp({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function rU(e,t,n){var r=n||!1,i=tg(nU,fT,t&&t.enhancer?t.enhancer:void 0),s=function(u){i.dispatch({type:Zg,key:u})},o=function(u,c,d){var f={type:_d,payload:c,err:d,key:u};e.dispatch(f),i.dispatch(f),r&&a.getState().bootstrapped&&(r(),r=!1)},a=bp({},i,{purge:function(){var u=[];return e.dispatch({type:Jg,result:function(d){u.push(d)}}),Promise.all(u)},flush:function(){var u=[];return e.dispatch({type:qg,result:function(d){u.push(d)}}),Promise.all(u)},pause:function(){e.dispatch({type:Qg})},persist:function(){e.dispatch({type:Xg,register:s,rehydrate:o})}});return t&&t.manualPersist||a.persist(),a}const iU=$S({teachers:z8,Auth:kz}),sU={key:"teachers",storage:dT,whitelist:["teachers","Auth"]},oU=Bz(sU,iU),hT=$L({reducer:oU,middleware:e=>e({serializableCheck:{ignoredActions:[qg,_d,Qg,Xg,Jg,Zg]}})}),aU=rU(hT);function Zl(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Zl=function(n){return typeof n}:Zl=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Zl(e)}function lU(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function tw(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function uU(e,t,n){return t&&tw(e.prototype,t),n&&tw(e,n),e}function cU(e,t){return t&&(Zl(t)==="object"||typeof t=="function")?t:eu(e)}function kp(e){return kp=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},kp(e)}function eu(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function dU(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ip(e,t)}function Ip(e,t){return Ip=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Ip(e,t)}function tu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var pT=function(e){dU(t,e);function t(){var n,r;lU(this,t);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=cU(this,(n=kp(t)).call.apply(n,[this].concat(s))),tu(eu(r),"state",{bootstrapped:!1}),tu(eu(r),"_unsubscribe",void 0),tu(eu(r),"handlePersistorState",function(){var a=r.props.persistor,l=a.getState(),u=l.bootstrapped;u&&(r.props.onBeforeLift?Promise.resolve(r.props.onBeforeLift()).finally(function(){return r.setState({bootstrapped:!0})}):r.setState({bootstrapped:!0}),r._unsubscribe&&r._unsubscribe())}),r}return uU(t,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),t}(T.PureComponent);tu(pT,"defaultProps",{children:null,loading:null});zf.createRoot(document.getElementById("root")).render(m.jsx(at.StrictMode,{children:m.jsx(Gb,{basename:"/Learn-Lingo/",children:m.jsx(C6,{store:hT,children:m.jsx(pT,{persistor:aU,children:m.jsx(Cz,{})})})})}))});export default fU();
