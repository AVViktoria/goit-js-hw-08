!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,p=Math.max,v=Math.min,g=function(){return d.Date.now()};function b(e,t,n){var r,o,u,a,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function b(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function F(e){return c=e,f=setTimeout(j,t),s?b(e):a}function O(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function j(){var e=g();if(O(e))return T(e);f=setTimeout(j,function(e){var n=t-(e-l);return d?v(n,u-(e-c)):n}(e))}function T(e){return f=void 0,m&&r?b(e):(r=o=void 0,a)}function h(){var e=g(),n=O(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return F(l);if(d)return f=setTimeout(j,t),b(l)}return void 0===f&&(f=setTimeout(j,t)),a}return t=S(t)||0,y(n)&&(s=!!n.leading,u=(d="maxWait"in n)?p(S(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},h.flush=function(){return void 0===f?a:T(g())},h}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=a.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:r,maxWait:t,trailing:o})};var F,O="feedback-form-state",j={},T={inputFormFeedback:document.querySelector(".feedback-form"),inputFormEmail:document.querySelector('[type="email"]'),inputFormMessage:document.querySelector('[name="message"]'),inputFormSubmitBtn:document.querySelector('[type="submit"]')};T.inputFormFeedback.addEventListener("submit",(function(e){console.log(JSON.parse(localStorage.getItem(O))),e.preventDefault();var t=e.currentTarget.elements,n=t.email.value,r=t.message.value;""!==n&&""!==r||alert("Все поля ввода должны быть заполнены. Исправьте, пожалуйста.");e.currentTarget.reset(),localStorage.removeItem(O)})),T.inputFormFeedback.addEventListener("input",e(t)((function(e){j[e.target.name]=e.target.value,localStorage.setItem(O,JSON.stringify(j))}),500)),(F=localStorage.getItem(O))&&(T.inputFormEmail.value=JSON.parse(F).email,T.inputFormMessage.value=JSON.parse(F).message)}();
//# sourceMappingURL=03-feedback.da0c5d06.js.map
