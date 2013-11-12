/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);

/*!
 * jQuery UI 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(a,d){function c(h,g){var i=h.nodeName.toLowerCase();if("area"===i){g=h.parentNode;i=g.name;if(!h.href||!i||g.nodeName.toLowerCase()!=="map")return false;h=a("img[usemap=#"+i+"]")[0];return!!h&&e(h)}return(/input|select|textarea|button|object/.test(i)?!h.disabled:"a"==i?h.href||g:g)&&e(h)}function e(h){return!a(h).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}a.ui=a.ui||{};if(!a.ui.version){a.extend(a.ui,{version:"1.8.16",
keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});a.fn.extend({propAttr:a.fn.prop||a.fn.attr,_focus:a.fn.focus,focus:function(h,g){return typeof h==="number"?this.each(function(){var i=
this;setTimeout(function(){a(i).focus();g&&g.call(i)},h)}):this._focus.apply(this,arguments)},scrollParent:function(){var h;h=a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,
"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!h.length?a(document):h},zIndex:function(h){if(h!==d)return this.css("zIndex",h);if(this.length){h=a(this[0]);for(var g;h.length&&h[0]!==document;){g=h.css("position");if(g==="absolute"||g==="relative"||g==="fixed"){g=parseInt(h.css("zIndex"),10);if(!isNaN(g)&&g!==0)return g}h=h.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":
"mousedown")+".ui-disableSelection",function(h){h.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});a.each(["Width","Height"],function(h,g){function i(l,o,n,k){a.each(b,function(){o-=parseFloat(a.curCSS(l,"padding"+this,true))||0;if(n)o-=parseFloat(a.curCSS(l,"border"+this+"Width",true))||0;if(k)o-=parseFloat(a.curCSS(l,"margin"+this,true))||0});return o}var b=g==="Width"?["Left","Right"]:["Top","Bottom"],f=g.toLowerCase(),j={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,
outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+g]=function(l){if(l===d)return j["inner"+g].call(this);return this.each(function(){a(this).css(f,i(this,l)+"px")})};a.fn["outer"+g]=function(l,o){if(typeof l!=="number")return j["outer"+g].call(this,l);return this.each(function(){a(this).css(f,i(this,l,true,o)+"px")})}});a.extend(a.expr[":"],{data:function(h,g,i){return!!a.data(h,i[3])},focusable:function(h){return c(h,!isNaN(a.attr(h,"tabindex")))},tabbable:function(h){var g=a.attr(h,
"tabindex"),i=isNaN(g);return(i||g>=0)&&c(h,!i)}});a(function(){var h=document.body,g=h.appendChild(g=document.createElement("div"));a.extend(g.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});a.support.minHeight=g.offsetHeight===100;a.support.selectstart="onselectstart"in g;h.removeChild(g).style.display="none"});a.extend(a.ui,{plugin:{add:function(h,g,i){h=a.ui[h].prototype;for(var b in i){h.plugins[b]=h.plugins[b]||[];h.plugins[b].push([g,i[b]])}},call:function(h,g,i){if((g=h.plugins[g])&&
h.element[0].parentNode)for(var b=0;b<g.length;b++)h.options[g[b][0]]&&g[b][1].apply(h.element,i)}},contains:function(h,g){return document.compareDocumentPosition?h.compareDocumentPosition(g)&16:h!==g&&h.contains(g)},hasScroll:function(h,g){if(a(h).css("overflow")==="hidden")return false;g=g&&g==="left"?"scrollLeft":"scrollTop";var i=false;if(h[g]>0)return true;h[g]=1;i=h[g]>0;h[g]=0;return i},isOverAxis:function(h,g,i){return h>g&&h<g+i},isOver:function(h,g,i,b,f,j){return a.ui.isOverAxis(h,i,f)&&
a.ui.isOverAxis(g,b,j)}})}})(jQuery);
(function(a,d){if(a.cleanData){var c=a.cleanData;a.cleanData=function(h){for(var g=0,i;(i=h[g])!=null;g++)try{a(i).triggerHandler("remove")}catch(b){}c(h)}}else{var e=a.fn.remove;a.fn.remove=function(h,g){return this.each(function(){if(!g)if(!h||a.filter(h,[this]).length)a("*",this).add([this]).each(function(){try{a(this).triggerHandler("remove")}catch(i){}});return e.call(a(this),h,g)})}}a.widget=function(h,g,i){var b=h.split(".")[0],f;h=h.split(".")[1];f=b+"-"+h;if(!i){i=g;g=a.Widget}a.expr[":"][f]=
function(j){return!!a.data(j,h)};a[b]=a[b]||{};a[b][h]=function(j,l){arguments.length&&this._createWidget(j,l)};g=new g;g.options=a.extend(true,{},g.options);a[b][h].prototype=a.extend(true,g,{namespace:b,widgetName:h,widgetEventPrefix:a[b][h].prototype.widgetEventPrefix||h,widgetBaseClass:f},i);a.widget.bridge(h,a[b][h])};a.widget.bridge=function(h,g){a.fn[h]=function(i){var b=typeof i==="string",f=Array.prototype.slice.call(arguments,1),j=this;i=!b&&f.length?a.extend.apply(null,[true,i].concat(f)):
i;if(b&&i.charAt(0)==="_")return j;b?this.each(function(){var l=a.data(this,h),o=l&&a.isFunction(l[i])?l[i].apply(l,f):l;if(o!==l&&o!==d){j=o;return false}}):this.each(function(){var l=a.data(this,h);l?l.option(i||{})._init():a.data(this,h,new g(i,this))});return j}};a.Widget=function(h,g){arguments.length&&this._createWidget(h,g)};a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(h,g){a.data(g,this.widgetName,this);this.element=a(g);this.options=
a.extend(true,{},this.options,this._getCreateOptions(),h);var i=this;this.element.bind("remove."+this.widgetName,function(){i.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+
"-disabled ui-state-disabled")},widget:function(){return this.element},option:function(h,g){var i=h;if(arguments.length===0)return a.extend({},this.options);if(typeof h==="string"){if(g===d)return this.options[h];i={};i[h]=g}this._setOptions(i);return this},_setOptions:function(h){var g=this;a.each(h,function(i,b){g._setOption(i,b)});return this},_setOption:function(h,g){this.options[h]=g;if(h==="disabled")this.widget()[g?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",
g);return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(h,g,i){var b=this.options[h];g=a.Event(g);g.type=(h===this.widgetEventPrefix?h:this.widgetEventPrefix+h).toLowerCase();i=i||{};if(g.originalEvent){h=a.event.props.length;for(var f;h;){f=a.event.props[--h];g[f]=g.originalEvent[f]}}this.element.trigger(g,i);return!(a.isFunction(b)&&b.call(this.element[0],g,i)===false||g.isDefaultPrevented())}}})(jQuery);
(function(a){var d=false;a(document).mouseup(function(){d=false});a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var c=this;this.element.bind("mousedown."+this.widgetName,function(e){return c._mouseDown(e)}).bind("click."+this.widgetName,function(e){if(true===a.data(e.target,c.widgetName+".preventClickEvent")){a.removeData(e.target,c.widgetName+".preventClickEvent");e.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+
this.widgetName)},_mouseDown:function(c){if(!d){this._mouseStarted&&this._mouseUp(c);this._mouseDownEvent=c;var e=this,h=c.which==1,g=typeof this.options.cancel=="string"&&c.target.nodeName?a(c.target).closest(this.options.cancel).length:false;if(!h||g||!this._mouseCapture(c))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){e.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(c)&&this._mouseDelayMet(c)){this._mouseStarted=
this._mouseStart(c)!==false;if(!this._mouseStarted){c.preventDefault();return true}}true===a.data(c.target,this.widgetName+".preventClickEvent")&&a.removeData(c.target,this.widgetName+".preventClickEvent");this._mouseMoveDelegate=function(i){return e._mouseMove(i)};this._mouseUpDelegate=function(i){return e._mouseUp(i)};a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);c.preventDefault();return d=true}},_mouseMove:function(c){if(a.browser.msie&&
!(document.documentMode>=9)&&!c.button)return this._mouseUp(c);if(this._mouseStarted){this._mouseDrag(c);return c.preventDefault()}if(this._mouseDistanceMet(c)&&this._mouseDelayMet(c))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,c)!==false)?this._mouseDrag(c):this._mouseUp(c);return!this._mouseStarted},_mouseUp:function(c){a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=
false;c.target==this._mouseDownEvent.target&&a.data(c.target,this.widgetName+".preventClickEvent",true);this._mouseStop(c)}return false},_mouseDistanceMet:function(c){return Math.max(Math.abs(this._mouseDownEvent.pageX-c.pageX),Math.abs(this._mouseDownEvent.pageY-c.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);
(function(a){a.widget("ui.draggable",a.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper==
"original"&&!/^(?:r|a|f)/.test(this.element.css("position")))this.element[0].style.position="relative";this.options.addClasses&&this.element.addClass("ui-draggable");this.options.disabled&&this.element.addClass("ui-draggable-disabled");this._mouseInit()},destroy:function(){if(this.element.data("draggable")){this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy();return this}},_mouseCapture:function(d){var c=
this.options;if(this.helper||c.disabled||a(d.target).is(".ui-resizable-handle"))return false;this.handle=this._getHandle(d);if(!this.handle)return false;if(c.iframeFix)a(c.iframeFix===true?"iframe":c.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1E3}).css(a(this).offset()).appendTo("body")});return true},_mouseStart:function(d){var c=this.options;
this.helper=this._createHelper(d);this._cacheHelperProportions();if(a.ui.ddmanager)a.ui.ddmanager.current=this;this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};a.extend(this.offset,{click:{left:d.pageX-this.offset.left,top:d.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this.position=this._generatePosition(d);this.originalPageX=d.pageX;this.originalPageY=d.pageY;c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt);c.containment&&this._setContainment();if(this._trigger("start",d)===false){this._clear();return false}this._cacheHelperProportions();a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,d);this.helper.addClass("ui-draggable-dragging");this._mouseDrag(d,true);a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,d);return true},
_mouseDrag:function(d,c){this.position=this._generatePosition(d);this.positionAbs=this._convertPositionTo("absolute");if(!c){c=this._uiHash();if(this._trigger("drag",d,c)===false){this._mouseUp({});return false}this.position=c.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";a.ui.ddmanager&&a.ui.ddmanager.drag(this,d);return false},_mouseStop:function(d){var c=
false;if(a.ui.ddmanager&&!this.options.dropBehaviour)c=a.ui.ddmanager.drop(this,d);if(this.dropped){c=this.dropped;this.dropped=false}if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original")return false;if(this.options.revert=="invalid"&&!c||this.options.revert=="valid"&&c||this.options.revert===true||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,c)){var e=this;a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,
10),function(){e._trigger("stop",d)!==false&&e._clear()})}else this._trigger("stop",d)!==false&&this._clear();return false},_mouseUp:function(d){this.options.iframeFix===true&&a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)});a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,d);return a.ui.mouse.prototype._mouseUp.call(this,d)},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();return this},_getHandle:function(d){var c=!this.options.handle||
!a(this.options.handle,this.element).length?true:false;a(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==d.target)c=true});return c},_createHelper:function(d){var c=this.options;d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[d])):c.helper=="clone"?this.element.clone().removeAttr("id"):this.element;d.parents("body").length||d.appendTo(c.appendTo=="parent"?this.element[0].parentNode:c.appendTo);d[0]!=this.element[0]&&!/(fixed|absolute)/.test(d.css("position"))&&
d.css("position","absolute");return d},_adjustOffsetFromHelper:function(d){if(typeof d=="string")d=d.split(" ");if(a.isArray(d))d={left:+d[0],top:+d[1]||0};if("left"in d)this.offset.click.left=d.left+this.margins.left;if("right"in d)this.offset.click.left=this.helperProportions.width-d.right+this.margins.left;if("top"in d)this.offset.click.top=d.top+this.margins.top;if("bottom"in d)this.offset.click.top=this.helperProportions.height-d.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=
this.helper.offsetParent();var d=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])){d.left+=this.scrollParent.scrollLeft();d.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)d={top:0,left:0};return{top:d.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:d.left+(parseInt(this.offsetParent.css("borderLeftWidth"),
10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var d=this.element.position();return{top:d.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:d.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),
10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var d=this.options;if(d.containment=="parent")d.containment=this.helper[0].parentNode;if(d.containment=="document"||d.containment=="window")this.containment=[d.containment=="document"?0:a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,d.containment=="document"?0:a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,
(d.containment=="document"?0:a(window).scrollLeft())+a(d.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(d.containment=="document"?0:a(window).scrollTop())+(a(d.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(d.containment)&&d.containment.constructor!=Array){d=a(d.containment);var c=d[0];if(c){d.offset();var e=a(c).css("overflow")!=
"hidden";this.containment=[(parseInt(a(c).css("borderLeftWidth"),10)||0)+(parseInt(a(c).css("paddingLeft"),10)||0),(parseInt(a(c).css("borderTopWidth"),10)||0)+(parseInt(a(c).css("paddingTop"),10)||0),(e?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(a(c).css("borderLeftWidth"),10)||0)-(parseInt(a(c).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(a(c).css("borderTopWidth"),
10)||0)-(parseInt(a(c).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];this.relative_container=d}}else if(d.containment.constructor==Array)this.containment=d.containment},_convertPositionTo:function(d,c){if(!c)c=this.position;d=d=="absolute"?1:-1;var e=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,h=/(html|body)/i.test(e[0].tagName);return{top:c.top+
this.offset.relative.top*d+this.offset.parent.top*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():h?0:e.scrollTop())*d),left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():h?0:e.scrollLeft())*d)}},_generatePosition:function(d){var c=this.options,e=this.cssPosition=="absolute"&&
!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,h=/(html|body)/i.test(e[0].tagName),g=d.pageX,i=d.pageY;if(this.originalPosition){var b;if(this.containment){if(this.relative_container){b=this.relative_container.offset();b=[this.containment[0]+b.left,this.containment[1]+b.top,this.containment[2]+b.left,this.containment[3]+b.top]}else b=this.containment;if(d.pageX-this.offset.click.left<b[0])g=b[0]+this.offset.click.left;
if(d.pageY-this.offset.click.top<b[1])i=b[1]+this.offset.click.top;if(d.pageX-this.offset.click.left>b[2])g=b[2]+this.offset.click.left;if(d.pageY-this.offset.click.top>b[3])i=b[3]+this.offset.click.top}if(c.grid){i=c.grid[1]?this.originalPageY+Math.round((i-this.originalPageY)/c.grid[1])*c.grid[1]:this.originalPageY;i=b?!(i-this.offset.click.top<b[1]||i-this.offset.click.top>b[3])?i:!(i-this.offset.click.top<b[1])?i-c.grid[1]:i+c.grid[1]:i;g=c.grid[0]?this.originalPageX+Math.round((g-this.originalPageX)/
c.grid[0])*c.grid[0]:this.originalPageX;g=b?!(g-this.offset.click.left<b[0]||g-this.offset.click.left>b[2])?g:!(g-this.offset.click.left<b[0])?g-c.grid[0]:g+c.grid[0]:g}}return{top:i-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():h?0:e.scrollTop()),left:g-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&a.browser.version<
526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():h?0:e.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove();this.helper=null;this.cancelHelperRemoval=false},_trigger:function(d,c,e){e=e||this._uiHash();a.ui.plugin.call(this,d,[c,e]);if(d=="drag")this.positionAbs=this._convertPositionTo("absolute");return a.Widget.prototype._trigger.call(this,d,c,
e)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});a.extend(a.ui.draggable,{version:"1.8.16"});a.ui.plugin.add("draggable","connectToSortable",{start:function(d,c){var e=a(this).data("draggable"),h=e.options,g=a.extend({},c,{item:e.element});e.sortables=[];a(h.connectToSortable).each(function(){var i=a.data(this,"sortable");if(i&&!i.options.disabled){e.sortables.push({instance:i,shouldRevert:i.options.revert});
i.refreshPositions();i._trigger("activate",d,g)}})},stop:function(d,c){var e=a(this).data("draggable"),h=a.extend({},c,{item:e.element});a.each(e.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;e.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert)this.instance.options.revert=true;this.instance._mouseStop(d);this.instance.options.helper=this.instance.options._helper;e.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})}else{this.instance.cancelHelperRemoval=
false;this.instance._trigger("deactivate",d,h)}})},drag:function(d,c){var e=a(this).data("draggable"),h=this;a.each(e.sortables,function(){this.instance.positionAbs=e.positionAbs;this.instance.helperProportions=e.helperProportions;this.instance.offset.click=e.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=a(h).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",true);
this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return c.helper[0]};d.target=this.instance.currentItem[0];this.instance._mouseCapture(d,true);this.instance._mouseStart(d,true,true);this.instance.offset.click.top=e.offset.click.top;this.instance.offset.click.left=e.offset.click.left;this.instance.offset.parent.left-=e.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=e.offset.parent.top-this.instance.offset.parent.top;
e._trigger("toSortable",d);e.dropped=this.instance.element;e.currentItem=e.element;this.instance.fromOutside=e}this.instance.currentItem&&this.instance._mouseDrag(d)}else if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",d,this.instance._uiHash(this.instance));this.instance._mouseStop(d,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();this.instance.placeholder&&
this.instance.placeholder.remove();e._trigger("fromSortable",d);e.dropped=false}})}});a.ui.plugin.add("draggable","cursor",{start:function(){var d=a("body"),c=a(this).data("draggable").options;if(d.css("cursor"))c._cursor=d.css("cursor");d.css("cursor",c.cursor)},stop:function(){var d=a(this).data("draggable").options;d._cursor&&a("body").css("cursor",d._cursor)}});a.ui.plugin.add("draggable","opacity",{start:function(d,c){d=a(c.helper);c=a(this).data("draggable").options;if(d.css("opacity"))c._opacity=
d.css("opacity");d.css("opacity",c.opacity)},stop:function(d,c){d=a(this).data("draggable").options;d._opacity&&a(c.helper).css("opacity",d._opacity)}});a.ui.plugin.add("draggable","scroll",{start:function(){var d=a(this).data("draggable");if(d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML")d.overflowOffset=d.scrollParent.offset()},drag:function(d){var c=a(this).data("draggable"),e=c.options,h=false;if(c.scrollParent[0]!=document&&c.scrollParent[0].tagName!="HTML"){if(!e.axis||e.axis!=
"x")if(c.overflowOffset.top+c.scrollParent[0].offsetHeight-d.pageY<e.scrollSensitivity)c.scrollParent[0].scrollTop=h=c.scrollParent[0].scrollTop+e.scrollSpeed;else if(d.pageY-c.overflowOffset.top<e.scrollSensitivity)c.scrollParent[0].scrollTop=h=c.scrollParent[0].scrollTop-e.scrollSpeed;if(!e.axis||e.axis!="y")if(c.overflowOffset.left+c.scrollParent[0].offsetWidth-d.pageX<e.scrollSensitivity)c.scrollParent[0].scrollLeft=h=c.scrollParent[0].scrollLeft+e.scrollSpeed;else if(d.pageX-c.overflowOffset.left<
e.scrollSensitivity)c.scrollParent[0].scrollLeft=h=c.scrollParent[0].scrollLeft-e.scrollSpeed}else{if(!e.axis||e.axis!="x")if(d.pageY-a(document).scrollTop()<e.scrollSensitivity)h=a(document).scrollTop(a(document).scrollTop()-e.scrollSpeed);else if(a(window).height()-(d.pageY-a(document).scrollTop())<e.scrollSensitivity)h=a(document).scrollTop(a(document).scrollTop()+e.scrollSpeed);if(!e.axis||e.axis!="y")if(d.pageX-a(document).scrollLeft()<e.scrollSensitivity)h=a(document).scrollLeft(a(document).scrollLeft()-
e.scrollSpeed);else if(a(window).width()-(d.pageX-a(document).scrollLeft())<e.scrollSensitivity)h=a(document).scrollLeft(a(document).scrollLeft()+e.scrollSpeed)}h!==false&&a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(c,d)}});a.ui.plugin.add("draggable","snap",{start:function(){var d=a(this).data("draggable"),c=d.options;d.snapElements=[];a(c.snap.constructor!=String?c.snap.items||":data(draggable)":c.snap).each(function(){var e=a(this),h=e.offset();this!=d.element[0]&&d.snapElements.push({item:this,
width:e.outerWidth(),height:e.outerHeight(),top:h.top,left:h.left})})},drag:function(d,c){for(var e=a(this).data("draggable"),h=e.options,g=h.snapTolerance,i=c.offset.left,b=i+e.helperProportions.width,f=c.offset.top,j=f+e.helperProportions.height,l=e.snapElements.length-1;l>=0;l--){var o=e.snapElements[l].left,n=o+e.snapElements[l].width,k=e.snapElements[l].top,m=k+e.snapElements[l].height;if(o-g<i&&i<n+g&&k-g<f&&f<m+g||o-g<i&&i<n+g&&k-g<j&&j<m+g||o-g<b&&b<n+g&&k-g<f&&f<m+g||o-g<b&&b<n+g&&k-g<j&&
j<m+g){if(h.snapMode!="inner"){var p=Math.abs(k-j)<=g,q=Math.abs(m-f)<=g,s=Math.abs(o-b)<=g,r=Math.abs(n-i)<=g;if(p)c.position.top=e._convertPositionTo("relative",{top:k-e.helperProportions.height,left:0}).top-e.margins.top;if(q)c.position.top=e._convertPositionTo("relative",{top:m,left:0}).top-e.margins.top;if(s)c.position.left=e._convertPositionTo("relative",{top:0,left:o-e.helperProportions.width}).left-e.margins.left;if(r)c.position.left=e._convertPositionTo("relative",{top:0,left:n}).left-e.margins.left}var u=
p||q||s||r;if(h.snapMode!="outer"){p=Math.abs(k-f)<=g;q=Math.abs(m-j)<=g;s=Math.abs(o-i)<=g;r=Math.abs(n-b)<=g;if(p)c.position.top=e._convertPositionTo("relative",{top:k,left:0}).top-e.margins.top;if(q)c.position.top=e._convertPositionTo("relative",{top:m-e.helperProportions.height,left:0}).top-e.margins.top;if(s)c.position.left=e._convertPositionTo("relative",{top:0,left:o}).left-e.margins.left;if(r)c.position.left=e._convertPositionTo("relative",{top:0,left:n-e.helperProportions.width}).left-e.margins.left}if(!e.snapElements[l].snapping&&
(p||q||s||r||u))e.options.snap.snap&&e.options.snap.snap.call(e.element,d,a.extend(e._uiHash(),{snapItem:e.snapElements[l].item}));e.snapElements[l].snapping=p||q||s||r||u}else{e.snapElements[l].snapping&&e.options.snap.release&&e.options.snap.release.call(e.element,d,a.extend(e._uiHash(),{snapItem:e.snapElements[l].item}));e.snapElements[l].snapping=false}}}});a.ui.plugin.add("draggable","stack",{start:function(){var d=a(this).data("draggable").options;d=a.makeArray(a(d.stack)).sort(function(e,h){return(parseInt(a(e).css("zIndex"),
10)||0)-(parseInt(a(h).css("zIndex"),10)||0)});if(d.length){var c=parseInt(d[0].style.zIndex)||0;a(d).each(function(e){this.style.zIndex=c+e});this[0].style.zIndex=c+d.length}}});a.ui.plugin.add("draggable","zIndex",{start:function(d,c){d=a(c.helper);c=a(this).data("draggable").options;if(d.css("zIndex"))c._zIndex=d.css("zIndex");d.css("zIndex",c.zIndex)},stop:function(d,c){d=a(this).data("draggable").options;d._zIndex&&a(c.helper).css("zIndex",d._zIndex)}})})(jQuery);
(function(a){a.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var d=this.options,c=d.accept;this.isover=0;this.isout=1;this.accept=a.isFunction(c)?c:function(e){return e.is(c)};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};a.ui.ddmanager.droppables[d.scope]=a.ui.ddmanager.droppables[d.scope]||[];a.ui.ddmanager.droppables[d.scope].push(this);
d.addClasses&&this.element.addClass("ui-droppable")},destroy:function(){for(var d=a.ui.ddmanager.droppables[this.options.scope],c=0;c<d.length;c++)d[c]==this&&d.splice(c,1);this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");return this},_setOption:function(d,c){if(d=="accept")this.accept=a.isFunction(c)?c:function(e){return e.is(c)};a.Widget.prototype._setOption.apply(this,arguments)},_activate:function(d){var c=a.ui.ddmanager.current;this.options.activeClass&&
this.element.addClass(this.options.activeClass);c&&this._trigger("activate",d,this.ui(c))},_deactivate:function(d){var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass);c&&this._trigger("deactivate",d,this.ui(c))},_over:function(d){var c=a.ui.ddmanager.current;if(!(!c||(c.currentItem||c.element)[0]==this.element[0]))if(this.accept.call(this.element[0],c.currentItem||c.element)){this.options.hoverClass&&this.element.addClass(this.options.hoverClass);
this._trigger("over",d,this.ui(c))}},_out:function(d){var c=a.ui.ddmanager.current;if(!(!c||(c.currentItem||c.element)[0]==this.element[0]))if(this.accept.call(this.element[0],c.currentItem||c.element)){this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("out",d,this.ui(c))}},_drop:function(d,c){var e=c||a.ui.ddmanager.current;if(!e||(e.currentItem||e.element)[0]==this.element[0])return false;var h=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var g=
a.data(this,"droppable");if(g.options.greedy&&!g.options.disabled&&g.options.scope==e.options.scope&&g.accept.call(g.element[0],e.currentItem||e.element)&&a.ui.intersect(e,a.extend(g,{offset:g.element.offset()}),g.options.tolerance)){h=true;return false}});if(h)return false;if(this.accept.call(this.element[0],e.currentItem||e.element)){this.options.activeClass&&this.element.removeClass(this.options.activeClass);this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("drop",
d,this.ui(e));return this.element}return false},ui:function(d){return{draggable:d.currentItem||d.element,helper:d.helper,position:d.position,offset:d.positionAbs}}});a.extend(a.ui.droppable,{version:"1.8.16"});a.ui.intersect=function(d,c,e){if(!c.offset)return false;var h=(d.positionAbs||d.position.absolute).left,g=h+d.helperProportions.width,i=(d.positionAbs||d.position.absolute).top,b=i+d.helperProportions.height,f=c.offset.left,j=f+c.proportions.width,l=c.offset.top,o=l+c.proportions.height;
switch(e){case "fit":return f<=h&&g<=j&&l<=i&&b<=o;case "intersect":return f<h+d.helperProportions.width/2&&g-d.helperProportions.width/2<j&&l<i+d.helperProportions.height/2&&b-d.helperProportions.height/2<o;case "pointer":return a.ui.isOver((d.positionAbs||d.position.absolute).top+(d.clickOffset||d.offset.click).top,(d.positionAbs||d.position.absolute).left+(d.clickOffset||d.offset.click).left,l,f,c.proportions.height,c.proportions.width);case "touch":return(i>=l&&i<=o||b>=l&&b<=o||i<l&&b>o)&&(h>=
f&&h<=j||g>=f&&g<=j||h<f&&g>j);default:return false}};a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(d,c){var e=a.ui.ddmanager.droppables[d.options.scope]||[],h=c?c.type:null,g=(d.currentItem||d.element).find(":data(droppable)").andSelf(),i=0;a:for(;i<e.length;i++)if(!(e[i].options.disabled||d&&!e[i].accept.call(e[i].element[0],d.currentItem||d.element))){for(var b=0;b<g.length;b++)if(g[b]==e[i].element[0]){e[i].proportions.height=0;continue a}e[i].visible=e[i].element.css("display")!=
"none";if(e[i].visible){h=="mousedown"&&e[i]._activate.call(e[i],c);e[i].offset=e[i].element.offset();e[i].proportions={width:e[i].element[0].offsetWidth,height:e[i].element[0].offsetHeight}}}},drop:function(d,c){var e=false;a.each(a.ui.ddmanager.droppables[d.options.scope]||[],function(){if(this.options){if(!this.options.disabled&&this.visible&&a.ui.intersect(d,this,this.options.tolerance))e=e||this._drop.call(this,c);if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],d.currentItem||
d.element)){this.isout=1;this.isover=0;this._deactivate.call(this,c)}}});return e},dragStart:function(d,c){d.element.parents(":not(body,html)").bind("scroll.droppable",function(){d.options.refreshPositions||a.ui.ddmanager.prepareOffsets(d,c)})},drag:function(d,c){d.options.refreshPositions&&a.ui.ddmanager.prepareOffsets(d,c);a.each(a.ui.ddmanager.droppables[d.options.scope]||[],function(){if(!(this.options.disabled||this.greedyChild||!this.visible)){var e=a.ui.intersect(d,this,this.options.tolerance);
if(e=!e&&this.isover==1?"isout":e&&this.isover==0?"isover":null){var h;if(this.options.greedy){var g=this.element.parents(":data(droppable):eq(0)");if(g.length){h=a.data(g[0],"droppable");h.greedyChild=e=="isover"?1:0}}if(h&&e=="isover"){h.isover=0;h.isout=1;h._out.call(h,c)}this[e]=1;this[e=="isout"?"isover":"isout"]=0;this[e=="isover"?"_over":"_out"].call(this,c);if(h&&e=="isout"){h.isout=0;h.isover=1;h._over.call(h,c)}}}})},dragStop:function(d,c){d.element.parents(":not(body,html)").unbind("scroll.droppable");
d.options.refreshPositions||a.ui.ddmanager.prepareOffsets(d,c)}}})(jQuery);
(function(a){a.widget("ui.resizable",a.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1E3},_create:function(){var e=this,h=this.options;this.element.addClass("ui-resizable");a.extend(this,{_aspectRatio:!!h.aspectRatio,aspectRatio:h.aspectRatio,originalElement:this.element,
_proportionallyResizeElements:[],_helper:h.helper||h.ghost||h.animate?h.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){/relative/.test(this.element.css("position"))&&a.browser.opera&&this.element.css({position:"relative",top:"auto",left:"auto"});this.element.wrap(a('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),
top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("resizable",this.element.data("resizable"));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=
this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css({margin:this.originalElement.css("margin")});this._proportionallyResize()}this.handles=h.handles||(!a(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",
nw:".ui-resizable-nw"});if(this.handles.constructor==String){if(this.handles=="all")this.handles="n,e,s,w,se,sw,ne,nw";var g=this.handles.split(",");this.handles={};for(var i=0;i<g.length;i++){var b=a.trim(g[i]),f=a('<div class="ui-resizable-handle '+("ui-resizable-"+b)+'"></div>');/sw|se|ne|nw/.test(b)&&f.css({zIndex:++h.zIndex});"se"==b&&f.addClass("ui-icon ui-icon-gripsmall-diagonal-se");this.handles[b]=".ui-resizable-"+b;this.element.append(f)}}this._renderAxis=function(j){j=j||this.element;for(var l in this.handles){if(this.handles[l].constructor==
String)this.handles[l]=a(this.handles[l],this.element).show();if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var o=a(this.handles[l],this.element),n=0;n=/sw|ne|nw|se|n|s/.test(l)?o.outerHeight():o.outerWidth();o=["padding",/ne|nw|n/.test(l)?"Top":/se|sw|s/.test(l)?"Bottom":/^e$/.test(l)?"Right":"Left"].join("");j.css(o,n);this._proportionallyResize()}a(this.handles[l])}};this._renderAxis(this.element);this._handles=a(".ui-resizable-handle",this.element).disableSelection();
this._handles.mouseover(function(){if(!e.resizing){if(this.className)var j=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);e.axis=j&&j[1]?j[1]:"se"}});if(h.autoHide){this._handles.hide();a(this.element).addClass("ui-resizable-autohide").hover(function(){if(!h.disabled){a(this).removeClass("ui-resizable-autohide");e._handles.show()}},function(){if(!h.disabled)if(!e.resizing){a(this).addClass("ui-resizable-autohide");e._handles.hide()}})}this._mouseInit()},destroy:function(){this._mouseDestroy();
var e=function(g){a(g).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){e(this.element);var h=this.element;h.after(this.originalElement.css({position:h.css("position"),width:h.outerWidth(),height:h.outerHeight(),top:h.css("top"),left:h.css("left")})).remove()}this.originalElement.css("resize",this.originalResizeStyle);e(this.originalElement);return this},_mouseCapture:function(e){var h=
false;for(var g in this.handles)if(a(this.handles[g])[0]==e.target)h=true;return!this.options.disabled&&h},_mouseStart:function(e){var h=this.options,g=this.element.position(),i=this.element;this.resizing=true;this.documentScroll={top:a(document).scrollTop(),left:a(document).scrollLeft()};if(i.is(".ui-draggable")||/absolute/.test(i.css("position")))i.css({position:"absolute",top:g.top,left:g.left});a.browser.opera&&/relative/.test(i.css("position"))&&i.css({position:"relative",top:"auto",left:"auto"});
this._renderProxy();g=d(this.helper.css("left"));var b=d(this.helper.css("top"));if(h.containment){g+=a(h.containment).scrollLeft()||0;b+=a(h.containment).scrollTop()||0}this.offset=this.helper.offset();this.position={left:g,top:b};this.size=this._helper?{width:i.outerWidth(),height:i.outerHeight()}:{width:i.width(),height:i.height()};this.originalSize=this._helper?{width:i.outerWidth(),height:i.outerHeight()}:{width:i.width(),height:i.height()};this.originalPosition={left:g,top:b};this.sizeDiff=
{width:i.outerWidth()-i.width(),height:i.outerHeight()-i.height()};this.originalMousePosition={left:e.pageX,top:e.pageY};this.aspectRatio=typeof h.aspectRatio=="number"?h.aspectRatio:this.originalSize.width/this.originalSize.height||1;h=a(".ui-resizable-"+this.axis).css("cursor");a("body").css("cursor",h=="auto"?this.axis+"-resize":h);i.addClass("ui-resizable-resizing");this._propagate("start",e);return true},_mouseDrag:function(e){var h=this.helper,g=this.originalMousePosition,i=this._change[this.axis];
if(!i)return false;g=i.apply(this,[e,e.pageX-g.left||0,e.pageY-g.top||0]);this._updateVirtualBoundaries(e.shiftKey);if(this._aspectRatio||e.shiftKey)g=this._updateRatio(g,e);g=this._respectSize(g,e);this._propagate("resize",e);h.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize();this._updateCache(g);this._trigger("resize",e,this.ui());return false},
_mouseStop:function(e){this.resizing=false;var h=this.options,g=this;if(this._helper){var i=this._proportionallyResizeElements,b=i.length&&/textarea/i.test(i[0].nodeName);i=b&&a.ui.hasScroll(i[0],"left")?0:g.sizeDiff.height;b=b?0:g.sizeDiff.width;b={width:g.helper.width()-b,height:g.helper.height()-i};i=parseInt(g.element.css("left"),10)+(g.position.left-g.originalPosition.left)||null;var f=parseInt(g.element.css("top"),10)+(g.position.top-g.originalPosition.top)||null;h.animate||this.element.css(a.extend(b,
{top:f,left:i}));g.helper.height(g.size.height);g.helper.width(g.size.width);this._helper&&!h.animate&&this._proportionallyResize()}a("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");this._propagate("stop",e);this._helper&&this.helper.remove();return false},_updateVirtualBoundaries:function(e){var h=this.options,g,i,b;h={minWidth:c(h.minWidth)?h.minWidth:0,maxWidth:c(h.maxWidth)?h.maxWidth:Infinity,minHeight:c(h.minHeight)?h.minHeight:0,maxHeight:c(h.maxHeight)?h.maxHeight:
Infinity};if(this._aspectRatio||e){e=h.minHeight*this.aspectRatio;i=h.minWidth/this.aspectRatio;g=h.maxHeight*this.aspectRatio;b=h.maxWidth/this.aspectRatio;if(e>h.minWidth)h.minWidth=e;if(i>h.minHeight)h.minHeight=i;if(g<h.maxWidth)h.maxWidth=g;if(b<h.maxHeight)h.maxHeight=b}this._vBoundaries=h},_updateCache:function(e){this.offset=this.helper.offset();if(c(e.left))this.position.left=e.left;if(c(e.top))this.position.top=e.top;if(c(e.height))this.size.height=e.height;if(c(e.width))this.size.width=
e.width},_updateRatio:function(e){var h=this.position,g=this.size,i=this.axis;if(c(e.height))e.width=e.height*this.aspectRatio;else if(c(e.width))e.height=e.width/this.aspectRatio;if(i=="sw"){e.left=h.left+(g.width-e.width);e.top=null}if(i=="nw"){e.top=h.top+(g.height-e.height);e.left=h.left+(g.width-e.width)}return e},_respectSize:function(e){var h=this._vBoundaries,g=this.axis,i=c(e.width)&&h.maxWidth&&h.maxWidth<e.width,b=c(e.height)&&h.maxHeight&&h.maxHeight<e.height,f=c(e.width)&&h.minWidth&&
h.minWidth>e.width,j=c(e.height)&&h.minHeight&&h.minHeight>e.height;if(f)e.width=h.minWidth;if(j)e.height=h.minHeight;if(i)e.width=h.maxWidth;if(b)e.height=h.maxHeight;var l=this.originalPosition.left+this.originalSize.width,o=this.position.top+this.size.height,n=/sw|nw|w/.test(g);g=/nw|ne|n/.test(g);if(f&&n)e.left=l-h.minWidth;if(i&&n)e.left=l-h.maxWidth;if(j&&g)e.top=o-h.minHeight;if(b&&g)e.top=o-h.maxHeight;if((h=!e.width&&!e.height)&&!e.left&&e.top)e.top=null;else if(h&&!e.top&&e.left)e.left=
null;return e},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var e=this.helper||this.element,h=0;h<this._proportionallyResizeElements.length;h++){var g=this._proportionallyResizeElements[h];if(!this.borderDif){var i=[g.css("borderTopWidth"),g.css("borderRightWidth"),g.css("borderBottomWidth"),g.css("borderLeftWidth")],b=[g.css("paddingTop"),g.css("paddingRight"),g.css("paddingBottom"),g.css("paddingLeft")];this.borderDif=a.map(i,function(f,j){f=parseInt(f,10)||
0;j=parseInt(b[j],10)||0;return f+j})}a.browser.msie&&(a(e).is(":hidden")||a(e).parents(":hidden").length)||g.css({height:e.height()-this.borderDif[0]-this.borderDif[2]||0,width:e.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var e=this.options;this.elementOffset=this.element.offset();if(this._helper){this.helper=this.helper||a('<div style="overflow:hidden;"></div>');var h=a.browser.msie&&a.browser.version<7,g=h?1:0;h=h?2:-1;this.helper.addClass(this._helper).css({width:this.element.outerWidth()+
h,height:this.element.outerHeight()+h,position:"absolute",left:this.elementOffset.left-g+"px",top:this.elementOffset.top-g+"px",zIndex:++e.zIndex});this.helper.appendTo("body").disableSelection()}else this.helper=this.element},_change:{e:function(e,h){return{width:this.originalSize.width+h}},w:function(e,h){return{left:this.originalPosition.left+h,width:this.originalSize.width-h}},n:function(e,h,g){return{top:this.originalPosition.top+g,height:this.originalSize.height-g}},s:function(e,h,g){return{height:this.originalSize.height+
g}},se:function(e,h,g){return a.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,h,g]))},sw:function(e,h,g){return a.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,h,g]))},ne:function(e,h,g){return a.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,h,g]))},nw:function(e,h,g){return a.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,h,g]))}},_propagate:function(e,h){a.ui.plugin.call(this,e,[h,this.ui()]);
e!="resize"&&this._trigger(e,h,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}});a.extend(a.ui.resizable,{version:"1.8.16"});a.ui.plugin.add("resizable","alsoResize",{start:function(){var e=a(this).data("resizable").options,h=function(g){a(g).each(function(){var i=a(this);i.data("resizable-alsoresize",{width:parseInt(i.width(),
10),height:parseInt(i.height(),10),left:parseInt(i.css("left"),10),top:parseInt(i.css("top"),10),position:i.css("position")})})};if(typeof e.alsoResize=="object"&&!e.alsoResize.parentNode)if(e.alsoResize.length){e.alsoResize=e.alsoResize[0];h(e.alsoResize)}else a.each(e.alsoResize,function(g){h(g)});else h(e.alsoResize)},resize:function(e,h){var g=a(this).data("resizable");e=g.options;var i=g.originalSize,b=g.originalPosition,f={height:g.size.height-i.height||0,width:g.size.width-i.width||0,top:g.position.top-
b.top||0,left:g.position.left-b.left||0},j=function(l,o){a(l).each(function(){var n=a(this),k=a(this).data("resizable-alsoresize"),m={},p=o&&o.length?o:n.parents(h.originalElement[0]).length?["width","height"]:["width","height","top","left"];a.each(p,function(q,s){if((q=(k[s]||0)+(f[s]||0))&&q>=0)m[s]=q||null});if(a.browser.opera&&/relative/.test(n.css("position"))){g._revertToRelativePosition=true;n.css({position:"absolute",top:"auto",left:"auto"})}n.css(m)})};typeof e.alsoResize=="object"&&!e.alsoResize.nodeType?
a.each(e.alsoResize,function(l,o){j(l,o)}):j(e.alsoResize)},stop:function(){var e=a(this).data("resizable"),h=e.options,g=function(i){a(i).each(function(){var b=a(this);b.css({position:b.data("resizable-alsoresize").position})})};if(e._revertToRelativePosition){e._revertToRelativePosition=false;typeof h.alsoResize=="object"&&!h.alsoResize.nodeType?a.each(h.alsoResize,function(i){g(i)}):g(h.alsoResize)}a(this).removeData("resizable-alsoresize")}});a.ui.plugin.add("resizable","animate",{stop:function(e){var h=
a(this).data("resizable"),g=h.options,i=h._proportionallyResizeElements,b=i.length&&/textarea/i.test(i[0].nodeName),f=b&&a.ui.hasScroll(i[0],"left")?0:h.sizeDiff.height;b={width:h.size.width-(b?0:h.sizeDiff.width),height:h.size.height-f};f=parseInt(h.element.css("left"),10)+(h.position.left-h.originalPosition.left)||null;var j=parseInt(h.element.css("top"),10)+(h.position.top-h.originalPosition.top)||null;h.element.animate(a.extend(b,j&&f?{top:j,left:f}:{}),{duration:g.animateDuration,easing:g.animateEasing,
step:function(){var l={width:parseInt(h.element.css("width"),10),height:parseInt(h.element.css("height"),10),top:parseInt(h.element.css("top"),10),left:parseInt(h.element.css("left"),10)};i&&i.length&&a(i[0]).css({width:l.width,height:l.height});h._updateCache(l);h._propagate("resize",e)}})}});a.ui.plugin.add("resizable","containment",{start:function(){var e=a(this).data("resizable"),h=e.element,g=e.options.containment;if(h=g instanceof a?g.get(0):/parent/.test(g)?h.parent().get(0):g){e.containerElement=
a(h);if(/document/.test(g)||g==document){e.containerOffset={left:0,top:0};e.containerPosition={left:0,top:0};e.parentData={element:a(document),left:0,top:0,width:a(document).width(),height:a(document).height()||document.body.parentNode.scrollHeight}}else{var i=a(h),b=[];a(["Top","Right","Left","Bottom"]).each(function(l,o){b[l]=d(i.css("padding"+o))});e.containerOffset=i.offset();e.containerPosition=i.position();e.containerSize={height:i.innerHeight()-b[3],width:i.innerWidth()-b[1]};g=e.containerOffset;
var f=e.containerSize.height,j=e.containerSize.width;j=a.ui.hasScroll(h,"left")?h.scrollWidth:j;f=a.ui.hasScroll(h)?h.scrollHeight:f;e.parentData={element:h,left:g.left,top:g.top,width:j,height:f}}}},resize:function(e){var h=a(this).data("resizable"),g=h.options,i=h.containerOffset,b=h.position;e=h._aspectRatio||e.shiftKey;var f={top:0,left:0},j=h.containerElement;if(j[0]!=document&&/static/.test(j.css("position")))f=i;if(b.left<(h._helper?i.left:0)){h.size.width+=h._helper?h.position.left-i.left:
h.position.left-f.left;if(e)h.size.height=h.size.width/g.aspectRatio;h.position.left=g.helper?i.left:0}if(b.top<(h._helper?i.top:0)){h.size.height+=h._helper?h.position.top-i.top:h.position.top;if(e)h.size.width=h.size.height*g.aspectRatio;h.position.top=h._helper?i.top:0}h.offset.left=h.parentData.left+h.position.left;h.offset.top=h.parentData.top+h.position.top;g=Math.abs((h._helper?h.offset.left-f.left:h.offset.left-f.left)+h.sizeDiff.width);i=Math.abs((h._helper?h.offset.top-f.top:h.offset.top-
i.top)+h.sizeDiff.height);b=h.containerElement.get(0)==h.element.parent().get(0);f=/relative|absolute/.test(h.containerElement.css("position"));if(b&&f)g-=h.parentData.left;if(g+h.size.width>=h.parentData.width){h.size.width=h.parentData.width-g;if(e)h.size.height=h.size.width/h.aspectRatio}if(i+h.size.height>=h.parentData.height){h.size.height=h.parentData.height-i;if(e)h.size.width=h.size.height*h.aspectRatio}},stop:function(){var e=a(this).data("resizable"),h=e.options,g=e.containerOffset,i=e.containerPosition,
b=e.containerElement,f=a(e.helper),j=f.offset(),l=f.outerWidth()-e.sizeDiff.width;f=f.outerHeight()-e.sizeDiff.height;e._helper&&!h.animate&&/relative/.test(b.css("position"))&&a(this).css({left:j.left-i.left-g.left,width:l,height:f});e._helper&&!h.animate&&/static/.test(b.css("position"))&&a(this).css({left:j.left-i.left-g.left,width:l,height:f})}});a.ui.plugin.add("resizable","ghost",{start:function(){var e=a(this).data("resizable"),h=e.options,g=e.size;e.ghost=e.originalElement.clone();e.ghost.css({opacity:0.25,
display:"block",position:"relative",height:g.height,width:g.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof h.ghost=="string"?h.ghost:"");e.ghost.appendTo(e.helper)},resize:function(){var e=a(this).data("resizable");e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})},stop:function(){var e=a(this).data("resizable");e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))}});a.ui.plugin.add("resizable","grid",{resize:function(){var e=
a(this).data("resizable"),h=e.options,g=e.size,i=e.originalSize,b=e.originalPosition,f=e.axis;h.grid=typeof h.grid=="number"?[h.grid,h.grid]:h.grid;var j=Math.round((g.width-i.width)/(h.grid[0]||1))*(h.grid[0]||1);h=Math.round((g.height-i.height)/(h.grid[1]||1))*(h.grid[1]||1);if(/^(se|s|e)$/.test(f)){e.size.width=i.width+j;e.size.height=i.height+h}else if(/^(ne)$/.test(f)){e.size.width=i.width+j;e.size.height=i.height+h;e.position.top=b.top-h}else{if(/^(sw)$/.test(f)){e.size.width=i.width+j;e.size.height=
i.height+h}else{e.size.width=i.width+j;e.size.height=i.height+h;e.position.top=b.top-h}e.position.left=b.left-j}}});var d=function(e){return parseInt(e,10)||0},c=function(e){return!isNaN(parseInt(e,10))}})(jQuery);
(function(a){a.widget("ui.selectable",a.ui.mouse,{options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch"},_create:function(){var d=this;this.element.addClass("ui-selectable");this.dragged=false;var c;this.refresh=function(){c=a(d.options.filter,d.element[0]);c.each(function(){var e=a(this),h=e.offset();a.data(this,"selectable-item",{element:this,$element:e,left:h.left,top:h.top,right:h.left+e.outerWidth(),bottom:h.top+e.outerHeight(),startselected:false,selected:e.hasClass("ui-selected"),
selecting:e.hasClass("ui-selecting"),unselecting:e.hasClass("ui-unselecting")})})};this.refresh();this.selectees=c.addClass("ui-selectee");this._mouseInit();this.helper=a("<div class='ui-selectable-helper'></div>")},destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");this._mouseDestroy();return this},_mouseStart:function(d){var c=this;this.opos=[d.pageX,
d.pageY];if(!this.options.disabled){var e=this.options;this.selectees=a(e.filter,this.element[0]);this._trigger("start",d);a(e.appendTo).append(this.helper);this.helper.css({left:d.clientX,top:d.clientY,width:0,height:0});e.autoRefresh&&this.refresh();this.selectees.filter(".ui-selected").each(function(){var h=a.data(this,"selectable-item");h.startselected=true;if(!d.metaKey){h.$element.removeClass("ui-selected");h.selected=false;h.$element.addClass("ui-unselecting");h.unselecting=true;c._trigger("unselecting",
d,{unselecting:h.element})}});a(d.target).parents().andSelf().each(function(){var h=a.data(this,"selectable-item");if(h){var g=!d.metaKey||!h.$element.hasClass("ui-selected");h.$element.removeClass(g?"ui-unselecting":"ui-selected").addClass(g?"ui-selecting":"ui-unselecting");h.unselecting=!g;h.selecting=g;(h.selected=g)?c._trigger("selecting",d,{selecting:h.element}):c._trigger("unselecting",d,{unselecting:h.element});return false}})}},_mouseDrag:function(d){var c=this;this.dragged=true;if(!this.options.disabled){var e=
this.options,h=this.opos[0],g=this.opos[1],i=d.pageX,b=d.pageY;if(h>i){var f=i;i=h;h=f}if(g>b){f=b;b=g;g=f}this.helper.css({left:h,top:g,width:i-h,height:b-g});this.selectees.each(function(){var j=a.data(this,"selectable-item");if(!(!j||j.element==c.element[0])){var l=false;if(e.tolerance=="touch")l=!(j.left>i||j.right<h||j.top>b||j.bottom<g);else if(e.tolerance=="fit")l=j.left>h&&j.right<i&&j.top>g&&j.bottom<b;if(l){if(j.selected){j.$element.removeClass("ui-selected");j.selected=false}if(j.unselecting){j.$element.removeClass("ui-unselecting");
j.unselecting=false}if(!j.selecting){j.$element.addClass("ui-selecting");j.selecting=true;c._trigger("selecting",d,{selecting:j.element})}}else{if(j.selecting)if(d.metaKey&&j.startselected){j.$element.removeClass("ui-selecting");j.selecting=false;j.$element.addClass("ui-selected");j.selected=true}else{j.$element.removeClass("ui-selecting");j.selecting=false;if(j.startselected){j.$element.addClass("ui-unselecting");j.unselecting=true}c._trigger("unselecting",d,{unselecting:j.element})}if(j.selected)if(!d.metaKey&&
!j.startselected){j.$element.removeClass("ui-selected");j.selected=false;j.$element.addClass("ui-unselecting");j.unselecting=true;c._trigger("unselecting",d,{unselecting:j.element})}}}});return false}},_mouseStop:function(d){var c=this;this.dragged=false;a(".ui-unselecting",this.element[0]).each(function(){var e=a.data(this,"selectable-item");e.$element.removeClass("ui-unselecting");e.unselecting=false;e.startselected=false;c._trigger("unselected",d,{unselected:e.element})});a(".ui-selecting",this.element[0]).each(function(){var e=
a.data(this,"selectable-item");e.$element.removeClass("ui-selecting").addClass("ui-selected");e.selecting=false;e.selected=true;e.startselected=true;c._trigger("selected",d,{selected:e.element})});this._trigger("stop",d);this.helper.remove();return false}});a.extend(a.ui.selectable,{version:"1.8.16"})})(jQuery);
(function(a){a.widget("ui.sortable",a.ui.mouse,{widgetEventPrefix:"sort",options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1E3},_create:function(){var d=this.options;this.containerCache={};this.element.addClass("ui-sortable");
this.refresh();this.floating=this.items.length?d.axis==="x"||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):false;this.offset=this.element.offset();this._mouseInit()},destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");this._mouseDestroy();for(var d=this.items.length-1;d>=0;d--)this.items[d].item.removeData("sortable-item");return this},_setOption:function(d,c){if(d===
"disabled"){this.options[d]=c;this.widget()[c?"addClass":"removeClass"]("ui-sortable-disabled")}else a.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(d,c){if(this.reverting)return false;if(this.options.disabled||this.options.type=="static")return false;this._refreshItems(d);var e=null,h=this;a(d.target).parents().each(function(){if(a.data(this,"sortable-item")==h){e=a(this);return false}});if(a.data(d.target,"sortable-item")==h)e=a(d.target);if(!e)return false;if(this.options.handle&&
!c){var g=false;a(this.options.handle,e).find("*").andSelf().each(function(){if(this==d.target)g=true});if(!g)return false}this.currentItem=e;this._removeCurrentsFromItems();return true},_mouseStart:function(d,c,e){c=this.options;var h=this;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(d);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,
left:this.offset.left-this.margins.left};this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");a.extend(this.offset,{click:{left:d.pageX-this.offset.left,top:d.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this._generatePosition(d);this.originalPageX=d.pageX;this.originalPageY=d.pageY;c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt);this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};
this.helper[0]!=this.currentItem[0]&&this.currentItem.hide();this._createPlaceholder();c.containment&&this._setContainment();if(c.cursor){if(a("body").css("cursor"))this._storedCursor=a("body").css("cursor");a("body").css("cursor",c.cursor)}if(c.opacity){if(this.helper.css("opacity"))this._storedOpacity=this.helper.css("opacity");this.helper.css("opacity",c.opacity)}if(c.zIndex){if(this.helper.css("zIndex"))this._storedZIndex=this.helper.css("zIndex");this.helper.css("zIndex",c.zIndex)}if(this.scrollParent[0]!=
document&&this.scrollParent[0].tagName!="HTML")this.overflowOffset=this.scrollParent.offset();this._trigger("start",d,this._uiHash());this._preserveHelperProportions||this._cacheHelperProportions();if(!e)for(e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("activate",d,h._uiHash(this));if(a.ui.ddmanager)a.ui.ddmanager.current=this;a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,d);this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(d);
return true},_mouseDrag:function(d){this.position=this._generatePosition(d);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs)this.lastPositionAbs=this.positionAbs;if(this.options.scroll){var c=this.options,e=false;if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){if(this.overflowOffset.top+this.scrollParent[0].offsetHeight-d.pageY<c.scrollSensitivity)this.scrollParent[0].scrollTop=e=this.scrollParent[0].scrollTop+c.scrollSpeed;else if(d.pageY-this.overflowOffset.top<
c.scrollSensitivity)this.scrollParent[0].scrollTop=e=this.scrollParent[0].scrollTop-c.scrollSpeed;if(this.overflowOffset.left+this.scrollParent[0].offsetWidth-d.pageX<c.scrollSensitivity)this.scrollParent[0].scrollLeft=e=this.scrollParent[0].scrollLeft+c.scrollSpeed;else if(d.pageX-this.overflowOffset.left<c.scrollSensitivity)this.scrollParent[0].scrollLeft=e=this.scrollParent[0].scrollLeft-c.scrollSpeed}else{if(d.pageY-a(document).scrollTop()<c.scrollSensitivity)e=a(document).scrollTop(a(document).scrollTop()-
c.scrollSpeed);else if(a(window).height()-(d.pageY-a(document).scrollTop())<c.scrollSensitivity)e=a(document).scrollTop(a(document).scrollTop()+c.scrollSpeed);if(d.pageX-a(document).scrollLeft()<c.scrollSensitivity)e=a(document).scrollLeft(a(document).scrollLeft()-c.scrollSpeed);else if(a(window).width()-(d.pageX-a(document).scrollLeft())<c.scrollSensitivity)e=a(document).scrollLeft(a(document).scrollLeft()+c.scrollSpeed)}e!==false&&a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,
d)}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";for(c=this.items.length-1;c>=0;c--){e=this.items[c];var h=e.item[0],g=this._intersectsWithPointer(e);if(g)if(h!=this.currentItem[0]&&this.placeholder[g==1?"next":"prev"]()[0]!=h&&!a.ui.contains(this.placeholder[0],h)&&(this.options.type=="semi-dynamic"?!a.ui.contains(this.element[0],
h):true)){this.direction=g==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(e))this._rearrange(d,e);else break;this._trigger("change",d,this._uiHash());break}}this._contactContainers(d);a.ui.ddmanager&&a.ui.ddmanager.drag(this,d);this._trigger("sort",d,this._uiHash());this.lastPositionAbs=this.positionAbs;return false},_mouseStop:function(d,c){if(d){a.ui.ddmanager&&!this.options.dropBehaviour&&a.ui.ddmanager.drop(this,d);if(this.options.revert){var e=this;c=e.placeholder.offset();
e.reverting=true;a(this.helper).animate({left:c.left-this.offset.parent.left-e.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:c.top-this.offset.parent.top-e.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){e._clear(d)})}else this._clear(d,c);return false}},cancel:function(){var d=this;if(this.dragging){this._mouseUp({target:null});this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):
this.currentItem.show();for(var c=this.containers.length-1;c>=0;c--){this.containers[c]._trigger("deactivate",null,d._uiHash(this));if(this.containers[c].containerCache.over){this.containers[c]._trigger("out",null,d._uiHash(this));this.containers[c].containerCache.over=0}}}if(this.placeholder){this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove();a.extend(this,{helper:null,
dragging:false,reverting:false,_noFinalSort:null});this.domPosition.prev?a(this.domPosition.prev).after(this.currentItem):a(this.domPosition.parent).prepend(this.currentItem)}return this},serialize:function(d){var c=this._getItemsAsjQuery(d&&d.connected),e=[];d=d||{};a(c).each(function(){var h=(a(d.item||this).attr(d.attribute||"id")||"").match(d.expression||/(.+)[-=_](.+)/);if(h)e.push((d.key||h[1]+"[]")+"="+(d.key&&d.expression?h[1]:h[2]))});!e.length&&d.key&&e.push(d.key+"=");return e.join("&")},
toArray:function(d){var c=this._getItemsAsjQuery(d&&d.connected),e=[];d=d||{};c.each(function(){e.push(a(d.item||this).attr(d.attribute||"id")||"")});return e},_intersectsWith:function(d){var c=this.positionAbs.left,e=c+this.helperProportions.width,h=this.positionAbs.top,g=h+this.helperProportions.height,i=d.left,b=i+d.width,f=d.top,j=f+d.height,l=this.offset.click.top,o=this.offset.click.left;l=h+l>f&&h+l<j&&c+o>i&&c+o<b;return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||
this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>d[this.floating?"width":"height"]?l:i<c+this.helperProportions.width/2&&e-this.helperProportions.width/2<b&&f<h+this.helperProportions.height/2&&g-this.helperProportions.height/2<j},_intersectsWithPointer:function(d){var c=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,d.top,d.height);d=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,d.left,d.width);c=c&&d;d=this._getDragVerticalDirection();
var e=this._getDragHorizontalDirection();if(!c)return false;return this.floating?e&&e=="right"||d=="down"?2:1:d&&(d=="down"?2:1)},_intersectsWithSides:function(d){var c=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,d.top+d.height/2,d.height);d=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,d.left+d.width/2,d.width);var e=this._getDragVerticalDirection(),h=this._getDragHorizontalDirection();return this.floating&&h?h=="right"&&d||h=="left"&&!d:e&&(e=="down"&&c||e=="up"&&!c)},
_getDragVerticalDirection:function(){var d=this.positionAbs.top-this.lastPositionAbs.top;return d!=0&&(d>0?"down":"up")},_getDragHorizontalDirection:function(){var d=this.positionAbs.left-this.lastPositionAbs.left;return d!=0&&(d>0?"right":"left")},refresh:function(d){this._refreshItems(d);this.refreshPositions();return this},_connectWith:function(){var d=this.options;return d.connectWith.constructor==String?[d.connectWith]:d.connectWith},_getItemsAsjQuery:function(d){var c=[],e=[],h=this._connectWith();
if(h&&d)for(d=h.length-1;d>=0;d--)for(var g=a(h[d]),i=g.length-1;i>=0;i--){var b=a.data(g[i],"sortable");if(b&&b!=this&&!b.options.disabled)e.push([a.isFunction(b.options.items)?b.options.items.call(b.element):a(b.options.items,b.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),b])}e.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),
this]);for(d=e.length-1;d>=0;d--)e[d][0].each(function(){c.push(this)});return a(c)},_removeCurrentsFromItems:function(){for(var d=this.currentItem.find(":data(sortable-item)"),c=0;c<this.items.length;c++)for(var e=0;e<d.length;e++)d[e]==this.items[c].item[0]&&this.items.splice(c,1)},_refreshItems:function(d){this.items=[];this.containers=[this];var c=this.items,e=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],d,{item:this.currentItem}):a(this.options.items,this.element),
this]],h=this._connectWith();if(h)for(var g=h.length-1;g>=0;g--)for(var i=a(h[g]),b=i.length-1;b>=0;b--){var f=a.data(i[b],"sortable");if(f&&f!=this&&!f.options.disabled){e.push([a.isFunction(f.options.items)?f.options.items.call(f.element[0],d,{item:this.currentItem}):a(f.options.items,f.element),f]);this.containers.push(f)}}for(g=e.length-1;g>=0;g--){d=e[g][1];h=e[g][0];b=0;for(i=h.length;b<i;b++){f=a(h[b]);f.data("sortable-item",d);c.push({item:f,instance:d,width:0,height:0,left:0,top:0})}}},refreshPositions:function(d){if(this.offsetParent&&
this.helper)this.offset.parent=this._getParentOffset();for(var c=this.items.length-1;c>=0;c--){var e=this.items[c];if(!(e.instance!=this.currentContainer&&this.currentContainer&&e.item[0]!=this.currentItem[0])){var h=this.options.toleranceElement?a(this.options.toleranceElement,e.item):e.item;if(!d){e.width=h.outerWidth();e.height=h.outerHeight()}h=h.offset();e.left=h.left;e.top=h.top}}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(c=
this.containers.length-1;c>=0;c--){h=this.containers[c].element.offset();this.containers[c].containerCache.left=h.left;this.containers[c].containerCache.top=h.top;this.containers[c].containerCache.width=this.containers[c].element.outerWidth();this.containers[c].containerCache.height=this.containers[c].element.outerHeight()}return this},_createPlaceholder:function(d){var c=d||this,e=c.options;if(!e.placeholder||e.placeholder.constructor==String){var h=e.placeholder;e.placeholder={element:function(){var g=
a(document.createElement(c.currentItem[0].nodeName)).addClass(h||c.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];if(!h)g.style.visibility="hidden";return g},update:function(g,i){if(!(h&&!e.forcePlaceholderSize)){i.height()||i.height(c.currentItem.innerHeight()-parseInt(c.currentItem.css("paddingTop")||0,10)-parseInt(c.currentItem.css("paddingBottom")||0,10));i.width()||i.width(c.currentItem.innerWidth()-parseInt(c.currentItem.css("paddingLeft")||0,10)-parseInt(c.currentItem.css("paddingRight")||
0,10))}}}}c.placeholder=a(e.placeholder.element.call(c.element,c.currentItem));c.currentItem.after(c.placeholder);e.placeholder.update(c,c.placeholder)},_contactContainers:function(d){for(var c=null,e=null,h=this.containers.length-1;h>=0;h--)if(!a.ui.contains(this.currentItem[0],this.containers[h].element[0]))if(this._intersectsWith(this.containers[h].containerCache)){if(!(c&&a.ui.contains(this.containers[h].element[0],c.element[0]))){c=this.containers[h];e=h}}else if(this.containers[h].containerCache.over){this.containers[h]._trigger("out",
d,this._uiHash(this));this.containers[h].containerCache.over=0}if(c)if(this.containers.length===1){this.containers[e]._trigger("over",d,this._uiHash(this));this.containers[e].containerCache.over=1}else if(this.currentContainer!=this.containers[e]){c=1E4;h=null;for(var g=this.positionAbs[this.containers[e].floating?"left":"top"],i=this.items.length-1;i>=0;i--)if(a.ui.contains(this.containers[e].element[0],this.items[i].item[0])){var b=this.items[i][this.containers[e].floating?"left":"top"];if(Math.abs(b-
g)<c){c=Math.abs(b-g);h=this.items[i]}}if(h||this.options.dropOnEmpty){this.currentContainer=this.containers[e];h?this._rearrange(d,h,null,true):this._rearrange(d,null,this.containers[e].element,true);this._trigger("change",d,this._uiHash());this.containers[e]._trigger("change",d,this._uiHash(this));this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[e]._trigger("over",d,this._uiHash(this));this.containers[e].containerCache.over=1}}},_createHelper:function(d){var c=
this.options;d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[d,this.currentItem])):c.helper=="clone"?this.currentItem.clone():this.currentItem;d.parents("body").length||a(c.appendTo!="parent"?c.appendTo:this.currentItem[0].parentNode)[0].appendChild(d[0]);if(d[0]==this.currentItem[0])this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")};if(d[0].style.width==
""||c.forceHelperSize)d.width(this.currentItem.width());if(d[0].style.height==""||c.forceHelperSize)d.height(this.currentItem.height());return d},_adjustOffsetFromHelper:function(d){if(typeof d=="string")d=d.split(" ");if(a.isArray(d))d={left:+d[0],top:+d[1]||0};if("left"in d)this.offset.click.left=d.left+this.margins.left;if("right"in d)this.offset.click.left=this.helperProportions.width-d.right+this.margins.left;if("top"in d)this.offset.click.top=d.top+this.margins.top;if("bottom"in d)this.offset.click.top=
this.helperProportions.height-d.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var d=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])){d.left+=this.scrollParent.scrollLeft();d.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)d=
{top:0,left:0};return{top:d.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:d.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var d=this.currentItem.position();return{top:d.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:d.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),
10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var d=this.options;if(d.containment=="parent")d.containment=this.helper[0].parentNode;if(d.containment=="document"||d.containment=="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(d.containment=="document"?
document:window).width()-this.helperProportions.width-this.margins.left,(a(d.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(d.containment)){var c=a(d.containment)[0];d=a(d.containment).offset();var e=a(c).css("overflow")!="hidden";this.containment=[d.left+(parseInt(a(c).css("borderLeftWidth"),10)||0)+(parseInt(a(c).css("paddingLeft"),10)||0)-this.margins.left,d.top+(parseInt(a(c).css("borderTopWidth"),
10)||0)+(parseInt(a(c).css("paddingTop"),10)||0)-this.margins.top,d.left+(e?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(a(c).css("borderLeftWidth"),10)||0)-(parseInt(a(c).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,d.top+(e?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(a(c).css("borderTopWidth"),10)||0)-(parseInt(a(c).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(d,c){if(!c)c=
this.position;d=d=="absolute"?1:-1;var e=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,h=/(html|body)/i.test(e[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():h?0:e.scrollTop())*d),left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-(a.browser.safari&&
this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():h?0:e.scrollLeft())*d)}},_generatePosition:function(d){var c=this.options,e=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,h=/(html|body)/i.test(e[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0]))this.offset.relative=this._getRelativeOffset();
var g=d.pageX,i=d.pageY;if(this.originalPosition){if(this.containment){if(d.pageX-this.offset.click.left<this.containment[0])g=this.containment[0]+this.offset.click.left;if(d.pageY-this.offset.click.top<this.containment[1])i=this.containment[1]+this.offset.click.top;if(d.pageX-this.offset.click.left>this.containment[2])g=this.containment[2]+this.offset.click.left;if(d.pageY-this.offset.click.top>this.containment[3])i=this.containment[3]+this.offset.click.top}if(c.grid){i=this.originalPageY+Math.round((i-
this.originalPageY)/c.grid[1])*c.grid[1];i=this.containment?!(i-this.offset.click.top<this.containment[1]||i-this.offset.click.top>this.containment[3])?i:!(i-this.offset.click.top<this.containment[1])?i-c.grid[1]:i+c.grid[1]:i;g=this.originalPageX+Math.round((g-this.originalPageX)/c.grid[0])*c.grid[0];g=this.containment?!(g-this.offset.click.left<this.containment[0]||g-this.offset.click.left>this.containment[2])?g:!(g-this.offset.click.left<this.containment[0])?g-c.grid[0]:g+c.grid[0]:g}}return{top:i-
this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():h?0:e.scrollTop()),left:g-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():h?0:e.scrollLeft())}},_rearrange:function(d,c,e,h){e?e[0].appendChild(this.placeholder[0]):c.item[0].parentNode.insertBefore(this.placeholder[0],
this.direction=="down"?c.item[0]:c.item[0].nextSibling);this.counter=this.counter?++this.counter:1;var g=this,i=this.counter;window.setTimeout(function(){i==g.counter&&g.refreshPositions(!h)},0)},_clear:function(d,c){this.reverting=false;var e=[];!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem);this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var h in this._storedCSS)if(this._storedCSS[h]=="auto"||this._storedCSS[h]=="static")this._storedCSS[h]=
"";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();this.fromOutside&&!c&&e.push(function(g){this._trigger("receive",g,this._uiHash(this.fromOutside))});if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!c)e.push(function(g){this._trigger("update",g,this._uiHash())});if(!a.ui.contains(this.element[0],this.currentItem[0])){c||e.push(function(g){this._trigger("remove",
g,this._uiHash())});for(h=this.containers.length-1;h>=0;h--)if(a.ui.contains(this.containers[h].element[0],this.currentItem[0])&&!c){e.push(function(g){return function(i){g._trigger("receive",i,this._uiHash(this))}}.call(this,this.containers[h]));e.push(function(g){return function(i){g._trigger("update",i,this._uiHash(this))}}.call(this,this.containers[h]))}}for(h=this.containers.length-1;h>=0;h--){c||e.push(function(g){return function(i){g._trigger("deactivate",i,this._uiHash(this))}}.call(this,
this.containers[h]));if(this.containers[h].containerCache.over){e.push(function(g){return function(i){g._trigger("out",i,this._uiHash(this))}}.call(this,this.containers[h]));this.containers[h].containerCache.over=0}}this._storedCursor&&a("body").css("cursor",this._storedCursor);this._storedOpacity&&this.helper.css("opacity",this._storedOpacity);if(this._storedZIndex)this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex);this.dragging=false;if(this.cancelHelperRemoval){if(!c){this._trigger("beforeStop",
d,this._uiHash());for(h=0;h<e.length;h++)e[h].call(this,d);this._trigger("stop",d,this._uiHash())}return false}c||this._trigger("beforeStop",d,this._uiHash());this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.helper[0]!=this.currentItem[0]&&this.helper.remove();this.helper=null;if(!c){for(h=0;h<e.length;h++)e[h].call(this,d);this._trigger("stop",d,this._uiHash())}this.fromOutside=false;return true},_trigger:function(){a.Widget.prototype._trigger.apply(this,arguments)===false&&this.cancel()},
_uiHash:function(d){var c=d||this;return{helper:c.helper,placeholder:c.placeholder||a([]),position:c.position,originalPosition:c.originalPosition,offset:c.positionAbs,item:c.currentItem,sender:d?d.element:null}}});a.extend(a.ui.sortable,{version:"1.8.16"})})(jQuery);
jQuery.effects||function(a,d){function c(n){var k;if(n&&n.constructor==Array&&n.length==3)return n;if(k=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(n))return[parseInt(k[1],10),parseInt(k[2],10),parseInt(k[3],10)];if(k=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(n))return[parseFloat(k[1])*2.55,parseFloat(k[2])*2.55,parseFloat(k[3])*2.55];if(k=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(n))return[parseInt(k[1],
16),parseInt(k[2],16),parseInt(k[3],16)];if(k=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(n))return[parseInt(k[1]+k[1],16),parseInt(k[2]+k[2],16),parseInt(k[3]+k[3],16)];if(/rgba\(0, 0, 0, 0\)/.exec(n))return j.transparent;return j[a.trim(n).toLowerCase()]}function e(n,k){var m;do{m=a.curCSS(n,k);if(m!=""&&m!="transparent"||a.nodeName(n,"body"))break;k="backgroundColor"}while(n=n.parentNode);return c(m)}function h(){var n=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,
k={},m,p;if(n&&n.length&&n[0]&&n[n[0]])for(var q=n.length;q--;){m=n[q];if(typeof n[m]=="string"){p=m.replace(/\-(\w)/g,function(s,r){return r.toUpperCase()});k[p]=n[m]}}else for(m in n)if(typeof n[m]==="string")k[m]=n[m];return k}function g(n){var k,m;for(k in n){m=n[k];if(m==null||a.isFunction(m)||k in o||/scrollbar/.test(k)||!/color/i.test(k)&&isNaN(parseFloat(m)))delete n[k]}return n}function i(n,k){var m={_:0},p;for(p in k)if(n[p]!=k[p])m[p]=k[p];return m}function b(n,k,m,p){if(typeof n=="object"){p=
k;m=null;k=n;n=k.effect}if(a.isFunction(k)){p=k;m=null;k={}}if(typeof k=="number"||a.fx.speeds[k]){p=m;m=k;k={}}if(a.isFunction(m)){p=m;m=null}k=k||{};m=m||k.duration;m=a.fx.off?0:typeof m=="number"?m:m in a.fx.speeds?a.fx.speeds[m]:a.fx.speeds._default;p=p||k.complete;return[n,k,m,p]}function f(n){if(!n||typeof n==="number"||a.fx.speeds[n])return true;if(typeof n==="string"&&!a.effects[n])return true;return false}a.effects={};a.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor",
"borderTopColor","borderColor","color","outlineColor"],function(n,k){a.fx.step[k]=function(m){if(!m.colorInit){m.start=e(m.elem,k);m.end=c(m.end);m.colorInit=true}m.elem.style[k]="rgb("+Math.max(Math.min(parseInt(m.pos*(m.end[0]-m.start[0])+m.start[0],10),255),0)+","+Math.max(Math.min(parseInt(m.pos*(m.end[1]-m.start[1])+m.start[1],10),255),0)+","+Math.max(Math.min(parseInt(m.pos*(m.end[2]-m.start[2])+m.start[2],10),255),0)+")"}});var j={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,
0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,
211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},l=["add","remove","toggle"],o={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};a.effects.animateClass=function(n,k,m,
p){if(a.isFunction(m)){p=m;m=null}return this.queue(function(){var q=a(this),s=q.attr("style")||" ",r=g(h.call(this)),u,v=q.attr("class");a.each(l,function(w,x){n[x]&&q[x+"Class"](n[x])});u=g(h.call(this));q.attr("class",v);q.animate(i(r,u),{queue:false,duration:k,easing:m,complete:function(){a.each(l,function(w,x){n[x]&&q[x+"Class"](n[x])});if(typeof q.attr("style")=="object"){q.attr("style").cssText="";q.attr("style").cssText=s}else q.attr("style",s);p&&p.apply(this,arguments);a.dequeue(this)}})})};
a.fn.extend({_addClass:a.fn.addClass,addClass:function(n,k,m,p){return k?a.effects.animateClass.apply(this,[{add:n},k,m,p]):this._addClass(n)},_removeClass:a.fn.removeClass,removeClass:function(n,k,m,p){return k?a.effects.animateClass.apply(this,[{remove:n},k,m,p]):this._removeClass(n)},_toggleClass:a.fn.toggleClass,toggleClass:function(n,k,m,p,q){return typeof k=="boolean"||k===d?m?a.effects.animateClass.apply(this,[k?{add:n}:{remove:n},m,p,q]):this._toggleClass(n,k):a.effects.animateClass.apply(this,
[{toggle:n},k,m,p])},switchClass:function(n,k,m,p,q){return a.effects.animateClass.apply(this,[{add:k,remove:n},m,p,q])}});a.extend(a.effects,{version:"1.8.16",save:function(n,k){for(var m=0;m<k.length;m++)k[m]!==null&&n.data("ec.storage."+k[m],n[0].style[k[m]])},restore:function(n,k){for(var m=0;m<k.length;m++)k[m]!==null&&n.css(k[m],n.data("ec.storage."+k[m]))},setMode:function(n,k){if(k=="toggle")k=n.is(":hidden")?"show":"hide";return k},getBaseline:function(n,k){var m;switch(n[0]){case "top":m=
0;break;case "middle":m=0.5;break;case "bottom":m=1;break;default:m=n[0]/k.height}switch(n[1]){case "left":n=0;break;case "center":n=0.5;break;case "right":n=1;break;default:n=n[1]/k.width}return{x:n,y:m}},createWrapper:function(n){if(n.parent().is(".ui-effects-wrapper"))return n.parent();var k={width:n.outerWidth(true),height:n.outerHeight(true),"float":n.css("float")},m=a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),
p=document.activeElement;n.wrap(m);if(n[0]===p||a.contains(n[0],p))a(p).focus();m=n.parent();if(n.css("position")=="static"){m.css({position:"relative"});n.css({position:"relative"})}else{a.extend(k,{position:n.css("position"),zIndex:n.css("z-index")});a.each(["top","left","bottom","right"],function(q,s){k[s]=n.css(s);if(isNaN(parseInt(k[s],10)))k[s]="auto"});n.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}return m.css(k).show()},removeWrapper:function(n){var k,m=document.activeElement;
if(n.parent().is(".ui-effects-wrapper")){k=n.parent().replaceWith(n);if(n[0]===m||a.contains(n[0],m))a(m).focus();return k}return n},setTransition:function(n,k,m,p){p=p||{};a.each(k,function(q,s){unit=n.cssUnit(s);if(unit[0]>0)p[s]=unit[0]*m+unit[1]});return p}});a.fn.extend({effect:function(n){var k=b.apply(this,arguments),m={options:k[1],duration:k[2],callback:k[3]};k=m.options.mode;var p=a.effects[n];if(a.fx.off||!p)return k?this[k](m.duration,m.callback):this.each(function(){m.callback&&m.callback.call(this)});
return p.call(this,m)},_show:a.fn.show,show:function(n){if(f(n))return this._show.apply(this,arguments);else{var k=b.apply(this,arguments);k[1].mode="show";return this.effect.apply(this,k)}},_hide:a.fn.hide,hide:function(n){if(f(n))return this._hide.apply(this,arguments);else{var k=b.apply(this,arguments);k[1].mode="hide";return this.effect.apply(this,k)}},__toggle:a.fn.toggle,toggle:function(n){if(f(n)||typeof n==="boolean"||a.isFunction(n))return this.__toggle.apply(this,arguments);else{var k=b.apply(this,
arguments);k[1].mode="toggle";return this.effect.apply(this,k)}},cssUnit:function(n){var k=this.css(n),m=[];a.each(["em","px","%","pt"],function(p,q){if(k.indexOf(q)>0)m=[parseFloat(k),q]});return m}});a.easing.jswing=a.easing.swing;a.extend(a.easing,{def:"easeOutQuad",swing:function(n,k,m,p,q){return a.easing[a.easing.def](n,k,m,p,q)},easeInQuad:function(n,k,m,p,q){return p*(k/=q)*k+m},easeOutQuad:function(n,k,m,p,q){return-p*(k/=q)*(k-2)+m},easeInOutQuad:function(n,k,m,p,q){if((k/=q/2)<1)return p/
2*k*k+m;return-p/2*(--k*(k-2)-1)+m},easeInCubic:function(n,k,m,p,q){return p*(k/=q)*k*k+m},easeOutCubic:function(n,k,m,p,q){return p*((k=k/q-1)*k*k+1)+m},easeInOutCubic:function(n,k,m,p,q){if((k/=q/2)<1)return p/2*k*k*k+m;return p/2*((k-=2)*k*k+2)+m},easeInQuart:function(n,k,m,p,q){return p*(k/=q)*k*k*k+m},easeOutQuart:function(n,k,m,p,q){return-p*((k=k/q-1)*k*k*k-1)+m},easeInOutQuart:function(n,k,m,p,q){if((k/=q/2)<1)return p/2*k*k*k*k+m;return-p/2*((k-=2)*k*k*k-2)+m},easeInQuint:function(n,k,m,
p,q){return p*(k/=q)*k*k*k*k+m},easeOutQuint:function(n,k,m,p,q){return p*((k=k/q-1)*k*k*k*k+1)+m},easeInOutQuint:function(n,k,m,p,q){if((k/=q/2)<1)return p/2*k*k*k*k*k+m;return p/2*((k-=2)*k*k*k*k+2)+m},easeInSine:function(n,k,m,p,q){return-p*Math.cos(k/q*(Math.PI/2))+p+m},easeOutSine:function(n,k,m,p,q){return p*Math.sin(k/q*(Math.PI/2))+m},easeInOutSine:function(n,k,m,p,q){return-p/2*(Math.cos(Math.PI*k/q)-1)+m},easeInExpo:function(n,k,m,p,q){return k==0?m:p*Math.pow(2,10*(k/q-1))+m},easeOutExpo:function(n,
k,m,p,q){return k==q?m+p:p*(-Math.pow(2,-10*k/q)+1)+m},easeInOutExpo:function(n,k,m,p,q){if(k==0)return m;if(k==q)return m+p;if((k/=q/2)<1)return p/2*Math.pow(2,10*(k-1))+m;return p/2*(-Math.pow(2,-10*--k)+2)+m},easeInCirc:function(n,k,m,p,q){return-p*(Math.sqrt(1-(k/=q)*k)-1)+m},easeOutCirc:function(n,k,m,p,q){return p*Math.sqrt(1-(k=k/q-1)*k)+m},easeInOutCirc:function(n,k,m,p,q){if((k/=q/2)<1)return-p/2*(Math.sqrt(1-k*k)-1)+m;return p/2*(Math.sqrt(1-(k-=2)*k)+1)+m},easeInElastic:function(n,k,m,
p,q){n=1.70158;var s=0,r=p;if(k==0)return m;if((k/=q)==1)return m+p;s||(s=q*0.3);if(r<Math.abs(p)){r=p;n=s/4}else n=s/(2*Math.PI)*Math.asin(p/r);return-(r*Math.pow(2,10*(k-=1))*Math.sin((k*q-n)*2*Math.PI/s))+m},easeOutElastic:function(n,k,m,p,q){n=1.70158;var s=0,r=p;if(k==0)return m;if((k/=q)==1)return m+p;s||(s=q*0.3);if(r<Math.abs(p)){r=p;n=s/4}else n=s/(2*Math.PI)*Math.asin(p/r);return r*Math.pow(2,-10*k)*Math.sin((k*q-n)*2*Math.PI/s)+p+m},easeInOutElastic:function(n,k,m,p,q){n=1.70158;var s=
0,r=p;if(k==0)return m;if((k/=q/2)==2)return m+p;s||(s=q*0.3*1.5);if(r<Math.abs(p)){r=p;n=s/4}else n=s/(2*Math.PI)*Math.asin(p/r);if(k<1)return-0.5*r*Math.pow(2,10*(k-=1))*Math.sin((k*q-n)*2*Math.PI/s)+m;return r*Math.pow(2,-10*(k-=1))*Math.sin((k*q-n)*2*Math.PI/s)*0.5+p+m},easeInBack:function(n,k,m,p,q,s){if(s==d)s=1.70158;return p*(k/=q)*k*((s+1)*k-s)+m},easeOutBack:function(n,k,m,p,q,s){if(s==d)s=1.70158;return p*((k=k/q-1)*k*((s+1)*k+s)+1)+m},easeInOutBack:function(n,k,m,p,q,s){if(s==d)s=1.70158;
if((k/=q/2)<1)return p/2*k*k*(((s*=1.525)+1)*k-s)+m;return p/2*((k-=2)*k*(((s*=1.525)+1)*k+s)+2)+m},easeInBounce:function(n,k,m,p,q){return p-a.easing.easeOutBounce(n,q-k,0,p,q)+m},easeOutBounce:function(n,k,m,p,q){return(k/=q)<1/2.75?p*7.5625*k*k+m:k<2/2.75?p*(7.5625*(k-=1.5/2.75)*k+0.75)+m:k<2.5/2.75?p*(7.5625*(k-=2.25/2.75)*k+0.9375)+m:p*(7.5625*(k-=2.625/2.75)*k+0.984375)+m},easeInOutBounce:function(n,k,m,p,q){if(k<q/2)return a.easing.easeInBounce(n,k*2,0,p,q)*0.5+m;return a.easing.easeOutBounce(n,
k*2-q,0,p,q)*0.5+p*0.5+m}})}(jQuery);
(function(a){a.effects.blind=function(d){return this.queue(function(){var c=a(this),e=["position","top","bottom","left","right"],h=a.effects.setMode(c,d.options.mode||"hide"),g=d.options.direction||"vertical";a.effects.save(c,e);c.show();var i=a.effects.createWrapper(c).css({overflow:"hidden"}),b=g=="vertical"?"height":"width";g=g=="vertical"?i.height():i.width();h=="show"&&i.css(b,0);var f={};f[b]=h=="show"?g:0;i.animate(f,d.duration,d.options.easing,function(){h=="hide"&&c.hide();a.effects.restore(c,
e);a.effects.removeWrapper(c);d.callback&&d.callback.apply(c[0],arguments);c.dequeue()})})}})(jQuery);
(function(a){a.effects.bounce=function(d){return this.queue(function(){var c=a(this),e=["position","top","bottom","left","right"],h=a.effects.setMode(c,d.options.mode||"effect"),g=d.options.direction||"up",i=d.options.distance||20,b=d.options.times||5,f=d.duration||250;/show|hide/.test(h)&&e.push("opacity");a.effects.save(c,e);c.show();a.effects.createWrapper(c);var j=g=="up"||g=="down"?"top":"left";g=g=="up"||g=="left"?"pos":"neg";i=d.options.distance||(j=="top"?c.outerHeight({margin:true})/3:c.outerWidth({margin:true})/
3);if(h=="show")c.css("opacity",0).css(j,g=="pos"?-i:i);if(h=="hide")i/=b*2;h!="hide"&&b--;if(h=="show"){var l={opacity:1};l[j]=(g=="pos"?"+=":"-=")+i;c.animate(l,f/2,d.options.easing);i/=2;b--}for(l=0;l<b;l++){var o={},n={};o[j]=(g=="pos"?"-=":"+=")+i;n[j]=(g=="pos"?"+=":"-=")+i;c.animate(o,f/2,d.options.easing).animate(n,f/2,d.options.easing);i=h=="hide"?i*2:i/2}if(h=="hide"){l={opacity:0};l[j]=(g=="pos"?"-=":"+=")+i;c.animate(l,f/2,d.options.easing,function(){c.hide();a.effects.restore(c,e);a.effects.removeWrapper(c);
d.callback&&d.callback.apply(this,arguments)})}else{o={};n={};o[j]=(g=="pos"?"-=":"+=")+i;n[j]=(g=="pos"?"+=":"-=")+i;c.animate(o,f/2,d.options.easing).animate(n,f/2,d.options.easing,function(){a.effects.restore(c,e);a.effects.removeWrapper(c);d.callback&&d.callback.apply(this,arguments)})}c.queue("fx",function(){c.dequeue()});c.dequeue()})}})(jQuery);
(function(a){a.effects.clip=function(d){return this.queue(function(){var c=a(this),e=["position","top","bottom","left","right","height","width"],h=a.effects.setMode(c,d.options.mode||"hide"),g=d.options.direction||"vertical";a.effects.save(c,e);c.show();var i=a.effects.createWrapper(c).css({overflow:"hidden"});i=c[0].tagName=="IMG"?i:c;var b={size:g=="vertical"?"height":"width",position:g=="vertical"?"top":"left"};g=g=="vertical"?i.height():i.width();if(h=="show"){i.css(b.size,0);i.css(b.position,
g/2)}var f={};f[b.size]=h=="show"?g:0;f[b.position]=h=="show"?0:g/2;i.animate(f,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){h=="hide"&&c.hide();a.effects.restore(c,e);a.effects.removeWrapper(c);d.callback&&d.callback.apply(c[0],arguments);c.dequeue()}})})}})(jQuery);
(function(a){a.effects.drop=function(d){return this.queue(function(){var c=a(this),e=["position","top","bottom","left","right","opacity"],h=a.effects.setMode(c,d.options.mode||"hide"),g=d.options.direction||"left";a.effects.save(c,e);c.show();a.effects.createWrapper(c);var i=g=="up"||g=="down"?"top":"left";g=g=="up"||g=="left"?"pos":"neg";var b=d.options.distance||(i=="top"?c.outerHeight({margin:true})/2:c.outerWidth({margin:true})/2);if(h=="show")c.css("opacity",0).css(i,g=="pos"?-b:b);var f={opacity:h==
"show"?1:0};f[i]=(h=="show"?g=="pos"?"+=":"-=":g=="pos"?"-=":"+=")+b;c.animate(f,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){h=="hide"&&c.hide();a.effects.restore(c,e);a.effects.removeWrapper(c);d.callback&&d.callback.apply(this,arguments);c.dequeue()}})})}})(jQuery);
(function(a){a.effects.explode=function(d){return this.queue(function(){var c=d.options.pieces?Math.round(Math.sqrt(d.options.pieces)):3,e=d.options.pieces?Math.round(Math.sqrt(d.options.pieces)):3;d.options.mode=d.options.mode=="toggle"?a(this).is(":visible")?"hide":"show":d.options.mode;var h=a(this).show().css("visibility","hidden"),g=h.offset();g.top-=parseInt(h.css("marginTop"),10)||0;g.left-=parseInt(h.css("marginLeft"),10)||0;for(var i=h.outerWidth(true),b=h.outerHeight(true),f=0;f<c;f++)for(var j=
0;j<e;j++)h.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-j*(i/e),top:-f*(b/c)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:i/e,height:b/c,left:g.left+j*(i/e)+(d.options.mode=="show"?(j-Math.floor(e/2))*(i/e):0),top:g.top+f*(b/c)+(d.options.mode=="show"?(f-Math.floor(c/2))*(b/c):0),opacity:d.options.mode=="show"?0:1}).animate({left:g.left+j*(i/e)+(d.options.mode=="show"?0:(j-Math.floor(e/2))*(i/e)),top:g.top+
f*(b/c)+(d.options.mode=="show"?0:(f-Math.floor(c/2))*(b/c)),opacity:d.options.mode=="show"?1:0},d.duration||500);setTimeout(function(){d.options.mode=="show"?h.css({visibility:"visible"}):h.css({visibility:"visible"}).hide();d.callback&&d.callback.apply(h[0]);h.dequeue();a("div.ui-effects-explode").remove()},d.duration||500)})}})(jQuery);
(function(a){a.effects.fade=function(d){return this.queue(function(){var c=a(this),e=a.effects.setMode(c,d.options.mode||"hide");c.animate({opacity:e},{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){d.callback&&d.callback.apply(this,arguments);c.dequeue()}})})}})(jQuery);
(function(a){a.effects.fold=function(d){return this.queue(function(){var c=a(this),e=["position","top","bottom","left","right"],h=a.effects.setMode(c,d.options.mode||"hide"),g=d.options.size||15,i=!!d.options.horizFirst,b=d.duration?d.duration/2:a.fx.speeds._default/2;a.effects.save(c,e);c.show();var f=a.effects.createWrapper(c).css({overflow:"hidden"}),j=h=="show"!=i,l=j?["width","height"]:["height","width"];j=j?[f.width(),f.height()]:[f.height(),f.width()];var o=/([0-9]+)%/.exec(g);if(o)g=parseInt(o[1],
10)/100*j[h=="hide"?0:1];if(h=="show")f.css(i?{height:0,width:g}:{height:g,width:0});i={};o={};i[l[0]]=h=="show"?j[0]:g;o[l[1]]=h=="show"?j[1]:0;f.animate(i,b,d.options.easing).animate(o,b,d.options.easing,function(){h=="hide"&&c.hide();a.effects.restore(c,e);a.effects.removeWrapper(c);d.callback&&d.callback.apply(c[0],arguments);c.dequeue()})})}})(jQuery);
(function(a){a.effects.highlight=function(d){return this.queue(function(){var c=a(this),e=["backgroundImage","backgroundColor","opacity"],h=a.effects.setMode(c,d.options.mode||"show"),g={backgroundColor:c.css("backgroundColor")};if(h=="hide")g.opacity=0;a.effects.save(c,e);c.show().css({backgroundImage:"none",backgroundColor:d.options.color||"#ffff99"}).animate(g,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){h=="hide"&&c.hide();a.effects.restore(c,e);h=="show"&&!a.support.opacity&&
this.style.removeAttribute("filter");d.callback&&d.callback.apply(this,arguments);c.dequeue()}})})}})(jQuery);
(function(a){a.effects.pulsate=function(d){return this.queue(function(){var c=a(this),e=a.effects.setMode(c,d.options.mode||"show");times=(d.options.times||5)*2-1;duration=d.duration?d.duration/2:a.fx.speeds._default/2;isVisible=c.is(":visible");animateTo=0;if(!isVisible){c.css("opacity",0).show();animateTo=1}if(e=="hide"&&isVisible||e=="show"&&!isVisible)times--;for(e=0;e<times;e++){c.animate({opacity:animateTo},duration,d.options.easing);animateTo=(animateTo+1)%2}c.animate({opacity:animateTo},duration,
d.options.easing,function(){animateTo==0&&c.hide();d.callback&&d.callback.apply(this,arguments)});c.queue("fx",function(){c.dequeue()}).dequeue()})}})(jQuery);
(function(a){a.effects.puff=function(d){return this.queue(function(){var c=a(this),e=a.effects.setMode(c,d.options.mode||"hide"),h=parseInt(d.options.percent,10)||150,g=h/100,i={height:c.height(),width:c.width()};a.extend(d.options,{fade:true,mode:e,percent:e=="hide"?h:100,from:e=="hide"?i:{height:i.height*g,width:i.width*g}});c.effect("scale",d.options,d.duration,d.callback);c.dequeue()})};a.effects.scale=function(d){return this.queue(function(){var c=a(this),e=a.extend(true,{},d.options),h=a.effects.setMode(c,
d.options.mode||"effect"),g=parseInt(d.options.percent,10)||(parseInt(d.options.percent,10)==0?0:h=="hide"?0:100),i=d.options.direction||"both",b=d.options.origin;if(h!="effect"){e.origin=b||["middle","center"];e.restore=true}b={height:c.height(),width:c.width()};c.from=d.options.from||(h=="show"?{height:0,width:0}:b);g={y:i!="horizontal"?g/100:1,x:i!="vertical"?g/100:1};c.to={height:b.height*g.y,width:b.width*g.x};if(d.options.fade){if(h=="show"){c.from.opacity=0;c.to.opacity=1}if(h=="hide"){c.from.opacity=
1;c.to.opacity=0}}e.from=c.from;e.to=c.to;e.mode=h;c.effect("size",e,d.duration,d.callback);c.dequeue()})};a.effects.size=function(d){return this.queue(function(){var c=a(this),e=["position","top","bottom","left","right","width","height","overflow","opacity"],h=["position","top","bottom","left","right","overflow","opacity"],g=["width","height","overflow"],i=["fontSize"],b=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],f=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],
j=a.effects.setMode(c,d.options.mode||"effect"),l=d.options.restore||false,o=d.options.scale||"both",n=d.options.origin,k={height:c.height(),width:c.width()};c.from=d.options.from||k;c.to=d.options.to||k;if(n){n=a.effects.getBaseline(n,k);c.from.top=(k.height-c.from.height)*n.y;c.from.left=(k.width-c.from.width)*n.x;c.to.top=(k.height-c.to.height)*n.y;c.to.left=(k.width-c.to.width)*n.x}var m={from:{y:c.from.height/k.height,x:c.from.width/k.width},to:{y:c.to.height/k.height,x:c.to.width/k.width}};
if(o=="box"||o=="both"){if(m.from.y!=m.to.y){e=e.concat(b);c.from=a.effects.setTransition(c,b,m.from.y,c.from);c.to=a.effects.setTransition(c,b,m.to.y,c.to)}if(m.from.x!=m.to.x){e=e.concat(f);c.from=a.effects.setTransition(c,f,m.from.x,c.from);c.to=a.effects.setTransition(c,f,m.to.x,c.to)}}if(o=="content"||o=="both")if(m.from.y!=m.to.y){e=e.concat(i);c.from=a.effects.setTransition(c,i,m.from.y,c.from);c.to=a.effects.setTransition(c,i,m.to.y,c.to)}a.effects.save(c,l?e:h);c.show();a.effects.createWrapper(c);
c.css("overflow","hidden").css(c.from);if(o=="content"||o=="both"){b=b.concat(["marginTop","marginBottom"]).concat(i);f=f.concat(["marginLeft","marginRight"]);g=e.concat(b).concat(f);c.find("*[width]").each(function(){child=a(this);l&&a.effects.save(child,g);var p={height:child.height(),width:child.width()};child.from={height:p.height*m.from.y,width:p.width*m.from.x};child.to={height:p.height*m.to.y,width:p.width*m.to.x};if(m.from.y!=m.to.y){child.from=a.effects.setTransition(child,b,m.from.y,child.from);
child.to=a.effects.setTransition(child,b,m.to.y,child.to)}if(m.from.x!=m.to.x){child.from=a.effects.setTransition(child,f,m.from.x,child.from);child.to=a.effects.setTransition(child,f,m.to.x,child.to)}child.css(child.from);child.animate(child.to,d.duration,d.options.easing,function(){l&&a.effects.restore(child,g)})})}c.animate(c.to,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){c.to.opacity===0&&c.css("opacity",c.from.opacity);j=="hide"&&c.hide();a.effects.restore(c,
l?e:h);a.effects.removeWrapper(c);d.callback&&d.callback.apply(this,arguments);c.dequeue()}})})}})(jQuery);
(function(a){a.effects.shake=function(d){return this.queue(function(){var c=a(this),e=["position","top","bottom","left","right"];a.effects.setMode(c,d.options.mode||"effect");var h=d.options.direction||"left",g=d.options.distance||20,i=d.options.times||3,b=d.duration||d.options.duration||140;a.effects.save(c,e);c.show();a.effects.createWrapper(c);var f=h=="up"||h=="down"?"top":"left",j=h=="up"||h=="left"?"pos":"neg";h={};var l={},o={};h[f]=(j=="pos"?"-=":"+=")+g;l[f]=(j=="pos"?"+=":"-=")+g*2;o[f]=
(j=="pos"?"-=":"+=")+g*2;c.animate(h,b,d.options.easing);for(g=1;g<i;g++)c.animate(l,b,d.options.easing).animate(o,b,d.options.easing);c.animate(l,b,d.options.easing).animate(h,b/2,d.options.easing,function(){a.effects.restore(c,e);a.effects.removeWrapper(c);d.callback&&d.callback.apply(this,arguments)});c.queue("fx",function(){c.dequeue()});c.dequeue()})}})(jQuery);
(function(a){a.effects.slide=function(d){return this.queue(function(){var c=a(this),e=["position","top","bottom","left","right"],h=a.effects.setMode(c,d.options.mode||"show"),g=d.options.direction||"left";a.effects.save(c,e);c.show();a.effects.createWrapper(c).css({overflow:"hidden"});var i=g=="up"||g=="down"?"top":"left";g=g=="up"||g=="left"?"pos":"neg";var b=d.options.distance||(i=="top"?c.outerHeight({margin:true}):c.outerWidth({margin:true}));if(h=="show")c.css(i,g=="pos"?isNaN(b)?"-"+b:-b:b);
var f={};f[i]=(h=="show"?g=="pos"?"+=":"-=":g=="pos"?"-=":"+=")+b;c.animate(f,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){h=="hide"&&c.hide();a.effects.restore(c,e);a.effects.removeWrapper(c);d.callback&&d.callback.apply(this,arguments);c.dequeue()}})})}})(jQuery);
(function(a){a.effects.transfer=function(d){return this.queue(function(){var c=a(this),e=a(d.options.to),h=e.offset();e={top:h.top,left:h.left,height:e.innerHeight(),width:e.innerWidth()};h=c.offset();var g=a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(d.options.className).css({top:h.top,left:h.left,height:c.innerHeight(),width:c.innerWidth(),position:"absolute"}).animate(e,d.duration,d.options.easing,function(){g.remove();d.callback&&d.callback.apply(c[0],arguments);
c.dequeue()})})}})(jQuery);
(function(a){a.widget("ui.accordion",{options:{active:0,animated:"slide",autoHeight:true,clearStyle:false,collapsible:false,event:"click",fillSpace:false,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:false,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()}},_create:function(){var d=this,c=d.options;d.running=0;d.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix");d.headers=
d.element.find(c.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){c.disabled||a(this).addClass("ui-state-hover")}).bind("mouseleave.accordion",function(){c.disabled||a(this).removeClass("ui-state-hover")}).bind("focus.accordion",function(){c.disabled||a(this).addClass("ui-state-focus")}).bind("blur.accordion",function(){c.disabled||a(this).removeClass("ui-state-focus")});d.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
if(c.navigation){var e=d.element.find("a").filter(c.navigationFilter).eq(0);if(e.length){var h=e.closest(".ui-accordion-header");d.active=h.length?h:e.closest(".ui-accordion-content").prev()}}d.active=d._findActive(d.active||c.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");d.active.next().addClass("ui-accordion-content-active");d._createIcons();d.resize();d.element.attr("role","tablist");d.headers.attr("role","tab").bind("keydown.accordion",
function(g){return d._keydown(g)}).next().attr("role","tabpanel");d.headers.not(d.active||"").attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).next().hide();d.active.length?d.active.attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}):d.headers.eq(0).attr("tabIndex",0);a.browser.safari||d.headers.find("a").attr("tabIndex",-1);c.event&&d.headers.bind(c.event.split(" ").join(".accordion ")+".accordion",function(g){d._clickHandler.call(d,g,this);g.preventDefault()})},_createIcons:function(){var d=
this.options;if(d.icons){a("<span></span>").addClass("ui-icon "+d.icons.header).prependTo(this.headers);this.active.children(".ui-icon").toggleClass(d.icons.header).toggleClass(d.icons.headerSelected);this.element.addClass("ui-accordion-icons")}},_destroyIcons:function(){this.headers.children(".ui-icon").remove();this.element.removeClass("ui-accordion-icons")},destroy:function(){var d=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex");
this.headers.find("a").removeAttr("tabIndex");this._destroyIcons();var c=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");if(d.autoHeight||d.fillHeight)c.css("height","");return a.Widget.prototype.destroy.call(this)},_setOption:function(d,c){a.Widget.prototype._setOption.apply(this,arguments);d=="active"&&this.activate(c);if(d=="icons"){this._destroyIcons();
c&&this._createIcons()}if(d=="disabled")this.headers.add(this.headers.next())[c?"addClass":"removeClass"]("ui-accordion-disabled ui-state-disabled")},_keydown:function(d){if(!(this.options.disabled||d.altKey||d.ctrlKey)){var c=a.ui.keyCode,e=this.headers.length,h=this.headers.index(d.target),g=false;switch(d.keyCode){case c.RIGHT:case c.DOWN:g=this.headers[(h+1)%e];break;case c.LEFT:case c.UP:g=this.headers[(h-1+e)%e];break;case c.SPACE:case c.ENTER:this._clickHandler({target:d.target},d.target);
d.preventDefault()}if(g){a(d.target).attr("tabIndex",-1);a(g).attr("tabIndex",0);g.focus();return false}return true}},resize:function(){var d=this.options,c;if(d.fillSpace){if(a.browser.msie){var e=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden")}c=this.element.parent().height();a.browser.msie&&this.element.parent().css("overflow",e);this.headers.each(function(){c-=a(this).outerHeight(true)});this.headers.next().each(function(){a(this).height(Math.max(0,c-a(this).innerHeight()+
a(this).height()))}).css("overflow","auto")}else if(d.autoHeight){c=0;this.headers.next().each(function(){c=Math.max(c,a(this).height("").height())}).height(c)}return this},activate:function(d){this.options.active=d;d=this._findActive(d)[0];this._clickHandler({target:d},d);return this},_findActive:function(d){return d?typeof d==="number"?this.headers.filter(":eq("+d+")"):this.headers.not(this.headers.not(d)):d===false?a([]):this.headers.filter(":eq(0)")},_clickHandler:function(d,c){var e=this.options;
if(!e.disabled)if(d.target){d=a(d.currentTarget||c);c=d[0]===this.active[0];e.active=e.collapsible&&c?false:this.headers.index(d);if(!(this.running||!e.collapsible&&c)){var h=this.active;f=d.next();i=this.active.next();b={options:e,newHeader:c&&e.collapsible?a([]):d,oldHeader:this.active,newContent:c&&e.collapsible?a([]):f,oldContent:i};var g=this.headers.index(this.active[0])>this.headers.index(d[0]);this.active=c?a([]):d;this._toggle(f,i,b,c,g);h.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(e.icons.headerSelected).addClass(e.icons.header);
if(!c){d.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(e.icons.header).addClass(e.icons.headerSelected);d.next().addClass("ui-accordion-content-active")}}}else if(e.collapsible){this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(e.icons.headerSelected).addClass(e.icons.header);this.active.next().addClass("ui-accordion-content-active");var i=this.active.next(),
b={options:e,newHeader:a([]),oldHeader:e.active,newContent:a([]),oldContent:i},f=this.active=a([]);this._toggle(f,i,b)}},_toggle:function(d,c,e,h,g){var i=this,b=i.options;i.toShow=d;i.toHide=c;i.data=e;var f=function(){if(i)return i._completed.apply(i,arguments)};i._trigger("changestart",null,i.data);i.running=c.size()===0?d.size():c.size();if(b.animated){e={};e=b.collapsible&&h?{toShow:a([]),toHide:c,complete:f,down:g,autoHeight:b.autoHeight||b.fillSpace}:{toShow:d,toHide:c,complete:f,down:g,autoHeight:b.autoHeight||
b.fillSpace};if(!b.proxied)b.proxied=b.animated;if(!b.proxiedDuration)b.proxiedDuration=b.duration;b.animated=a.isFunction(b.proxied)?b.proxied(e):b.proxied;b.duration=a.isFunction(b.proxiedDuration)?b.proxiedDuration(e):b.proxiedDuration;h=a.ui.accordion.animations;var j=b.duration,l=b.animated;if(l&&!h[l]&&!a.easing[l])l="slide";h[l]||(h[l]=function(o){this.slide(o,{easing:l,duration:j||700})});h[l](e)}else{if(b.collapsible&&h)d.toggle();else{c.hide();d.show()}f(true)}c.prev().attr({"aria-expanded":"false",
"aria-selected":"false",tabIndex:-1}).blur();d.prev().attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}).focus()},_completed:function(d){this.running=d?0:--this.running;if(!this.running){this.options.clearStyle&&this.toShow.add(this.toHide).css({height:"",overflow:""});this.toHide.removeClass("ui-accordion-content-active");if(this.toHide.length)this.toHide.parent()[0].className=this.toHide.parent()[0].className;this._trigger("change",null,this.data)}}});a.extend(a.ui.accordion,{version:"1.8.16",
animations:{slide:function(d,c){d=a.extend({easing:"swing",duration:300},d,c);if(d.toHide.size())if(d.toShow.size()){var e=d.toShow.css("overflow"),h=0,g={},i={},b;c=d.toShow;b=c[0].style.width;c.width(parseInt(c.parent().width(),10)-parseInt(c.css("paddingLeft"),10)-parseInt(c.css("paddingRight"),10)-(parseInt(c.css("borderLeftWidth"),10)||0)-(parseInt(c.css("borderRightWidth"),10)||0));a.each(["height","paddingTop","paddingBottom"],function(f,j){i[j]="hide";f=(""+a.css(d.toShow[0],j)).match(/^([\d+-.]+)(.*)$/);
g[j]={value:f[1],unit:f[2]||"px"}});d.toShow.css({height:0,overflow:"hidden"}).show();d.toHide.filter(":hidden").each(d.complete).end().filter(":visible").animate(i,{step:function(f,j){if(j.prop=="height")h=j.end-j.start===0?0:(j.now-j.start)/(j.end-j.start);d.toShow[0].style[j.prop]=h*g[j.prop].value+g[j.prop].unit},duration:d.duration,easing:d.easing,complete:function(){d.autoHeight||d.toShow.css("height","");d.toShow.css({width:b,overflow:e});d.complete()}})}else d.toHide.animate({height:"hide",
paddingTop:"hide",paddingBottom:"hide"},d);else d.toShow.animate({height:"show",paddingTop:"show",paddingBottom:"show"},d)},bounceslide:function(d){this.slide(d,{easing:d.down?"easeOutBounce":"swing",duration:d.down?1E3:200})}}})})(jQuery);
(function(a){var d=0;a.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var c=this,e=this.element[0].ownerDocument,h;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(g){if(!(c.options.disabled||c.element.propAttr("readOnly"))){h=
false;var i=a.ui.keyCode;switch(g.keyCode){case i.PAGE_UP:c._move("previousPage",g);break;case i.PAGE_DOWN:c._move("nextPage",g);break;case i.UP:c._move("previous",g);g.preventDefault();break;case i.DOWN:c._move("next",g);g.preventDefault();break;case i.ENTER:case i.NUMPAD_ENTER:if(c.menu.active){h=true;g.preventDefault()}case i.TAB:if(!c.menu.active)return;c.menu.select(g);break;case i.ESCAPE:c.element.val(c.term);c.close(g);break;default:clearTimeout(c.searching);c.searching=setTimeout(function(){if(c.term!=
c.element.val()){c.selectedItem=null;c.search(null,g)}},c.options.delay);break}}}).bind("keypress.autocomplete",function(g){if(h){h=false;g.preventDefault()}}).bind("focus.autocomplete",function(){if(!c.options.disabled){c.selectedItem=null;c.previous=c.element.val()}}).bind("blur.autocomplete",function(g){if(!c.options.disabled){clearTimeout(c.searching);c.closing=setTimeout(function(){c.close(g);c._change(g)},150)}});this._initSource();this.response=function(){return c._response.apply(c,arguments)};
this.menu=a("<ul></ul>").addClass("ui-autocomplete").appendTo(a(this.options.appendTo||"body",e)[0]).mousedown(function(g){var i=c.menu.element[0];a(g.target).closest(".ui-menu-item").length||setTimeout(function(){a(document).one("mousedown",function(b){b.target!==c.element[0]&&b.target!==i&&!a.ui.contains(i,b.target)&&c.close()})},1);setTimeout(function(){clearTimeout(c.closing)},13)}).menu({focus:function(g,i){i=i.item.data("item.autocomplete");false!==c._trigger("focus",g,{item:i})&&/^key/.test(g.originalEvent.type)&&
c.element.val(i.value)},selected:function(g,i){var b=i.item.data("item.autocomplete"),f=c.previous;if(c.element[0]!==e.activeElement){c.element.focus();c.previous=f;setTimeout(function(){c.previous=f;c.selectedItem=b},1)}false!==c._trigger("select",g,{item:b})&&c.element.val(b.value);c.term=c.element.val();c.close(g);c.selectedItem=b},blur:function(){c.menu.element.is(":visible")&&c.element.val()!==c.term&&c.element.val(c.term)}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu");
a.fn.bgiframe&&this.menu.element.bgiframe()},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");this.menu.element.remove();a.Widget.prototype.destroy.call(this)},_setOption:function(c,e){a.Widget.prototype._setOption.apply(this,arguments);c==="source"&&this._initSource();if(c==="appendTo")this.menu.element.appendTo(a(e||"body",this.element[0].ownerDocument)[0]);c==="disabled"&&
e&&this.xhr&&this.xhr.abort()},_initSource:function(){var c=this,e,h;if(a.isArray(this.options.source)){e=this.options.source;this.source=function(g,i){i(a.ui.autocomplete.filter(e,g.term))}}else if(typeof this.options.source==="string"){h=this.options.source;this.source=function(g,i){c.xhr&&c.xhr.abort();c.xhr=a.ajax({url:h,data:g,dataType:"json",autocompleteRequest:++d,success:function(b){this.autocompleteRequest===d&&i(b)},error:function(){this.autocompleteRequest===d&&i([])}})}}else this.source=
this.options.source},search:function(c,e){c=c!=null?c:this.element.val();this.term=this.element.val();if(c.length<this.options.minLength)return this.close(e);clearTimeout(this.closing);if(this._trigger("search",e)!==false)return this._search(c)},_search:function(c){this.pending++;this.element.addClass("ui-autocomplete-loading");this.source({term:c},this.response)},_response:function(c){if(!this.options.disabled&&c&&c.length){c=this._normalize(c);this._suggest(c);this._trigger("open")}else this.close();
this.pending--;this.pending||this.element.removeClass("ui-autocomplete-loading")},close:function(c){clearTimeout(this.closing);if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.deactivate();this._trigger("close",c)}},_change:function(c){this.previous!==this.element.val()&&this._trigger("change",c,{item:this.selectedItem})},_normalize:function(c){if(c.length&&c[0].label&&c[0].value)return c;return a.map(c,function(e){if(typeof e==="string")return{label:e,value:e};return a.extend({label:e.label||
e.value,value:e.value||e.label},e)})},_suggest:function(c){var e=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(e,c);this.menu.deactivate();this.menu.refresh();e.show();this._resizeMenu();e.position(a.extend({of:this.element},this.options.position));this.options.autoFocus&&this.menu.next(new a.Event("mouseover"))},_resizeMenu:function(){var c=this.menu.element;c.outerWidth(Math.max(c.width("").outerWidth(),this.element.outerWidth()))},_renderMenu:function(c,e){var h=this;
a.each(e,function(g,i){h._renderItem(c,i)})},_renderItem:function(c,e){return a("<li></li>").data("item.autocomplete",e).append(a("<a></a>").text(e.label)).appendTo(c)},_move:function(c,e){if(this.menu.element.is(":visible"))if(this.menu.first()&&/^previous/.test(c)||this.menu.last()&&/^next/.test(c)){this.element.val(this.term);this.menu.deactivate()}else this.menu[c](e);else this.search(null,e)},widget:function(){return this.menu.element}});a.extend(a.ui.autocomplete,{escapeRegex:function(c){return c.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,
"\\$&")},filter:function(c,e){var h=new RegExp(a.ui.autocomplete.escapeRegex(e),"i");return a.grep(c,function(g){return h.test(g.label||g.value||g)})}})})(jQuery);
(function(a){a.widget("ui.menu",{_create:function(){var d=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(c){if(a(c.target).closest(".ui-menu-item a").length){c.preventDefault();d.select(c)}});this.refresh()},refresh:function(){var d=this;this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem").children("a").addClass("ui-corner-all").attr("tabindex",
-1).mouseenter(function(c){d.activate(c,a(this).parent())}).mouseleave(function(){d.deactivate()})},activate:function(d,c){this.deactivate();if(this.hasScroll()){var e=c.offset().top-this.element.offset().top,h=this.element.scrollTop(),g=this.element.height();if(e<0)this.element.scrollTop(h+e);else e>=g&&this.element.scrollTop(h+e-g+c.height())}this.active=c.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();this._trigger("focus",d,{item:c})},deactivate:function(){if(this.active){this.active.children("a").removeClass("ui-state-hover").removeAttr("id");
this._trigger("blur");this.active=null}},next:function(d){this.move("next",".ui-menu-item:first",d)},previous:function(d){this.move("prev",".ui-menu-item:last",d)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(d,c,e){if(this.active){d=this.active[d+"All"](".ui-menu-item").eq(0);d.length?this.activate(e,d):this.activate(e,this.element.children(c))}else this.activate(e,
this.element.children(c))},nextPage:function(d){if(this.hasScroll())if(!this.active||this.last())this.activate(d,this.element.children(".ui-menu-item:first"));else{var c=this.active.offset().top,e=this.element.height(),h=this.element.children(".ui-menu-item").filter(function(){var g=a(this).offset().top-c-e+a(this).height();return g<10&&g>-10});h.length||(h=this.element.children(".ui-menu-item:last"));this.activate(d,h)}else this.activate(d,this.element.children(".ui-menu-item").filter(!this.active||
this.last()?":first":":last"))},previousPage:function(d){if(this.hasScroll())if(!this.active||this.first())this.activate(d,this.element.children(".ui-menu-item:last"));else{var c=this.active.offset().top,e=this.element.height();result=this.element.children(".ui-menu-item").filter(function(){var h=a(this).offset().top-c+e-a(this).height();return h<10&&h>-10});result.length||(result=this.element.children(".ui-menu-item:first"));this.activate(d,result)}else this.activate(d,this.element.children(".ui-menu-item").filter(!this.active||
this.first()?":last":":first"))},hasScroll:function(){return this.element.height()<this.element[a.fn.prop?"prop":"attr"]("scrollHeight")},select:function(d){this._trigger("selected",d,{item:this.active})}})})(jQuery);
(function(a){var d,c,e,h,g=function(){var b=a(this).find(":ui-button");setTimeout(function(){b.button("refresh")},1)},i=function(b){var f=b.name,j=b.form,l=a([]);if(f)l=j?a(j).find("[name='"+f+"']"):a("[name='"+f+"']",b.ownerDocument).filter(function(){return!this.form});return l};a.widget("ui.button",{options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",g);if(typeof this.options.disabled!==
"boolean")this.options.disabled=this.element.propAttr("disabled");this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var b=this,f=this.options,j=this.type==="checkbox"||this.type==="radio",l="ui-state-hover"+(!j?" ui-state-active":"");if(f.label===null)f.label=this.buttonElement.html();if(this.element.is(":disabled"))f.disabled=true;this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role","button").bind("mouseenter.button",function(){if(!f.disabled){a(this).addClass("ui-state-hover");
this===d&&a(this).addClass("ui-state-active")}}).bind("mouseleave.button",function(){f.disabled||a(this).removeClass(l)}).bind("click.button",function(o){if(f.disabled){o.preventDefault();o.stopImmediatePropagation()}});this.element.bind("focus.button",function(){b.buttonElement.addClass("ui-state-focus")}).bind("blur.button",function(){b.buttonElement.removeClass("ui-state-focus")});if(j){this.element.bind("change.button",function(){h||b.refresh()});this.buttonElement.bind("mousedown.button",function(o){if(!f.disabled){h=
false;c=o.pageX;e=o.pageY}}).bind("mouseup.button",function(o){if(!f.disabled)if(c!==o.pageX||e!==o.pageY)h=true})}if(this.type==="checkbox")this.buttonElement.bind("click.button",function(){if(f.disabled||h)return false;a(this).toggleClass("ui-state-active");b.buttonElement.attr("aria-pressed",b.element[0].checked)});else if(this.type==="radio")this.buttonElement.bind("click.button",function(){if(f.disabled||h)return false;a(this).addClass("ui-state-active");b.buttonElement.attr("aria-pressed","true");
var o=b.element[0];i(o).not(o).map(function(){return a(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")});else{this.buttonElement.bind("mousedown.button",function(){if(f.disabled)return false;a(this).addClass("ui-state-active");d=this;a(document).one("mouseup",function(){d=null})}).bind("mouseup.button",function(){if(f.disabled)return false;a(this).removeClass("ui-state-active")}).bind("keydown.button",function(o){if(f.disabled)return false;if(o.keyCode==a.ui.keyCode.SPACE||
o.keyCode==a.ui.keyCode.ENTER)a(this).addClass("ui-state-active")}).bind("keyup.button",function(){a(this).removeClass("ui-state-active")});this.buttonElement.is("a")&&this.buttonElement.keyup(function(o){o.keyCode===a.ui.keyCode.SPACE&&a(this).click()})}this._setOption("disabled",f.disabled);this._resetButton()},_determineButtonType:function(){this.type=this.element.is(":checkbox")?"checkbox":this.element.is(":radio")?"radio":this.element.is("input")?"input":"button";if(this.type==="checkbox"||this.type===
"radio"){var b=this.element.parents().filter(":last"),f="label[for='"+this.element.attr("id")+"']";this.buttonElement=b.find(f);if(!this.buttonElement.length){b=b.length?b.siblings():this.element.siblings();this.buttonElement=b.filter(f);if(!this.buttonElement.length)this.buttonElement=b.find(f)}this.element.addClass("ui-helper-hidden-accessible");(b=this.element.is(":checked"))&&this.buttonElement.addClass("ui-state-active");this.buttonElement.attr("aria-pressed",b)}else this.buttonElement=this.element},
widget:function(){return this.buttonElement},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());this.hasTitle||this.buttonElement.removeAttr("title");
a.Widget.prototype.destroy.call(this)},_setOption:function(b,f){a.Widget.prototype._setOption.apply(this,arguments);if(b==="disabled")f?this.element.propAttr("disabled",true):this.element.propAttr("disabled",false);else this._resetButton()},refresh:function(){var b=this.element.is(":disabled");b!==this.options.disabled&&this._setOption("disabled",b);if(this.type==="radio")i(this.element[0]).each(function(){a(this).is(":checked")?a(this).button("widget").addClass("ui-state-active").attr("aria-pressed",
"true"):a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")});else if(this.type==="checkbox")this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false")},_resetButton:function(){if(this.type==="input")this.options.label&&this.element.val(this.options.label);else{var b=this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
f=a("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),j=this.options.icons,l=j.primary&&j.secondary,o=[];if(j.primary||j.secondary){if(this.options.text)o.push("ui-button-text-icon"+(l?"s":j.primary?"-primary":"-secondary"));j.primary&&b.prepend("<span class='ui-button-icon-primary ui-icon "+j.primary+"'></span>");j.secondary&&b.append("<span class='ui-button-icon-secondary ui-icon "+j.secondary+"'></span>");if(!this.options.text){o.push(l?"ui-button-icons-only":
"ui-button-icon-only");this.hasTitle||b.attr("title",f)}}else o.push("ui-button-text-only");b.addClass(o.join(" "))}}});a.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(b,f){b==="disabled"&&this.buttons.button("option",b,f);a.Widget.prototype._setOption.apply(this,arguments)},refresh:function(){var b=this.element.css("direction")===
"ltr";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b?"ui-corner-left":"ui-corner-right").end().filter(":last").addClass(b?"ui-corner-right":"ui-corner-left").end().end()},destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy");
a.Widget.prototype.destroy.call(this)}})})(jQuery);
(function(a,d){function c(){this.debug=false;this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._inDialog=this._datepickerShowing=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass=
"ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su",
"Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",
minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false};a.extend(this._defaults,this.regional[""]);this.dpDiv=e(a('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}function e(b){return b.bind("mouseout",
function(f){f=a(f.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a");f.length&&f.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")}).bind("mouseover",function(f){f=a(f.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a");if(!(a.datepicker._isDisabledDatepicker(i.inline?b.parent()[0]:i.input[0])||!f.length)){f.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
f.addClass("ui-state-hover");f.hasClass("ui-datepicker-prev")&&f.addClass("ui-datepicker-prev-hover");f.hasClass("ui-datepicker-next")&&f.addClass("ui-datepicker-next-hover")}})}function h(b,f){a.extend(b,f);for(var j in f)if(f[j]==null||f[j]==d)b[j]=f[j];return b}a.extend(a.ui,{datepicker:{version:"1.8.16"}});var g=(new Date).getTime(),i;a.extend(c.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},
setDefaults:function(b){h(this._defaults,b||{});return this},_attachDatepicker:function(b,f){var j=null;for(var l in this._defaults){var o=b.getAttribute("date:"+l);if(o){j=j||{};try{j[l]=eval(o)}catch(n){j[l]=o}}}l=b.nodeName.toLowerCase();o=l=="div"||l=="span";if(!b.id){this.uuid+=1;b.id="dp"+this.uuid}var k=this._newInst(a(b),o);k.settings=a.extend({},f||{},j||{});if(l=="input")this._connectDatepicker(b,k);else o&&this._inlineDatepicker(b,k)},_newInst:function(b,f){return{id:b[0].id.replace(/([^A-Za-z0-9_-])/g,
"\\\\$1"),input:b,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:f,dpDiv:!f?this.dpDiv:e(a('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}},_connectDatepicker:function(b,f){var j=a(b);f.append=a([]);f.trigger=a([]);if(!j.hasClass(this.markerClassName)){this._attachments(j,f);j.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",
function(l,o,n){f.settings[o]=n}).bind("getData.datepicker",function(l,o){return this._get(f,o)});this._autoSize(f);a.data(b,"datepicker",f);f.settings.disabled&&this._disableDatepicker(b)}},_attachments:function(b,f){var j=this._get(f,"appendText"),l=this._get(f,"isRTL");f.append&&f.append.remove();if(j){f.append=a('<span class="'+this._appendClass+'">'+j+"</span>");b[l?"before":"after"](f.append)}b.unbind("focus",this._showDatepicker);f.trigger&&f.trigger.remove();j=this._get(f,"showOn");if(j==
"focus"||j=="both")b.focus(this._showDatepicker);if(j=="button"||j=="both"){j=this._get(f,"buttonText");var o=this._get(f,"buttonImage");f.trigger=a(this._get(f,"buttonImageOnly")?a("<img/>").addClass(this._triggerClass).attr({src:o,alt:j,title:j}):a('<button type="button"></button>').addClass(this._triggerClass).html(o==""?j:a("<img/>").attr({src:o,alt:j,title:j})));b[l?"before":"after"](f.trigger);f.trigger.click(function(){a.datepicker._datepickerShowing&&a.datepicker._lastInput==b[0]?a.datepicker._hideDatepicker():
a.datepicker._showDatepicker(b[0]);return false})}},_autoSize:function(b){if(this._get(b,"autoSize")&&!b.inline){var f=new Date(2009,11,20),j=this._get(b,"dateFormat");if(j.match(/[DM]/)){var l=function(o){for(var n=0,k=0,m=0;m<o.length;m++)if(o[m].length>n){n=o[m].length;k=m}return k};f.setMonth(l(this._get(b,j.match(/MM/)?"monthNames":"monthNamesShort")));f.setDate(l(this._get(b,j.match(/DD/)?"dayNames":"dayNamesShort"))+20-f.getDay())}b.input.attr("size",this._formatDate(b,f).length)}},_inlineDatepicker:function(b,
f){var j=a(b);if(!j.hasClass(this.markerClassName)){j.addClass(this.markerClassName).append(f.dpDiv).bind("setData.datepicker",function(l,o,n){f.settings[o]=n}).bind("getData.datepicker",function(l,o){return this._get(f,o)});a.data(b,"datepicker",f);this._setDate(f,this._getDefaultDate(f),true);this._updateDatepicker(f);this._updateAlternate(f);f.settings.disabled&&this._disableDatepicker(b);f.dpDiv.css("display","block")}},_dialogDatepicker:function(b,f,j,l,o){b=this._dialogInst;if(!b){this.uuid+=
1;this._dialogInput=a('<input type="text" id="'+("dp"+this.uuid)+'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');this._dialogInput.keydown(this._doKeyDown);a("body").append(this._dialogInput);b=this._dialogInst=this._newInst(this._dialogInput,false);b.settings={};a.data(this._dialogInput[0],"datepicker",b)}h(b.settings,l||{});f=f&&f.constructor==Date?this._formatDate(b,f):f;this._dialogInput.val(f);this._pos=o?o.length?o:[o.pageX,o.pageY]:null;if(!this._pos)this._pos=[document.documentElement.clientWidth/
2-100+(document.documentElement.scrollLeft||document.body.scrollLeft),document.documentElement.clientHeight/2-150+(document.documentElement.scrollTop||document.body.scrollTop)];this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px");b.settings.onSelect=j;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);a.blockUI&&a.blockUI(this.dpDiv);a.data(this._dialogInput[0],"datepicker",b);return this},_destroyDatepicker:function(b){var f=
a(b),j=a.data(b,"datepicker");if(f.hasClass(this.markerClassName)){var l=b.nodeName.toLowerCase();a.removeData(b,"datepicker");if(l=="input"){j.append.remove();j.trigger.remove();f.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)}else if(l=="div"||l=="span")f.removeClass(this.markerClassName).empty()}},_enableDatepicker:function(b){var f=a(b),j=a.data(b,"datepicker");if(f.hasClass(this.markerClassName)){var l=
b.nodeName.toLowerCase();if(l=="input"){b.disabled=false;j.trigger.filter("button").each(function(){this.disabled=false}).end().filter("img").css({opacity:"1.0",cursor:""})}else if(l=="div"||l=="span"){f=f.children("."+this._inlineClass);f.children().removeClass("ui-state-disabled");f.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")}this._disabledInputs=a.map(this._disabledInputs,function(o){return o==b?null:o})}},_disableDatepicker:function(b){var f=a(b),j=a.data(b,
"datepicker");if(f.hasClass(this.markerClassName)){var l=b.nodeName.toLowerCase();if(l=="input"){b.disabled=true;j.trigger.filter("button").each(function(){this.disabled=true}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else if(l=="div"||l=="span"){f=f.children("."+this._inlineClass);f.children().addClass("ui-state-disabled");f.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled","disabled")}this._disabledInputs=a.map(this._disabledInputs,function(o){return o==
b?null:o});this._disabledInputs[this._disabledInputs.length]=b}},_isDisabledDatepicker:function(b){if(!b)return false;for(var f=0;f<this._disabledInputs.length;f++)if(this._disabledInputs[f]==b)return true;return false},_getInst:function(b){try{return a.data(b,"datepicker")}catch(f){throw"Missing instance data for this datepicker";}},_optionDatepicker:function(b,f,j){var l=this._getInst(b);if(arguments.length==2&&typeof f=="string")return f=="defaults"?a.extend({},a.datepicker._defaults):l?f=="all"?
a.extend({},l.settings):this._get(l,f):null;var o=f||{};if(typeof f=="string"){o={};o[f]=j}if(l){this._curInst==l&&this._hideDatepicker();var n=this._getDateDatepicker(b,true),k=this._getMinMaxDate(l,"min"),m=this._getMinMaxDate(l,"max");h(l.settings,o);if(k!==null&&o.dateFormat!==d&&o.minDate===d)l.settings.minDate=this._formatDate(l,k);if(m!==null&&o.dateFormat!==d&&o.maxDate===d)l.settings.maxDate=this._formatDate(l,m);this._attachments(a(b),l);this._autoSize(l);this._setDate(l,n);this._updateAlternate(l);
this._updateDatepicker(l)}},_changeDatepicker:function(b,f,j){this._optionDatepicker(b,f,j)},_refreshDatepicker:function(b){(b=this._getInst(b))&&this._updateDatepicker(b)},_setDateDatepicker:function(b,f){if(b=this._getInst(b)){this._setDate(b,f);this._updateDatepicker(b);this._updateAlternate(b)}},_getDateDatepicker:function(b,f){(b=this._getInst(b))&&!b.inline&&this._setDateFromField(b,f);return b?this._getDate(b):null},_doKeyDown:function(b){var f=a.datepicker._getInst(b.target),j=true,l=f.dpDiv.is(".ui-datepicker-rtl");
f._keyEvent=true;if(a.datepicker._datepickerShowing)switch(b.keyCode){case 9:a.datepicker._hideDatepicker();j=false;break;case 13:j=a("td."+a.datepicker._dayOverClass+":not(."+a.datepicker._currentClass+")",f.dpDiv);j[0]&&a.datepicker._selectDay(b.target,f.selectedMonth,f.selectedYear,j[0]);if(b=a.datepicker._get(f,"onSelect")){j=a.datepicker._formatDate(f);b.apply(f.input?f.input[0]:null,[j,f])}else a.datepicker._hideDatepicker();return false;case 27:a.datepicker._hideDatepicker();break;case 33:a.datepicker._adjustDate(b.target,
b.ctrlKey?-a.datepicker._get(f,"stepBigMonths"):-a.datepicker._get(f,"stepMonths"),"M");break;case 34:a.datepicker._adjustDate(b.target,b.ctrlKey?+a.datepicker._get(f,"stepBigMonths"):+a.datepicker._get(f,"stepMonths"),"M");break;case 35:if(b.ctrlKey||b.metaKey)a.datepicker._clearDate(b.target);j=b.ctrlKey||b.metaKey;break;case 36:if(b.ctrlKey||b.metaKey)a.datepicker._gotoToday(b.target);j=b.ctrlKey||b.metaKey;break;case 37:if(b.ctrlKey||b.metaKey)a.datepicker._adjustDate(b.target,l?+1:-1,"D");j=
b.ctrlKey||b.metaKey;if(b.originalEvent.altKey)a.datepicker._adjustDate(b.target,b.ctrlKey?-a.datepicker._get(f,"stepBigMonths"):-a.datepicker._get(f,"stepMonths"),"M");break;case 38:if(b.ctrlKey||b.metaKey)a.datepicker._adjustDate(b.target,-7,"D");j=b.ctrlKey||b.metaKey;break;case 39:if(b.ctrlKey||b.metaKey)a.datepicker._adjustDate(b.target,l?-1:+1,"D");j=b.ctrlKey||b.metaKey;if(b.originalEvent.altKey)a.datepicker._adjustDate(b.target,b.ctrlKey?+a.datepicker._get(f,"stepBigMonths"):+a.datepicker._get(f,
"stepMonths"),"M");break;case 40:if(b.ctrlKey||b.metaKey)a.datepicker._adjustDate(b.target,+7,"D");j=b.ctrlKey||b.metaKey;break;default:j=false}else if(b.keyCode==36&&b.ctrlKey)a.datepicker._showDatepicker(this);else j=false;if(j){b.preventDefault();b.stopPropagation()}},_doKeyPress:function(b){var f=a.datepicker._getInst(b.target);if(a.datepicker._get(f,"constrainInput")){f=a.datepicker._possibleChars(a.datepicker._get(f,"dateFormat"));var j=String.fromCharCode(b.charCode==d?b.keyCode:b.charCode);
return b.ctrlKey||b.metaKey||j<" "||!f||f.indexOf(j)>-1}},_doKeyUp:function(b){b=a.datepicker._getInst(b.target);if(b.input.val()!=b.lastVal)try{if(a.datepicker.parseDate(a.datepicker._get(b,"dateFormat"),b.input?b.input.val():null,a.datepicker._getFormatConfig(b))){a.datepicker._setDateFromField(b);a.datepicker._updateAlternate(b);a.datepicker._updateDatepicker(b)}}catch(f){a.datepicker.log(f)}return true},_showDatepicker:function(b){b=b.target||b;if(b.nodeName.toLowerCase()!="input")b=a("input",
b.parentNode)[0];if(!(a.datepicker._isDisabledDatepicker(b)||a.datepicker._lastInput==b)){var f=a.datepicker._getInst(b);if(a.datepicker._curInst&&a.datepicker._curInst!=f){a.datepicker._datepickerShowing&&a.datepicker._triggerOnClose(a.datepicker._curInst);a.datepicker._curInst.dpDiv.stop(true,true)}var j=a.datepicker._get(f,"beforeShow");j=j?j.apply(b,[b,f]):{};if(j!==false){h(f.settings,j);f.lastVal=null;a.datepicker._lastInput=b;a.datepicker._setDateFromField(f);if(a.datepicker._inDialog)b.value=
"";if(!a.datepicker._pos){a.datepicker._pos=a.datepicker._findPos(b);a.datepicker._pos[1]+=b.offsetHeight}var l=false;a(b).parents().each(function(){l|=a(this).css("position")=="fixed";return!l});if(l&&a.browser.opera){a.datepicker._pos[0]-=document.documentElement.scrollLeft;a.datepicker._pos[1]-=document.documentElement.scrollTop}j={left:a.datepicker._pos[0],top:a.datepicker._pos[1]};a.datepicker._pos=null;f.dpDiv.empty();f.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});a.datepicker._updateDatepicker(f);
j=a.datepicker._checkOffset(f,j,l);f.dpDiv.css({position:a.datepicker._inDialog&&a.blockUI?"static":l?"fixed":"absolute",display:"none",left:j.left+"px",top:j.top+"px"});if(!f.inline){j=a.datepicker._get(f,"showAnim");var o=a.datepicker._get(f,"duration"),n=function(){var k=f.dpDiv.find("iframe.ui-datepicker-cover");if(k.length){var m=a.datepicker._getBorders(f.dpDiv);k.css({left:-m[0],top:-m[1],width:f.dpDiv.outerWidth(),height:f.dpDiv.outerHeight()})}};f.dpDiv.zIndex(a(b).zIndex()+1);a.datepicker._datepickerShowing=
true;a.effects&&a.effects[j]?f.dpDiv.show(j,a.datepicker._get(f,"showOptions"),o,n):f.dpDiv[j||"show"](j?o:null,n);if(!j||!o)n();f.input.is(":visible")&&!f.input.is(":disabled")&&f.input.focus();a.datepicker._curInst=f}}}},_updateDatepicker:function(b){this.maxRows=4;var f=a.datepicker._getBorders(b.dpDiv);i=b;b.dpDiv.empty().append(this._generateHTML(b));var j=b.dpDiv.find("iframe.ui-datepicker-cover");j.length&&j.css({left:-f[0],top:-f[1],width:b.dpDiv.outerWidth(),height:b.dpDiv.outerHeight()});
b.dpDiv.find("."+this._dayOverClass+" a").mouseover();f=this._getNumberOfMonths(b);j=f[1];b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");j>1&&b.dpDiv.addClass("ui-datepicker-multi-"+j).css("width",17*j+"em");b.dpDiv[(f[0]!=1||f[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");b.dpDiv[(this._get(b,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");b==a.datepicker._curInst&&a.datepicker._datepickerShowing&&b.input&&b.input.is(":visible")&&
!b.input.is(":disabled")&&b.input[0]!=document.activeElement&&b.input.focus();if(b.yearshtml){var l=b.yearshtml;setTimeout(function(){l===b.yearshtml&&b.yearshtml&&b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml);l=b.yearshtml=null},0)}},_getBorders:function(b){var f=function(j){return{thin:1,medium:2,thick:3}[j]||j};return[parseFloat(f(b.css("border-left-width"))),parseFloat(f(b.css("border-top-width")))]},_checkOffset:function(b,f,j){var l=b.dpDiv.outerWidth(),o=b.dpDiv.outerHeight(),
n=b.input?b.input.outerWidth():0,k=b.input?b.input.outerHeight():0,m=document.documentElement.clientWidth+a(document).scrollLeft(),p=document.documentElement.clientHeight+a(document).scrollTop();f.left-=this._get(b,"isRTL")?l-n:0;f.left-=j&&f.left==b.input.offset().left?a(document).scrollLeft():0;f.top-=j&&f.top==b.input.offset().top+k?a(document).scrollTop():0;f.left-=Math.min(f.left,f.left+l>m&&m>l?Math.abs(f.left+l-m):0);f.top-=Math.min(f.top,f.top+o>p&&p>o?Math.abs(o+k):0);return f},_findPos:function(b){for(var f=
this._get(this._getInst(b),"isRTL");b&&(b.type=="hidden"||b.nodeType!=1||a.expr.filters.hidden(b));)b=b[f?"previousSibling":"nextSibling"];b=a(b).offset();return[b.left,b.top]},_triggerOnClose:function(b){var f=this._get(b,"onClose");if(f)f.apply(b.input?b.input[0]:null,[b.input?b.input.val():"",b])},_hideDatepicker:function(b){var f=this._curInst;if(!(!f||b&&f!=a.data(b,"datepicker")))if(this._datepickerShowing){b=this._get(f,"showAnim");var j=this._get(f,"duration"),l=function(){a.datepicker._tidyDialog(f);
this._curInst=null};a.effects&&a.effects[b]?f.dpDiv.hide(b,a.datepicker._get(f,"showOptions"),j,l):f.dpDiv[b=="slideDown"?"slideUp":b=="fadeIn"?"fadeOut":"hide"](b?j:null,l);b||l();a.datepicker._triggerOnClose(f);this._datepickerShowing=false;this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if(a.blockUI){a.unblockUI();a("body").append(this.dpDiv)}}this._inDialog=false}},_tidyDialog:function(b){b.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},
_checkExternalClick:function(b){if(a.datepicker._curInst){b=a(b.target);b[0].id!=a.datepicker._mainDivId&&b.parents("#"+a.datepicker._mainDivId).length==0&&!b.hasClass(a.datepicker.markerClassName)&&!b.hasClass(a.datepicker._triggerClass)&&a.datepicker._datepickerShowing&&!(a.datepicker._inDialog&&a.blockUI)&&a.datepicker._hideDatepicker()}},_adjustDate:function(b,f,j){b=a(b);var l=this._getInst(b[0]);if(!this._isDisabledDatepicker(b[0])){this._adjustInstDate(l,f+(j=="M"?this._get(l,"showCurrentAtPos"):
0),j);this._updateDatepicker(l)}},_gotoToday:function(b){b=a(b);var f=this._getInst(b[0]);if(this._get(f,"gotoCurrent")&&f.currentDay){f.selectedDay=f.currentDay;f.drawMonth=f.selectedMonth=f.currentMonth;f.drawYear=f.selectedYear=f.currentYear}else{var j=new Date;f.selectedDay=j.getDate();f.drawMonth=f.selectedMonth=j.getMonth();f.drawYear=f.selectedYear=j.getFullYear()}this._notifyChange(f);this._adjustDate(b)},_selectMonthYear:function(b,f,j){b=a(b);var l=this._getInst(b[0]);l["selected"+(j=="M"?
"Month":"Year")]=l["draw"+(j=="M"?"Month":"Year")]=parseInt(f.options[f.selectedIndex].value,10);this._notifyChange(l);this._adjustDate(b)},_selectDay:function(b,f,j,l){var o=a(b);if(!(a(l).hasClass(this._unselectableClass)||this._isDisabledDatepicker(o[0]))){o=this._getInst(o[0]);o.selectedDay=o.currentDay=a("a",l).html();o.selectedMonth=o.currentMonth=f;o.selectedYear=o.currentYear=j;this._selectDate(b,this._formatDate(o,o.currentDay,o.currentMonth,o.currentYear))}},_clearDate:function(b){b=a(b);
this._getInst(b[0]);this._selectDate(b,"")},_selectDate:function(b,f){b=this._getInst(a(b)[0]);f=f!=null?f:this._formatDate(b);b.input&&b.input.val(f);this._updateAlternate(b);var j=this._get(b,"onSelect");if(j)j.apply(b.input?b.input[0]:null,[f,b]);else b.input&&b.input.trigger("change");if(b.inline)this._updateDatepicker(b);else{this._hideDatepicker();this._lastInput=b.input[0];typeof b.input[0]!="object"&&b.input.focus();this._lastInput=null}},_updateAlternate:function(b){var f=this._get(b,"altField");
if(f){var j=this._get(b,"altFormat")||this._get(b,"dateFormat"),l=this._getDate(b),o=this.formatDate(j,l,this._getFormatConfig(b));a(f).each(function(){a(this).val(o)})}},noWeekends:function(b){b=b.getDay();return[b>0&&b<6,""]},iso8601Week:function(b){b=new Date(b.getTime());b.setDate(b.getDate()+4-(b.getDay()||7));var f=b.getTime();b.setMonth(0);b.setDate(1);return Math.floor(Math.round((f-b)/864E5)/7)+1},parseDate:function(b,f,j){if(b==null||f==null)throw"Invalid arguments";f=typeof f=="object"?
f.toString():f+"";if(f=="")return null;var l=(j?j.shortYearCutoff:null)||this._defaults.shortYearCutoff;l=typeof l!="string"?l:(new Date).getFullYear()%100+parseInt(l,10);for(var o=(j?j.dayNamesShort:null)||this._defaults.dayNamesShort,n=(j?j.dayNames:null)||this._defaults.dayNames,k=(j?j.monthNamesShort:null)||this._defaults.monthNamesShort,m=(j?j.monthNames:null)||this._defaults.monthNames,p=j=-1,q=-1,s=-1,r=false,u=function(z){(z=H+1<b.length&&b.charAt(H+1)==z)&&H++;return z},v=function(z){var I=
u(z);z=new RegExp("^\\d{1,"+(z=="@"?14:z=="!"?20:z=="y"&&I?4:z=="o"?3:2)+"}");z=f.substring(y).match(z);if(!z)throw"Missing number at position "+y;y+=z[0].length;return parseInt(z[0],10)},w=function(z,I,N){z=a.map(u(z)?N:I,function(D,E){return[[E,D]]}).sort(function(D,E){return-(D[1].length-E[1].length)});var J=-1;a.each(z,function(D,E){D=E[1];if(f.substr(y,D.length).toLowerCase()==D.toLowerCase()){J=E[0];y+=D.length;return false}});if(J!=-1)return J+1;else throw"Unknown name at position "+y;},x=
function(){if(f.charAt(y)!=b.charAt(H))throw"Unexpected literal at position "+y;y++},y=0,H=0;H<b.length;H++)if(r)if(b.charAt(H)=="'"&&!u("'"))r=false;else x();else switch(b.charAt(H)){case "d":q=v("d");break;case "D":w("D",o,n);break;case "o":s=v("o");break;case "m":p=v("m");break;case "M":p=w("M",k,m);break;case "y":j=v("y");break;case "@":var C=new Date(v("@"));j=C.getFullYear();p=C.getMonth()+1;q=C.getDate();break;case "!":C=new Date((v("!")-this._ticksTo1970)/1E4);j=C.getFullYear();p=C.getMonth()+
1;q=C.getDate();break;case "'":if(u("'"))x();else r=true;break;default:x()}if(y<f.length)throw"Extra/unparsed characters found in date: "+f.substring(y);if(j==-1)j=(new Date).getFullYear();else if(j<100)j+=(new Date).getFullYear()-(new Date).getFullYear()%100+(j<=l?0:-100);if(s>-1){p=1;q=s;do{l=this._getDaysInMonth(j,p-1);if(q<=l)break;p++;q-=l}while(1)}C=this._daylightSavingAdjust(new Date(j,p-1,q));if(C.getFullYear()!=j||C.getMonth()+1!=p||C.getDate()!=q)throw"Invalid date";return C},ATOM:"yy-mm-dd",
COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1E7,formatDate:function(b,f,j){if(!f)return"";var l=(j?j.dayNamesShort:null)||this._defaults.dayNamesShort,o=(j?j.dayNames:null)||this._defaults.dayNames,n=(j?j.monthNamesShort:null)||this._defaults.monthNamesShort;j=(j?j.monthNames:
null)||this._defaults.monthNames;var k=function(u){(u=r+1<b.length&&b.charAt(r+1)==u)&&r++;return u},m=function(u,v,w){v=""+v;if(k(u))for(;v.length<w;)v="0"+v;return v},p=function(u,v,w,x){return k(u)?x[v]:w[v]},q="",s=false;if(f)for(var r=0;r<b.length;r++)if(s)if(b.charAt(r)=="'"&&!k("'"))s=false;else q+=b.charAt(r);else switch(b.charAt(r)){case "d":q+=m("d",f.getDate(),2);break;case "D":q+=p("D",f.getDay(),l,o);break;case "o":q+=m("o",Math.round(((new Date(f.getFullYear(),f.getMonth(),f.getDate())).getTime()-
(new Date(f.getFullYear(),0,0)).getTime())/864E5),3);break;case "m":q+=m("m",f.getMonth()+1,2);break;case "M":q+=p("M",f.getMonth(),n,j);break;case "y":q+=k("y")?f.getFullYear():(f.getYear()%100<10?"0":"")+f.getYear()%100;break;case "@":q+=f.getTime();break;case "!":q+=f.getTime()*1E4+this._ticksTo1970;break;case "'":if(k("'"))q+="'";else s=true;break;default:q+=b.charAt(r)}return q},_possibleChars:function(b){for(var f="",j=false,l=function(n){(n=o+1<b.length&&b.charAt(o+1)==n)&&o++;return n},o=
0;o<b.length;o++)if(j)if(b.charAt(o)=="'"&&!l("'"))j=false;else f+=b.charAt(o);else switch(b.charAt(o)){case "d":case "m":case "y":case "@":f+="0123456789";break;case "D":case "M":return null;case "'":if(l("'"))f+="'";else j=true;break;default:f+=b.charAt(o)}return f},_get:function(b,f){return b.settings[f]!==d?b.settings[f]:this._defaults[f]},_setDateFromField:function(b,f){if(b.input.val()!=b.lastVal){var j=this._get(b,"dateFormat"),l=b.lastVal=b.input?b.input.val():null,o,n;o=n=this._getDefaultDate(b);
var k=this._getFormatConfig(b);try{o=this.parseDate(j,l,k)||n}catch(m){this.log(m);l=f?"":l}b.selectedDay=o.getDate();b.drawMonth=b.selectedMonth=o.getMonth();b.drawYear=b.selectedYear=o.getFullYear();b.currentDay=l?o.getDate():0;b.currentMonth=l?o.getMonth():0;b.currentYear=l?o.getFullYear():0;this._adjustInstDate(b)}},_getDefaultDate:function(b){return this._restrictMinMax(b,this._determineDate(b,this._get(b,"defaultDate"),new Date))},_determineDate:function(b,f,j){var l=function(n){var k=new Date;
k.setDate(k.getDate()+n);return k},o=function(n){try{return a.datepicker.parseDate(a.datepicker._get(b,"dateFormat"),n,a.datepicker._getFormatConfig(b))}catch(k){}var m=(n.toLowerCase().match(/^c/)?a.datepicker._getDate(b):null)||new Date,p=m.getFullYear(),q=m.getMonth();m=m.getDate();for(var s=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,r=s.exec(n);r;){switch(r[2]||"d"){case "d":case "D":m+=parseInt(r[1],10);break;case "w":case "W":m+=parseInt(r[1],10)*7;break;case "m":case "M":q+=parseInt(r[1],10);m=
Math.min(m,a.datepicker._getDaysInMonth(p,q));break;case "y":case "Y":p+=parseInt(r[1],10);m=Math.min(m,a.datepicker._getDaysInMonth(p,q));break}r=s.exec(n)}return new Date(p,q,m)};if(f=(f=f==null||f===""?j:typeof f=="string"?o(f):typeof f=="number"?isNaN(f)?j:l(f):new Date(f.getTime()))&&f.toString()=="Invalid Date"?j:f){f.setHours(0);f.setMinutes(0);f.setSeconds(0);f.setMilliseconds(0)}return this._daylightSavingAdjust(f)},_daylightSavingAdjust:function(b){if(!b)return null;b.setHours(b.getHours()>
12?b.getHours()+2:0);return b},_setDate:function(b,f,j){var l=!f,o=b.selectedMonth,n=b.selectedYear;f=this._restrictMinMax(b,this._determineDate(b,f,new Date));b.selectedDay=b.currentDay=f.getDate();b.drawMonth=b.selectedMonth=b.currentMonth=f.getMonth();b.drawYear=b.selectedYear=b.currentYear=f.getFullYear();if((o!=b.selectedMonth||n!=b.selectedYear)&&!j)this._notifyChange(b);this._adjustInstDate(b);if(b.input)b.input.val(l?"":this._formatDate(b))},_getDate:function(b){return!b.currentYear||b.input&&
b.input.val()==""?null:this._daylightSavingAdjust(new Date(b.currentYear,b.currentMonth,b.currentDay))},_generateHTML:function(b){var f=new Date;f=this._daylightSavingAdjust(new Date(f.getFullYear(),f.getMonth(),f.getDate()));var j=this._get(b,"isRTL"),l=this._get(b,"showButtonPanel"),o=this._get(b,"hideIfNoPrevNext"),n=this._get(b,"navigationAsDateFormat"),k=this._getNumberOfMonths(b),m=this._get(b,"showCurrentAtPos"),p=this._get(b,"stepMonths"),q=k[0]!=1||k[1]!=1,s=this._daylightSavingAdjust(!b.currentDay?
new Date(9999,9,9):new Date(b.currentYear,b.currentMonth,b.currentDay)),r=this._getMinMaxDate(b,"min"),u=this._getMinMaxDate(b,"max");m=b.drawMonth-m;var v=b.drawYear;if(m<0){m+=12;v--}if(u){var w=this._daylightSavingAdjust(new Date(u.getFullYear(),u.getMonth()-k[0]*k[1]+1,u.getDate()));for(w=r&&w<r?r:w;this._daylightSavingAdjust(new Date(v,m,1))>w;){m--;if(m<0){m=11;v--}}}b.drawMonth=m;b.drawYear=v;w=this._get(b,"prevText");w=!n?w:this.formatDate(w,this._daylightSavingAdjust(new Date(v,m-p,1)),this._getFormatConfig(b));
w=this._canAdjustMonth(b,-1,v,m)?'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_'+g+".datepicker._adjustDate('#"+b.id+"', -"+p+", 'M');\" title=\""+w+'"><span class="ui-icon ui-icon-circle-triangle-'+(j?"e":"w")+'">'+w+"</span></a>":o?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+w+'"><span class="ui-icon ui-icon-circle-triangle-'+(j?"e":"w")+'">'+w+"</span></a>";var x=this._get(b,"nextText");x=!n?x:this.formatDate(x,this._daylightSavingAdjust(new Date(v,
m+p,1)),this._getFormatConfig(b));o=this._canAdjustMonth(b,+1,v,m)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_'+g+".datepicker._adjustDate('#"+b.id+"', +"+p+", 'M');\" title=\""+x+'"><span class="ui-icon ui-icon-circle-triangle-'+(j?"w":"e")+'">'+x+"</span></a>":o?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+x+'"><span class="ui-icon ui-icon-circle-triangle-'+(j?"w":"e")+'">'+x+"</span></a>";p=this._get(b,"currentText");x=this._get(b,"gotoCurrent")&&
b.currentDay?s:f;p=!n?p:this.formatDate(p,x,this._getFormatConfig(b));n=!b.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_'+g+'.datepicker._hideDatepicker();">'+this._get(b,"closeText")+"</button>":"";l=l?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(j?n:"")+(this._isInRange(b,x)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_'+
g+".datepicker._gotoToday('#"+b.id+"');\">"+p+"</button>":"")+(j?"":n)+"</div>":"";n=parseInt(this._get(b,"firstDay"),10);n=isNaN(n)?0:n;p=this._get(b,"showWeek");x=this._get(b,"dayNames");this._get(b,"dayNamesShort");var y=this._get(b,"dayNamesMin"),H=this._get(b,"monthNames"),C=this._get(b,"monthNamesShort"),z=this._get(b,"beforeShowDay"),I=this._get(b,"showOtherMonths"),N=this._get(b,"selectOtherMonths");this._get(b,"calculateWeek");for(var J=this._getDefaultDate(b),D="",E=0;E<k[0];E++){var P=
"";this.maxRows=4;for(var L=0;L<k[1];L++){var Q=this._daylightSavingAdjust(new Date(v,m,b.selectedDay)),B=" ui-corner-all",F="";if(q){F+='<div class="ui-datepicker-group';if(k[1]>1)switch(L){case 0:F+=" ui-datepicker-group-first";B=" ui-corner-"+(j?"right":"left");break;case k[1]-1:F+=" ui-datepicker-group-last";B=" ui-corner-"+(j?"left":"right");break;default:F+=" ui-datepicker-group-middle";B="";break}F+='">'}F+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+B+'">'+(/all|left/.test(B)&&
E==0?j?o:w:"")+(/all|right/.test(B)&&E==0?j?w:o:"")+this._generateMonthYearHeader(b,m,v,r,u,E>0||L>0,H,C)+'</div><table class="ui-datepicker-calendar"><thead><tr>';var G=p?'<th class="ui-datepicker-week-col">'+this._get(b,"weekHeader")+"</th>":"";for(B=0;B<7;B++){var A=(B+n)%7;G+="<th"+((B+n+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+x[A]+'">'+y[A]+"</span></th>"}F+=G+"</tr></thead><tbody>";G=this._getDaysInMonth(v,m);if(v==b.selectedYear&&m==b.selectedMonth)b.selectedDay=Math.min(b.selectedDay,
G);B=(this._getFirstDayOfMonth(v,m)-n+7)%7;G=Math.ceil((B+G)/7);this.maxRows=G=q?this.maxRows>G?this.maxRows:G:G;A=this._daylightSavingAdjust(new Date(v,m,1-B));for(var R=0;R<G;R++){F+="<tr>";var S=!p?"":'<td class="ui-datepicker-week-col">'+this._get(b,"calculateWeek")(A)+"</td>";for(B=0;B<7;B++){var M=z?z.apply(b.input?b.input[0]:null,[A]):[true,""],K=A.getMonth()!=m,O=K&&!N||!M[0]||r&&A<r||u&&A>u;S+='<td class="'+((B+n+6)%7>=5?" ui-datepicker-week-end":"")+(K?" ui-datepicker-other-month":"")+(A.getTime()==
Q.getTime()&&m==b.selectedMonth&&b._keyEvent||J.getTime()==A.getTime()&&J.getTime()==Q.getTime()?" "+this._dayOverClass:"")+(O?" "+this._unselectableClass+" ui-state-disabled":"")+(K&&!I?"":" "+M[1]+(A.getTime()==s.getTime()?" "+this._currentClass:"")+(A.getTime()==f.getTime()?" ui-datepicker-today":""))+'"'+((!K||I)&&M[2]?' title="'+M[2]+'"':"")+(O?"":' onclick="DP_jQuery_'+g+".datepicker._selectDay('#"+b.id+"',"+A.getMonth()+","+A.getFullYear()+', this);return false;"')+">"+(K&&!I?"&#xa0;":O?'<span class="ui-state-default">'+
A.getDate()+"</span>":'<a class="ui-state-default'+(A.getTime()==f.getTime()?" ui-state-highlight":"")+(A.getTime()==s.getTime()?" ui-state-active":"")+(K?" ui-priority-secondary":"")+'" href="#">'+A.getDate()+"</a>")+"</td>";A.setDate(A.getDate()+1);A=this._daylightSavingAdjust(A)}F+=S+"</tr>"}m++;if(m>11){m=0;v++}F+="</tbody></table>"+(q?"</div>"+(k[0]>0&&L==k[1]-1?'<div class="ui-datepicker-row-break"></div>':""):"");P+=F}D+=P}D+=l+(a.browser.msie&&parseInt(a.browser.version,10)<7&&!b.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':
"");b._keyEvent=false;return D},_generateMonthYearHeader:function(b,f,j,l,o,n,k,m){var p=this._get(b,"changeMonth"),q=this._get(b,"changeYear"),s=this._get(b,"showMonthAfterYear"),r='<div class="ui-datepicker-title">',u="";if(n||!p)u+='<span class="ui-datepicker-month">'+k[f]+"</span>";else{k=l&&l.getFullYear()==j;var v=o&&o.getFullYear()==j;u+='<select class="ui-datepicker-month" onchange="DP_jQuery_'+g+".datepicker._selectMonthYear('#"+b.id+"', this, 'M');\" >";for(var w=0;w<12;w++)if((!k||w>=l.getMonth())&&
(!v||w<=o.getMonth()))u+='<option value="'+w+'"'+(w==f?' selected="selected"':"")+">"+m[w]+"</option>";u+="</select>"}s||(r+=u+(n||!(p&&q)?"&#xa0;":""));if(!b.yearshtml){b.yearshtml="";if(n||!q)r+='<span class="ui-datepicker-year">'+j+"</span>";else{m=this._get(b,"yearRange").split(":");var x=(new Date).getFullYear();k=function(y){y=y.match(/c[+-].*/)?j+parseInt(y.substring(1),10):y.match(/[+-].*/)?x+parseInt(y,10):parseInt(y,10);return isNaN(y)?x:y};f=k(m[0]);m=Math.max(f,k(m[1]||""));f=l?Math.max(f,
l.getFullYear()):f;m=o?Math.min(m,o.getFullYear()):m;for(b.yearshtml+='<select class="ui-datepicker-year" onchange="DP_jQuery_'+g+".datepicker._selectMonthYear('#"+b.id+"', this, 'Y');\" >";f<=m;f++)b.yearshtml+='<option value="'+f+'"'+(f==j?' selected="selected"':"")+">"+f+"</option>";b.yearshtml+="</select>";r+=b.yearshtml;b.yearshtml=null}}r+=this._get(b,"yearSuffix");if(s)r+=(n||!(p&&q)?"&#xa0;":"")+u;r+="</div>";return r},_adjustInstDate:function(b,f,j){var l=b.drawYear+(j=="Y"?f:0),o=b.drawMonth+
(j=="M"?f:0);f=Math.min(b.selectedDay,this._getDaysInMonth(l,o))+(j=="D"?f:0);l=this._restrictMinMax(b,this._daylightSavingAdjust(new Date(l,o,f)));b.selectedDay=l.getDate();b.drawMonth=b.selectedMonth=l.getMonth();b.drawYear=b.selectedYear=l.getFullYear();if(j=="M"||j=="Y")this._notifyChange(b)},_restrictMinMax:function(b,f){var j=this._getMinMaxDate(b,"min");b=this._getMinMaxDate(b,"max");f=j&&f<j?j:f;return f=b&&f>b?b:f},_notifyChange:function(b){var f=this._get(b,"onChangeMonthYear");if(f)f.apply(b.input?
b.input[0]:null,[b.selectedYear,b.selectedMonth+1,b])},_getNumberOfMonths:function(b){b=this._get(b,"numberOfMonths");return b==null?[1,1]:typeof b=="number"?[1,b]:b},_getMinMaxDate:function(b,f){return this._determineDate(b,this._get(b,f+"Date"),null)},_getDaysInMonth:function(b,f){return 32-this._daylightSavingAdjust(new Date(b,f,32)).getDate()},_getFirstDayOfMonth:function(b,f){return(new Date(b,f,1)).getDay()},_canAdjustMonth:function(b,f,j,l){var o=this._getNumberOfMonths(b);j=this._daylightSavingAdjust(new Date(j,
l+(f<0?f:o[0]*o[1]),1));f<0&&j.setDate(this._getDaysInMonth(j.getFullYear(),j.getMonth()));return this._isInRange(b,j)},_isInRange:function(b,f){var j=this._getMinMaxDate(b,"min");b=this._getMinMaxDate(b,"max");return(!j||f.getTime()>=j.getTime())&&(!b||f.getTime()<=b.getTime())},_getFormatConfig:function(b){var f=this._get(b,"shortYearCutoff");f=typeof f!="string"?f:(new Date).getFullYear()%100+parseInt(f,10);return{shortYearCutoff:f,dayNamesShort:this._get(b,"dayNamesShort"),dayNames:this._get(b,
"dayNames"),monthNamesShort:this._get(b,"monthNamesShort"),monthNames:this._get(b,"monthNames")}},_formatDate:function(b,f,j,l){if(!f){b.currentDay=b.selectedDay;b.currentMonth=b.selectedMonth;b.currentYear=b.selectedYear}f=f?typeof f=="object"?f:this._daylightSavingAdjust(new Date(l,j,f)):this._daylightSavingAdjust(new Date(b.currentYear,b.currentMonth,b.currentDay));return this.formatDate(this._get(b,"dateFormat"),f,this._getFormatConfig(b))}});a.fn.datepicker=function(b){if(!this.length)return this;
if(!a.datepicker.initialized){a(document).mousedown(a.datepicker._checkExternalClick).find("body").append(a.datepicker.dpDiv);a.datepicker.initialized=true}var f=Array.prototype.slice.call(arguments,1);if(typeof b=="string"&&(b=="isDisabled"||b=="getDate"||b=="widget"))return a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this[0]].concat(f));if(b=="option"&&arguments.length==2&&typeof arguments[1]=="string")return a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this[0]].concat(f));return this.each(function(){typeof b==
"string"?a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this].concat(f)):a.datepicker._attachDatepicker(this,b)})};a.datepicker=new c;a.datepicker.initialized=false;a.datepicker.uuid=(new Date).getTime();a.datepicker.version="1.8.16";window["DP_jQuery_"+g]=a})(jQuery);
(function(a,d){var c={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},e={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true},h=a.attrFn||{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true,click:true};a.widget("ui.dialog",{options:{autoOpen:true,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,
position:{my:"center",at:"center",collision:"fit",using:function(g){var i=a(this).css(g).offset().top;i<0&&a(this).css("top",g.top-i)}},resizable:true,show:null,stack:true,title:"",width:300,zIndex:1E3},_create:function(){this.originalTitle=this.element.attr("title");if(typeof this.originalTitle!=="string")this.originalTitle="";this.options.title=this.options.title||this.originalTitle;var g=this,i=g.options,b=i.title||"&#160;",f=a.ui.dialog.getTitleId(g.element),j=(g.uiDialog=a("<div></div>")).appendTo(document.body).hide().addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+
i.dialogClass).css({zIndex:i.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(n){if(i.closeOnEscape&&!n.isDefaultPrevented()&&n.keyCode&&n.keyCode===a.ui.keyCode.ESCAPE){g.close(n);n.preventDefault()}}).attr({role:"dialog","aria-labelledby":f}).mousedown(function(n){g.moveToTop(false,n)});g.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(j);var l=(g.uiDialogTitlebar=a("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(j),
o=a('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){o.addClass("ui-state-hover")},function(){o.removeClass("ui-state-hover")}).focus(function(){o.addClass("ui-state-focus")}).blur(function(){o.removeClass("ui-state-focus")}).click(function(n){g.close(n);return false}).appendTo(l);(g.uiDialogTitlebarCloseText=a("<span></span>")).addClass("ui-icon ui-icon-closethick").text(i.closeText).appendTo(o);a("<span></span>").addClass("ui-dialog-title").attr("id",
f).html(b).prependTo(l);if(a.isFunction(i.beforeclose)&&!a.isFunction(i.beforeClose))i.beforeClose=i.beforeclose;l.find("*").add(l).disableSelection();i.draggable&&a.fn.draggable&&g._makeDraggable();i.resizable&&a.fn.resizable&&g._makeResizable();g._createButtons(i.buttons);g._isOpen=false;a.fn.bgiframe&&j.bgiframe()},_init:function(){this.options.autoOpen&&this.open()},destroy:function(){var g=this;g.overlay&&g.overlay.destroy();g.uiDialog.hide();g.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");
g.uiDialog.remove();g.originalTitle&&g.element.attr("title",g.originalTitle);return g},widget:function(){return this.uiDialog},close:function(g){var i=this,b,f;if(false!==i._trigger("beforeClose",g)){i.overlay&&i.overlay.destroy();i.uiDialog.unbind("keypress.ui-dialog");i._isOpen=false;if(i.options.hide)i.uiDialog.hide(i.options.hide,function(){i._trigger("close",g)});else{i.uiDialog.hide();i._trigger("close",g)}a.ui.dialog.overlay.resize();if(i.options.modal){b=0;a(".ui-dialog").each(function(){if(this!==
i.uiDialog[0]){f=a(this).css("z-index");isNaN(f)||(b=Math.max(b,f))}});a.ui.dialog.maxZ=b}return i}},isOpen:function(){return this._isOpen},moveToTop:function(g,i){var b=this,f=b.options;if(f.modal&&!g||!f.stack&&!f.modal)return b._trigger("focus",i);if(f.zIndex>a.ui.dialog.maxZ)a.ui.dialog.maxZ=f.zIndex;if(b.overlay){a.ui.dialog.maxZ+=1;b.overlay.$el.css("z-index",a.ui.dialog.overlay.maxZ=a.ui.dialog.maxZ)}g={scrollTop:b.element.scrollTop(),scrollLeft:b.element.scrollLeft()};a.ui.dialog.maxZ+=1;
b.uiDialog.css("z-index",a.ui.dialog.maxZ);b.element.attr(g);b._trigger("focus",i);return b},open:function(){if(!this._isOpen){var g=this,i=g.options,b=g.uiDialog;g.overlay=i.modal?new a.ui.dialog.overlay(g):null;g._size();g._position(i.position);b.show(i.show);g.moveToTop(true);i.modal&&b.bind("keypress.ui-dialog",function(f){if(f.keyCode===a.ui.keyCode.TAB){var j=a(":tabbable",this),l=j.filter(":first");j=j.filter(":last");if(f.target===j[0]&&!f.shiftKey){l.focus(1);return false}else if(f.target===
l[0]&&f.shiftKey){j.focus(1);return false}}});a(g.element.find(":tabbable").get().concat(b.find(".ui-dialog-buttonpane :tabbable").get().concat(b.get()))).eq(0).focus();g._isOpen=true;g._trigger("open");return g}},_createButtons:function(g){var i=this,b=false,f=a("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),j=a("<div></div>").addClass("ui-dialog-buttonset").appendTo(f);i.uiDialog.find(".ui-dialog-buttonpane").remove();typeof g==="object"&&g!==null&&a.each(g,
function(){return!(b=true)});if(b){a.each(g,function(l,o){o=a.isFunction(o)?{click:o,text:l}:o;var n=a('<button type="button"></button>').click(function(){o.click.apply(i.element[0],arguments)}).appendTo(j);a.each(o,function(k,m){if(k!=="click")k in h?n[k](m):n.attr(k,m)});a.fn.button&&n.button()});f.appendTo(i.uiDialog)}},_makeDraggable:function(){function g(l){return{position:l.position,offset:l.offset}}var i=this,b=i.options,f=a(document),j;i.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",
handle:".ui-dialog-titlebar",containment:"document",start:function(l,o){j=b.height==="auto"?"auto":a(this).height();a(this).height(a(this).height()).addClass("ui-dialog-dragging");i._trigger("dragStart",l,g(o))},drag:function(l,o){i._trigger("drag",l,g(o))},stop:function(l,o){b.position=[o.position.left-f.scrollLeft(),o.position.top-f.scrollTop()];a(this).removeClass("ui-dialog-dragging").height(j);i._trigger("dragStop",l,g(o));a.ui.dialog.overlay.resize()}})},_makeResizable:function(g){function i(l){return{originalPosition:l.originalPosition,
originalSize:l.originalSize,position:l.position,size:l.size}}g=g===d?this.options.resizable:g;var b=this,f=b.options,j=b.uiDialog.css("position");g=typeof g==="string"?g:"n,e,s,w,se,sw,ne,nw";b.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:b.element,maxWidth:f.maxWidth,maxHeight:f.maxHeight,minWidth:f.minWidth,minHeight:b._minHeight(),handles:g,start:function(l,o){a(this).addClass("ui-dialog-resizing");b._trigger("resizeStart",l,i(o))},resize:function(l,o){b._trigger("resize",
l,i(o))},stop:function(l,o){a(this).removeClass("ui-dialog-resizing");f.height=a(this).height();f.width=a(this).width();b._trigger("resizeStop",l,i(o));a.ui.dialog.overlay.resize()}}).css("position",j).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var g=this.options;return g.height==="auto"?g.minHeight:Math.min(g.minHeight,g.height)},_position:function(g){var i=[],b=[0,0],f;if(g){if(typeof g==="string"||typeof g==="object"&&"0"in g){i=g.split?g.split(" "):
[g[0],g[1]];if(i.length===1)i[1]=i[0];a.each(["left","top"],function(j,l){if(+i[j]===i[j]){b[j]=i[j];i[j]=l}});g={my:i.join(" "),at:i.join(" "),offset:b.join(" ")}}g=a.extend({},a.ui.dialog.prototype.options.position,g)}else g=a.ui.dialog.prototype.options.position;(f=this.uiDialog.is(":visible"))||this.uiDialog.show();this.uiDialog.css({top:0,left:0}).position(a.extend({of:window},g));f||this.uiDialog.hide()},_setOptions:function(g){var i=this,b={},f=false;a.each(g,function(j,l){i._setOption(j,l);
if(j in c)f=true;if(j in e)b[j]=l});f&&this._size();this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",b)},_setOption:function(g,i){var b=this,f=b.uiDialog;switch(g){case "beforeclose":g="beforeClose";break;case "buttons":b._createButtons(i);break;case "closeText":b.uiDialogTitlebarCloseText.text(""+i);break;case "dialogClass":f.removeClass(b.options.dialogClass).addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+i);break;case "disabled":i?f.addClass("ui-dialog-disabled"):
f.removeClass("ui-dialog-disabled");break;case "draggable":var j=f.is(":data(draggable)");j&&!i&&f.draggable("destroy");!j&&i&&b._makeDraggable();break;case "position":b._position(i);break;case "resizable":(j=f.is(":data(resizable)"))&&!i&&f.resizable("destroy");j&&typeof i==="string"&&f.resizable("option","handles",i);!j&&i!==false&&b._makeResizable(i);break;case "title":a(".ui-dialog-title",b.uiDialogTitlebar).html(""+(i||"&#160;"));break}a.Widget.prototype._setOption.apply(b,arguments)},_size:function(){var g=
this.options,i,b,f=this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0});if(g.minWidth>g.width)g.width=g.minWidth;i=this.uiDialog.css({height:"auto",width:g.width}).height();b=Math.max(0,g.minHeight-i);if(g.height==="auto")if(a.support.minHeight)this.element.css({minHeight:b,height:"auto"});else{this.uiDialog.show();g=this.element.css("height","auto").height();f||this.uiDialog.hide();this.element.height(Math.max(g,b))}else this.element.height(Math.max(g.height-
i,0));this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())}});a.extend(a.ui.dialog,{version:"1.8.16",uuid:0,maxZ:0,getTitleId:function(g){g=g.attr("id");if(!g){this.uuid+=1;g=this.uuid}return"ui-dialog-title-"+g},overlay:function(g){this.$el=a.ui.dialog.overlay.create(g)}});a.extend(a.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:a.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(g){return g+".dialog-overlay"}).join(" "),
create:function(g){if(this.instances.length===0){setTimeout(function(){a.ui.dialog.overlay.instances.length&&a(document).bind(a.ui.dialog.overlay.events,function(b){if(a(b.target).zIndex()<a.ui.dialog.overlay.maxZ)return false})},1);a(document).bind("keydown.dialog-overlay",function(b){if(g.options.closeOnEscape&&!b.isDefaultPrevented()&&b.keyCode&&b.keyCode===a.ui.keyCode.ESCAPE){g.close(b);b.preventDefault()}});a(window).bind("resize.dialog-overlay",a.ui.dialog.overlay.resize)}var i=(this.oldInstances.pop()||
a("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),height:this.height()});a.fn.bgiframe&&i.bgiframe();this.instances.push(i);return i},destroy:function(g){var i=a.inArray(g,this.instances);i!=-1&&this.oldInstances.push(this.instances.splice(i,1)[0]);this.instances.length===0&&a([document,window]).unbind(".dialog-overlay");g.remove();var b=0;a.each(this.instances,function(){b=Math.max(b,this.css("z-index"))});this.maxZ=b},height:function(){var g,i;if(a.browser.msie&&
a.browser.version<7){g=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);i=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);return g<i?a(window).height()+"px":g+"px"}else return a(document).height()+"px"},width:function(){var g,i;if(a.browser.msie){g=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);i=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);return g<i?a(window).width()+"px":g+"px"}else return a(document).width()+
"px"},resize:function(){var g=a([]);a.each(a.ui.dialog.overlay.instances,function(){g=g.add(this)});g.css({width:0,height:0}).css({width:a.ui.dialog.overlay.width(),height:a.ui.dialog.overlay.height()})}});a.extend(a.ui.dialog.overlay.prototype,{destroy:function(){a.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);
(function(a){a.ui=a.ui||{};var d=/left|center|right/,c=/top|center|bottom/,e=a.fn.position,h=a.fn.offset;a.fn.position=function(g){if(!g||!g.of)return e.apply(this,arguments);g=a.extend({},g);var i=a(g.of),b=i[0],f=(g.collision||"flip").split(" "),j=g.offset?g.offset.split(" "):[0,0],l,o,n;if(b.nodeType===9){l=i.width();o=i.height();n={top:0,left:0}}else if(b.setTimeout){l=i.width();o=i.height();n={top:i.scrollTop(),left:i.scrollLeft()}}else if(b.preventDefault){g.at="left top";l=o=0;n={top:g.of.pageY,
left:g.of.pageX}}else{l=i.outerWidth();o=i.outerHeight();n=i.offset()}a.each(["my","at"],function(){var k=(g[this]||"").split(" ");if(k.length===1)k=d.test(k[0])?k.concat(["center"]):c.test(k[0])?["center"].concat(k):["center","center"];k[0]=d.test(k[0])?k[0]:"center";k[1]=c.test(k[1])?k[1]:"center";g[this]=k});if(f.length===1)f[1]=f[0];j[0]=parseInt(j[0],10)||0;if(j.length===1)j[1]=j[0];j[1]=parseInt(j[1],10)||0;if(g.at[0]==="right")n.left+=l;else if(g.at[0]==="center")n.left+=l/2;if(g.at[1]==="bottom")n.top+=
o;else if(g.at[1]==="center")n.top+=o/2;n.left+=j[0];n.top+=j[1];return this.each(function(){var k=a(this),m=k.outerWidth(),p=k.outerHeight(),q=parseInt(a.curCSS(this,"marginLeft",true))||0,s=parseInt(a.curCSS(this,"marginTop",true))||0,r=m+q+(parseInt(a.curCSS(this,"marginRight",true))||0),u=p+s+(parseInt(a.curCSS(this,"marginBottom",true))||0),v=a.extend({},n),w;if(g.my[0]==="right")v.left-=m;else if(g.my[0]==="center")v.left-=m/2;if(g.my[1]==="bottom")v.top-=p;else if(g.my[1]==="center")v.top-=
p/2;v.left=Math.round(v.left);v.top=Math.round(v.top);w={left:v.left-q,top:v.top-s};a.each(["left","top"],function(x,y){a.ui.position[f[x]]&&a.ui.position[f[x]][y](v,{targetWidth:l,targetHeight:o,elemWidth:m,elemHeight:p,collisionPosition:w,collisionWidth:r,collisionHeight:u,offset:j,my:g.my,at:g.at})});a.fn.bgiframe&&k.bgiframe();k.offset(a.extend(v,{using:g.using}))})};a.ui.position={fit:{left:function(g,i){var b=a(window);b=i.collisionPosition.left+i.collisionWidth-b.width()-b.scrollLeft();g.left=
b>0?g.left-b:Math.max(g.left-i.collisionPosition.left,g.left)},top:function(g,i){var b=a(window);b=i.collisionPosition.top+i.collisionHeight-b.height()-b.scrollTop();g.top=b>0?g.top-b:Math.max(g.top-i.collisionPosition.top,g.top)}},flip:{left:function(g,i){if(i.at[0]!=="center"){var b=a(window);b=i.collisionPosition.left+i.collisionWidth-b.width()-b.scrollLeft();var f=i.my[0]==="left"?-i.elemWidth:i.my[0]==="right"?i.elemWidth:0,j=i.at[0]==="left"?i.targetWidth:-i.targetWidth,l=-2*i.offset[0];g.left+=
i.collisionPosition.left<0?f+j+l:b>0?f+j+l:0}},top:function(g,i){if(i.at[1]!=="center"){var b=a(window);b=i.collisionPosition.top+i.collisionHeight-b.height()-b.scrollTop();var f=i.my[1]==="top"?-i.elemHeight:i.my[1]==="bottom"?i.elemHeight:0,j=i.at[1]==="top"?i.targetHeight:-i.targetHeight,l=-2*i.offset[1];g.top+=i.collisionPosition.top<0?f+j+l:b>0?f+j+l:0}}}};if(!a.offset.setOffset){a.offset.setOffset=function(g,i){if(/static/.test(a.curCSS(g,"position")))g.style.position="relative";var b=a(g),
f=b.offset(),j=parseInt(a.curCSS(g,"top",true),10)||0,l=parseInt(a.curCSS(g,"left",true),10)||0;f={top:i.top-f.top+j,left:i.left-f.left+l};"using"in i?i.using.call(g,f):b.css(f)};a.fn.offset=function(g){var i=this[0];if(!i||!i.ownerDocument)return null;if(g)return this.each(function(){a.offset.setOffset(this,g)});return h.call(this)}}})(jQuery);
(function(a,d){a.widget("ui.progressbar",{options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()});this.valueDiv=a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);this.oldValue=this._value();this._refreshValue()},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.valueDiv.remove();a.Widget.prototype.destroy.apply(this,arguments)},value:function(c){if(c===d)return this._value();this._setOption("value",c);return this},_setOption:function(c,e){if(c==="value"){this.options.value=e;this._refreshValue();this._value()===this.options.max&&this._trigger("complete")}a.Widget.prototype._setOption.apply(this,arguments)},_value:function(){var c=this.options.value;if(typeof c!=="number")c=0;return Math.min(this.options.max,Math.max(this.min,c))},_percentage:function(){return 100*
this._value()/this.options.max},_refreshValue:function(){var c=this.value(),e=this._percentage();if(this.oldValue!==c){this.oldValue=c;this._trigger("change")}this.valueDiv.toggle(c>this.min).toggleClass("ui-corner-right",c===this.options.max).width(e.toFixed(0)+"%");this.element.attr("aria-valuenow",c)}});a.extend(a.ui.progressbar,{version:"1.8.16"})})(jQuery);
(function(a){a.widget("ui.slider",a.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var d=this,c=this.options,e=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),h=c.values&&c.values.length||1,g=[];this._mouseSliding=this._keySliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+
this.orientation+" ui-widget ui-widget-content ui-corner-all"+(c.disabled?" ui-slider-disabled ui-disabled":""));this.range=a([]);if(c.range){if(c.range===true){if(!c.values)c.values=[this._valueMin(),this._valueMin()];if(c.values.length&&c.values.length!==2)c.values=[c.values[0],c.values[0]]}this.range=a("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(c.range==="min"||c.range==="max"?" ui-slider-range-"+c.range:""))}for(var i=e.length;i<h;i+=1)g.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>");
this.handles=e.add(a(g.join("")).appendTo(d.element));this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(b){b.preventDefault()}).hover(function(){c.disabled||a(this).addClass("ui-state-hover")},function(){a(this).removeClass("ui-state-hover")}).focus(function(){if(c.disabled)a(this).blur();else{a(".ui-slider .ui-state-focus").removeClass("ui-state-focus");a(this).addClass("ui-state-focus")}}).blur(function(){a(this).removeClass("ui-state-focus")});this.handles.each(function(b){a(this).data("index.ui-slider-handle",
b)});this.handles.keydown(function(b){var f=true,j=a(this).data("index.ui-slider-handle"),l,o,n;if(!d.options.disabled){switch(b.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.PAGE_DOWN:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:f=false;if(!d._keySliding){d._keySliding=true;a(this).addClass("ui-state-active");l=d._start(b,j);if(l===false)return}break}n=d.options.step;l=d.options.values&&d.options.values.length?
(o=d.values(j)):(o=d.value());switch(b.keyCode){case a.ui.keyCode.HOME:o=d._valueMin();break;case a.ui.keyCode.END:o=d._valueMax();break;case a.ui.keyCode.PAGE_UP:o=d._trimAlignValue(l+(d._valueMax()-d._valueMin())/5);break;case a.ui.keyCode.PAGE_DOWN:o=d._trimAlignValue(l-(d._valueMax()-d._valueMin())/5);break;case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(l===d._valueMax())return;o=d._trimAlignValue(l+n);break;case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(l===d._valueMin())return;o=d._trimAlignValue(l-
n);break}d._slide(b,j,o);return f}}).keyup(function(b){var f=a(this).data("index.ui-slider-handle");if(d._keySliding){d._keySliding=false;d._stop(b,f);d._change(b,f);a(this).removeClass("ui-state-active")}});this._refreshValue();this._animateOff=false},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");this._mouseDestroy();
return this},_mouseCapture:function(d){var c=this.options,e,h,g,i,b;if(c.disabled)return false;this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();e=this._normValueFromMouse({x:d.pageX,y:d.pageY});h=this._valueMax()-this._valueMin()+1;i=this;this.handles.each(function(f){var j=Math.abs(e-i.values(f));if(h>j){h=j;g=a(this);b=f}});if(c.range===true&&this.values(1)===c.min){b+=1;g=a(this.handles[b])}if(this._start(d,b)===false)return false;
this._mouseSliding=true;i._handleIndex=b;g.addClass("ui-state-active").focus();c=g.offset();this._clickOffset=!a(d.target).parents().andSelf().is(".ui-slider-handle")?{left:0,top:0}:{left:d.pageX-c.left-g.width()/2,top:d.pageY-c.top-g.height()/2-(parseInt(g.css("borderTopWidth"),10)||0)-(parseInt(g.css("borderBottomWidth"),10)||0)+(parseInt(g.css("marginTop"),10)||0)};this.handles.hasClass("ui-state-hover")||this._slide(d,b,e);return this._animateOff=true},_mouseStart:function(){return true},_mouseDrag:function(d){var c=
this._normValueFromMouse({x:d.pageX,y:d.pageY});this._slide(d,this._handleIndex,c);return false},_mouseStop:function(d){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(d,this._handleIndex);this._change(d,this._handleIndex);this._clickOffset=this._handleIndex=null;return this._animateOff=false},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(d){var c;if(this.orientation==="horizontal"){c=
this.elementSize.width;d=d.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{c=this.elementSize.height;d=d.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}c=d/c;if(c>1)c=1;if(c<0)c=0;if(this.orientation==="vertical")c=1-c;d=this._valueMax()-this._valueMin();return this._trimAlignValue(this._valueMin()+c*d)},_start:function(d,c){var e={handle:this.handles[c],value:this.value()};if(this.options.values&&this.options.values.length){e.value=this.values(c);
e.values=this.values()}return this._trigger("start",d,e)},_slide:function(d,c,e){var h;if(this.options.values&&this.options.values.length){h=this.values(c?0:1);if(this.options.values.length===2&&this.options.range===true&&(c===0&&e>h||c===1&&e<h))e=h;if(e!==this.values(c)){h=this.values();h[c]=e;d=this._trigger("slide",d,{handle:this.handles[c],value:e,values:h});this.values(c?0:1);d!==false&&this.values(c,e,true)}}else if(e!==this.value()){d=this._trigger("slide",d,{handle:this.handles[c],value:e});
d!==false&&this.value(e)}},_stop:function(d,c){var e={handle:this.handles[c],value:this.value()};if(this.options.values&&this.options.values.length){e.value=this.values(c);e.values=this.values()}this._trigger("stop",d,e)},_change:function(d,c){if(!this._keySliding&&!this._mouseSliding){var e={handle:this.handles[c],value:this.value()};if(this.options.values&&this.options.values.length){e.value=this.values(c);e.values=this.values()}this._trigger("change",d,e)}},value:function(d){if(arguments.length){this.options.value=
this._trimAlignValue(d);this._refreshValue();this._change(null,0)}else return this._value()},values:function(d,c){var e,h,g;if(arguments.length>1){this.options.values[d]=this._trimAlignValue(c);this._refreshValue();this._change(null,d)}else if(arguments.length)if(a.isArray(arguments[0])){e=this.options.values;h=arguments[0];for(g=0;g<e.length;g+=1){e[g]=this._trimAlignValue(h[g]);this._change(null,g)}this._refreshValue()}else return this.options.values&&this.options.values.length?this._values(d):
this.value();else return this._values()},_setOption:function(d,c){var e,h=0;if(a.isArray(this.options.values))h=this.options.values.length;a.Widget.prototype._setOption.apply(this,arguments);switch(d){case "disabled":if(c){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.propAttr("disabled",true);this.element.addClass("ui-disabled")}else{this.handles.propAttr("disabled",false);this.element.removeClass("ui-disabled")}break;case "orientation":this._detectOrientation();
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case "value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case "values":this._animateOff=true;this._refreshValue();for(e=0;e<h;e+=1)this._change(null,e);this._animateOff=false;break}},_value:function(){var d=this.options.value;return d=this._trimAlignValue(d)},_values:function(d){var c,e;if(arguments.length){c=this.options.values[d];
return c=this._trimAlignValue(c)}else{c=this.options.values.slice();for(e=0;e<c.length;e+=1)c[e]=this._trimAlignValue(c[e]);return c}},_trimAlignValue:function(d){if(d<=this._valueMin())return this._valueMin();if(d>=this._valueMax())return this._valueMax();var c=this.options.step>0?this.options.step:1,e=(d-this._valueMin())%c;d=d-e;if(Math.abs(e)*2>=c)d+=e>0?c:-c;return parseFloat(d.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var d=
this.options.range,c=this.options,e=this,h=!this._animateOff?c.animate:false,g,i={},b,f,j,l;if(this.options.values&&this.options.values.length)this.handles.each(function(o){g=(e.values(o)-e._valueMin())/(e._valueMax()-e._valueMin())*100;i[e.orientation==="horizontal"?"left":"bottom"]=g+"%";a(this).stop(1,1)[h?"animate":"css"](i,c.animate);if(e.options.range===true)if(e.orientation==="horizontal"){if(o===0)e.range.stop(1,1)[h?"animate":"css"]({left:g+"%"},c.animate);if(o===1)e.range[h?"animate":"css"]({width:g-
b+"%"},{queue:false,duration:c.animate})}else{if(o===0)e.range.stop(1,1)[h?"animate":"css"]({bottom:g+"%"},c.animate);if(o===1)e.range[h?"animate":"css"]({height:g-b+"%"},{queue:false,duration:c.animate})}b=g});else{f=this.value();j=this._valueMin();l=this._valueMax();g=l!==j?(f-j)/(l-j)*100:0;i[e.orientation==="horizontal"?"left":"bottom"]=g+"%";this.handle.stop(1,1)[h?"animate":"css"](i,c.animate);if(d==="min"&&this.orientation==="horizontal")this.range.stop(1,1)[h?"animate":"css"]({width:g+"%"},
c.animate);if(d==="max"&&this.orientation==="horizontal")this.range[h?"animate":"css"]({width:100-g+"%"},{queue:false,duration:c.animate});if(d==="min"&&this.orientation==="vertical")this.range.stop(1,1)[h?"animate":"css"]({height:g+"%"},c.animate);if(d==="max"&&this.orientation==="vertical")this.range[h?"animate":"css"]({height:100-g+"%"},{queue:false,duration:c.animate})}}});a.extend(a.ui.slider,{version:"1.8.16"})})(jQuery);
(function(a,d){function c(){return++h}function e(){return++g}var h=0,g=0;a.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:false,cookie:null,collapsible:false,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){this._tabify(true)},_setOption:function(i,b){if(i=="selected")this.options.collapsible&&
b==this.options.selected||this.select(b);else{this.options[i]=b;this._tabify()}},_tabId:function(i){return i.title&&i.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+c()},_sanitizeSelector:function(i){return i.replace(/:/g,"\\:")},_cookie:function(){var i=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+e());return a.cookie.apply(null,[i].concat(a.makeArray(arguments)))},_ui:function(i,b){return{tab:i,panel:b,index:this.anchors.index(i)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var i=
a(this);i.html(i.data("label.tabs")).removeData("label.tabs")})},_tabify:function(i){function b(r,u){r.css("display","");!a.support.opacity&&u.opacity&&r[0].style.removeAttribute("filter")}var f=this,j=this.options,l=/^#.+/;this.list=this.element.find("ol,ul").eq(0);this.lis=a(" > li:has(a[href])",this.list);this.anchors=this.lis.map(function(){return a("a",this)[0]});this.panels=a([]);this.anchors.each(function(r,u){var v=a(u).attr("href"),w=v.split("#")[0],x;if(w&&(w===location.toString().split("#")[0]||
(x=a("base")[0])&&w===x.href)){v=u.hash;u.href=v}if(l.test(v))f.panels=f.panels.add(f.element.find(f._sanitizeSelector(v)));else if(v&&v!=="#"){a.data(u,"href.tabs",v);a.data(u,"load.tabs",v.replace(/#.*$/,""));v=f._tabId(u);u.href="#"+v;u=f.element.find("#"+v);if(!u.length){u=a(j.panelTemplate).attr("id",v).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(f.panels[r-1]||f.list);u.data("destroy.tabs",true)}f.panels=f.panels.add(u)}else j.disabled.push(r)});if(i){this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");
this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.lis.addClass("ui-state-default ui-corner-top");this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");if(j.selected===d){location.hash&&this.anchors.each(function(r,u){if(u.hash==location.hash){j.selected=r;return false}});if(typeof j.selected!=="number"&&j.cookie)j.selected=parseInt(f._cookie(),10);if(typeof j.selected!=="number"&&this.lis.filter(".ui-tabs-selected").length)j.selected=
this.lis.index(this.lis.filter(".ui-tabs-selected"));j.selected=j.selected||(this.lis.length?0:-1)}else if(j.selected===null)j.selected=-1;j.selected=j.selected>=0&&this.anchors[j.selected]||j.selected<0?j.selected:0;j.disabled=a.unique(j.disabled.concat(a.map(this.lis.filter(".ui-state-disabled"),function(r){return f.lis.index(r)}))).sort();a.inArray(j.selected,j.disabled)!=-1&&j.disabled.splice(a.inArray(j.selected,j.disabled),1);this.panels.addClass("ui-tabs-hide");this.lis.removeClass("ui-tabs-selected ui-state-active");
if(j.selected>=0&&this.anchors.length){f.element.find(f._sanitizeSelector(f.anchors[j.selected].hash)).removeClass("ui-tabs-hide");this.lis.eq(j.selected).addClass("ui-tabs-selected ui-state-active");f.element.queue("tabs",function(){f._trigger("show",null,f._ui(f.anchors[j.selected],f.element.find(f._sanitizeSelector(f.anchors[j.selected].hash))[0]))});this.load(j.selected)}a(window).bind("unload",function(){f.lis.add(f.anchors).unbind(".tabs");f.lis=f.anchors=f.panels=null})}else j.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"));
this.element[j.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");j.cookie&&this._cookie(j.selected,j.cookie);i=0;for(var o;o=this.lis[i];i++)a(o)[a.inArray(i,j.disabled)!=-1&&!a(o).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled");j.cache===false&&this.anchors.removeData("cache.tabs");this.lis.add(this.anchors).unbind(".tabs");if(j.event!=="mouseover"){var n=function(r,u){u.is(":not(.ui-state-disabled)")&&u.addClass("ui-state-"+r)},k=function(r,u){u.removeClass("ui-state-"+
r)};this.lis.bind("mouseover.tabs",function(){n("hover",a(this))});this.lis.bind("mouseout.tabs",function(){k("hover",a(this))});this.anchors.bind("focus.tabs",function(){n("focus",a(this).closest("li"))});this.anchors.bind("blur.tabs",function(){k("focus",a(this).closest("li"))})}var m,p;if(j.fx)if(a.isArray(j.fx)){m=j.fx[0];p=j.fx[1]}else m=p=j.fx;var q=p?function(r,u){a(r).closest("li").addClass("ui-tabs-selected ui-state-active");u.hide().removeClass("ui-tabs-hide").animate(p,p.duration||"normal",
function(){b(u,p);f._trigger("show",null,f._ui(r,u[0]))})}:function(r,u){a(r).closest("li").addClass("ui-tabs-selected ui-state-active");u.removeClass("ui-tabs-hide");f._trigger("show",null,f._ui(r,u[0]))},s=m?function(r,u){u.animate(m,m.duration||"normal",function(){f.lis.removeClass("ui-tabs-selected ui-state-active");u.addClass("ui-tabs-hide");b(u,m);f.element.dequeue("tabs")})}:function(r,u){f.lis.removeClass("ui-tabs-selected ui-state-active");u.addClass("ui-tabs-hide");f.element.dequeue("tabs")};
this.anchors.bind(j.event+".tabs",function(){var r=this,u=a(r).closest("li"),v=f.panels.filter(":not(.ui-tabs-hide)"),w=f.element.find(f._sanitizeSelector(r.hash));if(u.hasClass("ui-tabs-selected")&&!j.collapsible||u.hasClass("ui-state-disabled")||u.hasClass("ui-state-processing")||f.panels.filter(":animated").length||f._trigger("select",null,f._ui(this,w[0]))===false){this.blur();return false}j.selected=f.anchors.index(this);f.abort();if(j.collapsible)if(u.hasClass("ui-tabs-selected")){j.selected=
-1;j.cookie&&f._cookie(j.selected,j.cookie);f.element.queue("tabs",function(){s(r,v)}).dequeue("tabs");this.blur();return false}else if(!v.length){j.cookie&&f._cookie(j.selected,j.cookie);f.element.queue("tabs",function(){q(r,w)});f.load(f.anchors.index(this));this.blur();return false}j.cookie&&f._cookie(j.selected,j.cookie);if(w.length){v.length&&f.element.queue("tabs",function(){s(r,v)});f.element.queue("tabs",function(){q(r,w)});f.load(f.anchors.index(this))}else throw"jQuery UI Tabs: Mismatching fragment identifier.";
a.browser.msie&&this.blur()});this.anchors.bind("click.tabs",function(){return false})},_getIndex:function(i){if(typeof i=="string")i=this.anchors.index(this.anchors.filter("[href$="+i+"]"));return i},destroy:function(){var i=this.options;this.abort();this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.anchors.each(function(){var b=
a.data(this,"href.tabs");if(b)this.href=b;var f=a(this).unbind(".tabs");a.each(["href","load","cache"],function(j,l){f.removeData(l+".tabs")})});this.lis.unbind(".tabs").add(this.panels).each(function(){a.data(this,"destroy.tabs")?a(this).remove():a(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide")});i.cookie&&this._cookie(null,i.cookie);return this},add:function(i,
b,f){if(f===d)f=this.anchors.length;var j=this,l=this.options;b=a(l.tabTemplate.replace(/#\{href\}/g,i).replace(/#\{label\}/g,b));i=!i.indexOf("#")?i.replace("#",""):this._tabId(a("a",b)[0]);b.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);var o=j.element.find("#"+i);o.length||(o=a(l.panelTemplate).attr("id",i).data("destroy.tabs",true));o.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");if(f>=this.lis.length){b.appendTo(this.list);o.appendTo(this.list[0].parentNode)}else{b.insertBefore(this.lis[f]);
o.insertBefore(this.panels[f])}l.disabled=a.map(l.disabled,function(n){return n>=f?++n:n});this._tabify();if(this.anchors.length==1){l.selected=0;b.addClass("ui-tabs-selected ui-state-active");o.removeClass("ui-tabs-hide");this.element.queue("tabs",function(){j._trigger("show",null,j._ui(j.anchors[0],j.panels[0]))});this.load(0)}this._trigger("add",null,this._ui(this.anchors[f],this.panels[f]));return this},remove:function(i){i=this._getIndex(i);var b=this.options,f=this.lis.eq(i).remove(),j=this.panels.eq(i).remove();
if(f.hasClass("ui-tabs-selected")&&this.anchors.length>1)this.select(i+(i+1<this.anchors.length?1:-1));b.disabled=a.map(a.grep(b.disabled,function(l){return l!=i}),function(l){return l>=i?--l:l});this._tabify();this._trigger("remove",null,this._ui(f.find("a")[0],j[0]));return this},enable:function(i){i=this._getIndex(i);var b=this.options;if(a.inArray(i,b.disabled)!=-1){this.lis.eq(i).removeClass("ui-state-disabled");b.disabled=a.grep(b.disabled,function(f){return f!=i});this._trigger("enable",null,
this._ui(this.anchors[i],this.panels[i]));return this}},disable:function(i){i=this._getIndex(i);var b=this.options;if(i!=b.selected){this.lis.eq(i).addClass("ui-state-disabled");b.disabled.push(i);b.disabled.sort();this._trigger("disable",null,this._ui(this.anchors[i],this.panels[i]))}return this},select:function(i){i=this._getIndex(i);if(i==-1)if(this.options.collapsible&&this.options.selected!=-1)i=this.options.selected;else return this;this.anchors.eq(i).trigger(this.options.event+".tabs");return this},
load:function(i){i=this._getIndex(i);var b=this,f=this.options,j=this.anchors.eq(i)[0],l=a.data(j,"load.tabs");this.abort();if(!l||this.element.queue("tabs").length!==0&&a.data(j,"cache.tabs"))this.element.dequeue("tabs");else{this.lis.eq(i).addClass("ui-state-processing");if(f.spinner){var o=a("span",j);o.data("label.tabs",o.html()).html(f.spinner)}this.xhr=a.ajax(a.extend({},f.ajaxOptions,{url:l,success:function(n,k){b.element.find(b._sanitizeSelector(j.hash)).html(n);b._cleanup();f.cache&&a.data(j,
"cache.tabs",true);b._trigger("load",null,b._ui(b.anchors[i],b.panels[i]));try{f.ajaxOptions.success(n,k)}catch(m){}},error:function(n,k){b._cleanup();b._trigger("load",null,b._ui(b.anchors[i],b.panels[i]));try{f.ajaxOptions.error(n,k,i,j)}catch(m){}}}));b.element.dequeue("tabs");return this}},abort:function(){this.element.queue([]);this.panels.stop(false,true);this.element.queue("tabs",this.element.queue("tabs").splice(-2,2));if(this.xhr){this.xhr.abort();delete this.xhr}this._cleanup();return this},
url:function(i,b){this.anchors.eq(i).removeData("cache.tabs").data("load.tabs",b);return this},length:function(){return this.anchors.length}});a.extend(a.ui.tabs,{version:"1.8.16"});a.extend(a.ui.tabs.prototype,{rotation:null,rotate:function(i,b){var f=this,j=this.options,l=f._rotate||(f._rotate=function(o){clearTimeout(f.rotation);f.rotation=setTimeout(function(){var n=j.selected;f.select(++n<f.anchors.length?n:0)},i);o&&o.stopPropagation()});b=f._unrotate||(f._unrotate=!b?function(o){o.clientX&&
f.rotate(null)}:function(){t=j.selected;l()});if(i){this.element.bind("tabsshow",l);this.anchors.bind(j.event+".tabs",b);l()}else{clearTimeout(f.rotation);this.element.unbind("tabsshow",l);this.anchors.unbind(j.event+".tabs",b);delete this._rotate;delete this._unrotate}return this}})})(jQuery);

var Layout = function () {
	
	var timer, docWidth;
	
	return { init: init, adapt: adapt };
	
	function init () {
		var searchBevel, contentHeaderBevel;
		
		$('html').removeClass ('no-js');
		
		adapt ();
		
		docWidth = $(window).width ();
		
		$(window).resize(function() {
			//console.log ('cache: ' + docWidth);
			//console.log ('live: ' + $(window).width ());
			//console.log ('------------------------');
			
			if (docWidth === $(window).width ()) { 
				//console.log ('Same'); 
				return false; 				
			}
			
		    clearTimeout(timer);
		    timer = setTimeout(adapt, 125);
		});
		
		searchBevel = $('<div>', { id: 'searchBevel' }).appendTo ('#search');
		contentHeaderBevel = $('<div>', { id: 'contentHeaderBevel' }).appendTo ('#contentHeader');		
		
		$('#advancedSearchTrigger').live ('click', advancedClick);
		
		$('#quickNav').find ('li').last ().addClass ('last');
	}

	function advancedClick (e) {
		e.preventDefault ();	
		var search = $(this).parents ('#search');	
		search.find ('#advancedSearchOptions').slideToggle ();
	}
	
	function adapt () {
		var windowWidth, windowHeight, contentWidth, contentHeight, sidebarWidth, gutterWidth, bottomPad, $sidebar, $content;
		
		$sidebar = $('#sidebar');
		$content = $('#content');
		
		windowWidth = $(window).width ();
		windowHeight = $(window).height ();
		
		docWidth = windowWidth;
		
		sidebarWidth = $sidebar.outerWidth ();
		gutterWidth = 20;
		bottomPad = 125;
		
		contentWidth = windowWidth - sidebarWidth - gutterWidth;
		contentHeight = windowHeight + bottomPad;
		
		//$content.css ({ 'min-width': contentWidth });
		//$content.css ({ 'height': $content.outerHeight + 97 });
		
		$(document).trigger ('layout.resize');
		
	}
}();

var Nav = function () {
	
	return { init: init, open: open };
	
	function init () {
		$('li.nav').each (function () {		
			var li, a, dropdown;
			li = $(this);
			a = li.find ('a').eq (0);						
			dropdown = li.find ('.subNav');
			
			if (dropdown.length > 0) {
				a.append ('<span class="dropdownArrow"></span>');
				li.addClass ('dropdown');
				a.bind ('click',navClick);
			}
		});
		
		var active = $('li.nav.active');
		
		if (active.is ('.dropdown')) {
			var id = active.attr ('id');
			
			active.addClass ('opened');
			active.find ('.subNav').show ();
		}
	}
	
	function open (id) {
		var el = $('#' + id)
		,	sub = el.find ('.subNav');
		
		el.addClass ('opened');
		sub.slideToggle ();
	}
	
	function navClick (e) {
		e.preventDefault ();
		
		var li = $(this).parents ('li');		
		
		if (li.is ('.opened')) { 
			closeAll ();			
		} else { 
			closeAll ();
			li.addClass ('opened').find ('.subNav').slideDown ();			
		}
		
		//closeAll ();
		//$(this).parents ('li.nav').addClass ('opened').find ('.subNav').slideToggle ();
	}
	
	function closeAll () {
		var subnav = $('.subNav');
		
		subnav.slideUp ().parents ('li').removeClass ('opened');
	}
}();

var Menu = function () {

	var settings = { outsideClose: false };
	
	return { init: init, close: close };
	
	function init (config) {	
				
		options = $.extend (settings, config);
		
		var $menuContainer = $('.menu-container')
			$menu = $('.menu')
			$topNav = $('#topNav');
			
		$topNav.find ('.menu').each (function () {
			var $this = $(this);
			
			if ($this.parent ().find ('.menu-dropdown').length > 0) {
				$this.append ('<div class="menu-arrow"></div>');
			}
		});
		
		$menu.live ('click', open);
	
		$menuContainer.each (function () {			
			var parent = $(this).parents ('#quickNav')
				, cls = (parent.length > 0) ? $(this).addClass ('menu-type-quicknav') : $(this).addClass ('menu-type-topnav');
					
			$(this)
				.addClass (cls)
				.append ('<div class="menu-top"></div>')
				.insertBefore ('#footer');
		});
		
		$menuContainer.find ('form').live ('submit', function (e) { e.preventDefault (); });
	}
	
	function open (e) {
		e.preventDefault ();
		
		var $this, id, $modal, docWidth, offset, left, top;
		
		$this = $(this);
		id = $this.attr ('href');
		$modal = $(id);
		docWidth = $(document).width ();
		
		$modal.removeClass ('middle right');
		
		if ($modal.is (':visible')) {
			doClose ();
		}
		
		forceClose ();
		
		offset = $this.offset ();
		left = offset.left - 8;
		top = offset.top + $this.outerHeight () + 4;
		
		
		var showRight = docWidth < offset.left + $modal.outerWidth ();
		
		
		
		
		
		if (docWidth < 550) {
			$modal.css ({ left: '50%', top: top, 'margin-left': '-' + $modal.outerWidth () / 2 + 'px' }).addClass ('middle');
		
				$('body').append ('<div id="overlay"></div>');
		} else if (showRight) {
			
			left = offset.left - $modal.outerWidth () + 45;
			
			if (left < 0) {
				$modal.css ({ left: '50%', top: top, 'margin-left': '-' + $modal.outerWidth () / 2 + 'px' }).addClass ('middle');
		
				$('body').append ('<div id="overlay"></div>');
			} else {			
				$modal.css ({ left: left, top: top, 'margin-left': 0 }).addClass ('right');
			}
			
		} else {
			$modal.css ({ left: left, top: top, 'margin-left': 0 });
		}		
		
		
		
		
		
		$modal.show ();		
		$this.parent ().find ('.alert').fadeOut ();		
		$('#overlay').bind ('click', docClick);		
		$modal.find ('.menu-close').bind ('click', close);		
		$(document).bind ('click.menu', docClick);
	}
	
	function docClick (e) {
		if ($(e.target).parents ('.menu-container').length < 1) {
			if (!$(e.target).is ('.menu') && $(e.target).parents ('.menu').length < 1) {				
				doClose ();
			}
		}
	}
	
	function close (e) {
		e.preventDefault ();		
		doClose ();
	}
	
	function doClose () {
		var modal, form;
		
		$(document).unbind ('click.menu');
		
		modal = $('.menu-container:visible');
		modal.fadeOut ('medium', function () { });
		
		form = modal.find ('form');
		
		if (form.length > 0) {
			form[0].reset ();
		}
		
		$('#overlay').fadeOut ('medium', function () { $(this).remove (); });
	}
	
	function forceClose () {
		$('.menu-container').hide ();
		$(document).unbind ('click.menu');
	}
}();

if(!document.createElement("canvas").getContext){(function(){var z=Math;var K=z.round;var J=z.sin;var U=z.cos;var b=z.abs;var k=z.sqrt;var D=10;var F=D/2;function T(){return this.context_||(this.context_=new W(this))}var O=Array.prototype.slice;function G(i,j,m){var Z=O.call(arguments,2);return function(){return i.apply(j,Z.concat(O.call(arguments)))}}function AD(Z){return String(Z).replace(/&/g,"&amp;").replace(/"/g,"&quot;")}function r(i){if(!i.namespaces.g_vml_){i.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML")}if(!i.namespaces.g_o_){i.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML")}if(!i.styleSheets.ex_canvas_){var Z=i.createStyleSheet();Z.owningElement.id="ex_canvas_";Z.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}"}}r(document);var E={init:function(Z){if(/MSIE/.test(navigator.userAgent)&&!window.opera){var i=Z||document;i.createElement("canvas");i.attachEvent("onreadystatechange",G(this.init_,this,i))}},init_:function(m){var j=m.getElementsByTagName("canvas");for(var Z=0;Z<j.length;Z++){this.initElement(j[Z])}},initElement:function(i){if(!i.getContext){i.getContext=T;r(i.ownerDocument);i.innerHTML="";i.attachEvent("onpropertychange",S);i.attachEvent("onresize",w);var Z=i.attributes;if(Z.width&&Z.width.specified){i.style.width=Z.width.nodeValue+"px"}else{i.width=i.clientWidth}if(Z.height&&Z.height.specified){i.style.height=Z.height.nodeValue+"px"}else{i.height=i.clientHeight}}return i}};function S(i){var Z=i.srcElement;switch(i.propertyName){case"width":Z.getContext().clearRect();Z.style.width=Z.attributes.width.nodeValue+"px";Z.firstChild.style.width=Z.clientWidth+"px";break;case"height":Z.getContext().clearRect();Z.style.height=Z.attributes.height.nodeValue+"px";Z.firstChild.style.height=Z.clientHeight+"px";break}}function w(i){var Z=i.srcElement;if(Z.firstChild){Z.firstChild.style.width=Z.clientWidth+"px";Z.firstChild.style.height=Z.clientHeight+"px"}}E.init();var I=[];for(var AC=0;AC<16;AC++){for(var AB=0;AB<16;AB++){I[AC*16+AB]=AC.toString(16)+AB.toString(16)}}function V(){return[[1,0,0],[0,1,0],[0,0,1]]}function d(m,j){var i=V();for(var Z=0;Z<3;Z++){for(var AF=0;AF<3;AF++){var p=0;for(var AE=0;AE<3;AE++){p+=m[Z][AE]*j[AE][AF]}i[Z][AF]=p}}return i}function Q(i,Z){Z.fillStyle=i.fillStyle;Z.lineCap=i.lineCap;Z.lineJoin=i.lineJoin;Z.lineWidth=i.lineWidth;Z.miterLimit=i.miterLimit;Z.shadowBlur=i.shadowBlur;Z.shadowColor=i.shadowColor;Z.shadowOffsetX=i.shadowOffsetX;Z.shadowOffsetY=i.shadowOffsetY;Z.strokeStyle=i.strokeStyle;Z.globalAlpha=i.globalAlpha;Z.font=i.font;Z.textAlign=i.textAlign;Z.textBaseline=i.textBaseline;Z.arcScaleX_=i.arcScaleX_;Z.arcScaleY_=i.arcScaleY_;Z.lineScale_=i.lineScale_}var B={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgreen:"#006400",darkgrey:"#A9A9A9",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",grey:"#808080",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgreen:"#90EE90",lightgrey:"#D3D3D3",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",oldlace:"#FDF5E6",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",whitesmoke:"#F5F5F5",yellowgreen:"#9ACD32"};function g(i){var m=i.indexOf("(",3);var Z=i.indexOf(")",m+1);var j=i.substring(m+1,Z).split(",");if(j.length==4&&i.substr(3,1)=="a"){alpha=Number(j[3])}else{j[3]=1}return j}function C(Z){return parseFloat(Z)/100}function N(i,j,Z){return Math.min(Z,Math.max(j,i))}function c(AF){var j,i,Z;h=parseFloat(AF[0])/360%360;if(h<0){h++}s=N(C(AF[1]),0,1);l=N(C(AF[2]),0,1);if(s==0){j=i=Z=l}else{var m=l<0.5?l*(1+s):l+s-l*s;var AE=2*l-m;j=A(AE,m,h+1/3);i=A(AE,m,h);Z=A(AE,m,h-1/3)}return"#"+I[Math.floor(j*255)]+I[Math.floor(i*255)]+I[Math.floor(Z*255)]}function A(i,Z,j){if(j<0){j++}if(j>1){j--}if(6*j<1){return i+(Z-i)*6*j}else{if(2*j<1){return Z}else{if(3*j<2){return i+(Z-i)*(2/3-j)*6}else{return i}}}}function Y(Z){var AE,p=1;Z=String(Z);if(Z.charAt(0)=="#"){AE=Z}else{if(/^rgb/.test(Z)){var m=g(Z);var AE="#",AF;for(var j=0;j<3;j++){if(m[j].indexOf("%")!=-1){AF=Math.floor(C(m[j])*255)}else{AF=Number(m[j])}AE+=I[N(AF,0,255)]}p=m[3]}else{if(/^hsl/.test(Z)){var m=g(Z);AE=c(m);p=m[3]}else{AE=B[Z]||Z}}}return{color:AE,alpha:p}}var L={style:"normal",variant:"normal",weight:"normal",size:10,family:"sans-serif"};var f={};function X(Z){if(f[Z]){return f[Z]}var m=document.createElement("div");var j=m.style;try{j.font=Z}catch(i){}return f[Z]={style:j.fontStyle||L.style,variant:j.fontVariant||L.variant,weight:j.fontWeight||L.weight,size:j.fontSize||L.size,family:j.fontFamily||L.family}}function P(j,i){var Z={};for(var AF in j){Z[AF]=j[AF]}var AE=parseFloat(i.currentStyle.fontSize),m=parseFloat(j.size);if(typeof j.size=="number"){Z.size=j.size}else{if(j.size.indexOf("px")!=-1){Z.size=m}else{if(j.size.indexOf("em")!=-1){Z.size=AE*m}else{if(j.size.indexOf("%")!=-1){Z.size=(AE/100)*m}else{if(j.size.indexOf("pt")!=-1){Z.size=m/0.75}else{Z.size=AE}}}}}Z.size*=0.981;return Z}function AA(Z){return Z.style+" "+Z.variant+" "+Z.weight+" "+Z.size+"px "+Z.family}function t(Z){switch(Z){case"butt":return"flat";case"round":return"round";case"square":default:return"square"}}function W(i){this.m_=V();this.mStack_=[];this.aStack_=[];this.currentPath_=[];this.strokeStyle="#000";this.fillStyle="#000";this.lineWidth=1;this.lineJoin="miter";this.lineCap="butt";this.miterLimit=D*1;this.globalAlpha=1;this.font="10px sans-serif";this.textAlign="left";this.textBaseline="alphabetic";this.canvas=i;var Z=i.ownerDocument.createElement("div");Z.style.width=i.clientWidth+"px";Z.style.height=i.clientHeight+"px";Z.style.overflow="hidden";Z.style.position="absolute";i.appendChild(Z);this.element_=Z;this.arcScaleX_=1;this.arcScaleY_=1;this.lineScale_=1}var M=W.prototype;M.clearRect=function(){if(this.textMeasureEl_){this.textMeasureEl_.removeNode(true);this.textMeasureEl_=null}this.element_.innerHTML=""};M.beginPath=function(){this.currentPath_=[]};M.moveTo=function(i,Z){var j=this.getCoords_(i,Z);this.currentPath_.push({type:"moveTo",x:j.x,y:j.y});this.currentX_=j.x;this.currentY_=j.y};M.lineTo=function(i,Z){var j=this.getCoords_(i,Z);this.currentPath_.push({type:"lineTo",x:j.x,y:j.y});this.currentX_=j.x;this.currentY_=j.y};M.bezierCurveTo=function(j,i,AI,AH,AG,AE){var Z=this.getCoords_(AG,AE);var AF=this.getCoords_(j,i);var m=this.getCoords_(AI,AH);e(this,AF,m,Z)};function e(Z,m,j,i){Z.currentPath_.push({type:"bezierCurveTo",cp1x:m.x,cp1y:m.y,cp2x:j.x,cp2y:j.y,x:i.x,y:i.y});Z.currentX_=i.x;Z.currentY_=i.y}M.quadraticCurveTo=function(AG,j,i,Z){var AF=this.getCoords_(AG,j);var AE=this.getCoords_(i,Z);var AH={x:this.currentX_+2/3*(AF.x-this.currentX_),y:this.currentY_+2/3*(AF.y-this.currentY_)};var m={x:AH.x+(AE.x-this.currentX_)/3,y:AH.y+(AE.y-this.currentY_)/3};e(this,AH,m,AE)};M.arc=function(AJ,AH,AI,AE,i,j){AI*=D;var AN=j?"at":"wa";var AK=AJ+U(AE)*AI-F;var AM=AH+J(AE)*AI-F;var Z=AJ+U(i)*AI-F;var AL=AH+J(i)*AI-F;if(AK==Z&&!j){AK+=0.125}var m=this.getCoords_(AJ,AH);var AG=this.getCoords_(AK,AM);var AF=this.getCoords_(Z,AL);this.currentPath_.push({type:AN,x:m.x,y:m.y,radius:AI,xStart:AG.x,yStart:AG.y,xEnd:AF.x,yEnd:AF.y})};M.rect=function(j,i,Z,m){this.moveTo(j,i);this.lineTo(j+Z,i);this.lineTo(j+Z,i+m);this.lineTo(j,i+m);this.closePath()};M.strokeRect=function(j,i,Z,m){var p=this.currentPath_;this.beginPath();this.moveTo(j,i);this.lineTo(j+Z,i);this.lineTo(j+Z,i+m);this.lineTo(j,i+m);this.closePath();this.stroke();this.currentPath_=p};M.fillRect=function(j,i,Z,m){var p=this.currentPath_;this.beginPath();this.moveTo(j,i);this.lineTo(j+Z,i);this.lineTo(j+Z,i+m);this.lineTo(j,i+m);this.closePath();this.fill();this.currentPath_=p};M.createLinearGradient=function(i,m,Z,j){var p=new v("gradient");p.x0_=i;p.y0_=m;p.x1_=Z;p.y1_=j;return p};M.createRadialGradient=function(m,AE,j,i,p,Z){var AF=new v("gradientradial");AF.x0_=m;AF.y0_=AE;AF.r0_=j;AF.x1_=i;AF.y1_=p;AF.r1_=Z;return AF};M.drawImage=function(AO,j){var AH,AF,AJ,AV,AM,AK,AQ,AX;var AI=AO.runtimeStyle.width;var AN=AO.runtimeStyle.height;AO.runtimeStyle.width="auto";AO.runtimeStyle.height="auto";var AG=AO.width;var AT=AO.height;AO.runtimeStyle.width=AI;AO.runtimeStyle.height=AN;if(arguments.length==3){AH=arguments[1];AF=arguments[2];AM=AK=0;AQ=AJ=AG;AX=AV=AT}else{if(arguments.length==5){AH=arguments[1];AF=arguments[2];AJ=arguments[3];AV=arguments[4];AM=AK=0;AQ=AG;AX=AT}else{if(arguments.length==9){AM=arguments[1];AK=arguments[2];AQ=arguments[3];AX=arguments[4];AH=arguments[5];AF=arguments[6];AJ=arguments[7];AV=arguments[8]}else{throw Error("Invalid number of arguments")}}}var AW=this.getCoords_(AH,AF);var m=AQ/2;var i=AX/2;var AU=[];var Z=10;var AE=10;AU.push(" <g_vml_:group",' coordsize="',D*Z,",",D*AE,'"',' coordorigin="0,0"',' style="width:',Z,"px;height:",AE,"px;position:absolute;");if(this.m_[0][0]!=1||this.m_[0][1]||this.m_[1][1]!=1||this.m_[1][0]){var p=[];p.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",K(AW.x/D),",","Dy=",K(AW.y/D),"");var AS=AW;var AR=this.getCoords_(AH+AJ,AF);var AP=this.getCoords_(AH,AF+AV);var AL=this.getCoords_(AH+AJ,AF+AV);AS.x=z.max(AS.x,AR.x,AP.x,AL.x);AS.y=z.max(AS.y,AR.y,AP.y,AL.y);AU.push("padding:0 ",K(AS.x/D),"px ",K(AS.y/D),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",p.join(""),", sizingmethod='clip');")}else{AU.push("top:",K(AW.y/D),"px;left:",K(AW.x/D),"px;")}AU.push(' ">','<g_vml_:image src="',AO.src,'"',' style="width:',D*AJ,"px;"," height:",D*AV,'px"',' cropleft="',AM/AG,'"',' croptop="',AK/AT,'"',' cropright="',(AG-AM-AQ)/AG,'"',' cropbottom="',(AT-AK-AX)/AT,'"'," />","</g_vml_:group>");this.element_.insertAdjacentHTML("BeforeEnd",AU.join(""))};M.stroke=function(AM){var m=10;var AN=10;var AE=5000;var AG={x:null,y:null};var AL={x:null,y:null};for(var AH=0;AH<this.currentPath_.length;AH+=AE){var AK=[];var AF=false;AK.push("<g_vml_:shape",' filled="',!!AM,'"',' style="position:absolute;width:',m,"px;height:",AN,'px;"',' coordorigin="0,0"',' coordsize="',D*m,",",D*AN,'"',' stroked="',!AM,'"',' path="');var AO=false;for(var AI=AH;AI<Math.min(AH+AE,this.currentPath_.length);AI++){if(AI%AE==0&&AI>0){AK.push(" m ",K(this.currentPath_[AI-1].x),",",K(this.currentPath_[AI-1].y))}var Z=this.currentPath_[AI];var AJ;switch(Z.type){case"moveTo":AJ=Z;AK.push(" m ",K(Z.x),",",K(Z.y));break;case"lineTo":AK.push(" l ",K(Z.x),",",K(Z.y));break;case"close":AK.push(" x ");Z=null;break;case"bezierCurveTo":AK.push(" c ",K(Z.cp1x),",",K(Z.cp1y),",",K(Z.cp2x),",",K(Z.cp2y),",",K(Z.x),",",K(Z.y));break;case"at":case"wa":AK.push(" ",Z.type," ",K(Z.x-this.arcScaleX_*Z.radius),",",K(Z.y-this.arcScaleY_*Z.radius)," ",K(Z.x+this.arcScaleX_*Z.radius),",",K(Z.y+this.arcScaleY_*Z.radius)," ",K(Z.xStart),",",K(Z.yStart)," ",K(Z.xEnd),",",K(Z.yEnd));break}if(Z){if(AG.x==null||Z.x<AG.x){AG.x=Z.x}if(AL.x==null||Z.x>AL.x){AL.x=Z.x}if(AG.y==null||Z.y<AG.y){AG.y=Z.y}if(AL.y==null||Z.y>AL.y){AL.y=Z.y}}}AK.push(' ">');if(!AM){R(this,AK)}else{a(this,AK,AG,AL)}AK.push("</g_vml_:shape>");this.element_.insertAdjacentHTML("beforeEnd",AK.join(""))}};function R(j,AE){var i=Y(j.strokeStyle);var m=i.color;var p=i.alpha*j.globalAlpha;var Z=j.lineScale_*j.lineWidth;if(Z<1){p*=Z}AE.push("<g_vml_:stroke",' opacity="',p,'"',' joinstyle="',j.lineJoin,'"',' miterlimit="',j.miterLimit,'"',' endcap="',t(j.lineCap),'"',' weight="',Z,'px"',' color="',m,'" />')}function a(AO,AG,Ah,AP){var AH=AO.fillStyle;var AY=AO.arcScaleX_;var AX=AO.arcScaleY_;var Z=AP.x-Ah.x;var m=AP.y-Ah.y;if(AH instanceof v){var AL=0;var Ac={x:0,y:0};var AU=0;var AK=1;if(AH.type_=="gradient"){var AJ=AH.x0_/AY;var j=AH.y0_/AX;var AI=AH.x1_/AY;var Aj=AH.y1_/AX;var Ag=AO.getCoords_(AJ,j);var Af=AO.getCoords_(AI,Aj);var AE=Af.x-Ag.x;var p=Af.y-Ag.y;AL=Math.atan2(AE,p)*180/Math.PI;if(AL<0){AL+=360}if(AL<0.000001){AL=0}}else{var Ag=AO.getCoords_(AH.x0_,AH.y0_);Ac={x:(Ag.x-Ah.x)/Z,y:(Ag.y-Ah.y)/m};Z/=AY*D;m/=AX*D;var Aa=z.max(Z,m);AU=2*AH.r0_/Aa;AK=2*AH.r1_/Aa-AU}var AS=AH.colors_;AS.sort(function(Ak,i){return Ak.offset-i.offset});var AN=AS.length;var AR=AS[0].color;var AQ=AS[AN-1].color;var AW=AS[0].alpha*AO.globalAlpha;var AV=AS[AN-1].alpha*AO.globalAlpha;var Ab=[];for(var Ae=0;Ae<AN;Ae++){var AM=AS[Ae];Ab.push(AM.offset*AK+AU+" "+AM.color)}AG.push('<g_vml_:fill type="',AH.type_,'"',' method="none" focus="100%"',' color="',AR,'"',' color2="',AQ,'"',' colors="',Ab.join(","),'"',' opacity="',AV,'"',' g_o_:opacity2="',AW,'"',' angle="',AL,'"',' focusposition="',Ac.x,",",Ac.y,'" />')}else{if(AH instanceof u){if(Z&&m){var AF=-Ah.x;var AZ=-Ah.y;AG.push("<g_vml_:fill",' position="',AF/Z*AY*AY,",",AZ/m*AX*AX,'"',' type="tile"',' src="',AH.src_,'" />')}}else{var Ai=Y(AO.fillStyle);var AT=Ai.color;var Ad=Ai.alpha*AO.globalAlpha;AG.push('<g_vml_:fill color="',AT,'" opacity="',Ad,'" />')}}}M.fill=function(){this.stroke(true)};M.closePath=function(){this.currentPath_.push({type:"close"})};M.getCoords_=function(j,i){var Z=this.m_;return{x:D*(j*Z[0][0]+i*Z[1][0]+Z[2][0])-F,y:D*(j*Z[0][1]+i*Z[1][1]+Z[2][1])-F}};M.save=function(){var Z={};Q(this,Z);this.aStack_.push(Z);this.mStack_.push(this.m_);this.m_=d(V(),this.m_)};M.restore=function(){if(this.aStack_.length){Q(this.aStack_.pop(),this);this.m_=this.mStack_.pop()}};function H(Z){return isFinite(Z[0][0])&&isFinite(Z[0][1])&&isFinite(Z[1][0])&&isFinite(Z[1][1])&&isFinite(Z[2][0])&&isFinite(Z[2][1])}function y(i,Z,j){if(!H(Z)){return }i.m_=Z;if(j){var p=Z[0][0]*Z[1][1]-Z[0][1]*Z[1][0];i.lineScale_=k(b(p))}}M.translate=function(j,i){var Z=[[1,0,0],[0,1,0],[j,i,1]];y(this,d(Z,this.m_),false)};M.rotate=function(i){var m=U(i);var j=J(i);var Z=[[m,j,0],[-j,m,0],[0,0,1]];y(this,d(Z,this.m_),false)};M.scale=function(j,i){this.arcScaleX_*=j;this.arcScaleY_*=i;var Z=[[j,0,0],[0,i,0],[0,0,1]];y(this,d(Z,this.m_),true)};M.transform=function(p,m,AF,AE,i,Z){var j=[[p,m,0],[AF,AE,0],[i,Z,1]];y(this,d(j,this.m_),true)};M.setTransform=function(AE,p,AG,AF,j,i){var Z=[[AE,p,0],[AG,AF,0],[j,i,1]];y(this,Z,true)};M.drawText_=function(AK,AI,AH,AN,AG){var AM=this.m_,AQ=1000,i=0,AP=AQ,AF={x:0,y:0},AE=[];var Z=P(X(this.font),this.element_);var j=AA(Z);var AR=this.element_.currentStyle;var p=this.textAlign.toLowerCase();switch(p){case"left":case"center":case"right":break;case"end":p=AR.direction=="ltr"?"right":"left";break;case"start":p=AR.direction=="rtl"?"right":"left";break;default:p="left"}switch(this.textBaseline){case"hanging":case"top":AF.y=Z.size/1.75;break;case"middle":break;default:case null:case"alphabetic":case"ideographic":case"bottom":AF.y=-Z.size/2.25;break}switch(p){case"right":i=AQ;AP=0.05;break;case"center":i=AP=AQ/2;break}var AO=this.getCoords_(AI+AF.x,AH+AF.y);AE.push('<g_vml_:line from="',-i,' 0" to="',AP,' 0.05" ',' coordsize="100 100" coordorigin="0 0"',' filled="',!AG,'" stroked="',!!AG,'" style="position:absolute;width:1px;height:1px;">');if(AG){R(this,AE)}else{a(this,AE,{x:-i,y:0},{x:AP,y:Z.size})}var AL=AM[0][0].toFixed(3)+","+AM[1][0].toFixed(3)+","+AM[0][1].toFixed(3)+","+AM[1][1].toFixed(3)+",0,0";var AJ=K(AO.x/D)+","+K(AO.y/D);AE.push('<g_vml_:skew on="t" matrix="',AL,'" ',' offset="',AJ,'" origin="',i,' 0" />','<g_vml_:path textpathok="true" />','<g_vml_:textpath on="true" string="',AD(AK),'" style="v-text-align:',p,";font:",AD(j),'" /></g_vml_:line>');this.element_.insertAdjacentHTML("beforeEnd",AE.join(""))};M.fillText=function(j,Z,m,i){this.drawText_(j,Z,m,i,false)};M.strokeText=function(j,Z,m,i){this.drawText_(j,Z,m,i,true)};M.measureText=function(j){if(!this.textMeasureEl_){var Z='<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>';this.element_.insertAdjacentHTML("beforeEnd",Z);this.textMeasureEl_=this.element_.lastChild}var i=this.element_.ownerDocument;this.textMeasureEl_.innerHTML="";this.textMeasureEl_.style.font=this.font;this.textMeasureEl_.appendChild(i.createTextNode(j));return{width:this.textMeasureEl_.offsetWidth}};M.clip=function(){};M.arcTo=function(){};M.createPattern=function(i,Z){return new u(i,Z)};function v(Z){this.type_=Z;this.x0_=0;this.y0_=0;this.r0_=0;this.x1_=0;this.y1_=0;this.r1_=0;this.colors_=[]}v.prototype.addColorStop=function(i,Z){Z=Y(Z);this.colors_.push({offset:i,color:Z.color,alpha:Z.alpha})};function u(i,Z){q(i);switch(Z){case"repeat":case null:case"":this.repetition_="repeat";break;case"repeat-x":case"repeat-y":case"no-repeat":this.repetition_=Z;break;default:n("SYNTAX_ERR")}this.src_=i.src;this.width_=i.width;this.height_=i.height}function n(Z){throw new o(Z)}function q(Z){if(!Z||Z.nodeType!=1||Z.tagName!="IMG"){n("TYPE_MISMATCH_ERR")}if(Z.readyState!="complete"){n("INVALID_STATE_ERR")}}function o(Z){this.code=this[Z];this.message=Z+": DOM Exception "+this.code}var x=o.prototype=new Error;x.INDEX_SIZE_ERR=1;x.DOMSTRING_SIZE_ERR=2;x.HIERARCHY_REQUEST_ERR=3;x.WRONG_DOCUMENT_ERR=4;x.INVALID_CHARACTER_ERR=5;x.NO_DATA_ALLOWED_ERR=6;x.NO_MODIFICATION_ALLOWED_ERR=7;x.NOT_FOUND_ERR=8;x.NOT_SUPPORTED_ERR=9;x.INUSE_ATTRIBUTE_ERR=10;x.INVALID_STATE_ERR=11;x.SYNTAX_ERR=12;x.INVALID_MODIFICATION_ERR=13;x.NAMESPACE_ERR=14;x.INVALID_ACCESS_ERR=15;x.VALIDATION_ERR=16;x.TYPE_MISMATCH_ERR=17;G_vmlCanvasManager=E;CanvasRenderingContext2D=W;CanvasGradient=v;CanvasPattern=u;DOMException=o})()};

/**
 * --------------------------------------------------------------------
 * jQuery-Plugin "visualize"
 * by Scott Jehl, scott@filamentgroup.com
 * http://www.filamentgroup.com
 * Copyright (c) 2009 Filament Group 
 * Dual licensed under the MIT (filamentgroup.com/examples/mit-license.txt) and GPL (filamentgroup.com/examples/gpl-license.txt) licenses.
 * 	
 * --------------------------------------------------------------------
 */
(function($) { 
$.fn.visualize = function(options, container){
	return $(this).each(function(){
		//configuration
		var o = $.extend({
			type: 'bar', //also available: area, pie, line
			width: $(this).width(), //height of canvas - defaults to table height
			height: $(this).height(), //height of canvas - defaults to table height
			appendTitle: true, //table caption text is added to chart
			title: null, //grabs from table caption if null
			appendKey: true, //color key is added to chart
			colors: ['#ae432e','#77ab13','#058dc7','#ef561a','#8d10ee','#5a3b16','#26a4ed','#f45a90','#e9e744'],
			textColors: [], //corresponds with colors array. null/undefined items will fall back to CSS
			parseDirection: 'x', //which direction to parse the table data
			pieMargin: 10, //pie charts only - spacing around pie
			pieLabelsAsPercent: true,
			pieLabelPos: 'inside',
			lineWeight: 4, //for line and area - stroke weight
			lineDots: false, //also available: 'single', 'double'
			dotInnerColor: "#ffffff", // only used for lineDots:'double'
			lineMargin: (options.lineDots?15:0), //for line and area - spacing around lines
			barGroupMargin: 10,
			chartId: '',
			xLabelParser: null, // function to parse labels as values
			valueParser: null, // function to parse values. must return a Number
			chartId: '',
			chartClass: '',
			barMargin: 1, //space around bars in bar chart (added to both sides of bar)
			yLabelInterval: 30, //distance between y labels
			interaction: false // only used for lineDots != false -- triggers mouseover and mouseout on original table
		},options);
		
		//reset width, height to numbers
		o.width = parseFloat(o.width);
		o.height = parseFloat(o.height);
		
		// reset padding if graph is not lines
		if(o.type != 'line' && o.type != 'area' ) {
			o.lineMargin = 0;
		}
		
		var self = $(this);
		
		// scrape data from html table
		var tableData = {};
		var colors = o.colors;
		var textColors = o.textColors;
		
		
		var parseLabels = function(direction){
			var labels = [];
			if(direction == 'x'){
				self.find('thead tr').each(function(i){
					$(this).find('th').each(function(j){
						if(!labels[j]) {
							labels[j] = [];
						}
						labels[j][i] = $(this).text()
					})
				});
			}
			else {
				self.find('tbody tr').each(function(i){
					$(this).find('th').each(function(j) {
						if(!labels[i]) {
							labels[i] = [];
						}
						labels[i][j] = $(this).text()
					});
				});
			}
			return labels;
		};
		
		var fnParse = o.valueParser || parseFloat;
		var dataGroups = tableData.dataGroups = [];
		if(o.parseDirection == 'x'){
			self.find('tbody tr').each(function(i,tr){
				dataGroups[i] = {};
				dataGroups[i].points = [];
				dataGroups[i].color = colors[i];
				if(textColors[i]){ dataGroups[i].textColor = textColors[i]; }
				$(tr).find('td').each(function(j,td){
					dataGroups[i].points.push( {
						value: fnParse($(td).text()),
						elem: td,
						tableCords: [i,j]
					} );
				});
			});
		} else {
			var cols = self.find('tbody tr:eq(0) td').size();
			for(var i=0; i<cols; i++){
				dataGroups[i] = {};
				dataGroups[i].points = [];
				dataGroups[i].color = colors[i];
				if(textColors[i]){ dataGroups[i].textColor = textColors[i]; }
				self.find('tbody tr').each(function(j){
					dataGroups[i].points.push( {
						value:  $(this).find('td').eq(i).text()*1,
						elem: this,
						tableCords: [i,j]
					} );
				});
			};
		}
		
	
		var allItems = tableData.allItems = [];
		$(dataGroups).each(function(i,row){
			var count = 0;
			$.each(row.points,function(j,point){
				allItems.push(point);
				count += point.value;
			});
			row.groupTotal = count;
		});
		
		tableData.dataSum = 0;
		tableData.topValue = 0;
		tableData.bottomValue = Infinity;
		$.each(allItems,function(i,item){
			tableData.dataSum += fnParse(item.value);
			if(fnParse(item.value,10)>tableData.topValue) {
				tableData.topValue = fnParse(item.value,10);
			}
			if(item.value<tableData.bottomValue) {
				tableData.bottomValue = fnParse(item.value);	
			}
		});
		var dataSum = tableData.dataSum;
		var topValue = tableData.topValue;
		var bottomValue = tableData.bottomValue;
		
		var xAllLabels = tableData.xAllLabels = parseLabels(o.parseDirection);
		var yAllLabels = tableData.yAllLabels = parseLabels(o.parseDirection==='x'?'y':'x');
	
		var xLabels = tableData.xLabels = [];
		$.each(tableData.xAllLabels,function(i,labels) {
			tableData.xLabels.push(labels[0]);
		});
		
		var totalYRange = tableData.totalYRange = tableData.topValue - tableData.bottomValue;
		
		var zeroLocX = tableData.zeroLocX = 0;
		
		if($.isFunction(o.xLabelParser)) {
			
			var xTopValue = null;
			var xBottomValue = null;

			$.each(xLabels,function(i,label) {
				label = xLabels[i] = o.xLabelParser(label);
				if(i === 0) {
					xTopValue = label;
					xBottomValue = label;
				}
				if(label>xTopValue) {
					xTopValue = label;
				}
				if(label<xBottomValue) {
					xBottomValue = label;
				}
			});

			var totalXRange = tableData.totalXRange = xTopValue - xBottomValue;

			
			var	xScale = tableData.xScale = (o.width -2*o.lineMargin) / totalXRange;
			var marginDiffX = 0;
			if(o.lineMargin) {
				var marginDiffX = -2*xScale-o.lineMargin;
			}
			zeroLocX = tableData.zeroLocX = xBottomValue + o.lineMargin;
			
			tableData.xBottomValue = xBottomValue;
			tableData.xTopValue = xTopValue;
			tableData.totalXRange = totalXRange;
		}
		
		var	yScale = tableData.yScale = (o.height - 2*o.lineMargin) / totalYRange;
		var zeroLocY = tableData.zeroLocY = (o.height-2*o.lineMargin) * (tableData.topValue/tableData.totalYRange) + o.lineMargin;
		
		var yLabels = tableData.yLabels = [];

		var numLabels = Math.floor((o.height - 2*o.lineMargin) / 30);
		var loopInterval = tableData.totalYRange / numLabels; //fix provided from lab
		loopInterval = Math.round(parseFloat(loopInterval)/5)*5;
		loopInterval = Math.max(loopInterval, 1);
		// var start = 
		for(var j=Math.round(parseInt(tableData.bottomValue)/5)*5; j<=tableData.topValue+loopInterval; j+=loopInterval){
			yLabels.push(j); 
		}
		if(yLabels[yLabels.length-1] > tableData.topValue+loopInterval) {
			yLabels.pop();
		} else if (yLabels[yLabels.length-1] <= tableData.topValue-10) {
			yLabels.push(tableData.topValue);
		}
				
		// populate some data
		$.each(dataGroups,function(i,row){
			row.yLabels = tableData.yAllLabels[i];
			$.each(row.points, function(j,point){
				point.zeroLocY = tableData.zeroLocY;
				point.zeroLocX = tableData.zeroLocX;
				point.xLabels = tableData.xAllLabels[j];
				point.yLabels = tableData.yAllLabels[i];
				point.color = row.color;
			});
		});
		
		try{console.log(tableData);}catch(e){}
		
		var charts = {};
		
		charts.pie = {
			interactionPoints: dataGroups,
			
			setup: function() {
				charts.pie.draw(true);
			},
			draw: function(drawHtml){	

				var centerx = Math.round(canvas.width()/2);
				var centery = Math.round(canvas.height()/2);
				var radius = centery - o.pieMargin;				
				var counter = 0.0;

				if(drawHtml) {
					canvasContain.addClass('visualize-pie');

					if(o.pieLabelPos == 'outside'){ canvasContain.addClass('visualize-pie-outside'); }	

					var toRad = function(integer){ return (Math.PI/180)*integer; };
					var labels = $('<ul class="visualize-labels"></ul>')
						.insertAfter(canvas);
				}


				//draw the pie pieces
				$.each(dataGroups, function(i,row){
					var fraction = row.groupTotal / dataSum;
                    if (fraction <= 0 || isNaN(fraction))
                        return;
					ctx.beginPath();
					ctx.moveTo(centerx, centery);
					ctx.arc(centerx, centery, radius, 
						counter * Math.PI * 2 - Math.PI * 0.5,
						(counter + fraction) * Math.PI * 2 - Math.PI * 0.5,
		                false);
			        ctx.lineTo(centerx, centery);
			        ctx.closePath();
			        ctx.fillStyle = dataGroups[i].color;
			        ctx.fill();
			        // draw labels
					if(drawHtml) {
				       	var sliceMiddle = (counter + fraction/2);
				       	var distance = o.pieLabelPos == 'inside' ? radius/1.5 : radius +  radius / 5;
				        var labelx = Math.round(centerx + Math.sin(sliceMiddle * Math.PI * 2) * (distance));
				        var labely = Math.round(centery - Math.cos(sliceMiddle * Math.PI * 2) * (distance));
				        var leftRight = (labelx > centerx) ? 'right' : 'left';
				        var topBottom = (labely > centery) ? 'bottom' : 'top';
				        var percentage = parseFloat((fraction*100).toFixed(2));

						// interaction variables
						row.canvasCords = [labelx,labely];
						row.zeroLocY = tableData.zeroLocY = 0; // related to zeroLocY and plugin API
						row.zeroLocX = tableData.zeroLocX = 0; // related to zeroLocX and plugin API
						row.value = row.groupTotal;


				        if(percentage){
				        	var labelval = (o.pieLabelsAsPercent) ? percentage + '%' : row.groupTotal;
					        var labeltext = $('<span class="visualize-label">' + labelval +'</span>')
					        	.css(leftRight, 0)
					        	.css(topBottom, 0);
					        	if(labeltext)
				        var label = $('<li class="visualize-label-pos"></li>')
				       			.appendTo(labels)
				        		.css({left: labelx, top: labely})
				        		.append(labeltext);	
				        labeltext
				        	.css('font-size', radius / 8)
				        	.css('margin-'+leftRight, -labeltext.width()/2)
				        	.css('margin-'+topBottom, -labeltext.outerHeight()/2);

				        if(dataGroups[i].textColor){ labeltext.css('color', dataGroups[i].textColor); }

				        }
					}
			      	counter+=fraction;
				});
			}
		};
		
		(function(){
			
			var xInterval;

			var drawPoint = function (ctx,x,y,color,size) {
				ctx.moveTo(x,y);
				ctx.beginPath();
				ctx.arc(x,y,size/2,0,2*Math.PI,false);
				ctx.closePath();
				ctx.fillStyle = color;
				ctx.fill();
			};

			charts.line = {
				
				interactionPoints: allItems,

				setup: function(area){

					if(area){ canvasContain.addClass('visualize-area'); }
					else{ canvasContain.addClass('visualize-line'); }

					//write X labels
					var xlabelsUL = $('<ul class="visualize-labels-x"></ul>')
						.width(canvas.width())
						.height(canvas.height())
						.insertBefore(canvas);

					if(!o.customXLabels) {
						xInterval = (canvas.width() - 2*o.lineMargin) / (xLabels.length -1);
						$.each(xLabels, function(i){ 
							var thisLi = $('<li><span>'+this+'</span></li>')
								.prepend('<span class="line" />')
								.css('left', o.lineMargin + xInterval * i)
								.appendTo(xlabelsUL);						
							var label = thisLi.find('span:not(.line)');
							var leftOffset = label.width()/-2;
							if(i == 0){ leftOffset = 0; }
							else if(i== xLabels.length-1){ leftOffset = -label.width(); }
							label
								.css('margin-left', leftOffset)
								.addClass('label');
						});
					} else {
						o.customXLabels(tableData,xlabelsUL);
					}

					//write Y labels
					var liBottom = (canvas.height() - 2*o.lineMargin) / (yLabels.length-1);
					var ylabelsUL = $('<ul class="visualize-labels-y"></ul>')
						.width(canvas.width())
						.height(canvas.height())
						// .css('margin-top',-o.lineMargin)
						.insertBefore(scroller);

					$.each(yLabels, function(i){
						var value = Math.floor(this);
						var posB = (value-bottomValue)*yScale + o.lineMargin;
						if(posB >= o.height-1 || posB < 0) {
							return;
						}
						var thisLi = $('<li><span>'+value+'</span></li>')
							.css('bottom', posB);
						if(Math.abs(posB) < o.height-1) {
							thisLi.prepend('<span class="line"  />');
						}
						thisLi.prependTo(ylabelsUL);
						
						var label = thisLi.find('span:not(.line)');
						var topOffset = label.height()/-2;
						if(!o.lineMargin) {
							if(i == 0){ topOffset = -label.height(); }
							else if(i== yLabels.length-1){ topOffset = 0; }
						}
						label
							.css('margin-top', topOffset)
							.addClass('label');
					});
					
					//start from the bottom left
					ctx.translate(zeroLocX,zeroLocY);
					
					charts.line.draw(area);

				},
				
				draw: function(area) {
					// prevent drawing on top of previous draw
					ctx.clearRect(-zeroLocX,-zeroLocY,o.width,o.height);
					// Calculate each point properties before hand
					var integer;
					$.each(dataGroups,function(i,row){
						integer = o.lineMargin; // the current offset
						$.each(row.points, function(j,point){
							if(o.xLabelParser) {
								point.canvasCords = [(xLabels[j]-zeroLocX)*xScale - xBottomValue,-(point.value*yScale)];
							} else {
								point.canvasCords = [integer,-(point.value*yScale)];
							}
							
							if(o.lineDots) {
								point.dotSize = o.dotSize||o.lineWeight*Math.PI;
								point.dotInnerSize = o.dotInnerSize||o.lineWeight*Math.PI/2;
								if(o.lineDots == 'double') {
									point.innerColor = o.dotInnerColor;
								}
							}
							integer+=xInterval;
						});
					});
					// fire custom event so we can enable rich interaction
					self.trigger('vizualizeBeforeDraw',{options:o,table:self,canvasContain:canvasContain,tableData:tableData});
					// draw lines and areas
					$.each(dataGroups,function(h){
						// Draw lines
						ctx.beginPath();
						ctx.lineWidth = o.lineWeight;
						ctx.lineJoin = 'round';
						$.each(this.points, function(g){
							var loc = this.canvasCords;
							if(g == 0) {
								ctx.moveTo(loc[0],loc[1]);
							}
							ctx.lineTo(loc[0],loc[1]);
						});
						ctx.strokeStyle = this.color;
						ctx.stroke();
						// Draw fills
						if(area){
							var integer = this.points[this.points.length-1].canvasCords[0];
							if (isFinite(integer))
								ctx.lineTo(integer,0);
							ctx.lineTo(o.lineMargin,0);
							ctx.closePath();
							ctx.fillStyle = this.color;
							ctx.globalAlpha = .3;
							ctx.fill();
							ctx.globalAlpha = 1.0;
						}
						else {ctx.closePath();}
					});
					// draw points
					if(o.lineDots) {
						$.each(dataGroups,function(h){
							$.each(this.points, function(g){
								drawPoint(ctx,this.canvasCords[0],this.canvasCords[1],this.color,this.dotSize);
								if(o.lineDots === 'double') {
									drawPoint(ctx,this.canvasCords[0],this.canvasCords[1],this.innerColor,this.dotInnerSize);
								}
							});
						});
					}
					
				}
			};
		
		})();
		
		charts.area = {
			setup: function() {
				charts.line.setup(true);
			},
			draw: charts.line.draw
		};
		
		(function(){

			var horizontal,bottomLabels;

			charts.bar = {
				setup:function(){
					/**
					 * We can draw horizontal or vertical bars depending on the
					 * value of the 'barDirection' option (which may be 'vertical' or
					 * 'horizontal').
					 */

					horizontal = (o.barDirection == 'horizontal');

					canvasContain.addClass('visualize-bar');

					/**
					 * Write labels along the bottom of the chart.	If we're drawing
					 * horizontal bars, these will be the yLabels, otherwise they
					 * will be the xLabels.	The positioning also varies slightly:
					 * yLabels are values, hence they will span the whole width of
					 * the canvas, whereas xLabels are supposed to line up with the
					 * bars.
					 */
					bottomLabels = horizontal ? yLabels : xLabels;

					var xInterval = canvas.width() / (bottomLabels.length - (horizontal ? 1 : 0));

					var xlabelsUL = $('<ul class="visualize-labels-x"></ul>')
						.width(canvas.width())
						.height(canvas.height())
						.insertBefore(canvas);

					$.each(bottomLabels, function(i){
						var thisLi = $('<li><span class="label">'+this+'</span></li>')
							.prepend('<span class="line" />')
							.css('left', xInterval * i)
							.width(xInterval)
							.appendTo(xlabelsUL);

						if (horizontal)	{
							var label = thisLi.find('span.label');
							label.css("margin-left", -label.width() / 2);
						}
					});

					/**
					 * Write labels along the left of the chart.	Follows the same idea
					 * as the bottom labels.
					 */
					var leftLabels = horizontal ? xLabels : yLabels;
					var liBottom = canvas.height() / (leftLabels.length - (horizontal ? 0 : 1));

					var ylabelsUL = $('<ul class="visualize-labels-y"></ul>')
						.width(canvas.width())
						.height(canvas.height())
						.insertBefore(canvas);

					$.each(leftLabels, function(i){
						var thisLi = $('<li><span>'+this+'</span></li>').prependTo(ylabelsUL);

						var label = thisLi.find('span:not(.line)').addClass('label');

						if (horizontal) {
							/**
							 * For left labels, we want to vertically align the text
							 * to the middle of its container, but we don't know how
							 * many lines of text we will have, since the labels could
							 * be very long.
							 *
							 * So we set a min-height of liBottom, and a max-height
							 * of liBottom + 1, so we can then check the label's actual
							 * height to determine if it spans one line or more lines.
							 */
							label.css({
								'min-height': liBottom,
								'max-height': liBottom + 1,
								'vertical-align': 'middle'
							});
							thisLi.css({'top': liBottom * i, 'min-height': liBottom});

							var r = label[0].getClientRects()[0];
							if (r.bottom - r.top == liBottom) {
								/* This means we have only one line of text; hence
								 * we can centre the text vertically by setting the line-height,
								 * as described at:
								 *   http://www.ampsoft.net/webdesign-l/vertical-aligned-nav-list.html
								 *
								 * (Although firefox has .height on the rectangle, IE doesn't,
								 * so we use r.bottom - r.top rather than r.height.)
								 */
								label.css('line-height', parseInt(liBottom) + 'px');
							}
							else {
								/*
								 * If there is more than one line of text, then we shouldn't
								 * touch the line height, but we should make sure the text
								 * doesn't overflow the container.
								 */
								label.css("overflow", "hidden");
							}
						}
						else {
							thisLi.css('bottom', liBottom * i).prepend('<span class="line" />');
							label.css('margin-top', -label.height() / 2)
						}
					});

					charts.bar.draw();

				},

				draw: function() {
					// Draw bars

					if (horizontal) {
						// for horizontal, keep the same code, but rotate everything 90 degrees
						// clockwise.
						ctx.rotate(Math.PI / 2);
					}
					else {
						// for vertical, translate to the top left corner.
						ctx.translate(0, zeroLocY);
					}

					// Don't attempt to draw anything if all the values are zero,
					// otherwise we will get weird exceptions from the canvas methods.
					if (totalYRange <= 0)
						return;

					var yScale = (horizontal ? canvas.width() : canvas.height()) / totalYRange;
					var barWidth = horizontal ? (canvas.height() / xLabels.length) : (canvas.width() / (bottomLabels.length));
					var linewidth = (barWidth - o.barGroupMargin*2) / dataGroups.length;

					for(var h=0; h<dataGroups.length; h++){
						ctx.beginPath();

						var strokeWidth = linewidth - (o.barMargin*2);
						ctx.lineWidth = strokeWidth;
						var points = dataGroups[h].points;
						var integer = 0;
						for(var i=0; i<points.length; i++){
							// If the last value is zero, IE will go nuts and not draw anything,
							// so don't try to draw zero values at all.
							if (points[i].value != 0) {
								var xVal = (integer-o.barGroupMargin)+(h*linewidth)+linewidth/2;
								xVal += o.barGroupMargin*2;

								ctx.moveTo(xVal, 0);
								ctx.lineTo(xVal, Math.round(-points[i].value*yScale));
	                        }
							integer+=barWidth;
						}
						ctx.strokeStyle = dataGroups[h].color;
						ctx.stroke();
						ctx.closePath();
					}

				}
			};
			
		})();
	
		//create new canvas, set w&h attrs (not inline styles)
		var canvasNode = document.createElement("canvas"); 
		var canvas = $(canvasNode)
			.attr({
				'height': o.height,
				'width': o.width
			});
		
		//get title for chart
		var title = o.title || self.find('caption').text();
		
		//create canvas wrapper div, set inline w&h, append
		var canvasContain = (container || $('<div '+(o.chartId?'id="'+o.chartId+'" ':'')+'class="visualize '+o.chartClass+'" role="img" aria-label="Chart representing data from the table: '+ title +'" />'))
			.height(o.height)
			.width(o.width);
		
		var scroller = $('<div class="visualize-scroller"></div>')
			.appendTo(canvasContain)
			.append(canvas);

		//title/key container
		if(o.appendTitle || o.appendKey){
			var infoContain = $('<div class="visualize-info"></div>')
				.appendTo(canvasContain);
		}
		
		//append title
		if(o.appendTitle){
			$('<div class="visualize-title">'+ title +'</div>').appendTo(infoContain);
		}
		
		
		//append key
		if(o.appendKey){
			var newKey = $('<ul class="visualize-key"></ul>');
			$.each(yAllLabels, function(i,label){
				$('<li><span class="visualize-key-color" style="background: '+dataGroups[i].color+'"></span><span class="visualize-key-label">'+ label +'</span></li>')
					.appendTo(newKey);
			});
			newKey.appendTo(infoContain);
		};		
		
		// init interaction
		if(o.interaction) {
			// sets the canvas to track interaction
			// IE needs one div on top of the canvas since the VML shapes prevent mousemove from triggering correctly.
			// Pie charts needs tracker because labels goes on top of the canvas and also messes up with mousemove
			var tracker = $('<div class="visualize-interaction-tracker"/>')
				.css({
					'height': o.height + 'px',
					'width': o.width + 'px',
					'position':'relative',
					'z-index': 200
				})
				.insertAfter(canvas);

			var triggerInteraction = function(overOut,data) {
				var data = $.extend({
					canvasContain:canvasContain,
					tableData:tableData
				},data);
				self.trigger('vizualize'+overOut,data);
			};

			var over=false, last=false, started=false;
			tracker.mousemove(function(e){
				var x,y,x1,y1,data,dist,i,current,selector,zLabel,elem,color,minDist,found,ev=e.originalEvent;

				// get mouse position relative to the tracker/canvas
				x = ev.layerX || ev.offsetX || 0;
				y = ev.layerY || ev.offsetY || 0;

				found = false;
				minDist = started?30000:(o.type=='pie'?(Math.round(canvas.height()/2)-o.pieMargin)/3:o.lineWeight*4);
				// iterate datagroups to find points with matching
				$.each(charts[o.type].interactionPoints,function(i,current){
					x1 = current.canvasCords[0] + zeroLocX;
					y1 = current.canvasCords[1] + (o.type=="pie"?0:zeroLocY);
					dist = Math.sqrt( (x1 - x)*(x1 - x) + (y1 - y)*(y1 - y) );
					if(dist < minDist) {
						found = current;
						minDist = dist;
					}
				});
				
				if(o.multiHover && found) {
					x = found.canvasCords[0] + zeroLocX;
					y = found.canvasCords[1] + (o.type=="pie"?0:zeroLocY);
					found = [found];
					$.each(charts[o.type].interactionPoints,function(i,current){
						if(current == found[0]) {return;}
						x1 = current.canvasCords[0] + zeroLocX;
						y1 = current.canvasCords[1] + zeroLocY;
						dist = Math.sqrt( (x1 - x)*(x1 - x) + (y1 - y)*(y1 - y) );
						if(dist <= o.multiHover) {
							found.push(current);
						}
					});
				}
				// trigger over and out only when state changes, instead of on every mousemove
				over = found;
				if(over != last) {
					if(over) {
						if(last) {
							triggerInteraction('Out',{point:last});
						}
						triggerInteraction('Over',{point:over});
						last = over;
					}
					if(last && !over) {
						triggerInteraction('Out',{point:last});
						last=false;
					}
					started=true;
				}
			});
			tracker.mouseleave(function(){
				triggerInteraction('Out',{
					point:last,
					mouseOutGraph:true
				});
				over = (last = false);
			});
		}
		
		//append new canvas to page
		if(!container){canvasContain.insertAfter(this); }
		if( typeof(G_vmlCanvasManager) != 'undefined' ){ G_vmlCanvasManager.init(); G_vmlCanvasManager.initElement(canvas[0]); }	
		
		//set up the drawing board
		var ctx = canvas[0].getContext('2d');
		
		// Scroll graphs
		scroller.scrollLeft(o.width-scroller.width());

		// init plugins
		$.each($.visualizePlugins,function(i,plugin){
			plugin.call(self,o,tableData);
		});

		//create chart
		charts[o.type].setup();
		
		if(!container){
			//add event for updating
			self.bind('visualizeRefresh', function(){
				self.visualize(o, $(this).empty()); 
			});
			//add event for redraw
			self.bind('visualizeRedraw', function(){
				charts[o.type].draw();
			});
		}
	}).next(); //returns canvas(es)
};
// create array for plugins. if you wish to make a plugin,
// just push your init funcion into this array
$.visualizePlugins = [];

})(jQuery);

/**
 * --------------------------------------------------------------------
 * Tooltip plugin for the jQuery-Plugin "Visualize"
 * Tolltip by Iraê Carvalho, irae@irae.pro.br, http://irae.pro.br/en/
 * Copyright (c) 2010 Iraê Carvalho
 * Dual licensed under the MIT (filamentgroup.com/examples/mit-license.txt) and GPL (filamentgroup.com/examples/gpl-license.txt) licenses.
 * 	
 * Visualize plugin by Scott Jehl, scott@filamentgroup.com
 * Copyright (c) 2009 Filament Group, http://www.filamentgroup.com
 *
 * --------------------------------------------------------------------
 */

(function($){
	$.visualizePlugins.push(function visualizeTooltip(options,tableData) {
		//configuration
		var o = $.extend({
			tooltip: false,
			tooltipalign: 'auto', // also available 'left' and 'right'
			tooltipvalign: 'top',
			tooltipclass: 'visualize-tooltip',
			tooltiphtml: function(data){
				if(options.multiHover) {
					var html='';
					for(var i=0;i<data.point.length;i++){
						html += '<p>'+data.point[i].value+' - '+data.point[i].yLabels[0]+'</p>';
					}
					return html;					
				} else {
					return '<p>'+data.point.value+' - '+data.point.yLabels[0]+'</p>';
				}
			},
			delay:false
		},options);
		
		// don't go any further if we are not to show anything
		if(!o.tooltip) {return;}
		
		var self = $(this),
			canvasContain = self.next(),
			scroller = canvasContain.find('.visualize-scroller'),
			scrollerW = scroller.width(),
			tracker = canvasContain.find('.visualize-interaction-tracker');
		
		// IE needs background color and opacity white or the tracker stays behind the tooltip
		tracker.css({
			backgroundColor:'white',
			opacity:0,
			zIndex:100
		});
		
		var tooltip = $('<div class="'+o.tooltipclass+'"/>').css({
				position:'absolute',
				display:'none',
				zIndex:90
			})
			.insertAfter(scroller.find('canvas'));

		var usescroll = true;
		
		if( typeof(G_vmlCanvasManager) != 'undefined' ){
			scroller.css({'position':'absolute'});
			tracker.css({marginTop:'-'+(o.height)+'px'});
		}
		
		
		self.bind('vizualizeOver',function visualizeTooltipOver(e,data){
			if(data.canvasContain.get(0) != canvasContain.get(0)) {return;} // for multiple graphs originated from same table
			if(o.multiHover) {
				var p = data.point[0].canvasCords;
			} else {
				var p = data.point.canvasCords;
			}
			var left,right,top,clasRem,clasAd,bottom,x=Math.round(p[0]+data.tableData.zeroLocX),y=Math.round(p[1]+data.tableData.zeroLocY);
			if(o.tooltipalign == 'left' || ( o.tooltipalign=='auto' && x-scroller.scrollLeft()<=scrollerW/2 ) ) {
				if($.browser.msie && ($.browser.version == 7 || $.browser.version == 6) ) {usescroll=false;} else {usescroll=true;}
				left = x-(usescroll?scroller.scrollLeft():0);
				if(x-scroller.scrollLeft()<0) { // even with when not using scroll we need to calc with it for IE
					return;
				}
				left = left+'px';
				right = '';
				clasAdd="tooltipleft";
				clasRem="tooltipright";
			} else {
				if($.browser.msie && $.browser.version == 7) {usescroll=false;} else {usescroll=true;}
				right = Math.abs(x-o.width)- (o.width-(usescroll?scroller.scrollLeft():0)-scrollerW);
				if(Math.abs(x-o.width)- (o.width-scroller.scrollLeft()-scrollerW)<0) { // even with when not using scroll we need to calc with it for IE
					return;
				}
				left = '';
				right = right+'px';
				clasAdd="tooltipright";
				clasRem="tooltipleft";
			}
			
			tooltip
				.addClass(clasAdd)
				.removeClass(clasRem)
				.html(o.tooltiphtml(data))
				.css({
					display:'block',
					top: y+'px',
					left: left,
					right: right
				});
		});
		
		self.bind('vizualizeOut',function visualizeTooltipOut(e,data){
			tooltip.css({display:'none'});
		});
		
	});
})(jQuery);

/*
 * File:        jquery.dataTables.min.js
 * Version:     1.8.2
 * Author:      Allan Jardine (www.sprymedia.co.uk)
 * Info:        www.datatables.net
 * 
 * Copyright 2008-2011 Allan Jardine, all rights reserved.
 *
 * This source file is free software, under either the GPL v2 license or a
 * BSD style license, as supplied with this software.
 * 
 * This source file is distributed in the hope that it will be useful, but 
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY 
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 */
(function(i,za,p){i.fn.dataTableSettings=[];var D=i.fn.dataTableSettings;i.fn.dataTableExt={};var n=i.fn.dataTableExt;n.sVersion="1.8.2";n.sErrMode="alert";n.iApiIndex=0;n.oApi={};n.afnFiltering=[];n.aoFeatures=[];n.ofnSearch={};n.afnSortData=[];n.oStdClasses={sPagePrevEnabled:"paginate_enabled_previous",sPagePrevDisabled:"paginate_disabled_previous",sPageNextEnabled:"paginate_enabled_next",sPageNextDisabled:"paginate_disabled_next",sPageJUINext:"",sPageJUIPrev:"",sPageButton:"paginate_button",sPageButtonActive:"paginate_active",
sPageButtonStaticDisabled:"paginate_button paginate_button_disabled",sPageFirst:"first",sPagePrevious:"previous",sPageNext:"next",sPageLast:"last",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",sSortableDesc:"sorting_desc_disabled",
sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sFooterTH:""};n.oJUIClasses={sPagePrevEnabled:"fg-button ui-button ui-state-default ui-corner-left",
sPagePrevDisabled:"fg-button ui-button ui-state-default ui-corner-left ui-state-disabled",sPageNextEnabled:"fg-button ui-button ui-state-default ui-corner-right",sPageNextDisabled:"fg-button ui-button ui-state-default ui-corner-right ui-state-disabled",sPageJUINext:"ui-icon ui-icon-circle-arrow-e",sPageJUIPrev:"ui-icon ui-icon-circle-arrow-w",sPageButton:"fg-button ui-button ui-state-default",sPageButtonActive:"fg-button ui-button ui-state-default ui-state-disabled",sPageButtonStaticDisabled:"fg-button ui-button ui-state-default ui-state-disabled",
sPageFirst:"first ui-corner-tl ui-corner-bl",sPagePrevious:"previous",sPageNext:"next",sPageLast:"last ui-corner-tr ui-corner-br",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"ui-state-default",sSortDesc:"ui-state-default",sSortable:"ui-state-default",
sSortableAsc:"ui-state-default",sSortableDesc:"ui-state-default",sSortableNone:"ui-state-default",sSortColumn:"sorting_",sSortJUIAsc:"css_right ui-icon ui-icon-triangle-1-n",sSortJUIDesc:"css_right ui-icon ui-icon-triangle-1-s",sSortJUI:"css_right ui-icon ui-icon-carat-2-n-s",sSortJUIAscAllowed:"css_right ui-icon ui-icon-carat-1-n",sSortJUIDescAllowed:"css_right ui-icon ui-icon-carat-1-s",sSortJUIWrapper:"DataTables_sort_wrapper",sSortIcon:"DataTables_sort_icon",sScrollWrapper:"dataTables_scroll",
sScrollHead:"dataTables_scrollHead ui-state-default",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot ui-state-default",sScrollFootInner:"dataTables_scrollFootInner",sFooterTH:"ui-state-default"};n.oPagination={two_button:{fnInit:function(g,l,s){var t,w,y;if(g.bJUI){t=p.createElement("a");w=p.createElement("a");y=p.createElement("span");y.className=g.oClasses.sPageJUINext;w.appendChild(y);y=p.createElement("span");y.className=g.oClasses.sPageJUIPrev;
t.appendChild(y)}else{t=p.createElement("div");w=p.createElement("div")}t.className=g.oClasses.sPagePrevDisabled;w.className=g.oClasses.sPageNextDisabled;t.title=g.oLanguage.oPaginate.sPrevious;w.title=g.oLanguage.oPaginate.sNext;l.appendChild(t);l.appendChild(w);i(t).bind("click.DT",function(){g.oApi._fnPageChange(g,"previous")&&s(g)});i(w).bind("click.DT",function(){g.oApi._fnPageChange(g,"next")&&s(g)});i(t).bind("selectstart.DT",function(){return false});i(w).bind("selectstart.DT",function(){return false});
if(g.sTableId!==""&&typeof g.aanFeatures.p=="undefined"){l.setAttribute("id",g.sTableId+"_paginate");t.setAttribute("id",g.sTableId+"_previous");w.setAttribute("id",g.sTableId+"_next")}},fnUpdate:function(g){if(g.aanFeatures.p)for(var l=g.aanFeatures.p,s=0,t=l.length;s<t;s++)if(l[s].childNodes.length!==0){l[s].childNodes[0].className=g._iDisplayStart===0?g.oClasses.sPagePrevDisabled:g.oClasses.sPagePrevEnabled;l[s].childNodes[1].className=g.fnDisplayEnd()==g.fnRecordsDisplay()?g.oClasses.sPageNextDisabled:
g.oClasses.sPageNextEnabled}}},iFullNumbersShowPages:5,full_numbers:{fnInit:function(g,l,s){var t=p.createElement("span"),w=p.createElement("span"),y=p.createElement("span"),F=p.createElement("span"),x=p.createElement("span");t.innerHTML=g.oLanguage.oPaginate.sFirst;w.innerHTML=g.oLanguage.oPaginate.sPrevious;F.innerHTML=g.oLanguage.oPaginate.sNext;x.innerHTML=g.oLanguage.oPaginate.sLast;var v=g.oClasses;t.className=v.sPageButton+" "+v.sPageFirst;w.className=v.sPageButton+" "+v.sPagePrevious;F.className=
v.sPageButton+" "+v.sPageNext;x.className=v.sPageButton+" "+v.sPageLast;l.appendChild(t);l.appendChild(w);l.appendChild(y);l.appendChild(F);l.appendChild(x);i(t).bind("click.DT",function(){g.oApi._fnPageChange(g,"first")&&s(g)});i(w).bind("click.DT",function(){g.oApi._fnPageChange(g,"previous")&&s(g)});i(F).bind("click.DT",function(){g.oApi._fnPageChange(g,"next")&&s(g)});i(x).bind("click.DT",function(){g.oApi._fnPageChange(g,"last")&&s(g)});i("span",l).bind("mousedown.DT",function(){return false}).bind("selectstart.DT",
function(){return false});if(g.sTableId!==""&&typeof g.aanFeatures.p=="undefined"){l.setAttribute("id",g.sTableId+"_paginate");t.setAttribute("id",g.sTableId+"_first");w.setAttribute("id",g.sTableId+"_previous");F.setAttribute("id",g.sTableId+"_next");x.setAttribute("id",g.sTableId+"_last")}},fnUpdate:function(g,l){if(g.aanFeatures.p){var s=n.oPagination.iFullNumbersShowPages,t=Math.floor(s/2),w=Math.ceil(g.fnRecordsDisplay()/g._iDisplayLength),y=Math.ceil(g._iDisplayStart/g._iDisplayLength)+1,F=
"",x,v=g.oClasses;if(w<s){t=1;x=w}else if(y<=t){t=1;x=s}else if(y>=w-t){t=w-s+1;x=w}else{t=y-Math.ceil(s/2)+1;x=t+s-1}for(s=t;s<=x;s++)F+=y!=s?'<span class="'+v.sPageButton+'">'+s+"</span>":'<span class="'+v.sPageButtonActive+'">'+s+"</span>";x=g.aanFeatures.p;var z,$=function(M){g._iDisplayStart=(this.innerHTML*1-1)*g._iDisplayLength;l(g);M.preventDefault()},X=function(){return false};s=0;for(t=x.length;s<t;s++)if(x[s].childNodes.length!==0){z=i("span:eq(2)",x[s]);z.html(F);i("span",z).bind("click.DT",
$).bind("mousedown.DT",X).bind("selectstart.DT",X);z=x[s].getElementsByTagName("span");z=[z[0],z[1],z[z.length-2],z[z.length-1]];i(z).removeClass(v.sPageButton+" "+v.sPageButtonActive+" "+v.sPageButtonStaticDisabled);if(y==1){z[0].className+=" "+v.sPageButtonStaticDisabled;z[1].className+=" "+v.sPageButtonStaticDisabled}else{z[0].className+=" "+v.sPageButton;z[1].className+=" "+v.sPageButton}if(w===0||y==w||g._iDisplayLength==-1){z[2].className+=" "+v.sPageButtonStaticDisabled;z[3].className+=" "+
v.sPageButtonStaticDisabled}else{z[2].className+=" "+v.sPageButton;z[3].className+=" "+v.sPageButton}}}}}};n.oSort={"string-asc":function(g,l){if(typeof g!="string")g="";if(typeof l!="string")l="";g=g.toLowerCase();l=l.toLowerCase();return g<l?-1:g>l?1:0},"string-desc":function(g,l){if(typeof g!="string")g="";if(typeof l!="string")l="";g=g.toLowerCase();l=l.toLowerCase();return g<l?1:g>l?-1:0},"html-asc":function(g,l){g=g.replace(/<.*?>/g,"").toLowerCase();l=l.replace(/<.*?>/g,"").toLowerCase();return g<
l?-1:g>l?1:0},"html-desc":function(g,l){g=g.replace(/<.*?>/g,"").toLowerCase();l=l.replace(/<.*?>/g,"").toLowerCase();return g<l?1:g>l?-1:0},"date-asc":function(g,l){g=Date.parse(g);l=Date.parse(l);if(isNaN(g)||g==="")g=Date.parse("01/01/1970 00:00:00");if(isNaN(l)||l==="")l=Date.parse("01/01/1970 00:00:00");return g-l},"date-desc":function(g,l){g=Date.parse(g);l=Date.parse(l);if(isNaN(g)||g==="")g=Date.parse("01/01/1970 00:00:00");if(isNaN(l)||l==="")l=Date.parse("01/01/1970 00:00:00");return l-
g},"numeric-asc":function(g,l){return(g=="-"||g===""?0:g*1)-(l=="-"||l===""?0:l*1)},"numeric-desc":function(g,l){return(l=="-"||l===""?0:l*1)-(g=="-"||g===""?0:g*1)}};n.aTypes=[function(g){if(typeof g=="number")return"numeric";else if(typeof g!="string")return null;var l,s=false;l=g.charAt(0);if("0123456789-".indexOf(l)==-1)return null;for(var t=1;t<g.length;t++){l=g.charAt(t);if("0123456789.".indexOf(l)==-1)return null;if(l=="."){if(s)return null;s=true}}return"numeric"},function(g){var l=Date.parse(g);
if(l!==null&&!isNaN(l)||typeof g=="string"&&g.length===0)return"date";return null},function(g){if(typeof g=="string"&&g.indexOf("<")!=-1&&g.indexOf(">")!=-1)return"html";return null}];n.fnVersionCheck=function(g){var l=function(x,v){for(;x.length<v;)x+="0";return x},s=n.sVersion.split(".");g=g.split(".");for(var t="",w="",y=0,F=g.length;y<F;y++){t+=l(s[y],3);w+=l(g[y],3)}return parseInt(t,10)>=parseInt(w,10)};n._oExternConfig={iNextUnique:0};i.fn.dataTable=function(g){function l(){this.fnRecordsTotal=
function(){return this.oFeatures.bServerSide?parseInt(this._iRecordsTotal,10):this.aiDisplayMaster.length};this.fnRecordsDisplay=function(){return this.oFeatures.bServerSide?parseInt(this._iRecordsDisplay,10):this.aiDisplay.length};this.fnDisplayEnd=function(){return this.oFeatures.bServerSide?this.oFeatures.bPaginate===false||this._iDisplayLength==-1?this._iDisplayStart+this.aiDisplay.length:Math.min(this._iDisplayStart+this._iDisplayLength,this._iRecordsDisplay):this._iDisplayEnd};this.sInstance=
this.oInstance=null;this.oFeatures={bPaginate:true,bLengthChange:true,bFilter:true,bSort:true,bInfo:true,bAutoWidth:true,bProcessing:false,bSortClasses:true,bStateSave:false,bServerSide:false,bDeferRender:false};this.oScroll={sX:"",sXInner:"",sY:"",bCollapse:false,bInfinite:false,iLoadGap:100,iBarWidth:0,bAutoCss:true};this.aanFeatures=[];this.oLanguage={sProcessing:"Processing...",sLengthMenu:"Show _MENU_ entries",sZeroRecords:"No matching records found",sEmptyTable:"No data available in table",
sLoadingRecords:"Loading...",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sInfoThousands:",",sSearch:"Search:",sUrl:"",oPaginate:{sFirst:"First",sPrevious:"Previous",sNext:"Next",sLast:"Last"},fnInfoCallback:null};this.aoData=[];this.aiDisplay=[];this.aiDisplayMaster=[];this.aoColumns=[];this.aoHeader=[];this.aoFooter=[];this.iNextId=0;this.asDataSearch=[];this.oPreviousSearch={sSearch:"",
bRegex:false,bSmart:true};this.aoPreSearchCols=[];this.aaSorting=[[0,"asc",0]];this.aaSortingFixed=null;this.asStripeClasses=[];this.asDestroyStripes=[];this.sDestroyWidth=0;this.fnFooterCallback=this.fnHeaderCallback=this.fnRowCallback=null;this.aoDrawCallback=[];this.fnInitComplete=this.fnPreDrawCallback=null;this.sTableId="";this.nTableWrapper=this.nTBody=this.nTFoot=this.nTHead=this.nTable=null;this.bInitialised=this.bDeferLoading=false;this.aoOpenRows=[];this.sDom="lfrtip";this.sPaginationType=
"two_button";this.iCookieDuration=7200;this.sCookiePrefix="SpryMedia_DataTables_";this.fnCookieCallback=null;this.aoStateSave=[];this.aoStateLoad=[];this.sAjaxSource=this.oLoadedState=null;this.sAjaxDataProp="aaData";this.bAjaxDataGet=true;this.jqXHR=null;this.fnServerData=function(a,b,c,d){d.jqXHR=i.ajax({url:a,data:b,success:function(f){i(d.oInstance).trigger("xhr",d);c(f)},dataType:"json",cache:false,error:function(f,e){e=="parsererror"&&alert("DataTables warning: JSON data from server could not be parsed. This is caused by a JSON formatting error.")}})};
this.aoServerParams=[];this.fnFormatNumber=function(a){if(a<1E3)return a;else{var b=a+"";a=b.split("");var c="";b=b.length;for(var d=0;d<b;d++){if(d%3===0&&d!==0)c=this.oLanguage.sInfoThousands+c;c=a[b-d-1]+c}}return c};this.aLengthMenu=[10,25,50,100];this.bDrawing=this.iDraw=0;this.iDrawError=-1;this._iDisplayLength=10;this._iDisplayStart=0;this._iDisplayEnd=10;this._iRecordsDisplay=this._iRecordsTotal=0;this.bJUI=false;this.oClasses=n.oStdClasses;this.bSortCellsTop=this.bSorted=this.bFiltered=false;
this.oInit=null;this.aoDestroyCallback=[]}function s(a){return function(){var b=[A(this[n.iApiIndex])].concat(Array.prototype.slice.call(arguments));return n.oApi[a].apply(this,b)}}function t(a){var b,c,d=a.iInitDisplayStart;if(a.bInitialised===false)setTimeout(function(){t(a)},200);else{Aa(a);X(a);M(a,a.aoHeader);a.nTFoot&&M(a,a.aoFooter);K(a,true);a.oFeatures.bAutoWidth&&ga(a);b=0;for(c=a.aoColumns.length;b<c;b++)if(a.aoColumns[b].sWidth!==null)a.aoColumns[b].nTh.style.width=q(a.aoColumns[b].sWidth);
if(a.oFeatures.bSort)R(a);else if(a.oFeatures.bFilter)N(a,a.oPreviousSearch);else{a.aiDisplay=a.aiDisplayMaster.slice();E(a);C(a)}if(a.sAjaxSource!==null&&!a.oFeatures.bServerSide){c=[];ha(a,c);a.fnServerData.call(a.oInstance,a.sAjaxSource,c,function(f){var e=f;if(a.sAjaxDataProp!=="")e=aa(a.sAjaxDataProp)(f);for(b=0;b<e.length;b++)v(a,e[b]);a.iInitDisplayStart=d;if(a.oFeatures.bSort)R(a);else{a.aiDisplay=a.aiDisplayMaster.slice();E(a);C(a)}K(a,false);w(a,f)},a)}else if(!a.oFeatures.bServerSide){K(a,
false);w(a)}}}function w(a,b){a._bInitComplete=true;if(typeof a.fnInitComplete=="function")typeof b!="undefined"?a.fnInitComplete.call(a.oInstance,a,b):a.fnInitComplete.call(a.oInstance,a)}function y(a,b,c){a.oLanguage=i.extend(true,a.oLanguage,b);typeof b.sEmptyTable=="undefined"&&typeof b.sZeroRecords!="undefined"&&o(a.oLanguage,b,"sZeroRecords","sEmptyTable");typeof b.sLoadingRecords=="undefined"&&typeof b.sZeroRecords!="undefined"&&o(a.oLanguage,b,"sZeroRecords","sLoadingRecords");c&&t(a)}function F(a,
b){var c=a.aoColumns.length;b={sType:null,_bAutoType:true,bVisible:true,bSearchable:true,bSortable:true,asSorting:["asc","desc"],sSortingClass:a.oClasses.sSortable,sSortingClassJUI:a.oClasses.sSortJUI,sTitle:b?b.innerHTML:"",sName:"",sWidth:null,sWidthOrig:null,sClass:null,fnRender:null,bUseRendered:true,iDataSort:c,mDataProp:c,fnGetData:null,fnSetData:null,sSortDataType:"std",sDefaultContent:null,sContentPadding:"",nTh:b?b:p.createElement("th"),nTf:null};a.aoColumns.push(b);if(typeof a.aoPreSearchCols[c]==
"undefined"||a.aoPreSearchCols[c]===null)a.aoPreSearchCols[c]={sSearch:"",bRegex:false,bSmart:true};else{if(typeof a.aoPreSearchCols[c].bRegex=="undefined")a.aoPreSearchCols[c].bRegex=true;if(typeof a.aoPreSearchCols[c].bSmart=="undefined")a.aoPreSearchCols[c].bSmart=true}x(a,c,null)}function x(a,b,c){b=a.aoColumns[b];if(typeof c!="undefined"&&c!==null){if(typeof c.sType!="undefined"){b.sType=c.sType;b._bAutoType=false}o(b,c,"bVisible");o(b,c,"bSearchable");o(b,c,"bSortable");o(b,c,"sTitle");o(b,
c,"sName");o(b,c,"sWidth");o(b,c,"sWidth","sWidthOrig");o(b,c,"sClass");o(b,c,"fnRender");o(b,c,"bUseRendered");o(b,c,"iDataSort");o(b,c,"mDataProp");o(b,c,"asSorting");o(b,c,"sSortDataType");o(b,c,"sDefaultContent");o(b,c,"sContentPadding")}b.fnGetData=aa(b.mDataProp);b.fnSetData=Ba(b.mDataProp);if(!a.oFeatures.bSort)b.bSortable=false;if(!b.bSortable||i.inArray("asc",b.asSorting)==-1&&i.inArray("desc",b.asSorting)==-1){b.sSortingClass=a.oClasses.sSortableNone;b.sSortingClassJUI=""}else if(b.bSortable||
i.inArray("asc",b.asSorting)==-1&&i.inArray("desc",b.asSorting)==-1){b.sSortingClass=a.oClasses.sSortable;b.sSortingClassJUI=a.oClasses.sSortJUI}else if(i.inArray("asc",b.asSorting)!=-1&&i.inArray("desc",b.asSorting)==-1){b.sSortingClass=a.oClasses.sSortableAsc;b.sSortingClassJUI=a.oClasses.sSortJUIAscAllowed}else if(i.inArray("asc",b.asSorting)==-1&&i.inArray("desc",b.asSorting)!=-1){b.sSortingClass=a.oClasses.sSortableDesc;b.sSortingClassJUI=a.oClasses.sSortJUIDescAllowed}}function v(a,b){var c;
c=i.isArray(b)?b.slice():i.extend(true,{},b);b=a.aoData.length;var d={nTr:null,_iId:a.iNextId++,_aData:c,_anHidden:[],_sRowStripe:""};a.aoData.push(d);for(var f,e=0,h=a.aoColumns.length;e<h;e++){c=a.aoColumns[e];typeof c.fnRender=="function"&&c.bUseRendered&&c.mDataProp!==null&&O(a,b,e,c.fnRender({iDataRow:b,iDataColumn:e,aData:d._aData,oSettings:a}));if(c._bAutoType&&c.sType!="string"){f=G(a,b,e,"type");if(f!==null&&f!==""){f=ia(f);if(c.sType===null)c.sType=f;else if(c.sType!=f&&c.sType!="html")c.sType=
"string"}}}a.aiDisplayMaster.push(b);a.oFeatures.bDeferRender||z(a,b);return b}function z(a,b){var c=a.aoData[b],d;if(c.nTr===null){c.nTr=p.createElement("tr");typeof c._aData.DT_RowId!="undefined"&&c.nTr.setAttribute("id",c._aData.DT_RowId);typeof c._aData.DT_RowClass!="undefined"&&i(c.nTr).addClass(c._aData.DT_RowClass);for(var f=0,e=a.aoColumns.length;f<e;f++){var h=a.aoColumns[f];d=p.createElement("td");d.innerHTML=typeof h.fnRender=="function"&&(!h.bUseRendered||h.mDataProp===null)?h.fnRender({iDataRow:b,
iDataColumn:f,aData:c._aData,oSettings:a}):G(a,b,f,"display");if(h.sClass!==null)d.className=h.sClass;if(h.bVisible){c.nTr.appendChild(d);c._anHidden[f]=null}else c._anHidden[f]=d}}}function $(a){var b,c,d,f,e,h,j,k,m;if(a.bDeferLoading||a.sAjaxSource===null){j=a.nTBody.childNodes;b=0;for(c=j.length;b<c;b++)if(j[b].nodeName.toUpperCase()=="TR"){k=a.aoData.length;a.aoData.push({nTr:j[b],_iId:a.iNextId++,_aData:[],_anHidden:[],_sRowStripe:""});a.aiDisplayMaster.push(k);h=j[b].childNodes;d=e=0;for(f=
h.length;d<f;d++){m=h[d].nodeName.toUpperCase();if(m=="TD"||m=="TH"){O(a,k,e,i.trim(h[d].innerHTML));e++}}}}j=ba(a);h=[];b=0;for(c=j.length;b<c;b++){d=0;for(f=j[b].childNodes.length;d<f;d++){e=j[b].childNodes[d];m=e.nodeName.toUpperCase();if(m=="TD"||m=="TH")h.push(e)}}h.length!=j.length*a.aoColumns.length&&J(a,1,"Unexpected number of TD elements. Expected "+j.length*a.aoColumns.length+" and got "+h.length+". DataTables does not support rowspan / colspan in the table body, and there must be one cell for each row/column combination.");
d=0;for(f=a.aoColumns.length;d<f;d++){if(a.aoColumns[d].sTitle===null)a.aoColumns[d].sTitle=a.aoColumns[d].nTh.innerHTML;j=a.aoColumns[d]._bAutoType;m=typeof a.aoColumns[d].fnRender=="function";e=a.aoColumns[d].sClass!==null;k=a.aoColumns[d].bVisible;var u,r;if(j||m||e||!k){b=0;for(c=a.aoData.length;b<c;b++){u=h[b*f+d];if(j&&a.aoColumns[d].sType!="string"){r=G(a,b,d,"type");if(r!==""){r=ia(r);if(a.aoColumns[d].sType===null)a.aoColumns[d].sType=r;else if(a.aoColumns[d].sType!=r&&a.aoColumns[d].sType!=
"html")a.aoColumns[d].sType="string"}}if(m){r=a.aoColumns[d].fnRender({iDataRow:b,iDataColumn:d,aData:a.aoData[b]._aData,oSettings:a});u.innerHTML=r;a.aoColumns[d].bUseRendered&&O(a,b,d,r)}if(e)u.className+=" "+a.aoColumns[d].sClass;if(k)a.aoData[b]._anHidden[d]=null;else{a.aoData[b]._anHidden[d]=u;u.parentNode.removeChild(u)}}}}}function X(a){var b,c,d;a.nTHead.getElementsByTagName("tr");if(a.nTHead.getElementsByTagName("th").length!==0){b=0;for(d=a.aoColumns.length;b<d;b++){c=a.aoColumns[b].nTh;
a.aoColumns[b].sClass!==null&&i(c).addClass(a.aoColumns[b].sClass);if(a.aoColumns[b].sTitle!=c.innerHTML)c.innerHTML=a.aoColumns[b].sTitle}}else{var f=p.createElement("tr");b=0;for(d=a.aoColumns.length;b<d;b++){c=a.aoColumns[b].nTh;c.innerHTML=a.aoColumns[b].sTitle;a.aoColumns[b].sClass!==null&&i(c).addClass(a.aoColumns[b].sClass);f.appendChild(c)}i(a.nTHead).html("")[0].appendChild(f);Y(a.aoHeader,a.nTHead)}if(a.bJUI){b=0;for(d=a.aoColumns.length;b<d;b++){c=a.aoColumns[b].nTh;f=p.createElement("div");
f.className=a.oClasses.sSortJUIWrapper;i(c).contents().appendTo(f);var e=p.createElement("span");e.className=a.oClasses.sSortIcon;f.appendChild(e);c.appendChild(f)}}d=function(){this.onselectstart=function(){return false};return false};if(a.oFeatures.bSort)for(b=0;b<a.aoColumns.length;b++)if(a.aoColumns[b].bSortable!==false){ja(a,a.aoColumns[b].nTh,b);i(a.aoColumns[b].nTh).bind("mousedown.DT",d)}else i(a.aoColumns[b].nTh).addClass(a.oClasses.sSortableNone);a.oClasses.sFooterTH!==""&&i(a.nTFoot).children("tr").children("th").addClass(a.oClasses.sFooterTH);
if(a.nTFoot!==null){c=S(a,null,a.aoFooter);b=0;for(d=a.aoColumns.length;b<d;b++)if(typeof c[b]!="undefined")a.aoColumns[b].nTf=c[b]}}function M(a,b,c){var d,f,e,h=[],j=[],k=a.aoColumns.length;if(typeof c=="undefined")c=false;d=0;for(f=b.length;d<f;d++){h[d]=b[d].slice();h[d].nTr=b[d].nTr;for(e=k-1;e>=0;e--)!a.aoColumns[e].bVisible&&!c&&h[d].splice(e,1);j.push([])}d=0;for(f=h.length;d<f;d++){if(h[d].nTr){a=0;for(e=h[d].nTr.childNodes.length;a<e;a++)h[d].nTr.removeChild(h[d].nTr.childNodes[0])}e=0;
for(b=h[d].length;e<b;e++){k=c=1;if(typeof j[d][e]=="undefined"){h[d].nTr.appendChild(h[d][e].cell);for(j[d][e]=1;typeof h[d+c]!="undefined"&&h[d][e].cell==h[d+c][e].cell;){j[d+c][e]=1;c++}for(;typeof h[d][e+k]!="undefined"&&h[d][e].cell==h[d][e+k].cell;){for(a=0;a<c;a++)j[d+a][e+k]=1;k++}h[d][e].cell.rowSpan=c;h[d][e].cell.colSpan=k}}}}function C(a){var b,c,d=[],f=0,e=false;b=a.asStripeClasses.length;c=a.aoOpenRows.length;if(!(a.fnPreDrawCallback!==null&&a.fnPreDrawCallback.call(a.oInstance,a)===
false)){a.bDrawing=true;if(typeof a.iInitDisplayStart!="undefined"&&a.iInitDisplayStart!=-1){a._iDisplayStart=a.oFeatures.bServerSide?a.iInitDisplayStart:a.iInitDisplayStart>=a.fnRecordsDisplay()?0:a.iInitDisplayStart;a.iInitDisplayStart=-1;E(a)}if(a.bDeferLoading){a.bDeferLoading=false;a.iDraw++}else if(a.oFeatures.bServerSide){if(!a.bDestroying&&!Ca(a))return}else a.iDraw++;if(a.aiDisplay.length!==0){var h=a._iDisplayStart,j=a._iDisplayEnd;if(a.oFeatures.bServerSide){h=0;j=a.aoData.length}for(h=
h;h<j;h++){var k=a.aoData[a.aiDisplay[h]];k.nTr===null&&z(a,a.aiDisplay[h]);var m=k.nTr;if(b!==0){var u=a.asStripeClasses[f%b];if(k._sRowStripe!=u){i(m).removeClass(k._sRowStripe).addClass(u);k._sRowStripe=u}}if(typeof a.fnRowCallback=="function"){m=a.fnRowCallback.call(a.oInstance,m,a.aoData[a.aiDisplay[h]]._aData,f,h);if(!m&&!e){J(a,0,"A node was not returned by fnRowCallback");e=true}}d.push(m);f++;if(c!==0)for(k=0;k<c;k++)m==a.aoOpenRows[k].nParent&&d.push(a.aoOpenRows[k].nTr)}}else{d[0]=p.createElement("tr");
if(typeof a.asStripeClasses[0]!="undefined")d[0].className=a.asStripeClasses[0];e=a.oLanguage.sZeroRecords.replace("_MAX_",a.fnFormatNumber(a.fnRecordsTotal()));if(a.iDraw==1&&a.sAjaxSource!==null&&!a.oFeatures.bServerSide)e=a.oLanguage.sLoadingRecords;else if(typeof a.oLanguage.sEmptyTable!="undefined"&&a.fnRecordsTotal()===0)e=a.oLanguage.sEmptyTable;b=p.createElement("td");b.setAttribute("valign","top");b.colSpan=Z(a);b.className=a.oClasses.sRowEmpty;b.innerHTML=e;d[f].appendChild(b)}typeof a.fnHeaderCallback==
"function"&&a.fnHeaderCallback.call(a.oInstance,i(a.nTHead).children("tr")[0],ca(a),a._iDisplayStart,a.fnDisplayEnd(),a.aiDisplay);typeof a.fnFooterCallback=="function"&&a.fnFooterCallback.call(a.oInstance,i(a.nTFoot).children("tr")[0],ca(a),a._iDisplayStart,a.fnDisplayEnd(),a.aiDisplay);f=p.createDocumentFragment();b=p.createDocumentFragment();if(a.nTBody){e=a.nTBody.parentNode;b.appendChild(a.nTBody);if(!a.oScroll.bInfinite||!a._bInitComplete||a.bSorted||a.bFiltered){c=a.nTBody.childNodes;for(b=
c.length-1;b>=0;b--)c[b].parentNode.removeChild(c[b])}b=0;for(c=d.length;b<c;b++)f.appendChild(d[b]);a.nTBody.appendChild(f);e!==null&&e.appendChild(a.nTBody)}for(b=a.aoDrawCallback.length-1;b>=0;b--)a.aoDrawCallback[b].fn.call(a.oInstance,a);i(a.oInstance).trigger("draw",a);a.bSorted=false;a.bFiltered=false;a.bDrawing=false;if(a.oFeatures.bServerSide){K(a,false);typeof a._bInitComplete=="undefined"&&w(a)}}}function da(a){if(a.oFeatures.bSort)R(a,a.oPreviousSearch);else if(a.oFeatures.bFilter)N(a,
a.oPreviousSearch);else{E(a);C(a)}}function Ca(a){if(a.bAjaxDataGet){a.iDraw++;K(a,true);var b=Da(a);ha(a,b);a.fnServerData.call(a.oInstance,a.sAjaxSource,b,function(c){Ea(a,c)},a);return false}else return true}function Da(a){var b=a.aoColumns.length,c=[],d,f;c.push({name:"sEcho",value:a.iDraw});c.push({name:"iColumns",value:b});c.push({name:"sColumns",value:ka(a)});c.push({name:"iDisplayStart",value:a._iDisplayStart});c.push({name:"iDisplayLength",value:a.oFeatures.bPaginate!==false?a._iDisplayLength:
-1});for(f=0;f<b;f++){d=a.aoColumns[f].mDataProp;c.push({name:"mDataProp_"+f,value:typeof d=="function"?"function":d})}if(a.oFeatures.bFilter!==false){c.push({name:"sSearch",value:a.oPreviousSearch.sSearch});c.push({name:"bRegex",value:a.oPreviousSearch.bRegex});for(f=0;f<b;f++){c.push({name:"sSearch_"+f,value:a.aoPreSearchCols[f].sSearch});c.push({name:"bRegex_"+f,value:a.aoPreSearchCols[f].bRegex});c.push({name:"bSearchable_"+f,value:a.aoColumns[f].bSearchable})}}if(a.oFeatures.bSort!==false){d=
a.aaSortingFixed!==null?a.aaSortingFixed.length:0;var e=a.aaSorting.length;c.push({name:"iSortingCols",value:d+e});for(f=0;f<d;f++){c.push({name:"iSortCol_"+f,value:a.aaSortingFixed[f][0]});c.push({name:"sSortDir_"+f,value:a.aaSortingFixed[f][1]})}for(f=0;f<e;f++){c.push({name:"iSortCol_"+(f+d),value:a.aaSorting[f][0]});c.push({name:"sSortDir_"+(f+d),value:a.aaSorting[f][1]})}for(f=0;f<b;f++)c.push({name:"bSortable_"+f,value:a.aoColumns[f].bSortable})}return c}function ha(a,b){for(var c=0,d=a.aoServerParams.length;c<
d;c++)a.aoServerParams[c].fn.call(a.oInstance,b)}function Ea(a,b){if(typeof b.sEcho!="undefined")if(b.sEcho*1<a.iDraw)return;else a.iDraw=b.sEcho*1;if(!a.oScroll.bInfinite||a.oScroll.bInfinite&&(a.bSorted||a.bFiltered))la(a);a._iRecordsTotal=b.iTotalRecords;a._iRecordsDisplay=b.iTotalDisplayRecords;var c=ka(a);if(c=typeof b.sColumns!="undefined"&&c!==""&&b.sColumns!=c)var d=Fa(a,b.sColumns);b=aa(a.sAjaxDataProp)(b);for(var f=0,e=b.length;f<e;f++)if(c){for(var h=[],j=0,k=a.aoColumns.length;j<k;j++)h.push(b[f][d[j]]);
v(a,h)}else v(a,b[f]);a.aiDisplay=a.aiDisplayMaster.slice();a.bAjaxDataGet=false;C(a);a.bAjaxDataGet=true;K(a,false)}function Aa(a){var b=p.createElement("div");a.nTable.parentNode.insertBefore(b,a.nTable);a.nTableWrapper=p.createElement("div");a.nTableWrapper.className=a.oClasses.sWrapper;a.sTableId!==""&&a.nTableWrapper.setAttribute("id",a.sTableId+"_wrapper");a.nTableReinsertBefore=a.nTable.nextSibling;for(var c=a.nTableWrapper,d=a.sDom.split(""),f,e,h,j,k,m,u,r=0;r<d.length;r++){e=0;h=d[r];if(h==
"<"){j=p.createElement("div");k=d[r+1];if(k=="'"||k=='"'){m="";for(u=2;d[r+u]!=k;){m+=d[r+u];u++}if(m=="H")m="fg-toolbar ui-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix";else if(m=="F")m="fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix";if(m.indexOf(".")!=-1){k=m.split(".");j.setAttribute("id",k[0].substr(1,k[0].length-1));j.className=k[1]}else if(m.charAt(0)=="#")j.setAttribute("id",m.substr(1,m.length-1));else j.className=m;r+=u}c.appendChild(j);
c=j}else if(h==">")c=c.parentNode;else if(h=="l"&&a.oFeatures.bPaginate&&a.oFeatures.bLengthChange){f=Ga(a);e=1}else if(h=="f"&&a.oFeatures.bFilter){f=Ha(a);e=1}else if(h=="r"&&a.oFeatures.bProcessing){f=Ia(a);e=1}else if(h=="t"){f=Ja(a);e=1}else if(h=="i"&&a.oFeatures.bInfo){f=Ka(a);e=1}else if(h=="p"&&a.oFeatures.bPaginate){f=La(a);e=1}else if(n.aoFeatures.length!==0){j=n.aoFeatures;u=0;for(k=j.length;u<k;u++)if(h==j[u].cFeature){if(f=j[u].fnInit(a))e=1;break}}if(e==1&&f!==null){if(typeof a.aanFeatures[h]!=
"object")a.aanFeatures[h]=[];a.aanFeatures[h].push(f);c.appendChild(f)}}b.parentNode.replaceChild(a.nTableWrapper,b)}function Ja(a){if(a.oScroll.sX===""&&a.oScroll.sY==="")return a.nTable;var b=p.createElement("div"),c=p.createElement("div"),d=p.createElement("div"),f=p.createElement("div"),e=p.createElement("div"),h=p.createElement("div"),j=a.nTable.cloneNode(false),k=a.nTable.cloneNode(false),m=a.nTable.getElementsByTagName("thead")[0],u=a.nTable.getElementsByTagName("tfoot").length===0?null:a.nTable.getElementsByTagName("tfoot")[0],
r=typeof g.bJQueryUI!="undefined"&&g.bJQueryUI?n.oJUIClasses:n.oStdClasses;c.appendChild(d);e.appendChild(h);f.appendChild(a.nTable);b.appendChild(c);b.appendChild(f);d.appendChild(j);j.appendChild(m);if(u!==null){b.appendChild(e);h.appendChild(k);k.appendChild(u)}b.className=r.sScrollWrapper;c.className=r.sScrollHead;d.className=r.sScrollHeadInner;f.className=r.sScrollBody;e.className=r.sScrollFoot;h.className=r.sScrollFootInner;if(a.oScroll.bAutoCss){c.style.overflow="hidden";c.style.position="relative";
e.style.overflow="hidden";f.style.overflow="auto"}c.style.border="0";c.style.width="100%";e.style.border="0";d.style.width="150%";j.removeAttribute("id");j.style.marginLeft="0";a.nTable.style.marginLeft="0";if(u!==null){k.removeAttribute("id");k.style.marginLeft="0"}d=i(a.nTable).children("caption");h=0;for(k=d.length;h<k;h++)j.appendChild(d[h]);if(a.oScroll.sX!==""){c.style.width=q(a.oScroll.sX);f.style.width=q(a.oScroll.sX);if(u!==null)e.style.width=q(a.oScroll.sX);i(f).scroll(function(){c.scrollLeft=
this.scrollLeft;if(u!==null)e.scrollLeft=this.scrollLeft})}if(a.oScroll.sY!=="")f.style.height=q(a.oScroll.sY);a.aoDrawCallback.push({fn:Ma,sName:"scrolling"});a.oScroll.bInfinite&&i(f).scroll(function(){if(!a.bDrawing)if(i(this).scrollTop()+i(this).height()>i(a.nTable).height()-a.oScroll.iLoadGap)if(a.fnDisplayEnd()<a.fnRecordsDisplay()){ma(a,"next");E(a);C(a)}});a.nScrollHead=c;a.nScrollFoot=e;return b}function Ma(a){var b=a.nScrollHead.getElementsByTagName("div")[0],c=b.getElementsByTagName("table")[0],
d=a.nTable.parentNode,f,e,h,j,k,m,u,r,H=[],L=a.nTFoot!==null?a.nScrollFoot.getElementsByTagName("div")[0]:null,T=a.nTFoot!==null?L.getElementsByTagName("table")[0]:null,B=i.browser.msie&&i.browser.version<=7;h=a.nTable.getElementsByTagName("thead");h.length>0&&a.nTable.removeChild(h[0]);if(a.nTFoot!==null){k=a.nTable.getElementsByTagName("tfoot");k.length>0&&a.nTable.removeChild(k[0])}h=a.nTHead.cloneNode(true);a.nTable.insertBefore(h,a.nTable.childNodes[0]);if(a.nTFoot!==null){k=a.nTFoot.cloneNode(true);
a.nTable.insertBefore(k,a.nTable.childNodes[1])}if(a.oScroll.sX===""){d.style.width="100%";b.parentNode.style.width="100%"}var U=S(a,h);f=0;for(e=U.length;f<e;f++){u=Na(a,f);U[f].style.width=a.aoColumns[u].sWidth}a.nTFoot!==null&&P(function(I){I.style.width=""},k.getElementsByTagName("tr"));f=i(a.nTable).outerWidth();if(a.oScroll.sX===""){a.nTable.style.width="100%";if(B&&(d.scrollHeight>d.offsetHeight||i(d).css("overflow-y")=="scroll"))a.nTable.style.width=q(i(a.nTable).outerWidth()-a.oScroll.iBarWidth)}else if(a.oScroll.sXInner!==
"")a.nTable.style.width=q(a.oScroll.sXInner);else if(f==i(d).width()&&i(d).height()<i(a.nTable).height()){a.nTable.style.width=q(f-a.oScroll.iBarWidth);if(i(a.nTable).outerWidth()>f-a.oScroll.iBarWidth)a.nTable.style.width=q(f)}else a.nTable.style.width=q(f);f=i(a.nTable).outerWidth();e=a.nTHead.getElementsByTagName("tr");h=h.getElementsByTagName("tr");P(function(I,na){m=I.style;m.paddingTop="0";m.paddingBottom="0";m.borderTopWidth="0";m.borderBottomWidth="0";m.height=0;r=i(I).width();na.style.width=
q(r);H.push(r)},h,e);i(h).height(0);if(a.nTFoot!==null){j=k.getElementsByTagName("tr");k=a.nTFoot.getElementsByTagName("tr");P(function(I,na){m=I.style;m.paddingTop="0";m.paddingBottom="0";m.borderTopWidth="0";m.borderBottomWidth="0";m.height=0;r=i(I).width();na.style.width=q(r);H.push(r)},j,k);i(j).height(0)}P(function(I){I.innerHTML="";I.style.width=q(H.shift())},h);a.nTFoot!==null&&P(function(I){I.innerHTML="";I.style.width=q(H.shift())},j);if(i(a.nTable).outerWidth()<f){j=d.scrollHeight>d.offsetHeight||
i(d).css("overflow-y")=="scroll"?f+a.oScroll.iBarWidth:f;if(B&&(d.scrollHeight>d.offsetHeight||i(d).css("overflow-y")=="scroll"))a.nTable.style.width=q(j-a.oScroll.iBarWidth);d.style.width=q(j);b.parentNode.style.width=q(j);if(a.nTFoot!==null)L.parentNode.style.width=q(j);if(a.oScroll.sX==="")J(a,1,"The table cannot fit into the current element which will cause column misalignment. The table has been drawn at its minimum possible width.");else a.oScroll.sXInner!==""&&J(a,1,"The table cannot fit into the current element which will cause column misalignment. Increase the sScrollXInner value or remove it to allow automatic calculation")}else{d.style.width=
q("100%");b.parentNode.style.width=q("100%");if(a.nTFoot!==null)L.parentNode.style.width=q("100%")}if(a.oScroll.sY==="")if(B)d.style.height=q(a.nTable.offsetHeight+a.oScroll.iBarWidth);if(a.oScroll.sY!==""&&a.oScroll.bCollapse){d.style.height=q(a.oScroll.sY);B=a.oScroll.sX!==""&&a.nTable.offsetWidth>d.offsetWidth?a.oScroll.iBarWidth:0;if(a.nTable.offsetHeight<d.offsetHeight)d.style.height=q(i(a.nTable).height()+B)}B=i(a.nTable).outerWidth();c.style.width=q(B);b.style.width=q(B+a.oScroll.iBarWidth);
if(a.nTFoot!==null){L.style.width=q(a.nTable.offsetWidth+a.oScroll.iBarWidth);T.style.width=q(a.nTable.offsetWidth)}if(a.bSorted||a.bFiltered)d.scrollTop=0}function ea(a){if(a.oFeatures.bAutoWidth===false)return false;ga(a);for(var b=0,c=a.aoColumns.length;b<c;b++)a.aoColumns[b].nTh.style.width=a.aoColumns[b].sWidth}function Ha(a){var b=a.oLanguage.sSearch;b=b.indexOf("_INPUT_")!==-1?b.replace("_INPUT_",'<input type="text" />'):b===""?'<input type="text" />':b+' <input type="text" />';var c=p.createElement("div");
c.className=a.oClasses.sFilter;c.innerHTML="<label>"+b+"</label>";a.sTableId!==""&&typeof a.aanFeatures.f=="undefined"&&c.setAttribute("id",a.sTableId+"_filter");b=i("input",c);b.val(a.oPreviousSearch.sSearch.replace('"',"&quot;"));b.bind("keyup.DT",function(){for(var d=a.aanFeatures.f,f=0,e=d.length;f<e;f++)d[f]!=i(this).parents("div.dataTables_filter")[0]&&i("input",d[f]).val(this.value);this.value!=a.oPreviousSearch.sSearch&&N(a,{sSearch:this.value,bRegex:a.oPreviousSearch.bRegex,bSmart:a.oPreviousSearch.bSmart})});
b.bind("keypress.DT",function(d){if(d.keyCode==13)return false});return c}function N(a,b,c){Oa(a,b.sSearch,c,b.bRegex,b.bSmart);for(b=0;b<a.aoPreSearchCols.length;b++)Pa(a,a.aoPreSearchCols[b].sSearch,b,a.aoPreSearchCols[b].bRegex,a.aoPreSearchCols[b].bSmart);n.afnFiltering.length!==0&&Qa(a);a.bFiltered=true;i(a.oInstance).trigger("filter",a);a._iDisplayStart=0;E(a);C(a);oa(a,0)}function Qa(a){for(var b=n.afnFiltering,c=0,d=b.length;c<d;c++)for(var f=0,e=0,h=a.aiDisplay.length;e<h;e++){var j=a.aiDisplay[e-
f];if(!b[c](a,fa(a,j,"filter"),j)){a.aiDisplay.splice(e-f,1);f++}}}function Pa(a,b,c,d,f){if(b!==""){var e=0;b=pa(b,d,f);for(d=a.aiDisplay.length-1;d>=0;d--){f=qa(G(a,a.aiDisplay[d],c,"filter"),a.aoColumns[c].sType);if(!b.test(f)){a.aiDisplay.splice(d,1);e++}}}}function Oa(a,b,c,d,f){var e=pa(b,d,f);if(typeof c=="undefined"||c===null)c=0;if(n.afnFiltering.length!==0)c=1;if(b.length<=0){a.aiDisplay.splice(0,a.aiDisplay.length);a.aiDisplay=a.aiDisplayMaster.slice()}else if(a.aiDisplay.length==a.aiDisplayMaster.length||
a.oPreviousSearch.sSearch.length>b.length||c==1||b.indexOf(a.oPreviousSearch.sSearch)!==0){a.aiDisplay.splice(0,a.aiDisplay.length);oa(a,1);for(c=0;c<a.aiDisplayMaster.length;c++)e.test(a.asDataSearch[c])&&a.aiDisplay.push(a.aiDisplayMaster[c])}else{var h=0;for(c=0;c<a.asDataSearch.length;c++)if(!e.test(a.asDataSearch[c])){a.aiDisplay.splice(c-h,1);h++}}a.oPreviousSearch.sSearch=b;a.oPreviousSearch.bRegex=d;a.oPreviousSearch.bSmart=f}function oa(a,b){if(!a.oFeatures.bServerSide){a.asDataSearch.splice(0,
a.asDataSearch.length);b=typeof b!="undefined"&&b==1?a.aiDisplayMaster:a.aiDisplay;for(var c=0,d=b.length;c<d;c++)a.asDataSearch[c]=ra(a,fa(a,b[c],"filter"))}}function ra(a,b){var c="";if(typeof a.__nTmpFilter=="undefined")a.__nTmpFilter=p.createElement("div");for(var d=a.__nTmpFilter,f=0,e=a.aoColumns.length;f<e;f++)if(a.aoColumns[f].bSearchable)c+=qa(b[f],a.aoColumns[f].sType)+"  ";if(c.indexOf("&")!==-1){d.innerHTML=c;c=d.textContent?d.textContent:d.innerText;c=c.replace(/\n/g," ").replace(/\r/g,
"")}return c}function pa(a,b,c){if(c){a=b?a.split(" "):sa(a).split(" ");a="^(?=.*?"+a.join(")(?=.*?")+").*$";return new RegExp(a,"i")}else{a=b?a:sa(a);return new RegExp(a,"i")}}function qa(a,b){if(typeof n.ofnSearch[b]=="function")return n.ofnSearch[b](a);else if(b=="html")return a.replace(/\n/g," ").replace(/<.*?>/g,"");else if(typeof a=="string")return a.replace(/\n/g," ");else if(a===null)return"";return a}function R(a,b){var c,d,f,e,h=[],j=[],k=n.oSort;d=a.aoData;var m=a.aoColumns;if(!a.oFeatures.bServerSide&&
(a.aaSorting.length!==0||a.aaSortingFixed!==null)){h=a.aaSortingFixed!==null?a.aaSortingFixed.concat(a.aaSorting):a.aaSorting.slice();for(c=0;c<h.length;c++){var u=h[c][0];f=ta(a,u);e=a.aoColumns[u].sSortDataType;if(typeof n.afnSortData[e]!="undefined"){var r=n.afnSortData[e](a,u,f);f=0;for(e=d.length;f<e;f++)O(a,f,u,r[f])}}c=0;for(d=a.aiDisplayMaster.length;c<d;c++)j[a.aiDisplayMaster[c]]=c;var H=h.length;a.aiDisplayMaster.sort(function(L,T){var B,U;for(c=0;c<H;c++){B=m[h[c][0]].iDataSort;U=m[B].sType;
B=k[(U?U:"string")+"-"+h[c][1]](G(a,L,B,"sort"),G(a,T,B,"sort"));if(B!==0)return B}return k["numeric-asc"](j[L],j[T])})}if((typeof b=="undefined"||b)&&!a.oFeatures.bDeferRender)V(a);a.bSorted=true;i(a.oInstance).trigger("sort",a);if(a.oFeatures.bFilter)N(a,a.oPreviousSearch,1);else{a.aiDisplay=a.aiDisplayMaster.slice();a._iDisplayStart=0;E(a);C(a)}}function ja(a,b,c,d){i(b).bind("click.DT",function(f){if(a.aoColumns[c].bSortable!==false){var e=function(){var h,j;if(f.shiftKey){for(var k=false,m=0;m<
a.aaSorting.length;m++)if(a.aaSorting[m][0]==c){k=true;h=a.aaSorting[m][0];j=a.aaSorting[m][2]+1;if(typeof a.aoColumns[h].asSorting[j]=="undefined")a.aaSorting.splice(m,1);else{a.aaSorting[m][1]=a.aoColumns[h].asSorting[j];a.aaSorting[m][2]=j}break}k===false&&a.aaSorting.push([c,a.aoColumns[c].asSorting[0],0])}else if(a.aaSorting.length==1&&a.aaSorting[0][0]==c){h=a.aaSorting[0][0];j=a.aaSorting[0][2]+1;if(typeof a.aoColumns[h].asSorting[j]=="undefined")j=0;a.aaSorting[0][1]=a.aoColumns[h].asSorting[j];
a.aaSorting[0][2]=j}else{a.aaSorting.splice(0,a.aaSorting.length);a.aaSorting.push([c,a.aoColumns[c].asSorting[0],0])}R(a)};if(a.oFeatures.bProcessing){K(a,true);setTimeout(function(){e();a.oFeatures.bServerSide||K(a,false)},0)}else e();typeof d=="function"&&d(a)}})}function V(a){var b,c,d,f,e,h=a.aoColumns.length,j=a.oClasses;for(b=0;b<h;b++)a.aoColumns[b].bSortable&&i(a.aoColumns[b].nTh).removeClass(j.sSortAsc+" "+j.sSortDesc+" "+a.aoColumns[b].sSortingClass);f=a.aaSortingFixed!==null?a.aaSortingFixed.concat(a.aaSorting):
a.aaSorting.slice();for(b=0;b<a.aoColumns.length;b++)if(a.aoColumns[b].bSortable){e=a.aoColumns[b].sSortingClass;d=-1;for(c=0;c<f.length;c++)if(f[c][0]==b){e=f[c][1]=="asc"?j.sSortAsc:j.sSortDesc;d=c;break}i(a.aoColumns[b].nTh).addClass(e);if(a.bJUI){c=i("span",a.aoColumns[b].nTh);c.removeClass(j.sSortJUIAsc+" "+j.sSortJUIDesc+" "+j.sSortJUI+" "+j.sSortJUIAscAllowed+" "+j.sSortJUIDescAllowed);c.addClass(d==-1?a.aoColumns[b].sSortingClassJUI:f[d][1]=="asc"?j.sSortJUIAsc:j.sSortJUIDesc)}}else i(a.aoColumns[b].nTh).addClass(a.aoColumns[b].sSortingClass);
e=j.sSortColumn;if(a.oFeatures.bSort&&a.oFeatures.bSortClasses){d=Q(a);if(a.oFeatures.bDeferRender)i(d).removeClass(e+"1 "+e+"2 "+e+"3");else if(d.length>=h)for(b=0;b<h;b++)if(d[b].className.indexOf(e+"1")!=-1){c=0;for(a=d.length/h;c<a;c++)d[h*c+b].className=i.trim(d[h*c+b].className.replace(e+"1",""))}else if(d[b].className.indexOf(e+"2")!=-1){c=0;for(a=d.length/h;c<a;c++)d[h*c+b].className=i.trim(d[h*c+b].className.replace(e+"2",""))}else if(d[b].className.indexOf(e+"3")!=-1){c=0;for(a=d.length/
h;c<a;c++)d[h*c+b].className=i.trim(d[h*c+b].className.replace(" "+e+"3",""))}j=1;var k;for(b=0;b<f.length;b++){k=parseInt(f[b][0],10);c=0;for(a=d.length/h;c<a;c++)d[h*c+k].className+=" "+e+j;j<3&&j++}}}function La(a){if(a.oScroll.bInfinite)return null;var b=p.createElement("div");b.className=a.oClasses.sPaging+a.sPaginationType;n.oPagination[a.sPaginationType].fnInit(a,b,function(c){E(c);C(c)});typeof a.aanFeatures.p=="undefined"&&a.aoDrawCallback.push({fn:function(c){n.oPagination[c.sPaginationType].fnUpdate(c,
function(d){E(d);C(d)})},sName:"pagination"});return b}function ma(a,b){var c=a._iDisplayStart;if(b=="first")a._iDisplayStart=0;else if(b=="previous"){a._iDisplayStart=a._iDisplayLength>=0?a._iDisplayStart-a._iDisplayLength:0;if(a._iDisplayStart<0)a._iDisplayStart=0}else if(b=="next")if(a._iDisplayLength>=0){if(a._iDisplayStart+a._iDisplayLength<a.fnRecordsDisplay())a._iDisplayStart+=a._iDisplayLength}else a._iDisplayStart=0;else if(b=="last")if(a._iDisplayLength>=0){b=parseInt((a.fnRecordsDisplay()-
1)/a._iDisplayLength,10)+1;a._iDisplayStart=(b-1)*a._iDisplayLength}else a._iDisplayStart=0;else J(a,0,"Unknown paging action: "+b);i(a.oInstance).trigger("page",a);return c!=a._iDisplayStart}function Ka(a){var b=p.createElement("div");b.className=a.oClasses.sInfo;if(typeof a.aanFeatures.i=="undefined"){a.aoDrawCallback.push({fn:Ra,sName:"information"});a.sTableId!==""&&b.setAttribute("id",a.sTableId+"_info")}return b}function Ra(a){if(!(!a.oFeatures.bInfo||a.aanFeatures.i.length===0)){var b=a._iDisplayStart+
1,c=a.fnDisplayEnd(),d=a.fnRecordsTotal(),f=a.fnRecordsDisplay(),e=a.fnFormatNumber(b),h=a.fnFormatNumber(c),j=a.fnFormatNumber(d),k=a.fnFormatNumber(f);if(a.oScroll.bInfinite)e=a.fnFormatNumber(1);e=a.fnRecordsDisplay()===0&&a.fnRecordsDisplay()==a.fnRecordsTotal()?a.oLanguage.sInfoEmpty+a.oLanguage.sInfoPostFix:a.fnRecordsDisplay()===0?a.oLanguage.sInfoEmpty+" "+a.oLanguage.sInfoFiltered.replace("_MAX_",j)+a.oLanguage.sInfoPostFix:a.fnRecordsDisplay()==a.fnRecordsTotal()?a.oLanguage.sInfo.replace("_START_",
e).replace("_END_",h).replace("_TOTAL_",k)+a.oLanguage.sInfoPostFix:a.oLanguage.sInfo.replace("_START_",e).replace("_END_",h).replace("_TOTAL_",k)+" "+a.oLanguage.sInfoFiltered.replace("_MAX_",a.fnFormatNumber(a.fnRecordsTotal()))+a.oLanguage.sInfoPostFix;if(a.oLanguage.fnInfoCallback!==null)e=a.oLanguage.fnInfoCallback(a,b,c,d,f,e);a=a.aanFeatures.i;b=0;for(c=a.length;b<c;b++)i(a[b]).html(e)}}function Ga(a){if(a.oScroll.bInfinite)return null;var b='<select size="1" '+(a.sTableId===""?"":'name="'+
a.sTableId+'_length"')+">",c,d;if(a.aLengthMenu.length==2&&typeof a.aLengthMenu[0]=="object"&&typeof a.aLengthMenu[1]=="object"){c=0;for(d=a.aLengthMenu[0].length;c<d;c++)b+='<option value="'+a.aLengthMenu[0][c]+'">'+a.aLengthMenu[1][c]+"</option>"}else{c=0;for(d=a.aLengthMenu.length;c<d;c++)b+='<option value="'+a.aLengthMenu[c]+'">'+a.aLengthMenu[c]+"</option>"}b+="</select>";var f=p.createElement("div");a.sTableId!==""&&typeof a.aanFeatures.l=="undefined"&&f.setAttribute("id",a.sTableId+"_length");
f.className=a.oClasses.sLength;f.innerHTML="<label>"+a.oLanguage.sLengthMenu.replace("_MENU_",b)+"</label>";i('select option[value="'+a._iDisplayLength+'"]',f).attr("selected",true);i("select",f).bind("change.DT",function(){var e=i(this).val(),h=a.aanFeatures.l;c=0;for(d=h.length;c<d;c++)h[c]!=this.parentNode&&i("select",h[c]).val(e);a._iDisplayLength=parseInt(e,10);E(a);if(a.fnDisplayEnd()==a.fnRecordsDisplay()){a._iDisplayStart=a.fnDisplayEnd()-a._iDisplayLength;if(a._iDisplayStart<0)a._iDisplayStart=
0}if(a._iDisplayLength==-1)a._iDisplayStart=0;C(a)});return f}function Ia(a){var b=p.createElement("div");a.sTableId!==""&&typeof a.aanFeatures.r=="undefined"&&b.setAttribute("id",a.sTableId+"_processing");b.innerHTML=a.oLanguage.sProcessing;b.className=a.oClasses.sProcessing;a.nTable.parentNode.insertBefore(b,a.nTable);return b}function K(a,b){if(a.oFeatures.bProcessing){a=a.aanFeatures.r;for(var c=0,d=a.length;c<d;c++)a[c].style.visibility=b?"visible":"hidden"}}function Na(a,b){for(var c=-1,d=0;d<
a.aoColumns.length;d++){a.aoColumns[d].bVisible===true&&c++;if(c==b)return d}return null}function ta(a,b){for(var c=-1,d=0;d<a.aoColumns.length;d++){a.aoColumns[d].bVisible===true&&c++;if(d==b)return a.aoColumns[d].bVisible===true?c:null}return null}function W(a,b){var c,d;c=a._iDisplayStart;for(d=a._iDisplayEnd;c<d;c++)if(a.aoData[a.aiDisplay[c]].nTr==b)return a.aiDisplay[c];c=0;for(d=a.aoData.length;c<d;c++)if(a.aoData[c].nTr==b)return c;return null}function Z(a){for(var b=0,c=0;c<a.aoColumns.length;c++)a.aoColumns[c].bVisible===
true&&b++;return b}function E(a){a._iDisplayEnd=a.oFeatures.bPaginate===false?a.aiDisplay.length:a._iDisplayStart+a._iDisplayLength>a.aiDisplay.length||a._iDisplayLength==-1?a.aiDisplay.length:a._iDisplayStart+a._iDisplayLength}function Sa(a,b){if(!a||a===null||a==="")return 0;if(typeof b=="undefined")b=p.getElementsByTagName("body")[0];var c=p.createElement("div");c.style.width=q(a);b.appendChild(c);a=c.offsetWidth;b.removeChild(c);return a}function ga(a){var b=0,c,d=0,f=a.aoColumns.length,e,h=i("th",
a.nTHead);for(e=0;e<f;e++)if(a.aoColumns[e].bVisible){d++;if(a.aoColumns[e].sWidth!==null){c=Sa(a.aoColumns[e].sWidthOrig,a.nTable.parentNode);if(c!==null)a.aoColumns[e].sWidth=q(c);b++}}if(f==h.length&&b===0&&d==f&&a.oScroll.sX===""&&a.oScroll.sY==="")for(e=0;e<a.aoColumns.length;e++){c=i(h[e]).width();if(c!==null)a.aoColumns[e].sWidth=q(c)}else{b=a.nTable.cloneNode(false);e=a.nTHead.cloneNode(true);d=p.createElement("tbody");c=p.createElement("tr");b.removeAttribute("id");b.appendChild(e);if(a.nTFoot!==
null){b.appendChild(a.nTFoot.cloneNode(true));P(function(k){k.style.width=""},b.getElementsByTagName("tr"))}b.appendChild(d);d.appendChild(c);d=i("thead th",b);if(d.length===0)d=i("tbody tr:eq(0)>td",b);h=S(a,e);for(e=d=0;e<f;e++){var j=a.aoColumns[e];if(j.bVisible&&j.sWidthOrig!==null&&j.sWidthOrig!=="")h[e-d].style.width=q(j.sWidthOrig);else if(j.bVisible)h[e-d].style.width="";else d++}for(e=0;e<f;e++)if(a.aoColumns[e].bVisible){d=Ta(a,e);if(d!==null){d=d.cloneNode(true);if(a.aoColumns[e].sContentPadding!==
"")d.innerHTML+=a.aoColumns[e].sContentPadding;c.appendChild(d)}}f=a.nTable.parentNode;f.appendChild(b);if(a.oScroll.sX!==""&&a.oScroll.sXInner!=="")b.style.width=q(a.oScroll.sXInner);else if(a.oScroll.sX!==""){b.style.width="";if(i(b).width()<f.offsetWidth)b.style.width=q(f.offsetWidth)}else if(a.oScroll.sY!=="")b.style.width=q(f.offsetWidth);b.style.visibility="hidden";Ua(a,b);f=i("tbody tr:eq(0)",b).children();if(f.length===0)f=S(a,i("thead",b)[0]);if(a.oScroll.sX!==""){for(e=d=c=0;e<a.aoColumns.length;e++)if(a.aoColumns[e].bVisible){c+=
a.aoColumns[e].sWidthOrig===null?i(f[d]).outerWidth():parseInt(a.aoColumns[e].sWidth.replace("px",""),10)+(i(f[d]).outerWidth()-i(f[d]).width());d++}b.style.width=q(c);a.nTable.style.width=q(c)}for(e=d=0;e<a.aoColumns.length;e++)if(a.aoColumns[e].bVisible){c=i(f[d]).width();if(c!==null&&c>0)a.aoColumns[e].sWidth=q(c);d++}a.nTable.style.width=q(i(b).outerWidth());b.parentNode.removeChild(b)}}function Ua(a,b){if(a.oScroll.sX===""&&a.oScroll.sY!==""){i(b).width();b.style.width=q(i(b).outerWidth()-a.oScroll.iBarWidth)}else if(a.oScroll.sX!==
"")b.style.width=q(i(b).outerWidth())}function Ta(a,b){var c=Va(a,b);if(c<0)return null;if(a.aoData[c].nTr===null){var d=p.createElement("td");d.innerHTML=G(a,c,b,"");return d}return Q(a,c)[b]}function Va(a,b){for(var c=-1,d=-1,f=0;f<a.aoData.length;f++){var e=G(a,f,b,"display")+"";e=e.replace(/<.*?>/g,"");if(e.length>c){c=e.length;d=f}}return d}function q(a){if(a===null)return"0px";if(typeof a=="number"){if(a<0)return"0px";return a+"px"}var b=a.charCodeAt(a.length-1);if(b<48||b>57)return a;return a+
"px"}function Za(a,b){if(a.length!=b.length)return 1;for(var c=0;c<a.length;c++)if(a[c]!=b[c])return 2;return 0}function ia(a){for(var b=n.aTypes,c=b.length,d=0;d<c;d++){var f=b[d](a);if(f!==null)return f}return"string"}function A(a){for(var b=0;b<D.length;b++)if(D[b].nTable==a)return D[b];return null}function ca(a){for(var b=[],c=a.aoData.length,d=0;d<c;d++)b.push(a.aoData[d]._aData);return b}function ba(a){for(var b=[],c=0,d=a.aoData.length;c<d;c++)a.aoData[c].nTr!==null&&b.push(a.aoData[c].nTr);
return b}function Q(a,b){var c=[],d,f,e,h,j;f=0;var k=a.aoData.length;if(typeof b!="undefined"){f=b;k=b+1}for(f=f;f<k;f++){j=a.aoData[f];if(j.nTr!==null){b=[];e=0;for(h=j.nTr.childNodes.length;e<h;e++){d=j.nTr.childNodes[e].nodeName.toLowerCase();if(d=="td"||d=="th")b.push(j.nTr.childNodes[e])}e=d=0;for(h=a.aoColumns.length;e<h;e++)if(a.aoColumns[e].bVisible)c.push(b[e-d]);else{c.push(j._anHidden[e]);d++}}}return c}function sa(a){return a.replace(new RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^)",
"g"),"\\$1")}function ua(a,b){for(var c=-1,d=0,f=a.length;d<f;d++)if(a[d]==b)c=d;else a[d]>b&&a[d]--;c!=-1&&a.splice(c,1)}function Fa(a,b){b=b.split(",");for(var c=[],d=0,f=a.aoColumns.length;d<f;d++)for(var e=0;e<f;e++)if(a.aoColumns[d].sName==b[e]){c.push(e);break}return c}function ka(a){for(var b="",c=0,d=a.aoColumns.length;c<d;c++)b+=a.aoColumns[c].sName+",";if(b.length==d)return"";return b.slice(0,-1)}function J(a,b,c){a=a.sTableId===""?"DataTables warning: "+c:"DataTables warning (table id = '"+
a.sTableId+"'): "+c;if(b===0)if(n.sErrMode=="alert")alert(a);else throw a;else typeof console!="undefined"&&typeof console.log!="undefined"&&console.log(a)}function la(a){a.aoData.splice(0,a.aoData.length);a.aiDisplayMaster.splice(0,a.aiDisplayMaster.length);a.aiDisplay.splice(0,a.aiDisplay.length);E(a)}function va(a){if(!(!a.oFeatures.bStateSave||typeof a.bDestroying!="undefined")){var b,c,d,f="{";f+='"iCreate":'+(new Date).getTime()+",";f+='"iStart":'+(a.oScroll.bInfinite?0:a._iDisplayStart)+",";
f+='"iEnd":'+(a.oScroll.bInfinite?a._iDisplayLength:a._iDisplayEnd)+",";f+='"iLength":'+a._iDisplayLength+",";f+='"sFilter":"'+encodeURIComponent(a.oPreviousSearch.sSearch)+'",';f+='"sFilterEsc":'+!a.oPreviousSearch.bRegex+",";f+='"aaSorting":[ ';for(b=0;b<a.aaSorting.length;b++)f+="["+a.aaSorting[b][0]+',"'+a.aaSorting[b][1]+'"],';f=f.substring(0,f.length-1);f+="],";f+='"aaSearchCols":[ ';for(b=0;b<a.aoPreSearchCols.length;b++)f+='["'+encodeURIComponent(a.aoPreSearchCols[b].sSearch)+'",'+!a.aoPreSearchCols[b].bRegex+
"],";f=f.substring(0,f.length-1);f+="],";f+='"abVisCols":[ ';for(b=0;b<a.aoColumns.length;b++)f+=a.aoColumns[b].bVisible+",";f=f.substring(0,f.length-1);f+="]";b=0;for(c=a.aoStateSave.length;b<c;b++){d=a.aoStateSave[b].fn(a,f);if(d!=="")f=d}f+="}";Wa(a.sCookiePrefix+a.sInstance,f,a.iCookieDuration,a.sCookiePrefix,a.fnCookieCallback)}}function Xa(a,b){if(a.oFeatures.bStateSave){var c,d,f;d=wa(a.sCookiePrefix+a.sInstance);if(d!==null&&d!==""){try{c=typeof i.parseJSON=="function"?i.parseJSON(d.replace(/'/g,
'"')):eval("("+d+")")}catch(e){return}d=0;for(f=a.aoStateLoad.length;d<f;d++)if(!a.aoStateLoad[d].fn(a,c))return;a.oLoadedState=i.extend(true,{},c);a._iDisplayStart=c.iStart;a.iInitDisplayStart=c.iStart;a._iDisplayEnd=c.iEnd;a._iDisplayLength=c.iLength;a.oPreviousSearch.sSearch=decodeURIComponent(c.sFilter);a.aaSorting=c.aaSorting.slice();a.saved_aaSorting=c.aaSorting.slice();if(typeof c.sFilterEsc!="undefined")a.oPreviousSearch.bRegex=!c.sFilterEsc;if(typeof c.aaSearchCols!="undefined")for(d=0;d<
c.aaSearchCols.length;d++)a.aoPreSearchCols[d]={sSearch:decodeURIComponent(c.aaSearchCols[d][0]),bRegex:!c.aaSearchCols[d][1]};if(typeof c.abVisCols!="undefined"){b.saved_aoColumns=[];for(d=0;d<c.abVisCols.length;d++){b.saved_aoColumns[d]={};b.saved_aoColumns[d].bVisible=c.abVisCols[d]}}}}}function Wa(a,b,c,d,f){var e=new Date;e.setTime(e.getTime()+c*1E3);c=za.location.pathname.split("/");a=a+"_"+c.pop().replace(/[\/:]/g,"").toLowerCase();var h;if(f!==null){h=typeof i.parseJSON=="function"?i.parseJSON(b):
eval("("+b+")");b=f(a,h,e.toGMTString(),c.join("/")+"/")}else b=a+"="+encodeURIComponent(b)+"; expires="+e.toGMTString()+"; path="+c.join("/")+"/";f="";e=9999999999999;if((wa(a)!==null?p.cookie.length:b.length+p.cookie.length)+10>4096){a=p.cookie.split(";");for(var j=0,k=a.length;j<k;j++)if(a[j].indexOf(d)!=-1){var m=a[j].split("=");try{h=eval("("+decodeURIComponent(m[1])+")")}catch(u){continue}if(typeof h.iCreate!="undefined"&&h.iCreate<e){f=m[0];e=h.iCreate}}if(f!=="")p.cookie=f+"=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path="+
c.join("/")+"/"}p.cookie=b}function wa(a){var b=za.location.pathname.split("/");a=a+"_"+b[b.length-1].replace(/[\/:]/g,"").toLowerCase()+"=";b=p.cookie.split(";");for(var c=0;c<b.length;c++){for(var d=b[c];d.charAt(0)==" ";)d=d.substring(1,d.length);if(d.indexOf(a)===0)return decodeURIComponent(d.substring(a.length,d.length))}return null}function Y(a,b){b=i(b).children("tr");var c,d,f,e,h,j,k,m,u=function(L,T,B){for(;typeof L[T][B]!="undefined";)B++;return B};a.splice(0,a.length);d=0;for(j=b.length;d<
j;d++)a.push([]);d=0;for(j=b.length;d<j;d++){f=0;for(k=b[d].childNodes.length;f<k;f++){c=b[d].childNodes[f];if(c.nodeName.toUpperCase()=="TD"||c.nodeName.toUpperCase()=="TH"){var r=c.getAttribute("colspan")*1,H=c.getAttribute("rowspan")*1;r=!r||r===0||r===1?1:r;H=!H||H===0||H===1?1:H;m=u(a,d,0);for(h=0;h<r;h++)for(e=0;e<H;e++){a[d+e][m+h]={cell:c,unique:r==1?true:false};a[d+e].nTr=b[d]}}}}}function S(a,b,c){var d=[];if(typeof c=="undefined"){c=a.aoHeader;if(typeof b!="undefined"){c=[];Y(c,b)}}b=0;
for(var f=c.length;b<f;b++)for(var e=0,h=c[b].length;e<h;e++)if(c[b][e].unique&&(typeof d[e]=="undefined"||!a.bSortCellsTop))d[e]=c[b][e].cell;return d}function Ya(){var a=p.createElement("p"),b=a.style;b.width="100%";b.height="200px";b.padding="0px";var c=p.createElement("div");b=c.style;b.position="absolute";b.top="0px";b.left="0px";b.visibility="hidden";b.width="200px";b.height="150px";b.padding="0px";b.overflow="hidden";c.appendChild(a);p.body.appendChild(c);b=a.offsetWidth;c.style.overflow="scroll";
a=a.offsetWidth;if(b==a)a=c.clientWidth;p.body.removeChild(c);return b-a}function P(a,b,c){for(var d=0,f=b.length;d<f;d++)for(var e=0,h=b[d].childNodes.length;e<h;e++)if(b[d].childNodes[e].nodeType==1)typeof c!="undefined"?a(b[d].childNodes[e],c[d].childNodes[e]):a(b[d].childNodes[e])}function o(a,b,c,d){if(typeof d=="undefined")d=c;if(typeof b[c]!="undefined")a[d]=b[c]}function fa(a,b,c){for(var d=[],f=0,e=a.aoColumns.length;f<e;f++)d.push(G(a,b,f,c));return d}function G(a,b,c,d){var f=a.aoColumns[c];
if((c=f.fnGetData(a.aoData[b]._aData))===undefined){if(a.iDrawError!=a.iDraw&&f.sDefaultContent===null){J(a,0,"Requested unknown parameter '"+f.mDataProp+"' from the data source for row "+b);a.iDrawError=a.iDraw}return f.sDefaultContent}if(c===null&&f.sDefaultContent!==null)c=f.sDefaultContent;else if(typeof c=="function")return c();if(d=="display"&&c===null)return"";return c}function O(a,b,c,d){a.aoColumns[c].fnSetData(a.aoData[b]._aData,d)}function aa(a){if(a===null)return function(){return null};
else if(typeof a=="function")return function(c){return a(c)};else if(typeof a=="string"&&a.indexOf(".")!=-1){var b=a.split(".");return b.length==2?function(c){return c[b[0]][b[1]]}:b.length==3?function(c){return c[b[0]][b[1]][b[2]]}:function(c){for(var d=0,f=b.length;d<f;d++)c=c[b[d]];return c}}else return function(c){return c[a]}}function Ba(a){if(a===null)return function(){};else if(typeof a=="function")return function(c,d){return a(c,d)};else if(typeof a=="string"&&a.indexOf(".")!=-1){var b=a.split(".");
return b.length==2?function(c,d){c[b[0]][b[1]]=d}:b.length==3?function(c,d){c[b[0]][b[1]][b[2]]=d}:function(c,d){for(var f=0,e=b.length-1;f<e;f++)c=c[b[f]];c[b[b.length-1]]=d}}else return function(c,d){c[a]=d}}this.oApi={};this.fnDraw=function(a){var b=A(this[n.iApiIndex]);if(typeof a!="undefined"&&a===false){E(b);C(b)}else da(b)};this.fnFilter=function(a,b,c,d,f){var e=A(this[n.iApiIndex]);if(e.oFeatures.bFilter){if(typeof c=="undefined")c=false;if(typeof d=="undefined")d=true;if(typeof f=="undefined")f=
true;if(typeof b=="undefined"||b===null){N(e,{sSearch:a,bRegex:c,bSmart:d},1);if(f&&typeof e.aanFeatures.f!="undefined"){b=e.aanFeatures.f;c=0;for(d=b.length;c<d;c++)i("input",b[c]).val(a)}}else{e.aoPreSearchCols[b].sSearch=a;e.aoPreSearchCols[b].bRegex=c;e.aoPreSearchCols[b].bSmart=d;N(e,e.oPreviousSearch,1)}}};this.fnSettings=function(){return A(this[n.iApiIndex])};this.fnVersionCheck=n.fnVersionCheck;this.fnSort=function(a){var b=A(this[n.iApiIndex]);b.aaSorting=a;R(b)};this.fnSortListener=function(a,
b,c){ja(A(this[n.iApiIndex]),a,b,c)};this.fnAddData=function(a,b){if(a.length===0)return[];var c=[],d,f=A(this[n.iApiIndex]);if(typeof a[0]=="object")for(var e=0;e<a.length;e++){d=v(f,a[e]);if(d==-1)return c;c.push(d)}else{d=v(f,a);if(d==-1)return c;c.push(d)}f.aiDisplay=f.aiDisplayMaster.slice();if(typeof b=="undefined"||b)da(f);return c};this.fnDeleteRow=function(a,b,c){var d=A(this[n.iApiIndex]);a=typeof a=="object"?W(d,a):a;var f=d.aoData.splice(a,1),e=i.inArray(a,d.aiDisplay);d.asDataSearch.splice(e,
1);ua(d.aiDisplayMaster,a);ua(d.aiDisplay,a);typeof b=="function"&&b.call(this,d,f);if(d._iDisplayStart>=d.aiDisplay.length){d._iDisplayStart-=d._iDisplayLength;if(d._iDisplayStart<0)d._iDisplayStart=0}if(typeof c=="undefined"||c){E(d);C(d)}return f};this.fnClearTable=function(a){var b=A(this[n.iApiIndex]);la(b);if(typeof a=="undefined"||a)C(b)};this.fnOpen=function(a,b,c){var d=A(this[n.iApiIndex]);this.fnClose(a);var f=p.createElement("tr"),e=p.createElement("td");f.appendChild(e);e.className=c;
e.colSpan=Z(d);if(typeof b.jquery!="undefined"||typeof b=="object")e.appendChild(b);else e.innerHTML=b;b=i("tr",d.nTBody);i.inArray(a,b)!=-1&&i(f).insertAfter(a);d.aoOpenRows.push({nTr:f,nParent:a});return f};this.fnClose=function(a){for(var b=A(this[n.iApiIndex]),c=0;c<b.aoOpenRows.length;c++)if(b.aoOpenRows[c].nParent==a){(a=b.aoOpenRows[c].nTr.parentNode)&&a.removeChild(b.aoOpenRows[c].nTr);b.aoOpenRows.splice(c,1);return 0}return 1};this.fnGetData=function(a,b){var c=A(this[n.iApiIndex]);if(typeof a!=
"undefined"){a=typeof a=="object"?W(c,a):a;if(typeof b!="undefined")return G(c,a,b,"");return typeof c.aoData[a]!="undefined"?c.aoData[a]._aData:null}return ca(c)};this.fnGetNodes=function(a){var b=A(this[n.iApiIndex]);if(typeof a!="undefined")return typeof b.aoData[a]!="undefined"?b.aoData[a].nTr:null;return ba(b)};this.fnGetPosition=function(a){var b=A(this[n.iApiIndex]),c=a.nodeName.toUpperCase();if(c=="TR")return W(b,a);else if(c=="TD"||c=="TH"){c=W(b,a.parentNode);for(var d=Q(b,c),f=0;f<b.aoColumns.length;f++)if(d[f]==
a)return[c,ta(b,f),f]}return null};this.fnUpdate=function(a,b,c,d,f){var e=A(this[n.iApiIndex]);b=typeof b=="object"?W(e,b):b;if(i.isArray(a)&&typeof a=="object"){e.aoData[b]._aData=a.slice();for(c=0;c<e.aoColumns.length;c++)this.fnUpdate(G(e,b,c),b,c,false,false)}else if(a!==null&&typeof a=="object"){e.aoData[b]._aData=i.extend(true,{},a);for(c=0;c<e.aoColumns.length;c++)this.fnUpdate(G(e,b,c),b,c,false,false)}else{a=a;O(e,b,c,a);if(e.aoColumns[c].fnRender!==null){a=e.aoColumns[c].fnRender({iDataRow:b,
iDataColumn:c,aData:e.aoData[b]._aData,oSettings:e});e.aoColumns[c].bUseRendered&&O(e,b,c,a)}if(e.aoData[b].nTr!==null)Q(e,b)[c].innerHTML=a}c=i.inArray(b,e.aiDisplay);e.asDataSearch[c]=ra(e,fa(e,b,"filter"));if(typeof f=="undefined"||f)ea(e);if(typeof d=="undefined"||d)da(e);return 0};this.fnSetColumnVis=function(a,b,c){var d=A(this[n.iApiIndex]),f,e;e=d.aoColumns.length;var h,j;if(d.aoColumns[a].bVisible!=b){if(b){for(f=j=0;f<a;f++)d.aoColumns[f].bVisible&&j++;j=j>=Z(d);if(!j)for(f=a;f<e;f++)if(d.aoColumns[f].bVisible){h=
f;break}f=0;for(e=d.aoData.length;f<e;f++)if(d.aoData[f].nTr!==null)j?d.aoData[f].nTr.appendChild(d.aoData[f]._anHidden[a]):d.aoData[f].nTr.insertBefore(d.aoData[f]._anHidden[a],Q(d,f)[h])}else{f=0;for(e=d.aoData.length;f<e;f++)if(d.aoData[f].nTr!==null){h=Q(d,f)[a];d.aoData[f]._anHidden[a]=h;h.parentNode.removeChild(h)}}d.aoColumns[a].bVisible=b;M(d,d.aoHeader);d.nTFoot&&M(d,d.aoFooter);f=0;for(e=d.aoOpenRows.length;f<e;f++)d.aoOpenRows[f].nTr.colSpan=Z(d);if(typeof c=="undefined"||c){ea(d);C(d)}va(d)}};
this.fnPageChange=function(a,b){var c=A(this[n.iApiIndex]);ma(c,a);E(c);if(typeof b=="undefined"||b)C(c)};this.fnDestroy=function(){var a=A(this[n.iApiIndex]),b=a.nTableWrapper.parentNode,c=a.nTBody,d,f;a.bDestroying=true;d=0;for(f=a.aoDestroyCallback.length;d<f;d++)a.aoDestroyCallback[d].fn();d=0;for(f=a.aoColumns.length;d<f;d++)a.aoColumns[d].bVisible===false&&this.fnSetColumnVis(d,true);i(a.nTableWrapper).find("*").andSelf().unbind(".DT");i("tbody>tr>td."+a.oClasses.sRowEmpty,a.nTable).parent().remove();
if(a.nTable!=a.nTHead.parentNode){i(a.nTable).children("thead").remove();a.nTable.appendChild(a.nTHead)}if(a.nTFoot&&a.nTable!=a.nTFoot.parentNode){i(a.nTable).children("tfoot").remove();a.nTable.appendChild(a.nTFoot)}a.nTable.parentNode.removeChild(a.nTable);i(a.nTableWrapper).remove();a.aaSorting=[];a.aaSortingFixed=[];V(a);i(ba(a)).removeClass(a.asStripeClasses.join(" "));if(a.bJUI){i("th",a.nTHead).removeClass([n.oStdClasses.sSortable,n.oJUIClasses.sSortableAsc,n.oJUIClasses.sSortableDesc,n.oJUIClasses.sSortableNone].join(" "));
i("th span."+n.oJUIClasses.sSortIcon,a.nTHead).remove();i("th",a.nTHead).each(function(){var e=i("div."+n.oJUIClasses.sSortJUIWrapper,this),h=e.contents();i(this).append(h);e.remove()})}else i("th",a.nTHead).removeClass([n.oStdClasses.sSortable,n.oStdClasses.sSortableAsc,n.oStdClasses.sSortableDesc,n.oStdClasses.sSortableNone].join(" "));a.nTableReinsertBefore?b.insertBefore(a.nTable,a.nTableReinsertBefore):b.appendChild(a.nTable);d=0;for(f=a.aoData.length;d<f;d++)a.aoData[d].nTr!==null&&c.appendChild(a.aoData[d].nTr);
if(a.oFeatures.bAutoWidth===true)a.nTable.style.width=q(a.sDestroyWidth);i(c).children("tr:even").addClass(a.asDestroyStripes[0]);i(c).children("tr:odd").addClass(a.asDestroyStripes[1]);d=0;for(f=D.length;d<f;d++)D[d]==a&&D.splice(d,1);a=null};this.fnAdjustColumnSizing=function(a){var b=A(this[n.iApiIndex]);ea(b);if(typeof a=="undefined"||a)this.fnDraw(false);else if(b.oScroll.sX!==""||b.oScroll.sY!=="")this.oApi._fnScrollDraw(b)};for(var xa in n.oApi)if(xa)this[xa]=s(xa);this.oApi._fnExternApiFunc=
s;this.oApi._fnInitialise=t;this.oApi._fnInitComplete=w;this.oApi._fnLanguageProcess=y;this.oApi._fnAddColumn=F;this.oApi._fnColumnOptions=x;this.oApi._fnAddData=v;this.oApi._fnCreateTr=z;this.oApi._fnGatherData=$;this.oApi._fnBuildHead=X;this.oApi._fnDrawHead=M;this.oApi._fnDraw=C;this.oApi._fnReDraw=da;this.oApi._fnAjaxUpdate=Ca;this.oApi._fnAjaxParameters=Da;this.oApi._fnAjaxUpdateDraw=Ea;this.oApi._fnServerParams=ha;this.oApi._fnAddOptionsHtml=Aa;this.oApi._fnFeatureHtmlTable=Ja;this.oApi._fnScrollDraw=
Ma;this.oApi._fnAdjustColumnSizing=ea;this.oApi._fnFeatureHtmlFilter=Ha;this.oApi._fnFilterComplete=N;this.oApi._fnFilterCustom=Qa;this.oApi._fnFilterColumn=Pa;this.oApi._fnFilter=Oa;this.oApi._fnBuildSearchArray=oa;this.oApi._fnBuildSearchRow=ra;this.oApi._fnFilterCreateSearch=pa;this.oApi._fnDataToSearch=qa;this.oApi._fnSort=R;this.oApi._fnSortAttachListener=ja;this.oApi._fnSortingClasses=V;this.oApi._fnFeatureHtmlPaginate=La;this.oApi._fnPageChange=ma;this.oApi._fnFeatureHtmlInfo=Ka;this.oApi._fnUpdateInfo=
Ra;this.oApi._fnFeatureHtmlLength=Ga;this.oApi._fnFeatureHtmlProcessing=Ia;this.oApi._fnProcessingDisplay=K;this.oApi._fnVisibleToColumnIndex=Na;this.oApi._fnColumnIndexToVisible=ta;this.oApi._fnNodeToDataIndex=W;this.oApi._fnVisbleColumns=Z;this.oApi._fnCalculateEnd=E;this.oApi._fnConvertToWidth=Sa;this.oApi._fnCalculateColumnWidths=ga;this.oApi._fnScrollingWidthAdjust=Ua;this.oApi._fnGetWidestNode=Ta;this.oApi._fnGetMaxLenString=Va;this.oApi._fnStringToCss=q;this.oApi._fnArrayCmp=Za;this.oApi._fnDetectType=
ia;this.oApi._fnSettingsFromNode=A;this.oApi._fnGetDataMaster=ca;this.oApi._fnGetTrNodes=ba;this.oApi._fnGetTdNodes=Q;this.oApi._fnEscapeRegex=sa;this.oApi._fnDeleteIndex=ua;this.oApi._fnReOrderIndex=Fa;this.oApi._fnColumnOrdering=ka;this.oApi._fnLog=J;this.oApi._fnClearTable=la;this.oApi._fnSaveState=va;this.oApi._fnLoadState=Xa;this.oApi._fnCreateCookie=Wa;this.oApi._fnReadCookie=wa;this.oApi._fnDetectHeader=Y;this.oApi._fnGetUniqueThs=S;this.oApi._fnScrollBarWidth=Ya;this.oApi._fnApplyToChildren=
P;this.oApi._fnMap=o;this.oApi._fnGetRowData=fa;this.oApi._fnGetCellData=G;this.oApi._fnSetCellData=O;this.oApi._fnGetObjectDataFn=aa;this.oApi._fnSetObjectDataFn=Ba;var ya=this;return this.each(function(){var a=0,b,c,d,f;a=0;for(b=D.length;a<b;a++){if(D[a].nTable==this)if(typeof g=="undefined"||typeof g.bRetrieve!="undefined"&&g.bRetrieve===true)return D[a].oInstance;else if(typeof g.bDestroy!="undefined"&&g.bDestroy===true){D[a].oInstance.fnDestroy();break}else{J(D[a],0,"Cannot reinitialise DataTable.\n\nTo retrieve the DataTables object for this table, please pass either no arguments to the dataTable() function, or set bRetrieve to true. Alternatively, to destory the old table and create a new one, set bDestroy to true (note that a lot of changes to the configuration can be made through the API which is usually much faster).");
return}if(D[a].sTableId!==""&&D[a].sTableId==this.getAttribute("id")){D.splice(a,1);break}}var e=new l;D.push(e);var h=false,j=false;a=this.getAttribute("id");if(a!==null){e.sTableId=a;e.sInstance=a}else e.sInstance=n._oExternConfig.iNextUnique++;if(this.nodeName.toLowerCase()!="table")J(e,0,"Attempted to initialise DataTables on a node which is not a table: "+this.nodeName);else{e.nTable=this;e.oInstance=ya.length==1?ya:i(this).dataTable();e.oApi=ya.oApi;e.sDestroyWidth=i(this).width();if(typeof g!=
"undefined"&&g!==null){e.oInit=g;o(e.oFeatures,g,"bPaginate");o(e.oFeatures,g,"bLengthChange");o(e.oFeatures,g,"bFilter");o(e.oFeatures,g,"bSort");o(e.oFeatures,g,"bInfo");o(e.oFeatures,g,"bProcessing");o(e.oFeatures,g,"bAutoWidth");o(e.oFeatures,g,"bSortClasses");o(e.oFeatures,g,"bServerSide");o(e.oFeatures,g,"bDeferRender");o(e.oScroll,g,"sScrollX","sX");o(e.oScroll,g,"sScrollXInner","sXInner");o(e.oScroll,g,"sScrollY","sY");o(e.oScroll,g,"bScrollCollapse","bCollapse");o(e.oScroll,g,"bScrollInfinite",
"bInfinite");o(e.oScroll,g,"iScrollLoadGap","iLoadGap");o(e.oScroll,g,"bScrollAutoCss","bAutoCss");o(e,g,"asStripClasses","asStripeClasses");o(e,g,"asStripeClasses");o(e,g,"fnPreDrawCallback");o(e,g,"fnRowCallback");o(e,g,"fnHeaderCallback");o(e,g,"fnFooterCallback");o(e,g,"fnCookieCallback");o(e,g,"fnInitComplete");o(e,g,"fnServerData");o(e,g,"fnFormatNumber");o(e,g,"aaSorting");o(e,g,"aaSortingFixed");o(e,g,"aLengthMenu");o(e,g,"sPaginationType");o(e,g,"sAjaxSource");o(e,g,"sAjaxDataProp");o(e,
g,"iCookieDuration");o(e,g,"sCookiePrefix");o(e,g,"sDom");o(e,g,"bSortCellsTop");o(e,g,"oSearch","oPreviousSearch");o(e,g,"aoSearchCols","aoPreSearchCols");o(e,g,"iDisplayLength","_iDisplayLength");o(e,g,"bJQueryUI","bJUI");o(e.oLanguage,g,"fnInfoCallback");typeof g.fnDrawCallback=="function"&&e.aoDrawCallback.push({fn:g.fnDrawCallback,sName:"user"});typeof g.fnServerParams=="function"&&e.aoServerParams.push({fn:g.fnServerParams,sName:"user"});typeof g.fnStateSaveCallback=="function"&&e.aoStateSave.push({fn:g.fnStateSaveCallback,
sName:"user"});typeof g.fnStateLoadCallback=="function"&&e.aoStateLoad.push({fn:g.fnStateLoadCallback,sName:"user"});if(e.oFeatures.bServerSide&&e.oFeatures.bSort&&e.oFeatures.bSortClasses)e.aoDrawCallback.push({fn:V,sName:"server_side_sort_classes"});else e.oFeatures.bDeferRender&&e.aoDrawCallback.push({fn:V,sName:"defer_sort_classes"});if(typeof g.bJQueryUI!="undefined"&&g.bJQueryUI){e.oClasses=n.oJUIClasses;if(typeof g.sDom=="undefined")e.sDom='<"H"lfr>t<"F"ip>'}if(e.oScroll.sX!==""||e.oScroll.sY!==
"")e.oScroll.iBarWidth=Ya();if(typeof g.iDisplayStart!="undefined"&&typeof e.iInitDisplayStart=="undefined"){e.iInitDisplayStart=g.iDisplayStart;e._iDisplayStart=g.iDisplayStart}if(typeof g.bStateSave!="undefined"){e.oFeatures.bStateSave=g.bStateSave;Xa(e,g);e.aoDrawCallback.push({fn:va,sName:"state_save"})}if(typeof g.iDeferLoading!="undefined"){e.bDeferLoading=true;e._iRecordsTotal=g.iDeferLoading;e._iRecordsDisplay=g.iDeferLoading}if(typeof g.aaData!="undefined")j=true;if(typeof g!="undefined"&&
typeof g.aoData!="undefined")g.aoColumns=g.aoData;if(typeof g.oLanguage!="undefined")if(typeof g.oLanguage.sUrl!="undefined"&&g.oLanguage.sUrl!==""){e.oLanguage.sUrl=g.oLanguage.sUrl;i.getJSON(e.oLanguage.sUrl,null,function(u){y(e,u,true)});h=true}else y(e,g.oLanguage,false)}else g={};if(typeof g.asStripClasses=="undefined"&&typeof g.asStripeClasses=="undefined"){e.asStripeClasses.push(e.oClasses.sStripeOdd);e.asStripeClasses.push(e.oClasses.sStripeEven)}c=false;d=i(this).children("tbody").children("tr");
a=0;for(b=e.asStripeClasses.length;a<b;a++)if(d.filter(":lt(2)").hasClass(e.asStripeClasses[a])){c=true;break}if(c){e.asDestroyStripes=["",""];if(i(d[0]).hasClass(e.oClasses.sStripeOdd))e.asDestroyStripes[0]+=e.oClasses.sStripeOdd+" ";if(i(d[0]).hasClass(e.oClasses.sStripeEven))e.asDestroyStripes[0]+=e.oClasses.sStripeEven;if(i(d[1]).hasClass(e.oClasses.sStripeOdd))e.asDestroyStripes[1]+=e.oClasses.sStripeOdd+" ";if(i(d[1]).hasClass(e.oClasses.sStripeEven))e.asDestroyStripes[1]+=e.oClasses.sStripeEven;
d.removeClass(e.asStripeClasses.join(" "))}c=[];var k;a=this.getElementsByTagName("thead");if(a.length!==0){Y(e.aoHeader,a[0]);c=S(e)}if(typeof g.aoColumns=="undefined"){k=[];a=0;for(b=c.length;a<b;a++)k.push(null)}else k=g.aoColumns;a=0;for(b=k.length;a<b;a++){if(typeof g.saved_aoColumns!="undefined"&&g.saved_aoColumns.length==b){if(k[a]===null)k[a]={};k[a].bVisible=g.saved_aoColumns[a].bVisible}F(e,c?c[a]:null)}if(typeof g.aoColumnDefs!="undefined")for(a=g.aoColumnDefs.length-1;a>=0;a--){var m=
g.aoColumnDefs[a].aTargets;i.isArray(m)||J(e,1,"aTargets must be an array of targets, not a "+typeof m);c=0;for(d=m.length;c<d;c++)if(typeof m[c]=="number"&&m[c]>=0){for(;e.aoColumns.length<=m[c];)F(e);x(e,m[c],g.aoColumnDefs[a])}else if(typeof m[c]=="number"&&m[c]<0)x(e,e.aoColumns.length+m[c],g.aoColumnDefs[a]);else if(typeof m[c]=="string"){b=0;for(f=e.aoColumns.length;b<f;b++)if(m[c]=="_all"||i(e.aoColumns[b].nTh).hasClass(m[c]))x(e,b,g.aoColumnDefs[a])}}if(typeof k!="undefined"){a=0;for(b=k.length;a<
b;a++)x(e,a,k[a])}a=0;for(b=e.aaSorting.length;a<b;a++){if(e.aaSorting[a][0]>=e.aoColumns.length)e.aaSorting[a][0]=0;k=e.aoColumns[e.aaSorting[a][0]];if(typeof e.aaSorting[a][2]=="undefined")e.aaSorting[a][2]=0;if(typeof g.aaSorting=="undefined"&&typeof e.saved_aaSorting=="undefined")e.aaSorting[a][1]=k.asSorting[0];c=0;for(d=k.asSorting.length;c<d;c++)if(e.aaSorting[a][1]==k.asSorting[c]){e.aaSorting[a][2]=c;break}}V(e);a=i(this).children("thead");if(a.length===0){a=[p.createElement("thead")];this.appendChild(a[0])}e.nTHead=
a[0];a=i(this).children("tbody");if(a.length===0){a=[p.createElement("tbody")];this.appendChild(a[0])}e.nTBody=a[0];a=i(this).children("tfoot");if(a.length>0){e.nTFoot=a[0];Y(e.aoFooter,e.nTFoot)}if(j)for(a=0;a<g.aaData.length;a++)v(e,g.aaData[a]);else $(e);e.aiDisplay=e.aiDisplayMaster.slice();e.bInitialised=true;h===false&&t(e)}})}})(jQuery,window,document);


(function(a){a.uniform={options:{selectClass:"selector",radioClass:"radio",checkboxClass:"checker",fileClass:"uploader",filenameClass:"filename",fileBtnClass:"action",fileDefaultText:"No file selected",fileBtnText:"Choose File",checkedClass:"checked",focusClass:"focus",disabledClass:"disabled",buttonClass:"button",activeClass:"active",hoverClass:"hover",useID:true,idPrefix:"uniform",resetSelector:false,autoHide:true},elements:[]};if(a.browser.msie&&a.browser.version<7){a.support.selectOpacity=false}else{a.support.selectOpacity=true}a.fn.uniform=function(k){k=a.extend(a.uniform.options,k);var d=this;if(k.resetSelector!=false){a(k.resetSelector).mouseup(function(){function l(){a.uniform.update(d)}setTimeout(l,10)})}function j(l){$el=a(l);$el.addClass($el.attr("type"));b(l)}function g(l){a(l).addClass("uniform");b(l)}function i(o){var m=a(o);var p=a("<div>"),l=a("<span>");p.addClass(k.buttonClass);if(k.useID&&m.attr("id")!=""){p.attr("id",k.idPrefix+"-"+m.attr("id"))}var n;if(m.is("a")||m.is("button")){n=m.text()}else{if(m.is(":submit")||m.is(":reset")||m.is("input[type=button]")){n=m.attr("value")}}n=n==""?m.is(":reset")?"Reset":"Submit":n;l.html(n);m.css("opacity",0);m.wrap(p);m.wrap(l);p=m.closest("div");l=m.closest("span");if(m.is(":disabled")){p.addClass(k.disabledClass)}p.bind({"mouseenter.uniform":function(){p.addClass(k.hoverClass)},"mouseleave.uniform":function(){p.removeClass(k.hoverClass);p.removeClass(k.activeClass)},"mousedown.uniform touchbegin.uniform":function(){p.addClass(k.activeClass)},"mouseup.uniform touchend.uniform":function(){p.removeClass(k.activeClass)},"click.uniform touchend.uniform":function(r){if(a(r.target).is("span")||a(r.target).is("div")){if(o[0].dispatchEvent){var q=document.createEvent("MouseEvents");q.initEvent("click",true,true);o[0].dispatchEvent(q)}else{o[0].click()}}}});o.bind({"focus.uniform":function(){p.addClass(k.focusClass)},"blur.uniform":function(){p.removeClass(k.focusClass)}});a.uniform.noSelect(p);b(o)}function e(o){var m=a(o);var p=a("<div />"),l=a("<span />");if(!m.css("display")=="none"&&k.autoHide){p.hide()}p.addClass(k.selectClass);if(k.useID&&o.attr("id")!=""){p.attr("id",k.idPrefix+"-"+o.attr("id"))}var n=o.find(":selected:first");if(n.length==0){n=o.find("option:first")}l.html(n.html());o.css("opacity",0);o.wrap(p);o.before(l);p=o.parent("div");l=o.siblings("span");o.bind({"change.uniform":function(){l.text(o.find(":selected").html());p.removeClass(k.activeClass)},"focus.uniform":function(){p.addClass(k.focusClass)},"blur.uniform":function(){p.removeClass(k.focusClass);p.removeClass(k.activeClass)},"mousedown.uniform touchbegin.uniform":function(){p.addClass(k.activeClass)},"mouseup.uniform touchend.uniform":function(){p.removeClass(k.activeClass)},"click.uniform touchend.uniform":function(){p.removeClass(k.activeClass)},"mouseenter.uniform":function(){p.addClass(k.hoverClass)},"mouseleave.uniform":function(){p.removeClass(k.hoverClass);p.removeClass(k.activeClass)},"keyup.uniform":function(){l.text(o.find(":selected").html())}});if(a(o).attr("disabled")){p.addClass(k.disabledClass)}a.uniform.noSelect(l);b(o)}function f(n){var m=a(n);var o=a("<div />"),l=a("<span />");if(!m.css("display")=="none"&&k.autoHide){o.hide()}o.addClass(k.checkboxClass);if(k.useID&&n.attr("id")!=""){o.attr("id",k.idPrefix+"-"+n.attr("id"))}a(n).wrap(o);a(n).wrap(l);l=n.parent();o=l.parent();a(n).css("opacity",0).bind({"focus.uniform":function(){o.addClass(k.focusClass)},"blur.uniform":function(){o.removeClass(k.focusClass)},"click.uniform touchend.uniform":function(){if(!a(n).attr("checked")){l.removeClass(k.checkedClass)}else{l.addClass(k.checkedClass)}},"mousedown.uniform touchbegin.uniform":function(){o.addClass(k.activeClass)},"mouseup.uniform touchend.uniform":function(){o.removeClass(k.activeClass)},"mouseenter.uniform":function(){o.addClass(k.hoverClass)},"mouseleave.uniform":function(){o.removeClass(k.hoverClass);o.removeClass(k.activeClass)}});if(a(n).attr("checked")){l.addClass(k.checkedClass)}if(a(n).attr("disabled")){o.addClass(k.disabledClass)}b(n)}function c(n){var m=a(n);var o=a("<div />"),l=a("<span />");if(!m.css("display")=="none"&&k.autoHide){o.hide()}o.addClass(k.radioClass);if(k.useID&&n.attr("id")!=""){o.attr("id",k.idPrefix+"-"+n.attr("id"))}a(n).wrap(o);a(n).wrap(l);l=n.parent();o=l.parent();a(n).css("opacity",0).bind({"focus.uniform":function(){o.addClass(k.focusClass)},"blur.uniform":function(){o.removeClass(k.focusClass)},"click.uniform touchend.uniform":function(){if(!a(n).attr("checked")){l.removeClass(k.checkedClass)}else{var p=k.radioClass.split(" ")[0];a("."+p+" span."+k.checkedClass+":has([name='"+a(n).attr("name")+"'])").removeClass(k.checkedClass);l.addClass(k.checkedClass)}},"mousedown.uniform touchend.uniform":function(){if(!a(n).is(":disabled")){o.addClass(k.activeClass)}},"mouseup.uniform touchbegin.uniform":function(){o.removeClass(k.activeClass)},"mouseenter.uniform touchend.uniform":function(){o.addClass(k.hoverClass)},"mouseleave.uniform":function(){o.removeClass(k.hoverClass);o.removeClass(k.activeClass)}});if(a(n).attr("checked")){l.addClass(k.checkedClass)}if(a(n).attr("disabled")){o.addClass(k.disabledClass)}b(n)}function h(q){var o=a(q);var r=a("<div />"),p=a("<span>"+k.fileDefaultText+"</span>"),m=a("<span>"+k.fileBtnText+"</span>");if(!o.css("display")=="none"&&k.autoHide){r.hide()}r.addClass(k.fileClass);p.addClass(k.filenameClass);m.addClass(k.fileBtnClass);if(k.useID&&o.attr("id")!=""){r.attr("id",k.idPrefix+"-"+o.attr("id"))}o.wrap(r);o.after(m);o.after(p);r=o.closest("div");p=o.siblings("."+k.filenameClass);m=o.siblings("."+k.fileBtnClass);if(!o.attr("size")){var l=r.width();o.attr("size",l/10)}var n=function(){var s=o.val();if(s===""){s=k.fileDefaultText}else{s=s.split(/[\/\\]+/);s=s[(s.length-1)]}p.text(s)};n();o.css("opacity",0).bind({"focus.uniform":function(){r.addClass(k.focusClass)},"blur.uniform":function(){r.removeClass(k.focusClass)},"mousedown.uniform":function(){if(!a(q).is(":disabled")){r.addClass(k.activeClass)}},"mouseup.uniform":function(){r.removeClass(k.activeClass)},"mouseenter.uniform":function(){r.addClass(k.hoverClass)},"mouseleave.uniform":function(){r.removeClass(k.hoverClass);r.removeClass(k.activeClass)}});if(a.browser.msie){o.bind("click.uniform.ie7",function(){setTimeout(n,0)})}else{o.bind("change.uniform",n)}if(o.attr("disabled")){r.addClass(k.disabledClass)}a.uniform.noSelect(p);a.uniform.noSelect(m);b(q)}a.uniform.restore=function(l){if(l==undefined){l=a(a.uniform.elements)}a(l).each(function(){if(a(this).is(":checkbox")){a(this).unwrap().unwrap()}else{if(a(this).is("select")){a(this).siblings("span").remove();a(this).unwrap()}else{if(a(this).is(":radio")){a(this).unwrap().unwrap()}else{if(a(this).is(":file")){a(this).siblings("span").remove();a(this).unwrap()}else{if(a(this).is("button, :submit, :reset, a, input[type='button']")){a(this).unwrap().unwrap()}}}}}a(this).unbind(".uniform");a(this).css("opacity","1");var m=a.inArray(a(l),a.uniform.elements);a.uniform.elements.splice(m,1)})};function b(l){l=a(l).get();if(l.length>1){a.each(l,function(m,n){a.uniform.elements.push(n)})}else{a.uniform.elements.push(l)}}a.uniform.noSelect=function(l){function m(){return false}a(l).each(function(){this.onselectstart=this.ondragstart=m;a(this).mousedown(m).css({MozUserSelect:"none"})})};a.uniform.update=function(l){if(l==undefined){l=a(a.uniform.elements)}l=a(l);l.each(function(){var n=a(this);if(n.is("select")){var m=n.siblings("span");var p=n.parent("div");p.removeClass(k.hoverClass+" "+k.focusClass+" "+k.activeClass);m.html(n.find(":selected").html());if(n.is(":disabled")){p.addClass(k.disabledClass)}else{p.removeClass(k.disabledClass)}}else{if(n.is(":checkbox")){var m=n.closest("span");var p=n.closest("div");p.removeClass(k.hoverClass+" "+k.focusClass+" "+k.activeClass);m.removeClass(k.checkedClass);if(n.is(":checked")){m.addClass(k.checkedClass)}if(n.is(":disabled")){p.addClass(k.disabledClass)}else{p.removeClass(k.disabledClass)}}else{if(n.is(":radio")){var m=n.closest("span");var p=n.closest("div");p.removeClass(k.hoverClass+" "+k.focusClass+" "+k.activeClass);m.removeClass(k.checkedClass);if(n.is(":checked")){m.addClass(k.checkedClass)}if(n.is(":disabled")){p.addClass(k.disabledClass)}else{p.removeClass(k.disabledClass)}}else{if(n.is(":file")){var p=n.parent("div");var o=n.siblings(k.filenameClass);btnTag=n.siblings(k.fileBtnClass);p.removeClass(k.hoverClass+" "+k.focusClass+" "+k.activeClass);o.text(n.val());if(n.is(":disabled")){p.addClass(k.disabledClass)}else{p.removeClass(k.disabledClass)}}else{if(n.is(":submit")||n.is(":reset")||n.is("button")||n.is("a")||l.is("input[type=button]")){var p=n.closest("div");p.removeClass(k.hoverClass+" "+k.focusClass+" "+k.activeClass);if(n.is(":disabled")){p.addClass(k.disabledClass)}else{p.removeClass(k.disabledClass)}}}}}}})};return this.each(function(){if(a.support.selectOpacity){var l=a(this);if(l.is("select")){if(l.attr("multiple")!=true){if(l.attr("size")==undefined||l.attr("size")<=1){e(l)}}}else{if(l.is(":checkbox")){f(l)}else{if(l.is(":radio")){c(l)}else{if(l.is(":file")){h(l)}else{if(l.is(":text, :password, input[type='email']")){j(l)}else{if(l.is("textarea")){g(l)}else{if(l.is("a")||l.is(":submit")||l.is(":reset")||l.is("button")||l.is("input[type=button]")){i(l)}}}}}}}}})}})(jQuery);

/*
 * jQuery UI Timepicker 0.2.9
 *
 * Copyright 2010-2011, Francois Gelinas
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://fgelinas.com/code/timepicker
 *
 * Depends:
 *	jquery.ui.core.js
 *  jquery.ui.position.js (only if position settngs are used)
 *
 * Change version 0.1.0 - moved the t-rex up here
 *
                                                  ____
       ___                                      .-~. /_"-._
      `-._~-.                                  / /_ "~o\  :Y
          \  \                                / : \~x.  ` ')
           ]  Y                              /  |  Y< ~-.__j
          /   !                        _.--~T : l  l<  /.-~
         /   /                 ____.--~ .   ` l /~\ \<|Y
        /   /             .-~~"        /| .    ',-~\ \L|
       /   /             /     .^   \ Y~Y \.^>/l_   "--'
      /   Y           .-"(  .  l__  j_j l_/ /~_.-~    .
     Y    l          /    \  )    ~~~." / `/"~ / \.__/l_
     |     \     _.-"      ~-{__     l  :  l._Z~-.___.--~
     |      ~---~           /   ~~"---\_  ' __[>
     l  .                _.^   ___     _>-y~
      \  \     .      .-~   .-~   ~>--"  /
       \  ~---"            /     ./  _.-'
        "-.,_____.,_  _.--~\     _.-~
                    ~~     (   _}       -Row
                           `. ~(
                             )  \
                            /,`--'~\--'~\
                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                             ->T-Rex<-
*/

(function ($, undefined) {

    $.extend($.ui, { timepicker: { version: "0.2.9"} });

    var PROP_NAME = 'timepicker';
    var tpuuid = new Date().getTime();

    /* Time picker manager.
    Use the singleton instance of this class, $.timepicker, to interact with the time picker.
    Settings for (groups of) time pickers are maintained in an instance object,
    allowing multiple different settings on the same page. */

    function Timepicker() {
        this.debug = true; // Change this to true to start debugging
        this._curInst = null; // The current instance in use
        this._isInline = false; // true if the instance is displayed inline
        this._disabledInputs = []; // List of time picker inputs that have been disabled
        this._timepickerShowing = false; // True if the popup picker is showing , false if not
        this._inDialog = false; // True if showing within a "dialog", false if not
        this._dialogClass = 'ui-timepicker-dialog'; // The name of the dialog marker class
        this._mainDivId = 'ui-timepicker-div'; // The ID of the main timepicker division
        this._inlineClass = 'ui-timepicker-inline'; // The name of the inline marker class
        this._currentClass = 'ui-timepicker-current'; // The name of the current hour / minutes marker class
        this._dayOverClass = 'ui-timepicker-days-cell-over'; // The name of the day hover marker class

        this.regional = []; // Available regional settings, indexed by language code
        this.regional[''] = { // Default regional settings
            hourText: 'Hour',           // Display text for hours section
            minuteText: 'Minute',       // Display text for minutes link
            amPmText: ['AM', 'PM'],     // Display text for AM PM
            closeButtonText: 'Done',        // Text for the confirmation button (ok button)
            nowButtonText: 'Now',           // Text for the now button
            deselectButtonText: 'Deselect'  // Text for the deselect button
        };
        this._defaults = { // Global defaults for all the time picker instances
            showOn: 'focus',    // 'focus' for popup on focus,
                                // 'button' for trigger button, or 'both' for either (not yet implemented)
            button: null,                   // 'button' element that will trigger the timepicker
            showAnim: 'fadeIn',             // Name of jQuery animation for popup
            showOptions: {},                // Options for enhanced animations
            appendText: '',                 // Display text following the input box, e.g. showing the format

            beforeShow: null,               // Define a callback function executed before the timepicker is shown
            onSelect: null,                 // Define a callback function when a hour / minutes is selected
            onClose: null,                  // Define a callback function when the timepicker is closed

            timeSeparator: ':',             // The character to use to separate hours and minutes.
            periodSeparator: ' ',           // The character to use to separate the time from the time period.
            showPeriod: false,              // Define whether or not to show AM/PM with selected time
            showPeriodLabels: true,         // Show the AM/PM labels on the left of the time picker
            showLeadingZero: true,          // Define whether or not to show a leading zero for hours < 10. [true/false]
            showMinutesLeadingZero: true,   // Define whether or not to show a leading zero for minutes < 10.
            altField: '',                   // Selector for an alternate field to store selected time into
            defaultTime: 'now',             // Used as default time when input field is empty or for inline timePicker
                                            // (set to 'now' for the current time, '' for no highlighted time)
            myPosition: 'left top',         // Position of the dialog relative to the input.
                                            // see the position utility for more info : http://jqueryui.com/demos/position/
            atPosition: 'left bottom',      // Position of the input element to match
                                            // Note : if the position utility is not loaded, the timepicker will attach left top to left bottom
            //NEW: 2011-02-03
            onHourShow: null,			    // callback for enabling / disabling on selectable hours  ex : function(hour) { return true; }
            onMinuteShow: null,             // callback for enabling / disabling on time selection  ex : function(hour,minute) { return true; }

            hours: {
                starts: 0,                  // first displayed hour
                ends: 23                    // last displayed hour
            },
            minutes: {
                starts: 0,                  // first displayed minute
                ends: 55,                   // last displayed minute
                interval: 5                 // interval of displayed minutes
            },
            rows: 4,                        // number of rows for the input tables, minimum 2, makes more sense if you use multiple of 2
            // 2011-08-05 0.2.4
            showHours: true,                // display the hours section of the dialog
            showMinutes: true,              // display the minute section of the dialog
            optionalMinutes: false,         // optionally parse inputs of whole hours with minutes omitted
						
            // buttons
            showCloseButton: false,         // shows an OK button to confirm the edit
            showNowButton: false,           // Shows the 'now' button
            showDeselectButton: false       // Shows the deselect time button

        };
        $.extend(this._defaults, this.regional['']);

        this.tpDiv = $('<div id="' + this._mainDivId + '" class="ui-timepicker ui-widget ui-helper-clearfix ui-corner-all " style="display: none"></div>');
    }

    $.extend(Timepicker.prototype, {
        /* Class name added to elements to indicate already configured with a time picker. */
        markerClassName: 'hasTimepicker',

        /* Debug logging (if enabled). */
        log: function () {
            if (this.debug)
                console.log.apply('', arguments);
        },

        _widgetTimepicker: function () {
            return this.tpDiv;
        },

        /* Override the default settings for all instances of the time picker.
        @param  settings  object - the new settings to use as defaults (anonymous object)
        @return the manager object */
        setDefaults: function (settings) {
            extendRemove(this._defaults, settings || {});
            return this;
        },

        /* Attach the time picker to a jQuery selection.
        @param  target    element - the target input field or division or span
        @param  settings  object - the new settings to use for this time picker instance (anonymous) */
        _attachTimepicker: function (target, settings) {
            // check for settings on the control itself - in namespace 'time:'
            var inlineSettings = null;
            for (var attrName in this._defaults) {
                var attrValue = target.getAttribute('time:' + attrName);
                if (attrValue) {
                    inlineSettings = inlineSettings || {};
                    try {
                        inlineSettings[attrName] = eval(attrValue);
                    } catch (err) {
                        inlineSettings[attrName] = attrValue;
                    }
                }
            }
            var nodeName = target.nodeName.toLowerCase();
            var inline = (nodeName == 'div' || nodeName == 'span');

            if (!target.id) {
                this.uuid += 1;
                target.id = 'tp' + this.uuid;
            }
            var inst = this._newInst($(target), inline);
            inst.settings = $.extend({}, settings || {}, inlineSettings || {});
            if (nodeName == 'input') {
                this._connectTimepicker(target, inst);
                // init inst.hours and inst.minutes from the input value
                this._setTimeFromField(inst);
            } else if (inline) {
                this._inlineTimepicker(target, inst);
            }


        },

        /* Create a new instance object. */
        _newInst: function (target, inline) {
            var id = target[0].id.replace(/([^A-Za-z0-9_-])/g, '\\\\$1'); // escape jQuery meta chars
            return {
                id: id, input: target, // associated target
                inline: inline, // is timepicker inline or not :
                tpDiv: (!inline ? this.tpDiv : // presentation div
                    $('<div class="' + this._inlineClass + ' ui-timepicker ui-widget  ui-helper-clearfix"></div>'))
            };
        },

        /* Attach the time picker to an input field. */
        _connectTimepicker: function (target, inst) {
            var input = $(target);
            inst.append = $([]);
            inst.trigger = $([]);
            if (input.hasClass(this.markerClassName)) { return; }
            this._attachments(input, inst);
            input.addClass(this.markerClassName).
                keydown(this._doKeyDown).
                keyup(this._doKeyUp).
                bind("setData.timepicker", function (event, key, value) {
                    inst.settings[key] = value;
                }).
                bind("getData.timepicker", function (event, key) {
                    return this._get(inst, key);
                });
            $.data(target, PROP_NAME, inst);
        },

        /* Handle keystrokes. */
        _doKeyDown: function (event) {
            var inst = $.timepicker._getInst(event.target);
            var handled = true;
            inst._keyEvent = true;
            if ($.timepicker._timepickerShowing) {
                switch (event.keyCode) {
                    case 9: $.timepicker._hideTimepicker();
                        handled = false;
                        break; // hide on tab out
                    case 13:
                        $.timepicker._updateSelectedValue(inst);
                        $.timepicker._hideTimepicker();
                            
						return false; // don't submit the form
						break; // select the value on enter
                    case 27: $.timepicker._hideTimepicker();
                        break; // hide on escape
                    default: handled = false;
                }
            }
            else if (event.keyCode == 36 && event.ctrlKey) { // display the time picker on ctrl+home
                $.timepicker._showTimepicker(this);
            }
            else {
                handled = false;
            }
            if (handled) {
                event.preventDefault();
                event.stopPropagation();
            }
        },

        /* Update selected time on keyUp */
        /* Added verion 0.0.5 */
        _doKeyUp: function (event) {
            var inst = $.timepicker._getInst(event.target);
            $.timepicker._setTimeFromField(inst);
            $.timepicker._updateTimepicker(inst);
        },

        /* Make attachments based on settings. */
        _attachments: function (input, inst) {
            var appendText = this._get(inst, 'appendText');
            var isRTL = this._get(inst, 'isRTL');
            if (inst.append) { inst.append.remove(); }
            if (appendText) {
                inst.append = $('<span class="' + this._appendClass + '">' + appendText + '</span>');
                input[isRTL ? 'before' : 'after'](inst.append);
            }
            input.unbind('focus.timepicker', this._showTimepicker);
            if (inst.trigger) { inst.trigger.remove(); }

            var showOn = this._get(inst, 'showOn');
            if (showOn == 'focus' || showOn == 'both') { // pop-up time picker when in the marked field
                input.bind("focus.timepicker", this._showTimepicker);
            }
            if (showOn == 'button' || showOn == 'both') { // pop-up time picker when 'button' element is clicked
                var button = this._get(inst, 'button');
                $(button).bind("click.timepicker", function () {
                    if ($.timepicker._timepickerShowing && $.timepicker._lastInput == input[0]) { $.timepicker._hideTimepicker(); }
                    else { $.timepicker._showTimepicker(input[0]); }
                    return false;
                });

            }
        },


        /* Attach an inline time picker to a div. */
        _inlineTimepicker: function(target, inst) {
            var divSpan = $(target);
            if (divSpan.hasClass(this.markerClassName))
                return;
            divSpan.addClass(this.markerClassName).append(inst.tpDiv).
                bind("setData.timepicker", function(event, key, value){
                    inst.settings[key] = value;
                }).bind("getData.timepicker", function(event, key){
                    return this._get(inst, key);
                });
            $.data(target, PROP_NAME, inst);

            this._setTimeFromField(inst);
            this._updateTimepicker(inst);
            inst.tpDiv.show();
        },

        /* Pop-up the time picker for a given input field.
        @param  input  element - the input field attached to the time picker or
        event - if triggered by focus */
        _showTimepicker: function (input) {
            input = input.target || input;
            if (input.nodeName.toLowerCase() != 'input') { input = $('input', input.parentNode)[0]; } // find from button/image trigger
            if ($.timepicker._isDisabledTimepicker(input) || $.timepicker._lastInput == input) { return; } // already here

            // fix v 0.0.8 - close current timepicker before showing another one
            $.timepicker._hideTimepicker();

            var inst = $.timepicker._getInst(input);
            if ($.timepicker._curInst && $.timepicker._curInst != inst) {
                $.timepicker._curInst.tpDiv.stop(true, true);
            }
            var beforeShow = $.timepicker._get(inst, 'beforeShow');
            extendRemove(inst.settings, (beforeShow ? beforeShow.apply(input, [input, inst]) : {}));
            inst.lastVal = null;
            $.timepicker._lastInput = input;

            $.timepicker._setTimeFromField(inst);

            // calculate default position
            if ($.timepicker._inDialog) { input.value = ''; } // hide cursor
            if (!$.timepicker._pos) { // position below input
                $.timepicker._pos = $.timepicker._findPos(input);
                $.timepicker._pos[1] += input.offsetHeight; // add the height
            }
            var isFixed = false;
            $(input).parents().each(function () {
                isFixed |= $(this).css('position') == 'fixed';
                return !isFixed;
            });
            if (isFixed && $.browser.opera) { // correction for Opera when fixed and scrolled
                $.timepicker._pos[0] -= document.documentElement.scrollLeft;
                $.timepicker._pos[1] -= document.documentElement.scrollTop;
            }

            var offset = { left: $.timepicker._pos[0], top: $.timepicker._pos[1] };

            $.timepicker._pos = null;
            // determine sizing offscreen
            inst.tpDiv.css({ position: 'absolute', display: 'block', top: '-1000px' });
            $.timepicker._updateTimepicker(inst);


            // position with the ui position utility, if loaded
            if ( ( ! inst.inline )  && ( typeof $.ui.position == 'object' ) ) {
                inst.tpDiv.position({
                    of: inst.input,
                    my: $.timepicker._get( inst, 'myPosition' ),
                    at: $.timepicker._get( inst, 'atPosition' ),
                    // offset: $( "#offset" ).val(),
                    // using: using,
                    collision: 'flip'
                });
                var offset = inst.tpDiv.offset();
                $.timepicker._pos = [offset.top, offset.left];
            }


            // reset clicked state
            inst._hoursClicked = false;
            inst._minutesClicked = false;

            // fix width for dynamic number of time pickers
            // and adjust position before showing
            offset = $.timepicker._checkOffset(inst, offset, isFixed);
            inst.tpDiv.css({ position: ($.timepicker._inDialog && $.blockUI ?
			    'static' : (isFixed ? 'fixed' : 'absolute')), display: 'none',
                left: offset.left + 'px', top: offset.top + 'px'
            });
            if ( ! inst.inline ) {
                var showAnim = $.timepicker._get(inst, 'showAnim');
                var duration = $.timepicker._get(inst, 'duration');

                var postProcess = function () {
                    $.timepicker._timepickerShowing = true;
                    var borders = $.timepicker._getBorders(inst.tpDiv);
                    inst.tpDiv.find('iframe.ui-timepicker-cover'). // IE6- only
					css({ left: -borders[0], top: -borders[1],
					    width: inst.tpDiv.outerWidth(), height: inst.tpDiv.outerHeight()
					});
                };

                // Fixed the zIndex problem for real (I hope) - FG - v 0.2.9
                inst.tpDiv.css('zIndex', $.timepicker._getZIndex(input) +1);

                if ($.effects && $.effects[showAnim]) {
                    inst.tpDiv.show(showAnim, $.timepicker._get(inst, 'showOptions'), duration, postProcess);
                }
                else {
                    inst.tpDiv[showAnim || 'show']((showAnim ? duration : null), postProcess);
                }
                if (!showAnim || !duration) { postProcess(); }
                if (inst.input.is(':visible') && !inst.input.is(':disabled')) { inst.input.focus(); }
                $.timepicker._curInst = inst;
            }
        },

        // This is a copy of the zIndex function of UI core 1.8.??
        // Copied in the timepicker to stay backward compatible.
        _getZIndex: function (target) {
            var elem = $( target ), position, value;
            while ( elem.length && elem[ 0 ] !== document ) {
                position = elem.css( "position" );
                if ( position === "absolute" || position === "relative" || position === "fixed" ) {
                    value = parseInt( elem.css( "zIndex" ), 10 );
                    if ( !isNaN( value ) && value !== 0 ) {
                        return value;
                    }
                }
                elem = elem.parent();
            }
        },

        /* Generate the time picker content. */
        _updateTimepicker: function (inst) {
            inst.tpDiv.empty().append(this._generateHTML(inst));
            this._rebindDialogEvents(inst);

        },

        _rebindDialogEvents: function (inst) {
            var borders = $.timepicker._getBorders(inst.tpDiv),
                self = this;
            inst.tpDiv
			.find('iframe.ui-timepicker-cover') // IE6- only
				.css({ left: -borders[0], top: -borders[1],
				    width: inst.tpDiv.outerWidth(), height: inst.tpDiv.outerHeight()
				})
			.end()
            // after the picker html is appended bind the click & double click events (faster in IE this way
            // then letting the browser interpret the inline events)
            // the binding for the minute cells also exists in _updateMinuteDisplay
            .find('.ui-timepicker-minute-cell')
                .unbind()
                .bind("click", { fromDoubleClick:false }, $.proxy($.timepicker.selectMinutes, this))
                .bind("dblclick", { fromDoubleClick:true }, $.proxy($.timepicker.selectMinutes, this))
            .end()
            .find('.ui-timepicker-hour-cell')
                .unbind()
                .bind("click", { fromDoubleClick:false }, $.proxy($.timepicker.selectHours, this))
                .bind("dblclick", { fromDoubleClick:true }, $.proxy($.timepicker.selectHours, this))
            .end()
			.find('.ui-timepicker td a')
                .unbind()
				.bind('mouseout', function () {
				    $(this).removeClass('ui-state-hover');
				    if (this.className.indexOf('ui-timepicker-prev') != -1) $(this).removeClass('ui-timepicker-prev-hover');
				    if (this.className.indexOf('ui-timepicker-next') != -1) $(this).removeClass('ui-timepicker-next-hover');
				})
				.bind('mouseover', function () {
				    if ( ! self._isDisabledTimepicker(inst.inline ? inst.tpDiv.parent()[0] : inst.input[0])) {
				        $(this).parents('.ui-timepicker-calendar').find('a').removeClass('ui-state-hover');
				        $(this).addClass('ui-state-hover');
				        if (this.className.indexOf('ui-timepicker-prev') != -1) $(this).addClass('ui-timepicker-prev-hover');
				        if (this.className.indexOf('ui-timepicker-next') != -1) $(this).addClass('ui-timepicker-next-hover');
				    }
				})
			.end()
			.find('.' + this._dayOverClass + ' a')
				.trigger('mouseover')
			.end()
            .find('.ui-timepicker-now').bind("click",function(e) {
                    $.timepicker.selectNow(e);
            }).end()
            .find('.ui-timepicker-deselect').bind("click",function(e) {
                    $.timepicker.deselectTime(e);
            }).end()
            .find('.ui-timepicker-close').bind("click",function(e) {
                    $.timepicker._hideTimepicker();
            }).end();
        },

        /* Generate the HTML for the current state of the time picker. */
        _generateHTML: function (inst) {

            var h, m, row, col, html, hoursHtml, minutesHtml = '',
                showPeriod = (this._get(inst, 'showPeriod') == true),
                showPeriodLabels = (this._get(inst, 'showPeriodLabels') == true),
                showLeadingZero = (this._get(inst, 'showLeadingZero') == true),
                showHours = (this._get(inst, 'showHours') == true),
                showMinutes = (this._get(inst, 'showMinutes') == true),
                amPmText = this._get(inst, 'amPmText'),
                rows = this._get(inst, 'rows'),
                amRows = 0,
                pmRows = 0,
                amItems = 0,
                pmItems = 0,
                amFirstRow = 0,
                pmFirstRow = 0,
                hours = Array(),
                hours_options = this._get(inst, 'hours'),
                hoursPerRow = null,
                hourCounter = 0,
                hourLabel = this._get(inst, 'hourText'),
                showCloseButton = this._get(inst, 'showCloseButton'),
                closeButtonText = this._get(inst, 'closeButtonText'),
                showNowButton = this._get(inst, 'showNowButton'),
                nowButtonText = this._get(inst, 'nowButtonText'),
                showDeselectButton = this._get(inst, 'showDeselectButton'),
                deselectButtonText = this._get(inst, 'deselectButtonText'),
                showButtonPanel = showCloseButton || showNowButton || showDeselectButton;
            


            // prepare all hours and minutes, makes it easier to distribute by rows
            for (h = hours_options.starts; h <= hours_options.ends; h++) {
                hours.push (h);
            }
            hoursPerRow = Math.ceil(hours.length / rows); // always round up

            if (showPeriodLabels) {
                for (hourCounter = 0; hourCounter < hours.length; hourCounter++) {
                    if (hours[hourCounter] < 12) {
                        amItems++;
                    }
                    else {
                        pmItems++;
                    }
                }
                hourCounter = 0; 

                amRows = Math.floor(amItems / hours.length * rows);
                pmRows = Math.floor(pmItems / hours.length * rows);

                // assign the extra row to the period that is more densly populated
                if (rows != amRows + pmRows) {
                    // Make sure: AM Has Items and either PM Does Not, AM has no rows yet, or AM is more dense
                    if (amItems && (!pmItems || !amRows || (pmRows && amItems / amRows >= pmItems / pmRows))) {
                        amRows++;
                    } else {
                        pmRows++;
                    }
                }
                amFirstRow = Math.min(amRows, 1);
                pmFirstRow = amRows + 1;
                hoursPerRow = Math.ceil(Math.max(amItems / amRows, pmItems / pmRows));
            }


            html = '<table class="ui-timepicker-table ui-widget-content ui-corner-all"><tr>';

            if (showHours) {

                html += '<td class="ui-timepicker-hours">' +
                        '<div class="ui-timepicker-title ui-widget-header ui-helper-clearfix ui-corner-all">' +
                        hourLabel +
                        '</div>' +
                        '<table class="ui-timepicker">';

                for (row = 1; row <= rows; row++) {
                    html += '<tr>';
                    // AM
                    if (row == amFirstRow && showPeriodLabels) {
                        html += '<th rowspan="' + amRows.toString() + '" class="periods" scope="row">' + amPmText[0] + '</th>';
                    }
                    // PM
                    if (row == pmFirstRow && showPeriodLabels) {
                        html += '<th rowspan="' + pmRows.toString() + '" class="periods" scope="row">' + amPmText[1] + '</th>';
                    }
                    for (col = 1; col <= hoursPerRow; col++) {
                        if (showPeriodLabels && row < pmFirstRow && hours[hourCounter] >= 12) {
                            html += this._generateHTMLHourCell(inst, undefined, showPeriod, showLeadingZero);
                        } else {
                            html += this._generateHTMLHourCell(inst, hours[hourCounter], showPeriod, showLeadingZero);
                            hourCounter++;
                        }
                    }
                    html += '</tr>';
                }
                html += '</tr></table>' + // Close the hours cells table
                        '</td>';          // Close the Hour td
            }

            if (showMinutes) {
                html += '<td class="ui-timepicker-minutes">';
                html += this._generateHTMLMinutes(inst);
                html += '</td>';
            }
            
            html += '</tr>';


            if (showButtonPanel) {
                var buttonPanel = '<tr><td colspan="3"><div class="ui-timepicker-buttonpane ui-widget-content">';
                if (showNowButton) {
                    buttonPanel += '<button type="button" class="ui-timepicker-now ui-state-default ui-corner-all" '
                                   + ' data-timepicker-instance-id="#' + inst.id.replace(/\\\\/g,"\\") + '" >'
                                   + nowButtonText + '</button>';
                }
                if (showDeselectButton) {
                    buttonPanel += '<button type="button" class="ui-timepicker-deselect ui-state-default ui-corner-all" '
                                   + ' data-timepicker-instance-id="#' + inst.id.replace(/\\\\/g,"\\") + '" >'
                                   + deselectButtonText + '</button>';
                }
                if (showCloseButton) {
                    buttonPanel += '<button type="button" class="ui-timepicker-close ui-state-default ui-corner-all" '
                                   + ' data-timepicker-instance-id="#' + inst.id.replace(/\\\\/g,"\\") + '" >'
                                   + closeButtonText + '</button>';
                }

                html += buttonPanel + '</div></td></tr>';
            }
            html += '</table>';

             /* IE6 IFRAME FIX (taken from datepicker 1.5.3, fixed in 0.1.2 */
            html += ($.browser.msie && parseInt($.browser.version,10) < 7 && !inst.inline ?
                '<iframe src="javascript:false;" class="ui-timepicker-cover" frameborder="0"></iframe>' : '');

            return html;
        },

        /* Special function that update the minutes selection in currently visible timepicker
         * called on hour selection when onMinuteShow is defined  */
        _updateMinuteDisplay: function (inst) {
            var newHtml = this._generateHTMLMinutes(inst);
            inst.tpDiv.find('td.ui-timepicker-minutes').html(newHtml);
            this._rebindDialogEvents(inst);
                // after the picker html is appended bind the click & double click events (faster in IE this way
                // then letting the browser interpret the inline events)
                // yes I know, duplicate code, sorry
/*                .find('.ui-timepicker-minute-cell')
                    .bind("click", { fromDoubleClick:false }, $.proxy($.timepicker.selectMinutes, this))
                    .bind("dblclick", { fromDoubleClick:true }, $.proxy($.timepicker.selectMinutes, this));
*/

        },

        /*
         * Generate the minutes table
         * This is separated from the _generateHTML function because is can be called separately (when hours changes)
         */
        _generateHTMLMinutes: function (inst) {

            var m, row, html = '',
                rows = this._get(inst, 'rows'),
                minutes = Array(),
                minutes_options = this._get(inst, 'minutes'),
                minutesPerRow = null,
                minuteCounter = 0,
                showMinutesLeadingZero = (this._get(inst, 'showMinutesLeadingZero') == true),
                onMinuteShow = this._get(inst, 'onMinuteShow'),
                minuteLabel = this._get(inst, 'minuteText');

            if ( ! minutes_options.starts) {
                minutes_options.starts = 0;
            }
            if ( ! minutes_options.ends) {
                minutes_options.ends = 59;
            }
            for (m = minutes_options.starts; m <= minutes_options.ends; m += minutes_options.interval) {
                minutes.push(m);
            }
            minutesPerRow = Math.round(minutes.length / rows + 0.49); // always round up

            /*
             * The minutes table
             */
            // if currently selected minute is not enabled, we have a problem and need to select a new minute.
            if (onMinuteShow &&
                (onMinuteShow.apply((inst.input ? inst.input[0] : null), [inst.hours , inst.minutes]) == false) ) {
                // loop minutes and select first available
                for (minuteCounter = 0; minuteCounter < minutes.length; minuteCounter += 1) {
                    m = minutes[minuteCounter];
                    if (onMinuteShow.apply((inst.input ? inst.input[0] : null), [inst.hours, m])) {
                        inst.minutes = m;
                        break;
                    }
                }
            }



            html += '<div class="ui-timepicker-title ui-widget-header ui-helper-clearfix ui-corner-all">' +
                    minuteLabel +
                    '</div>' +
                    '<table class="ui-timepicker">';
            
            minuteCounter = 0;
            for (row = 1; row <= rows; row++) {
                html += '<tr>';
                while (minuteCounter < row * minutesPerRow) {
                    var m = minutes[minuteCounter];
                    var displayText = '';
                    if (m !== undefined ) {
                        displayText = (m < 10) && showMinutesLeadingZero ? "0" + m.toString() : m.toString();
                    }
                    html += this._generateHTMLMinuteCell(inst, m, displayText);
                    minuteCounter++;
                }
                html += '</tr>';
            }

            html += '</table>';

            return html;
        },

        /* Generate the content of a "Hour" cell */
        _generateHTMLHourCell: function (inst, hour, showPeriod, showLeadingZero) {

            var displayHour = hour;
            if ((hour > 12) && showPeriod) {
                displayHour = hour - 12;
            }
            if ((displayHour == 0) && showPeriod) {
                displayHour = 12;
            }
            if ((displayHour < 10) && showLeadingZero) {
                displayHour = '0' + displayHour;
            }

            var html = "";
            var enabled = true;
            var onHourShow = this._get(inst, 'onHourShow');		//custom callback

            if (hour == undefined) {
                html = '<td><span class="ui-state-default ui-state-disabled">&nbsp;</span></td>';
                return html;
            }

            if (onHourShow) {
            	enabled = onHourShow.apply((inst.input ? inst.input[0] : null), [hour]);
            }

            if (enabled) {
                html = '<td class="ui-timepicker-hour-cell" data-timepicker-instance-id="#' + inst.id.replace(/\\\\/g,"\\") + '" data-hour="' + hour.toString() + '">' +
                   '<a class="ui-state-default ' +
                   (hour == inst.hours ? 'ui-state-active' : '') +
                   '">' +
                   displayHour.toString() +
                   '</a></td>';
            }
            else {
            	html =
            		'<td>' +
		                '<span class="ui-state-default ui-state-disabled ' +
		                (hour == inst.hours ? ' ui-state-active ' : ' ') +
		                '">' +
		                displayHour.toString() +
		                '</span>' +
		            '</td>';
            }
            return html;
        },

        /* Generate the content of a "Hour" cell */
        _generateHTMLMinuteCell: function (inst, minute, displayText) {
        	 var html = "";
             var enabled = true;
             var onMinuteShow = this._get(inst, 'onMinuteShow');		//custom callback
             if (onMinuteShow) {
            	 //NEW: 2011-02-03  we should give the hour as a parameter as well!
             	enabled = onMinuteShow.apply((inst.input ? inst.input[0] : null), [inst.hours,minute]);		//trigger callback
             }

             if (minute == undefined) {
                 html = '<td><span class="ui-state-default ui-state-disabled">&nbsp;</span></td>';
                 return html;
             }

             if (enabled) {
	             html = '<td class="ui-timepicker-minute-cell" data-timepicker-instance-id="#' + inst.id.replace(/\\\\/g,"\\") + '" data-minute="' + minute.toString() + '" >' +
	                   '<a class="ui-state-default ' +
	                   (minute == inst.minutes ? 'ui-state-active' : '') +
	                   '" >' +
	                   displayText +
	                   '</a></td>';
             }
             else {

            	html = '<td>' +
	                 '<span class="ui-state-default ui-state-disabled" >' +
	                 	displayText +
	                 '</span>' +
                 '</td>';
             }
             return html;
        },


        /* Enable the date picker to a jQuery selection.
           @param  target    element - the target input field or division or span */
        _enableTimepicker: function(target) {
            var $target = $(target),
                target_id = $target.attr('id'),
                inst = $.data(target, PROP_NAME);
            
            if (!$target.hasClass(this.markerClassName)) {
                return;
            }
            var nodeName = target.nodeName.toLowerCase();
            if (nodeName == 'input') {
                target.disabled = false;
                inst.trigger.filter('button').
                    each(function() { this.disabled = false; }).end();
            }
            else if (nodeName == 'div' || nodeName == 'span') {
                var inline = $target.children('.' + this._inlineClass);
                inline.children().removeClass('ui-state-disabled');
            }
            this._disabledInputs = $.map(this._disabledInputs,
                function(value) { return (value == target_id ? null : value); }); // delete entry
        },

        /* Disable the time picker to a jQuery selection.
           @param  target    element - the target input field or division or span */
        _disableTimepicker: function(target) {
            var $target = $(target);
            var inst = $.data(target, PROP_NAME);
            if (!$target.hasClass(this.markerClassName)) {
                return;
            }
            var nodeName = target.nodeName.toLowerCase();
            if (nodeName == 'input') {
                target.disabled = true;

                inst.trigger.filter('button').
                    each(function() { this.disabled = true; }).end();

            }
            else if (nodeName == 'div' || nodeName == 'span') {
                var inline = $target.children('.' + this._inlineClass);
                inline.children().addClass('ui-state-disabled');
            }
            this._disabledInputs = $.map(this._disabledInputs,
                function(value) { return (value == target ? null : value); }); // delete entry
            this._disabledInputs[this._disabledInputs.length] = $target.attr('id');
        },

        /* Is the first field in a jQuery collection disabled as a timepicker?
        @param  target_id element - the target input field or division or span
        @return boolean - true if disabled, false if enabled */
        _isDisabledTimepicker: function (target_id) {
            if ( ! target_id) { return false; }
            for (var i = 0; i < this._disabledInputs.length; i++) {
                if (this._disabledInputs[i] == target_id) { return true; }
            }
            return false;
        },

        /* Check positioning to remain on screen. */
        _checkOffset: function (inst, offset, isFixed) {
            var tpWidth = inst.tpDiv.outerWidth();
            var tpHeight = inst.tpDiv.outerHeight();
            var inputWidth = inst.input ? inst.input.outerWidth() : 0;
            var inputHeight = inst.input ? inst.input.outerHeight() : 0;
            var viewWidth = document.documentElement.clientWidth + $(document).scrollLeft();
            var viewHeight = document.documentElement.clientHeight + $(document).scrollTop();

            offset.left -= (this._get(inst, 'isRTL') ? (tpWidth - inputWidth) : 0);
            offset.left -= (isFixed && offset.left == inst.input.offset().left) ? $(document).scrollLeft() : 0;
            offset.top -= (isFixed && offset.top == (inst.input.offset().top + inputHeight)) ? $(document).scrollTop() : 0;

            // now check if datepicker is showing outside window viewport - move to a better place if so.
            offset.left -= Math.min(offset.left, (offset.left + tpWidth > viewWidth && viewWidth > tpWidth) ?
			Math.abs(offset.left + tpWidth - viewWidth) : 0);
            offset.top -= Math.min(offset.top, (offset.top + tpHeight > viewHeight && viewHeight > tpHeight) ?
			Math.abs(tpHeight + inputHeight) : 0);

            return offset;
        },

        /* Find an object's position on the screen. */
        _findPos: function (obj) {
            var inst = this._getInst(obj);
            var isRTL = this._get(inst, 'isRTL');
            while (obj && (obj.type == 'hidden' || obj.nodeType != 1)) {
                obj = obj[isRTL ? 'previousSibling' : 'nextSibling'];
            }
            var position = $(obj).offset();
            return [position.left, position.top];
        },

        /* Retrieve the size of left and top borders for an element.
        @param  elem  (jQuery object) the element of interest
        @return  (number[2]) the left and top borders */
        _getBorders: function (elem) {
            var convert = function (value) {
                return { thin: 1, medium: 2, thick: 3}[value] || value;
            };
            return [parseFloat(convert(elem.css('border-left-width'))),
			parseFloat(convert(elem.css('border-top-width')))];
        },


        /* Close time picker if clicked elsewhere. */
        _checkExternalClick: function (event) {
            if (!$.timepicker._curInst) { return; }
            var $target = $(event.target);
            if ($target[0].id != $.timepicker._mainDivId &&
				$target.parents('#' + $.timepicker._mainDivId).length == 0 &&
				!$target.hasClass($.timepicker.markerClassName) &&
				!$target.hasClass($.timepicker._triggerClass) &&
				$.timepicker._timepickerShowing && !($.timepicker._inDialog && $.blockUI))
                $.timepicker._hideTimepicker();
        },

        /* Hide the time picker from view.
        @param  input  element - the input field attached to the time picker */
        _hideTimepicker: function (input) {
            var inst = this._curInst;
            if (!inst || (input && inst != $.data(input, PROP_NAME))) { return; }
            if (this._timepickerShowing) {
                var showAnim = this._get(inst, 'showAnim');
                var duration = this._get(inst, 'duration');
                var postProcess = function () {
                    $.timepicker._tidyDialog(inst);
                    this._curInst = null;
                };
                if ($.effects && $.effects[showAnim]) {
                    inst.tpDiv.hide(showAnim, $.timepicker._get(inst, 'showOptions'), duration, postProcess);
                }
                else {
                    inst.tpDiv[(showAnim == 'slideDown' ? 'slideUp' :
					    (showAnim == 'fadeIn' ? 'fadeOut' : 'hide'))]((showAnim ? duration : null), postProcess);
                }
                if (!showAnim) { postProcess(); }
                var onClose = this._get(inst, 'onClose');
                if (onClose) {
                    onClose.apply(
                        (inst.input ? inst.input[0] : null),
					    [(inst.input ? inst.input.val() : ''), inst]);  // trigger custom callback
                }
                this._timepickerShowing = false;
                this._lastInput = null;
                if (this._inDialog) {
                    this._dialogInput.css({ position: 'absolute', left: '0', top: '-100px' });
                    if ($.blockUI) {
                        $.unblockUI();
                        $('body').append(this.tpDiv);
                    }
                }
                this._inDialog = false;
            }
        },



        /* Tidy up after a dialog display. */
        _tidyDialog: function (inst) {
            inst.tpDiv.removeClass(this._dialogClass).unbind('.ui-timepicker');
        },

        /* Retrieve the instance data for the target control.
        @param  target  element - the target input field or division or span
        @return  object - the associated instance data
        @throws  error if a jQuery problem getting data */
        _getInst: function (target) {
            try {
                return $.data(target, PROP_NAME);
            }
            catch (err) {
                throw 'Missing instance data for this timepicker';
            }
        },

        /* Get a setting value, defaulting if necessary. */
        _get: function (inst, name) {
            return inst.settings[name] !== undefined ?
			inst.settings[name] : this._defaults[name];
        },

        /* Parse existing time and initialise time picker. */
        _setTimeFromField: function (inst) {
            if (inst.input.val() == inst.lastVal) { return; }
            var defaultTime = this._get(inst, 'defaultTime');

            var timeToParse = defaultTime == 'now' ? this._getCurrentTimeRounded(inst) : defaultTime;
            if ((inst.inline == false) && (inst.input.val() != '')) { timeToParse = inst.input.val() }

            if (timeToParse instanceof Date) {
                inst.hours = timeToParse.getHours();
                inst.minutes = timeToParse.getMinutes();
            } else {
                var timeVal = inst.lastVal = timeToParse;
                if (timeToParse == '') {
                    inst.hours = -1;
                    inst.minutes = -1;
                } else {
                    var time = this.parseTime(inst, timeVal);
                    inst.hours = time.hours;
                    inst.minutes = time.minutes;
                }
            }


            $.timepicker._updateTimepicker(inst);
        },

        /* Update or retrieve the settings for an existing time picker.
           @param  target  element - the target input field or division or span
           @param  name    object - the new settings to update or
                           string - the name of the setting to change or retrieve,
                           when retrieving also 'all' for all instance settings or
                           'defaults' for all global defaults
           @param  value   any - the new value for the setting
                       (omit if above is an object or to retrieve a value) */
        _optionTimepicker: function(target, name, value) {
            var inst = this._getInst(target);
            if (arguments.length == 2 && typeof name == 'string') {
                return (name == 'defaults' ? $.extend({}, $.timepicker._defaults) :
                    (inst ? (name == 'all' ? $.extend({}, inst.settings) :
                    this._get(inst, name)) : null));
            }
            var settings = name || {};
            if (typeof name == 'string') {
                settings = {};
                settings[name] = value;
            }
            if (inst) {
                if (this._curInst == inst) {
                    this._hideTimepicker();
                }
                extendRemove(inst.settings, settings);
                this._updateTimepicker(inst);
            }
        },


        /* Set the time for a jQuery selection.
	    @param  target  element - the target input field or division or span
	    @param  time    String - the new time */
	    _setTimeTimepicker: function(target, time) {
		    var inst = this._getInst(target);
		    if (inst) {
			    this._setTime(inst, time);
    			this._updateTimepicker(inst);
	    		this._updateAlternate(inst, time);
		    }
	    },

        /* Set the time directly. */
        _setTime: function(inst, time, noChange) {
            var origHours = inst.hours;
            var origMinutes = inst.minutes;
            var time = this.parseTime(inst, time);
            inst.hours = time.hours;
            inst.minutes = time.minutes;

            if ((origHours != inst.hours || origMinutes != inst.minuts) && !noChange) {
                inst.input.trigger('change');
            }
            this._updateTimepicker(inst);
            this._updateSelectedValue(inst);
        },

        /* Return the current time, ready to be parsed, rounded to the closest 5 minute */
        _getCurrentTimeRounded: function (inst) {
            var currentTime = new Date(),
                currentMinutes = currentTime.getMinutes(),
                // round to closest 5
                adjustedMinutes = Math.round( currentMinutes / 5 ) * 5;
            currentTime.setMinutes(adjustedMinutes);
            return currentTime;
        },

        /*
        * Parse a time string into hours and minutes
        */
        parseTime: function (inst, timeVal) {
            var retVal = new Object();
            retVal.hours = -1;
            retVal.minutes = -1;

            var timeSeparator = this._get(inst, 'timeSeparator'),
                amPmText = this._get(inst, 'amPmText'),
                showHours = this._get(inst, 'showHours'),
                showMinutes = this._get(inst, 'showMinutes'),
                optionalMinutes = this._get(inst, 'optionalMinutes'),
                showPeriod = (this._get(inst, 'showPeriod') == true),
                p = timeVal.indexOf(timeSeparator);

            // check if time separator found
            if (p != -1) {
                retVal.hours = parseInt(timeVal.substr(0, p), 10);
                retVal.minutes = parseInt(timeVal.substr(p + 1), 10);
            }
            // check for hours only
            else if ( (showHours) && ( !showMinutes || optionalMinutes ) ) {
                retVal.hours = parseInt(timeVal, 10);
            }
            // check for minutes only
            else if ( ( ! showHours) && (showMinutes) ) {
                retVal.minutes = parseInt(timeVal, 10);
            }

            if (showHours) {
                var timeValUpper = timeVal.toUpperCase();
                if ((retVal.hours < 12) && (showPeriod) && (timeValUpper.indexOf(amPmText[1].toUpperCase()) != -1)) {
                    retVal.hours += 12;
                }
                // fix for 12 AM
                if ((retVal.hours == 12) && (showPeriod) && (timeValUpper.indexOf(amPmText[0].toUpperCase()) != -1)) {
                    retVal.hours = 0;
                }
            }
            
            return retVal;
        },

        selectNow: function(e) {

            var id = $(e.target).attr("data-timepicker-instance-id"),
                $target = $(id),
                inst = this._getInst($target[0]);

            //if (!inst || (input && inst != $.data(input, PROP_NAME))) { return; }
            var currentTime = new Date();
            inst.hours = currentTime.getHours();
            inst.minutes = currentTime.getMinutes();
            this._updateSelectedValue(inst);
            this._updateTimepicker(inst);
            this._hideTimepicker();
        },

        deselectTime: function(e) {
            var id = $(e.target).attr("data-timepicker-instance-id"),
                $target = $(id),
                inst = this._getInst($target[0]);
            inst.hours = -1;
            inst.minutes = -1;
            this._updateSelectedValue(inst);
            this._hideTimepicker();
        },


        selectHours: function (event) {
            var $td = $(event.currentTarget),
                id = $td.attr("data-timepicker-instance-id"),
                newHours = $td.attr("data-hour"),
                fromDoubleClick = event.data.fromDoubleClick,
                $target = $(id),
                inst = this._getInst($target[0]),
                showMinutes = (this._get(inst, 'showMinutes') == true);

            // don't select if disabled
            if ( $.timepicker._isDisabledTimepicker($target.attr('id')) ) { return false }

            $td.parents('.ui-timepicker-hours:first').find('a').removeClass('ui-state-active');
            $td.children('a').addClass('ui-state-active');
            inst.hours = newHours;

            // added for onMinuteShow callback
            var onMinuteShow = this._get(inst, 'onMinuteShow');
            if (onMinuteShow) {
                // this will trigger a callback on selected hour to make sure selected minute is allowed. 
                this._updateMinuteDisplay(inst);
            }

            this._updateSelectedValue(inst);

            inst._hoursClicked = true;
            if ((inst._minutesClicked) || (fromDoubleClick) || (showMinutes == false)) {
                $.timepicker._hideTimepicker();
            }
            // return false because if used inline, prevent the url to change to a hashtag
            return false;
        },

        selectMinutes: function (event) {
            var $td = $(event.currentTarget),
                id = $td.attr("data-timepicker-instance-id"),
                newMinutes = $td.attr("data-minute"),
                fromDoubleClick = event.data.fromDoubleClick,
                $target = $(id),
                inst = this._getInst($target[0]),
                showHours = (this._get(inst, 'showHours') == true);

            // don't select if disabled
            if ( $.timepicker._isDisabledTimepicker($target.attr('id')) ) { return false }

            $td.parents('.ui-timepicker-minutes:first').find('a').removeClass('ui-state-active');
            $td.children('a').addClass('ui-state-active');

            inst.minutes = newMinutes;
            this._updateSelectedValue(inst);

            inst._minutesClicked = true;
            if ((inst._hoursClicked) || (fromDoubleClick) || (showHours == false)) {
                $.timepicker._hideTimepicker();
                // return false because if used inline, prevent the url to change to a hashtag
                return false;
            }

            // return false because if used inline, prevent the url to change to a hashtag
            return false;
        },

        _updateSelectedValue: function (inst) {
            var newTime = this._getParsedTime(inst);
            if (inst.input) {
                inst.input.val(newTime);
                inst.input.trigger('change');
            }
            var onSelect = this._get(inst, 'onSelect');
            if (onSelect) { onSelect.apply((inst.input ? inst.input[0] : null), [newTime, inst]); } // trigger custom callback
            this._updateAlternate(inst, newTime);
            return newTime;
        },
        
        /* this function process selected time and return it parsed according to instance options */
        _getParsedTime: function(inst) {

            if (inst.hours == -1 && inst.minutes == -1) {
                return '';
            }

            if ((inst.hours < 0) || (inst.hours > 23)) { inst.hours = 12; }
            if ((inst.minutes < 0) || (inst.minutes > 59)) { inst.minutes = 0; }

            var period = "",
                showPeriod = (this._get(inst, 'showPeriod') == true),
                showLeadingZero = (this._get(inst, 'showLeadingZero') == true),
                showHours = (this._get(inst, 'showHours') == true),
                showMinutes = (this._get(inst, 'showMinutes') == true),
                optionalMinutes = (this._get(inst, 'optionalMinutes') == true),
                amPmText = this._get(inst, 'amPmText'),
                selectedHours = inst.hours ? inst.hours : 0,
                selectedMinutes = inst.minutes ? inst.minutes : 0,
                displayHours = selectedHours ? selectedHours : 0,
                parsedTime = '';

            if (showPeriod) { 
                if (inst.hours == 0) {
                    displayHours = 12;
                }
                if (inst.hours < 12) {
                    period = amPmText[0];
                }
                else {
                    period = amPmText[1];
                    if (displayHours > 12) {
                        displayHours -= 12;
                    }
                }
            }

            var h = displayHours.toString();
            if (showLeadingZero && (displayHours < 10)) { h = '0' + h; }

            var m = selectedMinutes.toString();
            if (selectedMinutes < 10) { m = '0' + m; }

            if (showHours) {
                parsedTime += h;
            }
            if (showHours && showMinutes && (!optionalMinutes || m != 0)) {
                parsedTime += this._get(inst, 'timeSeparator');
            }
            if (showMinutes && (!optionalMinutes || m != 0)) {
                parsedTime += m;
            }
            if (showHours) {
                if (period.length > 0) { parsedTime += this._get(inst, 'periodSeparator') + period; }
            }
            
            return parsedTime;
        },
        
        /* Update any alternate field to synchronise with the main field. */
        _updateAlternate: function(inst, newTime) {
            var altField = this._get(inst, 'altField');
            if (altField) { // update alternate field too
                $(altField).each(function(i,e) {
                    $(e).val(newTime);
                });
            }
        },

        /* This might look unused but it's called by the $.fn.timepicker function with param getTime */
        /* added v 0.2.3 - gitHub issue #5 - Thanks edanuff */
        _getTimeTimepicker : function(input) {
            var inst = this._getInst(input);
            return this._getParsedTime(inst);
        },
        _getHourTimepicker: function(input) {
            var inst = this._getInst(input);
            if ( inst == undefined) { return -1; }
            return inst.hours;
        },
        _getMinuteTimepicker: function(input) {
            var inst= this._getInst(input);
            if ( inst == undefined) { return -1; }
            return inst.minutes;
        }

    });



    /* Invoke the timepicker functionality.
    @param  options  string - a command, optionally followed by additional parameters or
    Object - settings for attaching new timepicker functionality
    @return  jQuery object */
    $.fn.timepicker = function (options) {

        /* Initialise the time picker. */
        if (!$.timepicker.initialized) {
            $(document).mousedown($.timepicker._checkExternalClick).
			find('body').append($.timepicker.tpDiv);
            $.timepicker.initialized = true;
        }

        var otherArgs = Array.prototype.slice.call(arguments, 1);
        if (typeof options == 'string' && (options == 'getTime' || options == 'getHour' || options == 'getMinute' ))
            return $.timepicker['_' + options + 'Timepicker'].
			    apply($.timepicker, [this[0]].concat(otherArgs));
        if (options == 'option' && arguments.length == 2 && typeof arguments[1] == 'string')
            return $.timepicker['_' + options + 'Timepicker'].
                apply($.timepicker, [this[0]].concat(otherArgs));
        return this.each(function () {
            typeof options == 'string' ?
			$.timepicker['_' + options + 'Timepicker'].
				apply($.timepicker, [this].concat(otherArgs)) :
			$.timepicker._attachTimepicker(this, options);
        });
    };

    /* jQuery extend now ignores nulls! */
    function extendRemove(target, props) {
        $.extend(target, props);
        for (var name in props)
            if (props[name] == null || props[name] == undefined)
                target[name] = props[name];
        return target;
    };

    $.timepicker = new Timepicker(); // singleton instance
    $.timepicker.initialized = false;
    $.timepicker.uuid = new Date().getTime();
    $.timepicker.version = "0.2.9";

    // Workaround for #4055
    // Add another global to avoid noConflict issues with inline event handlers
    window['TP_jQuery_' + tpuuid] = $;

})(jQuery);


/*

 FullCalendar v1.5.3
 http://arshaw.com/fullcalendar/

 Use fullcalendar.css for basic styling.
 For event drag & drop, requires jQuery UI draggable.
 For event resizing, requires jQuery UI resizable.

 Copyright (c) 2011 Adam Shaw
 Dual licensed under the MIT and GPL licenses, located in
 MIT-LICENSE.txt and GPL-LICENSE.txt respectively.

 Date: Mon Feb 6 22:40:40 2012 -0800

*/
(function(m,ma){function wb(a){m.extend(true,Ya,a)}function Yb(a,b,e){function d(k){if(E){u();q();na();S(k)}else f()}function f(){B=b.theme?"ui":"fc";a.addClass("fc");b.isRTL&&a.addClass("fc-rtl");b.theme&&a.addClass("ui-widget");E=m("<div class='fc-content' style='position:relative'/>").prependTo(a);C=new Zb(X,b);(P=C.render())&&a.prepend(P);y(b.defaultView);m(window).resize(oa);t()||g()}function g(){setTimeout(function(){!n.start&&t()&&S()},0)}function l(){m(window).unbind("resize",oa);C.destroy();
E.remove();a.removeClass("fc fc-rtl ui-widget")}function j(){return i.offsetWidth!==0}function t(){return m("body")[0].offsetWidth!==0}function y(k){if(!n||k!=n.name){F++;pa();var D=n,Z;if(D){(D.beforeHide||xb)();Za(E,E.height());D.element.hide()}else Za(E,1);E.css("overflow","hidden");if(n=Y[k])n.element.show();else n=Y[k]=new Ja[k](Z=s=m("<div class='fc-view fc-view-"+k+"' style='position:absolute'/>").appendTo(E),X);D&&C.deactivateButton(D.name);C.activateButton(k);S();E.css("overflow","");D&&
Za(E,1);Z||(n.afterShow||xb)();F--}}function S(k){if(j()){F++;pa();o===ma&&u();var D=false;if(!n.start||k||r<n.start||r>=n.end){n.render(r,k||0);fa(true);D=true}else if(n.sizeDirty){n.clearEvents();fa();D=true}else if(n.eventsDirty){n.clearEvents();D=true}n.sizeDirty=false;n.eventsDirty=false;ga(D);W=a.outerWidth();C.updateTitle(n.title);k=new Date;k>=n.start&&k<n.end?C.disableButton("today"):C.enableButton("today");F--;n.trigger("viewDisplay",i)}}function Q(){q();if(j()){u();fa();pa();n.clearEvents();
n.renderEvents(J);n.sizeDirty=false}}function q(){m.each(Y,function(k,D){D.sizeDirty=true})}function u(){o=b.contentHeight?b.contentHeight:b.height?b.height-(P?P.height():0)-Sa(E):Math.round(E.width()/Math.max(b.aspectRatio,0.5))}function fa(k){F++;n.setHeight(o,k);if(s){s.css("position","relative");s=null}n.setWidth(E.width(),k);F--}function oa(){if(!F)if(n.start){var k=++v;setTimeout(function(){if(k==v&&!F&&j())if(W!=(W=a.outerWidth())){F++;Q();n.trigger("windowResize",i);F--}},200)}else g()}function ga(k){if(!b.lazyFetching||
ya(n.visStart,n.visEnd))ra();else k&&da()}function ra(){K(n.visStart,n.visEnd)}function sa(k){J=k;da()}function ha(k){da(k)}function da(k){na();if(j()){n.clearEvents();n.renderEvents(J,k);n.eventsDirty=false}}function na(){m.each(Y,function(k,D){D.eventsDirty=true})}function ua(k,D,Z){n.select(k,D,Z===ma?true:Z)}function pa(){n&&n.unselect()}function U(){S(-1)}function ca(){S(1)}function ka(){gb(r,-1);S()}function qa(){gb(r,1);S()}function G(){r=new Date;S()}function p(k,D,Z){if(k instanceof Date)r=
N(k);else yb(r,k,D,Z);S()}function L(k,D,Z){k!==ma&&gb(r,k);D!==ma&&hb(r,D);Z!==ma&&ba(r,Z);S()}function c(){return N(r)}function z(){return n}function H(k,D){if(D===ma)return b[k];if(k=="height"||k=="contentHeight"||k=="aspectRatio"){b[k]=D;Q()}}function T(k,D){if(b[k])return b[k].apply(D||i,Array.prototype.slice.call(arguments,2))}var X=this;X.options=b;X.render=d;X.destroy=l;X.refetchEvents=ra;X.reportEvents=sa;X.reportEventChange=ha;X.rerenderEvents=da;X.changeView=y;X.select=ua;X.unselect=pa;
X.prev=U;X.next=ca;X.prevYear=ka;X.nextYear=qa;X.today=G;X.gotoDate=p;X.incrementDate=L;X.formatDate=function(k,D){return Oa(k,D,b)};X.formatDates=function(k,D,Z){return ib(k,D,Z,b)};X.getDate=c;X.getView=z;X.option=H;X.trigger=T;$b.call(X,b,e);var ya=X.isFetchNeeded,K=X.fetchEvents,i=a[0],C,P,E,B,n,Y={},W,o,s,v=0,F=0,r=new Date,J=[],M;yb(r,b.year,b.month,b.date);b.droppable&&m(document).bind("dragstart",function(k,D){var Z=k.target,ja=m(Z);if(!ja.parents(".fc").length){var ia=b.dropAccept;if(m.isFunction(ia)?
ia.call(Z,ja):ja.is(ia)){M=Z;n.dragStart(M,k,D)}}}).bind("dragstop",function(k,D){if(M){n.dragStop(M,k,D);M=null}})}function Zb(a,b){function e(){q=b.theme?"ui":"fc";if(b.header)return Q=m("<table class='fc-header' style='width:100%'/>").append(m("<tr/>").append(f("left")).append(f("center")).append(f("right")))}function d(){Q.remove()}function f(u){var fa=m("<td class='fc-header-"+u+"'/>");(u=b.header[u])&&m.each(u.split(" "),function(oa){oa>0&&fa.append("<span class='fc-header-space'/>");var ga;
m.each(this.split(","),function(ra,sa){if(sa=="title"){fa.append("<span class='fc-header-title'><h2>&nbsp;</h2></span>");ga&&ga.addClass(q+"-corner-right");ga=null}else{var ha;if(a[sa])ha=a[sa];else if(Ja[sa])ha=function(){na.removeClass(q+"-state-hover");a.changeView(sa)};if(ha){ra=b.theme?jb(b.buttonIcons,sa):null;var da=jb(b.buttonText,sa),na=m("<span class='fc-button fc-button-"+sa+" "+q+"-state-default'><span class='fc-button-inner'><span class='fc-button-content'>"+(ra?"<span class='fc-icon-wrap'><span class='ui-icon ui-icon-"+
ra+"'/></span>":da)+"</span><span class='fc-button-effect'><span></span></span></span></span>");if(na){na.click(function(){na.hasClass(q+"-state-disabled")||ha()}).mousedown(function(){na.not("."+q+"-state-active").not("."+q+"-state-disabled").addClass(q+"-state-down")}).mouseup(function(){na.removeClass(q+"-state-down")}).hover(function(){na.not("."+q+"-state-active").not("."+q+"-state-disabled").addClass(q+"-state-hover")},function(){na.removeClass(q+"-state-hover").removeClass(q+"-state-down")}).appendTo(fa);
ga||na.addClass(q+"-corner-left");ga=na}}}});ga&&ga.addClass(q+"-corner-right")});return fa}function g(u){Q.find("h2").html(u)}function l(u){Q.find("span.fc-button-"+u).addClass(q+"-state-active")}function j(u){Q.find("span.fc-button-"+u).removeClass(q+"-state-active")}function t(u){Q.find("span.fc-button-"+u).addClass(q+"-state-disabled")}function y(u){Q.find("span.fc-button-"+u).removeClass(q+"-state-disabled")}var S=this;S.render=e;S.destroy=d;S.updateTitle=g;S.activateButton=l;S.deactivateButton=
j;S.disableButton=t;S.enableButton=y;var Q=m([]),q}function $b(a,b){function e(c,z){return!ca||c<ca||z>ka}function d(c,z){ca=c;ka=z;L=[];c=++qa;G=z=U.length;for(var H=0;H<z;H++)f(U[H],c)}function f(c,z){g(c,function(H){if(z==qa){if(H){for(var T=0;T<H.length;T++){H[T].source=c;oa(H[T])}L=L.concat(H)}G--;G||ua(L)}})}function g(c,z){var H,T=Aa.sourceFetchers,X;for(H=0;H<T.length;H++){X=T[H](c,ca,ka,z);if(X===true)return;else if(typeof X=="object"){g(X,z);return}}if(H=c.events)if(m.isFunction(H)){u();
H(N(ca),N(ka),function(C){z(C);fa()})}else m.isArray(H)?z(H):z();else if(c.url){var ya=c.success,K=c.error,i=c.complete;H=m.extend({},c.data||{});T=Ta(c.startParam,a.startParam);X=Ta(c.endParam,a.endParam);if(T)H[T]=Math.round(+ca/1E3);if(X)H[X]=Math.round(+ka/1E3);u();m.ajax(m.extend({},ac,c,{data:H,success:function(C){C=C||[];var P=$a(ya,this,arguments);if(m.isArray(P))C=P;z(C)},error:function(){$a(K,this,arguments);z()},complete:function(){$a(i,this,arguments);fa()}}))}else z()}function l(c){if(c=
j(c)){G++;f(c,qa)}}function j(c){if(m.isFunction(c)||m.isArray(c))c={events:c};else if(typeof c=="string")c={url:c};if(typeof c=="object"){ga(c);U.push(c);return c}}function t(c){U=m.grep(U,function(z){return!ra(z,c)});L=m.grep(L,function(z){return!ra(z.source,c)});ua(L)}function y(c){var z,H=L.length,T,X=na().defaultEventEnd,ya=c.start-c._start,K=c.end?c.end-(c._end||X(c)):0;for(z=0;z<H;z++){T=L[z];if(T._id==c._id&&T!=c){T.start=new Date(+T.start+ya);T.end=c.end?T.end?new Date(+T.end+K):new Date(+X(T)+
K):null;T.title=c.title;T.url=c.url;T.allDay=c.allDay;T.className=c.className;T.editable=c.editable;T.color=c.color;T.backgroudColor=c.backgroudColor;T.borderColor=c.borderColor;T.textColor=c.textColor;oa(T)}}oa(c);ua(L)}function S(c,z){oa(c);if(!c.source){if(z){pa.events.push(c);c.source=pa}L.push(c)}ua(L)}function Q(c){if(c){if(!m.isFunction(c)){var z=c+"";c=function(T){return T._id==z}}L=m.grep(L,c,true);for(H=0;H<U.length;H++)if(m.isArray(U[H].events))U[H].events=m.grep(U[H].events,c,true)}else{L=
[];for(var H=0;H<U.length;H++)if(m.isArray(U[H].events))U[H].events=[]}ua(L)}function q(c){if(m.isFunction(c))return m.grep(L,c);else if(c){c+="";return m.grep(L,function(z){return z._id==c})}return L}function u(){p++||da("loading",null,true)}function fa(){--p||da("loading",null,false)}function oa(c){var z=c.source||{},H=Ta(z.ignoreTimezone,a.ignoreTimezone);c._id=c._id||(c.id===ma?"_fc"+bc++:c.id+"");if(c.date){if(!c.start)c.start=c.date;delete c.date}c._start=N(c.start=kb(c.start,H));c.end=kb(c.end,
H);if(c.end&&c.end<=c.start)c.end=null;c._end=c.end?N(c.end):null;if(c.allDay===ma)c.allDay=Ta(z.allDayDefault,a.allDayDefault);if(c.className){if(typeof c.className=="string")c.className=c.className.split(/\s+/)}else c.className=[]}function ga(c){if(c.className){if(typeof c.className=="string")c.className=c.className.split(/\s+/)}else c.className=[];for(var z=Aa.sourceNormalizers,H=0;H<z.length;H++)z[H](c)}function ra(c,z){return c&&z&&sa(c)==sa(z)}function sa(c){return(typeof c=="object"?c.events||
c.url:"")||c}var ha=this;ha.isFetchNeeded=e;ha.fetchEvents=d;ha.addEventSource=l;ha.removeEventSource=t;ha.updateEvent=y;ha.renderEvent=S;ha.removeEvents=Q;ha.clientEvents=q;ha.normalizeEvent=oa;var da=ha.trigger,na=ha.getView,ua=ha.reportEvents,pa={events:[]},U=[pa],ca,ka,qa=0,G=0,p=0,L=[];for(ha=0;ha<b.length;ha++)j(b[ha])}function gb(a,b,e){a.setFullYear(a.getFullYear()+b);e||Ka(a);return a}function hb(a,b,e){if(+a){b=a.getMonth()+b;var d=N(a);d.setDate(1);d.setMonth(b);a.setMonth(b);for(e||Ka(a);a.getMonth()!=
d.getMonth();)a.setDate(a.getDate()+(a<d?1:-1))}return a}function ba(a,b,e){if(+a){b=a.getDate()+b;var d=N(a);d.setHours(9);d.setDate(b);a.setDate(b);e||Ka(a);lb(a,d)}return a}function lb(a,b){if(+a)for(;a.getDate()!=b.getDate();)a.setTime(+a+(a<b?1:-1)*cc)}function xa(a,b){a.setMinutes(a.getMinutes()+b);return a}function Ka(a){a.setHours(0);a.setMinutes(0);a.setSeconds(0);a.setMilliseconds(0);return a}function N(a,b){if(b)return Ka(new Date(+a));return new Date(+a)}function zb(){var a=0,b;do b=new Date(1970,
a++,1);while(b.getHours());return b}function Fa(a,b,e){for(b=b||1;!a.getDay()||e&&a.getDay()==1||!e&&a.getDay()==6;)ba(a,b);return a}function Ca(a,b){return Math.round((N(a,true)-N(b,true))/Ab)}function yb(a,b,e,d){if(b!==ma&&b!=a.getFullYear()){a.setDate(1);a.setMonth(0);a.setFullYear(b)}if(e!==ma&&e!=a.getMonth()){a.setDate(1);a.setMonth(e)}d!==ma&&a.setDate(d)}function kb(a,b){if(typeof a=="object")return a;if(typeof a=="number")return new Date(a*1E3);if(typeof a=="string"){if(a.match(/^\d+(\.\d+)?$/))return new Date(parseFloat(a)*
1E3);if(b===ma)b=true;return Bb(a,b)||(a?new Date(a):null)}return null}function Bb(a,b){a=a.match(/^([0-9]{4})(-([0-9]{2})(-([0-9]{2})([T ]([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?(Z|(([-+])([0-9]{2})(:?([0-9]{2}))?))?)?)?)?$/);if(!a)return null;var e=new Date(a[1],0,1);if(b||!a[13]){b=new Date(a[1],0,1,9,0);if(a[3]){e.setMonth(a[3]-1);b.setMonth(a[3]-1)}if(a[5]){e.setDate(a[5]);b.setDate(a[5])}lb(e,b);a[7]&&e.setHours(a[7]);a[8]&&e.setMinutes(a[8]);a[10]&&e.setSeconds(a[10]);a[12]&&e.setMilliseconds(Number("0."+
a[12])*1E3);lb(e,b)}else{e.setUTCFullYear(a[1],a[3]?a[3]-1:0,a[5]||1);e.setUTCHours(a[7]||0,a[8]||0,a[10]||0,a[12]?Number("0."+a[12])*1E3:0);if(a[14]){b=Number(a[16])*60+(a[18]?Number(a[18]):0);b*=a[15]=="-"?1:-1;e=new Date(+e+b*60*1E3)}}return e}function mb(a){if(typeof a=="number")return a*60;if(typeof a=="object")return a.getHours()*60+a.getMinutes();if(a=a.match(/(\d+)(?::(\d+))?\s*(\w+)?/)){var b=parseInt(a[1],10);if(a[3]){b%=12;if(a[3].toLowerCase().charAt(0)=="p")b+=12}return b*60+(a[2]?parseInt(a[2],
10):0)}}function Oa(a,b,e){return ib(a,null,b,e)}function ib(a,b,e,d){d=d||Ya;var f=a,g=b,l,j=e.length,t,y,S,Q="";for(l=0;l<j;l++){t=e.charAt(l);if(t=="'")for(y=l+1;y<j;y++){if(e.charAt(y)=="'"){if(f){Q+=y==l+1?"'":e.substring(l+1,y);l=y}break}}else if(t=="(")for(y=l+1;y<j;y++){if(e.charAt(y)==")"){l=Oa(f,e.substring(l+1,y),d);if(parseInt(l.replace(/\D/,""),10))Q+=l;l=y;break}}else if(t=="[")for(y=l+1;y<j;y++){if(e.charAt(y)=="]"){t=e.substring(l+1,y);l=Oa(f,t,d);if(l!=Oa(g,t,d))Q+=l;l=y;break}}else if(t==
"{"){f=b;g=a}else if(t=="}"){f=a;g=b}else{for(y=j;y>l;y--)if(S=dc[e.substring(l,y)]){if(f)Q+=S(f,d);l=y-1;break}if(y==l)if(f)Q+=t}}return Q}function Ua(a){return a.end?ec(a.end,a.allDay):ba(N(a.start),1)}function ec(a,b){a=N(a);return b||a.getHours()||a.getMinutes()?ba(a,1):Ka(a)}function fc(a,b){return(b.msLength-a.msLength)*100+(a.event.start-b.event.start)}function Cb(a,b){return a.end>b.start&&a.start<b.end}function nb(a,b,e,d){var f=[],g,l=a.length,j,t,y,S,Q;for(g=0;g<l;g++){j=a[g];t=j.start;
y=b[g];if(y>e&&t<d){if(t<e){t=N(e);S=false}else{t=t;S=true}if(y>d){y=N(d);Q=false}else{y=y;Q=true}f.push({event:j,start:t,end:y,isStart:S,isEnd:Q,msLength:y-t})}}return f.sort(fc)}function ob(a){var b=[],e,d=a.length,f,g,l,j;for(e=0;e<d;e++){f=a[e];for(g=0;;){l=false;if(b[g])for(j=0;j<b[g].length;j++)if(Cb(b[g][j],f)){l=true;break}if(l)g++;else break}if(b[g])b[g].push(f);else b[g]=[f]}return b}function Db(a,b,e){a.unbind("mouseover").mouseover(function(d){for(var f=d.target,g;f!=this;){g=f;f=f.parentNode}if((f=
g._fci)!==ma){g._fci=ma;g=b[f];e(g.event,g.element,g);m(d.target).trigger(d)}d.stopPropagation()})}function Va(a,b,e){for(var d=0,f;d<a.length;d++){f=m(a[d]);f.width(Math.max(0,b-pb(f,e)))}}function Eb(a,b,e){for(var d=0,f;d<a.length;d++){f=m(a[d]);f.height(Math.max(0,b-Sa(f,e)))}}function pb(a,b){return gc(a)+hc(a)+(b?ic(a):0)}function gc(a){return(parseFloat(m.curCSS(a[0],"paddingLeft",true))||0)+(parseFloat(m.curCSS(a[0],"paddingRight",true))||0)}function ic(a){return(parseFloat(m.curCSS(a[0],
"marginLeft",true))||0)+(parseFloat(m.curCSS(a[0],"marginRight",true))||0)}function hc(a){return(parseFloat(m.curCSS(a[0],"borderLeftWidth",true))||0)+(parseFloat(m.curCSS(a[0],"borderRightWidth",true))||0)}function Sa(a,b){return jc(a)+kc(a)+(b?Fb(a):0)}function jc(a){return(parseFloat(m.curCSS(a[0],"paddingTop",true))||0)+(parseFloat(m.curCSS(a[0],"paddingBottom",true))||0)}function Fb(a){return(parseFloat(m.curCSS(a[0],"marginTop",true))||0)+(parseFloat(m.curCSS(a[0],"marginBottom",true))||0)}
function kc(a){return(parseFloat(m.curCSS(a[0],"borderTopWidth",true))||0)+(parseFloat(m.curCSS(a[0],"borderBottomWidth",true))||0)}function Za(a,b){b=typeof b=="number"?b+"px":b;a.each(function(e,d){d.style.cssText+=";min-height:"+b+";_height:"+b})}function xb(){}function Gb(a,b){return a-b}function Hb(a){return Math.max.apply(Math,a)}function Pa(a){return(a<10?"0":"")+a}function jb(a,b){if(a[b]!==ma)return a[b];b=b.split(/(?=[A-Z])/);for(var e=b.length-1,d;e>=0;e--){d=a[b[e].toLowerCase()];if(d!==
ma)return d}return a[""]}function Qa(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#039;").replace(/"/g,"&quot;").replace(/\n/g,"<br />")}function Ib(a){return a.id+"/"+a.className+"/"+a.style.cssText.replace(/(^|;)\s*(top|left|width|height)\s*:[^;]*/ig,"")}function qb(a){a.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){return false})}function ab(a){a.children().removeClass("fc-first fc-last").filter(":first-child").addClass("fc-first").end().filter(":last-child").addClass("fc-last")}
function rb(a,b){a.each(function(e,d){d.className=d.className.replace(/^fc-\w*/,"fc-"+lc[b.getDay()])})}function Jb(a,b){var e=a.source||{},d=a.color,f=e.color,g=b("eventColor"),l=a.backgroundColor||d||e.backgroundColor||f||b("eventBackgroundColor")||g;d=a.borderColor||d||e.borderColor||f||b("eventBorderColor")||g;a=a.textColor||e.textColor||b("eventTextColor");b=[];l&&b.push("background-color:"+l);d&&b.push("border-color:"+d);a&&b.push("color:"+a);return b.join(";")}function $a(a,b,e){if(m.isFunction(a))a=
[a];if(a){var d,f;for(d=0;d<a.length;d++)f=a[d].apply(b,e)||f;return f}}function Ta(){for(var a=0;a<arguments.length;a++)if(arguments[a]!==ma)return arguments[a]}function mc(a,b){function e(j,t){if(t){hb(j,t);j.setDate(1)}j=N(j,true);j.setDate(1);t=hb(N(j),1);var y=N(j),S=N(t),Q=f("firstDay"),q=f("weekends")?0:1;if(q){Fa(y);Fa(S,-1,true)}ba(y,-((y.getDay()-Math.max(Q,q)+7)%7));ba(S,(7-S.getDay()+Math.max(Q,q))%7);Q=Math.round((S-y)/(Ab*7));if(f("weekMode")=="fixed"){ba(S,(6-Q)*7);Q=6}d.title=l(j,
f("titleFormat"));d.start=j;d.end=t;d.visStart=y;d.visEnd=S;g(6,Q,q?5:7,true)}var d=this;d.render=e;sb.call(d,a,b,"month");var f=d.opt,g=d.renderBasic,l=b.formatDate}function nc(a,b){function e(j,t){t&&ba(j,t*7);j=ba(N(j),-((j.getDay()-f("firstDay")+7)%7));t=ba(N(j),7);var y=N(j),S=N(t),Q=f("weekends");if(!Q){Fa(y);Fa(S,-1,true)}d.title=l(y,ba(N(S),-1),f("titleFormat"));d.start=j;d.end=t;d.visStart=y;d.visEnd=S;g(1,1,Q?7:5,false)}var d=this;d.render=e;sb.call(d,a,b,"basicWeek");var f=d.opt,g=d.renderBasic,
l=b.formatDates}function oc(a,b){function e(j,t){if(t){ba(j,t);f("weekends")||Fa(j,t<0?-1:1)}d.title=l(j,f("titleFormat"));d.start=d.visStart=N(j,true);d.end=d.visEnd=ba(N(d.start),1);g(1,1,1,false)}var d=this;d.render=e;sb.call(d,a,b,"basicDay");var f=d.opt,g=d.renderBasic,l=b.formatDate}function sb(a,b,e){function d(w,I,R,V){v=I;F=R;f();(I=!C)?g(w,V):z();l(I)}function f(){if(k=L("isRTL")){D=-1;Z=F-1}else{D=1;Z=0}ja=L("firstDay");ia=L("weekends")?0:1;la=L("theme")?"ui":"fc";$=L("columnFormat")}function g(w,
I){var R,V=la+"-widget-header",ea=la+"-widget-content",aa;R="<table class='fc-border-separate' style='width:100%' cellspacing='0'><thead><tr>";for(aa=0;aa<F;aa++)R+="<th class='fc- "+V+"'/>";R+="</tr></thead><tbody>";for(aa=0;aa<w;aa++){R+="<tr class='fc-week"+aa+"'>";for(V=0;V<F;V++)R+="<td class='fc- "+ea+" fc-day"+(aa*F+V)+"'><div>"+(I?"<div class='fc-day-number'/>":"")+"<div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></div></td>";R+="</tr>"}R+="</tbody></table>";w=
m(R).appendTo(a);K=w.find("thead");i=K.find("th");C=w.find("tbody");P=C.find("tr");E=C.find("td");B=E.filter(":first-child");n=P.eq(0).find("div.fc-day-content div");ab(K.add(K.find("tr")));ab(P);P.eq(0).addClass("fc-first");y(E);Y=m("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(a)}function l(w){var I=w||v==1,R=p.start.getMonth(),V=Ka(new Date),ea,aa,va;I&&i.each(function(wa,Ga){ea=m(Ga);aa=ca(wa);ea.html(ya(aa,$));rb(ea,aa)});E.each(function(wa,Ga){ea=m(Ga);aa=ca(wa);aa.getMonth()==
R?ea.removeClass("fc-other-month"):ea.addClass("fc-other-month");+aa==+V?ea.addClass(la+"-state-highlight fc-today"):ea.removeClass(la+"-state-highlight fc-today");ea.find("div.fc-day-number").text(aa.getDate());I&&rb(ea,aa)});P.each(function(wa,Ga){va=m(Ga);if(wa<v){va.show();wa==v-1?va.addClass("fc-last"):va.removeClass("fc-last")}else va.hide()})}function j(w){o=w;w=o-K.height();var I,R,V;if(L("weekMode")=="variable")I=R=Math.floor(w/(v==1?2:6));else{I=Math.floor(w/v);R=w-I*(v-1)}B.each(function(ea,
aa){if(ea<v){V=m(aa);Za(V.find("> div"),(ea==v-1?R:I)-Sa(V))}})}function t(w){W=w;M.clear();s=Math.floor(W/F);Va(i.slice(0,-1),s)}function y(w){w.click(S).mousedown(X)}function S(w){if(!L("selectable")){var I=parseInt(this.className.match(/fc\-day(\d+)/)[1]);I=ca(I);c("dayClick",this,I,true,w)}}function Q(w,I,R){R&&r.build();R=N(p.visStart);for(var V=ba(N(R),F),ea=0;ea<v;ea++){var aa=new Date(Math.max(R,w)),va=new Date(Math.min(V,I));if(aa<va){var wa;if(k){wa=Ca(va,R)*D+Z+1;aa=Ca(aa,R)*D+Z+1}else{wa=
Ca(aa,R);aa=Ca(va,R)}y(q(ea,wa,ea,aa-1))}ba(R,7);ba(V,7)}}function q(w,I,R,V){w=r.rect(w,I,R,V,a);return H(w,a)}function u(w){return N(w)}function fa(w,I){Q(w,ba(N(I),1),true)}function oa(){T()}function ga(w,I,R){var V=ua(w);c("dayClick",E[V.row*F+V.col],w,I,R)}function ra(w,I){J.start(function(R){T();R&&q(R.row,R.col,R.row,R.col)},I)}function sa(w,I,R){var V=J.stop();T();if(V){V=pa(V);c("drop",w,V,true,I,R)}}function ha(w){return N(w.start)}function da(w){return M.left(w)}function na(w){return M.right(w)}
function ua(w){return{row:Math.floor(Ca(w,p.visStart)/7),col:ka(w.getDay())}}function pa(w){return U(w.row,w.col)}function U(w,I){return ba(N(p.visStart),w*7+I*D+Z)}function ca(w){return U(Math.floor(w/F),w%F)}function ka(w){return(w-Math.max(ja,ia)+F)%F*D+Z}function qa(w){return P.eq(w)}function G(){return{left:0,right:W}}var p=this;p.renderBasic=d;p.setHeight=j;p.setWidth=t;p.renderDayOverlay=Q;p.defaultSelectionEnd=u;p.renderSelection=fa;p.clearSelection=oa;p.reportDayClick=ga;p.dragStart=ra;p.dragStop=
sa;p.defaultEventEnd=ha;p.getHoverListener=function(){return J};p.colContentLeft=da;p.colContentRight=na;p.dayOfWeekCol=ka;p.dateCell=ua;p.cellDate=pa;p.cellIsAllDay=function(){return true};p.allDayRow=qa;p.allDayBounds=G;p.getRowCnt=function(){return v};p.getColCnt=function(){return F};p.getColWidth=function(){return s};p.getDaySegmentContainer=function(){return Y};Kb.call(p,a,b,e);Lb.call(p);Mb.call(p);pc.call(p);var L=p.opt,c=p.trigger,z=p.clearEvents,H=p.renderOverlay,T=p.clearOverlays,X=p.daySelectionMousedown,
ya=b.formatDate,K,i,C,P,E,B,n,Y,W,o,s,v,F,r,J,M,k,D,Z,ja,ia,la,$;qb(a.addClass("fc-grid"));r=new Nb(function(w,I){var R,V,ea;i.each(function(aa,va){R=m(va);V=R.offset().left;if(aa)ea[1]=V;ea=[V];I[aa]=ea});ea[1]=V+R.outerWidth();P.each(function(aa,va){if(aa<v){R=m(va);V=R.offset().top;if(aa)ea[1]=V;ea=[V];w[aa]=ea}});ea[1]=V+R.outerHeight()});J=new Ob(r);M=new Pb(function(w){return n.eq(w)})}function pc(){function a(U,ca){S(U);ua(e(U),ca)}function b(){Q();ga().empty()}function e(U){var ca=da(),ka=
na(),qa=N(g.visStart);ka=ba(N(qa),ka);var G=m.map(U,Ua),p,L,c,z,H,T,X=[];for(p=0;p<ca;p++){L=ob(nb(U,G,qa,ka));for(c=0;c<L.length;c++){z=L[c];for(H=0;H<z.length;H++){T=z[H];T.row=p;T.level=c;X.push(T)}}ba(qa,7);ba(ka,7)}return X}function d(U,ca,ka){t(U)&&f(U,ca);ka.isEnd&&y(U)&&pa(U,ca,ka);q(U,ca)}function f(U,ca){var ka=ra(),qa;ca.draggable({zIndex:9,delay:50,opacity:l("dragOpacity"),revertDuration:l("dragRevertDuration"),start:function(G,p){j("eventDragStart",ca,U,G,p);fa(U,ca);ka.start(function(L,
c,z,H){ca.draggable("option","revert",!L||!z&&!H);ha();if(L){qa=z*7+H*(l("isRTL")?-1:1);sa(ba(N(U.start),qa),ba(Ua(U),qa))}else qa=0},G,"drag")},stop:function(G,p){ka.stop();ha();j("eventDragStop",ca,U,G,p);if(qa)oa(this,U,qa,0,U.allDay,G,p);else{ca.css("filter","");u(U,ca)}}})}var g=this;g.renderEvents=a;g.compileDaySegs=e;g.clearEvents=b;g.bindDaySeg=d;Qb.call(g);var l=g.opt,j=g.trigger,t=g.isEventDraggable,y=g.isEventResizable,S=g.reportEvents,Q=g.reportEventClear,q=g.eventElementHandlers,u=g.showEvents,
fa=g.hideEvents,oa=g.eventDrop,ga=g.getDaySegmentContainer,ra=g.getHoverListener,sa=g.renderDayOverlay,ha=g.clearOverlays,da=g.getRowCnt,na=g.getColCnt,ua=g.renderDaySegs,pa=g.resizableDayEvent}function qc(a,b){function e(j,t){t&&ba(j,t*7);j=ba(N(j),-((j.getDay()-f("firstDay")+7)%7));t=ba(N(j),7);var y=N(j),S=N(t),Q=f("weekends");if(!Q){Fa(y);Fa(S,-1,true)}d.title=l(y,ba(N(S),-1),f("titleFormat"));d.start=j;d.end=t;d.visStart=y;d.visEnd=S;g(Q?7:5)}var d=this;d.render=e;Rb.call(d,a,b,"agendaWeek");
var f=d.opt,g=d.renderAgenda,l=b.formatDates}function rc(a,b){function e(j,t){if(t){ba(j,t);f("weekends")||Fa(j,t<0?-1:1)}t=N(j,true);var y=ba(N(t),1);d.title=l(j,f("titleFormat"));d.start=d.visStart=t;d.end=d.visEnd=y;g(1)}var d=this;d.render=e;Rb.call(d,a,b,"agendaDay");var f=d.opt,g=d.renderAgenda,l=b.formatDate}function Rb(a,b,e){function d(h){Ba=h;f();v?P():g();l()}function f(){Wa=i("theme")?"ui":"fc";Sb=i("weekends")?0:1;Tb=i("firstDay");if(Ub=i("isRTL")){Ha=-1;Ia=Ba-1}else{Ha=1;Ia=0}La=mb(i("minTime"));
bb=mb(i("maxTime"));Vb=i("columnFormat")}function g(){var h=Wa+"-widget-header",O=Wa+"-widget-content",x,A,ta,za,Da,Ea=i("slotMinutes")%15==0;x="<table style='width:100%' class='fc-agenda-days fc-border-separate' cellspacing='0'><thead><tr><th class='fc-agenda-axis "+h+"'>&nbsp;</th>";for(A=0;A<Ba;A++)x+="<th class='fc- fc-col"+A+" "+h+"'/>";x+="<th class='fc-agenda-gutter "+h+"'>&nbsp;</th></tr></thead><tbody><tr><th class='fc-agenda-axis "+h+"'>&nbsp;</th>";for(A=0;A<Ba;A++)x+="<td class='fc- fc-col"+
A+" "+O+"'><div><div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></div></td>";x+="<td class='fc-agenda-gutter "+O+"'>&nbsp;</td></tr></tbody></table>";v=m(x).appendTo(a);F=v.find("thead");r=F.find("th").slice(1,-1);J=v.find("tbody");M=J.find("td").slice(0,-1);k=M.find("div.fc-day-content div");D=M.eq(0);Z=D.find("> div");ab(F.add(F.find("tr")));ab(J.add(J.find("tr")));aa=F.find("th:first");va=v.find(".fc-agenda-gutter");ja=m("<div style='position:absolute;z-index:2;left:0;width:100%'/>").appendTo(a);
if(i("allDaySlot")){ia=m("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(ja);x="<table style='width:100%' class='fc-agenda-allday' cellspacing='0'><tr><th class='"+h+" fc-agenda-axis'>"+i("allDayText")+"</th><td><div class='fc-day-content'><div style='position:relative'/></div></td><th class='"+h+" fc-agenda-gutter'>&nbsp;</th></tr></table>";la=m(x).appendTo(ja);$=la.find("tr");q($.find("td"));aa=aa.add(la.find("th:first"));va=va.add(la.find("th.fc-agenda-gutter"));ja.append("<div class='fc-agenda-divider "+
h+"'><div class='fc-agenda-divider-inner'/></div>")}else ia=m([]);w=m("<div style='position:absolute;width:100%;overflow-x:hidden;overflow-y:auto'/>").appendTo(ja);I=m("<div style='position:relative;width:100%;overflow:hidden'/>").appendTo(w);R=m("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(I);x="<table class='fc-agenda-slots' style='width:100%' cellspacing='0'><tbody>";ta=zb();za=xa(N(ta),bb);xa(ta,La);for(A=tb=0;ta<za;A++){Da=ta.getMinutes();x+="<tr class='fc-slot"+A+" "+
(!Da?"":"fc-minor")+"'><th class='fc-agenda-axis "+h+"'>"+(!Ea||!Da?s(ta,i("axisFormat")):"&nbsp;")+"</th><td class='"+O+"'><div style='position:relative'>&nbsp;</div></td></tr>";xa(ta,i("slotMinutes"));tb++}x+="</tbody></table>";V=m(x).appendTo(I);ea=V.find("div:first");u(V.find("td"));aa=aa.add(V.find("th:first"))}function l(){var h,O,x,A,ta=Ka(new Date);for(h=0;h<Ba;h++){A=ua(h);O=r.eq(h);O.html(s(A,Vb));x=M.eq(h);+A==+ta?x.addClass(Wa+"-state-highlight fc-today"):x.removeClass(Wa+"-state-highlight fc-today");
rb(O.add(x),A)}}function j(h,O){if(h===ma)h=Wb;Wb=h;ub={};var x=J.position().top,A=w.position().top;h=Math.min(h-x,V.height()+A+1);Z.height(h-Sa(D));ja.css("top",x);w.height(h-A-1);Xa=ea.height()+1;O&&y()}function t(h){Ga=h;cb.clear();Ma=0;Va(aa.width("").each(function(O,x){Ma=Math.max(Ma,m(x).outerWidth())}),Ma);h=w[0].clientWidth;if(vb=w.width()-h){Va(va,vb);va.show().prev().removeClass("fc-last")}else va.hide().prev().addClass("fc-last");db=Math.floor((h-Ma)/Ba);Va(r.slice(0,-1),db)}function y(){function h(){w.scrollTop(A)}
var O=zb(),x=N(O);x.setHours(i("firstHour"));var A=ca(O,x)+1;h();setTimeout(h,0)}function S(){Xb=w.scrollTop()}function Q(){w.scrollTop(Xb)}function q(h){h.click(fa).mousedown(W)}function u(h){h.click(fa).mousedown(H)}function fa(h){if(!i("selectable")){var O=Math.min(Ba-1,Math.floor((h.pageX-v.offset().left-Ma)/db)),x=ua(O),A=this.parentNode.className.match(/fc-slot(\d+)/);if(A){A=parseInt(A[1])*i("slotMinutes");var ta=Math.floor(A/60);x.setHours(ta);x.setMinutes(A%60+La);C("dayClick",M[O],x,false,
h)}else C("dayClick",M[O],x,true,h)}}function oa(h,O,x){x&&Na.build();var A=N(K.visStart);if(Ub){x=Ca(O,A)*Ha+Ia+1;h=Ca(h,A)*Ha+Ia+1}else{x=Ca(h,A);h=Ca(O,A)}x=Math.max(0,x);h=Math.min(Ba,h);x<h&&q(ga(0,x,0,h-1))}function ga(h,O,x,A){h=Na.rect(h,O,x,A,ja);return E(h,ja)}function ra(h,O){for(var x=N(K.visStart),A=ba(N(x),1),ta=0;ta<Ba;ta++){var za=new Date(Math.max(x,h)),Da=new Date(Math.min(A,O));if(za<Da){var Ea=ta*Ha+Ia;Ea=Na.rect(0,Ea,0,Ea,I);za=ca(x,za);Da=ca(x,Da);Ea.top=za;Ea.height=Da-za;u(E(Ea,
I))}ba(x,1);ba(A,1)}}function sa(h){return cb.left(h)}function ha(h){return cb.right(h)}function da(h){return{row:Math.floor(Ca(h,K.visStart)/7),col:U(h.getDay())}}function na(h){var O=ua(h.col);h=h.row;i("allDaySlot")&&h--;h>=0&&xa(O,La+h*i("slotMinutes"));return O}function ua(h){return ba(N(K.visStart),h*Ha+Ia)}function pa(h){return i("allDaySlot")&&!h.row}function U(h){return(h-Math.max(Tb,Sb)+Ba)%Ba*Ha+Ia}function ca(h,O){h=N(h,true);if(O<xa(N(h),La))return 0;if(O>=xa(N(h),bb))return V.height();
h=i("slotMinutes");O=O.getHours()*60+O.getMinutes()-La;var x=Math.floor(O/h),A=ub[x];if(A===ma)A=ub[x]=V.find("tr:eq("+x+") td div")[0].offsetTop;return Math.max(0,Math.round(A-1+Xa*(O%h/h)))}function ka(){return{left:Ma,right:Ga-vb}}function qa(){return $}function G(h){var O=N(h.start);if(h.allDay)return O;return xa(O,i("defaultEventMinutes"))}function p(h,O){if(O)return N(h);return xa(N(h),i("slotMinutes"))}function L(h,O,x){if(x)i("allDaySlot")&&oa(h,ba(N(O),1),true);else c(h,O)}function c(h,O){var x=
i("selectHelper");Na.build();if(x){var A=Ca(h,K.visStart)*Ha+Ia;if(A>=0&&A<Ba){A=Na.rect(0,A,0,A,I);var ta=ca(h,h),za=ca(h,O);if(za>ta){A.top=ta;A.height=za-ta;A.left+=2;A.width-=5;if(m.isFunction(x)){if(h=x(h,O)){A.position="absolute";A.zIndex=8;wa=m(h).css(A).appendTo(I)}}else{A.isStart=true;A.isEnd=true;wa=m(o({title:"",start:h,end:O,className:["fc-select-helper"],editable:false},A));wa.css("opacity",i("dragOpacity"))}if(wa){u(wa);I.append(wa);Va(wa,A.width,true);Eb(wa,A.height,true)}}}}else ra(h,
O)}function z(){B();if(wa){wa.remove();wa=null}}function H(h){if(h.which==1&&i("selectable")){Y(h);var O;Ra.start(function(x,A){z();if(x&&x.col==A.col&&!pa(x)){A=na(A);x=na(x);O=[A,xa(N(A),i("slotMinutes")),x,xa(N(x),i("slotMinutes"))].sort(Gb);c(O[0],O[3])}else O=null},h);m(document).one("mouseup",function(x){Ra.stop();if(O){+O[0]==+O[1]&&T(O[0],false,x);n(O[0],O[3],false,x)}})}}function T(h,O,x){C("dayClick",M[U(h.getDay())],h,O,x)}function X(h,O){Ra.start(function(x){B();if(x)if(pa(x))ga(x.row,
x.col,x.row,x.col);else{x=na(x);var A=xa(N(x),i("defaultEventMinutes"));ra(x,A)}},O)}function ya(h,O,x){var A=Ra.stop();B();A&&C("drop",h,na(A),pa(A),O,x)}var K=this;K.renderAgenda=d;K.setWidth=t;K.setHeight=j;K.beforeHide=S;K.afterShow=Q;K.defaultEventEnd=G;K.timePosition=ca;K.dayOfWeekCol=U;K.dateCell=da;K.cellDate=na;K.cellIsAllDay=pa;K.allDayRow=qa;K.allDayBounds=ka;K.getHoverListener=function(){return Ra};K.colContentLeft=sa;K.colContentRight=ha;K.getDaySegmentContainer=function(){return ia};
K.getSlotSegmentContainer=function(){return R};K.getMinMinute=function(){return La};K.getMaxMinute=function(){return bb};K.getBodyContent=function(){return I};K.getRowCnt=function(){return 1};K.getColCnt=function(){return Ba};K.getColWidth=function(){return db};K.getSlotHeight=function(){return Xa};K.defaultSelectionEnd=p;K.renderDayOverlay=oa;K.renderSelection=L;K.clearSelection=z;K.reportDayClick=T;K.dragStart=X;K.dragStop=ya;Kb.call(K,a,b,e);Lb.call(K);Mb.call(K);sc.call(K);var i=K.opt,C=K.trigger,
P=K.clearEvents,E=K.renderOverlay,B=K.clearOverlays,n=K.reportSelection,Y=K.unselect,W=K.daySelectionMousedown,o=K.slotSegHtml,s=b.formatDate,v,F,r,J,M,k,D,Z,ja,ia,la,$,w,I,R,V,ea,aa,va,wa,Ga,Wb,Ma,db,vb,Xa,Xb,Ba,tb,Na,Ra,cb,ub={},Wa,Tb,Sb,Ub,Ha,Ia,La,bb,Vb;qb(a.addClass("fc-agenda"));Na=new Nb(function(h,O){function x(eb){return Math.max(Ea,Math.min(tc,eb))}var A,ta,za;r.each(function(eb,uc){A=m(uc);ta=A.offset().left;if(eb)za[1]=ta;za=[ta];O[eb]=za});za[1]=ta+A.outerWidth();if(i("allDaySlot")){A=
$;ta=A.offset().top;h[0]=[ta,ta+A.outerHeight()]}for(var Da=I.offset().top,Ea=w.offset().top,tc=Ea+w.outerHeight(),fb=0;fb<tb;fb++)h.push([x(Da+Xa*fb),x(Da+Xa*(fb+1))])});Ra=new Ob(Na);cb=new Pb(function(h){return k.eq(h)})}function sc(){function a(o,s){sa(o);var v,F=o.length,r=[],J=[];for(v=0;v<F;v++)o[v].allDay?r.push(o[v]):J.push(o[v]);if(u("allDaySlot")){L(e(r),s);na()}g(d(J),s)}function b(){ha();ua().empty();pa().empty()}function e(o){o=ob(nb(o,m.map(o,Ua),q.visStart,q.visEnd));var s,v=o.length,
F,r,J,M=[];for(s=0;s<v;s++){F=o[s];for(r=0;r<F.length;r++){J=F[r];J.row=0;J.level=s;M.push(J)}}return M}function d(o){var s=z(),v=ka(),F=ca(),r=xa(N(q.visStart),v),J=m.map(o,f),M,k,D,Z,ja,ia,la=[];for(M=0;M<s;M++){k=ob(nb(o,J,r,xa(N(r),F-v)));vc(k);for(D=0;D<k.length;D++){Z=k[D];for(ja=0;ja<Z.length;ja++){ia=Z[ja];ia.col=M;ia.level=D;la.push(ia)}}ba(r,1,true)}return la}function f(o){return o.end?N(o.end):xa(N(o.start),u("defaultEventMinutes"))}function g(o,s){var v,F=o.length,r,J,M,k,D,Z,ja,ia,la,
$="",w,I,R={},V={},ea=pa(),aa;v=z();if(w=u("isRTL")){I=-1;aa=v-1}else{I=1;aa=0}for(v=0;v<F;v++){r=o[v];J=r.event;M=qa(r.start,r.start);k=qa(r.start,r.end);D=r.col;Z=r.level;ja=r.forward||0;ia=G(D*I+aa);la=p(D*I+aa)-ia;la=Math.min(la-6,la*0.95);D=Z?la/(Z+ja+1):ja?(la/(ja+1)-6)*2:la;Z=ia+la/(Z+ja+1)*Z*I+(w?la-D:0);r.top=M;r.left=Z;r.outerWidth=D;r.outerHeight=k-M;$+=l(J,r)}ea[0].innerHTML=$;w=ea.children();for(v=0;v<F;v++){r=o[v];J=r.event;$=m(w[v]);I=fa("eventRender",J,J,$);if(I===false)$.remove();
else{if(I&&I!==true){$.remove();$=m(I).css({position:"absolute",top:r.top,left:r.left}).appendTo(ea)}r.element=$;if(J._id===s)t(J,$,r);else $[0]._fci=v;ya(J,$)}}Db(ea,o,t);for(v=0;v<F;v++){r=o[v];if($=r.element){J=R[s=r.key=Ib($[0])];r.vsides=J===ma?(R[s]=Sa($,true)):J;J=V[s];r.hsides=J===ma?(V[s]=pb($,true)):J;s=$.find("div.fc-event-content");if(s.length)r.contentTop=s[0].offsetTop}}for(v=0;v<F;v++){r=o[v];if($=r.element){$[0].style.width=Math.max(0,r.outerWidth-r.hsides)+"px";R=Math.max(0,r.outerHeight-
r.vsides);$[0].style.height=R+"px";J=r.event;if(r.contentTop!==ma&&R-r.contentTop<10){$.find("div.fc-event-time").text(Y(J.start,u("timeFormat"))+" - "+J.title);$.find("div.fc-event-title").remove()}fa("eventAfterRender",J,J,$)}}}function l(o,s){var v="<",F=o.url,r=Jb(o,u),J=r?" style='"+r+"'":"",M=["fc-event","fc-event-skin","fc-event-vert"];oa(o)&&M.push("fc-event-draggable");s.isStart&&M.push("fc-corner-top");s.isEnd&&M.push("fc-corner-bottom");M=M.concat(o.className);if(o.source)M=M.concat(o.source.className||
[]);v+=F?"a href='"+Qa(o.url)+"'":"div";v+=" class='"+M.join(" ")+"' style='position:absolute;z-index:8;top:"+s.top+"px;left:"+s.left+"px;"+r+"'><div class='fc-event-inner fc-event-skin'"+J+"><div class='fc-event-head fc-event-skin'"+J+"><div class='fc-event-time'>"+Qa(W(o.start,o.end,u("timeFormat")))+"</div></div><div class='fc-event-content'><div class='fc-event-title'>"+Qa(o.title)+"</div></div><div class='fc-event-bg'></div></div>";if(s.isEnd&&ga(o))v+="<div class='ui-resizable-handle ui-resizable-s'>=</div>";
v+="</"+(F?"a":"div")+">";return v}function j(o,s,v){oa(o)&&y(o,s,v.isStart);v.isEnd&&ga(o)&&c(o,s,v);da(o,s)}function t(o,s,v){var F=s.find("div.fc-event-time");oa(o)&&S(o,s,F);v.isEnd&&ga(o)&&Q(o,s,F);da(o,s)}function y(o,s,v){function F(){if(!M){s.width(r).height("").draggable("option","grid",null);M=true}}var r,J,M=true,k,D=u("isRTL")?-1:1,Z=U(),ja=H(),ia=T(),la=ka();s.draggable({zIndex:9,opacity:u("dragOpacity","month"),revertDuration:u("dragRevertDuration"),start:function($,w){fa("eventDragStart",
s,o,$,w);i(o,s);r=s.width();Z.start(function(I,R,V,ea){B();if(I){J=false;k=ea*D;if(I.row)if(v){if(M){s.width(ja-10);Eb(s,ia*Math.round((o.end?(o.end-o.start)/wc:u("defaultEventMinutes"))/u("slotMinutes")));s.draggable("option","grid",[ja,1]);M=false}}else J=true;else{E(ba(N(o.start),k),ba(Ua(o),k));F()}J=J||M&&!k}else{F();J=true}s.draggable("option","revert",J)},$,"drag")},stop:function($,w){Z.stop();B();fa("eventDragStop",s,o,$,w);if(J){F();s.css("filter","");K(o,s)}else{var I=0;M||(I=Math.round((s.offset().top-
X().offset().top)/ia)*u("slotMinutes")+la-(o.start.getHours()*60+o.start.getMinutes()));C(this,o,k,I,M,$,w)}}})}function S(o,s,v){function F(I){var R=xa(N(o.start),I),V;if(o.end)V=xa(N(o.end),I);v.text(W(R,V,u("timeFormat")))}function r(){if(M){v.css("display","");s.draggable("option","grid",[$,w]);M=false}}var J,M=false,k,D,Z,ja=u("isRTL")?-1:1,ia=U(),la=z(),$=H(),w=T();s.draggable({zIndex:9,scroll:false,grid:[$,w],axis:la==1?"y":false,opacity:u("dragOpacity"),revertDuration:u("dragRevertDuration"),
start:function(I,R){fa("eventDragStart",s,o,I,R);i(o,s);J=s.position();D=Z=0;ia.start(function(V,ea,aa,va){s.draggable("option","revert",!V);B();if(V){k=va*ja;if(u("allDaySlot")&&!V.row){if(!M){M=true;v.hide();s.draggable("option","grid",null)}E(ba(N(o.start),k),ba(Ua(o),k))}else r()}},I,"drag")},drag:function(I,R){D=Math.round((R.position.top-J.top)/w)*u("slotMinutes");if(D!=Z){M||F(D);Z=D}},stop:function(I,R){var V=ia.stop();B();fa("eventDragStop",s,o,I,R);if(V&&(k||D||M))C(this,o,k,M?0:D,M,I,R);
else{r();s.css("filter","");s.css(J);F(0);K(o,s)}}})}function Q(o,s,v){var F,r,J=T();s.resizable({handles:{s:"div.ui-resizable-s"},grid:J,start:function(M,k){F=r=0;i(o,s);s.css("z-index",9);fa("eventResizeStart",this,o,M,k)},resize:function(M,k){F=Math.round((Math.max(J,s.height())-k.originalSize.height)/J);if(F!=r){v.text(W(o.start,!F&&!o.end?null:xa(ra(o),u("slotMinutes")*F),u("timeFormat")));r=F}},stop:function(M,k){fa("eventResizeStop",this,o,M,k);if(F)P(this,o,0,u("slotMinutes")*F,M,k);else{s.css("z-index",
8);K(o,s)}}})}var q=this;q.renderEvents=a;q.compileDaySegs=e;q.clearEvents=b;q.slotSegHtml=l;q.bindDaySeg=j;Qb.call(q);var u=q.opt,fa=q.trigger,oa=q.isEventDraggable,ga=q.isEventResizable,ra=q.eventEnd,sa=q.reportEvents,ha=q.reportEventClear,da=q.eventElementHandlers,na=q.setHeight,ua=q.getDaySegmentContainer,pa=q.getSlotSegmentContainer,U=q.getHoverListener,ca=q.getMaxMinute,ka=q.getMinMinute,qa=q.timePosition,G=q.colContentLeft,p=q.colContentRight,L=q.renderDaySegs,c=q.resizableDayEvent,z=q.getColCnt,
H=q.getColWidth,T=q.getSlotHeight,X=q.getBodyContent,ya=q.reportEventElement,K=q.showEvents,i=q.hideEvents,C=q.eventDrop,P=q.eventResize,E=q.renderDayOverlay,B=q.clearOverlays,n=q.calendar,Y=n.formatDate,W=n.formatDates}function vc(a){var b,e,d,f,g,l;for(b=a.length-1;b>0;b--){f=a[b];for(e=0;e<f.length;e++){g=f[e];for(d=0;d<a[b-1].length;d++){l=a[b-1][d];if(Cb(g,l))l.forward=Math.max(l.forward||0,(g.forward||0)+1)}}}}function Kb(a,b,e){function d(G,p){G=qa[G];if(typeof G=="object")return jb(G,p||e);
return G}function f(G,p){return b.trigger.apply(b,[G,p||da].concat(Array.prototype.slice.call(arguments,2),[da]))}function g(G){return j(G)&&!d("disableDragging")}function l(G){return j(G)&&!d("disableResizing")}function j(G){return Ta(G.editable,(G.source||{}).editable,d("editable"))}function t(G){U={};var p,L=G.length,c;for(p=0;p<L;p++){c=G[p];if(U[c._id])U[c._id].push(c);else U[c._id]=[c]}}function y(G){return G.end?N(G.end):na(G)}function S(G,p){ca.push(p);if(ka[G._id])ka[G._id].push(p);else ka[G._id]=
[p]}function Q(){ca=[];ka={}}function q(G,p){p.click(function(L){if(!p.hasClass("ui-draggable-dragging")&&!p.hasClass("ui-resizable-resizing"))return f("eventClick",this,G,L)}).hover(function(L){f("eventMouseover",this,G,L)},function(L){f("eventMouseout",this,G,L)})}function u(G,p){oa(G,p,"show")}function fa(G,p){oa(G,p,"hide")}function oa(G,p,L){G=ka[G._id];var c,z=G.length;for(c=0;c<z;c++)if(!p||G[c][0]!=p[0])G[c][L]()}function ga(G,p,L,c,z,H,T){var X=p.allDay,ya=p._id;sa(U[ya],L,c,z);f("eventDrop",
G,p,L,c,z,function(){sa(U[ya],-L,-c,X);pa(ya)},H,T);pa(ya)}function ra(G,p,L,c,z,H){var T=p._id;ha(U[T],L,c);f("eventResize",G,p,L,c,function(){ha(U[T],-L,-c);pa(T)},z,H);pa(T)}function sa(G,p,L,c){L=L||0;for(var z,H=G.length,T=0;T<H;T++){z=G[T];if(c!==ma)z.allDay=c;xa(ba(z.start,p,true),L);if(z.end)z.end=xa(ba(z.end,p,true),L);ua(z,qa)}}function ha(G,p,L){L=L||0;for(var c,z=G.length,H=0;H<z;H++){c=G[H];c.end=xa(ba(y(c),p,true),L);ua(c,qa)}}var da=this;da.element=a;da.calendar=b;da.name=e;da.opt=
d;da.trigger=f;da.isEventDraggable=g;da.isEventResizable=l;da.reportEvents=t;da.eventEnd=y;da.reportEventElement=S;da.reportEventClear=Q;da.eventElementHandlers=q;da.showEvents=u;da.hideEvents=fa;da.eventDrop=ga;da.eventResize=ra;var na=da.defaultEventEnd,ua=b.normalizeEvent,pa=b.reportEventChange,U={},ca=[],ka={},qa=b.options}function Qb(){function a(i,C){var P=z(),E=pa(),B=U(),n=0,Y,W,o=i.length,s,v;P[0].innerHTML=e(i);d(i,P.children());f(i);g(i,P,C);l(i);j(i);t(i);C=y();for(P=0;P<E;P++){Y=[];for(W=
0;W<B;W++)Y[W]=0;for(;n<o&&(s=i[n]).row==P;){W=Hb(Y.slice(s.startCol,s.endCol));s.top=W;W+=s.outerHeight;for(v=s.startCol;v<s.endCol;v++)Y[v]=W;n++}C[P].height(Hb(Y))}Q(i,S(C))}function b(i,C,P){var E=m("<div/>"),B=z(),n=i.length,Y;E[0].innerHTML=e(i);E=E.children();B.append(E);d(i,E);l(i);j(i);t(i);Q(i,S(y()));E=[];for(B=0;B<n;B++)if(Y=i[B].element){i[B].row===C&&Y.css("top",P);E.push(Y[0])}return m(E)}function e(i){var C=fa("isRTL"),P,E=i.length,B,n,Y,W;P=ka();var o=P.left,s=P.right,v,F,r,J,M,k=
"";for(P=0;P<E;P++){B=i[P];n=B.event;W=["fc-event","fc-event-skin","fc-event-hori"];ga(n)&&W.push("fc-event-draggable");if(C){B.isStart&&W.push("fc-corner-right");B.isEnd&&W.push("fc-corner-left");v=p(B.end.getDay()-1);F=p(B.start.getDay());r=B.isEnd?qa(v):o;J=B.isStart?G(F):s}else{B.isStart&&W.push("fc-corner-left");B.isEnd&&W.push("fc-corner-right");v=p(B.start.getDay());F=p(B.end.getDay()-1);r=B.isStart?qa(v):o;J=B.isEnd?G(F):s}W=W.concat(n.className);if(n.source)W=W.concat(n.source.className||
[]);Y=n.url;M=Jb(n,fa);k+=Y?"<a href='"+Qa(Y)+"'":"<div";k+=" class='"+W.join(" ")+"' style='position:absolute;z-index:8;left:"+r+"px;"+M+"'><div class='fc-event-inner fc-event-skin'"+(M?" style='"+M+"'":"")+">";if(!n.allDay&&B.isStart)k+="<span class='fc-event-time'>"+Qa(T(n.start,n.end,fa("timeFormat")))+"</span>";k+="<span class='fc-event-title'>"+Qa(n.title)+"</span></div>";if(B.isEnd&&ra(n))k+="<div class='ui-resizable-handle ui-resizable-"+(C?"w":"e")+"'>&nbsp;&nbsp;&nbsp;</div>";k+="</"+(Y?
"a":"div")+">";B.left=r;B.outerWidth=J-r;B.startCol=v;B.endCol=F+1}return k}function d(i,C){var P,E=i.length,B,n,Y;for(P=0;P<E;P++){B=i[P];n=B.event;Y=m(C[P]);n=oa("eventRender",n,n,Y);if(n===false)Y.remove();else{if(n&&n!==true){n=m(n).css({position:"absolute",left:B.left});Y.replaceWith(n);Y=n}B.element=Y}}}function f(i){var C,P=i.length,E,B;for(C=0;C<P;C++){E=i[C];(B=E.element)&&ha(E.event,B)}}function g(i,C,P){var E,B=i.length,n,Y,W;for(E=0;E<B;E++){n=i[E];if(Y=n.element){W=n.event;if(W._id===
P)H(W,Y,n);else Y[0]._fci=E}}Db(C,i,H)}function l(i){var C,P=i.length,E,B,n,Y,W={};for(C=0;C<P;C++){E=i[C];if(B=E.element){n=E.key=Ib(B[0]);Y=W[n];if(Y===ma)Y=W[n]=pb(B,true);E.hsides=Y}}}function j(i){var C,P=i.length,E,B;for(C=0;C<P;C++){E=i[C];if(B=E.element)B[0].style.width=Math.max(0,E.outerWidth-E.hsides)+"px"}}function t(i){var C,P=i.length,E,B,n,Y,W={};for(C=0;C<P;C++){E=i[C];if(B=E.element){n=E.key;Y=W[n];if(Y===ma)Y=W[n]=Fb(B);E.outerHeight=B[0].offsetHeight+Y}}}function y(){var i,C=pa(),
P=[];for(i=0;i<C;i++)P[i]=ca(i).find("td:first div.fc-day-content > div");return P}function S(i){var C,P=i.length,E=[];for(C=0;C<P;C++)E[C]=i[C][0].offsetTop;return E}function Q(i,C){var P,E=i.length,B,n;for(P=0;P<E;P++){B=i[P];if(n=B.element){n[0].style.top=C[B.row]+(B.top||0)+"px";B=B.event;oa("eventAfterRender",B,B,n)}}}function q(i,C,P){var E=fa("isRTL"),B=E?"w":"e",n=C.find("div.ui-resizable-"+B),Y=false;qb(C);C.mousedown(function(W){W.preventDefault()}).click(function(W){if(Y){W.preventDefault();
W.stopImmediatePropagation()}});n.mousedown(function(W){function o(ia){oa("eventResizeStop",this,i,ia);m("body").css("cursor","");s.stop();ya();k&&ua(this,i,k,0,ia);setTimeout(function(){Y=false},0)}if(W.which==1){Y=true;var s=u.getHoverListener(),v=pa(),F=U(),r=E?-1:1,J=E?F-1:0,M=C.css("top"),k,D,Z=m.extend({},i),ja=L(i.start);K();m("body").css("cursor",B+"-resize").one("mouseup",o);oa("eventResizeStart",this,i,W);s.start(function(ia,la){if(ia){var $=Math.max(ja.row,ia.row);ia=ia.col;if(v==1)$=0;
if($==ja.row)ia=E?Math.min(ja.col,ia):Math.max(ja.col,ia);k=$*7+ia*r+J-(la.row*7+la.col*r+J);la=ba(sa(i),k,true);if(k){Z.end=la;$=D;D=b(c([Z]),P.row,M);D.find("*").css("cursor",B+"-resize");$&&$.remove();na(i)}else if(D){da(i);D.remove();D=null}ya();X(i.start,ba(N(la),1))}},W)}})}var u=this;u.renderDaySegs=a;u.resizableDayEvent=q;var fa=u.opt,oa=u.trigger,ga=u.isEventDraggable,ra=u.isEventResizable,sa=u.eventEnd,ha=u.reportEventElement,da=u.showEvents,na=u.hideEvents,ua=u.eventResize,pa=u.getRowCnt,
U=u.getColCnt,ca=u.allDayRow,ka=u.allDayBounds,qa=u.colContentLeft,G=u.colContentRight,p=u.dayOfWeekCol,L=u.dateCell,c=u.compileDaySegs,z=u.getDaySegmentContainer,H=u.bindDaySeg,T=u.calendar.formatDates,X=u.renderDayOverlay,ya=u.clearOverlays,K=u.clearSelection}function Mb(){function a(Q,q,u){b();q||(q=j(Q,u));t(Q,q,u);e(Q,q,u)}function b(Q){if(S){S=false;y();l("unselect",null,Q)}}function e(Q,q,u,fa){S=true;l("select",null,Q,q,u,fa)}function d(Q){var q=f.cellDate,u=f.cellIsAllDay,fa=f.getHoverListener(),
oa=f.reportDayClick;if(Q.which==1&&g("selectable")){b(Q);var ga;fa.start(function(ra,sa){y();if(ra&&u(ra)){ga=[q(sa),q(ra)].sort(Gb);t(ga[0],ga[1],true)}else ga=null},Q);m(document).one("mouseup",function(ra){fa.stop();if(ga){+ga[0]==+ga[1]&&oa(ga[0],true,ra);e(ga[0],ga[1],true,ra)}})}}var f=this;f.select=a;f.unselect=b;f.reportSelection=e;f.daySelectionMousedown=d;var g=f.opt,l=f.trigger,j=f.defaultSelectionEnd,t=f.renderSelection,y=f.clearSelection,S=false;g("selectable")&&g("unselectAuto")&&m(document).mousedown(function(Q){var q=
g("unselectCancel");if(q)if(m(Q.target).parents(q).length)return;b(Q)})}function Lb(){function a(g,l){var j=f.shift();j||(j=m("<div class='fc-cell-overlay' style='position:absolute;z-index:3'/>"));j[0].parentNode!=l[0]&&j.appendTo(l);d.push(j.css(g).show());return j}function b(){for(var g;g=d.shift();)f.push(g.hide().unbind())}var e=this;e.renderOverlay=a;e.clearOverlays=b;var d=[],f=[]}function Nb(a){var b=this,e,d;b.build=function(){e=[];d=[];a(e,d)};b.cell=function(f,g){var l=e.length,j=d.length,
t,y=-1,S=-1;for(t=0;t<l;t++)if(g>=e[t][0]&&g<e[t][1]){y=t;break}for(t=0;t<j;t++)if(f>=d[t][0]&&f<d[t][1]){S=t;break}return y>=0&&S>=0?{row:y,col:S}:null};b.rect=function(f,g,l,j,t){t=t.offset();return{top:e[f][0]-t.top,left:d[g][0]-t.left,width:d[j][1]-d[g][0],height:e[l][1]-e[f][0]}}}function Ob(a){function b(j){xc(j);j=a.cell(j.pageX,j.pageY);if(!j!=!l||j&&(j.row!=l.row||j.col!=l.col)){if(j){g||(g=j);f(j,g,j.row-g.row,j.col-g.col)}else f(j,g);l=j}}var e=this,d,f,g,l;e.start=function(j,t,y){f=j;
g=l=null;a.build();b(t);d=y||"mousemove";m(document).bind(d,b)};e.stop=function(){m(document).unbind(d,b);return l}}function xc(a){if(a.pageX===ma){a.pageX=a.originalEvent.pageX;a.pageY=a.originalEvent.pageY}}function Pb(a){function b(l){return d[l]=d[l]||a(l)}var e=this,d={},f={},g={};e.left=function(l){return f[l]=f[l]===ma?b(l).position().left:f[l]};e.right=function(l){return g[l]=g[l]===ma?e.left(l)+b(l).width():g[l]};e.clear=function(){d={};f={};g={}}}var Ya={defaultView:"month",aspectRatio:1.35,
header:{left:"title",center:"",right:"today prev,next"},weekends:true,allDayDefault:true,ignoreTimezone:true,lazyFetching:true,startParam:"start",endParam:"end",titleFormat:{month:"MMMM yyyy",week:"MMM d[ yyyy]{ '&#8212;'[ MMM] d yyyy}",day:"dddd, MMM d, yyyy"},columnFormat:{month:"ddd",week:"ddd M/d",day:"dddd M/d"},timeFormat:{"":"h(:mm)t"},isRTL:false,firstDay:0,monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan",
"Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],buttonText:{prev:"&nbsp;&#9668;&nbsp;",next:"&nbsp;&#9658;&nbsp;",prevYear:"&nbsp;&lt;&lt;&nbsp;",nextYear:"&nbsp;&gt;&gt;&nbsp;",today:"today",month:"month",week:"week",day:"day"},theme:false,buttonIcons:{prev:"circle-triangle-w",next:"circle-triangle-e"},unselectAuto:true,dropAccept:"*"},yc=
{header:{left:"next,prev today",center:"",right:"title"},buttonText:{prev:"&nbsp;&#9658;&nbsp;",next:"&nbsp;&#9668;&nbsp;",prevYear:"&nbsp;&gt;&gt;&nbsp;",nextYear:"&nbsp;&lt;&lt;&nbsp;"},buttonIcons:{prev:"circle-triangle-e",next:"circle-triangle-w"}},Aa=m.fullCalendar={version:"1.5.3"},Ja=Aa.views={};m.fn.fullCalendar=function(a){if(typeof a=="string"){var b=Array.prototype.slice.call(arguments,1),e;this.each(function(){var f=m.data(this,"fullCalendar");if(f&&m.isFunction(f[a])){f=f[a].apply(f,
b);if(e===ma)e=f;a=="destroy"&&m.removeData(this,"fullCalendar")}});if(e!==ma)return e;return this}var d=a.eventSources||[];delete a.eventSources;if(a.events){d.push(a.events);delete a.events}a=m.extend(true,{},Ya,a.isRTL||a.isRTL===ma&&Ya.isRTL?yc:{},a);this.each(function(f,g){f=m(g);g=new Yb(f,a,d);f.data("fullCalendar",g);g.render()});return this};Aa.sourceNormalizers=[];Aa.sourceFetchers=[];var ac={dataType:"json",cache:false},bc=1;Aa.addDays=ba;Aa.cloneDate=N;Aa.parseDate=kb;Aa.parseISO8601=
Bb;Aa.parseTime=mb;Aa.formatDate=Oa;Aa.formatDates=ib;var lc=["sun","mon","tue","wed","thu","fri","sat"],Ab=864E5,cc=36E5,wc=6E4,dc={s:function(a){return a.getSeconds()},ss:function(a){return Pa(a.getSeconds())},m:function(a){return a.getMinutes()},mm:function(a){return Pa(a.getMinutes())},h:function(a){return a.getHours()%12||12},hh:function(a){return Pa(a.getHours()%12||12)},H:function(a){return a.getHours()},HH:function(a){return Pa(a.getHours())},d:function(a){return a.getDate()},dd:function(a){return Pa(a.getDate())},
ddd:function(a,b){return b.dayNamesShort[a.getDay()]},dddd:function(a,b){return b.dayNames[a.getDay()]},M:function(a){return a.getMonth()+1},MM:function(a){return Pa(a.getMonth()+1)},MMM:function(a,b){return b.monthNamesShort[a.getMonth()]},MMMM:function(a,b){return b.monthNames[a.getMonth()]},yy:function(a){return(a.getFullYear()+"").substring(2)},yyyy:function(a){return a.getFullYear()},t:function(a){return a.getHours()<12?"a":"p"},tt:function(a){return a.getHours()<12?"am":"pm"},T:function(a){return a.getHours()<
12?"A":"P"},TT:function(a){return a.getHours()<12?"AM":"PM"},u:function(a){return Oa(a,"yyyy-MM-dd'T'HH:mm:ss'Z'")},S:function(a){a=a.getDate();if(a>10&&a<20)return"th";return["st","nd","rd"][a%10-1]||"th"}};Aa.applyAll=$a;Ja.month=mc;Ja.basicWeek=nc;Ja.basicDay=oc;wb({weekMode:"fixed"});Ja.agendaWeek=qc;Ja.agendaDay=rc;wb({allDaySlot:true,allDayText:"all-day",firstHour:6,slotMinutes:30,defaultEventMinutes:120,axisFormat:"h(:mm)tt",timeFormat:{agenda:"h:mm{ - h:mm}"},dragOpacity:{agenda:0.5},minTime:0,
maxTime:24})})(jQuery);


// tipsy, facebook style tooltips for jquery
// version 1.0.0a
// (c) 2008-2010 jason frame [jason@onehackoranother.com]
// released under the MIT license

(function($) {
    
    function maybeCall(thing, ctx) {
        return (typeof thing == 'function') ? (thing.call(ctx)) : thing;
    };
    
    function Tipsy(element, options) {
        this.$element = $(element);
        this.options = options;
        this.enabled = true;
        this.fixTitle();
    };
    
    Tipsy.prototype = {
        show: function() {
            var title = this.getTitle();
            if (title && this.enabled) {
                var $tip = this.tip();
                
                $tip.find('.tipsy-inner')[this.options.html ? 'html' : 'text'](title);
                $tip[0].className = 'tipsy'; // reset classname in case of dynamic gravity
                $tip.remove().css({top: 0, left: 0, visibility: 'hidden', display: 'block'}).prependTo(document.body);
                
                var pos = $.extend({}, this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                });
                
                var actualWidth = $tip[0].offsetWidth,
                    actualHeight = $tip[0].offsetHeight,
                    gravity = maybeCall(this.options.gravity, this.$element[0]);
                
                var tp;
                switch (gravity.charAt(0)) {
                    case 'n':
                        tp = {top: pos.top + pos.height + this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2};
                        break;
                    case 's':
                        tp = {top: pos.top - actualHeight - this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2};
                        break;
                    case 'e':
                        tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth - this.options.offset};
                        break;
                    case 'w':
                        tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width + this.options.offset};
                        break;
                }
                
                if (gravity.length == 2) {
                    if (gravity.charAt(1) == 'w') {
                        tp.left = pos.left + pos.width / 2 - 15;
                    } else {
                        tp.left = pos.left + pos.width / 2 - actualWidth + 15;
                    }
                }
                
                $tip.css(tp).addClass('tipsy-' + gravity);
                $tip.find('.tipsy-arrow')[0].className = 'tipsy-arrow tipsy-arrow-' + gravity.charAt(0);
                if (this.options.className) {
                    $tip.addClass(maybeCall(this.options.className, this.$element[0]));
                }
                
                if (this.options.fade) {
                    $tip.stop().css({opacity: 0, display: 'block', visibility: 'visible'}).animate({opacity: this.options.opacity});
                } else {
                    $tip.css({visibility: 'visible', opacity: this.options.opacity});
                }
            }
        },
        
        hide: function() {
            if (this.options.fade) {
                this.tip().stop().fadeOut(function() { $(this).remove(); });
            } else {
                this.tip().remove();
            }
        },
        
        fixTitle: function() {
            var $e = this.$element;
            if ($e.attr('title') || typeof($e.attr('original-title')) != 'string') {
                $e.attr('original-title', $e.attr('title') || '').removeAttr('title');
            }
        },
        
        getTitle: function() {
            var title, $e = this.$element, o = this.options;
            this.fixTitle();
            var title, o = this.options;
            if (typeof o.title == 'string') {
                title = $e.attr(o.title == 'title' ? 'original-title' : o.title);
            } else if (typeof o.title == 'function') {
                title = o.title.call($e[0]);
            }
            title = ('' + title).replace(/(^\s*|\s*$)/, "");
            return title || o.fallback;
        },
        
        tip: function() {
            if (!this.$tip) {
                this.$tip = $('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>');
            }
            return this.$tip;
        },
        
        validate: function() {
            if (!this.$element[0].parentNode) {
                this.hide();
                this.$element = null;
                this.options = null;
            }
        },
        
        enable: function() { this.enabled = true; },
        disable: function() { this.enabled = false; },
        toggleEnabled: function() { this.enabled = !this.enabled; }
    };
    
    $.fn.tipsy = function(options) {
        
        if (options === true) {
            return this.data('tipsy');
        } else if (typeof options == 'string') {
            var tipsy = this.data('tipsy');
            if (tipsy) tipsy[options]();
            return this;
        }
        
        options = $.extend({}, $.fn.tipsy.defaults, options);
        
        function get(ele) {
            var tipsy = $.data(ele, 'tipsy');
            if (!tipsy) {
                tipsy = new Tipsy(ele, $.fn.tipsy.elementOptions(ele, options));
                $.data(ele, 'tipsy', tipsy);
            }
            return tipsy;
        }
        
        function enter() {
            var tipsy = get(this);
            tipsy.hoverState = 'in';
            if (options.delayIn == 0) {
                tipsy.show();
            } else {
                tipsy.fixTitle();
                setTimeout(function() { if (tipsy.hoverState == 'in') tipsy.show(); }, options.delayIn);
            }
        };
        
        function leave() {
            var tipsy = get(this);
            tipsy.hoverState = 'out';
            if (options.delayOut == 0) {
                tipsy.hide();
            } else {
                setTimeout(function() { if (tipsy.hoverState == 'out') tipsy.hide(); }, options.delayOut);
            }
        };
        
        if (!options.live) this.each(function() { get(this); });
        
        if (options.trigger != 'manual') {
            var binder   = options.live ? 'live' : 'bind',
                eventIn  = options.trigger == 'hover' ? 'mouseenter' : 'focus',
                eventOut = options.trigger == 'hover' ? 'mouseleave' : 'blur';
            this[binder](eventIn, enter)[binder](eventOut, leave);
        }
        
        return this;
        
    };
    
    $.fn.tipsy.defaults = {
        className: null,
        delayIn: 0,
        delayOut: 0,
        fade: false,
        fallback: '',
        gravity: 'n',
        html: false,
        live: false,
        offset: 0,
        opacity: 0.8,
        title: 'title',
        trigger: 'hover'
    };
    
    // Overwrite this method to provide options on a per-element basis.
    // For example, you could store the gravity in a 'tipsy-gravity' attribute:
    // return $.extend({}, options, {gravity: $(ele).attr('tipsy-gravity') || 'n' });
    // (remember - do not modify 'options' in place!)
    $.fn.tipsy.elementOptions = function(ele, options) {
        return $.metadata ? $.extend({}, options, $(ele).metadata()) : options;
    };
    
    $.fn.tipsy.autoNS = function() {
        return $(this).offset().top > ($(document).scrollTop() + $(window).height() / 2) ? 's' : 'n';
    };
    
    $.fn.tipsy.autoWE = function() {
        return $(this).offset().left > ($(document).scrollLeft() + $(window).width() / 2) ? 'e' : 'w';
    };
    
    /**
     * yields a closure of the supplied parameters, producing a function that takes
     * no arguments and is suitable for use as an autogravity function like so:
     *
     * @param margin (int) - distance from the viewable region edge that an
     *        element should be before setting its tooltip's gravity to be away
     *        from that edge.
     * @param prefer (string, e.g. 'n', 'sw', 'w') - the direction to prefer
     *        if there are no viewable region edges effecting the tooltip's
     *        gravity. It will try to vary from this minimally, for example,
     *        if 'sw' is preferred and an element is near the right viewable 
     *        region edge, but not the top edge, it will set the gravity for
     *        that element's tooltip to be 'se', preserving the southern
     *        component.
     */
     $.fn.tipsy.autoBounds = function(margin, prefer) {
		return function() {
			var dir = {ns: prefer[0], ew: (prefer.length > 1 ? prefer[1] : false)},
			    boundTop = $(document).scrollTop() + margin,
			    boundLeft = $(document).scrollLeft() + margin,
			    $this = $(this);

			if ($this.offset().top < boundTop) dir.ns = 'n';
			if ($this.offset().left < boundLeft) dir.ew = 'w';
			if ($(window).width() + $(document).scrollLeft() - $this.offset().left < margin) dir.ew = 'e';
			if ($(window).height() + $(document).scrollTop() - $this.offset().top < margin) dir.ns = 's';

			return dir.ns + (dir.ew ? dir.ew : '');
		}
	};
    
})(jQuery);

/*
 * Inline Form Validation Engine 2.2.4, jQuery plugin
 *
 * Copyright(c) 2010, Cedric Dugas
 * http://www.position-absolute.com
 *
 * 2.0 Rewrite by Olivier Refalo
 * http://www.crionics.com
 *
 * Form validation engine allowing custom regex rules to be added.
 * Licensed under the MIT License
 */
(function($) {

    var methods = {

        /**
         * Kind of the constructor, called before any action
         * @param {Map} user options
         */
        init: function(options) {
            var form = this;
            if (!form.data('jqv') || form.data('jqv') == null ) {
                methods._saveOptions(form, options);

                // bind all formError elements to close on click
                $(".formError").live("click", function() {
                    $(this).fadeOut(150, function() {

                        // remove prompt once invisible
                        $(this).remove();
                    });
                });
            }
            return this;
        },
        /**
         * Attachs jQuery.validationEngine to form.submit and field.blur events
         * Takes an optional params: a list of options
         * ie. jQuery("#formID1").validationEngine('attach', {promptPosition : "centerRight"});
         */
        attach: function(userOptions) {
			
            var form = this;
            var options;

            if(userOptions)
                options = methods._saveOptions(form, userOptions);
            else
                options = form.data('jqv');

			var validateAttribute = (form.find("[data-validation-engine*=validate]")) ? "data-validation-engine" : "class";
			
            if (!options.binded) {
				if (options.bindMethod == "bind"){
				
					// bind fields
                    form.find("[class*=validate]").not("[type=checkbox]").not("[type=radio]").not(".datepicker").bind(options.validationEventTrigger, methods._onFieldEvent);
                    form.find("[class*=validate][type=checkbox],[class*=validate][type=radio]").bind("click", methods._onFieldEvent);
					form.find("[class*=validate][class*=datepicker]").bind(options.validationEventTrigger,{"delay": 300}, methods._onFieldEvent);

                    // bind form.submit
                    form.bind("submit", methods._onSubmitEvent);
				} else if (options.bindMethod == "live") {
                    // bind fields with LIVE (for persistant state)
                    form.find("[class*=validate]").not("[type=checkbox]").not(".datepicker").live(options.validationEventTrigger, methods._onFieldEvent);
                    form.find("[class*=validate][type=checkbox]").live("click", methods._onFieldEvent);
					form.find("[class*=validate][class*=datepicker]").live(options.validationEventTrigger,{"delay": 300}, methods._onFieldEvent);

                    // bind form.submit
                    form.live("submit", methods._onSubmitEvent);
				}

               	options.binded = true;
	
				if (options.autoPositionUpdate) {
	    			$(window).bind("resize", {
						"noAnimation": true, 
						"formElem": form
	    				}, methods.updatePromptsPosition);
				}
		
           }
           return this;
        },
        /**
         * Unregisters any bindings that may point to jQuery.validaitonEngine
         */
        detach: function() {
            var form = this;
            var options = form.data('jqv');
            if (options.binded) {

                // unbind fields
                form.find("[class*=validate]").not("[type=checkbox]").unbind(options.validationEventTrigger, methods._onFieldEvent);
                form.find("[class*=validate][type=checkbox],[class*=validate][type=radio]").unbind("click", methods._onFieldEvent);

                // unbind form.submit
                form.unbind("submit", methods.onAjaxFormComplete);
                
                // unbind live fields (kill)
                form.find("[class*=validate]").not("[type=checkbox]").die(options.validationEventTrigger, methods._onFieldEvent);
                form.find("[class*=validate][type=checkbox]").die("click", methods._onFieldEvent);
                
				// unbind form.submit
                form.die("submit", methods.onAjaxFormComplete);
                
                form.removeData('jqv');
		
				if (options.autoPositionUpdate) {
		    		$(window).unbind("resize", methods.updatePromptsPosition)
				}
           	}
            return this;
        },
        /**
         * Validates the form fields, shows prompts accordingly.
         * Note: There is no ajax form validation with this method, only field ajax validation are evaluated
         *
         * @return true if the form validates, false if it fails
         */
        validate: function() {
            return methods._validateFields(this);
        },
        /**
         * Validates one field, shows prompt accordingly.
         * Note: There is no ajax form validation with this method, only field ajax validation are evaluated
         *
         * @return true if the form validates, false if it fails
         */
        validateField: function(el) {
            var options = $(this).data('jqv');
            var r = methods._validateField($(el), options);

            if (options.onSuccess && options.InvalidFields.length == 0)
                options.onSuccess();
            else if (options.onFailure && options.InvalidFields.length > 0)
                options.onFailure();

            return r;
        },
        /**
         * Validates the form fields, shows prompts accordingly.
         * Note: this methods performs fields and form ajax validations(if setup)
         *
         * @return true if the form validates, false if it fails, undefined if ajax is used for form validation
         */
        validateform: function() {
            return methods._onSubmitEvent.call(this);
        },
		/**
         *  Redraw prompts position, useful when you change the DOM state when validating
         */
        updatePromptsPosition: function(event) {
	    
			if (event && this == window)
				var form = event.data.formElem, noAnimation = event.data.noAnimation;
		    else
				var form = $(this.closest('form'));
            
			var options = form.data('jqv');
	        // No option, take default one
		    form.find('[class*=validate]').not(':hidden').not(":disabled").each(function(){
			   	var field = $(this);
			   	var prompt = methods._getPrompt(field);
			   	var promptText = $(prompt).find(".formErrorContent").html();

			   	if(prompt)
					methods._updatePrompt(field, $(prompt), promptText, undefined, false, options, noAnimation);
		    })
	        return this;
        },
        /**
         * Displays a prompt on a element.
         * Note that the element needs an id!
         *
         * @param {String} promptText html text to display type
         * @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
         * @param {String} possible values topLeft, topRight, bottomLeft, centerRight, bottomRight
         */
        showPrompt: function(promptText, type, promptPosition, showArrow) {

            var form = this.closest('form');
            var options = form.data('jqv');
            // No option, take default one
			if(!options) options = methods._saveOptions(this, options);
            if(promptPosition)
                options.promptPosition=promptPosition;
            options.showArrow = showArrow==true;

            methods._showPrompt(this, promptText, type, false, options);
            return this;
        },
        /**
         * Closes all error prompts on the page
         */
        hidePrompt: function() {
        	var promptClass =  "."+ methods._getClassName($(this).attr("id")) + "formError";
            $(promptClass).fadeTo("fast", 0.3, function() {
                $(this).remove();
            });
            return this;
        },
        /**
         * Closes form error prompts, CAN be invidual
         */
        hide: function() {
			var closingtag;
        	if($(this).is("form")){
        		closingtag = "parentForm"+methods._getClassName($(this).attr("id"));
        	}else{
        		closingtag = methods._getClassName($(this).attr("id")) +"formError";
        	}
            $('.'+closingtag).fadeTo("fast", 0.3, function() {
                $(this).remove();
            });
            return this;
        },
        /**
         * Closes all error prompts on the page
         */
        hideAll: function() {
            $('.formError').fadeTo("fast", 0.3, function() {
                $(this).remove();
            });
            return this;
        },
        /**
         * Typically called when user exists a field using tab or a mouse click, triggers a field
         * validation
         */
        _onFieldEvent: function(event) {
            var field = $(this);
            var form = field.closest('form');
            var options = form.data('jqv');
            // validate the current field
			window.setTimeout(function() {
			    methods._validateField(field, options);
				if (options.InvalidFields.length == 0 && options.onSuccess) {
					options.onSuccess();
				} else if (options.InvalidFields.length > 0 && options.onFailure) {
					options.onFailure();
				}
			}, (event.data) ? event.data.delay : 0);
            
        },
        /**
         * Called when the form is submited, shows prompts accordingly
         *
         * @param {jqObject}
         *            form
         * @return false if form submission needs to be cancelled
         */
        _onSubmitEvent: function() {
            var form = $(this);
 			var options = form.data('jqv');
   
			// validate each field (- skip field ajax validation, no necessary since we will perform an ajax form validation)
            var r=methods._validateFields(form, true);
		
            if (r && options.ajaxFormValidation) {
                methods._validateFormWithAjax(form, options);
                return false;
            }

            if(options.onValidationComplete) {
                options.onValidationComplete(form, r);
                return false;
            }
            return r;
        },

        /**
         * Return true if the ajax field validations passed so far
         * @param {Object} options
         * @return true, is all ajax validation passed so far (remember ajax is async)
         */
        _checkAjaxStatus: function(options) {
            var status = true;
            $.each(options.ajaxValidCache, function(key, value) {
                if (!value) {
                    status = false;
                    // break the each
                    return false;
                }
            });
            return status;
        },
        /**
         * Validates form fields, shows prompts accordingly
         *
         * @param {jqObject}
         *            form
         * @param {skipAjaxFieldValidation}
         *            boolean - when set to true, ajax field validation is skipped, typically used when the submit button is clicked
         *
         * @return true if form is valid, false if not, undefined if ajax form validation is done
         */
        _validateFields: function(form, skipAjaxValidation) {
            var options = form.data('jqv');

            // this variable is set to true if an error is found
            var errorFound = false;
			
			// Trigger hook, start validation
			form.trigger("jqv.form.validating");
            // first, evaluate status of non ajax fields
			var first_err=null;
            form.find('[class*=validate]').not(':hidden').not(":disabled").each( function() {
                var field = $(this);
                errorFound |= methods._validateField(field, options, skipAjaxValidation);
				field.focus();
                if (options.doNotShowAllErrosOnSubmit)
                    return false;
		    if (errorFound && first_err==null) first_err=field; 
            });
            // second, check to see if all ajax calls completed ok
            // errorFound |= !methods._checkAjaxStatus(options);
			
            // thrird, check status and scroll the container accordingly
			form.trigger("jqv.form.result", [errorFound]);
			
		if (errorFound) {				
      		if (options.scroll) {	
				var destination=first_err.offset().top;
				var fixleft = first_err.offset().left;

				//prompt positioning adjustment support. Usage: positionType:Xshift,Yshift (for ex.: bottomLeft:+20 or bottomLeft:-20,+10)
				var positionType=options.promptPosition;
				if (typeof(positionType)=='string') {
					if (positionType.indexOf(":")!=-1) {
						positionType=positionType.substring(0,positionType.indexOf(":"));
					}
				}

				if (positionType!="bottomRight"&& 
				    positionType!="bottomLeft") {
					var prompt_err= methods._getPrompt(first_err);
					destination=prompt_err.offset().top;
				}

					// get the position of the first error, there should be at least one, no need to check this
                    //var destination = form.find(".formError:not('.greenPopup'):first").offset().top;

                        $("html:not(:animated),body:not(:animated)").animate({
                            scrollTop: destination,
                            scrollLeft: fixleft
                        }, 1100, function(){
							if(options.focusFirstField) first_err.focus(); 		
						});
                 		if (options.isOverflown) {
                        	var overflowDIV = $(options.overflownDIV);
	                        var scrollContainerScroll = overflowDIV.scrollTop();
      	                  	var scrollContainerPos = -parseInt(overflowDIV.offset().top);
	
      	                  	destination += scrollContainerScroll + scrollContainerPos - 5;
            	            var scrollContainer = $(options.overflownDIV + ":not(:animated)");

                  	      	scrollContainer.animate({ scrollTop: destination }, 1100);
						}
                 
				} else if(options.focusFirstField)
				 	first_err.focus();
                return false;
            }
            return true;
        },
        /**
         * This method is called to perform an ajax form validation.
         * During this process all the (field, value) pairs are sent to the server which returns a list of invalid fields or true
         *
         * @param {jqObject} form
         * @param {Map} options
         */
        _validateFormWithAjax: function(form, options) {

            var data = form.serialize();
			var url = (options.ajaxFormValidationURL) ? options.ajaxFormValidationURL : form.attr("action");
            $.ajax({
                type: "GET",
                url: url,
                cache: false,
                dataType: "json",
                data: data,
                form: form,
                methods: methods,
                options: options,
                beforeSend: function() {
                    return options.onBeforeAjaxFormValidation(form, options);
                },
                error: function(data, transport) {
                    methods._ajaxError(data, transport);
                },
                success: function(json) {

                    if (json !== true) {

                        // getting to this case doesn't necessary means that the form is invalid
                        // the server may return green or closing prompt actions
                        // this flag helps figuring it out
                        var errorInForm=false;
                        for (var i = 0; i < json.length; i++) {
                            var value = json[i];
						
                            var errorFieldId = value[0];
                            var errorField = $($("#" + errorFieldId)[0]);
							
                            // make sure we found the element
                            if (errorField.length == 1) {
								
                                // promptText or selector
                                var msg = value[2];
								// if the field is valid
                                if (value[1] == true) {

                                    if (msg == ""  || !msg){
                                        // if for some reason, status==true and error="", just close the prompt
                                        methods._closePrompt(errorField);
                                    } else {
                                        // the field is valid, but we are displaying a green prompt
                                        if (options.allrules[msg]) {
                                            var txt = options.allrules[msg].alertTextOk;
                                            if (txt)
                                                msg = txt;
                                        }
                                        methods._showPrompt(errorField, msg, "pass", false, options, true);
                                    }

                                } else {
                                    // the field is invalid, show the red error prompt
                                    errorInForm|=true;
                                    if (options.allrules[msg]) {
                                        var txt = options.allrules[msg].alertText;
                                        if (txt)
                                            msg = txt;
                                    }
                                    methods._showPrompt(errorField, msg, "", false, options, true);
                                }
                            }
                        }
                        options.onAjaxFormComplete(!errorInForm, form, json, options);
                    } else
                        options.onAjaxFormComplete(true, form, "", options);
                }
            });

        },
        /**
         * Validates field, shows prompts accordingly
         *
         * @param {jqObject}
         *            field
         * @param {Array[String]}
         *            field's validation rules
         * @param {Map}
         *            user options
         * @return true if field is valid
         */
        _validateField: function(field, options, skipAjaxValidation) {
            if (!field.attr("id"))
                $.error("jQueryValidate: an ID attribute is required for this field: " + field.attr("name") + " class:" +
                field.attr("class"));

            var rulesParsing = field.attr('class');
            var getRules = /validate\[(.*)\]/.exec(rulesParsing);
			
            if (!getRules)
                return false;
            var str = getRules[1];
            var rules = str.split(/\[|,|\]/);
	
            // true if we ran the ajax validation, tells the logic to stop messing with prompts
            var isAjaxValidator = false;
            var fieldName = field.attr("name");
            var promptText = "";
			var required = false;
            options.isError = false;
            options.showArrow = true;

			var form = $(field.closest("form"));

            for (var i = 0; i < rules.length; i++) {
				// Fix for adding spaces in the rules
				rules[i] = rules[i].replace(" ", "")
                var errorMsg = undefined;
                switch (rules[i]) {

                    case "required":
                        required = true;
                        errorMsg = methods._required(field, rules, i, options);
                        break;
                    case "custom":
                        errorMsg = methods._customRegex(field, rules, i, options);
                        break;
					case "groupRequired":
						// Check is its the first of group, if not, reload validation with first field
						// AND continue normal validation on present field
						var classGroup = "[class*=" +rules[i + 1] +"]";	
						var firstOfGroup = form.find(classGroup).eq(0);
						if(firstOfGroup[0] != field[0]){
							methods._validateField(firstOfGroup, options, skipAjaxValidation)
							options.showArrow = true;
							continue;
						};
                        errorMsg = methods._groupRequired(field, rules, i, options);
						if(errorMsg) required = true;
						options.showArrow = false;
                        break;
                    case "ajax":
                        // ajax has its own prompts handling technique
						if(!skipAjaxValidation){
							methods._ajax(field, rules, i, options);
	                        isAjaxValidator = true;
						}
                        break;
                    case "minSize":
                        errorMsg = methods._minSize(field, rules, i, options);
                        break;
                    case "maxSize":
                        errorMsg = methods._maxSize(field, rules, i, options);
                        break;
                    case "min":
                        errorMsg = methods._min(field, rules, i, options);
                        break;
                    case "max":
                        errorMsg = methods._max(field, rules, i, options);
                        break;
                    case "past":
                        errorMsg = methods._past(field, rules, i, options);
                        break;
                    case "future":
                        errorMsg = methods._future(field, rules, i, options);
                        break;
                    case "dateRange":
                        var classGroup = "[class*=" + rules[i + 1] + "]";
                        var firstOfGroup = form.find(classGroup).eq(0);
                        var secondOfGroup = form.find(classGroup).eq(1);

                        //if one entry out of the pair has value then proceed to run through validation
                        if (firstOfGroup[0].value || secondOfGroup[0].value) {
                            errorMsg = methods._dateRange(firstOfGroup, secondOfGroup, rules, i, options);
                        }
                        if (errorMsg) required = true;
                        options.showArrow = false;
                        break;

                    case "dateTimeRange":
                        var classGroup = "[class*=" + rules[i + 1] + "]";
                        var firstOfGroup = form.find(classGroup).eq(0);
                        var secondOfGroup = form.find(classGroup).eq(1);

                        //if one entry out of the pair has value then proceed to run through validation
                        if (firstOfGroup[0].value || secondOfGroup[0].value) {
                            errorMsg = methods._dateTimeRange(firstOfGroup, secondOfGroup, rules, i, options);
                        }
                        if (errorMsg) required = true;
                        options.showArrow = false;
                        break;
                    case "maxCheckbox":
                        errorMsg = methods._maxCheckbox(form, field, rules, i, options);
                        field = $(form.find("input[name='" + fieldName + "']"));
                        break;
                    case "minCheckbox":
                        errorMsg = methods._minCheckbox(form, field, rules, i, options);
                        field = $(form.find("input[name='" + fieldName + "']"));
                        break;
                    case "equals":
                        errorMsg = methods._equals(field, rules, i, options);
                        break;
                    case "funcCall":
                        errorMsg = methods._funcCall(field, rules, i, options);
                        break;

                    default:
                    //$.error("jQueryValidator rule not found"+rules[i]);
                }
                if (errorMsg !== undefined) {
                    promptText += errorMsg + "<br/>";
                    options.isError = true;
                }
            }
            // If the rules required is not added, an empty field is not validated
            if(!required && field.val() == "") options.isError = false;

            // Hack for radio/checkbox group button, the validation go into the
            // first radio/checkbox of the group
            var fieldType = field.prop("type");

            if ((fieldType == "radio" || fieldType == "checkbox") && form.find("input[name='" + fieldName + "']").size() > 1) {
                field = $(form.find("input[name='" + fieldName + "'][type!=hidden]:first"));
                options.showArrow = false;
            }
			
            if (fieldType == "text" && form.find("input[name='" + fieldName + "']").size() > 1) {
                field = $(form.find("input[name='" + fieldName + "'][type!=hidden]:first"));
                options.showArrow = false;
            }

            if (options.isError){
                methods._showPrompt(field, promptText, "", false, options);
            }else{
                if (!isAjaxValidator) methods._closePrompt(field);
            }
	    
            if (!isAjaxValidator) {
              field.trigger("jqv.field.result", [field, options.isError, promptText]);
            }

            /* Record error */
            var errindex = $.inArray(field[0], options.InvalidFields);
            if (errindex == -1) {
                if (options.isError)
                    options.InvalidFields.push(field[0]);
            } else if (!options.isError) {
                options.InvalidFields.splice(errindex, 1);
            }

            return options.isError;
        },
        /**
         * Required validation
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _required: function(field, rules, i, options) {
            switch (field.prop("type")) {
                case "text":
                case "password":
                case "textarea":
                case "file":
                default:
                    if (!field.val())
                        return options.allrules[rules[i]].alertText;
                    break;
                case "radio":
                case "checkbox":
					var form = field.closest("form");
                    var name = field.attr("name");
                    if (form.find("input[name='" + name + "']:checked").size() == 0) {
                        if (form.find("input[name='" + name + "']").size() == 1)
                            return options.allrules[rules[i]].alertTextCheckboxe;
                        else
                            return options.allrules[rules[i]].alertTextCheckboxMultiple;
                    }
                    break;
                // required for <select>
                case "select-one":
                    // added by paul@kinetek.net for select boxes, Thank you
                    if (!field.val())
                        return options.allrules[rules[i]].alertText;
                    break;
                case "select-multiple":
                    // added by paul@kinetek.net for select boxes, Thank you
                    if (!field.find("option:selected").val())
                        return options.allrules[rules[i]].alertText;
                    break;
            }
        },
		/**
         * Validate that 1 from the group field is required
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _groupRequired: function(field, rules, i, options) {
            var classGroup = "[class*=" +rules[i + 1] +"]";
			var isValid = false;
			// Check all fields from the group
			field.closest("form").find(classGroup).each(function(){
				if(!methods._required($(this), rules, i, options)){
					isValid = true;
					return false;
				}
			})
			
			if(!isValid) return options.allrules[rules[i]].alertText;
        },
        /**
         * Validate Regex rules
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _customRegex: function(field, rules, i, options) {
            var customRule = rules[i + 1];
			var rule = options.allrules[customRule];
			if(!rule) {
				alert("jqv:custom rule not found "+customRule);
				return;
			}
			
			var ex=rule.regex;
			if(!ex) {
				alert("jqv:custom regex not found "+customRule);
				return;
			}
            var pattern = new RegExp(ex);

            if (!pattern.test(field.val()))
                return options.allrules[customRule].alertText;
        },
        /**
         * Validate custom function outside of the engine scope
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _funcCall: function(field, rules, i, options) {
            var functionName = rules[i + 1];
            var fn = window[functionName] || options.customFunctions[functionName];
            if (typeof(fn) == 'function')
                return fn(field, rules, i, options);

        },
        /**
         * Field match
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _equals: function(field, rules, i, options) {
            var equalsField = rules[i + 1];

            if (field.val() != $("#" + equalsField).val())
                return options.allrules.equals.alertText;
        },
        /**
         * Check the maximum size (in characters)
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _maxSize: function(field, rules, i, options) {
            var max = rules[i + 1];
            var len = field.val().length;

            if (len > max) {
                var rule = options.allrules.maxSize;
                return rule.alertText + max + rule.alertText2;
            }
        },
        /**
         * Check the minimum size (in characters)
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _minSize: function(field, rules, i, options) {
            var min = rules[i + 1];
            var len = field.val().length;

            if (len < min) {
                var rule = options.allrules.minSize;
                return rule.alertText + min + rule.alertText2;
            }
        },
        /**
         * Check number minimum value
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _min: function(field, rules, i, options) {
            var min = parseFloat(rules[i + 1]);
            var len = parseFloat(field.val());

            if (len < min) {
                var rule = options.allrules.min;
                if (rule.alertText2) return rule.alertText + min + rule.alertText2;
                return rule.alertText + min;
            }
        },
        /**
         * Check number maximum value
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _max: function(field, rules, i, options) {
            var max = parseFloat(rules[i + 1]);
            var len = parseFloat(field.val());

            if (len >max ) {
                var rule = options.allrules.max;
                if (rule.alertText2) return rule.alertText + max + rule.alertText2;
                //orefalo: to review, also do the translations
                return rule.alertText + max;
            }
        },
        /**
         * Checks date is in the past
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _past: function(field, rules, i, options) {

            var p=rules[i + 1];
            var pdate = (p.toLowerCase() == "now")? new Date():methods._parseDate(p);
            var vdate = methods._parseDate(field.val());

            if (vdate < pdate ) {
                var rule = options.allrules.past;
                if (rule.alertText2) return rule.alertText + methods._dateToString(pdate) + rule.alertText2;
                return rule.alertText + methods._dateToString(pdate);
            }
        },
        /**
         * Checks date is in the future
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _future: function(field, rules, i, options) {

            var p=rules[i + 1];
            var pdate = (p.toLowerCase() == "now")? new Date():methods._parseDate(p);
            var vdate = methods._parseDate(field.val());

            if (vdate > pdate ) {
                var rule = options.allrules.future;
                if (rule.alertText2) return rule.alertText + methods._dateToString(pdate) + rule.alertText2;
                return rule.alertText + methods._dateToString(pdate);
            }
        },
        /**
        * Checks if valid date
        *
        * @param {string} date string
        * @return a bool based on determination of valid date
        */
        _isDate: function (value) {
            var dateRegEx = new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/);
            if (dateRegEx.test(value)) {
                return true;
            }
            return false;
        },
        /**
        * Checks if valid date time
        *
        * @param {string} date string
        * @return a bool based on determination of valid date time
        */
        _isDateTime: function (value){
            var dateTimeRegEx = new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/);
            if (dateTimeRegEx.test(value)) {
                return true;
            }
            return false;
        },
        //Checks if the start date is before the end date
        //returns true if end is later than start
        _dateCompare: function (start, end) {
            return (new Date(start.toString()) < new Date(end.toString()));
        },
        /**
        * Checks date range
        *
        * @param {jqObject} first field name
        * @param {jqObject} second field name
        * @return an error string if validation failed
        */
        _dateRange: function (first, second, rules, i, options) {
            //are not both populated
            if ((!first[0].value && second[0].value) || (first[0].value && !second[0].value)) {
                return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
            }

            //are not both dates
            if (!methods._isDate(first[0].value) || !methods._isDate(second[0].value)) {
                return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
            }

            //are both dates but range is off
            if (!methods._dateCompare(first[0].value, second[0].value)) {
                return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
            }
        },


        /**
        * Checks date time range
        *
        * @param {jqObject} first field name
        * @param {jqObject} second field name
        * @return an error string if validation failed
        */
        _dateTimeRange: function (first, second, rules, i, options) {
            //are not both populated
            if ((!first[0].value && second[0].value) || (first[0].value && !second[0].value)) {
                return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
            }
            //are not both dates
            if (!methods._isDateTime(first[0].value) || !methods._isDateTime(second[0].value)) {
                return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
            }
            //are both dates but range is off
            if (!methods._dateCompare(first[0].value, second[0].value)) {
                return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
            }
        },
        /**
         * Max number of checkbox selected
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _maxCheckbox: function(form, field, rules, i, options) {

            var nbCheck = rules[i + 1];
            var groupname = field.attr("name");
            var groupSize = form.find("input[name='" + groupname + "']:checked").size();
            if (groupSize > nbCheck) {
                options.showArrow = false;
                if (options.allrules.maxCheckbox.alertText2) return options.allrules.maxCheckbox.alertText + " " + nbCheck + " " + options.allrules.maxCheckbox.alertText2;
                return options.allrules.maxCheckbox.alertText;
            }
        },
        /**
         * Min number of checkbox selected
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return an error string if validation failed
         */
        _minCheckbox: function(form, field, rules, i, options) {

            var nbCheck = rules[i + 1];
            var groupname = field.attr("name");
            var groupSize = form.find("input[name='" + groupname + "']:checked").size();
            if (groupSize < nbCheck) {
                options.showArrow = false;
                return options.allrules.minCheckbox.alertText + " " + nbCheck + " " + options.allrules.minCheckbox.alertText2;
            }
        },
        /**
         * Ajax field validation
         *
         * @param {jqObject} field
         * @param {Array[String]} rules
         * @param {int} i rules index
         * @param {Map}
         *            user options
         * @return nothing! the ajax validator handles the prompts itself
         */
        _ajax: function(field, rules, i, options) {
			
            var errorSelector = rules[i + 1];
            var rule = options.allrules[errorSelector];
            var extraData = rule.extraData;
            var extraDataDynamic = rule.extraDataDynamic;

            if (!extraData)
                extraData = "";

            if (extraDataDynamic) {
              var tmpData = [];
              var domIds = String(extraDataDynamic).split(",");
              for (var i = 0; i < domIds.length; i++) {
                var id = domIds[i];
                if ($(id).length) {
                  var inputValue = field.closest("form").find(id).val();
                  var keyValue = id.replace('#', '') + '=' + escape(inputValue);
                  tmpData.push(keyValue);
                }
              }
              extraDataDynamic = tmpData.join("&");
            } else {
              extraDataDynamic = "";              
            }
                                
            if (!options.isError) {
                $.ajax({
                    type: "GET",
                    url: rule.url,
                    cache: false,
                    dataType: "json",
                    data: "fieldId=" + field.attr("id") + "&fieldValue=" + field.val() + "&extraData=" + extraData + "&" + extraDataDynamic,
                    field: field,
                    rule: rule,
                    methods: methods,
                    options: options,
                    beforeSend: function() {
                        // build the loading prompt
                        var loadingText = rule.alertTextLoad;
                        if (loadingText)
                            methods._showPrompt(field, loadingText, "load", true, options);
                    },
                    error: function(data, transport) {
                        methods._ajaxError(data, transport);
                    },
                    success: function(json) {
						
                        // asynchronously called on success, data is the json answer from the server
                        var errorFieldId = json[0];
                        var errorField = $($("#" + errorFieldId)[0]);
                        // make sure we found the element
                        if (errorField.length == 1) {
                            var status = json[1];
							// read the optional msg from the server
							var msg = json[2];
                            if (!status) {
                                // Houston we got a problem - display an red prompt
                                options.ajaxValidCache[errorFieldId] = false;
                                options.isError = true;

								// resolve the msg prompt
								if(msg) {
									if (options.allrules[msg]) {
                                    	var txt = options.allrules[msg].alertText;
                                    	if (txt)
                                    		msg = txt;
                                    }
								}
								else
                                    msg = rule.alertText;
                                
								methods._showPrompt(errorField, msg, "", true, options);
                            } else {
                                if (options.ajaxValidCache[errorFieldId] !== undefined)
                                    options.ajaxValidCache[errorFieldId] = true;

                                // resolves the msg prompt
								if(msg) {
									if (options.allrules[msg]) {
							           	var txt = options.allrules[msg].alertTextOk;
							           	if (txt)
							           		msg = txt;
							        }
								}
								else
							       	msg = rule.alertTextOk;                                

								// see if we should display a green prompt
                                if (msg)
                                    methods._showPrompt(errorField, msg, "pass", true, options);
                                else
                                    methods._closePrompt(errorField);
                            }
                        }
                        errorField.trigger("jqv.field.result", [errorField, !options.isError, msg]);
                    }
                });
            }
        },
        /**
         * Common method to handle ajax errors
         *
         * @param {Object} data
         * @param {Object} transport
         */
        _ajaxError: function(data, transport) {
            if(data.status == 0 && transport == null)
                alert("The page is not served from a server! ajax call failed");
            else if(typeof console != "undefined")
                console.log("Ajax error: " + data.status + " " + transport);
        },
        /**
         * date -> string
         *
         * @param {Object} date
         */
        _dateToString: function(date) {

            return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
        },
        /**
         * Parses an ISO date
         * @param {String} d
         */
        _parseDate: function(d) {

            var dateParts = d.split("-");
            if(dateParts==d)
                dateParts = d.split("/");
            return new Date(dateParts[0], (dateParts[1] - 1) ,dateParts[2]);
        },
        /**
         * Builds or updates a prompt with the given information
         *
         * @param {jqObject} field
         * @param {String} promptText html text to display type
         * @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
         * @param {boolean} ajaxed - use to mark fields than being validated with ajax
         * @param {Map} options user options
         */
        _showPrompt: function(field, promptText, type, ajaxed, options, ajaxform) {
            var prompt = methods._getPrompt(field);
			// The ajax submit errors are not see has an error in the form,
			// When the form errors are returned, the engine see 2 bubbles, but those are ebing closed by the engine at the same time
			// Because no error was found befor submitting
			if(ajaxform) prompt = false;
            if (prompt)
                methods._updatePrompt(field, prompt, promptText, type, ajaxed, options);
            else
                methods._buildPrompt(field, promptText, type, ajaxed, options);
        },
        /**
         * Builds and shades a prompt for the given field.
         *
         * @param {jqObject} field
         * @param {String} promptText html text to display type
         * @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
         * @param {boolean} ajaxed - use to mark fields than being validated with ajax
         * @param {Map} options user options
         */
        _buildPrompt: function(field, promptText, type, ajaxed, options) {
			
            // create the prompt
            var prompt = $('<div>');
            prompt.addClass(methods._getClassName(field.attr("id")) + "formError");
            // add a class name to identify the parent form of the prompt
            if(field.is(":input")) prompt.addClass("parentForm"+methods._getClassName(field.parents('form').attr("id")));
            prompt.addClass("formError");

            switch (type) {
                case "pass":
                    prompt.addClass("greenPopup");
                    break;
                case "load":
                    prompt.addClass("blackPopup");
                    break;
                default:
                    /* it has error  */
                    options.InvalidCount++;
            }
            if (ajaxed)
                prompt.addClass("ajaxed");

            // create the prompt content
            var promptContent = $('<div>').addClass("formErrorContent").html(promptText).appendTo(prompt);
            // create the css arrow pointing at the field
            // note that there is no triangle on max-checkbox and radio
            if (options.showArrow) {
                var arrow = $('<div>').addClass("formErrorArrow");

				//prompt positioning adjustment support. Usage: positionType:Xshift,Yshift (for ex.: bottomLeft:+20 or bottomLeft:-20,+10)
				var positionType=field.data("promptPosition") || options.promptPosition;
				if (typeof(positionType)=='string') {
					if (positionType.indexOf(":")!=-1) {
						positionType=positionType.substring(0,positionType.indexOf(":"));
					};
				};

				
                switch (positionType) {
                    case "bottomLeft":
                    case "bottomRight":
                        prompt.find(".formErrorContent").before(arrow);
                        arrow.addClass("formErrorArrowBottom").html('<div class="line1"><!-- --></div><div class="line2"><!-- --></div><div class="line3"><!-- --></div><div class="line4"><!-- --></div><div class="line5"><!-- --></div><div class="line6"><!-- --></div><div class="line7"><!-- --></div><div class="line8"><!-- --></div><div class="line9"><!-- --></div><div class="line10"><!-- --></div>');
                        break;
                    case "topLeft":
                    case "topRight":
                        arrow.html('<div class="line10"><!-- --></div><div class="line9"><!-- --></div><div class="line8"><!-- --></div><div class="line7"><!-- --></div><div class="line6"><!-- --></div><div class="line5"><!-- --></div><div class="line4"><!-- --></div><div class="line3"><!-- --></div><div class="line2"><!-- --></div><div class="line1"><!-- --></div>');
                        prompt.append(arrow);
                        break;
                }
            }

            //Cedric: Needed if a container is in position:relative
            // insert prompt in the form or in the overflown container?
            if (options.isOverflown)
            	field.before(prompt);
            else
               $("body").append(prompt);

            var pos = methods._calculatePosition(field, prompt, options);
            prompt.css({
                "top": pos.callerTopPosition,
                "left": pos.callerleftPosition,
                "marginTop": pos.marginTopSize,
                "opacity": 0
            }).data("callerField", field);

            return prompt.animate({
                "opacity": 0.87
            });

        },
        /**
         * Updates the prompt text field - the field for which the prompt
         * @param {jqObject} field
         * @param {String} promptText html text to display type
         * @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
         * @param {boolean} ajaxed - use to mark fields than being validated with ajax
         * @param {Map} options user options
         */
        _updatePrompt: function(field, prompt, promptText, type, ajaxed, options, noAnimation) {
			
            if (prompt) {
				if (typeof type !== "undefined") {
	            	if (type == "pass")
        	            prompt.addClass("greenPopup");
                	else
					    prompt.removeClass("greenPopup");

					if (type == "load")
					    prompt.addClass("blackPopup");
					else
					    prompt.removeClass("blackPopup");
				}
				if (ajaxed)
				    prompt.addClass("ajaxed");
				else
				    prompt.removeClass("ajaxed");
		
                prompt.find(".formErrorContent").html(promptText);

                var pos = methods._calculatePosition(field, prompt, options);
				css = {"top": pos.callerTopPosition,
		               "left": pos.callerleftPosition,
		               "marginTop": pos.marginTopSize};
		
				if (noAnimation)
				 	prompt.css(css);
				else
				 	prompt.animate(css)
            }
        },
        /**
         * Closes the prompt associated with the given field
         *
         * @param {jqObject}
         *            field
         */
        _closePrompt: function(field) {

            var prompt = methods._getPrompt(field);
            if (prompt)
                prompt.fadeTo("fast", 0, function() {
                    prompt.remove();
                });
        },
        closePrompt: function(field) {
            return methods._closePrompt(field);
        },
        /**
         * Returns the error prompt matching the field if any
         *
         * @param {jqObject}
         *            field
         * @return undefined or the error prompt (jqObject)
         */
  		  _getPrompt: function(field) {
		    var className = methods._getClassName(field.attr("id")) + "formError";
		    var match = $("." + methods._escapeExpression(className))[0];
		    if (match)
		      return $(match);
		  },
         /**
         * Returns the escapade classname
         *
         * @param {selector}
         *            className
         */		
		  _escapeExpression: function (selector) {
		    return selector.replace(/([#;&,\.\+\*\~':"\!\^$\[\]\(\)=>\|])/g, "\\$1");
		  },
        /**
        * Calculates prompt position
        *
        * @param {jqObject}
        *            field
        * @param {jqObject}
        *            the prompt
        * @param {Map}
        *            options
        * @return positions
        */
        _calculatePosition: function (field, promptElmt, options) {

            var promptTopPosition, promptleftPosition, marginTopSize;
            var fieldWidth = field.width();
            var promptHeight = promptElmt.height();

            var overflow = options.isOverflown;
            if (overflow) {
                // is the form contained in an overflown container?
                promptTopPosition = promptleftPosition = 0;
                // compensation for the arrow
                marginTopSize = -promptHeight;
            } else {
                var offset = field.offset();
                promptTopPosition = offset.top;
                promptleftPosition = offset.left;
                marginTopSize = 0;
            }

			//prompt positioning adjustment support 
			//now you can adjust prompt position
			//usage: positionType:Xshift,Yshift
			//for example: 
			//   bottomLeft:+20 means bottomLeft position shifted by 20 pixels right horizontally
			//   topRight:20, -15 means topRight position shifted by 20 pixels to right and 15 pixels to top
			//You can use +pixels, - pixels. If no sign is provided than + is default.
			var positionType=field.data("promptPosition") || options.promptPosition;
			var shift1="";
			var shift2="";
			var shiftX=0;
			var shiftY=0;
			if (typeof(positionType)=='string') {
			//do we have any position adjustments ?
				if (positionType.indexOf(":")!=-1) {
					shift1=positionType.substring(positionType.indexOf(":")+1);
					positionType=positionType.substring(0,positionType.indexOf(":"));

					//if any advanced positioning will be needed (percents or something else) - parser should be added here
					//for now we use simple parseInt()
					
					//do we have second parameter?
					if (shift1.indexOf(",")!=-1) {
						shift2=shift1.substring(shift1.indexOf(",")+1);
						shift1=shift1.substring(0,shift1.indexOf(","));
						shiftY=parseInt(shift2);
						if (isNaN(shiftY)) {shiftY=0;};
					};
					
					shiftX=parseInt(shift1);
					if (isNaN(shift1)) {shift1=0;};
					
				};
			};

            switch (positionType) {

                default:
                case "topRight":
                    if (overflow)
                        // Is the form contained in an overflown container?
                        promptleftPosition += fieldWidth - 30;
                    else {
                        promptleftPosition += fieldWidth - 30;
                        promptTopPosition += -promptHeight -2;
                    }
                    break;
                case "topLeft":
                    promptTopPosition += -promptHeight - 10;
                    break;
                case "centerRight":
                    promptleftPosition += fieldWidth + 13;
                    break;
                case "bottomLeft":
                    promptTopPosition = promptTopPosition + field.height() + 15;
                    break;
                case "bottomRight":
                    promptleftPosition += fieldWidth - 30;
                    promptTopPosition += field.height() + 5;
            }

			//apply adjusments if any
			promptleftPosition += shiftX;
			promptTopPosition  += shiftY;

            return {
                "callerTopPosition": promptTopPosition + "px",
                "callerleftPosition": promptleftPosition + "px",
                "marginTopSize": marginTopSize + "px"
            };
        },
        /**
         * Saves the user options and variables in the form.data
         *
         * @param {jqObject}
         *            form - the form where the user option should be saved
         * @param {Map}
         *            options - the user options
         * @return the user options (extended from the defaults)
         */
        _saveOptions: function(form, options) {

            // is there a language localisation ?
            if ($.validationEngineLanguage)
                var allRules = $.validationEngineLanguage.allRules;
            else
                $.error("jQuery.validationEngine rules are not loaded, plz add localization files to the page");
			// --- Internals DO NOT TOUCH or OVERLOAD ---
			// validation rules and i18
			$.validationEngine.defaults.allrules = allRules;
			
            var userOptions = $.extend(true,{},$.validationEngine.defaults,options);

            form.data('jqv', userOptions);
            return userOptions;
        },
        
        /**
         * Removes forbidden characters from class name
         * @param {String} className
         */
        _getClassName: function(className) {
        	if(className) {
                return className.replace(/:/g, "_").replace(/\./g, "_");
            }    
        }
    };

    /**
     * Plugin entry point.
     * You may pass an action as a parameter or a list of options.
     * if none, the init and attach methods are being called.
     * Remember: if you pass options, the attached method is NOT called automatically
     *
     * @param {String}
     *            method (optional) action
     */
    $.fn.validationEngine = function(method) {

        var form = $(this);
		if(!form[0]) return false;  // stop here if the form does not exist
		  
        if (typeof(method) == 'string' && method.charAt(0) != '_' && methods[method]) {

            // make sure init is called once
            if(method != "showPrompt" && method != "hidePrompt" && method != "hide" && method != "hideAll") 
            	methods.init.apply(form);

            return methods[method].apply(form, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method == 'object' || !method) {
	
            // default constructor with or without arguments
			methods.init.apply(form, arguments);
            return methods.attach.apply(form);
        } else {
            $.error('Method ' + method + ' does not exist in jQuery.validationEngine');
        }
    };



	// LEAK GLOBAL OPTIONS
	$.validationEngine= {defaults:{

        // Name of the event triggering field validation
        validationEventTrigger: "blur",
        // Automatically scroll viewport to the first error
        scroll: true,
		// Focus on the first input
		focusFirstField:true,
        // Opening box position, possible locations are: topLeft,
        // topRight, bottomLeft, centerRight, bottomRight
        promptPosition: "topRight",
        bindMethod:"bind",
		// internal, automatically set to true when it parse a _ajax rule
		inlineAjax: false,
        // if set to true, the form data is sent asynchronously via ajax to the form.action url (get)
        ajaxFormValidation: false,
        // Ajax form validation callback method: boolean onComplete(form, status, errors, options)
        // retuns false if the form.submit event needs to be canceled.
		ajaxFormValidationURL: false,
        // The url to send the submit ajax validation (default to action)
        onAjaxFormComplete: $.noop,
        // called right before the ajax call, may return false to cancel
        onBeforeAjaxFormValidation: $.noop,
        // Stops form from submitting and execute function assiciated with it
        onValidationComplete: false,

        // Used when the form is displayed within a scrolling DIV
        isOverflown: false,
        overflownDIV: "",
		
		// Used when you have a form fields too close and the errors messages are on top of other disturbing viewing messages
        doNotShowAllErrosOnSubmit: false,

        // true when form and fields are binded
        binded: false,
        // set to true, when the prompt arrow needs to be displayed
        showArrow: true,
        // did one of the validation fail ? kept global to stop further ajax validations
        isError: false,
        // Caches field validation status, typically only bad status are created.
        // the array is used during ajax form validation to detect issues early and prevent an expensive submit
        ajaxValidCache: {},
        // Auto update prompt position after window resize
		autoPositionUpdate: false,

        InvalidFields: [],
		onSuccess: false,
		onFailure: false
    }}
})(jQuery);

(function($){
    $.fn.validationEngineLanguage = function(){
    };
    $.validationEngineLanguage = {
        newLang: function(){
            $.validationEngineLanguage.allRules = {
                "required": { // Add your regex rules here, you can take telephone as an example
                    "regex": "none",
                    "alertText": "* This field is required",
                    "alertTextCheckboxMultiple": "* Please select an option",
                    "alertTextCheckboxe": "* This checkbox is required",
                    "alertTextDateRange": "* Both date range fields are required"
                },
                "dateRange": {
                    "regex": "none",
                    "alertText": "* Invalid ",
                    "alertText2": "Date Range"
                },
                "dateTimeRange": {
                    "regex": "none",
                    "alertText": "* Invalid ",
                    "alertText2": "Date Time Range"
                },
                "minSize": {
                    "regex": "none",
                    "alertText": "* Minimum ",
                    "alertText2": " characters allowed"
                },
                "maxSize": {
                    "regex": "none",
                    "alertText": "* Maximum ",
                    "alertText2": " characters allowed"
                },
				"groupRequired": {
                    "regex": "none",
                    "alertText": "* You must fill one of the following fields"
                },
                "min": {
                    "regex": "none",
                    "alertText": "* Minimum value is "
                },
                "max": {
                    "regex": "none",
                    "alertText": "* Maximum value is "
                },
                "past": {
                    "regex": "none",
                    "alertText": "* Date prior to "
                },
                "future": {
                    "regex": "none",
                    "alertText": "* Date past "
                },	
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "* Maximum ",
                    "alertText2": " options allowed"
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* Please select ",
                    "alertText2": " options"
                },
                "equals": {
                    "regex": "none",
                    "alertText": "* Fields do not match"
                },
                "phone": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([\+][0-9]{1,3}[ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
                    "alertText": "* Invalid phone number"
                },
                "email": {
                    // Shamelessly lifted from Scott Gonzalez via the Bassistance Validation plugin http://projects.scottsplayground.com/email_address_validation/
                    "regex": /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
                    "alertText": "* Invalid email address"
                },
                "integer": {
                    "regex": /^[\-\+]?\d+$/,
                    "alertText": "* Not a valid integer"
                },
                "number": {
                    // Number, including positive, negative, and floating decimal. credit: orefalo
                    "regex": /^[\-\+]?(([0-9]+)([\.,]([0-9]+))?|([\.,]([0-9]+))?)$/,
                    "alertText": "* Invalid floating decimal number"
                },
                "date": {
                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/,
                    "alertText": "* Invalid date, must be in YYYY-MM-DD format"
                },
                "ipv4": {
                    "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    "alertText": "* Invalid IP address"
                },
                "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    "alertText": "* Invalid URL"
                },
                "onlyNumberSp": {
                    "regex": /^[0-9\ ]+$/,
                    "alertText": "* Numbers only"
                },
                "onlyLetterSp": {
                    "regex": /^[a-zA-Z\ \']+$/,
                    "alertText": "* Letters only"
                },
                "onlyLetterNumber": {
                    "regex": /^[0-9a-zA-Z]+$/,
                    "alertText": "* No special characters allowed"
                },
                // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
                "ajaxUserCall": {
                    "url": "ajaxValidateFieldUser",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    "alertText": "* This user is already taken",
                    "alertTextLoad": "* Validating, please wait"
                },
				"ajaxUserCallPhp": {
                    "url": "phpajax/ajaxValidateFieldUser.php",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* This username is available",
                    "alertText": "* This user is already taken",
                    "alertTextLoad": "* Validating, please wait"
                },
                "ajaxNameCall": {
                    // remote json service location
                    "url": "ajaxValidateFieldName",
                    // error
                    "alertText": "* This name is already taken",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* This name is available",
                    // speaks by itself
                    "alertTextLoad": "* Validating, please wait"
                },
				 "ajaxNameCallPhp": {
	                    // remote json service location
	                    "url": "phpajax/ajaxValidateFieldName.php",
	                    // error
	                    "alertText": "* This name is already taken",
	                    // speaks by itself
	                    "alertTextLoad": "* Validating, please wait"
	                },
                "validate2fields": {
                    "alertText": "* Please input HELLO"
                },
	            //tls warning:homegrown not fielded 
                "dateFormat":{
                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
                    "alertText": "* Invalid Date"
                },
                //tls warning:homegrown not fielded 
				"dateTimeFormat": {
	                "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
                    "alertText": "* Invalid Date or Date Format",
                    "alertText2": "Expected Format: ",
                    "alertText3": "mm/dd/yyyy hh:mm:ss AM|PM or ", 
                    "alertText4": "yyyy-mm-dd hh:mm:ss AM|PM"
	            }
            };
            
        }
    };

    $.validationEngineLanguage.newLang();
    
})(jQuery);

/**
 * jQuery lightBox plugin
 * This jQuery plugin was inspired and based on Lightbox 2 by Lokesh Dhakar (http://www.huddletogether.com/projects/lightbox2/)
 * and adapted to me for use like a plugin from jQuery.
 * @name jquery-lightbox-0.5.js
 * @author Leandro Vieira Pinho - http://leandrovieira.com
 * @version 0.5
 * @date April 11, 2008
 * @category jQuery plugin
 * @copyright (c) 2008 Leandro Vieira Pinho (leandrovieira.com)
 * @license CC Attribution-No Derivative Works 2.5 Brazil - http://creativecommons.org/licenses/by-nd/2.5/br/deed.en_US
 * @example Visit http://leandrovieira.com/projects/jquery/lightbox/ for more informations about this jQuery plugin
 */
(function($){$.fn.lightBox=function(settings){settings=jQuery.extend({overlayBgColor:'#000',overlayOpacity:0.8,fixedNavigation:false,imageLoading:'./images/lightbox/lightbox-ico-loading.gif',imageBtnPrev:'./images/lightbox/lightbox-btn-prev.gif',imageBtnNext:'./images/lightbox/lightbox-btn-next.gif',imageBtnClose:'./images/lightbox/lightbox-btn-close.gif',imageBlank:'./images/lightbox/lightbox-blank.gif',containerBorderSize:10,containerResizeSpeed:400,txtImage:'Image',txtOf:'of',keyToClose:'c',keyToPrev:'p',keyToNext:'n',imageArray:[],activeImage:0},settings);var jQueryMatchedObj=this;function _initialize(){_start(this,jQueryMatchedObj);return false;}
function _start(objClicked,jQueryMatchedObj){$('embed, object, select').css({'visibility':'hidden'});_set_interface();settings.imageArray.length=0;settings.activeImage=0;if(jQueryMatchedObj.length==1){settings.imageArray.push(new Array(objClicked.getAttribute('href'),objClicked.getAttribute('title')));}else{for(var i=0;i<jQueryMatchedObj.length;i++){settings.imageArray.push(new Array(jQueryMatchedObj[i].getAttribute('href'),jQueryMatchedObj[i].getAttribute('title')));}}
while(settings.imageArray[settings.activeImage][0]!=objClicked.getAttribute('href')){settings.activeImage++;}
_set_image_to_view();}
function _set_interface(){$('body').append('<div id="jquery-overlay"></div><div id="jquery-lightbox"><div id="lightbox-container-image-box"><div id="lightbox-container-image"><img id="lightbox-image"><div style="" id="lightbox-nav"><a href="#" id="lightbox-nav-btnPrev"></a><a href="#" id="lightbox-nav-btnNext"></a></div><div id="lightbox-loading"><a href="#" id="lightbox-loading-link"><img src="'+settings.imageLoading+'"></a></div></div></div><div id="lightbox-container-image-data-box"><div id="lightbox-container-image-data"><div id="lightbox-image-details"><span id="lightbox-image-details-caption"></span><span id="lightbox-image-details-currentNumber"></span></div><div id="lightbox-secNav"><a href="#" id="lightbox-secNav-btnClose"><img src="'+settings.imageBtnClose+'"></a></div></div></div></div>');var arrPageSizes=___getPageSize();$('#jquery-overlay').css({backgroundColor:settings.overlayBgColor,opacity:settings.overlayOpacity,width:arrPageSizes[0],height:arrPageSizes[1]}).fadeIn();var arrPageScroll=___getPageScroll();$('#jquery-lightbox').css({top:arrPageScroll[1]+(arrPageSizes[3]/10),left:arrPageScroll[0]}).show();$('#jquery-overlay,#jquery-lightbox').click(function(){_finish();});$('#lightbox-loading-link,#lightbox-secNav-btnClose').click(function(){_finish();return false;});$(window).resize(function(){var arrPageSizes=___getPageSize();$('#jquery-overlay').css({width:arrPageSizes[0],height:arrPageSizes[1]});var arrPageScroll=___getPageScroll();$('#jquery-lightbox').css({top:arrPageScroll[1]+(arrPageSizes[3]/10),left:arrPageScroll[0]});});}
function _set_image_to_view(){$('#lightbox-loading').show();if(settings.fixedNavigation){$('#lightbox-image,#lightbox-container-image-data-box,#lightbox-image-details-currentNumber').hide();}else{$('#lightbox-image,#lightbox-nav,#lightbox-nav-btnPrev,#lightbox-nav-btnNext,#lightbox-container-image-data-box,#lightbox-image-details-currentNumber').hide();}
var objImagePreloader=new Image();objImagePreloader.onload=function(){$('#lightbox-image').attr('src',settings.imageArray[settings.activeImage][0]);_resize_container_image_box(objImagePreloader.width,objImagePreloader.height);objImagePreloader.onload=function(){};};objImagePreloader.src=settings.imageArray[settings.activeImage][0];};function _resize_container_image_box(intImageWidth,intImageHeight){var intCurrentWidth=$('#lightbox-container-image-box').width();var intCurrentHeight=$('#lightbox-container-image-box').height();var intWidth=(intImageWidth+(settings.containerBorderSize*2));var intHeight=(intImageHeight+(settings.containerBorderSize*2));var intDiffW=intCurrentWidth-intWidth;var intDiffH=intCurrentHeight-intHeight;$('#lightbox-container-image-box').animate({width:intWidth,height:intHeight},settings.containerResizeSpeed,function(){_show_image();});if((intDiffW==0)&&(intDiffH==0)){if($.browser.msie){___pause(250);}else{___pause(100);}}
$('#lightbox-container-image-data-box').css({width:intImageWidth});$('#lightbox-nav-btnPrev,#lightbox-nav-btnNext').css({height:intImageHeight+(settings.containerBorderSize*2)});};function _show_image(){$('#lightbox-loading').hide();$('#lightbox-image').fadeIn(function(){_show_image_data();_set_navigation();});_preload_neighbor_images();};function _show_image_data(){$('#lightbox-container-image-data-box').slideDown('fast');$('#lightbox-image-details-caption').hide();if(settings.imageArray[settings.activeImage][1]){$('#lightbox-image-details-caption').html(settings.imageArray[settings.activeImage][1]).show();}
if(settings.imageArray.length>1){$('#lightbox-image-details-currentNumber').html(settings.txtImage+' '+(settings.activeImage+1)+' '+settings.txtOf+' '+settings.imageArray.length).show();}}
function _set_navigation(){$('#lightbox-nav').show();$('#lightbox-nav-btnPrev,#lightbox-nav-btnNext').css({'background':'transparent url('+settings.imageBlank+') no-repeat'});if(settings.activeImage!=0){if(settings.fixedNavigation){$('#lightbox-nav-btnPrev').css({'background':'url('+settings.imageBtnPrev+') left 15% no-repeat'}).unbind().bind('click',function(){settings.activeImage=settings.activeImage-1;_set_image_to_view();return false;});}else{$('#lightbox-nav-btnPrev').unbind().hover(function(){$(this).css({'background':'url('+settings.imageBtnPrev+') left 15% no-repeat'});},function(){$(this).css({'background':'transparent url('+settings.imageBlank+') no-repeat'});}).show().bind('click',function(){settings.activeImage=settings.activeImage-1;_set_image_to_view();return false;});}}
if(settings.activeImage!=(settings.imageArray.length-1)){if(settings.fixedNavigation){$('#lightbox-nav-btnNext').css({'background':'url('+settings.imageBtnNext+') right 15% no-repeat'}).unbind().bind('click',function(){settings.activeImage=settings.activeImage+1;_set_image_to_view();return false;});}else{$('#lightbox-nav-btnNext').unbind().hover(function(){$(this).css({'background':'url('+settings.imageBtnNext+') right 15% no-repeat'});},function(){$(this).css({'background':'transparent url('+settings.imageBlank+') no-repeat'});}).show().bind('click',function(){settings.activeImage=settings.activeImage+1;_set_image_to_view();return false;});}}
_enable_keyboard_navigation();}
function _enable_keyboard_navigation(){$(document).keydown(function(objEvent){_keyboard_action(objEvent);});}
function _disable_keyboard_navigation(){$(document).unbind();}
function _keyboard_action(objEvent){if(objEvent==null){keycode=event.keyCode;escapeKey=27;}else{keycode=objEvent.keyCode;escapeKey=objEvent.DOM_VK_ESCAPE;}
key=String.fromCharCode(keycode).toLowerCase();if((key==settings.keyToClose)||(key=='x')||(keycode==escapeKey)){_finish();}
if((key==settings.keyToPrev)||(keycode==37)){}
if((key==settings.keyToNext)||(keycode==39)){}}
function _preload_neighbor_images(){if((settings.imageArray.length-1)>settings.activeImage){objNext=new Image();objNext.src=settings.imageArray[settings.activeImage+1][0];}
if(settings.activeImage>0){objPrev=new Image();objPrev.src=settings.imageArray[settings.activeImage-1][0];}}
function _finish(){$('#jquery-lightbox').remove();$('#jquery-overlay').fadeOut(function(){$('#jquery-overlay').remove();});$('embed, object, select').css({'visibility':'visible'});}
function ___getPageSize(){var xScroll,yScroll;if(window.innerHeight&&window.scrollMaxY){xScroll=window.innerWidth+window.scrollMaxX;yScroll=window.innerHeight+window.scrollMaxY;}else if(document.body.scrollHeight>document.body.offsetHeight){xScroll=document.body.scrollWidth;yScroll=document.body.scrollHeight;}else{xScroll=document.body.offsetWidth;yScroll=document.body.offsetHeight;}
var windowWidth,windowHeight;if(self.innerHeight){if(document.documentElement.clientWidth){windowWidth=document.documentElement.clientWidth;}else{windowWidth=self.innerWidth;}
windowHeight=self.innerHeight;}else if(document.documentElement&&document.documentElement.clientHeight){windowWidth=document.documentElement.clientWidth;windowHeight=document.documentElement.clientHeight;}else if(document.body){windowWidth=document.body.clientWidth;windowHeight=document.body.clientHeight;}
if(yScroll<windowHeight){pageHeight=windowHeight;}else{pageHeight=yScroll;}
if(xScroll<windowWidth){pageWidth=xScroll;}else{pageWidth=windowWidth;}
arrayPageSize=new Array(pageWidth,pageHeight,windowWidth,windowHeight);return arrayPageSize;};function ___getPageScroll(){var xScroll,yScroll;if(self.pageYOffset){yScroll=self.pageYOffset;xScroll=self.pageXOffset;}else if(document.documentElement&&document.documentElement.scrollTop){yScroll=document.documentElement.scrollTop;xScroll=document.documentElement.scrollLeft;}else if(document.body){yScroll=document.body.scrollTop;xScroll=document.body.scrollLeft;}
arrayPageScroll=new Array(xScroll,yScroll);return arrayPageScroll;};function ___pause(ms){var date=new Date();curDate=null;do{var curDate=new Date();}
while(curDate-date<ms);};return this.unbind('click').click(_initialize);};})(jQuery);

(function($) {

$.modal = function (config) {
	
	var defaults, options, container, header, close, content, title, overlay;
	
	defaults = {
		 title: ''
		, html: ''
		, ajax: ''
		, width: null
		, overlay: true
		, overlayClose: false
		, escClose: true
	};
	
	options = $.extend (defaults, config);
	
	container = $('<div>', { id: 'modal' });
	header = $('<div>',  { id: 'modalHeader' });
	content = $('<div>', { id: 'modalContent' });
	overlay = $('<div>', { id: 'overlay' });
	title = $('<h2>', { text: options.title });
	close = $('<a>', { 'class': 'close', href: 'javascript:;', html: '&times' });

	container.appendTo ('body');
	header.appendTo (container);
	content.appendTo (container);
	if (options.overlay) {
		overlay.appendTo ('body');
	}
	title.prependTo (header);
	close.appendTo (header);
	
	if (options.ajax == '' && options.html == '') {
		title.text ('No Content');
	}
	
	if (options.ajax !== '') {
		content.html ('<div id="modalLoader"><img src="./img/ajax-loader.gif" /></div>');
		$.modal.reposition ();
		$.get (options.ajax, function (response) {
			content.html (response);
			$.modal.reposition ();
		});
	}
	
	if (options.html !== '') {
		content.html (options.html);
	}
	
	close.bind ('click', function (e) { 
		e.preventDefault (); 
		$.modal.close (); 		
	});
	
	if (options.overlayClose) {
		overlay.bind ('click', function (e) { $.modal.close (); });
	}
	
	if (options.escClose) {
		$(document).bind ('keyup.modal', function (e) {
			var key = e.which || e.keyCode;
			
			if (key == 27) {
				$.modal.close ();
			}			
		});
	}
	
	$.modal.reposition ();
}

$.modal.reposition = function () {
	var width = $('#modal').outerWidth ();		
	var centerOffset = width / 2;	
	$('#modal').css ({ 'left': '50%', 'top': $(window).scrollTop () + 75, 'margin-left': '-' + centerOffset + 'px' });
};

$.modal.close = function () {
	$('#modal').remove ();
	$('#overlay').remove ();
	$(document).unbind ('keyup.modal');
}

function getPageScroll() {
	var xScroll, yScroll;
	
	if (self.pageYOffset) {
		yScroll = self.pageYOffset;
		xScroll = self.pageXOffset;
	} else if (document.documentElement && document.documentElement.scrollTop) {	 // Explorer 6 Strict
		yScroll = document.documentElement.scrollTop;
		xScroll = document.documentElement.scrollLeft;
	} else if (document.body) {// all other Explorers
		yScroll = document.body.scrollTop;
		xScroll = document.body.scrollLeft;
	}
	
	return new Array(xScroll,yScroll);
}

})(jQuery);

(function($) {

$.alert = function (config) {
	
	var defaults, options, container, content, actions, close, submit, cancel, title, overlay;
	
	defaults = {
		type: 'default'
		, title: ''
		, text: ''
		, confirmText: 'Confirm'
		, cancelText: 'Cancel'
		, callback: function () {}
		, overlayClose: false
		, escClose: true
	};
	
	options = $.extend (defaults, config);
	
	container = $('<div>', { id: 'alert' });
	content = $('<div>', { id: 'alertContent' });
	close = $('<a>', { 'class': 'close', href: 'javascript:;', html: '&times' });
	actions = $('<div>', { id: 'alertActions' });
	overlay = $('<div>', { id: 'overlay' });
	title = $('<h2>', { text: options.title });
	
	submit = $('<button>', { 'class': 'btn btn-small btn-primary', text: options.confirmText });
	cancel = $('<button>', { 'class': 'btn btn-small btn-quaternary', text: options.cancelText });

	container.appendTo ('body');
	content.appendTo (container);
	close.appendTo (container);
	overlay.appendTo ('body');
	title.prependTo (content);
	
	content.append (options.text);
	
	actions.appendTo (content);
	
	if (options.type === 'confirm') {
		submit.appendTo (actions);
		cancel.appendTo (actions);
	} else {
		submit.appendTo (actions);
		submit.text ('Ok');
	}	
	
	submit.bind ('click', function (e) { 
		e.preventDefault (); 
		
		if (typeof options.callback === 'function') {
			options.callback.apply ();
		}
		
		$.alert.close (); 
	});
	
	submit.focus ();
	
	cancel.bind ('click', function (e) { 
		e.preventDefault (); 
		$.alert.close (); 		
	});
	
	close.bind ('click', function (e) {
		e.preventDefault ();
		$.alert.close ();
	});
	
	if (options.overlayClose) {
		overlay.bind ('click', function (e) { $.alert.close (); });
	}
	
	if (options.escClose) {
		$(document).bind ('keyup.alert', function (e) {
			var key = e.which || e.keyCode;
			
			if (key == 27) {
				$.alert.close ();
			}			
		});
	}
	
	
}

$.alert.close = function () {
	$('#alert').remove ();
	$('#overlay').remove ();
	$(document).unbind ('keyup.alert');
}

})(jQuery);

$(function () {
	
	$('.widget-tabs').find ('.tabs a').live ('click', tabClick);
	
	$('.widget-tabs').each (function () {
		var content = $(this).find ('.widget-content');
		
		if (content.length > 1) {
			content.hide ().eq (0).show ();
		}
	});
	
		
	
});

function tabClick (e) {
	e.preventDefault ();
	
	var $this = $(this);
	var id = $this.attr ('href');
	var parent = $this.parents ('.widget');
	
	$this.parent ().addClass ('active').siblings ('li').removeClass ('active');
	
	parent.find ('.widget-content').hide ();
	$(id).show ();
	
}

/*
 ### jQuery Google Maps Plugin v1.01 ###
 * Home: http://www.mayzes.org/googlemaps.jquery.html
 * Code: http://www.mayzes.org/js/jquery.googlemaps1.01.js
 * Date: 2010-01-14 (Thursday, 14 Jan 2010)
 * 
 * Dual licensed under the MIT and GPL licenses.
 *   http://www.gnu.org/licenses/gpl.html
 *   http://www.opensource.org/licenses/mit-license.php
 ###
*/
jQuery.fn.googleMaps = function(options) {

	if (!window.GBrowserIsCompatible || !GBrowserIsCompatible())  {
	   return this;
	}
	

	// Fill default values where not set by instantiation code
	var opts = $.extend({}, $.googleMaps.defaults, options);
	
	//$.fn.googleMaps.includeGoogle(opts.key, opts.sensor);
	return this.each(function() {
		// Create Map
		$.googleMaps.gMap = new GMap2(this, opts);
		$.googleMaps.mapsConfiguration(opts);
	});
};

$.googleMaps = {
	mapsConfiguration: function(opts) {
		// GEOCODE
		if ( opts.geocode ) {
			geocoder = new GClientGeocoder();
			geocoder.getLatLng(opts.geocode, function(center) {
				if (!center) {
					alert(address + " not found");
				}
				else {
    	      		$.googleMaps.gMap.setCenter(center, opts.depth);
					$.googleMaps.latitude = center.x;
					$.googleMaps.longitude = center.y;
				}
      		});
		}
		else {
			// Latitude & Longitude Center Point
			var center 	= $.googleMaps.mapLatLong(opts.latitude, opts.longitude);
			// Set the center of the Map with the new Center Point and Depth
			$.googleMaps.gMap.setCenter(center, opts.depth);
		}
		
		// POLYLINE
		if ( opts.polyline )
			// Draw a PolyLine on the Map
			$.googleMaps.gMap.addOverlay($.googleMaps.mapPolyLine(opts.polyline));
		// GEODESIC 
		if ( opts.geodesic ) {
			$.googleMaps.mapGeoDesic(opts.geodesic);
		}
		// PAN
		if ( opts.pan ) {
			// Set Default Options
			opts.pan = $.googleMaps.mapPanOptions(opts.pan);
			// Pan the Map
			window.setTimeout(function() {
				$.googleMaps.gMap.panTo($.googleMaps.mapLatLong(opts.pan.panLatitude, opts.pan.panLongitude));
			}, opts.pan.timeout);
		}
		
		// LAYER
		if ( opts.layer )
			// Set the Custom Layer
			$.googleMaps.gMap.addOverlay(new GLayer(opts.layer));
		
		// MARKERS
		if ( opts.markers )
			$.googleMaps.mapMarkers(center, opts.markers);

		// CONTROLS
		if ( opts.controls.type || opts.controls.zoom ||  opts.controls.mapType ) {
			$.googleMaps.mapControls(opts.controls);
		}
		else {
			if ( !opts.controls.hide ) 
				$.googleMaps.gMap.setUIToDefault();
		}
		
		// SCROLL
		if ( opts.scroll ) 
			$.googleMaps.gMap.enableScrollWheelZoom();
		else if ( !opts.scroll )
			$.googleMaps.gMap.disableScrollWheelZoom();
		
		// LOCAL SEARCH
		if ( opts.controls.localSearch )
			$.googleMaps.gMap.enableGoogleBar();
		else 
			$.googleMaps.gMap.disableGoogleBar();

		// FEED (RSS/KML)
		if ( opts.feed ) 
			$.googleMaps.gMap.addOverlay(new GGeoXml(opts.feed));
		
		// TRAFFIC INFO
		if ( opts.trafficInfo ) {
			var trafficOptions = {incidents:true};
			trafficInfo = new GTrafficOverlay(trafficOptions);
			$.googleMaps.gMap.addOverlay(trafficInfo);	
		}
		
		// DIRECTIONS
		if ( opts.directions ) {
			$.googleMaps.directions = new GDirections($.googleMaps.gMap, opts.directions.panel);
  			$.googleMaps.directions.load(opts.directions.route);
		}
		
		if ( opts.streetViewOverlay ) {
			svOverlay = new GStreetviewOverlay();
    		$.googleMaps.gMap.addOverlay(svOverlay);	
		}
	},
	mapGeoDesic: function(options) {
		// Default GeoDesic Options
		geoDesicDefaults = {
			startLatitude: 	37.4419,
			startLongitude: -122.1419,
			endLatitude:	37.4519,
			endLongitude:	-122.1519,
			color: 			'#ff0000',
			pixels: 		2,
			opacity: 		10
		}
		// Merge the User & Default Options
		options = $.extend({}, geoDesicDefaults, options);
		var polyOptions = {geodesic:true};
		var polyline = new GPolyline([ 
			new GLatLng(options.startLatitude, options.startLongitude),
			new GLatLng(options.endLatitude, options.endLongitude)], 
			options.color, options.pixels, options.opacity, polyOptions
		);
		$.googleMaps.gMap.addOverlay(polyline);
	},
	localSearchControl: function(options) {
		var controlLocation = $.googleMaps.mapControlsLocation(options.location);
		$.googleMaps.gMap.addControl(new $.googleMaps.gMap.LocalSearch(), new GControlPosition(controlLocation, new GSize(options.x,options.y)));
	},
	getLatitude: function() {
		return $.googleMaps.latitude;
	},
	getLongitude: function() {
		return $.googleMaps.longitude;
	},
	directions: {},
	latitude: '',
	longitude: '',
	latlong: {},
	maps: {},
	marker: {},
	gMap: {},
	defaults: {
	// Default Map Options
		latitude: 	37.4419,
		longitude: 	-122.1419,
		depth: 		13,
		scroll: 	true,
		trafficInfo: false,
		streetViewOverlay: false,
		controls: {
			hide: false,
			localSearch: false
		},
		layer:		null
	},
	mapPolyLine: function(options) {
		// Default PolyLine Options
		polylineDefaults = {
			startLatitude: 	37.4419,
			startLongitude: -122.1419,
			endLatitude:	37.4519,
			endLongitude:	-122.1519,
			color: 			'#ff0000',
			pixels: 		2
		}
		// Merge the User & Default Options
		options = $.extend({}, polylineDefaults, options);
		//Return the New Polyline
		return new GPolyline([
			$.googleMaps.mapLatLong(options.startLatitude, options.startLongitude),
			$.googleMaps.mapLatLong(options.endLatitude, options.endLongitude)], 
			options.color, 
			options.pixels
		);
	},
	mapLatLong: function(latitude, longitude) {
		// Returns Latitude & Longitude Center Point
		return new GLatLng(latitude, longitude);
	},
	mapPanOptions: function(options) {
		// Returns Panning Options
		var panDefaults = {
			panLatitude:	37.4569, 	
			panLongitude:	-122.1569,
			timeout: 		0
		}
		return options = $.extend({}, panDefaults, options);
	},
	mapMarkersOptions: function(icon) {
		//Define an icon
		var gIcon = new GIcon(G_DEFAULT_ICON);	
		if ( icon.image ) 
			// Define Icons Image
			gIcon.image = icon.image;
		if ( icon.shadow )
			// Define Icons Shadow
			gIcon.shadow = icon.shadow;
		if ( icon.iconSize )
			// Define Icons Size
			gIcon.iconSize = new GSize(icon.iconSize);
		if ( icon.shadowSize )
			// Define Icons Shadow Size
			gIcon.shadowSize = new GSize(icon.shadowSize);
		if ( icon.iconAnchor )
			// Define Icons Anchor
			gIcon.iconAnchor = new GPoint(icon.iconAnchor);
		if ( icon.infoWindowAnchor )
			// Define Icons Info Window Anchor
			gIcon.infoWindowAnchor = new GPoint(icon.infoWindowAnchor);
		if ( icon.dragCrossImage ) 
			// Define Drag Cross Icon Image
			gIcon.dragCrossImage = icon.dragCrossImage;
		if ( icon.dragCrossSize )
			// Define Drag Cross Icon Size
			gIcon.dragCrossSize = new GSize(icon.dragCrossSize);
		if ( icon.dragCrossAnchor )
			// Define Drag Cross Icon Anchor
			gIcon.dragCrossAnchor = new GPoint(icon.dragCrossAnchor);
		if ( icon.maxHeight )
			// Define Icons Max Height
			gIcon.maxHeight = icon.maxHeight;
		if ( icon.PrintImage )
			// Define Print Image
			gIcon.PrintImage = icon.PrintImage;
		if ( icon.mozPrintImage )
			// Define Moz Print Image
			gIcon.mozPrintImage = icon.mozPrintImage;
		if ( icon.PrintShadow )
			// Define Print Shadow
			gIcon.PrintShadow = icon.PrintShadow;
		if ( icon.transparent )
			// Define Transparent
			gIcon.transparent = icon.transparent;
		return gIcon;
	},
	mapMarkers: function(center, markers) {
        if ( typeof(markers.length) == 'undefined' )
        	// One marker only. Parse it into an array for consistency.
            markers = [markers];
		
		var j = 0;
		for ( i = 0; i<markers.length; i++) {
			var gIcon = null;
			if ( markers[i].icon ) {
				gIcon = $.googleMaps.mapMarkersOptions(markers[i].icon);
			}
			
			if ( markers[i].geocode ) {
				var geocoder = new GClientGeocoder();
				geocoder.getLatLng(markers[i].geocode, function(center) {										
					if (!center) 
						alert(address + " not found");
					else 
						$.googleMaps.marker[i] = new GMarker(center, {draggable: markers[i].draggable, icon: gIcon});
				});
			}
			else if ( markers[i].latitude && markers[i].longitude ) {
				// Latitude & Longitude Center Point
				center = $.googleMaps.mapLatLong(markers[i].latitude, markers[i].longitude);
				$.googleMaps.marker[i] = new GMarker(center, {draggable: markers[i].draggable, icon: gIcon});
			}
			$.googleMaps.gMap.addOverlay($.googleMaps.marker[i]);
			if ( markers[i].info ) {
				// Hide Div Layer With Info Window HTML
				$(markers[i].info.layer).hide();
				// Marker Div Layer Exists
				if ( markers[i].info.popup )
					// Map Marker Shows an Info Box on Load
					$.googleMaps.marker[i].openInfoWindowHtml($(markers[i].info.layer).html());
				else
					$.googleMaps.marker[i].bindInfoWindowHtml( $(markers[i].info.layer).html().toString() );
			}
		}
	},
	mapControlsLocation: function(location) {
		switch (location) {
			case 'G_ANCHOR_TOP_RIGHT' :
				return G_ANCHOR_TOP_RIGHT;
			break;
			case 'G_ANCHOR_BOTTOM_RIGHT' :
				return G_ANCHOR_BOTTOM_RIGHT;
			break;
			case 'G_ANCHOR_TOP_LEFT' :
				return G_ANCHOR_TOP_LEFT;
			break;
			case 'G_ANCHOR_BOTTOM_LEFT' :
				return G_ANCHOR_BOTTOM_LEFT;
			break;
		}
		return;
	},
	mapControl: function(control) {
		switch (control) {
			case 'GLargeMapControl3D' :
				return new GLargeMapControl3D();
			break;
			case 'GLargeMapControl' :
				return new GLargeMapControl();
			break;
			case 'GSmallMapControl' :
				return new GSmallMapControl();
			break;
			case 'GSmallZoomControl3D' :
				return new GSmallZoomControl3D();
			break;
			case 'GSmallZoomControl' :
				return new GSmallZoomControl();
			break;
			case 'GScaleControl' :
				return new GScaleControl();
			break;
			case 'GMapTypeControl' :
				return new GMapTypeControl();
			break;
			case 'GHierarchicalMapTypeControl' :
				return new GHierarchicalMapTypeControl();
			break;
			case 'GOverviewMapControl' :
				return new GOverviewMapControl();
			break;
			case 'GNavLabelControl' :
				return new GNavLabelControl();
			break;
		}
		return;
	},
	mapTypeControl: function(type) {
		switch ( type ) {
			case 'G_NORMAL_MAP' :
				return G_NORMAL_MAP;
			break;
			case 'G_SATELLITE_MAP' :
				return G_SATELLITE_MAP;
			break;
			case 'G_HYBRID_MAP' :
				return G_HYBRID_MAP;
			break;
		}
		return;
	},
	mapControls: function(options) {
		// Default Controls Options
		controlsDefaults = {
			type: {
				location: 'G_ANCHOR_TOP_RIGHT',
				x: 10,
				y: 10,
				control: 'GMapTypeControl'
			},
			zoom: {
				location: 'G_ANCHOR_TOP_LEFT',
				x: 10,
				y: 10,
				control: 'GLargeMapControl3D'
			}
		};
		// Merge the User & Default Options
		options = $.extend({}, controlsDefaults, options);
		options.type = $.extend({}, controlsDefaults.type, options.type);
		options.zoom = $.extend({}, controlsDefaults.zoom, options.zoom);
		
		if ( options.type ) {
			var controlLocation = $.googleMaps.mapControlsLocation(options.type.location);
			var controlPosition = new GControlPosition(controlLocation, new GSize(options.type.x, options.type.y));
			$.googleMaps.gMap.addControl($.googleMaps.mapControl(options.type.control), controlPosition);
		}
		if ( options.zoom ) {
			var controlLocation = $.googleMaps.mapControlsLocation(options.zoom.location);
			var controlPosition = new GControlPosition(controlLocation, new GSize(options.zoom.x, options.zoom.y))
			$.googleMaps.gMap.addControl($.googleMaps.mapControl(options.zoom.control), controlPosition);
		}
		if ( options.mapType ) {
			if ( options.mapType.length >= 1 ) {
				for ( i = 0; i<options.mapType.length; i++) {
					if ( options.mapType[i].remove )
						$.googleMaps.gMap.removeMapType($.googleMaps.mapTypeControl(options.mapType[i].remove));
					if ( options.mapType[i].add )
						$.googleMaps.gMap.addMapType($.googleMaps.mapTypeControl(options.mapType[i].add));
				}
			} 
			else {
				if ( options.mapType.add )
					$.googleMaps.gMap.addMapType($.googleMaps.mapTypeControl(options.mapType.add));
				if ( options.mapType.remove )
					$.googleMaps.gMap.removeMapType($.googleMaps.mapTypeControl(options.mapType.remove));
			}
		}
	},
	geoCode: function(options) {
		geocoder = new GClientGeocoder();
		
		geocoder.getLatLng(options.address, function(point) {
			if (!point)
				alert(address + " not found");
			else
          		$.googleMaps.gMap.setCenter(point, options.depth);
      	});
	}
};

/**
 *
 * Color picker
 * Author: Stefan Petre www.eyecon.ro
 * 
 * Dual licensed under the MIT and GPL licenses
 * 
 */
(function ($) {
	var ColorPicker = function () {
		var
			ids = {},
			inAction,
			charMin = 65,
			visible,
			tpl = '<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_submit"></div></div>',
			defaults = {
				eventName: 'click',
				onShow: function () {},
				onBeforeShow: function(){},
				onHide: function () {},
				onChange: function () {},
				onSubmit: function () {},
				color: 'ff0000',
				livePreview: true,
				flat: false
			},
			fillRGBFields = function  (hsb, cal) {
				var rgb = HSBToRGB(hsb);
				$(cal).data('colorpicker').fields
					.eq(1).val(rgb.r).end()
					.eq(2).val(rgb.g).end()
					.eq(3).val(rgb.b).end();
			},
			fillHSBFields = function  (hsb, cal) {
				$(cal).data('colorpicker').fields
					.eq(4).val(hsb.h).end()
					.eq(5).val(hsb.s).end()
					.eq(6).val(hsb.b).end();
			},
			fillHexFields = function (hsb, cal) {
				$(cal).data('colorpicker').fields
					.eq(0).val(HSBToHex(hsb)).end();
			},
			setSelector = function (hsb, cal) {
				$(cal).data('colorpicker').selector.css('backgroundColor', '#' + HSBToHex({h: hsb.h, s: 100, b: 100}));
				$(cal).data('colorpicker').selectorIndic.css({
					left: parseInt(150 * hsb.s/100, 10),
					top: parseInt(150 * (100-hsb.b)/100, 10)
				});
			},
			setHue = function (hsb, cal) {
				$(cal).data('colorpicker').hue.css('top', parseInt(150 - 150 * hsb.h/360, 10));
			},
			setCurrentColor = function (hsb, cal) {
				$(cal).data('colorpicker').currentColor.css('backgroundColor', '#' + HSBToHex(hsb));
			},
			setNewColor = function (hsb, cal) {
				$(cal).data('colorpicker').newColor.css('backgroundColor', '#' + HSBToHex(hsb));
			},
			keyDown = function (ev) {
				var pressedKey = ev.charCode || ev.keyCode || -1;
				if ((pressedKey > charMin && pressedKey <= 90) || pressedKey == 32) {
					return false;
				}
				var cal = $(this).parent().parent();
				if (cal.data('colorpicker').livePreview === true) {
					change.apply(this);
				}
			},
			change = function (ev) {
				var cal = $(this).parent().parent(), col;
				if (this.parentNode.className.indexOf('_hex') > 0) {
					cal.data('colorpicker').color = col = HexToHSB(fixHex(this.value));
				} else if (this.parentNode.className.indexOf('_hsb') > 0) {
					cal.data('colorpicker').color = col = fixHSB({
						h: parseInt(cal.data('colorpicker').fields.eq(4).val(), 10),
						s: parseInt(cal.data('colorpicker').fields.eq(5).val(), 10),
						b: parseInt(cal.data('colorpicker').fields.eq(6).val(), 10)
					});
				} else {
					cal.data('colorpicker').color = col = RGBToHSB(fixRGB({
						r: parseInt(cal.data('colorpicker').fields.eq(1).val(), 10),
						g: parseInt(cal.data('colorpicker').fields.eq(2).val(), 10),
						b: parseInt(cal.data('colorpicker').fields.eq(3).val(), 10)
					}));
				}
				if (ev) {
					fillRGBFields(col, cal.get(0));
					fillHexFields(col, cal.get(0));
					fillHSBFields(col, cal.get(0));
				}
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
				cal.data('colorpicker').onChange.apply(cal, [col, HSBToHex(col), HSBToRGB(col)]);
			},
			blur = function (ev) {
				var cal = $(this).parent().parent();
				cal.data('colorpicker').fields.parent().removeClass('colorpicker_focus');
			},
			focus = function () {
				charMin = this.parentNode.className.indexOf('_hex') > 0 ? 70 : 65;
				$(this).parent().parent().data('colorpicker').fields.parent().removeClass('colorpicker_focus');
				$(this).parent().addClass('colorpicker_focus');
			},
			downIncrement = function (ev) {
				var field = $(this).parent().find('input').focus();
				var current = {
					el: $(this).parent().addClass('colorpicker_slider'),
					max: this.parentNode.className.indexOf('_hsb_h') > 0 ? 360 : (this.parentNode.className.indexOf('_hsb') > 0 ? 100 : 255),
					y: ev.pageY,
					field: field,
					val: parseInt(field.val(), 10),
					preview: $(this).parent().parent().data('colorpicker').livePreview					
				};
				$(document).bind('mouseup', current, upIncrement);
				$(document).bind('mousemove', current, moveIncrement);
			},
			moveIncrement = function (ev) {
				ev.data.field.val(Math.max(0, Math.min(ev.data.max, parseInt(ev.data.val + ev.pageY - ev.data.y, 10))));
				if (ev.data.preview) {
					change.apply(ev.data.field.get(0), [true]);
				}
				return false;
			},
			upIncrement = function (ev) {
				change.apply(ev.data.field.get(0), [true]);
				ev.data.el.removeClass('colorpicker_slider').find('input').focus();
				$(document).unbind('mouseup', upIncrement);
				$(document).unbind('mousemove', moveIncrement);
				return false;
			},
			downHue = function (ev) {
				var current = {
					cal: $(this).parent(),
					y: $(this).offset().top
				};
				current.preview = current.cal.data('colorpicker').livePreview;
				$(document).bind('mouseup', current, upHue);
				$(document).bind('mousemove', current, moveHue);
			},
			moveHue = function (ev) {
				change.apply(
					ev.data.cal.data('colorpicker')
						.fields
						.eq(4)
						.val(parseInt(360*(150 - Math.max(0,Math.min(150,(ev.pageY - ev.data.y))))/150, 10))
						.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upHue = function (ev) {
				fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				$(document).unbind('mouseup', upHue);
				$(document).unbind('mousemove', moveHue);
				return false;
			},
			downSelector = function (ev) {
				var current = {
					cal: $(this).parent(),
					pos: $(this).offset()
				};
				current.preview = current.cal.data('colorpicker').livePreview;
				$(document).bind('mouseup', current, upSelector);
				$(document).bind('mousemove', current, moveSelector);
			},
			moveSelector = function (ev) {
				change.apply(
					ev.data.cal.data('colorpicker')
						.fields
						.eq(6)
						.val(parseInt(100*(150 - Math.max(0,Math.min(150,(ev.pageY - ev.data.pos.top))))/150, 10))
						.end()
						.eq(5)
						.val(parseInt(100*(Math.max(0,Math.min(150,(ev.pageX - ev.data.pos.left))))/150, 10))
						.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upSelector = function (ev) {
				fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				$(document).unbind('mouseup', upSelector);
				$(document).unbind('mousemove', moveSelector);
				return false;
			},
			enterSubmit = function (ev) {
				$(this).addClass('colorpicker_focus');
			},
			leaveSubmit = function (ev) {
				$(this).removeClass('colorpicker_focus');
			},
			clickSubmit = function (ev) {
				var cal = $(this).parent();
				var col = cal.data('colorpicker').color;
				cal.data('colorpicker').origColor = col;
				setCurrentColor(col, cal.get(0));
				cal.data('colorpicker').onSubmit(col, HSBToHex(col), HSBToRGB(col), cal.data('colorpicker').el);
			},
			show = function (ev) {
				var cal = $('#' + $(this).data('colorpickerId'));
				cal.data('colorpicker').onBeforeShow.apply(this, [cal.get(0)]);
				var pos = $(this).offset();
				var viewPort = getViewport();
				var top = pos.top + this.offsetHeight;
				var left = pos.left;
				if (top + 176 > viewPort.t + viewPort.h) {
					top -= this.offsetHeight + 176;
				}
				if (left + 356 > viewPort.l + viewPort.w) {
					left -= 356;
				}
				cal.css({left: left + 'px', top: top + 'px'});
				if (cal.data('colorpicker').onShow.apply(this, [cal.get(0)]) != false) {
					cal.show();
				}
				$(document).bind('mousedown', {cal: cal}, hide);
				return false;
			},
			hide = function (ev) {
				if (!isChildOf(ev.data.cal.get(0), ev.target, ev.data.cal.get(0))) {
					if (ev.data.cal.data('colorpicker').onHide.apply(this, [ev.data.cal.get(0)]) != false) {
						ev.data.cal.hide();
					}
					$(document).unbind('mousedown', hide);
				}
			},
			isChildOf = function(parentEl, el, container) {
				if (parentEl == el) {
					return true;
				}
				if (parentEl.contains) {
					return parentEl.contains(el);
				}
				if ( parentEl.compareDocumentPosition ) {
					return !!(parentEl.compareDocumentPosition(el) & 16);
				}
				var prEl = el.parentNode;
				while(prEl && prEl != container) {
					if (prEl == parentEl)
						return true;
					prEl = prEl.parentNode;
				}
				return false;
			},
			getViewport = function () {
				var m = document.compatMode == 'CSS1Compat';
				return {
					l : window.pageXOffset || (m ? document.documentElement.scrollLeft : document.body.scrollLeft),
					t : window.pageYOffset || (m ? document.documentElement.scrollTop : document.body.scrollTop),
					w : window.innerWidth || (m ? document.documentElement.clientWidth : document.body.clientWidth),
					h : window.innerHeight || (m ? document.documentElement.clientHeight : document.body.clientHeight)
				};
			},
			fixHSB = function (hsb) {
				return {
					h: Math.min(360, Math.max(0, hsb.h)),
					s: Math.min(100, Math.max(0, hsb.s)),
					b: Math.min(100, Math.max(0, hsb.b))
				};
			}, 
			fixRGB = function (rgb) {
				return {
					r: Math.min(255, Math.max(0, rgb.r)),
					g: Math.min(255, Math.max(0, rgb.g)),
					b: Math.min(255, Math.max(0, rgb.b))
				};
			},
			fixHex = function (hex) {
				var len = 6 - hex.length;
				if (len > 0) {
					var o = [];
					for (var i=0; i<len; i++) {
						o.push('0');
					}
					o.push(hex);
					hex = o.join('');
				}
				return hex;
			}, 
			HexToRGB = function (hex) {
				var hex = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
				return {r: hex >> 16, g: (hex & 0x00FF00) >> 8, b: (hex & 0x0000FF)};
			},
			HexToHSB = function (hex) {
				return RGBToHSB(HexToRGB(hex));
			},
			RGBToHSB = function (rgb) {
				var hsb = {
					h: 0,
					s: 0,
					b: 0
				};
				var min = Math.min(rgb.r, rgb.g, rgb.b);
				var max = Math.max(rgb.r, rgb.g, rgb.b);
				var delta = max - min;
				hsb.b = max;
				if (max != 0) {
					
				}
				hsb.s = max != 0 ? 255 * delta / max : 0;
				if (hsb.s != 0) {
					if (rgb.r == max) {
						hsb.h = (rgb.g - rgb.b) / delta;
					} else if (rgb.g == max) {
						hsb.h = 2 + (rgb.b - rgb.r) / delta;
					} else {
						hsb.h = 4 + (rgb.r - rgb.g) / delta;
					}
				} else {
					hsb.h = -1;
				}
				hsb.h *= 60;
				if (hsb.h < 0) {
					hsb.h += 360;
				}
				hsb.s *= 100/255;
				hsb.b *= 100/255;
				return hsb;
			},
			HSBToRGB = function (hsb) {
				var rgb = {};
				var h = Math.round(hsb.h);
				var s = Math.round(hsb.s*255/100);
				var v = Math.round(hsb.b*255/100);
				if(s == 0) {
					rgb.r = rgb.g = rgb.b = v;
				} else {
					var t1 = v;
					var t2 = (255-s)*v/255;
					var t3 = (t1-t2)*(h%60)/60;
					if(h==360) h = 0;
					if(h<60) {rgb.r=t1;	rgb.b=t2; rgb.g=t2+t3}
					else if(h<120) {rgb.g=t1; rgb.b=t2;	rgb.r=t1-t3}
					else if(h<180) {rgb.g=t1; rgb.r=t2;	rgb.b=t2+t3}
					else if(h<240) {rgb.b=t1; rgb.r=t2;	rgb.g=t1-t3}
					else if(h<300) {rgb.b=t1; rgb.g=t2;	rgb.r=t2+t3}
					else if(h<360) {rgb.r=t1; rgb.g=t2;	rgb.b=t1-t3}
					else {rgb.r=0; rgb.g=0;	rgb.b=0}
				}
				return {r:Math.round(rgb.r), g:Math.round(rgb.g), b:Math.round(rgb.b)};
			},
			RGBToHex = function (rgb) {
				var hex = [
					rgb.r.toString(16),
					rgb.g.toString(16),
					rgb.b.toString(16)
				];
				$.each(hex, function (nr, val) {
					if (val.length == 1) {
						hex[nr] = '0' + val;
					}
				});
				return hex.join('');
			},
			HSBToHex = function (hsb) {
				return RGBToHex(HSBToRGB(hsb));
			},
			restoreOriginal = function () {
				var cal = $(this).parent();
				var col = cal.data('colorpicker').origColor;
				cal.data('colorpicker').color = col;
				fillRGBFields(col, cal.get(0));
				fillHexFields(col, cal.get(0));
				fillHSBFields(col, cal.get(0));
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
			};
		return {
			init: function (opt) {
				opt = $.extend({}, defaults, opt||{});
				if (typeof opt.color == 'string') {
					opt.color = HexToHSB(opt.color);
				} else if (opt.color.r != undefined && opt.color.g != undefined && opt.color.b != undefined) {
					opt.color = RGBToHSB(opt.color);
				} else if (opt.color.h != undefined && opt.color.s != undefined && opt.color.b != undefined) {
					opt.color = fixHSB(opt.color);
				} else {
					return this;
				}
				return this.each(function () {
					if (!$(this).data('colorpickerId')) {
						var options = $.extend({}, opt);
						options.origColor = opt.color;
						var id = 'collorpicker_' + parseInt(Math.random() * 1000);
						$(this).data('colorpickerId', id);
						var cal = $(tpl).attr('id', id);
						if (options.flat) {
							cal.appendTo(this).show();
						} else {
							cal.appendTo(document.body);
						}
						options.fields = cal
											.find('input')
												.bind('keyup', keyDown)
												.bind('change', change)
												.bind('blur', blur)
												.bind('focus', focus);
						cal
							.find('span').bind('mousedown', downIncrement).end()
							.find('>div.colorpicker_current_color').bind('click', restoreOriginal);
						options.selector = cal.find('div.colorpicker_color').bind('mousedown', downSelector);
						options.selectorIndic = options.selector.find('div div');
						options.el = this;
						options.hue = cal.find('div.colorpicker_hue div');
						cal.find('div.colorpicker_hue').bind('mousedown', downHue);
						options.newColor = cal.find('div.colorpicker_new_color');
						options.currentColor = cal.find('div.colorpicker_current_color');
						cal.data('colorpicker', options);
						cal.find('div.colorpicker_submit')
							.bind('mouseenter', enterSubmit)
							.bind('mouseleave', leaveSubmit)
							.bind('click', clickSubmit);
						fillRGBFields(options.color, cal.get(0));
						fillHSBFields(options.color, cal.get(0));
						fillHexFields(options.color, cal.get(0));
						setHue(options.color, cal.get(0));
						setSelector(options.color, cal.get(0));
						setCurrentColor(options.color, cal.get(0));
						setNewColor(options.color, cal.get(0));
						if (options.flat) {
							cal.css({
								position: 'relative',
								display: 'block'
							});
						} else {
							$(this).bind(options.eventName, show);
						}
					}
				});
			},
			showPicker: function() {
				return this.each( function () {
					if ($(this).data('colorpickerId')) {
						show.apply(this);
					}
				});
			},
			hidePicker: function() {
				return this.each( function () {
					if ($(this).data('colorpickerId')) {
						$('#' + $(this).data('colorpickerId')).hide();
					}
				});
			},
			setColor: function(col) {
				if (typeof col == 'string') {
					col = HexToHSB(col);
				} else if (col.r != undefined && col.g != undefined && col.b != undefined) {
					col = RGBToHSB(col);
				} else if (col.h != undefined && col.s != undefined && col.b != undefined) {
					col = fixHSB(col);
				} else {
					return this;
				}
				return this.each(function(){
					if ($(this).data('colorpickerId')) {
						var cal = $('#' + $(this).data('colorpickerId'));
						cal.data('colorpicker').color = col;
						cal.data('colorpicker').origColor = col;
						fillRGBFields(col, cal.get(0));
						fillHSBFields(col, cal.get(0));
						fillHexFields(col, cal.get(0));
						setHue(col, cal.get(0));
						setSelector(col, cal.get(0));
						setCurrentColor(col, cal.get(0));
						setNewColor(col, cal.get(0));
					}
				});
			}
		};
	}();
	$.fn.extend({
		ColorPicker: ColorPicker.init,
		ColorPickerHide: ColorPicker.hidePicker,
		ColorPickerShow: ColorPicker.showPicker,
		ColorPickerSetColor: ColorPicker.setColor
	});
})(jQuery)

var ChartHelper = function () {
	
	var visualizeChartType = 'area';
	var visualizeChartHeight = '280px';
	var visualizeChartColors = ['#06C', '#222', '#777', '#555','#002646','#999','#bbb','#ccc','#eee'];
	var visualizeChartWidth = '';
	
	return { fusion: fusion, visualize: visualize };
	
	function visualize (config) {
		config.el.each(function() 
		{				
			visualizeChartHeight = ($(this).attr ('data-chart-height') != null) ? $(this).attr ('data-chart-height') + 'px' :  visualizeChartHeight;
			visualizeChartType = ($(this).attr ('data-chart-type') != null) ? $(this).attr ('data-chart-type') : visualizeChartType;				

			visualizeChartWidth = $(this).parent ().width () * .92;

			if(visualizeChartType == 'line' || visualizeChartType == 'pie') {
				$(this).hide().visualize({
					type: visualizeChartType
					, width: visualizeChartWidth
					, height: visualizeChartHeight			
					, colors: visualizeChartColors
					, lineDots: 'double'
					, interaction: true
					, multiHover: 5
					, tooltip: true
					, tooltiphtml: function(data) {
						var html ='';
						for(var i=0; i<data.point.length; i++){
							html += '<p class="chart_tooltip"><strong>'+data.point[i].value+'</strong> '+data.point[i].yLabels[0]+'</p>';
						}	
						return html;
					}
				}).addClass ('chartHelperChart');;
			} else {
				$(this).hide().visualize({
					type: visualizeChartType					
					, colors: visualizeChartColors
					, width: visualizeChartWidth
					, height: visualizeChartHeight
				}).addClass ('chartHelperChart');
			}				
		});
	}
	
	function fusion (object) {
		
		var el = $('#' + object.id);
		
		el.addClass ('chart-holder');
		el.empty ();
		object.width = object.width || el.width ();
		object.height = object.height || el.height ();
		
		object.width = el.width ();
		
		var chart = new FusionCharts("./FusionCharts/FCF_" + object.chart + ".swf", object.id, object.width, object.height);		   			
		if (object.dataUrl) {
			chart.setDataURL (object.dataUrl);		
		} else {		
			chart.setDataXML(object.data);
		}
		
		chart.render(object.id);
		
		return chart;

	}
}();

$(function () {			   
	Layout.init ();
	Menu.init ();
	Nav.init ();
	
	if ($.fn.dataTable) { $('.data-table').dataTable ({ "bJQueryUI": true,
		"sPaginationType": "full_numbers",
		 }); };
	
	drawChart ();
	
	$(document).bind ('layout.resize', function () {
		drawChart ();
	});
	
	if ($('.chartHelperChart').length < 1) {
		$(document).unbind ('layout.resize');
	}
	
	$('.uniformForm').find ("select, input:checkbox, input:radio, input:file").uniform();
	
	$('.validateForm').validationEngine ();
	
	$('#reveal-nav').live ('click', toggleNav);
	
	$('.notify').find ('.close').live ('click', notifyClose);
	
	$('.tooltip').tipsy ();
});

function notifyClose (e) {
	e.preventDefault ();
	
	$(this).parents ('.notify').slideUp ('medium', function () { $(this).remove (); });
}

function toggleNav (e) {
	e.preventDefault ();
	
	$('#sidebar').toggleClass ('revealShow');
}

function drawChart () {
	$('.chartHelperChart').remove ();
	ChartHelper.visualize ({ el: $('table.stats') });
}

