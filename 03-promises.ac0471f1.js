!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequire7bc7;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var l={id:e,exports:{}};return n[e]=l,t.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequire7bc7=t),t("6JpON"),refs={form:document.querySelector(".form"),submitBtn:document.querySelector("button")};var l={},r=1,i=null,c=null;function a(e,n){Math.random()>.3?console.log("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):console.log("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}refs.form.addEventListener("input",(function(e){l[e.target.name]=e.target.value,console.log(l.delay)})),refs.submitBtn.addEventListener("click",(function(e){e.preventDefault(),i=setTimeout((function(){a(r,l.step),r+=1,clearTimeout(i)}),l.delay),l.amount===r&&clearInterval(c);c=setInterval((function(){}),l.step)})),console.log(l),console.log(l.delay)}();
//# sourceMappingURL=03-promises.ac0471f1.js.map