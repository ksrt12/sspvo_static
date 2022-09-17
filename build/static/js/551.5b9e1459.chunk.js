/*! For license information please see 551.5b9e1459.chunk.js.LICENSE.txt */
(self.webpackChunksspvo=self.webpackChunksspvo||[]).push([[551],{678:function(t,e,r){"use strict";r(791);var s=r(184);e.Z=function(t){var e=t.func,r=t.column,i=t.p,o=i.id,h=i.loading,a=i.disabled,n=i.name,u=i.ready,c=i.url,f=i.fileName;return(0,s.jsxs)("div",{className:"between".concat(r?" column":""),children:[(0,s.jsx)("button",{id:o,disabled:a,onClick:e,children:n}),h&&(0,s.jsx)("span",{className:"loader"}),u&&(0,s.jsx)("a",{href:c,download:f,children:f})]})}},389:function(t,e,r){"use strict";var s=r(885),i=r(791),o=r(522);e.Z=function(t,e){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],h=(0,i.useState)(!1),a=(0,s.Z)(h,2),n=a[0],u=a[1],c=(0,i.useState)(e),f=(0,s.Z)(c,2),l=f[0],H=f[1],_=(0,i.useState)(""),S=(0,s.Z)(_,2),p=S[0],d=S[1],A=(0,i.useState)(""),E=(0,s.Z)(A,2),R=E[0],C=E[1],y=(0,i.useState)(r),b=(0,s.Z)(y,2),v=b[0],X=b[1],w=(0,i.useState)(!1),m=(0,s.Z)(w,2),k=m[0],x=m[1],O=(0,i.useCallback)((function(t){var e=(0,s.Z)(t,2),r=e[0],i=e[1];d(r),C(i),u(!0)}),[]),g=(0,i.useCallback)((function(){return u(!1)}),[]),B=(0,i.useCallback)((function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];X(!0),x(t&&!0)}),[]),T=(0,i.useCallback)((function(){X(!1),x(!1)}),[]);return(0,o.x)((function(t){k&&t.preventDefault()})),{setName:H,update:O,remove:g,disable:B,enable:T,p:{id:t,loading:k,disabled:v,name:l,ready:n,url:R,fileName:p}}}},551:function(t,e,r){"use strict";r.r(e);var s=r(942),i=r(413),o=r(165),h=r(861),a=r(885),n=r(791),u=r(338),c=r(678),f=r(389),l=r(981),H=r(115),_=r(184);e.default=function(){var t=(0,n.useState)({login:"",password:""}),e=(0,a.Z)(t,2),r=e[0],S=e[1],p=(0,n.useState)(!1),d=(0,a.Z)(p,2),A=d[0],E=d[1],R=(0,n.useContext)(u.Z),C=(0,f.Z)("logIn","\u0412\u043e\u0439\u0442\u0438",!1),y=function(){var t=(0,h.Z)((0,o.Z)().mark((function t(e){var s,i,h,a,n;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),C.disable(),t.next=4,H.f.post("/api/login",{login:r.login,password:(0,l.sha256)(r.login.toLocaleUpperCase()+r.password)});case 4:if(!(s=t.sent).done){t.next=13;break}return i=s.user_info,h=i.name,a=i.surname,n=i.patronymic,t.next=9,H.f.post("/api/user/current-org",{id:s.organizations_list[0].id});case 9:t.sent.done&&R.login("".concat(h," ").concat(n," ").concat(a),s.organizations_list[0].short_title),t.next=15;break;case 13:E(!0),C.enable();case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(t){t.preventDefault(),E(!1),S((0,i.Z)((0,i.Z)({},r),{},(0,s.Z)({},t.target.name,t.target.value)))};return(0,_.jsxs)("div",{className:"auth",children:[(0,_.jsx)("h2",{style:{color:"white"},children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),(0,_.jsxs)("form",{className:"auth",children:[(0,_.jsx)("input",{placeholder:"\u041b\u043e\u0433\u0438\u043d",id:"login",type:"text",name:"login",autoComplete:"on",onChange:b}),(0,_.jsx)("input",{style:{marginTop:"4px"},placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",id:"password",type:"password",name:"password",autoComplete:"on",onChange:b}),A&&(0,_.jsx)("p",{style:{color:"deeppink"},children:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435!"}),(0,_.jsx)(c.Z,{p:C.p,func:y,column:!0})]})]})}},981:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;(function(){"use strict";var ERROR="input is invalid type",WINDOW="object"===typeof window,root=WINDOW?window:{};root.JS_SHA256_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"===typeof self,NODE_JS=!root.JS_SHA256_NO_NODE_JS&&"object"===typeof process&&process.versions&&process.versions.node;NODE_JS?root=__webpack_require__.g:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_SHA256_NO_COMMON_JS&&module.exports,AMD=__webpack_require__.amdO,ARRAY_BUFFER=!root.JS_SHA256_NO_ARRAY_BUFFER&&"undefined"!==typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[-2147483648,8388608,32768,128],SHIFT=[24,16,8,0],K=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],OUTPUT_TYPES=["hex","array","digest","arrayBuffer"],blocks=[];!root.JS_SHA256_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!ARRAY_BUFFER||!root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"===typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var createOutputMethod=function(t,e){return function(r){return new Sha256(e,!0).update(r)[t]()}},createMethod=function(t){var e=createOutputMethod("hex",t);NODE_JS&&(e=nodeWrap(e,t)),e.create=function(){return new Sha256(t)},e.update=function(t){return e.create().update(t)};for(var r=0;r<OUTPUT_TYPES.length;++r){var s=OUTPUT_TYPES[r];e[s]=createOutputMethod(s,t)}return e},nodeWrap=function nodeWrap(method,is224){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),algorithm=is224?"sha224":"sha256",nodeMethod=function(t){if("string"===typeof t)return crypto.createHash(algorithm).update(t,"utf8").digest("hex");if(null===t||void 0===t)throw new Error(ERROR);return t.constructor===ArrayBuffer&&(t=new Uint8Array(t)),Array.isArray(t)||ArrayBuffer.isView(t)||t.constructor===Buffer?crypto.createHash(algorithm).update(new Buffer(t)).digest("hex"):method(t)};return nodeMethod},createHmacOutputMethod=function(t,e){return function(r,s){return new HmacSha256(r,e,!0).update(s)[t]()}},createHmacMethod=function(t){var e=createHmacOutputMethod("hex",t);e.create=function(e){return new HmacSha256(e,t)},e.update=function(t,r){return e.create(t).update(r)};for(var r=0;r<OUTPUT_TYPES.length;++r){var s=OUTPUT_TYPES[r];e[s]=createHmacOutputMethod(s,t)}return e};function Sha256(t,e){e?(blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=t}function HmacSha256(t,e,r){var s,i=typeof t;if("string"===i){var o,h=[],a=t.length,n=0;for(s=0;s<a;++s)(o=t.charCodeAt(s))<128?h[n++]=o:o<2048?(h[n++]=192|o>>6,h[n++]=128|63&o):o<55296||o>=57344?(h[n++]=224|o>>12,h[n++]=128|o>>6&63,h[n++]=128|63&o):(o=65536+((1023&o)<<10|1023&t.charCodeAt(++s)),h[n++]=240|o>>18,h[n++]=128|o>>12&63,h[n++]=128|o>>6&63,h[n++]=128|63&o);t=h}else{if("object"!==i)throw new Error(ERROR);if(null===t)throw new Error(ERROR);if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(t)))throw new Error(ERROR)}t.length>64&&(t=new Sha256(e,!0).update(t).array());var u=[],c=[];for(s=0;s<64;++s){var f=t[s]||0;u[s]=92^f,c[s]=54^f}Sha256.call(this,e,r),this.update(c),this.oKeyPad=u,this.inner=!0,this.sharedMemory=r}Sha256.prototype.update=function(t){if(!this.finalized){var e,r=typeof t;if("string"!==r){if("object"!==r)throw new Error(ERROR);if(null===t)throw new Error(ERROR);if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(t)))throw new Error(ERROR);e=!0}for(var s,i,o=0,h=t.length,a=this.blocks;o<h;){if(this.hashed&&(this.hashed=!1,a[0]=this.block,a[16]=a[1]=a[2]=a[3]=a[4]=a[5]=a[6]=a[7]=a[8]=a[9]=a[10]=a[11]=a[12]=a[13]=a[14]=a[15]=0),e)for(i=this.start;o<h&&i<64;++o)a[i>>2]|=t[o]<<SHIFT[3&i++];else for(i=this.start;o<h&&i<64;++o)(s=t.charCodeAt(o))<128?a[i>>2]|=s<<SHIFT[3&i++]:s<2048?(a[i>>2]|=(192|s>>6)<<SHIFT[3&i++],a[i>>2]|=(128|63&s)<<SHIFT[3&i++]):s<55296||s>=57344?(a[i>>2]|=(224|s>>12)<<SHIFT[3&i++],a[i>>2]|=(128|s>>6&63)<<SHIFT[3&i++],a[i>>2]|=(128|63&s)<<SHIFT[3&i++]):(s=65536+((1023&s)<<10|1023&t.charCodeAt(++o)),a[i>>2]|=(240|s>>18)<<SHIFT[3&i++],a[i>>2]|=(128|s>>12&63)<<SHIFT[3&i++],a[i>>2]|=(128|s>>6&63)<<SHIFT[3&i++],a[i>>2]|=(128|63&s)<<SHIFT[3&i++]);this.lastByteIndex=i,this.bytes+=i-this.start,i>=64?(this.block=a[16],this.start=i-64,this.hash(),this.hashed=!0):this.start=i}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Sha256.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex;t[16]=this.block,t[e>>2]|=EXTRA[3&e],this.block=t[16],e>=56&&(this.hashed||this.hash(),t[0]=this.block,t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.hBytes<<3|this.bytes>>>29,t[15]=this.bytes<<3,this.hash()}},Sha256.prototype.hash=function(){var t,e,r,s,i,o,h,a,n,u=this.h0,c=this.h1,f=this.h2,l=this.h3,H=this.h4,_=this.h5,S=this.h6,p=this.h7,d=this.blocks;for(t=16;t<64;++t)e=((i=d[t-15])>>>7|i<<25)^(i>>>18|i<<14)^i>>>3,r=((i=d[t-2])>>>17|i<<15)^(i>>>19|i<<13)^i>>>10,d[t]=d[t-16]+e+d[t-7]+r<<0;for(n=c&f,t=0;t<64;t+=4)this.first?(this.is224?(o=300032,p=(i=d[0]-1413257819)-150054599<<0,l=i+24177077<<0):(o=704751109,p=(i=d[0]-210244248)-1521486534<<0,l=i+143694565<<0),this.first=!1):(e=(u>>>2|u<<30)^(u>>>13|u<<19)^(u>>>22|u<<10),s=(o=u&c)^u&f^n,p=l+(i=p+(r=(H>>>6|H<<26)^(H>>>11|H<<21)^(H>>>25|H<<7))+(H&_^~H&S)+K[t]+d[t])<<0,l=i+(e+s)<<0),e=(l>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10),s=(h=l&u)^l&c^o,S=f+(i=S+(r=(p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+(p&H^~p&_)+K[t+1]+d[t+1])<<0,e=((f=i+(e+s)<<0)>>>2|f<<30)^(f>>>13|f<<19)^(f>>>22|f<<10),s=(a=f&l)^f&u^h,_=c+(i=_+(r=(S>>>6|S<<26)^(S>>>11|S<<21)^(S>>>25|S<<7))+(S&p^~S&H)+K[t+2]+d[t+2])<<0,e=((c=i+(e+s)<<0)>>>2|c<<30)^(c>>>13|c<<19)^(c>>>22|c<<10),s=(n=c&f)^c&l^a,H=u+(i=H+(r=(_>>>6|_<<26)^(_>>>11|_<<21)^(_>>>25|_<<7))+(_&S^~_&p)+K[t+3]+d[t+3])<<0,u=i+(e+s)<<0;this.h0=this.h0+u<<0,this.h1=this.h1+c<<0,this.h2=this.h2+f<<0,this.h3=this.h3+l<<0,this.h4=this.h4+H<<0,this.h5=this.h5+_<<0,this.h6=this.h6+S<<0,this.h7=this.h7+p<<0},Sha256.prototype.hex=function(){this.finalize();var t=this.h0,e=this.h1,r=this.h2,s=this.h3,i=this.h4,o=this.h5,h=this.h6,a=this.h7,n=HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[r>>28&15]+HEX_CHARS[r>>24&15]+HEX_CHARS[r>>20&15]+HEX_CHARS[r>>16&15]+HEX_CHARS[r>>12&15]+HEX_CHARS[r>>8&15]+HEX_CHARS[r>>4&15]+HEX_CHARS[15&r]+HEX_CHARS[s>>28&15]+HEX_CHARS[s>>24&15]+HEX_CHARS[s>>20&15]+HEX_CHARS[s>>16&15]+HEX_CHARS[s>>12&15]+HEX_CHARS[s>>8&15]+HEX_CHARS[s>>4&15]+HEX_CHARS[15&s]+HEX_CHARS[i>>28&15]+HEX_CHARS[i>>24&15]+HEX_CHARS[i>>20&15]+HEX_CHARS[i>>16&15]+HEX_CHARS[i>>12&15]+HEX_CHARS[i>>8&15]+HEX_CHARS[i>>4&15]+HEX_CHARS[15&i]+HEX_CHARS[o>>28&15]+HEX_CHARS[o>>24&15]+HEX_CHARS[o>>20&15]+HEX_CHARS[o>>16&15]+HEX_CHARS[o>>12&15]+HEX_CHARS[o>>8&15]+HEX_CHARS[o>>4&15]+HEX_CHARS[15&o]+HEX_CHARS[h>>28&15]+HEX_CHARS[h>>24&15]+HEX_CHARS[h>>20&15]+HEX_CHARS[h>>16&15]+HEX_CHARS[h>>12&15]+HEX_CHARS[h>>8&15]+HEX_CHARS[h>>4&15]+HEX_CHARS[15&h];return this.is224||(n+=HEX_CHARS[a>>28&15]+HEX_CHARS[a>>24&15]+HEX_CHARS[a>>20&15]+HEX_CHARS[a>>16&15]+HEX_CHARS[a>>12&15]+HEX_CHARS[a>>8&15]+HEX_CHARS[a>>4&15]+HEX_CHARS[15&a]),n},Sha256.prototype.toString=Sha256.prototype.hex,Sha256.prototype.digest=function(){this.finalize();var t=this.h0,e=this.h1,r=this.h2,s=this.h3,i=this.h4,o=this.h5,h=this.h6,a=this.h7,n=[t>>24&255,t>>16&255,t>>8&255,255&t,e>>24&255,e>>16&255,e>>8&255,255&e,r>>24&255,r>>16&255,r>>8&255,255&r,s>>24&255,s>>16&255,s>>8&255,255&s,i>>24&255,i>>16&255,i>>8&255,255&i,o>>24&255,o>>16&255,o>>8&255,255&o,h>>24&255,h>>16&255,h>>8&255,255&h];return this.is224||n.push(a>>24&255,a>>16&255,a>>8&255,255&a),n},Sha256.prototype.array=Sha256.prototype.digest,Sha256.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(this.is224?28:32),e=new DataView(t);return e.setUint32(0,this.h0),e.setUint32(4,this.h1),e.setUint32(8,this.h2),e.setUint32(12,this.h3),e.setUint32(16,this.h4),e.setUint32(20,this.h5),e.setUint32(24,this.h6),this.is224||e.setUint32(28,this.h7),t},HmacSha256.prototype=new Sha256,HmacSha256.prototype.finalize=function(){if(Sha256.prototype.finalize.call(this),this.inner){this.inner=!1;var t=this.array();Sha256.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(t),Sha256.prototype.finalize.call(this)}};var exports=createMethod();exports.sha256=exports,exports.sha224=createMethod(!0),exports.sha256.hmac=createHmacMethod(),exports.sha224.hmac=createHmacMethod(!0),COMMON_JS?module.exports=exports:(root.sha256=exports.sha256,root.sha224=exports.sha224,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return exports}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))})()},522:function(t,e,r){"use strict";r.d(e,{x:function(){return o}});var s=r(791),i="Invariant failed";var o=function(t){null!=t&&"function"!==typeof t&&function(t,e){if(!t)throw new Error(i)}(!1);var e=(0,s.useRef)();(0,s.useEffect)((function(){e.current=function(e){var r=null===t||void 0===t?void 0:t(e);return"string"===typeof r?e.returnValue=r:e.defaultPrevented?e.returnValue="":void 0}}),[t]),(0,s.useEffect)((function(){var t=function(t){return e.current(t)};return window.addEventListener("beforeunload",t),function(){window.removeEventListener("beforeunload",t)}}),[])}}}]);
//# sourceMappingURL=551.5b9e1459.chunk.js.map