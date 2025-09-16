var cx=Object.defineProperty;var px=(e,t,r)=>t in e?cx(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var sf=(e,t,r)=>px(e,typeof t!="symbol"?t+"":t,r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();var Q0={exports:{}},is={},Z0={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _a=Symbol.for("react.element"),fx=Symbol.for("react.portal"),hx=Symbol.for("react.fragment"),mx=Symbol.for("react.strict_mode"),gx=Symbol.for("react.profiler"),yx=Symbol.for("react.provider"),vx=Symbol.for("react.context"),_x=Symbol.for("react.forward_ref"),wx=Symbol.for("react.suspense"),$x=Symbol.for("react.memo"),xx=Symbol.for("react.lazy"),uf=Symbol.iterator;function bx(e){return e===null||typeof e!="object"?null:(e=uf&&e[uf]||e["@@iterator"],typeof e=="function"?e:null)}var X0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y0=Object.assign,J0={};function di(e,t,r){this.props=e,this.context=t,this.refs=J0,this.updater=r||X0}di.prototype.isReactComponent={};di.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};di.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ey(){}ey.prototype=di.prototype;function bd(e,t,r){this.props=e,this.context=t,this.refs=J0,this.updater=r||X0}var kd=bd.prototype=new ey;kd.constructor=bd;Y0(kd,di.prototype);kd.isPureReactComponent=!0;var lf=Array.isArray,ty=Object.prototype.hasOwnProperty,Sd={current:null},ry={key:!0,ref:!0,__self:!0,__source:!0};function ny(e,t,r){var n,i={},a=null,o=null;if(t!=null)for(n in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)ty.call(t,n)&&!ry.hasOwnProperty(n)&&(i[n]=t[n]);var s=arguments.length-2;if(s===1)i.children=r;else if(1<s){for(var u=Array(s),l=0;l<s;l++)u[l]=arguments[l+2];i.children=u}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)i[n]===void 0&&(i[n]=s[n]);return{$$typeof:_a,type:e,key:a,ref:o,props:i,_owner:Sd.current}}function kx(e,t){return{$$typeof:_a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ed(e){return typeof e=="object"&&e!==null&&e.$$typeof===_a}function Sx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var df=/\/+/g;function Fs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Sx(""+e.key):t.toString(36)}function po(e,t,r,n,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case _a:case fx:o=!0}}if(o)return o=e,i=i(o),e=n===""?"."+Fs(o,0):n,lf(i)?(r="",e!=null&&(r=e.replace(df,"$&/")+"/"),po(i,t,r,"",function(l){return l})):i!=null&&(Ed(i)&&(i=kx(i,r+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(df,"$&/")+"/")+e)),t.push(i)),1;if(o=0,n=n===""?".":n+":",lf(e))for(var s=0;s<e.length;s++){a=e[s];var u=n+Fs(a,s);o+=po(a,t,r,u,i)}else if(u=bx(e),typeof u=="function")for(e=u.call(e),s=0;!(a=e.next()).done;)a=a.value,u=n+Fs(a,s++),o+=po(a,t,r,u,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Ma(e,t,r){if(e==null)return e;var n=[],i=0;return po(e,n,"","",function(a){return t.call(r,a,i++)}),n}function Ex(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ut={current:null},fo={transition:null},Tx={ReactCurrentDispatcher:ut,ReactCurrentBatchConfig:fo,ReactCurrentOwner:Sd};function iy(){throw Error("act(...) is not supported in production builds of React.")}fe.Children={map:Ma,forEach:function(e,t,r){Ma(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Ma(e,function(){t++}),t},toArray:function(e){return Ma(e,function(t){return t})||[]},only:function(e){if(!Ed(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};fe.Component=di;fe.Fragment=hx;fe.Profiler=gx;fe.PureComponent=bd;fe.StrictMode=mx;fe.Suspense=wx;fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tx;fe.act=iy;fe.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Y0({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Sd.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)ty.call(t,u)&&!ry.hasOwnProperty(u)&&(n[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)n.children=r;else if(1<u){s=Array(u);for(var l=0;l<u;l++)s[l]=arguments[l+2];n.children=s}return{$$typeof:_a,type:e.type,key:i,ref:a,props:n,_owner:o}};fe.createContext=function(e){return e={$$typeof:vx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:yx,_context:e},e.Consumer=e};fe.createElement=ny;fe.createFactory=function(e){var t=ny.bind(null,e);return t.type=e,t};fe.createRef=function(){return{current:null}};fe.forwardRef=function(e){return{$$typeof:_x,render:e}};fe.isValidElement=Ed;fe.lazy=function(e){return{$$typeof:xx,_payload:{_status:-1,_result:e},_init:Ex}};fe.memo=function(e,t){return{$$typeof:$x,type:e,compare:t===void 0?null:t}};fe.startTransition=function(e){var t=fo.transition;fo.transition={};try{e()}finally{fo.transition=t}};fe.unstable_act=iy;fe.useCallback=function(e,t){return ut.current.useCallback(e,t)};fe.useContext=function(e){return ut.current.useContext(e)};fe.useDebugValue=function(){};fe.useDeferredValue=function(e){return ut.current.useDeferredValue(e)};fe.useEffect=function(e,t){return ut.current.useEffect(e,t)};fe.useId=function(){return ut.current.useId()};fe.useImperativeHandle=function(e,t,r){return ut.current.useImperativeHandle(e,t,r)};fe.useInsertionEffect=function(e,t){return ut.current.useInsertionEffect(e,t)};fe.useLayoutEffect=function(e,t){return ut.current.useLayoutEffect(e,t)};fe.useMemo=function(e,t){return ut.current.useMemo(e,t)};fe.useReducer=function(e,t,r){return ut.current.useReducer(e,t,r)};fe.useRef=function(e){return ut.current.useRef(e)};fe.useState=function(e){return ut.current.useState(e)};fe.useSyncExternalStore=function(e,t,r){return ut.current.useSyncExternalStore(e,t,r)};fe.useTransition=function(){return ut.current.useTransition()};fe.version="18.3.1";Z0.exports=fe;var ze=Z0.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cx=ze,Ix=Symbol.for("react.element"),zx=Symbol.for("react.fragment"),Ox=Object.prototype.hasOwnProperty,Nx=Cx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ax={key:!0,ref:!0,__self:!0,__source:!0};function ay(e,t,r){var n,i={},a=null,o=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(n in t)Ox.call(t,n)&&!Ax.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:Ix,type:e,key:a,ref:o,props:i,_owner:Nx.current}}is.Fragment=zx;is.jsx=ay;is.jsxs=ay;Q0.exports=is;var se=Q0.exports,oy={exports:{}},kt={},sy={exports:{}},uy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,W){var J=M.length;M.push(W);e:for(;0<J;){var A=J-1>>>1,L=M[A];if(0<i(L,W))M[A]=W,M[J]=L,J=A;else break e}}function r(M){return M.length===0?null:M[0]}function n(M){if(M.length===0)return null;var W=M[0],J=M.pop();if(J!==W){M[0]=J;e:for(var A=0,L=M.length,j=L>>>1;A<j;){var re=2*(A+1)-1,De=M[re],D=re+1,he=M[D];if(0>i(De,J))D<L&&0>i(he,De)?(M[A]=he,M[D]=J,A=D):(M[A]=De,M[re]=J,A=re);else if(D<L&&0>i(he,J))M[A]=he,M[D]=J,A=D;else break e}}return W}function i(M,W){var J=M.sortIndex-W.sortIndex;return J!==0?J:M.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var u=[],l=[],c=1,f=null,h=3,y=!1,v=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function $(M){for(var W=r(l);W!==null;){if(W.callback===null)n(l);else if(W.startTime<=M)n(l),W.sortIndex=W.expirationTime,t(u,W);else break;W=r(l)}}function b(M){if(w=!1,$(M),!v)if(r(u)!==null)v=!0,H(E);else{var W=r(l);W!==null&&ae(b,W.startTime-M)}}function E(M,W){v=!1,w&&(w=!1,g(I),I=-1),y=!0;var J=h;try{for($(W),f=r(u);f!==null&&(!(f.expirationTime>W)||M&&!K());){var A=f.callback;if(typeof A=="function"){f.callback=null,h=f.priorityLevel;var L=A(f.expirationTime<=W);W=e.unstable_now(),typeof L=="function"?f.callback=L:f===r(u)&&n(u),$(W)}else n(u);f=r(u)}if(f!==null)var j=!0;else{var re=r(l);re!==null&&ae(b,re.startTime-W),j=!1}return j}finally{f=null,h=J,y=!1}}var T=!1,C=null,I=-1,O=5,P=-1;function K(){return!(e.unstable_now()-P<O)}function G(){if(C!==null){var M=e.unstable_now();P=M;var W=!0;try{W=C(!0,M)}finally{W?Q():(T=!1,C=null)}}else T=!1}var Q;if(typeof m=="function")Q=function(){m(G)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,oe=ce.port2;ce.port1.onmessage=G,Q=function(){oe.postMessage(null)}}else Q=function(){S(G,0)};function H(M){C=M,T||(T=!0,Q())}function ae(M,W){I=S(function(){M(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,H(E))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return r(u)},e.unstable_next=function(M){switch(h){case 1:case 2:case 3:var W=3;break;default:W=h}var J=h;h=W;try{return M()}finally{h=J}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,W){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var J=h;h=M;try{return W()}finally{h=J}},e.unstable_scheduleCallback=function(M,W,J){var A=e.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?A+J:A):J=A,M){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=J+L,M={id:c++,callback:W,priorityLevel:M,startTime:J,expirationTime:L,sortIndex:-1},J>A?(M.sortIndex=J,t(l,M),r(u)===null&&M===r(l)&&(w?(g(I),I=-1):w=!0,ae(b,J-A))):(M.sortIndex=L,t(u,M),v||y||(v=!0,H(E))),M},e.unstable_shouldYield=K,e.unstable_wrapCallback=function(M){var W=h;return function(){var J=h;h=W;try{return M.apply(this,arguments)}finally{h=J}}}})(uy);sy.exports=uy;var Rx=sy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mx=ze,bt=Rx;function F(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ly=new Set,ea={};function En(e,t){ti(e,t),ti(e+"Capture",t)}function ti(e,t){for(ea[e]=t,e=0;e<t.length;e++)ly.add(t[e])}var yr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ml=Object.prototype.hasOwnProperty,Bx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cf={},pf={};function Px(e){return ml.call(pf,e)?!0:ml.call(cf,e)?!1:Bx.test(e)?pf[e]=!0:(cf[e]=!0,!1)}function Dx(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Lx(e,t,r,n){if(t===null||typeof t>"u"||Dx(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function lt(e,t,r,n,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var Xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Xe[e]=new lt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Xe[t]=new lt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Xe[e]=new lt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Xe[e]=new lt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Xe[e]=new lt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Xe[e]=new lt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Xe[e]=new lt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Xe[e]=new lt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Xe[e]=new lt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Td=/[\-:]([a-z])/g;function Cd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Td,Cd);Xe[t]=new lt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Td,Cd);Xe[t]=new lt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Td,Cd);Xe[t]=new lt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Xe[e]=new lt(e,1,!1,e.toLowerCase(),null,!1,!1)});Xe.xlinkHref=new lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Xe[e]=new lt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Id(e,t,r,n){var i=Xe.hasOwnProperty(t)?Xe[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Lx(t,r,i,n)&&(r=null),n||i===null?Px(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var $r=Mx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ba=Symbol.for("react.element"),Mn=Symbol.for("react.portal"),Bn=Symbol.for("react.fragment"),zd=Symbol.for("react.strict_mode"),gl=Symbol.for("react.profiler"),dy=Symbol.for("react.provider"),cy=Symbol.for("react.context"),Od=Symbol.for("react.forward_ref"),yl=Symbol.for("react.suspense"),vl=Symbol.for("react.suspense_list"),Nd=Symbol.for("react.memo"),Ar=Symbol.for("react.lazy"),py=Symbol.for("react.offscreen"),ff=Symbol.iterator;function yi(e){return e===null||typeof e!="object"?null:(e=ff&&e[ff]||e["@@iterator"],typeof e=="function"?e:null)}var Me=Object.assign,js;function Bi(e){if(js===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);js=t&&t[1]||""}return`
`+js+e}var qs=!1;function Hs(e,t){if(!e||qs)return"";qs=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(l){var n=l}Reflect.construct(e,[],t)}else{try{t.call()}catch(l){n=l}e.call(t.prototype)}else{try{throw Error()}catch(l){n=l}e()}}catch(l){if(l&&n&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),a=n.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var u=`
`+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{qs=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Bi(e):""}function Ux(e){switch(e.tag){case 5:return Bi(e.type);case 16:return Bi("Lazy");case 13:return Bi("Suspense");case 19:return Bi("SuspenseList");case 0:case 2:case 15:return e=Hs(e.type,!1),e;case 11:return e=Hs(e.type.render,!1),e;case 1:return e=Hs(e.type,!0),e;default:return""}}function _l(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Bn:return"Fragment";case Mn:return"Portal";case gl:return"Profiler";case zd:return"StrictMode";case yl:return"Suspense";case vl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cy:return(e.displayName||"Context")+".Consumer";case dy:return(e._context.displayName||"Context")+".Provider";case Od:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Nd:return t=e.displayName||null,t!==null?t:_l(e.type)||"Memo";case Ar:t=e._payload,e=e._init;try{return _l(e(t))}catch{}}return null}function Wx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _l(t);case 8:return t===zd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Gr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vx(e){var t=fy(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){n=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pa(e){e._valueTracker||(e._valueTracker=Vx(e))}function hy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=fy(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Eo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wl(e,t){var r=t.checked;return Me({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function hf(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Gr(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function my(e,t){t=t.checked,t!=null&&Id(e,"checked",t,!1)}function $l(e,t){my(e,t);var r=Gr(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xl(e,t.type,r):t.hasOwnProperty("defaultValue")&&xl(e,t.type,Gr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function mf(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function xl(e,t,r){(t!=="number"||Eo(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Pi=Array.isArray;function Qn(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Gr(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function bl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(F(91));return Me({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gf(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(F(92));if(Pi(r)){if(1<r.length)throw Error(F(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Gr(r)}}function gy(e,t){var r=Gr(t.value),n=Gr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function yf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function yy(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?yy(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Da,vy=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Da=Da||document.createElement("div"),Da.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Da.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ta(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var ji={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fx=["Webkit","ms","Moz","O"];Object.keys(ji).forEach(function(e){Fx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ji[t]=ji[e]})});function _y(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||ji.hasOwnProperty(e)&&ji[e]?(""+t).trim():t+"px"}function wy(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=_y(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var jx=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sl(e,t){if(t){if(jx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(F(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(F(61))}if(t.style!=null&&typeof t.style!="object")throw Error(F(62))}}function El(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tl=null;function Ad(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cl=null,Zn=null,Xn=null;function vf(e){if(e=xa(e)){if(typeof Cl!="function")throw Error(F(280));var t=e.stateNode;t&&(t=ls(t),Cl(e.stateNode,e.type,t))}}function $y(e){Zn?Xn?Xn.push(e):Xn=[e]:Zn=e}function xy(){if(Zn){var e=Zn,t=Xn;if(Xn=Zn=null,vf(e),t)for(e=0;e<t.length;e++)vf(t[e])}}function by(e,t){return e(t)}function ky(){}var Gs=!1;function Sy(e,t,r){if(Gs)return e(t,r);Gs=!0;try{return by(e,t,r)}finally{Gs=!1,(Zn!==null||Xn!==null)&&(ky(),xy())}}function ra(e,t){var r=e.stateNode;if(r===null)return null;var n=ls(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(F(231,t,typeof r));return r}var Il=!1;if(yr)try{var vi={};Object.defineProperty(vi,"passive",{get:function(){Il=!0}}),window.addEventListener("test",vi,vi),window.removeEventListener("test",vi,vi)}catch{Il=!1}function qx(e,t,r,n,i,a,o,s,u){var l=Array.prototype.slice.call(arguments,3);try{t.apply(r,l)}catch(c){this.onError(c)}}var qi=!1,To=null,Co=!1,zl=null,Hx={onError:function(e){qi=!0,To=e}};function Gx(e,t,r,n,i,a,o,s,u){qi=!1,To=null,qx.apply(Hx,arguments)}function Kx(e,t,r,n,i,a,o,s,u){if(Gx.apply(this,arguments),qi){if(qi){var l=To;qi=!1,To=null}else throw Error(F(198));Co||(Co=!0,zl=l)}}function Tn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Ey(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _f(e){if(Tn(e)!==e)throw Error(F(188))}function Qx(e){var t=e.alternate;if(!t){if(t=Tn(e),t===null)throw Error(F(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var a=i.alternate;if(a===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===r)return _f(i),e;if(a===n)return _f(i),t;a=a.sibling}throw Error(F(188))}if(r.return!==n.return)r=i,n=a;else{for(var o=!1,s=i.child;s;){if(s===r){o=!0,r=i,n=a;break}if(s===n){o=!0,n=i,r=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===r){o=!0,r=a,n=i;break}if(s===n){o=!0,n=a,r=i;break}s=s.sibling}if(!o)throw Error(F(189))}}if(r.alternate!==n)throw Error(F(190))}if(r.tag!==3)throw Error(F(188));return r.stateNode.current===r?e:t}function Ty(e){return e=Qx(e),e!==null?Cy(e):null}function Cy(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Cy(e);if(t!==null)return t;e=e.sibling}return null}var Iy=bt.unstable_scheduleCallback,wf=bt.unstable_cancelCallback,Zx=bt.unstable_shouldYield,Xx=bt.unstable_requestPaint,Ue=bt.unstable_now,Yx=bt.unstable_getCurrentPriorityLevel,Rd=bt.unstable_ImmediatePriority,zy=bt.unstable_UserBlockingPriority,Io=bt.unstable_NormalPriority,Jx=bt.unstable_LowPriority,Oy=bt.unstable_IdlePriority,as=null,ir=null;function eb(e){if(ir&&typeof ir.onCommitFiberRoot=="function")try{ir.onCommitFiberRoot(as,e,void 0,(e.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:nb,tb=Math.log,rb=Math.LN2;function nb(e){return e>>>=0,e===0?32:31-(tb(e)/rb|0)|0}var La=64,Ua=4194304;function Di(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zo(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,a=e.pingedLanes,o=r&268435455;if(o!==0){var s=o&~i;s!==0?n=Di(s):(a&=o,a!==0&&(n=Di(a)))}else o=r&~i,o!==0?n=Di(o):a!==0&&(n=Di(a));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Ht(t),i=1<<r,n|=e[r],t&=~i;return n}function ib(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ab(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Ht(a),s=1<<o,u=i[o];u===-1?(!(s&r)||s&n)&&(i[o]=ib(s,t)):u<=t&&(e.expiredLanes|=s),a&=~s}}function Ol(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ny(){var e=La;return La<<=1,!(La&4194240)&&(La=64),e}function Ks(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function wa(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ht(t),e[t]=r}function ob(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-Ht(r),a=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~a}}function Md(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Ht(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var be=0;function Ay(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ry,Bd,My,By,Py,Nl=!1,Wa=[],Lr=null,Ur=null,Wr=null,na=new Map,ia=new Map,Mr=[],sb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $f(e,t){switch(e){case"focusin":case"focusout":Lr=null;break;case"dragenter":case"dragleave":Ur=null;break;case"mouseover":case"mouseout":Wr=null;break;case"pointerover":case"pointerout":na.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ia.delete(t.pointerId)}}function _i(e,t,r,n,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:a,targetContainers:[i]},t!==null&&(t=xa(t),t!==null&&Bd(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ub(e,t,r,n,i){switch(t){case"focusin":return Lr=_i(Lr,e,t,r,n,i),!0;case"dragenter":return Ur=_i(Ur,e,t,r,n,i),!0;case"mouseover":return Wr=_i(Wr,e,t,r,n,i),!0;case"pointerover":var a=i.pointerId;return na.set(a,_i(na.get(a)||null,e,t,r,n,i)),!0;case"gotpointercapture":return a=i.pointerId,ia.set(a,_i(ia.get(a)||null,e,t,r,n,i)),!0}return!1}function Dy(e){var t=fn(e.target);if(t!==null){var r=Tn(t);if(r!==null){if(t=r.tag,t===13){if(t=Ey(r),t!==null){e.blockedOn=t,Py(e.priority,function(){My(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ho(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Al(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Tl=n,r.target.dispatchEvent(n),Tl=null}else return t=xa(r),t!==null&&Bd(t),e.blockedOn=r,!1;t.shift()}return!0}function xf(e,t,r){ho(e)&&r.delete(t)}function lb(){Nl=!1,Lr!==null&&ho(Lr)&&(Lr=null),Ur!==null&&ho(Ur)&&(Ur=null),Wr!==null&&ho(Wr)&&(Wr=null),na.forEach(xf),ia.forEach(xf)}function wi(e,t){e.blockedOn===t&&(e.blockedOn=null,Nl||(Nl=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,lb)))}function aa(e){function t(i){return wi(i,e)}if(0<Wa.length){wi(Wa[0],e);for(var r=1;r<Wa.length;r++){var n=Wa[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Lr!==null&&wi(Lr,e),Ur!==null&&wi(Ur,e),Wr!==null&&wi(Wr,e),na.forEach(t),ia.forEach(t),r=0;r<Mr.length;r++)n=Mr[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Mr.length&&(r=Mr[0],r.blockedOn===null);)Dy(r),r.blockedOn===null&&Mr.shift()}var Yn=$r.ReactCurrentBatchConfig,Oo=!0;function db(e,t,r,n){var i=be,a=Yn.transition;Yn.transition=null;try{be=1,Pd(e,t,r,n)}finally{be=i,Yn.transition=a}}function cb(e,t,r,n){var i=be,a=Yn.transition;Yn.transition=null;try{be=4,Pd(e,t,r,n)}finally{be=i,Yn.transition=a}}function Pd(e,t,r,n){if(Oo){var i=Al(e,t,r,n);if(i===null)iu(e,t,n,No,r),$f(e,n);else if(ub(i,e,t,r,n))n.stopPropagation();else if($f(e,n),t&4&&-1<sb.indexOf(e)){for(;i!==null;){var a=xa(i);if(a!==null&&Ry(a),a=Al(e,t,r,n),a===null&&iu(e,t,n,No,r),a===i)break;i=a}i!==null&&n.stopPropagation()}else iu(e,t,n,null,r)}}var No=null;function Al(e,t,r,n){if(No=null,e=Ad(n),e=fn(e),e!==null)if(t=Tn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Ey(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return No=e,null}function Ly(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yx()){case Rd:return 1;case zy:return 4;case Io:case Jx:return 16;case Oy:return 536870912;default:return 16}default:return 16}}var Pr=null,Dd=null,mo=null;function Uy(){if(mo)return mo;var e,t=Dd,r=t.length,n,i="value"in Pr?Pr.value:Pr.textContent,a=i.length;for(e=0;e<r&&t[e]===i[e];e++);var o=r-e;for(n=1;n<=o&&t[r-n]===i[a-n];n++);return mo=i.slice(e,1<n?1-n:void 0)}function go(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Va(){return!0}function bf(){return!1}function St(e){function t(r,n,i,a,o){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Va:bf,this.isPropagationStopped=bf,this}return Me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Va)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Va)},persist:function(){},isPersistent:Va}),t}var ci={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ld=St(ci),$a=Me({},ci,{view:0,detail:0}),pb=St($a),Qs,Zs,$i,os=Me({},$a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ud,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$i&&($i&&e.type==="mousemove"?(Qs=e.screenX-$i.screenX,Zs=e.screenY-$i.screenY):Zs=Qs=0,$i=e),Qs)},movementY:function(e){return"movementY"in e?e.movementY:Zs}}),kf=St(os),fb=Me({},os,{dataTransfer:0}),hb=St(fb),mb=Me({},$a,{relatedTarget:0}),Xs=St(mb),gb=Me({},ci,{animationName:0,elapsedTime:0,pseudoElement:0}),yb=St(gb),vb=Me({},ci,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_b=St(vb),wb=Me({},ci,{data:0}),Sf=St(wb),$b={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=bb[e])?!!t[e]:!1}function Ud(){return kb}var Sb=Me({},$a,{key:function(e){if(e.key){var t=$b[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=go(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ud,charCode:function(e){return e.type==="keypress"?go(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?go(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Eb=St(Sb),Tb=Me({},os,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ef=St(Tb),Cb=Me({},$a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ud}),Ib=St(Cb),zb=Me({},ci,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ob=St(zb),Nb=Me({},os,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ab=St(Nb),Rb=[9,13,27,32],Wd=yr&&"CompositionEvent"in window,Hi=null;yr&&"documentMode"in document&&(Hi=document.documentMode);var Mb=yr&&"TextEvent"in window&&!Hi,Wy=yr&&(!Wd||Hi&&8<Hi&&11>=Hi),Tf=" ",Cf=!1;function Vy(e,t){switch(e){case"keyup":return Rb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pn=!1;function Bb(e,t){switch(e){case"compositionend":return Fy(t);case"keypress":return t.which!==32?null:(Cf=!0,Tf);case"textInput":return e=t.data,e===Tf&&Cf?null:e;default:return null}}function Pb(e,t){if(Pn)return e==="compositionend"||!Wd&&Vy(e,t)?(e=Uy(),mo=Dd=Pr=null,Pn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wy&&t.locale!=="ko"?null:t.data;default:return null}}var Db={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function If(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Db[e.type]:t==="textarea"}function jy(e,t,r,n){$y(n),t=Ao(t,"onChange"),0<t.length&&(r=new Ld("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Gi=null,oa=null;function Lb(e){t1(e,0)}function ss(e){var t=Un(e);if(hy(t))return e}function Ub(e,t){if(e==="change")return t}var qy=!1;if(yr){var Ys;if(yr){var Js="oninput"in document;if(!Js){var zf=document.createElement("div");zf.setAttribute("oninput","return;"),Js=typeof zf.oninput=="function"}Ys=Js}else Ys=!1;qy=Ys&&(!document.documentMode||9<document.documentMode)}function Of(){Gi&&(Gi.detachEvent("onpropertychange",Hy),oa=Gi=null)}function Hy(e){if(e.propertyName==="value"&&ss(oa)){var t=[];jy(t,oa,e,Ad(e)),Sy(Lb,t)}}function Wb(e,t,r){e==="focusin"?(Of(),Gi=t,oa=r,Gi.attachEvent("onpropertychange",Hy)):e==="focusout"&&Of()}function Vb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ss(oa)}function Fb(e,t){if(e==="click")return ss(t)}function jb(e,t){if(e==="input"||e==="change")return ss(t)}function qb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Qt=typeof Object.is=="function"?Object.is:qb;function sa(e,t){if(Qt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!ml.call(t,i)||!Qt(e[i],t[i]))return!1}return!0}function Nf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Af(e,t){var r=Nf(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Nf(r)}}function Gy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ky(){for(var e=window,t=Eo();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Eo(e.document)}return t}function Vd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Hb(e){var t=Ky(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Gy(r.ownerDocument.documentElement,r)){if(n!==null&&Vd(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,a=Math.min(n.start,i);n=n.end===void 0?a:Math.min(n.end,i),!e.extend&&a>n&&(i=n,n=a,a=i),i=Af(r,a);var o=Af(r,n);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>n?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gb=yr&&"documentMode"in document&&11>=document.documentMode,Dn=null,Rl=null,Ki=null,Ml=!1;function Rf(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ml||Dn==null||Dn!==Eo(n)||(n=Dn,"selectionStart"in n&&Vd(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Ki&&sa(Ki,n)||(Ki=n,n=Ao(Rl,"onSelect"),0<n.length&&(t=new Ld("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Dn)))}function Fa(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Ln={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionend:Fa("Transition","TransitionEnd")},eu={},Qy={};yr&&(Qy=document.createElement("div").style,"AnimationEvent"in window||(delete Ln.animationend.animation,delete Ln.animationiteration.animation,delete Ln.animationstart.animation),"TransitionEvent"in window||delete Ln.transitionend.transition);function us(e){if(eu[e])return eu[e];if(!Ln[e])return e;var t=Ln[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Qy)return eu[e]=t[r];return e}var Zy=us("animationend"),Xy=us("animationiteration"),Yy=us("animationstart"),Jy=us("transitionend"),e1=new Map,Mf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zr(e,t){e1.set(e,t),En(t,[e])}for(var tu=0;tu<Mf.length;tu++){var ru=Mf[tu],Kb=ru.toLowerCase(),Qb=ru[0].toUpperCase()+ru.slice(1);Zr(Kb,"on"+Qb)}Zr(Zy,"onAnimationEnd");Zr(Xy,"onAnimationIteration");Zr(Yy,"onAnimationStart");Zr("dblclick","onDoubleClick");Zr("focusin","onFocus");Zr("focusout","onBlur");Zr(Jy,"onTransitionEnd");ti("onMouseEnter",["mouseout","mouseover"]);ti("onMouseLeave",["mouseout","mouseover"]);ti("onPointerEnter",["pointerout","pointerover"]);ti("onPointerLeave",["pointerout","pointerover"]);En("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));En("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));En("onBeforeInput",["compositionend","keypress","textInput","paste"]);En("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));En("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));En("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Li="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zb=new Set("cancel close invalid load scroll toggle".split(" ").concat(Li));function Bf(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Kx(n,t,void 0,e),e.currentTarget=null}function t1(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var a=void 0;if(t)for(var o=n.length-1;0<=o;o--){var s=n[o],u=s.instance,l=s.currentTarget;if(s=s.listener,u!==a&&i.isPropagationStopped())break e;Bf(i,s,l),a=u}else for(o=0;o<n.length;o++){if(s=n[o],u=s.instance,l=s.currentTarget,s=s.listener,u!==a&&i.isPropagationStopped())break e;Bf(i,s,l),a=u}}}if(Co)throw e=zl,Co=!1,zl=null,e}function Te(e,t){var r=t[Ul];r===void 0&&(r=t[Ul]=new Set);var n=e+"__bubble";r.has(n)||(r1(t,e,2,!1),r.add(n))}function nu(e,t,r){var n=0;t&&(n|=4),r1(r,e,n,t)}var ja="_reactListening"+Math.random().toString(36).slice(2);function ua(e){if(!e[ja]){e[ja]=!0,ly.forEach(function(r){r!=="selectionchange"&&(Zb.has(r)||nu(r,!1,e),nu(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ja]||(t[ja]=!0,nu("selectionchange",!1,t))}}function r1(e,t,r,n){switch(Ly(t)){case 1:var i=db;break;case 4:i=cb;break;default:i=Pd}r=i.bind(null,t,r,e),i=void 0,!Il||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function iu(e,t,r,n,i){var a=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var s=n.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=n.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;s!==null;){if(o=fn(s),o===null)return;if(u=o.tag,u===5||u===6){n=a=o;continue e}s=s.parentNode}}n=n.return}Sy(function(){var l=a,c=Ad(r),f=[];e:{var h=e1.get(e);if(h!==void 0){var y=Ld,v=e;switch(e){case"keypress":if(go(r)===0)break e;case"keydown":case"keyup":y=Eb;break;case"focusin":v="focus",y=Xs;break;case"focusout":v="blur",y=Xs;break;case"beforeblur":case"afterblur":y=Xs;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=kf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=hb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Ib;break;case Zy:case Xy:case Yy:y=yb;break;case Jy:y=Ob;break;case"scroll":y=pb;break;case"wheel":y=Ab;break;case"copy":case"cut":case"paste":y=_b;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ef}var w=(t&4)!==0,S=!w&&e==="scroll",g=w?h!==null?h+"Capture":null:h;w=[];for(var m=l,$;m!==null;){$=m;var b=$.stateNode;if($.tag===5&&b!==null&&($=b,g!==null&&(b=ra(m,g),b!=null&&w.push(la(m,b,$)))),S)break;m=m.return}0<w.length&&(h=new y(h,v,null,r,c),f.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&r!==Tl&&(v=r.relatedTarget||r.fromElement)&&(fn(v)||v[vr]))break e;if((y||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,y?(v=r.relatedTarget||r.toElement,y=l,v=v?fn(v):null,v!==null&&(S=Tn(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=l),y!==v)){if(w=kf,b="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(w=Ef,b="onPointerLeave",g="onPointerEnter",m="pointer"),S=y==null?h:Un(y),$=v==null?h:Un(v),h=new w(b,m+"leave",y,r,c),h.target=S,h.relatedTarget=$,b=null,fn(c)===l&&(w=new w(g,m+"enter",v,r,c),w.target=$,w.relatedTarget=S,b=w),S=b,y&&v)t:{for(w=y,g=v,m=0,$=w;$;$=An($))m++;for($=0,b=g;b;b=An(b))$++;for(;0<m-$;)w=An(w),m--;for(;0<$-m;)g=An(g),$--;for(;m--;){if(w===g||g!==null&&w===g.alternate)break t;w=An(w),g=An(g)}w=null}else w=null;y!==null&&Pf(f,h,y,w,!1),v!==null&&S!==null&&Pf(f,S,v,w,!0)}}e:{if(h=l?Un(l):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var E=Ub;else if(If(h))if(qy)E=jb;else{E=Vb;var T=Wb}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=Fb);if(E&&(E=E(e,l))){jy(f,E,r,c);break e}T&&T(e,h,l),e==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&xl(h,"number",h.value)}switch(T=l?Un(l):window,e){case"focusin":(If(T)||T.contentEditable==="true")&&(Dn=T,Rl=l,Ki=null);break;case"focusout":Ki=Rl=Dn=null;break;case"mousedown":Ml=!0;break;case"contextmenu":case"mouseup":case"dragend":Ml=!1,Rf(f,r,c);break;case"selectionchange":if(Gb)break;case"keydown":case"keyup":Rf(f,r,c)}var C;if(Wd)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Pn?Vy(e,r)&&(I="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(I="onCompositionStart");I&&(Wy&&r.locale!=="ko"&&(Pn||I!=="onCompositionStart"?I==="onCompositionEnd"&&Pn&&(C=Uy()):(Pr=c,Dd="value"in Pr?Pr.value:Pr.textContent,Pn=!0)),T=Ao(l,I),0<T.length&&(I=new Sf(I,e,null,r,c),f.push({event:I,listeners:T}),C?I.data=C:(C=Fy(r),C!==null&&(I.data=C)))),(C=Mb?Bb(e,r):Pb(e,r))&&(l=Ao(l,"onBeforeInput"),0<l.length&&(c=new Sf("onBeforeInput","beforeinput",null,r,c),f.push({event:c,listeners:l}),c.data=C))}t1(f,t)})}function la(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ao(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=ra(e,r),a!=null&&n.unshift(la(e,a,i)),a=ra(e,t),a!=null&&n.push(la(e,a,i))),e=e.return}return n}function An(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Pf(e,t,r,n,i){for(var a=t._reactName,o=[];r!==null&&r!==n;){var s=r,u=s.alternate,l=s.stateNode;if(u!==null&&u===n)break;s.tag===5&&l!==null&&(s=l,i?(u=ra(r,a),u!=null&&o.unshift(la(r,u,s))):i||(u=ra(r,a),u!=null&&o.push(la(r,u,s)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var Xb=/\r\n?/g,Yb=/\u0000|\uFFFD/g;function Df(e){return(typeof e=="string"?e:""+e).replace(Xb,`
`).replace(Yb,"")}function qa(e,t,r){if(t=Df(t),Df(e)!==t&&r)throw Error(F(425))}function Ro(){}var Bl=null,Pl=null;function Dl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ll=typeof setTimeout=="function"?setTimeout:void 0,Jb=typeof clearTimeout=="function"?clearTimeout:void 0,Lf=typeof Promise=="function"?Promise:void 0,e3=typeof queueMicrotask=="function"?queueMicrotask:typeof Lf<"u"?function(e){return Lf.resolve(null).then(e).catch(t3)}:Ll;function t3(e){setTimeout(function(){throw e})}function au(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),aa(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);aa(t)}function Vr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Uf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var pi=Math.random().toString(36).slice(2),nr="__reactFiber$"+pi,da="__reactProps$"+pi,vr="__reactContainer$"+pi,Ul="__reactEvents$"+pi,r3="__reactListeners$"+pi,n3="__reactHandles$"+pi;function fn(e){var t=e[nr];if(t)return t;for(var r=e.parentNode;r;){if(t=r[vr]||r[nr]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Uf(e);e!==null;){if(r=e[nr])return r;e=Uf(e)}return t}e=r,r=e.parentNode}return null}function xa(e){return e=e[nr]||e[vr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Un(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function ls(e){return e[da]||null}var Wl=[],Wn=-1;function Xr(e){return{current:e}}function Ce(e){0>Wn||(e.current=Wl[Wn],Wl[Wn]=null,Wn--)}function Se(e,t){Wn++,Wl[Wn]=e.current,e.current=t}var Kr={},rt=Xr(Kr),ft=Xr(!1),vn=Kr;function ri(e,t){var r=e.type.contextTypes;if(!r)return Kr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in r)i[a]=t[a];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ht(e){return e=e.childContextTypes,e!=null}function Mo(){Ce(ft),Ce(rt)}function Wf(e,t,r){if(rt.current!==Kr)throw Error(F(168));Se(rt,t),Se(ft,r)}function n1(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(F(108,Wx(e)||"Unknown",i));return Me({},r,n)}function Bo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Kr,vn=rt.current,Se(rt,e),Se(ft,ft.current),!0}function Vf(e,t,r){var n=e.stateNode;if(!n)throw Error(F(169));r?(e=n1(e,t,vn),n.__reactInternalMemoizedMergedChildContext=e,Ce(ft),Ce(rt),Se(rt,e)):Ce(ft),Se(ft,r)}var pr=null,ds=!1,ou=!1;function i1(e){pr===null?pr=[e]:pr.push(e)}function i3(e){ds=!0,i1(e)}function Yr(){if(!ou&&pr!==null){ou=!0;var e=0,t=be;try{var r=pr;for(be=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}pr=null,ds=!1}catch(i){throw pr!==null&&(pr=pr.slice(e+1)),Iy(Rd,Yr),i}finally{be=t,ou=!1}}return null}var Vn=[],Fn=0,Po=null,Do=0,Ct=[],It=0,_n=null,hr=1,mr="";function un(e,t){Vn[Fn++]=Do,Vn[Fn++]=Po,Po=e,Do=t}function a1(e,t,r){Ct[It++]=hr,Ct[It++]=mr,Ct[It++]=_n,_n=e;var n=hr;e=mr;var i=32-Ht(n)-1;n&=~(1<<i),r+=1;var a=32-Ht(t)+i;if(30<a){var o=i-i%5;a=(n&(1<<o)-1).toString(32),n>>=o,i-=o,hr=1<<32-Ht(t)+i|r<<i|n,mr=a+e}else hr=1<<a|r<<i|n,mr=e}function Fd(e){e.return!==null&&(un(e,1),a1(e,1,0))}function jd(e){for(;e===Po;)Po=Vn[--Fn],Vn[Fn]=null,Do=Vn[--Fn],Vn[Fn]=null;for(;e===_n;)_n=Ct[--It],Ct[It]=null,mr=Ct[--It],Ct[It]=null,hr=Ct[--It],Ct[It]=null}var $t=null,wt=null,Oe=!1,Ft=null;function o1(e,t){var r=zt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Ff(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$t=e,wt=Vr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$t=e,wt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=_n!==null?{id:hr,overflow:mr}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=zt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,$t=e,wt=null,!0):!1;default:return!1}}function Vl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fl(e){if(Oe){var t=wt;if(t){var r=t;if(!Ff(e,t)){if(Vl(e))throw Error(F(418));t=Vr(r.nextSibling);var n=$t;t&&Ff(e,t)?o1(n,r):(e.flags=e.flags&-4097|2,Oe=!1,$t=e)}}else{if(Vl(e))throw Error(F(418));e.flags=e.flags&-4097|2,Oe=!1,$t=e}}}function jf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$t=e}function Ha(e){if(e!==$t)return!1;if(!Oe)return jf(e),Oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Dl(e.type,e.memoizedProps)),t&&(t=wt)){if(Vl(e))throw s1(),Error(F(418));for(;t;)o1(e,t),t=Vr(t.nextSibling)}if(jf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){wt=Vr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}wt=null}}else wt=$t?Vr(e.stateNode.nextSibling):null;return!0}function s1(){for(var e=wt;e;)e=Vr(e.nextSibling)}function ni(){wt=$t=null,Oe=!1}function qd(e){Ft===null?Ft=[e]:Ft.push(e)}var a3=$r.ReactCurrentBatchConfig;function xi(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(F(309));var n=r.stateNode}if(!n)throw Error(F(147,e));var i=n,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(F(284));if(!r._owner)throw Error(F(290,e))}return e}function Ga(e,t){throw e=Object.prototype.toString.call(t),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function qf(e){var t=e._init;return t(e._payload)}function u1(e){function t(g,m){if(e){var $=g.deletions;$===null?(g.deletions=[m],g.flags|=16):$.push(m)}}function r(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function n(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=Hr(g,m),g.index=0,g.sibling=null,g}function a(g,m,$){return g.index=$,e?($=g.alternate,$!==null?($=$.index,$<m?(g.flags|=2,m):$):(g.flags|=2,m)):(g.flags|=1048576,m)}function o(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,m,$,b){return m===null||m.tag!==6?(m=fu($,g.mode,b),m.return=g,m):(m=i(m,$),m.return=g,m)}function u(g,m,$,b){var E=$.type;return E===Bn?c(g,m,$.props.children,b,$.key):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ar&&qf(E)===m.type)?(b=i(m,$.props),b.ref=xi(g,m,$),b.return=g,b):(b=bo($.type,$.key,$.props,null,g.mode,b),b.ref=xi(g,m,$),b.return=g,b)}function l(g,m,$,b){return m===null||m.tag!==4||m.stateNode.containerInfo!==$.containerInfo||m.stateNode.implementation!==$.implementation?(m=hu($,g.mode,b),m.return=g,m):(m=i(m,$.children||[]),m.return=g,m)}function c(g,m,$,b,E){return m===null||m.tag!==7?(m=yn($,g.mode,b,E),m.return=g,m):(m=i(m,$),m.return=g,m)}function f(g,m,$){if(typeof m=="string"&&m!==""||typeof m=="number")return m=fu(""+m,g.mode,$),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ba:return $=bo(m.type,m.key,m.props,null,g.mode,$),$.ref=xi(g,null,m),$.return=g,$;case Mn:return m=hu(m,g.mode,$),m.return=g,m;case Ar:var b=m._init;return f(g,b(m._payload),$)}if(Pi(m)||yi(m))return m=yn(m,g.mode,$,null),m.return=g,m;Ga(g,m)}return null}function h(g,m,$,b){var E=m!==null?m.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return E!==null?null:s(g,m,""+$,b);if(typeof $=="object"&&$!==null){switch($.$$typeof){case Ba:return $.key===E?u(g,m,$,b):null;case Mn:return $.key===E?l(g,m,$,b):null;case Ar:return E=$._init,h(g,m,E($._payload),b)}if(Pi($)||yi($))return E!==null?null:c(g,m,$,b,null);Ga(g,$)}return null}function y(g,m,$,b,E){if(typeof b=="string"&&b!==""||typeof b=="number")return g=g.get($)||null,s(m,g,""+b,E);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ba:return g=g.get(b.key===null?$:b.key)||null,u(m,g,b,E);case Mn:return g=g.get(b.key===null?$:b.key)||null,l(m,g,b,E);case Ar:var T=b._init;return y(g,m,$,T(b._payload),E)}if(Pi(b)||yi(b))return g=g.get($)||null,c(m,g,b,E,null);Ga(m,b)}return null}function v(g,m,$,b){for(var E=null,T=null,C=m,I=m=0,O=null;C!==null&&I<$.length;I++){C.index>I?(O=C,C=null):O=C.sibling;var P=h(g,C,$[I],b);if(P===null){C===null&&(C=O);break}e&&C&&P.alternate===null&&t(g,C),m=a(P,m,I),T===null?E=P:T.sibling=P,T=P,C=O}if(I===$.length)return r(g,C),Oe&&un(g,I),E;if(C===null){for(;I<$.length;I++)C=f(g,$[I],b),C!==null&&(m=a(C,m,I),T===null?E=C:T.sibling=C,T=C);return Oe&&un(g,I),E}for(C=n(g,C);I<$.length;I++)O=y(C,g,I,$[I],b),O!==null&&(e&&O.alternate!==null&&C.delete(O.key===null?I:O.key),m=a(O,m,I),T===null?E=O:T.sibling=O,T=O);return e&&C.forEach(function(K){return t(g,K)}),Oe&&un(g,I),E}function w(g,m,$,b){var E=yi($);if(typeof E!="function")throw Error(F(150));if($=E.call($),$==null)throw Error(F(151));for(var T=E=null,C=m,I=m=0,O=null,P=$.next();C!==null&&!P.done;I++,P=$.next()){C.index>I?(O=C,C=null):O=C.sibling;var K=h(g,C,P.value,b);if(K===null){C===null&&(C=O);break}e&&C&&K.alternate===null&&t(g,C),m=a(K,m,I),T===null?E=K:T.sibling=K,T=K,C=O}if(P.done)return r(g,C),Oe&&un(g,I),E;if(C===null){for(;!P.done;I++,P=$.next())P=f(g,P.value,b),P!==null&&(m=a(P,m,I),T===null?E=P:T.sibling=P,T=P);return Oe&&un(g,I),E}for(C=n(g,C);!P.done;I++,P=$.next())P=y(C,g,I,P.value,b),P!==null&&(e&&P.alternate!==null&&C.delete(P.key===null?I:P.key),m=a(P,m,I),T===null?E=P:T.sibling=P,T=P);return e&&C.forEach(function(G){return t(g,G)}),Oe&&un(g,I),E}function S(g,m,$,b){if(typeof $=="object"&&$!==null&&$.type===Bn&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case Ba:e:{for(var E=$.key,T=m;T!==null;){if(T.key===E){if(E=$.type,E===Bn){if(T.tag===7){r(g,T.sibling),m=i(T,$.props.children),m.return=g,g=m;break e}}else if(T.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ar&&qf(E)===T.type){r(g,T.sibling),m=i(T,$.props),m.ref=xi(g,T,$),m.return=g,g=m;break e}r(g,T);break}else t(g,T);T=T.sibling}$.type===Bn?(m=yn($.props.children,g.mode,b,$.key),m.return=g,g=m):(b=bo($.type,$.key,$.props,null,g.mode,b),b.ref=xi(g,m,$),b.return=g,g=b)}return o(g);case Mn:e:{for(T=$.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===$.containerInfo&&m.stateNode.implementation===$.implementation){r(g,m.sibling),m=i(m,$.children||[]),m.return=g,g=m;break e}else{r(g,m);break}else t(g,m);m=m.sibling}m=hu($,g.mode,b),m.return=g,g=m}return o(g);case Ar:return T=$._init,S(g,m,T($._payload),b)}if(Pi($))return v(g,m,$,b);if(yi($))return w(g,m,$,b);Ga(g,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,m!==null&&m.tag===6?(r(g,m.sibling),m=i(m,$),m.return=g,g=m):(r(g,m),m=fu($,g.mode,b),m.return=g,g=m),o(g)):r(g,m)}return S}var ii=u1(!0),l1=u1(!1),Lo=Xr(null),Uo=null,jn=null,Hd=null;function Gd(){Hd=jn=Uo=null}function Kd(e){var t=Lo.current;Ce(Lo),e._currentValue=t}function jl(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Jn(e,t){Uo=e,Hd=jn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pt=!0),e.firstContext=null)}function Nt(e){var t=e._currentValue;if(Hd!==e)if(e={context:e,memoizedValue:t,next:null},jn===null){if(Uo===null)throw Error(F(308));jn=e,Uo.dependencies={lanes:0,firstContext:e}}else jn=jn.next=e;return t}var hn=null;function Qd(e){hn===null?hn=[e]:hn.push(e)}function d1(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,Qd(t)):(r.next=i.next,i.next=r),t.interleaved=r,_r(e,n)}function _r(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Rr=!1;function Zd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function c1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function gr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,ye&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,_r(e,r)}return i=n.interleaved,i===null?(t.next=t,Qd(n)):(t.next=i.next,i.next=t),n.interleaved=t,_r(e,r)}function yo(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Md(e,r)}}function Hf(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?i=a=o:a=a.next=o,r=r.next}while(r!==null);a===null?i=a=t:a=a.next=t}else i=a=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Wo(e,t,r,n){var i=e.updateQueue;Rr=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,l=u.next;u.next=null,o===null?a=l:o.next=l,o=u;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==o&&(s===null?c.firstBaseUpdate=l:s.next=l,c.lastBaseUpdate=u))}if(a!==null){var f=i.baseState;o=0,c=l=u=null,s=a;do{var h=s.lane,y=s.eventTime;if((n&h)===h){c!==null&&(c=c.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,w=s;switch(h=t,y=r,w.tag){case 1:if(v=w.payload,typeof v=="function"){f=v.call(y,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,h=typeof v=="function"?v.call(y,f,h):v,h==null)break e;f=Me({},f,h);break e;case 2:Rr=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else y={eventTime:y,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(l=c=y,u=f):c=c.next=y,o|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(u=f),i.baseState=u,i.firstBaseUpdate=l,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);$n|=o,e.lanes=o,e.memoizedState=f}}function Gf(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(F(191,i));i.call(n)}}}var ba={},ar=Xr(ba),ca=Xr(ba),pa=Xr(ba);function mn(e){if(e===ba)throw Error(F(174));return e}function Xd(e,t){switch(Se(pa,t),Se(ca,e),Se(ar,ba),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:kl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=kl(t,e)}Ce(ar),Se(ar,t)}function ai(){Ce(ar),Ce(ca),Ce(pa)}function p1(e){mn(pa.current);var t=mn(ar.current),r=kl(t,e.type);t!==r&&(Se(ca,e),Se(ar,r))}function Yd(e){ca.current===e&&(Ce(ar),Ce(ca))}var Ae=Xr(0);function Vo(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var su=[];function Jd(){for(var e=0;e<su.length;e++)su[e]._workInProgressVersionPrimary=null;su.length=0}var vo=$r.ReactCurrentDispatcher,uu=$r.ReactCurrentBatchConfig,wn=0,Re=null,Ve=null,He=null,Fo=!1,Qi=!1,fa=0,o3=0;function Ye(){throw Error(F(321))}function ec(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Qt(e[r],t[r]))return!1;return!0}function tc(e,t,r,n,i,a){if(wn=a,Re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,vo.current=e===null||e.memoizedState===null?d3:c3,e=r(n,i),Qi){a=0;do{if(Qi=!1,fa=0,25<=a)throw Error(F(301));a+=1,He=Ve=null,t.updateQueue=null,vo.current=p3,e=r(n,i)}while(Qi)}if(vo.current=jo,t=Ve!==null&&Ve.next!==null,wn=0,He=Ve=Re=null,Fo=!1,t)throw Error(F(300));return e}function rc(){var e=fa!==0;return fa=0,e}function rr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Re.memoizedState=He=e:He=He.next=e,He}function At(){if(Ve===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=Ve.next;var t=He===null?Re.memoizedState:He.next;if(t!==null)He=t,Ve=e;else{if(e===null)throw Error(F(310));Ve=e,e={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},He===null?Re.memoizedState=He=e:He=He.next=e}return He}function ha(e,t){return typeof t=="function"?t(e):t}function lu(e){var t=At(),r=t.queue;if(r===null)throw Error(F(311));r.lastRenderedReducer=e;var n=Ve,i=n.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}n.baseQueue=i=a,r.pending=null}if(i!==null){a=i.next,n=n.baseState;var s=o=null,u=null,l=a;do{var c=l.lane;if((wn&c)===c)u!==null&&(u=u.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),n=l.hasEagerState?l.eagerState:e(n,l.action);else{var f={lane:c,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};u===null?(s=u=f,o=n):u=u.next=f,Re.lanes|=c,$n|=c}l=l.next}while(l!==null&&l!==a);u===null?o=n:u.next=s,Qt(n,t.memoizedState)||(pt=!0),t.memoizedState=n,t.baseState=o,t.baseQueue=u,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do a=i.lane,Re.lanes|=a,$n|=a,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function du(e){var t=At(),r=t.queue;if(r===null)throw Error(F(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,a=t.memoizedState;if(i!==null){r.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Qt(a,t.memoizedState)||(pt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,n]}function f1(){}function h1(e,t){var r=Re,n=At(),i=t(),a=!Qt(n.memoizedState,i);if(a&&(n.memoizedState=i,pt=!0),n=n.queue,nc(y1.bind(null,r,n,e),[e]),n.getSnapshot!==t||a||He!==null&&He.memoizedState.tag&1){if(r.flags|=2048,ma(9,g1.bind(null,r,n,i,t),void 0,null),Ge===null)throw Error(F(349));wn&30||m1(r,t,i)}return i}function m1(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function g1(e,t,r,n){t.value=r,t.getSnapshot=n,v1(t)&&_1(e)}function y1(e,t,r){return r(function(){v1(t)&&_1(e)})}function v1(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Qt(e,r)}catch{return!0}}function _1(e){var t=_r(e,1);t!==null&&Gt(t,e,1,-1)}function Kf(e){var t=rr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:e},t.queue=e,e=e.dispatch=l3.bind(null,Re,e),[t.memoizedState,e]}function ma(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function w1(){return At().memoizedState}function _o(e,t,r,n){var i=rr();Re.flags|=e,i.memoizedState=ma(1|t,r,void 0,n===void 0?null:n)}function cs(e,t,r,n){var i=At();n=n===void 0?null:n;var a=void 0;if(Ve!==null){var o=Ve.memoizedState;if(a=o.destroy,n!==null&&ec(n,o.deps)){i.memoizedState=ma(t,r,a,n);return}}Re.flags|=e,i.memoizedState=ma(1|t,r,a,n)}function Qf(e,t){return _o(8390656,8,e,t)}function nc(e,t){return cs(2048,8,e,t)}function $1(e,t){return cs(4,2,e,t)}function x1(e,t){return cs(4,4,e,t)}function b1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function k1(e,t,r){return r=r!=null?r.concat([e]):null,cs(4,4,b1.bind(null,t,e),r)}function ic(){}function S1(e,t){var r=At();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ec(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function E1(e,t){var r=At();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ec(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function T1(e,t,r){return wn&21?(Qt(r,t)||(r=Ny(),Re.lanes|=r,$n|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pt=!0),e.memoizedState=r)}function s3(e,t){var r=be;be=r!==0&&4>r?r:4,e(!0);var n=uu.transition;uu.transition={};try{e(!1),t()}finally{be=r,uu.transition=n}}function C1(){return At().memoizedState}function u3(e,t,r){var n=qr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},I1(e))z1(t,r);else if(r=d1(e,t,r,n),r!==null){var i=st();Gt(r,e,n,i),O1(r,t,n)}}function l3(e,t,r){var n=qr(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(I1(e))z1(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,r);if(i.hasEagerState=!0,i.eagerState=s,Qt(s,o)){var u=t.interleaved;u===null?(i.next=i,Qd(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}r=d1(e,t,i,n),r!==null&&(i=st(),Gt(r,e,n,i),O1(r,t,n))}}function I1(e){var t=e.alternate;return e===Re||t!==null&&t===Re}function z1(e,t){Qi=Fo=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function O1(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Md(e,r)}}var jo={readContext:Nt,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},d3={readContext:Nt,useCallback:function(e,t){return rr().memoizedState=[e,t===void 0?null:t],e},useContext:Nt,useEffect:Qf,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,_o(4194308,4,b1.bind(null,t,e),r)},useLayoutEffect:function(e,t){return _o(4194308,4,e,t)},useInsertionEffect:function(e,t){return _o(4,2,e,t)},useMemo:function(e,t){var r=rr();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=rr();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=u3.bind(null,Re,e),[n.memoizedState,e]},useRef:function(e){var t=rr();return e={current:e},t.memoizedState=e},useState:Kf,useDebugValue:ic,useDeferredValue:function(e){return rr().memoizedState=e},useTransition:function(){var e=Kf(!1),t=e[0];return e=s3.bind(null,e[1]),rr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=Re,i=rr();if(Oe){if(r===void 0)throw Error(F(407));r=r()}else{if(r=t(),Ge===null)throw Error(F(349));wn&30||m1(n,t,r)}i.memoizedState=r;var a={value:r,getSnapshot:t};return i.queue=a,Qf(y1.bind(null,n,a,e),[e]),n.flags|=2048,ma(9,g1.bind(null,n,a,r,t),void 0,null),r},useId:function(){var e=rr(),t=Ge.identifierPrefix;if(Oe){var r=mr,n=hr;r=(n&~(1<<32-Ht(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=fa++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=o3++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},c3={readContext:Nt,useCallback:S1,useContext:Nt,useEffect:nc,useImperativeHandle:k1,useInsertionEffect:$1,useLayoutEffect:x1,useMemo:E1,useReducer:lu,useRef:w1,useState:function(){return lu(ha)},useDebugValue:ic,useDeferredValue:function(e){var t=At();return T1(t,Ve.memoizedState,e)},useTransition:function(){var e=lu(ha)[0],t=At().memoizedState;return[e,t]},useMutableSource:f1,useSyncExternalStore:h1,useId:C1,unstable_isNewReconciler:!1},p3={readContext:Nt,useCallback:S1,useContext:Nt,useEffect:nc,useImperativeHandle:k1,useInsertionEffect:$1,useLayoutEffect:x1,useMemo:E1,useReducer:du,useRef:w1,useState:function(){return du(ha)},useDebugValue:ic,useDeferredValue:function(e){var t=At();return Ve===null?t.memoizedState=e:T1(t,Ve.memoizedState,e)},useTransition:function(){var e=du(ha)[0],t=At().memoizedState;return[e,t]},useMutableSource:f1,useSyncExternalStore:h1,useId:C1,unstable_isNewReconciler:!1};function Wt(e,t){if(e&&e.defaultProps){t=Me({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ql(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:Me({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ps={isMounted:function(e){return(e=e._reactInternals)?Tn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=st(),i=qr(e),a=gr(n,i);a.payload=t,r!=null&&(a.callback=r),t=Fr(e,a,i),t!==null&&(Gt(t,e,i,n),yo(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=st(),i=qr(e),a=gr(n,i);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=Fr(e,a,i),t!==null&&(Gt(t,e,i,n),yo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=st(),n=qr(e),i=gr(r,n);i.tag=2,t!=null&&(i.callback=t),t=Fr(e,i,n),t!==null&&(Gt(t,e,n,r),yo(t,e,n))}};function Zf(e,t,r,n,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,a,o):t.prototype&&t.prototype.isPureReactComponent?!sa(r,n)||!sa(i,a):!0}function N1(e,t,r){var n=!1,i=Kr,a=t.contextType;return typeof a=="object"&&a!==null?a=Nt(a):(i=ht(t)?vn:rt.current,n=t.contextTypes,a=(n=n!=null)?ri(e,i):Kr),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ps,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Xf(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&ps.enqueueReplaceState(t,t.state,null)}function Hl(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Zd(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Nt(a):(a=ht(t)?vn:rt.current,i.context=ri(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(ql(e,t,a,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ps.enqueueReplaceState(i,i.state,null),Wo(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function oi(e,t){try{var r="",n=t;do r+=Ux(n),n=n.return;while(n);var i=r}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function cu(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Gl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var f3=typeof WeakMap=="function"?WeakMap:Map;function A1(e,t,r){r=gr(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Ho||(Ho=!0,nd=n),Gl(e,t)},r}function R1(e,t,r){r=gr(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){Gl(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){Gl(e,t),typeof n!="function"&&(jr===null?jr=new Set([this]):jr.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function Yf(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new f3;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=T3.bind(null,e,t,r),t.then(e,e))}function Jf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function eh(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=gr(-1,1),t.tag=2,Fr(r,t,1))),r.lanes|=1),e)}var h3=$r.ReactCurrentOwner,pt=!1;function ot(e,t,r,n){t.child=e===null?l1(t,null,r,n):ii(t,e.child,r,n)}function th(e,t,r,n,i){r=r.render;var a=t.ref;return Jn(t,i),n=tc(e,t,r,n,a,i),r=rc(),e!==null&&!pt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,wr(e,t,i)):(Oe&&r&&Fd(t),t.flags|=1,ot(e,t,n,i),t.child)}function rh(e,t,r,n,i){if(e===null){var a=r.type;return typeof a=="function"&&!pc(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,M1(e,t,a,n,i)):(e=bo(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(r=r.compare,r=r!==null?r:sa,r(o,n)&&e.ref===t.ref)return wr(e,t,i)}return t.flags|=1,e=Hr(a,n),e.ref=t.ref,e.return=t,t.child=e}function M1(e,t,r,n,i){if(e!==null){var a=e.memoizedProps;if(sa(a,n)&&e.ref===t.ref)if(pt=!1,t.pendingProps=n=a,(e.lanes&i)!==0)e.flags&131072&&(pt=!0);else return t.lanes=e.lanes,wr(e,t,i)}return Kl(e,t,r,n,i)}function B1(e,t,r){var n=t.pendingProps,i=n.children,a=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(Hn,vt),vt|=r;else{if(!(r&1073741824))return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Se(Hn,vt),vt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=a!==null?a.baseLanes:r,Se(Hn,vt),vt|=n}else a!==null?(n=a.baseLanes|r,t.memoizedState=null):n=r,Se(Hn,vt),vt|=n;return ot(e,t,i,r),t.child}function P1(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Kl(e,t,r,n,i){var a=ht(r)?vn:rt.current;return a=ri(t,a),Jn(t,i),r=tc(e,t,r,n,a,i),n=rc(),e!==null&&!pt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,wr(e,t,i)):(Oe&&n&&Fd(t),t.flags|=1,ot(e,t,r,i),t.child)}function nh(e,t,r,n,i){if(ht(r)){var a=!0;Bo(t)}else a=!1;if(Jn(t,i),t.stateNode===null)wo(e,t),N1(t,r,n),Hl(t,r,n,i),n=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var u=o.context,l=r.contextType;typeof l=="object"&&l!==null?l=Nt(l):(l=ht(r)?vn:rt.current,l=ri(t,l));var c=r.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==n||u!==l)&&Xf(t,o,n,l),Rr=!1;var h=t.memoizedState;o.state=h,Wo(t,n,o,i),u=t.memoizedState,s!==n||h!==u||ft.current||Rr?(typeof c=="function"&&(ql(t,r,c,n),u=t.memoizedState),(s=Rr||Zf(t,r,s,n,h,u,l))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=u),o.props=n,o.state=u,o.context=l,n=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,c1(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:Wt(t.type,s),o.props=l,f=t.pendingProps,h=o.context,u=r.contextType,typeof u=="object"&&u!==null?u=Nt(u):(u=ht(r)?vn:rt.current,u=ri(t,u));var y=r.getDerivedStateFromProps;(c=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||h!==u)&&Xf(t,o,n,u),Rr=!1,h=t.memoizedState,o.state=h,Wo(t,n,o,i);var v=t.memoizedState;s!==f||h!==v||ft.current||Rr?(typeof y=="function"&&(ql(t,r,y,n),v=t.memoizedState),(l=Rr||Zf(t,r,l,n,h,v,u)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,v,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,v,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=v),o.props=n,o.state=v,o.context=u,n=l):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),n=!1)}return Ql(e,t,r,n,a,i)}function Ql(e,t,r,n,i,a){P1(e,t);var o=(t.flags&128)!==0;if(!n&&!o)return i&&Vf(t,r,!1),wr(e,t,a);n=t.stateNode,h3.current=t;var s=o&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&o?(t.child=ii(t,e.child,null,a),t.child=ii(t,null,s,a)):ot(e,t,s,a),t.memoizedState=n.state,i&&Vf(t,r,!0),t.child}function D1(e){var t=e.stateNode;t.pendingContext?Wf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Wf(e,t.context,!1),Xd(e,t.containerInfo)}function ih(e,t,r,n,i){return ni(),qd(i),t.flags|=256,ot(e,t,r,n),t.child}var Zl={dehydrated:null,treeContext:null,retryLane:0};function Xl(e){return{baseLanes:e,cachePool:null,transitions:null}}function L1(e,t,r){var n=t.pendingProps,i=Ae.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Se(Ae,i&1),e===null)return Fl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=n.children,e=n.fallback,a?(n=t.mode,a=t.child,o={mode:"hidden",children:o},!(n&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=ms(o,n,0,null),e=yn(e,n,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Xl(r),t.memoizedState=Zl,e):ac(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return m3(e,t,o,n,s,i,r);if(a){a=n.fallback,o=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:n.children};return!(o&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=u,t.deletions=null):(n=Hr(i,u),n.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=Hr(s,a):(a=yn(a,o,r,null),a.flags|=2),a.return=t,n.return=t,n.sibling=a,t.child=n,n=a,a=t.child,o=e.child.memoizedState,o=o===null?Xl(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~r,t.memoizedState=Zl,n}return a=e.child,e=a.sibling,n=Hr(a,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function ac(e,t){return t=ms({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ka(e,t,r,n){return n!==null&&qd(n),ii(t,e.child,null,r),e=ac(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function m3(e,t,r,n,i,a,o){if(r)return t.flags&256?(t.flags&=-257,n=cu(Error(F(422))),Ka(e,t,o,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=n.fallback,i=t.mode,n=ms({mode:"visible",children:n.children},i,0,null),a=yn(a,i,o,null),a.flags|=2,n.return=t,a.return=t,n.sibling=a,t.child=n,t.mode&1&&ii(t,e.child,null,o),t.child.memoizedState=Xl(o),t.memoizedState=Zl,a);if(!(t.mode&1))return Ka(e,t,o,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var s=n.dgst;return n=s,a=Error(F(419)),n=cu(a,n,void 0),Ka(e,t,o,n)}if(s=(o&e.childLanes)!==0,pt||s){if(n=Ge,n!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,_r(e,i),Gt(n,e,i,-1))}return cc(),n=cu(Error(F(421))),Ka(e,t,o,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=C3.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,wt=Vr(i.nextSibling),$t=t,Oe=!0,Ft=null,e!==null&&(Ct[It++]=hr,Ct[It++]=mr,Ct[It++]=_n,hr=e.id,mr=e.overflow,_n=t),t=ac(t,n.children),t.flags|=4096,t)}function ah(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),jl(e.return,t,r)}function pu(e,t,r,n,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=r,a.tailMode=i)}function U1(e,t,r){var n=t.pendingProps,i=n.revealOrder,a=n.tail;if(ot(e,t,n.children,r),n=Ae.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ah(e,r,t);else if(e.tag===19)ah(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(Se(Ae,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&Vo(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),pu(t,!1,i,r,a);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Vo(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}pu(t,!0,r,null,a);break;case"together":pu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function wo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function wr(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),$n|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(F(153));if(t.child!==null){for(e=t.child,r=Hr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Hr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function g3(e,t,r){switch(t.tag){case 3:D1(t),ni();break;case 5:p1(t);break;case 1:ht(t.type)&&Bo(t);break;case 4:Xd(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;Se(Lo,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(Se(Ae,Ae.current&1),t.flags|=128,null):r&t.child.childLanes?L1(e,t,r):(Se(Ae,Ae.current&1),e=wr(e,t,r),e!==null?e.sibling:null);Se(Ae,Ae.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return U1(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Se(Ae,Ae.current),n)break;return null;case 22:case 23:return t.lanes=0,B1(e,t,r)}return wr(e,t,r)}var W1,Yl,V1,F1;W1=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Yl=function(){};V1=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,mn(ar.current);var a=null;switch(r){case"input":i=wl(e,i),n=wl(e,n),a=[];break;case"select":i=Me({},i,{value:void 0}),n=Me({},n,{value:void 0}),a=[];break;case"textarea":i=bl(e,i),n=bl(e,n),a=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Ro)}Sl(r,n);var o;r=null;for(l in i)if(!n.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style"){var s=i[l];for(o in s)s.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(ea.hasOwnProperty(l)?a||(a=[]):(a=a||[]).push(l,null));for(l in n){var u=n[l];if(s=i!=null?i[l]:void 0,n.hasOwnProperty(l)&&u!==s&&(u!=null||s!=null))if(l==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(r||(r={}),r[o]=u[o])}else r||(a||(a=[]),a.push(l,r)),r=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(a=a||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(a=a||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(ea.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&Te("scroll",e),a||s===u||(a=[])):(a=a||[]).push(l,u))}r&&(a=a||[]).push("style",r);var l=a;(t.updateQueue=l)&&(t.flags|=4)}};F1=function(e,t,r,n){r!==n&&(t.flags|=4)};function bi(e,t){if(!Oe)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Je(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function y3(e,t,r){var n=t.pendingProps;switch(jd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(t),null;case 1:return ht(t.type)&&Mo(),Je(t),null;case 3:return n=t.stateNode,ai(),Ce(ft),Ce(rt),Jd(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ha(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ft!==null&&(od(Ft),Ft=null))),Yl(e,t),Je(t),null;case 5:Yd(t);var i=mn(pa.current);if(r=t.type,e!==null&&t.stateNode!=null)V1(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(F(166));return Je(t),null}if(e=mn(ar.current),Ha(t)){n=t.stateNode,r=t.type;var a=t.memoizedProps;switch(n[nr]=t,n[da]=a,e=(t.mode&1)!==0,r){case"dialog":Te("cancel",n),Te("close",n);break;case"iframe":case"object":case"embed":Te("load",n);break;case"video":case"audio":for(i=0;i<Li.length;i++)Te(Li[i],n);break;case"source":Te("error",n);break;case"img":case"image":case"link":Te("error",n),Te("load",n);break;case"details":Te("toggle",n);break;case"input":hf(n,a),Te("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},Te("invalid",n);break;case"textarea":gf(n,a),Te("invalid",n)}Sl(r,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?n.textContent!==s&&(a.suppressHydrationWarning!==!0&&qa(n.textContent,s,e),i=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&qa(n.textContent,s,e),i=["children",""+s]):ea.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&Te("scroll",n)}switch(r){case"input":Pa(n),mf(n,a,!0);break;case"textarea":Pa(n),yf(n);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(n.onclick=Ro)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yy(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=o.createElement(r,{is:n.is}):(e=o.createElement(r),r==="select"&&(o=e,n.multiple?o.multiple=!0:n.size&&(o.size=n.size))):e=o.createElementNS(e,r),e[nr]=t,e[da]=n,W1(e,t,!1,!1),t.stateNode=e;e:{switch(o=El(r,n),r){case"dialog":Te("cancel",e),Te("close",e),i=n;break;case"iframe":case"object":case"embed":Te("load",e),i=n;break;case"video":case"audio":for(i=0;i<Li.length;i++)Te(Li[i],e);i=n;break;case"source":Te("error",e),i=n;break;case"img":case"image":case"link":Te("error",e),Te("load",e),i=n;break;case"details":Te("toggle",e),i=n;break;case"input":hf(e,n),i=wl(e,n),Te("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=Me({},n,{value:void 0}),Te("invalid",e);break;case"textarea":gf(e,n),i=bl(e,n),Te("invalid",e);break;default:i=n}Sl(r,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var u=s[a];a==="style"?wy(e,u):a==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&vy(e,u)):a==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&ta(e,u):typeof u=="number"&&ta(e,""+u):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ea.hasOwnProperty(a)?u!=null&&a==="onScroll"&&Te("scroll",e):u!=null&&Id(e,a,u,o))}switch(r){case"input":Pa(e),mf(e,n,!1);break;case"textarea":Pa(e),yf(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Gr(n.value));break;case"select":e.multiple=!!n.multiple,a=n.value,a!=null?Qn(e,!!n.multiple,a,!1):n.defaultValue!=null&&Qn(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ro)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Je(t),null;case 6:if(e&&t.stateNode!=null)F1(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(F(166));if(r=mn(pa.current),mn(ar.current),Ha(t)){if(n=t.stateNode,r=t.memoizedProps,n[nr]=t,(a=n.nodeValue!==r)&&(e=$t,e!==null))switch(e.tag){case 3:qa(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&qa(n.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[nr]=t,t.stateNode=n}return Je(t),null;case 13:if(Ce(Ae),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Oe&&wt!==null&&t.mode&1&&!(t.flags&128))s1(),ni(),t.flags|=98560,a=!1;else if(a=Ha(t),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(F(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(F(317));a[nr]=t}else ni(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Je(t),a=!1}else Ft!==null&&(od(Ft),Ft=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||Ae.current&1?Fe===0&&(Fe=3):cc())),t.updateQueue!==null&&(t.flags|=4),Je(t),null);case 4:return ai(),Yl(e,t),e===null&&ua(t.stateNode.containerInfo),Je(t),null;case 10:return Kd(t.type._context),Je(t),null;case 17:return ht(t.type)&&Mo(),Je(t),null;case 19:if(Ce(Ae),a=t.memoizedState,a===null)return Je(t),null;if(n=(t.flags&128)!==0,o=a.rendering,o===null)if(n)bi(a,!1);else{if(Fe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Vo(e),o!==null){for(t.flags|=128,bi(a,!1),n=o.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)a=r,e=n,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Se(Ae,Ae.current&1|2),t.child}e=e.sibling}a.tail!==null&&Ue()>si&&(t.flags|=128,n=!0,bi(a,!1),t.lanes=4194304)}else{if(!n)if(e=Vo(o),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),bi(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!Oe)return Je(t),null}else 2*Ue()-a.renderingStartTime>si&&r!==1073741824&&(t.flags|=128,n=!0,bi(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(r=a.last,r!==null?r.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ue(),t.sibling=null,r=Ae.current,Se(Ae,n?r&1|2:r&1),t):(Je(t),null);case 22:case 23:return dc(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?vt&1073741824&&(Je(t),t.subtreeFlags&6&&(t.flags|=8192)):Je(t),null;case 24:return null;case 25:return null}throw Error(F(156,t.tag))}function v3(e,t){switch(jd(t),t.tag){case 1:return ht(t.type)&&Mo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ai(),Ce(ft),Ce(rt),Jd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Yd(t),null;case 13:if(Ce(Ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(F(340));ni()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ce(Ae),null;case 4:return ai(),null;case 10:return Kd(t.type._context),null;case 22:case 23:return dc(),null;case 24:return null;default:return null}}var Qa=!1,tt=!1,_3=typeof WeakSet=="function"?WeakSet:Set,X=null;function qn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Pe(e,t,n)}else r.current=null}function Jl(e,t,r){try{r()}catch(n){Pe(e,t,n)}}var oh=!1;function w3(e,t){if(Bl=Oo,e=Ky(),Vd(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var o=0,s=-1,u=-1,l=0,c=0,f=e,h=null;t:for(;;){for(var y;f!==r||i!==0&&f.nodeType!==3||(s=o+i),f!==a||n!==0&&f.nodeType!==3||(u=o+n),f.nodeType===3&&(o+=f.nodeValue.length),(y=f.firstChild)!==null;)h=f,f=y;for(;;){if(f===e)break t;if(h===r&&++l===i&&(s=o),h===a&&++c===n&&(u=o),(y=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=y}r=s===-1||u===-1?null:{start:s,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(Pl={focusedElem:e,selectionRange:r},Oo=!1,X=t;X!==null;)if(t=X,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,X=e;else for(;X!==null;){t=X;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,S=v.memoizedState,g=t.stateNode,m=g.getSnapshotBeforeUpdate(t.elementType===t.type?w:Wt(t.type,w),S);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var $=t.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(b){Pe(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,X=e;break}X=t.return}return v=oh,oh=!1,v}function Zi(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Jl(t,r,a)}i=i.next}while(i!==n)}}function fs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function ed(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function j1(e){var t=e.alternate;t!==null&&(e.alternate=null,j1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nr],delete t[da],delete t[Ul],delete t[r3],delete t[n3])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function q1(e){return e.tag===5||e.tag===3||e.tag===4}function sh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||q1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function td(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ro));else if(n!==4&&(e=e.child,e!==null))for(td(e,t,r),e=e.sibling;e!==null;)td(e,t,r),e=e.sibling}function rd(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(rd(e,t,r),e=e.sibling;e!==null;)rd(e,t,r),e=e.sibling}var Qe=null,Vt=!1;function Ir(e,t,r){for(r=r.child;r!==null;)H1(e,t,r),r=r.sibling}function H1(e,t,r){if(ir&&typeof ir.onCommitFiberUnmount=="function")try{ir.onCommitFiberUnmount(as,r)}catch{}switch(r.tag){case 5:tt||qn(r,t);case 6:var n=Qe,i=Vt;Qe=null,Ir(e,t,r),Qe=n,Vt=i,Qe!==null&&(Vt?(e=Qe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Qe.removeChild(r.stateNode));break;case 18:Qe!==null&&(Vt?(e=Qe,r=r.stateNode,e.nodeType===8?au(e.parentNode,r):e.nodeType===1&&au(e,r),aa(e)):au(Qe,r.stateNode));break;case 4:n=Qe,i=Vt,Qe=r.stateNode.containerInfo,Vt=!0,Ir(e,t,r),Qe=n,Vt=i;break;case 0:case 11:case 14:case 15:if(!tt&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Jl(r,t,o),i=i.next}while(i!==n)}Ir(e,t,r);break;case 1:if(!tt&&(qn(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){Pe(r,t,s)}Ir(e,t,r);break;case 21:Ir(e,t,r);break;case 22:r.mode&1?(tt=(n=tt)||r.memoizedState!==null,Ir(e,t,r),tt=n):Ir(e,t,r);break;default:Ir(e,t,r)}}function uh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new _3),t.forEach(function(n){var i=I3.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Mt(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:Qe=s.stateNode,Vt=!1;break e;case 3:Qe=s.stateNode.containerInfo,Vt=!0;break e;case 4:Qe=s.stateNode.containerInfo,Vt=!0;break e}s=s.return}if(Qe===null)throw Error(F(160));H1(a,o,i),Qe=null,Vt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(l){Pe(i,t,l)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)G1(t,e),t=t.sibling}function G1(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mt(t,e),er(e),n&4){try{Zi(3,e,e.return),fs(3,e)}catch(w){Pe(e,e.return,w)}try{Zi(5,e,e.return)}catch(w){Pe(e,e.return,w)}}break;case 1:Mt(t,e),er(e),n&512&&r!==null&&qn(r,r.return);break;case 5:if(Mt(t,e),er(e),n&512&&r!==null&&qn(r,r.return),e.flags&32){var i=e.stateNode;try{ta(i,"")}catch(w){Pe(e,e.return,w)}}if(n&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=r!==null?r.memoizedProps:a,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&my(i,a),El(s,o);var l=El(s,a);for(o=0;o<u.length;o+=2){var c=u[o],f=u[o+1];c==="style"?wy(i,f):c==="dangerouslySetInnerHTML"?vy(i,f):c==="children"?ta(i,f):Id(i,c,f,l)}switch(s){case"input":$l(i,a);break;case"textarea":gy(i,a);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var y=a.value;y!=null?Qn(i,!!a.multiple,y,!1):h!==!!a.multiple&&(a.defaultValue!=null?Qn(i,!!a.multiple,a.defaultValue,!0):Qn(i,!!a.multiple,a.multiple?[]:"",!1))}i[da]=a}catch(w){Pe(e,e.return,w)}}break;case 6:if(Mt(t,e),er(e),n&4){if(e.stateNode===null)throw Error(F(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(w){Pe(e,e.return,w)}}break;case 3:if(Mt(t,e),er(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{aa(t.containerInfo)}catch(w){Pe(e,e.return,w)}break;case 4:Mt(t,e),er(e);break;case 13:Mt(t,e),er(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(uc=Ue())),n&4&&uh(e);break;case 22:if(c=r!==null&&r.memoizedState!==null,e.mode&1?(tt=(l=tt)||c,Mt(t,e),tt=l):Mt(t,e),er(e),n&8192){if(l=e.memoizedState!==null,(e.stateNode.isHidden=l)&&!c&&e.mode&1)for(X=e,c=e.child;c!==null;){for(f=X=c;X!==null;){switch(h=X,y=h.child,h.tag){case 0:case 11:case 14:case 15:Zi(4,h,h.return);break;case 1:qn(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){n=h,r=h.return;try{t=n,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){Pe(n,r,w)}}break;case 5:qn(h,h.return);break;case 22:if(h.memoizedState!==null){dh(f);continue}}y!==null?(y.return=h,X=y):dh(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,l?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=_y("display",o))}catch(w){Pe(e,e.return,w)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=l?"":f.memoizedProps}catch(w){Pe(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Mt(t,e),er(e),n&4&&uh(e);break;case 21:break;default:Mt(t,e),er(e)}}function er(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(q1(r)){var n=r;break e}r=r.return}throw Error(F(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(ta(i,""),n.flags&=-33);var a=sh(e);rd(e,a,i);break;case 3:case 4:var o=n.stateNode.containerInfo,s=sh(e);td(e,s,o);break;default:throw Error(F(161))}}catch(u){Pe(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $3(e,t,r){X=e,K1(e)}function K1(e,t,r){for(var n=(e.mode&1)!==0;X!==null;){var i=X,a=i.child;if(i.tag===22&&n){var o=i.memoizedState!==null||Qa;if(!o){var s=i.alternate,u=s!==null&&s.memoizedState!==null||tt;s=Qa;var l=tt;if(Qa=o,(tt=u)&&!l)for(X=i;X!==null;)o=X,u=o.child,o.tag===22&&o.memoizedState!==null?ch(i):u!==null?(u.return=o,X=u):ch(i);for(;a!==null;)X=a,K1(a),a=a.sibling;X=i,Qa=s,tt=l}lh(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,X=a):lh(e)}}function lh(e){for(;X!==null;){var t=X;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:tt||fs(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!tt)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Wt(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Gf(t,a,n);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Gf(t,o,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var l=t.alternate;if(l!==null){var c=l.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&aa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}tt||t.flags&512&&ed(t)}catch(h){Pe(t,t.return,h)}}if(t===e){X=null;break}if(r=t.sibling,r!==null){r.return=t.return,X=r;break}X=t.return}}function dh(e){for(;X!==null;){var t=X;if(t===e){X=null;break}var r=t.sibling;if(r!==null){r.return=t.return,X=r;break}X=t.return}}function ch(e){for(;X!==null;){var t=X;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{fs(4,t)}catch(u){Pe(t,r,u)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(u){Pe(t,i,u)}}var a=t.return;try{ed(t)}catch(u){Pe(t,a,u)}break;case 5:var o=t.return;try{ed(t)}catch(u){Pe(t,o,u)}}}catch(u){Pe(t,t.return,u)}if(t===e){X=null;break}var s=t.sibling;if(s!==null){s.return=t.return,X=s;break}X=t.return}}var x3=Math.ceil,qo=$r.ReactCurrentDispatcher,oc=$r.ReactCurrentOwner,Ot=$r.ReactCurrentBatchConfig,ye=0,Ge=null,We=null,Ze=0,vt=0,Hn=Xr(0),Fe=0,ga=null,$n=0,hs=0,sc=0,Xi=null,ct=null,uc=0,si=1/0,cr=null,Ho=!1,nd=null,jr=null,Za=!1,Dr=null,Go=0,Yi=0,id=null,$o=-1,xo=0;function st(){return ye&6?Ue():$o!==-1?$o:$o=Ue()}function qr(e){return e.mode&1?ye&2&&Ze!==0?Ze&-Ze:a3.transition!==null?(xo===0&&(xo=Ny()),xo):(e=be,e!==0||(e=window.event,e=e===void 0?16:Ly(e.type)),e):1}function Gt(e,t,r,n){if(50<Yi)throw Yi=0,id=null,Error(F(185));wa(e,r,n),(!(ye&2)||e!==Ge)&&(e===Ge&&(!(ye&2)&&(hs|=r),Fe===4&&Br(e,Ze)),mt(e,n),r===1&&ye===0&&!(t.mode&1)&&(si=Ue()+500,ds&&Yr()))}function mt(e,t){var r=e.callbackNode;ab(e,t);var n=zo(e,e===Ge?Ze:0);if(n===0)r!==null&&wf(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&wf(r),t===1)e.tag===0?i3(ph.bind(null,e)):i1(ph.bind(null,e)),e3(function(){!(ye&6)&&Yr()}),r=null;else{switch(Ay(n)){case 1:r=Rd;break;case 4:r=zy;break;case 16:r=Io;break;case 536870912:r=Oy;break;default:r=Io}r=rv(r,Q1.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Q1(e,t){if($o=-1,xo=0,ye&6)throw Error(F(327));var r=e.callbackNode;if(ei()&&e.callbackNode!==r)return null;var n=zo(e,e===Ge?Ze:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Ko(e,n);else{t=n;var i=ye;ye|=2;var a=X1();(Ge!==e||Ze!==t)&&(cr=null,si=Ue()+500,gn(e,t));do try{S3();break}catch(s){Z1(e,s)}while(!0);Gd(),qo.current=a,ye=i,We!==null?t=0:(Ge=null,Ze=0,t=Fe)}if(t!==0){if(t===2&&(i=Ol(e),i!==0&&(n=i,t=ad(e,i))),t===1)throw r=ga,gn(e,0),Br(e,n),mt(e,Ue()),r;if(t===6)Br(e,n);else{if(i=e.current.alternate,!(n&30)&&!b3(i)&&(t=Ko(e,n),t===2&&(a=Ol(e),a!==0&&(n=a,t=ad(e,a))),t===1))throw r=ga,gn(e,0),Br(e,n),mt(e,Ue()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(F(345));case 2:ln(e,ct,cr);break;case 3:if(Br(e,n),(n&130023424)===n&&(t=uc+500-Ue(),10<t)){if(zo(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){st(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ll(ln.bind(null,e,ct,cr),t);break}ln(e,ct,cr);break;case 4:if(Br(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var o=31-Ht(n);a=1<<o,o=t[o],o>i&&(i=o),n&=~a}if(n=i,n=Ue()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*x3(n/1960))-n,10<n){e.timeoutHandle=Ll(ln.bind(null,e,ct,cr),n);break}ln(e,ct,cr);break;case 5:ln(e,ct,cr);break;default:throw Error(F(329))}}}return mt(e,Ue()),e.callbackNode===r?Q1.bind(null,e):null}function ad(e,t){var r=Xi;return e.current.memoizedState.isDehydrated&&(gn(e,t).flags|=256),e=Ko(e,t),e!==2&&(t=ct,ct=r,t!==null&&od(t)),e}function od(e){ct===null?ct=e:ct.push.apply(ct,e)}function b3(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],a=i.getSnapshot;i=i.value;try{if(!Qt(a(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Br(e,t){for(t&=~sc,t&=~hs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ht(t),n=1<<r;e[r]=-1,t&=~n}}function ph(e){if(ye&6)throw Error(F(327));ei();var t=zo(e,0);if(!(t&1))return mt(e,Ue()),null;var r=Ko(e,t);if(e.tag!==0&&r===2){var n=Ol(e);n!==0&&(t=n,r=ad(e,n))}if(r===1)throw r=ga,gn(e,0),Br(e,t),mt(e,Ue()),r;if(r===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ln(e,ct,cr),mt(e,Ue()),null}function lc(e,t){var r=ye;ye|=1;try{return e(t)}finally{ye=r,ye===0&&(si=Ue()+500,ds&&Yr())}}function xn(e){Dr!==null&&Dr.tag===0&&!(ye&6)&&ei();var t=ye;ye|=1;var r=Ot.transition,n=be;try{if(Ot.transition=null,be=1,e)return e()}finally{be=n,Ot.transition=r,ye=t,!(ye&6)&&Yr()}}function dc(){vt=Hn.current,Ce(Hn)}function gn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Jb(r)),We!==null)for(r=We.return;r!==null;){var n=r;switch(jd(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Mo();break;case 3:ai(),Ce(ft),Ce(rt),Jd();break;case 5:Yd(n);break;case 4:ai();break;case 13:Ce(Ae);break;case 19:Ce(Ae);break;case 10:Kd(n.type._context);break;case 22:case 23:dc()}r=r.return}if(Ge=e,We=e=Hr(e.current,null),Ze=vt=t,Fe=0,ga=null,sc=hs=$n=0,ct=Xi=null,hn!==null){for(t=0;t<hn.length;t++)if(r=hn[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,a=r.pending;if(a!==null){var o=a.next;a.next=i,n.next=o}r.pending=n}hn=null}return e}function Z1(e,t){do{var r=We;try{if(Gd(),vo.current=jo,Fo){for(var n=Re.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Fo=!1}if(wn=0,He=Ve=Re=null,Qi=!1,fa=0,oc.current=null,r===null||r.return===null){Fe=1,ga=t,We=null;break}e:{var a=e,o=r.return,s=r,u=t;if(t=Ze,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=u,c=s,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=Jf(o);if(y!==null){y.flags&=-257,eh(y,o,s,a,t),y.mode&1&&Yf(a,l,t),t=y,u=l;var v=t.updateQueue;if(v===null){var w=new Set;w.add(u),t.updateQueue=w}else v.add(u);break e}else{if(!(t&1)){Yf(a,l,t),cc();break e}u=Error(F(426))}}else if(Oe&&s.mode&1){var S=Jf(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),eh(S,o,s,a,t),qd(oi(u,s));break e}}a=u=oi(u,s),Fe!==4&&(Fe=2),Xi===null?Xi=[a]:Xi.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var g=A1(a,u,t);Hf(a,g);break e;case 1:s=u;var m=a.type,$=a.stateNode;if(!(a.flags&128)&&(typeof m.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(jr===null||!jr.has($)))){a.flags|=65536,t&=-t,a.lanes|=t;var b=R1(a,s,t);Hf(a,b);break e}}a=a.return}while(a!==null)}J1(r)}catch(E){t=E,We===r&&r!==null&&(We=r=r.return);continue}break}while(!0)}function X1(){var e=qo.current;return qo.current=jo,e===null?jo:e}function cc(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),Ge===null||!($n&268435455)&&!(hs&268435455)||Br(Ge,Ze)}function Ko(e,t){var r=ye;ye|=2;var n=X1();(Ge!==e||Ze!==t)&&(cr=null,gn(e,t));do try{k3();break}catch(i){Z1(e,i)}while(!0);if(Gd(),ye=r,qo.current=n,We!==null)throw Error(F(261));return Ge=null,Ze=0,Fe}function k3(){for(;We!==null;)Y1(We)}function S3(){for(;We!==null&&!Zx();)Y1(We)}function Y1(e){var t=tv(e.alternate,e,vt);e.memoizedProps=e.pendingProps,t===null?J1(e):We=t,oc.current=null}function J1(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=v3(r,t),r!==null){r.flags&=32767,We=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Fe=6,We=null;return}}else if(r=y3(r,t,vt),r!==null){We=r;return}if(t=t.sibling,t!==null){We=t;return}We=t=e}while(t!==null);Fe===0&&(Fe=5)}function ln(e,t,r){var n=be,i=Ot.transition;try{Ot.transition=null,be=1,E3(e,t,r,n)}finally{Ot.transition=i,be=n}return null}function E3(e,t,r,n){do ei();while(Dr!==null);if(ye&6)throw Error(F(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(ob(e,a),e===Ge&&(We=Ge=null,Ze=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Za||(Za=!0,rv(Io,function(){return ei(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=Ot.transition,Ot.transition=null;var o=be;be=1;var s=ye;ye|=4,oc.current=null,w3(e,r),G1(r,e),Hb(Pl),Oo=!!Bl,Pl=Bl=null,e.current=r,$3(r),Xx(),ye=s,be=o,Ot.transition=a}else e.current=r;if(Za&&(Za=!1,Dr=e,Go=i),a=e.pendingLanes,a===0&&(jr=null),eb(r.stateNode),mt(e,Ue()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Ho)throw Ho=!1,e=nd,nd=null,e;return Go&1&&e.tag!==0&&ei(),a=e.pendingLanes,a&1?e===id?Yi++:(Yi=0,id=e):Yi=0,Yr(),null}function ei(){if(Dr!==null){var e=Ay(Go),t=Ot.transition,r=be;try{if(Ot.transition=null,be=16>e?16:e,Dr===null)var n=!1;else{if(e=Dr,Dr=null,Go=0,ye&6)throw Error(F(331));var i=ye;for(ye|=4,X=e.current;X!==null;){var a=X,o=a.child;if(X.flags&16){var s=a.deletions;if(s!==null){for(var u=0;u<s.length;u++){var l=s[u];for(X=l;X!==null;){var c=X;switch(c.tag){case 0:case 11:case 15:Zi(8,c,a)}var f=c.child;if(f!==null)f.return=c,X=f;else for(;X!==null;){c=X;var h=c.sibling,y=c.return;if(j1(c),c===l){X=null;break}if(h!==null){h.return=y,X=h;break}X=y}}}var v=a.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var S=w.sibling;w.sibling=null,w=S}while(w!==null)}}X=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,X=o;else e:for(;X!==null;){if(a=X,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Zi(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,X=g;break e}X=a.return}}var m=e.current;for(X=m;X!==null;){o=X;var $=o.child;if(o.subtreeFlags&2064&&$!==null)$.return=o,X=$;else e:for(o=m;X!==null;){if(s=X,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:fs(9,s)}}catch(E){Pe(s,s.return,E)}if(s===o){X=null;break e}var b=s.sibling;if(b!==null){b.return=s.return,X=b;break e}X=s.return}}if(ye=i,Yr(),ir&&typeof ir.onPostCommitFiberRoot=="function")try{ir.onPostCommitFiberRoot(as,e)}catch{}n=!0}return n}finally{be=r,Ot.transition=t}}return!1}function fh(e,t,r){t=oi(r,t),t=A1(e,t,1),e=Fr(e,t,1),t=st(),e!==null&&(wa(e,1,t),mt(e,t))}function Pe(e,t,r){if(e.tag===3)fh(e,e,r);else for(;t!==null;){if(t.tag===3){fh(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(jr===null||!jr.has(n))){e=oi(r,e),e=R1(t,e,1),t=Fr(t,e,1),e=st(),t!==null&&(wa(t,1,e),mt(t,e));break}}t=t.return}}function T3(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=st(),e.pingedLanes|=e.suspendedLanes&r,Ge===e&&(Ze&r)===r&&(Fe===4||Fe===3&&(Ze&130023424)===Ze&&500>Ue()-uc?gn(e,0):sc|=r),mt(e,t)}function ev(e,t){t===0&&(e.mode&1?(t=Ua,Ua<<=1,!(Ua&130023424)&&(Ua=4194304)):t=1);var r=st();e=_r(e,t),e!==null&&(wa(e,t,r),mt(e,r))}function C3(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),ev(e,r)}function I3(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(F(314))}n!==null&&n.delete(t),ev(e,r)}var tv;tv=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||ft.current)pt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return pt=!1,g3(e,t,r);pt=!!(e.flags&131072)}else pt=!1,Oe&&t.flags&1048576&&a1(t,Do,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;wo(e,t),e=t.pendingProps;var i=ri(t,rt.current);Jn(t,r),i=tc(null,t,n,e,i,r);var a=rc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ht(n)?(a=!0,Bo(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zd(t),i.updater=ps,t.stateNode=i,i._reactInternals=t,Hl(t,n,e,r),t=Ql(null,t,n,!0,a,r)):(t.tag=0,Oe&&a&&Fd(t),ot(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(wo(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=O3(n),e=Wt(n,e),i){case 0:t=Kl(null,t,n,e,r);break e;case 1:t=nh(null,t,n,e,r);break e;case 11:t=th(null,t,n,e,r);break e;case 14:t=rh(null,t,n,Wt(n.type,e),r);break e}throw Error(F(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Wt(n,i),Kl(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Wt(n,i),nh(e,t,n,i,r);case 3:e:{if(D1(t),e===null)throw Error(F(387));n=t.pendingProps,a=t.memoizedState,i=a.element,c1(e,t),Wo(t,n,null,r);var o=t.memoizedState;if(n=o.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=oi(Error(F(423)),t),t=ih(e,t,n,r,i);break e}else if(n!==i){i=oi(Error(F(424)),t),t=ih(e,t,n,r,i);break e}else for(wt=Vr(t.stateNode.containerInfo.firstChild),$t=t,Oe=!0,Ft=null,r=l1(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ni(),n===i){t=wr(e,t,r);break e}ot(e,t,n,r)}t=t.child}return t;case 5:return p1(t),e===null&&Fl(t),n=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,Dl(n,i)?o=null:a!==null&&Dl(n,a)&&(t.flags|=32),P1(e,t),ot(e,t,o,r),t.child;case 6:return e===null&&Fl(t),null;case 13:return L1(e,t,r);case 4:return Xd(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=ii(t,null,n,r):ot(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Wt(n,i),th(e,t,n,i,r);case 7:return ot(e,t,t.pendingProps,r),t.child;case 8:return ot(e,t,t.pendingProps.children,r),t.child;case 12:return ot(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,Se(Lo,n._currentValue),n._currentValue=o,a!==null)if(Qt(a.value,o)){if(a.children===i.children&&!ft.current){t=wr(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var u=s.firstContext;u!==null;){if(u.context===n){if(a.tag===1){u=gr(-1,r&-r),u.tag=2;var l=a.updateQueue;if(l!==null){l=l.shared;var c=l.pending;c===null?u.next=u:(u.next=c.next,c.next=u),l.pending=u}}a.lanes|=r,u=a.alternate,u!==null&&(u.lanes|=r),jl(a.return,r,t),s.lanes|=r;break}u=u.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(F(341));o.lanes|=r,s=o.alternate,s!==null&&(s.lanes|=r),jl(o,r,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}ot(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,Jn(t,r),i=Nt(i),n=n(i),t.flags|=1,ot(e,t,n,r),t.child;case 14:return n=t.type,i=Wt(n,t.pendingProps),i=Wt(n.type,i),rh(e,t,n,i,r);case 15:return M1(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Wt(n,i),wo(e,t),t.tag=1,ht(n)?(e=!0,Bo(t)):e=!1,Jn(t,r),N1(t,n,i),Hl(t,n,i,r),Ql(null,t,n,!0,e,r);case 19:return U1(e,t,r);case 22:return B1(e,t,r)}throw Error(F(156,t.tag))};function rv(e,t){return Iy(e,t)}function z3(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(e,t,r,n){return new z3(e,t,r,n)}function pc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function O3(e){if(typeof e=="function")return pc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Od)return 11;if(e===Nd)return 14}return 2}function Hr(e,t){var r=e.alternate;return r===null?(r=zt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function bo(e,t,r,n,i,a){var o=2;if(n=e,typeof e=="function")pc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Bn:return yn(r.children,i,a,t);case zd:o=8,i|=8;break;case gl:return e=zt(12,r,t,i|2),e.elementType=gl,e.lanes=a,e;case yl:return e=zt(13,r,t,i),e.elementType=yl,e.lanes=a,e;case vl:return e=zt(19,r,t,i),e.elementType=vl,e.lanes=a,e;case py:return ms(r,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case dy:o=10;break e;case cy:o=9;break e;case Od:o=11;break e;case Nd:o=14;break e;case Ar:o=16,n=null;break e}throw Error(F(130,e==null?e:typeof e,""))}return t=zt(o,r,t,i),t.elementType=e,t.type=n,t.lanes=a,t}function yn(e,t,r,n){return e=zt(7,e,n,t),e.lanes=r,e}function ms(e,t,r,n){return e=zt(22,e,n,t),e.elementType=py,e.lanes=r,e.stateNode={isHidden:!1},e}function fu(e,t,r){return e=zt(6,e,null,t),e.lanes=r,e}function hu(e,t,r){return t=zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function N3(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ks(0),this.expirationTimes=Ks(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ks(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function fc(e,t,r,n,i,a,o,s,u){return e=new N3(e,t,r,s,u),t===1?(t=1,a===!0&&(t|=8)):t=0,a=zt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zd(a),e}function A3(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mn,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function nv(e){if(!e)return Kr;e=e._reactInternals;e:{if(Tn(e)!==e||e.tag!==1)throw Error(F(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ht(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(F(171))}if(e.tag===1){var r=e.type;if(ht(r))return n1(e,r,t)}return t}function iv(e,t,r,n,i,a,o,s,u){return e=fc(r,n,!0,e,i,a,o,s,u),e.context=nv(null),r=e.current,n=st(),i=qr(r),a=gr(n,i),a.callback=t??null,Fr(r,a,i),e.current.lanes=i,wa(e,i,n),mt(e,n),e}function gs(e,t,r,n){var i=t.current,a=st(),o=qr(i);return r=nv(r),t.context===null?t.context=r:t.pendingContext=r,t=gr(a,o),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Fr(i,t,o),e!==null&&(Gt(e,i,o,a),yo(e,i,o)),o}function Qo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function hc(e,t){hh(e,t),(e=e.alternate)&&hh(e,t)}function R3(){return null}var av=typeof reportError=="function"?reportError:function(e){console.error(e)};function mc(e){this._internalRoot=e}ys.prototype.render=mc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(F(409));gs(e,t,null,null)};ys.prototype.unmount=mc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xn(function(){gs(null,e,null,null)}),t[vr]=null}};function ys(e){this._internalRoot=e}ys.prototype.unstable_scheduleHydration=function(e){if(e){var t=By();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Mr.length&&t!==0&&t<Mr[r].priority;r++);Mr.splice(r,0,e),r===0&&Dy(e)}};function gc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function mh(){}function M3(e,t,r,n,i){if(i){if(typeof n=="function"){var a=n;n=function(){var l=Qo(o);a.call(l)}}var o=iv(t,n,e,0,null,!1,!1,"",mh);return e._reactRootContainer=o,e[vr]=o.current,ua(e.nodeType===8?e.parentNode:e),xn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var s=n;n=function(){var l=Qo(u);s.call(l)}}var u=fc(e,0,!1,null,null,!1,!1,"",mh);return e._reactRootContainer=u,e[vr]=u.current,ua(e.nodeType===8?e.parentNode:e),xn(function(){gs(t,u,r,n)}),u}function _s(e,t,r,n,i){var a=r._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var u=Qo(o);s.call(u)}}gs(t,o,e,i)}else o=M3(r,t,e,i,n);return Qo(o)}Ry=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Di(t.pendingLanes);r!==0&&(Md(t,r|1),mt(t,Ue()),!(ye&6)&&(si=Ue()+500,Yr()))}break;case 13:xn(function(){var n=_r(e,1);if(n!==null){var i=st();Gt(n,e,1,i)}}),hc(e,1)}};Bd=function(e){if(e.tag===13){var t=_r(e,134217728);if(t!==null){var r=st();Gt(t,e,134217728,r)}hc(e,134217728)}};My=function(e){if(e.tag===13){var t=qr(e),r=_r(e,t);if(r!==null){var n=st();Gt(r,e,t,n)}hc(e,t)}};By=function(){return be};Py=function(e,t){var r=be;try{return be=e,t()}finally{be=r}};Cl=function(e,t,r){switch(t){case"input":if($l(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=ls(n);if(!i)throw Error(F(90));hy(n),$l(n,i)}}}break;case"textarea":gy(e,r);break;case"select":t=r.value,t!=null&&Qn(e,!!r.multiple,t,!1)}};by=lc;ky=xn;var B3={usingClientEntryPoint:!1,Events:[xa,Un,ls,$y,xy,lc]},ki={findFiberByHostInstance:fn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},P3={bundleType:ki.bundleType,version:ki.version,rendererPackageName:ki.rendererPackageName,rendererConfig:ki.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$r.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ty(e),e===null?null:e.stateNode},findFiberByHostInstance:ki.findFiberByHostInstance||R3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xa.isDisabled&&Xa.supportsFiber)try{as=Xa.inject(P3),ir=Xa}catch{}}kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B3;kt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gc(t))throw Error(F(200));return A3(e,t,null,r)};kt.createRoot=function(e,t){if(!gc(e))throw Error(F(299));var r=!1,n="",i=av;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=fc(e,1,!1,null,null,r,!1,n,i),e[vr]=t.current,ua(e.nodeType===8?e.parentNode:e),new mc(t)};kt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=Ty(t),e=e===null?null:e.stateNode,e};kt.flushSync=function(e){return xn(e)};kt.hydrate=function(e,t,r){if(!vs(t))throw Error(F(200));return _s(null,e,t,!0,r)};kt.hydrateRoot=function(e,t,r){if(!gc(e))throw Error(F(405));var n=r!=null&&r.hydratedSources||null,i=!1,a="",o=av;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=iv(t,null,e,1,r??null,i,!1,a,o),e[vr]=t.current,ua(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new ys(t)};kt.render=function(e,t,r){if(!vs(t))throw Error(F(200));return _s(null,e,t,!1,r)};kt.unmountComponentAtNode=function(e){if(!vs(e))throw Error(F(40));return e._reactRootContainer?(xn(function(){_s(null,null,e,!1,function(){e._reactRootContainer=null,e[vr]=null})}),!0):!1};kt.unstable_batchedUpdates=lc;kt.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!vs(r))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return _s(e,t,r,!1,n)};kt.version="18.3.1-next-f1338f8080-20240426";function ov(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ov)}catch(e){console.error(e)}}ov(),oy.exports=kt;var D3=oy.exports,sv,gh=D3;sv=gh.createRoot,gh.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var L3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U3=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ws=(e,t)=>{const r=ze.forwardRef(({color:n="currentColor",size:i=24,strokeWidth:a=2,absoluteStrokeWidth:o,className:s="",children:u,...l},c)=>ze.createElement("svg",{ref:c,...L3,width:i,height:i,stroke:n,strokeWidth:o?Number(a)*24/Number(i):a,className:["lucide",`lucide-${U3(e)}`,s].join(" "),...l},[...t.map(([f,h])=>ze.createElement(f,h)),...Array.isArray(u)?u:[u]]));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W3=ws("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V3=ws("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F3=ws("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j3=ws("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]),q3=e=>{const[t,r]=ze.useState(!1),[n,i]=ze.useState(null),a=ze.useRef(null),o=ze.useCallback(async()=>{i(null);try{if(location.protocol!=="https:"&&location.hostname!=="localhost")throw new Error("Camera access requires HTTPS");const u=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:640,min:320},height:{ideal:640,min:320}}});e.current&&(e.current.srcObject=u,a.current=u,await new Promise(l=>{var f;const c=()=>{var h,y;(h=e.current)==null||h.removeEventListener("canplay",c),(y=e.current)==null||y.play().catch(console.error),l()};(f=e.current)==null||f.addEventListener("canplay",c)}),r(!0))}catch(u){const l=u instanceof Error?u.message:"Camera access failed";i(l),console.error("Camera error:",u)}},[e]),s=ze.useCallback(()=>{a.current&&(a.current.getTracks().forEach(u=>{u.stop()}),a.current=null),e.current&&(e.current.srcObject=null),r(!1),i(null)},[e]);return{isStreaming:t,error:n,startCamera:o,stopCamera:s}};/*!
 * ONNX Runtime Web v1.22.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var yc=Object.defineProperty,H3=Object.getOwnPropertyDescriptor,G3=Object.getOwnPropertyNames,K3=Object.prototype.hasOwnProperty,Q3=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),V=(e,t)=>()=>(e&&(t=e(e=0)),t),fi=(e,t)=>{for(var r in t)yc(e,r,{get:t[r],enumerable:!0})},Z3=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of G3(t))!K3.call(e,i)&&i!==r&&yc(e,i,{get:()=>t[i],enumerable:!(n=H3(t,i))||n.enumerable});return e},ya=e=>Z3(yc({},"__esModule",{value:!0}),e),Si,zr,Gn,yh,uv,lv=V(()=>{Si=new Map,zr=[],Gn=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let n=Si.get(e);if(n===void 0)Si.set(e,{backend:t,priority:r});else{if(n.priority>r)return;if(n.priority===r&&n.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let i=zr.indexOf(e);i!==-1&&zr.splice(i,1);for(let a=0;a<zr.length;a++)if(Si.get(zr[a]).priority<=r){zr.splice(a,0,e);return}zr.push(e)}return}throw new TypeError("not a valid backend")},yh=async e=>{let t=Si.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(n){return r||(t.error=`${n}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},uv=async e=>{let t=e.executionProviders||[],r=t.map(u=>typeof u=="string"?u:u.name),n=r.length===0?zr:r,i,a=[],o=new Set;for(let u of n){let l=await yh(u);typeof l=="string"?a.push({name:u,err:l}):(i||(i=l),i===l&&o.add(u))}if(!i)throw new Error(`no available backend found. ERR: ${a.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:l}of a)r.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${l}`);let s=t.filter(u=>o.has(typeof u=="string"?u:u.name));return[i,new Proxy(e,{get:(u,l)=>l==="executionProviders"?s:Reflect.get(u,l)})]}}),X3=V(()=>{lv()}),dv,Y3=V(()=>{dv="1.22.0"}),mu,Tt,cv=V(()=>{Y3(),mu="warning",Tt={wasm:{},webgl:{},webgpu:{},versions:{common:dv},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);mu=e}},get logLevel(){return mu}},Object.defineProperty(Tt,"logLevel",{enumerable:!0})}),xe,J3=V(()=>{cv(),xe=Tt}),pv,fv,ek=V(()=>{pv=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let n=r.getContext("2d");if(n!=null){let i,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let o=(t==null?void 0:t.format)!==void 0?t.format:"RGB",s=t==null?void 0:t.norm,u,l;s===void 0||s.mean===void 0?u=[255,255,255,255]:typeof s.mean=="number"?u=[s.mean,s.mean,s.mean,s.mean]:(u=[s.mean[0],s.mean[1],s.mean[2],0],s.mean[3]!==void 0&&(u[3]=s.mean[3])),s===void 0||s.bias===void 0?l=[0,0,0,0]:typeof s.bias=="number"?l=[s.bias,s.bias,s.bias,s.bias]:(l=[s.bias[0],s.bias[1],s.bias[2],0],s.bias[3]!==void 0&&(l[3]=s.bias[3]));let c=a*i,f=0,h=c,y=c*2,v=-1;o==="RGBA"?(f=0,h=c,y=c*2,v=c*3):o==="RGB"?(f=0,h=c,y=c*2):o==="RBG"&&(f=0,y=c,h=c*2);for(let w=0;w<a;w++)for(let S=0;S<i;S++){let g=(e.data[f++]-l[0])*u[0],m=(e.data[h++]-l[1])*u[1],$=(e.data[y++]-l[2])*u[2],b=v===-1?255:(e.data[v++]-l[3])*u[3];n.fillStyle="rgba("+g+","+m+","+$+","+b+")",n.fillRect(S,w,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},fv=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),n;if(r!=null){let i,a,o;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[1],o=e.dims[3]):(i=e.dims[3],a=e.dims[2],o=e.dims[1]);let s=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,c;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?c=[0,0,0,0]:typeof u.bias=="number"?c=[u.bias,u.bias,u.bias,u.bias]:(c=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(c[3]=u.bias[3]));let f=a*i;if(t!==void 0&&(t.format!==void 0&&o===4&&t.format!=="RGBA"||o===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let h=4,y=0,v=1,w=2,S=3,g=0,m=f,$=f*2,b=-1;s==="RGBA"?(g=0,m=f,$=f*2,b=f*3):s==="RGB"?(g=0,m=f,$=f*2):s==="RBG"&&(g=0,$=f,m=f*2),n=r.createImageData(i,a);for(let E=0;E<a*i;y+=h,v+=h,w+=h,S+=h,E++)n.data[y]=(e.data[g++]-c[0])*l[0],n.data[v]=(e.data[m++]-c[1])*l[1],n.data[w]=(e.data[$++]-c[2])*l[2],n.data[S]=b===-1?255:(e.data[b++]-c[3])*l[3]}else throw new Error("Can not access image data");return n}}),Ya,hv,mv,gv,yv,vv,tk=V(()=>{vc(),Ya=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:n}=t,i=t.norm??{mean:255,bias:0},a,o;typeof i.mean=="number"?a=[i.mean,i.mean,i.mean,i.mean]:a=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?o=[i.bias,i.bias,i.bias,i.bias]:o=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let s=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",l=r*n,c=u==="RGBA"?new Float32Array(l*4):new Float32Array(l*3),f=4,h=0,y=1,v=2,w=3,S=0,g=l,m=l*2,$=-1;s==="RGB"&&(f=3,h=0,y=1,v=2,w=-1),u==="RGBA"?$=l*3:u==="RBG"?(S=0,m=l,g=l*2):u==="BGR"&&(m=0,g=l,S=l*2);for(let b=0;b<l;b++,h+=f,v+=f,y+=f,w+=f)c[S++]=(e[h]+o[0])/a[0],c[g++]=(e[y]+o[1])/a[1],c[m++]=(e[v]+o[2])/a[2],$!==-1&&w!==-1&&(c[$++]=(e[w]+o[3])/a[3]);return u==="RGBA"?new _t("float32",c,[1,4,r,n]):new _t("float32",c,[1,3,r,n])},hv=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,n=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",o,s=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},l=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(r){let c=u();c.width=e.width,c.height=e.height;let f=l(c);if(f!=null){let h=e.height,y=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(h=t.resizedHeight,y=t.resizedWidth),t!==void 0){if(s=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");s.tensorFormat="RGBA",s.height=h,s.width=y}else s.tensorFormat="RGBA",s.height=h,s.width=y;f.drawImage(e,0,0),o=f.getImageData(0,0,y,h).data}else throw new Error("Can not access image data")}else if(n){let c,f;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,f=t.resizedWidth):(c=e.height,f=e.width),t!==void 0&&(s=t),s.format="RGBA",s.height=c,s.width=f,t!==void 0){let h=u();h.width=f,h.height=c;let y=l(h);if(y!=null)y.putImageData(e,0,0),o=y.getImageData(0,0,f,c).data;else throw new Error("Can not access image data")}else o=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=u();c.width=e.width,c.height=e.height;let f=l(c);if(f!=null){let h=e.height,y=e.width;return f.drawImage(e,0,0,y,h),o=f.getImageData(0,0,y,h).data,s.height=h,s.width=y,Ya(o,s)}else throw new Error("Can not access image data")}else{if(a)return new Promise((c,f)=>{let h=u(),y=l(h);if(!e||!y)return f();let v=new Image;v.crossOrigin="Anonymous",v.src=e,v.onload=()=>{h.width=v.width,h.height=v.height,y.drawImage(v,0,0,h.width,h.height);let w=y.getImageData(0,0,h.width,h.height);s.height=h.height,s.width=h.width,c(Ya(w.data,s))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(o!==void 0)return Ya(o,s);throw new Error("Input data provided is not supported - aborted tensor creation")},mv=(e,t)=>{let{width:r,height:n,download:i,dispose:a}=t,o=[1,n,r,4];return new _t({location:"texture",type:"float32",texture:e,dims:o,download:i,dispose:a})},gv=(e,t)=>{let{dataType:r,dims:n,download:i,dispose:a}=t;return new _t({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:n,download:i,dispose:a})},yv=(e,t)=>{let{dataType:r,dims:n,download:i,dispose:a}=t;return new _t({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:n,download:i,dispose:a})},vv=(e,t,r)=>new _t({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),dn,Ui,gu,_v,rk=V(()=>{dn=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Ui=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),gu=!1,_v=()=>{if(!gu){gu=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,n=typeof r<"u"&&r.from;e&&(dn.set("int64",BigInt64Array),Ui.set(BigInt64Array,"int64")),t&&(dn.set("uint64",BigUint64Array),Ui.set(BigUint64Array,"uint64")),n?(dn.set("float16",r),Ui.set(r,"float16")):dn.set("float16",Uint16Array)}}}),wv,$v,nk=V(()=>{vc(),wv=e=>{let t=1;for(let r=0;r<e.length;r++){let n=e[r];if(typeof n!="number"||!Number.isSafeInteger(n))throw new TypeError(`dims[${r}] must be an integer, got: ${n}`);if(n<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${n}`);t*=n}return t},$v=(e,t)=>{switch(e.location){case"cpu":return new _t(e.type,e.data,t);case"cpu-pinned":return new _t({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new _t({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new _t({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new _t({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),_t,vc=V(()=>{ek(),tk(),rk(),nk(),_t=class{constructor(e,t,r){_v();let n,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,n=e.type,i=e.dims,e.location){case"cpu-pinned":{let o=dn.get(n);if(!o)throw new TypeError(`unsupported type "${n}" to create tensor from pinned buffer`);if(!(e.data instanceof o))throw new TypeError(`buffer should be of type ${o.name}`);this.cpuData=e.data;break}case"texture":{if(n!=="float32")throw new TypeError(`unsupported type "${n}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint64"&&n!=="int8"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let o,s;if(typeof e=="string")if(n=e,s=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");o=t}else{let u=dn.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?o=u.from(t,BigInt):o=u.from(t)}else if(t instanceof u)o=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")o=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)o=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${n} tensor's data must be type of ${u}`)}else if(s=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")n="string",o=e;else if(u==="boolean")n="bool",o=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)n="uint8",o=Uint8Array.from(e);else{let u=Ui.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);n=u,o=e}if(s===void 0)s=[o.length];else if(!Array.isArray(s))throw new TypeError("A tensor's dims must be a number array");i=s,this.cpuData=o,this.dataLocation="cpu"}let a=wv(i);if(this.cpuData&&a!==this.cpuData.length&&!((n==="uint4"||n==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=n,this.dims=i,this.size=a}static async fromImage(e,t){return hv(e,t)}static fromTexture(e,t){return mv(e,t)}static fromGpuBuffer(e,t){return gv(e,t)}static fromMLTensor(e,t){return yv(e,t)}static fromPinnedBuffer(e,t,r){return vv(e,t,r)}toDataURL(e){return pv(this,e)}toImageData(e){return fv(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return $v(this,e)}}}),qt,xv=V(()=>{vc(),qt=_t}),Zo,yu,or,Kt,bv=V(()=>{cv(),Zo=(e,t)=>{(typeof Tt.trace>"u"?!Tt.wasm.trace:!Tt.trace)||console.timeStamp(`${e}::ORT::${t}`)},yu=(e,t)=>{var i;let r=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],n=!1;for(let a=0;a<r.length;a++){if(n&&!r[a].includes("TRACE_FUNC")){let o=`FUNC_${e}::${r[a].trim().split(" ")[1]}`;t&&(o+=`::${t}`),Zo("CPU",o);return}r[a].includes("TRACE_FUNC")&&(n=!0)}},or=e=>{(typeof Tt.trace>"u"?!Tt.wasm.trace:!Tt.trace)||yu("BEGIN",e)},Kt=e=>{(typeof Tt.trace>"u"?!Tt.wasm.trace:!Tt.trace)||yu("END",e)}}),kv,ik=V(()=>{lv(),xv(),bv(),kv=class Sv{constructor(t){this.handler=t}async run(t,r,n){or();let i={},a={};if(typeof t!="object"||t===null||t instanceof qt||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let o=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof qt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");o=!1;for(let l of r){if(typeof l!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(l)===-1)throw new RangeError(`'fetches' contains invalid output name: ${l}.`);i[l]=null}if(typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else{let l=!1,c=Object.getOwnPropertyNames(r);for(let f of this.outputNames)if(c.indexOf(f)!==-1){let h=r[f];(h===null||h instanceof qt)&&(l=!0,o=!1,i[f]=h)}if(l){if(typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else a=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let l of this.inputNames)if(typeof t[l]>"u")throw new Error(`input '${l}' is missing in 'feeds'.`);if(o)for(let l of this.outputNames)i[l]=null;let s=await this.handler.run(t,i,a),u={};for(let l in s)if(Object.hasOwnProperty.call(s,l)){let c=s[l];c instanceof qt?u[l]=c:u[l]=new qt(c.type,c.data,c.dims)}return Kt(),u}async release(){return this.handler.dispose()}static async create(t,r,n,i){or();let a,o={};if(typeof t=="string"){if(a=t,typeof r=="object"&&r!==null)o=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof r=="object"&&r!==null)o=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,f=0,h=t.byteLength;if(typeof r=="object"&&r!==null)o=r;else if(typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteOffset' must be an integer.");if(f<0||f>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(h=t.byteLength-f,typeof n=="number"){if(h=n,!Number.isSafeInteger(h))throw new RangeError("'byteLength' must be an integer.");if(h<=0||f+h>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-f}].`);if(typeof i=="object"&&i!==null)o=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof n<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(c,f,h)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[s,u]=await uv(o),l=await s.createInferenceSessionHandler(a,u);return Kt(),new Sv(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),_c,ak=V(()=>{ik(),_c=kv}),ok=V(()=>{}),sk=V(()=>{}),uk=V(()=>{}),lk=V(()=>{}),dk={};fi(dk,{InferenceSession:()=>_c,TRACE:()=>Zo,TRACE_FUNC_BEGIN:()=>or,TRACE_FUNC_END:()=>Kt,Tensor:()=>qt,env:()=>xe,registerBackend:()=>Gn});var Zt=V(()=>{X3(),J3(),ak(),xv(),ok(),sk(),bv(),uk(),lk()}),wc=V(()=>{}),Ev={};fi(Ev,{default:()=>Tv});var vu,_u,Tv,ck=V(()=>{var e;N$(),Cn(),$c(),vu="ort-wasm-proxy-worker",_u=((e=globalThis.self)==null?void 0:e.name)===vu,_u&&(self.onmessage=t=>{let{type:r,in:n}=t.data;try{switch(r){case"init-wasm":xc(n.wasm).then(()=>{Lc(n).then(()=>{postMessage({type:r})},i=>{postMessage({type:r,err:i})})},i=>{postMessage({type:r,err:i})});break;case"init-ep":{let{epName:i,env:a}=n;Uc(a,i).then(()=>{postMessage({type:r})},o=>{postMessage({type:r,err:o})});break}case"copy-from":{let{buffer:i}=n,a=ns(i);postMessage({type:r,out:a});break}case"create":{let{model:i,options:a}=n;Wc(i,a).then(o=>{postMessage({type:r,out:o})},o=>{postMessage({type:r,err:o})});break}case"release":Vc(n),postMessage({type:r});break;case"run":{let{sessionId:i,inputIndices:a,inputs:o,outputIndices:s,options:u}=n;Fc(i,a,o,s,new Array(s.length).fill(null),u).then(l=>{l.some(c=>c[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:l},qc([...o,...l]))},l=>{postMessage({type:r,err:l})});break}case"end-profiling":jc(n),postMessage({type:r});break;default:}}catch(i){postMessage({type:r,err:i})}}),Tv=_u?null:t=>new Worker(t??yt,{type:"module",name:vu})}),Cv={};fi(Cv,{default:()=>Iv});var wu,$u,Iv,vh,pk=V(()=>{var e,t;$u=(wu=import.meta.url,async function(r={}){var of;var n,i,a=r,o=new Promise((d,p)=>{n=d,i=p}),s=typeof window=="object",u=typeof WorkerGlobalScope<"u",l=u&&((of=self.name)==null?void 0:of.startsWith("em-pthread"));a.mountExternalData=(d,p)=>{d.startsWith("./")&&(d=d.substring(2)),(a.Fb||(a.Fb=new Map)).set(d,p)},a.unmountExternalData=()=>{delete a.Fb};var c=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,qc:!0}).buffer.constructor;let f=d=>async(...p)=>{var _;try{if(a.Gb)throw Error("Session already started");let x=a.Gb={ec:p[0],errors:[]},k=await d(...p);if(a.Gb!==x)throw Error("Session mismatch");(_=a.Kb)==null||_.flush();let z=x.errors;if(0<z.length){let R=await Promise.all(z);if(R=R.filter(U=>U),0<R.length)throw Error(R.join(`
`))}return k}finally{a.Gb=null}};a.jsepInit=(d,p)=>{if(d==="webgpu"){[a.Kb,a.Vb,a.Zb,a.Lb,a.Yb,a.kb,a.$b,a.bc,a.Wb,a.Xb,a.ac]=p;let _=a.Kb;a.jsepRegisterBuffer=(x,k,z,R)=>_.registerBuffer(x,k,z,R),a.jsepGetBuffer=x=>_.getBuffer(x),a.jsepCreateDownloader=(x,k,z)=>_.createDownloader(x,k,z),a.jsepOnCreateSession=x=>{_.onCreateSession(x)},a.jsepOnReleaseSession=x=>{_.onReleaseSession(x)},a.jsepOnRunStart=x=>_.onRunStart(x),a.cc=(x,k)=>{_.upload(x,k)}}else if(d==="webnn"){let _=p[0];[a.oc,a.Ob,a.webnnEnsureTensor,a.Pb,a.webnnDownloadTensor]=p.slice(1),a.webnnReleaseTensorId=a.Ob,a.webnnUploadTensor=a.Pb,a.webnnOnRunStart=x=>_.onRunStart(x),a.webnnOnRunEnd=_.onRunEnd.bind(_),a.webnnRegisterMLContext=(x,k)=>{_.registerMLContext(x,k)},a.webnnOnReleaseSession=x=>{_.onReleaseSession(x)},a.webnnCreateMLTensorDownloader=(x,k)=>_.createMLTensorDownloader(x,k),a.webnnRegisterMLTensor=(x,k,z,R)=>_.registerMLTensor(x,k,z,R),a.webnnCreateMLContext=x=>_.createMLContext(x),a.webnnRegisterMLConstant=(x,k,z,R,U,q)=>_.registerMLConstant(x,k,z,R,U,a.Fb,q),a.webnnRegisterGraphInput=_.registerGraphInput.bind(_),a.webnnIsGraphInput=_.isGraphInput.bind(_),a.webnnRegisterGraphOutput=_.registerGraphOutput.bind(_),a.webnnIsGraphOutput=_.isGraphOutput.bind(_),a.webnnCreateTemporaryTensor=_.createTemporaryTensor.bind(_),a.webnnIsGraphInputOutputTypeSupported=_.isGraphInputOutputTypeSupported.bind(_)}};let h=()=>{let d=(p,_,x)=>(...k)=>{let z=Yt,R=_==null?void 0:_();k=p(...k);let U=_==null?void 0:_();return R!==U&&(p=U,x(R),_=x=null),Yt!=z?new Promise((q,ee)=>{Ms={resolve:q,reject:ee}}):k};(()=>{for(let p of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])a[p]=d(a[p],()=>a[p],_=>a[p]=_)})(),f!==void 0&&(a._OrtRun=f(a._OrtRun),a._OrtRunWithBinding=f(a._OrtRunWithBinding)),h=void 0};a.asyncInit=()=>{h==null||h()};var y,v,w=Object.assign({},a),S=(d,p)=>{throw p},g="";(s||u)&&(u?g=self.location.href:typeof document<"u"&&document.currentScript&&(g=document.currentScript.src),wu&&(g=wu),g=g.startsWith("blob:")?"":g.slice(0,g.replace(/[?#].*/,"").lastIndexOf("/")+1),u&&(v=d=>{var p=new XMLHttpRequest;return p.open("GET",d,!1),p.responseType="arraybuffer",p.send(null),new Uint8Array(p.response)}),y=async d=>{if(A(d))return new Promise((_,x)=>{var k=new XMLHttpRequest;k.open("GET",d,!0),k.responseType="arraybuffer",k.onload=()=>{k.status==200||k.status==0&&k.response?_(k.response):x(k.status)},k.onerror=x,k.send(null)});var p=await fetch(d,{credentials:"same-origin"});if(p.ok)return p.arrayBuffer();throw Error(p.status+" : "+p.url)});var m=console.log.bind(console),$=console.error.bind(console),b=m,E=$;Object.assign(a,w),w=null;var T,C,I,O,P,K,G,Q,ce,oe,H,ae,M,W=a.wasmBinary,J=!1,A=d=>d.startsWith("file://");function L(){return T.buffer!=O.buffer&&_e(),O}function j(){return T.buffer!=O.buffer&&_e(),P}function re(){return T.buffer!=O.buffer&&_e(),K}function De(){return T.buffer!=O.buffer&&_e(),G}function D(){return T.buffer!=O.buffer&&_e(),Q}function he(){return T.buffer!=O.buffer&&_e(),ce}function zn(){return T.buffer!=O.buffer&&_e(),oe}function nt(){return T.buffer!=O.buffer&&_e(),M}if(l){let d=function(p){try{var _=p.data,x=_.Cb;if(x==="load"){let k=[];self.onmessage=z=>k.push(z),self.startWorker=()=>{postMessage({Cb:"loaded"});for(let z of k)d(z);self.onmessage=d};for(let z of _.Sb)a[z]&&!a[z].proxy||(a[z]=(...R)=>{postMessage({Cb:"callHandler",Rb:z,args:R})},z=="print"&&(b=a[z]),z=="printErr"&&(E=a[z]));T=_.lc,_e(),Rt(_.mc)}else if(x==="run"){G$(_.Bb),Ls(_.Bb,0,0,1,0,0),Jc(),As(_.Bb),sr||(Gp(),sr=!0);try{K$(_.hc,_.Ib)}catch(k){if(k!="unwind")throw k}}else _.target!=="setimmediate"&&(x==="checkMailbox"?sr&&ka():x&&(E(`worker: received unknown command ${x}`),E(_)))}catch(k){throw Kp(),k}};var Rt,sr=!1;E=function(...p){p=p.join(" "),console.error(p)},self.alert=function(...p){postMessage({Cb:"alert",text:p.join(" "),jc:Na()})},self.onunhandledrejection=p=>{throw p.reason||p},self.onmessage=d}function _e(){var d=T.buffer;a.HEAP8=O=new Int8Array(d),a.HEAP16=K=new Int16Array(d),a.HEAPU8=P=new Uint8Array(d),a.HEAPU16=G=new Uint16Array(d),a.HEAP32=Q=new Int32Array(d),a.HEAPU32=ce=new Uint32Array(d),a.HEAPF32=oe=new Float32Array(d),a.HEAPF64=M=new Float64Array(d),a.HEAP64=H=new BigInt64Array(d),a.HEAPU64=ae=new BigUint64Array(d)}function Ie(){l?startWorker(a):ne.Da()}l||(T=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),_e());var gt,en=0,tn=null;function Hc(){if(--en==0&&tn){var d=tn;tn=null,d()}}function br(d){throw E(d="Aborted("+d+")"),J=!0,d=new WebAssembly.RuntimeError(d+". Build with -sASSERTIONS for more info."),i(d),d}function Gc(){return{a:{L:H$,Aa:q$,b:Z$,$:np,A:op,pa:sp,X:lp,Z:dp,qa:cp,na:pp,ga:fp,ma:hp,J:mp,Y:gp,V:yp,oa:vp,W:_p,va:X$,E:Y$,Q:J$,O:t2,D:n2,v:i2,r:a2,P:o2,z:f2,R:h2,ja:m2,T:g2,aa:y2,M:v2,F:_2,ia:As,sa:w2,t:$2,Ca:x2,w:S2,o:E2,m:C2,c:zs,Ba:I2,n:z2,j:A2,u:R2,p:M2,f:B2,s:P2,l:D2,e:L2,k:U2,h:W2,g:V2,d:F2,da:j2,ea:q2,fa:H2,ba:Ap,ca:Rp,N:Mp,xa:K2,ua:Z2,i:X2,C:Y2,G:J2,ta:Q2,x:ex,ra:tx,U:rx,q:G2,y:nx,K:ix,S:ax,za:ox,ya:sx,ka:Lp,la:Up,_:Es,B:Wp,I:Vp,ha:Fp,H:jp,a:T,wa:Ss}}}var xs={840156:(d,p,_,x,k)=>{if(a===void 0||!a.Fb)return 1;if((d=Le(Number(d>>>0))).startsWith("./")&&(d=d.substring(2)),!(d=a.Fb.get(d)))return 2;if(p=Number(p>>>0),_=Number(_>>>0),x=Number(x>>>0),p+_>d.byteLength)return 3;try{let z=d.subarray(p,p+_);switch(k){case 0:j().set(z,x>>>0);break;case 1:a.nc?a.nc(x,z):a.cc(x,z);break;default:return 4}return 0}catch{return 4}},840980:(d,p,_)=>{a.Pb(d,j().subarray(p>>>0,p+_>>>0))},841044:()=>a.oc(),841086:d=>{a.Ob(d)},841123:()=>{a.Wb()},841154:()=>{a.Xb()},841183:()=>{a.ac()},841208:d=>a.Vb(d),841241:d=>a.Zb(d),841273:(d,p,_)=>{a.Lb(Number(d),Number(p),Number(_),!0)},841336:(d,p,_)=>{a.Lb(Number(d),Number(p),Number(_))},841393:()=>typeof wasmOffsetConverter<"u",841450:d=>{a.kb("Abs",d,void 0)},841501:d=>{a.kb("Neg",d,void 0)},841552:d=>{a.kb("Floor",d,void 0)},841605:d=>{a.kb("Ceil",d,void 0)},841657:d=>{a.kb("Reciprocal",d,void 0)},841715:d=>{a.kb("Sqrt",d,void 0)},841767:d=>{a.kb("Exp",d,void 0)},841818:d=>{a.kb("Erf",d,void 0)},841869:d=>{a.kb("Sigmoid",d,void 0)},841924:(d,p,_)=>{a.kb("HardSigmoid",d,{alpha:p,beta:_})},842003:d=>{a.kb("Log",d,void 0)},842054:d=>{a.kb("Sin",d,void 0)},842105:d=>{a.kb("Cos",d,void 0)},842156:d=>{a.kb("Tan",d,void 0)},842207:d=>{a.kb("Asin",d,void 0)},842259:d=>{a.kb("Acos",d,void 0)},842311:d=>{a.kb("Atan",d,void 0)},842363:d=>{a.kb("Sinh",d,void 0)},842415:d=>{a.kb("Cosh",d,void 0)},842467:d=>{a.kb("Asinh",d,void 0)},842520:d=>{a.kb("Acosh",d,void 0)},842573:d=>{a.kb("Atanh",d,void 0)},842626:d=>{a.kb("Tanh",d,void 0)},842678:d=>{a.kb("Not",d,void 0)},842729:(d,p,_)=>{a.kb("Clip",d,{min:p,max:_})},842798:d=>{a.kb("Clip",d,void 0)},842850:(d,p)=>{a.kb("Elu",d,{alpha:p})},842908:d=>{a.kb("Gelu",d,void 0)},842960:d=>{a.kb("Relu",d,void 0)},843012:(d,p)=>{a.kb("LeakyRelu",d,{alpha:p})},843076:(d,p)=>{a.kb("ThresholdedRelu",d,{alpha:p})},843146:(d,p)=>{a.kb("Cast",d,{to:p})},843204:d=>{a.kb("Add",d,void 0)},843255:d=>{a.kb("Sub",d,void 0)},843306:d=>{a.kb("Mul",d,void 0)},843357:d=>{a.kb("Div",d,void 0)},843408:d=>{a.kb("Pow",d,void 0)},843459:d=>{a.kb("Equal",d,void 0)},843512:d=>{a.kb("Greater",d,void 0)},843567:d=>{a.kb("GreaterOrEqual",d,void 0)},843629:d=>{a.kb("Less",d,void 0)},843681:d=>{a.kb("LessOrEqual",d,void 0)},843740:(d,p,_,x,k)=>{a.kb("ReduceMean",d,{keepDims:!!p,noopWithEmptyAxes:!!_,axes:x?Array.from(D().subarray(Number(x)>>>0,Number(k)>>>0)):[]})},843915:(d,p,_,x,k)=>{a.kb("ReduceMax",d,{keepDims:!!p,noopWithEmptyAxes:!!_,axes:x?Array.from(D().subarray(Number(x)>>>0,Number(k)>>>0)):[]})},844089:(d,p,_,x,k)=>{a.kb("ReduceMin",d,{keepDims:!!p,noopWithEmptyAxes:!!_,axes:x?Array.from(D().subarray(Number(x)>>>0,Number(k)>>>0)):[]})},844263:(d,p,_,x,k)=>{a.kb("ReduceProd",d,{keepDims:!!p,noopWithEmptyAxes:!!_,axes:x?Array.from(D().subarray(Number(x)>>>0,Number(k)>>>0)):[]})},844438:(d,p,_,x,k)=>{a.kb("ReduceSum",d,{keepDims:!!p,noopWithEmptyAxes:!!_,axes:x?Array.from(D().subarray(Number(x)>>>0,Number(k)>>>0)):[]})},844612:(d,p,_,x,k)=>{a.kb("ReduceL1",d,{keepDims:!!p,noopWithEmptyAxes:!!_,axes:x?Array.from(D().subarray(Number(x)>>>0,Number(k)>>>0)):[]})},844785:(d,p,_,x,k)=>{a.kb("ReduceL2",d,{keepDims:!!p,noopWithEmptyAxes:!!_,axes:x?Array.from(D().subarray(Number(x)>>>0,Number(k)>>>0)):[]})},844958:(d,p,_,x,k)=>{a.kb("ReduceLogSum",d,{keepDims:!!p,noopWithEmptyAxes:!!_,axes:x?Array.from(D().subarray(Number(x)>>>0,Number(k)>>>0)):[]})},845135:(d,p,_,x,k)=>{a.kb("ReduceSumSquare",d,{keepDims:!!p,noopWithEmptyAxes:!!_,axes:x?Array.from(D().subarray(Number(x)>>>0,Number(k)>>>0)):[]})},845315:(d,p,_,x,k)=>{a.kb("ReduceLogSumExp",d,{keepDims:!!p,noopWithEmptyAxes:!!_,axes:x?Array.from(D().subarray(Number(x)>>>0,Number(k)>>>0)):[]})},845495:d=>{a.kb("Where",d,void 0)},845548:(d,p,_)=>{a.kb("Transpose",d,{perm:p?Array.from(D().subarray(Number(p)>>>0,Number(_)>>>0)):[]})},845672:(d,p,_,x)=>{a.kb("DepthToSpace",d,{blocksize:p,mode:Le(_),format:x?"NHWC":"NCHW"})},845805:(d,p,_,x)=>{a.kb("DepthToSpace",d,{blocksize:p,mode:Le(_),format:x?"NHWC":"NCHW"})},845938:(d,p,_,x,k,z,R,U,q,ee,de,me,$e,Ke,Nn)=>{a.kb("ConvTranspose",d,{format:q?"NHWC":"NCHW",autoPad:p,dilations:[_],group:x,kernelShape:[k],pads:[z,R],strides:[U],wIsConst:()=>!!L()[ee>>>0],outputPadding:de?Array.from(D().subarray(Number(de)>>>0,Number(me)>>>0)):[],outputShape:$e?Array.from(D().subarray(Number($e)>>>0,Number(Ke)>>>0)):[],activation:Le(Nn)})},846371:(d,p,_,x,k,z,R,U,q,ee,de,me,$e,Ke)=>{a.kb("ConvTranspose",d,{format:U?"NHWC":"NCHW",autoPad:p,dilations:Array.from(D().subarray(Number(_)>>>0,2+(Number(_)>>>0)>>>0)),group:x,kernelShape:Array.from(D().subarray(Number(k)>>>0,2+(Number(k)>>>0)>>>0)),pads:Array.from(D().subarray(Number(z)>>>0,4+(Number(z)>>>0)>>>0)),strides:Array.from(D().subarray(Number(R)>>>0,2+(Number(R)>>>0)>>>0)),wIsConst:()=>!!L()[q>>>0],outputPadding:ee?Array.from(D().subarray(Number(ee)>>>0,Number(de)>>>0)):[],outputShape:me?Array.from(D().subarray(Number(me)>>>0,Number($e)>>>0)):[],activation:Le(Ke)})},847032:(d,p,_,x,k,z,R,U,q,ee,de,me,$e,Ke,Nn)=>{a.kb("ConvTranspose",d,{format:q?"NHWC":"NCHW",autoPad:p,dilations:[_],group:x,kernelShape:[k],pads:[z,R],strides:[U],wIsConst:()=>!!L()[ee>>>0],outputPadding:de?Array.from(D().subarray(Number(de)>>>0,Number(me)>>>0)):[],outputShape:$e?Array.from(D().subarray(Number($e)>>>0,Number(Ke)>>>0)):[],activation:Le(Nn)})},847465:(d,p,_,x,k,z,R,U,q,ee,de,me,$e,Ke)=>{a.kb("ConvTranspose",d,{format:U?"NHWC":"NCHW",autoPad:p,dilations:Array.from(D().subarray(Number(_)>>>0,2+(Number(_)>>>0)>>>0)),group:x,kernelShape:Array.from(D().subarray(Number(k)>>>0,2+(Number(k)>>>0)>>>0)),pads:Array.from(D().subarray(Number(z)>>>0,4+(Number(z)>>>0)>>>0)),strides:Array.from(D().subarray(Number(R)>>>0,2+(Number(R)>>>0)>>>0)),wIsConst:()=>!!L()[q>>>0],outputPadding:ee?Array.from(D().subarray(Number(ee)>>>0,Number(de)>>>0)):[],outputShape:me?Array.from(D().subarray(Number(me)>>>0,Number($e)>>>0)):[],activation:Le(Ke)})},848126:(d,p)=>{a.kb("GlobalAveragePool",d,{format:p?"NHWC":"NCHW"})},848217:(d,p,_,x,k,z,R,U,q,ee,de,me,$e,Ke)=>{a.kb("AveragePool",d,{format:Ke?"NHWC":"NCHW",auto_pad:p,ceil_mode:_,count_include_pad:x,storage_order:k,dilations:z?Array.from(D().subarray(Number(z)>>>0,Number(R)>>>0)):[],kernel_shape:U?Array.from(D().subarray(Number(U)>>>0,Number(q)>>>0)):[],pads:ee?Array.from(D().subarray(Number(ee)>>>0,Number(de)>>>0)):[],strides:me?Array.from(D().subarray(Number(me)>>>0,Number($e)>>>0)):[]})},848696:(d,p)=>{a.kb("GlobalAveragePool",d,{format:p?"NHWC":"NCHW"})},848787:(d,p,_,x,k,z,R,U,q,ee,de,me,$e,Ke)=>{a.kb("AveragePool",d,{format:Ke?"NHWC":"NCHW",auto_pad:p,ceil_mode:_,count_include_pad:x,storage_order:k,dilations:z?Array.from(D().subarray(Number(z)>>>0,Number(R)>>>0)):[],kernel_shape:U?Array.from(D().subarray(Number(U)>>>0,Number(q)>>>0)):[],pads:ee?Array.from(D().subarray(Number(ee)>>>0,Number(de)>>>0)):[],strides:me?Array.from(D().subarray(Number(me)>>>0,Number($e)>>>0)):[]})},849266:(d,p)=>{a.kb("GlobalMaxPool",d,{format:p?"NHWC":"NCHW"})},849353:(d,p,_,x,k,z,R,U,q,ee,de,me,$e,Ke)=>{a.kb("MaxPool",d,{format:Ke?"NHWC":"NCHW",auto_pad:p,ceil_mode:_,count_include_pad:x,storage_order:k,dilations:z?Array.from(D().subarray(Number(z)>>>0,Number(R)>>>0)):[],kernel_shape:U?Array.from(D().subarray(Number(U)>>>0,Number(q)>>>0)):[],pads:ee?Array.from(D().subarray(Number(ee)>>>0,Number(de)>>>0)):[],strides:me?Array.from(D().subarray(Number(me)>>>0,Number($e)>>>0)):[]})},849828:(d,p)=>{a.kb("GlobalMaxPool",d,{format:p?"NHWC":"NCHW"})},849915:(d,p,_,x,k,z,R,U,q,ee,de,me,$e,Ke)=>{a.kb("MaxPool",d,{format:Ke?"NHWC":"NCHW",auto_pad:p,ceil_mode:_,count_include_pad:x,storage_order:k,dilations:z?Array.from(D().subarray(Number(z)>>>0,Number(R)>>>0)):[],kernel_shape:U?Array.from(D().subarray(Number(U)>>>0,Number(q)>>>0)):[],pads:ee?Array.from(D().subarray(Number(ee)>>>0,Number(de)>>>0)):[],strides:me?Array.from(D().subarray(Number(me)>>>0,Number($e)>>>0)):[]})},850390:(d,p,_,x,k)=>{a.kb("Gemm",d,{alpha:p,beta:_,transA:x,transB:k})},850494:d=>{a.kb("MatMul",d,void 0)},850548:(d,p,_,x)=>{a.kb("ArgMax",d,{keepDims:!!p,selectLastIndex:!!_,axis:x})},850656:(d,p,_,x)=>{a.kb("ArgMin",d,{keepDims:!!p,selectLastIndex:!!_,axis:x})},850764:(d,p)=>{a.kb("Softmax",d,{axis:p})},850827:(d,p)=>{a.kb("Concat",d,{axis:p})},850887:(d,p,_,x,k)=>{a.kb("Split",d,{axis:p,numOutputs:_,splitSizes:x?Array.from(D().subarray(Number(x)>>>0,Number(k)>>>0)):[]})},851043:d=>{a.kb("Expand",d,void 0)},851097:(d,p)=>{a.kb("Gather",d,{axis:Number(p)})},851168:(d,p)=>{a.kb("GatherElements",d,{axis:Number(p)})},851247:(d,p)=>{a.kb("GatherND",d,{batch_dims:Number(p)})},851326:(d,p,_,x,k,z,R,U,q,ee,de)=>{a.kb("Resize",d,{antialias:p,axes:_?Array.from(D().subarray(Number(_)>>>0,Number(x)>>>0)):[],coordinateTransformMode:Le(k),cubicCoeffA:z,excludeOutside:R,extrapolationValue:U,keepAspectRatioPolicy:Le(q),mode:Le(ee),nearestMode:Le(de)})},851688:(d,p,_,x,k,z,R)=>{a.kb("Slice",d,{starts:p?Array.from(D().subarray(Number(p)>>>0,Number(_)>>>0)):[],ends:x?Array.from(D().subarray(Number(x)>>>0,Number(k)>>>0)):[],axes:z?Array.from(D().subarray(Number(z)>>>0,Number(R)>>>0)):[]})},851952:d=>{a.kb("Tile",d,void 0)},852004:(d,p,_)=>{a.kb("InstanceNormalization",d,{epsilon:p,format:_?"NHWC":"NCHW"})},852118:(d,p,_)=>{a.kb("InstanceNormalization",d,{epsilon:p,format:_?"NHWC":"NCHW"})},852232:d=>{a.kb("Range",d,void 0)},852285:(d,p)=>{a.kb("Einsum",d,{equation:Le(p)})},852366:(d,p,_,x,k)=>{a.kb("Pad",d,{mode:p,value:_,pads:x?Array.from(D().subarray(Number(x)>>>0,Number(k)>>>0)):[]})},852509:(d,p,_,x,k,z)=>{a.kb("BatchNormalization",d,{epsilon:p,momentum:_,spatial:!!k,trainingMode:!!x,format:z?"NHWC":"NCHW"})},852678:(d,p,_,x,k,z)=>{a.kb("BatchNormalization",d,{epsilon:p,momentum:_,spatial:!!k,trainingMode:!!x,format:z?"NHWC":"NCHW"})},852847:(d,p,_)=>{a.kb("CumSum",d,{exclusive:Number(p),reverse:Number(_)})},852944:(d,p,_)=>{a.kb("DequantizeLinear",d,{axis:p,blockSize:_})},853034:(d,p,_,x,k)=>{a.kb("GridSample",d,{align_corners:p,mode:Le(_),padding_mode:Le(x),format:k?"NHWC":"NCHW"})},853204:(d,p,_,x,k)=>{a.kb("GridSample",d,{align_corners:p,mode:Le(_),padding_mode:Le(x),format:k?"NHWC":"NCHW"})},853374:(d,p)=>{a.kb("ScatterND",d,{reduction:Le(p)})},853459:(d,p,_,x,k,z,R,U,q)=>{a.kb("Attention",d,{numHeads:p,isUnidirectional:_,maskFilterValue:x,scale:k,doRotary:z,qkvHiddenSizes:R?Array.from(D().subarray(Number(U)>>>0,Number(U)+R>>>0)):[],pastPresentShareBuffer:!!q})},853731:d=>{a.kb("BiasAdd",d,void 0)},853786:d=>{a.kb("BiasSplitGelu",d,void 0)},853847:d=>{a.kb("FastGelu",d,void 0)},853903:(d,p,_,x,k,z,R,U,q,ee,de,me,$e,Ke,Nn,dx)=>{a.kb("Conv",d,{format:me?"NHWC":"NCHW",auto_pad:p,dilations:_?Array.from(D().subarray(Number(_)>>>0,Number(x)>>>0)):[],group:k,kernel_shape:z?Array.from(D().subarray(Number(z)>>>0,Number(R)>>>0)):[],pads:U?Array.from(D().subarray(Number(U)>>>0,Number(q)>>>0)):[],strides:ee?Array.from(D().subarray(Number(ee)>>>0,Number(de)>>>0)):[],w_is_const:()=>!!L()[Number($e)>>>0],activation:Le(Ke),activation_params:Nn?Array.from(zn().subarray(Number(Nn)>>>0,Number(dx)>>>0)):[]})},854487:d=>{a.kb("Gelu",d,void 0)},854539:(d,p,_,x,k,z,R,U,q)=>{a.kb("GroupQueryAttention",d,{numHeads:p,kvNumHeads:_,scale:x,softcap:k,doRotary:z,rotaryInterleaved:R,smoothSoftmax:U,localWindowSize:q})},854756:(d,p,_,x)=>{a.kb("LayerNormalization",d,{axis:p,epsilon:_,simplified:!!x})},854867:(d,p,_,x)=>{a.kb("LayerNormalization",d,{axis:p,epsilon:_,simplified:!!x})},854978:(d,p,_,x,k,z)=>{a.kb("MatMulNBits",d,{k:p,n:_,accuracyLevel:x,bits:k,blockSize:z})},855105:(d,p,_,x,k,z)=>{a.kb("MultiHeadAttention",d,{numHeads:p,isUnidirectional:_,maskFilterValue:x,scale:k,doRotary:z})},855264:(d,p)=>{a.kb("QuickGelu",d,{alpha:p})},855328:(d,p,_,x,k)=>{a.kb("RotaryEmbedding",d,{interleaved:!!p,numHeads:_,rotaryEmbeddingDim:x,scale:k})},855467:(d,p,_)=>{a.kb("SkipLayerNormalization",d,{epsilon:p,simplified:!!_})},855569:(d,p,_)=>{a.kb("SkipLayerNormalization",d,{epsilon:p,simplified:!!_})},855671:(d,p,_,x)=>{a.kb("GatherBlockQuantized",d,{gatherAxis:p,quantizeAxis:_,blockSize:x})},855792:d=>{a.$b(d)},855826:(d,p)=>a.bc(Number(d),Number(p),a.Gb.ec,a.Gb.errors)};function q$(d,p,_){return Tp(async()=>{await a.Yb(Number(d),Number(p),Number(_))})}function H$(){return typeof wasmOffsetConverter<"u"}class bs{constructor(p){sf(this,"name","ExitStatus");this.message=`Program terminated with exit(${p})`,this.status=p}}var Kc=d=>{d.terminate(),d.onmessage=()=>{}},ks=[],Qc=d=>{Sr.length==0&&(tp(),ep(Sr[0]));var p=Sr.pop();if(!p)return 6;hi.push(p),rn[d.Bb]=p,p.Bb=d.Bb;var _={Cb:"run",hc:d.fc,Ib:d.Ib,Bb:d.Bb};return p.postMessage(_,d.Nb),0},kr=0,Ee=(d,p,..._)=>{for(var x=2*_.length,k=Vs(),z=Ws(8*x),R=z>>>3,U=0;U<_.length;U++){var q=_[U];typeof q=="bigint"?(H[R+2*U]=1n,H[R+2*U+1]=q):(H[R+2*U]=0n,nt()[R+2*U+1>>>0]=q)}return d=Qp(d,0,x,z,p),Ra(k),d};function Ss(d){if(l)return Ee(0,1,d);if(I=d,!(0<kr)){for(var p of hi)Kc(p);for(p of Sr)Kc(p);Sr=[],hi=[],rn={},J=!0}S(0,new bs(d))}function Zc(d){if(l)return Ee(1,0,d);Es(d)}var Es=d=>{if(I=d,l)throw Zc(d),"unwind";Ss(d)},Sr=[],hi=[],Xc=[],rn={},Yc=d=>{var p=d.Bb;delete rn[p],Sr.push(d),hi.splice(hi.indexOf(d),1),d.Bb=0,Zp(p)};function Jc(){Xc.forEach(d=>d())}var ep=d=>new Promise(p=>{d.onmessage=k=>{var z=(k=k.data).Cb;if(k.Hb&&k.Hb!=Na()){var R=rn[k.Hb];R?R.postMessage(k,k.Nb):E(`Internal error! Worker sent a message "${z}" to target pthread ${k.Hb}, but that thread no longer exists!`)}else z==="checkMailbox"?ka():z==="spawnThread"?Qc(k):z==="cleanupThread"?Yc(rn[k.ic]):z==="loaded"?(d.loaded=!0,p(d)):z==="alert"?alert(`Thread ${k.jc}: ${k.text}`):k.target==="setimmediate"?d.postMessage(k):z==="callHandler"?a[k.Rb](...k.args):z&&E(`worker sent an unknown command ${z}`)},d.onerror=k=>{throw E(`worker sent an error! ${k.filename}:${k.lineno}: ${k.message}`),k};var _,x=[];for(_ of[])a.propertyIsEnumerable(_)&&x.push(_);d.postMessage({Cb:"load",Sb:x,lc:T,mc:C})});function tp(){var d=new Worker((()=>{let p=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new p("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});Sr.push(d)}var G$=d=>{_e();var p=he()[d+52>>>2>>>0];d=he()[d+56>>>2>>>0],Jp(p,p-d),Ra(p)},K$=(d,p)=>{kr=0,d=ef(d,p),0<kr?I=d:Us(d)};class Q${constructor(p){this.Jb=p-24}}function Z$(d,p,_){var x=new Q$(d>>>=0);throw p>>>=0,_>>>=0,he()[x.Jb+16>>>2>>>0]=0,he()[x.Jb+4>>>2>>>0]=p,he()[x.Jb+8>>>2>>>0]=_,d}function rp(d,p,_,x){return l?Ee(2,1,d,p,_,x):np(d,p,_,x)}function np(d,p,_,x){if(d>>>=0,_>>>=0,x>>>=0,c===void 0)return 6;var k=[];return l&&k.length===0?rp(d,p>>>=0,_,x):(d={fc:_,Bb:d,Ib:x,Nb:k},l?(d.Cb="spawnThread",postMessage(d,k),0):Qc(d))}var ip=typeof TextDecoder<"u"?new TextDecoder:void 0,ap=(d,p=0,_=NaN)=>{var x=(p>>>=0)+_;for(_=p;d[_]&&!(_>=x);)++_;if(16<_-p&&d.buffer&&ip)return ip.decode(d.buffer instanceof ArrayBuffer?d.subarray(p,_):d.slice(p,_));for(x="";p<_;){var k=d[p++];if(128&k){var z=63&d[p++];if((224&k)==192)x+=String.fromCharCode((31&k)<<6|z);else{var R=63&d[p++];65536>(k=(240&k)==224?(15&k)<<12|z<<6|R:(7&k)<<18|z<<12|R<<6|63&d[p++])?x+=String.fromCharCode(k):(k-=65536,x+=String.fromCharCode(55296|k>>10,56320|1023&k))}}else x+=String.fromCharCode(k)}return x},Le=(d,p)=>(d>>>=0)?ap(j(),d,p):"";function op(d,p,_){return l?Ee(3,1,d,p,_):0}function sp(d,p){if(l)return Ee(4,1,d,p)}var up=d=>{for(var p=0,_=0;_<d.length;++_){var x=d.charCodeAt(_);127>=x?p++:2047>=x?p+=2:55296<=x&&57343>=x?(p+=4,++_):p+=3}return p},On=(d,p,_)=>{var x=j();if(p>>>=0,0<_){var k=p;_=p+_-1;for(var z=0;z<d.length;++z){var R=d.charCodeAt(z);if(55296<=R&&57343>=R&&(R=65536+((1023&R)<<10)|1023&d.charCodeAt(++z)),127>=R){if(p>=_)break;x[p++>>>0]=R}else{if(2047>=R){if(p+1>=_)break;x[p++>>>0]=192|R>>6}else{if(65535>=R){if(p+2>=_)break;x[p++>>>0]=224|R>>12}else{if(p+3>=_)break;x[p++>>>0]=240|R>>18,x[p++>>>0]=128|R>>12&63}x[p++>>>0]=128|R>>6&63}x[p++>>>0]=128|63&R}}x[p>>>0]=0,d=p-k}else d=0;return d};function lp(d,p){if(l)return Ee(5,1,d,p)}function dp(d,p,_){if(l)return Ee(6,1,d,p,_)}function cp(d,p,_){return l?Ee(7,1,d,p,_):0}function pp(d,p){if(l)return Ee(8,1,d,p)}function fp(d,p,_){if(l)return Ee(9,1,d,p,_)}function hp(d,p,_,x){if(l)return Ee(10,1,d,p,_,x)}function mp(d,p,_,x){if(l)return Ee(11,1,d,p,_,x)}function gp(d,p,_,x){if(l)return Ee(12,1,d,p,_,x)}function yp(d){if(l)return Ee(13,1,d)}function vp(d,p){if(l)return Ee(14,1,d,p)}function _p(d,p,_){if(l)return Ee(15,1,d,p,_)}var wp,Er,X$=()=>br(""),Xt=d=>{for(var p="";j()[d>>>0];)p+=wp[j()[d++>>>0]];return p},Ts={},Cs={};function ur(d,p,_={}){return function(x,k,z={}){var R=k.name;if(!x)throw new Er(`type "${R}" must have a positive integer typeid pointer`);if(Cs.hasOwnProperty(x)){if(z.Tb)return;throw new Er(`Cannot register type '${R}' twice`)}Cs[x]=k,Ts.hasOwnProperty(x)&&(k=Ts[x],delete Ts[x],k.forEach(U=>U()))}(d,p,_)}var $p=(d,p,_)=>{switch(p){case 1:return _?x=>L()[x>>>0]:x=>j()[x>>>0];case 2:return _?x=>re()[x>>>1>>>0]:x=>De()[x>>>1>>>0];case 4:return _?x=>D()[x>>>2>>>0]:x=>he()[x>>>2>>>0];case 8:return _?x=>H[x>>>3]:x=>ae[x>>>3];default:throw new TypeError(`invalid integer width (${p}): ${d}`)}};function Y$(d,p,_){_>>>=0,ur(d>>>=0,{name:p=Xt(p>>>0),fromWireType:x=>x,toWireType:function(x,k){if(typeof k!="bigint"&&typeof k!="number")throw k=k===null?"null":(x=typeof k)=="object"||x==="array"||x==="function"?k.toString():""+k,new TypeError(`Cannot convert "${k}" to ${this.name}`);return typeof k=="number"&&(k=BigInt(k)),k},Db:Tr,readValueFromPointer:$p(p,_,p.indexOf("u")==-1),Eb:null})}var Tr=8;function J$(d,p,_,x){ur(d>>>=0,{name:p=Xt(p>>>0),fromWireType:function(k){return!!k},toWireType:function(k,z){return z?_:x},Db:Tr,readValueFromPointer:function(k){return this.fromWireType(j()[k>>>0])},Eb:null})}var Is=[],lr=[];function zs(d){9<(d>>>=0)&&--lr[d+1]==0&&(lr[d]=void 0,Is.push(d))}var it=d=>{if(!d)throw new Er("Cannot use deleted val. handle = "+d);return lr[d]},Et=d=>{switch(d){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let p=Is.pop()||lr.length;return lr[p]=d,lr[p+1]=1,p}};function Os(d){return this.fromWireType(he()[d>>>2>>>0])}var e2={name:"emscripten::val",fromWireType:d=>{var p=it(d);return zs(d),p},toWireType:(d,p)=>Et(p),Db:Tr,readValueFromPointer:Os,Eb:null};function t2(d){return ur(d>>>0,e2)}var r2=(d,p)=>{switch(p){case 4:return function(_){return this.fromWireType(zn()[_>>>2>>>0])};case 8:return function(_){return this.fromWireType(nt()[_>>>3>>>0])};default:throw new TypeError(`invalid float width (${p}): ${d}`)}};function n2(d,p,_){_>>>=0,ur(d>>>=0,{name:p=Xt(p>>>0),fromWireType:x=>x,toWireType:(x,k)=>k,Db:Tr,readValueFromPointer:r2(p,_),Eb:null})}function i2(d,p,_,x,k){if(d>>>=0,_>>>=0,p=Xt(p>>>0),k===-1&&(k=4294967295),k=U=>U,x===0){var z=32-8*_;k=U=>U<<z>>>z}var R=p.includes("unsigned")?function(U,q){return q>>>0}:function(U,q){return q};ur(d,{name:p,fromWireType:k,toWireType:R,Db:Tr,readValueFromPointer:$p(p,_,x!==0),Eb:null})}function a2(d,p,_){function x(z){var R=he()[z>>>2>>>0];return z=he()[z+4>>>2>>>0],new k(L().buffer,z,R)}var k=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][p];ur(d>>>=0,{name:_=Xt(_>>>0),fromWireType:x,Db:Tr,readValueFromPointer:x},{Tb:!0})}function o2(d,p){ur(d>>>=0,{name:p=Xt(p>>>0),fromWireType:function(_){for(var x,k=he()[_>>>2>>>0],z=_+4,R=z,U=0;U<=k;++U){var q=z+U;U!=k&&j()[q>>>0]!=0||(R=Le(R,q-R),x===void 0?x=R:(x+="\0",x+=R),R=q+1)}return Jt(_),x},toWireType:function(_,x){x instanceof ArrayBuffer&&(x=new Uint8Array(x));var k=typeof x=="string";if(!(k||x instanceof Uint8Array||x instanceof Uint8ClampedArray||x instanceof Int8Array))throw new Er("Cannot pass non-string to std::string");var z=k?up(x):x.length,R=Aa(4+z+1),U=R+4;if(he()[R>>>2>>>0]=z,k)On(x,U,z+1);else if(k)for(k=0;k<z;++k){var q=x.charCodeAt(k);if(255<q)throw Jt(R),new Er("String has UTF-16 code units that do not fit in 8 bits");j()[U+k>>>0]=q}else for(k=0;k<z;++k)j()[U+k>>>0]=x[k];return _!==null&&_.push(Jt,R),R},Db:Tr,readValueFromPointer:Os,Eb(_){Jt(_)}})}var xp=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,s2=(d,p)=>{for(var _=d>>1,x=_+p/2;!(_>=x)&&De()[_>>>0];)++_;if(32<(_<<=1)-d&&xp)return xp.decode(j().slice(d,_));for(_="",x=0;!(x>=p/2);++x){var k=re()[d+2*x>>>1>>>0];if(k==0)break;_+=String.fromCharCode(k)}return _},u2=(d,p,_)=>{if(_??(_=2147483647),2>_)return 0;var x=p;_=(_-=2)<2*d.length?_/2:d.length;for(var k=0;k<_;++k){var z=d.charCodeAt(k);re()[p>>>1>>>0]=z,p+=2}return re()[p>>>1>>>0]=0,p-x},l2=d=>2*d.length,d2=(d,p)=>{for(var _=0,x="";!(_>=p/4);){var k=D()[d+4*_>>>2>>>0];if(k==0)break;++_,65536<=k?(k-=65536,x+=String.fromCharCode(55296|k>>10,56320|1023&k)):x+=String.fromCharCode(k)}return x},c2=(d,p,_)=>{if(p>>>=0,_??(_=2147483647),4>_)return 0;var x=p;_=x+_-4;for(var k=0;k<d.length;++k){var z=d.charCodeAt(k);if(55296<=z&&57343>=z&&(z=65536+((1023&z)<<10)|1023&d.charCodeAt(++k)),D()[p>>>2>>>0]=z,(p+=4)+4>_)break}return D()[p>>>2>>>0]=0,p-x},p2=d=>{for(var p=0,_=0;_<d.length;++_){var x=d.charCodeAt(_);55296<=x&&57343>=x&&++_,p+=4}return p};function f2(d,p,_){if(d>>>=0,p>>>=0,_=Xt(_>>>=0),p===2)var x=s2,k=u2,z=l2,R=U=>De()[U>>>1>>>0];else p===4&&(x=d2,k=c2,z=p2,R=U=>he()[U>>>2>>>0]);ur(d,{name:_,fromWireType:U=>{for(var q,ee=he()[U>>>2>>>0],de=U+4,me=0;me<=ee;++me){var $e=U+4+me*p;me!=ee&&R($e)!=0||(de=x(de,$e-de),q===void 0?q=de:(q+="\0",q+=de),de=$e+p)}return Jt(U),q},toWireType:(U,q)=>{if(typeof q!="string")throw new Er(`Cannot pass non-string to C++ string type ${_}`);var ee=z(q),de=Aa(4+ee+p);return he()[de>>>2>>>0]=ee/p,k(q,de+4,ee+p),U!==null&&U.push(Jt,de),de},Db:Tr,readValueFromPointer:Os,Eb(U){Jt(U)}})}function h2(d,p){ur(d>>>=0,{Ub:!0,name:p=Xt(p>>>0),Db:0,fromWireType:()=>{},toWireType:()=>{}})}function m2(d){Ls(d>>>0,!u,1,!s,131072,!1),Jc()}var Ns=d=>{if(!J)try{if(d(),!(0<kr))try{l?Us(I):Es(I)}catch(p){p instanceof bs||p=="unwind"||S(0,p)}}catch(p){p instanceof bs||p=="unwind"||S(0,p)}};function As(d){d>>>=0,typeof Atomics.kc=="function"&&(Atomics.kc(D(),d>>>2,d).value.then(ka),d+=128,Atomics.store(D(),d>>>2,1))}var ka=()=>{var d=Na();d&&(As(d),Ns(Yp))};function g2(d,p){(d>>>=0)==p>>>0?setTimeout(ka):l?postMessage({Hb:d,Cb:"checkMailbox"}):(d=rn[d])&&d.postMessage({Cb:"checkMailbox"})}var Rs=[];function y2(d,p,_,x,k){for(p>>>=0,x/=2,Rs.length=x,_=k>>>0>>>3,k=0;k<x;k++)Rs[k]=H[_+2*k]?H[_+2*k+1]:nt()[_+2*k+1>>>0];return(p?xs[p]:lx[d])(...Rs)}var v2=()=>{kr=0};function _2(d){d>>>=0,l?postMessage({Cb:"cleanupThread",ic:d}):Yc(rn[d])}function w2(d){}var Sa=(d,p)=>{var _=Cs[d];if(_===void 0)throw d=Hp(d),_=Xt(d),Jt(d),new Er(`${p} has unknown type ${_}`);return _},bp=(d,p,_)=>{var x=[];return d=d.toWireType(x,_),x.length&&(he()[p>>>2>>>0]=Et(x)),d};function $2(d,p,_){return p>>>=0,_>>>=0,d=it(d>>>0),p=Sa(p,"emval::as"),bp(p,_,d)}function x2(d,p){return p>>>=0,d=it(d>>>0),(p=Sa(p,"emval::as")).toWireType(null,d)}var Ea=d=>{try{d()}catch(p){br(p)}},Cr=0,Yt=null,kp=0,Ta=[],Sp={},Ep={},b2=0,Ms=null,k2=[];function Tp(d){return function(p){if(!J){if(Cr===0){var _=!1,x=!1;p((k=0)=>{if(!J&&(kp=k,_=!0,x)){Cr=2,Ea(()=>nf(Yt)),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.resume(),k=!1;try{var z=function(){var q=D()[Yt+8>>>2>>>0];return q=ne[Ep[q]],--kr,q()}()}catch(q){z=q,k=!0}var R=!1;if(!Yt){var U=Ms;U&&(Ms=null,(k?U.reject:U.resolve)(z),R=!0)}if(k&&!R)throw z}}),x=!0,_||(Cr=1,Yt=function(){var k=Aa(65548),z=k+12;he()[k>>>2>>>0]=z,he()[k+4>>>2>>>0]=z+65536,z=Ta[0];var R=Sp[z];return R===void 0&&(R=b2++,Sp[z]=R,Ep[R]=z),z=R,D()[k+8>>>2>>>0]=z,k}(),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.pause(),Ea(()=>tf(Yt)))}else Cr===2?(Cr=0,Ea(af),Jt(Yt),Yt=null,k2.forEach(Ns)):br(`invalid state: ${Cr}`);return kp}}(p=>{d().then(p)})}function S2(d){return d>>>=0,Tp(async()=>{var p=await it(d);return Et(p)})}var Ca=[];function E2(d,p,_,x){return _>>>=0,x>>>=0,(d=Ca[d>>>0])(null,p=it(p>>>0),_,x)}var T2={},Ia=d=>{var p=T2[d];return p===void 0?Xt(d):p};function C2(d,p,_,x,k){return _>>>=0,x>>>=0,k>>>=0,(d=Ca[d>>>0])(p=it(p>>>0),p[_=Ia(_)],x,k)}function I2(d,p){return p>>>=0,(d=it(d>>>0))==it(p)}var Cp=()=>typeof globalThis=="object"?globalThis:Function("return this")();function z2(d){return(d>>>=0)==0?Et(Cp()):(d=Ia(d),Et(Cp()[d]))}var O2=d=>{var p=Ca.length;return Ca.push(d),p},N2=(d,p)=>{for(var _=Array(d),x=0;x<d;++x)_[x]=Sa(he()[p+4*x>>>2>>>0],"parameter "+x);return _},Ip=(d,p)=>Object.defineProperty(p,"name",{value:d});function A2(d,p,_){var x=(p=N2(d,p>>>0)).shift();d--;var k=`return function (obj, func, destructorsRef, args) {
`,z=0,R=[];_===0&&R.push("obj");for(var U=["retType"],q=[x],ee=0;ee<d;++ee)R.push("arg"+ee),U.push("argType"+ee),q.push(p[ee]),k+=`  var arg${ee} = argType${ee}.readValueFromPointer(args${z?"+"+z:""});
`,z+=p[ee].Db;return k+=`  var rv = ${_===1?"new func":"func.call"}(${R.join(", ")});
`,x.Ub||(U.push("emval_returnValue"),q.push(bp),k+=`  return emval_returnValue(retType, destructorsRef, rv);
`),U.push(k+`};
`),d=function(de){var me=Function;if(!(me instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof me} which is not a function`);var $e=Ip(me.name||"unknownFunctionName",function(){});return $e.prototype=me.prototype,$e=new $e,(de=me.apply($e,de))instanceof Object?de:$e}(U)(...q),_=`methodCaller<(${p.map(de=>de.name).join(", ")}) => ${x.name}>`,O2(Ip(_,d))}function R2(d){return d=Ia(d>>>0),Et(a[d])}function M2(d,p){return p>>>=0,d=it(d>>>0),p=it(p),Et(d[p])}function B2(d){9<(d>>>=0)&&(lr[d+1]+=1)}function P2(){return Et([])}function D2(d){d=it(d>>>0);for(var p=Array(d.length),_=0;_<d.length;_++)p[_]=d[_];return Et(p)}function L2(d){return Et(Ia(d>>>0))}function U2(){return Et({})}function W2(d){for(var p=it(d>>>=0);p.length;){var _=p.pop();p.pop()(_)}zs(d)}function V2(d,p,_){p>>>=0,_>>>=0,d=it(d>>>0),p=it(p),_=it(_),d[p]=_}function F2(d,p){return p>>>=0,d=(d=Sa(d>>>0,"_emval_take_value")).readValueFromPointer(p),Et(d)}function j2(d,p){d=-9007199254740992>d||9007199254740992<d?NaN:Number(d),p>>>=0,d=new Date(1e3*d),D()[p>>>2>>>0]=d.getUTCSeconds(),D()[p+4>>>2>>>0]=d.getUTCMinutes(),D()[p+8>>>2>>>0]=d.getUTCHours(),D()[p+12>>>2>>>0]=d.getUTCDate(),D()[p+16>>>2>>>0]=d.getUTCMonth(),D()[p+20>>>2>>>0]=d.getUTCFullYear()-1900,D()[p+24>>>2>>>0]=d.getUTCDay(),d=(d.getTime()-Date.UTC(d.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,D()[p+28>>>2>>>0]=d}var zp=d=>d%4==0&&(d%100!=0||d%400==0),Op=[0,31,60,91,121,152,182,213,244,274,305,335],Np=[0,31,59,90,120,151,181,212,243,273,304,334];function q2(d,p){d=-9007199254740992>d||9007199254740992<d?NaN:Number(d),p>>>=0,d=new Date(1e3*d),D()[p>>>2>>>0]=d.getSeconds(),D()[p+4>>>2>>>0]=d.getMinutes(),D()[p+8>>>2>>>0]=d.getHours(),D()[p+12>>>2>>>0]=d.getDate(),D()[p+16>>>2>>>0]=d.getMonth(),D()[p+20>>>2>>>0]=d.getFullYear()-1900,D()[p+24>>>2>>>0]=d.getDay();var _=(zp(d.getFullYear())?Op:Np)[d.getMonth()]+d.getDate()-1|0;D()[p+28>>>2>>>0]=_,D()[p+36>>>2>>>0]=-60*d.getTimezoneOffset(),_=new Date(d.getFullYear(),6,1).getTimezoneOffset();var x=new Date(d.getFullYear(),0,1).getTimezoneOffset();d=0|(_!=x&&d.getTimezoneOffset()==Math.min(x,_)),D()[p+32>>>2>>>0]=d}function H2(d){d>>>=0;var p=new Date(D()[d+20>>>2>>>0]+1900,D()[d+16>>>2>>>0],D()[d+12>>>2>>>0],D()[d+8>>>2>>>0],D()[d+4>>>2>>>0],D()[d>>>2>>>0],0),_=D()[d+32>>>2>>>0],x=p.getTimezoneOffset(),k=new Date(p.getFullYear(),6,1).getTimezoneOffset(),z=new Date(p.getFullYear(),0,1).getTimezoneOffset(),R=Math.min(z,k);return 0>_?D()[d+32>>>2>>>0]=+(k!=z&&R==x):0<_!=(R==x)&&(k=Math.max(z,k),p.setTime(p.getTime()+6e4*((0<_?R:k)-x))),D()[d+24>>>2>>>0]=p.getDay(),_=(zp(p.getFullYear())?Op:Np)[p.getMonth()]+p.getDate()-1|0,D()[d+28>>>2>>>0]=_,D()[d>>>2>>>0]=p.getSeconds(),D()[d+4>>>2>>>0]=p.getMinutes(),D()[d+8>>>2>>>0]=p.getHours(),D()[d+12>>>2>>>0]=p.getDate(),D()[d+16>>>2>>>0]=p.getMonth(),D()[d+20>>>2>>>0]=p.getYear(),d=p.getTime(),BigInt(isNaN(d)?-1:d/1e3)}function Ap(d,p,_,x,k,z,R){return l?Ee(16,1,d,p,_,x,k,z,R):-52}function Rp(d,p,_,x,k,z){if(l)return Ee(17,1,d,p,_,x,k,z)}var mi={},G2=()=>performance.timeOrigin+performance.now();function Mp(d,p){if(l)return Ee(18,1,d,p);if(mi[d]&&(clearTimeout(mi[d].id),delete mi[d]),!p)return 0;var _=setTimeout(()=>{delete mi[d],Ns(()=>Xp(d,performance.timeOrigin+performance.now()))},p);return mi[d]={id:_,rc:p},0}function K2(d,p,_,x){d>>>=0,p>>>=0,_>>>=0,x>>>=0;var k=new Date().getFullYear(),z=new Date(k,0,1).getTimezoneOffset();k=new Date(k,6,1).getTimezoneOffset();var R=Math.max(z,k);he()[d>>>2>>>0]=60*R,D()[p>>>2>>>0]=+(z!=k),d=(p=U=>{var q=Math.abs(U);return`UTC${0<=U?"-":"+"}${String(Math.floor(q/60)).padStart(2,"0")}${String(q%60).padStart(2,"0")}`})(z),p=p(k),k<z?(On(d,_,17),On(p,x,17)):(On(d,x,17),On(p,_,17))}var Q2=()=>Date.now();function Z2(d,p,_){return 0<=d&&3>=d?(d===0?d=Date.now():d=performance.timeOrigin+performance.now(),H[_>>>0>>>3]=BigInt(Math.round(1e6*d)),0):28}var Bs=[],Bp=(d,p)=>{Bs.length=0;for(var _;_=j()[d++>>>0];){var x=_!=105;p+=(x&=_!=112)&&p%8?4:0,Bs.push(_==112?he()[p>>>2>>>0]:_==106?H[p>>>3]:_==105?D()[p>>>2>>>0]:nt()[p>>>3>>>0]),p+=x?8:4}return Bs};function X2(d,p,_){return d>>>=0,p=Bp(p>>>0,_>>>0),xs[d](...p)}function Y2(d,p,_){return d>>>=0,p=Bp(p>>>0,_>>>0),xs[d](...p)}var J2=()=>{};function ex(d,p){return E(Le(d>>>0,p>>>0))}var tx=()=>{throw kr+=1,"unwind"};function rx(){return 4294901760}var nx=()=>navigator.hardwareConcurrency;function ix(){return br("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function ax(d){d>>>=0;var p=j().length;if(d<=p||4294901760<d)return!1;for(var _=1;4>=_;_*=2){var x=p*(1+.2/_);x=Math.min(x,d+100663296);e:{x=(Math.min(4294901760,65536*Math.ceil(Math.max(d,x)/65536))-T.buffer.byteLength+65535)/65536|0;try{T.grow(x),_e();var k=1;break e}catch{}k=void 0}if(k)return!0}return!1}var za=()=>(br("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),gi={},Pp=d=>{d.forEach(p=>{za()})};function ox(){var d=Error().stack.toString().split(`
`);return d[0]=="Error"&&d.shift(),Pp(d),gi.Mb=za(),gi.dc=d,gi.Mb}function sx(d,p,_){if(d>>>=0,p>>>=0,gi.Mb==d)var x=gi.dc;else(x=Error().stack.toString().split(`
`))[0]=="Error"&&x.shift(),Pp(x);for(var k=3;x[k]&&za()!=d;)++k;for(d=0;d<_&&x[d+k];++d)D()[p+4*d>>>2>>>0]=za();return d}var Ps,Ds={},Dp=()=>{if(!Ps){var d,p={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(d in Ds)Ds[d]===void 0?delete p[d]:p[d]=Ds[d];var _=[];for(d in p)_.push(`${d}=${p[d]}`);Ps=_}return Ps};function Lp(d,p){if(l)return Ee(19,1,d,p);d>>>=0,p>>>=0;var _=0;return Dp().forEach((x,k)=>{var z=p+_;for(k=he()[d+4*k>>>2>>>0]=z,z=0;z<x.length;++z)L()[k++>>>0]=x.charCodeAt(z);L()[k>>>0]=0,_+=x.length+1}),0}function Up(d,p){if(l)return Ee(20,1,d,p);d>>>=0,p>>>=0;var _=Dp();he()[d>>>2>>>0]=_.length;var x=0;return _.forEach(k=>x+=k.length+1),he()[p>>>2>>>0]=x,0}function Wp(d){return l?Ee(21,1,d):52}function Vp(d,p,_,x){return l?Ee(22,1,d,p,_,x):52}function Fp(d,p,_,x){return l?Ee(23,1,d,p,_,x):70}var ux=[null,[],[]];function jp(d,p,_,x){if(l)return Ee(24,1,d,p,_,x);p>>>=0,_>>>=0,x>>>=0;for(var k=0,z=0;z<_;z++){var R=he()[p>>>2>>>0],U=he()[p+4>>>2>>>0];p+=8;for(var q=0;q<U;q++){var ee=j()[R+q>>>0],de=ux[d];ee===0||ee===10?((d===1?b:E)(ap(de)),de.length=0):de.push(ee)}k+=U}return he()[x>>>2>>>0]=k,0}l||function(){for(var d=a.numThreads-1;d--;)tp();ks.unshift(()=>{en++,function(p){l?p():Promise.all(Sr.map(ep)).then(p)}(()=>Hc())})}();for(var qp=Array(256),Oa=0;256>Oa;++Oa)qp[Oa]=String.fromCharCode(Oa);wp=qp,Er=a.BindingError=class extends Error{constructor(d){super(d),this.name="BindingError"}},a.InternalError=class extends Error{constructor(d){super(d),this.name="InternalError"}},lr.push(0,1,void 0,1,null,1,!0,1,!1,1),a.count_emval_handles=()=>lr.length/2-5-Is.length;var ne,lx=[Ss,Zc,rp,op,sp,lp,dp,cp,pp,fp,hp,mp,gp,yp,vp,_p,Ap,Rp,Mp,Lp,Up,Wp,Vp,Fp,jp];(async function(){function d(x,k){return ne=x.exports,ne=function(){var z=ne,R={};for(let[U,q]of Object.entries(z))R[U]=typeof q=="function"?(...ee)=>{Ta.push(U);try{return q(...ee)}finally{J||(Ta.pop(),Yt&&Cr===1&&Ta.length===0&&(Cr=0,kr+=1,Ea(rf),typeof Fibers<"u"&&Fibers.sc()))}}:q;return R}(),ne=function(){var z=ne,R=q=>ee=>q(ee)>>>0,U=q=>()=>q()>>>0;return(z=Object.assign({},z)).Ea=R(z.Ea),z.gb=U(z.gb),z.ib=R(z.ib),z.ub=R(z.ub),z.vb=U(z.vb),z.__cxa_get_exception_ptr=R(z.__cxa_get_exception_ptr),z}(),Xc.push(ne.jb),C=k,Hc(),ne}en++;var p=Gc();if(a.instantiateWasm)return new Promise(x=>{a.instantiateWasm(p,(k,z)=>{d(k,z),x(k.exports)})});if(l)return new Promise(x=>{Rt=k=>{var z=new WebAssembly.Instance(k,Gc());x(d(z,k))}});gt??(gt=a.locateFile?a.locateFile?a.locateFile("ort-wasm-simd-threaded.jsep.wasm",g):g+"ort-wasm-simd-threaded.jsep.wasm":new URL("/assets/ort-wasm-simd-threaded.jsep-CLPRrI3A.wasm",import.meta.url).href);try{var _=await async function(x){var k=gt;if(!W&&typeof WebAssembly.instantiateStreaming=="function"&&!A(k))try{var z=fetch(k,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(z,x)}catch(R){E(`wasm streaming compile failed: ${R}`),E("falling back to ArrayBuffer instantiation")}return async function(R,U){try{var q=await async function(ee){if(!W)try{var de=await y(ee);return new Uint8Array(de)}catch{}if(ee==gt&&W)ee=new Uint8Array(W);else{if(!v)throw"both async and sync fetching of the wasm failed";ee=v(ee)}return ee}(R);return await WebAssembly.instantiate(q,U)}catch(ee){E(`failed to asynchronously prepare wasm: ${ee}`),br(ee)}}(k,x)}(p);return d(_.instance,_.module)}catch(x){return i(x),Promise.reject(x)}})();var Hp=d=>(Hp=ne.Ea)(d),Gp=()=>(Gp=ne.Fa)();a._OrtInit=(d,p)=>(a._OrtInit=ne.Ga)(d,p),a._OrtGetLastError=(d,p)=>(a._OrtGetLastError=ne.Ha)(d,p),a._OrtCreateSessionOptions=(d,p,_,x,k,z,R,U,q,ee)=>(a._OrtCreateSessionOptions=ne.Ia)(d,p,_,x,k,z,R,U,q,ee),a._OrtAppendExecutionProvider=(d,p,_,x,k)=>(a._OrtAppendExecutionProvider=ne.Ja)(d,p,_,x,k),a._OrtAddFreeDimensionOverride=(d,p,_)=>(a._OrtAddFreeDimensionOverride=ne.Ka)(d,p,_),a._OrtAddSessionConfigEntry=(d,p,_)=>(a._OrtAddSessionConfigEntry=ne.La)(d,p,_),a._OrtReleaseSessionOptions=d=>(a._OrtReleaseSessionOptions=ne.Ma)(d),a._OrtCreateSession=(d,p,_)=>(a._OrtCreateSession=ne.Na)(d,p,_),a._OrtReleaseSession=d=>(a._OrtReleaseSession=ne.Oa)(d),a._OrtGetInputOutputCount=(d,p,_)=>(a._OrtGetInputOutputCount=ne.Pa)(d,p,_),a._OrtGetInputOutputMetadata=(d,p,_,x)=>(a._OrtGetInputOutputMetadata=ne.Qa)(d,p,_,x),a._OrtFree=d=>(a._OrtFree=ne.Ra)(d),a._OrtCreateTensor=(d,p,_,x,k,z)=>(a._OrtCreateTensor=ne.Sa)(d,p,_,x,k,z),a._OrtGetTensorData=(d,p,_,x,k)=>(a._OrtGetTensorData=ne.Ta)(d,p,_,x,k),a._OrtReleaseTensor=d=>(a._OrtReleaseTensor=ne.Ua)(d),a._OrtCreateRunOptions=(d,p,_,x)=>(a._OrtCreateRunOptions=ne.Va)(d,p,_,x),a._OrtAddRunConfigEntry=(d,p,_)=>(a._OrtAddRunConfigEntry=ne.Wa)(d,p,_),a._OrtReleaseRunOptions=d=>(a._OrtReleaseRunOptions=ne.Xa)(d),a._OrtCreateBinding=d=>(a._OrtCreateBinding=ne.Ya)(d),a._OrtBindInput=(d,p,_)=>(a._OrtBindInput=ne.Za)(d,p,_),a._OrtBindOutput=(d,p,_,x)=>(a._OrtBindOutput=ne._a)(d,p,_,x),a._OrtClearBoundOutputs=d=>(a._OrtClearBoundOutputs=ne.$a)(d),a._OrtReleaseBinding=d=>(a._OrtReleaseBinding=ne.ab)(d),a._OrtRunWithBinding=(d,p,_,x,k)=>(a._OrtRunWithBinding=ne.bb)(d,p,_,x,k),a._OrtRun=(d,p,_,x,k,z,R,U)=>(a._OrtRun=ne.cb)(d,p,_,x,k,z,R,U),a._OrtEndProfiling=d=>(a._OrtEndProfiling=ne.db)(d),a._JsepOutput=(d,p,_)=>(a._JsepOutput=ne.eb)(d,p,_),a._JsepGetNodeName=d=>(a._JsepGetNodeName=ne.fb)(d);var Na=()=>(Na=ne.gb)(),Jt=a._free=d=>(Jt=a._free=ne.hb)(d),Aa=a._malloc=d=>(Aa=a._malloc=ne.ib)(d),Ls=(d,p,_,x,k,z)=>(Ls=ne.lb)(d,p,_,x,k,z),Kp=()=>(Kp=ne.mb)(),Qp=(d,p,_,x,k)=>(Qp=ne.nb)(d,p,_,x,k),Zp=d=>(Zp=ne.ob)(d),Us=d=>(Us=ne.pb)(d),Xp=(d,p)=>(Xp=ne.qb)(d,p),Yp=()=>(Yp=ne.rb)(),Jp=(d,p)=>(Jp=ne.sb)(d,p),Ra=d=>(Ra=ne.tb)(d),Ws=d=>(Ws=ne.ub)(d),Vs=()=>(Vs=ne.vb)(),ef=a.dynCall_ii=(d,p)=>(ef=a.dynCall_ii=ne.wb)(d,p),tf=d=>(tf=ne.xb)(d),rf=()=>(rf=ne.yb)(),nf=d=>(nf=ne.zb)(d),af=()=>(af=ne.Ab)();return a.stackSave=()=>Vs(),a.stackRestore=d=>Ra(d),a.stackAlloc=d=>Ws(d),a.setValue=function(d,p,_="i8"){switch(_.endsWith("*")&&(_="*"),_){case"i1":case"i8":L()[d>>>0]=p;break;case"i16":re()[d>>>1>>>0]=p;break;case"i32":D()[d>>>2>>>0]=p;break;case"i64":H[d>>>3]=BigInt(p);break;case"float":zn()[d>>>2>>>0]=p;break;case"double":nt()[d>>>3>>>0]=p;break;case"*":he()[d>>>2>>>0]=p;break;default:br(`invalid type for setValue: ${_}`)}},a.getValue=function(d,p="i8"){switch(p.endsWith("*")&&(p="*"),p){case"i1":case"i8":return L()[d>>>0];case"i16":return re()[d>>>1>>>0];case"i32":return D()[d>>>2>>>0];case"i64":return H[d>>>3];case"float":return zn()[d>>>2>>>0];case"double":return nt()[d>>>3>>>0];case"*":return he()[d>>>2>>>0];default:br(`invalid type for getValue: ${p}`)}},a.UTF8ToString=Le,a.stringToUTF8=On,a.lengthBytesUTF8=up,function d(){if(0<en)tn=d;else if(l)n(a),Ie();else{for(;0<ks.length;)ks.shift()(a);0<en?tn=d:(a.calledRun=!0,J||(Ie(),n(a)))}}(),a.PTR_SIZE=4,o}),Iv=$u,vh=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),vh&&$u()}),xu,sd,_h,yt,zv,Ja,wh,$h,bu,xh,ku,Ov,Su,Nv,$c=V(()=>{wc(),xu=typeof location>"u"?void 0:location.origin,sd=import.meta.url>"file:"&&import.meta.url<"file;",_h=()=>{{if(sd){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,xu).href}return import.meta.url}},yt=_h(),zv=()=>{if(yt&&!yt.startsWith("blob:"))return yt.substring(0,yt.lastIndexOf("/")+1)},Ja=(e,t)=>{try{let r=t??yt;return(r?new URL(e,r):new URL(e)).origin===xu}catch{return!1}},wh=(e,t)=>{let r=t??yt;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},$h=(e,t)=>`${t??"./"}${e}`,bu=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},xh=async e=>(await import(e)).default,ku=(ck(),ya(Ev)).default,Ov=async()=>{if(!yt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Ja(yt))return[void 0,ku()];let e=await bu(yt);return[e,ku(e)]},Su=(pk(),ya(Cv)).default,Nv=async(e,t,r)=>{if(!e&&!t&&Su&&yt&&Ja(yt))return[void 0,Su];{let n="ort-wasm-simd-threaded.jsep.mjs",i=e??wh(n,t),a=r&&i&&!Ja(i,t),o=a?await bu(i):i??$h(n,t);return[a?o:void 0,await xh(o)]}}}),Eu,eo,Ei,Tu,bh,kh,Sh,xc,ke,Cn=V(()=>{$c(),eo=!1,Ei=!1,Tu=!1,bh=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},kh=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Sh=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},xc=async e=>{if(eo)return Promise.resolve();if(Ei)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Tu)throw new Error("previous call to 'initializeWebAssembly()' failed.");Ei=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Sh())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!kh())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let n=bh();r>1&&!n&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let i=e.wasmPaths,a=typeof i=="string"?i:void 0,o=i==null?void 0:i.mjs,s=(o==null?void 0:o.href)??o,u=i==null?void 0:i.wasm,l=(u==null?void 0:u.href)??u,c=e.wasmBinary,[f,h]=await Nv(s,a,r>1),y=!1,v=[];if(t>0&&v.push(new Promise(w=>{setTimeout(()=>{y=!0,w()},t)})),v.push(new Promise((w,S)=>{let g={numThreads:r};if(c)g.wasmBinary=c;else if(l||a)g.locateFile=m=>l??a+m;else if(s&&s.indexOf("blob:")!==0)g.locateFile=m=>new URL(m,s).href;else if(f){let m=zv();m&&(g.locateFile=$=>m+$)}h(g).then(m=>{Ei=!1,eo=!0,Eu=m,w(),f&&URL.revokeObjectURL(f)},m=>{Ei=!1,Tu=!0,S(m)})})),await Promise.race(v),y)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},ke=()=>{if(eo&&Eu)return Eu;throw new Error("WebAssembly is not initialized yet.")}}),jt,Xo,we,bc=V(()=>{Cn(),jt=(e,t)=>{let r=ke(),n=r.lengthBytesUTF8(e)+1,i=r._malloc(n);return r.stringToUTF8(e,i,n),t.push(i),i},Xo=(e,t,r,n)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([i,a])=>{let o=t?t+i:i;if(typeof a=="object")Xo(a,o+".",r,n);else if(typeof a=="string"||typeof a=="number")n(o,a.toString());else if(typeof a=="boolean")n(o,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},we=e=>{let t=ke(),r=t.stackSave();try{let n=t.PTR_SIZE,i=t.stackAlloc(2*n);t._OrtGetLastError(i,i+n);let a=Number(t.getValue(i,n===4?"i32":"i64")),o=t.getValue(i+n,"*"),s=o?t.UTF8ToString(o):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${s}`)}finally{t.stackRestore(r)}}}),Av,fk=V(()=>{Cn(),bc(),Av=e=>{let t=ke(),r=0,n=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let a=0;return(e==null?void 0:e.tag)!==void 0&&(a=jt(e.tag,n)),r=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),r===0&&we("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Xo(e.extra,"",new WeakSet,(o,s)=>{let u=jt(o,n),l=jt(s,n);t._OrtAddRunConfigEntry(r,u,l)!==0&&we(`Can't set a run config entry: ${o} - ${s}.`)}),[r,n]}catch(a){throw r!==0&&t._OrtReleaseRunOptions(r),n.forEach(o=>t._free(o)),a}}}),Eh,Th,Ch,Ti,Ih,Rv,hk=V(()=>{Cn(),bc(),Eh=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Th=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Ch=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Ti=(e,t,r,n)=>{let i=jt(t,n),a=jt(r,n);ke()._OrtAddSessionConfigEntry(e,i,a)!==0&&we(`Can't set a session config entry: ${t} - ${r}.`)},Ih=async(e,t,r)=>{for(let n of t){let i=typeof n=="string"?n:n.name,a=[];switch(i){case"webnn":if(i="WEBNN",typeof n!="string"){let c=n==null?void 0:n.deviceType;c&&Ti(e,"deviceType",c,r)}break;case"webgpu":if(i="JS",typeof n!="string"){let c=n;if(c!=null&&c.preferredLayout){if(c.preferredLayout!=="NCHW"&&c.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${c.preferredLayout}`);Ti(e,"preferredLayout",c.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${i}`)}let o=jt(i,r),s=a.length,u=0,l=0;if(s>0){u=ke()._malloc(s*ke().PTR_SIZE),r.push(u),l=ke()._malloc(s*ke().PTR_SIZE),r.push(l);for(let c=0;c<s;c++)ke().setValue(u+c*ke().PTR_SIZE,a[c][0],"*"),ke().setValue(l+c*ke().PTR_SIZE,a[c][1],"*")}await ke()._OrtAppendExecutionProvider(e,o,u,l,s)!==0&&we(`Can't append execution provider: ${i}.`)}},Rv=async e=>{let t=ke(),r=0,n=[],i=e||{};Ch(i);try{let a=Eh(i.graphOptimizationLevel??"all"),o=Th(i.executionMode??"sequential"),s=typeof i.logId=="string"?jt(i.logId,n):0,u=i.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log serverity level is not valid: ${u}`);let l=i.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log verbosity level is not valid: ${l}`);let c=typeof i.optimizedModelFilePath=="string"?jt(i.optimizedModelFilePath,n):0;if(r=t._OrtCreateSessionOptions(a,!!i.enableCpuMemArena,!!i.enableMemPattern,o,!!i.enableProfiling,0,s,u,l,c),r===0&&we("Can't create session options."),i.executionProviders&&await Ih(r,i.executionProviders,n),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);Ti(r,"enableGraphCapture",i.enableGraphCapture.toString(),n)}if(i.freeDimensionOverrides)for(let[f,h]of Object.entries(i.freeDimensionOverrides)){if(typeof f!="string")throw new Error(`free dimension override name must be a string: ${f}`);if(typeof h!="number"||!Number.isInteger(h)||h<0)throw new Error(`free dimension override value must be a non-negative integer: ${h}`);let y=jt(f,n);t._OrtAddFreeDimensionOverride(r,y,h)!==0&&we(`Can't set a free dimension override: ${f} - ${h}.`)}return i.extra!==void 0&&Xo(i.extra,"",new WeakSet,(f,h)=>{Ti(r,f,h,n)}),[r,n]}catch(a){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&we("Can't release session options."),n.forEach(o=>t._free(o)),a}}}),cn,fr,pn,$s,Yo,kc,Sc,ud,ie=V(()=>{cn=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},fr=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},pn=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],n=typeof t=="number"?t:t.reduce((i,a)=>i*a,1);return r>0?Math.ceil(n*r):void 0},$s=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Yo=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},kc=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Sc=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",ud=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Ec,Mv=V(()=>{wc(),Ec=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),n=r?parseInt(r,10):0;if(n<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),a;try{a=new ArrayBuffer(n)}catch(s){if(s instanceof RangeError){let u=Math.ceil(n/65536);a=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw s}let o=0;for(;;){let{done:s,value:u}=await i.read();if(s)break;let l=u.byteLength;new Uint8Array(a,o,l).set(u),o+=l}return new Uint8Array(a,0,n)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),zh,Oh,Nh,Ah,Tc,Rh,pe,xr=V(()=>{ie(),zh=["V","I","W","E","F"],Oh=(e,t)=>{console.log(`[${zh[e]},${new Date().toISOString()}]${t}`)},Tc=(e,t)=>{Nh=e,Ah=t},Rh=(e,t)=>{let r=Yo(e),n=Yo(Nh);r>=n&&Oh(r,typeof t=="function"?t():t)},pe=(...e)=>{Ah&&Rh(...e)}}),Mh,ui,N,Jo,Bv,Pv,Dv,ue=V(()=>{Mh=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},ui=class{static calcShape(e,t,r=!1){let n=e.length,i=t.length;if(n===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),o=new Array(a);if(r){if(n<2||i<2)return;let s=Mh.calcMatMulShape([e[n-2],e[n-1]],[t[i-2],t[i-1]]);if(s===void 0)return;[o[a-2],o[a-1]]=s}for(let s=r?3:1;s<=a;s++){let u=n-s<0?1:e[n-s],l=i-s<0?1:t[i-s];if(u!==l&&u>1&&l>1)return;let c=Math.max(u,l);if(u&&l)o[a-s]=Math.max(u,l);else{if(c>1)return;o[a-s]=0}}return o}static isValidBroadcast(e,t){let r=e.length,n=t.length;if(r>n)return!1;for(let i=1;i<=r;i++)if(e[r-i]!==1&&e[r-i]!==t[n-i])return!1;return!0}},N=class ko{static size(t){return ko.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let n=t.length;if(n===0)return[];let i=new Array(n),a=n-1;for(;a>=0;){if(t[a]%r===0){i[a]=t[a]/r;break}if(r%t[a]!==0)throw new Error("cannot convert shape");i[a]=1,r/=t[a],a--}for(a--;a>=0;a--)i[a]=t[a];return i}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return ko.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return ko.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,n){let i=1;for(let a=r;a<n;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[a])}return i}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let n=new Array(r);n[r-1]=1,n[r-2]=t[r-1];for(let i=r-3;i>=0;--i)n[i]=n[i+1]*t[i+1];return n}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(n=>this.normalizeAxis(n,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(n=>t[n]):t.slice().reverse()}static padShape(t,r){let n=t.length;return t.map((i,a)=>i+r[a]+r[a+n])}static areEqual(t,r){return t.length!==r.length?!1:t.every((n,i)=>n===r[i])}},Jo=class Wi{static adjustPoolAttributes(t,r,n,i,a,o){if(!t&&n.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let s=0;s<r.length-2;s++)s>=n.length?n.push(r[s+2]):n[s]=r[s+2];for(let s=0;s<n.length;s++)if(s<i.length){if(i[s]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let s=0;s<n.length;s++)if(s<a.length){if(a[s]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let s=0;s<n.length*2;s++)if(s<o.length){if(o[s]<0)throw new Error("pad should be greater than or equal to 1")}else o.push(0);for(let s=0;s<n.length;s++){if(n[s]<=0)throw new Error("kernel shapes need to be greater than 0");if(o[s]>=n[s]||o[s+n.length]>=n[s])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,n,i,a,o,s){if(s){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)Wi.adjustPadAndReturnShape(t[u+(o?1:2)],r[u],n[u],i[u],a,u,u+t.length-2,s)}}static computePoolOutputShape(t,r,n,i,a,o,s){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let u=[r[0],r[1]];return Wi.computeShapeHelper(t,r,u,n,i,a,o,s),u}static computeConvOutputShape(t,r,n,i,a,o,s){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],r[0]];return Wi.computeShapeHelper(!1,t,u,n,i,a,o,s),u}static computeShapeHelper(t,r,n,i,a,o,s,u){if(t)for(let l=0;l<r.length-2;l++)n.push(1);else for(let l=0;l<r.length-2;l++)n.push(Wi.adjustPadAndReturnShape(r[l+2],i[l],a[l],o[l],s,l,l+r.length-2,u))}static adjustPadAndReturnShape(t,r,n,i,a,o,s,u){let l=n*(i-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return a[o]=0,a[s]=0,Math.floor((t-l)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(n!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=((t+r-1)/r-1)*r+i-t;return a[o]=Math.floor(u==="SAME_LOWER"?(c+1)/2:c/2),a[s]=c-a[o],Math.floor((t+c-i)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+a[o]+a[s]-l)/r+1)}},Bv=class{static getShapeOfGemmResult(e,t,r,n,i){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let a,o,s;t?(a=e[1],o=e[0]):(a=e[0],o=e[1]);let u=-1;if(n?(s=r[0],u=1):(s=r[1],u=0),r[u]!==o)throw new Error("dimension mismatch");if(a<=0||s<=0||o<=0)throw new Error("invalid shape specified");if(i&&!ui.isValidBroadcast(i,[a,s]))throw new Error("gemm: invalid bias shape for broadcast");return[a,s,o]}},Pv=-34028234663852886e22,Dv=34028234663852886e22}),Cc,Lv=V(()=>{ie(),Cc=(e,t)=>new($s(t))(e)}),Cu,ld,Iu,Bh,zu,Ph,Ou,Nu,Au,Dh,Uv,mk=V(()=>{ie(),xr(),Cu=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),ld=(e,t)=>{if(t==="int32")return e;let r=Cu.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let n=r/8;if(e.byteLength%n!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${n}.`);let i=e.byteLength/n,a=new($s(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let o=new Int32Array(i);for(let s=0;s<i;s++){let u=a[s];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");o[s]=Number(u)}return new Uint8Array(o.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(s=>s>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let o=Int32Array.from(a,Number);return new Uint8Array(o.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Iu=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,n=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let i=BigInt64Array.from(n,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(n.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(n,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(n.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(n,Number);return new Uint8Array(i.buffer)}case"uint8":{if(n.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(n,Number)}case"uint32":{if(n.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(n,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Bh=1,zu=()=>Bh++,Ph=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Ou=(e,t)=>{let r=Cu.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((n,i)=>n*i)*r/8):0},Nu=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:n,dataType:i,shape:a,fallbackDataType:o}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=n,this.dataType=i,this.tensorShape=a,this.fallbackDataType=o}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Ou(this.dataType,this.tensorShape)}destroy(){pe("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=Iu(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return r.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((n,i)=>n===r[i])}setIsDataConverted(e){this.isDataConverted=e}},Au=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,n){let i=this.tensorManager.getMLContext(e),a;if(!i.opSupportLimits().input.dataTypes.includes(t)){if(a=Ph.get(t),!a||!i.opSupportLimits().input.dataTypes.includes(a))throw new Error(`WebNN backend does not support data type: ${t}`);pe("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${a}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,r))return this.wrapper.tensor;if(n){if(this.wrapper.byteLength!==Ou(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,o,!0,!0,a),n&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=ld(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else pe("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,r;if(this.activeUpload){let n=(t=this.wrapper)!=null&&t.isDataConverted?Iu(this.activeUpload,(r=this.wrapper)==null?void 0:r.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(n):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(n);return}else return n.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Dh=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}reserveTensorId(){let e=zu();return this.tensorTrackersById.set(e,new Au(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,n,i){pe("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${n}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,r,n,i)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){pe("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,n){let i=this.getMLContext(e),a=zu(),o=new Nu({sessionId:e,context:i,tensor:t,dataType:r,shape:n});return this.tensorTrackersById.set(a,new Au(this,o)),this.externalTensors.add(o),a}async getCachedTensor(e,t,r,n,i,a,o){let s=this.getMLContext(e);for(let[l,c]of this.freeTensors.entries())if(c.canReuseTensor(s,t,r)){pe("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:""} shape: ${r}`);let f=this.freeTensors.splice(l,1)[0];return f.sessionId=e,f}pe("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:""} shape: ${r}}`);let u=await s.createTensor({dataType:o??t,shape:r,dimensions:r,usage:n,writable:i,readable:a});return new Nu({sessionId:e,context:s,tensor:u,dataType:t,shape:r,fallbackDataType:o})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Uv=(...e)=>new Dh(...e)}),Ci,Lh,Wv,gk=V(()=>{ie(),Cn(),Lv(),mk(),xr(),Ci=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Lh=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length===n.length&&r.every((i,a)=>i===n[a]&&e[i]===t[i])},Wv=class{constructor(e){this.tensorManager=Uv(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,Tc(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){pe("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){pe("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)pe("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(n=>n.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:n}),n}}else if(e===void 0){let r=this.mlContextCache.findIndex(n=>n.options===void 0&&n.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:n}),n}}let t=this.mlContextCache.findIndex(r=>Lh(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let n=this.mlContextCache.findIndex(i=>i.mlContext===t);n!==-1&&this.mlContextCache.splice(n,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){pe("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,n,i){let a=Ci.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,n,i)}async createTemporaryTensor(e,t,r){pe("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let n=Ci.get(t);if(!n)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,n,r,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!ke().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");pe("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Cc(r,t)}}registerMLTensor(e,t,r,n){let i=Ci.get(r);if(!i)throw new Error(`Unsupported ONNX data type: ${r}`);let a=this.tensorManager.registerTensor(e,t,i,n);return pe("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${n}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,r,n,i,a,o=!1){if(!a)throw new Error("External mounted files are not available.");let s=e;e.startsWith("./")&&(s=e.substring(2));let u=a.get(s);if(!u)throw new Error(`File with name ${s} not found in preloaded files.`);if(t+r>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let l=u.slice(t,t+r).buffer,c;switch(i.dataType){case"float32":c=new Float32Array(l);break;case"float16":c=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(l):new Uint16Array(l);break;case"int32":c=new Int32Array(l);break;case"uint32":c=new Uint32Array(l);break;case"int64":if(o){let f=ld(new Uint8Array(l),"int64");c=new Int32Array(f.buffer),i.dataType="int32"}else c=new BigInt64Array(l);break;case"uint64":c=new BigUint64Array(l);break;case"int8":c=new Int8Array(l);break;case"int4":case"uint4":case"uint8":c=new Uint8Array(l);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return pe("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${o?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),n.constant(i,c)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let n=this.mlContextBySessionId.get(e),i=Ci.get(cn(t));return typeof i>"u"?!1:r?!!(n!=null&&n.opSupportLimits().input.dataTypes.includes(i)):!!(n!=null&&n.opSupportLimits().output.dataTypes.includes(i))}flush(){}}}),Ic=V(()=>{}),Ru,to,ro,Uh,Wh,Mu,dd,Vh,Vv,yk=V(()=>{xr(),Ic(),Ru=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),to=[],ro=e=>Math.ceil(Number(e)/16)*16,Uh=e=>{for(let t=0;t<to.length;t++){let r=to[t];if(e<=r)return r}return Math.ceil(e/16)*16},Wh=1,Mu=()=>Wh++,dd=async(e,t,r,n)=>{let i=ro(r),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let o=e.getCommandEncoder();e.endComputePass(),o.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let s=a.getMappedRange();if(n){let u=n();return u.set(new Uint8Array(s,0,r)),u}else return new Uint8Array(s.slice(0,r))}finally{a.destroy()}},Vh=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Ru)to.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,n=t.byteOffset,i=t.byteLength,a=ro(i),o=this.storageCache.get(e);if(!o)throw new Error("gpu data for uploading does not exist");if(Number(o.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${o.originalSize}, data size=${i}`);let s=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=s.getMappedRange();new Uint8Array(u).set(new Uint8Array(r,n,i)),s.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(s,0,o.gpuData.buffer,0,a),this.backend.device.queue.submit([l.finish()]),s.destroy(),pe("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let n=this.storageCache.get(t);if(!n)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==n.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=ro(r.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(r.gpuData.buffer,0,n.gpuData.buffer,0,i)}registerExternalBuffer(e,t,r){let n;if(r){if(n=r[0],e===r[1])return pe("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, buffer is the same, skip.`),n;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else n=Mu();return this.storageCache.set(n,{gpuData:{id:n,type:0,buffer:e},originalSize:t}),pe("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, registered.`),n}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),pe("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Uh(e),n,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let s=(i?this.freeBuffers:this.freeUniformBuffers).get(r);s?s.length>0?n=s.pop():n=this.backend.device.createBuffer({size:r,usage:t}):n=this.backend.device.createBuffer({size:r,usage:t})}else n=this.backend.device.createBuffer({size:r,usage:t});let o={id:Mu(),type:0,buffer:n};return this.storageCache.set(o.id,{gpuData:o,originalSize:Number(e)}),pe("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${o.id}`),o}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return pe("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await dd(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Ru.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(pe("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Vv=(...e)=>new Vh(...e)}),Fh,ve,Be=V(()=>{Fh=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},ve=e=>new Fh(e)}),li,no,je,et,te,Ne,cd,Kn,Qr,Y,Ii,B,Z,Fv,zc,jh,jv,le=V(()=>{ie(),ue(),li=64,no=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},je=(e,t=1)=>{let r=no(e,t);return typeof r=="string"?r:r[0]},et=(e,t=1)=>{let r=no(e,t);return typeof r=="string"?r:r[1]},te=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:N.computeStrides(r)})}),t},Ne=e=>e%4===0?4:e%2===0?2:1,cd=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Kn=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,Qr=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,Y=(e,t,r,n)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?n==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:n==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,Ii=(e,t,r,n,i)=>{let a=typeof r=="number",o=a?r:r.length,s=[...new Array(o).keys()],u=o<2?"u32":o<=4?`vec${o}<u32>`:`array<u32, ${o}>`,l=no(t,i),c=typeof l=="string"?l:l[1],f=typeof l=="string"?l:l[0],h={indices:u,value:c,storage:f,tensor:t},y=A=>typeof A=="string"?A:`${A}u`,v={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},w=a?"uniforms.":"",S=`${w}${e}_shape`,g=`${w}${e}_strides`,m="";for(let A=0;A<o-1;A++)m+=`
    let dim${A} = current / ${Y(g,A,o)};
    let rest${A} = current % ${Y(g,A,o)};
    indices[${A}] = dim${A};
    current = rest${A};
    `;m+=`indices[${o-1}] = current;`;let $=o<2?"":`
  fn o2i_${e}(offset: u32) -> ${h.indices} {
    var indices: ${h.indices};
    var current = offset;
    ${m}
    return indices;
  }`,b=A=>(v.offsetToIndices=!0,o<2?A:`o2i_${e}(${A})`),E=[];if(o>=2)for(let A=o-1;A>=0;A--)E.push(`${Y(g,A,o)} * (indices[${A}])`);let T=o<2?"":`
  fn i2o_${e}(indices: ${h.indices}) -> u32 {
    return ${E.join("+")};
  }`,C=A=>(v.indicesToOffset=!0,o<2?A:`i2o_${e}(${A})`),I=(...A)=>o===0?"0u":`${h.indices}(${A.map(y).join(",")})`,O=(A,L)=>o<2?`${A}`:`${Y(A,L,o)}`,P=(A,L,j)=>o<2?`${A}=${j};`:`${Y(A,L,o)}=${j};`,K={},G=(A,L)=>{v.broadcastedIndicesToOffset=!0;let j=`${L.name}broadcastedIndicesTo${e}Offset`;if(j in K)return`${j}(${A})`;let re=[];for(let De=o-1;De>=0;De--){let D=L.indicesGet("outputIndices",De+L.rank-o);re.push(`${O(g,De)} * (${D} % ${O(S,De)})`)}return K[j]=`fn ${j}(outputIndices: ${L.type.indices}) -> u32 {
             return ${re.length>0?re.join("+"):"0u"};
           }`,`${j}(${A})`},Q=(A,L)=>(()=>{if(h.storage===h.value)return`${e}[${A}]=${L};`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`${e}[${A}]=vec2<u32>(u32(${L}), select(0u, 0xFFFFFFFFu, ${L} < 0));`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`${e}[${A}]=vec2<u32>(u32(${L}), 0u);`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`${e}[${A}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${L}));`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),ce=A=>(()=>{if(h.storage===h.value)return`${e}[${A}]`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`i32(${e}[${A}].x)`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`u32(${e}[${A}].x)`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${A}] & 0xFFu), bool(${e}[${A}] & 0xFF00u), bool(${e}[${A}] & 0xFF0000u), bool(${e}[${A}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),oe=o<2?"":`
  fn get_${e}ByIndices(indices: ${h.indices}) -> ${c} {
    return ${ce(`i2o_${e}(indices)`)};
  }`,H=o<2?"":(()=>{let A=s.map(j=>`d${j}: u32`).join(", "),L=s.map(j=>`d${j}`).join(", ");return`
  fn get_${e}(${A}) -> ${c} {
    return get_${e}ByIndices(${I(L)});
  }`})(),ae=(...A)=>{if(A.length!==o)throw new Error(`indices length must be ${o}`);let L=A.map(y).join(",");return o===0?ce("0u"):o===1?ce(L[0]):(v.get=!0,v.getByIndices=!0,v.indicesToOffset=!0,`get_${e}(${L})`)},M=A=>o<2?ce(A):(v.getByIndices=!0,v.indicesToOffset=!0,`get_${e}ByIndices(${A})`),W=o<2?"":`
  fn set_${e}ByIndices(indices: ${h.indices}, value: ${c}) {
    ${Q(`i2o_${e}(indices)`,"value")}
  }`,J=o<2?"":(()=>{let A=s.map(j=>`d${j}: u32`).join(", "),L=s.map(j=>`d${j}`).join(", ");return`
  fn set_${e}(${A}, value: ${c}) {
    set_${e}ByIndices(${I(L)}, value);
  }`})();return{impl:()=>{let A=[],L=!1;return v.offsetToIndices&&(A.push($),L=!0),v.indicesToOffset&&(A.push(T),L=!0),v.broadcastedIndicesToOffset&&(Object.values(K).forEach(j=>A.push(j)),L=!0),v.set&&(A.push(J),L=!0),v.setByIndices&&(A.push(W),L=!0),v.get&&(A.push(H),L=!0),v.getByIndices&&(A.push(oe),L=!0),!a&&L&&A.unshift(`const ${S} = ${h.indices}(${r.join(",")});`,`const ${g} = ${h.indices}(${N.computeStrides(r).join(",")});`),A.join(`
`)},type:h,offsetToIndices:b,indicesToOffset:C,broadcastedIndicesToOffset:G,indices:I,indicesGet:O,indicesSet:P,set:(...A)=>{if(A.length!==o+1)throw new Error(`indices length must be ${o}`);let L=A[o];if(typeof L!="string")throw new Error("value must be string");let j=A.slice(0,o).map(y).join(",");return o===0?Q("0u",L):o===1?Q(j[0],L):(v.set=!0,v.setByIndices=!0,v.indicesToOffset=!0,`set_${e}(${j}, ${L})`)},setByOffset:Q,setByIndices:(A,L)=>o<2?Q(A,L):(v.setByIndices=!0,v.indicesToOffset=!0,`set_${e}ByIndices(${A}, ${L});`),get:ae,getByOffset:ce,getByIndices:M,usage:n,name:e,strides:g,shape:S,rank:o}},B=(e,t,r,n=1)=>Ii(e,t,r,"input",n),Z=(e,t,r,n=1)=>Ii(e,t,r,"output",n),Fv=(e,t,r)=>Ii(e,t,r,"atomicOutput",1),zc=(e,t,r,n=1)=>Ii(e,t,r,"internal",n),jh=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=li){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],n=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||n>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*n>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,o=i?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*n}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${n})
  fn main(${a}) {
    ${o}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",n=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${n}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:n}of this.uniforms)if(n&&n>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(n/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(n/4)}>`);else{let i=n==null||n===1?r:`vec${n}<${r}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},jv=(e,t)=>new jh(e,t)}),qh,Bu,Hh,Gh,Kh,Qh,xt,qv,Hv,Jr=V(()=>{ie(),ue(),Be(),le(),qh=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Bu=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Hh=(e,t)=>N.sortBasedOnPerm(e,Bu(e.length,t)),Gh=(e,t,r,n)=>{let i=`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let a=0;a<t;++a)i+=`a[${e[a]}]=i[${a}];`;return i+="return a;}"},Kh=(e,t)=>{let r=[],n=[];for(let i=0;i<e.length;++i)e[i]!==1&&r.push(e[i]),e[t[i]]!==1&&n.push(t[i]);return{newShape:r,newPerm:n}},Qh=(e,t)=>{let r=0;for(let n=0;n<e.length;++n)if(t[e[n]]!==1){if(e[n]<r)return!1;r=e[n]}return!0},xt=(e,t)=>{let r=e.dataType,n=e.dims.length,i=Bu(n,t),a=Hh(e.dims,i),o=e.dims,s=a,u=n<2||Qh(i,e.dims),l;if(u)return l=v=>{let w=B("input",r,o,4),S=Z("output",r,s,4);return`
  ${v.registerUniform("output_size","u32").declareVariables(w,S)}
  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let v=N.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(v/64/4)},programUniforms:[{type:12,data:Math.ceil(v/4)}]}},getShaderSource:l};let{newShape:c,newPerm:f}=Kh(e.dims,i),h=N.areEqual(f,[2,3,1]),y=N.areEqual(f,[3,1,2]);if(c.length===2||h||y){o=h?[c[0],c[1]*c[2]]:y?[c[0]*c[1],c[2]]:c,s=[o[1],o[0]];let v=16;return l=w=>{let S=B("a",r,o.length),g=Z("output",r,s.length);return`
  ${w.registerUniform("output_size","u32").declareVariables(S,g)}
  var<workgroup> tile : array<array<${g.type.value}, ${v+1}>, ${v}>;
  ${w.mainStart([v,v,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${v} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${v}u + local_id.x;
    let input_row = workgroup_id_x * ${v}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${S.getByIndices(`${S.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${v}u + local_id.x;
    let output_row = workgroup_id_y * ${v}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${g.setByIndices(`${g.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let w=N.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(s[1]/v),y:Math.ceil(s[0]/v)},programUniforms:[{type:12,data:w},...te(o,s)]}},getShaderSource:l}}return l=v=>{let w=B("a",r,o.length),S=Z("output",r,s.length);return`
  ${v.registerUniform("output_size","u32").declareVariables(w,S)}

  ${Gh(i,n,w,S)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",w.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let v=N.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:[{type:12,data:v},...te(o,s)]}},getShaderSource:l}},qv=(e,t)=>{qh(e.inputs,t.perm),e.compute(xt(e.inputs[0],t.perm))},Hv=e=>ve({perm:e.perm})}),Zh,Xh,Yh,Jh,em,tm,rm,nm,im,am,Bt,Gv,Kv,Qv,Zv,Xv,Yv,Jv,e_,t_,r_,vk=V(()=>{ie(),ue(),le(),Oc(),Jr(),Zh={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Xh={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Yh={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Jh={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},em=(e,t)=>{let r=[];for(let n=t-e;n<t;++n)r.push(n);return r},tm=(e,t)=>{let r=[],n=e.length;for(let a=0;a<n;a++)t.indexOf(a)===-1&&r.push(e[a]);let i=t.map(a=>e[a]);return[r,i]},rm=(e,t)=>{let r=e.length+t.length,n=[],i=0;for(let a=0;a<r;a++)t.indexOf(a)===-1?n.push(e[i++]):n.push(1);return n},nm=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},im=(e,t)=>{let r=[];if(!nm(e,t)){for(let n=0;n<t;++n)e.indexOf(n)===-1&&r.push(n);e.forEach(n=>r.push(n))}return r},am=(e,t,r,n,i,a,o)=>{let s=r[0].dims,u=N.size(a),l=N.size(o),c=B("_A",r[0].dataType,s),f=Z("output",i,a),h=64;u===1&&(h=256);let y=`
          var<workgroup> aBestValues : array<f32, ${h}>;
       `,v=w=>`
        ${w.registerUniform("reduceSize","u32").declareVariables(c,f)}
        ${y}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${w.mainStart(h)}

          let outputIndex = global_idx / ${h};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Yh[n]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${h}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${Zh[n]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${h}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Xh[n]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${f.setByOffset("outputIndex",`${n==="mean"?`${f.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${f.type.storage}(${Jh[n]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${h}`,inputDependencies:["type"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:u},programUniforms:[{type:12,data:l}]})}},Bt=(e,t,r,n)=>{let i=e.inputs.length===1?r:pd(e.inputs,r),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((y,v)=>v));let o=N.normalizeAxes(a,e.inputs[0].dims.length),s=o,u=e.inputs[0],l=im(s,e.inputs[0].dims.length);l.length>0&&(u=e.compute(xt(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],s=em(s.length,u.dims.length));let[c,f]=tm(u.dims,s),h=c;i.keepDims&&(h=rm(c,o)),e.compute(am(t,i.cacheKey,[u],n,e.inputs[0].dataType,h,f),{inputs:[u]})},Gv=(e,t)=>{Bt(e,"ReduceMeanShared",t,"mean")},Kv=(e,t)=>{Bt(e,"ReduceL1Shared",t,"l1")},Qv=(e,t)=>{Bt(e,"ReduceL2Shared",t,"l2")},Zv=(e,t)=>{Bt(e,"ReduceLogSumExpShared",t,"logSumExp")},Xv=(e,t)=>{Bt(e,"ReduceMaxShared",t,"max")},Yv=(e,t)=>{Bt(e,"ReduceMinShared",t,"min")},Jv=(e,t)=>{Bt(e,"ReduceProdShared",t,"prod")},e_=(e,t)=>{Bt(e,"ReduceSumShared",t,"sum")},t_=(e,t)=>{Bt(e,"ReduceSumSquareShared",t,"sumSquare")},r_=(e,t)=>{Bt(e,"ReduceLogSumShared",t,"logSum")}}),Pt,om,es,pd,Dt,sm,um,lm,dm,cm,pm,fm,hm,mm,gm,Lt,n_,i_,a_,o_,s_,u_,l_,d_,c_,p_,Oc=V(()=>{ie(),ue(),Be(),le(),vk(),Pt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},om=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],es=(e,t,r,n,i,a,o=!1,s=!1)=>{let u=[],l=r[0].dims,c=l.length,f=N.normalizeAxes(i,c),h=!s&&f.length===0;l.forEach((w,S)=>{h||f.indexOf(S)>=0?o&&u.push(1):u.push(w)});let y=u.length,v=N.size(u);return{name:e,shaderCache:t,getShaderSource:w=>{let S=[],g=B("_A",r[0].dataType,c),m=Z("output",a,y),$=n(g,m,f),b=$[2];for(let E=0,T=0;E<c;E++)h||f.indexOf(E)>=0?(o&&T++,b=`for(var j${E}: u32 = 0; j${E} < ${l[E]}; j${E}++) {
                  ${$[2].includes("last_index")?`let last_index = j${E};`:""}
                  ${g.indicesSet("input_indices",E,`j${E}`)}
                  ${b}
                }`):(S.push(`${g.indicesSet("input_indices",E,m.indicesGet("output_indices",T))};`),T++);return`

        ${w.registerUniform("output_size","u32").declareVariables(g,m)}

        ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${g.type.indices};
          let output_indices = ${m.offsetToIndices("global_idx")};

          ${S.join(`
`)}
          ${$[0]}       // init ops for reduce max/min
          ${$[1]}
          ${b}
          ${$[3]}
          ${$.length===4?m.setByOffset("global_idx","value"):$.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:a}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:[{type:12,data:v},...te(l,u)]})}},pd=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),ve({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Dt=(e,t,r,n)=>{let i=e.inputs,a=i.length===1?r:pd(i,r);e.compute(es(t,{hint:a.cacheKey,inputDependencies:["rank"]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?om:n,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},sm=(e,t)=>{Pt(e.inputs),Dt(e,"ReduceLogSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},um=(e,t)=>{Pt(e.inputs),Dt(e,"ReduceL1",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},lm=(e,t)=>{Pt(e.inputs),Dt(e,"ReduceL2",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},dm=(e,t)=>{Pt(e.inputs),Dt(e,"ReduceLogSumExp",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},cm=(e,t)=>{Pt(e.inputs),Dt(e,"ReduceMax",t,(r,n,i)=>{let a=[];for(let o=0;o<r.rank;o++)(i.indexOf(o)>=0||i.length===0)&&a.push(r.indicesSet("input_indices",o,0));return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},pm=(e,t)=>{Pt(e.inputs),Dt(e,"ReduceMean",t,(r,n,i)=>{let a=1;for(let o=0;o<r.rank;o++)(i.indexOf(o)>=0||i.length===0)&&(a*=e.inputs[0].dims[o]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${n.type.value}(sum / ${a});`]})},fm=(e,t)=>{Pt(e.inputs),Dt(e,"ReduceMin",t,(r,n,i)=>{let a=[];for(let o=0;o<r.rank;o++)(i.indexOf(o)>=0||i.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},hm=(e,t)=>{Pt(e.inputs),Dt(e,"ReduceProd",t,(r,n)=>[`var value = ${n.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},mm=(e,t)=>{Pt(e.inputs),Dt(e,"ReduceSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},gm=(e,t)=>{Pt(e.inputs),Dt(e,"ReduceSumSquare",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Lt=(e,t,r)=>{if(t.length===0)return r;let n=1,i=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?n*=e[a]:i*=e[a];return i<32&&n>1024},n_=(e,t)=>{Lt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?pm(e,t):Gv(e,t)},i_=(e,t)=>{Lt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?um(e,t):Kv(e,t)},a_=(e,t)=>{Lt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?lm(e,t):Qv(e,t)},o_=(e,t)=>{Lt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?dm(e,t):Zv(e,t)},s_=(e,t)=>{Lt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?cm(e,t):Xv(e,t)},u_=(e,t)=>{Lt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?fm(e,t):Yv(e,t)},l_=(e,t)=>{Lt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?hm(e,t):Jv(e,t)},d_=(e,t)=>{Lt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?mm(e,t):e_(e,t)},c_=(e,t)=>{Lt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?gm(e,t):t_(e,t)},p_=(e,t)=>{Lt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?sm(e,t):r_(e,t)}}),Pu,f_,h_,fd,_k=V(()=>{ie(),Be(),Oc(),Pu=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},f_=(e,t)=>{Pu(e.inputs);let r=(n,i,a)=>{let o=[];for(let s=0;s<n.rank;s++)(a.indexOf(s)>=0||a.length===0)&&o.push(`input_indices[${s}] = 0;`);return[`${o.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(es("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},h_=(e,t)=>{Pu(e.inputs);let r=(n,i,a)=>{let o=[];for(let s=0;s<n.rank;s++)(a.indexOf(s)>=0||a.length===0)&&o.push(`input_indices[${s}] = 0;`);return[`${o.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(es("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},fd=e=>ve(e)}),ym,io,vm,_m,wm,va,$m,m_,Nc=V(()=>{ie(),ue(),Ic(),le(),ym=(e,t)=>{let r=e[0],n=e[1],i=e[2],a=e[3],o=e[4],s=e[5];if(o&&s)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=r.dims[0],l=r.dims[1],c=r.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(n.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(n.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==n.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let f=i.dims[0]/3,h=f,y=h;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let $ of t.qkvHiddenSizes)if($%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");f=t.qkvHiddenSizes[0],h=t.qkvHiddenSizes[1],y=t.qkvHiddenSizes[2]}let v=l;if(f!==h)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==f+h+y)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let w=0;if(o){if(h!==y)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(o.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(o.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(o.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(o.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(o.dims[4]!==h/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(w=o.dims[3])}let S=v+w,g=-1,m=0;if(a)throw new Error("Mask not supported");if(o)throw new Error("past is not supported");if(s){if(s.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(s.dims[0]!==u||s.dims[1]!==t.numHeads||s.dims[2]!==l||s.dims[3]!==S)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:l,pastSequenceLength:w,kvSequenceLength:v,totalSequenceLength:S,maxSequenceLength:g,inputHiddenSize:c,hiddenSize:f,vHiddenSize:y,headSize:Math.floor(f/t.numHeads),vHeadSize:Math.floor(y/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:m,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},io=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e==null?void 0:e.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,vm=(e,t,r,n,i,a,o,s)=>{let u=Ne(o?1:a),l=64,c=a/u;c<l&&(l=32);let f=Math.ceil(a/u/l),h=[{type:12,data:t},{type:12,data:r},{type:12,data:n},{type:12,data:i},{type:12,data:c},{type:12,data:f}],y=je(e.dataType,u),v=et(1,u),w=["type"];o&&w.push("type"),s&&w.push("type");let S=g=>{let m=Z("x",e.dataType,e.dims,u),$=[m],b=o?B("seq_lens",o.dataType,o.dims):void 0;b&&$.push(b);let E=s?B("total_sequence_length_input",s.dataType,s.dims):void 0;E&&$.push(E);let T=et(e.dataType),C=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${g.registerUniforms(C).declareVariables(...$)}
  ${g.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${io(b,E,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${l}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${o?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${v}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${v}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(u){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${l}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${v}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${v}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(u){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${l}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${m.type.value}(${T}(1.0) / ${T}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${v}(x[offset + i]);
        x[offset + i] = ${m.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${o?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${m.type.value}(${T}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${l};${y};${u}`,inputDependencies:w},getShaderSource:S,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*r},programUniforms:h})}},_m=(e,t,r,n,i,a,o,s,u)=>{let l=o+a.kvSequenceLength,c=[a.batchSize,a.numHeads,a.sequenceLength,l],f=e>1&&n,h=a.kvNumHeads?a.kvNumHeads:a.numHeads,y=f?[a.batchSize,h,l,a.headSize]:void 0,v=a.nReps?a.nReps:1,w=a.scale===0?1/Math.sqrt(a.headSize):a.scale,S=Ne(a.headSize),g=a.headSize/S,m=12,$={x:Math.ceil(l/m),y:Math.ceil(a.sequenceLength/m),z:a.batchSize*a.numHeads},b=[{type:12,data:a.sequenceLength},{type:12,data:g},{type:12,data:l},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:w},{type:12,data:o},{type:12,data:a.kvSequenceLength},{type:12,data:v}],E=f&&n&&N.size(n.dims)>0,T=["type","type"];E&&T.push("type"),i&&T.push("type"),s&&T.push("type"),u&&T.push("type");let C=[{dims:c,dataType:t.dataType,gpuDataType:0}];f&&C.push({dims:y,dataType:t.dataType,gpuDataType:0});let I=O=>{let P=B("q",t.dataType,t.dims,S),K=B("key",r.dataType,r.dims,S),G=[P,K];if(E){let W=B("past_key",n.dataType,n.dims,S);G.push(W)}i&&G.push(B("attention_bias",i.dataType,i.dims));let Q=s?B("seq_lens",s.dataType,s.dims):void 0;Q&&G.push(Q);let ce=u?B("total_sequence_length_input",u.dataType,u.dims):void 0;ce&&G.push(ce);let oe=Z("output",t.dataType,c),H=[oe];f&&H.push(Z("present_key",t.dataType,y,S));let ae=et(1,S),M=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${m}u;

  var<workgroup> tileQ: array<${P.type.storage}, ${m*m}>;
  var<workgroup> tileK: array<${P.type.storage}, ${m*m}>;
  ${O.registerUniforms(M).declareVariables(...G,...H)}
  ${O.mainStart([m,m,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${v===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${v===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${io(Q,ce,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${E&&f?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${f?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${ae}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${E&&f?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${f?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${ae}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(S){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${S}`)}})()};
        output[outputIdx] = ${oe.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${S};${i!==void 0};${n!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:C,dispatchGroup:$,programUniforms:b}),getShaderSource:I}},wm=(e,t,r,n,i,a,o=void 0,s=void 0)=>{let u=a+i.kvSequenceLength,l=i.nReps?i.nReps:1,c=i.vHiddenSize*l,f=e>1&&n,h=i.kvNumHeads?i.kvNumHeads:i.numHeads,y=f?[i.batchSize,h,u,i.headSize]:void 0,v=[i.batchSize,i.sequenceLength,c],w=12,S={x:Math.ceil(i.vHeadSize/w),y:Math.ceil(i.sequenceLength/w),z:i.batchSize*i.numHeads},g=[{type:12,data:i.sequenceLength},{type:12,data:u},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:c},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:l}],m=f&&n&&N.size(n.dims)>0,$=["type","type"];m&&$.push("type"),o&&$.push("type"),s&&$.push("type");let b=[{dims:v,dataType:t.dataType,gpuDataType:0}];f&&b.push({dims:y,dataType:t.dataType,gpuDataType:0});let E=T=>{let C=B("probs",t.dataType,t.dims),I=B("v",r.dataType,r.dims),O=[C,I];m&&O.push(B("past_value",n.dataType,n.dims));let P=o?B("seq_lens",o.dataType,o.dims):void 0;o&&O.push(P);let K=s?B("total_sequence_length_input",s.dataType,s.dims):void 0;s&&O.push(K);let G=[Z("output",t.dataType,v)];f&&G.push(Z("present_value",t.dataType,y));let Q=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;
  var<workgroup> tileQ: array<${C.type.value}, ${w*w}>;
  var<workgroup> tileV: array<${C.type.value}, ${w*w}>;
  ${T.registerUniforms(Q).declareVariables(...O,...G)}
  ${T.mainStart([w,w,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${l===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${io(P,K,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${m&&f?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${f?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${C.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${m&&f?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${f?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${n!==void 0};${e}`,inputDependencies:$},getRunData:()=>({outputs:b,dispatchGroup:S,programUniforms:g}),getShaderSource:E}},va=(e,t,r,n,i,a,o,s,u,l,c=void 0,f=void 0)=>{let h=Math.min(e.outputCount,1+(o?1:0)+(s?1:0)),y=h>1?l.pastSequenceLength:0,v=y+l.kvSequenceLength,w=u&&N.size(u.dims)>0?u:void 0,S=[t,r];h>1&&o&&N.size(o.dims)>0&&S.push(o),w&&S.push(w),c&&S.push(c),f&&S.push(f);let g=e.compute(_m(h,t,r,o,w,l,y,c,f),{inputs:S,outputs:h>1?[-1,1]:[-1]})[0];e.compute(vm(g,l.batchSize,l.numHeads,y,l.sequenceLength,v,c,f),{inputs:c&&f?[g,c,f]:[g],outputs:[]});let m=[g,n];h>1&&s&&N.size(s.dims)>0&&m.push(s),c&&m.push(c),f&&m.push(f),e.compute(wm(h,g,n,s,l,y,c,f),{inputs:m,outputs:h>1?[0,2]:[0]})},$m=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],n=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,o=12,s={x:Math.ceil(t.headSize/o),y:Math.ceil(t.sequenceLength/o),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],l=[{type:12,data:n},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=f=>{let h=Z("output_q",u[0].dataType,r),y=Z("output_k",u[0].dataType,r),v=Z("output_v",u[0].dataType,r),w=B("input",u[0].dataType,u[0].dims),S=B("weight",u[1].dataType,u[1].dims),g=B("bias",u[2].dataType,u[2].dims),m=w.type.storage,$=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${o}u;
  var<workgroup> tileInput: array<${m}, ${o*o}>;
  var<workgroup> tileWeightQ: array<${m}, ${o*o}>;
  var<workgroup> tileWeightK: array<${m}, ${o*o}>;
  var<workgroup> tileWeightV: array<${m}, ${o*o}>;
  ${f.registerUniforms($).declareVariables(w,S,g,h,y,v)}
  ${f.mainStart([o,o,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${m}(0);
    var valueK = ${m}(0);
    var valueV = ${m}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:s,programUniforms:l}),getShaderSource:c},{inputs:u,outputs:[-1,-1,-1]})},m_=(e,t)=>{let r=ym(e.inputs,t),[n,i,a]=$m(e,r);return va(e,n,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),xm,bm,km,g_,wk=V(()=>{Zt(),ie(),ue(),Be(),le(),xm=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(n,i,a)=>{let o=i.length;if(o!==n.length)throw new Error(`${a}: num dimensions != ${o}`);i.forEach((s,u)=>{if(s!==n[u])throw new Error(`${a}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let n=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,n,"Invalid input scale"),r(e[2].dims,n,"Invalid input B"),r(e[3].dims,n,"Invalid input mean"),r(e[4].dims,n,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},bm=(e,t)=>{let{epsilon:r,spatial:n,format:i}=t,a=e[0].dims,o=n?Ne(a[a.length-1]):1,s=i==="NHWC"&&a.length>1?o:1,u=N.size(a)/o,l=n,c=l?a.length:a,f=B("x",e[0].dataType,e[0].dims,o),h=B("scale",e[1].dataType,e[1].dims,s),y=B("bias",e[2].dataType,e[2].dims,s),v=B("inputMean",e[3].dataType,e[3].dims,s),w=B("inputVar",e[4].dataType,e[4].dims,s),S=Z("y",e[0].dataType,c,o),g=()=>{let $="";if(n)$=`let cOffset = ${a.length===1?"0u":i==="NHWC"?`outputIndices[${a.length-1}] / ${o}`:"outputIndices[1]"};`;else if(i==="NCHW")$=`
            ${S.indicesSet("outputIndices","0","0")}
            let cOffset = ${S.indicesToOffset("outputIndices")};`;else{$=`var cIndices = ${h.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let b=1;b<h.rank;b++)$+=`cIndices[${b}] = outputIndices[${b}];`;$+=`let cOffset = ${h.indicesToOffset("cIndices")};`}return $},m=$=>`
  const epsilon = ${r};
  ${$.registerUniform("outputSize","u32").declareVariables(f,h,y,v,w,S)}
  ${$.mainStart()}
  ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${S.offsetToIndices(`global_idx * ${o}`)};
    ${g()}
    let scale = ${h.getByOffset("cOffset")};
    let bias = ${y.getByOffset("cOffset")};
    let inputMean = ${v.getByOffset("cOffset")};
    let inputVar = ${w.getByOffset("cOffset")};
    let x = ${f.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${S.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${n}_${o}`,inputDependencies:l?["rank","type","type","type","type"]:void 0},getShaderSource:m,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l?[{type:12,data:u},...te(a)]:[{type:12,data:u}]})}},km=e=>ve(e),g_=(e,t)=>{let{inputs:r,outputCount:n}=e,i=km({...t,outputCount:n});if(xe.webgpu.validateInputContent&&xm(r,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(bm(r,i))}}),Sm,Em,y_,$k=V(()=>{ue(),le(),Sm=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Em=e=>{let t=e[0].dims,r=e[0].dims[2],n=N.size(t)/4,i=e[0].dataType,a=B("input",i,t,4),o=B("bias",i,[r],4),s=B("residual",i,t,4),u=Z("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:l=>`
  const channels = ${r}u / 4;
  ${l.declareVariables(a,o,s,u)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let value = ${a.getByOffset("global_idx")}
      + ${o.getByOffset("global_idx % channels")} + ${s.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},y_=e=>{Sm(e.inputs),e.compute(Em(e.inputs))}}),Tm,ge,v_,__,w_,$_,x_,b_,k_,S_,E_,Cm,T_,C_,I_,z_,Vi,O_,So,N_,A_,R_,M_,B_,P_,D_,L_,U_,W_,V_,F_,j_,q_,H_,G_,Du,K_,hd,md,Q_,Z_,X_,Im,zm,Y_,Ac=V(()=>{ie(),ue(),Be(),le(),Tm=(e,t,r,n,i,a,o)=>{let s=Math.ceil(t/4),u="";typeof i=="string"?u=`${i}(a)`:u=i("a");let l=B("inputData",r,[s],4),c=Z("outputData",n,[s],4),f=[{name:"vec_size",type:"u32"}];return o&&f.push(...o),`
      ${e.registerUniforms(f).declareVariables(l,c)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${l.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",u)}
  }`},ge=(e,t,r,n,i,a=e.dataType,o,s)=>{let u=[{type:12,data:Math.ceil(N.size(e.dims)/4)}];return o&&u.push(...o),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:l=>Tm(l,N.size(e.dims),e.dataType,a,r,n,s),getRunData:l=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(N.size(l[0].dims)/64/4)},programUniforms:u})}},v_=e=>{e.compute(ge(e.inputs[0],"Abs","abs"))},__=e=>{e.compute(ge(e.inputs[0],"Acos","acos"))},w_=e=>{e.compute(ge(e.inputs[0],"Acosh","acosh"))},$_=e=>{e.compute(ge(e.inputs[0],"Asin","asin"))},x_=e=>{e.compute(ge(e.inputs[0],"Asinh","asinh"))},b_=e=>{e.compute(ge(e.inputs[0],"Atan","atan"))},k_=e=>{e.compute(ge(e.inputs[0],"Atanh","atanh"))},S_=e=>ve(e),E_=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ge(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Cm=e=>{let t,r,n=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=n?e[1].getFloat32Array()[0]:-34028234663852886e22,r=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=n?e[1].getUint16Array()[0]:64511,r=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return ve({min:t,max:r})},T_=(e,t)=>{let r=t||Cm(e.inputs),n=et(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${n}>(uniforms.min), vec4<${n}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:n},{name:"max",type:n}]),{inputs:[0]})},C_=e=>{e.compute(ge(e.inputs[0],"Ceil","ceil"))},I_=e=>{e.compute(ge(e.inputs[0],"Cos","cos"))},z_=e=>{e.compute(ge(e.inputs[0],"Cosh","cosh"))},Vi=e=>ve(e),O_=(e,t)=>{let r=et(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"Elu",n=>`elu_vf32(${n})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},So=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,N_=e=>{let t=et(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,So(t)))},A_=e=>{e.compute(ge(e.inputs[0],"Exp","exp"))},R_=e=>{e.compute(ge(e.inputs[0],"Floor","floor"))},M_=e=>{let t=et(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,So(t)))},B_=(e,t)=>{let r=et(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"LeakyRelu",n=>`select(leaky_relu_alpha_ * ${n}, ${n}, ${n} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},P_=e=>{e.compute(ge(e.inputs[0],"Not",t=>`!${t}`))},D_=e=>{e.compute(ge(e.inputs[0],"Neg",t=>`-${t}`))},L_=e=>{e.compute(ge(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},U_=e=>{let t=et(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},W_=e=>{e.compute(ge(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},V_=e=>ve(e),F_=(e,t)=>{let r=et(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"HardSigmoid",n=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${n} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},j_=e=>{e.compute(ge(e.inputs[0],"Sin","sin"))},q_=e=>{e.compute(ge(e.inputs[0],"Sinh","sinh"))},H_=e=>{e.compute(ge(e.inputs[0],"Sqrt","sqrt"))},G_=e=>{e.compute(ge(e.inputs[0],"Tan","tan"))},Du=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,K_=e=>{e.compute(ge(e.inputs[0],"Tanh",Du))},hd=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Du("v")};
}
`,md=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Q_=e=>{let t=et(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"FastGelu",md,hd(t),void 0,e.inputs[0].dataType))},Z_=(e,t)=>{let r=et(e.inputs[0].dataType);return e.compute(ge(e.inputs[0],"ThresholdedRelu",n=>`select(vec4<${r}>(0.0), ${n}, ${n} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},X_=e=>{e.compute(ge(e.inputs[0],"Log","log"))},Im=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,zm=e=>`quick_gelu_impl(${e})`,Y_=(e,t)=>{let r=et(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"QuickGelu",zm,Im(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Om,Nm,J_,xk=V(()=>{ue(),le(),Ac(),Om=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Nm=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=B("input",e[0].dataType,e[0].dims,4),n=B("bias",e[0].dataType,[e[0].dims[2]],4),i=Z("output",e[0].dataType,t,4),a=N.size(t)/4,o=je(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:s=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${s.declareVariables(r,n,i)}

  ${So(o)}

  ${s.mainStart()}
    ${s.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},J_=e=>{Om(e.inputs),e.compute(Nm(e.inputs))}}),Am,Rm,Ut,ew,tw,rw,nw,iw,aw,ow,sw,uw,lw,bk=V(()=>{ie(),ue(),le(),Am=(e,t,r,n,i,a,o,s,u,l,c,f)=>{let h,y;typeof s=="string"?h=y=(m,$)=>`${s}((${m}),(${$}))`:typeof s=="function"?h=y=s:(h=s.scalar,y=s.vector);let v=Z("outputData",c,n.length,4),w=B("aData",u,t.length,4),S=B("bData",l,r.length,4),g;if(i)if(a){let m=N.size(t)===1,$=N.size(r)===1,b=t.length>0&&t[t.length-1]%4===0,E=r.length>0&&r[r.length-1]%4===0;m||$?g=v.setByOffset("global_idx",y(m?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"),$?`${S.type.value}(${S.getByOffset("0")}.x)`:S.getByOffset("global_idx"))):g=`
            let outputIndices = ${v.offsetToIndices("global_idx * 4u")};
            let offsetA = ${w.broadcastedIndicesToOffset("outputIndices",v)};
            let offsetB = ${S.broadcastedIndicesToOffset("outputIndices",v)};
            ${v.setByOffset("global_idx",y(o||b?w.getByOffset("offsetA / 4u"):`${w.type.value}(${w.getByOffset("offsetA / 4u")}[offsetA % 4u])`,o||E?S.getByOffset("offsetB / 4u"):`${S.type.value}(${S.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else g=v.setByOffset("global_idx",y(w.getByOffset("global_idx"),S.getByOffset("global_idx")));else{if(!a)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let m=($,b,E="")=>{let T=`aData[indexA${b}][componentA${b}]`,C=`bData[indexB${b}][componentB${b}]`;return`
            let outputIndices${b} = ${v.offsetToIndices(`global_idx * 4u + ${b}u`)};
            let offsetA${b} = ${w.broadcastedIndicesToOffset(`outputIndices${b}`,v)};
            let offsetB${b} = ${S.broadcastedIndicesToOffset(`outputIndices${b}`,v)};
            let indexA${b} = offsetA${b} / 4u;
            let indexB${b} = offsetB${b} / 4u;
            let componentA${b} = offsetA${b} % 4u;
            let componentB${b} = offsetB${b} % 4u;
            ${$}[${b}] = ${E}(${h(T,C)});
          `};c===9?g=`
            var data = vec4<u32>(0);
            ${m("data",0,"u32")}
            ${m("data",1,"u32")}
            ${m("data",2,"u32")}
            ${m("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:g=`
            ${m("outputData[global_idx]",0)}
            ${m("outputData[global_idx]",1)}
            ${m("outputData[global_idx]",2)}
            ${m("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(w,S,v)}

        ${f??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${g}
      }`},Rm=(e,t,r,n,i,a,o=r.dataType)=>{let s=r.dims.map(w=>Number(w)??1),u=n.dims.map(w=>Number(w)??1),l=!N.areEqual(s,u),c=s,f=N.size(s),h=!1,y=!1,v=[l];if(l){let w=ui.calcShape(s,u,!1);if(!w)throw new Error("Can't perform binary op on the given tensors");c=w.slice(),f=N.size(c);let S=N.size(s)===1,g=N.size(u)===1,m=s.length>0&&s[s.length-1]%4===0,$=u.length>0&&u[u.length-1]%4===0;v.push(S),v.push(g),v.push(m),v.push($);let b=1;for(let E=1;E<c.length;E++){let T=s[s.length-E],C=u[u.length-E];if(T===C)b*=T;else break}b%4===0?(y=!0,h=!0):(S||g||m||$)&&(h=!0)}else h=!0;return v.push(h),{name:e,shaderCache:{hint:t+v.map(w=>w.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:w=>Am(w,s,u,c,h,l,y,i,r.dataType,n.dataType,o,a),getRunData:()=>({outputs:[{dims:c,dataType:o}],dispatchGroup:{x:Math.ceil(f/64/4)},programUniforms:[{type:12,data:Math.ceil(N.size(c)/4)},...te(s,u,c)]})}},Ut=(e,t,r,n,i,a)=>{e.compute(Rm(t,i??"",e.inputs[0],e.inputs[1],r,n,a))},ew=e=>{Ut(e,"Add",(t,r)=>`${t}+${r}`)},tw=e=>{Ut(e,"Div",(t,r)=>`${t}/${r}`)},rw=e=>{Ut(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},nw=e=>{Ut(e,"Mul",(t,r)=>`${t}*${r}`)},iw=e=>{let t=B("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Ut(e,"Pow",{scalar:(r,n)=>`pow_custom(${r},${n})`,vector:(r,n)=>`pow_vector_custom(${r},${n})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},aw=e=>{Ut(e,"Sub",(t,r)=>`${t}-${r}`)},ow=e=>{Ut(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},sw=e=>{Ut(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},uw=e=>{Ut(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},lw=e=>{Ut(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Mm,Bm,Pm,Dm,dw,cw,kk=V(()=>{ie(),ue(),Be(),le(),Mm=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,n=e[r],i=n.dataType,a=n.dims.length;e.forEach((o,s)=>{if(s!==r){if(o.dataType!==i)throw new Error("input tensors should be one type");if(o.dims.length!==a)throw new Error("input tensors should have the same shape");o.dims.forEach((u,l)=>{if(l!==t&&u!==n.dims[l])throw new Error("non concat dimensions must match")})}})},Bm=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Pm=(e,t)=>{let r=e.length,n=[];for(let i=0;i<r;++i){let a=t.setByOffset("global_idx",e[i].getByIndices("indices"));r===1?n.push(a):i===0?n.push(`if (inputIndex == ${i}u) { ${a} }`):i===r-1?n.push(`else { ${a} }`):n.push(`else if (inputIndex == ${i}) { ${a} }`)}return n.join(`
`)},Dm=(e,t,r,n)=>{let i=N.size(r),a=new Array(e.length),o=new Array(e.length),s=0,u=[],l=[],c=[{type:12,data:i}];for(let w=0;w<e.length;++w)s+=e[w].dims[t],a[w]=s,l.push(e[w].dims.length),o[w]=B(`input${w}`,n,l[w]),u.push("rank"),c.push({type:12,data:a[w]});for(let w=0;w<e.length;++w)c.push(...te(e[w].dims));c.push(...te(r));let f=Z("output",n,r.length),h=f.indicesGet("indices",t),y=Array.from(Array(a.length).keys()).map(w=>`uniforms.sizeInConcatAxis${w}`).join(","),v=w=>`

  ${(()=>{w.registerUniform("outputSize","u32");for(let S=0;S<e.length;S++)w.registerUniform(`sizeInConcatAxis${S}`,"u32");return w.declareVariables(...o,f)})()}

  ${Bm(a.length,y)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${f.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${h});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${y});
      ${h} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Pm(o,f)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:n}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:c}),getShaderSource:v}},dw=(e,t)=>{let r=e.inputs,n=r[0].dims,i=N.normalizeAxis(t.axis,n.length);Mm(r,i);let a=n.slice();a[i]=r.reduce((s,u)=>s+(u.dims.length>i?u.dims[i]:0),0);let o=r.filter(s=>N.size(s.dims)>0);e.compute(Dm(o,i,a,r[0].dataType),{inputs:o})},cw=e=>ve({axis:e.axis})}),bn,kn,Sn,Rc,In=V(()=>{ie(),ue(),bn=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},kn=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Sn=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Rc=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,n]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:n}}else if(t==="Clip"){let[r,n]=(e==null?void 0:e.activation_params)||[Pv,Dv];return{activation:t,clipMax:n,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),qe,pw,Mc=V(()=>{qe=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},pw=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),fw,Sk=V(()=>{fw=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Ji,Bc,Pc=V(()=>{ie(),ue(),le(),In(),Ji=(e,t,r,n,i)=>{let a=n-r;return`
      ${Array.from({length:r}).map((o,s)=>`
      if (${Y(t.shape,s,t.rank)} != 1) {
        ${t.indicesSet(e,s,Y(i,s+a,n))}
      } else {
        ${t.indicesSet(e,s,0)}
      }`).join("")}
`},Bc=(e,t,r,n,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,u=o[o.length-2],l=s[s.length-1],c=o[o.length-1],f=Ne(l),h=Ne(c),y=Ne(u),v=N.size(r)/f/y,w=e.length>2,S=n?n.slice(0,-2):r.slice(0,-2),g=[N.size(S),u,l],m=[{type:12,data:v},{type:12,data:u},{type:12,data:l},{type:12,data:c}];kn(t,m),m.push(...te(S,o,s)),w&&m.push(...te(e[2].dims)),m.push(...te(g));let $=b=>{let E=zc("batch_dims",e[0].dataType,S.length),T=B("a",e[0].dataType,o.length,h),C=B("b",e[1].dataType,s.length,f),I=Z("output",e[0].dataType,g.length,f),O=je(I.type.tensor),P=bn(t,I.type.value,O),K=[T,C],G="";if(w){let oe=i?f:1;K.push(B("bias",e[2].dataType,e[2].dims.length,oe)),G=`${i?`value += bias[col / ${oe}];`:`value += ${I.type.value}(bias[row + i]);`}`}let Q=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Sn(t,Q);let ce=()=>{let oe=`var a_data: ${T.type.value};`;for(let H=0;H<h;H++)oe+=`
              let b_data${H} = b[(b_offset + (k + ${H}) * uniforms.N + col) / ${f}];`;for(let H=0;H<y;H++){oe+=`a_data = a[(a_offset + (row + ${H}) * uniforms.K + k) / ${h}];`;for(let ae=0;ae<h;ae++)oe+=`
            values[${H}] = fma(${C.type.value}(a_data${h===1?"":`[${ae}]`}), b_data${ae}, values[${H}]);
`}return oe};return`
  ${b.registerUniforms(Q).registerInternalVariables(E).declareVariables(...K,I)}
  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${f})) * ${f};
    var index1 = global_idx / (uniforms.N / ${f});
    let stride1 = uniforms.M / ${y};
    let row = (index1 % stride1) * ${y};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${E.offsetToIndices("batch")};`}

    var a_indices: ${T.type.indices};
    ${Ji("a_indices",T,T.rank-2,E.rank,"batch_indices")}
    ${T.indicesSet("a_indices",T.rank-2,0)}
    ${T.indicesSet("a_indices",T.rank-1,0)}
    let a_offset = ${T.indicesToOffset("a_indices")};

    var b_indices: ${C.type.indices};
    ${Ji("b_indices",C,C.rank-2,E.rank,"batch_indices")}
    ${C.indicesSet("b_indices",C.rank-2,0)}
    ${C.indicesSet("b_indices",C.rank-1,0)}
    let b_offset = ${C.indicesToOffset("b_indices")};
    var values: array<${I.type.value}, ${y}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${h}) {
      ${ce()}
    }
    for (var i = 0u; i < ${y}u; i++) {
      var value = values[i];
      ${G}
      ${P}
      let cur_indices = ${I.type.indices}(batch, row + i, col);
      let offset = ${I.indicesToOffset("cur_indices")};
      ${I.setByOffset(`offset / ${f}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${f};${h};${y};${i}`,inputDependencies:w?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:m}),getShaderSource:$}}}),Lm,Um,gd,Lu,Wm,yd,Vm,ts,Dc=V(()=>{ie(),ue(),le(),In(),Pc(),Mc(),Lm=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Um=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,gd=(e,t,r="f32",n,i=!1,a=32,o=!1,s=32)=>{let u=t[1]*e[1],l=t[0]*e[0],c=i?u:a,f=i?a:u,h=c/t[0],y=a/t[1];if(!((i&&h===4&&e[1]===4||!i&&(h===3||h===4))&&c%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${h} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${h} must be 3 or 4.
  tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${h}<${r}>, ${c/h}>, ${f}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${l/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${h};
const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${o?"0":"i32(globalId.z)"};
  ${n?`let batchIndices = ${n.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${u};

  let num_tiles = ${o?`${Math.ceil(s/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${o?`i32(globalId.z) * ${s}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${y};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Lm(i,n)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${n?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${h===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Um(i,h)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Lu=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Wm=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",yd=(e,t,r="f32",n,i=!1,a=32,o=!1,s=32,u=!1)=>{let l=e[1]*t[1],c=e[0]*t[0],f=i?l:a,h=i?a:l;if(!(h%t[1]===0&&f%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${h} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let y=h/t[1],v=f/t[0],w=a/t[1],S=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${h}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          ${Lu(i,n)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${n?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${i?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${l};

let tileRowA = i32(localId.y) * ${y};
let tileColA = i32(localId.x) * ${v};
let tileRowB = i32(localId.y) * ${w};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${v}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Lu(i,n)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${w}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${n?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Wm(i)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${f}>, ${h}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${c}>, ${a}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${o?"0":"i32(globalId.z)"};
    ${n?`let batchIndices = ${n.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${o?`${Math.ceil(s/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${o?`i32(globalId.z) * ${s}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${S}
  }
`},Vm=(e,t,r,n,i=!1)=>{let[a,o,s,u]=n,l=je(n[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${qe(e,l)} {
      var value = ${qe(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${o.type.indices};
        ${Ji("aIndices",o,o.rank-2,a.rank,"batchIndices")}
        ${o.indicesSet("aIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("aIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${qe(e,l)} {
      var value = ${qe(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${s.type.indices};
        ${Ji("bIndices",s,s.rank-2,a.rank,"batchIndices")}
        ${s.indicesSet("bIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("bIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${qe(e,l)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${qe(e,l)}(bias[row])`};`:""}
        ${r}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},ts=(e,t,r,n,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,u=o.slice(0,-2),l=s.slice(0,-2),c=n?n.slice(0,-2):r.slice(0,-2),f=N.size(c),h=o[o.length-2],y=o[o.length-1],v=s[s.length-1],w=y%4===0&&v%4===0,S=h<=8?[4,1,1]:[4,4,1],g=[8,8,1],m=[Math.ceil(v/g[0]/S[0]),Math.ceil(h/g[1]/S[1]),Math.ceil(f/g[2]/S[2])],$=w?4:1,b=[...u,h,y/$],E=b.length,T=[...l,y,v/$],C=T.length,I=[f,h,v/$],O=[{type:6,data:h},{type:6,data:v},{type:6,data:y}];kn(t,O),O.push(...te(c,b,T));let P=["rank","rank"],K=e.length>2;K&&(O.push(...te(e[2].dims)),P.push("rank")),O.push(...te(I));let G=Q=>{let ce=c.length,oe=zc("batchDims",e[0].dataType,ce,1),H=je(e[0].dataType),ae=B("a",e[0].dataType,E,$),M=B("b",e[1].dataType,C,$),W=Z("result",e[0].dataType,I.length,$),J=[ae,M];if(K){let De=i?$:1;J.push(B("bias",e[2].dataType,e[2].dims.length,De))}let A=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Sn(t,A);let L=je(W.type.tensor),j=bn(t,W.type.value,L),re=Vm($,K,j,[oe,ae,M,W],i);return`
  ${Q.registerUniforms(A).registerInternalVariables(oe).declareVariables(...J,W)}
  ${re}
  ${w?gd(S,g,H,oe):yd(S,g,H,oe)}
                   `};return{name:"MatMul",shaderCache:{hint:`${S};${t.activation};${w};${i}`,inputDependencies:P},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:m[0],y:m[1],z:m[2]},programUniforms:O}),getShaderSource:G}}}),Fm,hw,Ek=V(()=>{ie(),xr(),le(),In(),Mc(),Sk(),Dc(),Fm=(e,t,r,n,i=!1,a,o=4,s=4,u=4,l="f32")=>{let c=O=>{switch(O){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${O} is not supported.`)}},f=O=>{switch(O){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${O} is not supported.`)}},h=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,y=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,v=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",w=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",S=e?"row":"col",g=e?"col":"row",m=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${S} / outWidth;
    let outCol = ${S} % outWidth;

    let WRow = ${g} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${g} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${g} % inChannels;
    var resData = ${qe(o,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${v} && xCol >= 0 && xCol < ${w}) {
      ${h}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(o)}
    }
    return resData;`,$=e?t&&n?`
    let col = colIn * ${o};
    ${m}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${m}
    }
    return ${qe(o,l)}(0.0);`:n&&r?`
    let col = colIn * ${o};
    ${m}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${m}
    }
    return ${qe(o,l)}(0.0);`,b=e?n&&r?f(s):`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${f(s)}
    }
    return ${qe(s,l)}(0.0);`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${f(s)}
    }
    return ${qe(s,l)}(0.0);`,E=qe(u,l),T=qe(e?o:s,l),C=qe(e?s:o,l),I=bn(a,E,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${T} {
      ${e?$:b}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?b:$}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${E}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${y}
      ${pw(i)}
      ${I}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},hw=(e,t,r,n,i,a,o,s,u)=>{let l=t.format==="NHWC",c=l?e[0].dims[3]:e[0].dims[1],f=r[0],h=l?r[2]:r[3],y=l?r[1]:r[2],v=l?r[3]:r[1],w=l&&(c%4===0||c%3===0)&&v%4===0,S=l?v:h*y,g=l?h*y:v,m=[8,8,1],$=n<=8?[4,1,1]:[4,4,1],b=[Math.ceil(S/m[0]/$[0]),Math.ceil(g/m[1]/$[1]),Math.ceil(f/m[2]/$[2])];pe("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${b}`);let E=w?l&&c%4!==0?3:4:1,T=m[1]*$[1],C=m[0]*$[0],I=Math.max(m[0]*E,m[1]),O=n%T===0,P=i%C===0,K=a%I===0,G=w?[E,4,4]:[1,1,1],Q=[{type:6,data:n},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];kn(t,Q),Q.push(...te(e[0].dims,e[1].dims));let ce=["rank","rank"];o&&(Q.push(...te(e[2].dims)),ce.push("rank")),Q.push(...te(r));let oe=H=>{let ae=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Sn(t,ae);let M=w?4:1,W=je(e[0].dataType),J=`
      fn setOutputAtIndex(flatIndex : i32, value : ${w?`vec4<${W}>`:W}) {
        result[flatIndex] = ${w?`vec4<${W}>`:W}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${w?`vec4<${W}>`:W}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${w?"/ 4":""}, value);
      }`,A=B("x",e[0].dataType,e[0].dims.length,E===3?1:E),L=B("w",e[1].dataType,e[1].dims.length,M),j=[A,L],re=Z("result",e[0].dataType,r.length,M);if(o){let De=B("bias",e[2].dataType,e[2].dims.length,M);j.push(De),J+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${w?`vec4<${W}>`:W} {
          return bias[coords.${l?"w":"y"}${w?"/ 4":""}];
        }`}return`
        ${fw("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${H.registerUniforms(ae).declareVariables(...j,re)}
        ${J}
        ${Fm(l,O,P,K,o,t,G[0],G[1],G[2],W)}
        ${w?gd($,m,W,void 0,!l,I):yd($,m,W,void 0,!l,I,!1,void 0,s)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${E};${w};${O};${P};${K};${T};${C};${I}`,inputDependencies:ce},getRunData:()=>({outputs:[{dims:u?u(r):r,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:Q}),getShaderSource:oe}}}),jm,Uu,zi,qm,Wu,Hm,mw,gw,Tk=V(()=>{ie(),xr(),ue(),le(),In(),Mc(),jm=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Uu=e=>typeof e=="number"?[e,e,e]:e,zi=(e,t)=>t<=1?e:e+(e-1)*(t-1),qm=(e,t,r,n=1)=>{let i=zi(t,n);return Math.floor((e[0]*(r-1)-r+i)/2)},Wu=(e,t,r,n,i)=>{i==null&&(i=qm(e,t[0],n[0]));let a=[0,0,0,r];for(let o=0;o<3;o++)e[o]+2*i>=t[o]&&(a[o]=Math.trunc((e[o]-t[o]+2*i)/n[o]+1));return a},Hm=(e,t,r,n,i,a,o,s,u,l)=>{let c,f,h,y;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let v=Wu([t,r,n,1],[s,u,l],1,[i,a,o],e);f=v[0],h=v[1],y=v[2]}else if(Array.isArray(e)){if(!e.every((w,S,g)=>w===g[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let v=Wu([t,r,n,1],[s,u,l],1,[i,a,o],e[0]);f=v[0],h=v[1],y=v[2]}else if(e==="SAME_UPPER"){f=Math.ceil(t/i),h=Math.ceil(r/a),y=Math.ceil(n/o);let v=(f-1)*i+s-t,w=(h-1)*a+u-r,S=(y-1)*o+l-n,g=Math.floor(v/2),m=v-g,$=Math.floor(w/2),b=w-$,E=Math.floor(S/2),T=S-E;c={top:$,bottom:b,left:E,right:T,front:g,back:m}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:f,outHeight:h,outWidth:y}},mw=(e,t,r,n,i,a=!1,o="channelsLast")=>{let s,u,l,c,f;if(o==="channelsLast")[s,u,l,c,f]=e;else if(o==="channelsFirst")[s,f,u,l,c]=e;else throw new Error(`Unknown dataFormat ${o}`);let[h,,y,v,w]=t,[S,g,m]=Uu(r),[$,b,E]=Uu(n),T=zi(y,$),C=zi(v,b),I=zi(w,E),{padInfo:O,outDepth:P,outHeight:K,outWidth:G}=Hm(i,u,l,c,S,g,m,T,C,I),Q=a?h*f:h,ce=[0,0,0,0,0];return o==="channelsFirst"?ce=[s,Q,P,K,G]:o==="channelsLast"&&(ce=[s,P,K,G,Q]),{batchSize:s,dataFormat:o,inDepth:u,inHeight:l,inWidth:c,inChannels:f,outDepth:P,outHeight:K,outWidth:G,outChannels:Q,padInfo:O,strideDepth:S,strideHeight:g,strideWidth:m,filterDepth:y,filterHeight:v,filterWidth:w,effectiveFilterDepth:T,effectiveFilterHeight:C,effectiveFilterWidth:I,dilationDepth:$,dilationHeight:b,dilationWidth:E,inShape:e,outShape:ce,filterShape:t}},gw=(e,t,r,n,i,a)=>{let o=a==="channelsLast";o?e[0].dims[3]:e[0].dims[1];let s=[64,1,1],u={x:r.map((S,g)=>g)},l=[Math.ceil(jm(u.x.map(S=>r[S]))/s[0]),1,1];pe("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let c=1,f=N.size(r),h=[{type:12,data:f},{type:12,data:n},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];kn(t,h),h.push(...te(e[0].dims,e[1].dims));let y=["rank","rank"],v=e.length===3;v&&(h.push(...te(e[2].dims)),y.push("rank")),h.push(...te(r));let w=S=>{let g=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:n.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Sn(t,g);let m=1,$=je(e[0].dataType),b=B("x",e[0].dataType,e[0].dims.length,c),E=B("W",e[1].dataType,e[1].dims.length,m),T=[b,E],C=Z("result",e[0].dataType,r.length,m),I="";if(v){let K=B("bias",e[2].dataType,e[2].dims.length,m);T.push(K),I+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${$} {
          return bias[${o?Y("coords",4,5):Y("coords",1,5)}];
        }`}let O=qe(c,$),P=bn(t,O,$);return`
            ${I}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${b.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${E.getByIndices("aIndices")};
            }
          ${S.registerUniforms(g).declareVariables(...T,C)}
          ${S.mainStart()}
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${C.offsetToIndices("global_idx")};
              let batch = ${Y("coords",0,b.rank)};
              let d2 = ${o?Y("coords",b.rank-1,b.rank):Y("coords",1,b.rank)};
              let xFRCCorner = vec3<u32>(${o?Y("coords",1,b.rank):Y("coords",2,b.rank)},
              ${o?Y("coords",2,b.rank):Y("coords",3,b.rank)},
              ${o?Y("coords",3,b.rank):Y("coords",4,b.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${o?Y("uniforms.x_shape",1,b.rank):Y("uniforms.x_shape",2,b.rank)};
              let xShapeZ = ${o?Y("uniforms.x_shape",2,b.rank):Y("uniforms.x_shape",3,b.rank)};
              let xShapeW = ${o?Y("uniforms.x_shape",3,b.rank):Y("uniforms.x_shape",4,b.rank)};
              let xShapeU = ${o?Y("uniforms.x_shape",4,b.rank):Y("uniforms.x_shape",1,b.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${o?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${o?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${o?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${o?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${v?"value = value + getBiasByOutputCoords(coords)":""};
              ${P}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${o};${c};${v}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:h}),getShaderSource:w}}}),yw,vw,Ck=V(()=>{ie(),ue(),le(),In(),yw=(e,t,r,n)=>{let i=e.length>2,a=i?"value += b[output_channel];":"",o=e[0].dims,s=e[1].dims,u=t.format==="NHWC",l=u?r[3]:r[1],c=l/t.group,f=u&&c>=4?Ne(l):1,h=N.size(r)/f,y=[{type:12,data:h},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];kn(t,y),y.push(...te(o,[s[0],s[1],s[2],s[3]/f]));let v=i?["rank","rank","rank"]:["rank","rank"];y.push(...te([r[0],r[1],r[2],r[3]/f]));let w=S=>{let g=Z("output",e[0].dataType,r.length,f),m=je(g.type.tensor),$=bn(t,g.type.value,m),b=B("x",e[0].dataType,o.length),E=B("w",e[1].dataType,s.length,f),T=[b,E];i&&T.push(B("b",e[2].dataType,e[2].dims,f));let C=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Sn(t,C);let I=u?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${b.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${E.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${b.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${E.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${S.registerUniforms(C).declareVariables(...T,g)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${g.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${f} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${g.type.value} = ${g.type.value}(0);
    ${I}
    ${a}
    ${$}
    ${g.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${f}`,inputDependencies:v},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:y}),getShaderSource:w}},vw=(e,t,r,n)=>{let i=e.length>2,a=Ne(r[3]),o=Ne(r[2]),s=N.size(r)/a/o,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],c=[r[0],r[1],r[2],r[3]/a],f=[{type:12,data:s},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];kn(t,f),f.push(...te(u,l,c));let h=(o-1)*t.strides[1]+l[1],y=v=>{let w=Z("output",e[0].dataType,c.length,a),S=je(w.type.tensor),g=bn(t,w.type.value,S),m=B("x",e[0].dataType,u.length,a),$=B("w",e[1].dataType,l.length,a),b=[m,$];i&&b.push(B("b",e[2].dataType,e[2].dims,a));let E=i?"value += b[output_channel];":"",T=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Sn(t,T),`
  ${v.registerUniforms(T).declareVariables(...b,w)}
  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${o}u;
    let col = (index1 % width1) * ${o}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${m.type.value}, ${h}>;
    var values: array<${w.type.value}, ${o}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${l[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${h}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${m.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${m.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${l[1]}; w_width++) {
          let w_val = ${$.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${o}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${o}u; i++) {
      var value = values[i];
      ${E}
      ${g}
      ${w.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${o};${h};${l[0]};${l[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:f}),getShaderSource:y}}}),Gm,ao,Km,oo,vd,Vu,Qm,Zm,_d,Ik=V(()=>{ue(),Ek(),Tk(),Dc(),Ck(),In(),Pc(),Jr(),Gm=(e,t,r,n,i,a)=>{let o=e[0],s=e.slice(a?1:2,a?3:4),u=s.length,l=t[0],c=t.slice(2).map((h,y)=>h+(h-1)*(r[y]-1)),f=s.map((h,y)=>h+n[y]+n[y+u]).map((h,y)=>Math.floor((h-c[y]+i[y])/i[y]));return f.splice(0,0,o),f.splice(a?3:1,0,l),f},ao=[2,3,1,0],Km=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[1]*t.group;if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},oo=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let a=2;a<t[1].dims.length;++a)r[a-2]===0&&(r[a-2]=t[1].dims[a]);let n=e.pads.slice();Jo.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,n,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:r,pads:n}),i},vd=e=>{let t=Rc(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,a=e.group,o=e.kernel_shape,s=e.pads,u=e.strides,l=e.w_is_const();return{autoPad:n,format:r,dilations:i,group:a,kernelShape:o,pads:s,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Vu=(e,t,r,n)=>{let i=r.format==="NHWC",a=Gm(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,i);if(r.group!==1){let T=[t[0]];if(i){let C=e.kernelCustomData.wT??e.compute(xt(t[1],ao),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=C),T.push(C)}else T.push(t[1]);t.length===3&&T.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(vw(T,r,a,n),{inputs:T}):e.compute(yw(T,r,a,n),{inputs:T});return}let o=t.length===3,s=t[0].dims[i?1:2],u=t[0].dims[i?2:3],l=t[0].dims[i?3:1],c=t[1].dims[2],f=t[1].dims[3],h=a[i?1:2],y=a[i?2:3],v=a[i?3:1],w=i&&c===s&&f===u&&r.pads[0]===0&&r.pads[1]===0;if(w||c===1&&f===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let T=a[0],C,I,O,P=[];if(i){let Q=e.kernelCustomData.wT??e.compute(xt(t[1],ao),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=Q),w){let ce=s*u*l;C=t[0].reshape([1,T,ce]),I=Q.reshape([1,ce,v]),O=[1,T,v]}else C=t[0].reshape([T,s*u,l]),I=Q.reshape([1,l,v]),O=[T,h*y,v];P.push(C),P.push(I)}else C=t[0].reshape([T,l,s*u]),I=t[1].reshape([1,v,l]),O=[T,v,h*y],P.push(I),P.push(C);o&&P.push(t[2]);let K=O[2],G=P[0].dims[P[0].dims.length-1];K<8&&G<8?e.compute(Bc(P,r,a,O,i,n),{inputs:P}):e.compute(ts(P,r,a,O,i,n),{inputs:P});return}let S=!0,g=e.kernelCustomData.wT??e.compute(xt(t[1],ao),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=g);let m=[t[0],g];o&&m.push(t[2]);let $=i?h*y:v,b=i?v:h*y,E=c*f*l;e.compute(hw(m,r,a,$,b,E,o,S,n),{inputs:m})},Qm=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),o=[1].concat(t.dilations),s=[1].concat(t.kernelShape),u=oo({...t,pads:i,strides:a,dilations:o,kernelShape:s},n);Vu(e,n,u,l=>r?[l[0],l[2],l[3]]:[l[0],l[1],l[3]])},Zm=(e,t,r)=>{let n=r.format==="NHWC"?"channelsLast":"channelsFirst",i=oo(r,t),a=r.autoPad==="NOTSET"?r.pads:r.autoPad,o=mw(t[0].dims,t[1].dims,r.strides,r.dilations,a,!1,n);e.compute(gw(t,i,o.outShape,[o.filterDepth,o.filterHeight,o.filterWidth],[o.padInfo.front,o.padInfo.top,o.padInfo.left],n))},_d=(e,t)=>{if(Km(e.inputs,t),e.inputs[0].dims.length===3)Qm(e,t);else if(e.inputs[0].dims.length===5)Zm(e,e.inputs,t);else{let r=oo(t,e.inputs);Vu(e,e.inputs,r)}}}),_w,zk=V(()=>{ie(),xr(),ue(),le(),_w=(e,t,r)=>{let n=e.length>2,i=t.outputShape,a=t.format==="NHWC",o=t.group,s=e[1].dims,u=s[2]/o,l=s[3],c=a?Ne(u):1,f=a&&l===1&&u>=4,h=f?Math.floor(u/4)*4:Math.floor(u/c)*c,y=u-h,v=a?Ne(l):1,w=a?l===1?c:v:1,S=N.size(i)/v,g=[Math.ceil(S/64),1,1];pe("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${g}`);let m=["rank","rank"],$=[t.strides[0],t.strides[1]],b=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],E=[t.dilations[0],t.dilations[1]],T=[b[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),b[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],C=[T[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),T[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],I=[{type:12,data:S},{type:12,data:$},{type:12,data:b},{type:12,data:E},{type:12,data:T},{type:6,data:C},{type:12,data:h},{type:12,data:u},{type:12,data:l},...te(e[0].dims,e[1].dims)];n&&(I.push(...te(e[2].dims)),m.push("rank")),I.push(...te(i));let O=P=>{let K=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:$.length},{name:"filter_dims",type:"u32",length:b.length},{name:"dilations",type:"u32",length:b.length},{name:"effective_filter_dims",type:"u32",length:T.length},{name:"pads",type:"i32",length:C.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],G=je(e[0].dataType),Q=a?1:2,ce=a?2:3,oe=a?3:1,H=B("W",e[1].dataType,e[1].dims.length,w),ae=B("Dy",e[0].dataType,e[0].dims.length,c),M=[ae,H];n&&M.push(B("bias",e[2].dataType,[i[oe]].length,v));let W=Z("result",e[0].dataType,i.length,v),J=()=>{let j="";if(f)c===4?j+=`
        let xValue = ${ae.getByOffset("x_offset")};
        let wValue = ${H.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:c===2?j+=`
          dotProd = dotProd + dot(vec4<${G}>(${ae.getByOffset("x_offset")}, ${ae.getByOffset("x_offset + 1u")}), vec4<${G}>(${H.getByOffset("w_offset")}, ${H.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:c===1&&(j+=`
          dotProd = dotProd + dot(vec4<${G}>(${ae.getByOffset("x_offset")}, ${ae.getByOffset("x_offset + 1u")}, ${ae.getByOffset("x_offset + 2u")}, ${ae.getByOffset("x_offset + 3u")}), vec4<${G}>(${H.getByOffset("w_offset")}, ${H.getByOffset("w_offset + 1u")}, ${H.getByOffset("w_offset + 2u")}, ${H.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(j+=`
                  let xValue = ${a?ae.getByOffset(`${ae.indicesToOffset(`${ae.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):ae.get("batch","inputChannel","idyR","idyC")};
        `,c===1)j+=`
          let w_offset = ${H.indicesToOffset(`${H.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${H.getByOffset(`w_offset / ${w}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let re=0;re<c;re++)j+=`
            let wValue${re} = ${H.getByOffset(`${H.indicesToOffset(`${H.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${re}, wOutChannel)`)} / ${w}`)};
            dotProd = dotProd + xValue[${re}] * wValue${re};`;return j},A=()=>{if(y===0)return"";if(!f)throw new Error(`packInputAs4 ${f} is not true.`);let j="";if(c===1){j+="dotProd = dotProd";for(let re=0;re<y;re++)j+=`
            + ${ae.getByOffset(`x_offset + ${re}`)} * ${H.getByOffset(`w_offset + ${re}`)}`;j+=";"}else if(c===2){if(y!==2)throw new Error(`Invalid inputChannelsRemainder ${y}.`);j+=`
          let xValue = ${ae.getByOffset("x_offset")};
          let wValue = ${H.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return j},L=`
            let outputIndices = ${W.offsetToIndices(`global_idx * ${v}`)};
            let batch = ${W.indicesGet("outputIndices",0)};
            let d1 = ${W.indicesGet("outputIndices",oe)};
            let r = ${W.indicesGet("outputIndices",Q)};
            let c = ${W.indicesGet("outputIndices",ce)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${W.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${G}(dyRCorner) + ${G}(wR)) / ${G}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${G}(uniforms.Dy_shape[${Q}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${G}(dyCCorner) + ${G}(wC)) / ${G}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${G}(uniforms.Dy_shape[${ce}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${f?`
                var x_offset = ${ae.indicesToOffset(`${ae.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c};
                var w_offset = ${H.indicesToOffset(`${H.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${w};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${f?4:c}) {
                  ${J()}
                  inputChannel = inputChannel + ${f?4:c};
                }
                ${A()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${n?` + bias[d1 / ${v}]`:""};
            ${W.setByOffset("global_idx","value")};
          `;return`
    ${P.registerUniforms(K).declareVariables(...M,W)}
      ${P.mainStart()}
      ${P.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${L}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${w}${v}${f}${y}`,inputDependencies:m},getRunData:()=>({dispatchGroup:{x:g[0],y:g[1],z:g[2]},outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],programUniforms:I}),getShaderSource:O}}}),Xm,Ym,Jm,Fu,ww,eg,ju,tg,$w,Ok=V(()=>{zk(),In(),Jr(),Xm=(e,t,r,n,i,a)=>(e-1)*t+r+(n-1)*i+1-a,Ym=(e,t,r,n,i)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(r[n]=a,r[i]=e-a):t==="SAME_LOWER"&&(r[n]=e-a,r[i]=a)},Jm=(e,t,r,n,i,a,o,s,u,l)=>{let c=e.length-2,f=l.length===0;u.length<c&&u.push(...Array(c-u.length).fill(0));let h=e[0],y=t[s?3:1]*i;for(let v=0,w=e.length-c-(s?1:0);v<c;++v,++w){let S=e[w],g=f?S*o[v]:l[v],m=Xm(S,o[v],a[v],t[w],r[v],g);Ym(m,n,a,v,v+c),f&&l.push(o[v]*(S-1)+u[v]+(t[w]-1)*r[v]+1-a[v]-a[v+c])}l.splice(0,0,h),l.splice(s?3:1,0,y)},Fu=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((f,h)=>f*h,1)===0){r.length=0;for(let f=2;f<t[1].dims.length;++f)r.push(t[1].dims[f])}let n=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(n?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),o=e.outputPadding.slice(),s=t[0].dims,u=e.dilations.slice();if(u.reduce((f,h)=>f+h,0)===0){let f=t[0].dims.length-2;u=new Array(f).fill(1)}let l=e.strides.slice();if(l.reduce((f,h)=>f+h,0)===0){let f=t[0].dims.length-2;l=new Array(f).fill(1)}Jm(s,r,u,e.autoPad,e.group,i,l,n,o,a);let c=Object.assign({},e);return Object.assign(c,{kernelShape:r,pads:i,outputPadding:o,outputShape:a,dilations:u,strides:l}),c},ww=e=>{let t=Rc(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,a=e.group,o=e.kernelShape,s=e.pads,u=e.strides,l=e.wIsConst(),c=e.outputPadding,f=e.outputShape;return{autoPad:n,format:r,dilations:i,group:a,kernelShape:o,outputPadding:c,outputShape:f,pads:s,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},eg=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[0];if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((o,s)=>o+s,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((o,s)=>o+s,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((o,s)=>o+s,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((o,s)=>o+s,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},ju=(e,t,r,n)=>{let i=e.kernelCustomData.wT??e.compute(xt(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(_w(a,r,n),{inputs:a})},tg=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let o=t.strides;(o.length===0||o[0]===0)&&(o=[1]);let s=t.pads;s.length===0&&(s=[0,0]),s=[0,s[0],0,s[1]],o=[1].concat(o),a=[1].concat(a),i=[1].concat(i);let u=t.outputPadding;u=[0].concat(u);let l=Fu({...t,pads:s,strides:o,dilations:a,kernelShape:i,outputPadding:u},n);ju(e,n,l,c=>r?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},$w=(e,t)=>{if(eg(e.inputs,t),e.inputs[0].dims.length===3)tg(e,t);else{let r=Fu(t,e.inputs);ju(e,e.inputs,r)}}}),rg,xw,bw,Nk=V(()=>{ie(),ue(),Be(),le(),rg=(e,t,r,n)=>{let i=N.size(t),a=t.length,o=B("input",e,a),s=Z("output",e,a),u=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),l=N.normalizeAxis(u,a),c=f=>{let h=` i32(${o.indicesGet("inputIndices","uniforms.axis")}) `,y=Y("uniforms.input_shape","uniforms.axis",a),v=n.reverse?h+(n.exclusive?" + 1":""):"0",w=n.reverse?y:h+(n.exclusive?"":" + 1");return`
                ${f.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(o,s)}
                ${f.mainStart()}
                  ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${s.offsetToIndices("global_idx")};
                  var sum = ${s.type.value}(0);
                  let first : i32 = ${v};
                  let last : i32 = ${w};
                  for (var i : i32 = first; i < last; i++) {
                    ${o.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${o.getByIndices("inputIndices")};
                  }
                  ${s.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:n.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...te(t,t)]}),getShaderSource:c}},xw=(e,t)=>{let r=e.inputs[0].dims,n=e.inputs[0].dataType,i=e.inputs[1];e.compute(rg(n,r,i,t),{inputs:[0]})},bw=e=>{let t=e.exclusive===1,r=e.reverse===1;return ve({exclusive:t,reverse:r})}}),ng,ig,ag,kw,Sw,Ak=V(()=>{ie(),ue(),Be(),le(),ng=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},ig=(e,t,r,n)=>{let i=[];i.push(`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let a=0;a<t;++a)i.push(r.indicesSet("a",e[a],`i[${a}]`));return i.push("return a;}"),i.join(`
`)},ag=(e,t)=>{let r,n,i,a,o,s,u=t.format==="NHWC",l=t.blocksize,c=t.mode==="DCR";u?([r,n,i,a]=e.dims,o=c?[r,n,i,l,l,a/l**2]:[r,n,i,a/l**2,l,l],s=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,n,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],o=c?[r,l,l,a/l**2,n,i]:[r,a/l**2,l,l,n,i],s=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let f=e.reshape(o),h=f.dims.length,y=e.dataType,v=B("a",y,h),w=Z("output",y,h),S=g=>`
  ${g.registerUniform("output_size","u32").declareVariables(v,w)}

  ${ig(s,h,v,w)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",v.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:g=>{let m=u?[r,n*l,i*l,a/l**2]:[r,a/l**2,n*l,i*l],$=N.size(m),b=f.dims,E=N.sortBasedOnPerm(b,s);return{outputs:[{dims:m,dataType:g[0].dataType}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:[{type:12,data:$},...te(b,E)]}},getShaderSource:S}},kw=(e,t)=>{ng(e.inputs),e.compute(ag(e.inputs[0],t))},Sw=e=>ve({blocksize:e.blocksize,mode:e.mode,format:e.format})}),so,Oi,qu,og,sg,ug,lg,Hu,dg,Ew,Tw,Rk=V(()=>{ie(),ue(),Be(),le(),so="[a-zA-Z]|\\.\\.\\.",Oi="("+so+")+",qu="^"+Oi+"$",og="("+Oi+",)*"+Oi,sg="^"+og+"$",ug=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},lg=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,n]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(sg)))throw new Error("Invalid LHS term");if(r.split(",").forEach((a,o)=>{let s=e[o].dims.slice();if(!a.match(RegExp(qu)))throw new Error("Invalid LHS term");let u=this.processTerm(a,!0,s,o);this.lhs.push(u)}),n==="")n+=[...this.symbolToInfo.entries()].filter(([a,o])=>o.count===1||a==="...").map(([a])=>a).join("");else if(!n.match(RegExp(Oi)))throw new Error("Invalid RHS");(i=n.match(RegExp(so,"g")))==null||i.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let o=this.symbolToInfo.get(a);if(o===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(o.dimValue)}}),this.rhs=this.processTerm(n,!1,this.outputDims)}addSymbol(e,t,r){let n=this.symbolToInfo.get(e);if(n!==void 0){if(n.dimValue!==t&&n.count!==1)throw new Error("Dimension mismatch");n.count++,n.inputIndices.push(r)}else n={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,n)}processTerm(e,t,r,n=-1){let i=r.length,a=!1,o=[],s=0;if(!e.match(RegExp(qu))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(so,"g")),l=new ug(n);return u==null||u.forEach((c,f)=>{if(c==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let h=i-u.length+1;if(h<0)throw new Error("Ellipsis out of bounds");if(o=r.slice(s,s+h),this.hasEllipsis){if(this.ellipsisDims.length!==o.length||this.ellipsisDims.toString()!==o.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=o;else throw new Error("Ellipsis must be specified in the LHS");for(let y=0;y<o.length;y++){let v=String.fromCharCode(48+y);l.addSymbol(v,f+y),this.addSymbol(v,r[s++],n)}}else l.addSymbol(c,f+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,r[s++],n)}),l}},Hu=e=>e+"_max",dg=(e,t,r,n)=>{let i=e.map(l=>l.length).map((l,c)=>B(`input${c}`,t,l)),a=N.size(n),o=Z("output",t,n.length),s=[...r.symbolToInfo.keys()].filter(l=>!r.rhs.symbolToIndices.has(l)),u=l=>{let c=[],f="var prod = 1.0;",h="var sum = 0.0;",y="sum += prod;",v=[],w=[],S=[],g=[],m=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((b,E)=>{var T;if(r.rhs.symbolToIndices.has(E)){let C=(T=r.rhs.symbolToIndices.get(E))==null?void 0:T[0];C!==void 0&&r.lhs.forEach((I,O)=>{if(b.inputIndices.includes(O)){let P=I.symbolToIndices.get(E);if(P===void 0)throw new Error("Invalid symbol error");P.forEach(K=>{c.push(`${i[O].indicesSet(`input${O}Indices`,K,o.indicesGet("outputIndices",C))}`)})}})}else r.lhs.forEach((C,I)=>{if(b.inputIndices.includes(I)){let O=C.symbolToIndices.get(E);if(O===void 0)throw new Error("Invalid symbol error");O.forEach(P=>{v.push(`${i[I].indicesSet(`input${I}Indices`,P,`${E}`)}`)}),g.push(`prod *= ${i[I].getByIndices(`input${I}Indices`)};`)}}),w.push(`for(var ${E}: u32 = 0; ${E} < uniforms.${Hu(E)}; ${E}++) {`),S.push("}")});let $=m?[...c,`let sum = ${i.map((b,E)=>b.getByIndices(`input${E}Indices`)).join(" * ")};`]:[...c,h,...w,...v,f,...g,y,...S];return`
            ${l.registerUniforms(s.map(b=>({name:`${Hu(b)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,o)}

            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${o.offsetToIndices("global_idx")};
            ${i.map((b,E)=>`var input${E}Indices: ${i[E].type.indices};`).join(`
`)}
            ${$.join(`
`)};
            ${o.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let l=s.filter(f=>r.symbolToInfo.has(f)).map(f=>{var h;return{type:12,data:((h=r.symbolToInfo.get(f))==null?void 0:h.dimValue)||0}});l.push({type:12,data:a});let c=e.map((f,h)=>[...te(f)]).reduce((f,h)=>f.concat(h),l);return c.push(...te(n)),{outputs:[{dims:n,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:c}},getShaderSource:u}},Ew=(e,t)=>{let r=new lg(e.inputs,t.equation),n=r.outputDims,i=e.inputs.map((a,o)=>a.dims);e.compute(dg(i,e.inputs[0].dataType,r,n))},Tw=e=>{let t=e.equation.replace(/\s+/g,"");return ve({equation:t})}}),cg,Gu,pg,fg,Cw,Mk=V(()=>{ie(),ue(),le(),cg=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=r.length<t.length?0:r.length-t.length,i=t.length<r.length?0:t.length-r.length;for(;n<r.length&&i<t.length;++n,++i)if(r[n]!==t[i]&&r[n]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Gu=(e,t)=>{let r=e.length-t.length,n=[];for(let i=0;i<r;++i)n.push(e[i]);for(let i=0;i<t.length;++i)n.push(t[i]===1?e[i+r]:t[i]);return n},pg=(e,t)=>e.length>t.length?Gu(e,t):Gu(t,e),fg=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=pg(t,r),i=e[0].dataType,a=i===9||N.size(t)===1,o=i===9||t.length>0&&t[t.length-1]%4===0?4:1,s=a||n.length>0&&n[n.length-1]%4===0?4:1,u=Math.ceil(N.size(n)/s),l=f=>{let h=B("input",i,t.length,o),y=Z("output",i,n.length,s),v;if(i===9){let w=(S,g,m="")=>`
          let outputIndices${g} = ${y.offsetToIndices(`outputOffset + ${g}u`)};
          let offset${g} = ${h.broadcastedIndicesToOffset(`outputIndices${g}`,y)};
          let index${g} = offset${g} / 4u;
          let component${g} = offset${g} % 4u;
          ${S}[${g}] = ${m}(${h.getByOffset(`index${g}`)}[component${g}]);
        `;v=`
        let outputOffset = global_idx * ${s};
        var data = vec4<u32>(0);
        ${w("data",0,"u32")}
        ${w("data",1,"u32")}
        ${w("data",2,"u32")}
        ${w("data",3,"u32")}
        ${y.setByOffset("global_idx","data")}
      }`}else v=`
        let outputIndices = ${y.offsetToIndices(`global_idx * ${s}`)};
        let inputOffset = ${h.broadcastedIndicesToOffset("outputIndices",y)};
        let data = ${y.type.value}(${h.getByOffset(`inputOffset / ${o}`)});
        ${y.setByOffset("global_idx","data")}
      }`;return`
    ${f.registerUniform("vec_size","u32").declareVariables(h,y)}
    ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${v}`},c=[{type:12,data:u},...te(t,n)];return{name:"Expand",shaderCache:{hint:`${n.length};${o}${s}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c})}},Cw=e=>{cg(e.inputs),e.compute(fg(e.inputs),{inputs:[0]})}}),hg,Iw,Bk=V(()=>{ie(),ue(),le(),Ac(),hg=e=>{let t=e[0].dataType,r=N.size(e[0].dims),n=N.size(e[1].dims),i=n%4===0,a=o=>{let s=B("x",t,[1],4),u=B("bias",t,[1],4),l=Z("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],f=y=>`
      let bias${y}_offset: u32 = (global_idx * 4 + ${y}) % uniforms.bias_size;
      let bias${y} = ${u.getByOffset(`bias${y}_offset / 4`)}[bias${y}_offset % 4];`,h=i?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${f(0)}${f(1)}${f(2)}${f(3)}
      let bias = ${s.type.value}(bias0, bias1, bias2, bias3);`;return`${o.registerUniforms(c).declareVariables(s,u,l)}

    ${hd(et(t))}

    ${o.mainStart(li)}
      ${o.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${s.getByOffset("global_idx")};
      ${h}
      let x_in = x + bias;
      ${l.setByOffset("global_idx",md("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:o=>({outputs:[{dims:o[0].dims,dataType:o[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:n}],dispatchGroup:{x:Math.ceil(r/li/4)}})}},Iw=e=>{e.inputs.length<2||N.size(e.inputs[1].dims)===0?Q_(e):e.compute(hg(e.inputs))}}),mg,gg,zw,Ow,Pk=V(()=>{ie(),ue(),Be(),le(),mg=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},gg=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r.length,a=N.normalizeAxis(t.axis,i),o=r.slice(0);o.splice(a,1,...n);let s=r[a],u=e[0].dataType===9?4:1,l=Math.ceil(N.size(o)/u),c=[{type:12,data:l},{type:6,data:s},{type:12,data:a},...te(e[0].dims,e[1].dims,o)],f=h=>{let y=B("data",e[0].dataType,e[0].dims.length,u),v=B("inputIndices",e[1].dataType,e[1].dims.length),w=Z("output",e[0].dataType,o.length,u),S=m=>{let $=n.length,b=`var indicesIndices${m}  = ${v.type.indices}(0);`;for(let E=0;E<$;E++)b+=`${$>1?`indicesIndices${m}[${E}]`:`indicesIndices${m}`} = ${o.length>1?`outputIndices${m}[uniforms.axis + ${E}]`:`outputIndices${m}`};`;b+=`
          var idx${m} = ${v.getByIndices(`indicesIndices${m}`)};
          if (idx${m} < 0) {
            idx${m} = idx${m} + uniforms.axisDimLimit;
          }
          var dataIndices${m} : ${y.type.indices};
        `;for(let E=0,T=0;E<i;E++)E===a?(b+=`${i>1?`dataIndices${m}[${E}]`:`dataIndices${m}`} = u32(idx${m});`,T+=$):(b+=`${i>1?`dataIndices${m}[${E}]`:`dataIndices${m}`} = ${o.length>1?`outputIndices${m}[${T}]`:`outputIndices${m}`};`,T++);return b},g;if(e[0].dataType===9){let m=($,b,E="")=>`
          let outputIndices${b} = ${w.offsetToIndices(`outputOffset + ${b}u`)};
          ${S(b)};
          let offset${b} = ${y.indicesToOffset(`dataIndices${b}`)};
          let index${b} = offset${b} / 4u;
          let component${b} = offset${b} % 4u;
          ${$}[${b}] = ${E}(${y.getByOffset(`index${b}`)}[component${b}]);
        `;g=`
        let outputOffset = global_idx * ${u};
        var value = vec4<u32>(0);
        ${m("value",0,"u32")}
        ${m("value",1,"u32")}
        ${m("value",2,"u32")}
        ${m("value",3,"u32")}
        ${w.setByOffset("global_idx","value")}
      `}else g=`
      let outputIndices = ${w.offsetToIndices("global_idx")};
      ${S("")};
      let value = ${y.getByIndices("dataIndices")};
      ${w.setByOffset("global_idx","value")};
      `;return`
      ${h.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(y,v,w)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${g}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c}),getShaderSource:f}},zw=e=>ve({axis:e.axis}),Ow=(e,t)=>{let r=e.inputs;mg(r),e.compute(gg(e.inputs,t))}}),yg,Nw,Aw,Dk=V(()=>{ie(),ue(),le(),yg=(e,t,r,n,i,a,o,s,u)=>{let l=[{type:12,data:a},{type:12,data:n},{type:12,data:i},{type:12,data:r},{type:12,data:o},{type:12,data:s},{type:12,data:u}],c=[a];l.push(...te(t.dims,c));let f=h=>{let y=B("indices_data",t.dataType,t.dims.length),v=Z("input_slice_offsets_data",12,1,1),w=[y,v],S=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${h.registerUniforms(S).declareVariables(...w)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${i.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:f},{inputs:[t],outputs:[-1]})[0]},Nw=(e,t)=>{let r=e.inputs,n=r[0].dims,i=r[0].dataType,a=r[1].dims,o=a[a.length-1],s=N.sizeToDimension(a,a.length-1),u=N.sizeFromDimension(n,t.batchDims+o),l=N.sizeToDimension(n,t.batchDims),c=N.sizeFromDimension(n,t.batchDims),f=s/l,h=new Array(o),y=u;for(let b=0;b<o;++b)h[o-1-b]=y,y*=n[t.batchDims+o-1-b];let v=yg(e,r[1],h,t.batchDims,n,s,f,c,o),w=t.batchDims+o;if(w>n.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let S=a.slice(0,-1).concat(n.slice(w)),g=N.size(S),m=[{type:12,data:g},{type:12,data:u},...te(r[0].dims,v.dims,S)],$=b=>{let E=B("data",r[0].dataType,r[0].dims.length),T=B("slice_offsets",12,v.dims.length),C=Z("output",r[0].dataType,S.length);return`
          ${b.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(E,T,C)}
            ${b.mainStart()}
            ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:S,dataType:i}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:m}),getShaderSource:$},{inputs:[r[0],v]})},Aw=e=>({batchDims:e.batch_dims,cacheKey:""})}),vg,_g,Rw,Mw,Lk=V(()=>{ie(),ue(),Be(),le(),vg=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=N.normalizeAxis(t.quantizeAxis,e[0].dims.length),n=t.blockSize,i=e[0],a=e[2],o=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((s,u)=>u===r?Math.ceil(s/n)===a.dims[u]:s===a.dims[u]).reduce((s,u)=>s&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(o){if(o.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(o.dims.length!==a.dims.length||!o.dims.map((s,u)=>s===a.dims[u]).reduce((s,u)=>s&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},_g=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r.length,a=N.normalizeAxis(t.gatherAxis,i),o=N.normalizeAxis(t.quantizeAxis,i),s=r.slice(0);s.splice(a,1,...n);let u=N.size(s),l=e[2].dataType,c=e[0].dataType===22,f=[{type:12,data:u},{type:12,data:o},{type:12,data:a},{type:12,data:t.blockSize},...te(...e.map((y,v)=>y.dims),s)],h=y=>{let v=B("data",e[0].dataType,e[0].dims.length),w=B("inputIndices",e[1].dataType,e[1].dims.length),S=B("scales",e[2].dataType,e[2].dims.length),g=e.length>3?B("zeroPoint",e[3].dataType,e[3].dims.length):void 0,m=Z("output",l,s.length),$=[v,w,S];g&&$.push(g);let b=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${y.registerUniforms(b).declareVariables(...$,m)}
        ${y.mainStart()}
        let output_indices = ${m.offsetToIndices("global_idx")};
        var indices_indices = ${w.type.indices}(0);
        ${n.length>1?`
          for (var i: u32 = 0; i < ${n.length}; i++) {
            let index = ${m.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${w.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${m.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${v.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${m.indicesGet("output_indices","i")};
          ${v.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${w.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[a]};
        }
        ${v.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${s.length}; i++) {
          let index = ${m.indicesGet("output_indices",`i + ${n.length} - 1`)};
          ${v.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${v.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${v.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${S.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${S.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${S.getByIndices("scale_indices")};
        ${g?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${g.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${g.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${et(l)}(quantized_data - zero_point) * scale;
        ${m.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((y,v)=>v!==1).map(y=>y.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(y,v)=>"rank")},getRunData:()=>({outputs:[{dims:s,dataType:l}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:f}),getShaderSource:h}},Rw=(e,t)=>{let r=e.inputs;vg(r,t),e.compute(_g(e.inputs,t))},Mw=e=>ve({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),wg,$g,Bw,Pw,Uk=V(()=>{ie(),ue(),Be(),le(),wg=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},$g=(e,t)=>{let r=e[0].dims,n=e[0].dataType,i=r.length,a=e[1].dims,o=e[1].dataType,s=N.normalizeAxis(t.axis,i),u=r[s],l=a.slice(0),c=N.size(l),f=B("input",n,i),h=B("indicesInput",o,a.length),y=Z("output",n,l.length),v=[{type:12,data:c},{type:6,data:u},{type:12,data:s}];return v.push(...te(r,a,l)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:v}),getShaderSource:w=>`
      ${w.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(f,h,y)}
      ${w.mainStart()}
      ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${y.offsetToIndices("global_idx")};

      var idx = ${h.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${f.type.indices}(outputIndices);
      ${f.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${f.getByIndices("inputIndices")};

      ${y.setByOffset("global_idx","value")};
  }`}},Bw=e=>ve({axis:e.axis}),Pw=(e,t)=>{let r=e.inputs;wg(r),e.compute($g(e.inputs,t))}}),xg,bg,Dw,Lw,Wk=V(()=>{ie(),ue(),le(),xg=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},bg=(e,t)=>{let r=e[0].dims.slice(),n=e[1].dims.slice(),[i,a,o]=Bv.getShapeOfGemmResult(r,t.transA,n,t.transB,e.length===3?e[2].dims:void 0),s=[i,a];if(!s)throw new Error("Can't use gemm on the given tensors");let u=16,l=Math.ceil(a/u),c=Math.ceil(i/u),f=!0,h=N.size(s),y=[{type:12,data:f?l:h},{type:12,data:i},{type:12,data:a},{type:12,data:o},{type:1,data:t.alpha},{type:1,data:t.beta}],v=["type","type"];e.length===3&&(y.push(...te(e[2].dims)),v.push("rank")),y.push(...te(s));let w=g=>{let m="";t.transA&&t.transB?m="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?m="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?m="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(m="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let $=t.alpha===1?"":"value *= uniforms.alpha;",b=B("a",e[0].dataType,e[0].dims),E=B("b",e[1].dataType,e[1].dims),T=b.type.value,C=null,I=[b,E];e.length===3&&(C=B("c",e[2].dataType,e[2].dims.length),I.push(C));let O=Z("output",e[0].dataType,s.length);I.push(O);let P=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${g.registerUniforms(P).declareVariables(...I)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${T}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${m}
    }

    ${$}
    ${C!=null?`let cOffset = ${C.broadcastedIndicesToOffset("vec2(m, n)",O)}; value += ${T}(uniforms.beta) * ${C.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},S=g=>{let m=B("a",e[0].dataType,e[0].dims),$=B("b",e[1].dataType,e[1].dims),b=null,E=[m,$];e.length===3&&(b=B("c",e[2].dataType,e[2].dims.length),E.push(b));let T=Z("output",e[0].dataType,s.length);E.push(T);let C=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],I="",O="";t.transA&&t.transB?(O=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${m.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${$.type.value}(0);
      }
      `,I="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(O=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${m.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${$.type.value}(0);
      }
      `,I="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(O=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${m.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${$.type.value}(0);
      }
      `,I="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(O=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${m.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${$.type.value}(0);
      }
      `,I="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let P=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${g.registerUniforms(C).declareVariables(...E)}
  var<workgroup> tile_a: array<array<${m.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${$.type.storage}, ${u}>, ${u}>;
  ${g.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${T.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${O}
      k_start = k_start + ${u};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${u}; k++) {
        ${I}
      }
      workgroupBarrier();
    }

    ${P}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${b!=null?`let cOffset = ${b.broadcastedIndicesToOffset("vec2(m, n)",T)}; value += ${T.type.value}(uniforms.beta) * ${b.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return f?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:v},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:l*c},programUniforms:y}),getShaderSource:S}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:v},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:y}),getShaderSource:w}},Dw=e=>{let t=e.transA,r=e.transB,n=e.alpha,i=e.beta;return{transA:t,transB:r,alpha:n,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Lw=(e,t)=>{xg(e.inputs),e.compute(bg(e.inputs,t))}}),tr,dr,nn,an,kg,Sg,Eg,Tg,Cg,Ig,zg,Og,Uw,Ww,Vk=V(()=>{ie(),ue(),Be(),le(),[tr,dr,nn,an]=[0,1,2,3],kg=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Sg=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Eg=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,Tg=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Cg=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,Ig=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${tr}] = batch;
     indices[${dr}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${nn}] = u32(r);
            indices[${an}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${nn}] = u32(clamp(r, 0, H - 1));
          indices[${an}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${nn}] = gs_reflect(r, border[1], border[3]);
          indices[${an}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,zg=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${tr}], indices[${dr}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${tr}], indices[${dr}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${tr}], indices[${dr}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${tr}], indices[${dr}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${tr}], indices[${dr}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${tr}], indices[${dr}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Og=(e,t)=>{let r=B("x",e[0].dataType,e[0].dims.length),n=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=B("grid",e[1].dataType,n.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[tr,dr,nn,an]=[0,3,1,2]);let o=Z("output",e[0].dataType,a.length),s=r.type.value,u=N.size(a),l=[{type:12,data:u},...te(e[0].dims,n,a)],c=f=>`
  ${f.registerUniform("output_size","u32").declareVariables(r,i,o)}
  ${Sg}
  ${Eg(s)}
  ${Tg(t)}
  ${Cg(t)}
  ${Ig(r,s,t)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${nn}]);
      let W_in = i32(uniforms.x_shape[${an}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${o.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${tr}], indices[${nn}], indices[${an}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${zg(o,s,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:f=>{let h=N.size(a);return{outputs:[{dims:a,dataType:f[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:l}},getShaderSource:c}},Uw=(e,t)=>{kg(e.inputs),e.compute(Og(e.inputs,t))},Ww=e=>ve({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),at,Ng,Vw,Ku,Ag,Fi,Fw,jw=V(()=>{ie(),ue(),Be(),Ic(),Nc(),le(),Jr(),at=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Ng=(e,t)=>{let r=e[0],n=at(e,1),i=at(e,2),a=at(e,3),o=at(e,4),s=at(e,5),u=at(e,6),l=at(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=r.dims[0],f=r.dims[1],h=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],y=f,v=0,w=0,S=Math.floor(h/t.numHeads);if(u&&l&&N.size(u.dims)&&N.size(l.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==c||u.dims[1]!==t.numHeads||u.dims[3]!==S)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[0]!==c||l.dims[1]!==t.numHeads||l.dims[3]!==S)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==l.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(l.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');v=u.dims[2],w=u.dims[2]}else if(u&&N.size(u.dims)||l&&N.size(l.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let g;if(n&&N.size(n.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(n.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');g=2,y=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==S)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');g=5,y=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==S)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');g=0,y=n.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');g=3}if(a&&N.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(n&&n.dims.length===5&&n.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let m=v+y,$=0;if(o&&N.size(o.dims)>0){$=8;let C=o.dims;throw C.length===1?C[0]===c?$=1:C[0]===3*c+2&&($=3):C.length===2&&C[0]===c&&C[1]===m&&($=5),$===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let b=!1,E=h;if(i&&N.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(y!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=i.dims[2]}else{if(y!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');E=i.dims[1]*i.dims[3],b=!0}}let T=!1;if(o&&N.size(o.dims)>0)throw new Error("Key padding mask is not supported");if(s&&N.size(s.dims)>0){if(s.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(s.dims[0]!==c||s.dims[1]!==t.numHeads||s.dims[2]!==f||s.dims[3]!==m)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:f,pastSequenceLength:v,kvSequenceLength:y,totalSequenceLength:m,maxSequenceLength:w,inputHiddenSize:0,hiddenSize:h,vHiddenSize:E,headSize:S,vHeadSize:Math.floor(E/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:$,scale:t.scale,broadcastResPosBias:T,passPastInKv:b,qkvFormat:g}},Vw=e=>ve({...e}),Ku=ve({perm:[0,2,1,3]}),Ag=(e,t,r,n,i,a,o)=>{let s=[n,i,a],u=N.size(s),l=[{type:12,data:u},{type:12,data:o},{type:12,data:a}],c=f=>{let h=Z("qkv_with_bias",t.dataType,s),y=B("qkv",t.dataType,s),v=B("bias",r.dataType,s),w=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${f.registerUniforms(w).declareVariables(y,v,h)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:c},{inputs:[t,r],outputs:[-1]})[0]},Fi=(e,t,r,n,i,a,o,s)=>{let u=a;if(o&&N.size(o.dims)>0){if(n===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=Ag(e,a,o,t,n,r*i,s),u=u.reshape([t,n,r,i]),r===1||n===1?u:e.compute(xt(u,Ku.perm),{inputs:[u],outputs:[-1]})[0]}else return a.dims.length===3&&(u=a.reshape([t,n,r,i])),r===1||n===1?u:e.compute(xt(u,Ku.perm),{inputs:[u],outputs:[-1]})[0]},Fw=(e,t)=>{let r=Ng(e.inputs,t),n=e.inputs[0],i=at(e.inputs,1),a=at(e.inputs,2),o=at(e.inputs,3),s=at(e.inputs,4),u=at(e.inputs,5),l=at(e.inputs,6),c=at(e.inputs,7);if(n.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let f=i&&a&&i.dims.length===4&&a.dims.length===4,h=Fi(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,n,o,0);if(f)return va(e,h,i,a,s,void 0,l,c,u,r);if(!i||!a)throw new Error("key and value must be provided");let y=Fi(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,i,o,r.hiddenSize),v=Fi(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,a,o,2*r.hiddenSize);va(e,h,y,v,s,void 0,l,c,u,r)}}),Rg,Mg,Bg,Pg,wd,qw,Hw,Gw=V(()=>{ie(),ue(),Be(),le(),Rg=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Mg=(e,t)=>{let r=[],n=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),n=r.length),ve({numOutputs:n,axis:t.axis,splitSizes:r})},Bg=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${Y("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Pg=e=>{let t=e.length,r=[];for(let n=0;n<t;++n){let i=e[n].setByIndices("indices","input[global_idx]");t===1?r.push(i):n===0?r.push(`if (output_number == ${n}u) { ${i} }`):n===t-1?r.push(`else { ${i} }`):r.push(`else if (output_number == ${n}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},wd=(e,t)=>{let r=e[0].dims,n=N.size(r),i=e[0].dataType,a=N.normalizeAxis(t.axis,r.length),o=new Array(t.numOutputs),s=B("input",i,r.length),u=new Array(t.numOutputs),l=[],c=[],f=0,h=[{type:12,data:n}];for(let v=0;v<t.numOutputs;v++){f+=t.splitSizes[v],u[v]=f;let w=r.slice();w[a]=t.splitSizes[v],c.push(w),o[v]=Z(`output${v}`,i,w.length),l.push({dims:c[v],dataType:e[0].dataType})}h.push({type:12,data:u},...te(r,...c));let y=v=>`
  ${v.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(s,...o)}
  ${Bg(u.length)}
  ${Pg(o)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${s.offsetToIndices("global_idx")};
    var index = ${s.indicesGet("indices",a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${Y("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${s.indicesSet("indices",a,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:y,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(n/64)},programUniforms:h})}},qw=(e,t)=>{Rg(e.inputs);let r=e.inputs.length===1?t:Mg(e.inputs,t);e.compute(wd(e.inputs,r),{inputs:[0]})},Hw=e=>{let t=e.axis,r=e.splitSizes,n=e.numOutputs<0?r.length:e.numOutputs;if(n!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return ve({axis:t,numOutputs:n,splitSizes:r})}}),Dg,rs,Kw,Qw=V(()=>{ie(),ue(),Be(),le(),Dg=(e,t)=>{let[r,n,i,a]=e,{numHeads:o,rotaryEmbeddingDim:s}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!N.areEqual(n.dims,[])&&!N.areEqual(n.dims,[1])&&n.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${n.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!N.areEqual(i.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(s>0&&o===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=r.dims[0],l=r.dims[r.dims.length-2],c=i.dims[0],f=N.sizeFromDimension(r.dims,1)/l,h=s===0?i.dims[1]*2:f/o;if(s>h)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(n.dims.length===2){if(u!==n.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${n.dims[0]}`);if(l!==n.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${n.dims[1]}`)}if(h/2!==i.dims[1]&&s/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`);if(l>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},rs=(e,t)=>{let{interleaved:r,numHeads:n,rotaryEmbeddingDim:i,scale:a}=t,o=e[0].dims[0],s=N.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],l=s/u,c=e[2].dims[1],f=i===0?c*2:l/n,h=new Array(o,u,l/f,f-c),y=N.computeStrides(h),v=[{type:1,data:a},{type:12,data:h},{type:12,data:y},...e[0].dims.length===3?new Array({type:12,data:[s,l,f,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[s,f,u*f,1]}):[],...te(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],w=S=>{let g=B("input",e[0].dataType,e[0].dims.length),m=B("position_ids",e[1].dataType,e[1].dims.length),$=B("cos_cache",e[2].dataType,e[2].dims.length),b=B("sin_cache",e[3].dataType,e[3].dims.length),E=Z("output",e[0].dataType,e[0].dims.length);return S.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:h.length},{name:"global_strides",type:"u32",length:y.length},{name:"input_output_strides",type:"u32",length:y.length}]),`
        ${S.declareVariables(g,m,$,b,E)}

        ${S.mainStart(li)}
          let half_rotary_emb_dim = uniforms.${$.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${m.broadcastedIndicesToOffset("bsnh.xy",Z("",m.type.tensor,2))};
            let position_id =
                u32(${m.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${g.getByOffset("i")} * ${$.get("position_id","bsnh[3]")} -
                ${g.getByOffset("j")} * ${b.get("position_id","bsnh[3]")};
            ${E.setByOffset("i","re")}
            let im = ${g.getByOffset("i")} * ${b.get("position_id","bsnh[3]")} +
                ${g.getByOffset("j")} * ${$.get("position_id","bsnh[3]")};
            ${E.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${E.setByOffset("k",g.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:ve({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(N.size(h)/li)},programUniforms:v})}},Kw=(e,t)=>{Dg(e.inputs,t),e.compute(rs(e.inputs,t))}}),Lg,Ug,Qu,Wg,Zw,Fk=V(()=>{Be(),ie(),Nc(),jw(),Gw(),Jr(),Qw(),le(),Lg=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],n=e[1],i=e[2],a=e[3],o=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let s=!1,u=r.dims[0],l=r.dims[1],c=r.dims.length===3?s?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],f=l,h=0,y=!n||n.dims.length===0,v=Math.floor(y?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);y&&(c=v*t.numHeads);let w=a&&a.dims.length!==0,S=o&&o.dims.length!==0;if(w&&a.dims.length===4&&a.dims[0]===u&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===v)throw new Error("BSNH pastKey/pastValue is not supported");if(w&&S){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(o.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');h=a.dims[2]}else if(w||S)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let g=1;if(n&&n.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(r.dims[2]%n.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');f=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==v)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');f=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==v)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');f=n.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');g=3}let m=0,$=!1,b=t.kvNumHeads?v*t.kvNumHeads:c;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(f!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');b=i.dims[2]}else{if(f!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');b=i.dims[1]*i.dims[3],$=!0}}let E=e.length>4?e[5]:void 0;if(E&&E.dims.length!==1&&E.dims[0]!==u)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:u,sequenceLength:l,pastSequenceLength:h,kvSequenceLength:f,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:b,headSize:v,vHeadSize:Math.floor(b/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:m,scale:t.scale,broadcastResPosBias:!1,passPastInKv:$,qkvFormat:g}},Ug=ve({perm:[0,2,1,3]}),Qu=(e,t,r)=>{let n=t,i=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(n=t.reshape([r.batchSize,r.kvSequenceLength,i,r.headSize]),n=e.compute(xt(n,Ug.perm),{inputs:[n],outputs:[-1]})[0]),n},Wg=(e,t,r,n)=>{let i=7,a=["type","type"],o=[e*t],s=e*t,u=[{type:12,data:s},{type:12,data:t},{type:12,data:e}],l=c=>{let f=B("seq_lens",r.dataType,r.dims),h=B("total_seq_lens",n.dataType,n.dims),y=Z("pos_ids",i,o),v=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${c.registerUniforms(v).declareVariables(f,h,y)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${h.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${f.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${y.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${y.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${y.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u}),getShaderSource:l}},Zw=(e,t)=>{var b;let r=Lg(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((b=e.inputs[1])==null?void 0:b.dims.length)===5)throw new Error("Packed KV is not implemented");let n=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,o=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,s=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,c=r.kvNumHeads?r.kvNumHeads:r.numHeads,f=ve({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,c*r.headSize,c*r.headSize]}),[h,y,v]=!i&&!a?e.compute(wd([n],f),{inputs:[n],outputs:[-1,-1,-1]}):[n,i,a],w,S;if(t.doRotary){let E=e.compute(Wg(r.batchSize,r.sequenceLength,u,l),{inputs:[u,l],outputs:[-1]})[0],T=e.inputs[7],C=e.inputs[8],I=ve({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),O=[h,E,T,C],P=[-1];w=e.compute(rs(O,I),{inputs:O,outputs:P})[0],O.splice(0,1,y);let K=ve({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});S=e.compute(rs(O,K),{inputs:O,outputs:P})[0]}let g=Fi(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?w:h,void 0,0),m=Qu(e,t.doRotary?S:y,r),$=Qu(e,v,r);va(e,g,m,$,void 0,void 0,o,s,void 0,r,u,l)}}),Zu,Vg,Fg,Xw,jk=V(()=>{ie(),ue(),Jr(),le(),Zu=(e,t,r,n,i,a,o,s)=>{let u=Ne(a),l=u===1?"f32":`vec${u}f`,c=u===1?"vec2f":`mat2x${u}f`,f=i*o,h=64;f===1&&(h=256);let y=[i,o,a/u],v=[i,o,2],w=["rank","type","type"],S=[];S.push(...te(y,v));let g=m=>{let $=B("x",t.dataType,3,u),b=B("scale",r.dataType,r.dims),E=B("bias",n.dataType,n.dims),T=Z("output",1,3,2),C=[$,b,E,T];return`
  var<workgroup> workgroup_shared : array<${c}, ${h}>;
  const workgroup_size = ${h}u;
  ${m.declareVariables(...C)}
  ${m.mainStart(h)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${l}(0);
    var squared_sum = ${l}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${l}(${$.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${c}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Qr("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${Qr("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${s}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${s};${h}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:v,dataType:1}],dispatchGroup:{x:f},programUniforms:S}),getShaderSource:g},{inputs:[t,r,n],outputs:[-1]})[0]},Vg=(e,t,r)=>{let n=t[0].dims,i=n,a=2,o=n[0],s=n[1],u=N.sizeFromDimension(n,a),l=Ne(u),c=N.size(i)/l,f=Zu(e,t[0],t[1],t[2],o,u,s,r.epsilon),h=[o,s,u/l],y=[o,s],v=["type","none"],w=S=>{let g=B("x",t[0].dataType,h.length,l),m=B("scale_shift",1,y.length,2),$=Z("output",t[0].dataType,h.length,l),b=[g,m,$];return`
  ${S.registerUniform("output_size","u32").declareVariables(...b)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${$.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${m.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${g.getByOffset("global_idx")} * ${$.type.value}(scale_shift.x) + ${$.type.value}(scale_shift.y);
      ${$.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${l}`,inputDependencies:v},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...te(h,y,h)]}),getShaderSource:w},{inputs:[t[0],f]})},Fg=(e,t,r)=>{let n=t[0].dims,i=n,a=n[0],o=n[n.length-1],s=N.sizeFromDimension(n,1)/o,u=Ne(o),l=N.size(i)/u,c=[{type:12,data:s},{type:12,data:Math.floor(o/u)}],f=["type","type"],h=!1,y=[0,n.length-1];for(let g=0;g<n.length-2;g++)h=h||n[g+1]!==1,y.push(g+1);h=h&&n[n.length-1]!==1;let v=h?e.compute(xt(e.inputs[0],y),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:n.length},(g,m)=>n[y[m]])),w=Zu(e,v,t[1],t[2],a,s,o,r.epsilon),S=g=>{let m=je(t[0].dataType),$=u===1?"vec2f":`mat${u}x2f`,b=C=>{let I=C===0?"x":"y",O=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${m}(${O}(scale.${I}))`;case 2:return`vec2<${m}>(${O}(scale[0].${I}, scale[1].${I}))`;case 4:return`vec4<${m}>(${O}(scale[0].${I}, scale[1].${I}, scale[2].${I}, scale[3].${I}))`;default:throw new Error(`Not supported compoents ${u}`)}},E=B("input",t[0].dataType,t[0].dims,u),T=Z("output",t[0].dataType,i,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${E.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${$}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${T.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${g.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${b(0)}, ${b(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c}),getShaderSource:S},{inputs:[t[0],w]})},Xw=(e,t)=>{t.format==="NHWC"?Fg(e,e.inputs,t):Vg(e,e.inputs,t)}}),jg,qg,Yw,qk=V(()=>{ie(),ue(),le(),jg=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},qg=(e,t,r)=>{let n=t.simplified,i=e[0].dims,a=e[1],o=!n&&e[2],s=i,u=N.normalizeAxis(t.axis,i.length),l=N.sizeToDimension(i,u),c=N.sizeFromDimension(i,u),f=N.size(a.dims),h=o?N.size(o.dims):0;if(f!==c||o&&h!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${f} and bias size of ${h}`);let y=[];for(let E=0;E<i.length;++E)E<u?y.push(i[E]):y.push(1);let v=Ne(c),w=["type","type"],S=[{type:12,data:l},{type:1,data:c},{type:12,data:Math.floor(c/v)},{type:1,data:t.epsilon}];o&&w.push("type");let g=r>1,m=r>2,$=E=>{let T=je(e[0].dataType),C=[B("x",e[0].dataType,e[0].dims,v),B("scale",a.dataType,a.dims,v)];o&&C.push(B("bias",o.dataType,o.dims,v)),C.push(Z("output",e[0].dataType,s,v)),g&&C.push(Z("mean_data_output",1,y)),m&&C.push(Z("inv_std_output",1,y));let I=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${E.registerUniforms(I).declareVariables(...C)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${cd("f32",v)};
    var mean_square_vector = ${cd("f32",v)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Kn(T,v,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Qr("mean_vector",v)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Qr("mean_square_vector",v)} / uniforms.norm_size ${n?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Kn(T,v,"x[j + offset]")};
      let f32scale = ${Kn(T,v,"scale[j]")};
      output[j + offset] = ${C[0].type.value}((f32input ${n?"":"- mean"}) * inv_std_dev * f32scale
        ${o?`+ ${Kn(T,v,"bias[j]")}`:""}
      );
    }

    ${g?"mean_data_output[global_idx] = mean":""};
    ${m?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},b=[{dims:s,dataType:e[0].dataType}];return g&&b.push({dims:y,dataType:1}),m&&b.push({dims:y,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${v};${r};${n}`,inputDependencies:w},getRunData:()=>({outputs:b,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:S}),getShaderSource:$}},Yw=(e,t)=>{jg(e.inputs),e.compute(qg(e.inputs,t,e.outputCount))}}),Hg,Jw,Hk=V(()=>{ue(),Pc(),Dc(),Hg=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Jw=e=>{Hg(e.inputs);let t=ui.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],n=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&n<8)e.compute(Bc(e.inputs,{activation:""},t));else{let i=t[t.length-2],a=N.size(e.inputs[0].dims.slice(0,-2)),o=N.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&o===1){let s=e.inputs[0].reshape([1,a,n]),u=e.inputs[1].reshape([1,n,r]),l=[1,a,r],c=[s,u];e.compute(ts(c,{activation:""},t,l),{inputs:c})}else e.compute(ts(e.inputs,{activation:""},t))}}}),Gg,Kg,Qg,e$,t$,Gk=V(()=>{ie(),ue(),Be(),le(),Gg=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],n=r.dims.length;if(r.dims[n-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,o=e[1];if(!N.areEqual(o.dims,[t.n,i,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let s=e[2].dims;if(N.size(s)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,l=t.bits>4?t.n*i:t.n*Math.floor((i+1)/2);if(N.size(u)!==l)throw new Error("zeroPoints input size error.")}},Kg=(e,t)=>{let r=e[0].dims,n=r.length,i=r[n-2],a=t.k,o=t.n,s=r.slice(0,n-2),u=N.size(s),l=e[1].dims[2]/4,c=e[0].dataType,f=Ne(t.k),h=Ne(l),y=Ne(o),v=s.concat([i,o]),w=i>1&&o/y%2===0?2:1,S=N.size(v)/y/w,g=64,m=[],$=[u,i,a/f],b=N.convertShape(e[1].dims).slice();b.splice(-1,1,l/h),m.push(...te($)),m.push(...te(b)),m.push(...te(e[2].dims)),e.length===4&&m.push(...te(N.convertShape(e[3].dims)));let E=[u,i,o/y];m.push(...te(E));let T=C=>{let I=$.length,O=B("a",e[0].dataType,I,f),P=B("b",12,b.length,h),K=B("scales",e[2].dataType,e[2].dims.length),G=[O,P,K],Q=e.length===4?B("zero_points",12,e[3].dims.length):void 0;Q&&G.push(Q);let ce=E.length,oe=Z("output",e[0].dataType,ce,y),H=je(e[0].dataType),ae=(()=>{switch(f){case 1:return`array<${H}, 8>`;case 2:return`mat4x2<${H}>`;case 4:return`mat2x4<${H}>`;default:throw new Error(`${f}-component is not supported.`)}})(),M=()=>{let A=`
          // reuse a data
            var input_offset = ${O.indicesToOffset(`${O.type.indices}(batch, row, word_offset)`)};
            var a_data: ${ae};
            for (var j: u32 = 0; j < ${8/f}; j++) {
              a_data[j] = ${O.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let L=0;L<y*w;L++)A+=`
            b_value = ${h===1?`b${L}_data`:`b${L}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${ae}(${Array.from({length:4},(j,re)=>`${H}(b_value_lower[${re}]), ${H}(b_value_upper[${re}])`).join(", ")});
            b_dequantized_values = ${f===1?`${ae}(${Array.from({length:8},(j,re)=>`(b_quantized_values[${re}] - ${Q?`zero_point${L}`:"zero_point"}) * scale${L}`).join(", ")});`:`(b_quantized_values - ${ae}(${Array(8).fill(`${Q?`zero_point${L}`:"zero_point"}`).join(",")})) * scale${L};`};
            workgroup_shared[local_id.x * ${w} + ${Math.floor(L/y)}]${y>1?`[${L%y}]`:""} += ${Array.from({length:8/f},(j,re)=>`${f===1?`a_data[${re}] * b_dequantized_values[${re}]`:`dot(a_data[${re}], b_dequantized_values[${re}])`}`).join(" + ")};
          `;return A},W=()=>{let A=`
            var col_index = col * ${y};
            ${Q?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${H}(8);`}
            `;for(let L=0;L<y*w;L++)A+=`
            let scale${L} = ${K.getByOffset("col_index * nBlocksPerCol + block")};
            ${Q?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${Q.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${L} = ${H}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return A},J=()=>{let A=`col_index = col * ${y};`;for(let L=0;L<y*w;L++)A+=`
            let b${L}_data = ${P.getByIndices(`${P.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return A+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${ae};
            var b_dequantized_values: ${ae};`,A};return`
        var<workgroup> workgroup_shared: array<${oe.type.value}, ${w*g}>;
        ${C.declareVariables(...G,oe)}
        ${C.mainStart([g,1,1])}
          let output_indices = ${oe.offsetToIndices(`(global_idx / ${g}) * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${g}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/f};
            ${W()}
            for (var word: u32 = 0; word < ${l}; word += ${h}) {
              ${J()}
              for (var i: u32 = 0; i < ${h}; i++) {
                ${M()}
                word_offset += ${8/f};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${w}) {
            var output_value: ${oe.type.value} = ${oe.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${g}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${w};
            }
            ${oe.setByIndices(`${oe.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${f};${h};${y};${w};${g}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:v,dataType:c}],dispatchGroup:{x:S},programUniforms:m}),getShaderSource:T}},Qg=(e,t)=>{let r=e[0].dims,n=r.length,i=r[n-2],a=t.k,o=t.n,s=r.slice(0,n-2),u=N.size(s),l=e[1].dims[2]/4,c=e[0].dataType,f=Ne(t.k),h=Ne(l),y=s.concat([i,o]),v=128,w=o%8===0?8:o%4===0?4:1,S=v/w,g=S*h*8,m=g/f,$=g/t.blockSize,b=N.size(y)/w,E=[],T=[u,i,a/f],C=N.convertShape(e[1].dims).slice();C.splice(-1,1,l/h),E.push(...te(T)),E.push(...te(C)),E.push(...te(e[2].dims)),e.length===4&&E.push(...te(N.convertShape(e[3].dims)));let I=[u,i,o];E.push(...te(I));let O=P=>{let K=T.length,G=B("a",e[0].dataType,K,f),Q=B("b",12,C.length,h),ce=B("scales",e[2].dataType,e[2].dims.length),oe=[G,Q,ce],H=e.length===4?B("zero_points",12,e[3].dims.length):void 0;H&&oe.push(H);let ae=I.length,M=Z("output",e[0].dataType,ae),W=je(e[0].dataType),J=()=>{switch(f){case 1:return`
          let a_data0 = vec4<${W}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${W}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${W}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${W}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${f}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${G.type.value}, ${m}>;
        var<workgroup> inter_results: array<array<${M.type.value}, ${S}>, ${w}>;
        ${P.declareVariables(...oe,M)}
        ${P.mainStart([S,w,1])}
          let output_indices = ${M.offsetToIndices(`workgroup_index * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${$} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${m};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${m}; a_offset += ${v})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${G.getByIndices(`${G.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${G.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${$} + local_id.x;
            ${H?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${H.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${W}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${W}(8);`}
            let scale = ${ce.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${Q.getByIndices(`${Q.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/f};
            for (var i: u32 = 0; i < ${h}; i++) {
              ${J()}
              let b_value = ${h===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${W}>(${Array.from({length:4},(A,L)=>`${W}(b_value_lower[${L}]), ${W}(b_value_upper[${L}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${W}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(A,L)=>`${`dot(a_data${L}, b_dequantized_values[${L}])`}`).join(" + ")};
              word_offset += ${8/f};
            }
            workgroupBarrier();
          }

          if (local_idx < ${w}) {
            var output_value: ${M.type.value} = ${M.type.value}(0);
            for (var b = 0u; b < ${S}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${M.setByIndices(`${M.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${f};${h};${S};${w}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:c}],dispatchGroup:{x:b},programUniforms:E}),getShaderSource:O}},e$=(e,t)=>{Gg(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Qg(e.inputs,t)):e.compute(Kg(e.inputs,t))},t$=e=>ve(e)}),Zg,Xg,Yg,Jg,e0,t0,r0,n0,r$,Kk=V(()=>{ie(),ue(),le(),Zg=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Xg=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
            k = i32(${e.indicesGet("indices",i)}) - ${Y("uniforms.pads",i,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${Y("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${Y("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${n}
            value = x[offset];
          }
      `},Yg=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${Y("uniforms.pads",i,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${Y("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${Y("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${Y("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},Jg=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${Y("uniforms.pads",i,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${Y("uniforms.x_shape",i,t)})) {
                  k = i32(${Y("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${Y("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},e0=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${Y("uniforms.pads",i,r)};
                if (k < 0)  {
                  k += i32(${Y("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${Y("uniforms.x_shape",i,t)})) {
                  k -= i32(${Y("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${Y("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},t0=(e,t,r)=>{switch(r.mode){case 0:return Xg(e,t,r.pads.length);case 1:return Yg(e,t,r.pads.length);case 2:return Jg(e,t,r.pads.length);case 3:return e0(e,t,r.pads.length);default:throw new Error("Invalid mode")}},r0=(e,t)=>{let r=N.padShape(e[0].dims.slice(),t.pads),n=e[0].dims,i=N.size(r),a=[{type:12,data:i},{type:6,data:t.pads}],o=e.length>=3&&e[2].data;t.mode===0&&a.push({type:o?e[2].dataType:1,data:t.value}),a.push(...te(e[0].dims,r));let s=["rank"],u=l=>{let c=Z("output",e[0].dataType,r.length),f=B("x",e[0].dataType,n.length),h=f.type.value,y=t0(c,n.length,t),v=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&v.push({name:"constant_value",type:o?h:"f32"}),`
            ${l.registerUniforms(v).declareVariables(f,c)}
            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${h}(0);
            ${y}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${o}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(N.size(r)/64)},programUniforms:a}),getShaderSource:u}},n0=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),n=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let s=e[3].getBigInt64Array();for(let u=0;u<s.length;u++)a[Number(s[u])]=Number(r[u]),a[Number(s[u])+i]=Number(r[u+s.length])}else r.forEach((s,u)=>a[Number(u)]=Number(s));let o=[];return a.forEach(s=>o.push(s)),{mode:t.mode,value:n,pads:o}}else return t},r$=(e,t)=>{Zg(e.inputs);let r=n0(e.inputs,t);e.compute(r0(e.inputs,r),{inputs:[0]})}}),Ni,Xu,Yu,Ju,el,i0,a0,tl,rl,n$,i$,nl,a$,o$,il,s$,u$,l$,d$,Qk=V(()=>{Zt(),ie(),ue(),le(),Ni=e=>{if(xe.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Xu=(e,t,r)=>{let n=t.format==="NHWC",i=e.dims.slice();n&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,"dilations"),o=t.kernelShape.slice(),s=t.strides.slice(),u=a?t.dilations.slice():[],l=t.pads.slice();Jo.adjustPoolAttributes(r,i,o,s,u,l);let c=Jo.computePoolOutputShape(r,i,s,u,o,l,t.autoPad),f=Object.assign({},t);a?Object.assign(f,{kernelShape:o,strides:s,pads:l,dilations:u,cacheKey:t.cacheKey}):Object.assign(f,{kernelShape:o,strides:s,pads:l,cacheKey:t.cacheKey});let h=c.slice();return h.push(h.splice(1,1)[0]),[f,n?h:c]},Yu=(e,t)=>{let r=t.format==="NHWC",n=N.size(e),i=N.size(t.kernelShape),a=[{type:12,data:n},{type:12,data:i}],o=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let s=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],l=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],f=!!(l+c);a.push({type:12,data:s},{type:12,data:u},{type:12,data:l},{type:12,data:c}),o.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let h=!1;if(t.kernelShape.length===2){let y=t.kernelShape[t.kernelShape.length-2],v=t.strides[t.strides.length-2],w=t.pads[t.pads.length/2-2],S=t.pads[t.pads.length-2];h=!!(w+S),a.push({type:12,data:y},{type:12,data:v},{type:12,data:w},{type:12,data:S}),o.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,o,!0,f,h]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let s=N.computeStrides(t.kernelShape);a.push({type:12,data:s},{type:12,data:t.pads},{type:12,data:t.strides}),o.push({name:"kernelStrides",type:"u32",length:s.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((l,c)=>l+c);return[a,o,!!u,!1,!1]}},Ju=(e,t,r,n,i,a,o,s,u,l,c,f)=>{let h=i.format==="NHWC",y=t.type.value,v=Z("output",t.type.tensor,n);if(i.kernelShape.length<=2){let w="",S="",g="",m=r-(h?2:1);if(c?w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${m}] = indices[${m}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${m}] < 0 || xIndices[${m}]
                      >= uniforms.x_shape[${m}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`:w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${m}] = indices[${m}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`,i.kernelShape.length===2){let $=r-(h?3:2);f?S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${$}] = indices[${$}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${$}] < 0 || xIndices[${$}] >= uniforms.x_shape[${$}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${$}] = indices[${$}] * uniforms.sh - uniforms.phStart + j;
                `,g=`
              }
            `}return`
            ${e.registerUniforms(u).declareVariables(t,v)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${v.offsetToIndices("global_idx")};
              var xIndices = ${v.offsetToIndices("global_idx")};

              var value = ${y}(${s});
              var pad = 0;
              ${S}
              ${w}
              ${g}
              ${o}

              output[global_idx] = value;
            }`}else{if(h)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let w=i.kernelShape.length,S=i.pads.length,g="";return l?g=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${a}
              }`:g=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${a}
            `,`
            ${e.registerUniforms(u).declareVariables(t,v)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${v.offsetToIndices("global_idx")};
              var xIndices = ${v.offsetToIndices("global_idx")};

              var offsets: array<u32, ${w}>;

              var value = ${y}(${s});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${w-1}u; j++) {
                  offsets[j] = offset / ${Y("uniforms.kernelStrides","j",w)};
                  offset -= offsets[j] * ${Y("uniforms.kernelStrides","j",w)};
                }
                offsets[${w-1}] = offset;

                isPad = false;
                for (var j = ${r-w}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${Y("uniforms.strides",`j - ${r-w}u`,w)}
                    + offsets[j - ${r-w}u] - ${Y("uniforms.pads","j - 2u",S)};
                  ${g}
              }
              ${o}

              output[global_idx] = value;
            }`}},el=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,i0=e=>`${el(e)};${e.countIncludePad}`,a0=e=>`${el(e)};${e.storageOrder};${e.dilations}`,tl=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),rl=(e,t,r,n)=>{let[i,a]=Xu(t,n,r),o=B("x",t.dataType,t.dims.length),s=o.type.value,u="value += x_val;",l="";i.countIncludePad?l+=`value /= ${s}(uniforms.kernelSize);`:l+=`value /= ${s}(i32(uniforms.kernelSize) - pad);`;let[c,f,h,y,v]=Yu(a,i);c.push(...te(t.dims,a));let w=["rank"];return{name:e,shaderCache:{hint:`${n.cacheKey};${h};${y};${v}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(N.size(a)/64)},programUniforms:c}),getShaderSource:S=>Ju(S,o,t.dims.length,a.length,i,u,l,0,f,h,y,v)}},n$=e=>{let t=e.count_include_pad!==0,r=tl(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let n={countIncludePad:t,...r,cacheKey:""};return{...n,cacheKey:i0(n)}},i$=(e,t)=>{Ni(e.inputs),e.compute(rl("AveragePool",e.inputs[0],!1,t))},nl={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},a$=e=>{let t=e.format;return{format:t,...nl,cacheKey:t}},o$=(e,t)=>{Ni(e.inputs),e.compute(rl("GlobalAveragePool",e.inputs[0],!0,t))},il=(e,t,r,n)=>{let[i,a]=Xu(t,n,r),o=`
      value = max(x_val, value);
    `,s="",u=B("x",t.dataType,t.dims.length),l=["rank"],[c,f,h,y,v]=Yu(a,i);return c.push(...te(t.dims,a)),{name:e,shaderCache:{hint:`${n.cacheKey};${h};${y};${v}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(N.size(a)/64)},programUniforms:c}),getShaderSource:w=>Ju(w,u,t.dims.length,a.length,i,o,s,t.dataType===10?-65504:-1e5,f,h,y,v)}},s$=(e,t)=>{Ni(e.inputs),e.compute(il("MaxPool",e.inputs[0],!1,t))},u$=e=>{let t=e.storage_order,r=e.dilations,n=tl(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:r,...n,cacheKey:""};return{...i,cacheKey:a0(i)}},l$=e=>{let t=e.format;return{format:t,...nl,cacheKey:t}},d$=(e,t)=>{Ni(e.inputs),e.compute(il("GlobalMaxPool",e.inputs[0],!0,t))}}),o0,s0,c$,p$,Zk=V(()=>{ie(),ue(),Be(),le(),o0=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,n)=>r===e[2].dims[n]).reduce((r,n)=>r&&n,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,a)=>a===t.axis||i===e[0].dims[a]).reduce((i,a)=>i&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],n=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/n)||t.blockSize>Math.ceil(r/(n-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},s0=(e,t)=>{let r=N.normalizeAxis(t.axis,e[0].dims.length),n=e[0].dataType,i=n===3,a=e[0].dims,o=e[1].dataType,s=N.size(a),u=n===3||n===2,l=u?[Math.ceil(N.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,f=e.length>2?e[2]:void 0,h=f?u?[Math.ceil(N.size(f.dims)/4)]:f.dims:void 0,y=c.length===0||c.length===1&&c[0]===1,v=y===!1&&c.length===1,w=Ne(s),S=y&&(!u||w===4),g=S?w:1,m=S&&!u?w:1,$=B("input",u?12:n,l.length,m),b=B("scale",o,c.length),E=f?B("zero_point",u?12:n,h.length):void 0,T=Z("output",o,a.length,g),C=[$,b];E&&C.push(E);let I=[l,c];f&&I.push(h);let O=[{type:12,data:s/g},{type:12,data:r},{type:12,data:t.blockSize},...te(...I,a)],P=K=>{let G=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${K.registerUniforms(G).declareVariables(...C,T)}
      ${K.mainStart()}
          ${K.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${T.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${$.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${g===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${$.getByOffset("global_idx")};`};

          // Set scale input
          ${y?`let scale_value= ${b.getByOffset("0")}`:v?`
            let scale_index = ${T.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${b.getByOffset("scale_index")};`:`
            var scale_indices: ${b.type.indices} = output_indices;
            let index = ${b.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${b.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${b.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${E?y?u?`
                let zero_point_input = ${E.getByOffset("0")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${E.getByOffset("0")}`:v?u?`
                let zero_point_index = ${T.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${E.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${T.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${E.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${b.indicesToOffset("scale_indices")};
                let zero_point_input = ${E.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${E.getByIndices("scale_indices")};`:`let zero_point_value = ${u?i?"i32":"u32":$.type.value}(0);`};
      // Compute and write output
      ${T.setByOffset("global_idx",`${T.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:E?["rank","rank","rank"]:["rank","rank"]},getShaderSource:P,getRunData:()=>({outputs:[{dims:a,dataType:o}],dispatchGroup:{x:Math.ceil(s/g/64),y:1,z:1},programUniforms:O})}},c$=(e,t)=>{o0(e.inputs,t),e.compute(s0(e.inputs,t))},p$=e=>ve({axis:e.axis,blockSize:e.blockSize})}),u0,l0,f$,Xk=V(()=>{Zt(),ie(),le(),u0=(e,t,r)=>{let n=e===t,i=e<t&&r<0,a=e>t&&r>0;if(n||i||a)throw new Error("Range these inputs' contents are invalid.")},l0=(e,t,r,n)=>{let i=Math.abs(Math.ceil((t-e)/r)),a=[i],o=i,s=[{type:12,data:o},{type:n,data:e},{type:n,data:r},...te(a)],u=l=>{let c=Z("output",n,a.length),f=c.type.value,h=[{name:"outputSize",type:"u32"},{name:"start",type:f},{name:"delta",type:f}];return`
        ${l.registerUniforms(h).declareVariables(c)}
        ${l.mainStart()}
        ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${f}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${n}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:a,dataType:n}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:s})}},f$=e=>{let t=0,r=0,n=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],n=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],n=e.inputs[2].getFloat32Array()[0]),xe.webgpu.validateInputContent&&u0(t,r,n),e.compute(l0(t,r,n,e.inputs[0].dataType),{inputs:[]})}}),d0,al,ol,c0,h$,m$,Yk=V(()=>{ie(),ue(),Be(),le(),d0=(e,t,r,n)=>{if(e!=="none"&&n!=="i32"&&n!=="u32"&&n!=="f32")throw new Error(`Input ${n} is not supported with reduction ${e}.`);let i=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,a=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return n==="i32"||n==="u32"?`atomicAdd(&${t}, bitcast<${n}>(${r}));`:`
              ${i}bitcast<${n}>(oldValue) + (${r})${a}`;case"max":return n==="i32"||n==="u32"?`atomicMax(&${t}, bitcast<${n}>(${r}));`:`
                ${i}max(bitcast<f32>(oldValue), (${r}))${a}`;case"min":return n==="i32"||n==="u32"?`atomicMin(&${t}, bitcast<${n}>(${r}));`:`${i}min(bitcast<${n}>(oldValue), (${r}))${a}`;case"mul":return`${i}(bitcast<${n}>(oldValue) * (${r}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},al=(e,t)=>`${e===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[${t?"i - indices_start":"i"}];
    let dim_value = uniforms.output_shape[${t?"i - indices_start":"i"} + uniforms.last_index_dimension];`}
    
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));`,ol=(e,t,r)=>`for (var i = 0u; i < uniforms.num_updates_elements; i++) {
        let value = updates[uniforms.num_updates_elements * ${r?"global_idx":"idx"} + i];
        ${d0(e.reduction,"output[data_offset + i]","value",t)}
      }`,c0=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r,a=1,o=Math.ceil(N.size(n)/a),s=n[n.length-1],u=N.sizeFromDimension(r,s),l=N.sizeFromDimension(n,0)/s,c=[{type:12,data:o},{type:12,data:s},{type:12,data:u},...te(e[1].dims,e[2].dims,i)],f=h=>{let y=B("indices",e[1].dataType,e[1].dims.length),v=B("updates",e[2].dataType,e[2].dims.length,a),w=t.reduction!=="none"&&t.reduction!==""?Fv("output",e[0].dataType,i.length):Z("output",e[0].dataType,i.length,a);return`
      ${h.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(y,v,w)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var hasDuplicates = false;
  if (${t.reduction==="none"}) {
    for (var i = 0; i < ${l}; i = i + 1) {
      for (var j = i + 1; j < ${l}; j = j + 1) {
        var index_i = i32(indices[i].x);
        var index_j = i32(indices[j].x);
        if (index_i == index_j) {
          hasDuplicates = true;
          break;
        }
      }
      if (hasDuplicates) {
        break;
      }
    }
  }

  if (${t.reduction==="none"} && hasDuplicates) {
    if (global_idx != 0u) {
      return;
    }
    // Process each index-update pair individually when duplicates exist
    for (var idx = 0u; idx < ${l}u; idx++) {
      var data_offset = 0u;
      for (var i = 0u; i < uniforms.last_index_dimension; i++) {
        var index = i32(indices[idx * uniforms.last_index_dimension + i].x);
        ${al(r.length,!1)}
      }
      ${ol(t,w.type.value,!1)}
    }
    return;
  }

  var data_offset = 0u;
  var indices_start = uniforms.last_index_dimension * global_idx;
  var indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${al(r.length,!0)}
  }
  ${ol(t,w.type.value,!0)}
  }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:c}),getShaderSource:f}},h$=e=>ve({reduction:e.reduction}),m$=(e,t)=>{e.compute(c0(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),p0,f0,h0,sl,m0,g0,y0,v0,_0,w0,$0,x0,ul,b0,k0,S0,E0,T0,g$,y$,Jk=V(()=>{ie(),ue(),Be(),le(),p0=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},f0=(e,t,r)=>{t.every(i=>i>=0&&i<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let n=new Array(r).fill(1);return t.forEach((i,a)=>n[i]=e[a]),n},h0=(e,t,r,n,i,a)=>{let[o,s,u]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(o>0&&e.length>o&&e[o].dims.length>0)e[o].getFloat32Array().forEach(c=>a.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(s>0&&e.length>s&&e[s].dims.length===1&&e[s].dims[0]>0){if(e[s].getFloat32Array().forEach(c=>n.push(c)),n.length!==0&&n.length!==l&&r>=18&&n.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");p0(n,t),t.axes.length>0&&f0(n,t.axes,l).forEach((c,f)=>n[f]=c)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(c=>i.push(Number(c))),i.length!==0&&i.length!==l&&r>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof n<"u"&&typeof i<"u"&&n.length>0&&i.length>l)throw new Error("Resize requires only of scales or sizes to be specified")},sl=(e,t,r,n)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${n}(big / (${r}));
  let fract = ${n}(big % (${r})) / ${n}(${r});
  return whole + fract;
`,m0=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${sl("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${sl("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",g0=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",y0=(e,t,r)=>{let n=new Array(r).fill(0).concat(new Array(r).fill(1)),i=e.length===0?n:e.slice();return t.length>0?(t.forEach((a,o)=>{n[a]=i[o],n[o+r]=i[t.length+o]}),n):i},v0=(e,t,r,n)=>{let i=[];if(r.length>0)if(n.length>0){if(e.forEach(a=>i.push(a)),Math.max(...n)>e.length)throw new Error("axes is out of bound");n.forEach((a,o)=>i[a]=r[o])}else r.forEach(a=>i.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((a,o)=>Math.round(a*t[o]))}return i},_0=(e,t,r)=>{let n=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return r.axes.length>0?(r.axes.forEach(a=>t[a]=n),r.axes.forEach(a=>i[a]=Math.round(e[a]*t[a]))):(t.fill(n,0,t.length),i.forEach((a,o)=>i[o]=Math.round(a*t[o]))),i},w0=(e,t,r,n,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${Y("uniforms.scales","i",n)};
        var roi_low = ${Y("uniforms.roi","i",i)};
        var roi_hi = ${Y("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${Y("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${Y("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,$0=(e,t,r,n,i,a,o)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${Y("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${Y("uniforms.roi","i",a)};
          var roi_hi = ${Y("uniforms.roi",`i + ${r.length}`,a)};
          var input_shape_i = ${Y("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${Y("uniforms.output_shape","i",n.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${o} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,x0=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${Y("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,ul=(e,t,r,n)=>e.rank>n?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",b0=(e,t,r,n,i)=>{let[a,o,s,u]=r.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",o,`max(0, min(row, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",s,`max(0, min(col, ${r[s]} - 1))`)};
      ${ul(e,u,a,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${l} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${l} = originalIndices[${o}];
      var col:${l} = originalIndices[${s}];
      ${n?`if (row < 0 || row > (${r[o]} - 1) || col < 0 || col > (${r[s]} - 1)) {
        return ${i};
      }`:""};
      row = max(0, min(row, ${r[o]} - 1));
      col = max(0, min(col, ${r[s]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${u}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${a}])`:"0"};
      var x11: ${l} = getInputValue(batch, channel, row1, col1);
      var x12: ${l} = getInputValue(batch, channel, row1, col2);
      var x21: ${l} = getInputValue(batch, channel, row2, col1);
      var x22: ${l} = getInputValue(batch, channel, row2, col2);
      var dx1: ${l} = abs(row - ${l}(row1));
      var dx2: ${l} = abs(${l}(row2) - row);
      var dy1: ${l} = abs(col - ${l}(col1));
      var dy2: ${l} = abs(${l}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},k0=(e,t,r,n,i,a,o,s,u,l)=>{let c=r.length===2,[f,h]=c?[0,1]:[2,3],y=e.type.value,v=w=>{let S=w===f?"row":"col";return`
      fn ${S}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${y} {
        var output_index = ${t.indicesGet("output_indices",w)};
        var originalIdx: ${y} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[w]},
        ${n[w]}, ${r[w]}, ${a[w]}, ${a[w]} + ${r.length});
        var fractOriginalIdx: ${y} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${s} && (originalIdx < 0 || originalIdx > (${r[w]} - 1))) {
          return ${u};
        }
        var data: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${S}: ${y} = originalIdx + ${y}(i);
          if (${S} < 0 || ${S} >= ${r[w]}) {
            ${l?`coefs[i + 1] = 0.0;
                        continue;`:s?`return ${u};`:`${S} = max(0, min(${S}, ${r[w]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",w,`u32(${S})`)};
          data[i + 1] = ${w===f?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${v(f)};
    ${v(h)};
  fn getCubicInterpolationCoefs(s: ${y}) -> array<${y}, 4> {
    var absS = abs(s);
    var coeffs: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${y} = 1.0 - absS;
    var twoMinusAbsS: ${y} = 2.0 - absS;
    var onePlusAbsS: ${y} = 1.0 + absS;
    coeffs[0] = ((${o} * onePlusAbsS - 5 * ${o}) * onePlusAbsS + 8 * ${o}) * onePlusAbsS - 4 * ${o};
    coeffs[1] = ((${o} + 2) * absS - (${o} + 3)) * absS * absS + 1;
    coeffs[2] = ((${o} + 2) * oneMinusAbsS - (${o} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${o} * twoMinusAbsS - 5 * ${o}) * twoMinusAbsS + 8 * ${o}) * twoMinusAbsS - 4 * ${o};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${y}, 4>, coefs: array<${y}, 4>) -> ${y} {
    var coefsSum: ${y} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${y} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},S0=(e,t,r,n,i)=>{let[a,o,s,u,l]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",o,`max(0, min(depth, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",s,`max(0, min(height, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${r[u]} - 1))`)};
      ${ul(e,l,a,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${c} = originalIndices[${o}];
      var height:${c} = originalIndices[${s}];
      var width:${c} = originalIndices[${u}];
      ${n?`if (depth < 0 || depth > (${r[o]} - 1) || height < 0 || height > (${r[s]} - 1) || width < 0 || (width > ${r[u]} - 1)) {
      return ${i};
        }`:""};

    depth = max(0, min(depth, ${r[o]} - 1));
      height = max(0, min(height, ${r[s]} - 1));
      width = max(0, min(width, ${r[u]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${a}])`:"0"};

      var x111: ${c} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${c} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${c} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${c} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${c} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${c} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${c} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${c} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${c} = abs(depth - ${c}(depth1));
      var dx2: ${c} = abs(${c}(depth2) - depth);
      var dy1: ${c} = abs(height - ${c}(height1));
      var dy2: ${c} = abs(${c}(height2) - height);
      var dz1: ${c} = abs(width - ${c}(width1));
      var dz2: ${c} = abs(${c}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},E0=(e,t,r,n,i,a)=>{let o=e.dims,s=y0(a,t.axes,o.length),u=v0(o,n,i,t.axes),l=n.slice();n.length===0&&(l=o.map((m,$)=>m===0?1:u[$]/m),t.keepAspectRatioPolicy!=="stretch"&&(u=_0(o,l,t)));let c=Z("output",e.dataType,u.length),f=B("input",e.dataType,o.length),h=N.size(u),y=o.length===u.length&&o.every((m,$)=>m===u[$]),v=t.coordinateTransformMode==="tf_crop_and_resize",w=t.extrapolationValue,S=f.type.value,g=m=>`
      ${y?"":`
      ${m0(t.coordinateTransformMode,S)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${x0(f,o)};
              ${g0(t.nearestMode,r,S)};
              ${$0(f,c,o,u,l.length,s.length,v)};
              `;case"linear":return`
              ${w0(c,o,u,l.length,s.length)};
              ${(()=>{if(o.length===2||o.length===4)return`${b0(f,c,o,v,w)}`;if(o.length===3||o.length===5)return`${S0(f,c,o,v,w)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(o.length===2||o.length===4)return`${k0(f,c,o,u,l,s,t.cubicCoeffA,v,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${m.registerUniform("output_size","u32").registerUniform("scales","f32",l.length).registerUniform("roi","f32",s.length).declareVariables(f,c)}
      ${m.mainStart()}
        ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${y?"output[global_idx] = input[global_idx];":`
        let output_indices = ${c.offsetToIndices("global_idx")};
        var input_indices: ${f.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${f.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${o.length===2||o.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${l.length>0?t.mode==="cubic"?l:l.length:""}|${i.length>0?i:""}|${s.length>0?s:""}|${y}|${t.mode==="nearest"?o.length:o}`,inputDependencies:["rank"]},getShaderSource:g,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},{type:1,data:l},{type:1,data:s},...te(o,u)]})}},T0=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},g$=(e,t)=>{let r=[],n=[],i=[],a=T0(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");h0(e.inputs,t,a,r,n,i),e.compute(E0(e.inputs[0],t,a,r,n,i),{inputs:[0]})},y$=e=>{let t=e.antialias,r=e.axes,n=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,o=e.extrapolationValue,s=e.keepAspectRatioPolicy,u=e.mode,l=e.nearestMode===""?"simple":e.nearestMode;return ve({antialias:t,axes:r,coordinateTransformMode:n,cubicCoeffA:i,excludeOutside:a,extrapolationValue:o,keepAspectRatioPolicy:s,mode:u,nearestMode:l})}}),C0,I0,v$,eS=V(()=>{ie(),ue(),le(),C0=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],n=e[2];if(t.dataType!==r.dataType||t.dataType!==n.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(n.dims.length!==1)throw new Error("Gamma must be 1D");if(n.dims[n.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let o=e[3];if(o.dims.length!==1)throw new Error("Beta must be 1D");if(o.dims[o.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let o=e[4];if(o.dims.length!==1)throw new Error("Bias must be 1D");if(o.dims[o.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},I0=(e,t,r,n)=>{let i=t.simplified,a=e[0].dims,o=N.size(a),s=a,u=o,l=a.slice(-1)[0],c=n?a.slice(0,-1).concat(1):[],f=!i&&e.length>3,h=e.length>4,y=n&&r>1,v=n&&r>2,w=r>3,S=64,g=Ne(l),m=[{type:12,data:u},{type:12,data:g},{type:12,data:l},{type:1,data:t.epsilon}],$=E=>{let T=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],C=[B("x",e[0].dataType,e[0].dims,g),B("skip",e[1].dataType,e[1].dims,g),B("gamma",e[2].dataType,e[2].dims,g)];f&&C.push(B("beta",e[3].dataType,e[3].dims,g)),h&&C.push(B("bias",e[4].dataType,e[4].dims,g)),C.push(Z("output",e[0].dataType,s,g)),y&&C.push(Z("mean_output",1,c)),v&&C.push(Z("inv_std_output",1,c)),w&&C.push(Z("input_skip_bias_sum",e[0].dataType,s,g));let I=je(e[0].dataType),O=je(1,g);return`

      ${E.registerUniforms(T).declareVariables(...C)}
      var<workgroup> sum_shared : array<${O}, ${S}>;
      var<workgroup> sum_squared_shared : array<${O}, ${S}>;

      ${E.mainStart([S,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${S};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${S};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${S-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${h?"bias[offset1d + i]":I+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${w?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Kn(I,g,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${S};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${Qr("sum",g)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Qr("square_sum",g)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${y?"mean_output[global_idx] = mean;":""}
        ${v?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${I}(mean)`}) *
            ${I}(inv_std_dev) * gamma[offset1d + i]
            ${f?"+ beta[offset1d + i]":""};
        }
      }`},b=[{dims:s,dataType:e[0].dataType}];return r>1&&b.push({dims:c,dataType:1}),r>2&&b.push({dims:c,dataType:1}),r>3&&b.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${g};${y};${v};${w}`,inputDependencies:e.map((E,T)=>"type")},getShaderSource:$,getRunData:()=>({outputs:b,dispatchGroup:{x:Math.ceil(u/l)},programUniforms:m})}},v$=(e,t)=>{C0(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(I0(e.inputs,t,e.outputCount,!1),{outputs:r})}}),z0,Ai,O0,ll,N0,A0,_$,w$,tS=V(()=>{ie(),ue(),Be(),le(),z0=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,n)=>{if(e[n+1].dataType!==6&&e[n+1].dataType!==7)throw new Error(`Input ${n} must be an array of int32 or int64`)})},Ai=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(n=>r.push(Number(n)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(n=>r.push(Number(n)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},O0=(e,t)=>{if(e.length>1){let r=Ai(e,1),n=Ai(e,2),i=Ai(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),ve({starts:r,ends:n,axes:i})}else return t},ll=(e,t,r,n,i)=>{let a=e;return e<0&&(a+=r[n[t]]),i[t]<0?Math.max(0,Math.min(a,r[n[t]]-1)):Math.max(0,Math.min(a,r[n[t]]))},N0=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${Y("uniforms.input_shape","i",r.length)};
            let steps_i = ${Y("uniforms.steps","i",r.length)};
            let signs_i = ${Y("uniforms.signs","i",r.length)};
            let starts_i = ${Y("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,A0=(e,t)=>{let r=e[0].dims,n=N.size(r),i=t.axes.length>0?N.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],a=Ai(e,4);a.forEach(g=>g!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(i.length).fill(1));let o=t.starts.map((g,m)=>ll(g,m,r,i,a)),s=t.ends.map((g,m)=>ll(g,m,r,i,a));if(i.length!==o.length||i.length!==s.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==r.length)for(let g=0;g<r.length;++g)i.includes(g)||(o.splice(g,0,0),s.splice(g,0,r[g]),a.splice(g,0,1));let u=a.map(g=>Math.sign(g));a.forEach((g,m,$)=>{if(g<0){let b=(s[m]-o[m])/g,E=o[m],T=E+b*a[m];o[m]=T,s[m]=E,$[m]=-g}});let l=r.slice(0);i.forEach((g,m)=>{l[g]=Math.ceil((s[g]-o[g])/a[g])});let c={dims:l,dataType:e[0].dataType},f=Z("output",e[0].dataType,l.length),h=B("input",e[0].dataType,e[0].dims.length),y=N.size(l),v=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:o.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:a.length}],w=[{type:12,data:y},{type:12,data:o},{type:6,data:u},{type:12,data:a},...te(e[0].dims,l)],S=g=>`
      ${g.registerUniforms(v).declareVariables(h,f)}
        ${N0(h,f,r)}
        ${g.mainStart()}
          ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${f.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${f.setByOffset("global_idx",h.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${o.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:w})}},_$=(e,t)=>{z0(e.inputs,t);let r=O0(e.inputs,t);e.compute(A0(e.inputs,r),{inputs:[0]})},w$=e=>{let t=e.starts,r=e.ends,n=e.axes;return ve({starts:t,ends:r,axes:n})}}),R0,M0,$$,x$,rS=V(()=>{ie(),ue(),Be(),Jr(),le(),R0=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},M0=(e,t)=>{let r=e.inputs[0],n=r.dims,i=N.size(n),a=n.length,o=N.normalizeAxis(t.axis,a),s=o<n.length-1,u,l=[];s?(l=Array.from({length:a},(C,I)=>I),l[o]=a-1,l[a-1]=o,u=e.compute(xt(r,l),{inputs:[r],outputs:[-1]})[0]):u=r;let c=u.dims,f=c[a-1],h=i/f,y=Ne(f),v=f/y,w=64;h===1&&(w=256);let S=(C,I)=>I===4?`max(max(${C}.x, ${C}.y), max(${C}.z, ${C}.w))`:I===2?`max(${C}.x, ${C}.y)`:I===3?`max(max(${C}.x, ${C}.y), ${C}.z)`:C,g=B("x",u.dataType,u.dims,y),m=Z("result",u.dataType,u.dims,y),$=g.type.value,b=je(u.dataType)==="f32"?`var threadMax = ${$}(-3.402823e+38f);`:`var threadMax = ${$}(-65504.0h);`,E=C=>`
      var<workgroup> rowMaxShared : ${$};
      var<workgroup> rowSumShared : ${$};
      var<workgroup> threadShared : array<${$}, ${w}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${$} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${$}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${C.registerUniform("packedCols","i32").declareVariables(g,m)}
      ${C.mainStart(w)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${w};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${b}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${$}(${S("threadShared[0]",y)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${$}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${$}(${Qr("threadShared[0]",y)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,T=e.compute({name:"Softmax",shaderCache:{hint:`${y};${w}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:u.dataType}],dispatchGroup:{x:h},programUniforms:[{type:6,data:v}]}),getShaderSource:E},{inputs:[u],outputs:[s?-1:0]})[0];s&&e.compute(xt(T,l),{inputs:[T]})},$$=(e,t)=>{R0(e.inputs),M0(e,t)},x$=e=>ve({axis:e.axis})}),dl,B0,P0,D0,b$,nS=V(()=>{ie(),ue(),le(),dl=e=>Array.from(e.getBigInt64Array(),Number),B0=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(dl(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},P0=(e,t)=>{let r=[];for(let n=0;n<e.length;++n)r.push(e[n]*t[n]);return r},D0=(e,t)=>{let r=e[0].dims,n=t??dl(e[1]),i=P0(r,n),a=N.size(i),o=e[0].dataType,s=B("input",o,r.length),u=Z("output",o,i.length),l=c=>`
      const inputShape = ${s.indices(...r)};
      ${c.registerUniform("output_size","u32").declareVariables(s,u)}
      ${c.mainStart()}
      ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${u.offsetToIndices("global_idx")};
      var input_indices: ${s.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${s.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${u.indicesGet("output_indices","i")}  % input_dim_i;

        ${s.indicesSet("input_indices","i","input_dim_value")}
      }
      ${u.setByOffset("global_idx",s.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${n}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...te(e[0].dims,i)]}),getShaderSource:l}},b$=e=>{B0(e.inputs),e.compute(D0(e.inputs),{inputs:[0]})}}),L0,U0,k$,iS=V(()=>{ie(),ue(),le(),L0=(e,t,r,n,i)=>{let a=Z("output_data",i,r.length,4),o=B("a_data",t[1].dataType,t[1].dims.length,4),s=B("b_data",t[2].dataType,t[2].dims.length,4),u=B("c_data",t[0].dataType,t[0].dims.length,4),l,c=(f,h,y)=>`select(${h}, ${f}, ${y})`;if(!n)l=a.setByOffset("global_idx",c(o.getByOffset("global_idx"),s.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let f=(h,y,v="")=>{let w=`a_data[index_a${y}][component_a${y}]`,S=`b_data[index_b${y}][component_b${y}]`,g=`bool(c_data[index_c${y}] & (0xffu << (component_c${y} * 8)))`;return`
            let output_indices${y} = ${a.offsetToIndices(`global_idx * 4u + ${y}u`)};
            let offset_a${y} = ${o.broadcastedIndicesToOffset(`output_indices${y}`,a)};
            let offset_b${y} = ${s.broadcastedIndicesToOffset(`output_indices${y}`,a)};
            let offset_c${y} = ${u.broadcastedIndicesToOffset(`output_indices${y}`,a)};
            let index_a${y} = offset_a${y} / 4u;
            let index_b${y} = offset_b${y} / 4u;
            let index_c${y} = offset_c${y} / 4u;
            let component_a${y} = offset_a${y} % 4u;
            let component_b${y} = offset_b${y} % 4u;
            let component_c${y} = offset_c${y} % 4u;
            ${h}[${y}] = ${v}(${c(w,S,g)});
          `};i===9?l=`
            var data = vec4<u32>(0);
            ${f("data",0,"u32")}
            ${f("data",1,"u32")}
            ${f("data",2,"u32")}
            ${f("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:l=`
            ${f("output_data[global_idx]",0)}
            ${f("output_data[global_idx]",1)}
            ${f("output_data[global_idx]",2)}
            ${f("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(u,o,s,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${l}
      }`},U0=e=>{let t=e[1].dims,r=e[2].dims,n=e[0].dims,i=e[1].dataType,a=!(N.areEqual(t,r)&&N.areEqual(r,n)),o=t,s=N.size(t);if(a){let l=ui.calcShape(ui.calcShape(t,r,!1),n,!1);if(!l)throw new Error("Can't perform where op on the given tensors");o=l,s=N.size(o)}let u=Math.ceil(s/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:l=>L0(l,e,o,a,i),getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(s/64/4)},programUniforms:[{type:12,data:u},...te(n,t,r,o)]})}},k$=e=>{e.compute(U0(e.inputs))}}),S$,aS=V(()=>{_k(),Nc(),wk(),$k(),xk(),bk(),kk(),Ik(),Ok(),Nk(),Ak(),Rk(),Mk(),Bk(),Pk(),Dk(),Lk(),Uk(),Wk(),Vk(),Fk(),jk(),qk(),Hk(),Gk(),jw(),Kk(),Qk(),Zk(),Xk(),Yk(),Oc(),Jk(),Qw(),eS(),tS(),rS(),Gw(),nS(),Jr(),Ac(),iS(),S$=new Map([["Abs",[v_]],["Acos",[__]],["Acosh",[w_]],["Add",[ew]],["ArgMax",[h_,fd]],["ArgMin",[f_,fd]],["Asin",[$_]],["Asinh",[x_]],["Atan",[b_]],["Atanh",[k_]],["Attention",[m_]],["AveragePool",[i$,n$]],["BatchNormalization",[g_]],["BiasAdd",[y_]],["BiasSplitGelu",[J_]],["Cast",[E_,S_]],["Ceil",[C_]],["Clip",[T_]],["Concat",[dw,cw]],["Conv",[_d,vd]],["ConvTranspose",[$w,ww]],["Cos",[I_]],["Cosh",[z_]],["CumSum",[xw,bw]],["DepthToSpace",[kw,Sw]],["DequantizeLinear",[c$,p$]],["Div",[tw]],["Einsum",[Ew,Tw]],["Elu",[O_,Vi]],["Equal",[rw]],["Erf",[N_]],["Exp",[A_]],["Expand",[Cw]],["FastGelu",[Iw]],["Floor",[R_]],["FusedConv",[_d,vd]],["Gather",[Ow,zw]],["GatherElements",[Pw,Bw]],["GatherBlockQuantized",[Rw,Mw]],["GatherND",[Nw,Aw]],["Gelu",[M_]],["Gemm",[Lw,Dw]],["GlobalAveragePool",[o$,a$]],["GlobalMaxPool",[d$,l$]],["Greater",[ow]],["GreaterOrEqual",[uw]],["GridSample",[Uw,Ww]],["GroupQueryAttention",[Zw]],["HardSigmoid",[F_,V_]],["InstanceNormalization",[Xw]],["LayerNormalization",[Yw]],["LeakyRelu",[B_,Vi]],["Less",[sw]],["LessOrEqual",[lw]],["Log",[X_]],["MatMul",[Jw]],["MatMulNBits",[e$,t$]],["MaxPool",[s$,u$]],["Mul",[nw]],["MultiHeadAttention",[Fw,Vw]],["Neg",[D_]],["Not",[P_]],["Pad",[r$]],["Pow",[iw]],["QuickGelu",[Y_,Vi]],["Range",[f$]],["Reciprocal",[L_]],["ReduceMin",[u_]],["ReduceMean",[n_]],["ReduceMax",[s_]],["ReduceSum",[d_]],["ReduceProd",[l_]],["ReduceL1",[i_]],["ReduceL2",[a_]],["ReduceLogSum",[p_]],["ReduceLogSumExp",[o_]],["ReduceSumSquare",[c_]],["Relu",[U_]],["Resize",[g$,y$]],["RotaryEmbedding",[Kw]],["ScatterND",[m$,h$]],["Sigmoid",[W_]],["Sin",[j_]],["Sinh",[q_]],["Slice",[_$,w$]],["SkipLayerNormalization",[v$]],["Split",[qw,Hw]],["Sqrt",[H_]],["Softmax",[$$,x$]],["Sub",[aw]],["Tan",[G_]],["Tanh",[K_]],["ThresholdedRelu",[Z_,Vi]],["Tile",[b$]],["Transpose",[qv,Hv]],["Where",[k$]]])}),E$,oS=V(()=>{Zt(),xr(),le(),E$=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,n,i){or(e.programInfo.name);let a=this.backend.device,o=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let s=[];for(let l of t)s.push({binding:s.length,resource:{buffer:l.buffer}});for(let l of r)s.push({binding:s.length,resource:{buffer:l.buffer}});i&&s.push({binding:s.length,resource:i});let u=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:s,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let l={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:n};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(l)}o.setPipeline(e.computePipeline),o.setBindGroup(0,u),o.dispatchWorkgroups(...n),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Kt(e.programInfo.name)}dispose(){}build(e,t){or(e.name);let r=this.backend.device,n=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(l=>{r.features.has(l.feature)&&n.push(`enable ${l.extension};`)});let i=jv(t,this.backend.device.limits),a=e.getShaderSource(i),o=`${n.join(`
`)}
${i.additionalImplementations}
${a}`,s=r.createShaderModule({code:o,label:e.name});pe("verbose",()=>`[WebGPU] ${e.name} shader code: ${o}`);let u=r.createComputePipeline({compute:{module:s,entryPoint:"main"},layout:"auto",label:e.name});return Kt(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,n=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&r<=i&&n<=i)return[t,r,n];let a=t*r*n,o=Math.ceil(Math.sqrt(a));if(o>i){if(o=Math.ceil(Math.cbrt(a)),o>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[o,o,o]}else return[o,o,1]}}}),T$={};fi(T$,{WebGpuBackend:()=>C$});var W0,V0,F0,C$,sS=V(()=>{Zt(),ie(),xr(),Lv(),yk(),aS(),oS(),W0=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let n=0;n<e.length;++n){let i=e[n].dataType;switch(t[n]){case"none":{r.push("");break}case"type":{r.push(`${i}`);break}case"rank":{let a=e[n].dims.length;r.push(`${i};${a}`);break}case"dims":{let a=e[n].dims.join(",");r.push(`${i};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[n]}`)}}return r.join("|")},V0=(e,t,r)=>{var i,a;let n=e.name;return(i=e.shaderCache)!=null&&i.hint&&(n+="["+e.shaderCache.hint+"]"),n+=":"+r+`:${W0(t,((a=e.shaderCache)==null?void 0:a.inputDependencies)??new Array(t.length).fill("dims"))}`,n},F0=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},C$=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],n={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},i=a=>t.features.has(a)&&r.push(a)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(n),this.adapterInfo=new F0(t.info||await t.requestAdapterInfo()),this.gpuDataManager=Vv(this),this.programManager=new E$(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Tc(e.logLevel,!!e.debug),this.device.onuncapturederror=a=>{a.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${a.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;or(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var n;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=r[i],o=a.kernelId,s=this.kernels.get(o),u=s.kernelType,l=s.kernelName,c=a.programName,f=a.inputTensorViews,h=a.outputTensorViews,y=t[i*2],v=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=y);let w=Number(y-this.queryTimeBase),S=Number(v-this.queryTimeBase);if(!Number.isSafeInteger(w)||!Number.isSafeInteger(S))throw new RangeError("incorrect timestamp range");if((n=this.env.webgpu.profiling)!=null&&n.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:f.map(g=>({dims:g.dims,dataType:fr(g.dataType)})),outputsMetadata:h.map(g=>({dims:g.dims,dataType:fr(g.dataType)})),kernelId:o,kernelType:u,kernelName:l,programName:c,startTime:w,endTime:S});else{let g="";f.forEach(($,b)=>{g+=`input[${b}]: [${$.dims}] | ${fr($.dataType)}, `});let m="";h.forEach(($,b)=>{m+=`output[${b}]: [${$.dims}] | ${fr($.dataType)}, `}),console.log(`[profiling] kernel "${o}|${u}|${l}|${c}" ${g}${m}execution time: ${S-w} ns`)}Zo("GPU",`${c}::${y}::${v}`)}e.unmap(),this.pendingQueries.delete(e)}),Kt()}run(e,t,r,n,i,a){or(e.name);let o=[];for(let m=0;m<t.length;++m){let $=t[m].data;if($===0)continue;let b=this.gpuDataManager.get($);if(!b)throw new Error(`no GPU data for input: ${$}`);o.push(b)}let{outputs:s,dispatchGroup:u,programUniforms:l}=e.getRunData(t),c=r.length===0?s.map((m,$)=>$):r;if(c.length!==s.length)throw new Error(`Output size ${c.length} must be equal to ${s.length}.`);let f=[],h=[];for(let m=0;m<s.length;++m){if(!Number.isInteger(c[m])||c[m]<-3||c[m]>=a)throw new Error(`Invalid output index: ${c[m]}`);if(c[m]===-3)continue;let $=c[m]===-1,b=c[m]===-2,E=$||b?i(s[m].dataType,s[m].dims):n(c[m],s[m].dataType,s[m].dims);if(f.push(E),E.data===0)continue;let T=this.gpuDataManager.get(E.data);if(!T)throw new Error(`no GPU data for output: ${E.data}`);if($&&this.temporaryData.push(T),b){let C=this.kernelPersistentData.get(this.currentKernelId);C||(C=[],this.kernelPersistentData.set(this.currentKernelId,C)),C.push(T)}h.push(T)}if(o.length!==t.length||h.length!==f.length){if(h.length===0)return Kt(e.name),f;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let y;if(l){let m=0,$=[];l.forEach(C=>{let I=typeof C.data=="number"?[C.data]:C.data;if(I.length===0)return;let O=C.type===10?2:4,P,K;C.type===10?(K=I.length>4?16:I.length>2?8:I.length*O,P=I.length>4?16:O*I.length):(K=I.length<=2?I.length*O:16,P=16),m=Math.ceil(m/K)*K,$.push(m);let G=C.type===10?8:4;m+=I.length>4?Math.ceil(I.length/G)*P:I.length*O});let b=16;m=Math.ceil(m/b)*b;let E=new ArrayBuffer(m);l.forEach((C,I)=>{let O=$[I],P=typeof C.data=="number"?[C.data]:C.data;if(C.type===6)new Int32Array(E,O,P.length).set(P);else if(C.type===12)new Uint32Array(E,O,P.length).set(P);else if(C.type===10)new Uint16Array(E,O,P.length).set(P);else if(C.type===1)new Float32Array(E,O,P.length).set(P);else throw new Error(`Unsupported uniform type: ${fr(C.type)}`)});let T=this.gpuDataManager.create(m,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(T.buffer,0,E,0,m),this.gpuDataManager.release(T.id),y={offset:0,size:m,buffer:T.buffer}}let v=this.programManager.normalizeDispatchGroupSize(u),w=v[1]===1&&v[2]===1,S=V0(e,t,w),g=this.programManager.getArtifact(S);if(g||(g=this.programManager.build(e,v),this.programManager.setArtifact(S,g),pe("info",()=>`[artifact] key: ${S}, programName: ${e.name}`)),l&&g.uniformVariablesInfo){if(l.length!==g.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${g.uniformVariablesInfo.length}, got ${l.length} in program "${g.programInfo.name}".`);for(let m=0;m<l.length;m++){let $=l[m],b=$.type,E=typeof $.data=="number"?1:$.data.length,[T,C]=g.uniformVariablesInfo[m];if(b!==T||E!==C)throw new Error(`Uniform variable ${m} mismatch: expect type ${T} with size ${C}, got type ${b} with size ${E} in program "${g.programInfo.name}".`)}}if(pe("info",()=>`[ProgramManager] run "${e.name}" (key=${S}) with ${v[0]}x${v[1]}x${v[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let m={kernelId:this.currentKernelId,programName:g.programInfo.name,inputTensorViews:t,outputTensorViews:f};this.pendingKernels.push(m),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(m)}return this.programManager.run(g,o,h,v,y),Kt(e.name),f}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,n){let i=S$.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:n,kernelEntry:i[0],attributes:[i[1],r]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let n=this.kernels.get(e);if(!n)throw new Error(`kernel not created: ${e}`);let i=n.kernelType,a=n.kernelName,o=n.kernelEntry,s=n.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,s[0]&&(s[1]=s[0](s[1]),s[0]=void 0),pe("info",()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),o(t,s[1]),0}catch(l){return r.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${l}`)),1}finally{u&&r.push(this.device.popErrorScope().then(l=>l?`GPU validation error for kernel "[${i}] ${a}": ${l.message}`:null));for(let l of this.temporaryData)this.gpuDataManager.release(l.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,n){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),o=this.gpuDataManager.registerExternalBuffer(r,n,a);return i.set(t,[o,r]),o}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let n=await dd(this,e,t);return Cc(n.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){pe("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){pe("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){pe("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let n=0;n<r;n++){let i=this.getComputePassEncoder(),a=e[n];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(a.computePipeline),i.setBindGroup(0,a.bindGroup),i.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[n]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),I$={};fi(I$,{init:()=>z$});var uo,j0,z$,uS=V(()=>{ie(),xr(),ue(),gk(),uo=class O${constructor(t,r,n,i){this.module=t,this.dataType=r,this.data=n,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=N.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=N.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=N.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=N.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(N.size(t)!==N.size(this.dims))throw new Error("Invalid new shape");return new O$(this.module,this.dataType,this.data,t)}},j0=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let n=e.PTR_SIZE,i=r/e.PTR_SIZE,a=n===4?"i32":"i64";this.opKernelContext=Number(e.getValue(n*i++,a));let o=Number(e.getValue(n*i++,a));this.outputCount=Number(e.getValue(n*i++,a)),this.customDataOffset=Number(e.getValue(n*i++,"*")),this.customDataSize=Number(e.getValue(n*i++,a));let s=[];for(let u=0;u<o;u++){let l=Number(e.getValue(n*i++,a)),c=Number(e.getValue(n*i++,"*")),f=Number(e.getValue(n*i++,a)),h=[];for(let y=0;y<f;y++)h.push(Number(e.getValue(n*i++,a)));s.push(new uo(e,l,c,h))}this.inputs=s}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var o;let r=((o=t==null?void 0:t.inputs)==null?void 0:o.map(s=>typeof s=="number"?this.inputs[s]:s))??this.inputs,n=(t==null?void 0:t.outputs)??[],i=(s,u,l)=>new uo(this.module,u,this.output(s,l),l),a=(s,u)=>{let l=pn(s,u);if(!l)throw new Error(`Unsupported data type: ${s}`);let c=l>0?this.backend.gpuDataManager.create(l).id:0;return new uo(this.module,s,c,u)};return this.backend.run(e,r,n,i,a,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let n=this.module.PTR_SIZE,i=n===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*n);this.module.setValue(a,t.length,i);for(let o=0;o<t.length;o++)this.module.setValue(a+n*(o+1),t[o],i);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(n){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${n}`)}finally{this.module.stackRestore(r)}}},z$=async(e,t,r,n)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(sS(),ya(T$)).WebGpuBackend,o=new a;await o.initialize(r,n),i("webgpu",[o,s=>o.alloc(Number(s)),s=>o.free(s),(s,u,l,c=!1)=>{if(c)pe("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(s)}, dst=${Number(u)}, size=${Number(l)}`),o.memcpy(Number(s),Number(u));else{pe("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(s)}, gpuDataId=${Number(u)}, size=${Number(l)}`);let f=t.HEAPU8.subarray(Number(s>>>0),Number(s>>>0)+Number(l));o.upload(Number(u),f)}},async(s,u,l)=>{pe("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${s}, dataOffset=${u}, size=${l}`),await o.download(Number(s),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+l)>>>0))},(s,u,l)=>o.createKernel(s,Number(u),l,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),s=>o.releaseKernel(s),(s,u,l,c)=>{pe("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${s}, contextDataOffset=${u}`);let f=new j0(t,o,Number(u));return o.computeKernel(Number(s),f,c)},()=>o.captureBegin(),()=>o.captureEnd(),()=>o.replay()])}else{let a=new Wv(r);i("webnn",[a,()=>a.reserveTensorId(),o=>a.releaseTensorId(o),async(o,s,u,l,c)=>a.ensureTensor(o,s,u,l,c),(o,s)=>{a.uploadTensor(o,s)},async(o,s)=>a.downloadTensor(o,s)])}}}),q0,Lc,Uc,Or,H0,cl,ns,Wc,Vc,pl,Fc,jc,qc,N$=V(()=>{fk(),hk(),ie(),Cn(),bc(),Mv(),q0=(e,t)=>{ke()._OrtInit(e,t)!==0&&we("Can't initialize onnxruntime.")},Lc=async e=>{q0(e.wasm.numThreads,Yo(e.logLevel))},Uc=async(e,t)=>{var r,n;(n=(r=ke()).asyncInit)==null||n.call(r);{let i=(uS(),ya(I$)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let a=e.webgpu.adapter;if(a){if(typeof a.limits!="object"||typeof a.features!="object"||typeof a.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let o=e.webgpu.powerPreference;if(o!==void 0&&o!=="low-power"&&o!=="high-performance")throw new Error(`Invalid powerPreference setting: "${o}"`);let s=e.webgpu.forceFallbackAdapter;if(s!==void 0&&typeof s!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${s}"`);if(a=await navigator.gpu.requestAdapter({powerPreference:o,forceFallbackAdapter:s}),!a)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await i("webgpu",ke(),e,a)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await i("webnn",ke(),e)}}},Or=new Map,H0=e=>{let t=ke(),r=t.stackSave();try{let n=t.PTR_SIZE,i=t.stackAlloc(2*n);t._OrtGetInputOutputCount(e,i,i+n)!==0&&we("Can't get session input/output count.");let a=n===4?"i32":"i64";return[Number(t.getValue(i,a)),Number(t.getValue(i+n,a))]}finally{t.stackRestore(r)}},cl=(e,t)=>{let r=ke(),n=r.stackSave(),i=0;try{let a=r.PTR_SIZE,o=r.stackAlloc(2*a);r._OrtGetInputOutputMetadata(e,t,o,o+a)!==0&&we("Can't get session input/output metadata.");let s=Number(r.getValue(o,"*"));i=Number(r.getValue(o+a,"*"));let u=r.HEAP32[i/4];if(u===0)return[s,0];let l=r.HEAPU32[i/4+1],c=[];for(let f=0;f<l;f++){let h=Number(r.getValue(i+8+f*a,"*"));c.push(h!==0?r.UTF8ToString(h):Number(r.getValue(i+8+(f+l)*a,"*")))}return[s,u,c]}finally{r.stackRestore(n),i!==0&&r._OrtFree(i)}},ns=e=>{let t=ke(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Wc=async(e,t)=>{var f,h,y,v;let r,n,i=ke();Array.isArray(e)?[r,n]=e:e.buffer===i.HEAPU8.buffer?[r,n]=[e.byteOffset,e.byteLength]:[r,n]=ns(e);let a=0,o=0,s=0,u=[],l=[],c=[];try{if([o,u]=await Rv(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let I=[];for(let O of t.externalData){let P=typeof O=="string"?O:O.path;I.push(Ec(typeof O=="string"?O:O.data).then(K=>{i.mountExternalData(P,K)}))}await Promise.all(I)}for(let I of(t==null?void 0:t.executionProviders)??[])if((typeof I=="string"?I:I.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof I!="string"){let O=I,P=O==null?void 0:O.context,K=O==null?void 0:O.gpuDevice,G=O==null?void 0:O.deviceType,Q=O==null?void 0:O.powerPreference;P?i.currentContext=P:K?i.currentContext=await i.webnnCreateMLContext(K):i.currentContext=await i.webnnCreateMLContext({deviceType:G,powerPreference:Q})}else i.currentContext=await i.webnnCreateMLContext();break}a=await i._OrtCreateSession(r,n,o),(f=i.webgpuOnCreateSession)==null||f.call(i,a),a===0&&we("Can't create a session."),(h=i.jsepOnCreateSession)==null||h.call(i),i.currentContext&&(i.webnnRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[w,S]=H0(a),g=!!(t!=null&&t.enableGraphCapture),m=[],$=[],b=[],E=[],T=[];for(let I=0;I<w;I++){let[O,P,K]=cl(a,I);O===0&&we("Can't get an input name."),l.push(O);let G=i.UTF8ToString(O);m.push(G),b.push(P===0?{name:G,isTensor:!1}:{name:G,isTensor:!0,type:fr(P),shape:K})}for(let I=0;I<S;I++){let[O,P,K]=cl(a,I+w);O===0&&we("Can't get an output name."),c.push(O);let G=i.UTF8ToString(O);$.push(G),E.push(P===0?{name:G,isTensor:!1}:{name:G,isTensor:!0,type:fr(P),shape:K});{if(g&&(t==null?void 0:t.preferredOutputLocation)===void 0){T.push("gpu-buffer");continue}let Q=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((y=t==null?void 0:t.preferredOutputLocation)==null?void 0:y[G])??"cpu",ce=i.webnnIsGraphOutput;if(Q==="cpu"&&ce&&ce(a,G)){T.push("ml-tensor-cpu-output");continue}if(Q!=="cpu"&&Q!=="cpu-pinned"&&Q!=="gpu-buffer"&&Q!=="ml-tensor")throw new Error(`Not supported preferred output location: ${Q}.`);if(g&&Q!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${Q}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);T.push(Q)}}let C=null;return T.some(I=>I==="gpu-buffer"||I==="ml-tensor"||I==="ml-tensor-cpu-output")&&(s=i._OrtCreateBinding(a),s===0&&we("Can't create IO binding."),C={handle:s,outputPreferredLocations:T,outputPreferredLocationsEncoded:T.map(I=>I==="ml-tensor-cpu-output"?"ml-tensor":I).map(I=>ud(I))}),Or.set(a,[a,l,c,C,g,!1]),[a,m,$,b,E]}catch(w){throw l.forEach(S=>i._OrtFree(S)),c.forEach(S=>i._OrtFree(S)),s!==0&&i._OrtReleaseBinding(s)!==0&&we("Can't release IO binding."),a!==0&&i._OrtReleaseSession(a)!==0&&we("Can't release session."),w}finally{i._free(r),o!==0&&i._OrtReleaseSessionOptions(o)!==0&&we("Can't release session options."),u.forEach(w=>i._free(w)),(v=i.unmountExternalData)==null||v.call(i)}},Vc=e=>{var u,l,c;let t=ke(),r=Or.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[n,i,a,o,s]=r;o&&(s&&t._OrtClearBoundOutputs(o.handle)!==0&&we("Can't clear bound outputs."),t._OrtReleaseBinding(o.handle)!==0&&we("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(l=t.webnnOnReleaseSession)==null||l.call(t,e),(c=t.webgpuOnReleaseSession)==null||c.call(t,e),i.forEach(f=>t._OrtFree(f)),a.forEach(f=>t._OrtFree(f)),t._OrtReleaseSession(n)!==0&&we("Can't release session."),Or.delete(e)},pl=async(e,t,r,n,i,a,o=!1)=>{if(!e){t.push(0);return}let s=ke(),u=s.PTR_SIZE,l=e[0],c=e[1],f=e[3],h=f,y,v;if(l==="string"&&(f==="gpu-buffer"||f==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(o&&f!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(f==="gpu-buffer"){let g=e[2].gpuBuffer;v=pn(cn(l),c);{let m=s.jsepRegisterBuffer;if(!m)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');y=m(n,a,g,v)}}else if(f==="ml-tensor"){let g=e[2].mlTensor;v=pn(cn(l),c);let m=s.webnnRegisterMLTensor;if(!m)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');y=m(n,g,cn(l),c)}else{let g=e[2];if(Array.isArray(g)){v=u*g.length,y=s._malloc(v),r.push(y);for(let m=0;m<g.length;m++){if(typeof g[m]!="string")throw new TypeError(`tensor data at index ${m} is not a string`);s.setValue(y+m*u,jt(g[m],r),"*")}}else{let m=s.webnnIsGraphInput,$=s.webnnIsGraphOutput;if(l!=="string"&&m&&$){let b=s.UTF8ToString(i);if(m(n,b)||$(n,b)){let E=cn(l);v=pn(E,c),h="ml-tensor";let T=s.webnnCreateTemporaryTensor,C=s.webnnUploadTensor;if(!T||!C)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let I=await T(n,E,c);C(I,new Uint8Array(g.buffer,g.byteOffset,g.byteLength)),y=I}else v=g.byteLength,y=s._malloc(v),r.push(y),s.HEAPU8.set(new Uint8Array(g.buffer,g.byteOffset,v),y)}else v=g.byteLength,y=s._malloc(v),r.push(y),s.HEAPU8.set(new Uint8Array(g.buffer,g.byteOffset,v),y)}}let w=s.stackSave(),S=s.stackAlloc(4*c.length);try{c.forEach((m,$)=>s.setValue(S+$*u,m,u===4?"i32":"i64"));let g=s._OrtCreateTensor(cn(l),y,v,S,c.length,ud(h));g===0&&we(`Can't create tensor for input/output. session=${n}, index=${a}.`),t.push(g)}finally{s.stackRestore(w)}},Fc=async(e,t,r,n,i,a)=>{var K,G,Q,ce;let o=ke(),s=o.PTR_SIZE,u=Or.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let l=u[0],c=u[1],f=u[2],h=u[3],y=u[4],v=u[5],w=t.length,S=n.length,g=0,m=[],$=[],b=[],E=[],T=o.stackSave(),C=o.stackAlloc(w*s),I=o.stackAlloc(w*s),O=o.stackAlloc(S*s),P=o.stackAlloc(S*s);try{[g,m]=Av(a);for(let M=0;M<w;M++)await pl(r[M],$,E,e,c[t[M]],t[M],y);for(let M=0;M<S;M++)await pl(i[M],b,E,e,f[n[M]],w+n[M],y);for(let M=0;M<w;M++)o.setValue(C+M*s,$[M],"*"),o.setValue(I+M*s,c[t[M]],"*");for(let M=0;M<S;M++)o.setValue(O+M*s,b[M],"*"),o.setValue(P+M*s,f[n[M]],"*");if(h&&!v){let{handle:M,outputPreferredLocations:W,outputPreferredLocationsEncoded:J}=h;if(c.length!==w)throw new Error(`input count from feeds (${w}) is expected to be always equal to model's input count (${c.length}).`);for(let A=0;A<w;A++){let L=t[A];await o._OrtBindInput(M,c[L],$[A])!==0&&we(`Can't bind input[${A}] for session=${e}.`)}for(let A=0;A<S;A++){let L=n[A];(K=i[A])!=null&&K[3]?o._OrtBindOutput(M,f[L],b[A],0)!==0&&we(`Can't bind pre-allocated output[${A}] for session=${e}.`):o._OrtBindOutput(M,f[L],0,J[L])!==0&&we(`Can't bind output[${A}] to ${W[A]} for session=${e}.`)}Or.set(e,[l,c,f,h,y,!0])}(G=o.jsepOnRunStart)==null||G.call(o,l),(Q=o.webnnOnRunStart)==null||Q.call(o,l);let oe;h?oe=await o._OrtRunWithBinding(l,h.handle,S,O,g):oe=await o._OrtRun(l,I,C,w,P,S,O,g),oe!==0&&we("failed to call OrtRun().");let H=[],ae=[];for(let M=0;M<S;M++){let W=Number(o.getValue(O+M*s,"*"));if(W===b[M]){H.push(i[M]);continue}let J=o.stackSave(),A=o.stackAlloc(4*s),L=!1,j,re=0;try{o._OrtGetTensorData(W,A,A+s,A+2*s,A+3*s)!==0&&we(`Can't access output tensor data on index ${M}.`);let De=s===4?"i32":"i64",D=Number(o.getValue(A,De));re=o.getValue(A+s,"*");let he=o.getValue(A+s*2,"*"),zn=Number(o.getValue(A+s*3,De)),nt=[];for(let _e=0;_e<zn;_e++)nt.push(Number(o.getValue(he+_e*s,De)));o._OrtFree(he)!==0&&we("Can't free memory for tensor dims.");let Rt=nt.reduce((_e,Ie)=>_e*Ie,1);j=fr(D);let sr=h==null?void 0:h.outputPreferredLocations[n[M]];if(j==="string"){if(sr==="gpu-buffer"||sr==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let _e=[];for(let Ie=0;Ie<Rt;Ie++){let gt=o.getValue(re+Ie*s,"*"),en=o.getValue(re+(Ie+1)*s,"*"),tn=Ie===Rt-1?void 0:en-gt;_e.push(o.UTF8ToString(gt,tn))}H.push([j,nt,_e,"cpu"])}else if(sr==="gpu-buffer"&&Rt>0){let _e=o.jsepGetBuffer;if(!_e)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let Ie=_e(re),gt=pn(D,Rt);if(gt===void 0||!kc(j))throw new Error(`Unsupported data type: ${j}`);L=!0,H.push([j,nt,{gpuBuffer:Ie,download:o.jsepCreateDownloader(Ie,gt,j),dispose:()=>{o._OrtReleaseTensor(W)!==0&&we("Can't release tensor.")}},"gpu-buffer"])}else if(sr==="ml-tensor"&&Rt>0){let _e=o.webnnEnsureTensor,Ie=o.webnnIsGraphInputOutputTypeSupported;if(!_e||!Ie)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(pn(D,Rt)===void 0||!Sc(j))throw new Error(`Unsupported data type: ${j}`);if(!Ie(e,j,!1))throw new Error(`preferredLocation "ml-tensor" for ${j} output is not supported by current WebNN Context.`);let gt=await _e(e,re,D,nt,!1);L=!0,H.push([j,nt,{mlTensor:gt,download:o.webnnCreateMLTensorDownloader(re,j),dispose:()=>{o.webnnReleaseTensorId(re),o._OrtReleaseTensor(W)}},"ml-tensor"])}else if(sr==="ml-tensor-cpu-output"&&Rt>0){let _e=o.webnnCreateMLTensorDownloader(re,j)(),Ie=H.length;L=!0,ae.push((async()=>{let gt=[Ie,await _e];return o.webnnReleaseTensorId(re),o._OrtReleaseTensor(W),gt})()),H.push([j,nt,[],"cpu"])}else{let _e=$s(j),Ie=new _e(Rt);new Uint8Array(Ie.buffer,Ie.byteOffset,Ie.byteLength).set(o.HEAPU8.subarray(re,re+Ie.byteLength)),H.push([j,nt,Ie,"cpu"])}}finally{o.stackRestore(J),j==="string"&&re&&o._free(re),L||o._OrtReleaseTensor(W)}}h&&!y&&(o._OrtClearBoundOutputs(h.handle)!==0&&we("Can't clear bound outputs."),Or.set(e,[l,c,f,h,y,!1]));for(let[M,W]of await Promise.all(ae))H[M][2]=W;return H}finally{(ce=o.webnnOnRunEnd)==null||ce.call(o,l),o.stackRestore(T),$.forEach(oe=>o._OrtReleaseTensor(oe)),b.forEach(oe=>o._OrtReleaseTensor(oe)),E.forEach(oe=>o._free(oe)),g!==0&&o._OrtReleaseRunOptions(g),m.forEach(oe=>o._free(oe))}},jc=e=>{let t=ke(),r=Or.get(e);if(!r)throw new Error("invalid session id");let n=r[0],i=t._OrtEndProfiling(n);i===0&&we("Can't get an profile file name."),t._OrtFree(i)},qc=e=>{let t=[];for(let r of e){let n=r[2];!Array.isArray(n)&&"buffer"in n&&t.push(n.buffer)}return t}}),Nr,dt,Rn,Ri,Mi,lo,fl,co,on,sn,G0,A$,R$,M$,B$,P$,D$,L$,U$=V(()=>{Zt(),N$(),Cn(),$c(),Nr=()=>!!xe.wasm.proxy&&typeof document<"u",Rn=!1,Ri=!1,Mi=!1,co=new Map,on=(e,t)=>{let r=co.get(e);r?r.push(t):co.set(e,[t])},sn=()=>{if(Rn||!Ri||Mi||!dt)throw new Error("worker not ready")},G0=e=>{switch(e.data.type){case"init-wasm":Rn=!1,e.data.err?(Mi=!0,fl[1](e.data.err)):(Ri=!0,fl[0]()),lo&&(URL.revokeObjectURL(lo),lo=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=co.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},A$=async()=>{if(!Ri){if(Rn)throw new Error("multiple calls to 'initWasm()' detected.");if(Mi)throw new Error("previous call to 'initWasm()' failed.");if(Rn=!0,Nr())return new Promise((e,t)=>{dt==null||dt.terminate(),Ov().then(([r,n])=>{try{dt=n,dt.onerror=a=>t(a),dt.onmessage=G0,fl=[e,t];let i={type:"init-wasm",in:xe};!i.in.wasm.wasmPaths&&(r||sd)&&(i.in.wasm.wasmPaths={wasm:new URL("/assets/ort-wasm-simd-threaded.jsep-CLPRrI3A.wasm",import.meta.url).href}),dt.postMessage(i),lo=r}catch(i){t(i)}},t)});try{await xc(xe.wasm),await Lc(xe),Ri=!0}catch(e){throw Mi=!0,e}finally{Rn=!1}}},R$=async e=>{if(Nr())return sn(),new Promise((t,r)=>{on("init-ep",[t,r]);let n={type:"init-ep",in:{epName:e,env:xe}};dt.postMessage(n)});await Uc(xe,e)},M$=async e=>Nr()?(sn(),new Promise((t,r)=>{on("copy-from",[t,r]);let n={type:"copy-from",in:{buffer:e}};dt.postMessage(n,[e.buffer])})):ns(e),B$=async(e,t)=>{if(Nr()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return sn(),new Promise((r,n)=>{on("create",[r,n]);let i={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),dt.postMessage(i,a)})}else return Wc(e,t)},P$=async e=>{if(Nr())return sn(),new Promise((t,r)=>{on("release",[t,r]);let n={type:"release",in:e};dt.postMessage(n)});Vc(e)},D$=async(e,t,r,n,i,a)=>{if(Nr()){if(r.some(o=>o[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(o=>o))throw new Error("pre-allocated output tensor is not supported for proxy.");return sn(),new Promise((o,s)=>{on("run",[o,s]);let u=r,l={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:n,options:a}};dt.postMessage(l,qc(u))})}else return Fc(e,t,r,n,i,a)},L$=async e=>{if(Nr())return sn(),new Promise((t,r)=>{on("end-profiling",[t,r]);let n={type:"end-profiling",in:e};dt.postMessage(n)});jc(e)}}),hl,K0,W$,lS=V(()=>{Zt(),U$(),ie(),wc(),Mv(),hl=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},K0=e=>{switch(e[3]){case"cpu":return new qt(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!kc(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:n,dispose:i}=e[2];return qt.fromGpuBuffer(r,{dataType:t,dims:e[1],download:n,dispose:i})}case"ml-tensor":{let t=e[0];if(!Sc(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:n,dispose:i}=e[2];return qt.fromMLTensor(r,{dataType:t,dims:e[1],download:n,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},W$=class{async fetchModelAndCopyToWasmMemory(e){return M$(await Ec(e))}async loadModel(e,t){or();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await B$(r,t),Kt()}async dispose(){return P$(this.sessionId)}async run(e,t,r){or();let n=[],i=[];Object.entries(e).forEach(f=>{let h=f[0],y=f[1],v=this.inputNames.indexOf(h);if(v===-1)throw new Error(`invalid input '${h}'`);n.push(y),i.push(v)});let a=[],o=[];Object.entries(t).forEach(f=>{let h=f[0],y=f[1],v=this.outputNames.indexOf(h);if(v===-1)throw new Error(`invalid output '${h}'`);a.push(y),o.push(v)});let s=n.map((f,h)=>hl(f,()=>`input "${this.inputNames[i[h]]}"`)),u=a.map((f,h)=>f?hl(f,()=>`output "${this.outputNames[o[h]]}"`):null),l=await D$(this.sessionId,i,s,o,u,r),c={};for(let f=0;f<l.length;f++)c[this.outputNames[o[f]]]=a[f]??K0(l[f]);return Kt(),c}startProfiling(){}endProfiling(){L$(this.sessionId)}}}),V$={};fi(V$,{OnnxruntimeWebAssemblyBackend:()=>xd,initializeFlags:()=>$d,wasmBackend:()=>F$});var $d,xd,F$,dS=V(()=>{Zt(),U$(),lS(),$d=()=>{(typeof xe.wasm.initTimeout!="number"||xe.wasm.initTimeout<0)&&(xe.wasm.initTimeout=0);let e=xe.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),xe.wasm.simd=!1),typeof xe.wasm.proxy!="boolean"&&(xe.wasm.proxy=!1),typeof xe.wasm.trace!="boolean"&&(xe.wasm.trace=!1),typeof xe.wasm.numThreads!="number"||!Number.isInteger(xe.wasm.numThreads)||xe.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)xe.wasm.numThreads=1;else{let t=typeof navigator>"u"?Q3("node:os").cpus().length:navigator.hardwareConcurrency;xe.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},xd=class{async init(e){$d(),await A$(),await R$(e)}async createInferenceSessionHandler(e,t){let r=new W$;return await r.loadModel(e,t),r}},F$=new xd});Zt();Zt();Zt();var cS="1.22.0";{let e=(dS(),ya(V$)).wasmBackend;Gn("webgpu",e,5),Gn("webnn",e,5),Gn("cpu",e,10),Gn("wasm",e,10)}Object.defineProperty(xe.versions,"web",{value:cS,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pS=()=>{const[e,t]=ze.useState(null),[r,n]=ze.useState(!0),[i,a]=ze.useState(null);return ze.useEffect(()=>{let o=!0;return(async()=>{try{const u=await fetch("./config.txt");if(!u.ok)throw new Error("Failed to load configuration file");const l=await u.text(),f=JSON.parse(l).model_url;if(!f)throw new Error("Model URL not found in configuration");xe.wasm.wasmPaths="https://cdn.jsdelivr.net/npm/onnxruntime-web@1.22.0/dist/",xe.wasm.numThreads=1,xe.wasm.simd=!0;const h=await _c.create(f,{executionProviders:["wasm"],enableCpuMemArena:!1,enableMemPattern:!1,graphOptimizationLevel:"all"});o&&(t(h),n(!1))}catch(u){console.error("Model loading error:",u),o&&(a(u instanceof Error?u.message:"Failed to load model"),n(!1))}})(),()=>{o=!1}},[]),{model:e,isLoading:r,error:i}},j$=ze.forwardRef(({className:e},t)=>(ze.useEffect(()=>{const r=()=>{const n=t;if(n.current){const i=n.current.getContext("2d");if(i){const a=window.devicePixelRatio||1,o=n.current.getBoundingClientRect();console.log(`Canvas setup - CSS: ${o.width}x${o.height}, DPR: ${a}`),n.current.width=o.width*a,n.current.height=o.height*a,i.setTransform(a,0,0,a,0,0),n.current.style.width=o.width+"px",n.current.style.height=o.height+"px"}n.current.style.position="absolute",n.current.style.top="0",n.current.style.left="0"}};return r(),window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[t]),se.jsx("canvas",{ref:t,className:e})));j$.displayName="DetectionCanvas";async function fS(e){const t=document.createElement("canvas"),r=t.getContext("2d"),n=e.videoWidth,i=e.videoHeight,a=Math.min(n,i),o=Math.floor((n-a)/2),s=Math.floor((i-a)/2);t.width=640,t.height=640,r.drawImage(e,o,s,a,a,0,0,640,640);const l=r.getImageData(0,0,640,640).data,c=new Float32Array(3*640*640);let f=0;for(let y=0;y<3;y++)for(let v=0;v<640;v++)for(let w=0;w<640;w++){const S=(v*640+w)*4;c[f++]=l[S+y]/255}return{inputTensor:new qt("float32",c,[1,3,640,640]),cropInfo:{cropX:o,cropY:s,cropSize:a}}}function hS(e,t){const r=Math.max(e.x,t.x),n=Math.max(e.y,t.y),i=Math.min(e.x+e.w,t.x+t.w),a=Math.min(e.y+e.h,t.y+t.h),o=Math.max(0,i-r),s=Math.max(0,a-n),u=o*s,l=e.w*e.h,c=t.w*t.h,f=l+c-u;return f===0?0:u/f}function mS(e,t){if(e.length===0)return[];const r=[...e].sort((i,a)=>a.confidence-i.confidence),n=[];for(const i of r){let a=!0;for(const o of n)if(hS(i,o)>t){a=!1;break}a&&n.push(i)}return n}class gS{constructor(t,r,n,i){this.video=t,this.canvas=r,this.model=n,this.onDetectionUpdate=i,this.isRunning=!1}start(){this.isRunning||(this.isRunning=!0,this.loop())}stop(){this.isRunning=!1,this.animationId&&cancelAnimationFrame(this.animationId);const t=this.canvas.getContext("2d");t&&t.clearRect(0,0,this.canvas.width,this.canvas.height)}async loop(){if(!this.isRunning||!this.video.videoWidth||!this.video.videoHeight){this.isRunning&&(this.animationId=requestAnimationFrame(()=>this.loop()));return}try{await this.processFrame()}catch(t){console.error("Detection error:",t)}this.isRunning&&(this.animationId=requestAnimationFrame(()=>this.loop()))}async processFrame(){const t=this.canvas.getContext("2d");if(!t)return;t.clearRect(0,0,this.canvas.width,this.canvas.height);const r=this.canvas.getBoundingClientRect(),n=Math.min(r.width,r.height),{inputTensor:i,cropInfo:a}=await fS(this.video),o={images:i},u=(await this.model.run(o)).output0,c=this.parseDetections(u).filter(h=>h.confidence>=.8),f=mS(c,.5);this.drawDetections(t,f,n,a),this.onDetectionUpdate(f.length)}parseDetections(t){const r=t.data,n=[];for(let i=0;i<8400;i++){const a=r[i],o=r[8400+i],s=r[8400*2+i],u=r[8400*3+i],l=r[8400*4+i];l>.1&&n.push({x:a-s/2,y:o-u/2,w:s,h:u,confidence:l})}return n}drawDetections(t,r,n,i){const a=this.canvas.getBoundingClientRect(),o=a.width,s=a.height,u=Math.min(o,s)/640;t.strokeStyle="#F97316",t.fillStyle="#F97316",t.lineWidth=1,r.forEach(l=>{const c=(l.x+l.w/2)*u,f=(l.y+l.h/2)*u;t.beginPath(),t.arc(c,f,2,0,2*Math.PI),t.fill()})}}const yS=()=>{const e=ze.useRef(null),t=ze.useRef(null),r=ze.useRef(null),[n,i]=ze.useState(!1),[a,o]=ze.useState(0),{isStreaming:s,error:u,startCamera:l,stopCamera:c}=q3(e),{model:f,isLoading:h,error:y}=pS(),v=f&&!h,w=u||y,S=ze.useCallback(async()=>{s?(r.current&&(r.current.stop(),r.current=null),i(!1),o(0),c()):v&&e.current&&t.current&&(await l(),r.current=new gS(e.current,t.current,f,o),r.current.start(),i(!0))},[s,v,l,c,f]);return ze.useEffect(()=>()=>{r.current&&r.current.stop()},[]),se.jsxs("div",{className:"w-full max-w-md mx-auto",children:[se.jsxs("div",{className:"mb-6 p-4 bg-white rounded-2xl border border-blue-200 shadow-lg",children:[se.jsxs("div",{className:"flex items-center justify-between mb-3",children:[se.jsxs("div",{className:"flex items-center gap-2",children:[se.jsx("div",{className:`w-3 h-3 rounded-full ${h?"bg-yellow-400 animate-pulse":v?"bg-green-400":"bg-red-400"}`}),se.jsx("span",{className:"text-slate-800 text-sm font-medium",children:h?"Loading Model...":v?"Model Ready":"Model Error"})]}),n&&se.jsxs("div",{className:"flex items-center gap-2",children:[se.jsx("div",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"}),se.jsx("span",{className:"text-green-600 text-sm font-medium",children:"Detecting"})]})]}),n&&se.jsxs("div",{className:"text-center",children:[se.jsx("div",{className:"text-2xl font-bold text-blue-600 mb-1",children:a}),se.jsx("div",{className:"text-slate-600 text-sm",children:"Objects Detected"})]})]}),se.jsx("div",{className:"relative bg-black rounded-2xl overflow-hidden shadow-2xl border border-blue-200 shadow-blue-500/20",children:se.jsxs("div",{className:"aspect-square relative",children:[se.jsx("video",{ref:e,className:"absolute inset-0 w-full h-full object-cover",playsInline:!0,muted:!0,autoPlay:!0,style:{display:s?"block":"none"}}),se.jsx(j$,{ref:t,className:"absolute inset-0 w-full h-full pointer-events-none"}),!s&&se.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-slate-100",children:se.jsxs("div",{className:"text-center",children:[se.jsx(j3,{className:"w-16 h-16 text-slate-400 mx-auto mb-3"}),se.jsx("p",{className:"text-slate-500 text-sm",children:"Camera feed will appear here"})]})}),s&&se.jsxs("div",{className:"absolute inset-4 border-2 border-white/30 rounded-lg pointer-events-none",children:[se.jsx("div",{className:"absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-orange-400 rounded-tl"}),se.jsx("div",{className:"absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-orange-400 rounded-tr"}),se.jsx("div",{className:"absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-orange-400 rounded-bl"}),se.jsx("div",{className:"absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-orange-400 rounded-br"})]})]})}),w&&se.jsx("div",{className:"mt-4 p-4 bg-red-50 rounded-xl border border-red-200",children:se.jsxs("div",{className:"flex items-center gap-2 text-red-600",children:[se.jsx(W3,{className:"w-4 h-4"}),se.jsx("span",{className:"text-sm font-medium",children:u||y})]})}),se.jsx("div",{className:"mt-6 text-center",children:se.jsx("button",{onClick:S,disabled:!v||w,className:`
            inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg
            transition-all duration-200 shadow-lg
            ${!v||w?"bg-slate-300 text-slate-500 cursor-not-allowed":s?"bg-red-500 hover:bg-red-600 text-white":"bg-orange-500 hover:bg-orange-600 text-white"}
            ${!w&&v?"hover:scale-105 active:scale-95":""}
          `,children:h?se.jsxs(se.Fragment,{children:[se.jsx(F3,{className:"w-5 h-5 animate-spin"}),"Loading Model..."]}):se.jsxs(se.Fragment,{children:[se.jsx(V3,{className:"w-5 h-5"}),s?"Stop Detection":"Start Detection"]})})})]})};function vS(){return se.jsx("div",{className:"min-h-screen bg-slate-50",children:se.jsxs("div",{className:"min-h-screen flex flex-col",children:[se.jsxs("header",{className:"p-6 text-center",children:[se.jsx("h1",{className:"text-3xl font-bold text-blue-600 mb-2",children:"盤點福音"}),se.jsx("p",{className:"text-slate-600 text-sm",children:"Real-time pill counter powered by Hongsen AI Team"})]}),se.jsx("main",{className:"flex-1 flex items-center justify-center p-6",children:se.jsx(yS,{})}),se.jsx("footer",{className:"p-6 text-center",children:se.jsx("p",{className:"text-slate-600 text-xs",children:"Point camera at objects to detect and count them in real-time"})})]})})}sv(document.getElementById("root")).render(se.jsx(ze.StrictMode,{children:se.jsx(vS,{})}));
