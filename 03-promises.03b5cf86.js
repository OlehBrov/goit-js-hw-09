var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequire7bc7;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var l={id:e,exports:{}};return n[e]=l,t.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequire7bc7=t),t("7Y9D8"),refs={form:document.querySelector(".form"),submitBtn:document.querySelector("button")};const l={};let r=1,i=null,s=null;function u(e,n){Math.random()>.3?console.log(`✅ Fulfilled promise ${e} in ${n}ms`):console.log(`❌ Rejected promise ${e} in ${n}ms`)}refs.form.addEventListener("input",(function(e){l[e.target.name]=e.target.value,console.log(l.delay)})),refs.submitBtn.addEventListener("click",(function(e){e.preventDefault(),i=setTimeout((()=>{u(r,l.step),r+=1,clearTimeout(i)}),l.delay),l.amount===r&&clearInterval(s);s=setInterval((()=>{}),l.step)})),console.log(l),console.log(l.delay);
//# sourceMappingURL=03-promises.03b5cf86.js.map
