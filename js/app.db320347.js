!function(t){var e={};function o(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(s,i,function(e){return t[e]}.bind(null,i));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";o.r(e);o(1);window.addEventListener("DOMContentLoaded",(function(){new class{constructor(t){this.options=Object.assign({isOpen:()=>{},isClose:()=>{}},t),this.modal=document.querySelector(".modal"),this.speed=!1,this.animation=!1,this.isOpen=!1,this.isClose=!1,this.modalContainer=!1,this.previousActiveElement=!1,this.fixBlocks=document.querySelectorAll(".fix-block"),this.focusElements=["a[href]","input","button","select","textarea","[tabindex]"],this.events()}events(){this.modal&&(document.addEventListener("click",function(t){const e=t.target.closest("[data-path]");if(e){let t=e.dataset.path,o=e.dataset.animation,s=e.dataset.speed;return this.animation=o||"fade",this.speed=s?parseInt(s):300,this.modalContainer=document.querySelector(`[data-target="${t}"]`),void this.open()}t.target.closest(".modal-close")&&this.close()}.bind(this)),window.addEventListener("keydown",function(t){27==t.keyCode&&this.isOpen&&this.close(),9==t.keyCode&&this.isOpen&&this.focusCatch(t)}.bind(this)),this.modal.addEventListener("click",function(t){t.target.classList.contains("modal__container")||t.target.closest(".modal__container")||!this.isOpen||this.close()}.bind(this)))}open(){this.previousActiveElement=document.activeElement,this.modal.style.setProperty("--transition-time",this.speed/1e3+"s"),this.disableScroll(),this.modalContainer.classList.add("modal-open"),this.modalContainer.classList.add(this.animation),setTimeout(()=>{this.modal.classList.add("is-open"),this.options.isOpen(this),this.modalContainer.classList.add("animate-open"),this.isOpen=!0,this.focusTrap()},this.speed/2)}close(){this.modalContainer&&(this.modalContainer.classList.remove("animate-open"),this.modalContainer.classList.remove(this.animation),this.modal.classList.remove("is-open"),this.modalContainer.classList.remove("modal-open"),this.enableScroll(),this.options.isClose(this),this.isOpen=!1,this.isClose=!0,this.focusTrap())}focusCatch(t){const e=this.modalContainer.querySelectorAll(this.focusElements),o=Array.prototype.slice.call(e),s=o.indexOf(document.activeElement);t.shiftKey&&0===s&&(o[o.lenght-1].focus(),t.preventDefault()),t.shiftKey||s!==o.lenght-1||(o[0].focus(),t.preventDefault())}focusTrap(){const t=this.modalContainer.querySelectorAll(this.focusElements);this.isOpen?t&&t[0].focus():this.previousActiveElement.focus()}disableScroll(){let t=window.scrollY;this.lockPadding(),document.body.classList.add("disable-scroll"),document.body.dataset.position=t,document.body.style.top=-t+"px"}enableScroll(){let t=parseInt(document.body.dataset.position,10);this.unlockPadding(),document.body.style.top="auto",document.body.classList.remove("disable-scroll"),window.scroll({top:t,left:0}),document.body.removeAttribute("data-position")}lockPadding(){let t=window.innerWidth-document.body.offsetWidth+"px";this.fixBlocks.forEach(e=>{e.style.paddingRight=t}),document.body.style.paddingRight=t}unlockPadding(){this.fixBlocks.forEach(t=>{t.style.paddingRight="0px"}),document.body.style.paddingRight="0px"}}({isOpen:t=>{console.log(t),console.log("opened")},isClose:()=>{console.log("closed")}})}))},function(t,e,o){}]);
//# sourceMappingURL=app.db320347.js.map