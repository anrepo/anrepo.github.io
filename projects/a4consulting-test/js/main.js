!function(e){function t(t){for(var o,c,a=t[0],s=t[1],l=t[2],p=0,u=[];p<a.length;p++)c=a[p],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&u.push(r[c][0]),r[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);for(d&&d(t);u.length;)u.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={main:0},i=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var a=window.webpackJsonp=window.webpackJsonp||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var d=s;i.push(["./src/js/main.js","vendor"]),n()}({"./src/js/components/popup.js":function(e,t,n){"use strict";n.r(t);var o=n("./src/js/components/radio-custom.js"),r=document.querySelectorAll(".popup-link"),i=document.querySelector("body"),c=document.documentElement,a=document.querySelectorAll(".lock-padding"),s=800,l=!0;function d(e){if(e&&l){var t=document.querySelector(".popup__mask--open");t?p(t,!1):function(){var e=window.innerWidth-document.querySelector(".site").offsetWidth+"px";if(a>0)for(var t=0;t<a.length;t++){var n=a[t];n.style.paddingRight=e}i.style.paddingRight=e,i.classList.add("lock"),c.style.overflow="hidden",l=!1,setTimeout(function(){l=!0},s)}(),e.classList.add("popup__mask--open"),e.addEventListener("click",function(e){e.target.closest(".popup__body")||p(e.target.closest(".popup__mask"))})}}function p(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];l&&(e.classList.remove("popup__mask--open"),t&&(setTimeout(function(e){for(var t=0;t<a.length;t++){var n=a[t];n.style.paddingRight="0px"}i.style.paddingRight="0px",i.classList.remove("lock"),c.style.overflow="auto"},s),l=!1,setTimeout(function(){l=!0},s)))}t.default={init:function(){if(o.default.init(),r.length>0)for(var e=function(){var e=r[t];e.addEventListener("click",function(t){var n=e.getAttribute("href").replace("#",""),o=document.getElementById(n);console.log(n),d(o),t.preventDefault})},t=0;t<r.length;t++)e();var n=document.querySelectorAll(".popup__close");if(n.length>0)for(var i=function(){var e=n[c];e.addEventListener("click",function(t){p(e.closest(".popup__mask")),t.preventDefault})},c=0;c<n.length;c++)i();document.addEventListener("keydown",function(e){27===e.which&&p(document.querySelector(".popup__mask--open"))}),Element.prototype.closest||(Element.prototype.closest=function(e){for(var t=this;t;){if(t.matches(e))return t;t=t.parentElement}return null}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.mozMatchesSelector)},popupOpen:d}},"./src/js/components/preloader.js":function(e,t,n){"use strict";n.r(t),t.default={init:function(){var e=document.querySelector(".js-preloader");setTimeout(function(){e.style.opacity=0,e.style.visability="hidden",e.addEventListener("transitionend",function(){e.style.display="none"})},500)}}},"./src/js/components/radio-custom.js":function(e,t,n){"use strict";function o(e){e.forEach(function(e,t){e.checked?e.closest("label.radio-button").classList.add("radio-button--active"):e.closest("label.radio-button").classList.remove("radio-button--active")})}n.r(t),t.default={init:function(){var e=document.querySelectorAll('input[type="radio"]');e.forEach(function(t){t.addEventListener("click",function(){o(e)})}),o(e)}}},"./src/js/components/timerCountdown.js":function(e,t,n){"use strict";n.r(t),t.default={init:function(){var e=document.querySelector(".js-timer-countdown"),t=e.querySelector(".js-timer-countdown__minutes"),n=e.querySelector(".js-timer-countdown__seconds"),o=120;!function r(){var i=parseInt(o/60),c=parseInt(o-60*i);if(function(e,o){1===e.toString().length&&(e="0"+e),1===o.toString().length&&(o="0"+o),t.innerHTML=e,n.innerHTML=o}(i,c),0===i&&c<=30&&e.classList.add("js-discount-timer--is-ending"),0==o)return gsap.timeline({}).to(".rate-plan__cell-percentage",{opacity:0}).to(".rate-plan__cell-discount",{opacity:0},"<").to(".rate-plan__cell-price",{opacity:0},"<").to(".rate-plan__cells",{onComplete:function(){document.querySelector(".rate-plan__cells").classList.add("rate-plan__cells--hidden-discount")}}).to(".rate-plan__cell-price",{opacity:1}).to(".rate-plan__cells",{delay:.15,onComplete:function(){popup.popupOpen(document.querySelector("#popup"))}}),0;o--,setTimeout(r,1e3)}()}}},"./src/js/helpers.js":function(e,t,n){"use strict";n.r(t),function(e){var o,r,i=n("./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js"),c={};function a(){return!(!c.isIE||!c.getScrollbarWidth())||!c.isMobile()&&(!(!window.matchMedia("(any-hover: hover)").matches&&!window.matchMedia("(hover: hover)").matches)||!window.matchMedia("(hover: none)").matches&&void 0===c.$html.ontouchstart)}c.$document=$(document),c.$window=$(window),c.$body=$(document.body),c.$html=$(document.documentElement),c.isMobile=function(){return innerWidth<=1024},c.isIE=function(){return c.$html.hasClass("is-browser-ie")},c.isIOS=function(){return c.$html.hasClass("is-os-ios")},c.winWidth=window.innerWidth,c.clearText=function(e){return e.trim().replace(/\s+/g," ")},c.setCookie=function(e,t,n){var o="";if(n){var r=new Date;r.setTime(r.getTime()+24*n*60*60*1e3),o="; expires=".concat(r.toUTCString())}document.cookie="".concat(e,"=").concat(t||"").concat(o,"; path=/")},c.getCookie=function(e){for(var t="".concat(e,"="),n=document.cookie.split(";"),o=0;o<n.length;o++){for(var r=n[o];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return null},c.eraseCookie=function(e){document.cookie="".concat(e,"=; Max-Age=-99999999;")},c.lockScroll=function(t,n,r){var a=n.get(0)?n.get(0):n;void 0===o&&(o=new Set);var s=o;t?("string"==typeof r&&s.add(r),i.disableBodyScroll(a,{reserveScrollBarGap:!0}),e(function(){c.$html.addClass("is-lock-scroll")})):("string"==typeof r&&s.delete(r),i.enableBodyScroll(a),s.size||(i.clearAllBodyScrollLocks(),c.$html.removeClass("is-lock-scroll")))},c.scrollTo=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;c.$html.css("scroll-behavior","initial"),$("html, body").stop().animate({scrollTop:"".concat(e.offset().top+parseInt(n,10))},parseInt(t,10)),setTimeout(function(){c.$html.css("scroll-behavior","")},parseInt(t,10)+100)},c.getScrollbarWidth=function(){var e=window.innerWidth-c.$html.get(0).clientWidth;return e||document.documentElement.clientHeight>=document.documentElement.offsetHeight?e:(r||((r=document.createElement("div")).style.cssText="width:100px;height:100px;overflow:scroll !important;position:absolute;top:-9999px",document.body.appendChild(r)),r.offsetWidth-r.clientWidth)},a()?c.$html.removeClass("no-hover").addClass("has-hover"):c.$html.removeClass("has-hover").addClass("no-hover"),c.$window.on("resize",function(){setTimeout(function(){c.winWidth!==window.innerWidth&&(a()?c.$html.removeClass("no-hover").addClass("has-hover"):c.$html.removeClass("has-hover").addClass("no-hover"),c.winWidth=window.innerWidth)},300)}),t.default=c}.call(this,n("./node_modules/timers-browserify/main.js").setImmediate)},"./src/js/main.js":function(e,t,n){"use strict";n.r(t);n("./src/js/vendor.js"),n("./src/js/helpers.js");var o=n("./src/js/vendor/ie-fix.js"),r=n("./src/js/vendor/vh-fix.js"),i=n("./src/js/pages/home.js"),c=n("./src/js/components/timerCountdown.js"),a=n("./src/js/components/preloader.js"),s=n("./src/js/components/popup.js");window.timerCountdown=c.default,window.preloader=a.default,window.popup=s.default,Object(o.ieFix)(),Object(r.vhFix)(),i.default.init()},"./src/js/pages/home.js":function(e,t,n){"use strict";n.r(t);var o={page:[{percent:.3,priceByDesign:999,description:"Чтобы просто начать 👍🏻"},{percent:.4,priceByDesign:1690,description:"Привести тело в порядок 💪🏻"},{percent:.5,priceByDesign:5990,description:"Изменить образ&nbsp;жизни 🔥"},{percent:.7,priceByDesign:18990,description:'<div>Всегда быть в&nbsp;форме<span class="for-desktop"> и&nbsp;поддерживать своё здоровье</span> ⭐️</div>'}],popup:[{percent:.4,priceByDesign:999},{percent:.5,priceByDesign:1690},{percent:.6,priceByDesign:3990}]};function r(e,t,n){var o=document.createElement("div");o.classList.add("rate-plan__cell-item"),e.appendChild(o);var r=document.createElement("div");r.classList.add("rate-plan__cell-percentage");var i=document.createElementNS("http://www.w3.org/2000/svg","svg"),c=document.createElementNS("http://www.w3.org/2000/svg","use");c.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","./images/sprites.svg#percentage-star"),i.appendChild(c),r.prepend(i);var a=document.createElement("div");a.classList.add("rate-plan__cell-percentage-text"),a.textContent="-".concat(100*n.percent,"%"),r.appendChild(a);var s=document.createElement("div");s.classList.add("rate-plan__cell-content");var l=document.createElement("div");l.classList.add("rate-plan__cell-nums");var d=document.createElement("div");d.classList.add("rate-plan__cell-period"),d.textContent=t.name;var p=document.createElement("div");p.classList.add("rate-plan__cell-description","for-mobile"),p.innerHTML=n.description;var u=document.createElement("div");u.classList.add("rate-plan__cell-cost");var m=document.createElement("div");m.classList.add("rate-plan__cell-price"),m.textContent=n.priceByDesign+"₽";var f=document.createElement("div");f.classList.add("rate-plan__cell-discount"),f.textContent=t.price+"₽",u.append(m,f),l.append(d,p,u);var h=document.createElement("div");h.classList.add("rate-plan__cell-description","for-desktop"),h.innerHTML=n.description,s.append(l,h),o.append(r,s)}function i(e,t,n,o){var r=document.createElement("label");r.classList.add("radio-button","popup__offer-list-item");var i=document.createElement("div");i.classList.add("popup__offer-top");var c=document.createElement("div");c.classList.add("popup__offer-top-content");var a=document.createElement("div");a.classList.add("popup__offer-limit"),a.textContent=t.name;var s=document.createElement("div");s.classList.add("popup__offer-price","text--cross","for-desktop"),s.textContent=n.priceByDesign+"₽";var l=document.createElement("div");l.classList.add("popup__offer-top-right-content");var d=document.createElement("div");d.classList.add("radio-button__input");var p=document.createElement("input");p.type="radio",p.name="offer",p.value=o;var u=document.createElement("div");u.classList.add("radio-button__input-custom");var m=document.createElement("div");m.classList.add("popup__offer-separator","for-desktop");var f=document.createElement("div");f.classList.add("popup__offer-bottom");var h=document.createElement("div");h.classList.add("popup__offer-discount"),h.textContent=t.price+"₽";var v=document.createElement("div");v.classList.add("popup__offer-percent");var y=document.createElementNS("http://www.w3.org/2000/svg","svg"),w=document.createElementNS("http://www.w3.org/2000/svg","use");w.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","./images/sprites.svg#percentage-star"),y.appendChild(w);var g=document.createElement("div");g.classList.add("popup__offer-percent-text"),g.textContent="-".concat(100*n.percent,"%");var b=document.createElement("div");b.classList.add("popup__offer-price","text--cross","for-mobile"),b.textContent=n.priceByDesign+"₽",e.appendChild(r),r.append(i,m,f),i.append(c,l),c.append(a,s),l.append(d),d.append(p,u),f.append(h,b),h.append(v),v.append(y,g)}function c(){fetch("https://t-pay.iqfit.app/subscribe/list-test").then(function(e){return e.json()}).then(function(e){!function(e){var t=0,n=0,c=document.querySelector(".rates .col--2"),a=document.createElement("div");a.classList.add("rate-plan__cells"),c.prepend(a);var s,l,d=document.querySelector(".js-popup-offers"),p=document.createElement("div"),u=d.querySelector(".js-space-above-offers");p.classList.add("popup__offer-list"),l=p,(s=u).parentNode.insertBefore(l,s.nextSibling),e.forEach(function(c,s){!0===c.isPopular?t>=0&&t<=3?(r(a,e[s],o.page[t]),t++):r(a,e[s],""):!0===c.isDiscount&&(n>=0&&n<=2?(i(p,e[s],o.popup[n],n),n++):i(p,e[s],"",n))})}(e)}).catch(function(e){console.log(e)})}t.default={init:function(){preloader.init(),timerCountdown.init(),popup.init(),c()}}},"./src/js/vendor.js":function(e,t,n){"use strict";n.r(t);n("./node_modules/core-js/stable/index.js"),n("./node_modules/regenerator-runtime/runtime.js");var o=n("./node_modules/svg4everybody/dist/svg4everybody.js"),r=n.n(o),i=n("./node_modules/jquery/dist/jquery.js"),c=n.n(i),a=n("./node_modules/gsap/index.js");r()(),window.$=c.a,window.jQuery=c.a,window.gsap=a.default,n("./node_modules/sticky-kit/dist/sticky-kit.js"),n("./node_modules/lazy-blur.js/dist/lazy-blur.min.js")},"./src/js/vendor/ie-fix.js":function(e,t,n){"use strict";n.r(t),n.d(t,"ieFix",function(){return o});var o=function(){!function(){if("performance"in window==0&&(window.performance={}),Date.now=Date.now||function(){return(new Date).getTime()},"now"in window.performance==0){var e=Date.now();performance.timing&&performance.timing.navigationStart&&(e=performance.timing.navigationStart),window.performance.now=function(){return Date.now()-e}}}(),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),function(){if("function"==typeof window.CustomEvent)return!1;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}(),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),o=n.length>>>0;if(0===o)return!1;var r,i,c=0|t,a=Math.max(c>=0?c:o-Math.abs(c),0);for(;a<o;){if((r=n[a])===(i=e)||"number"==typeof r&&"number"==typeof i&&isNaN(r)&&isNaN(i))return!0;a++}return!1}}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;--n>=0&&t.item(n)!==this;);return n>-1}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null}),[Element.prototype,Document.prototype,DocumentFragment.prototype].forEach(function(e){e.hasOwnProperty("prepend")||Object.defineProperty(e,"prepend",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=Array.prototype.slice.call(arguments),t=document.createDocumentFragment();e.forEach(function(e){var n=e instanceof Node;t.appendChild(n?e:document.createTextNode(String(e)))}),this.insertBefore(t,this.firstChild)}})}),[Element.prototype,Document.prototype,DocumentFragment.prototype].forEach(function(e){e.hasOwnProperty("append")||Object.defineProperty(e,"append",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=Array.prototype.slice.call(arguments),t=document.createDocumentFragment();e.forEach(function(e){var n=e instanceof Node;t.appendChild(n?e:document.createTextNode(String(e)))}),this.appendChild(t)}})}),[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach(function(e){e.hasOwnProperty("before")||Object.defineProperty(e,"before",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=Array.prototype.slice.call(arguments),t=document.createDocumentFragment();e.forEach(function(e){var n=e instanceof Node;t.appendChild(n?e:document.createTextNode(String(e)))}),this.parentNode.insertBefore(t,this)}})}),[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach(function(e){e.hasOwnProperty("remove")||Object.defineProperty(e,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){null!==this.parentNode&&this.parentNode.removeChild(this)}})}),String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(e,t){var n=t>0?0|t:0;return this.substring(n,n+e.length)===e}});if(window.navigator.msSaveBlob){var e=document.querySelectorAll("a[download]");e.length&&e.forEach(function(e){!function(e){if(""===e.href)throw Error("The element has no href value.");var t=e.getAttribute("download");if(null===t||""===t){var n=e.href.split("/");t=n[n.length-1]}e.addEventListener("click",function(n){n.preventDefault();var o=new XMLHttpRequest;o.onloadstart=function(){o.responseType="blob"},o.onload=function(){navigator.msSaveOrOpenBlob(o.response,t)},o.open("GET",e.href,!0),o.send()})}(e)})}window.MSInputMethodContext&&document.documentMode&&document.querySelectorAll("svg").forEach(function(e){e.setAttribute("focusable","false")});!function(){var e,t,n,o=document.querySelector("main"),r=document.querySelector(".header"),i=document.querySelector(".footer");if(o&&window.MSInputMethodContext&&document.documentMode){var c=function(){e=r?r.getBoundingClientRect().height:0,t=i?i.getBoundingClientRect().height:0,n=window.innerHeight,o.style.minHeight=n-(e+t)+"px"};document.addEventListener("loadDOMContentLoaded",c()),window.addEventListener("resize",c)}}()}},"./src/js/vendor/vh-fix.js":function(e,t,n){"use strict";n.r(t),n.d(t,"vhFix",function(){return o});var o=function(){if(!window.MSInputMethodContext||!document.documentMode){var e=window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px")),window.addEventListener("resize",function(){e=window.innerHeight,document.documentElement.style.setProperty("--vh","".concat(e,"px"))})}}}});