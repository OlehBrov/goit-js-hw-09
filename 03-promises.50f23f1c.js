function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire7bc7;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequire7bc7=o);var i=o("7Y9D8");e(i).Notify.init({fontSize:"18px"});const u=document.querySelector(".form"),l=document.querySelector("button");let a={amount:0,delay:0,step:0},d=null,s=0,f=0,c=0,m=0,p=0;function y(t,n){let r=0;0===a.amount&&0===a.delay&&0===a.step&&(r=n,c=t-1,s=n),setTimeout((()=>new Promise(((n,r)=>{const o=Math.random()>.3;c+=1,m=Number(a.step),o?n(e(i).Notify.success(`✅ Fulfilled promise ${c} in ${s+m*p}ms`)):r(e(i).Notify.warning(`❌ Rejected promise ${c} in ${s+m*p}ms`)),p+=1,c!==Number(a.amount)&&c!==t||clearInterval(d)}))),r)}u.addEventListener("input",(function(e){a[e.target.name]=e.target.value})),l.addEventListener("click",(function(e){e.preventDefault(),setTimeout((()=>{s=Number(a.delay),f=Number(a.step),y(0,f),d=setInterval((()=>{delay=Number(a.step),y(0,delay)}),Number(a.step))}),Number(a.delay))}));
//# sourceMappingURL=03-promises.50f23f1c.js.map