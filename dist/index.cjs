var n=function(n,t){document.addEventListener(n,t)},t=function(n,t){document.removeEventListener(n,t)},e=function(n,t){window.addEventListener(n,t)},o=function(n,t){window.removeEventListener(n,t)},i=function(n,t,e){n.addEventListener(t,e)},c=function(n,t,e){n.removeEventListener(t,e)};exports.events={document:{__proto__:null,on:n,off:t,once:function(e,o){n(e,function n(i){o(i),t(e,n)})},trigger:function(n){var t=new CustomEvent(n);document.dispatchEvent(t)}},window:{__proto__:null,on:e,off:o,once:function(n,t){e(n,function e(i){t(i),o(n,e)})},trigger:function(n){var t=new CustomEvent(n);window.dispatchEvent(t)}},element:{__proto__:null,on:i,off:c,once:function(n,t,e){i(n,t,function o(i){e(i),c(n,t,o)})},trigger:function(n,t){var e=new CustomEvent(t);n.dispatchEvent(e)}}};
//# sourceMappingURL=index.cjs.map
