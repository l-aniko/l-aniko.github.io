(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Om={exports:{}},Bl={},Bm={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ha=Symbol.for("react.element"),H0=Symbol.for("react.portal"),V0=Symbol.for("react.fragment"),G0=Symbol.for("react.strict_mode"),W0=Symbol.for("react.profiler"),X0=Symbol.for("react.provider"),Y0=Symbol.for("react.context"),q0=Symbol.for("react.forward_ref"),$0=Symbol.for("react.suspense"),K0=Symbol.for("react.memo"),Z0=Symbol.for("react.lazy"),Eh=Symbol.iterator;function Q0(t){return t===null||typeof t!="object"?null:(t=Eh&&t[Eh]||t["@@iterator"],typeof t=="function"?t:null)}var km={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zm=Object.assign,Hm={};function Us(t,e,n){this.props=t,this.context=e,this.refs=Hm,this.updater=n||km}Us.prototype.isReactComponent={};Us.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Us.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Vm(){}Vm.prototype=Us.prototype;function Jf(t,e,n){this.props=t,this.context=e,this.refs=Hm,this.updater=n||km}var jf=Jf.prototype=new Vm;jf.constructor=Jf;zm(jf,Us.prototype);jf.isPureReactComponent=!0;var Th=Array.isArray,Gm=Object.prototype.hasOwnProperty,ed={current:null},Wm={key:!0,ref:!0,__self:!0,__source:!0};function Xm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Gm.call(e,i)&&!Wm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ha,type:t,key:s,ref:a,props:r,_owner:ed.current}}function J0(t,e){return{$$typeof:Ha,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function td(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ha}function j0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var wh=/\/+/g;function lu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?j0(""+t.key):e.toString(36)}function zo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ha:case H0:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+lu(a,0):i,Th(r)?(n="",t!=null&&(n=t.replace(wh,"$&/")+"/"),zo(r,e,n,"",function(u){return u})):r!=null&&(td(r)&&(r=J0(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(wh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Th(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+lu(s,o);a+=zo(s,e,n,l,r)}else if(l=Q0(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+lu(s,o++),a+=zo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ja(t,e,n){if(t==null)return t;var i=[],r=0;return zo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function ev(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var on={current:null},Ho={transition:null},tv={ReactCurrentDispatcher:on,ReactCurrentBatchConfig:Ho,ReactCurrentOwner:ed};function Ym(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:Ja,forEach:function(t,e,n){Ja(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ja(t,function(){e++}),e},toArray:function(t){return Ja(t,function(e){return e})||[]},only:function(t){if(!td(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=Us;Ge.Fragment=V0;Ge.Profiler=W0;Ge.PureComponent=Jf;Ge.StrictMode=G0;Ge.Suspense=$0;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tv;Ge.act=Ym;Ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=zm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=ed.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Gm.call(e,l)&&!Wm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Ha,type:t.type,key:r,ref:s,props:i,_owner:a}};Ge.createContext=function(t){return t={$$typeof:Y0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:X0,_context:t},t.Consumer=t};Ge.createElement=Xm;Ge.createFactory=function(t){var e=Xm.bind(null,t);return e.type=t,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:q0,render:t}};Ge.isValidElement=td;Ge.lazy=function(t){return{$$typeof:Z0,_payload:{_status:-1,_result:t},_init:ev}};Ge.memo=function(t,e){return{$$typeof:K0,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=Ho.transition;Ho.transition={};try{t()}finally{Ho.transition=e}};Ge.unstable_act=Ym;Ge.useCallback=function(t,e){return on.current.useCallback(t,e)};Ge.useContext=function(t){return on.current.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t){return on.current.useDeferredValue(t)};Ge.useEffect=function(t,e){return on.current.useEffect(t,e)};Ge.useId=function(){return on.current.useId()};Ge.useImperativeHandle=function(t,e,n){return on.current.useImperativeHandle(t,e,n)};Ge.useInsertionEffect=function(t,e){return on.current.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return on.current.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return on.current.useMemo(t,e)};Ge.useReducer=function(t,e,n){return on.current.useReducer(t,e,n)};Ge.useRef=function(t){return on.current.useRef(t)};Ge.useState=function(t){return on.current.useState(t)};Ge.useSyncExternalStore=function(t,e,n){return on.current.useSyncExternalStore(t,e,n)};Ge.useTransition=function(){return on.current.useTransition()};Ge.version="18.3.1";Bm.exports=Ge;var Ct=Bm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv=Ct,iv=Symbol.for("react.element"),rv=Symbol.for("react.fragment"),sv=Object.prototype.hasOwnProperty,av=nv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ov={key:!0,ref:!0,__self:!0,__source:!0};function qm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)sv.call(e,i)&&!ov.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:iv,type:t,key:s,ref:a,props:r,_owner:av.current}}Bl.Fragment=rv;Bl.jsx=qm;Bl.jsxs=qm;Om.exports=Bl;var Me=Om.exports,$m={exports:{}},An={},Km={exports:{}},Zm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,U){var W=F.length;F.push(U);e:for(;0<W;){var Z=W-1>>>1,de=F[Z];if(0<r(de,U))F[Z]=U,F[W]=de,W=Z;else break e}}function n(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var U=F[0],W=F.pop();if(W!==U){F[0]=W;e:for(var Z=0,de=F.length,ye=de>>>1;Z<ye;){var ze=2*(Z+1)-1,Ue=F[ze],Fe=ze+1,B=F[Fe];if(0>r(Ue,W))Fe<de&&0>r(B,Ue)?(F[Z]=B,F[Fe]=W,Z=Fe):(F[Z]=Ue,F[ze]=W,Z=ze);else if(Fe<de&&0>r(B,W))F[Z]=B,F[Fe]=W,Z=Fe;else break e}}return U}function r(F,U){var W=F.sortIndex-U.sortIndex;return W!==0?W:F.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],u=[],d=1,h=null,f=3,p=!1,x=!1,E=!1,m=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(F){for(var U=n(u);U!==null;){if(U.callback===null)i(u);else if(U.startTime<=F)i(u),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(u)}}function S(F){if(E=!1,M(F),!x)if(n(l)!==null)x=!0,j(T);else{var U=n(u);U!==null&&q(S,U.startTime-F)}}function T(F,U){x=!1,E&&(E=!1,c(v),v=-1),p=!0;var W=f;try{for(M(U),h=n(l);h!==null&&(!(h.expirationTime>U)||F&&!D());){var Z=h.callback;if(typeof Z=="function"){h.callback=null,f=h.priorityLevel;var de=Z(h.expirationTime<=U);U=t.unstable_now(),typeof de=="function"?h.callback=de:h===n(l)&&i(l),M(U)}else i(l);h=n(l)}if(h!==null)var ye=!0;else{var ze=n(u);ze!==null&&q(S,ze.startTime-U),ye=!1}return ye}finally{h=null,f=W,p=!1}}var w=!1,R=null,v=-1,A=5,b=-1;function D(){return!(t.unstable_now()-b<A)}function z(){if(R!==null){var F=t.unstable_now();b=F;var U=!0;try{U=R(!0,F)}finally{U?Y():(w=!1,R=null)}}else w=!1}var Y;if(typeof g=="function")Y=function(){g(z)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,G=I.port2;I.port1.onmessage=z,Y=function(){G.postMessage(null)}}else Y=function(){m(z,0)};function j(F){R=F,w||(w=!0,Y())}function q(F,U){v=m(function(){F(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){x||p||(x=!0,j(T))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(F){switch(f){case 1:case 2:case 3:var U=3;break;default:U=f}var W=f;f=U;try{return F()}finally{f=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,U){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var W=f;f=F;try{return U()}finally{f=W}},t.unstable_scheduleCallback=function(F,U,W){var Z=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?Z+W:Z):W=Z,F){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=W+de,F={id:d++,callback:U,priorityLevel:F,startTime:W,expirationTime:de,sortIndex:-1},W>Z?(F.sortIndex=W,e(u,F),n(l)===null&&F===n(u)&&(E?(c(v),v=-1):E=!0,q(S,W-Z))):(F.sortIndex=de,e(l,F),x||p||(x=!0,j(T))),F},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(F){var U=f;return function(){var W=f;f=U;try{return F.apply(this,arguments)}finally{f=W}}}})(Zm);Km.exports=Zm;var lv=Km.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uv=Ct,Tn=lv;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qm=new Set,Sa={};function kr(t,e){As(t,e),As(t+"Capture",e)}function As(t,e){for(Sa[t]=e,t=0;t<e.length;t++)Qm.add(e[t])}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pc=Object.prototype.hasOwnProperty,cv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ah={},Rh={};function fv(t){return pc.call(Rh,t)?!0:pc.call(Ah,t)?!1:cv.test(t)?Rh[t]=!0:(Ah[t]=!0,!1)}function dv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function hv(t,e,n,i){if(e===null||typeof e>"u"||dv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ln(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Vt[t]=new ln(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Vt[e]=new ln(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Vt[t]=new ln(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Vt[t]=new ln(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Vt[t]=new ln(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Vt[t]=new ln(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Vt[t]=new ln(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Vt[t]=new ln(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Vt[t]=new ln(t,5,!1,t.toLowerCase(),null,!1,!1)});var nd=/[\-:]([a-z])/g;function id(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(nd,id);Vt[e]=new ln(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(nd,id);Vt[e]=new ln(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(nd,id);Vt[e]=new ln(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Vt[t]=new ln(t,1,!1,t.toLowerCase(),null,!1,!1)});Vt.xlinkHref=new ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Vt[t]=new ln(t,1,!1,t.toLowerCase(),null,!0,!0)});function rd(t,e,n,i){var r=Vt.hasOwnProperty(e)?Vt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hv(e,n,r,i)&&(n=null),i||r===null?fv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Bi=uv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ja=Symbol.for("react.element"),ss=Symbol.for("react.portal"),as=Symbol.for("react.fragment"),sd=Symbol.for("react.strict_mode"),mc=Symbol.for("react.profiler"),Jm=Symbol.for("react.provider"),jm=Symbol.for("react.context"),ad=Symbol.for("react.forward_ref"),gc=Symbol.for("react.suspense"),_c=Symbol.for("react.suspense_list"),od=Symbol.for("react.memo"),$i=Symbol.for("react.lazy"),eg=Symbol.for("react.offscreen"),Ch=Symbol.iterator;function zs(t){return t===null||typeof t!="object"?null:(t=Ch&&t[Ch]||t["@@iterator"],typeof t=="function"?t:null)}var vt=Object.assign,uu;function na(t){if(uu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);uu=e&&e[1]||""}return`
`+uu+t}var cu=!1;function fu(t,e){if(!t||cu)return"";cu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{cu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?na(t):""}function pv(t){switch(t.tag){case 5:return na(t.type);case 16:return na("Lazy");case 13:return na("Suspense");case 19:return na("SuspenseList");case 0:case 2:case 15:return t=fu(t.type,!1),t;case 11:return t=fu(t.type.render,!1),t;case 1:return t=fu(t.type,!0),t;default:return""}}function vc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case as:return"Fragment";case ss:return"Portal";case mc:return"Profiler";case sd:return"StrictMode";case gc:return"Suspense";case _c:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case jm:return(t.displayName||"Context")+".Consumer";case Jm:return(t._context.displayName||"Context")+".Provider";case ad:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case od:return e=t.displayName||null,e!==null?e:vc(t.type)||"Memo";case $i:e=t._payload,t=t._init;try{return vc(t(e))}catch{}}return null}function mv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vc(e);case 8:return e===sd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ur(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function tg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gv(t){var e=tg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function eo(t){t._valueTracker||(t._valueTracker=gv(t))}function ng(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=tg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function rl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xc(t,e){var n=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function bh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ur(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ig(t,e){e=e.checked,e!=null&&rd(t,"checked",e,!1)}function Sc(t,e){ig(t,e);var n=ur(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?yc(t,e.type,n):e.hasOwnProperty("defaultValue")&&yc(t,e.type,ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ph(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function yc(t,e,n){(e!=="number"||rl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ia=Array.isArray;function vs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ur(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Mc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Lh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(ia(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ur(n)}}function rg(t,e){var n=ur(e.value),i=ur(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Dh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function sg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ec(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?sg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var to,ag=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(to=to||document.createElement("div"),to.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=to.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ya(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_v=["Webkit","ms","Moz","O"];Object.keys(ca).forEach(function(t){_v.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ca[e]=ca[t]})});function og(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ca.hasOwnProperty(t)&&ca[t]?(""+e).trim():e+"px"}function lg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=og(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var vv=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Tc(t,e){if(e){if(vv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function wc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ac=null;function ld(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rc=null,xs=null,Ss=null;function Nh(t){if(t=Wa(t)){if(typeof Rc!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=Gl(e),Rc(t.stateNode,t.type,e))}}function ug(t){xs?Ss?Ss.push(t):Ss=[t]:xs=t}function cg(){if(xs){var t=xs,e=Ss;if(Ss=xs=null,Nh(t),e)for(t=0;t<e.length;t++)Nh(e[t])}}function fg(t,e){return t(e)}function dg(){}var du=!1;function hg(t,e,n){if(du)return t(e,n);du=!0;try{return fg(t,e,n)}finally{du=!1,(xs!==null||Ss!==null)&&(dg(),cg())}}function Ma(t,e){var n=t.stateNode;if(n===null)return null;var i=Gl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var Cc=!1;if(Ni)try{var Hs={};Object.defineProperty(Hs,"passive",{get:function(){Cc=!0}}),window.addEventListener("test",Hs,Hs),window.removeEventListener("test",Hs,Hs)}catch{Cc=!1}function xv(t,e,n,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var fa=!1,sl=null,al=!1,bc=null,Sv={onError:function(t){fa=!0,sl=t}};function yv(t,e,n,i,r,s,a,o,l){fa=!1,sl=null,xv.apply(Sv,arguments)}function Mv(t,e,n,i,r,s,a,o,l){if(yv.apply(this,arguments),fa){if(fa){var u=sl;fa=!1,sl=null}else throw Error(ie(198));al||(al=!0,bc=u)}}function zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function pg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ih(t){if(zr(t)!==t)throw Error(ie(188))}function Ev(t){var e=t.alternate;if(!e){if(e=zr(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ih(r),t;if(s===i)return Ih(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function mg(t){return t=Ev(t),t!==null?gg(t):null}function gg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=gg(t);if(e!==null)return e;t=t.sibling}return null}var _g=Tn.unstable_scheduleCallback,Uh=Tn.unstable_cancelCallback,Tv=Tn.unstable_shouldYield,wv=Tn.unstable_requestPaint,Et=Tn.unstable_now,Av=Tn.unstable_getCurrentPriorityLevel,ud=Tn.unstable_ImmediatePriority,vg=Tn.unstable_UserBlockingPriority,ol=Tn.unstable_NormalPriority,Rv=Tn.unstable_LowPriority,xg=Tn.unstable_IdlePriority,kl=null,ci=null;function Cv(t){if(ci&&typeof ci.onCommitFiberRoot=="function")try{ci.onCommitFiberRoot(kl,t,void 0,(t.current.flags&128)===128)}catch{}}var Zn=Math.clz32?Math.clz32:Lv,bv=Math.log,Pv=Math.LN2;function Lv(t){return t>>>=0,t===0?32:31-(bv(t)/Pv|0)|0}var no=64,io=4194304;function ra(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ll(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ra(o):(s&=a,s!==0&&(i=ra(s)))}else a=n&~r,a!==0?i=ra(a):s!==0&&(i=ra(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Zn(e),r=1<<n,i|=t[n],e&=~r;return i}function Dv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Zn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Dv(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Pc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Sg(){var t=no;return no<<=1,!(no&4194240)&&(no=64),t}function hu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Va(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Zn(e),t[e]=n}function Iv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Zn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function cd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function yg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Mg,fd,Eg,Tg,wg,Lc=!1,ro=[],tr=null,nr=null,ir=null,Ea=new Map,Ta=new Map,Zi=[],Uv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fh(t,e){switch(t){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":Ea.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ta.delete(e.pointerId)}}function Vs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Wa(e),e!==null&&fd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Fv(t,e,n,i,r){switch(e){case"focusin":return tr=Vs(tr,t,e,n,i,r),!0;case"dragenter":return nr=Vs(nr,t,e,n,i,r),!0;case"mouseover":return ir=Vs(ir,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ea.set(s,Vs(Ea.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ta.set(s,Vs(Ta.get(s)||null,t,e,n,i,r)),!0}return!1}function Ag(t){var e=Mr(t.target);if(e!==null){var n=zr(e);if(n!==null){if(e=n.tag,e===13){if(e=pg(n),e!==null){t.blockedOn=e,wg(t.priority,function(){Eg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Dc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ac=i,n.target.dispatchEvent(i),Ac=null}else return e=Wa(n),e!==null&&fd(e),t.blockedOn=n,!1;e.shift()}return!0}function Oh(t,e,n){Vo(t)&&n.delete(e)}function Ov(){Lc=!1,tr!==null&&Vo(tr)&&(tr=null),nr!==null&&Vo(nr)&&(nr=null),ir!==null&&Vo(ir)&&(ir=null),Ea.forEach(Oh),Ta.forEach(Oh)}function Gs(t,e){t.blockedOn===e&&(t.blockedOn=null,Lc||(Lc=!0,Tn.unstable_scheduleCallback(Tn.unstable_NormalPriority,Ov)))}function wa(t){function e(r){return Gs(r,t)}if(0<ro.length){Gs(ro[0],t);for(var n=1;n<ro.length;n++){var i=ro[n];i.blockedOn===t&&(i.blockedOn=null)}}for(tr!==null&&Gs(tr,t),nr!==null&&Gs(nr,t),ir!==null&&Gs(ir,t),Ea.forEach(e),Ta.forEach(e),n=0;n<Zi.length;n++)i=Zi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Zi.length&&(n=Zi[0],n.blockedOn===null);)Ag(n),n.blockedOn===null&&Zi.shift()}var ys=Bi.ReactCurrentBatchConfig,ul=!0;function Bv(t,e,n,i){var r=it,s=ys.transition;ys.transition=null;try{it=1,dd(t,e,n,i)}finally{it=r,ys.transition=s}}function kv(t,e,n,i){var r=it,s=ys.transition;ys.transition=null;try{it=4,dd(t,e,n,i)}finally{it=r,ys.transition=s}}function dd(t,e,n,i){if(ul){var r=Dc(t,e,n,i);if(r===null)Eu(t,e,i,cl,n),Fh(t,i);else if(Fv(r,t,e,n,i))i.stopPropagation();else if(Fh(t,i),e&4&&-1<Uv.indexOf(t)){for(;r!==null;){var s=Wa(r);if(s!==null&&Mg(s),s=Dc(t,e,n,i),s===null&&Eu(t,e,i,cl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Eu(t,e,i,null,n)}}var cl=null;function Dc(t,e,n,i){if(cl=null,t=ld(i),t=Mr(t),t!==null)if(e=zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=pg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return cl=t,null}function Rg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Av()){case ud:return 1;case vg:return 4;case ol:case Rv:return 16;case xg:return 536870912;default:return 16}default:return 16}}var ji=null,hd=null,Go=null;function Cg(){if(Go)return Go;var t,e=hd,n=e.length,i,r="value"in ji?ji.value:ji.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Go=r.slice(t,1<i?1-i:void 0)}function Wo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function so(){return!0}function Bh(){return!1}function Rn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?so:Bh,this.isPropagationStopped=Bh,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=so)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=so)},persist:function(){},isPersistent:so}),e}var Fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pd=Rn(Fs),Ga=vt({},Fs,{view:0,detail:0}),zv=Rn(Ga),pu,mu,Ws,zl=vt({},Ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:md,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ws&&(Ws&&t.type==="mousemove"?(pu=t.screenX-Ws.screenX,mu=t.screenY-Ws.screenY):mu=pu=0,Ws=t),pu)},movementY:function(t){return"movementY"in t?t.movementY:mu}}),kh=Rn(zl),Hv=vt({},zl,{dataTransfer:0}),Vv=Rn(Hv),Gv=vt({},Ga,{relatedTarget:0}),gu=Rn(Gv),Wv=vt({},Fs,{animationName:0,elapsedTime:0,pseudoElement:0}),Xv=Rn(Wv),Yv=vt({},Fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qv=Rn(Yv),$v=vt({},Fs,{data:0}),zh=Rn($v),Kv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Qv[t])?!!e[t]:!1}function md(){return Jv}var jv=vt({},Ga,{key:function(t){if(t.key){var e=Kv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Wo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Zv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:md,charCode:function(t){return t.type==="keypress"?Wo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ex=Rn(jv),tx=vt({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hh=Rn(tx),nx=vt({},Ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:md}),ix=Rn(nx),rx=vt({},Fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),sx=Rn(rx),ax=vt({},zl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ox=Rn(ax),lx=[9,13,27,32],gd=Ni&&"CompositionEvent"in window,da=null;Ni&&"documentMode"in document&&(da=document.documentMode);var ux=Ni&&"TextEvent"in window&&!da,bg=Ni&&(!gd||da&&8<da&&11>=da),Vh=" ",Gh=!1;function Pg(t,e){switch(t){case"keyup":return lx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var os=!1;function cx(t,e){switch(t){case"compositionend":return Lg(e);case"keypress":return e.which!==32?null:(Gh=!0,Vh);case"textInput":return t=e.data,t===Vh&&Gh?null:t;default:return null}}function fx(t,e){if(os)return t==="compositionend"||!gd&&Pg(t,e)?(t=Cg(),Go=hd=ji=null,os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return bg&&e.locale!=="ko"?null:e.data;default:return null}}var dx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!dx[t.type]:e==="textarea"}function Dg(t,e,n,i){ug(i),e=fl(e,"onChange"),0<e.length&&(n=new pd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ha=null,Aa=null;function hx(t){Gg(t,0)}function Hl(t){var e=cs(t);if(ng(e))return t}function px(t,e){if(t==="change")return e}var Ng=!1;if(Ni){var _u;if(Ni){var vu="oninput"in document;if(!vu){var Xh=document.createElement("div");Xh.setAttribute("oninput","return;"),vu=typeof Xh.oninput=="function"}_u=vu}else _u=!1;Ng=_u&&(!document.documentMode||9<document.documentMode)}function Yh(){ha&&(ha.detachEvent("onpropertychange",Ig),Aa=ha=null)}function Ig(t){if(t.propertyName==="value"&&Hl(Aa)){var e=[];Dg(e,Aa,t,ld(t)),hg(hx,e)}}function mx(t,e,n){t==="focusin"?(Yh(),ha=e,Aa=n,ha.attachEvent("onpropertychange",Ig)):t==="focusout"&&Yh()}function gx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hl(Aa)}function _x(t,e){if(t==="click")return Hl(e)}function vx(t,e){if(t==="input"||t==="change")return Hl(e)}function xx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jn=typeof Object.is=="function"?Object.is:xx;function Ra(t,e){if(jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!pc.call(e,r)||!jn(t[r],e[r]))return!1}return!0}function qh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $h(t,e){var n=qh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qh(n)}}function Ug(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ug(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Fg(){for(var t=window,e=rl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=rl(t.document)}return e}function _d(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Sx(t){var e=Fg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ug(n.ownerDocument.documentElement,n)){if(i!==null&&_d(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=$h(n,s);var a=$h(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var yx=Ni&&"documentMode"in document&&11>=document.documentMode,ls=null,Nc=null,pa=null,Ic=!1;function Kh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ic||ls==null||ls!==rl(i)||(i=ls,"selectionStart"in i&&_d(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),pa&&Ra(pa,i)||(pa=i,i=fl(Nc,"onSelect"),0<i.length&&(e=new pd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ls)))}function ao(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var us={animationend:ao("Animation","AnimationEnd"),animationiteration:ao("Animation","AnimationIteration"),animationstart:ao("Animation","AnimationStart"),transitionend:ao("Transition","TransitionEnd")},xu={},Og={};Ni&&(Og=document.createElement("div").style,"AnimationEvent"in window||(delete us.animationend.animation,delete us.animationiteration.animation,delete us.animationstart.animation),"TransitionEvent"in window||delete us.transitionend.transition);function Vl(t){if(xu[t])return xu[t];if(!us[t])return t;var e=us[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Og)return xu[t]=e[n];return t}var Bg=Vl("animationend"),kg=Vl("animationiteration"),zg=Vl("animationstart"),Hg=Vl("transitionend"),Vg=new Map,Zh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(t,e){Vg.set(t,e),kr(e,[t])}for(var Su=0;Su<Zh.length;Su++){var yu=Zh[Su],Mx=yu.toLowerCase(),Ex=yu[0].toUpperCase()+yu.slice(1);fr(Mx,"on"+Ex)}fr(Bg,"onAnimationEnd");fr(kg,"onAnimationIteration");fr(zg,"onAnimationStart");fr("dblclick","onDoubleClick");fr("focusin","onFocus");fr("focusout","onBlur");fr(Hg,"onTransitionEnd");As("onMouseEnter",["mouseout","mouseover"]);As("onMouseLeave",["mouseout","mouseover"]);As("onPointerEnter",["pointerout","pointerover"]);As("onPointerLeave",["pointerout","pointerover"]);kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tx=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function Qh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Mv(i,e,void 0,t),t.currentTarget=null}function Gg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Qh(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Qh(r,o,u),s=l}}}if(al)throw t=bc,al=!1,bc=null,t}function ft(t,e){var n=e[kc];n===void 0&&(n=e[kc]=new Set);var i=t+"__bubble";n.has(i)||(Wg(e,t,2,!1),n.add(i))}function Mu(t,e,n){var i=0;e&&(i|=4),Wg(n,t,i,e)}var oo="_reactListening"+Math.random().toString(36).slice(2);function Ca(t){if(!t[oo]){t[oo]=!0,Qm.forEach(function(n){n!=="selectionchange"&&(Tx.has(n)||Mu(n,!1,t),Mu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[oo]||(e[oo]=!0,Mu("selectionchange",!1,e))}}function Wg(t,e,n,i){switch(Rg(e)){case 1:var r=Bv;break;case 4:r=kv;break;default:r=dd}n=r.bind(null,e,n,t),r=void 0,!Cc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Eu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Mr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}hg(function(){var u=s,d=ld(n),h=[];e:{var f=Vg.get(t);if(f!==void 0){var p=pd,x=t;switch(t){case"keypress":if(Wo(n)===0)break e;case"keydown":case"keyup":p=ex;break;case"focusin":x="focus",p=gu;break;case"focusout":x="blur",p=gu;break;case"beforeblur":case"afterblur":p=gu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=kh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Vv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=ix;break;case Bg:case kg:case zg:p=Xv;break;case Hg:p=sx;break;case"scroll":p=zv;break;case"wheel":p=ox;break;case"copy":case"cut":case"paste":p=qv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Hh}var E=(e&4)!==0,m=!E&&t==="scroll",c=E?f!==null?f+"Capture":null:f;E=[];for(var g=u,M;g!==null;){M=g;var S=M.stateNode;if(M.tag===5&&S!==null&&(M=S,c!==null&&(S=Ma(g,c),S!=null&&E.push(ba(g,S,M)))),m)break;g=g.return}0<E.length&&(f=new p(f,x,null,n,d),h.push({event:f,listeners:E}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Ac&&(x=n.relatedTarget||n.fromElement)&&(Mr(x)||x[Ii]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=u,x=x?Mr(x):null,x!==null&&(m=zr(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=u),p!==x)){if(E=kh,S="onMouseLeave",c="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(E=Hh,S="onPointerLeave",c="onPointerEnter",g="pointer"),m=p==null?f:cs(p),M=x==null?f:cs(x),f=new E(S,g+"leave",p,n,d),f.target=m,f.relatedTarget=M,S=null,Mr(d)===u&&(E=new E(c,g+"enter",x,n,d),E.target=M,E.relatedTarget=m,S=E),m=S,p&&x)t:{for(E=p,c=x,g=0,M=E;M;M=Wr(M))g++;for(M=0,S=c;S;S=Wr(S))M++;for(;0<g-M;)E=Wr(E),g--;for(;0<M-g;)c=Wr(c),M--;for(;g--;){if(E===c||c!==null&&E===c.alternate)break t;E=Wr(E),c=Wr(c)}E=null}else E=null;p!==null&&Jh(h,f,p,E,!1),x!==null&&m!==null&&Jh(h,m,x,E,!0)}}e:{if(f=u?cs(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=px;else if(Wh(f))if(Ng)T=vx;else{T=gx;var w=mx}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=_x);if(T&&(T=T(t,u))){Dg(h,T,n,d);break e}w&&w(t,f,u),t==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&yc(f,"number",f.value)}switch(w=u?cs(u):window,t){case"focusin":(Wh(w)||w.contentEditable==="true")&&(ls=w,Nc=u,pa=null);break;case"focusout":pa=Nc=ls=null;break;case"mousedown":Ic=!0;break;case"contextmenu":case"mouseup":case"dragend":Ic=!1,Kh(h,n,d);break;case"selectionchange":if(yx)break;case"keydown":case"keyup":Kh(h,n,d)}var R;if(gd)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else os?Pg(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(bg&&n.locale!=="ko"&&(os||v!=="onCompositionStart"?v==="onCompositionEnd"&&os&&(R=Cg()):(ji=d,hd="value"in ji?ji.value:ji.textContent,os=!0)),w=fl(u,v),0<w.length&&(v=new zh(v,t,null,n,d),h.push({event:v,listeners:w}),R?v.data=R:(R=Lg(n),R!==null&&(v.data=R)))),(R=ux?cx(t,n):fx(t,n))&&(u=fl(u,"onBeforeInput"),0<u.length&&(d=new zh("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=R))}Gg(h,e)})}function ba(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ma(t,n),s!=null&&i.unshift(ba(t,s,r)),s=Ma(t,e),s!=null&&i.push(ba(t,s,r))),t=t.return}return i}function Wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=Ma(n,s),l!=null&&a.unshift(ba(n,l,o))):r||(l=Ma(n,s),l!=null&&a.push(ba(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var wx=/\r\n?/g,Ax=/\u0000|\uFFFD/g;function jh(t){return(typeof t=="string"?t:""+t).replace(wx,`
`).replace(Ax,"")}function lo(t,e,n){if(e=jh(e),jh(t)!==e&&n)throw Error(ie(425))}function dl(){}var Uc=null,Fc=null;function Oc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Bc=typeof setTimeout=="function"?setTimeout:void 0,Rx=typeof clearTimeout=="function"?clearTimeout:void 0,ep=typeof Promise=="function"?Promise:void 0,Cx=typeof queueMicrotask=="function"?queueMicrotask:typeof ep<"u"?function(t){return ep.resolve(null).then(t).catch(bx)}:Bc;function bx(t){setTimeout(function(){throw t})}function Tu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),wa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);wa(e)}function rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function tp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Os=Math.random().toString(36).slice(2),oi="__reactFiber$"+Os,Pa="__reactProps$"+Os,Ii="__reactContainer$"+Os,kc="__reactEvents$"+Os,Px="__reactListeners$"+Os,Lx="__reactHandles$"+Os;function Mr(t){var e=t[oi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ii]||n[oi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=tp(t);t!==null;){if(n=t[oi])return n;t=tp(t)}return e}t=n,n=t.parentNode}return null}function Wa(t){return t=t[oi]||t[Ii],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function Gl(t){return t[Pa]||null}var zc=[],fs=-1;function dr(t){return{current:t}}function dt(t){0>fs||(t.current=zc[fs],zc[fs]=null,fs--)}function ut(t,e){fs++,zc[fs]=t.current,t.current=e}var cr={},jt=dr(cr),pn=dr(!1),br=cr;function Rs(t,e){var n=t.type.contextTypes;if(!n)return cr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function mn(t){return t=t.childContextTypes,t!=null}function hl(){dt(pn),dt(jt)}function np(t,e,n){if(jt.current!==cr)throw Error(ie(168));ut(jt,e),ut(pn,n)}function Xg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,mv(t)||"Unknown",r));return vt({},n,i)}function pl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cr,br=jt.current,ut(jt,t),ut(pn,pn.current),!0}function ip(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=Xg(t,e,br),i.__reactInternalMemoizedMergedChildContext=t,dt(pn),dt(jt),ut(jt,t)):dt(pn),ut(pn,n)}var Ei=null,Wl=!1,wu=!1;function Yg(t){Ei===null?Ei=[t]:Ei.push(t)}function Dx(t){Wl=!0,Yg(t)}function hr(){if(!wu&&Ei!==null){wu=!0;var t=0,e=it;try{var n=Ei;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ei=null,Wl=!1}catch(r){throw Ei!==null&&(Ei=Ei.slice(t+1)),_g(ud,hr),r}finally{it=e,wu=!1}}return null}var ds=[],hs=0,ml=null,gl=0,Dn=[],Nn=0,Pr=null,Ai=1,Ri="";function Sr(t,e){ds[hs++]=gl,ds[hs++]=ml,ml=t,gl=e}function qg(t,e,n){Dn[Nn++]=Ai,Dn[Nn++]=Ri,Dn[Nn++]=Pr,Pr=t;var i=Ai;t=Ri;var r=32-Zn(i)-1;i&=~(1<<r),n+=1;var s=32-Zn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ai=1<<32-Zn(e)+r|n<<r|i,Ri=s+t}else Ai=1<<s|n<<r|i,Ri=t}function vd(t){t.return!==null&&(Sr(t,1),qg(t,1,0))}function xd(t){for(;t===ml;)ml=ds[--hs],ds[hs]=null,gl=ds[--hs],ds[hs]=null;for(;t===Pr;)Pr=Dn[--Nn],Dn[Nn]=null,Ri=Dn[--Nn],Dn[Nn]=null,Ai=Dn[--Nn],Dn[Nn]=null}var En=null,Mn=null,pt=!1,Yn=null;function $g(t,e){var n=Un(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function rp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,En=t,Mn=rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,En=t,Mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Pr!==null?{id:Ai,overflow:Ri}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Un(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,En=t,Mn=null,!0):!1;default:return!1}}function Hc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Vc(t){if(pt){var e=Mn;if(e){var n=e;if(!rp(t,e)){if(Hc(t))throw Error(ie(418));e=rr(n.nextSibling);var i=En;e&&rp(t,e)?$g(i,n):(t.flags=t.flags&-4097|2,pt=!1,En=t)}}else{if(Hc(t))throw Error(ie(418));t.flags=t.flags&-4097|2,pt=!1,En=t}}}function sp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;En=t}function uo(t){if(t!==En)return!1;if(!pt)return sp(t),pt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Oc(t.type,t.memoizedProps)),e&&(e=Mn)){if(Hc(t))throw Kg(),Error(ie(418));for(;e;)$g(t,e),e=rr(e.nextSibling)}if(sp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mn=rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mn=null}}else Mn=En?rr(t.stateNode.nextSibling):null;return!0}function Kg(){for(var t=Mn;t;)t=rr(t.nextSibling)}function Cs(){Mn=En=null,pt=!1}function Sd(t){Yn===null?Yn=[t]:Yn.push(t)}var Nx=Bi.ReactCurrentBatchConfig;function Xs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function co(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ap(t){var e=t._init;return e(t._payload)}function Zg(t){function e(c,g){if(t){var M=c.deletions;M===null?(c.deletions=[g],c.flags|=16):M.push(g)}}function n(c,g){if(!t)return null;for(;g!==null;)e(c,g),g=g.sibling;return null}function i(c,g){for(c=new Map;g!==null;)g.key!==null?c.set(g.key,g):c.set(g.index,g),g=g.sibling;return c}function r(c,g){return c=lr(c,g),c.index=0,c.sibling=null,c}function s(c,g,M){return c.index=M,t?(M=c.alternate,M!==null?(M=M.index,M<g?(c.flags|=2,g):M):(c.flags|=2,g)):(c.flags|=1048576,g)}function a(c){return t&&c.alternate===null&&(c.flags|=2),c}function o(c,g,M,S){return g===null||g.tag!==6?(g=Du(M,c.mode,S),g.return=c,g):(g=r(g,M),g.return=c,g)}function l(c,g,M,S){var T=M.type;return T===as?d(c,g,M.props.children,S,M.key):g!==null&&(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===$i&&ap(T)===g.type)?(S=r(g,M.props),S.ref=Xs(c,g,M),S.return=c,S):(S=Qo(M.type,M.key,M.props,null,c.mode,S),S.ref=Xs(c,g,M),S.return=c,S)}function u(c,g,M,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==M.containerInfo||g.stateNode.implementation!==M.implementation?(g=Nu(M,c.mode,S),g.return=c,g):(g=r(g,M.children||[]),g.return=c,g)}function d(c,g,M,S,T){return g===null||g.tag!==7?(g=Cr(M,c.mode,S,T),g.return=c,g):(g=r(g,M),g.return=c,g)}function h(c,g,M){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Du(""+g,c.mode,M),g.return=c,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ja:return M=Qo(g.type,g.key,g.props,null,c.mode,M),M.ref=Xs(c,null,g),M.return=c,M;case ss:return g=Nu(g,c.mode,M),g.return=c,g;case $i:var S=g._init;return h(c,S(g._payload),M)}if(ia(g)||zs(g))return g=Cr(g,c.mode,M,null),g.return=c,g;co(c,g)}return null}function f(c,g,M,S){var T=g!==null?g.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return T!==null?null:o(c,g,""+M,S);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ja:return M.key===T?l(c,g,M,S):null;case ss:return M.key===T?u(c,g,M,S):null;case $i:return T=M._init,f(c,g,T(M._payload),S)}if(ia(M)||zs(M))return T!==null?null:d(c,g,M,S,null);co(c,M)}return null}function p(c,g,M,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return c=c.get(M)||null,o(g,c,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ja:return c=c.get(S.key===null?M:S.key)||null,l(g,c,S,T);case ss:return c=c.get(S.key===null?M:S.key)||null,u(g,c,S,T);case $i:var w=S._init;return p(c,g,M,w(S._payload),T)}if(ia(S)||zs(S))return c=c.get(M)||null,d(g,c,S,T,null);co(g,S)}return null}function x(c,g,M,S){for(var T=null,w=null,R=g,v=g=0,A=null;R!==null&&v<M.length;v++){R.index>v?(A=R,R=null):A=R.sibling;var b=f(c,R,M[v],S);if(b===null){R===null&&(R=A);break}t&&R&&b.alternate===null&&e(c,R),g=s(b,g,v),w===null?T=b:w.sibling=b,w=b,R=A}if(v===M.length)return n(c,R),pt&&Sr(c,v),T;if(R===null){for(;v<M.length;v++)R=h(c,M[v],S),R!==null&&(g=s(R,g,v),w===null?T=R:w.sibling=R,w=R);return pt&&Sr(c,v),T}for(R=i(c,R);v<M.length;v++)A=p(R,c,v,M[v],S),A!==null&&(t&&A.alternate!==null&&R.delete(A.key===null?v:A.key),g=s(A,g,v),w===null?T=A:w.sibling=A,w=A);return t&&R.forEach(function(D){return e(c,D)}),pt&&Sr(c,v),T}function E(c,g,M,S){var T=zs(M);if(typeof T!="function")throw Error(ie(150));if(M=T.call(M),M==null)throw Error(ie(151));for(var w=T=null,R=g,v=g=0,A=null,b=M.next();R!==null&&!b.done;v++,b=M.next()){R.index>v?(A=R,R=null):A=R.sibling;var D=f(c,R,b.value,S);if(D===null){R===null&&(R=A);break}t&&R&&D.alternate===null&&e(c,R),g=s(D,g,v),w===null?T=D:w.sibling=D,w=D,R=A}if(b.done)return n(c,R),pt&&Sr(c,v),T;if(R===null){for(;!b.done;v++,b=M.next())b=h(c,b.value,S),b!==null&&(g=s(b,g,v),w===null?T=b:w.sibling=b,w=b);return pt&&Sr(c,v),T}for(R=i(c,R);!b.done;v++,b=M.next())b=p(R,c,v,b.value,S),b!==null&&(t&&b.alternate!==null&&R.delete(b.key===null?v:b.key),g=s(b,g,v),w===null?T=b:w.sibling=b,w=b);return t&&R.forEach(function(z){return e(c,z)}),pt&&Sr(c,v),T}function m(c,g,M,S){if(typeof M=="object"&&M!==null&&M.type===as&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case ja:e:{for(var T=M.key,w=g;w!==null;){if(w.key===T){if(T=M.type,T===as){if(w.tag===7){n(c,w.sibling),g=r(w,M.props.children),g.return=c,c=g;break e}}else if(w.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===$i&&ap(T)===w.type){n(c,w.sibling),g=r(w,M.props),g.ref=Xs(c,w,M),g.return=c,c=g;break e}n(c,w);break}else e(c,w);w=w.sibling}M.type===as?(g=Cr(M.props.children,c.mode,S,M.key),g.return=c,c=g):(S=Qo(M.type,M.key,M.props,null,c.mode,S),S.ref=Xs(c,g,M),S.return=c,c=S)}return a(c);case ss:e:{for(w=M.key;g!==null;){if(g.key===w)if(g.tag===4&&g.stateNode.containerInfo===M.containerInfo&&g.stateNode.implementation===M.implementation){n(c,g.sibling),g=r(g,M.children||[]),g.return=c,c=g;break e}else{n(c,g);break}else e(c,g);g=g.sibling}g=Nu(M,c.mode,S),g.return=c,c=g}return a(c);case $i:return w=M._init,m(c,g,w(M._payload),S)}if(ia(M))return x(c,g,M,S);if(zs(M))return E(c,g,M,S);co(c,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,g!==null&&g.tag===6?(n(c,g.sibling),g=r(g,M),g.return=c,c=g):(n(c,g),g=Du(M,c.mode,S),g.return=c,c=g),a(c)):n(c,g)}return m}var bs=Zg(!0),Qg=Zg(!1),_l=dr(null),vl=null,ps=null,yd=null;function Md(){yd=ps=vl=null}function Ed(t){var e=_l.current;dt(_l),t._currentValue=e}function Gc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ms(t,e){vl=t,yd=ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(hn=!0),t.firstContext=null)}function On(t){var e=t._currentValue;if(yd!==t)if(t={context:t,memoizedValue:e,next:null},ps===null){if(vl===null)throw Error(ie(308));ps=t,vl.dependencies={lanes:0,firstContext:t}}else ps=ps.next=t;return e}var Er=null;function Td(t){Er===null?Er=[t]:Er.push(t)}function Jg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Td(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ui(t,i)}function Ui(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ki=!1;function wd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function sr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ui(t,n)}return r=i.interleaved,r===null?(e.next=e,Td(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ui(t,n)}function Xo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,cd(t,n)}}function op(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function xl(t,e,n,i){var r=t.updateQueue;Ki=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=u:o.next=u,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,d=u=l=null,o=s;do{var f=o.lane,p=o.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=t,E=o;switch(f=e,p=n,E.tag){case 1:if(x=E.payload,typeof x=="function"){h=x.call(p,h,f);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=E.payload,f=typeof x=="function"?x.call(p,h,f):x,f==null)break e;h=vt({},h,f);break e;case 2:Ki=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else p={eventTime:p,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(u=d=p,l=h):d=d.next=p,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Dr|=a,t.lanes=a,t.memoizedState=h}}function lp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Xa={},fi=dr(Xa),La=dr(Xa),Da=dr(Xa);function Tr(t){if(t===Xa)throw Error(ie(174));return t}function Ad(t,e){switch(ut(Da,e),ut(La,t),ut(fi,Xa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ec(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ec(e,t)}dt(fi),ut(fi,e)}function Ps(){dt(fi),dt(La),dt(Da)}function e_(t){Tr(Da.current);var e=Tr(fi.current),n=Ec(e,t.type);e!==n&&(ut(La,t),ut(fi,n))}function Rd(t){La.current===t&&(dt(fi),dt(La))}var gt=dr(0);function Sl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Au=[];function Cd(){for(var t=0;t<Au.length;t++)Au[t]._workInProgressVersionPrimary=null;Au.length=0}var Yo=Bi.ReactCurrentDispatcher,Ru=Bi.ReactCurrentBatchConfig,Lr=0,_t=null,Lt=null,Ot=null,yl=!1,ma=!1,Na=0,Ix=0;function Xt(){throw Error(ie(321))}function bd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!jn(t[n],e[n]))return!1;return!0}function Pd(t,e,n,i,r,s){if(Lr=s,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Yo.current=t===null||t.memoizedState===null?Bx:kx,t=n(i,r),ma){s=0;do{if(ma=!1,Na=0,25<=s)throw Error(ie(301));s+=1,Ot=Lt=null,e.updateQueue=null,Yo.current=zx,t=n(i,r)}while(ma)}if(Yo.current=Ml,e=Lt!==null&&Lt.next!==null,Lr=0,Ot=Lt=_t=null,yl=!1,e)throw Error(ie(300));return t}function Ld(){var t=Na!==0;return Na=0,t}function si(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?_t.memoizedState=Ot=t:Ot=Ot.next=t,Ot}function Bn(){if(Lt===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=Lt.next;var e=Ot===null?_t.memoizedState:Ot.next;if(e!==null)Ot=e,Lt=t;else{if(t===null)throw Error(ie(310));Lt=t,t={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},Ot===null?_t.memoizedState=Ot=t:Ot=Ot.next=t}return Ot}function Ia(t,e){return typeof e=="function"?e(t):e}function Cu(t){var e=Bn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=Lt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var d=u.lane;if((Lr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,_t.lanes|=d,Dr|=d}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,jn(i,e.memoizedState)||(hn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,_t.lanes|=s,Dr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function bu(t){var e=Bn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);jn(s,e.memoizedState)||(hn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function t_(){}function n_(t,e){var n=_t,i=Bn(),r=e(),s=!jn(i.memoizedState,r);if(s&&(i.memoizedState=r,hn=!0),i=i.queue,Dd(s_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ot!==null&&Ot.memoizedState.tag&1){if(n.flags|=2048,Ua(9,r_.bind(null,n,i,r,e),void 0,null),Bt===null)throw Error(ie(349));Lr&30||i_(n,e,r)}return r}function i_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function r_(t,e,n,i){e.value=n,e.getSnapshot=i,a_(e)&&o_(t)}function s_(t,e,n){return n(function(){a_(e)&&o_(t)})}function a_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jn(t,n)}catch{return!0}}function o_(t){var e=Ui(t,1);e!==null&&Qn(e,t,1,-1)}function up(t){var e=si();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:t},e.queue=t,t=t.dispatch=Ox.bind(null,_t,t),[e.memoizedState,t]}function Ua(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function l_(){return Bn().memoizedState}function qo(t,e,n,i){var r=si();_t.flags|=t,r.memoizedState=Ua(1|e,n,void 0,i===void 0?null:i)}function Xl(t,e,n,i){var r=Bn();i=i===void 0?null:i;var s=void 0;if(Lt!==null){var a=Lt.memoizedState;if(s=a.destroy,i!==null&&bd(i,a.deps)){r.memoizedState=Ua(e,n,s,i);return}}_t.flags|=t,r.memoizedState=Ua(1|e,n,s,i)}function cp(t,e){return qo(8390656,8,t,e)}function Dd(t,e){return Xl(2048,8,t,e)}function u_(t,e){return Xl(4,2,t,e)}function c_(t,e){return Xl(4,4,t,e)}function f_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function d_(t,e,n){return n=n!=null?n.concat([t]):null,Xl(4,4,f_.bind(null,e,t),n)}function Nd(){}function h_(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&bd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function p_(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&bd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function m_(t,e,n){return Lr&21?(jn(n,e)||(n=Sg(),_t.lanes|=n,Dr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,hn=!0),t.memoizedState=n)}function Ux(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=Ru.transition;Ru.transition={};try{t(!1),e()}finally{it=n,Ru.transition=i}}function g_(){return Bn().memoizedState}function Fx(t,e,n){var i=or(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},__(t))v_(e,n);else if(n=Jg(t,e,n,i),n!==null){var r=rn();Qn(n,t,i,r),x_(n,e,i)}}function Ox(t,e,n){var i=or(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(__(t))v_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,jn(o,a)){var l=e.interleaved;l===null?(r.next=r,Td(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Jg(t,e,r,i),n!==null&&(r=rn(),Qn(n,t,i,r),x_(n,e,i))}}function __(t){var e=t.alternate;return t===_t||e!==null&&e===_t}function v_(t,e){ma=yl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function x_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,cd(t,n)}}var Ml={readContext:On,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useInsertionEffect:Xt,useLayoutEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useMutableSource:Xt,useSyncExternalStore:Xt,useId:Xt,unstable_isNewReconciler:!1},Bx={readContext:On,useCallback:function(t,e){return si().memoizedState=[t,e===void 0?null:e],t},useContext:On,useEffect:cp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,qo(4194308,4,f_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return qo(4194308,4,t,e)},useInsertionEffect:function(t,e){return qo(4,2,t,e)},useMemo:function(t,e){var n=si();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=si();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Fx.bind(null,_t,t),[i.memoizedState,t]},useRef:function(t){var e=si();return t={current:t},e.memoizedState=t},useState:up,useDebugValue:Nd,useDeferredValue:function(t){return si().memoizedState=t},useTransition:function(){var t=up(!1),e=t[0];return t=Ux.bind(null,t[1]),si().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=_t,r=si();if(pt){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Bt===null)throw Error(ie(349));Lr&30||i_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,cp(s_.bind(null,i,s,t),[t]),i.flags|=2048,Ua(9,r_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=si(),e=Bt.identifierPrefix;if(pt){var n=Ri,i=Ai;n=(i&~(1<<32-Zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Na++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ix++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},kx={readContext:On,useCallback:h_,useContext:On,useEffect:Dd,useImperativeHandle:d_,useInsertionEffect:u_,useLayoutEffect:c_,useMemo:p_,useReducer:Cu,useRef:l_,useState:function(){return Cu(Ia)},useDebugValue:Nd,useDeferredValue:function(t){var e=Bn();return m_(e,Lt.memoizedState,t)},useTransition:function(){var t=Cu(Ia)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:t_,useSyncExternalStore:n_,useId:g_,unstable_isNewReconciler:!1},zx={readContext:On,useCallback:h_,useContext:On,useEffect:Dd,useImperativeHandle:d_,useInsertionEffect:u_,useLayoutEffect:c_,useMemo:p_,useReducer:bu,useRef:l_,useState:function(){return bu(Ia)},useDebugValue:Nd,useDeferredValue:function(t){var e=Bn();return Lt===null?e.memoizedState=t:m_(e,Lt.memoizedState,t)},useTransition:function(){var t=bu(Ia)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:t_,useSyncExternalStore:n_,useId:g_,unstable_isNewReconciler:!1};function Wn(t,e){if(t&&t.defaultProps){e=vt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Wc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:vt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Yl={isMounted:function(t){return(t=t._reactInternals)?zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=rn(),r=or(t),s=bi(i,r);s.payload=e,n!=null&&(s.callback=n),e=sr(t,s,r),e!==null&&(Qn(e,t,r,i),Xo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=rn(),r=or(t),s=bi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=sr(t,s,r),e!==null&&(Qn(e,t,r,i),Xo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rn(),i=or(t),r=bi(n,i);r.tag=2,e!=null&&(r.callback=e),e=sr(t,r,i),e!==null&&(Qn(e,t,i,n),Xo(e,t,i))}};function fp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ra(n,i)||!Ra(r,s):!0}function S_(t,e,n){var i=!1,r=cr,s=e.contextType;return typeof s=="object"&&s!==null?s=On(s):(r=mn(e)?br:jt.current,i=e.contextTypes,s=(i=i!=null)?Rs(t,r):cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function dp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Yl.enqueueReplaceState(e,e.state,null)}function Xc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},wd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=On(s):(s=mn(e)?br:jt.current,r.context=Rs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Wc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Yl.enqueueReplaceState(r,r.state,null),xl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ls(t,e){try{var n="",i=e;do n+=pv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Pu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Yc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Hx=typeof WeakMap=="function"?WeakMap:Map;function y_(t,e,n){n=bi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Tl||(Tl=!0,nf=i),Yc(t,e)},n}function M_(t,e,n){n=bi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Yc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Yc(t,e),typeof i!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function hp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Hx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=tS.bind(null,t,e,n),e.then(t,t))}function pp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function mp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bi(-1,1),e.tag=2,sr(n,e,1))),n.lanes|=1),t)}var Vx=Bi.ReactCurrentOwner,hn=!1;function nn(t,e,n,i){e.child=t===null?Qg(e,null,n,i):bs(e,t.child,n,i)}function gp(t,e,n,i,r){n=n.render;var s=e.ref;return Ms(e,r),i=Pd(t,e,n,i,s,r),n=Ld(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(pt&&n&&vd(e),e.flags|=1,nn(t,e,i,r),e.child)}function _p(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Hd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,E_(t,e,s,i,r)):(t=Qo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ra,n(a,i)&&t.ref===e.ref)return Fi(t,e,r)}return e.flags|=1,t=lr(s,i),t.ref=e.ref,t.return=e,e.child=t}function E_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ra(s,i)&&t.ref===e.ref)if(hn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(hn=!0);else return e.lanes=t.lanes,Fi(t,e,r)}return qc(t,e,n,i,r)}function T_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(gs,yn),yn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(gs,yn),yn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ut(gs,yn),yn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ut(gs,yn),yn|=i;return nn(t,e,r,n),e.child}function w_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function qc(t,e,n,i,r){var s=mn(n)?br:jt.current;return s=Rs(e,s),Ms(e,r),n=Pd(t,e,n,i,s,r),i=Ld(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(pt&&i&&vd(e),e.flags|=1,nn(t,e,n,r),e.child)}function vp(t,e,n,i,r){if(mn(n)){var s=!0;pl(e)}else s=!1;if(Ms(e,r),e.stateNode===null)$o(t,e),S_(e,n,i),Xc(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=On(u):(u=mn(n)?br:jt.current,u=Rs(e,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&dp(e,a,i,u),Ki=!1;var f=e.memoizedState;a.state=f,xl(e,i,a,r),l=e.memoizedState,o!==i||f!==l||pn.current||Ki?(typeof d=="function"&&(Wc(e,n,d,i),l=e.memoizedState),(o=Ki||fp(e,n,o,i,f,l,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,jg(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Wn(e.type,o),a.props=u,h=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=On(l):(l=mn(n)?br:jt.current,l=Rs(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||f!==l)&&dp(e,a,i,l),Ki=!1,f=e.memoizedState,a.state=f,xl(e,i,a,r);var x=e.memoizedState;o!==h||f!==x||pn.current||Ki?(typeof p=="function"&&(Wc(e,n,p,i),x=e.memoizedState),(u=Ki||fp(e,n,u,i,f,x,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,x,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),a.props=i,a.state=x,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return $c(t,e,n,i,s,r)}function $c(t,e,n,i,r,s){w_(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&ip(e,n,!1),Fi(t,e,s);i=e.stateNode,Vx.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=bs(e,t.child,null,s),e.child=bs(e,null,o,s)):nn(t,e,o,s),e.memoizedState=i.state,r&&ip(e,n,!0),e.child}function A_(t){var e=t.stateNode;e.pendingContext?np(t,e.pendingContext,e.pendingContext!==e.context):e.context&&np(t,e.context,!1),Ad(t,e.containerInfo)}function xp(t,e,n,i,r){return Cs(),Sd(r),e.flags|=256,nn(t,e,n,i),e.child}var Kc={dehydrated:null,treeContext:null,retryLane:0};function Zc(t){return{baseLanes:t,cachePool:null,transitions:null}}function R_(t,e,n){var i=e.pendingProps,r=gt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(gt,r&1),t===null)return Vc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Kl(a,i,0,null),t=Cr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Zc(n),e.memoizedState=Kc,t):Id(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Gx(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=lr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=lr(o,s):(s=Cr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Zc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Kc,i}return s=t.child,t=s.sibling,i=lr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Id(t,e){return e=Kl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function fo(t,e,n,i){return i!==null&&Sd(i),bs(e,t.child,null,n),t=Id(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Gx(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Pu(Error(ie(422))),fo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Kl({mode:"visible",children:i.children},r,0,null),s=Cr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&bs(e,t.child,null,a),e.child.memoizedState=Zc(a),e.memoizedState=Kc,s);if(!(e.mode&1))return fo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ie(419)),i=Pu(s,i,void 0),fo(t,e,a,i)}if(o=(a&t.childLanes)!==0,hn||o){if(i=Bt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ui(t,r),Qn(i,t,r,-1))}return zd(),i=Pu(Error(ie(421))),fo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=nS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Mn=rr(r.nextSibling),En=e,pt=!0,Yn=null,t!==null&&(Dn[Nn++]=Ai,Dn[Nn++]=Ri,Dn[Nn++]=Pr,Ai=t.id,Ri=t.overflow,Pr=e),e=Id(e,i.children),e.flags|=4096,e)}function Sp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Gc(t.return,e,n)}function Lu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function C_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(nn(t,e,i.children,n),i=gt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sp(t,n,e);else if(t.tag===19)Sp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Sl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Lu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Sl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Lu(e,!0,n,null,s);break;case"together":Lu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $o(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Dr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Wx(t,e,n){switch(e.tag){case 3:A_(e),Cs();break;case 5:e_(e);break;case 1:mn(e.type)&&pl(e);break;case 4:Ad(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(_l,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(gt,gt.current&1),e.flags|=128,null):n&e.child.childLanes?R_(t,e,n):(ut(gt,gt.current&1),t=Fi(t,e,n),t!==null?t.sibling:null);ut(gt,gt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return C_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,T_(t,e,n)}return Fi(t,e,n)}var b_,Qc,P_,L_;b_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qc=function(){};P_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Tr(fi.current);var s=null;switch(n){case"input":r=xc(t,r),i=xc(t,i),s=[];break;case"select":r=vt({},r,{value:void 0}),i=vt({},i,{value:void 0}),s=[];break;case"textarea":r=Mc(t,r),i=Mc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=dl)}Tc(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Sa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Sa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ft("scroll",t),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};L_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ys(t,e){if(!pt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Xx(t,e,n){var i=e.pendingProps;switch(xd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return mn(e.type)&&hl(),Yt(e),null;case 3:return i=e.stateNode,Ps(),dt(pn),dt(jt),Cd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(uo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yn!==null&&(af(Yn),Yn=null))),Qc(t,e),Yt(e),null;case 5:Rd(e);var r=Tr(Da.current);if(n=e.type,t!==null&&e.stateNode!=null)P_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Yt(e),null}if(t=Tr(fi.current),uo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[oi]=e,i[Pa]=s,t=(e.mode&1)!==0,n){case"dialog":ft("cancel",i),ft("close",i);break;case"iframe":case"object":case"embed":ft("load",i);break;case"video":case"audio":for(r=0;r<sa.length;r++)ft(sa[r],i);break;case"source":ft("error",i);break;case"img":case"image":case"link":ft("error",i),ft("load",i);break;case"details":ft("toggle",i);break;case"input":bh(i,s),ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ft("invalid",i);break;case"textarea":Lh(i,s),ft("invalid",i)}Tc(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&lo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&lo(i.textContent,o,t),r=["children",""+o]):Sa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ft("scroll",i)}switch(n){case"input":eo(i),Ph(i,s,!0);break;case"textarea":eo(i),Dh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=dl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=sg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[oi]=e,t[Pa]=i,b_(t,e,!1,!1),e.stateNode=t;e:{switch(a=wc(n,i),n){case"dialog":ft("cancel",t),ft("close",t),r=i;break;case"iframe":case"object":case"embed":ft("load",t),r=i;break;case"video":case"audio":for(r=0;r<sa.length;r++)ft(sa[r],t);r=i;break;case"source":ft("error",t),r=i;break;case"img":case"image":case"link":ft("error",t),ft("load",t),r=i;break;case"details":ft("toggle",t),r=i;break;case"input":bh(t,i),r=xc(t,i),ft("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=vt({},i,{value:void 0}),ft("invalid",t);break;case"textarea":Lh(t,i),r=Mc(t,i),ft("invalid",t);break;default:r=i}Tc(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?lg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ag(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ya(t,l):typeof l=="number"&&ya(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Sa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ft("scroll",t):l!=null&&rd(t,s,l,a))}switch(n){case"input":eo(t),Ph(t,i,!1);break;case"textarea":eo(t),Dh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ur(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?vs(t,!!i.multiple,s,!1):i.defaultValue!=null&&vs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=dl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(t&&e.stateNode!=null)L_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=Tr(Da.current),Tr(fi.current),uo(e)){if(i=e.stateNode,n=e.memoizedProps,i[oi]=e,(s=i.nodeValue!==n)&&(t=En,t!==null))switch(t.tag){case 3:lo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&lo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[oi]=e,e.stateNode=i}return Yt(e),null;case 13:if(dt(gt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pt&&Mn!==null&&e.mode&1&&!(e.flags&128))Kg(),Cs(),e.flags|=98560,s=!1;else if(s=uo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[oi]=e}else Cs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),s=!1}else Yn!==null&&(af(Yn),Yn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||gt.current&1?Dt===0&&(Dt=3):zd())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return Ps(),Qc(t,e),t===null&&Ca(e.stateNode.containerInfo),Yt(e),null;case 10:return Ed(e.type._context),Yt(e),null;case 17:return mn(e.type)&&hl(),Yt(e),null;case 19:if(dt(gt),s=e.memoizedState,s===null)return Yt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ys(s,!1);else{if(Dt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Sl(t),a!==null){for(e.flags|=128,Ys(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(gt,gt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Et()>Ds&&(e.flags|=128,i=!0,Ys(s,!1),e.lanes=4194304)}else{if(!i)if(t=Sl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ys(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!pt)return Yt(e),null}else 2*Et()-s.renderingStartTime>Ds&&n!==1073741824&&(e.flags|=128,i=!0,Ys(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Et(),e.sibling=null,n=gt.current,ut(gt,i?n&1|2:n&1),e):(Yt(e),null);case 22:case 23:return kd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?yn&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function Yx(t,e){switch(xd(e),e.tag){case 1:return mn(e.type)&&hl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ps(),dt(pn),dt(jt),Cd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Rd(e),null;case 13:if(dt(gt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));Cs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return dt(gt),null;case 4:return Ps(),null;case 10:return Ed(e.type._context),null;case 22:case 23:return kd(),null;case 24:return null;default:return null}}var ho=!1,Qt=!1,qx=typeof WeakSet=="function"?WeakSet:Set,Se=null;function ms(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){xt(t,e,i)}else n.current=null}function Jc(t,e,n){try{n()}catch(i){xt(t,e,i)}}var yp=!1;function $x(t,e){if(Uc=ul,t=Fg(),_d(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,d=0,h=t,f=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++u===r&&(o=a),f===s&&++d===i&&(l=a),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fc={focusedElem:t,selectionRange:n},ul=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var E=x.memoizedProps,m=x.memoizedState,c=e.stateNode,g=c.getSnapshotBeforeUpdate(e.elementType===e.type?E:Wn(e.type,E),m);c.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var M=e.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(S){xt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return x=yp,yp=!1,x}function ga(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Jc(e,n,s)}r=r.next}while(r!==i)}}function ql(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function jc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function D_(t){var e=t.alternate;e!==null&&(t.alternate=null,D_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[oi],delete e[Pa],delete e[kc],delete e[Px],delete e[Lx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function N_(t){return t.tag===5||t.tag===3||t.tag===4}function Mp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||N_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ef(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=dl));else if(i!==4&&(t=t.child,t!==null))for(ef(t,e,n),t=t.sibling;t!==null;)ef(t,e,n),t=t.sibling}function tf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(tf(t,e,n),t=t.sibling;t!==null;)tf(t,e,n),t=t.sibling}var kt=null,Xn=!1;function Vi(t,e,n){for(n=n.child;n!==null;)I_(t,e,n),n=n.sibling}function I_(t,e,n){if(ci&&typeof ci.onCommitFiberUnmount=="function")try{ci.onCommitFiberUnmount(kl,n)}catch{}switch(n.tag){case 5:Qt||ms(n,e);case 6:var i=kt,r=Xn;kt=null,Vi(t,e,n),kt=i,Xn=r,kt!==null&&(Xn?(t=kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&(Xn?(t=kt,n=n.stateNode,t.nodeType===8?Tu(t.parentNode,n):t.nodeType===1&&Tu(t,n),wa(t)):Tu(kt,n.stateNode));break;case 4:i=kt,r=Xn,kt=n.stateNode.containerInfo,Xn=!0,Vi(t,e,n),kt=i,Xn=r;break;case 0:case 11:case 14:case 15:if(!Qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Jc(n,e,a),r=r.next}while(r!==i)}Vi(t,e,n);break;case 1:if(!Qt&&(ms(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){xt(n,e,o)}Vi(t,e,n);break;case 21:Vi(t,e,n);break;case 22:n.mode&1?(Qt=(i=Qt)||n.memoizedState!==null,Vi(t,e,n),Qt=i):Vi(t,e,n);break;default:Vi(t,e,n)}}function Ep(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new qx),e.forEach(function(i){var r=iS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:kt=o.stateNode,Xn=!1;break e;case 3:kt=o.stateNode.containerInfo,Xn=!0;break e;case 4:kt=o.stateNode.containerInfo,Xn=!0;break e}o=o.return}if(kt===null)throw Error(ie(160));I_(s,a,r),kt=null,Xn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){xt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)U_(e,t),e=e.sibling}function U_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zn(e,t),ni(t),i&4){try{ga(3,t,t.return),ql(3,t)}catch(E){xt(t,t.return,E)}try{ga(5,t,t.return)}catch(E){xt(t,t.return,E)}}break;case 1:zn(e,t),ni(t),i&512&&n!==null&&ms(n,n.return);break;case 5:if(zn(e,t),ni(t),i&512&&n!==null&&ms(n,n.return),t.flags&32){var r=t.stateNode;try{ya(r,"")}catch(E){xt(t,t.return,E)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&ig(r,s),wc(o,a);var u=wc(o,s);for(a=0;a<l.length;a+=2){var d=l[a],h=l[a+1];d==="style"?lg(r,h):d==="dangerouslySetInnerHTML"?ag(r,h):d==="children"?ya(r,h):rd(r,d,h,u)}switch(o){case"input":Sc(r,s);break;case"textarea":rg(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?vs(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?vs(r,!!s.multiple,s.defaultValue,!0):vs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Pa]=s}catch(E){xt(t,t.return,E)}}break;case 6:if(zn(e,t),ni(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(E){xt(t,t.return,E)}}break;case 3:if(zn(e,t),ni(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{wa(e.containerInfo)}catch(E){xt(t,t.return,E)}break;case 4:zn(e,t),ni(t);break;case 13:zn(e,t),ni(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Od=Et())),i&4&&Ep(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Qt=(u=Qt)||d,zn(e,t),Qt=u):zn(e,t),ni(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(Se=t,d=t.child;d!==null;){for(h=Se=d;Se!==null;){switch(f=Se,p=f.child,f.tag){case 0:case 11:case 14:case 15:ga(4,f,f.return);break;case 1:ms(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(E){xt(i,n,E)}}break;case 5:ms(f,f.return);break;case 22:if(f.memoizedState!==null){wp(h);continue}}p!==null?(p.return=f,Se=p):wp(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=og("display",a))}catch(E){xt(t,t.return,E)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(E){xt(t,t.return,E)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:zn(e,t),ni(t),i&4&&Ep(t);break;case 21:break;default:zn(e,t),ni(t)}}function ni(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(N_(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ya(r,""),i.flags&=-33);var s=Mp(t);tf(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Mp(t);ef(t,o,a);break;default:throw Error(ie(161))}}catch(l){xt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Kx(t,e,n){Se=t,F_(t)}function F_(t,e,n){for(var i=(t.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||ho;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Qt;o=ho;var u=Qt;if(ho=a,(Qt=l)&&!u)for(Se=r;Se!==null;)a=Se,l=a.child,a.tag===22&&a.memoizedState!==null?Ap(r):l!==null?(l.return=a,Se=l):Ap(r);for(;s!==null;)Se=s,F_(s),s=s.sibling;Se=r,ho=o,Qt=u}Tp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):Tp(t)}}function Tp(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Qt||ql(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Wn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&lp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}lp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&wa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Qt||e.flags&512&&jc(e)}catch(f){xt(e,e.return,f)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function wp(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function Ap(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ql(4,e)}catch(l){xt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){xt(e,r,l)}}var s=e.return;try{jc(e)}catch(l){xt(e,s,l)}break;case 5:var a=e.return;try{jc(e)}catch(l){xt(e,a,l)}}}catch(l){xt(e,e.return,l)}if(e===t){Se=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Se=o;break}Se=e.return}}var Zx=Math.ceil,El=Bi.ReactCurrentDispatcher,Ud=Bi.ReactCurrentOwner,Fn=Bi.ReactCurrentBatchConfig,Ke=0,Bt=null,bt=null,Ht=0,yn=0,gs=dr(0),Dt=0,Fa=null,Dr=0,$l=0,Fd=0,_a=null,dn=null,Od=0,Ds=1/0,Mi=null,Tl=!1,nf=null,ar=null,po=!1,er=null,wl=0,va=0,rf=null,Ko=-1,Zo=0;function rn(){return Ke&6?Et():Ko!==-1?Ko:Ko=Et()}function or(t){return t.mode&1?Ke&2&&Ht!==0?Ht&-Ht:Nx.transition!==null?(Zo===0&&(Zo=Sg()),Zo):(t=it,t!==0||(t=window.event,t=t===void 0?16:Rg(t.type)),t):1}function Qn(t,e,n,i){if(50<va)throw va=0,rf=null,Error(ie(185));Va(t,n,i),(!(Ke&2)||t!==Bt)&&(t===Bt&&(!(Ke&2)&&($l|=n),Dt===4&&Qi(t,Ht)),gn(t,i),n===1&&Ke===0&&!(e.mode&1)&&(Ds=Et()+500,Wl&&hr()))}function gn(t,e){var n=t.callbackNode;Nv(t,e);var i=ll(t,t===Bt?Ht:0);if(i===0)n!==null&&Uh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Uh(n),e===1)t.tag===0?Dx(Rp.bind(null,t)):Yg(Rp.bind(null,t)),Cx(function(){!(Ke&6)&&hr()}),n=null;else{switch(yg(i)){case 1:n=ud;break;case 4:n=vg;break;case 16:n=ol;break;case 536870912:n=xg;break;default:n=ol}n=W_(n,O_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function O_(t,e){if(Ko=-1,Zo=0,Ke&6)throw Error(ie(327));var n=t.callbackNode;if(Es()&&t.callbackNode!==n)return null;var i=ll(t,t===Bt?Ht:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Al(t,i);else{e=i;var r=Ke;Ke|=2;var s=k_();(Bt!==t||Ht!==e)&&(Mi=null,Ds=Et()+500,Rr(t,e));do try{jx();break}catch(o){B_(t,o)}while(!0);Md(),El.current=s,Ke=r,bt!==null?e=0:(Bt=null,Ht=0,e=Dt)}if(e!==0){if(e===2&&(r=Pc(t),r!==0&&(i=r,e=sf(t,r))),e===1)throw n=Fa,Rr(t,0),Qi(t,i),gn(t,Et()),n;if(e===6)Qi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Qx(r)&&(e=Al(t,i),e===2&&(s=Pc(t),s!==0&&(i=s,e=sf(t,s))),e===1))throw n=Fa,Rr(t,0),Qi(t,i),gn(t,Et()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:yr(t,dn,Mi);break;case 3:if(Qi(t,i),(i&130023424)===i&&(e=Od+500-Et(),10<e)){if(ll(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){rn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Bc(yr.bind(null,t,dn,Mi),e);break}yr(t,dn,Mi);break;case 4:if(Qi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Zn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Zx(i/1960))-i,10<i){t.timeoutHandle=Bc(yr.bind(null,t,dn,Mi),i);break}yr(t,dn,Mi);break;case 5:yr(t,dn,Mi);break;default:throw Error(ie(329))}}}return gn(t,Et()),t.callbackNode===n?O_.bind(null,t):null}function sf(t,e){var n=_a;return t.current.memoizedState.isDehydrated&&(Rr(t,e).flags|=256),t=Al(t,e),t!==2&&(e=dn,dn=n,e!==null&&af(e)),t}function af(t){dn===null?dn=t:dn.push.apply(dn,t)}function Qx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!jn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qi(t,e){for(e&=~Fd,e&=~$l,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Zn(e),i=1<<n;t[n]=-1,e&=~i}}function Rp(t){if(Ke&6)throw Error(ie(327));Es();var e=ll(t,0);if(!(e&1))return gn(t,Et()),null;var n=Al(t,e);if(t.tag!==0&&n===2){var i=Pc(t);i!==0&&(e=i,n=sf(t,i))}if(n===1)throw n=Fa,Rr(t,0),Qi(t,e),gn(t,Et()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,yr(t,dn,Mi),gn(t,Et()),null}function Bd(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(Ds=Et()+500,Wl&&hr())}}function Nr(t){er!==null&&er.tag===0&&!(Ke&6)&&Es();var e=Ke;Ke|=1;var n=Fn.transition,i=it;try{if(Fn.transition=null,it=1,t)return t()}finally{it=i,Fn.transition=n,Ke=e,!(Ke&6)&&hr()}}function kd(){yn=gs.current,dt(gs)}function Rr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Rx(n)),bt!==null)for(n=bt.return;n!==null;){var i=n;switch(xd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&hl();break;case 3:Ps(),dt(pn),dt(jt),Cd();break;case 5:Rd(i);break;case 4:Ps();break;case 13:dt(gt);break;case 19:dt(gt);break;case 10:Ed(i.type._context);break;case 22:case 23:kd()}n=n.return}if(Bt=t,bt=t=lr(t.current,null),Ht=yn=e,Dt=0,Fa=null,Fd=$l=Dr=0,dn=_a=null,Er!==null){for(e=0;e<Er.length;e++)if(n=Er[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Er=null}return t}function B_(t,e){do{var n=bt;try{if(Md(),Yo.current=Ml,yl){for(var i=_t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}yl=!1}if(Lr=0,Ot=Lt=_t=null,ma=!1,Na=0,Ud.current=null,n===null||n.return===null){Dt=1,Fa=e,bt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Ht,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=o,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=pp(a);if(p!==null){p.flags&=-257,mp(p,a,o,s,e),p.mode&1&&hp(s,u,e),e=p,l=u;var x=e.updateQueue;if(x===null){var E=new Set;E.add(l),e.updateQueue=E}else x.add(l);break e}else{if(!(e&1)){hp(s,u,e),zd();break e}l=Error(ie(426))}}else if(pt&&o.mode&1){var m=pp(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),mp(m,a,o,s,e),Sd(Ls(l,o));break e}}s=l=Ls(l,o),Dt!==4&&(Dt=2),_a===null?_a=[s]:_a.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=y_(s,l,e);op(s,c);break e;case 1:o=l;var g=s.type,M=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(ar===null||!ar.has(M)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=M_(s,o,e);op(s,S);break e}}s=s.return}while(s!==null)}H_(n)}catch(T){e=T,bt===n&&n!==null&&(bt=n=n.return);continue}break}while(!0)}function k_(){var t=El.current;return El.current=Ml,t===null?Ml:t}function zd(){(Dt===0||Dt===3||Dt===2)&&(Dt=4),Bt===null||!(Dr&268435455)&&!($l&268435455)||Qi(Bt,Ht)}function Al(t,e){var n=Ke;Ke|=2;var i=k_();(Bt!==t||Ht!==e)&&(Mi=null,Rr(t,e));do try{Jx();break}catch(r){B_(t,r)}while(!0);if(Md(),Ke=n,El.current=i,bt!==null)throw Error(ie(261));return Bt=null,Ht=0,Dt}function Jx(){for(;bt!==null;)z_(bt)}function jx(){for(;bt!==null&&!Tv();)z_(bt)}function z_(t){var e=G_(t.alternate,t,yn);t.memoizedProps=t.pendingProps,e===null?H_(t):bt=e,Ud.current=null}function H_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Yx(n,e),n!==null){n.flags&=32767,bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Dt=6,bt=null;return}}else if(n=Xx(n,e,yn),n!==null){bt=n;return}if(e=e.sibling,e!==null){bt=e;return}bt=e=t}while(e!==null);Dt===0&&(Dt=5)}function yr(t,e,n){var i=it,r=Fn.transition;try{Fn.transition=null,it=1,eS(t,e,n,i)}finally{Fn.transition=r,it=i}return null}function eS(t,e,n,i){do Es();while(er!==null);if(Ke&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Iv(t,s),t===Bt&&(bt=Bt=null,Ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||po||(po=!0,W_(ol,function(){return Es(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Fn.transition,Fn.transition=null;var a=it;it=1;var o=Ke;Ke|=4,Ud.current=null,$x(t,n),U_(n,t),Sx(Fc),ul=!!Uc,Fc=Uc=null,t.current=n,Kx(n),wv(),Ke=o,it=a,Fn.transition=s}else t.current=n;if(po&&(po=!1,er=t,wl=r),s=t.pendingLanes,s===0&&(ar=null),Cv(n.stateNode),gn(t,Et()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Tl)throw Tl=!1,t=nf,nf=null,t;return wl&1&&t.tag!==0&&Es(),s=t.pendingLanes,s&1?t===rf?va++:(va=0,rf=t):va=0,hr(),null}function Es(){if(er!==null){var t=yg(wl),e=Fn.transition,n=it;try{if(Fn.transition=null,it=16>t?16:t,er===null)var i=!1;else{if(t=er,er=null,wl=0,Ke&6)throw Error(ie(331));var r=Ke;for(Ke|=4,Se=t.current;Se!==null;){var s=Se,a=s.child;if(Se.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(Se=u;Se!==null;){var d=Se;switch(d.tag){case 0:case 11:case 15:ga(8,d,s)}var h=d.child;if(h!==null)h.return=d,Se=h;else for(;Se!==null;){d=Se;var f=d.sibling,p=d.return;if(D_(d),d===u){Se=null;break}if(f!==null){f.return=p,Se=f;break}Se=p}}}var x=s.alternate;if(x!==null){var E=x.child;if(E!==null){x.child=null;do{var m=E.sibling;E.sibling=null,E=m}while(E!==null)}}Se=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Se=a;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ga(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,Se=c;break e}Se=s.return}}var g=t.current;for(Se=g;Se!==null;){a=Se;var M=a.child;if(a.subtreeFlags&2064&&M!==null)M.return=a,Se=M;else e:for(a=g;Se!==null;){if(o=Se,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:ql(9,o)}}catch(T){xt(o,o.return,T)}if(o===a){Se=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,Se=S;break e}Se=o.return}}if(Ke=r,hr(),ci&&typeof ci.onPostCommitFiberRoot=="function")try{ci.onPostCommitFiberRoot(kl,t)}catch{}i=!0}return i}finally{it=n,Fn.transition=e}}return!1}function Cp(t,e,n){e=Ls(n,e),e=y_(t,e,1),t=sr(t,e,1),e=rn(),t!==null&&(Va(t,1,e),gn(t,e))}function xt(t,e,n){if(t.tag===3)Cp(t,t,n);else for(;e!==null;){if(e.tag===3){Cp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ar===null||!ar.has(i))){t=Ls(n,t),t=M_(e,t,1),e=sr(e,t,1),t=rn(),e!==null&&(Va(e,1,t),gn(e,t));break}}e=e.return}}function tS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=rn(),t.pingedLanes|=t.suspendedLanes&n,Bt===t&&(Ht&n)===n&&(Dt===4||Dt===3&&(Ht&130023424)===Ht&&500>Et()-Od?Rr(t,0):Fd|=n),gn(t,e)}function V_(t,e){e===0&&(t.mode&1?(e=io,io<<=1,!(io&130023424)&&(io=4194304)):e=1);var n=rn();t=Ui(t,e),t!==null&&(Va(t,e,n),gn(t,n))}function nS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),V_(t,n)}function iS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),V_(t,n)}var G_;G_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pn.current)hn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return hn=!1,Wx(t,e,n);hn=!!(t.flags&131072)}else hn=!1,pt&&e.flags&1048576&&qg(e,gl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;$o(t,e),t=e.pendingProps;var r=Rs(e,jt.current);Ms(e,n),r=Pd(null,e,i,t,r,n);var s=Ld();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mn(i)?(s=!0,pl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,wd(e),r.updater=Yl,e.stateNode=r,r._reactInternals=e,Xc(e,i,t,n),e=$c(null,e,i,!0,s,n)):(e.tag=0,pt&&s&&vd(e),nn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch($o(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=sS(i),t=Wn(i,t),r){case 0:e=qc(null,e,i,t,n);break e;case 1:e=vp(null,e,i,t,n);break e;case 11:e=gp(null,e,i,t,n);break e;case 14:e=_p(null,e,i,Wn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),qc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),vp(t,e,i,r,n);case 3:e:{if(A_(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,jg(t,e),xl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ls(Error(ie(423)),e),e=xp(t,e,i,n,r);break e}else if(i!==r){r=Ls(Error(ie(424)),e),e=xp(t,e,i,n,r);break e}else for(Mn=rr(e.stateNode.containerInfo.firstChild),En=e,pt=!0,Yn=null,n=Qg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cs(),i===r){e=Fi(t,e,n);break e}nn(t,e,i,n)}e=e.child}return e;case 5:return e_(e),t===null&&Vc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Oc(i,r)?a=null:s!==null&&Oc(i,s)&&(e.flags|=32),w_(t,e),nn(t,e,a,n),e.child;case 6:return t===null&&Vc(e),null;case 13:return R_(t,e,n);case 4:return Ad(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=bs(e,null,i,n):nn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),gp(t,e,i,r,n);case 7:return nn(t,e,e.pendingProps,n),e.child;case 8:return nn(t,e,e.pendingProps.children,n),e.child;case 12:return nn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ut(_l,i._currentValue),i._currentValue=a,s!==null)if(jn(s.value,a)){if(s.children===r.children&&!pn.current){e=Fi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=bi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Gc(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ie(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Gc(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}nn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ms(e,n),r=On(r),i=i(r),e.flags|=1,nn(t,e,i,n),e.child;case 14:return i=e.type,r=Wn(i,e.pendingProps),r=Wn(i.type,r),_p(t,e,i,r,n);case 15:return E_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),$o(t,e),e.tag=1,mn(i)?(t=!0,pl(e)):t=!1,Ms(e,n),S_(e,i,r),Xc(e,i,r,n),$c(null,e,i,!0,t,n);case 19:return C_(t,e,n);case 22:return T_(t,e,n)}throw Error(ie(156,e.tag))};function W_(t,e){return _g(t,e)}function rS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Un(t,e,n,i){return new rS(t,e,n,i)}function Hd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sS(t){if(typeof t=="function")return Hd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ad)return 11;if(t===od)return 14}return 2}function lr(t,e){var n=t.alternate;return n===null?(n=Un(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Qo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Hd(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case as:return Cr(n.children,r,s,e);case sd:a=8,r|=8;break;case mc:return t=Un(12,n,e,r|2),t.elementType=mc,t.lanes=s,t;case gc:return t=Un(13,n,e,r),t.elementType=gc,t.lanes=s,t;case _c:return t=Un(19,n,e,r),t.elementType=_c,t.lanes=s,t;case eg:return Kl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Jm:a=10;break e;case jm:a=9;break e;case ad:a=11;break e;case od:a=14;break e;case $i:a=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=Un(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Cr(t,e,n,i){return t=Un(7,t,i,e),t.lanes=n,t}function Kl(t,e,n,i){return t=Un(22,t,i,e),t.elementType=eg,t.lanes=n,t.stateNode={isHidden:!1},t}function Du(t,e,n){return t=Un(6,t,null,e),t.lanes=n,t}function Nu(t,e,n){return e=Un(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function aS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hu(0),this.expirationTimes=hu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Vd(t,e,n,i,r,s,a,o,l){return t=new aS(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Un(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wd(s),t}function oS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ss,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function X_(t){if(!t)return cr;t=t._reactInternals;e:{if(zr(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(mn(n))return Xg(t,n,e)}return e}function Y_(t,e,n,i,r,s,a,o,l){return t=Vd(n,i,!0,t,r,s,a,o,l),t.context=X_(null),n=t.current,i=rn(),r=or(n),s=bi(i,r),s.callback=e??null,sr(n,s,r),t.current.lanes=r,Va(t,r,i),gn(t,i),t}function Zl(t,e,n,i){var r=e.current,s=rn(),a=or(r);return n=X_(n),e.context===null?e.context=n:e.pendingContext=n,e=bi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=sr(r,e,a),t!==null&&(Qn(t,r,a,s),Xo(t,r,a)),a}function Rl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gd(t,e){bp(t,e),(t=t.alternate)&&bp(t,e)}function lS(){return null}var q_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wd(t){this._internalRoot=t}Ql.prototype.render=Wd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));Zl(t,e,null,null)};Ql.prototype.unmount=Wd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Nr(function(){Zl(null,t,null,null)}),e[Ii]=null}};function Ql(t){this._internalRoot=t}Ql.prototype.unstable_scheduleHydration=function(t){if(t){var e=Tg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Zi.length&&e!==0&&e<Zi[n].priority;n++);Zi.splice(n,0,t),n===0&&Ag(t)}};function Xd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Jl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Pp(){}function uS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Rl(a);s.call(u)}}var a=Y_(e,i,t,0,null,!1,!1,"",Pp);return t._reactRootContainer=a,t[Ii]=a.current,Ca(t.nodeType===8?t.parentNode:t),Nr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=Rl(l);o.call(u)}}var l=Vd(t,0,!1,null,null,!1,!1,"",Pp);return t._reactRootContainer=l,t[Ii]=l.current,Ca(t.nodeType===8?t.parentNode:t),Nr(function(){Zl(e,l,n,i)}),l}function jl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Rl(a);o.call(l)}}Zl(e,a,t,r)}else a=uS(n,e,t,r,i);return Rl(a)}Mg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ra(e.pendingLanes);n!==0&&(cd(e,n|1),gn(e,Et()),!(Ke&6)&&(Ds=Et()+500,hr()))}break;case 13:Nr(function(){var i=Ui(t,1);if(i!==null){var r=rn();Qn(i,t,1,r)}}),Gd(t,1)}};fd=function(t){if(t.tag===13){var e=Ui(t,134217728);if(e!==null){var n=rn();Qn(e,t,134217728,n)}Gd(t,134217728)}};Eg=function(t){if(t.tag===13){var e=or(t),n=Ui(t,e);if(n!==null){var i=rn();Qn(n,t,e,i)}Gd(t,e)}};Tg=function(){return it};wg=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};Rc=function(t,e,n){switch(e){case"input":if(Sc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Gl(i);if(!r)throw Error(ie(90));ng(i),Sc(i,r)}}}break;case"textarea":rg(t,n);break;case"select":e=n.value,e!=null&&vs(t,!!n.multiple,e,!1)}};fg=Bd;dg=Nr;var cS={usingClientEntryPoint:!1,Events:[Wa,cs,Gl,ug,cg,Bd]},qs={findFiberByHostInstance:Mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fS={bundleType:qs.bundleType,version:qs.version,rendererPackageName:qs.rendererPackageName,rendererConfig:qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=mg(t),t===null?null:t.stateNode},findFiberByHostInstance:qs.findFiberByHostInstance||lS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mo.isDisabled&&mo.supportsFiber)try{kl=mo.inject(fS),ci=mo}catch{}}An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cS;An.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xd(e))throw Error(ie(200));return oS(t,e,null,n)};An.createRoot=function(t,e){if(!Xd(t))throw Error(ie(299));var n=!1,i="",r=q_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Vd(t,1,!1,null,null,n,!1,i,r),t[Ii]=e.current,Ca(t.nodeType===8?t.parentNode:t),new Wd(e)};An.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=mg(e),t=t===null?null:t.stateNode,t};An.flushSync=function(t){return Nr(t)};An.hydrate=function(t,e,n){if(!Jl(e))throw Error(ie(200));return jl(null,t,e,!0,n)};An.hydrateRoot=function(t,e,n){if(!Xd(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=q_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Y_(e,null,t,1,n??null,r,!1,s,a),t[Ii]=e.current,Ca(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ql(e)};An.render=function(t,e,n){if(!Jl(e))throw Error(ie(200));return jl(null,t,e,!1,n)};An.unmountComponentAtNode=function(t){if(!Jl(t))throw Error(ie(40));return t._reactRootContainer?(Nr(function(){jl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ii]=null})}),!0):!1};An.unstable_batchedUpdates=Bd;An.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Jl(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return jl(t,e,n,!1,i)};An.version="18.3.1-next-f1338f8080-20240426";function $_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($_)}catch(t){console.error(t)}}$_(),$m.exports=An;var dS=$m.exports,K_,Lp=dS;K_=Lp.createRoot,Lp.hydrateRoot;function hS(){return Me.jsxs("section",{className:"opening grid","aria-label":"Opening",children:[Me.jsx("p",{className:"opening__metadata",children:"AN INDEPENDENT ML EXPERIMENT · 2026"}),Me.jsxs("h1",{className:"opening__headline",children:["Can machine learning",Me.jsx("br",{}),"anticipate the next",Me.jsx("br",{}),"Color of the Year?"]}),Me.jsxs("p",{className:"opening__supporting",children:["27 years of color.",Me.jsx("br",{}),"One prediction for 2027."]}),Me.jsx("p",{className:"opening__scroll","aria-hidden":"true",children:"SCROLL ↓"})]})}const Ir=[{id:"2000-cerulean",year:2e3,name:"Cerulean",pantoneCode:"15-4020",hex:"#9BB7D4",lab:{l:73.28,a:-2.98,b:-17.73}},{id:"2001-fuchsia-rose",year:2001,name:"Fuchsia Rose",pantoneCode:"17-2031",hex:"#C74375",lab:{l:48.81,a:56.35,b:.62}},{id:"2002-true-red",year:2002,name:"True Red",pantoneCode:"19-1664",hex:"#BF1932",lab:{l:41.23,a:62.24,b:31.33}},{id:"2003-aqua-sky",year:2003,name:"Aqua Sky",pantoneCode:"14-4811",hex:"#7BC4C4",lab:{l:74.62,a:-22.68,b:-7.2}},{id:"2004-tigerlily",year:2004,name:"Tigerlily",pantoneCode:"17-1456",hex:"#E2583E",lab:{l:55.58,a:52.29,b:42.5}},{id:"2005-blue-turquoise",year:2005,name:"Blue Turquoise",pantoneCode:"15-5217",hex:"#53B0AE",lab:{l:66.48,a:-27.92,b:-7.4}},{id:"2006-sand-dollar",year:2006,name:"Sand Dollar",pantoneCode:"13-1106",hex:"#DECDBE",lab:{l:83.4,a:3.45,b:9.6}},{id:"2007-chili-pepper",year:2007,name:"Chili Pepper",pantoneCode:"19-1557",hex:"#9B1B30",lab:{l:33.92,a:51.67,b:22.03}},{id:"2008-blue-iris",year:2008,name:"Blue Iris",pantoneCode:"18-3943",hex:"#5A5B9F",lab:{l:41.47,a:17.69,b:-37.13}},{id:"2009-mimosa",year:2009,name:"Mimosa",pantoneCode:"14-0848",hex:"#F0C05A",lab:{l:80.16,a:6.26,b:56.68}},{id:"2010-turquoise",year:2010,name:"Turquoise",pantoneCode:"15-5519",hex:"#45B5AA",lab:{l:67.44,a:-34.11,b:-3.81}},{id:"2011-honeysuckle",year:2011,name:"Honeysuckle",pantoneCode:"18-2120",hex:"#D94F70",lab:{l:53.51,a:56.49,b:10.75}},{id:"2012-tangerine-tango",year:2012,name:"Tangerine Tango",pantoneCode:"17-1463",hex:"#DD4124",lab:{l:51.02,a:59.07,b:50.74}},{id:"2013-emerald",year:2013,name:"Emerald",pantoneCode:"17-5641",hex:"#009473",lab:{l:54.47,a:-41.68,b:8.14}},{id:"2014-radiant-orchid",year:2014,name:"Radiant Orchid",pantoneCode:"18-3224",hex:"#B163A3",lab:{l:52.86,a:40.59,b:-21.02}},{id:"2015-marsala",year:2015,name:"Marsala",pantoneCode:"18-1438",hex:"#955251",lab:{l:42.79,a:27.73,b:12.95}},{id:"2016-rose-quartz",year:2016,name:"Rose Quartz",pantoneCode:"13-1520",hex:"#F7CAC9",lab:{l:85.12,a:15.73,b:6.5}},{id:"2016-serenity",year:2016,name:"Serenity",pantoneCode:"15-3919",hex:"#92A8D1",lab:{l:68.55,a:1.84,b:-23.33}},{id:"2017-greenery",year:2017,name:"Greenery",pantoneCode:"15-0343",hex:"#88B04B",lab:{l:67.12,a:-29.81,b:46.53}},{id:"2018-ultra-violet",year:2018,name:"Ultra Violet",pantoneCode:"18-3838",hex:"#5F4B8B",lab:{l:36.61,a:23.33,b:-32.73}},{id:"2019-living-coral",year:2019,name:"Living Coral",pantoneCode:"16-1546",hex:"#FF6F61",lab:{l:64.56,a:53.9,b:35.18}},{id:"2020-classic-blue",year:2020,name:"Classic Blue",pantoneCode:"19-4052",hex:"#0F4C81",lab:{l:31.47,a:2.35,b:-35.03}},{id:"2021-ultimate-gray",year:2021,name:"Ultimate Gray",pantoneCode:"17-5104",hex:"#939597",lab:{l:61.6,a:-.33,b:-1.31}},{id:"2021-illuminating",year:2021,name:"Illuminating",pantoneCode:"13-0647",hex:"#F5DF4D",lab:{l:88.32,a:-8.26,b:70.88}},{id:"2022-very-peri",year:2022,name:"Very Peri",pantoneCode:"17-3938",hex:"#6667AB",lab:{l:46.26,a:17.03,b:-36.57}},{id:"2023-viva-magenta",year:2023,name:"Viva Magenta",pantoneCode:"18-1750",hex:"#BB2649",lab:{l:41.9,a:59.24,b:17.76}},{id:"2024-peach-fuzz",year:2024,name:"Peach Fuzz",pantoneCode:"13-1023",hex:"#FFBE98",lab:{l:82.03,a:18.69,b:28.32}},{id:"2025-mocha-mousse",year:2025,name:"Mocha Mousse",pantoneCode:"17-1230",hex:"#A47864",lab:{l:54.29,a:14.49,b:17.74}},{id:"2026-cloud-dancer",year:2026,name:"Cloud Dancer",pantoneCode:"11-4201",hex:"#F0EEE9",lab:{l:94.12,a:-.2,b:2.65}}];function pS(t){const e=new Map;for(const n of t){const i=e.get(n.year);i?i.push(n):e.set(n.year,[n])}return Array.from(e.entries()).sort(([n],[i])=>n-i).map(([n,i])=>({year:n,colors:i}))}const mS="#f3f1ec";function Dp(t){const e=t.replace("#",""),n=parseInt(e.substring(0,2),16),i=parseInt(e.substring(2,4),16),r=parseInt(e.substring(4,6),16);return[n,i,r]}function gS(t,e=mS,n=20){const[i,r,s]=Dp(t),[a,o,l]=Dp(e);return Math.sqrt((i-a)**2+(r-o)**2+(s-l)**2)<n}const of=14;function _S({color:t,className:e,morphT:n=0}){const i=Ct.useRef(null),[r,s]=Ct.useState(null);Ct.useEffect(()=>{const l=i.current;if(!l)return;const u=new ResizeObserver(([d])=>{const{width:h,height:f}=d.contentRect;s({width:h,height:f})});return u.observe(l),()=>u.disconnect()},[]);const a=["color-object"];gS(t.hex)&&a.push("color-object--hairline"),e&&a.push(e);const o={backgroundColor:t.hex};if(n>0&&r&&r.width>0&&r.height>0){const l=1-(1-n)**4,u=n**3,d=1+(of/r.width-1)*l,h=1+(of/r.height-1)*l;o.transform=`scale(${d}, ${h})`,o.borderRadius=`${u*50}%`}return Me.jsx("div",{ref:i,className:a.join(" "),"data-color-id":t.id,style:o})}function vS({group:t,morphT:e=0}){const n=t.colors.length>1;return Me.jsxs("article",{className:n?"archive-unit archive-unit--double":"archive-unit",children:[Me.jsx("span",{className:"archive-unit__year",children:t.year}),Me.jsx("div",{className:"archive-unit__swatch",children:t.colors.map(i=>Me.jsx(_S,{color:i,className:"archive-unit__object",morphT:e},i.id))}),Me.jsx("div",{className:"archive-unit__labels",children:t.colors.map(i=>Me.jsxs("div",{className:"archive-unit__label",children:[Me.jsx("span",{className:"archive-unit__name",children:i.name}),Me.jsx("span",{className:"archive-unit__code",children:i.pantoneCode})]},i.id))})]})}function xS(t,{durationMs:e,holdVh:n=0}){const[i,r]=Ct.useState(0);return Ct.useEffect(()=>{const s={current:!1},a={current:!1},o={current:!1},l={current:null},u={current:null},d={current:null},h=window.matchMedia("(prefers-reduced-motion: reduce)").matches;function f(){l.current!==null&&(cancelAnimationFrame(l.current),l.current=null),u.current=null}function p(M){u.current===null&&(u.current=M);const S=M-u.current;if(S>=e){r(e),f();return}r(S),l.current=requestAnimationFrame(p)}function x(){if(h){r(e);return}f(),l.current=requestAnimationFrame(p)}function E(){if(document.hidden)d.current=performance.now();else if(d.current!==null){const M=performance.now()-d.current;u.current!==null&&(u.current+=M),d.current=null}}function m(){const M=t.current;if(!M)return;const S=M.getBoundingClientRect().top,T=S<=0,w=n/100*window.innerHeight,R=S<=-w;R&&!o.current&&!s.current?(s.current=!0,x()):!T&&a.current&&(s.current=!1,o.current=!1,f(),r(0)),a.current=T,o.current=R}let c=!1;function g(){c||(c=!0,requestAnimationFrame(()=>{c=!1,m()}))}return m(),window.addEventListener("scroll",g,{passive:!0}),window.addEventListener("resize",g),document.addEventListener("visibilitychange",E),()=>{window.removeEventListener("scroll",g),window.removeEventListener("resize",g),document.removeEventListener("visibilitychange",E),f()}},[t,e,n]),i}const SS=10600,Yd=45;function yS(t){return Math.min(1,Math.max(0,t))}function MS(t){return t<.5?4*t*t*t:1-(-2*t+2)**3/2}function Pn(t,e,n){return MS(yS((t-e)/(n-e)))}const Cl=5400,Z_=8600,ES=.65;function TS(t){const e=Pn(t,0,150),n=Pn(t,150,300),i=Pn(t,300,450),r=Pn(t,0,450);return{codeOpacity:1-e,nameOpacity:1-n,yearOpacity:1-i,chromeOpacity:1-r,morphT:Pn(t,300,1850),captionOpacity:Pn(t,2050,2400)*(1-Pn(t,3800,4500)),axesOpacity:Pn(t,3800,4500),domPointsOpacity:1-Pn(t,5100,5400),labPointsOpacity:Pn(t,5100,5400),migrationT:Pn(t,Cl,Z_)}}function wS(t,e,n){const i=Z_-Cl,r=i*ES,s=i-r,a=n>1?r/(n-1):0,o=Cl+e*a;return Pn(t,o,o+s)}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qd="186",AS=0,Np=1,RS=2,Jo=1,CS=2,aa=3,Ur=0,_n=1,wi=2,Pi=0,xa=1,Ip=2,Up=3,Fp=4,bS=5,rs=100,PS=101,LS=102,DS=103,NS=104,IS=200,US=201,FS=202,OS=203,Q_=204,J_=205,BS=206,kS=207,zS=208,HS=209,VS=210,GS=211,WS=212,XS=213,YS=214,lf=0,uf=1,cf=2,Oa=3,ff=4,df=5,hf=6,pf=7,j_=0,qS=1,$S=2,di=0,e0=1,t0=2,n0=3,i0=4,r0=5,s0=6,a0=7,o0=300,Fr=301,Ns=302,Iu=303,Uu=304,eu=306,mf=1e3,Ci=1001,gf=1002,zt=1003,KS=1004,go=1005,Jt=1006,Fu=1007,wr=1008,In=1009,l0=1010,u0=1011,Ba=1012,$d=1013,hi=1014,li=1015,pi=1016,Kd=1017,Zd=1018,ka=1020,c0=35902,f0=35899,d0=1021,h0=1022,Kn=1023,Oi=1026,Ar=1027,p0=1028,Qd=1029,Or=1030,Jd=1031,jd=1033,jo=33776,el=33777,tl=33778,nl=33779,_f=35840,vf=35841,xf=35842,Sf=35843,yf=36196,Mf=37492,Ef=37496,Tf=37488,wf=37489,bl=37490,Af=37491,Rf=37808,Cf=37809,bf=37810,Pf=37811,Lf=37812,Df=37813,Nf=37814,If=37815,Uf=37816,Ff=37817,Of=37818,Bf=37819,kf=37820,zf=37821,Hf=36492,Vf=36494,Gf=36495,Wf=36283,Xf=36284,Pl=36285,Yf=36286,ZS=3200,Op=0,QS=1,Ji="",Ln="srgb",Ll="srgb-linear",Dl="linear",nt="srgb",Ou=7680,JS=519,jS=512,ey=513,ty=514,eh=515,ny=516,iy=517,th=518,ry=519,sy=35044,Bp="300 es",ui=2e3,Nl=2001;function ay(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Il(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function oy(){const t=Il("canvas");return t.style.display="block",t}const kp={};function zp(...t){const e="THREE."+t.shift();console.log(e,...t)}function m0(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function De(...t){t=m0(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function $e(...t){t=m0(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Ts(...t){const e=t.join(" ");e in kp||(kp[e]=!0,De(...t))}function ly(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const uy={[lf]:uf,[cf]:hf,[ff]:pf,[Oa]:df,[uf]:lf,[hf]:cf,[pf]:ff,[df]:Oa};class Hr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bu=Math.PI/180,qf=180/Math.PI;function Ya(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[t&255]+qt[t>>8&255]+qt[t>>16&255]+qt[t>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[n&63|128]+qt[n>>8&255]+"-"+qt[n>>16&255]+qt[n>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function Ye(t,e,n){return Math.max(e,Math.min(n,t))}function cy(t,e){return(t%e+e)%e}function ku(t,e,n){return(1-n)*t+n*e}function $s(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function cn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const lh=class lh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};lh.prototype.isVector2=!0;let Je=lh;class Bs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],d=i[r+2],h=i[r+3],f=s[a+0],p=s[a+1],x=s[a+2],E=s[a+3];if(h!==E||l!==f||u!==p||d!==x){let m=l*f+u*p+d*x+h*E;m<0&&(f=-f,p=-p,x=-x,E=-E,m=-m);let c=1-o;if(m<.9995){const g=Math.acos(m),M=Math.sin(g);c=Math.sin(c*g)/M,o=Math.sin(o*g)/M,l=l*c+f*o,u=u*c+p*o,d=d*c+x*o,h=h*c+E*o}else{l=l*c+f*o,u=u*c+p*o,d=d*c+x*o,h=h*c+E*o;const g=1/Math.sqrt(l*l+u*u+d*d+h*h);l*=g,u*=g,d*=g,h*=g}}e[n]=l,e[n+1]=u,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],d=i[r+3],h=s[a],f=s[a+1],p=s[a+2],x=s[a+3];return e[n]=o*x+d*h+l*p-u*f,e[n+1]=l*x+d*f+u*h-o*p,e[n+2]=u*x+d*p+o*f-l*h,e[n+3]=d*x-o*h-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),d=o(r/2),h=o(s/2),f=l(i/2),p=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=f*d*h+u*p*x,this._y=u*p*h-f*d*x,this._z=u*d*x+f*p*h,this._w=u*d*h-f*p*x;break;case"YXZ":this._x=f*d*h+u*p*x,this._y=u*p*h-f*d*x,this._z=u*d*x-f*p*h,this._w=u*d*h+f*p*x;break;case"ZXY":this._x=f*d*h-u*p*x,this._y=u*p*h+f*d*x,this._z=u*d*x+f*p*h,this._w=u*d*h-f*p*x;break;case"ZYX":this._x=f*d*h-u*p*x,this._y=u*p*h+f*d*x,this._z=u*d*x-f*p*h,this._w=u*d*h+f*p*x;break;case"YZX":this._x=f*d*h+u*p*x,this._y=u*p*h+f*d*x,this._z=u*d*x-f*p*h,this._w=u*d*h-f*p*x;break;case"XZY":this._x=f*d*h-u*p*x,this._y=u*p*h-f*d*x,this._z=u*d*x+f*p*h,this._w=u*d*h+f*p*x;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],d=n[6],h=n[10],f=i+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(d-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,d=n._w;return this._x=i*d+a*o+r*u-s*l,this._y=r*d+a*l+s*o-i*u,this._z=s*d+a*u+i*l-r*o,this._w=a*d-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const u=Math.acos(o),d=Math.sin(u);l=Math.sin(l*u)/d,n=Math.sin(n*u)/d,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const uh=class uh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Hp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Hp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),d=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*u+a*h-o*d,this.y=i+l*d+o*u-s*h,this.z=r+l*h+s*d-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this.z=Ye(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this.z=Ye(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zu.copy(this).projectOnVector(e),this.sub(zu)}reflect(e){return this.sub(zu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};uh.prototype.isVector3=!0;let k=uh;const zu=new k,Hp=new Bs,ch=class ch{constructor(e,n,i,r,s,a,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],d=i[4],h=i[7],f=i[2],p=i[5],x=i[8],E=r[0],m=r[3],c=r[6],g=r[1],M=r[4],S=r[7],T=r[2],w=r[5],R=r[8];return s[0]=a*E+o*g+l*T,s[3]=a*m+o*M+l*w,s[6]=a*c+o*S+l*R,s[1]=u*E+d*g+h*T,s[4]=u*m+d*M+h*w,s[7]=u*c+d*S+h*R,s[2]=f*E+p*g+x*T,s[5]=f*m+p*M+x*w,s[8]=f*c+p*S+x*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],d=e[8];return n*a*d-n*o*u-i*s*d+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],d=e[8],h=d*a-o*u,f=o*l-d*s,p=u*s-a*l,x=n*h+i*f+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/x;return e[0]=h*E,e[1]=(r*u-d*i)*E,e[2]=(o*i-r*a)*E,e[3]=f*E,e[4]=(d*n-r*l)*E,e[5]=(r*s-o*n)*E,e[6]=p*E,e[7]=(i*l-u*n)*E,e[8]=(a*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return Ts("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Hu.makeScale(e,n)),this}rotate(e){return Ts("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Hu.makeRotation(-e)),this}translate(e,n){return Ts("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Hu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ch.prototype.isMatrix3=!0;let Ne=ch;const Hu=new Ne,Vp=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gp=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fy(){const t={enabled:!0,workingColorSpace:Ll,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===nt&&(r.r=Li(r.r),r.g=Li(r.g),r.b=Li(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(r.r=ws(r.r),r.g=ws(r.g),r.b=ws(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ji?Dl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ts("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ts("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Ll]:{primaries:e,whitePoint:i,transfer:Dl,toXYZ:Vp,fromXYZ:Gp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ln},outputColorSpaceConfig:{drawingBufferColorSpace:Ln}},[Ln]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:Vp,fromXYZ:Gp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ln}}}),t}const Xe=fy();function Li(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ws(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Xr;class dy{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Xr===void 0&&(Xr=Il("canvas")),Xr.width=e.width,Xr.height=e.height;const r=Xr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Xr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Il("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Li(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Li(n[i]/255)*255):n[i]=Li(n[i]);return{data:n,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hy=0;class nh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=Ya(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Vu(r[a].image)):s.push(Vu(r[a]))}else s=Vu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Vu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?dy.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let py=0;const Gu=new k;class sn extends Hr{constructor(e=sn.DEFAULT_IMAGE,n=sn.DEFAULT_MAPPING,i=Ci,r=Ci,s=Jt,a=wr,o=Kn,l=In,u=sn.DEFAULT_ANISOTROPY,d=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=Ya(),this.name="",this.source=new nh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Gu).x}get height(){return this.source.getSize(Gu).y}get depth(){return this.source.getSize(Gu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){De(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){De(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==o0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mf:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case gf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mf:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case gf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=o0;sn.DEFAULT_ANISOTROPY=1;const fh=class fh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],d=l[4],h=l[8],f=l[1],p=l[5],x=l[9],E=l[2],m=l[6],c=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-E)<.01&&Math.abs(x-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+E)<.1&&Math.abs(x+m)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(u+1)/2,S=(p+1)/2,T=(c+1)/2,w=(d+f)/4,R=(h+E)/4,v=(x+m)/4;return M>S&&M>T?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=w/i,s=R/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=v/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=R/s,r=v/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-x)*(m-x)+(h-E)*(h-E)+(f-d)*(f-d));return Math.abs(g)<.001&&(g=1),this.x=(m-x)/g,this.y=(h-E)/g,this.z=(f-d)/g,this.w=Math.acos((u+p+c-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this.z=Ye(this.z,e.z,n.z),this.w=Ye(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this.z=Ye(this.z,e,n),this.w=Ye(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fh.prototype.isVector4=!0;let St=fh;class my extends Hr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new St(0,0,e,n),this.scissorTest=!1,this.viewport=new St(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new sn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new nh(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends my{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class g0 extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gy extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ol=class Ol{constructor(e,n,i,r,s,a,o,l,u,d,h,f,p,x,E,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,d,h,f,p,x,E,m)}set(e,n,i,r,s,a,o,l,u,d,h,f,p,x,E,m){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=a,c[9]=o,c[13]=l,c[2]=u,c[6]=d,c[10]=h,c[14]=f,c[3]=p,c[7]=x,c[11]=E,c[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ol().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Yr.setFromMatrixColumn(e,0).length(),s=1/Yr.setFromMatrixColumn(e,1).length(),a=1/Yr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*d,p=a*h,x=o*d,E=o*h;n[0]=l*d,n[4]=-l*h,n[8]=u,n[1]=p+x*u,n[5]=f-E*u,n[9]=-o*l,n[2]=E-f*u,n[6]=x+p*u,n[10]=a*l}else if(e.order==="YXZ"){const f=l*d,p=l*h,x=u*d,E=u*h;n[0]=f+E*o,n[4]=x*o-p,n[8]=a*u,n[1]=a*h,n[5]=a*d,n[9]=-o,n[2]=p*o-x,n[6]=E+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*d,p=l*h,x=u*d,E=u*h;n[0]=f-E*o,n[4]=-a*h,n[8]=x+p*o,n[1]=p+x*o,n[5]=a*d,n[9]=E-f*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*d,p=a*h,x=o*d,E=o*h;n[0]=l*d,n[4]=x*u-p,n[8]=f*u+E,n[1]=l*h,n[5]=E*u+f,n[9]=p*u-x,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*u,x=o*l,E=o*u;n[0]=l*d,n[4]=E-f*h,n[8]=x*h+p,n[1]=h,n[5]=a*d,n[9]=-o*d,n[2]=-u*d,n[6]=p*h+x,n[10]=f-E*h}else if(e.order==="XZY"){const f=a*l,p=a*u,x=o*l,E=o*u;n[0]=l*d,n[4]=-h,n[8]=u*d,n[1]=f*h+E,n[5]=a*d,n[9]=p*h-x,n[2]=x*h-p,n[6]=o*d,n[10]=E*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_y,e,vy)}lookAt(e,n,i){const r=this.elements;return xn.subVectors(e,n),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Gi.crossVectors(i,xn),Gi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Gi.crossVectors(i,xn)),Gi.normalize(),_o.crossVectors(xn,Gi),r[0]=Gi.x,r[4]=_o.x,r[8]=xn.x,r[1]=Gi.y,r[5]=_o.y,r[9]=xn.y,r[2]=Gi.z,r[6]=_o.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],d=i[1],h=i[5],f=i[9],p=i[13],x=i[2],E=i[6],m=i[10],c=i[14],g=i[3],M=i[7],S=i[11],T=i[15],w=r[0],R=r[4],v=r[8],A=r[12],b=r[1],D=r[5],z=r[9],Y=r[13],I=r[2],G=r[6],j=r[10],q=r[14],F=r[3],U=r[7],W=r[11],Z=r[15];return s[0]=a*w+o*b+l*I+u*F,s[4]=a*R+o*D+l*G+u*U,s[8]=a*v+o*z+l*j+u*W,s[12]=a*A+o*Y+l*q+u*Z,s[1]=d*w+h*b+f*I+p*F,s[5]=d*R+h*D+f*G+p*U,s[9]=d*v+h*z+f*j+p*W,s[13]=d*A+h*Y+f*q+p*Z,s[2]=x*w+E*b+m*I+c*F,s[6]=x*R+E*D+m*G+c*U,s[10]=x*v+E*z+m*j+c*W,s[14]=x*A+E*Y+m*q+c*Z,s[3]=g*w+M*b+S*I+T*F,s[7]=g*R+M*D+S*G+T*U,s[11]=g*v+M*z+S*j+T*W,s[15]=g*A+M*Y+S*q+T*Z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],d=e[2],h=e[6],f=e[10],p=e[14],x=e[3],E=e[7],m=e[11],c=e[15],g=l*p-u*f,M=o*p-u*h,S=o*f-l*h,T=a*p-u*d,w=a*f-l*d,R=a*h-o*d;return n*(E*g-m*M+c*S)-i*(x*g-m*T+c*w)+r*(x*M-E*T+c*R)-s*(x*S-E*w+m*R)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],u=e[6],d=e[10];return n*(a*d-o*u)-i*(s*d-o*l)+r*(s*u-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],d=e[8],h=e[9],f=e[10],p=e[11],x=e[12],E=e[13],m=e[14],c=e[15],g=n*o-i*a,M=n*l-r*a,S=n*u-s*a,T=i*l-r*o,w=i*u-s*o,R=r*u-s*l,v=d*E-h*x,A=d*m-f*x,b=d*c-p*x,D=h*m-f*E,z=h*c-p*E,Y=f*c-p*m,I=g*Y-M*z+S*D+T*b-w*A+R*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/I;return e[0]=(o*Y-l*z+u*D)*G,e[1]=(r*z-i*Y-s*D)*G,e[2]=(E*R-m*w+c*T)*G,e[3]=(f*w-h*R-p*T)*G,e[4]=(l*b-a*Y-u*A)*G,e[5]=(n*Y-r*b+s*A)*G,e[6]=(m*S-x*R-c*M)*G,e[7]=(d*R-f*S+p*M)*G,e[8]=(a*z-o*b+u*v)*G,e[9]=(i*b-n*z-s*v)*G,e[10]=(x*w-E*S+c*g)*G,e[11]=(h*S-d*w-p*g)*G,e[12]=(o*A-a*D-l*v)*G,e[13]=(n*D-i*A+r*v)*G,e[14]=(E*M-x*T-m*g)*G,e[15]=(d*T-h*M+f*g)*G,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,d=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,d*o+i,d*l-r*a,0,u*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,d=a+a,h=o+o,f=s*u,p=s*d,x=s*h,E=a*d,m=a*h,c=o*h,g=l*u,M=l*d,S=l*h,T=i.x,w=i.y,R=i.z;return r[0]=(1-(E+c))*T,r[1]=(p+S)*T,r[2]=(x-M)*T,r[3]=0,r[4]=(p-S)*w,r[5]=(1-(f+c))*w,r[6]=(m+g)*w,r[7]=0,r[8]=(x+M)*R,r[9]=(m-g)*R,r[10]=(1-(f+E))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Yr.set(r[0],r[1],r[2]).length();const o=Yr.set(r[4],r[5],r[6]).length(),l=Yr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Hn.copy(this);const u=1/a,d=1/o,h=1/l;return Hn.elements[0]*=u,Hn.elements[1]*=u,Hn.elements[2]*=u,Hn.elements[4]*=d,Hn.elements[5]*=d,Hn.elements[6]*=d,Hn.elements[8]*=h,Hn.elements[9]*=h,Hn.elements[10]*=h,n.setFromRotationMatrix(Hn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=ui,l=!1){const u=this.elements,d=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let x,E;if(l)x=s/(a-s),E=a*s/(a-s);else if(o===ui)x=-(a+s)/(a-s),E=-2*a*s/(a-s);else if(o===Nl)x=-a/(a-s),E=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=d,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=h,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=x,u[14]=E,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ui,l=!1){const u=this.elements,d=2/(n-e),h=2/(i-r),f=-(n+e)/(n-e),p=-(i+r)/(i-r);let x,E;if(l)x=1/(a-s),E=a/(a-s);else if(o===ui)x=-2/(a-s),E=-(a+s)/(a-s);else if(o===Nl)x=-1/(a-s),E=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=d,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=h,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=x,u[14]=E,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Ol.prototype.isMatrix4=!0;let yt=Ol;const Yr=new k,Hn=new yt,_y=new k(0,0,0),vy=new k(1,1,1),Gi=new k,_o=new k,xn=new k,Wp=new yt,Xp=new Bs;class Br{constructor(e=0,n=0,i=0,r=Br.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],d=r[9],h=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Wp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Xp.setFromEuler(this),this.setFromQuaternion(Xp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Br.DEFAULT_ORDER="XYZ";class ih{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xy=0;const Yp=new k,qr=new Bs,_i=new yt,vo=new k,Ks=new k,Sy=new k,yy=new Bs,qp=new k(1,0,0),$p=new k(0,1,0),Kp=new k(0,0,1),Zp={type:"added"},My={type:"removed"},$r={type:"childadded",child:null},Wu={type:"childremoved",child:null};class vn extends Hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=Ya(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new k,n=new Br,i=new Bs,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new Ne}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ih,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(qp,e)}rotateY(e){return this.rotateOnAxis($p,e)}rotateZ(e){return this.rotateOnAxis(Kp,e)}translateOnAxis(e,n){return Yp.copy(e).applyQuaternion(this.quaternion),this.position.add(Yp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(qp,e)}translateY(e){return this.translateOnAxis($p,e)}translateZ(e){return this.translateOnAxis(Kp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?vo.copy(e):vo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Ks,vo,this.up):_i.lookAt(vo,Ks,this.up),this.quaternion.setFromRotationMatrix(_i),r&&(_i.extractRotation(r.matrixWorld),qr.setFromRotationMatrix(_i),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zp),$r.child=e,this.dispatchEvent($r),$r.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(My),Wu.child=e,this.dispatchEvent(Wu),Wu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zp),$r.child=e,this.dispatchEvent($r),$r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,e,Sy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,yy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),d=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const u in o){const d=o[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}vn.DEFAULT_UP=new k(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class oa extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ey={type:"move"};class Xu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const E of e.hand.values()){const m=n.getJointPose(E,i),c=this._getHandJoint(u,E);m!==null&&(c.matrix.fromArray(m.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=m.radius),c.visible=m!==null}const d=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=d.position.distanceTo(h.position),p=.02,x=.005;u.inputState.pinching&&f>p+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ey)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new oa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const _0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},xo={h:0,s:0,l:0};function Yu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Xe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Xe.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Xe.workingColorSpace){if(e=cy(e,1),n=Ye(n,0,1),i=Ye(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Yu(a,s,e+1/3),this.g=Yu(a,s,e),this.b=Yu(a,s,e-1/3)}return Xe.colorSpaceToWorking(this,r),this}setStyle(e,n=Ln){function i(s){s!==void 0&&parseFloat(s)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:De("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ln){const i=_0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ln){return Xe.workingToColorSpace($t.copy(this),e),Math.round(Ye($t.r*255,0,255))*65536+Math.round(Ye($t.g*255,0,255))*256+Math.round(Ye($t.b*255,0,255))}getHexString(e=Ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Xe.workingColorSpace){Xe.workingToColorSpace($t.copy(this),n);const i=$t.r,r=$t.g,s=$t.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const d=(o+a)/2;if(o===a)l=0,u=0;else{const h=a-o;switch(u=d<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,n=Xe.workingColorSpace){return Xe.workingToColorSpace($t.copy(this),n),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Ln){Xe.workingToColorSpace($t.copy(this),e);const n=$t.r,i=$t.g,r=$t.b;return e!==Ln?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+n,Wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Wi),e.getHSL(xo);const i=ku(Wi.h,xo.h,n),r=ku(Wi.s,xo.s,n),s=ku(Wi.l,xo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new Qe;Qe.NAMES=_0;class Ty extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Br,this.environmentIntensity=1,this.environmentRotation=new Br,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Vn=new k,vi=new k,qu=new k,xi=new k,Kr=new k,Zr=new k,Qp=new k,$u=new k,Ku=new k,Zu=new k,Qu=new St,Ju=new St,ju=new St;class $n{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Vn.subVectors(e,n),r.cross(Vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Vn.subVectors(r,n),vi.subVectors(i,n),qu.subVectors(e,n);const a=Vn.dot(Vn),o=Vn.dot(vi),l=Vn.dot(qu),u=vi.dot(vi),d=vi.dot(qu),h=a*u-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(u*l-o*d)*f,x=(a*d-o*l)*f;return s.set(1-p-x,x,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,xi.x),l.addScaledVector(a,xi.y),l.addScaledVector(o,xi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Qu.setScalar(0),Ju.setScalar(0),ju.setScalar(0),Qu.fromBufferAttribute(e,n),Ju.fromBufferAttribute(e,i),ju.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Qu,s.x),a.addScaledVector(Ju,s.y),a.addScaledVector(ju,s.z),a}static isFrontFacing(e,n,i,r){return Vn.subVectors(i,n),vi.subVectors(e,n),Vn.cross(vi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Vn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return $n.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return $n.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return $n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Kr.subVectors(r,i),Zr.subVectors(s,i),$u.subVectors(e,i);const l=Kr.dot($u),u=Zr.dot($u);if(l<=0&&u<=0)return n.copy(i);Ku.subVectors(e,r);const d=Kr.dot(Ku),h=Zr.dot(Ku);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*u;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(Kr,a);Zu.subVectors(e,s);const p=Kr.dot(Zu),x=Zr.dot(Zu);if(x>=0&&p<=x)return n.copy(s);const E=p*u-l*x;if(E<=0&&u>=0&&x<=0)return o=u/(u-x),n.copy(i).addScaledVector(Zr,o);const m=d*x-p*h;if(m<=0&&h-d>=0&&p-x>=0)return Qp.subVectors(s,r),o=(h-d)/(h-d+(p-x)),n.copy(r).addScaledVector(Qp,o);const c=1/(m+E+f);return a=E*c,o=f*c,n.copy(i).addScaledVector(Kr,a).addScaledVector(Zr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class qa{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Gn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Gn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Gn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gn):Gn.fromBufferAttribute(s,a),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),So.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),So.copy(i.boundingBox)),So.applyMatrix4(e.matrixWorld),this.union(So)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),yo.subVectors(this.max,Zs),Qr.subVectors(e.a,Zs),Jr.subVectors(e.b,Zs),jr.subVectors(e.c,Zs),Xi.subVectors(Jr,Qr),Yi.subVectors(jr,Jr),mr.subVectors(Qr,jr);let n=[0,-Xi.z,Xi.y,0,-Yi.z,Yi.y,0,-mr.z,mr.y,Xi.z,0,-Xi.x,Yi.z,0,-Yi.x,mr.z,0,-mr.x,-Xi.y,Xi.x,0,-Yi.y,Yi.x,0,-mr.y,mr.x,0];return!ec(n,Qr,Jr,jr,yo)||(n=[1,0,0,0,1,0,0,0,1],!ec(n,Qr,Jr,jr,yo))?!1:(Mo.crossVectors(Xi,Yi),n=[Mo.x,Mo.y,Mo.z],ec(n,Qr,Jr,jr,yo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Si=[new k,new k,new k,new k,new k,new k,new k,new k],Gn=new k,So=new qa,Qr=new k,Jr=new k,jr=new k,Xi=new k,Yi=new k,mr=new k,Zs=new k,yo=new k,Mo=new k,gr=new k;function ec(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){gr.fromArray(t,s);const o=r.x*Math.abs(gr.x)+r.y*Math.abs(gr.y)+r.z*Math.abs(gr.z),l=e.dot(gr),u=n.dot(gr),d=i.dot(gr);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>o)return!1}return!0}const At=new k,Eo=new Je;let wy=0;class Di extends Hr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wy++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=sy,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Eo.fromBufferAttribute(this,n),Eo.applyMatrix3(e),this.setXY(n,Eo.x,Eo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix3(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix4(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyNormalMatrix(e),this.setXYZ(n,At.x,At.y,At.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.transformDirection(e),this.setXYZ(n,At.x,At.y,At.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=$s(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=cn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=$s(n,this.array)),n}setX(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=$s(n,this.array)),n}setY(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=$s(n,this.array)),n}setZ(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=$s(n,this.array)),n}setW(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array),s=cn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class v0 extends Di{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class x0 extends Di{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class an extends Di{constructor(e,n,i){super(new Float32Array(e),n,i)}}const Ay=new qa,Qs=new k,tc=new k;class tu{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Ay.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);const n=Qs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Qs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add(tc)),this.expandByPoint(Qs.copy(e.center).sub(tc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ry=0;const bn=new yt,nc=new vn,es=new k,Sn=new qa,Js=new qa,Ft=new k;class wn extends Hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=Ya(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ay(e)?x0:v0)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ne().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,n,i){return bn.makeTranslation(e,n,i),this.applyMatrix4(bn),this}scale(e,n,i){return bn.makeScale(e,n,i),this.applyMatrix4(bn),this}lookAt(e){return nc.lookAt(e),nc.updateMatrix(),this.applyMatrix4(nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new an(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Js.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(Sn.min,Js.min),Sn.expandByPoint(Ft),Ft.addVectors(Sn.max,Js.max),Sn.expandByPoint(Ft)):(Sn.expandByPoint(Js.min),Sn.expandByPoint(Js.max))}Sn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ft));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,d=o.count;u<d;u++)Ft.fromBufferAttribute(o,u),l&&(es.fromBufferAttribute(e,u),Ft.add(es)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Di(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new k,l[v]=new k;const u=new k,d=new k,h=new k,f=new Je,p=new Je,x=new Je,E=new k,m=new k;function c(v,A,b){u.fromBufferAttribute(i,v),d.fromBufferAttribute(i,A),h.fromBufferAttribute(i,b),f.fromBufferAttribute(s,v),p.fromBufferAttribute(s,A),x.fromBufferAttribute(s,b),d.sub(u),h.sub(u),p.sub(f),x.sub(f);const D=1/(p.x*x.y-x.x*p.y);isFinite(D)&&(E.copy(d).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(D),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(D),o[v].add(E),o[A].add(E),o[b].add(E),l[v].add(m),l[A].add(m),l[b].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let v=0,A=g.length;v<A;++v){const b=g[v],D=b.start,z=b.count;for(let Y=D,I=D+z;Y<I;Y+=3)c(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const M=new k,S=new k,T=new k,w=new k;function R(v){T.fromBufferAttribute(r,v),w.copy(T);const A=o[v];M.copy(A),M.sub(T.multiplyScalar(T.dot(A))).normalize(),S.crossVectors(w,A);const D=S.dot(l[v])<0?-1:1;a.setXYZW(v,M.x,M.y,M.z,D)}for(let v=0,A=g.length;v<A;++v){const b=g[v],D=b.start,z=b.count;for(let Y=D,I=D+z;Y<I;Y+=3)R(e.getX(Y+0)),R(e.getX(Y+1)),R(e.getX(Y+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Di(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new k,s=new k,a=new k,o=new k,l=new k,u=new k,d=new k,h=new k;if(e)for(let f=0,p=e.count;f<p;f+=3){const x=e.getX(f+0),E=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,E),a.fromBufferAttribute(n,m),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,m),o.add(d),l.add(d),u.add(d),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ft.fromBufferAttribute(e,n),Ft.normalize(),e.setXYZ(n,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const u=o.array,d=o.itemSize,h=o.normalized,f=new u.constructor(l.length*d);let p=0,x=0;for(let E=0,m=l.length;E<m;E++){o.isInterleavedBufferAttribute?p=l[E]*o.data.stride+o.offset:p=l[E]*d;for(let c=0;c<d;c++)f[x++]=u[p++]}return new Di(f,d,h)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new wn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let d=0,h=u.length;d<h;d++){const f=u[d],p=e(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let h=0,f=u.length;h<f;h++){const p=u[h];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(n))}const s=e.morphAttributes;for(const u in s){const d=[],h=s[u];for(let f=0,p=h.length;f<p;f++)d.push(h[f].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,d=a.length;u<d;u++){const h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ic=new k,Cy=new k,by=new Ne;class Ti{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ic.subVectors(i,n).cross(Cy.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(ic),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||by.getNormalMatrix(e),r=this.coplanarPoint(ic).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Py=0;class $a extends Hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Py++}),this.uuid=Ya(),this.name="",this.type="Material",this.blending=xa,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Q_,this.blendDst=J_,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=JS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ou,this.stencilZFail=Ou,this.stencilZPass=Ou,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){De(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){De(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Ti().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Je().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Je().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const yi=new k,rc=new k,To=new k,wo=new k;class rh{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=yi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,n),yi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){rc.copy(e).add(n).multiplyScalar(.5),To.copy(n).sub(e).normalize(),wo.copy(this.origin).sub(rc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(To),o=wo.dot(this.direction),l=-wo.dot(To),u=wo.lengthSq(),d=Math.abs(1-a*a);let h,f,p,x;if(d>0)if(h=a*l-o,f=a*o-l,x=s*d,h>=0)if(f>=-x)if(f<=x){const E=1/d;h*=E,f*=E,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+u}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+u;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+u;else f<=-x?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u):f<=x?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(rc).addScaledVector(To,f),p}intersectSphere(e,n){if(e.radius<0)return null;yi.subVectors(e.center,this.origin);const i=yi.dot(this.direction),r=yi.dot(yi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),d>=0?(s=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,l=o.x,u=o.y,d=o.z,h=e.x-a.x,f=e.y-a.y,p=e.z-a.z,x=n.x-a.x,E=n.y-a.y,m=n.z-a.z,c=i.x-a.x,g=i.y-a.y,M=i.z-a.z,S=Math.abs(l),T=Math.abs(u),w=Math.abs(d);let R,v,A,b,D,z,Y,I,G,j,q,F;if(S>=T&&S>=w?(A=l,z=h,G=x,F=c,l>=0?(R=u,v=d,b=f,D=p,Y=E,I=m,j=g,q=M):(R=d,v=u,b=p,D=f,Y=m,I=E,j=M,q=g)):T>=w?(A=u,z=f,G=E,F=g,u>=0?(R=d,v=l,b=p,D=h,Y=m,I=x,j=M,q=c):(R=l,v=d,b=h,D=p,Y=x,I=m,j=c,q=M)):(A=d,z=p,G=m,F=M,d>=0?(R=l,v=u,b=h,D=f,Y=x,I=E,j=c,q=g):(R=u,v=l,b=f,D=h,Y=E,I=x,j=g,q=c)),A===0)return null;const U=R/A,W=v/A,Z=1/A,de=b-U*z,ye=D-W*z,ze=Y-U*G,Ue=I-W*G,Fe=j-U*F,B=q-W*F,K=Fe*Ue-B*ze,pe=de*B-ye*Fe,Pe=ze*ye-Ue*de;if(r){if(K<0||pe<0||Pe<0)return null}else if((K<0||pe<0||Pe<0)&&(K>0||pe>0||Pe>0))return null;const ge=K+pe+Pe;if(ge===0)return null;const ke=Z*(K*z+pe*G+Pe*F);return(ge>0?ke<0:ke>0)?null:this.at(ke/ge,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sh extends $a{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Br,this.combine=j_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jp=new yt,_r=new rh,Ao=new tu,jp=new k,Ro=new k,Co=new k,bo=new k,sc=new k,Po=new k,em=new k,Lo=new k;class mi extends vn{constructor(e=new wn,n=new sh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Po.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const d=o[l],h=s[l];d!==0&&(sc.fromBufferAttribute(h,e),a?Po.addScaledVector(sc,d):Po.addScaledVector(sc.sub(n),d))}n.add(Po)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ao.copy(i.boundingSphere),Ao.applyMatrix4(s),_r.copy(e.ray).recast(e.near),!(Ao.containsPoint(_r.origin)===!1&&(_r.intersectSphere(Ao,jp)===null||_r.origin.distanceToSquared(jp)>(e.far-e.near)**2))&&(Jp.copy(s).invert(),_r.copy(e.ray).applyMatrix4(Jp),!(i.boundingBox!==null&&_r.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,_r)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,E=f.length;x<E;x++){const m=f[x],c=a[m.materialIndex],g=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,T=M;S<T;S+=3){const w=o.getX(S),R=o.getX(S+1),v=o.getX(S+2);r=Do(this,c,e,i,u,d,h,w,R,v),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),E=Math.min(o.count,p.start+p.count);for(let m=x,c=E;m<c;m+=3){const g=o.getX(m),M=o.getX(m+1),S=o.getX(m+2);r=Do(this,a,e,i,u,d,h,g,M,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,E=f.length;x<E;x++){const m=f[x],c=a[m.materialIndex],g=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,T=M;S<T;S+=3){const w=S,R=S+1,v=S+2;r=Do(this,c,e,i,u,d,h,w,R,v),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),E=Math.min(l.count,p.start+p.count);for(let m=x,c=E;m<c;m+=3){const g=m,M=m+1,S=m+2;r=Do(this,a,e,i,u,d,h,g,M,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Ly(t,e,n,i,r,s,a,o){let l;if(e.side===_n?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ur,o),l===null)return null;Lo.copy(o),Lo.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Lo);return u<n.near||u>n.far?null:{distance:u,point:Lo.clone(),object:t}}function Do(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,Ro),t.getVertexPosition(l,Co),t.getVertexPosition(u,bo);const d=Ly(t,e,n,i,Ro,Co,bo,em);if(d){const h=new k;$n.getBarycoord(em,Ro,Co,bo,h),r&&(d.uv=$n.getInterpolatedAttribute(r,o,l,u,h,new Je)),s&&(d.uv1=$n.getInterpolatedAttribute(s,o,l,u,h,new Je)),a&&(d.normal=$n.getInterpolatedAttribute(a,o,l,u,h,new k),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new k,materialIndex:0};$n.getNormal(Ro,Co,bo,f.normal),d.face=f,d.barycoord=h}return d}class Dy extends sn{constructor(e=null,n=1,i=1,r,s,a,o,l,u=zt,d=zt,h,f){super(null,a,o,l,u,d,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vr=new tu,Ny=new Je(.5,.5),No=new k;class S0{constructor(e=new Ti,n=new Ti,i=new Ti,r=new Ti,s=new Ti,a=new Ti){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ui,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],u=s[3],d=s[4],h=s[5],f=s[6],p=s[7],x=s[8],E=s[9],m=s[10],c=s[11],g=s[12],M=s[13],S=s[14],T=s[15];if(r[0].setComponents(u-a,p-d,c-x,T-g).normalize(),r[1].setComponents(u+a,p+d,c+x,T+g).normalize(),r[2].setComponents(u+o,p+h,c+E,T+M).normalize(),r[3].setComponents(u-o,p-h,c-E,T-M).normalize(),i)r[4].setComponents(l,f,m,S).normalize(),r[5].setComponents(u-l,p-f,c-m,T-S).normalize();else if(r[4].setComponents(u-l,p-f,c-m,T-S).normalize(),n===ui)r[5].setComponents(u+l,p+f,c+m,T+S).normalize();else if(n===Nl)r[5].setComponents(l,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){vr.center.set(0,0,0);const n=Ny.distanceTo(e.center);return vr.radius=.7071067811865476+n,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(No.x=r.normal.x>0?e.max.x:e.min.x,No.y=r.normal.y>0?e.max.y:e.min.y,No.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(No)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $f extends $a{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ul=new k,Fl=new k,tm=new yt,js=new rh,Io=new tu,ac=new k,nm=new k;class y0 extends vn{constructor(e=new wn,n=new $f){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Ul.fromBufferAttribute(n,r-1),Fl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Ul.distanceTo(Fl);e.setAttribute("lineDistance",new an(i,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(r),Io.radius+=s,e.ray.intersectsSphere(Io)===!1)return;tm.copy(r).invert(),js.copy(e.ray).applyMatrix4(tm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=this.isLineSegments?2:1,d=i.index,f=i.attributes.position;if(d!==null){const p=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let E=p,m=x-1;E<m;E+=u){const c=d.getX(E),g=d.getX(E+1),M=Uo(this,e,js,l,c,g,E);M&&n.push(M)}if(this.isLineLoop){const E=d.getX(x-1),m=d.getX(p),c=Uo(this,e,js,l,E,m,x-1);c&&n.push(c)}}else{const p=Math.max(0,a.start),x=Math.min(f.count,a.start+a.count);for(let E=p,m=x-1;E<m;E+=u){const c=Uo(this,e,js,l,E,E+1,E);c&&n.push(c)}if(this.isLineLoop){const E=Uo(this,e,js,l,x-1,p,x-1);E&&n.push(E)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Uo(t,e,n,i,r,s,a){const o=t.geometry.attributes.position;if(Ul.fromBufferAttribute(o,r),Fl.fromBufferAttribute(o,s),n.distanceSqToSegment(Ul,Fl,ac,nm)>i)return;ac.applyMatrix4(t.matrixWorld);const u=e.ray.origin.distanceTo(ac);if(!(u<e.near||u>e.far))return{distance:u,point:nm.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}const im=new k,rm=new k;class Iy extends y0{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)im.fromBufferAttribute(n,r),rm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+im.distanceTo(rm);e.setAttribute("lineDistance",new an(i,1))}else De("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class M0 extends sn{constructor(e=[],n=Fr,i,r,s,a,o,l,u,d){super(e,n,i,r,s,a,o,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class za extends sn{constructor(e,n,i=hi,r,s,a,o=zt,l=zt,u,d=Oi,h=1){if(d!==Oi&&d!==Ar)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:h};super(f,r,s,a,o,l,d,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class Uy extends za{constructor(e,n=hi,i=Fr,r,s,a=zt,o=zt,l,u=Oi){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,n,i,r,s,a,o,l,u),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class E0 extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ka extends wn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],d=[],h=[];let f=0,p=0;x("z","y","x",-1,-1,i,n,e,a,s,0),x("z","y","x",1,-1,i,n,-e,a,s,1),x("x","z","y",1,1,e,i,n,r,a,2),x("x","z","y",1,-1,e,i,-n,r,a,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new an(u,3)),this.setAttribute("normal",new an(d,3)),this.setAttribute("uv",new an(h,2));function x(E,m,c,g,M,S,T,w,R,v,A){const b=S/R,D=T/v,z=S/2,Y=T/2,I=w/2,G=R+1,j=v+1;let q=0,F=0;const U=new k;for(let W=0;W<j;W++){const Z=W*D-Y;for(let de=0;de<G;de++){const ye=de*b-z;U[E]=ye*g,U[m]=Z*M,U[c]=I,u.push(U.x,U.y,U.z),U[E]=0,U[m]=0,U[c]=w>0?1:-1,d.push(U.x,U.y,U.z),h.push(de/R),h.push(1-W/v),q+=1}}for(let W=0;W<v;W++)for(let Z=0;Z<R;Z++){const de=f+Z+G*W,ye=f+Z+G*(W+1),ze=f+(Z+1)+G*(W+1),Ue=f+(Z+1)+G*W;l.push(de,ye,Ue),l.push(ye,ze,Ue),F+=6}o.addGroup(p,F,A),p+=F,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class nu extends wn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,d=l+1,h=e/o,f=n/l,p=[],x=[],E=[],m=[];for(let c=0;c<d;c++){const g=c*f-a;for(let M=0;M<u;M++){const S=M*h-s;x.push(S,-g,0),E.push(0,0,1),m.push(M/o),m.push(1-c/l)}}for(let c=0;c<l;c++)for(let g=0;g<o;g++){const M=g+u*c,S=g+u*(c+1),T=g+1+u*(c+1),w=g+1+u*c;p.push(M,S,w),p.push(S,T,w)}this.setIndex(p),this.setAttribute("position",new an(x,3)),this.setAttribute("normal",new an(E,3)),this.setAttribute("uv",new an(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nu(e.width,e.height,e.widthSegments,e.heightSegments)}}class ah extends wn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let u=0;const d=[],h=new k,f=new k,p=[],x=[],E=[],m=[];for(let c=0;c<=i;c++){const g=[],M=c/i,S=a+M*o,T=e*Math.cos(S),w=Math.sqrt(e*e-T*T);let R=0;c===0&&a===0?R=.5/n:c===i&&l===Math.PI&&(R=-.5/n);for(let v=0;v<=n;v++){const A=v/n,b=r+A*s;h.x=-w*Math.cos(b),h.y=T,h.z=w*Math.sin(b),x.push(h.x,h.y,h.z),f.copy(h).normalize(),E.push(f.x,f.y,f.z),m.push(A+R,1-M),g.push(u++)}d.push(g)}for(let c=0;c<i;c++)for(let g=0;g<n;g++){const M=d[c][g+1],S=d[c][g],T=d[c+1][g],w=d[c+1][g+1];(c!==0||a>0)&&p.push(M,S,w),(c!==i-1||l<Math.PI)&&p.push(S,T,w)}this.setIndex(p),this.setAttribute("position",new an(x,3)),this.setAttribute("normal",new an(E,3)),this.setAttribute("uv",new an(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ah(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Is(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(sm(r))r.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(sm(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function tn(t){const e={};for(let n=0;n<t.length;n++){const i=Is(t[n]);for(const r in i)e[r]=i[r]}return e}function sm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Fy(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function T0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Oy={clone:Is,merge:tn};var By=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ky=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends $a{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=By,this.fragmentShader=ky,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=Fy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Qe().setHex(r.value);break;case"v2":this.uniforms[i].value=new Je().fromArray(r.value);break;case"v3":this.uniforms[i].value=new k().fromArray(r.value);break;case"v4":this.uniforms[i].value=new St().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ne().fromArray(r.value);break;case"m4":this.uniforms[i].value=new yt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class zy extends gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Hy extends $a{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ZS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vy extends $a{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fo=new k,Oo=new Bs,ii=new k;class w0 extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fo,Oo,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fo,Oo,ii.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Fo,Oo,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fo,Oo,ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const qi=new k,am=new Je,om=new Je;class qn extends w0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=qf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qf*2*Math.atan(Math.tan(Bu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,n){return this.getViewBounds(e,am,om),n.subVectors(om,am)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Bu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class oh extends w0{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ts=-90,ns=1;class Gy extends vn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qn(ts,ns,e,n);r.layers=this.layers,this.add(r);const s=new qn(ts,ns,e,n);s.layers=this.layers,this.add(s);const a=new qn(ts,ns,e,n);a.layers=this.layers,this.add(a);const o=new qn(ts,ns,e,n);o.layers=this.layers,this.add(o);const l=new qn(ts,ns,e,n);l.layers=this.layers,this.add(l);const u=new qn(ts,ns,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Nl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(h,f,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Wy extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const lm=new yt;class Xy{constructor(e,n,i=0,r=1/0){this.ray=new rh(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new ih,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):$e("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return lm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lm),this}intersectObject(e,n=!0,i=[]){return Kf(e,this,i,n),i.sort(um),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Kf(e[r],this,i,n);return i.sort(um),i}}function um(t,e){return t.distance-e.distance}function Kf(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)Kf(s[a],e,n,!0)}}const dh=class dh{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};dh.prototype.isMatrix2=!0;let cm=dh;function fm(t,e,n,i){const r=Yy(i);switch(n){case d0:return t*e;case p0:return t*e/r.components*r.byteLength;case Qd:return t*e/r.components*r.byteLength;case Or:return t*e*2/r.components*r.byteLength;case Jd:return t*e*2/r.components*r.byteLength;case h0:return t*e*3/r.components*r.byteLength;case Kn:return t*e*4/r.components*r.byteLength;case jd:return t*e*4/r.components*r.byteLength;case jo:case el:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case tl:case nl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case vf:case Sf:return Math.max(t,16)*Math.max(e,8)/4;case _f:case xf:return Math.max(t,8)*Math.max(e,8)/2;case yf:case Mf:case Tf:case wf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ef:case bl:case Af:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Cf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case bf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Df:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Nf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case If:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Uf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ff:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Of:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Bf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case kf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case zf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Hf:case Vf:case Gf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Wf:case Xf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Pl:case Yf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Yy(t){switch(t){case In:case l0:return{byteLength:1,components:1};case Ba:case u0:case pi:return{byteLength:2,components:1};case Kd:case Zd:return{byteLength:2,components:4};case hi:case $d:case li:return{byteLength:4,components:1};case c0:case f0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qd}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function A0(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function qy(t){const e=new WeakMap;function n(o,l){const u=o.array,d=o.usage,h=u.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,u,d),o.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,u){const d=l.array,h=l.updateRanges;if(t.bindBuffer(u,o),h.length===0)t.bufferSubData(u,0,d);else{h.sort((p,x)=>p.start-x.start);let f=0;for(let p=1;p<h.length;p++){const x=h[f],E=h[p];E.start<=x.start+x.count+1?x.count=Math.max(x.count,E.start+E.count-x.start):(++f,h[f]=E)}h.length=f+1;for(let p=0,x=h.length;p<x;p++){const E=h[p];t.bufferSubData(u,E.start*d.BYTES_PER_ELEMENT,d,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var $y=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ky=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,iM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,aM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,oM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,_M=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,SM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,MM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,EM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TM="gl_FragColor = linearToOutputTexel( gl_FragColor );",wM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,AM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,RM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,CM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,LM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,DM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,NM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,IM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,UM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,FM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,BM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,zM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,HM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,XM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,YM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$M=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,KM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ZM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,QM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,JM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_E=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,SE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ME=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,EE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,TE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,AE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,PE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,LE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,DE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,NE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,IE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,UE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,FE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,OE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,BE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,VE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,GE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,WE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,XE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $E=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,KE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,iT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,rT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,uT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_T=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ST=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ET=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:$y,alphahash_pars_fragment:Ky,alphamap_fragment:Zy,alphamap_pars_fragment:Qy,alphatest_fragment:Jy,alphatest_pars_fragment:jy,aomap_fragment:eM,aomap_pars_fragment:tM,batching_pars_vertex:nM,batching_vertex:iM,begin_vertex:rM,beginnormal_vertex:sM,bsdfs:aM,iridescence_fragment:oM,bumpmap_pars_fragment:lM,clipping_planes_fragment:uM,clipping_planes_pars_fragment:cM,clipping_planes_pars_vertex:fM,clipping_planes_vertex:dM,color_fragment:hM,color_pars_fragment:pM,color_pars_vertex:mM,color_vertex:gM,common:_M,cube_uv_reflection_fragment:vM,defaultnormal_vertex:xM,displacementmap_pars_vertex:SM,displacementmap_vertex:yM,emissivemap_fragment:MM,emissivemap_pars_fragment:EM,colorspace_fragment:TM,colorspace_pars_fragment:wM,envmap_fragment:AM,envmap_common_pars_fragment:RM,envmap_pars_fragment:CM,envmap_pars_vertex:bM,envmap_physical_pars_fragment:zM,envmap_vertex:PM,fog_vertex:LM,fog_pars_vertex:DM,fog_fragment:NM,fog_pars_fragment:IM,gradientmap_pars_fragment:UM,lightmap_pars_fragment:FM,lights_lambert_fragment:OM,lights_lambert_pars_fragment:BM,lights_pars_begin:kM,lights_toon_fragment:HM,lights_toon_pars_fragment:VM,lights_phong_fragment:GM,lights_phong_pars_fragment:WM,lights_physical_fragment:XM,lights_physical_pars_fragment:YM,lights_fragment_begin:qM,lights_fragment_maps:$M,lights_fragment_end:KM,lightprobes_pars_fragment:ZM,logdepthbuf_fragment:QM,logdepthbuf_pars_fragment:JM,logdepthbuf_pars_vertex:jM,logdepthbuf_vertex:eE,map_fragment:tE,map_pars_fragment:nE,map_particle_fragment:iE,map_particle_pars_fragment:rE,metalnessmap_fragment:sE,metalnessmap_pars_fragment:aE,morphinstance_vertex:oE,morphcolor_vertex:lE,morphnormal_vertex:uE,morphtarget_pars_vertex:cE,morphtarget_vertex:fE,normal_fragment_begin:dE,normal_fragment_maps:hE,normal_pars_fragment:pE,normal_pars_vertex:mE,normal_vertex:gE,normalmap_pars_fragment:_E,clearcoat_normal_fragment_begin:vE,clearcoat_normal_fragment_maps:xE,clearcoat_pars_fragment:SE,iridescence_pars_fragment:yE,opaque_fragment:ME,packing:EE,premultiplied_alpha_fragment:TE,project_vertex:wE,dithering_fragment:AE,dithering_pars_fragment:RE,roughnessmap_fragment:CE,roughnessmap_pars_fragment:bE,shadowmap_pars_fragment:PE,shadowmap_pars_vertex:LE,shadowmap_vertex:DE,shadowmask_pars_fragment:NE,skinbase_vertex:IE,skinning_pars_vertex:UE,skinning_vertex:FE,skinnormal_vertex:OE,specularmap_fragment:BE,specularmap_pars_fragment:kE,tonemapping_fragment:zE,tonemapping_pars_fragment:HE,transmission_fragment:VE,transmission_pars_fragment:GE,uv_pars_fragment:WE,uv_pars_vertex:XE,uv_vertex:YE,worldpos_vertex:qE,background_vert:$E,background_frag:KE,backgroundCube_vert:ZE,backgroundCube_frag:QE,cube_vert:JE,cube_frag:jE,depth_vert:eT,depth_frag:tT,distance_vert:nT,distance_frag:iT,equirect_vert:rT,equirect_frag:sT,linedashed_vert:aT,linedashed_frag:oT,meshbasic_vert:lT,meshbasic_frag:uT,meshlambert_vert:cT,meshlambert_frag:fT,meshmatcap_vert:dT,meshmatcap_frag:hT,meshnormal_vert:pT,meshnormal_frag:mT,meshphong_vert:gT,meshphong_frag:_T,meshphysical_vert:vT,meshphysical_frag:xT,meshtoon_vert:ST,meshtoon_frag:yT,points_vert:MT,points_frag:ET,shadow_vert:TT,shadow_frag:wT,sprite_vert:AT,sprite_frag:RT},fe={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},ai={basic:{uniforms:tn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:tn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:tn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:tn([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:tn([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:tn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:tn([fe.points,fe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:tn([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:tn([fe.common,fe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:tn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:tn([fe.sprite,fe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:tn([fe.common,fe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:tn([fe.lights,fe.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};ai.physical={uniforms:tn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Bo={r:0,b:0,g:0},CT=new yt,R0=new Ne;R0.set(-1,0,0,0,1,0,0,0,1);function bT(t,e,n,i,r,s){const a=new Qe(0);let o=r===!0?0:1,l,u,d=null,h=0,f=null;function p(g){let M=g.isScene===!0?g.background:null;if(M&&M.isTexture){const S=g.backgroundBlurriness>0;M=e.get(M,S)}return M}function x(g){let M=!1;const S=p(g);S===null?m(a,o):S&&S.isColor&&(m(S,1),M=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(g,M){const S=p(M);S&&(S.isCubeTexture||S.mapping===eu)?(u===void 0&&(u=new mi(new Ka(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:Is(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(CT.makeRotationFromEuler(M.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(R0),u.material.toneMapped=Xe.getTransfer(S.colorSpace)!==nt,(d!==S||h!==S.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,d=S,h=S.version,f=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new mi(new nu(2,2),new gi({name:"BackgroundMaterial",uniforms:Is(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(S.colorSpace)!==nt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||h!==S.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,d=S,h=S.version,f=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function m(g,M){g.getRGB(Bo,T0(t)),n.buffers.color.setClear(Bo.r,Bo.g,Bo.b,M,s)}function c(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,M=1){a.set(g),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,m(a,o)},render:x,addToRenderList:E,dispose:c}}function PT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(D,z,Y,I,G){let j=!1;const q=h(D,I,Y,z);s!==q&&(s=q,u(s.object)),j=p(D,I,Y,G),j&&x(D,I,Y,G),G!==null&&e.update(G,t.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,S(D,z,Y,I),G!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return t.createVertexArray()}function u(D){return t.bindVertexArray(D)}function d(D){return t.deleteVertexArray(D)}function h(D,z,Y,I){const G=I.wireframe===!0;let j=i[z.id];j===void 0&&(j={},i[z.id]=j);const q=D.isInstancedMesh===!0?D.id:0;let F=j[q];F===void 0&&(F={},j[q]=F);let U=F[Y.id];U===void 0&&(U={},F[Y.id]=U);let W=U[G];return W===void 0&&(W=f(l()),U[G]=W),W}function f(D){const z=[],Y=[],I=[];for(let G=0;G<n;G++)z[G]=0,Y[G]=0,I[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Y,attributeDivisors:I,object:D,attributes:{},index:null}}function p(D,z,Y,I){const G=s.attributes,j=z.attributes;let q=0;const F=Y.getAttributes();for(const U in F)if(F[U].location>=0){const Z=G[U];let de=j[U];if(de===void 0&&(U==="instanceMatrix"&&D.instanceMatrix&&(de=D.instanceMatrix),U==="instanceColor"&&D.instanceColor&&(de=D.instanceColor)),Z===void 0||Z.attribute!==de||de&&Z.data!==de.data)return!0;q++}return s.attributesNum!==q||s.index!==I}function x(D,z,Y,I){const G={},j=z.attributes;let q=0;const F=Y.getAttributes();for(const U in F)if(F[U].location>=0){let Z=j[U];Z===void 0&&(U==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),U==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor));const de={};de.attribute=Z,Z&&Z.data&&(de.data=Z.data),G[U]=de,q++}s.attributes=G,s.attributesNum=q,s.index=I}function E(){const D=s.newAttributes;for(let z=0,Y=D.length;z<Y;z++)D[z]=0}function m(D){c(D,0)}function c(D,z){const Y=s.newAttributes,I=s.enabledAttributes,G=s.attributeDivisors;Y[D]=1,I[D]===0&&(t.enableVertexAttribArray(D),I[D]=1),G[D]!==z&&(t.vertexAttribDivisor(D,z),G[D]=z)}function g(){const D=s.newAttributes,z=s.enabledAttributes;for(let Y=0,I=z.length;Y<I;Y++)z[Y]!==D[Y]&&(t.disableVertexAttribArray(Y),z[Y]=0)}function M(D,z,Y,I,G,j,q){q===!0?t.vertexAttribIPointer(D,z,Y,G,j):t.vertexAttribPointer(D,z,Y,I,G,j)}function S(D,z,Y,I){E();const G=I.attributes,j=Y.getAttributes(),q=z.defaultAttributeValues;for(const F in j){const U=j[F];if(U.location>=0){let W=G[F];if(W===void 0&&(F==="instanceMatrix"&&D.instanceMatrix&&(W=D.instanceMatrix),F==="instanceColor"&&D.instanceColor&&(W=D.instanceColor)),W!==void 0){const Z=W.normalized,de=W.itemSize,ye=e.get(W);if(ye===void 0)continue;const ze=ye.buffer,Ue=ye.type,Fe=ye.bytesPerElement,B=Ue===t.INT||Ue===t.UNSIGNED_INT||W.gpuType===$d;if(W.isInterleavedBufferAttribute){const K=W.data,pe=K.stride,Pe=W.offset;if(K.isInstancedInterleavedBuffer){for(let ge=0;ge<U.locationSize;ge++)c(U.location+ge,K.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ge=0;ge<U.locationSize;ge++)m(U.location+ge);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let ge=0;ge<U.locationSize;ge++)M(U.location+ge,de/U.locationSize,Ue,Z,pe*Fe,(Pe+de/U.locationSize*ge)*Fe,B)}else{if(W.isInstancedBufferAttribute){for(let K=0;K<U.locationSize;K++)c(U.location+K,W.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let K=0;K<U.locationSize;K++)m(U.location+K);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let K=0;K<U.locationSize;K++)M(U.location+K,de/U.locationSize,Ue,Z,de*Fe,de/U.locationSize*K*Fe,B)}}else if(q!==void 0){const Z=q[F];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(U.location,Z);break;case 3:t.vertexAttrib3fv(U.location,Z);break;case 4:t.vertexAttrib4fv(U.location,Z);break;default:t.vertexAttrib1fv(U.location,Z)}}}}g()}function T(){A();for(const D in i){const z=i[D];for(const Y in z){const I=z[Y];for(const G in I){const j=I[G];for(const q in j)d(j[q].object),delete j[q];delete I[G]}}delete i[D]}}function w(D){if(i[D.id]===void 0)return;const z=i[D.id];for(const Y in z){const I=z[Y];for(const G in I){const j=I[G];for(const q in j)d(j[q].object),delete j[q];delete I[G]}}delete i[D.id]}function R(D){for(const z in i){const Y=i[z];for(const I in Y){const G=Y[I];if(G[D.id]===void 0)continue;const j=G[D.id];for(const q in j)d(j[q].object),delete j[q];delete G[D.id]}}}function v(D){for(const z in i){const Y=i[z],I=D.isInstancedMesh===!0?D.id:0,G=Y[I];if(G!==void 0){for(const j in G){const q=G[j];for(const F in q)d(q[F].object),delete q[F];delete G[j]}delete Y[I],Object.keys(Y).length===0&&delete i[z]}}}function A(){b(),a=!0,s!==r&&(s=r,u(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:E,enableAttribute:m,disableUnusedAttributes:g}}function LT(t,e,n){let i;function r(l){i=l}function s(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function a(l,u,d){d!==0&&(t.drawArraysInstanced(i,l,u,d),n.update(u,i,d))}function o(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let f=0;for(let p=0;p<d;p++)f+=u[p];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function DT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==Kn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const v=R===pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==In&&R!==li&&!v&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const d=l(u);d!==u&&(De("WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const h=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),c=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:E,maxCubemapSize:m,maxAttributes:c,maxVertexUniforms:g,maxVaryings:M,maxFragmentUniforms:S,maxSamples:T,samples:w}}function NT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Ti,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,p){const x=h.clippingPlanes,E=h.clipIntersection,m=h.clipShadows,c=t.get(h);if(!r||x===null||x.length===0||s&&!m)s?d(null):u();else{const g=s?0:i,M=g*4;let S=c.clippingState||null;l.value=S,S=d(x,f,M,p);for(let T=0;T!==M;++T)S[T]=n[T];c.clippingState=S,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,p,x){const E=h!==null?h.length:0;let m=null;if(E!==0){if(m=l.value,x!==!0||m===null){const c=p+E*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<c)&&(m=new Float32Array(c));for(let M=0,S=p;M!==E;++M,S+=4)a.copy(h[M]).applyMatrix4(g,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,m}}const _s=4,IT=6,UT=20,FT=256,ea=new oh,dm=new Qe;let oc=null,lc=0,uc=0,cc=!1;const OT=new k,xr=new k;class hm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=OT}=s;oc=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(oc,lc,uc),this._renderer.xr.enabled=cc,e.scissorTest=!1,is(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Fr||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oc=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:pi,format:Kn,colorSpace:Ll,depthBuffer:!1},r=pm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pm(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=BT(s)),this._blurMaterial=zT(s,e,n),this._ggxMaterial=kT(s,e,n)}return r}_compileMaterial(e){const n=new mi(new wn,e);this._renderer.compile(n,ea)}_sceneToCubeUV(e,n,i,r,s){const l=new qn(90,1,n,i),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(dm),h.toneMapping=di,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mi(new Ka,new sh({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,m=E.material;let c=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,c=!0):(m.color.copy(dm),c=!0);for(let M=0;M<6;M++){const S=M%3;S===0?(l.up.set(0,u[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[M],s.y,s.z)):S===1?(l.up.set(0,0,u[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[M],s.z)):(l.up.set(0,u[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[M]));const T=this._cubeSize;is(r,S*T,M>2?T:0,T,T),h.setRenderTarget(r),c&&h.render(E,l),h.render(e,l)}h.toneMapping=p,h.autoClear=f,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Fr||e.mapping===Ns;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;is(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,ea)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,u=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),h=Math.sqrt(u*u-d*d),f=u*1.25,p=h*f,{_lodMax:x}=this,E=this._sizeLods[i],m=3*E*(i>x-_s?i-x+_s:0),c=4*(this._cubeSize-E);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=x-n,is(s,m,c,3*E,2*E),r.setRenderTarget(s),r.render(o,ea),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-i,is(e,m,c,3*E,2*E),r.setRenderTarget(e),r.render(o,ea)}_blur(e,n,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,n,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,n,i,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const u=o.uniforms;u.envMap.value=e.texture,u.sigma.value=s,u.mipInt.value=this._lodMax-i;const d=this._sizeLods[r],h=3*d*(r>this._lodMax-_s?r-this._lodMax+_s:0),f=4*(this._cubeSize-d);is(n,h,f,3*d,2*d),a.setRenderTarget(n),a.render(l,ea)}}function BT(t){const e=[],n=[];let i=t;const r=t-_s+1+IT;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,u=1+o,d=[l,l,u,l,u,u,l,l,u,u,l,u],h=6,f=6,p=3,x=new Float32Array(p*f*h),E=new Float32Array(p*f*h);for(let c=0;c<h;c++){const g=c%3*2/3-1,M=c>2?0:-1,S=[g,M,0,g+2/3,M,0,g+2/3,M+1,0,g,M,0,g+2/3,M+1,0,g,M+1,0];x.set(S,p*f*c);for(let T=0;T<f;T++){const w=d[T*2]*2-1,R=d[T*2+1]*2-1;c===0?xr.set(1,R,w):c===1?xr.set(-w,1,-R):c===2?xr.set(-w,R,1):c===3?xr.set(-1,R,-w):c===4?xr.set(-w,-1,R):xr.set(w,R,-1),xr.toArray(E,(c*f+T)*p)}}const m=new wn;m.setAttribute("position",new Di(x,p)),m.setAttribute("outputDirection",new Di(E,p)),n.push(new mi(m,null)),i>_s&&i--}return{lodMeshes:n,sizeLods:e}}function pm(t,e,n){const i=new Jn(t,e,n);return i.texture.mapping=eu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function is(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function kT(t,e,n){return new gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:FT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:iu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function zT(t,e,n){return new gi({name:"SphericalGaussianBlur",defines:{SAMPLES:UT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:iu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function mm(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function gm(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function iu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class C0 extends Jn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new M0(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ka(5,5,5),s=new gi({name:"CubemapFromEquirect",uniforms:Is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Pi});s.uniforms.tEquirect.value=n;const a=new mi(r,s),o=n.minFilter;return n.minFilter===wr&&(n.minFilter=Jt),new Gy(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function HT(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,p=!1){return f==null?null:p?a(f):s(f)}function s(f){if(f&&f.isTexture){const p=f.mapping;if(p===Iu||p===Uu)if(e.has(f)){const x=e.get(f).texture;return o(x,f.mapping)}else{const x=f.image;if(x&&x.height>0){const E=new C0(x.height);return E.fromEquirectangularTexture(t,f),e.set(f,E),f.addEventListener("dispose",u),o(E.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const p=f.mapping,x=p===Iu||p===Uu,E=p===Fr||p===Ns;if(x||E){let m=n.get(f);const c=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==c)return i===null&&(i=new hm(t)),m=x?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),m.texture;if(m!==void 0)return m.texture;{const g=f.image;return x&&g&&g.height>0||E&&g&&l(g)?(i===null&&(i=new hm(t)),m=x?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),f.addEventListener("dispose",d),m.texture):null}}}return f}function o(f,p){return p===Iu?f.mapping=Fr:p===Uu&&(f.mapping=Ns),f}function l(f){let p=0;const x=6;for(let E=0;E<x;E++)f[E]!==void 0&&p++;return p===x}function u(f){const p=f.target;p.removeEventListener("dispose",u);const x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function d(f){const p=f.target;p.removeEventListener("dispose",d);const x=n.get(p);x!==void 0&&(n.delete(p),x.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function VT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ts("WebGLRenderer: "+i+" extension not supported."),r}}}function GT(t,e,n,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function u(h){const f=[],p=h.index,x=h.attributes.position;let E=0;if(x===void 0)return;if(p!==null){const g=p.array;E=p.version;for(let M=0,S=g.length;M<S;M+=3){const T=g[M+0],w=g[M+1],R=g[M+2];f.push(T,w,w,R,R,T)}}else{const g=x.array;E=x.version;for(let M=0,S=g.length/3-1;M<S;M+=3){const T=M+0,w=M+1,R=M+2;f.push(T,w,w,R,R,T)}}const m=new(x.count>=65535?x0:v0)(f,1);m.version=E;const c=s.get(h);c&&e.remove(c),s.set(h,m)}function d(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function WT(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,f){t.drawElements(i,f,s,h*a),n.update(f,i,1)}function u(h,f,p){p!==0&&(t.drawElementsInstanced(i,f,s,h*a,p),n.update(f,i,p))}function d(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,p);let E=0;for(let m=0;m<p;m++)E+=f[m];n.update(E,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function XT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:$e("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function YT(t,e,n){const i=new WeakMap,r=new St;function s(a,o,l){const u=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let b=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",b)};var p=b;f!==void 0&&f.texture.dispose();const x=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,c=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let S=0;x===!0&&(S=1),E===!0&&(S=2),m===!0&&(S=3);let T=o.attributes.position.count*S,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const R=new Float32Array(T*w*4*h),v=new g0(R,T,w,h);v.type=li,v.needsUpdate=!0;const A=S*4;for(let D=0;D<h;D++){const z=c[D],Y=g[D],I=M[D],G=T*w*4*D;for(let j=0;j<z.count;j++){const q=j*A;x===!0&&(r.fromBufferAttribute(z,j),R[G+q+0]=r.x,R[G+q+1]=r.y,R[G+q+2]=r.z,R[G+q+3]=0),E===!0&&(r.fromBufferAttribute(Y,j),R[G+q+4]=r.x,R[G+q+5]=r.y,R[G+q+6]=r.z,R[G+q+7]=0),m===!0&&(r.fromBufferAttribute(I,j),R[G+q+8]=r.x,R[G+q+9]=r.y,R[G+q+10]=r.z,R[G+q+11]=I.itemSize===4?r.w:1)}}f={count:h,texture:v,size:new Je(T,w)},i.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let x=0;for(let m=0;m<u.length;m++)x+=u[m];const E=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",E),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function qT(t,e,n,i,r){let s=new WeakMap;function a(u){const d=r.render.frame,h=u.geometry,f=e.get(u,h);if(s.get(f)!==d&&(e.update(f),s.set(f,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==d&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,d))),u.isSkinnedMesh){const p=u.skeleton;s.get(p)!==d&&(p.update(),s.set(p,d))}return f}function o(){s=new WeakMap}function l(u){const d=u.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:a,dispose:o}}const $T={[e0]:"LINEAR_TONE_MAPPING",[t0]:"REINHARD_TONE_MAPPING",[n0]:"CINEON_TONE_MAPPING",[i0]:"ACES_FILMIC_TONE_MAPPING",[s0]:"AGX_TONE_MAPPING",[a0]:"NEUTRAL_TONE_MAPPING",[r0]:"CUSTOM_TONE_MAPPING"};function KT(t,e,n,i,r,s){const a=new Jn(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const u=new wn;u.setAttribute("position",new an([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new an([0,2,0,0,2,0],2));const d=new zy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new mi(u,d),f=new oh(-1,1,1,-1,0,1);let p=null,x=null,E=!1,m,c=null,g=[],M=!1;this.setSize=function(S,T){a.setSize(S,T),o!==null&&o.setSize(S,T),l!==null&&l.setSize(S,T);for(let w=0;w<g.length;w++){const R=g[w];R.setSize&&R.setSize(S,T)}},this.setEffects=function(S){g=S,M=g.length>0&&g[0].isRenderPass===!0;const T=a.width,w=a.height;g.length>0&&o===null&&(o=new Jn(T,w,{type:pi,depthBuffer:!1,stencilBuffer:!1}),l=new Jn(T,w,{type:pi,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<g.length;R++){const v=g[R];v.setSize&&v.setSize(T,w)}},this.begin=function(S,T){if(E||S.toneMapping===di&&g.length===0)return!1;if(c=T,T!==null){const w=T.width,R=T.height;(a.width!==w||a.height!==R)&&this.setSize(w,R)}return M===!1&&S.setRenderTarget(a),m=S.toneMapping,S.toneMapping=di,!0},this.hasRenderPass=function(){return M},this.end=function(S,T){S.toneMapping=m,E=!0;let w=a,R=o;for(let v=0;v<g.length;v++){const A=g[v];A.enabled!==!1&&(A.render(S,R,w,T),A.needsSwap!==!1&&(w=R,R=R===o?l:o))}if(p!==S.outputColorSpace||x!==S.toneMapping){p=S.outputColorSpace,x=S.toneMapping,d.defines={},Xe.getTransfer(p)===nt&&(d.defines.SRGB_TRANSFER="");const v=$T[x];v&&(d.defines[v]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=w.texture,S.setRenderTarget(c),S.render(h,f),c=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}const b0=new sn,Zf=new za(1,1),P0=new g0,L0=new gy,D0=new M0,_m=[],vm=[],xm=new Float32Array(16),Sm=new Float32Array(9),ym=new Float32Array(4);function ks(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=_m[r];if(s===void 0&&(s=new Float32Array(r),_m[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Nt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ru(t,e){let n=vm[e];n===void 0&&(n=new Int32Array(e),vm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function ZT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function QT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function JT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Nt(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function jT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function e1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Nt(n,i))return;ym.set(i),t.uniformMatrix2fv(this.addr,!1,ym),It(n,i)}}function t1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Nt(n,i))return;Sm.set(i),t.uniformMatrix3fv(this.addr,!1,Sm),It(n,i)}}function n1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Nt(n,i))return;xm.set(i),t.uniformMatrix4fv(this.addr,!1,xm),It(n,i)}}function i1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function r1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function s1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function a1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function o1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function l1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function u1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function c1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function f1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Zf.compareFunction=n.isReversedDepthBuffer()?th:eh,s=Zf):s=b0,n.setTexture2D(e||s,r)}function d1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||L0,r)}function h1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||D0,r)}function p1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||P0,r)}function m1(t){switch(t){case 5126:return ZT;case 35664:return QT;case 35665:return JT;case 35666:return jT;case 35674:return e1;case 35675:return t1;case 35676:return n1;case 5124:case 35670:return i1;case 35667:case 35671:return r1;case 35668:case 35672:return s1;case 35669:case 35673:return a1;case 5125:return o1;case 36294:return l1;case 36295:return u1;case 36296:return c1;case 35678:case 36198:case 36298:case 36306:case 35682:return f1;case 35679:case 36299:case 36307:return d1;case 35680:case 36300:case 36308:case 36293:return h1;case 36289:case 36303:case 36311:case 36292:return p1}}function g1(t,e){t.uniform1fv(this.addr,e)}function _1(t,e){const n=ks(e,this.size,2);t.uniform2fv(this.addr,n)}function v1(t,e){const n=ks(e,this.size,3);t.uniform3fv(this.addr,n)}function x1(t,e){const n=ks(e,this.size,4);t.uniform4fv(this.addr,n)}function S1(t,e){const n=ks(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function y1(t,e){const n=ks(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function M1(t,e){const n=ks(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function E1(t,e){t.uniform1iv(this.addr,e)}function T1(t,e){t.uniform2iv(this.addr,e)}function w1(t,e){t.uniform3iv(this.addr,e)}function A1(t,e){t.uniform4iv(this.addr,e)}function R1(t,e){t.uniform1uiv(this.addr,e)}function C1(t,e){t.uniform2uiv(this.addr,e)}function b1(t,e){t.uniform3uiv(this.addr,e)}function P1(t,e){t.uniform4uiv(this.addr,e)}function L1(t,e,n){const i=this.cache,r=e.length,s=ru(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Zf:a=b0;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function D1(t,e,n){const i=this.cache,r=e.length,s=ru(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||L0,s[a])}function N1(t,e,n){const i=this.cache,r=e.length,s=ru(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||D0,s[a])}function I1(t,e,n){const i=this.cache,r=e.length,s=ru(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||P0,s[a])}function U1(t){switch(t){case 5126:return g1;case 35664:return _1;case 35665:return v1;case 35666:return x1;case 35674:return S1;case 35675:return y1;case 35676:return M1;case 5124:case 35670:return E1;case 35667:case 35671:return T1;case 35668:case 35672:return w1;case 35669:case 35673:return A1;case 5125:return R1;case 36294:return C1;case 36295:return b1;case 36296:return P1;case 35678:case 36198:case 36298:case 36306:case 35682:return L1;case 35679:case 36299:case 36307:return D1;case 35680:case 36300:case 36308:case 36293:return N1;case 36289:case 36303:case 36311:case 36292:return I1}}class F1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=m1(n.type)}}class O1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=U1(n.type)}}class B1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const fc=/(\w+)(\])?(\[|\.)?/g;function Mm(t,e){t.seq.push(e),t.map[e.id]=e}function k1(t,e,n){const i=t.name,r=i.length;for(fc.lastIndex=0;;){const s=fc.exec(i),a=fc.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){Mm(n,u===void 0?new F1(o,t,e):new O1(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new B1(o),Mm(n,h)),n=h}}}class il{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);k1(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Em(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const z1=37297;let H1=0;function V1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Tm=new Ne;function G1(t){Xe._getMatrix(Tm,Xe.workingColorSpace,t);const e=`mat3( ${Tm.elements.map(n=>n.toFixed(4))} )`;switch(Xe.getTransfer(t)){case Dl:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function wm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+V1(t.getShaderSource(e),o)}else return s}function W1(t,e){const n=G1(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const X1={[e0]:"Linear",[t0]:"Reinhard",[n0]:"Cineon",[i0]:"ACESFilmic",[s0]:"AgX",[a0]:"Neutral",[r0]:"Custom"};function Y1(t,e){const n=X1[e];return n===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ko=new k;function q1(){Xe.getLuminanceCoefficients(ko);const t=ko.x.toFixed(4),e=ko.y.toFixed(4),n=ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function K1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Z1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function la(t){return t!==""}function Am(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Q1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qf(t){return t.replace(Q1,j1)}const J1=new Map;function j1(t,e){let n=Be[e];if(n===void 0){const i=J1.get(e);if(i!==void 0)n=Be[i],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Qf(n)}const ew=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cm(t){return t.replace(ew,tw)}function tw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const nw={[Jo]:"SHADOWMAP_TYPE_PCF",[aa]:"SHADOWMAP_TYPE_VSM"};function iw(t){return nw[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const rw={[Fr]:"ENVMAP_TYPE_CUBE",[Ns]:"ENVMAP_TYPE_CUBE",[eu]:"ENVMAP_TYPE_CUBE_UV"};function sw(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":rw[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const aw={[Ns]:"ENVMAP_MODE_REFRACTION"};function ow(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":aw[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const lw={[j_]:"ENVMAP_BLENDING_MULTIPLY",[qS]:"ENVMAP_BLENDING_MIX",[$S]:"ENVMAP_BLENDING_ADD"};function uw(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":lw[t.combine]||"ENVMAP_BLENDING_NONE"}function cw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function fw(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=iw(n),u=sw(n),d=ow(n),h=uw(n),f=cw(n),p=$1(n),x=K1(s),E=r.createProgram();let m,c,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(la).join(`
`),m.length>0&&(m+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(la).join(`
`),c.length>0&&(c+=`
`)):(m=[bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),c=[bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==di?"#define TONE_MAPPING":"",n.toneMapping!==di?Be.tonemapping_pars_fragment:"",n.toneMapping!==di?Y1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,W1("linearToOutputTexel",n.outputColorSpace),q1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(la).join(`
`)),a=Qf(a),a=Am(a,n),a=Rm(a,n),o=Qf(o),o=Am(o,n),o=Rm(o,n),a=Cm(a),o=Cm(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,c=["#define varying in",n.glslVersion===Bp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Bp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const M=g+m+a,S=g+c+o,T=Em(r,r.VERTEX_SHADER,M),w=Em(r,r.FRAGMENT_SHADER,S);r.attachShader(E,T),r.attachShader(E,w),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function R(D){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(E)||"",Y=r.getShaderInfoLog(T)||"",I=r.getShaderInfoLog(w)||"",G=z.trim(),j=Y.trim(),q=I.trim();let F=!0,U=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(F=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,T,w);else{const W=wm(r,T,"vertex"),Z=wm(r,w,"fragment");$e("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+G+`
`+W+`
`+Z)}else G!==""?De("WebGLProgram: Program Info Log:",G):(j===""||q==="")&&(U=!1);U&&(D.diagnostics={runnable:F,programLog:G,vertexShader:{log:j,prefix:m},fragmentShader:{log:q,prefix:c}})}r.deleteShader(T),r.deleteShader(w),v=new il(r,E),A=Z1(r,E)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(E,z1)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=H1++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=T,this.fragmentShader=w,this}let dw=0;class hw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new pw(e),n.set(e,i)),i}}class pw{constructor(e){this.id=dw++,this.code=e,this.usedTimes=0}}function mw(t){return t===Or||t===bl||t===Pl}function gw(t,e,n,i,r,s){const a=new ih,o=new hw,l=new Set,u=[],d=new Map,h=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return l.add(v),v===0?"uv":`uv${v}`}function E(v,A,b,D,z,Y){const I=D.fog,G=z.geometry,j=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,F=e.get(v.envMap||j,q),U=F&&F.mapping===eu?F.image.height:null,W=p[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&De("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const Z=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,de=Z!==void 0?Z.length:0;let ye=0;G.morphAttributes.position!==void 0&&(ye=1),G.morphAttributes.normal!==void 0&&(ye=2),G.morphAttributes.color!==void 0&&(ye=3);let ze,Ue,Fe,B;if(W){const ot=ai[W];ze=ot.vertexShader,Ue=ot.fragmentShader}else{ze=v.vertexShader,Ue=v.fragmentShader;const ot=o.getVertexShaderStage(v),je=o.getFragmentShaderStage(v);o.update(v,ot,je),Fe=ot.id,B=je.id}const K=t.getRenderTarget(),pe=t.state.buffers.depth.getReversed(),Pe=z.isInstancedMesh===!0,ge=z.isBatchedMesh===!0,ke=!!v.map,Pt=!!v.matcap,He=!!F,Ze=!!v.aoMap,at=!!v.lightMap,We=!!v.bumpMap&&v.wireframe===!1,ht=!!v.normalMap,Ut=!!v.displacementMap,un=!!v.emissiveMap,mt=!!v.metalnessMap,Tt=!!v.roughnessMap,N=v.anisotropy>0,Gt=v.clearcoat>0,tt=v.dispersion>0,C=v.retroreflectivity>0,_=v.iridescence>0,O=v.sheen>0,X=v.transmission>0,Q=N&&!!v.anisotropyMap,re=Gt&&!!v.clearcoatMap,se=Gt&&!!v.clearcoatNormalMap,J=Gt&&!!v.clearcoatRoughnessMap,te=_&&!!v.iridescenceMap,ae=_&&!!v.iridescenceThicknessMap,Re=O&&!!v.sheenColorMap,ce=O&&!!v.sheenRoughnessMap,oe=!!v.specularMap,Ce=!!v.specularColorMap,Le=!!v.specularIntensityMap,Ie=X&&!!v.transmissionMap,L=X&&!!v.thicknessMap,le=!!v.gradientMap,ee=!!v.alphaMap,ue=v.alphaTest>0,_e=!!v.alphaHash,ne=!!v.extensions;let be=di;v.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(be=t.toneMapping);const we={shaderID:W,shaderType:v.type,shaderName:v.name,vertexShader:ze,fragmentShader:Ue,defines:v.defines,customVertexShaderID:Fe,customFragmentShaderID:B,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:ge,batchingColor:ge&&z._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&z.instanceColor!==null,instancingMorph:Pe&&z.morphTexture!==null,outputColorSpace:K===null?t.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:ke,matcap:Pt,envMap:He,envMapMode:He&&F.mapping,envMapCubeUVHeight:U,aoMap:Ze,lightMap:at,bumpMap:We,normalMap:ht,displacementMap:Ut,emissiveMap:un,normalMapObjectSpace:ht&&v.normalMapType===QS,normalMapTangentSpace:ht&&v.normalMapType===Op,packedNormalMap:ht&&v.normalMapType===Op&&mw(v.normalMap.format),metalnessMap:mt,roughnessMap:Tt,anisotropy:N,anisotropyMap:Q,clearcoat:Gt,clearcoatMap:re,clearcoatNormalMap:se,clearcoatRoughnessMap:J,dispersion:tt,retroreflection:C,iridescence:_,iridescenceMap:te,iridescenceThicknessMap:ae,sheen:O,sheenColorMap:Re,sheenRoughnessMap:ce,specularMap:oe,specularColorMap:Ce,specularIntensityMap:Le,transmission:X,transmissionMap:Ie,thicknessMap:L,gradientMap:le,opaque:v.transparent===!1&&v.blending===xa&&v.alphaToCoverage===!1,alphaMap:ee,alphaTest:ue,alphaHash:_e,combine:v.combine,mapUv:ke&&x(v.map.channel),aoMapUv:Ze&&x(v.aoMap.channel),lightMapUv:at&&x(v.lightMap.channel),bumpMapUv:We&&x(v.bumpMap.channel),normalMapUv:ht&&x(v.normalMap.channel),displacementMapUv:Ut&&x(v.displacementMap.channel),emissiveMapUv:un&&x(v.emissiveMap.channel),metalnessMapUv:mt&&x(v.metalnessMap.channel),roughnessMapUv:Tt&&x(v.roughnessMap.channel),anisotropyMapUv:Q&&x(v.anisotropyMap.channel),clearcoatMapUv:re&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:se&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:ce&&x(v.sheenRoughnessMap.channel),specularMapUv:oe&&x(v.specularMap.channel),specularColorMapUv:Ce&&x(v.specularColorMap.channel),specularIntensityMapUv:Le&&x(v.specularIntensityMap.channel),transmissionMapUv:Ie&&x(v.transmissionMap.channel),thicknessMapUv:L&&x(v.thicknessMap.channel),alphaMapUv:ee&&x(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ht||N),vertexNormals:!!G.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!G.attributes.uv&&(ke||ee),fog:!!I,useFog:v.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||G.attributes.normal===void 0&&ht===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:pe,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:ye,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&b.length>0,shadowMapType:t.shadowMap.type,toneMapping:be,decodeVideoTexture:ke&&v.map.isVideoTexture===!0&&Xe.getTransfer(v.map.colorSpace)===nt,decodeVideoTextureEmissive:un&&v.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(v.emissiveMap.colorSpace)===nt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===wi,flipSided:v.side===_n,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ne&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&v.extensions.multiDraw===!0||ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function m(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const b in v.defines)A.push(b),A.push(v.defines[b]);return v.isRawShaderMaterial===!1&&(c(A,v),g(A,v),A.push(t.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function c(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numSunLights),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numSunLightShadows),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function g(v,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function M(v){const A=p[v.type];let b;if(A){const D=ai[A];b=Oy.clone(D.uniforms)}else b=v.uniforms;return b}function S(v,A){let b=d.get(A);return b!==void 0?++b.usedTimes:(b=new fw(t,A,v,r),u.push(b),d.set(A,b)),b}function T(v){if(--v.usedTimes===0){const A=u.indexOf(v);u[A]=u[u.length-1],u.pop(),d.delete(v.cacheKey),v.destroy()}}function w(v){o.remove(v)}function R(){o.dispose()}return{getParameters:E,getProgramCacheKey:m,getUniforms:M,acquireProgram:S,releaseProgram:T,releaseShaderCache:w,programs:u,dispose:R}}function _w(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function vw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Pm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Lm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,x,E,m,c){let g=t[e];return g===void 0?(g={id:f.id,object:f,geometry:p,material:x,materialVariant:a(f),groupOrder:E,renderOrder:f.renderOrder,z:m,group:c},t[e]=g):(g.id=f.id,g.object=f,g.geometry=p,g.material=x,g.materialVariant=a(f),g.groupOrder=E,g.renderOrder=f.renderOrder,g.z=m,g.group=c),e++,g}function l(f,p,x,E,m,c,g){g.reversedDepth===!0&&(m=-m);const M=o(f,p,x,E,m,c);x.transmission>0?i.push(M):x.transparent===!0?r.push(M):n.push(M)}function u(f,p,x,E,m,c){const g=o(f,p,x,E,m,c);x.transmission>0?i.unshift(g):x.transparent===!0?r.unshift(g):n.unshift(g)}function d(f,p){n.length>1&&n.sort(f||vw),i.length>1&&i.sort(p||Pm),r.length>1&&r.sort(p||Pm)}function h(){for(let f=e,p=t.length;f<p;f++){const x=t[f];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:h,sort:d}}function xw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Lm,t.set(i,[a])):r>=s.length?(a=new Lm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Sw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new k,color:new Qe};break;case"SpotLight":n={position:new k,direction:new k,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function yw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Mw=0;function Ew(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Tw(t){const e=new Sw,n=yw(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new k);const r=new k,s=new yt,a=new yt;function o(u){let d=0,h=0,f=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let p=0,x=0,E=0,m=0,c=0,g=0,M=0,S=0,T=0,w=0,R=0,v=0,A=0,b=0;u.sort(Ew);for(let z=0,Y=u.length;z<Y;z++){const I=u[z],G=I.color,j=I.intensity,q=I.distance;let F=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Or?F=I.shadow.map.texture:F=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)d+=G.r*j,h+=G.g*j,f+=G.b*j;else if(I.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(I.sh.coefficients[U],j);b++}else if(I.isSunLight){const U=e.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const W=I.shadow,Z=n.get(I);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),i.sunShadow[x]=Z,i.sunShadowMap[x]=F;const de=W.getViewportCount();for(let ye=0;ye<de;ye++)i.sunShadowMatrix[E+ye]=W.getMatrix(ye),i.sunShadowCascade[E+ye]=W._cascadeData[ye];E+=de,x++}i.sun[p]=U,p++}else if(I.isDirectionalLight){const U=e.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const W=I.shadow,Z=n.get(I);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,i.directionalShadow[m]=Z,i.directionalShadowMap[m]=F,i.directionalShadowMatrix[m]=I.shadow.matrix,T++}i.directional[m]=U,m++}else if(I.isSpotLight){const U=e.get(I);U.position.setFromMatrixPosition(I.matrixWorld),U.color.copy(G).multiplyScalar(j),U.distance=q,U.coneCos=Math.cos(I.angle),U.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),U.decay=I.decay,i.spot[g]=U;const W=I.shadow;if(I.map&&(i.spotLightMap[v]=I.map,v++,W.updateMatrices(I),I.castShadow&&A++),i.spotLightMatrix[g]=W.matrix,I.castShadow){const Z=n.get(I);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,i.spotShadow[g]=Z,i.spotShadowMap[g]=F,R++}g++}else if(I.isRectAreaLight){const U=e.get(I);U.color.copy(G).multiplyScalar(j),U.halfWidth.set(I.width*.5,0,0),U.halfHeight.set(0,I.height*.5,0),i.rectArea[M]=U,M++}else if(I.isPointLight){const U=e.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),U.distance=I.distance,U.decay=I.decay,I.castShadow){const W=I.shadow,Z=n.get(I);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,Z.shadowCameraNear=W.camera.near,Z.shadowCameraFar=W.camera.far,i.pointShadow[c]=Z,i.pointShadowMap[c]=F,i.pointShadowMatrix[c]=I.shadow.matrix,w++}i.point[c]=U,c++}else if(I.isHemisphereLight){const U=e.get(I);U.skyColor.copy(I.color).multiplyScalar(j),U.groundColor.copy(I.groundColor).multiplyScalar(j),i.hemi[S]=U,S++}}M>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const D=i.hash;(D.sunLength!==p||D.directionalLength!==m||D.pointLength!==c||D.spotLength!==g||D.rectAreaLength!==M||D.hemiLength!==S||D.numSunShadows!==x||D.numDirectionalShadows!==T||D.numPointShadows!==w||D.numSpotShadows!==R||D.numSpotMaps!==v||D.numLightProbes!==b)&&(i.sun.length=p,i.directional.length=m,i.spot.length=g,i.rectArea.length=M,i.point.length=c,i.hemi.length=S,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=E,i.sunShadowCascade.length=E,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+v-A,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=b,D.sunLength=p,D.directionalLength=m,D.pointLength=c,D.spotLength=g,D.rectAreaLength=M,D.hemiLength=S,D.numSunShadows=x,D.numDirectionalShadows=T,D.numPointShadows=w,D.numSpotShadows=R,D.numSpotMaps=v,D.numLightProbes=b,i.version=Mw++)}function l(u,d){let h=0,f=0,p=0,x=0,E=0,m=0;const c=d.matrixWorldInverse;for(let g=0,M=u.length;g<M;g++){const S=u[g];if(S.isSunLight){const T=i.sun[h];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(c),h++}else if(S.isDirectionalLight){const T=i.directional[f];T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(c),f++}else if(S.isSpotLight){const T=i.spot[x];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(c),T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(c),x++}else if(S.isRectAreaLight){const T=i.rectArea[E];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(c),a.identity(),s.copy(S.matrixWorld),s.premultiply(c),a.extractRotation(s),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),E++}else if(S.isPointLight){const T=i.point[p];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(c),p++}else if(S.isHemisphereLight){const T=i.hemi[m];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(c),m++}}}return{setup:o,setupView:l,state:i}}function Dm(t){const e=new Tw(t),n=[],i=[],r=[];function s(f){h.camera=f,n.length=0,i.length=0,r.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function l(f){r.push(f)}function u(){e.setup(n)}function d(f){e.setupView(n,f)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:u,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function ww(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Dm(t),e.set(r,[o])):s>=a.length?(o=new Dm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const Aw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Cw=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],bw=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Nm=new yt,ta=new k,dc=new k;function Pw(t,e,n){let i=new S0;const r=new Je,s=new Je,a=new St,o=new Hy,l=new Vy,u={},d=n.maxTextureSize,h={[Ur]:_n,[_n]:Ur,[wi]:wi},f=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:Aw,fragmentShader:Rw}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const x=new wn;x.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new mi(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jo;let c=this.type;this.render=function(w,R,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===CS&&(De("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Jo);const A=t.getRenderTarget(),b=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Pi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const Y=c!==this.type;Y&&R.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(G=>G.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,G=w.length;I<G;I++){const j=w[I],q=j.shadow;if(q===void 0){De("WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const F=q.getFrameExtents();r.multiply(F),s.copy(q.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/F.x),r.x=s.x*F.x,q.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/F.y),r.y=s.y*F.y,q.mapSize.y=s.y));const U=t.state.buffers.depth.getReversed();if(q.camera._reversedDepth=U,q.map===null||Y===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===aa){if(j.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Jn(r.x,r.y,{format:Or,type:pi,minFilter:Jt,magFilter:Jt,generateMipmaps:!1}),q.map.texture.name=j.name+".shadowMap",q.map.depthTexture=new za(r.x,r.y,li),q.map.depthTexture.name=j.name+".shadowMapDepth",q.map.depthTexture.format=Oi,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=zt,q.map.depthTexture.magFilter=zt}else j.isPointLight?(q.map=new C0(r.x),q.map.depthTexture=new Uy(r.x,hi)):(q.map=new Jn(r.x,r.y),q.map.depthTexture=new za(r.x,r.y,hi)),q.map.depthTexture.name=j.name+".shadowMap",q.map.depthTexture.format=Oi,this.type===Jo?(q.map.depthTexture.compareFunction=U?th:eh,q.map.depthTexture.minFilter=Jt,q.map.depthTexture.magFilter=Jt):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=zt,q.map.depthTexture.magFilter=zt);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==r.x||q.map.height!==r.y)&&q.map.setSize(r.x,r.y);const W=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();j.isPointLight!==!0&&q.updateMatrices(j,v);for(let Z=0;Z<W;Z++){const de=q.getCamera(Z);if(j.isPointLight){const ye=q.camera,ze=q.matrix,Ue=j.distance||ye.far;Ue!==ye.far&&(ye.far=Ue,ye.updateProjectionMatrix()),ta.setFromMatrixPosition(j.matrixWorld),ye.position.copy(ta),dc.copy(ye.position),dc.add(Cw[Z]),ye.up.copy(bw[Z]),ye.lookAt(dc),ye.updateMatrixWorld(),ze.makeTranslation(-ta.x,-ta.y,-ta.z),Nm.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Nm,ye.coordinateSystem,ye.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)t.setRenderTarget(q.map,Z),t.clear();else{Z===0&&(t.setRenderTarget(q.map),t.clear());const ye=q.getViewport(Z);a.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),z.viewport(a)}i=q.getFrustum(Z),S(R,v,de,j,this.type)}q.isPointLightShadow!==!0&&this.type===aa&&g(q,v),q.needsUpdate=!1}c=this.type,m.needsUpdate=!1,t.setRenderTarget(A,b,D)};function g(w,R){const v=e.update(E);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new Jn(r.x,r.y,{format:Or,type:pi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(R,null,v,f,E,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(R,null,v,p,E,null)}function M(w,R,v,A){let b=null;const D=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)b=D;else if(b=v.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const z=b.uuid,Y=R.uuid;let I=u[z];I===void 0&&(I={},u[z]=I);let G=I[Y];G===void 0&&(G=b.clone(),I[Y]=G,R.addEventListener("dispose",T)),b=G}if(b.visible=R.visible,b.wireframe=R.wireframe,A===aa?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:h[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,v.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const z=t.properties.get(b);z.light=v}return b}function S(w,R,v,A,b){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===aa)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);const Y=e.update(w),I=w.material;if(Array.isArray(I)){const G=Y.groups;for(let j=0,q=G.length;j<q;j++){const F=G[j],U=I[F.materialIndex];if(U&&U.visible){const W=M(w,U,A,b);w.onBeforeShadow(t,w,R,v,Y,W,F),t.renderBufferDirect(v,null,Y,W,w,F),w.onAfterShadow(t,w,R,v,Y,W,F)}}}else if(I.visible){const G=M(w,I,A,b);w.onBeforeShadow(t,w,R,v,Y,G,null),t.renderBufferDirect(v,null,Y,G,w,null),w.onAfterShadow(t,w,R,v,Y,G,null)}}const z=w.children;for(let Y=0,I=z.length;Y<I;Y++)S(z[Y],R,v,A,b)}function T(w){w.target.removeEventListener("dispose",T);for(const v in u){const A=u[v],b=w.target.uuid;b in A&&(A[b].dispose(),delete A[b])}}}function Lw(t,e){function n(){let L=!1;const le=new St;let ee=null;const ue=new St(0,0,0,0);return{setMask:function(_e){ee!==_e&&!L&&(t.colorMask(_e,_e,_e,_e),ee=_e)},setLocked:function(_e){L=_e},setClear:function(_e,ne,be,we,ot){ot===!0&&(_e*=we,ne*=we,be*=we),le.set(_e,ne,be,we),ue.equals(le)===!1&&(t.clearColor(_e,ne,be,we),ue.copy(le))},reset:function(){L=!1,ee=null,ue.set(-1,0,0,0)}}}function i(){let L=!1,le=!1,ee=null,ue=null,_e=null;return{setReversed:function(ne){if(le!==ne){const be=e.get("EXT_clip_control");ne?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),le=ne;const we=_e;_e=null,this.setClear(we)}},getReversed:function(){return le},setTest:function(ne){ne?K(t.DEPTH_TEST):pe(t.DEPTH_TEST)},setMask:function(ne){ee!==ne&&!L&&(t.depthMask(ne),ee=ne)},setFunc:function(ne){if(le&&(ne=uy[ne]),ue!==ne){switch(ne){case lf:t.depthFunc(t.NEVER);break;case uf:t.depthFunc(t.ALWAYS);break;case cf:t.depthFunc(t.LESS);break;case Oa:t.depthFunc(t.LEQUAL);break;case ff:t.depthFunc(t.EQUAL);break;case df:t.depthFunc(t.GEQUAL);break;case hf:t.depthFunc(t.GREATER);break;case pf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ue=ne}},setLocked:function(ne){L=ne},setClear:function(ne){_e!==ne&&(_e=ne,le&&(ne=1-ne),t.clearDepth(ne))},reset:function(){L=!1,ee=null,ue=null,_e=null,le=!1}}}function r(){let L=!1,le=null,ee=null,ue=null,_e=null,ne=null,be=null,we=null,ot=null;return{setTest:function(je){L||(je?K(t.STENCIL_TEST):pe(t.STENCIL_TEST))},setMask:function(je){le!==je&&!L&&(t.stencilMask(je),le=je)},setFunc:function(je,kn,ei){(ee!==je||ue!==kn||_e!==ei)&&(t.stencilFunc(je,kn,ei),ee=je,ue=kn,_e=ei)},setOp:function(je,kn,ei){(ne!==je||be!==kn||we!==ei)&&(t.stencilOp(je,kn,ei),ne=je,be=kn,we=ei)},setLocked:function(je){L=je},setClear:function(je){ot!==je&&(t.clearStencil(je),ot=je)},reset:function(){L=!1,le=null,ee=null,ue=null,_e=null,ne=null,be=null,we=null,ot=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,u=new WeakMap;let d={},h={},f={},p=new WeakMap,x=[],E=null,m=!1,c=null,g=null,M=null,S=null,T=null,w=null,R=null,v=new Qe(0,0,0),A=0,b=!1,D=null,z=null,Y=null,I=null,G=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,F=0;const U=t.getParameter(t.VERSION);U.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(U)[1]),q=F>=1):U.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),q=F>=2);let W=null,Z={};const de=t.getParameter(t.SCISSOR_BOX),ye=t.getParameter(t.VIEWPORT),ze=new St().fromArray(de),Ue=new St().fromArray(ye);function Fe(L,le,ee,ue){const _e=new Uint8Array(4),ne=t.createTexture();t.bindTexture(L,ne),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let be=0;be<ee;be++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(le,0,t.RGBA,1,1,ue,0,t.RGBA,t.UNSIGNED_BYTE,_e):t.texImage2D(le+be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,_e);return ne}const B={};B[t.TEXTURE_2D]=Fe(t.TEXTURE_2D,t.TEXTURE_2D,1),B[t.TEXTURE_CUBE_MAP]=Fe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[t.TEXTURE_2D_ARRAY]=Fe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),B[t.TEXTURE_3D]=Fe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(t.DEPTH_TEST),a.setFunc(Oa),We(!1),ht(Np),K(t.CULL_FACE),Ze(Pi);function K(L){d[L]!==!0&&(t.enable(L),d[L]=!0)}function pe(L){d[L]!==!1&&(t.disable(L),d[L]=!1)}function Pe(L,le){return f[L]!==le?(t.bindFramebuffer(L,le),f[L]=le,L===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=le),L===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=le),!0):!1}function ge(L,le){let ee=x,ue=!1;if(L){ee=p.get(le),ee===void 0&&(ee=[],p.set(le,ee));const _e=L.textures;if(ee.length!==_e.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let ne=0,be=_e.length;ne<be;ne++)ee[ne]=t.COLOR_ATTACHMENT0+ne;ee.length=_e.length,ue=!0}}else ee[0]!==t.BACK&&(ee[0]=t.BACK,ue=!0);ue&&t.drawBuffers(ee)}function ke(L){return E!==L?(t.useProgram(L),E=L,!0):!1}const Pt={[rs]:t.FUNC_ADD,[PS]:t.FUNC_SUBTRACT,[LS]:t.FUNC_REVERSE_SUBTRACT};Pt[DS]=t.MIN,Pt[NS]=t.MAX;const He={[IS]:t.ZERO,[US]:t.ONE,[FS]:t.SRC_COLOR,[Q_]:t.SRC_ALPHA,[VS]:t.SRC_ALPHA_SATURATE,[zS]:t.DST_COLOR,[BS]:t.DST_ALPHA,[OS]:t.ONE_MINUS_SRC_COLOR,[J_]:t.ONE_MINUS_SRC_ALPHA,[HS]:t.ONE_MINUS_DST_COLOR,[kS]:t.ONE_MINUS_DST_ALPHA,[GS]:t.CONSTANT_COLOR,[WS]:t.ONE_MINUS_CONSTANT_COLOR,[XS]:t.CONSTANT_ALPHA,[YS]:t.ONE_MINUS_CONSTANT_ALPHA};function Ze(L,le,ee,ue,_e,ne,be,we,ot,je){if(L===Pi){m===!0&&(pe(t.BLEND),m=!1);return}if(m===!1&&(K(t.BLEND),m=!0),L!==bS){if(L!==c||je!==b){if((g!==rs||T!==rs)&&(t.blendEquation(t.FUNC_ADD),g=rs,T=rs),je)switch(L){case xa:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ip:t.blendFunc(t.ONE,t.ONE);break;case Up:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Fp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:$e("WebGLState: Invalid blending: ",L);break}else switch(L){case xa:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ip:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Up:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fp:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",L);break}M=null,S=null,w=null,R=null,v.set(0,0,0),A=0,c=L,b=je}return}_e=_e||le,ne=ne||ee,be=be||ue,(le!==g||_e!==T)&&(t.blendEquationSeparate(Pt[le],Pt[_e]),g=le,T=_e),(ee!==M||ue!==S||ne!==w||be!==R)&&(t.blendFuncSeparate(He[ee],He[ue],He[ne],He[be]),M=ee,S=ue,w=ne,R=be),(we.equals(v)===!1||ot!==A)&&(t.blendColor(we.r,we.g,we.b,ot),v.copy(we),A=ot),c=L,b=!1}function at(L,le){L.side===wi?pe(t.CULL_FACE):K(t.CULL_FACE);let ee=L.side===_n;le&&(ee=!ee),We(ee),L.blending===xa&&L.transparent===!1?Ze(Pi):Ze(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const ue=L.stencilWrite;o.setTest(ue),ue&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),un(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?K(t.SAMPLE_ALPHA_TO_COVERAGE):pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function We(L){D!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),D=L)}function ht(L){L!==AS?(K(t.CULL_FACE),L!==z&&(L===Np?t.cullFace(t.BACK):L===RS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):pe(t.CULL_FACE),z=L}function Ut(L){L!==Y&&(q&&t.lineWidth(L),Y=L)}function un(L,le,ee){L?(K(t.POLYGON_OFFSET_FILL),(I!==le||G!==ee)&&(I=le,G=ee,a.getReversed()&&(le=-le),t.polygonOffset(le,ee))):pe(t.POLYGON_OFFSET_FILL)}function mt(L){L?K(t.SCISSOR_TEST):pe(t.SCISSOR_TEST)}function Tt(L){L===void 0&&(L=t.TEXTURE0+j-1),W!==L&&(t.activeTexture(L),W=L)}function N(L,le,ee){ee===void 0&&(W===null?ee=t.TEXTURE0+j-1:ee=W);let ue=Z[ee];ue===void 0&&(ue={type:void 0,texture:void 0},Z[ee]=ue),(ue.type!==L||ue.texture!==le)&&(W!==ee&&(t.activeTexture(ee),W=ee),t.bindTexture(L,le||B[L]),ue.type=L,ue.texture=le)}function Gt(){const L=Z[W];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function tt(){try{t.compressedTexImage2D(...arguments)}catch(L){$e("WebGLState:",L)}}function C(){try{t.compressedTexImage3D(...arguments)}catch(L){$e("WebGLState:",L)}}function _(){try{t.texSubImage2D(...arguments)}catch(L){$e("WebGLState:",L)}}function O(){try{t.texSubImage3D(...arguments)}catch(L){$e("WebGLState:",L)}}function X(){try{t.compressedTexSubImage2D(...arguments)}catch(L){$e("WebGLState:",L)}}function Q(){try{t.compressedTexSubImage3D(...arguments)}catch(L){$e("WebGLState:",L)}}function re(){try{t.texStorage2D(...arguments)}catch(L){$e("WebGLState:",L)}}function se(){try{t.texStorage3D(...arguments)}catch(L){$e("WebGLState:",L)}}function J(){try{t.texImage2D(...arguments)}catch(L){$e("WebGLState:",L)}}function te(){try{t.texImage3D(...arguments)}catch(L){$e("WebGLState:",L)}}function ae(L){return h[L]!==void 0?h[L]:t.getParameter(L)}function Re(L,le){h[L]!==le&&(t.pixelStorei(L,le),h[L]=le)}function ce(L){ze.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),ze.copy(L))}function oe(L){Ue.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Ue.copy(L))}function Ce(L,le){let ee=u.get(le);ee===void 0&&(ee=new WeakMap,u.set(le,ee));let ue=ee.get(L);ue===void 0&&(ue=t.getUniformBlockIndex(le,L.name),ee.set(L,ue))}function Le(L,le){const ue=u.get(le).get(L);l.get(le)!==ue&&(t.uniformBlockBinding(le,ue,L.__bindingPointIndex),l.set(le,ue))}function Ie(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},h={},W=null,Z={},f={},p=new WeakMap,x=[],E=null,m=!1,c=null,g=null,M=null,S=null,T=null,w=null,R=null,v=new Qe(0,0,0),A=0,b=!1,D=null,z=null,Y=null,I=null,G=null,ze.set(0,0,t.canvas.width,t.canvas.height),Ue.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:K,disable:pe,bindFramebuffer:Pe,drawBuffers:ge,useProgram:ke,setBlending:Ze,setMaterial:at,setFlipSided:We,setCullFace:ht,setLineWidth:Ut,setPolygonOffset:un,setScissorTest:mt,activeTexture:Tt,bindTexture:N,unbindTexture:Gt,compressedTexImage2D:tt,compressedTexImage3D:C,texImage2D:J,texImage3D:te,pixelStorei:Re,getParameter:ae,updateUBOMapping:Ce,uniformBlockBinding:Le,texStorage2D:re,texStorage3D:se,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:X,compressedTexSubImage3D:Q,scissor:ce,viewport:oe,reset:Ie}}function Dw(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Je,d=new WeakMap,h=new Set;let f;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(C,_){return x?new OffscreenCanvas(C,_):Il("canvas")}function m(C,_,O){let X=1;const Q=tt(C);if((Q.width>O||Q.height>O)&&(X=O/Math.max(Q.width,Q.height)),X<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const re=Math.floor(X*Q.width),se=Math.floor(X*Q.height);f===void 0&&(f=E(re,se));const J=_?E(re,se):f;return J.width=re,J.height=se,J.getContext("2d").drawImage(C,0,0,re,se),De("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+re+"x"+se+")."),J}else return"data"in C&&De("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function c(C){return C.generateMipmaps}function g(C){t.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(C,_,O,X,Q,re=!1){if(C!==null){if(t[C]!==void 0)return t[C];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let se;X&&(se=e.get("EXT_texture_norm16"),se||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=_;if(_===t.RED&&(O===t.FLOAT&&(J=t.R32F),O===t.HALF_FLOAT&&(J=t.R16F),O===t.UNSIGNED_BYTE&&(J=t.R8),O===t.UNSIGNED_SHORT&&se&&(J=se.R16_EXT),O===t.SHORT&&se&&(J=se.R16_SNORM_EXT)),_===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(J=t.R8UI),O===t.UNSIGNED_SHORT&&(J=t.R16UI),O===t.UNSIGNED_INT&&(J=t.R32UI),O===t.BYTE&&(J=t.R8I),O===t.SHORT&&(J=t.R16I),O===t.INT&&(J=t.R32I)),_===t.RG&&(O===t.FLOAT&&(J=t.RG32F),O===t.HALF_FLOAT&&(J=t.RG16F),O===t.UNSIGNED_BYTE&&(J=t.RG8),O===t.UNSIGNED_SHORT&&se&&(J=se.RG16_EXT),O===t.SHORT&&se&&(J=se.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(J=t.RG8UI),O===t.UNSIGNED_SHORT&&(J=t.RG16UI),O===t.UNSIGNED_INT&&(J=t.RG32UI),O===t.BYTE&&(J=t.RG8I),O===t.SHORT&&(J=t.RG16I),O===t.INT&&(J=t.RG32I)),_===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(J=t.RGB8UI),O===t.UNSIGNED_SHORT&&(J=t.RGB16UI),O===t.UNSIGNED_INT&&(J=t.RGB32UI),O===t.BYTE&&(J=t.RGB8I),O===t.SHORT&&(J=t.RGB16I),O===t.INT&&(J=t.RGB32I)),_===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),O===t.UNSIGNED_INT&&(J=t.RGBA32UI),O===t.BYTE&&(J=t.RGBA8I),O===t.SHORT&&(J=t.RGBA16I),O===t.INT&&(J=t.RGBA32I)),_===t.RGB&&(O===t.UNSIGNED_SHORT&&se&&(J=se.RGB16_EXT),O===t.SHORT&&se&&(J=se.RGB16_SNORM_EXT),O===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),O===t.UNSIGNED_INT_10F_11F_11F_REV&&(J=t.R11F_G11F_B10F)),_===t.RGBA){const te=re?Dl:Xe.getTransfer(Q);O===t.FLOAT&&(J=t.RGBA32F),O===t.HALF_FLOAT&&(J=t.RGBA16F),O===t.UNSIGNED_BYTE&&(J=te===nt?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT&&se&&(J=se.RGBA16_EXT),O===t.SHORT&&se&&(J=se.RGBA16_SNORM_EXT),O===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function T(C,_){let O;return C?_===null||_===hi||_===ka?O=t.DEPTH24_STENCIL8:_===li?O=t.DEPTH32F_STENCIL8:_===Ba&&(O=t.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===hi||_===ka?O=t.DEPTH_COMPONENT24:_===li?O=t.DEPTH_COMPONENT32F:_===Ba&&(O=t.DEPTH_COMPONENT16),O}function w(C,_){return c(C)===!0||C.isFramebufferTexture&&C.minFilter!==zt&&C.minFilter!==Jt?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function R(C){const _=C.target;_.removeEventListener("dispose",R),A(_),_.isVideoTexture&&d.delete(_),_.isHTMLTexture&&h.delete(_)}function v(C){const _=C.target;_.removeEventListener("dispose",v),D(_)}function A(C){const _=i.get(C);if(_.__webglInit===void 0)return;const O=C.source,X=p.get(O);if(X){const Q=X[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(C),Object.keys(X).length===0&&p.delete(O)}i.remove(C)}function b(C){const _=i.get(C);t.deleteTexture(_.__webglTexture);const O=C.source,X=p.get(O);delete X[_.__cacheKey],a.memory.textures--}function D(C){const _=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let Q=0;Q<_.__webglFramebuffer[X].length;Q++)t.deleteFramebuffer(_.__webglFramebuffer[X][Q]);else t.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)t.deleteFramebuffer(_.__webglFramebuffer[X]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=C.textures;for(let X=0,Q=O.length;X<Q;X++){const re=i.get(O[X]);re.__webglTexture&&(t.deleteTexture(re.__webglTexture),a.memory.textures--),i.remove(O[X])}i.remove(C)}let z=0;function Y(){z=0}function I(){return z}function G(C){z=C}function j(){const C=z;return C>=r.maxTextures&&De("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+r.maxTextures),z+=1,C}function q(C){const _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function F(C,_){const O=i.get(C);if(C.isVideoTexture&&N(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){const X=C.image;if(X===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{pe(O,C,_);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+_)}function U(C,_){const O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){pe(O,C,_);return}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+_)}function W(C,_){const O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){pe(O,C,_);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+_)}function Z(C,_){const O=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&O.__version!==C.version){Pe(O,C,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+_)}const de={[mf]:t.REPEAT,[Ci]:t.CLAMP_TO_EDGE,[gf]:t.MIRRORED_REPEAT},ye={[zt]:t.NEAREST,[KS]:t.NEAREST_MIPMAP_NEAREST,[go]:t.NEAREST_MIPMAP_LINEAR,[Jt]:t.LINEAR,[Fu]:t.LINEAR_MIPMAP_NEAREST,[wr]:t.LINEAR_MIPMAP_LINEAR},ze={[jS]:t.NEVER,[ry]:t.ALWAYS,[ey]:t.LESS,[eh]:t.LEQUAL,[ty]:t.EQUAL,[th]:t.GEQUAL,[ny]:t.GREATER,[iy]:t.NOTEQUAL};function Ue(C,_){if(_.type===li&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Jt||_.magFilter===Fu||_.magFilter===go||_.magFilter===wr||_.minFilter===Jt||_.minFilter===Fu||_.minFilter===go||_.minFilter===wr)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,de[_.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,de[_.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,de[_.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,ye[_.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,ye[_.minFilter]),_.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,ze[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===zt||_.minFilter!==go&&_.minFilter!==wr||_.type===li&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Fe(C,_){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",R));const X=_.source;let Q=p.get(X);Q===void 0&&(Q={},p.set(X,Q));const re=q(_);if(re!==C.__cacheKey){Q[re]===void 0&&(Q[re]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Q[re].usedTimes++;const se=Q[C.__cacheKey];se!==void 0&&(Q[C.__cacheKey].usedTimes--,se.usedTimes===0&&b(_)),C.__cacheKey=re,C.__webglTexture=Q[re].texture}return O}function B(C,_,O){return Math.floor(Math.floor(C/O)/_)}function K(C,_,O,X){const re=C.updateRanges;if(re.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,O,X,_.data);else{re.sort((Re,ce)=>Re.start-ce.start);let se=0;for(let Re=1;Re<re.length;Re++){const ce=re[se],oe=re[Re],Ce=ce.start+ce.count,Le=B(oe.start,_.width,4),Ie=B(ce.start,_.width,4);oe.start<=Ce+1&&Le===Ie&&B(oe.start+oe.count-1,_.width,4)===Le?ce.count=Math.max(ce.count,oe.start+oe.count-ce.start):(++se,re[se]=oe)}re.length=se+1;const J=n.getParameter(t.UNPACK_ROW_LENGTH),te=n.getParameter(t.UNPACK_SKIP_PIXELS),ae=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let Re=0,ce=re.length;Re<ce;Re++){const oe=re[Re],Ce=Math.floor(oe.start/4),Le=Math.ceil(oe.count/4),Ie=Ce%_.width,L=Math.floor(Ce/_.width),le=Le,ee=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ie),n.pixelStorei(t.UNPACK_SKIP_ROWS,L),n.texSubImage2D(t.TEXTURE_2D,0,Ie,L,le,ee,O,X,_.data)}C.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,J),n.pixelStorei(t.UNPACK_SKIP_PIXELS,te),n.pixelStorei(t.UNPACK_SKIP_ROWS,ae)}}function pe(C,_,O){let X=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=t.TEXTURE_3D);const Q=Fe(C,_),re=_.source;n.bindTexture(X,C.__webglTexture,t.TEXTURE0+O);const se=i.get(re);if(re.version!==se.__version||Q===!0){if(n.activeTexture(t.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const ee=Xe.getPrimaries(Xe.workingColorSpace),ue=_.colorSpace===Ji?null:Xe.getPrimaries(_.colorSpace),_e=_.colorSpace===Ji||ee===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let te=m(_.image,!1,r.maxTextureSize);te=Gt(_,te);const ae=s.convert(_.format,_.colorSpace),Re=s.convert(_.type);let ce=S(_.internalFormat,ae,Re,_.normalized,_.colorSpace,_.isVideoTexture);Ue(X,_);let oe;const Ce=_.mipmaps,Le=_.isVideoTexture!==!0,Ie=se.__version===void 0||Q===!0,L=re.dataReady,le=w(_,te);if(_.isDepthTexture)ce=T(_.format===Ar,_.type),Ie&&(Le?n.texStorage2D(t.TEXTURE_2D,1,ce,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,ce,te.width,te.height,0,ae,Re,null));else if(_.isDataTexture)if(Ce.length>0){Le&&Ie&&n.texStorage2D(t.TEXTURE_2D,le,ce,Ce[0].width,Ce[0].height);for(let ee=0,ue=Ce.length;ee<ue;ee++)oe=Ce[ee],Le?L&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,oe.width,oe.height,ae,Re,oe.data):n.texImage2D(t.TEXTURE_2D,ee,ce,oe.width,oe.height,0,ae,Re,oe.data);_.generateMipmaps=!1}else Le?(Ie&&n.texStorage2D(t.TEXTURE_2D,le,ce,te.width,te.height),L&&K(_,te,ae,Re)):n.texImage2D(t.TEXTURE_2D,0,ce,te.width,te.height,0,ae,Re,te.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Le&&Ie&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,ce,Ce[0].width,Ce[0].height,te.depth);for(let ee=0,ue=Ce.length;ee<ue;ee++)if(oe=Ce[ee],_.format!==Kn)if(ae!==null)if(Le){if(L)if(_.layerUpdates.size>0){const _e=fm(oe.width,oe.height,_.format,_.type);for(const ne of _.layerUpdates){const be=oe.data.subarray(ne*_e/oe.data.BYTES_PER_ELEMENT,(ne+1)*_e/oe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,ne,oe.width,oe.height,1,ae,be)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,oe.width,oe.height,te.depth,ae,oe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ee,ce,oe.width,oe.height,te.depth,0,oe.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,oe.width,oe.height,te.depth,ae,Re,oe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ee,ce,oe.width,oe.height,te.depth,0,ae,Re,oe.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Le&&Ie&&n.texStorage2D(t.TEXTURE_2D,le,ce,Ce[0].width,Ce[0].height);for(let ee=0,ue=Ce.length;ee<ue;ee++)oe=Ce[ee],_.format!==Kn?ae!==null?Le?L&&n.compressedTexSubImage2D(t.TEXTURE_2D,ee,0,0,oe.width,oe.height,ae,oe.data):n.compressedTexImage2D(t.TEXTURE_2D,ee,ce,oe.width,oe.height,0,oe.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?L&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,oe.width,oe.height,ae,Re,oe.data):n.texImage2D(t.TEXTURE_2D,ee,ce,oe.width,oe.height,0,ae,Re,oe.data)}else if(_.isDataArrayTexture)if(Le){if(Ie&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,ce,te.width,te.height,te.depth),L)if(_.layerUpdates.size>0){const ee=fm(te.width,te.height,_.format,_.type);for(const ue of _.layerUpdates){const _e=te.data.subarray(ue*ee/te.data.BYTES_PER_ELEMENT,(ue+1)*ee/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ue,te.width,te.height,1,ae,Re,_e)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ae,Re,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ce,te.width,te.height,te.depth,0,ae,Re,te.data);else if(_.isData3DTexture)Le?(Ie&&n.texStorage3D(t.TEXTURE_3D,le,ce,te.width,te.height,te.depth),L&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ae,Re,te.data)):n.texImage3D(t.TEXTURE_3D,0,ce,te.width,te.height,te.depth,0,ae,Re,te.data);else if(_.isFramebufferTexture){if(Ie)if(Le)n.texStorage2D(t.TEXTURE_2D,le,ce,te.width,te.height);else{let ee=te.width,ue=te.height;for(let _e=0;_e<le;_e++)n.texImage2D(t.TEXTURE_2D,_e,ce,ee,ue,0,ae,Re,null),ee>>=1,ue>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){const ee=t.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),te.parentNode!==ee){ee.appendChild(te),h.add(_),ee.onpaint=ue=>{const _e=ue.changedElements;for(const ne of h)_e.includes(ne.image)&&(ne.needsUpdate=!0)},ee.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,te);else{const _e=t.RGBA,ne=t.RGBA,be=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,_e,ne,be,te)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(Le&&Ie){const ee=tt(Ce[0]);n.texStorage2D(t.TEXTURE_2D,le,ce,ee.width,ee.height)}for(let ee=0,ue=Ce.length;ee<ue;ee++)oe=Ce[ee],Le?L&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,ae,Re,oe):n.texImage2D(t.TEXTURE_2D,ee,ce,ae,Re,oe);_.generateMipmaps=!1}else if(Le){if(Ie){const ee=tt(te);n.texStorage2D(t.TEXTURE_2D,le,ce,ee.width,ee.height)}L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae,Re,te)}else n.texImage2D(t.TEXTURE_2D,0,ce,ae,Re,te);c(_)&&g(X),se.__version=re.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function Pe(C,_,O){if(_.image.length!==6)return;const X=Fe(C,_),Q=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+O);const re=i.get(Q);if(Q.version!==re.__version||X===!0){n.activeTexture(t.TEXTURE0+O);const se=Xe.getPrimaries(Xe.workingColorSpace),J=_.colorSpace===Ji?null:Xe.getPrimaries(_.colorSpace),te=_.colorSpace===Ji||se===J?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const ae=_.isCompressedTexture||_.image[0].isCompressedTexture,Re=_.image[0]&&_.image[0].isDataTexture,ce=[];for(let ne=0;ne<6;ne++)!ae&&!Re?ce[ne]=m(_.image[ne],!0,r.maxCubemapSize):ce[ne]=Re?_.image[ne].image:_.image[ne],ce[ne]=Gt(_,ce[ne]);const oe=ce[0],Ce=s.convert(_.format,_.colorSpace),Le=s.convert(_.type),Ie=S(_.internalFormat,Ce,Le,_.normalized,_.colorSpace),L=_.isVideoTexture!==!0,le=re.__version===void 0||X===!0,ee=Q.dataReady;let ue=w(_,oe);Ue(t.TEXTURE_CUBE_MAP,_);let _e;if(ae){L&&le&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,Ie,oe.width,oe.height);for(let ne=0;ne<6;ne++){_e=ce[ne].mipmaps;for(let be=0;be<_e.length;be++){const we=_e[be];_.format!==Kn?Ce!==null?L?ee&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be,0,0,we.width,we.height,Ce,we.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be,Ie,we.width,we.height,0,we.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be,0,0,we.width,we.height,Ce,Le,we.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be,Ie,we.width,we.height,0,Ce,Le,we.data)}}}else{if(_e=_.mipmaps,L&&le){_e.length>0&&ue++;const ne=tt(ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,Ie,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Re){L?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ce[ne].width,ce[ne].height,Ce,Le,ce[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ie,ce[ne].width,ce[ne].height,0,Ce,Le,ce[ne].data);for(let be=0;be<_e.length;be++){const ot=_e[be].image[ne].image;L?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be+1,0,0,ot.width,ot.height,Ce,Le,ot.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be+1,Ie,ot.width,ot.height,0,Ce,Le,ot.data)}}else{L?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ce,Le,ce[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ie,Ce,Le,ce[ne]);for(let be=0;be<_e.length;be++){const we=_e[be];L?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be+1,0,0,Ce,Le,we.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be+1,Ie,Ce,Le,we.image[ne])}}}c(_)&&g(t.TEXTURE_CUBE_MAP),re.__version=Q.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function ge(C,_,O,X,Q,re){const se=s.convert(O.format,O.colorSpace),J=s.convert(O.type),te=S(O.internalFormat,se,J,O.normalized,O.colorSpace),ae=i.get(_),Re=i.get(O);if(Re.__renderTarget=_,!ae.__hasExternalTextures){const ce=Math.max(1,_.width>>re),oe=Math.max(1,_.height>>re);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,re,te,ce,oe,_.depth,0,se,J,null):n.texImage2D(Q,re,te,ce,oe,0,se,J,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Tt(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,X,Q,Re.__webglTexture,0,mt(_)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,X,Q,Re.__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ke(C,_,O){if(t.bindRenderbuffer(t.RENDERBUFFER,C),_.depthBuffer){const X=_.depthTexture,Q=X&&X.isDepthTexture?X.type:null,re=T(_.stencilBuffer,Q),se=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Tt(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,mt(_),re,_.width,_.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,mt(_),re,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,re,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,C)}else{const X=_.textures;for(let Q=0;Q<X.length;Q++){const re=X[Q],se=s.convert(re.format,re.colorSpace),J=s.convert(re.type),te=S(re.internalFormat,se,J,re.normalized,re.colorSpace);Tt(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,mt(_),te,_.width,_.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,mt(_),te,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,te,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Pt(C,_,O){const X=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(_.depthTexture);if(Q.__renderTarget=_,(!Q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),Q.__webglTexture===void 0){Q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),Ue(t.TEXTURE_CUBE_MAP,_.depthTexture);const ae=s.convert(_.depthTexture.format),Re=s.convert(_.depthTexture.type);let ce;_.depthTexture.format===Oi?ce=t.DEPTH_COMPONENT24:_.depthTexture.format===Ar&&(ce=t.DEPTH24_STENCIL8);for(let oe=0;oe<6;oe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ce,_.width,_.height,0,ae,Re,null)}}else F(_.depthTexture,0);const re=Q.__webglTexture,se=mt(_),J=X?t.TEXTURE_CUBE_MAP_POSITIVE_X+O:t.TEXTURE_2D,te=_.depthTexture.format===Ar?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===Oi)Tt(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,J,re,0,se):t.framebufferTexture2D(t.FRAMEBUFFER,te,J,re,0);else if(_.depthTexture.format===Ar)Tt(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,J,re,0,se):t.framebufferTexture2D(t.FRAMEBUFFER,te,J,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function He(C){const _=i.get(C),O=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){const X=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){const Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",Q)};X.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=X}if(C.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let X=0;X<6;X++)Pt(_.__webglFramebuffer[X],C,X);else{const X=C.texture.mipmaps;X&&X.length>0?Pt(_.__webglFramebuffer[0],C,0):Pt(_.__webglFramebuffer,C,0)}else if(O){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=t.createRenderbuffer(),ke(_.__webglDepthbuffer[X],C,!1);else{const Q=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=_.__webglDepthbuffer[X];t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,re)}}else{const X=C.texture.mipmaps;if(X&&X.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),ke(_.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,re)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ze(C,_,O){const X=i.get(C);_!==void 0&&ge(X.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&He(C)}function at(C){const _=C.texture,O=i.get(C),X=i.get(_);C.addEventListener("dispose",v);const Q=C.textures,re=C.isWebGLCubeRenderTarget===!0,se=Q.length>1;if(se||(X.__webglTexture===void 0&&(X.__webglTexture=t.createTexture()),X.__version=_.version,a.memory.textures++),re){O.__webglFramebuffer=[];for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[J]=[];for(let te=0;te<_.mipmaps.length;te++)O.__webglFramebuffer[J][te]=t.createFramebuffer()}else O.__webglFramebuffer[J]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let J=0;J<_.mipmaps.length;J++)O.__webglFramebuffer[J]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(se)for(let J=0,te=Q.length;J<te;J++){const ae=i.get(Q[J]);ae.__webglTexture===void 0&&(ae.__webglTexture=t.createTexture(),a.memory.textures++)}if(C.samples>0&&Tt(C)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let J=0;J<Q.length;J++){const te=Q[J];O.__webglColorRenderbuffer[J]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[J]);const ae=s.convert(te.format,te.colorSpace),Re=s.convert(te.type),ce=S(te.internalFormat,ae,Re,te.normalized,te.colorSpace,C.isXRRenderTarget===!0),oe=mt(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,ce,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+J,t.RENDERBUFFER,O.__webglColorRenderbuffer[J])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),ke(O.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture),Ue(t.TEXTURE_CUBE_MAP,_);for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0)for(let te=0;te<_.mipmaps.length;te++)ge(O.__webglFramebuffer[J][te],C,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,te);else ge(O.__webglFramebuffer[J],C,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);c(_)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(se){for(let J=0,te=Q.length;J<te;J++){const ae=Q[J],Re=i.get(ae);let ce=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ce=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,Re.__webglTexture),Ue(ce,ae),ge(O.__webglFramebuffer,C,ae,t.COLOR_ATTACHMENT0+J,ce,0),c(ae)&&g(ce)}n.unbindTexture()}else{let J=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(J,X.__webglTexture),Ue(J,_),_.mipmaps&&_.mipmaps.length>0)for(let te=0;te<_.mipmaps.length;te++)ge(O.__webglFramebuffer[te],C,_,t.COLOR_ATTACHMENT0,J,te);else ge(O.__webglFramebuffer,C,_,t.COLOR_ATTACHMENT0,J,0);c(_)&&g(J),n.unbindTexture()}C.depthBuffer&&He(C)}function We(C){const _=C.textures;for(let O=0,X=_.length;O<X;O++){const Q=_[O];if(c(Q)){const re=M(C),se=i.get(Q).__webglTexture;n.bindTexture(re,se),g(re),n.unbindTexture()}}}const ht=[],Ut=[];function un(C){if(C.samples>0){if(Tt(C)===!1){const _=C.textures,O=C.width,X=C.height;let Q=t.COLOR_BUFFER_BIT;const re=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=i.get(C),J=_.length>1;if(J)for(let ae=0;ae<_.length;ae++)n.bindFramebuffer(t.FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);const te=C.texture.mipmaps;te&&te.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let ae=0;ae<_.length;ae++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),J){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,se.__webglColorRenderbuffer[ae]);const Re=i.get(_[ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Re,0)}t.blitFramebuffer(0,0,O,X,0,0,O,X,Q,t.NEAREST),l===!0&&(ht.length=0,Ut.length=0,ht.push(t.COLOR_ATTACHMENT0+ae),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(ht.push(re),Ut.push(re),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ut)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ht))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),J)for(let ae=0;ae<_.length;ae++){n.bindFramebuffer(t.FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,se.__webglColorRenderbuffer[ae]);const Re=i.get(_[ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,Re,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const _=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function mt(C){return Math.min(r.maxSamples,C.samples)}function Tt(C){const _=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function N(C){const _=a.render.frame;d.get(C)!==_&&(d.set(C,_),C.update())}function Gt(C,_){const O=C.colorSpace,X=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==Ll&&O!==Ji&&(Xe.getTransfer(O)===nt?(X!==Kn||Q!==In)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",O)),_}function tt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=j,this.resetTextureUnits=Y,this.getTextureUnits=I,this.setTextureUnits=G,this.setTexture2D=F,this.setTexture2DArray=U,this.setTexture3D=W,this.setTextureCube=Z,this.rebindTextures=Ze,this.setupRenderTarget=at,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=un,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Tt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Nw(t,e){function n(i,r=Ji){let s;const a=Xe.getTransfer(r);if(i===In)return t.UNSIGNED_BYTE;if(i===Kd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Zd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===c0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===f0)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===l0)return t.BYTE;if(i===u0)return t.SHORT;if(i===Ba)return t.UNSIGNED_SHORT;if(i===$d)return t.INT;if(i===hi)return t.UNSIGNED_INT;if(i===li)return t.FLOAT;if(i===pi)return t.HALF_FLOAT;if(i===d0)return t.ALPHA;if(i===h0)return t.RGB;if(i===Kn)return t.RGBA;if(i===Oi)return t.DEPTH_COMPONENT;if(i===Ar)return t.DEPTH_STENCIL;if(i===p0)return t.RED;if(i===Qd)return t.RED_INTEGER;if(i===Or)return t.RG;if(i===Jd)return t.RG_INTEGER;if(i===jd)return t.RGBA_INTEGER;if(i===jo||i===el||i===tl||i===nl)if(a===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===jo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===el)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===jo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===el)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===tl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===nl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_f||i===vf||i===xf||i===Sf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===_f)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yf||i===Mf||i===Ef||i===Tf||i===wf||i===bl||i===Af)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===yf||i===Mf)return a===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ef)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Tf)return s.COMPRESSED_R11_EAC;if(i===wf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===bl)return s.COMPRESSED_RG11_EAC;if(i===Af)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Rf||i===Cf||i===bf||i===Pf||i===Lf||i===Df||i===Nf||i===If||i===Uf||i===Ff||i===Of||i===Bf||i===kf||i===zf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Rf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Cf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Lf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Df)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===If)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Uf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ff)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Of)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Hf||i===Vf||i===Gf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Hf)return a===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wf||i===Xf||i===Pl||i===Yf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Wf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Xf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ka?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const Iw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Uw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Fw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new E0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new gi({vertexShader:Iw,fragmentShader:Uw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new mi(new nu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ow extends Hr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,d=null,h=null,f=null,p=null,x=null;const E=typeof XRWebGLBinding<"u",m=new Fw,c={},g=n.getContextAttributes();let M=null,S=null;const T=[],w=[],R=new Je;let v=null,A=null;const b=new qn;b.viewport=new St;const D=new qn;D.viewport=new St;const z=[b,D],Y=new Wy;let I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let K=T[B];return K===void 0&&(K=new Xu,T[B]=K),K.getTargetRaySpace()},this.getControllerGrip=function(B){let K=T[B];return K===void 0&&(K=new Xu,T[B]=K),K.getGripSpace()},this.getHand=function(B){let K=T[B];return K===void 0&&(K=new Xu,T[B]=K),K.getHandSpace()};function j(B){const K=w.indexOf(B.inputSource);if(K===-1)return;const pe=T[K];pe!==void 0&&(pe.update(B.inputSource,B.frame,u||a),pe.dispatchEvent({type:B.type,data:B.inputSource}))}function q(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",F);for(let B=0;B<T.length;B++){const K=w[B];K!==null&&(w[B]=null,T[B].disconnect(K))}I=null,G=null,m.reset();for(const B in c)delete c[B];if(e.setRenderTarget(M),p=null,f=null,h=null,r=null,S=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(R.width,R.height,!1),A!==null){const B=A.camera;B.fov=A.fov,B.zoom=A.zoom,B.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,i.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(B){u=B},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&E&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",q),r.addEventListener("inputsourceschange",F),g.xrCompatible!==!0&&await n.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(R),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Pe=null,ge=null;g.depth&&(ge=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,pe=g.stencil?Ar:Oi,Pe=g.stencil?ka:hi);const ke={colorFormat:n.RGBA8,depthFormat:ge,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(ke),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Jn(f.textureWidth,f.textureHeight,{format:Kn,type:In,depthTexture:new za(f.textureWidth,f.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const pe={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,pe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Jn(p.framebufferWidth,p.framebufferHeight,{format:Kn,type:In,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function F(B){for(let K=0;K<B.removed.length;K++){const pe=B.removed[K],Pe=w.indexOf(pe);Pe>=0&&(w[Pe]=null,T[Pe].disconnect(pe))}for(let K=0;K<B.added.length;K++){const pe=B.added[K];let Pe=w.indexOf(pe);if(Pe===-1){for(let ke=0;ke<T.length;ke++)if(ke>=w.length){w.push(pe),Pe=ke;break}else if(w[ke]===null){w[ke]=pe,Pe=ke;break}if(Pe===-1)break}const ge=T[Pe];ge&&ge.connect(pe)}}const U=new k,W=new k;function Z(B,K,pe){U.setFromMatrixPosition(K.matrixWorld),W.setFromMatrixPosition(pe.matrixWorld);const Pe=U.distanceTo(W),ge=K.projectionMatrix.elements,ke=pe.projectionMatrix.elements,Pt=ge[14]/(ge[10]-1),He=ge[14]/(ge[10]+1),Ze=(ge[9]+1)/ge[5],at=(ge[9]-1)/ge[5],We=(ge[8]-1)/ge[0],ht=(ke[8]+1)/ke[0],Ut=Pt*We,un=Pt*ht,mt=Pe/(-We+ht),Tt=mt*-We;if(K.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Tt),B.translateZ(mt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),ge[10]===-1)B.projectionMatrix.copy(K.projectionMatrix),B.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const N=Pt+mt,Gt=He+mt,tt=Ut-Tt,C=un+(Pe-Tt),_=Ze*He/Gt*N,O=at*He/Gt*N;B.projectionMatrix.makePerspective(tt,C,_,O,N,Gt),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function de(B,K){K===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(K.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;let K=B.near,pe=B.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(pe=m.depthFar)),Y.near=D.near=b.near=K,Y.far=D.far=b.far=pe,(I!==Y.near||G!==Y.far)&&(r.updateRenderState({depthNear:Y.near,depthFar:Y.far}),I=Y.near,G=Y.far),Y.layers.mask=B.layers.mask|6,b.layers.mask=Y.layers.mask&-5,D.layers.mask=Y.layers.mask&-3;const Pe=B.parent,ge=Y.cameras;de(Y,Pe);for(let ke=0;ke<ge.length;ke++)de(ge[ke],Pe);ge.length===2?Z(Y,b,D):Y.projectionMatrix.copy(b.projectionMatrix),A===null&&B.isPerspectiveCamera&&(A={camera:B,fov:B.fov,zoom:B.zoom}),ye(B,Y,Pe)};function ye(B,K,pe){pe===null?B.matrix.copy(K.matrixWorld):(B.matrix.copy(pe.matrixWorld),B.matrix.invert(),B.matrix.multiply(K.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(K.projectionMatrix),B.projectionMatrixInverse.copy(K.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=qf*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(B){l=B,f!==null&&(f.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Y)},this.getCameraTexture=function(B){return c[B]};let ze=null;function Ue(B,K){if(d=K.getViewerPose(u||a),x=K,d!==null){const pe=d.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Pe=!1;pe.length!==Y.cameras.length&&(Y.cameras.length=0,Pe=!0);for(let He=0;He<pe.length;He++){const Ze=pe[He];let at=null;if(p!==null)at=p.getViewport(Ze);else{const ht=h.getViewSubImage(f,Ze);at=ht.viewport,He===0&&(e.setRenderTargetTextures(S,ht.colorTexture,ht.depthStencilTexture),e.setRenderTarget(S))}let We=z[He];We===void 0&&(We=new qn,We.layers.enable(He),We.viewport=new St,z[He]=We),We.matrix.fromArray(Ze.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Ze.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(at.x,at.y,at.width,at.height),He===0&&(Y.matrix.copy(We.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Pe===!0&&Y.cameras.push(We)}const ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){h=i.getBinding();const He=h.getDepthInformation(pe[0]);He&&He.isValid&&He.texture&&m.init(He,r.renderState)}if(ge&&ge.includes("camera-access")&&E){e.state.unbindTexture(),h=i.getBinding();for(let He=0;He<pe.length;He++){const Ze=pe[He].camera;if(Ze){let at=c[Ze];at||(at=new E0,c[Ze]=at);const We=h.getCameraImage(Ze);at.sourceTexture=We}}}}for(let pe=0;pe<T.length;pe++){const Pe=w[pe],ge=T[pe];Pe!==null&&ge!==void 0&&ge.update(Pe,K,u||a)}ze&&ze(B,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),x=null}const Fe=new A0;Fe.setAnimationLoop(Ue),this.setAnimationLoop=function(B){ze=B},this.dispose=function(){}}}const Bw=new yt,N0=new Ne;N0.set(-1,0,0,0,1,0,0,0,1);function kw(t,e){function n(m,c){m.matrixAutoUpdate===!0&&m.updateMatrix(),c.value.copy(m.matrix)}function i(m,c){c.color.getRGB(m.fogColor.value,T0(t)),c.isFog?(m.fogNear.value=c.near,m.fogFar.value=c.far):c.isFogExp2&&(m.fogDensity.value=c.density)}function r(m,c,g,M,S){c.isNodeMaterial?c.uniformsNeedUpdate=!1:c.isMeshBasicMaterial?s(m,c):c.isMeshLambertMaterial?(s(m,c),c.envMap&&(m.envMapIntensity.value=c.envMapIntensity)):c.isMeshToonMaterial?(s(m,c),h(m,c)):c.isMeshPhongMaterial?(s(m,c),d(m,c),c.envMap&&(m.envMapIntensity.value=c.envMapIntensity)):c.isMeshStandardMaterial?(s(m,c),f(m,c),c.isMeshPhysicalMaterial&&p(m,c,S)):c.isMeshMatcapMaterial?(s(m,c),x(m,c)):c.isMeshDepthMaterial?s(m,c):c.isMeshDistanceMaterial?(s(m,c),E(m,c)):c.isMeshNormalMaterial?s(m,c):c.isLineBasicMaterial?(a(m,c),c.isLineDashedMaterial&&o(m,c)):c.isPointsMaterial?l(m,c,g,M):c.isSpriteMaterial?u(m,c):c.isShadowMaterial?(m.color.value.copy(c.color),m.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(m,c){m.opacity.value=c.opacity,c.color&&m.diffuse.value.copy(c.color),c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.bumpMap&&(m.bumpMap.value=c.bumpMap,n(c.bumpMap,m.bumpMapTransform),m.bumpScale.value=c.bumpScale,c.side===_n&&(m.bumpScale.value*=-1)),c.normalMap&&(m.normalMap.value=c.normalMap,n(c.normalMap,m.normalMapTransform),m.normalScale.value.copy(c.normalScale),c.side===_n&&m.normalScale.value.negate()),c.displacementMap&&(m.displacementMap.value=c.displacementMap,n(c.displacementMap,m.displacementMapTransform),m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias),c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,m.emissiveMapTransform)),c.specularMap&&(m.specularMap.value=c.specularMap,n(c.specularMap,m.specularMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest);const g=e.get(c),M=g.envMap,S=g.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(Bw.makeRotationFromEuler(S)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(N0),m.reflectivity.value=c.reflectivity,m.ior.value=c.ior,m.refractionRatio.value=c.refractionRatio),c.lightMap&&(m.lightMap.value=c.lightMap,m.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,m.lightMapTransform)),c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,m.aoMapTransform))}function a(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform))}function o(m,c){m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale}function l(m,c,g,M){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.size.value=c.size*g,m.scale.value=M*.5,c.map&&(m.map.value=c.map,n(c.map,m.uvTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function u(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.rotation.value=c.rotation,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function d(m,c){m.specular.value.copy(c.specular),m.shininess.value=Math.max(c.shininess,1e-4)}function h(m,c){c.gradientMap&&(m.gradientMap.value=c.gradientMap)}function f(m,c){m.metalness.value=c.metalness,c.metalnessMap&&(m.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,m.metalnessMapTransform)),m.roughness.value=c.roughness,c.roughnessMap&&(m.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,m.roughnessMapTransform)),c.envMap&&(m.envMapIntensity.value=c.envMapIntensity)}function p(m,c,g){m.ior.value=c.ior,c.sheen>0&&(m.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),m.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(m.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,m.sheenColorMapTransform)),c.sheenRoughnessMap&&(m.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,m.sheenRoughnessMapTransform))),c.clearcoat>0&&(m.clearcoat.value=c.clearcoat,m.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(m.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,m.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(m.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===_n&&m.clearcoatNormalScale.value.negate())),c.dispersion>0&&(m.dispersion.value=c.dispersion),c.retroreflectivity>0&&(m.retroreflectivity.value=c.retroreflectivity),c.iridescence>0&&(m.iridescence.value=c.iridescence,m.iridescenceIOR.value=c.iridescenceIOR,m.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(m.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,m.iridescenceMapTransform)),c.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),c.transmission>0&&(m.transmission.value=c.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),c.transmissionMap&&(m.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,m.transmissionMapTransform)),m.thickness.value=c.thickness,c.thicknessMap&&(m.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=c.attenuationDistance,m.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(m.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(m.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=c.specularIntensity,m.specularColor.value.copy(c.specularColor),c.specularColorMap&&(m.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,m.specularColorMapTransform)),c.specularIntensityMap&&(m.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,c){c.matcap&&(m.matcap.value=c.matcap)}function E(m,c){const g=e.get(c).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function zw(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,T){const w=T.program;i.uniformBlockBinding(S,w)}function u(S,T){let w=r[S.id];w===void 0&&(m(S),w=d(S),r[S.id]=w,S.addEventListener("dispose",g));const R=T.program;i.updateUBOMapping(S,R);const v=e.render.frame;s[S.id]!==v&&(f(S),s[S.id]=v)}function d(S){const T=h();S.__bindingPointIndex=T;const w=t.createBuffer(),R=S.__size,v=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,R,v),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,w),w}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const T=r[S.id],w=S.uniforms,R=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let v=0,A=w.length;v<A;v++){const b=w[v];if(Array.isArray(b))for(let D=0,z=b.length;D<z;D++)p(b[D],v,D,R);else p(b,v,0,R)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(S,T,w,R){if(E(S,T,w,R)===!0){const v=S.__offset,A=S.value;if(Array.isArray(A)){let b=0;for(let D=0;D<A.length;D++){const z=A[D],Y=c(z);x(z,S.__data,b),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(b+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(A,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,v,S.__data)}}function x(S,T,w){typeof S=="number"||typeof S=="boolean"?T[0]=S:S.isMatrix3?(T[0]=S.elements[0],T[1]=S.elements[1],T[2]=S.elements[2],T[3]=0,T[4]=S.elements[3],T[5]=S.elements[4],T[6]=S.elements[5],T[7]=0,T[8]=S.elements[6],T[9]=S.elements[7],T[10]=S.elements[8],T[11]=0):ArrayBuffer.isView(S)?T.set(new S.constructor(S.buffer,S.byteOffset,T.length)):S.toArray(T,w)}function E(S,T,w,R){const v=S.value,A=T+"_"+w;if(R[A]===void 0)return typeof v=="number"||typeof v=="boolean"?R[A]=v:ArrayBuffer.isView(v)?R[A]=v.slice():R[A]=v.clone(),!0;{const b=R[A];if(typeof v=="number"||typeof v=="boolean"){if(b!==v)return R[A]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(b.equals(v)===!1)return b.copy(v),!0}}return!1}function m(S){const T=S.uniforms;let w=0;const R=16;for(let A=0,b=T.length;A<b;A++){const D=Array.isArray(T[A])?T[A]:[T[A]];for(let z=0,Y=D.length;z<Y;z++){const I=D[z],G=Array.isArray(I.value)?I.value:[I.value];for(let j=0,q=G.length;j<q;j++){const F=G[j],U=c(F),W=w%R,Z=W%U.boundary,de=W+Z;w+=Z,de!==0&&R-de<U.storage&&(w+=R-de),I.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=w,w+=U.storage}}}const v=w%R;return v>0&&(w+=R-v),S.__size=w,S.__cache={},this}function c(S){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(T.boundary=16,T.storage=S.byteLength):De("WebGLRenderer: Unsupported uniform value type.",S),T}function g(S){const T=S.target;T.removeEventListener("dispose",g);const w=a.indexOf(T.__bindingPointIndex);a.splice(w,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function M(){for(const S in r)t.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:u,dispose:M}}const Hw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ri=null;function Vw(){return ri===null&&(ri=new Dy(Hw,16,16,Or,pi),ri.name="DFG_LUT",ri.minFilter=Jt,ri.magFilter=Jt,ri.wrapS=Ci,ri.wrapT=Ci,ri.generateMipmaps=!1,ri.needsUpdate=!0),ri}class Gw{constructor(e={}){const{canvas:n=oy(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=In}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;const E=p,m=new Set([jd,Jd,Qd]),c=new Set([In,hi,Ba,ka,Kd,Zd]),g=new Uint32Array(4),M=new Int32Array(4),S=new k;let T=null,w=null;const R=[],v=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let D=!1,z=null,Y=null,I=null,G=null;this._outputColorSpace=Ln;let j=0,q=0,F=null,U=-1,W=null;const Z=new St,de=new St;let ye=null;const ze=new Qe(0);let Ue=0,Fe=n.width,B=n.height,K=1,pe=null,Pe=null;const ge=new St(0,0,Fe,B),ke=new St(0,0,Fe,B);let Pt=!1;const He=new S0;let Ze=!1,at=!1;const We=new yt,ht=new k,Ut=new St,un={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function Tt(){return F===null?K:1}let N=i;function Gt(y,P){return n.getContext(y,P)}let tt,C,_,O,X,Q,re,se,J,te,ae,Re,ce,oe,Ce,Le,Ie,L,le,ee,ue,_e,ne;try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${qd}`),n.addEventListener("webglcontextlost",ot,!1),n.addEventListener("webglcontextrestored",je,!1),n.addEventListener("webglcontextcreationerror",kn,!1),N===null){const P="webgl2";if(N=Gt(P,y),N===null)throw Gt(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}be()}catch(y){throw n.removeEventListener("webglcontextlost",ot,!1),n.removeEventListener("webglcontextrestored",je,!1),n.removeEventListener("webglcontextcreationerror",kn,!1),$e("WebGLRenderer: "+y.message),y}function be(){tt=new VT(N),tt.init(),ue=new Nw(N,tt),C=new DT(N,tt,e,ue),_=new Lw(N,tt),C.reversedDepthBuffer&&f&&_.buffers.depth.setReversed(!0),Y=N.createFramebuffer(),I=N.createFramebuffer(),G=N.createFramebuffer(),O=new XT(N),X=new _w,Q=new Dw(N,tt,_,X,C,ue,O),re=new HT(b),se=new qy(N),_e=new PT(N,se),J=new GT(N,se,O,_e),te=new qT(N,J,se,_e,O),L=new YT(N,C,Q),Ce=new NT(X),ae=new gw(b,re,tt,C,_e,Ce),Re=new kw(b,X),ce=new xw,oe=new ww(tt),Ie=new bT(b,re,_,te,x,l),Le=new Pw(b,te,C),ne=new zw(N,O,C,_),le=new LT(N,tt,O),ee=new WT(N,tt,O),O.programs=ae.programs,b.capabilities=C,b.extensions=tt,b.properties=X,b.renderLists=ce,b.shadowMap=Le,b.state=_,b.info=O}E!==In&&(A=new KT(E,n.width,n.height,o,r,s));const we=new Ow(b,N);this.xr=we,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const y=tt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=tt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(y){y!==void 0&&(K=y,this.setSize(Fe,B,!1))},this.getSize=function(y){return y.set(Fe,B)},this.setSize=function(y,P,$=!0){if(we.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}Fe=y,B=P,n.width=Math.floor(y*K),n.height=Math.floor(P*K),$===!0&&(n.style.width=y+"px",n.style.height=P+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,y,P)},this.getDrawingBufferSize=function(y){return y.set(Fe*K,B*K).floor()},this.setDrawingBufferSize=function(y,P,$){Fe=y,B=P,K=$,n.width=Math.floor(y*$),n.height=Math.floor(P*$),this.setViewport(0,0,y,P)},this.setEffects=function(y){if(E===In){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let P=0;P<y.length;P++)if(y[P].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(Z)},this.getViewport=function(y){return y.copy(ge)},this.setViewport=function(y,P,$,H){y.isVector4?ge.set(y.x,y.y,y.z,y.w):ge.set(y,P,$,H),_.viewport(Z.copy(ge).multiplyScalar(K).round())},this.getScissor=function(y){return y.copy(ke)},this.setScissor=function(y,P,$,H){y.isVector4?ke.set(y.x,y.y,y.z,y.w):ke.set(y,P,$,H),_.scissor(de.copy(ke).multiplyScalar(K).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(y){_.setScissorTest(Pt=y)},this.setOpaqueSort=function(y){pe=y},this.setTransparentSort=function(y){Pe=y},this.getClearColor=function(y){return y.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(y=!0,P=!0,$=!0){let H=0;if(y){let V=!1;if(F!==null){const me=F.texture.format;V=m.has(me)}if(V){const me=F.texture.type,xe=c.has(me),he=Ie.getClearColor(),Ee=Ie.getClearAlpha(),Ae=he.r,Oe=he.g,Ve=he.b;xe?(g[0]=Ae,g[1]=Oe,g[2]=Ve,g[3]=Ee,N.clearBufferuiv(N.COLOR,0,g)):(M[0]=Ae,M[1]=Oe,M[2]=Ve,M[3]=Ee,N.clearBufferiv(N.COLOR,0,M))}else H|=N.COLOR_BUFFER_BIT}P&&(H|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),z=y},this.dispose=function(){n.removeEventListener("webglcontextlost",ot,!1),n.removeEventListener("webglcontextrestored",je,!1),n.removeEventListener("webglcontextcreationerror",kn,!1),Ie.dispose(),ce.dispose(),oe.dispose(),X.dispose(),re.dispose(),te.dispose(),_e.dispose(),ne.dispose(),ae.dispose(),we.dispose(),we.removeEventListener("sessionstart",ph),we.removeEventListener("sessionend",mh),pr.stop()};function ot(y){y.preventDefault(),zp("WebGLRenderer: Context Lost."),D=!0}function je(){zp("WebGLRenderer: Context Restored."),D=!1;const y=O.autoReset,P=Le.enabled,$=Le.autoUpdate,H=Le.needsUpdate,V=Le.type;be(),O.autoReset=y,Le.enabled=P,Le.autoUpdate=$,Le.needsUpdate=H,Le.type=V}function kn(y){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ei(y){const P=y.target;P.removeEventListener("dispose",ei),I0(P)}function I0(y){U0(y),X.remove(y)}function U0(y){const P=X.get(y).programs;P!==void 0&&(P.forEach(function($){ae.releaseProgram($)}),y.isShaderMaterial&&ae.releaseShaderCache(y))}this.renderBufferDirect=function(y,P,$,H,V,me){P===null&&(P=un);const xe=V.isMesh&&V.matrixWorld.determinantAffine()<0,he=B0(y,P,$,H,V);_.setMaterial(H,xe);let Ee=$.index,Ae=1;if(H.wireframe===!0){if(Ee=J.getWireframeAttribute($),Ee===void 0)return;Ae=2}const Oe=$.drawRange,Ve=$.attributes.position;let Te=Oe.start*Ae,et=(Oe.start+Oe.count)*Ae;me!==null&&(Te=Math.max(Te,me.start*Ae),et=Math.min(et,(me.start+me.count)*Ae)),Ee!==null?(Te=Math.max(Te,0),et=Math.min(et,Ee.count)):Ve!=null&&(Te=Math.max(Te,0),et=Math.min(et,Ve.count));const wt=et-Te;if(wt<0||wt===1/0)return;_e.setup(V,H,he,$,Ee);let ct,st=le;if(Ee!==null&&(ct=se.get(Ee),st=ee,st.setIndex(ct)),V.isMesh)H.wireframe===!0?(_.setLineWidth(H.wireframeLinewidth*Tt()),st.setMode(N.LINES)):st.setMode(N.TRIANGLES);else if(V.isLine){let Wt=H.linewidth;Wt===void 0&&(Wt=1),_.setLineWidth(Wt*Tt()),V.isLineSegments?st.setMode(N.LINES):V.isLineLoop?st.setMode(N.LINE_LOOP):st.setMode(N.LINE_STRIP)}else V.isPoints?st.setMode(N.POINTS):V.isSprite&&st.setMode(N.TRIANGLES);if(V.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))st.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Wt=V._multiDrawStarts,ve=V._multiDrawCounts,en=V._multiDrawCount,qe=Ee?se.get(Ee).bytesPerElement:1,Cn=X.get(H).currentProgram.getUniforms();for(let ti=0;ti<en;ti++)Cn.setValue(N,"_gl_DrawID",ti),st.render(Wt[ti]/qe,ve[ti])}else if(V.isInstancedMesh)st.renderInstances(Te,wt,V.count);else if($.isInstancedBufferGeometry){const Wt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ve=Math.min($.instanceCount,Wt);st.renderInstances(Te,wt,ve)}else st.render(Te,wt)};function hh(y,P,$,H){z!==null&&y.isNodeMaterial&&z.setObject(H,y),Ze===!0&&Ce.setState(y,$,!1),y.transparent===!0&&y.side===wi&&y.forceSinglePass===!1?(y.side=_n,y.needsUpdate=!0,Qa(y,P,H),y.side=Ur,y.needsUpdate=!0,Qa(y,P,H),y.side=wi):Qa(y,P,H)}this.compile=function(y,P,$=null){$===null&&($=y),z!==null&&z.renderStart(y,P,$),w=oe.get($),w.init(P),v.push(w),$.traverseVisible(function(V){V.isLight&&V.layers.test(P.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),y!==$&&y.traverseVisible(function(V){V.isLight&&V.layers.test(P.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),w.setupLights(),z!==null&&z.updateLights(w.state.lightsArray),at=this.localClippingEnabled,Ze=Ce.init(this.clippingPlanes,at),Ze===!0&&Ce.setGlobalState(this.clippingPlanes,P),z!==null&&Le.render(w.state.shadowsArray,$,P);const H=new Set;return y.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const me=V.material;if(me)if(Array.isArray(me))for(let xe=0;xe<me.length;xe++){const he=me[xe];hh(he,$,P,V),H.add(he)}else hh(me,$,P,V),H.add(me)}),w=v.pop(),z!==null&&z.renderEnd(),H},this.compileAsync=function(y,P,$=null){const H=this.compile(y,P,$);return new Promise(V=>{function me(){if(H.forEach(function(xe){const Ee=X.get(xe).currentProgram;(Ee===void 0||Ee.isReady())&&H.delete(xe)}),H.size===0){V(y);return}setTimeout(me,10)}tt.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let au=null;function F0(y){au&&au(y)}function ph(){pr.stop()}function mh(){pr.start()}const pr=new A0;pr.setAnimationLoop(F0),typeof self<"u"&&pr.setContext(self),this.setAnimationLoop=function(y){au=y,we.setAnimationLoop(y),y===null?pr.stop():pr.start()},we.addEventListener("sessionstart",ph),we.addEventListener("sessionend",mh),this.render=function(y,P){if(P!==void 0&&P.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;z!==null&&z.renderStart(y,P);const $=we.enabled===!0&&we.isPresenting===!0,H=A!==null&&(F===null||$)&&A.begin(b,F);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(P),P=we.getCamera()),y.isScene===!0&&y.onBeforeRender(b,y,P,F),w=oe.get(y,v.length),w.init(P),w.state.textureUnits=Q.getTextureUnits(),v.push(w),We.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),He.setFromProjectionMatrix(We,ui,P.reversedDepth),at=this.localClippingEnabled,Ze=Ce.init(this.clippingPlanes,at),T=ce.get(y,R.length),T.init(),R.push(T),we.enabled===!0&&we.isPresenting===!0){const xe=b.xr.getDepthSensingMesh();xe!==null&&ou(xe,P,-1/0,b.sortObjects)}ou(y,P,0,b.sortObjects),T.finish(),z!==null&&z.updateLights(w.state.lightsArray),b.sortObjects===!0&&T.sort(pe,Pe),mt=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,mt&&Ie.addToRenderList(T,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ze===!0&&Ce.beginShadows();const V=w.state.shadowsArray;if(Le.render(V,y,P),Ze===!0&&Ce.endShadows(),(H&&A.hasRenderPass())===!1){const xe=T.opaque,he=T.transmissive;if(w.setupLights(),P.isArrayCamera){const Ee=P.cameras;if(he.length>0)for(let Ae=0,Oe=Ee.length;Ae<Oe;Ae++){const Ve=Ee[Ae];_h(xe,he,y,Ve)}mt&&Ie.render(y);for(let Ae=0,Oe=Ee.length;Ae<Oe;Ae++){const Ve=Ee[Ae];gh(T,y,Ve,Ve.viewport)}}else he.length>0&&_h(xe,he,y,P),mt&&Ie.render(y),gh(T,y,P)}F!==null&&q===0&&(Q.updateMultisampleRenderTarget(F),Q.updateRenderTargetMipmap(F)),H&&A.end(b),y.isScene===!0&&y.onAfterRender(b,y,P),_e.resetDefaultState(),U=-1,W=null,v.pop(),v.length>0?(w=v[v.length-1],Q.setTextureUnits(w.state.textureUnits),Ze===!0&&Ce.setGlobalState(b.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?T=R[R.length-1]:T=null,z!==null&&z.renderEnd()};function ou(y,P,$,H){if(y.visible===!1)return;if(y.layers.test(P.layers)){if(y.isGroup)$=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(P);else if(y.isLightProbeGrid)w.pushLightProbeGrid(y);else if(y.isLight)w.pushLight(y),y.castShadow&&w.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(He)){H&&Ut.setFromMatrixPosition(y.matrixWorld).applyMatrix4(We);const xe=te.update(y),he=y.material;he.visible&&T.push(y,xe,he,$,Ut.z,null,P)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(He))){const xe=te.update(y),he=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ut.copy(y.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ut.copy(xe.boundingSphere.center)),Ut.applyMatrix4(y.matrixWorld).applyMatrix4(We)),Array.isArray(he)){const Ee=xe.groups;for(let Ae=0,Oe=Ee.length;Ae<Oe;Ae++){const Ve=Ee[Ae],Te=he[Ve.materialIndex];Te&&Te.visible&&T.push(y,xe,Te,$,Ut.z,Ve,P)}}else he.visible&&T.push(y,xe,he,$,Ut.z,null,P)}}const me=y.children;for(let xe=0,he=me.length;xe<he;xe++)ou(me[xe],P,$,H)}function gh(y,P,$,H){const{opaque:V,transmissive:me,transparent:xe}=y;w.setupLightsView($),Ze===!0&&Ce.setGlobalState(b.clippingPlanes,$),H&&_.viewport(Z.copy(H)),V.length>0&&Za(V,P,$),me.length>0&&Za(me,P,$),xe.length>0&&Za(xe,P,$),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function _h(y,P,$,H){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){const Te=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new Jn(1,1,{generateMipmaps:!0,type:Te?pi:In,minFilter:wr,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}const me=w.state.transmissionRenderTarget[H.id],xe=H.viewport||Z;me.setSize(xe.z*b.transmissionResolutionScale,xe.w*b.transmissionResolutionScale);const he=b.getRenderTarget(),Ee=b.getActiveCubeFace(),Ae=b.getActiveMipmapLevel();b.setRenderTarget(me),b.getClearColor(ze),Ue=b.getClearAlpha(),Ue<1&&b.setClearColor(16777215,.5),b.clear(),mt&&Ie.render($);const Oe=b.toneMapping;b.toneMapping=di;const Ve=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),Ze===!0&&Ce.setGlobalState(b.clippingPlanes,H),Za(y,$,H),Q.updateMultisampleRenderTarget(me),Q.updateRenderTargetMipmap(me),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let et=0,wt=P.length;et<wt;et++){const ct=P[et],{object:st,geometry:Wt,material:ve,group:en}=ct;if(ve.side===wi&&st.layers.test(H.layers)){const qe=ve.side;ve.side=_n,ve.needsUpdate=!0,vh(st,$,H,Wt,ve,en),ve.side=qe,ve.needsUpdate=!0,Te=!0}}Te===!0&&(Q.updateMultisampleRenderTarget(me),Q.updateRenderTargetMipmap(me))}b.setRenderTarget(he,Ee,Ae),b.setClearColor(ze,Ue),Ve!==void 0&&(H.viewport=Ve),b.toneMapping=Oe}function Za(y,P,$){const H=P.isScene===!0?P.overrideMaterial:null;for(let V=0,me=y.length;V<me;V++){const xe=y[V],{object:he,geometry:Ee,group:Ae}=xe;let Oe=xe.material;Oe.allowOverride===!0&&H!==null&&(Oe=H),he.layers.test($.layers)&&vh(he,P,$,Ee,Oe,Ae)}}function vh(y,P,$,H,V,me){z!==null&&V.isNodeMaterial&&z.setObject(y,V),y.onBeforeRender(b,P,$,H,V,me),y.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),V.onBeforeRender(b,P,$,H,y,me),V.transparent===!0&&V.side===wi&&V.forceSinglePass===!1?(V.side=_n,V.needsUpdate=!0,b.renderBufferDirect($,P,H,V,y,me),V.side=Ur,V.needsUpdate=!0,b.renderBufferDirect($,P,H,V,y,me),V.side=wi):b.renderBufferDirect($,P,H,V,y,me),y.onAfterRender(b,P,$,H,V,me)}function Qa(y,P,$){P.isScene!==!0&&(P=un);const H=X.get(y),V=w.state.lights,me=w.state.shadowsArray,xe=V.state.version,he=ae.getParameters(y,V.state,me,P,$,w.state.lightProbeGridArray),Ee=ae.getProgramCacheKey(he);let Ae=H.programs;H.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,H.fog=P.fog;const Oe=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;H.envMap=re.get(y.envMap||H.environment,Oe),H.envMapRotation=H.environment!==null&&y.envMap===null?P.environmentRotation:y.envMapRotation,Ae===void 0&&(y.addEventListener("dispose",ei),Ae=new Map,H.programs=Ae);let Ve=Ae.get(Ee);if(Ve!==void 0){if(H.currentProgram===Ve&&H.lightsStateVersion===xe)return Sh(y,he),Ve}else he.uniforms=ae.getUniforms(y),z!==null&&y.isNodeMaterial&&z.build(y,$,he),y.onBeforeCompile(he,b),Ve=ae.acquireProgram(he,Ee),Ae.set(Ee,Ve),H.uniforms=he.uniforms;const Te=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Te.clippingPlanes=Ce.uniform),Sh(y,he),H.needsLights=z0(y),H.lightsStateVersion=xe,H.needsLights&&(Te.ambientLightColor.value=V.state.ambient,Te.lightProbe.value=V.state.probe,Te.sunLights.value=V.state.sun,Te.sunLightShadows.value=V.state.sunShadow,Te.directionalLights.value=V.state.directional,Te.directionalLightShadows.value=V.state.directionalShadow,Te.spotLights.value=V.state.spot,Te.spotLightShadows.value=V.state.spotShadow,Te.rectAreaLights.value=V.state.rectArea,Te.ltc_1.value=V.state.rectAreaLTC1,Te.ltc_2.value=V.state.rectAreaLTC2,Te.pointLights.value=V.state.point,Te.pointLightShadows.value=V.state.pointShadow,Te.hemisphereLights.value=V.state.hemi,Te.sunShadowMatrix.value=V.state.sunShadowMatrix,Te.sunShadowCascade.value=V.state.sunShadowCascade,Te.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Te.spotLightMatrix.value=V.state.spotLightMatrix,Te.spotLightMap.value=V.state.spotLightMap,Te.pointShadowMatrix.value=V.state.pointShadowMatrix),H.lightProbeGrid=w.state.lightProbeGridArray.length>0,H.currentProgram=Ve,H.uniformsList=null,Ve}function xh(y){if(y.uniformsList===null){const P=y.currentProgram.getUniforms();y.uniformsList=il.seqWithValue(P.seq,y.uniforms)}return y.uniformsList}function Sh(y,P){const $=X.get(y);$.outputColorSpace=P.outputColorSpace,$.batching=P.batching,$.batchingColor=P.batchingColor,$.instancing=P.instancing,$.instancingColor=P.instancingColor,$.instancingMorph=P.instancingMorph,$.skinning=P.skinning,$.morphTargets=P.morphTargets,$.morphNormals=P.morphNormals,$.morphColors=P.morphColors,$.morphTargetsCount=P.morphTargetsCount,$.numClippingPlanes=P.numClippingPlanes,$.numIntersection=P.numClipIntersection,$.vertexAlphas=P.vertexAlphas,$.vertexTangents=P.vertexTangents,$.toneMapping=P.toneMapping}function O0(y,P){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;S.setFromMatrixPosition(P.matrixWorld);for(let $=0,H=y.length;$<H;$++){const V=y[$];if(V.texture!==null&&V.boundingBox.containsPoint(S))return V}return null}function B0(y,P,$,H,V){P.isScene!==!0&&(P=un),Q.resetTextureUnits();const me=P.fog,xe=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?P.environment:null,he=F===null?b.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Xe.workingColorSpace,Ee=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ae=re.get(H.envMap||xe,Ee),Oe=H.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ve=!!$.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Te=!!$.morphAttributes.position,et=!!$.morphAttributes.normal,wt=!!$.morphAttributes.color;let ct=di;H.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(ct=b.toneMapping);const st=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Wt=st!==void 0?st.length:0,ve=X.get(H),en=w.state.lights;if(Ze===!0&&(at===!0||y!==W)){const lt=y===W&&H.id===U;Ce.setState(H,y,lt)}let qe=!1;H.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==en.state.version||ve.outputColorSpace!==he||V.isBatchedMesh&&ve.batching===!1||!V.isBatchedMesh&&ve.batching===!0||V.isBatchedMesh&&ve.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&ve.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&ve.instancing===!1||!V.isInstancedMesh&&ve.instancing===!0||V.isSkinnedMesh&&ve.skinning===!1||!V.isSkinnedMesh&&ve.skinning===!0||V.isInstancedMesh&&ve.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&ve.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&ve.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&ve.instancingMorph===!1&&V.morphTexture!==null||ve.envMap!==Ae||H.fog===!0&&ve.fog!==me||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==Ce.numPlanes||ve.numIntersection!==Ce.numIntersection)||ve.vertexAlphas!==Oe||ve.vertexTangents!==Ve||ve.morphTargets!==Te||ve.morphNormals!==et||ve.morphColors!==wt||ve.toneMapping!==ct||ve.morphTargetsCount!==Wt||!!ve.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(qe=!0):(qe=!0,ve.__version=H.version);let Cn=ve.currentProgram;qe===!0&&(Cn=Qa(H,P,V),z&&H.isNodeMaterial&&z.onUpdateProgram(H,Cn,ve));let ti=!1,ki=!1,Vr=!1;const rt=Cn.getUniforms(),Mt=ve.uniforms;if(_.useProgram(Cn.program)&&(ti=!0,ki=!0,Vr=!0),H.id!==U&&(U=H.id,ki=!0),ve.needsLights){const lt=O0(w.state.lightProbeGridArray,V);ve.lightProbeGrid!==lt&&(ve.lightProbeGrid=lt,ki=!0)}if(ti||W!==y){_.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),rt.setValue(N,"projectionMatrix",y.projectionMatrix),rt.setValue(N,"viewMatrix",y.matrixWorldInverse);const Hi=rt.map.cameraPosition;Hi!==void 0&&Hi.setValue(N,ht.setFromMatrixPosition(y.matrixWorld)),C.logarithmicDepthBuffer&&rt.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&rt.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),W!==y&&(W=y,ki=!0,Vr=!0)}if(ve.needsLights&&(en.state.sunShadowMap.length>0&&rt.setValue(N,"sunShadowMap",en.state.sunShadowMap,Q),en.state.directionalShadowMap.length>0&&rt.setValue(N,"directionalShadowMap",en.state.directionalShadowMap,Q),en.state.spotShadowMap.length>0&&rt.setValue(N,"spotShadowMap",en.state.spotShadowMap,Q),en.state.pointShadowMap.length>0&&rt.setValue(N,"pointShadowMap",en.state.pointShadowMap,Q)),V.isSkinnedMesh){rt.setOptional(N,V,"bindMatrix"),rt.setOptional(N,V,"bindMatrixInverse");const lt=V.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),rt.setValue(N,"boneTexture",lt.boneTexture,Q))}V.isBatchedMesh&&(rt.setOptional(N,V,"batchingTexture"),rt.setValue(N,"batchingTexture",V._matricesTexture,Q),rt.setOptional(N,V,"batchingIdTexture"),rt.setValue(N,"batchingIdTexture",V._indirectTexture,Q),rt.setOptional(N,V,"batchingColorTexture"),V._colorsTexture!==null&&rt.setValue(N,"batchingColorTexture",V._colorsTexture,Q));const zi=$.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&L.update(V,$,Cn),(ki||ve.receiveShadow!==V.receiveShadow)&&(ve.receiveShadow=V.receiveShadow,rt.setValue(N,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&P.environment!==null&&(Mt.envMapIntensity.value=P.environmentIntensity),Mt.dfgLUT!==void 0&&(Mt.dfgLUT.value=Vw()),ki){if(rt.setValue(N,"toneMappingExposure",b.toneMappingExposure),ve.needsLights&&k0(Mt,Vr),me&&H.fog===!0&&Re.refreshFogUniforms(Mt,me),Re.refreshMaterialUniforms(Mt,H,K,B,w.state.transmissionRenderTarget[y.id]),ve.needsLights&&ve.lightProbeGrid){const lt=ve.lightProbeGrid;Mt.probesSH.value=lt.texture,Mt.probesMin.value.copy(lt.boundingBox.min),Mt.probesMax.value.copy(lt.boundingBox.max),Mt.probesResolution.value.copy(lt.resolution)}il.upload(N,xh(ve),Mt,Q)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(il.upload(N,xh(ve),Mt,Q),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&rt.setValue(N,"center",V.center),rt.setValue(N,"modelViewMatrix",V.modelViewMatrix),rt.setValue(N,"normalMatrix",V.normalMatrix),rt.setValue(N,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){const lt=H.uniformsGroups;for(let Hi=0,Gr=lt.length;Hi<Gr;Hi++){const Mh=lt[Hi];ne.update(Mh,Cn),ne.bind(Mh,Cn)}}return Cn}function k0(y,P){y.ambientLightColor.needsUpdate=P,y.lightProbe.needsUpdate=P,y.sunLights.needsUpdate=P,y.sunLightShadows.needsUpdate=P,y.directionalLights.needsUpdate=P,y.directionalLightShadows.needsUpdate=P,y.pointLights.needsUpdate=P,y.pointLightShadows.needsUpdate=P,y.spotLights.needsUpdate=P,y.spotLightShadows.needsUpdate=P,y.rectAreaLights.needsUpdate=P,y.hemisphereLights.needsUpdate=P}function z0(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(y,P,$){const H=X.get(y);H.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),X.get(y.texture).__webglTexture=P,X.get(y.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:$,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,P){const $=X.get(y);$.__webglFramebuffer=P,$.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(y,P=0,$=0){F=y,j=P,q=$;let H=null,V=!1,me=!1;if(y){const he=X.get(y);if(he.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(N.FRAMEBUFFER,he.__webglFramebuffer),Z.copy(y.viewport),de.copy(y.scissor),ye=y.scissorTest,_.viewport(Z),_.scissor(de),_.setScissorTest(ye),U=-1;return}else if(he.__webglFramebuffer===void 0)Q.setupRenderTarget(y);else if(he.__hasExternalTextures)Q.rebindTextures(y,X.get(y.texture).__webglTexture,X.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Oe=y.depthTexture;if(he.__boundDepthTexture!==Oe){if(Oe!==null&&X.has(Oe)&&(y.width!==Oe.image.width||y.height!==Oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(y)}}const Ee=y.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(me=!0);const Ae=X.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ae[P])?H=Ae[P][$]:H=Ae[P],V=!0):y.samples>0&&Q.useMultisampledRTT(y)===!1?H=X.get(y).__webglMultisampledFramebuffer:Array.isArray(Ae)?H=Ae[$]:H=Ae,Z.copy(y.viewport),de.copy(y.scissor),ye=y.scissorTest}else Z.copy(ge).multiplyScalar(K).floor(),de.copy(ke).multiplyScalar(K).floor(),ye=Pt;if($!==0&&(H=Y),_.bindFramebuffer(N.FRAMEBUFFER,H)&&_.drawBuffers(y,H),_.viewport(Z),_.scissor(de),_.setScissorTest(ye),V){const he=X.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+P,he.__webglTexture,$)}else if(me){const he=P;for(let Ee=0;Ee<y.textures.length;Ee++){const Ae=X.get(y.textures[Ee]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ee,Ae.__webglTexture,$,he)}}else if(y!==null&&$!==0){const he=X.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,he.__webglTexture,$)}U=-1};function yh(y){const P=X.get(y);return(P.__readFormat!==y.format||P.__readType!==y.type)&&(P.__readFormat=y.format,P.__readType=y.type,P.__formatReadable=C.textureFormatReadable(y.format),P.__typeReadable=C.textureTypeReadable(y.type)),P}this.readRenderTargetPixels=function(y,P,$,H,V,me,xe,he=0){if(!(y&&y.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=X.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xe!==void 0&&(Ee=Ee[xe]),Ee){_.bindFramebuffer(N.FRAMEBUFFER,Ee);try{const Ae=y.textures[he],Oe=Ae.format,Ve=Ae.type;y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+he);const Te=yh(Ae);if(Te.__formatReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=y.width-H&&$>=0&&$<=y.height-V&&N.readPixels(P,$,H,V,ue.convert(Oe),ue.convert(Ve),me)}finally{const Ae=F!==null?X.get(F).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(y,P,$,H,V,me,xe,he=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=X.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xe!==void 0&&(Ee=Ee[xe]),Ee)if(P>=0&&P<=y.width-H&&$>=0&&$<=y.height-V){_.bindFramebuffer(N.FRAMEBUFFER,Ee);const Ae=y.textures[he],Oe=Ae.format,Ve=Ae.type;y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+he);const Te=yh(Ae);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,et),N.bufferData(N.PIXEL_PACK_BUFFER,me.byteLength,N.STREAM_READ),N.readPixels(P,$,H,V,ue.convert(Oe),ue.convert(Ve),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const wt=F!==null?X.get(F).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,wt);const ct=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await ly(N,ct,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,et),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,me),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(et),N.deleteSync(ct),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,P=null,$=0){const H=Math.pow(2,-$),V=Math.floor(y.image.width*H),me=Math.floor(y.image.height*H),xe=P!==null?P.x:0,he=P!==null?P.y:0;Q.setTexture2D(y,0),N.copyTexSubImage2D(N.TEXTURE_2D,$,0,0,xe,he,V,me),_.unbindTexture()},this.copyTextureToTexture=function(y,P,$=null,H=null,V=0,me=0){let xe,he,Ee,Ae,Oe,Ve,Te,et,wt;const ct=y.isCompressedTexture?y.mipmaps[me]:y.image;if($!==null)xe=$.max.x-$.min.x,he=$.max.y-$.min.y,Ee=$.isBox3?$.max.z-$.min.z:1,Ae=$.min.x,Oe=$.min.y,Ve=$.isBox3?$.min.z:0;else{const Mt=Math.pow(2,-V);xe=Math.floor(ct.width*Mt),he=Math.floor(ct.height*Mt),y.isDataArrayTexture?Ee=ct.depth:y.isData3DTexture?Ee=Math.floor(ct.depth*Mt):Ee=1,Ae=0,Oe=0,Ve=0}H!==null?(Te=H.x,et=H.y,wt=H.z):(Te=0,et=0,wt=0);const st=ue.convert(P.format),Wt=ue.convert(P.type);let ve;P.isData3DTexture?(Q.setTexture3D(P,0),ve=N.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(Q.setTexture2DArray(P,0),ve=N.TEXTURE_2D_ARRAY):(Q.setTexture2D(P,0),ve=N.TEXTURE_2D),_.activeTexture(N.TEXTURE0),_.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,P.flipY),_.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),_.pixelStorei(N.UNPACK_ALIGNMENT,P.unpackAlignment);const en=_.getParameter(N.UNPACK_ROW_LENGTH),qe=_.getParameter(N.UNPACK_IMAGE_HEIGHT),Cn=_.getParameter(N.UNPACK_SKIP_PIXELS),ti=_.getParameter(N.UNPACK_SKIP_ROWS),ki=_.getParameter(N.UNPACK_SKIP_IMAGES);_.pixelStorei(N.UNPACK_ROW_LENGTH,ct.width),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ct.height),_.pixelStorei(N.UNPACK_SKIP_PIXELS,Ae),_.pixelStorei(N.UNPACK_SKIP_ROWS,Oe),_.pixelStorei(N.UNPACK_SKIP_IMAGES,Ve);const Vr=y.isDataArrayTexture||y.isData3DTexture,rt=P.isDataArrayTexture||P.isData3DTexture;if(y.isDepthTexture){const Mt=X.get(y),zi=X.get(P),lt=X.get(Mt.__renderTarget),Hi=X.get(zi.__renderTarget);_.bindFramebuffer(N.READ_FRAMEBUFFER,lt.__webglFramebuffer),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let Gr=0;Gr<Ee;Gr++)Vr&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,X.get(y).__webglTexture,V,Ve+Gr),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,X.get(P).__webglTexture,me,wt+Gr)),N.blitFramebuffer(Ae,Oe,xe,he,Te,et,xe,he,N.DEPTH_BUFFER_BIT,N.NEAREST);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(V!==0||y.isRenderTargetTexture||X.has(y)){const Mt=X.get(y),zi=X.get(P);_.bindFramebuffer(N.READ_FRAMEBUFFER,I),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,G);for(let lt=0;lt<Ee;lt++)Vr?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Mt.__webglTexture,V,Ve+lt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Mt.__webglTexture,V),rt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,zi.__webglTexture,me,wt+lt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,zi.__webglTexture,me),V!==0?N.blitFramebuffer(Ae,Oe,xe,he,Te,et,xe,he,N.COLOR_BUFFER_BIT,N.NEAREST):rt?N.copyTexSubImage3D(ve,me,Te,et,wt+lt,Ae,Oe,xe,he):N.copyTexSubImage2D(ve,me,Te,et,Ae,Oe,xe,he);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else rt?y.isDataTexture||y.isData3DTexture?N.texSubImage3D(ve,me,Te,et,wt,xe,he,Ee,st,Wt,ct.data):P.isCompressedArrayTexture?N.compressedTexSubImage3D(ve,me,Te,et,wt,xe,he,Ee,st,ct.data):N.texSubImage3D(ve,me,Te,et,wt,xe,he,Ee,st,Wt,ct):y.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,me,Te,et,xe,he,st,Wt,ct.data):y.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,me,Te,et,ct.width,ct.height,st,ct.data):N.texSubImage2D(N.TEXTURE_2D,me,Te,et,xe,he,st,Wt,ct);_.pixelStorei(N.UNPACK_ROW_LENGTH,en),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,qe),_.pixelStorei(N.UNPACK_SKIP_PIXELS,Cn),_.pixelStorei(N.UNPACK_SKIP_ROWS,ti),_.pixelStorei(N.UNPACK_SKIP_IMAGES,ki),me===0&&P.generateMipmaps&&N.generateMipmap(ve),_.unbindTexture()},this.initRenderTarget=function(y){X.get(y).__webglFramebuffer===void 0&&Q.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Q.setTextureCube(y,0):y.isData3DTexture?Q.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Q.setTexture2DArray(y,0):Q.setTexture2D(y,0),_.unbindTexture()},this.resetState=function(){j=0,q=0,F=null,_.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),n.unpackColorSpace=Xe._getUnpackColorSpace()}}const hc=.06;function su(t,{marginFraction:e=.18,minMargin:n=8,clampMin:i,clampMax:r,roundTo:s=5}){const a=Math.min(...t),o=Math.max(...t),l=Math.max((o-a)*e,n);let u=a-l,d=o+l;return i!==void 0&&(u=Math.max(u,i)),d=Math.min(d,r),{min:Math.floor(u/s)*s,max:Math.ceil(d/s)*s}}const ua=su(Ir.map(t=>t.lab.l),{clampMin:0,clampMax:100}),Kt=su(Ir.map(t=>t.lab.a),{clampMin:-100,clampMax:100}),Im=su(Ir.map(t=>t.lab.b),{clampMin:-100,clampMax:100,marginFraction:.04,minMargin:6}),fn=su(Ir.map(t=>t.lab.b),{clampMin:-100,clampMax:100,marginFraction:.01,minMargin:2}),Zt=ua.min,Um=new k(8.6,3.4,5.6).normalize(),Ww=16,Fm=1.22,Xw=14,Yw=.22;function Rt(t,e,n){return new k(e*hc,(t-50)*hc,n*hc)}function qw({elapsedMs:t,axesOpacity:e,labPointsOpacity:n}){const i=Ct.useRef(null),r=Ct.useRef(null),[s,a]=Ct.useState([]),o=Ct.useRef(null),l=Ct.useRef(!1);return Ct.useEffect(()=>{const u=i.current,d=r.current;if(!u||!d)return;const h=u.clientWidth,f=u.clientHeight,p=new Gw({canvas:d,alpha:!0,antialias:!0});p.setPixelRatio(Math.min(window.devicePixelRatio,2)),p.setSize(h,f,!1);const x=new Ty,E=[];for(const B of[ua.min,ua.max])for(const K of[Kt.min,Kt.max])for(const pe of[Im.min,Im.max])E.push(Rt(B,K,pe));const m=E.reduce((B,K)=>B.add(K),new k).multiplyScalar(1/E.length),c=Um.clone().negate(),g=new k(0,1,0),M=new k().crossVectors(c,g).normalize(),S=new k().crossVectors(M,c).normalize();let T=0,w=0;for(const B of E){const K=B.clone().sub(m);T=Math.max(T,Math.abs(K.dot(M))),w=Math.max(w,Math.abs(K.dot(S)))}T*=Fm,w*=Fm;const R=h/f,v=Math.max(w*2,T*2/R),A=new oh(-v*R/2,v*R/2,v/2,-v/2,.1,100);A.position.copy(m).addScaledVector(Um,Ww),A.lookAt(m),A.updateMatrixWorld();const b=f/v,D=[{from:Rt(Zt,0,0),to:Rt(ua.max,0,0)},{from:Rt(Zt,Kt.min,0),to:Rt(Zt,Kt.max,0)},{from:Rt(Zt,0,fn.min),to:Rt(Zt,0,fn.max)}],z=[],Y=new oa;for(const B of D){const K=new $f({color:13618372,transparent:!0,opacity:0}),pe=new wn().setFromPoints([B.from,B.to]);Y.add(new y0(pe,K)),z.push(K)}x.add(Y);const I=new k;A.getWorldDirection(I);const j=[{text:"L*",from:D[0].from,to:D[0].to},{text:"a*",from:D[1].from,to:D[1].to},{text:"b*",from:D[2].from,to:D[2].to}].map(B=>{const K=B.to.clone().sub(B.from).normalize(),pe=Math.sqrt(Math.max(0,1-K.dot(I)**2)),Pe=b*pe,ge=Xw/Math.max(Pe,1e-6);return{text:B.text,world:B.to.clone().addScaledVector(K,ge)}}),q=[],F=(B,K)=>{q.push(B.x,B.y,B.z,K.x,K.y,K.z)},U=(fn.min+fn.max)/2;F(Rt(Zt,Kt.min,fn.min),Rt(Zt,Kt.max,fn.min)),F(Rt(Zt,Kt.max,fn.min),Rt(Zt,Kt.max,fn.max)),F(Rt(Zt,Kt.max,fn.max),Rt(Zt,Kt.min,fn.max)),F(Rt(Zt,Kt.min,fn.max),Rt(Zt,Kt.min,fn.min)),F(Rt(Zt,Kt.min,U),Rt(Zt,Kt.max,U));for(const B of[Kt.min,Kt.max])for(const K of[fn.min,fn.max])F(Rt(Zt,B,K),Rt(ua.max,B,K));const W=new wn;W.setAttribute("position",new an(q,3));const Z=new $f({color:13618372,transparent:!0,opacity:0}),de=new Iy(W,Z);x.add(de);const ye=of/2/b,ze=new ah(ye,20,20),Ue=Ir.map((B,K)=>{const pe=new sh({color:new Qe(B.hex),transparent:!0,opacity:0}),Pe=new mi(ze,pe);Pe.userData.colorId=B.id;const ge=Rt(B.lab.l,B.lab.a,B.lab.b);return Pe.position.copy(ge),x.add(Pe),{mesh:Pe,material:pe,start:ge.clone(),target:ge,orderIndex:K}});o.current={renderer:p,scene:x,camera:A,axisMaterials:z,latticeMaterial:Z,points:Ue};const Fe=B=>{const K=B.clone().project(A);return{x:(K.x*.5+.5)*h,y:(-K.y*.5+.5)*f}};return a(j.map(B=>({text:B.text,...Fe(B.world)}))),p.render(x,A),()=>{ze.dispose(),Ue.forEach(B=>B.material.dispose()),z.forEach(B=>B.dispose()),W.dispose(),Z.dispose(),p.dispose()}},[]),Ct.useEffect(()=>{t<Cl&&(l.current=!1)},[t]),Ct.useEffect(()=>{const u=o.current,d=i.current;if(!(!u||!d)){if(u.axisMaterials.forEach(h=>{h.opacity=e}),u.latticeMaterial.opacity=e*Yw,n>0&&!l.current){l.current=!0;const h=d.getBoundingClientRect(),f=new k;u.camera.getWorldDirection(f);const p=new Ti().setFromNormalAndCoplanarPoint(f,new k(0,0,0)),x=new Xy;for(const E of u.points){const m=document.querySelector(`[data-color-id="${E.mesh.userData.colorId}"]`);if(!m)continue;const c=m.getBoundingClientRect(),g=(c.left+c.width/2-h.left)/h.width*2-1,M=-((c.top+c.height/2-h.top)/h.height)*2+1;x.setFromCamera(new Je(g,M),u.camera);const S=new k;x.ray.intersectPlane(p,S)&&E.start.copy(S)}}for(const h of u.points){h.material.opacity=n;const f=wS(t,h.orderIndex,u.points.length);h.mesh.position.lerpVectors(h.start,h.target,f)}u.renderer.render(u.scene,u.camera)}},[t,e,n]),Me.jsxs("div",{ref:i,className:"lab-space","aria-hidden":"true",children:[Me.jsx("canvas",{ref:r,className:"lab-space__canvas"}),s.map((u,d)=>Me.jsx("span",{className:"lab-space__axis-tag",style:{left:u.x,top:u.y,opacity:e},children:u.text},`axis-tag-${d}`))]})}const $w=700+Yd;function Kw(){const t=pS(Ir),e=Ct.useRef(null),n=xS(e,{durationMs:SS,holdVh:Yd}),i=TS(n),r={"--code-opacity":i.codeOpacity,"--name-opacity":i.nameOpacity,"--year-opacity":i.yearOpacity,"--chrome-opacity":i.chromeOpacity,"--caption-opacity":i.captionOpacity,"--morph-t":i.morphT,"--dom-points-opacity":i.domPointsOpacity,"--axes-opacity":i.axesOpacity};return Me.jsx("div",{ref:e,className:"archive-track",style:{height:`${$w}vh`},children:Me.jsxs("section",{className:"archive","aria-label":"A history in color",style:r,children:[Me.jsxs("div",{className:"archive__header grid",children:[Me.jsxs("h2",{className:"archive__headline",children:["A history",Me.jsx("br",{}),"in color"]}),Me.jsx("p",{className:"archive__copy",children:"Every year since 2000, Pantone has named a Color of the Year — a shade intended to capture the spirit of its time."}),Me.jsx("p",{className:"archive__caption",children:"A color can also be a coordinate."}),Me.jsxs("div",{className:"archive__lab-title","aria-hidden":"true",children:[Me.jsx("p",{className:"archive__lab-title-eyebrow",children:"The color space"}),Me.jsx("p",{className:"archive__lab-title-lede",children:"29 Colors of the Year in CIELAB · 2000–2026"})]})]}),Me.jsx("div",{className:"archive__matrix",children:Me.jsx("div",{className:"archive__index",children:t.map(s=>Me.jsx(vS,{group:s,morphT:i.morphT},s.year))})}),Me.jsxs("div",{className:"archive__lab-layout",children:[Me.jsx("div",{className:"archive__lab-stage",children:Me.jsx(qw,{elapsedMs:n,axesOpacity:i.axesOpacity,labPointsOpacity:i.labPointsOpacity})}),Me.jsx("aside",{className:"archive__lab-aside","aria-hidden":"true",children:Me.jsxs("div",{className:"archive__lab-aside-content",children:[Me.jsx("p",{className:"archive__lab-aside-eyebrow",children:"How to read this space"}),Me.jsx("p",{className:"archive__lab-aside-lede",children:"Every color has three coordinates."}),Me.jsxs("div",{className:"archive__lab-aside-item",children:[Me.jsx("span",{className:"archive__lab-aside-symbol",children:"L*"}),Me.jsx("span",{className:"archive__lab-aside-pair",children:"Light ↕ Dark"}),Me.jsx("p",{className:"archive__lab-aside-desc",children:"How light or dark the color is."})]}),Me.jsxs("div",{className:"archive__lab-aside-item",children:[Me.jsx("span",{className:"archive__lab-aside-symbol",children:"a*"}),Me.jsx("span",{className:"archive__lab-aside-pair",children:"Green ↔ Red"}),Me.jsx("p",{className:"archive__lab-aside-desc",children:"Where the color sits between green and red."})]}),Me.jsxs("div",{className:"archive__lab-aside-item",children:[Me.jsx("span",{className:"archive__lab-aside-symbol",children:"b*"}),Me.jsx("span",{className:"archive__lab-aside-pair",children:"Blue ↔ Yellow"}),Me.jsx("p",{className:"archive__lab-aside-desc",children:"Where the color sits between blue and yellow."})]})]})})]}),Me.jsx("div",{className:"archive__footer","aria-hidden":"true",children:Me.jsxs("span",{children:["2000–2026 · ",t.length," YEARS · ",Ir.length," COLORS"]})}),Me.jsx("span",{className:"archive__scroll-cue","aria-hidden":"true",children:"SCROLL ↓"})]})})}const Zw=[{id:"intro",label:"01 INTRO"},{id:"colors",label:"02 THE COLORS"},{id:"data",label:"03 THE DATA"},{id:"guess",label:"04 YOUR GUESS"},{id:"prediction",label:"05 THE PREDICTION"},{id:"result",label:"06 THE RESULT"}];function Qw(){const[t,e]=Ct.useState("intro"),[n,i]=Ct.useState(!0);return Ct.useEffect(()=>{let r=!1;function s(){const o=document.querySelector(".archive-track");if(!o)return;const l=o.getBoundingClientRect().top,u=l<=0;if(i(window.scrollY<=0||u),!u){e("intro");return}const d=Yd/100*window.innerHeight;e(l<=-d?"data":"colors")}function a(){r||(r=!0,requestAnimationFrame(()=>{r=!1,s()}))}return s(),window.addEventListener("scroll",a,{passive:!0}),window.addEventListener("resize",a),()=>{window.removeEventListener("scroll",a),window.removeEventListener("resize",a)}},[]),Me.jsx("nav",{className:n?"chapter-nav":"chapter-nav is-hidden","aria-hidden":"true",children:Zw.map(r=>Me.jsx("span",{className:r.id===t?"is-current":void 0,children:r.label},r.id))})}function Jw(){return Me.jsxs("main",{children:[Me.jsx(Qw,{}),Me.jsx(hS,{}),Me.jsx(Kw,{})]})}K_(document.getElementById("root")).render(Me.jsx(Ct.StrictMode,{children:Me.jsx(Jw,{})}));
