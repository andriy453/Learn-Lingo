var xT=Object.defineProperty;var ST=(e,t,n)=>t in e?xT(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ET=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var xd=(e,t,n)=>(ST(e,typeof t!="symbol"?t+"":t,n),n);var W8=ET((Tt,bt)=>{function CT(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Cp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var X0={exports:{}},uc={},J0={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ta=Symbol.for("react.element"),TT=Symbol.for("react.portal"),bT=Symbol.for("react.fragment"),kT=Symbol.for("react.strict_mode"),IT=Symbol.for("react.profiler"),PT=Symbol.for("react.provider"),OT=Symbol.for("react.context"),RT=Symbol.for("react.forward_ref"),NT=Symbol.for("react.suspense"),AT=Symbol.for("react.memo"),DT=Symbol.for("react.lazy"),Zg=Symbol.iterator;function LT(e){return e===null||typeof e!="object"?null:(e=Zg&&e[Zg]||e["@@iterator"],typeof e=="function"?e:null)}var Z0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ew=Object.assign,tw={};function Ms(e,t,n){this.props=e,this.context=t,this.refs=tw,this.updater=n||Z0}Ms.prototype.isReactComponent={};Ms.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ms.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function nw(){}nw.prototype=Ms.prototype;function Tp(e,t,n){this.props=e,this.context=t,this.refs=tw,this.updater=n||Z0}var bp=Tp.prototype=new nw;bp.constructor=Tp;ew(bp,Ms.prototype);bp.isPureReactComponent=!0;var ey=Array.isArray,rw=Object.prototype.hasOwnProperty,kp={current:null},iw={key:!0,ref:!0,__self:!0,__source:!0};function sw(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)rw.call(t,r)&&!iw.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ta,type:e,key:s,ref:o,props:i,_owner:kp.current}}function MT(e,t){return{$$typeof:Ta,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ip(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ta}function FT(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ty=/\/+/g;function Sd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?FT(""+e.key):t.toString(36)}function Cl(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ta:case TT:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Sd(o,0):r,ey(i)?(n="",e!=null&&(n=e.replace(ty,"$&/")+"/"),Cl(i,t,n,"",function(u){return u})):i!=null&&(Ip(i)&&(i=MT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ty,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",ey(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+Sd(s,a);o+=Cl(s,t,n,l,i)}else if(l=LT(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+Sd(s,a++),o+=Cl(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Ya(e,t,n){if(e==null)return e;var r=[],i=0;return Cl(e,r,"","",function(s){return t.call(n,s,i++)}),r}function $T(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var at={current:null},Tl={transition:null},jT={ReactCurrentDispatcher:at,ReactCurrentBatchConfig:Tl,ReactCurrentOwner:kp};K.Children={map:Ya,forEach:function(e,t,n){Ya(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ya(e,function(){t++}),t},toArray:function(e){return Ya(e,function(t){return t})||[]},only:function(e){if(!Ip(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};K.Component=Ms;K.Fragment=bT;K.Profiler=IT;K.PureComponent=Tp;K.StrictMode=kT;K.Suspense=NT;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jT;K.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ew({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=kp.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)rw.call(t,l)&&!iw.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ta,type:e.type,key:i,ref:s,props:r,_owner:o}};K.createContext=function(e){return e={$$typeof:OT,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:PT,_context:e},e.Consumer=e};K.createElement=sw;K.createFactory=function(e){var t=sw.bind(null,e);return t.type=e,t};K.createRef=function(){return{current:null}};K.forwardRef=function(e){return{$$typeof:RT,render:e}};K.isValidElement=Ip;K.lazy=function(e){return{$$typeof:DT,_payload:{_status:-1,_result:e},_init:$T}};K.memo=function(e,t){return{$$typeof:AT,type:e,compare:t===void 0?null:t}};K.startTransition=function(e){var t=Tl.transition;Tl.transition={};try{e()}finally{Tl.transition=t}};K.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};K.useCallback=function(e,t){return at.current.useCallback(e,t)};K.useContext=function(e){return at.current.useContext(e)};K.useDebugValue=function(){};K.useDeferredValue=function(e){return at.current.useDeferredValue(e)};K.useEffect=function(e,t){return at.current.useEffect(e,t)};K.useId=function(){return at.current.useId()};K.useImperativeHandle=function(e,t,n){return at.current.useImperativeHandle(e,t,n)};K.useInsertionEffect=function(e,t){return at.current.useInsertionEffect(e,t)};K.useLayoutEffect=function(e,t){return at.current.useLayoutEffect(e,t)};K.useMemo=function(e,t){return at.current.useMemo(e,t)};K.useReducer=function(e,t,n){return at.current.useReducer(e,t,n)};K.useRef=function(e){return at.current.useRef(e)};K.useState=function(e){return at.current.useState(e)};K.useSyncExternalStore=function(e,t,n){return at.current.useSyncExternalStore(e,t,n)};K.useTransition=function(){return at.current.useTransition()};K.version="18.2.0";J0.exports=K;var T=J0.exports;const st=Cp(T),Fo=CT({__proto__:null,default:st},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var UT=T,zT=Symbol.for("react.element"),BT=Symbol.for("react.fragment"),VT=Object.prototype.hasOwnProperty,WT=UT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,HT={key:!0,ref:!0,__self:!0,__source:!0};function ow(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)VT.call(t,r)&&!HT.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:zT,type:e,key:s,ref:o,props:i,_owner:WT.current}}uc.Fragment=BT;uc.jsx=ow;uc.jsxs=ow;X0.exports=uc;var y=X0.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $o(){return $o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$o.apply(this,arguments)}var ar;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ar||(ar={}));const ny="popstate";function GT(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return Nf("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:eu(i)}return YT(t,n,null,e)}function Ce(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Pp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function KT(){return Math.random().toString(36).substr(2,8)}function ry(e,t){return{usr:e.state,key:e.key,idx:t}}function Nf(e,t,n,r){return n===void 0&&(n=null),$o({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Fs(t):t,{state:n,key:t&&t.key||r||KT()})}function eu(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Fs(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function YT(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=ar.Pop,l=null,u=c();u==null&&(u=0,o.replaceState($o({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=ar.Pop;let w=c(),p=w==null?null:w-u;u=w,l&&l({action:a,location:_.location,delta:p})}function f(w,p){a=ar.Push;let h=Nf(_.location,w,p);n&&n(h,w),u=c()+1;let v=ry(h,u),x=_.createHref(h);try{o.pushState(v,"",x)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(x)}s&&l&&l({action:a,location:_.location,delta:1})}function m(w,p){a=ar.Replace;let h=Nf(_.location,w,p);n&&n(h,w),u=c();let v=ry(h,u),x=_.createHref(h);o.replaceState(v,"",x),s&&l&&l({action:a,location:_.location,delta:0})}function g(w){let p=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof w=="string"?w:eu(w);return Ce(p,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,p)}let _={get action(){return a},get location(){return e(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(ny,d),l=w,()=>{i.removeEventListener(ny,d),l=null}},createHref(w){return t(i,w)},createURL:g,encodeLocation(w){let p=g(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:m,go(w){return o.go(w)}};return _}var iy;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(iy||(iy={}));function qT(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Fs(t):t,i=Op(r.pathname||"/",n);if(i==null)return null;let s=aw(e);QT(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=sb(s[a],lb(i));return o}function aw(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ce(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=cr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Ce(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),aw(s.children,t,c,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:rb(u,s.index),routesMeta:c})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of lw(s.path))i(s,o,l)}),t}function lw(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=lw(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function QT(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ib(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const XT=/^:\w+$/,JT=3,ZT=2,eb=1,tb=10,nb=-2,sy=e=>e==="*";function rb(e,t){let n=e.split("/"),r=n.length;return n.some(sy)&&(r+=nb),t&&(r+=ZT),n.filter(i=>!sy(i)).reduce((i,s)=>i+(XT.test(s)?JT:s===""?eb:tb),r)}function ib(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function sb(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=ob({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:cr([i,c.pathname]),pathnameBase:fb(cr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=cr([i,c.pathnameBase]))}return s}function ob(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ab(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=ub(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:e}}function ab(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Pp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function lb(e){try{return decodeURI(e)}catch(t){return Pp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ub(e,t){try{return decodeURIComponent(e)}catch(n){return Pp(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Op(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function cb(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Fs(e):e;return{pathname:n?n.startsWith("/")?n:db(n,t):t,search:hb(r),hash:pb(i)}}function db(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ed(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Rp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Np(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Fs(e):(i=$o({},e),Ce(!i.pathname||!i.pathname.includes("?"),Ed("?","pathname","search",i)),Ce(!i.pathname||!i.pathname.includes("#"),Ed("#","pathname","hash",i)),Ce(!i.search||!i.search.includes("#"),Ed("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=t.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?t[d]:"/"}let l=cb(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const cr=e=>e.join("/").replace(/\/\/+/g,"/"),fb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),hb=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,pb=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function mb(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const uw=["post","put","patch","delete"];new Set(uw);const gb=["get",...uw];new Set(gb);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tu(){return tu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},tu.apply(this,arguments)}const Ap=T.createContext(null),yb=T.createContext(null),$s=T.createContext(null),cc=T.createContext(null),Gn=T.createContext({outlet:null,matches:[],isDataRoute:!1}),cw=T.createContext(null);function vb(e,t){let{relative:n}=t===void 0?{}:t;js()||Ce(!1);let{basename:r,navigator:i}=T.useContext($s),{hash:s,pathname:o,search:a}=hw(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:cr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function js(){return T.useContext(cc)!=null}function ba(){return js()||Ce(!1),T.useContext(cc).location}function dw(e){T.useContext($s).static||T.useLayoutEffect(e)}function fw(){let{isDataRoute:e}=T.useContext(Gn);return e?Ab():_b()}function _b(){js()||Ce(!1);let e=T.useContext(Ap),{basename:t,navigator:n}=T.useContext($s),{matches:r}=T.useContext(Gn),{pathname:i}=ba(),s=JSON.stringify(Rp(r).map(l=>l.pathnameBase)),o=T.useRef(!1);return dw(()=>{o.current=!0}),T.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Np(l,JSON.parse(s),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:cr([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,s,i,e])}const wb=T.createContext(null);function xb(e){let t=T.useContext(Gn).outlet;return t&&T.createElement(wb.Provider,{value:e},t)}function hw(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=T.useContext(Gn),{pathname:i}=ba(),s=JSON.stringify(Rp(r).map(o=>o.pathnameBase));return T.useMemo(()=>Np(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function Sb(e,t){return Eb(e,t)}function Eb(e,t,n){js()||Ce(!1);let{navigator:r}=T.useContext($s),{matches:i}=T.useContext(Gn),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=ba(),u;if(t){var c;let _=typeof t=="string"?Fs(t):t;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||Ce(!1),u=_}else u=l;let d=u.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",m=qT(e,{pathname:f}),g=Ib(m&&m.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:cr([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:cr([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return t&&g?T.createElement(cc.Provider,{value:{location:tu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:ar.Pop}},g):g}function Cb(){let e=Nb(),t=mb(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:i},n):null,s)}const Tb=T.createElement(Cb,null);class bb extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?T.createElement(Gn.Provider,{value:this.props.routeContext},T.createElement(cw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function kb(e){let{routeContext:t,match:n,children:r}=e,i=T.useContext(Ap);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(Gn.Provider,{value:t},r)}function Ib(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let s=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Ce(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||Tb);let f=t.concat(s.slice(0,u+1)),m=()=>{let g;return c?g=d:l.route.Component?g=T.createElement(l.route.Component,null):l.route.element?g=l.route.element:g=a,T.createElement(kb,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:g})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?T.createElement(bb,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()},null)}var pw=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(pw||{}),nu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(nu||{});function Pb(e){let t=T.useContext(Ap);return t||Ce(!1),t}function Ob(e){let t=T.useContext(yb);return t||Ce(!1),t}function Rb(e){let t=T.useContext(Gn);return t||Ce(!1),t}function mw(e){let t=Rb(),n=t.matches[t.matches.length-1];return n.route.id||Ce(!1),n.route.id}function Nb(){var e;let t=T.useContext(cw),n=Ob(nu.UseRouteError),r=mw(nu.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Ab(){let{router:e}=Pb(pw.UseNavigateStable),t=mw(nu.UseNavigateStable),n=T.useRef(!1);return dw(()=>{n.current=!0}),T.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,tu({fromRouteId:t},s)))},[e,t])}function gw(e){let{to:t,replace:n,state:r,relative:i}=e;js()||Ce(!1);let{matches:s}=T.useContext(Gn),{pathname:o}=ba(),a=fw(),l=Np(t,Rp(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return T.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function Db(e){return xb(e.context)}function Wr(e){Ce(!1)}function Lb(e){let{basename:t="/",children:n=null,location:r,navigationType:i=ar.Pop,navigator:s,static:o=!1}=e;js()&&Ce(!1);let a=t.replace(/^\/*/,"/"),l=T.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Fs(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:m="default"}=r,g=T.useMemo(()=>{let _=Op(u,a);return _==null?null:{location:{pathname:_,search:c,hash:d,state:f,key:m},navigationType:i}},[a,u,c,d,f,m,i]);return g==null?null:T.createElement($s.Provider,{value:l},T.createElement(cc.Provider,{children:n,value:g}))}function Mb(e){let{children:t,location:n}=e;return Sb(Af(t),n)}new Promise(()=>{});function Af(e,t){t===void 0&&(t=[]);let n=[];return T.Children.forEach(e,(r,i)=>{if(!T.isValidElement(r))return;let s=[...t,i];if(r.type===T.Fragment){n.push.apply(n,Af(r.props.children,s));return}r.type!==Wr&&Ce(!1),!r.props.index||!r.props.children||Ce(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Af(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Df(){return Df=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Df.apply(this,arguments)}function Fb(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function $b(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function jb(e,t){return e.button===0&&(!t||t==="_self")&&!$b(e)}const Ub=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],zb="startTransition",oy=Fo[zb];function Bb(e){let{basename:t,children:n,future:r,window:i}=e,s=T.useRef();s.current==null&&(s.current=GT({window:i,v5Compat:!0}));let o=s.current,[a,l]=T.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=T.useCallback(d=>{u&&oy?oy(()=>l(d)):l(d)},[l,u]);return T.useLayoutEffect(()=>o.listen(c),[o,c]),T.createElement(Lb,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o})}const Vb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Wb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ka=T.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=t,d=Fb(t,Ub),{basename:f}=T.useContext($s),m,g=!1;if(typeof u=="string"&&Wb.test(u)&&(m=u,Vb))try{let h=new URL(window.location.href),v=u.startsWith("//")?new URL(h.protocol+u):new URL(u),x=Op(v.pathname,f);v.origin===h.origin&&x!=null?u=x+v.search+v.hash:g=!0}catch{}let _=vb(u,{relative:i}),w=Hb(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function p(h){r&&r(h),h.defaultPrevented||w(h)}return T.createElement("a",Df({},d,{href:m||_,onClick:g||s?r:p,ref:n,target:l}))});var ay;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(ay||(ay={}));var ly;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ly||(ly={}));function Hb(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=t===void 0?{}:t,a=fw(),l=ba(),u=hw(e,{relative:o});return T.useCallback(c=>{if(jb(c,n)){c.preventDefault();let d=r!==void 0?r:eu(l)===eu(u);a(e,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,e,s,o])}var Lf={},yw={exports:{}},Dt={},vw={exports:{}},_w={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,j){var U=O.length;O.push(j);e:for(;0<U;){var ne=U-1>>>1,re=O[ne];if(0<i(re,j))O[ne]=j,O[U]=re,U=ne;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var j=O[0],U=O.pop();if(U!==j){O[0]=U;e:for(var ne=0,re=O.length,Ft=re>>>1;ne<Ft;){var ze=2*(ne+1)-1,nt=O[ze],Ye=ze+1,qe=O[Ye];if(0>i(nt,U))Ye<re&&0>i(qe,nt)?(O[ne]=qe,O[Ye]=U,ne=Ye):(O[ne]=nt,O[ze]=U,ne=ze);else if(Ye<re&&0>i(qe,U))O[ne]=qe,O[Ye]=U,ne=Ye;else break e}}return j}function i(O,j){var U=O.sortIndex-j.sortIndex;return U!==0?U:O.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,m=!1,g=!1,_=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(O){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=O)r(u),j.sortIndex=j.expirationTime,t(l,j);else break;j=n(u)}}function x(O){if(_=!1,v(O),!g)if(n(l)!==null)g=!0,bn(E);else{var j=n(u);j!==null&&ct(x,j.startTime-O)}}function E(O,j){g=!1,_&&(_=!1,p(P),P=-1),m=!0;var U=f;try{for(v(j),d=n(l);d!==null&&(!(d.expirationTime>j)||O&&!V());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,f=d.priorityLevel;var re=ne(d.expirationTime<=j);j=e.unstable_now(),typeof re=="function"?d.callback=re:d===n(l)&&r(l),v(j)}else r(l);d=n(l)}if(d!==null)var Ft=!0;else{var ze=n(u);ze!==null&&ct(x,ze.startTime-j),Ft=!1}return Ft}finally{d=null,f=U,m=!1}}var C=!1,S=null,P=-1,F=5,L=-1;function V(){return!(e.unstable_now()-L<F)}function ut(){if(S!==null){var O=e.unstable_now();L=O;var j=!0;try{j=S(!0,O)}finally{j?Y():(C=!1,S=null)}}else C=!1}var Y;if(typeof h=="function")Y=function(){h(ut)};else if(typeof MessageChannel<"u"){var Ie=new MessageChannel,Tn=Ie.port2;Ie.port1.onmessage=ut,Y=function(){Tn.postMessage(null)}}else Y=function(){w(ut,0)};function bn(O){S=O,C||(C=!0,Y())}function ct(O,j){P=w(function(){O(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){g||m||(g=!0,bn(E))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(O){switch(f){case 1:case 2:case 3:var j=3;break;default:j=f}var U=f;f=j;try{return O()}finally{f=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,j){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var U=f;f=O;try{return j()}finally{f=U}},e.unstable_scheduleCallback=function(O,j,U){var ne=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?ne+U:ne):U=ne,O){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=U+re,O={id:c++,callback:j,priorityLevel:O,startTime:U,expirationTime:re,sortIndex:-1},U>ne?(O.sortIndex=U,t(u,O),n(l)===null&&O===n(u)&&(_?(p(P),P=-1):_=!0,ct(x,U-ne))):(O.sortIndex=re,t(l,O),g||m||(g=!0,bn(E))),O},e.unstable_shouldYield=V,e.unstable_wrapCallback=function(O){var j=f;return function(){var U=f;f=j;try{return O.apply(this,arguments)}finally{f=U}}}})(_w);vw.exports=_w;var Gb=vw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ww=T,Rt=Gb;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xw=new Set,jo={};function ki(e,t){gs(e,t),gs(e+"Capture",t)}function gs(e,t){for(jo[e]=t,e=0;e<t.length;e++)xw.add(t[e])}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mf=Object.prototype.hasOwnProperty,Kb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uy={},cy={};function Yb(e){return Mf.call(cy,e)?!0:Mf.call(uy,e)?!1:Kb.test(e)?cy[e]=!0:(uy[e]=!0,!1)}function qb(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qb(e,t,n,r){if(t===null||typeof t>"u"||qb(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function lt(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ke[e]=new lt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ke[t]=new lt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ke[e]=new lt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ke[e]=new lt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ke[e]=new lt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ke[e]=new lt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ke[e]=new lt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ke[e]=new lt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ke[e]=new lt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Dp=/[\-:]([a-z])/g;function Lp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Dp,Lp);Ke[t]=new lt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Dp,Lp);Ke[t]=new lt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Dp,Lp);Ke[t]=new lt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ke[e]=new lt(e,1,!1,e.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ke[e]=new lt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Mp(e,t,n,r){var i=Ke.hasOwnProperty(t)?Ke[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Qb(t,n,i,r)&&(n=null),r||i===null?Yb(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Kn=ww.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qa=Symbol.for("react.element"),Bi=Symbol.for("react.portal"),Vi=Symbol.for("react.fragment"),Fp=Symbol.for("react.strict_mode"),Ff=Symbol.for("react.profiler"),Sw=Symbol.for("react.provider"),Ew=Symbol.for("react.context"),$p=Symbol.for("react.forward_ref"),$f=Symbol.for("react.suspense"),jf=Symbol.for("react.suspense_list"),jp=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),Cw=Symbol.for("react.offscreen"),dy=Symbol.iterator;function Qs(e){return e===null||typeof e!="object"?null:(e=dy&&e[dy]||e["@@iterator"],typeof e=="function"?e:null)}var we=Object.assign,Cd;function co(e){if(Cd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Cd=t&&t[1]||""}return`
`+Cd+e}var Td=!1;function bd(e,t){if(!e||Td)return"";Td=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{Td=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?co(e):""}function Xb(e){switch(e.tag){case 5:return co(e.type);case 16:return co("Lazy");case 13:return co("Suspense");case 19:return co("SuspenseList");case 0:case 2:case 15:return e=bd(e.type,!1),e;case 11:return e=bd(e.type.render,!1),e;case 1:return e=bd(e.type,!0),e;default:return""}}function Uf(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vi:return"Fragment";case Bi:return"Portal";case Ff:return"Profiler";case Fp:return"StrictMode";case $f:return"Suspense";case jf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ew:return(e.displayName||"Context")+".Consumer";case Sw:return(e._context.displayName||"Context")+".Provider";case $p:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case jp:return t=e.displayName||null,t!==null?t:Uf(e.type)||"Memo";case er:t=e._payload,e=e._init;try{return Uf(e(t))}catch{}}return null}function Jb(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Uf(t);case 8:return t===Fp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function br(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Tw(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zb(e){var t=Tw(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Qa(e){e._valueTracker||(e._valueTracker=Zb(e))}function bw(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Tw(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ru(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function zf(e,t){var n=t.checked;return we({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function fy(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=br(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function kw(e,t){t=t.checked,t!=null&&Mp(e,"checked",t,!1)}function Bf(e,t){kw(e,t);var n=br(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Vf(e,t.type,n):t.hasOwnProperty("defaultValue")&&Vf(e,t.type,br(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function hy(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Vf(e,t,n){(t!=="number"||ru(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fo=Array.isArray;function is(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+br(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Wf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return we({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function py(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(fo(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:br(n)}}function Iw(e,t){var n=br(t.value),r=br(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function my(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Pw(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Pw(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xa,Ow=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Xa=Xa||document.createElement("div"),Xa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Xa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Uo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _o={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ek=["Webkit","ms","Moz","O"];Object.keys(_o).forEach(function(e){ek.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_o[t]=_o[e]})});function Rw(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_o.hasOwnProperty(e)&&_o[e]?(""+t).trim():t+"px"}function Nw(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Rw(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var tk=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gf(e,t){if(t){if(tk[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Kf(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yf=null;function Up(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qf=null,ss=null,os=null;function gy(e){if(e=Oa(e)){if(typeof qf!="function")throw Error(k(280));var t=e.stateNode;t&&(t=mc(t),qf(e.stateNode,e.type,t))}}function Aw(e){ss?os?os.push(e):os=[e]:ss=e}function Dw(){if(ss){var e=ss,t=os;if(os=ss=null,gy(e),t)for(e=0;e<t.length;e++)gy(t[e])}}function Lw(e,t){return e(t)}function Mw(){}var kd=!1;function Fw(e,t,n){if(kd)return e(t,n);kd=!0;try{return Lw(e,t,n)}finally{kd=!1,(ss!==null||os!==null)&&(Mw(),Dw())}}function zo(e,t){var n=e.stateNode;if(n===null)return null;var r=mc(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Qf=!1;if(Un)try{var Xs={};Object.defineProperty(Xs,"passive",{get:function(){Qf=!0}}),window.addEventListener("test",Xs,Xs),window.removeEventListener("test",Xs,Xs)}catch{Qf=!1}function nk(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var wo=!1,iu=null,su=!1,Xf=null,rk={onError:function(e){wo=!0,iu=e}};function ik(e,t,n,r,i,s,o,a,l){wo=!1,iu=null,nk.apply(rk,arguments)}function sk(e,t,n,r,i,s,o,a,l){if(ik.apply(this,arguments),wo){if(wo){var u=iu;wo=!1,iu=null}else throw Error(k(198));su||(su=!0,Xf=u)}}function Ii(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function $w(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function yy(e){if(Ii(e)!==e)throw Error(k(188))}function ok(e){var t=e.alternate;if(!t){if(t=Ii(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return yy(i),e;if(s===r)return yy(i),t;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function jw(e){return e=ok(e),e!==null?Uw(e):null}function Uw(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Uw(e);if(t!==null)return t;e=e.sibling}return null}var zw=Rt.unstable_scheduleCallback,vy=Rt.unstable_cancelCallback,ak=Rt.unstable_shouldYield,lk=Rt.unstable_requestPaint,Ee=Rt.unstable_now,uk=Rt.unstable_getCurrentPriorityLevel,zp=Rt.unstable_ImmediatePriority,Bw=Rt.unstable_UserBlockingPriority,ou=Rt.unstable_NormalPriority,ck=Rt.unstable_LowPriority,Vw=Rt.unstable_IdlePriority,dc=null,vn=null;function dk(e){if(vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot(dc,e,void 0,(e.current.flags&128)===128)}catch{}}var sn=Math.clz32?Math.clz32:pk,fk=Math.log,hk=Math.LN2;function pk(e){return e>>>=0,e===0?32:31-(fk(e)/hk|0)|0}var Ja=64,Za=4194304;function ho(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function au(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ho(a):(s&=o,s!==0&&(r=ho(s)))}else o=n&~i,o!==0?r=ho(o):s!==0&&(r=ho(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-sn(t),i=1<<n,r|=e[n],t&=~i;return r}function mk(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gk(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-sn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=mk(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function Jf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ww(){var e=Ja;return Ja<<=1,!(Ja&4194240)&&(Ja=64),e}function Id(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ia(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-sn(t),e[t]=n}function yk(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-sn(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Bp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-sn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var se=0;function Hw(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Gw,Vp,Kw,Yw,qw,Zf=!1,el=[],dr=null,fr=null,hr=null,Bo=new Map,Vo=new Map,nr=[],vk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _y(e,t){switch(e){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":Bo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(t.pointerId)}}function Js(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Oa(t),t!==null&&Vp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function _k(e,t,n,r,i){switch(t){case"focusin":return dr=Js(dr,e,t,n,r,i),!0;case"dragenter":return fr=Js(fr,e,t,n,r,i),!0;case"mouseover":return hr=Js(hr,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Bo.set(s,Js(Bo.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Vo.set(s,Js(Vo.get(s)||null,e,t,n,r,i)),!0}return!1}function Qw(e){var t=Jr(e.target);if(t!==null){var n=Ii(t);if(n!==null){if(t=n.tag,t===13){if(t=$w(n),t!==null){e.blockedOn=t,qw(e.priority,function(){Kw(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=eh(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Yf=r,n.target.dispatchEvent(r),Yf=null}else return t=Oa(n),t!==null&&Vp(t),e.blockedOn=n,!1;t.shift()}return!0}function wy(e,t,n){bl(e)&&n.delete(t)}function wk(){Zf=!1,dr!==null&&bl(dr)&&(dr=null),fr!==null&&bl(fr)&&(fr=null),hr!==null&&bl(hr)&&(hr=null),Bo.forEach(wy),Vo.forEach(wy)}function Zs(e,t){e.blockedOn===t&&(e.blockedOn=null,Zf||(Zf=!0,Rt.unstable_scheduleCallback(Rt.unstable_NormalPriority,wk)))}function Wo(e){function t(i){return Zs(i,e)}if(0<el.length){Zs(el[0],e);for(var n=1;n<el.length;n++){var r=el[n];r.blockedOn===e&&(r.blockedOn=null)}}for(dr!==null&&Zs(dr,e),fr!==null&&Zs(fr,e),hr!==null&&Zs(hr,e),Bo.forEach(t),Vo.forEach(t),n=0;n<nr.length;n++)r=nr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<nr.length&&(n=nr[0],n.blockedOn===null);)Qw(n),n.blockedOn===null&&nr.shift()}var as=Kn.ReactCurrentBatchConfig,lu=!0;function xk(e,t,n,r){var i=se,s=as.transition;as.transition=null;try{se=1,Wp(e,t,n,r)}finally{se=i,as.transition=s}}function Sk(e,t,n,r){var i=se,s=as.transition;as.transition=null;try{se=4,Wp(e,t,n,r)}finally{se=i,as.transition=s}}function Wp(e,t,n,r){if(lu){var i=eh(e,t,n,r);if(i===null)$d(e,t,r,uu,n),_y(e,r);else if(_k(i,e,t,n,r))r.stopPropagation();else if(_y(e,r),t&4&&-1<vk.indexOf(e)){for(;i!==null;){var s=Oa(i);if(s!==null&&Gw(s),s=eh(e,t,n,r),s===null&&$d(e,t,r,uu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else $d(e,t,r,null,n)}}var uu=null;function eh(e,t,n,r){if(uu=null,e=Up(r),e=Jr(e),e!==null)if(t=Ii(e),t===null)e=null;else if(n=t.tag,n===13){if(e=$w(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return uu=e,null}function Xw(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uk()){case zp:return 1;case Bw:return 4;case ou:case ck:return 16;case Vw:return 536870912;default:return 16}default:return 16}}var lr=null,Hp=null,kl=null;function Jw(){if(kl)return kl;var e,t=Hp,n=t.length,r,i="value"in lr?lr.value:lr.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return kl=i.slice(e,1<r?1-r:void 0)}function Il(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function tl(){return!0}function xy(){return!1}function Lt(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?tl:xy,this.isPropagationStopped=xy,this}return we(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),t}var Us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gp=Lt(Us),Pa=we({},Us,{view:0,detail:0}),Ek=Lt(Pa),Pd,Od,eo,fc=we({},Pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==eo&&(eo&&e.type==="mousemove"?(Pd=e.screenX-eo.screenX,Od=e.screenY-eo.screenY):Od=Pd=0,eo=e),Pd)},movementY:function(e){return"movementY"in e?e.movementY:Od}}),Sy=Lt(fc),Ck=we({},fc,{dataTransfer:0}),Tk=Lt(Ck),bk=we({},Pa,{relatedTarget:0}),Rd=Lt(bk),kk=we({},Us,{animationName:0,elapsedTime:0,pseudoElement:0}),Ik=Lt(kk),Pk=we({},Us,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ok=Lt(Pk),Rk=we({},Us,{data:0}),Ey=Lt(Rk),Nk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ak={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lk(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Dk[e])?!!t[e]:!1}function Kp(){return Lk}var Mk=we({},Pa,{key:function(e){if(e.key){var t=Nk[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Il(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ak[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kp,charCode:function(e){return e.type==="keypress"?Il(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Il(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fk=Lt(Mk),$k=we({},fc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cy=Lt($k),jk=we({},Pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kp}),Uk=Lt(jk),zk=we({},Us,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bk=Lt(zk),Vk=we({},fc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wk=Lt(Vk),Hk=[9,13,27,32],Yp=Un&&"CompositionEvent"in window,xo=null;Un&&"documentMode"in document&&(xo=document.documentMode);var Gk=Un&&"TextEvent"in window&&!xo,Zw=Un&&(!Yp||xo&&8<xo&&11>=xo),Ty=String.fromCharCode(32),by=!1;function e1(e,t){switch(e){case"keyup":return Hk.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function t1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wi=!1;function Kk(e,t){switch(e){case"compositionend":return t1(t);case"keypress":return t.which!==32?null:(by=!0,Ty);case"textInput":return e=t.data,e===Ty&&by?null:e;default:return null}}function Yk(e,t){if(Wi)return e==="compositionend"||!Yp&&e1(e,t)?(e=Jw(),kl=Hp=lr=null,Wi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zw&&t.locale!=="ko"?null:t.data;default:return null}}var qk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ky(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!qk[e.type]:t==="textarea"}function n1(e,t,n,r){Aw(r),t=cu(t,"onChange"),0<t.length&&(n=new Gp("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var So=null,Ho=null;function Qk(e){h1(e,0)}function hc(e){var t=Ki(e);if(bw(t))return e}function Xk(e,t){if(e==="change")return t}var r1=!1;if(Un){var Nd;if(Un){var Ad="oninput"in document;if(!Ad){var Iy=document.createElement("div");Iy.setAttribute("oninput","return;"),Ad=typeof Iy.oninput=="function"}Nd=Ad}else Nd=!1;r1=Nd&&(!document.documentMode||9<document.documentMode)}function Py(){So&&(So.detachEvent("onpropertychange",i1),Ho=So=null)}function i1(e){if(e.propertyName==="value"&&hc(Ho)){var t=[];n1(t,Ho,e,Up(e)),Fw(Qk,t)}}function Jk(e,t,n){e==="focusin"?(Py(),So=t,Ho=n,So.attachEvent("onpropertychange",i1)):e==="focusout"&&Py()}function Zk(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hc(Ho)}function eI(e,t){if(e==="click")return hc(t)}function tI(e,t){if(e==="input"||e==="change")return hc(t)}function nI(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var cn=typeof Object.is=="function"?Object.is:nI;function Go(e,t){if(cn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Mf.call(t,i)||!cn(e[i],t[i]))return!1}return!0}function Oy(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ry(e,t){var n=Oy(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Oy(n)}}function s1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?s1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function o1(){for(var e=window,t=ru();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ru(e.document)}return t}function qp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function rI(e){var t=o1(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&s1(n.ownerDocument.documentElement,n)){if(r!==null&&qp(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Ry(n,s);var o=Ry(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var iI=Un&&"documentMode"in document&&11>=document.documentMode,Hi=null,th=null,Eo=null,nh=!1;function Ny(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nh||Hi==null||Hi!==ru(r)||(r=Hi,"selectionStart"in r&&qp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Eo&&Go(Eo,r)||(Eo=r,r=cu(th,"onSelect"),0<r.length&&(t=new Gp("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Hi)))}function nl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gi={animationend:nl("Animation","AnimationEnd"),animationiteration:nl("Animation","AnimationIteration"),animationstart:nl("Animation","AnimationStart"),transitionend:nl("Transition","TransitionEnd")},Dd={},a1={};Un&&(a1=document.createElement("div").style,"AnimationEvent"in window||(delete Gi.animationend.animation,delete Gi.animationiteration.animation,delete Gi.animationstart.animation),"TransitionEvent"in window||delete Gi.transitionend.transition);function pc(e){if(Dd[e])return Dd[e];if(!Gi[e])return e;var t=Gi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in a1)return Dd[e]=t[n];return e}var l1=pc("animationend"),u1=pc("animationiteration"),c1=pc("animationstart"),d1=pc("transitionend"),f1=new Map,Ay="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dr(e,t){f1.set(e,t),ki(t,[e])}for(var Ld=0;Ld<Ay.length;Ld++){var Md=Ay[Ld],sI=Md.toLowerCase(),oI=Md[0].toUpperCase()+Md.slice(1);Dr(sI,"on"+oI)}Dr(l1,"onAnimationEnd");Dr(u1,"onAnimationIteration");Dr(c1,"onAnimationStart");Dr("dblclick","onDoubleClick");Dr("focusin","onFocus");Dr("focusout","onBlur");Dr(d1,"onTransitionEnd");gs("onMouseEnter",["mouseout","mouseover"]);gs("onMouseLeave",["mouseout","mouseover"]);gs("onPointerEnter",["pointerout","pointerover"]);gs("onPointerLeave",["pointerout","pointerover"]);ki("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ki("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ki("onBeforeInput",["compositionend","keypress","textInput","paste"]);ki("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ki("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ki("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aI=new Set("cancel close invalid load scroll toggle".split(" ").concat(po));function Dy(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,sk(r,t,void 0,e),e.currentTarget=null}function h1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Dy(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Dy(i,a,u),s=l}}}if(su)throw e=Xf,su=!1,Xf=null,e}function fe(e,t){var n=t[ah];n===void 0&&(n=t[ah]=new Set);var r=e+"__bubble";n.has(r)||(p1(t,e,2,!1),n.add(r))}function Fd(e,t,n){var r=0;t&&(r|=4),p1(n,e,r,t)}var rl="_reactListening"+Math.random().toString(36).slice(2);function Ko(e){if(!e[rl]){e[rl]=!0,xw.forEach(function(n){n!=="selectionchange"&&(aI.has(n)||Fd(n,!1,e),Fd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[rl]||(t[rl]=!0,Fd("selectionchange",!1,t))}}function p1(e,t,n,r){switch(Xw(t)){case 1:var i=xk;break;case 4:i=Sk;break;default:i=Wp}n=i.bind(null,t,n,e),i=void 0,!Qf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function $d(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Jr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Fw(function(){var u=s,c=Up(n),d=[];e:{var f=f1.get(e);if(f!==void 0){var m=Gp,g=e;switch(e){case"keypress":if(Il(n)===0)break e;case"keydown":case"keyup":m=Fk;break;case"focusin":g="focus",m=Rd;break;case"focusout":g="blur",m=Rd;break;case"beforeblur":case"afterblur":m=Rd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Sy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Tk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Uk;break;case l1:case u1:case c1:m=Ik;break;case d1:m=Bk;break;case"scroll":m=Ek;break;case"wheel":m=Wk;break;case"copy":case"cut":case"paste":m=Ok;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Cy}var _=(t&4)!==0,w=!_&&e==="scroll",p=_?f!==null?f+"Capture":null:f;_=[];for(var h=u,v;h!==null;){v=h;var x=v.stateNode;if(v.tag===5&&x!==null&&(v=x,p!==null&&(x=zo(h,p),x!=null&&_.push(Yo(h,x,v)))),w)break;h=h.return}0<_.length&&(f=new m(f,g,null,n,c),d.push({event:f,listeners:_}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&n!==Yf&&(g=n.relatedTarget||n.fromElement)&&(Jr(g)||g[zn]))break e;if((m||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=u,g=g?Jr(g):null,g!==null&&(w=Ii(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=u),m!==g)){if(_=Sy,x="onMouseLeave",p="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(_=Cy,x="onPointerLeave",p="onPointerEnter",h="pointer"),w=m==null?f:Ki(m),v=g==null?f:Ki(g),f=new _(x,h+"leave",m,n,c),f.target=w,f.relatedTarget=v,x=null,Jr(c)===u&&(_=new _(p,h+"enter",g,n,c),_.target=v,_.relatedTarget=w,x=_),w=x,m&&g)t:{for(_=m,p=g,h=0,v=_;v;v=Fi(v))h++;for(v=0,x=p;x;x=Fi(x))v++;for(;0<h-v;)_=Fi(_),h--;for(;0<v-h;)p=Fi(p),v--;for(;h--;){if(_===p||p!==null&&_===p.alternate)break t;_=Fi(_),p=Fi(p)}_=null}else _=null;m!==null&&Ly(d,f,m,_,!1),g!==null&&w!==null&&Ly(d,w,g,_,!0)}}e:{if(f=u?Ki(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var E=Xk;else if(ky(f))if(r1)E=tI;else{E=Zk;var C=Jk}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=eI);if(E&&(E=E(e,u))){n1(d,E,n,c);break e}C&&C(e,f,u),e==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Vf(f,"number",f.value)}switch(C=u?Ki(u):window,e){case"focusin":(ky(C)||C.contentEditable==="true")&&(Hi=C,th=u,Eo=null);break;case"focusout":Eo=th=Hi=null;break;case"mousedown":nh=!0;break;case"contextmenu":case"mouseup":case"dragend":nh=!1,Ny(d,n,c);break;case"selectionchange":if(iI)break;case"keydown":case"keyup":Ny(d,n,c)}var S;if(Yp)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Wi?e1(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Zw&&n.locale!=="ko"&&(Wi||P!=="onCompositionStart"?P==="onCompositionEnd"&&Wi&&(S=Jw()):(lr=c,Hp="value"in lr?lr.value:lr.textContent,Wi=!0)),C=cu(u,P),0<C.length&&(P=new Ey(P,e,null,n,c),d.push({event:P,listeners:C}),S?P.data=S:(S=t1(n),S!==null&&(P.data=S)))),(S=Gk?Kk(e,n):Yk(e,n))&&(u=cu(u,"onBeforeInput"),0<u.length&&(c=new Ey("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=S))}h1(d,t)})}function Yo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function cu(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=zo(e,n),s!=null&&r.unshift(Yo(e,s,i)),s=zo(e,t),s!=null&&r.push(Yo(e,s,i))),e=e.return}return r}function Fi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ly(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=zo(n,s),l!=null&&o.unshift(Yo(n,l,a))):i||(l=zo(n,s),l!=null&&o.push(Yo(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var lI=/\r\n?/g,uI=/\u0000|\uFFFD/g;function My(e){return(typeof e=="string"?e:""+e).replace(lI,`
`).replace(uI,"")}function il(e,t,n){if(t=My(t),My(e)!==t&&n)throw Error(k(425))}function du(){}var rh=null,ih=null;function sh(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var oh=typeof setTimeout=="function"?setTimeout:void 0,cI=typeof clearTimeout=="function"?clearTimeout:void 0,Fy=typeof Promise=="function"?Promise:void 0,dI=typeof queueMicrotask=="function"?queueMicrotask:typeof Fy<"u"?function(e){return Fy.resolve(null).then(e).catch(fI)}:oh;function fI(e){setTimeout(function(){throw e})}function jd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Wo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Wo(t)}function pr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $y(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var zs=Math.random().toString(36).slice(2),yn="__reactFiber$"+zs,qo="__reactProps$"+zs,zn="__reactContainer$"+zs,ah="__reactEvents$"+zs,hI="__reactListeners$"+zs,pI="__reactHandles$"+zs;function Jr(e){var t=e[yn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[zn]||n[yn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$y(e);e!==null;){if(n=e[yn])return n;e=$y(e)}return t}e=n,n=e.parentNode}return null}function Oa(e){return e=e[yn]||e[zn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ki(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function mc(e){return e[qo]||null}var lh=[],Yi=-1;function Lr(e){return{current:e}}function ge(e){0>Yi||(e.current=lh[Yi],lh[Yi]=null,Yi--)}function de(e,t){Yi++,lh[Yi]=e.current,e.current=t}var kr={},tt=Lr(kr),gt=Lr(!1),hi=kr;function ys(e,t){var n=e.type.contextTypes;if(!n)return kr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function yt(e){return e=e.childContextTypes,e!=null}function fu(){ge(gt),ge(tt)}function jy(e,t,n){if(tt.current!==kr)throw Error(k(168));de(tt,t),de(gt,n)}function m1(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,Jb(e)||"Unknown",i));return we({},n,r)}function hu(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kr,hi=tt.current,de(tt,e),de(gt,gt.current),!0}function Uy(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=m1(e,t,hi),r.__reactInternalMemoizedMergedChildContext=e,ge(gt),ge(tt),de(tt,e)):ge(gt),de(gt,n)}var Nn=null,gc=!1,Ud=!1;function g1(e){Nn===null?Nn=[e]:Nn.push(e)}function mI(e){gc=!0,g1(e)}function Mr(){if(!Ud&&Nn!==null){Ud=!0;var e=0,t=se;try{var n=Nn;for(se=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Nn=null,gc=!1}catch(i){throw Nn!==null&&(Nn=Nn.slice(e+1)),zw(zp,Mr),i}finally{se=t,Ud=!1}}return null}var qi=[],Qi=0,pu=null,mu=0,jt=[],Ut=0,pi=null,Dn=1,Ln="";function Hr(e,t){qi[Qi++]=mu,qi[Qi++]=pu,pu=e,mu=t}function y1(e,t,n){jt[Ut++]=Dn,jt[Ut++]=Ln,jt[Ut++]=pi,pi=e;var r=Dn;e=Ln;var i=32-sn(r)-1;r&=~(1<<i),n+=1;var s=32-sn(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Dn=1<<32-sn(t)+i|n<<i|r,Ln=s+e}else Dn=1<<s|n<<i|r,Ln=e}function Qp(e){e.return!==null&&(Hr(e,1),y1(e,1,0))}function Xp(e){for(;e===pu;)pu=qi[--Qi],qi[Qi]=null,mu=qi[--Qi],qi[Qi]=null;for(;e===pi;)pi=jt[--Ut],jt[Ut]=null,Ln=jt[--Ut],jt[Ut]=null,Dn=jt[--Ut],jt[Ut]=null}var kt=null,Et=null,ye=!1,Zt=null;function v1(e,t){var n=zt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function zy(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,kt=e,Et=pr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,kt=e,Et=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=pi!==null?{id:Dn,overflow:Ln}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=zt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,kt=e,Et=null,!0):!1;default:return!1}}function uh(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ch(e){if(ye){var t=Et;if(t){var n=t;if(!zy(e,t)){if(uh(e))throw Error(k(418));t=pr(n.nextSibling);var r=kt;t&&zy(e,t)?v1(r,n):(e.flags=e.flags&-4097|2,ye=!1,kt=e)}}else{if(uh(e))throw Error(k(418));e.flags=e.flags&-4097|2,ye=!1,kt=e}}}function By(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;kt=e}function sl(e){if(e!==kt)return!1;if(!ye)return By(e),ye=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!sh(e.type,e.memoizedProps)),t&&(t=Et)){if(uh(e))throw _1(),Error(k(418));for(;t;)v1(e,t),t=pr(t.nextSibling)}if(By(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Et=pr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Et=null}}else Et=kt?pr(e.stateNode.nextSibling):null;return!0}function _1(){for(var e=Et;e;)e=pr(e.nextSibling)}function vs(){Et=kt=null,ye=!1}function Jp(e){Zt===null?Zt=[e]:Zt.push(e)}var gI=Kn.ReactCurrentBatchConfig;function Xt(e,t){if(e&&e.defaultProps){t=we({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var gu=Lr(null),yu=null,Xi=null,Zp=null;function em(){Zp=Xi=yu=null}function tm(e){var t=gu.current;ge(gu),e._currentValue=t}function dh(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ls(e,t){yu=e,Zp=Xi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ht=!0),e.firstContext=null)}function Vt(e){var t=e._currentValue;if(Zp!==e)if(e={context:e,memoizedValue:t,next:null},Xi===null){if(yu===null)throw Error(k(308));Xi=e,yu.dependencies={lanes:0,firstContext:e}}else Xi=Xi.next=e;return t}var Zr=null;function nm(e){Zr===null?Zr=[e]:Zr.push(e)}function w1(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,nm(t)):(n.next=i.next,i.next=n),t.interleaved=n,Bn(e,r)}function Bn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tr=!1;function rm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function x1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $n(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Bn(e,n)}return i=r.interleaved,i===null?(t.next=t,nm(r)):(t.next=i.next,i.next=t),r.interleaved=t,Bn(e,n)}function Pl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bp(e,n)}}function Vy(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function vu(e,t,n,r){var i=e.updateQueue;tr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=e,_=a;switch(f=t,m=n,_.tag){case 1:if(g=_.payload,typeof g=="function"){d=g.call(m,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,f=typeof g=="function"?g.call(m,d,f):g,f==null)break e;d=we({},d,f);break e;case 2:tr=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);gi|=o,e.lanes=o,e.memoizedState=d}}function Wy(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var S1=new ww.Component().refs;function fh(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:we({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var yc={isMounted:function(e){return(e=e._reactInternals)?Ii(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ot(),i=yr(e),s=$n(r,i);s.payload=t,n!=null&&(s.callback=n),t=mr(e,s,i),t!==null&&(on(t,e,i,r),Pl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ot(),i=yr(e),s=$n(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=mr(e,s,i),t!==null&&(on(t,e,i,r),Pl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ot(),r=yr(e),i=$n(n,r);i.tag=2,t!=null&&(i.callback=t),t=mr(e,i,r),t!==null&&(on(t,e,r,n),Pl(t,e,r))}};function Hy(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Go(n,r)||!Go(i,s):!0}function E1(e,t,n){var r=!1,i=kr,s=t.contextType;return typeof s=="object"&&s!==null?s=Vt(s):(i=yt(t)?hi:tt.current,r=t.contextTypes,s=(r=r!=null)?ys(e,i):kr),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=yc,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Gy(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&yc.enqueueReplaceState(t,t.state,null)}function hh(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=S1,rm(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Vt(s):(s=yt(t)?hi:tt.current,i.context=ys(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(fh(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&yc.enqueueReplaceState(i,i.state,null),vu(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function to(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===S1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function ol(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ky(e){var t=e._init;return t(e._payload)}function C1(e){function t(p,h){if(e){var v=p.deletions;v===null?(p.deletions=[h],p.flags|=16):v.push(h)}}function n(p,h){if(!e)return null;for(;h!==null;)t(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=vr(p,h),p.index=0,p.sibling=null,p}function s(p,h,v){return p.index=v,e?(v=p.alternate,v!==null?(v=v.index,v<h?(p.flags|=2,h):v):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,h,v,x){return h===null||h.tag!==6?(h=Kd(v,p.mode,x),h.return=p,h):(h=i(h,v),h.return=p,h)}function l(p,h,v,x){var E=v.type;return E===Vi?c(p,h,v.props.children,x,v.key):h!==null&&(h.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===er&&Ky(E)===h.type)?(x=i(h,v.props),x.ref=to(p,h,v),x.return=p,x):(x=Ll(v.type,v.key,v.props,null,p.mode,x),x.ref=to(p,h,v),x.return=p,x)}function u(p,h,v,x){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=Yd(v,p.mode,x),h.return=p,h):(h=i(h,v.children||[]),h.return=p,h)}function c(p,h,v,x,E){return h===null||h.tag!==7?(h=oi(v,p.mode,x,E),h.return=p,h):(h=i(h,v),h.return=p,h)}function d(p,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Kd(""+h,p.mode,v),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case qa:return v=Ll(h.type,h.key,h.props,null,p.mode,v),v.ref=to(p,null,h),v.return=p,v;case Bi:return h=Yd(h,p.mode,v),h.return=p,h;case er:var x=h._init;return d(p,x(h._payload),v)}if(fo(h)||Qs(h))return h=oi(h,p.mode,v,null),h.return=p,h;ol(p,h)}return null}function f(p,h,v,x){var E=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return E!==null?null:a(p,h,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case qa:return v.key===E?l(p,h,v,x):null;case Bi:return v.key===E?u(p,h,v,x):null;case er:return E=v._init,f(p,h,E(v._payload),x)}if(fo(v)||Qs(v))return E!==null?null:c(p,h,v,x,null);ol(p,v)}return null}function m(p,h,v,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(v)||null,a(h,p,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case qa:return p=p.get(x.key===null?v:x.key)||null,l(h,p,x,E);case Bi:return p=p.get(x.key===null?v:x.key)||null,u(h,p,x,E);case er:var C=x._init;return m(p,h,v,C(x._payload),E)}if(fo(x)||Qs(x))return p=p.get(v)||null,c(h,p,x,E,null);ol(h,x)}return null}function g(p,h,v,x){for(var E=null,C=null,S=h,P=h=0,F=null;S!==null&&P<v.length;P++){S.index>P?(F=S,S=null):F=S.sibling;var L=f(p,S,v[P],x);if(L===null){S===null&&(S=F);break}e&&S&&L.alternate===null&&t(p,S),h=s(L,h,P),C===null?E=L:C.sibling=L,C=L,S=F}if(P===v.length)return n(p,S),ye&&Hr(p,P),E;if(S===null){for(;P<v.length;P++)S=d(p,v[P],x),S!==null&&(h=s(S,h,P),C===null?E=S:C.sibling=S,C=S);return ye&&Hr(p,P),E}for(S=r(p,S);P<v.length;P++)F=m(S,p,P,v[P],x),F!==null&&(e&&F.alternate!==null&&S.delete(F.key===null?P:F.key),h=s(F,h,P),C===null?E=F:C.sibling=F,C=F);return e&&S.forEach(function(V){return t(p,V)}),ye&&Hr(p,P),E}function _(p,h,v,x){var E=Qs(v);if(typeof E!="function")throw Error(k(150));if(v=E.call(v),v==null)throw Error(k(151));for(var C=E=null,S=h,P=h=0,F=null,L=v.next();S!==null&&!L.done;P++,L=v.next()){S.index>P?(F=S,S=null):F=S.sibling;var V=f(p,S,L.value,x);if(V===null){S===null&&(S=F);break}e&&S&&V.alternate===null&&t(p,S),h=s(V,h,P),C===null?E=V:C.sibling=V,C=V,S=F}if(L.done)return n(p,S),ye&&Hr(p,P),E;if(S===null){for(;!L.done;P++,L=v.next())L=d(p,L.value,x),L!==null&&(h=s(L,h,P),C===null?E=L:C.sibling=L,C=L);return ye&&Hr(p,P),E}for(S=r(p,S);!L.done;P++,L=v.next())L=m(S,p,P,L.value,x),L!==null&&(e&&L.alternate!==null&&S.delete(L.key===null?P:L.key),h=s(L,h,P),C===null?E=L:C.sibling=L,C=L);return e&&S.forEach(function(ut){return t(p,ut)}),ye&&Hr(p,P),E}function w(p,h,v,x){if(typeof v=="object"&&v!==null&&v.type===Vi&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case qa:e:{for(var E=v.key,C=h;C!==null;){if(C.key===E){if(E=v.type,E===Vi){if(C.tag===7){n(p,C.sibling),h=i(C,v.props.children),h.return=p,p=h;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===er&&Ky(E)===C.type){n(p,C.sibling),h=i(C,v.props),h.ref=to(p,C,v),h.return=p,p=h;break e}n(p,C);break}else t(p,C);C=C.sibling}v.type===Vi?(h=oi(v.props.children,p.mode,x,v.key),h.return=p,p=h):(x=Ll(v.type,v.key,v.props,null,p.mode,x),x.ref=to(p,h,v),x.return=p,p=x)}return o(p);case Bi:e:{for(C=v.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(p,h.sibling),h=i(h,v.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else t(p,h);h=h.sibling}h=Yd(v,p.mode,x),h.return=p,p=h}return o(p);case er:return C=v._init,w(p,h,C(v._payload),x)}if(fo(v))return g(p,h,v,x);if(Qs(v))return _(p,h,v,x);ol(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,v),h.return=p,p=h):(n(p,h),h=Kd(v,p.mode,x),h.return=p,p=h),o(p)):n(p,h)}return w}var _s=C1(!0),T1=C1(!1),Ra={},_n=Lr(Ra),Qo=Lr(Ra),Xo=Lr(Ra);function ei(e){if(e===Ra)throw Error(k(174));return e}function im(e,t){switch(de(Xo,t),de(Qo,e),de(_n,Ra),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Hf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Hf(t,e)}ge(_n),de(_n,t)}function ws(){ge(_n),ge(Qo),ge(Xo)}function b1(e){ei(Xo.current);var t=ei(_n.current),n=Hf(t,e.type);t!==n&&(de(Qo,e),de(_n,n))}function sm(e){Qo.current===e&&(ge(_n),ge(Qo))}var ve=Lr(0);function _u(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var zd=[];function om(){for(var e=0;e<zd.length;e++)zd[e]._workInProgressVersionPrimary=null;zd.length=0}var Ol=Kn.ReactCurrentDispatcher,Bd=Kn.ReactCurrentBatchConfig,mi=0,_e=null,Pe=null,Me=null,wu=!1,Co=!1,Jo=0,yI=0;function Qe(){throw Error(k(321))}function am(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!cn(e[n],t[n]))return!1;return!0}function lm(e,t,n,r,i,s){if(mi=s,_e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ol.current=e===null||e.memoizedState===null?xI:SI,e=n(r,i),Co){s=0;do{if(Co=!1,Jo=0,25<=s)throw Error(k(301));s+=1,Me=Pe=null,t.updateQueue=null,Ol.current=EI,e=n(r,i)}while(Co)}if(Ol.current=xu,t=Pe!==null&&Pe.next!==null,mi=0,Me=Pe=_e=null,wu=!1,t)throw Error(k(300));return e}function um(){var e=Jo!==0;return Jo=0,e}function fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?_e.memoizedState=Me=e:Me=Me.next=e,Me}function Wt(){if(Pe===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var t=Me===null?_e.memoizedState:Me.next;if(t!==null)Me=t,Pe=e;else{if(e===null)throw Error(k(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Me===null?_e.memoizedState=Me=e:Me=Me.next=e}return Me}function Zo(e,t){return typeof t=="function"?t(e):t}function Vd(e){var t=Wt(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=Pe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((mi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,_e.lanes|=c,gi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,cn(r,t.memoizedState)||(ht=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,_e.lanes|=s,gi|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Wd(e){var t=Wt(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);cn(s,t.memoizedState)||(ht=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function k1(){}function I1(e,t){var n=_e,r=Wt(),i=t(),s=!cn(r.memoizedState,i);if(s&&(r.memoizedState=i,ht=!0),r=r.queue,cm(R1.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,ea(9,O1.bind(null,n,r,i,t),void 0,null),je===null)throw Error(k(349));mi&30||P1(n,t,i)}return i}function P1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function O1(e,t,n,r){t.value=n,t.getSnapshot=r,N1(t)&&A1(e)}function R1(e,t,n){return n(function(){N1(t)&&A1(e)})}function N1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!cn(e,n)}catch{return!0}}function A1(e){var t=Bn(e,1);t!==null&&on(t,e,1,-1)}function Yy(e){var t=fn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zo,lastRenderedState:e},t.queue=e,e=e.dispatch=wI.bind(null,_e,e),[t.memoizedState,e]}function ea(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function D1(){return Wt().memoizedState}function Rl(e,t,n,r){var i=fn();_e.flags|=e,i.memoizedState=ea(1|t,n,void 0,r===void 0?null:r)}function vc(e,t,n,r){var i=Wt();r=r===void 0?null:r;var s=void 0;if(Pe!==null){var o=Pe.memoizedState;if(s=o.destroy,r!==null&&am(r,o.deps)){i.memoizedState=ea(t,n,s,r);return}}_e.flags|=e,i.memoizedState=ea(1|t,n,s,r)}function qy(e,t){return Rl(8390656,8,e,t)}function cm(e,t){return vc(2048,8,e,t)}function L1(e,t){return vc(4,2,e,t)}function M1(e,t){return vc(4,4,e,t)}function F1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $1(e,t,n){return n=n!=null?n.concat([e]):null,vc(4,4,F1.bind(null,t,e),n)}function dm(){}function j1(e,t){var n=Wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&am(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function U1(e,t){var n=Wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&am(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function z1(e,t,n){return mi&21?(cn(n,t)||(n=Ww(),_e.lanes|=n,gi|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ht=!0),e.memoizedState=n)}function vI(e,t){var n=se;se=n!==0&&4>n?n:4,e(!0);var r=Bd.transition;Bd.transition={};try{e(!1),t()}finally{se=n,Bd.transition=r}}function B1(){return Wt().memoizedState}function _I(e,t,n){var r=yr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},V1(e))W1(t,n);else if(n=w1(e,t,n,r),n!==null){var i=ot();on(n,e,r,i),H1(n,t,r)}}function wI(e,t,n){var r=yr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(V1(e))W1(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,cn(a,o)){var l=t.interleaved;l===null?(i.next=i,nm(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=w1(e,t,i,r),n!==null&&(i=ot(),on(n,e,r,i),H1(n,t,r))}}function V1(e){var t=e.alternate;return e===_e||t!==null&&t===_e}function W1(e,t){Co=wu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function H1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bp(e,n)}}var xu={readContext:Vt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},xI={readContext:Vt,useCallback:function(e,t){return fn().memoizedState=[e,t===void 0?null:t],e},useContext:Vt,useEffect:qy,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Rl(4194308,4,F1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Rl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Rl(4,2,e,t)},useMemo:function(e,t){var n=fn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=fn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=_I.bind(null,_e,e),[r.memoizedState,e]},useRef:function(e){var t=fn();return e={current:e},t.memoizedState=e},useState:Yy,useDebugValue:dm,useDeferredValue:function(e){return fn().memoizedState=e},useTransition:function(){var e=Yy(!1),t=e[0];return e=vI.bind(null,e[1]),fn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=_e,i=fn();if(ye){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),je===null)throw Error(k(349));mi&30||P1(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,qy(R1.bind(null,r,s,e),[e]),r.flags|=2048,ea(9,O1.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=fn(),t=je.identifierPrefix;if(ye){var n=Ln,r=Dn;n=(r&~(1<<32-sn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Jo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=yI++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},SI={readContext:Vt,useCallback:j1,useContext:Vt,useEffect:cm,useImperativeHandle:$1,useInsertionEffect:L1,useLayoutEffect:M1,useMemo:U1,useReducer:Vd,useRef:D1,useState:function(){return Vd(Zo)},useDebugValue:dm,useDeferredValue:function(e){var t=Wt();return z1(t,Pe.memoizedState,e)},useTransition:function(){var e=Vd(Zo)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:k1,useSyncExternalStore:I1,useId:B1,unstable_isNewReconciler:!1},EI={readContext:Vt,useCallback:j1,useContext:Vt,useEffect:cm,useImperativeHandle:$1,useInsertionEffect:L1,useLayoutEffect:M1,useMemo:U1,useReducer:Wd,useRef:D1,useState:function(){return Wd(Zo)},useDebugValue:dm,useDeferredValue:function(e){var t=Wt();return Pe===null?t.memoizedState=e:z1(t,Pe.memoizedState,e)},useTransition:function(){var e=Wd(Zo)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:k1,useSyncExternalStore:I1,useId:B1,unstable_isNewReconciler:!1};function xs(e,t){try{var n="",r=t;do n+=Xb(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Hd(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ph(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var CI=typeof WeakMap=="function"?WeakMap:Map;function G1(e,t,n){n=$n(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Eu||(Eu=!0,Ch=r),ph(e,t)},n}function K1(e,t,n){n=$n(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ph(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ph(e,t),typeof r!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Qy(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new CI;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=$I.bind(null,e,t,n),t.then(e,e))}function Xy(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Jy(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=$n(-1,1),t.tag=2,mr(n,t,1))),n.lanes|=1),e)}var TI=Kn.ReactCurrentOwner,ht=!1;function rt(e,t,n,r){t.child=e===null?T1(t,null,n,r):_s(t,e.child,n,r)}function Zy(e,t,n,r,i){n=n.render;var s=t.ref;return ls(t,i),r=lm(e,t,n,r,s,i),n=um(),e!==null&&!ht?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Vn(e,t,i)):(ye&&n&&Qp(t),t.flags|=1,rt(e,t,r,i),t.child)}function ev(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!_m(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Y1(e,t,s,r,i)):(e=Ll(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Go,n(o,r)&&e.ref===t.ref)return Vn(e,t,i)}return t.flags|=1,e=vr(s,r),e.ref=t.ref,e.return=t,t.child=e}function Y1(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Go(s,r)&&e.ref===t.ref)if(ht=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(ht=!0);else return t.lanes=e.lanes,Vn(e,t,i)}return mh(e,t,n,r,i)}function q1(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Zi,St),St|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,de(Zi,St),St|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(Zi,St),St|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,de(Zi,St),St|=r;return rt(e,t,i,n),t.child}function Q1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function mh(e,t,n,r,i){var s=yt(n)?hi:tt.current;return s=ys(t,s),ls(t,i),n=lm(e,t,n,r,s,i),r=um(),e!==null&&!ht?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Vn(e,t,i)):(ye&&r&&Qp(t),t.flags|=1,rt(e,t,n,i),t.child)}function tv(e,t,n,r,i){if(yt(n)){var s=!0;hu(t)}else s=!1;if(ls(t,i),t.stateNode===null)Nl(e,t),E1(t,n,r),hh(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Vt(u):(u=yt(n)?hi:tt.current,u=ys(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Gy(t,o,r,u),tr=!1;var f=t.memoizedState;o.state=f,vu(t,r,o,i),l=t.memoizedState,a!==r||f!==l||gt.current||tr?(typeof c=="function"&&(fh(t,n,c,r),l=t.memoizedState),(a=tr||Hy(t,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,x1(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Xt(t.type,a),o.props=u,d=t.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Vt(l):(l=yt(n)?hi:tt.current,l=ys(t,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Gy(t,o,r,l),tr=!1,f=t.memoizedState,o.state=f,vu(t,r,o,i);var g=t.memoizedState;a!==d||f!==g||gt.current||tr?(typeof m=="function"&&(fh(t,n,m,r),g=t.memoizedState),(u=tr||Hy(t,n,u,r,f,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return gh(e,t,n,r,s,i)}function gh(e,t,n,r,i,s){Q1(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Uy(t,n,!1),Vn(e,t,s);r=t.stateNode,TI.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=_s(t,e.child,null,s),t.child=_s(t,null,a,s)):rt(e,t,a,s),t.memoizedState=r.state,i&&Uy(t,n,!0),t.child}function X1(e){var t=e.stateNode;t.pendingContext?jy(e,t.pendingContext,t.pendingContext!==t.context):t.context&&jy(e,t.context,!1),im(e,t.containerInfo)}function nv(e,t,n,r,i){return vs(),Jp(i),t.flags|=256,rt(e,t,n,r),t.child}var yh={dehydrated:null,treeContext:null,retryLane:0};function vh(e){return{baseLanes:e,cachePool:null,transitions:null}}function J1(e,t,n){var r=t.pendingProps,i=ve.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),de(ve,i&1),e===null)return ch(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xc(o,r,0,null),e=oi(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=vh(n),t.memoizedState=yh,e):fm(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return bI(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=vr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=vr(a,s):(s=oi(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?vh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=yh,r}return s=e.child,e=s.sibling,r=vr(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function fm(e,t){return t=xc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function al(e,t,n,r){return r!==null&&Jp(r),_s(t,e.child,null,n),e=fm(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bI(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Hd(Error(k(422))),al(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=xc({mode:"visible",children:r.children},i,0,null),s=oi(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&_s(t,e.child,null,o),t.child.memoizedState=vh(o),t.memoizedState=yh,s);if(!(t.mode&1))return al(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=Hd(s,r,void 0),al(e,t,o,r)}if(a=(o&e.childLanes)!==0,ht||a){if(r=je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Bn(e,i),on(r,e,i,-1))}return vm(),r=Hd(Error(k(421))),al(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=jI.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Et=pr(i.nextSibling),kt=t,ye=!0,Zt=null,e!==null&&(jt[Ut++]=Dn,jt[Ut++]=Ln,jt[Ut++]=pi,Dn=e.id,Ln=e.overflow,pi=t),t=fm(t,r.children),t.flags|=4096,t)}function rv(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),dh(e.return,t,n)}function Gd(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Z1(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(rt(e,t,r.children,n),r=ve.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rv(e,n,t);else if(e.tag===19)rv(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(de(ve,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_u(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Gd(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_u(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Gd(t,!0,n,null,s);break;case"together":Gd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Nl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),gi|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=vr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function kI(e,t,n){switch(t.tag){case 3:X1(t),vs();break;case 5:b1(t);break;case 1:yt(t.type)&&hu(t);break;case 4:im(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;de(gu,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(de(ve,ve.current&1),t.flags|=128,null):n&t.child.childLanes?J1(e,t,n):(de(ve,ve.current&1),e=Vn(e,t,n),e!==null?e.sibling:null);de(ve,ve.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Z1(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(ve,ve.current),r)break;return null;case 22:case 23:return t.lanes=0,q1(e,t,n)}return Vn(e,t,n)}var ex,_h,tx,nx;ex=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_h=function(){};tx=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ei(_n.current);var s=null;switch(n){case"input":i=zf(e,i),r=zf(e,r),s=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),s=[];break;case"textarea":i=Wf(e,i),r=Wf(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=du)}Gf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(jo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(jo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&fe("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};nx=function(e,t,n,r){n!==r&&(t.flags|=4)};function no(e,t){if(!ye)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function II(e,t,n){var r=t.pendingProps;switch(Xp(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(t),null;case 1:return yt(t.type)&&fu(),Xe(t),null;case 3:return r=t.stateNode,ws(),ge(gt),ge(tt),om(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(sl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Zt!==null&&(kh(Zt),Zt=null))),_h(e,t),Xe(t),null;case 5:sm(t);var i=ei(Xo.current);if(n=t.type,e!==null&&t.stateNode!=null)tx(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return Xe(t),null}if(e=ei(_n.current),sl(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[yn]=t,r[qo]=s,e=(t.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<po.length;i++)fe(po[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":fy(r,s),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},fe("invalid",r);break;case"textarea":py(r,s),fe("invalid",r)}Gf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&il(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&il(r.textContent,a,e),i=["children",""+a]):jo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&fe("scroll",r)}switch(n){case"input":Qa(r),hy(r,s,!0);break;case"textarea":Qa(r),my(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=du)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Pw(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[yn]=t,e[qo]=r,ex(e,t,!1,!1),t.stateNode=e;e:{switch(o=Kf(n,r),n){case"dialog":fe("cancel",e),fe("close",e),i=r;break;case"iframe":case"object":case"embed":fe("load",e),i=r;break;case"video":case"audio":for(i=0;i<po.length;i++)fe(po[i],e);i=r;break;case"source":fe("error",e),i=r;break;case"img":case"image":case"link":fe("error",e),fe("load",e),i=r;break;case"details":fe("toggle",e),i=r;break;case"input":fy(e,r),i=zf(e,r),fe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),fe("invalid",e);break;case"textarea":py(e,r),i=Wf(e,r),fe("invalid",e);break;default:i=r}Gf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Nw(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ow(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Uo(e,l):typeof l=="number"&&Uo(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(jo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&fe("scroll",e):l!=null&&Mp(e,s,l,o))}switch(n){case"input":Qa(e),hy(e,r,!1);break;case"textarea":Qa(e),my(e);break;case"option":r.value!=null&&e.setAttribute("value",""+br(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?is(e,!!r.multiple,s,!1):r.defaultValue!=null&&is(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=du)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Xe(t),null;case 6:if(e&&t.stateNode!=null)nx(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=ei(Xo.current),ei(_n.current),sl(t)){if(r=t.stateNode,n=t.memoizedProps,r[yn]=t,(s=r.nodeValue!==n)&&(e=kt,e!==null))switch(e.tag){case 3:il(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&il(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yn]=t,t.stateNode=r}return Xe(t),null;case 13:if(ge(ve),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ye&&Et!==null&&t.mode&1&&!(t.flags&128))_1(),vs(),t.flags|=98560,s=!1;else if(s=sl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(k(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[yn]=t}else vs(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Xe(t),s=!1}else Zt!==null&&(kh(Zt),Zt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ve.current&1?Ne===0&&(Ne=3):vm())),t.updateQueue!==null&&(t.flags|=4),Xe(t),null);case 4:return ws(),_h(e,t),e===null&&Ko(t.stateNode.containerInfo),Xe(t),null;case 10:return tm(t.type._context),Xe(t),null;case 17:return yt(t.type)&&fu(),Xe(t),null;case 19:if(ge(ve),s=t.memoizedState,s===null)return Xe(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)no(s,!1);else{if(Ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=_u(e),o!==null){for(t.flags|=128,no(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return de(ve,ve.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ee()>Ss&&(t.flags|=128,r=!0,no(s,!1),t.lanes=4194304)}else{if(!r)if(e=_u(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),no(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ye)return Xe(t),null}else 2*Ee()-s.renderingStartTime>Ss&&n!==1073741824&&(t.flags|=128,r=!0,no(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ee(),t.sibling=null,n=ve.current,de(ve,r?n&1|2:n&1),t):(Xe(t),null);case 22:case 23:return ym(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?St&1073741824&&(Xe(t),t.subtreeFlags&6&&(t.flags|=8192)):Xe(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function PI(e,t){switch(Xp(t),t.tag){case 1:return yt(t.type)&&fu(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ws(),ge(gt),ge(tt),om(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return sm(t),null;case 13:if(ge(ve),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));vs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ge(ve),null;case 4:return ws(),null;case 10:return tm(t.type._context),null;case 22:case 23:return ym(),null;case 24:return null;default:return null}}var ll=!1,Ze=!1,OI=typeof WeakSet=="function"?WeakSet:Set,N=null;function Ji(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(e,t,r)}else n.current=null}function wh(e,t,n){try{n()}catch(r){xe(e,t,r)}}var iv=!1;function RI(e,t){if(rh=lu,e=o1(),qp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===e)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ih={focusedElem:e,selectionRange:n},lu=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,w=g.memoizedState,p=t.stateNode,h=p.getSnapshotBeforeUpdate(t.elementType===t.type?_:Xt(t.type,_),w);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(x){xe(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return g=iv,iv=!1,g}function To(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&wh(t,n,s)}i=i.next}while(i!==r)}}function _c(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function xh(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function rx(e){var t=e.alternate;t!==null&&(e.alternate=null,rx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[yn],delete t[qo],delete t[ah],delete t[hI],delete t[pI])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ix(e){return e.tag===5||e.tag===3||e.tag===4}function sv(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ix(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sh(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=du));else if(r!==4&&(e=e.child,e!==null))for(Sh(e,t,n),e=e.sibling;e!==null;)Sh(e,t,n),e=e.sibling}function Eh(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Eh(e,t,n),e=e.sibling;e!==null;)Eh(e,t,n),e=e.sibling}var Ve=null,Jt=!1;function Xn(e,t,n){for(n=n.child;n!==null;)sx(e,t,n),n=n.sibling}function sx(e,t,n){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount(dc,n)}catch{}switch(n.tag){case 5:Ze||Ji(n,t);case 6:var r=Ve,i=Jt;Ve=null,Xn(e,t,n),Ve=r,Jt=i,Ve!==null&&(Jt?(e=Ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ve.removeChild(n.stateNode));break;case 18:Ve!==null&&(Jt?(e=Ve,n=n.stateNode,e.nodeType===8?jd(e.parentNode,n):e.nodeType===1&&jd(e,n),Wo(e)):jd(Ve,n.stateNode));break;case 4:r=Ve,i=Jt,Ve=n.stateNode.containerInfo,Jt=!0,Xn(e,t,n),Ve=r,Jt=i;break;case 0:case 11:case 14:case 15:if(!Ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&wh(n,t,o),i=i.next}while(i!==r)}Xn(e,t,n);break;case 1:if(!Ze&&(Ji(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){xe(n,t,a)}Xn(e,t,n);break;case 21:Xn(e,t,n);break;case 22:n.mode&1?(Ze=(r=Ze)||n.memoizedState!==null,Xn(e,t,n),Ze=r):Xn(e,t,n);break;default:Xn(e,t,n)}}function ov(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new OI),t.forEach(function(r){var i=UI.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Yt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ve=a.stateNode,Jt=!1;break e;case 3:Ve=a.stateNode.containerInfo,Jt=!0;break e;case 4:Ve=a.stateNode.containerInfo,Jt=!0;break e}a=a.return}if(Ve===null)throw Error(k(160));sx(s,o,i),Ve=null,Jt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){xe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ox(t,e),t=t.sibling}function ox(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Yt(t,e),dn(e),r&4){try{To(3,e,e.return),_c(3,e)}catch(_){xe(e,e.return,_)}try{To(5,e,e.return)}catch(_){xe(e,e.return,_)}}break;case 1:Yt(t,e),dn(e),r&512&&n!==null&&Ji(n,n.return);break;case 5:if(Yt(t,e),dn(e),r&512&&n!==null&&Ji(n,n.return),e.flags&32){var i=e.stateNode;try{Uo(i,"")}catch(_){xe(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&kw(i,s),Kf(a,o);var u=Kf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Nw(i,d):c==="dangerouslySetInnerHTML"?Ow(i,d):c==="children"?Uo(i,d):Mp(i,c,d,u)}switch(a){case"input":Bf(i,s);break;case"textarea":Iw(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?is(i,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?is(i,!!s.multiple,s.defaultValue,!0):is(i,!!s.multiple,s.multiple?[]:"",!1))}i[qo]=s}catch(_){xe(e,e.return,_)}}break;case 6:if(Yt(t,e),dn(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(_){xe(e,e.return,_)}}break;case 3:if(Yt(t,e),dn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wo(t.containerInfo)}catch(_){xe(e,e.return,_)}break;case 4:Yt(t,e),dn(e);break;case 13:Yt(t,e),dn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(mm=Ee())),r&4&&ov(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ze=(u=Ze)||c,Yt(t,e),Ze=u):Yt(t,e),dn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(N=e,c=e.child;c!==null;){for(d=N=c;N!==null;){switch(f=N,m=f.child,f.tag){case 0:case 11:case 14:case 15:To(4,f,f.return);break;case 1:Ji(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(_){xe(r,n,_)}}break;case 5:Ji(f,f.return);break;case 22:if(f.memoizedState!==null){lv(d);continue}}m!==null?(m.return=f,N=m):lv(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Rw("display",o))}catch(_){xe(e,e.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){xe(e,e.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Yt(t,e),dn(e),r&4&&ov(e);break;case 21:break;default:Yt(t,e),dn(e)}}function dn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ix(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Uo(i,""),r.flags&=-33);var s=sv(e);Eh(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=sv(e);Sh(e,a,o);break;default:throw Error(k(161))}}catch(l){xe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function NI(e,t,n){N=e,ax(e)}function ax(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ll;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ze;a=ll;var u=Ze;if(ll=o,(Ze=l)&&!u)for(N=i;N!==null;)o=N,l=o.child,o.tag===22&&o.memoizedState!==null?uv(i):l!==null?(l.return=o,N=l):uv(i);for(;s!==null;)N=s,ax(s),s=s.sibling;N=i,ll=a,Ze=u}av(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):av(e)}}function av(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ze||_c(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ze)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Xt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Wy(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Wy(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Wo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Ze||t.flags&512&&xh(t)}catch(f){xe(t,t.return,f)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function lv(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function uv(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_c(4,t)}catch(l){xe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){xe(t,i,l)}}var s=t.return;try{xh(t)}catch(l){xe(t,s,l)}break;case 5:var o=t.return;try{xh(t)}catch(l){xe(t,o,l)}}}catch(l){xe(t,t.return,l)}if(t===e){N=null;break}var a=t.sibling;if(a!==null){a.return=t.return,N=a;break}N=t.return}}var AI=Math.ceil,Su=Kn.ReactCurrentDispatcher,hm=Kn.ReactCurrentOwner,Bt=Kn.ReactCurrentBatchConfig,Q=0,je=null,ke=null,Ge=0,St=0,Zi=Lr(0),Ne=0,ta=null,gi=0,wc=0,pm=0,bo=null,dt=null,mm=0,Ss=1/0,On=null,Eu=!1,Ch=null,gr=null,ul=!1,ur=null,Cu=0,ko=0,Th=null,Al=-1,Dl=0;function ot(){return Q&6?Ee():Al!==-1?Al:Al=Ee()}function yr(e){return e.mode&1?Q&2&&Ge!==0?Ge&-Ge:gI.transition!==null?(Dl===0&&(Dl=Ww()),Dl):(e=se,e!==0||(e=window.event,e=e===void 0?16:Xw(e.type)),e):1}function on(e,t,n,r){if(50<ko)throw ko=0,Th=null,Error(k(185));Ia(e,n,r),(!(Q&2)||e!==je)&&(e===je&&(!(Q&2)&&(wc|=n),Ne===4&&rr(e,Ge)),vt(e,r),n===1&&Q===0&&!(t.mode&1)&&(Ss=Ee()+500,gc&&Mr()))}function vt(e,t){var n=e.callbackNode;gk(e,t);var r=au(e,e===je?Ge:0);if(r===0)n!==null&&vy(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&vy(n),t===1)e.tag===0?mI(cv.bind(null,e)):g1(cv.bind(null,e)),dI(function(){!(Q&6)&&Mr()}),n=null;else{switch(Hw(r)){case 1:n=zp;break;case 4:n=Bw;break;case 16:n=ou;break;case 536870912:n=Vw;break;default:n=ou}n=mx(n,lx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function lx(e,t){if(Al=-1,Dl=0,Q&6)throw Error(k(327));var n=e.callbackNode;if(us()&&e.callbackNode!==n)return null;var r=au(e,e===je?Ge:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Tu(e,r);else{t=r;var i=Q;Q|=2;var s=cx();(je!==e||Ge!==t)&&(On=null,Ss=Ee()+500,si(e,t));do try{MI();break}catch(a){ux(e,a)}while(1);em(),Su.current=s,Q=i,ke!==null?t=0:(je=null,Ge=0,t=Ne)}if(t!==0){if(t===2&&(i=Jf(e),i!==0&&(r=i,t=bh(e,i))),t===1)throw n=ta,si(e,0),rr(e,r),vt(e,Ee()),n;if(t===6)rr(e,r);else{if(i=e.current.alternate,!(r&30)&&!DI(i)&&(t=Tu(e,r),t===2&&(s=Jf(e),s!==0&&(r=s,t=bh(e,s))),t===1))throw n=ta,si(e,0),rr(e,r),vt(e,Ee()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Gr(e,dt,On);break;case 3:if(rr(e,r),(r&130023424)===r&&(t=mm+500-Ee(),10<t)){if(au(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ot(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=oh(Gr.bind(null,e,dt,On),t);break}Gr(e,dt,On);break;case 4:if(rr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-sn(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*AI(r/1960))-r,10<r){e.timeoutHandle=oh(Gr.bind(null,e,dt,On),r);break}Gr(e,dt,On);break;case 5:Gr(e,dt,On);break;default:throw Error(k(329))}}}return vt(e,Ee()),e.callbackNode===n?lx.bind(null,e):null}function bh(e,t){var n=bo;return e.current.memoizedState.isDehydrated&&(si(e,t).flags|=256),e=Tu(e,t),e!==2&&(t=dt,dt=n,t!==null&&kh(t)),e}function kh(e){dt===null?dt=e:dt.push.apply(dt,e)}function DI(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!cn(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rr(e,t){for(t&=~pm,t&=~wc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-sn(t),r=1<<n;e[n]=-1,t&=~r}}function cv(e){if(Q&6)throw Error(k(327));us();var t=au(e,0);if(!(t&1))return vt(e,Ee()),null;var n=Tu(e,t);if(e.tag!==0&&n===2){var r=Jf(e);r!==0&&(t=r,n=bh(e,r))}if(n===1)throw n=ta,si(e,0),rr(e,t),vt(e,Ee()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Gr(e,dt,On),vt(e,Ee()),null}function gm(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(Ss=Ee()+500,gc&&Mr())}}function yi(e){ur!==null&&ur.tag===0&&!(Q&6)&&us();var t=Q;Q|=1;var n=Bt.transition,r=se;try{if(Bt.transition=null,se=1,e)return e()}finally{se=r,Bt.transition=n,Q=t,!(Q&6)&&Mr()}}function ym(){St=Zi.current,ge(Zi)}function si(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,cI(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(Xp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fu();break;case 3:ws(),ge(gt),ge(tt),om();break;case 5:sm(r);break;case 4:ws();break;case 13:ge(ve);break;case 19:ge(ve);break;case 10:tm(r.type._context);break;case 22:case 23:ym()}n=n.return}if(je=e,ke=e=vr(e.current,null),Ge=St=t,Ne=0,ta=null,pm=wc=gi=0,dt=bo=null,Zr!==null){for(t=0;t<Zr.length;t++)if(n=Zr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Zr=null}return e}function ux(e,t){do{var n=ke;try{if(em(),Ol.current=xu,wu){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}wu=!1}if(mi=0,Me=Pe=_e=null,Co=!1,Jo=0,hm.current=null,n===null||n.return===null){Ne=1,ta=t,ke=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=Ge,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Xy(o);if(m!==null){m.flags&=-257,Jy(m,o,a,s,t),m.mode&1&&Qy(s,u,t),t=m,l=u;var g=t.updateQueue;if(g===null){var _=new Set;_.add(l),t.updateQueue=_}else g.add(l);break e}else{if(!(t&1)){Qy(s,u,t),vm();break e}l=Error(k(426))}}else if(ye&&a.mode&1){var w=Xy(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Jy(w,o,a,s,t),Jp(xs(l,a));break e}}s=l=xs(l,a),Ne!==4&&(Ne=2),bo===null?bo=[s]:bo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var p=G1(s,l,t);Vy(s,p);break e;case 1:a=l;var h=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(gr===null||!gr.has(v)))){s.flags|=65536,t&=-t,s.lanes|=t;var x=K1(s,a,t);Vy(s,x);break e}}s=s.return}while(s!==null)}fx(n)}catch(E){t=E,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(1)}function cx(){var e=Su.current;return Su.current=xu,e===null?xu:e}function vm(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),je===null||!(gi&268435455)&&!(wc&268435455)||rr(je,Ge)}function Tu(e,t){var n=Q;Q|=2;var r=cx();(je!==e||Ge!==t)&&(On=null,si(e,t));do try{LI();break}catch(i){ux(e,i)}while(1);if(em(),Q=n,Su.current=r,ke!==null)throw Error(k(261));return je=null,Ge=0,Ne}function LI(){for(;ke!==null;)dx(ke)}function MI(){for(;ke!==null&&!ak();)dx(ke)}function dx(e){var t=px(e.alternate,e,St);e.memoizedProps=e.pendingProps,t===null?fx(e):ke=t,hm.current=null}function fx(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=PI(n,t),n!==null){n.flags&=32767,ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ne=6,ke=null;return}}else if(n=II(n,t,St),n!==null){ke=n;return}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);Ne===0&&(Ne=5)}function Gr(e,t,n){var r=se,i=Bt.transition;try{Bt.transition=null,se=1,FI(e,t,n,r)}finally{Bt.transition=i,se=r}return null}function FI(e,t,n,r){do us();while(ur!==null);if(Q&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(yk(e,s),e===je&&(ke=je=null,Ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ul||(ul=!0,mx(ou,function(){return us(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Bt.transition,Bt.transition=null;var o=se;se=1;var a=Q;Q|=4,hm.current=null,RI(e,n),ox(n,e),rI(ih),lu=!!rh,ih=rh=null,e.current=n,NI(n),lk(),Q=a,se=o,Bt.transition=s}else e.current=n;if(ul&&(ul=!1,ur=e,Cu=i),s=e.pendingLanes,s===0&&(gr=null),dk(n.stateNode),vt(e,Ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Eu)throw Eu=!1,e=Ch,Ch=null,e;return Cu&1&&e.tag!==0&&us(),s=e.pendingLanes,s&1?e===Th?ko++:(ko=0,Th=e):ko=0,Mr(),null}function us(){if(ur!==null){var e=Hw(Cu),t=Bt.transition,n=se;try{if(Bt.transition=null,se=16>e?16:e,ur===null)var r=!1;else{if(e=ur,ur=null,Cu=0,Q&6)throw Error(k(331));var i=Q;for(Q|=4,N=e.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(N=u;N!==null;){var c=N;switch(c.tag){case 0:case 11:case 15:To(8,c,s)}var d=c.child;if(d!==null)d.return=c,N=d;else for(;N!==null;){c=N;var f=c.sibling,m=c.return;if(rx(c),c===u){N=null;break}if(f!==null){f.return=m,N=f;break}N=m}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var w=_.sibling;_.sibling=null,_=w}while(_!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:To(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,N=p;break e}N=s.return}}var h=e.current;for(N=h;N!==null;){o=N;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,N=v;else e:for(o=h;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:_c(9,a)}}catch(E){xe(a,a.return,E)}if(a===o){N=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,N=x;break e}N=a.return}}if(Q=i,Mr(),vn&&typeof vn.onPostCommitFiberRoot=="function")try{vn.onPostCommitFiberRoot(dc,e)}catch{}r=!0}return r}finally{se=n,Bt.transition=t}}return!1}function dv(e,t,n){t=xs(n,t),t=G1(e,t,1),e=mr(e,t,1),t=ot(),e!==null&&(Ia(e,1,t),vt(e,t))}function xe(e,t,n){if(e.tag===3)dv(e,e,n);else for(;t!==null;){if(t.tag===3){dv(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gr===null||!gr.has(r))){e=xs(n,e),e=K1(t,e,1),t=mr(t,e,1),e=ot(),t!==null&&(Ia(t,1,e),vt(t,e));break}}t=t.return}}function $I(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ot(),e.pingedLanes|=e.suspendedLanes&n,je===e&&(Ge&n)===n&&(Ne===4||Ne===3&&(Ge&130023424)===Ge&&500>Ee()-mm?si(e,0):pm|=n),vt(e,t)}function hx(e,t){t===0&&(e.mode&1?(t=Za,Za<<=1,!(Za&130023424)&&(Za=4194304)):t=1);var n=ot();e=Bn(e,t),e!==null&&(Ia(e,t,n),vt(e,n))}function jI(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hx(e,n)}function UI(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),hx(e,n)}var px;px=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||gt.current)ht=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ht=!1,kI(e,t,n);ht=!!(e.flags&131072)}else ht=!1,ye&&t.flags&1048576&&y1(t,mu,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Nl(e,t),e=t.pendingProps;var i=ys(t,tt.current);ls(t,n),i=lm(null,t,r,e,i,n);var s=um();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,yt(r)?(s=!0,hu(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,rm(t),i.updater=yc,t.stateNode=i,i._reactInternals=t,hh(t,r,e,n),t=gh(null,t,r,!0,s,n)):(t.tag=0,ye&&s&&Qp(t),rt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Nl(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=BI(r),e=Xt(r,e),i){case 0:t=mh(null,t,r,e,n);break e;case 1:t=tv(null,t,r,e,n);break e;case 11:t=Zy(null,t,r,e,n);break e;case 14:t=ev(null,t,r,Xt(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xt(r,i),mh(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xt(r,i),tv(e,t,r,i,n);case 3:e:{if(X1(t),e===null)throw Error(k(387));r=t.pendingProps,s=t.memoizedState,i=s.element,x1(e,t),vu(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=xs(Error(k(423)),t),t=nv(e,t,r,n,i);break e}else if(r!==i){i=xs(Error(k(424)),t),t=nv(e,t,r,n,i);break e}else for(Et=pr(t.stateNode.containerInfo.firstChild),kt=t,ye=!0,Zt=null,n=T1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vs(),r===i){t=Vn(e,t,n);break e}rt(e,t,r,n)}t=t.child}return t;case 5:return b1(t),e===null&&ch(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,sh(r,i)?o=null:s!==null&&sh(r,s)&&(t.flags|=32),Q1(e,t),rt(e,t,o,n),t.child;case 6:return e===null&&ch(t),null;case 13:return J1(e,t,n);case 4:return im(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=_s(t,null,r,n):rt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xt(r,i),Zy(e,t,r,i,n);case 7:return rt(e,t,t.pendingProps,n),t.child;case 8:return rt(e,t,t.pendingProps.children,n),t.child;case 12:return rt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,de(gu,r._currentValue),r._currentValue=o,s!==null)if(cn(s.value,o)){if(s.children===i.children&&!gt.current){t=Vn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=$n(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),dh(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),dh(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}rt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ls(t,n),i=Vt(i),r=r(i),t.flags|=1,rt(e,t,r,n),t.child;case 14:return r=t.type,i=Xt(r,t.pendingProps),i=Xt(r.type,i),ev(e,t,r,i,n);case 15:return Y1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xt(r,i),Nl(e,t),t.tag=1,yt(r)?(e=!0,hu(t)):e=!1,ls(t,n),E1(t,r,i),hh(t,r,i,n),gh(null,t,r,!0,e,n);case 19:return Z1(e,t,n);case 22:return q1(e,t,n)}throw Error(k(156,t.tag))};function mx(e,t){return zw(e,t)}function zI(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(e,t,n,r){return new zI(e,t,n,r)}function _m(e){return e=e.prototype,!(!e||!e.isReactComponent)}function BI(e){if(typeof e=="function")return _m(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$p)return 11;if(e===jp)return 14}return 2}function vr(e,t){var n=e.alternate;return n===null?(n=zt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ll(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")_m(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Vi:return oi(n.children,i,s,t);case Fp:o=8,i|=8;break;case Ff:return e=zt(12,n,t,i|2),e.elementType=Ff,e.lanes=s,e;case $f:return e=zt(13,n,t,i),e.elementType=$f,e.lanes=s,e;case jf:return e=zt(19,n,t,i),e.elementType=jf,e.lanes=s,e;case Cw:return xc(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Sw:o=10;break e;case Ew:o=9;break e;case $p:o=11;break e;case jp:o=14;break e;case er:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=zt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function oi(e,t,n,r){return e=zt(7,e,r,t),e.lanes=n,e}function xc(e,t,n,r){return e=zt(22,e,r,t),e.elementType=Cw,e.lanes=n,e.stateNode={isHidden:!1},e}function Kd(e,t,n){return e=zt(6,e,null,t),e.lanes=n,e}function Yd(e,t,n){return t=zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function VI(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Id(0),this.expirationTimes=Id(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Id(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wm(e,t,n,r,i,s,o,a,l){return e=new VI(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=zt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rm(s),e}function WI(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function gx(e){if(!e)return kr;e=e._reactInternals;e:{if(Ii(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(yt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(yt(n))return m1(e,n,t)}return t}function yx(e,t,n,r,i,s,o,a,l){return e=wm(n,r,!0,e,i,s,o,a,l),e.context=gx(null),n=e.current,r=ot(),i=yr(n),s=$n(r,i),s.callback=t??null,mr(n,s,i),e.current.lanes=i,Ia(e,i,r),vt(e,r),e}function Sc(e,t,n,r){var i=t.current,s=ot(),o=yr(i);return n=gx(n),t.context===null?t.context=n:t.pendingContext=n,t=$n(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=mr(i,t,o),e!==null&&(on(e,i,o,s),Pl(e,i,o)),o}function bu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function fv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xm(e,t){fv(e,t),(e=e.alternate)&&fv(e,t)}function HI(){return null}var vx=typeof reportError=="function"?reportError:function(e){console.error(e)};function Sm(e){this._internalRoot=e}Ec.prototype.render=Sm.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Sc(e,t,null,null)};Ec.prototype.unmount=Sm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yi(function(){Sc(null,e,null,null)}),t[zn]=null}};function Ec(e){this._internalRoot=e}Ec.prototype.unstable_scheduleHydration=function(e){if(e){var t=Yw();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nr.length&&t!==0&&t<nr[n].priority;n++);nr.splice(n,0,e),n===0&&Qw(e)}};function Em(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Cc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hv(){}function GI(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=bu(o);s.call(u)}}var o=yx(t,r,e,0,null,!1,!1,"",hv);return e._reactRootContainer=o,e[zn]=o.current,Ko(e.nodeType===8?e.parentNode:e),yi(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=bu(l);a.call(u)}}var l=wm(e,0,!1,null,null,!1,!1,"",hv);return e._reactRootContainer=l,e[zn]=l.current,Ko(e.nodeType===8?e.parentNode:e),yi(function(){Sc(t,l,n,r)}),l}function Tc(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=bu(o);a.call(l)}}Sc(t,o,e,i)}else o=GI(n,t,e,i,r);return bu(o)}Gw=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ho(t.pendingLanes);n!==0&&(Bp(t,n|1),vt(t,Ee()),!(Q&6)&&(Ss=Ee()+500,Mr()))}break;case 13:yi(function(){var r=Bn(e,1);if(r!==null){var i=ot();on(r,e,1,i)}}),xm(e,1)}};Vp=function(e){if(e.tag===13){var t=Bn(e,134217728);if(t!==null){var n=ot();on(t,e,134217728,n)}xm(e,134217728)}};Kw=function(e){if(e.tag===13){var t=yr(e),n=Bn(e,t);if(n!==null){var r=ot();on(n,e,t,r)}xm(e,t)}};Yw=function(){return se};qw=function(e,t){var n=se;try{return se=e,t()}finally{se=n}};qf=function(e,t,n){switch(t){case"input":if(Bf(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=mc(r);if(!i)throw Error(k(90));bw(r),Bf(r,i)}}}break;case"textarea":Iw(e,n);break;case"select":t=n.value,t!=null&&is(e,!!n.multiple,t,!1)}};Lw=gm;Mw=yi;var KI={usingClientEntryPoint:!1,Events:[Oa,Ki,mc,Aw,Dw,gm]},ro={findFiberByHostInstance:Jr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},YI={bundleType:ro.bundleType,version:ro.version,rendererPackageName:ro.rendererPackageName,rendererConfig:ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=jw(e),e===null?null:e.stateNode},findFiberByHostInstance:ro.findFiberByHostInstance||HI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{dc=cl.inject(YI),vn=cl}catch{}}Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KI;Dt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Em(t))throw Error(k(200));return WI(e,t,null,n)};Dt.createRoot=function(e,t){if(!Em(e))throw Error(k(299));var n=!1,r="",i=vx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=wm(e,1,!1,null,null,n,!1,r,i),e[zn]=t.current,Ko(e.nodeType===8?e.parentNode:e),new Sm(t)};Dt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=jw(t),e=e===null?null:e.stateNode,e};Dt.flushSync=function(e){return yi(e)};Dt.hydrate=function(e,t,n){if(!Cc(t))throw Error(k(200));return Tc(null,e,t,!0,n)};Dt.hydrateRoot=function(e,t,n){if(!Em(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=vx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=yx(t,null,e,1,n??null,i,!1,s,o),e[zn]=t.current,Ko(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ec(t)};Dt.render=function(e,t,n){if(!Cc(t))throw Error(k(200));return Tc(null,e,t,!1,n)};Dt.unmountComponentAtNode=function(e){if(!Cc(e))throw Error(k(40));return e._reactRootContainer?(yi(function(){Tc(null,null,e,!1,function(){e._reactRootContainer=null,e[zn]=null})}),!0):!1};Dt.unstable_batchedUpdates=gm;Dt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Cc(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Tc(e,t,n,!1,r)};Dt.version="18.2.0-next-9e3b772b8-20220608";function _x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_x)}catch(e){console.error(e)}}_x(),yw.exports=Dt;var wx=yw.exports,pv=wx;Lf.createRoot=pv.createRoot,Lf.hydrateRoot=pv.hydrateRoot;var pt=function(){return pt=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},pt.apply(this,arguments)};function Cm(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function ku(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}function xx(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var qI=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,QI=xx(function(e){return qI.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),he="-ms-",Io="-moz-",te="-webkit-",Sx="comm",bc="rule",Tm="decl",XI="@import",Ex="@keyframes",JI="@layer",ZI=Math.abs,bm=String.fromCharCode,Ih=Object.assign;function eP(e,t){return Fe(e,0)^45?(((t<<2^Fe(e,0))<<2^Fe(e,1))<<2^Fe(e,2))<<2^Fe(e,3):0}function Cx(e){return e.trim()}function Rn(e,t){return(e=t.exec(e))?e[0]:e}function B(e,t,n){return e.replace(t,n)}function Ml(e,t){return e.indexOf(t)}function Fe(e,t){return e.charCodeAt(t)|0}function Es(e,t,n){return e.slice(t,n)}function pn(e){return e.length}function Tx(e){return e.length}function mo(e,t){return t.push(e),e}function tP(e,t){return e.map(t).join("")}function mv(e,t){return e.filter(function(n){return!Rn(n,t)})}var kc=1,Cs=1,bx=0,Ht=0,Te=0,Bs="";function Ic(e,t,n,r,i,s,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:kc,column:Cs,length:o,return:"",siblings:a}}function Zn(e,t){return Ih(Ic("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function $i(e){for(;e.root;)e=Zn(e.root,{children:[e]});mo(e,e.siblings)}function nP(){return Te}function rP(){return Te=Ht>0?Fe(Bs,--Ht):0,Cs--,Te===10&&(Cs=1,kc--),Te}function an(){return Te=Ht<bx?Fe(Bs,Ht++):0,Cs++,Te===10&&(Cs=1,kc++),Te}function ai(){return Fe(Bs,Ht)}function Fl(){return Ht}function Pc(e,t){return Es(Bs,e,t)}function Ph(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function iP(e){return kc=Cs=1,bx=pn(Bs=e),Ht=0,[]}function sP(e){return Bs="",e}function qd(e){return Cx(Pc(Ht-1,Oh(e===91?e+2:e===40?e+1:e)))}function oP(e){for(;(Te=ai())&&Te<33;)an();return Ph(e)>2||Ph(Te)>3?"":" "}function aP(e,t){for(;--t&&an()&&!(Te<48||Te>102||Te>57&&Te<65||Te>70&&Te<97););return Pc(e,Fl()+(t<6&&ai()==32&&an()==32))}function Oh(e){for(;an();)switch(Te){case e:return Ht;case 34:case 39:e!==34&&e!==39&&Oh(Te);break;case 40:e===41&&Oh(e);break;case 92:an();break}return Ht}function lP(e,t){for(;an()&&e+Te!==47+10;)if(e+Te===42+42&&ai()===47)break;return"/*"+Pc(t,Ht-1)+"*"+bm(e===47?e:an())}function uP(e){for(;!Ph(ai());)an();return Pc(e,Ht)}function cP(e){return sP($l("",null,null,null,[""],e=iP(e),0,[0],e))}function $l(e,t,n,r,i,s,o,a,l){for(var u=0,c=0,d=o,f=0,m=0,g=0,_=1,w=1,p=1,h=0,v="",x=i,E=s,C=r,S=v;w;)switch(g=h,h=an()){case 40:if(g!=108&&Fe(S,d-1)==58){Ml(S+=B(qd(h),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:S+=qd(h);break;case 9:case 10:case 13:case 32:S+=oP(g);break;case 92:S+=aP(Fl()-1,7);continue;case 47:switch(ai()){case 42:case 47:mo(dP(lP(an(),Fl()),t,n,l),l);break;default:S+="/"}break;case 123*_:a[u++]=pn(S)*p;case 125*_:case 59:case 0:switch(h){case 0:case 125:w=0;case 59+c:p==-1&&(S=B(S,/\f/g,"")),m>0&&pn(S)-d&&mo(m>32?yv(S+";",r,n,d-1,l):yv(B(S," ","")+";",r,n,d-2,l),l);break;case 59:S+=";";default:if(mo(C=gv(S,t,n,u,c,i,a,v,x=[],E=[],d,s),s),h===123)if(c===0)$l(S,t,C,C,x,s,d,a,E);else switch(f===99&&Fe(S,3)===110?100:f){case 100:case 108:case 109:case 115:$l(e,C,C,r&&mo(gv(e,C,C,0,0,i,a,v,i,x=[],d,E),E),i,E,d,a,r?x:E);break;default:$l(S,C,C,C,[""],E,0,a,E)}}u=c=m=0,_=p=1,v=S="",d=o;break;case 58:d=1+pn(S),m=g;default:if(_<1){if(h==123)--_;else if(h==125&&_++==0&&rP()==125)continue}switch(S+=bm(h),h*_){case 38:p=c>0?1:(S+="\f",-1);break;case 44:a[u++]=(pn(S)-1)*p,p=1;break;case 64:ai()===45&&(S+=qd(an())),f=ai(),c=d=pn(v=S+=uP(Fl())),h++;break;case 45:g===45&&pn(S)==2&&(_=0)}}return s}function gv(e,t,n,r,i,s,o,a,l,u,c,d){for(var f=i-1,m=i===0?s:[""],g=Tx(m),_=0,w=0,p=0;_<r;++_)for(var h=0,v=Es(e,f+1,f=ZI(w=o[_])),x=e;h<g;++h)(x=Cx(w>0?m[h]+" "+v:B(v,/&\f/g,m[h])))&&(l[p++]=x);return Ic(e,t,n,i===0?bc:a,l,u,c,d)}function dP(e,t,n,r){return Ic(e,t,n,Sx,bm(nP()),Es(e,2,-2),0,r)}function yv(e,t,n,r,i){return Ic(e,t,n,Tm,Es(e,0,r),Es(e,r+1,-1),r,i)}function kx(e,t,n){switch(eP(e,t)){case 5103:return te+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return te+e+e;case 4789:return Io+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return te+e+Io+e+he+e+e;case 5936:switch(Fe(e,t+11)){case 114:return te+e+he+B(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return te+e+he+B(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return te+e+he+B(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return te+e+he+e+e;case 6165:return te+e+he+"flex-"+e+e;case 5187:return te+e+B(e,/(\w+).+(:[^]+)/,te+"box-$1$2"+he+"flex-$1$2")+e;case 5443:return te+e+he+"flex-item-"+B(e,/flex-|-self/g,"")+(Rn(e,/flex-|baseline/)?"":he+"grid-row-"+B(e,/flex-|-self/g,""))+e;case 4675:return te+e+he+"flex-line-pack"+B(e,/align-content|flex-|-self/g,"")+e;case 5548:return te+e+he+B(e,"shrink","negative")+e;case 5292:return te+e+he+B(e,"basis","preferred-size")+e;case 6060:return te+"box-"+B(e,"-grow","")+te+e+he+B(e,"grow","positive")+e;case 4554:return te+B(e,/([^-])(transform)/g,"$1"+te+"$2")+e;case 6187:return B(B(B(e,/(zoom-|grab)/,te+"$1"),/(image-set)/,te+"$1"),e,"")+e;case 5495:case 3959:return B(e,/(image-set\([^]*)/,te+"$1$`$1");case 4968:return B(B(e,/(.+:)(flex-)?(.*)/,te+"box-pack:$3"+he+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+te+e+e;case 4200:if(!Rn(e,/flex-|baseline/))return he+"grid-column-align"+Es(e,t)+e;break;case 2592:case 3360:return he+B(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Rn(r.props,/grid-\w+-end/)})?~Ml(e+(n=n[t].value),"span")?e:he+B(e,"-start","")+e+he+"grid-row-span:"+(~Ml(n,"span")?Rn(n,/\d+/):+Rn(n,/\d+/)-+Rn(e,/\d+/))+";":he+B(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Rn(r.props,/grid-\w+-start/)})?e:he+B(B(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return B(e,/(.+)-inline(.+)/,te+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(pn(e)-1-t>6)switch(Fe(e,t+1)){case 109:if(Fe(e,t+4)!==45)break;case 102:return B(e,/(.+:)(.+)-([^]+)/,"$1"+te+"$2-$3$1"+Io+(Fe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ml(e,"stretch")?kx(B(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return B(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return he+i+":"+s+u+(o?he+i+"-span:"+(a?l:+l-+s)+u:"")+e});case 4949:if(Fe(e,t+6)===121)return B(e,":",":"+te)+e;break;case 6444:switch(Fe(e,Fe(e,14)===45?18:11)){case 120:return B(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+te+(Fe(e,14)===45?"inline-":"")+"box$3$1"+te+"$2$3$1"+he+"$2box$3")+e;case 100:return B(e,":",":"+he)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return B(e,"scroll-","scroll-snap-")+e}return e}function Iu(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function fP(e,t,n,r){switch(e.type){case JI:if(e.children.length)break;case XI:case Tm:return e.return=e.return||e.value;case Sx:return"";case Ex:return e.return=e.value+"{"+Iu(e.children,r)+"}";case bc:if(!pn(e.value=e.props.join(",")))return""}return pn(n=Iu(e.children,r))?e.return=e.value+"{"+n+"}":""}function hP(e){var t=Tx(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}function pP(e){return function(t){t.root||(t=t.return)&&e(t)}}function mP(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Tm:e.return=kx(e.value,e.length,n);return;case Ex:return Iu([Zn(e,{value:B(e.value,"@","@"+te)})],r);case bc:if(e.length)return tP(n=e.props,function(i){switch(Rn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":$i(Zn(e,{props:[B(i,/:(read-\w+)/,":"+Io+"$1")]})),$i(Zn(e,{props:[i]})),Ih(e,{props:mv(n,r)});break;case"::placeholder":$i(Zn(e,{props:[B(i,/:(plac\w+)/,":"+te+"input-$1")]})),$i(Zn(e,{props:[B(i,/:(plac\w+)/,":"+Io+"$1")]})),$i(Zn(e,{props:[B(i,/:(plac\w+)/,he+"input-$1")]})),$i(Zn(e,{props:[i]})),Ih(e,{props:mv(n,r)});break}return""})}}var Ix={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ts=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",km=typeof window<"u"&&"HTMLElement"in window,gP=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Oc=Object.freeze([]),bs=Object.freeze({});function yP(e,t,n){return n===void 0&&(n=bs),e.theme!==n.theme&&e.theme||t||n.theme}var Px=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),vP=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,_P=/(^-|-$)/g;function vv(e){return e.replace(vP,"-").replace(_P,"")}var wP=/(a)(d)/gi,_v=function(e){return String.fromCharCode(e+(e>25?39:97))};function Rh(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=_v(t%52)+n;return(_v(t%52)+n).replace(wP,"$1-$2")}var Qd,es=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Ox=function(e){return es(5381,e)};function xP(e){return Rh(Ox(e)>>>0)}function SP(e){return e.displayName||e.name||"Component"}function Xd(e){return typeof e=="string"&&!0}var Rx=typeof Symbol=="function"&&Symbol.for,Nx=Rx?Symbol.for("react.memo"):60115,EP=Rx?Symbol.for("react.forward_ref"):60112,CP={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},TP={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ax={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},bP=((Qd={})[EP]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Qd[Nx]=Ax,Qd);function wv(e){return("type"in(t=e)&&t.type.$$typeof)===Nx?Ax:"$$typeof"in e?bP[e.$$typeof]:CP;var t}var kP=Object.defineProperty,IP=Object.getOwnPropertyNames,xv=Object.getOwnPropertySymbols,PP=Object.getOwnPropertyDescriptor,OP=Object.getPrototypeOf,Sv=Object.prototype;function Dx(e,t,n){if(typeof t!="string"){if(Sv){var r=OP(t);r&&r!==Sv&&Dx(e,r,n)}var i=IP(t);xv&&(i=i.concat(xv(t)));for(var s=wv(e),o=wv(t),a=0;a<i.length;++a){var l=i[a];if(!(l in TP||n&&n[l]||o&&l in o||s&&l in s)){var u=PP(t,l);try{kP(e,l,u)}catch{}}}}return e}function ks(e){return typeof e=="function"}function Im(e){return typeof e=="object"&&"styledComponentId"in e}function ti(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ev(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function na(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Nh(e,t,n){if(n===void 0&&(n=!1),!n&&!na(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Nh(e[r],t[r]);else if(na(t))for(var r in t)e[r]=Nh(e[r],t[r]);return e}function Pm(e,t){Object.defineProperty(e,"toString",{value:t})}function Na(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var RP=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;t>=s;)if((s<<=1)<0)throw Na(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},e}(),jl=new Map,Pu=new Map,Jd=1,dl=function(e){if(jl.has(e))return jl.get(e);for(;Pu.has(Jd);)Jd++;var t=Jd++;return jl.set(e,t),Pu.set(t,e),t},NP=function(e,t){jl.set(e,t),Pu.set(t,e)},AP="style[".concat(Ts,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),DP=new RegExp("^".concat(Ts,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),LP=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},MP=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(DP);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(NP(c,u),LP(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function FP(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Lx=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Ts,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ts,"active"),r.setAttribute("data-styled-version","6.0.7");var o=FP();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},$P=function(){function e(t){this.element=Lx(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Na(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),jP=function(){function e(t){this.element=Lx(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),UP=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Cv=km,zP={isServer:!km,useCSSOMInjection:!gP},Mx=function(){function e(t,n,r){t===void 0&&(t=bs),n===void 0&&(n={});var i=this;this.options=pt(pt({},zP),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&km&&Cv&&(Cv=!1,function(s){for(var o=document.querySelectorAll(AP),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Ts)!=="active"&&(MP(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Pm(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(d){var f=function(p){return Pu.get(p)}(d);if(f===void 0)return"continue";var m=s.names.get(f),g=o.getGroup(d);if(m===void 0||g.length===0)return"continue";var _="".concat(Ts,".g").concat(d,'[id="').concat(f,'"]'),w="";m!==void 0&&m.forEach(function(p){p.length>0&&(w+="".concat(p,","))}),l+="".concat(g).concat(_,'{content:"').concat(w,'"}').concat(`/*!sc*/
`)},c=0;c<a;c++)u(c);return l}(i)})}return e.registerId=function(t){return dl(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(pt(pt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new UP(i):r?new $P(i):new jP(i)}(this.options),new RP(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(dl(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(dl(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(dl(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),BP=/&/g,VP=/^\s*\/\/.*$/gm;function Fx(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Fx(n.children,t)),n})}function WP(e){var t,n,r,i=e===void 0?bs:e,s=i.options,o=s===void 0?bs:s,a=i.plugins,l=a===void 0?Oc:a,u=function(f,m,g){return g===n||g.startsWith(n)&&g.endsWith(n)&&g.replaceAll(n,"").length>0?".".concat(t):f},c=l.slice();c.push(function(f){f.type===bc&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(BP,n).replace(r,u))}),o.prefix&&c.push(mP),c.push(fP);var d=function(f,m,g,_){m===void 0&&(m=""),g===void 0&&(g=""),_===void 0&&(_="&"),t=_,n=m,r=new RegExp("\\".concat(n,"\\b"),"g");var w=f.replace(VP,""),p=cP(g||m?"".concat(g," ").concat(m," { ").concat(w," }"):w);o.namespace&&(p=Fx(p,o.namespace));var h=[];return Iu(p,hP(c.concat(pP(function(v){return h.push(v)})))),h};return d.hash=l.length?l.reduce(function(f,m){return m.name||Na(15),es(f,m.name)},5381).toString():"",d}var HP=new Mx,Ah=WP(),$x=st.createContext({shouldForwardProp:void 0,styleSheet:HP,stylis:Ah});$x.Consumer;st.createContext(void 0);function Tv(){return T.useContext($x)}var GP=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Ah);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Pm(this,function(){throw Na(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ah),this.name+t.hash},e}(),KP=function(e){return e>="A"&&e<="Z"};function bv(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;KP(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var jx=function(e){return e==null||e===!1||e===""},Ux=function(e){var t,n,r=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!jx(s)&&(Array.isArray(s)&&s.isCss||ks(s)?r.push("".concat(bv(i),":"),s,";"):na(s)?r.push.apply(r,ku(ku(["".concat(i," {")],Ux(s),!1),["}"],!1)):r.push("".concat(bv(i),": ").concat((t=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Ix||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function li(e,t,n,r){if(jx(e))return[];if(Im(e))return[".".concat(e.styledComponentId)];if(ks(e)){if(!ks(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return li(i,t,n,r)}var s;return e instanceof GP?n?(e.inject(n,r),[e.getName(r)]):[e]:na(e)?Ux(e):Array.isArray(e)?Array.prototype.concat.apply(Oc,e.map(function(o){return li(o,t,n,r)})):[e.toString()]}function YP(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ks(n)&&!Im(n))return!1}return!0}var qP=Ox("6.0.7"),QP=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&YP(t),this.componentId=n,this.baseHash=es(qP,n),this.baseStyle=r,Mx.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ti(i,this.staticRulesId);else{var s=Ev(li(this.rules,t,n,r)),o=Rh(es(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=ti(i,o),this.staticRulesId=o}else{for(var l=es(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var f=Ev(li(d,t,n,r));l=es(l,f),u+=f}}if(u){var m=Rh(l>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,r(u,".".concat(m),void 0,this.componentId)),i=ti(i,m)}}return i},e}(),zx=st.createContext(void 0);zx.Consumer;var Zd={};function XP(e,t,n){var r=Im(e),i=e,s=!Xd(e),o=t.attrs,a=o===void 0?Oc:o,l=t.componentId,u=l===void 0?function(v,x){var E=typeof v!="string"?"sc":vv(v);Zd[E]=(Zd[E]||0)+1;var C="".concat(E,"-").concat(xP("6.0.7"+E+Zd[E]));return x?"".concat(x,"-").concat(C):C}(t.displayName,t.parentComponentId):l,c=t.displayName;c===void 0&&function(v){return Xd(v)?"styled.".concat(v):"Styled(".concat(SP(v),")")}(e);var d=t.displayName&&t.componentId?"".concat(vv(t.displayName),"-").concat(t.componentId):t.componentId||u,f=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,m=t.shouldForwardProp;if(r&&i.shouldForwardProp){var g=i.shouldForwardProp;if(t.shouldForwardProp){var _=t.shouldForwardProp;m=function(v,x){return g(v,x)&&_(v,x)}}else m=g}var w=new QP(n,d,r?i.componentStyle:void 0);function p(v,x){return function(E,C,S){var P=E.attrs,F=E.componentStyle,L=E.defaultProps,V=E.foldedComponentIds,ut=E.styledComponentId,Y=E.target,Ie=st.useContext(zx),Tn=Tv(),bn=E.shouldForwardProp||Tn.shouldForwardProp,ct=function(Ft,ze,nt){for(var Ye,qe=pt(pt({},ze),{className:void 0,theme:nt}),Mi=0;Mi<Ft.length;Mi+=1){var Br=ks(Ye=Ft[Mi])?Ye(qe):Ye;for(var Kt in Br)qe[Kt]=Kt==="className"?ti(qe[Kt],Br[Kt]):Kt==="style"?pt(pt({},qe[Kt]),Br[Kt]):Br[Kt]}return ze.className&&(qe.className=ti(qe.className,ze.className)),qe}(P,C,yP(C,Ie,L)||bs),O=ct.as||Y,j={};for(var U in ct)ct[U]===void 0||U[0]==="$"||U==="as"||U==="theme"||(U==="forwardedAs"?j.as=ct.forwardedAs:bn&&!bn(U,O)||(j[U]=ct[U]));var ne=function(Ft,ze){var nt=Tv(),Ye=Ft.generateAndInjectStyles(ze,nt.styleSheet,nt.stylis);return Ye}(F,ct),re=ti(V,ut);return ne&&(re+=" "+ne),ct.className&&(re+=" "+ct.className),j[Xd(O)&&!Px.has(O)?"class":"className"]=re,j.ref=S,T.createElement(O,j)}(h,v,x)}var h=st.forwardRef(p);return h.attrs=f,h.componentStyle=w,h.shouldForwardProp=m,h.foldedComponentIds=r?ti(i.foldedComponentIds,i.styledComponentId):"",h.styledComponentId=d,h.target=r?i.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(x){for(var E=[],C=1;C<arguments.length;C++)E[C-1]=arguments[C];for(var S=0,P=E;S<P.length;S++)Nh(x,P[S],!0);return x}({},i.defaultProps,v):v}}),Pm(h,function(){return".".concat(h.styledComponentId)}),s&&Dx(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function kv(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Iv=function(e){return Object.assign(e,{isCss:!0})};function JP(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ks(e)||na(e)){var r=e;return Iv(li(kv(Oc,ku([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?li(i):Iv(li(kv(i,t)))}function Dh(e,t,n){if(n===void 0&&(n=bs),!t)throw Na(1,t);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return e(t,n,JP.apply(void 0,ku([i],s,!1)))};return r.attrs=function(i){return Dh(e,t,pt(pt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Dh(e,t,pt(pt({},n),i))},r}var Bx=function(e){return Dh(XP,e)},M=Bx;Px.forEach(function(e){M[e]=Bx(e)});const ZP=M.header`
  padding: 20px 0px;
`,eO=M.div`
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
`,tO=M.div`
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
`,Pv=M.svg`
  width: 28px;
  height: 28px;
`,Ov=M(ka)`
  display: flex;
  gap: 0px 8px;
  align-items: center;
`,Rv=M.span`
  color: #121417;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 120% */
  letter-spacing: -0.4px;
`,nO=M.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`,rO=M(ka)`
  display: flex;
  align-items: center;
  gap: 0px 8px;

  color: var(--secondary);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25;
`,iO=M.button`
  color: var(--background);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25;

  padding: 14px 39px;
  border-radius: 12px;
  background: var(--secondary);
  border: none;
`,Vx=M.svg`
  stroke: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  width: 20px;
  height: 20px;
`,sO=M.div`
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
`;function Po({children:e,onClose:t}){T.useEffect(()=>window.addEventListener("keydown",n),[]),T.useLayoutEffect(()=>()=>{window.removeEventListener("keydown",n)},[]);const n=i=>{i.code==="Escape"&&t(!1)},r=i=>{i.currentTarget===i.target&&t(!1)};return wx.createPortal(y.jsx(sO,{onClick:r,children:e}),document.getElementById("modal-root"))}function Pi(e){this._maxSize=e,this.clear()}Pi.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Pi.prototype.get=function(e){return this._values[e]};Pi.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var oO=/[^.^\]^[]+|(?=\[\]|\.\.)/g,Wx=/^\d+$/,aO=/^\d/,lO=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,uO=/^\s*(['"]?)(.*?)(\1)\s*$/,Om=512,Nv=new Pi(Om),Av=new Pi(Om),Dv=new Pi(Om),ui={Cache:Pi,split:Lh,normalizePath:ef,setter:function(e){var t=ef(e);return Av.get(e)||Av.set(e,function(r,i){for(var s=0,o=t.length,a=r;s<o-1;){var l=t[s];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;a=a[t[s++]]}a[t[s]]=i})},getter:function(e,t){var n=ef(e);return Dv.get(e)||Dv.set(e,function(i){for(var s=0,o=n.length;s<o;)if(i!=null||!t)i=i[n[s++]];else return;return i})},join:function(e){return e.reduce(function(t,n){return t+(Rm(n)||Wx.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){cO(Array.isArray(e)?e:Lh(e),t,n)}};function ef(e){return Nv.get(e)||Nv.set(e,Lh(e).map(function(t){return t.replace(uO,"$2")}))}function Lh(e){return e.match(oO)||[""]}function cO(e,t,n){var r=e.length,i,s,o,a;for(s=0;s<r;s++)i=e[s],i&&(hO(i)&&(i='"'+i+'"'),a=Rm(i),o=!a&&/^\d+$/.test(i),t.call(n,i,a,o,s,e))}function Rm(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function dO(e){return e.match(aO)&&!e.match(Wx)}function fO(e){return lO.test(e)}function hO(e){return!Rm(e)&&(dO(e)||fO(e))}const pO=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Rc=e=>e.match(pO)||[],Nc=e=>e[0].toUpperCase()+e.slice(1),Nm=(e,t)=>Rc(e).join(t).toLowerCase(),Hx=e=>Rc(e).reduce((t,n)=>`${t}${t?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),mO=e=>Nc(Hx(e)),gO=e=>Nm(e,"_"),yO=e=>Nm(e,"-"),vO=e=>Nc(Nm(e," ")),_O=e=>Rc(e).map(Nc).join(" ");var tf={words:Rc,upperFirst:Nc,camelCase:Hx,pascalCase:mO,snakeCase:gO,kebabCase:yO,sentenceCase:vO,titleCase:_O},Am={exports:{}};Am.exports=function(e){return Gx(wO(e),e)};Am.exports.array=Gx;function Gx(e,t){var n=e.length,r=new Array(n),i={},s=n,o=xO(t),a=SO(e);for(t.forEach(function(u){if(!a.has(u[0])||!a.has(u[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});s--;)i[s]||l(e[s],s,new Set);return r;function l(u,c,d){if(d.has(u)){var f;try{f=", node was:"+JSON.stringify(u)}catch{f=""}throw new Error("Cyclic dependency"+f)}if(!a.has(u))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(u));if(!i[c]){i[c]=!0;var m=o.get(u)||new Set;if(m=Array.from(m),c=m.length){d.add(u);do{var g=m[--c];l(g,a.get(g),d)}while(c);d.delete(u)}r[--n]=u}}}function wO(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var i=e[n];t.add(i[0]),t.add(i[1])}return Array.from(t)}function xO(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var i=e[n];t.has(i[0])||t.set(i[0],new Set),t.has(i[1])||t.set(i[1],new Set),t.get(i[0]).add(i[1])}return t}function SO(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}var EO=Am.exports;const CO=Cp(EO),TO=Object.prototype.toString,bO=Error.prototype.toString,kO=RegExp.prototype.toString,IO=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",PO=/^Symbol\((.*)\)(.*)$/;function OO(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function Lv(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return OO(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return IO.call(e).replace(PO,"Symbol($1)");const r=TO.call(e).slice(8,-1);return r==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):r==="Error"||e instanceof Error?"["+bO.call(e)+"]":r==="RegExp"?kO.call(e):null}function _r(e,t){let n=Lv(e,t);return n!==null?n:JSON.stringify(e,function(r,i){let s=Lv(this[r],t);return s!==null?s:i},2)}function Kx(e){return e==null?[]:[].concat(e)}let Yx,RO=/\$\{\s*(\w+)\s*\}/g;Yx=Symbol.toStringTag;class ft extends Error{static formatError(t,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof t=="string"?t.replace(RO,(i,s)=>_r(n[s])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,r,i,s){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this[Yx]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],Kx(t).forEach(o=>{if(ft.isError(o)){this.errors.push(...o.errors);const a=o.inner.length?o.inner:[o];this.inner.push(...a)}else this.errors.push(o)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],!s&&Error.captureStackTrace&&Error.captureStackTrace(this,ft)}}let hn={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${_r(r,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${_r(n,!0)}\``+i:`${e} must match the configured type. The validated value was: \`${_r(n,!0)}\``+i}},qt={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},NO={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},Mh={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},AO={isValue:"${path} field must be ${value}"},Fh={noUnknown:"${path} field has unspecified keys: ${unknown}"},DO={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},LO={notType:e=>{const{path:t,value:n,spec:r}=e,i=r.types.length;if(Array.isArray(n)){if(n.length<i)return`${t} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${_r(n,!0)}\``;if(n.length>i)return`${t} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${_r(n,!0)}\``}return ft.formatError(hn.notType,e)}};Object.assign(Object.create(null),{mixed:hn,string:qt,number:NO,date:Mh,object:Fh,array:DO,boolean:AO,tuple:LO});const Dm=e=>e&&e.__isYupSchema__;class Ou{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:s}=n,o=typeof r=="function"?r:(...a)=>a.every(l=>l===r);return new Ou(t,(a,l)=>{var u;let c=o(...a)?i:s;return(u=c==null?void 0:c(l))!=null?u:l})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let r=this.refs.map(s=>s.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,t,n);if(i===void 0||i===t)return t;if(!Dm(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const fl={context:"$",value:"."};class Oi{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===fl.context,this.isValue=this.key[0]===fl.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?fl.context:this.isValue?fl.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&ui.getter(this.path,!0),this.map=n.map}getValue(t,n,r){let i=this.isContext?r:this.isValue?t:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}Oi.prototype.__isYupRef=!0;const ni=e=>e==null;function ji(e){function t({value:n,path:r="",options:i,originalValue:s,schema:o},a,l){const{name:u,test:c,params:d,message:f,skipAbsent:m}=e;let{parent:g,context:_,abortEarly:w=o.spec.abortEarly,disableStackTrace:p=o.spec.disableStackTrace}=i;function h(V){return Oi.isRef(V)?V.getValue(n,g,_):V}function v(V={}){var ut;const Y=Object.assign({value:n,originalValue:s,label:o.spec.label,path:V.path||r,spec:o.spec},d,V.params);for(const Tn of Object.keys(Y))Y[Tn]=h(Y[Tn]);const Ie=new ft(ft.formatError(V.message||f,Y),n,Y.path,V.type||u,(ut=V.disableStackTrace)!=null?ut:p);return Ie.params=Y,Ie}const x=w?a:l;let E={path:r,parent:g,type:u,from:i.from,createError:v,resolve:h,options:i,originalValue:s,schema:o};const C=V=>{ft.isError(V)?x(V):V?l(null):x(v())},S=V=>{ft.isError(V)?x(V):a(V)};if(m&&ni(n))return C(!0);let F;try{var L;if(F=c.call(E,n,E),typeof((L=F)==null?void 0:L.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${E.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(F).then(C,S)}}catch(V){S(V);return}C(F)}return t.OPTIONS=e,t}function MO(e,t,n,r=n){let i,s,o;return t?(ui.forEach(t,(a,l,u)=>{let c=l?a.slice(1,a.length-1):a;e=e.resolve({context:r,parent:i,value:n});let d=e.type==="tuple",f=u?parseInt(c,10):0;if(e.innerType||d){if(d&&!u)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);if(n&&f>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${t}. because there is no value at that index. `);i=n,n=n&&n[f],e=d?e.spec.types[f]:e.innerType}if(!u){if(!e.fields||!e.fields[c])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${o} which is a type: "${e.type}")`);i=n,n=n&&n[c],e=e.fields[c]}s=c,o=l?"["+a+"]":"."+a}),{schema:e,parent:i,parentPath:s}):{parent:i,parentPath:t,schema:e}}class Ru extends Set{describe(){const t=[];for(const n of this.values())t.push(Oi.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const r of this.values())n.push(t(r));return n}clone(){return new Ru(this.values())}merge(t,n){const r=this.clone();return t.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function ts(e,t=new Map){if(Dm(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=ts(e[r],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[r,i]of e.entries())n.set(r,ts(i,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const r of e)n.add(ts(r,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[r,i]of Object.entries(e))n[r]=ts(i,t)}else throw Error(`Unable to clone ${e}`);return n}class Sn{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new Ru,this._blacklist=new Ru,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(hn.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=ts(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let r=t(this);return this._mutate=n,r}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,r=t.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),r._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(s=>{t.tests.forEach(o=>{s.test(o.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,s)=>s.resolve(i,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,r,i,s;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(r=t.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=t.recursive)!=null?i:this.spec.recursive,disableStackTrace:(s=t.disableStackTrace)!=null?s:this.spec.disableStackTrace})}cast(t,n={}){let r=this.resolve(Object.assign({value:t},n)),i=n.assert==="ignore-optionality",s=r._cast(t,n);if(n.assert!==!1&&!r.isType(s)){if(i&&ni(s))return s;let o=_r(t),a=_r(s);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${o} 
`+(a!==o?`result of cast: ${a}`:""))}return s}_cast(t,n){let r=t===void 0?t:this.transforms.reduce((i,s)=>s.call(this,i,t,this),t);return r===void 0&&(r=this.getDefault(n)),r}_validate(t,n={},r,i){let{path:s,originalValue:o=t,strict:a=this.spec.strict}=n,l=t;a||(l=this._cast(l,Object.assign({assert:!1},n)));let u=[];for(let c of Object.values(this.internalTests))c&&u.push(c);this.runTests({path:s,value:l,originalValue:o,options:n,tests:u},r,c=>{if(c.length)return i(c,l);this.runTests({path:s,value:l,originalValue:o,options:n,tests:this.tests},r,i)})}runTests(t,n,r){let i=!1,{tests:s,value:o,originalValue:a,path:l,options:u}=t,c=_=>{i||(i=!0,n(_,o))},d=_=>{i||(i=!0,r(_,o))},f=s.length,m=[];if(!f)return d([]);let g={value:o,originalValue:a,path:l,options:u,schema:this};for(let _=0;_<s.length;_++){const w=s[_];w(g,c,function(h){h&&(Array.isArray(h)?m.push(...h):m.push(h)),--f<=0&&d(m)})}}asNestedTest({key:t,index:n,parent:r,parentPath:i,originalParent:s,options:o}){const a=t??n;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof a=="number";let u=r[a];const c=Object.assign({},o,{strict:!0,parent:r,value:u,originalValue:s[a],key:void 0,[l?"index":"key"]:a,path:l||a.includes(".")?`${i||""}[${u?a:`"${a}"`}]`:(i?`${i}.`:"")+t});return(d,f,m)=>this.resolve(c)._validate(u,c,f,m)}validate(t,n){var r;let i=this.resolve(Object.assign({},n,{value:t})),s=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return new Promise((o,a)=>i._validate(t,n,(l,u)=>{ft.isError(l)&&(l.value=u),a(l)},(l,u)=>{l.length?a(new ft(l,u,void 0,void 0,s)):o(u)}))}validateSync(t,n){var r;let i=this.resolve(Object.assign({},n,{value:t})),s,o=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return i._validate(t,Object.assign({},n,{sync:!0}),(a,l)=>{throw ft.isError(a)&&(a.value=l),a},(a,l)=>{if(a.length)throw new ft(a,t,void 0,void 0,o);s=l}),s}isValid(t,n){return this.validate(t,n).then(()=>!0,r=>{if(ft.isError(r))return!1;throw r})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(r){if(ft.isError(r))return!1;throw r}}_getDefault(t){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,t):ts(n)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const r=this.clone({nullable:t});return r.internalTests.nullable=ji({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(t,n){const r=this.clone({optional:t});return r.internalTests.optionality=ji({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(t=hn.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=hn.notNull){return this.nullability(!1,t)}required(t=hn.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=hn.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=ji(n),s=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(o=>!(o.OPTIONS.name===n.name&&(s||o.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let r=this.clone(),i=Kx(t).map(s=>new Oi(s));return i.forEach(s=>{s.isSibling&&r.deps.push(s.key)}),r.conditions.push(typeof n=="function"?new Ou(i,n):Ou.fromOptions(i,n)),r}typeError(t){let n=this.clone();return n.internalTests.typeError=ji({message:t,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(t,n=hn.oneOf){let r=this.clone();return t.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=ji({message:n,name:"oneOf",skipAbsent:!0,test(i){let s=this.schema._whitelist,o=s.resolveAll(this.resolve);return o.includes(i)?!0:this.createError({params:{values:Array.from(s).join(", "),resolved:o}})}}),r}notOneOf(t,n=hn.notOneOf){let r=this.clone();return t.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=ji({message:n,name:"notOneOf",test(i){let s=this.schema._blacklist,o=s.resolveAll(this.resolve);return o.includes(i)?this.createError({params:{values:Array.from(s).join(", "),resolved:o}}):!0}}),r}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:r,meta:i,optional:s,nullable:o}=n.spec;return{meta:i,label:r,optional:s,nullable:o,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,u,c)=>c.findIndex(d=>d.name===l.name)===u)}}}Sn.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])Sn.prototype[`${e}At`]=function(t,n,r={}){const{parent:i,parentPath:s,schema:o}=MO(this,t,n,r.context);return o[e](i&&i[s],Object.assign({},r,{parent:i,path:t}))};for(const e of["equals","is"])Sn.prototype[e]=Sn.prototype.oneOf;for(const e of["not","nope"])Sn.prototype[e]=Sn.prototype.notOneOf;let FO=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,$O=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,jO=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,UO=e=>ni(e)||e===e.trim(),zO={}.toString();function cs(){return new qx}class qx extends Sn{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(!r.spec.coerce||r.isType(t)||Array.isArray(t))return t;const i=t!=null&&t.toString?t.toString():t;return i===zO?t:i})})}required(t){return super.required(t).withMutation(n=>n.test({message:t||hn.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(n=>n.OPTIONS.name!=="required"),t))}length(t,n=qt.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(r){return r.length===this.resolve(t)}})}min(t,n=qt.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r.length>=this.resolve(t)}})}max(t,n=qt.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:t},skipAbsent:!0,test(r){return r.length<=this.resolve(t)}})}matches(t,n){let r=!1,i,s;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:s}=n:i=n),this.test({name:s||"matches",message:i||qt.matches,params:{regex:t},skipAbsent:!0,test:o=>o===""&&r||o.search(t)!==-1})}email(t=qt.email){return this.matches(FO,{name:"email",message:t,excludeEmptyString:!0})}url(t=qt.url){return this.matches($O,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=qt.uuid){return this.matches(jO,{name:"uuid",message:t,excludeEmptyString:!1})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=qt.trim){return this.transform(n=>n!=null?n.trim():n).test({message:t,name:"trim",test:UO})}lowercase(t=qt.lowercase){return this.transform(n=>ni(n)?n:n.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>ni(n)||n===n.toLowerCase()})}uppercase(t=qt.uppercase){return this.transform(n=>ni(n)?n:n.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>ni(n)||n===n.toUpperCase()})}}cs.prototype=qx.prototype;const BO=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function In(e,t=0){return Number(e)||t}function VO(e){const t=BO.exec(e);if(!t)return Date.parse?Date.parse(e):Number.NaN;const n={year:In(t[1]),month:In(t[2],1)-1,day:In(t[3],1),hour:In(t[4]),minute:In(t[5]),second:In(t[6]),millisecond:t[7]?In(t[7].substring(0,3)):0,z:t[8]||void 0,plusMinus:t[9]||void 0,hourOffset:In(t[10]),minuteOffset:In(t[11])};if(n.z===void 0&&n.plusMinus===void 0)return new Date(n.year,n.month,n.day,n.hour,n.minute,n.second,n.millisecond).valueOf();let r=0;return n.z!=="Z"&&n.plusMinus!==void 0&&(r=n.hourOffset*60+n.minuteOffset,n.plusMinus==="+"&&(r=0-r)),Date.UTC(n.year,n.month,n.day,n.hour,n.minute+r,n.second,n.millisecond)}let WO=new Date(""),HO=e=>Object.prototype.toString.call(e)==="[object Date]";class Ac extends Sn{constructor(){super({type:"date",check(t){return HO(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n,r)=>!r.spec.coerce||r.isType(t)||t===null?t:(t=VO(t),isNaN(t)?Ac.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let r;if(Oi.isRef(t))r=t;else{let i=this.cast(t);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(t,n=Mh.min){let r=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(t,n=Mh.max){let r=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}Ac.INVALID_DATE=WO;Ac.prototype;function GO(e,t=[]){let n=[],r=new Set,i=new Set(t.map(([o,a])=>`${o}-${a}`));function s(o,a){let l=ui.split(o)[0];r.add(l),i.has(`${a}-${l}`)||n.push([a,l])}for(const o of Object.keys(e)){let a=e[o];r.add(o),Oi.isRef(a)&&a.isSibling?s(a.path,o):Dm(a)&&"deps"in a&&a.deps.forEach(l=>s(l,o))}return CO.array(Array.from(r),n).reverse()}function Mv(e,t){let n=1/0;return e.some((r,i)=>{var s;if((s=t.path)!=null&&s.includes(r))return n=i,!0}),n}function Qx(e){return(t,n)=>Mv(e,t)-Mv(e,n)}const KO=(e,t,n)=>{if(typeof e!="string")return e;let r=e;try{r=JSON.parse(e)}catch{}return n.isType(r)?r:e};function Ul(e){if("fields"in e){const t={};for(const[n,r]of Object.entries(e.fields))t[n]=Ul(r);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=Ul(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(Ul)}):"optional"in e?e.optional():e}const YO=(e,t)=>{const n=[...ui.normalizePath(t)];if(n.length===1)return n[0]in e;let r=n.pop(),i=ui.getter(ui.join(n),!0)(e);return!!(i&&r in i)};let Fv=e=>Object.prototype.toString.call(e)==="[object Object]";function qO(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter(r=>n.indexOf(r)===-1)}const QO=Qx([]);function Lm(e){return new Xx(e)}class Xx extends Sn{constructor(t){super({type:"object",check(n){return Fv(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=QO,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,n={}){var r;let i=super._cast(t,n);if(i===void 0)return this.getDefault(n);if(!this._typeCheck(i))return i;let s=this.fields,o=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(i).filter(d=>!this._nodes.includes(d))),l={},u=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),c=!1;for(const d of a){let f=s[d],m=d in i;if(f){let g,_=i[d];u.path=(n.path?`${n.path}.`:"")+d,f=f.resolve({value:_,context:n.context,parent:l});let w=f instanceof Sn?f.spec:void 0,p=w==null?void 0:w.strict;if(w!=null&&w.strip){c=c||d in i;continue}g=!n.__validating||!p?f.cast(i[d],u):i[d],g!==void 0&&(l[d]=g)}else m&&!o&&(l[d]=i[d]);(m!==d in l||l[d]!==i[d])&&(c=!0)}return c?l:i}_validate(t,n={},r,i){let{from:s=[],originalValue:o=t,recursive:a=this.spec.recursive}=n;n.from=[{schema:this,value:o},...s],n.__validating=!0,n.originalValue=o,super._validate(t,n,r,(l,u)=>{if(!a||!Fv(u)){i(l,u);return}o=o||u;let c=[];for(let d of this._nodes){let f=this.fields[d];!f||Oi.isRef(f)||c.push(f.asNestedTest({options:n,key:d,parent:u,parentPath:n.path,originalParent:o}))}this.runTests({tests:c,value:u,originalValue:o,options:n},r,d=>{i(d.sort(this._sortErrors).concat(l),u)})})}clone(t){const n=super.clone(t);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(t){let n=super.concat(t),r=n.fields;for(let[i,s]of Object.entries(this.fields)){const o=r[i];r[i]=o===void 0?s:o}return n.withMutation(i=>i.setFields(r,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var i;const s=this.fields[r];let o=t;(i=o)!=null&&i.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[r]})),n[r]=s&&"getDefault"in s?s.getDefault(o):void 0}),n}setFields(t,n){let r=this.clone();return r.fields=t,r._nodes=GO(t,n),r._sortErrors=Qx(Object.keys(t)),n&&(r._excludedEdges=n),r}shape(t,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,t),i)})}partial(){const t={};for(const[n,r]of Object.entries(this.fields))t[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(t)}deepPartial(){return Ul(this)}pick(t){const n={};for(const r of t)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,i])=>t.includes(r)&&t.includes(i)))}omit(t){const n=[];for(const r of Object.keys(this.fields))t.includes(r)||n.push(r);return this.pick(n)}from(t,n,r){let i=ui.getter(t,!0);return this.transform(s=>{if(!s)return s;let o=s;return YO(s,t)&&(o=Object.assign({},s),r||delete o[t],o[n]=i(s)),o})}json(){return this.transform(KO)}noUnknown(t=!0,n=Fh.noUnknown){typeof t!="boolean"&&(n=t,t=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const s=qO(this.schema,i);return!t||s.length===0||this.createError({params:{unknown:s.join(", ")}})}});return r.spec.noUnknown=t,r}unknown(t=!0,n=Fh.noUnknown){return this.noUnknown(!t,n)}transformKeys(t){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[t(i)]=n[i];return r})}camelCase(){return this.transformKeys(tf.camelCase)}snakeCase(){return this.transformKeys(tf.snakeCase)}constantCase(){return this.transformKeys(t=>tf.snakeCase(t).toUpperCase())}describe(t){const n=(t?this.resolve(t):this).clone(),r=super.describe(t);r.fields={};for(const[s,o]of Object.entries(n.fields)){var i;let a=t;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[s]})),r.fields[s]=o.describe(a)}return r}}Lm.prototype=Xx.prototype;const XO=M.form`
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
`,nf=M.div`
  margin-bottom: 14px;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 18px;
  }
`;M.div`
  margin-bottom: 40px;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
`;const JO=M.h2`
  line-height: 1.2;
  letter-spacing: -0.8px;
  font-weight: 500;
  margin-bottom: 20px;
  color: var(--secondar);
  @media (min-width: 768px) {
    font-size: 40px;
  }
`,ZO=M.p`
  width: 438px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.38;
  margin-bottom: 40px;
  color: rgba(18, 20, 23, 0.8);
`,rf=M.p`
  margin-left: 15px;
  font-size: 12px;
  font-weight: 400;
  color: var(--red);
`,eR=M.button`
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
`,sf=M.input`
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
`,tR=M.button`
  font-weight: 600;
  width: 100%;
  border: none;
  border-radius: 12px;
  color: var(--secondar);

  background-color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};

  padding: 16px 180px;

  font-size: 18px;
  font-weight: 700;
  line-height: 1.56;
  @media (min-width: 768px) {
  }
`,nR=M.button`
  position: absolute;
  top: 20px;
  right: 20px;

  background-color: transparent;
  border: none;
`;M.svg`
  stroke: var(--secondary);
  fill: none;
  width: 24px;
  height: 24px;
`;const rR=M.svg`
  stroke: var(--secondary);
  fill: none;
  width: 32px;
  height: 32px;
`,$v=M.svg`
  stroke: var(--secondary);
  fill: none;
  display: inline-block;
  width: 24px;
  height: 24px;
`;var iR=function(t){return sR(t)&&!oR(t)};function sR(e){return!!e&&typeof e=="object"}function oR(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||uR(e)}var aR=typeof Symbol=="function"&&Symbol.for,lR=aR?Symbol.for("react.element"):60103;function uR(e){return e.$$typeof===lR}function cR(e){return Array.isArray(e)?[]:{}}function Nu(e,t){return t.clone!==!1&&t.isMergeableObject(e)?ra(cR(e),e,t):e}function dR(e,t,n){return e.concat(t).map(function(r){return Nu(r,n)})}function fR(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach(function(i){r[i]=Nu(e[i],n)}),Object.keys(t).forEach(function(i){!n.isMergeableObject(t[i])||!e[i]?r[i]=Nu(t[i],n):r[i]=ra(e[i],t[i],n)}),r}function ra(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||dR,n.isMergeableObject=n.isMergeableObject||iR;var r=Array.isArray(t),i=Array.isArray(e),s=r===i;return s?r?n.arrayMerge(e,t,n):fR(e,t,n):Nu(t,n)}ra.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(r,i){return ra(r,i,n)},{})};var $h=ra,hR=typeof global=="object"&&global&&global.Object===Object&&global;const Jx=hR;var pR=typeof self=="object"&&self&&self.Object===Object&&self,mR=Jx||pR||Function("return this")();const Cn=mR;var gR=Cn.Symbol;const Ir=gR;var Zx=Object.prototype,yR=Zx.hasOwnProperty,vR=Zx.toString,io=Ir?Ir.toStringTag:void 0;function _R(e){var t=yR.call(e,io),n=e[io];try{e[io]=void 0;var r=!0}catch{}var i=vR.call(e);return r&&(t?e[io]=n:delete e[io]),i}var wR=Object.prototype,xR=wR.toString;function SR(e){return xR.call(e)}var ER="[object Null]",CR="[object Undefined]",jv=Ir?Ir.toStringTag:void 0;function Ri(e){return e==null?e===void 0?CR:ER:jv&&jv in Object(e)?_R(e):SR(e)}function eS(e,t){return function(n){return e(t(n))}}var TR=eS(Object.getPrototypeOf,Object);const Mm=TR;function Ni(e){return e!=null&&typeof e=="object"}var bR="[object Object]",kR=Function.prototype,IR=Object.prototype,tS=kR.toString,PR=IR.hasOwnProperty,OR=tS.call(Object);function Uv(e){if(!Ni(e)||Ri(e)!=bR)return!1;var t=Mm(e);if(t===null)return!0;var n=PR.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&tS.call(n)==OR}var zv=Array.isArray,Bv=Object.keys,RR=Object.prototype.hasOwnProperty,NR=typeof Element<"u";function jh(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var n=zv(e),r=zv(t),i,s,o;if(n&&r){if(s=e.length,s!=t.length)return!1;for(i=s;i--!==0;)if(!jh(e[i],t[i]))return!1;return!0}if(n!=r)return!1;var a=e instanceof Date,l=t instanceof Date;if(a!=l)return!1;if(a&&l)return e.getTime()==t.getTime();var u=e instanceof RegExp,c=t instanceof RegExp;if(u!=c)return!1;if(u&&c)return e.toString()==t.toString();var d=Bv(e);if(s=d.length,s!==Bv(t).length)return!1;for(i=s;i--!==0;)if(!RR.call(t,d[i]))return!1;if(NR&&e instanceof Element&&t instanceof Element)return e===t;for(i=s;i--!==0;)if(o=d[i],!(o==="_owner"&&e.$$typeof)&&!jh(e[o],t[o]))return!1;return!0}return e!==e&&t!==t}var AR=function(t,n){try{return jh(t,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const Kr=Cp(AR);var DR=!0;function LR(e,t){if(!DR){if(e)return;var n="Warning: "+t;typeof console<"u"&&console.warn(n);try{throw Error(n)}catch{}}}function MR(){this.__data__=[],this.size=0}function nS(e,t){return e===t||e!==e&&t!==t}function Dc(e,t){for(var n=e.length;n--;)if(nS(e[n][0],t))return n;return-1}var FR=Array.prototype,$R=FR.splice;function jR(e){var t=this.__data__,n=Dc(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():$R.call(t,n,1),--this.size,!0}function UR(e){var t=this.__data__,n=Dc(t,e);return n<0?void 0:t[n][1]}function zR(e){return Dc(this.__data__,e)>-1}function BR(e,t){var n=this.__data__,r=Dc(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function Yn(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Yn.prototype.clear=MR;Yn.prototype.delete=jR;Yn.prototype.get=UR;Yn.prototype.has=zR;Yn.prototype.set=BR;function VR(){this.__data__=new Yn,this.size=0}function WR(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function HR(e){return this.__data__.get(e)}function GR(e){return this.__data__.has(e)}function Aa(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var KR="[object AsyncFunction]",YR="[object Function]",qR="[object GeneratorFunction]",QR="[object Proxy]";function rS(e){if(!Aa(e))return!1;var t=Ri(e);return t==YR||t==qR||t==KR||t==QR}var XR=Cn["__core-js_shared__"];const of=XR;var Vv=function(){var e=/[^.]+$/.exec(of&&of.keys&&of.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function JR(e){return!!Vv&&Vv in e}var ZR=Function.prototype,eN=ZR.toString;function Ai(e){if(e!=null){try{return eN.call(e)}catch{}try{return e+""}catch{}}return""}var tN=/[\\^$.*+?()[\]{}|]/g,nN=/^\[object .+?Constructor\]$/,rN=Function.prototype,iN=Object.prototype,sN=rN.toString,oN=iN.hasOwnProperty,aN=RegExp("^"+sN.call(oN).replace(tN,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function lN(e){if(!Aa(e)||JR(e))return!1;var t=rS(e)?aN:nN;return t.test(Ai(e))}function uN(e,t){return e==null?void 0:e[t]}function Di(e,t){var n=uN(e,t);return lN(n)?n:void 0}var cN=Di(Cn,"Map");const ia=cN;var dN=Di(Object,"create");const sa=dN;function fN(){this.__data__=sa?sa(null):{},this.size=0}function hN(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var pN="__lodash_hash_undefined__",mN=Object.prototype,gN=mN.hasOwnProperty;function yN(e){var t=this.__data__;if(sa){var n=t[e];return n===pN?void 0:n}return gN.call(t,e)?t[e]:void 0}var vN=Object.prototype,_N=vN.hasOwnProperty;function wN(e){var t=this.__data__;return sa?t[e]!==void 0:_N.call(t,e)}var xN="__lodash_hash_undefined__";function SN(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=sa&&t===void 0?xN:t,this}function vi(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}vi.prototype.clear=fN;vi.prototype.delete=hN;vi.prototype.get=yN;vi.prototype.has=wN;vi.prototype.set=SN;function EN(){this.size=0,this.__data__={hash:new vi,map:new(ia||Yn),string:new vi}}function CN(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Lc(e,t){var n=e.__data__;return CN(t)?n[typeof t=="string"?"string":"hash"]:n.map}function TN(e){var t=Lc(this,e).delete(e);return this.size-=t?1:0,t}function bN(e){return Lc(this,e).get(e)}function kN(e){return Lc(this,e).has(e)}function IN(e,t){var n=Lc(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function Fr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Fr.prototype.clear=EN;Fr.prototype.delete=TN;Fr.prototype.get=bN;Fr.prototype.has=kN;Fr.prototype.set=IN;var PN=200;function ON(e,t){var n=this.__data__;if(n instanceof Yn){var r=n.__data__;if(!ia||r.length<PN-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Fr(r)}return n.set(e,t),this.size=n.size,this}function Vs(e){var t=this.__data__=new Yn(e);this.size=t.size}Vs.prototype.clear=VR;Vs.prototype.delete=WR;Vs.prototype.get=HR;Vs.prototype.has=GR;Vs.prototype.set=ON;function RN(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var NN=function(){try{var e=Di(Object,"defineProperty");return e({},"",{}),e}catch{}}();const Wv=NN;function iS(e,t,n){t=="__proto__"&&Wv?Wv(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var AN=Object.prototype,DN=AN.hasOwnProperty;function sS(e,t,n){var r=e[t];(!(DN.call(e,t)&&nS(r,n))||n===void 0&&!(t in e))&&iS(e,t,n)}function Mc(e,t,n,r){var i=!n;n||(n={});for(var s=-1,o=t.length;++s<o;){var a=t[s],l=r?r(n[a],e[a],a,n,e):void 0;l===void 0&&(l=e[a]),i?iS(n,a,l):sS(n,a,l)}return n}function LN(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var MN="[object Arguments]";function Hv(e){return Ni(e)&&Ri(e)==MN}var oS=Object.prototype,FN=oS.hasOwnProperty,$N=oS.propertyIsEnumerable,jN=Hv(function(){return arguments}())?Hv:function(e){return Ni(e)&&FN.call(e,"callee")&&!$N.call(e,"callee")};const UN=jN;var zN=Array.isArray;const Da=zN;function BN(){return!1}var aS=typeof Tt=="object"&&Tt&&!Tt.nodeType&&Tt,Gv=aS&&typeof bt=="object"&&bt&&!bt.nodeType&&bt,VN=Gv&&Gv.exports===aS,Kv=VN?Cn.Buffer:void 0,WN=Kv?Kv.isBuffer:void 0,HN=WN||BN;const lS=HN;var GN=9007199254740991,KN=/^(?:0|[1-9]\d*)$/;function YN(e,t){var n=typeof e;return t=t??GN,!!t&&(n=="number"||n!="symbol"&&KN.test(e))&&e>-1&&e%1==0&&e<t}var qN=9007199254740991;function uS(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=qN}var QN="[object Arguments]",XN="[object Array]",JN="[object Boolean]",ZN="[object Date]",e2="[object Error]",t2="[object Function]",n2="[object Map]",r2="[object Number]",i2="[object Object]",s2="[object RegExp]",o2="[object Set]",a2="[object String]",l2="[object WeakMap]",u2="[object ArrayBuffer]",c2="[object DataView]",d2="[object Float32Array]",f2="[object Float64Array]",h2="[object Int8Array]",p2="[object Int16Array]",m2="[object Int32Array]",g2="[object Uint8Array]",y2="[object Uint8ClampedArray]",v2="[object Uint16Array]",_2="[object Uint32Array]",pe={};pe[d2]=pe[f2]=pe[h2]=pe[p2]=pe[m2]=pe[g2]=pe[y2]=pe[v2]=pe[_2]=!0;pe[QN]=pe[XN]=pe[u2]=pe[JN]=pe[c2]=pe[ZN]=pe[e2]=pe[t2]=pe[n2]=pe[r2]=pe[i2]=pe[s2]=pe[o2]=pe[a2]=pe[l2]=!1;function w2(e){return Ni(e)&&uS(e.length)&&!!pe[Ri(e)]}function Fm(e){return function(t){return e(t)}}var cS=typeof Tt=="object"&&Tt&&!Tt.nodeType&&Tt,Oo=cS&&typeof bt=="object"&&bt&&!bt.nodeType&&bt,x2=Oo&&Oo.exports===cS,af=x2&&Jx.process,S2=function(){try{var e=Oo&&Oo.require&&Oo.require("util").types;return e||af&&af.binding&&af.binding("util")}catch{}}();const Is=S2;var Yv=Is&&Is.isTypedArray,E2=Yv?Fm(Yv):w2;const C2=E2;var T2=Object.prototype,b2=T2.hasOwnProperty;function dS(e,t){var n=Da(e),r=!n&&UN(e),i=!n&&!r&&lS(e),s=!n&&!r&&!i&&C2(e),o=n||r||i||s,a=o?LN(e.length,String):[],l=a.length;for(var u in e)(t||b2.call(e,u))&&!(o&&(u=="length"||i&&(u=="offset"||u=="parent")||s&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||YN(u,l)))&&a.push(u);return a}var k2=Object.prototype;function $m(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||k2;return e===n}var I2=eS(Object.keys,Object);const P2=I2;var O2=Object.prototype,R2=O2.hasOwnProperty;function N2(e){if(!$m(e))return P2(e);var t=[];for(var n in Object(e))R2.call(e,n)&&n!="constructor"&&t.push(n);return t}function fS(e){return e!=null&&uS(e.length)&&!rS(e)}function jm(e){return fS(e)?dS(e):N2(e)}function A2(e,t){return e&&Mc(t,jm(t),e)}function D2(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var L2=Object.prototype,M2=L2.hasOwnProperty;function F2(e){if(!Aa(e))return D2(e);var t=$m(e),n=[];for(var r in e)r=="constructor"&&(t||!M2.call(e,r))||n.push(r);return n}function Um(e){return fS(e)?dS(e,!0):F2(e)}function $2(e,t){return e&&Mc(t,Um(t),e)}var hS=typeof Tt=="object"&&Tt&&!Tt.nodeType&&Tt,qv=hS&&typeof bt=="object"&&bt&&!bt.nodeType&&bt,j2=qv&&qv.exports===hS,Qv=j2?Cn.Buffer:void 0,Xv=Qv?Qv.allocUnsafe:void 0;function U2(e,t){if(t)return e.slice();var n=e.length,r=Xv?Xv(n):new e.constructor(n);return e.copy(r),r}function pS(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}function z2(e,t){for(var n=-1,r=e==null?0:e.length,i=0,s=[];++n<r;){var o=e[n];t(o,n,e)&&(s[i++]=o)}return s}function mS(){return[]}var B2=Object.prototype,V2=B2.propertyIsEnumerable,Jv=Object.getOwnPropertySymbols,W2=Jv?function(e){return e==null?[]:(e=Object(e),z2(Jv(e),function(t){return V2.call(e,t)}))}:mS;const zm=W2;function H2(e,t){return Mc(e,zm(e),t)}function gS(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var G2=Object.getOwnPropertySymbols,K2=G2?function(e){for(var t=[];e;)gS(t,zm(e)),e=Mm(e);return t}:mS;const yS=K2;function Y2(e,t){return Mc(e,yS(e),t)}function vS(e,t,n){var r=t(e);return Da(e)?r:gS(r,n(e))}function q2(e){return vS(e,jm,zm)}function Q2(e){return vS(e,Um,yS)}var X2=Di(Cn,"DataView");const Uh=X2;var J2=Di(Cn,"Promise");const zh=J2;var Z2=Di(Cn,"Set");const Bh=Z2;var eA=Di(Cn,"WeakMap");const Vh=eA;var Zv="[object Map]",tA="[object Object]",e_="[object Promise]",t_="[object Set]",n_="[object WeakMap]",r_="[object DataView]",nA=Ai(Uh),rA=Ai(ia),iA=Ai(zh),sA=Ai(Bh),oA=Ai(Vh),Yr=Ri;(Uh&&Yr(new Uh(new ArrayBuffer(1)))!=r_||ia&&Yr(new ia)!=Zv||zh&&Yr(zh.resolve())!=e_||Bh&&Yr(new Bh)!=t_||Vh&&Yr(new Vh)!=n_)&&(Yr=function(e){var t=Ri(e),n=t==tA?e.constructor:void 0,r=n?Ai(n):"";if(r)switch(r){case nA:return r_;case rA:return Zv;case iA:return e_;case sA:return t_;case oA:return n_}return t});const Bm=Yr;var aA=Object.prototype,lA=aA.hasOwnProperty;function uA(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&lA.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var cA=Cn.Uint8Array;const i_=cA;function Vm(e){var t=new e.constructor(e.byteLength);return new i_(t).set(new i_(e)),t}function dA(e,t){var n=t?Vm(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var fA=/\w*$/;function hA(e){var t=new e.constructor(e.source,fA.exec(e));return t.lastIndex=e.lastIndex,t}var s_=Ir?Ir.prototype:void 0,o_=s_?s_.valueOf:void 0;function pA(e){return o_?Object(o_.call(e)):{}}function mA(e,t){var n=t?Vm(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var gA="[object Boolean]",yA="[object Date]",vA="[object Map]",_A="[object Number]",wA="[object RegExp]",xA="[object Set]",SA="[object String]",EA="[object Symbol]",CA="[object ArrayBuffer]",TA="[object DataView]",bA="[object Float32Array]",kA="[object Float64Array]",IA="[object Int8Array]",PA="[object Int16Array]",OA="[object Int32Array]",RA="[object Uint8Array]",NA="[object Uint8ClampedArray]",AA="[object Uint16Array]",DA="[object Uint32Array]";function LA(e,t,n){var r=e.constructor;switch(t){case CA:return Vm(e);case gA:case yA:return new r(+e);case TA:return dA(e,n);case bA:case kA:case IA:case PA:case OA:case RA:case NA:case AA:case DA:return mA(e,n);case vA:return new r;case _A:case SA:return new r(e);case wA:return hA(e);case xA:return new r;case EA:return pA(e)}}var a_=Object.create,MA=function(){function e(){}return function(t){if(!Aa(t))return{};if(a_)return a_(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const FA=MA;function $A(e){return typeof e.constructor=="function"&&!$m(e)?FA(Mm(e)):{}}var jA="[object Map]";function UA(e){return Ni(e)&&Bm(e)==jA}var l_=Is&&Is.isMap,zA=l_?Fm(l_):UA;const BA=zA;var VA="[object Set]";function WA(e){return Ni(e)&&Bm(e)==VA}var u_=Is&&Is.isSet,HA=u_?Fm(u_):WA;const GA=HA;var KA=1,YA=2,qA=4,_S="[object Arguments]",QA="[object Array]",XA="[object Boolean]",JA="[object Date]",ZA="[object Error]",wS="[object Function]",eD="[object GeneratorFunction]",tD="[object Map]",nD="[object Number]",xS="[object Object]",rD="[object RegExp]",iD="[object Set]",sD="[object String]",oD="[object Symbol]",aD="[object WeakMap]",lD="[object ArrayBuffer]",uD="[object DataView]",cD="[object Float32Array]",dD="[object Float64Array]",fD="[object Int8Array]",hD="[object Int16Array]",pD="[object Int32Array]",mD="[object Uint8Array]",gD="[object Uint8ClampedArray]",yD="[object Uint16Array]",vD="[object Uint32Array]",ue={};ue[_S]=ue[QA]=ue[lD]=ue[uD]=ue[XA]=ue[JA]=ue[cD]=ue[dD]=ue[fD]=ue[hD]=ue[pD]=ue[tD]=ue[nD]=ue[xS]=ue[rD]=ue[iD]=ue[sD]=ue[oD]=ue[mD]=ue[gD]=ue[yD]=ue[vD]=!0;ue[ZA]=ue[wS]=ue[aD]=!1;function zl(e,t,n,r,i,s){var o,a=t&KA,l=t&YA,u=t&qA;if(n&&(o=i?n(e,r,i,s):n(e)),o!==void 0)return o;if(!Aa(e))return e;var c=Da(e);if(c){if(o=uA(e),!a)return pS(e,o)}else{var d=Bm(e),f=d==wS||d==eD;if(lS(e))return U2(e,a);if(d==xS||d==_S||f&&!i){if(o=l||f?{}:$A(e),!a)return l?Y2(e,$2(o,e)):H2(e,A2(o,e))}else{if(!ue[d])return i?e:{};o=LA(e,d,a)}}s||(s=new Vs);var m=s.get(e);if(m)return m;s.set(e,o),GA(e)?e.forEach(function(w){o.add(zl(w,t,n,w,e,s))}):BA(e)&&e.forEach(function(w,p){o.set(p,zl(w,t,n,p,e,s))});var g=u?l?Q2:q2:l?Um:jm,_=c?void 0:g(e);return RN(_||e,function(w,p){_&&(p=w,w=e[p]),sS(o,p,zl(w,t,n,p,e,s))}),o}var _D=4;function c_(e){return zl(e,_D)}function SS(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var wD="[object Symbol]";function Wm(e){return typeof e=="symbol"||Ni(e)&&Ri(e)==wD}var xD="Expected a function";function Hm(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(xD);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=e.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(Hm.Cache||Fr),n}Hm.Cache=Fr;var SD=500;function ED(e){var t=Hm(e,function(r){return n.size===SD&&n.clear(),r}),n=t.cache;return t}var CD=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,TD=/\\(\\)?/g,bD=ED(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(CD,function(n,r,i,s){t.push(i?s.replace(TD,"$1"):r||n)}),t});const kD=bD;var ID=1/0;function PD(e){if(typeof e=="string"||Wm(e))return e;var t=e+"";return t=="0"&&1/e==-ID?"-0":t}var OD=1/0,d_=Ir?Ir.prototype:void 0,f_=d_?d_.toString:void 0;function ES(e){if(typeof e=="string")return e;if(Da(e))return SS(e,ES)+"";if(Wm(e))return f_?f_.call(e):"";var t=e+"";return t=="0"&&1/e==-OD?"-0":t}function RD(e){return e==null?"":ES(e)}function CS(e){return Da(e)?SS(e,PD):Wm(e)?[e]:pS(kD(RD(e)))}var TS={exports:{}},oe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ue=typeof Symbol=="function"&&Symbol.for,Gm=Ue?Symbol.for("react.element"):60103,Km=Ue?Symbol.for("react.portal"):60106,Fc=Ue?Symbol.for("react.fragment"):60107,$c=Ue?Symbol.for("react.strict_mode"):60108,jc=Ue?Symbol.for("react.profiler"):60114,Uc=Ue?Symbol.for("react.provider"):60109,zc=Ue?Symbol.for("react.context"):60110,Ym=Ue?Symbol.for("react.async_mode"):60111,Bc=Ue?Symbol.for("react.concurrent_mode"):60111,Vc=Ue?Symbol.for("react.forward_ref"):60112,Wc=Ue?Symbol.for("react.suspense"):60113,ND=Ue?Symbol.for("react.suspense_list"):60120,Hc=Ue?Symbol.for("react.memo"):60115,Gc=Ue?Symbol.for("react.lazy"):60116,AD=Ue?Symbol.for("react.block"):60121,DD=Ue?Symbol.for("react.fundamental"):60117,LD=Ue?Symbol.for("react.responder"):60118,MD=Ue?Symbol.for("react.scope"):60119;function Mt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Gm:switch(e=e.type,e){case Ym:case Bc:case Fc:case jc:case $c:case Wc:return e;default:switch(e=e&&e.$$typeof,e){case zc:case Vc:case Gc:case Hc:case Uc:return e;default:return t}}case Km:return t}}}function bS(e){return Mt(e)===Bc}oe.AsyncMode=Ym;oe.ConcurrentMode=Bc;oe.ContextConsumer=zc;oe.ContextProvider=Uc;oe.Element=Gm;oe.ForwardRef=Vc;oe.Fragment=Fc;oe.Lazy=Gc;oe.Memo=Hc;oe.Portal=Km;oe.Profiler=jc;oe.StrictMode=$c;oe.Suspense=Wc;oe.isAsyncMode=function(e){return bS(e)||Mt(e)===Ym};oe.isConcurrentMode=bS;oe.isContextConsumer=function(e){return Mt(e)===zc};oe.isContextProvider=function(e){return Mt(e)===Uc};oe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gm};oe.isForwardRef=function(e){return Mt(e)===Vc};oe.isFragment=function(e){return Mt(e)===Fc};oe.isLazy=function(e){return Mt(e)===Gc};oe.isMemo=function(e){return Mt(e)===Hc};oe.isPortal=function(e){return Mt(e)===Km};oe.isProfiler=function(e){return Mt(e)===jc};oe.isStrictMode=function(e){return Mt(e)===$c};oe.isSuspense=function(e){return Mt(e)===Wc};oe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Fc||e===Bc||e===jc||e===$c||e===Wc||e===ND||typeof e=="object"&&e!==null&&(e.$$typeof===Gc||e.$$typeof===Hc||e.$$typeof===Uc||e.$$typeof===zc||e.$$typeof===Vc||e.$$typeof===DD||e.$$typeof===LD||e.$$typeof===MD||e.$$typeof===AD)};oe.typeOf=Mt;TS.exports=oe;var FD=TS.exports,kS=FD,$D={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},jD={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},IS={};IS[kS.ForwardRef]=$D;IS[kS.Memo]=jD;function De(){return De=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},De.apply(this,arguments)}function PS(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var Kc=T.createContext(void 0);Kc.displayName="FormikContext";Kc.Provider;Kc.Consumer;function UD(){var e=T.useContext(Kc);return e||LR(!1),e}var Qt=function(t){return typeof t=="function"},Yc=function(t){return t!==null&&typeof t=="object"},zD=function(t){return String(Math.floor(Number(t)))===t},lf=function(t){return Object.prototype.toString.call(t)==="[object String]"},uf=function(t){return Yc(t)&&Qt(t.then)};function xt(e,t,n,r){r===void 0&&(r=0);for(var i=CS(t);e&&r<i.length;)e=e[i[r++]];return r!==i.length&&!e||e===void 0?n:e}function ci(e,t,n){for(var r=c_(e),i=r,s=0,o=CS(t);s<o.length-1;s++){var a=o[s],l=xt(e,o.slice(0,s+1));if(l&&(Yc(l)||Array.isArray(l)))i=i[a]=c_(l);else{var u=o[s+1];i=i[a]=zD(u)&&Number(u)>=0?[]:{}}}return(s===0?e:i)[o[s]]===n?e:(n===void 0?delete i[o[s]]:i[o[s]]=n,s===0&&n===void 0&&delete r[o[s]],r)}function OS(e,t,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var i=0,s=Object.keys(e);i<s.length;i++){var o=s[i],a=e[o];Yc(a)?n.get(a)||(n.set(a,!0),r[o]=Array.isArray(a)?[]:{},OS(a,t,n,r[o])):r[o]=t}return r}function BD(e,t){switch(t.type){case"SET_VALUES":return De({},e,{values:t.payload});case"SET_TOUCHED":return De({},e,{touched:t.payload});case"SET_ERRORS":return Kr(e.errors,t.payload)?e:De({},e,{errors:t.payload});case"SET_STATUS":return De({},e,{status:t.payload});case"SET_ISSUBMITTING":return De({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return De({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return De({},e,{values:ci(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return De({},e,{touched:ci(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return De({},e,{errors:ci(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return De({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return De({},e,{touched:OS(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return De({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return De({},e,{isSubmitting:!1});default:return e}}var Vr={},hl={};function RS(e){var t=e.validateOnChange,n=t===void 0?!0:t,r=e.validateOnBlur,i=r===void 0?!0:r,s=e.validateOnMount,o=s===void 0?!1:s,a=e.isInitialValid,l=e.enableReinitialize,u=l===void 0?!1:l,c=e.onSubmit,d=PS(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=De({validateOnChange:n,validateOnBlur:i,validateOnMount:o,onSubmit:c},d),m=T.useRef(f.initialValues),g=T.useRef(f.initialErrors||Vr),_=T.useRef(f.initialTouched||hl),w=T.useRef(f.initialStatus),p=T.useRef(!1),h=T.useRef({});T.useEffect(function(){return p.current=!0,function(){p.current=!1}},[]);var v=T.useState(0),x=v[1],E=T.useRef({values:f.initialValues,errors:f.initialErrors||Vr,touched:f.initialTouched||hl,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),C=E.current,S=T.useCallback(function(b){var R=E.current;E.current=BD(R,b),R!==E.current&&x(function(D){return D+1})},[]),P=T.useCallback(function(b,R){return new Promise(function(D,$){var W=f.validate(b,R);W==null?D(Vr):uf(W)?W.then(function(ie){D(ie||Vr)},function(ie){$(ie)}):D(W)})},[f.validate]),F=T.useCallback(function(b,R){var D=f.validationSchema,$=Qt(D)?D(R):D,W=R&&$.validateAt?$.validateAt(R,b):WD(b,$);return new Promise(function(ie,Ae){W.then(function(){ie(Vr)},function(kn){kn.name==="ValidationError"?ie(VD(kn)):Ae(kn)})})},[f.validationSchema]),L=T.useCallback(function(b,R){return new Promise(function(D){return D(h.current[b].validate(R))})},[]),V=T.useCallback(function(b){var R=Object.keys(h.current).filter(function($){return Qt(h.current[$].validate)}),D=R.length>0?R.map(function($){return L($,xt(b,$))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(D).then(function($){return $.reduce(function(W,ie,Ae){return ie==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||ie&&(W=ci(W,R[Ae],ie)),W},{})})},[L]),ut=T.useCallback(function(b){return Promise.all([V(b),f.validationSchema?F(b):{},f.validate?P(b):{}]).then(function(R){var D=R[0],$=R[1],W=R[2],ie=$h.all([D,$,W],{arrayMerge:HD});return ie})},[f.validate,f.validationSchema,V,P,F]),Y=$t(function(b){return b===void 0&&(b=C.values),S({type:"SET_ISVALIDATING",payload:!0}),ut(b).then(function(R){return p.current&&(S({type:"SET_ISVALIDATING",payload:!1}),S({type:"SET_ERRORS",payload:R})),R})});T.useEffect(function(){o&&p.current===!0&&Kr(m.current,f.initialValues)&&Y(m.current)},[o,Y]);var Ie=T.useCallback(function(b){var R=b&&b.values?b.values:m.current,D=b&&b.errors?b.errors:g.current?g.current:f.initialErrors||{},$=b&&b.touched?b.touched:_.current?_.current:f.initialTouched||{},W=b&&b.status?b.status:w.current?w.current:f.initialStatus;m.current=R,g.current=D,_.current=$,w.current=W;var ie=function(){S({type:"RESET_FORM",payload:{isSubmitting:!!b&&!!b.isSubmitting,errors:D,touched:$,status:W,values:R,isValidating:!!b&&!!b.isValidating,submitCount:b&&b.submitCount&&typeof b.submitCount=="number"?b.submitCount:0}})};if(f.onReset){var Ae=f.onReset(C.values,Xg);uf(Ae)?Ae.then(ie):ie()}else ie()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);T.useEffect(function(){p.current===!0&&!Kr(m.current,f.initialValues)&&u&&(m.current=f.initialValues,Ie(),o&&Y(m.current))},[u,f.initialValues,Ie,o,Y]),T.useEffect(function(){u&&p.current===!0&&!Kr(g.current,f.initialErrors)&&(g.current=f.initialErrors||Vr,S({type:"SET_ERRORS",payload:f.initialErrors||Vr}))},[u,f.initialErrors]),T.useEffect(function(){u&&p.current===!0&&!Kr(_.current,f.initialTouched)&&(_.current=f.initialTouched||hl,S({type:"SET_TOUCHED",payload:f.initialTouched||hl}))},[u,f.initialTouched]),T.useEffect(function(){u&&p.current===!0&&!Kr(w.current,f.initialStatus)&&(w.current=f.initialStatus,S({type:"SET_STATUS",payload:f.initialStatus}))},[u,f.initialStatus,f.initialTouched]);var Tn=$t(function(b){if(h.current[b]&&Qt(h.current[b].validate)){var R=xt(C.values,b),D=h.current[b].validate(R);return uf(D)?(S({type:"SET_ISVALIDATING",payload:!0}),D.then(function($){return $}).then(function($){S({type:"SET_FIELD_ERROR",payload:{field:b,value:$}}),S({type:"SET_ISVALIDATING",payload:!1})})):(S({type:"SET_FIELD_ERROR",payload:{field:b,value:D}}),Promise.resolve(D))}else if(f.validationSchema)return S({type:"SET_ISVALIDATING",payload:!0}),F(C.values,b).then(function($){return $}).then(function($){S({type:"SET_FIELD_ERROR",payload:{field:b,value:xt($,b)}}),S({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),bn=T.useCallback(function(b,R){var D=R.validate;h.current[b]={validate:D}},[]),ct=T.useCallback(function(b){delete h.current[b]},[]),O=$t(function(b,R){S({type:"SET_TOUCHED",payload:b});var D=R===void 0?i:R;return D?Y(C.values):Promise.resolve()}),j=T.useCallback(function(b){S({type:"SET_ERRORS",payload:b})},[]),U=$t(function(b,R){var D=Qt(b)?b(C.values):b;S({type:"SET_VALUES",payload:D});var $=R===void 0?n:R;return $?Y(D):Promise.resolve()}),ne=T.useCallback(function(b,R){S({type:"SET_FIELD_ERROR",payload:{field:b,value:R}})},[]),re=$t(function(b,R,D){S({type:"SET_FIELD_VALUE",payload:{field:b,value:R}});var $=D===void 0?n:D;return $?Y(ci(C.values,b,R)):Promise.resolve()}),Ft=T.useCallback(function(b,R){var D=R,$=b,W;if(!lf(b)){b.persist&&b.persist();var ie=b.target?b.target:b.currentTarget,Ae=ie.type,kn=ie.name,_d=ie.id,wd=ie.value,_T=ie.checked,H8=ie.outerHTML,Jg=ie.options,wT=ie.multiple;D=R||kn||_d,$=/number|range/.test(Ae)?(W=parseFloat(wd),isNaN(W)?"":W):/checkbox/.test(Ae)?KD(xt(C.values,D),_T,wd):Jg&&wT?GD(Jg):wd}D&&re(D,$)},[re,C.values]),ze=$t(function(b){if(lf(b))return function(R){return Ft(R,b)};Ft(b)}),nt=$t(function(b,R,D){R===void 0&&(R=!0),S({type:"SET_FIELD_TOUCHED",payload:{field:b,value:R}});var $=D===void 0?i:D;return $?Y(C.values):Promise.resolve()}),Ye=T.useCallback(function(b,R){b.persist&&b.persist();var D=b.target,$=D.name,W=D.id,ie=D.outerHTML,Ae=R||$||W;nt(Ae,!0)},[nt]),qe=$t(function(b){if(lf(b))return function(R){return Ye(R,b)};Ye(b)}),Mi=T.useCallback(function(b){Qt(b)?S({type:"SET_FORMIK_STATE",payload:b}):S({type:"SET_FORMIK_STATE",payload:function(){return b}})},[]),Br=T.useCallback(function(b){S({type:"SET_STATUS",payload:b})},[]),Kt=T.useCallback(function(b){S({type:"SET_ISSUBMITTING",payload:b})},[]),yd=$t(function(){return S({type:"SUBMIT_ATTEMPT"}),Y().then(function(b){var R=b instanceof Error,D=!R&&Object.keys(b).length===0;if(D){var $;try{if($=fT(),$===void 0)return}catch(W){throw W}return Promise.resolve($).then(function(W){return p.current&&S({type:"SUBMIT_SUCCESS"}),W}).catch(function(W){if(p.current)throw S({type:"SUBMIT_FAILURE"}),W})}else if(p.current&&(S({type:"SUBMIT_FAILURE"}),R))throw b})}),dT=$t(function(b){b&&b.preventDefault&&Qt(b.preventDefault)&&b.preventDefault(),b&&b.stopPropagation&&Qt(b.stopPropagation)&&b.stopPropagation(),yd().catch(function(R){console.warn("Warning: An unhandled error was caught from submitForm()",R)})}),Xg={resetForm:Ie,validateForm:Y,validateField:Tn,setErrors:j,setFieldError:ne,setFieldTouched:nt,setFieldValue:re,setStatus:Br,setSubmitting:Kt,setTouched:O,setValues:U,setFormikState:Mi,submitForm:yd},fT=$t(function(){return c(C.values,Xg)}),hT=$t(function(b){b&&b.preventDefault&&Qt(b.preventDefault)&&b.preventDefault(),b&&b.stopPropagation&&Qt(b.stopPropagation)&&b.stopPropagation(),Ie()}),pT=T.useCallback(function(b){return{value:xt(C.values,b),error:xt(C.errors,b),touched:!!xt(C.touched,b),initialValue:xt(m.current,b),initialTouched:!!xt(_.current,b),initialError:xt(g.current,b)}},[C.errors,C.touched,C.values]),mT=T.useCallback(function(b){return{setValue:function(D,$){return re(b,D,$)},setTouched:function(D,$){return nt(b,D,$)},setError:function(D){return ne(b,D)}}},[re,nt,ne]),gT=T.useCallback(function(b){var R=Yc(b),D=R?b.name:b,$=xt(C.values,D),W={name:D,value:$,onChange:ze,onBlur:qe};if(R){var ie=b.type,Ae=b.value,kn=b.as,_d=b.multiple;ie==="checkbox"?Ae===void 0?W.checked=!!$:(W.checked=!!(Array.isArray($)&&~$.indexOf(Ae)),W.value=Ae):ie==="radio"?(W.checked=$===Ae,W.value=Ae):kn==="select"&&_d&&(W.value=W.value||[],W.multiple=!0)}return W},[qe,ze,C.values]),vd=T.useMemo(function(){return!Kr(m.current,C.values)},[m.current,C.values]),yT=T.useMemo(function(){return typeof a<"u"?vd?C.errors&&Object.keys(C.errors).length===0:a!==!1&&Qt(a)?a(f):a:C.errors&&Object.keys(C.errors).length===0},[a,vd,C.errors,f]),vT=De({},C,{initialValues:m.current,initialErrors:g.current,initialTouched:_.current,initialStatus:w.current,handleBlur:qe,handleChange:ze,handleReset:hT,handleSubmit:dT,resetForm:Ie,setErrors:j,setFormikState:Mi,setFieldTouched:nt,setFieldValue:re,setFieldError:ne,setStatus:Br,setSubmitting:Kt,setTouched:O,setValues:U,submitForm:yd,validateForm:Y,validateField:Tn,isValid:yT,dirty:vd,unregisterField:ct,registerField:bn,getFieldProps:gT,getFieldMeta:pT,getFieldHelpers:mT,validateOnBlur:i,validateOnChange:n,validateOnMount:o});return vT}function VD(e){var t={};if(e.inner){if(e.inner.length===0)return ci(t,e.path,e.message);for(var i=e.inner,n=Array.isArray(i),r=0,i=n?i:i[Symbol.iterator]();;){var s;if(n){if(r>=i.length)break;s=i[r++]}else{if(r=i.next(),r.done)break;s=r.value}var o=s;xt(t,o.path)||(t=ci(t,o.path,o.message))}}return t}function WD(e,t,n,r){n===void 0&&(n=!1);var i=Wh(e);return t[n?"validateSync":"validate"](i,{abortEarly:!1,context:r||i})}function Wh(e){var t=Array.isArray(e)?[]:{};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=String(n);Array.isArray(e[r])===!0?t[r]=e[r].map(function(i){return Array.isArray(i)===!0||Uv(i)?Wh(i):i!==""?i:void 0}):Uv(e[r])?t[r]=Wh(e[r]):t[r]=e[r]!==""?e[r]:void 0}return t}function HD(e,t,n){var r=e.slice();return t.forEach(function(s,o){if(typeof r[o]>"u"){var a=n.clone!==!1,l=a&&n.isMergeableObject(s);r[o]=l?$h(Array.isArray(s)?[]:{},s,n):s}else n.isMergeableObject(s)?r[o]=$h(e[o],s,n):e.indexOf(s)===-1&&r.push(s)}),r}function GD(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function KD(e,t,n){if(typeof e=="boolean")return!!t;var r=[],i=!1,s=-1;if(Array.isArray(e))r=e,s=e.indexOf(n),i=s>=0;else if(!n||n=="true"||n=="false")return!!t;return t&&n&&!i?r.concat(n):i?r.slice(0,s).concat(r.slice(s+1)):r}var YD=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?T.useLayoutEffect:T.useEffect;function $t(e){var t=T.useRef(e);return YD(function(){t.current=e}),T.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.current.apply(void 0,r)},[])}var qD=T.forwardRef(function(e,t){var n=e.action,r=PS(e,["action"]),i=n??"#",s=UD(),o=s.handleReset,a=s.handleSubmit;return T.createElement("form",De({onSubmit:a,ref:t,onReset:o,action:i},r))});qD.displayName="Form";const It="/Learn-Lingo/assets/sprite-eb170aab.svg";function Be(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var QD=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),h_=QD,cf=()=>Math.random().toString(36).substring(7).split("").join("."),XD={INIT:`@@redux/INIT${cf()}`,REPLACE:`@@redux/REPLACE${cf()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${cf()}`},Au=XD;function qm(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function Qm(e,t,n){if(typeof e!="function")throw new Error(Be(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Be(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Be(1));return n(Qm)(e,t)}let r=e,i=t,s=new Map,o=s,a=0,l=!1;function u(){o===s&&(o=new Map,s.forEach((w,p)=>{o.set(p,w)}))}function c(){if(l)throw new Error(Be(3));return i}function d(w){if(typeof w!="function")throw new Error(Be(4));if(l)throw new Error(Be(5));let p=!0;u();const h=a++;return o.set(h,w),function(){if(p){if(l)throw new Error(Be(6));p=!1,u(),o.delete(h),s=null}}}function f(w){if(!qm(w))throw new Error(Be(7));if(typeof w.type>"u")throw new Error(Be(8));if(typeof w.type!="string")throw new Error(Be(17));if(l)throw new Error(Be(9));try{l=!0,i=r(i,w)}finally{l=!1}return(s=o).forEach(h=>{h()}),w}function m(w){if(typeof w!="function")throw new Error(Be(10));r=w,f({type:Au.REPLACE})}function g(){const w=d;return{subscribe(p){if(typeof p!="object"||p===null)throw new Error(Be(11));function h(){const x=p;x.next&&x.next(c())}return h(),{unsubscribe:w(h)}},[h_](){return this}}}return f({type:Au.INIT}),{dispatch:f,subscribe:d,getState:c,replaceReducer:m,[h_]:g}}function JD(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Au.INIT})>"u")throw new Error(Be(12));if(typeof n(void 0,{type:Au.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Be(13))})}function NS(e){const t=Object.keys(e),n={};for(let s=0;s<t.length;s++){const o=t[s];typeof e[o]=="function"&&(n[o]=e[o])}const r=Object.keys(n);let i;try{JD(n)}catch(s){i=s}return function(o={},a){if(i)throw i;let l=!1;const u={};for(let c=0;c<r.length;c++){const d=r[c],f=n[d],m=o[d],g=f(m,a);if(typeof g>"u")throw a&&a.type,new Error(Be(14));u[d]=g,l=l||g!==m}return l=l||r.length!==Object.keys(o).length,l?u:o}}function Du(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function ZD(...e){return t=>(n,r)=>{const i=t(n,r);let s=()=>{throw new Error(Be(15))};const o={getState:i.getState,dispatch:(l,...u)=>s(l,...u)},a=e.map(l=>l(o));return s=Du(...a)(i.dispatch),{...i,dispatch:s}}}function eL(e){return qm(e)&&"type"in e&&typeof e.type=="string"}var AS=Symbol.for("immer-nothing"),p_=Symbol.for("immer-draftable"),Nt=Symbol.for("immer-state");function en(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Ps=Object.getPrototypeOf;function Pr(e){return!!e&&!!e[Nt]}function Wn(e){var t;return e?DS(e)||Array.isArray(e)||!!e[p_]||!!((t=e.constructor)!=null&&t[p_])||Qc(e)||Xc(e):!1}var tL=Object.prototype.constructor.toString();function DS(e){if(!e||typeof e!="object")return!1;const t=Ps(e);if(t===null)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===tL}function oa(e,t){qc(e)===0?Object.entries(e).forEach(([n,r])=>{t(n,r,e)}):e.forEach((n,r)=>t(r,n,e))}function qc(e){const t=e[Nt];return t?t.type_:Array.isArray(e)?1:Qc(e)?2:Xc(e)?3:0}function Hh(e,t){return qc(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function LS(e,t,n){const r=qc(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function nL(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function Qc(e){return e instanceof Map}function Xc(e){return e instanceof Set}function qr(e){return e.copy_||e.base_}function Gh(e,t){if(Qc(e))return new Map(e);if(Xc(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&DS(e))return Ps(e)?{...e}:Object.assign(Object.create(null),e);const n=Object.getOwnPropertyDescriptors(e);delete n[Nt];let r=Reflect.ownKeys(n);for(let i=0;i<r.length;i++){const s=r[i],o=n[s];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(n[s]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[s]})}return Object.create(Ps(e),n)}function Xm(e,t=!1){return Jc(e)||Pr(e)||!Wn(e)||(qc(e)>1&&(e.set=e.add=e.clear=e.delete=rL),Object.freeze(e),t&&oa(e,(n,r)=>Xm(r,!0))),e}function rL(){en(2)}function Jc(e){return Object.isFrozen(e)}var iL={};function _i(e){const t=iL[e];return t||en(0,e),t}var aa;function MS(){return aa}function sL(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function m_(e,t){t&&(_i("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Kh(e){Yh(e),e.drafts_.forEach(oL),e.drafts_=null}function Yh(e){e===aa&&(aa=e.parent_)}function g_(e){return aa=sL(aa,e)}function oL(e){const t=e[Nt];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function y_(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return e!==void 0&&e!==n?(n[Nt].modified_&&(Kh(t),en(4)),Wn(e)&&(e=Lu(t,e),t.parent_||Mu(t,e)),t.patches_&&_i("Patches").generateReplacementPatches_(n[Nt].base_,e,t.patches_,t.inversePatches_)):e=Lu(t,n,[]),Kh(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==AS?e:void 0}function Lu(e,t,n){if(Jc(t))return t;const r=t[Nt];if(!r)return oa(t,(i,s)=>v_(e,r,t,i,s,n)),t;if(r.scope_!==e)return t;if(!r.modified_)return Mu(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let s=i,o=!1;r.type_===3&&(s=new Set(i),i.clear(),o=!0),oa(s,(a,l)=>v_(e,r,i,a,l,n,o)),Mu(e,i,!1),n&&e.patches_&&_i("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function v_(e,t,n,r,i,s,o){if(Pr(i)){const a=s&&t&&t.type_!==3&&!Hh(t.assigned_,r)?s.concat(r):void 0,l=Lu(e,i,a);if(LS(n,r,l),Pr(l))e.canAutoFreeze_=!1;else return}else o&&n.add(i);if(Wn(i)&&!Jc(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Lu(e,i),(!t||!t.scope_.parent_)&&Mu(e,i)}}function Mu(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Xm(t,n)}function aL(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:MS(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,s=Jm;n&&(i=[r],s=la);const{revoke:o,proxy:a}=Proxy.revocable(i,s);return r.draft_=a,r.revoke_=o,a}var Jm={get(e,t){if(t===Nt)return e;const n=qr(e);if(!Hh(n,t))return lL(e,n,t);const r=n[t];return e.finalized_||!Wn(r)?r:r===df(e.base_,t)?(ff(e),e.copy_[t]=Qh(r,e)):r},has(e,t){return t in qr(e)},ownKeys(e){return Reflect.ownKeys(qr(e))},set(e,t,n){const r=FS(qr(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=df(qr(e),t),s=i==null?void 0:i[Nt];if(s&&s.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(nL(n,i)&&(n!==void 0||Hh(e.base_,t)))return!0;ff(e),qh(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty(e,t){return df(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,ff(e),qh(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=qr(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty(){en(11)},getPrototypeOf(e){return Ps(e.base_)},setPrototypeOf(){en(12)}},la={};oa(Jm,(e,t)=>{la[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});la.deleteProperty=function(e,t){return la.set.call(this,e,t,void 0)};la.set=function(e,t,n){return Jm.set.call(this,e[0],t,n,e[0])};function df(e,t){const n=e[Nt];return(n?qr(n):e)[t]}function lL(e,t,n){var i;const r=FS(t,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function FS(e,t){if(!(t in e))return;let n=Ps(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Ps(n)}}function qh(e){e.modified_||(e.modified_=!0,e.parent_&&qh(e.parent_))}function ff(e){e.copy_||(e.copy_=Gh(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var uL=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,n,r)=>{if(typeof t=="function"&&typeof n!="function"){const s=n;n=t;const o=this;return function(l=s,...u){return o.produce(l,c=>n.call(this,c,...u))}}typeof n!="function"&&en(6),r!==void 0&&typeof r!="function"&&en(7);let i;if(Wn(t)){const s=g_(this),o=Qh(t,void 0);let a=!0;try{i=n(o),a=!1}finally{a?Kh(s):Yh(s)}return m_(s,r),y_(i,s)}else if(!t||typeof t!="object"){if(i=n(t),i===void 0&&(i=t),i===AS&&(i=void 0),this.autoFreeze_&&Xm(i,!0),r){const s=[],o=[];_i("Patches").generateReplacementPatches_(t,i,s,o),r(s,o)}return i}else en(1,t)},this.produceWithPatches=(t,n)=>{if(typeof t=="function")return(o,...a)=>this.produceWithPatches(o,l=>t(l,...a));let r,i;return[this.produce(t,n,(o,a)=>{r=o,i=a}),r,i]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){Wn(e)||en(8),Pr(e)&&(e=$S(e));const t=g_(this),n=Qh(e,void 0);return n[Nt].isManual_=!0,Yh(t),n}finishDraft(e,t){const n=e&&e[Nt];(!n||!n.isManual_)&&en(9);const{scope_:r}=n;return m_(r,t),y_(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=_i("Patches").applyPatches_;return Pr(e)?r(e,t):this.produce(e,i=>r(i,t))}};function Qh(e,t){const n=Qc(e)?_i("MapSet").proxyMap_(e,t):Xc(e)?_i("MapSet").proxySet_(e,t):aL(e,t);return(t?t.scope_:MS()).drafts_.push(n),n}function $S(e){return Pr(e)||en(10,e),jS(e)}function jS(e){if(!Wn(e)||Jc(e))return e;const t=e[Nt];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Gh(e,t.scope_.immer_.useStrictShallowCopy_)}else n=Gh(e,!0);return oa(n,(r,i)=>{LS(n,r,jS(i))}),t&&(t.finalized_=!1),n}var At=new uL,US=At.produce;At.produceWithPatches.bind(At);At.setAutoFreeze.bind(At);At.setUseStrictShallowCopy.bind(At);At.applyPatches.bind(At);At.createDraft.bind(At);At.finishDraft.bind(At);function cL(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function dL(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function fL(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(n=>typeof n=="function")){const n=e.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${t}[${n}]`)}}var __=e=>Array.isArray(e)?e:[e];function hL(e){const t=Array.isArray(e[0])?e[0]:e;return fL(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function pL(e,t){const n=[],{length:r}=e;for(let i=0;i<r;i++)n.push(e[i].apply(null,t));return n}var mL=class{constructor(e){this.value=e}deref(){return this.value}},gL=typeof WeakRef<"u"?WeakRef:mL,yL=0,w_=1;function pl(){return{s:yL,v:void 0,o:null,p:null}}function Zm(e,t={}){let n=pl();const{resultEqualityCheck:r}=t;let i,s=0;function o(){var d;let a=n;const{length:l}=arguments;for(let f=0,m=l;f<m;f++){const g=arguments[f];if(typeof g=="function"||typeof g=="object"&&g!==null){let _=a.o;_===null&&(a.o=_=new WeakMap);const w=_.get(g);w===void 0?(a=pl(),_.set(g,a)):a=w}else{let _=a.p;_===null&&(a.p=_=new Map);const w=_.get(g);w===void 0?(a=pl(),_.set(g,a)):a=w}}const u=a;let c;if(a.s===w_?c=a.v:(c=e.apply(null,arguments),s++),u.s=w_,r){const f=((d=i==null?void 0:i.deref)==null?void 0:d.call(i))??i;f!=null&&r(f,c)&&(c=f,s!==0&&s--),i=typeof c=="object"&&c!==null||typeof c=="function"?new gL(c):c}return u.v=c,c}return o.clearCache=()=>{n=pl(),o.resetResultsCount()},o.resultsCount=()=>s,o.resetResultsCount=()=>{s=0},o}function zS(e,...t){const n=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,r=(...i)=>{let s=0,o=0,a,l={},u=i.pop();typeof u=="object"&&(l=u,u=i.pop()),cL(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const c={...n,...l},{memoize:d,memoizeOptions:f=[],argsMemoize:m=Zm,argsMemoizeOptions:g=[],devModeChecks:_={}}=c,w=__(f),p=__(g),h=hL(i),v=d(function(){return s++,u.apply(null,arguments)},...w),x=m(function(){o++;const C=pL(h,arguments);return a=v.apply(null,C),a},...p);return Object.assign(x,{resultFunc:u,memoizedResultFunc:v,dependencies:h,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>a,recomputations:()=>s,resetRecomputations:()=>{s=0},memoize:d,argsMemoize:m})};return Object.assign(r,{withTypes:()=>r}),r}var vL=zS(Zm),_L=Object.assign((e,t=vL)=>{dL(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const n=Object.keys(e),r=n.map(s=>e[s]);return t(r,(...s)=>s.reduce((o,a,l)=>(o[n[l]]=a,o),{}))},{withTypes:()=>_L});function BS(e){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,e):i(s)}var wL=BS(),xL=BS,SL=(...e)=>{const t=zS(...e);return(...n)=>{const r=t(...n),i=(s,...o)=>r(Pr(s)?$S(s):s,...o);return Object.assign(i,r),i}};SL(Zm);var EL=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Du:Du.apply(null,arguments)},CL=e=>e&&typeof e.match=="function";function wr(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(ln(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>eL(r)&&r.type===e,n}var VS=class go extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,go.prototype)}static get[Symbol.species](){return go}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new go(...t[0].concat(this)):new go(...t.concat(this))}};function x_(e){return Wn(e)?US(e,()=>{}):e}function S_(e,t,n){if(e.has(t)){let i=e.get(t);return n.update&&(i=n.update(i,t,e),e.set(t,i)),i}if(!n.insert)throw new Error(ln(10));const r=n.insert(t,e);return e.set(t,r),r}function TL(e){return typeof e=="boolean"}var bL=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=t??{};let o=new VS;return n&&(TL(n)?o.push(wL):o.push(xL(n.extraArgument))),o},kL="RTK_autoBatch",WS=e=>t=>{setTimeout(t,e)},IL=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:WS(10),PL=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,s=!1,o=!1;const a=new Set,l=e.type==="tick"?queueMicrotask:e.type==="raf"?IL:e.type==="callback"?e.queueNotification:WS(e.timeout),u=()=>{o=!1,s&&(s=!1,a.forEach(c=>c()))};return Object.assign({},r,{subscribe(c){const d=()=>i&&c(),f=r.subscribe(d);return a.add(c),()=>{f(),a.delete(c)}},dispatch(c){var d;try{return i=!((d=c==null?void 0:c.meta)!=null&&d[kL]),s=!i,s&&(o||(o=!0,l(u))),r.dispatch(c)}finally{i=!0}}})},OL=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new VS(e);return r&&i.push(PL(typeof r=="object"?r:void 0)),i},RL=!0;function NL(e){const t=bL(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=e||{};let a;if(typeof n=="function")a=n;else if(qm(n))a=NS(n);else throw new Error(ln(1));let l;typeof r=="function"?l=r(t):l=t();let u=Du;i&&(u=EL({trace:!RL,...typeof i=="object"&&i}));const c=ZD(...l),d=OL(c);let f=typeof o=="function"?o(d):d();const m=u(...f);return Qm(a,s,m)}function HS(e){const t={},n=[];let r;const i={addCase(s,o){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(ln(28));if(a in t)throw new Error(ln(29));return t[a]=o,i},addMatcher(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return e(i),[t,n,r]}function AL(e){return typeof e=="function"}function DL(e,t){let[n,r,i]=HS(t),s;if(AL(e))s=()=>x_(e());else{const a=x_(e);s=()=>a}function o(a=s(),l){let u=[n[l.type],...r.filter(({matcher:c})=>c(l)).map(({reducer:c})=>c)];return u.filter(c=>!!c).length===0&&(u=[i]),u.reduce((c,d)=>{if(d)if(Pr(c)){const m=d(c,l);return m===void 0?c:m}else{if(Wn(c))return US(c,f=>d(f,l));{const f=d(c,l);if(f===void 0){if(c===null)return c;throw new Error(ln(9))}return f}}return c},a)}return o.getInitialState=s,o}var LL="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",ML=(e=21)=>{let t="",n=e;for(;n--;)t+=LL[Math.random()*64|0];return t},FL=(e,t)=>CL(e)?e.match(t):e(t);function $L(...e){return t=>e.some(n=>FL(n,t))}var jL=["name","message","stack","code"],hf=class{constructor(e,t){xd(this,"_type");this.payload=e,this.meta=t}},E_=class{constructor(e,t){xd(this,"_type");this.payload=e,this.meta=t}},UL=e=>{if(typeof e=="object"&&e!==null){const t={};for(const n of jL)typeof e[n]=="string"&&(t[n]=e[n]);return t}return{message:String(e)}},Zc=(()=>{function e(t,n,r){const i=wr(t+"/fulfilled",(l,u,c,d)=>({payload:l,meta:{...d||{},arg:c,requestId:u,requestStatus:"fulfilled"}})),s=wr(t+"/pending",(l,u,c)=>({payload:void 0,meta:{...c||{},arg:u,requestId:l,requestStatus:"pending"}})),o=wr(t+"/rejected",(l,u,c,d,f)=>({payload:d,error:(r&&r.serializeError||UL)(l||"Rejected"),meta:{...f||{},arg:c,requestId:u,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(l==null?void 0:l.name)==="AbortError",condition:(l==null?void 0:l.name)==="ConditionError"}}));function a(l){return(u,c,d)=>{const f=r!=null&&r.idGenerator?r.idGenerator(l):ML(),m=new AbortController;let g;function _(p){g=p,m.abort()}const w=async function(){var v,x;let p;try{let E=(v=r==null?void 0:r.condition)==null?void 0:v.call(r,l,{getState:c,extra:d});if(BL(E)&&(E=await E),E===!1||m.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const C=new Promise((S,P)=>m.signal.addEventListener("abort",()=>P({name:"AbortError",message:g||"Aborted"})));u(s(f,l,(x=r==null?void 0:r.getPendingMeta)==null?void 0:x.call(r,{requestId:f,arg:l},{getState:c,extra:d}))),p=await Promise.race([C,Promise.resolve(n(l,{dispatch:u,getState:c,extra:d,requestId:f,signal:m.signal,abort:_,rejectWithValue:(S,P)=>new hf(S,P),fulfillWithValue:(S,P)=>new E_(S,P)})).then(S=>{if(S instanceof hf)throw S;return S instanceof E_?i(S.payload,f,l,S.meta):i(S,f,l)})])}catch(E){p=E instanceof hf?o(null,f,l,E.payload,E.meta):o(E,f,l)}return r&&!r.dispatchConditionRejection&&o.match(p)&&p.meta.condition||u(p),p}();return Object.assign(w,{abort:_,requestId:f,arg:l,unwrap(){return w.then(zL)}})}}return Object.assign(a,{pending:s,rejected:o,fulfilled:i,settled:$L(o,i),typePrefix:t})}return e.withTypes=()=>e,e})();function zL(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function BL(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var VL=Symbol.for("rtk-slice-createasyncthunk");function WL(e,t){return`${e}/${t}`}function HL({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[VL];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(ln(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(KL()):i.reducers)||{},l=Object.keys(a),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(w,p){const h=typeof w=="string"?w:w.type;if(!h)throw new Error(ln(12));if(h in u.sliceCaseReducersByType)throw new Error(ln(13));return u.sliceCaseReducersByType[h]=p,c},addMatcher(w,p){return u.sliceMatchers.push({matcher:w,reducer:p}),c},exposeAction(w,p){return u.actionCreators[w]=p,c},exposeCaseReducer(w,p){return u.sliceCaseReducersByName[w]=p,c}};l.forEach(w=>{const p=a[w],h={reducerName:w,type:WL(s,w),createNotation:typeof i.reducers=="function"};qL(p)?XL(h,p,c,t):YL(h,p,c)});function d(){const[w={},p=[],h=void 0]=typeof i.extraReducers=="function"?HS(i.extraReducers):[i.extraReducers],v={...w,...u.sliceCaseReducersByType};return DL(i.initialState,x=>{for(let E in v)x.addCase(E,v[E]);for(let E of u.sliceMatchers)x.addMatcher(E.matcher,E.reducer);for(let E of p)x.addMatcher(E.matcher,E.reducer);h&&x.addDefaultCase(h)})}const f=w=>w,m=new WeakMap;let g;const _={name:s,reducerPath:o,reducer(w,p){return g||(g=d()),g(w,p)},actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState(){return g||(g=d()),g.getInitialState()},getSelectors(w=f){const p=S_(m,this,{insert:()=>new WeakMap});return S_(p,w,{insert:()=>{const h={};for(const[v,x]of Object.entries(i.selectors??{}))h[v]=GL(this,x,w,this!==_);return h}})},selectSlice(w){let p=w[this.reducerPath];return typeof p>"u"&&this!==_&&(p=this.getInitialState()),p},get selectors(){return this.getSelectors(this.selectSlice)},injectInto(w,{reducerPath:p,...h}={}){const v=p??this.reducerPath;return w.inject({reducerPath:v,reducer:this.reducer},h),{...this,reducerPath:v}}};return _}}function GL(e,t,n,r){function i(s,...o){let a=n.call(e,s);return typeof a>"u"&&r&&(a=e.getInitialState()),t(a,...o)}return i.unwrapped=t,i}var GS=HL();function KL(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function YL({type:e,reducerName:t,createNotation:n},r,i){let s,o;if("reducer"in r){if(n&&!QL(r))throw new Error(ln(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(e,s).exposeCaseReducer(t,s).exposeAction(t,o?wr(e,o):wr(e))}function qL(e){return e._reducerDefinitionType==="asyncThunk"}function QL(e){return e._reducerDefinitionType==="reducerWithPrepare"}function XL({type:e,reducerName:t},n,r,i){if(!i)throw new Error(ln(18));const{payloadCreator:s,fulfilled:o,pending:a,rejected:l,settled:u,options:c}=n,d=i(e,s,c);r.exposeAction(t,d),o&&r.addCase(d.fulfilled,o),a&&r.addCase(d.pending,a),l&&r.addCase(d.rejected,l),u&&r.addMatcher(d.settled,u),r.exposeCaseReducer(t,{fulfilled:o||ml,pending:a||ml,rejected:l||ml,settled:u||ml})}function ml(){}var eg="listenerMiddleware";wr(`${eg}/add`);wr(`${eg}/removeAll`);wr(`${eg}/remove`);function ln(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(e,t){if(!e)throw Ws(t)},Ws=function(e){return new Error("Firebase Database ("+KS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},JL=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},tg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(f=64)),r.push(n[c],n[d],n[f],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(YS(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):JL(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new ZL;const f=s<<2|a>>4;if(r.push(f),u!==64){const m=a<<4&240|u>>2;if(r.push(m),d!==64){const g=u<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class ZL extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qS=function(e){const t=YS(e);return tg.encodeByteArray(t,!0)},Fu=function(e){return qS(e).replace(/\./g,"")},$u=function(e){try{return tg.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eM(e){return QS(void 0,e)}function QS(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!tM(n)||(e[n]=QS(e[n],t[n]));return e}function tM(e){return e!=="__proto__"}/**
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
 */function nM(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rM=()=>nM().__FIREBASE_DEFAULTS__,iM=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},sM=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&$u(e[1]);return t&&JSON.parse(t)},ng=()=>{try{return rM()||iM()||sM()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},oM=e=>{var t,n;return(n=(t=ng())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},aM=e=>{const t=oM(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},XS=()=>{var e;return(e=ng())===null||e===void 0?void 0:e.config},lM=e=>{var t;return(t=ng())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function uM(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Fu(JSON.stringify(n)),Fu(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ig(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(En())}function cM(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function JS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ZS(){return KS.NODE_ADMIN===!0}function dM(){try{return typeof indexedDB=="object"}catch{return!1}}function fM(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hM="FirebaseError";class $r extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=hM,Object.setPrototypeOf(this,$r.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,La.prototype.create)}}class La{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?pM(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new $r(i,a,r)}}function pM(e,t){return e.replace(mM,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const mM=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(e){return JSON.parse(e)}function Oe(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE=function(e){let t={},n={},r={},i="";try{const s=e.split(".");t=ua($u(s[0])||""),n=ua($u(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:r,signature:i}},gM=function(e){const t=eE(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},yM=function(e){const t=eE(e).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Os(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function C_(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ju(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function Uu(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(T_(s)&&T_(o)){if(!Uu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function T_(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function yo(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function vo(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vM{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const r=this.W_;if(typeof t=="string")for(let d=0;d<16;d++)r[d]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<n;)if(s[o]=t.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=t[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)t[r]=this.chain_[i]>>s&255,++r;return t}}function _M(e,t){const n=new wM(e,t);return n.subscribe.bind(n)}class wM{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");xM(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=pf),i.error===void 0&&(i.error=pf),i.complete===void 0&&(i.complete=pf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xM(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function pf(){}function tE(e,t){return`${e} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SM=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,I(r<e.length,"Surrogate pair missing trail surrogate.");const o=e.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},td=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};/**
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
 */function Gt(e){return e&&e._delegate?e._delegate:e}class wi{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */let EM=class{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new rg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(TM(t))try{this.getOrInitializeService({instanceIdentifier:Qr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Qr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Qr){return this.instances.has(t)}getOptions(t=Qr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:CM(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Qr){return this.component?this.component.multipleInstances?t:Qr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function CM(e){return e===Qr?void 0:e}function TM(e){return e.instantiationMode==="EAGER"}/**
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
 */class bM{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new EM(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ae||(ae={}));const kM={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},IM=ae.INFO,PM={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},OM=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=PM[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class sg{constructor(t){this.name=t,this._logLevel=IM,this._logHandler=OM,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ae))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?kM[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...t),this._logHandler(this,ae.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...t),this._logHandler(this,ae.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...t),this._logHandler(this,ae.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...t),this._logHandler(this,ae.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...t),this._logHandler(this,ae.ERROR,...t)}}const RM=(e,t)=>t.some(n=>e instanceof n);let b_,k_;function NM(){return b_||(b_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function AM(){return k_||(k_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nE=new WeakMap,Xh=new WeakMap,rE=new WeakMap,mf=new WeakMap,og=new WeakMap;function DM(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(xr(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&nE.set(n,e)}).catch(()=>{}),og.set(t,e),t}function LM(e){if(Xh.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Xh.set(e,t)}let Jh={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Xh.get(e);if(t==="objectStoreNames")return e.objectStoreNames||rE.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xr(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function MM(e){Jh=e(Jh)}function FM(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(gf(this),t,...n);return rE.set(r,t.sort?t.sort():[t]),xr(r)}:AM().includes(e)?function(...t){return e.apply(gf(this),t),xr(nE.get(this))}:function(...t){return xr(e.apply(gf(this),t))}}function $M(e){return typeof e=="function"?FM(e):(e instanceof IDBTransaction&&LM(e),RM(e,NM())?new Proxy(e,Jh):e)}function xr(e){if(e instanceof IDBRequest)return DM(e);if(mf.has(e))return mf.get(e);const t=$M(e);return t!==e&&(mf.set(e,t),og.set(t,e)),t}const gf=e=>og.get(e);function jM(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=xr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(xr(o.result),l.oldVersion,l.newVersion,xr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const UM=["get","getKey","getAll","getAllKeys","count"],zM=["put","add","delete","clear"],yf=new Map;function I_(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(yf.get(t))return yf.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=zM.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||UM.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return yf.set(t,s),s}MM(e=>({...e,get:(t,n,r)=>I_(t,n)||e.get(t,n,r),has:(t,n)=>!!I_(t,n)||e.has(t,n)}));/**
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
 */class BM{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(VM(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function VM(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Zh="@firebase/app",P_="0.9.25";/**
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
 */const xi=new sg("@firebase/app"),WM="@firebase/app-compat",HM="@firebase/analytics-compat",GM="@firebase/analytics",KM="@firebase/app-check-compat",YM="@firebase/app-check",qM="@firebase/auth",QM="@firebase/auth-compat",XM="@firebase/database",JM="@firebase/database-compat",ZM="@firebase/functions",eF="@firebase/functions-compat",tF="@firebase/installations",nF="@firebase/installations-compat",rF="@firebase/messaging",iF="@firebase/messaging-compat",sF="@firebase/performance",oF="@firebase/performance-compat",aF="@firebase/remote-config",lF="@firebase/remote-config-compat",uF="@firebase/storage",cF="@firebase/storage-compat",dF="@firebase/firestore",fF="@firebase/firestore-compat",hF="firebase",pF="10.7.1";/**
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
 */const ep="[DEFAULT]",mF={[Zh]:"fire-core",[WM]:"fire-core-compat",[GM]:"fire-analytics",[HM]:"fire-analytics-compat",[YM]:"fire-app-check",[KM]:"fire-app-check-compat",[qM]:"fire-auth",[QM]:"fire-auth-compat",[XM]:"fire-rtdb",[JM]:"fire-rtdb-compat",[ZM]:"fire-fn",[eF]:"fire-fn-compat",[tF]:"fire-iid",[nF]:"fire-iid-compat",[rF]:"fire-fcm",[iF]:"fire-fcm-compat",[sF]:"fire-perf",[oF]:"fire-perf-compat",[aF]:"fire-rc",[lF]:"fire-rc-compat",[uF]:"fire-gcs",[cF]:"fire-gcs-compat",[dF]:"fire-fst",[fF]:"fire-fst-compat","fire-js":"fire-js",[hF]:"fire-js-all"};/**
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
 */const zu=new Map,tp=new Map;function gF(e,t){try{e.container.addComponent(t)}catch(n){xi.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Rs(e){const t=e.name;if(tp.has(t))return xi.debug(`There were multiple attempts to register component ${t}.`),!1;tp.set(t,e);for(const n of zu.values())gF(n,e);return!0}function iE(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const yF={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Sr=new La("app","Firebase",yF);/**
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
 */class vF{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Sr.create("app-deleted",{appName:this._name})}}/**
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
 */const nd=pF;function sE(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ep,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Sr.create("bad-app-name",{appName:String(i)});if(n||(n=XS()),!n)throw Sr.create("no-options");const s=zu.get(i);if(s){if(Uu(n,s.options)&&Uu(r,s.config))return s;throw Sr.create("duplicate-app",{appName:i})}const o=new bM(i);for(const l of tp.values())o.addComponent(l);const a=new vF(n,r,o);return zu.set(i,a),a}function _F(e=ep){const t=zu.get(e);if(!t&&e===ep&&XS())return sE();if(!t)throw Sr.create("no-app",{appName:e});return t}function Er(e,t,n){var r;let i=(r=mF[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),xi.warn(a.join(" "));return}Rs(new wi(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const wF="firebase-heartbeat-database",xF=1,ca="firebase-heartbeat-store";let vf=null;function oE(){return vf||(vf=jM(wF,xF,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ca)}}}).catch(e=>{throw Sr.create("idb-open",{originalErrorMessage:e.message})})),vf}async function SF(e){try{return await(await oE()).transaction(ca).objectStore(ca).get(aE(e))}catch(t){if(t instanceof $r)xi.warn(t.message);else{const n=Sr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});xi.warn(n.message)}}}async function O_(e,t){try{const r=(await oE()).transaction(ca,"readwrite");await r.objectStore(ca).put(t,aE(e)),await r.done}catch(n){if(n instanceof $r)xi.warn(n.message);else{const r=Sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xi.warn(r.message)}}}function aE(e){return`${e.name}!${e.options.appId}`}/**
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
 */const EF=1024,CF=30*24*60*60*1e3;class TF{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kF(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=R_();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=CF}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=R_(),{heartbeatsToSend:r,unsentEntries:i}=bF(this._heartbeatsCache.heartbeats),s=Fu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function R_(){return new Date().toISOString().substring(0,10)}function bF(e,t=EF){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),N_(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),N_(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class kF{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dM()?fM().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await SF(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return O_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return O_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function N_(e){return Fu(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function IF(e){Rs(new wi("platform-logger",t=>new BM(t),"PRIVATE")),Rs(new wi("heartbeat",t=>new TF(t),"PRIVATE")),Er(Zh,P_,e),Er(Zh,P_,"esm2017"),Er("fire-js","")}IF("");function lE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const PF=lE,uE=new La("auth","Firebase",lE());/**
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
 */const Bu=new sg("@firebase/auth");function OF(e,...t){Bu.logLevel<=ae.WARN&&Bu.warn(`Auth (${nd}): ${e}`,...t)}function Bl(e,...t){Bu.logLevel<=ae.ERROR&&Bu.error(`Auth (${nd}): ${e}`,...t)}/**
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
 */function Si(e,...t){throw lg(e,...t)}function ag(e,...t){return lg(e,...t)}function RF(e,t,n){const r=Object.assign(Object.assign({},PF()),{[t]:n});return new La("auth","Firebase",r).create(t,{appName:e.name})}function lg(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return uE.create(e,...t)}function ee(e,t,...n){if(!e)throw lg(t,...n)}function Mn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Bl(t),new Error(t)}function Vu(e,t){e||Mn(t)}function NF(){return A_()==="http:"||A_()==="https:"}function A_(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function AF(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(NF()||cM()||"connection"in navigator)?navigator.onLine:!0}function DF(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Ma{constructor(t,n){this.shortDelay=t,this.longDelay=n,Vu(n>t,"Short delay should be less than long delay!"),this.isMobile=ig()||JS()}get(){return AF()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function LF(e,t){Vu(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class cE{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const MF={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const FF=new Ma(3e4,6e4);function jr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ur(e,t,n,r,i={}){return dE(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=ed(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),cE.fetch()(fE(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function dE(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},MF),t);try{const i=new jF(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw gl(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw gl(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw gl(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw gl(e,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw RF(e,c,u);Si(e,c)}}catch(i){if(i instanceof $r)throw i;Si(e,"network-request-failed",{message:String(i)})}}async function Fa(e,t,n,r,i={}){const s=await Ur(e,t,n,r,i);return"mfaPendingCredential"in s&&Si(e,"multi-factor-auth-required",{_serverResponse:s}),s}function fE(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?LF(e.config,i):`${e.config.apiScheme}://${i}`}function $F(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jF{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ag(this.auth,"network-request-failed")),FF.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function gl(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ag(e,t,r);return i.customData._tokenResponse=n,i}function D_(e){return e!==void 0&&e.enterprise!==void 0}class UF{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return $F(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function zF(e,t){return Ur(e,"GET","/v2/recaptchaConfig",jr(e,t))}/**
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
 */async function BF(e,t){return Ur(e,"POST","/v1/accounts:delete",t)}async function VF(e,t){return Ur(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Ro(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function WF(e,t=!1){const n=Gt(e),r=await n.getIdToken(t),i=hE(r);ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ro(_f(i.auth_time)),issuedAtTime:Ro(_f(i.iat)),expirationTime:Ro(_f(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function _f(e){return Number(e)*1e3}function hE(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Bl("JWT malformed, contained fewer than 3 sections"),null;try{const i=$u(n);return i?JSON.parse(i):(Bl("Failed to decode base64 JWT payload"),null)}catch(i){return Bl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function HF(e){const t=hE(e);return ee(t,"internal-error"),ee(typeof t.exp<"u","internal-error"),ee(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Wu(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof $r&&GF(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function GF({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class KF{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class pE{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ro(this.lastLoginAt),this.creationTime=Ro(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Hu(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Wu(e,VF(n,{idToken:r}));ee(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?QF(s.providerUserInfo):[],a=qF(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new pE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function YF(e){const t=Gt(e);await Hu(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function qF(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function QF(e){return e.map(t=>{var{providerId:n}=t,r=Cm(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function XF(e,t){const n=await dE(e,{},async()=>{const r=ed({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=fE(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",cE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function JF(e,t){return Ur(e,"POST","/v2/accounts:revokeToken",jr(e,t))}/**
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
 */class da{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ee(t.idToken,"internal-error"),ee(typeof t.idToken<"u","internal-error"),ee(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):HF(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return ee(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await XF(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new da;return r&&(ee(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(ee(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(ee(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new da,this.toJSON())}_performRefresh(){return Mn("not implemented")}}/**
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
 */function Jn(e,t){ee(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class di{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Cm(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new KF(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new pE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Wu(this,this.stsTokenManager.getToken(this.auth,t));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return WF(this,t)}reload(){return YF(this)}_assign(t){this!==t&&(ee(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new di(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Hu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Wu(this,BF(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:x,isAnonymous:E,providerData:C,stsTokenManager:S}=n;ee(v&&S,t,"internal-error");const P=da.fromJSON(this.name,S);ee(typeof v=="string",t,"internal-error"),Jn(d,t.name),Jn(f,t.name),ee(typeof x=="boolean",t,"internal-error"),ee(typeof E=="boolean",t,"internal-error"),Jn(m,t.name),Jn(g,t.name),Jn(_,t.name),Jn(w,t.name),Jn(p,t.name),Jn(h,t.name);const F=new di({uid:v,auth:t,email:f,emailVerified:x,displayName:d,isAnonymous:E,photoURL:g,phoneNumber:m,tenantId:_,stsTokenManager:P,createdAt:p,lastLoginAt:h});return C&&Array.isArray(C)&&(F.providerData=C.map(L=>Object.assign({},L))),w&&(F._redirectEventId=w),F}static async _fromIdTokenResponse(t,n,r=!1){const i=new da;i.updateFromServerResponse(n);const s=new di({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Hu(s),s}}/**
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
 */const L_=new Map;function ri(e){Vu(e instanceof Function,"Expected a class definition");let t=L_.get(e);return t?(Vu(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,L_.set(e,t),t)}/**
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
 */class mE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}mE.type="NONE";const M_=mE;/**
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
 */function wf(e,t,n){return`firebase:${e}:${t}:${n}`}class ds{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=wf(this.userKey,i.apiKey,s),this.fullPersistenceKey=wf("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?di._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new ds(ri(M_),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||ri(M_);const o=wf(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=di._fromJSON(t,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ds(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ds(s,t,r))}}/**
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
 */function F_(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(n$(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ZF(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(i$(t))return"Blackberry";if(s$(t))return"Webos";if(e$(t))return"Safari";if((t.includes("chrome/")||t$(t))&&!t.includes("edge/"))return"Chrome";if(r$(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ZF(e=En()){return/firefox\//i.test(e)}function e$(e=En()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function t$(e=En()){return/crios\//i.test(e)}function n$(e=En()){return/iemobile/i.test(e)}function r$(e=En()){return/android/i.test(e)}function i$(e=En()){return/blackberry/i.test(e)}function s$(e=En()){return/webos/i.test(e)}/**
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
 */function gE(e,t=[]){let n;switch(e){case"Browser":n=F_(En());break;case"Worker":n=`${F_(En())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${nd}/${r}`}/**
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
 */class o${constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function a$(e,t={}){return Ur(e,"GET","/v2/passwordPolicy",jr(e,t))}/**
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
 */const l$=6;class u${constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:l$,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class c${constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $_(this),this.idTokenSubscription=new $_(this),this.beforeStateQueue=new o$(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=uE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ri(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ds.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Hu(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=DF()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Gt(t):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&ee(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ri(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await a$(this),n=new u$(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new La("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await JF(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ri(t)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await ds.create(this,[ri(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=gE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&OF(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function $a(e){return Gt(e)}class $_{constructor(t){this.auth=t,this.observer=null,this.addObserver=_M(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function d$(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function f$(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=ag("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",d$().appendChild(r)})}const h$="https://www.google.com/recaptcha/enterprise.js?render=",p$="recaptcha-enterprise",m$="NO_RECAPTCHA";class g${constructor(t){this.type=p$,this.auth=$a(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{zF(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new UF(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;D_(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o(m$)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&D_(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}f$(h$+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function j_(e,t,n,r=!1){const i=new g$(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function np(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await j_(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await j_(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(s)})}/**
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
 */function y$(e,t){const n=iE(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Uu(s,t??{}))return i;Si(i,"already-initialized")}return n.initialize({options:t})}function v$(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ri);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
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
 */class yE{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Mn("not implemented")}_getIdTokenResponse(t){return Mn("not implemented")}_linkToIdToken(t,n){return Mn("not implemented")}_getReauthenticationResolver(t){return Mn("not implemented")}}async function _$(e,t){return Ur(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function w$(e,t){return Fa(e,"POST","/v1/accounts:signInWithPassword",jr(e,t))}/**
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
 */async function x$(e,t){return Fa(e,"POST","/v1/accounts:signInWithEmailLink",jr(e,t))}async function S$(e,t){return Fa(e,"POST","/v1/accounts:signInWithEmailLink",jr(e,t))}/**
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
 */class fa extends yE{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new fa(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new fa(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return np(t,n,"signInWithPassword",w$);case"emailLink":return x$(t,{email:this._email,oobCode:this._password});default:Si(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return np(t,r,"signUpPassword",_$);case"emailLink":return S$(t,{idToken:n,email:this._email,oobCode:this._password});default:Si(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function xf(e,t){return Fa(e,"POST","/v1/accounts:signInWithIdp",jr(e,t))}/**
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
 */const E$="http://localhost";class Ei extends yE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Ei(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Si("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Cm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ei(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return xf(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,xf(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,xf(t,n)}buildRequest(){const t={requestUri:E$,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ed(n)}return t}}/**
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
 */function C$(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function T$(e){const t=yo(vo(e)).link,n=t?yo(vo(t)).deep_link_id:null,r=yo(vo(e)).deep_link_id;return(r?yo(vo(r)).link:null)||r||n||t||e}class ug{constructor(t){var n,r,i,s,o,a;const l=yo(vo(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=C$((i=l.mode)!==null&&i!==void 0?i:null);ee(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=T$(t);try{return new ug(n)}catch{return null}}}/**
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
 */class Hs{constructor(){this.providerId=Hs.PROVIDER_ID}static credential(t,n){return fa._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=ug.parseLink(n);return ee(r,"argument-error"),fa._fromEmailAndCode(t,r.code,r.tenantId)}}Hs.PROVIDER_ID="password";Hs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class b${constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class rd extends b${constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class ir extends rd{constructor(){super("facebook.com")}static credential(t){return Ei._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ir.credentialFromTaggedObject(t)}static credentialFromError(t){return ir.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ir.credential(t.oauthAccessToken)}catch{return null}}}ir.FACEBOOK_SIGN_IN_METHOD="facebook.com";ir.PROVIDER_ID="facebook.com";/**
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
 */class An extends rd{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Ei._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return An.credentialFromTaggedObject(t)}static credentialFromError(t){return An.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return An.credential(n,r)}catch{return null}}}An.GOOGLE_SIGN_IN_METHOD="google.com";An.PROVIDER_ID="google.com";/**
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
 */class sr extends rd{constructor(){super("github.com")}static credential(t){return Ei._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return sr.credentialFromTaggedObject(t)}static credentialFromError(t){return sr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return sr.credential(t.oauthAccessToken)}catch{return null}}}sr.GITHUB_SIGN_IN_METHOD="github.com";sr.PROVIDER_ID="github.com";/**
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
 */class or extends rd{constructor(){super("twitter.com")}static credential(t,n){return Ei._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return or.credentialFromTaggedObject(t)}static credentialFromError(t){return or.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return or.credential(n,r)}catch{return null}}}or.TWITTER_SIGN_IN_METHOD="twitter.com";or.PROVIDER_ID="twitter.com";/**
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
 */async function k$(e,t){return Fa(e,"POST","/v1/accounts:signUp",jr(e,t))}/**
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
 */class ha{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await di._fromIdTokenResponse(t,r,i),o=U_(r);return new ha({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=U_(r);return new ha({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function U_(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Gu extends $r{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Gu.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Gu(t,n,r,i)}}function I$(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Gu._fromErrorAndOperation(e,s,t,r):s})}/**
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
 */async function P$(e,t,n=!1){const r="signIn",i=await I$(e,r,t),s=await ha._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function O$(e,t){return P$($a(e),t)}/**
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
 */async function vE(e){const t=$a(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function R$(e,t,n){const r=$a(e),o=await np(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",k$).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&vE(e),l}),a=await ha._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function N$(e,t,n){return O$(Gt(e),Hs.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&vE(e),r})}/**
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
 */async function A$(e,t){return Ur(e,"POST","/v1/accounts:update",t)}/**
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
 */async function D$(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=Gt(e),s={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},o=await Wu(r,A$(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function L$(e){return Gt(e).signOut()}new Ma(3e4,6e4);/**
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
 */new Ma(5e3,15e3);var z_="@firebase/auth",B_="1.5.1";/**
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
 */class M${constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function F$(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function $$(e){Rs(new wi("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gE(e)},u=new c$(r,i,s,l);return v$(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Rs(new wi("auth-internal",t=>{const n=$a(t.getProvider("auth").getImmediate());return(r=>new M$(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Er(z_,B_,F$(e)),Er(z_,B_,"esm2017")}/**
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
 */const j$=5*60;lM("authIdTokenMaxAge");$$("Browser");var U$="firebase",z$="10.7.1";/**
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
 */Er(U$,z$,"app");const V_="@firebase/database",W_="1.0.2";/**
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
 */let _E="";function B$(e){_E=e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V${constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),Oe(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:ua(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W${constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return qn(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new V$(t)}}catch{}return new W$},ii=wE("localStorage"),rp=wE("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=new sg("@firebase/database"),H$=function(){let e=1;return function(){return e++}}(),xE=function(e){const t=SM(e),n=new vM;n.update(t);const r=n.digest();return tg.encodeByteArray(r)},ja=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?t+=ja.apply(null,r):typeof r=="object"?t+=Oe(r):t+=r,t+=" "}return t};let fi=null,H_=!0;const G$=function(e,t){I(!t||e===!0||e===!1,"Can't turn on custom loggers persistently."),e===!0?(fs.logLevel=ae.VERBOSE,fi=fs.log.bind(fs),t&&rp.set("logging_enabled",!0)):typeof e=="function"?fi=e:(fi=null,rp.remove("logging_enabled"))},et=function(...e){if(H_===!0&&(H_=!1,fi===null&&rp.get("logging_enabled")===!0&&G$(!0)),fi){const t=ja.apply(null,e);fi(t)}},Ua=function(e){return function(...t){et(e,...t)}},ip=function(...e){const t="FIREBASE INTERNAL ERROR: "+ja(...e);fs.error(t)},Hn=function(...e){const t=`FIREBASE FATAL ERROR: ${ja(...e)}`;throw fs.error(t),new Error(t)},Pt=function(...e){const t="FIREBASE WARNING: "+ja(...e);fs.warn(t)},K$=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Pt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},SE=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Y$=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ns="[MIN_NAME]",Ci="[MAX_NAME]",Gs=function(e,t){if(e===t)return 0;if(e===Ns||t===Ci)return-1;if(t===Ns||e===Ci)return 1;{const n=G_(e),r=G_(t);return n!==null?r!==null?n-r===0?e.length-t.length:n-r:-1:r!==null?1:e<t?-1:1}},q$=function(e,t){return e===t?0:e<t?-1:1},so=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Oe(t))},cg=function(e){if(typeof e!="object"||e===null)return Oe(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)r!==0&&(n+=","),n+=Oe(t[r]),n+=":",n+=cg(e[t[r]]);return n+="}",n},EE=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function _t(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const CE=function(e){I(!SE(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,s,o,a,l;e===0?(s=0,o=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(e)/Math.LN2),r),s=a+r,o=Math.round(e*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(e/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=t;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},Q$=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},X$=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function J$(e,t){let n="Unknown Error";e==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":e==="permission_denied"?n="Client doesn't have permission to access the desired data.":e==="unavailable"&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}const Z$=new RegExp("^-?(0*)\\d{1,10}$"),ej=-2147483648,tj=2147483647,G_=function(e){if(Z$.test(e)){const t=Number(e);if(t>=ej&&t<=tj)return t}return null},za=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw Pt("Exception was thrown by user callback.",n),t},Math.floor(0))}},nj=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},No=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class rj{constructor(t,n){this.appName_=t,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(t))}notifyForInvalidToken(){Pt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ij{constructor(t,n,r){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(et("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Pt(t)}}class hs{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}hs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg="5",TE="v",bE="s",kE="r",IE="f",PE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,OE="ls",RE="p",sp="ac",NE="websocket",AE="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(t,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ii.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&ii.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function sj(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function LE(e,t,n){I(typeof t=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let r;if(t===NE)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===AE)r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);sj(e)&&(n.ns=e.namespace);const i=[];return _t(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oj{constructor(){this.counters_={}}incrementCounter(t,n=1){qn(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return eM(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf={},Ef={};function fg(e){const t=e.toString();return Sf[t]||(Sf[t]=new oj),Sf[t]}function aj(e,t){const n=e.toString();return Ef[n]||(Ef[n]=t()),Ef[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lj{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&za(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_="start",uj="close",cj="pLPCommand",dj="pRTLPCB",ME="id",FE="pw",$E="ser",fj="cb",hj="seg",pj="ts",mj="d",gj="dframe",jE=1870,UE=30,yj=jE-UE,vj=25e3,_j=3e4;class ns{constructor(t,n,r,i,s,o,a){this.connId=t,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ua(t),this.stats_=fg(n),this.urlFn=l=>(this.appCheckToken&&(l[sp]=this.appCheckToken),LE(n,AE,l))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new lj(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(_j)),Y$(()=>{if(this.isClosed_)return;this.scriptTagHolder=new hg((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===K_)this.id=a,this.password=l;else if(o===uj)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[K_]="t",r[$E]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[fj]=this.scriptTagHolder.uniqueCallbackIdentifier),r[TE]=dg,this.transportSessionId&&(r[bE]=this.transportSessionId),this.lastSessionId&&(r[OE]=this.lastSessionId),this.applicationId&&(r[RE]=this.applicationId),this.appCheckToken&&(r[sp]=this.appCheckToken),typeof location<"u"&&location.hostname&&PE.test(location.hostname)&&(r[kE]=IE);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ns.forceAllow_=!0}static forceDisallow(){ns.forceDisallow_=!0}static isAvailable(){return ns.forceAllow_?!0:!ns.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Q$()&&!X$()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=Oe(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=qS(n),i=EE(r,yj);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[gj]="t",r[ME]=t,r[FE]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=Oe(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class hg{constructor(t,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=H$(),window[cj+this.uniqueCallbackIdentifier]=t,window[dj+this.uniqueCallbackIdentifier]=n,this.myIFrame=hg.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){et("frame writing exception"),a.stack&&et(a.stack),et(a)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||et("No IE domain setting required")}catch{const r=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[ME]=this.myID,t[FE]=this.myPW,t[$E]=this.currentSerial;let n=this.urlFn(t),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+UE+r.length<=jE;){const o=this.pendingSegs.shift();r=r+"&"+hj+i+"="+o.seg+"&"+pj+i+"="+o.ts+"&"+mj+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,r){this.pendingSegs.push({seg:t,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(vj)),s=()=>{clearTimeout(i),r()};this.addTag(t,s)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=t,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{et("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wj=16384,xj=45e3;let Ku=null;typeof MozWebSocket<"u"?Ku=MozWebSocket:typeof WebSocket<"u"&&(Ku=WebSocket);class tn{constructor(t,n,r,i,s,o,a){this.connId=t,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ua(this.connId),this.stats_=fg(n),this.connURL=tn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,r,i,s){const o={};return o[TE]=dg,typeof location<"u"&&location.hostname&&PE.test(location.hostname)&&(o[kE]=IE),n&&(o[bE]=n),r&&(o[OE]=r),i&&(o[sp]=i),s&&(o[RE]=s),LE(t,NE,o)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ii.set("previous_websocket_failure",!0);try{let r;ZS(),this.mySock=new Ku(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){tn.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(t=!0)}return!t&&Ku!==null&&!tn.forceDisallow_}static previouslyFailed(){return ii.isInMemoryStorage||ii.get("previous_websocket_failure")===!0}markConnectionHealthy(){ii.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ua(n);this.onMessage(r)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(I(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(t){this.resetKeepAlive();const n=Oe(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=EE(n,wj);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(xj))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}tn.responsesRequiredToBeHealthy=2;tn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[ns,tn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const n=tn&&tn.isAvailable();let r=n&&!tn.previouslyFailed();if(t.webSocketOnly&&(n||Pt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[tn];else{const i=this.transports_=[];for(const s of pa.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);pa.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}pa.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sj=6e4,Ej=5e3,Cj=10*1024,Tj=100*1024,Cf="t",Y_="d",bj="s",q_="r",kj="e",Q_="o",X_="a",J_="n",Z_="p",Ij="h";class Pj{constructor(t,n,r,i,s,o,a,l,u,c){this.id=t,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ua("c:"+this.id+":"),this.transportManager_=new pa(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=No(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Tj?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Cj?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Cf in t){const n=t[Cf];n===X_?this.upgradeIfSecondaryHealthy_():n===q_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Q_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=so("t",t),r=so("d",t);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Z_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:X_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:J_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=so("t",t),r=so("d",t);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=so(Cf,t);if(Y_ in t){const r=t[Y_];if(n===Ij){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===J_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===bj?this.onConnectionShutdown_(r):n===q_?this.onReset_(r):n===kj?ip("Server Error: "+r):n===Q_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ip("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,r=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),dg!==r&&Pt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),No(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Sj))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):No(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ej))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Z_,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ii.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{put(t,n,r,i){}merge(t,n,r,i){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,r){}onDisconnectMerge(t,n,r){}onDisconnectCancel(t,n){}reportStats(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(t){this.allowedEvents_=t,this.listeners_={},I(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const r=[...this.listeners_[t]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(t,n,r){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:r});const i=this.getInitialEvent(t);i&&n.apply(r,i)}off(t,n,r){this.validateEventType_(t);const i=this.listeners_[t]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(t){I(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu extends BE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ig()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Yu}getInitialEvent(t){return I(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0=32,t0=768;class le{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function X(){return new le("")}function q(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Or(e){return e.pieces_.length-e.pieceNum_}function ce(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new le(e.pieces_,t)}function VE(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Oj(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function WE(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function HE(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new le(t,0)}function Re(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof le)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const r=t.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new le(n,0)}function G(e){return e.pieceNum_>=e.pieces_.length}function it(e,t){const n=q(e),r=q(t);if(n===null)return t;if(n===r)return it(ce(e),ce(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function GE(e,t){if(Or(e)!==Or(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function nn(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(Or(e)>Or(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class Rj{constructor(t,n){this.errorPrefix_=n,this.parts_=WE(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=td(this.parts_[r]);KE(this)}}function Nj(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=td(t),KE(e)}function Aj(e){const t=e.parts_.pop();e.byteLength_-=td(t),e.parts_.length>0&&(e.byteLength_-=1)}function KE(e){if(e.byteLength_>t0)throw new Error(e.errorPrefix_+"has a key path longer than "+t0+" bytes ("+e.byteLength_+").");if(e.parts_.length>e0)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+e0+") or object contains a cycle "+Xr(e))}function Xr(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg extends BE{constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[t];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new pg}getInitialEvent(t){return I(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo=1e3,Dj=60*5*1e3,n0=30*1e3,Lj=1.3,Mj=3e4,Fj="server_kill",r0=3;class jn extends zE{constructor(t,n,r,i,s,o,a,l){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=jn.nextPersistentConnectionId_++,this.log_=Ua("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=oo,this.maxReconnectDelay_=Dj,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!ZS())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");pg.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&Yu.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,r){const i=++this.requestNumber_,s={r:i,a:t,b:n};this.log_(Oe(s)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(t){this.initConnection_();const n=new rg,i={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(t,n,r,i){this.initConnection_();const s=t._queryIdentifier,o=t._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),I(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:t,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(t){const n=t.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";t.tag&&(s.q=n._queryObject,s.t=t.tag),s.h=t.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;jn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===t&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),t.onComplete&&t.onComplete(u,l))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&qn(t,"w")){const r=Os(t,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Pt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||yM(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=n0)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=gM(t)?"auth":"gauth",r={cred:t};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===t&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,r=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(t,n){const r=t._path.toString(),i=t._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),I(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,t._queryObject,n)}sendUnlisten_(t,n,r,i){this.log_("Unlisten on "+t+" for "+n);const s={p:t},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:r})}onDisconnectMerge(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:r})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+t,s),this.sendRequest(t,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(t,n,r,i){this.putInternal("p",t,n,r,i)}merge(t,n,r,i){this.putInternal("m",t,n,r,i)}putInternal(t,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:t,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,r=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+Oe(t));const n=t.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):ip("Unrecognized action received from server: "+Oe(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=oo,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=oo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Mj&&(this.reconnectDelay_=oo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Lj)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+jn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?et("getToken() completed but was canceled"):(et("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new Pj(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,r,m=>{Pt(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(Fj)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Pt(d),l())}}}interrupt(t){et("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){et("Resuming connection for reason: "+t),delete this.interruptReasons_[t],C_(this.interruptReasons_)&&(this.reconnectDelay_=oo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let r;n?r=n.map(s=>cg(s)).join("$"):r="default";const i=this.removeListen_(t,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(t,n){const r=new le(t).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(t,n){et("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=r0&&(this.reconnectDelay_=n0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){et("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=r0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+_E.replace(/\./g,"-")]=1,ig()?t["framework.cordova"]=1:JS()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=Yu.getInstance().currentlyOnline();return C_(this.interruptReasons_)&&t}}jn.nextPersistentConnectionId_=0;jn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class id{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const r=new H(Ns,t),i=new H(Ns,n);return this.compare(r,i)!==0}minPost(){return H.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yl;class YE extends id{static get __EMPTY_NODE(){return yl}static set __EMPTY_NODE(t){yl=t}compare(t,n){return Gs(t.name,n.name)}isDefinedOn(t){throw Ws("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return H.MIN}maxPost(){return new H(Ci,yl)}makePost(t,n){return I(typeof t=="string","KeyIndex indexValue must always be a string."),new H(t,yl)}toString(){return".key"}}const ps=new YE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(t,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!t.isEmpty();)if(t=t,o=n?r(t.key,n):1,i&&(o*=-1),o<0)this.isReverse_?t=t.left:t=t.right;else if(o===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class $e{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??$e.RED,this.left=i??mt.EMPTY_NODE,this.right=s??mt.EMPTY_NODE}copy(t,n,r,i,s){return new $e(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return mt.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let r,i;if(r=this,n(t,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(t,r.key)===0){if(r.right.isEmpty())return mt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}$e.RED=!0;$e.BLACK=!1;class $j{copy(t,n,r,i,s){return this}insert(t,n,r){return new $e(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class mt{constructor(t,n=mt.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new mt(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,$e.BLACK,null,null))}remove(t){return new mt(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,$e.BLACK,null,null))}get(t){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(t,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(t){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(t,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new vl(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new vl(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new vl(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new vl(this.root_,null,this.comparator_,!0,t)}}mt.EMPTY_NODE=new $j;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jj(e,t){return Gs(e.name,t.name)}function mg(e,t){return Gs(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let op;function Uj(e){op=e}const qE=function(e){return typeof e=="number"?"number:"+CE(e):"string:"+e},QE=function(e){if(e.isLeafNode()){const t=e.val();I(typeof t=="string"||typeof t=="number"||typeof t=="object"&&qn(t,".sv"),"Priority must be a string or number.")}else I(e===op||e.isEmpty(),"priority of unexpected type.");I(e===op||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i0;class Le{constructor(t,n=Le.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),QE(this.priorityNode_)}static set __childrenNodeConstructor(t){i0=t}static get __childrenNodeConstructor(){return i0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new Le(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return G(t)?this:q(t)===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:Le.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const r=q(t);return r===null?n:n.isEmpty()&&r!==".priority"?this:(I(r!==".priority"||Or(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Le.__childrenNodeConstructor.EMPTY_NODE.updateChild(ce(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+qE(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=CE(this.value_):t+=this.value_,this.lazyHash_=xE(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===Le.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof Le.__childrenNodeConstructor?-1:(I(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,r=typeof this.value_,i=Le.VALUE_TYPE_ORDER.indexOf(n),s=Le.VALUE_TYPE_ORDER.indexOf(r);return I(i>=0,"Unknown leaf type: "+n),I(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Le.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let XE,JE;function zj(e){XE=e}function Bj(e){JE=e}class Vj extends id{compare(t,n){const r=t.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Gs(t.name,n.name):s}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return H.MIN}maxPost(){return new H(Ci,new Le("[PRIORITY-POST]",JE))}makePost(t,n){const r=XE(t);return new H(n,new Le("[PRIORITY-POST]",r))}toString(){return".priority"}}const Se=new Vj;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wj=Math.log(2);class Hj{constructor(t){const n=s=>parseInt(Math.log(s)/Wj,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const i=r(this.count);this.bits_=t+1&i}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const qu=function(e,t,n,r){e.sort(t);const i=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=e[l],f=n?n(d):d,new $e(f,d.node,$e.BLACK,null,null);{const m=parseInt(c/2,10)+l,g=i(l,m),_=i(m+1,u);return d=e[m],f=n?n(d):d,new $e(f,d.node,$e.BLACK,g,_)}},s=function(l){let u=null,c=null,d=e.length;const f=function(g,_){const w=d-g,p=d;d-=g;const h=i(w+1,p),v=e[w],x=n?n(v):v;m(new $e(x,v.node,_,null,h))},m=function(g){u?(u.left=g,u=g):(c=g,u=g)};for(let g=0;g<l.count;++g){const _=l.nextBitIsOne(),w=Math.pow(2,l.count-(g+1));_?f(w,$e.BLACK):(f(w,$e.BLACK),f(w,$e.RED))}return c},o=new Hj(e.length),a=s(o);return new mt(r||t,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tf;const Ui={};class Fn{constructor(t,n){this.indexes_=t,this.indexSet_=n}static get Default(){return I(Ui&&Se,"ChildrenNode.ts has not been loaded"),Tf=Tf||new Fn({".priority":Ui},{".priority":Se}),Tf}get(t){const n=Os(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof mt?n:null}hasIndex(t){return qn(this.indexSet_,t.toString())}addIndex(t,n){I(t!==ps,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(H.Wrap);let o=s.getNext();for(;o;)i=i||t.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=qu(r,t.getCompare()):a=Ui;const l=t.toString(),u=Object.assign({},this.indexSet_);u[l]=t;const c=Object.assign({},this.indexes_);return c[l]=a,new Fn(c,u)}addToIndexes(t,n){const r=ju(this.indexes_,(i,s)=>{const o=Os(this.indexSet_,s);if(I(o,"Missing index implementation for "+s),i===Ui)if(o.isDefinedOn(t.node)){const a=[],l=n.getIterator(H.Wrap);let u=l.getNext();for(;u;)u.name!==t.name&&a.push(u),u=l.getNext();return a.push(t),qu(a,o.getCompare())}else return Ui;else{const a=n.get(t.name);let l=i;return a&&(l=l.remove(new H(t.name,a))),l.insert(t,t.node)}});return new Fn(r,this.indexSet_)}removeFromIndexes(t,n){const r=ju(this.indexes_,i=>{if(i===Ui)return i;{const s=n.get(t.name);return s?i.remove(new H(t.name,s)):i}});return new Fn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ao;class z{constructor(t,n,r){this.children_=t,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&QE(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ao||(ao=new z(new mt(mg),null,Fn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ao}updatePriority(t){return this.children_.isEmpty()?this:new z(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?ao:n}}getChild(t){const n=q(t);return n===null?this:this.getImmediateChild(n).getChild(ce(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(I(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const r=new H(t,n);let i,s;n.isEmpty()?(i=this.children_.remove(t),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(t,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ao:this.priorityNode_;return new z(i,o,s)}}updateChild(t,n){const r=q(t);if(r===null)return n;{I(q(t)!==".priority"||Or(t)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ce(t),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Se,(o,a)=>{n[o]=a.val(t),r++,s&&z.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!t&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+qE(this.getPriority().val())+":"),this.forEachChild(Se,(n,r)=>{const i=r.hash();i!==""&&(t+=":"+n+":"+i)}),this.lazyHash_=t===""?"":xE(t)}return this.lazyHash_}getPredecessorChildName(t,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new H(t,n));return s?s.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new H(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new H(n,this.children_.get(n)):null}forEachChild(t,n){const r=this.resolveIndex_(t);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(t,i=>i);{const i=this.children_.getIteratorFrom(t.name,H.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,t)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(t,i=>i);{const i=this.children_.getReverseIteratorFrom(t.name,H.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,t)>0;)i.getNext(),s=i.peek();return i}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Ba?-1:0}withIndex(t){if(t===ps||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new z(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===ps||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Se),i=n.getIterator(Se);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(t){return t===ps?null:this.indexMap_.get(t.toString())}}z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Gj extends z{constructor(){super(new mt(mg),z.EMPTY_NODE,Fn.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return z.EMPTY_NODE}isEmpty(){return!1}}const Ba=new Gj;Object.defineProperties(H,{MIN:{value:new H(Ns,z.EMPTY_NODE)},MAX:{value:new H(Ci,Ba)}});YE.__EMPTY_NODE=z.EMPTY_NODE;Le.__childrenNodeConstructor=z;Uj(Ba);Bj(Ba);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kj=!0;function He(e,t=null){if(e===null)return z.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),I(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new Le(n,He(t))}if(!(e instanceof Array)&&Kj){const n=[];let r=!1;if(_t(e,(o,a)=>{if(o.substring(0,1)!=="."){const l=He(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new H(o,l)))}}),n.length===0)return z.EMPTY_NODE;const s=qu(n,jj,o=>o.name,mg);if(r){const o=qu(n,Se.getCompare());return new z(s,He(t),new Fn({".priority":o},{".priority":Se}))}else return new z(s,He(t),Fn.Default)}else{let n=z.EMPTY_NODE;return _t(e,(r,i)=>{if(qn(e,r)&&r.substring(0,1)!=="."){const s=He(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(He(t))}}zj(He);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yj extends id{constructor(t){super(),this.indexPath_=t,I(!G(t)&&q(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const r=this.extractChild(t.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Gs(t.name,n.name):s}makePost(t,n){const r=He(t),i=z.EMPTY_NODE.updateChild(this.indexPath_,r);return new H(n,i)}maxPost(){const t=z.EMPTY_NODE.updateChild(this.indexPath_,Ba);return new H(Ci,t)}toString(){return WE(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qj extends id{compare(t,n){const r=t.node.compareTo(n.node);return r===0?Gs(t.name,n.name):r}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return H.MIN}maxPost(){return H.MAX}makePost(t,n){const r=He(t);return new H(n,r)}toString(){return".value"}}const Qj=new qj;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(e){return{type:"value",snapshotNode:e}}function As(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function ma(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function ga(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function Xj(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(t){this.index_=t}updateChild(t,n,r,i,s,o){I(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=t.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?t.hasChild(n)?o.trackChildChange(ma(n,a)):I(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(As(n,r)):o.trackChildChange(ga(n,r,a))),t.isLeafNode()&&r.isEmpty())?t:t.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(t,n,r){return r!=null&&(t.isLeafNode()||t.forEachChild(Se,(i,s)=>{n.hasChild(i)||r.trackChildChange(ma(i,s))}),n.isLeafNode()||n.forEachChild(Se,(i,s)=>{if(t.hasChild(i)){const o=t.getImmediateChild(i);o.equals(s)||r.trackChildChange(ga(i,s,o))}else r.trackChildChange(As(i,s))})),n.withIndex(this.index_)}updatePriority(t,n){return t.isEmpty()?z.EMPTY_NODE:t.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(t){this.indexedFilter_=new gg(t.getIndex()),this.index_=t.getIndex(),this.startPost_=ya.getStartPost_(t),this.endPost_=ya.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,r=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return n&&r}updateChild(t,n,r,i,s,o){return this.matches(new H(n,r))||(r=z.EMPTY_NODE),this.indexedFilter_.updateChild(t,n,r,i,s,o)}updateFullNode(t,n,r){n.isLeafNode()&&(n=z.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(z.EMPTY_NODE);const s=this;return n.forEachChild(Se,(o,a)=>{s.matches(new H(o,a))||(i=i.updateImmediateChild(o,z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,i,r)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const n=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),n)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const n=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),n)}else return t.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jj{constructor(t){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ya(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,n,r,i,s,o){return this.rangedFilter_.matches(new H(n,r))||(r=z.EMPTY_NODE),t.getImmediateChild(n).equals(r)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,n,r,i,s,o):this.fullLimitUpdateChild_(t,n,r,s,o)}updateFullNode(t,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=z.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(z.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,i,r)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,m)=>d(m,f)}else o=this.index_.getCompare();const a=t;I(a.numChildren()===this.limit_,"");const l=new H(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const m=f==null?1:o(f,l);if(c&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(ga(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ma(n,d));const _=a.updateImmediateChild(n,z.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(As(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return r.isEmpty()?t:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(ma(u.name,u.node)),s.trackChildChange(As(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,z.EMPTY_NODE)):t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Se}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ns}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ci}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Se}copy(){const t=new yg;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function Zj(e){return e.loadsAllData()?new gg(e.getIndex()):e.hasLimit()?new Jj(e):new ya(e)}function s0(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Se?n="$priority":e.index_===Qj?n="$value":e.index_===ps?n="$key":(I(e.index_ instanceof Yj,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Oe(n),e.startSet_){const r=e.startAfterSet_?"startAfter":"startAt";t[r]=Oe(e.indexStartValue_),e.startNameSet_&&(t[r]+=","+Oe(e.indexStartName_))}if(e.endSet_){const r=e.endBeforeSet_?"endBefore":"endAt";t[r]=Oe(e.indexEndValue_),e.endNameSet_&&(t[r]+=","+Oe(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function o0(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==Se&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu extends zE{constructor(t,n,r,i){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ua("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(I(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,n,r,i){const s=t._path.toString();this.log_("Listen called for "+s+" "+t._queryIdentifier);const o=Qu.getListenId_(t,r),a={};this.listens_[o]=a;const l=s0(t._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Os(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(t,n){const r=Qu.getListenId_(t,n);delete this.listens_[r]}get(t){const n=s0(t._queryParams),r=t._path.toString(),i=new rg;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(t){}restRequest_(t,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+ed(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ua(a.responseText)}catch{Pt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Pt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e3{constructor(){this.rootNode_=z.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(){return{value:null,children:new Map}}function eC(e,t,n){if(G(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const r=q(t);e.children.has(r)||e.children.set(r,Xu());const i=e.children.get(r);t=ce(t),eC(i,t,n)}}function ap(e,t,n){e.value!==null?n(t,e.value):t3(e,(r,i)=>{const s=new le(t.toString()+"/"+r);ap(i,s,n)})}function t3(e,t){e.children.forEach((n,r)=>{t(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n3{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n=Object.assign({},t);return this.last_&&_t(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0=10*1e3,r3=30*1e3,i3=5*60*1e3;class s3{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new n3(t);const r=a0+(r3-a0)*Math.random();No(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const t=this.statsListener_.get(),n={};let r=!1;_t(t,(i,s)=>{s>0&&qn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),No(this.reportStats_.bind(this),Math.floor(Math.random()*2*i3))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rn;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(rn||(rn={}));function tC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function vg(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function _g(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(t,n,r){this.path=t,this.affectedTree=n,this.revert=r,this.type=rn.ACK_USER_WRITE,this.source=tC()}operationForChild(t){if(G(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new le(t));return new Ju(X(),n,this.revert)}}else return I(q(this.path)===t,"operationForChild called for unrelated child."),new Ju(ce(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(t,n){this.source=t,this.path=n,this.type=rn.LISTEN_COMPLETE}operationForChild(t){return G(this.path)?new va(this.source,X()):new va(this.source,ce(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(t,n,r){this.source=t,this.path=n,this.snap=r,this.type=rn.OVERWRITE}operationForChild(t){return G(this.path)?new Ti(this.source,X(),this.snap.getImmediateChild(t)):new Ti(this.source,ce(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(t,n,r){this.source=t,this.path=n,this.children=r,this.type=rn.MERGE}operationForChild(t){if(G(this.path)){const n=this.children.subtree(new le(t));return n.isEmpty()?null:n.value?new Ti(this.source,X(),n.value):new _a(this.source,X(),n)}else return I(q(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new _a(this.source,ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(t,n,r){this.node_=t,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(G(t))return this.isFullyInitialized()&&!this.filtered_;const n=q(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o3{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function a3(e,t,n,r){const i=[],s=[];return t.forEach(o=>{o.type==="child_changed"&&e.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Xj(o.childName,o.snapshotNode))}),lo(e,i,"child_removed",t,r,n),lo(e,i,"child_added",t,r,n),lo(e,i,"child_moved",s,r,n),lo(e,i,"child_changed",t,r,n),lo(e,i,"value",t,r,n),i}function lo(e,t,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>u3(e,a,l)),o.forEach(a=>{const l=l3(e,a,s);i.forEach(u=>{u.respondsTo(a.type)&&t.push(u.createEvent(l,e.query_))})})}function l3(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function u3(e,t,n){if(t.childName==null||n.childName==null)throw Ws("Should only compare child_ events.");const r=new H(t.childName,t.snapshotNode),i=new H(n.childName,n.snapshotNode);return e.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(e,t){return{eventCache:e,serverCache:t}}function Ao(e,t,n,r){return sd(new Rr(t,n,r),e.serverCache)}function nC(e,t,n,r){return sd(e.eventCache,new Rr(t,n,r))}function Zu(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function bi(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bf;const c3=()=>(bf||(bf=new mt(q$)),bf);class me{constructor(t,n=c3()){this.value=t,this.children=n}static fromObject(t){let n=new me(null);return _t(t,(r,i)=>{n=n.set(new le(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:X(),value:this.value};if(G(t))return null;{const r=q(t),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ce(t),n);return s!=null?{path:Re(new le(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(G(t))return this;{const n=q(t),r=this.children.get(n);return r!==null?r.subtree(ce(t)):new me(null)}}set(t,n){if(G(t))return new me(n,this.children);{const r=q(t),s=(this.children.get(r)||new me(null)).set(ce(t),n),o=this.children.insert(r,s);return new me(this.value,o)}}remove(t){if(G(t))return this.children.isEmpty()?new me(null):new me(null,this.children);{const n=q(t),r=this.children.get(n);if(r){const i=r.remove(ce(t));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new me(null):new me(this.value,s)}else return this}}get(t){if(G(t))return this.value;{const n=q(t),r=this.children.get(n);return r?r.get(ce(t)):null}}setTree(t,n){if(G(t))return n;{const r=q(t),s=(this.children.get(r)||new me(null)).setTree(ce(t),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new me(this.value,o)}}fold(t){return this.fold_(X(),t)}fold_(t,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Re(t,i),n)}),n(t,this.value,r)}findOnPath(t,n){return this.findOnPath_(t,X(),n)}findOnPath_(t,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(G(t))return null;{const s=q(t),o=this.children.get(s);return o?o.findOnPath_(ce(t),Re(n,s),r):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,X(),n)}foreachOnPath_(t,n,r){if(G(t))return this;{this.value&&r(n,this.value);const i=q(t),s=this.children.get(i);return s?s.foreachOnPath_(ce(t),Re(n,i),r):new me(null)}}foreach(t){this.foreach_(X(),t)}foreach_(t,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Re(t,r),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,r)=>{r.value&&t(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(t){this.writeTree_=t}static empty(){return new un(new me(null))}}function Do(e,t,n){if(G(t))return new un(new me(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(r!=null){const i=r.path;let s=r.value;const o=it(i,t);return s=s.updateChild(o,n),new un(e.writeTree_.set(i,s))}else{const i=new me(n),s=e.writeTree_.setTree(t,i);return new un(s)}}}function l0(e,t,n){let r=e;return _t(n,(i,s)=>{r=Do(r,Re(t,i),s)}),r}function u0(e,t){if(G(t))return un.empty();{const n=e.writeTree_.setTree(t,new me(null));return new un(n)}}function lp(e,t){return Li(e,t)!=null}function Li(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(it(n.path,t)):null}function c0(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Se,(r,i)=>{t.push(new H(r,i))}):e.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&t.push(new H(r,i.value))}),t}function Cr(e,t){if(G(t))return e;{const n=Li(e,t);return n!=null?new un(new me(n)):new un(e.writeTree_.subtree(t))}}function up(e){return e.writeTree_.isEmpty()}function Ds(e,t){return rC(X(),e.writeTree_,t)}function rC(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal((i,s)=>{i===".priority"?(I(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=rC(Re(e,i),s,n)}),!n.getChild(e).isEmpty()&&r!==null&&(n=n.updateChild(Re(e,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(e,t){return aC(t,e)}function d3(e,t,n,r,i){I(r>e.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Do(e.visibleWrites,t,n)),e.lastWriteId=r}function f3(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function h3(e,t){const n=e.allWrites.findIndex(a=>a.writeId===t);I(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,o=e.allWrites.length-1;for(;i&&o>=0;){const a=e.allWrites[o];a.visible&&(o>=n&&p3(a,r.path)?i=!1:nn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return m3(e),!0;if(r.snap)e.visibleWrites=u0(e.visibleWrites,r.path);else{const a=r.children;_t(a,l=>{e.visibleWrites=u0(e.visibleWrites,Re(r.path,l))})}return!0}else return!1}function p3(e,t){if(e.snap)return nn(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&nn(Re(e.path,n),t))return!0;return!1}function m3(e){e.visibleWrites=iC(e.allWrites,g3,X()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function g3(e){return e.visible}function iC(e,t,n){let r=un.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const o=s.path;let a;if(s.snap)nn(n,o)?(a=it(n,o),r=Do(r,a,s.snap)):nn(o,n)&&(a=it(o,n),r=Do(r,X(),s.snap.getChild(a)));else if(s.children){if(nn(n,o))a=it(n,o),r=l0(r,a,s.children);else if(nn(o,n))if(a=it(o,n),G(a))r=l0(r,X(),s.children);else{const l=Os(s.children,q(a));if(l){const u=l.getChild(ce(a));r=Do(r,X(),u)}}}else throw Ws("WriteRecord should have .snap or .children")}}return r}function sC(e,t,n,r,i){if(!r&&!i){const s=Li(e.visibleWrites,t);if(s!=null)return s;{const o=Cr(e.visibleWrites,t);if(up(o))return n;if(n==null&&!lp(o,X()))return null;{const a=n||z.EMPTY_NODE;return Ds(o,a)}}}else{const s=Cr(e.visibleWrites,t);if(!i&&up(s))return n;if(!i&&n==null&&!lp(s,X()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(nn(u.path,t)||nn(t,u.path))},a=iC(e.allWrites,o,t),l=n||z.EMPTY_NODE;return Ds(a,l)}}}function y3(e,t,n){let r=z.EMPTY_NODE;const i=Li(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(Se,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Cr(e.visibleWrites,t);return n.forEachChild(Se,(o,a)=>{const l=Ds(Cr(s,new le(o)),a);r=r.updateImmediateChild(o,l)}),c0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Cr(e.visibleWrites,t);return c0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function v3(e,t,n,r,i){I(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Re(t,n);if(lp(e.visibleWrites,s))return null;{const o=Cr(e.visibleWrites,s);return up(o)?i.getChild(n):Ds(o,i.getChild(n))}}function _3(e,t,n,r){const i=Re(t,n),s=Li(e.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Cr(e.visibleWrites,i);return Ds(o,r.getNode().getImmediateChild(n))}else return null}function w3(e,t){return Li(e.visibleWrites,t)}function x3(e,t,n,r,i,s,o){let a;const l=Cr(e.visibleWrites,t),u=Li(l,X());if(u!=null)a=u;else if(n!=null)a=Ds(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=f.getNext();for(;m&&c.length<i;)d(m,r)!==0&&c.push(m),m=f.getNext();return c}else return[]}function S3(){return{visibleWrites:un.empty(),allWrites:[],lastWriteId:-1}}function ec(e,t,n,r){return sC(e.writeTree,e.treePath,t,n,r)}function wg(e,t){return y3(e.writeTree,e.treePath,t)}function d0(e,t,n,r){return v3(e.writeTree,e.treePath,t,n,r)}function tc(e,t){return w3(e.writeTree,Re(e.treePath,t))}function E3(e,t,n,r,i,s){return x3(e.writeTree,e.treePath,t,n,r,i,s)}function xg(e,t,n){return _3(e.writeTree,e.treePath,t,n)}function oC(e,t){return aC(Re(e.treePath,t),e.writeTree)}function aC(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C3{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,r=t.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ga(r,t.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ma(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,As(r,t.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ga(r,t.snapshotNode,i.oldSnap));else throw Ws("Illegal combination of changes: "+t+" occurred after "+i)}else this.changeMap.set(r,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T3{getCompleteChild(t){return null}getChildAfterChild(t,n,r){return null}}const lC=new T3;class Sg{constructor(t,n,r=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const r=this.optCompleteServerCache_!=null?new Rr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return xg(this.writes_,t,r)}}getChildAfterChild(t,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:bi(this.viewCache_),s=E3(this.writes_,i,n,1,r,t);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b3(e){return{filter:e}}function k3(e,t){I(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),I(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function I3(e,t,n,r,i){const s=new C3;let o,a;if(n.type===rn.OVERWRITE){const u=n;u.source.fromUser?o=cp(e,t,u.path,u.snap,r,i,s):(I(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered()&&!G(u.path),o=nc(e,t,u.path,u.snap,r,i,a,s))}else if(n.type===rn.MERGE){const u=n;u.source.fromUser?o=O3(e,t,u.path,u.children,r,i,s):(I(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered(),o=dp(e,t,u.path,u.children,r,i,a,s))}else if(n.type===rn.ACK_USER_WRITE){const u=n;u.revert?o=A3(e,t,u.path,r,i,s):o=R3(e,t,u.path,u.affectedTree,r,i,s)}else if(n.type===rn.LISTEN_COMPLETE)o=N3(e,t,n.path,r,s);else throw Ws("Unknown operation type: "+n.type);const l=s.getChanges();return P3(t,o,l),{viewCache:o,changes:l}}function P3(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Zu(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(ZE(Zu(t)))}}function uC(e,t,n,r,i,s){const o=t.eventCache;if(tc(r,n)!=null)return t;{let a,l;if(G(n))if(I(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const u=bi(t),c=u instanceof z?u:z.EMPTY_NODE,d=wg(r,c);a=e.filter.updateFullNode(t.eventCache.getNode(),d,s)}else{const u=ec(r,bi(t));a=e.filter.updateFullNode(t.eventCache.getNode(),u,s)}else{const u=q(n);if(u===".priority"){I(Or(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=t.serverCache.getNode();const d=d0(r,n,c,l);d!=null?a=e.filter.updatePriority(c,d):a=o.getNode()}else{const c=ce(n);let d;if(o.isCompleteForChild(u)){l=t.serverCache.getNode();const f=d0(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=xg(r,u,t.serverCache);d!=null?a=e.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return Ao(t,a,o.isFullyInitialized()||G(n),e.filter.filtersNodes())}}function nc(e,t,n,r,i,s,o,a){const l=t.serverCache;let u;const c=o?e.filter:e.filter.getIndexedFilter();if(G(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),m,null)}else{const m=q(n);if(!l.isCompleteForPath(n)&&Or(n)>1)return t;const g=ce(n),w=l.getNode().getImmediateChild(m).updateChild(g,r);m===".priority"?u=c.updatePriority(l.getNode(),w):u=c.updateChild(l.getNode(),m,w,g,lC,null)}const d=nC(t,u,l.isFullyInitialized()||G(n),c.filtersNodes()),f=new Sg(i,d,s);return uC(e,d,n,i,f,a)}function cp(e,t,n,r,i,s,o){const a=t.eventCache;let l,u;const c=new Sg(i,t,s);if(G(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,o),l=Ao(t,u,!0,e.filter.filtersNodes());else{const d=q(n);if(d===".priority")u=e.filter.updatePriority(t.eventCache.getNode(),r),l=Ao(t,u,a.isFullyInitialized(),a.isFiltered());else{const f=ce(n),m=a.getNode().getImmediateChild(d);let g;if(G(f))g=r;else{const _=c.getCompleteChild(d);_!=null?VE(f)===".priority"&&_.getChild(HE(f)).isEmpty()?g=_:g=_.updateChild(f,r):g=z.EMPTY_NODE}if(m.equals(g))l=t;else{const _=e.filter.updateChild(a.getNode(),d,g,f,c,o);l=Ao(t,_,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function f0(e,t){return e.eventCache.isCompleteForChild(t)}function O3(e,t,n,r,i,s,o){let a=t;return r.foreach((l,u)=>{const c=Re(n,l);f0(t,q(c))&&(a=cp(e,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=Re(n,l);f0(t,q(c))||(a=cp(e,a,c,u,i,s,o))}),a}function h0(e,t,n){return n.foreach((r,i)=>{t=t.updateChild(r,i)}),t}function dp(e,t,n,r,i,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l=t,u;G(n)?u=r:u=new me(null).setTree(n,r);const c=t.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const m=t.serverCache.getNode().getImmediateChild(d),g=h0(e,m,f);l=nc(e,l,new le(d),g,i,s,o,a)}}),u.children.inorderTraversal((d,f)=>{const m=!t.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!m){const g=t.serverCache.getNode().getImmediateChild(d),_=h0(e,g,f);l=nc(e,l,new le(d),_,i,s,o,a)}}),l}function R3(e,t,n,r,i,s,o){if(tc(i,n)!=null)return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(r.value!=null){if(G(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return nc(e,t,n,l.getNode().getChild(n),i,s,a,o);if(G(n)){let u=new me(null);return l.getNode().forEachChild(ps,(c,d)=>{u=u.set(new le(c),d)}),dp(e,t,n,u,i,s,a,o)}else return t}else{let u=new me(null);return r.foreach((c,d)=>{const f=Re(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),dp(e,t,n,u,i,s,a,o)}}function N3(e,t,n,r,i){const s=t.serverCache,o=nC(t,s.getNode(),s.isFullyInitialized()||G(n),s.isFiltered());return uC(e,o,n,r,lC,i)}function A3(e,t,n,r,i,s){let o;if(tc(r,n)!=null)return t;{const a=new Sg(r,t,i),l=t.eventCache.getNode();let u;if(G(n)||q(n)===".priority"){let c;if(t.serverCache.isFullyInitialized())c=ec(r,bi(t));else{const d=t.serverCache.getNode();I(d instanceof z,"serverChildren would be complete if leaf node"),c=wg(r,d)}c=c,u=e.filter.updateFullNode(l,c,s)}else{const c=q(n);let d=xg(r,c,t.serverCache);d==null&&t.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=e.filter.updateChild(l,c,d,ce(n),a,s):t.eventCache.getNode().hasChild(c)?u=e.filter.updateChild(l,c,z.EMPTY_NODE,ce(n),a,s):u=l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=ec(r,bi(t)),o.isLeafNode()&&(u=e.filter.updateFullNode(u,o,s)))}return o=t.serverCache.isFullyInitialized()||tc(r,X())!=null,Ao(t,u,o,e.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D3{constructor(t,n){this.query_=t,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new gg(r.getIndex()),s=Zj(r);this.processor_=b3(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(z.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(z.EMPTY_NODE,a.getNode(),null),c=new Rr(l,o.isFullyInitialized(),i.filtersNodes()),d=new Rr(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=sd(d,c),this.eventGenerator_=new o3(this.query_)}get query(){return this.query_}}function L3(e){return e.viewCache_.serverCache.getNode()}function M3(e){return Zu(e.viewCache_)}function F3(e,t){const n=bi(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!G(t)&&!n.getImmediateChild(q(t)).isEmpty())?n.getChild(t):null}function p0(e){return e.eventRegistrations_.length===0}function $3(e,t){e.eventRegistrations_.push(t)}function m0(e,t,n){const r=[];if(n){I(t==null,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(t){let i=[];for(let s=0;s<e.eventRegistrations_.length;++s){const o=e.eventRegistrations_[s];if(!o.matches(t))i.push(o);else if(t.hasAnyCallback()){i=i.concat(e.eventRegistrations_.slice(s+1));break}}e.eventRegistrations_=i}else e.eventRegistrations_=[];return r}function g0(e,t,n,r){t.type===rn.MERGE&&t.source.queryId!==null&&(I(bi(e.viewCache_),"We should always have a full cache before handling merges"),I(Zu(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=I3(e.processor_,i,t,n,r);return k3(e.processor_,s.viewCache),I(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,cC(e,s.changes,s.viewCache.eventCache.getNode(),null)}function j3(e,t){const n=e.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Se,(s,o)=>{r.push(As(s,o))}),n.isFullyInitialized()&&r.push(ZE(n.getNode())),cC(e,r,n.getNode(),t)}function cC(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return a3(e.eventGenerator_,t,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rc;class dC{constructor(){this.views=new Map}}function U3(e){I(!rc,"__referenceConstructor has already been defined"),rc=e}function z3(){return I(rc,"Reference.ts has not been loaded"),rc}function B3(e){return e.views.size===0}function Eg(e,t,n,r){const i=t.source.queryId;if(i!==null){const s=e.views.get(i);return I(s!=null,"SyncTree gave us an op for an invalid query."),g0(s,t,n,r)}else{let s=[];for(const o of e.views.values())s=s.concat(g0(o,t,n,r));return s}}function fC(e,t,n,r,i){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let a=ec(n,i?r:null),l=!1;a?l=!0:r instanceof z?(a=wg(n,r),l=!1):(a=z.EMPTY_NODE,l=!1);const u=sd(new Rr(a,l,!1),new Rr(r,i,!1));return new D3(t,u)}return o}function V3(e,t,n,r,i,s){const o=fC(e,t,r,i,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),$3(o,n),j3(o,n)}function W3(e,t,n,r){const i=t._queryIdentifier,s=[];let o=[];const a=Nr(e);if(i==="default")for(const[l,u]of e.views.entries())o=o.concat(m0(u,n,r)),p0(u)&&(e.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=e.views.get(i);l&&(o=o.concat(m0(l,n,r)),p0(l)&&(e.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Nr(e)&&s.push(new(z3())(t._repo,t._path)),{removed:s,events:o}}function hC(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Tr(e,t){let n=null;for(const r of e.views.values())n=n||F3(r,t);return n}function pC(e,t){if(t._queryParams.loadsAllData())return ad(e);{const r=t._queryIdentifier;return e.views.get(r)}}function mC(e,t){return pC(e,t)!=null}function Nr(e){return ad(e)!=null}function ad(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ic;function H3(e){I(!ic,"__referenceConstructor has already been defined"),ic=e}function G3(){return I(ic,"Reference.ts has not been loaded"),ic}let K3=1;class y0{constructor(t){this.listenProvider_=t,this.syncPointTree_=new me(null),this.pendingWriteTree_=S3(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Y3(e,t,n,r,i){return d3(e.pendingWriteTree_,t,n,r,i),i?Wa(e,new Ti(tC(),t,n)):[]}function rs(e,t,n=!1){const r=f3(e.pendingWriteTree_,t);if(h3(e.pendingWriteTree_,t)){let s=new me(null);return r.snap!=null?s=s.set(X(),!0):_t(r.children,o=>{s=s.set(new le(o),!0)}),Wa(e,new Ju(r.path,s,n))}else return[]}function Va(e,t,n){return Wa(e,new Ti(vg(),t,n))}function q3(e,t,n){const r=me.fromObject(n);return Wa(e,new _a(vg(),t,r))}function Q3(e,t){return Wa(e,new va(vg(),t))}function X3(e,t,n){const r=Cg(e,n);if(r){const i=Tg(r),s=i.path,o=i.queryId,a=it(s,t),l=new va(_g(o),a);return bg(e,s,l)}else return[]}function gC(e,t,n,r,i=!1){const s=t._path,o=e.syncPointTree_.get(s);let a=[];if(o&&(t._queryIdentifier==="default"||mC(o,t))){const l=W3(o,t,n,r);B3(o)&&(e.syncPointTree_=e.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=e.syncPointTree_.findOnPath(s,(f,m)=>Nr(m));if(c&&!d){const f=e.syncPointTree_.subtree(s);if(!f.isEmpty()){const m=t4(f);for(let g=0;g<m.length;++g){const _=m[g],w=_.query,p=xC(e,_);e.listenProvider_.startListening(Lo(w),wa(e,w),p.hashFn,p.onComplete)}}}!d&&u.length>0&&!r&&(c?e.listenProvider_.stopListening(Lo(t),null):u.forEach(f=>{const m=e.queryToTagMap.get(ld(f));e.listenProvider_.stopListening(Lo(f),m)}))}n4(e,u)}return a}function yC(e,t,n,r){const i=Cg(e,r);if(i!=null){const s=Tg(i),o=s.path,a=s.queryId,l=it(o,t),u=new Ti(_g(a),l,n);return bg(e,o,u)}else return[]}function J3(e,t,n,r){const i=Cg(e,r);if(i){const s=Tg(i),o=s.path,a=s.queryId,l=it(o,t),u=me.fromObject(n),c=new _a(_g(a),l,u);return bg(e,o,c)}else return[]}function Z3(e,t,n,r=!1){const i=t._path;let s=null,o=!1;e.syncPointTree_.foreachOnPath(i,(f,m)=>{const g=it(f,i);s=s||Tr(m,g),o=o||Nr(m)});let a=e.syncPointTree_.get(i);a?(o=o||Nr(a),s=s||Tr(a,X())):(a=new dC,e.syncPointTree_=e.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=z.EMPTY_NODE,e.syncPointTree_.subtree(i).foreachChild((m,g)=>{const _=Tr(g,X());_&&(s=s.updateImmediateChild(m,_))}));const u=mC(a,t);if(!u&&!t._queryParams.loadsAllData()){const f=ld(t);I(!e.queryToTagMap.has(f),"View does not exist, but we have a tag");const m=r4();e.queryToTagMap.set(f,m),e.tagToQueryMap.set(m,f)}const c=od(e.pendingWriteTree_,i);let d=V3(a,t,n,c,s,l);if(!u&&!o&&!r){const f=pC(a,t);d=d.concat(i4(e,t,f))}return d}function vC(e,t,n){const i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,(o,a)=>{const l=it(o,t),u=Tr(a,l);if(u)return u});return sC(i,t,s,n,!0)}function e4(e,t){const n=t._path;let r=null;e.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=it(u,n);r=r||Tr(c,d)});let i=e.syncPointTree_.get(n);i?r=r||Tr(i,X()):(i=new dC,e.syncPointTree_=e.syncPointTree_.set(n,i));const s=r!=null,o=s?new Rr(r,!0,!1):null,a=od(e.pendingWriteTree_,t._path),l=fC(i,t,a,s?o.getNode():z.EMPTY_NODE,s);return M3(l)}function Wa(e,t){return _C(t,e.syncPointTree_,null,od(e.pendingWriteTree_,X()))}function _C(e,t,n,r){if(G(e.path))return wC(e,t,n,r);{const i=t.get(X());n==null&&i!=null&&(n=Tr(i,X()));let s=[];const o=q(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=oC(r,o);s=s.concat(_C(a,l,u,c))}return i&&(s=s.concat(Eg(i,e,r,n))),s}}function wC(e,t,n,r){const i=t.get(X());n==null&&i!=null&&(n=Tr(i,X()));let s=[];return t.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=oC(r,o),c=e.operationForChild(o);c&&(s=s.concat(wC(c,a,l,u)))}),i&&(s=s.concat(Eg(i,e,r,n))),s}function xC(e,t){const n=t.query,r=wa(e,n);return{hashFn:()=>(L3(t)||z.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?X3(e,n._path,r):Q3(e,n._path);{const s=J$(i,n);return gC(e,n,null,s)}}}}function wa(e,t){const n=ld(t);return e.queryToTagMap.get(n)}function ld(e){return e._path.toString()+"$"+e._queryIdentifier}function Cg(e,t){return e.tagToQueryMap.get(t)}function Tg(e){const t=e.indexOf("$");return I(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new le(e.substr(0,t))}}function bg(e,t,n){const r=e.syncPointTree_.get(t);I(r,"Missing sync point for query tag that we're tracking");const i=od(e.pendingWriteTree_,t);return Eg(r,n,i,null)}function t4(e){return e.fold((t,n,r)=>{if(n&&Nr(n))return[ad(n)];{let i=[];return n&&(i=hC(n)),_t(r,(s,o)=>{i=i.concat(o)}),i}})}function Lo(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(G3())(e._repo,e._path):e}function n4(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const i=ld(r),s=e.queryToTagMap.get(i);e.queryToTagMap.delete(i),e.tagToQueryMap.delete(s)}}}function r4(){return K3++}function i4(e,t,n){const r=t._path,i=wa(e,t),s=xC(e,n),o=e.listenProvider_.startListening(Lo(t),i,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(r);if(i)I(!Nr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!G(u)&&c&&Nr(c))return[ad(c).query];{let f=[];return c&&(f=f.concat(hC(c).map(m=>m.query))),_t(d,(m,g)=>{f=f.concat(g)}),f}});for(let u=0;u<l.length;++u){const c=l[u];e.listenProvider_.stopListening(Lo(c),wa(e,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new kg(n)}node(){return this.node_}}class Ig{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=Re(this.path_,t);return new Ig(this.syncTree_,n)}node(){return vC(this.syncTree_,this.path_)}}const s4=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},v0=function(e,t,n){if(!e||typeof e!="object")return e;if(I(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return o4(e[".sv"],t,n);if(typeof e[".sv"]=="object")return a4(e[".sv"],t);I(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},o4=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+e)}},a4=function(e,t,n){e.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;typeof r!="number"&&I(!1,"Unexpected increment value: "+r);const i=t.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},l4=function(e,t,n,r){return Pg(t,new Ig(n,e),r)},u4=function(e,t,n){return Pg(e,new kg(t),n)};function Pg(e,t,n){const r=e.getPriority().val(),i=v0(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const o=e,a=v0(o.getValue(),t,n);return a!==o.getValue()||i!==o.getPriority().val()?new Le(a,He(i)):e}else{const o=e;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Le(i))),o.forEachChild(Se,(a,l)=>{const u=Pg(l,t.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(t="",n=null,r={children:{},childCount:0}){this.name=t,this.parent=n,this.node=r}}function Rg(e,t){let n=t instanceof le?t:new le(t),r=e,i=q(n);for(;i!==null;){const s=Os(r.node.children,i)||{children:{},childCount:0};r=new Og(i,r,s),n=ce(n),i=q(n)}return r}function Ks(e){return e.node.value}function SC(e,t){e.node.value=t,fp(e)}function EC(e){return e.node.childCount>0}function c4(e){return Ks(e)===void 0&&!EC(e)}function ud(e,t){_t(e.node.children,(n,r)=>{t(new Og(n,e,r))})}function CC(e,t,n,r){n&&!r&&t(e),ud(e,i=>{CC(i,t,!0,r)}),n&&r&&t(e)}function d4(e,t,n){let r=n?e:e.parent;for(;r!==null;){if(t(r))return!0;r=r.parent}return!1}function Ha(e){return new le(e.parent===null?e.name:Ha(e.parent)+"/"+e.name)}function fp(e){e.parent!==null&&f4(e.parent,e.name,e)}function f4(e,t,n){const r=c4(n),i=qn(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,fp(e)):!r&&!i&&(e.node.children[t]=n.node,e.node.childCount++,fp(e))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h4=/[\[\].#$\/\u0000-\u001F\u007F]/,p4=/[\[\].#$\u0000-\u001F\u007F]/,kf=10*1024*1024,TC=function(e){return typeof e=="string"&&e.length!==0&&!h4.test(e)},bC=function(e){return typeof e=="string"&&e.length!==0&&!p4.test(e)},m4=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),bC(e)},kC=function(e,t,n){const r=n instanceof le?new Rj(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+Xr(r));if(typeof t=="function")throw new Error(e+"contains a function "+Xr(r)+" with contents = "+t.toString());if(SE(t))throw new Error(e+"contains "+t.toString()+" "+Xr(r));if(typeof t=="string"&&t.length>kf/3&&td(t)>kf)throw new Error(e+"contains a string greater than "+kf+" utf8 bytes "+Xr(r)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let i=!1,s=!1;if(_t(t,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!TC(o)))throw new Error(e+" contains an invalid key ("+o+") "+Xr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Nj(r,o),kC(e,a,r),Aj(r)}),i&&s)throw new Error(e+' contains ".value" child '+Xr(r)+" in addition to actual children.")}},IC=function(e,t,n,r){if(!(r&&n===void 0)&&!bC(n))throw new Error(tE(e,t)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},g4=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),IC(e,t,n,r)},y4=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!TC(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!m4(n))throw new Error(tE(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v4{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function _4(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();n!==null&&!GE(s,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function zr(e,t,n){_4(e,n),w4(e,r=>nn(r,t)||nn(t,r))}function w4(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const s=i.path;t(s)?(x4(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function x4(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const r=n.getEventRunner();fi&&et("event: "+n.toString()),za(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S4="repo_interrupt",E4=25;class C4{constructor(t,n,r,i){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new v4,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Xu(),this.transactionQueueTree_=new Og,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function T4(e,t,n){if(e.stats_=fg(e.repoInfo_),e.forceRestClient_||nj())e.server_=new Qu(e.repoInfo_,(r,i,s,o)=>{_0(e,r,i,s,o)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>w0(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Oe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new jn(e.repoInfo_,t,(r,i,s,o)=>{_0(e,r,i,s,o)},r=>{w0(e,r)},r=>{k4(e,r)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(r=>{e.server_.refreshAuthToken(r)}),e.appCheckProvider_.addTokenChangeListener(r=>{e.server_.refreshAppCheckToken(r.token)}),e.statsReporter_=aj(e.repoInfo_,()=>new s3(e.stats_,e.server_)),e.infoData_=new e3,e.infoSyncTree_=new y0({startListening:(r,i,s,o)=>{let a=[];const l=e.infoData_.getNode(r._path);return l.isEmpty()||(a=Va(e.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ng(e,"connected",!1),e.serverSyncTree_=new y0({startListening:(r,i,s,o)=>(e.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);zr(e.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{e.server_.unlisten(r,i)}})}function b4(e){const n=e.infoData_.getNode(new le(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function PC(e){return s4({timestamp:b4(e)})}function _0(e,t,n,r,i){e.dataUpdateCount++;const s=new le(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(i)if(r){const l=ju(n,u=>He(u));o=J3(e.serverSyncTree_,s,l,i)}else{const l=He(n);o=yC(e.serverSyncTree_,s,l,i)}else if(r){const l=ju(n,u=>He(u));o=q3(e.serverSyncTree_,s,l)}else{const l=He(n);o=Va(e.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Lg(e,s)),zr(e.eventQueue_,a,o)}function w0(e,t){Ng(e,"connected",t),t===!1&&O4(e)}function k4(e,t){_t(t,(n,r)=>{Ng(e,n,r)})}function Ng(e,t,n){const r=new le("/.info/"+t),i=He(n);e.infoData_.updateSnapshot(r,i);const s=Va(e.infoSyncTree_,r,i);zr(e.eventQueue_,r,s)}function I4(e){return e.nextWriteId_++}function P4(e,t,n){const r=e4(e.serverSyncTree_,t);return r!=null?Promise.resolve(r):e.server_.get(t).then(i=>{const s=He(i).withIndex(t._queryParams.getIndex());Z3(e.serverSyncTree_,t,n,!0);let o;if(t._queryParams.loadsAllData())o=Va(e.serverSyncTree_,t._path,s);else{const a=wa(e.serverSyncTree_,t);o=yC(e.serverSyncTree_,t._path,s,a)}return zr(e.eventQueue_,t._path,o),gC(e.serverSyncTree_,t,n,null,!0),s},i=>(Ag(e,"get for query "+Oe(t)+" failed: "+i),Promise.reject(new Error(i))))}function O4(e){Ag(e,"onDisconnectEvents");const t=PC(e),n=Xu();ap(e.onDisconnect_,X(),(i,s)=>{const o=l4(i,s,e.serverSyncTree_,t);eC(n,i,o)});let r=[];ap(n,X(),(i,s)=>{r=r.concat(Va(e.serverSyncTree_,i,s));const o=D4(e,i);Lg(e,o)}),e.onDisconnect_=Xu(),zr(e.eventQueue_,X(),r)}function R4(e){e.persistentConnection_&&e.persistentConnection_.interrupt(S4)}function Ag(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),et(n,...t)}function OC(e,t,n){return vC(e.serverSyncTree_,t,n)||z.EMPTY_NODE}function Dg(e,t=e.transactionQueueTree_){if(t||cd(e,t),Ks(t)){const n=NC(e,t);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&N4(e,Ha(t),n)}else EC(t)&&ud(t,n=>{Dg(e,n)})}function N4(e,t,n){const r=n.map(u=>u.currentWriteId),i=OC(e,t,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];I(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=it(t,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,u=>{Ag(e,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(rs(e.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();cd(e,Rg(e.transactionQueueTree_,t)),Dg(e,e.transactionQueueTree_),zr(e.eventQueue_,t,c);for(let f=0;f<d.length;f++)za(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Pt("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Lg(e,t)}},o)}function Lg(e,t){const n=RC(e,t),r=Ha(n),i=NC(e,n);return A4(e,i,r),r}function A4(e,t,n){if(t.length===0)return;const r=[];let i=[];const o=t.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<t.length;a++){const l=t[a],u=it(n,l.path);let c=!1,d;if(I(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(rs(e.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=E4)c=!0,d="maxretry",i=i.concat(rs(e.serverSyncTree_,l.currentWriteId,!0));else{const f=OC(e,l.path,o);l.currentInputSnapshot=f;const m=t[a].update(f.val());if(m!==void 0){kC("transaction failed: Data returned ",m,l.path);let g=He(m);typeof m=="object"&&m!=null&&qn(m,".priority")||(g=g.updatePriority(f.getPriority()));const w=l.currentWriteId,p=PC(e),h=u4(g,f,p);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=h,l.currentWriteId=I4(e),o.splice(o.indexOf(w),1),i=i.concat(Y3(e.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(rs(e.serverSyncTree_,w,!0))}else c=!0,d="nodata",i=i.concat(rs(e.serverSyncTree_,l.currentWriteId,!0))}zr(e.eventQueue_,n,i),i=[],c&&(t[a].status=2,function(f){setTimeout(f,Math.floor(0))}(t[a].unwatcher),t[a].onComplete&&(d==="nodata"?r.push(()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot)):r.push(()=>t[a].onComplete(new Error(d),!1,null))))}cd(e,e.transactionQueueTree_);for(let a=0;a<r.length;a++)za(r[a]);Dg(e,e.transactionQueueTree_)}function RC(e,t){let n,r=e.transactionQueueTree_;for(n=q(t);n!==null&&Ks(r)===void 0;)r=Rg(r,n),t=ce(t),n=q(t);return r}function NC(e,t){const n=[];return AC(e,t,n),n.sort((r,i)=>r.order-i.order),n}function AC(e,t,n){const r=Ks(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ud(t,i=>{AC(e,i,n)})}function cd(e,t){const n=Ks(t);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,SC(t,n.length>0?n:void 0)}ud(t,r=>{cd(e,r)})}function D4(e,t){const n=Ha(RC(e,t)),r=Rg(e.transactionQueueTree_,t);return d4(r,i=>{If(e,i)}),If(e,r),CC(r,i=>{If(e,i)}),n}function If(e,t){const n=Ks(t);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(rs(e.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?SC(t,void 0):n.length=s+1,zr(e.eventQueue_,Ha(t),i);for(let o=0;o<r.length;o++)za(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L4(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}t+="/"+i}return t}function M4(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Pt(`Invalid query segment '${n}' in query '${e}'`)}return t}const x0=function(e,t){const n=F4(e),r=n.namespace;n.domain==="firebase.com"&&Hn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Hn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||K$();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new DE(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new le(n.pathString)}},F4=function(e){let t="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof e=="string"){let u=e.indexOf("//");u>=0&&(a=e.substring(0,u-1),e=e.substring(u+2));let c=e.indexOf("/");c===-1&&(c=e.length);let d=e.indexOf("?");d===-1&&(d=e.length),t=e.substring(0,Math.min(c,d)),c<d&&(i=L4(e.substring(c,d)));const f=M4(e.substring(Math.min(e.length,d)));u=t.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(t.substring(u+1),10)):u=t.length;const m=t.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const g=t.indexOf(".");r=t.substring(0,g).toLowerCase(),n=t.substring(g+1),s=r}"ns"in f&&(s=f.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $4{constructor(t,n,r,i){this.eventType=t,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Oe(this.snapshot.exportVal())}}class j4{constructor(t,n,r){this.eventRegistration=t,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U4{constructor(t,n){this.snapshotCallback=t,this.cancelCallback=n}onValue(t,n){this.snapshotCallback.call(null,t,n)}onCancel(t){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
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
 */class Mg{constructor(t,n,r,i){this._repo=t,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return G(this._path)?null:VE(this._path)}get ref(){return new Qn(this._repo,this._path)}get _queryIdentifier(){const t=o0(this._queryParams),n=cg(t);return n==="{}"?"default":n}get _queryObject(){return o0(this._queryParams)}isEqual(t){if(t=Gt(t),!(t instanceof Mg))return!1;const n=this._repo===t._repo,r=GE(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Oj(this._path)}}class Qn extends Mg{constructor(t,n){super(t,n,new yg,!1)}get parent(){const t=HE(this._path);return t===null?null:new Qn(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class xa{constructor(t,n,r){this._node=t,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const n=new le(t),r=sc(this.ref,t);return new xa(this._node.getChild(n),r,Se)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>t(new xa(i,sc(this.ref,r),Se)))}hasChild(t){const n=new le(t);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function z4(e,t){return e=Gt(e),e._checkNotDeleted("ref"),t!==void 0?sc(e._root,t):e._root}function sc(e,t){return e=Gt(e),q(e._path)===null?g4("child","path",t,!1):IC("child","path",t,!1),new Qn(e._repo,Re(e._path,t))}function B4(e){e=Gt(e);const t=new U4(()=>{}),n=new Fg(t);return P4(e._repo,e,n).then(r=>new xa(r,new Qn(e._repo,e._path),e._queryParams.getIndex()))}class Fg{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,n){const r=n._queryParams.getIndex();return new $4("value",this,new xa(t.snapshotNode,new Qn(n._repo,n._path),r))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new j4(this,t,n):null}matches(t){return t instanceof Fg?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}U3(Qn);H3(Qn);/**
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
 */const V4="FIREBASE_DATABASE_EMULATOR_HOST",hp={};let W4=!1;function H4(e,t,n,r){e.repoInfo_=new DE(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}function G4(e,t,n,r,i){let s=r||e.options.databaseURL;s===void 0&&(e.options.projectId||Hn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),et("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o=x0(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[V4]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=x0(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new hs(hs.OWNER):new ij(e.name,e.options,t);y4("Invalid Firebase Database URL",o),G(o.path)||Hn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Y4(a,e,c,new rj(e.name,n));return new q4(d,e)}function K4(e,t){const n=hp[t];(!n||n[e.key]!==e)&&Hn(`Database ${t}(${e.repoInfo_}) has already been deleted.`),R4(e),delete n[e.key]}function Y4(e,t,n,r){let i=hp[t.name];i||(i={},hp[t.name]=i);let s=i[e.toURLString()];return s&&Hn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new C4(e,W4,n,r),i[e.toURLString()]=s,s}class q4{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(T4(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Qn(this._repo,X())),this._rootInternal}_delete(){return this._rootInternal!==null&&(K4(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&Hn("Cannot call "+t+" on a deleted database.")}}function Q4(e=_F(),t){const n=iE(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const r=aM("database");r&&X4(n,...r)}return n}function X4(e,t,n,r={}){e=Gt(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&Hn("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Hn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new hs(hs.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:uM(r.mockUserToken,e.app.options.projectId);s=new hs(o)}H4(i,t,n,s)}/**
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
 */function J4(e){B$(nd),Rs(new wi("database",(t,{instanceIdentifier:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return G4(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Er(V_,W_,e),Er(V_,W_,"esm2017")}jn.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};jn.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};J4();const Z4={apiKey:"AIzaSyDkWC69rklVP4x89l4iBxXBRgp9ClD9p40",authDomain:"test-582b2.firebaseapp.com",projectId:"test-582b2",storageBucket:"test-582b2.appspot.com",messagingSenderId:"925130837675",appId:"1:925130837675:web:d3470003dae1803bf931ee",databaseURL:"https://test-582b2-default-rtdb.europe-west1.firebasedatabase.app/"},DC=sE(Z4),$g=y$(DC),e6=Q4(DC);new An;const Vl=Zc("auth/signUp",async({name:e,email:t,password:n},r)=>{try{const s=(await R$($g,t,n)).user;return await D$(s,{displayName:e}),{isAuthenticated:!0,email:s.email}}catch(i){return r.rejectWithValue(i.message)}}),Wl=Zc("auth/signIn",async({email:e,password:t},n)=>{try{const i=(await N$($g,e,t)).user;return{isAuthenticated:!0,name:i.displayName,email:i.email}}catch(r){return n.rejectWithValue(r.message)}}),Mo=Zc("auth/logout",async(e,t)=>{try{await L$($g)}catch(n){return t.rejectWithValue(n.message)}});var LC={exports:{}},MC={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ga=T;function t6(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var n6=typeof Object.is=="function"?Object.is:t6,r6=Ga.useSyncExternalStore,i6=Ga.useRef,s6=Ga.useEffect,o6=Ga.useMemo,a6=Ga.useDebugValue;MC.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=i6(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=o6(function(){function l(m){if(!u){if(u=!0,c=m,m=r(m),i!==void 0&&o.hasValue){var g=o.value;if(i(g,m))return d=g}return d=m}if(g=d,n6(c,m))return g;var _=r(m);return i!==void 0&&i(g,_)?g:(c=m,d=_)}var u=!1,c,d,f=n===void 0?null:n;return[function(){return l(t())},f===null?void 0:function(){return l(f())}]},[t,n,r,i]);var a=r6(e,s[0],s[1]);return s6(function(){o.hasValue=!0,o.value=a},[a]),a6(a),a};LC.exports=MC;var l6=LC.exports,Ct="default"in Fo?st:Fo,S0=Symbol.for("react-redux-context"),E0=typeof globalThis<"u"?globalThis:{};function u6(){if(!Ct.createContext)return{};const e=E0[S0]??(E0[S0]=new Map);let t=e.get(Ct.createContext);return t||(t=Ct.createContext(null),e.set(Ct.createContext,t)),t}var Ar=u6(),c6=()=>{throw new Error("uSES not initialized!")};function jg(e=Ar){return function(){return Ct.useContext(e)}}var FC=jg(),$C=c6,d6=e=>{$C=e},f6=(e,t)=>e===t;function h6(e=Ar){const t=e===Ar?FC:jg(e),n=(r,i={})=>{const{equalityFn:s=f6,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:l,getServerState:u,stabilityCheck:c,identityFunctionCheck:d}=t();Ct.useRef(!0);const f=Ct.useCallback({[r.name](g){return r(g)}}[r.name],[r,c,o.stabilityCheck]),m=$C(l.addNestedSub,a.getState,u||a.getState,f,s);return Ct.useDebugValue(m),m};return Object.assign(n,{withTypes:()=>n}),n}var wn=h6();function p6(e){e()}function m6(){let e=null,t=null;return{clear(){e=null,t=null},notify(){p6(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var C0={notify(){},get:()=>[]};function g6(e,t){let n,r=C0,i=0,s=!1;function o(_){c();const w=r.subscribe(_);let p=!1;return()=>{p||(p=!0,w(),d())}}function a(){r.notify()}function l(){g.onStateChange&&g.onStateChange()}function u(){return s}function c(){i++,n||(n=t?t.addNestedSub(l):e.subscribe(l),r=m6())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=C0)}function f(){s||(s=!0,c())}function m(){s&&(s=!1,d())}const g={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:f,tryUnsubscribe:m,getListeners:()=>r};return g}var y6=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",v6=y6?Ct.useLayoutEffect:Ct.useEffect;function _6({store:e,context:t,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=Ct.useMemo(()=>{const u=g6(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[e,r,i,s]),a=Ct.useMemo(()=>e.getState(),[e]);v6(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const l=t||Ar;return Ct.createElement(l.Provider,{value:o},n)}var w6=_6;function jC(e=Ar){const t=e===Ar?FC:jg(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var x6=jC();function S6(e=Ar){const t=e===Ar?x6:jC(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var Ys=S6();d6(l6.useSyncExternalStoreWithSelector);function UC({onClose:e,color:t}){const n=Ys(),r=Lm({userName:cs().min(2,"Name must be at least 2 characters long").max(16,"Name can be at most 16 characters long").matches(/^[a-zA-Z\s]+$/,"Name must contain only English letters and spaces").required("Name is required"),email:cs().email("Invalid email format").matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Invalid Email format").required("Email is required"),password:cs().min(6,"Password must be at least 6 characters long").max(16,"Password can be at most 16 characters long").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,"Password must contain only English letters at least one digit, one lowercase letter, and one uppercase letter").required("Password is required")}),i=RS({initialValues:{userName:"",email:"",password:""},validationSchema:r,onSubmit:async s=>{console.log(s),n(Vl(s))}});return y.jsxs(XO,{onSubmit:i.handleSubmit,children:[y.jsx(JO,{children:"Registration"}),y.jsx(ZO,{children:"Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"}),y.jsxs(nf,{children:[y.jsx(sf,{id:"userName",name:"userName",type:"text",placeholder:"Name",onChange:i.handleChange,value:i.values.userName,className:`${i.touched.userName&&i.errors.userName?"is-invalid":""}`}),i.touched.userName&&i.errors.userName?y.jsx(y.Fragment,{children:y.jsx(rf,{children:i.errors.userName})}):null]}),y.jsxs(nf,{children:[y.jsx(sf,{id:"email",name:"email",type:"text",placeholder:"Email",onChange:i.handleChange,value:i.values.email,className:`${i.touched.email&&i.errors.email?"is-invalid":""}`}),i.touched.email&&i.errors.email?y.jsx(y.Fragment,{children:y.jsx(rf,{children:i.errors.email})}):null]}),y.jsxs(nf,{children:[y.jsx(sf,{id:"password",name:"password",type:i.values.showPassword?"text":"password",placeholder:"Password",onChange:i.handleChange,value:i.values.password,className:`${i.touched.password&&i.errors.password?"is-invalid":""}`}),y.jsx(eR,{type:"button",onClick:()=>{i.setFieldTouched("password",!1),i.setFieldValue("showPassword",!i.values.showPassword)},children:i.values.showPassword?y.jsx($v,{children:y.jsx("use",{href:It+"#iconEyeOpen"})}):y.jsx($v,{children:y.jsx("use",{href:It+"#iconEyeClosed"})})}),i.touched.password&&i.errors.password?y.jsx(rf,{children:i.errors.password}):null]}),y.jsx(tR,{color:t,type:"submit",children:"Sign Up"}),y.jsx(nR,{onClick:()=>e(!1),children:y.jsx(rR,{children:y.jsx("use",{href:It+"#icon-x"})})})]})}const E6=M.form`
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
`,T0=M.div`
  margin-bottom: 14px;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 18px;
  }
`;M.div`
  margin-bottom: 40px;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
`;const C6=M.h2`
  line-height: 1.2;
  letter-spacing: -0.8px;
  font-weight: 500;
  margin-bottom: 20px;
  color: var(--secondar);
  @media (min-width: 768px) {
    font-size: 40px;
  }
`,T6=M.p`
  width: 438px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.38;
  margin-bottom: 40px;
  color: rgba(18, 20, 23, 0.8);
`,b0=M.p`
  margin-left: 15px;
  font-size: 12px;
  font-weight: 400;
  color: var(--red);
`,b6=M.button`
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
`,k0=M.input`
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
`,k6=M.button`
  font-weight: 600;
  width: 100%;
  border: none;
  border-radius: 12px;
  color: var(--secondar);

  background-color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};

  padding: 16px 180px;

  font-size: 18px;
  font-weight: 700;
  line-height: 1.56;
  @media (min-width: 768px) {
  }
`,I6=M.button`
  position: absolute;
  top: 20px;
  right: 20px;

  background-color: transparent;
  border: none;
`;M.svg`
  stroke: var(--secondary);
  fill: none;
  width: 24px;
  height: 24px;
`;const P6=M.svg`
  stroke: var(--secondary);
  fill: none;
  width: 32px;
  height: 32px;
`,I0=M.svg`
  stroke: var(--secondary);
  fill: none;
  display: inline-block;
  width: 24px;
  height: 24px;
`;function zC({onClose:e,color:t}){const n=Ys(),r=Lm({email:cs().email("Invalid email format").matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Invalid Email format").required("Email is required"),password:cs().min(6,"Password must be at least 6 characters long").max(16,"Password can be at most 16 characters long").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,"Password must contain only English letters at least one digit, one lowercase letter, and one uppercase letter").required("Password is required")}),i=RS({initialValues:{email:"",password:""},validationSchema:r,onSubmit:async s=>{await n(Wl(s))}});return y.jsxs(E6,{onSubmit:i.handleSubmit,children:[y.jsx(C6,{children:"Log In"}),y.jsx(T6,{children:"Welcome back! Please enter your credentials to access your account and continue your search for an teacher."}),y.jsxs(T0,{children:[y.jsx(k0,{id:"email",name:"email",type:"text",placeholder:"Email",onChange:i.handleChange,value:i.values.email,className:`${i.touched.email&&i.errors.email?"is-invalid":""}`}),i.touched.email&&i.errors.email?y.jsx(y.Fragment,{children:y.jsx(b0,{children:i.errors.email})}):null]}),y.jsxs(T0,{children:[y.jsx(k0,{id:"password",name:"password",type:i.values.showPassword?"text":"password",placeholder:"Password",onChange:i.handleChange,value:i.values.password,className:`${i.touched.password&&i.errors.password?"is-invalid":""}`}),y.jsx(b6,{type:"button",onClick:()=>{i.setFieldTouched("password",!1),i.setFieldValue("showPassword",!i.values.showPassword)},children:i.values.showPassword?y.jsx(I0,{children:y.jsx("use",{href:It+"#iconEyeOpen"})}):y.jsx(I0,{children:y.jsx("use",{href:It+"#iconEyeClosed"})})}),i.touched.password&&i.errors.password?y.jsx(b0,{children:i.errors.password}):null]}),y.jsx(k6,{color:t,type:"submit",children:"Log In"}),y.jsx(I6,{onClick:()=>e(!1),children:y.jsx(P6,{children:y.jsx("use",{href:It+"#icon-x"})})})]})}function pp({color:e,regis:t,log:n,ShowModal:r,setNavstate:i}){const[s,o]=T.useState(!1),[a,l]=T.useState(!1),u=()=>{r&&(r(!1),n(!0)),i&&(i("closed"),l(!a)),l(!a)},c=()=>{r&&(r(!1),t(!0)),i&&(i("closed"),o(!s)),o(!s)};return y.jsxs(y.Fragment,{children:[y.jsxs(nO,{children:[y.jsxs(rO,{onClick:u,children:[y.jsx(Vx,{color:e,children:y.jsx("use",{href:It+"#icon-log-in-01"})}),"Log in"]}),y.jsx(iO,{onClick:c,children:"Registration"})]}),s&&y.jsx(Po,{onClose:o,children:y.jsx(UC,{color:e,onClose:o})}),a&&y.jsx(Po,{onClose:l,children:y.jsx(zC,{color:e,onClose:l})})]})}const P0=M.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 28px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`,_l=M(ka)`
  color: var(--secondary);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;

  @media (min-width: 768px) {
    padding: 15px 0px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;function BC({color:e,setNavstate:t}){return y.jsx(y.Fragment,{children:t?y.jsxs(y.Fragment,{children:[y.jsxs(P0,{children:[y.jsx(_l,{to:"/Home",onClick:()=>t("closed"),children:"Home"}),y.jsx(_l,{to:"/Teachers",onClick:()=>t("closed"),children:"Teachers"})]}),y.jsx(pp,{color:e,setNavstate:t})]}):y.jsxs(y.Fragment,{children:[y.jsxs(P0,{children:[y.jsx(_l,{to:"/Home",children:"Home"}),y.jsx(_l,{to:"/Teachers",children:"Teachers"})]}),y.jsx(pp,{color:e,setNavstate:t})]})})}const O0=M.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`,zi=M(ka)`
  color: var(--secondary);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  padding: 10px 0px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`,O6=M.button`
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
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;function VC({color:e,setNavstate:t}){const n=Ys(),r=()=>{t&&(n(Mo()),t("closed")),n(Mo())};return y.jsxs(y.Fragment,{children:[t?y.jsxs(O0,{children:[" ",y.jsx(zi,{to:"/Home",onClick:()=>t("closed"),children:"Home"}),y.jsx(zi,{to:"/Teachers",onClick:()=>t("closed"),children:"Teachers"}),y.jsx(zi,{to:"/Favorites",onClick:()=>t("closed"),children:"Favorites"})]}):y.jsxs(O0,{children:[y.jsx(zi,{to:"/Home",children:"Home"}),y.jsx(zi,{to:"/Teachers",children:"Teachers"}),y.jsx(zi,{to:"/Favorites",children:"Favorites"})," "]}),y.jsxs(O6,{onClick:r,children:[y.jsx(Vx,{color:e,children:y.jsx("use",{href:It+"#icon-log-in-01"})}),"Log out"]})]})}const dd=e=>e.Auth.isAuth,R6=M.button`
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
  z-index: 3;
  min-height: 48px;
`,N6=M.i`
  display: block;
  position: relative;
  width: 45px;
  height: 5px;
  border-radius: 20px;
  background-color: ${e=>e.navstate==="opened"?"transparent":e.color==="Blue"?"var(--hoverColorBlue)":e.color==="Green"?"var(--hoverColorGreen)":e.color==="Orange"?"var(--hoverColorYellow)":e.color==="Pink"?"var(--hoverColorPink)":e.color==="LightPink"?"var(--hoverColorCoral)":"blue"};
  transition: 0.3s;
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
`,A6=({navstate:e,handleNavstate:t,color:n})=>y.jsx(R6,{onClick:()=>t(),children:y.jsx(N6,{navstate:e,color:n})}),D6=M.div`
  flex-basis: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,L6=M.ul`
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
`,M6=({color:e})=>{const[t,n]=T.useState("default"),r=wn(dd),i=()=>{n(t==="default"?"opened":t==="opened"?"closed":"opened")};return y.jsxs(D6,{children:[y.jsx(A6,{navstate:t,handleNavstate:i,color:e}),y.jsx(L6,{display:t,children:r?y.jsx(VC,{color:e,setNavstate:n}):y.jsx(BC,{color:e,setNavstate:n})})]})},F6=({color:e})=>{const t=wn(dd);return y.jsxs(ZP,{children:[y.jsxs(eO,{children:[y.jsxs(Ov,{to:"/Home",children:[y.jsx(Pv,{children:y.jsx("use",{href:It+"#icon-ukraine"})}),y.jsx(Rv,{children:"LearnLingo"})]}),t?y.jsx(VC,{color:e}):y.jsx(BC,{color:e})]}),y.jsxs(tO,{children:[y.jsxs(Ov,{to:"/Home",children:[y.jsx(Pv,{children:y.jsx("use",{href:It+"#icon-ukraine"})}),y.jsx(Rv,{children:"LearnLingo"})]}),y.jsx(M6,{color:e})]})]})};function mp(){return mp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mp.apply(this,arguments)}function $6(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function j6(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var U6=function(){function e(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(j6(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=$6(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Je="-ms-",oc="-moz-",J="-webkit-",WC="comm",Ug="rule",zg="decl",z6="@import",HC="@keyframes",B6="@layer",V6=Math.abs,fd=String.fromCharCode,W6=Object.assign;function H6(e,t){return We(e,0)^45?(((t<<2^We(e,0))<<2^We(e,1))<<2^We(e,2))<<2^We(e,3):0}function GC(e){return e.trim()}function G6(e,t){return(e=t.exec(e))?e[0]:e}function Z(e,t,n){return e.replace(t,n)}function gp(e,t){return e.indexOf(t)}function We(e,t){return e.charCodeAt(t)|0}function Sa(e,t,n){return e.slice(t,n)}function mn(e){return e.length}function Bg(e){return e.length}function wl(e,t){return t.push(e),e}function K6(e,t){return e.map(t).join("")}var hd=1,Ls=1,KC=0,wt=0,be=0,qs="";function pd(e,t,n,r,i,s,o){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:hd,column:Ls,length:o,return:""}}function uo(e,t){return W6(pd("",null,null,"",null,null,0),e,{length:-e.length},t)}function Y6(){return be}function q6(){return be=wt>0?We(qs,--wt):0,Ls--,be===10&&(Ls=1,hd--),be}function Ot(){return be=wt<KC?We(qs,wt++):0,Ls++,be===10&&(Ls=1,hd++),be}function xn(){return We(qs,wt)}function Hl(){return wt}function Ka(e,t){return Sa(qs,e,t)}function Ea(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function YC(e){return hd=Ls=1,KC=mn(qs=e),wt=0,[]}function qC(e){return qs="",e}function Gl(e){return GC(Ka(wt-1,yp(e===91?e+2:e===40?e+1:e)))}function Q6(e){for(;(be=xn())&&be<33;)Ot();return Ea(e)>2||Ea(be)>3?"":" "}function X6(e,t){for(;--t&&Ot()&&!(be<48||be>102||be>57&&be<65||be>70&&be<97););return Ka(e,Hl()+(t<6&&xn()==32&&Ot()==32))}function yp(e){for(;Ot();)switch(be){case e:return wt;case 34:case 39:e!==34&&e!==39&&yp(be);break;case 40:e===41&&yp(e);break;case 92:Ot();break}return wt}function J6(e,t){for(;Ot()&&e+be!==47+10;)if(e+be===42+42&&xn()===47)break;return"/*"+Ka(t,wt-1)+"*"+fd(e===47?e:Ot())}function Z6(e){for(;!Ea(xn());)Ot();return Ka(e,wt)}function eU(e){return qC(Kl("",null,null,null,[""],e=YC(e),0,[0],e))}function Kl(e,t,n,r,i,s,o,a,l){for(var u=0,c=0,d=o,f=0,m=0,g=0,_=1,w=1,p=1,h=0,v="",x=i,E=s,C=r,S=v;w;)switch(g=h,h=Ot()){case 40:if(g!=108&&We(S,d-1)==58){gp(S+=Z(Gl(h),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:S+=Gl(h);break;case 9:case 10:case 13:case 32:S+=Q6(g);break;case 92:S+=X6(Hl()-1,7);continue;case 47:switch(xn()){case 42:case 47:wl(tU(J6(Ot(),Hl()),t,n),l);break;default:S+="/"}break;case 123*_:a[u++]=mn(S)*p;case 125*_:case 59:case 0:switch(h){case 0:case 125:w=0;case 59+c:p==-1&&(S=Z(S,/\f/g,"")),m>0&&mn(S)-d&&wl(m>32?N0(S+";",r,n,d-1):N0(Z(S," ","")+";",r,n,d-2),l);break;case 59:S+=";";default:if(wl(C=R0(S,t,n,u,c,i,a,v,x=[],E=[],d),s),h===123)if(c===0)Kl(S,t,C,C,x,s,d,a,E);else switch(f===99&&We(S,3)===110?100:f){case 100:case 108:case 109:case 115:Kl(e,C,C,r&&wl(R0(e,C,C,0,0,i,a,v,i,x=[],d),E),i,E,d,a,r?x:E);break;default:Kl(S,C,C,C,[""],E,0,a,E)}}u=c=m=0,_=p=1,v=S="",d=o;break;case 58:d=1+mn(S),m=g;default:if(_<1){if(h==123)--_;else if(h==125&&_++==0&&q6()==125)continue}switch(S+=fd(h),h*_){case 38:p=c>0?1:(S+="\f",-1);break;case 44:a[u++]=(mn(S)-1)*p,p=1;break;case 64:xn()===45&&(S+=Gl(Ot())),f=xn(),c=d=mn(v=S+=Z6(Hl())),h++;break;case 45:g===45&&mn(S)==2&&(_=0)}}return s}function R0(e,t,n,r,i,s,o,a,l,u,c){for(var d=i-1,f=i===0?s:[""],m=Bg(f),g=0,_=0,w=0;g<r;++g)for(var p=0,h=Sa(e,d+1,d=V6(_=o[g])),v=e;p<m;++p)(v=GC(_>0?f[p]+" "+h:Z(h,/&\f/g,f[p])))&&(l[w++]=v);return pd(e,t,n,i===0?Ug:a,l,u,c)}function tU(e,t,n){return pd(e,t,n,WC,fd(Y6()),Sa(e,2,-2),0)}function N0(e,t,n,r){return pd(e,t,n,zg,Sa(e,0,r),Sa(e,r+1,-1),r)}function ms(e,t){for(var n="",r=Bg(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function nU(e,t,n,r){switch(e.type){case B6:if(e.children.length)break;case z6:case zg:return e.return=e.return||e.value;case WC:return"";case HC:return e.return=e.value+"{"+ms(e.children,r)+"}";case Ug:e.value=e.props.join(",")}return mn(n=ms(e.children,r))?e.return=e.value+"{"+n+"}":""}function rU(e){var t=Bg(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}function iU(e){return function(t){t.root||(t=t.return)&&e(t)}}var sU=function(t,n,r){for(var i=0,s=0;i=s,s=xn(),i===38&&s===12&&(n[r]=1),!Ea(s);)Ot();return Ka(t,wt)},oU=function(t,n){var r=-1,i=44;do switch(Ea(i)){case 0:i===38&&xn()===12&&(n[r]=1),t[r]+=sU(wt-1,n,r);break;case 2:t[r]+=Gl(i);break;case 4:if(i===44){t[++r]=xn()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=fd(i)}while(i=Ot());return t},aU=function(t,n){return qC(oU(YC(t),n))},A0=new WeakMap,lU=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!A0.get(r))&&!i){A0.set(t,!0);for(var s=[],o=aU(n,s),a=r.props,l=0,u=0;l<o.length;l++)for(var c=0;c<a.length;c++,u++)t.props[u]=s[l]?o[l].replace(/&\f/g,a[c]):a[c]+" "+o[l]}}},uU=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function QC(e,t){switch(H6(e,t)){case 5103:return J+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return J+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return J+e+oc+e+Je+e+e;case 6828:case 4268:return J+e+Je+e+e;case 6165:return J+e+Je+"flex-"+e+e;case 5187:return J+e+Z(e,/(\w+).+(:[^]+)/,J+"box-$1$2"+Je+"flex-$1$2")+e;case 5443:return J+e+Je+"flex-item-"+Z(e,/flex-|-self/,"")+e;case 4675:return J+e+Je+"flex-line-pack"+Z(e,/align-content|flex-|-self/,"")+e;case 5548:return J+e+Je+Z(e,"shrink","negative")+e;case 5292:return J+e+Je+Z(e,"basis","preferred-size")+e;case 6060:return J+"box-"+Z(e,"-grow","")+J+e+Je+Z(e,"grow","positive")+e;case 4554:return J+Z(e,/([^-])(transform)/g,"$1"+J+"$2")+e;case 6187:return Z(Z(Z(e,/(zoom-|grab)/,J+"$1"),/(image-set)/,J+"$1"),e,"")+e;case 5495:case 3959:return Z(e,/(image-set\([^]*)/,J+"$1$`$1");case 4968:return Z(Z(e,/(.+:)(flex-)?(.*)/,J+"box-pack:$3"+Je+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+J+e+e;case 4095:case 3583:case 4068:case 2532:return Z(e,/(.+)-inline(.+)/,J+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(mn(e)-1-t>6)switch(We(e,t+1)){case 109:if(We(e,t+4)!==45)break;case 102:return Z(e,/(.+:)(.+)-([^]+)/,"$1"+J+"$2-$3$1"+oc+(We(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~gp(e,"stretch")?QC(Z(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(We(e,t+1)!==115)break;case 6444:switch(We(e,mn(e)-3-(~gp(e,"!important")&&10))){case 107:return Z(e,":",":"+J)+e;case 101:return Z(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+J+(We(e,14)===45?"inline-":"")+"box$3$1"+J+"$2$3$1"+Je+"$2box$3")+e}break;case 5936:switch(We(e,t+11)){case 114:return J+e+Je+Z(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return J+e+Je+Z(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return J+e+Je+Z(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return J+e+Je+e+e}return e}var cU=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case zg:t.return=QC(t.value,t.length);break;case HC:return ms([uo(t,{value:Z(t.value,"@","@"+J)})],i);case Ug:if(t.length)return K6(t.props,function(s){switch(G6(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ms([uo(t,{props:[Z(s,/:(read-\w+)/,":"+oc+"$1")]})],i);case"::placeholder":return ms([uo(t,{props:[Z(s,/:(plac\w+)/,":"+J+"input-$1")]}),uo(t,{props:[Z(s,/:(plac\w+)/,":"+oc+"$1")]}),uo(t,{props:[Z(s,/:(plac\w+)/,Je+"input-$1")]})],i)}return""})}},dU=[cU],fU=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(_){var w=_.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(_),_.setAttribute("data-s",""))})}var i=t.stylisPlugins||dU,s={},o,a=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(_){for(var w=_.getAttribute("data-emotion").split(" "),p=1;p<w.length;p++)s[w[p]]=!0;a.push(_)});var l,u=[lU,uU];{var c,d=[nU,iU(function(_){c.insert(_)})],f=rU(u.concat(i,d)),m=function(w){return ms(eU(w),f)};l=function(w,p,h,v){c=h,m(w?w+"{"+p.styles+"}":p.styles),v&&(g.inserted[p.name]=!0)}}var g={key:n,sheet:new U6({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:s,registered:{},insert:l};return g.sheet.hydrate(a),g},hU=!0;function pU(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var XC=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||hU===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},mU=function(t,n,r){XC(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var s=n;do t.insert(n===s?"."+i:"",s,t.sheet,!0),s=s.next;while(s!==void 0)}};function gU(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var yU=/[A-Z]|^ms/g,vU=/_EMO_([^_]+?)_([^]*?)_EMO_/g,JC=function(t){return t.charCodeAt(1)===45},D0=function(t){return t!=null&&typeof t!="boolean"},Pf=xx(function(e){return JC(e)?e:e.replace(yU,"-$&").toLowerCase()}),L0=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(vU,function(r,i,s){return gn={name:i,styles:s,next:gn},i})}return Ix[t]!==1&&!JC(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ca(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return gn={name:n.name,styles:n.styles,next:gn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)gn={name:r.name,styles:r.styles,next:gn},r=r.next;var i=n.styles+";";return i}return _U(e,t,n)}case"function":{if(e!==void 0){var s=gn,o=n(e);return gn=s,Ca(e,t,o)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function _U(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Ca(e,t,n[i])+";";else for(var s in n){var o=n[s];if(typeof o!="object")t!=null&&t[o]!==void 0?r+=s+"{"+t[o]+"}":D0(o)&&(r+=Pf(s)+":"+L0(s,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var a=0;a<o.length;a++)D0(o[a])&&(r+=Pf(s)+":"+L0(s,o[a])+";");else{var l=Ca(e,t,o);switch(s){case"animation":case"animationName":{r+=Pf(s)+":"+l+";";break}default:r+=s+"{"+l+"}"}}}return r}var M0=/label:\s*([^\s;\n{]+)\s*(;|$)/g,gn,wU=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,s="";gn=void 0;var o=t[0];o==null||o.raw===void 0?(i=!1,s+=Ca(r,n,o)):s+=o[0];for(var a=1;a<t.length;a++)s+=Ca(r,n,t[a]),i&&(s+=o[a]);M0.lastIndex=0;for(var l="",u;(u=M0.exec(s))!==null;)l+="-"+u[1];var c=gU(s)+l;return{name:c,styles:s,next:gn}},xU=function(t){return t()},SU=Fo["useInsertionEffect"]?Fo["useInsertionEffect"]:!1,EU=SU||xU,ZC=T.createContext(typeof HTMLElement<"u"?fU({key:"css"}):null);ZC.Provider;var CU=function(t){return T.forwardRef(function(n,r){var i=T.useContext(ZC);return t(n,i,r)})},TU=T.createContext({}),bU=QI,kU=function(t){return t!=="theme"},F0=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?bU:kU},$0=function(t,n,r){var i;if(n){var s=n.shouldForwardProp;i=t.__emotion_forwardProp&&s?function(o){return t.__emotion_forwardProp(o)&&s(o)}:s}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},IU=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return XC(n,r,i),EU(function(){return mU(n,r,i)}),null},PU=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,s,o;n!==void 0&&(s=n.label,o=n.target);var a=$0(t,n,r),l=a||F0(i),u=!l("as");return function(){var c=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(s!==void 0&&d.push("label:"+s+";"),c[0]==null||c[0].raw===void 0)d.push.apply(d,c);else{d.push(c[0][0]);for(var f=c.length,m=1;m<f;m++)d.push(c[m],c[0][m])}var g=CU(function(_,w,p){var h=u&&_.as||i,v="",x=[],E=_;if(_.theme==null){E={};for(var C in _)E[C]=_[C];E.theme=T.useContext(TU)}typeof _.className=="string"?v=pU(w.registered,x,_.className):_.className!=null&&(v=_.className+" ");var S=wU(d.concat(x),w.registered,E);v+=w.key+"-"+S.name,o!==void 0&&(v+=" "+o);var P=u&&a===void 0?F0(h):l,F={};for(var L in _)u&&L==="as"||P(L)&&(F[L]=_[L]);return F.className=v,F.ref=p,T.createElement(T.Fragment,null,T.createElement(IU,{cache:w,serialized:S,isStringTag:typeof h=="string"}),T.createElement(h,F))});return g.displayName=s!==void 0?s:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=i,g.__emotion_styles=d,g.__emotion_forwardProp=a,Object.defineProperty(g,"toString",{value:function(){return"."+o}}),g.withComponent=function(_,w){return e(_,mp({},n,w,{shouldForwardProp:$0(g,w,!0)})).apply(void 0,d)},g}},OU=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],A=PU.bind();OU.forEach(function(e){A[e]=A(e)});const RU=A.div`
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
`,NU=A.div`
  position: relative;
  height: 200px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`,eT=({color:e})=>y.jsx(RU,{color:e,children:y.jsx(NU,{children:y.jsxs("div",{className:"lds-ripple",children:[y.jsx("div",{}),y.jsx("div",{})]})})}),AU=({color:e})=>y.jsxs(y.Fragment,{children:[y.jsx(F6,{color:e}),y.jsx(T.Suspense,{fallback:y.jsx(eT,{color:e}),children:y.jsx(Db,{})})]}),DU=A.div`
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
`,LU=A.div`
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
`,MU=A.h1`
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
`,FU=A.span`
  font-style: italic;
  font-weight: 400;
  line-height: 56px;
  letter-spacing: -0.96px;
  padding-right: 10px;
  border-radius: 12px;
  background-color: ${({color:e})=>e==="Blue"?"var(--hoverColorBlue)":e==="Green"?"var(--hoverColorGreen)":e==="Orange"?"var(--hoverColorYellow)":e==="Pink"?"var(--hoverColorPink)":e==="LightPink"?"var(--hoverColorCoral)":"var(--hoverCecondary-text-color)"};
`,$U=A.div`
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
`;A.img`
  width: 300px;
  height: 350px;
  @media screen and (min-width: 1280px) {
    width: 568px;
    height: 530px;
  }
`;const jU=A.p`
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
`,UU=A(ka)`
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
`,zU=A.ul`
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
`,xl=A.li`
  display: flex;
  flex-direction: row;
  gap: 16px;
`,Sl=A.span`
  font-size: 28px;
  line-height: 1.14;
  font-weight: 500;
  letter-spacing: -0.56px;
`,El=A.span`
  width: 74px;
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: -0.28px;
`,BU=A.div`
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
`,VU=A.div`
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
`,WU="/Learn-Lingo/assets/hero2-726776c9.webp",HU=({color:e})=>(console.log(e),y.jsxs(DU,{children:[y.jsxs(LU,{children:[y.jsxs($U,{children:[y.jsxs(MU,{children:["Unlock your potential with the best"," ",y.jsx(FU,{color:e,children:"language"})," tutors"]}),y.jsx(jU,{children:"Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors."}),y.jsx(UU,{to:"/Teachers",color:e,children:"Get started"})]}),y.jsxs(BU,{color:e,children:[y.jsx("img",{src:WU,alt:""}),y.jsx(VU,{color:e,children:y.jsx("svg",{children:y.jsx("use",{href:It+"#icon-apple"})})})]})]}),y.jsx("footer",{children:y.jsxs(zU,{color:e,children:[y.jsxs(xl,{children:[y.jsx(Sl,{children:"32,000 +"}),y.jsx(El,{children:"Experienced tutors"})]}),y.jsxs(xl,{children:[y.jsx(Sl,{children:"300,000 +"}),y.jsx(El,{children:"5-star tutor reviews"})]}),y.jsxs(xl,{children:[y.jsx(Sl,{children:"120 +"}),y.jsx(El,{children:"Subjects taught"})]}),y.jsxs(xl,{children:[y.jsx(Sl,{children:"200 +"}),y.jsx(El,{children:"Tutor nationalities"})]})]})})]})),vp=A.ul`
  margin-top: 32px;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
`,GU=A.button`
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
  &:hover {
    background-color: ${({color:e})=>e==="Blue"?"var(--hoverColorBlue)":e==="Green"?"var(--hoverColorGreen)":e==="Orange"?"var(--hoverColorYellow)":e==="Pink"?"var(--hoverColorPink)":e==="LightPink"?"var(--hoverColorCoral)":"var(--hoverCecondary-text-color)"};
  }
`,tT=A.div`
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
`;var nT={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},j0=st.createContext&&st.createContext(nT),KU=["attr","size","title"];function YU(e,t){if(e==null)return{};var n=qU(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function qU(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function ac(){return ac=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ac.apply(this,arguments)}function U0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function lc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?U0(Object(n),!0).forEach(function(r){QU(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U0(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function QU(e,t,n){return t=XU(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function XU(e){var t=JU(e,"string");return typeof t=="symbol"?t:String(t)}function JU(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function rT(e){return e&&e.map((t,n)=>st.createElement(t.tag,lc({key:n},t.attr),rT(t.child)))}function md(e){return t=>st.createElement(ZU,ac({attr:lc({},e.attr)},t),rT(e.child))}function ZU(e){var t=n=>{var{attr:r,size:i,title:s}=e,o=YU(e,KU),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),st.createElement("svg",ac({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:lc(lc({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&st.createElement("title",null,s),e.children)};return j0!==void 0?st.createElement(j0.Consumer,null,n=>t(n)):t(nT)}function e5(e){return md({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"},child:[]}]})(e)}function t5(e){return md({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"},child:[]}]})(e)}function n5(e){return md({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"},child:[]}]})(e)}function r5(e){return md({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"},child:[]}]})(e)}const i5=A.li`
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
`,s5=A.div`
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
`,o5=A.img`
  display: block;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
`,a5=A.div``,l5=A.div`
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
`;const u5=A.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,c5=A.ul`
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
`,z0=A(r5)`
  transform: scale(1);
  transition: transform 300ms cubic-bezier(0.39, 0.575, 0.565, 1);

  &:hover {
    transform: scale(1.02);
    opacity: 0.8;
  }
`,B0=A.button`
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
  background-color: transparent;
  border: none;
`,d5=A(e5)`
  transform: scale(1);
  transition: transform 300ms cubic-bezier(0.39, 0.575, 0.565, 1);

  &:hover {
    transform: scale(1.02);
    opacity: 0.8;
  }
`,f5=A(n5)`
  margin-right: 8px;
`,V0=A(t5)`
  margin-right: 8px;
  fill: #ffc531;
`,h5=A.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  & p {
    color: var(--gray);
    margin: 0;
  }
`,p5=A.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
`,m5=A.p`
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
`,W0=A.p`
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
`,H0=A.button`
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
`;const g5=A.p`
  margin-bottom: 32px;
  margin-top: 16px;

  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`,y5=A.ul`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
`,v5=A.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`,_5=A.div`
  display: flex;
  gap: 12px;
`,w5=A.div`
  width: 46px;
  height: 46px;
  border-radius: 100px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`,x5=A.p`
  display: block;
  border-radius: 100px;

  font-size: 24px;
  font-weight: 700;
`,S5=A.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
`,E5=A.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`,C5=A.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`,T5=A.button`
  padding: 16px 48px;
  border: none;
  border-radius: 12px;
  background-color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};

  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  margin-top: 32px;
`,b5=A.div`
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
`,k5=A.svg`
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
`,I5=A.h3`
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
`,P5=A.p`
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
`,Yl=Zc("teachers/getAllTeachers",async(e,t)=>{const n=z4(e6);try{const r=await B4(sc(n,"/"));if(r.exists()){const i=r.val();return Object.values(i)}}catch(r){return t.rejectWithValue(r.message)}}),O5={teachers:[],teachersFilter:null,teachersFavorites:[],isLoading:!1},iT=GS({name:"teachers",initialState:O5,extraReducers:e=>{e.addCase(Yl.pending,t=>{t.isLoading=!0}).addCase(Yl.fulfilled,(t,{payload:n})=>{t.isLoading=!1,t.teachers=n}).addCase(Yl.rejected,t=>{t.isLoading=!1})},reducers:{addFavorites(e,t){e.teachersFavorites.push(t.payload)},deleteFavorites(e,t){const n=e.teachersFavorites.filter(r=>r.avatar_url!==t.payload.avatar_url);e.teachersFavorites=n},filterTeachers(e,t){return{...e,teachersFilter:t.payload}},resetFilter(e){return{...e,teachersFilter:null}}}}),{addFavorites:R5,deleteFavorites:N5,filterTeachers:A5,resetFilter:D5}=iT.actions,L5=iT.reducer,sT=e=>e.teachers.teachers,M5=e=>e.teachers.isLoading,oT=e=>e.teachers.teachersFavorites,F5=e=>e.teachers.teachersFilter,_p=({teacher:e,levelFilter:t,color:n})=>{const{name:r,surname:i,languages:s,levels:o,rating:a,reviews:l,price_per_hour:u,lessons_done:c,avatar_url:d,lesson_info:f,conditions:m,experience:g}=e,_=Ys(),[w,p]=T.useState(!1),[h,v]=T.useState(!1),[x,E]=T.useState(!1),[C,S]=T.useState(!1),P=wn(oT),F=wn(dd),[L,V]=T.useState(!1);T.useEffect(()=>{P.find(Ie=>Ie.avatar_url===d)!==void 0&&V(!0)},[d,P]);const ut=()=>{V(!L),_(L?N5(e):R5(e))};return y.jsxs(i5,{children:[y.jsx(s5,{color:n,children:y.jsx(o5,{src:d,height:"100px",width:"100px"})}),y.jsxs(a5,{children:[y.jsxs(l5,{children:[y.jsxs(h5,{children:[y.jsx("p",{children:"Languages"}),y.jsxs(p5,{children:[r," ",i]})]}),y.jsxs("ul",{children:[y.jsxs("li",{children:[y.jsx(f5,{size:"16px"})," Lessons online"]}),y.jsxs("li",{children:["Lessons done: ",c]}),y.jsxs("li",{children:[y.jsx(V0,{})," Rating: ",a]}),y.jsxs("li",{children:["Price / 1 hour: ",y.jsxs("span",{children:[u," $"]})]})]}),F&&y.jsx(B0,{type:"button",onClick:ut,children:L?y.jsx(d5,{size:26}):y.jsx(z0,{size:26})}),!F&&y.jsxs(B0,{type:"button",onClick:()=>v(!0),children:[" ",y.jsx(z0,{size:26})," "]})]}),y.jsxs(m5,{children:["Speaks: ",y.jsx("span",{children:s==null?void 0:s.join(", ")})]}),y.jsxs(W0,{children:["Lesson Info:",y.jsx("span",{children:f})]}),y.jsxs(W0,{children:["Conditions:",y.jsx("span",{children:m})]}),!w&&y.jsx(H0,{onClick:()=>p(!0),children:"Read more"}),w&&y.jsxs(y.Fragment,{children:[y.jsx(g5,{children:g}),y.jsx(y5,{children:l.map((Y,Ie)=>y.jsxs(v5,{children:[y.jsxs(_5,{children:[y.jsx(w5,{children:y.jsx(x5,{children:Y.reviewer_name.charAt(0).toUpperCase()})}),y.jsxs(S5,{children:[y.jsx(E5,{children:Y.reviewer_name}),y.jsxs("span",{children:[y.jsx(V0,{}),Y.reviewer_rating,".0"]})]})]}),y.jsx(C5,{children:Y.comment})]},Ie))}),w&&y.jsx(H0,{onClick:()=>p(!1),children:"Read less"})]}),y.jsx(u5,{children:o.map((Y,Ie)=>y.jsx(c5,{className:Y===t?"selected":"",children:Y},Ie))}),w&&y.jsx(T5,{color:n,onClick:()=>v(!0),className:"orderBtn",children:"Book trial lesson"}),h&&y.jsx(Po,{onClose:v,children:y.jsxs(b5,{children:[y.jsx(k5,{onClick:()=>{v(!1)},children:y.jsx("use",{href:It+"#icon-x"})}),y.jsx(I5,{children:"Attention"}),y.jsx(P5,{children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."}),y.jsx(pp,{color:n,regis:E,log:S,ShowModal:v})]})}),x&&y.jsx(Po,{onClose:E,children:y.jsx(UC,{color:n,onClose:E})}),C&&y.jsx(Po,{onClose:S,children:y.jsx(zC,{color:n,onClose:S})})]})]})};let wp=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,n)=>(n&=63,n<36?t+=n.toString(36):n<62?t+=(n-26).toString(36).toUpperCase():n>62?t+="-":t+="_",t),"");const $5=M.div`
  position: relative;
  display: inline-block;
  border-radius: 14px;
  background-color: #fff;
`,j5=M.div`
  display: flex;
  align-items: center;
  gap: 0px 50px;
  padding: 14px 18px 14px 18px;
  cursor: pointer;
  border-radius: 14px;
`,U5=M.p`
  color: var(--secondary);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1;
  margin: 0px;
`,z5=M.ul`
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
`,B5=M.li`
  cursor: pointer;
  transition: color 300ms;
  color: rgba(18, 20, 23, 0.2);

  width: 100%;
  &:hover {
    color: var(--secondary);
  }
`,V5=M.svg`
  width: 20px;
  height: 20px;
  stroke-width: 0;
  stroke: currentColor;
  fill: transparent;
  transition: transform 300ms;
  transform: ${e=>e.$active&&"rotate(180deg)"};
`;function Of({arr:e,value:t,set:n,height:r,selectedOption:i}){const[s,o]=T.useState(!1),a=()=>{o(!s)},l=c=>{n(c),o(!1)},u=T.useRef(null);return T.useEffect(()=>{const c=d=>{u.current&&!u.current.contains(d.target)&&o(!1)};return document.addEventListener("click",c),()=>{document.removeEventListener("click",c)}},[u]),y.jsxs($5,{children:[y.jsxs(j5,{onClick:a,ref:u,children:[y.jsx(U5,{children:i||t}),y.jsx(V5,{$active:s?!0:void 0,children:y.jsx("use",{href:It+"#icon-chevron-down"})})]}),s&&y.jsx(z5,{$heigh:r||void 0,children:e.map((c,d)=>y.jsx(B5,{onClick:()=>l(c),children:c},d))})]})}const W5=M.ul`
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
`,H5=M.button`
  background-color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  border: none;
  border-radius: 12px;
  color: var(--secondary);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25;
  padding: 14px 39px;
  &:hover {
    background-color: ${({color:e})=>e==="Blue"?"var(--hoverColorBlue)":e==="Green"?"var(--hoverColorGreen)":e==="Orange"?"var(--hoverColorYellow)":e==="Pink"?"var(--hoverColorPink)":e==="LightPink"?"var(--hoverColorCoral)":"var(--hoverCecondary-text-color)"};
  }
`;function G5({color:e}){const t=Ys(),[n,r]=T.useState(""),[i,s]=T.useState(""),[o,a]=T.useState(""),l=wn(sT),u=["French","English","German","Ukrainian","Polish","Spanish","Italian"],c=["A1 Beginner","A2 Elementary","B1 Intermediate","B2 Upper-Intermediate","C1 Advanced","C2 Proficient"];let d=[10,15,20,25,30,35,40];T.useEffect(()=>{if(n+i+o==="")return;const m=l.filter(g=>{const _=n?g.languages.includes(n):!0,w=i?+g.price_per_hour<=i:!0,p=o?g.levels.includes(o):!0;return w&&_&&p});t(A5(m))},[n,o,l,t,i]);const f=()=>{t(D5()),r(""),s(""),a("")};return y.jsxs(W5,{children:[y.jsxs("li",{children:[y.jsx("span",{children:"Languages"}),y.jsx(Of,{arr:u,value:"Choose a language",set:r,selectedOption:n})]}),y.jsxs("li",{children:[y.jsx("span",{children:"Level of knowledge"}),y.jsx(Of,{arr:c,value:"Choose a level",set:a,selectedOption:o})]}),y.jsxs("li",{children:[y.jsx("span",{children:"Price"}),y.jsx(Of,{arr:d,value:"To $",set:s,height:!0,selectedOption:i})]}),y.jsx(H5,{color:e,onClick:f,children:"Reset filter"})]})}function K5({color:e}){const t=wn(sT),n=wn(M5),r=wn(F5),[i,s]=T.useState(4),o=()=>{s(l=>l+4)},a=t==null?void 0:t.slice(0,i);return y.jsx(y.Fragment,{children:n?y.jsx(eT,{color:e}):y.jsxs(tT,{children:[y.jsx(G5,{color:e}),r?y.jsxs(vp,{children:[r&&(r==null?void 0:r.map(l=>y.jsx(_p,{color:e,teacher:l},wp()))),r.length===0?y.jsx("div",{children:"Teacher not faund"}):void 0]}):y.jsxs(y.Fragment,{children:[y.jsx(vp,{children:a&&(a==null?void 0:a.map(l=>y.jsx(_p,{color:e,teacher:l},wp())))}),(t==null?void 0:t.length)>i&&y.jsx(GU,{color:e,onClick:o,children:"Load more"})]})]})})}const Y5=({color:e})=>y.jsx(K5,{color:e});function q5({color:e}){const t=wn(oT);return y.jsx(tT,{children:y.jsx(vp,{children:t.length===0?y.jsx("div",{children:"not "}):t.map(n=>y.jsx(_p,{teacher:n,color:e},wp()))})})}const Q5=({color:e})=>y.jsx(q5,{color:e}),X5=A.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 500px;
`,J5=A.h1`
  color: #ffffff;
`,Z5=()=>y.jsx(X5,{children:y.jsx(J5,{children:"404"})}),e8=A.div`
  width: 100%;
  height: 100vh;
  background-size: 100% 100%;
`;function t8({component:e,redirectTo:t}){return wn(dd)?e:y.jsx(gw,{to:t})}function n8(){const[e,t]=T.useState(null),n=Ys(),r={Blue:"Blue",LightPink:"LightPink",Green:"Green",Orange:"Orange",Pink:"Pink"};return T.useEffect(()=>{n(Yl())},[n]),T.useEffect(()=>{t(Object.keys(r)[Math.floor(Math.random()*Object.keys(r).length)])},[]),y.jsx(e8,{children:y.jsx(Mb,{children:y.jsxs(Wr,{path:"/",element:y.jsx(AU,{color:e}),children:[y.jsx(Wr,{index:!0,element:y.jsx(gw,{to:"Home"})}),y.jsx(Wr,{path:"/Home",element:y.jsx(HU,{color:e})}),y.jsx(Wr,{path:"/Teachers",element:y.jsx(Y5,{color:e})}),y.jsx(Wr,{path:"/Favorites",element:y.jsx(t8,{redirectTo:"/",component:y.jsx(Q5,{color:e})})}),y.jsx(Wr,{path:"*",element:y.jsx(Z5,{})})]})})})}const r8={name:"",email:"",isAuth:!1,error:null,loading:!1},i8=GS({name:"auth",initialState:r8,extraReducers:e=>{e.addCase(Vl.pending,t=>{t.error=null,t.loading=!0}).addCase(Vl.fulfilled,(t,{payload:n})=>{const{email:r,userName:i}=n;t.name=i||"",t.email=r,t.error=null,t.loading=!1,t.isAuth=!0}).addCase(Vl.rejected,(t,{payload:n})=>{t.error=n,t.loading=!1,t.isAuth=!1}).addCase(Wl.pending,t=>{t.error=null,t.loading=!0}).addCase(Wl.fulfilled,(t,{payload:n})=>{const{email:r,name:i}=n;t.name=i,t.email=r,t.error=null,t.loading=!1,t.isAuth=!0}).addCase(Wl.rejected,(t,{payload:n})=>{t.error=n,t.loading=!1,t.isAuth=!1}).addCase(Mo.pending,t=>{t.error=null,t.loading=!0}).addCase(Mo.fulfilled,t=>{t.name="",t.email="",t.error=null,t.loading=!1,t.isAuth=!1}).addCase(Mo.rejected,(t,{payload:n})=>{t.error=n,t.loading=!1,t.isAuth=!1,t.name="",t.email=""})}}),s8=i8.reducer;var Vg="persist:",Wg="persist/FLUSH",gd="persist/REHYDRATE",Hg="persist/PAUSE",Gg="persist/PERSIST",Kg="persist/PURGE",Yg="persist/REGISTER",o8=-1;function ql(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ql=function(n){return typeof n}:ql=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ql(e)}function G0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function a8(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?G0(n,!0).forEach(function(r){l8(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G0(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function l8(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u8(e,t,n,r){r.debug;var i=a8({},n);return e&&ql(e)==="object"&&Object.keys(e).forEach(function(s){s!=="_persist"&&t[s]===n[s]&&(i[s]=e[s])}),i}function c8(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,s="".concat(e.keyPrefix!==void 0?e.keyPrefix:Vg).concat(e.key),o=e.storage,a;e.serialize===!1?a=function(E){return E}:typeof e.serialize=="function"?a=e.serialize:a=d8;var l=e.writeFailHandler||null,u={},c={},d=[],f=null,m=null,g=function(E){Object.keys(E).forEach(function(C){p(C)&&u[C]!==E[C]&&d.indexOf(C)===-1&&d.push(C)}),Object.keys(u).forEach(function(C){E[C]===void 0&&p(C)&&d.indexOf(C)===-1&&u[C]!==void 0&&d.push(C)}),f===null&&(f=setInterval(_,i)),u=E};function _(){if(d.length===0){f&&clearInterval(f),f=null;return}var x=d.shift(),E=r.reduce(function(C,S){return S.in(C,x,u)},u[x]);if(E!==void 0)try{c[x]=a(E)}catch(C){console.error("redux-persist/createPersistoid: error serializing state",C)}else delete c[x];d.length===0&&w()}function w(){Object.keys(c).forEach(function(x){u[x]===void 0&&delete c[x]}),m=o.setItem(s,a(c)).catch(h)}function p(x){return!(n&&n.indexOf(x)===-1&&x!=="_persist"||t&&t.indexOf(x)!==-1)}function h(x){l&&l(x)}var v=function(){for(;d.length!==0;)_();return m||Promise.resolve()};return{update:g,flush:v}}function d8(e){return JSON.stringify(e)}function f8(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:Vg).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(o){return o}:typeof e.deserialize=="function"?i=e.deserialize:i=h8,r.getItem(n).then(function(s){if(s)try{var o={},a=i(s);return Object.keys(a).forEach(function(l){o[l]=t.reduceRight(function(u,c){return c.out(u,l,a)},i(a[l]))}),o}catch(l){throw l}else return})}function h8(e){return JSON.parse(e)}function p8(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:Vg).concat(e.key);return t.removeItem(n,m8)}function m8(e){}function K0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Pn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?K0(n,!0).forEach(function(r){g8(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K0(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function g8(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y8(e,t){if(e==null)return{};var n=v8(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function v8(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var _8=5e3;function w8(e,t){var n=e.version!==void 0?e.version:o8;e.debug;var r=e.stateReconciler===void 0?u8:e.stateReconciler,i=e.getStoredState||f8,s=e.timeout!==void 0?e.timeout:_8,o=null,a=!1,l=!0,u=function(d){return d._persist.rehydrated&&o&&!l&&o.update(d),d};return function(c,d){var f=c||{},m=f._persist,g=y8(f,["_persist"]),_=g;if(d.type===Gg){var w=!1,p=function(P,F){w||(d.rehydrate(e.key,P,F),w=!0)};if(s&&setTimeout(function(){!w&&p(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},s),l=!1,o||(o=c8(e)),m)return Pn({},t(_,d),{_persist:m});if(typeof d.rehydrate!="function"||typeof d.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return d.register(e.key),i(e).then(function(S){var P=e.migrate||function(F,L){return Promise.resolve(F)};P(S,n).then(function(F){p(F)},function(F){p(void 0,F)})},function(S){p(void 0,S)}),Pn({},t(_,d),{_persist:{version:n,rehydrated:!1}})}else{if(d.type===Kg)return a=!0,d.result(p8(e)),Pn({},t(_,d),{_persist:m});if(d.type===Wg)return d.result(o&&o.flush()),Pn({},t(_,d),{_persist:m});if(d.type===Hg)l=!0;else if(d.type===gd){if(a)return Pn({},_,{_persist:Pn({},m,{rehydrated:!0})});if(d.key===e.key){var h=t(_,d),v=d.payload,x=r!==!1&&v!==void 0?r(v,c,h,e):h,E=Pn({},x,{_persist:Pn({},m,{rehydrated:!0})});return u(E)}}}if(!m)return t(c,d);var C=t(_,d);return C===_?c:u(Pn({},C,{_persist:m}))}}var qg={},Qg={};Qg.__esModule=!0;Qg.default=E8;function Ql(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ql=function(n){return typeof n}:Ql=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ql(e)}function Rf(){}var x8={getItem:Rf,setItem:Rf,removeItem:Rf};function S8(e){if((typeof self>"u"?"undefined":Ql(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function E8(e){var t="".concat(e,"Storage");return S8(t)?self[t]:x8}qg.__esModule=!0;qg.default=b8;var C8=T8(Qg);function T8(e){return e&&e.__esModule?e:{default:e}}function b8(e){var t=(0,C8.default)(e);return{getItem:function(r){return new Promise(function(i,s){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(s,o){s(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,s){i(t.removeItem(r))})}}}var aT=void 0,k8=I8(qg);function I8(e){return e&&e.__esModule?e:{default:e}}var P8=(0,k8.default)("local");aT=P8;function Y0(e){return N8(e)||R8(e)||O8()}function O8(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function R8(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function N8(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function q0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function xp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?q0(n,!0).forEach(function(r){A8(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q0(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function A8(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var lT={registry:[],bootstrapped:!1},D8=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:lT,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Yg:return xp({},t,{registry:[].concat(Y0(t.registry),[n.key])});case gd:var r=t.registry.indexOf(n.key),i=Y0(t.registry);return i.splice(r,1),xp({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function L8(e,t,n){var r=n||!1,i=Qm(D8,lT,t&&t.enhancer?t.enhancer:void 0),s=function(u){i.dispatch({type:Yg,key:u})},o=function(u,c,d){var f={type:gd,payload:c,err:d,key:u};e.dispatch(f),i.dispatch(f),r&&a.getState().bootstrapped&&(r(),r=!1)},a=xp({},i,{purge:function(){var u=[];return e.dispatch({type:Kg,result:function(d){u.push(d)}}),Promise.all(u)},flush:function(){var u=[];return e.dispatch({type:Wg,result:function(d){u.push(d)}}),Promise.all(u)},pause:function(){e.dispatch({type:Hg})},persist:function(){e.dispatch({type:Gg,register:s,rehydrate:o})}});return t&&t.manualPersist||a.persist(),a}const M8=NS({teachers:L5,Auth:s8}),F8={key:"teachers",storage:aT,whitelist:["teachers","Auth"]},$8=w8(F8,M8),uT=NL({reducer:$8,middleware:e=>e({serializableCheck:{ignoredActions:[Wg,gd,Hg,Gg,Kg,Yg]}})}),j8=L8(uT);function Xl(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Xl=function(n){return typeof n}:Xl=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Xl(e)}function U8(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Q0(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z8(e,t,n){return t&&Q0(e.prototype,t),n&&Q0(e,n),e}function B8(e,t){return t&&(Xl(t)==="object"||typeof t=="function")?t:Jl(e)}function Sp(e){return Sp=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Sp(e)}function Jl(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function V8(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ep(e,t)}function Ep(e,t){return Ep=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Ep(e,t)}function Zl(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var cT=function(e){V8(t,e);function t(){var n,r;U8(this,t);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=B8(this,(n=Sp(t)).call.apply(n,[this].concat(s))),Zl(Jl(r),"state",{bootstrapped:!1}),Zl(Jl(r),"_unsubscribe",void 0),Zl(Jl(r),"handlePersistorState",function(){var a=r.props.persistor,l=a.getState(),u=l.bootstrapped;u&&(r.props.onBeforeLift?Promise.resolve(r.props.onBeforeLift()).finally(function(){return r.setState({bootstrapped:!0})}):r.setState({bootstrapped:!0}),r._unsubscribe&&r._unsubscribe())}),r}return z8(t,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),t}(T.PureComponent);Zl(cT,"defaultProps",{children:null,loading:null});Lf.createRoot(document.getElementById("root")).render(y.jsx(st.StrictMode,{children:y.jsx(Bb,{basename:"/Learn-Lingo/",children:y.jsx(w6,{store:uT,children:y.jsx(cT,{persistor:j8,children:y.jsx(n8,{})})})})}))});export default W8();
