function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,p=function(){return l.Date.now()};function g(e,t,n){var r,o,i,a,u,f,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,u=setTimeout(O,t),l?y(e):a}function F(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function O(){var e=p();if(F(e))return T(e);u=setTimeout(O,function(e){var n=t-(e-f);return s?d(n,i-(e-c)):n}(e))}function T(e){return u=void 0,g&&r?y(e):(r=o=void 0,a)}function j(){var e=p(),n=F(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(O,t),y(f)}return void 0===u&&(u=setTimeout(O,t)),a}return t=b(t)||0,v(n)&&(l=!!n.leading,i=(s="maxWait"in n)?m(b(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),j.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=o=u=void 0},j.flush=function(){return void 0===u?a:T(p())},j}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};const y={},S={inputFormFeedback:document.querySelector(".feedback-form"),inputFormEmail:document.querySelector('[type="email"]'),inputFormMessage:document.querySelector('[name="message"]'),inputFormSubmitBtn:document.querySelector('[type="submit"]')};S.inputFormFeedback.addEventListener("submit",(function(e){console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),e.preventDefault();const t=e.currentTarget.elements,n=t.email.value,r=t.message.value;""!==n&&""!==r||alert("Все поля ввода должны быть заполнены. Исправьте, пожалуйста.");e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),S.inputFormFeedback.addEventListener("input",e(t)((function(e){y[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(y))}),500)),function(){const e=localStorage.getItem("feedback-form-state");e&&(S.inputFormEmail.value=JSON.parse(e).email,S.inputFormMessage.value=JSON.parse(e).message)}();
//# sourceMappingURL=03-feedback.34a81f8a.js.map
