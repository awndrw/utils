!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((n||self).utils={})}(this,function(n){var e=function(n,e){document.addEventListener(n,e)},t=function(n,e){document.removeEventListener(n,e)},o=function(n,e){window.addEventListener(n,e)},i=function(n,e){window.removeEventListener(n,e)},f=function(n,e,t){n.addEventListener(e,t)},u=function(n,e,t){n.removeEventListener(e,t)};n.events={document:{__proto__:null,on:e,off:t,once:function(n,o){e(n,function e(i){o(i),t(n,e)})},trigger:function(n){var e=new CustomEvent(n);document.dispatchEvent(e)}},window:{__proto__:null,on:o,off:i,once:function(n,e){o(n,function t(o){e(o),i(n,t)})},trigger:function(n){var e=new CustomEvent(n);window.dispatchEvent(e)}},element:{__proto__:null,on:f,off:u,once:function(n,e,t){f(n,e,function o(i){t(i),u(n,e,o)})},trigger:function(n,e){var t=new CustomEvent(e);n.dispatchEvent(t)}}}});
//# sourceMappingURL=index.umd.js.map
